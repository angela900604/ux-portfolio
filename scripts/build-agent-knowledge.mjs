#!/usr/bin/env node
/**
 * Builds the Ask Angela knowledge base from:
 * - Resume PDFs in content/agent/source-resumes/
 * - Full case study / research / about TSX page copy
 * - Structured site metadata (aside meta, experience, homepage work grid)
 *
 * Run: node scripts/build-agent-knowledge.mjs
 * Hooked into `npm run build` via prebuild.
 */

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "lib", "generated");
const OUT_FILE = path.join(OUT_DIR, "agent-knowledge.ts");
const RESUME_DIR = path.join(ROOT, "content", "agent", "source-resumes");

const MAX_CHARS_PER_PAGE = 12_000;
const MAX_TOTAL_CHARS = 180_000;

const RESUME_FILES = [
  {
    id: "ux-design-resume",
    label: "UX Design Resume (Product Design)",
    file: "ux-design-resume.pdf",
  },
  {
    id: "marketing-design-cv",
    label: "Marketing & Design CV",
    file: "marketing-design-cv.pdf",
  },
];

const PAGE_GLOBS = [
  "app/case-studies/**/page.tsx",
  "app/user-research-journey/page.tsx",
  "app/competitor-analysis/**/*.tsx",
  "app/multisegment-interviews/**/*.tsx",
  "app/accessibility-voiceover/**/*.tsx",
  "app/(marketing)/about/**/*.tsx",
];

const SKIP_PATH_PARTS = [
  "/_components/",
  "/[slug]/",
  "node_modules",
];

/** @param {string} dir @param {string[]} acc */
function walkTsx(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
      walkTsx(full, acc);
    } else if (entry.name.endsWith(".tsx")) {
      acc.push(full);
    }
  }
  return acc;
}

/** @returns {string[]} */
function collectSourceFiles() {
  const files = new Set();
  for (const rel of [
    "app/case-studies",
    "app/user-research-journey",
    "app/competitor-analysis",
    "app/multisegment-interviews",
    "app/accessibility-voiceover",
    path.join("app", "(marketing)", "about"),
  ]) {
    for (const f of walkTsx(path.join(ROOT, rel))) {
      files.add(f);
    }
  }
  return [...files]
    .filter((f) => !SKIP_PATH_PARTS.some((p) => f.includes(p)))
    .filter((f) => !f.endsWith(`${path.sep}layout.tsx`))
    .filter((f) => !f.endsWith("[slug]/page.tsx"))
    .sort();
}

/** @param {string} text */
function normalizeWhitespace(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

/** @param {string} s */
function isLikelyProse(s) {
  const t = s.trim();
  if (t.length < 24) return false;
  if (/^[\d\s./:#%-]+$/.test(t)) return false;
  if (/^(text-|bg-|border-|flex |grid |min-|max-|sm:|md:|lg:|xl:|hover:|focus:)/.test(t))
    return false;
  if (/^(\/|https?:|#|[a-z-]+(?:\/[a-z-]+)+)/i.test(t) && t.length < 80) return false;
  if (/^[\w./-]+\.(png|jpg|jpeg|webp|svg|mov|mp4|tsx?|css)$/i.test(t)) return false;
  if (/^case-studies\//.test(t)) return false;
  if (/className|import |export |function |const |return /.test(t)) return false;
  const words = t.split(/\s+/).length;
  if (words < 4 && t.length < 40) return false;
  return true;
}

/** @param {string} source */
function extractMetadata(source) {
  const title =
    source.match(/title:\s*\n?\s*["'`]([\s\S]*?)["'`]\s*,/m)?.[1] ??
    source.match(/title:\s*["'`]([^"'`]+)["'`]/)?.[1];
  const description =
    source.match(/description:\s*\n?\s*["'`]([\s\S]*?)["'`]\s*,/m)?.[1] ??
    source.match(/description:\s*["'`]([^"'`]+)["'`]/)?.[1];
  return { title: title?.trim(), description: description?.trim() };
}

/** @param {string} source */
function extractStringLiterals(source) {
  const cleaned = source
    .replace(/^import[\s\S]*?from\s+["'][^"']+["'];?\s*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");

  const found = new Set();

  // Template-ish concatenations: "text" {" "} "more"
  const quoted =
    /"((?:\\.|[^"\\])*)"|'((?:\\.|[^'\\])*)'|`((?:\\.|[^`\\])*)`/g;
  let m;
  while ((m = quoted.exec(cleaned)) !== null) {
    const raw = m[1] ?? m[2] ?? m[3] ?? "";
    const unescaped = raw
      .replace(/\\n/g, "\n")
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"');
    if (isLikelyProse(unescaped)) found.add(unescaped.trim());
  }

  return [...found];
}

/** @param {string} filePath */
function extractPageKnowledge(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
  const meta = extractMetadata(source);
  const literals = extractStringLiterals(source);
  let body = literals.join("\n\n");
  body = normalizeWhitespace(body);
  if (body.length > MAX_CHARS_PER_PAGE) {
    body = `${body.slice(0, MAX_CHARS_PER_PAGE)}\n\n[…truncated for agent context]`;
  }

  const lines = [`## Page source: ${rel}`];
  if (meta.title) lines.push(`Title: ${meta.title}`);
  if (meta.description) lines.push(`Description: ${meta.description}`);
  if (body) lines.push("", body);
  return lines.join("\n");
}

/** @param {string} filePath @param {string} heading */
function extractStructuredTs(filePath, heading) {
  if (!fs.existsSync(filePath)) return "";
  const source = fs.readFileSync(filePath, "utf8");
  const literals = extractStringLiterals(source);
  const body = normalizeWhitespace(literals.join("\n\n"));
  return `## ${heading}\n\n${body}`;
}

/** @param {string} pdfPath */
async function extractPdfText(pdfPath) {
  const buffer = fs.readFileSync(pdfPath);
  const data = await pdf(buffer);
  return normalizeWhitespace(data.text ?? "");
}

/** @param {string} s */
function escapeForTemplate(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

async function main() {
  const sections = [];

  sections.push(
    `# Auto-generated knowledge (${new Date().toISOString().slice(0, 10)})\n\nThis section is rebuilt on each deploy from resume PDFs and live site page source.`,
  );

  sections.push("## Resume — extracted from PDFs\n");
  for (const resume of RESUME_FILES) {
    const pdfPath = path.join(RESUME_DIR, resume.file);
    if (!fs.existsSync(pdfPath)) {
      console.warn(`Missing resume PDF: ${pdfPath}`);
      continue;
    }
    const text = await extractPdfText(pdfPath);
    sections.push(`### ${resume.label}\n\n${text}`);
    console.log(`Extracted ${resume.label}: ${text.length} chars`);
  }

  sections.push(
    extractStructuredTs(
      path.join(ROOT, "lib/case-study-aside-meta.ts"),
      "Case study sidebar metadata (all projects)",
    ),
  );
  sections.push(
    extractStructuredTs(
      path.join(ROOT, "lib/about-experience.ts"),
      "About page experience timeline",
    ),
  );
  sections.push(
    extractStructuredTs(
      path.join(ROOT, "lib/marketing-work.ts"),
      "Homepage selected work grid",
    ),
  );

  sections.push("## Full case study & research page copy\n");
  const pageFiles = collectSourceFiles();
  for (const file of pageFiles) {
    sections.push(extractPageKnowledge(file));
    console.log(`Extracted page: ${path.relative(ROOT, file)}`);
  }

  let knowledge = sections.filter(Boolean).join("\n\n---\n\n");
  if (knowledge.length > MAX_TOTAL_CHARS) {
    knowledge = `${knowledge.slice(0, MAX_TOTAL_CHARS)}\n\n[…knowledge base truncated at ${MAX_TOTAL_CHARS} chars]`;
    console.warn(`Truncated knowledge base to ${MAX_TOTAL_CHARS} chars`);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const out = `/** AUTO-GENERATED by scripts/build-agent-knowledge.mjs — do not edit manually. */\nexport const GENERATED_AGENT_KNOWLEDGE = \`${escapeForTemplate(knowledge)}\`;\n`;
  fs.writeFileSync(OUT_FILE, out, "utf8");
  console.log(`Wrote ${OUT_FILE} (${knowledge.length} chars)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

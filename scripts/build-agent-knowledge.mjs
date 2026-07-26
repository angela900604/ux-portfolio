#!/usr/bin/env node
/**
 * Builds the Ask Angela static knowledge base from:
 * - Resume PDFs in content/agent/source-resumes/
 * - Structured site metadata (aside meta, experience, homepage work grid)
 * - Live rendered HTML snapshot of all case study + research pages (fallback)
 *
 * Runtime /api/ask refreshes live crawl hourly; this snapshot covers cold starts / failures.
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
const CRAWL_ROUTES = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content/agent/crawl-routes.json"), "utf8"),
);

const MAX_CHARS_PER_ROUTE = 14_000;
const MAX_STATIC_CHARS = 80_000;
const MAX_LIVE_FALLBACK_CHARS = 120_000;
const FETCH_TIMEOUT_MS = 12_000;

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

function getCrawlBaseUrl() {
  const explicit = process.env.SITE_CRAWL_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  return "https://www.ycnangelayang.com";
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
function extractStringLiterals(source) {
  const cleaned = source
    .replace(/^import[\s\S]*?from\s+["'][^"']+["'];?\s*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");

  const found = new Set();
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

/** @param {string} html */
function htmlToAgentText(html) {
  let chunk = html;
  const mainMatch = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch?.[1]) chunk = mainMatch[1];

  chunk = chunk
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");

  return normalizeWhitespace(chunk);
}

/** @param {string} baseUrl @param {string} route */
async function fetchRouteText(baseUrl, route) {
  const url = `${baseUrl}${route}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "text/html",
        "User-Agent": "AngelaPortfolioAgent/1.0 (build-time knowledge crawl)",
      },
    });
    if (!response.ok) {
      console.warn(`Live crawl failed (${response.status}): ${url}`);
      return null;
    }
    let text = htmlToAgentText(await response.text());
    if (text.length > MAX_CHARS_PER_ROUTE) {
      text = `${text.slice(0, MAX_CHARS_PER_ROUTE)}\n[…truncated]`;
    }
    return { route, text };
  } catch (error) {
    console.warn(`Live crawl error for ${url}:`, error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/** @param {string} baseUrl */
async function crawlLiveSite(baseUrl) {
  const results = await Promise.all(
    CRAWL_ROUTES.map((route) => fetchRouteText(baseUrl, route)),
  );
  const sections = results
    .filter((entry) => entry?.text?.trim())
    .map(
      ({ route, text }) =>
        `### Live page: ${route}\n\nURL: ${baseUrl}${route}\n\n${text}`,
    );

  if (sections.length === 0) return "";

  return [
    `## Live rendered site snapshot (${baseUrl})`,
    `Crawled ${sections.length} routes at build time`,
    "",
    sections.join("\n\n---\n\n"),
  ].join("\n");
}

/** @param {string} s */
function escapeForTemplate(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

async function main() {
  const sections = [];

  sections.push(
    `# Static knowledge (${new Date().toISOString().slice(0, 10)})\n\nResumes and structured metadata. Case study copy comes from live site crawl (refreshed at request time; build-time snapshot is fallback).`,
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

  let staticKnowledge = sections.filter(Boolean).join("\n\n---\n\n");
  if (staticKnowledge.length > MAX_STATIC_CHARS) {
    staticKnowledge = `${staticKnowledge.slice(0, MAX_STATIC_CHARS)}\n\n[…static knowledge truncated]`;
    console.warn(`Truncated static knowledge to ${MAX_STATIC_CHARS} chars`);
  }

  const crawlBase = getCrawlBaseUrl();
  console.log(`Crawling live site for fallback snapshot: ${crawlBase}`);
  let liveFallback = await crawlLiveSite(crawlBase);
  if (liveFallback.length > MAX_LIVE_FALLBACK_CHARS) {
    liveFallback = `${liveFallback.slice(0, MAX_LIVE_FALLBACK_CHARS)}\n\n[…live fallback truncated]`;
    console.warn(`Truncated live fallback to ${MAX_LIVE_FALLBACK_CHARS} chars`);
  }
  console.log(`Live fallback: ${liveFallback.length} chars from ${CRAWL_ROUTES.length} routes`);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const out = `/** AUTO-GENERATED by scripts/build-agent-knowledge.mjs — do not edit manually. */
export const GENERATED_AGENT_KNOWLEDGE = \`${escapeForTemplate(staticKnowledge)}\`;

/** Build-time live HTML snapshot — used when runtime crawl fails. */
export const GENERATED_LIVE_SITE_FALLBACK = \`${escapeForTemplate(liveFallback)}\`;
`;
  fs.writeFileSync(OUT_FILE, out, "utf8");
  console.log(
    `Wrote ${OUT_FILE} (static ${staticKnowledge.length} chars, live fallback ${liveFallback.length} chars)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

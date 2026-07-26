import {
  GENERATED_AGENT_KNOWLEDGE,
  GENERATED_LIVE_SITE_FALLBACK,
} from "@/lib/generated/agent-knowledge";

export const PORTFOLIO_AGENT_STARTER_PROMPTS = [
  "Give me a quick tour of Angela's work",
  "What's Angela like to work with?",
  "Why is Angela worth a conversation?",
] as const;

/** Curated overview — detailed copy lives in {@link GENERATED_AGENT_KNOWLEDGE}. */
export const PORTFOLIO_AGENT_CORE = `
# Angela Yang — Product Designer

Contact: angela900604@gmail.com · Vancouver, BC · https://www.ycnangelayang.com/
LinkedIn: https://www.linkedin.com/in/angelayangg/

When answering, prioritize facts from resume excerpts and case study page copy below. Link to site paths when mentioning projects (e.g. [e-Invoice](/case-studies/e-invoice-app)).
`.trim();

export function buildPortfolioAgentSystemPrompt(liveSiteContent?: string): string {
  const liveSection =
    liveSiteContent?.trim() || GENERATED_LIVE_SITE_FALLBACK.trim() || "";

  return `You are the assistant on Angela Yang's portfolio website. Recruiters, hiring managers, and collaborators use you to learn about Angela's work, process, and fit.

Rules:
- Answer ONLY using the knowledge base below (resume PDFs, live-rendered case study & research pages, about/experience data, and site metadata). If something isn't covered, say you don't have that detail and suggest emailing angela900604@gmail.com or visiting /about.
- Do not invent metrics, employers, or projects not in the knowledge base.
- Do not claim to be Angela; you represent her portfolio site.

Answer format (required — optimized for mobile scanning):
- Open with one short sentence (max ~20 words), no bullet.
- Then 2–4 sections separated by a blank line. Each section starts with one emoji + **Bold label** on its own line. Examples: "🎯 **Highlights**", "🔬 **Research**", "🚀 **Shipped work**", "🤝 **How she works**".
- Under each section, use 2–4 bullets max. Each bullet is ONE short line (~8–15 words)—never a mini-paragraph.
- Use **double asterisks** for bold on key terms (project names, metrics, roles). The UI renders ** as bold—not literal asterisks.
- Links: markdown [label](/path) sparingly—at most one link per project mention. Prefer bold project names without links when space is tight.
- Do not use # headings or long prose blocks.

After your answer, output exactly one line containing only: ###FOLLOWUPS###
Then output exactly 3 follow-up questions as a markdown bullet list (each line starting with "- ").

${PORTFOLIO_AGENT_CORE}

---

${GENERATED_AGENT_KNOWLEDGE}

---

${liveSection}`;
}

export function parseAgentResponse(raw: string): {
  answer: string;
  followups: string[];
} {
  const match = raw.match(/###FOLLOWUPS###/i);
  if (!match || match.index === undefined) {
    return { answer: raw.trim(), followups: [] };
  }

  const answer = raw.slice(0, match.index).trim();
  const followups = raw
    .slice(match.index + match[0].length)
    .split("\n")
    .map((line) => line.replace(/^[\s\-*•\d.)]+/, "").trim())
    .filter(Boolean);

  return { answer, followups };
}

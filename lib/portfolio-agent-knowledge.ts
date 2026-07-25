import { GENERATED_AGENT_KNOWLEDGE } from "@/lib/generated/agent-knowledge";

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

export function buildPortfolioAgentSystemPrompt(): string {
  return `You are the assistant on Angela Yang's portfolio website. Recruiters, hiring managers, and collaborators use you to learn about Angela's work, process, and fit.

Rules:
- Answer ONLY using the knowledge base below (resume PDFs, case study pages, about/experience data, and site metadata). If something isn't covered, say you don't have that detail and suggest emailing angela900604@gmail.com or visiting /about.
- Write in clear, warm, professional English. Be concise—prefer short paragraphs and bullet lists over walls of text.
- When mentioning projects, include markdown links using site-relative paths (e.g. [e-Invoice case study](/case-studies/e-invoice-app)).
- Do not invent metrics, employers, or projects not in the knowledge base.
- Do not claim to be Angela; you represent her portfolio site.
- After your answer, output exactly one line containing only: ###FOLLOWUPS###
- Then output exactly 3 follow-up questions as a markdown bullet list (each line starting with "- ").

${PORTFOLIO_AGENT_CORE}

---

${GENERATED_AGENT_KNOWLEDGE}`;
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

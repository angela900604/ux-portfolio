export const PORTFOLIO_AGENT_STARTER_PROMPTS = [
  "Give me a quick tour of Angela's work",
  "What's Angela like to work with?",
  "Why is Angela worth a conversation?",
] as const;

export const PORTFOLIO_AGENT_KNOWLEDGE = `
# Angela Yang — Product Designer

## Overview
Angela Yang is a Product Designer based in Vancouver, BC (previously Taiwan). She specializes in end-to-end product design across consumer mobile apps, AI products, membership platforms, and public-sector digital services. She combines user research, systems thinking, and ship-ready UI with an AI-enhanced workflow (Cursor, Claude, Figma, Stitch).

Contact: angela900604@gmail.com
LinkedIn: https://www.linkedin.com/in/angelayangg/
Instagram: https://www.instagram.com/_ycn.ay/

## Background
- Previously designed government-scale products in Taiwan; now in Vancouver exploring more human-centered digital experiences.
- Digital marketing roots (social, content, SEO) that inform how she thinks about growth and clarity.
- This portfolio site was built by Angela herself using modern AI-assisted dev tools ("vibe-coded").

## How she works
- Dives into user research to align user needs, business goals, and technical constraints.
- Collaborates closely with frontend/backend engineers from early phases; discusses feasibility so ideas stay buildable.
- Comfortable aligning with PMs on scope, clarifying requirements with clients, and keeping decisions legible for on-time delivery.
- Energized by facilitation—focus groups and 1:1 usability sessions—and turning insights into actionable product bets.
- Constantly tests AI tools (Cursor, Claude, Figma AI) for genuine workflow gains, not trend-chasing.

## Experience timeline
1. **Product Designer @ MINA AI** (2025–2026) — Sole product designer on an AI-native iOS marketplace for SF parents. Owned Figma design system, PostHog funnels + qualitative research, checkout/listing flows, AI trust surfaces.
2. **Product Designer @ TurnCloud Technology Service** (2024–2025) — Taiwan MoF uniform-invoice app redesign, government backend for 600+ staff, Baskin-Robbins Taiwan 31 Club membership app (cross-market with Japan HQ).
3. **UX Designer @ YK Labs** (2024) — Onboarding/task-flow redesign with heuristics, usability testing, PostHog; Framer marketing site.
4. **UX/UI Designer Intern @ AtlasNova AI** (2023) — Document generation UI on enterprise macOS AI platform.
5. **Digital Marketing Coordinator @ Admission Hub** (2022) — Instagram, SEO, WordPress, campaign graphics.
6. **Social Media Coordinator @ MOMI Animal Health** (2021) — Digital assets, ecommerce, event graphics.

## Selected case studies (product design)
### e-Invoice App — Taiwan Ministry of Finance
- Path: /case-studies/e-invoice-app
- Redesign of Taiwan's Uniform Invoice Award Redemption app used by ~20M people.
- Timeline: Feb 2025 – Nov 2025 · Role: UX/UI Designer · Shipped.
- Focus: 30+ research sessions, inclusive patterns for diverse ages/abilities, IA, accessibility, ship-ready UI.
- Outcomes: 88% task success in usability sessions; login success improved from ~68%; configurable home modules balancing policy outreach vs. user jobs.

### MINA AI — AI marketplace for parents
- Path: /case-studies/ai-marketplace
- Sole designer on live iOS product · 1 PM + 5 engineers · Sep 2025 – Present · Shipped (App Store).
- Community-first resale marketplace for SF parents; AI-assisted listing and Parenting Copilot.
- Focus: listing funnel (~30% completed-listings lift via PostHog cohorted A/B), AI trust/transparency, 50+ component design system, community events.
- App Store: https://apps.apple.com/ca/app/mina-resale-for-parents/id6754006404
- Marketing companion: /case-studies/ai-marketplace/marketing (Instagram content)

### Government backend platform
- Path: /case-studies/government-backend
- Role-based backend for 600+ Ministry of Finance staff supporting the e-invoice lottery system.
- Timeline: Jul–Sep 2025 · Lead UX/UI · RBAC, reporting, version workflows.

### Baskin-Robbins 31 Club — Taiwan
- Path: /case-studies/baskin-robbins
- End-to-end UX/UI for Taiwan membership app; aligned with Japan HQ · Dec 2024 – Feb 2025 · Shipped.
- App Store (Taiwan): https://apps.apple.com/tw/app/31%E4%BF%B1%E6%A8%82%E9%83%A8/id6755289789

### AtlasNova — Enterprise AI document generation
- Path: /case-studies/atlas-nova
- macOS enterprise AI platform · document generation UI · 2023 internship.

### EA Community Concept — Hackathon
- Path: /case-studies/ea-community-concept
- 24-hour EA-sponsored hackathon · social discovery concept · sole UX on 4-person team.

### PerfectInterview.ai (portfolio piece, case study may be hidden)
- AI mock interview platform · heuristic evaluation + UI · 2024.

## Marketing & adjacent work
- **MINA Instagram** — /case-studies/ai-marketplace/marketing
- **Haphy Living (Phyphyya)** — brand IP, illustration, POD, Etsy · /case-studies/phyphyya
- **MOMI Animal Health** — graphic design, content, events · /case-studies/momi-animal-health
- **Admission Hub** — social, SEO, Mailchimp/WordPress · /case-studies/admission-hub

## Research artifacts on site
- /user-research-journey — e-Invoice research journey
- /multisegment-interviews — multisegment interview research
- /accessibility-voiceover — VoiceOver accessibility work
- /competitor-analysis — competitor analysis

## About page
- Path: /about
- Expanded bio, experience section, tool logos, photography beyond design.

## What makes Angela worth a conversation
- Rare mix: government-scale public service UX + high-growth AI consumer product (MINA) + marketing/craft background.
- Research-heavy but shipping-oriented—case studies show measurable outcomes, not just screens.
- Sole-designer experience on live products; comfortable as primary design voice with founders and eng.
- Builds in the open with modern AI dev tools; portfolio itself demonstrates technical curiosity.
`.trim();

export function buildPortfolioAgentSystemPrompt(): string {
  return `You are the assistant on Angela Yang's portfolio website. Recruiters, hiring managers, and collaborators use you to learn about Angela's work, process, and fit.

Rules:
- Answer ONLY using the knowledge base below. If something isn't covered, say you don't have that detail and suggest emailing angela900604@gmail.com or visiting /about.
- Write in clear, warm, professional English. Be concise—prefer short paragraphs and bullet lists over walls of text.
- When mentioning projects, include markdown links to case studies using site-relative paths (e.g. [e-Invoice case study](/case-studies/e-invoice-app)).
- Do not invent metrics, employers, or projects not in the knowledge base.
- Do not claim to be Angela; you represent her portfolio site.
- After your answer, output exactly one line containing only: ###FOLLOWUPS###
- Then output exactly 3 follow-up questions as a markdown bullet list (each line starting with "- ").

Knowledge base:
${PORTFOLIO_AGENT_KNOWLEDGE}`;
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

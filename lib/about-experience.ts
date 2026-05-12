/**
 * About page Experience — aligned with resume work history; condensed (not every bullet).
 */
export type AboutExperienceRow = {
  title: string;
  company: string;
  dates: string;
  description: string;
};

export const ABOUT_EXPERIENCE: readonly AboutExperienceRow[] = [
  {
    title: "Product Designer (fixed-term contract, concurrent)",
    company: "MINA AI · Early-stage AI marketplace",
    dates: "Sep 2025 – Present · San Francisco, CA (remote)",
    description:
      "Sole IC product designer: owned the Figma design system end-to-end, paired qualitative research with PostHog funnels to sharpen seller jobs-to-be-done, and redesigned checkout and listing flows (completed listings up ~30%). Shipped high-fidelity flows for AI-assisted features with emphasis on control, transparency, and edge cases; helped define MVP scope and priorities with founders as the primary design voice.",
  },
  {
    title: "Product Designer (permanent full-time, concurrent through Nov 2025)",
    company: "TurnCloud Technology Service · Mobile, web, government & consumer",
    dates: "Jul 2024 – Nov 2025 · Taipei, Taiwan (on-site)",
    description:
      "Shipped complex consumer and public-sector work: led UX for Taiwan’s Ministry of Finance uniform-invoice app (auth redesign tied to missed prize redemptions falling from 24% to 18%), inclusive patterns for a diverse user base grounded in 30+ research sessions, and leadership-ready journey and IA artifacts. Built a 50+ component design system for a B2B CRM; sole designer on a 0→1 government backend platform; led the Baskin-Robbins Taiwan membership app with cross-market alignment to Japan HQ.",
  },
  {
    title: "UX Designer (fixed-term contract)",
    company: "YK Labs · AI interview prep (PerfectInterview.ai)",
    dates: "Feb 2024 – Jun 2024 · Los Angeles, CA (remote)",
    description:
      "Improved core funnel completion (~35% lift on full mock interview completions) by redesigning onboarding and task flow, backed by heuristics, usability testing, and PostHog. Launched a responsive marketing site in Framer to clarify the product before signup.",
  },
] as const;

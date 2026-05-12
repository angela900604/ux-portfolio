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
    title: "Product Designer",
    company: "MINA AI",
    dates: "Sep 2025 – Present",
    description:
      "Sole product designer that owned the Figma design system end-to-end, paired qualitative research with PostHog funnels to sharpen seller jobs-to-be-done, and redesigned checkout and listing flows. Shipped high-fidelity flows for AI-assisted features with emphasis on control, transparency, and edge cases; helped define MVP scope and priorities with founders as the primary design voice.",
  },
  {
    title: "Product Designer",
    company: "TurnCloud Technology Service",
    dates: "Jul 2024 – Nov 2025",
    description:
      "Shipped complex consumer and public-sector work: led UX for Taiwan’s Ministry of Finance uniform-invoice app, inclusive patterns for a diverse user base grounded in 30+ research sessions, and leadership-ready journey and IA artifacts. Led the Baskin-Robbins Taiwan membership app with cross-market alignment to Japan HQ.",
  },
  {
    title: "UX Designer",
    company: "YK Labs",
    dates: "Feb 2024 – Jun 2024",
    description:
      "Improved core funnel completion by redesigning onboarding and task flow, backed by heuristics, usability testing, and PostHog. Launched a responsive marketing site in Framer to clarify the product before signup.",
  },
  {
    title: "UX/UI Designer Intern",
    company: "AtlasNova AI",
    dates: "Oct 2023 – Jun 2024",
    description:
      "AtlasNova is an enterprise AI SaaS platform: tailored multi-modal solutions trained on each client’s own encrypted data, processing email, sales decks, meeting and phone recordings, charts, and video. I contributed mockups and UI flows.",
  },
] as const;

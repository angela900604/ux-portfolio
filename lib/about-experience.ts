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
    title: "Marketing Design & Operations",
    company: "Precise Pipe Inc.",
    dates: "2026 – Present",
    description:
      "Lead two graphic designers on brand for a B2B industrial company — flyers, one-pagers, trade-show booths, and digital marketing. Assign work by product type so each designer owns the piece from brief to the client.",
  },
  {
    title: "Product Designer",
    company: "MINA AI",
    dates: "2025 – 2026",
    description:
      "Sole product designer. Redesigned listing flows (+30% completed listings) and owned a 50+ component Figma design system.",
  },
  {
    title: "Product Designer",
    company: "TurnCloud Technology Service",
    dates: "2024 – 2025",
    description:
      "UX for Taiwan’s Ministry of Finance invoice app (30+ research sessions) and the Baskin-Robbins Taiwan membership app, aligned with Japan HQ.",
  },
  {
    title: "Marketing & Operations Specialist",
    company: "T-Drum Enterprise Co. Ltd",
    dates: "2024",
    description:
      "Managed 40–50 daily supplier communications across email and phone, resolving specifications, billing, and ordering issues while building reliable overseas vendor relationships.",
  },
  {
    title: "UX Designer",
    company: "YK Labs",
    dates: "2024",
    description:
      "Redesigned onboarding and task flow; launched a Framer marketing site so the product was clear before signup.",
  },
  {
    title: "UX/UI Designer Intern",
    company: "AtlasNova AI",
    dates: "2023",
    description:
      "UX/UI for AI-assisted document generation on AtlasNova’s macOS platform — onboarding, split-pane workspace, and status patterns.",
  },
  {
    title: "Digital Marketing Coordinator",
    company: "Admission Hub",
    dates: "2022",
    description:
      "Rebuilt Instagram around life-in-Canada storytelling (+61% followers in 3 months) and grew website traffic +18% with SEO.",
  },
  {
    title: "Social Media Coordinator & Administrative Assistant",
    company: "MOMI Animal Health",
    dates: "2021",
    description:
      "Social and ecommerce graphics for launches and promos; expo banners and merch so the floor matched the feed.",
  },
] as const;

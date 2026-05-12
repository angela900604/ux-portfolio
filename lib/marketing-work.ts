/**
 * Homepage / prev-next order — flagship → core → adjacent (matches CaseStudyPrevNext).
 */
export type WorkCover =
  | { kind: "e-invoice" }
  | { kind: "mina" }
  | { kind: "image"; src: string };

export type MarketingWorkItem = {
  slug: string;
  href: string;
  title: string;
  /** Short discipline line (Anthonius-style subtitle) */
  discipline: string;
  year: string;
  cover: WorkCover;
  /** One-line systems / craft signal under tags (omit on homepage when unused). */
  techHighlights?: string;
  /** Show green Shipped pill (core product cases) */
  showShipped?: boolean;
  /** Serve cover PNG without Next image optimizer (full quality) */
  coverUnoptimized?: boolean;
};

const GOV_COVER = `/case-studies/government-backend/${encodeURIComponent("rolebased backend cover.png")}`;

/** Homepage e-invoice card + case-study left-rail tag (keep in sync). */
export const E_INVOICE_HOME_DISCIPLINE_TAG =
  "PUBLIC SERVICE · MOBILE APP" as const;
export const E_INVOICE_HOME_TECH_HIGHLIGHTS =
  "Research, IA, accessibility, ship-ready UI" as const;

/** MINA product case — homepage card + left-rail ProjectCardTag (keep in sync). */
export const MINA_HOME_DISCIPLINE_TAG =
  "AI-DRIVEN COMMUNITY · MOBILE APP" as const;

export const MARKETING_SELECTED_WORK: readonly MarketingWorkItem[] = [
  {
    slug: "e-invoice-app",
    href: "/case-studies/e-invoice-app",
    title:
      "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App",
    discipline: E_INVOICE_HOME_DISCIPLINE_TAG,
    year: "2024–2025",
    cover: { kind: "e-invoice" },
    showShipped: true,
  },
  {
    slug: "ai-marketplace",
    href: "/case-studies/ai-marketplace",
    title: "MINA · AI-Powered Marketplace Community for SF Parents",
    discipline: MINA_HOME_DISCIPLINE_TAG,
    year: "2025–2026",
    cover: { kind: "mina" },
    showShipped: true,
  },
  {
    slug: "government-backend",
    href: "/case-studies/government-backend",
    title: "Internal Backend Platform for 600+ government staff",
    discipline: "Responsive · Web · 600+ Users",
    year: "2024–2025",
    cover: { kind: "image", src: GOV_COVER },
    showShipped: true,
  },
  {
    slug: "baskin-robbins",
    href: "/case-studies/baskin-robbins",
    title: "Cross-market with Japan HQ · BR31 Taiwan membership app",
    discipline: "Mobile · Cross-market JP×TW",
    year: "2024–2025",
    cover: { kind: "image", src: "/case-studies/baskin-robbins/home-cover.png" },
    showShipped: true,
  },
  {
    slug: "ai-marketplace/marketing",
    href: "/case-studies/ai-marketplace/marketing",
    title: "MINA · Instagram & launch visuals",
    discipline: "Marketing design · Instagram & launch",
    year: "2025",
    cover: {
      kind: "image",
      src: "/case-studies/mina/cover_minamarketing.png",
    },
    coverUnoptimized: true,
  },
  {
    slug: "phyphyya",
    href: "/case-studies/phyphyya",
    title: "Haphy Living (Brand IP)",
    discipline: "Branding",
    year: "2023–2024",
    cover: { kind: "image", src: "/case-studies/phyphyya/gallery-14.png" },
  },
  {
    slug: "momi-animal-health",
    href: "/case-studies/momi-animal-health",
    title: "MOMI Animal Health",
    discipline: "Digital Marketing",
    year: "2021",
    cover: {
      kind: "image",
      src: "/case-studies/momi-animal-health/home-cover.png",
    },
  },
  {
    slug: "admission-hub",
    href: "/case-studies/admission-hub",
    title: "Admission Hub",
    discipline: "Digital Marketing",
    year: "2022",
    cover: { kind: "image", src: "/case-studies/admission-hub/home-cover.png" },
  },
] as const;

/** Discipline line from the homepage grid for a case-study slug (if listed). */
export function marketingDisciplineForCaseStudySlug(
  slug: string,
): string | undefined {
  return MARKETING_SELECTED_WORK.find((w) => w.slug === slug)?.discipline;
}

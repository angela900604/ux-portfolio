/**
 * Homepage / prev-next order — flagship → core → adjacent (matches CaseStudyPrevNext).
 */
export type WorkCover =
  | { kind: "e-invoice" }
  | { kind: "mina" }
  | { kind: "image"; src: string };

/** Homepage left-rail filter: product vs marketing case cards. */
export type PortfolioWorkFocus = "product" | "marketing";

export type MarketingWorkItem = {
  slug: string;
  href: string;
  title: string;
  /** Used with left-rail “Product design” / “Marketing design” on the home grid. */
  portfolioFocus: PortfolioWorkFocus;
  /** Tag pills under the title (homepage + case-study left rail when merged). */
  disciplineTags: readonly string[];
  year: string;
  cover: WorkCover;
  /** One-line systems / craft signal under tags (omit on homepage when unused). */
  techHighlights?: string;
  /** Show green Shipped pill; optionally override the label text. */
  showShipped?: boolean;
  shippedLabel?: string;
  /** Serve cover PNG without Next image optimizer (full quality) */
  coverUnoptimized?: boolean;
};

const GOV_COVER = `/case-studies/government-backend/${encodeURIComponent("rolebased backend cover.png")}`;

/** e-Invoice homepage + case study — tag pills (keep in sync with case study). */
export const E_INVOICE_HOME_DISCIPLINE_TAGS = [
  "PUBLIC SERVICE application",
  "user research",
] as const;

export const E_INVOICE_HOME_TECH_HIGHLIGHTS =
  "Research, IA, accessibility, ship-ready UI" as const;

/** MINA product case — homepage card + left-rail tags (keep in sync). */
export const MINA_HOME_DISCIPLINE_TAGS = [
  "AI-driven community",
  "Mobile app",
] as const;

export const MARKETING_SELECTED_WORK: readonly MarketingWorkItem[] = [
  {
    slug: "e-invoice-app",
    href: "/case-studies/e-invoice-app",
    portfolioFocus: "product",
    title:
      "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App",
    disciplineTags: ["PUBLIC SERVICE application · user research"],
    year: "2024–2025",
    cover: { kind: "e-invoice" },
    showShipped: true,
    shippedLabel: "end-to-end · launched",
  },
  {
    slug: "ai-marketplace",
    href: "/case-studies/ai-marketplace",
    portfolioFocus: "product",
    title: "MINA · AI-Powered Marketplace Community for SF Parents",
    disciplineTags: ["AI-driven community · Mobile app"],
    year: "2025–2026",
    cover: { kind: "mina" },
    showShipped: true,
    shippedLabel: "end-to-end · launched",
  },
  {
    slug: "government-backend",
    href: "/case-studies/government-backend",
    portfolioFocus: "product",
    title: "Internal Backend Platform for 600+ government staff",
    disciplineTags: ["Responsive · Web · 600+ Users"],
    year: "2024–2025",
    cover: { kind: "image", src: GOV_COVER },
    showShipped: true,
    shippedLabel: "end-to-end · launched",
  },
  {
    slug: "baskin-robbins",
    href: "/case-studies/baskin-robbins",
    portfolioFocus: "product",
    title: "Cross-market with Japan HQ · BR31 Taiwan membership app",
    disciplineTags: ["Mobile · Cross-market JP×TW"],
    year: "2024–2025",
    cover: { kind: "image", src: "/case-studies/baskin-robbins/home-cover.png" },
    showShipped: true,
    shippedLabel: "end-to-end · launched",
  },
  {
    slug: "ai-marketplace/marketing",
    href: "/case-studies/ai-marketplace/marketing",
    portfolioFocus: "marketing",
    title: "MINA · Instagram",
    disciplineTags: ["Content strategy & creation"],
    year: "2025",
    cover: {
      kind: "image",
      src: "/case-studies/mina/cover_minamarketing.png",
    },
    coverUnoptimized: true,
    showShipped: true,
  },
  {
    slug: "phyphyya",
    href: "/case-studies/phyphyya",
    portfolioFocus: "marketing",
    title: "Haphy Living (Brand IP)",
    disciplineTags: ["Branding", "ecommerce"],
    year: "2023–2024",
    cover: { kind: "image", src: "/case-studies/phyphyya/gallery-14.png" },
    showShipped: true,
  },
  {
    slug: "momi-animal-health",
    href: "/case-studies/momi-animal-health",
    portfolioFocus: "marketing",
    title: "MOMI Animal Health",
    disciplineTags: [
      "graphic design",
      "content creation",
      "Event coordination",
      "ecommerce",
    ],
    year: "2021",
    cover: {
      kind: "image",
      src: "/case-studies/momi-animal-health/home-cover.png",
    },
    showShipped: true,
  },
  {
    slug: "admission-hub",
    href: "/case-studies/admission-hub",
    portfolioFocus: "marketing",
    title: "Admission Hub",
    disciplineTags: [
      "Social media management",
      "Content strategy",
      "Copywriting",
      "Search engine optimization",
    ],
    year: "2022",
    cover: { kind: "image", src: "/case-studies/admission-hub/home-cover.png" },
    showShipped: true,
  },
] as const;

/** Tag pills for a case-study slug when it appears on the homepage grid. */
export function marketingDisciplineTagsForCaseStudySlug(
  slug: string,
): readonly string[] | undefined {
  return MARKETING_SELECTED_WORK.find((w) => w.slug === slug)?.disciplineTags;
}

/** Single line for legacy call sites (joined). Prefer {@link marketingDisciplineTagsForCaseStudySlug}. */
export function marketingDisciplineForCaseStudySlug(
  slug: string,
): string | undefined {
  const tags = marketingDisciplineTagsForCaseStudySlug(slug);
  return tags?.join(" · ");
}

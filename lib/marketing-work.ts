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
  /** One-line summary under the title on the homepage grid. */
  description: string;
  /** Used with left-rail “Product design” / “Marketing design” on the home grid. */
  portfolioFocus: PortfolioWorkFocus;
  /** Tag pills under the title (homepage + case-study left rail when merged). */
  disciplineTags: readonly string[];
  year: string;
  cover: WorkCover;
  /** One-line systems / craft signal under tags (omit on homepage when unused). */
  techHighlights?: string;
  /** Show "end-to-end" + "launched" green pills. */
  showShipped?: boolean;
  /** Serve cover PNG without Next image optimizer (full quality) */
  coverUnoptimized?: boolean;
};

const GOV_COVER = `/case-studies/government-backend/${encodeURIComponent("rolebased backend cover.png")}`;
const ATLAS_NOVA_COVER = `/case-studies/atlas-nova/${encodeURIComponent("cover image.png")}`;
const EA_COMMUNITY_COVER = `/case-studies/ea-community-concept/${encodeURIComponent("Community Screen_Interest inserted.png")}`;

/** e-Invoice homepage + case study — tag pills (keep in sync with case study). */
export const E_INVOICE_HOME_DISCIPLINE_TAGS = [
  "Public service application",
  "User research",
] as const;

export const E_INVOICE_HOME_TECH_HIGHLIGHTS =
  "Research, IA, accessibility, ship-ready UI" as const;

/** MINA product case — homepage card + left-rail tags (keep in sync). */
export const MINA_HOME_DISCIPLINE_TAGS = [
  "AI-driven community",
  "Mobile app",
] as const;

/** AtlasNova — homepage card + left-rail tags (keep in sync). */
export const ATLAS_NOVA_HOME_DISCIPLINE_TAGS = [
  "Enterprise AI · macOS",
  "Document generation",
] as const;

export const ATLAS_NOVA_HOME_TECH_HIGHLIGHTS =
  "Document generation feature · mockups & UI flows" as const;

/** EA Community Concept — homepage card + left-rail tags (keep in sync). */
export const EA_COMMUNITY_HOME_DISCIPLINE_TAGS = [
  "Industry Hackathon · 24 Hours",
  "Social Discovery",
] as const;

export const EA_COMMUNITY_HOME_TECH_HIGHLIGHTS =
  "Research, persona, and task-flow design" as const;

/** PerfectInterview — homepage card + left-rail tags (keep in sync). */
export const PERFECT_INTERVIEW_HOME_DISCIPLINE_TAGS = [
  "AI · Mock interviews",
  "Responsive web",
] as const;

export const PERFECT_INTERVIEW_HOME_TECH_HIGHLIGHTS =
  "Heuristic evaluation · UI design · Framer" as const;

// const PERFECT_INTERVIEW_COVER = "/case-studies/perfect-interview/cover.png"; // hidden for now

export const MARKETING_SELECTED_WORK: readonly MarketingWorkItem[] = [
  {
    slug: "e-invoice-app",
    href: "/case-studies/e-invoice-app",
    portfolioFocus: "product",
    title:
      "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App",
    description:
      "A government service used by 20M people—research-led IA, accessibility, and ship-ready UI across 30+ sessions.",
    disciplineTags: ["Public service application · User research"],
    year: "2024–2025",
    cover: { kind: "e-invoice" },
    showShipped: true,
  },
  {
    slug: "ai-marketplace",
    href: "/case-studies/ai-marketplace",
    portfolioFocus: "product",
    title: "MINA · AI-Powered Marketplace Community for SF Parents",
    description:
      "Sole designer on a live iOS marketplace—listing funnel lift, AI trust surfaces, and a 50+ component design system.",
    disciplineTags: ["AI-driven community · Mobile app"],
    year: "2025–2026",
    cover: { kind: "mina" },
    showShipped: true,
  },
  {
    slug: "government-backend",
    href: "/case-studies/government-backend",
    portfolioFocus: "product",
    title: "Internal Backend Platform for 600+ government staff",
    description:
      "Role-based admin platform for Ministry of Finance staff supporting Taiwan's e-invoice lottery operations.",
    disciplineTags: ["Responsive · Web · 600+ Users"],
    year: "2024–2025",
    cover: { kind: "image", src: GOV_COVER },
    showShipped: true,
  },
  {
    slug: "baskin-robbins",
    href: "/case-studies/baskin-robbins",
    portfolioFocus: "product",
    title: "Cross-market with Japan HQ · BR31 Taiwan membership app",
    description:
      "End-to-end UX/UI for Taiwan's 31 Club loyalty app—cross-market alignment with Japan HQ, MVP on schedule.",
    disciplineTags: ["Mobile · Cross-market JP×TW"],
    year: "2024–2025",
    cover: { kind: "image", src: "/case-studies/baskin-robbins/home-cover.png" },
    showShipped: true,
  },
  {
    slug: "atlas-nova",
    href: "/case-studies/atlas-nova",
    portfolioFocus: "product",
    title: "AtlasNova · UI for AI-assisted document generation",
    description:
      "Document generation UI for an enterprise macOS AI platform—onboarding, split-pane workspace, and status patterns.",
    disciplineTags: ["Enterprise AI · macOS · Document generation"],
    year: "2023",
    techHighlights: ATLAS_NOVA_HOME_TECH_HIGHLIGHTS,
    cover: { kind: "image", src: ATLAS_NOVA_COVER },
  },
  {
    slug: "ea-community-concept",
    href: "/case-studies/ea-community-concept",
    portfolioFocus: "product",
    title:
      "Community & Social Discovery Concept — EA Industry Hackathon",
    description:
      "A 24-hour EA-sponsored hackathon concept—research, personas, and task flows for social discovery among gamers.",
    disciplineTags: ["Hackathon · Social Discovery · Concept"],
    year: "2023",
    techHighlights: EA_COMMUNITY_HOME_TECH_HIGHLIGHTS,
    cover: { kind: "image", src: EA_COMMUNITY_COVER },
  },
  {
    slug: "ai-marketplace/marketing",
    href: "/case-studies/ai-marketplace/marketing",
    portfolioFocus: "marketing",
    title: "MINA · Instagram",
    description:
      "Launch and community content for MINA—Instagram grid, campaign graphics, and social storytelling.",
    disciplineTags: ["Content strategy & creation"],
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
    portfolioFocus: "marketing",
    title: "Haphy Living (Brand IP)",
    description:
      "A rabbit-inspired brand IP from illustration through POD production to an Etsy storefront.",
    disciplineTags: ["Branding · ecommerce"],
    year: "2023–2024",
    cover: { kind: "image", src: "/case-studies/phyphyya/gallery-14.png" },
  },
  // Hidden for now — restore when ready to publish
  // {
  //   slug: "perfect-interview",
  //   href: "/case-studies/perfect-interview",
  //   portfolioFocus: "product",
  //   title: "PerfectInterview.ai · An AI-driven mock interview platform",
  //   disciplineTags: ["AI · Mock interviews · Responsive web"],
  //   year: "2024",
  //   techHighlights: PERFECT_INTERVIEW_HOME_TECH_HIGHLIGHTS,
  //   cover: { kind: "image", src: PERFECT_INTERVIEW_COVER },
  // },
  {
    slug: "momi-animal-health",
    href: "/case-studies/momi-animal-health",
    portfolioFocus: "marketing",
    title: "MOMI Animal Health",
    description:
      "Social, event, and ecommerce graphics for a Taiwan animal-health brand across digital and in-person touchpoints.",
    disciplineTags: ["graphic design · content creation · Event coordination · ecommerce"],
    year: "2021",
    cover: {
      kind: "image",
      src: "/case-studies/momi-animal-health/home-cover.png",
    },
  },
  {
    slug: "admission-hub",
    href: "/case-studies/admission-hub",
    portfolioFocus: "marketing",
    title: "Admission Hub",
    description:
      "Instagram, SEO, and long-form content for a study-abroad consultancy rebuilding visibility and trust.",
    disciplineTags: ["Social media management · Content strategy · Copywriting · Search engine optimization"],
    year: "2022",
    cover: { kind: "image", src: "/case-studies/admission-hub/home-cover.png" },
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

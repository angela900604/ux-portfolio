/**
 * Homepage / prev-next order — flagship → core → adjacent (matches CaseStudyPrevNext).
 */
export type MarketingWorkItem = {
  slug: string;
  href: string;
  title: string;
  /** Short discipline line (Anthonius-style subtitle) */
  discipline: string;
  year: string;
};

export const MARKETING_SELECTED_WORK: readonly MarketingWorkItem[] = [
  {
    slug: "e-invoice-app",
    href: "/case-studies/e-invoice-app",
    title: "Uniform Invoice Award redemption app",
    discipline: "Mobile · Government · Shipped",
    year: "2024–2025",
  },
  {
    slug: "ai-marketplace",
    href: "/case-studies/ai-marketplace",
    title: "MINA · AI marketplace for SF parents",
    discipline: "AI · Community · Growth",
    year: "2025",
  },
  {
    slug: "government-backend",
    href: "/case-studies/government-backend",
    title: "Internal backend for 600+ government staff",
    discipline: "Responsive web · Permissions & audit",
    year: "2024–2025",
  },
  {
    slug: "baskin-robbins",
    href: "/case-studies/baskin-robbins",
    title: "BR31 Taiwan membership app",
    discipline: "Mobile · Cross-market JP×TW",
    year: "2024–2025",
  },
  {
    slug: "admission-hub",
    href: "/case-studies/admission-hub",
    title: "Admission Hub",
    discipline: "Digital marketing · Web",
    year: "2022",
  },
  {
    slug: "momi-animal-health",
    href: "/case-studies/momi-animal-health",
    title: "MOMI Animal Health",
    discipline: "Digital marketing · eCommerce",
    year: "2021",
  },
  {
    slug: "phyphyya",
    href: "/case-studies/phyphyya",
    title: "Haphy Living",
    discipline: "Branding · Visual identity",
    year: "2023–2024",
  },
] as const;

export const MARKETING_FOCUS_TAGS = [
  "Product design",
  "UX research",
  "Mobile & growth",
] as const;

/**
 * Left-rail copy for `/case-studies/*` — mirrors each hero’s title, subtitle, and
 * “at a glance” rows (Timeline, Role, Project type, Focus, etc.).
 */

import {
  E_INVOICE_HOME_DISCIPLINE_TAG,
  E_INVOICE_HOME_TECH_HIGHLIGHTS,
} from "@/lib/marketing-work";

export type CaseStudyAsideRow = {
  label: string;
  value: string;
};

/** Optional text CTA in the left rail (e.g. e-Invoice research journey). */
export type CaseStudyAsidePrimaryCta = {
  href: string;
  label: string;
};

export type CaseStudyAsideMeta = {
  eyebrow?: string;
  /** Same visual as homepage {@link ProjectCardTag} (discipline line). */
  eyebrowAsProjectCardTag?: boolean;
  title: string;
  subtitle?: string;
  items: readonly CaseStudyAsideRow[];
  primaryCta?: CaseStudyAsidePrimaryCta;
};

/** Path segment after `/case-studies/` (e.g. `e-invoice-app`, `ai-marketplace/marketing`). */
export function caseStudyPathKey(pathname: string): string | null {
  if (!pathname.startsWith("/case-studies/")) return null;
  const rest = pathname.replace(/^\/case-studies\//, "").split("?")[0];
  if (!rest || rest.includes("..")) return null;
  const trimmed = rest.replace(/\/+$/, "");
  return trimmed || null;
}

function titleCaseSlug(slug: string): string {
  return slug
    .split(/[-_/]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

const CASE_STUDY_ASIDE_META: Record<string, CaseStudyAsideMeta> = {
  "e-invoice-app": {
    eyebrow: E_INVOICE_HOME_DISCIPLINE_TAG,
    eyebrowAsProjectCardTag: true,
    title: "MOF Uniform Invoice Award Redemption app",
    subtitle:
      "Redesigning a government service used by 20 million people",
    items: [
      { label: "Timeline", value: "Feb 2025 – Nov 2025 (10 months)" },
      { label: "Role", value: "UX/UI Designer" },
      {
        label: "Project type",
        value: "End-to-end mobile app redesign · Government service app",
      },
      {
        label: "Focus",
        value: E_INVOICE_HOME_TECH_HIGHLIGHTS,
      },
    ],
    primaryCta: {
      href: "/user-research-journey",
      label: "View full research journey",
    },
  },
  "ai-marketplace": {
    eyebrow: "Case study · AI marketplace · Zero to one",
    title:
      "MINA — an AI-native marketplace for parents who outgrow baby gear overnight",
    subtitle:
      "Sole designer on iOS—listing funnel, AI trust surfaces, design system, and community-led growth.",
    items: [
      { label: "Timeline", value: "Sep 2025 – Present" },
      { label: "Role", value: "Sole product designer · 1 PM + 5 engineers" },
      {
        label: "Project type",
        value: "AI-native marketplace iOS app · 0→1 consumer product",
      },
      {
        label: "Focus",
        value:
          "Listing funnel, AI trust surfaces, design system, community-led growth",
      },
    ],
  },
  "ai-marketplace/marketing": {
    eyebrow: "Marketing designer",
    title: "MINA · Instagram & launch visuals",
    subtitle:
      "Campaign tiles for the MINA brand—marketplace positioning, concierge pickup, community programs, and product stories—in a profile-style grid.",
    items: [
      { label: "Timeline", value: "2025 · alongside product launch" },
      { label: "Role", value: "Marketing designer" },
      {
        label: "Project type",
        value: "Social & launch campaign graphics · MINA (AI marketplace)",
      },
      {
        label: "Focus",
        value:
          "Instagram grid, campaign tiles, concierge & community storytelling",
      },
    ],
  },
  "government-backend": {
    eyebrow: "Case study · Public service · Enterprise system",
    title: "Role-based backend for 600+ government staff",
    subtitle:
      "Backend platform for the Ministry of Finance’s Uniform Invoice Lottery Redemption App—role-based access and reporting for 600+ staff.",
    items: [
      { label: "Timeline", value: "Jul 2025 – Sep 2025 (3 months)" },
      { label: "Role", value: "Lead UX/UI Designer" },
      {
        label: "Project type",
        value: "Backend admin platform · Government service (MoF)",
      },
      {
        label: "Focus",
        value: "RBAC, reporting, version workflows · Ship-ready UI",
      },
    ],
  },
  "baskin-robbins": {
    eyebrow: "Case study · Mobile · Loyalty · Zero-to-one",
    title:
      "Cross-market collaboration with Japan HQ for Taiwan’s first Baskin Robbins membership app",
    subtitle:
      "Taiwan’s loyalty market was growing fast while BR31 still had no native app—end-to-end UX/UI for 31 Club, MVP on schedule, five-star early reviews.",
    items: [
      { label: "Timeline", value: "Dec 2024 – Feb 2025 (3 months)" },
      { label: "Role", value: "Lead UX/UI Designer" },
      {
        label: "Project type",
        value: "Mobile membership app · Loyalty & rewards (Taiwan)",
      },
      {
        label: "Market scope",
        value: "Taiwan launch · Aligned with Japan HQ · iOS + Android",
      },
      {
        label: "Focus",
        value: "Discovery through handoff · MVP with engineering",
      },
    ],
  },
  "phyphyya": {
    eyebrow: "Brand IP · Illustration + Product",
    title: "Haphy Living",
    subtitle:
      "A live ecommerce experiment built from a personal rabbit-inspired IP—illustration to POD production and Etsy storefront operations.",
    items: [
      { label: "Timeline", value: "2022 – present (ongoing)" },
      { label: "Role", value: "Solo creator" },
      {
        label: "Project type",
        value: "Brand IP · Illustration, POD, Etsy storefront",
      },
      {
        label: "Focus",
        value: "Rabbit-inspired IP · low-inventory ecommerce validation",
      },
    ],
  },
  "momi-animal-health": {
    eyebrow: "Digital marketing · Content + Growth",
    title: "MOMI Animal Health",
    subtitle: "Helped drive +75% online sales growth in two months.",
    items: [
      { label: "Timeline", value: "Feb 2021 – Sep 2021 (8 months)" },
      {
        label: "Role",
        value: "Social media, eCommerce, and campaign design",
      },
      {
        label: "Project type",
        value: "Digital marketing · Taipei, Taiwan · Rabbit-care niche brand",
      },
      {
        label: "Focus",
        value: "Campaign creative, tri-fold & expo, online sales lift",
      },
    ],
  },
  "admission-hub": {
    eyebrow: "Digital marketing · Content + Growth",
    title: "Admission Hub",
    subtitle:
      "Study-abroad brand in Toronto—Instagram cadence toward Canada-life content, SEO articles, and funnel analytics.",
    items: [
      { label: "Timeline", value: "May 2022 – Aug 2022 (4 months)" },
      { label: "Role", value: "Digital Marketer" },
      {
        label: "Project type",
        value: "Digital marketing internship · Toronto, ON · Study-abroad brand",
      },
      {
        label: "Focus",
        value: "Instagram content cadence, SEO articles, funnel analytics",
      },
    ],
  },
  "e-invoice-design": {
    eyebrow: "Case study",
    title: "e-Invoice design showcase",
    subtitle:
      "A visual-first page focused on the UI craft and key redesign screens.",
    items: [
      { label: "Timeline", value: "Companion to flagship e-Invoice case" },
      { label: "Role", value: "UX/UI Designer" },
      { label: "Project type", value: "UI gallery · Government mobile redesign" },
      { label: "Focus", value: "High-fidelity screens and before/after craft" },
    ],
  },
};

export function getCaseStudyAsideMeta(pathname: string): CaseStudyAsideMeta {
  const key = caseStudyPathKey(pathname);
  if (!key) {
    return {
      eyebrow: "Portfolio",
      title: "Case studies",
      items: [],
    };
  }
  const found = CASE_STUDY_ASIDE_META[key];
  if (found) return found;
  return {
    eyebrow: "Case study",
    title: titleCaseSlug(key),
    subtitle: "Full write-up or visuals may be in progress for this project.",
    items: [],
  };
}

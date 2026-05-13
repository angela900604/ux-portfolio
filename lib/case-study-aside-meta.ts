/**
 * Left-rail copy for `/case-studies/*` — mirrors each hero’s title, subtitle, and
 * “at a glance” rows (Timeline, Role, Project type, Focus, etc.).
 */

import {
  E_INVOICE_HOME_DISCIPLINE_TAGS,
  E_INVOICE_HOME_TECH_HIGHLIGHTS,
  MINA_HOME_DISCIPLINE_TAGS,
  marketingDisciplineTagsForCaseStudySlug,
} from "@/lib/marketing-work";

const MINA_APP_STORE_CA =
  "https://apps.apple.com/ca/app/mina-resale-for-parents/id6754006404";
const BR31_APP_STORE_TW =
  "https://apps.apple.com/tw/app/31%E4%BF%B1%E6%A8%82%E9%83%A8/id6755289789";
const PHYPHYA_INSTAGRAM = "https://www.instagram.com/phyphya__/";
const E_INVOICE_FIGMA_APP_MOCKUP =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=1-8&t=MW0x7q3jDP00Fqzx-1";

export type CaseStudyAsideRow = {
  label: string;
  value: string;
};

/** Optional text CTA in the left rail (e.g. e-Invoice research journey). */
export type CaseStudyAsidePrimaryCta = {
  href: string;
  label: string;
};

/** Extra text links under subtitle (App Store, related case study, etc.). */
export type CaseStudyAsideTextLink = {
  href: string;
  label: string;
  /** Opens in new tab; defaults true when href starts with http */
  external?: boolean;
  /** When set, replaces the default MINA / emerald link styling */
  className?: string;
};

export type CaseStudyAsideMeta = {
  eyebrow?: string;
  /** Multiple discipline pills (homepage parity); takes precedence over {@link eyebrow} for tag row. */
  eyebrowTags?: readonly string[];
  /** Same visual as homepage {@link ProjectCardTag} (discipline line). */
  eyebrowAsProjectCardTag?: boolean;
  title: string;
  subtitle?: string;
  items: readonly CaseStudyAsideRow[];
  primaryCta?: CaseStudyAsidePrimaryCta;
  textLinks?: readonly CaseStudyAsideTextLink[];
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
    eyebrowTags: [...E_INVOICE_HOME_DISCIPLINE_TAGS],
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
    textLinks: [
      {
        href: E_INVOICE_FIGMA_APP_MOCKUP,
        label: "Figma · APP mockup",
        external: true,
      },
    ],
  },
  "ai-marketplace": {
    eyebrowTags: [...MINA_HOME_DISCIPLINE_TAGS],
    eyebrowAsProjectCardTag: true,
    title: "MINA AI",
    subtitle:
      "an AI-native marketplace for parents who outgrow baby gear overnight",
    items: [
      { label: "Timeline", value: "Sep 2025 – Present" },
      { label: "Role", value: "Sole product designer · 1 PM + 5 engineers" },
      {
        label: "Project type",
        value: "AI-native marketplace iOS app — growth & iteration on a live product",
      },
      {
        label: "Focus",
        value:
          "Listing funnel, AI trust surfaces, design system, community-led growth",
      },
    ],
    textLinks: [
      {
        href: MINA_APP_STORE_CA,
        label: "Mina · App Store (Canada)",
        external: true,
      },
      {
        href: "/case-studies/ai-marketplace/marketing",
        label: "Marketing designer · Instagram grid",
        external: false,
      },
    ],
  },
  "ai-marketplace/marketing": {
    eyebrowTags: marketingDisciplineTagsForCaseStudySlug(
      "ai-marketplace/marketing",
    )!,
    eyebrowAsProjectCardTag: true,
    title: "MINA · Instagram",
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
    textLinks: [
      {
        href: "/case-studies/ai-marketplace",
        label: "← MINA product case study",
        external: false,
        className:
          "text-sm font-medium text-[#F2CD84] underline-offset-[5px] transition hover:text-[#e8d49a] hover:underline",
      },
    ],
  },
  "government-backend": {
    eyebrowTags: marketingDisciplineTagsForCaseStudySlug("government-backend")!,
    eyebrowAsProjectCardTag: true,
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
    eyebrowTags: marketingDisciplineTagsForCaseStudySlug("baskin-robbins")!,
    eyebrowAsProjectCardTag: true,
    title: "Baskin Robbins membership app",
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
    textLinks: [
      {
        href: BR31_APP_STORE_TW,
        label: "31 Club · App Store (Taiwan)",
        external: true,
      },
    ],
  },
  "phyphyya": {
    eyebrowTags: marketingDisciplineTagsForCaseStudySlug("phyphyya")!,
    eyebrowAsProjectCardTag: true,
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
        label: "Tools",
        value: "Procreate / Figma / Lovart / Printify",
      },
    ],
    textLinks: [
      {
        href: PHYPHYA_INSTAGRAM,
        label: "Instagram · @phyphya__",
        external: true,
        className:
          "text-sm font-medium text-[#E5D0B9] underline-offset-[5px] transition hover:text-[#d4be9f] hover:underline",
      },
    ],
  },
  "momi-animal-health": {
    eyebrowTags: marketingDisciplineTagsForCaseStudySlug("momi-animal-health")!,
    eyebrowAsProjectCardTag: true,
    title: "MOMI Animal Health",
    subtitle: "Helped drive +75% online sales growth in two months.",
    items: [
      { label: "Timeline", value: "Feb 2021 – Sep 2021 (8 months)" },
      {
        label: "Role",
        value: "Social media intern, eCommerce, and campaign design",
      },
      {
        label: "Project type",
        value: "Digital marketing · Taipei, Taiwan · Rabbit-care niche brand",
      },
      {
        label: "Tools",
        value: "Adobe Photoshop / Adobe Illustrator / Excel / Facebook / MOMO / Shopee",
      },
    ],
  },
  "admission-hub": {
    eyebrowTags: marketingDisciplineTagsForCaseStudySlug("admission-hub")!,
    eyebrowAsProjectCardTag: true,
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
        label: "Tools",
        value: "Mailchimp / WordPress / Figma / Instagram",
      },
    ],
  },
  "e-invoice-design": {
    eyebrow: "Case study · UI companion",
    eyebrowAsProjectCardTag: true,
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
  const pathOnly = (pathname.split("?")[0] ?? "").replace(/\/+$/, "") || "/";
  /** Same project context as e-invoice case study; hide research CTA on this page. */
  if (pathOnly === "/user-research-journey") {
    return {
      ...CASE_STUDY_ASIDE_META["e-invoice-app"],
      primaryCta: undefined,
    };
  }

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

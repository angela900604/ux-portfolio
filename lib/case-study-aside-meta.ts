/**
 * Left-rail copy for `/case-studies/*` — mirrors each hero’s title, subtitle, and
 * “at a glance” rows (Timeline, Role, Project type, Focus, etc.).
 */

import {
  E_INVOICE_HOME_DISCIPLINE_TAGS,
  ATLAS_NOVA_HOME_DISCIPLINE_TAGS,
  EA_COMMUNITY_HOME_DISCIPLINE_TAGS,
  EA_COMMUNITY_HOME_TECH_HIGHLIGHTS,
  PERFECT_INTERVIEW_HOME_DISCIPLINE_TAGS,
  PERFECT_INTERVIEW_HOME_TECH_HIGHLIGHTS,
  MINA_HOME_DISCIPLINE_TAGS,
  marketingDisciplineTagsForCaseStudySlug,
} from "@/lib/marketing-work";
import {
  HAPHY_LIVING_INSTAGRAM_URL,
  HAPHY_LIVING_SHOP_URL,
} from "@/app/content/haphy-living";

const MINA_APP_STORE_CA =
  "https://apps.apple.com/ca/app/mina-resale-for-parents/id6754006404";
const BR31_APP_STORE_TW =
  "https://apps.apple.com/tw/app/31%E4%BF%B1%E6%A8%82%E9%83%A8/id6755289789";
const E_INVOICE_FIGMA_APP_MOCKUP =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=1-8&t=MW0x7q3jDP00Fqzx-1";
const ATLAS_NOVA_FIGMA_SKETCHES =
  "https://www.figma.com/design/LMIFzRY2vOAL5YfKXMrhLR/AtlasNova-New-Sketches?node-id=0-1&t=bSBihOHyTQfXdArv-1";
const ATLAS_NOVA_WEBSITE = "https://www.atlasnova.ai/";
const EA_COMMUNITY_FIGMA =
  "https://www.figma.com/design/XziE5IHalaSAHnPNwXX6Ml/Industry-Project";
const PERFECT_INTERVIEW_WEBSITE = "https://perfectinterview.ai/";

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
      {
        label: "Role",
        value: "User Research & UX Designer",
      },
      { label: "Team", value: "Government stakeholders, engineering" },
      { label: "Timeline", value: "Feb 2025 – Nov 2025" },
      {
        label: "Outcome",
        value:
          "Missed top-tier prize redemptions 24% → 18% one month after launch",
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
      {
        label: "Role",
        value: "Marketing & Product Designer, MINA AI (fixed-term contract)",
      },
      {
        label: "Team",
        value: "Worked directly with engineering and the founding team",
      },
      { label: "Timeline", value: "Sep 2025 – May 2026" },
      {
        label: "Outcome",
        value: "Completed listings +30% after the new listing flow shipped",
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
    items: [
      { label: "Timeline", value: "2026" },
      { label: "Role", value: "Marketing designer" },
      {
        label: "Project type",
        value: "Social & launch campaign graphics",
      },
      {
        label: "Tools",
        value: "Canva, Figma, Lovart, Instagram",
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
      {
        label: "Role",
        value:
          "Product / UX Designer, TurnCloud (client: Taiwan Ministry of Finance)",
      },
      { label: "Team", value: "Government stakeholders, engineering" },
      { label: "Timeline", value: "Jul 2024 – Nov 2025" },
      {
        label: "Outcome",
        value: "One role-based backend serving 600+ staff",
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
      {
        label: "Role",
        value:
          "Product / UX Designer, TurnCloud (client: Baskin-Robbins Taiwan, with Japan HQ)",
      },
      {
        label: "Team",
        value: "Japan HQ design and product teams, Taiwan engineering",
      },
      { label: "Timeline", value: "Jul 2024 – Nov 2025" },
      {
        label: "Outcome",
        value:
          "Taiwan MVP reframed around spend-based tiers and shipped for launch",
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
  "atlas-nova": {
    eyebrowTags: [...ATLAS_NOVA_HOME_DISCIPLINE_TAGS],
    eyebrowAsProjectCardTag: true,
    title: "AtlasNova",
    subtitle: "Enterprise AI platform · document generation UI",
    items: [
      { label: "Role", value: "UX/UI Design Intern, AtlasNova" },
      { label: "Team", value: "Product manager, engineering" },
      { label: "Timeline", value: "Internship" },
      {
        label: "Outcome",
        value:
          "Feature UI delivered end to end, from whiteboard sketches to hi-fi screens",
      },
    ],
    textLinks: [
      {
        href: ATLAS_NOVA_WEBSITE,
        label: "AtlasNova · atlasnova.ai",
        external: true,
      },
      {
        href: ATLAS_NOVA_FIGMA_SKETCHES,
        label: "Figma · New Sketches",
        external: true,
      },
    ],
  },
  "ea-community-concept": {
    eyebrowTags: [...EA_COMMUNITY_HOME_DISCIPLINE_TAGS],
    eyebrowAsProjectCardTag: true,
    title: "EA Community Concept",
    subtitle: "Helping gamers connect through shared interests",
    items: [
      { label: "Timeline", value: "2023" },
      { label: "Role", value: "UX Designer (sole)" },
      {
        label: "Project type",
        value: "EA-sponsored concept sprint",
      },
      {
        label: "Scope",
        value:
          "Research, persona, and task-flow design for a 4-person team (2 frontend engineers, 1 data scientist) within a 24-hour sprint",
      },
    ],
    textLinks: [
      {
        href: EA_COMMUNITY_FIGMA,
        label: "Figma · Industry Project",
        external: true,
      },
    ],
  },
  "perfect-interview": {
    eyebrowTags: [...PERFECT_INTERVIEW_HOME_DISCIPLINE_TAGS],
    eyebrowAsProjectCardTag: true,
    title: "PerfectInterview.ai",
    subtitle: "An AI-driven mock interview platform for job seekers",
    items: [
      { label: "Timeline", value: "2024" },
      { label: "Role", value: "Sole UX/UI Designer" },
      { label: "Project type", value: "" },
      { label: "Focus", value: PERFECT_INTERVIEW_HOME_TECH_HIGHLIGHTS },
    ],
    textLinks: [
      {
        href: PERFECT_INTERVIEW_WEBSITE,
        label: "PerfectInterview.ai",
        external: true,
      },
    ],
  },
  "phyphyya": {
    eyebrowTags: marketingDisciplineTagsForCaseStudySlug("phyphyya")!,
    eyebrowAsProjectCardTag: true,
    title: "Haphy Living",
    subtitle:
      "Original brand IP for a pet-lifestyle label—mascot, identity system, Etsy shop, and in-person Christmas market pop-ups.",
    items: [
      { label: "Timeline", value: "2022 – present" },
      { label: "Role", value: "Solo creator — brand, shop, pop-ups" },
      {
        label: "Project type",
        value: "Brand identity · Illustration · ecommerce",
      },
      {
        label: "Tools",
        value: "Procreate / Figma / Lovart / Printify",
      },
    ],
    textLinks: [
      {
        href: HAPHY_LIVING_SHOP_URL,
        label: "Etsy · Haphy Living",
        external: true,
      },
      {
        href: HAPHY_LIVING_INSTAGRAM_URL,
        label: "Instagram · @lifewith.haphy",
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
        value: "Taipei, Taiwan · Rabbit-care niche brand",
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
      { label: "Timeline", value: "May – Sep 2022" },
      { label: "Role", value: "Digital Marketer" },
      {
        label: "Project type",
        value: "Internship · Toronto · Study-abroad brand",
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

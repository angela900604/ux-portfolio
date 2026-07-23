import { caseStudyPathKey } from "@/lib/case-study-aside-meta";

export type CaseStudySidebarAccent = {
  link: string;
  linkHover: string;
};

const DEFAULT: CaseStudySidebarAccent = {
  link: "text-emerald-400/95",
  linkHover: "hover:text-emerald-300",
};

const BY_SLUG: Record<string, CaseStudySidebarAccent> = {
  "ai-marketplace": {
    link: "text-[#B75E45]",
    linkHover: "hover:text-[#9a4f38]",
  },
  "baskin-robbins": {
    link: "text-[#F20C90]",
    linkHover: "hover:text-[#ff4db8]",
  },
  "atlas-nova": {
    link: "text-[#6366F1]",
    linkHover: "hover:text-[#818cf8]",
  },
  "ea-community-concept": {
    link: "text-[#F97316]",
    linkHover: "hover:text-[#fb923c]",
  },
};

/** Sidebar link + CTA accent — matches each project’s in-page brand color. */
export function getCaseStudySidebarAccent(
  pathname: string,
): CaseStudySidebarAccent {
  const key = caseStudyPathKey(pathname);
  if (!key) return DEFAULT;
  if (key.startsWith("ai-marketplace/")) return BY_SLUG["ai-marketplace"];
  return BY_SLUG[key] ?? DEFAULT;
}

export function caseStudySidebarLinkClass(pathname: string): string {
  const { link, linkHover } = getCaseStudySidebarAccent(pathname);
  return `text-sm font-medium ${link} underline-offset-[5px] transition ${linkHover} hover:underline`;
}

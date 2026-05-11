/**
 * Condensed experience for About — edit to match your resume PDF.
 * (PDF text was not auto-imported; dates and companies should mirror your CV.)
 */
export type AboutExperienceRow = {
  title: string;
  company: string;
  dates: string;
  description: string;
};

export const ABOUT_EXPERIENCE: readonly AboutExperienceRow[] = [
  {
    title: "Lead UX/UI designer",
    company: "Taiwan Ministry of Finance · Uniform invoice program",
    dates: "2024 – 2025",
    description:
      "Redesigned the national uniform-invoice redemption app: modular IA, accessibility-first patterns, RBAC-heavy flows, and build-ready handoff with engineering.",
  },
  {
    title: "Product designer",
    company: "MINA · AI-powered marketplace (client build)",
    dates: "2025",
    description:
      "0→1 product work for a parent community marketplace: trust in AI-assisted flows, design system primitives, and growth experiments with measurable lift.",
  },
  {
    title: "Lead UX/UI designer",
    company: "Baskin-Robbins Taiwan · Cross-market with Japan HQ",
    dates: "2024 – 2025",
    description:
      "Membership app MVP: interpreter-led HQ alignment, loyalty IA for local CRM constraints, UI kit, and store UAT for voucher and barcode flows.",
  },
  {
    title: "Product & marketing design",
    company: "Digital marketing & brand programs (admissions, retail, consumer)",
    dates: "2021 – 2024",
    description:
      "Campaign-led web and social work: clearer landing paths, stronger conversion storytelling, and repeatable templates for small marketing teams.",
  },
] as const;

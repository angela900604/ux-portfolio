import Link from "next/link";
import {
  CS_PREV_NEXT_LINK,
  CS_PREV_NEXT_MUTED,
} from "@/lib/case-study-theme";

/** Order matches homepage: flagship → core product → adjacent work */
export const CASE_STUDY_NAV: { slug: string; label: string }[] = [
  { slug: "e-invoice-app", label: "e-Invoice app" },
  { slug: "ai-marketplace", label: "MINA · community marketplace" },
  { slug: "government-backend", label: "Government backend" },
  { slug: "baskin-robbins", label: "Baskin-Robbins Taiwan" },
  { slug: "atlas-nova", label: "AtlasNova" },
  { slug: "ea-community-concept", label: "EA Community Concept" },
  {
    slug: "ai-marketplace/marketing",
    label: "MINA · Instagram",
  },
  { slug: "phyphyya", label: "Haphy Living" },
  // { slug: "perfect-interview", label: "PerfectInterview.ai" }, // hidden for now
  { slug: "momi-animal-health", label: "MOMI Animal Health" },
  { slug: "admission-hub", label: "Admission Hub" },
];

export function CaseStudyPrevNext({
  currentSlug,
  variant = "dark",
}: {
  currentSlug: string;
  /** `phyphyya` keeps the cream brand styling for Haphy Living */
  variant?: "dark" | "phyphyya";
}) {
  const i = CASE_STUDY_NAV.findIndex((x) => x.slug === currentSlug);
  if (i < 0) return null;
  const prev = i > 0 ? CASE_STUDY_NAV[i - 1] : null;
  const next = i < CASE_STUDY_NAV.length - 1 ? CASE_STUDY_NAV[i + 1] : null;

  const base =
    variant === "phyphyya"
      ? "rounded-[22px] border border-[#D5C9B7] bg-[#F5F3EF] px-6 py-3 text-sm text-[#4A4A4A] transition hover:border-[#B8AA95] hover:bg-[#F8F5F0]"
      : CS_PREV_NEXT_LINK;

  const muted =
    variant === "phyphyya" ? "text-[#9A8F82] text-xs" : CS_PREV_NEXT_MUTED;

  return (
    <nav
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Previous and next case studies"
    >
      <div className="min-w-0 flex-1">
        {prev ? (
          <Link
            href={`/case-studies/${prev.slug}`}
            className={`inline-flex ${base}`}
          >
            <span className={muted}>Previous</span>
            <span className="ml-2 font-medium">{prev.label}</span>
          </Link>
        ) : (
          <span className={`inline-flex ${base} cursor-not-allowed opacity-50`}>
            <span className={muted}>Previous</span>
            <span className="ml-2">—</span>
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1 sm:text-right">
        {next ? (
          <Link href={`/case-studies/${next.slug}`} className={`inline-flex ${base}`}>
            <span className={muted}>Next</span>
            <span className="ml-2 font-medium">{next.label}</span>
          </Link>
        ) : (
          <span className={`inline-flex ${base} cursor-not-allowed opacity-50`}>
            <span className={muted}>Next</span>
            <span className="ml-2">—</span>
          </span>
        )}
      </div>
    </nav>
  );
}

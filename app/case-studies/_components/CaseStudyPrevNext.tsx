import type { ReactNode } from "react";
import Link from "next/link";
import {
  CS_PREV_NEXT_LINK,
  CS_PREV_NEXT_MUTED,
} from "@/lib/case-study-theme";

/** Order matches homepage: flagship → core product → adjacent work */
export const CASE_STUDY_NAV: { slug: string; label: string }[] = [
  { slug: "e-invoice-app", label: "e-Invoice app" },
  { slug: "ai-marketplace", label: "MINA · community marketplace" },
  { slug: "phyphyya", label: "Haphy Living" },
  { slug: "government-backend", label: "Government backend" },
  { slug: "baskin-robbins", label: "Baskin-Robbins Taiwan" },
  { slug: "momi-animal-health", label: "MOMI Animal Health" },
  { slug: "admission-hub", label: "Admission Hub" },
  { slug: "atlas-nova", label: "AtlasNova" },
  { slug: "ea-community-concept", label: "EA Community Concept" },
  {
    slug: "ai-marketplace/marketing",
    label: "MINA · Instagram",
  },
  // { slug: "perfect-interview", label: "PerfectInterview.ai" }, // hidden for now
];

export function CaseStudyPrevNext({
  currentSlug,
  leading,
}: {
  currentSlug: string;
  /** Replaces the Previous pill (e.g. “← Back to home” on the first case study). */
  leading?: ReactNode;
}) {
  const i = CASE_STUDY_NAV.findIndex((x) => x.slug === currentSlug);
  if (i < 0) return null;
  const prev = i > 0 ? CASE_STUDY_NAV[i - 1] : null;
  const next = i < CASE_STUDY_NAV.length - 1 ? CASE_STUDY_NAV[i + 1] : null;

  const start = leading ? (
    leading
  ) : prev ? (
    <Link href={`/case-studies/${prev.slug}`} className={CS_PREV_NEXT_LINK}>
      <span className={`${CS_PREV_NEXT_MUTED} leading-none`}>Previous</span>
      <span className="ml-2 font-medium leading-none text-zinc-100">
        {prev.label}
      </span>
    </Link>
  ) : null;

  return (
    <nav
      className="flex flex-row items-center justify-between gap-4"
      aria-label="Previous and next case studies"
    >
      <div className="min-w-0">{start}</div>
      <div className="min-w-0 shrink-0">
        {next ? (
          <Link href={`/case-studies/${next.slug}`} className={CS_PREV_NEXT_LINK}>
            <span className={`${CS_PREV_NEXT_MUTED} leading-none`}>Next</span>
            <span className="ml-2 font-medium leading-none text-zinc-100">
              {next.label}
            </span>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

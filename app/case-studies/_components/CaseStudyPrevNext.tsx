import Link from "next/link";

/** Order matches homepage: flagship → core product → adjacent work */
export const CASE_STUDY_NAV: { slug: string; label: string }[] = [
  { slug: "e-invoice-app", label: "e-Invoice app" },
  { slug: "ai-marketplace", label: "MINA · AI marketplace" },
  { slug: "government-backend", label: "Government backend" },
  { slug: "baskin-robbins", label: "Baskin-Robbins Taiwan" },
  { slug: "admission-hub", label: "Admission Hub" },
  { slug: "momi-animal-health", label: "MOMI Animal Health" },
  { slug: "phyphyya", label: "Haphy Living" },
];

export function CaseStudyPrevNext({
  currentSlug,
  variant: theme = "dark",
}: {
  currentSlug: string;
  /** `light` for Haphy Living (phyphyya) cream UI */
  variant?: "dark" | "light";
}) {
  const i = CASE_STUDY_NAV.findIndex((x) => x.slug === currentSlug);
  if (i < 0) return null;
  const prev = i > 0 ? CASE_STUDY_NAV[i - 1] : null;
  const next = i < CASE_STUDY_NAV.length - 1 ? CASE_STUDY_NAV[i + 1] : null;

  const base =
    theme === "light"
      ? "rounded-[22px] border border-[#D5C9B7] bg-[#F5F3EF] px-6 py-3 text-sm text-[#4A4A4A] transition hover:border-[#B8AA95] hover:bg-[#F8F5F0]"
      : "rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900/60 hover:text-zinc-100";

  const muted =
    theme === "light" ? "text-[#9A8F82] text-xs" : "text-zinc-500 text-xs";

  return (
    <nav
      className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      aria-label="Previous and next case studies"
    >
      <div className="min-w-0 flex-1">
        {prev ? (
          <Link href={`/case-studies/${prev.slug}`} className={`inline-flex ${base}`}>
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

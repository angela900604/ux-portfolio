"use client";

import type { ReactNode } from "react";

type Props = {
  /** Button label when collapsed (e.g. “Read full context”). */
  label?: string;
  children: ReactNode;
  className?: string;
  /**
   * `mina` — emerald pill palette aligned with MINA hero / homepage capsules
   * (`border-emerald-400/45`, `bg-emerald-500/15`, `text-emerald-100`).
   */
  accent?: "default" | "mina";
};

/**
 * Disclosure for long-form case study copy — keeps the scannable surface to 2–3 lines above.
 */
export function CaseStudyExpandable({
  label = "Read more",
  children,
  className = "",
  accent = "default",
}: Props) {
  const shell =
    accent === "mina"
      ? "border-emerald-700/25 bg-emerald-50 open:border-emerald-700/35 open:bg-emerald-50/90"
      : "border-ink-line bg-paper-soft open:border-ink open:bg-paper";

  const summaryTone =
    accent === "mina"
      ? "text-emerald-800 hover:text-emerald-900"
      : "text-ink hover:text-ink-soft";

  const decoration =
    accent === "mina"
      ? "decoration-emerald-600/35"
      : "decoration-ink/25";

  const showLessTone =
    accent === "mina" ? "text-emerald-700/80" : "text-ink-muted";

  return (
    <details
      className={`group mt-4 rounded-xl border ${shell} ${className}`.trim()}
    >
      <summary
        className={`cursor-pointer list-none px-4 py-3 text-sm font-semibold transition [&::-webkit-details-marker]:hidden ${summaryTone}`}
      >
        <span
          className={`underline underline-offset-4 group-open:hidden ${decoration}`}
        >
          {label}
        </span>
        <span className={`hidden group-open:inline no-underline ${showLessTone}`}>
          Show less
        </span>
      </summary>
      <div className="border-t border-ink-line px-4 pb-4 pt-3 text-sm font-normal leading-relaxed text-ink-soft">
        {children}
      </div>
    </details>
  );
}

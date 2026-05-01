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
      ? "border-emerald-400/45 bg-emerald-500/15 open:border-emerald-400/50 open:bg-emerald-500/[0.18]"
      : "border-zinc-800/90 bg-zinc-900/30 open:border-zinc-700/90 open:bg-zinc-900/45";

  const summaryTone =
    accent === "mina"
      ? "text-emerald-100 hover:text-emerald-50"
      : "text-emerald-400/95 hover:text-emerald-300";

  const decoration =
    accent === "mina"
      ? "decoration-emerald-300/45"
      : "decoration-emerald-500/40";

  const showLessTone =
    accent === "mina" ? "text-emerald-200/80" : "text-zinc-500";

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
      <div className="border-t border-zinc-800/80 px-4 pb-4 pt-3 text-sm leading-relaxed text-zinc-300">
        {children}
      </div>
    </details>
  );
}

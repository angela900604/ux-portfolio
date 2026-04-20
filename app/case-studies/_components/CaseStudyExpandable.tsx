"use client";

import type { ReactNode } from "react";

type Props = {
  /** Button label when collapsed (e.g. “Read full context”). */
  label?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Disclosure for long-form case study copy — keeps the scannable surface to 2–3 lines above.
 */
export function CaseStudyExpandable({
  label = "Read more",
  children,
  className = "",
}: Props) {
  return (
    <details
      className={`group mt-4 rounded-xl border border-zinc-800/90 bg-zinc-900/30 open:border-zinc-700/90 open:bg-zinc-900/45 ${className}`.trim()}
    >
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-emerald-400/95 transition hover:text-emerald-300 [&::-webkit-details-marker]:hidden">
        <span className="underline underline-offset-4 decoration-emerald-500/40 group-open:hidden">
          {label}
        </span>
        <span className="hidden group-open:inline text-zinc-500 no-underline">
          Show less
        </span>
      </summary>
      <div className="border-t border-zinc-800/80 px-4 pb-4 pt-3 text-sm leading-relaxed text-zinc-300">
        {children}
      </div>
    </details>
  );
}

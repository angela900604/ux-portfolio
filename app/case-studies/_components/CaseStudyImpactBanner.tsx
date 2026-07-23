import type { ReactNode } from "react";

type Stat = {
  label: string;
  value: ReactNode;
  hint?: string;
};

type Props = {
  eyebrow?: string;
  /** Primary headline stat — use large tabular numbers (e.g. 68% → 92%). */
  primary: Stat;
  secondary?: Stat;
  className?: string;
};

/**
 * Full-width impact strip with display-size metrics (not small cards).
 */
export function CaseStudyImpactBanner({
  eyebrow = "Impact at a glance",
  primary,
  secondary,
  className = "",
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/90 via-zinc-950 to-violet-950/50 px-5 py-10 sm:px-10 sm:py-12 ${className}`.trim()}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
        {eyebrow}
      </p>
      <div className="mt-6 grid gap-10 sm:grid-cols-2 sm:items-end sm:gap-12">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
            {primary.label}
          </p>
          <p className="mt-2 text-[clamp(2.75rem,10vw,5rem)] font-semibold leading-[0.95] tracking-tight tabular-nums text-emerald-200">
            {primary.value}
          </p>
          {primary.hint ? (
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
              {primary.hint}
            </p>
          ) : null}
        </div>
        {secondary ? (
          <div className="sm:border-l sm:border-zinc-800/90 sm:pl-10">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              {secondary.label}
            </p>
            <p className="mt-2 text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-none tabular-nums text-emerald-200/95">
              {secondary.value}
            </p>
            {secondary.hint ? (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                {secondary.hint}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

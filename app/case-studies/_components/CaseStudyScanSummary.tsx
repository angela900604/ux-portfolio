const DEFAULT_BULLET =
  "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/80";

export function CaseStudyScanSummary({
  title = "Read in ~30 seconds",
  items,
  bulletClassName = DEFAULT_BULLET,
}: {
  title?: string;
  items: readonly string[];
  /** Override bullet color (e.g. Baskin-Robbins uses #F20C90) */
  bulletClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-ink-line bg-paper-soft p-5 sm:p-6">
      <p className="text-xs font-normal uppercase tracking-widest text-ink-muted">
        {title}
      </p>
      <ul className="mt-4 list-none space-y-3 text-base font-normal leading-[1.65] text-ink-soft sm:text-lg">
        {items.map((line) => (
          <li key={line} className="flex gap-3">
            <span
              className={bulletClassName}
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

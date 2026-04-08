export function CaseStudyScanSummary({
  title = "Read in ~30 seconds",
  items,
}: {
  title?: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/45 p-5 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        {title}
      </p>
      <ul className="mt-4 list-none space-y-3 text-sm leading-relaxed text-zinc-300">
        {items.map((line) => (
          <li key={line} className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Item = { label: string; value: string };

export function CaseStudyMetaStrip({
  items,
  borderLeftClassName = "border-violet-500/45",
}: {
  items: readonly Item[];
  /** Tailwind border color class for the left accent bar */
  borderLeftClassName?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 border-l-2 bg-zinc-900/35 py-3 pl-4 pr-3 text-sm text-zinc-300 sm:gap-x-4 ${borderLeftClassName}`}
      aria-label="Project summary"
    >
      {items.map((item, i) => (
        <span key={item.label} className="flex flex-wrap items-center gap-x-2">
          {i > 0 ? (
            <span className="hidden text-zinc-600 sm:inline" aria-hidden>
              ·
            </span>
          ) : null}
          <span className="text-zinc-500">{item.label}</span>
          <span className="font-medium text-zinc-100">{item.value}</span>
        </span>
      ))}
    </div>
  );
}

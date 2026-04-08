type Item = { label: string; value: string };

export function CaseStudyMetaStrip({ items }: { items: readonly Item[] }) {
  return (
    <div
      className="flex flex-wrap items-center gap-x-3 gap-y-2 border-l-2 border-brand/45 bg-zinc-900/35 py-3 pl-4 pr-3 text-sm text-zinc-300 sm:gap-x-4"
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

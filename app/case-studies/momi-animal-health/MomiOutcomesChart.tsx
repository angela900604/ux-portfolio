/** Outcomes visualization for MOMI Animal Health — ecommerce sales lift */

export function MomiOutcomesChart() {
  return (
    <div
      className="cs-data-viz rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8"
      role="img"
      aria-label="Outcomes: 75 percent growth in ecommerce platform sales from role start through role end"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        Outcomes
      </p>

      <div className="mt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-sm text-zinc-400">Ecommerce platform sales</span>
          <span className="text-lg font-semibold tabular-nums text-amber-400">
            +75%
          </span>
        </div>
        <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
          Increase in storefront-reported sales volume from my start date
          through my end date on the company&apos;s ecommerce platform.
        </p>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full w-[75%] rounded-full bg-amber-500"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

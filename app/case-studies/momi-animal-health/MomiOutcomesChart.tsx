/** Outcomes visualization for MOMI Animal Health — sales lift + cross-channel alignment */

export function MomiOutcomesChart() {
  return (
    <div
      className="rounded-2xl border border-[#E8E1D6] bg-white p-6 sm:p-8"
      role="img"
      aria-label="Outcomes: 75 percent growth in ecommerce platform sales from role start through role end; aligned main visuals and headlines across MOMO and social for the same product lines"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-[#7A7A7A]">
        Outcomes
      </p>

      <div className="mt-6 space-y-7">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm text-[#666]">Ecommerce platform sales</span>
            <span className="text-lg font-semibold tabular-nums text-emerald-400">
              +75%
            </span>
          </div>
          <p className="mt-1 text-xs text-[#7A7A7A] leading-relaxed">
            Increase in storefront-reported sales volume from my start date
            through my end date on the company&apos;s ecommerce platform.
          </p>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#E8E1D6]">
            <div
              className="h-full w-[75%] rounded-full bg-emerald-500/85"
              aria-hidden
            />
          </div>
        </div>

        <div className="border-t border-[#ECE7DE] pt-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm text-[#666]">
              Cross-channel alignment (verifiable)
            </span>
            <span className="text-sm font-medium text-[#8D99AE]">
              MOMO + social
            </span>
          </div>
          <p className="mt-1 text-xs text-[#7A7A7A] leading-relaxed">
            For each product line, hero art and headline structure on MOMO were
            matched to the social campaign—so the offer and benefit read the same
            way in-feed and on the shop, reducing cognitive gap at purchase.
          </p>
        </div>
      </div>
    </div>
  );
}

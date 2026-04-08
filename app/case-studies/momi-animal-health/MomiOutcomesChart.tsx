/** Outcomes visualization for MOMI Animal Health — sales lift + marketing clarity */

export function MomiOutcomesChart() {
  return (
    <div
      className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 sm:p-8"
      role="img"
      aria-label="Outcomes: 75 percent increase in online sales within two months; improved marketing clarity on social and eCommerce"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        Outcomes (two-month window)
      </p>

      <div className="mt-6 space-y-7">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm text-zinc-300">Online sales</span>
            <span className="text-lg font-semibold tabular-nums text-emerald-400">
              +75%
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500">vs. baseline before campaign push</p>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-zinc-800/90">
            <div
              className="h-full w-[75%] rounded-full bg-emerald-500/85"
              aria-hidden
            />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm text-zinc-300">Marketing clarity</span>
            <span className="text-sm font-medium text-violet-300">
              Improved · Social + eCommerce
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500">
            Clearer product value and offers across social posts and storefront
            creatives—fewer mixed messages at purchase.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <ChannelBar label="Social" width={100} />
            <ChannelBar label="eCommerce" width={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChannelBar({ label, width }: { label: string; width: number }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] text-zinc-400">
        <span>{label}</span>
        <span className="text-violet-400/90">↑</span>
      </div>
      <div className="mt-1 h-2 overflow-hidden rounded-full bg-zinc-800/90">
        <div
          className="h-full rounded-full bg-violet-500/70"
          style={{ width: `${Math.min(100, width)}%` }}
        />
      </div>
    </div>
  );
}

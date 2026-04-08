/**
 * Taiwan loyalty market sizing (Business Wire–referenced figures from case copy).
 * Pure CSS bars — no chart library.
 */

const CAGR = 11.3;
const YOY_2024 = 10.1;
const MARKET_B = 1.84;
const BAR_MAX_PCT = 15;

export function MarketSizingCharts() {
  const cagrWidth = (CAGR / BAR_MAX_PCT) * 100;
  const yoyWidth = (YOY_2024 / BAR_MAX_PCT) * 100;
  const sizeWidth = (MARKET_B / 2) * 100;

  return (
    <figure className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-100">
            Growth indicators
          </h3>
          <p className="mt-1 text-xs text-zinc-500">
            Taiwan loyalty market — annual growth references
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="text-zinc-400">2019–2023 CAGR</span>
                <span className="tabular-nums font-semibold text-zinc-100">
                  {CAGR}%
                </span>
              </div>
              <div
                className="mt-2 h-3 overflow-hidden rounded-full bg-zinc-800"
                role="presentation"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600/90 to-violet-400/80"
                  style={{ width: `${cagrWidth}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="text-zinc-400">2024 projected growth</span>
                <span className="tabular-nums font-semibold text-zinc-100">
                  {YOY_2024}%
                </span>
              </div>
              <div
                className="mt-2 h-3 overflow-hidden rounded-full bg-zinc-800"
                role="presentation"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-700/85 to-violet-500/75"
                  style={{ width: `${yoyWidth}%` }}
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Bars scaled to {BAR_MAX_PCT}% max for comparison.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-100">
            Projected market size
          </h3>
          <p className="mt-1 text-xs text-zinc-500">
            Taiwan loyalty market (2024 projection)
          </p>
          <p className="mt-6 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            US${MARKET_B}B
          </p>
          <p className="mt-1 text-sm text-zinc-400">approx. total market value</p>
          <div
            className="mt-6 h-4 overflow-hidden rounded-full bg-zinc-800"
            role="presentation"
            aria-label={`Relative scale: ${MARKET_B} billion US dollars of 2 billion US dollars reference`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-600/85 to-amber-400/70"
              style={{ width: `${sizeWidth}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            Bar length vs a US$2B reference scale (visual only).
          </p>
        </div>
      </div>
      <figcaption className="text-xs text-zinc-500">
        Figures cited from industry reporting (e.g. Business Wire) as referenced in
        the case narrative; charts are illustrative for scan-friendly comparison.
      </figcaption>
    </figure>
  );
}

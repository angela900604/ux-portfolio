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
        <div className="rounded-xl border border-zinc-800/90 border-l-[3px] border-l-[#004291] bg-zinc-900/40 p-5 sm:p-6">
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
                  className="h-full rounded-full bg-gradient-to-r"
                  style={{
                    width: `${cagrWidth}%`,
                    background:
                      "linear-gradient(90deg, #004291 0%, #0a6adb 55%, #3d8ef0 100%)",
                  }}
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
                  className="h-full rounded-full"
                  style={{
                    width: `${yoyWidth}%`,
                    background:
                      "linear-gradient(90deg, #F20C90 0%, #ff4db8 50%, #ff7ec8 100%)",
                  }}
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Bars scaled to {BAR_MAX_PCT}% max for comparison.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800/90 border-l-[3px] border-l-[#F20C90] bg-zinc-900/40 p-5 sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-100">
            Projected market size
          </h3>
          <p className="mt-1 text-xs text-zinc-500">
            Taiwan loyalty market (2024 projection)
          </p>
          <p className="mt-6 bg-gradient-to-r from-[#004291] to-[#F20C90] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            US${MARKET_B}B
          </p>
          <p className="mt-1 text-sm text-zinc-400">approx. total market value</p>
          <div
            className="mt-6 h-4 overflow-hidden rounded-full bg-zinc-800"
            role="presentation"
            aria-label={`Relative scale: ${MARKET_B} billion US dollars of 2 billion US dollars reference`}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${sizeWidth}%`,
                background:
                  "linear-gradient(90deg, #004291 0%, #55319e 42%, #F20C90 100%)",
              }}
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

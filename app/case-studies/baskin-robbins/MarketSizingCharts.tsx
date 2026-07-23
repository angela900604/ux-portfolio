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
    <figure className="cs-data-viz space-y-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-xl border border-ink-line bg-paper-soft p-5 sm:p-6">
          <h5 className="text-ink">
            Growth indicators
          </h5>
          <p className="mt-1 text-xs text-ink-muted">
            Taiwan loyalty market — annual growth references
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="text-ink-soft">2019–2023 CAGR</span>
                <span className="tabular-nums font-semibold text-ink">
                  {CAGR}%
                </span>
              </div>
              <div
                className="mt-2 h-3 overflow-hidden rounded-full bg-paper-soft"
                role="presentation"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#b80768]/95 to-[#ff5ca8]/85"
                  style={{ width: `${cagrWidth}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="text-ink-soft">2024 projected growth</span>
                <span className="tabular-nums font-semibold text-ink">
                  {YOY_2024}%
                </span>
              </div>
              <div
                className="mt-2 h-3 overflow-hidden rounded-full bg-paper-soft"
                role="presentation"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#F20C90]/90 to-[#ff8cc8]/80"
                  style={{ width: `${yoyWidth}%` }}
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-ink-muted">
            Bars scaled to {BAR_MAX_PCT}% max for comparison.
          </p>
        </div>

        <div className="rounded-xl border border-ink-line bg-paper-soft p-5 sm:p-6">
          <h5 className="text-ink">
            Projected market size
          </h5>
          <p className="mt-1 text-xs text-ink-muted">
            Taiwan loyalty market (2024 projection)
          </p>
          <p className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            US${MARKET_B}B
          </p>
          <p className="mt-1 text-sm text-ink-soft">approx. total market value</p>
          <div
            className="mt-6 h-4 overflow-hidden rounded-full bg-paper-soft"
            role="presentation"
            aria-label={`Relative scale: ${MARKET_B} billion US dollars of 2 billion US dollars reference`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ff5ca8]/90 to-[#F20C90]/75"
              style={{ width: `${sizeWidth}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-ink-muted">
            Bar length vs a US$2B reference scale (visual only).
          </p>
        </div>
      </div>
      <figcaption className="text-xs text-ink-muted">
        Figures cited from industry reporting (e.g. Business Wire) as referenced in
        the case narrative; charts are illustrative for scan-friendly comparison.
      </figcaption>
    </figure>
  );
}

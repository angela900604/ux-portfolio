/** Simple horizontal bar visualization for Admission Hub outcome metrics (server-safe). */

export function OutcomesMetricsChart() {
  return (
    <div
      className="cs-data-viz rounded-2xl border border-[#E8E1D6] bg-white p-6 sm:p-8"
      role="img"
      aria-label="Outcome metrics over three months: plus 500 Instagram followers net new, plus 21 percent Instagram engagement versus baseline, plus 18 percent organic site traffic in sessions"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-[#7A7A7A]">
        Outcomes at a glance (3 months)
      </p>
      <div className="mt-6 space-y-7">
        <MetricRow
          label="Instagram followers"
          value="+500"
          valueNote="net new"
          barWidth={100}
          barClass="bg-[#305E98]"
          valueClass="text-[#305E98]"
        />
        <MetricRow
          label="Instagram engagement rate"
          value="+21%"
          valueNote="vs. baseline"
          barWidth={21}
          barClass="bg-[#CE1C1C]"
          valueClass="text-[#CE1C1C]"
        />
        <MetricRow
          label="Organic site traffic"
          value="+18%"
          valueNote="site sessions"
          barWidth={18}
          barClass="bg-[#DE723D]"
          valueClass="text-[#DE723D]"
        />
      </div>
    </div>
  );
}

function MetricRow({
  label,
  value,
  valueNote,
  barWidth,
  barClass,
  valueClass,
}: {
  label: string;
  value: string;
  valueNote: string;
  barWidth: number;
  barClass: string;
  valueClass: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm text-[#666]">{label}</span>
        <div className="text-right">
          <span
            className={`text-lg font-semibold tabular-nums ${valueClass}`}
          >
            {value}
          </span>
          <span className="ml-2 text-xs text-[#7A7A7A]">{valueNote}</span>
        </div>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#E8E1D6]">
        <div
          className={`h-full rounded-full transition-[width] ${barClass}`}
          style={{ width: `${Math.min(100, Math.max(0, barWidth))}%` }}
        />
      </div>
    </div>
  );
}

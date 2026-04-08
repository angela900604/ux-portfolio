/** Simple horizontal bar visualization for Admission Hub outcome metrics (server-safe). */

export function OutcomesMetricsChart() {
  return (
    <div
      className="rounded-2xl border border-zinc-700/50 bg-zinc-900/40 p-6 sm:p-8"
      role="img"
      aria-label="Outcome metrics: plus 500 social followers in three months, plus 21 percent engagement, plus 18 percent organic traffic"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        Outcomes at a glance (3 months)
      </p>
      <div className="mt-6 space-y-7">
        <MetricRow
          label="Social followers"
          value="+500"
          valueNote="net new"
          barWidth={100}
          barClass="bg-brand/85"
        />
        <MetricRow
          label="Engagement rate"
          value="+21%"
          valueNote="vs. baseline"
          barWidth={21}
          barClass="bg-brand-soft/80"
        />
        <MetricRow
          label="Organic traffic"
          value="+18%"
          valueNote="site sessions"
          barWidth={18}
          barClass="bg-brand-deep/75"
        />
      </div>
      <p className="mt-5 text-xs text-zinc-500">
        Percentage bars use a 0–100% scale; the followers row uses a full bar to
        emphasize net volume.
      </p>
    </div>
  );
}

function MetricRow({
  label,
  value,
  valueNote,
  barWidth,
  barClass,
}: {
  label: string;
  value: string;
  valueNote: string;
  barWidth: number;
  barClass: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm text-zinc-300">{label}</span>
        <div className="text-right">
          <span className="text-lg font-semibold tabular-nums text-brand-bright">
            {value}
          </span>
          <span className="ml-2 text-xs text-zinc-500">{valueNote}</span>
        </div>
      </div>
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-zinc-800/90">
        <div
          className={`h-full rounded-full transition-[width] ${barClass}`}
          style={{ width: `${Math.min(100, Math.max(0, barWidth))}%` }}
        />
      </div>
    </div>
  );
}

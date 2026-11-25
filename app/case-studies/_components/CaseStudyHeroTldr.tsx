import type { ReactNode } from "react";
import {
  CS_BODY,
  CS_LEAD,
  CS_META_LABEL,
  CS_SECTION_EYEBROW,
  CS_STAT,
} from "@/lib/case-study-theme";

export type CaseStudyHeroTldrMetric = {
  kicker: string;
  value: string;
  title: string;
  detail?: string;
};

type Props = {
  headline: ReactNode;
  metrics: readonly CaseStudyHeroTldrMetric[];
  /** Section kicker above the headline (default Overview). */
  sectionLabel?: string;
  /** Metric value color (default ink). */
  metricValueClassName?: string;
};

/**
 * Overview band — Joseph Chen case study style: eyebrow, headline, border-top meta grid.
 */
export function CaseStudyHeroTldr({
  headline,
  metrics,
  sectionLabel = "Overview",
  metricValueClassName = "text-zinc-100",
}: Props) {
  const gridClass =
    metrics.length >= 4
      ? "grid-cols-2 sm:grid-cols-4"
      : metrics.length === 3
        ? "grid-cols-1 sm:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className="min-w-0">
      <span className={CS_SECTION_EYEBROW}>{sectionLabel}</span>
      <p className={`mt-3 sm:mt-4 ${CS_LEAD}`}>{headline}</p>

      {metrics.length > 0 ? (
      <dl
        className={`mt-8 grid ${gridClass} gap-x-6 gap-y-6 border-t border-zinc-800 pt-6`}
      >
        {metrics.map((m) => (
          <div key={m.kicker + m.title} className="min-w-0">
            <dt className={CS_META_LABEL}>{m.kicker}</dt>
            <dd
              className={`${CS_STAT} ${metricValueClassName}`.trim()}
            >
              {m.value}
            </dd>
            <dd className="mt-2 text-[14px] font-medium leading-snug text-zinc-100">
              {m.title}
            </dd>
            {m.detail ? (
              <dd className={`mt-2 ${CS_BODY}`}>
                {m.detail}
              </dd>
            ) : null}
          </div>
        ))}
      </dl>
      ) : null}
    </div>
  );
}

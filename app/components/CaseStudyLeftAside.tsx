"use client";

import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import { usePathname } from "next/navigation";
import { getCaseStudyAsideMeta } from "@/lib/case-study-aside-meta";
import { CASE_STUDY_PRIMARY_TITLE_CLASS } from "@/lib/site-shell";
import { PORTFOLIO_LEFT_RAIL_CLASS } from "@/lib/portfolio-shell";

/**
 * Case-study layout: left rail shows project title, subtitle, and at-a-glance
 * fields; meta block (timeline, role, etc.) pins to the column foot on desktop.
 */
export function CaseStudyLeftAside() {
  const pathname = usePathname() ?? "";
  const meta = getCaseStudyAsideMeta(pathname);

  return (
    <aside className={PORTFOLIO_LEFT_RAIL_CLASS} aria-label="Project summary">
      <div className="min-w-0 shrink-0 space-y-3">
        {meta.eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            {meta.eyebrow}
          </p>
        ) : null}
        <p className={`${CASE_STUDY_PRIMARY_TITLE_CLASS} text-zinc-50`}>
          {meta.title}
        </p>
        {meta.subtitle ? (
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            {meta.subtitle}
          </p>
        ) : null}
        {meta.primaryCta ? (
          <div className="mt-4 min-w-0">
            <SplitCapsuleLink
              href={meta.primaryCta.href}
              label={meta.primaryCta.label}
              variant={meta.primaryCta.variant ?? "emerald"}
            />
          </div>
        ) : null}
      </div>

      <div className="min-h-0 flex-1 shrink" aria-hidden />

      {meta.items.length > 0 ? (
        <dl className="min-w-0 shrink-0 space-y-4">
          {meta.items.map((row) => (
            <div key={row.label}>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                {row.label}
              </dt>
              <dd className="mt-0.5 text-sm font-medium leading-snug text-zinc-200">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </aside>
  );
}

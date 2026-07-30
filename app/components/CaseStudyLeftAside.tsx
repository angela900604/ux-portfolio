"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getCaseStudyAsideMeta,
  type CaseStudyAsideMeta,
} from "@/lib/case-study-aside-meta";
import { CASE_STUDY_SIDEBAR_TITLE_CLASS } from "@/lib/site-shell";
import { PORTFOLIO_LEFT_RAIL_CLASS } from "@/lib/portfolio-shell";
import { caseStudySidebarLinkClass } from "@/lib/case-study-sidebar-accent";

function sentenceCaseSegment(segment: string): string {
  const trimmed = segment.trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

function projectTypeTags(meta: CaseStudyAsideMeta): string[] {
  if (meta.eyebrowTags?.length) return [...meta.eyebrowTags];
  if (meta.eyebrow && meta.eyebrowAsProjectCardTag) return [meta.eyebrow];
  return [];
}

function formatProjectTypeLine(tags: string[], value: string): string {
  const parts = [
    ...tags,
    ...(value.trim() ? [value.trim()] : []),
  ];
  return parts.map(sentenceCaseSegment).join(" · ");
}

/**
 * Case-study layout: left rail shows project title, subtitle, and at-a-glance
 * fields; meta block (timeline, role, etc.) pins to the column foot on desktop.
 */
export function CaseStudyLeftAside() {
  const pathname = usePathname() ?? "";
  const meta = getCaseStudyAsideMeta(pathname);
  const typeTags = projectTypeTags(meta);
  const sidebarLinkClass = caseStudySidebarLinkClass(pathname);

  return (
    <aside
      className={`${PORTFOLIO_LEFT_RAIL_CLASS} font-sans`}
      aria-label="Project summary"
    >
      <div className="min-w-0 shrink-0 space-y-4">
        {meta.eyebrow && !meta.eyebrowAsProjectCardTag && !meta.eyebrowTags?.length ? (
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            {meta.eyebrow}
          </p>
        ) : null}
        <p className={`${CASE_STUDY_SIDEBAR_TITLE_CLASS} text-zinc-50`}>
          {meta.title}
        </p>
        {meta.subtitle ? (
          <p className="text-[15px] leading-[1.65] text-zinc-400">
            {meta.subtitle}
          </p>
        ) : null}
        {meta.textLinks?.length ? (
          <div className="mt-3 flex min-w-0 flex-col gap-2">
            {meta.textLinks.map((link) => {
              const isExternal =
                link.external === true ||
                (link.external !== false &&
                  /^https?:\/\//i.test(link.href));
              const linkClass = link.className ?? sidebarLinkClass;
              return isExternal ? (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        ) : null}
        {meta.primaryCta ? (
          <div className="mt-4 min-w-0">
            <Link
              href={meta.primaryCta.href}
              className={sidebarLinkClass}
            >
              {meta.primaryCta.label}
            </Link>
          </div>
        ) : null}
      </div>

      <div className="hidden min-h-0 shrink lg:block lg:flex-1" aria-hidden />

      {meta.items.length > 0 ? (
        <dl className="min-w-0 shrink-0 space-y-3 pt-6 sm:space-y-4 sm:pt-8 lg:pt-12">
          {meta.items.map((row) => {
            const isProjectType = row.label === "Project type";
            return (
              <div key={row.label}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {row.label}
                </dt>
                <dd className="mt-0.5 text-sm font-medium leading-snug text-zinc-200">
                  {isProjectType ? (
                    <p>{formatProjectTypeLine(typeTags, row.value)}</p>
                  ) : (
                    <p>{row.value}</p>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      ) : null}
    </aside>
  );
}

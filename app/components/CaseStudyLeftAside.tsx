"use client";

import Link from "next/link";
import { ProjectCardTag } from "@/app/components/ProjectCardTag";
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
    <aside
      className={`${PORTFOLIO_LEFT_RAIL_CLASS} font-sans`}
      aria-label="Project summary"
    >
      <div className="min-w-0 shrink-0 space-y-3">
        {meta.eyebrow && meta.eyebrowAsProjectCardTag ? (
          <div className="group w-fit max-w-full">
            <ProjectCardTag>{meta.eyebrow}</ProjectCardTag>
          </div>
        ) : meta.eyebrow ? (
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
        {meta.textLinks?.length ? (
          <div className="mt-3 flex min-w-0 flex-col gap-2">
            {meta.textLinks.map((link) => {
              const isExternal =
                link.external === true ||
                (link.external !== false &&
                  /^https?:\/\//i.test(link.href));
              const minaCaseStudy =
                pathname === "/case-studies/ai-marketplace" ||
                pathname.startsWith("/case-studies/ai-marketplace/");
              const defaultClass = minaCaseStudy
                ? "text-sm font-medium text-[#B75E45] underline-offset-[5px] transition hover:text-[#9a4f38] hover:underline"
                : "text-sm font-medium text-emerald-400/95 underline-offset-[5px] transition hover:text-emerald-300 hover:underline";
              const linkClass = link.className ?? defaultClass;
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
              className={
                pathname === "/case-studies/ai-marketplace" ||
                pathname.startsWith("/case-studies/ai-marketplace/")
                  ? "text-sm font-medium text-[#B75E45] underline-offset-[5px] transition hover:text-[#9a4f38] hover:underline"
                  : "text-sm font-medium text-emerald-400/95 underline-offset-[5px] transition hover:text-emerald-300 hover:underline"
              }
            >
              {meta.primaryCta.label}
            </Link>
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

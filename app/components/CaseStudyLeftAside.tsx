"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCaseStudyAsideMeta } from "@/lib/case-study-aside-meta";
import { PORTFOLIO_LEFT_RAIL_CLASS } from "@/lib/portfolio-shell";

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

const HOVER_NAV = "transition hover:text-[color:var(--nav-accent-blue)]";

/**
 * Case-study layout: left rail shows project title, subtitle, and at-a-glance
 * fields instead of the home profile / focus list.
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
        <p
          className="text-[clamp(1.15rem,2.2vw,1.65rem)] font-normal leading-[1.15] tracking-[-0.02em] text-zinc-50"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          {meta.title}
        </p>
        {meta.subtitle ? (
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            {meta.subtitle}
          </p>
        ) : null}
      </div>

      {meta.items.length > 0 ? (
        <dl className="mt-8 min-w-0 shrink-0 space-y-4">
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

      <div className="min-h-0 flex-1 shrink" aria-hidden />

      <div className="shrink-0 pb-0 pt-2 lg:mt-0">
        <div className="space-y-2 text-xs leading-relaxed text-zinc-500">
          <p className="text-zinc-400">Based in Vancouver, BC</p>
          <a
            href="mailto:angela900604@gmail.com"
            className={`block text-zinc-400 ${HOVER_NAV}`}
          >
            angela900604@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/angelayangg/"
            target="_blank"
            rel="noopener noreferrer"
            className={`block text-zinc-400 ${HOVER_NAV}`}
          >
            LinkedIn
          </a>
          <Link
            href="/"
            className={`block text-zinc-400 ${HOVER_NAV}`}
          >
            ← Home
          </Link>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-zinc-600">
          © {new Date().getFullYear()} · vibe-coded by me.
        </p>
      </div>
    </aside>
  );
}

"use client";

import { useCallback, useLayoutEffect, useState } from "react";

export type CaseStudyTocItem = {
  id: string;
  label: string;
};

type Props = {
  items: readonly CaseStudyTocItem[];
  variant?: "dark" | "light";
  /** e.g. Traditional Chinese label above the list */
  heading?: string;
  className?: string;
};

/** Match scroll-mt-28 / sm:scroll-mt-32 — section is "current" when its top passes this line. */
const SCROLL_ACTIVE_OFFSET_PX = 128;

/**
 * Sticky in-page navigation for case studies (desktop / large tablet).
 * Highlights the TOC entry for the section in view while scrolling.
 */
export function CaseStudySideNav({
  items,
  variant = "dark",
  heading = "On this page",
  className = "",
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const updateActive = useCallback(() => {
    let current: string | null = null;
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= SCROLL_ACTIVE_OFFSET_PX) current = item.id;
    }
    setActiveId(current);
  }, [items]);

  useLayoutEffect(() => {
    updateActive();
    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        updateActive();
      });
    };
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [updateActive]);

  if (items.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <aside
      className={`hidden h-full min-h-0 lg:block ${className}`}
      aria-label={heading}
    >
      <nav className="sticky top-28 z-30 max-h-[calc(100vh-7.5rem)] overflow-y-auto overscroll-contain pr-1 sm:top-32">
        <p
          className={
            isDark
              ? "mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
              : "mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#7A7A7A]"
          }
        >
          {heading}
        </p>
        <ul
          className={
            isDark
              ? "space-y-0.5 border-l border-zinc-800"
              : "space-y-0.5 border-l border-[#D4C5B0]/80"
          }
        >
          {items.map((item) => {
            const active = activeId === item.id;
            const base =
              "block border-l-2 py-1 pl-3 text-left text-[12px] leading-snug transition";
            const darkInactive =
              "border-transparent text-zinc-500 hover:border-violet-500/60 hover:text-zinc-200";
            const darkActive =
              "border-violet-500/80 text-zinc-100 hover:border-violet-500 hover:text-white";
            const lightInactive =
              "border-transparent text-[#6B6B6B] hover:border-[#8D99AE] hover:text-[#2C3E50]";
            const lightActive =
              "border-[#8D99AE] text-[#2C3E50] font-medium";

            const linkClass = isDark
              ? `${base} ${active ? darkActive : darkInactive}`
              : `${base} ${active ? lightActive : lightInactive}`;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={linkClass}
                  aria-current={active ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

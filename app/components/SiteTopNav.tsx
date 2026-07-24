"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PORTFOLIO_LEFT_RAIL_WIDTH_CLASS } from "@/lib/portfolio-shell";
import { SITE_GUTTER_CLASS, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

const HOVER_NAV = "transition hover:text-[color:var(--nav-accent-blue)]";

/** Joseph Chen–style nav: 12px uppercase links with wide tracking. */
const NAV_LINKS_CLASS =
  "flex items-center gap-6 text-[12px] font-medium uppercase tracking-[0.16em] sm:gap-8";

const NAV_LINK_BASE =
  "inline-flex min-h-[44px] items-center px-1 transition-opacity";

const CLOCK_CLASS =
  "pointer-events-none absolute left-1/2 top-1/2 z-0 hidden max-w-[min(100%,14rem)] -translate-x-1/2 -translate-y-1/2 truncate text-center text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-zinc-600 sm:block sm:max-w-none sm:text-[11px] sm:tracking-[0.2em]";

function useLocaleDateTime() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const format = () =>
      new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    setLabel(format());
    const id = window.setInterval(() => setLabel(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return label;
}

export function SiteTopNav({ theme = "dark" }: { theme?: "dark" | "paper" }) {
  const pathname = usePathname();
  const tick = useLocaleDateTime();
  const isPaper = theme === "paper";

  const brandTypography =
    "text-[12px] font-medium uppercase tracking-[0.16em]";

  const brandClass = isPaper
    ? `${NAV_LINK_BASE} ${brandTypography} text-ink transition hover:opacity-80`
    : `${NAV_LINK_BASE} ${brandTypography} text-zinc-300 ${HOVER_NAV}`;

  const navLinkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    if (isPaper) {
      return `${NAV_LINK_BASE} ${
        active
          ? "text-ink opacity-100"
          : "text-ink-muted opacity-80 hover:text-ink hover:opacity-100"
      }`;
    }
    return `${NAV_LINK_BASE} ${
      active
        ? "opacity-100 text-zinc-200"
        : `opacity-80 text-zinc-500 hover:opacity-100 ${HOVER_NAV}`
    }`;
  };

  const headerClass = isPaper
    ? "fixed top-0 left-0 right-0 z-[60] flex h-14 items-center border-b border-ink-line bg-paper/90 backdrop-blur-md"
    : "fixed top-0 left-0 right-0 z-[60] flex h-14 items-center border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md";

  const clockClass = isPaper
    ? "pointer-events-none absolute left-1/2 top-1/2 z-0 hidden max-w-[min(100%,14rem)] -translate-x-1/2 -translate-y-1/2 truncate text-center text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-ink-muted sm:block sm:max-w-none sm:text-[11px] sm:tracking-[0.2em]"
    : CLOCK_CLASS;

  const railBorderClass = isPaper ? "border-ink-line" : "border-zinc-800";

  return (
    <header className={headerClass}>
      {/* &lt; lg: same horizontal padding as stacked left rail */}
      <div
        className={`relative flex h-full w-full items-center ${SITE_GUTTER_CLASS} lg:hidden`}
      >
        <div className="relative z-[1] flex min-w-0 flex-1 justify-start">
          <Link href="/" className={brandClass}>
            Angela Yang
          </Link>
        </div>
        <p className={clockClass} aria-live="polite" aria-atomic="true">
          {tick || "\u00a0"}
        </p>
        <nav
          className={`relative z-[1] flex flex-1 shrink-0 items-center justify-end ${NAV_LINKS_CLASS}`}
        >
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>
        </nav>
      </div>

      {/* lg+: left cell = rail width + padding; right = same shell as main column */}
      <div className="hidden h-full min-h-0 w-full min-w-0 lg:flex lg:flex-row">
        <div
          className={`flex shrink-0 items-center border-r ${railBorderClass} ${SITE_GUTTER_CLASS} ${PORTFOLIO_LEFT_RAIL_WIDTH_CLASS}`}
        >
          <Link href="/" className={brandClass}>
            Angela Yang
          </Link>
        </div>
        <div
          className={`flex min-h-0 min-w-0 flex-1 items-stretch ${SITE_SHELL_CONTAINER}`}
        >
          <div className="relative flex h-full w-full min-w-0 items-center">
            <p className={clockClass} aria-live="polite" aria-atomic="true">
              {tick || "\u00a0"}
            </p>
            <nav
              className={`relative z-[1] flex flex-1 shrink-0 items-center justify-end ${NAV_LINKS_CLASS}`}
            >
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>
              <Link href="/about" className={navLinkClass("/about")}>
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

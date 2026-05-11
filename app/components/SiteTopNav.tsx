"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PORTFOLIO_X_PAD } from "@/lib/portfolio-shell";

const HOVER_NAV = "transition hover:text-[color:var(--nav-accent-blue)]";

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

export function SiteTopNav() {
  const pathname = usePathname();
  const tick = useLocaleDateTime();

  const linkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return active
      ? `font-medium text-[color:var(--nav-accent-blue)]`
      : `text-zinc-500 ${HOVER_NAV}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] flex h-14 items-center border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className={`relative flex h-full w-full items-center ${PORTFOLIO_X_PAD}`}>
        <div className="relative z-[1] flex min-w-0 flex-1 justify-start">
          <Link
            href="/"
            className={`min-w-0 shrink text-base font-medium tracking-wide text-zinc-300 ${HOVER_NAV}`}
          >
            Angela Yang
          </Link>
        </div>

        <p
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 max-w-[min(100%,14rem)] -translate-x-1/2 -translate-y-1/2 truncate text-center text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-zinc-600 sm:max-w-none sm:text-[11px] sm:tracking-[0.2em]"
          aria-live="polite"
          aria-atomic="true"
        >
          {tick || "\u00a0"}
        </p>

        <nav className="relative z-[1] flex flex-1 shrink-0 items-center justify-end gap-6 text-sm sm:gap-8 sm:text-base">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

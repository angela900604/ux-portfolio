"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PORTFOLIO_EDGE_GUTTER } from "@/lib/portfolio-shell";

const HOVER_NAV = "transition hover:text-[color:var(--nav-accent-blue)]";

export function SiteTopNav() {
  const pathname = usePathname();

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
      <div
        className={`flex h-full w-full items-center justify-between gap-6 ${PORTFOLIO_EDGE_GUTTER}`}
      >
        <Link
          href="/"
          className={`min-w-0 shrink text-base font-medium tracking-wide text-zinc-300 ${HOVER_NAV}`}
        >
          Angela Yang
        </Link>
        <nav className="flex shrink-0 items-center gap-6 text-sm sm:gap-8 sm:text-base">
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ACCENT_CLASS = "text-[color:var(--color-cursor-accent)]";

export function SiteTopNav() {
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    return active
      ? `font-medium ${ACCENT_CLASS}`
      : "text-zinc-500 transition hover:text-zinc-200";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] flex h-14 items-center border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between gap-6 px-6 sm:px-[100px]">
        <Link
          href="/"
          className="min-w-0 shrink text-base font-medium tracking-wide text-zinc-300 transition hover:text-zinc-50"
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

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex flex-col items-center overflow-hidden py-0.5 text-base text-zinc-400 transition-colors hover:text-zinc-100"
    >
      <span className="relative z-10">{children}</span>
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-zinc-100 transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <div className={`${SITE_SHELL_CONTAINER} py-4`}>
        <div className={CASE_STUDY_BODY_GRID}>
          <div className="flex min-w-0 items-center justify-between gap-6 lg:col-span-2">
            <Link
              href="/"
              className="group relative inline-flex flex-col overflow-hidden text-base font-medium tracking-wide text-zinc-400 transition-colors hover:text-zinc-100"
            >
              <span className="relative z-10">Angela Yang</span>
              <span
                className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-zinc-100 transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden
              />
            </Link>
            <nav
              className="flex shrink-0 gap-6 sm:gap-8"
              aria-label="Primary"
            >
              <NavItem href="/">Work</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/resume">Resume</NavItem>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

const RESUME_MAIL =
  "mailto:angela900604@gmail.com?subject=Resume%20request";

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
      className="group relative inline-flex flex-col items-center overflow-hidden py-1 text-[13px] font-medium uppercase tracking-[0.15em] text-[#888580] transition-colors hover:text-[#F0EDE6]"
    >
      <span className="relative z-10 translate-y-0 transition-transform duration-300 ease-out group-hover:translate-y-0.5">
        {children}
      </span>
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#E8C9A0] transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-[rgba(255,255,255,0.08)] bg-[rgba(13,13,13,0.85)] backdrop-blur-[12px]"
          : "border-transparent bg-transparent"
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className={`${SITE_SHELL_CONTAINER} py-4`}>
        <div className={CASE_STUDY_BODY_GRID}>
          <div className="flex min-w-0 items-center justify-between gap-6 lg:col-span-2">
            <Link
              href="/"
              className="group relative inline-flex flex-col overflow-hidden font-[family-name:var(--font-serif-display)] text-[18px] font-normal tracking-[-0.02em] text-[#F0EDE6] transition-colors hover:text-[#E8C9A0]"
            >
              <span className="sr-only">Angela Yang — Home</span>
              <span className="relative z-10" aria-hidden>
                AY
              </span>
              <span
                className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#E8C9A0] transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden
              />
            </Link>
            <nav
              className="flex shrink-0 gap-6 sm:gap-10"
              aria-label="Primary"
            >
              <NavItem href="/">Work</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href={RESUME_MAIL}>Resume</NavItem>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

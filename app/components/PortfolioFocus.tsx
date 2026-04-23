"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { FadeUp } from "./FadeUp";
import { SectionHeader } from "./SectionHeader";
import {
  SPECIALIZE_PILLARS,
  specializeSectionIntro,
} from "../content/specialize";

const BODY =
  "text-[15px] sm:text-[16px] leading-relaxed text-[#888580]";

export function PortfolioFocus({ sectionLabel }: { sectionLabel: string }) {
  const reduceMotion = useReducedMotion();
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  return (
    <section
      className="border-y border-[rgba(255,255,255,0.08)] bg-[#0D0D0D]"
      aria-labelledby="portfolio-focus-heading"
    >
      <div
        className={`${SITE_SHELL_CONTAINER} py-16 sm:py-20 lg:py-[120px]`}
      >
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeUp>
            <SectionHeader label={sectionLabel}>
              <span id="portfolio-focus-heading">What I specialize in</span>
            </SectionHeader>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className={`${BODY} max-w-xl text-pretty text-[#C9C4BC]`}>
              {specializeSectionIntro}
            </p>
          </FadeUp>
        </div>

        {/* Desktop — two columns, always expanded */}
        <ul className="hidden flex-col gap-0 lg:flex">
          {SPECIALIZE_PILLARS.map((pillar, i) => (
            <li
              key={pillar.title}
              className="border-t border-[rgba(255,255,255,0.08)] first:border-t-0"
            >
              <FadeUp delay={i * 0.1}>
                <div className="grid grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] gap-10 py-10">
                  <div className="flex gap-6">
                    <span className="font-[family-name:var(--font-serif-display)] text-[clamp(2rem,3vw,2.75rem)] font-normal leading-none tracking-[-0.03em] text-[#E8C9A0]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="pt-1 font-[family-name:var(--font-serif-display)] text-[clamp(1.25rem,1.6vw,1.5rem)] font-normal leading-snug tracking-[-0.02em] text-[#F0EDE6]">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="min-w-0 pt-1">
                    <p className="text-[15px] leading-relaxed text-[#C9C4BC] sm:text-[16px]">
                      {pillar.summary}
                    </p>
                    {pillar.details.length > 0 ? (
                      <p className="mt-5 border-t border-[rgba(255,255,255,0.08)] pt-5 text-[14px] leading-relaxed text-[#888580] sm:text-[15px]">
                        {pillar.details.join(" ")}
                      </p>
                    ) : null}
                  </div>
                </div>
              </FadeUp>
            </li>
          ))}
        </ul>

        {/* Mobile / tablet — accordion */}
        <ul className="flex flex-col lg:hidden">
          {SPECIALIZE_PILLARS.map((pillar, i) => {
            const expanded = openMobile === i;
            return (
              <li
                key={pillar.title}
                className="border-t border-[rgba(255,255,255,0.08)] first:border-t-0"
              >
                <FadeUp delay={i * 0.1}>
                  <button
                    type="button"
                    className={`flex w-full items-start gap-4 py-5 text-left transition-colors ${
                      expanded ? "bg-[#161616]" : "bg-transparent hover:bg-[#1A1A1A]"
                    }`}
                    aria-expanded={expanded}
                    onClick={() =>
                      setOpenMobile((v) => (v === i ? null : i))
                    }
                  >
                    <span className="font-[family-name:var(--font-serif-display)] text-[2rem] font-normal leading-none tracking-[-0.03em] text-[#E8C9A0]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="relative inline-block font-[family-name:var(--font-serif-display)] text-[1.2rem] font-normal leading-snug tracking-[-0.02em] text-[#F0EDE6]">
                        {pillar.title}
                        <span
                          className={`pointer-events-none absolute -bottom-1 left-0 h-px bg-[#E8C9A0] transition-[width] duration-300 ${
                            expanded ? "w-full" : "w-0"
                          }`}
                          aria-hidden
                        />
                      </span>
                    </span>
                    <span
                      className="mt-1 text-lg leading-none text-[#E8C9A0]"
                      aria-hidden
                    >
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded ? (
                      <motion.div
                        key="panel"
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden border-t border-[rgba(255,255,255,0.08)] bg-[#161616] px-4 pb-6 pt-4 sm:px-6"
                      >
                        <p className="text-[15px] leading-relaxed text-[#C9C4BC] sm:text-[16px]">
                          {pillar.summary}
                        </p>
                        {pillar.details.length > 0 ? (
                          <p className="mt-4 text-[14px] leading-relaxed text-[#888580] sm:text-[15px]">
                            {pillar.details.join(" ")}
                          </p>
                        ) : null}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </FadeUp>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

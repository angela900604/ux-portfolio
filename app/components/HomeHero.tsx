"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroHook, specializeEyebrow } from "../content/specialize";

const DISPLAY_NAME = "Angela Yang";
const words = DISPLAY_NAME.split(" ");

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center pb-16 pt-10 sm:pb-20 sm:pt-14">
      {/* Decorative ghost word */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-[55%] select-none font-[family-name:var(--font-serif-display)] text-[clamp(8rem,22vw,20rem)] font-normal leading-none tracking-[-0.04em] text-[#F0EDE6] opacity-[0.025]"
        aria-hidden
      >
        DESIGN
      </div>

      {/* Film grain */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay grain-overlay"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-1 sm:px-0">
        <motion.p
          className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#E8C9A0]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {specializeEyebrow}
        </motion.p>

        <h1
          className="mt-5 font-[family-name:var(--font-serif-display)] font-normal leading-[0.95] tracking-[-0.03em] text-[#F0EDE6]"
          style={{
            fontSize: "clamp(4rem, 10vw, 8rem)",
          }}
        >
          <span className="sr-only">{DISPLAY_NAME}</span>
          {reduceMotion ? (
            <span aria-hidden="true">{DISPLAY_NAME}</span>
          ) : (
            <span className="inline-flex flex-wrap gap-x-[0.25em]" aria-hidden="true">
              {words.map((word, wi) => (
                <span key={word} className="inline-block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="inline-block"
                    initial={{ clipPath: "inset(0 0 100% 0)" }}
                    animate={{ clipPath: "inset(0 0 0% 0)" }}
                    transition={{
                      duration: 0.65,
                      delay: wi === 0 ? 0.4 : 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          )}
        </h1>

        <motion.p
          className="mt-8 max-w-2xl text-pretty text-[15px] font-normal leading-relaxed text-[#888580] sm:text-[16px]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {heroHook}
        </motion.p>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-[#888580]"
        aria-hidden
      >
        <motion.span
          className="inline-block text-[#E8C9A0]"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 6, 0] }
          }
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ fontSize: "1.1rem", lineHeight: 1 }}
        >
          ↓
        </motion.span>
      </div>
    </section>
  );
}

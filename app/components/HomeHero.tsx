"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroHook } from "../content/specialize";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const DISPLAY_NAME = "Angela Yang";

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const chars = [...DISPLAY_NAME];

  return (
    <div className="flex min-h-[72vh] flex-col gap-8 sm:min-h-[78vh] sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:min-h-[80vh] lg:gap-12">
      <div className="relative z-10 min-w-0 flex-1 sm:max-w-[min(52rem,58%)]">
        <h1
          className="font-[family-name:var(--font-display)] font-semibold leading-[0.95] tracking-[-0.03em] text-zinc-50"
          style={{
            fontSize: "clamp(4.5rem, 8vw, 7.5rem)",
          }}
        >
          <span className="sr-only">{DISPLAY_NAME}</span>
          {reduceMotion ? (
            <span aria-hidden="true">{DISPLAY_NAME}</span>
          ) : (
            <span className="inline-block" aria-hidden="true">
              {chars.map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.22,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
          )}
        </h1>
        <motion.p
          className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-zinc-400 sm:text-[16px] md:mt-8"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {heroHook}
        </motion.p>
      </div>

      <div
        className="relative mx-auto w-full max-w-[min(100%,20rem)] shrink-0 sm:mx-0 sm:w-[38%] sm:max-w-none md:w-[min(42%,28rem)] lg:w-[min(40%,32rem)]"
        aria-hidden
      >
        <div
          className="home-bubble-float relative mx-auto w-full"
          style={{ aspectRatio: 1024 / 744, maxWidth: 520 }}
        >
          <div
            className="absolute inset-0 rounded-full bg-zinc-950/25 blur-3xl"
            aria-hidden
          />
          <div className="relative h-full w-full">
            <Image
              src={BUBBLE_SRC}
              alt=""
              fill
              className="object-contain object-center md:object-right"
              sizes="(max-width: 768px) 90vw, 520px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

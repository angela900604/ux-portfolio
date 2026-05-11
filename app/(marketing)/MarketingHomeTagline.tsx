"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

const CYCLING_PHRASES = [
  "I design consumer-facing experiences across mobile, web, and tablets.",
  "I value empathy and curiosity in how I approach every problem.",
] as const;

const CYCLE_MS = 2500;

const SUBHEAD_SLOT_MIN_H =
  "min-h-[calc(4*1.15*clamp(1.05rem,2.8vw,1.35rem))] sm:min-h-[calc(3.25*1.15*clamp(1.05rem,2.8vw,1.35rem))]";

export function MarketingHomeTagline() {
  const reduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setPhraseIndex((i) => (i + 1) % CYCLING_PHRASES.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const subClass =
    "text-[clamp(1.05rem,2.8vw,1.35rem)] font-normal leading-snug tracking-[-0.02em] text-zinc-400 [overflow-wrap:anywhere]";

  return (
    <div
      className={`relative mt-5 w-full overflow-hidden ${SUBHEAD_SLOT_MIN_H}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.h2
          key={reduceMotion ? "static" : CYCLING_PHRASES[phraseIndex]}
          role="status"
          initial={reduceMotion ? false : { opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: "100%" }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
          }
          className={subClass}
          style={{ fontFamily: DISPLAY_FONT }}
        >
          {reduceMotion ? CYCLING_PHRASES[0] : CYCLING_PHRASES[phraseIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

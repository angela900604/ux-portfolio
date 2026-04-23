"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const ASPECT = 1024 / 744;

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

const CYCLING_PHRASES = [
  "I design AI-driven products across mobile and web experiences",
  "I build scalable B2B systems with multi-role workflows in mind",
  "I studied new media and user experience design in Toronto",
  "I value empathy and curiosity in how I approach every problem",
  "I love traveling across Europe and capturing scenic moments",
] as const;

const CYCLE_MS = 2000;

function BubbleBackdrop() {
  return (
    <div
      className="absolute inset-0 rounded-full bg-zinc-950/25 blur-3xl"
      aria-hidden
    />
  );
}

export function HeroWithBubble() {
  const reduceMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setPhraseIndex((i) => (i + 1) % CYCLING_PHRASES.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const headlineClass =
    "max-w-none text-left text-[clamp(1.85rem,4.5vw,4rem)] font-normal leading-[1.08] tracking-[-0.02em]";

  return (
    <div>
      <div className="relative isolate flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6">
        <div className="relative z-10 flex min-w-0 w-full max-w-[54rem] shrink-0 flex-col items-start gap-3 text-left lg:max-w-[min(50rem,54%)]">
          <h1 className="sr-only">Angela Yang — product designer</h1>
          <p
            className={`${headlineClass} text-white`}
            style={{ fontFamily: DISPLAY_FONT }}
          >
            Hello, I&apos;m Angela
          </p>
          <div
            className="relative w-full min-h-[2.75em] overflow-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={
                  reduceMotion
                    ? "static-hero-sub"
                    : CYCLING_PHRASES[phraseIndex]
                }
                role="status"
                initial={
                  reduceMotion ? false : { opacity: 0, y: "-100%" }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: "100%" }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.48,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                className={`${headlineClass} text-zinc-400`}
                style={{ fontFamily: DISPLAY_FONT }}
              >
                {reduceMotion
                  ? CYCLING_PHRASES[0]
                  : CYCLING_PHRASES[phraseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop: right edge aligns with shell (same as sections below); extends slightly left over copy. */}
        <div className="relative z-0 hidden min-h-[min(22rem,36vh)] flex-1 lg:block">
          <div
            className="home-bubble-float pointer-events-none absolute right-0 top-1/2 max-h-[min(540px,52vh)] w-[min(742px,calc(100%+2.5rem))] -translate-y-1/2"
            style={{ aspectRatio: ASPECT }}
          >
            <BubbleBackdrop />
            <div className="relative h-full w-full">
              <Image
                src={BUBBLE_SRC}
                alt=""
                fill
                className="object-contain object-right"
                sizes="(max-width: 1480px) 80vw, 760px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet: centered bubble under hero copy */}
      <div
        className="pointer-events-none mt-8 flex justify-center lg:hidden"
        aria-hidden
      >
        <div
          className="home-bubble-float relative w-[min(92vw,960px)]"
          style={{ aspectRatio: ASPECT }}
        >
          <BubbleBackdrop />
          <div className="relative h-full w-full">
            <Image
              src={BUBBLE_SRC}
              alt=""
              fill
              className="object-contain object-center"
              sizes="970px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

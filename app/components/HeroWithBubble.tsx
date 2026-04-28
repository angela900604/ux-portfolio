"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const ASPECT = 1024 / 744;

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

const CYCLING_PHRASES = [
  "I design consumer-facing, community-driven products — AI-assisted mobile experiences where member connection and trust matter",
  "I value empathy and curiosity in how I approach every problem",
] as const;

const HERO_LOGOS = [
  { src: "/home/logos/figma.png", alt: "Figma" },
  { src: "/home/logos/gemini.png", alt: "Gemini" },
  { src: "/home/logos/cursor.png", alt: "Cursor" },
  { src: "/home/logos/claude.png", alt: "Claude" },
  { src: "/home/logos/chatgpt.png", alt: "ChatGPT" },
  { src: "/home/logos/github.png", alt: "GitHub" },
  { src: "/home/logos/vercel.png", alt: "Vercel" },
] as const;

const CYCLE_MS = 2500;

/**
 * Reserve enough vertical space for wrapped cycling subtitles on narrow widths.
 * (overflow-hidden would clip if this is too tight.)
 */
const SUBHEAD_SLOT_MIN_H =
  "min-h-[calc(5*1.15*clamp(1.85rem,4.5vw,4rem))] sm:min-h-[calc(4*1.15*clamp(1.85rem,4.5vw,4rem))] lg:min-h-[calc(3.5*1.15*clamp(1.85rem,4.5vw,4rem))]";

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
  const subheadClass = `${headlineClass} leading-[1.15] [overflow-wrap:anywhere]`;

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="relative isolate flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
          <div className="relative z-10 flex min-w-0 w-full max-w-[72rem] shrink-0 flex-col items-start gap-3 text-left lg:max-w-[min(72rem,65%)]">
            <h1 className="sr-only">Angela Yang — product designer</h1>
            <p
              className={`${headlineClass} max-w-[min(56rem,58vw)] text-white`}
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Hello, I&apos;m Angela
            </p>
            <div
              className={`relative w-full max-w-[72rem] overflow-hidden pb-1 ${SUBHEAD_SLOT_MIN_H}`}
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
                  className={`${subheadClass} text-zinc-400`}
                  style={{ fontFamily: DISPLAY_FONT }}
                >
                  {reduceMotion
                    ? CYCLING_PHRASES[0]
                    : CYCLING_PHRASES[phraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop: large orb — ~58vh tall (~40–46vw wide), right-aligned; overlaps headline area (text stays z-10). */}
          <div className="relative z-0 hidden min-h-[min(28rem,50vh)] flex-1 lg:block">
            <div className="pointer-events-none absolute inset-y-0 right-0 flex w-full items-center justify-end">
              <div
                className="home-bubble-float relative h-auto w-[min(46vw,56rem,calc(62vh*1024/744))] shrink-0"
                style={{ aspectRatio: ASPECT }}
              >
                <BubbleBackdrop />
                <div className="relative h-full w-full">
                  <Image
                    src={BUBBLE_SRC}
                    alt=""
                    fill
                    className="object-contain object-right"
                    sizes="(max-width: 1280px) 50vw, 720px"
                    priority
                  />
                </div>
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
            className="home-bubble-float relative h-auto w-[min(92vw,36rem,calc(48vh*1024/744))]"
            style={{ aspectRatio: ASPECT }}
          >
            <BubbleBackdrop />
            <div className="relative h-full w-full">
              <Image
                src={BUBBLE_SRC}
                alt=""
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 92vw, 640px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-1 flex w-full shrink-0 justify-center sm:mt-2 lg:mt-auto lg:pt-0">
        <ul className="mx-auto grid w-full max-w-4xl grid-cols-4 justify-items-center gap-x-5 gap-y-5 sm:max-w-5xl sm:grid-cols-7 sm:gap-x-6 md:gap-x-7">
          {HERO_LOGOS.map((logo) => (
            <li
              key={logo.src}
              className="flex h-11 w-full max-w-[5.25rem] items-center justify-center sm:h-12 sm:max-w-[5.75rem]"
            >
              <div className="relative h-9 w-full sm:h-10">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain object-center opacity-85 [filter:grayscale(1)]"
                  sizes="(max-width: 640px) 22vw, 92px"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

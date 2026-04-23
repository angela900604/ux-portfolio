"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const ASPECT = 1024 / 744;
/** Cap width; height scales with text column × {@link BUBBLE_SCALE}. */
const MAX_BUBBLE_W = 1380;
const BUBBLE_SCALE = 1.92;

const HERO_CYCLING_PHRASES = [
  "I design AI-driven products across mobile and web experiences",
  "I build scalable B2B systems with multi-role workflows in mind",
  "I studied new media and user experience design in Toronto",
  "I value empathy and curiosity in how I approach every problem",
  "I love traveling across Europe and capturing scenic moments",
] as const;

const CYCLING_INTERVAL_MS = 2500;

function BubbleBackdrop() {
  return (
    <div
      className="absolute inset-0 rounded-full bg-zinc-950/25 blur-3xl"
      aria-hidden
    />
  );
}

function HeroCyclingTagline() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % HERO_CYCLING_PHRASES.length),
      CYCLING_INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, []);

  const phrase = HERO_CYCLING_PHRASES[index];

  if (reduceMotion) {
    return (
      <p
        className="max-w-[56rem] text-[clamp(1.75rem,6vw,5rem)] font-extrabold leading-[1.12] tracking-tight text-[#888888]"
        style={{
          fontFamily: "var(--font-hero-cycling), system-ui, sans-serif",
        }}
      >
        {phrase}
      </p>
    );
  }

  return (
    <div
      className="w-full max-w-[56rem] min-h-[clamp(6rem,20vw,12rem)]"
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={phrase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[56rem] text-left text-[clamp(1.75rem,6vw,5rem)] font-extrabold leading-[1.12] tracking-tight text-[#888888]"
          style={{
            fontFamily: "var(--font-hero-cycling), system-ui, sans-serif",
          }}
        >
          {phrase}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function HeroWithBubble() {
  const textRef = useRef<HTMLDivElement>(null);
  const [textH, setTextH] = useState(0);

  const measure = useCallback(() => {
    const el = textRef.current;
    if (!el) return;
    setTextH(el.offsetHeight);
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = textRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const bubbleH =
    textH > 0 ? Math.round(textH * BUBBLE_SCALE) : undefined;
  const bubbleW =
    bubbleH != null
      ? Math.min(Math.round(bubbleH * ASPECT), MAX_BUBBLE_W)
      : undefined;

  return (
    <div>
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
        <div
          ref={textRef}
          className="relative z-10 min-w-0 w-full max-w-[48rem] shrink-0 lg:max-w-[min(48rem,58%)]"
        >
          <h1 className="sr-only">Angela Yang — product designer</h1>
          <div className="flex flex-col items-start gap-3 sm:gap-4">
            <p
              className="text-left text-[clamp(2.25rem,7vw,4.5rem)] font-black leading-[1.05] tracking-tight text-white"
              style={{
                fontFamily: "var(--font-hero-round), system-ui, sans-serif",
              }}
            >
              Hello, I&apos;m Angela
            </p>
            <HeroCyclingTagline />
          </div>
        </div>

        {/* Desktop: behind headline (z-0); pull left so blob kisses the “s” in “experiences.” */}
        <div className="pointer-events-none relative z-0 hidden min-h-0 min-w-0 flex-1 justify-end lg:-ml-10 lg:flex lg:items-center xl:-ml-16 2xl:-ml-20">
          <div
            className="home-bubble-float relative shrink-0"
            style={
              bubbleH && bubbleW
                ? {
                    width: bubbleW,
                    height: bubbleH,
                  }
                : {
                    minHeight: "22rem",
                    width: "min(100%, 38rem)",
                  }
            }
          >
            <BubbleBackdrop />
            {bubbleH && bubbleW ? (
              <div className="relative h-full w-full">
                <Image
                  src={BUBBLE_SRC}
                  alt=""
                  fill
                  className="object-contain object-right"
                  sizes="1380px"
                  priority
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: centered bubble under hero copy */}
      <div
        className="pointer-events-none mt-8 flex justify-center lg:hidden"
        aria-hidden
      >
        <div
          className="home-bubble-float relative w-[min(88vw,880px)]"
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

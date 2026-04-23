"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { specializeEyebrow } from "../content/specialize";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const ASPECT = 1024 / 744;
const MAX_BUBBLE_W = 1380;
const BUBBLE_SCALE = 1.92;

const HERO_CYCLING_PHRASES = [
  "I design AI-driven products across mobile and web experiences",
  "I build scalable B2B systems with multi-role workflows in mind",
  "I studied new media and user experience design in Toronto",
  "I value empathy and curiosity in how I approach every problem",
  "I love traveling across Europe and capturing scenic moments",
] as const;

const inkMask = {
  WebkitMaskImage:
    "linear-gradient(to bottom, black 0%, black 30%, transparent 42%)",
  maskImage:
    "linear-gradient(to bottom, black 0%, black 30%, transparent 42%)",
} as const;

function BubbleBackdrop() {
  return (
    <div
      className="absolute inset-0 rounded-full bg-zinc-400/15 blur-3xl"
      aria-hidden
    />
  );
}

function HeroCyclingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_CYCLING_PHRASES.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="min-h-[2.85em] w-full max-w-[56rem]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-left text-[clamp(1.75rem,8vw,5rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#888]"
          style={{
            fontFamily:
              "var(--font-hero-cycling), var(--font-sans), system-ui, sans-serif",
            fontWeight: 800,
          }}
        >
          {HERO_CYCLING_PHRASES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function HelloInkHeading() {
  const name = "Hello, I'm Angela";
  return (
    <h1
      className="relative m-0 text-left font-black tracking-[-0.02em] text-[#111] text-[clamp(2.25rem,9vw,4.5rem)] leading-[1.05]"
      style={{
        fontFamily:
          "var(--font-hero-playful), 'Nunito', 'Varela Round', system-ui, sans-serif",
      }}
    >
      <span className="relative inline-block">
        {/* Sharp base */}
        <span className="relative z-0">{name}</span>
        {/* Soft ink-bleed on upper portion of glyphs */}
        <span
          className="pointer-events-none absolute left-0 top-0 z-[1] inline-block blur-[3px] opacity-[0.72] saturate-110"
          style={inkMask}
          aria-hidden
        >
          {name}
        </span>
      </span>
    </h1>
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
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <HelloInkHeading />
            <HeroCyclingSubtitle />
            <p className="mt-2 max-w-[56rem] border-t border-zinc-300/80 pt-4 text-left text-sm font-medium uppercase tracking-widest text-[#666] sm:text-[0.8125rem]">
              {specializeEyebrow}
            </p>
          </div>
        </div>

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

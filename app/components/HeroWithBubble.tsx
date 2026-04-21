"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { heroHeadline, specializeEyebrow } from "../content/specialize";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const ASPECT = 1024 / 744;
/** Cap width; height scales with text column × {@link BUBBLE_SCALE}. */
const MAX_BUBBLE_W = Math.round(1520 * 1.05);
const BUBBLE_SCALE = 2.22 * 1.05;

function BubbleBackdrop() {
  return (
    <div
      className="absolute inset-0 rounded-full bg-zinc-950/25 blur-3xl"
      aria-hidden
    />
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
          <h1 className="sr-only">Angela Yang</h1>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
            {specializeEyebrow}
          </p>
          <p
            className="max-w-[56rem] text-[1.65rem] font-normal leading-[1.12] tracking-[-0.02em] text-zinc-50 sm:text-4xl sm:leading-[1.08] md:text-5xl md:leading-[1.05] lg:text-[3.15rem] lg:leading-[1.03] xl:text-[3.45rem]"
            style={{
              fontFamily: "var(--font-serif-display), Georgia, 'Times New Roman', serif",
            }}
          >
            {heroHeadline}
          </p>
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
                    minHeight: "27.3rem",
                    width: "min(100%, 46.2rem)",
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
                  sizes="1520px"
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
          className="home-bubble-float relative w-[min(98.7vw,1018px)]"
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

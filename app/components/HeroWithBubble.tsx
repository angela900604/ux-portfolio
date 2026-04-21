"use client";

import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const ASPECT = 1024 / 744;
/** Cap width; height scales with text column × {@link BUBBLE_SCALE}. */
const MAX_BUBBLE_W = 1520;
const BUBBLE_SCALE = 2.22;

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
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Product design · iOS, AI enterprise, research · Vancouver (open to
            relocate)
          </p>
          <p
            className="max-w-[56rem] text-[2.75rem] font-normal leading-[1.06] tracking-[-0.02em] text-zinc-50 sm:text-6xl sm:leading-[1.02] md:text-7xl md:leading-[0.99] lg:text-[4.75rem] lg:leading-[0.97]"
            style={{
              fontFamily: "var(--font-serif-display), Georgia, 'Times New Roman', serif",
            }}
          >
            Complex systems, clear experiences.
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
                : { minHeight: "26rem", width: "min(100%, 44rem)" }
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
          className="home-bubble-float relative w-[min(94vw,970px)]"
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const BUBBLE_SRC = "/home/header-bubble-v2.png";
const ASPECT = 1024 / 744;
const MAX_BUBBLE_W = 560;

const HERO_KEYWORDS = [
  "Public service",
  "Mobile",
  "AI automation",
  "Branding",
  "Digital marketing",
  "Product thinking",
  "End-to-end UX",
  "Cross-functional collaboration",
  "AI-assisted workflow",
  "Accessibility-aware design",
  "Design systems",
  "User research",
] as const;

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

  const bubbleH = textH > 0 ? textH : undefined;
  const bubbleW =
    textH > 0 ? Math.min(Math.round(textH * ASPECT), MAX_BUBBLE_W) : undefined;

  return (
    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
      <div
        ref={textRef}
        className="relative z-10 min-w-0 w-full max-w-[36rem] shrink-0"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          Product design · Vancouver (open to relocate)
        </p>
        <h1 className="max-w-[36rem]">
          I turn ambiguous ideas into shippable digital products.
        </h1>
        <ul className="mt-6 flex max-w-2xl flex-wrap gap-2" aria-label="Keywords">
          {HERO_KEYWORDS.map((label) => (
            <li key={label}>
              <span className="inline-flex rounded-full border border-zinc-700/80 bg-zinc-900/40 px-3 py-1.5 text-[13px] leading-snug text-zinc-300">
                <span className="text-zinc-500" aria-hidden>
                  #
                </span>
                <span className="ml-0.5">{label}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/case-studies/e-invoice-app"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-white transition"
          >
            See flagship case study
          </Link>
          <Link
            href="#featured"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:border-zinc-400 hover:text-zinc-100 transition"
          >
            View all work
          </Link>
        </div>
      </div>

      {/* flex-1 + justify-end: PNG 右緣對齊與 header「Resume」相同的內容區右緣 */}
      <div className="pointer-events-none relative z-0 hidden min-h-0 min-w-0 flex-1 justify-end lg:flex lg:items-center">
        <div
          className="home-bubble-float relative shrink-0"
          style={
            bubbleH && bubbleW
              ? {
                  width: bubbleW,
                  height: bubbleH,
                }
              : { minHeight: "12rem", width: "min(100%, 20rem)" }
          }
        >
          <div
            className="absolute inset-0 rounded-full bg-zinc-950/25 blur-3xl"
            aria-hidden
          />
          {bubbleH && bubbleW ? (
            <div className="relative h-full w-full">
              <Image
                src={BUBBLE_SRC}
                alt=""
                fill
                className="object-contain object-right"
                sizes="560px"
                priority
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

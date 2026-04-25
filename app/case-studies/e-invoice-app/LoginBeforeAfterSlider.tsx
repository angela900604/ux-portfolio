"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const BEFORE_SRC = "/case-studies/e-invoice/login-before-after-before.jpg";
const AFTER_SRC = "/case-studies/e-invoice/login-before-after-after.jpg";
/** Comparison frames (legacy password modal · multi-method auth), 1024×576 JPEG @ q95 */
const ASPECT = 1024 / 576;

export function LoginBeforeAfterSlider() {
  const [pos, setPos] = useState(0.5);
  const containerRef = useRef<HTMLDivElement>(null);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPos(Math.min(1, Math.max(0, (clientX - left) / width)));
  }, []);

  return (
    <figure className="w-full min-w-0 max-w-3xl">
      <div
        ref={containerRef}
        className="relative w-full cursor-ew-resize overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        style={{ aspectRatio: ASPECT }}
        onDragStartCapture={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
          setFromClientX(e.clientX);
        }}
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            setPos((p) => Math.max(0, p - 0.05));
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            setPos((p) => Math.min(1, p + 0.05));
          } else if (e.key === "Home") {
            e.preventDefault();
            setPos(0);
          } else if (e.key === "End") {
            e.preventDefault();
            setPos(1);
          }
        }}
        tabIndex={0}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos * 100)}
        aria-label="Compare login verification before and after redesign. Drag horizontally."
      >
        <span className="pointer-events-none absolute left-3 top-3 z-[2] rounded-md bg-zinc-950/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 ring-1 ring-zinc-700/80">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-[2] rounded-md bg-zinc-950/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 ring-1 ring-zinc-700/80">
          After
        </span>

        <Image
          src={AFTER_SRC}
          alt="After: Face ID, Touch ID, and pattern unlock options for Cloud Invoice app login"
          fill
          quality={95}
          draggable={false}
          className="pointer-events-none object-cover select-none [-webkit-user-drag:none]"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />

        <div
          className="absolute inset-0 z-[1]"
          style={{
            clipPath: `inset(0 ${(1 - pos) * 100}% 0 0)`,
          }}
        >
          <Image
            src={BEFORE_SRC}
            alt="Before: password-only verification modal in system settings"
            fill
            quality={95}
            draggable={false}
            className="pointer-events-none object-cover select-none [-webkit-user-drag:none]"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 z-[3] w-px bg-white/95 shadow-[0_0_12px_rgba(0,0,0,0.45)]"
          style={{
            left: `${pos * 100}%`,
            transform: "translateX(-50%)",
          }}
        />
        <div
          className="pointer-events-none absolute top-1/2 z-[3] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-zinc-900/90 text-white shadow-lg ring-2 ring-zinc-950/40"
          style={{ left: `${pos * 100}%` }}
          aria-hidden
        >
          <span className="text-xs font-bold tracking-tight">⟷</span>
        </div>
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-zinc-500">
        <span className="font-medium text-zinc-400">Login · before / after.</span>{" "}
        Drag the center handle (or press and drag anywhere on the frame) to compare
        the legacy password-only path with Face ID, Touch ID (Android), and pattern
        (dots) unlock.
      </figcaption>
    </figure>
  );
}

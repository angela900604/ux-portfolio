"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AFTER_SRC = "/case-studies/e-invoice/home-before-after-after.png";
const BEFORE_SRC = "/case-studies/e-invoice/home-before-after-before.png";
const WIDTH = 1024;
const HEIGHT = 576;

/**
 * Home screen before / after: left = After (shipped), right = Before (legacy).
 * Divider defaults to center; drag the handle to compare.
 */
export function HomeBeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width <= 0) return;
    const x = ((clientX - r.left) / r.width) * 100;
    setPct(Math.min(100, Math.max(0, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const end = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
    };
  }, [updateFromClientX]);

  const onDividerPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    draggingRef.current = true;
    updateFromClientX(e.clientX);
  };

  return (
    <figure className="mt-10 w-full min-w-0">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 select-none touch-none"
        style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        {/* After (new home) — visible on the left of the divider */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 calc(100% - ${pct}%) 0 0)`,
          }}
          aria-hidden
        >
          <Image
            src={AFTER_SRC}
            alt=""
            width={WIDTH}
            height={HEIGHT}
            className="h-full w-full object-cover object-center"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
        {/* Before (legacy home) — visible on the right of the divider */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 0 0 ${pct}%)`,
          }}
          aria-hidden
        >
          <Image
            src={BEFORE_SRC}
            alt=""
            width={WIDTH}
            height={HEIGHT}
            className="h-full w-full object-cover object-center"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 z-[1] rounded-md bg-zinc-950/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300/95 ring-1 ring-emerald-500/30">
          After
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-[1] rounded-md bg-zinc-950/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 ring-1 ring-zinc-600/50">
          Before
        </span>

        {/* Divider + grab handle */}
        <div
          className="absolute inset-y-0 z-20 flex w-10 -translate-x-1/2 cursor-ew-resize items-center justify-center touch-none"
          style={{ left: `${pct}%` }}
          onPointerDown={onDividerPointerDown}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          aria-label="Drag to compare before and after home screen designs"
          tabIndex={0}
          onKeyDown={(e) => {
            const step = e.shiftKey ? 10 : 5;
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              setPct((p) => Math.max(0, p - step));
            }
            if (e.key === "ArrowRight") {
              e.preventDefault();
              setPct((p) => Math.min(100, p + step));
            }
            if (e.key === "Home") {
              e.preventDefault();
              setPct(0);
            }
            if (e.key === "End") {
              e.preventDefault();
              setPct(100);
            }
          }}
        >
          <div className="h-full w-px bg-white shadow-[0_0_12px_rgba(0,0,0,0.85)]" />
          <div className="absolute flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-zinc-900/95 shadow-lg ring-2 ring-zinc-950/40">
            <span className="text-xs font-bold tabular-nums text-zinc-200" aria-hidden>
              ⟷
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-zinc-500">
        Home screen · drag the handle to compare the shipped UI{" "}
        <span className="text-zinc-400">(After, left)</span> with the previous
        version <span className="text-zinc-400">(Before, right)</span>.
      </figcaption>
    </figure>
  );
}

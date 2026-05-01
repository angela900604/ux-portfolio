"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Props = {
  backendSrc: string;
  appSrc: string;
  backendAlt: string;
  appAlt: string;
  /** Container aspect width/height (e.g. desktop screenshot ratio). */
  aspectWidth: number;
  aspectHeight: number;
};

/**
 * Same interaction pattern as e-invoice login before/after: drag to compare
 * backend (clipped layer) vs app (full layer).
 */
export function GovernmentBackendCorrespondingScreensSlider({
  backendSrc,
  appSrc,
  backendAlt,
  appAlt,
  aspectWidth,
  aspectHeight,
}: Props) {
  const [pos, setPos] = useState(0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const aspect = aspectWidth / aspectHeight;

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPos(Math.min(1, Math.max(0, (clientX - left) / width)));
  }, []);

  return (
    <figure className="w-full min-w-0 max-w-4xl">
      <div
        ref={containerRef}
        className="relative w-full cursor-ew-resize overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] touch-none select-none outline-none focus-visible:ring-2 focus-visible:ring-[#05C3DD]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        style={{ aspectRatio: aspect }}
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
        aria-label="Compare backend annotation with corresponding app UI. Drag horizontally."
      >
        <span className="pointer-events-none absolute left-3 top-3 z-[2] rounded-md bg-zinc-950/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#05C3DD] ring-1 ring-[#05C3DD]/60">
          Backend
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-[2] rounded-md bg-zinc-950/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#05C3DD] ring-1 ring-[#05C3DD]/60">
          App
        </span>

        <Image
          src={appSrc}
          alt={appAlt}
          fill
          unoptimized
          draggable={false}
          className="pointer-events-none select-none bg-zinc-950 object-contain object-center [-webkit-user-drag:none]"
          sizes="(max-width: 1024px) 100vw, 896px"
        />

        <div
          className="absolute inset-0 z-[1]"
          style={{
            clipPath: `inset(0 ${(1 - pos) * 100}% 0 0)`,
          }}
        >
          <Image
            src={backendSrc}
            alt={backendAlt}
            fill
            unoptimized
            draggable={false}
            className="pointer-events-none select-none bg-zinc-950 object-contain object-center [-webkit-user-drag:none]"
            sizes="(max-width: 1024px) 100vw, 896px"
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
    </figure>
  );
}

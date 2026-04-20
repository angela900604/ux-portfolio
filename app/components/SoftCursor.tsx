"use client";

import { useEffect, useRef } from "react";

const HTML_CLASS = "soft-cursor";

function isInteractiveTarget(node: EventTarget | null): boolean {
  if (!(node instanceof Element)) return false;
  const el = node.closest(
    [
      "a[href]",
      "button",
      "[role='button']",
      "input[type='submit']",
      "input[type='button']",
      "input[type='reset']",
      "label[for]",
      "select",
      "summary",
      ".cursor-pointer",
    ].join(","),
  );
  if (!el) return false;
  if (el.matches(":disabled, [disabled], [aria-disabled='true']"))
    return false;
  return true;
}

/**
 * Fluffy circular cursor (#5A78B3, radial fade + blur). Scales up on interactive targets.
 * Desktop / fine pointer only; respects prefers-reduced-motion.
 */
export function SoftCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const scaleEl = scaleRef.current;
    if (!root || !scaleEl) return;

    const mqFine = window.matchMedia("(pointer: fine)");
    const mqHover = window.matchMedia("(hover: hover)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyEnabled = () => {
      const enabled =
        mqFine.matches && mqHover.matches && !mqReduce.matches;
      document.documentElement.classList.toggle(HTML_CLASS, enabled);
      root.style.display = enabled ? "block" : "none";
      return enabled;
    };

    let enabled = applyEnabled();
    const onMq = () => {
      enabled = applyEnabled();
    };
    mqFine.addEventListener("change", onMq);
    mqHover.addEventListener("change", onMq);
    mqReduce.addEventListener("change", onMq);

    const HOVER_SCALE = 1.48;
    const BASE_SCALE = 1;

    const onMove = (e: MouseEvent) => {
      if (!enabled) return;
      const hover = isInteractiveTarget(e.target);
      root.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      scaleEl.style.transform = `translate(-50%, -50%) scale(${
        hover ? HOVER_SCALE : BASE_SCALE
      })`;
    };

    const onLeave = () => {
      root.style.opacity = "0";
    };
    const onEnterDoc = () => {
      root.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnterDoc);

    return () => {
      document.documentElement.classList.remove(HTML_CLASS);
      mqFine.removeEventListener("change", onMq);
      mqHover.removeEventListener("change", onMq);
      mqReduce.removeEventListener("change", onMq);
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnterDoc);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed left-0 top-0 z-[10000] will-change-transform"
      style={{ display: "none" }}
      aria-hidden
    >
      <div
        ref={scaleRef}
        className="relative size-[52px] transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: "translate(-50%, -50%) scale(1)" }}
      >
        {/* Outer halo — soft, fluffy falloff */}
        <div
          className="absolute -inset-6 rounded-full opacity-[0.55] blur-[18px]"
          style={{
            background:
              "radial-gradient(circle closest-side, #5A78B3 0%, rgba(90,120,179,0.35) 45%, transparent 72%)",
          }}
        />
        {/* Mid feathered ring */}
        <div
          className="absolute -inset-2 rounded-full opacity-[0.65] blur-[10px]"
          style={{
            background:
              "radial-gradient(circle closest-side, rgba(90,120,179,0.85) 0%, rgba(90,120,179,0.25) 52%, transparent 70%)",
          }}
        />
        {/* Inner core — slightly sharper center */}
        <div
          className="absolute inset-[10px] rounded-full blur-[3px]"
          style={{
            background:
              "radial-gradient(circle closest-side, rgba(90,120,179,0.92) 0%, rgba(90,120,179,0.2) 62%, transparent 78%)",
          }}
        />
      </div>
    </div>
  );
}

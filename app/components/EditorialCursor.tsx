"use client";

import { useEffect, useRef, useState } from "react";

const HTML_CLASS = "editorial-cursor";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function isProjectCard(node: EventTarget | null): boolean {
  if (!(node instanceof Element)) return false;
  return Boolean(node.closest("[data-cursor='project']"));
}

function isInteractiveTarget(node: EventTarget | null): boolean {
  if (!(node instanceof Element)) return false;
  if (node.closest("[data-cursor='project']")) return true;
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

type CursorMode = "default" | "link" | "project";

export function EditorialCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const root = rootRef.current;
    const ring = ringRef.current;
    if (!root || !ring) return;

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

    const tick = () => {
      if (!enabled) return;
      currentX.current = lerp(
        currentX.current,
        targetX.current,
        0.12,
      );
      currentY.current = lerp(
        currentY.current,
        targetY.current,
        0.12,
      );
      root.style.transform = `translate3d(${currentX.current}px, ${currentY.current}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      if (!enabled) return;
      targetX.current = e.clientX;
      targetY.current = e.clientY;
      const project = isProjectCard(e.target);
      const interactive = isInteractiveTarget(e.target);
      let next: CursorMode = "default";
      if (project) next = "project";
      else if (interactive) next = "link";
      setMode((m) => (m === next ? m : next));
    };

    const startLoop = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMoveWrapped = (e: MouseEvent) => {
      onMove(e);
      startLoop();
    };

    const onLeave = () => {
      root.style.opacity = "0";
    };
    const onEnterDoc = () => {
      root.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMoveWrapped, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnterDoc);
    startLoop();

    return () => {
      document.documentElement.classList.remove(HTML_CLASS);
      mqFine.removeEventListener("change", onMq);
      mqHover.removeEventListener("change", onMq);
      mqReduce.removeEventListener("change", onMq);
      document.removeEventListener("mousemove", onMoveWrapped);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnterDoc);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const sizePx = mode === "default" ? 12 : 40;
  const showView = mode === "project";

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed left-0 top-0 z-[10000] will-change-transform"
      style={{ display: "none" }}
      aria-hidden
    >
      <div
        ref={ringRef}
        className="relative flex items-center justify-center will-change-transform"
        style={{
          transform: "translate(-50%, -50%)",
          width: sizePx,
          height: sizePx,
          transition:
            "width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), background-color 0.2s ease, border-color 0.2s ease",
          borderRadius: 9999,
          border:
            mode === "default"
              ? "1.5px solid #E8C9A0"
              : "1.5px solid rgba(232,201,160,0.35)",
          mixBlendMode: mode === "default" ? "difference" : "normal",
          backgroundColor:
            mode === "link"
              ? "rgba(232, 201, 160, 0.3)"
              : mode === "project"
                ? "rgba(22, 22, 22, 0.92)"
                : "transparent",
        }}
      >
        <span
          className="absolute whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.18em] text-[#E8C9A0]"
          style={{
            opacity: showView ? 1 : 0,
            transition: "opacity 0.15s ease",
          }}
        >
          View
        </span>
      </div>
    </div>
  );
}

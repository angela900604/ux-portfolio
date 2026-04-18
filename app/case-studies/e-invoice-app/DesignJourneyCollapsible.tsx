"use client";

import {
  useCallback,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";

const JOURNEY_ANCHOR_IDS = new Set([
  "competitor-insights",
  "accessibility",
  "business-constraints",
  "functional-map",
  "page-flow-design",
  "testing",
  "carrier-binding-insight",
]);

function hashToId(hash: string): string | null {
  if (!hash.startsWith("#")) return null;
  const id = hash.slice(1);
  return id || null;
}

export function DesignJourneyCollapsible({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  useLayoutEffect(() => {
    const syncFromHash = () => {
      const id = hashToId(window.location.hash);
      if (
        id &&
        (JOURNEY_ANCHOR_IDS.has(id) || id === "design-journey")
      ) {
        setOpen(true);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    const id = hashToId(window.location.hash);
    if (!id) return;
    if (!JOURNEY_ANCHOR_IDS.has(id) && id !== "design-journey") return;
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }, [open]);

  const toggle = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  return (
    <div className="scroll-mt-28 space-y-6 sm:scroll-mt-32">
      <div
        id="design-journey"
        className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-800 pt-10"
      >
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="e-invoice-design-journey-panel"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-400 hover:text-zinc-50"
        >
          {open ? "Hide" : "Show"} design journey
        </button>
      </div>
      <div
        id="e-invoice-design-journey-panel"
        className={open ? "space-y-20" : undefined}
        aria-hidden={!open}
      >
        {open ? children : null}
      </div>
    </div>
  );
}

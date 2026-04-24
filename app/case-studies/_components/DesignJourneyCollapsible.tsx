"use client";

import {
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

function hashToId(hash: string): string | null {
  if (!hash.startsWith("#")) return null;
  const id = hash.slice(1);
  return id || null;
}

export function DesignJourneyCollapsible({
  children,
  journeySectionIds,
  navAnchorId = "design-journey",
  panelId,
}: {
  children: ReactNode;
  journeySectionIds: readonly string[];
  /** Anchor id for the toggle row (TOC link target). */
  navAnchorId?: string;
  /** Unique id for the collapsible panel (`aria-controls`). */
  panelId: string;
}) {
  const journeyIdSet = useMemo(
    () => new Set(journeySectionIds),
    [journeySectionIds],
  );

  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const syncFromHash = () => {
      const id = hashToId(window.location.hash);
      if (id && (journeyIdSet.has(id) || id === navAnchorId)) {
        setOpen(true);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [journeyIdSet, navAnchorId]);

  useLayoutEffect(() => {
    if (!open) return;
    const id = hashToId(window.location.hash);
    if (!id) return;
    if (!journeyIdSet.has(id) && id !== navAnchorId) return;
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ block: "start", behavior: "smooth" });
    });
  }, [open, journeyIdSet, navAnchorId]);

  const toggle = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  return (
    <div className="scroll-mt-28 space-y-6 sm:scroll-mt-32">
      <div
        id={navAnchorId}
        className="flex flex-wrap items-center justify-end gap-3 border-t border-zinc-800 pt-10"
      >
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-400 hover:text-zinc-50"
        >
          {open ? "Hide" : "View"} design journey
        </button>
      </div>
      <div
        id={panelId}
        className={open ? "space-y-20" : undefined}
        aria-hidden={!open}
      >
        {open ? children : null}
      </div>
    </div>
  );
}

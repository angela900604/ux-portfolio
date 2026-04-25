"use client";

import {
  useCallback,
  useId,
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

function AccordionChevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={`shrink-0 text-zinc-400 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-current"
      >
        <path
          d="M4 6l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function DesignJourneyCollapsible({
  children,
  journeySectionIds,
  navAnchorId = "design-journey",
  panelId,
  title = "Design journey",
  subtitle,
  className = "",
}: {
  children: ReactNode;
  journeySectionIds: readonly string[];
  /** Anchor id for the toggle row (TOC link target). */
  navAnchorId?: string;
  /** Unique id for the collapsible panel (`aria-controls`). */
  panelId: string;
  /** Accordion trigger title (e.g. “Design journey”, “Reflection”). */
  title?: string;
  /** Optional secondary line under the title. */
  subtitle?: string;
  /** Extra classes on the outer wrapper (spacing between stacked accordions). */
  className?: string;
}) {
  const headingId = useId();
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
    <div
      className={`scroll-mt-28 border-t border-zinc-800 pt-10 sm:scroll-mt-32 sm:pt-12 ${className}`.trim()}
    >
      <div className="overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-900/40">
        <button
          type="button"
          id={navAnchorId}
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-zinc-900/55 sm:px-5 sm:py-4"
        >
          <span id={headingId} className="min-w-0">
            <span className="block text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
              {title}
            </span>
            {subtitle ? (
              <span className="mt-1 block text-sm leading-snug text-zinc-400">
                {subtitle}
              </span>
            ) : null}
          </span>
          <AccordionChevron open={open} />
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          hidden={!open}
          className={
            open
              ? "border-t border-zinc-800/90 px-4 pb-6 pt-2 sm:px-5 sm:pb-8"
              : "hidden"
          }
        >
          {open ? <div className="pt-4">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}

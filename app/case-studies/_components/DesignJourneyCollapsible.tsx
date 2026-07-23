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
      className={`shrink-0 text-ink-muted transition-transform duration-200 ${
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
  navAnchorId?: string;
  panelId: string;
  title?: string;
  subtitle?: string;
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
      className={`scroll-mt-28 border-t border-ink-line pt-10 sm:scroll-mt-32 sm:pt-12 ${className}`.trim()}
    >
      <button
        type="button"
        id={navAnchorId}
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 border-t border-ink py-4 text-left transition hover:opacity-80"
      >
        <span id={headingId} className="min-w-0">
          <span className="block text-[15px] font-medium tracking-tight text-ink sm:text-base">
            {title}
          </span>
          {subtitle ? (
            <span className="mt-1 block text-[15px] leading-[1.7] text-ink-soft">
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
        className={open ? "pb-6 pt-2 sm:pb-8" : "hidden"}
      >
        {open ? <div className="pt-4">{children}</div> : null}
      </div>
    </div>
  );
}

"use client";

import {
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CS_BODY } from "@/lib/case-study-theme";
import { CASE_STUDY_SECTION_TITLE_CLASS } from "@/lib/site-shell";

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
  defaultOpen = false,
}: {
  children: ReactNode;
  journeySectionIds: readonly string[];
  navAnchorId?: string;
  panelId: string;
  title?: string;
  subtitle?: string;
  className?: string;
  defaultOpen?: boolean;
}) {
  const headingId = useId();
  const journeyIdSet = useMemo(
    () => new Set(journeySectionIds),
    [journeySectionIds],
  );

  const [open, setOpen] = useState(defaultOpen);

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
      className={`scroll-mt-28 border-t border-zinc-800 sm:scroll-mt-32 ${
        open ? "pt-10 sm:pt-12" : "pt-6 sm:pt-8"
      } ${className}`.trim()}
    >
      <h2 id={headingId} className={CASE_STUDY_SECTION_TITLE_CLASS}>
        <button
          type="button"
          id={navAnchorId}
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-0 text-left font-[inherit] tracking-[inherit] text-inherit transition hover:opacity-80"
        >
          <span className="min-w-0">{title}</span>
          <AccordionChevron open={open} />
        </button>
      </h2>
      {subtitle ? (
        <p className={`mt-1 ${CS_BODY}`}>{subtitle}</p>
      ) : null}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!open}
        className={open ? "pt-6" : "hidden"}
      >
        {open ? children : null}
      </div>
    </div>
  );
}

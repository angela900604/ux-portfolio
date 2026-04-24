import type { ReactNode } from "react";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

type Props = {
  children: ReactNode;
  variant?: "dark" | "light";
  /** Classes on the inner column that wraps all sections (spacing between sections). */
  contentClassName?: string;
  /** Optional: merge with default container (max-w, padding). */
  containerClassName?: string;
  /**
   * When true, only render the main column (no outer max-w / padding).
   * Use when the parent already provides the page shell (e.g. light brand pages).
   */
  omitOuterContainer?: boolean;
};

/**
 * Single-column case study body: full-width narrative (no in-page TOC sidebar).
 */
export function CaseStudyContentLayout({
  children,
  variant = "dark",
  contentClassName = "space-y-24 sm:space-y-28",
  containerClassName = "",
  omitOuterContainer = false,
}: Props) {
  const baseContainer =
    variant === "dark"
      ? `${SITE_SHELL_CONTAINER} py-12 sm:py-16`
      : `${SITE_SHELL_CONTAINER} w-full py-10 sm:py-14`;

  const main = (
    <div className={CASE_STUDY_BODY_GRID}>
      <div
        className={`case-study-prose min-w-0 w-full ${contentClassName}`}
      >
        {children}
      </div>
    </div>
  );

  if (omitOuterContainer) {
    return main;
  }

  return (
    <div className={`${baseContainer} ${containerClassName}`.trim()}>
      {main}
    </div>
  );
}

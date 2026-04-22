import type { ReactNode } from "react";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { CaseStudySideNav, type CaseStudyTocItem } from "./CaseStudySideNav";

type Props = {
  toc: readonly CaseStudyTocItem[];
  children: ReactNode;
  variant?: "dark" | "light";
  /** Classes on the inner column that wraps all sections (spacing between sections). */
  contentClassName?: string;
  /** Optional: merge with default container (max-w, padding). */
  containerClassName?: string;
  tocHeading?: string;
  /**
   * When true, only render the two-column grid (no outer max-w / padding).
   * Use when the parent already provides the page shell (e.g. light brand pages).
   */
  omitOuterContainer?: boolean;
};

/**
 * Two-column body: main narrative + sticky TOC on the right (lg+).
 */
export function CaseStudyContentLayout({
  toc,
  children,
  variant = "dark",
  contentClassName = "space-y-24 sm:space-y-28",
  containerClassName = "",
  tocHeading,
  omitOuterContainer = false,
}: Props) {
  const baseContainer =
    variant === "dark"
      ? `${SITE_SHELL_CONTAINER} py-12 sm:py-16`
      : `${SITE_SHELL_CONTAINER} w-full py-10 sm:py-14`;

  const grid = (
    <div className={CASE_STUDY_BODY_GRID}>
      <div
        className={`case-study-prose min-w-0 w-full overflow-x-hidden ${contentClassName}`}
      >
        {children}
      </div>
      <CaseStudySideNav
        items={toc}
        variant={variant}
        heading={tocHeading}
      />
    </div>
  );

  if (omitOuterContainer) {
    return grid;
  }

  return (
    <div className={`${baseContainer} ${containerClassName}`.trim()}>
      {grid}
    </div>
  );
}

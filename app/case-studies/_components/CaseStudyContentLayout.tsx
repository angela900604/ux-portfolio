import type { ReactNode } from "react";
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
  contentClassName = "space-y-20",
  containerClassName = "",
  tocHeading,
  omitOuterContainer = false,
}: Props) {
  const baseContainer =
    variant === "dark"
      ? "mx-auto max-w-[1280px] px-6 sm:px-[100px] py-12 sm:py-16"
      : "w-full px-6 sm:px-[100px] py-10 sm:py-14";

  const grid = (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_10.25rem] xl:grid-cols-[minmax(0,1fr)_11.5rem] lg:gap-8 xl:gap-10 lg:items-start">
      <div className={`min-w-0 ${contentClassName}`}>{children}</div>
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

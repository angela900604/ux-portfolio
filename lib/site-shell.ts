/**
 * Shared horizontal shell: symmetric gutters and the same main + TOC grid as
 * {@link CaseStudyContentLayout} so nav, footer, and case study titles share
 * one alignment system.
 */
/** Editorial max width (tuned −200px from prior shell for a slightly narrower grid). */
export const SITE_MAX_WIDTH_CLASS = "max-w-[1480px]";

/** Equal left / right page gutters (used by nav, footer, heroes, layouts). */
export const SITE_GUTTER_CLASS = "px-6 sm:px-[100px]";

/** Centered shell: max width + symmetric horizontal padding. */
export const SITE_SHELL_CONTAINER = `mx-auto ${SITE_MAX_WIDTH_CLASS} ${SITE_GUTTER_CLASS}`;

/** Narrative column + TOC track — keep in sync across layout + hero. */
/** 32px between narrative column and TOC / sidebar (`gap-8`). */
export const CASE_STUDY_BODY_GRID =
  "lg:grid lg:grid-cols-[minmax(0,1fr)_11.5rem] xl:grid-cols-[minmax(0,1fr)_12.75rem] lg:gap-8 xl:gap-8";

/**
 * Shared horizontal shell: symmetric gutters; case study narrative uses the same
 * full-width track as nav and footer for alignment.
 */
/** Editorial max width (tuned −200px from prior shell for a slightly narrower grid). */
export const SITE_MAX_WIDTH_CLASS = "max-w-[1480px]";

/** Fixed horizontal gutter (px) — left rail, nav, and main column use the same value. */
export const SITE_GUTTER_PX = 63;

/** Leading (left) gutter — keep in sync with {@link SITE_GUTTER_PR_CLASS}. */
export const SITE_GUTTER_PL_CLASS = "pl-[63px]";

/** Trailing (right) gutter — same width as {@link SITE_GUTTER_PL_CLASS}. */
export const SITE_GUTTER_PR_CLASS = "pr-[63px]";

/** Equal left / right page gutters (used by nav, footer, heroes, layouts). */
export const SITE_GUTTER_CLASS = `${SITE_GUTTER_PL_CLASS} ${SITE_GUTTER_PR_CLASS}`;

/**
 * Max-width track only — use inside {@link SITE_SHELL_CONTAINER} (e.g. nested
 * hero/body) so horizontal padding is not doubled.
 */
export const SITE_SHELL_INNER = `mx-auto w-full min-w-0 ${SITE_MAX_WIDTH_CLASS}`;

/** Centered shell: max width + symmetric horizontal padding. */
export const SITE_SHELL_CONTAINER = `${SITE_SHELL_INNER} ${SITE_GUTTER_CLASS}`;

/** Primary project title scale (case study left rail). */
export const CASE_STUDY_SIDEBAR_TITLE_CLASS =
  "text-[1.375rem] font-medium leading-[1.25] tracking-[-0.02em] sm:text-[1.5rem]";

/** Primary project title scale (in-page heroes). */
export const CASE_STUDY_PRIMARY_TITLE_CLASS =
  "text-[2.6875rem] font-medium leading-[1.1] tracking-[-0.025em] sm:text-[2.6875rem]";

/**
 * Case-study body section headline — Joseph h2 scale (34px / medium).
 */
export const CASE_STUDY_SECTION_TITLE_CLASS =
  "case-study-section-title max-w-3xl font-medium tracking-[-0.025em] text-zinc-100";

/** Smaller supporting line directly under a section headline. */
export const CASE_STUDY_SECTION_SUBTITLE_CLASS =
  "mt-3 block max-w-3xl text-[17px] font-normal leading-[1.7] text-zinc-400 sm:mt-4";

/**
 * Counteract {@link SITE_GUTTER_CLASS} so a band (e.g. marquee) spans the full padded
 * main column edge-to-edge (two × {@link SITE_GUTTER_PX}px).
 */
export const CASE_STUDY_BODY_BLEED_X =
  "-mx-[63px] w-[calc(100%+126px)]";

/** Full-width band within the main column only (not 100vw — aligns with narrative when a left rail exists). */
export const CASE_STUDY_COLUMN_FULL_BLEED =
  "relative w-full min-w-0";

/** Full-width case study body / hero title band (no sidebar column). */
export const CASE_STUDY_BODY_GRID = "min-w-0 w-full";


/**
 * Shared horizontal shell: symmetric gutters; case study narrative uses the same
 * full-width track as nav and footer for alignment.
 */
/** Editorial max width (tuned −200px from prior shell for a slightly narrower grid). */
export const SITE_MAX_WIDTH_CLASS = "max-w-[1480px]";

/** Equal left / right page gutters (used by nav, footer, heroes, layouts). */
export const SITE_GUTTER_CLASS = "px-6 sm:px-[100px]";

/**
 * Max-width track only — use inside {@link SITE_SHELL_CONTAINER} (e.g. nested
 * hero/body) so horizontal padding is not doubled.
 */
export const SITE_SHELL_INNER = `mx-auto w-full min-w-0 ${SITE_MAX_WIDTH_CLASS}`;

/** Centered shell: max width + symmetric horizontal padding. */
export const SITE_SHELL_CONTAINER = `${SITE_SHELL_INNER} ${SITE_GUTTER_CLASS}`;

/** Primary project title scale (matches MINA marketing page h1). */
export const CASE_STUDY_PRIMARY_TITLE_CLASS =
  "text-3xl font-semibold tracking-tight sm:text-4xl";

/**
 * Case-study body section headline — same scale as {@link CASE_STUDY_PRIMARY_TITLE_CLASS}.
 * Pair with global `.case-study-section-title` so size wins over `.case-study-prose h2`.
 */
export const CASE_STUDY_SECTION_TITLE_CLASS =
  "case-study-section-title max-w-3xl font-semibold tracking-tight text-zinc-100";

/** Smaller supporting line directly under a section headline. */
export const CASE_STUDY_SECTION_SUBTITLE_CLASS =
  "mt-3 block max-w-3xl text-base font-medium leading-relaxed text-zinc-400 sm:mt-4 sm:text-lg";

/**
 * Counteract {@link SITE_GUTTER_CLASS} so a band (e.g. marquee) spans the full padded
 * main column edge-to-edge.
 */
export const CASE_STUDY_BODY_BLEED_X =
  "-mx-6 w-[calc(100%+3rem)] sm:-mx-[100px] sm:w-[calc(100%+200px)]";

/** Full-width band within the main column only (not 100vw — aligns with narrative when a left rail exists). */
export const CASE_STUDY_COLUMN_FULL_BLEED =
  "relative w-full min-w-0";

/** Full-width case study body / hero title band (no sidebar column). */
export const CASE_STUDY_BODY_GRID = "min-w-0 w-full";


/**
 * Shared horizontal shell: symmetric gutters; case study narrative uses the same
 * full-width track as nav and footer for alignment.
 */
/** Editorial max width (tuned −200px from prior shell for a slightly narrower grid). */
export const SITE_MAX_WIDTH_CLASS = "max-w-[1480px]";

/** Equal left / right page gutters (used by nav, footer, heroes, layouts). */
export const SITE_GUTTER_CLASS = "px-6 sm:px-[100px]";

/** Centered shell: max width + symmetric horizontal padding. */
export const SITE_SHELL_CONTAINER = `mx-auto ${SITE_MAX_WIDTH_CLASS} ${SITE_GUTTER_CLASS}`;

/** Full-width case study body / hero title band (no sidebar column). */
export const CASE_STUDY_BODY_GRID = "min-w-0 w-full";

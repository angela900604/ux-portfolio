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

/** Full-width case study body / hero title band (no sidebar column). */
export const CASE_STUDY_BODY_GRID = "min-w-0 w-full";

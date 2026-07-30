/**
 * Shared horizontal shell: symmetric gutters; case study narrative uses the same
 * full-width track as nav and footer for alignment.
 */
/** Editorial max width (tuned −200px from prior shell for a slightly narrower grid). */
export const SITE_MAX_WIDTH_CLASS = "max-w-[1480px]";

/** Fixed horizontal gutter (px) — desktop; mobile/tablet use responsive classes below. */
export const SITE_GUTTER_PX = 63;
export const SITE_GUTTER_PX_SM = 40;
export const SITE_GUTTER_PX_MOBILE = 20;

/** Leading (left) gutter — 20px mobile · 40px tablet · 63px desktop. */
export const SITE_GUTTER_PL_CLASS = "pl-5 sm:pl-10 lg:pl-[63px]";

/** Trailing (right) gutter — same scale as {@link SITE_GUTTER_PL_CLASS}. */
export const SITE_GUTTER_PR_CLASS = "pr-5 sm:pr-10 lg:pr-[63px]";

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
  "text-[2rem] font-medium leading-[1.12] tracking-[-0.025em] sm:text-[2.6875rem] sm:leading-[1.1]";

/**
 * Case-study body section headline — homepage card-title scale (20px → 22px sm).
 */
export const CASE_STUDY_SECTION_TITLE_CLASS =
  "case-study-section-title max-w-3xl font-medium tracking-[-0.02em] text-zinc-100";

/** Supporting line directly under a section headline. */
export const CASE_STUDY_SECTION_SUBTITLE_CLASS =
  "mt-2 block max-w-3xl text-[15px] font-normal leading-[1.65] text-zinc-400 sm:mt-3";

/**
 * Counteract {@link SITE_GUTTER_CLASS} so a band (e.g. marquee) spans the full padded
 * main column edge-to-edge (two × {@link SITE_GUTTER_PX}px).
 */
export const CASE_STUDY_BODY_BLEED_X =
  "-mx-5 w-[calc(100%+2.5rem)] sm:-mx-10 sm:w-[calc(100%+5rem)] lg:-mx-[63px] lg:w-[calc(100%+126px)]";

/** Full-width band within the main column only (not 100vw — aligns with narrative when a left rail exists). */
export const CASE_STUDY_COLUMN_FULL_BLEED =
  "relative w-full min-w-0";

/** Full-width case study body / hero title band (no sidebar column). */
export const CASE_STUDY_BODY_GRID = "min-w-0 w-full";


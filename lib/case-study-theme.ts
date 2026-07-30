/**
 * Case study typography tokens — dark shell (matches homepage), Joseph-style scale.
 */

/** Section kicker — e.g. OVERVIEW, DISCOVER */
export const CS_SECTION_EYEBROW =
  "text-[11px] font-normal uppercase tracking-[0.2em] text-zinc-500";

/** Sub-label inside a section — e.g. Design goals, Initial insight */
export const CS_SUBLABEL =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500";

/** Meta field label — Role, Timeline */
export const CS_META_LABEL =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 mb-2";

/** Body copy — matches homepage selected-work card description */
export const CS_BODY =
  "text-[15px] font-normal leading-[1.65] text-zinc-400";

/** Smaller supporting copy — captions, footnotes */
export const CS_BODY_SM =
  "text-[14px] font-normal leading-[1.6] text-zinc-400";

/** H3 sub-head within a section (Joseph: 15px / medium) */
export const CS_H3 =
  "text-[15px] font-medium leading-[1.35] text-zinc-100";

/** Highlight block — top rule, no box stroke */
export const CS_HIGHLIGHT_BLOCK = "flex flex-col border-t border-zinc-600 pt-4";

/** Major section divider */
export const CS_SECTION_DIVIDER =
  "scroll-mt-28 border-t border-zinc-800 pt-16 sm:scroll-mt-32 sm:pt-20 mt-16 sm:mt-20";

/** Image / video frame — borderless */
export const CS_MEDIA_FRAME = "overflow-hidden";

/** User-research journey section kicker (tighter tracking than case-study default). */
export const RESEARCH_SECTION_LABEL =
  "text-xs font-medium uppercase tracking-[0.12em] text-zinc-500";

/** User-research journey section header stack. */
export const RESEARCH_SECTION_HEADER = "max-w-3xl space-y-3";

export const RESEARCH_SECTION_TITLE =
  "text-xl font-medium leading-[1.3] tracking-[-0.02em] text-zinc-100 sm:text-[22px]";

export const RESEARCH_SECTION_BODY =
  "max-w-2xl text-[15px] leading-[1.65] text-zinc-400";

/** Soft content band (charts, tables) — no outer stroke */
export const CS_CONTENT_BAND = "bg-zinc-900/40 p-5 sm:p-6";

/** Prev / next case study control */
export const CS_PREV_NEXT_LINK =
  "inline-flex rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900/60 hover:text-zinc-100";

export const CS_PREV_NEXT_MUTED = "text-zinc-500 text-xs";

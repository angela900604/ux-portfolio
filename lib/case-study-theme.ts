/**
 * Joseph Chen–style case study tokens (josephchenux.com case studies).
 * Light paper surface, Inter typography, ink-line section rules — no boxed media strokes.
 */

/** Section kicker — e.g. OVERVIEW, DISCOVER */
export const CS_SECTION_EYEBROW =
  "text-[11px] font-normal uppercase tracking-[0.2em] text-ink";

/** Sub-label inside a section — e.g. Design goals, Initial insight */
export const CS_SUBLABEL =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted";

/** Meta field label — Role, Timeline */
export const CS_META_LABEL =
  "text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted mb-2";

/** Body copy */
export const CS_BODY =
  "text-[17px] font-normal leading-[1.7] text-ink-soft";

/** Smaller supporting copy */
export const CS_BODY_SM =
  "text-[15px] font-normal leading-[1.7] text-ink-soft";

/** H3 sub-head within a section (Joseph: 15px / medium) */
export const CS_H3 =
  "text-[15px] font-medium leading-[1.35] text-ink";

/** Highlight block — dark top rule, no box stroke */
export const CS_HIGHLIGHT_BLOCK = "flex flex-col border-t border-ink pt-4";

/** Major section divider */
export const CS_SECTION_DIVIDER =
  "scroll-mt-28 border-t border-ink-line pt-16 sm:scroll-mt-32 sm:pt-20 mt-16 sm:mt-20";

/** Image / video frame — borderless */
export const CS_MEDIA_FRAME = "overflow-hidden";

/** Soft content band (charts, tables) — no outer stroke */
export const CS_CONTENT_BAND = "bg-paper-soft/50 p-5 sm:p-6";

/** Prev / next case study control */
export const CS_PREV_NEXT_LINK =
  "inline-flex border border-ink px-6 py-3 text-[12px] font-medium uppercase tracking-[0.16em] text-ink transition hover:bg-paper-soft";

export const CS_PREV_NEXT_MUTED = "text-[11px] font-normal uppercase tracking-[0.16em] text-ink-muted";

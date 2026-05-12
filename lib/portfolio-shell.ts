import { SITE_GUTTER_CLASS } from "@/lib/site-shell";

/**
 * Left rail: same horizontal inset as the main column / nav ({@link SITE_GUTTER_CLASS}).
 * Top padding is doubled vs bottom so the hello / “About me” block has more air under
 * the fixed header. The nav brand cell does not use this token — it uses gutters only
 * so “Angela Yang” stays vertically centered in the `h-14` bar.
 */
export const PORTFOLIO_ASIDE_PADDING = `pt-12 pb-6 sm:pt-16 sm:pb-8 ${SITE_GUTTER_CLASS}`;

/** Width token only (no padding) — desktop nav left cell matches left rail. */
export const PORTFOLIO_LEFT_RAIL_WIDTH_CLASS =
  "lg:w-[min(24vw,calc(20rem+12px))] xl:w-[min(26vw,calc(22rem+12px))]";

/** Shared layout for home profile rail and case-study meta rail (dark shell). */
export const PORTFOLIO_LEFT_RAIL_CLASS = `flex min-h-0 shrink-0 flex-col border-b border-zinc-800 ${PORTFOLIO_ASIDE_PADDING} lg:h-full ${PORTFOLIO_LEFT_RAIL_WIDTH_CLASS} lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-zinc-800`;

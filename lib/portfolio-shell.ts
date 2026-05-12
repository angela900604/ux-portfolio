/** Horizontal padding — nav bar, main column, and aside share this x-axis. */
export const PORTFOLIO_X_PAD = "px-6 sm:px-8";

/** Left rail padding (matches main horizontal padding + vertical rhythm). */
export const PORTFOLIO_ASIDE_PADDING = "p-6 sm:p-8";

/** Shared layout for home profile rail and case-study meta rail (dark shell). */
export const PORTFOLIO_LEFT_RAIL_CLASS = `flex min-h-0 shrink-0 flex-col border-b border-zinc-800 ${PORTFOLIO_ASIDE_PADDING} lg:h-full lg:w-[min(24vw,calc(20rem+12px))] lg:shrink-0 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:border-zinc-800 xl:w-[min(26vw,calc(22rem+12px))]`;

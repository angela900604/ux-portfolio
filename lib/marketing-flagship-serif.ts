/**
 * Fraunces stack — use **only** with inline `style={{ fontFamily: … }}` on these lines:
 * - Left rail: “Hello! This is Angela.” ({@link MARKETING_FLAGSHIP_SERIF_LEAD_CLASS})
 * - Home main: consumer-facing lead paragraph ({@link MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS} + {@link MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_CLASS})
 * - About: product designer lead paragraph ({@link MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS} + {@link MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_WIDE_CLASS})
 *
 * Everything else should use DM Sans (`font-sans` / body).
 */
export const MARKETING_FLAGSHIP_SERIF =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

/** Same type scale as left-rail hello (clamp) — use with {@link MARKETING_FLAGSHIP_SERIF}. */
export const MARKETING_FLAGSHIP_SERIF_LEAD_CLASS =
  "text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.02em]";

/**
 * Slightly smaller flagship lead — home + About body leads only (left rail keeps {@link MARKETING_FLAGSHIP_SERIF_LEAD_CLASS}).
 */
export const MARKETING_FLAGSHIP_SERIF_LEAD_COMPACT_CLASS =
  "text-[clamp(1.375rem,2.45vw,2.0625rem)] font-normal leading-[1.12] tracking-[-0.02em]";

/** Home flagship lead measure. */
export const MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_CLASS = "max-w-4xl";

/** About flagship lead — wider measure for the long bio paragraph. */
export const MARKETING_FLAGSHIP_SERIF_LEAD_MAX_WIDTH_WIDE_CLASS =
  "max-w-5xl xl:max-w-6xl";

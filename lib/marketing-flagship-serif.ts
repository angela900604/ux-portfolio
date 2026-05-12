/**
 * Fraunces stack — use **only** with inline `style={{ fontFamily: … }}` on these three lines:
 * - Left rail: “Hello! I’m Angela.”
 * - Home main: consumer-facing lead paragraph
 * - About: product designer lead paragraph
 *
 * Everything else should use DM Sans (`font-sans` / body).
 */
export const MARKETING_FLAGSHIP_SERIF =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

/** Same type scale as left-rail hello (clamp) — use with {@link MARKETING_FLAGSHIP_SERIF}. */
export const MARKETING_FLAGSHIP_SERIF_LEAD_CLASS =
  "text-[clamp(1.5rem,2.8vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.02em]";

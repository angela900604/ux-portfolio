/**
 * Shared positioning for homepage + About — recruiter-facing, consistent story.
 * Lead with B2C iOS / AI-driven mobile; B2B appears as portfolio breadth, not the headline specialty.
 */
/** Homepage hero — short hook (scroll prompt), ~8–12 words */
export const heroHook =
  "Research-led product design for iOS, AI, and public-scale systems.";

export const specializeEyebrow =
  "B2C iOS · AI-driven products · Multi-segment research · Vancouver (open to relocate)";

export const specializeSectionIntro =
  "I lead with consumer-facing mobile work—especially AI-assisted experiences on iOS. My portfolio also includes B2B and government projects, but my specialty is B2C iOS and AI-driven product craft.";

/** Homepage interlude between featured case and project grid */
export const homeWorkInterlude =
  "A mix of zero-to-one product, complex permissions, and research across ages—what ships has to hold up in the real world.";

/** Homepage — intro line above brand / marketing grid */
export const homeBrandSectionIntro =
  "Campaign work, growth, and brand systems—adjacent to core product, still craft-forward.";

export const SPECIALIZE_PILLARS = [
  {
    title: "B2C iOS & AI-driven mobile product design",
    aboutShort:
      "Consumer apps on iOS—AI-assisted features, native patterns, accessibility, and UI engineering can ship.",
    summary:
      "Most of my craft and shipped work sits in consumer mobile: AI-assisted flows (copilots, photo-to-publish, parenting tools), native iOS patterns, and clarity for everyday users—from AI marketplaces to nationwide public apps and loyalty programs on the phone.",
    details: [
      "AI-assisted surfaces on mobile; prototypes and specs that align with eng.",
      "Public-facing apps and loyalty programs—not just one internal dashboard story.",
    ],
  },
  {
    title: "Multi-segment user research",
    aboutShort:
      "Teens to seniors; multilingual and accessibility needs—evidence that picks what ships.",
    summary:
      "I run research across ages, languages, and accessibility needs—often alongside consumer, B2B, or public-sector contexts in the same career arc. The through-line is multi-segment UX: fewer designers are comfortable across that spread.",
    details: [
      "Interviews, moderated tests, and field work that resolve conflicting signals.",
    ],
  },
  {
    title: "Ownership & cross-functional leadership",
    aboutShort:
      "Engineering, PMs, and stakeholders—feasibility, scope, and delivery without losing the user.",
    summary:
      "I’m comfortable owning a thread or workstream: partnering with engineers on feasibility, with PMs on scope and pace, and with clients or founders on requirements so decisions stick through release.",
    details: [] as const,
  },
] as const;

/**
 * Shared positioning for homepage + About — recruiter-facing, consistent story.
 * Lead with B2C iOS / AI-driven mobile; B2B appears as portfolio breadth, not the headline specialty.
 */
/** Homepage hero — primary headline under the name line */
export const heroHeadline =
  "Product design for AI-driven & B2B SaaS across mobile and web, with a focus on multi-role systems and cross-functional leadership.";

export const specializeEyebrow =
  "B2C iOS · AI-driven products · Multi-segment research · Vancouver (open to relocate)";

export const specializeSectionIntro =
  "I lead with consumer-facing mobile work—especially AI-assisted experiences on iOS. My portfolio also includes B2B and government projects, but my specialty is B2C iOS and AI-driven product craft.";

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

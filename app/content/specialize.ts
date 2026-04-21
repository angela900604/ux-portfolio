/**
 * Shared positioning for homepage + About — recruiter-facing, consistent story.
 */
/** Homepage hero — one line recruiters can scan (distills the full positioning pitch). */
export const heroHeadline =
  "Product design for AI & B2B SaaS—complex systems, multi-role workflows, research-led teams.";

export const specializeEyebrow =
  "B2B & complex systems · Multi-segment research · Vancouver (open to relocate)";

export const specializeSectionIntro =
  "My deepest work is complex product and enterprise UX—platforms that have to hold up under real constraints, not just look polished in a deck.";

export const SPECIALIZE_PILLARS = [
  {
    title: "B2B & complex systems product design",
    summary:
      "Most of my depth is in CRM, backend platforms, and government systems—admin and dashboards, multi-role permissions, information architecture, flows, and edge cases. That's classic complex / enterprise UX: the hard part is structure and behavior, not decoration.",
    details: [
      "0→1 backend platforms; cross-role journeys (staff, seller, end user).",
      "I design UI that reflects how APIs and data models actually behave—constraints included.",
    ],
  },
  {
    title: "Cross-audience & multi-segment research",
    summary:
      "I run research across teenagers, seniors, foreign-language users, and people with accessibility needs—often spanning B2B operators, consumers, and government in the same program of work. That's multi-segment UX: fewer teams are comfortable across contexts this wide.",
    details: [
      "Interviews, moderated tests, and field work that turn mixed evidence into what ships.",
    ],
  },
  {
    title: "Ownership & cross-functional leadership",
    summary:
      "I'm comfortable owning a thread or workstream: partnering with engineers on feasibility, with PMs on scope and pace, and with clients on requirements so decisions stick through delivery.",
    details: [] as const,
  },
] as const;

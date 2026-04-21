import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { CaseStudyScanSummary } from "../_components/CaseStudyScanSummary";
import { HeuristicSlideshow } from "./HeuristicSlideshow";
import { ScrollableDocFrame } from "./ScrollableDocFrame";

const ASSET = (name: string) => `/case-studies/design-system/${name}`;

const HERO = ASSET("hero-cover.png");

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "2024" },
  { label: "Role", value: "Product / systems designer" },
  {
    label: "Context",
    value: "Enterprise ERP-style admin · design–dev alignment",
  },
  {
    label: "Focus",
    value: "Foundations, tokens, components, judgment-driven patterns",
  },
] as const;

const SCAN_SUMMARY = [
  "Three designers and engineering were shipping fast—but handoff kept stalling on the same questions: which blue is primary, which gray is the table border, and why does this modal look different from the last one?",
  "I helped define a shared language: primitives and semantic tokens, spacing and grid rules, and documented components with states that map to real ERP screens.",
  "Scope was tracked openly in Figma (including honest notes like “Card — no tokens”) so the team could prioritize engineering work without pretending the system was finished.",
  "Concrete patterns—destructive confirmations, consistent button rails, opt-out for repetitive dialogs, and field-level error copy—let usability live in the system, not in one-off opinions.",
] as const;

const TOC = [
  { id: "problem", label: "Problem" },
  { id: "scope-foundations", label: "Scope & foundations" },
  { id: "components", label: "Components" },
  { id: "heuristics", label: "Heuristics" },
  { id: "impact", label: "Impact" },
] as const;

const HEURISTIC_SLIDES = [
  {
    src: ASSET("heuristic-visibility.png"),
    alt: "Do vs. don’t — visibility of system status",
    label: "Visibility",
  },
  {
    src: ASSET("heuristic-match-real-world.png"),
    alt: "Do vs. don’t — match between system and real world",
    label: "Real world",
  },
  {
    src: ASSET("heuristic-user-control.png"),
    alt: "Do vs. don’t — user control and freedom",
    label: "Control",
  },
  {
    src: ASSET("heuristic-consistency.png"),
    alt: "Do vs. don’t — consistency and standards",
    label: "Consistency",
  },
  {
    src: ASSET("heuristic-error-prevention.png"),
    alt: "Do vs. don’t — error prevention",
    label: "Prevention",
  },
  {
    src: ASSET("heuristic-flexibility.png"),
    alt: "Do vs. don’t — flexibility and efficiency",
    label: "Flexibility",
  },
  {
    src: ASSET("heuristic-aesthetic.png"),
    alt: "Do vs. don’t — aesthetic and minimalist design",
    label: "Minimalism",
  },
  {
    src: ASSET("heuristic-recover-errors.png"),
    alt: "Do vs. don’t — recover from errors",
    label: "Recovery",
  },
  {
    src: ASSET("heuristic-help-docs.png"),
    alt: "Do vs. don’t — help and documentation",
    label: "Help",
  },
] as const;

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
      {children}
    </span>
  );
}

export const metadata = {
  title: "Enterprise design system | Angela Yang",
  description:
    "Design system case study: tokens, foundations, documented components, and patterns for a complex enterprise admin product (2024).",
};

export default function DesignSystemCaseStudyPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={HERO}
          imageAlt="Enterprise admin dashboard using the design system"
          imageClassName="object-cover object-[center_20%]"
          eyebrow={
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/75">
              <span>Case study</span>
              <span className="text-white/45">·</span>
              <span>Design system</span>
              <span className="text-white/45">·</span>
              <span>2024</span>
            </div>
          }
          title={
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
              A design system for an enterprise admin product
            </h1>
          }
          subtitle={
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              How I gave three designers and an engineering team a shared
              vocabulary — tokens, documented components, and judgment-driven
              patterns built for a dense ERP product.
            </p>
          }
        >
          <div className="mt-8">
            <CaseStudyAtAGlance items={AT_A_GLANCE_ITEMS} />
          </div>
          <div className="mt-8">
            <CaseStudyScanSummary items={SCAN_SUMMARY} />
          </div>
        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout toc={TOC}>
        <CaseStudyInViewSection
          id="problem"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <SectionEyebrow>Chapter 1</SectionEyebrow>
          <h2 className="text-zinc-100">The problem wasn’t talent—it was alignment</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            With three designers on the surface and engineering moving quickly, the
            bottleneck showed up in the details: the same primary button color asked
            for three different ways, table grays drifted between modules, and
            modals didn’t share a consistent action rail. Teams weren’t arguing
            about taste—they lacked a shared vocabulary.
          </p>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            The goal wasn’t “a Figma library.” It was a{" "}
            <span className="text-zinc-100">common language</span> designers and
            developers could trust: names that map to code, patterns that scale
            across dense ERP screens, and documentation honest enough to show what
            was still in flight.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="scope-foundations"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <SectionEyebrow>Chapter 3</SectionEyebrow>
          <h2 className="text-zinc-100">Scope and foundations</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            Foundations and tokens first — so every component had something
            consistent to build on.
          </p>
          <ScrollableDocFrame
            src={ASSET("foundation-icons-checklist.png")}
            alt="Iconography standards and component checklist with design and dev status"
            width={154}
            height={1024}
            imageClassName="mx-auto max-w-[min(100%,20rem)]"
            caption='Why: Tracking design vs. code status openly meant unfinished work stayed visible instead of silently drifting.'
          />

          <h3 className="pt-4 text-lg font-medium text-zinc-100">
            Visual foundations
          </h3>
          <div className="space-y-10">
            <ScrollableDocFrame
              src={ASSET("foundation-color.png")}
              alt="Color foundations: primitives and semantic token tables"
              width={321}
              height={1024}
              caption="Why: Primitive tokens first, semantic roles second — so engineers could implement without reverse-engineering every frame."
            />
            <ScrollableDocFrame
              src={ASSET("foundation-typography.png")}
              alt="Typography: Noto Sans TC, Montserrat, Mulish scales"
              width={571}
              height={1024}
              caption="Why: Three typefaces for bilingual content needed clear hierarchy rules, or every designer would make different calls."
            />
            <ScrollableDocFrame
              src={ASSET("foundation-space.png")}
              alt="Spacing tokens on a 4px base with rem and pixel mapping"
              width={660}
              height={1024}
              caption="Why: 4px base gave finer control for dense admin tables where 8px increments created too much visual noise."
            />
            <ScrollableDocFrame
              src={ASSET("foundation-grid.png")}
              alt="Grid system across desktop, laptop, tablet, and mobile"
              width={251}
              height={1024}
              caption="Why: Grid had to be defined before components — admin users work on large monitors but the product needed to survive tablet handoffs."
            />
            <ScrollableDocFrame
              src={ASSET("foundation-breakpoints.png")}
              alt="Breakpoints and responsive layout examples"
              width={531}
              height={1024}
              caption="Why: Breakpoints documented alongside components so responsive behaviour wasn't left to engineering to guess."
            />
            <ScrollableDocFrame
              src={ASSET("foundation-elevation.png")}
              alt="Elevation and shadow scale for light and dark surfaces"
              width={542}
              height={1024}
              caption="Why: Modals and drawers stack heavily in ERP flows — a defined elevation scale stopped designers inventing new shadow values every sprint."
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="components"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h3 className="text-lg font-medium text-zinc-100">
            Components in production context
          </h3>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
            High-variance patterns—data tables, dropdowns, alerts, inputs—received
            redline specs, token hooks, and states that match how administrators
            actually work: dense data, frequent confirmations, and long sessions.
          </p>
          <div className="space-y-10">
            <ScrollableDocFrame
              src={ASSET("component-data-table.png")}
              alt="Data table component: tokens, atomic breakdown, layout specs"
              width={347}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("component-dropdown.png")}
              alt="Dropdown: sizes, tokens, menu item states, Figma properties"
              width={241}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("component-card.png")}
              alt="Card component: usage, specs, atomic design breakdown"
              width={533}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("component-alert.png")}
              alt="Alert variants: processing, error, success with tokens"
              width={461}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("component-input.png")}
              alt="Input field specifications and error state guidance"
              width={173}
              height={1024}
            />
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              Error prevention: a warning icon alone invites muscle-memory clicks.
              Requiring typed confirmation blocks accidental data loss in high-stakes
              admin tasks.
            </p>
            <ScrollableDocFrame
              src={ASSET("component-button.png")}
              alt="Button consistency and placement standards"
              width={145}
              height={1024}
            />
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              Consistency: keeping primary and secondary actions in the same
              position across all dialogs reduces hesitation when users switch
              between modules.
            </p>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="heuristics"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">Heuristics as do / don&apos;t patterns</h2>
          <HeuristicSlideshow
            slides={[...HEURISTIC_SLIDES]}
            ariaLabel="Nielsen usability heuristics: do versus don’t examples"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="impact"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <SectionEyebrow>Chapter 5</SectionEyebrow>
          <h2 className="text-zinc-100">Impact and honesty</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            The system showed up in shipped screens: shared tokens, predictable
            spacing, and components that survived real table density—not just
            marketing mocks. The remaining gaps stayed documented so the roadmap
            stayed credible.
          </p>
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <Image
              src={ASSET("product-in-context.png")}
              alt="Live admin interface using design system components"
              width={1024}
              height={576}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, min(72rem, 100vw)"
            />
          </div>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed">
            <li>
              Semantic token naming → engineers stopped asking which blue is primary
              during every handoff review.
            </li>
            <li>
              Shared component states → new designers onboarded without needing a
              walkthrough session.
            </li>
            <li>
              Open scope notes → gaps like &quot;Card — no tokens&quot; stayed
              visible so nothing silently drifted between Figma and code.
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="space-y-8 border-t border-zinc-800 pt-12">
          <CaseStudyPrevNext currentSlug="design-system" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
          >
            ← Back to work
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

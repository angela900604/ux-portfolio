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
    value: "Foundations, tokens, components, heuristic patterns",
  },
] as const;

const SCAN_SUMMARY = [
  "Three designers and engineering were shipping fast—but handoff kept stalling on the same questions: which blue is primary, which gray is the table border, and why does this modal look different from the last one?",
  "I helped define a shared language: primitives and semantic tokens, spacing and grid rules, and documented components with states that map to real ERP screens.",
  "Scope was tracked openly in Figma (including honest notes like “Card — no tokens”) so the team could prioritize engineering work without pretending the system was finished.",
  "Nielsen’s heuristics became concrete patterns—destructive confirmations, consistent button rails, opt-out for repetitive dialogs, and field-level error copy—so usability lived in the system, not in one-off opinions.",
] as const;

const TOC = [
  { id: "problem", label: "Problem" },
  { id: "strategy", label: "Strategy" },
  { id: "scope-foundations", label: "Scope & foundations" },
  { id: "components", label: "Components" },
  { id: "heuristics", label: "Heuristics" },
  { id: "deep-dives", label: "Principles in depth" },
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

function PrincipleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={371}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, min(72rem, 100vw)"
        />
      </div>
      <figcaption className="text-sm leading-relaxed text-zinc-400">{caption}</figcaption>
    </figure>
  );
}

export const metadata = {
  title: "Enterprise design system | Angela Yang",
  description:
    "Design system case study: tokens, foundations, documented components, and Nielsen heuristic patterns for a complex enterprise admin product (2024).",
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
              From recurring handoff questions to a single source of truth:
              foundations, tokens, documented components, and heuristic-driven
              patterns—scoped honestly and built to scale.
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
          id="strategy"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <SectionEyebrow>Chapter 2</SectionEyebrow>
          <h2 className="text-zinc-100">Strategy: foundations → styles → components</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            Work was sequenced so primitives and semantic tokens landed before
            high-variance components. Atomic structure (atoms → molecules →
            organisms) kept complex tables and dialogs from becoming one-off
            illustrations.
          </p>
          <ScrollableDocFrame
            src={ASSET("storytelling-framework.png")}
            alt="Case study narrative framework: problem, strategy, build, heuristics, impact"
            width={994}
            height={1024}
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="scope-foundations"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <SectionEyebrow>Chapter 3</SectionEyebrow>
          <h2 className="text-zinc-100">Scope and foundations</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            A living checklist tracked design vs. code status. Calling out gaps—
            <span className="text-zinc-100">e.g. Card without tokens yet</span>
            —kept prioritization grounded and made unfinished work visible instead
            of hidden.
          </p>
          <ScrollableDocFrame
            src={ASSET("foundation-icons-checklist.png")}
            alt="Iconography standards and component checklist with design and dev status"
            width={154}
            height={1024}
            imageClassName="mx-auto max-w-[min(100%,20rem)]"
          />

          <h3 className="pt-4 text-lg font-medium text-zinc-100">Visual foundations</h3>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
            Color scales and semantic roles, bilingual type, spacing tokens, grid,
            breakpoints, elevation, and responsive examples—documented so
            engineering could implement without reverse-engineering a frame.
          </p>
          <div className="space-y-10">
            <ScrollableDocFrame
              src={ASSET("foundation-color.png")}
              alt="Color foundations: primitives and semantic token tables"
              width={321}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("foundation-typography.png")}
              alt="Typography: Noto Sans TC, Montserrat, Mulish scales"
              width={571}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("foundation-space.png")}
              alt="Spacing tokens on a 4px base with rem and pixel mapping"
              width={660}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("foundation-grid.png")}
              alt="Grid system across desktop, laptop, tablet, and mobile"
              width={251}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("foundation-breakpoints.png")}
              alt="Breakpoints and responsive layout examples"
              width={531}
              height={1024}
            />
            <ScrollableDocFrame
              src={ASSET("foundation-elevation.png")}
              alt="Elevation and shadow scale for light and dark surfaces"
              width={542}
              height={1024}
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="components"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h3 className="text-lg font-medium text-zinc-100">Components in production context</h3>
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
            <ScrollableDocFrame
              src={ASSET("component-button.png")}
              alt="Button consistency and placement standards"
              width={145}
              height={1024}
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="heuristics"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <SectionEyebrow>Chapter 4</SectionEyebrow>
          <h2 className="text-zinc-100">Heuristics as patterns, not posters</h2>
          <p className="max-w-3xl leading-relaxed text-zinc-300">
            Each principle became a concrete do/don’t pair the team could reuse.
            Below is a full set in carousel form; the next section zooms in on a few
            decisions where judgment mattered as much as the rule.
          </p>
          <HeuristicSlideshow
            slides={[...HEURISTIC_SLIDES]}
            ariaLabel="Nielsen usability heuristics: do versus don’t examples"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="deep-dives"
          className="scroll-mt-28 space-y-10 sm:scroll-mt-32"
        >
          <h3 className="text-lg font-medium text-zinc-100">Where judgment met the heuristic</h3>
          <div className="space-y-12">
            <PrincipleFigure
              src={ASSET("heuristic-error-prevention.png")}
              alt="Error prevention: typed confirmation for destructive actions"
              caption="Error prevention: a warning icon alone invites muscle-memory clicks. Requiring explicit confirmation copy blocks accidental data loss in high-stakes admin tasks."
            />
            <PrincipleFigure
              src={ASSET("heuristic-consistency.png")}
              alt="Consistency: aligned primary and secondary actions"
              caption="Consistency and standards: keeping destructive and confirming actions in the same rail across dialogs reduces hesitation and mistakes when users switch modules."
            />
            <PrincipleFigure
              src={ASSET("heuristic-user-control.png")}
              alt="User control: optional do not show again for repeated confirmations"
              caption="User control and freedom: power users can opt out of repetitive confirmations without removing safeguards for newcomers—friction becomes a choice, not a trap."
            />
            <div className="space-y-3">
              <ScrollableDocFrame
                src={ASSET("component-input.png")}
                alt="Input error copy and recovery patterns"
                width={173}
                height={1024}
                maxHeightClass="max-h-[min(70vh,42rem)]"
              />
              <p className="text-sm leading-relaxed text-zinc-400">
                Recognition and recovery: specific field guidance beats a generic
                “Error” label—users see what failed, why it matters, and how to fix
                it without opening a separate doc.
              </p>
            </div>
          </div>
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
            <li>Fewer one-off color and spacing decisions in handoff reviews.</li>
            <li>Onboarding for new designers shortened with named tokens and grids.</li>
            <li>
              Open notes on unfinished token coverage (e.g. cards) prevented silent
              drift between design and code.
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

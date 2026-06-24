import type { ReactNode } from "react";
import Link from "next/link";
import {
  CaseStudyHeroTldr,
  type CaseStudyHeroTldrMetric,
} from "../_components/CaseStudyHeroTldr";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import VisualPlaceholder from "../_components/VisualPlaceholder";
import {
  CASE_STUDY_BODY_GRID,
  CASE_STUDY_SECTION_TITLE_CLASS,
  SITE_SHELL_INNER,
} from "@/lib/site-shell";

const ATLAS_ACCENT = "#6366F1";
const ATLAS_ACCENT_BG = "rgba(99, 102, 241, 0.16)";
const ATLAS_ACCENT_BORDER = "rgba(129, 140, 248, 0.35)";

const ATLAS_TLDR_METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Product",
    value: "macOS",
    title: "AI document generation for product teams",
    detail:
      "Connect a knowledge base, configure a template, and progressively generate each PRD section—without starting from a blank page.",
  },
  {
    kicker: "Approach",
    value: "Human-in-loop",
    title: "AI-assisted, not AI-replaced",
    detail:
      "Persistent chat keeps the user in control while the model surfaces what it indexed, read, and generated in real time.",
  },
  {
    kicker: "Role",
    value: "Intern",
    title: "UX/UI design across core workflows",
    detail:
      "Mockups and end-to-end UI flows for split-pane layout, generation status, @mention context, and project settings.",
  },
];

export const metadata = {
  title: "AtlasNova · AI-assisted document generation for product teams | Angela Yang",
  description:
    "UX/UI design for AtlasNova—AI-assisted document generation for product teams: mockups and UI flows for split-pane layout, transparent LLM progress, @mention context, and project settings.",
};

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-md px-1.5 py-0.5 font-semibold"
      style={{ backgroundColor: ATLAS_ACCENT_BG, color: ATLAS_ACCENT }}
    >
      {children}
    </span>
  );
}

function PrincipleCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{
        backgroundColor: ATLAS_ACCENT_BG,
        border: `1px solid ${ATLAS_ACCENT_BORDER}`,
      }}
    >
      <h3 className="text-base font-semibold text-zinc-100 sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-[0.9375rem]">
        {body}
      </p>
    </div>
  );
}

export default function AtlasNovaCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} flex min-w-0 flex-col overflow-x-hidden`}
          >
            <div className="mb-10 sm:mb-12">
              <CaseStudyHeroTldr
                metricValueClassName="text-[#6366F1]"
                headline={
                  <>
                    AtlasNova — AI-assisted document generation for product
                    teams, with transparent progress, split-pane layout, and
                    user-controlled workflows
                  </>
                }
                metrics={ATLAS_TLDR_METRICS}
              />
            </div>

            <VisualPlaceholder
              label="Hero cover — split-pane macOS UI: document canvas + persistent chat panel"
              hint="Replace with final cover art or screen recording when assets are ready."
              aspect="video"
            />
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="context"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32 sm:space-y-8"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project context
          </span>
          <div className="max-w-3xl space-y-5">
            <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
              What is AtlasNova?
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              AtlasNova is an <Highlight>AI-powered macOS document generation tool</Highlight>{" "}
              built for product teams. Instead of writing a PRD from scratch, you
              open AtlasNova, connect your knowledge base, configure a template
              (format, page count, detail level, output type), and the AI{" "}
              <Highlight>progressively generates each section</Highlight> of the
              document—surfacing what it found, what it&apos;s reading, and what
              it&apos;s generating in real time.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              The core bet: make AI feel like a{" "}
              <span className="text-zinc-200">collaborative drafting partner</span>,
              not a black box that drops a finished doc on your desk. That meant
              designing for trust, inspectability, and user override at every step.
            </p>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="problem"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Opportunity
          </span>
          <h2 className={`${CASE_STUDY_SECTION_TITLE_CLASS} max-w-3xl`}>
            Product teams lose hours to blank-page PRDs—and generic AI outputs
            that ignore existing context
          </h2>
          <div className="max-w-3xl space-y-4 text-zinc-300 leading-relaxed">
            <p>
              Teams already have research notes, competitor comparisons, meeting
              transcripts, and prior specs scattered across tools. Starting a new
              PRD means re-assembling that context manually—or trusting an opaque
              prompt that may hallucinate requirements.
            </p>
            <p>
              AtlasNova needed UX that made{" "}
              <span className="text-zinc-100">context visible</span>,{" "}
              <span className="text-zinc-100">generation legible</span>, and{" "}
              <span className="text-zinc-100">corrections lightweight</span> through
              a side-by-side document and chat workflow native to macOS.
            </p>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="principles"
          className="scroll-mt-28 space-y-8 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Design principles
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Four ideas that shaped the interface
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <PrincipleCard
              title="AI-assisted, not AI-replaced"
              body="A persistent chat panel keeps the user in the loop—steering tone, scope, and corrections while the document updates alongside the conversation."
            />
            <PrincipleCard
              title="Transparent LLM “thinking”"
              body="Each document section exposes step-by-step status—indexed, reading, generating—so users can see progress instead of waiting on a spinner."
            />
            <PrincipleCard
              title="Split-pane, macOS-native layout"
              body="Document canvas and chat share one window with a calm, desktop-first hierarchy: read on the left, refine on the right."
            />
            <PrincipleCard
              title="Context via @mention pills"
              body="@mention pills (e.g. @ Google Maps vs Apple Maps) inject existing docs into the chat so the model grounds answers in team knowledge."
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="split-pane"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Core layout
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Document + chat side-by-side
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            The primary workspace is a{" "}
            <Highlight>split-pane macOS layout</Highlight>: generated sections
            render in a scrollable document view while chat stays pinned for
            follow-ups, rewrites, and scoped edits. Users never lose context
            switching between “reading the doc” and “directing the AI.”
          </p>
          <VisualPlaceholder
            label="Split-pane layout — document canvas (left) + persistent chat (right)"
            hint="macOS window chrome, section headings, and chat input with send affordance."
            aspect="video"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="generation-status"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Trust & transparency
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Progressive generation with visible LLM status
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Rather than blocking the whole document behind one loading state, each
            section communicates where the model is in its pipeline—{" "}
            <span className="text-zinc-100">indexed</span>,{" "}
            <span className="text-zinc-100">reading</span>,{" "}
            <span className="text-zinc-100">generating</span>. That step-by-step
            feedback reduces anxiety during long runs and gives PMs a hook to
            intervene early if the wrong sources were pulled in.
          </p>
          <VisualPlaceholder
            label="Section generation status — indexed → reading → generating per block"
            hint="Inline status chips or timeline per PRD section; partial content visible while later sections still load."
            aspect="wide"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="mentions"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Context referencing
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            @mention pills to inject existing docs into chat
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Chat supports{" "}
            <Highlight>@mention pills</Highlight> that reference knowledge-base
            artifacts—competitive analyses, prior specs, research summaries. A PM
            can type <span className="text-zinc-100">@ Google Maps vs Apple Maps</span>{" "}
            to pull a comparison doc into the prompt, keeping generated copy aligned
            with material the team already trusts.
          </p>
          <VisualPlaceholder
            label="Chat composer with @mention pills and referenced document chips"
            hint="Autocomplete dropdown, selected pill styling, and linked source preview."
            aspect="video"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="settings"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Configuration
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Project Settings — template, length, tone, and output format
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Before generation starts, the{" "}
            <Highlight>Project Settings</Highlight> panel lets teams configure
            template structure, target page count, detail level, tone, and output
            type. Surfacing these controls up front prevents “regenerate everything”
            loops and sets expectations for what the AI will produce.
          </p>
          <VisualPlaceholder
            label="Project Settings panel — template, page count, detail level, tone, output type"
            hint="macOS sheet or inspector-style panel with grouped fields and sensible defaults."
            aspect="tall"
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="learnings"
          className="scroll-mt-28 space-y-6 border-t border-zinc-800 pt-12 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Learnings
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            What I took away from designing for enterprise AI on desktop
          </h2>
          <ul className="max-w-3xl list-disc space-y-3 pl-5 text-zinc-300 leading-relaxed marker:text-zinc-500">
            <li>
              <span className="text-zinc-100">Transparency beats speed claims.</span>{" "}
              Users tolerated longer runs when they could see indexing and reading
              steps—not when a single spinner hid all activity.
            </li>
            <li>
              <span className="text-zinc-100">Chat belongs beside the artifact.</span>{" "}
              Split-pane layout reduced mode-switching and made corrections feel
              like comments on the doc, not a separate tool.
            </li>
            <li>
              <span className="text-zinc-100">Grounding UI is product UI.</span>{" "}
              @mention pills turned “use our existing research” from a prompt
              engineering trick into a visible, repeatable interaction pattern.
            </li>
            <li>
              <span className="text-zinc-100">Settings are part of the first run.</span>{" "}
              Template and output controls needed to live in onboarding—not buried
              in an advanced menu—so teams trusted the first draft.
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="atlas-nova" />
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-zinc-400 transition hover:text-zinc-200"
          >
            ← Back to home
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

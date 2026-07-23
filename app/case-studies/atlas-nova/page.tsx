import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import {
  CaseStudyHeroTldr,
  type CaseStudyHeroTldrMetric,
} from "../_components/CaseStudyHeroTldr";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import {
  CASE_STUDY_BODY_GRID,
  CASE_STUDY_SECTION_TITLE_CLASS,
  SITE_SHELL_INNER,
} from "@/lib/site-shell";

const ATLAS_ACCENT = "#6366F1";
const ATLAS_ACCENT_BG = "rgba(99, 102, 241, 0.16)";

const UI_FLOW_SRC = `/case-studies/atlas-nova/${encodeURIComponent("UI flow.png")}`;
const UI_FLOW_W = 20554;
const UI_FLOW_H = 9924;
const GMAIL_CONNECT_SRC = `/case-studies/atlas-nova/${encodeURIComponent("Gmail connect.png")}`;

const ATLAS_TLDR_METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Platform",
    value: "AtlasNova AI",
    title: "Enterprise macOS suite",
    detail:
      "Multiple AI product solutions—this case study covers one feature: document generation.",
  },
  {
    kicker: "Feature",
    value: "Doc generation",
    title: "AI-assisted PRDs & research docs",
    detail:
      "Knowledge base, templates, step-by-step section generation, persistent chat.",
  },
  {
    kicker: "My role",
    value: "Intern",
    title: "UX/UI for this feature",
    detail: "Mockups and end-to-end UI flows—not the full platform or other solutions.",
  },
];

const SKETCHES = [
  {
    src: "/case-studies/atlas-nova/sketch-ia-overview.png",
    width: 771,
    height: 1024,
    alt: "Whiteboard sketch — IA overview with split-pane doc view and Home → workspace → doc hierarchy",
    caption: "IA — Home, workspaces, PRD / Research doc types.",
  },
  {
    src: "/case-studies/atlas-nova/sketch-ia-workspace-flow.png",
    width: 802,
    height: 1024,
    alt: "Whiteboard sketch — workspace navigation, tagging, and AI affordances",
    caption: "Nav, tagging, and AI touchpoints.",
  },
  {
    src: "/case-studies/atlas-nova/sketch-welcome-dashboard.png",
    width: 771,
    height: 1024,
    alt: "Whiteboard sketch — home dashboard with Welcome and Suggested Actions",
    caption: "Home — Welcome, suggested actions, project grid.",
  },
  {
    src: "/case-studies/atlas-nova/sketch-split-pane-document.png",
    width: 802,
    height: 1024,
    alt: "Whiteboard sketch — document canvas with project-scoped sidebar feed",
    caption: "Split-pane — document left, project feed right.",
  },
] as const;

const MOCKUPS = [
  {
    src: "/case-studies/atlas-nova/3.png",
    width: 1512,
    height: 982,
    alt: "AtlasNova home dashboard — recents, expert templates, and workspace sidebar",
    caption: "Home — recents, templates, workspace nav.",
  },
  {
    src: "/case-studies/atlas-nova/2.png",
    width: 3024,
    height: 1964,
    alt: "AtlasNova file import — drag-and-drop upload with Google Drive and OneDrive",
    caption: "Import — local files, Google Drive, OneDrive.",
  },
  {
    src: "/case-studies/atlas-nova/1.png",
    width: 1512,
    height: 982,
    alt: "AtlasNova split-pane workspace — PRD document with chat, @mentions, and project settings",
    caption: "Workspace — document left, chat and @mentions right.",
  },
  {
    src: GMAIL_CONNECT_SRC,
    width: 1562,
    height: 1007,
    alt: "AtlasNova Gmail connect — Google OAuth sign-in modal over split-pane workspace with open document tabs",
    caption: "Gmail connect — choose an account to continue to AtlasNova.",
  },
] as const;

export const metadata = {
  title: "AtlasNova · UI for AI-assisted document generation | Angela Yang",
  description:
    "UX/UI design for AtlasNova's document generation feature—mockups and UI flows on an enterprise macOS AI platform.",
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

function Figure({
  src,
  alt,
  width,
  height,
  caption,
  unoptimized = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  unoptimized?: boolean;
}) {
  return (
    <figure className="space-y-3">
      <div className="overflow-hidden">
        <ImageLightbox src={src} alt={alt} className="block w-full" disableHoverScale>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized={unoptimized}
            className="h-auto w-full object-contain"
            sizes="(max-width: 768px) 100vw, 1080px"
          />
        </ImageLightbox>
      </div>
      {caption ? (
        <figcaption className="text-sm text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export default function AtlasNovaCaseStudy() {
  return (
    <article className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink-line">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} flex min-w-0 flex-col overflow-x-hidden`}
          >
            <div className="mb-10 sm:mb-12">
              <CaseStudyHeroTldr
                metricValueClassName="text-[#6366F1]"
                headline="AtlasNova — UI for AI-assisted document generation"
                metrics={ATLAS_TLDR_METRICS}
              />
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="context"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Context
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            One feature inside a larger platform
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            <Highlight>AtlasNova AI</Highlight> is an enterprise macOS platform
            with multiple AI product solutions. This case study is scoped to one
            of them: <Highlight>AI-assisted document generation</Highlight> for
            product teams writing PRDs and research docs—connect a knowledge base,
            configure a template, and generate each section with persistent chat
            beside the draft.
          </p>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            As a UX/UI design intern, I owned the{" "}
            <span className="text-ink-soft">UI for this feature</span>—mockups
            and end-to-end flows from whiteboard sketches through hi-fi screens.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="principles"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Principles
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>What we designed for</h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            PMs using AtlasNova sit between two failure modes: AI that feels like a
            black box, and workflows that split the document from the conversation.
            Each principle below maps directly to a design decision.
          </p>
          <ul className="max-w-3xl space-y-5 text-ink-soft leading-relaxed">
            <li>
              <p>
                <span className="font-semibold text-ink">
                  AI-assisted, not AI-replaced
                </span>{" "}
                — Generation is step-by-step, but the PM stays in the loop. Chat
                stays open while the doc updates, so steering a section feels like
                commenting on the artifact—not switching apps mid-draft.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Transparent generation
                </span>{" "}
                — Each section surfaces where the model is in its pipeline (indexed
                → reading → generating), so users can tolerate wait time and catch
                bad source pulls before the whole PRD is wrong.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">Split-pane layout</span>{" "}
                — Document left, chat right, one macOS window. Users never lose
                context toggling between generated copy and directing the AI.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Context you can see (@mentions)
                </span>{" "}
                — @mention pills reference knowledge-base artifacts—competitive
                analyses, prior specs, research summaries—so grounding the model is
                a visible, repeatable interaction, not hidden prompt engineering.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Template settings upfront
                </span>{" "}
                — Format, page count, detail level, and output type belong in
                onboarding, not an advanced menu after a bad first draft. Surfacing
                controls before generation cuts &ldquo;regenerate everything&rdquo;
                loops.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Connected platforms
                </span>{" "}
                — Document generation pulls from scattered team knowledge. Connect
                flows for Gmail, Google Drive, and other platforms let users import
                context without leaving AtlasNova—familiar OAuth-style sign-in keeps
                the handoff trustworthy.
              </p>
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="early-sketches"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Sketches
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Whiteboard from team discussions
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            Early IA and layout explorations for this feature—before hi-fi
            mockups.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {SKETCHES.map((sketch) => (
              <Figure key={sketch.src} {...sketch} />
            ))}
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="mockups"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Mockups
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>Hi-fi screens</h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            Hi-fi screens I delivered for the document generation flow—home →
            import sources → split-pane workspace → platform connect.
          </p>
          <div className="space-y-8">
            {MOCKUPS.map((screen) => (
              <Figure key={screen.src} {...screen} />
            ))}
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="ui-flow"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            UI flow
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>New project onboarding</h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            Onboarding UI for new document projects: dashboard → prompt → AI
            clarifying questions → template pick → file upload. The flow narrows
            scope before generation—and surfaces template settings upfront, not
            in a buried menu.
          </p>
          <Figure
            src={UI_FLOW_SRC}
            alt="AtlasNova UI flow — new project from dashboard through prompt, AI Q&A, template selection, and file upload"
            width={UI_FLOW_W}
            height={UI_FLOW_H}
            unoptimized
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="border-t border-ink-line pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="atlas-nova" />
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-ink-soft transition hover:text-ink"
          >
            ← Back to home
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

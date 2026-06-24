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

const HOME_COVER = "/case-studies/atlas-nova/home-cover.png";
const UI_FLOW_SRC = `/case-studies/atlas-nova/${encodeURIComponent("UI flow.png")}`;
const UI_FLOW_W = 20554;
const UI_FLOW_H = 9924;

const ATLAS_TLDR_METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Product",
    value: "macOS",
    title: "AI document generation",
    detail: "Connect a knowledge base, pick a template, generate each section step by step.",
  },
  {
    kicker: "Approach",
    value: "Human-in-loop",
    title: "AI-assisted, not AI-replaced",
    detail: "Persistent chat + visible generation status keep the user in control.",
  },
  {
    kicker: "Role",
    value: "Intern",
    title: "UX/UI design",
    detail: "Mockups and end-to-end UI flows.",
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
] as const;

export const metadata = {
  title: "AtlasNova · AI-assisted document generation for product teams | Angela Yang",
  description:
    "UX/UI design for AtlasNova — mockups and UI flows for AI-assisted document generation.",
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
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
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
        <figcaption className="text-sm text-zinc-500">{caption}</figcaption>
      ) : null}
    </figure>
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
                headline="AtlasNova — AI-assisted document generation for product teams"
                metrics={ATLAS_TLDR_METRICS}
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <ImageLightbox
                src={HOME_COVER}
                alt="AtlasNova — AI auto-reply flow with brand tone and review context"
                className="block w-full"
                disableHoverScale
              >
                <Image
                  src={HOME_COVER}
                  alt="AtlasNova — AI auto-reply flow with brand tone and review context"
                  width={1024}
                  height={682}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 1080px"
                  priority
                />
              </ImageLightbox>
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="context"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Context
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>What is AtlasNova?</h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            AtlasNova is a <Highlight>macOS document tool</Highlight> for product
            teams. Connect your knowledge base, configure a template, and the AI{" "}
            <Highlight>generates each section</Highlight> in real time—showing what
            it indexed, read, and wrote. A persistent chat keeps you in control.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="principles"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Principles
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>What we designed for</h2>
          <ul className="max-w-3xl space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-zinc-100">AI-assisted, not replaced</span> —
              chat stays open while the doc updates.
            </li>
            <li>
              <span className="text-zinc-100">Transparent generation</span> —
              indexed → reading → generating per section.
            </li>
            <li>
              <span className="text-zinc-100">Split-pane layout</span> — document
              left, chat right.
            </li>
            <li>
              <span className="text-zinc-100">@mention context</span> — pull
              existing docs into the prompt.
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="early-sketches"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Sketches
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Whiteboard from team discussions
          </h2>
          <p className="max-w-3xl text-zinc-400 leading-relaxed">
            Early IA, home dashboard, and split-pane layout—before hi-fi mockups.
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
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Mockups
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>Hi-fi screens</h2>
          <p className="max-w-3xl text-zinc-400 leading-relaxed">
            Home → import → split-pane workspace.
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
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            UI flow
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>New project onboarding</h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Dashboard → prompt → AI clarifying questions → template pick → file
            upload. The LLM narrows scope before generation starts.
          </p>
          <Figure
            src={UI_FLOW_SRC}
            alt="AtlasNova UI flow — new project from dashboard through prompt, AI Q&A, template selection, and file upload"
            width={UI_FLOW_W}
            height={UI_FLOW_H}
            unoptimized
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="learnings"
          className="scroll-mt-28 space-y-5 border-t border-zinc-800 pt-12 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Learnings
          </span>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed marker:text-zinc-500">
            <li>Show generation steps—not one spinner.</li>
            <li>Keep chat beside the doc, not in another tool.</li>
            <li>@mentions make context visible, not hidden in prompts.</li>
            <li>Template settings belong upfront, not buried in menus.</li>
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

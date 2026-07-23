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
import {
  EA_ASSET,
  PersonaBlock,
  ResearchStatsGrid,
  TaskFlowSteps,
} from "./EaCommunitySections";

const EA_ACCENT = "#F97316";
const EA_ACCENT_BG = "rgba(249, 115, 22, 0.16)";

const WIREFRAMES = [
  {
    src: EA_ASSET("Community Screen.png"),
    width: 1440,
    height: 900,
    alt: "Community hub wireframe — game-based recommendations, hero carousel, and sidebar for My Community and My Event",
    caption:
      "Default Community Screen — recommendations based on games you play, plus sidebar shortcuts to joined communities and upcoming events.",
  },
  {
    src: EA_ASSET("Community Screen_Interest inserted.png"),
    width: 1440,
    height: 900,
    alt: "Community search wireframe — Art Gallery keyword surfaces matching communities, events, and people",
    caption:
      "Search results for “Art Gallery” — interest-matched communities, related events, and people who attended similar events.",
  },
] as const;

const PERSONA_SLIDE = {
  src: EA_ASSET("Persona.png"),
  width: 1920,
  height: 1080,
  alt: "Alex Lewis persona — graphic designer, age 24, Vancouver, with quote and behaviour / pain / motivation",
  caption: "Persona slide delivered for the sprint — Alex Lewis, target user for social discovery.",
} as const;

const EVENTS_WIREFRAME = {
  src: EA_ASSET("Screenshot 2023-06-16 at 9.33 1.png"),
  width: 1920,
  height: 640,
  alt: "Event discovery wireframe — row of event cards with date, title, host, and Details CTA",
  caption:
    "Event browse pattern — card row with franchise art, schedule, host, and Details entry point before registration.",
} as const;

const EA_TLDR_METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Problem",
    value: "Beyond gaming",
    title: "Shallow social discovery",
    detail:
      "Gamers struggle to find people who share interests outside the games themselves—friend lists stay title-centric, not interest-centric.",
  },
  {
    kicker: "My scope",
    value: "Research → flow",
    title: "Sole UX on a 4-person team",
    detail:
      "Secondary research synthesis, persona definition, and task-flow architecture for two frontend engineers and one data scientist.",
  },
  {
    kicker: "Constraint",
    value: "24 hours",
    title: "Concept sprint, not shipped",
    detail:
      "Honest scope: flows and wireframes for a hackathon prototype—no hi-fi polish or live feature.",
  },
];

export const metadata = {
  title: "EA Community Concept · Social discovery hackathon | Angela Yang",
  description:
    "UX for an EA-sponsored industry hackathon—research, persona, and task-flow design for a community and social discovery concept in 24 hours.",
};

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-md px-1.5 py-0.5 font-semibold"
      style={{ backgroundColor: EA_ACCENT_BG, color: EA_ACCENT }}
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
      <div className="overflow-hidden rounded-2xl border border-ink-line bg-paper-soft">
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

export default function EaCommunityConceptCaseStudy() {
  return (
    <article className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink-line">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} flex min-w-0 flex-col overflow-x-hidden`}
          >
            <div className="mb-10 sm:mb-12">
              <CaseStudyHeroTldr
                metricValueClassName="text-[#F97316]"
                headline={
                  <>
                    Gamers often struggle to find people who share interests{" "}
                    <em>beyond</em> the games themselves—making social discovery
                    feel shallow. I owned research synthesis through task-flow
                    architecture for a four-person EA-sponsored hackathon team.
                    The work stayed at concept stage: a{" "}
                    <Highlight>24-hour sprint</Highlight>, not a shipped feature.
                  </>
                }
                metrics={EA_TLDR_METRICS}
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
            A 24-hour industry hackathon, sponsored by EA
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            This was an <Highlight>industry hackathon</Highlight> format: one
            day, one problem brief, one cross-functional team. I joined as the
            sole UX designer alongside two frontend engineers and one data
            scientist—everyone building toward a demo by the end of the sprint.
          </p>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            I&apos;m including a non-shipped concept project because the problem
            maps directly to live-service and social game features: how players
            discover communities, find shared interests beyond a game title, and
            decide whether to join. That&apos;s the same design space as retention,
            engagement, and player-to-player connection in AAA titles—even when
            the deliverable is a flow diagram and wireframes, not a production
            build.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="research"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Research
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Secondary research and a target persona
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            With no time for primary interviews, we grounded the concept in
            secondary research on how teens and young adults form interest-based
            groups online—and where gaming social layers fall short.
          </p>
          <ResearchStatsGrid />
          <PersonaBlock />
          <Figure {...PERSONA_SLIDE} unoptimized />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="principles"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Principles
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            What we designed for
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            Alex needs to find people through shared interests—not just game
            titles. Each principle below drove a specific decision in the task
            flow and wireframes.
          </p>
          <ul className="max-w-3xl space-y-5 text-ink-soft leading-relaxed">
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Search before browse
                </span>{" "}
                — Keyword search surfaces relevant communities immediately
                rather than forcing users through a directory. The wireframe uses
                &ldquo;What are you interested in?&rdquo; as the entry point.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Interest over title
                </span>{" "}
                — Search results group communities, events, and people around a
                shared keyword (e.g. Art Gallery)—not just which franchise you
                play.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Join with context
                </span>{" "}
                — Community profiles preview bio, member count, and upcoming
                events before commitment.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold text-ink">
                  Events as on-ramps
                </span>{" "}
                — Event cards with host, schedule, and a Details CTA give a
                low-stakes path to participate before joining a community
                full-time.
              </p>
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="task-flow"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Task flow
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Community discovery end-to-end
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            The flow I delivered for the team—color-coded by step type in the
            original diagram (screens, user actions, system responses). Search and
            keyword matching sit early; event registration closes the loop.
          </p>
          <TaskFlowSteps />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="wireframes"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Wireframes
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Browse vs. interest-based search
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            Two states of the Community Screen—default game-based recommendations,
            then keyword-driven results when Alex searches for a shared interest.
          </p>
          <div className="space-y-8">
            {WIREFRAMES.map((frame) => (
              <Figure key={frame.src} {...frame} unoptimized />
            ))}
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="events"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Events
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Event discovery and registration path
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            From Community Profile, users pick an event and land on a detail
            screen with summary, Join Event CTA, and similar-event
            recommendations.
          </p>
          <Figure {...EVENTS_WIREFRAME} unoptimized />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="more-time"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Honest close
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            What I&apos;d do with more time
          </h2>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            This project stayed at flow and wireframe stage—the 24-hour constraint
            meant prioritizing direction over pixels. With more time, I&apos;d
            validate the search-first IA with quick usability tests, flesh out
            community profile content hierarchy, and pressure-test event
            registration against real player mental models.
          </p>
          <p className="max-w-3xl text-ink-soft leading-relaxed">
            The engineering team did build a working prototype that validated
            technical feasibility. I don&apos;t have a visual record of that
            build—what&apos;s documented here is the UX direction I owned before
            handoff.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="border-t border-ink-line pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="ea-community-concept" />
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

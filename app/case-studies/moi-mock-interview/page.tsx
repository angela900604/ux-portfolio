import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { MoiInterviewQuotes } from "./MoiInterviewQuotes";

const ASSET = (name: string) => `/case-studies/moi-mock-interview/${name}`;

const MOI_HERO = ASSET("hero-cover.png");

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "April – June 2023" },
  { label: "Role", value: "Sole UX/UI Designer" },
  {
    label: "Project type",
    value: "End-to-end product design · Prototyping · Usability testing",
  },
  {
    label: "Platform",
    value: "iOS mock interview concept (AI + avatar practice)",
  },
] as const;

const MOI_TOC = [
  { id: "problem-research", label: "Research" },
  { id: "define-persona", label: "Persona & journey" },
  { id: "develop-flow", label: "Flow & wires" },
  { id: "iteration-one", label: "Iteration 1" },
  { id: "iteration-two", label: "Iteration 2" },
  { id: "brand-system", label: "Visual system" },
  { id: "delivery", label: "Delivery" },
] as const;

export const metadata = {
  title: "MoI — Mock Interview AI App | Angela Yang",
  description:
    "End-to-end UX/UI for MoI, an AI-powered iOS mock interview app: research, persona, flows, usability testing, and a high-fidelity prototype with accessible UI and iterative improvements for introverted job seekers.",
};

function MoiFigure({
  src,
  alt,
  width,
  height,
  scroll,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  scroll?: boolean;
}) {
  const img = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-auto w-full"
      sizes="(max-width: 768px) 100vw, min(72rem, 100vw)"
    />
  );
  const shell =
    "overflow-x-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/30";
  if (scroll) {
    return (
      <figure className="my-0">
        <div
          className={`${shell} max-h-[min(88vh,56rem)] overflow-y-auto`}
        >
          {img}
        </div>
      </figure>
    );
  }
  return (
    <figure className="my-0">
      <div className={shell}>{img}</div>
    </figure>
  );
}

function ShortLine({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">{children}</p>
  );
}

export default function MoiMockInterviewCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={MOI_HERO}
          imageAlt="MoI — three iPhone mockups: interview setup, live practice with avatar, and score analysis"
          imageClassName="object-cover object-[center_35%]"
          eyebrow={
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/75">
              <span>Case Study</span>
              <span className="text-white/45">·</span>
              <span>Mobile · AI</span>
              <span className="text-white/45">·</span>
              <span>Zero to one</span>
            </div>
          }
          title={
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
              MoI — calmer, smarter interview practice
            </h1>
          }
          subtitle={
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              AI mock interviews with structured feedback—built for new grads who
              need rehearsal without the pressure.
            </p>
          }
        >
          <div className="mt-8">
            <CaseStudyAtAGlance items={AT_A_GLANCE_ITEMS} />
          </div>
        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout toc={MOI_TOC}>
        <CaseStudyInViewSection
          id="problem-research"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">Research — closing the preparation gap</h2>
          <MoiFigure
            src={ASSET("research-artifacts.png")}
            alt="Research context — graduate job search stress and technical collaboration"
            width={903}
            height={604}
          />
          <MoiInterviewQuotes />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="define-persona"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">Persona &amp; journey — Angelica</h2>
          <MoiFigure
            src={ASSET("persona.png")}
            alt="Persona: Angelica, new graduate in Toronto — goals, pain points, and behaviors"
            width={1024}
            height={576}
          />
          <MoiFigure
            src={ASSET("journey-map.png")}
            alt="Journey map: stages from application to interview debrief with emotional curve and opportunities"
            width={1024}
            height={576}
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="develop-flow"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">Task flow &amp; low-fidelity structure</h2>
          <MoiFigure
            src={ASSET("task-flow.png")}
            alt="User task flow: home to mock interview, feedback, and community paths"
            width={1024}
            height={415}
          />
          <MoiFigure
            src={ASSET("wireframes.png")}
            alt="Low-fidelity wireframes: onboarding through community, practice, and performance screens"
            width={1024}
            height={912}
            scroll
          />
          <ShortLine>
            Usability: two rounds, five participants, tasks completed—feedback
            drove the iterations below.
          </ShortLine>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="iteration-one"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">
            Iteration 1 — job posts drive the questions
          </h2>
          <MoiFigure
            src={ASSET("iteration-preference-flow.png")}
            alt="Preference setup evolution: role chips to URL entry to combined URL, focus, count, and format controls"
            width={967}
            height={583}
          />
          <ShortLine>
            Preset role chips failed real job titles. Pasting a posting URL lets MoI
            generate questions from the actual listing, with filters for behavioral,
            technical, and situational practice—relevant instead of generic.
          </ShortLine>
          <ShortLine>
            Text, audio, and video modes add a light behavior-nudging path:
            start small, then level up exposure at the user&apos;s pace.
          </ShortLine>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="iteration-two"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">
            Iteration 2 — scores you can interpret and act on
          </h2>
          <MoiFigure
            src={ASSET("iteration-score-clarity.png")}
            alt="Before and after: performance screen with information icons and explanations for each metric"
            width={991}
            height={757}
          />
          <ShortLine>
            When scores felt abstract, I added inline help: tapping an
            information icon explains what each dimension measures and how to
            improve—turning numbers into guidance.
          </ShortLine>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="brand-system"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">Style direction &amp; contrast checks</h2>
          <MoiFigure
            src={ASSET("style-tile.png")}
            alt="Style tile: glassmorphic mood imagery and blue, purple, and pink color ramps"
            width={1024}
            height={344}
          />
          <MoiFigure
            src={ASSET("accessibility-contrast.png")}
            alt="APCA perceptual contrast checks for text and surface pairings"
            width={1024}
            height={293}
          />
          <ShortLine>
            Pairings were checked with APCA so brand blues and lavenders stay safe
            for UI type while long reading uses higher-contrast treatments.
          </ShortLine>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="delivery"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <h2 className="text-zinc-100">Delivery — hi-fi prototype</h2>
          <MoiFigure
            src={ASSET("delivery-hifi.png")}
            alt="High-fidelity MoI screens: onboarding, home, community, history, setup, interview, completion, and performance"
            width={1024}
            height={709}
          />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            <li className="text-zinc-300">Stress-free practice</li>
            <li className="text-zinc-300">Targeted questions</li>
            <li className="text-zinc-300">Actionable feedback</li>
            <li className="text-zinc-300">Flexible formats</li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="space-y-8 border-t border-zinc-800 pt-12">
          <CaseStudyPrevNext currentSlug="moi-mock-interview" />
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

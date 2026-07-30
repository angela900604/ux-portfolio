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

const PI_ACCENT = "#14B8A6";
const PI_ACCENT_BG = "rgba(20, 184, 166, 0.16)";

const TLDR_METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Product",
    value: "Web",
    title: "AI mock interview platform",
    detail:
      "Mock interviews, question banks, and confidence-building tools for job seekers.",
  },
  {
    kicker: "Role",
    value: "Sole designer",
    title: "UX/UI end-to-end",
    detail: "Heuristic evaluation, UI design, and Framer builds—no prior design team.",
  },
  {
    kicker: "Timeline",
    value: "2024",
    title: "~3 months with founders",
    detail: "Cold outreach → MVP sprints → shipped responsive pages.",
  },
];

const PI_ASSET = (name: string) =>
  `/case-studies/perfect-interview/${encodeURIComponent(name)}`;

const SCREENS = [
  {
    src: PI_ASSET("Question Bank.png"),
    width: 7032,
    height: 2923,
    alt: "PerfectInterview.ai — Question Bank",
    unoptimized: true,
  },
  {
    src: PI_ASSET("multiple regenerated answers.png"),
    width: 1728,
    height: 1726,
    alt: "PerfectInterview.ai — multiple regenerated answers",
  },
  {
    src: PI_ASSET("quote state 1 hidden input.png"),
    width: 1728,
    height: 1117,
    alt: "PerfectInterview.ai — quote state hidden input",
  },
  {
    src: PI_ASSET("custom interview questions dropdown.png"),
    width: 1728,
    height: 1117,
    alt: "PerfectInterview.ai — custom interview questions dropdown",
  },
] as const;

const PROBLEM_ITEMS = [
  "A confusing workflow for job creation and onboarding",
  "An outdated pricing page that hurt conversion",
  "Lack of clarity around its dual purpose (mock interviews + question bank)",
  "No website landing page or SEO strategy to attract new users",
] as const;

const MVP_1_ITEMS = [
  "Streamlined custom job creation workflow",
  "Clarified value proposition: mock interviews + question bank",
  "Redesigned pricing/subscription management pages",
  "Improved interview feedback page hierarchy",
] as const;

export const metadata = {
  title: "PerfectInterview.ai · AI-driven mock interview platform | Angela Yang",
  description:
    "Sole UX/UI designer for PerfectInterview.ai—heuristic evaluation, MVP redesign, and Framer builds for an AI mock interview startup in 2024.",
};

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-md px-1.5 py-0.5 font-semibold"
      style={{ backgroundColor: PI_ACCENT_BG, color: PI_ACCENT }}
    >
      {children}
    </span>
  );
}

function ScreenFigure({
  src,
  alt,
  width,
  height,
  unoptimized = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  unoptimized?: boolean;
}) {
  return (
    <figure>
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
    </figure>
  );
}

export default function PerfectInterviewCaseStudy() {
  return (
    <article className="min-h-screen">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} flex min-w-0 flex-col overflow-x-hidden`}
          >
            <CaseStudyHeroTldr
              metricValueClassName="text-[#14B8A6]"
              headline="PerfectInterview.ai — An AI-driven mock interview platform for job seekers"
              metrics={TLDR_METRICS}
            />
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="context"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="cs-section-eyebrow">
            Context
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>What is PerfectInterview.ai?</h2>
          <p className="max-w-3xl text-zinc-400 leading-relaxed">
            <Highlight>PerfectInterview.ai</Highlight> is an AI-powered platform
            that supports job seekers with mock interviews, question banks, and
            confidence-building tools through responsive web experiences.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="mockups"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="cs-section-eyebrow">
            Mockups
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>Hi-fi screens</h2>
          <div className="space-y-8">
            {SCREENS.map((screen) => (
              <ScreenFigure key={screen.src} {...screen} />
            ))}
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="problem"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="cs-section-eyebrow">
            Problem
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Early product, no design team
          </h2>
          <p className="max-w-3xl text-zinc-400 leading-relaxed">
            PerfectInterview.ai set out to help job seekers practice interviews
            with AI. But as an early-stage startup with no design
            infrastructure, the product struggled with:
          </p>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-400 leading-relaxed marker:text-zinc-500">
            {PROBLEM_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="process"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="cs-section-eyebrow">
            Process
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            From cold email to sole designer
          </h2>
          <div className="max-w-3xl space-y-4 text-zinc-400 leading-relaxed">
            <p>
              My journey began with a cold email to founder{" "}
              <span className="text-zinc-100">Andrew Meng</span>, where I
              proposed a feature based on behavioral psychology: a{" "}
              <Highlight>progressive interview mode</Highlight> that lets users
              build confidence from text → audio → video. The idea resonated,
              and after an engaging conversation, I joined as the sole UX
              designer.
            </p>
            <p>
              Once I officially joined, I collaborated with the two co-founders
              to break the redesign into manageable MVP sprints—each focused on
              improving a specific piece of the user experience. Within that
              structure, I:
            </p>
          </div>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-400 leading-relaxed marker:text-zinc-500">
            <li>
              Integrated lightweight engagement experiments (e.g., confetti
              animations, IG Stories voting) to test delight and retention
            </li>
            <li>
              Sketched, wireframed, and prototyped new flows for job creation,
              onboarding, and subscription management
            </li>
            <li>
              Conducted heuristic evaluations and quick user tests to uncover
              usability gaps
            </li>
            <li>
              Built and shipped responsive pages in{" "}
              <span className="text-zinc-100">Framer</span> to accelerate launch
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="mvp-1"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="cs-section-eyebrow">
            MVP 1
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>Redesign foundations</h2>
          <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-400 leading-relaxed marker:text-zinc-500">
            {MVP_1_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="perfect-interview" />
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
          >
            ← Back to home
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

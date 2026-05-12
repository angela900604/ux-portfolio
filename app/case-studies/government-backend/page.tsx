import type { ReactNode } from "react";
import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import Link from "next/link";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { WideFigure } from "../e-invoice-app/EInvoiceFigures";
import { GovernmentBackendCorrespondingScreensSlider } from "./GovernmentBackendCorrespondingScreensSlider";
import { GovernmentBackendEngineeringAlignment } from "./GovernmentBackendEngineeringAlignment";
import { GovernmentBackendHeroTldr } from "./GovernmentBackendHeroTldr";
import { CASE_STUDY_PRIMARY_TITLE_CLASS } from "@/lib/site-shell";

export const metadata = {
  title: "Role-Based Government Backend (600+ Staff) | Angela Yang",
  description:
    "Backend platform for the Ministry of Finance uniform invoice lottery redemption app: role-based access, reporting, and version control for 600+ government staff (Jul 2025 – Sep 2025).",
};

const ASSET = (name: string) => `/case-studies/government-backend/${name}`;

const GOV_BACKEND_COVER_SRC = ASSET(
  encodeURIComponent("rolebased backend cover.png"),
);

const HIGHLIGHT_CYAN = "#05C3DD";
const HIGHLIGHT_CYAN_BG = "rgba(5, 195, 221, 0.18)";

/** Homepage card + in-page hero/cover — shared artwork */
const BACKEND_COVER = {
  src: GOV_BACKEND_COVER_SRC,
  alt: "Role-based government backend platform — cover artwork",
} as const;

const GOV_BACKEND_JOURNEY_IDS = ["iterations"] as const;

function Metric({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-md px-1.5 py-0.5 font-semibold tabular-nums"
      style={{
        backgroundColor: HIGHLIGHT_CYAN_BG,
        color: HIGHLIGHT_CYAN,
      }}
    >
      {children}
    </span>
  );
}

export default function GovernmentBackendCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={GOV_BACKEND_COVER_SRC}
          imageAlt="Role-based government backend platform — cover artwork"
          imageClassName="object-cover object-[center_40%]"
          eyebrow={
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/75">
              <span>Case Study</span>
              <span className="text-white/45">·</span>
              <span>Public Service</span>
              <span className="text-white/45">·</span>
              <span>Enterprise System</span>
            </div>
          }
          title={
            <h1
              className={`mt-5 max-w-4xl ${CASE_STUDY_PRIMARY_TITLE_CLASS} text-white`}
            >
              Role-based backend for 600+ government staff
            </h1>
          }
          subtitle={
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              Backend platform for the Ministry of Finance&apos;s Uniform Invoice
              Lottery Redemption App—role-based access and reporting for{" "}
              <Metric>600+</Metric> staff, faster invoice management and fewer
              errors.
            </p>
          }
        >
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <ImageLightbox
              src={BACKEND_COVER.src}
              alt={BACKEND_COVER.alt}
              className="block w-full"
              disableHoverScale
            >
              <Image
                src={BACKEND_COVER.src}
                alt={BACKEND_COVER.alt}
                width={1024}
                height={764}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 1080px"
              />
            </ImageLightbox>
          </div>

          <div className="mt-10">
            <GovernmentBackendHeroTldr />
          </div>

        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="project-background"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Opportunity
          </span>
          <h2 className="max-w-3xl text-zinc-100 leading-snug">
            After the public lottery app shipped, MoF needed a single backend for
            announcements, promos, push rules, reporting, and app versions—used by{" "}
            <Metric>600+</Metric> people who expect the same familiarity
            as other government systems.
          </h2>

          <div className="space-y-3 pt-4">
            <h5 className="text-zinc-100">
              Example of corresponding screens
            </h5>
            <p className="max-w-3xl text-sm text-zinc-400 leading-relaxed">
              Staff compose notification content in the backend, set publish timing,
              and schedule delivery in advance. End users receive{" "}
              <span className="text-zinc-200">push notifications</span>, then open the
              in-app <span className="text-zinc-200">notification center</span> and
              message details—aligned with those backend rules.
            </p>
            <GovernmentBackendCorrespondingScreensSlider
              backendSrc={ASSET("annotation.png")}
              appSrc={ASSET("app.png")}
              backendAlt="Annotated diagram: backend notification rules and corresponding in-app notification surfaces"
              appAlt="Corresponding app UI composition: push, notification center, and message detail aligned with backend settings"
              aspectWidth={2648}
              aspectHeight={1244}
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="final-result"
          className="scroll-mt-28 sm:scroll-mt-32"
        >
          <div className="overflow-hidden rounded-[20px] border border-zinc-700/60 bg-zinc-900/30">
            <div className="relative w-full aspect-video">
              <video
                className="absolute inset-0 h-full w-full bg-black object-contain"
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                aria-label="Backend admin: notification content and scheduled publishing"
              >
                <source src={ASSET("backend-demo.mp4")} type="video/mp4" />
              </video>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="design-engineering-alignment"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Design &amp; engineering
          </span>
          <h2 className="max-w-3xl text-zinc-100">
            How I aligned design with engineering
          </h2>
          <GovernmentBackendEngineeringAlignment />
        </CaseStudyInViewSection>

        <div className="flex flex-col gap-4 sm:gap-5">
        <DesignJourneyCollapsible
          journeySectionIds={GOV_BACKEND_JOURNEY_IDS}
          panelId="gov-backend-design-journey-panel"
          title="Key design iterations"
          subtitle="Reporting dashboards and app version control — before/after and flow diagrams"
          className="!border-t-0"
        >
        <CaseStudyInViewSection
          id="iterations"
          className="scroll-mt-28 space-y-8 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Key design iterations
          </span>
          <h2 className="text-zinc-100">
            Two iterations that went through the longest discussions
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            There were many iterations when discussing API capabilities, data
            sources, and staffing needs. I chose the following two features because
            those iterations went through the longest discussions.
          </p>

          <div className="space-y-4">
            <h5 className="text-zinc-100">
              Design iteration 1 · Data reporting
            </h5>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">Before:</span> Reporting
              worked, but the layout made it harder to answer common questions in one
              place: how membership trended over a chosen year, how to read peaks
              quickly in meetings, and how to export without second-guessing the
              time range.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">After:</span> I iterated
              on the same metrics with clearer filters (for example, statistical
              year), stronger chart hierarchy and hover detail, and explicit
              weekly/monthly views—so staff could prep for reviews and audits
              without rebuilding tables by hand. Engineers noted that large user
              datasets still needed sensible time bounds and export limits.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <span className="text-zinc-200 font-semibold">Impact:</span> Present{" "}
              <span
                className="rounded-md px-1.5 py-0.5 font-medium"
                style={{
                  backgroundColor: HIGHLIGHT_CYAN_BG,
                  color: HIGHLIGHT_CYAN,
                }}
              >
                weekly
              </span>{" "}
              and{" "}
              <span
                className="rounded-md px-1.5 py-0.5 font-medium"
                style={{
                  backgroundColor: HIGHLIGHT_CYAN_BG,
                  color: HIGHLIGHT_CYAN,
                }}
              >
                monthly
              </span>{" "}
              numbers in meetings without manual calculations; compare time periods
              more easily;{" "}
              <span
                className="rounded-md px-1.5 py-0.5 font-medium"
                style={{
                  backgroundColor: HIGHLIGHT_CYAN_BG,
                  color: HIGHLIGHT_CYAN,
                }}
              >
                export
              </span>{" "}
              datasets independently, reducing reliance on engineers and speeding up
              decision-making.
            </p>
          </div>

          <div className="max-w-4xl space-y-10 pt-2">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <WideFigure
                src={ASSET("iteration-reporting-after-1.png")}
                alt="After: reporting with statistical year filter and cumulative member bar chart for 2024"
                caption="Iteration 1 · After — clearer query + chart (statistical year &amp; monthly cumulative)."
              />
              <WideFigure
                src={ASSET("iteration-reporting-after-2.png")}
                alt="After: reporting with weekly and monthly toggles, tooltip, and CSV export"
                caption="Iteration 1 · After — weekly/monthly views, tooltips, and CSV export."
              />
            </div>
            <WideFigure
              src={ASSET("iteration-reporting-before.png")}
              alt="Before: data reporting dashboard with cumulative member count and monthly bar chart"
              caption="Iteration 1 · Data reporting — before (baseline reporting view)."
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h5 className="text-zinc-100">
              Design iteration 2 · App update version control
            </h5>
            <p className="text-zinc-300 leading-relaxed">
              With engineers, I aligned how the UI should surface{" "}
              <span className="text-zinc-200">mandatory vs. optional updates</span>,{" "}
              <span className="text-zinc-200">duplicate version checks</span>, and
              feedback when saves fail—so staff always understand what the system
              will do before data is committed.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The flow diagram below maps user actions to backend judgment: for
              example, whether an update is forced, whether a version number already
              exists, and how errors surface (inline validation, confirmation
              modals, success toasts). That shared picture kept UX and implementation
              in sync under tight release constraints.
            </p>
          </div>

          <div className="max-w-4xl pt-2">
            <WideFigure
              borderless
              src={ASSET("iteration-version-control-flow.png")}
              alt="Flow diagram: APP version management add and view flows with validation and system decision points"
              caption="Iteration 2 · Version control — UI flows and system judgment (add / view, validation, confirmation)."
            />
          </div>
        </CaseStudyInViewSection>
        </DesignJourneyCollapsible>

        <DesignJourneyCollapsible
          journeySectionIds={["reflection"]}
          navAnchorId="reflection"
          panelId="gov-backend-reflection-panel"
          title="Reflection"
          subtitle="Lessons learned under enterprise constraints"
          className="!border-t-0 !pt-0 sm:!pt-0"
        >
          <CaseStudyInViewSection
            id="reflection"
            className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
          >
            <h2 className="text-zinc-100">
              Processes and interfaces, under constraints
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              This project taught me that designing government-scale platforms
              isn&apos;t just about new features—it&apos;s about integrating with
              established habits, hierarchies, and system logic. The biggest challenge
              was balancing existing workflows with a scalable backend architecture,
              all under a tight timeline.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I made intentional trade-offs: instead of building a full functional
              map, I validated requirements directly through annotated mockups and
              page flows. This accelerated collaboration but required refining details
              live during discussions. It was a valuable lesson in designing under
              constraints while still maintaining trust and accuracy.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Most importantly, I learned that in enterprise-scale projects, solving
              problems often means designing processes as much as interfaces. This
              strengthened my ability to align system logic with human workflows,
              advocate for practical solutions, and deliver designs that enhance
              usability while driving organizational efficiency.
            </p>
          </CaseStudyInViewSection>
        </DesignJourneyCollapsible>
        </div>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="government-backend" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to home
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

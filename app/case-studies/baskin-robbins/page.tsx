import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyAtAGlance,
  CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS,
} from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { AppStoreReviewsSection } from "./AppStoreReviews";
import {
  BaskinFinalScreensMarquee,
  type BaskinMarqueeSlide,
} from "./BaskinFinalScreensMarquee";
import {
  CASE_STUDY_BODY_GRID,
  SITE_SHELL_CONTAINER,
} from "@/lib/site-shell";

export const metadata = {
  title:
    "Cross-market collaboration with Japan HQ — Baskin Robbins Taiwan membership app | Angela Yang",
  description:
    "Lead UX/UI for BR31 Taiwan’s first membership app: Japan HQ alignment via interpreted meetings, functional map, style proposals, MVP delivery, and build-ready UI kit.",
};

const ASSET = (name: string) => `/case-studies/baskin-robbins/${name}`;

const HERO_MOCKUP_IMAGES = [
  {
    src: ASSET("hero-mockup-app-1.png"),
    alt: "31 Club membership app mockup — dual phone composition with home and member barcode",
  },
  {
    src: ASSET("hero-mockup-scene-1.png"),
    alt: "31 Club app in context at a Baskin-Robbins counter — barcode ready for POS scan",
  },
  {
    src: ASSET("hero-mockup-scene-2.png"),
    alt: "31 Club app mockup — flavors catalog and store locator on two phones",
  },
] as const;

const DESIGN_JOURNEY_SUBSECTION_IDS = [
  "design-journey-req",
  "design-journey-visual",
  "design-journey-flow",
  "design-journey-hq",
  "design-journey-handoff",
] as const;

const FINAL_PRODUCT_MARQUEE_SLIDES: readonly BaskinMarqueeSlide[] = [
  20, 9, 10, 3, 13, 5, 6, 8, 4,
].map((n) => ({
  src: ASSET(`final-screen-${String(n).padStart(2, "0")}.png`),
  alt: `BR31 Taiwan membership app — final screen ${n}`,
}));

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "Dec 2024 – Mar 2025 (4 months)" },
  { label: "Role", value: "Lead UX/UI Designer" },
  {
    label: "Project type",
    value: "Mobile membership app · Loyalty & rewards (Taiwan)",
  },
  {
    label: "Market scope",
    value: "Taiwan launch · Aligned with Japan HQ · iOS + Android",
  },
  {
    label: "Focus",
    value: "Discovery through handoff · MVP with engineering",
  },
] as const;

const sectionScroll =
  "scroll-mt-28 sm:scroll-mt-32";

/** Taiwan App Store — 31 Club (Baskin-Robbins Taiwan official app) */
const APP_STORE_TW =
  "https://apps.apple.com/tw/app/31%E4%BF%B1%E6%A8%82%E9%83%A8/id6755289789";

export default function BaskinRobbinsCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className={`${SITE_SHELL_CONTAINER} pt-14 pb-6 sm:pt-20 sm:pb-8`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} case-study-prose min-w-0 overflow-x-hidden`}
          >
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500">
              <span>Case Study</span>
              <span className="text-zinc-600">·</span>
              <span>Mobile · Loyalty</span>
              <span className="text-zinc-600">·</span>
              <span>Zero-to-one</span>
            </div>
            <h1 className="mt-5 max-w-[min(100%,56rem)] text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl lg:text-6xl">
              Cross-market collaboration with Japan HQ for Taiwan&apos;s first
              Baskin Robbins membership app
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Taiwan&apos;s loyalty market was growing fast while BR31 still had no
              native app—I led end-to-end UX/UI for 31 Club, shipped the phase-one MVP
              on schedule, and early Taiwan App Store reviews came in at five stars.
            </p>
            <div className="mt-8 max-w-4xl">
              <CaseStudyAtAGlance
                items={AT_A_GLANCE_ITEMS}
                {...CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800/80 bg-zinc-900/25">
          <div className={`${SITE_SHELL_CONTAINER} py-8 sm:py-10`}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HERO_MOCKUP_IMAGES.map((img) => (
                <div key={img.src} className="min-w-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    quality={95}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="project-background"
          className={`space-y-6 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project background
          </span>
          <h2 className="text-zinc-100">
            Japan&apos;s BR31 had a thriving membership app. Taiwan had nothing.
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Japan&apos;s 31Club launched in 2014 and grew to over 10 million
            members by 2025. Member purchases now account for more than 40% of
            total sales — proof that the loyalty loop directly drives revenue.
            Taiwan had no equivalent: no dedicated app, no digital rewards surface,
            no way to turn a one-time scoop buyer into a repeat member.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I was brought in to close that gap — design Taiwan&apos;s first BR31
            membership app from zero, aligned with Japan HQ, shipped in 4 months.
          </p>
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <Image
              src={ASSET("japan-hq-cross-market-meeting.png")}
              alt="Video call with Japan HQ and Taiwan stakeholders—cross-market alignment for BR31 membership app, interpreter-supported reviews before build"
              width={1024}
              height={644}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          className={`min-w-0 w-full space-y-8 ${sectionScroll}`}
        >
          <DesignJourneyCollapsible
            journeySectionIds={DESIGN_JOURNEY_SUBSECTION_IDS}
            panelId="baskin-design-journey-panel"
            navAnchorId="design-journey"
            title="Design journey"
            subtitle="From requirements and handoff to HQ sign-off and store UAT"
          >
            <div
              id="design-journey-req"
              className={`max-w-3xl space-y-4 ${sectionScroll}`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                Requirement interviews &amp; functional map
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Interviews with the client and backend team locked feasibility and
                scope early. Japan tied tiers to points; Taiwan&apos;s CRM used
                spend, with no initial point-redemption plan—we redesigned loyalty
                for the local market before UI, not after. The functional map also
                flagged webview vs. native surfaces so build stayed interpretable.
              </p>
            </div>

            <div
              id="design-journey-visual"
              className={`max-w-3xl space-y-4 ${sectionScroll}`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                Visual style proposal
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Three directions under time pressure:{" "}
                <span className="text-zinc-300">
                  A — sweet &amp; energetic (pink-forward)
                </span>
                ;{" "}
                <span className="text-zinc-300">
                  B — minimal &amp; fresh (white + pink accents, close to Japan)
                </span>
                ;{" "}
                <span className="text-zinc-300">
                  C — gradient &amp; premium
                </span>
                . The client chose A; I locked pink and blue primaries with neutral
                hierarchy and built the component library on that system.
              </p>
            </div>

            <div
              id="design-journey-flow"
              className={`max-w-3xl space-y-4 ${sectionScroll}`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                Page flow &amp; interaction logic
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                After mockup approval, a detailed page flow captured transitions,
                decision logic, scroll vs. fixed regions, and states—not just arrows.
                Figma links let engineers walk the logic without slack threads.
              </p>
            </div>

            <div
              id="design-journey-hq"
              className={`max-w-3xl space-y-4 ${sectionScroll}`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                Cross-market review with Japan HQ
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                HQ sign-off gated engineering. I presented through
                interpreter-supported calls with both market rationale and screens—why
                Taiwan diverged where it had to—so we avoided expensive post-launch
                rework.
              </p>
            </div>

            <div
              id="design-journey-handoff"
              className={`max-w-3xl space-y-4 ${sectionScroll}`}
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                Handoff &amp; UAT
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Handoff was two Figmas: full mockups with slice notes (dimensions,
                constraints, scroll regions) and a UI kit (components, color, type,
                icons). Pre-launch UAT stressed voucher redemption—POS scans of
                in-app barcodes across ticket types and hardware. Issues were closed
                before the September 2025 launch.
              </p>
            </div>
          </DesignJourneyCollapsible>

          <div className="grid min-w-0 gap-4 md:grid-cols-2 md:items-start md:gap-6">
            <Image
              src={ASSET("uat-voucher-flow-collage.png")}
              alt="UAT testing — POS barcode scan across ticket types before September 2025 launch"
              width={1200}
              height={900}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <video
              className="h-auto w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Screen recording: BR31 voucher and POS barcode testing during UAT"
            >
              <source src={ASSET("br31-testing.webm")} type="video/webm" />
              <source src={ASSET("br31-testing.mp4")} type="video/mp4" />
            </video>
          </div>
        </CaseStudyInViewSection>

        <div id="final-product" className={sectionScroll}>
          <BaskinFinalScreensMarquee slides={FINAL_PRODUCT_MARQUEE_SLIDES} />
        </div>

        <AppStoreReviewsSection appStoreHref={APP_STORE_TW} />

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="baskin-robbins" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to work
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

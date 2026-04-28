import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyAtAGlance,
  CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS,
} from "../_components/CaseStudyAtAGlance";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { AppStoreReviewsSection } from "./AppStoreReviews";
import {
  BaskinFinalScreensMarquee,
  type BaskinMarqueeSlide,
} from "./BaskinFinalScreensMarquee";

export const metadata = {
  title:
    "Cross-market collaboration with Japan HQ — Baskin Robbins Taiwan membership app | Angela Yang",
  description:
    "Lead UX/UI for BR31 Taiwan’s first membership app: Japan HQ alignment via interpreted meetings, functional map, style proposals, MVP delivery, and build-ready UI kit.",
};

const ASSET = (name: string) => `/case-studies/baskin-robbins/${name}`;

const HERO_MEMBERSHIP = {
  src: ASSET("hero-membership.png"),
  alt: "BR31 membership app hero: member benefits and digital card on phone in café setting",
} as const;

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
  { label: "Timeline", value: "Dec 2024 – Feb 2025 (3 months)" },
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
  const [heroPrimary, ...heroSquarePair] = HERO_MOCKUP_IMAGES;

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={HERO_MEMBERSHIP.src}
          imageAlt={HERO_MEMBERSHIP.alt}
          imageClassName="object-cover object-[center_30%]"
          eyebrow={
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/75">
              <span>Case Study</span>
              <span className="text-white/45">·</span>
              <span>Mobile · Loyalty</span>
              <span className="text-white/45">·</span>
              <span>Zero-to-one</span>
            </div>
          }
          title={
            <h1 className="mt-5 max-w-[min(100%,56rem)] text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Cross-market collaboration with Japan HQ for Taiwan&apos;s first
              Baskin Robbins membership app
            </h1>
          }
          subtitle={
            <p className="text-base leading-relaxed text-zinc-200 sm:text-lg">
              Taiwan&apos;s loyalty market was growing fast while BR31 still had no
              native app—I led end-to-end UX/UI for 31 Club, shipped the phase-one MVP
              on schedule, and early Taiwan App Store reviews came in at five stars.
            </p>
          }
          leadBelowSubtitle={
            <CaseStudyAtAGlance
              items={AT_A_GLANCE_ITEMS}
              {...CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS}
            />
          }
        >
          <div className="space-y-6 sm:space-y-8">
            <div className="min-w-0 w-full">
              <Image
                src={heroPrimary.src}
                alt={heroPrimary.alt}
                width={1200}
                height={900}
                quality={95}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1480px) 100vw, 1200px"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {heroSquarePair.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square min-w-0 overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    quality={95}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 500px"
                  />
                </div>
              ))}
            </div>
          </div>
        </CaseStudyHeroFullBleed>
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
            membership app from zero, aligned with Japan HQ, shipped in 3 months.
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

        <div id="final-product" className={sectionScroll}>
          <BaskinFinalScreensMarquee slides={FINAL_PRODUCT_MARQUEE_SLIDES} />
        </div>

        <CaseStudyInViewSection
          className={`min-w-0 w-full border-t border-zinc-800 pt-10 sm:pt-12 ${sectionScroll}`}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
            <div className="min-w-0 flex-1">
              <DesignJourneyCollapsible
                journeySectionIds={DESIGN_JOURNEY_SUBSECTION_IDS}
                panelId="baskin-design-journey-panel"
                navAnchorId="design-journey"
                title="Design journey"
                subtitle="From requirements and handoff to HQ sign-off and store UAT"
                className="!scroll-mt-0 border-t-0 !pt-0"
              >
                <div
                  id="design-journey-req"
                  className={`space-y-4 ${sectionScroll}`}
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
                  className={`space-y-4 ${sectionScroll}`}
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
                  className={`space-y-4 ${sectionScroll}`}
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
                  className={`space-y-4 ${sectionScroll}`}
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
                  className={`space-y-4 ${sectionScroll}`}
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
            </div>

            <div className="min-w-0 flex-1">
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
          </div>
        </CaseStudyInViewSection>

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

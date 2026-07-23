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
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { AppStoreReviewsSection } from "./AppStoreReviews";
import {
  BaskinFinalScreensMarquee,
  type BaskinMarqueeSlide,
} from "./BaskinFinalScreensMarquee";
import {
  CASE_STUDY_BODY_GRID,
  CASE_STUDY_SECTION_TITLE_CLASS,
  SITE_SHELL_INNER,
} from "@/lib/site-shell";

const BR_TLDR_METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Timeline",
    value: "3 months",
    title: "Zero to App Store",
    detail:
      "Requirements, Japan HQ sign-off, build-ready UI kit, and store UAT — all within 90 days.",
  },
  {
    kicker: "Reference benchmark",
    value: "10M+",
    title: "Japan 31Club members",
    detail:
      "Japan's 31Club launched in 2014; member purchases account for 40%+ of total sales — the loyalty loop this app needed to replicate for Taiwan.",
  },
  {
    kicker: "Cross-market",
    value: "JP × TW",
    title: "Japan HQ alignment",
    detail:
      "Interpreter-supported design reviews with documented divergence rationale — HQ sign-off secured before engineering started.",
  },
  {
    kicker: "Shipped",
    value: "Sept 2025",
    title: "Taiwan App Store launch",
    detail:
      "Taiwan's first BR31 membership app, live on the App Store with POS barcode integration validated through pre-launch UAT.",
  },
];

export const metadata = {
  title:
    "Cross-market collaboration with Japan HQ — Baskin Robbins Taiwan membership app | Angela Yang",
  description:
    "Lead UX/UI for BR31 Taiwan’s first membership app: Japan HQ alignment via interpreted meetings, functional map, style proposals, MVP delivery, and build-ready UI kit.",
};

const ASSET = (name: string) => `/case-studies/baskin-robbins/${name}`;

/** Full-resolution page flow (mina asset); served unoptimized to avoid recompression. */
const PAGE_FLOW_MEMBER_ZONE_SRC = `/case-studies/mina/${encodeURIComponent("Page Flow_會員專區.png")}`;
const PAGE_FLOW_MEMBER_ZONE = {
  src: PAGE_FLOW_MEMBER_ZONE_SRC,
  width: 9000,
  height: 3883,
  alt: "BR31 membership app — page flow for the member area (Excel), screens and transitions for alignment under a tight timeline",
} as const;

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

const sectionScroll =
  "scroll-mt-28 sm:scroll-mt-32";

/** Taiwan App Store — 31 Club (Baskin-Robbins Taiwan official app) */
const APP_STORE_TW =
  "https://apps.apple.com/tw/app/31%E4%BF%B1%E6%A8%82%E9%83%A8/id6755289789";

export default function BaskinRobbinsCaseStudy() {
  const [heroPrimary, ...heroSquarePair] = HERO_MOCKUP_IMAGES;

  return (
    <article className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink-line">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} min-w-0 space-y-10 sm:space-y-12`}
          >
            <div>
              <CaseStudyHeroTldr
                metricValueClassName="text-pink-400"
                headline={
                  <>
                    Lead designer on Taiwan&apos;s first BR31 membership app ·
                    Cross-market Japan HQ alignment · Shipped in 3 months
                  </>
                }
                metrics={BR_TLDR_METRICS}
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink-line bg-paper-soft">
              <ImageLightbox
                src={HERO_MEMBERSHIP.src}
                alt={HERO_MEMBERSHIP.alt}
                className="block w-full"
                disableHoverScale
              >
                <Image
                  src={HERO_MEMBERSHIP.src}
                  alt={HERO_MEMBERSHIP.alt}
                  width={1600}
                  height={1000}
                  quality={95}
                  className="h-auto w-full object-cover object-[center_30%]"
                  sizes="(max-width: 1480px) 100vw, 1200px"
                  priority
                />
              </ImageLightbox>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="min-w-0 w-full">
                <ImageLightbox
                  src={heroPrimary.src}
                  alt={heroPrimary.alt}
                  className="block w-full"
                  disableHoverScale
                >
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
                </ImageLightbox>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {heroSquarePair.map((img) => (
                  <ImageLightbox
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="relative aspect-square min-w-0 overflow-hidden"
                    disableHoverScale
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      quality={95}
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 500px"
                    />
                  </ImageLightbox>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="project-background"
          className={`space-y-6 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Project background
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Japan&apos;s BR31 had a thriving membership app. Taiwan had nothing.
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-3xl">
            Japan&apos;s 31Club launched in 2014 and grew to over 10 million
            members by 2025. Member purchases now account for more than 40% of
            total sales — proof that the loyalty loop directly drives revenue.
            BR31 Taiwan had no app while competitors were already running loyalty
            programs on mobile. There was no dedicated digital rewards surface—no
            way to turn a one-time scoop buyer into a repeat member.
          </p>
          <p className="text-ink-soft leading-relaxed max-w-3xl">
            I was brought in to close that gap — design Taiwan&apos;s first BR31
            membership app from zero, aligned with Japan HQ, shipped in 3 months.
          </p>
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-paper-soft">
            <ImageLightbox
              src={ASSET("japan-hq-cross-market-meeting.png")}
              alt="Video call with Japan HQ and Taiwan stakeholders—cross-market alignment for BR31 membership app, interpreter-supported reviews before build"
              className="block w-full"
              disableHoverScale
            >
              <Image
                src={ASSET("japan-hq-cross-market-meeting.png")}
                alt="Video call with Japan HQ and Taiwan stakeholders—cross-market alignment for BR31 membership app, interpreter-supported reviews before build"
                width={1024}
                height={644}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </ImageLightbox>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="cross-market-decisions"
          className={`space-y-6 border-t border-ink-line pt-10 sm:pt-12 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Cross-market decisions
          </span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Where Japan HQ patterns met Taiwan usage—and what we negotiated
          </h2>
          <div className="max-w-3xl space-y-4 text-ink-soft leading-relaxed">
            <p>
              Japan&apos;s 31Club reference skews{" "}
              <span className="text-ink">
                calm density, points-first loyalty, and a minimal white/pink shell
              </span>
              built for a market that has used the app for years. Taiwan launch
              skewed{" "}
              <span className="text-ink">
                in-store urgency: barcode ready at the counter, faster scan paths,
                and promo surfaces
              </span>{" "}
              parents expect from local QSR loyalty apps. The conflict wasn&apos;t
              “ignore HQ”—it was which layers had to stay globally legible (brand
              color, illustration tone, component vocabulary) versus which could flex
              for local CRM reality and retail rhythm. My trade-off was to{" "}
              <span className="text-ink">
                keep parent-brand primitives and review gates
              </span>{" "}
              while refusing a pixel-copy of Japan: IA, density, and tier storytelling
              were tuned for Taiwan first, with rationale documented for every
              divergence before interpreter-led HQ calls.
            </p>
            <p>
              The decision that{" "}
              <span className="text-ink">
                actually rewired the design direction—after alignment, not before
              </span>
              —was loyalty mechanics: HQ&apos;s mental model centers on{" "}
              <span className="text-ink">points and redemption</span>, but
              Taiwan&apos;s phase-one backend was{" "}
              <span className="text-ink">spend-based tiers without point
              burn</span>. Once engineering and client confirmed that gap in
              workshops, we stopped designing “mini Japan” flows and reframed the MVP
              around <span className="text-ink">spend progress, tier unlocks,
              and voucher redemption</span>—then chose the sweeter, more campaign-forward
              visual direction (A) because it matched how Taiwan needed to{" "}
              <span className="text-ink">merchandise benefits</span>, while
              direction B (closer to Japan&apos;s quieter white shell) would have
              under-communicated value in a market still learning the program.
            </p>
          </div>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>

      <CaseStudyInViewSection
        id="final-product"
        className={`min-w-0 w-full ${sectionScroll}`}
      >
        <BaskinFinalScreensMarquee slides={FINAL_PRODUCT_MARQUEE_SLIDES} />
      </CaseStudyInViewSection>

      <CaseStudyContentLayout containerClassName="!pt-0 sm:!pt-0">
        <CaseStudyInViewSection
          className={`min-w-0 w-full border-t border-ink-line pt-10 sm:pt-12 ${sectionScroll}`}
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
                  <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    Requirement interviews &amp; functional map
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
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
                  <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    Visual style proposal
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                    Three directions under time pressure:{" "}
                    <span className="text-ink-soft">
                      A — sweet &amp; energetic (pink-forward)
                    </span>
                    ;{" "}
                    <span className="text-ink-soft">
                      B — minimal &amp; fresh (white + pink accents, close to Japan)
                    </span>
                    ;{" "}
                    <span className="text-ink-soft">
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
                  <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    Page flow &amp; interaction logic
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                    After mockup approval, a detailed page flow captured transitions,
                    decision logic, scroll vs. fixed regions, and states—not just arrows.
                    Figma links let engineers walk the logic without slack threads.
                  </p>
                </div>

                <div
                  id="design-journey-hq"
                  className={`space-y-4 ${sectionScroll}`}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    Cross-market review with Japan HQ
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
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
                  <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    Handoff &amp; UAT
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
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

        <CaseStudyInViewSection
          id="process-deviation"
          className={`space-y-6 border-t border-ink-line pt-10 sm:pt-12 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
            Reflection
          </span>
          <div className="max-w-3xl space-y-4 text-ink-soft leading-relaxed">
            <p>
              Due to a tight timeline for a Baskin Robbins mobile app project, I opted
              to expedite the process by skipping the stage of creating a sitemap and
              functional map. Instead, I used Excel to discuss the main features and
              layout using page flow, which I had already created during the wireframe
              stage.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink-line bg-paper-soft">
            <ImageLightbox
              src={PAGE_FLOW_MEMBER_ZONE.src}
              alt={PAGE_FLOW_MEMBER_ZONE.alt}
              className="block w-full"
              disableHoverScale
            >
              <Image
                src={PAGE_FLOW_MEMBER_ZONE.src}
                alt={PAGE_FLOW_MEMBER_ZONE.alt}
                width={PAGE_FLOW_MEMBER_ZONE.width}
                height={PAGE_FLOW_MEMBER_ZONE.height}
                unoptimized
                className="h-auto w-full object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </ImageLightbox>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="border-t border-ink-line pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="baskin-robbins" />
          <Link
            href="/"
            className="text-sm font-medium text-ink-soft hover:text-ink transition"
          >
            ← Back to home
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

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
import { AppStoreReviewsSection } from "./AppStoreReviews";
import {
  FinalProductScreens,
  type FinalProductGroup,
} from "./FinalProductScreens";
import {
  BaskinHeroShowcase,
  type BaskinHeroImage,
} from "./BaskinHeroShowcase";

export const metadata = {
  title:
    "Cross-market collaboration with Japan HQ — Baskin Robbins Taiwan membership app | Angela Yang",
  description:
    "Lead UX/UI for BR31 Taiwan’s first membership app: Japan HQ alignment via interpreted meetings, functional map, style proposals, MVP delivery, and build-ready UI kit.",
};

const ASSET = (name: string) => `/case-studies/baskin-robbins/${name}`;

const HERO_MEMBERSHIP: BaskinHeroImage = {
  src: ASSET("hero-membership.png"),
  alt: "BR31 membership app hero: member benefits and digital card on phone in café setting",
  width: 1024,
  height: 560,
};

const HERO_DEMO_IMAGES = [
  {
    src: ASSET("hero-app-barcode-store.png"),
    alt: "In-store context: member app showing carrier barcode at a Baskin-Robbins counter",
    width: 1024,
    height: 571,
  },
] as const;

/**
 * Final product (`final-screen-01` … `final-screen-20`): each number 1–20 appears
 * at most once across groups. Order in each `screenNumbers` = display order.
 */
const FINAL_PRODUCT_GROUPS: readonly FinalProductGroup[] = [
  {
    title: "Sign-in & registration",
    screenNumbers: [10, 3],
  },
  {
    title: "Member home",
    screenNumbers: [20, 9],
  },
  {
    title: "Vouchers",
    screenNumbers: [13, 5],
  },
  {
    title: "In-store visits & points",
    screenNumbers: [6, 8],
  },
  {
    title: "Store locator",
    screenNumbers: [4, 1],
  },
];

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
          <BaskinHeroShowcase primary={null} secondary={HERO_DEMO_IMAGES} />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#final-product"
              className="inline-flex items-center gap-2 rounded-full border border-[#F20C90]/35 bg-[#F20C90]/10 px-4 py-2.5 text-sm font-medium text-[#ff8cc8] transition hover:border-[#F20C90]/50 hover:bg-[#F20C90]/15"
            >
              Jump to final solutions
              <span aria-hidden className="text-[#ff5ca8]">
                ↓
              </span>
            </a>
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
            Why this project
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            BR31 already had a working loyalty program in Japan. Taiwan had
            nothing—no dedicated app, no digital rewards loop. I led end-to-end
            UX/UI to change that: a Phase 1 MVP shipped in 4 months, aligned with
            Japan HQ and built for how Taiwanese users actually engage with loyalty
            programs on mobile.
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
          id="design-journey"
          className={`max-w-3xl space-y-8 ${sectionScroll}`}
        >
          <div className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Design journey
            </span>
            <h2 className="max-w-3xl text-zinc-100">
              From requirements and handoff to HQ sign-off and store UAT
            </h2>
          </div>

          <div className="space-y-4">
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

          <div className="space-y-4">
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
              Page flow &amp; interaction logic
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              After mockup approval, a detailed page flow captured transitions,
              decision logic, scroll vs. fixed regions, and states—not just arrows.
              Figma links let engineers walk the logic without slack threads.
            </p>
          </div>

          <div className="space-y-4">
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

          <div className="space-y-4">
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
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={ASSET("uat-voucher-flow-collage.png")}
                alt="BR31 app: redemption success, promotional voucher, in-store gift, and scannable digital barcode for POS"
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
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

        <CaseStudyInViewSection
          id="final-product"
          className={`space-y-10 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Final product
          </span>
          <h2 className="text-zinc-100">
            The product
          </h2>
          <FinalProductScreens asset={ASSET} groups={FINAL_PRODUCT_GROUPS} />
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

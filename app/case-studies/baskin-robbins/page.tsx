import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyAtAGlance,
  CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS,
} from "../_components/CaseStudyAtAGlance";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { CaseStudyScanSummary } from "../_components/CaseStudyScanSummary";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { WideFigure } from "../e-invoice-app/EInvoiceFigures";
import { AnnotatedFlowSlideshow } from "./AnnotatedFlowSlideshow";
import { AppStoreReviewsSection } from "./AppStoreReviews";
import {
  FinalProductScreens,
  type FinalProductGroup,
} from "./FinalProductScreens";
import { MarketSizingCharts } from "./MarketSizingCharts";
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
    src: ASSET("hero-product-cone.png"),
    alt: "Hand holding a BR31 waffle cone with two scoops and branded pink sleeve",
    width: 767,
    height: 1024,
  },
  {
    src: ASSET("hero-app-barcode-store.png"),
    alt: "In-store context: member app showing carrier barcode at a Baskin-Robbins counter",
    width: 1024,
    height: 571,
  },
  {
    src: ASSET("hero-app-redemption-store.png"),
    alt: "In-store mockup: redemption details screen with BR31 shop in the background",
    width: 1024,
    height: 571,
  },
] as const;

const BASKIN_JOURNEY_IDS = [
  "team-objectives",
  "role-deliverables",
  "project-outcomes",
  "design-process",
  "requirement-interviews",
  "function-difference",
  "visual-style",
  "challenges",
  "learnings",
  "annotations-flow",
  "delivery-kit",
] as const;


/** Taiwan App Store — 31 Club (Baskin-Robbins Taiwan official app) */
const APP_STORE_TW =
  "https://apps.apple.com/tw/app/31%E4%BF%B1%E6%A8%82%E9%83%A8/id6755289789";

/** Design process — Figma (mockups + UI kit handoff) */
const FIGMA_BR31_MOCKUP =
  "https://www.figma.com/design/ejRSIEjZ8FJzpIO6lhveJS/%E3%80%9031%E5%86%B0%E6%B7%87%E6%B7%8B%E3%80%91UI-KIT?node-id=10-2&t=FbCcNsX3Hx6jC4ao-1";
const FIGMA_BR31_UI_KIT =
  "https://www.figma.com/design/BvD4SWAEeHn1mUy8qZPDHM/%E3%80%9031%E5%86%B0%E6%B7%87%E6%B7%8B%E3%80%91App-UI_v02%EF%BC%88%E7%84%A1%E7%94%9C%E8%9C%9C%E5%86%B0%E9%BB%9E%EF%BC%89?node-id=1-10&t=s2SR0r2opMRgk5d0-1";

const ANNOTATED_SLIDES = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: ASSET(`annotated-${String(n).padStart(2, "0")}.png`),
  alt: `Annotated mockup and page-flow reference ${n} of 6`,
}));

/**
 * Final product (`final-screen-01` … `final-screen-20`): each number 1–20 appears
 * exactly once. Order in each `screenNumbers` = display order.
 */
const FINAL_PRODUCT_GROUPS: readonly FinalProductGroup[] = [
  {
    title: "Sign-in & registration",
    description:
      "Account creation and login so members can access points and perks securely, including flows that match Taiwan’s CRM and legal expectations.",
    screenNumbers: [10, 16, 3],
  },
  {
    title: "Member home",
    description:
      "The signed-in dashboard for balance, shortcuts, and at-a-glance status—the surface members return to most often.",
    screenNumbers: [20, 9, 12],
  },
  {
    title: "Products",
    description:
      "Browse cakes, beverages, and product detail—helping members decide what to order with clear imagery and specs.",
    screenNumbers: [19, 14],
  },
  {
    title: "Member zone",
    description:
      "Member-only content and utilities beyond the home hub—profile, perks, and settings tailored to the loyalty program.",
    screenNumbers: [18, 17],
  },
  {
    title: "Vouchers",
    description:
      "Coupons and ticket-style rewards in one place so members can find and use what they’ve earned without digging through email.",
    screenNumbers: [13, 5, 15],
  },
  {
    title: "Transactions & invoice capture",
    description:
      "Order history plus invoice registration—so members can reconcile spend, recover receipts, and keep points accurate.",
    screenNumbers: [7, 2, 11],
  },
  {
    title: "Store locator",
    description:
      "Find nearby shops, hours, and visit-ready info when members are on the go.",
    screenNumbers: [4, 1],
  },
  {
    title: "In-store visits & points",
    description:
      "Flows for earning points when dining in—bridging physical visits with the digital wallet.",
    screenNumbers: [6, 8],
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
    label: "Focus",
    value: "Discovery through handoff · MVP with engineering",
  },
] as const;

const SCAN_SUMMARY_LINES = [
  "Led end-to-end UX/UI for BR31 Taiwan’s first membership app (31 Club), from discovery through developer handoff.",
  "Delivered functional maps, high-fidelity mockups, annotated flows, and a build-ready UI kit aligned with engineering.",
  "Shipped the phase-one MVP on schedule; early Taiwan App Store reviews were five stars.",
  "Collaborated with a PM and four engineers under a tight timeline and real backend constraints.",
] as const;

const sectionScroll =
  "scroll-mt-28 sm:scroll-mt-32";

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

          <div className="mt-8">
            <CaseStudyScanSummary
              items={SCAN_SUMMARY_LINES}
              bulletClassName="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F20C90]"
            />
          </div>

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
          <AppStoreReviewsSection appStoreHref={APP_STORE_TW} />
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
            Japan had a proven loyalty app—Taiwan needed the same muscle, localized
            for mobile-first rewards
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            BR31&apos;s Japan program already drove engagement; Taiwan had no
            dedicated surface—risking the shift to mobile rewards and personalized
            offers. We shipped a membership app aligned with HQ, tuned for how
            people expect to redeem and browse on the phone.
          </p>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            I collaborated directly with Japan HQ stakeholders through online
            meetings, with a Japanese interpreter facilitating communication. I often
            needed to ensure design decisions could be reviewed and approved across
            both markets before development began.
          </p>
          <figure className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <Image
              src={ASSET("japan-hq-cross-market-meeting.png")}
              alt="Video call with Japan HQ and Taiwan stakeholders—cross-market alignment for BR31 membership app"
              width={1024}
              height={644}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
            <figcaption className="border-t border-zinc-800/80 px-4 py-3 text-xs leading-relaxed text-zinc-500 sm:px-5">
              Online working session with Japan HQ and Taiwan—interpreter-supported
              reviews before build.
            </figcaption>
          </figure>
          <div className="space-y-2 pt-2">
            <h5 className="text-zinc-100">
              Stakeholder alignment (Japan HQ · Taiwan)
            </h5>
            <WideFigure
              borderless
              src={ASSET("stakeholder-alignment.png")}
              alt="Stakeholder alignment across Japan HQ and Taiwan"
            />
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
            Points wallet, in-store visit check-in, and digital e-vouchers—one
            membership app so BR31 Taiwan members can earn, redeem, and track perks
            on the phone
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            The shipped MVP centers on a clear points balance, flows for collecting
            stamps when you visit a shop, and ticket-style digital coupons—paired with
            sign-in, catalog, and store locator so the whole loyalty loop stays in
            one place. Visual language stays playful for the brand while patterns stay
            consistent across iOS and Android for handoff and QA.
          </p>
          <FinalProductScreens asset={ASSET} groups={FINAL_PRODUCT_GROUPS} />
        </CaseStudyInViewSection>

        <DesignJourneyCollapsible
          journeySectionIds={BASKIN_JOURNEY_IDS}
          panelId="baskin-design-journey-panel"
        >
        <CaseStudyInViewSection
          id="team-objectives"
          className={`space-y-6 ${sectionScroll}`}
        >
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Team objectives
            </span>
            <h2 className="text-zinc-100">
              Why we built a dedicated membership surface in Taiwan
            </h2>
          </div>
          <MarketSizingCharts />
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Digital loyalty in the category was accelerating; BR31 needed a Taiwan
            app for points, rewards, and redemption in one place—Japan-aligned,
            mobile-native (sizing via{" "}
            <span className="text-zinc-400">Business Wire</span>).
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="role-deliverables"
          className={`space-y-5 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Role &amp; deliverables
          </span>
          <h2 className="text-zinc-100">
            What I owned end-to-end
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            I collaborated with a product manager and four front-end/back-end
            engineers. As the lead designer, I was responsible for the entire UX
            and UI design process—including requirement interviews, user flow
            planning, and final visual design.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="project-outcomes"
          className={`space-y-5 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project outcomes
          </span>
          <h2 className="text-zinc-100">
            First-phase MVP launch
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Within four months, we successfully launched the first-phase MVP in
            September 2025—providing BR31 Ice Cream members in Taiwan with a
            seamless point accumulation and redemption experience.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="design-process"
          className={`space-y-5 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Design process
          </span>
          <h2 className="text-zinc-100">
            A streamlined pipeline under a tight schedule
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Due to the tight schedule, I streamlined the design process while
            ensuring client requirements were met. I started with a Functional Map to
            understand client needs and confirm feature feasibility with backend
            developers. I then moved into Mockups—designing wireframes, defining
            interactions, annotated slices, and preparing a UI Kit. I provided Style
            Proposals for the client to decide on visual style and color usage.
            Finally, I confirmed Page Flow and system logic with the client so
            engineering could build with a shared map of branching and states.
          </p>
          <h5 className="text-zinc-100 pt-2">
            Functional map · Style proposal · Page flow
          </h5>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Functional mapping, directional style boards, and page-flow validation
            were consolidated in Figma before high-fidelity execution (see style
            proposals and annotated flows below).
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={FIGMA_BR31_MOCKUP}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-zinc-600 hover:bg-zinc-900/60"
            >
              <h5 className="text-zinc-100">
                Mockup Figma file
              </h5>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Includes complete high-fidelity page designs and slicing
                instructions for the development team&apos;s reference.
              </p>
              <p className="mt-4 text-xs font-medium text-[#ff5ca8] group-hover:text-[#ff8cc8]">
                Open in Figma ↗
              </p>
            </a>
            <a
              href={FIGMA_BR31_UI_KIT}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-zinc-600 hover:bg-zinc-900/60"
            >
              <h5 className="text-zinc-100">
                UI Kit Figma file
              </h5>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Systematically organized design components, typography, and color
                guidelines to ensure consistency and improve efficiency.
              </p>
              <p className="mt-4 text-xs font-medium text-[#ff5ca8] group-hover:text-[#ff8cc8]">
                Open in Figma ↗
              </p>
            </a>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="requirement-interviews"
          className={`space-y-5 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Requirement interviews
          </span>
          <h2 className="text-zinc-100">
            Functional confirmation before high fidelity
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Ice Cream Taiwan aimed to replicate the Japanese app&apos;s features but,
            due to time and budget constraints, opted for rapid development using
            our standard features. I created a Functional Map integrating backend
            rules and client requirements to clarify the scope.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Through the Functional Map and client discussions, we agreed on minor
            optimizations for the first-phase launch and deferred larger changes to
            the second phase. We also collaborated with engineers to assess
            feasibility and provide timelines for client decisions.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The Functional Map helped identify features as web views or external
            URLs—ensuring client alignment and reducing development errors.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="function-difference"
          className={`space-y-5 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Function difference
          </span>
          <h2 className="text-zinc-100">
            Local rules vs Japan reference
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            31 Ice Cream Taiwan aimed to align with Japan&apos;s membership rules,
            but market differences required adjustments. For example, Japan uses
            &quot;points&quot; for membership levels, while Taiwan relies on
            &quot;spending amounts.&quot; With no initial plan for point redemption in
            Taiwan, we reassessed the points feature and explored a more suitable
            membership mechanism for the local market.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Due to time constraints, I prioritized standard features in style
            proposals and mockups—making minor adjustments only after client
            agreement.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className={`space-y-5 ${sectionScroll}`}>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Cross-market localization
          </span>
          <h2 className="text-zinc-100">
            What did not transfer 1:1 from Japan, and how I adapted it for Taiwan
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            The story is not just "Japan-aligned, Taiwan-local rules." The harder
            work was identifying where proven Japan patterns would break in Taiwan,
            then aligning engineering, PM, and stakeholders on what to ship now
            versus phase later.
          </p>
          <div className="max-w-4xl space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Pattern mismatch → adaptation → rationale
            </p>
            <ul className="space-y-3 text-zinc-300 leading-relaxed">
              <li>
                <span className="font-medium text-zinc-100">
                  Membership logic mismatch:
                </span>{" "}
                Japan&apos;s level system is strongly points-driven, while Taiwan
                membership is spending-driven. I mapped the reward model to local
                spending rules first, then scoped points mechanics as phased
                enhancements.
              </li>
              <li>
                <span className="font-medium text-zinc-100">
                  Redemption expectation mismatch:
                </span>{" "}
                Japan flows assume a mature in-app points redemption habit. Taiwan
                launch constraints and backend readiness meant we had to simplify
                first-release redemption paths to avoid dead-end UX.
              </li>
              <li>
                <span className="font-medium text-zinc-100">
                  Information architecture mismatch:
                </span>{" "}
                Some Japan navigation groupings did not match local promotional and
                campaign behavior. I reorganized functional priorities by local
                decision moments (membership, offers, redemption) instead of
                mirroring labels 1:1.
              </li>
              <li>
                <span className="font-medium text-zinc-100">
                  Delivery reality mismatch:
                </span>{" "}
                Not every localization insight could land in phase one. I worked
                with engineering to define feasible MVP cuts and timeline-safe
                alternatives, then used interpreted stakeholder reviews to secure
                alignment before UI lock.
              </li>
            </ul>
          </div>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            This is the same localization muscle relevant to TikTok UG team
            work—taking a successful core experience and translating it for
            Japan/Korea market behavior, policy constraints, and local user
            expectations without losing delivery speed.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="visual-style"
          className={`space-y-6 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Visual style &amp; UI design
          </span>
          <h2 className="text-zinc-100">
            Three directions for stakeholder selection
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Following competitive analysis, I presented three visual directions so
            stakeholders could compare how each approach would feel on device.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            <span className="text-zinc-200 font-medium">Style B</span>—clean white
            with pink accents—was selected by Japan HQ. It keeps visual
            continuity with the existing Japan BR31 app, which lowers cognitive
            dissonance for cross-market users who already know the brand from
            Japan, while the minimal layout lets promotional content and product
            imagery take center stage instead of competing with UI chrome.
          </p>
          <div className="space-y-4 pt-4">
            <div>
              <h5 className="text-zinc-100">UI foundations (portfolio board)</h5>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                A single overview board for the case study—colors, type scale,
                components, and elevation aligned to the selected minimal + pink
                direction. High-fidelity UI kit and screens live in{" "}
                <a
                  href={FIGMA_BR31_UI_KIT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-violet-300 underline decoration-violet-500/40 underline-offset-2 hover:text-violet-200"
                >
                  Figma (App UI v02)
                </a>
                .
              </p>
            </div>
            <WideFigure
              borderless
              frame="white"
              src={ASSET("styleguide-portfolio-board.png")}
              alt="BR31 membership app UI foundations: color palette, typography samples in Chinese and Latin, primary and secondary buttons, chips, and card elevation examples on a light canvas."
              caption="Portfolio-ready style guide board summarizing the white + pink accent system and core components."
            />
          </div>
          <div className="space-y-3 pt-2">
            <h5 className="text-zinc-100">
              Style proposals (A / B / C)
            </h5>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <WideFigure
                  borderless
                  src={ASSET("style-proposal-a.png")}
                  alt="Style proposal A — sweet and energetic"
                />
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <h5 className="text-zinc-100">
                    Style A · Sweet &amp; energetic
                  </h5>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    Focused on 31 Ice Cream&apos;s signature pink—creating a lively,
                    youthful vibe for users who love vibrant colors, conveying joy
                    and enthusiasm.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <WideFigure
                  borderless
                  src={ASSET("style-proposal-b.png")}
                  alt="Style proposal — gradient and premium (Style C)"
                />
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <h5 className="text-zinc-100">
                    Style C · Gradient &amp; premium
                  </h5>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    Used gradient effects to enhance sophistication—adding depth and
                    modern design elements to reflect a premium and innovative brand
                    image.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <WideFigure
                  borderless
                  src={ASSET("style-proposal-c.png")}
                  alt="Style proposal — minimal and fresh (Style B)"
                />
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                  <h5 className="text-zinc-100">
                    Style B · Minimal &amp; fresh
                  </h5>
                  <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    Primarily white with pink accents—offering a clean and refreshing
                    style similar to Japan&apos;s 31 app, ideal for users seeking
                    simplicity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="challenges"
          className={`space-y-5 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Challenges
          </span>
          <h2 className="text-zinc-100">
            What made the timeline difficult
          </h2>
          <ul className="list-disc pl-5 space-y-3 text-zinc-300 leading-relaxed marker:text-zinc-500">
            <li>
              Page designs prioritized client needs and existing technical
              constraints due to tight timelines.
            </li>
            <li>
              Explored cost-effective solutions that addressed user pain points
              while still meeting business objectives.
            </li>
            <li>
              Balancing user-focused design goals with engineers&apos; priority to
              minimize system changes required ongoing compromise.
            </li>
            <li>
              The outdated membership system limited opportunities to improve user
              experience.
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="learnings"
          className={`space-y-5 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Learnings
          </span>
          <h2 className="text-zinc-100">
            What I took forward
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            I learned to distinguish which UX improvements required backend support
            versus which could be achieved through front-end adjustments. I
            collaborated closely with the backend PM to understand CRM
            capabilities, API usage, and available data—and developed a stronger
            sense of when to advocate for UX and when to adapt to technical
            feasibility.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="annotations-flow"
          className={`space-y-6 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Annotations &amp; page flow
          </span>
          <h2 className="text-zinc-100">
            Developer handoff without guesswork
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            To ensure smooth developer handoff, I provided comprehensive page
            annotations and slicing instructions alongside the page designs. These
            annotations clarify elements like scrollable and non-scrollable areas,
            and provide essential information on dimensions, constraints, and
            spacing that require particular attention.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Once mockups were approved by the client, I used a Page Flow to clearly
            define page-to-page interactions and the system&apos;s decision-making
            logic. Beyond using arrows for the flow, I provided detailed annotations
            so the development team fully comprehended the design guidelines and
            interaction behaviors. To streamline access, I used Figma&apos;s linking
            feature to cross-reference relevant explanations—enabling developers to
            quickly understand the design.
          </p>
          <div className="space-y-3 pt-2">
            <h5 className="text-zinc-100">
              Annotated mockups · Page flow
            </h5>
            <AnnotatedFlowSlideshow items={ANNOTATED_SLIDES} />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="delivery-kit"
          className={`space-y-6 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Delivery
          </span>
          <h2 className="text-zinc-100">
            UI kit, typography, color, and components
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I created a UI Kit that systematically organizes core design
            specifications—including Main Components, Colors, Typography, and
            Icons. This setup allows the development team to directly export and use
            these assets—ensuring design consistency and boosting development
            efficiency.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Given the need to support both iOS and Android platforms, the app&apos;s
            design was initially developed for iOS using the PingFang TC typeface.
            For Android, Roboto is the chosen font.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            The palette combines BR31&apos;s signature pink and blue with neutral
            tones to balance playfulness and readability. Primary colors highlight
            key actions, while secondary tones support visual hierarchy.
          </p>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            A modular system of buttons, cards, navigation, and input fields was
            built for cross-platform consistency—scalable for future features and
            aligned with BR31&apos;s brand identity.
          </p>
          <div className="space-y-3 pt-2">
            <h5 className="text-zinc-100">
              UI kit · Components
            </h5>
            <div className="flex w-full max-w-3xl flex-col gap-10">
              <WideFigure
                borderless
                src={ASSET("ui-kit-01.png")}
                alt="UI kit — components overview 1 of 3"
              />
              <WideFigure
                borderless
                src={ASSET("ui-kit-02.png")}
                alt="UI kit — components overview 2 of 3"
              />
              <WideFigure
                borderless
                src={ASSET("ui-kit-03.png")}
                alt="UI kit — components overview 3 of 3"
              />
            </div>
          </div>
        </CaseStudyInViewSection>
        </DesignJourneyCollapsible>

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

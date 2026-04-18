import Image from "next/image";
import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
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
  title: "Baskin-Robbins Taiwan Membership App | Angela Yang",
  description:
    "Lead UX/UI for BR31 Taiwan’s first membership app: team objectives, functional map, style proposals, MVP delivery, and build-ready UI kit and handoff.",
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
  "design-process",
  "requirement-interviews",
  "function-difference",
  "visual-style",
  "challenges",
  "learnings",
  "annotations-flow",
  "delivery-kit",
] as const;


/** Taiwan App Store — 31俱樂部 (Baskin-Robbins Taiwan official app) */
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
  { label: "Timeline", value: "Dec 2024 – Mar 2025" },
  { label: "Role", value: "Lead UX/UI Designer" },
  { label: "Project type", value: "Mobile app" },
  {
    label: "Focus",
    value: "Client-driven end-to-end product design",
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

const BASKIN_TOC = [
  { id: "project-background", label: "Background" },
  { id: "team-objectives", label: "Team objectives" },
  { id: "role-deliverables", label: "Role & deliverables" },
  { id: "project-outcomes", label: "Project outcomes" },
  { id: "final-product", label: "Final product" },
  { id: "design-journey", label: "Design journey" },
  { id: "design-process", label: "Design process" },
  { id: "requirement-interviews", label: "Requirement interviews" },
  { id: "function-difference", label: "Functional map" },
  { id: "visual-style", label: "Visual style" },
  { id: "challenges", label: "Challenges" },
  { id: "learnings", label: "Learnings" },
  { id: "annotations-flow", label: "Annotated flow" },
  { id: "delivery-kit", label: "Delivery kit" },
] as const;

export default function BaskinRobbinsCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6">
            <span>Case Study</span>
            <span className="text-zinc-600">·</span>
            <span>Mobile · Loyalty</span>
            <span className="text-zinc-600">·</span>
            <span>Zero-to-one</span>
          </div>
          <h1 className="max-w-3xl">
            Baskin-Robbins Taiwan&apos;s first membership app
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            Taiwan&apos;s loyalty market was growing fast while BR31 still had no
            native app—I led end-to-end UX/UI for 31 Club, shipped the phase-one MVP
            on schedule, and early reviews on the Taiwan App Store came in at five
            stars.
          </p>

          <BaskinHeroShowcase
            primary={HERO_MEMBERSHIP}
            secondary={HERO_DEMO_IMAGES}
          />

          <div className="mt-8">
            <CaseStudyAtAGlance items={AT_A_GLANCE_ITEMS} accent="baskin" />
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Impact summary
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:max-w-2xl">
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Launched
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Phase-one MVP · Sept 2025
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  App Store (Taiwan)
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  5★ user reviews at launch
                </p>
              </div>
            </div>
          </div>

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
        </div>
      </header>

      <CaseStudyContentLayout toc={BASKIN_TOC}>
        <section
          id="project-background"
          className={`space-y-6 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Project background
          </span>
          <h2 className="text-zinc-100">
            From Japan&apos;s proven program to Taiwan&apos;s gap
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            BR31 Ice Cream, known for its 31 playful flavors, had already built a
            strong digital-first membership program in Japan that kept fans
            engaged with rewards and exclusives. In Taiwan, however, the brand
            lacked a dedicated loyalty experience—leaving customers with fewer ways
            to connect and putting the company at risk of falling behind
            competitors with established platforms. Taiwanese consumers, who were
            increasingly drawn to mobile-first rewards and personalized offers,
            needed a smoother way to engage with the brand. Our project set out to
            change that by designing and developing a dedicated membership
            app—bringing the proven success of Japan&apos;s model to Taiwan while
            tailoring the experience to local users.
          </p>
          <p className="text-zinc-200 font-medium text-lg max-w-3xl pt-2">
            The goal was simple yet powerful: transform casual customers into loyal
            fans by offering them a fun, seamless, and rewarding digital journey
            with every scoop.
          </p>
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
        </section>

        <section
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
            The category was scaling fast—and BR31 still had no dedicated app,
            which meant risking absence during a critical growth window for digital
            loyalty (market sizing via{" "}
            <span className="text-zinc-400">Business Wire</span>).
          </p>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Our objective was to create that surface: a membership app for BR31
            Ice Cream in Taiwan so consumers could access points, rewards, and
            redemption in one place—aligned with the 31 Ice Cream membership
            experience in Japan, but built for how people expect to engage on
            mobile in Taiwan.
          </p>
        </section>

        <section
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
        </section>

        <section
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
        </section>

        <section
          id="final-product"
          className={`space-y-10 ${sectionScroll}`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Final product
          </span>
          <h2 className="text-zinc-100">
            What members experience on device
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            The final app delivers a seamless membership experience—enabling BR31
            Taiwan users to easily accumulate points, redeem rewards, and enjoy
            personalized offers. The design balances brand playfulness with
            usability—ensuring consistency across iOS and Android while meeting both
            client and user needs.
          </p>
          <FinalProductScreens asset={ASSET} groups={FINAL_PRODUCT_GROUPS} />
        </section>

        <DesignJourneyCollapsible
          journeySectionIds={BASKIN_JOURNEY_IDS}
          panelId="baskin-design-journey-panel"
        >
        <section
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
        </section>

        <section
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
        </section>

        <section
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
        </section>

        <section
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
        </section>

        <section
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
        </section>

        <section
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
        </section>

        <section
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
        </section>

        <section
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
        </section>
        </DesignJourneyCollapsible>

        <section className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="baskin-robbins" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to work
          </Link>
        </section>
      </CaseStudyContentLayout>
    </article>
  );
}

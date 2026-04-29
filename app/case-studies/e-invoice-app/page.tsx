import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CaseStudyAtAGlance,
  CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS,
} from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyExpandable } from "../_components/CaseStudyExpandable";
import { CaseStudyHeroFullBleed } from "../_components/CaseStudyHeroFullBleed";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { CompetitorLandscapeTable } from "./CompetitorLandscapeTable";
import { EInvoiceHeroTldr } from "./EInvoiceHeroTldr";
import { FinalScreensMarquee } from "./FinalScreensMarquee";
import { PortraitTile, WideFigure } from "./EInvoiceFigures";
import { HomeBeforeAfterSlider } from "./HomeBeforeAfterSlider";
import { GuidedOnboardingVideoPair } from "./OnboardingDemoVideo";
import { SettingHomeModulesVideo } from "./SettingHomeModulesVideo";
import { LoginBeforeAfterSlider } from "./LoginBeforeAfterSlider";
import { ProblemPersonasBlock } from "./ProblemPersonasBlock";

export const metadata = {
  title:
    "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App | Angela Yang",
  description:
    "Government mobile app used by ~20 million people: trust & inclusion at national scale—multi-segment research (age, language, accessibility), competitive benchmarking, IA, ~88% prototype task success, measurable lifts in activation (onboarding) and retention (login success).",
};

const FIGMA_MOCKUP_PAGE =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=2103-5106&t=Ynz1CgBhJkN04Gfz-1";
const FIGMA_WIREFRAME_FLOW =
  "https://www.figma.com/design/ixS4TwNUz1pu0Riv7peXRA/APP-Wireframe?node-id=2120-5665&t=j3rbIoMCpkpNcAY2-1";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

const STORY_SECTION_TITLE_CLASS =
  "text-2xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-3xl md:text-4xl md:leading-snug";

const STORY_BEAT_PALETTE: Record<
  string,
  { tagBg: string; tagFg: string; dot: string }
> = {
  problem: { tagBg: "#FCEBEB", tagFg: "#A32D2D", dot: "#A32D2D" },
  "key insight": { tagBg: "#E6F1FB", tagFg: "#185FA5", dot: "#185FA5" },
  decision: { tagBg: "#E1F5EE", tagFg: "#0F6E56", dot: "#0F6E56" },
  conflict: { tagBg: "#FAEEDA", tagFg: "#854F0B", dot: "#854F0B" },
  resolution: { tagBg: "#EEEDFE", tagFg: "#534AB7", dot: "#534AB7" },
  outcome: { tagBg: "#EAF3DE", tagFg: "#3B6D11", dot: "#3B6D11" },
};

function storyBeatColors(label: string) {
  return STORY_BEAT_PALETTE[label.toLowerCase()] ?? STORY_BEAT_PALETTE.problem;
}

/** Solid #RRGGBB → rgba with alpha (e.g. 0.8 for 80% tag fill opacity). */
function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) return hex;
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function StoryBeatTimeline({
  children,
  className = "max-w-3xl",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative min-w-0 ${className}`.trim()}>
      <div
        className="absolute bottom-3 left-[15px] top-3 w-px bg-zinc-600/80"
        aria-hidden
      />
      <div className="relative flex flex-col gap-4">{children}</div>
    </div>
  );
}

function StoryBeat({
  label,
  headline,
  detail,
  largeHeadline = false,
}: {
  label: string;
  headline: ReactNode;
  detail: ReactNode;
  /** Larger headline typography (e.g. Section 1 dual narratives). */
  largeHeadline?: boolean;
}) {
  const colors = storyBeatColors(label);
  const kind = label.toLowerCase();
  const isConflict = kind === "conflict";
  const isOutcome = kind === "outcome";

  const cardClass = isOutcome
    ? "rounded-xl border border-zinc-600/80 border-l-[3px] border-l-emerald-500/85 bg-zinc-900/80 px-4 py-4 shadow-sm sm:px-5 sm:py-5"
    : isConflict
      ? "rounded-r-xl rounded-l-none border border-t border-r border-b border-zinc-700/80 border-l-[3px] border-l-[#EF9F27] bg-zinc-900/40 px-4 py-4 sm:px-5 sm:py-5"
      : "rounded-r-xl rounded-l-md border border-t border-r border-b border-zinc-700/80 border-l-transparent bg-zinc-900/40 px-4 py-4 sm:px-5 sm:py-5";

  const headlineClass = isOutcome
    ? largeHeadline
      ? "text-xl font-semibold leading-snug text-zinc-100 sm:text-2xl md:text-[1.7rem] md:leading-snug"
      : "text-base font-semibold leading-snug text-zinc-100 sm:text-lg md:text-xl"
    : largeHeadline
      ? "text-xl font-semibold leading-snug tracking-tight text-zinc-50 sm:text-2xl md:text-[1.75rem] md:leading-snug lg:text-[1.9rem]"
      : "text-lg font-semibold leading-snug text-zinc-50 sm:text-xl md:text-2xl";

  const detailClass = isOutcome
    ? "mt-1 text-[13px] font-normal leading-relaxed text-zinc-400 sm:text-sm"
    : largeHeadline
      ? "mt-2 text-sm font-normal leading-relaxed text-zinc-400 sm:text-[0.9375rem]"
      : "mt-2 text-sm font-normal leading-relaxed text-zinc-400 sm:text-[0.9375rem]";

  return (
    <div className={isConflict ? "relative my-2 pl-10" : "relative pl-10"}>
      <span
        className={
          isOutcome
            ? "absolute left-[15px] top-[1.35rem] z-[1] h-2 w-2 -translate-x-1/2 rounded-full ring-2 ring-emerald-500/35"
            : "absolute left-[15px] top-[1.35rem] z-[1] h-2 w-2 -translate-x-1/2 rounded-full ring-2 ring-zinc-950"
        }
        style={{ backgroundColor: colors.dot }}
        aria-hidden
      />
      <div className={cardClass}>
        <span
          className={
            isOutcome
              ? "inline-flex rounded-full border border-emerald-500/80 bg-emerald-500/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-50"
              : "inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
          }
          style={
            isOutcome
              ? undefined
              : {
                  backgroundColor: hexToRgba(colors.tagBg, 0.8),
                  color: colors.tagFg,
                }
          }
        >
          {label}
        </span>
        <p className={`${headlineClass} mt-3`}>{headline}</p>
        <div className={detailClass}>{detail}</div>
      </div>
    </div>
  );
}

/** Full-width outcome callout: no timeline rail (Section 1). Dark surface, accent rail—no mint fill. */
function StoryOutcomeCallout({
  headline,
  detail,
}: {
  headline: ReactNode;
  detail: ReactNode;
}) {
  return (
    <div className="mt-8 max-w-4xl rounded-2xl border border-zinc-700/85 border-l-[4px] border-l-emerald-500/90 bg-zinc-900/80 px-6 py-7 sm:px-8 sm:py-9">
      <span className="inline-flex rounded-full border border-emerald-500/80 bg-emerald-500/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-50">
        Outcome
      </span>
      <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-3xl md:text-[1.85rem] md:leading-snug">
        {headline}
      </p>
      <p className="mt-3 max-w-3xl text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
        {detail}
      </p>
    </div>
  );
}

/** Full-bleed hero behind the project title (café context, scan / invoice UI). */
const HERO_FULL_BLEED = {
  src: "/case-studies/e-invoice/hero-fullbleed.png",
  alt: "Hand holding a phone in a bright café: e-invoice app shows paper receipt scanning with QR codes and tab navigation",
} as const;

/** First image below the title block — paper receipts + phone. */
const HERO_BELOW_01 = {
  src: "/case-studies/e-invoice/hero-below-01.png",
  alt: "Hands holding Taiwan uniform paper invoices beside a phone displaying the scanned digital receipt in the e-invoice app",
} as const;

/** Second image below the title block — lifestyle product context. */
const HERO_BELOW_02 = {
  src: "/case-studies/e-invoice/hero-below-02.png",
  alt: "Person using the e-invoice mobile app: lottery and carrier barcode screen in a warm indoor setting",
} as const;

const HERO_TABLET_01 = {
  src: "/case-studies/e-invoice/hero-tablet-01.png",
  alt: "iPad mockup showing the e-invoice home interface on a textured cushion shelf",
} as const;

const HERO_TABLET_02 = {
  src: "/case-studies/e-invoice/hero-tablet-02.png",
  alt: "iPad mockup showing the e-invoice home interface on fabric near a wooden surface",
} as const;

/** Friendly lifestyle palette (style direction 01) */
const STYLE_SWATCHES: { hex: string; name: string }[] = [
  { hex: "#25244A", name: "Deep navy" },
  { hex: "#51B0A9", name: "Teal" },
  { hex: "#A089FD", name: "Lavender" },
  { hex: "#E57651", name: "Coral" },
  { hex: "#F8D364", name: "Warm yellow" },
];

const M_TXT =
  "rounded-md bg-emerald-500/20 px-1.5 py-0.5 font-semibold tabular-nums text-emerald-200";
const M_TIME =
  "rounded-md bg-amber-500/15 px-1.5 py-0.5 font-medium tabular-nums text-amber-100/95";

const E_INVOICE_JOURNEY_IDS = [
  "functional-map",
  "competitive-landscape",
  "page-flow-design",
  "testing",
] as const;

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "Feb 2025 – Nov 2025 (10 months)" },
  { label: "Role", value: "UX/UI Designer" },
  {
    label: "Project type",
    value: "End-to-end mobile app redesign · Government service app",
  },
  {
    label: "Focus",
    value: "Research, IA, accessibility, ship-ready UI",
  },
] as const;

const FINAL_SOLUTION_SCREENS: {
  id: string;
  title: string;
  assetFile?: string;
  assetFiles?: string[];
}[] = [
  { id: "01", title: "Spending insights" },
  { id: "02", title: "Membership cards" },
  {
    id: "03",
    title: "Settings overview",
    assetFiles: [
      "settings-homepage-display.png",
      "settings-membership-card.png",
    ],
  },
  { id: "05", title: "Prize claim info" },
  { id: "06", title: "Donation" },
  { id: "07", title: "Carbon passbook share" },
  {
    id: "08",
    title: "Guided setup (biometrics, bank, notifications, cloud backup)",
    assetFiles: [
      "onboarding-notifications.png",
      "onboarding-quick-login.png",
      "onboarding-google-drive.png",
      "onboarding-auto-remittance.png",
    ],
  },
  { id: "09", title: "Redeem security check" },
  { id: "10", title: "Invoice passbook" },
  { id: "11", title: "Receipt detail" },
  { id: "12", title: "Homepage", assetFile: "homepage-hub.png" },
  {
    id: "13",
    title: "Face ID / quick verification",
    assetFile: "face-id-quick-verification.png",
  },
  { id: "14", title: "Last-three-digit match" },
  { id: "15", title: "Events & promos" },
  { id: "16", title: "Winning invoices" },
  { id: "17", title: "Paper receipt scan" },
  { id: "18", title: "Notifications" },
];

const FINAL_SOLUTION_MARQUEE_SLIDES = FINAL_SOLUTION_SCREENS.flatMap((item) => {
  const files =
    item.assetFiles ?? [item.assetFile ?? `solution-final-${item.id}.png`];
  return files.map((file, i) => ({
    src: ASSET(file),
    alt:
      files.length > 1
        ? `${item.title} (${i + 1}/${files.length})`
        : item.title,
  }));
});

export default function EInvoiceCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <CaseStudyHeroFullBleed
          imageSrc={HERO_FULL_BLEED.src}
          imageAlt={HERO_FULL_BLEED.alt}
          imageClassName="object-cover object-center sm:object-[center_45%]"
          eyebrow={
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-white/75">
              <span>Public Service</span>
              <span className="text-white/45">·</span>
              <span>Mobile App</span>
            </div>
          }
          title={
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Redesigning a government service used by 20 million people
            </h1>
          }
          subtitle={
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">
              Designing for radical user diversity across age, language, and
              accessibility at national scale.
            </p>
          }
          leadBelowSubtitle={
            <div className="space-y-6">
              <CaseStudyAtAGlance
                items={AT_A_GLANCE_ITEMS}
                {...CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS}
                noAccentGridClassName="grid w-full min-w-0 grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 [&>div]:min-w-0"
              />
              <div className="max-w-3xl">
                <Link
                  href="/user-research-journey"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-base font-semibold text-zinc-950 shadow-[0_12px_40px_-12px_rgba(52,211,153,0.55)] ring-1 ring-white/15 transition hover:bg-emerald-300 hover:shadow-[0_14px_44px_-12px_rgba(52,211,153,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                >
                  View full research journey
                  <span aria-hidden className="text-lg leading-none">
                    →
                  </span>
                </Link>
              </div>
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={HERO_BELOW_01.src}
                alt={HERO_BELOW_01.alt}
                width={1024}
                height={571}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src={HERO_BELOW_02.src}
                alt={HERO_BELOW_02.alt}
                width={1024}
                height={552}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={HERO_TABLET_01.src}
                  alt={HERO_TABLET_01.alt}
                  fill
                  className="object-cover object-center scale-[1.08]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={HERO_TABLET_02.src}
                  alt={HERO_TABLET_02.alt}
                  fill
                  className="object-cover object-center scale-[1.08]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <EInvoiceHeroTldr />
          </div>
        </CaseStudyHeroFullBleed>
      </header>

      <CaseStudyContentLayout>
        <ProblemPersonasBlock />

        <CaseStudyInViewSection
          id="key-outcomes"
          className="scroll-mt-28 space-y-14 sm:scroll-mt-32"
        >
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
              Opportunity
            </span>
            <h2 className="max-w-3xl text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl md:text-[1.65rem] md:leading-snug">
              A national lottery app had to work for radically different ages,
              languages, and abilities—without trading off public trust.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              The redesign paired multi-segment research with ship-ready IA and UI:
              scan-first home, inclusive density, authentication people could recover
              from, and onboarding that surfaced automation before users hit
              redemption friction.
            </p>
          </div>

          <FinalScreensMarquee slides={FINAL_SOLUTION_MARQUEE_SLIDES} />

          <div className="space-y-16 border-t border-zinc-800/90 pt-14 sm:space-y-20 sm:pt-16">
            <section
              id="e-invoice-story-1-homepage"
              className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 1
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>The Homepage</h2>
              </header>
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                <StoryBeatTimeline className="max-w-none">
                  <StoryBeat
                    label="Problem"
                    headline="Users opened the app and couldn&apos;t find what they needed."
                    detail="Five very different user segments, all frustrated for different reasons."
                    largeHeadline
                  />
                  <StoryBeat
                    label="Key insight"
                    headline="Every group shared one first action: scan a paper invoice."
                    detail="Seniors especially have a lot of paper invoices to scan. At checkout, cashiers assumed elderly don&apos;t use the e-invoice app and handed them paper receipts instead."
                    largeHeadline
                  />
                  <StoryBeat
                    label="Decision"
                    headline="Scan became the primary, large, labeled CTA—the first thing on open."
                    detail="Before: small QR icon, top-right. After: unmissable."
                    largeHeadline
                  />
                </StoryBeatTimeline>
                <StoryBeatTimeline className="max-w-none">
                  <StoryBeat
                    label="Problem"
                    headline="Low-vision users and foreign residents couldn&apos;t finish core tasks alone."
                    detail="Icons were unreadable, labels assumed civic vocabulary, and there was no audio confirmation after scan."
                    largeHeadline
                  />
                  <StoryBeat
                    label="Key insight"
                    headline="Foreign residents needed text to decode the control—not icon-only cues."
                    detail="Low-vision users relied on a fixed position they could memorize more than on fine visuals."
                    largeHeadline
                  />
                  <StoryBeat
                    label="Decision"
                    headline="Large tap target + readable text label + fixed placement."
                    detail="One pattern served both groups—including labels that don&apos;t assume Chinese literacy."
                    largeHeadline
                  />
                </StoryBeatTimeline>
              </div>
              <StoryOutcomeCallout
                headline="Prototype testing with the same participants validated the scan-first, inclusive home direction."
                detail="Strong positive responses across ages—especially seniors."
              />
              <HomeBeforeAfterSlider />
            </section>

            <section
              id="e-invoice-story-2-accessibility"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800/90 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 2
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>
                  Pushback with external stakeholders: promo-first vs. what users
                  actually open the app for
                </h2>
              </header>
              <StoryBeatTimeline className="max-w-none">
                <StoryBeat
                  label="Problem"
                  headline="Partners wanted the sustainability outreach zone to dominate on open. Interview evidence ranked a different set of jobs first."
                  detail={
                    <>
                      <span className="block">
                        Government partners cared deeply about low-carbon messaging and
                        wanted the sustainability promotion area to lead the home screen.
                      </span>
                      <span className="mt-3 block">
                        What showed up consistently in interviews was a shared priority
                        order: a prominent{" "}
                        <span className="text-zinc-200">scan paper invoice</span>{" "}
                        action first; then the{" "}
                        <span className="text-zinc-200">in-app carrier barcode</span>{" "}
                        for people who don&apos;t use iPhone or Android home-screen
                        widgets and need to show the code as soon as they open the app;
                        then{" "}
                        <span className="text-zinc-200">
                          not missing prize / lottery information
                        </span>{" "}
                        for younger and middle-aged users; then{" "}
                        <span className="text-zinc-200">spending analysis</span> for
                        younger users—often richer here than in standalone budgeting
                        apps. The outreach zone wasn&apos;t among the top reasons people
                        launched the app.{" "}
                        <span className="text-zinc-200">Prototype testing</span> fed back
                        the same story.
                      </span>
                    </>
                  }
                  largeHeadline
                />
                <StoryBeat
                  label="Key insight"
                  headline="Same home layout, two incompatible defaults across age."
                  detail="Older and low-vision groups wanted fewer modules, more whitespace, and strong color for quick recognition. Younger groups wanted a denser dashboard—more modules, promos, and shortcuts—and a cooler, minimal palette."
                  largeHeadline
                />
                <StoryBeat
                  label="Conflict"
                  headline="I brought interview and prototype evidence into government stakeholder meetings to challenge a promo-first default."
                  detail="I understood their need to surface carbon-reduction messaging and policy outreach—but the data said job-first ordering had to win the first screen. That was the argument I used in the room."
                  largeHeadline
                />
                <StoryBeat
                  label="Resolution"
                  headline="A customizable home: section visibility toggles in Settings."
                  detail="Users can turn individual home sections on or off—for example, someone who only wants the scan control and the sustainability outreach block can hide the rest, so the promo block still gets the space they care about without forcing that default on everyone. Partners accepted the model."
                  largeHeadline
                />
              </StoryBeatTimeline>
              <StoryOutcomeCallout
                headline="The priority story held in testing; moderated sessions reached 88% task success."
                detail="Across scan, donate, and redemption—including visually impaired participants and mixed ages."
              />
              <SettingHomeModulesVideo className="w-full" />
            </section>

            <section
              id="e-invoice-story-3-login"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800/90 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 3
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>
                  Login &amp; authentication
                </h2>
              </header>
              <StoryBeatTimeline>
                <StoryBeat
                  label="Problem"
                  headline="Authentication was secure, but middle-aged and senior users kept forgetting their passwords."
                  detail="Login success hovered around ~68%. MoF verification codes and recovery friction blocked them before any core task."
                  largeHeadline
                />
                <StoryBeat
                  label="Decision"
                  headline="Ship biometric login and in-app password recovery."
                  detail="People could get back in without memorizing credentials or hunting a one-time code."
                  largeHeadline
                />
                <StoryBeat
                  label="Outcome"
                  headline="After launch, the client reported materially higher login success in internal analytics."
                  detail="Support volume tied to account access fell compared with baseline."
                  largeHeadline
                />
              </StoryBeatTimeline>
              <LoginBeforeAfterSlider />
            </section>

            <section
              id="e-invoice-story-4-onboarding"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800/90 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Section 4
                </span>
                <h2 className={STORY_SECTION_TITLE_CLASS}>Onboarding</h2>
              </header>
              <StoryBeatTimeline className="max-w-none">
                <StoryBeat
                  label="Problem"
                  headline="Jackpot wins go unclaimed at startling rates—and cloud setup gaps are a major driver."
                  detail={
                    <>
                      <span className="block">
                        Recent Ministry of Finance figures put the unclaimed share of
                        the largest prizes at roughly{" "}
                        <span className="text-zinc-200">one in four</span>—so about a
                        quarter of “millionaire” wins never get redeemed.
                      </span>
                      <span className="mt-3 block">
                        From 2011 through end of 2025 the government issued{" "}
                        <span className="text-zinc-200">1,250</span> NT$10M special
                        prizes;{" "}
                        <span className="text-zinc-200">946</span> were claimed and{" "}
                        <span className="text-zinc-200">304</span> expired. People
                        forgot to check tickets, or used cloud invoices without an
                        auto prize-transfer account linked and missed win
                        notifications—exactly the flows onboarding needed to fix.
                      </span>
                      <span className="mt-3 block">
                        Many users—especially seniors and foreign residents—never
                        finished auto prize transfer or biometric setup because they
                        didn&apos;t know the features existed or how to turn them on.
                      </span>
                    </>
                  }
                  largeHeadline
                />
                <StoryBeat
                  label="Decision"
                  headline="Guided onboarding: one job per screen."
                  detail="Biometric setup → bank account for auto-transfer → notifications → cloud backup—each step explained why it mattered, not only what to tap. I also shipped an English-language experience for foreign residents."
                  largeHeadline
                />
              </StoryBeatTimeline>
              <StoryOutcomeCallout
                headline="One month post-launch, client-reported missed redemptions tied to setup and notification gaps fell ~26% versus the pre-ship baseline."
                detail="Composite internal read (not a published MoF statistic)—aligned with clearer deadlines, status, and alerts from guided first launch."
              />
              <GuidedOnboardingVideoPair className="w-full" />
            </section>
          </div>
        </CaseStudyInViewSection>

        <div className="flex min-w-0 flex-col gap-10 sm:gap-12">
          <DesignJourneyCollapsible
          journeySectionIds={E_INVOICE_JOURNEY_IDS}
          panelId="e-invoice-design-journey-panel"
          title="Design journey"
          subtitle="Functional map, competitive landscape, page flows, and moderated testing"
          className="!border-t-0 !pt-0 sm:!pt-0"
        >
        <CaseStudyInViewSection
          id="functional-map"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Functional map
          </span>
          <h2 className="max-w-3xl text-zinc-100">
            We mapped actors and touchpoints—login, home, notifications,
            scan-and-win, redemptions—before hi-fi so scope stayed technically
            plausible.
          </h2>
          <WideFigure
            borderless
            src={ASSET("functional-map-v0.png")}
            alt="Functional map v0.0 — information architecture of the e-invoice app"
            caption="Functional map v0.0 · Functional_map_v0.0 (export)."
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="competitive-landscape"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            03 · Competitive landscape
          </span>
          <div className="max-w-3xl space-y-3">
            <h2 className="text-zinc-100">
              Market read before locking IA—not competitor slides after the
              solution
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              Based on the visual strategy report, we benchmarked references
              against three filters before finalizing direction: whether the
              product felt{" "}
              <span className="text-zinc-200">
                intuitive, simple, clean, and modern
              </span>
              ; whether its interaction patterns aligned with usability
              heuristics; and whether design elements (whitespace, contrast,
              card hierarchy, button shape) could directly address real pain in
              this project.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              That benchmark informed what &quot;good&quot; meant for this MoF app:
              policy-trust as a baseline, but with faster recognition, clearer
              hierarchy, and accessibility-friendly density. The same source work
              also clarified three candidate visual routes for the next phase—{" "}
              <span className="text-zinc-200">Friendly lifestyle</span>,{" "}
              <span className="text-zinc-200">Modern minimal</span>, and{" "}
              <span className="text-zinc-200">Professional practical</span>.
            </p>
          </div>
          <CompetitorLandscapeTable />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="page-flow-design"
          className="scroll-mt-28 space-y-12 sm:scroll-mt-32"
        >
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              04 · Page flow, UI direction &amp; design system
            </span>
            <h2 className="max-w-3xl text-zinc-100">
              Figma page flows caught navigation gaps early;{" "}
              <span className="text-zinc-200">Friendly lifestyle</span> became the
              approved route after comparing three style proposals.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              We first translated research keywords into interface variables
              (color system, typography scale, button geometry, icon language,
              layout rhythm), then tested three directions from the report:
              multi-color function zoning (friendly lifestyle), black-led
              reduction (modern minimal), and trust-forward stability
              (professional practical). Login, invoice management, and redemption
              were mapped before polish so gaps showed up in logic—not only in
              pixels.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="min-w-0 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400/90">
                Concept development
              </p>
                           <h3 className="text-zinc-100">
                Moodboard &amp; style directions · 01 Friendly lifestyle
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                The approved route stayed closest to daily behavior: a
                multi-color system where{" "}
                <span className="text-zinc-200">hue signals function</span>, larger
                readable type, and rounded cards/buttons that lower intimidation
                for mixed-skill users. This matched interview keywords
                (intuitive, simple, clean) while keeping public-service trust.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Compared with modern minimal and professional practical, this
                direction best balanced recognition speed for silver users and
                visual clarity for younger users. It improved scan-findability,
                hierarchy legibility, and one-handed task completion in
                real-world contexts (checkout lines, transit, crowded retail).
              </p>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Palette
                </p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {STYLE_SWATCHES.map((s) => (
                    <li
                      key={s.hex}
                      className="flex flex-col items-center gap-1.5 text-center"
                    >
                      <span
                        className="h-11 w-11 rounded-xl shadow-md ring-1 ring-white/10 sm:h-12 sm:w-12"
                        style={{ backgroundColor: s.hex }}
                        title={s.hex}
                      />
                      <span className="max-w-[5.5rem] text-[10px] leading-tight text-zinc-500">
                        {s.name}
                        <span className="block font-mono text-zinc-400">{s.hex}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Vibrant", "Life", "Fun"].map((word) => (
                  <span
                    key={word}
                    className="rounded-full border border-zinc-700/80 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="min-w-0 lg:sticky lg:top-24">
              <WideFigure
                borderless
                src={ASSET("moodboard-lifestyle-hero.png")}
                alt="Person using a phone outdoors in an urban setting, sunny lifestyle context"
              />
            </div>
          </div>

          <div className="max-w-3xl space-y-4 pt-2">
                         <h3 className="text-zinc-100">
              Mockups &amp; design system
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              High-fidelity work used the iOS / iPadOS UI Kit as a baseline—native
              components, predictable spacing, and patterns that engineering could map
              quickly to production constraints.
            </p>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="testing"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              05 · Testing &amp; iterations · Accessibility in the protocol
            </span>
            <h2 className="max-w-3xl text-zinc-100">
              Twelve moderated sessions—including low-vision users—landed at{" "}
              <span className={M_TXT}>88%</span> success and a clear fix list for login,
              invoice management, and prize flows.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              One-on-one observation on core tasks; errors and satisfaction tracked so
              VoiceOver paths, visual hierarchy, and plain-language fixes could ship
              before launch—not relegated to a late &quot;a11y pass.&quot;
            </p>
            <h6 className="text-zinc-400">
              Five core test tasks
            </h6>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 marker:text-zinc-500">
              <li>Login &amp; registration — verify account creation and access.</li>
              <li>Carrier binding — link and manage invoice carriers.</li>
              <li>Invoice wallet &amp; donation — store invoices and test donation.</li>
              <li>
                Scan &amp; prize redemption — scan invoices, check results, claim
                prizes.
              </li>
              <li>Spending analysis — view and interpret expense breakdowns.</li>
            </ul>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h4 className="text-zinc-100">
                Results summary (prototype)
              </h4>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Overall</span>
                  <span className={M_TXT}>88%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Login &amp; registration</span>
                  <span className={M_TXT}>75%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Carrier binding</span>
                  <span className={M_TXT}>67%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Invoice wallet &amp; donation</span>
                  <span className={M_TXT}>83%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Scan &amp; prize redemption</span>
                  <span className={M_TXT}>92%</span>
                </div>
                <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                  <span className="text-zinc-400">Spending analysis</span>
                  <span className={M_TXT}>100%</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                Errors: average{" "}
                <span className={M_TIME}>1.3</span> errors per participant—mostly form
                entry and unclear prompts. Shortest task: scan &amp; prize redemption (
                <span className={M_TIME}>~40s</span> avg.). Longest: carrier binding (
                <span className={M_TIME}>~2m 20s</span> avg.).
              </p>
              <p className="mt-3 text-sm text-zinc-300">
                <span className="text-zinc-200">What worked:</span> scan &amp; prize check
                with visual/audio feedback; homepage layout (especially for elderly);
                spending charts valued by younger users.
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-200">What didn&apos;t:</span> first-run
                length still a tension for some (optional steps skipped); multi-language
                prompts unclear; prize redemption steps confusing.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
              <WideFigure
                borderless
                src={ASSET("prototype-matrix.png")}
                alt="Prototype task success matrix spreadsheet"
                caption="Task matrix / pass-fail by participant (export)."
              />
              <WideFigure
                borderless
                src={ASSET("prototype-task-notes.png")}
                alt="Session notes and task completion tracking"
                caption="Session notes &amp; completion log (export)."
              />
            </div>
          </div>
        </CaseStudyInViewSection>

        </DesignJourneyCollapsible>
        <DesignJourneyCollapsible
          journeySectionIds={["reflection", "business-constraints"]}
          navAnchorId="reflection"
          panelId="e-invoice-reflection-panel"
          title="Reflection"
          subtitle="Lessons, constraints, and what to validate next"
          className="!border-t-0 !pt-0 sm:!pt-0"
        >
          <div className="space-y-5">
            <h2 className="max-w-3xl text-zinc-100">
              The hardest decision was the home density conflict between younger and
              silver users
            </h2>
            <div className="max-w-3xl space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Interviews were unambiguous: one group needed the sparsest possible
                home and loud visual anchors; another wanted a richer dashboard with
                shortcuts and status surfacing immediately. A single static default
                would always read as &quot;wrong&quot; to half the base. I chose{" "}
                <span className="text-zinc-100">
                  configurability—optional home modules with fixed rails
                </span>{" "}
                over picking one designed default and accepting that we&apos;d quietly
                fail a major segment.
              </p>
              <p>
                The cost showed up in testing:{" "}
                <span className="text-zinc-100">
                  first launch picked up cognitive overhead
                </span>{" "}
                because people encountered density choices before they had finished a
                single high-confidence task. If I were redesigning today, I&apos;d
                validate a{" "}
                <span className="text-zinc-100">
                  tiered onboarding sequence in production
                </span>
                —complete one core job (e.g. scan or passbook) with a sane default,
                then surface module toggles with clearer presets. Same principle as
                progressive disclosure in trust-heavy products:{" "}
                <span className="text-zinc-100">
                  earn comprehension before preference complexity
                </span>
                , and A/B test when that handoff happens.
              </p>
              <p>
                A second lesson sat in the data tail: the weakest tasks were rarely
                about motor skill—they were about{" "}
                <span className="text-zinc-100">
                  whether people understood why a step existed
                </span>
                . Inclusive design here meant scenario language and mental models, not
                only bigger type.
              </p>
            </div>

            <div
              id="business-constraints"
              className="scroll-mt-28 space-y-5 border-t border-zinc-800/90 pt-10 sm:scroll-mt-32 sm:pt-12"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Business constraints
              </span>
              <h3 className="max-w-3xl text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                Sprint timelines, MoF policy, and backend limits meant every surface had
                to survive legal review and what engineering could actually ship.
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-4">
                  <p className="text-xs font-semibold text-violet-400">Timeline</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Tight deadlines for research, design, and testing—solutions needed
                    to ship in sprints without delaying release schedules.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-4">
                  <p className="text-xs font-semibold text-violet-400">Stakeholders</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    As a Ministry of Finance government service, features must follow
                    official regulations and public-sector standards—no commercial
                    partnerships or private-business campaigns.
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-4">
                  <p className="text-xs font-semibold text-violet-400">Technical</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Existing backends limit real-time integration for spending analysis
                    and multi-language support. Performance must stay smooth despite
                    biometric login, push notifications, and donation batch processing.
                  </p>
                </div>
              </div>
            </div>

            <CaseStudyExpandable label="What I&apos;d validate next">
              <ul className="list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed marker:text-zinc-500">
                <li>
                  Production experiment on{" "}
                  <span className="text-zinc-200">when</span> optional home modules
                  are introduced (after first successful task vs. first session).
                </li>
                <li>
                  Deeper pairing with policy/legal on{" "}
                  <span className="text-zinc-200">how much scenario copy</span> we
                  can show in technical setup flows without over-promising merchant
                  coverage.
                </li>
                <li>
                  Longitudinal study on{" "}
                  <span className="text-zinc-200">VoiceOver task time</span> after
                  IA stabilization—not just pass/fail in one lab cycle.
                </li>
              </ul>
            </CaseStudyExpandable>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <Image
                src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
                alt="Stakeholder meeting during the e-Invoice redesign project"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </DesignJourneyCollapsible>
        <CaseStudyInViewSection
          id="figma-resources"
          className="scroll-mt-28 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:scroll-mt-32 sm:space-y-5 sm:p-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200/85">
            Figma files
          </span>
          <h2 className="max-w-2xl text-pretty text-lg font-semibold leading-snug tracking-tight text-zinc-100 sm:text-xl md:text-2xl">
            Open the source files for wireflows, page logic, and hi-fi mocks in one
            place.
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400">
            Hi-fi mockups and page flow first; wireframes and wireflow for IA and
            early logic.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={FIGMA_MOCKUP_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500/90 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              Mockup &amp; page flow →
            </a>
            <a
              href={FIGMA_WIREFRAME_FLOW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-600 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-400 hover:text-zinc-50"
            >
              Wireframe &amp; wireflow →
            </a>
          </div>
        </CaseStudyInViewSection>
        </div>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="e-invoice-app" />
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

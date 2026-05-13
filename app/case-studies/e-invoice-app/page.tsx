import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { DesignJourneyCollapsible } from "../_components/DesignJourneyCollapsible";
import { EInvoiceHeroTldr } from "./EInvoiceHeroTldr";
import { FinalScreensMarquee } from "./FinalScreensMarquee";
import { PortraitTile, WideFigure } from "./EInvoiceFigures";
import { HomeBeforeAfterSlider } from "./HomeBeforeAfterSlider";
import { GuidedOnboardingVideoPair } from "./OnboardingDemoVideo";
import { SettingHomeModulesVideo } from "./SettingHomeModulesVideo";
import { LoginBeforeAfterSlider } from "./LoginBeforeAfterSlider";
import { ProblemPersonasBlock } from "./ProblemPersonasBlock";
import {
  CASE_STUDY_BODY_GRID,
  CASE_STUDY_SECTION_TITLE_CLASS,
  SITE_SHELL_INNER,
} from "@/lib/site-shell";

export const metadata = {
  title:
    "MOF Uniform Invoice Award Redemption app | Angela Yang",
  description:
    "Government mobile app used by ~20 million people: trust & inclusion at national scale—multi-segment research (age, language, accessibility), competitive benchmarking, IA, ~88% prototype task success, measurable lifts in activation (onboarding) and retention (login success).",
};

const FIGMA_MOCKUP_PAGE =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=2103-5106&t=Ynz1CgBhJkN04Gfz-1";
const FIGMA_WIREFRAME_FLOW =
  "https://www.figma.com/design/ixS4TwNUz1pu0Riv7peXRA/APP-Wireframe?node-id=2120-5665&t=j3rbIoMCpkpNcAY2-1";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

const FUNCTIONAL_MAP_INITIAL_DISCUSSION = {
  src:
    "/case-studies/e-invoice/" +
    encodeURIComponent("Example of Initial Feature Discussion Stage.png"),
  alt: "Example of initial feature discussion stage: functional map and touchpoints before wireframes",
} as const;

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
      ? "text-base font-semibold leading-snug text-zinc-100 sm:text-lg md:text-[1.35rem] md:leading-snug"
      : "text-base font-semibold leading-snug text-zinc-100 sm:text-lg md:text-xl"
    : largeHeadline
      ? "text-base font-semibold leading-snug tracking-tight text-zinc-50 sm:text-lg md:text-[1.35rem] md:leading-snug lg:text-[1.5rem]"
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
        {detail !== null && detail !== "" ? (
          <div className={detailClass}>{detail}</div>
        ) : null}
      </div>
    </div>
  );
}

/** Same headline scale as {@link StoryBeat} with `largeHeadline` (e.g. Decision cards). */
const STORY_OUTCOME_CALLOUT_HEADLINE_CLASS =
  "mt-3 max-w-3xl text-base font-semibold leading-snug tracking-tight text-zinc-50 sm:text-lg md:text-[1.35rem] md:leading-snug lg:text-[1.5rem]";

/** Full-width outcome callout: no timeline rail (Section 1). Dark surface, accent rail—no mint fill. */
function StoryOutcomeCallout({
  headline,
  detail,
}: {
  headline: ReactNode;
  /** Omitted or empty when the callout has no supporting line. */
  detail?: ReactNode;
}) {
  return (
    <div className="mt-8 max-w-4xl rounded-2xl border border-zinc-700/85 border-l-[4px] border-l-emerald-500/90 bg-zinc-900/80 px-6 py-7 sm:px-8 sm:py-9">
      <span className="inline-flex rounded-full border border-emerald-500/80 bg-emerald-500/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-50">
        Outcome
      </span>
      <p className={STORY_OUTCOME_CALLOUT_HEADLINE_CLASS}>{headline}</p>
      {detail !== null && detail !== undefined && detail !== "" ? (
        <p className="mt-3 max-w-3xl text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
          {detail}
        </p>
      ) : null}
    </div>
  );
}

/** Hero mocks: native aspect ratio, full width, sharp (unoptimized). */
const HERO_MOCK_GALLERY = [
  {
    src: "/case-studies/e-invoice/mock1.png",
    alt: "E-invoice app redesign mock — screen 1",
    width: 1948,
    height: 1051,
  },
  {
    src: "/case-studies/e-invoice/mock2.png",
    alt: "E-invoice app redesign mock — screen 2",
    width: 2000,
    height: 1500,
  },
  {
    src: "/case-studies/e-invoice/mock3.png",
    alt: "E-invoice app redesign mock — screen 3",
    width: 1536,
    height: 1500,
  },
  {
    src: "/case-studies/e-invoice/mock4.webp",
    alt: "E-invoice app redesign mock — screen 4",
    width: 5483,
    height: 3060,
  },
] as const;

/** Handoff & engineering alignment figure */
const HANDOFF_MODULE_SETTINGS_SPEC = {
  src: "/case-studies/e-invoice/Handoff.png",
  alt: "E-invoice design handoff: Figma flows, API state mapping, screen reader annotations, and component specs for engineering alignment",
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
/** Labels in testing recap — emerald accent */
const E_INVOICE_ACCENT_LABEL = "font-semibold text-emerald-300";
/** Design journey copy — emerald emphasis on key terms */
const JOURNEY_EMPHASIS = "font-semibold text-emerald-200";

const E_INVOICE_JOURNEY_IDS = [
  "functional-map",
  "page-flow-design",
  "testing",
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
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} min-w-0 overflow-x-hidden space-y-10 sm:space-y-12`}
          >
          <div className="flex min-w-0 flex-col gap-8 sm:gap-10">
            {HERO_MOCK_GALLERY.map((img) => (
              <ImageLightbox
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="block w-full"
                disableHoverScale
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="h-auto w-full max-w-full"
                  sizes="(max-width: 1480px) 100vw, 1280px"
                  unoptimized
                />
              </ImageLightbox>
            ))}
          </div>

          <div className="mt-10">
            <EInvoiceHeroTldr />
          </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <ProblemPersonasBlock />
      </CaseStudyContentLayout>

      <CaseStudyInViewSection
        id="key-outcomes"
        className="scroll-mt-28 mb-14 min-w-0 w-full sm:mb-16 sm:scroll-mt-32"
      >
        <FinalScreensMarquee slides={FINAL_SOLUTION_MARQUEE_SLIDES} />
      </CaseStudyInViewSection>

      <CaseStudyContentLayout containerClassName="!pt-0 sm:!pt-0">
        <div className="space-y-16 border-t border-zinc-800/90 pt-14 sm:space-y-20 sm:pt-16">
            <section
              id="e-invoice-story-1-homepage"
              className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Solution 1
                </span>
                <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>The Homepage</h2>
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
                    headline="small Icon-only patterns left foreign residents guessing and many low-vision users couldn&apos;t use the app without a caregiver."
                    detail=""
                    largeHeadline
                  />
                  <StoryBeat
                    label="Key insight"
                    headline={
                      <>
                        <span className="block">
                          <span className="font-semibold text-zinc-200">1.</span>{" "}
                          Foreign residents needed readable text to decode controls—not
                          icon-only cues.
                        </span>
                        <span className="mt-3 block">
                          <span className="font-semibold text-zinc-200">2.</span>{" "}
                          Low-vision users needed predictable, stable placement and
                          large, labeled CTAs instead of small icons.
                        </span>
                      </>
                    }
                    detail=""
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
                  Solution 2
                </span>
                <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
                  Pushback with external stakeholders: promo-first vs. what users
                  actually open the app for
                </h2>
              </header>
              <StoryBeatTimeline className="max-w-none">
                <StoryBeat
                  label="Problem"
                  headline="External stakeholders wanted the sustainability outreach zone to dominate on open. However, interview evidence suggested a different set of priorities first."
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
                  headline="I brought interview evidence into government stakeholder meetings to push back"
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
                headline="Across scan, donate, and redemption—including visually impaired participants and mixed ages, the usability sessions reached 88% task success."
              />
              <SettingHomeModulesVideo className="w-full" />
            </section>

            <section
              id="e-invoice-story-3-login"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800/90 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Solution 3
                </span>
                <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
                  Login &amp; authentication
                </h2>
              </header>
              <StoryBeatTimeline className="max-w-none">
                <StoryBeat
                  label="Problem"
                  headline="Authentication was secure, but middle-aged and senior users kept forgetting their verification passwords"
                  detail="Login success hovered around ~68%. MoF verification codes and recovery friction blocked them before any core task."
                  largeHeadline
                />
                <StoryBeat
                  label="Decision"
                  headline="Ship biometric login and in-app password recovery."
                  detail="People could get back in without memorizing credentials or hunting a one-time code."
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
                  Solution 4
                </span>
                <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
                  Guided Onboarding Setup
                </h2>
              </header>
              <StoryBeatTimeline className="max-w-none">
                <StoryBeat
                  label="Problem"
                  headline="Many lottery prizes go unclaimed because people don&apos;t check, miss alerts, or never set up auto transfer."
                  detail="About 1/4 major lottery prizes are never claimed. People forget to check, miss notifications, or use cloud invoices without linking a bank account for automatic payouts. Many foreign residents don&apos;t know auto-transfer exists or how to set it up. Seniors and foreign residents often didn&apos;t complete auto-transfer or biometric setup because they weren&apos;t aware of these features or how to enable them."
                  largeHeadline
                />
                <StoryBeat
                  label="Decision"
                  headline="Guided onboarding &amp; English version for foreigners"
                  detail="Biometric setup → bank account for auto-transfer → notifications → cloud backup—each step explained why it mattered, not only what to tap. I also shipped an English-language experience for foreign residents."
                  largeHeadline
                />
              </StoryBeatTimeline>
              <StoryOutcomeCallout
                headline="One month post-launch, client-reported missed top-tier prize redemptions moved from about 24% to 18%."
              />
              <GuidedOnboardingVideoPair className="w-full" />
            </section>
        </div>

        <div className="flex min-w-0 flex-col gap-10 sm:gap-12">
          <CaseStudyInViewSection
            id="e-invoice-handoff"
            className="scroll-mt-28 border-t border-zinc-800/90 pt-10 sm:scroll-mt-32 sm:pt-12"
          >
            <div className="max-w-4xl space-y-4">
              <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
                Handoff &amp; engineering alignment
              </h3>
              <div className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                <p className="font-medium text-zinc-200">
                  Handoff included three layers:
                </p>
                <ul className="mt-4 list-none space-y-3.5">
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/85"
                      aria-hidden
                    />
                    <span>
                      <span className="font-semibold text-zinc-200">
                        API state matrix
                      </span>
                      {" — "}
                      Each flow mapped against account states and timing windows, so
                      engineering knew which endpoint to hit per scenario.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/85"
                      aria-hidden
                    />
                    <span>
                      <span className="font-semibold text-zinc-200">
                        Screen reader annotation
                      </span>
                      {" — "}
                      VoiceOver focus order marked directly on screens.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/85"
                      aria-hidden
                    />
                    <span>
                      <span className="font-semibold text-zinc-200">
                        Component specs
                      </span>
                      {" — "}
                      States, empty copy, and error strings per component in the Figma
                      library.
                    </span>
                  </li>
                </ul>
              </div>
              <figure className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <ImageLightbox
                  src={HANDOFF_MODULE_SETTINGS_SPEC.src}
                  alt={HANDOFF_MODULE_SETTINGS_SPEC.alt}
                  className="block w-full"
                  disableHoverScale
                >
                  <Image
                    src={HANDOFF_MODULE_SETTINGS_SPEC.src}
                    alt={HANDOFF_MODULE_SETTINGS_SPEC.alt}
                    width={2414}
                    height={1450}
                    className="h-auto w-full object-contain object-top"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    unoptimized
                  />
                </ImageLightbox>
              </figure>
            </div>
          </CaseStudyInViewSection>

          <DesignJourneyCollapsible
          journeySectionIds={E_INVOICE_JOURNEY_IDS}
          panelId="e-invoice-design-journey-panel"
          title="Design journey"
          subtitle="Functional map, page flows, and moderated testing"
        >
        <CaseStudyInViewSection
          id="functional-map"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Functional map
          </span>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Before moving to wireframe, I mapped out{" "}
            <span className={JOURNEY_EMPHASIS}>functional map</span> for all
            features (login, home, prize redemptions, etc) and{" "}
            <span className={JOURNEY_EMPHASIS}>validated</span> each touchpoint
            with <span className={JOURNEY_EMPHASIS}>internal stakeholders</span>{" "}
            (engineers on{" "}
            <span className={JOURNEY_EMPHASIS}>
              API availability and data sources
            </span>
            ) and{" "}
            <span className={JOURNEY_EMPHASIS}>external stakeholders</span>{" "}
            (government staff clients) to confirm the scope was{" "}
            <span className={JOURNEY_EMPHASIS}>feasible</span>.
          </p>
          <WideFigure
            borderless
            src={FUNCTIONAL_MAP_INITIAL_DISCUSSION.src}
            alt={FUNCTIONAL_MAP_INITIAL_DISCUSSION.alt}
            width={7136}
            height={2520}
            unoptimized
          />
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="page-flow-design"
          className="scroll-mt-28 space-y-12 sm:scroll-mt-32"
        >
          <div className="max-w-3xl space-y-4">
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              In user interviews, people described how they wanted the app to
              feel in everyday use—easy to scan, calm, and not overwhelming.
              They said they wanted something that felt familiar and light, not
              stiff or crowded. Those conversations kept circling back to the
              same qualities, which we captured as:
            </p>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              Interview keywords
            </p>
            <ul
              className="flex flex-wrap gap-2.5"
              aria-label="User interview keywords (English)"
            >
              {(["Intuitive", "Minimal", "Fresh", "Modern"] as const).map((word) => (
                <li key={word}>
                  <span className="inline-flex rounded-lg border border-emerald-500/45 bg-emerald-500/10 px-3 py-1.5 text-base font-semibold tracking-wide text-emerald-100 sm:text-lg">
                    {word}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="min-w-0 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400/90">
                Moodboard &amp; style directions
              </p>
              <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
                Vibrant, Life, Fun
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
            </div>
            <div className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
              <WideFigure
                borderless
                src={ASSET("moodboard-lifestyle-hero.png")}
                alt="Person using a phone outdoors in an urban setting, sunny lifestyle context"
              />
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
            </div>
          </div>

          <div className="max-w-3xl space-y-4 pt-2">
            <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
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
            <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
              Twelve moderated sessions—including low-vision users—landed at{" "}
              <span className={M_TXT}>88%</span> success and a clear fix list for login,
              invoice management, and prize flows.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              One-on-one observation on core tasks; errors and satisfaction tracked so
              VoiceOver paths, visual hierarchy, and plain-language fixes could ship
              before launch—not relegated to a late &quot;a11y pass.&quot;
            </p>
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
                <span className={E_INVOICE_ACCENT_LABEL}>What worked:</span> scan &amp;
                prize check with visual/audio feedback; homepage layout (especially for
                elderly); spending charts valued by younger users.
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className={E_INVOICE_ACCENT_LABEL}>What didn&apos;t:</span>{" "}
                first-run length still a tension for some (optional steps skipped);
                multi-language prompts unclear; prize redemption steps confusing.
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
            <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
              The hardest part was to balance all the various and conflicting needs
              from all age groups.
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
              <p>
                On the engineering side, one of the hardest stretches while shaping each
                screen and flow was staying in lockstep with{" "}
                <span className="text-zinc-100">backend engineers</span> and with{" "}
                <span className="text-zinc-100">
                  engineers who maintained the legacy system
                </span>
                . We had to walk through{" "}
                <span className="text-zinc-100">every API</span> and{" "}
                <span className="text-zinc-100">each system judgment path</span>{" "}
                together—clarifying what would be sent back at which stage, and exactly
                what data each page needed to display and to hand off to the next step.
                Without that shared map, the experience looked complete in design but
                could not line up with what we could ship with confidence.
              </p>
            </div>

            <div
              id="business-constraints"
              className="scroll-mt-28 space-y-5 border-t border-zinc-800/90 pt-10 sm:scroll-mt-32 sm:pt-12"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Business constraints
              </span>
              <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
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

            <div className="max-w-3xl space-y-3 border-t border-zinc-800/90 pt-8">
              <h3 className={CASE_STUDY_SECTION_TITLE_CLASS}>
                What I&apos;d validate next
              </h3>
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
            </div>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <ImageLightbox
                src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
                alt="Stakeholder meeting during the e-Invoice redesign project"
                className="block w-full"
                disableHoverScale
              >
                <Image
                  src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
                  alt="Stakeholder meeting during the e-Invoice redesign project"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </ImageLightbox>
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
          <h2 className="case-study-section-title max-w-2xl text-pretty font-semibold tracking-tight text-zinc-100">
            Open the source files for wireflows, page logic, and hi-fi mocks in one
            place.
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400">
            Hi-fi mockups and page flow first; wireframes and wireflow for IA and
            early logic.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
            <SplitCapsuleLink
              href={FIGMA_MOCKUP_PAGE}
              label="Mockup &amp; page flow"
              variant="emeraldSoft"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SplitCapsuleLink
              href={FIGMA_WIREFRAME_FLOW}
              label="Wireframe &amp; wireflow"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </CaseStudyInViewSection>
        </div>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="e-invoice-app" />
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

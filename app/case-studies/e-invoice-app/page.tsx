import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { EInvoiceHeroTldr } from "./EInvoiceHeroTldr";
import { FinalScreensMarquee } from "./FinalScreensMarquee";
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
    "Government mobile app used by ~20 million people: trust & inclusion at national scale—multi-segment research (age, language, accessibility), competitive benchmarking, IA, and measurable lifts in activation (onboarding) and retention (login success).",
};

const FIGMA_MOCKUP_PAGE =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=2103-5106&t=Ynz1CgBhJkN04Gfz-1";
const FIGMA_WIREFRAME_FLOW =
  "https://www.figma.com/design/ixS4TwNUz1pu0Riv7peXRA/APP-Wireframe?node-id=2120-5665&t=j3rbIoMCpkpNcAY2-1";
const FIGMA_PILL_CLASS =
  "inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/80 bg-emerald-500/90 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:border-emerald-700 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400/60 sm:px-6 sm:py-3 sm:text-base";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

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

  const cardClass = "border-t border-zinc-600 pt-4";

  const headlineClass =
    "text-[15px] font-medium leading-[1.35] text-zinc-100";

  const detailClass = "mt-2 cs-body-sm";

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
  "mt-3 max-w-3xl text-[15px] font-medium leading-[1.35] text-zinc-100";

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
    <div className="mt-8 max-w-4xl border-t border-zinc-600 pt-6 sm:pt-7">
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

const FUNCTIONAL_MAP_INITIAL_DISCUSSION = {
  src:
    "/case-studies/e-invoice/" +
    encodeURIComponent("Example of Initial Feature Discussion Stage.png"),
  alt: "Example of initial feature discussion stage: functional map and touchpoints before wireframes",
} as const;

const FOCUS_GROUP_PHOTO = {
  src: "/case-studies/e-invoice/case-assets/interview-field-20250321-1330-copy.png",
  alt: "Older-adult focus group interview on mobile phone use and everyday spending habits",
  caption:
    "Older-adult focus group—how they use phones and day-to-day spending habits",
} as const;

const DOTTED_JOURNEY_LINK_CLASS =
  "inline-block text-sm font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400";

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
    <article className="min-h-screen">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} min-w-0 overflow-x-hidden space-y-10 sm:space-y-12`}
          >
          <div>
            <EInvoiceHeroTldr />
          </div>

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

      <CaseStudyContentLayout
        containerClassName="!pt-0 sm:!pt-0"
        contentClassName="space-y-16 sm:space-y-20"
      >
        <div className="space-y-16 border-t border-zinc-800 pt-14 sm:space-y-20 sm:pt-16">
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
                <StoryBeatTimeline className="max-w-none lg:col-span-2">
                  <StoryBeat
                    label="Problem"
                    headline="Users opened the app and couldn&apos;t find what they needed — five very different segments, all frustrated for different reasons."
                    detail="Icon-only controls left foreign residents guessing, and many low-vision users couldn&apos;t use the app without a caregiver."
                    largeHeadline
                  />
                  <StoryBeat
                    label="Key insight"
                    headline="Every group shared one first action: scan a paper invoice."
                    detail="Seniors especially had stacks of paper invoices — cashiers assumed elderly users didn&apos;t use the app and handed them paper receipts instead."
                    largeHeadline
                  />
                  <StoryBeat
                    label="Decision"
                    headline="Scan became the primary CTA on open: large tap target, readable text label, fixed placement."
                    detail="Before: small QR icon, top-right. After: unmissable. One pattern served all groups — labels that don&apos;t assume Chinese literacy."
                    largeHeadline
                  />
                </StoryBeatTimeline>
              </div>
              <StoryOutcomeCallout
                headline="Prototype testing with the same participants validated the scan-first direction — strong positive responses across ages, especially seniors."
              />
              <HomeBeforeAfterSlider />
            </section>

            <section
              id="e-invoice-story-2-accessibility"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800 pt-14 sm:scroll-mt-32 sm:pt-16"
            >
              <header className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Solution 2
                </span>
                <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
                  Promo vs. user priorities
                </h2>
              </header>
              <p className="max-w-3xl cs-body">
                Pushback with external stakeholders: promo-first vs. what users
                actually open the app for.
              </p>
              <StoryBeatTimeline className="max-w-none">
                <StoryBeat
                  label="Problem"
                  headline="External stakeholders wanted the sustainability outreach zone to dominate on open."
                  detail="But interviews showed a consistent priority order: scan action first, then the carrier barcode, then prize/lottery info, then spending analysis. The outreach zone wasn&apos;t among the top reasons people launched the app."
                  largeHeadline
                />
                <StoryBeat
                  label="Key insight"
                  headline="Same home layout, two incompatible defaults: older and low-vision users wanted fewer modules and strong color for quick recognition; younger users wanted a denser dashboard."
                  detail=""
                  largeHeadline
                />
                <StoryBeat
                  label="Conflict"
                  headline="I brought interview evidence into government stakeholder meetings — I understood their need to surface carbon-reduction messaging, but the data said job-first ordering had to win the first screen."
                  detail=""
                  largeHeadline
                />
                <StoryBeat
                  label="Resolution"
                  headline="A customizable home: section visibility toggles in Settings."
                  detail="Users can hide sections they don&apos;t need, so the promo block keeps its space without forcing that default on everyone. Partners accepted the model."
                  largeHeadline
                />
              </StoryBeatTimeline>
              <StoryOutcomeCallout
                headline="Usability sessions across scan, donate, and redemption included visually impaired participants."
              />
              <SettingHomeModulesVideo className="w-full" />
            </section>

            <section
              id="e-invoice-story-3-login"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800 pt-14 sm:scroll-mt-32 sm:pt-16"
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
                  headline="Authentication was secure, but middle-aged and senior users kept forgetting their verification passwords."
                  detail="Pre-redesign, login success hovered around ~68% — verification codes and recovery friction blocked them before any core task."
                  largeHeadline
                />
                <StoryBeat
                  label="Decision"
                  headline="Shipped biometric login and in-app password recovery — no more memorizing credentials or hunting one-time codes."
                  detail=""
                  largeHeadline
                />
              </StoryBeatTimeline>
              <LoginBeforeAfterSlider />
            </section>

            <section
              id="e-invoice-story-4-onboarding"
              className="scroll-mt-28 space-y-6 border-t border-zinc-800 pt-14 sm:scroll-mt-32 sm:pt-16"
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
                  headline="About 1 in 4 major lottery prizes go unclaimed — people forget to check, miss notifications, or never link a bank account for auto-transfer."
                  detail="Seniors and foreign residents often didn&apos;t complete auto-transfer or biometric setup because they didn&apos;t know the features existed."
                  largeHeadline
                />
                <StoryBeat
                  label="Decision"
                  headline="Guided onboarding: biometric setup → bank account for auto-transfer → notifications → cloud backup, each step explaining why it mattered."
                  detail="Plus a full English-language experience for foreign residents."
                  largeHeadline
                />
              </StoryBeatTimeline>
              <StoryOutcomeCallout
                headline="One month post-launch, missed top-tier prize redemptions dropped from ~24% to ~18% (client-reported)."
              />
              <GuidedOnboardingVideoPair className="w-full" />
            </section>
        </div>

        <CaseStudyInViewSection
          id="design-journey"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Design journey
          </h2>
          <p className="max-w-2xl cs-body">
            Functional map, page flows, and moderated testing
          </p>
          <Link
            href="/case-studies/e-invoice-app/design-journey"
            className={DOTTED_JOURNEY_LINK_CLASS}
          >
            Design journey →
          </Link>
          <Link
            href="/case-studies/e-invoice-app/design-journey"
            className="block overflow-hidden"
          >
            <Image
              src={FUNCTIONAL_MAP_INITIAL_DISCUSSION.src}
              alt={FUNCTIONAL_MAP_INITIAL_DISCUSSION.alt}
              width={7136}
              height={2520}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              unoptimized
            />
          </Link>
        </CaseStudyInViewSection>
        <CaseStudyInViewSection
          id="e-invoice-handoff"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Handoff &amp; engineering alignment
          </h2>
          <Link
            href="/case-studies/e-invoice-app/handoff-engineering-alignment"
            className={DOTTED_JOURNEY_LINK_CLASS}
          >
            Handoff &amp; engineering alignment →
          </Link>
          <Link
            href="/case-studies/e-invoice-app/handoff-engineering-alignment"
            className="block overflow-hidden"
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
          </Link>
        </CaseStudyInViewSection>
        <CaseStudyInViewSection
          id="research-journey"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Full research journey
          </h2>
          <p className="max-w-2xl cs-body">
            Competitor analysis, multisegment interviews, and accessibility
            work behind this redesign.
          </p>
          <Link
            href="/user-research-journey"
            className={DOTTED_JOURNEY_LINK_CLASS}
          >
            Full research journey →
          </Link>
          <Link href="/user-research-journey" className="block overflow-hidden">
            <figure className="min-w-0 space-y-2">
              <Image
                src={FOCUS_GROUP_PHOTO.src}
                alt={FOCUS_GROUP_PHOTO.alt}
                width={2400}
                height={1350}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <figcaption className="max-w-3xl text-xs text-zinc-500">
                {FOCUS_GROUP_PHOTO.caption}
              </figcaption>
            </figure>
          </Link>
        </CaseStudyInViewSection>
        <CaseStudyInViewSection
          id="figma-resources"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>Figma files</h2>
          <p className="max-w-2xl cs-body">
            Wireflows, page logic, and hi-fi mockups — page flow first,
            wireframes for IA and early logic.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={FIGMA_MOCKUP_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className={FIGMA_PILL_CLASS}
            >
              Mockup &amp; page flow
              <span aria-hidden>→</span>
            </a>
            <a
              href={FIGMA_WIREFRAME_FLOW}
              target="_blank"
              rel="noopener noreferrer"
              className={FIGMA_PILL_CLASS}
            >
              Wireframe &amp; wireflow
              <span aria-hidden>→</span>
            </a>
          </div>
        </CaseStudyInViewSection>


        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12">
          <CaseStudyPrevNext
            currentSlug="e-invoice-app"
            leading={
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
              >
                ← Back to home
              </Link>
            }
          />
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

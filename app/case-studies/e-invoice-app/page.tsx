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
import { ProblemPersonasBlock } from "./ProblemPersonasBlock";
import { EInvoiceHeroTldr } from "./EInvoiceHeroTldr";
import { OutcomeAutoSlideshow } from "./OutcomeAutoSlideshow";
import { FinalScreensMarquee } from "./FinalScreensMarquee";
import { PhoneMockup, PortraitTile, WideFigure } from "./EInvoiceFigures";
import { HomeBeforeAfterSlider } from "./HomeBeforeAfterSlider";
import { OnboardingDemoVideo } from "./OnboardingDemoVideo";
import { SettingHomeModulesVideo } from "./SettingHomeModulesVideo";
import { LoginBeforeAfterSlider } from "./LoginBeforeAfterSlider";

export const metadata = {
  title:
    "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App | Angela Yang",
  description:
    "Government mobile app used by ~20 million people: trust & inclusion at national scale—multi-segment research (age, language, accessibility), competitive benchmarking, IA, ~88% prototype task success, measurable login and onboarding lifts.",
};

const FIGMA_MOCKUP_PAGE =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=2103-5106&t=Ynz1CgBhJkN04Gfz-1";
const FIGMA_WIREFRAME_FLOW =
  "https://www.figma.com/design/ixS4TwNUz1pu0Riv7peXRA/APP-Wireframe?node-id=2120-5665&t=j3rbIoMCpkpNcAY2-1";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

/** Scan-first, density, login, and onboarding story headings — same scale. */
const KEY_OUTCOME_STORY_TITLE_CLASS =
  "text-2xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-3xl md:text-4xl md:leading-snug";

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
  "carrier-binding-insight",
] as const;

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "Feb 2025 – Sep 2025 (8 months)" },
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

/** Everyone agreed on scan-first; rendered above the other outcome rows (text only). */
const SCAN_SHARED_TRUTH_OUTCOME = {
  evidence:
    "Across all age groups and low-vision participants, one behavior was universal: the primary reason people opened the app was to scan a paper invoice or show their barcode at checkout. But for elderly users, speed was the real barrier — cashiers routinely assumed older customers didn't have the app, and would hand over a paper invoice before the user had a chance to pull out their phone. The app never got used, not because the user gave up, but because the system moved on without them. For users who did get their phone out, the second problem hit: scan wasn't where they expected it. The entry point was buried one or two taps from the visual center, so users hunted while the line moved.",
  problem:
    "Two compounding failures: the app wasn't fast enough to surface at checkout, and when it did open, the most-needed action wasn't immediately findable. Together they made the app feel unreliable in the moments that mattered most.",
  decision:
    "Lock the scan button to the most prominent position on home — always visible on launch, never displaced by promos or personalization. Add a home screen widget so the barcode is accessible without opening the app at all: one less step between pocket and checkout, which is exactly the gap that was causing elderly users to be skipped.",
  outcome:
    "Scan & check prize tasks reached 92% success—the strongest task in the battery—with a median completion time of about 40 seconds.",
} as const;

/** Density / modules — second homepage story (after scan before/after). */
const DENSITY_HOME_MODULES_ROW = {
  evidence:
    "This was the hardest tension in the whole system: silver users asked for the sparsest possible home so they could find one or two actions, while younger users wanted winning invoices and spending history surfaced immediately. Two credible audiences, mutually exclusive defaults.",
  problem:
    "A single static layout would always betray one segment—either “too empty” or “too noisy.”",
  decision:
    "Add settings toggles for optional home modules (e.g., spending analytics, win alerts, campaign tiles). Core rails—scan and the invoice passbook—stay fixed and cannot be turned off.",
} as const;

/** Research → problem → decision → outcome; paired with final UI (solution-final-*.png). */
const KEY_OUTCOME_ROWS: {
  title: string;
  assetId: string;
  screenLabel: string;
  screenHint?: string;
  /** When set, use this file in case-assets instead of solution-final-{assetId}.png */
  assetFile?: string;
  /** Multiple screens — shared caption from screenLabel / screenHint */
  assetFiles?: string[];
  /** Auto-advance slideshow (e.g. guided onboarding sequence) */
  autoSlideshow?: boolean;
  /** Guided setup story: MP4/WebM below evidence block instead of slideshow */
  onboardingDemoVideo?: boolean;
  /** Draggable before/after (login) — text first, slider below */
  beforeAfterLoginSlider?: boolean;
  evidence: string;
  problem: string;
  decision: string;
  outcome: string;
}[] = [
  {
    title:
      "Login: password-only path (hard for seniors who forgot codes) \u2192 Face ID, Touch ID (Android) & pattern unlock",
    assetId: "13",
    screenLabel: "Login verification",
    beforeAfterLoginSlider: true,
    evidence:
      "Across age groups, interviews kept surfacing the same failure mode: forgetting the Ministry of Finance verification code. In moderated usability tests, the login task topped out at about 75% success—almost every miss traced back to passwords or verification. Older adults and visually impaired participants often had to hand the phone to family to finish sign-in.",
    problem:
      "The account gate was doing its security job, but it was also blocking real people from ever reaching the tasks that mattered.",
    decision:
      "Ship Face ID / Touch ID as a first-class path and rebuild “forgot password” recovery entirely inside the app—no more kicking people out to external ministry pages mid-flow.",
    outcome:
      "Login success moved from 68% to 92%. For the 51+ cohort in particular, many could complete first-time login on their own—without a caregiver in the loop.",
  },
  {
    title:
      "Prepare new users and new feature settings with guided onboarding",
    assetId: "08",
    screenLabel: "guided first-time setup",
    onboardingDemoVideo: true,
    evidence:
      "In interviews, the pattern for elderly and foreign-resident users was consistent: they had won prizes before but missed the redemption window — not because they ignored the notification, but because they didn't know automatic bank transfer was even an option. The setting existed, buried in the account configuration, but onboarding never surfaced it. Completion for the full setup sequence sat at around 55% in tests, and users who skipped it hit the same friction points at every redemption cycle.",
    problem:
      "The product assumed users would discover and configure the automation-enabling steps on their own. They didn't — and for elderly and foreign-resident users especially, that meant money left unclaimed and repeated manual friction at the moments that mattered most.",
    decision:
      "Reframe first launch as a guided setup where each step explains the outcome, not the feature. For bank account linking: surface it as \"wins go straight to your account — no manual step needed,\" and address trust explicitly. Because this step collects financial verification data, we worked through exactly what the bank required and why, then wrote per-field explanations in the UI so users understood what they were providing and how it would be used. Clarity about data purpose is what makes people willing to complete the step. For biometrics: the real value for elderly users isn't convenience — it's that as long as the app is opened within 90 days before the token expires, they never need to remember a password again. That's the difference between needing a family member to log in for you, and being able to do it independently.",
    outcome:
      'Older adults said, "Quick-login setup is really convenient; I do not need to remember passwords anymore." Foreign residents said, "The explanations are clear; now I finally understand how to set prize payouts to auto-transfer."',
  },
];

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
  { id: "04", title: "Carrier binding" },
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

function KeyOutcomePhoneFigures({
  row,
}: {
  row: (typeof KEY_OUTCOME_ROWS)[number];
}) {
  if (row.beforeAfterLoginSlider) return null;

  const files =
    row.assetFiles ?? [row.assetFile ?? `solution-final-${row.assetId}.png`];

  if (files.length === 1) {
    return (
      <PhoneMockup
        chromeless
        src={ASSET(files[0])}
        alt={row.screenLabel}
        label={row.screenLabel}
        hint={row.screenHint}
      />
    );
  }

  if (row.autoSlideshow) {
    return (
      <OutcomeAutoSlideshow
        screens={files.map((f, i) => ({
          src: ASSET(f),
          alt: `${row.screenLabel} — screen ${i + 1} of ${files.length}`,
        }))}
        label={row.screenLabel}
        hint={row.screenHint}
      />
    );
  }

  return (
    <figure className="w-full max-w-[640px] space-y-3 lg:ml-auto">
      <div className="flex flex-wrap justify-center gap-5 lg:justify-end">
        {files.map((f, i) => (
          <PhoneMockup
            key={f}
            chromeless
            hideCaption
            src={ASSET(f)}
            alt={`${row.screenLabel} — screen ${i + 1} of ${files.length}`}
            label=""
          />
        ))}
      </div>
      <figcaption className="px-1 text-center lg:text-right">
        <p className="text-xs font-medium text-zinc-200">{row.screenLabel}</p>
        {row.screenHint ? (
          <p className="mt-1 text-[11px] text-zinc-500">{row.screenHint}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}

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
            <CaseStudyAtAGlance
              items={AT_A_GLANCE_ITEMS}
              {...CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS}
            />
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
          <FinalScreensMarquee slides={FINAL_SOLUTION_MARQUEE_SLIDES} />

          <div className="space-y-5 sm:space-y-6">
            <div className="max-w-4xl">
              <h2 className={KEY_OUTCOME_STORY_TITLE_CLASS}>
                I brought all user groups&apos; needs into one place and made scanning
                the first thing they see.
              </h2>
            </div>

            <div className="min-w-0 max-w-3xl space-y-4">
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.07] px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-200/95">
                  Outcome
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-100">
                  {SCAN_SHARED_TRUTH_OUTCOME.outcome}
                </p>
              </div>
              <CaseStudyExpandable label="Evidence → problem → decision (full)">
                <div className="space-y-5">
                  <div className="border-l-2 border-emerald-500/45 pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400/95">
                      Evidence · interviews &amp; tests
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {SCAN_SHARED_TRUTH_OUTCOME.evidence}
                    </p>
                  </div>
                  <div className="border-l-2 border-rose-500/35 pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-300/90">
                      Problem in the experience
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {SCAN_SHARED_TRUTH_OUTCOME.problem}
                    </p>
                  </div>
                  <div className="border-l-2 border-violet-500/45 pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-300/95">
                      Decision
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {SCAN_SHARED_TRUTH_OUTCOME.decision}
                    </p>
                  </div>
                </div>
              </CaseStudyExpandable>
            </div>

            <HomeBeforeAfterSlider />

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 sm:p-6">
              <div className="max-w-4xl space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Pushback and alignment process
                </p>
                <h3 className="text-xl font-semibold leading-snug tracking-tight text-zinc-100 sm:text-2xl">
                  Grounded in user interviews, I proposed a configurable home
                  solution aligned with both internal and external stakeholders.
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Interview data showed one universal behavior across age groups:
                  people opened the app to scan paper invoices first. After that,
                  priorities split sharply. Younger users were already comfortable
                  with widgets, so they wanted home to emphasize winning status and
                  spending insights instead of in-app barcode prominence. Middle-aged
                  users prioritized win status and campaign / event information.
                  Older users wanted a clean, low-density surface with scan and
                  barcode as the only obvious jobs.
                </p>
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  I used this evidence to push back on a single static home proposal.
                  First, I reviewed implementation feasibility and delivery risk with
                  engineering against the project deadline. Then I aligned with PM on
                  scope and release constraints. After that, I ran a unified meeting
                  with external stakeholders and presented the interview insights in
                  a document + deck format, walking through segment-by-segment needs
                  and the trade-offs. That process is what got us to a configurable
                  module model instead of one compromised default.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-5 pt-12 sm:mt-14 sm:space-y-6 sm:pt-14">
              <div className="max-w-4xl">
                <h2 className={KEY_OUTCOME_STORY_TITLE_CLASS}>
                  replacing a single static home with optional modules for
                  segmented user needs.
                </h2>
              </div>
              <article className="min-w-0 space-y-6">
                <div className="max-w-3xl space-y-6">
                  <CaseStudyExpandable label="Evidence → problem → decision (full)">
                    <div className="space-y-5">
                      <div className="border-l-2 border-emerald-500/45 pl-4">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400/95">
                          Evidence · interviews &amp; tests
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                          {DENSITY_HOME_MODULES_ROW.evidence}
                        </p>
                      </div>
                      <div className="border-l-2 border-rose-500/35 pl-4">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-300/90">
                          Problem in the experience
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                          {DENSITY_HOME_MODULES_ROW.problem}
                        </p>
                      </div>
                      <div className="border-l-2 border-violet-500/45 pl-4">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-300/95">
                          Decision
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                          {DENSITY_HOME_MODULES_ROW.decision}
                        </p>
                      </div>
                    </div>
                  </CaseStudyExpandable>
                </div>
                <SettingHomeModulesVideo className="w-full" />
              </article>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {KEY_OUTCOME_ROWS.map((row) => (
              <article
                key={row.assetId}
                className={
                  row.beforeAfterLoginSlider
                    ? "space-y-10 border-t border-zinc-800/90 pt-12 lg:pt-14"
                    : row.onboardingDemoVideo
                      ? "min-w-0 space-y-6 border-t border-zinc-800/90 pt-12 lg:pt-14"
                      : "grid gap-10 border-t border-zinc-800/90 pt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12 lg:pt-14"
                }
              >
                <div className="min-w-0 space-y-6">
                  <div className="max-w-4xl">
                    <h2 className={KEY_OUTCOME_STORY_TITLE_CLASS}>{row.title}</h2>
                  </div>
                  <div
                    className={
                      row.onboardingDemoVideo ? "max-w-3xl space-y-6" : "space-y-6"
                    }
                  >
                    <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.07] px-4 py-3 sm:px-5 sm:py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-200/95">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-100">
                        {row.outcome}
                      </p>
                    </div>
                    <CaseStudyExpandable label="Evidence → problem → decision (full)">
                      <div className="space-y-5">
                        <div className="border-l-2 border-emerald-500/45 pl-4">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400/95">
                            Evidence · interviews &amp; tests
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {row.evidence}
                          </p>
                        </div>
                        <div className="border-l-2 border-rose-500/35 pl-4">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-300/90">
                            Problem in the experience
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {row.problem}
                          </p>
                        </div>
                        <div className="border-l-2 border-violet-500/45 pl-4">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-300/95">
                            Decision
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {row.decision}
                          </p>
                        </div>
                      </div>
                    </CaseStudyExpandable>
                  </div>
                  {row.onboardingDemoVideo ? (
                    <OnboardingDemoVideo className="w-full" />
                  ) : null}
                </div>
                {row.beforeAfterLoginSlider ? (
                  <LoginBeforeAfterSlider />
                ) : row.onboardingDemoVideo ? null : (
                  <div
                    className={
                      row.autoSlideshow
                        ? "flex justify-center lg:pt-1"
                        : "flex justify-center lg:justify-end lg:pt-1"
                    }
                  >
                    <KeyOutcomePhoneFigures row={row} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </CaseStudyInViewSection>

        <DesignJourneyCollapsible
          journeySectionIds={E_INVOICE_JOURNEY_IDS}
          panelId="e-invoice-design-journey-panel"
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
              carrier binding, and prize flows.
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

          <div
            id="carrier-binding-insight"
            className="scroll-mt-28 border-t border-zinc-800/90 pt-12 sm:scroll-mt-32 lg:pt-14"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-amber-400/90">
              Lowest task score · reframed problem
            </p>
            <h3 className="mt-3 max-w-3xl text-zinc-100">
              <span aria-hidden>{"\u{1F517}"}</span> Carrier binding scored{" "}
              <span className={M_TXT}>67%</span> because people didn&apos;t understand
              why the step existed—not because the taps were hard.
            </h3>
            <p className="mt-2 max-w-3xl text-sm text-zinc-500 leading-relaxed">
              Reframe: scenario copy and smart support so &quot;bind carrier&quot; reads
              as automatic invoice capture, not ministry jargon.
            </p>

            <article className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12">
              <div className="min-w-0 space-y-5">
                <div className="border-l-2 border-emerald-500/45 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-400/95">
                    Before · what we saw in tests
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    In moderated sessions, participants rarely failed because they
                    could not find the next button—they failed because{" "}
                    <span className="font-medium text-zinc-100">
                      they did not understand why they were being asked to bind a
                      carrier at all
                    </span>
                    . The label read like ministry jargon, not like something tied to
                    their daily shopping. Many abandoned the flow before attempting
                    the mechanics.
                  </p>
                </div>

                <div
                  className="rounded-xl border border-amber-500/35 bg-amber-500/[0.08] px-4 py-3 sm:px-5 sm:py-4"
                  role="note"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-200/95">
                    Highlight
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-100">
                    The bottleneck was comprehension, not dexterity: users could not
                    connect &quot;bind carrier&quot; to &quot;this is how invoices
                    show up from the purchases I already make.&quot;
                  </p>
                </div>

                <div className="border-l-2 border-violet-500/45 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-300/95">
                    Insight
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    The product value of binding is{" "}
                    <span className="text-zinc-100">
                      automatic ingestion: link an email (or carrier), and e-invoices
                      from merchants that use that identifier—e-commerce, subscriptions,
                      and more—can flow into the app without a manual step each time
                    </span>
                    . That story was missing from the old surface; the UI assumed
                    prior civic literacy.
                  </p>
                </div>

                <div className="border-l-2 border-zinc-600 pl-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
                    Decision
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    On the binding experience, add{" "}
                    <span className="text-zinc-100">concrete scenario copy</span>{" "}
                    (e.g. &quot;When you check out on Shopee, matching invoices can
                    land here automatically&quot;) instead of technical wording alone;
                    add a{" "}
                    <span className="text-zinc-100">
                      smart assistant / help entry
                    </span>{" "}
                    so uncertain users can ask in plain language without leaving the
                    task.
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end lg:pt-1">
                <PhoneMockup
                  chromeless
                  src={ASSET("solution-final-04.png")}
                  alt="Final · Carrier binding screen"
                  label="Final · Carrier binding"
                  hint="solution-final-04 · carrier binding"
                />
              </div>
            </article>
          </div>
        </CaseStudyInViewSection>

        </DesignJourneyCollapsible>

        <CaseStudyInViewSection
          id="reflection"
          className="scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Reflection
          </span>
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
              A second lesson sat in the data tail: carrier binding scored lowest
              not because the taps were hard, but because people didn&apos;t
              understand why the step existed—that&apos;s a{" "}
              <span className="text-zinc-100">
                comprehension-over-dexterity
              </span>{" "}
              problem. It reinforced that &quot;inclusive&quot; here is often about
              scenario language and mental models, not only bigger type.
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
                can show in carrier binding without over-promising merchant
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
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="figma-resources"
          className="scroll-mt-28 space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:scroll-mt-32 sm:p-8"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Figma files
          </span>
          <h2 className="max-w-3xl text-zinc-100">
            Open the source files for wireflows, page logic, and hi-fi mocks in one
            place.
          </h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={FIGMA_MOCKUP_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-400 hover:text-zinc-50 transition"
            >
              Mockup &amp; page flow →
            </a>
            <a
              href={FIGMA_WIREFRAME_FLOW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-400 hover:text-zinc-50 transition"
            >
              Wireframe &amp; wireflow →
            </a>
          </div>
        </CaseStudyInViewSection>

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

import Image from "next/image";
import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { CaseStudyScanSummary } from "../_components/CaseStudyScanSummary";
import { CompetitorLandscapeTable } from "./CompetitorLandscapeTable";
import { DesignJourneyCollapsible } from "./DesignJourneyCollapsible";
import { ProblemPersonasBlock } from "./ProblemPersonasBlock";
import { OutcomeAutoSlideshow } from "./OutcomeAutoSlideshow";
import { PhoneMockup, PortraitTile, WideFigure } from "./EInvoiceFigures";

export const metadata = {
  title: "Reimagining Taiwan’s e-Invoice Experience | Angela Yang",
  description:
    "End-to-end mobile app redesign for the Ministry of Finance Cloud Invoice App: research, competitors, IA, testing (~88% task success), accessibility, and measurable outcomes.",
};

const FIGMA_MOCKUP_PAGE =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=2103-5106&t=Ynz1CgBhJkN04Gfz-1";
const FIGMA_WIREFRAME_FLOW =
  "https://www.figma.com/design/ixS4TwNUz1pu0Riv7peXRA/APP-Wireframe?node-id=2120-5665&t=j3rbIoMCpkpNcAY2-1";

const ASSET = (name: string) => `/case-studies/e-invoice/case-assets/${name}`;

const YOUTUBE_A11Y_EMBED = "https://www.youtube.com/embed/yfwERMFfXDM";
const YOUTUBE_A11Y_URL =
  "https://www.youtube.com/shorts/yfwERMFfXDM?si=edcvB-xno43PtoFN";

/** Friendly lifestyle palette (style direction 01) */
const STYLE_SWATCHES: { hex: string; name: string }[] = [
  { hex: "#25244A", name: "Deep navy" },
  { hex: "#51B0A9", name: "Teal" },
  { hex: "#A089FD", name: "Lavender" },
  { hex: "#E57651", name: "Coral" },
  { hex: "#F8D364", name: "Warm yellow" },
];

/** Key metrics — emerald chip (hero stats, inline %, deltas) */
const M_HERO =
  "inline-block rounded-lg bg-emerald-500/15 px-3 py-1 text-2xl font-semibold tabular-nums text-emerald-200";
const M_TXT =
  "rounded-md bg-emerald-500/20 px-1.5 py-0.5 font-semibold tabular-nums text-emerald-200";
const M_TIME =
  "rounded-md bg-amber-500/15 px-1.5 py-0.5 font-medium tabular-nums text-amber-100/95";

const E_INVOICE_TOC = [
  { id: "project-background", label: "Project background" },
  { id: "user-journey-map", label: "The problem" },
  { id: "personas", label: "Personas" },
  { id: "key-outcomes", label: "Key outcomes" },
  { id: "final-solution-screens", label: "Final screens" },
  { id: "impact-results", label: "Impact & results" },
  { id: "design-journey", label: "Design journey" },
  { id: "competitor-insights", label: "Competitor insights & design process" },
  { id: "accessibility", label: "Accessibility" },
  { id: "business-constraints", label: "Business constraints" },
  { id: "functional-map", label: "Functional map" },
  { id: "page-flow-design", label: "Page flow & design system" },
  { id: "testing", label: "Testing & iterations" },
  { id: "carrier-binding-insight", label: "Carrier binding insight" },
  { id: "reflection", label: "Reflection" },
  { id: "figma-resources", label: "Figma files" },
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

/** Final solution screens — high-fidelity exports (18), filenames solution-final-01 … 18. */
const E_INVOICE_SCAN_SUMMARY = [
  "End-to-end UX/UI redesign of Taiwan’s Ministry of Finance Cloud Invoice App—from discovery and competitive research through wireframes, mockups, and documented final screens.",
  "Usability testing with participants aged 18–70+ (including visually impaired users) reached about 88% task success; iterations focused on IA, onboarding, scanning, donation, and redemption.",
  "Login success improved from 68% to 92% with biometric login and in-app recovery; clearer deadlines and notifications helped cut missed prize redemptions.",
  "Aligned flows with accessibility expectations and government service constraints so the app feels faster, more inclusive, and more trustworthy for everyday use.",
] as const;

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
  evidence: string;
  problem: string;
  decision: string;
  outcome: string;
}[] = [
  {
    title: "\u{1F510} Login friction \u2192 biometric-first access",
    assetId: "13",
    screenLabel: "Face ID / quick verification",
    assetFile: "face-id-quick-verification.png",
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
      "\u{1F680} Automation-ready experience \u2192 guided first-time setup",
    assetId: "08",
    screenLabel: "guided first-time setup",
    assetFiles: [
      "onboarding-notifications.png",
      "onboarding-quick-login.png",
      "onboarding-google-drive.png",
      "onboarding-auto-remittance.png",
    ],
    autoSlideshow: true,
    evidence:
      "To support more automated journeys—like automatic prize payout when you win—the product needed bank details on file, identity checks that did not mean retyping ministry passwords every time, timely nudges (paper scans do not auto-claim the same way as fully digital flows), and cloud backup so invoices survive a phone upgrade. Most newcomers never finished those prerequisites in a sensible order; onboarding completion in tests sat around 55%, and people who skipped early setup later hit friction at redemption or on a new device.",
    problem:
      "Back-end automation only helps after the right upfront choices. Manual prize claims and sensitive settings still demanded verification—without biometrics, that meant password friction. Without a linked bank account, automatic remittance could not run and users risked missing claim windows. Paper receipts depend more on reminders, so thin notification coverage amplified missed deadlines. Local-only storage meant switching phones could erase years of passbook history.",
    decision:
      "Reframe first launch as guided setup with one job per step—turn on biometrics (fewer verification loops for claims and settings), connect a bank account for automatic prize transfer, configure push notifications with richer types for deadlines and paper-scan edge cases, and enable cloud backup so records are not trapped on one handset. Each step explains the outcome (automation, fewer missed wins, safe migration), not a generic feature tour.",
    outcome:
      "Onboarding completion rose from 55% to 85%. In follow-up sessions—including older adults and foreign residents—people understood why each step mattered for payouts, reminders, and keeping their invoice history across devices.",
  },
  {
    title: "\u{1F4F7} \u201COpen app \u2192 scan receipt\u201D \u2192 scan anchored on home",
    assetId: "12",
    screenLabel: "homepage",
    assetFile: "homepage-hub.png",
    evidence:
      "In field interviews across four age bands, needs diverged everywhere else—but one behavior was universal: the first thing people wanted after launch was to scan a paper invoice. In the legacy layout, scan lived one or two taps away from the visual center, so users hunted before they could act.",
    problem:
      "The interface did not match the dominant mental model: scanning is the front door, not a buried utility.",
    decision:
      "Lock the scan control to the primary focal area on home—always visible, never hidden behind personalization or secondary promos.",
    outcome:
      "Scan & prize tasks reached 92% success—the strongest task in the battery—with a median completion time of about 40 seconds.",
  },
  {
    title: "\u{2699}\u{FE0F} Opposite density needs \u2192 customizable home sections",
    assetId: "03",
    screenLabel: "Settings / feature overview",
    assetFiles: [
      "settings-homepage-display.png",
      "settings-membership-card.png",
    ],
    evidence:
      "This was the hardest tension in the whole system: silver users asked for the sparsest possible home so they could find one or two actions, while younger users wanted winning invoices and spending history surfaced immediately. Two credible audiences, mutually exclusive defaults.",
    problem:
      "A single static layout would always betray one segment—either “too empty” or “too noisy.”",
    decision:
      "Add settings toggles for optional home modules (e.g., spending analytics, win alerts, campaign tiles). Core rails—scan and the invoice passbook—stay fixed and cannot be turned off.",
    outcome:
      "One national app could flex to very different habits without designing a cluttered compromise—a level of end-user control that is uncommon in government-grade mobile services.",
  },
];

const FINAL_SOLUTION_SCREENS: {
  id: string;
  title: string;
  assetFile?: string;
  assetFiles?: string[];
}[] = [
  { id: "01", title: "消費分析 · Spending insights" },
  { id: "02", title: "會員卡管理 · Membership cards" },
  {
    id: "03",
    title: "功能總覽 · Settings overview",
    assetFiles: [
      "settings-homepage-display.png",
      "settings-membership-card.png",
    ],
  },
  { id: "04", title: "載具歸戶 · Carrier binding" },
  { id: "05", title: "領獎資料 · Prize claim info" },
  { id: "06", title: "捐贈發票 · Donation" },
  { id: "07", title: "減碳存摺分享 · Carbon passbook share" },
  {
    id: "08",
    title:
      "首次設定 · Guided setup (biometrics, bank, notifications, cloud backup)",
    assetFiles: [
      "onboarding-notifications.png",
      "onboarding-quick-login.png",
      "onboarding-google-drive.png",
      "onboarding-auto-remittance.png",
    ],
  },
  { id: "09", title: "我要領獎安全驗證 · Redeem security check" },
  { id: "10", title: "發票存摺 · Invoice passbook" },
  { id: "11", title: "發票明細 · Receipt detail" },
  { id: "12", title: "首頁 · homepage", assetFile: "homepage-hub.png" },
  {
    id: "13",
    title: "登入 · Face ID / quick verification",
    assetFile: "face-id-quick-verification.png",
  },
  { id: "14", title: "末三碼對獎 · Last-three-digit match" },
  { id: "15", title: "宣導專區 · Events & promos" },
  { id: "16", title: "查看中獎發票 · Winning invoices" },
  { id: "17", title: "掃描紙本發票 · Paper receipt scan" },
  { id: "18", title: "通知中心 · Notifications" },
];

function KeyOutcomePhoneFigures({
  row,
}: {
  row: (typeof KEY_OUTCOME_ROWS)[number];
}) {
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
        <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6">
            <span>Case Study</span>
            <span className="text-zinc-600">·</span>
            <span>Public Service</span>
            <span className="text-zinc-600">·</span>
            <span>Mobile App</span>
          </div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-4xl">
            Reimagining Taiwan&apos;s e-Invoice experience: guided onboarding,
            lottery prize redemption &amp; eco-friendly engagement
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-3xl">
            End-to-end redesign of the Ministry of Finance Cloud Invoice App—
            combining research, accessibility standards, and modern design
            practices so the service feels faster, more inclusive, and more
            trustworthy.
          </p>

          <div className="mt-8">
            <WideFigure
              borderless
              src={ASSET("before-after-overview.png")}
              alt="Before and after overview of the e-invoice app redesign"
            />
          </div>

          <div className="mt-8">
            <CaseStudyAtAGlance items={AT_A_GLANCE_ITEMS} />
          </div>

          <div className="mt-8 space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Impact summary
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:max-w-2xl">
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Usability testing
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  ~88% task success · ages 18–70+
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Login success
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  68% → 92%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CaseStudyScanSummary items={E_INVOICE_SCAN_SUMMARY} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#key-outcomes"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-100/95 transition hover:border-emerald-400/45 hover:bg-emerald-500/15"
            >
              Key outcomes (research → UI)
              <span aria-hidden className="text-emerald-300/90">
                ↓
              </span>
            </a>
            <a
              href="#final-solution-screens"
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/35 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-400/45 hover:bg-violet-500/15"
            >
              Jump to final solutions
              <span aria-hidden className="text-violet-400/90">
                ↓
              </span>
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
                Increasing login success
              </p>
              <p className="mt-2">
                <span className={M_HERO}>68% → 92%</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Biometric login and in-app password recovery to reduce login
                friction—helping elderly and visually impaired users log in
                independently.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
                Boosting onboarding completion
              </p>
              <p className="mt-2">
                <span className={M_HERO}>+30%</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Guided first-time setup for an automation-ready path: biometrics
                (less password friction when claiming or changing settings), bank
                account (automatic prize payout), richer push notifications (especially
                when paper scans cannot auto-claim), and cloud backup when switching
                phones.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
                Reducing missed prize redemptions
              </p>
              <p className="mt-2">
                <span className={M_HERO}>−70%</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Clear countdown timers, prize status, and redemption deadlines—
                plus real-time push notifications—to reduce missed redemptions.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
                Task success across ages
              </p>
              <p className="mt-2">
                <span className={M_HERO}>88%</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Usability testing with users aged 18–70+, including visually
                impaired participants—refining scanning, donation, and
                redemption flows.
              </p>
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout toc={E_INVOICE_TOC}>
        <section
          id="project-background"
          className="max-w-3xl scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            01 · Project background
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Why the Cloud Invoice App needed a redesign
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            In Taiwan, every purchase comes with an invoice. For years, people
            collected stacks of paper receipts and checked them for the
            government&apos;s famous &quot;invoice lottery.&quot; Exciting as it was,
            the system also created paper waste and made finances harder to
            manage. To address this, the Ministry of Finance (MoF) launched the
            Cloud Invoice App—a mobile tool for citizens to manage invoices
            digitally. The app makes it possible to store and organize electronic
            invoices, check government lottery numbers instantly, donate
            invoices to charity with one tap, and reduce reliance on paper while
            supporting sustainability.
          </p>
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <Image
              src="/case-studies/e-invoice/photo-invoice-receipts.png"
              alt="Paper receipts commonly collected for Taiwan's invoice lottery"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Taiwan&apos;s Ministry of Finance Cloud Invoice App is the official
            way roughly 20 million people manage e-invoices and join the Uniform
            Invoice lottery—yet it sits at only about{" "}
            <span className="font-medium text-zinc-200">2.8 stars</span> on the App
            Store.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The issue wasn&apos;t just dated UI. Interviews and testing showed the
            real blockers: older adults couldn&apos;t use the app independently,
            foreign residents couldn&apos;t parse Chinese labels, and people
            abandoned sign-in at forgot-password. A service built for everyone was
            still shutting out those who needed it most.
          </p>
          <p className="border-l-2 border-emerald-500/40 pl-4 text-sm leading-relaxed text-zinc-400">
            <span className="font-medium text-zinc-200">Design goal:</span>{" "}
            People
            aged 18 through 70+, including visually impaired users, should complete
            core tasks on their own—no walkthrough required, no need for family to
            step in.
          </p>
        </section>

        <ProblemPersonasBlock />

        <section
          id="key-outcomes"
          className="scroll-mt-28 space-y-14 sm:scroll-mt-32 max-w-6xl"
        >
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest text-emerald-400/90">
              From evidence to interface
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
              Four problems we solved—end to end
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Each block follows the same spine:{" "}
              <span className="text-zinc-200">
                real behavior &amp; pain from interviews and moderated tests
              </span>{" "}
              →{" "}
              <span className="text-zinc-200">the UX failure mode I was seeing</span>{" "}
              →{" "}
              <span className="text-zinc-200">the product decision</span> →{" "}
              <span className="text-zinc-200">what moved in the metrics</span>. On
              the right, final UI from the shipped set—one screen or a short sequence
              when the flow needed more than a single frame.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {KEY_OUTCOME_ROWS.map((row) => (
              <article
                key={row.assetId}
                className="grid gap-10 border-t border-zinc-800/90 pt-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12 lg:pt-14"
              >
                <div className="min-w-0 space-y-6">
                  <h3 className="text-lg font-semibold leading-snug text-zinc-100 sm:text-xl">
                    {row.title}
                  </h3>
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
                    <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.07] px-4 py-3 sm:px-5 sm:py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-200/95">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-100">
                        {row.outcome}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    row.autoSlideshow
                      ? "flex justify-center lg:pt-1"
                      : "flex justify-center lg:justify-end lg:pt-1"
                  }
                >
                  <KeyOutcomePhoneFigures row={row} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="final-solution-screens"
          className="scroll-mt-28 space-y-10 max-w-6xl"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            07 · Final solution screens
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            High-fidelity UI across core tasks
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Selected key functional screens—focused on the flows that matter most.
          </p>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {FINAL_SOLUTION_SCREENS.flatMap((item) => {
              const files =
                item.assetFiles ??
                [item.assetFile ?? `solution-final-${item.id}.png`];
              return files.map((file, i) => (
                <WideFigure
                  key={`${item.id}-${i}`}
                  borderless
                  src={ASSET(file)}
                  alt={
                    files.length > 1
                      ? `${item.title} (${i + 1}/${files.length})`
                      : item.title
                  }
                />
              ));
            })}
          </div>
        </section>

        <section
          id="impact-results"
          className="max-w-3xl scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Impact &amp; results
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Other measurable wins
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The four outcome stories above cover login, onboarding, scan-first home,
            and modular density. Additional lifts from the same research cycle are
            summarized here so the full picture stays in one place.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">
                Task success (prototype)
              </p>
              <p className="mt-2 text-2xl font-semibold tabular-nums text-emerald-200">
                <span className={M_TXT}>~88%</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Across 12 participants and five core tasks—strongest on scan &amp;
                prize flows after the home and guidance iterations.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">
                Missed prize redemptions
              </p>
              <p className="mt-2 text-2xl font-semibold tabular-nums text-emerald-200">
                <span className={M_TXT}>−70%</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Clearer deadlines, status, and push alerts so people do not learn
                about a win too late.
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Spending analysis, high-contrast visuals, and accessibility-oriented
            patterns (e.g., VoiceOver annotations) further supported repeat use—
            especially for younger budgeters and low-vision participants.
          </p>
        </section>

        <DesignJourneyCollapsible>
        <section
          id="competitor-insights"
          className="max-w-6xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            03 · Competitor insights &amp; design process
          </span>
          <h2 className="max-w-3xl text-xl font-semibold text-zinc-100">
            What the market already proved—before IA and UI
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
            Quick read across MoF, two strong third parties, and LINE: where trust
            sits, where habit and polish live, and what we could borrow without
            breaking ministry constraints.
          </p>
          <CompetitorLandscapeTable />
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
            <span className="text-zinc-200">How this shaped the work:</span> I
            borrowed clear onboarding patterns from LINE, scan-and-login pacing and
            spending views from strong third parties, and data plus sensory feedback
            ideas from high-rated apps—then folded everything back into
            accessibility rules, ministry policy, and what engineering could ship.
          </p>
        </section>

        <section
          id="accessibility"
          className="max-w-4xl scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h3 className="text-lg font-semibold text-zinc-100">
            Accessibility work — VoiceOver &amp; screen reader
          </h3>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            <div className="min-w-0 flex-1 space-y-3 text-zinc-300 leading-relaxed">
              <p>
                I interviewed blind participants and recorded VoiceOver sessions
                on the legacy app—unclear focus feedback, controls not exposed as
                buttons, and static copy read as interactive.
              </p>
              <p>
                I annotated components for alt text, reading order, and action vs.
                information, and paired with engineering for implementation. The
                revised build is planned for Taiwan&apos;s accessibility
                certification pathway (2026).
              </p>
            </div>
            <div className="mx-auto w-full max-w-[280px] shrink-0 lg:mx-0">
              <div
                className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-black border border-zinc-700"
              >
                <iframe
                  src={YOUTUBE_A11Y_EMBED}
                  title="VoiceOver accessibility research — e-invoice app"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="mt-2 text-center text-[11px] text-zinc-500">
                Short clip ·{" "}
                <a
                  href={YOUTUBE_A11Y_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 underline hover:text-zinc-200"
                >
                  Open on YouTube
                </a>
              </p>
            </div>
          </div>
        </section>

        <section
          id="business-constraints"
          className="max-w-3xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <h3 className="text-lg font-semibold text-zinc-100">
            Business constraints
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
        </section>

        <section
          id="functional-map"
          className="max-w-4xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <h3 className="text-lg font-semibold text-zinc-100">Functional map</h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            A functional map aligned the team on scope: how login, home,
            notifications, scan-and-win, and downstream flows connect before hi-fi
            polish.
          </p>
          <WideFigure
            borderless
            src={ASSET("functional-map-v0.png")}
            alt="Functional map v0.0 — information architecture of the e-invoice app"
            caption="Functional map v0.0 · Functional_map_v0.0 (export)."
          />
        </section>

        <section
          id="page-flow-design"
          className="max-w-5xl scroll-mt-28 space-y-12 sm:scroll-mt-32"
        >
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              05 · Page flow, UI direction &amp; design system
            </span>
            <h2 className="text-xl font-semibold text-zinc-100">
              From flow logic to visual language
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Page flows in Figma mapped login, invoice management, and redemption
              so navigation gaps surfaced before visual polish. The direction below
              locks the first approved style route:{" "}
              <span className="text-zinc-200">Friendly lifestyle</span>—grounded in
              interviews and client review.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="min-w-0 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400/90">
                Concept development
              </p>
              <h3 className="text-lg font-semibold text-zinc-100">
                Moodboard &amp; style directions · 01 Friendly lifestyle
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                We stayed close to daily life: a multi-color system where{" "}
                <span className="text-zinc-200">hue signals function</span>, so core
                tasks stay recognizable at a glance. The goal was a friendly,
                low-friction feel that still reads as a trustworthy government
                service—not decorative noise.
              </p>
              <p className="text-zinc-300 leading-relaxed">
                That balance supports faster scanning, clearer hierarchy, and less
                cognitive load when people are moving (checkout lines, transit,
                one-handed use).
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
            <h3 className="text-lg font-semibold text-zinc-100">
              Mockups &amp; design system
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              High-fidelity work used the iOS / iPadOS UI Kit as a baseline—native
              components, predictable spacing, and patterns that engineering could map
              quickly to production constraints.
            </p>
          </div>
        </section>

        <section
          id="testing"
          className="max-w-6xl scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              06 · Testing &amp; iterations
            </span>
            <h2 className="text-xl font-semibold text-zinc-100">
              Prototype testing &amp; key refinements
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              I conducted usability tests using one-on-one observation. Each
              participant completed key tasks while I tracked completion rates, errors,
              and satisfaction. Across 12 diverse participants, we reached an{" "}
              <span className={M_TXT}>88%</span> overall success rate. Sessions surfaced
              pain points—especially login verification and form
              entry—which became actionable opportunities to improve accessibility and
              efficiency before launch.
            </p>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Five core test tasks
            </h3>
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
              <h4 className="text-sm font-semibold text-zinc-100">
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
            <h3 className="mt-3 text-lg font-semibold leading-snug text-zinc-100 sm:text-xl">
              <span aria-hidden>{"\u{1F517}"}</span> Carrier binding → scenario
              explanation &amp; smart support
            </h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Carrier binding tested at{" "}
              <span className={M_TXT}>67%</span>—the weakest of the five core tasks.
              The fix was not primarily &quot;simpler taps&quot;; it was helping people
              understand why the step matters.
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
        </section>

        </DesignJourneyCollapsible>

        <section
          id="reflection"
          className="max-w-3xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <h2 className="text-xl font-semibold text-zinc-100">
            Reflection &amp; learnings
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            I learned how differently diverse users interact with the app—from
            tech-savvy younger users to elderly users with accessibility needs.
            Prioritizing core functions like quick barcode access, scanning, and prize
            redemption is essential. Multi-sensory feedback and guided onboarding help
            users feel confident and independent.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            If I had more time, I would explore deeper personalization—adaptive
            interfaces for different ages, tech skills, and accessibility needs—and
            expand testing with more diverse users to catch edge cases and optimize
            every interaction.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            This project strengthened my skills in user research, empathy-driven
            design, and iterative prototyping. Good UX/UI doesn&apos;t only make
            apps usable—it makes them inclusive, trustworthy, and enjoyable for
            everyone.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            We saw firsthand how small frustrations—forgotten passwords, complex
            redemption, unclear navigation—shape daily life. By redesigning with
            simplicity, accessibility, and guidance at the core, the experience
            became smoother and faster. Looking forward, deeper backend integration
            and connections with other financial and loyalty systems could make the
            app even smarter and more efficient. Thoughtful design doesn&apos;t only
            look good—it changes how people interact with technology in meaningful
            ways.
          </p>
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <Image
              src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
              alt="Stakeholder meeting during the e-Invoice redesign project"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </section>

        <section
          id="figma-resources"
          className="max-w-3xl scroll-mt-28 space-y-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:scroll-mt-32 sm:p-8"
        >
          <p className="text-sm font-medium text-zinc-200">
            Want to review the source files directly?
          </p>
          <p className="mt-2 text-sm text-zinc-400 max-w-3xl">
            Open the Figma files below to see full wireflows, page logic, and
            high-fidelity mockups in one place.
          </p>
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
        </section>

        <section className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="e-invoice-app" />
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

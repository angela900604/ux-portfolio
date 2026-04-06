import Link from "next/link";
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

/** Final solution mockups; solution-26 export omitted (did not match caption). */
const FINAL_SOLUTION_SCREENS: { n: number; title: string }[] = [
  { n: 17, title: "消費分析 · Spending insights" },
  { n: 18, title: "會員卡管理 · Membership cards" },
  { n: 19, title: "功能總覽 · Settings overview" },
  { n: 20, title: "載具歸戶 · Carrier binding" },
  { n: 21, title: "領獎資料 · Prize claim info" },
  { n: 22, title: "捐贈發票 · Donation" },
  { n: 23, title: "減碳存摺分享 · Carbon passbook share" },
  { n: 24, title: "新手教學 · First-run tutorial" },
  { n: 25, title: "我要領獎安全驗證 · Redeem security check" },
  { n: 27, title: "發票存摺 · Invoice passbook" },
  { n: 28, title: "發票明細 · Receipt detail" },
  { n: 29, title: "首頁 · Home hub" },
  { n: 30, title: "登入 · Face ID / quick login" },
  { n: 31, title: "末三碼對獎 · Last-three-digit match" },
  { n: 32, title: "宣導專區 · Events & promos" },
  { n: 33, title: "查看中獎發票 · Winning invoices" },
  { n: 34, title: "掃描紙本發票 · Paper receipt scan" },
  { n: 35, title: "通知中心 · Notifications" },
];

export default function EInvoiceCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-16 sm:py-24">
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
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Timeline</dt>
              <dd className="text-zinc-200">Feb – Sep 2025 (8 months)</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">UX/UI Designer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">
                Project type
              </dt>
              <dd className="text-zinc-200">
                End-to-end mobile app redesign · Government service app
              </dd>
            </div>
          </dl>

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
                Guided first-time onboarding introducing biometric login, prize
                redemption, and cloud backup—reducing confusion and improving
                initial setup completion.
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

          <div className="mt-12">
            <WideFigure
              src={ASSET("before-after-overview.png")}
              alt="Before and after overview of the e-invoice app redesign"
              caption="Before / after · redesign overview (export)."
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        <section className="space-y-6 max-w-3xl">
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
          <p className="text-zinc-300 leading-relaxed">
            Over time, the app showed clear pain points: slow, unstable
            performance that reduced trust; complicated steps and small text that
            frustrated elderly users; language and navigation issues for foreign
            nationals; and a cluttered interface that overwhelmed younger users.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            This project set out to redesign the Cloud Invoice App with people at
            the center. The goal was an app that is faster and easier to use;
            inclusive for seniors, people with disabilities, and foreign users;
            and reliable and trustworthy—strengthening public confidence in
            digital government services.
          </p>
        </section>

        <section className="space-y-6 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Problem, client goals &amp; user goals
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Convenience, trust, and adoption
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The Cloud Invoice App was designed to make managing receipts and
            participating in lottery draws easier—while promoting paperless
            transactions for environmental and efficiency benefits. However,
            many users still found the app confusing, slow, or difficult to
            navigate, which limited adoption and impact. The Ministry of Finance
            faces two main challenges: ensuring citizens can easily use the app,
            and encouraging adoption of digital receipts and donations. When users
            struggle, the app fails to deliver on its promise of convenience and
            trust.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">Client goals</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-zinc-300 marker:text-zinc-500">
                <li>
                  Build trust and credibility in a government digital service.
                </li>
                <li>
                  Increase adoption of cloud invoices over paper receipts—supporting
                  environmental sustainability.
                </li>
                <li>
                  Deliver a seamless, inclusive experience for all citizens—
                  regardless of age, ability, or language.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">User goals</h3>
              <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-zinc-300 marker:text-zinc-500">
                <li>Quickly check invoice lottery results.</li>
                <li>Track and manage receipts efficiently.</li>
                <li>Easily donate invoices to charities.</li>
                <li>
                  Use an app that is simple, reliable, and intuitive—without
                  confusion or frustration.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6 max-w-4xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            User journey map
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            From App Store reviews to interview questions
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            I used a user journey map to analyze App Store reviews, uncover pain
            points across usage stages, and generate targeted interview questions
            to better understand users&apos; needs with the current app.{" "}
            <span className="text-zinc-200">
              Data source: App Store user reviews in the past year (2024/3 –
              2025/3).
            </span>
          </p>
          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="min-w-[640px] w-full text-left text-sm">
              <thead className="bg-zinc-900/80 text-xs uppercase tracking-wider text-zinc-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Stage</th>
                  <th className="px-4 py-3 font-medium">Goal</th>
                  <th className="px-4 py-3 font-medium">Pain points</th>
                  <th className="px-4 py-3 font-medium">
                    Opportunities / design suggestions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                <tr className="align-top">
                  <td className="px-4 py-4 text-zinc-200">
                    <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-amber-100/95">
                      Before shopping
                    </span>{" "}
                    — first download
                  </td>
                  <td className="px-4 py-4">
                    Understand the app&apos;s{" "}
                    <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-emerald-200/95">
                      functions &amp; advantages
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      High learning curve
                    </span>
                    ;{" "}
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      carrier binding fails
                    </span>{" "}
                    often;{" "}
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      prize claim &amp; bank setup
                    </span>{" "}
                    hard to find; invoice history unclear
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-violet-200/95">
                      Clearer tutorials
                    </span>
                    ; simplify{" "}
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-violet-200/95">
                      registration &amp; binding
                    </span>
                    ; improve interface
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 text-zinc-200">
                    <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-amber-100/95">
                      Before shopping
                    </span>{" "}
                    — registration &amp; carrier binding
                  </td>
                  <td className="px-4 py-4">
                    Successfully{" "}
                    <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-emerald-200/95">
                      bind carrier
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      Slow startup
                    </span>
                    ;{" "}
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      barcode scan fails
                    </span>
                    ; functions scattered; frequent logouts; manual refresh
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-violet-200/95">
                      Error hints
                    </span>
                    ;{" "}
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-violet-200/95">
                      stability &amp; maintenance
                    </span>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 text-zinc-200">
                    <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-amber-100/95">
                      During shopping
                    </span>{" "}
                    — carrier barcode
                  </td>
                  <td className="px-4 py-4">
                    Quickly display{" "}
                    <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-emerald-200/95">
                      carrier barcode
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      Slow at checkout
                    </span>
                    ; barcode sometimes fails
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-violet-200/95">
                      Speed &amp; reliability
                    </span>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 text-zinc-200">
                    <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-amber-100/95">
                      After shopping
                    </span>{" "}
                    — invoices / draw / claim
                  </td>
                  <td className="px-4 py-4">
                    Manage invoices &amp;{" "}
                    <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-emerald-200/95">
                      check prizes quickly
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    Hard to find invoices; no batch edit;{" "}
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      scanning limited
                    </span>
                    ;{" "}
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      prize alerts hidden
                    </span>
                    ; not accessible for{" "}
                    <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-rose-200/95">
                      visually impaired
                    </span>
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-violet-200/95">
                      Invoice display
                    </span>
                    ;{" "}
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-violet-200/95">
                      integrated scanning
                    </span>{" "}
                    &amp; management
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-6 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            02 · Understanding the problem
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Interview findings across demographics
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Interviews revealed that users across age groups face challenges with
            app speed, navigation, and clarity. Younger users value speed and
            aesthetics; middle-aged users seek convenience and integrated features;
            older users need simple, intuitive interfaces. Common pain points
            include forgotten passwords, unclear onboarding, slow prize redemption,
            and limited spending insights.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300 marker:text-zinc-500">
            <li>
              <span className="text-zinc-200">Younger (18–30):</span> slow loading,
              cumbersome navigation, unclear spending categories.
            </li>
            <li>
              <span className="text-zinc-200">Middle-aged (31–50):</span> confusing
              notifications, slow barcode access, need for diverse login options.
            </li>
            <li>
              <span className="text-zinc-200">Silver generation (51+):</span> complex
              navigation, unclear instructions, difficulty with scanning and
              redemption.
            </li>
            <li>
              <span className="text-zinc-200">Foreign nationals:</span> unclear
              function labels, slow performance, difficulty understanding online
              donation and redemption.
            </li>
          </ul>
          <p className="text-zinc-300 leading-relaxed">
            Cross-demographic insights: forgotten passwords and verification codes
            are a major frustration—users need better onboarding and multi-language
            support. Spending analysis and integration with budgeting features are
            desired. Interface design should balance simplicity, clarity, and speed.
            Online prize redemption and notifications are underutilized due to
            unclear processes.
          </p>
          <WideFigure
            src={ASSET("interview-field-20250321-1330-copy.png")}
            alt="Field interview session with participants at a startup hub"
            caption="Field research · 20250321_1330 · startup hub session (file: 20250321_1330____2___copy — duplicate export)."
          />
        </section>

        <section className="max-w-4xl space-y-6">
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

        <section className="max-w-5xl space-y-10">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
              User personas
            </h3>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
              Four age-and-context archetypes from MoF research boards (18–30,
              31–50, 51+, and foreign residents), plus a visually impaired persona
              from accessibility sessions—each with goals, pain points, and a
              portrait aligned to those sources.
            </p>
          </div>

          <div className="grid max-w-4xl grid-cols-1 gap-8">
            <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
              <div className="shrink-0 sm:w-[42%]">
                <PortraitTile
                  src={ASSET("persona-portrait-01.png")}
                  alt="Portrait for Persona 01, 18–30 young professional"
                  className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
                  Persona 01 · 18–30 · Young professionals
                </p>
                <p className="font-medium text-zinc-100">
                  宜庭 · 26 · Taiwan · Planner / creative
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-300">Tech:</span> High digital fluency—
                  iOS, wearables, widgets &amp; Wallet for carrier barcodes; tracks
                  spending and promos; uses third-party invoice tools for draws.
                </p>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Pain points</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Busy UI; slow cold start and intrusive ads before the barcode</li>
                    <li>Carrier binding still feels “browser-heavy” and fragmented</li>
                    <li>Merchant names inconsistent in history—hard to search wins</li>
                    <li>Forgets the MoF verification code; weak win / remittance alerts</li>
                    <li>Paper invoice scanning fails often</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Goals</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Cleaner visual style; barcode-first home</li>
                    <li>Accurate spending search &amp; categories</li>
                    <li>Stronger win &amp; payout notifications</li>
                    <li>Biometrics / pattern login; stable scan</li>
                  </ul>
                </div>
                <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
                  &ldquo;I move fast—I need the carrier barcode immediately. I care
                  how the UI looks, track spend for habits and deals, but waiting on
                  a slow app or closing ads just to copy a barcode drives me nuts.&rdquo;
                </p>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
              <div className="shrink-0 sm:w-[42%]">
                <PortraitTile
                  src={ASSET("persona-portrait-02.png")}
                  alt="Portrait for Persona 02, 31–50 middle-aged professional"
                  className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
                  Persona 02 · 31–50 · Established professionals
                </p>
                <p className="font-medium text-zinc-100">
                  David · 41 · Taiwan · Service PM
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-300">Tech:</span> High digital usage—
                  mobile payment apps (e.g. LINE Pay, JKOPAY, Taiwan Pay), widgets,
                  Apple Wallet / printed barcodes; shops online &amp; offline; checks
                  promos and rough monthly spend.
                </p>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Pain points</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Often forgets the MoF app password / verification code</li>
                    <li>Win emails feel wordy; wants clearer push when numbers drop</li>
                    <li>Needs rock-solid stability—can&apos;t wait on checkout load</li>
                    <li>Wants better consumption breakdown (categories feel wrong)</li>
                    <li>Skips opening the app at the register if it feels slow</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Goals</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Biometrics &amp; quick login; stronger win reminders</li>
                    <li>Smoother performance &amp; reward / streak mechanics</li>
                    <li>
                      Real <span className="text-zinc-300">consumption analysis</span>{" "}
                      tied to invoices
                    </li>
                    <li>Faster barcode surface at payment</li>
                  </ul>
                </div>
                <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
                  &ldquo;My phone is my second wallet—I want payments, invoices, and
                  membership in one flow. At the counter I can&apos;t afford a sluggish
                  app; I also want to see where my money goes, not fight the UI.&rdquo;
                </p>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
              <div className="shrink-0 sm:w-[42%]">
                <PortraitTile
                  src={ASSET("persona-portrait-03.png")}
                  alt="Portrait for Persona 03, 51+ silver generation"
                  className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
                  Persona 03 · 51+ · Silver generation
                </p>
                <p className="font-medium text-zinc-100">
                  Mei-Ling · 68 · Taiwan · Retired nurse
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-300">Tech:</span> Low digital literacy—
                  cash &amp; cards; long habit of donating paper invoices; prize
                  checks and in-store claims; needs guidance for anything beyond
                  basics.
                </p>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Pain points</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Apps feel like a maze—unclear next step, small type &amp; taps</li>
                    <li>Monochrome or crowded screens hide primary actions</li>
                    <li>Wants transparency when donating—trust that help reaches people</li>
                    <li>Forgets MoF verification code; in-store small-prize claims feel tedious</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Goals</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Large text, color-coded main tasks, obvious help</li>
                    <li>Simple donation path with clear org info</li>
                    <li>Easier prize check &amp; claim—including online tutorials</li>
                  </ul>
                </div>
                <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
                  &ldquo;This app is like a labyrinth—I don&apos;t know the next step
                  or how to exit. I want to donate paper invoices with confidence and
                  understand what I&apos;m tapping.&rdquo;
                </p>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
              <div className="shrink-0 sm:w-[42%]">
                <PortraitTile
                  src={ASSET("persona-portrait-04.png")}
                  alt="Portrait for Persona 04, foreign resident / animator"
                  className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
                  Persona 04 · Foreign resident · Heavy mobile user
                </p>
                <p className="font-medium text-zinc-100">
                  Alex · 29 · Malaysia / Taiwan · Animator
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-300">Tech:</span> Heavy iOS use; mobile
                  payments &amp; member apps; home-screen widgets for barcodes;
                  tracks monthly categories; wants one-handed flows and clear visual
                  hierarchy (Chinese is not his first language).
                </p>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Pain points</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Didn&apos;t know paper receipts could be claimed online at first</li>
                    <li>Busy or “ugly” layouts; dense copy slows scanning</li>
                    <li>Ambiguous icons raise cognitive load for non-native readers</li>
                    <li>Slow cold start or noisy ads before core tasks</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Goals</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Short tutorials highlighting online prize claim</li>
                    <li>Cleaner visuals &amp; icon system that bridges language gaps</li>
                    <li>Integrated bookkeeping / spend view with invoices</li>
                    <li>Faster launch; barcode copy &amp; display in more contexts</li>
                  </ul>
                </div>
                <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
                  &ldquo;Classmates got me onto cloud invoices—I dislike trekking to a
                  store to claim. Give me a calm interface and obvious icons; long
                  paragraphs are exhausting when Chinese isn&apos;t my first language.&rdquo;
                </p>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 sm:flex-row">
              <div className="shrink-0 sm:w-[42%]">
                <PortraitTile
                  src={ASSET("persona-portrait-vi-session.png")}
                  alt="Portrait for persona Chen, visually impaired participant in a research session"
                  className="sm:rounded-l-2xl sm:rounded-r-none rounded-t-2xl sm:rounded-t-none"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 p-5 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/95">
                  Persona 05 · Visually impaired user
                </p>
                <p className="font-medium text-zinc-100">
                  陳老師 · Retired elementary teacher · Severe low vision
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-300">Tech:</span> Macular degeneration—
                  mostly light and shadow; uses Android with family help; avoids
                  payment barcodes when she can&apos;t confirm what will be scanned.
                </p>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Pain points</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Cannot operate most apps independently—feels helpless</li>
                    <li>Fear of scams and wrong barcode scans</li>
                    <li>Screen reader prompts feel overwhelming</li>
                    <li>Needs very large, high-contrast targets to see anything</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500">Goals</p>
                  <ul className="mt-1 list-disc pl-4 text-zinc-400 marker:text-zinc-600">
                    <li>Fixed button positions and predictable layout</li>
                    <li>High contrast, large type, minimal noise</li>
                    <li>Clear voice guidance and calmer screen-reader behavior</li>
                    <li>Distinct success sounds; caregiver-friendly setup flows</li>
                  </ul>
                </div>
                <p className="border-l-2 border-violet-500/50 pl-3 italic text-zinc-300">
                  &ldquo;The words and buttons are unclear. I have to ask my daughter
                  every time for e-invoice—I&apos;m afraid the clerk will scan the
                  wrong barcode. I hope the app can be voice-controlled so I can do
                  more myself.&rdquo;
                </p>
              </div>
            </article>
          </div>

          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Users want convenience, clarity, and control—but many face obstacles
            that reduce trust. Accessibility and clearer spending insight remain
            cross-cutting themes.
          </p>
        </section>

        <section className="space-y-5 max-w-3xl">
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

        <section className="space-y-6 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            03 · Competitor insights &amp; design process
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            What we learned from leading invoice apps
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            When redesigning the Ministry of Finance Uniform Invoice App, we looked
            at leading invoice apps to see how they solve real user problems. Each
            competitor offered valuable lessons—some features to emulate, others to
            improve upon.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                1. LINE Invoice Manager — welcoming &amp; guided onboarding
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Illustrated onboarding, step-by-step instructions, and functional
                hints. Pull-to-hide/expand barcode widgets save space; spending
                records stay easy to scroll.{" "}
                <span className="text-zinc-200">Differentiation for us:</span>{" "}
                integrate onboarding within the official Ministry app with
                multi-language support and real-time tips—especially for online prize
                redemption and donation.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                2. Cloud Invoice — quick access &amp; efficient scanning
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Multiple login options (Google, Facebook, Apple ID, biometrics);
                keyword search, category/date filters, swipe navigation; lottery
                countdown timers.{" "}
                <span className="text-zinc-200">Differentiation for us:</span> embed
                biometric login and password recovery directly in-app; add smart,
                contextual guidance for prize redemption.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <h3 className="text-sm font-semibold text-zinc-100">
                3. Invoice Locker — accessibility, insights &amp; multi-device
              </h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Scan across devices, copy barcodes quickly, view spending as charts
                over time; audio feedback for visually impaired users.{" "}
                <span className="text-zinc-200">Differentiation for us:</span> full
                accessibility compliance (VoiceOver/TalkBack, sensory feedback,
                focus management); comprehensive multi-device support within the
                Ministry app.
              </p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            Takeaways: welcome first-time users with guided onboarding; enable fast,
            flexible access with multi-login and smooth scanning; support
            accessibility and engagement through sensory feedback, analytics, and
            rewards—within public-sector constraints.
          </p>
        </section>

        <section className="space-y-5 max-w-4xl">
          <h3 className="text-lg font-semibold text-zinc-100">Functional map</h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            A functional map aligned the team on scope: how login, home,
            notifications, scan-and-win, and downstream flows connect before hi-fi
            polish.
          </p>
          <WideFigure
            src={ASSET("functional-map-v0.png")}
            alt="Functional map v0.0 — information architecture of the e-invoice app"
            caption="Functional map v0.0 · Functional_map_v0.0 (export)."
          />
        </section>

        <section className="max-w-5xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              04 · Page flow, UI direction &amp; design system
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

        <section className="space-y-6 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            05 · Testing &amp; iterations
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
              <span className="text-zinc-200">What didn&apos;t:</span> onboarding too
              long (often skipped); multi-language prompts unclear; prize redemption
              steps confusing.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
            <WideFigure
              src={ASSET("prototype-matrix.png")}
              alt="Prototype task success matrix spreadsheet"
              caption="Task matrix / pass-fail by participant (export)."
            />
            <WideFigure
              src={ASSET("prototype-task-notes.png")}
              alt="Session notes and task completion tracking"
              caption="Session notes &amp; completion log (export)."
            />
          </div>
        </section>

        <section className="space-y-5 max-w-3xl">
          <h3 className="text-lg font-semibold text-zinc-100">
            Donation flow — before &amp; after
          </h3>
          <p className="text-zinc-300 leading-relaxed">
            For invoice donation we identified two scenarios: donating from the
            phone by selecting invoices from the current period and choosing an
            organization; and on-site events where users scan a QR code and must
            donate a required number of invoices to receive a prize.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            <span className="text-zinc-200">Before:</span> The flow prioritized speed.
            A &quot;Quick Select 5&quot; button instantly selected invoices; with only
            one invoice available, the app auto-selected it, updated the Next button
            label (&quot;1 invoice selected&quot;), and moved users straight to
            organization selection—then to the &quot;Donated&quot; list. That matched
            younger users&apos; expectations for one-tap completion.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            <span className="text-zinc-200">After:</span> If only one invoice is
            available and the user taps &quot;Quick Select 5,&quot; the system shows a
            confirmation modal with how many invoices were actually selected. After
            confirmation, Quick Select 5 disables, the invoice is visibly checked,
            and the user can proceed with Next. Older adults were the primary
            donation group—they valued reassurance over speed; accidental selections
            felt stressful and irreversible because donations cannot be undone.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            This trade-off optimizes for confidence and error prevention—even if the
            flow is slightly longer for some users—and reflects inclusivity over raw
            efficiency for a national platform.
          </p>
        </section>

        <section className="space-y-8 max-w-5xl">
          <h3 className="text-lg font-semibold text-zinc-100">
            National-platform challenges — home &amp; redemption iteration
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            We balanced strong visual anchors for older users with a cleaner surface
            for younger users—large, color-led actions for scan and donate, with a
            calmer structure elsewhere. Scan stayed at the top of home by observed
            frequency.
          </p>
          <div className="grid gap-10 sm:grid-cols-3">
            <PhoneMockup
              src={ASSET("iteration-home-01.png")}
              alt="Home screen iteration"
              label="首頁 · Home"
            />
            <PhoneMockup
              src={ASSET("iteration-redeem-01.png")}
              alt="Redeem screen iteration one"
              label="我要領獎 · Redeem"
            />
            <PhoneMockup
              src={ASSET("iteration-redeem-02.png")}
              alt="Redeem screen iteration two"
              label="我要領獎 · Redeem (state)"
            />
          </div>
        </section>

        <section className="space-y-10 max-w-6xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            06 · Final solution screens
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            High-fidelity UI across core tasks
          </h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            挑選較重要的功能頁面呈現。
          </p>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {FINAL_SOLUTION_SCREENS.map((item) => (
              <PhoneMockup
                key={item.n}
                src={ASSET(`solution-${item.n}.png`)}
                alt={item.title}
                label={item.title}
              />
            ))}
          </div>
        </section>

        <section className="space-y-6 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Impact &amp; results
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Measurable benefits for diverse users
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            After implementing improvements from research, competitor analysis, and
            testing, the app delivered measurable benefits—from tech-savvy younger
            users to elderly and visually impaired users. Updates improved usability,
            reduced errors, and increased satisfaction.
          </p>
          <div className="space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-sm font-semibold text-emerald-400/90">
                01 · Reduced errors &amp; frustration
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-200">Pain points:</span> forgotten
                verification codes; switching to external websites for password
                recovery.{" "}
                <span className="text-zinc-200">Solutions:</span> biometric login
                (Face ID, Touch ID) and in-app recovery; embedded &quot;Forgot
                password&quot; workflow.{" "}
                <span className="text-zinc-200">Impact:</span> login success increased
                from <span className={M_TXT}>68%</span> →{" "}
                <span className={M_TXT}>92%</span>; elderly and visually impaired
                users can operate independently; fewer interruptions and frustration.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-sm font-semibold text-emerald-400/90">
                02 · Faster onboarding &amp; learning
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-200">Pain points:</span> high learning
                curve; difficulty understanding layout.{" "}
                <span className="text-zinc-200">Solutions:</span> multi-language
                tutorials and guided prompts; simplified workflows, visual cues,
                contextual guidance.{" "}
                <span className="text-zinc-200">Impact:</span> onboarding completion
                increased from <span className={M_TXT}>55%</span> →{" "}
                <span className={M_TXT}>85%</span>; reduced confusion for foreign
                nationals and elderly users.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-sm font-semibold text-emerald-400/90">
                03 · Improved prize redemption &amp; notifications
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-200">Pain points:</span> missed redemption
                deadlines; no immediate win notifications.{" "}
                <span className="text-zinc-200">Solutions:</span> countdown timers
                and clear status indicators; real-time push and customizable alerts.{" "}
                <span className="text-zinc-200">Impact:</span> missed redemption
                reduced by <span className={M_TXT}>70%</span>; higher trust in the
                official app; users know about winning invoices instantly—less
                reliance on external sources.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-sm font-semibold text-emerald-400/90">
                04 · Higher satisfaction &amp; engagement
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                <span className="text-zinc-200">Features:</span> spending analysis
                with detailed charts and category breakdowns; homepage with large
                buttons and quick access to member barcode and loyalty cards; visual
                &amp; accessibility updates—high-contrast colors, larger fonts,
                multi-sensory feedback.{" "}
                <span className="text-zinc-200">Impact:</span> easier expense
                tracking for budgeting; daily tasks faster and simpler—improving
                repeat engagement; enhanced usability for elderly and visually
                impaired users.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 max-w-3xl">
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
        </section>

        <section className="space-y-5 max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
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

        <section className="border-t border-zinc-800 pt-12">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            ← Back to work
          </Link>
        </section>
      </div>
    </article>
  );
}

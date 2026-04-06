import Image from "next/image";
import Link from "next/link";

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
const R_IMG = "rounded-[20px]";

const YOUTUBE_A11Y_EMBED = "https://www.youtube.com/embed/5ySntQxxINE";

/** Wide figure for diagrams / exports */
function WideFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="space-y-2">
      <div
        className={`overflow-hidden border border-zinc-700/60 bg-zinc-900/30 ${R_IMG}`}
      >
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1350}
          className="h-auto w-full object-contain"
          sizes="(max-width: 1200px) 100vw, 1100px"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-zinc-500 max-w-3xl">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Single phone frame — final solution & iteration shots */
function MobileMockup({
  src,
  alt,
  label,
  hint,
}: {
  src: string;
  alt: string;
  label: string;
  hint?: string;
}) {
  return (
    <figure className="space-y-2">
      <div className="mx-auto max-w-[280px] rounded-[2.35rem] border border-zinc-600/70 bg-zinc-900/90 p-2 shadow-xl shadow-black/50">
        <div
          className={`overflow-hidden bg-zinc-950 ring-1 ring-zinc-800 ${R_IMG}`}
        >
          <Image
            src={src}
            alt={alt}
            width={780}
            height={1688}
            className="h-auto w-full object-cover object-top"
            sizes="280px"
          />
        </div>
      </div>
      <figcaption className="px-1 text-center">
        <p className="text-xs font-medium leading-snug text-zinc-200">{label}</p>
        {hint && (
          <p className="mt-1 text-[11px] leading-snug text-zinc-500">{hint}</p>
        )}
      </figcaption>
    </figure>
  );
}

/**
 * Labels for solution-17 … solution-35 (export batch).
 * Titles follow on-screen function where identifiable; hints note source file id.
 */
const FINAL_SOLUTION_SCREENS: { n: number; title: string; fileHint: string }[] = [
  { n: 17, title: "載具歸戶 · Carrier integration", fileHint: "_____01_01-e00cd375" },
  { n: 18, title: "領獎資料 · Prize claim / invoice info", fileHint: "______01_01-fd8b2ebe" },
  { n: 19, title: "捐贈發票 · Donation picker", fileHint: "____-db9fe7ad" },
  { n: 20, title: "減碳存摺 · Carbon reduction passbook", fileHint: "_____01_01-de79bc20" },
  { n: 21, title: "雲端備份 · Cloud backup onboarding", fileHint: "_____01_02-edb36f24" },
  { n: 22, title: "我要領獎 · Redemption hub (status)", fileHint: "_____01_01-88276f58" },
  { n: 23, title: "功能總覽 · Settings & profile", fileHint: "_____01_04-7e308df2" },
  { n: 24, title: "發票存摺 · Invoice passbook", fileHint: "___03-b38fbf39" },
  { n: 25, title: "發票明細 · Receipt detail", fileHint: "_____02-9e1adb38" },
  { n: 26, title: "掃描對獎 · Scan & check (tab)", fileHint: "_____01-8608df6a" },
  { n: 27, title: "末三碼對獎 · Last-three-digit match", fileHint: "_____01_00-0760715c" },
  { n: 28, title: "宣導專區 · Events & promos", fileHint: "_____01-26121e59" },
  { n: 29, title: "首頁 · Home hub", fileHint: "home_01_00-6bf3cc5b" },
  { n: 30, title: "登入 · Face ID / quick login", fileHint: "Face_ID_02" },
  { n: 31, title: "通知中心 · Notifications", fileHint: "____01_02-3f11733c" },
  { n: 32, title: "我要領獎 · Winning invoices list", fileHint: "_____01_01-42974418" },
  { n: 33, title: "掃描發票 · Camera capture", fileHint: "_____01_01-12a97583" },
  { n: 34, title: "功能流程 · UI state (variant)", fileHint: "_____01_01-9fc29cfc" },
  { n: 35, title: "介面狀態 · UI state (variant)", fileHint: "_____01_01-7eedf949" },
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
              <p className="mt-2 text-2xl font-semibold text-zinc-100 tabular-nums">
                68% → 92%
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
              <p className="mt-2 text-2xl font-semibold text-zinc-100 tabular-nums">
                +30%
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
              <p className="mt-2 text-2xl font-semibold text-zinc-100 tabular-nums">
                −70%
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
              <p className="mt-2 text-2xl font-semibold text-zinc-100 tabular-nums">
                88%
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
                    Before shopping — first download
                  </td>
                  <td className="px-4 py-4">
                    Understand the app&apos;s functions and advantages
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    High learning curve; carrier binding fails often; prize claim
                    &amp; bank setup hard to find; invoice history unclear
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    Clearer tutorials; simplify registration &amp; binding; improve
                    interface
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 text-zinc-200">
                    Before shopping — registration &amp; carrier binding
                  </td>
                  <td className="px-4 py-4">Successfully bind carrier</td>
                  <td className="px-4 py-4 text-zinc-400">
                    Slow startup; barcode scan fails; functions scattered; frequent
                    logouts; manual refresh needed
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    Show error hints; better stability &amp; maintenance
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 text-zinc-200">
                    During shopping — using carrier barcode
                  </td>
                  <td className="px-4 py-4">Quickly display carrier barcode</td>
                  <td className="px-4 py-4 text-zinc-400">
                    App slow at checkout; barcode sometimes fails
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    Improve speed &amp; reliability
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-4 text-zinc-200">
                    After shopping — manage invoices / prize draw / claim prize
                  </td>
                  <td className="px-4 py-4">
                    Easily manage invoices &amp; quickly check prizes
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    Hard to find invoices; no batch edit; scanning limited; prize
                    alerts hidden; not accessible for visually impaired
                  </td>
                  <td className="px-4 py-4 text-zinc-400">
                    Better invoice display; integrated scanning &amp; management
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <WideFigure
            src={ASSET("journey-map-full.png")}
            alt="Full user journey map diagram for the e-invoice app"
            caption="User journey map — full diagram (export)."
          />
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
            src={ASSET("interview-findings.png")}
            alt="Research synthesis and interview findings summary"
            caption="Research snapshot · demographics &amp; interview synthesis (export)."
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
                className={`relative aspect-[9/16] overflow-hidden bg-black ${R_IMG} border border-zinc-700`}
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
                Vertical clip ·{" "}
                <a
                  href="https://youtu.be/5ySntQxxINE"
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

        <section className="space-y-6 max-w-5xl">
          <h3 className="text-lg font-semibold text-zinc-100">User personas</h3>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Four personas grounded in interviews—covering age, tech comfort, and
            language context.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <WideFigure
              src={ASSET("persona-01.png")}
              alt="Persona 01 — tech-savvy young adult"
              caption="Persona 01 · Tech-savvy young adult (export)."
            />
            <WideFigure
              src={ASSET("persona-02.png")}
              alt="Persona 02 — busy professional"
              caption="Persona 02 · Busy professional (export)."
            />
            <WideFigure
              src={ASSET("persona-03.png")}
              alt="Persona 03 — silver generation"
              caption="Persona 03 · Silver generation (export)."
            />
            <WideFigure
              src={ASSET("persona-04.png")}
              alt="Persona 04 — foreign national"
              caption="Persona 04 · Foreign national (export)."
            />
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
            src={ASSET("functional-map.png")}
            alt="Functional map of the e-invoice app"
            caption="Functional map (export)."
          />
        </section>

        <section className="space-y-6 max-w-4xl">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            04 · Page flow, UI direction &amp; design system
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            From flow logic to visual language
          </h2>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Page flow diagrams show step-by-step movement from login through
            invoice management and redemption—so gaps in navigation surfaced early.
          </p>
          <WideFigure
            src={ASSET("page-flow.png")}
            alt="Page flow diagram for the e-invoice app"
            caption="Page flow diagram (export)."
          />
          <h3 className="text-lg font-semibold text-zinc-100 pt-4">
            Moodboard &amp; style directions
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            Keywords from interviews—intuitive, minimalist, refreshing,
            modern—translated into moodboards and client-facing style proposals
            (Friendly Living, Modern Minimalist, Professional &amp; Practical).
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <WideFigure
              src={ASSET("moodboard-01.png")}
              alt="Moodboard and style exploration one"
              caption="Style exploration · board 01"
            />
            <WideFigure
              src={ASSET("moodboard-02.png")}
              alt="Moodboard and style exploration two"
              caption="Style exploration · board 02"
            />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 pt-6">
            Mockups &amp; design system
          </h3>
          <p className="text-zinc-300 leading-relaxed max-w-3xl">
            High-fidelity work used the iOS / iPadOS UI Kit as a baseline—native
            components, predictable spacing, and patterns that engineering could map
            quickly to production constraints.
          </p>
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
            <span className="text-zinc-200 font-medium">88% overall success rate</span>
            . Sessions surfaced pain points—especially login verification and form
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
                <span className="text-zinc-100 font-semibold tabular-nums">88%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                <span className="text-zinc-400">Login &amp; registration</span>
                <span className="text-zinc-100 font-semibold tabular-nums">75%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                <span className="text-zinc-400">Carrier binding</span>
                <span className="text-zinc-100 font-semibold tabular-nums">67%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                <span className="text-zinc-400">Invoice wallet &amp; donation</span>
                <span className="text-zinc-100 font-semibold tabular-nums">83%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                <span className="text-zinc-400">Scan &amp; prize redemption</span>
                <span className="text-zinc-100 font-semibold tabular-nums">92%</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-zinc-800/80 py-2">
                <span className="text-zinc-400">Spending analysis</span>
                <span className="text-zinc-100 font-semibold tabular-nums">100%</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              Errors: average 1.3 errors per participant—mostly form entry and
              unclear prompts. Shortest task: scan &amp; prize redemption (~40s avg.).
              Longest: carrier binding (~2m 20s avg.).
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
            <MobileMockup
              src={ASSET("iteration-home-01.png")}
              alt="Home screen iteration"
              label="首頁 · Home"
              hint="home_01_00"
            />
            <MobileMockup
              src={ASSET("iteration-redeem-01.png")}
              alt="Redeem screen iteration one"
              label="我要領獎 · Redeem"
              hint="_____01_01 (variant 1)"
            />
            <MobileMockup
              src={ASSET("iteration-redeem-02.png")}
              alt="Redeem screen iteration two"
              label="我要領獎 · Redeem (state)"
              hint="_____01_01 (variant 2)"
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
            Selected hi-fi exports (batch 17–35). Captions combine a functional
            label with the source file id for traceability.
          </p>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {FINAL_SOLUTION_SCREENS.map((item) => (
              <MobileMockup
                key={item.n}
                src={ASSET(`solution-${item.n}.png`)}
                alt={item.title}
                label={item.title}
                hint={`File: ${item.fileHint}`}
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
                <span className="text-zinc-200">Impact:</span> login success
                increased from 68% → 92%; elderly and visually impaired users can
                operate independently; fewer interruptions and frustration.
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
                increased from 55% → 85%; reduced confusion for foreign nationals and
                elderly users.
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
                reduced by 70%; higher trust in the official app; users know about
                winning invoices instantly—less reliance on external sources.
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

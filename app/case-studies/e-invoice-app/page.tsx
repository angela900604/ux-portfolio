import Link from "next/link";
import Image from "next/image";
import FlowSlideshow from "./FlowSlideshow";
import SolutionGallery from "./SolutionGallery";
import { ImageLightbox } from "./ImageLightbox";

export const metadata = {
  title: "Taiwan e-Invoice App Redesign | Angela Yang",
  description:
    "Lead UX for Taiwan's nationwide e-invoice app: research, IA, inclusive home customization, and moderated prototype testing (~88% task success) with government stakeholders.",
};

const IMG = (name: string) =>
  `/case-studies/e-invoice/${
    name === "hero" ? "hero-v2" : name
  }.png`;

const FIGMA_MOCKUP_PAGE =
  "https://www.figma.com/design/xvssk9Yfmx51aiSpwWE8sv/APP-Mockup?node-id=2103-5106&t=Ynz1CgBhJkN04Gfz-1";
const FIGMA_WIREFRAME_FLOW =
  "https://www.figma.com/design/ixS4TwNUz1pu0Riv7peXRA/APP-Wireframe?node-id=2120-5665&t=j3rbIoMCpkpNcAY2-1";

/** Case-study photo / figure radius — full image visible (no crop) in strips via object-contain */
const R_IMG = "rounded-[20px]";

function CaseImage({
  src,
  alt,
  caption,
  aspect = "video",
  className = "",
  /** Fill the frame edge-to-edge (no padding / no “gray frame”). Use for hero lifestyle shots. */
  fullBleed = false,
  /** With fullBleed: `cover` fills and may crop; `contain` shows the full image (no side crop). */
  fullBleedFit = "cover",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "video" | "wide" | "wideNatural" | "portrait";
  className?: string;
  fullBleed?: boolean;
  fullBleedFit?: "cover" | "contain";
}) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : aspect === "wideNatural"
          ? "aspect-[1832/723]"
          : "aspect-[3/4]";
  return (
    <figure className={`space-y-2 ${className}`}>
      <ImageLightbox src={src} alt={alt} className="w-full">
        <div
          className={`relative w-full ${aspectClass} overflow-hidden ${R_IMG} ${
            fullBleed
              ? "bg-zinc-950"
              : "bg-zinc-800/80 border border-zinc-700/50"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={
              fullBleed
                ? fullBleedFit === "contain"
                  ? "object-contain object-center"
                  : "object-cover object-center"
                : "object-contain p-4 sm:p-6"
            }
            sizes="(max-width: 1440px) 100vw, 1240px"
          />
        </div>
      </ImageLightbox>
      {caption && (
        <figcaption className="text-xs text-zinc-500 max-w-xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Edge-to-edge strip: no border; full image visible (contain), aligned to frame. */
function FullBleedStrip({
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
      <ImageLightbox src={src} alt={alt} className="w-full">
        <div className={`relative w-full overflow-hidden bg-zinc-950 ${R_IMG}`}>
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="h-auto w-full object-contain object-center align-middle"
            sizes="(max-width: 1440px) 100vw, 1240px"
          />
        </div>
      </ImageLightbox>
      {caption && (
        <figcaption className="max-w-3xl text-xs text-zinc-500">{caption}</figcaption>
      )}
    </figure>
  );
}

const STYLE_PROPOSAL_CARDS: {
  src: string;
  alt: string;
  caption: string;
}[] = [
  {
    src: "/case-studies/e-invoice/style-proposal-01-friendly.png",
    alt: "Style proposal 01: Friendly and lively",
    caption: "01 · Friendly & lively (親切活潑)",
  },
  {
    src: "/case-studies/e-invoice/style-proposal-02-minimal.png",
    alt: "Style proposal 02: Modern minimalist",
    caption: "02 · Modern minimalist (現代極簡)",
  },
  {
    src: "/case-studies/e-invoice/style-proposal-03-professional.png",
    alt: "Style proposal 03: Professional and practical",
    caption: "03 · Professional & practical (專業實用)",
  },
];

export default function EInvoiceCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6">
            <span>Case Study</span>
            <span className="text-zinc-600">·</span>
            <span>Public Service</span>
            <span className="text-zinc-600">·</span>
            <span>Mobile App</span>
          </div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            Redesigning Taiwan’s e-Invoice app for accessibility & trust
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            Research-led IA, inclusive home customization, and prototype-tested
            flows—aligned with engineers, PM, and Ministry stakeholders on a
            legacy cloud invoice system.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Lead UX Designer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">
                Timeline
              </dt>
              <dd className="text-zinc-200">2024 – 2025</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">
                Platform
              </dt>
              <dd className="text-zinc-200">iOS & Android</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Client</dt>
              <dd className="text-zinc-200">
                The Ministry of Finance, R.O.C.
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            <CaseImage
              src={IMG("hero")}
              alt="e-Invoice app key screen or device mockup"
              aspect="wide"
              fullBleed
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        {/* 00 TL;DR */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            00 · At a glance
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            TL;DR — problem, move, proof
          </h2>
          <div className="mt-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8">
            <ul className="space-y-3 text-zinc-200">
              <li>
                <span className="text-emerald-400 font-semibold">Problem:</span>{" "}
                A nationwide e-invoice app had to serve very different ages and
                mental models—while staying understandable, trustworthy, and
                shippable on legacy constraints.
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">Move:</span>{" "}
                Research-led functional maps and IA; inclusive home
                customization; flows validated with moderated prototype
                sessions and tight PM/engineering collaboration.
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">Proof:</span>{" "}
                Moderated prototype testing showed strong task completion across
                core journeys (e.g. ~88% overall across tasks; see
                methodology in §05)—with clear friction points in
                verification and forms that drove iteration.
              </li>
            </ul>
          </div>
        </section>

        {/* 01 Context */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            01 · Context
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Challenge and context
          </h2>
          <h3 className="mt-6 text-sm font-semibold text-zinc-200">
            Scope, ownership & who decided what
          </h3>
          <p className="mt-2 text-zinc-300 leading-relaxed max-w-3xl">
            I was the lead UX designer: early research, synthesis, competitor
            review, personas, and the evolving functional map lived with me. A
            UI designer partnered with me on wireframes and mockups so I could
            stay parallel with PM and engineering. I spent the most time with
            engineers and government clients—because we had to reverse
            engineer how the legacy cloud invoice redemption app was built, why
            the hierarchy looked the way it did, and what could change without
            breaking the system.
          </p>
          <p className="mt-3 text-zinc-300 leading-relaxed max-w-3xl">
            <span className="text-zinc-100 font-medium">What I did not own</span>{" "}
            — final engineering timelines, backend policy, or legal sign-off;
            those sat with engineering, PM, and client leadership.{" "}
            <span className="text-zinc-100 font-medium">Where I pushed</span> —
            trade-offs between clarity and scope (e.g. customizable home
            modules, verification copy, and task flows that reduced dead-ends in
            testing).
          </p>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            Taiwan’s e-Invoice app is a nationwide public service: citizens
            store receipts, check lottery winnings, and manage rewards. When I
            joined Turn Cloud Technology Service Taiwan, the app was widely
            used but hard to use—people struggled to log in, didn’t trust the
            interface, and often gave up before completing basic tasks.
          </p>
          <p className="mt-3 text-zinc-300 leading-relaxed max-w-2xl">
            I led end-to-end UX for the authentication and core flows, working
            with government stakeholders and a cross-functional team of 10+
            engineers.
          </p>
        </section>

        {/* 02 Core UX gaps */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            02 · Three core UX gaps
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            One journey, three systemic barriers
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-[11px] uppercase tracking-widest text-zinc-500">
                Gap 01
              </p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                Cognitive load in complex government flows
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Users did not know sequence, next step, or current stage. They
                hesitated and dropped off before finishing.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-[11px] uppercase tracking-widest text-zinc-500">
                Gap 02
              </p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                Trust and safety gap in invoice and money context
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Users asked: Did it go through? Will this fail? Did I receive
                my money? Confirmation and reassurance were not explicit enough.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-[11px] uppercase tracking-widest text-zinc-500">
                Gap 03
              </p>
              <h3 className="mt-2 text-sm font-semibold text-zinc-100">
                Discoverability and inclusive setup on mobile
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Seniors and foreign users had difficulty finding key functions
                and completing reward-bank setup without guided onboarding.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <CaseImage
              src={IMG("user-journey-map")}
              alt="User journey map showing pain points and touchpoints"
              caption="Journey map aligned all stakeholders on where confidence broke: sequence ambiguity, trust uncertainty, and setup friction."
              aspect="wideNatural"
              fullBleed
              fullBleedFit="contain"
            />
          </div>
        </section>

        {/* 03 Design approach */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            03 · Design approach
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Principles and decisions per gap
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
            I treated this as one high-stakes citizen journey and translated
            research into three design principles: reduce cognitive load with
            step-based progress, increase trust with explicit system feedback,
            and improve discoverability with guided setup and clear IA.
          </p>

          <div className="mt-8 space-y-12">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Research and synthesis
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-2xl">
                I ran 30+ sessions—focus groups and 1:1 interviews—with
                teenagers, seniors, foreigners, and visually impaired users. I
                mapped where people hesitated, which terms confused them, and
                how they recovered from errors. The insight: many users weren’t
                “bad with technology”; they were confused by system language
                and flow structure.
              </p>
              <div className="mt-6">
                <CaseImage
                  src={IMG("research-elderly")}
                  alt="Research session with elderly users"
                  caption="Research with elderly users (銀髮族) to understand accessibility and trust barriers."
                  aspect="video"
                  fullBleed
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                System-level design principles
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-3xl">
                From research and stakeholder alignment, I defined a consistent
                language and hierarchy model: name things the way citizens do,
                reveal one next action at a time, make status explicit, and
                provide reassurance at critical moments. Below: how we explored
                visual direction, chose a citizen-friendly look with the client,
                grounded execution in platform patterns, then moved into
                wireframes.
              </p>

              <p className="mt-6 text-sm font-medium text-zinc-200">
                Style exploration (three directions)
              </p>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-3xl text-sm">
                I presented three concept boards—friendly & lively, modern
                minimalist, and professional & practical—so stakeholders could
                compare mood, color systems, and readability side by side.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch">
                {STYLE_PROPOSAL_CARDS.map((item) => (
                  <figure
                    key={item.src}
                    className={`flex min-h-0 flex-col overflow-hidden bg-zinc-950 ${R_IMG}`}
                  >
                    <ImageLightbox
                      src={item.src}
                      alt={item.alt}
                      className="flex min-h-0 flex-1"
                    >
                      <div className="relative aspect-[4/3] w-full min-h-[200px] md:aspect-auto md:min-h-[280px] md:flex-1">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-contain object-center p-2 sm:p-3"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </ImageLightbox>
                    <figcaption className="border-t border-zinc-800/80 px-3 py-2 text-[11px] leading-snug text-zinc-500">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <p className="mt-8 text-zinc-300 leading-relaxed max-w-3xl">
                <span className="text-zinc-100 font-medium">
                  Why the client chose “friendly & lively”
                </span>{" "}
                — It reads as approachable for a mass public service, reduces the
                cold “official system” feeling that slows first-time users, and
                uses clearer color segmentation for scanning across tasks and age
                groups. It also differentiated the product from both stark
                monochrome UI and heavy navy–gold “institutional” palettes that
                can feel more like a bank lobby than a daily-use consumer app.
              </p>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed max-w-3xl italic">
                Public-sector comms nuance: an overly “party-coded” green or blue
                palette can read as political signal in Taiwan—so a warmer,
                multi-hue friendly direction was also a pragmatic choice for
                neutral citizen-facing messaging.
              </p>

              <p className="mt-8 text-sm font-medium text-zinc-200">
                Home screen: three styles for decision
              </p>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-3xl text-sm">
                We translated each direction into the same home layout so the
                client could judge hierarchy, contrast, and brand feel on a real
                entry screen—not only on static mood boards.
              </p>
              <div className="mt-4">
                <FullBleedStrip
                  src="/case-studies/e-invoice/style-proposals-home-compare.png"
                  alt="Three home screen mockups comparing friendly, minimalist, and professional styles"
                  caption="Same home structure, three visual systems—presented for side-by-side selection."
                />
              </div>

              <p className="mt-10 text-sm font-medium text-zinc-200">
                Design system foundation
              </p>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-3xl text-sm">
                Wireframes started from Apple’s official iOS design resources,
                then components were adapted as we mapped real flows—spacing,
                states, and patterns were extended where the product needed
                government-specific density and clarity.
              </p>
              <div className="mt-4">
                <FullBleedStrip
                  src="/case-studies/e-invoice/design-system-ios-kit.png"
                  alt="Apple iOS and iPadOS UI Kit design resources cover"
                  caption="Baseline: iOS / iPadOS UI Kit as the starting point before custom components."
                />
              </div>

              <p className="mt-10 text-sm font-medium text-zinc-200">
                Wireframes
              </p>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-3xl text-sm">
                Low-fidelity flows in Figma covered prize claim, scan, and
                verification paths—structure first, visual polish after the
                direction was locked.
              </p>
              <div className="mt-4">
                <FullBleedStrip
                  src="/case-studies/e-invoice/wireframe-figma.png"
                  alt="Figma wireframe canvas for invoice and prize flows"
                  caption="Wireframe phase: grouped flows for claim, scan, and verification."
                />
              </div>

              <div
                className={`mt-8 border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 ${R_IMG}`}
              >
                <p className="text-sm font-medium text-zinc-200">
                  Explore the file (recruiters & leads)
                </p>
                <p className="mt-2 text-sm text-zinc-400 max-w-3xl">
                  Figma links are the fastest way to show interaction breadth—put
                  them where you already explain structure: right after
                  wireframes / before solution screens.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={FIGMA_MOCKUP_PAGE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-400 hover:text-zinc-50 transition"
                  >
                    Mockup & page flow →
                  </a>
                  <a
                    href={FIGMA_WIREFRAME_FLOW}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-400 hover:text-zinc-50 transition"
                  >
                    Wireframe & wireflow →
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                  Step-based progress clarity
                </span>
                <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                  Confirmation and reassurance
                </span>
                <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
                  Guided setup and discoverability
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Flow architecture and iteration
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-2xl">
                I redesigned the flow architecture with explicit stage cues,
                rewrote feedback and helper messaging, and introduced guided
                setup patterns for reward banking and key actions. Prototypes
                were validated with users and used to align government
                leadership decisions.
              </p>
              <div className="mt-6 space-y-3">
                <FlowSlideshow />
                <p className="text-xs text-zinc-500 max-w-2xl">
                  Page flow and navigation structure that simplified login and
                  core tasks—shown across key architecture iterations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Solution by theme */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            04 · Solution by theme
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            How the product changed across the three gaps
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            Instead of showcasing isolated screens, this section maps shipped UI
            changes to each core UX gap so recruiters and stakeholders can see
            the logic from problem to solution.
          </p>

          <div className="mt-10 space-y-14">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Gap 01 · Cognitive load reduction
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-2xl">
                I introduced step-based flow, stronger hierarchy, and clear
                grouping so users always know what stage they are in and what to
                do next.
              </p>
              <SolutionGallery
                items={[
                  {
                    src: IMG("solution-2"),
                    alt: "Invoice verification flow with clear sequence",
                    label: "Step-based sequence in scan-to-claim",
                  },
                  {
                    src: IMG("solution-3"),
                    alt: "Invoice ledger with clearer hierarchy",
                    label: "Hierarchy and grouping in ledger",
                  },
                  {
                    src: IMG("solution-4"),
                    alt: "Rewards list with explicit next actions",
                    label: "Next actions are explicit",
                  },
                  {
                    src: IMG("solution-1"),
                    alt: "Login and onboarding with clearer progression",
                    label: "Clear progression in entry flows",
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Gap 02 · Trust and safety
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-2xl">
                I redesigned confirmation clarity, feedback messaging, and
                reassurance states to reduce fear of failure in invoice and
                money-related actions.
              </p>
              <SolutionGallery
                items={[
                  {
                    src: IMG("solution-1"),
                    alt: "Secure entry options and safety controls",
                    label: "Secure entry choices",
                  },
                  {
                    src: IMG("solution-5"),
                    alt: "Prize status and processing feedback",
                    label: "Clear status and confirmation",
                  },
                  {
                    src: IMG("solution-7"),
                    alt: "Transparent analysis and value summary",
                    label: "Transparent outcomes and value",
                  },
                  {
                    src: IMG("solution-6"),
                    alt: "Feature overview reinforcing predictable structure",
                    label: "Predictable structure builds confidence",
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                Gap 03 · Discoverability and inclusive setup
              </h3>
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-3xl">
                For seniors and foreign users, I added guidance-oriented
                onboarding and setup flow patterns so critical features are
                findable and reward account setup is completable.
              </p>
              <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
                <span className="text-zinc-100 font-medium">
                  Decision (A/B → pick → cost)
                </span>{" "}
                — Research showed a split: younger participants wanted a calm,
                information-dense home to scan wins and spending; older
                participants wanted fewer items on screen and high-contrast
                anchors to remember where to tap—especially to pull up a
                donation barcode at checkout. A single static layout could not
                serve both.{" "}
                <span className="text-zinc-100">Option A:</span> optimize for one
                cohort. <span className="text-zinc-100">Option B:</span> ship a
                customizable home with defaults aligned to the government’s
                paperless mission (scan paper invoices surfaced first), then
                let users show or hide modules for prizes, ledger, and donation.
                We chose B with engineering: higher settings complexity, but
                better inclusivity and fewer “wrong home for me” failures in
                testing.
              </p>
              <SolutionGallery
                items={[
                  {
                    src: IMG("solution-6"),
                    alt: "Feature overview and discoverability improvements",
                    label: "Findability of key functions",
                  },
                  {
                    src: IMG("solution-1"),
                    alt: "Guided login and setup affordances",
                    label: "Guided entry and setup affordances",
                  },
                  {
                    src: IMG("solution-3"),
                    alt: "Structured information for diverse users",
                    label: "Inclusive information structure",
                  },
                  {
                    src: IMG("solution-4"),
                    alt: "Rewards and next steps with explicit actions",
                    label: "Explicit next steps in rewards flow",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* 05 Impact & validation */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            05 · Impact & validation
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Outcomes, constraints, and evidence
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
            Impact here is a mix of qualitative confidence (clearer
            transactions, fewer dead-ends in testing) and structured
            validation—below is how we worked under government process, plus
            prototype metrics that are honest about what they measure.
          </p>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Delivery constraints & collaboration
          </h3>
          <p className="mt-3 text-zinc-300 leading-relaxed max-w-3xl">
            While I ran research, competitor analysis, interviews, and persona
            synthesis, another designer advanced the legacy functional map in
            parallel—so we could align on what the old app actually did before
            proposing changes. The slowest part was rarely Figma; it was
            government-facing documentation: PowerPoint and review packets for
            leadership, with staged deadlines that each had to include
            adjustments from the last meeting. Because design was rolling,
            PMs were critical to track versions and submission windows. On the
            technical side, every flow had to be validated against what the
            existing codebase could support—so UX was continuously negotiating
            clarity vs. feasibility with engineering—this project was
            inherently collaborative.
          </p>
          <dl className="mt-4 text-sm text-zinc-400 max-w-3xl space-y-2 border-l-2 border-zinc-700 pl-4">
            <dt className="text-zinc-500 uppercase tracking-wider text-xs">
              Worth a photo?
            </dt>
            <dd>
              Stakeholder working sessions and a team dinner aren’t “screens,”
              but they show real collaboration and trust under pressure—useful
              if your story is about cross-functional leadership.
            </dd>
          </dl>
          <div className="mt-6 space-y-8">
            <FullBleedStrip
              src="/case-studies/e-invoice/photo-stakeholder-meeting.png"
              alt="Workshop with stakeholders: laptop with Figma mockups and printed review documents"
              caption="Client and vendor review: digital mockups plus printed materials for leadership sign-off—typical of how this project moved."
            />
            <FullBleedStrip
              src="/case-studies/e-invoice/photo-team-dinner.png"
              alt="Project team dinner after a milestone"
              caption="Team offsite dinner—tight timelines and shared ownership made this one of the most collaborative groups I’ve shipped with."
            />
          </div>

          <h3 className="mt-14 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Moderated prototype testing (metrics)
          </h3>
          <p className="mt-3 text-zinc-300 leading-relaxed max-w-3xl">
            We ran moderated sessions with task-based scripts and a spreadsheet
            matrix (pass/fail per step). Task mix covered onboarding, carriers,
            wallet/donation, scan/prize redemption, and analysis—mirroring
            the citizen journey. The summary below reflects{" "}
            <span className="text-zinc-100">prototype performance</span>, not
            live production analytics—so it validates flow comprehension and
            usability risk, not a causal claim of post-launch KPIs.
          </p>
          <dl className="mt-4 text-sm text-zinc-400 max-w-3xl space-y-2 border-l-2 border-zinc-700 pl-4">
            <dt className="text-zinc-500 uppercase tracking-wider text-xs">
              Method note (readability for recruiters)
            </dt>
            <dd>
              <span className="text-zinc-300">Overall task success ~88%</span>{" "}
              — aggregate success across task attempts in the matrix; figures
              below are directional summaries from the test deck.{" "}
              <span className="text-zinc-300">Login & registration ~75%</span>{" "}
              — friction often at SMS/email verification.{" "}
              <span className="text-zinc-300">Carrier binding ~67%</span> —
              errors clustered in form entry.{" "}
              <span className="text-zinc-300">Wallet & donation ~83%</span> —
              flow understood; confusion when switching carriers.{" "}
              <span className="text-zinc-300">Scan & prize redemption ~92%</span>{" "}
              — most intuitive path; redemption guidance could still be clearer.{" "}
              <span className="text-zinc-300">Spending analysis ~100%</span> in
              sessions.{" "}
              <span className="text-zinc-300">~1.3 errors per participant</span>{" "}
              on average—mostly form entry and unclear prompts.
            </dd>
          </dl>
          <div className="mt-6 space-y-8">
            <FullBleedStrip
              src="/case-studies/e-invoice/prototype-task-matrix.png"
              alt="Spreadsheet: prototype task success matrix with green checks and red crosses per participant"
              caption="Raw task matrix: evidence of where flows passed—used to prioritize fixes."
            />
            <FullBleedStrip
              src="/case-studies/e-invoice/usability-metrics-summary.png"
              alt="Summary of usability metrics by task area and participant notes"
              caption="Aggregated view: task-level success rates and time-on-task notes from the same study."
            />
          </div>

          <div className="mt-10 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-8 sm:p-10">
            <ul className="space-y-4 text-zinc-200">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Flow clarity
                </span>
                <span>
                  Prototype testing showed stronger completion on scan and
                  prize paths; verification and carrier binding were the
                  highest-friction areas to iterate next.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Trust & reassurance
                </span>
                <span>
                  Confirmation and feedback patterns reduced uncertainty in
                  money-adjacent moments during testing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Inclusive IA
                </span>
                <span>
                  Customizable home and guided setup reduced “wrong home for me”
                  risk across age groups in research and prototype sessions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Accessibility
                </span>
                <span>
                  Worked within accessibility and certification expectations for
                  government digital services (requirements evolve with policy).
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-zinc-400 text-sm max-w-3xl">
            This project reinforced how much impact you can get from
            understanding diverse users, naming things clearly, and being
            intentional about the full entry-to-claim journey—especially when
            validation artifacts are shared with stakeholders who can’t watch
            every research session.
          </p>
        </section>

        {/* CTA */}
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

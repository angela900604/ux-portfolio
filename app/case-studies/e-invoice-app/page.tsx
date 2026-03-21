import Link from "next/link";
import Image from "next/image";
import FlowSlideshow from "./FlowSlideshow";
import SolutionGallery from "./SolutionGallery";

export const metadata = {
  title: "Taiwan e-Invoice App Redesign | Angela Yang",
  description:
    "Led UX redesign of Taiwan's nationwide e-Invoice app. Login success increased from 68% to 92% through research, clearer flows, and accessibility.",
};

const IMG = (name: string) =>
  `/case-studies/e-invoice/${
    name === "hero" ? "hero-v2" : name
  }.png`;

function CaseImage({
  src,
  alt,
  caption,
  aspect = "video",
  className = "",
  /** Fill the frame edge-to-edge (no padding / no “gray frame”). Use for hero lifestyle shots. */
  fullBleed = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "video" | "wide" | "portrait";
  className?: string;
  fullBleed?: boolean;
}) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : "aspect-[3/4]";
  return (
    <figure className={`space-y-2 ${className}`}>
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl ${
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
              ? "object-cover object-center"
              : "object-contain p-4 sm:p-6"
          }
          sizes="(max-width: 1440px) 100vw, 1240px"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-zinc-500 max-w-xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

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
            Increasing login success from 68% → 92% through research, clearer
            language, and inclusive design for millions of citizens.
          </p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Product Designer</dd>
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
            One journey, one outcome
          </h2>
          <div className="mt-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8">
            <ul className="space-y-3 text-zinc-200">
              <li>
                <span className="text-emerald-400 font-semibold">Outcome:</span>{" "}
                login success improved from 68% to 92%.
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">Scope:</span>{" "}
                redesigned the citizen journey from entry/login to claim and
                rewards comprehension.
              </li>
              <li>
                <span className="text-emerald-400 font-semibold">My role:</span>{" "}
                led UX end-to-end (research, interaction design, prototyping,
                and stakeholder alignment).
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
              aspect="wide"
              fullBleed
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
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-2xl">
                From research and stakeholder alignment, I defined a consistent
                language and hierarchy model: name things the way citizens do,
                reveal one next action at a time, make status explicit, and
                provide reassurance at critical moments.
              </p>
              <div className="mt-6">
                <CaseImage
                  src={IMG("style-guide")}
                  alt="Style guide: professional and practical visual direction"
                  caption="Visual direction: professional, practical, and trustworthy—aligned with government and citizen expectations."
                  aspect="video"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
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
              <p className="mt-2 text-zinc-300 leading-relaxed max-w-2xl">
                For seniors and foreign users, I added guidance-oriented
                onboarding and setup flow patterns so critical features are
                findable and reward account setup is completable.
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

        {/* 05 Impact */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            05 · Impact
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Impact and validation
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            Results were measured not only by login success, but by clearer
            completion confidence, fewer support-heavy failure moments, and
            stronger alignment with public-service accessibility standards.
          </p>
          <div className="mt-6">
            <CaseImage
              src={IMG("task-completion")}
              alt="Task completion and validation results"
              caption="Task completion and validation results that informed the 68% → 92% outcome."
              aspect="video"
            />
          </div>
          <div className="mt-8 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-8 sm:p-10">
            <ul className="space-y-4 text-zinc-200">
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  68% → 92%
                </span>
                <span>Login success rate after launch and validation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Trust clarity
                </span>
                <span>
                  Confirmation and feedback states reduced uncertainty in key
                  transaction moments.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Inclusive completion
                </span>
                <span>
                  Guided setup and clearer IA improved completion for seniors
                  and foreign users in testing.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-400 font-semibold shrink-0">
                  Compliance
                </span>
                <span>
                  Met accessibility requirements and supported certification by
                  Taiwan’s Ministry of Digital Affairs.
                </span>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-zinc-400 text-sm max-w-2xl">
            This project reinforced how much impact you can get from
            understanding diverse users, naming things clearly, and being
            intentional about the full entry-to-claim journey.
          </p>
        </section>

        {/* 06 Prototype testing */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            06 · Prototype testing
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Validation before ship
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
            I ran moderated prototype tests (one-on-one observation) with 12
            participants covering diverse ages and contexts. Tasks spanned login
            and registration, carrier binding, invoice wallet and donation, scan
            and prize redemption, and spending analysis—mirroring the
            end-to-end citizen journey. Overall task success reached{" "}
            <span className="text-zinc-100 font-medium">88%</span>, with
            concrete friction surfaced in verification and form entry that fed
            the next iteration.
          </p>
          <p className="mt-3 text-zinc-400 text-sm max-w-3xl leading-relaxed">
            <span className="text-zinc-300">For design leads & recruiters:</span>{" "}
            this block is worth keeping—one image plus a short methodology blurb
            proves you validate before production and can tie work to task
            coverage and outcomes. Skip dumping the full Figma map; a single
            legible artifact (or this overview) is enough to signal rigor
            without overwhelming the narrative.
          </p>
          <div className="mt-6">
            <CaseImage
              src="/case-studies/e-invoice/prototype-testing.png"
              alt="Prototype testing: core task map and flow coverage"
              caption="Prototype scope aligned to core citizen tasks—used to prioritize fixes before release."
              aspect="wide"
              fullBleed
            />
          </div>
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

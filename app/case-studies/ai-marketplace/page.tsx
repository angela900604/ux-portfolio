import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "MINA Parenting Copilot | Angela Yang",
  description:
    "Designed a life-stage triggered circulation flow for circular baby goods: proactive prompts, personalized suggestions, demand signals, and AI-assisted one-tap listings.",
};

const IMG = (name: string) => `/case-studies/mina/${name}.png`;

function CaseImage({
  src,
  alt,
  caption,
  aspect = "video",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "video" | "wide";
}) {
  const aspectClass = aspect === "wide" ? "aspect-[21/9]" : "aspect-video";
  return (
    <figure className="space-y-2">
      <div className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl bg-zinc-800/80 border border-zinc-700/50`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain bg-[#1c1c1e]"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>
      {caption && (
        <figcaption className="text-xs text-zinc-500 max-w-2xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function MinaParentingCopilotCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-zinc-500 mb-6">
            <span>Case Study</span>
            <span className="text-zinc-600">·</span>
            <span>AI Marketplace</span>
            <span className="text-zinc-600">·</span>
            <span>System Design</span>
          </div>

          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            MINA Parenting Copilot
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            Designing a life-stage triggered circulation system for baby items—
            turning decluttering into a low-effort, meaningful exchange.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Product Designer</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Product</dt>
              <dd className="text-zinc-200">Circular baby goods marketplace</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Focus</dt>
              <dd className="text-zinc-200">Life-stage triggers · AI listing · demand signals</dd>
            </div>
          </dl>

          <div className="mt-12">
            <CaseImage
              src={IMG("flow-3")}
              alt="Life-stage declutter flow: prompt to pass it on, suggested items, AI-assisted listing"
              caption="Hero flow: trigger → suggested items → AI-assisted listing. (Replace with a higher-res export if you have it.)"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        {/* The story */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            The story (15 seconds)
          </span>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            Parents accumulate a large number of baby items in the first year—many
            used only for a few months. But there’s no clear moment or system that
            helps them decide when and how to pass items on. This design explores
            how life-stage signals can proactively guide parents to declutter,
            circulate, and help other families with minimal effort.
          </p>
        </section>

        {/* Problem */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            01 · Problem
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Items sit unused because the effort and uncertainty are too high
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-300 max-w-2xl list-disc pl-5">
            <li>
              <span className="font-medium text-zinc-200">Unclear timing:</span>{" "}
              parents don’t know when it’s appropriate to let go.
            </li>
            <li>
              <span className="font-medium text-zinc-200">High effort to list:</span>{" "}
              manual listing is time-consuming and gets postponed.
            </li>
            <li>
              <span className="font-medium text-zinc-200">No demand signal:</span>{" "}
              parents don’t know if anyone actually needs their items.
            </li>
          </ul>
          <p className="mt-4 text-zinc-400 text-sm max-w-2xl">
            Result: clutter grows, while community value stays locked away.
          </p>
        </section>

        {/* Opportunity */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            02 · Opportunity
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            A baby turning one is a natural transition point
          </h2>
          <ul className="mt-4 space-y-2 text-zinc-300 max-w-2xl list-disc pl-5">
            <li>Many items (e.g., newborn clothes, bassinets) are no longer needed.</li>
            <li>Parents are already adjusting routines and space.</li>
            <li>Redistribution to younger families becomes timely and relevant.</li>
          </ul>
          <blockquote className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-zinc-200 max-w-2xl">
            <p className="text-sm leading-relaxed">
              Reframe the moment as a guided opportunity to{" "}
              <span className="font-medium">clear space</span>,{" "}
              <span className="font-medium">reduce friction</span>, and{" "}
              <span className="font-medium">help nearby families</span>.
            </p>
          </blockquote>
        </section>

        {/* Solution */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            03 · Solution
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            A life-stage triggered circulation flow
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            The system detects a transition moment (baby approaching 12 months),
            suggests items the parent may be ready to pass on, connects those
            items to real demand from nearby families, and enables one-tap
            listing with AI-assisted prefill.
          </p>

          <div className="mt-8 space-y-10">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">1</p>
                <p className="mt-2 text-sm font-medium text-zinc-100">Trigger</p>
                <p className="mt-2 text-sm text-zinc-400">
                  “Pass it on — your baby is turning 1.”
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">2</p>
                <p className="mt-2 text-sm font-medium text-zinc-100">Guidance</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Suggested items with context (0–3 months) to reduce hesitation.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="text-xs uppercase tracking-widest text-zinc-500">3</p>
                <p className="mt-2 text-sm font-medium text-zinc-100">Action</p>
                <p className="mt-2 text-sm text-zinc-400">
                  AI-assisted listing: photo-detected details, editable anytime.
                </p>
              </div>
            </div>

            <CaseImage
              src={IMG("flow-3")}
              alt="Declutter needs flow showing trigger, suggested items, and AI listing"
              caption="Core flow: life-stage awareness → personalized item suggestions → demand cues → AI-assisted listing."
            />
          </div>
        </section>

        {/* Key decisions */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            04 · Key decisions
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Reduce effort and emotional friction—while making AI feel tangible
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-medium text-zinc-100">
                From passive info → guided action
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Instead of telling parents what to do, the system initiates action
                at the right moment and narrows the task to a small set of items.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-medium text-zinc-100">
                Connect supply to real demand
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Nearby family needs add purpose and immediacy—turning declutter into
                meaningful exchange.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-medium text-zinc-100">
                Make AI visible (and controllable)
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                AI value shows up as pre-filled listings and smart suggestions—
                with editing always available.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-medium text-zinc-100">
                Reduce decision fatigue
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Copy cues like “Used typically 0–3 months” help parents feel confident
                letting go.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <h3 className="text-sm font-medium text-zinc-100">
              Turning high-risk AI actions into user-controlled flows
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl">
              The Parenting Copilot flow takes a potentially high-risk AI action
              and makes it transparent and user-controlled. In UX terms, it
              addresses automation anxiety, loss of control, and unclear system
              behavior by combining preview, explicit confirmation, and clear
              reversibility messaging.
            </p>
            <ul className="space-y-2 text-sm text-zinc-400 max-w-2xl list-disc pl-5">
              <li>
                <span className="font-medium text-zinc-200">Automation anxiety:</span>{" "}
                parents see exactly what AI will do before anything is committed.
              </li>
              <li>
                <span className="font-medium text-zinc-200">Loss of control:</span>{" "}
                the UI makes it clear that parents make the final call, not the system.
              </li>
              <li>
                <span className="font-medium text-zinc-200">Unclear system behavior:</span>{" "}
                every AI step is paired with plain-language explanations of what will
                happen next.
              </li>
            </ul>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
              To achieve this, the flow uses three patterns: rich previews of AI
              output, explicit confirmation moments, and reassuring copy that
              highlights editability and reversibility.
            </p>

            <div className="mt-4">
              <CaseImage
                src={IMG("flow-3-alt")}
                alt="Parenting Copilot AI safety flow with preview and explicit confirmation"
                caption="Turning a high-risk AI action into a user-controlled flow: parents preview AI suggestions, confirm explicitly, and are reminded they can edit or undo at any time."
                aspect="wide"
              />
            </div>
          </div>
        </section>

        {/* Copilot context */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            05 · Copilot context
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Life-stage guidance makes circulation feel timely
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
            The Parenting Copilot experience supports parents through each stage
            with guidance and relevant suggestions. That context makes the declutter
            prompt feel grounded in real needs—rather than a generic reminder.
          </p>
          <div className="mt-8 grid gap-8">
            <CaseImage
              src={IMG("flow-1")}
              alt="Copilot flow: asking about an item and getting life-stage guidance"
              caption="Copilot context: life-stage content + relevant items build trust before asking parents to take action."
            />
            <CaseImage
              src={IMG("flow-2")}
              alt="Copilot follow-up flow: user asks a follow-up question and receives guidance"
              caption="Optional support: follow-up Q&A keeps the copilot conversational while staying tied to helpful items."
            />
          </div>
          <p className="mt-4 text-xs text-zinc-500 max-w-2xl">
            If you want a tighter, faster-scanning version, remove the follow-up flow (Flow 2) and keep Flow 1 + the core declutter flow.
          </p>
        </section>

        {/* Impact */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Impact
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            From accumulation → proactive circulation
          </h2>
          <div className="mt-6 rounded-2xl bg-zinc-800/60 border border-zinc-700/50 p-8 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">Before</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200 list-disc pl-5">
                  <li>Items accumulate and sit unused.</li>
                  <li>Listing feels like work.</li>
                  <li>No urgency to act.</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500">After</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200 list-disc pl-5">
                  <li>Timely prompts based on life stage.</li>
                  <li>AI suggests what to pass on.</li>
                  <li>Listing becomes a ~30-second action.</li>
                  <li>Items circulate within the community.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Next steps
          </span>
          <ul className="mt-4 space-y-2 text-zinc-300 max-w-2xl list-disc pl-5">
            <li>Bundle multiple items into a single listing flow.</li>
            <li>Improve demand matching accuracy.</li>
            <li>Introduce pickup coordination between families.</li>
            <li>Expand to other life stages (newborn, toddler transitions).</li>
          </ul>
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


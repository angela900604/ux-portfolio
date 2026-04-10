import Link from "next/link";
import { CaseStudyAtAGlance } from "../_components/CaseStudyAtAGlance";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { CaseStudyScanSummary } from "../_components/CaseStudyScanSummary";

const AT_A_GLANCE_ITEMS = [
  { label: "Timeline", value: "Ongoing (2025+)" },
  { label: "Role", value: "Product designer · AI UX" },
  {
    label: "Project type",
    value: "Mobile app · AI marketplace (zero-to-one)",
  },
  { label: "Region", value: "San Francisco · parent communities" },
] as const;

const MINA_SCAN_SUMMARY = [
  "Zero-to-one product design for MINA—an AI-native resale marketplace for San Francisco parent communities and fast-turnover baby gear.",
  "Core experience: a conversational AI agent as the primary interface—one-photo multi-listing, editable drafts, and lighter buyer–seller coordination.",
  "Go-to-market is community-first: build trust in mom networks before scaling to anonymous nationwide matching.",
  "Case study in progress—screens, flows, and outcome metrics will be added as the work ships.",
] as const;

export const metadata = {
  title: "MINA · AI Marketplace for Parents (Coming Soon) | Angela Yang",
  description:
    "Zero-to-one concept: a San Francisco mom-first marketplace for fast-turnover baby gear—AI agent chat, one-photo multi-listing, and seller-led coordination to cut listing time and buyer management.",
};

export default function AiMarketplaceCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.22),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-violet-200">
              Coming soon
            </span>
            <span className="inline-flex items-center rounded-full border border-amber-500/35 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-100/90">
              Ongoing project
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              Case study · AI marketplace · Zero to one
            </span>
          </div>

          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed border-l-2 border-violet-500/50 pl-4">
            This case study is <span className="text-zinc-200">in progress</span>.
            Screens, flows, and metrics will be added when the work is ready—no image
            placeholders until then.
          </p>

          <h1 className="mt-8 font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            MINA — an AI-native marketplace for parents who outgrow baby gear
            overnight
          </h1>
          <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
            Starting from zero with San Francisco mom communities: reduce waste,
            reclaim space, and make resale feel as light as a conversation—not a
            second job.
          </p>

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
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Concept &amp; strategy — in progress
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/50 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-100">
                  Cut listing friction &amp; coordination drag
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <CaseStudyScanSummary items={MINA_SCAN_SUMMARY} />
          </div>

          <a
            href="#why-this-exists"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-500/35 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-400/45 hover:bg-violet-500/15"
          >
            Jump to story
            <span aria-hidden className="text-violet-400/90">
              {"\u2193"}
            </span>
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        <section
          id="why-this-exists"
          className="max-w-3xl scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Why this exists
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Built from the ground up for how fast babies—and closets—change
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            We are designing a marketplace that starts with{" "}
            <span className="text-zinc-100">San Francisco mom groups</span>, not a
            generic national grid. Little ones move through stages quickly: what you
            need at three months is not what you need at nine. Gear is expensive,
            emotionally loaded, and often{" "}
            <span className="text-zinc-100">only useful for a short window</span>—then
            it sits in bins, strollers crowd hallways, and perfectly good items
            age out of relevance.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            In the Bay Area, many families already care deeply about{" "}
            <span className="text-zinc-100">sustainability</span> and conscious
            consumption—but resale still takes time, attention, and learning curve.
            Our bet is simple:{" "}
            <span className="text-zinc-100">
              if we gather demand in trusted parent networks first
            </span>
            , and remove the operational drag of listing and coordinating, more gear
            circulates instead of landfilling or idling in storage.
          </p>
        </section>

        <section className="max-w-3xl space-y-4">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            The pain we are solving
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Too much gear, too little time—and resale that feels like admin work
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Traditional marketplaces assume sellers behave like micro-retailers:
            write titles, pick categories, price competitively, answer the same DM
            questions, and negotiate pickup. For sleep-deprived parents, that is
            exactly why good intentions stall. The problem is not only
            &quot;clutter&quot;—it is{" "}
            <span className="text-zinc-100">
              the recurring cost of attention
            </span>{" "}
            every time a stage ends and a new pile appears.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-400/90">
                Short use cycles
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Items serve a phase, then become obsolete for{" "}
                <em>your</em> family—while still valuable for the next parent in line.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/90">
                Sustainability without guilt trips
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                SF audiences respond to reuse when the path is credible and
                low-friction—not when it adds another chore.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl space-y-4">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Product strategy
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Community first, then scale—so listings find the right families faster
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            We are intentionally{" "}
            <span className="text-zinc-100">aggregating mom communities</span> early:
            shared norms, mutual trust, and local pickup density beat anonymous
            nationwide matching for this category. The goal is to{" "}
            <span className="text-zinc-100">decrease listing time</span> and{" "}
            <span className="text-zinc-100">decrease learning time</span>—parents
            should recognize the product in seconds and complete a sale without
            reading a manual.
          </p>
        </section>

        <section className="max-w-3xl space-y-6">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Core experience
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            An AI agent you talk to—not a form you fight with
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            The app is centered on{" "}
            <span className="text-zinc-100">conversation with an AI agent</span> as
            the primary interface. Instead of navigating dense settings, sellers
            describe what they are passing on, confirm details in plain language,
            and let the system handle the busywork. The same agent helps with{" "}
            <span className="text-zinc-100">transactions</span>: suggesting fair
            pricing language, surfacing next steps, and coordinating{" "}
            <span className="text-zinc-100">location and time</span> through dialogue
            so sellers spend less energy managing individual buyers.
          </p>

          <div className="rounded-2xl border border-violet-500/25 bg-violet-500/5 p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-violet-200 uppercase tracking-wider">
              One photo → many listings
            </h3>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              Parents can <span className="text-zinc-100">take one photo</span> (or a
              single upload batch) and let AI propose{" "}
              <span className="text-zinc-100">multiple listings at once</span>
              —titles, categories, condition notes, and bundle suggestions—ready to
              edit before anything goes live. The objective is to make batching
              outgrown gear feel closer to &quot;showing a friend what is on the
              floor&quot; than &quot;opening a spreadsheet.&quot;
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Seller ↔ AI
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Pickup windows, handoff spots, and buyer communication are steered
                through chat so sellers are not juggling five threads per item.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Less buyer management
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                The agent carries routine coordination and status updates—parents
                intervene when judgment matters, not for every ping.
              </p>
            </div>
          </div>
        </section>

        <section
          id="engineering-proposal"
          className="max-w-3xl scroll-mt-28 space-y-5 sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Proposal &amp; alignment
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            An innovative create-listing flow—and how we stress-tested it with
            engineering
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            Our co-founder emphasized that{" "}
            <span className="text-zinc-100">
              investors care about measurable upside and how clearly the product
              stands out
            </span>
            . To ground that story, I audited{" "}
            <span className="text-zinc-100">
              create-listing flows across mainstream marketplace apps
            </span>
            . None of them centered on a{" "}
            <span className="text-zinc-100">chat-native agent</span> for listing
            creation—most still feel like long forms and category pickers. That gap
            became the wedge I wanted to spell out for the team.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            I translated the direction into{" "}
            <span className="text-zinc-100">mockups and a page flow</span> so
            engineers could follow the narrative beat-by-beat: the user opens with a
            single photo; the model analyzes the scene,{" "}
            <span className="text-zinc-100">
              detects items, and surfaces labels on the image
            </span>
            ; the user then talks to the agent in chat about intent—for example,
            &quot;I want to sell this stroller&quot;—and the system{" "}
            <span className="text-zinc-100">drafts a listing</span> from that
            conversation. The goal was to show a differentiated, investor-friendly
            story without hiding the hard parts.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Engineers pushed back on feasibility:{" "}
            <span className="text-zinc-100">
              one image alone may not carry enough signal for full listing quality
            </span>
            . I folded that into the flow by adding an explicit beat where the agent{" "}
            <span className="text-zinc-100">
              asks the user to upload additional photos
            </span>{" "}
            when detail is thin—so the experience stays ambitious but honest about
            what multimodal models need.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Beyond the selling agent, I also sketched how MINA could grow into
            adjacent agents: one that{" "}
            <span className="text-zinc-100">
              helps coordinate buyers and sellers
            </span>{" "}
            (status, timing, handoff), and a{" "}
            <span className="text-zinc-100">parenting copilot</span> that nudges
            parents through developmental phases—what stage the baby is entering and
            what gear tends to matter—so the app feels useful even between
            transactions.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            The team raised a fair concern: promoting{" "}
            <span className="text-zinc-100">several different AI chat agents</span>{" "}
            could confuse users on the surface and multiply complexity in the
            backend model layer. My counter was directional:{" "}
            <span className="text-zinc-100">
              if each agent has a clearly separated entry point in the product, can
              we also treat the underlying models or orchestration as separate
              lanes—so the UX stays legible and the stack does not collapse into one
              overloaded generalist?
            </span>{" "}
            That question stays open; it is part of the ongoing design–engineering
            trade space as we narrow MVP scope.
          </p>
        </section>

        <section className="max-w-3xl space-y-4">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Design principles (draft)
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Trust, speed, and parent-grade clarity
          </h2>
          <ul className="space-y-3 text-zinc-300 leading-relaxed list-none">
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">01</span>
              <span>
                <span className="text-zinc-100">Preview before publish</span> — AI
                drafts are always visible and editable; nothing ships silently.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">02</span>
              <span>
                <span className="text-zinc-100">Local-first language</span> — copy and
                defaults tuned for SF pickup reality (density, transit, weather).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400 font-semibold shrink-0">03</span>
              <span>
                <span className="text-zinc-100">Quiet automation</span> — the agent
                reduces coordination noise without hiding who is on the other side
                of a transaction.
              </span>
            </li>
          </ul>
        </section>

        <section className="max-w-3xl rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/30 p-8 sm:p-10">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            What will appear here later
          </span>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            Full case study — ongoing · coming soon
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            The next version of this page will include end-to-end flows, research
            snapshots from mom communities, prototype learnings, and UI captures—
            <span className="text-zinc-300">when the project is ready to show</span>.
            If you are reviewing this in recruiting: the narrative above is the
            current product direction; visuals are still in progress.
          </p>
        </section>

        <section className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="ai-marketplace" />
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

import Link from "next/link";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";

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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(242,12,144,0.18),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-bright">
              Coming soon
            </span>
            <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-soft">
              Ongoing project
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              Case study · AI marketplace · Zero to one
            </span>
          </div>

          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed border-l-2 border-brand/50 pl-4">
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

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Role</dt>
              <dd className="text-zinc-200">Product designer · AI UX</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Region</dt>
              <dd className="text-zinc-200">San Francisco · parent communities</dd>
            </div>
            <div>
              <dt className="text-zinc-500 uppercase tracking-wider">Status</dt>
              <dd className="text-zinc-200">
                Ongoing — ship artifacts &amp; visuals later (coming soon)
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-12 sm:py-16 space-y-20">
        <section className="max-w-3xl space-y-4">
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
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
                Short use cycles
              </p>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                Items serve a phase, then become obsolete for{" "}
                <em>your</em> family—while still valuable for the next parent in line.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-bright">
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

          <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-brand-bright uppercase tracking-wider">
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

        <section className="max-w-3xl space-y-4">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Design principles (draft)
          </span>
          <h2 className="text-xl font-semibold text-zinc-100">
            Trust, speed, and parent-grade clarity
          </h2>
          <ul className="space-y-3 text-zinc-300 leading-relaxed list-none">
            <li className="flex gap-3">
              <span className="text-brand-soft font-semibold shrink-0">01</span>
              <span>
                <span className="text-zinc-100">Preview before publish</span> — AI
                drafts are always visible and editable; nothing ships silently.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-soft font-semibold shrink-0">02</span>
              <span>
                <span className="text-zinc-100">Local-first language</span> — copy and
                defaults tuned for SF pickup reality (density, transit, weather).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-brand-soft font-semibold shrink-0">03</span>
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

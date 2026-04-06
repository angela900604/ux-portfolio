import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Product designer in Vancouver—public services, AI products, and systems-minded UX. How I work with AI as part of the craft.",
};

export default function AboutPage() {
  return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl max-w-2xl">
          How I ended up here, and where I’m pointed
        </h1>

        {/* Profile visual */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <Image
              src="/about/profile-v2.png"
              alt="Angela Yang"
              width={768}
              height={1024}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 512px"
              priority
            />
          </div>

          <div>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
              I’m Angela. I became a designer because I kept bumping into the gap
              between what teams meant to ship and what people actually
              experienced—especially when the stakes were high and mistakes were
              hard to undo. I wanted a practice where empathy and rigor lived in
              the same place: where flows, language, and accessibility weren’t
              polish added at the end, but part of how we decided what to build.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
              Product work in public service drew me in because millions of people
              don’t get a “beta”—they get one confusing screen and they’re gone.
              Designing for that scale taught me to hold complexity so users
              don’t have to, and to earn trust in small, concrete ways. AI
              product work sharpened a different muscle: being explicit about what
              the system can promise, where it should stay quiet, and how to
              design for uncertainty without dumping it on the person trying to
              get something done. Those two threads aren’t opposites for me;
              they’re where I keep choosing to spend my time.
            </p>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
              I’m based in Vancouver and I’m building toward roles where I can
              own meaningful slices of the experience—close to research,
              engineering, and the real constraints—on teams that care about
              shipping well, not just shipping fast. I want the work to show that
              thoughtful UX isn’t a tax on velocity; it’s what keeps the first
              release from becoming the expensive fix. If that sounds like your
              team, I’d love to talk.
            </p>
          </div>
        </div>

        {/* What I do / Strengths / What I’m looking for */}
        <section className="mt-14">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                What I do
              </p>
              <h2 className="mt-2 text-lg font-semibold">End-to-end UX</h2>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                Research, interaction design, and design systems — from “what’s
                unclear?” to “what’s shippable?”
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                Where I focus
              </p>
              <h2 className="mt-2 text-lg font-semibold">Public-scale &amp; AI-native products</h2>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                Services millions rely on, AI experiences that need clear guardrails,
                and loyalty or marketplace flows where the backend is messy but the
                UI can’t be.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                What I’m looking for
              </p>
              <h2 className="mt-2 text-lg font-semibold">Product teams to build with</h2>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                Full-time roles where I can own UX decisions, collaborate closely
                with engineering, and ship measurable improvements.
              </p>
            </div>
          </div>
        </section>

        {/* AI-assisted design as process */}
        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Process
          </span>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-100 max-w-2xl">
            AI-assisted design is part of the job—not a side project
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl">
            I treat AI tools the same way I treat Figma or a research plan: as
            leverage for the work product, not a substitute for judgment. In
            practice that means pairing with models for synthesis and variation
            (Claude), using an agentic editor when I want to ship or prototype
            interaction details quickly (Cursor), and staying in Figma for the
            decisions that need pixels and systems. The outcome isn’t “I used
            AI”—it’s faster cycles, clearer bets, and handoffs engineering can
            build from without translating intent from screenshots.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Faster iteration
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                I use AI to compress exploration: more layout and copy variants,
                quicker stress-tests of edge cases, and less time stuck on
                mechanical production—so the calendar goes to critique and
                refinement, not busywork.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Sharper hypotheses
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                Models are strong at surfacing assumptions and alternate framings.
                I use that to tighten problem statements and research questions
                before we lock UI—so we’re testing what we actually believe, not
                the first screen we sketched.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Better handoffs
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                When specs, annotations, and component rationale are easier to
                produce and keep consistent, engineering gets fewer “what did the
                designer mean?” tickets. That’s the bar I hold the toolchain to:
                does it reduce ambiguity for the people who build?
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/angelayangg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-300 hover:text-zinc-100"
          >
            LinkedIn
          </a>
          <Link href="/resume" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
            Resume
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Product designer with 2+ years in UX. Public services, AI products, and marketplaces. Based in Vancouver.",
};

export default function AboutPage() {
  return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl max-w-2xl">
          I design with a product lens and a systems mindset
        </h1>

        {/* Profile visual */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <Image
              src="/about/profile-v2.png"
              alt="Profile page"
              width={768}
              height={1024}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 512px"
              priority
            />
          </div>

          <div>
            <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
              I’m Angela — a product-focused UX designer with 2+ years of
              experience. I use an AI agent as a thinking partner to turn
              ambiguity into clear, actionable roadmaps and user-centered
              solutions.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
              I’ve led end-to-end UX for nationwide public services, AI products,
              and loyalty platforms. My focus is research, clear flows,
              accessibility, and design systems that scale with engineering teams.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
              Based in Vancouver. Open to full-time product design, UX/UI design,
              and AI-assisted creative roles. Available immediately.
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
                What I’m great at
              </p>
              <h2 className="mt-2 text-lg font-semibold">AI-accelerated UX delivery</h2>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                I use new AI tools and automation to remove repetitive work, iterate
                faster, and turn insights into shippable experiences. As a design
                team lead, I also design AI-assisted workflows (with clear UX
                boundaries, safety cues, and measurable outcomes) so teams ship
                with confidence.
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

        {/* How I think */}
        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            04 · How I think
          </span>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-100 max-w-2xl">
            I iterate with AI, then design for humans.
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Downtime experiments
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                During rest time, I explore new AI agents and tools to accelerate
                branding and product visual exploration — for example using Lovart
                to generate and iterate on branding product visuals.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Faster delivery, better UI
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                I also use Cursor to build and refine my portfolio efficiently,
                and Claude + Figma to offload repetitive, time-consuming steps —
                so I can spend more effort on clarity, hierarchy, and the last
                10% that makes UI feel intentional.
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

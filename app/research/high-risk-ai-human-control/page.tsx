import Link from "next/link";
import { CaseStudyContentLayout } from "@/app/case-studies/_components/CaseStudyContentLayout";

export const metadata = {
  title: "High-risk AI needs explicit human control — design note | Angela Yang",
  description:
    "Why preview-before-publish, confirmations, and reversibility matter for AI in marketplaces—principles from MINA parent-facing product work.",
};

const LINK_CLASS =
  "font-medium text-emerald-200/95 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-100";

export default function HighRiskAiHumanControlPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <CaseStudyContentLayout contentClassName="space-y-10 sm:space-y-12">
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
          <Link href="/" className="transition hover:text-zinc-200">
            ← Home
          </Link>
          <span aria-hidden className="text-zinc-700">
            ·
          </span>
          <Link
            href="/case-studies/ai-marketplace"
            className="transition hover:text-zinc-200"
          >
            MINA case study
          </Link>
        </nav>

        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            MINA · AI marketplace (standalone note)
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            High-risk AI needs explicit human control
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            This page pulls the principle out of the case study: what “trust”
            means when the model touches money, messages, and public listings—not
            a shorter disclaimer, but a different interaction shape.
          </p>
        </header>

        <section className="max-w-3xl space-y-5 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Why “high-risk” is the right frame
          </h2>
          <p className="leading-relaxed text-zinc-300">
            In a parent marketplace, the scary failures are not typos—they are{" "}
            <span className="text-zinc-100">wrong price live</span>,{" "}
            <span className="text-zinc-100">a buyer messaged without consent</span>
            , or <span className="text-zinc-100">a payout path no one remembers
            opting into</span>. Users do not experience that as a model error;
            they experience it as loss of agency. That is{" "}
            <span className="text-zinc-100">automation anxiety</span> in a concrete
            form, not an abstract preference for “more transparency.”
          </p>
          <p className="leading-relaxed text-zinc-300">
            So the design question is not “how clever can the agent be?” It is:
            where must the human remain the accountable party, with legible
            boundaries and a way to back out?
          </p>
        </section>

        <section className="max-w-3xl space-y-5 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            What shipped in the interaction model
          </h2>
          <ul className="list-inside list-disc space-y-3 text-zinc-300">
            <li>
              <span className="text-zinc-100">Preview before publish</span>—drafts
              stay editable; nothing goes live until the seller has seen what the
              system proposed.
            </li>
            <li>
              <span className="text-zinc-100">Explicit confirmations</span>—high
              stakes steps surface what will happen next, in plain language, not
              only a single “Continue.”
            </li>
            <li>
              <span className="text-zinc-100">Reversibility</span>—where policy
              allows, prefer flows that can be undone or corrected without a
              support ticket; the product should not bet user trust on perfect
              first-shot AI.
            </li>
          </ul>
          <p className="leading-relaxed text-zinc-300">
            The through-line:{" "}
            <span className="text-zinc-100">
              legible limits beat silent cleverness
            </span>
            . The goal is the same class of trust consumer AI needs when money or
            reputation is on the line—bounded automation, not magic.
          </p>
        </section>

        <section className="max-w-3xl space-y-4 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Project context
          </h2>
          <p className="leading-relaxed text-zinc-300">
            I developed these patterns on{" "}
            <span className="text-zinc-100">MINA</span>, an AI-assisted marketplace
            for parents (San Francisco mom communities, Canada App Store). For
            screens, metrics, and Photo-to-Publish detail, see the full write-up.
          </p>
          <p>
            <Link href="/case-studies/ai-marketplace#ai-trust" className={LINK_CLASS}>
              Open MINA case study · AI trust section →
            </Link>
          </p>
        </section>
      </CaseStudyContentLayout>
    </article>
  );
}

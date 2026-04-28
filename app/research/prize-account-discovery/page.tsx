import Link from "next/link";
import { CaseStudyContentLayout } from "@/app/case-studies/_components/CaseStudyContentLayout";

export const metadata = {
  title:
    "The feature existed. Nobody knew. — e-Invoice prize payout discovery | Angela Yang",
  description:
    "Discovery problem on Taiwan MoF e-invoice: auto-deposit account unknown to elderly and foreign-resident users—onboarding and trust design response.",
};

const LINK_CLASS =
  "font-medium text-emerald-200/95 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-100";

export default function PrizeAccountDiscoveryPage() {
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
            href="/user-research-journey"
            className="transition hover:text-zinc-200"
          >
            User research journey
          </Link>
          <span aria-hidden className="text-zinc-700">
            ·
          </span>
          <Link
            href="/case-studies/e-invoice-app"
            className="transition hover:text-zinc-200"
          >
            e-Invoice case study
          </Link>
        </nav>

        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Taiwan e-Invoice · Onboarding &amp; trust
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            The feature existed. Nobody knew.
          </h1>
          <p className="text-lg font-medium text-zinc-300">
            People didn&apos;t miss prizes because they didn&apos;t care
          </p>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            A discovery problem, not a motivation problem: the setting was in the
            product, but never legible in people&apos;s mental model—especially for
            silver users and foreign residents.
          </p>
        </header>

        <section className="max-w-3xl space-y-6 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Story
          </h2>
          <blockquote className="border-l-2 border-violet-500/45 pl-5 text-lg leading-relaxed text-zinc-200 sm:text-xl">
            Older adults and foreign residents missed prize payouts over and
            over—not because they forgot, but because they had no idea an
            auto-deposit account setting existed. The capability was in the
            product; nobody had ever explained it to them.
          </blockquote>
          <p className="leading-relaxed text-zinc-300">
            In research, the pattern was not lack of motivation—it was that{" "}
            <span className="text-zinc-100">
              no one had surfaced the auto-deposit account
            </span>{" "}
            as a first-class step. Ministry jargon and buried settings hid
            something that only helps if people know it exists and trust why bank
            details are collected.
          </p>
        </section>

        <section className="max-w-3xl space-y-4 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Solution
          </h2>
          <p className="leading-relaxed text-zinc-300">
            Move the auto-deposit / bank-link story{" "}
            <span className="text-zinc-100">into first-launch onboarding</span>,
            not only as a setting for the already-informed. Pair each field with
            plain-language rationale: why this data is needed, how it connects to
            getting money automatically, and what the ministry does with it—
            <span className="text-zinc-100">trust design</span>, not just form
            length.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Bring it forward in first-launch onboarding and explain each field—why
            bank information is needed and how it connects to automatic payout.
          </p>
        </section>

        <section className="max-w-3xl space-y-4 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Related
          </h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-300">
            <li>
              <Link href="/user-research-journey" className={LINK_CLASS}>
                User research journey
              </Link>
              —multisegment table and persona notes on prize and settings
              findability.
            </li>
            <li>
              <Link
                href="/case-studies/e-invoice-app#testing"
                className={LINK_CLASS}
              >
                e-Invoice · moderated testing
              </Link>
              —task success, comprehension vs. dexterity, and iteration priorities.
            </li>
          </ul>
        </section>
      </CaseStudyContentLayout>
    </article>
  );
}

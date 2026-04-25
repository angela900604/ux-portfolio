import Link from "next/link";
import { CaseStudyContentLayout } from "@/app/case-studies/_components/CaseStudyContentLayout";

export const metadata = {
  title:
    "The bottleneck wasn't inside the app — e-Invoice checkout research | Angela Yang",
  description:
    "Field research on Taiwan MoF e-invoice: elderly users skipped at checkout, barcode widget, and scan-first home—evidence from multisegment interviews.",
};

const LINK_CLASS =
  "font-medium text-emerald-200/95 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-100";

export default function ElderlyCheckoutWidgetPage() {
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
            Taiwan e-Invoice · Field research
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            The bottleneck wasn&apos;t inside the app
          </h1>
          <p className="text-lg font-medium text-zinc-300">
            e-Invoice · 老人被收銀台跳過的故事
          </p>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            A pattern from multisegment interviews and checkout observation: the
            failure mode was often social and temporal—not a missing button.
          </p>
        </header>

        <section className="max-w-3xl space-y-6 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            故事
          </h2>
          <blockquote className="border-l-2 border-emerald-500/50 pl-5 text-lg leading-relaxed text-zinc-200 sm:text-xl">
            老年人還沒掏出手機，收銀員就默認他們沒有 app、直接給紙本。不是用戶放棄，是系統在他們之前就移動了。
          </blockquote>
          <p className="leading-relaxed text-zinc-300">
            Before older shoppers could open the official app, cashiers often
            assumed they would not use it and handed over a paper invoice. The app
            never entered the interaction—not because the person gave up, but
            because the lane had already moved on.
          </p>
          <p className="leading-relaxed text-zinc-300">
            For people who did get their phone out, a second friction showed up in
            the product: scan and barcode were not the obvious first move on home.
            That combination—speed at the register plus buried entry points—is
            what pushed scan-first hierarchy and a carrier surface you can reach
            without opening the full app.
          </p>
        </section>

        <section className="max-w-3xl space-y-4 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Solution
          </h2>
          <p className="leading-relaxed text-zinc-300">
            <span className="text-zinc-100">Home-screen widget:</span> put the
            mobile barcode one step from pocket so checkout does not depend on
            launching the app and hunting for the right screen. Pair that with a
            scan action locked to the most prominent position on home—visible on
            launch, not displaced by promos or personalization.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            把 barcode 做成 widget，不用開 app 就能在結帳時出示載具。
          </p>
        </section>

        <section className="max-w-3xl space-y-4 border-t border-zinc-800 pt-10 sm:pt-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Where this lives in the work
          </h2>
          <ul className="list-inside list-disc space-y-2 text-zinc-300">
            <li>
              <Link href="/user-research-journey" className={LINK_CLASS}>
                User research journey
              </Link>
              —competitor benchmarks, five audience groups (including low vision),
              and the thread from reviews to shipped patterns.
            </li>
            <li>
              <Link href="/case-studies/e-invoice-app#key-outcomes" className={LINK_CLASS}>
                e-Invoice case study · key outcomes
              </Link>
              —scan-first home, before/after, and outcome framing.
            </li>
          </ul>
        </section>
      </CaseStudyContentLayout>
    </article>
  );
}

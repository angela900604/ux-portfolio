import Link from "next/link";
import { CaseStudyContentLayout } from "@/app/case-studies/_components/CaseStudyContentLayout";
import { EInvoiceMultisegmentResearchSections } from "@/app/case-studies/e-invoice-app/EInvoiceMultisegmentResearchSections";

export const metadata = {
  title: "Multisegment interviews — Taiwan e-invoice research | Angela Yang",
  description:
    "App Store signals plus five-audience interviews (including low vision): segment pains, shared truths, field research, and sketch personas from the MoF Cloud Invoice redesign.",
};

export default function MultisegmentInterviewsPage() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <CaseStudyContentLayout contentClassName="space-y-14 sm:space-y-16">
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
          <Link href="/" className="transition hover:text-zinc-200">
            ← Home
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
            User research · Multisegment interviews
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            From public reviews to five audience groups—including low vision
          </h1>
          <p className="text-sm leading-relaxed text-zinc-400">
            Layered evidence for the Ministry of Finance Cloud Invoice App: what
            showed up in App Store feedback, then what diverged and converged across
            age, language, and ability in moderated research—with sketch personas
            to keep segments tangible for design decisions.
          </p>
        </header>

        <EInvoiceMultisegmentResearchSections />
      </CaseStudyContentLayout>
    </article>
  );
}

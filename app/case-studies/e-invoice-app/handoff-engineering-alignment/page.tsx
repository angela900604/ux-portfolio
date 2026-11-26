import Link from "next/link";
import { CaseStudyContentLayout } from "../../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../../_components/CaseStudyInViewSection";
import { EInvoiceHandoffBody } from "../EInvoiceHandoffBody";
import { CASE_STUDY_SECTION_TITLE_CLASS } from "@/lib/site-shell";

export const metadata = {
  title:
    "Handoff & engineering alignment — MOF Uniform Invoice Award Redemption app | Angela Yang",
  description: "Handoff included three layers:",
};

export default function EInvoiceHandoffPage() {
  return (
    <article className="min-h-screen">
      <CaseStudyContentLayout contentClassName="space-y-16 sm:space-y-20">
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
        <CaseStudyInViewSection className="space-y-4">
          <h1 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Handoff &amp; engineering alignment
          </h1>
          <p className="max-w-2xl cs-body">Handoff included three layers:</p>
        </CaseStudyInViewSection>
        <EInvoiceHandoffBody />
      </CaseStudyContentLayout>
    </article>
  );
}

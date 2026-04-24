import Link from "next/link";
import { CaseStudyContentLayout } from "@/app/case-studies/_components/CaseStudyContentLayout";
import { EInvoiceVoiceOverAccessibilityPanel } from "@/app/case-studies/e-invoice-app/EInvoiceVoiceOverAccessibilityPanel";

export const metadata = {
  title: "VoiceOver accessibility research — Taiwan e-invoice app | Angela Yang",
  description:
    "VoiceOver sessions on the legacy MoF Cloud Invoice app: broken focus, roles, and copy—component annotations for engineering toward 2026 accessibility certification.",
};

export default function AccessibilityVoiceoverPage() {
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
            User research · Accessibility
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            VoiceOver sessions on legacy exposed broken focus, roles, and copy—we
            annotated components for engineering on the path to 2026 certification.
          </h1>
        </header>

        <EInvoiceVoiceOverAccessibilityPanel />
      </CaseStudyContentLayout>
    </article>
  );
}

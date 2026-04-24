import Link from "next/link";
import { EInvoiceVoiceOverAccessibilityPanel } from "@/app/case-studies/e-invoice-app/EInvoiceVoiceOverAccessibilityPanel";

const VIEW_PROJECT_CLASS =
  "inline-flex items-center justify-center rounded-full border border-emerald-500/45 bg-emerald-500/15 px-7 py-3 text-base font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/25 hover:text-white";

export function AccessibilityVoiceoverMain({
  showViewProject = true,
}: {
  showViewProject?: boolean;
}) {
  return (
    <>
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          User research · Accessibility
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          Accessibility Work – Screen Reader Focus
        </h2>
      </header>

      <EInvoiceVoiceOverAccessibilityPanel />

      {showViewProject ? (
        <div className="pt-2">
          <Link href="/case-studies/e-invoice-app" className={VIEW_PROJECT_CLASS}>
            View project
          </Link>
        </div>
      ) : null}
    </>
  );
}

import { EInvoiceVoiceOverAccessibilityPanel } from "@/app/case-studies/e-invoice-app/EInvoiceVoiceOverAccessibilityPanel";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";

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
          <SplitCapsuleLink
            href="/case-studies/e-invoice-app"
            label="View project"
            variant="ghostEmerald"
          />
        </div>
      ) : null}
    </>
  );
}

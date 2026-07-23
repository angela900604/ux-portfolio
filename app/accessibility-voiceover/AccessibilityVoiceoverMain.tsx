import { EInvoiceVoiceOverAccessibilityPanel } from "@/app/case-studies/e-invoice-app/EInvoiceVoiceOverAccessibilityPanel";
import { SplitCapsuleLink } from "@/app/components/SplitCapsuleLink";
import {
  RESEARCH_SECTION_HEADER,
  RESEARCH_SECTION_LABEL,
  RESEARCH_SECTION_TITLE,
} from "@/lib/case-study-theme";

export function AccessibilityVoiceoverMain({
  showViewProject = true,
}: {
  showViewProject?: boolean;
}) {
  return (
    <>
      <header className={RESEARCH_SECTION_HEADER}>
        <p className={RESEARCH_SECTION_LABEL}>User research · Accessibility</p>
        <h2 className={RESEARCH_SECTION_TITLE}>
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

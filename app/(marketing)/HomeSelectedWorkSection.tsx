import { MARKETING_SELECTED_WORK } from "@/lib/marketing-work";
import { MARKETING_SECTION_TITLE_CLASS } from "@/lib/marketing-section-title";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

export function HomeSelectedWorkSection() {
  return (
    <section>
      <h2 className={MARKETING_SECTION_TITLE_CLASS}>Selected Work</h2>
      <MarketingSelectedWorkGrid items={MARKETING_SELECTED_WORK} />
    </section>
  );
}

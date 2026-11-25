import { MARKETING_SELECTED_WORK } from "@/lib/marketing-work";
import { MarketingSelectedWorkGrid } from "./MarketingSelectedWorkGrid";

export function HomeSelectedWorkSection() {
  return (
    <section>
      <MarketingSelectedWorkGrid items={MARKETING_SELECTED_WORK} />
    </section>
  );
}

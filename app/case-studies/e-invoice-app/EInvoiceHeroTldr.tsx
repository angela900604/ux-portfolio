import {
  CaseStudyHeroTldr,
  type CaseStudyHeroTldrMetric,
} from "../_components/CaseStudyHeroTldr";

const METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Scale",
    value: "20,000,000+ users",
    title: "Taiwan National Public Service",
  },
  {
    kicker: "Mechanisms",
    value: "24% → 18%",
    title: "Reducing missed prize redemptions",
    detail:
      "Client-reported share of missed top-tier prize redemptions: about 24% before ship, 18% one month after launch—directional internal read, not a published MoF figure.",
  },
  {
    kicker: "Testing scope",
    value: "88%",
    title: "Task success across ages",
    detail:
      "Moderated prototype usability testing sessions with users 18–70+, including visually impaired participants, on scan, donate, and redemption.",
  },
];

export function EInvoiceHeroTldr() {
  return (
    <CaseStudyHeroTldr
      headline={
        <>
          Shipped for 20M+ users · 5 user segments including low-vision and foreign
          residents · Taiwan Ministry of Digital Affairs certified
        </>
      }
      metrics={METRICS}
    />
  );
}

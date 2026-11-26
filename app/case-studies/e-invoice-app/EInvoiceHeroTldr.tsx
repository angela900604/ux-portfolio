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
    value: "12",
    title: "Moderated prototype sessions",
    detail:
      "Moderated prototype usability testing sessions with users 18–70+, including visually impaired participants, on scan, donate, and redemption.",
  },
];

export function EInvoiceHeroTldr() {
  return (
    <CaseStudyHeroTldr
      headline={
        <>
          Shipped for 20M+ users. Five user segments: seniors, middle-aged users,
          younger users, foreign residents (including newcomers), and low-vision
          users.
        </>
      }
      metrics={METRICS}
    />
  );
}

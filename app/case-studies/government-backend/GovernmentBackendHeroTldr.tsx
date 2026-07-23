import {
  CaseStudyHeroTldr,
  type CaseStudyHeroTldrMetric,
} from "../_components/CaseStudyHeroTldr";

const CYAN_600 = "#05C3DD";
const CYAN_600_BG = "rgba(5, 195, 221, 0.18)";

const METRICS: CaseStudyHeroTldrMetric[] = [
  {
    kicker: "Summary",
    value: "600+",
    title: "Role-based access control",
    detail:
      "I designed a role-based permission system that aligned responsibilities across departments. By hiding inaccessible features and limiting high-impact actions to specific roles, the platform enabled teams to work independently while preventing conflicts that could affect public-facing content.",
  },
  {
    kicker: "Reporting",
    value: "CSV",
    title: "Self-service dashboards",
    detail:
      "I redesigned reporting into an actionable dashboard with weekly and monthly views, time-based filters, and CSV export. Staff could prepare reports independently for meetings and audits, reducing reliance on engineers and speeding up operational workflows.",
  },
  {
    kicker: "System logic",
    value: "Ship",
    title: "UI decisions under constraints",
    detail:
      "Working closely with engineers, I designed backend flows that balanced flexibility and stability—such as version control with mandatory update settings and build-code mapping—so critical updates could be enforced quickly without risking system inconsistency.",
  },
];

export function GovernmentBackendHeroTldr() {
  return (
    <CaseStudyHeroTldr
      metricValueClassName="text-[#05C3DD]"
      headline={
        <>
          Supporting{" "}
          <span
            className="whitespace-nowrap rounded-md px-1.5 py-0.5 tabular-nums"
            style={{ backgroundColor: CYAN_600_BG, color: CYAN_600 }}
          >
            600+
          </span>{" "}
          government staff with role-based access—one reliable backend for MoF
          lottery operations.
        </>
      }
      metrics={METRICS}
    />
  );
}

import Link from "next/link";
import { CompetitorLandscapeTable } from "@/app/case-studies/e-invoice-app/CompetitorLandscapeTable";

const LABEL = "text-xs font-semibold uppercase tracking-widest text-zinc-500";
const BODY = "text-base leading-relaxed text-zinc-300";
const LIST = "mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-300 marker:text-zinc-600";

const VIEW_PROJECT_CLASS =
  "inline-flex items-center justify-center rounded-full border border-emerald-500/45 bg-emerald-500/15 px-7 py-3 text-base font-semibold text-emerald-100 transition hover:border-emerald-400/70 hover:bg-emerald-500/25 hover:text-white";

export function CompetitorAnalysisMain({
  showViewProject = true,
}: {
  showViewProject?: boolean;
}) {
  return (
    <>
      <header className="max-w-3xl space-y-4">
        <p className={LABEL}>User research · Competitor analysis</p>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
          MoF app vs. mature third parties and LINE—where trust, habit, and speed
          diverge
        </h2>
        <p className={`${BODY} text-zinc-400`}>
          Ministry of Finance Cloud Invoice redesign (Feb–Nov 2025): App Store
          signals plus screen-level benchmarks before IA and UI.
        </p>
      </header>

      <section className="space-y-5" aria-labelledby="comp-landscape-heading">
        <p id="comp-landscape-heading" className={LABEL}>
          Landscape
        </p>
        <CompetitorLandscapeTable />
      </section>

      <section className="space-y-4" aria-labelledby="comp-scope-heading">
        <p id="comp-scope-heading" className={LABEL}>
          Compared
        </p>
        <ul className={LIST}>
          <li>Official MoF listing vs. two high-volume third-party passbooks.</li>
          <li>LINE invoice mini app (no separate install, social context).</li>
          <li>Core tasks: first open, scan, carrier / barcode, prizes, spend views.</li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="comp-line-heading">
        <p id="comp-line-heading" className={LABEL}>
          Patterns we mirrored (within policy)
        </p>
        <ul className={LIST}>
          <li>
            <span className="font-medium text-zinc-200">LINE-style onboarding:</span>{" "}
            illustrated first-run steps, hints per job, hide/expand barcode widget to
            save space—mapped to ministry-first-launch guidance and clearer prize /
            donation paths + multi-language.
          </li>
          <li>
            <span className="font-medium text-zinc-200">
              Third-party passbook speed:
            </span>{" "}
            multi-login (Google / Apple / biometrics), filters and swipe lists, lottery
            countdowns—mapped to in-app biometrics + password recovery and explicit
            prize deadlines / status.
          </li>
          <li>
            <span className="font-medium text-zinc-200">
              Passbook-class depth (Invoice Passbook tier):
            </span>{" "}
            charts, quick barcode copy, widgets / wearables, optional sound for
            wins—mapped to optional home modules, fixed rails for scan + passbook,
            sensory cues only where regulations allow.
          </li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="comp-filter-heading">
        <p id="comp-filter-heading" className={LABEL}>
          Cut or adapted
        </p>
        <ul className={LIST}>
          <li>No commercial partner slots or private campaigns in a MoF surface.</li>
          <li>Legal review on claims, promos, and data copy—not every “growth” lever.</li>
          <li>Backend limits: real-time spend depth and some integrations stay phased.</li>
        </ul>
      </section>

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

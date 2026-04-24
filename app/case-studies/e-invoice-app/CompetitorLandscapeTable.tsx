import type { ReactNode } from "react";

/** Competitor landscape — Taiwan invoice apps (compact summary). */
export function CompetitorLandscapeTable() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <CompetitorCard
        name="MoF Cloud Invoice"
        tag="Official"
        tagClass="text-zinc-500"
        ratingLine={
          <>
            <Star />{" "}
            <span className="tabular-nums font-medium text-zinc-200">2.5</span>
            <span className="text-zinc-500"> · ~9K reviews</span>
          </>
        }
        summary="Trust and policy-complete features; weak on speed, spending insight, and approachable density for silver users."
      />
      <CompetitorCard
        name="Invoice Passbook"
        tag="Third-party"
        tagClass="text-teal-400/80"
        ratingLine={
          <>
            <Star />{" "}
            <span className="tabular-nums font-medium text-zinc-200">4.8</span>
            <span className="text-zinc-500"> · ~320K reviews</span>
          </>
        }
        summary="Habit-forming UX—charts, widgets, draw alerts with sound; advanced corners can feel crowded."
      />
      <CompetitorCard
        name="Cloud Invoice (3rd party)"
        tag="Third-party"
        tagClass="text-teal-400/80"
        ratingLine={
          <>
            <Star />{" "}
            <span className="tabular-nums font-medium text-zinc-200">4.8</span>
            <span className="text-zinc-500"> · ~240K reviews</span>
          </>
        }
        summary="Clean UI and gentle onboarding; strong on analytics and quick barcode access via widgets."
      />
      <CompetitorCard
        name="LINE invoice"
        tag="LINE mini-app"
        tagClass="text-emerald-400/75"
        ratingLine={
          <span className="text-zinc-500">No standalone store listing</span>
        }
        summary="Zero extra install inside LINE; simple flows and social context—advanced needs still spill to other tools."
      />
    </div>
  );
}

function Star() {
  return (
    <span className="text-teal-400/90" aria-hidden>
      {"\u2605"}
    </span>
  );
}

function CompetitorCard({
  name,
  tag,
  tagClass,
  ratingLine,
  summary,
}: {
  name: string;
  tag: string;
  tagClass: string;
  ratingLine: ReactNode;
  summary: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/25 px-4 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:px-5 sm:py-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p className="text-base font-semibold tracking-tight text-zinc-100">{name}</p>
        <span className={`text-[11px] font-medium uppercase tracking-wide ${tagClass}`}>
          {tag}
        </span>
      </div>
      <p className="mt-2 text-sm leading-snug text-zinc-400">{ratingLine}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{summary}</p>
    </div>
  );
}

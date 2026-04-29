/**
 * Schematic IA: stakeholder org columns → single RBAC-gated admin → public surfaces.
 * Matches the five permission columns used in the RBAC matrix on the case study page.
 */
export function GovernmentBackendUnifiedIaDiagram() {
  const orgUnits = [
    { abbr: "Center", hint: "Fiscal Information Center" },
    { abbr: "NTA HQ", hint: "National Tax Administration HQ" },
    { abbr: "NTA field", hint: "Branches & regional offices" },
    { abbr: "Printing", hint: "Printing / voucher operations" },
    { abbr: "Tax admin.", hint: "Tax administration units" },
  ] as const;

  const outputs = [
    { title: "Consumer app", detail: "Push, promos, versions, in-app messaging" },
    { title: "Cross-unit reporting", detail: "Shared dashboards, CSV, audit views" },
    { title: "Governed content", detail: "Promotion zone, pins, national messaging" },
  ] as const;

  return (
    <figure className="mx-auto max-w-4xl space-y-4">
      <div
        className="rounded-2xl border border-zinc-700/80 bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-zinc-950 px-4 py-6 sm:px-8 sm:py-8"
        aria-label="Information architecture diagram: five organizational inputs converge into one Ministry of Finance admin platform, then fan out to the public app, reporting, and governed content."
      >
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Organizational inputs (permission matrix columns)
        </p>
        <div className="mt-4 flex flex-wrap items-stretch justify-center gap-2 sm:gap-3">
          {orgUnits.map((u) => (
            <div
              key={u.abbr}
              className="flex min-w-[5.5rem] max-w-[9.5rem] flex-1 flex-col justify-center rounded-xl border border-zinc-600/50 bg-zinc-900/70 px-2.5 py-2.5 text-center sm:min-w-0 sm:max-w-none sm:flex-none sm:px-3"
            >
              <span className="text-xs font-semibold text-zinc-100 sm:text-sm">
                {u.abbr}
              </span>
              <span className="mt-1 text-[10px] leading-snug text-zinc-500 sm:text-[11px]">
                {u.hint}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mx-auto my-4 flex h-8 w-px bg-gradient-to-b from-zinc-600 to-zinc-500 sm:my-5"
          aria-hidden
        />
        <div className="mx-auto max-w-lg rounded-2xl border border-emerald-500/35 bg-emerald-950/25 px-4 py-4 text-center shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)] sm:px-6 sm:py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200/90">
            Unified layer
          </p>
          <p className="mt-2 text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
            Single MoF admin platform
          </p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
            One navigation shell and module map—basics, statistics, notifications,
            promotion zone—with RBAC hiding or revealing actions per org column.
          </p>
        </div>

        <div
          className="mx-auto my-4 flex h-8 w-px bg-gradient-to-b from-zinc-500 to-zinc-600 sm:my-5"
          aria-hidden
        />
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Downstream surfaces (same system of record)
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {outputs.map((o) => (
            <div
              key={o.title}
              className="rounded-xl border border-zinc-700/70 bg-zinc-900/50 px-3 py-3 text-center sm:px-4 sm:py-4"
            >
              <p className="text-sm font-semibold text-zinc-100">{o.title}</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-500 sm:text-xs">
                {o.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-center text-xs leading-relaxed text-zinc-500 sm:text-sm">
        Workshops produced five stakeholder-defined columns; instead of separate
        tools per unit, the IA routes every unit through the same module map with
        different grants—so data and policy changes stay consistent end-to-end.
      </figcaption>
    </figure>
  );
}

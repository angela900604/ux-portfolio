/** Competitor landscape — Taiwan invoice apps (English). */
export function CompetitorLandscapeTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800/80 bg-zinc-900/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
      <table className="min-w-[920px] w-full text-left text-sm" lang="en">
        <thead>
          <tr className="border-b border-zinc-800/90 bg-zinc-800/40">
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-300">
              Product
            </th>
            <th className="px-4 py-3.5 text-center text-[11px] font-semibold tracking-wide text-zinc-300 whitespace-nowrap">
              Rating / reviews
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-300">
              Positioning
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-300">
              Who it&apos;s for
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-300">
              Strengths
            </th>
            <th className="px-4 py-3.5 text-[11px] font-semibold tracking-wide text-zinc-300">
              Gaps
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/70 text-zinc-300">
          <tr className="align-top odd:bg-zinc-950/25">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              MoF Cloud Invoice
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                Official
              </span>
            </td>
            <td className="px-4 py-3.5">
              <MetricBadge score="2.5" reviews="~9K reviews" />
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Government e-invoice hub—emphasizes{" "}
              <span className="text-teal-300/95">stability, accuracy, security</span>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              People who want an official source, basic wallet features, and trust
              in data handling
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Strong trust and core cloud-invoice features
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Narrow feature set; weak spending insights; UI and reliability issues;
              limited paper scan
            </td>
          </tr>
          <tr className="align-top odd:bg-zinc-950/25">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              Invoice Passbook
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                Third-party
              </span>
            </td>
            <td className="px-4 py-3.5">
              <MetricBadge score="4.8" reviews="~320K reviews" />
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Full-featured app—built for{" "}
              <span className="text-teal-300/95">habit and repeat use</span>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Digitally fluent users who care about spend tracking and rewards
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Clear charts; draw alerts with sound (accessibility-friendly); widgets
              and multi-device support
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Advanced areas feel dense; promos can crowd the UI
            </td>
          </tr>
          <tr className="align-top odd:bg-zinc-950/25">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              Cloud Invoice (3rd party)
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                Third-party
              </span>
            </td>
            <td className="px-4 py-3.5">
              <MetricBadge score="4.8" reviews="~240K reviews" />
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Cloud storage plus{" "}
              <span className="text-teal-300/95">spending analytics</span>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Efficiency-focused users who want a clean UI and deeper management
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Clean interface, gentle onboarding; desktop widgets for quick barcode
              access
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Some modules feel unmaintained or thin in daily use
            </td>
          </tr>
          <tr className="align-top odd:bg-zinc-950/25">
            <td className="px-4 py-3.5 font-medium text-zinc-100">
              LINE invoice
              <span className="mt-0.5 block text-[11px] font-normal text-zinc-500">
                LINE ecosystem
              </span>
            </td>
            <td className="px-4 py-3.5">
              <div className="mx-auto w-fit min-w-[7rem] rounded-lg border border-zinc-700/50 bg-zinc-800/35 px-4 py-3 text-center">
                <span className="text-sm font-medium text-zinc-500">—</span>
                <span className="mt-1 block text-[11px] text-zinc-500">
                  No standalone App Store listing
                </span>
              </div>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Lives inside LINE—wins on{" "}
              <span className="text-teal-300/95">zero extra install</span>
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Heavy LINE users who want simple flows tied to chat and pay
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              No separate download; social context; ties to LINE Pay and points
            </td>
            <td className="px-4 py-3.5 text-zinc-400 leading-relaxed">
              Core tasks stay basic; advanced needs lean on other LINE services; no
              native desktop widget
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MetricBadge({
  score,
  reviews,
}: {
  score: string;
  reviews: string;
}) {
  return (
    <div className="mx-auto w-fit min-w-[7.25rem] rounded-lg border border-teal-500/20 bg-teal-950/20 px-4 py-3 text-center ring-1 ring-inset ring-white/[0.04]">
      <span className="text-[15px] leading-none text-teal-400/90" aria-hidden>
        {"\u2605"}
      </span>
      <span className="mt-1 block text-2xl font-semibold tabular-nums leading-none tracking-tight text-zinc-100">
        {score}
      </span>
      <span className="mt-2 block text-[11px] font-medium text-zinc-500">
        {reviews}
      </span>
    </div>
  );
}

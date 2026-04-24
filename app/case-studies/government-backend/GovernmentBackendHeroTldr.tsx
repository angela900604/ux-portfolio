/** TL;DR summary band for the government-backend hero (matches e-invoice TL;DR shell). */
function TldrTargetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  );
}

const METRICS = [
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
  {
    kicker: "Final result",
    value: "One",
    title: "Unified cross-department platform",
    detail:
      "The final backend platform unified the management of announcements, promotions, push notifications, data reports, and app version updates. With carefully defined role-based permissions, workflow-driven reporting, and system-level consistency, the design enabled government staff across multiple departments to collaborate effectively within one reliable platform.",
  },
] as const;

export function GovernmentBackendHeroTldr() {
  return (
    <div className="rounded-[1.75rem] bg-white/80 p-6 text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] ring-1 ring-white/40 backdrop-blur-sm sm:p-8 md:p-10">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
          <TldrTargetIcon className="h-3.5 w-3.5 opacity-90" />
          TL;DR
        </span>
        <h2 className="mt-5 w-full max-w-5xl text-pretty text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl md:max-w-6xl md:text-[2rem] md:leading-[1.12]">
          Supporting{" "}
          <span className="whitespace-nowrap">600+</span> government staff with
          role-based access—one reliable backend for MoF lottery operations.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {METRICS.map((m) => (
          <div
            key={m.kicker}
            className="flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-sm"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
              {m.kicker}
            </p>
            <p className="mt-3 text-2xl font-bold tabular-nums tracking-tight text-emerald-600 sm:text-3xl">
              {m.value}
            </p>
            <p className="mt-2 text-sm font-semibold leading-snug text-zinc-900">
              {m.title}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-600 sm:text-sm">
              {m.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

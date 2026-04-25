/** Light “TL;DR” summary band for the e-invoice hero (below-fold). */
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
    kicker: "What we shipped",
    value: "68% → 92%",
    title: "Increasing login success",
    detail:
      "Biometric login and in-app password recovery so more people finish sign-in on their own.",
  },
  {
    kicker: "Guided setup detail",
    value: "+30%",
    title: "Boosting onboarding completion",
    detail:
      "First-launch steps for biometrics, bank link, notifications, and cloud backup—explained one job at a time.",
  },
  {
    kicker: "Mechanisms",
    value: "−70%",
    title: "Reducing missed prize redemptions",
    detail:
      "Clearer deadlines, status, and push alerts so wins are not discovered too late.",
  },
  {
    kicker: "Testing scope",
    value: "88%",
    title: "Task success across ages",
    detail:
      "Moderated sessions with users 18–70+, including visually impaired participants, on scan, donate, and redemption.",
  },
] as const;

export function EInvoiceHeroTldr() {
  return (
    <div className="rounded-[1.75rem] bg-white/80 p-6 text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] ring-1 ring-white/40 backdrop-blur-sm sm:p-8 md:p-10">
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
          <TldrTargetIcon className="h-3.5 w-3.5 opacity-90" />
          TL;DR
        </span>
        <h2 className="mt-5 w-full max-w-5xl text-pretty text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl md:max-w-6xl md:text-[2rem] md:leading-[1.12]">
          Shipped for 20M+ users · 5 user segments including low-vision and foreign
          residents · Taiwan Ministry of Digital Affairs certified
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="mt-2 text-xs leading-relaxed text-zinc-600">{m.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

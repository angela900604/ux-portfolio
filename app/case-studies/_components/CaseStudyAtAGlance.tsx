export type CaseStudyAtAGlanceItem = {
  label: string;
  value: string;
};

type Props = {
  items: readonly CaseStudyAtAGlanceItem[];
  /** Left accent stripe — Baskin-Robbins uses brand pink; others default to violet. */
  accent?: "default" | "baskin";
};

const ACCENT_BAR = {
  default:
    "bg-gradient-to-b from-violet-500/80 via-violet-400/35 to-fuchsia-600/45",
  baskin:
    "bg-gradient-to-b from-[#F20C90]/90 via-[#f20c90]/45 to-[#b80768]/50",
} as const;

/**
 * “At a glance” — single segmented panel (not four separate cards).
 */
export function CaseStudyAtAGlance({
  items,
  accent = "default",
}: Props) {
  const bar = ACCENT_BAR[accent];

  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        At a glance
      </p>
      <div
        className="relative flex overflow-hidden rounded-2xl bg-zinc-900/25"
        aria-label="Project summary at a glance"
      >
        <div className={`w-1 shrink-0 ${bar}`} aria-hidden />
        <div className="flex min-w-0 flex-1 flex-col lg:flex-row">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`min-w-0 flex-1 px-5 py-4 sm:px-6 sm:py-5 ${
                i > 0
                  ? "border-t border-zinc-800/75 lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-zinc-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

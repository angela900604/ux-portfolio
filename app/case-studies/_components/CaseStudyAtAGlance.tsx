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
 * “At a glance” — left accent stripe with inline columns (no card chrome).
 */
export function CaseStudyAtAGlance({
  items,
  accent = "default",
}: Props) {
  const bar = ACCENT_BAR[accent];

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        At a glance
      </p>
      <div
        className="relative flex"
        aria-label="Project summary at a glance"
      >
        <div className={`w-1 shrink-0 self-stretch ${bar}`} aria-hidden />
        <div className="flex min-w-0 flex-1 flex-col gap-y-3 lg:flex-row lg:gap-x-6 lg:gap-y-0 xl:gap-x-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="min-w-0 flex-1 px-4 py-2 sm:px-5 sm:py-2.5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium leading-snug text-zinc-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

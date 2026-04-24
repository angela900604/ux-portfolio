export type CaseStudyAtAGlanceItem = {
  label: string;
  value: string;
};

type Props = {
  items: readonly CaseStudyAtAGlanceItem[];
  /** Left accent stripe — Baskin-Robbins uses brand pink; others default to violet. */
  accent?: "default" | "baskin";
  /** Omit the “At a glance” heading (e.g. e-invoice hero). */
  hideTitle?: boolean;
  /** Override label row typography (default: zinc-500 caps). */
  labelClassName?: string;
  /** Override value typography (default: white/90 on dark). */
  valueClassName?: string;
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
  hideTitle = false,
  labelClassName = "text-[11px] font-semibold uppercase tracking-wider text-zinc-500",
  valueClassName = "mt-0.5 text-base font-medium leading-[1.65] text-white/90 sm:text-lg",
}: Props) {
  const bar = ACCENT_BAR[accent];

  const body = (
    <div
      className="relative flex items-start gap-2.5 sm:gap-3"
      aria-label="Project summary at a glance"
    >
        <div
          className={`mt-0.5 h-8 w-1 shrink-0 rounded-sm sm:h-9 ${bar}`}
          aria-hidden
        />
        <div className="flex min-w-0 flex-1 flex-col gap-y-2 lg:flex-row lg:gap-x-6 lg:gap-y-0 xl:gap-x-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="min-w-0 flex-1 px-0 py-1 sm:py-1.5 lg:px-0"
            >
              <p className={labelClassName}>
                {item.label}
              </p>
              <p className={valueClassName}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
  );

  if (hideTitle) {
    return body;
  }

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        At a glance
      </p>
      {body}
    </div>
  );
}

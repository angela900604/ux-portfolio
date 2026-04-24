export type CaseStudyAtAGlanceItem = {
  label: string;
  value: string;
};

/**
 * Match e-invoice hero: four-column grid meta on the scrim, no “At a glance” title,
 * no accent stripe (zinc label / value).
 */
export const CASE_STUDY_AT_A_GLANCE_DARK_HERO_PROPS = {
  hideTitle: true,
  showAccent: false,
  labelClassName:
    "text-[11px] font-semibold uppercase tracking-wider text-zinc-400",
  valueClassName:
    "mt-0.5 text-base font-medium leading-[1.65] text-zinc-300 sm:text-lg sm:text-zinc-200",
} as const;

/** Cream / light `below-meta` hero band (Admission Hub, MOMI, Haphy Living). */
export const CASE_STUDY_AT_A_GLANCE_LIGHT_HERO_PROPS = {
  hideTitle: true,
  showAccent: false,
  labelClassName:
    "text-[11px] font-semibold uppercase tracking-wider text-[#7A7A7A]",
  valueClassName:
    "mt-0.5 text-base font-medium leading-[1.65] text-[#2C3E50] sm:text-lg",
} as const;

type Props = {
  items: readonly CaseStudyAtAGlanceItem[];
  /** Left accent stripe — Baskin-Robbins uses brand pink; others default to violet. */
  accent?: "default" | "baskin";
  /** When false, hide the accent bar and lay out items in an even grid (e.g. e-invoice hero). */
  showAccent?: boolean;
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
  showAccent = true,
  hideTitle = false,
  labelClassName = "text-[11px] font-semibold uppercase tracking-wider text-zinc-500",
  valueClassName = "mt-0.5 text-base font-medium leading-[1.65] text-white/90 sm:text-lg",
}: Props) {
  const bar = ACCENT_BAR[accent];

  const columnsClass = showAccent
    ? "flex min-w-0 flex-1 flex-col gap-y-2 lg:flex-row lg:gap-x-6 lg:gap-y-0 xl:gap-x-8"
    : "grid min-w-0 w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8";

  const columns = (
    <div className={columnsClass}>
      {items.map((item) => (
        <div
          key={item.label}
          className={
            showAccent
              ? "min-w-0 flex-1 px-0 py-1 sm:py-1.5 lg:px-0"
              : "min-w-0"
          }
        >
          <p className={labelClassName}>{item.label}</p>
          <p className={valueClassName}>{item.value}</p>
        </div>
      ))}
    </div>
  );

  const body = showAccent ? (
    <div
      className="relative flex items-start gap-2.5 sm:gap-3"
      aria-label="Project summary at a glance"
    >
      <div
        className={`mt-0.5 h-8 w-1 shrink-0 rounded-sm sm:h-9 ${bar}`}
        aria-hidden
      />
      {columns}
    </div>
  ) : (
    <div aria-label="Project summary at a glance">{columns}</div>
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

type ProjectCardTagProps = {
  children: React.ReactNode;
  variant?: "flagship" | "default";
  className?: string;
};

export function ProjectCardTag({
  children,
  variant = "default",
  className = "",
}: ProjectCardTagProps) {
  const base =
    "inline-flex w-fit max-w-full items-center rounded-full border px-2.5 py-1 text-[10px] font-normal uppercase tracking-widest transition duration-300";

  const variantClass =
    variant === "flagship"
      ? "border-ink bg-paper text-ink-soft group-hover:border-ink group-hover:text-ink"
      : "border-ink-line bg-paper text-ink-muted group-hover:border-ink group-hover:text-ink-soft";

  return (
    <span className={`${base} ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

/** One-line technical / systems signals under homepage project tags (not user-research teasers). */
export function ProjectTechHighlights({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-2 text-[11px] font-normal leading-snug text-ink-muted sm:text-xs ${className}`.trim()}
    >
      <span className="sr-only">Technical highlights: </span>
      {children}
    </p>
  );
}

/** Green shipped pill for homepage UX / product case cards. */
export function ProjectShippedBadge({
  className = "",
  label = "Shipped",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={`inline-flex w-fit shrink-0 items-center rounded-full border border-emerald-700/25 bg-emerald-50 px-2.5 py-1 text-[10px] font-normal uppercase tracking-widest text-emerald-800 transition duration-300 group-hover:border-emerald-700/40 group-hover:bg-emerald-50/90 ${className}`.trim()}
    >
      {label}
    </span>
  );
}

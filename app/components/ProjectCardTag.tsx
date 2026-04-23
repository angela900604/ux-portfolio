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
    "inline-flex w-fit max-w-full items-center rounded-full border bg-gradient-to-r px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] transition duration-300";

  /** Cursor brand gold (cursor.com accent) — subtle gradient + warm glow */
  const variantClass =
    variant === "flagship"
      ? "border-cursor-accent-bright/55 from-cursor-accent/25 via-amber-800/15 to-cursor-accent-bright/20 text-amber-50 group-hover:border-cursor-accent-bright/70 group-hover:from-cursor-accent/32 group-hover:via-amber-700/18 group-hover:to-cursor-accent-bright/25 group-hover:shadow-[0_0_28px_-8px_rgba(192,133,50,0.45)]"
      : "border-cursor-accent/40 from-cursor-accent/[0.14] via-transparent to-cursor-accent-bright/10 text-amber-100/95 group-hover:border-cursor-accent-bright/45 group-hover:from-cursor-accent/22 group-hover:to-cursor-accent-bright/16 group-hover:text-amber-50 group-hover:shadow-[0_0_22px_-10px_rgba(192,133,50,0.28)]";

  return (
    <span className={`${base} ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

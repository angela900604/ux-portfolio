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

  /** Cursor-adjacent: violet ↔ cyan wash, soft outer glow on hover */
  const variantClass =
    variant === "flagship"
      ? "border-violet-400/50 from-violet-500/[0.22] via-fuchsia-500/10 to-cyan-400/[0.16] text-violet-50 group-hover:border-violet-300/55 group-hover:from-violet-500/[0.28] group-hover:via-fuchsia-500/[0.14] group-hover:to-cyan-400/[0.2] group-hover:shadow-[0_0_28px_-8px_rgba(139,92,246,0.45)]"
      : "border-violet-500/35 from-violet-500/[0.12] via-transparent to-cyan-500/[0.1] text-violet-200/95 group-hover:border-cyan-400/35 group-hover:from-violet-500/[0.18] group-hover:to-cyan-500/[0.14] group-hover:text-violet-100 group-hover:shadow-[0_0_22px_-10px_rgba(34,211,238,0.2)]";

  return (
    <span className={`${base} ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

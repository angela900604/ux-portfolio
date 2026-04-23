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
    "inline-flex w-fit max-w-full items-center rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest transition duration-300";

  const variantClass =
    variant === "flagship"
      ? "border-amber-500/35 bg-amber-500/10 text-amber-400/95 group-hover:border-amber-400/45 group-hover:bg-amber-500/[0.14]"
      : "border-zinc-600/50 bg-zinc-800/45 text-zinc-400 group-hover:border-zinc-500/55 group-hover:bg-zinc-800/65 group-hover:text-zinc-300";

  return (
    <span className={`${base} ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}

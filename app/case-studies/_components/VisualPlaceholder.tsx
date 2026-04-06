type VisualPlaceholderProps = {
  label: string;
  hint?: string;
  aspect?: "wide" | "video" | "square" | "tall";
};

export default function VisualPlaceholder({
  label,
  hint,
  aspect = "wide",
}: VisualPlaceholderProps) {
  const aspectClass =
    aspect === "wide"
      ? "aspect-[21/9]"
      : aspect === "video"
        ? "aspect-video"
        : aspect === "square"
          ? "aspect-square"
          : "aspect-[4/5]";

  return (
    <figure className="mt-8">
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-900/20`}
      >
        <div className="absolute inset-0 border-2 border-dashed border-zinc-700/70" />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Image placeholder
            </p>
            <p className="mt-2 text-sm font-semibold text-zinc-100">{label}</p>
            {hint && (
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{hint}</p>
            )}
          </div>
        </div>
      </div>
    </figure>
  );
}


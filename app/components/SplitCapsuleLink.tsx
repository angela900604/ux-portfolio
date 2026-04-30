import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "emerald" | "emeraldSoft" | "ghostEmerald" | "outline" | "mina";

const variantClass: Record<
  Variant,
  { left: string; right: string; group: string }
> = {
  emerald: {
    group: "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-emerald-200",
    left: "border border-emerald-300/90 bg-emerald-400 text-zinc-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] group-hover:border-emerald-200/90 group-hover:bg-emerald-300",
    right:
      "border border-emerald-300/90 bg-emerald-400 text-zinc-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] group-hover:border-emerald-200/90 group-hover:bg-emerald-300",
  },
  emeraldSoft: {
    group:
      "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-emerald-400/60",
    left: "border border-emerald-500/80 bg-emerald-500/90 text-zinc-950 group-hover:border-emerald-400 group-hover:bg-emerald-400",
    right:
      "border border-emerald-500/80 bg-emerald-500/90 text-zinc-950 group-hover:border-emerald-400 group-hover:bg-emerald-400",
  },
  ghostEmerald: {
    group:
      "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-emerald-400/50",
    left: "border border-emerald-500/45 bg-emerald-500/15 text-emerald-100 group-hover:border-emerald-400/70 group-hover:bg-emerald-500/25 group-hover:text-white",
    right:
      "border border-emerald-500/45 bg-emerald-500/15 text-emerald-100 group-hover:border-emerald-400/70 group-hover:bg-emerald-500/25 group-hover:text-white",
  },
  outline: {
    group:
      "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-zinc-400",
    left: "border border-zinc-600 bg-transparent text-zinc-200 group-hover:border-zinc-400 group-hover:text-zinc-50",
    right:
      "border border-zinc-600 bg-transparent text-zinc-200 group-hover:border-zinc-400 group-hover:text-zinc-50",
  },
  mina: {
    group:
      "focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#E8A995]",
    left: "border border-[#9a4d38] bg-[#B75E45] text-white shadow-[0_12px_40px_-12px_rgba(183,94,69,0.45)] group-hover:border-[#c46a52] group-hover:bg-[#c46a52]",
    right:
      "border border-[#9a4d38] bg-[#B75E45] text-white shadow-[0_12px_40px_-12px_rgba(183,94,69,0.45)] group-hover:border-[#c46a52] group-hover:bg-[#c46a52]",
  },
};

export type SplitCapsuleLinkProps = {
  href: string;
  label: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
  download?: boolean;
};

/**
 * Pill CTA: label and arrow are separate capsules; on hover gap closes and
 * `filter: url(#splitCapsuleGoo)` applies after gap closes (see globals.css).
 * Arrow points slightly up-right at rest, straight right on hover.
 */
export function SplitCapsuleLink({
  href,
  label,
  variant = "emerald",
  className = "",
  target,
  rel,
  download,
}: SplitCapsuleLinkProps) {
  const v = variantClass[variant];
  const inner = (
    <span className="split-capsule-goo-layer inline-flex w-fit items-stretch gap-2">
      <span
        className={`inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-[border-radius,padding,border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:rounded-l-[999px] group-hover:rounded-r-lg group-hover:border-r-0 group-hover:pr-5 sm:px-6 sm:py-3 sm:text-base ${v.left}`}
      >
        {label}
      </span>
      <span
        className={`inline-flex min-w-[2.75rem] items-center justify-center rounded-full border px-3 py-2.5 text-base font-semibold leading-none transition-[border-radius,margin,border-color,background-color,box-shadow] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-ml-px group-hover:rounded-l-lg group-hover:rounded-r-[999px] group-hover:border-l-0 sm:min-w-[3rem] sm:py-3 sm:text-lg ${v.right}`}
        aria-hidden
      >
        <span className="inline-block origin-center -rotate-[30deg] transition-transform duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-0">
          →
        </span>
      </span>
    </span>
  );

  const wrapClass = `group inline-flex w-fit items-stretch ${v.group} ${className}`.trim();

  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//");

  if (isExternal || download) {
    return (
      <a
        href={href}
        className={wrapClass}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        download={download}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={wrapClass}>
      {inner}
    </Link>
  );
}

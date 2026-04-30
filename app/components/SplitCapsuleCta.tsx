import Link from "next/link";
import type { ReactNode } from "react";

const VARIANT = {
  coral: {
    wrapFocus: "focus-visible:outline-[#E8A995]",
    label:
      "rounded-full bg-[#B75E45] text-white shadow-sm transition-[border-radius,padding,background-color] duration-200 ease-out group-hover:rounded-r-none group-hover:bg-[#a05238] group-hover:pr-6",
    arrow:
      "rounded-full bg-[#B75E45] text-white shadow-sm transition-[border-radius,background-color] duration-200 ease-out group-hover:rounded-l-none group-hover:bg-[#a05238]",
    labelPad: "px-7 py-3.5 text-base font-semibold",
    arrowPad: "min-w-[3rem] px-4 py-3.5 text-lg leading-none",
  },
  emeraldSolid: {
    wrapFocus: "focus-visible:outline-emerald-200",
    label:
      "rounded-full bg-emerald-400 text-zinc-950 shadow-[0_12px_40px_-12px_rgba(52,211,153,0.55)] ring-1 ring-white/15 transition-[border-radius,padding,background-color,box-shadow] duration-200 ease-out group-hover:rounded-r-none group-hover:bg-emerald-300 group-hover:pr-6 group-hover:shadow-[0_14px_44px_-12px_rgba(52,211,153,0.6)]",
    arrow:
      "rounded-full bg-emerald-400 text-zinc-950 shadow-[0_12px_40px_-12px_rgba(52,211,153,0.55)] ring-1 ring-white/15 transition-[border-radius,background-color,box-shadow] duration-200 ease-out group-hover:rounded-l-none group-hover:bg-emerald-300 group-hover:shadow-[0_14px_44px_-12px_rgba(52,211,153,0.6)]",
    labelPad: "px-7 py-3.5 text-base font-semibold",
    arrowPad: "min-w-[3rem] px-4 py-3.5 text-lg leading-none",
  },
  emeraldHiFi: {
    wrapFocus: "focus-visible:outline-emerald-200",
    label:
      "rounded-full bg-emerald-500/90 text-zinc-950 transition-[border-radius,padding,background-color] duration-200 ease-out group-hover:rounded-r-none group-hover:bg-emerald-400 group-hover:pr-5",
    arrow:
      "rounded-full bg-emerald-500/90 text-zinc-950 transition-[border-radius,background-color] duration-200 ease-out group-hover:rounded-l-none group-hover:bg-emerald-400",
    labelPad: "px-5 py-2.5 text-sm font-semibold",
    arrowPad: "min-w-[2.75rem] px-3 py-2.5 text-base leading-none",
  },
  outlineZinc: {
    wrapFocus: "focus-visible:outline-zinc-400",
    label:
      "rounded-full border border-zinc-600 bg-transparent text-zinc-200 transition-[border-radius,padding,border-color,color] duration-200 ease-out group-hover:rounded-r-none group-hover:border-r-0 group-hover:border-zinc-400 group-hover:text-zinc-50 group-hover:pr-5",
    arrow:
      "rounded-full border border-zinc-600 bg-transparent text-zinc-200 transition-[border-radius,border-color,color] duration-200 ease-out group-hover:rounded-l-none group-hover:border-l-0 group-hover:border-zinc-400 group-hover:text-zinc-50",
    labelPad: "px-5 py-2.5 text-sm font-medium",
    arrowPad: "min-w-[2.75rem] px-3 py-2.5 text-base leading-none font-medium",
  },
} as const;

export type SplitCapsuleVariant = keyof typeof VARIANT;

type SplitCapsuleCtaProps = {
  href: string;
  label: ReactNode;
  variant: SplitCapsuleVariant;
  className?: string;
  /** Uses `<a target="_blank" rel="noopener noreferrer">` instead of Next `Link`. */
  external?: boolean;
};

export function SplitCapsuleCta({
  href,
  label,
  variant,
  className = "",
  external,
}: SplitCapsuleCtaProps) {
  const v = VARIANT[variant];
  const wrapClass =
    `group inline-flex items-stretch gap-2 transition-[gap] duration-200 ease-out hover:gap-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${v.wrapFocus} ${className}`.trim();

  const inner = (
    <>
      <span
        className={`inline-flex items-center justify-center ${v.labelPad} ${v.label}`}
      >
        {label}
      </span>
      <span
        className={`inline-flex items-center justify-center ${v.arrowPad} ${v.arrow}`}
        aria-hidden
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapClass}
      >
        {inner}
      </a>
    );
  }

  return <Link href={href} className={wrapClass}>{inner}</Link>;
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  /** e.g. "01 —" */
  label: string;
  /** Section heading — existing copy only */
  children: ReactNode;
  className?: string;
};

export function SectionHeader({ label, children, className = "" }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={className}>
      <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#E8C9A0]">
        {label}
      </p>
      <h2
        className="mt-3 font-[family-name:var(--font-serif-display)] text-[clamp(36px,5vw,56px)] font-normal leading-[1.05] tracking-[-0.02em] text-[#F0EDE6]"
      >
        {children}
      </h2>
      {reduceMotion ? (
        <div className="mt-6 h-px w-full bg-[rgba(255,255,255,0.08)]" />
      ) : (
        <motion.div
          className="mt-6 h-px w-full origin-left bg-[rgba(255,255,255,0.08)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}
    </div>
  );
}

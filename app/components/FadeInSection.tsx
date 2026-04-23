"use client";

import type { ReactNode } from "react";
import { FadeUp } from "./FadeUp";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds (stagger lists). */
  delay?: number;
};

/** @deprecated Prefer FadeUp — alias for scroll-triggered editorial fade-up */
export function FadeInSection({ children, className = "", delay = 0 }: Props) {
  return (
    <FadeUp className={className} delay={delay}>
      {children}
    </FadeUp>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Route-change curtain: dark panel slides up to cover, holds, then exits upward.
 * Skips on first paint; persists in layout so state survives navigations.
 */
export function PageCurtain() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const prev = useRef<string | null>(null);
  const [curtainKey, setCurtainKey] = useState(0);

  useEffect(() => {
    if (prev.current === null) {
      prev.current = pathname;
      return;
    }
    if (prev.current !== pathname) {
      prev.current = pathname;
      const id = requestAnimationFrame(() => {
        setCurtainKey((k) => k + 1);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [pathname]);

  if (reduceMotion || curtainKey === 0) return null;

  return (
    <motion.div
      key={curtainKey}
      className="pointer-events-none fixed inset-0 z-[9998] bg-[#0D0D0D]"
      initial={{ y: "100%" }}
      animate={{ y: ["100%", "0%", "0%", "-100%"] }}
      transition={{
        duration: 1,
        times: [0, 0.35, 0.65, 1],
        ease: ["easeIn", "linear", "easeOut"],
      }}
    />
  );
}

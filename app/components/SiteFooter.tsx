"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_CONTAINER } from "@/lib/site-shell";

export function SiteFooter() {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [28, 0]);

  return (
    <footer
      ref={ref}
      className="border-t border-[rgba(255,255,255,0.08)] bg-[#0D0D0D]"
    >
      <motion.div
        className={`${SITE_SHELL_CONTAINER} py-5 text-[13px] text-[#888580]`}
        style={{ y }}
      >
        <div className={CASE_STUDY_BODY_GRID}>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 sm:items-center sm:gap-4 sm:text-left">
              <span className="sm:text-left">
                © {new Date().getFullYear()} Angela Yang
              </span>
              <span className="sm:text-center">
                This website was vibe-coded by me.
              </span>
              <span className="sm:text-right">
                Product Design · UX · Vancouver
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

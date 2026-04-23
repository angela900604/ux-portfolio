"use client";

import { useCallback, useRef, useState } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
};

/**
 * Subtle magnetic pull on fine pointers; springs back on leave.
 */
export function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [magnetic, setMagnetic] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onPointerEnter = useCallback(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setMagnetic(mq.matches);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLAnchorElement>) => {
      if (!magnetic) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setOffset({ x: x * 0.3, y: y * 0.3 });
    },
    [magnetic],
  );

  const onPointerLeave = useCallback(() => {
    setMagnetic(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  const atRest = offset.x === 0 && offset.y === 0;

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <span
        className="relative inline-block"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: atRest
            ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "none",
        }}
      >
        {children}
      </span>
    </a>
  );
}

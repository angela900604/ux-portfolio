"use client";

import { useEffect, useRef } from "react";

const WEBM = "/case-studies/e-invoice/cover-vid.webm";
const MP4 = "/case-studies/e-invoice/cover-vid.mp4";
const POSTER = "/home/e-invoice-flagship-cover.png";

/**
 * Homepage e-invoice card media: WebM + MP4, plays when the card enters the viewport.
 */
export function EInvoiceHomeProjectCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.28, rootMargin: "0px" },
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
    >
      <video
        ref={videoRef}
        className="h-full w-full scale-[1.01] object-cover opacity-92 transition duration-500 [transition-property:opacity,transform] will-change-transform group-hover:scale-[1.05]"
        poster={POSTER}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Preview: Taiwan e-invoice app redesign"
      >
        <source src={WEBM} type="video/webm" />
        <source src={MP4} type="video/mp4" />
      </video>
    </div>
  );
}

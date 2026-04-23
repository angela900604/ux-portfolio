"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  media: string;
  mediaType: "image" | "video";
};

const SERVICES: Service[] = [
  {
    id: "mobile",
    title: "Mobile App Design",
    description:
      "Designing end-to-end mobile app experiences — from user flows to high-fidelity UI.",
    icon: "/services/icons/mobile.svg",
    media: "/case-studies/mina/mina-ai-hero.png",
    mediaType: "image",
  },
  {
    id: "web-saas",
    title: "Web & SaaS Product Design",
    description:
      "Designing responsive web platforms and complex SaaS tools for real-world use.",
    icon: "/services/icons/web.svg",
    media: "/case-studies/government-backend/home-cover.png",
    mediaType: "image",
  },
  {
    id: "ux-strategy",
    title: "UX Strategy & User Flows",
    description:
      "Structuring user journeys, information architecture, and interaction logic.",
    icon: "/services/icons/ux.svg",
    media: "/home/e-invoice-flagship-cover.png",
    mediaType: "image",
  },
  {
    id: "redesign",
    title: "Product Redesign & Optimization",
    description:
      "Improving existing products through usability and performance enhancements.",
    icon: "/services/icons/refresh.svg",
    media: "/case-studies/baskin-robbins/home-cover.png",
    mediaType: "image",
  },
  {
    id: "ai",
    title: "AI Product Experience Design",
    description:
      "Designing AI-driven features like copilots, automation flows, and smart interactions.",
    icon: "/services/icons/ai.svg",
    media: "/case-studies/mina/mina-ai-prototype.mp4",
    mediaType: "video",
  },
  {
    id: "systems",
    title: "UI Design & Design Systems",
    description:
      "Creating clean, scalable visual systems for consistent product experiences.",
    icon: "/services/icons/system.svg",
    media: "/case-studies/e-invoice/case-assets/homepage-hub.png",
    mediaType: "image",
  },
];

function useFinePointerHover() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setFine(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return fine;
}

function ServiceRow({
  service,
  expanded,
  onHoverStart,
  onHoverEnd,
  onToggleTouch,
}: {
  service: Service;
  expanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onToggleTouch: () => void;
}) {
  return (
    <div
      className={`border-b border-zinc-800 transition-colors duration-300 ${
        expanded
          ? "bg-zinc-900/50"
          : "hover:bg-zinc-900/30"
      }`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onToggleTouch}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggleTouch();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
    >
      <div className="mx-auto max-w-[1280px] px-[5vw]">
        {/* Desktop / lg: spec grid */}
        <div
          className={`hidden gap-6 lg:grid ${
            expanded
              ? "min-h-[168px] grid-cols-[56px_1fr_280px] items-start py-8"
              : "min-h-[72px] grid-cols-[56px_1fr_auto] items-center py-2"
          }`}
        >
          <div className="flex h-[72px] items-center lg:h-auto lg:items-start lg:pt-1">
            <div className="relative h-11 w-11 shrink-0 text-zinc-400">
              <Image
                src={service.icon}
                alt=""
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
          </div>

          <div className="min-w-0 pt-1">
            <h3 className="text-[18px] font-medium uppercase tracking-wide text-zinc-100">
              {service.title}
            </h3>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  key="desc"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-end justify-start gap-3 pt-1">
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  key="media"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative h-[140px] w-[260px] shrink-0 overflow-hidden rounded-lg bg-zinc-800"
                >
                  {service.mediaType === "video" ? (
                    <video
                      className="h-full w-full object-cover"
                      src={service.media}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={service.media}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="260px"
                    />
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>
            <motion.span
              className="inline-flex text-lg leading-none text-zinc-400"
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              aria-hidden
            >
              →
            </motion.span>
          </div>
        </div>

        {/* Mobile / tablet: stack */}
        <div
          className={`flex flex-col gap-4 lg:hidden ${
            expanded ? "py-5" : "min-h-[72px] justify-center py-3"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="relative h-11 w-11 shrink-0 text-zinc-400">
              <Image
                src={service.icon}
                alt=""
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <h3 className="min-w-0 flex-1 text-[16px] font-medium uppercase tracking-wide text-zinc-100 sm:text-[17px]">
              {service.title}
            </h3>
            <motion.span
              className="inline-flex shrink-0 text-lg text-zinc-400"
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              aria-hidden
            >
              →
            </motion.span>
          </div>
          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                key="mob"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <p className="line-clamp-3 text-[14px] leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative mx-auto mt-4 aspect-video w-full max-w-[280px] overflow-hidden rounded-lg bg-zinc-800"
                >
                  {service.mediaType === "video" ? (
                    <video
                      className="h-full w-full object-cover"
                      src={service.media}
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={service.media}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  )}
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function ServicesOverview() {
  const fineHover = useFinePointerHover();
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [touchId, setTouchId] = useState<string | null>(null);

  return (
    <section
      className="border-b border-zinc-800 bg-zinc-950"
      aria-labelledby="services-overview-heading"
    >
      <div className="mx-auto max-w-[1280px] px-[5vw] pt-16 pb-2 sm:pt-20 lg:pt-[100px] lg:pb-4">
        <p
          id="services-overview-heading"
          className="text-left text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
        >
          Services overview
        </p>
      </div>
      <div className="flex flex-col">
        {SERVICES.map((service) => {
          const expanded = fineHover
            ? hoverId === service.id
            : touchId === service.id;

          return (
            <ServiceRow
              key={service.id}
              service={service}
              expanded={expanded}
              onHoverStart={() => fineHover && setHoverId(service.id)}
              onHoverEnd={() => fineHover && setHoverId(null)}
              onToggleTouch={() => {
                if (fineHover) return;
                setTouchId((id) => (id === service.id ? null : service.id));
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

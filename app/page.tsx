import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { FadeUp } from "./components/FadeUp";
import { HomeHero } from "./components/HomeHero";
import { MagneticButton } from "./components/MagneticButton";
import { PortfolioFocus } from "./components/PortfolioFocus";
import { SectionHeader } from "./components/SectionHeader";
import { ServicesOverview } from "./components/ServicesOverview";
import {
  homeBrandSectionIntro,
  homeWorkInterlude,
} from "./content/specialize";

const CORE_PRODUCT = {
  flagship: {
    slug: "e-invoice-app",
    title: "Redesigning Taiwan's e-Invoice app for accessibility & trust",
    outcome: "~88% prototype task success (moderated)",
    tag: "Public Service · Mobile App",
    role: "Product Designer",
    timeline: "2024 – 2025",
  },
  /** Shipped product / UX case studies (non-flagship) */
  more: [
    {
      slug: "ai-marketplace",
      title: "MINA · AI marketplace for SF parents",
      outcome: "Coming soon · case study in progress",
      tag: "AI · Marketplace",
      role: "Lead Product Designer",
      timeline: "2025 – Present",
    },
    {
      slug: "government-backend",
      title: "Role-based backend for 600+ government staff",
      outcome: "~30% faster ops entry · ~99% data accuracy",
      tag: "B2B SaaS platform",
      role: "Lead Product Designer",
      timeline: "2024 – 2025",
    },
    {
      slug: "baskin-robbins",
      title: "Baskin-Robbins Taiwan's first membership app",
      outcome: "MVP scoped · Japan-aligned, Taiwan-local rules",
      tag: "Mobile · Loyalty",
      role: "Lead Product Designer",
      timeline: "2024 – 2025",
    },
  ],
};

/** Growth, brand, and IP—complements core product craft */
const ADJACENT_WORK = [
  {
    slug: "admission-hub",
    title: "Admission Hub (Digital Marketing)",
    outcome: "+18% organic traffic, +21% engagement",
    tag: "Digital Marketing",
    role: "Digital Marketer",
    timeline: "May – Aug 2022",
  },
  {
    slug: "momi-animal-health",
    title: "MOMI Animal Health (Digital Marketing)",
    outcome: "+75% online sales in 2 months",
    tag: "Digital Marketing",
    role: "Social Media & eCommerce",
    timeline: "Mar – Aug 2021",
  },
  {
    slug: "phyphyya",
    title: "Haphy Living (Brand IP)",
    outcome: "Brand identity system for Instagram/eCommerce",
    tag: "Branding",
    role: "Branding & Visual Design",
    timeline: "2023 – 2024",
  },
];

const E_INVOICE_FLAGSHIP_COVER = {
  src: "/home/e-invoice-flagship-cover.png",
  width: 1024,
  height: 414,
} as const;

const WORK_THUMB: Record<string, string> = {
  "e-invoice-app": "/home/e-invoice-flagship-cover.png",
  "ai-marketplace": "/case-studies/mina/mina-ai-hero.png",
  "government-backend": "/case-studies/government-backend/home-cover.png",
  "baskin-robbins": "/case-studies/baskin-robbins/home-cover.png",
  "admission-hub": "/case-studies/admission-hub/home-cover.png",
  "momi-animal-health": "/case-studies/momi-animal-health/home-cover.png",
  phyphyya: "/case-studies/phyphyya/gallery-14.png",
};

const BODY =
  "text-[15px] sm:text-[16px] leading-relaxed text-[#888580]";

const RESUME_MAIL =
  "mailto:angela900604@gmail.com?subject=Resume%20request";

function ProductTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[rgba(232,201,160,0.2)] bg-[rgba(232,201,160,0.1)] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#E8C9A0]">
      {children}
    </span>
  );
}

function BrandTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[rgba(212,133,106,0.35)] bg-[rgba(212,133,106,0.12)] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#D4856A]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F0EDE6]">
      <section className="border-b border-[rgba(255,255,255,0.08)]">
        <div className={`${SITE_SHELL_CONTAINER}`}>
          <HomeHero />
        </div>
      </section>

      <section id="featured" className="scroll-mt-28 border-b border-[rgba(255,255,255,0.08)]">
        <div
          className={`${SITE_SHELL_CONTAINER} pt-16 sm:pt-20 lg:pt-[100px] lg:pb-[120px]`}
        >
          <FadeUp>
            <SectionHeader label="01 —">Featured project</SectionHeader>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-12 lg:mt-16">
            <Link
              href={`/case-studies/${CORE_PRODUCT.flagship.slug}`}
              data-cursor="project"
              className="group relative block overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] transition-[border-color] duration-300 hover:border-[rgba(255,255,255,0.15)]"
            >
              <div className="absolute inset-0 z-[1] bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
              <div className="relative z-[2] grid min-h-0 lg:grid-cols-[45fr_55fr]">
                <div className="order-2 flex flex-col justify-center px-6 py-8 transition-transform duration-500 ease-out group-hover:-translate-x-2 sm:px-10 sm:py-10 lg:order-1">
                  <ProductTag>{CORE_PRODUCT.flagship.tag}</ProductTag>
                  <h3 className="mt-5 font-[family-name:var(--font-serif-display)] text-[clamp(1.5rem,2.2vw,2.25rem)] font-normal leading-snug tracking-[-0.02em] text-[#F0EDE6]">
                    {CORE_PRODUCT.flagship.title}
                  </h3>
                  <p className="mt-4 text-base font-normal text-[#E8C9A0] sm:text-lg">
                    {CORE_PRODUCT.flagship.outcome}
                  </p>
                  <p className="mt-6 text-[13px] text-[#888580]">
                    {CORE_PRODUCT.flagship.role} ·{" "}
                    {CORE_PRODUCT.flagship.timeline}
                  </p>
                </div>
                <div className="relative order-1 aspect-[16/9] overflow-hidden bg-[#121212] sm:aspect-[16/8] lg:order-2 lg:aspect-auto lg:min-h-[min(380px,42vw)]">
                  <Image
                    src={E_INVOICE_FLAGSHIP_COVER.src}
                    alt={`${CORE_PRODUCT.flagship.title} — product mockup`}
                    width={E_INVOICE_FLAGSHIP_COVER.width}
                    height={E_INVOICE_FLAGSHIP_COVER.height}
                    className="h-full w-full object-cover opacity-95 transition duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="border-b border-[rgba(255,255,255,0.08)]">
        <div className={`${SITE_SHELL_CONTAINER} py-16 lg:py-24`}>
          <FadeUp>
            <p
              className={`${BODY} max-w-2xl text-pretty text-[#C9C4BC] md:ml-[10%] lg:ml-[14%]`}
            >
              {homeWorkInterlude}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="border-b border-[rgba(255,255,255,0.08)]">
        <div
          className={`${SITE_SHELL_CONTAINER} pt-16 sm:pt-20 lg:pt-[100px] lg:pb-[120px]`}
        >
          <FadeUp>
            <SectionHeader label="02 —">More product work</SectionHeader>
          </FadeUp>
          <ul className="mt-12 grid items-stretch gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {CORE_PRODUCT.more.map((item, i) => (
              <li key={item.slug} className="h-full min-h-0">
                <FadeUp className="h-full" delay={i * 0.1}>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    data-cursor="project"
                    className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(255,255,255,0.15)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#121212]">
                      <Image
                        src={WORK_THUMB[item.slug]}
                        alt={`${item.title} thumbnail`}
                        fill
                        className="object-cover opacity-92 transition duration-700 ease-out group-hover:scale-[1.08]"
                        sizes="(max-width: 896px) 100vw, 400px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <ProductTag>{item.tag}</ProductTag>
                      <h3 className="mt-4 font-[family-name:var(--font-serif-display)] text-[clamp(1.15rem,1.5vw,1.35rem)] font-normal leading-snug tracking-[-0.02em] text-[#F0EDE6]">
                        <span className="relative inline-block">
                          {item.title}
                          <span
                            className="pointer-events-none absolute -right-5 bottom-0 translate-y-1 text-[#E8C9A0] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                            aria-hidden
                          >
                            ↗
                          </span>
                        </span>
                        <span className="mt-2 block font-sans text-sm font-normal text-[#888580] sm:text-base">
                          {item.outcome}
                        </span>
                      </h3>
                      <p className="mt-auto pt-5 text-[13px] text-[#888580]">
                        {item.role} · {item.timeline}
                      </p>
                    </div>
                  </Link>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="selected-work" className="border-b border-[rgba(255,255,255,0.08)]">
        <div
          className={`${SITE_SHELL_CONTAINER} pt-16 sm:pt-20 lg:pt-[100px] lg:pb-[120px]`}
        >
          <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-16">
            <FadeUp>
              <SectionHeader label="03 —">
                Brand &amp; storytelling
              </SectionHeader>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className={`${BODY} max-w-xl text-pretty text-[#C9C4BC]`}>
                {homeBrandSectionIntro}
              </p>
            </FadeUp>
          </div>
          <ul className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ADJACENT_WORK.map((item, i) => (
              <li key={item.slug} className="h-full min-h-0">
                <FadeUp className="h-full" delay={i * 0.1}>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    data-cursor="project"
                    className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] transition-[border-color] duration-300 hover:border-[rgba(255,255,255,0.15)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#121212]">
                      <Image
                        src={WORK_THUMB[item.slug]}
                        alt={`${item.title} thumbnail`}
                        fill
                        className="object-cover opacity-92 transition duration-700 ease-out group-hover:scale-[1.08]"
                        sizes="(max-width: 896px) 100vw, 400px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <BrandTag>{item.tag}</BrandTag>
                      <h3 className="mt-4 font-[family-name:var(--font-serif-display)] text-[clamp(1.05rem,1.35vw,1.2rem)] font-normal leading-snug tracking-[-0.02em] text-[#F0EDE6]">
                        <span className="relative inline-block">
                          {item.title}
                          <span
                            className="pointer-events-none absolute -right-5 bottom-0 translate-y-1 text-[#D4856A] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                            aria-hidden
                          >
                            ↗
                          </span>
                        </span>
                        <span className="mt-2 block font-sans text-sm font-normal text-[#888580] sm:text-base">
                          {item.outcome}
                        </span>
                      </h3>
                      <p className="mt-auto pt-5 text-[13px] text-[#888580]">
                        {item.role} · {item.timeline}
                      </p>
                    </div>
                  </Link>
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicesOverview sectionLabel="04 —" />

      <PortfolioFocus sectionLabel="05 —" />

      <section
        id="contact"
        className="border-b border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#0D0D0D_0%,#121212_100%)]"
      >
        <div
          className={`${SITE_SHELL_CONTAINER} py-20 sm:py-24 lg:py-[120px]`}
        >
          <FadeUp>
            <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#E8C9A0]">
              06 —
            </p>
            <h2
              className="mt-4 max-w-4xl font-[family-name:var(--font-serif-display)] text-[clamp(3.5rem,8vw,6rem)] font-normal leading-[1.02] tracking-[-0.03em] text-[#F0EDE6] sm:max-w-5xl"
            >
              Want to work together
              <span className="contact-question-wiggle">?</span>
            </h2>
            <p className={`${BODY} mt-6 max-w-2xl`}>
              Product design · Vancouver · open to relocate, remote, or hybrid.
            </p>
            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <MagneticButton
                href="mailto:angela900604@gmail.com"
                className="group/cta relative text-[15px] font-medium text-[#F0EDE6]"
              >
                <span className="relative inline-block pb-1">
                  angela900604@gmail.com
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#E8C9A0] transition-transform duration-300 ease-out group-hover/cta:scale-x-100"
                    aria-hidden
                  />
                </span>
              </MagneticButton>
              <MagneticButton
                href="https://linkedin.com/in/angelayangg/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta relative text-[15px] font-medium text-[#F0EDE6]"
              >
                <span className="relative inline-block pb-1">
                  LinkedIn
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#E8C9A0] transition-transform duration-300 ease-out group-hover/cta:scale-x-100"
                    aria-hidden
                  />
                </span>
              </MagneticButton>
              <MagneticButton
                href={RESUME_MAIL}
                className="group/cta relative text-[15px] font-medium text-[#F0EDE6]"
              >
                <span className="relative inline-block pb-1">
                  Resume
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#E8C9A0] transition-transform duration-300 ease-out group-hover/cta:scale-x-100"
                    aria-hidden
                  />
                </span>
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

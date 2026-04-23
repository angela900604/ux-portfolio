import Link from "next/link";
import Image from "next/image";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { FadeInSection } from "./components/FadeInSection";
import { HomeHero } from "./components/HomeHero";
import { PortfolioFocus } from "./components/PortfolioFocus";
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

const SECTION_TITLE =
  "text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-tight text-zinc-100";

const BODY =
  "text-[15px] sm:text-[16px] leading-relaxed text-zinc-400";

function ProjectThumbOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-950/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="rounded-full border border-zinc-100/90 bg-zinc-950/40 px-4 py-2.5 text-sm font-medium text-zinc-50 backdrop-blur-sm">
        View case study
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero — display type + bubble beside / aligned (md+) */}
      <section className="border-b border-zinc-800">
        <div
          className={`${SITE_SHELL_CONTAINER} pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pb-[120px]`}
        >
          <HomeHero />
        </div>
      </section>

      {/* Featured — full-width card, own row */}
      <section id="featured" className="scroll-mt-28 border-b border-zinc-800">
        <div
          className={`${SITE_SHELL_CONTAINER} pt-16 sm:pt-20 lg:pt-[100px] lg:pb-[120px]`}
        >
          <FadeInSection>
            <h2 className={`${SECTION_TITLE} mb-10 lg:mb-14`}>
              Featured project
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <Link
              href={`/case-studies/${CORE_PRODUCT.flagship.slug}`}
              className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition duration-300 hover:border-zinc-500"
            >
              <div className="relative overflow-hidden border-b border-zinc-800 bg-zinc-900/40">
                <Image
                  src={E_INVOICE_FLAGSHIP_COVER.src}
                  alt={`${CORE_PRODUCT.flagship.title} — product mockup`}
                  width={E_INVOICE_FLAGSHIP_COVER.width}
                  height={E_INVOICE_FLAGSHIP_COVER.height}
                  className="h-auto w-full max-w-full opacity-95 transition duration-500 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 1480px) 100vw, 1200px"
                  priority
                />
                <ProjectThumbOverlay />
              </div>
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <span className="mb-3 inline-block text-[10px] font-medium uppercase tracking-widest text-amber-400/90">
                  {CORE_PRODUCT.flagship.tag}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 transition group-hover:text-zinc-50 sm:text-2xl">
                  {CORE_PRODUCT.flagship.title}
                  <span className="mt-2 block text-base font-normal text-zinc-400 sm:text-lg">
                    {CORE_PRODUCT.flagship.outcome}
                  </span>
                </h3>
                <p className="mt-4 text-xs text-zinc-500">
                  {CORE_PRODUCT.flagship.role} ·{" "}
                  {CORE_PRODUCT.flagship.timeline}
                </p>
              </div>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Text interlude — rhythm break */}
      <section className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-16 lg:py-24`}>
          <FadeInSection>
            <p
              className={`${BODY} max-w-2xl text-pretty text-zinc-300 md:ml-[10%] lg:ml-[14%]`}
            >
              {homeWorkInterlude}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* More product work */}
      <section className="border-b border-zinc-800">
        <div
          className={`${SITE_SHELL_CONTAINER} pt-16 sm:pt-20 lg:pt-[100px] lg:pb-[120px]`}
        >
          <FadeInSection>
            <h2 className={`${SECTION_TITLE} mb-10 lg:mb-14`}>
              More product work
            </h2>
          </FadeInSection>
          <ul className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_PRODUCT.more.map((item, i) => (
              <li key={item.slug} className="h-full min-h-0">
                <FadeInSection className="h-full" delay={i * 0.08}>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900/50">
                      <Image
                        src={WORK_THUMB[item.slug]}
                        alt={`${item.title} thumbnail`}
                        fill
                        className="object-cover opacity-92 transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 896px) 100vw, 400px"
                      />
                      <ProjectThumbOverlay />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                        {item.tag}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-zinc-50 sm:text-xl">
                        {item.title}
                        <span className="mt-2 block text-sm font-normal text-zinc-400 sm:text-base">
                          {item.outcome}
                        </span>
                      </h3>
                      <p className="mt-auto pt-4 text-xs text-zinc-500">
                        {item.role} · {item.timeline}
                      </p>
                    </div>
                  </Link>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand & storytelling — asymmetric header */}
      <section id="selected-work" className="border-b border-zinc-800">
        <div
          className={`${SITE_SHELL_CONTAINER} pt-16 sm:pt-20 lg:pt-[100px] lg:pb-[120px]`}
        >
          <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end lg:gap-16">
            <FadeInSection>
              <h2 className={SECTION_TITLE}>Brand &amp; storytelling</h2>
            </FadeInSection>
            <FadeInSection delay={0.08}>
              <p className={`${BODY} max-w-xl text-pretty`}>
                {homeBrandSectionIntro}
              </p>
            </FadeInSection>
          </div>
          <ul className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ADJACENT_WORK.map((item, i) => (
              <li key={item.slug} className="h-full min-h-0">
                <FadeInSection className="h-full" delay={i * 0.08}>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900/50">
                      <Image
                        src={WORK_THUMB[item.slug]}
                        alt={`${item.title} thumbnail`}
                        fill
                        className="object-cover opacity-92 transition duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 896px) 100vw, 400px"
                      />
                      <ProjectThumbOverlay />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                        {item.tag}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-zinc-50 sm:text-xl">
                        {item.title}
                        <span className="mt-2 block text-sm font-normal text-zinc-400 sm:text-base">
                          {item.outcome}
                        </span>
                      </h3>
                      <p className="mt-auto pt-4 text-xs text-zinc-500">
                        {item.role} · {item.timeline}
                      </p>
                    </div>
                  </Link>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicesOverview />

      <PortfolioFocus />

      {/* Footer CTA — emotional close */}
      <section
        id="contact"
        className="border-b border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900/35"
      >
        <div
          className={`${SITE_SHELL_CONTAINER} py-20 sm:py-24 lg:py-[120px]`}
        >
          <FadeInSection>
            <h2
              className={`${SECTION_TITLE} max-w-4xl text-pretty sm:max-w-5xl`}
            >
              Want to work together?
            </h2>
            <p className={`${BODY} mt-6 max-w-2xl text-zinc-400`}>
              Product design · Vancouver · open to relocate, remote, or hybrid.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href="mailto:angela900604@gmail.com"
                className="inline-flex w-fit items-center justify-center rounded-full border border-zinc-100/25 bg-zinc-100 px-6 py-3 text-[15px] font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                angela900604@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/angelayangg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition hover:text-zinc-100"
              >
                LinkedIn
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

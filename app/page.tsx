import Link from "next/link";
import Image from "next/image";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { FadeInSection } from "./components/FadeInSection";
import { HeroWithBubble } from "./components/HeroWithBubble";
import { ProjectCardTag } from "./components/ProjectCardTag";

const CORE_PRODUCT = [
  {
    slug: "e-invoice-app",
    title:
      "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App",
    tag: "Public Service · Mobile App",
  },
  {
    slug: "ai-marketplace",
    title: "MINA · AI marketplace for SF parents",
    tag: "AI · Marketplace",
  },
  {
    slug: "government-backend",
    title: "Role-based backend for 600+ government staff",
    tag: "B2B SaaS platform",
  },
  {
    slug: "baskin-robbins",
    title: "Cross-market with Japan HQ · BR31 Taiwan membership app",
    tag: "Mobile · Loyalty",
  },
] as const;

/** Research insights — standalone notes plus links to case studies where relevant. */
const RESEARCH_SHAPES_BUILD = [
  {
    source: "Taiwan e-Invoice · Field research",
    title: "The bottleneck wasn't inside the app",
    summary:
      "At checkout, cashiers often assumed older customers didn't use the app and handed over paper before they could open it—not user abandonment, the lane moved on. We put the carrier barcode in a home widget and scan first on home so the critical action is one step from pocket.",
    href: "/research/elderly-checkout-widget",
  },
  {
    source: "Taiwan e-Invoice · Onboarding & trust",
    title: "The feature existed. Nobody knew.",
    summary:
      "Elderly and foreign-resident users missed prize payouts repeatedly—not from forgetting, but because no one had surfaced the auto-deposit account. We brought it into first-launch onboarding with field-by-field explanations of why bank details matter (trust design, not just shorter forms).",
    href: "/research/prize-account-discovery",
  },
  {
    source: "MINA · AI marketplace",
    title: "High-risk AI needs explicit human control",
    summary:
      "Parents won't tolerate silent automation on payouts and listings. The product response is preview-before-publish, explicit confirmations, and reversibility—legible limits, not more model cleverness.",
    href: "/research/high-risk-ai-human-control",
  },
] as const;

const WORK_THUMB: Record<string, string> = {
  "e-invoice-app": "/home/e-invoice-flagship-cover.png",
  "ai-marketplace": "/case-studies/mina/mina-ai-hero.png",
  "government-backend": "/case-studies/government-backend/home-cover.png",
  "baskin-robbins": "/case-studies/baskin-robbins/home-cover.png",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero — lg: fill viewport below header so logo row can sit on the divider */}
      <section className="border-b border-zinc-800 lg:flex lg:min-h-[calc(100svh-4.5rem)] lg:flex-col">
        <div
          className={`${SITE_SHELL_CONTAINER} flex min-h-0 flex-1 flex-col pt-20 pb-0 sm:pt-28 sm:pb-1 md:pt-36 md:pb-2`}
        >
          <HeroWithBubble />
        </div>
      </section>

      {/* Selected projects — no visible section blurb (sr-only for outline) */}
      <section id="featured" className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-20`}>
          <h2 className="sr-only">Selected projects</h2>
          <ul className="mt-2 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
            {CORE_PRODUCT.map((item, i) => (
              <li key={item.slug} className="h-full min-h-0">
                <FadeInSection
                  className="h-full"
                  delay={0.05 + i * 0.05}
                >
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900/50">
                      <Image
                        src={WORK_THUMB[item.slug]}
                        alt={`${item.title} thumbnail`}
                        fill
                        className="object-cover opacity-92 transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 639px) 100vw, (max-width: 1480px) 50vw, 720px"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <ProjectCardTag>{item.tag}</ProjectCardTag>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-zinc-50 sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-20`}>
          <FadeInSection>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl md:text-[2rem]">
              How research shapes what I build
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Method labels don&apos;t change roadmaps—reframes from the field do.
              Three examples where evidence forced a different product decision.
            </p>
          </FadeInSection>
          <ul className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {RESEARCH_SHAPES_BUILD.map((item, i) => (
              <li key={item.href} className="h-full min-h-0">
                <FadeInSection className="h-full" delay={0.04 + i * 0.05}>
                  <Link
                    href={item.href}
                    className="group flex h-full min-h-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:p-8"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      {item.source}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100 transition group-hover:text-zinc-50 sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
                      {item.summary}
                    </p>
                    <span className="mt-5 text-sm font-medium text-zinc-400 group-hover:text-zinc-200">
                      Read more →
                    </span>
                  </Link>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-20`}>
          <FadeInSection>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl md:text-[2rem]">
              Let&apos;s talk
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-400">
              Product design · Vancouver · open to relocate, remote, or hybrid.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-base sm:text-lg">
              <a
                href="mailto:angela900604@gmail.com"
                className="font-medium text-zinc-200 hover:text-zinc-50 underline underline-offset-4"
              >
                angela900604@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/angelayangg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-200"
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

import Link from "next/link";
import Image from "next/image";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { FadeInSection } from "./components/FadeInSection";
import { HeroWithBubble } from "./components/HeroWithBubble";
import { ProjectCardTag } from "./components/ProjectCardTag";

const CORE_PRODUCT = {
  flagship: {
    slug: "e-invoice-app",
    title:
      "Redesigning Taiwan Ministry of Finance's Uniform Invoice Award Redemption App",
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
      outcome:
        "~30% completed listings (PostHog) · AI listing & copilot · App Store (Canada)",
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
      title: "Cross-market with Japan HQ · BR31 Taiwan membership app",
      outcome: "MVP scoped · Japan-aligned, Taiwan-local rules",
      tag: "Mobile · Loyalty",
      role: "Lead Product Designer",
      timeline: "2024 – 2025",
    },
  ],
};

/** Research insights that changed what shipped — links go to the evidence in each case study. */
const RESEARCH_SHAPES_BUILD = [
  {
    source: "Taiwan e-Invoice · Ministry of Finance app",
    title: 'Carrier binding: "comprehension," not dexterity',
    summary:
      "Moderated tests showed people stalling before the mechanics—not because taps were hard, but because ministry jargon hid why binding mattered. We reframed the task around automatic capture scenarios and in-flow help, not shorter forms.",
    href: "/case-studies/e-invoice-app#carrier-binding-insight",
  },
  {
    source: "Taiwan e-Invoice · multisegment research",
    title: "One home, two incompatible defaults",
    summary:
      "Silver and low-vision participants wanted the sparsest home; younger users wanted a dense dashboard. Research killed the idea of a single static layout—we shipped optional modules with fixed rails (scan + passbook) so neither audience was structurally wronged.",
    href: "/case-studies/e-invoice-app#key-outcomes",
  },
  {
    source: "MINA · AI marketplace",
    title: "High-risk AI needs explicit human control",
    summary:
      "Parents won’t tolerate silent automation on payouts and listings. Interviews surfaced automation anxiety and loss of control; the product response was preview-before-publish, clear confirmations, and reversibility—not more model cleverness.",
    href: "/case-studies/ai-marketplace#ai-trust",
  },
] as const;

/** Flagship card — full-bleed cover, intrinsic aspect (no crop). */
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
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero — lg: fill viewport below header so logo row can sit on the divider */}
      <section className="border-b border-zinc-800 lg:flex lg:min-h-[calc(100svh-4.5rem)] lg:flex-col">
        <div
          className={`${SITE_SHELL_CONTAINER} flex min-h-0 flex-1 flex-col pt-20 pb-[20px] sm:pt-28 md:pt-36`}
        >
          <HeroWithBubble />
        </div>
      </section>

      {/* Selected projects — no visible section blurb (sr-only for outline) */}
      <section id="featured" className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-20`}>
          <h2 className="sr-only">Selected projects</h2>
          <FadeInSection delay={0.05}>
            <Link
              href={`/case-studies/${CORE_PRODUCT.flagship.slug}`}
              className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition duration-300 hover:-translate-y-1 hover:border-zinc-500"
            >
              <div className="border-b border-zinc-800 bg-zinc-900/40">
                <Image
                  src={E_INVOICE_FLAGSHIP_COVER.src}
                  alt={`${CORE_PRODUCT.flagship.title} — product mockup`}
                  width={E_INVOICE_FLAGSHIP_COVER.width}
                  height={E_INVOICE_FLAGSHIP_COVER.height}
                  className="h-auto w-full max-w-full opacity-95 transition duration-500 ease-out group-hover:scale-[1.01]"
                  sizes="(max-width: 1480px) 100vw, 1200px"
                  priority
                />
              </div>
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <ProjectCardTag variant="flagship" className="mb-3">
                  {CORE_PRODUCT.flagship.tag}
                </ProjectCardTag>
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-100 transition group-hover:text-zinc-50 sm:text-3xl">
                  {CORE_PRODUCT.flagship.title}
                  <span className="mt-2 block text-base font-normal text-zinc-400 sm:text-lg">
                    {CORE_PRODUCT.flagship.outcome}
                  </span>
                </h3>
              </div>
            </Link>
          </FadeInSection>

          <ul className="mt-12 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
            {CORE_PRODUCT.more.map((item, i) => (
              <li key={item.slug} className="h-full min-h-0">
                <FadeInSection
                  className="h-full"
                  delay={0.04 + i * 0.05}
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
                        <span className="mt-2 block text-sm font-normal text-zinc-400 sm:text-base">
                          {item.outcome}
                        </span>
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
                      Read in case study →
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

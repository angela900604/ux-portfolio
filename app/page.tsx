import Link from "next/link";
import Image from "next/image";
import { FadeInSection } from "./components/FadeInSection";
import { HeroWithBubble } from "./components/HeroWithBubble";

const CORE_PRODUCT = {
  flagship: {
    slug: "e-invoice-app",
    title: "Redesigning Taiwan's e-Invoice app for accessibility & trust",
    outcome: "~88% prototype task success (moderated)",
    tag: "Flagship",
    description:
      "Led end-to-end UX for a nationwide public service app. Research across 30+ sessions, clearer flows, and inclusive design for millions of citizens.",
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
      description:
        "Zero-to-one concept with Bay Area mom communities: AI agent-first UX, one-photo multi-listing, and seller–AI coordination for pickup—built for sustainability without the admin burden.",
      role: "Product Designer",
      timeline: "2025 – Present",
    },
    {
      slug: "government-backend",
      title: "Role-based backend for 600+ government staff",
      outcome: "~30% faster ops entry · ~99% data accuracy",
      tag: "Public Service",
      description:
        "RBAC, unified workflows, and dashboards for Ministry of Finance lottery redemption ops—600+ users across four departments.",
      role: "Senior Product Designer",
      timeline: "2024 – 2025",
    },
    {
      slug: "baskin-robbins",
      title: "Baskin-Robbins Taiwan's first membership app",
      outcome: "MVP scoped · Japan-aligned, Taiwan-local rules",
      tag: "Mobile · Loyalty",
      description:
        "Lead UX/UI for zero-to-one loyalty: functional map, flows, UI kit, and store-ready redemption—PM + 4 engineers, client & JP HQ alignment.",
      role: "Lead UX/UI Designer",
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
    description:
      "Email marketing and SEO-friendly WordPress content to attract prospective clients (lead generation), with meticulous accuracy on immigration-adjacent messaging. Digital graphics for web & Instagram; improved discovery, engagement, and trust with Taiwan- and Hong Kong–based audiences.",
    role: "Digital Marketer",
    timeline: "May – Aug 2022",
  },
  {
    slug: "momi-animal-health",
    title: "MOMI Animal Health (Digital Marketing)",
    outcome: "+75% online sales in 2 months",
    tag: "Digital Marketing",
    description:
      "Promotional and social content across Facebook and eCommerce; monthly data entry for 100+ invoices and logistics records with Excel trackers for timelines. Coordinated partners and supported pet-expo operations and tradeshow-style follow-up.",
    role: "Social Media & eCommerce",
    timeline: "Mar – Aug 2021",
  },
  {
    slug: "phyphyya",
    title: "Haphy Living (Brand IP)",
    outcome: "Brand identity system for Instagram/eCommerce",
    tag: "Branding",
    description:
      "Built a visual identity and brand applications around a character-based brand IP, producing logo concepts, mascot variations, and content templates for social and eCommerce touchpoints.",
    role: "Branding & Visual Design",
    timeline: "2023 – 2024",
  },
];

/** Flagship card — full-bleed cover, intrinsic aspect (no crop). */
const E_INVOICE_FLAGSHIP_COVER = {
  src: "/home/e-invoice-flagship-cover.png",
  width: 1024,
  height: 414,
} as const;

const WORK_THUMB: Record<string, string> = {
  "e-invoice-app": "/home/e-invoice-flagship-cover.png",
  "ai-marketplace": "/case-studies/mina/mina-ai-hero.png",
  "government-backend": "/home/publicservicecover.png",
  "baskin-robbins": "/home/baskinrobbinscover.png",
  "admission-hub": "/home/admcover-v3.jpg",
  "momi-animal-health": "/home/momicover-v3.png",
  "phyphyya": "/home/phyphyyaCover-v3.jpg",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-20 sm:py-28">
          <HeroWithBubble />
        </div>
      </section>

      {/* Selected projects */}
      <section id="featured" className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-20">
          <FadeInSection>
            <h2 className="text-zinc-100">Selected Projects</h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
              0→1 products across AI-powered automation, Public&nbsp;Services, and
              Consumer&nbsp;Loyalty.
            </p>
          </FadeInSection>

          <FadeInSection className="mt-10" delay={0.05}>
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
                  sizes="(max-width: 1440px) 100vw, 1080px"
                  priority
                />
              </div>
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <span className="mb-3 inline-block text-[10px] font-medium uppercase tracking-widest text-amber-400/90">
                  {CORE_PRODUCT.flagship.tag}
                </span>
                <h3 className="text-zinc-100 transition group-hover:text-zinc-50">
                  {CORE_PRODUCT.flagship.title}
                </h3>
                <p className="mt-1 text-base font-medium text-emerald-400/90 sm:text-lg">
                  {CORE_PRODUCT.flagship.outcome}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  {CORE_PRODUCT.flagship.description}
                </p>
                <p className="mt-5 text-xs text-zinc-500">
                  {CORE_PRODUCT.flagship.role} · {CORE_PRODUCT.flagship.timeline}
                </p>
                <span className="mt-5 inline-block text-base font-medium text-zinc-300 transition group-hover:text-zinc-100">
                  Read case study →
                </span>
              </div>
            </Link>
          </FadeInSection>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_PRODUCT.more.map((item, i) => (
              <li key={item.slug}>
                <FadeInSection delay={0.04 + i * 0.05}>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900/50">
                      <Image
                        src={WORK_THUMB[item.slug]}
                        alt={`${item.title} thumbnail`}
                        fill
                        className="object-cover opacity-92 transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 896px) 100vw, 400px"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                        {item.tag}
                      </span>
                      <h3 className="mt-3 text-zinc-100 group-hover:text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-base text-emerald-400/80 sm:text-lg">
                        {item.outcome}
                      </p>
                      <p className="mt-3 line-clamp-2 flex-1 text-base text-zinc-400 sm:text-lg">
                        {item.description}
                      </p>
                      <span className="mt-5 inline-block text-xs font-medium text-zinc-500 transition group-hover:text-zinc-300">
                        Read case study →
                      </span>
                    </div>
                  </Link>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brand & storytelling */}
      <section id="selected-work" className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-20">
          <FadeInSection>
            <h2 className="text-zinc-100">Brand &amp; Storytelling</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Supporting product launches through visual identity and marketing
              design.
            </p>
          </FadeInSection>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ADJACENT_WORK.map((item, i) => (
              <li key={item.slug}>
                <FadeInSection delay={0.04 + i * 0.05}>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900/50">
                      <Image
                        src={WORK_THUMB[item.slug]}
                        alt={`${item.title} thumbnail`}
                        fill
                        className="object-cover opacity-92 transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 896px) 100vw, 400px"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                        {item.tag}
                      </span>
                      <h3 className="mt-3 text-zinc-100 group-hover:text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-base text-emerald-400/80 sm:text-lg">
                        {item.outcome}
                      </p>
                      <p className="mt-3 line-clamp-2 flex-1 text-base text-zinc-400 sm:text-lg">
                        {item.description}
                      </p>
                      <span className="mt-5 inline-block text-xs font-medium text-zinc-500 transition group-hover:text-zinc-300">
                        View project →
                      </span>
                    </div>
                  </Link>
                </FadeInSection>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-20">
          <FadeInSection>
            <h2 className="text-zinc-100">Let&apos;s Build Something Together</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Currently open to Product Design roles that require an end-to-end
              workflow. Based in Vancouver; open to relocation, remote, or hybrid
              opportunities.
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
              <a
                href="/resume"
                className="text-zinc-400 hover:text-zinc-200"
              >
                Resume
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

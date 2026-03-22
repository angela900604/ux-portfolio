import Link from "next/link";
import Image from "next/image";
import { HeroWithBubble } from "./components/HeroWithBubble";

const FEATURED = {
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
  work: [
    {
      slug: "ai-marketplace",
      title: "AI marketplace for circular baby goods",
      outcome: "Listing time ~3–5 min → seconds",
      tag: "AI · Marketplace",
      description:
        "Sole designer at MINA AI. Photo-to-Publish, Parenting Copilot, and design system for 8 engineers.",
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
    {
      slug: "admission-hub",
      title: "Admission Hub (Digital Marketing)",
      outcome: "+18% organic traffic, +21% engagement",
      tag: "Digital Marketing",
      description:
        "Created email campaigns and SEO-friendly WordPress content, plus digital graphics for web & Instagram. Improved discovery, engagement, and brand recognition for Taiwanese audiences.",
      role: "Digital Marketer",
      timeline: "May – Aug 2022",
    },
    {
      slug: "momi-animal-health",
      title: "MOMI Animal Health (Digital Marketing)",
      outcome: "+75% online sales in 2 months",
      tag: "Digital Marketing",
      description:
        "Designed promotional and social content across Facebook and eCommerce channels, partnering with marketing to execute campaigns and improve online conversion for rabbit-care products.",
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
  ],
};

const WORK_THUMB: Record<string, string> = {
  "e-invoice-app": "/home/mofcover.png",
  "ai-marketplace": "/home/minaaicover.png",
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

      {/* Featured — flagship case */}
      <section id="featured" className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2">
            Featured
          </p>
          <h2 className="text-2xl font-semibold text-zinc-100">
            Selected work
          </h2>

          <Link
            href={`/case-studies/${FEATURED.flagship.slug}`}
            className="mt-8 block group"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-600 transition">
              <div className="relative aspect-video bg-zinc-800/80 flex items-center justify-center border-b border-zinc-800 overflow-hidden">
                <Image
                  src={WORK_THUMB[FEATURED.flagship.slug]}
                  alt={`${FEATURED.flagship.title} thumbnail`}
                  fill
                  className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-block text-[10px] font-medium uppercase tracking-widest text-amber-400/90 mb-3">
                  {FEATURED.flagship.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 group-hover:text-zinc-50 transition">
                  {FEATURED.flagship.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-emerald-400/90">
                  {FEATURED.flagship.outcome}
                </p>
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  {FEATURED.flagship.description}
                </p>
                <p className="mt-4 text-xs text-zinc-500">
                  {FEATURED.flagship.role} · {FEATURED.flagship.timeline}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-zinc-300 group-hover:text-zinc-100">
                  Read case study →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Selected work grid */}
      <section id="selected-work" className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2">
            More work
          </p>
          <h2 className="text-2xl font-semibold text-zinc-100">
            Case studies
          </h2>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {FEATURED.work.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/case-studies/${item.slug}`}
                  className="block group rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:border-zinc-600 transition"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/30 mb-4">
                    <Image
                      src={WORK_THUMB[item.slug]}
                      alt={`${item.title} thumbnail`}
                      fill
                      className="object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 896px) 100vw, 448px"
                    />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-100 group-hover:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-emerald-400/80">
                    {item.outcome}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium text-zinc-500 group-hover:text-zinc-300">
                    Read case study →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About preview */}
      <section className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2">
            About
          </p>
          <h2 className="text-2xl font-semibold text-zinc-100">
            Design with a product lens and a systems mindset
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
            I’m Angela—a product designer with 2+ years in the industry. I use
            an AI agent as a thinking partner to turn ambiguity into clear
            roadmaps and user-centered solutions. Based in Vancouver; open to
            product design, UX/UI, and AI-assisted creative roles.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-medium text-zinc-300 hover:text-zinc-100 underline underline-offset-4"
          >
            More about me →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-zinc-800">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-2">
            Contact
          </p>
          <h2 className="text-2xl font-semibold text-zinc-100">
            Let’s talk about your next product chapter
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed max-w-xl">
            Open to full-time product design, UX/UI, and AI-assisted creative
            roles. Available immediately.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
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
        </div>
      </section>
    </div>
  );
}

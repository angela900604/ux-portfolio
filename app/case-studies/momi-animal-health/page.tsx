import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import type { ReactNode } from "react";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { MomiOutcomesChart } from "./MomiOutcomesChart";
import { MomiUniformTile } from "./MomiUniformTile";
import { CASE_STUDY_BODY_GRID, SITE_SHELL_INNER } from "@/lib/site-shell";

export const metadata = {
  title: "MOMI Animal Health | Angela Yang",
  description:
    "MOMI Animal Health: marketing design and eCommerce support in Taiwan’s niche rabbit-care market—helped drive +75% online sales growth in two months.",
};

const MOMI_ASSET = (n: string) => `/case-studies/momi-animal-health/${n}`;

/** eCommerce cover slides removed from page; 06 / 08 dropped from grid */
const WHAT_I_DID_GRID_EXCLUDE = new Set(["02", "03", "04", "05", "06", "08"]);

const WHAT_I_DID_GRID_EXTRAS = [
  {
    key: "tri-fold-brochure",
    src: MOMI_ASSET("marketing-tri-fold-brochure.png"),
    alt: "MOMI Animal Health — tri-fold brochure mockup for rabbit nutrition (COMPLETE-G line, hay and pellet benefits, Traditional Chinese)",
  },
] as const;

const WHAT_I_DID_IMAGES = [
  ...Array.from({ length: 9 }, (_, i) => {
    const id = String(i + 1).padStart(2, "0");
    return {
      key: id,
      src: MOMI_ASSET(`what-i-did-${id}.png`),
      alt: `MOMI Animal Health — campaign and product creative ${id}`,
    };
  }).filter((item) => !WHAT_I_DID_GRID_EXCLUDE.has(item.key)),
  ...WHAT_I_DID_GRID_EXTRAS,
];

const TOUCHPOINT_CARDS = [
  {
    title: "MOMO storefront covers",
    body: "Redesigned covers so promo bundles and price stories read faster, with clearer visual hierarchy around the deal.",
  },
  {
    title: "Retail & in-store promos",
    body: "Brighter tabletop and banner-style pieces for pet-store campaigns so discounts stood out on the floor.",
  },
  {
    title: "Social activations",
    body: "Giveaway / lottery-style posts to earn shares and tags beyond static product shots.",
  },
  {
    title: "Buyer touchpoints",
    body: "Day-to-day chat and DM support on MOMO and social, using the same offer language as the storefront so expectations stayed aligned.",
  },
] as const;

const PET_EXPO_PHOTOS = [
  {
    src: MOMI_ASSET("pet-expo-corner-booth.png"),
    alt: "MOMI Animal Health — teal corner booth at a Taiwan pet exhibition with stacked product, logo wall, and floor display",
  },
  {
    src: MOMI_ASSET("pet-expo-wall-display.png"),
    alt: "MOMI Animal Health — exhibition wall with MOMI rabbit logo and backlit shelving of hay and treat lines",
  },
  {
    src: MOMI_ASSET("pet-expo-rabbit-first-cut-hay.png"),
    alt: "MOMI Animal Health — rabbit on Timothy hay at the booth with first-cut hay signage and product bags",
  },
  {
    src: MOMI_ASSET("pet-expo-rabbit-alfalfa-display.png"),
    alt: "MOMI Animal Health — rabbit on hay next to MOMI alfalfa carton and colorful treat pouches at the pet show",
  },
] as const;

function Section({
  kicker,
  title,
  id,
  children,
}: {
  kicker: string;
  /** Omit when the section has only a kicker + body (no H2). */
  title?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <CaseStudyInViewSection
      id={id}
      className={id ? "scroll-mt-28 sm:scroll-mt-32" : undefined}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        {kicker}
      </span>
      {title ? <h2 className="mt-2 text-zinc-100">{title}</h2> : null}
      {children}
    </CaseStudyInViewSection>
  );
}

export default function MomiAnimalHealthCaseStudy() {
  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div className={`${CASE_STUDY_BODY_GRID} min-w-0`}>
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <ImageLightbox
                src={MOMI_ASSET("case-hero-cover.png")}
                alt="MOMI Animal Health flyer mockup — freeze dried fruit treats for rabbits"
                className="block w-full"
                disableHoverScale
              >
                <Image
                  src={MOMI_ASSET("case-hero-cover.png")}
                  alt="MOMI Animal Health flyer mockup — freeze dried fruit treats for rabbits"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover object-[center_40%]"
                  sizes="(max-width: 768px) 100vw, 1080px"
                  priority
                />
              </ImageLightbox>
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout contentClassName="space-y-20 sm:space-y-24">
        <Section id="what-i-did" kicker="01 · What I did">
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {TOUCHPOINT_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 sm:p-6"
              >
                <h3 className="text-sm font-semibold tracking-tight text-zinc-100 sm:text-base">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {card.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <h5 className="text-zinc-100">Pet expo — on-site</h5>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-2xl">
              Coordinated{" "}
              <span className="font-medium text-zinc-100">
                internal teams and external partners
              </span>{" "}
              around exhibition logistics—supporting booth build, on-site
              operations, and{" "}
              <span className="font-medium text-zinc-100">
                tradeshow-style follow-up
              </span>{" "}
              so leads and retail relationships picked up at the show could move
              forward cleanly after the event.
            </p>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-2xl">
              Photos from the pet exhibition floor: booth footprint, wall
              display, and live rabbit on hay next to product.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {PET_EXPO_PHOTOS.map((photo) => (
                <ImageLightbox
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30"
                  disableHoverScale
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </ImageLightbox>
              ))}
            </div>
          </div>

          <div className="mt-10 w-full">
            <h5 className="text-zinc-100">Campaign</h5>
            <div className="mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:items-stretch">
              {WHAT_I_DID_IMAGES.map((item) => (
                <MomiUniformTile
                  key={item.key}
                  src={item.src}
                  alt={item.alt}
                  emphasis
                />
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="outcomes"
          kicker="02 · Outcomes"
          title="A clear lift in online sales"
        >
          <p className="mt-4 text-zinc-400 leading-relaxed max-w-2xl">
            The +75% figure is growth in ecommerce platform sales from when I
            joined through my last month—the same period when MOMO covers, retail
            promo pieces, and social giveaways were refreshed.
          </p>
          <div className="mt-6 max-w-3xl">
            <MomiOutcomesChart />
          </div>
        </Section>

        <CaseStudyInViewSection className="space-y-8 border-t border-zinc-800 pt-12">
          <CaseStudyPrevNext currentSlug="momi-animal-health" />
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
          >
            ← Back to home
          </Link>
        </CaseStudyInViewSection>
      </CaseStudyContentLayout>
    </article>
  );
}

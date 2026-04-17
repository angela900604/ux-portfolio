import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";
import { MomiOutcomesChart } from "./MomiOutcomesChart";
import { MomiImageSlideshow } from "./MomiImageSlideshow";
import { MomiUniformTile } from "./MomiUniformTile";

export const metadata = {
  title: "MOMI Animal Health | Angela Yang",
  description:
    "MOMI Animal Health: marketing design and eCommerce support in Taiwan’s niche rabbit-care market—helped drive +75% online sales growth in two months.",
};

const MOMI_ASSET = (n: string) => `/case-studies/momi-animal-health/${n}`;

const MOMI_PRODUCT_FLYER = MOMI_ASSET("product-flyer-freeze-dried-fruit.png");

const MOMI_TOC = [
  { id: "project-overview", label: "Project overview" },
  { id: "goal", label: "Goal" },
  { id: "what-i-did", label: "What I did" },
  { id: "outcomes", label: "Outcomes" },
] as const;

const ECOMMERCE_SUPPORT_SLIDES = ["05", "04", "03", "02"].map((id, idx) => ({
  src: MOMI_ASSET(`what-i-did-${id}.png`),
  alt: `MOMI Animal Health — eCommerce support creative ${idx + 1} of 4`,
}));

const ECOMMERCE_SLIDE_IDS = new Set(["02", "03", "04", "05"]);
/** Slideshow IDs + grid slots replaced by tri-fold; 08 dropped from grid */
const WHAT_I_DID_GRID_EXCLUDE = new Set([
  ...ECOMMERCE_SLIDE_IDS,
  "06",
  "08",
]);

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
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={id ? "scroll-mt-28 sm:scroll-mt-32" : undefined}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-[#8D99AE]">
        {kicker}
      </span>
      <h2 className="mt-2 text-xl font-semibold text-[#2C3E50]">{title}</h2>
      {children}
    </section>
  );
}

export default function MomiAnimalHealthCaseStudy() {
  return (
    <article className="min-h-screen bg-[#F5F3EF] text-[#4A4A4A]">
      <header className="border-b border-[#E0D9CE]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-[#7A7A7A] mb-6">
            <span>Digital Marketing</span>
            <span className="text-[#B0B0B0]">·</span>
            <span>Content + Growth</span>
          </div>

          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl text-[#2C3E50]">
            MOMI Animal Health
          </h1>
          <p className="mt-4 text-xl text-[#666] max-w-2xl">
            Helped drive +75% online sales growth in two months.
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div>
              <dt className="text-[#7A7A7A] uppercase tracking-wider">Role</dt>
              <dd className="text-[#4A4A4A]">
                Social media, eCommerce, and campaign design
              </dd>
            </div>
            <div>
              <dt className="text-[#7A7A7A] uppercase tracking-wider">Location</dt>
              <dd className="text-[#4A4A4A]">Taipei, Taiwan</dd>
            </div>
            <div>
              <dt className="text-[#7A7A7A] uppercase tracking-wider">
                Timeline
              </dt>
              <dd className="text-[#4A4A4A]">Feb 2021 – Sep 2021</dd>
            </div>
          </dl>

          <div className="mt-12">
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-[#D8CFC1] bg-[#FAF7F2]">
              <Image
                src="/home/momicover.png"
                alt="MOMI Animal Health cover"
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout
        toc={MOMI_TOC}
        variant="light"
        contentClassName="space-y-16"
      >
        <Section
          id="project-overview"
          kicker="00 · Project overview"
          title="At a glance"
        >
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7B746B]">
                Brief / Background
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                MOMI Animal Health is a rabbit-care brand. The project focused on
                building clearer product communication across social channels and
                eCommerce touchpoints to support both engagement and conversion.
              </p>
            </article>
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7B746B]">
                Tools
              </h3>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Adobe Photoshop / Adobe Illustrator / Facebook / MOMO / Shopee
              </p>
            </article>
          </div>
        </Section>

        <Section
          id="goal"
          kicker="01 · Goal"
          title="Make product value feel clear and actionable"
        >
          <div className="mt-4 max-w-2xl space-y-4 text-[#666] leading-relaxed">
            <p>
              Rabbit owners are a{" "}
              <span className="font-medium text-[#2C3E50]">
                very small audience in Taiwan
              </span>
              —harder to reach at scale and with fewer category shortcuts than
              dog- or cat-care brands.
            </p>
            <p>
              MOMI Animal Health focuses on high-quality rabbit care products. The
              marketing goal was to communicate product benefits visually while
              supporting purchase and account questions across social and
              eCommerce channels.
            </p>
          </div>
        </Section>

        <Section
          id="what-i-did"
          kicker="02 · What I did"
          title="Content system across touchpoints"
        >
          <p className="mt-4 text-sm text-[#666] leading-relaxed max-w-2xl">
            Most of this execution landed in the first ~two months of my role;
            the +75% sales outcome in Outcomes is measured from my start date
            through my last month. The work focused on making offers scannable
            and consistent everywhere shoppers met the brand—especially on MOMO,
            in pet-store displays, and on social.
          </p>
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm text-[#666] leading-relaxed">
            <li>
              <strong className="font-semibold text-[#2C3E50]">
                MOMO storefront covers:
              </strong>{" "}
              Redesigned covers so promo bundles and price stories read faster,
              with clearer visual hierarchy around the deal.
            </li>
            <li>
              <strong className="font-semibold text-[#2C3E50]">
                Retail &amp; in-store promos:
              </strong>{" "}
              Brighter tabletop and banner-style pieces for pet-store campaigns so
              discounts stood out on the floor.
            </li>
            <li>
              <strong className="font-semibold text-[#2C3E50]">
                Social activations:
              </strong>{" "}
              Giveaway / lottery-style posts to earn shares and tags beyond
              static product shots.
            </li>
            <li>
              <strong className="font-semibold text-[#2C3E50]">
                Buyer touchpoints:
              </strong>{" "}
              Day-to-day chat and DM support on MOMO and social, using the same
              offer language as the storefront so expectations stayed aligned.
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-[#2C3E50]">
              Pet expo — on-site
            </h3>
            <p className="mt-2 text-sm text-[#666] leading-relaxed max-w-2xl">
              Photos from the pet exhibition floor: booth footprint, wall
              display, and live rabbit on hay next to product.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {PET_EXPO_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E8E1D6] bg-[#FAF7F2]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[#E8E1D6] bg-white p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-[#2C3E50]">
              Before / after: one clear story
            </h3>
            <p className="mt-2 text-sm text-[#666] leading-relaxed max-w-2xl">
              Earlier printed and digital banners jumped between styles, and
              product flyers often felt bare—they didn&apos;t lead with benefits.
              I moved the system toward a single green-forward brand frame,
              benefit-first copy, and a repeatable layout so people could scan
              flavors and claims in seconds. Below: freeze-dried fruit line
              flyer I art-directed and produced.
            </p>
            <div className="mt-6 relative w-full max-w-xl mx-auto overflow-hidden rounded-xl border border-[#E8E1D6] bg-[#FAF7F2]">
              <Image
                src={MOMI_PRODUCT_FLYER}
                alt="MOMI Animal Health product flyer for freeze-dried fruit crunchy snacks—unified green branding, fruit rows, and benefit callouts"
                width={800}
                height={1200}
                className="w-full h-auto object-contain"
                sizes="(max-width: 640px) 100vw, 480px"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-[#2C3E50]">
              eCommerce support slideshow
            </h3>
            <p className="mt-2 text-sm text-[#666] leading-relaxed">
              Featured MOMO promotional cover variations shown as a standalone
              sequence.
            </p>
            <div className="mt-4">
              <MomiImageSlideshow
                slides={ECOMMERCE_SUPPORT_SLIDES}
                label="MOMO eCommerce cover designs"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {WHAT_I_DID_IMAGES.map((item) => (
              <MomiUniformTile
                key={item.key}
                src={item.src}
                alt={item.alt}
              />
            ))}
          </div>
        </Section>

        <Section
          id="outcomes"
          kicker="03 · Outcomes"
          title="A clear lift in online sales"
        >
          <p className="mt-4 text-[#666] leading-relaxed max-w-2xl">
            The +75% figure is growth in ecommerce platform sales from when I
            joined through my last month—the same period when MOMO covers, retail
            promo pieces, and social giveaways were refreshed.
          </p>
          <div className="mt-6 max-w-3xl">
            <MomiOutcomesChart />
          </div>
        </Section>

        <section className="border-t border-[#E0D9CE] pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="momi-animal-health" variant="light" />
          <Link
            href="/"
            className="text-sm font-medium text-[#6A6358] hover:text-[#2C3E50] transition"
          >
            ← Back to work
          </Link>
        </section>
      </CaseStudyContentLayout>
    </article>
  );
}

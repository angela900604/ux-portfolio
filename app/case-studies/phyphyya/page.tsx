import Link from "next/link";
import {
  CASE_STUDY_BODY_GRID,
  CASE_STUDY_SECTION_TITLE_CLASS,
  SITE_SHELL_INNER,
} from "@/lib/site-shell";
import { HAPHY_LIVING_SHOP_URL } from "@/app/content/haphy-living";
import { CS_BODY, CS_H3, CS_SECTION_EYEBROW } from "@/lib/case-study-theme";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";

export const metadata = {
  title: "Haphy Living · Original brand IP & Etsy shop | Angela Yang",
  description:
    "End-to-end brand identity for a pet-lifestyle label — mascot, logo system, palette, and a live print-on-demand product line.",
};

export default function PhyphyyaCaseStudy() {
  const logoConceptImg = "/case-studies/phyphyya/gallery-10.png";

  const mascotCards = [
    { src: "/case-studies/phyphyya/gallery-02.png", alt: "Haphy mascot pose 1" },
    { src: "/case-studies/phyphyya/gallery-03.png", alt: "Haphy mascot pose 2" },
    { src: "/case-studies/phyphyya/gallery-09.png", alt: "Haphy mascot pose 3" },
    { src: "/case-studies/phyphyya/gallery-16.png", alt: "Haphy mascot pose 4" },
  ];

  const sweatshirtSeries = [
    {
      src: "/case-studies/phyphyya/gallery-12.png",
      alt: "Sweatshirt hanger display",
    },
    {
      src: "/case-studies/phyphyya/gallery-15.png",
      alt: "Sweatshirt lifestyle",
    },
    {
      src: "/case-studies/phyphyya/gallery-05.png",
      alt: "Sweatshirt desktop details",
    },
  ];

  return (
    <article className="min-h-screen">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} flex min-w-0 flex-col gap-4 sm:gap-5`}
          >
            <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              <div className="min-w-0 md:col-span-2">
                <img
                  src="/case-studies/phyphyya/gallery-14.png"
                  alt="Haphy Living brand applications overview"
                  className="block h-auto w-full"
                  fetchPriority="high"
                />
              </div>
              <div className="min-w-0">
                <img
                  src="/case-studies/phyphyya/gallery-04.png"
                  alt="Haphy Living pet product packaging"
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <img
                  src="/case-studies/phyphyya/gallery-06.png"
                  alt="Haphy Living business card and stationery"
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 md:col-span-2">
                <img
                  src="/case-studies/phyphyya/gallery-17.png"
                  alt="Haphy Living environmental product display"
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <img
                src="/case-studies/phyphyya/pod-magnets-fridge.png"
                alt="Round bunny magnets on a fridge"
                className="block h-auto w-full"
                loading="lazy"
              />
              <img
                src="/case-studies/phyphyya/pod-magnets-hand.png"
                alt="Hand holding bunny magnets"
                className="block h-auto w-full"
                loading="lazy"
              />
              <img
                src="/case-studies/phyphyya/pod-stickers-flatlay.png"
                alt="Die-cut bunny stickers flat lay with mug and notebook"
                className="block h-auto w-full"
                loading="lazy"
              />
            </div>

            <div className="flex w-full flex-col gap-4 sm:gap-5">
              <img
                src="/case-studies/phyphyya/gallery-14.png"
                alt="Haphy Living canvas tote bag bundle"
                className="block h-auto w-full"
                loading="lazy"
              />
              <div className="grid w-full grid-cols-3 gap-4 sm:gap-5">
                <img
                  src="/case-studies/phyphyya/gallery-01.png"
                  alt="Canvas tote bag street style"
                  className="block aspect-square h-auto w-full object-cover"
                  loading="lazy"
                />
                <img
                  src="/case-studies/phyphyya/gallery-11.png"
                  alt="Canvas tote bag texture detail"
                  className="block aspect-square h-auto w-full object-cover"
                  loading="lazy"
                />
                <img
                  src="/case-studies/phyphyya/gallery-07.png"
                  alt="Canvas tote bag street environment"
                  className="block aspect-square h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sweatshirtSeries.map((it) => (
                <img
                  key={it.src}
                  src={it.src}
                  alt={it.alt}
                  className="block h-[400px] w-full object-cover sm:h-[420px]"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <CaseStudyContentLayout>
        <CaseStudyInViewSection
          id="context"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <span className={CS_SECTION_EYEBROW}>Context</span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Building a pet-lifestyle brand IP from scratch
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            Haphy Living started as a personal project: turn my Holland lop
            rabbit into a brand. No client, no brief — just a blank page and a
            point of view. I owned everything: identity, artwork, product line,
            shop, and marketing.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="identity"
          className="scroll-mt-28 space-y-8 sm:scroll-mt-32"
        >
          <span className={CS_SECTION_EYEBROW}>The identity</span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Cozy, a little mischievous, unmistakably ours
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            A full identity system around one idea: a hand-drawn mascot with a
            consistent personality across poses and seasons; a warm, earthy
            palette that holds from a 3-inch pin to a wall-sized art print; a
            logo and wordmark flexible enough for packaging, tags, and social
            avatars.
          </p>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="min-w-0 space-y-6">
              <img
                src={logoConceptImg}
                alt="Haphy Living logo concept — soft rounded wordmark"
                className="block h-auto w-full"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {mascotCards.map((c) => (
                  <img
                    key={c.src}
                    src={c.src}
                    alt={c.alt}
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="min-w-0 space-y-8">
              <div>
                <h3 className={`${CS_H3} mb-3`}>Color palette + type</h3>
                <p className={CS_BODY}>
                  Soft blue-gray primary, paired with warm gray and beige —
                  freshness with a vintage hold. Rounded letterforms and
                  hand-drawn textures keep it warm, never sterile.
                </p>
                <div className="mt-4 flex gap-3">
                  <div
                    className="h-10 w-10 rounded-full"
                    style={{ backgroundColor: "#8D99AE" }}
                    aria-label="Blue-gray"
                  />
                  <div
                    className="h-10 w-10 rounded-full"
                    style={{ backgroundColor: "#D4C5B0" }}
                    aria-label="Warm beige"
                  />
                  <div
                    className="h-10 w-10 rounded-full border border-zinc-700"
                    style={{ backgroundColor: "#F5F3EF" }}
                    aria-label="Cream"
                  />
                  <div
                    className="h-10 w-10 rounded-full"
                    style={{ backgroundColor: "#4A4A4A" }}
                    aria-label="Charcoal"
                  />
                </div>
              </div>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="decisions"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className={CS_SECTION_EYEBROW}>Key decisions</span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Design for the product, not just the screen
          </h2>
          <ul className={`max-w-3xl space-y-5 ${CS_BODY}`}>
            <li>
              <strong className="font-medium text-zinc-100">
                One mascot, many moods.
              </strong>{" "}
              Instead of a single static logo, the mascot carries the brand
              across seasonal collections (Christmas, autumn, everyday) — the
              identity stays recognizable while the product line keeps growing.
            </li>
            <li>
              <strong className="font-medium text-zinc-100">
                Design for the product, not just the screen.
              </strong>{" "}
              Every artwork is built print-first: full-bleed compositions, true
              physical scale in mockups, and color checked against production
              proofs — because a design that looks good in Figma and bad on a
              tote isn&apos;t finished.
            </li>
            <li>
              <strong className="font-medium text-zinc-100">
                The shop is the portfolio.
              </strong>{" "}
              Listing photography, SEO titles, and lifestyle mockups are all
              brand touchpoints. I treat the{" "}
              <a
                href={HAPHY_LIVING_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400"
              >
                Etsy storefront
              </a>{" "}
              as a designed surface, not an afterthought.
            </li>
          </ul>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="etsy-pod"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className={CS_SECTION_EYEBROW}>The product line</span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            A live print-on-demand shop, designed end to end
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            Art prints, totes, ornaments, enamel pins, magnets, sticker sheets
            — every listing designed, mocked up, and optimized. Print-on-demand
            lets me validate demand without holding stock, then iterate with
            live Etsy data.
          </p>

          <div className="flex flex-col gap-6 lg:h-[min(540px,72vh)] lg:flex-row lg:items-stretch">
            <div className="flex min-h-[420px] shrink-0 items-center justify-center overflow-hidden px-3 py-4 lg:min-h-0 lg:w-[min(280px,32%)] lg:py-6">
              <img
                src="/case-studies/phyphyya/etsy-shop-mobile.png"
                alt="Haphy Living Etsy shop on mobile"
                className="max-h-full max-w-full w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative min-h-[280px] flex-1 overflow-hidden lg:min-h-0">
              <img
                src="/case-studies/phyphyya/etsy-shop-desktop.png"
                alt="Haphy Living Etsy shop — product grid"
                className="absolute inset-0 h-full w-full object-cover object-[center_top]"
                loading="lazy"
              />
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="outcome"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <span className={CS_SECTION_EYEBROW}>Outcome</span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            A complete, self-sustaining brand IP
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            Identity system, seasonal collections, and a live storefront —
            built solo from zero, and still growing every holiday season.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection className="border-t border-zinc-800 pt-12 space-y-8">
          <CaseStudyPrevNext currentSlug="phyphyya" variant="phyphyya" />
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

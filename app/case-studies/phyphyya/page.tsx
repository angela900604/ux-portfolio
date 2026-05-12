import Link from "next/link";
import {
  CASE_STUDY_BODY_GRID,
  SITE_SHELL_INNER,
} from "@/lib/site-shell";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";

export const metadata = {
  title: "Haphy Living (Brand IP) | Angela Yang",
  description:
    "Haphy Living: a live commercial experiment and personal brand IP built from bunny-inspired design to POD production and Etsy operations.",
};

export default function PhyphyyaCaseStudy() {
  const logoConceptImg = "/case-studies/phyphyya/gallery-10.png";

  const mascotCards = [
    { src: "/case-studies/phyphyya/gallery-02.png", alt: "Mascot 1" },
    { src: "/case-studies/phyphyya/gallery-03.png", alt: "Mascot 2" },
    { src: "/case-studies/phyphyya/gallery-09.png", alt: "Mascot 3" },
    { src: "/case-studies/phyphyya/gallery-16.png", alt: "Mascot 4" },
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
    <article className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <div className={`${SITE_SHELL_INNER} py-12 sm:py-16`}>
          <div
            className={`${CASE_STUDY_BODY_GRID} flex min-w-0 flex-col gap-6 sm:gap-8`}
          >
            <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
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

            <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

            <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-start">
              <img
                src="/case-studies/phyphyya/pod-stickers-diecut.png"
                alt="Hand holding die-cut bunny stickers"
                className="block h-auto w-full"
                loading="lazy"
              />
              <img
                src="/case-studies/phyphyya/pod-sticker-leather.png"
                alt="Die-cut bunny sticker on leather journal"
                className="block h-auto w-full"
                loading="lazy"
              />
            </div>

            <div className="flex w-full flex-col gap-6 sm:gap-8">
              <img
                src="/case-studies/phyphyya/gallery-14.png"
                alt="Haphy Living canvas tote bag bundle"
                className="block h-auto w-full"
                loading="lazy"
              />
              <div className="grid w-full grid-cols-3 gap-6 sm:gap-8">
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

            <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      <CaseStudyContentLayout contentClassName="">
        {/* Logo Concept - Soft & Rounded */}
        <CaseStudyInViewSection
          id="logo-concept"
          className="scroll-mt-28 py-[80px] sm:scroll-mt-32 flex flex-col items-center"
        >
          <div className="text-center mb-[60px] w-full">
            <h2 className="text-zinc-100 mb-[20px] relative inline-block font-sans after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-zinc-500 after:mx-auto after:mt-[15px]">
              Logo Concept - Soft & Rounded
            </h2>
            <p className="text-[16px] text-zinc-400">
              A harmonious blend of vintage charm and modern freshness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[60px] w-full">
            <div className="w-full rounded-[4px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <img
                src={logoConceptImg}
                alt="Logo Concept"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            <div className="pl-[20px]">
              <div className="mb-[40px]">
                <h3 className="text-zinc-100 mb-[12px] border-l-[3px] border-zinc-600 pl-[15px] font-sans">
                  Color Palette
                </h3>
                <p className="text-[16px] text-zinc-400 pl-[18px]">
                  Incorporating soft blue-gray as one of the primary tones,
                  paired with warm gray and beige. The blue-gray and beige tones
                  coexist harmoniously, offering both freshness and warm vintage ambiance.
                </p>
                <div className="flex gap-[15px] mt-[15px] pl-[18px]">
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]" style={{ backgroundColor: "#8D99AE" }} />
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]" style={{ backgroundColor: "#D4C5B0" }} />
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]" style={{ backgroundColor: "#F5F3EF" }} />
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]" style={{ backgroundColor: "#4A4A4A" }} />
                </div>
              </div>

              <div className="mb-[40px]">
                <h3 className="text-zinc-100 mb-[12px] border-l-[3px] border-zinc-600 pl-[15px] font-sans">
                  Visual Effect
                </h3>
                <p className="text-[16px] text-zinc-400 pl-[18px]">
                  The blue-gray adds a touch of freshness and modernity to the
                  typography, echoing the gray-white tones of the lop-eared
                  rabbit mascot. The overall color scheme is rich yet harmonious.
                </p>
              </div>

              <div>
                <h3 className="text-zinc-100 mb-[12px] border-l-[3px] border-zinc-600 pl-[15px] font-sans">
                  Style Characteristics
                </h3>
                <p className="text-[16px] text-zinc-400 pl-[18px]">
                  Maintains vintage British hand-drawn texture. Rounded
                  typography with rough brush strokes. A warm brand personality with a fresh touch.
                </p>
              </div>
            </div>
          </div>
        </CaseStudyInViewSection>

        {/* Mascot Section - Lop-eared Rabbit */}
        <CaseStudyInViewSection
          id="mascot"
          className="relative scroll-mt-28 bg-zinc-900/35 py-[100px] sm:scroll-mt-32"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 right-0 -z-10 w-full bg-zinc-950"
            aria-hidden
          />
          <div className="text-center mb-[60px] w-full">
            <h2 className="text-zinc-100 mb-[20px] relative inline-block font-sans after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-zinc-500 after:mx-auto after:mt-[15px]">
              Brand Mascot - Lop-eared Rabbit
            </h2>
            <p className="text-[16px] text-zinc-400">
              Embodying the spirit of relaxation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[50px]">
            {mascotCards.map((c) => (
              <div
                key={c.src}
                className="rounded-[8px] border border-[#E5DFD4] bg-[#F5F3EF] p-[20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-[5px]"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="block h-auto w-full rounded-[4px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-[40px] bg-zinc-900/30 p-[40px] rounded-[12px] grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            <div>
              <h4 className="text-zinc-100 mb-[8px] font-sans">
                Posture
              </h4>
              <p className="text-[15px] text-zinc-400 mb-[20px]">
                Inspired by my bunny&apos;s everyday napping poses at home: cute,
                sleepy, and delightfully lazy. The relaxed vibe feels instantly
                healing and makes you want to gently pat her head.
              </p>
            </div>
            <div>
              <h4 className="text-zinc-100 mb-[8px] font-sans">
                Ears
              </h4>
              <p className="text-[15px] text-zinc-400 mb-[20px]">
                Long droopy ears naturally falling, adding a lazy charm.
              </p>
            </div>
            <div>
              <h4 className="text-zinc-100 mb-[8px] font-sans">
                Color
              </h4>
              <p className="text-[15px] text-zinc-400 mb-[20px]">
                Gray and white dual-tone color blocks, maintaining a clean and fresh look.
              </p>
            </div>
            <div>
              <h4 className="text-zinc-100 mb-[8px] font-sans">
                Texture
              </h4>
              <p className="text-[15px] text-zinc-400 mb-[20px]">
                Rough hand-drawn brush strokes and paper texture, creating a warm vintage atmosphere.
              </p>
            </div>
          </div>
        </CaseStudyInViewSection>

        {/* Etsy storefront & Print-on-Demand workflow */}
        <CaseStudyInViewSection
          id="etsy-pod"
          className="scroll-mt-28 py-[80px] sm:scroll-mt-32"
        >
          <div className="w-full min-w-0 px-5 sm:px-8 md:px-10 lg:px-12">
            <div className="text-center w-full mb-[50px]">
            <h2 className="text-zinc-100 mb-[20px] relative inline-block font-sans after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-zinc-500 after:mx-auto after:mt-[15px]">
              Etsy shop &amp; Print-on-Demand
            </h2>
            <p className="text-[16px] text-zinc-400 leading-relaxed">
              I launched{" "}
              <a
                href="https://www.etsy.com/ca/shop/HaphyLiving"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-100 underline underline-offset-2 hover:text-zinc-500"
              >
                Haphy Living on Etsy
              </a>{" "}
              to sell cozy, pet-inspired goods. The biggest early uncertainty was
              differentiation in a crowded handmade category and whether I should
              hold stock, so I intentionally used POD first to validate demand
              with lower inventory risk.
            </p>
            </div>

            {/* Left = smaller mobile capture, right = larger desktop grid; same height on lg */}
            <div className="flex flex-col lg:flex-row gap-6 w-full mb-[40px] lg:items-stretch lg:h-[min(540px,72vh)]">
            <div className="flex shrink-0 lg:w-[min(280px,32%)] items-center justify-center overflow-hidden rounded-[8px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] px-3 py-4 lg:py-6 min-h-[420px] lg:min-h-0">
              <img
                src="/case-studies/phyphyya/etsy-shop-mobile.png"
                alt="Haphy Living Etsy shop on mobile"
                className="max-h-full max-w-full w-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative flex-1 min-h-[280px] overflow-hidden rounded-[8px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] lg:min-h-0">
              <img
                src="/case-studies/phyphyya/etsy-shop-desktop.png"
                alt="Haphy Living Etsy shop — product grid"
                className="absolute inset-0 h-full w-full object-cover object-[center_top]"
                loading="lazy"
              />
            </div>
            </div>

            <div className="w-full space-y-[28px] text-[16px] text-zinc-400 leading-relaxed">
            <p>
              <strong className="text-zinc-100 font-sans">
                1 · Design in Procreate
              </strong>
              <br />
              I drew the wordmark and the lop-eared rabbit mascot by hand in
              Procreate—keeping the soft, vintage brush texture consistent across
              every touchpoint before anything went to print.
            </p>
            <p>
              <strong className="text-zinc-100 font-sans">
                2 · Print-on-Demand (POD) production
              </strong>
              <br />
              I use a POD partner to manufacture on demand: I pick product
              templates (phone cases, totes, magnets, die-cut stickers, etc.),
              place the artwork at the correct safe margins, and export
              print-ready files. When a customer orders on Etsy, the order is
              sent to fulfillment—production, packaging, and shipping—so I can
              focus on design and the shop experience instead of inventory while
              testing which SKUs deserve deeper investment.
            </p>
            <p>
              <strong className="text-zinc-100 font-sans">
                3 · Lovart for listing &amp; social visuals
              </strong>
              <br />
              I use Lovart to generate lifestyle mockups and product scenes—so
              each listing has clear, on-brand photography that shows scale,
              texture, and context (not just flat art on a white background).
            </p>
            <p>
              <strong className="text-zinc-100 font-sans">
                4 · Etsy as the storefront
              </strong>
              <br />
              Etsy handles discovery, checkout, and buyer communication; POD
              handles the physical workflow. Together they let me test products
              and iterate on listings with low operational overhead.
            </p>
            <p>
              <strong className="text-zinc-100 font-sans">
                Real pitfall · Shipping economics
              </strong>
              <br />
              The hardest issue so far is expensive POD shipping options, which
              can compress margin and hurt conversion on lower-ticket items. The
              current mitigation is pragmatic: prioritize bundles and higher-AOV
              listings, keep shipping assumptions explicit in pricing tests, and
              continue evaluating alternative POD partners.
            </p>
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="testing-next"
          className="scroll-mt-28 py-[80px] sm:scroll-mt-32"
        >
          <details className="group w-full rounded-2xl border border-zinc-800 bg-zinc-900/35 open:border-zinc-600/60">
            <summary className="cursor-pointer list-none px-5 py-4 text-sm font-medium text-zinc-200 transition hover:bg-zinc-900/50 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex w-full items-center justify-between gap-3">
                <span className="min-w-0 text-left font-sans text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
                  What I&apos;m testing next
                </span>
                <span
                  className="shrink-0 text-zinc-500 transition group-open:rotate-180"
                  aria-hidden
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-current"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="border-t border-zinc-800/90 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
              <p className="text-[16px] leading-relaxed text-zinc-400">
                Operating hypotheses I&apos;m running against live Etsy
                data—shipping, pricing, and SKU mix—so the shop stays a learning
                loop, not a one-off launch.
              </p>
              <ul className="mt-5 space-y-5 text-[16px] leading-relaxed text-zinc-400">
                <li>
                  <strong className="font-semibold text-zinc-100">
                    Shipping economics
                  </strong>
                  <span className="block mt-1">
                    Compare POD carriers and fulfillment paths for Canada / US
                    buyers; test whether bundled listings and higher-AOV offers
                    absorb shipping better than single low-ticket SKUs.
                  </span>
                </li>
                <li>
                  <strong className="font-semibold text-zinc-100">
                    Pricing &amp; perceived value
                  </strong>
                  <span className="block mt-1">
                    Run small, time-boxed price tests on comparable listings while
                    keeping mockups and copy consistent—so shifts in conversion map
                    more cleanly to price, not creative noise.
                  </span>
                </li>
                <li>
                  <strong className="font-semibold text-zinc-100">
                    SKU mix &amp; bundles
                  </strong>
                  <span className="block mt-1">
                    Narrow the catalog to a tight hero set (stickers, magnets,
                    apparel) and add intentional bundles (e.g. sticker + magnet)
                    to lift order value and clarify what the brand is for at a
                    glance.
                  </span>
                </li>
              </ul>
            </div>
          </details>
        </CaseStudyInViewSection>

        <footer className="border-t border-zinc-800 py-14">
          <CaseStudyPrevNext currentSlug="phyphyya" />
          <Link
            href="/"
            className="mt-8 inline-block text-sm text-zinc-400 transition hover:text-zinc-100"
          >
            ← Back to home
          </Link>
        </footer>
      </CaseStudyContentLayout>
    </article>
  );
}


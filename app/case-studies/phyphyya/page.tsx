import Link from "next/link";
import Image from "next/image";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";

const PHY_TOC = [
  { id: "project-overview", label: "Project overview" },
  { id: "logo-concept", label: "Logo concept" },
  { id: "mascot", label: "Brand mascot" },
  { id: "brand-applications", label: "Brand applications" },
  { id: "etsy-pod", label: "Etsy & print-on-demand" },
  { id: "store-performance", label: "Store performance" },
  { id: "testing-next", label: "What I'm testing next" },
  { id: "pod-products", label: "Magnets & stickers" },
  { id: "canvas-tote", label: "Canvas tote" },
  { id: "sweatshirt", label: "Crewneck sweatshirt" },
] as const;

export const metadata = {
  title: "Haphy Living (Brand IP) | Angela Yang",
  description:
    "Haphy Living: a live commercial experiment and personal brand IP built from bunny-inspired design to POD production and Etsy operations.",
};

const ETSY_METRICS = [
  { label: "Visits", value: "117" },
  { label: "Orders", value: "4" },
  { label: "Conversion rate", value: "3.4%" },
  { label: "Revenue", value: "US$83.44" },
] as const;

const ETSY_MONTHLY_VISITS = [
  { month: "Jan", visits: 23 },
  { month: "Feb", visits: 13 },
  { month: "Mar", visits: 58 },
  { month: "Apr", visits: 23 },
] as const;

const ETSY_Y_MAX = 60;

function EtsyVisitsChart() {
  const width = 760;
  const height = 280;
  const paddingX = 54;
  const paddingY = 24;

  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  const xFor = (index: number) =>
    paddingX + (index / (ETSY_MONTHLY_VISITS.length - 1)) * chartWidth;
  const yFor = (value: number) =>
    paddingY + ((ETSY_Y_MAX - value) / ETSY_Y_MAX) * chartHeight;

  const path = ETSY_MONTHLY_VISITS.map((d, i) =>
    `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(d.visits)}`
  ).join(" ");

  return (
    <figure className="rounded-[10px] border border-[#E8E1D6] bg-white p-4 sm:p-6">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Etsy visits line chart from Jan to Apr 2026: 23, 13, 58, 23"
      >
        {[0, 15, 30, 45, 60].map((tick) => (
          <g key={tick}>
            <line
              x1={paddingX}
              y1={yFor(tick)}
              x2={width - paddingX}
              y2={yFor(tick)}
              stroke="#ECE7DE"
              strokeWidth="1"
            />
            <text
              x={paddingX - 14}
              y={yFor(tick) + 4}
              textAnchor="end"
              fontSize="11"
              fill="#8A8379"
            >
              {tick}
            </text>
          </g>
        ))}

        <path d={path} fill="none" stroke="#2C3E50" strokeWidth="2.5" />

        {ETSY_MONTHLY_VISITS.map((d, i) => (
          <g key={d.month}>
            <circle cx={xFor(i)} cy={yFor(d.visits)} r="5" fill="#2C3E50" />
            <text
              x={xFor(i)}
              y={height - 8}
              textAnchor="middle"
              fontSize="12"
              fill="#6D665D"
            >
              {d.month}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-[12px] leading-relaxed text-[#7B746B]">
        Jan – Apr 2026 Etsy performance snapshot: 117 visits, 4 orders, 3.4%
        conversion rate, and US$83.44 revenue.
      </figcaption>
    </figure>
  );
}

export default function PhyphyyaCaseStudy() {
  const logoConceptImg = "/case-studies/phyphyya/gallery-10.png";

  const mascotCards = [
    { src: "/case-studies/phyphyya/gallery-02.png", alt: "Mascot 1" },
    { src: "/case-studies/phyphyya/gallery-03.png", alt: "Mascot 2" },
    { src: "/case-studies/phyphyya/gallery-09.png", alt: "Mascot 3" },
    { src: "/case-studies/phyphyya/gallery-16.png", alt: "Mascot 4" },
  ];

  const brandApplications = [
    {
      src: "/case-studies/phyphyya/gallery-14.png",
      alt: "Brand Application Overview",
      caption: "Brand Application Overview",
      large: true,
    },
    {
      src: "/case-studies/phyphyya/gallery-04.png",
      alt: "Pet Product Packaging",
      caption: "Pet Product Packaging",
      large: false,
    },
    {
      src: "/case-studies/phyphyya/gallery-06.png",
      alt: "Business Card & Stationery",
      caption: "Business Card & Stationery",
      large: false,
    },
    {
      src: "/case-studies/phyphyya/gallery-17.png",
      alt: "Environmental Product Display (updated)",
      caption: "Environmental Product Display",
      large: true,
    },
  ];

  const sweatshirtSeries = [
    {
      src: "/case-studies/phyphyya/gallery-12.png",
      alt: "Sweatshirt Hanger Display",
      label: "Hanger Display",
    },
    {
      src: "/case-studies/phyphyya/gallery-15.png",
      alt: "Sweatshirt Lifestyle",
      label: "Lifestyle",
    },
    {
      src: "/case-studies/phyphyya/gallery-05.png",
      alt: "Sweatshirt Desktop Details",
      label: "Desktop Details",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#4A4A4A]">
      <div className="mx-auto max-w-[1280px]">
        <header className="border-b border-[#E0D9CE]">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-[#7A7A7A] mb-6">
              <span>Brand IP</span>
              <span className="text-[#B0B0B0]">·</span>
              <span>Illustration + Product</span>
            </div>

            <h1 className="max-w-3xl text-[#2C3E50]">
              Haphy Living
            </h1>
            <p className="mt-4 max-w-2xl text-[#666]">
              A live ecommerce experiment built from a personal rabbit-inspired
              IP—taken from illustration to POD production and Etsy storefront
              operations.
            </p>
            <div className="mt-6">
              <a
                href="https://www.instagram.com/phyphya__/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#D4C5B0] px-[18px] py-[10px] text-[#4A4A4A] text-[14px] transition hover:bg-[#D4C5B0]/20"
              >
                Instagram · @phyphya__
              </a>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-2 text-sm">
              <div>
                <dt className="text-[#7A7A7A] uppercase tracking-wider">Role</dt>
                <dd className="text-[#4A4A4A]">Solo creator</dd>
              </div>
              <div>
                <dt className="text-[#7A7A7A] uppercase tracking-wider">Location</dt>
                <dd className="text-[#4A4A4A]">Self-initiated project</dd>
              </div>
              <div>
                <dt className="text-[#7A7A7A] uppercase tracking-wider">
                  Timeline
                </dt>
                <dd className="text-[#4A4A4A]">2022 – present</dd>
              </div>
            </dl>

            <div className="mt-12">
              <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-[#D8CFC1] bg-[#FAF7F2]">
                <Image
                  src="/case-studies/phyphyya/gallery-14.png"
                  alt="Haphy Living brand applications overview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
            </div>
          </div>
        </header>

        <CaseStudyContentLayout
          toc={PHY_TOC}
          variant="light"
          omitOuterContainer
          contentClassName=""
          tocHeading="On this page"
        >
        <section
          id="project-overview"
          className="scroll-mt-28 py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-[#8D99AE]">
            00 · Project overview
          </span>
          <h2 className="mt-2 text-[#2C3E50]">At a glance</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h5 className="text-[#7B746B] uppercase tracking-wide">
                Brief / Background
              </h5>
              <div className="mt-2 space-y-3 text-sm text-[#666] leading-relaxed">
                <p>
                  I built Haphy Living to turn a deeply personal story—my bond
                  with my rabbit—into a real, testable ecommerce brand.
                </p>
                <p>
                  Since I already had a rabbit-focused Instagram audience (built
                  since 2022), I used Etsy + POD to validate demand in North
                  America with low inventory risk.
                </p>
              </div>
            </article>
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h5 className="text-[#7B746B] uppercase tracking-wide">
                My role
              </h5>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Solo project. I owned brand identity design, illustration, product
                design, and Etsy operations end-to-end.
              </p>
            </article>
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h5 className="text-[#7B746B] uppercase tracking-wide">
                Tools
              </h5>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                Procreate / Figma / Lovart / POD
              </p>
            </article>
            <article className="rounded-2xl border border-[#E8E1D6] bg-white p-6">
              <h5 className="text-[#7B746B] uppercase tracking-wide">
                Timeline
              </h5>
              <p className="mt-2 text-sm text-[#666] leading-relaxed">
                2022 – present (ongoing side project)
              </p>
            </article>
          </div>
        </section>
        
        {/* Logo Concept - Soft & Rounded */}
        <section
          id="logo-concept"
          className="scroll-mt-28 py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32 flex flex-col items-center"
        >
          <div className="text-center mb-[60px] max-w-[800px] mx-auto">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              Logo Concept - Soft & Rounded
            </h2>
            <p className="text-[16px] text-[#666]">
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
                <h3 className="text-[#2C3E50] mb-[12px] border-l-[3px] border-[#D4C5B0] pl-[15px] font-serif">
                  Color Palette
                </h3>
                <p className="text-[16px] text-[#666] pl-[18px]">
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
                <h3 className="text-[#2C3E50] mb-[12px] border-l-[3px] border-[#D4C5B0] pl-[15px] font-serif">
                  Visual Effect
                </h3>
                <p className="text-[16px] text-[#666] pl-[18px]">
                  The blue-gray adds a touch of freshness and modernity to the
                  typography, echoing the gray-white tones of the lop-eared
                  rabbit mascot. The overall color scheme is rich yet harmonious.
                </p>
              </div>

              <div>
                <h3 className="text-[#2C3E50] mb-[12px] border-l-[3px] border-[#D4C5B0] pl-[15px] font-serif">
                  Style Characteristics
                </h3>
                <p className="text-[16px] text-[#666] pl-[18px]">
                  Maintains vintage British hand-drawn texture. Rounded
                  typography with rough brush strokes. A warm brand personality with a fresh touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mascot Section - Lop-eared Rabbit */}
        <section
          id="mascot"
          className="relative scroll-mt-28 bg-white py-[100px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[#FFFFFF]"
            aria-hidden
          />
          <div className="text-center mb-[60px] max-w-[900px] mx-auto">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              Brand Mascot - Lop-eared Rabbit
            </h2>
            <p className="text-[16px] text-[#666]">
              Embodying the spirit of relaxation.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[50px]">
            {mascotCards.map((c) => (
              <div
                key={c.src}
                className="bg-[#F9F9F9] p-[20px] rounded-[8px] text-center transition-transform duration-300 hover:-translate-y-[5px]"
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="w-full h-auto rounded-[4px] mix-blend-multiply"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="mt-[40px] bg-[#F5F3EF] p-[40px] rounded-[12px] grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            <div>
              <h4 className="text-[#2C3E50] mb-[8px] font-serif">
                Posture
              </h4>
              <p className="text-[15px] text-[#666] mb-[20px]">
                Inspired by my bunny&apos;s everyday napping poses at home: cute,
                sleepy, and delightfully lazy. The relaxed vibe feels instantly
                healing and makes you want to gently pat her head.
              </p>
            </div>
            <div>
              <h4 className="text-[#2C3E50] mb-[8px] font-serif">
                Ears
              </h4>
              <p className="text-[15px] text-[#666] mb-[20px]">
                Long droopy ears naturally falling, adding a lazy charm.
              </p>
            </div>
            <div>
              <h4 className="text-[#2C3E50] mb-[8px] font-serif">
                Color
              </h4>
              <p className="text-[15px] text-[#666] mb-[20px]">
                Gray and white dual-tone color blocks, maintaining a clean and fresh look.
              </p>
            </div>
            <div>
              <h4 className="text-[#2C3E50] mb-[8px] font-serif">
                Texture
              </h4>
              <p className="text-[15px] text-[#666] mb-[20px]">
                Rough hand-drawn brush strokes and paper texture, creating a warm vintage atmosphere.
              </p>
            </div>

            <div className="md:col-span-2 text-center italic font-serif text-[20px] text-[#8D99AE] mt-[20px] border-t border-[#ddd] pt-[20px]">
              "This posture conveys the brand philosophy of 'complete
              relaxation and peaceful rest,' perfectly suited for the warm positioning of pet daily essentials."
            </div>
          </div>
        </section>

        {/* Brand Applications */}
        <section
          id="brand-applications"
          className="scroll-mt-28 py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32 flex flex-col items-center"
        >
          <div className="text-center mb-[60px] max-w-[800px] mx-auto">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              Brand Applications
            </h2>
            <p className="text-[16px] text-[#666]">
              Bringing the brand to life across various touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
            {brandApplications.map((it) => (
              <div
                key={it.src}
                className={`relative rounded-[8px] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.08)] group ${it.large ? "md:col-span-2" : ""}`}
              >
                <div className="aspect-[4/3] w-full relative">
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[500ms] group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-[20px] py-[20px] bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {it.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Etsy storefront & Print-on-Demand workflow */}
        <section
          id="etsy-pod"
          className="scroll-mt-28 bg-white py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <div className="text-center max-w-[900px] mx-auto mb-[50px]">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              Etsy shop &amp; Print-on-Demand
            </h2>
            <p className="text-[16px] text-[#666] leading-relaxed">
              I launched{" "}
              <a
                href="https://www.etsy.com/ca/shop/HaphyLiving"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C3E50] underline underline-offset-2 hover:text-[#8D99AE]"
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
          <div className="flex flex-col lg:flex-row gap-6 max-w-[1280px] mx-auto mb-[40px] lg:items-stretch lg:h-[min(540px,72vh)]">
            <div className="flex shrink-0 lg:w-[min(280px,32%)] items-center justify-center overflow-hidden rounded-[8px] bg-[#faf9f7] shadow-[0_5px_15px_rgba(0,0,0,0.08)] px-3 py-4 lg:py-6 min-h-[420px] lg:min-h-0">
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

          <div className="max-w-[900px] mx-auto space-y-[28px] text-[16px] text-[#666] leading-relaxed">
            <p>
              <strong className="text-[#2C3E50] font-serif">
                1 · Design in Procreate
              </strong>
              <br />
              I drew the wordmark and the lop-eared rabbit mascot by hand in
              Procreate—keeping the soft, vintage brush texture consistent across
              every touchpoint before anything went to print.
            </p>
            <p>
              <strong className="text-[#2C3E50] font-serif">
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
              <strong className="text-[#2C3E50] font-serif">
                3 · Lovart for listing &amp; social visuals
              </strong>
              <br />
              I use Lovart to generate lifestyle mockups and product scenes—so
              each listing has clear, on-brand photography that shows scale,
              texture, and context (not just flat art on a white background).
            </p>
            <p>
              <strong className="text-[#2C3E50] font-serif">
                4 · Etsy as the storefront
              </strong>
              <br />
              Etsy handles discovery, checkout, and buyer communication; POD
              handles the physical workflow. Together they let me test products
              and iterate on listings with low operational overhead.
            </p>
            <p>
              <strong className="text-[#2C3E50] font-serif">
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
        </section>

        <section
          id="store-performance"
          className="scroll-mt-28 bg-white py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <div className="text-center max-w-[900px] mx-auto mb-[40px]">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              Store performance
            </h2>
            <p className="text-[16px] text-[#666] leading-relaxed">
              Etsy dashboard snapshot from Jan to Apr 2026. These are the current
              measurable outputs I have today; SKU mix and shipping strategy are
              still being iterated.
            </p>
          </div>

          <div className="max-w-[1080px] mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {ETSY_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[10px] border border-[#E8E1D6] bg-[#FDFBF8] p-4"
                >
                  <p className="text-[12px] uppercase tracking-[0.8px] text-[#8A8379]">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-[26px] leading-none text-[#2C3E50] font-serif">
                    {metric.value}
                  </p>
                </article>
              ))}
            </div>
            <EtsyVisitsChart />
          </div>
        </section>

        <section
          id="testing-next"
          className="scroll-mt-28 bg-[#F5F3EF] py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <div className="max-w-[900px] mx-auto mb-[40px] text-center">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              What I&apos;m testing next
            </h2>
            <p className="text-[16px] text-[#666] leading-relaxed">
              Operating hypotheses I&apos;m running against live Etsy data—shipping,
              pricing, and SKU mix—so the shop stays a learning loop, not a one-off
              launch.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto rounded-2xl border border-[#E8E1D6] bg-white p-6 sm:p-8">
            <ul className="space-y-5 text-[16px] text-[#666] leading-relaxed">
              <li>
                <strong className="font-semibold text-[#2C3E50]">
                  Shipping economics
                </strong>
                <span className="block mt-1">
                  Compare POD carriers and fulfillment paths for Canada / US
                  buyers; test whether bundled listings and higher-AOV offers absorb
                  shipping better than single low-ticket SKUs.
                </span>
              </li>
              <li>
                <strong className="font-semibold text-[#2C3E50]">
                  Pricing &amp; perceived value
                </strong>
                <span className="block mt-1">
                  Run small, time-boxed price tests on comparable listings while
                  keeping mockups and copy consistent—so shifts in conversion map
                  more cleanly to price, not creative noise.
                </span>
              </li>
              <li>
                <strong className="font-semibold text-[#2C3E50]">
                  SKU mix &amp; bundles
                </strong>
                <span className="block mt-1">
                  Narrow the catalog to a tight hero set (stickers, magnets,
                  apparel) and add intentional bundles (e.g. sticker + magnet) to
                  lift order value and clarify what the brand is for at a glance.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* New POD products: magnets & stickers */}
        <section
          id="pod-products"
          className="scroll-mt-28 bg-[#F5F3EF] py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <div className="text-center max-w-[900px] mx-auto mb-[50px]">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              New products · Magnets &amp; stickers
            </h2>
            <p className="text-[16px] text-[#666] leading-relaxed">
              Recent drops—round fridge magnets and die-cut stickers—using the
              same Procreate artwork, POD templates, and Lovart mockups as the rest
              of the line.
            </p>
          </div>

          {/* Row 1: three cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] max-w-[1280px] mx-auto">
            {[
              {
                src: "/case-studies/phyphyya/pod-magnets-fridge.png",
                alt: "Round bunny magnets on a fridge",
                label: "Magnets · fridge",
              },
              {
                src: "/case-studies/phyphyya/pod-magnets-hand.png",
                alt: "Hand holding bunny magnets",
                label: "Magnets · detail",
              },
              {
                src: "/case-studies/phyphyya/pod-stickers-flatlay.png",
                alt: "Die-cut bunny stickers flat lay with mug and notebook",
                label: "Stickers · flat lay",
              },
            ].map((item) => (
              <div
                key={item.src}
                className="flex flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto block"
                  loading="lazy"
                />
                <p className="text-center py-[12px] text-[13px] text-[#888] font-serif shrink-0">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: three columns — middle = size range + laptop merged, equal height */}
          <div className="mt-[22px] grid grid-cols-1 lg:grid-cols-3 gap-[22px] max-w-[1280px] mx-auto items-stretch lg:min-h-[520px]">
            <div className="flex flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04)] h-full min-h-0">
              <div className="relative flex-1 min-h-[280px] lg:min-h-0">
                <img
                  src="/case-studies/phyphyya/pod-stickers-diecut.png"
                  alt="Hand holding die-cut bunny stickers"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="shrink-0 text-center py-[12px] text-[13px] text-[#888] font-serif">
                Stickers · die-cut
              </p>
            </div>

            <div className="flex flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04)] h-full min-h-0">
              <div className="flex min-h-0 flex-1 flex-col gap-2 p-2">
                <div className="relative min-h-[160px] flex-1">
                  <img
                    src="/case-studies/phyphyya/pod-stickers-sizes.png"
                    alt="Bunny stickers in multiple sizes"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="relative min-h-[160px] flex-1">
                  <img
                    src="/case-studies/phyphyya/pod-sticker-laptop.png"
                    alt="Die-cut bunny sticker on laptop"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="shrink-0 text-center py-[12px] text-[13px] text-[#888] font-serif leading-snug px-2">
                Stickers · size range &amp; in context (laptop)
              </p>
            </div>

            <div className="flex flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04)] h-full min-h-0">
              <div className="relative flex-1 min-h-[280px] lg:min-h-0">
                <img
                  src="/case-studies/phyphyya/pod-sticker-leather.png"
                  alt="Die-cut bunny sticker on leather journal"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="shrink-0 text-center py-[12px] text-[13px] text-[#888] font-serif">
                Stickers · in context (leather)
              </p>
            </div>
          </div>
        </section>

        {/* Product Series - Canvas Tote Bag */}
        <section
          id="canvas-tote"
          className="scroll-mt-28 bg-white py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <div className="text-center max-w-[800px] mx-auto mb-[50px]">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              Canvas Tote Bag
            </h2>
            <p className="text-[16px] text-[#666]">
              Durable, stylish, and perfect for daily adventures.
            </p>
          </div>

          {/* Big image + thumbnails (no framed UI) */}
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img
                src="/case-studies/phyphyya/gallery-14.png"
                alt="Canvas tote bag bundle (main)"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-[26px] grid grid-cols-3 gap-[22px]">
              <div className="overflow-hidden">
                <img
                  src="/case-studies/phyphyya/gallery-01.png"
                  alt="Canvas tote bag street style (thumbnail)"
                  className="w-full aspect-[1/1] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/case-studies/phyphyya/gallery-11.png"
                  alt="Canvas tote bag texture detail (thumbnail)"
                  className="w-full aspect-[1/1] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/case-studies/phyphyya/gallery-07.png"
                  alt="Canvas tote bag street environment (thumbnail)"
                  className="w-full aspect-[1/1] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Series - Sweatshirt */}
        <section
          id="sweatshirt"
          className="scroll-mt-28 bg-[#F5F3EF] py-[80px] px-6 sm:px-[100px] sm:scroll-mt-32"
        >
          <div className="text-center max-w-[800px] mx-auto mb-[50px]">
            <h2 className="text-[#2C3E50] mb-[20px] relative inline-block font-serif after:content-[''] after:block after:w-[40px] after:h-[3px] after:bg-[#8D99AE] after:mx-auto after:mt-[15px]">
              Crewneck Sweatshirt
            </h2>
            <p className="text-[16px] text-[#666]">
              Cozy apparel reflecting the brand's warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full max-w-[1280px] mx-auto">
            {sweatshirtSeries.map((it) => (
              <div
                key={it.src}
                className="bg-white p-[15px] border border-[#eee] shadow-[0_4px_10px_rgba(0,0,0,0.03)]"
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className="w-full h-[400px] object-cover block mb-[15px]"
                  loading="lazy"
                />
                <div className="font-serif uppercase tracking-[1px] text-[14px] text-[#888] text-center">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        </CaseStudyContentLayout>

        <footer className="border-t border-[#E0D9CE] bg-[#F5F3EF] px-6 sm:px-[100px] py-14">
          <CaseStudyPrevNext currentSlug="phyphyya" variant="light" />
          <Link
            href="/"
            className="mt-8 inline-block text-sm text-[#6A6358] transition hover:text-[#2C3E50]"
          >
            ← Back to work
          </Link>
        </footer>
      </div>
    </div>
  );
}


import Link from "next/link";
import {
  CASE_STUDY_BODY_GRID,
  CASE_STUDY_SECTION_TITLE_CLASS,
  SITE_SHELL_INNER,
} from "@/lib/site-shell";
import {
  HAPHY_LIVING_INSTAGRAM_URL,
  HAPHY_LIVING_SHOP_INSTAGRAM_URL,
} from "@/app/content/haphy-living";
import { CS_BODY, CS_H3, CS_SECTION_EYEBROW } from "@/lib/case-study-theme";
import { CaseStudyContentLayout } from "../_components/CaseStudyContentLayout";
import { CaseStudyInViewSection } from "../_components/CaseStudyInViewSection";
import { CaseStudyPrevNext } from "../_components/CaseStudyPrevNext";

export const metadata = {
  title: "Haphy Living · Original brand IP & Etsy shop | Angela Yang",
  description:
    "End-to-end brand identity for a pet-lifestyle label — mascot, seasonal collections, a live Etsy shop, and in-person Christmas market pop-ups.",
};

export default function PhyphyyaCaseStudy() {
  const logoConceptImg = "/case-studies/phyphyya/gallery-10.png";

  const mascotCards = [
    { src: "/case-studies/phyphyya/gallery-02.png", alt: "Haphy mascot pose 1" },
    { src: "/case-studies/phyphyya/gallery-03.png", alt: "Haphy mascot pose 2" },
    { src: "/case-studies/phyphyya/gallery-09.png", alt: "Haphy mascot pose 3" },
    { src: "/case-studies/phyphyya/gallery-16.png", alt: "Haphy mascot pose 4" },
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
            shop, marketing, and showing up in person as a vendor.
          </p>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="decisions"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <span className={CS_SECTION_EYEBROW}>Key decisions</span>
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Design for the product, not just the screen
          </h2>
          <div className={`max-w-3xl space-y-5 ${CS_BODY}`}>
            <p>
              One mascot, many looks. Haphy wears a different outfit for each
              season — Christmas, autumn, everyday — so the brand is always
              easy to recognise, and I can keep adding new products.
            </p>
            <p>
              Every design is made to be printed, not just to look good on a
              screen. The artwork fills the whole product, the mockups show the
              real size, and I check the colours against a printed sample. A
              design that looks good in Figma but bad on a tote bag isn&apos;t
              done.
            </p>
            <p>
              My Etsy shop is part of the work, not just a place to sell. The
              photos, the titles, and the lifestyle pictures are all part of
              the brand, so I design them with the same care.
            </p>
            <p>
              My market booth works the same way. The knitted pet hats, the
              postcards, and the Christmas tote only work together if the
              table, the poster, and the QR flyer all feel like the same world
              as the Etsy shop.
            </p>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="etsy-pod"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Etsy, run like a product
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            The shop isn&apos;t a gallery — it&apos;s a product I iterate on
            with live data.
          </p>
          <ul className={`max-w-3xl space-y-5 ${CS_BODY}`}>
            <li>
              Rewrote all 10 titles and tags for search. The sweatshirt now
              ranks #2 organically for &quot;holland lop sweatshirt&quot;; the
              red pearl hat ranks #1 as an ad and #3 organically.
            </li>
            <li>
              Priced from unit economics — every listing is costed to the
              order, so a cut never quietly turns into a loss.
            </li>
          </ul>

          <div className="space-y-4">
            <img
              src="/case-studies/phyphyya/etsy-shop-storefront.jpg"
              alt="Haphy Living Etsy shop — Christmas collection, 12 sales, 5.0 rating"
              className="block h-auto w-full"
              loading="lazy"
            />
            <img
              src="/case-studies/phyphyya/etsy-shop-manager.jpg"
              alt="Etsy Shop Manager — live listings including hats, postcards, totes, and print-on-demand goods"
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="instagram"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Instagram is the top of the funnel
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            <a
              href={HAPHY_LIVING_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400"
            >
              @lifewith.haphy
            </a>{" "}
            is Haphy&apos;s daily life first — product shows up occasionally,
            never as a feed takeover. The shop has its own account —{" "}
            <a
              href={HAPHY_LIVING_SHOP_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400"
            >
              @haphyliving
            </a>{" "}
            — for products, drops, and market days; @lifewith.haphy stays
            Haphy&apos;s daily life.
          </p>
          <ul className={`max-w-3xl space-y-5 ${CS_BODY}`}>
            <li>
              Reels go out Wed and Fri at 7 AM, the slots the audience actually
              watches. 62% of views come from non-followers.
            </li>
            <li>
              The tree-hat Reel taught me the hook has to land in the first 2
              seconds: the hat went on at 10 seconds, and 76% skipped before
              it.
            </li>
          </ul>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,22rem)_1fr]">
            <div className="min-w-0">
              <p className={`${CS_H3} mb-3`}>@lifewith.haphy</p>
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }, (_, i) => {
                  const n = String(i + 1).padStart(2, "0");
                  return (
                    <img
                      key={n}
                      src={`/case-studies/phyphyya/instagram/grid-${n}.jpg`}
                      alt=""
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
            <div className="min-w-0">
              <p className={`${CS_H3} mb-3`}>Tree-hat Reel</p>
              <img
                src="/case-studies/phyphyya/instagram/grid-02.jpg"
                alt="Still from the tree-hat Reel — Christmas hats on the dresser, Haphy watching"
                className="block h-auto w-full max-h-[560px] object-contain object-left"
                loading="lazy"
              />
            </div>
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="popup"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          {/* TODO Angela: booth results (what sold / how much) — do not publish until provided */}
          {/* TODO Angela: Lonsdale Quay wording — only after acceptance; do not publish while pending */}
          {/* TODO Angela: confirm whether to name Printify / Duplium as suppliers */}
          {/* TODO Angela: confirm whether "12 sales, 5.0 rating" on the Etsy screenshot alt is still current */}
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>In person: the booth</h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            First in-person test: a festival booth, Nov 7–8. Postcard sets, pet
            Christmas hats, and a QR code back to the shop — plus Tap to Pay
            on my phone, no card reader to buy.
          </p>

          <img
            src="/case-studies/phyphyya/popup-2026/booth-with-haphy.jpg"
            alt="At the pop-up booth with Haphy, the Holland lop who inspired the brand"
            className="block h-auto w-full"
            loading="lazy"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <img
              src="/case-studies/phyphyya/popup-2026/booth-poster.jpg"
              alt="Booth display: Inspired by Haphy poster, Christmas tree hats, and QR code to the full catalog"
              className="block aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
            <img
              src="/case-studies/phyphyya/popup-2026/booth-table.jpg"
              alt="Haphy Living booth table — postcards, knitted hats, and Etsy QR stand"
              className="block aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
            <img
              src="/case-studies/phyphyya/popup-2026/booth-hats-detail.jpg"
              alt="Close-up of Christmas pet hats, Haphy postcards, and knit accessories on the booth"
              className="block aspect-[3/4] w-full object-cover object-top"
              loading="lazy"
            />
            <img
              src="/case-studies/phyphyya/popup-2026/pet-hat-on-dog.jpg"
              alt="A Pomeranian wearing a red knitted Christmas pet hat from the Haphy Living booth"
              className="block aspect-[3/4] w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </CaseStudyInViewSection>

        <CaseStudyInViewSection
          id="sourcing"
          className="scroll-mt-28 space-y-6 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            Sourcing: print-on-demand first
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            Print-on-demand carries the line — artwork in, mockup out, no
            inventory held — so I can test a design with real orders before
            committing to stock. The handmade hats are the exception: sewn in
            small batches, sold singly. I costed a 300-piece run with an
            overseas hat supplier and paused it — the math didn&apos;t clear
            the Christmas window. Saying no to stock is part of the job.
          </p>
          <img
            src="/case-studies/phyphyya/popup-2026/christmas-tote.jpg"
            alt="Print-on-demand Christmas tote — Haphy by the fireplace"
            className="block h-auto w-full max-w-3xl"
            loading="lazy"
          />
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
          id="outcome"
          className="scroll-mt-28 space-y-4 sm:scroll-mt-32"
        >
          <h2 className={CASE_STUDY_SECTION_TITLE_CLASS}>
            A complete, self-sustaining brand IP
          </h2>
          <p className={`max-w-3xl ${CS_BODY}`}>
            One brand, three channels: a live Etsy shop, two Instagram accounts
            (shop and daily life), and a booth table — built solo from zero,
            and still growing every holiday season.
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

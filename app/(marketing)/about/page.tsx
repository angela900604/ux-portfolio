import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { BeyondDesignGallery } from "@/app/components/BeyondDesignGallery";
import { BEYOND_PHOTOGRAPHY_GALLERY } from "@/app/content/beyond-design-gallery";
import { HaphyLivingCallout } from "./HaphyLivingCallout";
import { MarketingHomeLogos } from "../MarketingHomeLogos";
import { MARKETING_SECTION_TITLE_CLASS } from "@/lib/marketing-section-title";

const INTERVIEW_PHOTO_SRC = "/about/user-interviews-collage.png";

/** Joseph Chen–style dotted underline for emphasis phrases in the About lead. */
const ABOUT_EMPHASIS_CLASS =
  "font-medium underline decoration-dotted underline-offset-[3px] text-zinc-200 decoration-zinc-600 transition-colors hover:decoration-zinc-400";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Marketing designer in Vancouver—Precise Pipe, MINA AI, government services, and Haphy Living.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 font-sans">
      <div className="max-w-4xl space-y-4 text-[17px] font-normal leading-[1.7] text-zinc-400 text-pretty xl:max-w-5xl">
        <p>
          I&apos;m a{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>marketing designer</span>
          {" "}in Vancouver. I work on brand that has to live in the real
          world — campaigns, print, and trade-show — and I&apos;ve also
          designed products end to end.
        </p>
        <p>
          I run{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>Haphy Living</span>
          , my own pet-lifestyle brand, where I own identity, products, the
          shop, and customer care.
        </p>
      </div>

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <h2 className={MARKETING_SECTION_TITLE_CLASS}>How I work</h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
              I like talking to users — focus groups, 1:1s, usability tests —
              then turning that into something the team can ship. I work close
              to engineers and PMs from the start, and I use AI in the
              workflow when it actually saves time.
            </p>
          </div>
          <figure className="min-w-0 w-full lg:col-span-7">
            <ImageLightbox
              src={INTERVIEW_PHOTO_SRC}
              alt="Collage: Angela facilitating user research—in group sessions, one-on-one interviews, and conversations with participants across ages and contexts."
              className="block w-full"
              disableHoverScale
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40">
                <Image
                  src={INTERVIEW_PHOTO_SRC}
                  alt="Collage: Angela facilitating user research—in group sessions, one-on-one interviews, and conversations with participants across ages and contexts."
                  width={1024}
                  height={768}
                  className="h-auto w-full object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                />
              </div>
            </ImageLightbox>
          </figure>
        </div>
      </section>

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <h2 className={MARKETING_SECTION_TITLE_CLASS}>Beyond design</h2>
        <HaphyLivingCallout />
        <div className="mt-12 border-t border-zinc-800/90 pt-10">
          <BeyondDesignGallery
            photography={BEYOND_PHOTOGRAPHY_GALLERY}
            graphic={[]}
          />
        </div>
      </section>

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <h2 className={MARKETING_SECTION_TITLE_CLASS}>Tools &amp; skills</h2>
        <div className="mt-6 max-w-3xl space-y-3 text-sm font-normal leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
          <p>
            Adobe Creative Suite (Photoshop, Illustrator, Premiere), Figma,
            Framer, Canva, WordPress, Mailchimp, Excel, Airtable, Slack,
            Google Analytics, PostHog.
          </p>
          <p>
            Brand identity, content strategy, social (Instagram, Facebook,
            LinkedIn), short-form video, print production, SEO, user research,
            journey mapping, information architecture, wireframing,
            accessibility (WCAG), A/B testing.
          </p>
        </div>
        <MarketingHomeLogos />
      </section>
    </div>
  );
}

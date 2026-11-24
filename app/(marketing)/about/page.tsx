import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { BeyondDesignGallery } from "@/app/components/BeyondDesignGallery";
import { BEYOND_PHOTOGRAPHY_GALLERY } from "@/app/content/beyond-design-gallery";
import { HaphyLivingCallout } from "./HaphyLivingCallout";
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
          <span className={ABOUT_EMPHASIS_CLASS}>product and brand designer</span>
          {" "}in Vancouver. I work on products end to end — and on brands
          that have to live in the real world: campaigns, print, and
          trade-show.
        </p>
        <p>
          I run{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>Haphy Living</span>
          , my own pet-lifestyle brand, where I own identity, products, the
          shop, and customer care.
        </p>
      </div>

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <h2 className={MARKETING_SECTION_TITLE_CLASS}>Experience</h2>
        <ul className="mt-6 max-w-3xl space-y-2 text-sm font-normal leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
          <li>
            Graphic Design &amp; Operations Coordinator, Precise Pipe Inc.,
            2026–Present
          </li>
          <li>Product Designer, MINA AI, 2025–2026</li>
        </ul>
      </section>

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
        <p className="mt-6 max-w-3xl text-sm font-normal leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
          Figma, Framer, Adobe Creative Suite (Photoshop, Illustrator,
          Premiere), WordPress, Canva, Mailchimp, Google Analytics, PostHog,
          Excel, Airtable, Slack.
        </p>
      </section>

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <h2 className={MARKETING_SECTION_TITLE_CLASS}>Contact</h2>
        <p className="mt-6 max-w-3xl text-sm font-normal leading-relaxed text-zinc-400 sm:text-[0.9375rem]">
          <a
            href="https://www.linkedin.com/in/angelayangg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href="/resume/AngelaYang_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 underline decoration-dotted decoration-zinc-600 underline-offset-[3px] transition-colors hover:decoration-zinc-400"
          >
            Resume
          </a>
        </p>
      </section>
    </div>
  );
}

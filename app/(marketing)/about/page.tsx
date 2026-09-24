import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { BeyondDesignGallery } from "@/app/components/BeyondDesignGallery";
import { BEYOND_PHOTOGRAPHY_GALLERY } from "@/app/content/beyond-design-gallery";
import { AboutExperienceSection } from "./AboutExperienceSection";
import { HaphyLivingCallout } from "./HaphyLivingCallout";
import { MarketingHomeLogos } from "../MarketingHomeLogos";
import { MARKETING_SECTION_TITLE_CLASS } from "@/lib/marketing-section-title";

const INTERVIEW_PHOTO_SRC = "/about/user-interviews-collage.png";

const ABOUT_CARD_TITLE_CLASS =
  "text-base font-medium tracking-tight text-zinc-100 sm:text-lg";
const ABOUT_CARD_BODY_CLASS =
  "mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base";

/** Joseph Chen–style dotted underline for emphasis phrases in the About lead. */
const ABOUT_EMPHASIS_CLASS =
  "font-medium underline decoration-dotted underline-offset-[3px] text-zinc-200 decoration-zinc-600 transition-colors hover:decoration-zinc-400";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Marketing designer in Vancouver—Precise Pipe, MINA AI, government services, and Haphy Living. Brand, content, and product across the full funnel.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 font-sans">
      <div className="max-w-4xl space-y-4 text-[17px] font-normal leading-[1.7] text-zinc-400 text-pretty xl:max-w-5xl">
        <p>
          I&apos;m a{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>marketing designer</span>
          {" "}in Vancouver, BC, currently leading a two-person design team at{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>Precise Pipe</span>
          {" "}— owning everything from LinkedIn campaigns to trade-show booths
          for a B2B industrial brand.
        </p>
        <p>
          Before that, I designed across the full stack:{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>product design</span>
          {" "}for an AI marketplace startup in San Francisco, government
          platforms in Taiwan used by millions, and an AI interview platform in
          Los Angeles. That range is my superpower — I think in{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>funnels, not just screens</span>
          , and I measure what I make (
          <span className={ABOUT_EMPHASIS_CLASS}>61% Instagram growth</span>
          ,{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>40% engagement lift</span>
          , and{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>30% more listing completions</span>
          {" "}are a few receipts).
        </p>
        <p>
          I also run{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>Haphy Living</span>
          , my own pet-lifestyle brand, where I&apos;m the entire creative
          department. Bilingual in English and Mandarin. Always happy to talk
          brand, content, or rabbits.
        </p>
        <p>And yes, this site was vibe-coded by me :)</p>
      </div>

      <AboutExperienceSection />

      <MarketingHomeLogos />

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-5">
            <h2 className={MARKETING_SECTION_TITLE_CLASS}>
              The part of the job where I feel most alive.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Whether it&apos;s a focus group or a 1:1 usability session, I care
              about making participants feel respected and heard, then turning what
              we learn into something the team can act on. This is where I&apos;m
              most energized and where the best product bets show up.
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
        <h2 className={MARKETING_SECTION_TITLE_CLASS}>How I work</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          <div className="flex min-h-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 sm:p-6">
            <h3 className={ABOUT_CARD_TITLE_CLASS}>
              Engineering-led collaboration
            </h3>
            <p className={`${ABOUT_CARD_BODY_CLASS} flex-1`}>
              I work very closely with frontend and backend engineers from the
              beginning. During early product phases, I proactively discuss
              implementation feasibility so innovative ideas stay practical and
              buildable.
            </p>
          </div>
          <div className="flex min-h-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 sm:p-6">
            <h3 className={ABOUT_CARD_TITLE_CLASS}>PMs, clients &amp; delivery</h3>
            <p className={`${ABOUT_CARD_BODY_CLASS} flex-1`}>
              I&apos;m comfortable helping lead a thread: aligning with PMs on scope
              and timeline, clarifying requirements with clients, and keeping design
              decisions legible so the team ships on schedule.
            </p>
          </div>
          <div className="flex min-h-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 sm:p-6">
            <h3 className={ABOUT_CARD_TITLE_CLASS}>AI-enhanced workflow</h3>
            <p className={`${ABOUT_CARD_BODY_CLASS} flex-1`}>
              I constantly test new AI tools (such as Cursor, Claude, and Figma AI),
              not to follow trends, but to identify what genuinely improves my
              workflow and increases delivery efficiency.
            </p>
          </div>
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

    </div>
  );
}

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { BeyondDesignGallery } from "@/app/components/BeyondDesignGallery";
import { BEYOND_PHOTOGRAPHY_GALLERY } from "@/app/content/beyond-design-gallery";
import { AboutExperienceSection } from "./AboutExperienceSection";
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
    "Product Designer with digital marketing roots—high-growth consumer experiences across AI marketplaces, government services, and membership platforms; builds in the open and swaps notes on design workflows as tools evolve.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 font-sans">
      <div className="max-w-4xl space-y-4 text-[17px] font-normal leading-[1.7] text-zinc-400 text-pretty xl:max-w-5xl">
        <p>
          I&apos;m a Product Designer specializing in delivering{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>end-to-end solutions</span>
          {" "}across consumer-facing mobile apps and webs, such as{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>AI-driven marketplaces</span>,{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>membership platforms</span>, and{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>public service platforms</span>.
        </p>
        <p>
          I enjoy diving into{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>user research</span>
          {" "}to understand what people need, what the business wants to achieve, and what
          technical limitations we&apos;re working with. This helps us make sure the design is
          both possible and works well with the engineering team.
        </p>
        <p>
          Being very{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>adaptable</span>
          {" "}in an{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>AI-based workflow</span>
          , using tools like{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>Stitch, Claude, Figma, and Cursor</span>
          , lets me quickly turn ideas from{" "}
          <span className={ABOUT_EMPHASIS_CLASS}>
            sketches into detailed, ready-to-use prototypes
          </span>
          {" "}for developers.
        </p>
        <p>And yes, this site was vibe-coded by me :)</p>
      </div>

      <AboutExperienceSection />

      <MarketingHomeLogos />

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <h2 className={MARKETING_SECTION_TITLE_CLASS}>
          The part of the job where I feel most alive.
        </h2>
        <div className="mt-6 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 text-sm leading-relaxed text-zinc-400 sm:text-base lg:col-span-5">
            <p>
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
              <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
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
        <div className="mt-6">
          <BeyondDesignGallery
            photography={BEYOND_PHOTOGRAPHY_GALLERY}
            graphic={[]}
          />
        </div>
      </section>

    </div>
  );
}

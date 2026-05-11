import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";
import { BeyondDesignGallery } from "@/app/components/BeyondDesignGallery";
import { BEYOND_PHOTOGRAPHY_GALLERY } from "@/app/content/beyond-design-gallery";
import { MarketingHomeLogos } from "../MarketingHomeLogos";

const INTERVIEW_PHOTO_SRC = "/about/user-interviews-collage.png";
const RESUME_PDF_SRC = "/resume/AngelaYang_Resume.pdf";

const DISPLAY_FONT =
  "var(--font-serif-display), Georgia, 'Times New Roman', serif";

const ABOUT_CARD_TITLE_CLASS =
  "text-base font-semibold tracking-tight text-zinc-100 sm:text-lg";
const ABOUT_CARD_BODY_CLASS =
  "mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Product designer: consumer mobile and growth-focused UX, multi-role flows across government-scale and B2C, diverse user research. AI-driven consumer products. Vancouver.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
        About
      </p>
      <h1
        className="mt-5 max-w-2xl text-lg font-normal leading-snug tracking-[-0.02em] text-zinc-200 sm:text-xl md:text-2xl"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        A product designer for consumer mobile and growth—shipping complex,
        multi-role UX across government-scale and B2C, with a strong research
        foundation across diverse segments. Focused on AI-driven products and
        cross-functional leadership; based in Vancouver, open to relocate,
        remote, or hybrid.
      </h1>

      <MarketingHomeLogos />

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <h2
          className="text-lg font-medium text-zinc-200 sm:text-xl"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          User interviews
        </h2>
        <div className="mt-6 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base lg:col-span-5">
            <p
              className="text-lg font-medium text-zinc-100 sm:text-xl"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              The part of the job where I feel most alive.
            </p>
            <p>
              Whether it&apos;s a focus group or a 1:1 usability session, I care
              about making participants feel respected and heard, then turning what
              we learn into something the team can act on. This is where I&apos;m
              most energized and where the best product bets show up.
            </p>
          </div>
          <figure className="min-w-0 lg:col-span-7">
            <ImageLightbox
              src={INTERVIEW_PHOTO_SRC}
              alt="Collage: Angela facilitating user research—in group sessions, one-on-one interviews, and conversations with participants across ages and contexts."
              className="block w-full"
              disableHoverScale
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <Image
                  src={INTERVIEW_PHOTO_SRC}
                  alt="Collage: Angela facilitating user research—in group sessions, one-on-one interviews, and conversations with participants across ages and contexts."
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </ImageLightbox>
          </figure>
        </div>
      </section>

      <section className="mt-14 border-t border-zinc-800 pt-12">
        <h2
          className="text-lg font-medium text-zinc-200 sm:text-xl"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          How I work
        </h2>
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
        <h2
          className="text-lg font-medium text-zinc-200 sm:text-xl"
          style={{ fontFamily: DISPLAY_FONT }}
        >
          Beyond design
        </h2>
        <div className="mt-6">
          <BeyondDesignGallery
            photography={BEYOND_PHOTOGRAPHY_GALLERY}
            graphic={[]}
          />
        </div>
      </section>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-zinc-800 pt-10">
        <a
          href={RESUME_PDF_SRC}
          download
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-[color:var(--color-cursor-accent)] hover:text-[color:var(--color-cursor-accent)]"
        >
          Download resume
        </a>
        <a
          href="https://linkedin.com/in/angelayangg/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center text-sm font-medium text-zinc-400 transition hover:text-[color:var(--color-cursor-accent)]"
        >
          LinkedIn
        </a>
        <Link
          href="/"
          className="inline-flex min-h-10 items-center text-sm font-medium text-zinc-400 transition hover:text-[color:var(--color-cursor-accent)]"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

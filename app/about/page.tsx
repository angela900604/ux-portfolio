import Link from "next/link";
import Image from "next/image";
import {
  SITE_GUTTER_CLASS,
  SITE_MAX_WIDTH_CLASS,
  SITE_SHELL_CONTAINER,
} from "@/lib/site-shell";
import { BeyondDesignGallery } from "../components/BeyondDesignGallery";
import { FadeInSection } from "../components/FadeInSection";
import { ProjectCardTag } from "../components/ProjectCardTag";
import {
  ADJACENT_WORK,
  ADJACENT_WORK_THUMB,
} from "../content/adjacent-work";
import {
  BEYOND_GRAPHIC_GALLERY,
  BEYOND_PHOTOGRAPHY_GALLERY,
} from "../content/beyond-design-gallery";

const INTERVIEW_PHOTO_SRC = "/about/user-interviews-collage.png";

/** Shared typography for all About page content cards */
const ABOUT_CARD_TITLE_CLASS =
  "text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl";
const ABOUT_CARD_BODY_CLASS =
  "mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Product designer: consumer mobile, multi-role UX across government-scale and B2C, diverse user research. AI-driven consumer products; social platform design. Vancouver.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative border-b border-zinc-800 bg-zinc-950">
        {/* Copy in top-left overlay for readability on image. */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-[3] ${SITE_SHELL_CONTAINER} pt-16 sm:pt-20`}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-200/90">
            About
          </p>
          <h1 className="mt-4 max-w-2xl text-zinc-50">Angela Yang</h1>
          <p className="mt-3 max-w-2xl text-xs font-medium uppercase tracking-widest text-zinc-200/85">
            B2C iOS · AI-driven products · Multi-segment research · Vancouver
            (open to relocate)
          </p>
          <p className="mt-5 max-w-3xl text-base font-medium leading-snug tracking-[-0.015em] text-zinc-50 sm:text-lg md:text-xl">
            Product designer specializing in consumer mobile experiences — I&apos;ve
            shipped complex, multi-role UX across government-scale and B2C
            platforms, with a strong research foundation in diverse user
            segments. I&apos;m now focused on AI-driven consumer products and
            expanding into social platform design.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-200/95 sm:text-lg">
            Based in Vancouver, BC. Open to relocation, remote, or hybrid.
          </p>
        </div>

        {/* Profile photo in normal flow so section grows to full image height (no crop). */}
        <div className="relative z-0" aria-hidden>
          <div className={`mx-auto w-full ${SITE_MAX_WIDTH_CLASS} ${SITE_GUTTER_CLASS}`}>
            <Image
              src="/about/profile-v2.png"
              alt=""
              width={768}
              height={1024}
              priority
              className="block h-auto w-full object-contain"
              sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1480px) calc(100vw - 12.5rem), 1280px"
            />
          </div>
        </div>

        <div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-black via-black/65 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent sm:h-44 md:h-52"
          aria-hidden
        />
      </section>

      <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-24`}>
        <section>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            User interviews
          </span>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="mt-6 min-w-0 lg:col-span-5 flex flex-col gap-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-[1.75rem]">
                The part of the job where I feel most alive.
              </p>
              <p>
                I genuinely love{" "}
                <span className="text-zinc-100">user interviews</span>—from
                teenagers and seniors to foreign-language users and people who
                rely on accessibility settings, across consumer, B2B, and
                government contexts. I listen until motivations and constraints
                surface; that&apos;s where I&apos;m most energized and where the
                best product bets show up.
              </p>
              <p>
                Whether it&apos;s a focus group, a 1:1 usability session, or a
                contextual chat, I care about making participants feel respected
                and heard, then turning what we learn into something the team can
                act on.
              </p>
            </div>
            <figure className="min-w-0 lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <Image
                  src={INTERVIEW_PHOTO_SRC}
                  alt="Collage: Angela facilitating user research—in group sessions, one-on-one interviews, and conversations with participants across ages and contexts."
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            How I work
          </span>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
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
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
              <h3 className={ABOUT_CARD_TITLE_CLASS}>
                PMs, clients &amp; delivery
              </h3>
              <p className={`${ABOUT_CARD_BODY_CLASS} flex-1`}>
                I&apos;m comfortable helping lead a thread: aligning with PMs on
                scope and timeline, clarifying requirements with clients, and
                keeping design decisions legible so the team ships on schedule.
              </p>
            </div>
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
              <h3 className={ABOUT_CARD_TITLE_CLASS}>
                AI-enhanced workflow
              </h3>
              <p className={`${ABOUT_CARD_BODY_CLASS} flex-1`}>
                I constantly test new AI tools (such as Cursor, Claude, and Figma
                AI), not to follow trends, but to identify what genuinely improves
                my workflow and increases delivery efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Beyond design
          </span>
          <div className="mt-6 min-w-0">
            <ul className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {ADJACENT_WORK.map((item, i) => (
                <li key={item.slug} className="h-full min-h-0">
                  <FadeInSection className="h-full" delay={0.04 + i * 0.05}>
                    <Link
                      href={`/case-studies/${item.slug}`}
                      className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)]"
                    >
                      <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900/50">
                        <Image
                          src={ADJACENT_WORK_THUMB[item.slug]}
                          alt={`${item.title} thumbnail`}
                          fill
                          className="object-cover opacity-92 transition duration-500 group-hover:scale-[1.04]"
                          sizes="(max-width: 896px) 100vw, 400px"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <ProjectCardTag>{item.tag}</ProjectCardTag>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-zinc-50 sm:text-2xl">
                          {item.title}
                          <span className="mt-2 block text-sm font-normal text-zinc-400 sm:text-base">
                            {item.outcome}
                          </span>
                        </h3>
                      </div>
                    </Link>
                  </FadeInSection>
                </li>
              ))}
            </ul>
          </div>
          <BeyondDesignGallery
            photography={BEYOND_PHOTOGRAPHY_GALLERY}
            graphic={BEYOND_GRAPHIC_GALLERY}
          />
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/angelayangg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-300 hover:text-zinc-100"
          >
            LinkedIn
          </a>
          <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}

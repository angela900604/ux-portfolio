import Link from "next/link";
import Image from "next/image";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { BeyondDesignGallery } from "../components/BeyondDesignGallery";
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
    "Product Designer: AI-driven B2C mobile & iOS, consumer experiences. MINA AI; Taiwan e-Invoice; Baskin-Robbins. Multi-segment research; B2B/gov as portfolio breadth. Vancouver.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-24`}>
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>
        <h1 className="max-w-2xl">
          Angela Yang
        </h1>
        <p className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-500 max-w-2xl">
          B2C iOS · AI-driven products · Multi-segment research · Vancouver (open
          to relocate)
        </p>

        <section className="mt-10">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <Image
                src="/about/profile-v2.png"
                alt="Angela Yang"
                width={768}
                height={1024}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 512px"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-col gap-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p className="max-w-3xl text-lg font-medium leading-snug tracking-[-0.015em] text-zinc-100 sm:text-xl sm:leading-snug md:text-2xl md:leading-[1.35]">
                Product designer with experience across{" "}
                <span className="font-semibold text-zinc-50">
                  B2C iOS and Android mobile, membership systems, government
                  platforms, AI-driven features, and B2B SaaS,
                </span>{" "}
                spanning early-stage startups and large-scale tech companies.
              </p>
              <p className="font-medium text-zinc-100">
                Currently at MINA AI as a sole designer building an AI-driven
                logistics marketplace product from 0→1, while owning the design
                system and working closely with founders and engineers.
              </p>
              <p>
                Before that, I worked at Turn Cloud in Taiwan on the Taiwan
                e-Invoice app, a nationwide service used by millions, and
                designed internal government dashboards across multi-role
                workflows. I also led design for the Baskin-Robbins Taiwan
                membership platform and worked with stakeholders in Japan.
              </p>
              <p>
                My work centers on{" "}
                <span className="font-semibold text-zinc-50">consumer mobile</span>
                {" "}and{" "}
                <span className="font-semibold text-zinc-50">
                  AI-assisted experiences
                </span>
                ,{" "}
                <span className="font-semibold text-zinc-50">multi-role flows</span>{" "}
                when the product demands them, and design systems that scale.
                I&apos;m especially interested in{" "}
                <span className="font-semibold text-zinc-50">
                  multi-segment user research
                </span>{" "}
                from teens to seniors to internal staff, and how different user
                needs shape product decisions. I work closely with PMs and
                engineers, and I&apos;m comfortable leading projects end-to-end
                in fast-moving environments.
              </p>
              <p>
                Based in Vancouver, BC. Open to relocation, remote, or hybrid.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            User interviews
          </span>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-5 flex flex-col gap-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              <p className="font-medium text-zinc-100">
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
              <figcaption className="mt-3 text-sm leading-relaxed text-zinc-500">
                Field research and sessions across ages, languages, and
                contexts—multi-segment UX, not a single persona repeated.
              </figcaption>
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
          <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2 lg:gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
              <h3 className={ABOUT_CARD_TITLE_CLASS}>
                Graphic design, drawing style exploration
              </h3>
              <p className={ABOUT_CARD_BODY_CLASS}>
                I love work where I can be creative—illustration, graphic design,
                branding, and hands-on DIY.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
              <h3 className={ABOUT_CARD_TITLE_CLASS}>
                Photography &amp; travel
              </h3>
              <p className={ABOUT_CARD_BODY_CLASS}>
                Through travel photography, I capture details from different cities. It is one of my ways to train visual sensitivity and build a more grounded understanding of aesthetics.
              </p>
            </div>
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
          <Link href="/resume" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
            Resume
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-zinc-100">
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}

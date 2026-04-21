import Link from "next/link";
import Image from "next/image";
import {
  SPECIALIZE_PILLARS,
  specializeSectionIntro,
} from "../content/specialize";

function TravelPhotoTile({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 50vw, 320px"
      />
    </div>
  );
}

const INTERVIEW_PHOTO_SRC = "/about/user-interviews-collage.png";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Product designer in Vancouver. B2B and complex systems—CRM, backend and government platforms, multi-role admin UX. Multi-segment research; ownership with engineering, PMs, and clients.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-[100px] py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>
        <h1 className="max-w-2xl">
          Angela Yang
        </h1>
        <p className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-500 max-w-2xl">
          B2B &amp; complex systems · Multi-segment research · Vancouver (open
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
              <p className="font-medium text-zinc-100">
                I specialize in{" "}
                <span className="text-zinc-100">
                  B2B and complex systems product design
                </span>
                —backend platforms, government-scale services, and dense admin UX
                where information architecture, multi-role flows, and edge cases
                matter as much as craft. I pair that with{" "}
                <span className="text-zinc-100">
                  cross-audience research
                </span>{" "}
                and{" "}
                <span className="text-zinc-100">
                  end-to-end ownership
                </span>{" "}
                with engineers, PMs, and clients.
              </p>
              <p>
                Currently a Product Designer at MINA AI (SF, remote), where
                I&apos;m the sole IC designer building a design system from
                scratch and shaping AI-assisted features like Photo-to-Publish and
                Parenting Copilot. I work directly with co-founders and engineers
                to move fast without losing craft.
              </p>
              <p>
                Before that, I spent over a year at Turn Cloud in Taiwan on the
                Taiwan e-Invoice app—a nationwide public service used by millions.
                I redesigned the login flow and raised task success from 68% to
                92%. I also built a 50+ component Figma system, led UX for the
                Baskin-Robbins membership platform, and designed government
                dashboards for staff across roles—always with an eye on how data
                and APIs show up in the UI.
              </p>
              <p>
                I care about research that surfaces the real job to be done,
                systems that keep quality sustainable, and prototypes that align
                engineering and stakeholders. I use tools like Claude, Lovart,
                Framer, and Cursor to close the gap between idea and production.
              </p>
              <p>
                Based in Vancouver, BC. Open to roles where design owns complex
                product surfaces and partners tightly with product and
                engineering—especially enterprise, gov-tech, or multi-sided
                platforms.
              </p>
            </div>
          </div>
        </section>

        <section
          className="mt-14 border-t border-zinc-800 pt-12"
          aria-labelledby="about-specialize-heading"
        >
          <h2
            id="about-specialize-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl md:text-[2rem]"
          >
            What I specialize in
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            {specializeSectionIntro}
          </p>
          <div className="mt-10 space-y-10 max-w-3xl">
            {SPECIALIZE_PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-lg font-semibold text-zinc-100 sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-300 sm:text-lg">
                  {pillar.summary}
                </p>
                {pillar.details.length > 0 ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
                    {pillar.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
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
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            From 0→1 through scale, I turn abstract problems into shippable
            flows—especially when backend logic, permissions, and data models
            drive what the UI can honestly promise. Craft matters, but
            feasibility with engineering is non-negotiable.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                Engineering-led collaboration
              </h5>
              <p className="mt-3 flex-1 text-base leading-relaxed text-zinc-400 sm:text-lg">
                I work very closely with frontend and backend engineers from the
                beginning. During early product phases, I proactively discuss
                implementation feasibility so innovative ideas stay practical and
                buildable.
              </p>
            </div>
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                PMs, clients &amp; delivery
              </h5>
              <p className="mt-3 flex-1 text-base leading-relaxed text-zinc-400 sm:text-lg">
                I&apos;m comfortable helping lead a thread: aligning with PMs on
                scope and timeline, clarifying requirements with clients, and
                keeping design decisions legible so the team ships on schedule.
              </p>
            </div>
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                AI-enhanced workflow
              </h5>
              <p className="mt-3 flex-1 text-base leading-relaxed text-zinc-400 sm:text-lg">
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
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-5">
              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                Outside work, I keep exploring branding, visual style, and photography. Traveling helps me sharpen my aesthetic sense, and this gallery is where I share that perspective.
              </p>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-5">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
                <h5 className="text-zinc-100 normal-case tracking-normal">
                  Branding &amp; style exploration
                </h5>
                <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
                  I enjoy studying the logic behind brands and how visual style creates recognition, trust, and emotional resonance.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-7">
                <h5 className="text-zinc-100 normal-case tracking-normal">
                  Photography &amp; travel
                </h5>
                <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
                  Through travel photography, I capture details from different cities. It is one of my ways to train visual sensitivity and build a more grounded understanding of aesthetics.
                </p>
              </div>
            </div>
          </div>
          {/* Bento-style travel gallery — asymmetric grid + gutters like reference collage */}
          <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:grid-rows-4 lg:gap-3">
            <TravelPhotoTile
              src="/about/travel/hong-kong.png"
              alt="Hong Kong street: double-decker buses and a motion-blurred taxi"
              className="lg:col-span-2 lg:row-span-2 lg:min-h-[min(420px,36vw)]"
            />
            <TravelPhotoTile
              src="/about/travel/budapest.png"
              alt="Budapest Parliament at night reflected on the Danube"
              className="lg:col-span-2 lg:row-span-1 lg:min-h-[min(200px,18vw)]"
            />
            <TravelPhotoTile
              src="/about/travel/hallstatt-mist.png"
              alt="Hallstatt, Austria: lakeside village in mist below the mountains"
              className="lg:col-span-2 lg:row-span-1 lg:min-h-[min(200px,18vw)]"
            />
            <TravelPhotoTile
              src="/about/travel/hallstatt-lake.png"
              alt="Hallstatt lakefront with swans and alpine houses"
              className="lg:col-span-2 lg:row-span-1 lg:min-h-[min(200px,18vw)]"
            />
            <TravelPhotoTile
              src="/about/travel/sf-golden-gate-beach.png"
              alt="Golden Gate Bridge from a rocky beach in San Francisco"
              className="lg:col-span-2 lg:row-span-2 lg:min-h-[min(420px,36vw)]"
            />
            <TravelPhotoTile
              src="/about/travel/sf-cable-car.png"
              alt="San Francisco cable car on California Street"
              className="lg:col-span-1 lg:row-span-1 lg:min-h-[min(200px,18vw)]"
            />
            <TravelPhotoTile
              src="/about/travel/sf-golden-gate-flowers.png"
              alt="Golden Gate Bridge with purple flowers in the foreground"
              className="lg:col-span-1 lg:row-span-1 lg:min-h-[min(200px,18vw)]"
            />
          </div>
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

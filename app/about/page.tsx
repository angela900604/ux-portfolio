import Link from "next/link";
import Image from "next/image";
import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { SPECIALIZE_PILLARS } from "../content/specialize";

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
      className={`relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, (max-width: 1480px) 50vw, 320px"
      />
    </div>
  );
}

const INTERVIEW_PHOTO_SRC = "/about/user-interviews-collage.png";

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Product Designer: AI-driven B2C mobile & iOS, consumer experiences. MINA AI; Taiwan e-Invoice; Baskin-Robbins. Multi-segment research; B2B/gov as portfolio breadth. Vancouver.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F0EDE6]">
      <div className={`${SITE_SHELL_CONTAINER} py-16 sm:py-24`}>
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#888580]">
          About
        </p>
        <h1 className="max-w-2xl font-[family-name:var(--font-serif-display)] text-[clamp(2.5rem,5vw,3.75rem)] font-normal leading-[1.05] tracking-[-0.03em]">
          Angela Yang
        </h1>
        <p className="mt-3 max-w-2xl text-xs font-medium uppercase tracking-widest text-[#888580]">
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

            <div className="flex min-w-0 flex-col gap-5 text-base leading-relaxed text-[#C9C4BC] sm:text-lg">
              <p className="font-medium text-[#F0EDE6]">
                Product designer with experience across{" "}
                <span className="text-[#F0EDE6]">
                  B2C iOS and Android mobile, membership systems, government
                  platforms, AI-driven features, and B2B SaaS,
                </span>{" "}
                spanning early-stage startups and large-scale tech companies.
              </p>
              <p className="font-medium text-[#F0EDE6]">
                Currently at MINA AI as a sole designer building AI-driven
                logistic marketplace product from 0→1, while owning the design
                system and working closely with founders and engineers.
              </p>
              <p>
                Before that, I worked at Turn Cloud in Taiwan on the Taiwan
                e-Invoice app, a nationwide service used by millions, and
                designed internal government dashboards across multi-role
                workflows. I also led design for the Taiwan&apos;s Baskin-Robbins
                membership platform and worked with stakeholders in Japan.
              </p>
              <p>
                My work centers on{" "}
                <span className="text-[#F0EDE6]">consumer mobile</span> and{" "}
                <span className="text-[#F0EDE6]">AI-assisted experiences</span>,{" "}
                <span className="text-[#F0EDE6]">multi-role flows</span> when the
                product demands them, and design systems that scale. I&apos;m
                especially interested in{" "}
                <span className="text-[#F0EDE6]">multi-segment user research</span>{" "}
                from teens to seniors to internal staff, and how different user
                needs shape product decisions. I work closely with PMs and
                engineers, and I&apos;m comfortable leading projects end-to-end in
                fast-moving environments.
              </p>
              <p>
                Based in Vancouver, BC. Open to relocation, remote, or hybrid.
              </p>
            </div>
          </div>
        </section>

        <section
          className="mt-14 border-t border-[rgba(255,255,255,0.08)] pt-12"
          aria-labelledby="about-specialize-heading"
        >
          <h2
            id="about-specialize-heading"
            className="text-2xl font-semibold tracking-tight text-[#F0EDE6] sm:text-3xl md:text-[2rem]"
          >
            What I specialize in
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {SPECIALIZE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="flex min-h-0 flex-col rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] p-6 sm:p-7"
              >
                <h3 className="text-base font-semibold tracking-tight text-[#F0EDE6] sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#888580] sm:text-base">
                  {pillar.aboutShort}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-[rgba(255,255,255,0.08)] pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-[#F0EDE6]0">
            User interviews
          </span>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-5 flex flex-col gap-4 text-base leading-relaxed text-[#C9C4BC] sm:text-lg">
              <p className="font-medium text-[#F0EDE6]">
                The part of the job where I feel most alive.
              </p>
              <p>
                I genuinely love{" "}
                <span className="text-[#F0EDE6]">user interviews</span>—from
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
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616]">
                <Image
                  src={INTERVIEW_PHOTO_SRC}
                  alt="Collage: Angela facilitating user research—in group sessions, one-on-one interviews, and conversations with participants across ages and contexts."
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-[#F0EDE6]0">
                Field research and sessions across ages, languages, and
                contexts—multi-segment UX, not a single persona repeated.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mt-14 border-t border-[rgba(255,255,255,0.08)] pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-[#F0EDE6]0">
            How I work
          </span>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] p-6 sm:p-7">
              <h5 className="text-[#F0EDE6] normal-case tracking-normal">
                Engineering-led collaboration
              </h5>
              <p className="mt-3 flex-1 text-base leading-relaxed text-[#888580] sm:text-lg">
                I work very closely with frontend and backend engineers from the
                beginning. During early product phases, I proactively discuss
                implementation feasibility so innovative ideas stay practical and
                buildable.
              </p>
            </div>
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] p-6 sm:p-7">
              <h5 className="text-[#F0EDE6] normal-case tracking-normal">
                PMs, clients &amp; delivery
              </h5>
              <p className="mt-3 flex-1 text-base leading-relaxed text-[#888580] sm:text-lg">
                I&apos;m comfortable helping lead a thread: aligning with PMs on
                scope and timeline, clarifying requirements with clients, and
                keeping design decisions legible so the team ships on schedule.
              </p>
            </div>
            <div className="flex h-full min-w-0 flex-col rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] p-6 sm:p-7">
              <h5 className="text-[#F0EDE6] normal-case tracking-normal">
                AI-enhanced workflow
              </h5>
              <p className="mt-3 flex-1 text-base leading-relaxed text-[#888580] sm:text-lg">
                I constantly test new AI tools (such as Cursor, Claude, and Figma
                AI), not to follow trends, but to identify what genuinely improves
                my workflow and increases delivery efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-[rgba(255,255,255,0.08)] pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-[#F0EDE6]0">
            Beyond design
          </span>
          <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2 lg:gap-6">
            <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] p-6 sm:p-7">
              <h5 className="text-[#F0EDE6] normal-case tracking-normal">
                Branding &amp; style exploration
              </h5>
              <p className="mt-3 text-base leading-relaxed text-[#888580] sm:text-lg">
                I enjoy studying the logic behind brands and how visual style creates recognition, trust, and emotional resonance.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#161616] p-6 sm:p-7">
              <h5 className="text-[#F0EDE6] normal-case tracking-normal">
                Photography &amp; travel
              </h5>
              <p className="mt-3 text-base leading-relaxed text-[#888580] sm:text-lg">
                Through travel photography, I capture details from different cities. It is one of my ways to train visual sensitivity and build a more grounded understanding of aesthetics.
              </p>
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
            className="text-sm font-medium text-[#C9C4BC] hover:text-[#F0EDE6]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:angela900604@gmail.com?subject=Resume%20request"
            className="text-sm font-medium text-[#C9C4BC] hover:text-[#F0EDE6]"
          >
            Resume (email)
          </a>
          <Link href="/" className="text-sm font-medium text-[#C9C4BC] hover:text-[#F0EDE6]">
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}

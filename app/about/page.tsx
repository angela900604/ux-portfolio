import Link from "next/link";
import Image from "next/image";

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
        sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 320px"
      />
    </div>
  );
}

export const metadata = {
  title: "About | Angela Yang",
  description:
    "Product designer at MINA AI, based in Vancouver. End-to-end ownership, design systems, AI-assisted product, and measurable outcomes.",
};

export default function AboutPage() {
  return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>
        <h1 className="max-w-2xl">
          Angela Yang
        </h1>
        <p className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-500 max-w-2xl">
          Product design · Vancouver (open to relocate)
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
                I design products that actually ship — and measure whether they
                work.
              </p>
              <p>
                Currently a Product Designer at MINA AI (SF, remote), where
                I&apos;m the sole IC designer building a design system from
                scratch and shaping AI-assisted features like Photo-to-Publish and
                Parenting Copilot. I work directly with co-founders and engineers
                to move fast without losing craft.
              </p>
              <p>
                Before that, I spent over a year at Turn Cloud in Taiwan working
                on the Taiwan Ministry Invoice App — a nationwide public service
                used by millions. I redesigned the login flow and took the success
                rate from 68% to 92%. I also built a 50+ component Figma design
                system, led UX for the Baskin-Robbins membership platform, and
                designed government dashboards that had to work for everyone
                from teenagers to seniors to visually impaired users.
              </p>
              <p>
                I care about the full picture: the research that uncovers the real
                job to be done, the Figma system that makes consistency
                sustainable, and the vibe-coded prototype that gets engineers and
                stakeholders aligned fast. I use tools like Claude, Lovart,
                Framer, and Cursor to close the gap between idea and production.
              </p>
              <p>
                Currently based in Vancouver, BC. Open to IC roles at
                early-stage SaaS startups — especially teams building complex,
                meaningful products where design has a real seat at the table.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            How I work
          </span>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I specialize in navigating the 0→1 product journey, turning abstract
            ideas into high-fidelity, shippable experiences. My approach blends
            aesthetic precision with a deep understanding of backend logic and
            technical constraints, ensuring that innovation never comes at the
            cost of feasibility.
          </p>
          <div className="mt-8 flex max-w-3xl flex-col gap-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                Engineering-led collaboration
              </h5>
              <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
                I work very closely with frontend and backend engineers from the
                beginning. During early product phases, I proactively discuss
                implementation feasibility so innovative ideas stay practical and
                buildable.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                Stakeholder alignment
              </h5>
              <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
                I partner directly with product/project managers, clients, and
                other stakeholders to translate requirements into clear design
                decisions that balance business goals with technical constraints.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                AI-enhanced workflow
              </h5>
              <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
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
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Outside work, I keep exploring branding, visual style, and photography. Traveling helps me sharpen my aesthetic sense, and this gallery is where I share that perspective.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-3xl">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                Branding &amp; style exploration
              </h5>
              <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
                I enjoy studying the logic behind brands and how visual style creates recognition, trust, and emotional resonance.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h5 className="text-zinc-100 normal-case tracking-normal">
                Photography &amp; travel
              </h5>
              <p className="mt-3 text-base leading-relaxed text-zinc-400 sm:text-lg">
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

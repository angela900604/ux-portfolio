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
    "Independent UI/UX designer in Vancouver focused on end-to-end ownership, 0→1 product building, and engineering-led collaboration.",
};

export default function AboutPage() {
  return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-[100px] py-16 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl max-w-2xl">
          Angela Yang
        </h1>
        <p className="mt-3 text-zinc-400 max-w-2xl">
          Independent UI/UX Designer · Vancouver
        </p>

        {/* Profile visual */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <Image
              src="/about/profile-v2.png"
              alt="Angela Yang"
              width={768}
              height={1024}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 512px"
              priority
            />
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              How I work
            </span>
            <p className="mt-3 text-zinc-300 leading-relaxed max-w-2xl text-[15px] sm:text-base">
              I usually own UI/UX work independently within projects, especially in 0→1 product stages. Beyond crafting screens, I focus on turning ambiguous requirements into experiences that can actually ship.
            </p>
          </div>
        </div>

        <section className="mt-14 border-t border-zinc-800 pt-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Engineering-led collaboration
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                I work very closely with frontend and backend engineers from the beginning. During early product phases, I proactively discuss implementation feasibility so innovative ideas stay practical and buildable.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Stakeholder alignment
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                I partner directly with product/project managers, clients, and other stakeholders to translate requirements into clear design decisions that balance business goals with technical constraints.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                AI-enhanced workflow
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                I constantly test new AI tools (such as Cursor, Claude, and Figma AI), not to follow trends, but to identify what genuinely improves my workflow and increases delivery efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Beyond design
          </span>
          <p className="mt-3 text-zinc-300 leading-relaxed max-w-2xl text-[15px] sm:text-base">
            Outside work, I keep exploring branding, visual style, and photography. Traveling helps me sharpen my aesthetic sense, and this gallery is where I share that perspective.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-3xl">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Branding &amp; style exploration
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                I enjoy studying the logic behind brands and how visual style creates recognition, trust, and emotional resonance.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Photography &amp; travel
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
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

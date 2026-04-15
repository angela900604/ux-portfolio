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
    "Product designer in Vancouver—0→1 products, engineering collaboration, stakeholder alignment, and an AI-enhanced workflow.",
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
          產品設計師 · Vancouver
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
              我擅長參與產品從 0 到 1 的過程。比起單純畫圖，我更享受作為團隊的橋樑，將模糊的需求轉化為可落地的體驗。
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
                我習慣與前後端工程師緊密協作，在產品初期就深入探討技術可行性，確保創新想法與實踐開發達成平衡。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Stakeholder alignment
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                我能直接面對 PM、客戶與利害關係人，精準對接業務需求與技術限制。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                AI-enhanced workflow
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                我積極測試各類 AI 工具（如 Cursor、Claude、Figma AI），不為追隨潮流，而是為了找出能真正優化工作流、提升產出效率的最佳路徑。
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-800 pt-12">
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Beyond design
          </span>
          <p className="mt-3 text-zinc-300 leading-relaxed max-w-2xl text-[15px] sm:text-base">
            工作之外，我的靈感來自於對視覺與品味的持續探索。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-3xl">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Branding &amp; Esthetics
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                喜歡研究品牌背後的邏輯與視覺風格。
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="text-sm font-semibold text-zinc-100">
                Photography &amp; travel
              </h3>
              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                透過旅遊與攝影捕捉不同城市的細節，這是我提升審美敏銳度的方式，也讓我對「美」的理解更具實感。
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

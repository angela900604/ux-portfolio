import type { Metadata } from "next";
import { HomeSelectedWorkSection } from "./HomeSelectedWorkSection";

export const metadata: Metadata = {
  title: "Angela Yang",
  description:
    "Marketing designer turning brand into measurable growth — and operations that actually ship. Precise Pipe, MINA AI, and Haphy Living.",
};

export default function HomePage() {
  return (
    <div className="pb-12 font-sans">
      <p className="sr-only">
        Angela Yang — marketing designer turning brand into measurable growth,
        and operations that actually ship. Open to Marketing, Product, and
        Operations roles in Burnaby, Vancouver, and New Westminster.
      </p>

      <div className="mb-8 max-w-3xl space-y-3 sm:mb-10">
        <p className="text-[15px] font-normal leading-[1.65] text-zinc-400">
          Marketing Design &amp; Operations at Precise Pipe · Previously
          Product Designer at MINA AI, TurnCloud, YK Labs · I also run Haphy
          Living, my own pet-lifestyle brand.
        </p>
        <p className="text-[15px] font-normal leading-[1.65] text-zinc-300">
          Open to Marketing / Product / Operations roles in Burnaby, Vancouver
          &amp; New Westminster
        </p>
      </div>

      <HomeSelectedWorkSection />
    </div>
  );
}

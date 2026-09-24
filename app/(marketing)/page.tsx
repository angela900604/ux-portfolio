import type { Metadata } from "next";
import { HomePortfolioAgent } from "./HomePortfolioAgent";
import { HomeSelectedWorkSection } from "./HomeSelectedWorkSection";

export const metadata: Metadata = {
  title: "Angela Yang",
  description:
    "Marketing designer turning brand into measurable growth. Brand identity, content, and product—Precise Pipe, MINA AI, and Haphy Living.",
};

export default function HomePage() {
  return (
    <div className="pb-12 font-sans">
      <p className="sr-only">
        Angela Yang — marketing designer turning brand into measurable growth,
        Vancouver
      </p>

      <p className="mb-8 max-w-3xl text-[15px] font-normal leading-[1.65] text-zinc-400 sm:mb-10">
        Currently Marketing Creative Design &amp; Operations at Precise Pipe ·
        Previously Product Designer at MINA AI, TurnCloud, YK Labs · I also run
        Haphy Living, my own pet-lifestyle brand.
      </p>

      <HomePortfolioAgent />

      <HomeSelectedWorkSection />
    </div>
  );
}

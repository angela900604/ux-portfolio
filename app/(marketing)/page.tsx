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
        and operations that actually ship.
      </p>

      <HomeSelectedWorkSection />
    </div>
  );
}

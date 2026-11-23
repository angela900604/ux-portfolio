import type { Metadata } from "next";
import { HomeSelectedWorkSection } from "./HomeSelectedWorkSection";

export const metadata: Metadata = {
  title: "Angela Yang",
  description:
    "Marketing designer in Vancouver. Precise Pipe, MINA AI, and Haphy Living.",
};

export default function HomePage() {
  return (
    <div className="pb-12 font-sans">
      <HomeSelectedWorkSection />
    </div>
  );
}

import type { Metadata } from "next";
import { HomeLeadByFocus } from "./HomeLeadByFocus";
import { HomeSelectedWorkSection } from "./HomeSelectedWorkSection";

export const metadata: Metadata = {
  title: "Angela Yang",
  description:
    "Product designer: government-scale digital services (Taiwan), AI products (Vancouver). Research, systems, ship-ready UX—selected work and about.",
};

export default function HomePage() {
  return (
    <div className="pb-12 font-sans">
      <p className="sr-only">Angela Yang — product designer, Vancouver</p>

      <HomeLeadByFocus />

      <HomeSelectedWorkSection />
    </div>
  );
}

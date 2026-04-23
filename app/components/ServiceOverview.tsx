import { SITE_SHELL_CONTAINER } from "@/lib/site-shell";
import { FadeInSection } from "./FadeInSection";

const SERVICES = [
  {
    icon: "📱",
    title: "Mobile App Design",
    description:
      "Designing end-to-end mobile app experiences — from user flows to high-fidelity UI.",
  },
  {
    icon: "💻",
    title: "Web & SaaS Product Design",
    description:
      "Designing responsive web platforms and complex SaaS tools for real-world use.",
  },
  {
    icon: "🧠",
    title: "UX Strategy & User Flows",
    description:
      "Structuring user journeys, information architecture, and interaction logic.",
  },
  {
    icon: "🔄",
    title: "Product Redesign & Optimization",
    description:
      "Improving existing products through usability and performance enhancements.",
  },
  {
    icon: "🤖",
    title: "AI Product Experience Design",
    description:
      "Designing AI-driven features like copilots, automation flows, and smart interactions.",
  },
  {
    icon: "🎨",
    title: "UI Design & Design Systems",
    description:
      "Creating clean, scalable visual systems for consistent product experiences.",
  },
] as const;

export function ServiceOverview() {
  return (
    <section
      className="border-b border-zinc-800"
      aria-labelledby="service-overview-heading"
    >
      <div className={`${SITE_SHELL_CONTAINER} py-12 sm:py-16`}>
        <FadeInSection>
          <h2
            id="service-overview-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl md:text-[2rem]"
          >
            Service overview
          </h2>
        </FadeInSection>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((item, i) => (
            <li key={item.title} className="h-full min-h-0">
              <FadeInSection className="h-full" delay={0.05 + i * 0.06}>
                <div className="flex h-full min-h-0 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
                    <span className="mr-2" aria-hidden>
                      {item.icon}
                    </span>
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-zinc-300 sm:text-lg">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

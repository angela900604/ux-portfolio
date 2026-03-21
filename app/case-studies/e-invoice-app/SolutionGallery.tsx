import Image from "next/image";

export type SolutionItem = {
  src: string;
  alt: string;
  label: string;
};

/**
 * Four equal columns: edge-to-edge mockups (no padded “frame”), labels below.
 */
export default function SolutionGallery({ items }: { items: SolutionItem[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.src + item.label} className="flex min-w-0 flex-col">
          <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-zinc-950">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-2 text-[11px] leading-snug text-zinc-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

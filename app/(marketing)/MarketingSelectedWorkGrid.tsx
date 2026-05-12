"use client";

import Image from "next/image";
import Link from "next/link";
import { EInvoiceHomeProjectCover } from "@/app/components/EInvoiceHomeProjectCover";
import { MinaHomeProjectCover } from "@/app/components/MinaHomeProjectCover";
import {
  ProjectCardTag,
  ProjectShippedBadge,
  ProjectTechHighlights,
} from "@/app/components/ProjectCardTag";
import { FadeInSection } from "@/app/components/FadeInSection";
import type { MarketingWorkItem } from "@/lib/marketing-work";

function CoverMedia({ item }: { item: MarketingWorkItem }) {
  const c = item.cover;
  if (c.kind === "e-invoice") return <EInvoiceHomeProjectCover />;
  if (c.kind === "mina") return <MinaHomeProjectCover />;
  return (
    <Image
      src={c.src}
      alt=""
      fill
      unoptimized={item.coverUnoptimized === true}
      className="object-cover opacity-92 transition duration-500 group-hover:scale-[1.04]"
      sizes="(max-width: 639px) 100vw, (max-width: 1480px) 50vw, 720px"
    />
  );
}

export function MarketingSelectedWorkGrid({
  items,
}: {
  items: readonly MarketingWorkItem[];
}) {
  return (
    <ul className="mt-10 grid grid-cols-1 items-stretch gap-8 font-sans sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.slug} className="h-full min-h-0">
          <FadeInSection className="h-full" delay={0.05 + i * 0.05}>
            <div className="group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.75)]">
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900/50">
                <Link
                  href={item.href}
                  className="absolute inset-0 block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  aria-label={`Open case study: ${item.title}`}
                >
                  <CoverMedia item={item} />
                </Link>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
              <Link
                href={item.href}
                className="flex flex-1 flex-col p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <ProjectCardTag>{item.discipline}</ProjectCardTag>
                  {item.showShipped ? <ProjectShippedBadge /> : null}
                </div>
                <ProjectTechHighlights>{item.techHighlights}</ProjectTechHighlights>
                <h3 className="mt-3 font-sans text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-zinc-50 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-600">{item.year}</p>
              </Link>
            </div>
          </FadeInSection>
        </li>
      ))}
    </ul>
  );
}

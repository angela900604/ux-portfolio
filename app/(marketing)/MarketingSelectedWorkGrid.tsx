"use client";

import Image from "next/image";
import Link from "next/link";
import { EInvoiceHomeProjectCover } from "@/app/components/EInvoiceHomeProjectCover";
import { MinaHomeProjectCover } from "@/app/components/MinaHomeProjectCover";
import { HomeProjectCategoryBadge } from "@/app/components/ProjectCardTag";
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
      className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
      sizes="(max-width: 639px) 100vw, (max-width: 1480px) 100vw, 960px"
    />
  );
}

function homeCategoryLabel(item: MarketingWorkItem): string {
  if (item.showShipped) return "Shipped product";
  return item.portfolioFocus === "product" ? "Product design" : "Marketing design";
}

export function MarketingSelectedWorkGrid({
  items,
}: {
  items: readonly MarketingWorkItem[];
}) {
  return (
    <ul className="mt-10 flex flex-col gap-16 font-sans sm:gap-24">
      {items.map((item, i) => (
        <li key={item.slug}>
          <FadeInSection delay={0.05 + i * 0.05}>
            <Link href={item.href} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900/50">
                <CoverMedia item={item} />
              </div>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
                <div className="max-w-2xl">
                  <div className="mb-3">
                    <HomeProjectCategoryBadge>
                      {homeCategoryLabel(item)}
                    </HomeProjectCategoryBadge>
                  </div>

                  <h3 className="font-sans text-[22px] font-medium leading-[1.3] tracking-tight text-zinc-100 transition-colors group-hover:text-zinc-400 sm:text-[26px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] font-normal leading-[1.65] text-zinc-400">
                    {item.description}
                  </p>
                </div>

                <p className="shrink-0 text-[12px] font-normal uppercase tracking-[0.16em] text-zinc-100 transition-colors group-hover:text-zinc-400 md:pb-1">
                  Read case study{" "}
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          </FadeInSection>
        </li>
      ))}
    </ul>
  );
}

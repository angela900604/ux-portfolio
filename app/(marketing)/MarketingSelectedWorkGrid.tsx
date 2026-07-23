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
      sizes="(max-width: 639px) 100vw, (max-width: 1480px) 50vw, 720px"
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
    <ul className="mt-10 grid grid-cols-1 items-stretch gap-x-8 gap-y-16 font-sans sm:grid-cols-2 sm:gap-y-20">
      {items.map((item, i) => (
        <li key={item.slug} className="min-h-0">
          <FadeInSection className="h-full" delay={0.05 + i * 0.05}>
            <Link href={item.href} className="group flex h-full flex-col">
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900/50">
                <CoverMedia item={item} />
              </div>

              <div className="mt-5 flex flex-1 flex-col sm:mt-6">
                <div className="mb-3">
                  <HomeProjectCategoryBadge>
                    {homeCategoryLabel(item)}
                  </HomeProjectCategoryBadge>
                </div>

                <h3 className="font-sans text-[20px] font-medium leading-[1.3] tracking-tight text-zinc-100 transition-colors group-hover:text-zinc-400 sm:text-[22px]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] font-normal leading-[1.65] text-zinc-400">
                  {item.description}
                </p>

                <p className="mt-4 text-[12px] font-normal uppercase tracking-[0.16em] text-zinc-100 transition-colors group-hover:text-zinc-400">
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

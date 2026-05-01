"use client";

import Image from "next/image";
import { ImageLightbox } from "@/app/components/ImageLightbox";

const ROLE_CHART_SRC = `/case-studies/government-backend/${encodeURIComponent("role chart.png")}`;

const ROLE_CHART_ALT =
  "Role-based access chart: main functions, sub-functions, and permissions by Center, NTA HQ, NTA branches and offices, Printing, and Tax administration";

export function GovernmentBackendRoleChartLightbox() {
  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/30">
      <ImageLightbox
        src={ROLE_CHART_SRC}
        alt={ROLE_CHART_ALT}
        className="block w-full"
        disableHoverScale
      >
        <Image
          src={ROLE_CHART_SRC}
          alt={ROLE_CHART_ALT}
          width={3949}
          height={1471}
          className="h-auto w-full max-w-full object-contain"
          unoptimized
          sizes="(max-width: 1480px) 100vw, 1200px"
        />
      </ImageLightbox>
    </div>
  );
}

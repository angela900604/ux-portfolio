import Image from "next/image";
import type { ReactNode } from "react";
import {
  CASE_STUDY_BODY_GRID,
  SITE_GUTTER_CLASS,
  SITE_MAX_WIDTH_CLASS,
  SITE_SHELL_CONTAINER,
} from "@/lib/site-shell";

/**
 * Overlay / below-meta title band: left edge matches narrative column; reserves
 * TOC track so title aligns with body h1 column.
 */
function HeroTitleInGrid({ children }: { children: ReactNode }) {
  return (
    <div className={CASE_STUDY_BODY_GRID}>
      <div className="case-study-prose min-w-0 w-full max-w-6xl overflow-x-hidden">
        {children}
      </div>
      <aside className="hidden min-w-0 lg:block" aria-hidden />
    </div>
  );
}

/**
 * Below-fold hero block (at-a-glance, scan summary, etc.): spans main + gap + TOC
 * column so right edge lines up with the sticky sidebar below.
 */
function HeroBelowFoldFullGrid({ children }: { children: ReactNode }) {
  return (
    <div className={CASE_STUDY_BODY_GRID}>
      <div className="min-w-0 lg:col-span-2">{children}</div>
    </div>
  );
}

type Props = {
  imageSrc: string;
  imageAlt: string;
  /** Tailwind classes for object-fit / position (default center cover). */
  imageClassName?: string;
  priority?: boolean;
  /**
   * `overlay` — title on the image with dark scrim (default).
   * `below-meta` — title on light band, then children (e.g. Role / Location / Timeline), then hero image.
   */
  imagePlacement?: "overlay" | "below-meta";
  /**
   * When `imagePlacement` is `below-meta`: `fullBleedCover` fills ~80–90vh (may crop).
   * `contain` keeps aspect ratio inside a max width/height (no stretch / crop).
   */
  belowMetaImageMode?: "fullBleedCover" | "contain";
  /** Intrinsic size for `contain` mode (used by next/image width/height). */
  belowMetaIntrinsicWidth?: number;
  belowMetaIntrinsicHeight?: number;
  /** Small caps line(s) above the title — e.g. Case Study · tags */
  eyebrow: ReactNode;
  /** Main project title — use <h1 className="...">…</h1> with white text classes. */
  title: ReactNode;
  /** Optional lead line under the title. */
  subtitle?: ReactNode;
  /** Everything below the fold: meta, at-a-glance, etc. */
  children?: ReactNode;
};

/** Below-meta hero strip: same width/height math as Haphy Living (1024×571 artwork at full bleed). */
const BELOW_META_HERO_INNER =
  "relative w-full h-[clamp(18rem,min(90vh,56rem,calc(100vw*571/1024)),56rem)]";

function FullBleedImageOnly({
  imageSrc,
  imageAlt,
  imageClassName,
  priority,
}: Pick<Props, "imageSrc" | "imageAlt" | "imageClassName" | "priority">) {
  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
      <div className={BELOW_META_HERO_INNER}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className={imageClassName}
          sizes="100vw"
        />
      </div>
    </div>
  );
}

function BelowMetaImageContained({
  imageSrc,
  imageAlt,
  priority,
  width,
  height,
}: {
  imageSrc: string;
  imageAlt: string;
  priority: boolean;
  width: number;
  height: number;
}) {
  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-[#F5F3EF]">
      <div className={`${SITE_SHELL_CONTAINER} py-10 sm:py-12`}>
        <HeroBelowFoldFullGrid>
          <div className="flex justify-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={width}
              height={height}
              priority={priority}
              className="h-auto max-h-[min(85vh,48rem)] w-auto max-w-full object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </HeroBelowFoldFullGrid>
      </div>
    </div>
  );
}

/**
 * 100vw full-bleed first screen (~80–90vh) with title in large white type on a dark gradient,
 * or (below-meta) title on a light band, meta, then image only.
 */
export function CaseStudyHeroFullBleed({
  imageSrc,
  imageAlt,
  imageClassName = "object-cover object-center",
  priority = true,
  imagePlacement = "overlay",
  belowMetaImageMode = "fullBleedCover",
  belowMetaIntrinsicWidth = 1024,
  belowMetaIntrinsicHeight = 768,
  eyebrow,
  title,
  subtitle,
  children,
}: Props) {
  if (imagePlacement === "below-meta") {
    return (
      <>
        <div className={`${SITE_SHELL_CONTAINER} pt-14 pb-6 sm:pt-20 sm:pb-8`}>
          <HeroTitleInGrid>
            {eyebrow}
            {title}
            {subtitle ? <div className="mt-5 max-w-3xl">{subtitle}</div> : null}
          </HeroTitleInGrid>
        </div>
        {children ? (
          <div className={`${SITE_SHELL_CONTAINER} pb-10 sm:pb-12`}>
            <HeroBelowFoldFullGrid>{children}</HeroBelowFoldFullGrid>
          </div>
        ) : null}
        {belowMetaImageMode === "contain" ? (
          <BelowMetaImageContained
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            priority={priority}
            width={belowMetaIntrinsicWidth}
            height={belowMetaIntrinsicHeight}
          />
        ) : (
          <FullBleedImageOnly
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            imageClassName={imageClassName}
            priority={priority}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
        <div className="relative h-[min(90vh,56rem)] min-h-[80vh] w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            className={imageClassName}
            sizes="100vw"
          />
          {/* Base dim + bottom-heavy gradient so titles stay readable on bright photos */}
          <div className="absolute inset-0 bg-black/35" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/82 to-zinc-950/55"
            aria-hidden
          />
          <div
            className={`absolute inset-0 flex flex-col justify-end ${SITE_GUTTER_CLASS} pb-14 pt-28 sm:pb-20 sm:pt-36`}
          >
            <div className={`mx-auto w-full ${SITE_MAX_WIDTH_CLASS}`}>
              <HeroTitleInGrid>
                {eyebrow}
                {title}
                {subtitle ? (
                  <div className="mt-5 max-w-3xl">{subtitle}</div>
                ) : null}
              </HeroTitleInGrid>
            </div>
          </div>
        </div>
      </div>
      {children ? (
        <div className={`${SITE_SHELL_CONTAINER} py-12 sm:py-16`}>
          <HeroBelowFoldFullGrid>{children}</HeroBelowFoldFullGrid>
        </div>
      ) : null}
    </>
  );
}

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Tailwind max-height for the scroll container (default tall docs). */
  maxHeightClass?: string;
  /** Optional classes on the image (e.g. narrow docs: mx-auto max-w-md). */
  imageClassName?: string;
};

/**
 * Long documentation screenshots sit in a capped-height frame with vertical scroll
 * so the case study page doesn’t grow unbounded.
 */
export function ScrollableDocFrame({
  src,
  alt,
  width,
  height,
  maxHeightClass = "max-h-[min(88vh,56rem)]",
  imageClassName = "",
}: Props) {
  return (
    <figure className="my-0">
      <div
        className={`overflow-y-auto overflow-x-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] ${maxHeightClass}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`h-auto w-full max-w-full ${imageClassName}`.trim()}
          sizes="(max-width: 768px) 100vw, min(72rem, 100vw)"
        />
      </div>
    </figure>
  );
}

export type BeyondGalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** lg+ bento placement — mirrors travel collage grid */
  gridClass: string;
};

/** Photography & travel — same assets + layout as the original Beyond design travel grid */
export const BEYOND_PHOTOGRAPHY_GALLERY: BeyondGalleryItem[] = [
  {
    src: "/about/travel/hong-kong.png",
    alt: "Hong Kong street: double-decker buses and a motion-blurred taxi",
    width: 1024,
    height: 768,
    gridClass: "lg:col-span-2 lg:row-span-2 lg:min-h-[min(420px,36vw)]",
  },
  {
    src: "/about/travel/budapest.png",
    alt: "Budapest Parliament at night reflected on the Danube",
    width: 1024,
    height: 768,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(200px,18vw)]",
  },
  {
    src: "/about/travel/hallstatt-mist.png",
    alt: "Hallstatt, Austria: lakeside village in mist below the mountains",
    width: 1024,
    height: 768,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(200px,18vw)]",
  },
  {
    src: "/about/travel/hallstatt-lake.png",
    alt: "Hallstatt lakefront with swans and alpine houses",
    width: 1024,
    height: 768,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(200px,18vw)]",
  },
  {
    src: "/about/travel/sf-golden-gate-beach.png",
    alt: "Golden Gate Bridge from a rocky beach in San Francisco",
    width: 767,
    height: 1024,
    gridClass: "lg:col-span-2 lg:row-span-2 lg:min-h-[min(420px,36vw)]",
  },
  {
    src: "/about/travel/sf-cable-car.png",
    alt: "San Francisco cable car on California Street",
    width: 767,
    height: 1024,
    gridClass: "lg:col-span-1 lg:row-span-1 lg:min-h-[min(200px,18vw)]",
  },
  {
    src: "/about/travel/sf-golden-gate-flowers.png",
    alt: "Golden Gate Bridge with purple flowers in the foreground",
    width: 767,
    height: 1024,
    gridClass: "lg:col-span-1 lg:row-span-1 lg:min-h-[min(200px,18vw)]",
  },
];

/** Graphic design & illustration — aspect-aware bento on large screens */
export const BEYOND_GRAPHIC_GALLERY: BeyondGalleryItem[] = [
  {
    src: "/about/beyond-design/graphic/12.png",
    alt: "Flat vector city illustration: parliament and bridge at sunset",
    width: 1024,
    height: 1024,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(220px,18vw)]",
  },
  {
    src: "/about/beyond-design/graphic/13.png",
    alt: "Flat illustration: Taipei skyline and hills at sunset",
    width: 1024,
    height: 768,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(200px,18vw)]",
  },
  {
    src: "/about/beyond-design/graphic/02.png",
    alt: "Double-exposure style portrait: city avenue inside a silhouetted profile",
    width: 997,
    height: 997,
    gridClass: "lg:col-span-2 lg:row-span-2 lg:min-h-[min(420px,36vw)]",
  },
  {
    src: "/about/beyond-design/graphic/03.png",
    alt: "3D-style icon: minimalist turntable on a rounded square",
    width: 1000,
    height: 1000,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(220px,18vw)]",
  },
  {
    src: "/about/beyond-design/graphic/04.png",
    alt: "Mobile UI concept: BakeConnect splash and profile screens with palette",
    width: 511,
    height: 416,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(260px,24vw)]",
  },
  {
    src: "/about/beyond-design/graphic/08.png",
    alt: "Digital illustration in progress on tablet: stylized puppy portrait",
    width: 575,
    height: 1024,
    gridClass: "lg:col-span-2 lg:row-span-2 lg:min-h-[min(420px,36vw)]",
  },
  {
    src: "/about/beyond-design/graphic/09.png",
    alt: "Drawing on tablet: cute cat character with color panels visible",
    width: 575,
    height: 1024,
    gridClass: "lg:col-span-2 lg:row-span-1 lg:min-h-[min(240px,20vw)]",
  },
  {
    src: "/about/beyond-design/graphic/10.png",
    alt: "Tablet painting: fluffy long-haired cat portrait",
    width: 575,
    height: 1024,
    gridClass: "lg:col-span-1 lg:row-span-1 lg:min-h-[min(280px,24vw)]",
  },
  {
    src: "/about/beyond-design/graphic/11.png",
    alt: "Stylus on tablet: painterly creature illustration in grayscale",
    width: 558,
    height: 1024,
    gridClass: "lg:col-span-1 lg:row-span-1 lg:min-h-[min(280px,24vw)]",
  },
  {
    src: "/about/beyond-design/graphic/14.png",
    alt: "Hand-painted ceramic pieces on white fabric—glaze and DIY craft exploration",
    width: 819,
    height: 1024,
    gridClass: "lg:col-span-4 lg:row-span-1 lg:min-h-[min(340px,42vw)]",
  },
];

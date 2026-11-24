export const HAPHY_LIVING_SHOP_URL =
  "https://www.etsy.com/ca/shop/HaphyLiving";

export const HAPHY_LIVING_INSTAGRAM_URL =
  "https://www.instagram.com/lifewith.haphy/";

export const HAPHY_LIVING_SHOP_INSTAGRAM_URL =
  "https://www.instagram.com/haphyliving/";

export type HaphyProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Product shots for the About → Beyond design callout. */
export const HAPHY_LIVING_PRODUCT_IMAGES: HaphyProductImage[] = [
  {
    src: "/about/haphy-living/beyond-pins.jpg",
    alt: "Haphy Living enamel pin set — four sleeping and sitting bunny illustrations on a wooden table",
    width: 1024,
    height: 1024,
  },
  {
    src: "/about/haphy-living/beyond-tote-cafe.jpg",
    alt: "Haphy Living canvas tote with a grid of bunny illustrations, styled at a café table",
    width: 1024,
    height: 1024,
  },
  {
    src: "/about/haphy-living/beyond-postcards.jpg",
    alt: "Haphy Living seasonal bunny postcards spread on a wooden table",
    width: 824,
    height: 1024,
  },
  {
    src: "/about/haphy-living/beyond-tote-christmas.jpg",
    alt: "Haphy Living Christmas tote with a fireplace illustration, by a window overlooking a holiday market",
    width: 824,
    height: 1024,
  },
];

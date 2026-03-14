import type { MerchProduct } from '@/types/merch';

export const MERCH_PRODUCTS: MerchProduct[] = [
  {
    id: 'tshirt-shell',
    slug: 'tshirt-shell',
    category: 'clothing',
    nameKey: 'tshirtShell',
    descriptionKey: 'tshirtShellDesc',
    price: 35,
    images: [
      { src: '/images/merch/tshirt-shell.jpeg', alt: 'Camiseta Shell OLA VIVA' },
    ],
    variants: [
      { id: 'xs', label: 'XS', type: 'size', available: true },
      { id: 's', label: 'S', type: 'size', available: true },
      { id: 'm', label: 'M', type: 'size', available: true },
      { id: 'l', label: 'L', type: 'size', available: true },
      { id: 'xl', label: 'XL', type: 'size', available: true },
    ],
    featured: true,
    tagKey: 'bestseller',
  },
  {
    id: 'tshirt-beach',
    slug: 'tshirt-beach',
    category: 'clothing',
    nameKey: 'tshirtBeach',
    descriptionKey: 'tshirtBeachDesc',
    price: 35,
    images: [
      { src: '/images/merch/tshirt-beach.jpeg', alt: 'Camiseta Beach OLA VIVA' },
    ],
    variants: [
      { id: 'xs', label: 'XS', type: 'size', available: true },
      { id: 's', label: 'S', type: 'size', available: true },
      { id: 'm', label: 'M', type: 'size', available: true },
      { id: 'l', label: 'L', type: 'size', available: true },
      { id: 'xl', label: 'XL', type: 'size', available: false },
    ],
    featured: true,
    tagKey: 'new',
  },
  {
    id: 'hoodie',
    slug: 'hoodie',
    category: 'clothing',
    nameKey: 'hoodie',
    descriptionKey: 'hoodieDesc',
    price: 65,
    images: [
      { src: '/images/merch/hoodie.jpeg', alt: 'Hoodie OLA VIVA' },
    ],
    variants: [
      { id: 'xs', label: 'XS', type: 'size', available: true },
      { id: 's', label: 'S', type: 'size', available: true },
      { id: 'm', label: 'M', type: 'size', available: true },
      { id: 'l', label: 'L', type: 'size', available: true },
      { id: 'xl', label: 'XL', type: 'size', available: true },
    ],
    featured: true,
  },
  {
    id: 'totebag-shell',
    slug: 'totebag-shell',
    category: 'accessories',
    nameKey: 'totebagShell',
    descriptionKey: 'totebagShellDesc',
    price: 22,
    images: [
      { src: '/images/merch/Totebag-OlaViva-Shell.jpeg', alt: 'Tote Bag Shell OLA VIVA' },
    ],
    featured: true,
    tagKey: 'bestseller',
  },
  {
    id: 'totebag-growing',
    slug: 'totebag-growing',
    category: 'accessories',
    nameKey: 'totebagGrowing',
    descriptionKey: 'totebagGrowingDesc',
    price: 22,
    images: [
      { src: '/images/merch/totebag-OlaViva-Growing.jpeg', alt: 'Tote Bag Growing OLA VIVA' },
    ],
    featured: false,
  },
  {
    id: 'landyard',
    slug: 'landyard',
    category: 'accessories',
    nameKey: 'landyard',
    descriptionKey: 'landyardDesc',
    price: 12,
    images: [
      { src: '/images/merch/landyard.jpeg', alt: 'Lanyard OLA VIVA' },
    ],
    featured: false,
  },
  {
    id: 'candle-jazmin',
    slug: 'candle-jazmin',
    category: 'home',
    nameKey: 'candleJazmin',
    descriptionKey: 'candleJazminDesc',
    price: 28,
    images: [
      { src: '/images/merch/candle-jazmin.jpeg', alt: 'Vela Jazmín OLA VIVA' },
    ],
    featured: true,
    tagKey: 'new',
  },
  {
    id: 'candle-pink',
    slug: 'candle-pink',
    category: 'home',
    nameKey: 'candlePink',
    descriptionKey: 'candlePinkDesc',
    price: 28,
    images: [
      { src: '/images/merch/candle-pink.jpeg', alt: 'Vela Rosa OLA VIVA' },
    ],
    featured: false,
  },
];

export function getMerchBySlug(slug: string): MerchProduct | undefined {
  return MERCH_PRODUCTS.find((p) => p.slug === slug);
}

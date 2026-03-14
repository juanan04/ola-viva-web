export type ProductCategory = 'clothing' | 'accessories' | 'home';

export interface ProductVariant {
  id: string;
  label: string;      // e.g. "S", "M", "L" or "Verde Salvia"
  type: 'size' | 'color';
  available: boolean;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface MerchProduct {
  id: string;
  slug: string;
  category: ProductCategory;
  nameKey: string;
  descriptionKey: string;
  price: number;
  images: ProductImage[];
  variants?: ProductVariant[];
  featured: boolean;
  tagKey?: string;  // e.g. "bestseller", "new"
}

export interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
}

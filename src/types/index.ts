export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  price: number;
  originalPrice?: number;
  priceLabel?: string;
  description: string;
  longDescription?: string;
  image: string;
  category: 'dog' | 'cat';
  type: 'food' | 'supplies';
  subcategory: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: 'New' | 'Sale' | 'Vet Diet' | 'Premium' | 'Fresh';
  tags?: string[];
  weight?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  parentCategory: string;
  parentType: string;
  image: string;
  description: string;
  productCount?: number;
}

export interface NavCategory {
  label: string;
  href: string;
  subcategories: { label: string; href: string }[];
}

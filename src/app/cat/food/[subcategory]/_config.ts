import { Product } from '@/types';

export const VALID = ['wet-food', 'dry-food', 'veterinary-diets', 'premium-food'];

export const TABS = [
  { label: 'Wet Food',         href: '/cat/food/wet-food' },
  { label: 'Dry Food',         href: '/cat/food/dry-food' },
  { label: 'Veterinary Diets', href: '/cat/food/veterinary-diets' },
  { label: 'Premium Food',     href: '/cat/food/premium-food' },
];

// Each subcategory loads only its own product file, so editing one
// subcategory's data doesn't invalidate the others.
export const LOADERS: Record<string, () => Promise<{ products: Product[] }>> = {
  'wet-food':         () => import('@/data/products/cat-food-wet-food'),
  'dry-food':         () => import('@/data/products/cat-food-dry-food'),
  'veterinary-diets': () => import('@/data/products/cat-food-veterinary-diets'),
  'premium-food':     () => import('@/data/products/cat-food-premium-food'),
};

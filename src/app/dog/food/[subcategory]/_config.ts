import { Product } from '@/types';

export const VALID = ['dry-food', 'wet-food', 'fresh-frozen', 'veterinary-diet'];

export const TABS = [
  { label: 'Dry Food',        href: '/dog/food/dry-food' },
  { label: 'Wet Food',        href: '/dog/food/wet-food' },
  { label: 'Fresh & Frozen',  href: '/dog/food/fresh-frozen' },
  { label: 'Veterinary Diet', href: '/dog/food/veterinary-diet' },
];

// Each subcategory loads only its own product file, so editing one
// subcategory's data doesn't invalidate the others.
export const LOADERS: Record<string, () => Promise<{ products: Product[] }>> = {
  'dry-food':        () => import('@/data/products/dog-food-dry-food'),
  'wet-food':        () => import('@/data/products/dog-food-wet-food'),
  'fresh-frozen':    () => import('@/data/products/dog-food-fresh-frozen'),
  'veterinary-diet': () => import('@/data/products/dog-food-veterinary-diet'),
};

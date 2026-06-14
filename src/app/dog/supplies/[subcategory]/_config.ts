import { Product } from '@/types';

export const VALID = ['housing', 'beds', 'bowls-feeders', 'toys', 'travel-outdoor'];

export const TABS = [
  { label: 'Housing',         href: '/dog/supplies/housing' },
  { label: 'Beds',            href: '/dog/supplies/beds' },
  { label: 'Bowls & Feeders', href: '/dog/supplies/bowls-feeders' },
  { label: 'Toys',            href: '/dog/supplies/toys' },
  { label: 'Travel & Outdoor',href: '/dog/supplies/travel-outdoor' },
];

// Each subcategory loads only its own product file, so editing one
// subcategory's data doesn't invalidate the others.
export const LOADERS: Record<string, () => Promise<{ products: Product[] }>> = {
  'housing':        () => import('@/data/products/dog-supplies-housing'),
  'beds':           () => import('@/data/products/dog-supplies-beds'),
  'bowls-feeders':  () => import('@/data/products/dog-supplies-bowls-feeders'),
  'toys':           () => import('@/data/products/dog-supplies-toys'),
  'travel-outdoor': () => import('@/data/products/dog-supplies-travel-outdoor'),
};

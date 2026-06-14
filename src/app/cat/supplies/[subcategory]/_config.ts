import { Product } from '@/types';

export const VALID = ['housing', 'beds', 'bowls-feeders', 'carriers-travel', 'toys'];

export const TABS = [
  { label: 'Cat Trees',         href: '/cat/supplies/housing' },
  { label: 'Beds',              href: '/cat/supplies/beds' },
  { label: 'Bowls & Feeders',   href: '/cat/supplies/bowls-feeders' },
  { label: 'Carriers & Travel', href: '/cat/supplies/carriers-travel' },
  { label: 'Toys',              href: '/cat/supplies/toys' },
];

// Each subcategory loads only its own product file, so editing one
// subcategory's data doesn't invalidate the others.
export const LOADERS: Record<string, () => Promise<{ products: Product[] }>> = {
  'housing':         () => import('@/data/products/cat-supplies-housing'),
  'beds':            () => import('@/data/products/cat-supplies-beds'),
  'bowls-feeders':   () => import('@/data/products/cat-supplies-bowls-feeders'),
  'carriers-travel': () => import('@/data/products/cat-supplies-carriers-travel'),
  'toys':            () => import('@/data/products/cat-supplies-toys'),
};

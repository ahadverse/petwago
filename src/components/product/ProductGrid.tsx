'use client';

import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
  title?: string;
  subtitle?: string;
  emptyMessage?: string;
}

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Top Rated' },
  { value: 'name-asc', label: 'Name: A-Z' },
];

function sortProducts(products: Product[], sortKey: SortKey): Product[] {
  if (sortKey === 'featured') return products;

  const sorted = [...products];
  switch (sortKey) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'rating-desc':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }
  return sorted;
}

export default function ProductGrid({ products, title, subtitle, emptyMessage }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('featured');
  const sortedProducts = useMemo(() => sortProducts(products, sortKey), [products, sortKey]);

  if (!products.length) {
    return (
      <div className="text-center py-20">
        {/* Paw print SVG — no emoji */}
        <svg
          className="mx-auto mb-4 w-12 h-12 text-sage/20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4 9.5A1.5 1.5 0 1 0 4 12.5 1.5 1.5 0 0 0 4 9.5Zm16 0A1.5 1.5 0 1 0 20 12.5 1.5 1.5 0 0 0 20 9.5Zm-8 1c-2.8 0-5 2.46-5 5 0 1.93.95 3.12 2.17 3.73.73.37 1.53.52 2.29.52h1.08c.76 0 1.56-.15 2.29-.52C16.05 18.62 17 17.43 17 15.5c0-2.54-2.2-5-5-5Z" />
        </svg>
        <p className="text-muted text-base">{emptyMessage ?? 'No products found.'}</p>
      </div>
    );
  }

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="font-serif text-2xl font-bold text-charcoal">{title}</h2>}
          {subtitle && <p className="text-muted mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted">
          {products.length} product{products.length !== 1 ? 's' : ''}
        </p>
        <div className="relative">
          <select
            value={sortKey}
            onChange={e => setSortKey(e.target.value as SortKey)}
            aria-label="Sort products"
            className="appearance-none bg-white border border-border rounded-sm pl-3 pr-9 py-2 text-sm text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-sage cursor-pointer"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>
                Sort: {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sortedProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

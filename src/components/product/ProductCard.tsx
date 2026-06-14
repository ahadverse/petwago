'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import Badge from '@/components/ui/Badge';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, isInCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = isInCart(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-white border border-border hover:border-sage rounded-sm transition-colors duration-200 overflow-hidden"
    >
      {/* ── Image area ── */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5">
            <Badge label={product.badge} className="text-[10px] px-2.5 py-1" />
          </div>
        )}

        {/* Out-of-stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/65 flex items-center justify-center">
            <span className="bg-gray-800 text-white text-[11px] font-bold px-4 py-1.5 rounded-sm tracking-wide">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* ── Content area ── */}
      <div className="flex flex-col flex-1 px-3.5 pt-3 pb-3.5 gap-1">
        {/* Brand */}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 truncate">
          {product.brand}
        </p>

        {/* Product name */}
        <h3 className="font-serif text-sm font-semibold text-charcoal leading-snug line-clamp-2 group-hover:text-sage transition-colors duration-150">
          {product.name}
        </h3>

        {/* Star rating */}
        <div className="mt-0.5">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>

        {/* Price row */}
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="font-serif text-base font-bold text-terracotta-dark leading-none">
            ${product.price.toFixed(2)}
            {product.priceLabel && (
              <span className="text-xs font-semibold text-muted ml-1 normal-case">
                {product.priceLabel}
              </span>
            )}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted line-through leading-none">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart button */}
        <button
          onClick={handleAdd}
          disabled={!product.inStock}
          aria-label={
            !product.inStock
              ? 'Out of stock'
              : inCart || justAdded
              ? 'Already in cart'
              : `Add ${product.name} to cart`
          }
          className={`
            mt-auto w-full flex items-center justify-center gap-1.5
            py-2.5 rounded-sm text-sm font-bold border
            transition-colors duration-150 cursor-pointer
            disabled:opacity-40 disabled:cursor-not-allowed
            ${justAdded || inCart
              ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
              : 'border-charcoal text-charcoal hover:bg-charcoal hover:text-cream'
            }
          `}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4 shrink-0" />
              Added!
            </>
          ) : inCart ? (
            <>
              <Check className="w-4 h-4 shrink-0" />
              In Cart
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 shrink-0" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </Link>
  );
}

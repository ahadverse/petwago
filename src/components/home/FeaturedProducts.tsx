import { getFeaturedProducts } from '@/data/seed';
import ProductCard from '@/components/product/ProductCard';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">Best Sellers</h2>
          <p className="text-muted mt-2">Top-rated products your pet will love.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/dog/food"
            className="inline-block border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}

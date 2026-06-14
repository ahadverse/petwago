import { products } from '@/data/seed';
import ProductGrid from '@/components/product/ProductGrid';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  return { title: q ? `Search results for "${q}" | PetWago` : 'Search | PetWago' };
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = (q ?? '').trim().toLowerCase();

  const results = query
    ? products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        (p.tags ?? []).some(tag => tag.toLowerCase().includes(query))
      )
    : [];

  return (
    <main>
      <section className="bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ProductGrid
            products={results}
            title={query ? `Search results for "${q}"` : 'Search'}
            emptyMessage={query ? 'No products match your search.' : 'Enter a search term to find products.'}
          />
        </div>
      </section>
    </main>
  );
}

import { notFound } from 'next/navigation';
import { subcategoryMeta } from '@/data/seed';
import ProductGrid from '@/components/product/ProductGrid';
import { VALID, LOADERS } from './_config';

export function generateStaticParams() {
  return VALID.map(s => ({ subcategory: s }));
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const meta = subcategoryMeta[subcategory];
  return { title: `${meta?.name ?? subcategory} — Dog Supplies | PetWago` };
}

export default async function DogSuppliesSubPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  if (!VALID.includes(subcategory)) notFound();
  const { products } = await LOADERS[subcategory]();

  return <ProductGrid products={products} />;
}

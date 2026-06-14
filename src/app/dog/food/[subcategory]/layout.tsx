import { notFound } from 'next/navigation';
import { subcategoryMeta } from '@/data/seed';
import SubcategoryShell from '@/components/category/SubcategoryShell';
import { VALID, TABS, LOADERS } from './_config';

export default async function DogFoodSubLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ subcategory: string }>;
}) {
  const { subcategory } = await params;
  if (!VALID.includes(subcategory)) notFound();
  const meta = subcategoryMeta[subcategory];
  const { products } = await LOADERS[subcategory]();

  return (
    <SubcategoryShell
      header={{
        title: meta?.name ?? subcategory,
        description: meta?.description ?? 'Browse our full selection.',
        breadcrumbs: [
          { label: 'Home', href: '/' },
          { label: 'Dog Food', href: '/dog/food' },
          { label: meta?.name ?? subcategory },
        ],
        tabs: TABS.map(t => ({ ...t, active: t.href === `/dog/food/${subcategory}` })),
        productCount: products.length,
      }}
    >
      {children}
    </SubcategoryShell>
  );
}

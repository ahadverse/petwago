'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import SubcategoryPageHeader, { SubcategoryPageHeaderProps } from './SubcategoryPageHeader';
import ProductGridSkeleton from '@/components/product/ProductGridSkeleton';

const MIN_SKELETON_MS = 500;

interface Props {
  header: SubcategoryPageHeaderProps;
  children: React.ReactNode;
}

// Persists across sibling subcategory navigations (lives in layout.tsx), so it
// can keep showing a skeleton in place of `children` while the next tab's
// route is loading, for at least MIN_SKELETON_MS.
export default function SubcategoryShell({ header, children }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!isPending && showSkeleton) {
      const timer = setTimeout(() => setShowSkeleton(false), MIN_SKELETON_MS);
      return () => clearTimeout(timer);
    }
  }, [isPending, showSkeleton]);

  const tabs = header.tabs.map(tab => ({
    ...tab,
    onClick: () => {
      if (tab.active) return;
      setShowSkeleton(true);
      startTransition(() => router.push(tab.href));
    },
  }));

  return (
    <main>
      <SubcategoryPageHeader {...header} tabs={tabs} />
      <section className="bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {showSkeleton ? <ProductGridSkeleton /> : children}
        </div>
      </section>
    </main>
  );
}

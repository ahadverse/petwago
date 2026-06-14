import { notFound } from 'next/navigation';
import { products, getProductBySlug, getRelatedProducts } from '@/data/seed';
import ProductDetail from '@/components/product/ProductDetail';
import PageHeader from '@/components/category/PageHeader';

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? `${product.name} | PetWago` : 'Product Not Found' };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product, 4);

  const parentHref  = `/${product.category}/${product.type}`;
  const parentLabel = `${product.category === 'dog' ? 'Dog' : 'Cat'} ${product.type === 'food' ? 'Food' : 'Supplies'}`;

  return (
    <main>
      {/* Page header */}
      <PageHeader
        title={product.name}
        subtitle={product.brand}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: parentLabel, href: parentHref },
          { label: product.name },
        ]}
      />

      {/* Cream content area */}
      <div className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ProductDetail product={product} related={related} />
        </div>
      </div>
    </main>
  );
}

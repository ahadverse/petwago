import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = [
  { label: 'Dog Food', type: 'Dry & Wet', href: '/dog/food', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=200&h=200&fit=crop' },
  { label: 'Dog Supplies', type: 'Gear & Toys', href: '/dog/supplies', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=200&h=200&fit=crop' },
  { label: 'Fresh & Frozen', type: 'Dog Food', href: '/dog/food/fresh-frozen', image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=200&h=200&fit=crop' },
  { label: 'Cat Food', type: 'Wet & Dry', href: '/cat/food', image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=200&h=200&fit=crop' },
  { label: 'Cat Supplies', type: 'Gear & Toys', href: '/cat/supplies', image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=200&h=200&fit=crop' },
  { label: 'Premium Food', type: 'Cat Food', href: '/cat/food/premium-food', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop' },
  { label: 'Vet Diets', type: 'Dog & Cat', href: '/dog/food/veterinary-diet', image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=200&h=200&fit=crop' },
];

export default function ShopByCategoryStrip() {
  return (
    <section className="bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-6">
          Shop by Category
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 border border-border hover:border-sage rounded-sm px-4 py-3 min-w-[200px] flex-shrink-0 snap-start transition-colors duration-150"
            >
              <div className="relative w-12 h-12 flex-shrink-0 rounded-sm overflow-hidden bg-cream-warm">
                <Image src={item.image} alt={item.label} fill className="object-cover" sizes="48px" />
              </div>
              <div className="min-w-0">
                <p className="text-terracotta text-[10px] font-semibold uppercase tracking-widest mb-0.5">{item.type}</p>
                <p className="text-charcoal font-semibold text-sm truncate group-hover:text-sage transition-colors duration-150">
                  {item.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

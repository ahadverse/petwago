import CategoryPageHero from '@/components/category/CategoryPageHero';
import SubcategoryMenu from '@/components/category/SubcategoryMenu';

export const metadata = { title: 'Cat Supplies — Cat Trees, Beds, Toys & Carriers | PetWago' };

const MENU_ITEMS = [
  { label: 'Cat Trees',       type: 'Housing',   href: '/cat/supplies/housing',        image: 'https://images.unsplash.com/photo-1573865526182-e4f5b81c7a84?w=200&h=200&fit=crop' },
  { label: 'Beds',            type: 'Comfort',   href: '/cat/supplies/beds',            image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=200&h=200&fit=crop' },
  { label: 'Bowls & Feeders', type: 'Feeding',   href: '/cat/supplies/bowls-feeders',   image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop' },
  { label: 'Carriers',        type: 'Travel',    href: '/cat/supplies/carriers-travel', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop' },
  { label: 'Toys',            type: 'Play',      href: '/cat/supplies/toys',            image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=200&h=200&fit=crop' },
];

const BENEFITS = [
  { icon: '🏰', title: 'Cat-Approved Design',   desc: 'Furniture and toys cats actually want to use — not just look at.' },
  { icon: '🧵', title: 'Premium Materials',     desc: 'Sisal, plush, and solid wood constructions built for claws and weight.' },
  { icon: '⭐', title: '4.8★ Rated',            desc: 'Top-rated across thousands of genuine cat owner reviews.' },
  { icon: '↩️', title: '30-Day Returns',        desc: 'If your cat ignores it, we\'ll take it back. No questions asked.' },
];

export default function CatSuppliesPage() {
  return (
    <main>
      <CategoryPageHero
        title="Cat Supplies"
        subtitle="Premium Essentials"
        description="Furniture, toys, and accessories designed for cats who have standards. Because your cat deserves more than just a cardboard box."
        image="https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&h=600&fit=crop&crop=faces"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Cat Supplies' }]}
        ctaLabel="Explore Cat Supplies"
        ctaHref="/cat/supplies/housing"
      />

      <SubcategoryMenu
        heading="Explore the Cat Supplies Menu"
        items={MENU_ITEMS}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-charcoal text-center mb-10">
            Supplies Cats Will Actually Use
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {BENEFITS.map(b => (
              <div key={b.title} className="flex flex-col items-center gap-3">
                <span className="text-4xl">{b.icon}</span>
                <h3 className="font-serif font-bold text-charcoal text-sm">{b.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

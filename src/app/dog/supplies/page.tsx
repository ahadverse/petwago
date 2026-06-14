import CategoryPageHero from '@/components/category/CategoryPageHero';
import SubcategoryMenu from '@/components/category/SubcategoryMenu';

export const metadata = { title: 'Dog Supplies — Beds, Toys, Housing & Travel Gear | PetWago' };

const MENU_ITEMS = [
  { label: 'Housing & Crates', type: 'Shelter',   href: '/dog/supplies/housing',       image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=200&h=200&fit=crop' },
  { label: 'Beds',             type: 'Comfort',   href: '/dog/supplies/beds',           image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop' },
  { label: 'Bowls & Feeders',  type: 'Feeding',   href: '/dog/supplies/bowls-feeders',  image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&fit=crop' },
  { label: 'Toys',             type: 'Play',      href: '/dog/supplies/toys',           image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=200&h=200&fit=crop' },
  { label: 'Travel & Outdoor', type: 'Adventure', href: '/dog/supplies/travel-outdoor', image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=200&h=200&fit=crop' },
];

const BENEFITS = [
  { icon: '🛡️', title: 'Built to Last',        desc: 'Every product tested for durability. No cheap materials, no shortcuts.' },
  { icon: '🐾', title: 'Dog-Approved',          desc: 'Chosen by dogs, vetted by owners. Products that actually get used.' },
  { icon: '⭐', title: '4.8★ Rated',            desc: 'Top-rated across thousands of genuine owner reviews.' },
  { icon: '↩️', title: '30-Day Returns',        desc: 'Not happy? Send it back. No questions asked.' },
];

export default function DogSuppliesPage() {
  return (
    <main>
      <CategoryPageHero
        title="Dog Supplies"
        subtitle="Quality Gear"
        description="Everything your dog needs to live comfortably, play hard, and explore the world — hand-selected for dogs who deserve the best."
        image="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=600&fit=crop&crop=faces"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Dog Supplies' }]}
        ctaLabel="Explore Dog Supplies"
        ctaHref="/dog/supplies/beds"
      />

      <SubcategoryMenu
        heading="Explore the Dog Supplies Menu"
        items={MENU_ITEMS}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-charcoal text-center mb-10">
            Gear Your Dog Will Actually Love
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

import Link from 'next/link';
import Image from 'next/image';
import CategoryPageHero from '@/components/category/CategoryPageHero';
import { getProductsByCategory } from '@/data/seed';
import ProductCard from '@/components/product/ProductCard';

export const metadata = { title: 'Dog Food — Dry, Wet, Fresh & Veterinary Diets | PetWago' };

// ── Category cards ──────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    label: 'Dry Food',
    type: 'Most Popular',
    href: '/dog/food/dry-food',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=800&fit=crop',
    desc: 'Kibble & baked formulas for every breed',
  },
  {
    label: 'Wet Food',
    type: 'Rich & Hearty',
    href: '/dog/food/wet-food',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=800&fit=crop',
    desc: 'Cans, pouches & pâtés dogs love',
  },
  {
    label: 'Fresh & Frozen',
    type: 'Delivered Fresh',
    href: '/dog/food/fresh-frozen',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&h=800&fit=crop',
    desc: 'Real meals, freshly prepared',
  },
  {
    label: 'Veterinary Diet',
    type: 'Vet Prescribed',
    href: '/dog/food/veterinary-diet',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=800&fit=crop',
    desc: 'Prescription & specialist formulas',
  },
];

// ── Quality promises ─────────────────────────────────────────────────────────
const PROMISES = [
  {
    title: 'Real Meat First',
    desc: 'Named protein is always the #1 ingredient — no fillers, no mystery meals.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8c0 4-6 10-6 10S6 12 6 8a6 6 0 0 1 12 0Z" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
  },
  {
    title: 'Vet-Formulated',
    desc: 'Every formula reviewed by veterinary nutritionists for complete & balanced meals.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'No Artificial Additives',
    desc: 'Clean ingredient lists — free from artificial colours, flavours, and preservatives.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: 'Fast & Free Delivery',
    desc: 'Most orders arrive in 3–5 business days. Free shipping on all orders over $49.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <rect width="13" height="10" x="9" y="11" rx="2" />
        <circle cx="14" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      </svg>
    ),
  },
];

// ── Top brands ───────────────────────────────────────────────────────────────
const BRANDS = ['Merrick', 'Purina Pro Plan', 'Blue Buffalo', "Hill's Science Diet", 'Royal Canin', 'Orijen'];

export default function DogFoodPage() {
  const allDogFood = getProductsByCategory('dog', 'food');
  const featured   = allDogFood.filter(p => p.inStock).slice(0, 8);

  return (
    <main>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <CategoryPageHero
        title="Dog Food"
        subtitle="Premium Nutrition"
        description="At PetWago, we believe dogs aren't picky — they just deserve better. Discover real recipes crafted for every life stage, breed, and taste."
        image="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&h=700&fit=crop&crop=faces"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Dog Food' }]}
        ctaLabel="Shop All Dog Food"
        ctaHref="/dog/food/dry-food"
      />

      {/* ── BROWSE CATEGORIES ────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2">Browse by Type</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">Explore the Dog Food Menu</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative rounded-sm overflow-hidden border border-border transition-colors duration-300 hover:border-sage"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="text-terracotta text-[10px] font-bold uppercase tracking-widest mb-1">{cat.type}</p>
                  <h3 className="font-serif text-cream font-bold text-base sm:text-lg leading-tight mb-1">{cat.label}</h3>
                  <p className="text-cream/60 text-xs leading-snug mb-3 hidden sm:block">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-cream/70 group-hover:text-terracotta transition-colors duration-200">
                    Shop Now
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-1">Top Picks</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">Best Selling Dog Food</h2>
            </div>
            <Link
              href="/dog/food/dry-food"
              className="text-sm font-bold text-sage hover:text-sage-dark inline-flex items-center gap-1 transition-colors flex-shrink-0"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── QUALITY PROMISE ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2">Our Commitment</p>
            <h2 className="font-serif text-2xl font-bold text-charcoal">PetWago&apos;s Promise for Your Dog</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {PROMISES.map(p => (
              <div key={p.title} className="flex flex-col items-center text-center p-6 rounded-sm bg-cream hover:bg-sage/5 transition-colors duration-200 group">
                <div className="w-12 h-12 rounded-sm border border-sage/30 bg-sage/5 group-hover:bg-sage/10 flex items-center justify-center text-sage mb-4 transition-colors">
                  {p.svg}
                </div>
                <h3 className="font-serif font-bold text-charcoal text-sm mb-2">{p.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP BRANDS ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted mb-7">
            Trusted Brands We Carry
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {BRANDS.map(brand => (
              <span
                key={brand}
                className="px-5 py-2.5 bg-white rounded-sm border border-border text-sm font-bold text-muted hover:border-sage hover:text-sage transition-colors duration-200 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-3">
            Not Sure Which Food is Right?
          </h2>
          <p className="text-cream/50 text-sm mb-8 max-w-xl mx-auto">
            Every dog is different. Browse our full range and filter by breed size, life stage, or dietary need to find the perfect match.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/dog/food/dry-food"
              className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors duration-200"
            >
              Shop Dry Food
            </Link>
            <Link
              href="/dog/food/wet-food"
              className="bg-cream/10 hover:bg-cream/20 text-cream font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors border border-cream/20"
            >
              Shop Wet Food
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

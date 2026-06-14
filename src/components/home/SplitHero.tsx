import Link from 'next/link';
import Image from 'next/image';

export default function SplitHero() {
  return (
    <section className="bg-cream-warm border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Text */}
          <div className="lg:col-span-5 py-12 lg:py-20">
            <p className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-4">
              Real Food for Real Pets
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-charcoal leading-[1.1] mb-6">
              Nutrition your pet will actually look forward to
            </h1>
            <p className="text-muted text-base leading-relaxed mb-8 max-w-md">
              Carefully curated food and supplies from the world&apos;s best brands —
              real ingredients, honest labels, delivered to your door.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/dog/food"
                className="bg-sage hover:bg-sage-dark text-cream font-semibold px-7 py-3.5 rounded-sm text-sm transition-colors duration-200"
              >
                Shop Dog Food
              </Link>
              <Link
                href="/cat/food"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream font-semibold px-7 py-3.5 rounded-sm text-sm transition-colors duration-200"
              >
                Shop Cat Food
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-7 border-t border-border">
              {['Free Shipping $49+', '30-Day Returns', 'Vet-Approved Nutrition'].map(t => (
                <div key={t} className="flex items-center gap-1.5 text-muted text-xs">
                  <span className="text-terracotta font-bold text-sm leading-none">+</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[420px] lg:h-[560px]">
            <Image
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=1200&fit=crop&crop=faces"
              alt="Happy dog"
              fill
              priority
              className="object-cover rounded-sm"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

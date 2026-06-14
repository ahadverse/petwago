import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    pet: 'Dog mom to Biscuit',
    quote: 'My dog absolutely loves this! The quality is outstanding and I can see such a difference in his coat since switching.',
  },
  {
    name: 'James K.',
    pet: 'Dog dad to Rex',
    quote: "Best product I've tried for my pup. Easy to order, fast shipping, and my dog devours every meal.",
  },
  {
    name: 'Linda T.',
    pet: 'Cat mom to Mochi',
    quote: 'Great quality, my pet approved! Shipping was quick and packaging was excellent. Would definitely recommend.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal text-center mb-12">
          Loved by Pets &amp; Their People
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="border-t border-border pt-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-terracotta fill-terracotta" />
                ))}
              </div>
              <p className="text-muted leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
              <p className="font-serif font-bold text-charcoal text-sm">{t.name}</p>
              <p className="text-xs text-muted mt-0.5">{t.pet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

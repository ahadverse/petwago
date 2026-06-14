import { Truck, ShieldCheck, RotateCcw, Heart } from 'lucide-react';

const ITEMS = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $49' },
  { icon: ShieldCheck, title: 'Secure Checkout', desc: 'Encrypted & protected' },
  { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
  { icon: Heart, title: 'Vet-Approved', desc: 'Trusted by professionals' },
];

export default function TrustBadges() {
  return (
    <section className="bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`flex items-center gap-3 ${i % 2 === 0 ? 'sm:pl-0' : 'sm:pl-6'} ${i > 1 ? 'pt-6 sm:pt-0' : ''}`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-sm border border-sage/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-sage" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-charcoal text-sm truncate">{title}</p>
                <p className="text-muted text-xs truncate">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function NewsletterBand() {
  return (
    <section className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        <p className="font-serif text-xl sm:text-2xl font-bold text-cream">
          Use code <span className="text-terracotta">PETWAGO10</span> for 10% off your first order
        </p>
        <Link
          href="/dog/food"
          className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-7 py-3 rounded-sm text-sm transition-colors duration-200 whitespace-nowrap"
        >
          Start Shopping
        </Link>
      </div>
    </section>
  );
}

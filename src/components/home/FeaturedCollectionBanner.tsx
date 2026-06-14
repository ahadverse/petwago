import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedCollectionBanner() {
  return (
    <section className="relative h-[420px] sm:h-[480px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1600&h=900&fit=crop"
        alt="Dog enjoying a meal outdoors"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-cream/70 text-sm font-semibold uppercase tracking-widest mb-4">Featured Collection</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-7 leading-tight max-w-2xl">
          Real Food. Real Love.
        </h2>
        <Link
          href="/dog/food/veterinary-diet"
          className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors duration-200"
        >
          Shop Veterinary Diets
        </Link>
      </div>
    </section>
  );
}

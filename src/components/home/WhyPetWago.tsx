import Image from 'next/image';

const POINTS = [
  {
    title: 'High-Quality Ingredients',
    desc: 'We use only natural ingredients like real meat, fish and poultry, plus essential vitamins and nutrients.',
  },
  {
    title: 'All the Variety Pets Crave',
    desc: 'Pets seek new experiences at mealtime — which is why our menu spans dozens of diverse recipes.',
  },
  {
    title: 'Protein-Rich Recipes',
    desc: 'Our meat-first recipes are crafted with high-quality protein sources — wild-caught and pasture-raised.',
  },
  {
    title: 'Crafted for Picky Eaters',
    desc: "Great nutrition doesn't matter if your pet won't eat it, so every recipe is packed with flavor.",
  },
];

export default function WhyPetWago() {
  return (
    <section className="bg-cream-warm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="relative aspect-[4/3] lg:aspect-square w-full order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&h=900&fit=crop"
              alt="Dog and cat eating together"
              fill
              className="object-cover rounded-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-terracotta text-sm font-semibold uppercase tracking-widest mb-3">Why PetWago</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-6 leading-tight">
              Food made the way nature intended
            </h2>
            <div className="space-y-6">
              {POINTS.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-sm border border-sage flex items-center justify-center font-serif text-sage font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-charcoal mb-1">{p.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

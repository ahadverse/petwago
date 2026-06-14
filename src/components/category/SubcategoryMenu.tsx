import Link from 'next/link';
import Image from 'next/image';

interface SubItem {
  label: string;
  type: string;
  href: string;
  image: string;
}

interface Props {
  heading: string;
  items: SubItem[];
}

export default function SubcategoryMenu({ heading, items }: Props) {
  return (
    <section className="bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-6">
          {heading}
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 flex-shrink-0 snap-start border border-border hover:border-sage rounded-sm px-4 py-3 min-w-[200px] transition-colors duration-150"
            >
              <div className="relative w-12 h-12 rounded-sm overflow-hidden flex-shrink-0 bg-cream-warm">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-terracotta text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.type}</p>
                <p className="text-charcoal font-semibold text-sm leading-tight group-hover:text-sage transition-colors">
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

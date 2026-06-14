import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface Crumb { label: string; href?: string }
interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  breadcrumbs: Crumb[];
  ctaLabel: string;
  ctaHref: string;
}

export default function CategoryPageHero({
  title, subtitle, description, image, breadcrumbs, ctaLabel, ctaHref
}: Props) {
  return (
    <section className="bg-cream-warm border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4">
          <Breadcrumb crumbs={breadcrumbs} />
        </div>

        <div className="grid lg:grid-cols-2 min-h-[360px] items-center gap-8 lg:gap-12 py-10 lg:py-0">

          <div className="order-2 lg:order-1 py-4 lg:py-12">
            <p className="text-terracotta text-xs font-bold uppercase tracking-widest mb-3">
              {subtitle}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-4">
              {title}
            </h1>
            <p className="text-muted text-base leading-relaxed mb-7 max-w-lg">
              {description}
            </p>
            <Link
              href={ctaHref}
              className="inline-block bg-sage hover:bg-sage-dark text-cream font-semibold px-7 py-3.5 rounded-sm text-sm transition-colors duration-200"
            >
              {ctaLabel}
            </Link>
          </div>

          <div className="relative order-1 lg:order-2 aspect-[4/3] lg:aspect-auto lg:h-[360px] w-full">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover rounded-sm"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

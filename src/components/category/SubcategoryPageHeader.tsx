import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface Crumb { label: string; href?: string }
interface Tab  { label: string; href: string; active?: boolean; onClick?: () => void }

export interface SubcategoryPageHeaderProps {
  title: string;
  description: string;
  breadcrumbs: Crumb[];
  tabs: Tab[];
  productCount: number;
}

export default function SubcategoryPageHeader({ title, description, breadcrumbs, tabs, productCount }: SubcategoryPageHeaderProps) {
  return (
    <div className="bg-cream-warm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0">
        <Breadcrumb crumbs={breadcrumbs} />

        <div className="mt-5 mb-6">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{title}</h1>
          <p className="text-muted mt-2 text-sm max-w-2xl">{description}</p>
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-0 scrollbar-hide">
          {tabs.map(tab => (
            <Link
              key={tab.href}
              href={tab.href}
              onClick={(e) => {
                if (tab.onClick) {
                  e.preventDefault();
                  tab.onClick();
                }
              }}
              className={`flex-shrink-0 px-5 py-3 text-sm font-semibold transition-all duration-150 border-b-2 ${
                tab.active
                  ? 'border-terracotta text-charcoal'
                  : 'border-transparent text-muted hover:text-charcoal hover:border-border'
              }`}
            >
              {tab.label}
            </Link>
          ))}
          <span className="ml-auto flex-shrink-0 text-muted text-xs pb-3 pr-1">
            {productCount} products
          </span>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; href?: string }

export default function Breadcrumb({ crumbs, dark }: { crumbs: Crumb[]; dark?: boolean }) {
  const base    = dark ? 'text-gray-400' : 'text-gray-500';
  const chevron = dark ? 'text-gray-600' : 'text-gray-400';
  const active  = dark ? 'text-white font-medium' : 'text-foreground font-medium';
  const link    = dark ? 'hover:text-white transition-colors' : 'hover:text-sage transition-colors';

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1 text-sm min-w-0 ${base}`}>
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className={`flex items-center gap-1 ${isLast ? 'min-w-0' : 'flex-shrink-0'}`}>
            {i > 0 && <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 ${chevron}`} />}
            {crumb.href ? (
              <Link href={crumb.href} className={`flex-shrink-0 ${link}`}>{crumb.label}</Link>
            ) : (
              <span className={`truncate ${active}`}>{crumb.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

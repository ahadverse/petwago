import Breadcrumb from '@/components/ui/Breadcrumb';

interface Crumb { label: string; href?: string }

interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: Props) {
  return (
    <div className="bg-cream-warm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <Breadcrumb crumbs={breadcrumbs} />
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-muted mt-2 text-base max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}

import { clsx } from 'clsx';

type BadgeVariant = 'New' | 'Sale' | 'Vet Diet' | 'Premium' | 'Fresh' | 'default';

const variantStyles: Record<BadgeVariant, string> = {
  New: 'bg-transparent text-sage border border-sage',
  Sale: 'bg-terracotta text-cream border border-transparent',
  'Vet Diet': 'bg-charcoal text-cream border border-transparent',
  Premium: 'bg-transparent text-terracotta-dark border border-terracotta',
  Fresh: 'bg-sage/5 text-sage-dark border border-sage/20',
  default: 'bg-gray-100 text-gray-500 border border-transparent',
};

export default function Badge({ label, className }: { label: string; className?: string }) {
  const variant = (label as BadgeVariant) in variantStyles ? (label as BadgeVariant) : 'default';
  return (
    <span className={clsx('inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-semibold tracking-wide', variantStyles[variant], className)}>
      {label}
    </span>
  );
}

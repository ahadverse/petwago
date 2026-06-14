import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

const SOCIALS = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'TikTok',
    href: '#',
    path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.79 1.54V6.76a4.85 4.85 0 01-1.02-.07z',
  },
];

const SHOP_LINKS = [
  { label: 'Dog Food', href: '/dog/food' },
  { label: 'Cat Food', href: '/cat/food' },
  { label: 'Dog Supplies', href: '/dog/supplies' },
  { label: 'Cat Supplies', href: '/cat/supplies' },
];

const COMPANY_LINKS = [
  { label: 'About PetWago', href: '/about' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

const SUPPORT_LINKS = [
  { label: 'My Cart', href: '/cart' },
  { label: 'Checkout', href: '/checkout' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">

      {/* Newsletter band */}
      <div className="bg-sage-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Get 10% off your first order</h3>
            <p className="text-cream/70 mt-1.5 text-sm">Sign up for restock alerts, new arrivals, and care tips.</p>
          </div>
          <div className="lg:w-auto">
            <NewsletterForm compact />
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <span className="font-serif text-2xl font-bold text-cream tracking-tight">
                Pet<span className="text-terracotta">Wago</span>
              </span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-5">
              Premium pet food and supplies, hand-selected for quality, nutrition, and your pet&apos;s happiness.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm border border-cream/15 text-cream/60 hover:border-terracotta hover:text-terracotta flex items-center justify-center transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-cream font-bold mb-5 text-xs uppercase tracking-widest">Shop</h4>
            <ul className="space-y-3 text-sm">
              {SHOP_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-terracotta transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cream font-bold mb-5 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-terracotta transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-cream font-bold mb-5 text-xs uppercase tracking-widest">Support</h4>
            <ul className="space-y-3 text-sm">
              {SUPPORT_LINKS.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-terracotta transition-colors">{l.label}</Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cream/10 mt-3">support@petwago.com</li>
              <li>1-800-PETWAGO</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} PetWago.com · All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-and-conditions" className="hover:text-terracotta transition-colors">Terms</Link>
            <Link href="/refund-policy" className="hover:text-terracotta transition-colors">Privacy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

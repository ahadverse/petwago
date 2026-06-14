'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const FREE_SHIPPING_THRESHOLD = 49;
const SHIPPING_COST = 6.99;

export default function CartSummary() {
  const { cartTotal, cartCount } = useCart();
  const shipping = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const orderTotal = cartTotal + shipping;
  const toFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;

  return (
    <div className="bg-white rounded-sm border border-border p-6 sticky top-24">
      <h2 className="font-serif text-lg font-bold text-charcoal mb-5">Order Summary</h2>

      {/* Free shipping progress */}
      {toFreeShipping > 0 && (
        <div className="mb-5 p-3 bg-sage/10 rounded-sm text-sm text-sage-dark">
          Add <strong>${toFreeShipping.toFixed(2)}</strong> more for free shipping!
          <div className="mt-2 h-1.5 bg-sage/15 rounded-sm">
            <div
              className="h-1.5 bg-terracotta rounded-sm transition-all"
              style={{ width: `${Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}
      {toFreeShipping <= 0 && (
        <div className="mb-5 p-3 bg-emerald-50 rounded-sm text-sm text-emerald-600 font-medium">
          You qualify for free shipping!
        </div>
      )}

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-muted">
          <span>Subtotal ({cartCount} item{cartCount !== 1 ? 's' : ''})</span>
          <span className="font-medium text-foreground">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-muted">
          <span>Shipping</span>
          <span className={`font-medium ${shipping === 0 ? 'text-emerald-600' : 'text-foreground'}`}>
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-muted">
          <span>Tax</span>
          <span className="font-medium text-foreground">Calculated at checkout</span>
        </div>
        <div className="pt-3 border-t border-border flex justify-between text-base font-bold text-charcoal">
          <span className="font-serif">Order Total</span>
          <span className="font-serif text-terracotta-dark">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      <Link href="/checkout" className="block mt-6">
        <Button size="lg" fullWidth>
          Proceed to Checkout →
        </Button>
      </Link>

      <Link href="/" className="block mt-3 text-center text-sm text-muted hover:text-sage transition-colors">
        ← Continue Shopping
      </Link>

      {/* Accepted payment icons */}
      <div className="mt-5 pt-4 border-t border-border">
        <p className="text-xs text-muted text-center mb-2">Secure payment</p>
        <div className="flex justify-center gap-2 flex-wrap">
          {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(p => (
            <span key={p} className="bg-cream-warm text-muted text-xs font-semibold px-2.5 py-1 rounded-sm border border-border">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

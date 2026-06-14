'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
import { CheckCircle, Package, Clock, Mail, XCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

type Status = 'checking' | 'succeeded' | 'processing' | 'failed' | 'no-payment-info';

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [status, setStatus] = useState<Status>('checking');
  const orderNumber = searchParams.get('order');

  useEffect(() => {
    const clientSecret = searchParams.get('payment_intent_client_secret');

    if (!clientSecret) {
      const inPageSuccess = searchParams.get('status') === 'success';
      setStatus(inPageSuccess ? 'succeeded' : 'no-payment-info');
      return;
    }

    const paymentIntentId = clientSecret.split('_secret_')[0];

    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!).then(async (stripe) => {
      if (!stripe) return;
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      switch (paymentIntent?.status) {
        case 'succeeded':
          await fetch(`/api/orders/by-payment-intent/${paymentIntentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'paid' }),
          });
          clearCart();
          setStatus('succeeded');
          break;
        case 'processing':
          await fetch(`/api/orders/by-payment-intent/${paymentIntentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'processing' }),
          });
          clearCart();
          setStatus('processing');
          break;
        default:
          await fetch(`/api/orders/by-payment-intent/${paymentIntentId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'failed' }),
          });
          setStatus('failed');
      }
    });
  }, [searchParams, clearCart]);

  if (status === 'checking') {
    return (
      <main>
        <div className="bg-cream min-h-screen flex items-center justify-center">
          <p className="text-sm text-muted">Confirming your order…</p>
        </div>
      </main>
    );
  }

  if (status === 'failed') {
    return (
      <main>
        <section className="bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cream rounded-sm border border-cream/20 mb-6">
              <XCircle className="w-11 h-11 text-red-600" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-3">
              Payment Failed
            </h1>
            <p className="text-cream/60 text-lg mb-2 max-w-xl mx-auto">
              Something went wrong with your payment. Please try again.
            </p>
          </div>
        </section>

        <div className="bg-cream min-h-screen">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <Link
              href="/checkout"
              className="inline-block bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-8 py-3 rounded-sm text-sm transition-colors duration-200"
            >
              Back to Checkout
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (status === 'no-payment-info') {
    return (
      <main>
        <div className="bg-cream min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
          <p className="text-sm text-muted mb-6">No recent order found.</p>
          <Link
            href="/"
            className="bg-terracotta hover:bg-terracotta-dark text-cream font-semibold px-8 py-3 rounded-sm text-sm transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Charcoal hero */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-cream rounded-sm border border-cream/20 mb-6">
            <CheckCircle className="w-11 h-11 text-emerald-600" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-3">
            {status === 'processing' ? 'Order Received!' : 'Thank You for Your Order!'}
          </h1>
          <p className="text-cream/60 text-lg mb-2 max-w-xl mx-auto">
            {status === 'processing'
              ? "Your payment is processing. We'll send a confirmation to your email shortly."
              : "Your pets are going to love it! We're already preparing your goodies. 🐾"}
          </p>
          {orderNumber && (
            <span className="inline-block bg-terracotta text-cream font-semibold px-5 py-1.5 rounded-sm text-sm mt-2">
              Order #{orderNumber}
            </span>
          )}
        </div>
      </section>

      {/* Cream content area */}
      <div className="bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Status cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Mail, title: 'Confirmation Sent', desc: 'Check your email for order details' },
              { icon: Package, title: 'Order Processing', desc: "We're preparing your order now" },
              { icon: Clock, title: 'Estimated Delivery', desc: '3–5 business days' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-sm border border-border p-6 text-center">
                <div className="w-12 h-12 border border-sage/30 bg-sage/5 rounded-sm flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-sage" />
                </div>
                <p className="font-bold text-foreground text-sm">{title}</p>
                <p className="text-xs text-muted mt-1">{desc}</p>
              </div>
            ))}
          </div>

          {/* What happens next */}
          <div className="bg-white rounded-sm border border-border p-7 mb-8">
            <h2 className="font-serif font-bold text-charcoal text-lg mb-4">What happens next?</h2>
            <ul className="space-y-3">
              {[
                "You'll receive an order confirmation email shortly",
                'Your order will be packed and dispatched within 1 business day',
                "You'll receive a tracking number once your order ships",
                'Delivery expected in 3–5 business days',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <span className="w-6 h-6 bg-sage rounded-sm text-cream text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-charcoal hover:bg-charcoal/90 text-cream font-semibold px-8 py-3 rounded-sm text-sm text-center transition-colors duration-200"
            >
              Continue Shopping 🐾
            </Link>
            <Link
              href="/refund-policy"
              className="bg-white hover:bg-sage/5 hover:border-sage text-foreground border border-border font-semibold px-8 py-3 rounded-sm text-sm text-center transition-colors"
            >
              Return Policy
            </Link>
          </div>

          <p className="text-sm text-muted text-center mt-8">
            Questions? Email us at{' '}
            <a href="mailto:support@petwago.com" className="text-sage hover:text-sage-dark hover:underline font-medium">
              support@petwago.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

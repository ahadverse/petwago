'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export interface ShippingInfo {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface PaymentFormProps {
  clientSecret: string | null;
  orderNumber: string | null;
  error: string | null;
  onBack: () => void;
}

export default function PaymentForm({ clientSecret, orderNumber, error, onBack }: PaymentFormProps) {
  if (error) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-red-600">{error}</p>
        <button onClick={onBack} className="text-sm text-muted hover:text-foreground transition-colors">
          ← Back to information
        </button>
      </div>
    );
  }

  if (!clientSecret || !orderNumber) {
    return <p className="text-sm text-muted">Loading payment options…</p>;
  }

  const paymentIntentId = clientSecret.split('_secret_')[0];

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#1B2A4A',
            colorBackground: '#ffffff',
            colorText: '#1B2A4A',
            colorDanger: '#dc2626',
            fontFamily: 'inherit',
            borderRadius: '2px',
          },
          rules: {
            '.Input': {
              border: '1px solid #E4DDD3',
              padding: '12px 16px',
            },
            '.Input:focus': {
              border: '1px solid #1B2A4A',
              boxShadow: 'none',
            },
            '.Label': {
              fontSize: '13px',
              color: '#8A8378',
            },
          },
        },
      }}
    >
      <CheckoutForm onBack={onBack} paymentIntentId={paymentIntentId} orderNumber={orderNumber} />
    </Elements>
  );
}

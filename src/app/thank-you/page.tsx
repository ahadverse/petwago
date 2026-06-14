import { Suspense } from 'react';
import ThankYouContent from './ThankYouContent';

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-sm text-muted">Loading…</p></div>}>
      <ThankYouContent />
    </Suspense>
  );
}

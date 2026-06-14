'use client';

import { useEffect } from 'react';
import { X, Apple } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useAuth } from '@/context/AuthContext';

export default function LoginModal() {
  const { isLoginModalOpen, closeLoginModal } = useAuth();

  useEffect(() => {
    if (!isLoginModalOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLoginModal();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoginModalOpen, closeLoginModal]);

  if (!isLoginModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh] px-4"
      style={{ background: 'rgba(0,0,0,0.6)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLoginModal();
      }}
    >
      <div
        className="w-full max-w-md bg-cream rounded-sm border border-border p-8"
        style={{ animation: 'fadeInDown 0.2s ease-out' }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl font-bold text-charcoal">Sign In</h2>
          <button
            onClick={closeLoginModal}
            className="text-muted hover:text-charcoal transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <p className="text-sm text-muted mb-6">
          Sign in to track your orders and check out faster.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center gap-3 border border-border bg-white text-foreground text-sm font-semibold rounded-sm px-6 py-3 hover:bg-sage/5 hover:border-sage transition-colors cursor-pointer"
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            onClick={() => signIn('apple')}
            className="w-full flex items-center justify-center gap-3 bg-charcoal text-cream text-sm font-semibold rounded-sm px-6 py-3 hover:bg-charcoal/90 transition-colors cursor-pointer"
          >
            <Apple size={18} />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.81.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.03l3-2.33z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58z" />
    </svg>
  );
}

import { clsx } from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
        {
          'bg-sage hover:bg-sage-dark text-cream focus:ring-sage': variant === 'primary',
          'bg-terracotta hover:bg-terracotta-dark text-cream focus:ring-terracotta': variant === 'secondary',
          'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream focus:ring-charcoal': variant === 'outline',
          'text-foreground hover:bg-sage/10 focus:ring-gray-300': variant === 'ghost',
          'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500': variant === 'danger',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-5 py-2.5 text-base': size === 'md',
          'px-7 py-3.5 text-lg': size === 'lg',
        },
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading…
        </>
      ) : children}
    </button>
  );
}

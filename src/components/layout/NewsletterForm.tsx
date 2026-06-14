'use client';

export default function NewsletterForm({ compact }: { compact?: boolean }) {
  if (compact) {
    return (
      <form className="flex flex-col sm:flex-row gap-2" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-2.5 rounded-sm text-sm border border-white/20 bg-white/10 text-cream placeholder-cream/40 focus:outline-none focus:ring-2 focus:ring-terracotta/50"
        />
        <button
          type="submit"
          className="bg-terracotta hover:bg-terracotta-dark text-cream font-bold px-6 py-2.5 rounded-sm text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <form className="flex gap-2 w-full sm:w-auto" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 sm:w-64 px-4 py-3 rounded-sm text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-sage/40 bg-white"
      />
      <button
        type="submit"
        className="bg-sage hover:bg-sage-dark text-cream font-bold px-6 py-3 rounded-sm text-sm transition-colors duration-200 whitespace-nowrap cursor-pointer"
      >
        Subscribe
      </button>
    </form>
  );
}

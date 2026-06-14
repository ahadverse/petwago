"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SeedButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSeed() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      if (!res.ok) throw new Error("Seed failed");
      router.refresh();
    } catch {
      setError("Failed to seed data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-background border border-border rounded-xl p-8 text-center">
      <h2 className="text-lg font-semibold text-dark mb-1">No data yet</h2>
      <p className="text-sm text-muted mb-4">Seed the database with sample orders and transactions to get started.</p>
      <button
        onClick={handleSeed}
        disabled={loading}
        className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
      >
        {loading ? "Seeding..." : "Seed Sample Data"}
      </button>
      {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
    </div>
  );
}

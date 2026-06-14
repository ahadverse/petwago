"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ORDER_STATUSES, OrderStatus } from "@petbackend/models/orderStatus";

export default function OrderStatusUpdater({ orderId, currentStatus }: { orderId: string; currentStatus: OrderStatus }) {
  const router = useRouter();
  const [status, setStatus] = useState<OrderStatus>(currentStatus);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleChange(next: OrderStatus) {
    setStatus(next);
    setSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      router.refresh();
    } catch {
      setError("Could not update status. Please try again.");
      setStatus(currentStatus);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div>
      <label htmlFor="status" className="block text-sm font-medium text-dark mb-1">
        Order Status
      </label>
      <select
        id="status"
        value={status}
        disabled={saving}
        onChange={(e) => handleChange(e.target.value as OrderStatus)}
        className="rounded-lg border border-border px-3 py-2 text-sm capitalize focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60"
      >
        {ORDER_STATUSES.map((s) => (
          <option key={s} value={s} className="capitalize">
            {s}
          </option>
        ))}
      </select>
      {saving && <span className="ml-2 text-xs text-muted">Saving...</span>}
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MoreVertical, Check, Loader2 } from "lucide-react";
import { ORDER_STATUSES, OrderStatus } from "@petbackend/models/orderStatus";

export default function OrderRowActions({ orderId, currentStatus }: { orderId: string; currentStatus: OrderStatus }) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [savingStatus, setSavingStatus] = useState<OrderStatus | null>(null);
  const [error, setError] = useState("");
  const saving = savingStatus !== null;

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  async function handleSelect(status: OrderStatus) {
    if (status === currentStatus) {
      setOpen(false);
      return;
    }

    setSavingStatus(status);
    setError("");

    try {
      const res = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      setOpen(false);
      router.refresh();
    } catch {
      setError("Could not update status.");
    } finally {
      setSavingStatus(null);
    }
  }

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={saving}
        className="flex items-center justify-center w-8 h-8 rounded-lg text-muted hover:text-dark hover:bg-light transition-colors disabled:opacity-60"
        aria-label="Order actions"
      >
        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <MoreVertical className="w-4 h-4" />}
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-border p-1 z-10">
          <p className="px-3 py-1.5 text-xs font-semibold text-muted">Set status</p>
          {ORDER_STATUSES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => handleSelect(s)}
              disabled={saving}
              className="w-full flex items-center justify-between gap-2 text-left px-3 py-1.5 rounded-lg text-sm capitalize text-dark hover:bg-light transition-colors disabled:opacity-60"
            >
              {s}
              {s === savingStatus ? (
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              ) : (
                s === currentStatus && <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
          {error && <p className="px-3 py-1.5 text-xs text-red-600">{error}</p>}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { listTransactions } from "@petbackend/transactions";
import { TRANSACTION_STATUSES, TransactionStatus } from "@petbackend/models/Transaction";
import StatusBadge from "@/components/admin/StatusBadge";

export const dynamic = "force-dynamic";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function formatDate(date: Date | string) {
  return new Date(date).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

interface PageProps {
  searchParams: Promise<{ page?: string; status?: string }>;
}

export default async function AdminTransactionsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page ?? "1") || 1;
  const status = TRANSACTION_STATUSES.includes(params.status as TransactionStatus)
    ? (params.status as TransactionStatus)
    : undefined;

  const { transactions, total, pages } = await listTransactions({ page, status, limit: 20 });

  function buildHref(overrides: Record<string, string | undefined>) {
    const next = new URLSearchParams();
    if (status) next.set("status", status);
    if (page > 1) next.set("page", String(page));

    for (const [key, value] of Object.entries(overrides)) {
      if (value === undefined) next.delete(key);
      else next.set(key, value);
    }

    const qs = next.toString();
    return qs ? `/admin/transactions?${qs}` : "/admin/transactions";
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark">Transactions</h1>
        <p className="text-sm text-muted">{total} transaction{total === 1 ? "" : "s"} total</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={buildHref({ status: undefined, page: undefined })}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
            !status ? "bg-primary text-white border-primary" : "border-border text-muted hover:bg-light"
          }`}
        >
          All
        </Link>
        {TRANSACTION_STATUSES.map((s) => (
          <Link
            key={s}
            href={buildHref({ status: s, page: undefined })}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border capitalize ${
              status === s ? "bg-primary text-white border-primary" : "border-border text-muted hover:bg-light"
            }`}
          >
            {s}
          </Link>
        ))}
      </div>

      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted border-b border-border">
                <th className="px-5 py-3 font-medium">Order</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Method</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={String(tx._id)} className="border-b border-border last:border-0 hover:bg-light">
                  <td className="px-5 py-3">
                    <Link href={`/admin/orders/${String(tx.order)}`} className="text-primary font-medium hover:underline">
                      {tx.orderNumber}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-muted">{formatDate(tx.createdAt)}</td>
                  <td className="px-5 py-3 text-dark">
                    {tx.cardBrand ? `${tx.cardBrand} •••• ${tx.last4}` : tx.method}
                  </td>
                  <td className="px-5 py-3">
                    <StatusBadge status={tx.status} />
                  </td>
                  <td className="px-5 py-3 text-right font-medium text-dark">{formatCurrency(tx.amount)}</td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-muted">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {pages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-border text-sm">
            <span className="text-muted">
              Page {page} of {pages}
            </span>
            <div className="flex gap-2">
              <Link
                href={buildHref({ page: String(Math.max(1, page - 1)) })}
                className={`px-3 py-1.5 rounded-lg border border-border ${page <= 1 ? "pointer-events-none opacity-40" : "hover:bg-light"}`}
              >
                Previous
              </Link>
              <Link
                href={buildHref({ page: String(Math.min(pages, page + 1)) })}
                className={`px-3 py-1.5 rounded-lg border border-border ${page >= pages ? "pointer-events-none opacity-40" : "hover:bg-light"}`}
              >
                Next
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

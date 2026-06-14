import Link from "next/link";
import { listOrders } from "@petbackend/orders";
import { ORDER_STATUSES, OrderStatus } from "@petbackend/models/Order";
import StatusBadge from "@/components/admin/StatusBadge";
import OrderRowActions from "@/components/admin/OrderRowActions";

export const dynamic = "force-dynamic";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

interface PageProps {
  searchParams: Promise<{ page?: string; status?: string; search?: string }>;
}

export default async function AdminOrdersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page ?? "1") || 1;
  const status = ORDER_STATUSES.includes(params.status as OrderStatus) ? (params.status as OrderStatus) : undefined;
  const search = params.search?.trim() || undefined;

  const { orders, total, pages } = await listOrders({ page, status, search, limit: 20 });

  function buildHref(overrides: Record<string, string | undefined>) {
    const next = new URLSearchParams();
    if (status) next.set("status", status);
    if (search) next.set("search", search);
    if (page > 1) next.set("page", String(page));

    for (const [key, value] of Object.entries(overrides)) {
      if (value === undefined) next.delete(key);
      else next.set(key, value);
    }

    const qs = next.toString();
    return qs ? `/admin/orders?${qs}` : "/admin/orders";
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark">Orders</h1>
        <p className="text-sm text-muted">{total} order{total === 1 ? "" : "s"} total</p>
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
        {ORDER_STATUSES.map((s) => (
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

      <form action="/admin/orders" method="get" className="flex gap-2">
        {status && <input type="hidden" name="status" value={status} />}
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search by order #, name, or email"
          className="w-full max-w-sm rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="px-4 py-2 rounded-lg bg-dark text-white text-sm font-medium hover:bg-dark/90">
          Search
        </button>
      </form>

      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted border-b border-border">
                <th className="px-5 py-3 font-medium">Order</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Items</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Total</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={String(order._id)} className="border-b border-border last:border-0 hover:bg-light">
                  <td className="px-5 py-3">
                    <Link href={`/admin/orders/${order._id}`} className="text-primary font-medium hover:underline">
                      {order.orderNumber}
                    </Link>
                  </td>
                  <td className="px-5 py-3">
                    <div className="text-dark">{order.customerName}</div>
                    <div className="text-xs text-muted">{order.customerEmail}</div>
                  </td>
                  <td className="px-5 py-3 text-muted">{formatDate(order.createdAt)}</td>
                  <td className="px-5 py-3 text-muted">{order.items.reduce((sum, i) => sum + i.quantity, 0)}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-5 py-3 text-right font-medium text-dark">{formatCurrency(order.total)}</td>
                  <td className="px-5 py-3 text-right">
                    <OrderRowActions orderId={String(order._id)} currentStatus={order.status} />
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-muted">
                    No orders found.
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

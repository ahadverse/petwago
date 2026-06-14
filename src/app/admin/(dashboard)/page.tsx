import Link from "next/link";
import { DollarSign, ShoppingBag, Users, Clock } from "lucide-react";
import { getDashboardStats, getRevenueByDay } from "@petbackend/orders";
import StatusBadge from "@/components/admin/StatusBadge";
import RevenueChart from "@/components/admin/RevenueChart";
import SeedButton from "@/components/admin/SeedButton";

export const dynamic = "force-dynamic";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default async function AdminDashboardPage() {
  const [stats, revenue] = await Promise.all([getDashboardStats(), getRevenueByDay(14)]);

  const cards = [
    { label: "Total Revenue", value: formatCurrency(stats.totalRevenue), icon: DollarSign, color: "bg-green-100 text-green-700" },
    { label: "Total Orders", value: stats.totalOrders.toLocaleString(), icon: ShoppingBag, color: "bg-blue-100 text-blue-700" },
    { label: "Total Customers", value: stats.totalCustomers.toLocaleString(), icon: Users, color: "bg-purple-100 text-purple-700" },
    { label: "Pending Orders", value: stats.pendingOrders.toLocaleString(), icon: Clock, color: "bg-yellow-100 text-yellow-700" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark">Dashboard</h1>
        <p className="text-sm text-muted">Overview of your store&apos;s performance</p>
      </div>

      {stats.totalOrders === 0 && <SeedButton />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="bg-background border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted">{card.label}</span>
              <span className={`p-2 rounded-lg ${card.color}`}>
                <card.icon className="w-4 h-4" />
              </span>
            </div>
            <div className="text-2xl font-bold text-dark">{card.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-background border border-border rounded-xl p-5">
        <h2 className="text-lg font-semibold text-dark mb-4">Revenue (last 14 days)</h2>
        <RevenueChart data={revenue} />
      </div>

      <div className="bg-background border border-border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-lg font-semibold text-dark">Recent Orders</h2>
          <Link href="/admin/orders" className="text-sm text-primary font-medium hover:underline">
            View all
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted border-b border-border">
                <th className="px-5 py-3 font-medium">Order</th>
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentOrders.map((order) => (
                <tr key={String(order._id)} className="border-b border-border last:border-0 hover:bg-light">
                  <td className="px-5 py-3">
                    <Link href={`/admin/orders/${order._id}`} className="text-primary font-medium hover:underline">
                      {order.orderNumber}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-dark">{order.customerName}</td>
                  <td className="px-5 py-3 text-muted">{formatDate(order.createdAt)}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-5 py-3 text-right font-medium text-dark">{formatCurrency(order.total)}</td>
                </tr>
              ))}
              {stats.recentOrders.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-muted">
                    No orders yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

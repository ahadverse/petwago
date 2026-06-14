import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getOrderById } from "@petbackend/orders";
import StatusBadge from "@/components/admin/StatusBadge";
import OrderStatusUpdater from "@/components/admin/OrderStatusUpdater";

export const dynamic = "force-dynamic";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function formatDate(date: Date | string) {
  return new Date(date).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminOrderDetailPage({ params }: PageProps) {
  const { id } = await params;
  const order = await getOrderById(id);

  if (!order) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/orders" className="p-2 rounded-lg border border-border hover:bg-light">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-dark">{order.orderNumber}</h1>
          <p className="text-sm text-muted">Placed on {formatDate(order.createdAt)}</p>
        </div>
        <div className="ml-auto">
          <StatusBadge status={order.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-background border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <h2 className="text-lg font-semibold text-dark">Items</h2>
            </div>
            <div className="divide-y divide-border">
              {order.items.map((item) => (
                <div key={item.productId} className="flex items-center gap-4 px-5 py-4">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-light shrink-0">
                    <Image src={item.productImage} alt={item.productName} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-dark font-medium truncate">{item.productName}</div>
                    <div className="text-sm text-muted">
                      {formatCurrency(item.unitPrice)} &times; {item.quantity}
                    </div>
                  </div>
                  <div className="font-medium text-dark">{formatCurrency(item.unitPrice * item.quantity)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border rounded-xl p-5">
            <h2 className="text-lg font-semibold text-dark mb-3">Shipping Address</h2>
            <p className="text-sm text-dark">{order.customerName}</p>
            <p className="text-sm text-muted">
              {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
              {order.shippingAddress.zip}, {order.shippingAddress.country}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background border border-border rounded-xl p-5">
            <h2 className="text-lg font-semibold text-dark mb-4">Order Status</h2>
            <OrderStatusUpdater orderId={String(order._id)} currentStatus={order.status} />
          </div>

          <div className="bg-background border border-border rounded-xl p-5">
            <h2 className="text-lg font-semibold text-dark mb-3">Customer</h2>
            <p className="text-sm text-dark">{order.customerName}</p>
            <p className="text-sm text-muted">{order.customerEmail}</p>
          </div>

          <div className="bg-background border border-border rounded-xl p-5 space-y-2">
            <h2 className="text-lg font-semibold text-dark mb-1">Summary</h2>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="text-dark">{formatCurrency(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Shipping</span>
              <span className="text-dark">{order.shipping === 0 ? "Free" : formatCurrency(order.shipping)}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold pt-2 border-t border-border">
              <span className="text-dark">Total</span>
              <span className="text-dark">{formatCurrency(order.total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

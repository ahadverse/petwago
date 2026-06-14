import { Types } from 'mongoose';
import { connectDB } from './db';
import { Order, OrderDoc, OrderStatus } from './models/Order';

export interface ListOrdersParams {
  page?: number;
  limit?: number;
  status?: OrderStatus;
  search?: string;
}

export interface ListOrdersResult {
  orders: OrderDoc[];
  total: number;
  page: number;
  pages: number;
}

export async function listOrders(params: ListOrdersParams = {}): Promise<ListOrdersResult> {
  await connectDB();

  const page = params.page && params.page > 0 ? params.page : 1;
  const limit = params.limit && params.limit > 0 ? params.limit : 20;

  const query: Record<string, unknown> = {};
  if (params.status) {
    query.status = params.status;
  }
  if (params.search) {
    const regex = new RegExp(params.search, 'i');
    query.$or = [{ orderNumber: regex }, { customerName: regex }, { customerEmail: regex }];
  }

  const [orders, total] = await Promise.all([
    Order.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean<OrderDoc[]>(),
    Order.countDocuments(query),
  ]);

  return {
    orders,
    total,
    page,
    pages: Math.max(1, Math.ceil(total / limit)),
  };
}

export async function getOrderById(id: string): Promise<OrderDoc | null> {
  await connectDB();

  if (!Types.ObjectId.isValid(id)) return null;

  return Order.findById(id).lean<OrderDoc | null>();
}

export async function updateOrderStatus(id: string, status: OrderStatus): Promise<OrderDoc | null> {
  await connectDB();

  if (!Types.ObjectId.isValid(id)) return null;

  return Order.findByIdAndUpdate(id, { status }, { new: true }).lean<OrderDoc | null>();
}

export interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  totalCustomers: number;
  pendingOrders: number;
  ordersByStatus: Record<OrderStatus, number>;
  recentOrders: OrderDoc[];
}

export async function getDashboardStats(): Promise<DashboardStats> {
  await connectDB();

  const [totalOrders, totalRevenueAgg, customerEmails, statusCounts, recentOrders, pendingOrders] =
    await Promise.all([
      Order.countDocuments({}),
      Order.aggregate([{ $group: { _id: null, total: { $sum: '$total' } } }]),
      Order.distinct('customerEmail'),
      Order.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
      Order.find({}).sort({ createdAt: -1 }).limit(5).lean<OrderDoc[]>(),
      Order.countDocuments({ status: 'pending' }),
    ]);

  const ordersByStatus: Record<OrderStatus, number> = {
    pending: 0,
    processing: 0,
    shipped: 0,
    delivered: 0,
    cancelled: 0,
  };
  for (const entry of statusCounts as { _id: OrderStatus; count: number }[]) {
    ordersByStatus[entry._id] = entry.count;
  }

  return {
    totalOrders,
    totalRevenue: totalRevenueAgg[0]?.total ?? 0,
    totalCustomers: customerEmails.length,
    pendingOrders,
    ordersByStatus,
    recentOrders,
  };
}

export interface RevenuePoint {
  date: string;
  revenue: number;
  orders: number;
}

export async function getRevenueByDay(days = 14): Promise<RevenuePoint[]> {
  await connectDB();

  const since = new Date();
  since.setDate(since.getDate() - (days - 1));
  since.setHours(0, 0, 0, 0);

  const results = await Order.aggregate([
    { $match: { createdAt: { $gte: since } } },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        revenue: { $sum: '$total' },
        orders: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  const byDate = new Map<string, { revenue: number; orders: number }>();
  for (const r of results as { _id: string; revenue: number; orders: number }[]) {
    byDate.set(r._id, { revenue: r.revenue, orders: r.orders });
  }

  const points: RevenuePoint[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(since);
    d.setDate(d.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    const entry = byDate.get(key);
    points.push({ date: key, revenue: entry?.revenue ?? 0, orders: entry?.orders ?? 0 });
  }

  return points;
}

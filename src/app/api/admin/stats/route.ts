import { getDashboardStats, getRevenueByDay } from '@petbackend/orders';

export async function GET() {
  const [stats, revenue] = await Promise.all([getDashboardStats(), getRevenueByDay(14)]);

  return Response.json({ ...stats, revenue });
}

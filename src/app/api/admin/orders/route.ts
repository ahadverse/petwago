import { type NextRequest } from 'next/server';
import { listOrders } from '@petbackend/orders';
import { ORDER_STATUSES, OrderStatus } from '@petbackend/models/Order';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = Number(searchParams.get('page') ?? '1');
  const limit = Number(searchParams.get('limit') ?? '20');
  const statusParam = searchParams.get('status');
  const search = searchParams.get('search') ?? undefined;

  const status = ORDER_STATUSES.includes(statusParam as OrderStatus) ? (statusParam as OrderStatus) : undefined;

  const result = await listOrders({ page, limit, status, search });

  return Response.json(result);
}

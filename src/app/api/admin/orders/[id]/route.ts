import { getOrderById, updateOrderStatus } from '@petbackend/orders';
import { ORDER_STATUSES, OrderStatus } from '@petbackend/models/Order';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const order = await getOrderById(id);
  if (!order) {
    return Response.json({ error: 'Order not found' }, { status: 404 });
  }

  return Response.json(order);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const status = body?.status;

  if (!ORDER_STATUSES.includes(status)) {
    return Response.json({ error: 'Invalid status' }, { status: 400 });
  }

  const order = await updateOrderStatus(id, status as OrderStatus);
  if (!order) {
    return Response.json({ error: 'Order not found' }, { status: 404 });
  }

  return Response.json(order);
}

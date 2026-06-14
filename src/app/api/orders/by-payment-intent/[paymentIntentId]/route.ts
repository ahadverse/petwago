import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@petbackend/db';
import { Order, PaymentStatus } from '@petbackend/models/Order';
import { Transaction, TransactionStatus } from '@petbackend/models/Transaction';

const TRANSACTION_STATUS_MAP: Record<PaymentStatus, TransactionStatus> = {
  pending: 'pending',
  paid: 'succeeded',
  processing: 'processing',
  failed: 'failed',
};

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ paymentIntentId: string }> }
) {
  try {
    const { paymentIntentId } = await params;
    const { status } = (await request.json()) as { status?: PaymentStatus };

    if (!status || !TRANSACTION_STATUS_MAP[status]) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    await connectDB();

    const order = await Order.findOneAndUpdate(
      { paymentIntentId },
      { paymentStatus: status },
      { new: true }
    );
    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    await Transaction.findOneAndUpdate(
      { paymentIntentId },
      { status: TRANSACTION_STATUS_MAP[status] }
    );

    return NextResponse.json({ ok: true, orderNumber: order.orderNumber });
  } catch (err) {
    console.error('Error updating order payment status:', err);
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}

import { type NextRequest } from 'next/server';
import { listTransactions } from '@petbackend/transactions';
import { TRANSACTION_STATUSES, TransactionStatus } from '@petbackend/models/Transaction';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = Number(searchParams.get('page') ?? '1');
  const limit = Number(searchParams.get('limit') ?? '20');
  const statusParam = searchParams.get('status');
  const search = searchParams.get('search') ?? undefined;

  const status = TRANSACTION_STATUSES.includes(statusParam as TransactionStatus)
    ? (statusParam as TransactionStatus)
    : undefined;

  const result = await listTransactions({ page, limit, status, search });

  return Response.json(result);
}

import { connectDB } from './db';
import { Transaction, TransactionDoc, TransactionStatus } from './models/Transaction';

export interface ListTransactionsParams {
  page?: number;
  limit?: number;
  status?: TransactionStatus;
  search?: string;
}

export interface ListTransactionsResult {
  transactions: TransactionDoc[];
  total: number;
  page: number;
  pages: number;
}

export async function listTransactions(params: ListTransactionsParams = {}): Promise<ListTransactionsResult> {
  await connectDB();

  const page = params.page && params.page > 0 ? params.page : 1;
  const limit = params.limit && params.limit > 0 ? params.limit : 20;

  const query: Record<string, unknown> = {};
  if (params.status) {
    query.status = params.status;
  }
  if (params.search) {
    const regex = new RegExp(params.search, 'i');
    query.$or = [{ orderNumber: regex }, { method: regex }, { cardBrand: regex }];
  }

  const [transactions, total] = await Promise.all([
    Transaction.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean<TransactionDoc[]>(),
    Transaction.countDocuments(query),
  ]);

  return {
    transactions,
    total,
    page,
    pages: Math.max(1, Math.ceil(total / limit)),
  };
}

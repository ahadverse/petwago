import { Schema, model, models, Types } from 'mongoose';

export const TRANSACTION_STATUSES = ['succeeded', 'failed', 'refunded', 'pending', 'processing'] as const;
export type TransactionStatus = (typeof TRANSACTION_STATUSES)[number];

export interface TransactionDoc {
  _id: Types.ObjectId;
  order: Types.ObjectId;
  orderNumber: string;
  amount: number;
  method: string;
  cardBrand?: string;
  last4?: string;
  status: TransactionStatus;
  paymentIntentId?: string;
  currency?: string;
  paymentMethodTypes?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema = new Schema<TransactionDoc>(
  {
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    orderNumber: { type: String, required: true },
    amount: { type: Number, required: true },
    method: { type: String, required: true },
    cardBrand: { type: String },
    last4: { type: String },
    status: { type: String, enum: TRANSACTION_STATUSES, default: 'succeeded' },
    paymentIntentId: { type: String, unique: true, sparse: true },
    currency: { type: String, default: 'usd' },
    paymentMethodTypes: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const Transaction = models.Transaction || model<TransactionDoc>('Transaction', TransactionSchema);

import { Schema, model, models, Types } from 'mongoose';
import { ORDER_STATUSES, PAYMENT_STATUSES } from './orderStatus';
import type { OrderStatus, PaymentStatus } from './orderStatus';

export { ORDER_STATUSES, PAYMENT_STATUSES };
export type { OrderStatus, PaymentStatus };

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  unitPrice: number;
  quantity: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface OrderDoc {
  _id: Types.ObjectId;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
  status: OrderStatus;
  subtotal: number;
  shipping: number;
  total: number;
  user?: Types.ObjectId;
  paymentIntentId?: string;
  paymentStatus?: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<OrderItem>(
  {
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    productImage: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const ShippingAddressSchema = new Schema<ShippingAddress>(
  {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false }
);

const OrderSchema = new Schema<OrderDoc>(
  {
    orderNumber: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    shippingAddress: { type: ShippingAddressSchema, required: true },
    items: { type: [OrderItemSchema], required: true },
    status: { type: String, enum: ORDER_STATUSES, default: 'pending' },
    subtotal: { type: Number, required: true },
    shipping: { type: Number, required: true },
    total: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    paymentIntentId: { type: String, unique: true, sparse: true },
    paymentStatus: { type: String, enum: PAYMENT_STATUSES, default: 'pending' },
  },
  { timestamps: true }
);

export const Order = models.Order || model<OrderDoc>('Order', OrderSchema);

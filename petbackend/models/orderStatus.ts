export const ORDER_STATUSES = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const PAYMENT_STATUSES = ['pending', 'paid', 'processing', 'failed'] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

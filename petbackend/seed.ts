import { connectDB } from './db';
import { Order, OrderItem, OrderStatus, ShippingAddress } from './models/Order';
import { Transaction, TransactionStatus } from './models/Transaction';
import { products } from '@/data/seed';

const CUSTOMERS: { name: string; email: string; address: ShippingAddress }[] = [
  { name: 'Olivia Bennett', email: 'olivia.bennett@example.com', address: { address: '482 Maple Street', city: 'Austin', state: 'TX', zip: '78701', country: 'United States' } },
  { name: 'Liam Carter', email: 'liam.carter@example.com', address: { address: '127 Birchwood Ave', city: 'Denver', state: 'CO', zip: '80202', country: 'United States' } },
  { name: 'Sophia Nguyen', email: 'sophia.nguyen@example.com', address: { address: '900 Lakeshore Dr', city: 'Chicago', state: 'IL', zip: '60601', country: 'United States' } },
  { name: 'Ethan Brooks', email: 'ethan.brooks@example.com', address: { address: '55 Sunset Blvd', city: 'Los Angeles', state: 'CA', zip: '90028', country: 'United States' } },
  { name: 'Ava Martinez', email: 'ava.martinez@example.com', address: { address: '310 Pine Ridge Rd', city: 'Seattle', state: 'WA', zip: '98101', country: 'United States' } },
  { name: 'Noah Williams', email: 'noah.williams@example.com', address: { address: '78 Riverside Pkwy', city: 'Atlanta', state: 'GA', zip: '30301', country: 'United States' } },
  { name: 'Isabella Davis', email: 'isabella.davis@example.com', address: { address: '215 Cedar Lane', city: 'Miami', state: 'FL', zip: '33101', country: 'United States' } },
  { name: 'Mason Thompson', email: 'mason.thompson@example.com', address: { address: '64 Hilltop Court', city: 'Portland', state: 'OR', zip: '97201', country: 'United States' } },
  { name: 'Mia Robinson', email: 'mia.robinson@example.com', address: { address: '19 Orchard Way', city: 'Boston', state: 'MA', zip: '02108', country: 'United States' } },
  { name: 'James Anderson', email: 'james.anderson@example.com', address: { address: '500 Highland Ave', city: 'Phoenix', state: 'AZ', zip: '85001', country: 'United States' } },
];

const STATUS_WEIGHTS: { status: OrderStatus; weight: number }[] = [
  { status: 'pending', weight: 25 },
  { status: 'processing', weight: 25 },
  { status: 'shipped', weight: 20 },
  { status: 'delivered', weight: 25 },
  { status: 'cancelled', weight: 5 },
];

const CARD_BRANDS = ['Visa', 'Mastercard', 'American Express', 'Discover'];

function pickWeightedStatus(): OrderStatus {
  const total = STATUS_WEIGHTS.reduce((sum, w) => sum + w.weight, 0);
  let roll = Math.random() * total;
  for (const entry of STATUS_WEIGHTS) {
    if (roll < entry.weight) return entry.status;
    roll -= entry.weight;
  }
  return 'pending';
}

function transactionStatusForOrder(status: OrderStatus): TransactionStatus {
  switch (status) {
    case 'cancelled':
      return 'refunded';
    case 'pending':
      return 'pending';
    default:
      return 'succeeded';
  }
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

export async function seedDatabase() {
  await connectDB();

  await Promise.all([Order.deleteMany({}), Transaction.deleteMany({})]);

  const ORDER_COUNT = 24;
  const now = Date.now();
  const thirtyDaysMs = 30 * 24 * 60 * 60 * 1000;

  const createdOrders: { orderNumber: string; total: number; status: OrderStatus; createdAt: Date; orderId: unknown }[] = [];

  for (let i = 0; i < ORDER_COUNT; i++) {
    const customer = pickRandom(CUSTOMERS);
    const itemCount = randomInt(1, 4);
    const chosenProducts = new Set<string>();
    const items: OrderItem[] = [];

    while (items.length < itemCount) {
      const product = pickRandom(products);
      if (chosenProducts.has(product.id)) continue;
      chosenProducts.add(product.id);

      items.push({
        productId: product.id,
        productName: product.name,
        productImage: product.image,
        unitPrice: product.price,
        quantity: randomInt(1, 3),
      });
    }

    const subtotal = Math.round(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0) * 100) / 100;
    const shipping = subtotal >= 50 ? 0 : 5.99;
    const total = Math.round((subtotal + shipping) * 100) / 100;

    const status = pickWeightedStatus();
    const createdAt = new Date(now - randomInt(0, thirtyDaysMs));
    const orderNumber = `PM-${100000 + i}`;

    const order = await Order.create({
      orderNumber,
      customerName: customer.name,
      customerEmail: customer.email,
      shippingAddress: customer.address,
      items,
      status,
      subtotal,
      shipping,
      total,
      createdAt,
      updatedAt: createdAt,
    });

    createdOrders.push({ orderNumber, total, status, createdAt, orderId: order._id });
  }

  for (const order of createdOrders) {
    await Transaction.create({
      order: order.orderId,
      orderNumber: order.orderNumber,
      amount: order.total,
      method: 'card',
      cardBrand: pickRandom(CARD_BRANDS),
      last4: String(randomInt(1000, 9999)),
      status: transactionStatusForOrder(order.status),
      createdAt: order.createdAt,
      updatedAt: order.createdAt,
    });
  }

  return { orders: createdOrders.length, transactions: createdOrders.length };
}

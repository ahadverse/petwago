import { seedDatabase } from '@petbackend/seed';

export async function POST() {
  const result = await seedDatabase();
  return Response.json(result);
}

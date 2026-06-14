import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/seed';

export async function GET(request: NextRequest) {
  const query = (request.nextUrl.searchParams.get('q') ?? '').trim().toLowerCase();
  if (!query) return NextResponse.json([]);

  const results = products
    .filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.subcategory.toLowerCase().includes(query) ||
      (p.tags ?? []).some(tag => tag.toLowerCase().includes(query))
    )
    .slice(0, 6)
    .map(p => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      brand: p.brand,
      price: p.price,
      image: p.image,
    }));

  return NextResponse.json(results);
}

import { Product } from '@/types';

import { products as dogFoodDryFood } from './products/dog-food-dry-food';
import { products as dogFoodWetFood } from './products/dog-food-wet-food';
import { products as dogFoodFreshFrozen } from './products/dog-food-fresh-frozen';
import { products as dogFoodVeterinaryDiet } from './products/dog-food-veterinary-diet';
import { products as dogSuppliesHousing } from './products/dog-supplies-housing';
import { products as dogSuppliesBeds } from './products/dog-supplies-beds';
import { products as dogSuppliesBowlsFeeders } from './products/dog-supplies-bowls-feeders';
import { products as dogSuppliesToys } from './products/dog-supplies-toys';
import { products as dogSuppliesTravelOutdoor } from './products/dog-supplies-travel-outdoor';
import { products as catFoodWetFood } from './products/cat-food-wet-food';
import { products as catFoodDryFood } from './products/cat-food-dry-food';
import { products as catFoodVeterinaryDiets } from './products/cat-food-veterinary-diets';
import { products as catFoodPremiumFood } from './products/cat-food-premium-food';
import { products as catSuppliesHousing } from './products/cat-supplies-housing';
import { products as catSuppliesBeds } from './products/cat-supplies-beds';
import { products as catSuppliesBowlsFeeders } from './products/cat-supplies-bowls-feeders';
import { products as catSuppliesCarriersTravel } from './products/cat-supplies-carriers-travel';
import { products as catSuppliesToys } from './products/cat-supplies-toys';

export const products: Product[] = [
  ...dogFoodDryFood,
  ...dogFoodWetFood,
  ...dogFoodFreshFrozen,
  ...dogFoodVeterinaryDiet,
  ...dogSuppliesHousing,
  ...dogSuppliesBeds,
  ...dogSuppliesBowlsFeeders,
  ...dogSuppliesToys,
  ...dogSuppliesTravelOutdoor,
  ...catFoodWetFood,
  ...catFoodDryFood,
  ...catFoodVeterinaryDiets,
  ...catFoodPremiumFood,
  ...catSuppliesHousing,
  ...catSuppliesBeds,
  ...catSuppliesBowlsFeeders,
  ...catSuppliesCarriersTravel,
  ...catSuppliesToys,
];


// ─── CATEGORY METADATA ──────────────────────────────────────────────────────
export const subcategoryMeta: Record<string, { name: string; description: string; image: string }> = {
  'dry-food':          { name: 'Dry Food',             description: 'Kibble and dry dog food for every life stage.',             image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=400&fit=crop' },
  'wet-food':          { name: 'Wet Food',              description: 'Moist, flavorful wet food dogs and cats adore.',            image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop' },
  'fresh-frozen':      { name: 'Fresh & Frozen Food',  description: 'Human-grade fresh meals delivered to your door.',           image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&h=400&fit=crop' },
  'veterinary-diet':   { name: 'Veterinary Diet',       description: 'Prescription therapeutic diets. Vet authorization required.', image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=600&h=400&fit=crop' },
  'veterinary-diets':  { name: 'Veterinary Diets',      description: 'Prescription diets for cats with specific health needs.',   image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop' },
  'premium-food':      { name: 'Premium Food',          description: 'Ultra-premium and biologically appropriate cat food.',      image: 'https://images.unsplash.com/photo-1573865526182-e4f5b81c7a84?w=600&h=400&fit=crop' },
  'housing':           { name: 'Housing',               description: 'Crates, kennels, pens, and enclosures.',                   image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop' },
  'beds':              { name: 'Beds',                  description: 'Cozy beds for a great night\'s sleep.',                   image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop' },
  'bowls-feeders':     { name: 'Bowls & Feeders',       description: 'Bowls, feeders, fountains, and dispensers.',               image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop' },
  'toys':              { name: 'Toys',                  description: 'Interactive toys for mental stimulation and fun.',          image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop' },
  'travel-outdoor':    { name: 'Travel & Outdoor',      description: 'Harnesses, carriers, boots, and adventure gear.',          image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=400&fit=crop' },
  'carriers-travel':   { name: 'Carriers & Travel',     description: 'Airline-approved carriers and travel accessories.',        image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&h=400&fit=crop' },
};

export const getProductsByCategory = (category: 'dog' | 'cat', type?: 'food' | 'supplies'): Product[] =>
  products.filter(p => p.category === category && (type ? p.type === type : true));

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find(p => p.slug === slug);

export const getFeaturedProducts = (): Product[] =>
  products.filter(p => p.badge || p.rating >= 4.7).slice(0, 8);

export const getRelatedProducts = (product: Product, limit = 4): Product[] =>
  products.filter(p => p.id !== product.id && p.category === product.category && p.subcategory === product.subcategory).slice(0, limit);

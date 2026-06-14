import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'dbf-001', name: 'YETI Boomer 4 Stainless Steel Dog Bowl', slug: 'yeti-boomer-stainless-dog-bowl',
    brand: 'YETI', price: 29.99,
    description: 'Dishwasher safe stainless steel bowl with non-slip base. Holds 4 cups. Durable and rust-resistant.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4706561-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.8, reviewCount: 2341, inStock: true, tags: ['stainless', 'dishwasher-safe', 'non-slip']
  },
  {
    id: 'dbf-002', name: 'Outward Hound Fun Feeder Slow Bowl', slug: 'outward-hound-fun-feeder-slow-bowl',
    brand: 'Outward Hound', price: 19.99, originalPrice: 24.99,
    description: 'Interactive slow feeder bowl that promotes healthy eating. Reduces bloat and improves digestion by 10x.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3163112-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.6, reviewCount: 4532, inStock: true, badge: 'Sale', tags: ['slow-feeder', 'anti-bloat', 'interactive']
  },
  {
    id: 'dbf-003', name: 'PetSafe Healthy Pet Simply Feed Automatic Feeder', slug: 'petsafe-healthy-pet-automatic-feeder',
    brand: 'PetSafe', price: 149.95,
    description: 'Programmable automatic dog feeder with 12 meals per day scheduling. 24-cup capacity for large dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3381793-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 1234, inStock: true, tags: ['automatic', 'programmable', 'timer']
  },
  {
    id: 'dbf-004', name: 'Neater Feeder Deluxe Elevated Dog Bowl Stand', slug: 'neater-feeder-deluxe-elevated',
    brand: 'Neater Feeder', price: 39.99,
    description: 'Elevated feeding station that catches spills and messes. Raised bowls for improved digestion and neck comfort.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4637201-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 987, inStock: true, tags: ['elevated', 'spill-proof', 'ergonomic']
  },
  {
    id: 'dbf-005', name: 'Bergan Elevated Auto-Wata Pet Bowl', slug: 'bergan-elevated-auto-wata-bowl',
    brand: 'Bergan', price: 27.99,
    description: 'Self-filling water bowl keeps water fresh and cool. Uses gravity feed for continuous fresh water supply.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3168811-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.2, reviewCount: 654, inStock: true, tags: ['water', 'gravity-feed', 'auto-fill']
  },
  {
    id: 'dbf-006', name: 'OurPets Big Dog Feeder Elevated Station', slug: 'ourpets-big-dog-feeder-elevated',
    brand: 'OurPets', price: 34.99,
    description: 'Elevated feeding station with two stainless steel bowls. Adjustable height settings for large breeds.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3128190-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 1234, inStock: true, tags: ['elevated', 'large-breed', 'stainless', 'adjustable']
  },
  {
    id: 'dbf-007', name: 'Pawaboo Collapsible Silicone Dog Bowl', slug: 'pawaboo-collapsible-silicone-bowl',
    brand: 'Pawaboo', price: 9.99, originalPrice: 14.99,
    description: 'Portable collapsible silicone dog bowl for travel. Fits in pocket, dishwasher safe, BPA-free.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2442275-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 4321, inStock: true, badge: 'Sale', tags: ['collapsible', 'travel', 'silicone', 'BPA-free']
  },
  {
    id: 'dbf-008', name: 'Furbo 360° Dog Camera with Treat Toss', slug: 'furbo-360-dog-camera-treat-toss',
    brand: 'Furbo', price: 169.00,
    description: 'Rotating 360° dog camera with barking alerts and treat tossing. Watch and interact with your dog remotely.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3550155-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 5432, inStock: true, badge: 'New', tags: ['camera', 'treat-toss', 'smart', 'interactive']
  },
  {
    id: 'dbf-009', name: 'PetLibro Granary Automatic Cat & Dog Feeder', slug: 'petlibro-granary-automatic-feeder',
    brand: 'PetLibro', price: 59.99, originalPrice: 74.99,
    description: 'Wi-Fi enabled automatic feeder with app control. Programs up to 6 meals per day with portion control.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3288476-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 2134, inStock: true, badge: 'Sale', tags: ['wifi', 'app-control', 'automatic', 'portion-control']
  },
  {
    id: 'dbf-010', name: 'Loving Pets Bella No-Spill Dog Bowl', slug: 'loving-pets-bella-no-spill-bowl',
    brand: 'Loving Pets', price: 12.99,
    description: 'Stylish stainless steel dog bowl with no-spill rubber rim and non-skid base. Dishwasher safe.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3163112-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 1543, inStock: true, tags: ['no-spill', 'stainless', 'non-skid', 'stylish']
  },
  {
    id: 'dbf-011', name: 'Frisco Stainless Steel Dog Bowl with Skid Stops', slug: 'frisco-stainless-bowl-skid-stops',
    brand: 'Frisco', price: 8.99,
    description: 'Classic stainless steel bowl with rubber skid stops on the base to prevent sliding and spills during mealtime.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3006408-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 3214, inStock: true, tags: ['stainless', 'skid-stop', 'budget', 'dishwasher-safe']
  },
  {
    id: 'dbf-012', name: 'PetSafe Healthy Pet Simply Feed Wi-Fi Feeder', slug: 'petsafe-simply-feed-wifi-feeder',
    brand: 'PetSafe', price: 179.95,
    description: 'Smart Wi-Fi automatic feeder that lets you schedule and trigger feedings remotely from your smartphone.',
    longDescription: 'This automatic feeder pairs with a free app for full remote control, letting you adjust portion sizes and feeding times from anywhere. The slow-feed option helps prevent gulping, and the sealed hopper keeps kibble fresh.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3006521-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 2876, inStock: true, badge: 'Premium', tags: ['wifi', 'smart', 'automatic', 'app-control']
  },
  {
    id: 'dbf-013', name: 'Kurgo Mash & Stash Travel Bowl', slug: 'kurgo-mash-stash-travel-bowl',
    brand: 'Kurgo', price: 14.99,
    description: 'Foldable fabric travel bowl that snaps flat for storage and pops open for feeding on the go.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3551684-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 1432, inStock: true, tags: ['travel', 'foldable', 'fabric', 'portable']
  },
  {
    id: 'dbf-014', name: 'IRIS USA Elevated Dog Feeder with Storage', slug: 'iris-usa-elevated-feeder-storage',
    brand: 'IRIS USA', price: 44.99,
    description: 'Elevated double-bowl feeding station with a built-in storage drawer for kibble and treats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3288804-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 1098, inStock: true, tags: ['elevated', 'storage', 'double-bowl', 'feeding-station']
  },
  {
    id: 'dbf-015', name: 'K&H Pet Products Thermal Bowl Heated Water Dish', slug: 'kh-thermal-bowl-heated-water-dish',
    brand: 'K&H Pet Products', price: 32.99,
    description: 'Heated outdoor water bowl that prevents freezing in cold weather, keeping water drinkable all winter.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2466146-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 1654, inStock: true, tags: ['heated', 'outdoor', 'winter', 'water-bowl']
  },
  {
    id: 'dbf-016', name: 'Frisco Ceramic Dog Bowl with Paw Print', slug: 'frisco-ceramic-bowl-paw-print',
    brand: 'Frisco', price: 11.99, originalPrice: 14.99,
    description: 'Charming ceramic bowl with a printed paw design, microwave and dishwasher safe.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3288476-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 2210, inStock: true, badge: 'Sale', tags: ['ceramic', 'microwave-safe', 'dishwasher-safe', 'decorative']
  },
  {
    id: 'dbf-017', name: 'PetSafe Drinkwell 360 Pet Fountain', slug: 'petsafe-drinkwell-360-fountain',
    brand: 'PetSafe', price: 64.99,
    description: 'Multi-pet water fountain with five drinking streams and a free-falling stream, encouraging hydration.',
    longDescription: 'The 360 fountain features a triple-action filter that removes debris, hair, and bad odors and tastes from the water, plus a quiet pump for continuous circulation. The large 128-ounce capacity reduces refilling for multi-pet homes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3163083-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 3987, inStock: true, badge: 'Premium', tags: ['fountain', 'multi-pet', 'filter', 'hydration']
  },
  {
    id: 'dbf-018', name: 'KONG Stainless Steel No-Slip Bowl', slug: 'kong-stainless-no-slip-bowl',
    brand: 'KONG', price: 13.99,
    description: 'Heavy-gauge stainless steel bowl with a thick rubber base that grips floors to stop spills and tipping.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3163016-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.6, reviewCount: 1876, inStock: true, tags: ['stainless', 'no-slip', 'heavy-gauge', 'durable']
  },
  {
    id: 'dbf-019', name: 'Outward Hound Slow Feeder Maze Bowl', slug: 'outward-hound-slow-feeder-maze-bowl',
    brand: 'Outward Hound', price: 14.99,
    description: 'Maze-pattern slow feeder that turns mealtime into a fun challenge, slowing down fast eaters.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1327151-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 4123, inStock: true, tags: ['slow-feeder', 'maze', 'anti-gulping', 'interactive']
  },
  {
    id: 'dbf-020', name: 'Petmate Replendish Gravity Waterer', slug: 'petmate-replendish-gravity-waterer',
    brand: 'Petmate', price: 17.99,
    description: 'Gravity-fed water dispenser with a built-in filter, providing fresh water for up to a week between fills.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3550155-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.2, reviewCount: 987, inStock: true, tags: ['gravity-feed', 'filter', 'water-dispenser', 'long-lasting']
  },
  {
    id: 'dbf-021', name: 'Frisco Double Diner Stainless Steel Bowl Stand', slug: 'frisco-double-diner-stand',
    brand: 'Frisco', price: 24.99,
    description: 'Wood-finish double diner stand holding two removable stainless steel bowls for food and water.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3163112-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 1543, inStock: true, tags: ['double-diner', 'stand', 'stainless', 'wood-finish']
  },
  {
    id: 'dbf-022', name: 'Hertzko Slow Feed Interactive Bowl', slug: 'hertzko-slow-feed-interactive-bowl',
    brand: 'Hertzko', price: 12.99,
    description: 'BPA-free slow feed bowl with raised ridges that reduce eating speed by up to 10 times.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3367246-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.2, reviewCount: 2098, inStock: true, tags: ['slow-feeder', 'BPA-free', 'anti-gulping', 'budget']
  },
  {
    id: 'dbf-023', name: 'IRIS USA Airtight Pet Food Storage Container', slug: 'iris-usa-airtight-food-storage-container',
    brand: 'IRIS USA', price: 27.99, originalPrice: 34.99,
    description: 'Airtight food storage container with wheels and a built-in measuring cup, keeps kibble fresh longer.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4606051-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.6, reviewCount: 3654, inStock: true, badge: 'Sale', tags: ['storage', 'airtight', 'wheels', 'kibble']
  },
  {
    id: 'dbf-024', name: 'PetSafe Smart Feed Automatic Pet Feeder', slug: 'petsafe-smart-feed-automatic-feeder',
    brand: 'PetSafe', price: 199.95,
    description: 'High-capacity smart feeder with portion control and live video, manageable from anywhere via app.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4759284-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 2543, inStock: true, badge: 'Premium', tags: ['smart', 'automatic', 'portion-control', 'app-control']
  },
  {
    id: 'dbf-025', name: 'Frisco Elevated Bamboo Dog Feeder', slug: 'frisco-elevated-bamboo-feeder',
    brand: 'Frisco', price: 36.99,
    description: 'Elevated feeder with a sustainable bamboo stand and two ceramic bowls, blends with home decor.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3517515-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 1234, inStock: true, tags: ['elevated', 'bamboo', 'ceramic', 'eco-friendly']
  },
  {
    id: 'dbf-026', name: 'Outward Hound Fun Feeder Mat Lick Pad', slug: 'outward-hound-fun-feeder-mat-lick-pad',
    brand: 'Outward Hound', price: 10.99,
    description: 'Silicone lick mat with suction cups that sticks to floors or walls, great for slow feeding wet food or treats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2699492-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 2765, inStock: true, badge: 'New', tags: ['lick-mat', 'silicone', 'suction', 'slow-feeder']
  },
  {
    id: 'dbf-027', name: 'Mammoth Heavy Duty Rubber Crock Bowl', slug: 'mammoth-heavy-duty-rubber-crock-bowl',
    brand: 'Mammoth', price: 16.99,
    description: 'Chew-resistant rubber crock bowl with a weighted base, ideal for dogs that like to flip their bowls.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3947013-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 1098, inStock: true, tags: ['rubber', 'chew-resistant', 'weighted', 'durable']
  },
  {
    id: 'dbf-028', name: 'JW Pet SkidStop Stainless Steel Bowl', slug: 'jw-pet-skidstop-stainless-bowl',
    brand: 'JW Pet', price: 9.49,
    description: 'Affordable stainless steel bowl with a non-skid rubber ring molded to the base for stability.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4605331-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 1765, inStock: true, tags: ['stainless', 'non-skid', 'budget', 'durable']
  },
  {
    id: 'dbf-029', name: 'PetLibro Stainless Steel Automatic Feeder', slug: 'petlibro-stainless-automatic-feeder',
    brand: 'PetLibro', price: 89.99,
    description: 'Automatic feeder with a stainless steel bowl and dual power options, programmable for up to 4 meals daily.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4803847-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 1432, inStock: true, tags: ['automatic', 'stainless', 'programmable', 'dual-power']
  },
  {
    id: 'dbf-030', name: 'Frisco Travel Water Bottle with Bowl Attachment', slug: 'frisco-travel-water-bottle-bowl',
    brand: 'Frisco', price: 13.99, originalPrice: 17.99,
    description: 'Portable water bottle with an attached fold-out bowl, perfect for hikes and walks.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3288476-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 2987, inStock: true, badge: 'Sale', tags: ['travel', 'water-bottle', 'portable', 'hiking']
  },
  {
    id: 'dbf-031', name: 'IRIS USA Elevated Wooden Dog Bowl Stand', slug: 'iris-usa-elevated-wooden-bowl-stand',
    brand: 'IRIS USA', price: 38.99,
    description: 'Solid wood elevated stand with two stainless steel bowls, designed to ease digestion for medium and large dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2698844-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 876, inStock: true, tags: ['elevated', 'wood', 'stainless', 'large-dog']
  },
  {
    id: 'dbf-032', name: 'K&H Pet Products Filtered Water Fountain', slug: 'kh-filtered-water-fountain',
    brand: 'K&H Pet Products', price: 49.99,
    description: 'Quiet-running water fountain with a multi-stage filter and adjustable flow for fresh, oxygenated water.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3348387-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 1543, inStock: true, tags: ['fountain', 'filter', 'quiet', 'water']
  },
  {
    id: 'dbf-033', name: 'Outward Hound Slow Feeder Bowl for Large Dogs', slug: 'outward-hound-slow-feeder-large-dogs',
    brand: 'Outward Hound', price: 17.99,
    description: 'Large-capacity slow feeder bowl with deep ridges sized for big breed dogs that eat too quickly.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3288804-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 1987, inStock: true, tags: ['slow-feeder', 'large-dog', 'ridges', 'anti-gulping']
  },
  {
    id: 'dbf-034', name: 'Frisco Personalized Stainless Steel Dog Bowl', slug: 'frisco-personalized-stainless-bowl',
    brand: 'Frisco', price: 15.99,
    description: 'Customizable stainless steel bowl that can be engraved with your dog\'s name, with a non-slip base.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3288804-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.6, reviewCount: 2341, inStock: true, badge: 'New', tags: ['personalized', 'stainless', 'engraved', 'gift']
  },
  {
    id: 'dbf-035', name: 'Petmate Café Tuff Bowl', slug: 'petmate-cafe-tuff-bowl',
    brand: 'Petmate', price: 7.99,
    description: 'Durable plastic bowl with a chew-resistant rim and contoured shape for comfortable eating.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/402966-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.1, reviewCount: 1098, inStock: true, tags: ['plastic', 'chew-resistant', 'budget', 'contoured']
  },
  {
    id: 'dbf-036', name: 'Diggs Groov Slow Feeder Mat', slug: 'diggs-groov-slow-feeder-mat',
    brand: 'Diggs', price: 24.99,
    description: 'Modern silicone slow feeder mat with raised grooves to make mealtime more engaging and slower-paced.',
    longDescription: 'Designed with smooth, organic ridges, the Groov mat reduces eating speed without the harsh edges found in many maze bowls. It\'s dishwasher safe, freezer safe for frozen treats, and features a non-slip base.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3517515-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 765, inStock: true, badge: 'New', tags: ['slow-feeder', 'silicone', 'mat', 'modern']
  },
  {
    id: 'dbf-037', name: 'K&H Pet Products Outdoor Heated Pet Bowl Set', slug: 'kh-outdoor-heated-bowl-set',
    brand: 'K&H Pet Products', price: 41.99,
    description: 'Set of two heated outdoor bowls for food and water, designed to keep contents from freezing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3761171-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.3, reviewCount: 654, inStock: true, tags: ['heated', 'outdoor', 'set', 'winter']
  },
  {
    id: 'dbf-038', name: 'Frisco Plastic Travel Bowl Set with Carabiner', slug: 'frisco-plastic-travel-bowl-carabiner',
    brand: 'Frisco', price: 6.99,
    description: 'Two-piece collapsible travel bowl set that clips onto a leash or backpack with an included carabiner.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4634094-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.0, reviewCount: 1432, inStock: true, tags: ['travel', 'collapsible', 'carabiner', 'budget']
  },
  {
    id: 'dbf-039', name: 'PetSafe Eatwell 5-Meal Automatic Pet Feeder', slug: 'petsafe-eatwell-5-meal-feeder',
    brand: 'PetSafe', price: 99.95,
    description: 'Compact automatic feeder with a stainless steel bowl and ice pack compartment to keep wet food fresh.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3803706-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.2, reviewCount: 1098, inStock: true, tags: ['automatic', 'stainless', 'wet-food', 'programmable']
  },
  {
    id: 'dbf-040', name: 'Outward Hound Hydro Splash Interactive Water Toy', slug: 'outward-hound-hydro-splash-water-toy',
    brand: 'Outward Hound', price: 21.99, originalPrice: 27.99,
    description: 'Floating water bowl and toy hybrid that releases treats and water for backyard fun and hydration.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3869895-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.1, reviewCount: 543, inStock: true, badge: 'Sale', tags: ['interactive', 'water', 'outdoor', 'fun']
  },
  {
    id: 'dbf-041', name: 'IRIS USA Vault Pet Food Storage Bin', slug: 'iris-usa-vault-pet-food-storage-bin',
    brand: 'IRIS USA', price: 32.99,
    description: 'Heavy-duty airtight storage bin with a wide mouth opening, holds up to 25 lbs of dry food.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3551705-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.5, reviewCount: 2654, inStock: true, tags: ['storage', 'airtight', 'large-capacity', 'durable']
  },
  {
    id: 'dbf-042', name: 'Frisco Mason Jar Style Ceramic Dog Bowl', slug: 'frisco-mason-jar-ceramic-bowl',
    brand: 'Frisco', price: 13.49,
    description: 'Farmhouse-style ceramic bowl with a mason jar pattern, microwave and dishwasher safe.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4706625-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.4, reviewCount: 987, inStock: true, tags: ['ceramic', 'farmhouse', 'decorative', 'dishwasher-safe']
  },
  {
    id: 'dbf-043', name: 'PetSafe Healthy Pet Food Station', slug: 'petsafe-healthy-pet-food-station',
    brand: 'PetSafe', price: 28.99,
    description: 'Adjustable-height feeding station that grows with your dog, with non-slip stainless steel bowls.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3381793-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.2, reviewCount: 765, inStock: true, tags: ['adjustable', 'feeding-station', 'stainless', 'non-slip']
  },
  {
    id: 'dbf-044', name: 'KONG Wobbler Treat Dispensing Feeder Toy', slug: 'kong-wobbler-treat-dispensing-feeder',
    brand: 'KONG', price: 18.99,
    description: 'Weighted wobbling toy that dispenses kibble as your dog noses and paws it around, slowing mealtime down.',
    longDescription: 'The Wobbler\'s bottom-heavy design means it always rights itself, encouraging dogs to keep playing and working for their food. Made from durable, food-safe plastic and easy to fill and clean.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3550155-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.6, reviewCount: 5123, inStock: true, tags: ['interactive', 'treat-dispensing', 'slow-feeder', 'durable']
  },
  {
    id: 'dbf-045', name: 'Petmate Single Cup Gravity Feeder', slug: 'petmate-single-cup-gravity-feeder',
    brand: 'Petmate', price: 11.49,
    description: 'Compact gravity feeder for small dogs, holds a one-day supply of food with a wide reservoir for easy filling.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3381793-center-1',
    category: 'dog', type: 'supplies', subcategory: 'bowls-feeders',
    rating: 4.0, reviewCount: 432, inStock: false, tags: ['gravity-feed', 'small-dog', 'compact', 'budget']
  }
];

import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'db-001', name: 'FurHaven Orthopedic Ultra Plush Dog Bed', slug: 'furhaven-orthopedic-ultra-plush-bed',
    brand: 'FurHaven', price: 39.99,
    description: 'Egg-crate foam base with ultra-plush top for superior joint support. Machine washable cover for easy cleaning.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4607109-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 5432, inStock: true, tags: ['orthopedic', 'washable', 'foam']
  },
  {
    id: 'db-002', name: 'K&H Pet Products Self-Warming Lounge Sleeper', slug: 'kh-self-warming-lounge-sleeper',
    brand: 'K&H Pet Products', price: 34.99, originalPrice: 44.99,
    description: 'Self-warming pet bed that reflects and retains your dog\'s body heat. No electricity needed. Machine washable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3788163-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 2341, inStock: true, badge: 'Sale', tags: ['self-warming', 'no-electric', 'washable']
  },
  {
    id: 'db-003', name: 'PetFusion Ultimate Dog Bed Memory Foam', slug: 'petfusion-ultimate-memory-foam-bed',
    brand: 'PetFusion', price: 89.99,
    description: 'Premium 4" solid memory foam base for superior joint and bone support. Water-resistant cover with non-slip bottom.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4674651-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.8, reviewCount: 8765, inStock: true, badge: 'Premium', tags: ['memory-foam', 'water-resistant', 'joint-support']
  },
  {
    id: 'db-004', name: 'Big Barker Pillow Top Orthopedic Dog Bed', slug: 'big-barker-pillow-top-orthopedic',
    brand: 'Big Barker', price: 219.99,
    description: 'Clinically proven to reduce joint pain and improve mobility in large dogs. 7" American-made therapeutic foam.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3672021-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.9, reviewCount: 3421, inStock: true, badge: 'Premium', tags: ['therapeutic', 'large-dog', 'clinically-proven']
  },
  {
    id: 'db-005', name: 'Furhaven Calming Cuddle Ball Dog Bed', slug: 'furhaven-calming-cuddle-ball-bed',
    brand: 'FurHaven', price: 44.99,
    description: 'Round donut-style calming bed for anxious dogs. Faux fur exterior mimics mother\'s coat to reduce anxiety.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4674715-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 1876, inStock: true, tags: ['calming', 'donut', 'anxiety']
  },
  {
    id: 'db-006', name: 'BarksBar Gray Orthopedic Dog Bed with Rim Bolster', slug: 'barksbar-gray-orthopedic-bolster-bed',
    brand: 'BarksBar', price: 49.99, originalPrice: 59.99,
    description: 'Orthopedic dog bed with cozy rim bolster and solid orthopedic foam base. Non-slip bottom.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3317863-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 4321, inStock: true, badge: 'Sale', tags: ['orthopedic', 'bolster', 'non-slip', 'foam']
  },
  {
    id: 'db-007', name: 'Bedsure Large Dog Bed Waterproof Orthopedic', slug: 'bedsure-large-waterproof-orthopedic-bed',
    brand: 'Bedsure', price: 39.99,
    description: 'Waterproof dog bed with egg-crate orthopedic foam. Removable and machine-washable cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3012568-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 3214, inStock: true, tags: ['waterproof', 'orthopedic', 'washable', 'egg-crate']
  },
  {
    id: 'db-008', name: 'Frisco Rectangular Bolster Dog Sofa Bed', slug: 'frisco-rectangular-bolster-sofa-bed',
    brand: 'Frisco', price: 34.99,
    description: 'Plush bolster sofa bed with raised sides for head and neck support. Soft chenille cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3177231-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 2134, inStock: true, tags: ['bolster', 'sofa', 'chenille', 'raised-sides']
  },
  {
    id: 'db-009', name: 'Molly Mutt Dog Duvet Cover Bed', slug: 'molly-mutt-dog-duvet-cover-bed',
    brand: 'Molly Mutt', price: 59.99,
    description: 'Eco-friendly dog bed cover that you fill with your old clothes and blankets. Unique and sustainable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3012568-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 765, inStock: true, badge: 'New', tags: ['eco-friendly', 'sustainable', 'duvet', 'washable']
  },
  {
    id: 'db-010', name: 'Armarkat Classic Pet Bed Mat Fleece Reversible', slug: 'armarkat-classic-pet-bed-mat-fleece',
    brand: 'Armarkat', price: 26.99, originalPrice: 34.99,
    description: 'Reversible fleece pet mat with two different colors. Waterproof backing keeps floor clean and dry.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1222520-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 1876, inStock: true, badge: 'Sale', tags: ['fleece', 'reversible', 'waterproof-backing', 'mat']
  },
  {
    id: 'db-011', name: 'Frisco Plush Calming Donut Cuddler Bed', slug: 'frisco-plush-calming-donut-cuddler',
    brand: 'Frisco', price: 32.99,
    description: 'Round donut cuddler bed with raised rim for dogs to rest their head. Ultra-soft faux fur for a cozy nesting feel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3518201-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 4123, inStock: true, weight: 'Medium', tags: ['donut', 'calming', 'plush', 'faux-fur']
  },
  {
    id: 'db-012', name: 'Casper Dog Bed Memory Foam', slug: 'casper-dog-bed-memory-foam',
    brand: 'Casper', price: 129.99,
    description: 'Premium memory foam dog bed engineered with the same comfort science as Casper\'s human mattresses.',
    longDescription: 'Featuring a supportive memory foam core wrapped in a removable, machine-washable cover, this bed cradles joints and distributes weight evenly. The breathable fabric helps regulate temperature for cooler, more restful sleep.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3631748-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.8, reviewCount: 2987, inStock: true, badge: 'Premium', tags: ['memory-foam', 'premium', 'washable', 'large-dog']
  },
  {
    id: 'db-013', name: 'Bedsure Cooling Gel Pad Dog Bed', slug: 'bedsure-cooling-gel-pad-bed',
    brand: 'Bedsure', price: 24.99,
    description: 'Self-cooling gel mat that absorbs body heat to keep dogs comfortable during hot weather. No refrigeration needed.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3356061-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 3654, inStock: true, tags: ['cooling', 'gel', 'summer', 'mat']
  },
  {
    id: 'db-014', name: 'K&H Pet Products Original Bolster Pet Cot', slug: 'kh-original-bolster-pet-cot',
    brand: 'K&H Pet Products', price: 54.99,
    description: 'Elevated cot bed with a padded bolster rim, keeping dogs off cold or hot floors and improving airflow.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3356061-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 2210, inStock: true, weight: 'Large', tags: ['elevated', 'cot', 'bolster', 'outdoor']
  },
  {
    id: 'db-015', name: 'West Paw Heyday Bolster Dog Bed', slug: 'west-paw-heyday-bolster-bed',
    brand: 'West Paw', price: 99.99,
    description: 'Eco-friendly bolster bed made with recycled fibers, featuring a removable, machine-washable cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3041692-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 1432, inStock: true, tags: ['bolster', 'eco-friendly', 'recycled', 'washable']
  },
  {
    id: 'db-016', name: 'PetFusion Ultimate Lounge Memory Foam Bed', slug: 'petfusion-ultimate-lounge-memory-foam',
    brand: 'PetFusion', price: 109.99, originalPrice: 129.99,
    description: 'Extra-large lounge bed with solid memory foam and a stylish, water-resistant outer cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3317863-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.7, reviewCount: 3120, inStock: true, badge: 'Sale', weight: 'XL', tags: ['memory-foam', 'lounge', 'large-dog', 'water-resistant']
  },
  {
    id: 'db-017', name: 'Mammoth Heated Pet Bed', slug: 'mammoth-heated-pet-bed',
    brand: 'Mammoth', price: 64.99,
    description: 'Electric heated bed with a thermostatically controlled heating element and chew-resistant cord cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3788163-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 1654, inStock: true, tags: ['heated', 'electric', 'chew-resistant', 'winter']
  },
  {
    id: 'db-018', name: 'FurHaven NAP Ultra Plush Deluxe Pillow Bed', slug: 'furhaven-nap-ultra-plush-deluxe-pillow',
    brand: 'FurHaven', price: 27.99,
    description: 'Soft pillow-style bed with deep ultra-plush filling, ideal for small to medium dogs that love to burrow.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4607109-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 2876, inStock: true, weight: 'Small', tags: ['pillow', 'plush', 'budget', 'small-dog']
  },
  {
    id: 'db-019', name: 'Big Barker Sofa Style Dog Bed', slug: 'big-barker-sofa-style-bed',
    brand: 'Big Barker', price: 249.99,
    description: 'Sofa-style orthopedic bed with raised sides on three sides, made with therapeutic-grade foam for large breeds.',
    longDescription: 'Combining the support of Big Barker\'s clinically tested foam with the comfort of a sofa silhouette, this bed features microfiber-suede covers and a 10-year warranty against flattening. Ideal for senior dogs or those recovering from surgery.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1407040-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.9, reviewCount: 1765, inStock: true, badge: 'Premium', weight: 'XL', tags: ['sofa', 'orthopedic', 'large-dog', 'therapeutic']
  },
  {
    id: 'db-020', name: 'Frisco Elevated Steel-Framed Dog Bed', slug: 'frisco-elevated-steel-framed-bed',
    brand: 'Frisco', price: 44.99,
    description: 'Lightweight elevated bed with a powder-coated steel frame and breathable mesh fabric for indoor or outdoor use.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3885570-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 987, inStock: true, weight: 'Medium', tags: ['elevated', 'steel-frame', 'mesh', 'outdoor']
  },
  {
    id: 'db-021', name: 'Wellness Calming Faux Fur Donut Bed', slug: 'wellness-calming-faux-fur-donut-bed',
    brand: 'Wellness', price: 36.99,
    description: 'Soft, raised-rim donut bed designed to provide a sense of security for anxious or stressed dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3042290-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 1543, inStock: true, tags: ['calming', 'donut', 'faux-fur', 'anxiety']
  },
  {
    id: 'db-022', name: 'Carlson Pet Products Memory Foam Crate Pad', slug: 'carlson-memory-foam-crate-pad',
    brand: 'Carlson Pet Products', price: 29.99,
    description: 'Slim memory foam crate pad designed to fit standard wire crates, with a removable washable cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3268993-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.1, reviewCount: 654, inStock: true, weight: 'Medium', tags: ['crate-pad', 'memory-foam', 'washable', 'slim']
  },
  {
    id: 'db-023', name: 'K&H Pet Products Thermo-Snuggly Sleeper', slug: 'kh-thermo-snuggly-sleeper',
    brand: 'K&H Pet Products', price: 42.99, originalPrice: 49.99,
    description: 'Heated snuggle bed with raised bolster sides, providing warmth and a secure cuddle spot for small dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3518139-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 1287, inStock: true, badge: 'Sale', weight: 'Small', tags: ['heated', 'snuggle', 'bolster', 'small-dog']
  },
  {
    id: 'db-024', name: 'Bedsure Calming Donut Cuddler XL', slug: 'bedsure-calming-donut-cuddler-xl',
    brand: 'Bedsure', price: 41.99,
    description: 'Extra-large calming donut bed with shaggy faux fur and a non-slip bottom, sized for big dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3879006-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 5234, inStock: true, weight: 'XL', tags: ['donut', 'calming', 'large-dog', 'non-slip']
  },
  {
    id: 'db-025', name: 'PetFusion Cooling Gel Memory Foam Mat', slug: 'petfusion-cooling-gel-memory-foam-mat',
    brand: 'PetFusion', price: 49.99,
    description: 'Dual-layer mat combining cooling gel with memory foam for joint support that stays comfortable in summer.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3879006-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 2098, inStock: true, tags: ['cooling', 'memory-foam', 'gel', 'summer']
  },
  {
    id: 'db-026', name: 'Furhaven Plush & Suede Sofa Pet Bed', slug: 'furhaven-plush-suede-sofa-bed',
    brand: 'FurHaven', price: 49.99,
    description: 'Sofa-style bed with plush top and faux suede sides, providing head, neck, and back support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3356061-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 3421, inStock: true, weight: 'Large', tags: ['sofa', 'plush', 'suede', 'support']
  },
  {
    id: 'db-027', name: 'Tractive Smart Heated Pet Mat', slug: 'tractive-smart-heated-pet-mat',
    brand: 'Tractive', price: 79.99,
    description: 'App-controlled heated mat that lets you adjust temperature settings remotely from your phone.',
    longDescription: 'This smart mat connects via Bluetooth to a companion app, allowing precise temperature control and scheduling. An automatic shutoff feature ensures safety, while the soft, removable cover is machine washable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3631730-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 432, inStock: true, badge: 'New', tags: ['smart', 'heated', 'app-control', 'mat']
  },
  {
    id: 'db-028', name: 'Big Barker Headrest Orthopedic Dog Bed', slug: 'big-barker-headrest-orthopedic-bed',
    brand: 'Big Barker', price: 229.99,
    description: 'Orthopedic foam bed with a built-in headrest bolster, giving large dogs extra neck and head support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4607109-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.8, reviewCount: 1098, inStock: true, badge: 'Premium', weight: 'XL', tags: ['orthopedic', 'headrest', 'large-dog', 'foam']
  },
  {
    id: 'db-029', name: 'Frisco Quilted Reversible Dog Bed Mat', slug: 'frisco-quilted-reversible-bed-mat',
    brand: 'Frisco', price: 19.99,
    description: 'Lightweight, reversible quilted mat that\'s easy to toss in the wash and use as a crate liner or floor bed.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2709700-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.1, reviewCount: 1432, inStock: true, weight: 'Medium', tags: ['quilted', 'reversible', 'budget', 'crate-liner']
  },
  {
    id: 'db-030', name: 'K&H Pet Products Elevated Outdoor Pet Cot XL', slug: 'kh-elevated-outdoor-pet-cot-xl',
    brand: 'K&H Pet Products', price: 69.99, originalPrice: 84.99,
    description: 'Heavy-duty elevated cot with a powder-coated steel frame and breathable mesh, built for outdoor durability.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1040200-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 1876, inStock: true, badge: 'Sale', weight: 'XL', tags: ['elevated', 'cot', 'outdoor', 'heavy-duty']
  },
  {
    id: 'db-031', name: 'Wellness Orthopedic Memory Foam Mattress Bed', slug: 'wellness-orthopedic-memory-foam-mattress',
    brand: 'Wellness', price: 74.99,
    description: 'Mattress-style bed with a thick layer of memory foam designed to support aging joints and improve sleep quality.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4660196-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 1543, inStock: true, weight: 'Large', tags: ['orthopedic', 'memory-foam', 'mattress', 'senior-dog']
  },
  {
    id: 'db-032', name: 'Tuffy Heavy Duty Chew Resistant Bed Cover', slug: 'tuffy-heavy-duty-chew-resistant-cover',
    brand: 'Tuffy', price: 54.99,
    description: 'Reinforced ballistic nylon bed cover designed to withstand scratching and chewing from tough dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2642681-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 987, inStock: true, weight: 'Large', tags: ['chew-resistant', 'durable', 'ballistic-nylon', 'cover']
  },
  {
    id: 'db-033', name: 'Furhaven Terry & Suede Convertible Sofa Bed', slug: 'furhaven-terry-suede-convertible-sofa',
    brand: 'FurHaven', price: 39.99,
    description: 'Convertible bed that unfolds flat or zips into a bolster sofa shape, made with cozy terry and suede fabric.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3952744-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 2341, inStock: true, weight: 'Medium', tags: ['convertible', 'sofa', 'terry', 'suede']
  },
  {
    id: 'db-034', name: 'Mammoth Cooling Towel & Mat Combo', slug: 'mammoth-cooling-towel-mat-combo',
    brand: 'Mammoth', price: 22.99,
    description: 'Two-piece set including a cooling mat and a quick-dry cooling towel, perfect for hot days and travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4607109-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.0, reviewCount: 543, inStock: true, tags: ['cooling', 'travel', 'combo', 'summer']
  },
  {
    id: 'db-035', name: 'PetFusion Replacement Bed Cover', slug: 'petfusion-replacement-bed-cover',
    brand: 'PetFusion', price: 34.99,
    description: 'Durable replacement cover compatible with PetFusion\'s memory foam beds, water-resistant and machine washable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3177231-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 765, inStock: true, weight: 'Large', tags: ['replacement-cover', 'washable', 'water-resistant', 'accessory']
  },
  {
    id: 'db-036', name: 'Frisco Plush Cave Burrow Dog Bed', slug: 'frisco-plush-cave-burrow-bed',
    brand: 'Frisco', price: 29.99, originalPrice: 36.99,
    description: 'Covered burrow-style bed with a hooded canopy, giving small dogs a den-like space to feel secure.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3788155-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 3210, inStock: true, badge: 'Sale', weight: 'Small', tags: ['cave', 'burrow', 'hooded', 'small-dog']
  },
  {
    id: 'db-037', name: 'Big Barker Crate Pad Orthopedic Foam', slug: 'big-barker-crate-pad-orthopedic-foam',
    brand: 'Big Barker', price: 119.99,
    description: 'Therapeutic-grade orthopedic foam crate pad that fits inside standard wire crates for large breeds.',
    longDescription: 'Made with the same 7-inch American-made foam used in Big Barker\'s standalone beds, this crate pad provides clinically proven joint support inside the confines of a crate. The microfiber cover is removable and machine washable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4674715-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.8, reviewCount: 876, inStock: true, badge: 'Premium', weight: 'Large', tags: ['crate-pad', 'orthopedic', 'large-dog', 'therapeutic']
  },
  {
    id: 'db-038', name: 'K&H Pet Products Cuddle Cube Pet Bed', slug: 'kh-cuddle-cube-pet-bed',
    brand: 'K&H Pet Products', price: 31.99,
    description: 'Square cube-shaped bed with high walls on three sides, giving dogs a cozy corner to curl up in.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2708176-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 1098, inStock: true, weight: 'Small', tags: ['cube', 'cozy', 'high-walls', 'small-dog']
  },
  {
    id: 'db-039', name: 'West Paw Granite Donut Dog Bed', slug: 'west-paw-granite-donut-bed',
    brand: 'West Paw', price: 84.99,
    description: 'Eco-conscious donut bed made from recycled materials with a durable, machine-washable outer shell.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3285478-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 1234, inStock: true, weight: 'Medium', tags: ['donut', 'eco-friendly', 'recycled', 'washable']
  },
  {
    id: 'db-040', name: 'Carlson Elevated Pet Bed with Canopy', slug: 'carlson-elevated-pet-bed-canopy',
    brand: 'Carlson Pet Products', price: 59.99,
    description: 'Elevated outdoor bed with a UV-resistant canopy that shields dogs from sun and light rain.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3879006-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 654, inStock: true, weight: 'Large', tags: ['elevated', 'canopy', 'outdoor', 'uv-resistant']
  },
  {
    id: 'db-041', name: 'Bedsure Faux Fur Donut Cuddler Small', slug: 'bedsure-faux-fur-donut-cuddler-small',
    brand: 'Bedsure', price: 18.99,
    description: 'Compact donut cuddler bed with super-soft faux fur, sized perfectly for small dogs and puppies.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4674715-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 2654, inStock: true, weight: 'Small', tags: ['donut', 'faux-fur', 'small-dog', 'puppy']
  },
  {
    id: 'db-042', name: 'Wellness Waterproof Outdoor Dog Bed', slug: 'wellness-waterproof-outdoor-bed',
    brand: 'Wellness', price: 47.99,
    description: 'Fully waterproof bed designed for porches, patios, and kennel runs, resistant to mildew and fading.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3788171-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 765, inStock: true, weight: 'Large', tags: ['waterproof', 'outdoor', 'mildew-resistant', 'durable']
  },
  {
    id: 'db-043', name: 'Frisco Memory Foam Bolster Bed with Removable Cover', slug: 'frisco-memory-foam-bolster-removable-cover',
    brand: 'Frisco', price: 64.99,
    description: 'Bolster bed with a memory foam base and a fully removable, machine-washable cover for easy maintenance.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3885561-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 1987, inStock: true, weight: 'Large', tags: ['memory-foam', 'bolster', 'removable-cover', 'washable']
  },
  {
    id: 'db-044', name: 'Mammoth Orthopedic Crate Mat', slug: 'mammoth-orthopedic-crate-mat',
    brand: 'Mammoth', price: 36.99, originalPrice: 44.99,
    description: 'Slim-profile orthopedic mat designed to fit crates and carriers while providing pressure-relief support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3952779-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.1, reviewCount: 432, inStock: true, badge: 'Sale', weight: 'Medium', tags: ['orthopedic', 'crate-mat', 'slim', 'support']
  },
  {
    id: 'db-045', name: 'PetFusion Indoor/Outdoor Elevated Pet Bed', slug: 'petfusion-indoor-outdoor-elevated-bed',
    brand: 'PetFusion', price: 57.99,
    description: 'Versatile elevated bed suitable for both indoor and outdoor use, with a breathable mesh sling and rust-resistant frame.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3042290-center-1',
    category: 'dog', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 1098, inStock: true, weight: 'Large', tags: ['elevated', 'indoor-outdoor', 'mesh', 'rust-resistant']
  }
];

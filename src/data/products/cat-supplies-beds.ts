import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'csb-001', name: 'K&H Thermo-Kitty Heated Cat Bed', slug: 'kh-thermo-kitty-heated-cat-bed',
    brand: 'K&H Pet Products', price: 49.99,
    description: 'Electrically heated cat bed that warms to your cat\'s body temperature. Machine washable. 4 watts.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2950659-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 3421, inStock: true, tags: ['heated', 'electric', 'washable', 'warm']
  },
  {
    id: 'csb-002', name: 'Furhaven Plush Cat Sofa Bed', slug: 'furhaven-plush-cat-sofa-bed',
    brand: 'FurHaven', price: 22.99, originalPrice: 29.99,
    description: 'Ultra-soft plush sofa-style cat bed with bolster sides for head and neck support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3317863-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 2134, inStock: true, badge: 'Sale', tags: ['sofa', 'bolster', 'plush', 'soft']
  },
  {
    id: 'csb-003', name: 'Bedsure Cat Beds Indoor Cats Cave Bed', slug: 'bedsure-cat-cave-bed',
    brand: 'Bedsure', price: 27.99,
    description: 'Enclosed cave-style cat bed for cats who love to hide and feel secure. Soft fleece interior.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3878724-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 1876, inStock: true, badge: 'New', tags: ['cave', 'enclosed', 'fleece', 'hiding']
  },
  {
    id: 'csb-004', name: 'Aspen Pet Oval Pet Bed', slug: 'aspen-pet-oval-bed',
    brand: 'Aspen Pet', price: 19.99,
    description: 'Simple and comfortable oval pet bed with recycled fiber fill. Machine washable cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1222520-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 987, inStock: true, tags: ['oval', 'recycled', 'washable', 'simple']
  },
  {
    id: 'csb-005', name: 'PETPEPPY Self-Warming Cat Bed Pad', slug: 'petpeppy-self-warming-cat-bed-pad',
    brand: 'PETPEPPY', price: 34.99,
    description: 'Thermal self-warming pad reflects body heat. Perfect for senior cats or those that feel the cold.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2897122-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 1234, inStock: true, tags: ['self-warming', 'thermal', 'senior', 'no-electric']
  },
  {
    id: 'csb-006', name: 'MidWest Quiet Time Deluxe Cat Clamshell Bed', slug: 'midwest-quiet-time-deluxe-clamshell-bed',
    brand: 'MidWest', price: 34.99,
    description: 'Soft clamshell-shaped cat bed with faux lambswool interior. Machine washable cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3287844-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 1543, inStock: true, tags: ['clamshell', 'lambswool', 'washable', 'soft']
  },
  {
    id: 'csb-007', name: 'Whisker City Round Sherpa Cat Bed', slug: 'whisker-city-round-sherpa-cat-bed',
    brand: 'Whisker City', price: 24.99, originalPrice: 32.99,
    description: 'Cozy round sherpa cat bed with extra-deep walls for a secure, nest-like feeling.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3865296-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 2134, inStock: true, badge: 'Sale', tags: ['sherpa', 'round', 'nest', 'deep-walls']
  },
  {
    id: 'csb-008', name: 'Snoozer Cozy Cave Pet Bed for Cats', slug: 'snoozer-cozy-cave-pet-bed',
    brand: 'Snoozer', price: 54.99,
    description: 'Luxurious cave-style hooded bed with orthopedic foam base. Perfect for cats who like to burrow.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4701218-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 876, inStock: true, badge: 'Premium', tags: ['cave', 'hooded', 'orthopedic', 'burrowing']
  },
  {
    id: 'csb-009', name: 'CatHoliday Electric Heated Cat Bed Pad', slug: 'catholiday-electric-heated-cat-bed-pad',
    brand: 'CatHoliday', price: 42.99,
    description: 'Electric heated cat bed with auto-thermostat. Maintains optimal temperature of 35°C / 95°F.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2819141-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 1234, inStock: true, tags: ['heated', 'auto-thermostat', 'electric', 'warm']
  },
  {
    id: 'csb-010', name: 'Western Home Calming Cat Bed Donut Cuddler', slug: 'western-home-calming-cat-bed-donut',
    brand: 'Western Home', price: 29.99, originalPrice: 39.99,
    description: 'Anti-anxiety donut cat bed with faux shag fur. Raised rim provides head and neck support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3124244-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 3214, inStock: true, badge: 'Sale', tags: ['anti-anxiety', 'donut', 'shag-fur', 'calming']
  },
  {
    id: 'csb-011', name: 'Frisco Cable Knit Calming Donut Cat Bed', slug: 'frisco-cable-knit-calming-donut-bed',
    brand: 'Frisco', price: 26.99,
    description: 'Plush cable-knit donut bed with raised rim and removable cushion for easy washing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3788171-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 2987, inStock: true, tags: ['donut', 'cable-knit', 'calming', 'washable']
  },
  {
    id: 'csb-012', name: 'PetSafe Cozy Up Heated Cat Bed', slug: 'petsafe-cozy-up-heated-cat-bed',
    brand: 'PetSafe', price: 44.99, originalPrice: 54.99,
    description: 'Low-wattage heated bed with chew-resistant cord and a removable, machine-washable cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4701189-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 1654, inStock: true, badge: 'Sale', tags: ['heated', 'chew-resistant', 'washable', 'low-wattage']
  },
  {
    id: 'csb-013', name: 'Catit Cozy Hooded Cat Bed', slug: 'catit-cozy-hooded-cat-bed',
    brand: 'Catit', price: 32.99,
    description: 'Hooded cat bed with a wide entrance and soft plush lining. Foldable for travel and storage.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2776401-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 743, inStock: true, tags: ['hooded', 'plush', 'foldable', 'travel']
  },
  {
    id: 'csb-014', name: 'KONG Cat Cuddler Self-Warming Bed', slug: 'kong-cat-cuddler-self-warming-bed',
    brand: 'KONG', price: 29.99,
    description: 'Self-warming bed with reflective core fabric that uses your cat\'s own body heat to stay cozy.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3070881-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 1098, inStock: true, tags: ['self-warming', 'reflective-core', 'cuddler', 'no-electric']
  },
  {
    id: 'csb-015', name: 'Petstages Cat Window Hammock Bed', slug: 'petstages-cat-window-hammock-bed',
    brand: 'Petstages', price: 24.99,
    description: 'Window-mounted hammock bed with strong suction cups, giving your cat a sunny perch to nap on.',
    longDescription: 'Designed for cats who can\'t resist a window seat, this hammock attaches securely with four heavy-duty suction cups rated to support up to 30 pounds. The breathable mesh fabric is removable and machine washable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3788163-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 1654, inStock: true, badge: 'New', tags: ['window-mounted', 'hammock', 'suction', 'mesh']
  },
  {
    id: 'csb-016', name: 'Trixie Sherpa-Lined Cat Cave Bed', slug: 'trixie-sherpa-lined-cat-cave-bed',
    brand: 'Trixie', price: 31.99, originalPrice: 39.99,
    description: 'Enclosed cave bed lined with soft sherpa fabric, ideal for cats who prefer privacy while resting.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4674715-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 1432, inStock: true, badge: 'Sale', tags: ['cave', 'sherpa', 'enclosed', 'privacy']
  },
  {
    id: 'csb-017', name: 'Furhaven NAP Ultra Plush Bolster Cat Bed', slug: 'furhaven-nap-ultra-plush-bolster-bed',
    brand: 'Furhaven', price: 27.99,
    description: 'Bolster-style bed with extra-thick padding and a faux fur sleep surface for joint support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2685576-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 2210, inStock: true, tags: ['bolster', 'plush', 'faux-fur', 'joint-support']
  },
  {
    id: 'csb-018', name: 'Bedsure Calming Donut Cuddler Cat Bed', slug: 'bedsure-calming-donut-cuddler-bed',
    brand: 'Bedsure', price: 23.99,
    description: 'Round calming bed with raised faux-fur rim that mimics a mother\'s warmth and touch.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3042151-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 3456, inStock: true, tags: ['donut', 'calming', 'faux-fur', 'round']
  },
  {
    id: 'csb-019', name: 'Sleepypod Air In-Cabin Pet Bed', slug: 'sleepypod-air-in-cabin-pet-bed',
    brand: 'Sleepypod', price: 174.99,
    description: 'Premium foldable pet bed designed for in-cabin air travel, expanding into a full carrier when needed.',
    longDescription: 'This award-winning bed folds flat for storage and unfolds into an airline-compliant carrier in seconds. Constructed from crash-tested materials with memory foam padding for comfort on long trips.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3721541-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.7, reviewCount: 432, inStock: true, badge: 'Premium', tags: ['travel', 'foldable', 'premium', 'memory-foam']
  },
  {
    id: 'csb-020', name: 'Armarkat Cozy Faux Fur Cat Mat', slug: 'armarkat-cozy-faux-fur-cat-mat',
    brand: 'Armarkat', price: 16.99,
    description: 'Flat faux-fur mat that provides a warm, soft surface for napping anywhere in the house.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4562609-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.1, reviewCount: 654, inStock: true, tags: ['mat', 'faux-fur', 'flat', 'budget']
  },
  {
    id: 'csb-021', name: 'On2Pets Heated Cat Bed with Removable Cover', slug: 'on2pets-heated-cat-bed-removable-cover',
    brand: 'On2Pets', price: 39.99,
    description: 'Heated bed with adjustable thermostat settings and a zip-off cover for easy machine washing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1500554-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 876, inStock: true, tags: ['heated', 'adjustable', 'removable-cover', 'washable']
  },
  {
    id: 'csb-022', name: 'Yaheetech Raised Cat Bed with Faux Fur Cushion', slug: 'yaheetech-raised-cat-bed-faux-fur-cushion',
    brand: 'Yaheetech', price: 38.99, originalPrice: 47.99,
    description: 'Elevated metal-frame bed keeps your cat off cold floors, topped with a plush faux fur cushion.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3041641-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 987, inStock: true, badge: 'Sale', tags: ['elevated', 'metal-frame', 'faux-fur', 'cushion']
  },
  {
    id: 'csb-023', name: 'Hepper Pod Modern Cat Bed', slug: 'hepper-pod-modern-cat-bed',
    brand: 'Hepper', price: 109.99,
    description: 'Sculptural pod-shaped bed with a removable, machine-washable liner and a sleek modern silhouette.',
    longDescription: 'Hepper\'s Pod bed blends contemporary design with everyday function. The cushioned liner zips out for washing, and the sturdy outer shell holds its shape so the cozy nest never collapses.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3631748-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.7, reviewCount: 543, inStock: true, badge: 'Premium', tags: ['modern', 'pod', 'washable', 'design']
  },
  {
    id: 'csb-024', name: 'PETLUV Snuggler Plush Cat Bed', slug: 'petluv-snuggler-plush-cat-bed',
    brand: 'PETLUV', price: 21.99,
    description: 'Soft snuggler bed with raised sides and an ultra-plush base, ideal for kittens and small cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3952779-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 1432, inStock: true, tags: ['snuggler', 'plush', 'kitten', 'small-cat']
  },
  {
    id: 'csb-025', name: 'K&H Pet Products Mod Half-Covered Cat Bed', slug: 'kh-mod-half-covered-cat-bed',
    brand: 'K&H Pet Products', price: 33.99,
    description: 'Half-covered hooded bed gives cats a sense of security while still allowing easy entry and exit.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1222520-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 1109, inStock: true, tags: ['half-covered', 'hooded', 'secure', 'easy-access']
  },
  {
    id: 'csb-026', name: 'Snoozer Orthopedic Cat Sofa Bed', slug: 'snoozer-orthopedic-cat-sofa-bed',
    brand: 'Snoozer', price: 49.99,
    description: 'Sofa-style bed with an orthopedic foam base designed to support joints in senior cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3041377-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 765, inStock: true, tags: ['orthopedic', 'sofa', 'senior', 'foam']
  },
  {
    id: 'csb-027', name: 'Whisker City Cuddle Cup Plush Bed', slug: 'whisker-city-cuddle-cup-plush-bed',
    brand: 'Whisker City', price: 18.99, originalPrice: 24.99,
    description: 'Small cuddle cup bed with high plush walls that create a snug, womb-like resting spot.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3631730-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 1876, inStock: true, badge: 'Sale', tags: ['cuddle-cup', 'plush', 'snug', 'small']
  },
  {
    id: 'csb-028', name: 'Frisco Heated Igloo Cat Bed', slug: 'frisco-heated-igloo-cat-bed',
    brand: 'Frisco', price: 47.99,
    description: 'Igloo-shaped enclosed bed with a built-in heating pad and a removable fleece-lined hood.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3951320-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 1342, inStock: true, badge: 'New', tags: ['igloo', 'heated', 'enclosed', 'fleece']
  },
  {
    id: 'csb-029', name: 'Bergan Soft-Sided Cat Lounge Bed', slug: 'bergan-soft-sided-cat-lounge-bed',
    brand: 'Bergan', price: 25.99,
    description: 'Low-profile lounge bed with a soft quilted top and non-slip base for stability on hardwood floors.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1222503-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.1, reviewCount: 543, inStock: true, tags: ['lounge', 'quilted', 'non-slip', 'low-profile']
  },
  {
    id: 'csb-030', name: 'Trixie Plush Cat Cuddle Sack', slug: 'trixie-plush-cat-cuddle-sack',
    brand: 'Trixie', price: 22.99,
    description: 'Sleeping bag-style cuddle sack that fully encloses your cat for maximum warmth and security.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3012568-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 987, inStock: true, tags: ['cuddle-sack', 'enclosed', 'warm', 'secure']
  },
  {
    id: 'csb-031', name: 'MidWest Quiet Time Pet Cot Elevated Bed', slug: 'midwest-quiet-time-pet-cot-elevated',
    brand: 'MidWest', price: 29.99,
    description: 'Elevated mesh cot bed that promotes airflow, keeping cats cool in warm weather.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3630340-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 1234, inStock: true, tags: ['elevated', 'cot', 'mesh', 'breathable']
  },
  {
    id: 'csb-032', name: 'Furhaven Faux Fur Cat Donut Cuddler XL', slug: 'furhaven-faux-fur-donut-cuddler-xl',
    brand: 'Furhaven', price: 32.99, originalPrice: 41.99,
    description: 'Extra-large donut cuddler bed for big cats or two cats to share, with a deep faux-fur pile.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3885650-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 2543, inStock: true, badge: 'Sale', tags: ['donut', 'extra-large', 'faux-fur', 'multi-cat']
  },
  {
    id: 'csb-033', name: 'PETLUV Premium Memory Foam Cat Bed', slug: 'petluv-premium-memory-foam-cat-bed',
    brand: 'PETLUV', price: 64.99,
    description: 'Memory foam base bed with a removable bolster ring, providing orthopedic support for cats of all ages.',
    longDescription: 'A supportive memory foam core conforms to your cat\'s body for pressure relief, while the plush bolster ring offers a comfortable headrest. The waterproof liner protects the foam, and the cover unzips for washing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2685576-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 1098, inStock: true, badge: 'Premium', tags: ['memory-foam', 'orthopedic', 'bolster', 'waterproof-liner']
  },
  {
    id: 'csb-034', name: 'Catit Style Donut Bed with Hood', slug: 'catit-style-donut-bed-with-hood',
    brand: 'Catit', price: 36.99,
    description: 'Combination donut and hooded bed lets your cat choose to curl up exposed or tuck away under the hood.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2951141-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 765, inStock: true, tags: ['donut', 'hooded', 'convertible', '2-in-1']
  },
  {
    id: 'csb-035', name: 'Ethical Pet Sleep Zone Cat Bed', slug: 'ethical-pet-sleep-zone-cat-bed',
    brand: 'Ethical Pet', price: 19.99,
    description: 'Round plush bed with a non-skid bottom, available in a soft neutral palette to match any room.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3630294-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.1, reviewCount: 654, inStock: true, tags: ['round', 'plush', 'non-skid', 'budget']
  },
  {
    id: 'csb-036', name: 'Necoichi Portable Cat Cot Bed', slug: 'necoichi-portable-cat-cot-bed',
    brand: 'Necoichi', price: 27.99,
    description: 'Lightweight portable cot bed that folds for travel, with a breathable mesh sleeping surface.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3885617-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 432, inStock: true, tags: ['portable', 'cot', 'mesh', 'foldable']
  },
  {
    id: 'csb-037', name: 'Vesper Cat Furniture Cushion Pad Set', slug: 'vesper-cat-furniture-cushion-pad-set',
    brand: 'Vesper', price: 44.99,
    description: 'Designer replacement cushion set for modern cat furniture, available in soft neutral fabrics.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3878724-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 298, inStock: true, badge: 'Premium', tags: ['cushion', 'designer', 'replacement', 'modern']
  },
  {
    id: 'csb-038', name: 'Frisco Plush Calming Cat Bed with Bolster', slug: 'frisco-plush-calming-bed-bolster',
    brand: 'Frisco', price: 28.99, originalPrice: 35.99,
    description: 'Calming bed with a thick bolster edge and ultra-soft center cushion for anxious or senior cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2950974-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.5, reviewCount: 2109, inStock: true, badge: 'Sale', tags: ['calming', 'bolster', 'plush', 'senior']
  },
  {
    id: 'csb-039', name: 'Sherpa Cozy Cuddler Cat Bed', slug: 'sherpa-cozy-cuddler-cat-bed',
    brand: 'Sherpa', price: 24.99,
    description: 'Soft sherpa cuddler bed with raised edges, machine washable and lightweight for easy moving.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3629728-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.2, reviewCount: 876, inStock: true, tags: ['sherpa', 'cuddler', 'washable', 'lightweight']
  },
  {
    id: 'csb-040', name: 'Pioneer Pet Cat Hammock Window Bed', slug: 'pioneer-pet-cat-hammock-window-bed',
    brand: 'Pioneer Pet', price: 21.99,
    description: 'Affordable window-mounted hammock with reinforced suction cups and a sturdy canvas sling.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3885561-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.0, reviewCount: 543, inStock: true, tags: ['window-mounted', 'hammock', 'canvas', 'budget']
  },
  {
    id: 'csb-041', name: 'Yaheetech Heated Cat Bed Igloo with Cushion', slug: 'yaheetech-heated-cat-bed-igloo-cushion',
    brand: 'Yaheetech', price: 41.99,
    description: 'Enclosed igloo bed with a removable heating pad and plush cushion for cold winter nights.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2897122-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.3, reviewCount: 1054, inStock: true, tags: ['igloo', 'heated', 'enclosed', 'cushion']
  },
  {
    id: 'csb-042', name: 'GoCat Cozy Corner Triangle Bed', slug: 'gocat-cozy-corner-triangle-bed',
    brand: 'GoCat', price: 19.99,
    description: 'Triangle-shaped corner bed designed to fit snugly into room corners, maximizing floor space.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2950798-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.0, reviewCount: 321, inStock: true, tags: ['corner', 'triangle', 'space-saving', 'budget']
  },
  {
    id: 'csb-043', name: 'CatastrophiCreations Wall-Mounted Cat Bunk Bed', slug: 'catastrophicreations-wall-mounted-cat-bunk-bed',
    brand: 'CatastrophiCreations', price: 89.99,
    description: 'Wall-mounted bunk-style bed with two cushioned tiers, crafted from solid wood for durability.',
    longDescription: 'This handcrafted bunk bed gives two cats their own elevated sleeping space while saving floor space. Each tier includes a removable, washable cushion, and the wood frame mounts securely to wall studs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3353178-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 412, inStock: true, badge: 'Premium', tags: ['wall-mounted', 'bunk-bed', 'wood', 'multi-cat']
  },
  {
    id: 'csb-044', name: 'Petstages Orthopedic Cooling Gel Cat Bed', slug: 'petstages-orthopedic-cooling-gel-bed',
    brand: 'Petstages', price: 38.99, originalPrice: 47.99,
    description: 'Orthopedic foam bed topped with a cooling gel layer to keep cats comfortable in warm climates.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3879031-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.4, reviewCount: 1432, inStock: true, badge: 'Sale', tags: ['orthopedic', 'cooling-gel', 'foam', 'comfort']
  },
  {
    id: 'csb-045', name: 'Hepper Sleeve Modern Felt Cat Bed', slug: 'hepper-sleeve-modern-felt-cat-bed',
    brand: 'Hepper', price: 79.99,
    description: 'Slim, modern felt sleeve bed that cats can crawl into from either end, blending into any room.',
    longDescription: 'The Sleeve\'s minimalist felt design hides a soft fleece-lined interior that cats love to burrow into. Its slim profile slides easily under furniture or against walls without taking up much space.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3788171-center-1',
    category: 'cat', type: 'supplies', subcategory: 'beds',
    rating: 4.6, reviewCount: 654, inStock: true, badge: 'Premium', tags: ['modern', 'felt', 'sleeve', 'minimalist']
  }
];

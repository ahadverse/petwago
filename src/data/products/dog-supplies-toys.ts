import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'dt-001', name: 'KONG Classic Dog Toy', slug: 'kong-classic-dog-toy',
    brand: 'KONG', price: 14.99,
    description: 'Unpredictable bounce keeps dogs entertained. Stuff with treats or peanut butter for extended play. Ultra-durable rubber.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2677656-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.8, reviewCount: 15432, inStock: true, tags: ['chew', 'interactive', 'stuffable', 'rubber']
  },
  {
    id: 'dt-002', name: 'Chuckit! Ultra Ball Medium', slug: 'chuckit-ultra-ball-medium',
    brand: 'Chuckit!', price: 9.99, originalPrice: 12.99,
    description: 'High bounce rubber ball compatible with Chuckit! launchers. Floats in water for fetch anywhere.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3831387-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 8765, inStock: true, badge: 'Sale', tags: ['fetch', 'ball', 'floating', 'outdoor']
  },
  {
    id: 'dt-003', name: 'ZippyPaws Skinny Peltz Squeaky Plush Dog Toy', slug: 'zippypaws-skinny-peltz-squeaky-plush',
    brand: 'ZippyPaws', price: 12.99,
    description: 'Cute squeaky stuffed animals in a skinny design for easy shaking. No stuffing means no mess.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2472837-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 3214, inStock: true, badge: 'New', tags: ['plush', 'squeaky', 'no-stuffing']
  },
  {
    id: 'dt-004', name: 'Nylabone Durable Double Action Chew', slug: 'nylabone-durable-double-action-chew',
    brand: 'Nylabone', price: 11.99,
    description: 'Dual-action chew toy cleans teeth and satisfies the urge to chew. Bacon-flavored for extra appeal.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/20443-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 2341, inStock: true, tags: ['chew', 'dental', 'bacon', 'durable']
  },
  {
    id: 'dt-005', name: 'Outward Hound Hide-A-Squirrel Puzzle Plush', slug: 'outward-hound-hide-a-squirrel-puzzle',
    brand: 'Outward Hound', price: 16.99,
    description: 'Interactive puzzle toy with 3 squeaky squirrels hidden in a plush tree trunk. Great for mental stimulation.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4647506-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 6543, inStock: true, tags: ['puzzle', 'squeaky', 'mental-stimulation', 'plush']
  },
  {
    id: 'dt-006', name: 'West Paw Zogoflex Hurley Durable Dog Bone', slug: 'west-paw-zogoflex-hurley-dog-bone',
    brand: 'West Paw', price: 15.99,
    description: 'Made in USA with non-toxic Zogoflex material. Floats in water and is dishwasher safe. Guaranteed tough.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3128202-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 3214, inStock: true, tags: ['made-in-usa', 'non-toxic', 'floating', 'dishwasher-safe']
  },
  {
    id: 'dt-007', name: 'Trixie Activity Flip Board Strategy Game', slug: 'trixie-activity-flip-board-strategy',
    brand: 'Trixie', price: 24.99,
    description: 'Interactive puzzle board that challenges dogs to flip cones and slide covers to find hidden treats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3132017-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 1876, inStock: true, badge: 'New', tags: ['puzzle', 'strategy', 'interactive', 'mental-stimulation']
  },
  {
    id: 'dt-008', name: 'Fluff & Tuff Plush Sea Otter Dog Toy', slug: 'fluff-tuff-plush-sea-otter',
    brand: 'Fluff & Tuff', price: 19.99,
    description: 'Ultra-durable plush toy with reinforced seams and inner tuffie layer. Machine washable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2479511-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.8, reviewCount: 987, inStock: true, tags: ['plush', 'durable', 'reinforced', 'washable']
  },
  {
    id: 'dt-009', name: 'GoughNuts Black Ring Extreme Dog Chew Toy', slug: 'goughnuts-black-ring-extreme-chew',
    brand: 'GoughNuts', price: 29.99,
    description: 'Engineered for the most aggressive chewers. Built-in safety indicator — when red shows, replace toy.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2331701-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.9, reviewCount: 2341, inStock: true, badge: 'Premium', tags: ['extreme-chewer', 'safety-indicator', 'rubber', 'indestructible']
  },
  {
    id: 'dt-010', name: 'Chuckit! Flying Squirrel Fetch Frisbee', slug: 'chuckit-flying-squirrel-frisbee',
    brand: 'Chuckit!', price: 13.99, originalPrice: 17.99,
    description: 'Unique flying squirrel shape for unpredictable flight patterns. Floats in water, easy to see.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1354906-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 2134, inStock: true, badge: 'Sale', tags: ['frisbee', 'fetch', 'floating', 'outdoor']
  },
  {
    id: 'dt-011', name: 'KONG Extreme Dog Toy', slug: 'kong-extreme-dog-toy',
    brand: 'KONG', price: 17.99,
    description: 'The toughest KONG ever made, formulated with extra-durable rubber for power chewers. Stuff with treats for hours of fun.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/838535-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.8, reviewCount: 7654, inStock: true, badge: 'Premium', tags: ['chew', 'extreme', 'stuffable', 'rubber']
  },
  {
    id: 'dt-012', name: 'Nylabone Power Chew Textured Ring', slug: 'nylabone-power-chew-textured-ring',
    brand: 'Nylabone', price: 9.99,
    description: 'Textured ring shape designed for aggressive chewers, with ridges that help clean teeth as your dog gnaws.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3893959-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 3210, inStock: true, tags: ['chew', 'textured', 'dental', 'durable']
  },
  {
    id: 'dt-013', name: 'ZippyPaws Burrow Squeaky Hide and Seek Toy', slug: 'zippypaws-burrow-hide-and-seek',
    brand: 'ZippyPaws', price: 14.99,
    description: 'Plush burrow toy with three squeaky mini toys hidden inside, encouraging natural foraging instincts.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3165177-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 5432, inStock: true, tags: ['plush', 'hide-and-seek', 'squeaky', 'mental-stimulation']
  },
  {
    id: 'dt-014', name: 'Tuffy Ultimate Gripper Ring Dog Toy', slug: 'tuffy-ultimate-gripper-ring',
    brand: 'Tuffy', price: 21.99,
    description: 'Heavy-duty plush ring toy with multiple layers of fabric and stitching for tug-of-war and fetch with tough dogs.',
    longDescription: 'Built with Tuffy\'s signature Ballistic fabric, multiple internal squeakers, and seven layers of stitching, this ring withstands intense tugging and chewing. It floats in water and machine washes for easy cleaning.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2508772-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 1987, inStock: true, badge: 'Premium', tags: ['tough', 'tug', 'plush', 'multi-layer']
  },
  {
    id: 'dt-015', name: 'Outward Hound Tornado Interactive Puzzle Toy', slug: 'outward-hound-tornado-puzzle-toy',
    brand: 'Outward Hound', price: 19.99, originalPrice: 24.99,
    description: 'Spinning interactive puzzle with hidden compartments that dogs must rotate and lift to find treats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2217879-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 2654, inStock: true, badge: 'Sale', tags: ['puzzle', 'interactive', 'treat-dispensing', 'mental-stimulation']
  },
  {
    id: 'dt-016', name: 'Multipet Loofa Dog Squeaky Plush Toy', slug: 'multipet-loofa-squeaky-plush',
    brand: 'Multipet', price: 6.99,
    description: 'Classic long plush toy with a built-in squeaker, a best-selling favorite for dogs of all sizes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3837279-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 9876, inStock: true, tags: ['plush', 'squeaky', 'classic', 'budget']
  },
  {
    id: 'dt-017', name: 'JW Pet Hol-ee Roller Rubber Ball', slug: 'jw-pet-hol-ee-roller-rubber-ball',
    brand: 'JW Pet', price: 8.99,
    description: 'Flexible rubber ball with holes that can be stuffed with treats, perfect for fetch, chew, and tug.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4795795-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 4321, inStock: true, tags: ['ball', 'fetch', 'stuffable', 'flexible']
  },
  {
    id: 'dt-018', name: 'Ruffwear Gnawt-a-Stick Dog Toy', slug: 'ruffwear-gnawt-a-stick-toy',
    brand: 'Ruffwear', price: 17.95,
    description: 'Buoyant rubber stick toy designed for fetch on land or water, with a flexible body for easy carrying.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2479465-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 1432, inStock: true, tags: ['fetch', 'floating', 'rubber', 'outdoor']
  },
  {
    id: 'dt-019', name: 'GoughNuts Maxx Stick Tough Dog Chew', slug: 'goughnuts-maxx-stick-tough-chew',
    brand: 'GoughNuts', price: 24.99,
    description: 'Extra-large rubber stick chew toy built for the most powerful jaws, with the same safety indicator as the GoughNuts Ring.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3543377-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.8, reviewCount: 1098, inStock: true, badge: 'Premium', tags: ['extreme-chewer', 'safety-indicator', 'rubber', 'large-dog']
  },
  {
    id: 'dt-020', name: 'Chuckit! Indoor Ball Soft Squeaky Toy', slug: 'chuckit-indoor-ball-soft-squeaky',
    brand: 'Chuckit!', price: 7.99,
    description: 'Lightweight foam ball with a squeaker, designed for safe indoor fetch without breaking household items.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4671493-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 2876, inStock: true, tags: ['indoor', 'ball', 'squeaky', 'lightweight']
  },
  {
    id: 'dt-021', name: 'Mammoth Flossy Chews Cottonblend Rope Tug', slug: 'mammoth-flossy-chews-rope-tug',
    brand: 'Mammoth', price: 11.99,
    description: 'Thick cotton rope toy that helps clean teeth and floss gums during tug-of-war and chew sessions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3837316-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 6210, inStock: true, tags: ['rope', 'tug', 'dental', 'cotton']
  },
  {
    id: 'dt-022', name: 'West Paw Zogoflex Tux Treat Toy', slug: 'west-paw-zogoflex-tux-treat-toy',
    brand: 'West Paw', price: 18.99,
    description: 'Versatile treat-dispensing toy made from recyclable Zogoflex material, doubles as a chew and a feeder.',
    longDescription: 'The Tux can be stuffed with kibble, treats, or peanut butter and is dishwasher safe for easy refills. Made in the USA from a single durable material that\'s 100% recyclable through West Paw\'s Join the Loop program.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1274260-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 2341, inStock: true, badge: 'Premium', tags: ['treat-dispensing', 'recyclable', 'made-in-usa', 'durable']
  },
  {
    id: 'dt-023', name: 'ZippyPaws Z-Stitch Plush Squeaky Dog Toy', slug: 'zippypaws-z-stitch-plush-squeaky',
    brand: 'ZippyPaws', price: 9.99,
    description: 'Soft plush toy with reinforced Z-stitch seams for added durability and a loud internal squeaker.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1521586-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 1765, inStock: true, tags: ['plush', 'squeaky', 'reinforced', 'budget']
  },
  {
    id: 'dt-024', name: 'Nylabone DuraChew Wishbone', slug: 'nylabone-durachew-wishbone',
    brand: 'Nylabone', price: 8.49,
    description: 'Wishbone-shaped chew toy with an easy-to-grip design, made from durable nylon for long-lasting chewing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3543246-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 2543, inStock: true, tags: ['chew', 'nylon', 'durable', 'wishbone']
  },
  {
    id: 'dt-025', name: 'Outward Hound Twist N Treat Puzzle Toy', slug: 'outward-hound-twist-n-treat-puzzle',
    brand: 'Outward Hound', price: 12.99, originalPrice: 16.99,
    description: 'Twist-and-hide treat puzzle that challenges dogs to figure out how to access hidden snacks.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1327216-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 3654, inStock: true, badge: 'Sale', tags: ['puzzle', 'treat-dispensing', 'interactive', 'mental-stimulation']
  },
  {
    id: 'dt-026', name: 'Frisco Plush Squirrel with Acorn Toy Set', slug: 'frisco-plush-squirrel-acorn-set',
    brand: 'Frisco', price: 10.99,
    description: 'Adorable plush squirrel and acorn toy set, each with a built-in squeaker for double the fun.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/646563-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 1432, inStock: true, badge: 'New', tags: ['plush', 'squeaky', 'set', 'small-dog']
  },
  {
    id: 'dt-027', name: 'KONG Wubba Classic Dog Toy', slug: 'kong-wubba-classic-dog-toy',
    brand: 'KONG', price: 8.99,
    description: 'Tug-and-fetch toy with crinkly tails and a squeaker inside, durable ballistic nylon body.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2477929-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 5876, inStock: true, tags: ['tug', 'fetch', 'squeaky', 'ballistic-nylon']
  },
  {
    id: 'dt-028', name: 'GoughNuts Indestructible Dog Ball', slug: 'goughnuts-indestructible-dog-ball',
    brand: 'GoughNuts', price: 22.99,
    description: 'Heavy-duty rubber ball built to withstand the strongest chewers, with a safety indicator layer.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/44440-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 1543, inStock: true, badge: 'Premium', tags: ['ball', 'extreme-chewer', 'rubber', 'safety-indicator']
  },
  {
    id: 'dt-029', name: 'Chuckit! Kick Fetch Ball Large', slug: 'chuckit-kick-fetch-ball-large',
    brand: 'Chuckit!', price: 16.99,
    description: 'Oversized soccer-style ball that bounces unpredictably, great for kicking, fetching, and chasing games.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3869879-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 2210, inStock: true, tags: ['ball', 'fetch', 'large-dog', 'outdoor']
  },
  {
    id: 'dt-030', name: 'West Paw Zogoflex Bumi Tug Toy', slug: 'west-paw-zogoflex-bumi-tug-toy',
    brand: 'West Paw', price: 16.99,
    description: 'S-shaped flexible tug toy made from Zogoflex material, perfect for tug, fetch, and tossing games.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/849405-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 3120, inStock: true, tags: ['tug', 'fetch', 'flexible', 'durable']
  },
  {
    id: 'dt-031', name: 'Multipet Duckworth Plush Duck Toy', slug: 'multipet-duckworth-plush-duck',
    brand: 'Multipet', price: 7.49,
    description: 'Soft plush duck toy with a classic squeaker, a long-time favorite for puppies and small dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3165126-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 4321, inStock: true, tags: ['plush', 'squeaky', 'puppy', 'classic']
  },
  {
    id: 'dt-032', name: 'Ruffwear Tumble Squeaky Ball Toy', slug: 'ruffwear-tumble-squeaky-ball',
    brand: 'Ruffwear', price: 19.95,
    description: 'Durable rubber-and-fabric ball with a squeaker inside, designed for active dogs that love to fetch.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4333339-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 876, inStock: true, tags: ['ball', 'squeaky', 'durable', 'fetch']
  },
  {
    id: 'dt-033', name: 'Nylabone Dental Chew Dinosaur', slug: 'nylabone-dental-chew-dinosaur',
    brand: 'Nylabone', price: 10.99,
    description: 'Dinosaur-shaped dental chew toy with textured ridges that help reduce plaque and tartar buildup.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4017133-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 2098, inStock: true, tags: ['chew', 'dental', 'durable', 'dinosaur']
  },
  {
    id: 'dt-034', name: 'ZippyPaws Crinkle Cracker Bottle Toy', slug: 'zippypaws-crinkle-cracker-bottle',
    brand: 'ZippyPaws', price: 5.99,
    description: 'Plush bottle-shaped toy with a crinkle insert that makes a satisfying noise dogs love, easy to swap and refill.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/721000-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 3654, inStock: true, tags: ['plush', 'crinkle', 'budget', 'small-dog']
  },
  {
    id: 'dt-035', name: 'Tuffy Mega Ring Dog Toy', slug: 'tuffy-mega-ring-dog-toy',
    brand: 'Tuffy', price: 27.99,
    description: 'Oversized version of Tuffy\'s ring toy, built with extra layers of stitched fabric for the toughest chewers and large breeds.',
    longDescription: 'The Mega Ring features Tuffy\'s signature multi-layer construction with several internal squeakers spread throughout the toy, so it keeps squeaking even after the outer layer is damaged. A great choice for big dogs that destroy regular toys quickly.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3869879-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 1654, inStock: true, badge: 'Premium', tags: ['tough', 'large-dog', 'tug', 'multi-layer']
  },
  {
    id: 'dt-036', name: 'Outward Hound Squeakin\' Animals Plush Hedgehog', slug: 'outward-hound-squeakin-plush-hedgehog',
    brand: 'Outward Hound', price: 9.49,
    description: 'Soft plush hedgehog toy with multiple squeakers sewn throughout for extended chew and play sessions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3535713-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 1876, inStock: true, tags: ['plush', 'squeaky', 'hedgehog', 'small-dog']
  },
  {
    id: 'dt-037', name: 'JW Pet iSqueak Ball with Bell', slug: 'jw-pet-isqueak-ball-with-bell',
    brand: 'JW Pet', price: 6.49,
    description: 'Bouncy rubber ball with a built-in bell and squeaker, providing both audio and tactile stimulation.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3165151-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.2, reviewCount: 1098, inStock: true, tags: ['ball', 'squeaky', 'bell', 'budget']
  },
  {
    id: 'dt-038', name: 'KONG Tires Dog Toy', slug: 'kong-tires-dog-toy',
    brand: 'KONG', price: 13.49,
    description: 'Tire-shaped chew toy made from durable rubber, great for tug, fetch, and chewing alike.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2448950-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 2654, inStock: true, tags: ['chew', 'tug', 'rubber', 'durable']
  },
  {
    id: 'dt-039', name: 'Chuckit! Erratic Ball Launcher Set', slug: 'chuckit-erratic-ball-launcher-set',
    brand: 'Chuckit!', price: 18.99, originalPrice: 22.99,
    description: 'Ball launcher and erratic-bounce ball combo for unpredictable, extra-fun fetch sessions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3666781-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 3987, inStock: true, badge: 'Sale', tags: ['fetch', 'launcher', 'ball', 'outdoor']
  },
  {
    id: 'dt-040', name: 'West Paw Zogoflex Qwizl Treat Toy', slug: 'west-paw-zogoflex-qwizl-treat-toy',
    brand: 'West Paw', price: 19.99,
    description: 'Tube-shaped treat-dispensing toy with a rope-like handle, ideal for stuffing, tugging, and fetching.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1566636-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 1432, inStock: true, tags: ['treat-dispensing', 'tug', 'durable', 'recyclable']
  },
  {
    id: 'dt-041', name: 'Frisco Hide and Seek Puzzle Plush Forest Friends', slug: 'frisco-hide-and-seek-forest-friends',
    brand: 'Frisco', price: 13.99,
    description: 'Plush log toy hiding three squeaky woodland friends, perfect for foraging games and mental enrichment.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/922080-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 2341, inStock: true, tags: ['puzzle', 'plush', 'squeaky', 'mental-stimulation']
  },
  {
    id: 'dt-042', name: 'Mammoth Cloth Knot Rope Tug', slug: 'mammoth-cloth-knot-rope-tug',
    brand: 'Mammoth', price: 9.49,
    description: 'Multi-knot cotton rope toy designed for tugging, tossing, and dental cleaning during chew sessions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1586270-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 2876, inStock: true, tags: ['rope', 'tug', 'cotton', 'dental']
  },
  {
    id: 'dt-043', name: 'GoughNuts Original Tug Toy', slug: 'goughnuts-original-tug-toy',
    brand: 'GoughNuts', price: 19.99,
    description: 'Durable rubber tug toy with a comfortable grip handle, designed to survive intense tug-of-war games.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3869852-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 987, inStock: true, tags: ['tug', 'rubber', 'durable', 'extreme-chewer']
  },
  {
    id: 'dt-044', name: 'Nylabone Puppy Chew Teething Ring Twin Pack', slug: 'nylabone-puppy-chew-teething-ring-twin',
    brand: 'Nylabone', price: 8.99,
    description: 'Soft, flexible teething rings designed specifically for puppies\' developing teeth and gums, two-pack.',
    longDescription: 'Made from a softer material than adult Nylabone chews, these rings are gentle on emerging puppy teeth while still satisfying the natural urge to chew. The textured surface helps soothe sore gums during teething.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/73709-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 3210, inStock: true, badge: 'New', tags: ['puppy', 'teething', 'chew', 'twin-pack']
  },
  {
    id: 'dt-045', name: 'ZippyPaws Jigglerz Squeaky Plush Dog Toy', slug: 'zippypaws-jigglerz-squeaky-plush',
    brand: 'ZippyPaws', price: 8.49,
    description: 'Bouncy plush toy with a flexible internal frame that wiggles and jiggles when your dog shakes it.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3535764-center-1',
    category: 'dog', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 1543, inStock: true, tags: ['plush', 'squeaky', 'jiggle', 'fun']
  }
];

import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'dto-001', name: 'Ruffwear Front Range All-Day Adventure Harness', slug: 'ruffwear-front-range-harness',
    brand: 'Ruffwear', price: 49.95,
    description: 'Comfortable everyday harness with padded chest and belly straps. Two leash attachment points — front and back.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3390403-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.8, reviewCount: 4321, inStock: true, tags: ['harness', 'adventure', 'padded', 'dual-clip']
  },
  {
    id: 'dto-002', name: 'Kurgo Journey Air Dog Harness', slug: 'kurgo-journey-air-dog-harness',
    brand: 'Kurgo', price: 59.99, originalPrice: 74.99,
    description: 'Crash-tested car safety harness and everyday adventure harness in one. Connects to seat belt.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3728890-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 1876, inStock: true, badge: 'Sale', tags: ['car-safety', 'crash-tested', 'seatbelt']
  },
  {
    id: 'dto-003', name: 'Pawaboo Dog Carrier Backpack', slug: 'pawaboo-dog-carrier-backpack',
    brand: 'Pawaboo', price: 35.99,
    description: 'Hands-free dog backpack carrier with ventilated mesh windows. Perfect for small dogs up to 18 lbs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3161299-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.3, reviewCount: 2134, inStock: true, tags: ['backpack', 'small-dog', 'carrier', 'ventilated']
  },
  {
    id: 'dto-004', name: 'Ruffwear Grip Trex Durable Dog Boots', slug: 'ruffwear-grip-trex-dog-boots',
    brand: 'Ruffwear', price: 74.95,
    description: 'Rugged trail boots protect paws on rough terrain. Vibram outsole for grip on any surface.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4578707-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 987, inStock: true, tags: ['boots', 'paw-protection', 'trail', 'vibram']
  },
  {
    id: 'dto-005', name: 'Hurtta Trail Blazer Dog Rain Coat', slug: 'hurtta-trail-blazer-rain-coat',
    brand: 'Hurtta', price: 89.99,
    description: 'Waterproof and breathable dog rain jacket with adjustable fit. Reflective details for visibility in low light.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2848638-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 543, inStock: true, tags: ['raincoat', 'waterproof', 'reflective']
  },
  {
    id: 'dto-006', name: 'EzyDog Zero Shock Dog Leash', slug: 'ezydog-zero-shock-dog-leash',
    brand: 'EzyDog', price: 24.99,
    description: 'Patented shock-absorbing technology reduces strain on dog and owner. Ergonomic handle with traffic loop.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3987437-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.7, reviewCount: 3214, inStock: true, tags: ['leash', 'shock-absorbing', 'ergonomic', 'traffic-loop']
  },
  {
    id: 'dto-007', name: 'PetSafe Gentle Leader Head Collar', slug: 'petsafe-gentle-leader-head-collar',
    brand: 'PetSafe', price: 19.99, originalPrice: 24.99,
    description: 'Redirects pulling from front of the neck. Vet recommended for dogs that pull on leash.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3818289-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.4, reviewCount: 6543, inStock: true, badge: 'Sale', tags: ['head-collar', 'anti-pull', 'vet-recommended', 'training']
  },
  {
    id: 'dto-008', name: 'Ruffwear Approach Dog Pack Backpack', slug: 'ruffwear-approach-dog-pack',
    brand: 'Ruffwear', price: 89.95,
    description: 'Trail-ready dog pack for carrying your dog\'s own gear. Two saddlebags and top handle.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4610906-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 876, inStock: true, tags: ['backpack', 'trail', 'saddlebags', 'hiking']
  },
  {
    id: 'dto-009', name: 'Outward Hound Granby Life Jacket', slug: 'outward-hound-granby-life-jacket',
    brand: 'Outward Hound', price: 34.99,
    description: 'Dog life jacket with reflective accents and rescue handle. Multiple belly adjustment straps.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3543887-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 4321, inStock: true, badge: 'New', tags: ['life-jacket', 'water', 'reflective', 'rescue-handle']
  },
  {
    id: 'dto-010', name: 'RC Pet Products Primary Paw Dog Coat', slug: 'rc-pet-products-primary-paw-coat',
    brand: 'RC Pet Products', price: 44.99,
    description: 'Waterproof dog coat with adjustable fit and reflective trim. Keeps dogs dry and visible at night.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4580381-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 654, inStock: true, tags: ['waterproof', 'reflective', 'adjustable', 'night-visibility']
  },
  {
    id: 'dto-011', name: 'Julius-K9 IDC Powerharness', slug: 'julius-k9-idc-powerharness',
    brand: 'Julius-K9', price: 64.99,
    description: 'Ergonomic, non-restrictive harness with a sturdy handle on top, popular with working and service dog handlers.',
    longDescription: 'The IDC Powerharness distributes pressure evenly across the chest without restricting shoulder movement, making it ideal for active dogs and training. Interchangeable side patches let you customize the harness for IDs or decoration.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1260294-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.7, reviewCount: 5234, inStock: true, badge: 'Premium', tags: ['harness', 'working-dog', 'ergonomic', 'handle']
  },
  {
    id: 'dto-012', name: 'Kurgo Tru-Fit Smart Harness with Seatbelt Tether', slug: 'kurgo-tru-fit-smart-harness-tether',
    brand: 'Kurgo', price: 39.99,
    description: 'Five-point adjustable harness that doubles as a car safety harness with an included seatbelt tether.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3544556-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 3654, inStock: true, tags: ['harness', 'car-safety', 'adjustable', 'tether']
  },
  {
    id: 'dto-013', name: 'PetSafe 3-in-1 Reflective Dog Harness', slug: 'petsafe-3-in-1-reflective-harness',
    brand: 'PetSafe', price: 29.99, originalPrice: 36.99,
    description: 'Versatile harness usable as a walking harness, car restraint, or front-clip training harness.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1492403-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.4, reviewCount: 2876, inStock: true, badge: 'Sale', tags: ['harness', 'reflective', 'multi-use', 'training']
  },
  {
    id: 'dto-014', name: 'Frisco Outdoor Heavy Duty Nylon Dog Leash', slug: 'frisco-outdoor-heavy-duty-nylon-leash',
    brand: 'Frisco', price: 14.99,
    description: 'Rugged 6-foot nylon leash with a padded handle and reflective stitching for low-light visibility.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3920726-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.4, reviewCount: 4123, inStock: true, tags: ['leash', 'nylon', 'reflective', 'padded-handle']
  },
  {
    id: 'dto-015', name: 'Ruffwear Knot-a-Leash Climbing Rope Leash', slug: 'ruffwear-knot-a-leash-climbing-rope',
    brand: 'Ruffwear', price: 34.95,
    description: 'Durable climbing-rope leash with a reflective tracer and a comfortable looped handle for control.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3279692-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 1654, inStock: true, tags: ['leash', 'climbing-rope', 'reflective', 'durable']
  },
  {
    id: 'dto-016', name: 'PetSafe Come With Me Kitty Harness & Bungee Leash', slug: 'petsafe-come-with-me-bungee-leash',
    brand: 'PetSafe', price: 17.99,
    description: 'Bungee leash with shock-absorbing stretch, reducing jolts from sudden pulls during walks.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3728486-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.2, reviewCount: 987, inStock: true, tags: ['leash', 'bungee', 'shock-absorbing', 'walking']
  },
  {
    id: 'dto-017', name: 'Mendota Slip Lead Training Leash', slug: 'mendota-slip-lead-training-leash',
    brand: 'Mendota', price: 22.99,
    description: 'Classic slip lead combining a collar and leash in one, popular with trainers and shelters for quick control.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3544134-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.7, reviewCount: 2341, inStock: true, tags: ['slip-lead', 'training', 'leash', 'collar']
  },
  {
    id: 'dto-018', name: 'Frisco Solid Nylon Dog Collar', slug: 'frisco-solid-nylon-dog-collar',
    brand: 'Frisco', price: 8.99,
    description: 'Adjustable nylon collar with a quick-release buckle and a sturdy D-ring for leash attachment.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3294340-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.3, reviewCount: 5432, inStock: true, tags: ['collar', 'nylon', 'adjustable', 'budget']
  },
  {
    id: 'dto-019', name: 'Embark Personalized Leather Dog Collar', slug: 'embark-personalized-leather-collar',
    brand: 'Embark', price: 39.99,
    description: 'Genuine leather collar with custom-engraved nameplate, combining durability with a classic look.',
    longDescription: 'Hand-finished from full-grain leather, this collar softens with wear while maintaining its strength. The engraved nameplate includes your dog\'s name and your phone number, eliminating the need for a separate jingling tag.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3920873-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 1098, inStock: true, badge: 'Premium', tags: ['collar', 'leather', 'personalized', 'engraved']
  },
  {
    id: 'dto-020', name: 'Whistle Go Explore GPS Dog Tracker', slug: 'whistle-go-explore-gps-tracker',
    brand: 'Whistle', price: 99.95,
    description: 'GPS tracker that clips onto any collar, providing real-time location, escape alerts, and activity tracking.',
    longDescription: 'The Whistle Go Explore uses GPS, cellular, and Wi-Fi to pinpoint your dog\'s location anywhere there\'s cell coverage. It also monitors daily activity, sleep, and licking/scratching behaviors, sending alerts straight to your phone.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3920937-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.3, reviewCount: 3210, inStock: true, badge: 'New', tags: ['gps', 'tracker', 'smart', 'activity-monitor']
  },
  {
    id: 'dto-021', name: 'Tractive GPS Dog Tracker', slug: 'tractive-gps-dog-tracker',
    brand: 'Tractive', price: 49.99, originalPrice: 59.99,
    description: 'Lightweight, waterproof GPS tracker with live tracking and virtual fence alerts via a smartphone app.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3236730-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.2, reviewCount: 2654, inStock: true, badge: 'Sale', tags: ['gps', 'tracker', 'waterproof', 'virtual-fence']
  },
  {
    id: 'dto-022', name: 'Kurgo Wander Car Seat Cover Hammock', slug: 'kurgo-wander-car-seat-cover-hammock',
    brand: 'Kurgo', price: 79.99,
    description: 'Waterproof hammock-style seat cover that protects car seats from mud, hair, and scratches during travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3242751-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 1876, inStock: true, tags: ['car-seat-cover', 'hammock', 'waterproof', 'travel']
  },
  {
    id: 'dto-023', name: 'PetSafe Happy Ride Bench Seat Cover', slug: 'petsafe-happy-ride-bench-seat-cover',
    brand: 'PetSafe', price: 54.99,
    description: 'Quilted bench seat cover with non-slip backing and side flaps to protect door panels from scratches.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4561374-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.4, reviewCount: 1432, inStock: true, tags: ['car-seat-cover', 'quilted', 'non-slip', 'travel']
  },
  {
    id: 'dto-024', name: 'Ruffwear Polar Trex Insulated Dog Boots', slug: 'ruffwear-polar-trex-insulated-boots',
    brand: 'Ruffwear', price: 89.95,
    description: 'Insulated winter boots with a waterproof membrane, designed to protect paws from snow, ice, and salt.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3728363-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 765, inStock: true, badge: 'Premium', tags: ['boots', 'insulated', 'winter', 'waterproof']
  },
  {
    id: 'dto-025', name: 'Frisco Dog Snow Suit with Hood', slug: 'frisco-dog-snow-suit-hood',
    brand: 'Frisco', price: 38.99,
    description: 'Insulated full-body snow suit with a hood and adjustable straps, keeping small breeds warm in winter weather.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4012834-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.4, reviewCount: 1098, inStock: true, tags: ['snow-suit', 'winter', 'insulated', 'small-dog']
  },
  {
    id: 'dto-026', name: 'Outward Hound PupSaver Booster Car Seat', slug: 'outward-hound-pupsaver-booster-seat',
    brand: 'Outward Hound', price: 64.99,
    description: 'Crash-tested booster car seat for small dogs, with a built-in harness tether for added safety.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2333407-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 2341, inStock: true, tags: ['car-seat', 'booster', 'small-dog', 'crash-tested']
  },
  {
    id: 'dto-027', name: 'Kurgo Loft Dog Jacket Reversible', slug: 'kurgo-loft-dog-jacket-reversible',
    brand: 'Kurgo', price: 44.99, originalPrice: 54.99,
    description: 'Reversible insulated jacket with water-resistant outer shell and a cozy fleece lining for cold-weather walks.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2997676-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 1543, inStock: true, badge: 'Sale', tags: ['jacket', 'reversible', 'insulated', 'winter']
  },
  {
    id: 'dto-028', name: 'EzyDog Cujo Convertible Dog Harness', slug: 'ezydog-cujo-convertible-harness',
    brand: 'EzyDog', price: 54.99,
    description: 'Heavy-duty convertible harness for large dogs, with reinforced webbing and multiple attachment points.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3920937-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 987, inStock: true, tags: ['harness', 'large-dog', 'heavy-duty', 'convertible']
  },
  {
    id: 'dto-029', name: 'Ruffwear Float Coat Dog Life Jacket', slug: 'ruffwear-float-coat-life-jacket',
    brand: 'Ruffwear', price: 99.95,
    description: 'High-visibility flotation vest with a sturdy rescue handle and adjustable straps for secure, buoyant swims.',
    longDescription: 'Built with closed-cell foam panels for buoyancy and a reflective trim for visibility, the Float Coat is trusted by water rescue teams. The handle on top makes it easy to lift your dog in and out of boats or water.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3859021-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.7, reviewCount: 1654, inStock: true, badge: 'Premium', tags: ['life-jacket', 'water', 'rescue-handle', 'visibility']
  },
  {
    id: 'dto-030', name: 'Frisco Adjustable Reflective Dog Collar', slug: 'frisco-adjustable-reflective-collar',
    brand: 'Frisco', price: 10.99,
    description: 'Lightweight adjustable collar with reflective threading woven throughout for nighttime visibility.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3338103-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.3, reviewCount: 3214, inStock: true, tags: ['collar', 'reflective', 'adjustable', 'budget']
  },
  {
    id: 'dto-031', name: 'Kurgo Nomad Hiking Dog Pack', slug: 'kurgo-nomad-hiking-dog-pack',
    brand: 'Kurgo', price: 64.99,
    description: 'Lightweight hiking pack with two zippered saddlebags, designed for dogs to carry their own water and snacks.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3225820-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.4, reviewCount: 1098, inStock: true, tags: ['backpack', 'hiking', 'saddlebags', 'lightweight']
  },
  {
    id: 'dto-032', name: 'Julius-K9 Color & Gray Adjustable Leash', slug: 'julius-k9-color-gray-adjustable-leash',
    brand: 'Julius-K9', price: 29.99,
    description: 'Adjustable multi-position leash that converts from a standard lead to a hands-free crossbody style.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2333407-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 876, inStock: true, tags: ['leash', 'adjustable', 'hands-free', 'multi-position']
  },
  {
    id: 'dto-033', name: 'Outward Hound Quencher Travel Dog Bowl Pack', slug: 'outward-hound-quencher-travel-bowl-pack',
    brand: 'Outward Hound', price: 9.99,
    description: 'Set of two collapsible silicone travel bowls with a clip, attaches easily to a backpack or leash.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3563802-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.2, reviewCount: 2098, inStock: true, tags: ['travel-bowl', 'collapsible', 'silicone', 'hiking']
  },
  {
    id: 'dto-034', name: 'PetSafe SmartDoor Microchip Pet Door', slug: 'petsafe-smartdoor-microchip-pet-door',
    brand: 'PetSafe', price: 199.95,
    description: 'Selective-entry pet door that reads your dog\'s microchip to allow access while keeping other animals out.',
    longDescription: 'The SmartDoor stores up to 40 pet ID profiles and only unlocks for registered chips, keeping out neighborhood animals and pests. The 4-way locking mode lets you control access for in, out, both, or neither at any time.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2793251-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.3, reviewCount: 1432, inStock: true, badge: 'Premium', tags: ['pet-door', 'microchip', 'smart', 'security']
  },
  {
    id: 'dto-035', name: 'Frisco Mesh Travel Carrier Tote', slug: 'frisco-mesh-travel-carrier-tote',
    brand: 'Frisco', price: 27.99, originalPrice: 34.99,
    description: 'Soft-sided mesh carrier tote for small dogs, with a shoulder strap and front pocket for essentials.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3992025-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.3, reviewCount: 1765, inStock: true, badge: 'Sale', tags: ['carrier', 'small-dog', 'mesh', 'travel']
  },
  {
    id: 'dto-036', name: 'EzyDog Chest Plate Custom Fit Harness', slug: 'ezydog-chest-plate-custom-fit-harness',
    brand: 'EzyDog', price: 49.99,
    description: 'Custom-fit harness with a padded chest plate for distributing pressure evenly across the chest and back.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3966302-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 1287, inStock: true, tags: ['harness', 'padded', 'custom-fit', 'comfort']
  },
  {
    id: 'dto-037', name: 'Hurtta Extreme Warmer Dog Jacket', slug: 'hurtta-extreme-warmer-dog-jacket',
    brand: 'Hurtta', price: 79.99,
    description: 'Heavyweight insulated jacket designed for extreme cold, with a windproof shell and thermal lining.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3338103-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 654, inStock: true, tags: ['jacket', 'extreme-cold', 'windproof', 'insulated']
  },
  {
    id: 'dto-038', name: 'Ruffwear Web Master Harness', slug: 'ruffwear-web-master-harness',
    brand: 'Ruffwear', price: 84.95,
    description: 'Escape-resistant harness with five points of adjustment and a top handle, ideal for dogs that need extra security.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3509671-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.7, reviewCount: 1098, inStock: true, badge: 'Premium', tags: ['harness', 'escape-resistant', 'adjustable', 'handle']
  },
  {
    id: 'dto-039', name: 'Kurgo Dog Boots All-Weather', slug: 'kurgo-dog-boots-all-weather',
    brand: 'Kurgo', price: 34.99,
    description: 'Flexible all-weather boots with a non-slip rubber sole and adjustable hook-and-loop closure.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3818289-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.2, reviewCount: 1654, inStock: true, tags: ['boots', 'all-weather', 'non-slip', 'adjustable']
  },
  {
    id: 'dto-040', name: 'Frisco Lighted Safety Dog Collar', slug: 'frisco-lighted-safety-collar',
    brand: 'Frisco', price: 13.99,
    description: 'USB-rechargeable LED collar that improves visibility during nighttime walks, with multiple light modes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3927531-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.3, reviewCount: 2541, inStock: true, badge: 'New', tags: ['collar', 'led', 'rechargeable', 'safety']
  },
  {
    id: 'dto-041', name: 'PetSafe Solvit PupStep Plus Pet Stairs', slug: 'petsafe-solvit-pupstep-plus-stairs',
    brand: 'PetSafe', price: 49.99,
    description: 'Lightweight folding pet stairs that help small dogs and senior dogs safely access cars and high beds.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3421581-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.4, reviewCount: 1987, inStock: true, tags: ['stairs', 'foldable', 'senior-dog', 'car-access']
  },
  {
    id: 'dto-042', name: 'Outward Hound Daypak Multi-Use Saddleback Pack', slug: 'outward-hound-daypak-saddleback-pack',
    brand: 'Outward Hound', price: 29.99,
    description: 'Versatile saddleback pack with reflective trim and adjustable straps, suitable for everyday walks or hikes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3545356-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.2, reviewCount: 765, inStock: true, tags: ['backpack', 'saddleback', 'reflective', 'everyday']
  },
  {
    id: 'dto-043', name: 'Julius-K9 IDC Rain Coat', slug: 'julius-k9-idc-rain-coat',
    brand: 'Julius-K9', price: 47.99,
    description: 'Waterproof rain coat designed to fit over the IDC Powerharness, with a high collar and adjustable hood.',
    longDescription: 'Made from durable, waterproof fabric with taped seams, this coat is designed to layer seamlessly over Julius-K9 harnesses without restricting movement. The reflective piping and adjustable hood add visibility and weather protection.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4591821-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.5, reviewCount: 432, inStock: true, tags: ['raincoat', 'waterproof', 'harness-compatible', 'reflective']
  },
  {
    id: 'dto-044', name: 'K&H Pet Products Travel Safety Dog Coat', slug: 'kh-travel-safety-dog-coat',
    brand: 'K&H Pet Products', price: 32.99, originalPrice: 39.99,
    description: 'Bright, high-visibility coat with reflective strips, designed for safety during early morning or evening walks.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3721591-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.1, reviewCount: 543, inStock: true, badge: 'Sale', tags: ['coat', 'high-visibility', 'reflective', 'safety']
  },
  {
    id: 'dto-045', name: 'Ruffwear Trail Runner Hydration Vest', slug: 'ruffwear-trail-runner-hydration-vest',
    brand: 'Ruffwear', price: 109.95,
    description: 'Hydration vest with collapsible bottles included, allowing dogs to carry their own water on long trail runs.',
    longDescription: 'Designed for endurance athletes and their dogs, this vest features a low center of gravity, breathable mesh panels, and pockets for two soft-flask bottles. Reflective trim and a top handle add safety and control on the trail.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4595179-center-1',
    category: 'dog', type: 'supplies', subcategory: 'travel-outdoor',
    rating: 4.6, reviewCount: 321, inStock: true, badge: 'Premium', tags: ['hydration', 'trail-running', 'vest', 'hiking']
  }
];

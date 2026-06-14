import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'dh-001', name: 'MidWest Homes iCrate Fold & Carry Single Door Crate', slug: 'midwest-icrate-fold-carry-single-door',
    brand: 'MidWest Homes', price: 59.99,
    description: 'Durable folding metal dog crate with single door. Sets up in seconds, folds flat for easy transport and storage.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2877754-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 3241, inStock: true, tags: ['crate', 'foldable', 'metal']
  },
  {
    id: 'dh-002', name: 'AmazonBasics Folding Metal Dog Crate', slug: 'amazonbasics-folding-metal-crate',
    brand: 'AmazonBasics', price: 47.99, originalPrice: 59.99,
    description: 'Affordable and sturdy folding metal crate. Features a slide-bolt door latch and removable plastic tray.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1314025-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 6754, inStock: true, badge: 'Sale', tags: ['crate', 'budget', 'foldable']
  },
  {
    id: 'dh-003', name: 'Petmate Sky Kennel Plastic Dog Kennel', slug: 'petmate-sky-kennel-plastic',
    brand: 'Petmate', price: 69.99,
    description: 'IATA-compliant airline-approved plastic dog kennel. Secure twist locking system with ventilation on all sides.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3998953-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 1234, inStock: true, tags: ['airline', 'plastic', 'travel']
  },
  {
    id: 'dh-004', name: 'IRIS USA Wire Dog Pen / Exercise Pen', slug: 'iris-usa-wire-exercise-pen',
    brand: 'IRIS USA', price: 54.99, originalPrice: 69.99,
    description: '8-panel exercise pen that gives your dog a safe play area. Works indoors and outdoors. Easy to assemble.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1494872-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 876, inStock: true, badge: 'Sale', tags: ['pen', 'exercise', 'outdoor']
  },
  {
    id: 'dh-005', name: 'BestPet Heavy Duty Dog Crate Kennel', slug: 'bestpet-heavy-duty-crate-kennel',
    brand: 'BestPet', price: 89.99,
    description: 'Extra sturdy heavy-duty crate for large and powerful dogs. Reinforced steel construction with escape-proof locks.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3414196-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 432, inStock: true, tags: ['heavy-duty', 'large-dog', 'escape-proof']
  },
  {
    id: 'dh-006', name: 'Frisco Fold & Carry Double Door Dog Crate', slug: 'frisco-fold-carry-double-door-crate',
    brand: 'Frisco', price: 64.99, originalPrice: 79.99,
    description: 'Foldable wire crate with front and side doors. Divider panel included for use as puppy grows.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/242934-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 2134, inStock: true, badge: 'Sale', tags: ['double-door', 'foldable', 'divider', 'puppy']
  },
  {
    id: 'dh-007', name: 'Diggs Revol Collapsible Travel Dog Crate', slug: 'diggs-revol-collapsible-travel-crate',
    brand: 'Diggs', price: 295.00,
    description: 'Award-winning collapsible dog crate with aluminum construction. Opens from top, front, and side.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2249408-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.8, reviewCount: 876, inStock: true, badge: 'Premium', tags: ['premium', 'aluminum', 'collapsible', 'award-winning']
  },
  {
    id: 'dh-008', name: 'Carlson Extra Wide Expandable Pet Gate', slug: 'carlson-extra-wide-expandable-pet-gate',
    brand: 'Carlson Pet Products', price: 44.99,
    description: 'Pressure-mounted pet gate that expands from 29 to 52 inches wide. Small pet door for small dogs and cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/243981-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 3421, inStock: true, tags: ['gate', 'expandable', 'pressure-mount', 'pet-door']
  },
  {
    id: 'dh-009', name: 'Richell Convertible Pet Gate Extra Wide', slug: 'richell-convertible-pet-gate-extra-wide',
    brand: 'Richell', price: 89.99,
    description: 'Converts between free-standing and wall-mounted configurations. Walk-through door with safety lock.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3998849-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 765, inStock: true, tags: ['convertible', 'walk-through', 'safety-lock', 'wood']
  },
  {
    id: 'dh-010', name: 'Paws & Pals Large Soft-Sided Pet Playpen', slug: 'paws-pals-soft-sided-playpen',
    brand: 'Paws & Pals', price: 49.99, originalPrice: 64.99,
    description: 'Portable soft-sided playpen with mesh windows for ventilation. Folds flat for easy transport.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/242934-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 543, inStock: true, badge: 'Sale', tags: ['playpen', 'portable', 'mesh', 'foldable']
  },
  {
    id: 'dh-011', name: 'Frisco Heavy Duty Steel Dog Crate with Wheels', slug: 'frisco-heavy-duty-steel-crate-wheels',
    brand: 'Frisco', price: 109.99,
    description: 'Rolling heavy-duty steel crate built for large and giant breeds. Reinforced corners and double-locking latches keep determined escape artists secure.',
    longDescription: 'Engineered with welded steel tubing and a powder-coated finish for years of daily use. Two locking caster wheels make it easy to reposition the crate, while the leak-proof removable tray simplifies cleanup.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3943709-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 1542, inStock: true, badge: 'Premium', tags: ['heavy-duty', 'steel', 'large-dog', 'wheels']
  },
  {
    id: 'dh-012', name: 'PetSafe Wylie Wood Pet Gate', slug: 'petsafe-wylie-wood-pet-gate',
    brand: 'PetSafe', price: 64.99,
    description: 'Solid wood pressure-mount gate with a walk-through door and one-handed operation, blending into home decor.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4612362-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 987, inStock: true, tags: ['gate', 'wood', 'walk-through', 'pressure-mount']
  },
  {
    id: 'dh-013', name: 'MidWest Homes Ultima Pro Double Door Crate', slug: 'midwest-ultima-pro-double-door-crate',
    brand: 'MidWest Homes', price: 119.99, originalPrice: 139.99,
    description: 'Heavy-gauge wire crate with rounded corners and extra-wide door openings for easy entry and exit.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2877391-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 2876, inStock: true, badge: 'Sale', tags: ['crate', 'double-door', 'heavy-gauge', 'wire']
  },
  {
    id: 'dh-014', name: 'IRIS USA 4-Panel Wood Pet Pen', slug: 'iris-usa-4-panel-wood-pet-pen',
    brand: 'IRIS USA', price: 79.99,
    description: 'Decorative wooden exercise pen that creates a stylish enclosure for puppies and small dogs indoors.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2303937-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 432, inStock: true, tags: ['pen', 'wood', 'indoor', 'puppy']
  },
  {
    id: 'dh-015', name: 'Petmate Indigo Vari Dog Kennel', slug: 'petmate-indigo-vari-dog-kennel',
    brand: 'Petmate', price: 84.99,
    description: 'Two-piece plastic kennel with secure side-latch system, designed for both home use and air travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3992252-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 1654, inStock: true, tags: ['kennel', 'plastic', 'travel', 'durable']
  },
  {
    id: 'dh-016', name: 'Carlson Pet Products Design Studio Pet Gate', slug: 'carlson-design-studio-pet-gate',
    brand: 'Carlson Pet Products', price: 54.99,
    description: 'Decorative metal pet gate with an elegant scrollwork pattern that fits openings from 29 to 38 inches.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1314068-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 654, inStock: true, tags: ['gate', 'decorative', 'metal', 'walk-through']
  },
  {
    id: 'dh-017', name: 'MidWest Homes Snap\'y Fit Wire Crate', slug: 'midwest-snapy-fit-wire-crate',
    brand: 'MidWest Homes', price: 39.99,
    description: 'Compact snap-together wire crate, ideal for small breeds and travel. No tools required for assembly.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2990255-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 2103, inStock: true, tags: ['crate', 'small-dog', 'portable', 'no-tools']
  },
  {
    id: 'dh-018', name: 'Richell Wooden Pet Crate End Table', slug: 'richell-wooden-pet-crate-end-table',
    brand: 'Richell', price: 199.99,
    description: 'Stylish furniture-grade wood crate that doubles as an end table, with a removable plastic tray for easy cleaning.',
    longDescription: 'Crafted to look like real furniture, this crate features a sliding door, a flat top surface for displaying decor, and a sturdy frame rated for dogs up to 25 lbs. Perfect for pet owners who want function without sacrificing style.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3370891-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 765, inStock: true, badge: 'Premium', tags: ['furniture', 'wood', 'crate', 'small-dog']
  },
  {
    id: 'dh-019', name: 'K&H Pet Products Outdoor Dog House', slug: 'kh-outdoor-dog-house',
    brand: 'K&H Pet Products', price: 159.99,
    description: 'Insulated outdoor dog house with raised floor and weatherproof roof to keep pets dry and comfortable year-round.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1314106-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 1098, inStock: true, tags: ['dog-house', 'outdoor', 'insulated', 'weatherproof']
  },
  {
    id: 'dh-020', name: 'Petmate Big Dog Barn Home Plastic Dog House', slug: 'petmate-big-dog-barn-home',
    brand: 'Petmate', price: 134.99, originalPrice: 159.99,
    description: 'Durable plastic dog house with a barn-style design, raised floor, and sliding door for added warmth.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4650262-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 543, inStock: true, badge: 'Sale', tags: ['dog-house', 'plastic', 'outdoor', 'large-dog']
  },
  {
    id: 'dh-021', name: 'MidWest Homes iCrate Triple Door Folding Crate', slug: 'midwest-icrate-triple-door-folding',
    brand: 'MidWest Homes', price: 94.99,
    description: 'Three-door folding crate with top, front, and side access plus a divider panel for growing puppies.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4782919-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 3987, inStock: true, tags: ['crate', 'triple-door', 'foldable', 'divider']
  },
  {
    id: 'dh-022', name: 'IRIS USA Plastic Dog Crate with Locking Door', slug: 'iris-usa-plastic-crate-locking-door',
    brand: 'IRIS USA', price: 74.99,
    description: 'Sturdy plastic crate with a secure locking door and built-in handle for portability and travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2877615-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 876, inStock: true, tags: ['crate', 'plastic', 'travel', 'locking']
  },
  {
    id: 'dh-023', name: 'Frisco Modern Wire Dog Crate', slug: 'frisco-modern-wire-dog-crate',
    brand: 'Frisco', price: 99.99,
    description: 'Sleek black wire crate with a modern aesthetic, slide-bolt latches, and a leak-proof plastic pan.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3370146-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 1287, inStock: true, badge: 'New', tags: ['crate', 'modern', 'wire', 'black']
  },
  {
    id: 'dh-024', name: 'Carlson Lil Tuffy Expandable Gate', slug: 'carlson-lil-tuffy-expandable-gate',
    brand: 'Carlson Pet Products', price: 32.99,
    description: 'Compact expandable gate designed for small dogs and cats, with a one-hand operated walk-through door.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3042628-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.1, reviewCount: 421, inStock: true, tags: ['gate', 'small-dog', 'expandable', 'compact']
  },
  {
    id: 'dh-025', name: 'IRIS USA 8-Panel Exercise Pen with Door', slug: 'iris-usa-8-panel-pen-with-door',
    brand: 'IRIS USA', price: 64.99,
    description: 'Extra-tall 8-panel exercise pen with a hinged door panel, perfect for medium to large dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2886618-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 1102, inStock: true, tags: ['pen', 'exercise', 'tall', 'door-panel']
  },
  {
    id: 'dh-026', name: 'MidWest Homes Wabbitat Small Animal Pen', slug: 'midwest-wabbitat-small-animal-pen',
    brand: 'MidWest Homes', price: 49.99,
    description: 'Versatile wire pen suitable for puppies and small pets, with a fold-down door for easy access.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3992156-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 654, inStock: true, tags: ['pen', 'small-pet', 'wire', 'fold-down']
  },
  {
    id: 'dh-027', name: 'Diggs Stori Crate End Table with Storage', slug: 'diggs-stori-crate-end-table-storage',
    brand: 'Diggs', price: 349.00,
    description: 'Modern crate-and-table hybrid with built-in storage drawers, designed for apartments and small spaces.',
    longDescription: 'The Stori combines a comfortable, well-ventilated crate with a stylish wood-finish exterior and two storage drawers for leashes, treats, and toys. Assembles without tools and includes a removable, washable liner.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2877615-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 1432, inStock: true, badge: 'Premium', tags: ['crate', 'furniture', 'storage', 'modern']
  },
  {
    id: 'dh-028', name: 'Petmate Aspen Pet Soft-Sided Pet Carrier Crate', slug: 'petmate-aspen-soft-sided-carrier-crate',
    brand: 'Petmate', price: 42.99,
    description: 'Lightweight soft-sided crate with mesh ventilation panels, ideal for car trips and vet visits.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2593567-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 987, inStock: true, tags: ['soft-sided', 'carrier', 'lightweight', 'travel']
  },
  {
    id: 'dh-029', name: 'Richell Freestanding Pet Gate with Door', slug: 'richell-freestanding-gate-with-door',
    brand: 'Richell', price: 109.99,
    description: 'Freestanding wooden gate with a lockable door, no wall mounting required for flexible placement.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3998777-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 765, inStock: true, tags: ['gate', 'freestanding', 'wood', 'lockable']
  },
  {
    id: 'dh-030', name: 'K&H Pet Products Amazin\' Kitty Litter Box Enclosure', slug: 'kh-pet-house-multi-pet-enclosure',
    brand: 'K&H Pet Products', price: 69.99, originalPrice: 84.99,
    description: 'Ventilated multi-pet enclosure with a hinged top, suitable for small dogs and other small pets.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3134477-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.1, reviewCount: 321, inStock: true, badge: 'Sale', tags: ['enclosure', 'small-pet', 'ventilated', 'hinged-top']
  },
  {
    id: 'dh-031', name: 'BestPet 42-Inch Double Door Folding Crate', slug: 'bestpet-42-inch-double-door-crate',
    brand: 'BestPet', price: 74.99,
    description: 'Large double-door folding crate with a divider panel, suited for medium to large dog breeds.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3204341-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 1876, inStock: true, tags: ['crate', 'double-door', 'large-dog', 'divider']
  },
  {
    id: 'dh-032', name: 'Frisco Indoor Wooden Dog House with Porch', slug: 'frisco-indoor-wooden-dog-house-porch',
    brand: 'Frisco', price: 149.99,
    description: 'Charming indoor wooden dog house with a covered porch area, finished with a non-toxic, pet-safe coating.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3204295-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 432, inStock: true, badge: 'New', tags: ['dog-house', 'indoor', 'wood', 'porch']
  },
  {
    id: 'dh-033', name: 'IRIS USA Wood Folding Pet Gate', slug: 'iris-usa-wood-folding-pet-gate',
    brand: 'IRIS USA', price: 59.99,
    description: 'Foldable wooden gate that stores flat when not in use, with a sturdy walk-through door.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2877391-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 543, inStock: true, tags: ['gate', 'wood', 'foldable', 'walk-through']
  },
  {
    id: 'dh-034', name: 'MidWest Homes Life Stages Double Door Crate XXL', slug: 'midwest-life-stages-double-door-xxl',
    brand: 'MidWest Homes', price: 159.99,
    description: 'Extra-extra-large wire crate built for giant breeds, with reinforced floor and dual divider panels.',
    longDescription: 'Designed specifically for giant breeds like Great Danes and Mastiffs, this crate features a heavy-duty floor pan, two slide-bolt latches per door, and an included divider so it can grow with your puppy from 8 weeks to full size.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3998953-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 2341, inStock: true, badge: 'Premium', tags: ['crate', 'giant-breed', 'xxl', 'reinforced']
  },
  {
    id: 'dh-035', name: 'Petmate Two Door Top Load Kennel', slug: 'petmate-two-door-top-load-kennel',
    brand: 'Petmate', price: 79.99,
    description: 'Plastic travel kennel featuring both a front door and a top-loading door for easier loading of nervous pets.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2877615-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 1098, inStock: true, tags: ['kennel', 'plastic', 'top-load', 'travel']
  },
  {
    id: 'dh-036', name: 'Carlson Single Panel Pressure Mount Pet Gate', slug: 'carlson-single-panel-pressure-mount-gate',
    brand: 'Carlson Pet Products', price: 36.99,
    description: 'Simple, sturdy single-panel pressure mount gate that fits doorways and hallways from 18 to 31 inches.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4650246-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.0, reviewCount: 287, inStock: true, tags: ['gate', 'pressure-mount', 'doorway', 'compact']
  },
  {
    id: 'dh-037', name: 'Richell Wire Mesh Top Pet Playpen', slug: 'richell-wire-mesh-top-playpen',
    brand: 'Richell', price: 124.99,
    description: 'Tall exercise playpen with a removable wire mesh top to prevent jumping and climbing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3943709-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 654, inStock: true, tags: ['playpen', 'mesh-top', 'tall', 'jump-proof']
  },
  {
    id: 'dh-038', name: 'IRIS USA Round Portable Pet Pen', slug: 'iris-usa-round-portable-pet-pen',
    brand: 'IRIS USA', price: 44.99,
    description: 'Lightweight circular pen with a zippered mesh cover, great for camping and outdoor events.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1314106-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.1, reviewCount: 432, inStock: true, tags: ['pen', 'portable', 'mesh-cover', 'camping']
  },
  {
    id: 'dh-039', name: 'MidWest Homes Solution Series Double Door Crate', slug: 'midwest-solution-series-double-door',
    brand: 'MidWest Homes', price: 89.99, originalPrice: 109.99,
    description: 'Designed for dogs with separation anxiety, this crate features rounded corners and reinforced wire for added security.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3203938-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 1765, inStock: true, badge: 'Sale', tags: ['crate', 'anxiety', 'reinforced', 'double-door']
  },
  {
    id: 'dh-040', name: 'Frisco Plastic Indoor/Outdoor Dog House', slug: 'frisco-plastic-indoor-outdoor-dog-house',
    brand: 'Frisco', price: 99.99,
    description: 'All-weather plastic dog house that resists fading, cracking, and odor, suitable for indoor or outdoor use.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3998953-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 765, inStock: true, tags: ['dog-house', 'plastic', 'all-weather', 'durable']
  },
  {
    id: 'dh-041', name: 'Petmate Ruff Maxx Outdoor Dog House', slug: 'petmate-ruff-maxx-outdoor-dog-house',
    brand: 'Petmate', price: 174.99,
    description: 'Heavy-duty outdoor dog house made from durable resin, with a raised floor and off-center door for weather protection.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4650246-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 1543, inStock: true, badge: 'Premium', tags: ['dog-house', 'outdoor', 'heavy-duty', 'resin']
  },
  {
    id: 'dh-042', name: 'IRIS USA Compact Wire Pet Crate with Divider', slug: 'iris-usa-compact-wire-crate-divider',
    brand: 'IRIS USA', price: 54.99,
    description: 'Compact wire crate with an included divider panel, perfect for crate training puppies in small apartments.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3998849-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 876, inStock: true, tags: ['crate', 'compact', 'divider', 'puppy']
  },
  {
    id: 'dh-043', name: 'Carlson Tuffy Crate Heavy Duty Steel Dog Crate', slug: 'carlson-tuffy-crate-heavy-duty-steel',
    brand: 'Carlson Pet Products', price: 134.99,
    description: 'Extremely durable steel crate built for dogs that chew or scratch, with a removable, washable tray.',
    longDescription: 'The Tuffy Crate is constructed from heavy-gauge steel tubing with reinforced welds at every joint, making it virtually indestructible for power chewers. The slide-out tray and wide door opening make daily cleaning and access effortless.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3356301-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.8, reviewCount: 1098, inStock: false, badge: 'Premium', tags: ['crate', 'heavy-duty', 'steel', 'chew-proof']
  },
  {
    id: 'dh-044', name: 'Richell Wooden Convertible Indoor Dog Pen', slug: 'richell-wooden-convertible-indoor-pen',
    brand: 'Richell', price: 144.99,
    description: 'Furniture-style wooden pen that converts from a small enclosure to an extra-wide play area as your dog grows.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2877754-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 543, inStock: true, tags: ['pen', 'wood', 'convertible', 'furniture']
  },
  {
    id: 'dh-045', name: 'MidWest Homes Newly Whelped Puppy Playpen', slug: 'midwest-newly-whelped-puppy-playpen',
    brand: 'MidWest Homes', price: 199.99, originalPrice: 229.99,
    description: 'Spacious playpen designed for whelping and raising young puppies, with a removable pee pad holder and partition door.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1314106-center-1',
    category: 'dog', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 654, inStock: true, badge: 'Sale', tags: ['playpen', 'puppy', 'whelping', 'partition']
  }
];

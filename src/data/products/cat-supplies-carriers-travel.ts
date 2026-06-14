import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'csct-001', name: 'Sherpa Original Deluxe Airline-Approved Pet Carrier', slug: 'sherpa-original-deluxe-airline-carrier',
    brand: 'Sherpa', price: 59.99,
    description: 'Airline approved for under-seat storage. Adjustable shoulder strap and spring wire frame for shape retention.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2848638-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.6, reviewCount: 3421, inStock: true, tags: ['airline', 'under-seat', 'travel', 'soft-sided']
  },
  {
    id: 'csct-002', name: 'AmazonBasics Soft-Sided Mesh Pet Carrier', slug: 'amazonbasics-soft-sided-mesh-carrier',
    brand: 'AmazonBasics', price: 39.99, originalPrice: 49.99,
    description: 'Mesh windows on four sides for maximum ventilation. Fits under most airline seats. Budget-friendly.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3920726-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 5432, inStock: true, badge: 'Sale', tags: ['mesh', 'ventilated', 'airline', 'budget']
  },
  {
    id: 'csct-003', name: 'Sleepypod Mobile Pet Bed & Carrier', slug: 'sleepypod-mobile-pet-bed-carrier',
    brand: 'Sleepypod', price: 179.99,
    description: 'Doubles as a cozy pet bed at home and a crash-tested safe carrier in the car. Airline cabin compliant.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3863848-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.8, reviewCount: 876, inStock: true, badge: 'Premium', tags: ['premium', 'crash-tested', 'bed-carrier', 'airline']
  },
  {
    id: 'csct-004', name: 'PETLUV Happy Pet Carrier Backpack', slug: 'petluv-happy-pet-carrier-backpack',
    brand: 'PETLUV', price: 79.99,
    description: 'Ventilated backpack carrier with bubble window. Hands-free hiking and commuting with your cat.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3134531-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.5, reviewCount: 2134, inStock: true, badge: 'New', tags: ['backpack', 'bubble-window', 'hands-free', 'ventilated']
  },
  {
    id: 'csct-005', name: 'Frisco Premium Two-Door Top-Load Cat Carrier', slug: 'frisco-premium-two-door-top-load-carrier',
    brand: 'Frisco', price: 49.99,
    description: 'Hard-sided carrier with top-loading door for easy loading of reluctant cats. Removable fleece mat included.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2707528-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.5, reviewCount: 1543, inStock: true, tags: ['hard-sided', 'top-load', 'fleece-mat', 'two-door']
  },
  {
    id: 'csct-006', name: 'Petmate Two Door Top Load Kennel', slug: 'petmate-two-door-top-load-kennel-for-cats',
    brand: 'Petmate', price: 39.99, originalPrice: 49.99,
    description: 'Hard-sided kennel with top and front door loading. Wire ventilation door and deep base pan.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3304288-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 3456, inStock: true, badge: 'Sale', tags: ['hard-sided', 'two-door', 'top-load', 'kennel']
  },
  {
    id: 'csct-007', name: 'SportPet Designs Plastic Foldable Travel Cat Carrier', slug: 'sportpet-foldable-travel-cat-carrier',
    brand: 'SportPet Designs', price: 44.99,
    description: 'Foldable hard-sided cat carrier that collapses flat for easy storage. Front and top entry.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3794459-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 1234, inStock: true, tags: ['foldable', 'hard-sided', 'storage-friendly', 'top-entry']
  },
  {
    id: 'csct-008', name: 'Gen7Pets Roller-Carrier Stroller for Cats', slug: 'gen7pets-roller-carrier-stroller',
    brand: 'Gen7Pets', price: 89.99, originalPrice: 109.99,
    description: 'Converts from carrier to rolling stroller. Retractable handle, breathable mesh windows.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3509718-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 765, inStock: true, badge: 'Sale', tags: ['roller', 'stroller', 'convertible', 'retractable-handle']
  },
  {
    id: 'csct-009', name: 'Henkelion Cat Carrier Backpack Bubble', slug: 'henkelion-cat-carrier-backpack-bubble',
    brand: 'Henkelion', price: 49.99,
    description: 'Ventilated bubble backpack carrier with expandable side panels. Lets your cat look around.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3421581-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.5, reviewCount: 4321, inStock: true, badge: 'New', tags: ['bubble', 'backpack', 'ventilated', 'expandable']
  },
  {
    id: 'csct-010', name: 'Molly & Moggy Luxury Cat Carrier Bag', slug: 'molly-moggy-luxury-cat-carrier-bag',
    brand: 'Molly & Moggy', price: 34.99, originalPrice: 44.99,
    description: 'Stylish soft-sided cat carrier with removable fleece pad and shoulder strap.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2327648-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 987, inStock: true, badge: 'Sale', tags: ['stylish', 'fleece-pad', 'shoulder-strap', 'soft-sided']
  },
  {
    id: 'csct-011', name: 'Frisco Soft-Sided Expandable Travel Carrier', slug: 'frisco-soft-sided-expandable-carrier',
    brand: 'Frisco', price: 42.99,
    description: 'Soft-sided carrier with an expandable side panel that gives your cat extra room to stretch out at rest stops.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3863821-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 1876, inStock: true, tags: ['soft-sided', 'expandable', 'travel', 'mesh']
  },
  {
    id: 'csct-012', name: 'PetSafe Happy Ride Folding Carrier', slug: 'petsafe-happy-ride-folding-carrier',
    brand: 'PetSafe', price: 36.99, originalPrice: 44.99,
    description: 'Lightweight folding carrier with mesh side panels and a sturdy zipper closure for secure travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2249408-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.2, reviewCount: 1098, inStock: true, badge: 'Sale', tags: ['folding', 'lightweight', 'mesh', 'zipper']
  },
  {
    id: 'csct-013', name: 'Catit Pop-Up Travel Carrier Tent', slug: 'catit-pop-up-travel-carrier-tent',
    brand: 'Catit', price: 29.99,
    description: 'Pop-up tent-style carrier that assembles in seconds and folds flat for compact storage.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2615308-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.1, reviewCount: 654, inStock: true, tags: ['pop-up', 'tent', 'foldable', 'lightweight']
  },
  {
    id: 'csct-014', name: 'KONG Soft-Sided Pet Carrier with Fleece Bed', slug: 'kong-soft-sided-carrier-fleece-bed',
    brand: 'KONG', price: 47.99,
    description: 'Durable soft-sided carrier with a built-in removable fleece bed for added comfort during transit.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3275860-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 1432, inStock: true, tags: ['soft-sided', 'fleece-bed', 'durable', 'comfort']
  },
  {
    id: 'csct-015', name: 'Trixie Vario Hard-Sided Travel Carrier', slug: 'trixie-vario-hard-sided-carrier',
    brand: 'Trixie', price: 54.99,
    description: 'Hard-sided two-piece carrier that splits apart for easy cleaning, with a front grille door.',
    longDescription: 'The Vario carrier separates into top and bottom shells secured by clips, making deep cleaning quick and simple. A front-facing wire door provides ventilation and visibility while keeping your cat secure during car rides or vet visits.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3794133-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.5, reviewCount: 2109, inStock: true, badge: 'New', tags: ['hard-sided', 'two-piece', 'easy-clean', 'vet-visit']
  },
  {
    id: 'csct-016', name: 'Yaheetech Rolling Cat Carrier with Wheels', slug: 'yaheetech-rolling-cat-carrier-wheels',
    brand: 'Yaheetech', price: 64.99, originalPrice: 79.99,
    description: 'Wheeled carrier with a retractable handle, ideal for navigating airports with larger cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3863848-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 876, inStock: true, badge: 'Sale', tags: ['rolling', 'wheels', 'retractable-handle', 'airport']
  },
  {
    id: 'csct-017', name: 'Necoichi Portable Stress-Free Cat Carrier', slug: 'necoichi-portable-stress-free-carrier',
    brand: 'Necoichi', price: 38.99,
    description: 'Carrier opens flat into a bed shape, allowing cats to enter and exit voluntarily and reducing carrier anxiety.',
    longDescription: 'Designed by veterinarians, this carrier transforms into an open mat that minimizes the stress of being forced into an enclosed space. It folds back into a secure carrier with mesh panels for vet visits and travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3161205-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.6, reviewCount: 1543, inStock: true, badge: 'Premium', tags: ['stress-free', 'convertible', 'mat', 'vet-recommended']
  },
  {
    id: 'csct-018', name: 'Petmate Vari Kennel Hard-Sided Pet Carrier', slug: 'petmate-vari-kennel-hard-sided',
    brand: 'Petmate', price: 49.99,
    description: 'Classic hard-sided kennel with ventilation on all sides, approved for airline cargo travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2772629-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 2654, inStock: true, tags: ['hard-sided', 'kennel', 'airline-cargo', 'ventilated']
  },
  {
    id: 'csct-019', name: 'Sherpa Element Backpack Pet Carrier', slug: 'sherpa-element-backpack-carrier',
    brand: 'Sherpa', price: 84.99,
    description: 'Weather-resistant backpack carrier with mesh ventilation panels and a padded, adjustable harness.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3854984-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.5, reviewCount: 1234, inStock: true, badge: 'New', tags: ['backpack', 'weather-resistant', 'mesh', 'padded']
  },
  {
    id: 'csct-020', name: 'On2Pets Cat Carrier with Removable Wheels', slug: 'on2pets-carrier-removable-wheels',
    brand: 'On2Pets', price: 69.99,
    description: 'Soft-sided carrier with a detachable wheeled base, converting between a shoulder bag and a rolling carrier.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3134581-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.2, reviewCount: 543, inStock: true, tags: ['convertible', 'wheels', 'soft-sided', 'detachable']
  },
  {
    id: 'csct-021', name: 'Frisco Travel Litter Box Kit with Scoop', slug: 'frisco-travel-litter-box-kit-scoop',
    brand: 'Frisco', price: 14.99,
    description: 'Foldable travel litter box with a clip-on scoop and disposable liners, perfect for road trips.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3910552-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.1, reviewCount: 987, inStock: true, tags: ['litter-box', 'travel-kit', 'foldable', 'scoop']
  },
  {
    id: 'csct-022', name: 'PetSafe Travel Bowl and Bottle Combo', slug: 'petsafe-travel-bowl-bottle-combo',
    brand: 'PetSafe', price: 11.99,
    description: 'Collapsible travel bowl that attaches to a leak-proof water bottle for convenient on-the-go hydration.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3512319-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.0, reviewCount: 432, inStock: true, tags: ['travel-bowl', 'water-bottle', 'collapsible', 'leak-proof']
  },
  {
    id: 'csct-023', name: 'Gen7Pets Cat Carrier with Privacy Cover', slug: 'gen7pets-carrier-privacy-cover',
    brand: 'Gen7Pets', price: 52.99, originalPrice: 64.99,
    description: 'Soft-sided carrier with a removable privacy cover to help anxious cats feel calm during transport.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3156457-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 765, inStock: true, badge: 'Sale', tags: ['privacy-cover', 'soft-sided', 'calming', 'travel']
  },
  {
    id: 'csct-024', name: 'Henkelion Hard-Sided Travel Crate', slug: 'henkelion-hard-sided-travel-crate',
    brand: 'Henkelion', price: 46.99,
    description: 'Durable hard-sided crate with a secure metal door latch and built-in handle for short trips.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3985909-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.2, reviewCount: 654, inStock: true, tags: ['hard-sided', 'crate', 'metal-latch', 'durable']
  },
  {
    id: 'csct-025', name: 'Vesper Designer Cat Carrier Bag', slug: 'vesper-designer-cat-carrier-bag',
    brand: 'Vesper', price: 99.99,
    description: 'Premium designer carrier bag with a structured shape, leather-look trim, and a plush interior pad.',
    longDescription: 'Vesper brings its signature modern aesthetic to travel gear with this structured carrier bag. The reinforced frame holds its shape, while leather-look accents and a removable plush pad make it as comfortable as it is stylish.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3134506-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.6, reviewCount: 398, inStock: true, badge: 'Premium', tags: ['designer', 'structured', 'premium', 'plush-interior']
  },
  {
    id: 'csct-026', name: 'SportPet Designs Soft-Sided Sky Kennel', slug: 'sportpet-soft-sided-sky-kennel',
    brand: 'SportPet Designs', price: 57.99,
    description: 'Airline-compliant soft-sided kennel with reinforced edges and a fleece-lined floor pad.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3794467-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 1098, inStock: true, tags: ['airline-compliant', 'soft-sided', 'reinforced', 'fleece-lined']
  },
  {
    id: 'csct-027', name: 'Bedsure Cat Carrier with Cooling Mat', slug: 'bedsure-cat-carrier-cooling-mat',
    brand: 'Bedsure', price: 33.99,
    description: 'Soft-sided carrier that includes a removable cooling gel mat for hot-weather travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4611829-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.2, reviewCount: 543, inStock: true, tags: ['cooling-mat', 'soft-sided', 'hot-weather', 'travel']
  },
  {
    id: 'csct-028', name: 'Petstages Cat Carrier Calming Spray Travel Kit', slug: 'petstages-carrier-calming-spray-kit',
    brand: 'Petstages', price: 16.99,
    description: 'Travel kit including a calming pheromone spray and a fleece liner to ease carrier anxiety.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2973308-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.1, reviewCount: 432, inStock: true, tags: ['calming', 'pheromone', 'travel-kit', 'fleece-liner']
  },
  {
    id: 'csct-029', name: 'Frisco Convertible Carrier Car Seat', slug: 'frisco-convertible-carrier-car-seat',
    brand: 'Frisco', price: 58.99, originalPrice: 69.99,
    description: 'Carrier that converts into a booster car seat with a built-in seatbelt loop for safe car travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3161299-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 876, inStock: true, badge: 'Sale', tags: ['convertible', 'car-seat', 'seatbelt', 'safety']
  },
  {
    id: 'csct-030', name: 'Catit Cabin Pro Airline Travel Carrier', slug: 'catit-cabin-pro-airline-carrier',
    brand: 'Catit', price: 74.99,
    description: 'Sleek airline travel carrier sized to fit under most economy seats, with a privacy flap and storage pocket.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4612362-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.5, reviewCount: 1432, inStock: true, badge: 'New', tags: ['airline', 'cabin', 'privacy-flap', 'storage-pocket']
  },
  {
    id: 'csct-031', name: 'MidWest Cat Carrier with Divider Panel', slug: 'midwest-carrier-divider-panel',
    brand: 'MidWest', price: 41.99,
    description: 'Hard-sided carrier with a removable divider panel for transporting two small cats separately.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3336247-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.2, reviewCount: 543, inStock: true, tags: ['hard-sided', 'divider', 'multi-cat', 'travel']
  },
  {
    id: 'csct-032', name: 'PETLUV Quilted Soft-Sided Travel Tote', slug: 'petluv-quilted-soft-sided-travel-tote',
    brand: 'PETLUV', price: 44.99,
    description: 'Quilted fabric carrier tote with padded straps and a fleece-lined interior for everyday outings.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3509718-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 765, inStock: true, tags: ['quilted', 'tote', 'soft-sided', 'fleece-lined']
  },
  {
    id: 'csct-033', name: 'Yaheetech Cat Stroller and Carrier Combo', slug: 'yaheetech-cat-stroller-carrier-combo',
    brand: 'Yaheetech', price: 94.99, originalPrice: 119.99,
    description: 'Three-wheeled stroller that detaches into a standalone soft carrier, with a storage basket underneath.',
    longDescription: 'This versatile combo gives you the option of strolling your cat around the neighborhood or carrying them separately when needed. The detachable carrier features mesh panels on all sides, while the stroller frame includes a large under-seat storage basket and cup holder.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3134493-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 1098, inStock: true, badge: 'Sale', tags: ['stroller', 'combo', 'detachable', 'storage-basket']
  },
  {
    id: 'csct-034', name: 'Ethical Pet Soft-Sided Travel Carrier', slug: 'ethical-pet-soft-sided-travel-carrier',
    brand: 'Ethical Pet', price: 27.99,
    description: 'Affordable soft-sided carrier with mesh ventilation panels and a top handle for short trips.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2327656-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.0, reviewCount: 321, inStock: true, tags: ['soft-sided', 'budget', 'mesh', 'short-trips']
  },
  {
    id: 'csct-035', name: 'Hepper Pod Travel Carrier', slug: 'hepper-pod-travel-carrier',
    brand: 'Hepper', price: 119.99,
    description: 'Modern egg-shaped carrier with a wide front opening, washable liner, and a sturdy faux-leather exterior.',
    longDescription: 'Hepper applies its signature design language to travel with this pod-shaped carrier. The wide opening makes loading easy, the interior liner is fully removable and machine washable, and the durable shell holds its shape over years of use.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3390382-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.7, reviewCount: 543, inStock: true, badge: 'Premium', tags: ['modern', 'pod', 'washable-liner', 'design']
  },
  {
    id: 'csct-036', name: 'Frisco Mesh Tunnel Carrier with Side Pockets', slug: 'frisco-mesh-tunnel-carrier-side-pockets',
    brand: 'Frisco', price: 36.99,
    description: 'Tunnel-shaped soft carrier with mesh panels on three sides and exterior pockets for treats and accessories.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2707544-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.2, reviewCount: 654, inStock: true, tags: ['tunnel', 'mesh', 'side-pockets', 'soft-sided']
  },
  {
    id: 'csct-037', name: 'Petmate Color Splash Kennel Carrier', slug: 'petmate-color-splash-kennel-carrier',
    brand: 'Petmate', price: 43.99,
    description: 'Colorful hard-sided kennel carrier with secure clip latches and a removable plastic floor tray.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3161221-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 1234, inStock: true, tags: ['hard-sided', 'colorful', 'kennel', 'clip-latches']
  },
  {
    id: 'csct-038', name: 'Bergan Comfort Carrier Soft-Sided Bag', slug: 'bergan-comfort-carrier-soft-sided-bag',
    brand: 'Bergan', price: 39.99,
    description: 'Soft-sided comfort carrier with a fold-down front door and a fleece bed insert.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3390403-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.1, reviewCount: 432, inStock: true, tags: ['soft-sided', 'fold-down-door', 'fleece', 'comfort']
  },
  {
    id: 'csct-039', name: 'Trixie Premium Cat Travel Set with Bowls', slug: 'trixie-premium-travel-set-bowls',
    brand: 'Trixie', price: 24.99,
    description: 'Travel accessory set including two collapsible bowls, a water bottle, and a carrying pouch.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3942811-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.0, reviewCount: 298, inStock: true, tags: ['travel-set', 'collapsible-bowls', 'water-bottle', 'pouch']
  },
  {
    id: 'csct-040', name: 'KONG Hard-Sided Travel Carrier with Wheels', slug: 'kong-hard-sided-carrier-with-wheels',
    brand: 'KONG', price: 87.99, originalPrice: 104.99,
    description: 'Heavy-duty hard-sided carrier with retractable wheels and telescoping handle for long-distance travel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3336247-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 765, inStock: true, badge: 'Sale', tags: ['hard-sided', 'wheels', 'telescoping-handle', 'long-distance']
  },
  {
    id: 'csct-041', name: 'Snoozer Pet Carrier with Plush Bed Insert', slug: 'snoozer-carrier-plush-bed-insert',
    brand: 'Snoozer', price: 51.99,
    description: 'Soft-sided carrier with a plush, removable bed insert that can be used independently at home.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3134485-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.3, reviewCount: 543, inStock: true, tags: ['soft-sided', 'plush-bed', 'removable-insert', 'travel']
  },
  {
    id: 'csct-042', name: 'GoCat Compact Carrier for Small Cats', slug: 'gocat-compact-carrier-small-cats',
    brand: 'GoCat', price: 28.99,
    description: 'Compact soft-sided carrier sized for kittens and small cats, with mesh top and side panels.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2707501-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.1, reviewCount: 432, inStock: true, tags: ['compact', 'kitten', 'small-cat', 'mesh']
  },
  {
    id: 'csct-043', name: 'CatastrophiCreations Cat Carrier Travel Crate', slug: 'catastrophicreations-carrier-travel-crate',
    brand: 'CatastrophiCreations', price: 64.99,
    description: 'Sturdy wooden-framed travel crate with fabric panels, designed to double as a stylish home accent.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3985909-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.4, reviewCount: 321, inStock: true, tags: ['wooden-frame', 'crate', 'stylish', 'dual-purpose']
  },
  {
    id: 'csct-044', name: 'Furhaven Two-Tone Soft-Sided Carrier', slug: 'furhaven-two-tone-soft-sided-carrier',
    brand: 'Furhaven', price: 32.99,
    description: 'Lightweight two-tone soft-sided carrier with mesh ends and a zippered top opening for easy access.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3001068-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.0, reviewCount: 543, inStock: false, tags: ['soft-sided', 'lightweight', 'mesh', 'top-opening']
  },
  {
    id: 'csct-045', name: 'Sleepypod Atom Crash-Tested Pet Carrier', slug: 'sleepypod-atom-crash-tested-carrier',
    brand: 'Sleepypod', price: 159.99,
    description: 'Compact crash-tested carrier designed for car travel, with a padded interior and seatbelt-compatible straps.',
    longDescription: 'Independently crash-tested to automotive safety standards, the Atom carrier secures to a vehicle seat using built-in straps that work with standard seatbelts. The collapsible frame folds flat for storage, and the interior padding cushions your cat during sudden stops.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3714447-center-1',
    category: 'cat', type: 'supplies', subcategory: 'carriers-travel',
    rating: 4.8, reviewCount: 654, inStock: true, badge: 'Premium', tags: ['crash-tested', 'car-travel', 'safety', 'collapsible']
  }
];

import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'csh-001', name: 'Go Pet Club 62-Inch Cat Tree with Condo', slug: 'go-pet-club-62-inch-cat-tree',
    brand: 'Go Pet Club', price: 89.99, originalPrice: 109.99,
    description: 'Tall multi-level cat tree with condo, hammock, and multiple perches. Natural sisal rope scratching posts.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3709023-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 4321, inStock: true, badge: 'Sale', tags: ['cat-tree', 'condo', 'sisal', 'multi-level']
  },
  {
    id: 'csh-002', name: 'Yaheetech 54-Inch Cat Tower', slug: 'yaheetech-54-inch-cat-tower',
    brand: 'Yaheetech', price: 69.99,
    description: 'Modern cat tower with 3 platforms, 2 condos, and multiple hammocks. Plush-covered for ultimate comfort.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2833559-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 2134, inStock: true, tags: ['tower', 'hammock', 'plush', 'condo']
  },
  {
    id: 'csh-003', name: 'Frisco 52-Inch Cat Tree & Condo', slug: 'frisco-52-inch-cat-tree-condo',
    brand: 'Frisco', price: 79.99,
    description: 'Spacious cat tree with extra-large condo, multiple perches, and sisal-wrapped posts for scratching.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2830446-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 1876, inStock: true, tags: ['sisal', 'condo', 'perch', 'scratching-post']
  },
  {
    id: 'csh-004', name: 'Vesper Cat Furniture V-High Base', slug: 'vesper-cat-furniture-v-high-base',
    brand: 'Vesper', price: 149.99,
    description: 'Modern Scandinavian-design cat furniture that complements your home décor. Premium walnut veneer finish.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2967611-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 543, inStock: true, badge: 'Premium', tags: ['premium', 'modern', 'design', 'walnut']
  },
  {
    id: 'csh-005', name: 'FEANDREA 67-Inch Multi-Level Cat Tree', slug: 'feandrea-67-inch-multi-level-cat-tree',
    brand: 'FEANDREA', price: 99.99, originalPrice: 129.99,
    description: 'Tall luxury cat tree with 4 perches, 2 condos, and a hammock. Extra-large platforms for big cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2841727-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 3214, inStock: true, badge: 'Sale', tags: ['tall', 'luxury', 'large-cat', 'multi-level']
  },
  {
    id: 'csh-006', name: 'Armarkat Classic Cat Tree 71-Inch', slug: 'armarkat-classic-cat-tree-71-inch',
    brand: 'Armarkat', price: 74.99, originalPrice: 94.99,
    description: 'Tall 71-inch cat tree with multiple levels, condos, hammocks, and sisal-wrapped posts.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3830528-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 5432, inStock: true, badge: 'Sale', tags: ['tall', 'hammock', 'sisal', 'condo']
  },
  {
    id: 'csh-007', name: 'On2Pets Cat Condo with Window Seat Perch', slug: 'on2pets-cat-condo-window-seat',
    brand: 'On2Pets', price: 99.99,
    description: 'Innovative window-mounted cat condo that attaches to your window frame. Suction cup mounting.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4688519-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 876, inStock: true, badge: 'New', tags: ['window-mounted', 'suction', 'perch', 'innovative']
  },
  {
    id: 'csh-008', name: 'Trixie Pet Products Baza Cat Activity Tree', slug: 'trixie-baza-cat-activity-tree',
    brand: 'Trixie', price: 59.99, originalPrice: 74.99,
    description: 'Modern design cat activity tree with climbing branches, platforms, and hiding compartments.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3984965-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 1234, inStock: true, badge: 'Sale', tags: ['modern', 'climbing', 'activity', 'hiding']
  },
  {
    id: 'csh-009', name: 'CatastrophiCreations The Cat Mod Duo Wall Set', slug: 'catastrophicreations-cat-mod-duo-wall',
    brand: 'CatastrophiCreations', price: 129.99,
    description: 'Wall-mounted cat shelves and climbing system. Space-saving design that doubles as home décor.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3119921-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 543, inStock: true, badge: 'Premium', tags: ['wall-mounted', 'shelves', 'décor', 'space-saving']
  },
  {
    id: 'csh-010', name: 'Kitty City Large Cat Condo Habitat', slug: 'kitty-city-large-cat-condo-habitat',
    brand: 'Kitty City', price: 49.99,
    description: 'Multi-room condo habitat that can be expanded with additional modules. Easy assembly.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3966521-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 2134, inStock: true, tags: ['modular', 'expandable', 'multi-room', 'easy-assembly']
  },
  {
    id: 'csh-011', name: 'Frisco 74-Inch Cat Tree with Sisal Scratching Posts', slug: 'frisco-74-inch-cat-tree-sisal',
    brand: 'Frisco', price: 119.99, originalPrice: 144.99,
    description: 'Towering 74-inch cat tree with three condos and a hammock for multi-cat households. Wrapped in durable sisal rope.',
    longDescription: 'This extra-tall cat tree gives every cat in the house their own space to climb, perch, and nap. Wide base platforms add stability while sisal-wrapped posts keep claws healthy and furniture safe.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3973123-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 2876, inStock: true, badge: 'Sale', tags: ['cat-tree', 'multi-cat', 'sisal', 'tall']
  },
  {
    id: 'csh-012', name: 'PetSafe Solvit Wall-Mounted Cat Steps Set', slug: 'petsafe-solvit-wall-mounted-cat-steps',
    brand: 'PetSafe', price: 64.99,
    description: 'Set of three modular wall-mounted steps that let your cat climb to high vantage points. Easy-clean fabric covers.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3080827-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 612, inStock: true, badge: 'New', tags: ['wall-mounted', 'steps', 'climbing', 'modular']
  },
  {
    id: 'csh-013', name: 'Catit Vesper Cat Shelves Wall Set', slug: 'catit-vesper-cat-shelves-wall-set',
    brand: 'Catit', price: 89.99,
    description: 'Sleek floating shelves that mount to any wall, giving cats a vertical playground. Scratch-resistant finish.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3709533-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 743, inStock: true, tags: ['wall-mounted', 'shelves', 'vertical', 'modern']
  },
  {
    id: 'csh-014', name: 'KONG Cat Cottage Cardboard House', slug: 'kong-cat-cottage-cardboard-house',
    brand: 'KONG', price: 24.99,
    description: 'Sturdy corrugated cardboard cat house with built-in scratcher floor. A cozy hideaway your cat will love.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3869650-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 1098, inStock: true, tags: ['cardboard', 'hideaway', 'scratcher', 'budget']
  },
  {
    id: 'csh-015', name: 'Trixie Baza Plush Cat Tower with Hammock', slug: 'trixie-baza-plush-cat-tower-hammock',
    brand: 'Trixie', price: 84.99, originalPrice: 99.99,
    description: 'Plush-covered cat tower featuring a swinging hammock, enclosed condo, and natural sisal scratching posts.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3709411-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 1654, inStock: true, badge: 'Sale', tags: ['plush', 'hammock', 'condo', 'sisal']
  },
  {
    id: 'csh-016', name: 'FEANDREA Cat Tree with Scratching Board Ramp', slug: 'feandrea-cat-tree-scratching-ramp',
    brand: 'FEANDREA', price: 109.99,
    description: 'Compact cat tree featuring an inclined scratching ramp, two perches, and a dangling toy ball.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3811589-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 2210, inStock: true, tags: ['cat-tree', 'ramp', 'compact', 'toy']
  },
  {
    id: 'csh-017', name: 'On2Pets Triple Window-Mounted Cat Perch', slug: 'on2pets-triple-window-mounted-perch',
    brand: 'On2Pets', price: 64.99,
    description: 'Three-tiered window perch that mounts with heavy-duty suction cups, giving cats a sunny lookout spot.',
    longDescription: 'Cats love a warm sunbeam, and this triple-tier perch delivers three at once. The reinforced suction mounts hold up to 50 pounds, and the machine-washable cushions make cleanup effortless.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3067884-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 987, inStock: true, badge: 'New', tags: ['window-perch', 'suction', 'sunbathing', 'tiered']
  },
  {
    id: 'csh-018', name: 'Yaheetech 47-Inch Cat Tree with Sisal Posts', slug: 'yaheetech-47-inch-cat-tree-sisal',
    brand: 'Yaheetech', price: 54.99,
    description: 'Compact 47-inch cat tree perfect for smaller spaces. Includes a cozy condo and a top perch for lookout time.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3311891-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 1432, inStock: true, tags: ['compact', 'cat-tree', 'sisal', 'condo']
  },
  {
    id: 'csh-019', name: 'CatastrophiCreations Modern Cat Ladder Shelf Set', slug: 'catastrophicreations-modern-cat-ladder-shelf',
    brand: 'CatastrophiCreations', price: 159.99,
    description: 'Handcrafted wooden ladder-and-shelf climbing system that turns any wall into a cat playground.',
    longDescription: 'Built from sustainably sourced wood, this modular system combines a ladder bridge with two landing shelves. Each piece is sold as a set and mounts securely into wall studs for safe high-traffic climbing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3080835-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.8, reviewCount: 489, inStock: true, badge: 'Premium', tags: ['wall-mounted', 'wood', 'ladder', 'handcrafted']
  },
  {
    id: 'csh-020', name: 'Armarkat Cat Bed Condo with Scratching Mat', slug: 'armarkat-cat-bed-condo-scratching-mat',
    brand: 'Armarkat', price: 47.99, originalPrice: 59.99,
    description: 'Cozy enclosed condo with an attached scratching mat at the entrance. Soft faux-fur lined interior.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3709509-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 1765, inStock: true, badge: 'Sale', tags: ['condo', 'scratching-mat', 'faux-fur', 'enclosed']
  },
  {
    id: 'csh-021', name: 'Vesper Cat Furniture Cube Low Base', slug: 'vesper-cat-furniture-cube-low-base',
    brand: 'Vesper', price: 119.99,
    description: 'Compact cube-shaped cat furniture with an enclosed hideaway and a scratch-friendly sisal exterior.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3869641-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 398, inStock: true, badge: 'Premium', tags: ['cube', 'modern', 'sisal', 'hideaway']
  },
  {
    id: 'csh-022', name: 'GoCat Tower Scratch-and-Play Condo', slug: 'gocat-tower-scratch-and-play-condo',
    brand: 'GoCat', price: 72.99,
    description: 'Two-story scratch-and-play condo with a dangling feather toy and a soft cushioned top perch.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3984973-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 845, inStock: true, tags: ['condo', 'scratch-and-play', 'feather-toy', 'two-story']
  },
  {
    id: 'csh-023', name: 'MidWest Feline Nuvo Tower Cat Furniture', slug: 'midwest-feline-nuvo-tower',
    brand: 'MidWest', price: 94.99,
    description: 'Stylish multi-tier cat tower with a built-in litter box cabinet and a top lounging deck.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2967661-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 1320, inStock: true, tags: ['multi-tier', 'litter-cabinet', 'lounging', 'furniture']
  },
  {
    id: 'csh-024', name: 'Pioneer Pet SmartCat Bootsie\'s Bungalow', slug: 'pioneer-pet-smartcat-bootsies-bungalow',
    brand: 'Pioneer Pet', price: 39.99,
    description: 'Two-story corrugated cardboard bungalow with built-in scratching surfaces on the roof and floor.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2132066-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 2456, inStock: true, tags: ['cardboard', 'bungalow', 'scratching', 'two-story']
  },
  {
    id: 'csh-025', name: 'Frisco Cat Condo Tower with Sisal Scratching Post', slug: 'frisco-cat-condo-tower-sisal-post',
    brand: 'Frisco', price: 64.99, originalPrice: 79.99,
    description: 'Mid-size condo tower with a fully enclosed hideaway, top platform, and a thick sisal scratching post.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3973191-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 1987, inStock: true, badge: 'Sale', tags: ['condo', 'tower', 'sisal', 'mid-size']
  },
  {
    id: 'csh-026', name: 'Trixie Soft-Sided Cat Tunnel Playground', slug: 'trixie-soft-sided-cat-tunnel-playground',
    brand: 'Trixie', price: 29.99,
    description: 'Collapsible fabric tunnel system with multiple exits and a built-in dangling toy for endless chase games.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3129037-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.1, reviewCount: 1543, inStock: true, tags: ['tunnel', 'collapsible', 'playground', 'fabric']
  },
  {
    id: 'csh-027', name: 'Yaheetech Tall Cat Tree with Rope-Wrapped Posts', slug: 'yaheetech-tall-cat-tree-rope-wrapped',
    brand: 'Yaheetech', price: 134.99, originalPrice: 159.99,
    description: 'Towering cat tree with rope-wrapped posts, three plush condos, and a top hammock for sunbathing.',
    longDescription: 'Designed for active multi-cat homes, this tree features a reinforced base, three enclosed condos at varying heights, and a generously sized hammock. Every post is wrapped in thick natural rope to satisfy scratching urges.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3804696-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 3102, inStock: true, badge: 'Sale', tags: ['cat-tree', 'rope', 'multi-cat', 'hammock']
  },
  {
    id: 'csh-028', name: 'Ethical Pet Spot Skyscraper Cat Tree', slug: 'ethical-pet-spot-skyscraper-cat-tree',
    brand: 'Ethical Pet', price: 84.99,
    description: 'Skyscraper-style cat tree with stacked platforms and a sisal-wrapped central pole for climbing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1383167-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 678, inStock: true, tags: ['cat-tree', 'sisal', 'platforms', 'climbing']
  },
  {
    id: 'csh-029', name: 'Hepper Nest Modern Cat Bed and Hideaway', slug: 'hepper-nest-modern-cat-hideaway',
    brand: 'Hepper', price: 99.99,
    description: 'Modern egg-shaped hideaway that doubles as a stylish bed, crafted from durable felted wool.',
    longDescription: 'Hepper\'s signature minimalist design hides a cozy felted wool interior inside a sleek modern shell. The removable cover is machine washable, and the shape fits naturally into contemporary living spaces.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2830526-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 1056, inStock: true, badge: 'Premium', tags: ['modern', 'hideaway', 'felted-wool', 'design']
  },
  {
    id: 'csh-030', name: 'Necoichi Corrugated Cardboard Cat House', slug: 'necoichi-corrugated-cardboard-cat-house',
    brand: 'Necoichi', price: 27.99,
    description: 'Igloo-shaped cardboard cat house with a scratchable surface and a cutout entry for cozy napping.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3985052-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 821, inStock: true, tags: ['cardboard', 'igloo', 'scratchable', 'napping']
  },
  {
    id: 'csh-031', name: 'PetSafe Happy Ride Cat Climbing Wall Panels', slug: 'petsafe-happy-ride-cat-climbing-wall-panels',
    brand: 'PetSafe', price: 74.99,
    description: 'Set of three angled climbing wall panels covered in carpet for grip, mounting hardware included.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3241387-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 432, inStock: true, badge: 'New', tags: ['wall-mounted', 'climbing', 'carpet', 'panels']
  },
  {
    id: 'csh-032', name: 'Frisco Faux Fur Cat Tree with LED Accent', slug: 'frisco-faux-fur-cat-tree-led-accent',
    brand: 'Frisco', price: 144.99,
    description: 'Plush faux-fur cat tree with a built-in LED-lit condo, dual hammocks, and a top observation deck.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3966513-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.5, reviewCount: 1289, inStock: true, badge: 'Premium', tags: ['faux-fur', 'led', 'hammock', 'observation-deck']
  },
  {
    id: 'csh-033', name: 'Kitty City Claw Steps Modular Climbing Set', slug: 'kitty-city-claw-steps-modular-climbing',
    brand: 'Kitty City', price: 44.99,
    description: 'Modular wall steps with built-in scratch pads, expandable by combining multiple sets.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3139551-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.1, reviewCount: 567, inStock: true, tags: ['wall-mounted', 'modular', 'scratch-pads', 'expandable']
  },
  {
    id: 'csh-034', name: 'On2Pets Cat Window Box Bed and Perch', slug: 'on2pets-cat-window-box-bed-perch',
    brand: 'On2Pets', price: 79.99, originalPrice: 94.99,
    description: 'Spacious window-mounted box bed with reinforced suction cups and a removable cushioned pad.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3966530-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 1102, inStock: true, badge: 'Sale', tags: ['window-mounted', 'bed', 'perch', 'suction']
  },
  {
    id: 'csh-035', name: 'CatastrophiCreations Cat Tower Bookshelf Combo', slug: 'catastrophicreations-cat-tower-bookshelf',
    brand: 'CatastrophiCreations', price: 219.99,
    description: 'Functional bookshelf with an integrated cat tower, hidden perches, and a scratch-friendly base post.',
    longDescription: 'This dual-purpose furniture piece blends seamlessly into a living room while giving your cat a private climbing route hidden among the shelves. Built from solid wood with a furniture-grade finish.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3120593-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.8, reviewCount: 312, inStock: true, badge: 'Premium', tags: ['furniture', 'bookshelf', 'wood', 'hidden-perch']
  },
  {
    id: 'csh-036', name: 'Bergan Cozy Cave Cat Hideout House', slug: 'bergan-cozy-cave-cat-hideout-house',
    brand: 'Bergan', price: 32.99,
    description: 'Soft-sided pop-up hideout house that folds flat for storage and travel. Machine washable cover.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3077901-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.0, reviewCount: 654, inStock: true, tags: ['pop-up', 'hideout', 'foldable', 'washable']
  },
  {
    id: 'csh-037', name: 'Furhaven Tiger Tough Cat Tree Tower', slug: 'furhaven-tiger-tough-cat-tree-tower',
    brand: 'Furhaven', price: 109.99,
    description: 'Heavy-duty cat tree built with reinforced posts and an extra-wide base for large or multi-cat homes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3067809-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 1453, inStock: true, tags: ['heavy-duty', 'cat-tree', 'large-cat', 'wide-base']
  },
  {
    id: 'csh-038', name: 'Trixie Cat Activity Center with Scratching Tunnel', slug: 'trixie-cat-activity-center-scratching-tunnel',
    brand: 'Trixie', price: 67.99,
    description: 'Activity center combining a scratching tunnel, a perch, and a dangling plush mouse toy.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3241352-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.2, reviewCount: 789, inStock: true, tags: ['activity-center', 'tunnel', 'scratching', 'toy']
  },
  {
    id: 'csh-039', name: 'FEANDREA Cat Tree with Rattan Basket Lounge', slug: 'feandrea-cat-tree-rattan-basket-lounge',
    brand: 'FEANDREA', price: 124.99,
    description: 'Eye-catching cat tree featuring a woven rattan-style basket lounge alongside sisal scratching posts.',
    longDescription: 'Combining natural materials with sturdy construction, this tree includes a hand-woven basket perch that doubles as décor, plus two additional platforms and a hanging toy for play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3708784-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 945, inStock: true, badge: 'New', tags: ['cat-tree', 'rattan', 'basket', 'sisal']
  },
  {
    id: 'csh-040', name: 'Yaheetech Cat Wall Shelf and Ladder Bridge Set', slug: 'yaheetech-cat-wall-shelf-ladder-bridge',
    brand: 'Yaheetech', price: 69.99,
    description: 'Three-piece wall-mounted set including two shelves and a connecting ladder bridge for climbing routes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2103919-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.3, reviewCount: 1011, inStock: true, tags: ['wall-mounted', 'shelf', 'ladder-bridge', 'set']
  },
  {
    id: 'csh-041', name: 'Petmate Indoor Cat Townhouse Condo', slug: 'petmate-indoor-cat-townhouse-condo',
    brand: 'Petmate', price: 56.99, originalPrice: 69.99,
    description: 'Two-story plastic-framed townhouse condo with carpeted platforms and an enclosed top room.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3709066-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.1, reviewCount: 543, inStock: true, badge: 'Sale', tags: ['condo', 'townhouse', 'two-story', 'carpeted']
  },
  {
    id: 'csh-042', name: 'GoCat Scratch n Play Combo Tower', slug: 'gocat-scratch-n-play-combo-tower',
    brand: 'GoCat', price: 49.99,
    description: 'Compact combo tower with a corrugated scratch pad base and a plush perch on top.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2967629-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.0, reviewCount: 398, inStock: false, tags: ['combo', 'scratch-pad', 'compact', 'plush-perch']
  },
  {
    id: 'csh-043', name: 'Vesper Cat Furniture XL Cube with Hammock', slug: 'vesper-cat-furniture-xl-cube-hammock',
    brand: 'Vesper', price: 169.99,
    description: 'Extra-large modern cube unit with an integrated hammock and a sisal-wrapped scratching column.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2214651-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.7, reviewCount: 276, inStock: true, badge: 'Premium', tags: ['xl', 'modern', 'hammock', 'sisal']
  },
  {
    id: 'csh-044', name: 'Frisco Cat Tree with Spiral Tunnel Climb', slug: 'frisco-cat-tree-spiral-tunnel-climb',
    brand: 'Frisco', price: 99.99,
    description: 'Unique spiral-shaped cat tree with an internal tunnel climb connecting two platforms and a condo.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3973182-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.4, reviewCount: 723, inStock: true, tags: ['cat-tree', 'spiral', 'tunnel', 'condo']
  },
  {
    id: 'csh-045', name: 'Armarkat Premium Cat Tree with Perch Baskets', slug: 'armarkat-premium-cat-tree-perch-baskets',
    brand: 'Armarkat', price: 134.99, originalPrice: 159.99,
    description: 'Premium cat tree featuring two basket-style perches, a hammock, and thick sisal scratching posts throughout.',
    longDescription: 'A standout centerpiece for any cat lover\'s home, this tree pairs basket-style perches with traditional platforms and a hammock. Reinforced joints and a heavy base keep it stable even with enthusiastic climbers.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3241301-center-1',
    category: 'cat', type: 'supplies', subcategory: 'housing',
    rating: 4.6, reviewCount: 1567, inStock: true, badge: 'Sale', tags: ['cat-tree', 'premium', 'basket-perch', 'sisal']
  }
];

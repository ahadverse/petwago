import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'cwf-001', name: 'Merrick Purrfect Bistro Grain-Free Wet Cat Food', slug: 'merrick-purrfect-bistro-grain-free-wet',
    brand: 'Merrick', price: 1.89, priceLabel: 'per can',
    description: 'Grain-free wet cat food with deboned chicken in a savory gravy. No artificial flavors or preservatives.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4786004-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.7, reviewCount: 1243, inStock: true, badge: 'New', weight: '3 oz', tags: ['grain-free', 'chicken', 'gravy']
  },
  {
    id: 'cwf-002', name: 'Purina Fancy Feast Classic Pâté Variety Pack', slug: 'purina-fancy-feast-classic-pate-variety',
    brand: 'Fancy Feast', price: 13.99, priceLabel: '/12-pack', originalPrice: 16.99,
    description: 'Classic pâté-style wet cat food in a variety of flavors. Fine, smooth texture cats love.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4559611-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 8765, inStock: true, badge: 'Sale', weight: '3 oz each', tags: ['pate', 'variety', 'classic']
  },
  {
    id: 'cwf-003', name: 'Blue Buffalo Wilderness Chicken Recipe Wet Cat Food', slug: 'blue-buffalo-wilderness-chicken-wet',
    brand: 'Blue Buffalo', price: 2.19, priceLabel: 'per can',
    description: 'Grain-free wet cat food inspired by the diet of wild cats. High protein chicken formula.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3930975-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 2134, inStock: true, tags: ['grain-free', 'wild', 'high-protein']
  },
  {
    id: 'cwf-004', name: 'Wellness Complete Health Natural Wet Cat Food', slug: 'wellness-complete-health-wet',
    brand: 'Wellness', price: 2.49, priceLabel: 'per can',
    description: 'Complete and balanced wet food with natural ingredients. No wheat, corn, soy, meat by-products, or artificial additives.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2763861-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 1543, inStock: true, tags: ['natural', 'complete', 'no-fillers']
  },
  {
    id: 'cwf-005', name: "Sheba Perfect Portions Seafood Lover's Variety", slug: 'sheba-perfect-portions-seafood-variety',
    brand: 'Sheba', price: 14.99, priceLabel: '/12-pack', originalPrice: 18.99,
    description: 'Twin-pack trays are perfectly portioned for one serving. No mess, no leftovers. Fresh seafood flavors.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4785984-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 3456, inStock: true, badge: 'Sale', weight: '1.32 oz each', tags: ['seafood', 'portion-control', 'twin-pack']
  },
  {
    id: 'cwf-006', name: 'Royal Canin Instinctive Adult Wet Cat Food', slug: 'royal-canin-instinctive-adult-wet',
    brand: 'Royal Canin', price: 2.29, priceLabel: 'per pouch',
    description: 'Formulated to meet the instinctive nutritional needs of adult cats. Thin slices in sauce texture cats love.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2728986-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 1876, inStock: true, weight: '3 oz', tags: ['instinctive', 'slices', 'sauce', 'adult']
  },
  {
    id: 'cwf-007', name: 'Blue Buffalo Tastefuls Natural Adult Wet Cat Food', slug: 'blue-buffalo-tastefuls-natural-adult-wet',
    brand: 'Blue Buffalo', price: 1.99, priceLabel: 'per can',
    description: 'Flaked chicken in gravy made with real chicken and wholesome vegetables. No artificial flavors.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2670251-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 2341, inStock: true, weight: '3 oz', tags: ['flaked', 'chicken', 'natural', 'gravy']
  },
  {
    id: 'cwf-008', name: 'Tiki Cat Grill Ahi Tuna Wet Cat Food', slug: 'tiki-cat-grill-ahi-tuna-wet',
    brand: 'Tiki Cat', price: 2.39, priceLabel: 'per can',
    description: 'Wild-caught ahi tuna in tuna consommé. Grain-free, high-moisture formula ideal for urinary health.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2749496-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.7, reviewCount: 1543, inStock: true, badge: 'Premium', weight: '2.8 oz', tags: ['ahi-tuna', 'wild-caught', 'high-moisture', 'urinary']
  },
  {
    id: 'cwf-009', name: 'Weruva Classic Cat Wet Food Variety Pack', slug: 'weruva-classic-cat-wet-variety',
    brand: 'Weruva', price: 2.19, priceLabel: 'per can',
    description: 'Human-grade wet cat food packed in BPA-free cans. Shredded meat with broth and whole ingredients.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4786012-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 987, inStock: true, weight: '5.5 oz', tags: ['human-grade', 'BPA-free', 'shredded', 'broth']
  },
  {
    id: 'cwf-010', name: 'Ziwi Peak Wet Cat Food Chicken Recipe', slug: 'ziwi-peak-wet-cat-food-chicken',
    brand: 'Ziwi Peak', price: 3.99, priceLabel: 'per can',
    description: 'New Zealand free-range chicken wet cat food. 92% meat, organs, and New Zealand green mussel.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2263939-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.8, reviewCount: 765, inStock: true, badge: 'Premium', weight: '3 oz', tags: ['free-range', 'new-zealand', 'green-mussel', 'premium']
  },
  {
    id: 'cwf-011', name: 'Wellness Core Pâté Turkey & Chicken Wet Cat Food', slug: 'wellness-core-pate-turkey-chicken-wet',
    brand: 'Wellness', price: 2.59, priceLabel: 'per can',
    description: 'Protein-rich pâté made with turkey and chicken for cats who crave a hearty, grain-free meal.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2746594-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 1342, inStock: true, weight: '5.5 oz', tags: ['pate', 'turkey', 'chicken', 'grain-free']
  },
  {
    id: 'cwf-012', name: 'Nutro Perfect Portions Salmon Pâté Wet Cat Food', slug: 'nutro-perfect-portions-salmon-pate-wet',
    brand: 'Nutro', price: 13.49, priceLabel: '/12-pack',
    description: 'Single-serve salmon pâté trays made with real salmon and no artificial flavors or preservatives.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3289874-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 876, inStock: true, weight: '2.6 oz each', tags: ['salmon', 'pate', 'portion-control']
  },
  {
    id: 'cwf-013', name: 'Acana Premium Chunks in Gravy Chicken Wet Cat Food', slug: 'acana-premium-chunks-gravy-chicken-wet',
    brand: 'Acana', price: 2.69, priceLabel: 'per can',
    description: 'Tender chicken chunks simmered in a rich gravy, made with regionally sourced ingredients.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4785968-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 654, inStock: true, weight: '3 oz', tags: ['chunks', 'gravy', 'chicken', 'grain-free']
  },
  {
    id: 'cwf-014', name: 'Earthborn Holistic Tuna & Shrimp Wet Cat Food', slug: 'earthborn-holistic-tuna-shrimp-wet',
    brand: 'Earthborn Holistic', price: 1.79, priceLabel: 'per can',
    description: 'Grain-free tuna and shrimp recipe in a savory broth, crafted with quality ingredients cats love.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2182565-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 932, inStock: true, weight: '3 oz', tags: ['tuna', 'shrimp', 'broth', 'grain-free']
  },
  {
    id: 'cwf-015', name: 'Victor Hi-Pro Plus Shredded Beef Wet Cat Food', slug: 'victor-hi-pro-plus-shredded-beef-wet',
    brand: 'Victor', price: 2.09, priceLabel: 'per can',
    description: 'Shredded beef in a light sauce delivers a high-protein, savory meal cats find irresistible.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2707616-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.3, reviewCount: 521, inStock: true, weight: '3 oz', tags: ['beef', 'shredded', 'sauce', 'high-protein']
  },
  {
    id: 'cwf-016', name: 'American Journey Salmon & Tuna Pâté Wet Cat Food', slug: 'american-journey-salmon-tuna-pate-wet',
    brand: 'American Journey', price: 1.69, priceLabel: 'per can',
    description: 'Grain-free pâté combining salmon and tuna for an irresistible seafood meal packed with protein.',
    longDescription: 'American Journey Salmon & Tuna Pâté is crafted with real salmon as the first ingredient and blended with tuna for a flavor cats find hard to resist. This grain-free recipe is free from corn, wheat, soy, and artificial preservatives, making it a wholesome everyday option.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3290031-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 2987, inStock: true, badge: 'New', weight: '5.5 oz', tags: ['salmon', 'tuna', 'pate', 'grain-free']
  },
  {
    id: 'cwf-017', name: 'Canidae Pure Limited Ingredient Chicken Wet Cat Food', slug: 'canidae-pure-limited-ingredient-chicken-wet',
    brand: 'Canidae', price: 1.99, priceLabel: 'per can',
    description: 'Limited-ingredient recipe with real chicken and simple, wholesome ingredients for sensitive cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4785992-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 743, inStock: true, weight: '3 oz', tags: ['limited-ingredient', 'chicken', 'sensitive']
  },
  {
    id: 'cwf-018', name: 'Iams Perfect Portions Chicken & Liver Pâté', slug: 'iams-perfect-portions-chicken-liver-pate',
    brand: 'Iams', price: 12.99, priceLabel: '/12-pack',
    description: 'Twin-pack pâté trays with real chicken and liver, complete and balanced for adult cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2150643-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.3, reviewCount: 1102, inStock: true, weight: '2.6 oz each', tags: ['pate', 'chicken', 'liver', 'portion-control']
  },
  {
    id: 'cwf-019', name: 'Friskies Pate Turkey & Giblets Dinner Wet Cat Food', slug: 'friskies-pate-turkey-giblets-dinner-wet',
    brand: 'Friskies', price: 0.79, priceLabel: 'per can',
    description: 'Affordable everyday pâté with turkey and giblets, providing complete nutrition for adult cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2182451-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.2, reviewCount: 5621, inStock: true, weight: '5.5 oz', tags: ['pate', 'turkey', 'giblets', 'budget']
  },
  {
    id: 'cwf-020', name: 'Fancy Feast Medleys Chicken Florentine Wet Cat Food', slug: 'fancy-feast-medleys-chicken-florentine-wet',
    brand: 'Fancy Feast', price: 1.09, priceLabel: 'per can',
    description: 'Tender chicken in a creamy sauce with greens and tomatoes for a gourmet medley cats adore.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3289807-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 3210, inStock: true, weight: '3 oz', tags: ['medleys', 'chicken', 'gourmet', 'sauce']
  },
  {
    id: 'cwf-021', name: 'Meow Mix Wet Cat Food Tender Turkey Pâté', slug: 'meow-mix-wet-cat-food-tender-turkey-pate',
    brand: 'Meow Mix', price: 0.89, priceLabel: 'per can',
    description: 'Tender turkey pâté formulated to deliver complete and balanced nutrition at an everyday price.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4785950-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.1, reviewCount: 2456, inStock: true, weight: '2.75 oz', tags: ['pate', 'turkey', 'budget', 'everyday']
  },
  {
    id: 'cwf-022', name: '9Lives Daily Essentials Beef & Chicken Wet Cat Food', slug: '9lives-daily-essentials-beef-chicken-wet',
    brand: '9Lives', price: 0.75, priceLabel: 'per can',
    description: 'Hearty beef and chicken pâté delivers essential vitamins and minerals at a great value.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3882029-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.0, reviewCount: 1893, inStock: true, weight: '5.5 oz', tags: ['pate', 'beef', 'chicken', 'budget']
  },
  {
    id: 'cwf-023', name: 'Solid Gold Five Oceans Tuna & Shrimp Wet Cat Food', slug: 'solid-gold-five-oceans-tuna-shrimp-wet',
    brand: 'Solid Gold', price: 2.29, priceLabel: 'per can',
    description: 'Holistic recipe with wild-caught tuna and shrimp in a delicate broth, free of grains and gluten.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3124172-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 612, inStock: true, weight: '3 oz', tags: ['tuna', 'shrimp', 'holistic', 'grain-free']
  },
  {
    id: 'cwf-024', name: 'Zignature Trout & Salmon Wet Cat Food', slug: 'zignature-trout-salmon-wet',
    brand: 'Zignature', price: 2.49, priceLabel: 'per can',
    description: 'Limited-ingredient trout and salmon recipe in gravy, formulated without grain, corn, or wheat.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3154224-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 489, inStock: true, badge: 'Premium', weight: '3 oz', tags: ['trout', 'salmon', 'limited-ingredient', 'grain-free']
  },
  {
    id: 'cwf-025', name: 'Instinct Original Grain-Free Chicken Wet Cat Food', slug: 'instinct-original-grain-free-chicken-wet',
    brand: 'Instinct', price: 2.79, priceLabel: 'per can',
    description: 'Cage-free chicken is the first ingredient in this grain-free pâté with no by-product meals.',
    longDescription: 'Instinct Original recipes start with real cage-free chicken and are made without grain, potato, corn, wheat, soy, by-product meal, or artificial preservatives. Each can delivers a smooth pâté texture that mimics a cat\'s natural ancestral diet.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3289794-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.7, reviewCount: 1654, inStock: true, badge: 'Premium', weight: '3 oz', tags: ['cage-free', 'chicken', 'grain-free', 'pate']
  },
  {
    id: 'cwf-026', name: 'Tiki Cat Luau Chicken & Egg Wet Cat Food', slug: 'tiki-cat-luau-chicken-egg-wet',
    brand: 'Tiki Cat', price: 2.19, priceLabel: 'per can',
    description: 'Wild-caught chicken and egg in a savory broth, formulated for high moisture and high protein.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3882037-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.7, reviewCount: 1098, inStock: true, weight: '2.8 oz', tags: ['chicken', 'egg', 'broth', 'high-protein']
  },
  {
    id: 'cwf-027', name: 'Weruva Paw Lickin Chicken Wet Cat Food', slug: 'weruva-paw-lickin-chicken-wet',
    brand: 'Weruva', price: 2.29, priceLabel: 'per can',
    description: 'Shredded chicken breast in a light, savory broth made with human-grade ingredients.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3124164-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 876, inStock: true, weight: '5.5 oz', tags: ['chicken', 'shredded', 'broth', 'human-grade']
  },
  {
    id: 'cwf-028', name: 'Open Farm Chicken & Salmon Rustic Stew Wet Cat Food', slug: 'open-farm-chicken-salmon-rustic-stew-wet',
    brand: 'Open Farm', price: 2.99, priceLabel: 'per can',
    description: 'Slow-cooked stew with humanely raised chicken, wild-caught salmon, and pumpkin in a savory broth.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3357291-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.7, reviewCount: 543, inStock: true, badge: 'Premium', weight: '5.5 oz', tags: ['stew', 'chicken', 'salmon', 'ethically-sourced']
  },
  {
    id: 'cwf-029', name: 'Natural Balance Ultra Premium Chicken Pâté Wet Cat Food', slug: 'natural-balance-ultra-premium-chicken-pate-wet',
    brand: 'Natural Balance', price: 1.59, priceLabel: 'per can',
    description: 'Complete and balanced chicken pâté made with high-quality protein and wholesome vegetables.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2761911-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 765, inStock: true, weight: '5.5 oz', tags: ['pate', 'chicken', 'complete', 'balanced']
  },
  {
    id: 'cwf-030', name: "Nature's Recipe Grain-Free Salmon Pâté Wet Cat Food", slug: 'natures-recipe-grain-free-salmon-pate-wet',
    brand: "Nature's Recipe", price: 1.69, priceLabel: 'per can',
    description: 'Salmon pâté made without grains, corn, wheat, or soy for cats with sensitive digestion.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3881755-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.3, reviewCount: 432, inStock: true, weight: '3 oz', tags: ['salmon', 'grain-free', 'pate', 'sensitive']
  },
  {
    id: 'cwf-031', name: 'Whole Earth Farms Grain-Free Turkey & Chicken Wet Cat Food', slug: 'whole-earth-farms-grain-free-turkey-chicken-wet',
    brand: 'Whole Earth Farms', price: 1.49, priceLabel: 'per can',
    description: 'Affordable grain-free recipe with turkey and chicken in a savory broth, made in the USA.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4794186-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 654, inStock: true, weight: '5.5 oz', tags: ['grain-free', 'turkey', 'chicken', 'value']
  },
  {
    id: 'cwf-032', name: 'I and Love and You Lovely Lamb Stew Wet Cat Food', slug: 'i-and-love-and-you-lovely-lamb-stew-wet',
    brand: 'I and Love and You', price: 2.39, priceLabel: 'per can',
    description: 'Grain-free lamb stew with carrots and peas, made with real meat as the first ingredient.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2393733-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 398, inStock: true, weight: '5.5 oz', tags: ['lamb', 'stew', 'grain-free']
  },
  {
    id: 'cwf-033', name: 'Halo Holistic Whitefish & Salmon Wet Cat Food', slug: 'halo-holistic-whitefish-salmon-wet',
    brand: 'Halo', price: 1.99, priceLabel: 'per can',
    description: 'Holistic recipe with whitefish and salmon, made with non-GMO ingredients and no rendered meat meals.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2750112-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 521, inStock: true, weight: '3 oz', tags: ['whitefish', 'salmon', 'holistic', 'non-GMO']
  },
  {
    id: 'cwf-034', name: 'Smalls Fresh Ground Chicken Wet Cat Food', slug: 'smalls-fresh-ground-chicken-wet',
    brand: 'Smalls', price: 3.49, priceLabel: 'per pouch',
    description: 'Human-grade ground chicken recipe gently cooked to lock in nutrients and flavor cats crave.',
    longDescription: 'Smalls Fresh recipes are made with human-grade chicken and gently cooked in small batches to preserve nutrients. Each pouch is portioned for easy serving and free from fillers, by-products, and artificial preservatives, making it ideal for cats transitioning to a fresher diet.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3881819-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.8, reviewCount: 1432, inStock: true, badge: 'Premium', weight: '7 oz', tags: ['fresh', 'human-grade', 'chicken', 'minimally-processed']
  },
  {
    id: 'cwf-035', name: 'Rawz Shredded Rabbit & Chicken Wet Cat Food', slug: 'rawz-shredded-rabbit-chicken-wet',
    brand: 'Rawz', price: 2.99, priceLabel: 'per can',
    description: 'Shredded rabbit and chicken in broth, made with minimally processed ingredients and no carrageenan.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/659002-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.7, reviewCount: 287, inStock: true, badge: 'Premium', weight: '5.5 oz', tags: ['rabbit', 'chicken', 'shredded', 'no-carrageenan']
  },
  {
    id: 'cwf-036', name: 'Wellness Healthy Indulgence Bisques Tuna Wet Cat Food', slug: 'wellness-healthy-indulgence-bisques-tuna-wet',
    brand: 'Wellness', price: 1.89, priceLabel: 'per can',
    description: 'Velvety tuna bisque made with natural ingredients for a creamy, indulgent treat-like meal.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/327344-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 643, inStock: true, weight: '2.8 oz', tags: ['bisque', 'tuna', 'natural', 'indulgence']
  },
  {
    id: 'cwf-037', name: 'Purina Pro Plan Tender Cuts Salmon in Gravy Wet Cat Food', slug: 'purina-pro-plan-tender-cuts-salmon-gravy-wet',
    brand: 'Purina Pro Plan', price: 1.39, priceLabel: 'per can',
    description: 'Tender salmon cuts in a savory gravy, formulated with high-quality protein for strong muscles.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2749445-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 1987, inStock: true, weight: '3 oz', tags: ['salmon', 'gravy', 'tender-cuts', 'protein']
  },
  {
    id: 'cwf-038', name: 'Nutro Perfect Portions Real Chicken Pâté Wet Cat Food', slug: 'nutro-perfect-portions-real-chicken-pate-wet',
    brand: 'Nutro', price: 13.29, priceLabel: '/12-pack', originalPrice: 15.99,
    description: 'Single-serve pâté trays made with real chicken, easy to portion and free of artificial preservatives.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3881780-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 1023, inStock: true, badge: 'Sale', weight: '2.6 oz each', tags: ['pate', 'chicken', 'portion-control']
  },
  {
    id: 'cwf-039', name: 'Authority Grain-Free Turkey & Salmon Wet Cat Food', slug: 'authority-grain-free-turkey-salmon-wet',
    brand: 'Authority', price: 1.29, priceLabel: 'per can',
    description: 'Grain-free turkey and salmon recipe enriched with vitamins and antioxidants for everyday wellness.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/659029-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.2, reviewCount: 356, inStock: true, weight: '3 oz', tags: ['turkey', 'salmon', 'grain-free', 'value']
  },
  {
    id: 'cwf-040', name: 'Castor & Pollux Organix Chicken Stew Wet Cat Food', slug: 'castor-pollux-organix-chicken-stew-wet',
    brand: 'Castor & Pollux', price: 2.09, priceLabel: 'per can',
    description: 'Organic chicken stew with carrots and peas, made without artificial flavors or preservatives.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3949553-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.4, reviewCount: 298, inStock: true, weight: '5.5 oz', tags: ['organic', 'chicken', 'stew']
  },
  {
    id: 'cwf-041', name: 'Whole Earth Farms Grain-Free Salmon Pâté Wet Cat Food', slug: 'whole-earth-farms-grain-free-salmon-pate-wet',
    brand: 'Whole Earth Farms', price: 1.49, priceLabel: 'per can',
    description: 'Salmon pâté with no grain, corn, wheat, or soy, providing wholesome nutrition at a great value.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2762199-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.3, reviewCount: 412, inStock: true, weight: '5.5 oz', tags: ['salmon', 'pate', 'grain-free', 'value']
  },
  {
    id: 'cwf-042', name: 'Tiki Cat Velvet Mousse Chicken & Pumpkin Wet Cat Food', slug: 'tiki-cat-velvet-mousse-chicken-pumpkin-wet',
    brand: 'Tiki Cat', price: 1.49, priceLabel: 'per can',
    description: 'Ultra-smooth mousse made with chicken and pumpkin, perfect for cats who prefer a velvety texture.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3881801-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 567, inStock: true, weight: '2.8 oz', tags: ['mousse', 'chicken', 'pumpkin', 'grain-free']
  },
  {
    id: 'cwf-043', name: 'Fancy Feast Gravy Lovers Beef & Liver Wet Cat Food', slug: 'fancy-feast-gravy-lovers-beef-liver-wet',
    brand: 'Fancy Feast', price: 1.05, priceLabel: 'per can',
    description: 'Tender beef and liver in a rich, savory gravy that cats can lap up to the last drop.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/659010-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.5, reviewCount: 4123, inStock: true, weight: '3 oz', tags: ['gravy', 'beef', 'liver', 'classic']
  },
  {
    id: 'cwf-044', name: 'Weruva Cats in the Kitchen Steak Frites Wet Cat Food', slug: 'weruva-cats-in-the-kitchen-steak-frites-wet',
    brand: 'Weruva', price: 2.49, priceLabel: 'per can',
    description: 'Beef steak strips in a light gravy with pumpkin, made with human-grade, BPA-free packaging.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2701441-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.6, reviewCount: 489, inStock: false, badge: 'Premium', weight: '5.5 oz', tags: ['beef', 'steak', 'human-grade', 'gravy']
  },
  {
    id: 'cwf-045', name: 'ZiwiPeak Wet Cat Food Venison Recipe', slug: 'ziwipeak-wet-cat-food-venison-recipe',
    brand: 'ZiwiPeak', price: 4.29, priceLabel: 'per can',
    description: 'New Zealand free-range venison recipe with 92% meat, organs, and bone for a nutrient-dense meal.',
    longDescription: 'ZiwiPeak Venison wet cat food is made with free-range New Zealand venison, organs, and bone, delivering a nutrient-dense, high-moisture meal that closely mirrors a cat\'s natural prey-based diet. It contains no artificial additives, fillers, or rendered ingredients.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3289858-center-1',
    category: 'cat', type: 'food', subcategory: 'wet-food',
    rating: 4.8, reviewCount: 312, inStock: true, badge: 'Premium', weight: '3 oz', tags: ['venison', 'free-range', 'new-zealand', 'novel-protein']
  }
];

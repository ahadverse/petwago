import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'cpf-001', name: 'Orijen Cat & Kitten Grain-Free Dry Cat Food', slug: 'orijen-cat-kitten-grain-free-dry',
    brand: 'Orijen', price: 74.99,
    description: 'Biologically appropriate formula with 90% quality animal ingredients. Free-range chicken, turkey, and wild-caught fish.',
    longDescription: "Orijen Cat & Kitten mirrors the diet cats evolved to eat with rich inclusions of free-run chicken and turkey, whole wild-caught fish, and cage-free eggs.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2749816-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.8, reviewCount: 2341, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['premium', 'grain-free', 'high-protein', 'biologically-appropriate']
  },
  {
    id: 'cpf-002', name: 'Ziwi Peak Air-Dried Mackerel & Lamb Cat Food', slug: 'ziwi-peak-air-dried-mackerel-lamb',
    brand: 'Ziwi Peak', price: 52.99,
    description: 'Air-dried raw cat food from New Zealand. 96% fresh meat, organs, bone, and seafood. No sugar, grains, or peas.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3156166-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.9, reviewCount: 1234, inStock: true, badge: 'Premium', weight: '6 oz', tags: ['air-dried', 'raw', 'new-zealand', 'grain-free']
  },
  {
    id: 'cpf-003', name: 'Instinct Raw Boost Indoor Grain-Free Cat Food', slug: 'instinct-raw-boost-indoor-grain-free',
    brand: 'Instinct', price: 44.99, originalPrice: 54.99,
    description: 'Combines freeze-dried raw pieces with kibble. Cage-free chicken plus raw nutrition in every bite.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3180692-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 1876, inStock: true, badge: 'Premium', weight: '11 lb', tags: ['raw-boost', 'freeze-dried', 'cage-free', 'grain-free']
  },
  {
    id: 'cpf-004', name: "Stella & Chewy's Freeze-Dried Raw Cat Food", slug: 'stella-chewys-freeze-dried-raw-cat',
    brand: "Stella & Chewy's", price: 49.99,
    description: '98% farm-raised chicken, organs, and bone. Patented raw coating adds irresistible flavor and nutrition.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3744443-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.8, reviewCount: 2109, inStock: true, badge: 'Premium', weight: '18 oz', tags: ['freeze-dried', 'raw', 'farm-raised']
  },
  {
    id: 'cpf-005', name: 'Acana Regionals Wild Atlantic Dry Cat Food', slug: 'acana-regionals-wild-atlantic-dry',
    brand: 'Acana', price: 44.99, originalPrice: 52.99,
    description: 'Wild-caught fish from Atlantic Canada. Rich in Omega-3 DHA & EPA for a healthy coat and sharp vision.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3745091-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 987, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['wild-caught', 'fish', 'omega-3', 'premium']
  },
  {
    id: 'cpf-006', name: 'Taste of the Wild Rocky Mountain Feline Recipe', slug: 'taste-of-wild-rocky-mountain-feline',
    brand: 'Taste of the Wild', price: 38.99, originalPrice: 47.99,
    description: 'Grain-free cat food with roasted venison and smoked salmon. Rich in omega-3 and omega-6 fatty acids.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3896367-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 1543, inStock: true, badge: 'Sale', weight: '15 lb', tags: ['grain-free', 'venison', 'salmon', 'omega-3']
  },
  {
    id: 'cpf-007', name: 'Open Farm Wild-Caught Salmon Dry Cat Food', slug: 'open-farm-wild-caught-salmon-dry-cat',
    brand: 'Open Farm', price: 42.99,
    description: 'Ocean-wise certified wild-caught salmon. Non-GMO verified with humanely raised chicken and turkey.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2892911-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 876, inStock: true, badge: 'Premium', weight: '10 lb', tags: ['wild-caught', 'ocean-wise', 'non-GMO', 'salmon']
  },
  {
    id: 'cpf-008', name: 'Rawz Natural Pet Food Wet Chicken Cat Food', slug: 'rawz-natural-pet-food-wet-chicken-cat',
    brand: 'Rawz', price: 2.89, priceLabel: 'per can',
    description: 'Minimally processed canned cat food with high protein and no added carrageenan or tapioca.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3156191-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.8, reviewCount: 654, inStock: true, badge: 'Premium', weight: '5.5 oz', tags: ['minimally-processed', 'no-carrageenan', 'high-protein', 'natural']
  },
  {
    id: 'cpf-009', name: 'Nulo Freestyle Grain-Free Salmon & Peas Dry Cat Food', slug: 'nulo-freestyle-grain-free-salmon-peas-cat',
    brand: 'Nulo', price: 35.99, originalPrice: 44.99,
    description: 'Award-winning grain-free cat food with 80% salmon and other animal proteins. Low glycemic index.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3896383-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 987, inStock: true, badge: 'Sale', weight: '12 lb', tags: ['grain-free', 'salmon', 'low-glycemic', 'award-winning']
  },
  {
    id: 'cpf-010', name: 'Tiki Cat Born Carnivore Herring Dry Cat Food', slug: 'tiki-cat-born-carnivore-herring-dry',
    brand: 'Tiki Cat', price: 29.99,
    description: 'Protein-first kibble with whole herring and pumpkin seed. Grain-free, low carbohydrate, no potatoes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3489008-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 765, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['herring', 'grain-free', 'protein-first', 'low-carb']
  },
  {
    id: 'cpf-011', name: 'ZiwiPeak Air-Dried Venison Cat Food', slug: 'ziwipeak-air-dried-venison-cat-food',
    brand: 'ZiwiPeak', price: 56.99,
    description: 'Air-dried New Zealand venison recipe with 96% meat, organs, and bone for a novel-protein, nutrient-dense meal.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2995232-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.8, reviewCount: 432, inStock: true, badge: 'Premium', weight: '6 oz', tags: ['air-dried', 'venison', 'novel-protein', 'new-zealand']
  },
  {
    id: 'cpf-012', name: "Stella & Chewy's Freeze-Dried Raw Rabbit Dinner Morsels", slug: 'stella-chewys-freeze-dried-raw-rabbit-dinner',
    brand: "Stella & Chewy's", price: 51.99,
    description: 'Freeze-dried raw rabbit recipe made with cage-free meat, organs, and bone for a biologically appropriate diet.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3418761-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.8, reviewCount: 543, inStock: true, badge: 'Premium', weight: '14 oz', tags: ['freeze-dried', 'raw', 'rabbit', 'novel-protein']
  },
  {
    id: 'cpf-013', name: 'Wellness CORE Grain-Free Original Turkey & Chicken Dry Cat Food', slug: 'wellness-core-grain-free-original-turkey-chicken-dry',
    brand: 'Wellness', price: 43.99,
    description: 'Protein-rich grain-free formula with turkey and chicken, plus probiotics for digestive health.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2994441-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 1234, inStock: true, badge: 'Premium', weight: '11 lb', tags: ['grain-free', 'high-protein', 'probiotics']
  },
  {
    id: 'cpf-014', name: 'Nutro So Free Grain-Free Salmon & Lentils Dry Cat Food', slug: 'nutro-so-free-grain-free-salmon-lentils-dry',
    brand: 'Nutro', price: 36.99,
    description: 'Non-GMO grain-free recipe with farm-raised salmon as the first ingredient and no chicken by-product meal.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3717699-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.5, reviewCount: 654, inStock: true, weight: '10 lb', tags: ['grain-free', 'salmon', 'non-GMO']
  },
  {
    id: 'cpf-015', name: 'Earthborn Holistic Wild Sea Catch Grain-Free Dry Cat Food', slug: 'earthborn-holistic-wild-sea-catch-grain-free-dry',
    brand: 'Earthborn Holistic', price: 39.99, originalPrice: 47.99,
    description: 'Whitefish and herring meal deliver omega fatty acids in this grain-free, vitamin-rich formula.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3428555-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 543, inStock: true, badge: 'Sale', weight: '12.5 lb', tags: ['grain-free', 'whitefish', 'herring', 'omega']
  },
  {
    id: 'cpf-016', name: 'Victor Grain-Free Hi-Pro Plus Dry Cat Food', slug: 'victor-grain-free-hi-pro-plus-dry',
    brand: 'Victor', price: 34.99,
    description: 'High-protein, grain-free formula crafted with beef meal and chicken meal for active cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3180879-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.5, reviewCount: 432, inStock: true, weight: '15 lb', tags: ['grain-free', 'high-protein', 'beef']
  },
  {
    id: 'cpf-017', name: 'American Journey Raw Coated Salmon Recipe Dry Cat Food', slug: 'american-journey-raw-coated-salmon-recipe-dry',
    brand: 'American Journey', price: 33.99, originalPrice: 41.99,
    description: 'Kibble coated with freeze-dried raw salmon for an extra boost of protein and irresistible flavor.',
    longDescription: 'American Journey Raw Coated recipes combine grain-free kibble with a coating of freeze-dried raw salmon, giving cats the convenience of dry food with the added nutrition and palatability of raw. Made with real salmon as the first ingredient and no corn, wheat, or soy.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2899013-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 876, inStock: true, badge: 'Sale', weight: '10 lb', tags: ['raw-coated', 'salmon', 'grain-free']
  },
  {
    id: 'cpf-018', name: 'Canidae Pure Grain-Free Wild with Salmon Dry Cat Food', slug: 'canidae-pure-grain-free-wild-salmon-dry',
    brand: 'Canidae', price: 32.99,
    description: 'Limited-ingredient grain-free formula featuring fresh salmon as the single animal protein source.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3744806-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.5, reviewCount: 398, inStock: true, weight: '10 lb', tags: ['limited-ingredient', 'grain-free', 'salmon']
  },
  {
    id: 'cpf-019', name: 'Smalls Freeze-Dried Raw Turkey Cat Food', slug: 'smalls-freeze-dried-raw-turkey-cat-food',
    brand: 'Smalls', price: 38.99,
    description: 'Freeze-dried raw turkey recipe made with human-grade ingredients, ready to crumble or rehydrate.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2889333-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 321, inStock: true, badge: 'Premium', weight: '7 oz', tags: ['freeze-dried', 'raw', 'turkey', 'human-grade']
  },
  {
    id: 'cpf-020', name: 'Instinct Original Grain-Free Rabbit Dry Cat Food', slug: 'instinct-original-grain-free-rabbit-dry',
    brand: 'Instinct', price: 47.99,
    description: 'Cage-free rabbit is the first ingredient in this grain-free recipe inspired by the ancestral feline diet.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2994731-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 432, inStock: true, badge: 'Premium', weight: '10 lb', tags: ['grain-free', 'rabbit', 'novel-protein']
  },
  {
    id: 'cpf-021', name: 'Tiki Cat Aloha Friends Tuna & Quail Egg Cat Food', slug: 'tiki-cat-aloha-friends-tuna-quail-egg',
    brand: 'Tiki Cat', price: 1.89, priceLabel: 'per can',
    description: 'Wild-caught tuna with a whole quail egg in a savory broth for a high-moisture, protein-rich meal.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2899187-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 654, inStock: true, badge: 'Premium', weight: '2.4 oz', tags: ['tuna', 'quail-egg', 'wild-caught', 'high-moisture']
  },
  {
    id: 'cpf-022', name: 'Weruva Tiki Cat Koolina Luau Duck Wet Cat Food', slug: 'weruva-tiki-cat-koolina-luau-duck-wet',
    brand: 'Weruva', price: 2.49, priceLabel: 'per can',
    description: 'Shredded duck breast in a savory broth made with human-grade ingredients and BPA-free packaging.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3428571-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 287, inStock: true, badge: 'Premium', weight: '5.5 oz', tags: ['duck', 'human-grade', 'novel-protein']
  },
  {
    id: 'cpf-023', name: 'Open Farm RawMix Grain-Free Chicken Dry Cat Food', slug: 'open-farm-rawmix-grain-free-chicken-dry',
    brand: 'Open Farm', price: 45.99,
    description: 'Grain-free kibble blended with freeze-dried raw morsels of humanely raised chicken for added nutrition.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2889667-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 543, inStock: true, badge: 'Premium', weight: '8 lb', tags: ['raw-mix', 'grain-free', 'chicken', 'ethically-sourced']
  },
  {
    id: 'cpf-024', name: 'Acana Regionals Appalachian Ranch Dry Cat Food', slug: 'acana-regionals-appalachian-ranch-dry',
    brand: 'Acana', price: 46.99,
    description: 'Free-run chicken and quail combined with trout deliver a regionally inspired, protein-rich recipe.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3275114-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 432, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['grain-free', 'quail', 'trout', 'regional']
  },
  {
    id: 'cpf-025', name: 'Nulo Freestyle Grain-Free Duck & Lentils Dry Cat Food', slug: 'nulo-freestyle-grain-free-duck-lentils-dry',
    brand: 'Nulo', price: 37.99, originalPrice: 45.99,
    description: 'Novel duck protein with low-glycemic legumes and added BC30 probiotics for digestive support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2992218-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 398, inStock: true, badge: 'Sale', weight: '12 lb', tags: ['grain-free', 'duck', 'novel-protein', 'probiotics']
  },
  {
    id: 'cpf-026', name: 'Zignature Duck Limited Ingredient Dry Cat Food', slug: 'zignature-duck-limited-ingredient-dry',
    brand: 'Zignature', price: 41.99,
    description: 'Single-source duck protein formula free of chicken, grain, and gluten for sensitive cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3896404-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 376, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['limited-ingredient', 'duck', 'grain-free']
  },
  {
    id: 'cpf-027', name: "Stella & Chewy's Marie's Magical Dinner Morsels Beef Cat Food", slug: 'stella-chewys-maries-magical-dinner-morsels-beef',
    brand: "Stella & Chewy's", price: 53.99,
    description: 'Freeze-dried raw beef recipe made with cage-free meat and organic fruits and vegetables.',
    longDescription: "Stella & Chewy's Marie's Magical Dinner Morsels are made with 95% cage-free meat, organs, and bone, freeze-dried to preserve nutrients. This grain-free recipe can be served as a complete meal or sprinkled as a flavorful topper for picky cats.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4556508-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.8, reviewCount: 654, inStock: true, badge: 'Premium', weight: '14 oz', tags: ['freeze-dried', 'raw', 'beef', 'cage-free']
  },
  {
    id: 'cpf-028', name: 'Halo Holistic Grain-Free Wild Salmon & Whitefish Dry Cat Food', slug: 'halo-holistic-grain-free-wild-salmon-whitefish-dry',
    brand: 'Halo', price: 38.99,
    description: 'Non-GMO grain-free recipe with wild salmon and whitefish, made without rendered meat meals.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3744831-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 287, inStock: true, weight: '10 lb', tags: ['grain-free', 'salmon', 'whitefish', 'non-GMO']
  },
  {
    id: 'cpf-029', name: 'I and Love and You Grain-Free Lovely Lamb Dry Cat Food', slug: 'i-and-love-and-you-grain-free-lovely-lamb-dry',
    brand: 'I and Love and You', price: 35.99,
    description: 'Grain-free lamb-based recipe formulated with wholesome vegetables and no corn, wheat, or soy.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3156174-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.5, reviewCount: 234, inStock: true, weight: '11 lb', tags: ['grain-free', 'lamb']
  },
  {
    id: 'cpf-030', name: 'Solid Gold Holistique Blendz Grain-Free Dry Cat Food', slug: 'solid-gold-holistique-blendz-grain-free-dry',
    brand: 'Solid Gold', price: 36.99,
    description: 'Holistic grain-free recipe with ocean fish meal and added probiotics for whole-body wellness.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3717621-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 321, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['grain-free', 'holistic', 'probiotics']
  },
  {
    id: 'cpf-031', name: 'Rawz Meow-Logical Freeze-Dried Chicken & Turkey Cat Food', slug: 'rawz-meow-logical-freeze-dried-chicken-turkey',
    brand: 'Rawz', price: 49.99,
    description: 'Freeze-dried raw morsels with chicken and turkey, minimally processed for a biologically appropriate diet.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3526024-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 198, inStock: true, badge: 'Premium', weight: '12 oz', tags: ['freeze-dried', 'raw', 'chicken', 'turkey']
  },
  {
    id: 'cpf-032', name: "Nature's Recipe Grain-Free Salmon, Sweet Potato & Pumpkin Dry Cat Food", slug: 'natures-recipe-grain-free-salmon-sweet-potato-pumpkin-dry',
    brand: "Nature's Recipe", price: 31.99,
    description: 'Salmon-based grain-free formula with sweet potato and pumpkin to support healthy digestion.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3018011-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.4, reviewCount: 276, inStock: true, weight: '11 lb', tags: ['grain-free', 'salmon', 'digestion']
  },
  {
    id: 'cpf-033', name: 'Whole Earth Farms Grain-Free Wild Caught Salmon Cat Food', slug: 'whole-earth-farms-grain-free-wild-caught-salmon-cat',
    brand: 'Whole Earth Farms', price: 28.99,
    description: 'Affordable grain-free recipe with wild-caught salmon as the main protein source.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3745542-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.4, reviewCount: 312, inStock: true, weight: '11.5 lb', tags: ['grain-free', 'salmon', 'value']
  },
  {
    id: 'cpf-034', name: 'Castor & Pollux Organix Grain-Free Wild-Caught Salmon Recipe', slug: 'castor-pollux-organix-grain-free-wild-caught-salmon',
    brand: 'Castor & Pollux', price: 33.99,
    description: 'Organic ingredients combined with wild-caught salmon make for a clean, grain-free recipe.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2994707-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.5, reviewCount: 198, inStock: true, weight: '10 lb', tags: ['organic', 'grain-free', 'salmon']
  },
  {
    id: 'cpf-035', name: 'Tiki Cat After Dark Quail & Chicken Liver Dry Cat Food', slug: 'tiki-cat-after-dark-quail-chicken-liver-dry',
    brand: 'Tiki Cat', price: 32.99,
    description: 'Ultra-high-protein, grain-free formula with quail and chicken liver and zero plant proteins.',
    longDescription: 'Tiki Cat After Dark is formulated with no plant proteins at all, relying instead on quail, chicken liver, and other animal-based ingredients to deliver an ultra-high-protein, low-carbohydrate diet that closely mirrors a cat\'s natural prey-based nutrition.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3156140-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 276, inStock: true, badge: 'Premium', weight: '8 lb', tags: ['grain-free', 'quail', 'high-protein', 'no-plant-protein']
  },
  {
    id: 'cpf-036', name: 'ZiwiPeak Air-Dried Quail Cat Food', slug: 'ziwipeak-air-dried-quail-cat-food',
    brand: 'ZiwiPeak', price: 58.99,
    description: 'Free-range quail air-dried to preserve nutrients, with 96% meat, organs, and bone for novel-protein nutrition.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3744460-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.8, reviewCount: 187, inStock: true, badge: 'Premium', weight: '6 oz', tags: ['air-dried', 'quail', 'novel-protein', 'new-zealand']
  },
  {
    id: 'cpf-037', name: 'Wellness CORE RawRev Grain-Free Turkey & Chicken with Freeze-Dried Turkey Liver', slug: 'wellness-core-rawrev-grain-free-turkey-chicken-liver',
    brand: 'Wellness', price: 45.99,
    description: 'Grain-free kibble mixed with freeze-dried raw turkey liver for added flavor and nutrition.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4715863-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 312, inStock: true, badge: 'Premium', weight: '10 lb', tags: ['raw-rev', 'grain-free', 'turkey']
  },
  {
    id: 'cpf-038', name: 'Victor Select Grain-Free Active Dog and Cat Formula', slug: 'victor-select-grain-free-active-dog-cat-formula',
    brand: 'Victor', price: 33.99,
    description: 'High-energy grain-free formula with beef, pork, and chicken meals for active, multi-pet households.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2995216-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.4, reviewCount: 198, inStock: true, weight: '15 lb', tags: ['grain-free', 'high-energy', 'multi-protein']
  },
  {
    id: 'cpf-039', name: 'Nulo Freestyle Grain-Free Turkey & Cod Cat Food', slug: 'nulo-freestyle-grain-free-turkey-cod-cat-food',
    brand: 'Nulo', price: 38.99,
    description: 'Grain-free recipe with turkey and cod, fortified with taurine and BC30 probiotics for immune support.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2994766-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 287, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['grain-free', 'turkey', 'cod', 'probiotics']
  },
  {
    id: 'cpf-040', name: 'Instinct Be Natural Grain-Free Real Chicken Dry Cat Food', slug: 'instinct-be-natural-grain-free-real-chicken-dry',
    brand: 'Instinct', price: 34.99,
    description: 'Natural grain-free recipe with real chicken as the first ingredient and added vitamins and minerals.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3896375-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.5, reviewCount: 432, inStock: true, weight: '11 lb', tags: ['grain-free', 'natural', 'chicken']
  },
  {
    id: 'cpf-041', name: 'Open Farm Homestead Turkey & Chicken Dry Cat Food', slug: 'open-farm-homestead-turkey-chicken-dry',
    brand: 'Open Farm', price: 41.99,
    description: 'Ethically sourced turkey and chicken from family farms, paired with non-GMO fruits and vegetables.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2751027-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 354, inStock: true, badge: 'Premium', weight: '8 lb', tags: ['ethically-sourced', 'turkey', 'chicken']
  },
  {
    id: 'cpf-042', name: 'Acana Highland Pasture Recipe Dry Cat Food', slug: 'acana-highland-pasture-recipe-dry',
    brand: 'Acana', price: 47.99,
    description: 'Free-run lamb and wild-caught flounder combine for a grain-free, regionally inspired recipe.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3744611-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 298, inStock: true, badge: 'Premium', weight: '12 lb', tags: ['grain-free', 'lamb', 'flounder']
  },
  {
    id: 'cpf-043', name: 'Earthborn Holistic Venture Duck & Pumpkin Limited Ingredient Cat Food', slug: 'earthborn-holistic-venture-duck-pumpkin-limited-ingredient',
    brand: 'Earthborn Holistic', price: 40.99,
    description: 'Single novel-protein duck recipe with pumpkin, designed for cats with food sensitivities.',
    longDescription: 'Earthborn Holistic Venture is a limited-ingredient diet built around a single novel animal protein, duck, paired with pumpkin and a small number of wholesome ingredients. It is grain-free and formulated to minimize the chance of triggering food sensitivities.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2749832-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.6, reviewCount: 213, inStock: true, badge: 'Premium', weight: '12.5 lb', tags: ['limited-ingredient', 'duck', 'novel-protein', 'grain-free']
  },
  {
    id: 'cpf-044', name: 'Weruva Wx Wet Cat Food Wild Caught Salmon Au Jus', slug: 'weruva-wx-wet-cat-food-wild-caught-salmon-au-jus',
    brand: 'Weruva', price: 2.99, priceLabel: 'per can',
    description: 'Wild-caught salmon in a light au jus, made with human-grade ingredients and no fillers.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3745577-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.7, reviewCount: 165, inStock: false, badge: 'Premium', weight: '5.5 oz', tags: ['wild-caught', 'salmon', 'human-grade']
  },
  {
    id: 'cpf-045', name: 'Orijen Six Fish Grain-Free Dry Cat Food', slug: 'orijen-six-fish-grain-free-dry-cat-food',
    brand: 'Orijen', price: 76.99, originalPrice: 84.99,
    description: 'Six fresh and raw fish make up a high-protein, grain-free formula rich in omega-3 fatty acids.',
    longDescription: 'Orijen Six Fish features a WholePrey ratio of fresh and raw fish, including mackerel, herring, redfish, flounder, monkfish, and silver hake. This biologically appropriate, grain-free formula delivers high levels of omega-3 fatty acids to support skin, coat, and overall health.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3744890-center-1',
    category: 'cat', type: 'food', subcategory: 'premium-food',
    rating: 4.9, reviewCount: 654, inStock: true, badge: 'Sale', weight: '12 lb', tags: ['grain-free', 'fish', 'omega-3', 'biologically-appropriate']
  }
];

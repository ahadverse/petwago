import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'cvd-001', name: "Hill's Prescription Diet c/d Multicare Urinary Dry", slug: 'hills-prescription-diet-cd-urinary-dry',
    brand: "Hill's", price: 79.99,
    description: 'Clinically proven to reduce risk of urinary stones in cats. Requires veterinary authorization.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684186-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 654, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['urinary', 'prescription', 'stones']
  },
  {
    id: 'cvd-002', name: 'Royal Canin Veterinary Urinary SO Dry Cat Food', slug: 'royal-canin-veterinary-urinary-so-dry',
    brand: 'Royal Canin', price: 84.99,
    description: 'Helps dissolve struvite stones and reduces risk of struvite and oxalate recurrence. Highly palatable.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3241205-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 432, inStock: true, badge: 'Vet Diet', weight: '22 lb', tags: ['struvite', 'prescription', 'urinary']
  },
  {
    id: 'cvd-003', name: 'Purina Pro Plan Veterinary Diets UR Urinary Cat', slug: 'purina-pro-plan-vet-ur-urinary',
    brand: 'Purina Pro Plan', price: 72.99,
    description: 'Promotes urinary tract health by reducing struvite crystals. Low magnesium formula with high moisture.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2191103-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 321, inStock: true, badge: 'Vet Diet', weight: '16 lb', tags: ['urinary', 'low-magnesium', 'prescription']
  },
  {
    id: 'cvd-004', name: "Hill's Prescription Diet z/d Skin/Food Sensitivities", slug: 'hills-prescription-diet-zd-skin-food',
    brand: "Hill's", price: 74.99,
    description: 'Specially formulated for cats with food sensitivities and skin conditions. Hydrolyzed protein formula.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2194996-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 245, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['skin', 'food-sensitivity', 'hydrolyzed']
  },
  {
    id: 'cvd-005', name: 'Royal Canin Gastrointestinal Fiber Response Cat Food', slug: 'royal-canin-gastrointestinal-fiber-response',
    brand: 'Royal Canin', price: 77.99,
    description: 'Helps manage chronic large bowel diarrhea and constipation. High soluble and insoluble fiber blend.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4785933-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 187, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['fiber', 'gastrointestinal', 'prescription']
  },
  {
    id: 'cvd-006', name: 'Royal Canin Renal Support T Dry Cat Food', slug: 'royal-canin-renal-support-t-dry-cat',
    brand: 'Royal Canin', price: 82.99,
    description: 'Thin slice texture for cats with renal insufficiency. Highly palatable to encourage food intake.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362517-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['renal', 'kidney', 'palatable', 'prescription']
  },
  {
    id: 'cvd-007', name: 'Hill\'s Prescription Diet m/d GlucoSupport Dry Cat Food', slug: 'hills-prescription-diet-md-glucosupport-dry',
    brand: 'Hill\'s', price: 76.99,
    description: 'Supports healthy blood glucose levels in diabetic cats. High protein, low carbohydrate formula.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2195366-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 167, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['diabetes', 'blood-glucose', 'low-carb', 'prescription']
  },
  {
    id: 'cvd-008', name: 'Purina Pro Plan Veterinary CN Critical Nutrition Wet Cat', slug: 'purina-pro-plan-vet-cn-critical-wet-cat',
    brand: 'Purina Pro Plan', price: 3.99, priceLabel: 'per can',
    description: 'High-calorie wet food for critically ill or recovering cats. Highly palatable with complete nutrition.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4782530-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 134, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['critical-nutrition', 'recovery', 'high-calorie', 'prescription']
  },
  {
    id: 'cvd-009', name: 'Hill\'s Prescription Diet w/d Digestive/Weight Cat Food', slug: 'hills-prescription-diet-wd-digestive-weight-cat',
    brand: 'Hill\'s', price: 72.99,
    description: 'Manages weight and blood glucose for cats with diabetes and obesity. High fiber, low fat.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362533-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 156, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['weight', 'diabetes', 'high-fiber', 'prescription']
  },
  {
    id: 'cvd-010', name: 'Royal Canin Hypoallergenic HP Dry Cat Food', slug: 'royal-canin-hypoallergenic-hp-dry-cat',
    brand: 'Royal Canin', price: 89.99,
    description: 'Hydrolyzed protein formula for cats with food allergies and adverse food reactions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686245-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 112, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['hydrolyzed', 'allergy', 'hypoallergenic', 'prescription']
  },
  {
    id: 'cvd-011', name: "Hill's Prescription Diet k/d Kidney Care Dry Cat Food", slug: 'hills-prescription-diet-kd-kidney-care-dry',
    brand: "Hill's", price: 78.99,
    description: 'Clinically tested nutrition to support kidney function in cats with chronic kidney disease.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362331-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 543, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['renal', 'kidney', 'prescription']
  },
  {
    id: 'cvd-012', name: 'Purina Pro Plan Veterinary Diets NF Kidney Function Dry Cat Food', slug: 'purina-pro-plan-vet-nf-kidney-function-dry',
    brand: 'Purina Pro Plan', price: 75.99,
    description: 'Formulated to help manage kidney function with controlled phosphorus and high-quality protein.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2693411-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 289, inStock: true, badge: 'Vet Diet', weight: '16 lb', tags: ['renal', 'kidney', 'phosphorus', 'prescription']
  },
  {
    id: 'cvd-013', name: 'Royal Canin Veterinary Diabetic Dry Cat Food', slug: 'royal-canin-veterinary-diabetic-dry-cat',
    brand: 'Royal Canin', price: 81.99,
    description: 'Helps support healthy blood glucose levels in diabetic cats with a high-protein, low-carb formula.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3931126-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 234, inStock: true, badge: 'Vet Diet', weight: '8.8 lb', tags: ['diabetes', 'blood-glucose', 'prescription']
  },
  {
    id: 'cvd-014', name: 'Purina Pro Plan Veterinary Diets DM Dietetic Management Wet Cat Food', slug: 'purina-pro-plan-vet-dm-dietetic-management-wet',
    brand: 'Purina Pro Plan', price: 4.29, priceLabel: 'per can',
    description: 'Low-carbohydrate, high-protein wet food formulated to help manage diabetes mellitus in cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3492071-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['diabetes', 'low-carb', 'prescription']
  },
  {
    id: 'cvd-015', name: "Hill's Prescription Diet i/d Digestive Care Dry Cat Food", slug: 'hills-prescription-diet-id-digestive-care-dry',
    brand: "Hill's", price: 73.99,
    description: 'Highly digestible formula to help manage chronic vomiting, diarrhea, and gastrointestinal issues.',
    longDescription: "Hill's Prescription Diet i/d Digestive Care is formulated with prebiotic fiber and ActivBiome+ technology to help nourish the gut microbiome and support cats recovering from gastrointestinal upset. It is highly digestible and clinically proven to help manage acute and chronic digestive issues.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3241176-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 321, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['gastrointestinal', 'digestive-care', 'prescription']
  },
  {
    id: 'cvd-016', name: 'Royal Canin Veterinary Gastrointestinal Low Fat Dry Cat Food', slug: 'royal-canin-veterinary-gastrointestinal-low-fat-dry',
    brand: 'Royal Canin', price: 76.99,
    description: 'Low-fat formula designed for cats with fat intolerance and digestive sensitivities.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686544-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 156, inStock: true, badge: 'Vet Diet', weight: '8.8 lb', tags: ['gastrointestinal', 'low-fat', 'prescription']
  },
  {
    id: 'cvd-017', name: "Hill's Prescription Diet y/d Thyroid Care Dry Cat Food", slug: 'hills-prescription-diet-yd-thyroid-care-dry',
    brand: "Hill's", price: 79.99,
    description: 'Specially formulated with controlled iodine levels to help manage feline hyperthyroidism.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3210767-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 143, inStock: true, badge: 'Vet Diet', weight: '8.5 lb', tags: ['thyroid', 'hyperthyroidism', 'prescription']
  },
  {
    id: 'cvd-018', name: 'Royal Canin Veterinary Hepatic Dry Cat Food', slug: 'royal-canin-veterinary-hepatic-dry-cat',
    brand: 'Royal Canin', price: 83.99,
    description: 'Formulated to support liver function with reduced copper and high-quality, easily digestible protein.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3207111-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 98, inStock: true, badge: 'Vet Diet', weight: '8.8 lb', tags: ['liver', 'hepatic', 'prescription']
  },
  {
    id: 'cvd-019', name: "Hill's Prescription Diet t/d Dental Care Dry Cat Food", slug: 'hills-prescription-diet-td-dental-care-dry',
    brand: "Hill's", price: 71.99,
    description: 'Unique fiber technology and kibble shape help reduce plaque and tartar buildup with every bite.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2700318-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 276, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['dental', 'tartar-control', 'prescription']
  },
  {
    id: 'cvd-020', name: 'Purina Pro Plan Veterinary Diets HA Hypoallergenic Wet Cat Food', slug: 'purina-pro-plan-vet-ha-hypoallergenic-wet',
    brand: 'Purina Pro Plan', price: 4.49, priceLabel: 'per can',
    description: 'Hydrolyzed soy protein formula designed to manage adverse food reactions and allergies.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684389-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 87, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['hydrolyzed', 'allergy', 'prescription']
  },
  {
    id: 'cvd-021', name: "Hill's Prescription Diet r/d Weight Reduction Dry Cat Food", slug: 'hills-prescription-diet-rd-weight-reduction-dry',
    brand: "Hill's", price: 74.99,
    description: 'Calorie-controlled formula with high fiber to help cats lose weight while feeling full.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2700326-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['weight-loss', 'high-fiber', 'prescription']
  },
  {
    id: 'cvd-022', name: 'Royal Canin Veterinary Satiety Weight Management Dry Cat Food', slug: 'royal-canin-veterinary-satiety-weight-management-dry',
    brand: 'Royal Canin', price: 78.99,
    description: 'High-fiber, low-calorie formula designed to promote satiety and help overweight cats lose weight.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2191040-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 167, inStock: true, badge: 'Vet Diet', weight: '7.7 lb', tags: ['weight-management', 'satiety', 'prescription']
  },
  {
    id: 'cvd-023', name: "Hill's Prescription Diet z/d Low Allergen Wet Cat Food", slug: 'hills-prescription-diet-zd-low-allergen-wet',
    brand: "Hill's", price: 4.19, priceLabel: 'per can',
    description: 'Hydrolyzed protein wet food formulated for cats with severe food allergies and skin conditions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2693437-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 76, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['hydrolyzed', 'allergy', 'skin', 'prescription']
  },
  {
    id: 'cvd-024', name: 'Royal Canin Veterinary Urinary SO Wet Cat Food', slug: 'royal-canin-veterinary-urinary-so-wet-cat',
    brand: 'Royal Canin', price: 4.39, priceLabel: 'per can',
    description: 'Wet food formula that helps dissolve struvite stones and supports overall urinary tract health.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362648-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 213, inStock: true, badge: 'Vet Diet', weight: '5.8 oz', tags: ['urinary', 'struvite', 'prescription']
  },
  {
    id: 'cvd-025', name: 'Purina Pro Plan Veterinary Diets EN Gastroenteric Dry Cat Food', slug: 'purina-pro-plan-vet-en-gastroenteric-dry',
    brand: 'Purina Pro Plan', price: 75.49,
    description: 'Highly digestible formula designed to manage acute and chronic gastrointestinal disorders.',
    longDescription: 'Purina Pro Plan Veterinary Diets EN Gastroenteric is formulated with highly digestible ingredients and a unique fiber blend to help manage gastrointestinal disorders such as inflammatory bowel disease, pancreatitis, and food intolerances. It supports nutrient absorption during recovery.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2195331-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 154, inStock: true, badge: 'Vet Diet', weight: '16 lb', tags: ['gastrointestinal', 'digestive', 'prescription']
  },
  {
    id: 'cvd-026', name: "Hill's Prescription Diet metabolic + urinary Dry Cat Food", slug: 'hills-prescription-diet-metabolic-urinary-dry',
    brand: "Hill's", price: 80.99,
    description: 'Dual-action formula that supports healthy weight loss while promoting urinary tract health.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3931249-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 187, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['weight', 'urinary', 'metabolic', 'prescription']
  },
  {
    id: 'cvd-027', name: 'Royal Canin Veterinary Calm Dry Cat Food', slug: 'royal-canin-veterinary-calm-dry-cat',
    brand: 'Royal Canin', price: 73.99,
    description: 'Formulated with alpha-casozepine and tryptophan to help support a calm behavioral state.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3931169-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.3, reviewCount: 92, inStock: true, badge: 'Vet Diet', weight: '8.8 lb', tags: ['behavior', 'calming', 'prescription']
  },
  {
    id: 'cvd-028', name: "Hill's Prescription Diet d/d Skin/Food Sensitivities Duck Formula", slug: 'hills-prescription-diet-dd-skin-food-duck',
    brand: "Hill's", price: 76.49,
    description: 'Single novel-protein duck formula designed for cats with food sensitivities and skin conditions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3386851-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 109, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['skin', 'food-sensitivity', 'novel-protein', 'duck']
  },
  {
    id: 'cvd-029', name: 'Purina Pro Plan Veterinary Diets OM Overweight Management Dry Cat Food', slug: 'purina-pro-plan-vet-om-overweight-management-dry',
    brand: 'Purina Pro Plan', price: 74.49,
    description: 'High-protein, low-calorie formula clinically tested to help cats achieve and maintain a healthy weight.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3207007-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 201, inStock: true, badge: 'Vet Diet', weight: '16 lb', tags: ['weight', 'overweight', 'prescription']
  },
  {
    id: 'cvd-030', name: 'Royal Canin Veterinary Mobility Support Dry Cat Food', slug: 'royal-canin-veterinary-mobility-support-dry-cat',
    brand: 'Royal Canin', price: 77.49,
    description: 'Formulated with EPA and DHA to support joint health and mobility in cats with arthritis.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686616-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 134, inStock: true, badge: 'Vet Diet', weight: '8.8 lb', tags: ['mobility', 'joint-support', 'prescription']
  },
  {
    id: 'cvd-031', name: "Hill's Prescription Diet c/d Multicare Wet Cat Food", slug: 'hills-prescription-diet-cd-multicare-wet',
    brand: "Hill's", price: 4.09, priceLabel: 'per can',
    description: 'Wet food formula clinically proven to dissolve struvite stones and reduce recurrence risk.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3363122-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 245, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['urinary', 'stones', 'prescription']
  },
  {
    id: 'cvd-032', name: 'Royal Canin Veterinary Skin Support Dry Cat Food', slug: 'royal-canin-veterinary-skin-support-dry-cat',
    brand: 'Royal Canin', price: 78.49,
    description: 'Formulated with EPA, DHA, and B vitamins to support skin barrier function and reduce irritation.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/713562-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 122, inStock: true, badge: 'Vet Diet', weight: '8.8 lb', tags: ['skin', 'skin-support', 'prescription']
  },
  {
    id: 'cvd-033', name: "Hill's Prescription Diet g/d Aging Care Dry Cat Food", slug: 'hills-prescription-diet-gd-aging-care-dry',
    brand: "Hill's", price: 75.99,
    description: 'Formulated to support heart, kidney, and brain health in aging cats with antioxidants and omega-3s.',
    longDescription: "Hill's Prescription Diet g/d Aging Care is designed to support multiple aspects of senior cat health, including cognitive function, kidney health, and cardiac function. It features a blend of antioxidants, omega-3 fatty acids, and controlled phosphorus levels.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3035137-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 143, inStock: true, badge: 'Vet Diet', weight: '8.5 lb', tags: ['senior', 'aging-care', 'prescription']
  },
  {
    id: 'cvd-034', name: 'Purina Pro Plan Veterinary Diets DM Dietetic Management Dry Cat Food', slug: 'purina-pro-plan-vet-dm-dietetic-management-dry',
    brand: 'Purina Pro Plan', price: 73.49,
    description: 'High-protein, low-carbohydrate dry formula designed to help manage diabetes mellitus in cats.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3241192-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 176, inStock: true, badge: 'Vet Diet', weight: '12 lb', tags: ['diabetes', 'low-carb', 'prescription']
  },
  {
    id: 'cvd-035', name: 'Royal Canin Veterinary Anallergenic Dry Cat Food', slug: 'royal-canin-veterinary-anallergenic-dry-cat',
    brand: 'Royal Canin', price: 92.99,
    description: 'Ultra-hypoallergenic formula made with low molecular weight feather protein for severe food allergies.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684522-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 67, inStock: true, badge: 'Vet Diet', weight: '8.8 lb', tags: ['hypoallergenic', 'allergy', 'prescription']
  },
  {
    id: 'cvd-036', name: "Hill's Prescription Diet i/d Digestive Care Wet Cat Food", slug: 'hills-prescription-diet-id-digestive-care-wet',
    brand: "Hill's", price: 4.19, priceLabel: 'per can',
    description: 'Highly digestible wet food to help manage gastrointestinal upset and aid digestive recovery.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686211-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.6, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['gastrointestinal', 'digestive-care', 'prescription']
  },
  {
    id: 'cvd-037', name: 'Royal Canin Veterinary Recovery Liquid Cat Food', slug: 'royal-canin-veterinary-recovery-liquid-cat',
    brand: 'Royal Canin', price: 4.59, priceLabel: 'per can',
    description: 'High-energy, easily digestible liquid diet for cats recovering from illness or surgery.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2191197-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 54, inStock: true, badge: 'Vet Diet', weight: '6.1 oz', tags: ['recovery', 'critical-nutrition', 'prescription']
  },
  {
    id: 'cvd-038', name: "Hill's Prescription Diet w/d Multi-Benefit Wet Cat Food", slug: 'hills-prescription-diet-wd-multi-benefit-wet',
    brand: "Hill's", price: 3.89, priceLabel: 'per can',
    description: 'High-fiber wet formula that supports healthy weight, blood sugar, and digestive regularity.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684231-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 132, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['weight', 'diabetes', 'high-fiber', 'prescription']
  },
  {
    id: 'cvd-039', name: 'Purina Pro Plan Veterinary Diets st/ox Urinary Dry Cat Food', slug: 'purina-pro-plan-vet-stox-urinary-dry',
    brand: 'Purina Pro Plan', price: 74.99,
    description: 'Reduces struvite and oxalate stone formation with controlled mineral levels and balanced pH.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3363085-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 189, inStock: true, badge: 'Vet Diet', weight: '16 lb', tags: ['urinary', 'struvite', 'oxalate', 'prescription']
  },
  {
    id: 'cvd-040', name: 'Royal Canin Veterinary Early Renal Support Dry Cat Food', slug: 'royal-canin-veterinary-early-renal-support-dry',
    brand: 'Royal Canin', price: 79.49,
    description: 'Formulated for cats in the early stages of kidney disease with moderately reduced phosphorus.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686350-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 87, inStock: true, badge: 'Vet Diet', weight: '6.6 lb', tags: ['renal', 'kidney', 'early-stage', 'prescription']
  },
  {
    id: 'cvd-041', name: "Hill's Prescription Diet j/d Joint Care Dry Cat Food", slug: 'hills-prescription-diet-jd-joint-care-dry',
    brand: "Hill's", price: 76.99,
    description: 'Clinically proven nutrition with EPA to improve mobility and joint comfort in cats with arthritis.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362314-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 76, inStock: true, badge: 'Vet Diet', weight: '8.5 lb', tags: ['joint-care', 'mobility', 'prescription']
  },
  {
    id: 'cvd-042', name: 'Purina Pro Plan Veterinary Diets HP Hydrolyzed Dry Cat Food', slug: 'purina-pro-plan-vet-hp-hydrolyzed-dry',
    brand: 'Purina Pro Plan', price: 86.99,
    description: 'Hydrolyzed protein formula formulated to manage food sensitivities and adverse reactions to food.',
    longDescription: 'Purina Pro Plan Veterinary Diets HP Hydrolyzed uses a single hydrolyzed soy protein source broken down into small components to reduce the likelihood of an immune response. It is formulated for cats with food allergies, intolerances, or inflammatory bowel disease.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362728-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 98, inStock: true, badge: 'Vet Diet', weight: '13.2 lb', tags: ['hydrolyzed', 'allergy', 'prescription']
  },
  {
    id: 'cvd-043', name: 'Royal Canin Veterinary Diabetic Wet Cat Food', slug: 'royal-canin-veterinary-diabetic-wet-cat',
    brand: 'Royal Canin', price: 4.29, priceLabel: 'per can',
    description: 'Wet formula with high protein and low carbohydrates to help manage feline diabetes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362496-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 112, inStock: true, badge: 'Vet Diet', weight: '5.8 oz', tags: ['diabetes', 'low-carb', 'prescription']
  },
  {
    id: 'cvd-044', name: "Hill's Prescription Diet c/d Multicare Stress Dry Cat Food", slug: 'hills-prescription-diet-cd-multicare-stress-dry',
    brand: "Hill's", price: 81.49,
    description: 'Combines urinary stone management with stress-reducing nutrients for cats prone to stress-related FLUTD.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362584-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.4, reviewCount: 65, inStock: false, badge: 'Vet Diet', weight: '8.5 lb', tags: ['urinary', 'stress', 'prescription']
  },
  {
    id: 'cvd-045', name: 'Royal Canin Veterinary Multifunction Renal + Hydrolyzed Protein Dry Cat Food', slug: 'royal-canin-veterinary-multifunction-renal-hydrolyzed-dry',
    brand: 'Royal Canin', price: 94.99,
    description: 'Combines renal support with hydrolyzed protein for cats managing both kidney disease and food allergies.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2195294-center-1',
    category: 'cat', type: 'food', subcategory: 'veterinary-diets',
    rating: 4.5, reviewCount: 54, inStock: true, badge: 'Vet Diet', weight: '7.7 lb', tags: ['renal', 'hydrolyzed', 'multifunction', 'prescription']
  }
];

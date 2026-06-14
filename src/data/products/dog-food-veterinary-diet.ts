import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'vd-001', name: "Hill's Prescription Diet k/d Kidney Care Dry Dog Food", slug: 'hills-prescription-diet-kd-kidney-care',
    brand: "Hill's", price: 89.99,
    description: 'Clinically proven to improve and extend quality of life in dogs with kidney disease. Requires veterinary authorization.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686544-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 432, inStock: true, badge: 'Vet Diet', weight: '27.5 lb', tags: ['kidney', 'prescription', 'therapeutic']
  },
  {
    id: 'vd-002', name: 'Royal Canin Veterinary Renal Support Dry Dog Food', slug: 'royal-canin-renal-support-dry',
    brand: 'Royal Canin', price: 94.99,
    description: 'Specially formulated to support dogs with chronic renal insufficiency. Highly palatable to encourage food intake.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686350-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 287, inStock: true, badge: 'Vet Diet', weight: '22 lb', tags: ['renal', 'prescription', 'kidney']
  },
  {
    id: 'vd-003', name: 'Purina Pro Plan Veterinary Diets EN Gastroenteric Dry', slug: 'purina-pro-plan-vet-en-gastroenteric',
    brand: 'Purina Pro Plan', price: 79.99,
    description: 'Gentle formula for dogs with sensitive stomachs and gastrointestinal disorders. Highly digestible ingredients.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362939-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.7, reviewCount: 543, inStock: true, badge: 'Vet Diet', weight: '18 lb', tags: ['gastrointestinal', 'prescription', 'digestive']
  },
  {
    id: 'vd-004', name: "Hill's Prescription Diet i/d Digestive Care Wet", slug: 'hills-prescription-diet-id-digestive-wet',
    brand: "Hill's", price: 4.49, priceLabel: 'per can',
    description: 'Wet food formula to help restore and maintain digestive health. Highly digestible ingredients for quick recovery.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3748532-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 321, inStock: true, badge: 'Vet Diet', weight: '13 oz', tags: ['digestive', 'wet', 'prescription']
  },
  {
    id: 'vd-005', name: 'Royal Canin Gastrointestinal Low Fat Dry Dog Food', slug: 'royal-canin-gastrointestinal-low-fat',
    brand: 'Royal Canin', price: 84.99,
    description: 'Reduced fat veterinary diet for dogs with pancreatitis or fat malabsorption disorders.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2692557-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '28.6 lb', tags: ['low-fat', 'pancreatitis', 'prescription']
  },
  {
    id: 'vd-006', name: "Hill's Prescription Diet j/d Joint Care Dry Dog Food", slug: 'hills-prescription-diet-jd-joint-care',
    brand: "Hill's", price: 87.99,
    description: 'Clinically proven to improve mobility in dogs with arthritis within 28 days. High omega-3 fatty acids.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690383-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 387, inStock: true, badge: 'Vet Diet', weight: '27.5 lb', tags: ['joint', 'arthritis', 'omega-3', 'prescription']
  },
  {
    id: 'vd-007', name: 'Royal Canin Cardiac Early Stage Dry Dog Food', slug: 'royal-canin-cardiac-early-stage',
    brand: 'Royal Canin', price: 92.99,
    description: 'Specially formulated for dogs in early stages of chronic heart disease. Restricted sodium with high omega-3.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690050-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '19.8 lb', tags: ['cardiac', 'low-sodium', 'heart', 'prescription']
  },
  {
    id: 'vd-008', name: "Hill's Prescription Diet r/d Weight Reduction Dog Food", slug: 'hills-prescription-diet-rd-weight-reduction',
    brand: "Hill's", price: 84.99,
    description: 'Clinically proven weight loss formula with L-Carnitine. Helps dogs achieve and maintain a healthy weight.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362226-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.4, reviewCount: 276, inStock: true, badge: 'Vet Diet', weight: '27.5 lb', tags: ['weight-loss', 'l-carnitine', 'obesity', 'prescription']
  },
  {
    id: 'vd-009', name: 'Royal Canin Hydrolyzed Protein Adult HP Dry Dog Food', slug: 'royal-canin-hydrolyzed-protein-hp-dry',
    brand: 'Royal Canin', price: 96.99,
    description: 'Hydrolyzed soy protein diet for dogs with food allergies and adverse food reactions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362613-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 167, inStock: true, badge: 'Vet Diet', weight: '25.3 lb', tags: ['hydrolyzed', 'allergy', 'food-sensitivity', 'prescription']
  },
  {
    id: 'vd-010', name: 'Purina Pro Plan Veterinary CN Critical Nutrition Wet', slug: 'purina-pro-plan-vet-cn-critical-nutrition',
    brand: 'Purina Pro Plan', price: 4.99, priceLabel: 'per can',
    description: 'High-calorie convalescence diet for critically ill or recovering dogs. Easy to eat and highly digestible.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690201-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.7, reviewCount: 134, inStock: true, badge: 'Vet Diet', weight: '5.5 oz', tags: ['critical-nutrition', 'recovery', 'high-calorie', 'prescription']
  },
  {
    id: 'vd-011', name: "Hill's Prescription Diet w/d Multi-Benefit Weight, Glycemic & Digestive Management", slug: 'hills-prescription-diet-wd-multi-benefit',
    brand: "Hill's", price: 86.99,
    description: 'Multi-benefit therapeutic diet that supports healthy weight, blood sugar, and digestive function in one formula.',
    longDescription: "Hill's Prescription Diet w/d is formulated for dogs needing weight management, glycemic control, or digestive support. High fiber content promotes satiety while precisely balanced nutrients help maintain healthy blood glucose levels.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690181-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 312, inStock: true, badge: 'Vet Diet', weight: '27.5 lb', tags: ['weight-management', 'glycemic', 'digestive', 'prescription']
  },
  {
    id: 'vd-012', name: 'Royal Canin Veterinary Diet Urinary SO Dry Dog Food', slug: 'royal-canin-urinary-so-dry',
    brand: 'Royal Canin', price: 91.99,
    description: 'Therapeutic formula designed to dissolve struvite stones and reduce risk of urinary stone recurrence.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3241213-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 298, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['urinary', 'stones', 'prescription']
  },
  {
    id: 'vd-013', name: 'Purina Pro Plan Veterinary Diets DM Dietetic Management Dry', slug: 'purina-pro-plan-vet-dm-dietetic-management',
    brand: 'Purina Pro Plan', price: 78.99,
    description: 'Low-carbohydrate formula designed to help manage blood glucose levels in dogs with diabetes mellitus.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2883038-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 187, inStock: true, badge: 'Vet Diet', weight: '18 lb', tags: ['diabetes', 'low-carb', 'prescription']
  },
  {
    id: 'vd-014', name: "Hill's Prescription Diet z/d Skin & Food Sensitivities Dry Dog Food", slug: 'hills-prescription-diet-zd-skin-food-sensitivities',
    brand: "Hill's", price: 88.99,
    description: 'Hydrolyzed protein formula clinically proven to manage food sensitivities and reduce skin irritation.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2685146-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 245, inStock: true, badge: 'Vet Diet', weight: '24 lb', tags: ['allergy', 'hydrolyzed', 'skin', 'prescription']
  },
  {
    id: 'vd-015', name: 'Royal Canin Veterinary Diet Hepatic Dry Dog Food', slug: 'royal-canin-hepatic-dry',
    brand: 'Royal Canin', price: 93.99,
    description: 'Specially formulated to support liver function with adapted protein, copper, and vitamin levels.',
    longDescription: 'Royal Canin Veterinary Diet Hepatic is designed for dogs with chronic liver disease. The formula has reduced and highly digestible protein content along with low copper levels and added antioxidants to support liver function.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3080536-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 143, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['liver', 'hepatic', 'prescription']
  },
  {
    id: 'vd-016', name: "Hill's Prescription Diet c/d Multicare Urinary Care Wet", slug: 'hills-prescription-diet-cd-multicare-urinary-wet',
    brand: "Hill's", price: 4.29, priceLabel: 'per can',
    description: 'Clinically tested wet formula to dissolve struvite stones and support long-term urinary tract health.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2692565-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 209, inStock: true, badge: 'Vet Diet', weight: '13 oz', tags: ['urinary', 'wet', 'prescription']
  },
  {
    id: 'vd-017', name: 'Purina Pro Plan Veterinary Diets OM Overweight Management Dry', slug: 'purina-pro-plan-vet-om-overweight-management',
    brand: 'Purina Pro Plan', price: 76.99,
    description: 'High-fiber, calorie-controlled formula to help overweight dogs lose weight while feeling satisfied.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684821-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.4, reviewCount: 221, inStock: true, badge: 'Vet Diet', weight: '16 lb', tags: ['weight-loss', 'overweight', 'prescription']
  },
  {
    id: 'vd-018', name: 'Royal Canin Veterinary Diet Mobility Support Dry Dog Food', slug: 'royal-canin-mobility-support-dry',
    brand: 'Royal Canin', price: 89.99,
    description: 'Joint support formula with EPA/DHA and glucosamine-chondroitin to help dogs with osteoarthritis stay active.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2195243-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['joint', 'mobility', 'osteoarthritis', 'prescription']
  },
  {
    id: 'vd-019', name: "Hill's Prescription Diet g/d Aging Care Dry Dog Food", slug: 'hills-prescription-diet-gd-aging-care',
    brand: "Hill's", price: 83.99,
    description: 'Comprehensive formula for senior dogs that supports heart, kidney, brain, and joint health all in one diet.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684389-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 176, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['senior', 'aging', 'multi-organ', 'prescription']
  },
  {
    id: 'vd-020', name: 'Purina Pro Plan Veterinary Diets HA Hydrolyzed Dry Dog Food', slug: 'purina-pro-plan-vet-ha-hydrolyzed',
    brand: 'Purina Pro Plan', price: 99.99,
    description: 'Hydrolyzed soy protein diet formulated for dogs with adverse reactions to food, including skin and GI signs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2727377-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 154, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['hydrolyzed', 'allergy', 'prescription']
  },
  {
    id: 'vd-021', name: "Hill's Prescription Diet d/d Skin/Food Sensitivities Duck & Rice Dry", slug: 'hills-prescription-diet-dd-skin-food-sensitivities-duck-rice',
    brand: "Hill's", price: 85.99,
    description: 'Limited-antigen formula with duck as the sole animal protein source for dogs with food allergies.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3298105-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 132, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['allergy', 'limited-antigen', 'duck', 'prescription']
  },
  {
    id: 'vd-022', name: 'Royal Canin Veterinary Diet Satiety Support Weight Management Dry', slug: 'royal-canin-satiety-support-weight-management-dry',
    brand: 'Royal Canin', price: 87.99,
    description: 'High-fiber, high-protein formula that promotes satiety to support healthy weight loss in dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2714171-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 187, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['weight-management', 'satiety', 'prescription']
  },
  {
    id: 'vd-023', name: "Hill's Prescription Diet metabolic + mobility Dry Dog Food", slug: 'hills-prescription-diet-metabolic-mobility',
    brand: "Hill's", price: 90.99,
    description: 'Combination formula that supports both healthy weight loss and joint mobility for dogs with arthritis.',
    longDescription: "Hill's Prescription Diet metabolic + mobility combines clinically proven weight management nutrition with joint care ingredients like EPA. It's designed for overweight dogs who also need support for joint comfort and mobility.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684557-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 165, inStock: true, badge: 'Vet Diet', weight: '24 lb', tags: ['weight-loss', 'joint', 'mobility', 'prescription']
  },
  {
    id: 'vd-024', name: 'Purina Pro Plan Veterinary Diets NF Kidney Function Wet', slug: 'purina-pro-plan-vet-nf-kidney-function-wet',
    brand: 'Purina Pro Plan', price: 4.79, priceLabel: 'per can',
    description: 'Reduced phosphorus and protein wet formula to help support kidney function in dogs with renal disease.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2195286-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 143, inStock: true, badge: 'Vet Diet', weight: '13.3 oz', tags: ['kidney', 'renal', 'wet', 'prescription']
  },
  {
    id: 'vd-025', name: 'Royal Canin Veterinary Diet Anallergenic Dry Dog Food', slug: 'royal-canin-anallergenic-dry',
    brand: 'Royal Canin', price: 102.99,
    description: 'Highly hydrolyzed feather protein formula designed for the most severe cases of food allergy.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2692557-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 98, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['allergy', 'hydrolyzed', 'severe-sensitivity', 'prescription']
  },
  {
    id: 'vd-026', name: "Hill's Prescription Diet l/d Liver Care Dry Dog Food", slug: 'hills-prescription-diet-ld-liver-care',
    brand: "Hill's", price: 88.49,
    description: 'Specially formulated to support liver function with high-quality protein and added antioxidants.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362381-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 121, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['liver', 'hepatic', 'prescription']
  },
  {
    id: 'vd-027', name: 'Purina Pro Plan Veterinary Diets JM Joint Mobility Dry', slug: 'purina-pro-plan-vet-jm-joint-mobility',
    brand: 'Purina Pro Plan', price: 79.99,
    description: 'EPA-enriched formula clinically shown to help improve joint comfort and mobility in dogs with arthritis.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2686624-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['joint', 'mobility', 'arthritis', 'prescription']
  },
  {
    id: 'vd-028', name: 'Royal Canin Veterinary Diet Glycobalance Dry Dog Food', slug: 'royal-canin-glycobalance-dry',
    brand: 'Royal Canin', price: 91.49,
    description: 'High-fiber, low-glycemic formula to help manage blood glucose response in dogs with diabetes.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3401918-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 109, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['diabetes', 'glycemic', 'prescription']
  },
  {
    id: 'vd-029', name: "Hill's Prescription Diet t/d Dental Care Dry Dog Food", slug: 'hills-prescription-diet-td-dental-care',
    brand: "Hill's", price: 75.99,
    description: 'Unique fiber technology in a specially shaped kibble that mechanically reduces plaque and tartar buildup.',
    longDescription: "Hill's Prescription Diet t/d is clinically proven dental nutrition with a fiber matrix kibble that scrubs the tooth surface as your dog chews. It's a simple, effective way to reduce plaque and tartar accumulation between cleanings.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3035137-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 287, inStock: true, badge: 'Vet Diet', weight: '25 lb', tags: ['dental', 'plaque', 'tartar', 'prescription']
  },
  {
    id: 'vd-030', name: 'Purina Pro Plan Veterinary Diets EL Elemental Dry Dog Food', slug: 'purina-pro-plan-vet-el-elemental',
    brand: 'Purina Pro Plan', price: 104.99,
    description: 'Nutritionally complete elemental diet for dogs with severe food allergies or intolerances who need free amino acids.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362672-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.4, reviewCount: 67, inStock: true, badge: 'Vet Diet', weight: '15.4 lb', tags: ['allergy', 'elemental', 'severe-sensitivity', 'prescription']
  },
  {
    id: 'vd-031', name: 'Royal Canin Veterinary Diet Recovery Liquid Wet Dog Food', slug: 'royal-canin-recovery-liquid-wet',
    brand: 'Royal Canin', price: 5.49, priceLabel: 'per can',
    description: 'High-calorie, highly digestible liquid diet for dogs recovering from illness, surgery, or anorexia.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3074224-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 87, inStock: true, badge: 'Vet Diet', weight: '6.1 oz', tags: ['recovery', 'high-calorie', 'wet', 'prescription']
  },
  {
    id: 'vd-032', name: "Hill's Prescription Diet derm complete Dry Dog Food", slug: 'hills-prescription-diet-derm-complete',
    brand: "Hill's", price: 86.49,
    description: 'Environmental and food sensitivity formula that supports skin barrier health from the inside out.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690236-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 154, inStock: true, badge: 'Vet Diet', weight: '24 lb', tags: ['skin', 'allergy', 'dermatologic', 'prescription']
  },
  {
    id: 'vd-033', name: 'Purina Pro Plan Veterinary Diets UR Urinary St/Ox Dry', slug: 'purina-pro-plan-vet-ur-urinary-st-ox',
    brand: 'Purina Pro Plan', price: 80.99,
    description: 'Urinary formula designed to help dissolve struvite stones and reduce the risk of struvite and oxalate stones.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690244-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 143, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['urinary', 'stones', 'prescription']
  },
  {
    id: 'vd-034', name: 'Royal Canin Veterinary Diet Gastrointestinal High Energy Dry', slug: 'royal-canin-gastrointestinal-high-energy-dry',
    brand: 'Royal Canin', price: 88.99,
    description: 'Calorie-dense, highly digestible formula for dogs with GI disorders who need to gain or maintain weight.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690181-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 109, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['gastrointestinal', 'high-energy', 'prescription']
  },
  {
    id: 'vd-035', name: "Hill's Prescription Diet i/d Digestive Care Low Fat Dry Dog Food", slug: 'hills-prescription-diet-id-low-fat-dry',
    brand: "Hill's", price: 81.99,
    description: 'Low-fat digestive formula for dogs with chronic or acute GI issues, including pancreatitis-prone dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2689850-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.6, reviewCount: 198, inStock: true, badge: 'Vet Diet', weight: '24 lb', tags: ['digestive', 'low-fat', 'pancreatitis', 'prescription']
  },
  {
    id: 'vd-036', name: 'Purina Pro Plan Veterinary Diets DH Dental Health Dry', slug: 'purina-pro-plan-vet-dh-dental-health',
    brand: 'Purina Pro Plan', price: 73.99,
    description: 'Specially shaped kibble formulated to mechanically clean teeth and reduce tartar accumulation.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690076-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.4, reviewCount: 132, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['dental', 'tartar', 'prescription']
  },
  {
    id: 'vd-037', name: 'Royal Canin Veterinary Diet Calm Dry Dog Food', slug: 'royal-canin-calm-dry',
    brand: 'Royal Canin', price: 82.99,
    description: 'Nutritional formula with alpha-casozepine and tryptophan to help support a calm behavioral state during stressful events.',
    longDescription: 'Royal Canin Veterinary Diet Calm is formulated with milk-derived alpha-casozepine and L-tryptophan, nutrients shown to support emotional balance. It is often recommended for dogs experiencing situational stress such as travel or vet visits.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362648-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.4, reviewCount: 98, inStock: true, badge: 'Vet Diet', weight: '7.7 lb', tags: ['behavioral', 'calm', 'prescription']
  },
  {
    id: 'vd-038', name: "Hill's Prescription Diet u/d Urinary Care Dry Dog Food", slug: 'hills-prescription-diet-ud-urinary-care',
    brand: "Hill's", price: 89.49,
    description: 'Low-purine formula designed to help dissolve and prevent urate and cystine bladder stones.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2684549-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 76, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['urinary', 'low-purine', 'stones', 'prescription']
  },
  {
    id: 'vd-039', name: 'Purina Pro Plan Veterinary Diets FortiFlora Digestive Supplement', slug: 'purina-pro-plan-vet-fortiflora-digestive-supplement',
    brand: 'Purina Pro Plan', price: 42.99,
    description: 'Probiotic supplement formulated to support digestive health and a balanced gut microbiome in dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362496-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.7, reviewCount: 1432, inStock: true, badge: 'Vet Diet', weight: '30-pack', tags: ['probiotic', 'digestive', 'supplement', 'prescription']
  },
  {
    id: 'vd-040', name: 'Royal Canin Veterinary Diet Skin Support Dry Dog Food', slug: 'royal-canin-skin-support-dry',
    brand: 'Royal Canin', price: 85.99,
    description: 'Targeted nutrition with EPA/DHA and B vitamins to help reinforce the skin barrier in dogs with dermatologic issues.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690367-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 121, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['skin', 'dermatologic', 'prescription']
  },
  {
    id: 'vd-041', name: "Hill's Prescription Diet Metabolic Wet Dog Food", slug: 'hills-prescription-diet-metabolic-wet',
    brand: "Hill's", price: 4.99, priceLabel: 'per can',
    description: 'Clinically proven weight management wet formula that helps activate metabolism for healthy weight loss.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690244-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 143, inStock: true, badge: 'Vet Diet', weight: '13 oz', tags: ['weight-loss', 'metabolic', 'wet', 'prescription']
  },
  {
    id: 'vd-042', name: 'Purina Pro Plan Veterinary Diets Veterinary Supplements Calming Care', slug: 'purina-pro-plan-vet-calming-care-supplement',
    brand: 'Purina Pro Plan', price: 39.99,
    description: 'Probiotic supplement formulated to help reduce signs of anxiety and promote calm behavior in dogs.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2689702-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.4, reviewCount: 432, inStock: true, badge: 'Vet Diet', weight: '60-pack', tags: ['probiotic', 'calming', 'supplement', 'prescription']
  },
  {
    id: 'vd-043', name: 'Royal Canin Veterinary Diet Early Cardiac Wet Dog Food', slug: 'royal-canin-early-cardiac-wet',
    brand: 'Royal Canin', price: 4.59, priceLabel: 'per can',
    description: 'Sodium-restricted wet formula designed to support dogs in early stages of chronic heart disease.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362470-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 65, inStock: true, badge: 'Vet Diet', weight: '13 oz', tags: ['cardiac', 'low-sodium', 'wet', 'prescription']
  },
  {
    id: 'vd-044', name: "Hill's Prescription Diet y/d Thyroid Care Dry Dog Food", slug: 'hills-prescription-diet-yd-thyroid-care',
    brand: "Hill's", price: 84.49,
    description: 'Restricted-iodine formula clinically shown to help manage hyperthyroidism in dogs through nutrition alone.',
    longDescription: "Hill's Prescription Diet y/d Thyroid Care is formulated with controlled iodine levels to help support healthy thyroid hormone production. This nutritional approach can help manage hyperthyroidism without medication or surgery in some dogs.",
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2690076-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.4, reviewCount: 54, inStock: true, badge: 'Vet Diet', weight: '17.6 lb', tags: ['thyroid', 'hyperthyroidism', 'prescription']
  },
  {
    id: 'vd-045', name: 'Purina Pro Plan Veterinary Diets Allergen Management Dry', slug: 'purina-pro-plan-vet-allergen-management-dry',
    brand: 'Purina Pro Plan', price: 82.49,
    description: 'Novel protein formula with venison and oat meal designed for dogs with food allergies or sensitivities.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3362189-center-1',
    category: 'dog', type: 'food', subcategory: 'veterinary-diet',
    rating: 4.5, reviewCount: 87, inStock: false, badge: 'Vet Diet', weight: '17.6 lb', tags: ['allergy', 'novel-protein', 'venison', 'prescription']
  }
];

import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'cst-001', name: 'SmartyKat Hot Pursuit Electronic Cat Toy', slug: 'smartykat-hot-pursuit-electronic',
    brand: 'SmartyKat', price: 14.99,
    description: 'Electronic wand toy with unpredictable movement pattern to ignite natural hunting instincts.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3855291-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 6543, inStock: true, badge: 'New', tags: ['electronic', 'wand', 'interactive', 'hunting']
  },
  {
    id: 'cst-002', name: 'KONG Feather Teaser Cat Toy', slug: 'kong-feather-teaser-cat-toy',
    brand: 'KONG', price: 7.99,
    description: 'Realistic feather wand for interactive play. Encourages healthy exercise and natural hunting behavior.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3717171-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 3214, inStock: true, tags: ['feather', 'wand', 'interactive', 'exercise']
  },
  {
    id: 'cst-003', name: 'Petstages Tower of Tracks Cat Toy', slug: 'petstages-tower-of-tracks',
    brand: 'Petstages', price: 11.99, originalPrice: 15.99,
    description: '3-level ball track toy for independent play. Each level has a spinning ball for endless entertainment.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1133810-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 5432, inStock: true, badge: 'Sale', tags: ['track', 'ball', '3-level', 'independent-play']
  },
  {
    id: 'cst-004', name: 'GoCat Da Bird Feather Toy', slug: 'gocat-da-bird-feather-toy',
    brand: 'GoCat', price: 9.99,
    description: 'Realistic flying bird simulation with real guinea hen feathers. Most popular cat toy in the world.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4666715-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.8, reviewCount: 8765, inStock: true, tags: ['feather', 'bird', 'guinea-hen', 'wand']
  },
  {
    id: 'cst-005', name: 'Ethical Pet Spot Laser Cat Toy', slug: 'ethical-pet-spot-laser-toy',
    brand: 'Ethical Pet', price: 12.99,
    description: 'Automatic rotating laser toy with 3 speed settings. Keeps cats active and entertained hands-free.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4680314-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 4321, inStock: true, tags: ['laser', 'automatic', 'hands-free', 'exercise']
  },
  {
    id: 'cst-006', name: 'Cat Dancer Products Rainbow Cat Charmer', slug: 'cat-dancer-rainbow-cat-charmer',
    brand: 'Cat Dancer', price: 7.99,
    description: 'Colorful fleece strips on a flexible wand. Simple design that cats go absolutely crazy for.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3160211-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 8765, inStock: true, tags: ['wand', 'fleece', 'colorful', 'simple']
  },
  {
    id: 'cst-007', name: 'Bergan Turboscratcher Cat Toy with Catnip', slug: 'bergan-turboscratcher-with-catnip',
    brand: 'Bergan', price: 16.99, originalPrice: 22.99,
    description: 'Two-in-one track ball toy and scratcher. Replaceable cardboard scratcher center with catnip.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3937966-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 6543, inStock: true, badge: 'Sale', tags: ['scratcher', 'track-ball', 'catnip', '2-in-1']
  },
  {
    id: 'cst-008', name: 'Catit Senses 2.0 Digger Interactive Toy', slug: 'catit-senses-digger-interactive',
    brand: 'Catit', price: 18.99,
    description: 'Stimulates natural foraging and hunting behavior. Five tubes that cats must fish treats out of.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3576312-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 2134, inStock: true, badge: 'New', tags: ['foraging', 'puzzle', 'tubes', 'interactive']
  },
  {
    id: 'cst-009', name: 'Yeowww! Catnip Banana Cat Toy', slug: 'yeowww-catnip-banana-cat-toy',
    brand: 'Yeowww!', price: 9.99,
    description: '100% organically grown catnip in a banana-shaped cotton canvas toy. Consistently rated the best catnip toy.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2445919-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.8, reviewCount: 12543, inStock: true, tags: ['catnip', 'organic', 'banana', 'canvas']
  },
  {
    id: 'cst-010', name: 'Frisco Bird with Feathers Teaser Cat Wand', slug: 'frisco-bird-feathers-teaser-wand',
    brand: 'Frisco', price: 8.99, originalPrice: 11.99,
    description: 'Feather and ribbon bird teaser on a flexible wand. Encourages jumping and active play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4559899-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 3456, inStock: true, badge: 'Sale', tags: ['feather', 'wand', 'bird', 'active-play']
  },
  {
    id: 'cst-011', name: 'PetSafe Bolt Automatic Laser Cat Toy', slug: 'petsafe-bolt-automatic-laser-toy',
    brand: 'PetSafe', price: 24.99, originalPrice: 29.99,
    description: 'Handheld or tripod-mounted laser toy with random patterns to keep cats engaged for hours.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2445935-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 3987, inStock: true, badge: 'Sale', tags: ['laser', 'automatic', 'tripod', 'random-pattern']
  },
  {
    id: 'cst-012', name: 'Petstages Cat Tracks Three-Level Tower', slug: 'petstages-cat-tracks-three-level-tower',
    brand: 'Petstages', price: 13.99,
    description: 'Stackable track toy with three spinning balls and a mylar-crinkle ball for added sensory fun.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2214651-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 1654, inStock: true, tags: ['track', 'ball', 'sensory', 'independent-play']
  },
  {
    id: 'cst-013', name: 'KONG Naturals Catnip Mouse Toy 3-Pack', slug: 'kong-naturals-catnip-mouse-3-pack',
    brand: 'KONG', price: 6.99,
    description: 'Set of three plush mice filled with premium North American catnip, perfect for batting and fetching.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4638626-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 5432, inStock: true, tags: ['catnip', 'mouse', 'plush', '3-pack']
  },
  {
    id: 'cst-014', name: 'GoCat Catcher Wand Teaser with Bonus Refill', slug: 'gocat-catcher-wand-teaser-refill',
    brand: 'GoCat', price: 12.99,
    description: 'Durable teaser wand with a bonus feather refill, designed for active games of chase and pounce.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3905817-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 2876, inStock: true, tags: ['wand', 'teaser', 'feather', 'refill']
  },
  {
    id: 'cst-015', name: 'Trixie Flippy Flip Board Treat Puzzle', slug: 'trixie-flippy-flip-board-treat-puzzle',
    brand: 'Trixie', price: 15.99,
    description: 'Flip-board puzzle toy with hidden compartments that challenge cats to find hidden treats.',
    longDescription: 'This sliding flip-board puzzle features multiple compartments that hide kibble or treats beneath movable covers. Cats use their paws and noses to uncover the rewards, providing mental stimulation and slowing down treat consumption.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3879823-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 1432, inStock: true, badge: 'New', tags: ['puzzle', 'treat', 'flip-board', 'foraging']
  },
  {
    id: 'cst-016', name: 'SmartyKat Skitter Critters Catnip Toy Set', slug: 'smartykat-skitter-critters-catnip-set',
    brand: 'SmartyKat', price: 8.99,
    description: 'Set of small critter-shaped plush toys infused with catnip, sized for easy carrying and batting.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3763214-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 2109, inStock: true, tags: ['catnip', 'plush', 'critters', 'set']
  },
  {
    id: 'cst-017', name: 'Catit Senses 2.0 Play Circuit Ball Track', slug: 'catit-senses-play-circuit-ball-track',
    brand: 'Catit', price: 16.99, originalPrice: 21.99,
    description: 'Modular ball-track circuit that connects to other Catit Senses pieces for an expandable play system.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1257331-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 1876, inStock: true, badge: 'Sale', tags: ['ball-track', 'modular', 'expandable', 'interactive']
  },
  {
    id: 'cst-018', name: 'Frisco Crinkle Tunnel with Dangling Toy', slug: 'frisco-crinkle-tunnel-dangling-toy',
    brand: 'Frisco', price: 19.99,
    description: 'Collapsible crinkle tunnel with a peek-a-boo hole and a dangling plush toy for chase games.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3665497-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 3654, inStock: true, tags: ['tunnel', 'crinkle', 'collapsible', 'dangling-toy']
  },
  {
    id: 'cst-019', name: 'Ethical Pet Wool Mice Cat Toy 6-Pack', slug: 'ethical-pet-wool-mice-6-pack',
    brand: 'Ethical Pet', price: 5.99,
    description: 'Six handmade wool mice toys, lightweight and perfect for solo batting and fetch play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/232661-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.2, reviewCount: 1543, inStock: true, tags: ['wool', 'mice', 'handmade', '6-pack']
  },
  {
    id: 'cst-020', name: 'PetSafe Hexbug Robotic Mouse Cat Toy', slug: 'petsafe-hexbug-robotic-mouse-toy',
    brand: 'PetSafe', price: 12.99,
    description: 'Battery-powered robotic mouse that darts and changes direction to mimic real prey movement.',
    longDescription: 'This robotic mouse uses erratic, unpredictable movement and realistic mouse-like sounds to trigger your cat\'s hunting instinct. The durable shell withstands pouncing and biting, and a single battery powers hours of play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3665606-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 2654, inStock: true, badge: 'New', tags: ['robotic', 'electronic', 'mouse', 'battery-powered']
  },
  {
    id: 'cst-021', name: 'Yeowww! Catnip Cigar Toy', slug: 'yeowww-catnip-cigar-toy',
    brand: 'Yeowww!', price: 6.99,
    description: 'Organic catnip-filled cigar-shaped toy, made from durable cotton canvas built to survive rough play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3905737-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.7, reviewCount: 6789, inStock: true, tags: ['catnip', 'organic', 'canvas', 'durable']
  },
  {
    id: 'cst-022', name: 'Petstages Tower of Tracks with Mirror Ball', slug: 'petstages-tower-tracks-mirror-ball',
    brand: 'Petstages', price: 13.99,
    description: 'Spinning track toy featuring a reflective mirror ball that adds a flash of light to play sessions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3665585-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.2, reviewCount: 987, inStock: true, tags: ['track', 'mirror-ball', 'spinning', 'sensory']
  },
  {
    id: 'cst-023', name: 'KONG Wubba Cat Toy with Catnip', slug: 'kong-wubba-cat-toy-catnip',
    brand: 'KONG', price: 5.99,
    description: 'Crinkly tail toy filled with catnip, designed for tossing, batting, and chasing.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3905770-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 4321, inStock: true, tags: ['catnip', 'crinkle', 'toss', 'chase']
  },
  {
    id: 'cst-024', name: 'SmartyKat Here Kitty Wand Toy', slug: 'smartykat-here-kitty-wand-toy',
    brand: 'SmartyKat', price: 6.99,
    description: 'Lightweight wand toy with a feather and ribbon attachment for quick, engaging play sessions.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3665593-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.1, reviewCount: 1234, inStock: true, tags: ['wand', 'feather', 'ribbon', 'lightweight']
  },
  {
    id: 'cst-025', name: 'Catit Play Pinata Treat Dispensing Toy', slug: 'catit-play-pinata-treat-dispensing',
    brand: 'Catit', price: 9.99,
    description: 'Hanging pinata-style toy that dispenses treats as your cat bats and swats it around.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2402046-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.2, reviewCount: 1098, inStock: true, tags: ['treat-dispenser', 'hanging', 'pinata', 'interactive']
  },
  {
    id: 'cst-026', name: 'Trixie Catnip Cushion Scratch Toy', slug: 'trixie-catnip-cushion-scratch-toy',
    brand: 'Trixie', price: 11.99, originalPrice: 14.99,
    description: 'Soft cushion-shaped toy combining catnip filling with a corrugated cardboard scratch pad.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3665471-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 765, inStock: true, badge: 'Sale', tags: ['catnip', 'cushion', 'scratch-pad', '2-in-1']
  },
  {
    id: 'cst-027', name: 'GoCat Teaser Wand Refill Pack', slug: 'gocat-teaser-wand-refill-pack',
    brand: 'GoCat', price: 7.99,
    description: 'Replacement feather and ribbon attachments compatible with most standard wand toys.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/350273-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.0, reviewCount: 543, inStock: true, tags: ['wand-refill', 'feather', 'ribbon', 'replacement']
  },
  {
    id: 'cst-028', name: 'Hepper Cat Tunnel Toy with Crinkle Walls', slug: 'hepper-cat-tunnel-crinkle-walls',
    brand: 'Hepper', price: 27.99,
    description: 'Premium fabric tunnel with reinforced crinkle walls and two peek holes for ambush play.',
    longDescription: 'Built with heavy-duty fabric that holds its shape better than typical pop-up tunnels, this toy features double-layered crinkle walls that produce an enticing sound. Two side peek holes let cats spy on each other or pounce from hiding.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4691259-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 654, inStock: true, badge: 'Premium', tags: ['tunnel', 'crinkle', 'premium', 'durable']
  },
  {
    id: 'cst-029', name: 'Frisco Plush Donut Cat Toy with Catnip', slug: 'frisco-plush-donut-toy-catnip',
    brand: 'Frisco', price: 4.99,
    description: 'Soft plush donut-shaped toy stuffed with catnip, sized perfectly for carrying and kicking.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/37311-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 2345, inStock: true, tags: ['plush', 'catnip', 'donut', 'kick-toy']
  },
  {
    id: 'cst-030', name: 'PetSafe FroliCat Bolt Interactive Laser', slug: 'petsafe-frolicat-bolt-interactive-laser',
    brand: 'PetSafe', price: 22.99,
    description: 'Automatic laser device that projects random patterns across floors and walls for solo play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2179420-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.2, reviewCount: 1987, inStock: true, tags: ['laser', 'automatic', 'interactive', 'solo-play']
  },
  {
    id: 'cst-031', name: 'Ethical Pet Skinneeez Stuffing-Free Plush Toy', slug: 'ethical-pet-skinneeez-stuffing-free',
    brand: 'Ethical Pet', price: 8.99,
    description: 'Stuffing-free plush toy with a built-in squeaker, designed to mimic the feel of real prey.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3528214-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.1, reviewCount: 876, inStock: true, tags: ['plush', 'stuffing-free', 'squeaker', 'prey-like']
  },
  {
    id: 'cst-032', name: 'Petstages Buzzy Bee Catnip Toy', slug: 'petstages-buzzy-bee-catnip-toy',
    brand: 'Petstages', price: 5.99,
    description: 'Bee-shaped catnip toy with crinkly wings that add an extra sensory element to play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3093396-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.0, reviewCount: 432, inStock: false, tags: ['catnip', 'crinkle', 'bee', 'sensory']
  },
  {
    id: 'cst-033', name: 'Cat Dancer Products Mouse Twirler Toy', slug: 'cat-dancer-mouse-twirler-toy',
    brand: 'Cat Dancer', price: 6.99,
    description: 'Spring-mounted mouse toy that wobbles and spins when batted, mounted on a weighted base.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2312091-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.2, reviewCount: 1098, inStock: true, tags: ['mouse', 'spring', 'wobble', 'weighted-base']
  },
  {
    id: 'cst-034', name: 'KONG Active Cat Tunnel with Ball Track', slug: 'kong-active-cat-tunnel-ball-track',
    brand: 'KONG', price: 23.99, originalPrice: 28.99,
    description: 'Combination tunnel and ball track toy that provides both hiding spots and chase activity in one piece.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/332852-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 1543, inStock: true, badge: 'Sale', tags: ['tunnel', 'ball-track', 'combo', 'active-play']
  },
  {
    id: 'cst-035', name: 'Yaheetech Electronic Flopping Fish Cat Toy', slug: 'yaheetech-electronic-flopping-fish-toy',
    brand: 'Yaheetech', price: 13.99,
    description: 'Realistic flopping fish toy that wiggles when touched, powered by USB-rechargeable battery.',
    longDescription: 'This lifelike fish toy moves and flops realistically when your cat paws or bites it, simulating the motion of a real fish out of water. The USB-rechargeable battery and washable plush cover make it convenient for repeated use.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3979357-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 3210, inStock: true, badge: 'New', tags: ['electronic', 'fish', 'rechargeable', 'realistic']
  },
  {
    id: 'cst-036', name: 'Whisker City Crinkle Ball Toy 6-Pack', slug: 'whisker-city-crinkle-ball-6-pack',
    brand: 'Whisker City', price: 4.99,
    description: 'Six lightweight crinkle balls in assorted colors, perfect for batting across hardwood floors.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2312139-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.1, reviewCount: 1654, inStock: true, tags: ['crinkle', 'ball', '6-pack', 'budget']
  },
  {
    id: 'cst-037', name: 'Bergan Star Chaser Laser Cat Toy', slug: 'bergan-star-chaser-laser-toy',
    brand: 'Bergan', price: 9.99,
    description: 'Handheld laser pointer with a star-shaped lens attachment for varied light patterns.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3763249-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.0, reviewCount: 765, inStock: true, tags: ['laser', 'handheld', 'star-pattern', 'budget']
  },
  {
    id: 'cst-038', name: 'Trixie Junior Activity Fun Board Toy', slug: 'trixie-junior-activity-fun-board',
    brand: 'Trixie', price: 18.99,
    description: 'Multi-activity board with balls, a scratch pad, and dangling toys designed for kittens.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/2312235-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 1109, inStock: true, tags: ['kitten', 'activity-board', 'multi-toy', 'scratch-pad']
  },
  {
    id: 'cst-039', name: 'GoCat Wand Toy with Mouse and Feather Combo', slug: 'gocat-wand-toy-mouse-feather-combo',
    brand: 'GoCat', price: 10.99,
    description: 'Two-in-one wand toy combining a plush mouse and feather attachment for varied play styles.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3905711-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 1432, inStock: true, tags: ['wand', 'mouse', 'feather', '2-in-1']
  },
  {
    id: 'cst-040', name: 'Catit Groom and Play Brush Ball Toy', slug: 'catit-groom-play-brush-ball-toy',
    brand: 'Catit', price: 7.99,
    description: 'Textured ball toy that doubles as a self-grooming brush as your cat rolls and chews on it.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3905657-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.2, reviewCount: 654, inStock: true, tags: ['grooming', 'ball', 'textured', '2-in-1']
  },
  {
    id: 'cst-041', name: 'Petmate Jackson Galaxy Air Wand Cat Toy', slug: 'petmate-jackson-galaxy-air-wand',
    brand: 'Petmate', price: 11.99, originalPrice: 14.99,
    description: 'Designer wand toy with a feather and bell attachment, designed in collaboration with a celebrity cat behaviorist.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3864349-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.4, reviewCount: 2109, inStock: true, badge: 'Sale', tags: ['wand', 'designer', 'feather', 'bell']
  },
  {
    id: 'cst-042', name: 'Furhaven Plush Squeaky Mouse Toy Set', slug: 'furhaven-plush-squeaky-mouse-set',
    brand: 'Furhaven', price: 8.99,
    description: 'Set of three plush mice with built-in squeakers and a soft, durable outer fabric.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/4559928-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.1, reviewCount: 543, inStock: true, tags: ['plush', 'squeaky', 'mouse', 'set']
  },
  {
    id: 'cst-043', name: 'Necoichi Kuritto Round Catnip Toy', slug: 'necoichi-kuritto-round-catnip-toy',
    brand: 'Necoichi', price: 6.99,
    description: 'Round, palm-sized catnip toy with a textured surface designed for kicking and bunny-kicking play.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3357136-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.5, reviewCount: 1876, inStock: true, tags: ['catnip', 'round', 'kick-toy', 'textured']
  },
  {
    id: 'cst-044', name: 'On2Pets Window-Mounted Bird Feeder Toy', slug: 'on2pets-window-mounted-bird-feeder-toy',
    brand: 'On2Pets', price: 17.99,
    description: 'Suction-mounted window feeder that attracts birds outside, giving indoor cats hours of watching entertainment.',
    longDescription: 'Mount this feeder to any window to draw birds and squirrels close, turning your windowsill into a live entertainment channel for your cat. The clear acrylic construction offers an unobstructed view, and the feeder refills easily from outside.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/3905729-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.3, reviewCount: 987, inStock: true, badge: 'New', tags: ['window-mounted', 'bird-watching', 'suction', 'entertainment']
  },
  {
    id: 'cst-045', name: 'Petstages Premium Cat Activity Center with Track and Catnip Mouse', slug: 'petstages-premium-activity-center-track-mouse',
    brand: 'Petstages', price: 21.99, originalPrice: 26.99,
    description: 'All-in-one activity center combining a ball track, a catnip mouse, and a sisal scratch pad.',
    longDescription: 'This premium activity center brings together three popular play styles in a single sturdy base: a circular ball track for chasing, a hanging catnip-filled mouse for biting and kicking, and an integrated sisal pad for scratching.',
    image: 'https://assets.petco.com/petco/image/upload/e_trim/c_lpad,ar_1,f_auto,q_auto:low,w_800,dpr_1,e_sharpen/dpr_auto/1257170-center-1',
    category: 'cat', type: 'supplies', subcategory: 'toys',
    rating: 4.6, reviewCount: 2456, inStock: true, badge: 'Sale', tags: ['activity-center', 'ball-track', 'catnip', 'scratch-pad']
  }
];

import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- Biryani ---
  {
    id: 'b1',
    name: 'Special Chicken Biryani',
    description: 'Fragrant basmati rice cooked with marinated chicken, premium saffron, and authentic J K special spices in traditional dum style.',
    price: 290,
    rating: 4.8,
    category: 'Biryani',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Chicken Fry Piece Biryani',
    description: 'Perfectly spiced basmati rice topped with crispy, juicy deep-fried chicken pieces spiced with house masala.',
    price: 280,
    rating: 4.7,
    category: 'Biryani',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'b3',
    name: 'Mutton Dum Biryani',
    description: 'Slow-cooked, melt-in-the-mouth tender mutton pieces layered with premium basmati rice, caramelised onions, and fresh mint.',
    price: 380,
    rating: 4.9,
    category: 'Biryani',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'b4',
    name: 'Prawns Biryani',
    description: 'Exquisite coastal prawns cooked in a rich blend of masalas and layered with fragrant basmati rice.',
    price: 320,
    rating: 4.6,
    category: 'Biryani',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'b5',
    name: 'Special Veg Biryani',
    description: 'An aromatic medley of garden-fresh vegetables cooked with basmati rice and enriched with light spices, nuts, and raisins.',
    price: 220,
    rating: 4.5,
    category: 'Biryani',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop'
  },

  // --- Fried Rice ---
  {
    id: 'fr1',
    name: 'Special Chicken Fried Rice',
    description: 'Wok-tossed premium rice with tender seasoned chicken, eggs, crunchy veggies, and signature J K sauces.',
    price: 260,
    rating: 4.7,
    category: 'Fried Rice',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603133872878-685f5888c391?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'fr2',
    name: 'Chicken Fried Rice',
    description: 'Stir-fried rice loaded with juicy chicken bits, eggs, scallions, and standard aromatic Asian spices.',
    price: 240,
    rating: 4.6,
    category: 'Fried Rice',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fr3',
    name: 'Veg Fried Rice',
    description: 'Authentic Chinese-style stir-fried rice loaded with crunchy carrots, peas, beans, and fresh spring onions.',
    price: 190,
    rating: 4.3,
    category: 'Fried Rice',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fr4',
    name: 'Mixed Fried Rice',
    description: 'A grand combinations of chicken, prawns, mutton, eggs, and garden-fresh vegetables stir-fried in high flame.',
    price: 270,
    rating: 4.8,
    category: 'Fried Rice',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'fr5',
    name: 'Egg Fried Rice',
    description: 'Simple and comforting stir-fried rice cooked with fluffy scrambled eggs, green peas, and subtle soy sauce.',
    price: 210,
    rating: 4.4,
    category: 'Fried Rice',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop'
  },

  // --- Starters ---
  {
    id: 's1',
    name: 'Chicken 65',
    description: 'A spicy, deep-fried chicken appetizer loaded with curry leaves, green chilies, and a rich blend of South Indian spices.',
    price: 250,
    rating: 4.8,
    category: 'Starters',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 's2',
    name: 'Chicken 555',
    description: 'Crispy finger-sized chicken strips marinated, deep-fried, and tossed in an exquisite, creamy herb sauce with garlic.',
    price: 260,
    rating: 4.7,
    category: 'Starters',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 's3',
    name: 'Dragon Chicken',
    description: 'Sweet and spicy Indo-Chinese chicken chunks wok-tossed with cashews, bell peppers, and signature hot chili paste.',
    price: 270,
    rating: 4.8,
    category: 'Starters',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 's4',
    name: 'Chicken Lollipop',
    description: 'Frenzied chicken drumettes shaped into lollipops, coated in a spicy red batter, deep-fried, and served with hot garlic dip.',
    price: 260,
    rating: 4.6,
    category: 'Starters',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 's5',
    name: 'Paneer 65',
    description: 'Crispy fried cottage cheese cubes tossed in a yoghurt-based hot chili paste, tempered with mustard seeds and curry leaves.',
    price: 210,
    rating: 4.5,
    category: 'Starters',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop'
  },

  // --- Main Course ---
  {
    id: 'mc1',
    name: 'Butter Chicken',
    description: 'Tender tandoori chicken pieces simmered in a luscious, rich, buttery tomato gravy with fresh cream.',
    price: 310,
    rating: 4.8,
    category: 'Main Course',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'mc2',
    name: 'Andhra Chicken Curry',
    description: 'A traditional spicy bone-in chicken curry cooked in an authentic home-style coconut and ginger-garlic gravy.',
    price: 280,
    rating: 4.6,
    category: 'Main Course',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mc3',
    name: 'Paneer Butter Masala',
    description: 'Soft cottage cheese cubes cooked in a mild, sweet, and creamy tomato and cashew-nut paste based gravy.',
    price: 240,
    rating: 4.7,
    category: 'Main Course',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'mc4',
    name: 'Mushroom Kadai Curry',
    description: 'Fresh button mushrooms sautéed in kadai spices with thick bell pepper, tomato, and onion-infused semi-gravy.',
    price: 230,
    rating: 4.4,
    category: 'Main Course',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1518110168045-57517c527e02?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'mc5',
    name: 'Mutton Rogan Josh',
    description: 'A classic Kashmiri slow-cooked goat curry flavored with dried ginger, fennel seeds, and high-quality Kashmiri chilies.',
    price: 390,
    rating: 4.9,
    category: 'Main Course',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop'
  },

  // --- Seafood ---
  {
    id: 'sf1',
    name: 'Apollo Fish',
    description: 'Spiced boneless fish fillets deep-fried to crisp perfection and tossed with yogurt, curry leaves, and green chilies.',
    price: 290,
    rating: 4.8,
    category: 'Seafood',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'sf2',
    name: 'Crispy Fish Fry',
    description: 'Local fresh catches marinated in rich local ginger-garlic-chili spice paste and shallow-fried till super crispy.',
    price: 270,
    rating: 4.6,
    category: 'Seafood',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd86d1a6ba?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sf3',
    name: 'Prawns Fry',
    description: 'Juicy, plump prawns roasted with lots of caramelized onions, green chilies, and a thick aromatic tawa spice mix.',
    price: 310,
    rating: 4.7,
    category: 'Seafood',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1559737607-231665a31941?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sf4',
    name: 'Prawns 65',
    description: 'Irresistibly spicy, deep-fried coastal prawns marinated in our house 65 chili marinade, served hot with lemons.',
    price: 310,
    rating: 4.8,
    category: 'Seafood',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1567121938596-9d980ea457ec?q=80&w=600&auto=format&fit=crop'
  },

  // --- Soups ---
  {
    id: 'sp1',
    name: 'Chicken Manchow Soup',
    description: 'A spicy, tangy dark soup enriched with chopped chicken, egg drop, soy sauce, and served with crispy dry noodles.',
    price: 150,
    rating: 4.5,
    category: 'Soups',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sp2',
    name: 'Chicken Hot & Sour Soup',
    description: 'A robust, velvety broth packed with chicken shreds, mushrooms, soy, pepper, vinegar, and fresh coriander.',
    price: 150,
    rating: 4.4,
    category: 'Soups',
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1625220194771-7ebedd0b4a27?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sp3',
    name: 'Veg Sweet Corn Soup',
    description: 'A clean, thick, comforting soup filled with sweet corn kernels, finely minced carrots, celery, and light white pepper.',
    price: 130,
    rating: 4.3,
    category: 'Soups',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sp4',
    name: 'Mushroom Cream Soup',
    description: 'A luscious, velvety, rich pureed button mushroom soup finished with white wine essence and dairy cream.',
    price: 130,
    rating: 4.3,
    category: 'Soups',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592165-8be74e62d6ea?q=80&w=600&auto=format&fit=crop'
  },

  // --- Indian Bread ---
  {
    id: 'ib1',
    name: 'Butter Naan',
    description: 'Super fluffy, leavened flatbread freshly baked in tandoor clay oven and glazed generously with pure melted butter.',
    price: 50,
    rating: 4.6,
    category: 'Indian Bread',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ib2',
    name: 'Garlic Naan',
    description: 'Clay-oven baked flatbread seasoned with finely minced fresh aromatic garlic, coriander leaves, and glazed butter.',
    price: 60,
    rating: 4.7,
    category: 'Indian Bread',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'ib3',
    name: 'Plain Naan',
    description: 'Traditional leavened oven-baked flatbread, crispy on the outer surface and soft inside.',
    price: 40,
    rating: 4.2,
    category: 'Indian Bread',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ib4',
    name: 'Tandoori Roti',
    description: 'Authentic stone-ground whole wheat flatbread rolled flat and baked along walls of roaring clay tandoors.',
    price: 35,
    rating: 4.3,
    category: 'Indian Bread',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Aravind Swamy',
    rating: 5,
    comment: 'The Special Chicken Biryani here is unparalleled! Absolute perfection in terms of spice balance, aromatic rice, and succulent chicken. Highly recommend J K Restaurant!',
    date: '3 days ago'
  },
  {
    id: 'r2',
    name: 'Priyanka Reddy',
    rating: 5,
    comment: 'Butter Chicken and Garlic Naan were heavenly. The online order was super smooth, and the WhatsApp confirmation is so convenient. Five stars for the service!',
    date: '1 week ago'
  },
  {
    id: 'r3',
    name: 'Karthik Rao',
    rating: 5,
    comment: 'Amazing Apollo Fish! Super crispy, spiced just right. The design of the web app is top-notch too, matches the premium dine-in experience of J K.',
    date: '2 weeks ago'
  },
  {
    id: 'r4',
    name: 'Sneha Mehta',
    rating: 4,
    comment: 'Very fresh and clean food. Veg Fried Rice is fragrant and loaded with veggies. Quick response on WhatsApp order placements.',
    date: '3 weeks ago'
  }
];

export type Language = 'en' | 'te';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    'nav.viewCart': 'View Cart',
    'nav.navigation': 'Navigation',
    'nav.tagline': 'Dine In • Takeaway • Delivery',

    // Hero
    'hero.welcome': 'Welcome to',
    'hero.desc': 'Where Quality Meets Great Taste. Freshly prepared Biryanis, crispy Starters, authentic Seafood and rich North Indian delicacies served with supreme love.',
    'hero.searchPlaceholder': 'Search Biryani, Tandoori...',
    'hero.search': 'Search',
    'hero.featured': 'Featured:',
    'hero.exploreMenu': 'Explore Menu',
    'hero.bookTable': 'Book Table',

    // Menu / General Categories
    'cat.all': 'All',
    'cat.biryani': 'Biryani',
    'cat.friedRice': 'Fried Rice',
    'cat.starters': 'Starters',
    'cat.mainCourse': 'Main Course',
    'cat.seafood': 'Seafood',
    'cat.soups': 'Soups',
    'cat.indianBread': 'Indian Bread',

    // Menu page / section
    'menu.title': 'Our Premium',
    'menu.titleAccent': 'Culinary Menu',
    'menu.subtitle': 'Each dish is handcrafted with premium fresh ingredients and authentic Indian spices.',
    'menu.searchPlaceholder': 'Search for your favorite dish...',
    'menu.noResults': 'No dishes found matching your search.',
    'menu.all': 'All Dishes',
    'menu.vegOnly': 'Veg Only',
    'menu.nonVegOnly': 'Non-Veg Only',
    'menu.addToCart': 'Add to Cart',
    'menu.added': 'Added',

    // Buttons & Labels
    'btn.addToCart': 'Add to Cart',
    'btn.orderNow': 'Order Now',
    'btn.explore': 'Explore',
    'btn.submit': 'Submit',
    'btn.cancel': 'Cancel',
    'btn.checkout': 'Checkout',

    // Cart / Drawer
    'cart.title': 'Your Food Basket',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Add delicious dishes from our menu to start your order!',
    'cart.subtotal': 'Subtotal',
    'cart.delivery': 'Delivery Pack Fee',
    'cart.free': 'FREE',
    'cart.freeDeliveryMsg': 'You unlocked Free Delivery! 🎉',
    'cart.deliveryNotice': 'Add ₹{amount} more for FREE delivery!',
    'cart.grandTotal': 'Grand Total',
    'cart.placeOrder': 'Proceed to Order',

    // Popular / Featured
    'popular.title': 'Most Popular',
    'popular.titleAccent': 'Customer Favorites',
    'popular.subtitle': 'Our highly requested signature dishes that keep our patrons coming back for more.',

    // Today's special
    'special.badge': "Today's Special",
    'special.title': 'Signature Hyderabadi Biryani',
    'special.desc': 'Prepared by our head chef using ancient secret royal recipes, long-grain aged basmati rice, tender premium meat, and pristine saffron layers.',
    'special.tagline': 'Order now and experience authentic culinary royalty!',

    // Why choose us
    'why.title': 'Why Dine with',
    'why.titleAccent': 'Ganesh JK',
    'why.subtitle': 'We combine authentic culinary art, fresh farm ingredients, and top-tier hygiene guidelines.',
    'why.card1.title': 'Hygienic Cooking',
    'why.card1.desc': 'Our kitchen passes strict daily sanitation, with double-washed ingredients.',
    'why.card2.title': 'Premium Ingredients',
    'why.card2.desc': 'We only use raw cold-pressed oils, pure butter, and premium aged basmati rice.',
    'why.card3.title': 'Lightning Fast Delivery',
    'why.card3.desc': 'Our hot thermal-insulated delivery packs ensure food reaches you piping hot.',

    // Reviews
    'reviews.title': 'What Our',
    'reviews.titleAccent': 'Patrons Say',
    'reviews.subtitle': 'Read genuine feedback from food lovers who dined with us.',

    // Checkout Section
    'checkout.title': 'Complete Your',
    'checkout.titleAccent': 'WhatsApp Order',
    'checkout.subtitle': 'Provide your delivery address below. Your order details will be sent directly to our kitchen via WhatsApp.',
    'checkout.form.heading': 'Delivery Information',
    'checkout.form.fullName': 'Full Name',
    'checkout.form.phone': 'WhatsApp Phone Number',
    'checkout.form.house': 'House / Flat / Plot No.',
    'checkout.form.street': 'Street / Landmark Info',
    'checkout.form.area': 'Area / Locality',
    'checkout.form.city': 'City',
    'checkout.form.pin': 'PIN Code',
    'checkout.form.notes': 'Special Instructions (e.g. Make it extra spicy!)',
    'checkout.form.payment': 'Payment Method',
    'checkout.payment.cod': 'Cash on Delivery (COD)',
    'checkout.payment.upi': 'UPI / Online Scan on Delivery',
    'checkout.summary.title': 'Your Order Summary',
    'checkout.summary.items': 'Items',
    'checkout.send': 'Send Order via WhatsApp',
    'checkout.sending': 'Preparing WhatsApp Message...',

    // About Section
    'about.title': 'Our Culinary',
    'about.titleAccent': 'Heritage & Love',
    'about.subtitle': 'Discover the legacy of taste and hospitality at Ganesh JK Restaurant.',
    'about.p1': 'Since our inception, Ganesh JK Restaurant has been the cornerstone of authentic Indian food culture in the region. We started with a simple belief: that great food is made with pure ingredients, authentic traditional spice blends, and unmatched customer service.',
    'about.p2': 'Our chefs bring decades of culinary mastery, crafting perfect slow-cooked Dum Biryanis, rich Butter Chicken, and exquisite local Andhra seafood specialties.',

    // Contact Section
    'contact.title': 'Get In',
    'contact.titleAccent': 'Touch With Us',
    'contact.subtitle': 'Have a question, feedback, or want to book a table? Contact us directly.',
    'contact.info': 'Contact Details',
    'contact.address': 'Main Road, Near Metro Station, Hyderabad, Telangana - 500001',
    'contact.phone': '+91 98765 43210',
    'contact.email': 'info@ganeshjkrestaurant.com',
    'contact.hours': 'Timings: 11:00 AM - 11:00 PM (All Days)',
    'contact.form.title': 'Send Us a Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you! Your message has been sent successfully.',

    // Footer
    'footer.desc': 'Serving authentic Hyderabadi Biryanis, rich tandooris, and delicious Indian main courses with pristine quality and supreme care.',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved.'
  },
  te: {
    // Navbar
    'nav.home': 'హోమ్',
    'nav.menu': 'మెనూ',
    'nav.about': 'మా గురించి',
    'nav.gallery': 'గ్యాలరీ',
    'nav.contact': 'సంప్రదించండి',
    'nav.cart': 'కార్ట్',
    'nav.viewCart': 'కార్ట్ చూడండి',
    'nav.navigation': 'నావిగేషన్',
    'nav.tagline': 'డైన్ ఇన్ • టేక్ అవే • డెలివరీ',

    // Hero
    'hero.welcome': 'స్వాగతం',
    'hero.desc': 'నాణ్యతతో కూడిన అద్భుతమైన రుచి. తాజా బిర్యానీలు, క్రిస్పీ స్టార్టర్స్, నోరూరించే సీఫుడ్ మరియు రుచికరమైన ఉత్తర భారత వంటకాలు మీ కోసం ఎంతో ప్రేమతో వడ్డించబడును.',
    'hero.searchPlaceholder': 'బిర్యానీ, తందూరి కోసం వెతకండి...',
    'hero.search': 'వెతకండి',
    'hero.featured': 'ప్రసిద్ధమైనవి:',
    'hero.exploreMenu': 'మెనూ చూడండి',
    'hero.bookTable': 'టేబుల్ బుక్ చేయండి',

    // Menu / General Categories
    'cat.all': 'అన్నీ',
    'cat.biryani': 'బిర్యానీ',
    'cat.friedRice': 'ఫ్రైడ్ రైస్',
    'cat.starters': 'స్టార్టర్స్',
    'cat.mainCourse': 'మెయిన్ కోర్స్',
    'cat.seafood': 'సీఫుడ్',
    'cat.soups': 'సూప్స్',
    'cat.indianBread': 'రోటీలు / నాన్',

    // Menu page / section
    'menu.title': 'మా ప్రత్యేక',
    'menu.titleAccent': 'రుచికరమైన మెనూ',
    'menu.subtitle': 'ప్రతి వంటకం తాజా పదార్థాలు మరియు అసలైన భారతీయ మసాలాలతో చేతితో ప్రత్యేకంగా తయారు చేయబడుతుంది.',
    'menu.searchPlaceholder': 'మీకు ఇష్టమైన వంటకం కోసం వెతకండి...',
    'menu.noResults': 'మీరు వెతికిన వంటకం లభించలేదు.',
    'menu.all': 'అన్ని వంటకాలు',
    'menu.vegOnly': 'శాకాహారం మాత్రమే',
    'menu.nonVegOnly': 'మాంసాహారం మాత్రమే',
    'menu.addToCart': 'కార్ట్‌కు జోడించు',
    'menu.added': 'జోడించబడింది',

    // Buttons & Labels
    'btn.addToCart': 'కార్ట్‌కు జోడించు',
    'btn.orderNow': 'ఇప్పుడే ఆర్డర్ చేయండి',
    'btn.explore': 'చూడండి',
    'btn.submit': 'సమర్పించు',
    'btn.cancel': 'రద్దు చేయి',
    'btn.checkout': 'ఆర్డర్ చేయండి',

    // Cart / Drawer
    'cart.title': 'మీ ఆహార కార్ట్',
    'cart.empty': 'మీ కార్ట్ ఖాళీగా ఉంది',
    'cart.emptyDesc': 'ఆర్డర్ ప్రారంభించడానికి మా మెనూ నుండి రుచికరమైన వంటకాలను జోడించండి!',
    'cart.subtotal': 'మొత్తం',
    'cart.delivery': 'డెలివరీ ప్యాక్ ఛార్జీ',
    'cart.free': 'ఉచితం',
    'cart.freeDeliveryMsg': 'మీకు ఉచిత డెలివరీ లభించింది! 🎉',
    'cart.deliveryNotice': 'ఉచిత డెలివరీ కోసం మరో ₹{amount} విలువైన వస్తువులను జోడించండి!',
    'cart.grandTotal': 'మొత్తం బిల్లు',
    'cart.placeOrder': 'ఆర్డర్ చేయడానికి ముందుకు సాగండి',

    // Popular / Featured
    'popular.title': 'అత్యంత ప్రజాదరణ',
    'popular.titleAccent': 'కస్టమర్ల ఫేవరెట్స్',
    'popular.subtitle': 'మా కస్టమర్లు మళ్లీ మళ్లీ ఆర్డర్ చేసే మా సిగ్నేచర్ వంటకాలు.',

    // Today's special
    'special.badge': "నేటి ప్రత్యేక వంటకం",
    'special.title': 'సిగ్నేచర్ హైదరాబాదీ బిర్యానీ',
    'special.desc': 'మా హెడ్ చెఫ్ పూర్వీకుల రహస్య వంటకాలతో, మేలురకం బాస్మతి బియ్యం, మెత్తని మాంసం మరియు కుంకుమపువ్వు పొరలతో తయారు చేసిన అద్భుతమైన బిర్యానీ.',
    'special.tagline': 'ఇప్పుడే ఆర్డర్ చేయండి మరియు నిజమైన రాజభోగ రుచిని అనుభవించండి!',

    // Why choose us
    'why.title': 'ఎందుకు',
    'why.titleAccent': 'గణేష్ జేకే?',
    'why.subtitle': 'మేము సాంప్రదాయ వంటకళ, తాజా పదార్థాలు మరియు అత్యున్నత పరిశుభ్రతను పాటిస్తాము.',
    'why.card1.title': 'పరిశుభ్రమైన వంటకం',
    'why.card1.desc': 'మా వంటగది రోజువారీ కఠినమైన పరిశుభ్రత పరీక్షలను దాటుతుంది.',
    'why.card2.title': 'ఉత్తమమైన పదార్థాలు',
    'why.card2.desc': 'మేము కోల్డ్-ప్రెస్డ్ ఆయిల్స్, స్వచ్ఛమైన నెయ్యి మరియు మేలురకం బాస్మతి బియ్యాన్ని మాత్రమే ఉపయోగిస్తాము.',
    'why.card3.title': 'మెరుపు వేగంతో డెలివరీ',
    'why.card3.desc': 'మా హాట్ థర్మల్ ప్యాక్‌లు ఆహారం మీకు వేడిగా అందేలా చూస్తాయి.',

    // Reviews
    'reviews.title': 'కస్టమర్లు',
    'reviews.titleAccent': 'ఏమంటున్నారు?',
    'reviews.subtitle': 'మా వద్ద భోజనం చేసిన ఆహార ప్రియుల నిజమైన అభిప్రాయాలు.',

    // Checkout Section
    'checkout.title': 'మీ వాట్సాప్',
    'checkout.titleAccent': 'ఆర్డర్ పూర్తి చేయండి',
    'checkout.subtitle': 'కింద మీ డెలివరీ చిరునామాను నమోదు చేయండి. మీ ఆర్డర్ వివరాలు నేరుగా వాట్సాప్ ద్వారా మా వంటగదికి పంపబడతాయి.',
    'checkout.form.heading': 'డెలివరీ సమాచారం',
    'checkout.form.fullName': 'పూర్తి పేరు',
    'checkout.form.phone': 'వాట్సాప్ మొబైల్ నంబర్',
    'checkout.form.house': 'ఇంటి నంబరు',
    'checkout.form.street': 'వీధి / ల్యాండ్‌మార్క్ వివరాలు',
    'checkout.form.area': 'ప్రాంతం / ఏరియా',
    'checkout.form.city': 'నగరం',
    'checkout.form.pin': 'పిన్ కోడ్',
    'checkout.form.notes': 'ప్రత్యేక సూచనలు (ఉదా. మసాలా ఎక్కువగా వేయండి!)',
    'checkout.form.payment': 'చెల్లింపు పద్ధతి',
    'checkout.payment.cod': 'క్యాష్ ఆన్ డెలివరీ (COD)',
    'checkout.payment.upi': 'డెలివరీ సమయంలో UPI / ఆన్‌లైన్ స్కాన్',
    'checkout.summary.title': 'మీ ఆర్డర్ సారాంశం',
    'checkout.summary.items': 'ఐటమ్స్',
    'checkout.send': 'వాట్సాప్ ద్వారా ఆర్డర్ పంపండి',
    'checkout.sending': 'వాట్సాప్ సందేశాన్ని సిద్ధం చేస్తోంది...',

    // About Section
    'about.title': 'మా వంట',
    'about.titleAccent': 'వారసత్వం & ప్రేమ',
    'about.subtitle': 'గణేష్ జేకే రెస్టారెంట్‌లో రుచి మరియు ఆతిథ్యం యొక్క వారసత్వాన్ని కనుగొనండి.',
    'about.p1': 'ప్రారంభం నుండి, గణేష్ జేకే రెస్టారెంట్ ఈ ప్రాంతంలో నిజమైన భారతీయ ఆహార సంస్కృతికి కేరాఫ్ అడ్రస్‌గా నిలిచింది. గొప్ప ఆహారం స్వచ్ఛమైన పదార్థాలు, అసలైన సాంప్రదాయ మసాలాలు మరియు అద్భుతమైన కస్టమర్ సేవతో మాత్రమే తయారవుతుందని మేము నమ్ముతాము.',
    'about.p2': 'మా చెఫ్‌లు దశాబ్దాల వంట నైపుణ్యంతో, ఖచ్చితమైన దమ్ బిర్యానీలు, రుచికరమైన బట్టర్ చికెన్ మరియు అద్భుతమైన ఆంధ్రా సీఫుడ్ స్పెషాలిటీలను తయారు చేస్తారు.',

    // Contact Section
    'contact.title': 'మమ్మల్ని',
    'contact.titleAccent': 'సంప్రదించండి',
    'contact.subtitle': 'మీకు ఏవైనా ప్రశ్నలు ఉన్నాయా లేదా టేబుల్ బుక్ చేయాలనుకుంటున్నారా? నేరుగా మమ్మల్ని సంప్రదించండి.',
    'contact.info': 'సంప్రదింపు వివరాలు',
    'contact.address': 'మెయిన్ రోడ్, మెట్రో స్టేషన్ సమీపంలో, హైదరాబాద్, తెలంగాణ - 500001',
    'contact.phone': '+91 98765 43210',
    'contact.email': 'info@ganeshjkrestaurant.com',
    'contact.hours': 'సమయం: ఉదయం 11:00 నుండి రాత్రి 11:00 వరకు (అన్ని రోజులు)',
    'contact.form.title': 'మాకు సందేశం పంపండి',
    'contact.form.send': 'సందేశం పంపండి',
    'contact.form.sending': 'పంపుతోంది...',
    'contact.form.success': 'ధన్యవాదాలు! మీ సందేశం విజయవంతంగా పంపబడింది.',

    // Footer
    'footer.desc': 'అసలైన హైదరాబాదీ బిర్యానీలు, రుచికరమైన తందూరీలు మరియు అద్భుతమైన భారతీయ వంటకాలను అత్యున్నత నాణ్యతతో మరియు శ్రద్ధతో అందిస్తోంది.',
    'footer.quickLinks': 'త్వరిత లింకులు',
    'footer.rights': 'అన్ని హక్కులు ప్రత్యేకించబడినవి.'
  }
};

export const DISH_TRANSLATIONS: Record<Language, Record<string, { name: string; desc: string }>> = {
  en: {}, // fallback to native item values
  te: {
    'Special Chicken Biryani': {
      name: 'స్పెషల్ చికెన్ బిర్యానీ',
      desc: 'సాంప్రదాయ దమ్ పద్ధతిలో తయారు చేసిన స్పెషల్ చికెన్ బిర్యానీ, సుగంధ భరితమైన బాస్మతి రైస్ మరియు జేకే ప్రత్యేక మసాలాలు.'
    },
    'Chicken Fry Piece Biryani': {
      name: 'చికెన్ ఫ్రై పీస్ బిర్యానీ',
      desc: 'క్రిస్పీ, జ్యుసీ డీప్-ఫ్రైడ్ చికెన్ ముక్కలు మరియు సుగంధ భరితమైన బాస్మతి బిర్యానీ రైస్ కలయిక.'
    },
    'Mutton Dum Biryani': {
      name: 'మటన్ దమ్ బిర్యానీ',
      desc: 'నెమ్మదిగా ఉడికించిన మెత్తని మటన్ ముక్కలు, ప్రీమియం బాస్మతి బియ్యం మరియు కరకరలాడే ఉల్లిపాయలతో అద్భుతమైన రుచి.'
    },
    'Prawns Biryani': {
      name: 'రొయ్యల బిర్యానీ',
      desc: 'రుచికరమైన సముద్రపు రొయ్యలు, ఘుమఘుమలాడే మసాలాలతో తయారు చేసిన ప్రత్యేక బిర్యానీ.'
    },
    'Special Veg Biryani': {
      name: 'స్పెషల్ వెజ్ బిర్యానీ',
      desc: 'తాజా తోట కూరగాయలు, బాస్మతి బియ్యం, జీడిపప్పు మరియు కిస్‌మిస్‌లతో అలంకరించబడిన రుచికరమైన బిర్యానీ.'
    },
    'Special Chicken Fried Rice': {
      name: 'స్పెషల్ చికెన్ ఫ్రైడ్ రైస్',
      desc: 'కోడి గుడ్డు, కూరగాయలు మరియు జేకే స్పెషల్ సాస్‌లతో హై ఫ్లేమ్‌పై తయారుచేసిన చికెన్ ఫ్రైడ్ రైస్.'
    },
    'Chicken Fried Rice': {
      name: 'చికెన్ ఫ్రైడ్ రైస్',
      desc: 'రుచికరమైన చికెన్ ముక్కలు, గుడ్డు మరియు తాజా స్ప్రింగ్ ఆనియన్స్‌తో చేసిన చైనీస్ స్టైల్ ఫ్రైడ్ రైస్.'
    },
    'Veg Fried Rice': {
      name: 'వెజ్ ఫ్రైడ్ రైస్',
      desc: 'తాజా క్యారెట్, బఠానీలు, బీన్స్ మరియు స్ప్రింగ్ ఆనియన్స్‌తో చేసిన రుచికరమైన వెజిటబుల్ ఫ్రైడ్ రైస్.'
    },
    'Mixed Fried Rice': {
      name: 'మిక్స్‌డ్ ఫ్రైడ్ రైస్',
      desc: 'చికెన్, రొయ్యలు, మటన్ మరియు కోడిగుడ్డు కలయికతో తయారుచేసిన అద్భుతమైన ఫ్రైడ్ రైస్.'
    },
    'Egg Fried Rice': {
      name: 'ఎగ్ ఫ్రైడ్ రైస్',
      desc: 'మెత్తని స్క్రాంబుల్డ్ గుడ్లు మరియు సున్నితమైన సోయా సాస్‌తో చేసిన సౌకర్యవంతమైన ఫ్రైడ్ రైస్.'
    },
    'Chicken 65': {
      name: 'చికెన్ 65',
      desc: 'కరివేపాకు, పచ్చిమిర్చి మరియు దక్షిణ భారత మసాలాలతో చేసిన స్పైసీ డీప్-ఫ్రైడ్ చికెన్ ఆకలి పుట్టించే వంటకం.'
    },
    'Chicken 555': {
      name: 'చికెన్ 555',
      desc: 'క్రిస్పీ చికెన్ స్ట్రిప్స్, వెల్లుల్లి మరియు క్రీమీ హెర్బ్ సాస్‌తో టాస్ చేసిన రుచికరమైన స్టార్టర్.'
    },
    'Dragon Chicken': {
      name: 'డ్రాగన్ చికెన్',
      desc: 'తీపి మరియు కారం కలిసిన చికెన్ ముక్కలు, జీడిపప్పు మరియు బెల్ పెప్పర్స్‌తో కలిపిన చైనీస్ స్టార్టర్.'
    },
    'Chicken Lollipop': {
      name: 'చికెన్ లాలిపాప్',
      desc: 'చికెన్ వింగ్స్‌ను లాలిపాప్ ఆకారంలో చేసి, మసాలా పిండితో డీప్-ఫ్రై చేసిన అద్భుతమైన స్టార్టర్.'
    },
    'Paneer 65': {
      name: 'పనీర్ 65',
      desc: 'క్రిస్పీగా వేయించిన పనీర్ ముక్కలు, పెరుగు మరియు ఎండుమిర్చి తాలింపుతో చేసిన టేస్టీ వెజ్ స్టార్టర్.'
    },
    'Butter Chicken': {
      name: 'బట్టర్ చికెన్',
      desc: 'మెత్తని తందూరి చికెన్ ముక్కలు, వెన్న మరియు టమోటా గ్రేవీతో చేసిన అద్భుతమైన కర్రీ.'
    },
    'Andhra Chicken Curry': {
      name: 'ఆంధ్రా చికెన్ కర్రీ',
      desc: 'సాంప్రదాయ కొబ్బరి మరియు అల్లం-వెల్లుల్లి పేస్ట్‌తో చేసిన ఘాటైన ఆంధ్రా స్టైల్ కోడికూర.'
    },
    'Paneer Butter Masala': {
      name: 'పనీర్ బట్టర్ మసాలా',
      desc: 'మెత్తని పనీర్ ముక్కలు, వెన్న మరియు టమోటా-జీడిపప్పు క్రీమీ గ్రేవీతో చేసిన నోరూరించే వంటకం.'
    },
    'Mushroom Kadai Curry': {
      name: 'మష్రూమ్ కడాయ్ కర్రీ',
      desc: 'తాజా పుట్టగొడుగులు, క్యాప్సికమ్ మరియు కడాయ్ మసాలాలతో చేసిన టేస్టీ కర్రీ.'
    },
    'Mutton Rogan Josh': {
      name: 'మటన్ రోగన్ జోష్',
      desc: 'కశ్మీరీ శైలిలో అల్లం, సోంపు మరియు కాశ్మీరీ మిర్చితో నెమ్మదిగా ఉడికించిన మటన్ కర్రీ.'
    },
    'Apollo Fish': {
      name: 'అపోలో ఫిష్',
      desc: 'ముళ్లు లేని చేప ముక్కలను క్రిస్పీగా వేయించి, పెరుగు మరియు పచ్చిమిర్చితో టాస్ చేసిన ప్రసిద్ధ వంటకం.'
    },
    'Crispy Fish Fry': {
      name: 'క్రిస్పీ ఫిష్ ఫ్రై',
      desc: 'తాజా చేపలను అల్లం-వెల్లుల్లి మరియు కారం పేస్ట్‌తో కలిపి కరకరలాడేలా వేయించిన ఫిష్ ఫ్రై.'
    },
    'Prawns Fry': {
      name: 'రొయ్యల వేపుడు (ఫ్రై)',
      desc: 'ఉల్లిపాయలు, పచ్చిమిర్చి మరియు ఘుమఘుమలాడే తవా మసాలాలతో వేయించిన జ్యుసీ రొయ్యలు.'
    },
    'Prawns 65': {
      name: 'రొయ్యలు 65',
      desc: 'మా ప్రత్యేక 65 మసాలాలో నానబెట్టి, క్రిస్పీగా డీప్-ఫ్రై చేసిన రొయ్యలు.'
    },
    'Chicken Manchow Soup': {
      name: 'చికెన్ మంచో సూప్',
      desc: 'చికెన్ ముక్కలు, సోయా సాస్ మరియు క్రిస్పీ నూడుల్స్‌తో చేసిన ఘాటైన సూప్.'
    },
    'Chicken Hot & Sour Soup': {
      name: 'చికెన్ హాట్ & సోర్ సూప్',
      desc: 'చికెన్, పుట్టగొడుగులు, మిరియాల పొడి మరియు వెనిగర్‌తో చేసిన టేస్టీ వెల్వెట్ సూప్.'
    },
    'Veg Sweet Corn Soup': {
      name: 'వెజ్ స్వీట్ కార్న్ సూప్',
      desc: 'తీపి మొక్కజొన్న గింజలు మరియు సన్నగా తరిగిన కూరగాయలతో చేసిన ఆరోగ్యకరమైన సూప్.'
    },
    'Mushroom Cream Soup': {
      name: 'మష్రూమ్ క్రీమ్ సూప్',
      desc: 'పుట్టగొడుగులు మరియు ఫ్రెష్ క్రీమ్‌తో చేసిన చిక్కని రుచికరమైన వెజ్ సూప్.'
    },
    'Butter Naan': {
      name: 'బట్టర్ నాన్',
      desc: 'మట్టి తందూర్‌లో కాల్చి, స్వచ్ఛమైన వెన్న రాసిన దూది లాంటి మెత్తని నాన్.'
    },
    'Garlic Naan': {
      name: 'గార్లిక్ నాన్',
      desc: 'సన్నగా తరిగిన వెల్లుల్లి ముక్కలు మరియు వెన్నతో చేసిన రుచికరమైన తందూరి నాన్.'
    },
    'Plain Naan': {
      name: 'ప్లెయిన్ నాన్',
      desc: 'సాంప్రదాయ పద్ధతిలో తందూరి బొగ్గులపై కాల్చిన మెత్తని రోటీ.'
    },
    'Tandoori Roti': {
      name: 'తందూరి రోటీ',
      desc: 'గోధుమ పిండితో చేసి, తందూరి గోడలపై కాల్చిన సంప్రదాయ రోటీ.'
    }
  }
};

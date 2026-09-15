// ---------------------------------------------------------------------------
// Central data file for La Villetta Pizza & Pasta.
// Keep business facts here so content can be updated without touching
// component markup. Nothing in this file is invented — figures not yet
// confirmed by the restaurant (e.g. hours) are left explicitly blank.
// ---------------------------------------------------------------------------

export const contact = {
  name: 'La Villetta Pizza & Pasta',
  locationName: 'Jefferson Valley Mall',
  entranceNote: 'Mall – Exclusive Entrance – Route 6 Side',
  addressLine1: '650 Lee Blvd',
  addressLine2: 'Yorktown Heights, NY 10598',
  phoneDisplay: '(914) 526-0394',
  phoneHref: 'tel:+19145260394',
  orderUrl: 'https://lavillettapizzapasta.com/',
  facebookUrl: 'https://www.facebook.com/LaVillettaPizzeria',
  // Google Maps directions target: "Mall - Exclusive Entrance - Rt 6 Side, 650 Lee Blvd, Yorktown Heights, NY 10598"
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Mall - Exclusive Entrance - Rt 6 Side, 650 Lee Blvd, Yorktown Heights, NY 10598'),
  // Embeddable map pointed at the same destination, for the Visit section panel.
  mapEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Mall - Exclusive Entrance - Rt 6 Side, 650 Lee Blvd, Yorktown Heights, NY 10598') +
    '&output=embed',
  priceRange: '$10–$20 per person',
};

export const ratings = {
  google: { value: 4.2, count: 50, label: 'Google' },
  facebook: { value: 4.8, count: 44, label: 'Facebook' },
};

// ---------------------------------------------------------------------------
// Hours are intentionally left unset. This object is the single place to
// enter real operating hours once confirmed by the restaurant — every day
// left as null will fall back to "Please call to confirm today's hours."
// Format: { open: '11:00 AM', close: '9:00 PM' } or null if unconfirmed.
// ---------------------------------------------------------------------------
export const hours = {
  monday: null,
  tuesday: null,
  wednesday: null,
  thursday: null,
  friday: null,
  saturday: null,
  sunday: null,
};

export const hoursOrder = [
  ['monday', 'Monday'],
  ['tuesday', 'Tuesday'],
  ['wednesday', 'Wednesday'],
  ['thursday', 'Thursday'],
  ['friday', 'Friday'],
  ['saturday', 'Saturday'],
  ['sunday', 'Sunday'],
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#favorites', label: 'Favorites' },
  { href: '#catering', label: 'Catering' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
];

// Featured categories — descriptive only. No prices or invented ingredients.
export const featuredCategories = [
  {
    id: 'pizza',
    name: 'New York-Style Pizza',
    description: 'Hand-stretched pies with a crisp, golden crust, baked to order.',
    image: '/images/placeholders/category-pizza.svg',
    // PLACEHOLDER: replace with a real photo of a La Villetta pizza pie or slice.
    alt: 'Close-up of a New York-style pizza with a crisp, golden crust',
  },
  {
    id: 'pasta',
    name: 'Pasta Favorites',
    description: 'Classic Italian pasta dishes made in the comforting, homestyle tradition.',
    image: '/images/placeholders/category-pasta.svg',
    // PLACEHOLDER: replace with a real photo of a La Villetta pasta dish.
    alt: 'Bowl of pasta tossed in a rich tomato sauce',
  },
  {
    id: 'parmigiana',
    name: 'Chicken & Shrimp Parmigiana',
    description: 'Breaded and baked under melted cheese, served the traditional way.',
    image: '/images/placeholders/category-parmigiana.svg',
    // PLACEHOLDER: replace with a real photo of La Villetta's chicken or shrimp parmigiana.
    alt: 'Chicken parmigiana topped with melted cheese and sauce',
  },
  {
    id: 'heroes',
    name: 'Italian Heroes',
    description: 'Generously packed hot and cold heroes on fresh-baked bread.',
    image: '/images/placeholders/category-heroes.svg',
    // PLACEHOLDER: replace with a real photo of a La Villetta hero sandwich.
    alt: 'Italian hero sandwich sliced in half on a wooden board',
  },
  {
    id: 'salads',
    name: 'Fresh Salads',
    description: 'Crisp, made-to-order salads that pair well with any entrée.',
    image: '/images/placeholders/category-salads.svg',
    // PLACEHOLDER: replace with a real photo of a La Villetta salad.
    alt: 'Fresh garden salad in a bowl',
  },
  {
    id: 'desserts',
    name: 'Homemade-Style Desserts',
    description: 'A sweet finish in the classic Italian tradition.',
    image: '/images/placeholders/category-desserts.svg',
    // PLACEHOLDER: replace with a real photo of a La Villetta dessert.
    alt: 'Classic Italian dessert plated for serving',
  },
];

export const introFeatures = [
  'Traditional Italian Cuisine',
  'Generous Portions',
  'Affordable Family Dining',
  'Vegetarian and Gluten-Free Options',
];

export const experienceFeatures = [
  { label: 'Outdoor Seating' },
  { label: 'Live Music' },
  { label: 'Family-Friendly Dining' },
  { label: 'Vegan and Vegetarian Options' },
  { label: 'Gluten-Free Options' },
  { label: 'Takeout and Delivery' },
];

export const trustRow = [
  { label: '4.2 ★ on Google' },
  { label: 'Family-Friendly' },
  { label: 'Lunch & Dinner' },
  { label: 'Catering Available' },
];

export const reviews = [
  {
    quote: 'Excellent food with good portions and friendly, prompt service.',
    author: 'D. Schuck',
  },
  {
    quote: 'Pizza slice crust was crispy and not burnt—perfectly cooked.',
    author: 'Robert Pasacrita',
  },
  {
    quote: 'Ordered two heroes to go: shrimp parm and chicken parm.',
    author: 'Marc Saffer',
  },
];

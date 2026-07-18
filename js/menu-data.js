/**
 * TomYumBar — Menu Data
 * ------------------------------------------------------------------
 * PLACEHOLDER CONTENT — Round 1.
 * This structure is intentionally the ONLY place menu content lives.
 * To load the real TomYumBar menu, replace the MENU_DATA array below
 * (category id/name/items) — layout, cards and navigation in
 * js/main.js + css/styles.css do not need to change.
 *
 * Item shape:
 * { name, description, price, image (optional path) }
 * ------------------------------------------------------------------
 */

const MENU_DATA = [
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Edamame", description: "Steamed soybeans, sea salt.", price: "28,000" },
      { name: "Vietnamese Spring Rolls", description: "Shrimp, herbs, rice paper, nuoc cham.", price: "45,000" },
      { name: "Crispy Rock Shrimp", description: "Spicy mayo, scallion, sesame.", price: "68,000" },
      { name: "Gyoza", description: "Pan-seared pork dumplings, ponzu.", price: "52,000" },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      { name: "Tom Yum Kung", description: "River prawn, lemongrass, chili oil, lime.", price: "62,000" },
      { name: "Tom Kha Gai", description: "Coconut broth, chicken, galangal.", price: "58,000" },
      { name: "Miso Soup", description: "Tofu, wakame, scallion.", price: "35,000" },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      { name: "Som Tum", description: "Green papaya, peanut, chili lime dressing.", price: "48,000" },
      { name: "Wagyu Beef Salad", description: "Seared wagyu, herbs, tamarind dressing.", price: "89,000" },
    ],
  },
  {
    id: "sushi",
    name: "Sushi & Sashimi",
    items: [
      { name: "Nigiri Selection", description: "Salmon, tuna, tiger prawn, seared eel.", price: "125,000", image: "assets/images/dish-sushi-platter.jpg" },
      { name: "Salmon Sashimi", description: "8 pcs, hand cut.", price: "98,000" },
      { name: "Tuna Sashimi", description: "8 pcs, hand cut.", price: "105,000" },
    ],
  },
  {
    id: "rolls",
    name: "Signature Rolls",
    items: [
      { name: "TomYumBar Roll", description: "Spicy tuna, avocado, crispy garlic, tobiko.", price: "95,000" },
      { name: "Dragon Roll", description: "Eel, cucumber, avocado, unagi glaze.", price: "110,000" },
      { name: "Rainbow Roll", description: "California base, assorted sashimi.", price: "115,000" },
    ],
  },
  {
    id: "wok-mains",
    name: "Wok & Mains",
    items: [
      { name: "Black Pepper Wagyu", description: "Wok-charred wagyu, scallion, roasted garlic.", price: "175,000" },
      { name: "Pad Kra Pao", description: "Minced chicken, holy basil, fried egg.", price: "72,000" },
      { name: "Sweet & Sour Duck", description: "Crispy duck, pineapple, bell pepper.", price: "128,000" },
      { name: "Kung Pao Chicken", description: "Peanuts, dried chili, scallion.", price: "78,000" },
    ],
  },
  {
    id: "rice-noodles",
    name: "Rice & Noodles",
    items: [
      { name: "Pad Thai", description: "Rice noodles, shrimp, tamarind, peanut.", price: "68,000" },
      { name: "Nasi Goreng", description: "Wok-fried rice, chicken satay, fried egg.", price: "62,000" },
      { name: "Khao Soi", description: "Curried egg noodles, pickled mustard greens.", price: "70,000" },
    ],
  },
  {
    id: "dim-sum",
    name: "Dim Sum",
    items: [
      { name: "Har Gow", description: "Steamed shrimp dumplings.", price: "58,000" },
      { name: "Char Siu Bao", description: "Steamed bun, BBQ pork.", price: "45,000" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Mango Sticky Rice", description: "Coconut sticky rice, ripe mango.", price: "45,000" },
      { name: "Matcha Tiramisu", description: "Layered mascarpone, matcha, cocoa.", price: "48,000" },
      { name: "Black Sesame Ice Cream", description: "House-made, sesame tuile.", price: "38,000" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Lychee Mojito (Mocktail)", description: "Lychee, mint, lime, soda.", price: "42,000" },
      { name: "Thai Iced Tea", description: "Black tea, condensed milk.", price: "32,000" },
      { name: "Jasmine Tea", description: "Pot for two.", price: "28,000" },
    ],
  },
];

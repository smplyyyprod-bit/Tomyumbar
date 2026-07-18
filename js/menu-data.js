/**
 * TomYumBar — Menu Data
 * ------------------------------------------------------------------
 * PLACEHOLDER CONTENT — Round 1.
 * This structure is intentionally the ONLY place menu content lives.
 * To load the real TomYumBar menu, replace the MENU_DATA array below
 * (category id/name/items) — layout, cards and navigation in
 * js/main.js + css/styles.css do not need to change.
 *
 * Bilingual: name / description are { ru, en } objects — js/main.js
 * picks the active language when rendering. Keep both languages in
 * sync when editing; price and image are language-independent.
 *
 * Item shape:
 * { name: {ru, en}, description: {ru, en}, price, image (optional path) }
 * ------------------------------------------------------------------
 */

const MENU_DATA = [
  {
    id: "starters",
    name: { ru: "Закуски", en: "Starters" },
    items: [
      { name: { ru: "Эдамаме", en: "Edamame" }, description: { ru: "Соевые бобы на пару, морская соль.", en: "Steamed soybeans, sea salt." }, price: "28,000" },
      { name: { ru: "Вьетнамские спринг-роллы", en: "Vietnamese Spring Rolls" }, description: { ru: "Креветки, зелень, рисовая бумага, соус нуок-чам.", en: "Shrimp, herbs, rice paper, nuoc cham." }, price: "45,000" },
      { name: { ru: "Хрустящие креветки", en: "Crispy Rock Shrimp" }, description: { ru: "Острый майонез, зелёный лук, кунжут.", en: "Spicy mayo, scallion, sesame." }, price: "68,000" },
      { name: { ru: "Гёдза", en: "Gyoza" }, description: { ru: "Обжаренные пельмени со свининой, соус понзу.", en: "Pan-seared pork dumplings, ponzu." }, price: "52,000" },
    ],
  },
  {
    id: "soups",
    name: { ru: "Супы", en: "Soups" },
    items: [
      { name: { ru: "Том Ям Кунг", en: "Tom Yum Kung" }, description: { ru: "Речная креветка, лемонграсс, чили-масло, лайм.", en: "River prawn, lemongrass, chili oil, lime." }, price: "62,000" },
      { name: { ru: "Том Кха Гай", en: "Tom Kha Gai" }, description: { ru: "Кокосовый бульон, курица, галангал.", en: "Coconut broth, chicken, galangal." }, price: "58,000" },
      { name: { ru: "Мисо-суп", en: "Miso Soup" }, description: { ru: "Тофу, вакаме, зелёный лук.", en: "Tofu, wakame, scallion." }, price: "35,000" },
    ],
  },
  {
    id: "salads",
    name: { ru: "Салаты", en: "Salads" },
    items: [
      { name: { ru: "Сом Там", en: "Som Tum" }, description: { ru: "Зелёная папайя, арахис, заправка чили-лайм.", en: "Green papaya, peanut, chili lime dressing." }, price: "48,000" },
      { name: { ru: "Салат с вагю", en: "Wagyu Beef Salad" }, description: { ru: "Обжаренная говядина вагю, зелень, тамариндовая заправка.", en: "Seared wagyu, herbs, tamarind dressing." }, price: "89,000" },
    ],
  },
  {
    id: "sushi",
    name: { ru: "Суши и сашими", en: "Sushi & Sashimi" },
    items: [
      { name: { ru: "Ассорти нигири", en: "Nigiri Selection" }, description: { ru: "Лосось, тунец, тигровая креветка, обжаренный угорь.", en: "Salmon, tuna, tiger prawn, seared eel." }, price: "125,000", image: "assets/images/dish-sushi-platter.jpg" },
      { name: { ru: "Сашими из лосося", en: "Salmon Sashimi" }, description: { ru: "8 шт., ручная нарезка.", en: "8 pcs, hand cut." }, price: "98,000" },
      { name: { ru: "Сашими из тунца", en: "Tuna Sashimi" }, description: { ru: "8 шт., ручная нарезка.", en: "8 pcs, hand cut." }, price: "105,000" },
    ],
  },
  {
    id: "rolls",
    name: { ru: "Фирменные роллы", en: "Signature Rolls" },
    items: [
      { name: { ru: "Ролл TomYumBar", en: "TomYumBar Roll" }, description: { ru: "Острый тунец, авокадо, хрустящий чеснок, тобико.", en: "Spicy tuna, avocado, crispy garlic, tobiko." }, price: "95,000" },
      { name: { ru: "Ролл Дракон", en: "Dragon Roll" }, description: { ru: "Угорь, огурец, авокадо, соус унаги.", en: "Eel, cucumber, avocado, unagi glaze." }, price: "110,000" },
      { name: { ru: "Ролл Радуга", en: "Rainbow Roll" }, description: { ru: "База «Калифорния», ассорти сашими.", en: "California base, assorted sashimi." }, price: "115,000" },
    ],
  },
  {
    id: "wok-mains",
    name: { ru: "Вок и горячее", en: "Wok & Mains" },
    items: [
      { name: { ru: "Вагю с чёрным перцем", en: "Black Pepper Wagyu" }, description: { ru: "Обжаренное на воке вагю, зелёный лук, жареный чеснок.", en: "Wok-charred wagyu, scallion, roasted garlic." }, price: "175,000" },
      { name: { ru: "Пад Крапао", en: "Pad Kra Pao" }, description: { ru: "Рубленая курица, тайский базилик, яичница.", en: "Minced chicken, holy basil, fried egg." }, price: "72,000" },
      { name: { ru: "Утка в кисло-сладком соусе", en: "Sweet & Sour Duck" }, description: { ru: "Хрустящая утка, ананас, болгарский перец.", en: "Crispy duck, pineapple, bell pepper." }, price: "128,000" },
      { name: { ru: "Курица Кунг Пао", en: "Kung Pao Chicken" }, description: { ru: "Арахис, сушёный чили, зелёный лук.", en: "Peanuts, dried chili, scallion." }, price: "78,000" },
    ],
  },
  {
    id: "rice-noodles",
    name: { ru: "Рис и лапша", en: "Rice & Noodles" },
    items: [
      { name: { ru: "Пад Тай", en: "Pad Thai" }, description: { ru: "Рисовая лапша, креветки, тамаринд, арахис.", en: "Rice noodles, shrimp, tamarind, peanut." }, price: "68,000" },
      { name: { ru: "Наси Горенг", en: "Nasi Goreng" }, description: { ru: "Жареный рис, куриный сатай, яичница.", en: "Wok-fried rice, chicken satay, fried egg." }, price: "62,000" },
      { name: { ru: "Као Сой", en: "Khao Soi" }, description: { ru: "Яичная лапша карри, маринованная горчичная зелень.", en: "Curried egg noodles, pickled mustard greens." }, price: "70,000" },
    ],
  },
  {
    id: "dim-sum",
    name: { ru: "Дим-сам", en: "Dim Sum" },
    items: [
      { name: { ru: "Хар Гоу", en: "Har Gow" }, description: { ru: "Паровые пельмени с креветками.", en: "Steamed shrimp dumplings." }, price: "58,000" },
      { name: { ru: "Ча Сиу Бао", en: "Char Siu Bao" }, description: { ru: "Паровая булочка со свининой барбекю.", en: "Steamed bun, BBQ pork." }, price: "45,000" },
    ],
  },
  {
    id: "desserts",
    name: { ru: "Десерты", en: "Desserts" },
    items: [
      { name: { ru: "Манго с клейким рисом", en: "Mango Sticky Rice" }, description: { ru: "Клейкий рис на кокосовом молоке, спелое манго.", en: "Coconut sticky rice, ripe mango." }, price: "45,000" },
      { name: { ru: "Тирамису матча", en: "Matcha Tiramisu" }, description: { ru: "Маскарпоне слоями, матча, какао.", en: "Layered mascarpone, matcha, cocoa." }, price: "48,000" },
      { name: { ru: "Мороженое с чёрным кунжутом", en: "Black Sesame Ice Cream" }, description: { ru: "Домашнее, кунжутная тюиль.", en: "House-made, sesame tuile." }, price: "38,000" },
    ],
  },
  {
    id: "drinks",
    name: { ru: "Напитки", en: "Drinks" },
    items: [
      { name: { ru: "Мохито с личи (безалкогольный)", en: "Lychee Mojito (Mocktail)" }, description: { ru: "Личи, мята, лайм, содовая.", en: "Lychee, mint, lime, soda." }, price: "42,000" },
      { name: { ru: "Тайский чай со льдом", en: "Thai Iced Tea" }, description: { ru: "Чёрный чай, сгущённое молоко.", en: "Black tea, condensed milk." }, price: "32,000" },
      { name: { ru: "Жасминовый чай", en: "Jasmine Tea" }, description: { ru: "Чайник на двоих.", en: "Pot for two." }, price: "28,000" },
    ],
  },
];

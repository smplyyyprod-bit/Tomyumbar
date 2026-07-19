/**
 * TomYumBar — Menu Data
 * ------------------------------------------------------------------
 * PLACEHOLDER CONTENT. This structure is intentionally the ONLY place
 * menu content lives. To load the real TomYumBar menu, replace the
 * MENU_DATA array below (category order/items) — layout, cards, modal
 * and search in js/main.js + css/styles.css do not need to change.
 *
 * Category order below is the client's required order — do not
 * resort alphabetically or by any other logic.
 *
 * Item shape (all bilingual fields are { ru, en }):
 * {
 *   name, description,        // description = short, shown on the card
 *   fullDescription,          // longer copy shown in the detail modal
 *   ingredients,               // comma-separated string
 *   allergens,                 // comma-separated string, or null
 *   price,                     // string, no currency (currency is a
 *                               // separate i18n label appended at render)
 *   weight,                    // { ru, en } — unit differs by language
 *   tags,                      // e.g. ["spicy"], ["vegetarian"], []
 *   image,                     // optional path; omitted = placeholder tile
 *   nutrition,                  // optional { calories, protein, fat, carbs }
 *                               // — plain numbers (kcal / grams), the modal
 *                               // localizes the labels/units per language
 * }
 * ------------------------------------------------------------------
 */

const MENU_DATA = [
  {
    id: "chef",
    name: { ru: "Меню от шефа", en: "Chef's Menu" },
    // Real dishes from menu.tomyumbar.com (added from client-supplied
    // screenshots since the site itself is network-blocked from this dev
    // environment — see note at the top of this file). More to follow as
    // the client sends them; until then the remaining 27 categories below
    // are still placeholder data.
    items: [
      {
        name: { ru: "Сырный рамэн «Double Cheese»", en: "Double Cheese Ramen" },
        description: { ru: "Сырный суп с курицей, яйцом всмятку и кунжутом.", en: "Cheesy chicken ramen with a soft-boiled egg and sesame." },
        fullDescription: {
          ru: "Авторская версия знаменитого японского супа от нашего шефа. Изысканное сочетание двух видов сыров — чеддер и моцарелла — с добавлением курицы и оригинальных специй. Подаётся с яйцом всмятку, зелёным луком и кунжутом. На выбор классический, либо острый.",
          en: "The chef's own take on the famous Japanese soup. An elegant blend of two cheeses — cheddar and mozzarella — with chicken and the kitchen's own spice mix. Served with a soft-boiled egg, scallion and sesame. Choose classic or spicy.",
        },
        ingredients: { ru: "Куриный бульон, сыр чеддер, сыр моцарелла, курица, лапша, яйцо всмятку, зелёный лук, кунжут", en: "Chicken broth, cheddar, mozzarella, chicken, noodles, soft-boiled egg, scallion, sesame" },
        allergens: { ru: "Молочные продукты, глютен, яйцо", en: "Dairy, gluten, egg" },
        price: "88,000",
        weight: { ru: "500 г", en: "500 g" },
        tags: [],
        nutrition: { calories: 1037, protein: 54, fat: 49, carbs: 93 },
        image: "assets/images/dish-chef-cheese-ramen.jpg",
      },
      {
        name: { ru: "Кукси", en: "Kuksi" },
        description: { ru: "Холодный корейский суп с говядиной, острый и с кислинкой.", en: "Cold Korean beef noodle soup, spicy with a tangy edge." },
        fullDescription: {
          ru: "Кукси — это холодный суп, который является блюдом корейской кухни. У него многогранный вкус с «огоньком» красного перца и задорной кислинкой.",
          en: "Kuksi is a cold soup from Korean cuisine — a many-layered flavor with the heat of red pepper and a playful tang.",
        },
        ingredients: { ru: "Говядина, лапша мочёнка, бульон кукси-мури, маринованный огурец, маринованная капуста, яичный блинчик, томаты, кунжут", en: "Beef, mochenka noodles, kuksi-muri broth, pickled cucumber, pickled cabbage, egg crepe, tomatoes, sesame" },
        allergens: { ru: "Глютен, яйцо, соя", en: "Gluten, egg, soy" },
        price: "60,000",
        weight: { ru: "730 г", en: "730 g" },
        tags: ["spicy"],
        nutrition: { calories: 929, protein: 26, fat: 46, carbs: 101 },
        image: "assets/images/dish-chef-kuksi.jpg",
      },
      {
        name: { ru: "Oasis", en: "Oasis" },
        description: { ru: "Салат с креветками, манго и авокадо под цитрусовой заправкой.", en: "Shrimp salad with mango and avocado in a citrus dressing." },
        fullDescription: {
          ru: "Настоящая частичка оазиса, где микс зелени сочетается с яркостью фруктов и цитруса. Салат с креветками, манго, авокадо, болгарским перцем, помидорами черри и острой лимонной заправкой. Украшается арахисом.",
          en: "A true taste of an oasis, where a mix of greens meets the brightness of fruit and citrus. Shrimp, mango, avocado, bell pepper and cherry tomatoes in a sharp lemon dressing, finished with peanuts.",
        },
        ingredients: { ru: "Креветки, микс зелени, манго, авокадо, болгарский перец, томаты черри, лимонная заправка, арахис", en: "Shrimp, mixed greens, mango, avocado, bell pepper, cherry tomatoes, lemon dressing, peanuts" },
        allergens: { ru: "Морепродукты, орехи", en: "Shellfish, nuts" },
        price: "80,000",
        weight: { ru: "200 г", en: "200 g" },
        tags: [],
        nutrition: { calories: 388, protein: 15, fat: 28, carbs: 16 },
        image: "assets/images/dish-chef-oasis.jpg",
      },
      {
        name: { ru: "Татаки из тунца", en: "Tuna Tataki" },
        description: { ru: "Тунец в кунжуте на подушке из зелени, авокадо и эдамаме.", en: "Sesame-seared tuna over greens, avocado and edamame." },
        fullDescription: {
          ru: "Филе тунца, обжаренное в ароматных зёрнах кунжута, на подушке из свежей зелени, авокадо и бобов эдамаме под цитрусовым дрессингом с мёдом.",
          en: "Tuna fillet seared in fragrant sesame seeds, laid over fresh greens, avocado and edamame beans, finished with a citrus-honey dressing.",
        },
        ingredients: { ru: "Тунец, кунжут, микс зелени, авокадо, эдамаме, цитрусовый дрессинг, мёд", en: "Tuna, sesame, mixed greens, avocado, edamame, citrus dressing, honey" },
        allergens: { ru: "Рыба, кунжут, соя", en: "Fish, sesame, soy" },
        price: "268,000",
        weight: { ru: "220 г", en: "220 g" },
        tags: [],
        nutrition: { calories: 547, protein: 25, fat: 39, carbs: 16 },
        image: "assets/images/dish-chef-tuna-tataki.jpg",
      },
      {
        name: { ru: "Thai Beef", en: "Thai Beef" },
        description: { ru: "Говядина с болгарским перцем и тайским горошком в устричном соусе.", en: "Beef with bell peppers and Thai peas in oyster sauce." },
        fullDescription: {
          ru: "Яркое сочетание нежной говядины и микса болгарских перцев с сельдереем и тайским горошком в устричном соусе. Украшается кунжутом и зелёным луком.",
          en: "A bold pairing of tender beef and bell peppers with celery and Thai peas in oyster sauce, finished with sesame and scallion.",
        },
        ingredients: { ru: "Говядина, болгарский перец, сельдерей, тайский горошек, устричный соус, кунжут, зелёный лук", en: "Beef, bell pepper, celery, Thai peas, oyster sauce, sesame, scallion" },
        allergens: { ru: "Моллюски, соя", en: "Shellfish, soy" },
        price: "128,000",
        weight: { ru: "330 г", en: "330 g" },
        tags: [],
        nutrition: { calories: 544, protein: 25, fat: 39, carbs: 20 },
        image: "assets/images/dish-chef-thai-beef.jpg",
      },
      {
        name: { ru: "WOK с говядиной", en: "Beef Wok" },
        description: { ru: "Вок с лапшой соба, говядиной и шампиньонами в устричном соусе.", en: "Soba noodle wok with beef and mushrooms in oyster sauce." },
        fullDescription: {
          ru: "WOK с лапшой соба, нежнейшей говядиной, овощами и шампиньонами в устричном соусе.",
          en: "Soba noodles wok-tossed with tender beef, vegetables and mushrooms in oyster sauce.",
        },
        ingredients: { ru: "Лапша соба, говядина, овощи, шампиньоны, устричный соус", en: "Soba noodles, beef, vegetables, mushrooms, oyster sauce" },
        allergens: { ru: "Глютен, соя, моллюски", en: "Gluten, soy, shellfish" },
        price: "87,000",
        weight: { ru: "465 г", en: "465 g" },
        tags: [],
        nutrition: { calories: 599, protein: 24, fat: 34, carbs: 51 },
        image: "assets/images/dish-chef-wok-beef.jpg",
      },
      {
        name: { ru: "WOK с креветками", en: "Shrimp Wok" },
        description: { ru: "Вок с рисовой лапшой, креветками и грибами шиитаке в кисло-сладком соусе.", en: "Rice noodle wok with shrimp and shiitake in sweet and sour sauce." },
        fullDescription: {
          ru: "WOK с рисовой лапшой, сочными креветками в чесночной заправке, грибами шиитаке, помидорами черри в кисло-сладком соусе. Подаётся с сыром пармезан.",
          en: "Rice noodles with juicy shrimp in garlic dressing, shiitake mushrooms and cherry tomatoes in sweet and sour sauce, finished with parmesan.",
        },
        ingredients: { ru: "Рисовая лапша, креветки, чесночная заправка, грибы шиитаке, томаты черри, кисло-сладкий соус, сыр пармезан", en: "Rice noodles, shrimp, garlic dressing, shiitake mushrooms, cherry tomatoes, sweet and sour sauce, parmesan" },
        allergens: { ru: "Морепродукты, молочные продукты, глютен", en: "Shellfish, dairy, gluten" },
        price: "117,000",
        weight: { ru: "490 г", en: "490 g" },
        tags: [],
        nutrition: { calories: 1085, protein: 36, fat: 24, carbs: 179 },
        image: "assets/images/dish-chef-wok-shrimp.jpg",
      },
      {
        name: { ru: "WOK с курицей", en: "Chicken Wok" },
        description: { ru: "Вок с лапшой удон, курицей и овощами в соусе терияки.", en: "Udon noodle wok with chicken and vegetables in teriyaki sauce." },
        fullDescription: {
          ru: "WOK с лапшой удон, курицей и свежими овощами в соусе терияки.",
          en: "Udon noodles wok-tossed with chicken and fresh vegetables in teriyaki sauce.",
        },
        ingredients: { ru: "Лапша удон, курица, овощи, соус терияки", en: "Udon noodles, chicken, vegetables, teriyaki sauce" },
        allergens: { ru: "Глютен, соя", en: "Gluten, soy" },
        price: "48,000",
        weight: { ru: "435 г", en: "435 g" },
        tags: [],
        nutrition: { calories: 672, protein: 24, fat: 24, carbs: 85 },
        image: "assets/images/dish-chef-wok-chicken.jpg",
      },
      {
        name: { ru: "WOK с морепродуктами", en: "Seafood Wok" },
        description: { ru: "Вок с жареным рисом, морепродуктами и овощами в устричном соусе.", en: "Fried rice wok with seafood and vegetables in oyster sauce." },
        fullDescription: {
          ru: "WOK с жареным рисом, морепродуктами и свежими овощами в устричном соусе.",
          en: "Fried rice wok-tossed with seafood and fresh vegetables in oyster sauce.",
        },
        ingredients: { ru: "Жареный рис, морепродукты (креветки, мидии, кальмар), овощи, устричный соус", en: "Fried rice, seafood (shrimp, mussels, squid), vegetables, oyster sauce" },
        allergens: { ru: "Морепродукты, соя", en: "Shellfish, soy" },
        price: "109,000",
        weight: { ru: "430 г", en: "430 g" },
        tags: [],
        nutrition: { calories: 783, protein: 33, fat: 27, carbs: 99 },
        image: "assets/images/dish-chef-wok-seafood.jpg",
      },
      {
        name: { ru: "Харумаки с бараниной", en: "Lamb Harumaki" },
        description: { ru: "Хрустящие спринг-роллы с бараниной и соусом шрирача.", en: "Crispy spring rolls with lamb, served with sriracha sauce." },
        fullDescription: {
          ru: "Хрустящая закуска из баранины с добавлением устричного соуса, имбиря, чеснока, кинзы и уникальных специй в тонком спринг-тесте, обжаренная во фритюре. Подаётся с острым соусом шрирача.",
          en: "A crispy lamb appetizer with oyster sauce, ginger, garlic, cilantro and the kitchen's own spice blend, wrapped in thin spring roll pastry and deep-fried. Served with sriracha sauce.",
        },
        ingredients: { ru: "Баранина, спринг-тесто, устричный соус, имбирь, чеснок, кинза, специи, соус шрирача", en: "Lamb, spring roll pastry, oyster sauce, ginger, garlic, cilantro, spices, sriracha sauce" },
        allergens: { ru: "Глютен, соя, моллюски", en: "Gluten, soy, shellfish" },
        price: "68,000",
        weight: { ru: "110 г / 10 г соус", en: "110 g / 10 g sauce" },
        tags: [],
        nutrition: { calories: 358, protein: 11, fat: 29, carbs: 11 },
        image: "assets/images/dish-chef-harumaki-lamb.jpg",
      },
      {
        name: { ru: "Crispy", en: "Crispy" },
        description: { ru: "Хрустящий темпура-ролл с лососем терияки и угрём.", en: "Crispy tempura roll with teriyaki salmon and eel." },
        fullDescription: {
          ru: "Хрустящий темпура ролл с лососем терияки, сливочным сыром и огурцом, запечённый с шапочкой из угря и сырного соуса — это новое сочетание текстур и вкусов от нашего шефа. Поливается соусом унаги и украшается луком, обжаренным во фритюре.",
          en: "A crispy tempura roll with teriyaki salmon, cream cheese and cucumber, topped and baked with eel and a creamy cheese sauce — a new combination of textures and flavors from our chef. Finished with unagi sauce and crispy fried onion.",
        },
        ingredients: { ru: "Лосось терияки, сливочный сыр, огурец, темпура, угорь, сырный соус, соус унаги, жареный лук", en: "Teriyaki salmon, cream cheese, cucumber, tempura, eel, cheese sauce, unagi sauce, fried onion" },
        allergens: { ru: "Рыба, молочные продукты, глютен, соя", en: "Fish, dairy, gluten, soy" },
        price: "105,000",
        weight: { ru: "215 г", en: "215 g" },
        tags: [],
        nutrition: { calories: 855, protein: 19, fat: 45, carbs: 90 },
        image: "assets/images/dish-chef-crispy-roll.jpg",
      },
      {
        name: { ru: "Суши лосось", en: "Salmon Nigiri" },
        description: { ru: "Нигири с лососем на подушке риса.", en: "Nigiri with fresh salmon over pressed rice." },
        fullDescription: {
          ru: "Классическое нигири: ломтик свежего лосося на подушке из риса, подаётся с имбирём и васаби.",
          en: "A classic nigiri — a slice of fresh salmon over hand-pressed rice, served with pickled ginger and wasabi.",
        },
        ingredients: { ru: "Рис, лосось", en: "Rice, salmon" },
        allergens: { ru: "Рыба", en: "Fish" },
        price: "30,000",
        weight: { ru: "50 г", en: "50 g" },
        tags: [],
        nutrition: { calories: 75, protein: 4, fat: 1, carbs: 11 },
        image: "assets/images/dish-chef-sushi-salmon.jpg",
      },
      {
        name: { ru: "Суши угорь", en: "Eel Nigiri" },
        description: { ru: "Нигири с копчёным угрём унаги и соусом унаги.", en: "Nigiri with smoked eel and unagi sauce." },
        fullDescription: {
          ru: "Нигири с копчёным угрём унаги на подушке из риса, политое фирменным соусом унаги, украшенное ломтиком клубники.",
          en: "Nigiri with smoked unagi eel over hand-pressed rice, finished with our house unagi sauce and a slice of strawberry.",
        },
        ingredients: { ru: "Рис, угорь унаги, соус унаги, клубника", en: "Rice, unagi eel, unagi sauce, strawberry" },
        allergens: { ru: "Рыба, соя, глютен", en: "Fish, soy, gluten" },
        price: "32,000",
        weight: { ru: "60 г", en: "60 g" },
        tags: [],
        nutrition: { calories: 97, protein: 4, fat: 2, carbs: 13 },
        image: "assets/images/dish-chef-sushi-eel.jpg",
      },
      {
        name: { ru: "Суши креветка", en: "Shrimp Nigiri" },
        description: { ru: "Нигири с креветкой на подушке риса.", en: "Nigiri with shrimp over pressed rice." },
        fullDescription: {
          ru: "Нигири с отварной креветкой на подушке из риса, украшенное свежей зеленью.",
          en: "Nigiri with poached shrimp over hand-pressed rice, finished with fresh greens.",
        },
        ingredients: { ru: "Рис, креветка, зелень", en: "Rice, shrimp, greens" },
        allergens: { ru: "Морепродукты", en: "Shellfish" },
        price: "26,000",
        weight: { ru: "50 г", en: "50 g" },
        tags: [],
        nutrition: { calories: 71, protein: 4, fat: 0, carbs: 12 },
        image: "assets/images/dish-chef-sushi-shrimp.jpg",
      },
      {
        name: { ru: "Суши тунец", en: "Tuna Nigiri" },
        description: { ru: "Нигири с тунцом на подушке риса.", en: "Nigiri with fresh tuna over pressed rice." },
        fullDescription: {
          ru: "Нигири с ломтиком свежего тунца на подушке из риса, украшенное зелёным луком и лёгким соусом.",
          en: "Nigiri with a slice of fresh tuna over hand-pressed rice, finished with scallion and a light sauce.",
        },
        ingredients: { ru: "Рис, тунец, зелёный лук, соус", en: "Rice, tuna, scallion, sauce" },
        allergens: { ru: "Рыба", en: "Fish" },
        price: "58,000",
        weight: { ru: "50 г", en: "50 g" },
        tags: [],
        nutrition: { calories: 88, protein: 6, fat: 1, carbs: 11 },
        image: "assets/images/dish-chef-sushi-tuna.jpg",
      },
      {
        name: { ru: "Matcha Cloud", en: "Matcha Cloud" },
        description: { ru: "Сладкий ролл со сливочным сыром, клубникой, манго и киви.", en: "Sweet roll with cream cheese, strawberry, mango and kiwi." },
        fullDescription: {
          ru: "Нежный ролл в сочетании со сладким сыром, свежей клубникой, экзотическим манго и киви. Подаётся со сливочным кремом из матчи, украшается сублимированной малиной и дробленым фундуком.",
          en: "A delicate roll combining sweet cream cheese, fresh strawberry, exotic mango and kiwi. Served with a matcha cream, finished with freeze-dried raspberry and crushed hazelnut.",
        },
        ingredients: { ru: "Сливочный сыр, клубника, манго, киви, крем матча, сублимированная малина, фундук", en: "Cream cheese, strawberry, mango, kiwi, matcha cream, freeze-dried raspberry, hazelnut" },
        allergens: { ru: "Молочные продукты, орехи", en: "Dairy, nuts" },
        price: "65,000",
        weight: { ru: "190 г", en: "190 g" },
        tags: [],
        nutrition: { calories: 346, protein: 7, fat: 23, carbs: 24 },
        image: "assets/images/dish-chef-matcha-cloud.jpg",
      },
      {
        name: { ru: "Dark Orange Chocolate", en: "Dark Orange Chocolate" },
        description: { ru: "Шоколадный ролл с апельсином, клубникой и бананом.", en: "Chocolate roll with orange, strawberry and banana." },
        fullDescription: {
          ru: "Свежие и сочные фрукты — апельсин, клубника и банан в нежной основе из тёмного шоколада. Десерт панируется лепестками миндаля и подаётся в апельсиновом соусе.",
          en: "Fresh, juicy fruit — orange, strawberry and banana — in a delicate dark chocolate base. Coated in almond flakes and served in an orange sauce.",
        },
        ingredients: { ru: "Тёмный шоколад, апельсин, клубника, банан, миндальные лепестки, апельсиновый соус", en: "Dark chocolate, orange, strawberry, banana, almond flakes, orange sauce" },
        allergens: { ru: "Орехи", en: "Nuts" },
        price: "75,000",
        weight: { ru: "195 г", en: "195 g" },
        tags: [],
        nutrition: { calories: 581, protein: 11, fat: 35, carbs: 52 },
        image: "assets/images/dish-chef-dark-orange-chocolate.jpg",
      },
    ],
  },
  {
    id: "kids",
    name: { ru: "Детское меню", en: "Kids Menu" },
    items: [
      {
        name: { ru: "Куриные наггетсы с рисом", en: "Chicken Nuggets with Rice" },
        description: { ru: "Хрустящая курица без острых специй, рис, кетчуп.", en: "Crispy chicken, no spice, steamed rice, ketchup." },
        fullDescription: {
          ru: "Мягкая курица в хрустящей панировке, приготовленная без острых специй — специально для маленьких гостей. Подаётся с паровым рисом и кетчупом.",
          en: "Tender chicken in a crispy coating, made without any spice for younger guests. Served with steamed rice and ketchup.",
        },
        ingredients: { ru: "Куриное филе, панировка, рис, кетчуп", en: "Chicken breast, breading, rice, ketchup" },
        allergens: { ru: "Глютен, яйцо", en: "Gluten, egg" },
        price: "45,000",
        weight: { ru: "200 г", en: "200 g" },
        tags: [],
      },
      {
        name: { ru: "Мини-роллы «Калифорния» (некисло)", en: "Mini California Rolls (kid-friendly)" },
        description: { ru: "Мягкие роллы без васаби — крабовая палочка, авокадо, огурец.", en: "Mild rolls, no wasabi — crab stick, avocado, cucumber." },
        fullDescription: {
          ru: "Уменьшенная и смягчённая версия классического калифорния-ролла: без васаби и острых добавок, с мягким крабовым наполнением, авокадо и огурцом.",
          en: "A smaller, milder take on the classic California roll — no wasabi or spice, just crab stick, avocado and cucumber.",
        },
        ingredients: { ru: "Рис, нори, крабовая палочка, авокадо, огурец", en: "Rice, nori, crab stick, avocado, cucumber" },
        allergens: { ru: "Рыба, глютен", en: "Fish, gluten" },
        price: "42,000",
        weight: { ru: "180 г", en: "180 g" },
        tags: [],
      },
    ],
  },
  {
    id: "starters",
    name: { ru: "Закуски", en: "Starters" },
    items: [
      {
        name: { ru: "Эдамаме", en: "Edamame" },
        description: { ru: "Соевые бобы на пару, морская соль.", en: "Steamed soybeans, sea salt." },
        fullDescription: { ru: "Молодые соевые бобы, приготовленные на пару и посыпанные крупной морской солью — классическая закуска к напиткам.", en: "Young soybeans steamed and finished with coarse sea salt — a classic starter to share over drinks." },
        ingredients: { ru: "Соевые бобы, морская соль", en: "Soybeans, sea salt" },
        allergens: { ru: "Соя", en: "Soy" },
        price: "28,000",
        weight: { ru: "180 г", en: "180 g" },
        tags: ["vegetarian"],
      },
      {
        name: { ru: "Вьетнамские спринг-роллы", en: "Vietnamese Spring Rolls" },
        description: { ru: "Креветки, зелень, рисовая бумага, соус нуок-чам.", en: "Shrimp, herbs, rice paper, nuoc cham." },
        fullDescription: { ru: "Свежие, не жареные роллы в рисовой бумаге с креветкой, вермишелью и свежей зеленью, подаются с кисло-сладким соусом нуок-чам.", en: "Fresh, uncooked rice-paper rolls filled with shrimp, vermicelli and herbs, served with tangy nuoc cham dipping sauce." },
        ingredients: { ru: "Рисовая бумага, креветка, вермишель, мята, кинза", en: "Rice paper, shrimp, vermicelli, mint, cilantro" },
        allergens: { ru: "Моллюски, арахис", en: "Shellfish, peanuts" },
        price: "45,000",
        weight: { ru: "220 г", en: "220 g" },
        tags: [],
      },
      {
        name: { ru: "Хрустящие креветки рок", en: "Crispy Rock Shrimp" },
        description: { ru: "Острый майонез, зелёный лук, кунжут.", en: "Spicy mayo, scallion, sesame." },
        fullDescription: { ru: "Тигровые креветки во хрустящей темпуре, покрытые пикантным соусом на основе майонеза и чили, с кунжутом и зелёным луком.", en: "Tiger shrimp in a crispy tempura batter, tossed in a spicy chili-mayo glaze with sesame and scallion." },
        ingredients: { ru: "Креветка, темпура, майонез, чили, кунжут", en: "Shrimp, tempura batter, mayo, chili, sesame" },
        allergens: { ru: "Моллюски, яйцо, глютен", en: "Shellfish, egg, gluten" },
        price: "68,000",
        weight: { ru: "200 г", en: "200 g" },
        tags: ["spicy"],
      },
    ],
  },
  {
    id: "hot-mains",
    name: { ru: "Горячие блюда", en: "Hot Dishes" },
    items: [
      {
        name: { ru: "Утка в кисло-сладком соусе", en: "Sweet & Sour Duck" },
        description: { ru: "Хрустящая утка, ананас, болгарский перец.", en: "Crispy duck, pineapple, bell pepper." },
        fullDescription: { ru: "Хрустяще обжаренная утиная грудка в ярком кисло-сладком соусе с ананасом и болгарским перцем.", en: "Crisp-fried duck breast tossed in a vivid sweet-and-sour glaze with pineapple and bell pepper." },
        ingredients: { ru: "Утиная грудка, ананас, болгарский перец, соус кисло-сладкий", en: "Duck breast, pineapple, bell pepper, sweet-sour sauce" },
        allergens: { ru: "Соя", en: "Soy" },
        price: "128,000",
        weight: { ru: "280 г", en: "280 g" },
        tags: [],
      },
      {
        name: { ru: "Курица Кунг Пао", en: "Kung Pao Chicken" },
        description: { ru: "Арахис, сушёный чили, зелёный лук.", en: "Peanuts, dried chili, scallion." },
        fullDescription: { ru: "Классика сычуаньской кухни: обжаренная курица с арахисом, сушёным чили и зелёным луком в остро-сладком соусе.", en: "A Sichuan classic: wok-fried chicken with peanuts, dried chili and scallion in a spicy-sweet sauce." },
        ingredients: { ru: "Куриное филе, арахис, сушёный чили, зелёный лук", en: "Chicken breast, peanuts, dried chili, scallion" },
        allergens: { ru: "Арахис, соя", en: "Peanuts, soy" },
        price: "78,000",
        weight: { ru: "260 г", en: "260 g" },
        tags: ["spicy"],
      },
      {
        name: { ru: "Стейк из лосося терияки", en: "Salmon Teriyaki Steak" },
        description: { ru: "Лосось на гриле, соус терияки, кунжут.", en: "Grilled salmon, teriyaki glaze, sesame." },
        fullDescription: { ru: "Стейк лосося, обжаренный на гриле до хрустящей корочки и покрытый глянцевым соусом терияки, подаётся с кунжутом и овощами на пару.", en: "Grilled salmon steak finished with a glossy teriyaki glaze, served with sesame seeds and steamed vegetables." },
        ingredients: { ru: "Лосось, соус терияки, кунжут, овощи на пару", en: "Salmon, teriyaki sauce, sesame, steamed vegetables" },
        allergens: { ru: "Рыба, соя", en: "Fish, soy" },
        price: "165,000",
        weight: { ru: "240 г", en: "240 g" },
        tags: [],
      },
    ],
  },
  {
    id: "sashimi",
    name: { ru: "Сашими", en: "Sashimi" },
    items: [
      { name: { ru: "Сашими из лосося", en: "Salmon Sashimi" }, description: { ru: "8 шт., ручная нарезка.", en: "8 pcs, hand cut." }, fullDescription: { ru: "Филе лосося высшего качества, нарезанное вручную непосредственно перед подачей.", en: "Premium-grade salmon fillet, hand sliced immediately before serving." }, ingredients: { ru: "Лосось", en: "Salmon" }, allergens: { ru: "Рыба", en: "Fish" }, price: "98,000", weight: { ru: "140 г", en: "140 g" }, tags: [] },
      { name: { ru: "Сашими из тунца", en: "Tuna Sashimi" }, description: { ru: "8 шт., ручная нарезка.", en: "8 pcs, hand cut." }, fullDescription: { ru: "Тунец класса премиум, нарезанный вручную тонкими ломтиками для максимально нежной текстуры.", en: "Premium-grade tuna, hand sliced into delicate cuts for the most tender texture." }, ingredients: { ru: "Тунец", en: "Tuna" }, allergens: { ru: "Рыба", en: "Fish" }, price: "105,000", weight: { ru: "140 г", en: "140 g" }, tags: [] },
      {
        name: { ru: "Сашими микс", en: "Sashimi Mix" },
        description: { ru: "Лосось, тунец, желтохвост — ассорти на пробу.", en: "Salmon, tuna, yellowtail — a tasting assortment." },
        fullDescription: { ru: "Ассорти из трёх видов рыбы для тех, кто хочет попробовать всё сразу — лосось, тунец и желтохвост, нарезанные вручную.", en: "A three-way assortment for those who want to try it all — salmon, tuna and yellowtail, hand sliced." },
        ingredients: { ru: "Лосось, тунец, желтохвост", en: "Salmon, tuna, yellowtail" },
        allergens: { ru: "Рыба", en: "Fish" },
        price: "148,000",
        weight: { ru: "210 г", en: "210 g" },
        tags: [],
      },
    ],
  },
  {
    id: "salads",
    name: { ru: "Салаты", en: "Salads" },
    items: [
      { name: { ru: "Сом Там", en: "Som Tum" }, description: { ru: "Зелёная папайя, арахис, заправка чили-лайм.", en: "Green papaya, peanut, chili lime dressing." }, fullDescription: { ru: "Острый тайский салат из тонко нашинкованной зелёной папайи, помидоров черри, стручковой фасоли и арахиса в пикантной заправке чили-лайм.", en: "A punchy Thai salad of shredded green papaya, cherry tomato, long bean and peanut in a sharp chili-lime dressing." }, ingredients: { ru: "Зелёная папайя, арахис, чили, лайм, помидоры черри", en: "Green papaya, peanuts, chili, lime, cherry tomato" }, allergens: { ru: "Арахис", en: "Peanuts" }, price: "48,000", weight: { ru: "220 г", en: "220 g" }, tags: ["spicy", "vegetarian"] },
      { name: { ru: "Салат с вагю", en: "Wagyu Beef Salad" }, description: { ru: "Обжаренная говядина вагю, зелень, тамариндовая заправка.", en: "Seared wagyu, herbs, tamarind dressing." }, fullDescription: { ru: "Тонко нарезанная говядина вагю, обжаренная до средней прожарки, подаётся на свежей зелени с яркой тамариндовой заправкой.", en: "Thinly sliced wagyu beef, seared to medium-rare, served over fresh greens with a bright tamarind dressing." }, ingredients: { ru: "Говядина вагю, микс салата, тамаринд, лук-шалот", en: "Wagyu beef, mixed greens, tamarind, shallot" }, allergens: { ru: "—", en: "—" }, price: "89,000", weight: { ru: "210 г", en: "210 g" }, tags: [] },
      {
        name: { ru: "Салат с манго и креветками", en: "Mango Shrimp Salad" },
        description: { ru: "Спелое манго, тигровая креветка, мятная заправка.", en: "Ripe mango, tiger shrimp, mint dressing." },
        fullDescription: { ru: "Освежающее сочетание спелого манго, обжаренных тигровых креветок и свежей мяты в лёгкой цитрусовой заправке.", en: "A refreshing combination of ripe mango, seared tiger shrimp and fresh mint in a light citrus dressing." },
        ingredients: { ru: "Манго, тигровая креветка, мята, лайм", en: "Mango, tiger shrimp, mint, lime" },
        allergens: { ru: "Моллюски", en: "Shellfish" },
        price: "72,000",
        weight: { ru: "230 г", en: "230 g" },
        tags: [],
      },
    ],
  },
  {
    id: "tartare",
    name: { ru: "Тартар", en: "Tartare" },
    items: [
      {
        name: { ru: "Тартар из тунца", en: "Tuna Tartare" },
        description: { ru: "Тунец, авокадо, кунжут, соево-лаймовая заправка.", en: "Tuna, avocado, sesame, soy-lime dressing." },
        fullDescription: { ru: "Мелко нарезанный свежий тунец с кубиками авокадо, кунжутом и лёгкой соево-лаймовой заправкой, подаётся с хрустящими чипсами.", en: "Finely diced fresh tuna with avocado, sesame and a light soy-lime dressing, served with crisp chips." },
        ingredients: { ru: "Тунец, авокадо, кунжут, соевый соус, лайм", en: "Tuna, avocado, sesame, soy sauce, lime" },
        allergens: { ru: "Рыба, соя", en: "Fish, soy" },
        price: "95,000",
        weight: { ru: "170 г", en: "170 g" },
        tags: [],
      },
      {
        name: { ru: "Тартар из лосося с манго", en: "Salmon Tartare with Mango" },
        description: { ru: "Лосось, манго, чили, кинза.", en: "Salmon, mango, chili, cilantro." },
        fullDescription: { ru: "Нежный лосось в кубиках с сочным манго, лёгкой ноткой чили и свежей кинзой — яркое сочетание сладкого и острого.", en: "Diced tender salmon with juicy mango, a light hit of chili and fresh cilantro — a bright sweet-and-spicy pairing." },
        ingredients: { ru: "Лосось, манго, чили, кинза, лайм", en: "Salmon, mango, chili, cilantro, lime" },
        allergens: { ru: "Рыба", en: "Fish" },
        price: "98,000",
        weight: { ru: "170 г", en: "170 g" },
        tags: ["spicy"],
      },
    ],
  },
  {
    id: "soups",
    name: { ru: "Супы", en: "Soups" },
    items: [
      { name: { ru: "Том Ям Кунг", en: "Tom Yum Kung" }, description: { ru: "Речная креветка, лемонграсс, чили-масло, лайм.", en: "River prawn, lemongrass, chili oil, lime." }, fullDescription: { ru: "Фирменный острый и кислый суп с речной креветкой, лемонграссом, лаймовыми листьями и чили-маслом.", en: "The house hot-and-sour classic with river prawn, lemongrass, lime leaf and chili oil." }, ingredients: { ru: "Речная креветка, лемонграсс, лайм, чили", en: "River prawn, lemongrass, lime, chili" }, allergens: { ru: "Моллюски", en: "Shellfish" }, price: "62,000", weight: { ru: "350 мл", en: "350 ml" }, tags: ["spicy"] },
      { name: { ru: "Том Кха Гай", en: "Tom Kha Gai" }, description: { ru: "Кокосовый бульон, курица, галангал.", en: "Coconut broth, chicken, galangal." }, fullDescription: { ru: "Нежный кокосовый суп с курицей, галангалом и лаймовым листом — мягче, чем том ям, но не менее ароматный.", en: "A gentle coconut soup with chicken, galangal and lime leaf — softer than tom yum, just as fragrant." }, ingredients: { ru: "Курица, кокосовое молоко, галангал, лайм", en: "Chicken, coconut milk, galangal, lime" }, allergens: { ru: "—", en: "—" }, price: "58,000", weight: { ru: "350 мл", en: "350 ml" }, tags: [] },
      { name: { ru: "Мисо-суп", en: "Miso Soup" }, description: { ru: "Тофу, вакаме, зелёный лук.", en: "Tofu, wakame, scallion." }, fullDescription: { ru: "Традиционный японский суп на основе мисо-пасты с тофу, водорослями вакаме и зелёным луком.", en: "Traditional Japanese miso-paste soup with tofu, wakame seaweed and scallion." }, ingredients: { ru: "Мисо-паста, тофу, вакаме, зелёный лук", en: "Miso paste, tofu, wakame, scallion" }, allergens: { ru: "Соя", en: "Soy" }, price: "35,000", weight: { ru: "300 мл", en: "300 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "curry",
    name: { ru: "Карри", en: "Curry" },
    items: [
      {
        name: { ru: "Карри Массаман с говядиной", en: "Massaman Beef Curry" },
        description: { ru: "Говядина, картофель, арахис, кокосовое карри.", en: "Beef, potato, peanut, coconut curry." },
        fullDescription: { ru: "Мягкое, слегка сладковатое карри с южным тайским характером — тушёная говядина, картофель и арахис в густом кокосовом соусе.", en: "A mellow, slightly sweet curry with southern Thai roots — braised beef, potato and peanut in a rich coconut sauce." },
        ingredients: { ru: "Говядина, картофель, арахис, кокосовое молоко, специи карри", en: "Beef, potato, peanuts, coconut milk, curry spices" },
        allergens: { ru: "Арахис", en: "Peanuts" },
        price: "92,000",
        weight: { ru: "320 г", en: "320 g" },
        tags: [],
      },
      {
        name: { ru: "Зелёное карри с курицей", en: "Green Curry with Chicken" },
        description: { ru: "Курица, баклажан, тайский базилик, зелёное карри.", en: "Chicken, eggplant, Thai basil, green curry." },
        fullDescription: { ru: "Одно из самых острых блюд меню: курица и тайский баклажан в остром зелёном карри на кокосовом молоке с тайским базиликом.", en: "One of the spicier dishes on the menu: chicken and Thai eggplant in a fiery coconut-based green curry with Thai basil." },
        ingredients: { ru: "Курица, баклажан, тайский базилик, зелёная паста карри", en: "Chicken, eggplant, Thai basil, green curry paste" },
        allergens: { ru: "—", en: "—" },
        price: "78,000",
        weight: { ru: "300 г", en: "300 g" },
        tags: ["spicy"],
      },
    ],
  },
  {
    id: "wok",
    name: { ru: "Wok", en: "Wok" },
    items: [
      { name: { ru: "Лапша Вок с говядиной", en: "Wok Noodles with Beef" }, description: { ru: "Пшеничная лапша, говядина, овощи, соус устричный.", en: "Wheat noodles, beef, vegetables, oyster sauce." }, fullDescription: { ru: "Пшеничная лапша, быстро обжаренная на сильном огне с говядиной, сезонными овощами и устричным соусом.", en: "Wheat noodles flash-fried over high heat with beef, seasonal vegetables and oyster sauce." }, ingredients: { ru: "Лапша, говядина, овощи, устричный соус", en: "Noodles, beef, vegetables, oyster sauce" }, allergens: { ru: "Глютен, моллюски, соя", en: "Gluten, shellfish, soy" }, price: "82,000", weight: { ru: "320 г", en: "320 g" }, tags: [] },
      { name: { ru: "Овощи Вок с тофу", en: "Wok Vegetables with Tofu" }, description: { ru: "Сезонные овощи, тофу, соус из чёрной фасоли.", en: "Seasonal vegetables, tofu, black bean sauce." }, fullDescription: { ru: "Хрустящие сезонные овощи и мягкий тофу, обжаренные на воке с ароматным соусом из чёрной фасоли.", en: "Crisp seasonal vegetables and soft tofu wok-fried in a fragrant black bean sauce." }, ingredients: { ru: "Тофу, брокколи, морковь, соус из чёрной фасоли", en: "Tofu, broccoli, carrot, black bean sauce" }, allergens: { ru: "Соя", en: "Soy" }, price: "68,000", weight: { ru: "300 г", en: "300 g" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "build-wok",
    name: { ru: "Сборный Wok", en: "Build-Your-Own Wok" },
    items: [
      {
        name: { ru: "Собери свой Вок: курица", en: "Build Your Wok: Chicken" },
        description: { ru: "Выбери лапшу или рис, соус и уровень остроты.", en: "Choose your noodles or rice, sauce and spice level." },
        fullDescription: { ru: "Основа (лапша или рис) + курица, обжаренные вместе на сильном огне с выбранным соусом — острым, кисло-сладким или устричным.", en: "Your base (noodles or rice) plus chicken, wok-fried together with the sauce of your choice — spicy, sweet-sour or oyster." },
        ingredients: { ru: "Курица, лапша/рис на выбор, соус на выбор, овощи", en: "Chicken, choice of noodles/rice, choice of sauce, vegetables" },
        allergens: { ru: "Глютен (в зависимости от основы)", en: "Gluten (depending on base)" },
        price: "65,000",
        weight: { ru: "от 350 г", en: "from 350 g" },
        tags: [],
      },
      {
        name: { ru: "Собери свой Вок: креветки", en: "Build Your Wok: Shrimp" },
        description: { ru: "Выбери лапшу или рис, соус и уровень остроты.", en: "Choose your noodles or rice, sauce and spice level." },
        fullDescription: { ru: "Основа (лапша или рис) + тигровая креветка, обжаренные вместе на сильном огне с выбранным соусом.", en: "Your base (noodles or rice) plus tiger shrimp, wok-fried together with the sauce of your choice." },
        ingredients: { ru: "Тигровая креветка, лапша/рис на выбор, соус на выбор, овощи", en: "Tiger shrimp, choice of noodles/rice, choice of sauce, vegetables" },
        allergens: { ru: "Моллюски, глютен (в зависимости от основы)", en: "Shellfish, gluten (depending on base)" },
        price: "85,000",
        weight: { ru: "от 350 г", en: "from 350 g" },
        tags: [],
      },
    ],
  },
  {
    id: "sets",
    name: { ru: "Сеты", en: "Sets" },
    items: [
      {
        name: { ru: "Сет «Токио»", en: "Tokyo Set" },
        description: { ru: "Ассорти нигири и роллов на двоих.", en: "Assorted nigiri and rolls for two." },
        fullDescription: { ru: "Сбалансированное ассорти нигири, сашими и авторских роллов — идеальный выбор для знакомства с меню сушичасти.", en: "A balanced assortment of nigiri, sashimi and signature rolls — the ideal way to sample the sushi menu." },
        ingredients: { ru: "Лосось, тунец, угорь, рис, нори, авокадо", en: "Salmon, tuna, eel, rice, nori, avocado" },
        allergens: { ru: "Рыба, соя, глютен", en: "Fish, soy, gluten" },
        price: "285,000",
        weight: { ru: "620 г", en: "620 g" },
        tags: [],
      },
      {
        name: { ru: "Сет «Осака»", en: "Osaka Set" },
        description: { ru: "Премиальное ассорти сашими и роллов на двоих.", en: "Premium sashimi and roll assortment for two." },
        fullDescription: { ru: "Расширенная версия сета «Токио» с добавлением премиальной рыбы — желтохвоста и морского гребешка.", en: "An elevated version of the Tokyo Set with the addition of premium yellowtail and scallop." },
        ingredients: { ru: "Лосось, тунец, желтохвост, гребешок, рис, нори", en: "Salmon, tuna, yellowtail, scallop, rice, nori" },
        allergens: { ru: "Рыба, моллюски, соя, глютен", en: "Fish, shellfish, soy, gluten" },
        price: "395,000",
        weight: { ru: "720 г", en: "720 g" },
        tags: [],
      },
    ],
  },
  {
    id: "rolls",
    name: { ru: "Роллы", en: "Rolls" },
    items: [
      { name: { ru: "Ролл TomYumBar", en: "TomYumBar Roll" }, description: { ru: "Острый тунец, авокадо, хрустящий чеснок, тобико.", en: "Spicy tuna, avocado, crispy garlic, tobiko." }, fullDescription: { ru: "Фирменный ролл: острый тунец и авокадо внутри, хрустящий жареный чеснок и тобико сверху.", en: "The house signature: spicy tuna and avocado inside, topped with crispy fried garlic and tobiko." }, ingredients: { ru: "Тунец, авокадо, чеснок, тобико, рис, нори", en: "Tuna, avocado, garlic, tobiko, rice, nori" }, allergens: { ru: "Рыба, соя, глютен", en: "Fish, soy, gluten" }, price: "95,000", weight: { ru: "230 г", en: "230 g" }, tags: ["spicy"], image: "assets/images/dish-sushi-platter.jpg" },
      { name: { ru: "Ролл Дракон", en: "Dragon Roll" }, description: { ru: "Угорь, огурец, авокадо, соус унаги.", en: "Eel, cucumber, avocado, unagi glaze." }, fullDescription: { ru: "Обжаренный угорь и авокадо сверху, огурец и рис внутри, всё покрыто глянцевым соусом унаги.", en: "Glazed grilled eel and avocado on top, cucumber and rice inside, finished with a glossy unagi sauce." }, ingredients: { ru: "Угорь, огурец, авокадо, соус унаги, рис, нори", en: "Eel, cucumber, avocado, unagi sauce, rice, nori" }, allergens: { ru: "Рыба, соя, глютен", en: "Fish, soy, gluten" }, price: "110,000", weight: { ru: "240 г", en: "240 g" }, tags: [] },
      { name: { ru: "Ролл Радуга", en: "Rainbow Roll" }, description: { ru: "База «Калифорния», ассорти сашими.", en: "California base, assorted sashimi." }, fullDescription: { ru: "Классический калифорния-ролл, накрытый веером из свежего лосося, тунца и авокадо.", en: "A classic California roll, fanned over the top with fresh salmon, tuna and avocado." }, ingredients: { ru: "Краб, авокадо, лосось, тунец, рис, нори", en: "Crab, avocado, salmon, tuna, rice, nori" }, allergens: { ru: "Рыба, моллюски, глютен", en: "Fish, shellfish, gluten" }, price: "115,000", weight: { ru: "250 г", en: "250 g" }, tags: [] },
    ],
  },
  {
    id: "extras",
    name: { ru: "Добавки", en: "Extras" },
    items: [
      { name: { ru: "Соус унаги", en: "Unagi Sauce" }, description: { ru: "Сладкий соевый соус для роллов.", en: "Sweet soy glaze for rolls." }, fullDescription: { ru: "Густой сладковатый соус на основе соевого соуса и мирина — классическая добавка к роллам с угрём.", en: "A thick, slightly sweet soy-and-mirin glaze — the classic pairing for eel rolls." }, ingredients: { ru: "Соевый соус, мирин, сахар", en: "Soy sauce, mirin, sugar" }, allergens: { ru: "Соя, глютен", en: "Soy, gluten" }, price: "8,000", weight: { ru: "30 мл", en: "30 ml" }, tags: [] },
      { name: { ru: "Кунжут и маринованный имбирь", en: "Sesame & Pickled Ginger" }, description: { ru: "Традиционное дополнение к суши.", en: "The traditional sushi accompaniment." }, fullDescription: { ru: "Маринованный имбирь для очищения вкуса между кусочками и белый кунжут для дополнительного аромата.", en: "Pickled ginger to cleanse the palate between bites, and white sesame for extra aroma." }, ingredients: { ru: "Имбирь, рисовый уксус, кунжут", en: "Ginger, rice vinegar, sesame" }, allergens: { ru: "—", en: "—" }, price: "10,000", weight: { ru: "40 г", en: "40 g" }, tags: ["vegetarian"] },
      { name: { ru: "Острый майонез", en: "Spicy Mayo" }, description: { ru: "Соус на основе майонеза и чили.", en: "Mayo-based chili sauce." }, fullDescription: { ru: "Кремовый соус из майонеза с чили-пастой — универсальное дополнение к роллам и темпуре.", en: "A creamy mayo-and-chili-paste sauce — a versatile pairing for rolls and tempura." }, ingredients: { ru: "Майонез, чили-паста", en: "Mayo, chili paste" }, allergens: { ru: "Яйцо", en: "Egg" }, price: "9,000", weight: { ru: "30 мл", en: "30 ml" }, tags: ["spicy"] },
    ],
  },
  {
    id: "desserts",
    name: { ru: "Десерты", en: "Desserts" },
    items: [
      { name: { ru: "Манго с клейким рисом", en: "Mango Sticky Rice" }, description: { ru: "Клейкий рис на кокосовом молоке, спелое манго.", en: "Coconut sticky rice, ripe mango." }, fullDescription: { ru: "Тайский классический десерт: тёплый клейкий рис на кокосовом молоке с ломтиками спелого манго.", en: "The Thai classic: warm coconut-milk sticky rice with slices of ripe mango." }, ingredients: { ru: "Клейкий рис, кокосовое молоко, манго", en: "Sticky rice, coconut milk, mango" }, allergens: { ru: "—", en: "—" }, price: "45,000", weight: { ru: "180 г", en: "180 g" }, tags: ["vegetarian"] },
      { name: { ru: "Тирамису матча", en: "Matcha Tiramisu" }, description: { ru: "Маскарпоне слоями, матча, какао.", en: "Layered mascarpone, matcha, cocoa." }, fullDescription: { ru: "Японско-итальянский гибрид: слои маскарпоне и бисквита, пропитанного матча, присыпанные какао.", en: "A Japanese-Italian hybrid: layers of mascarpone and matcha-soaked sponge, dusted with cocoa." }, ingredients: { ru: "Маскарпоне, матча, бисквит, какао", en: "Mascarpone, matcha, sponge cake, cocoa" }, allergens: { ru: "Молоко, глютен, яйцо", en: "Milk, gluten, egg" }, price: "48,000", weight: { ru: "160 г", en: "160 g" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "mochi",
    name: { ru: "Моти", en: "Mochi" },
    items: [
      { name: { ru: "Моти манго", en: "Mango Mochi" }, description: { ru: "Рисовое тесто, начинка манго, 3 шт.", en: "Rice dough, mango filling, 3 pcs." }, fullDescription: { ru: "Мягкое рисовое тесто моти с прохладной начинкой из мангового мороженого.", en: "Soft rice-dough mochi wrapped around a cool mango-ice-cream filling." }, ingredients: { ru: "Рисовая мука, манго, сахар", en: "Rice flour, mango, sugar" }, allergens: { ru: "Молоко", en: "Milk" }, price: "32,000", weight: { ru: "90 г", en: "90 g" }, tags: ["vegetarian"] },
      { name: { ru: "Моти матча", en: "Matcha Mochi" }, description: { ru: "Рисовое тесто, начинка матча, 3 шт.", en: "Rice dough, matcha filling, 3 pcs." }, fullDescription: { ru: "Мягкое рисовое тесто моти с начинкой из мороженого матча — лёгкая горчинка зелёного чая.", en: "Soft rice-dough mochi filled with matcha ice cream — a gentle green-tea bitterness." }, ingredients: { ru: "Рисовая мука, матча, сахар", en: "Rice flour, matcha, sugar" }, allergens: { ru: "Молоко", en: "Milk" }, price: "32,000", weight: { ru: "90 г", en: "90 g" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "tea",
    name: { ru: "Чай", en: "Tea" },
    items: [
      { name: { ru: "Жасминовый чай", en: "Jasmine Tea" }, description: { ru: "Чайник на двоих.", en: "Pot for two." }, fullDescription: { ru: "Классический зелёный чай, ароматизированный цветами жасмина, подаётся в чайнике на двоих.", en: "Classic green tea scented with jasmine blossom, served in a pot for two." }, ingredients: { ru: "Зелёный чай, жасмин", en: "Green tea, jasmine" }, allergens: { ru: "—", en: "—" }, price: "28,000", weight: { ru: "500 мл", en: "500 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Улун чай", en: "Oolong Tea" }, description: { ru: "Полуферментированный чай, чайник на двоих.", en: "Semi-fermented tea, pot for two." }, fullDescription: { ru: "Полуферментированный чай с мягким, слегка ореховым вкусом, подаётся в чайнике на двоих.", en: "A semi-fermented tea with a smooth, faintly nutty character, served in a pot for two." }, ingredients: { ru: "Чайные листья улун", en: "Oolong tea leaves" }, allergens: { ru: "—", en: "—" }, price: "30,000", weight: { ru: "500 мл", en: "500 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "coffee",
    name: { ru: "Кофе", en: "Coffee" },
    items: [
      { name: { ru: "Эспрессо", en: "Espresso" }, description: { ru: "Классический двойной эспрессо.", en: "Classic double espresso." }, fullDescription: { ru: "Насыщенный двойной эспрессо из смеси зёрен собственной обжарки.", en: "A rich double shot of espresso from our house-roasted blend." }, ingredients: { ru: "Кофе", en: "Coffee" }, allergens: { ru: "—", en: "—" }, price: "22,000", weight: { ru: "60 мл", en: "60 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Латте матча", en: "Matcha Latte" }, description: { ru: "Матча, вспененное молоко.", en: "Matcha, steamed milk." }, fullDescription: { ru: "Церемониальная матча, взбитая с молоком до бархатистой пены.", en: "Ceremonial-grade matcha whisked with steamed milk to a velvety foam." }, ingredients: { ru: "Матча, молоко", en: "Matcha, milk" }, allergens: { ru: "Молоко", en: "Milk" }, price: "35,000", weight: { ru: "300 мл", en: "300 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "milkshakes",
    name: { ru: "Молочные коктейли", en: "Milkshakes" },
    items: [
      { name: { ru: "Молочный коктейль манго", en: "Mango Milkshake" }, description: { ru: "Манго, молоко, мороженое.", en: "Mango, milk, ice cream." }, fullDescription: { ru: "Густой молочный коктейль со свежим манго и ванильным мороженым.", en: "A thick milkshake blended with fresh mango and vanilla ice cream." }, ingredients: { ru: "Манго, молоко, мороженое", en: "Mango, milk, ice cream" }, allergens: { ru: "Молоко", en: "Milk" }, price: "38,000", weight: { ru: "350 мл", en: "350 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Молочный коктейль матча", en: "Matcha Milkshake" }, description: { ru: "Матча, молоко, мороженое.", en: "Matcha, milk, ice cream." }, fullDescription: { ru: "Кремовый молочный коктейль с матча и ванильным мороженым.", en: "A creamy milkshake blended with matcha and vanilla ice cream." }, ingredients: { ru: "Матча, молоко, мороженое", en: "Matcha, milk, ice cream" }, allergens: { ru: "Молоко", en: "Milk" }, price: "40,000", weight: { ru: "350 мл", en: "350 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "juice-water",
    name: { ru: "Соки и вода", en: "Juices & Water" },
    items: [
      { name: { ru: "Вода негазированная", en: "Still Water" }, description: { ru: "0.5 л.", en: "0.5 L." }, fullDescription: { ru: "Питьевая вода без газа, 0.5 л.", en: "Still drinking water, 0.5 L." }, ingredients: { ru: "Вода", en: "Water" }, allergens: { ru: "—", en: "—" }, price: "15,000", weight: { ru: "500 мл", en: "500 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Вода газированная", en: "Sparkling Water" }, description: { ru: "0.5 л.", en: "0.5 L." }, fullDescription: { ru: "Питьевая вода с газом, 0.5 л.", en: "Sparkling drinking water, 0.5 L." }, ingredients: { ru: "Вода, углекислый газ", en: "Water, carbonation" }, allergens: { ru: "—", en: "—" }, price: "16,000", weight: { ru: "500 мл", en: "500 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Апельсиновый сок", en: "Orange Juice" }, description: { ru: "Сок из пакета.", en: "Boxed juice." }, fullDescription: { ru: "Апельсиновый сок 100%, без добавления сахара.", en: "100% orange juice, no added sugar." }, ingredients: { ru: "Апельсиновый сок", en: "Orange juice" }, allergens: { ru: "—", en: "—" }, price: "20,000", weight: { ru: "250 мл", en: "250 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "lemonade",
    name: { ru: "Лимонад", en: "Lemonade" },
    items: [
      { name: { ru: "Лимонад имбирный", en: "Ginger Lemonade" }, description: { ru: "Лимон, имбирь, мята, содовая.", en: "Lemon, ginger, mint, soda." }, fullDescription: { ru: "Домашний лимонад с пикантным имбирём, свежей мятой и содовой.", en: "House-made lemonade with a sharp ginger kick, fresh mint and soda." }, ingredients: { ru: "Лимон, имбирь, мята, содовая", en: "Lemon, ginger, mint, soda" }, allergens: { ru: "—", en: "—" }, price: "30,000", weight: { ru: "350 мл", en: "350 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Лимонад маракуйя", en: "Passionfruit Lemonade" }, description: { ru: "Маракуйя, лимон, содовая.", en: "Passionfruit, lemon, soda." }, fullDescription: { ru: "Тропический лимонад с мякотью маракуйи и свежим лимоном.", en: "A tropical lemonade with passionfruit pulp and fresh lemon." }, ingredients: { ru: "Маракуйя, лимон, содовая", en: "Passionfruit, lemon, soda" }, allergens: { ru: "—", en: "—" }, price: "32,000", weight: { ru: "350 мл", en: "350 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "tamarind",
    name: { ru: "Тамаринд", en: "Tamarind" },
    items: [
      { name: { ru: "Тамариндовый напиток классический", en: "Classic Tamarind Drink" }, description: { ru: "Мякоть тамаринда, тростниковый сахар.", en: "Tamarind pulp, cane sugar." }, fullDescription: { ru: "Кисло-сладкий освежающий напиток на основе мякоти тамаринда с тростниковым сахаром.", en: "A tangy, refreshing drink made from tamarind pulp sweetened with cane sugar." }, ingredients: { ru: "Тамаринд, тростниковый сахар, вода", en: "Tamarind, cane sugar, water" }, allergens: { ru: "—", en: "—" }, price: "28,000", weight: { ru: "300 мл", en: "300 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Тамаринд с мятой", en: "Tamarind with Mint" }, description: { ru: "Тамаринд, свежая мята, лёд.", en: "Tamarind, fresh mint, ice." }, fullDescription: { ru: "Тамариндовый напиток с добавлением свежей мяты — освежает даже в самый жаркий день.", en: "Our tamarind drink with fresh mint added — refreshing even on the hottest day." }, ingredients: { ru: "Тамаринд, мята, тростниковый сахар", en: "Tamarind, mint, cane sugar" }, allergens: { ru: "—", en: "—" }, price: "30,000", weight: { ru: "300 мл", en: "300 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "fresh",
    name: { ru: "Фреш", en: "Fresh Juice" },
    items: [
      { name: { ru: "Фреш апельсиновый", en: "Fresh Orange Juice" }, description: { ru: "Свежевыжатый апельсиновый сок.", en: "Freshly squeezed orange juice." }, fullDescription: { ru: "Апельсиновый сок, отжатый непосредственно перед подачей.", en: "Orange juice, squeezed right before serving." }, ingredients: { ru: "Апельсин", en: "Orange" }, allergens: { ru: "—", en: "—" }, price: "32,000", weight: { ru: "300 мл", en: "300 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Фреш морковный", en: "Fresh Carrot Juice" }, description: { ru: "Свежевыжатый морковный сок.", en: "Freshly squeezed carrot juice." }, fullDescription: { ru: "Морковный сок, отжатый непосредственно перед подачей, с лёгкой ноткой имбиря.", en: "Carrot juice, squeezed right before serving, with a light hint of ginger." }, ingredients: { ru: "Морковь, имбирь", en: "Carrot, ginger" }, allergens: { ru: "—", en: "—" }, price: "30,000", weight: { ru: "300 мл", en: "300 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "smoothie",
    name: { ru: "Смузи", en: "Smoothies" },
    items: [
      { name: { ru: "Смузи манго-маракуйя", en: "Mango Passionfruit Smoothie" }, description: { ru: "Манго, маракуйя, банан.", en: "Mango, passionfruit, banana." }, fullDescription: { ru: "Густой тропический смузи из манго, маракуйи и банана.", en: "A thick tropical smoothie blended from mango, passionfruit and banana." }, ingredients: { ru: "Манго, маракуйя, банан", en: "Mango, passionfruit, banana" }, allergens: { ru: "—", en: "—" }, price: "42,000", weight: { ru: "350 мл", en: "350 ml" }, tags: ["vegetarian"] },
      { name: { ru: "Смузи ягодный", en: "Berry Smoothie" }, description: { ru: "Клубника, черника, малина.", en: "Strawberry, blueberry, raspberry." }, fullDescription: { ru: "Смузи из смеси свежих ягод — клубники, черники и малины.", en: "A smoothie blended from a mix of fresh strawberry, blueberry and raspberry." }, ingredients: { ru: "Клубника, черника, малина", en: "Strawberry, blueberry, raspberry" }, allergens: { ru: "—", en: "—" }, price: "45,000", weight: { ru: "350 мл", en: "350 ml" }, tags: ["vegetarian"] },
    ],
  },
  {
    id: "alcohol-cocktails",
    name: { ru: "Алкогольные коктейли", en: "Alcoholic Cocktails" },
    items: [
      { name: { ru: "Лычи Мартини", en: "Lychee Martini" }, description: { ru: "Водка, ликёр личи, сироп личи.", en: "Vodka, lychee liqueur, lychee syrup." }, fullDescription: { ru: "Элегантный коктейль на основе водки с ликёром и сиропом личи — сладкий и утончённый.", en: "An elegant vodka-based cocktail with lychee liqueur and syrup — sweet and refined." }, ingredients: { ru: "Водка, ликёр личи, сироп личи", en: "Vodka, lychee liqueur, lychee syrup" }, allergens: { ru: "—", en: "—" }, price: "75,000", weight: { ru: "150 мл", en: "150 ml" }, tags: [] },
      { name: { ru: "Юдзу Маргарита", en: "Yuzu Margarita" }, description: { ru: "Текила, ликёр трипл-сек, юдзу.", en: "Tequila, triple sec, yuzu." }, fullDescription: { ru: "Классическая маргарита с азиатским акцентом — юдзу вместо привычного лайма.", en: "A classic margarita with an Asian twist — yuzu in place of the usual lime." }, ingredients: { ru: "Текила, трипл-сек, юдзу, соль", en: "Tequila, triple sec, yuzu, salt" }, allergens: { ru: "—", en: "—" }, price: "82,000", weight: { ru: "150 мл", en: "150 ml" }, tags: [] },
    ],
  },
  {
    id: "wine",
    name: { ru: "Вино", en: "Wine" },
    items: [
      { name: { ru: "Совиньон Блан, бокал", en: "Sauvignon Blanc, glass" }, description: { ru: "Белое, сухое.", en: "White, dry." }, fullDescription: { ru: "Свежее сухое белое вино с яркой цитрусовой кислотностью.", en: "A crisp dry white wine with bright citrus acidity." }, ingredients: { ru: "Виноград Совиньон Блан", en: "Sauvignon Blanc grapes" }, allergens: { ru: "Сульфиты", en: "Sulfites" }, price: "75,000", weight: { ru: "150 мл", en: "150 ml" }, tags: [] },
      { name: { ru: "Каберне Совиньон, бокал", en: "Cabernet Sauvignon, glass" }, description: { ru: "Красное, сухое.", en: "Red, dry." }, fullDescription: { ru: "Насыщенное сухое красное вино с бархатистым танином.", en: "A full-bodied dry red wine with velvety tannin." }, ingredients: { ru: "Виноград Каберне Совиньон", en: "Cabernet Sauvignon grapes" }, allergens: { ru: "Сульфиты", en: "Sulfites" }, price: "80,000", weight: { ru: "150 мл", en: "150 ml" }, tags: [] },
    ],
  },
  {
    id: "spirits",
    name: { ru: "Покрепче", en: "Spirits" },
    items: [
      { name: { ru: "Саке Junmai", en: "Junmai Sake" }, description: { ru: "Традиционное японское саке.", en: "Traditional Japanese sake." }, fullDescription: { ru: "Чистое рисовое саке категории Junmai, подаётся охлаждённым или тёплым — на выбор.", en: "Pure Junmai-grade rice sake, served chilled or warmed — your choice." }, ingredients: { ru: "Рис, вода, кодзи", en: "Rice, water, koji" }, allergens: { ru: "—", en: "—" }, price: "95,000", weight: { ru: "100 мл", en: "100 ml" }, tags: [] },
      { name: { ru: "Виски, порция", en: "Whisky, shot" }, description: { ru: "Односолодовый виски.", en: "Single malt whisky." }, fullDescription: { ru: "Односолодовый виски, подаётся чистым или со льдом.", en: "Single malt whisky, served neat or on the rocks." }, ingredients: { ru: "Односолодовый виски", en: "Single malt whisky" }, allergens: { ru: "—", en: "—" }, price: "120,000", weight: { ru: "50 мл", en: "50 ml" }, tags: [] },
    ],
  },
  {
    id: "beer",
    name: { ru: "Пиво", en: "Beer" },
    items: [
      { name: { ru: "Асахи", en: "Asahi" }, description: { ru: "Японский лагер.", en: "Japanese lager." }, fullDescription: { ru: "Лёгкий, хрустящий японский лагер — классика к суши.", en: "A light, crisp Japanese lager — the classic pairing for sushi." }, ingredients: { ru: "Солод, хмель, вода", en: "Malt, hops, water" }, allergens: { ru: "Глютен", en: "Gluten" }, price: "38,000", weight: { ru: "330 мл", en: "330 ml" }, tags: [] },
      { name: { ru: "Крафтовое IPA", en: "Craft IPA" }, description: { ru: "Хмелевое, с цитрусовым характером.", en: "Hoppy, citrus-forward." }, fullDescription: { ru: "Насыщенное хмелевое пиво с ярким цитрусовым и смолистым характером.", en: "A bold, hop-forward beer with bright citrus and pine character." }, ingredients: { ru: "Солод, хмель, вода", en: "Malt, hops, water" }, allergens: { ru: "Глютен", en: "Gluten" }, price: "45,000", weight: { ru: "400 мл", en: "400 ml" }, tags: [] },
    ],
  },
];

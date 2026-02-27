const recipes = [
  {
    id: "creamy-pasta",
    name: "Creamy pasta bake with tomatoes and mozzarella",
    image: "https://assets.happyplates.com/media/1739/happy-plates-rezept-cremiger-pasta-auflauf-mit-tomaten-und-mozzarella-vegetarisch-fuer-kinder.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=828",
    prepTime: "50 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Fusilli", amount: 180, unit: "g", isOptional: false },
      { name: "Onion", amount: 1/4, unit: "", isOptional: true },
      { name: "Garlic", amount: 1/4, unit: "Clove", isOptional: true },
      { name: "Courgette", amount: 1/4, unit: "", isOptional: true },
      { name: "Carrot", amount: 1/2, unit: "", isOptional: true },
      { name: "Strained Tomatoes", amount: 700, unit: "g", isOptional: false },
      { name: "Tomato Paste", amount: 1, unit: "tsp", isOptional: true },
      { name: "Whipping Cream", amount: 50, unit: "ml", isOptional: false },
      { name: "Mozzarella", amount: 30, unit: "g", isOptional: false },
      { name: "Grated Mozzarella", amount: 40, unit: "g", isOptional: false },
      { name: "Dried Oregano", amount: 1, unit: "tsp", isOptional: true },
      { name: "Sugar", amount: 1/4, unit: "tsp", isOptional: true },
      { name: "Salt", amount: 1/4, unit: "tsp", isOptional: true }
    ],
    instructions: [
      "Preheat the oven to 180°C hot air.",
      "Bring salted water to the boil in a saucepan and cook the pasta for approx. 3 minutes less than indicated on the packet. Then mix the pasta with a dash of olive oil.",
      "Peel the onion(s) and garlic and finely dice both. Peel the carrot(s), wash the courgette and grate both vegetables using the coarse side of a box grater.",
      "Heat a generous amount of olive oil in a pan and sauté the diced onion until translucent. Add the garlic, grated carrot and courgette and fry for 2 minutes. Add the passata, tomato purée, whipping cream, sugar, oregano and sufficient salt and simmer gently for 5 minutes.",
      "Mix the pasta with the tomato sauce in an ovenproof dish. Mix half of the mozzarella and grated mozzarella into the pasta and spread the other half over the top of the bake.",
      "Place the bake in the oven and bake for approx. 30 minutes until golden brown."
    ],
    nutrition: {
      basis: "1/4 der Gesamtmenge",
      calories: { value: 740, unit: "kcal" },
      carbohydrates: { value: 94, unit: "g" },
      fat: { value: 28, unit: "g" },
      protein: { value: 31, unit: "g" },
      micronutrients: {
        kalium: { value: 800, unit: "mg" },
        vitaminC: { value: 25, unit: "mg" },
        eisen: { value: 2.5, unit: "mg" },
        calcium: { value: 480, unit: "mg" },
        phosphor: { value: 350, unit: "mg" },
        vitaminA: { value: 0.35, unit: "mg" },
        magnesium: { value: 45, unit: "mg" },
        vitaminB12: { value: 0.0008, unit: "mg" },
        folat: { value: 60, unit: "µg" },
        vitaminE: { value: 2.0, unit: "mg" },
        zink: { value: 2.2, unit: "mg" },
        niacin: { value: 4.0, unit: "mg" },
        vitaminK1: { value: 12, unit: "µg" },
        riboflavin: { value: 0.4, unit: "mg" },
        pyridoxin: { value: 0.3, unit: "mg" }
      }
    }
  },

  {
    id: "cheesy",
    name: "Cheesy Quesadillas",
    image: "https://assets.happyplates.com/media/1461/happy-plates-rezept-cheesy-quesadillas-vegetarisch-last-minute-fuer-kinder-de1158jwl.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "15 min",
    difficulty: "Super Easy",
    ingredients: [
      { name: "Onion", amount: 1/4, unit: "", isOptional: true },
      { name: "Paprika", amount: 1/4, unit: "Clove", isOptional: false },
      { name: "Tomato", amount: 1/2, unit: "", isOptional: false },
      { name: "Cheese", amount: 90, unit: "g", isOptional: false },
      { name: "Tortilla Wraps", amount: 2, unit: "", isOptional: false },
      { name: "Olive Oil", amount: 1/2, unit: "tbsp", isOptional: true },
      { name: "Salt", amount: 1/4, unit: "tsp", isOptional: true }
    ],
    instructions: [
      "Finely dice the onion(s). Wash the pepper, remove the seeds and finely dice. Halve the tomato(es), remove the seeds and dice finely. Coarsely grate the cheese. Mix all the ingredients in a bowl and season with salt.",
      "Heat a frying pan without oil over a medium heat. Place one tortilla in the pan, top with the cheese and vegetable mixture and cover with the second tortilla. After a few minutes, carefully flip the tortilla over with a spatula, turning it frequently.",
      "Once both sides are crispy brown and the cheese has melted, transfer to a board. Leave to rest for 2 minutes and cut into quarters with a knife. Drizzle with a little olive oil."
    ],
    nutrition: {
      basis: "1/4 der Gesamtmenge (2 Wraps)",
      calories: { value: 690, unit: "kcal" },
      carbohydrates: { value: 52, unit: "g" },
      fat: { value: 42, unit: "g" },
      protein: { value: 28, unit: "g" },
      micronutrients: {
        kalium: { value: 350, unit: "mg" },
        vitaminC: { value: 45, unit: "mg" },
        eisen: { value: 2.5, unit: "mg" },
        calcium: { value: 650, unit: "mg" },
        phosphor: { value: 550, unit: "mg" },
        vitaminA: { value: 0.18, unit: "mg" },
        magnesium: { value: 45, unit: "mg" },
        vitaminB12: { value: 0.0008, unit: "mg" },
        folat: { value: 40, unit: "µg" },
        vitaminE: { value: 1.5, unit: "mg" },
        zink: { value: 3.5, unit: "mg" },
        niacin: { value: 2.0, unit: "mg" },
        vitaminK1: { value: 10, unit: "µg" },
        riboflavin: { value: 0.4, unit: "mg" },
        pyridoxin: { value: 0.2, unit: "mg" }
      }
    }
  },

  {
    id: "mushroom-omlette",
    name: "Omelette with mushrooms",
    image: "https://www.einfachkochen.de/sites/einfachkochen.de/files/styles/973_730/public/2022-06/2022_omelett-mit-pilzen-und-zwiebeln_aufmacher.jpg?h=4521fff0&itok=4eryv9u2",
    prepTime: "20 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Eggs", amount: 4, unit: "", isOptional: false },
      { name: "Pepper", amount: 1, unit: "pinch", isOptional: true },
      { name: "Champignons", amount: 1/4, unit: "Clove", isOptional: false },
      { name: "Butter", amount: 1, unit: "tbsp", isOptional: false },
      { name: "Onion", amount: 1, unit: "", isOptional: true },
      { name: "Oil", amount: 2, unit: "tbsp", isOptional: true },
      { name: "Sugar", amount: 1, unit: "pinch", isOptional: true },
      { name: "Salt", amount: 2, unit: "pinches", isOptional: true },
      { name: "herbs", amount: 1, unit: "some", isOptional: true }
    ],
    instructions: [
      "For the mushroom omelette, whisk the eggs with the salt, pepper and butter flakes in a bowl until the butter has dissolved.",
      "Peel the onion, cut it in half and slice it into fine strips. Wash the mushrooms and cut into thin slices.",
      "Cut the chives into fine rolls. Heat the oil in a non-stick frying pan, sauté the mushrooms and onions, season with salt and sugar.",
      "Spread the mushrooms and onions over the omelette and serve sprinkled with chives."
    ],
    nutrition: {
      basis: "Gesamtes Rezept",
      calories: { value: 610, unit: "kcal" },
      carbohydrates: { value: 10, unit: "g" },
      fat: { value: 52, unit: "g" },
      protein: { value: 30, unit: "g" },
      micronutrients: {
        kalium: { value: 650, unit: "mg" },
        vitaminC: { value: 5, unit: "mg" },
        eisen: { value: 3.5, unit: "mg" },
        calcium: { value: 120, unit: "mg" },
        phosphor: { value: 450, unit: "mg" },
        vitaminA: { value: 0.35, unit: "mg" },
        magnesium: { value: 45, unit: "mg" },
        vitaminB12: { value: 0.0024, unit: "mg" },
        folat: { value: 90, unit: "µg" },
        vitaminE: { value: 3.0, unit: "mg" },
        zink: { value: 3.2, unit: "mg" },
        niacin: { value: 5.0, unit: "mg" },
        vitaminK1: { value: 5, unit: "µg" },
        riboflavin: { value: 1.0, unit: "mg" },
        pyridoxin: { value: 0.3, unit: "mg" }
      }
    }
  },

  {
    id: "tomato-gnocchi",
    name: "Gnocchi in creamy tomato sauce",
    image: "https://assets.happyplates.com/media/1351/happy-plates-rezept-gnocchi-in-cremiger-tomatensauce-stabmixer-last-minute-laktosefrei-vegetarisch-vegan-fuer-kinder-hauptspeisen-easy-italienisch-1f37e9bc.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "20 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Gnocchi", amount: 250, unit: "g", isOptional: false },
      { name: "Tomato", amount: 2, unit: "", isOptional: false },
      { name: "Dried Tomatoes in Oil", amount: 20, unit: "g", isOptional: false },
      { name: "Cooking Cream", amount: 50, unit: "ml", isOptional: false },
      { name: "Basil", amount: 3, unit: "g", isOptional: true },
      { name: "Water", amount: 2, unit: "tbsp", isOptional: false },
      { name: "Olive Oil", amount: 2, unit: "tsp", isOptional: false },
      { name: "Salt", amount: 1, unit: "pinch", isOptional: true },
      { name: "Pepper", amount: 1, unit: "pinch", isOptional: true }
    ],
    instructions: [
      "Drain the pickled dried tomatoes and purée them together with the cooking cream, basil (leave some for garnish), water and a pinch of salt and pepper.",
      "Heat the oil in a pan and fry the gnocchi for approx. 5 minutes until golden brown.",
      "Wash and quarter the tomatoes. Remove the core and cut the quarters into fine cubes.",
      "Add the tomato sauce and the diced tomatoes to the gnocchi in the pan and mix well.",
      "Divide the gnocchi between deep plates and garnish with the remaining basil."
    ],
    nutrition: {
      basis: "1/2 der Gesamtmenge",
      calories: { value: 420, unit: "kcal" },
      carbohydrates: { value: 72, unit: "g" },
      fat: { value: 8, unit: "g" },
      protein: { value: 13, unit: "g" },
      micronutrients: {
        kalium: { value: 450, unit: "mg" },
        vitaminC: { value: 20, unit: "mg" },
        eisen: { value: 1.8, unit: "mg" },
        calcium: { value: 80, unit: "mg" },
        phosphor: { value: 150, unit: "mg" },
        vitaminA: { value: 0.08, unit: "mg" },
        magnesium: { value: 45, unit: "mg" },
        vitaminB12: { value: 0.0002, unit: "mg" },
        folat: { value: 40, unit: "µg" },
        vitaminE: { value: 2.0, unit: "mg" },
        zink: { value: 0.9, unit: "mg" },
        niacin: { value: 2.5, unit: "mg" },
        vitaminK1: { value: 10, unit: "µg" },
        riboflavin: { value: 0.1, unit: "mg" },
        pyridoxin: { value: 0.3, unit: "mg" }
      }
    }
  },

  {
    id: "potato-fart",
    name: "Potato tart with strudel dough",
    image: "https://assets.happyplates.com/media/1848/kartoffeltarte-mit-strudelteig-1635182879884.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "45 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Potato", amount: 500, unit: "g", isOptional: false },
      { name: "Butter", amount: 25, unit: "g", isOptional: false },
      { name: "Cheese", amount: 50, unit: "g", isOptional: false },
      { name: "Strudel Dough", amount: 1, unit: "piece", isOptional: false },
      { name: "Whipping Cream", amount: 250, unit: "ml", isOptional: false },
      { name: "Salt", amount: 1, unit: "pinch", isOptional: true },
      { name: "Pepper", amount: 1, unit: "pinch", isOptional: true }
    ],
    instructions: [
      "Preheat the oven to 150 °C top/bottom heat (130 °C convection oven).",
      "Grease a baking tin with approx. 1 tsp butter.",
      "Coarsely grate the mountain cheese.",
      "Peel the potatoes, wash and slice thinly. Mix with the cream, mountain cheese, salt and pepper in a bowl.",
      "Place the thin sheets of strudel dough in the tin so that they overlap and the edges hang over slightly. Brush the layers with the remaining butter.",
      "Pour the potato mixture onto the dough, fold the overhanging dough edges inwards and bake in the oven for approx. 40 minutes."
    ],
    nutrition: {
      basis: "1/2 der Gesamtmenge",
      calories: { value: 780, unit: "kcal" },
      carbohydrates: { value: 82, unit: "g" },
      fat: { value: 46, unit: "g" },
      protein: { value: 16, unit: "g" },
      micronutrients: {
        kalium: { value: 700, unit: "mg" },
        vitaminC: { value: 20, unit: "mg" },
        eisen: { value: 2.0, unit: "mg" },
        calcium: { value: 250, unit: "mg" },
        phosphor: { value: 280, unit: "mg" },
        vitaminA: { value: 0.35, unit: "mg" },
        magnesium: { value: 50, unit: "mg" },
        vitaminB12: { value: 0.0005, unit: "mg" },
        folat: { value: 55, unit: "µg" },
        vitaminE: { value: 2.5, unit: "mg" },
        zink: { value: 1.5, unit: "mg" },
        niacin: { value: 4.5, unit: "mg" },
        vitaminK1: { value: 12, unit: "µg" },
        riboflavin: { value: 0.3, unit: "mg" },
        pyridoxin: { value: 0.5, unit: "mg" }
      }
    }
  },

  {
    id: "caponata-di-melanzane",
    name: "Caponata di Melanzane",
    image: "https://assets.happyplates.com/media/1753/happy-plates-rezept-caponata-di-melanzane-gesund-vegan-leichte-kueche-vegetarisch-to-go-vorspeisen-medium-mediterran-c6d7a983.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "35 min",
    difficulty: "Medium",
    ingredients: [
      { name: "Paprika", amount: 1, unit: "", isOptional: false },
      { name: "Eggplant", amount: 0.5, unit: "", isOptional: false },
      { name: "Celery", amount: 25, unit: "g", isOptional: false },
      { name: "Tomato", amount: 1.5, unit: "", isOptional: false },
      { name: "Onion", amount: 0.5, unit: "", isOptional: false },
      { name: "Garlic", amount: 0.5, unit: "Clove", isOptional: true },
      { name: "Olives", amount: 12.5, unit: "g", isOptional: true },
      { name: "Capers", amount: 1, unit: "tsp", isOptional: true },
      { name: "Pine Nuts", amount: 10, unit: "g", isOptional: false },
      { name: "Basil", amount: 5, unit: "g", isOptional: true },
      { name: "Dried Oregano", amount: 0.5, unit: "tsp", isOptional: false },
      { name: "Sugar", amount: 0.5, unit: "tbsp", isOptional: true },
      { name: "Olive Oil", amount: 2, unit: "tbsp", isOptional: false },
      { name: "White Wine Vinegar", amount: 2, unit: "tbsp", isOptional: true },
      { name: "Salt", amount: 1, unit: "pinch", isOptional: true },
      { name: "Pepper", amount: 1, unit: "pinch", isOptional: true }
    ],
    instructions: [
      "Wash the paprikas and celery and cut into 1.5 cm pieces. Wash the eggplant and also cut into 1.5 cm cubes.",
      "Blanch tomatoes in boiling water, peel and dice. Peel and finely dice the onion and garlic.",
      "Roast pine nuts in a pan without oil until golden brown.",
      "Sauté paprikas and celery in 1 tbsp olive oil for 5 minutes, then remove from the pan.",
      "Fry eggplant in 1 tbsp olive oil until brown, then remove.",
      "Sauté diced tomatoes, onion, garlic, olives, capers, oregano, sugar, and vinegar. Add all vegetables back, simmer for 10 minutes. Garnish with basil and pine nuts."
    ],
    nutrition: {
      basis: "1/4 der Gesamtmenge",
      calories: { value: 240, unit: "kcal" },
      carbohydrates: { value: 31, unit: "g" }, // 24g + 7g Ballaststoffe
      fat: { value: 14, unit: "g" },
      protein: { value: 5, unit: "g" },
      micronutrients: {
        kalium: { value: 600, unit: "mg" },
        vitaminC: { value: 65, unit: "mg" },
        eisen: { value: 2.2, unit: "mg" },
        calcium: { value: 60, unit: "mg" },
        phosphor: { value: 110, unit: "mg" },
        vitaminA: { value: 0.35, unit: "mg" },
        magnesium: { value: 55, unit: "mg" },
        folat: { value: 45, unit: "µg" },
        vitaminE: { value: 5.5, unit: "mg" },
        zink: { value: 1.2, unit: "mg" },
        niacin: { value: 2.0, unit: "mg" },
        vitaminK1: { value: 30, unit: "µg" },
        riboflavin: { value: 0.1, unit: "mg" },
        pyridoxin: { value: 0.3, unit: "mg" }
      }
    }
  },

  {
    id: "vegetable-white-bean-soup",
    name: "Seasonal Vegetable Soup with White Beans",
    image: "https://assets.happyplates.com/media/1785/saisonale-gemuesesuppe-mit-weissen-bohnen-1634304977138.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "2 hours",
    difficulty: "Easy",
    ingredients: [
      { name: "Onion", amount: 1, unit: "", isOptional: true },
      { name: "Garlic", amount: 2, unit: "Cloves", isOptional: true },
      { name: "Rosemary", amount: 2.5, unit: "g", isOptional: true },
      { name: "Carrot", amount: 1.5, unit: "", isOptional: false },
      { name: "Courgette", amount: 0.5, unit: "", isOptional: false },
      { name: "Paprika", amount: 0.5, unit: "", isOptional: false },
      { name: "Hokkaido Pumpkin", amount: 150, unit: "g", isOptional: false },
      { name: "Spinach", amount: 75, unit: "g", isOptional: false },
      { name: "White Beans", amount: 150, unit: "g", isOptional: false },
      { name: "Olive Oil", amount: 2, unit: "tbsp", isOptional: false },
      { name: "Lemon", amount: 0.5, unit: "", isOptional: false },
      { name: "White Wine", amount: 50, unit: "ml", isOptional: true },
      { name: "Vegetable Stock", amount: 350, unit: "ml", isOptional: false },
      { name: "Feta", amount: 50, unit: "g", isOptional: true },
      { name: "Chili", amount: 1, unit: "pinch", isOptional: true },
      { name: "Salt", amount: 1, unit: "pinch", isOptional: true },
      { name: "Pepper", amount: 1, unit: "pinch", isOptional: true }
    ],
    instructions: [
      "Soak beans overnight if using dried ones. Dice onion and garlic, sauté in olive oil.",
      "Add diced carrots, pumpkin, courgette, and rosemary. Season with salt and chili.",
      "Deglaze with white wine and add vegetable stock. Cook for 45 minutes.",
      "Add beans and spinach, cook for another 10 minutes.",
      "Finish with lemon juice and crumble feta on top before serving."
    ],
    nutrition: {
      basis: "1/2 der Gesamtmenge (inkl. weißer Bohnen)",
      calories: { value: 820, unit: "kcal" },
      carbohydrates: { value: 116, unit: "g" }, // 88g + 28g Ballaststoffe
      fat: { value: 35, unit: "g" },
      protein: { value: 38, unit: "g" },
      micronutrients: {
        kalium: { value: 950, unit: "mg" },
        vitaminC: { value: 60, unit: "mg" },
        eisen: { value: 5.5, unit: "mg" },
        calcium: { value: 220, unit: "mg" },
        phosphor: { value: 320, unit: "mg" },
        vitaminA: { value: 1.2, unit: "mg" },
        magnesium: { value: 120, unit: "mg" },
        vitaminB12: { value: 0.0003, unit: "mg" },
        folat: { value: 160, unit: "µg" },
        vitaminE: { value: 4.5, unit: "mg" },
        zink: { value: 3.2, unit: "mg" },
        niacin: { value: 3.5, unit: "mg" },
        vitaminK1: { value: 350, unit: "µg" },
        riboflavin: { value: 0.3, unit: "mg" },
        pyridoxin: { value: 0.6, unit: "mg" }
      }
    }
  },

  {
    id: "smashed-crispy-potatoes",
    name: "Smashed Crispy Potatoes",
    image: "https://assets.happyplates.com/media/2382/happy-plates-rezept-smashed-crispy-potatos-vegetarisch-glutenfrei-fur-kinder-low-sugar-gesund-43046.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "45 min",
    difficulty: "Medium",
    ingredients: [
      { name: "Potato", amount: 500, unit: "g", isOptional: false },
      { name: "garlic", amount: 1, unit: "Clove", isOptional: true },
      { name: "Olive Oil", amount: 4, unit: "tbsp", isOptional: false },
      { name: "Dried Rosemary", amount: 0.5, unit: "g", isOptional: true },
      { name: "Fresh Thyme", amount: 4, unit: "g", isOptional: true },
      { name: "Parmesan", amount: 30, unit: "g", isOptional: false },
      { name: "Pesto Genovese", amount: 25, unit: "g", isOptional: false },
      { name: "Pecans", amount: 10, unit: "g", isOptional: true },
      { name: "Pine Nuts", amount: 20, unit: "g", isOptional: true },
      { name: "Fresh Basil", amount: 4, unit: "g", isOptional: true },
      { name: "Salt", amount: 1, unit: "tsp", isOptional: true },
      { name: "Pepper", amount: 1, unit: "pinch", isOptional: true }
    ],
    instructions: [
      "Boil potatoes in salted water until tender. Mix 2.5 tbsp olive oil with pressed garlic and rosemary.",
      "Roast chopped pecans and pine nuts in a pan. Preheat oven to 220°C.",
      "Place potatoes on a tray and smash them with a glass. Drizzle with oil and sprinkle with half the parmesan.",
      "Bake for 20 minutes. Top with pesto, remaining cheese, and nuts before serving."
    ],
    nutrition: {
      basis: "Gesamtes Rezept",
      calories: { value: 1180, unit: "kcal" },
      carbohydrates: { value: 95, unit: "g" },
      fat: { value: 82, unit: "g" },
      protein: { value: 22, unit: "g" },
      micronutrients: {
        kalium: { value: 1200, unit: "mg" },
        vitaminC: { value: 30, unit: "mg" },
        eisen: { value: 3.5, unit: "mg" },
        calcium: { value: 250, unit: "mg" },
        phosphor: { value: 450, unit: "mg" },
        vitaminA: { value: 0.15, unit: "mg" },
        magnesium: { value: 110, unit: "mg" },
        vitaminB12: { value: 0.0004, unit: "mg" },
        folat: { value: 80, unit: "µg" },
        vitaminE: { value: 5.5, unit: "mg" },
        zink: { value: 2.8, unit: "mg" },
        niacin: { value: 7.5, unit: "mg" },
        vitaminK1: { value: 40, unit: "µg" },
        riboflavin: { value: 0.3, unit: "mg" },
        pyridoxin: { value: 1.2, unit: "mg" }
      }
    }
  },

  {
    id: "garlic-flatbread",
    name: "Quick Flatbread with Garlic Oil",
    image: "https://assets.happyplates.com/media/1760/happy-plates-rezept-schnelles-fladenbrot-mit-knoblauchoel-vegetarisch-grillpfanne-brot-and-gebaeck-easy-orientalisch-cdd00162.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "30 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Flour", amount: 62.5, unit: "g", isOptional: false },
      { name: "Baking Powder", amount: 0.125, unit: "tsp", isOptional: false },
      { name: "Greek Yogurt", amount: 62.5, unit: "g", isOptional: false },
      { name: "Garlic", amount: 0.5, unit: "Clove", isOptional: true },
      { name: "Parsley", amount: 1.25, unit: "g", isOptional: true },
      { name: "Olive Oil", amount: 0.75, unit: "tbsp", isOptional: false },
      { name: "Salt", amount: 1, unit: "pinch", isOptional: true }
    ],
    instructions: [
      "Mix chopped garlic and parsley with olive oil. Knead flour, baking powder, yogurt, and salt into a dough.",
      "Divide dough into balls and roll out thinly. Fry in a hot pan without oil for 2 minutes per side.",
      "Brush with garlic oil immediately while hot."
    ],
    nutrition: {
      basis: "1/4 der Gesamtmenge",
      calories: { value: 330, unit: "kcal" },
      carbohydrates: { value: 48, unit: "g" },
      fat: { value: 11, unit: "g" },
      protein: { value: 9, unit: "g" },
      micronutrients: {
        kalium: { value: 150, unit: "mg" },
        vitaminC: { value: 3, unit: "mg" },
        eisen: { value: 1.5, unit: "mg" },
        calcium: { value: 110, unit: "mg" },
        phosphor: { value: 150, unit: "mg" },
        vitaminA: { value: 0.015, unit: "mg" },
        magnesium: { value: 30, unit: "mg" },
        vitaminB12: { value: 0.0001, unit: "mg" },
        folat: { value: 25, unit: "µg" },
        vitaminE: { value: 1.0, unit: "mg" },
        zink: { value: 0.9, unit: "mg" },
        niacin: { value: 2.0, unit: "mg" },
        vitaminK1: { value: 5, unit: "µg" },
        riboflavin: { value: 0.1, unit: "mg" },
        pyridoxin: { value: 0.1, unit: "mg" }
      }
    }
  },

  {
    id: "indian-cauliflower-curry",
    name: "Indian Sweet Potato and Cauliflower Curry",
    image: "https://assets.happyplates.com/media/1368/happy-plates-rezept-schnelles-aloo-gobi-indisches-suesskartoffel-karfiol-curry-vegetarisch-vegan-glutenfrei-low-carb-laktosefrei-leichte-kueche-hauptspeisen-easy-indisch-3f2c5f6e.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "40 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Cauliflower", amount: 100, unit: "g", isOptional: false },
      { name: "Sweet Potato", amount: 50, unit: "g", isOptional: false },
      { name: "Onion", amount: 0.25, unit: "", isOptional: true },
      { name: "Indian Curry Paste", amount: 1, unit: "tbsp", isOptional: false },
      { name: "Sesame Seeds", amount: 0.5, unit: "tbsp", isOptional: true },
      { name: "Oil", amount: 0.5, unit: "tbsp", isOptional: false },
      { name: "Water", amount: 12.5, unit: "ml", isOptional: false },
      { name: "Coriander", amount: 2.5, unit: "g", isOptional: true },
      { name: "Salt", amount: 1, unit: "pinch", isOptional: false }
    ],
    instructions: [
      "Cut cauliflower and sweet potato into bite-sized pieces. Boil cauliflower for 5 minutes.",
      "Sauté onion and curry paste in oil. Stir in the cooked vegetables and add water.",
      "Simmer for 10 minutes, garnish with coriander and sesame seeds."
    ],
    nutrition: {
      basis: "1/2 der Gesamtmenge",
      calories: { value: 490, unit: "kcal" },
      carbohydrates: { value: 75, unit: "g" },
      fat: { value: 16, unit: "g" },
      protein: { value: 9, unit: "g" },
      micronutrients: {
        kalium: { value: 750, unit: "mg" },
        vitaminC: { value: 65, unit: "mg" },
        eisen: { value: 2.5, unit: "mg" },
        calcium: { value: 80, unit: "mg" },
        phosphor: { value: 150, unit: "mg" },
        vitaminA: { value: 1.2, unit: "mg" },
        magnesium: { value: 55, unit: "mg" },
        folat: { value: 75, unit: "µg" },
        vitaminE: { value: 2.0, unit: "mg" },
        zink: { value: 1.2, unit: "mg" },
        niacin: { value: 2.5, unit: "mg" },
        vitaminK1: { value: 20, unit: "µg" },
        riboflavin: { value: 0.15, unit: "mg" },
        pyridoxin: { value: 0.5, unit: "mg" }
      }
    }
  },

  {
    id: "spaghetti-crudaiola",
    name: "No-cook Tomato Sauce (Spaghetti alla Crudaiola)",
    image: "https://assets.happyplates.com/media/2417/happy-plates-rezept-no-cook-tomato-sauce-spaghetti-alla-crudaiola-rohkost-leichte-kuche-vegetarisch-vegan-low-sugar-43097.jpg?twic=v1/quality=80/focus=50px50p/cover=2:3/resize=640",
    prepTime: "45 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Tomato", amount: 125, unit: "g", isOptional: false },
      { name: "Spaghetti", amount: 100, unit: "g", isOptional: false },
      { name: "Garlic", amount: 0.5, unit: "Clove", isOptional: true },
      { name: "Basil", amount: 2.5, unit: "g", isOptional: true },
      { name: "Olive Oil", amount: 0.5, unit: "tbsp", isOptional: true },
      { name: "Salt", amount: 0.5, unit: "tsp", isOptional: true }
    ],
    instructions: [
      "Halve tomatoes, remove seeds and dice. Mix with garlic, oil, and salt, let it sit for 30 minutes.",
      "Cook spaghetti, toss with the raw tomato sauce and fresh basil.",
      "Remove large garlic slices before serving."
    ],
    nutrition: {
      basis: "1/2 der Gesamtmenge",
      calories: { value: 410, unit: "kcal" },
      carbohydrates: { value: 22, unit: "g" },
      fat: { value: 32, unit: "g" },
      protein: { value: 6, unit: "g" },
      micronutrients: {
        kalium: { value: 500, unit: "mg" },
        vitaminC: { value: 55, unit: "mg" },
        eisen: { value: 2.5, unit: "mg" },
        calcium: { value: 40, unit: "mg" },
        phosphor: { value: 200, unit: "mg" },
        vitaminA: { value: 0.25, unit: "mg" },
        magnesium: { value: 60, unit: "mg" },
        folat: { value: 50, unit: "µg" },
        vitaminE: { value: 3.5, unit: "mg" },
        zink: { value: 1.2, unit: "mg" },
        niacin: { value: 4.5, unit: "mg" },
        vitaminK1: { value: 20, unit: "µg" },
        riboflavin: { value: 0.15, unit: "mg" },
        pyridoxin: { value: 0.35, unit: "mg" }
      }
    }
  },

  {
    id: "tofu-broccoli-stir-fry",
    name: "Crispy Tofu & Broccoli Stir-Fry",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
    prepTime: "25 min",
    difficulty: "Medium",
    ingredients: [
      { name: "Tofu", amount: 200, unit: "g", isOptional: false },
      { name: "Broccoli", amount: 150, unit: "g", isOptional: false },
      { name: "Rice", amount: 100, unit: "g", isOptional: false },
      { name: "Garlic", amount: 1, unit: "Clove", isOptional: false },
      { name: "Ginger", amount: 1, unit: "piece", isOptional: true },
      { name: "Soy Sauce", amount: 2, unit: "tbsp", isOptional: false },
      { name: "Sesame Oil", amount: 1, unit: "tsp", isOptional: true },
      { name: "Oil", amount: 2, unit: "tbsp", isOptional: false }
    ],
    instructions: [
      "Cook the rice according to the package instructions.",
      "Cut the tofu into cubes and pat dry with paper towels. Cut the broccoli into small florets.",
      "Heat oil in a wok or large pan. Fry the tofu until crispy, then remove.",
      "Briefly sauté garlic and ginger, then add broccoli and a splash of water. Cook for 5 minutes.",
      "Return the tofu to the pan, add soy sauce and sesame oil. Mix well.",
      "Serve hot over rice."
    ],
    nutrition: {
      basis: "Gesamtes Rezept (Schätzung)",
      calories: { value: 615, unit: "kcal" },
      carbohydrates: { value: 85, unit: "g" }, // Reis + Ballaststoffe
      fat: { value: 18, unit: "g" },
      protein: { value: 28, unit: "g" },
      micronutrients: {
        kalium: { value: 700, unit: "mg" },
        vitaminC: { value: 90, unit: "mg" },
        eisen: { value: 4.2, unit: "mg" },
        calcium: { value: 310, unit: "mg" },
        phosphor: { value: 280, unit: "mg" },
        vitaminA: { value: 0.12, unit: "mg" },
        magnesium: { value: 80, unit: "mg" },
        folat: { value: 80, unit: "µg" },
        vitaminE: { value: 2.5, unit: "mg" },
        zink: { value: 2.0, unit: "mg" },
        niacin: { value: 3.5, unit: "mg" },
        vitaminK1: { value: 150, unit: "µg" },
        riboflavin: { value: 0.25, unit: "mg" },
        pyridoxin: { value: 0.45, unit: "mg" }
      }
    }
  },

  {
    id: "vegetable-noodle-soup",
    name: "Vegetable-Noodle Soup",
    image: "https://img.chefkoch-cdn.de/rezepte/1216191227256817/bilder/764994/crop-640x427/15-minuten-gemuese-nudel-suppe.jpg",
    prepTime: "15 min",
    difficulty: "easy",
    ingredients: [
    { name: "Vegetable Stock", amount: 6/4, unit: "liter", isOptional: false },
    { name: "Pasta", amount: 100, unit: "g", isOptional: false },
    { name: "Onion", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Carrot", amount: 2, unit: "Piece(s)", isOptional: false },
    { name: "Zucchini", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Bell Pepper", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Tomato", amount: 4, unit: "Piece(s)", isOptional: false },
    { name: "Pepper", amount:  1, unit: "teaspoon", isOptional: true },
    { name: "herbs", amount:  0, unit: "stems", isOptional: false },
    { name: "Parsley", amount:  1, unit: "pack", isOptional: false },
    { name: "Oil", amount:  1, unit: "flask", isOptional: false }
    ],
    instructions: ["Peel the onions", "Chop the onions", "saute Onions in hot Oil","Add vegetable broth", "Bring the mixture to a boil", "Peel the carrots","Wash the zucchini, bell pepper and tomatoes", "Cut the bell pepper and the tomatoes into small cubes","Slice the zucchini and the carrots into small slices", "Add the carrots to the broth and boil for two minutes", "Add the noodles and zucchini","Cook the mixture until firm on the bite","Add the bell pepper and tomatoes", "Season the mix after your liking", "Serve with chives and parsley"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 240, unit: "kcal" },
      carbohydrates: { value: 29.82, unit: "g" },
      fat: { value: 9.29, unit: "g" },
      protein: { value: 8.35, unit: "g" },
      micronutrients: {
        kalium: { value: 650, unit: "mg" },
        vitaminC: { value: 45, unit: "mg" },
        eisen: { value: 2.0, unit: "mg" },
        calcium: { value: 60, unit: "mg" },
        phosphor: { value: 120, unit: "mg" },
        vitaminA: { value: 0.4, unit: "mg" },
        magnesium: { value: 40, unit: "mg" },
        folat: { value: 60, unit: "µg" },
        vitaminE: { value: 2.5, unit: "mg" },
        zink: { value: 0.8, unit: "mg" },
        niacin: { value: 2.5, unit: "mg" },
        vitaminK1: { value: 40, unit: "µg" },
        riboflavin: { value: 0.1, unit: "mg" },
        pyridoxin: { value: 0.3, unit: "mg" }
      }
    }
    },
    {
    id: "cauliflower-sweet-potato-casserole",
    name: "Cauliflower-Sweet-Potato Casserole",
    image: "https://img.chefkoch-cdn.de/rezepte/3297011489509463/bilder/1395219/crop-640x427/blumenkohl-suesskartoffel-auflauf.jpg",
    prepTime: "20 min",
    difficulty: "normal",
    ingredients: [
    { name: "Cauliflower", amount: 250, unit: "g", isOptional: false },
    { name: "Sweet Potato", amount: 250, unit: "g", isOptional: false },
    { name: "Potato", amount: 150, unit: "g", isOptional: false },
    { name: "Butter", amount: 1, unit: "tablespoon", isOptional: false },
    { name: "Flour", amount: 1, unit: "tablespoon", isOptional: false },
    { name: "Vegetable Stock", amount: 125, unit: "ml", isOptional: false },
    { name: "Horseradish", amount: 1, unit: "teaspoon", isOptional: false },
    { name: "Salt", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Pepper", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Nutmeg", amount: 1, unit: "nut", isOptional: true },
    { name: "Lemon Pepper", amount: 2, unit: "teaspoons", isOptional: true },
    { name: "Whipping Cream", amount: 100, unit: "g", isOptional: true },
    { name: "Rubbed Cheese", amount: 80, unit: "g", isOptional: false },
    { name: "Fat", amount: 400, unit: "g", isOptional: false }
    ],
    instructions: ["Peel the onions", "Chop the onions", "saute Onions in hot Oil","Add vegetable broth", "Bring the mixture to a boil", "Peel the carrots","Wash the zucchini, bell pepper and tomatoes", "Cut the bell pepper and the tomatoes into small cubes","Slice the zucchini and the carrots into small slices", "Add the carrots to the broth and boil for two minutes", "Add the noodles and zucchini","Cook the mixture until firm on the bite","Add the bell pepper and tomatoes", "Season the mix after your liking", "Serve with chives and parsley"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 540, unit: "kcal" },
      carbohydrates: { value: 57, unit: "g" },
      fat: { value: 26, unit: "g" },
      protein: { value: 21, unit: "g" },
      micronutrients: {
        kalium: { value: 950, unit: "mg" },
        vitaminC: { value: 65, unit: "mg" },
        eisen: { value: 2.5, unit: "mg" },
        calcium: { value: 280, unit: "mg" },
        phosphor: { value: 320, unit: "mg" },
        vitaminA: { value: 0.95, unit: "mg" },
        magnesium: { value: 65, unit: "mg" },
        vitaminB12: { value: 0.0004, unit: "mg" },
        folat: { value: 85, unit: "µg" },
        vitaminE: { value: 1.5, unit: "mg" },
        zink: { value: 1.8, unit: "mg" },
        niacin: { value: 3.5, unit: "mg" },
        vitaminK1: { value: 25, unit: "µg" },
        riboflavin: { value: 0.3, unit: "mg" },
        pyridoxin: { value: 0.6, unit: "mg" }
      }
    }
    },
    {
    id: "vegetarian-filled-cannelloni",
    name: "Vegetarian Filled Cannelloni",
    image: "https://img.chefkoch-cdn.de/rezepte/2318261369582873/bilder/672388/crop-640x427/vegetarisch-gefuellte-cannelloni.jpg",
    prepTime: "35 min",
    difficulty: "easy",
    ingredients: [
    { name: "Cannelloni", amount: 20, unit: "Piece(s)", isOptional: false },
    { name: "Mozzarella", amount: 550, unit: "g", isOptional: false },
    { name: "Onion", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Garlic", amount: 3, unit: "Cloves", isOptional: false },
    { name: "Olive Oil", amount: 1, unit: "tablespoon", isOptional: false },
    { name: "Tomato", amount: 500, unit: "g", isOptional: false },
    { name: "Whipping Cream", amount: 250, unit: "g", isOptional: false },
    { name: "Salt", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Pepper", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Chili", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Spinach", amount: 600, unit: "g", isOptional: false },
    { name: "Nutmeg", amount: 1, unit: "Nut", isOptional: true }
    ],
    instructions: ["Peel the onions", "Chop the onions and garlic into small cubes", "Heat up Olive Oil in a small pot","Saute the onions and garlic in the pot", "Deglaze the pot with pureed tomatoes", "Add the whipping Cream","Cook the pot with low heat", "Season with pepper, salt and pepper","Taw the spinach and cook it up", "Shake the water from the spinach up and add 250g mozzarella", "Season with salt, pepper and nutmeg","Drain 300g mozzarella and cut it into small cubes","Use a spoon to fill the cannelloni with the spinach-mozzarella mixture", "Lay the filled cannelloni next to each other in a casserole dish", "Pour the sauce over the cannelloni evenly","Add the small mozzarella cubes onto the cannelloni evenly","Bake the cannelloni for 30 minutes 200°C two-sided heat", "Bake the casserole on the grill for two more minutes on the grill"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 1100, unit: "kcal" },
      carbohydrates: { value: 78, unit: "g" },
      fat: { value: 78, unit: "g" },
      protein: { value: 40, unit: "g" },
      micronutrients: {
        kalium: { value: 850, unit: "mg" },
        vitaminC: { value: 35, unit: "mg" },
        eisen: { value: 4.5, unit: "mg" },
        calcium: { value: 650, unit: "mg" },
        phosphor: { value: 550, unit: "mg" },
        vitaminA: { value: 0.45, unit: "mg" },
        magnesium: { value: 110, unit: "mg" },
        vitaminB12: { value: 0.0012, unit: "mg" },
        folat: { value: 140, unit: "µg" },
        vitaminE: { value: 3.5, unit: "mg" },
        zink: { value: 4.2, unit: "mg" },
        niacin: { value: 3.0, unit: "mg" },
        vitaminK1: { value: 350, unit: "µg" },
        riboflavin: { value: 0.6, unit: "mg" },
        pyridoxin: { value: 0.5, unit: "mg" }
      }
    }
    },
    {
    id: "chick-pea-bowl",
    name: "Chick-Pea Bowl",
    image: "https://img.chefkoch-cdn.de/rezepte/3481871518851063/bilder/1471302/crop-640x427/bunte-kichererbsen-bowl.jpg",
    prepTime: "10 min",
    difficulty: "easy",
    ingredients: [
    { name: "Potato", amount: 600, unit: "g", isOptional: false },
    { name: "Bell Pepper", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Oil", amount: 1, unit: "flask", isOptional: false },
    { name: "Salt", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Pepper", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Garlic Powder", amount:  1, unit: "teaspoon", isOptional: false },
    { name: "Salad", amount: 1, unit: "head", isOptional: true },
    { name: "Salsa", amount: 1, unit: "flask", isOptional: true },
    { name: "Avocado", amount: 2, unit: "Piece(s)", isOptional: true },
    { name: "Chickpeas", amount: 265, unit: "g", isOptional: false },
    { name: "Paprika Powder", amount: 1/2, unit: "teaspoon", isOptional: false },
    { name: "Cayenne Pepper", amount: 1/2, unit: "teaspoon", isOptional: false },
    { name: "Oregano", amount: 1/2, unit: "teaspoon", isOptional: false },
    { name: "Turmeric", amount: 1/4, unit: "teaspoon", isOptional: true },
    { name: "Broccoli", amount: 1, unit: "Piece(s)", isOptional: true },
    ],
    instructions: ["Cut the potatoes into small cubes", "Mix the potatoes with pepper, garlic powder and oil", "Position the potatoes on the baking tray in the back","Mix the chick-peas with a tablespoon oil, half a tablespoon salt, paprika powder, cayenne pepper, oregano and turmeric", "Position the chick-peas in front of the potatoes on the baking tray", "Fry th baking tray on 200°C for 40 minutes double-sided heat on the middle rail","Cut the broccoli int little rosses and season them withoil, salt, pepper and garlic powder", "Cut the paprika into little slices and position it in front of the chick peas on the baking try after twenty minutes","Position the seasoned broccoli on the tray too", "Bake until the wanted consistency and color is reached and serve in two seperate bowls"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 760, unit: "kcal" },
      carbohydrates: { value: 85, unit: "g" },
      fat: { value: 36, unit: "g" },
      protein: { value: 29, unit: "g" },
      micronutrients: {
        kalium: { value: 1400, unit: "mg" },
        vitaminC: { value: 110, unit: "mg" },
        eisen: { value: 6.5, unit: "mg" },
        calcium: { value: 150, unit: "mg" },
        phosphor: { value: 450, unit: "mg" },
        vitaminA: { value: 0.65, unit: "mg" },
        magnesium: { value: 160, unit: "mg" },
        folat: { value: 180, unit: "µg" },
        vitaminE: { value: 4.5, unit: "mg" },
        zink: { value: 3.5, unit: "mg" },
        niacin: { value: 6.0, unit: "mg" },
        vitaminK1: { value: 120, unit: "µg" },
        riboflavin: { value: 0.4, unit: "mg" },
        pyridoxin: { value: 1.1, unit: "mg" }
      }
    }
    },
    {
    id: "african-stew",
    name: "African Stew",
    image: "https://img.chefkoch-cdn.de/rezepte/3347651497529252/bilder/1561441/crop-640x427/afrikanisches-stew.jpg",
    prepTime: "15 min",
    difficulty: "easy",
    ingredients: [
    { name: "Tomato", amount: 6, unit: "Piece(s)", isOptional: false },
    { name: "Kidney Beans", amount: 250, unit: "g", isOptional: false },
    { name: "Onion", amount: 2, unit: "Piece(s)", isOptional: false },
    { name: "Peanut Butter", amount: 1, unit: "tablespoon", isOptional: false },
    { name: "Chili Sauce", amount: 2, unit: "teaspoons", isOptional: false },
    { name: "Cumin Powder", amount: 1, unit: "teaspoon", isOptional: false },
    { name: "Garlic", amount: 2, unit: "cloves", isOptional: false },
    { name: "Salt", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Oil", amount: 1, unit: "flask", isOptional: false },
    { name: "Couscous", amount: 1, unit: "pack", isOptional: true }
    ],
    instructions: ["Steam cubed onions in oil until they get a glassy texture","Cut the tomatoes into small cubes and add them to the onions","Simmer the mixture until the tomatoes get soft","Add cumin powder, peanut butter, chili sauce, drained beans, thin sliced garlic and salt","Let that simmer for three minutes","Serve with Couscous"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 510, unit: "kcal" },
      carbohydrates: { value: 68, unit: "g" },
      fat: { value: 21, unit: "g" },
      protein: { value: 16, unit: "g" },
      micronutrients: {
        kalium: { value: 950, unit: "mg" },
        vitaminC: { value: 40, unit: "mg" },
        eisen: { value: 4.0, unit: "mg" },
        calcium: { value: 70, unit: "mg" },
        phosphor: { value: 280, unit: "mg" },
        vitaminA: { value: 0.3, unit: "mg" },
        magnesium: { value: 90, unit: "mg" },
        folat: { value: 110, unit: "µg" },
        vitaminE: { value: 3.0, unit: "mg" },
        zink: { value: 2.2, unit: "mg" },
        niacin: { value: 5.5, unit: "mg" },
        vitaminK1: { value: 15, unit: "µg" },
        riboflavin: { value: 0.2, unit: "mg" },
        pyridoxin: { value: 0.5, unit: "mg" }
      }
    }
    },
    {
    id: "mango-lentil-salad-marinated-tofu",
    name: "Mango-Lentil-Salad with Marinated Tofu",
    image: "https://img.chefkoch-cdn.de/rezepte/3218701478967636/bilder/1094135/crop-960x640/mango-linsensalat-mit-mariniertem-tofu.jpg",
    prepTime: "30 min",
    difficulty: "normal",
    ingredients: [
    { name: "Tofu", amount: 300, unit: "g", isOptional: false },
    { name: "Lentils", amount: 100, unit: "g", isOptional: false },
    { name: "Mango", amount: 1 , unit: "Piece(s)", isOptional: false },
    { name: "Onion", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Coriander", amount: 1, unit: "bunch", isOptional: false },
    { name: "Oil", amount: 4, unit: "tablespoons", isOptional: false },
    { name: "Salt", amount:  2, unit: "teaspoons", isOptional: true },
    { name: "Pepper", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Ajvar", amount: 1, unit: "teaspoon", isOptional: false },
    { name: "Orange Juice", amount: 4, unit: "tablespoons", isOptional: false },
    { name: "Lemon Juice", amount: 4, unit: "tablespoons", isOptional: false },
    { name: "Soy Sauce", amount: 3, unit: "tablespoons", isOptional: false },
    { name: "Maple Sirup", amount: 1, unit: "tablespoon", isOptional: false },
    { name: "Peanut Butter", amount: 2, unit: "tablespoons", isOptional: false },
    { name: "Bread", amount: 1, unit: "Piece(s)", isOptional: true }
    ],
    instructions: ["Mix Ajvar, orange juice, lemon juice, soy sauce, maple sirup and peanut butter and puree the mix","Drain the tofu, cut it in small slices and soak it in half of the marinade", "Let the tofu marinade for at least three hours","Cook the Lentils in salty water with cover for fourty minutes", "Drain the lenses and let them cool","Peel the mangos and part the flesh from the stone","Cut the flesh into small cubes","Peel the onions and cut them into rings", "Wash the coriander and chop the leaves into small pieces","Mix the coriander, mango cubes, onion rings, the cooked lenses, two tablespoons sesame oil and the other hlaf of the marinade","Season the salad mixture with pepper and salt","Take the tofu out of the marinade","Heat up two tablespoons of oil in a pan","Fry the tofu golden brown from both sides","Serve the salad with the tofu salad","Add bread or baguette optionally"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 540, unit: "kcal" },
      carbohydrates: { value: 65, unit: "g" },
      fat: { value: 22, unit: "g" },
      protein: { value: 27, unit: "g" },
      micronutrients: {
        kalium: { value: 700, unit: "mg" },
        vitaminC: { value: 50, unit: "mg" },
        eisen: { value: 4.5, unit: "mg" },
        calcium: { value: 80, unit: "mg" },
        phosphor: { value: 350, unit: "mg" },
        vitaminA: { value: 0.25, unit: "mg" },
        magnesium: { value: 110, unit: "mg" },
        folat: { value: 140, unit: "µg" },
        vitaminE: { value: 3.5, unit: "mg" },
        zink: { value: 2.8, unit: "mg" },
        niacin: { value: 3.5, unit: "mg" },
        vitaminK1: { value: 35, unit: "µg" },
        riboflavin: { value: 0.2, unit: "mg" },
        pyridoxin: { value: 0.4, unit: "mg" }
      }
    }
    },
    {
    id: "udon-noodles",
    name: "Udon Noodles",
    image: "https://img.chefkoch-cdn.de/rezepte/3332911494861539/bilder/1468012/crop-960x640/schnelle-udon-nudeln.jpg",
    prepTime: "20 min",
    difficulty: "normal",
    ingredients: [
    { name: "Udon-Noodle", amount: 400, unit: "g", isOptional: false },
    { name: "Spinach", amount: 2, unit: "handfull", isOptional: false },
    { name: "Mushroom", amount: 6, unit: "Piece(s)", isOptional: false },
    { name: "Carrot", amount: 2, unit: "Piece(s)", isOptional: false },
    { name: "Onion", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Bell Pepper", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Oil", amount: 1, unit: "flask", isOptional: false },
    { name: "Soy Sauce", amount: 100, unit: "ml", isOptional: false },
    { name: "Water", amount: 100, unit: "ml", isOptional: false },
    { name: "Cane Sugar", amount: 2, unit: "tablespoons", isOptional: false },
    { name: "garlic", amount: 1, unit: "tablespoon", isOptional: false },
    { name: "Cornstarch", amount: 1, unit: "tablespoon", isOptional: false }
    ],
    instructions: ["Pour boiling water over the mushrooms and soak the mushrooms for at least an hour", "Drain the soaking water","Mix 100ml of the water with Soy Sauce, Cane Sugar, garlic and cornstarch", "Cut the mushrooms, bell peppers and onions into stripes","Dice the carrots", "Pour boiling water over the udon noodles","Drain the noodles after a minute and set them aside","Heat some oil in a pan and fry the carrots, bell peppers, onions and mushrooms","Wait until the bell peppers are cooked and add the udon noodles and the spinach","Stir and simmer until the mixture has thickened and the noodles are covered","Serve"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 580, unit: "kcal" },
      carbohydrates: { value: 83, unit: "g" },
      fat: { value: 18, unit: "g" },
      protein: { value: 22, unit: "g" },
      micronutrients: {
        kalium: { value: 450, unit: "mg" },
        vitaminC: { value: 30, unit: "mg" },
        eisen: { value: 3.5, unit: "mg" },
        calcium: { value: 60, unit: "mg" },
        phosphor: { value: 180, unit: "mg" },
        vitaminA: { value: 0.35, unit: "mg" },
        magnesium: { value: 55, unit: "mg" },
        folat: { value: 70, unit: "µg" },
        vitaminE: { value: 2.0, unit: "mg" },
        zink: { value: 1.5, unit: "mg" },
        niacin: { value: 4.5, unit: "mg" },
        vitaminK1: { value: 180, unit: "µg" },
        riboflavin: { value: 0.2, unit: "mg" },
        pyridoxin: { value: 0.4, unit: "mg" }
      }
    }
    },
    {
    id: "tortellini-pan",
    name: "Vegetarian Tortellini Pan",
    image: "https://img.chefkoch-cdn.de/rezepte/1504741255948809/bilder/1029421/crop-960x640/vegetarische-tortellini-pfanne.jpg",
    prepTime: "20 min",
    difficulty: "normal",
    ingredients: [
    { name: "Tortellini", amount: 1, unit: "pack", isOptional: false },
    { name: "Green Bean", amount: 2, unit: "handfull", isOptional: false },
    { name: "Broccoli", amount: 1/2, unit: "head", isOptional: false },
    { name: "Butter", amount: 400, unit: "g", isOptional: false },
    { name: "Leek Stalk", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Mushroom", amount: 200, unit: "g", isOptional: false },
    { name: "Garlic", amount: 2, unit: "Cloves", isOptional: false },
    { name: "Salt", amount: 2, unit: "teaspoons", isOptional: true },
    { name: "Pepper", amount: 1, unit: "teaspoon", isOptional: true },
    { name: "Chili Powder", amount: 2, unit: "teaspoons", isOptional: false },
    { name: "Vegetable Stock Powder", amount: 1, unit: "tablespoon", isOptional: false },
    { name: "Vegetable Cream", amount: 200, unit: "ml", isOptional: false },
    { name: "Cornstarch", amount: 1, unit: "pack", isOptional: true },
    { name: "Cherry Tomatoes", amount: 10, unit: "Piece(s)", isOptional: false },
    { name: "Parmesan", amount:  1, unit: "portion", isOptional: false }
    ],
    instructions: ["Cook the tortellini in salted water until the wanted consistency is reached", "Drain the tortellini","Cook the beans in salty water for eight minutes", "Add the broccoli florets for four minutes","Drain the vegetables and rinse them in cold water", "Heat the butter in a pan and saute the leek, mushrooms and chopped garlic cloves","Season with salt, pepper, chili and add vegetable stock powder","Deglaze with the vegetable cream and add the tortellini","Mix in the broccoli and the beans","Heat everything up","Thicken with cornstarch if necessary","Add the halved cherry tomatoes","Season with salt and pepper and serve with grated Parmesan cheese"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 540, unit: "kcal" },
      carbohydrates: { value: 67, unit: "g" },
      fat: { value: 20, unit: "g" },
      protein: { value: 22, unit: "g" },
      micronutrients: {
        kalium: { value: 750, unit: "mg" },
        vitaminC: { value: 45, unit: "mg" },
        eisen: { value: 3.5, unit: "mg" },
        calcium: { value: 250, unit: "mg" },
        phosphor: { value: 350, unit: "mg" },
        vitaminA: { value: 0.35, unit: "mg" },
        magnesium: { value: 75, unit: "mg" },
        vitaminB12: { value: 0.0008, unit: "mg" },
        folat: { value: 90, unit: "µg" },
        vitaminE: { value: 3.5, unit: "mg" },
        zink: { value: 2.5, unit: "mg" },
        niacin: { value: 4.0, unit: "mg" },
        vitaminK1: { value: 80, unit: "µg" },
        riboflavin: { value: 0.4, unit: "mg" },
        pyridoxin: { value: 0.4, unit: "mg" }
      }
    }
    },
    {
    id: "lensecurry-with-mango-and-coconut",
    name: "Lensecurry with Mango and Coconut",
    image: "https://img.chefkoch-cdn.de/rezepte/3228051480254449/bilder/1395598/crop-960x640/linsencurry-mit-mango-und-kokos.jpg",
    prepTime: "20 min",
    difficulty: "normal",
    ingredients: [
    { name: "Parsley", amount: 1, unit: "bundle", isOptional: false },
    { name: "Garlic", amount: 1, unit: "Clove", isOptional: false },
    { name: "Ginger", amount: 1, unit: "Piece(s)", isOptional: false },
    { name: "Shallot", amount: 4, unit: "Piece(s)", isOptional: false },
    { name: "Carrot", amount: 3, unit: "Piece(s)", isOptional: false },
    { name: "Butter", amount: 2, unit: "tablespoons", isOptional: false },
    { name: "Lenses", amount: 300, unit: "g", isOptional: false },
    { name: "Curry Powder", amount: 1, unit: "teaspoon", isOptional: false },
    { name: "Turmeric Powder", amount: 1, unit: "teaspoon", isOptional: false },
    { name: "Cumin Powder", amount: 1/2, unit: "teaspoons", isOptional: false },
    { name: "Vegetable Stock", amount: 400, unit: "ml", isOptional: false },
    { name: "Coconut Milk", amount: 150, unit: "ml", isOptional: false },
    { name: "Salt", amount: 1, unit: "teaspoon", isOptional: false },
    { name: "Pepper", amount: 1, unit: "teaspoon", isOptional: false },
    { name: "Mango", amount: 2, unit: "Piece(s)", isOptional: false },
    { name: "Coconut Flakes", amount: 80, unit: "g", isOptional: false }
    ],
    instructions: ["Peel and finely chop the garlic, ginger, carrots and the shallots", "Heat butter in a pot and saute the garlic, ginger, carrots and shallots","Add lentils, curry powder, turmeric and cumin powder to saute them briefly", "Deglaze everything with the vegetable stock and bring everything to a boil","Add coconut milk and season with salt and pepper to let everything simmer on low heat for ten minutes", "Peel the mangos and part the flesh from the stone to cut the flesh into small cubes","Wash the parsley and chop the leaves finely","Add the mangos, half of the coconut flakes and half of the parsley to the pot with the lenses on low heat","Let everything simmer for five minutes and season with pepper and salt","Sprinkle with rest of the coconut flakes and chopped parsley"],
    nutrition: {
      basis: "1 Portion",
      calories: { value: 630, unit: "kcal" },
      carbohydrates: { value: 72, unit: "g" },
      fat: { value: 33, unit: "g" },
      protein: { value: 24, unit: "g" },
      micronutrients: {
        kalium: { value: 1100, unit: "mg" },
        vitaminC: { value: 60, unit: "mg" },
        eisen: { value: 6.5, unit: "mg" },
        calcium: { value: 120, unit: "mg" },
        phosphor: { value: 480, unit: "mg" },
        vitaminA: { value: 0.65, unit: "mg" },
        magnesium: { value: 140, unit: "mg" },
        folat: { value: 220, unit: "µg" },
        vitaminE: { value: 4.0, unit: "mg" },
        zink: { value: 3.8, unit: "mg" },
        niacin: { value: 4.5, unit: "mg" },
        vitaminK1: { value: 50, unit: "µg" },
        riboflavin: { value: 0.3, unit: "mg" },
        pyridoxin: { value: 0.6, unit: "mg" }
      }
    }
    }
];
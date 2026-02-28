// 1. DATEN: Riesige Auswahl an vegetarischen Zutaten & Basics
// 1. DATEN: Riesige Auswahl an vegetarischen Zutaten & Basics
const ingredients = [
    // --- BASICS & VORRAT (Salz, Öl, Mehl...) ---
    { name: "Salt", category: "basic", svg: '<path d="M6 8h12M6 12h12M6 16h12"/>' },
    { name: "Pepper", category: "basic", svg: '<circle cx="12" cy="12" r="1"/><circle cx="10" cy="10" r="1"/><circle cx="14" cy="14" r="1"/>' },
    { name: "Water", category: "basic", svg: '<path d="M12 22a7 7 0 007-7c0-4.5-7-13-7-13S5 10.5 5 15a7 7 0 007 7z"/>' },
    { name: "Oil", category: "basic", svg: '<path d="M12 21a6 6 0 0 0 6-6c0-4-6-11-6-11S6 11 6 15a6 6 0 0 0 6 6z"/>' },
    { name: "Olive Oil", category: "basic", svg: '<path d="M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-4-4-4-7.5"/>' },
    { name: "Flour", category: "basic", svg: '<path d="M6 20l3-14 3 14M9 10h6"/>' },
    { name: "Sugar", category: "basic", svg: '<path d="M9 22h6M12 2v20M8 6h8"/>' },
    { name: "Baking Powder", category: "basic", svg: '<rect x="6" y="4" width="12" height="16" rx="1"/>' },
    { name: "Tomato Paste", category: "basic", svg: '<path d="M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6zM4 6h16M8 2h8v4H8z"/>' },
    { name: "Strained Tomatoes", category: "basic", svg: '<path d="M6 18h12V7l-6-5-6 5v11z"/><circle cx="12" cy="11" r="2"/>' },

    // --- GEMÜSE & FRÜCHTE ---
    { name: "Onion", isPopular: true, svg: '<path d="M12 22c5 0 9-4 9-9 0-4-3-8-9-11-6 3-9 7-9 11 0 5 4 9 9 9z"/>' },
    { name: "Garlic", isPopular: true, svg: '<path d="M12 2c-3 5-6 8-6 13a6 6 0 0012 0c0-5-3-8-6-13z"/>' },
    { name: "Tomato", isPopular: true, svg: '<circle cx="12" cy="14" r="8"/><path d="M12 6v2M9 5l1 3M15 5l-1 3"/>' },
    { name: "Potato", isPopular: true, svg: '<path d="M12 22c5 0 9-3 9-8s-4-10-9-10-9 5-9 10 4 8 9 8z"/>' },
    { name: "Sweet Potato", isPopular: false, svg: '<path d="M12 22c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z"/>' },
    { name: "Carrot", isPopular: false, svg: '<path d="M14 4l-9 9c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0l9-9c1-1 1-2.5 0-3.5"/>' },
    { name: "Zucchini", isPopular: false, svg: '<path d="M12 22c4 0 7-3 7-8s-3-8-7-8-7 3-7 8 3 8 7 8z"/>' },
    { name: "Courgette", category: "gemüse", svg: '<path d="M18.5 5.5l-13 13" stroke-width="3" stroke-linecap="round"/><path d="M15 4l4 4" stroke-width="2"/>' },
    { name: "Bell Pepper", isPopular: false, svg: '<path d="M12 20c4.4 0 8-2 8-6V8a3 3 0 00-3-3H7a3 3 0 00-3 3v6c0 4 3.6 6 8 6z"/>' },
    { name: "Cucumber", isPopular: false, svg: '<path d="M12 22c5 0 9-4 9-9V7c0-3-4-5-9-5S3 4 3 7v6c0 5 4 9 9 9z"/>' },
    { name: "Eggplant", isPopular: false, svg: '<path d="M12 2c-3 0-5 3-5 7 0 5 3 13 5 13s5-8 5-13c0-4-2-7-5-7z"/>' },
    { name: "Broccoli", isPopular: false, svg: '<path d="M12 22v-6M9 16c-3 0-5-2-5-5s2-5 5-5M15 16c3 0 5-2 5-5s-2-5-5-5"/>' },
    { name: "Cauliflower", category: "gemüse", svg: '<path d="M12 18a4 4 0 01-3-7 5 5 0 019 0 4 4 0 01-6 7zM12 18v4"/>' },
    { name: "Mushroom", isPopular: false, svg: '<path d="M12 2v10M5 12h14c0-5-3-10-7-10S5 7 5 12z"/><path d="M9 12v10h6V12"/>' },
    { name: "Champignons", category: "gemüse", svg: '<path d="M18 10c0-4.4-3.6-8-8-8S2 5.6 2 10h16z"/><path d="M7 10v5a3 3 0 0 0 6 0v-5"/>' },
    { name: "Spinach", isPopular: false, svg: '<path d="M12 22V12M12 2c-4 0-8 4-8 10h16c0-6-4-10-8-10z"/>' },
    { name: "Celery", category: "gemüse", svg: '<path d="M10 22V4a2 2 0 012-2 2 2 0 012 2v18"/>' },
    { name: "Hokkaido Pumpkin", category: "gemüse", svg: '<circle cx="12" cy="13" r="8"/><path d="M12 5V2"/>' },
    { name: "Corn", isPopular: false, svg: '<path d="M8 6h8M8 10h8M8 14h8M12 2v20"/>' },
    { name: "Peas", isPopular: false, svg: '<circle cx="12" cy="7" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="17" r="2"/>' },
    { name: "Asparagus", isPopular: false, svg: '<path d="M8 22V2M12 22V2M16 22V2"/>' },
    { name: "Lemon", isPopular: false, svg: '<path d="M12 22a9 9 0 009-9c0-6-4-11-9-11S3 7 3 13a9 9 0 009 9z"/>' },
    { name: "Apple", isPopular: false, svg: '<path d="M12 22c4 0 8-3 8-8s-3-8-8-8-8 3-8 8 4 8 8 8z"/><path d="M12 6V2"/>' },
    { name: "Avocado", isPopular: false, svg: '<path d="M12 22a7 7 0 007-7c0-5-3-13-7-13S5 10 5 15a7 7 0 007 7z"/><circle cx="12" cy="15" r="3"/>' },
    { name: "Paprika", category: "gemüse", svg: '<path d="M12 20c4.4 0 8-2 8-6V8a3 3 0 00-3-3H7a3 3 0 00-3 3v6c0 4 3.6 6 8 6z"/>' },

    // --- PROTEINE & MILCHPRODUKTE ---
    { name: "Egg", isPopular: true, svg: '<path d="M12 22c-4.4 0-8-4.5-8-10S8 2 12 2s8 4.5 8 10-3.6 10-8 10z"/>' },
    { name: "Eggs", category: "protein", svg: '<path d="M12 22a7 7 0 0 0 7-7c0-5-3-13-7-13S5 10 5 15a7 7 0 0 0 7 7z"/>' },
    { name: "Milk", category: "basic", svg: '<path d="M9 2h6l1 7v11a2 2 0 01-2 2H10a2 2 0 01-2-2V9l1-7z"/>' },
    { name: "Butter", category: "basic", svg: '<rect x="4" y="8" width="16" height="10" rx="2"/>' },
    { name: "Cheese", isPopular: true, svg: '<path d="M12 3l9 6-9 6-9-6 9-6z"/><path d="M3 9v6l9 6 9-6V9"/>' },
    { name: "Mozzarella", isPopular: false, svg: '<circle cx="12" cy="12" r="7"/>' },
    { name: "Grated Mozzarella", category: "protein", svg: '<circle cx="10" cy="10" r="6"/><circle cx="16" cy="16" r="4"/>' },
    { name: "Parmesan", isPopular: false, svg: '<path d="M3 12h18M12 3v18"/>' },
    { name: "Feta", isPopular: false, svg: '<rect x="4" y="6" width="16" height="12" rx="1"/>' },
    { name: "Greek Yogurt", isPopular: false, svg: '<path d="M12 22a8 8 0 008-8V8H4v6a8 8 0 008 8z"/>' },
    { name: "Cream", isPopular: false, svg: '<path d="M12 2L7 22h10L12 2z"/>' },
    { name: "Cooking Cream", category: "basic", svg: '<path d="M7 21h10a2 2 0 0 0 2-2V5l-7-3-7 3v14a2 2 0 0 0 2 2z"/>' },
    { name: "Whipping Cream", category: "protein", svg: '<path d="M7 21h10a2 2 0 0 0 2-2V5l-7-3-7 3v14a2 2 0 0 0 2 2z"/><path d="M7 10h10"/>' },
    { name: "Tofu", isPopular: false, svg: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 4v16M15 4v16M4 10h16"/>' },
    { name: "Lentils", isPopular: false, svg: '<circle cx="8" cy="8" r="2"/><circle cx="16" cy="10" r="2"/><circle cx="12" cy="16" r="2"/>' },
    { name: "Chickpeas", isPopular: false, svg: '<circle cx="10" cy="12" r="3"/><circle cx="15" cy="8" r="2"/>' },
    { name: "White Beans", category: "protein", svg: '<path d="M12 8c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5z"/>' },

    // --- GETREIDE & NUDELN ---
    { name: "Pasta", isPopular: true, svg: '<path d="M4 12h16M4 8h16M4 16h16"/>' },
    { name: "Fusilli", category: "getreide", svg: '<path d="M8 3l8 4-8 4 8 4-8 4"/>' },
    { name: "Spaghetti", category: "getreide", svg: '<path d="M6 2v20M10 2v20M14 2v20M18 2v20"/>' },
    { name: "Gnocchi", category: "getreide", svg: '<rect x="6" y="8" width="12" height="8" rx="4"/><path d="M8 8v8M12 8v8M16 8v8"/>' },
    { name: "Rice", isPopular: true, svg: '<path d="M12 4a4 4 0 00-4 4v8a4 4 0 008 0V8a4 4 0 00-4-4z"/>' },
    { name: "Tortilla Wraps", category: "getreide", svg: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/>' },
    { name: "Strudel Dough", category: "getreide", svg: '<rect x="4" y="6" width="16" height="12" rx="1"/>' },

    // --- KRÄUTER, GEWÜRZE & SAUCEN ---
    { name: "herbs", category: "gemüse", svg: '<path d="M12 22V10M12 10c-3 0-5-2-5-5s2-5 5-5c3 0 5 2 5 5s-2 5-5 5z"/>' },
    { name: "Basil", category: "gemüse", svg: '<path d="M12 22s-8-5-8-11a4 4 0 018-4 4 4 0 018 4c0 6-8 11-8 11z"/>' },
    { name: "Fresh Basil", category: "gemüse", svg: '<path d="M12 22s-8-5-8-11a4 4 0 018-4 4 4 0 018 4c0 6-8 11-8 11z"/>' },
    { name: "Parsley", category: "gemüse", svg: '<path d="M12 22v-6M12 16a4 4 0 100-8 4 4 0 100 8z"/>' },
    { name: "Coriander", category: "gemüse", svg: '<path d="M12 22v-6M12 16a4 4 0 00-4-4M12 16a4 4 0 014-4"/>' },
    { name: "Fresh Thyme", category: "pantry", svg: '<path d="M12 22V2M12 8l4-2M12 14l-4-2"/>' },
    { name: "Rosemary", category: "pantry", svg: '<path d="M12 22V2M8 12l4-4M16 14l-4-4"/>' },
    { name: "Dried Rosemary", category: "pantry", svg: '<path d="M12 22V2M8 12l4-4M16 14l-4-4"/>' },
    { name: "Dried Oregano", category: "pantry", svg: '<circle cx="8" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="8" r="1.5" fill="currentColor"/><circle cx="16" cy="14" r="1.5" fill="currentColor"/><circle cx="10" cy="16" r="1.5" fill="currentColor"/><circle cx="14" cy="10" r="1.5" fill="currentColor"/>' },
    { name: "Chili", isPopular: false, svg: '<path d="M18 6c-2 4-7 6-10 10s-2 5 0 6 5-1 8-6 4-6 2-10z"/>' },
    { name: "Cinnamon", isPopular: false, svg: '<path d="M6 18h12M6 14h12M6 10h12"/>' },
    { name: "Ginger", isPopular: false, svg: '<path d="M12 8c3 0 4-2 4-4s-2-2-4-2-4 0-4 2 1 4 4 4z"/>' },
    { name: "Soy Sauce", isPopular: false, svg: '<path d="M9 2h6v20H9z"/>' },
    { name: "Balsamic", isPopular: false, svg: '<path d="M12 22V2M8 10h8"/>' },
    { name: "White Wine Vinegar", category: "pantry", svg: '<path d="M10 2h4v4l2 4v12H8V10l2-4V2z"/>' },
    { name: "White Wine", category: "pantry", svg: '<path d="M8 2h8l-2 10h-4zM12 12v10M9 22h6"/>' },
    { name: "Honey", isPopular: false, svg: '<path d="M12 22V10M8 10V2h8v8"/>' },
    { name: "Vegetable Stock", category: "pantry", svg: '<rect x="6" y="6" width="12" height="12" rx="2"/>' },
    { name: "Pesto Genovese", category: "pantry", svg: '<path d="M7 6h10v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6zM8 2h8v4H8z"/>' },
    { name: "Indian Curry Paste", category: "pantry", svg: '<path d="M4 10h16v4a8 8 0 01-16 0v-4z"/>' },

    // --- NÜSSE & SONSTIGES ---
    { name: "Walnuts", isPopular: false, svg: '<circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10"/>' },
    { name: "Almonds", isPopular: false, svg: '<path d="M12 2l-4 8 4 12 4-12-4-8z"/>' },
    { name: "Pine Nuts", category: "pantry", svg: '<path d="M12 21c-3 0-4-4-4-7 0-4 4-10 4-10s4 6 4 10c0 3-1 7-4 7z"/>' },
    { name: "Pecans", category: "pantry", svg: '<path d="M12 20c-3 0-5-3-5-8 0-4 3-8 5-8s5 4 5 8c0 5-2 8-5 8z"/>' },
    { name: "Sesame Seeds", category: "pantry", svg: '<circle cx="10" cy="10" r="1.5"/><circle cx="14" cy="14" r="1.5"/>' },
    { name: "Olives", category: "pantry", svg: '<circle cx="12" cy="12" r="5"/><circle cx="14" cy="10" r="1"/>' },
    { name: "Capers", category: "pantry", svg: '<circle cx="10" cy="10" r="2"/><circle cx="14" cy="14" r="2"/>' },
    { name: "Dried Tomatoes in Oil", category: "pantry", svg: '<circle cx="12" cy="12" r="8"/><path d="M12 4v16"/>' },

    // --- ÖLE & FLÜSSIGE WÜRZMITTEL ---
    { name: "Sesame Oil", category: "pantry", svg: '<path d="M12 2v20M8 6l4-4 4 4M6 18h12"/>' },
    { name: "Chili Sauce", category: "pantry", svg: '<path d="M9 2h6v4l2 4v12H7V10l2-4V2z"/><path d="M9 10h6"/>' },
    { name: "Salsa", category: "pantry", svg: '<circle cx="12" cy="12" r="8"/><path d="M8 10c1-2 5-2 6 0M9 15c1 1 5 1 6 0"/>' },
    { name: "Ajvar", category: "pantry", svg: '<path d="M7 6h10v14a2 2 0 01-2 2H9a2 2 0 01-2-2V6zM8 2h8v4H8z"/><circle cx="12" cy="13" r="2"/>' },
    { name: "Maple Syrup", category: "pantry", svg: '<path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>' },
    { name: "Orange Juice", category: "pantry", svg: '<circle cx="12" cy="13" r="7"/><path d="M12 6V2M9 4l3 2 3-2"/>' },
    { name: "Lemon Juice", category: "pantry", svg: '<path d="M12 22a9 9 0 009-9c0-6-4-11-9-11S3 7 3 13a9 9 0 009 9z"/><path d="M9 13h6"/>' },
    { name: "Vegetable Broth", category: "pantry", svg: '<rect x="5" y="8" width="14" height="12" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/>' },
    { name: "Vegetable Cream", category: "pantry", svg: '<path d="M7 21h10a2 2 0 002-2V8l-5-6H7a2 2 0 00-2 2v15a2 2 0 002 2z"/><path d="M7 12h10"/>' },
    { name: "Coconut Milk", category: "pantry", svg: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2"/>' },

    // --- GEWÜRZE & PULVER ---
    { name: "Garlic Powder", category: "pantry", svg: '<circle cx="12" cy="10" r="4"/><path d="M8 14c-2 1-3 3-3 5h14c0-2-1-4-3-5"/>' },
    { name: "Paprika Powder", category: "pantry", svg: '<path d="M12 20c4.4 0 8-2 8-6V8a3 3 0 00-3-3H7a3 3 0 00-3 3v6c0 4 3.6 6 8 6z"/><path d="M8 11h8"/>' },
    { name: "Cayenne Pepper", category: "pantry", svg: '<path d="M18 6c-2 4-7 6-10 10s-2 5 0 6 5-1 8-6 4-6 2-10z"/><circle cx="8" cy="20" r="1" fill="currentColor"/>' },
    { name: "Oregano", category: "pantry", svg: '<circle cx="8" cy="10" r="1.5" fill="currentColor"/><circle cx="12" cy="7" r="1.5" fill="currentColor"/><circle cx="16" cy="10" r="1.5" fill="currentColor"/><circle cx="10" cy="14" r="1.5" fill="currentColor"/><circle cx="14" cy="14" r="1.5" fill="currentColor"/>' },
    { name: "Turmeric", category: "pantry", svg: '<path d="M12 8c3 0 4-2 4-4s-2-2-4-2-4 0-4 2 1 4 4 4z"/><path d="M8 8l-2 14h12L16 8"/>' },
    { name: "Turmeric Powder", category: "pantry", svg: '<path d="M12 8c3 0 4-2 4-4s-2-2-4-2-4 0-4 2 1 4 4 4z"/><path d="M8 8l-2 14h12L16 8"/>' },
    { name: "Cumin Powder", category: "pantry", svg: '<path d="M6 20l3-14 3 14M9 10h6M15 20l-3-14"/>' },
    { name: "Curry Powder", category: "pantry", svg: '<circle cx="12" cy="12" r="7"/><path d="M9 9l6 6M15 9l-6 6"/>' },
    { name: "Chili Powder", category: "pantry", svg: '<path d="M18 6c-2 4-7 6-10 10s-2 5 0 6 5-1 8-6 4-6 2-10z"/><path d="M10 8h4"/>' },
    { name: "Nutmeg", category: "pantry", svg: '<path d="M12 22c4 0 7-3 7-8s-3-8-7-8-7 3-7 8 3 8 7 8z"/><path d="M12 6v4M10 8h4"/>' },
    { name: "Lemon Pepper", category: "pantry", svg: '<path d="M12 22a9 9 0 009-9c0-6-4-11-9-11S3 7 3 13a9 9 0 009 9z"/><circle cx="10" cy="10" r="1" fill="currentColor"/><circle cx="14" cy="14" r="1" fill="currentColor"/>' },
    { name: "Cane Sugar", category: "pantry", svg: '<path d="M9 22h6M12 2v20M8 6h8M7 10h10"/>' },
    { name: "Cornstarch", category: "pantry", svg: '<path d="M6 20l3-14 3 14M9 10h6"/><path d="M17 6h2M17 10h2"/>' },
    { name: "Horseradish", category: "pantry", svg: '<path d="M12 22V8M8 8c0-3 2-6 4-6s4 3 4 6"/><path d="M8 14c-2 0-4-1-4-3s2-3 4-3M16 14c2 0 4-1 4-3s-2-3-4-3"/>' },
    { name: "Peanut Butter", category: "pantry", svg: '<circle cx="12" cy="12" r="7"/><circle cx="10" cy="10" r="1.5" fill="currentColor"/><circle cx="14" cy="14" r="1.5" fill="currentColor"/><path d="M9 15c1 1 5 1 6 0"/>' },

    // --- GEMÜSE (FEHLEND) ---
    { name: "Shallot", category: "gemüse", svg: '<path d="M12 22c4 0 7-3 7-7 0-3-2-6-7-9-5 3-7 6-7 9 0 4 3 7 7 7z"/><path d="M12 13v-3"/>' },
    { name: "Leek Stalk", category: "gemüse", svg: '<path d="M10 22V4a2 2 0 012-2 2 2 0 012 2v18"/><path d="M7 8c0-2 2-4 5-4s5 2 5 4"/>' },
    { name: "Cherry Tomatoes", category: "gemüse", svg: '<circle cx="9" cy="14" r="4"/><circle cx="15" cy="11" r="3"/><path d="M9 10V8M15 8V6"/>' },
    { name: "Green Bean", category: "gemüse", svg: '<path d="M5 12c0-4 3-8 7-8s7 4 7 8"/><path d="M12 4v16"/><path d="M8 14c1 2 3 3 4 3"/>' },
    { name: "Chives", category: "gemüse", svg: '<path d="M9 22V2M12 22V4M15 22V2"/>' },
    { name: "Salad", category: "gemüse", svg: '<path d="M12 22c5 0 9-4 9-9 0-4-2-6-5-8M12 22C7 22 3 18 3 13c0-4 2-6 5-8"/><circle cx="12" cy="10" r="3"/>' },
    { name: "Mango", category: "gemüse", svg: '<path d="M12 22c4 0 7-5 7-10 0-4-2-9-7-10-5 1-7 6-7 10 0 5 3 10 7 10z"/><circle cx="12" cy="13" r="3"/>' },

    // --- GETREIDE & TEIGWAREN (FEHLEND) ---
    { name: "Tortellini", category: "getreide", svg: '<circle cx="12" cy="12" r="7"/><path d="M9 9c1-1 5-1 6 0s1 5 0 6-5 1-6 0-1-5 0-6z"/>' },
    { name: "Cannelloni", category: "getreide", svg: '<rect x="4" y="8" width="16" height="8" rx="4"/><path d="M8 8v8M12 8v8M16 8v8"/>' },
    { name: "Udon-Noodle", category: "getreide", svg: '<path d="M5 6h14M5 10h14M5 14h14M5 18h14"/>' },
    { name: "Couscous", category: "getreide", svg: '<circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="12" cy="6" r="1.5" fill="currentColor"/><circle cx="16" cy="8" r="1.5" fill="currentColor"/><circle cx="10" cy="12" r="1.5" fill="currentColor"/><circle cx="14" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/>' },
    { name: "Bread", category: "getreide", svg: '<path d="M5 10a7 7 0 0114 0v10H5V10z"/><path d="M5 14h14"/>' },

    // --- SONSTIGES (FEHLEND) ---
    { name: "Coconut Flakes", category: "pantry", svg: '<path d="M12 3c-2 4-5 6-5 9a5 5 0 0010 0c0-3-3-5-5-9z"/><path d="M9 14h6"/>' },
    { name: "Kidney Beans", category: "protein", svg: '<path d="M8 8c-2 0-4 2-4 5s2 5 4 5h8c2 0 4-2 4-5s-2-5-4-5H8z"/>' },
    { name: "Rubbed Cheese", category: "protein", svg: '<path d="M4 8h16v12H4z"/><path d="M4 8l4-4h8l4 4"/><path d="M8 12h8M8 16h5"/>' },
    { name: "Vegetable Stock Powder", category: "pantry", svg: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 6V4M12 6V4M15 6V4"/>' },
    { name: "Fat", category: "basic", svg: '<rect x="4" y="10" width="16" height="8" rx="2"/><path d="M8 10V8a4 4 0 018 0v2"/>' }
];


const icons = {
    time: '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    difficulty: '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 20V4"></path></svg>',
    heart: '<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
   heartFilled: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#000000" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>'
};

let isExpanded = false;
// Lädt die gespeicherte Auswahl oder startet leer
let selectedIngredients = JSON.parse(localStorage.getItem('tempSelectedIngredients')) || [];

// In-Memory Cache für Favoriten (wird beim Start aus Supabase geladen)
let cachedFavoriteIds = [];

document.addEventListener('DOMContentLoaded', async () => {
    renderIngredients();
    // Favoriten vorab laden damit die Herzen sofort korrekt angezeigt werden
    cachedFavoriteIds = await getFavoriteIds();
    if (selectedIngredients.length > 0) {
        updateRecipePlaceholder();
    }
});


// DOM Elemente
const grid = document.getElementById('ingredients-grid');
const searchInput = document.getElementById('ingredient-search');
const toggleBtn = document.getElementById('toggle-more-btn');

function renderIngredients(filterText = "") {
    grid.innerHTML = ""; 
    let visibleCount = 0; // Zähler für die Reihen

    ingredients.forEach(item => {
        const matchesSearch = item.name.toLowerCase().includes(filterText.toLowerCase());

        if (filterText) {
            // Wenn gesucht wird, zeige alle Treffer
            if (!matchesSearch) return;
        } else {
            // Wenn NICHT gesucht wird:
            if (!isExpanded) {
                // Zeige nur die ersten 8 Zutaten (ca. 2 Reihen)
                if (visibleCount >= 8) return; 
            }
        }

        const label = document.createElement('label');
        label.className = 'ingredient-label';
        if (item.category === 'basic') label.classList.add('basic-item');
        
        const isChecked = selectedIngredients.includes(item.name) ? 'checked' : '';
        const svgMarkup = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${item.svg}</svg>`;

        label.innerHTML = `
            <input type="checkbox" value="${item.name}" ${isChecked}>
            ${svgMarkup}
            <span>${item.name}</span>
        `;

        const checkbox = label.querySelector('input');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedIngredients.push(item.name);
            } else {
                selectedIngredients = selectedIngredients.filter(i => i !== item.name);
            }
            localStorage.setItem('tempSelectedIngredients', JSON.stringify(selectedIngredients));
            updateRecipePlaceholder();
        });

        grid.appendChild(label);
        visibleCount++; // Nur hochzählen, wenn das Element auch hinzugefügt wurde
    });
}

// Suche
searchInput.addEventListener('input', (e) => {
    const text = e.target.value.trim();
    toggleBtn.classList.toggle('hidden', text.length > 0);
    renderIngredients(text);
});

// Show More Toggle
toggleBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    toggleBtn.innerText = isExpanded ? "Show Less" : "Show More Ingredients";
    renderIngredients(searchInput.value.trim());
});

// Rezept-Vorschau Text
function updateRecipePlaceholder() {
    // WICHTIG: Sicherstellen, dass wir das REZEPT-Grid nehmen, nicht das Zutaten-Grid!
    const recipeGrid = document.getElementById('recipe-grid'); 
    
    if (!recipeGrid) return; // Sicherheitscheck

    if (selectedIngredients.length === 0) {
        recipeGrid.innerHTML = '<p id="recipe-placeholder">Select ingredients to find recipes...</p>';
        return;
    }

    // Filterlogik: Nur Rezepte, bei denen ALLE wichtigen Zutaten vorhanden sind
    const matches = recipes.filter(recipe => {
        const requiredIngredients = recipe.ingredients.filter(ing => ing.isOptional === false);
        
        // Falls keine als wichtig markiert sind, nehmen wir die alte Logik (mind. eine Zutat)
        if (requiredIngredients.length === 0) {
            return recipe.ingredients.some(ing => selectedIngredients.includes(ing.name));
        }

        return requiredIngredients.every(requiredIng => 
            selectedIngredients.includes(requiredIng.name)
        );
    });

    // ZUERST das Grid leeren, damit nichts doppelt erscheint
    recipeGrid.innerHTML = ""; 

    if (matches.length === 0) {
        recipeGrid.innerHTML = '<p>No matching recipes found. You are missing important main ingredients!</p>';
        return;
    }

    matches.forEach(recipe => {
        const isFav = cachedFavoriteIds.includes(recipe.id);
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        // WICHTIG: stopPropagation verhindert, dass der Klick auf das Herz 
        // andere Events auslöst, die das Duplizieren verursachen könnten
        // In rezepte.js beim Erstellen der Karte:
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${recipe.image}'); position: relative; height: 180px; background-size: cover;">
            <button class="fav-btn-dezent" onclick="event.stopPropagation(); handleToggleFav('${recipe.id}')">
                ${isFav ? icons.heartFilled : icons.heart}
            </button>
        </div>
        <div class="card-content" style="padding: 15px;">
            <h3 style="margin-bottom: 5px;">${recipe.name}</h3>
            <div class="card-meta" style="margin-bottom: 15px;">
                <span>${icons.time} ${recipe.prepTime}</span>
                <span>${icons.difficulty} ${recipe.difficulty}</span>
            </div>
            <button class="recipe-view-btn" onclick="goToDetail('${recipe.id}')">
                Details
            </button>
        </div>
    `;
        recipeGrid.appendChild(card);
    });
}

// Herz-Klick → Supabase
async function handleToggleFav(id) {
    const isNowFav = await toggleFavorite(id);  // toggleFavorite kommt aus collection.js

    // Cache aktualisieren
    if (isNowFav) {
        cachedFavoriteIds.push(id);
    } else {
        cachedFavoriteIds = cachedFavoriteIds.filter(f => f !== id);
    }

    // Grid neu zeichnen mit aktuellem Cache
    updateRecipePlaceholder();
}

// Funktion für den Klick (später für die Unterseite)
function goToDetail(id) {
    localStorage.setItem('selectedRecipeId', id);
    window.location.href = "details.html";
}

function logout() {
    signOutUser();
}


// DOM Element für den neuen Button
const selectAllBtn = document.getElementById('select-all-btn');

selectAllBtn.addEventListener('click', () => {
    // Wenn aktuell nichts oder nicht alles ausgewählt ist -> Alles auswählen
    // Ansonsten -> Auswahl leeren
    if (selectedIngredients.length < ingredients.length) {
        selectedIngredients = ingredients.map(item => item.name);
        selectAllBtn.innerText = "Deselect All";
    } else {
        selectedIngredients = [];
        selectAllBtn.innerText = "Select All";
    }
    localStorage.setItem('tempSelectedIngredients', JSON.stringify(selectedIngredients));
    // UI aktualisieren: Checkboxen im Grid neu zeichnen
    renderIngredients(searchInput.value.trim());
    // Rezepte basierend auf der neuen Auswahl suchen
    updateRecipePlaceholder();
});


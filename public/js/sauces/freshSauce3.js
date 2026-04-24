// Fresh Sauces — Batch 3 (items 21–30)

const FRESH_SAUCES_BATCH_3 = [
  {
    id: "fresh-021",
    name: "Fresh Cilantro Chutney",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "India",
    description: "A bright, tangy chutney made with cilantro, green chili, and lemon.",
    flavor_profile: "Herbal, spicy, citrusy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Cilantro", "Green chili", "Garlic", "Lemon juice", "Salt"],
    steps: [
      "Blend cilantro and chili.",
      "Add garlic and lemon.",
      "Season to taste."
    ],
    variations: [
      { name: "Mint-Cilantro Blend", description: "Add equal parts mint for extra freshness." }
    ],
    best_on: ["Pakoras", "Grilled meats", "Rice bowls"],
    mix_with: ["Cumin", "Black salt"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "2 days refrigerated",
      notes: "Color darkens naturally."
    }
  },

  {
    id: "fresh-022",
    name: "Fresh Tomato Basil Sauce",
    emoji: "🍅",
    category: "Fresh Sauces",
    origin: "Italy",
    description: "A raw tomato sauce with basil, garlic, and olive oil.",
    flavor_profile: "Bright, sweet, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: ["Tomatoes", "Basil", "Garlic", "Olive oil", "Salt"],
    steps: [
      "Dice tomatoes.",
      "Mix with basil and garlic.",
      "Add oil and salt."
    ],
    variations: [
      { name: "Caprese Style", description: "Add fresh mozzarella cubes." }
    ],
    best_on: ["Pasta", "Bruschetta", "Grilled chicken"],
    mix_with: ["Black pepper", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Glass container",
      shelf_life: "1–2 days refrigerated",
      notes: "Tomatoes release liquid over time."
    }
  },

  {
    id: "fresh-023",
    name: "Fresh Parsley Lemon Sauce",
    emoji: "🍋",
    category: "Fresh Sauces",
    origin: "Mediterranean",
    description: "A zesty herb sauce made with parsley, lemon, and garlic.",
    flavor_profile: "Bright, herbal, tangy",
    heat_level: "None",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: ["Parsley", "Lemon juice", "Garlic", "Olive oil", "Salt"],
    steps: [
      "Chop parsley.",
      "Mix with lemon and garlic.",
      "Add oil and salt."
    ],
    variations: [
      { name: "Spicy Version", description: "Add crushed red pepper flakes." }
    ],
    best_on: ["Fish", "Vegetables", "Grains"],
    mix_with: ["Black pepper", "Cumin"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-024",
    name: "Fresh Sesame Ginger Sauce",
    emoji: "🧄",
    category: "Fresh Sauces",
    origin: "East Asia",
    description: "A tangy, aromatic sauce with ginger, sesame, and soy.",
    flavor_profile: "Savory, tangy, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Whisk"],
    ingredients: ["Ginger", "Soy sauce", "Sesame oil", "Rice vinegar", "Garlic"],
    steps: [
      "Whisk soy and vinegar.",
      "Add ginger and garlic.",
      "Finish with sesame oil."
    ],
    variations: [
      { name: "Creamy Version", description: "Add a spoon of mayo or tahini." }
    ],
    best_on: ["Noodles", "Salads", "Tofu"],
    mix_with: ["Chili flakes", "Honey"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "5 days refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "fresh-025",
    name: "Fresh Lemon Garlic Dressing",
    emoji: "🍋",
    category: "Fresh Sauces",
    origin: "Global",
    description: "A simple, bright dressing with lemon, garlic, and olive oil.",
    flavor_profile: "Tangy, sharp, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Whisk"],
    ingredients: ["Lemon juice", "Garlic", "Olive oil", "Salt", "Pepper"],
    steps: [
      "Whisk lemon and garlic.",
      "Slowly add oil.",
      "Season to taste."
    ],
    variations: [
      { name: "Herb Version", description: "Add parsley or dill." }
    ],
    best_on: ["Salads", "Chicken", "Vegetables"],
    mix_with: ["Oregano", "Chili flakes"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "4 days refrigerated",
      notes: "Garlic intensifies over time."
    }
  },

  {
    id: "fresh-026",
    name: "Fresh Orange Ginger Sauce",
    emoji: "🍊",
    category: "Fresh Sauces",
    origin: "Pacific Rim",
    description: "A citrus-forward sauce with ginger and a touch of sweetness.",
    flavor_profile: "Citrusy, sweet, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Orange juice", "Ginger", "Honey", "Soy sauce", "Garlic"],
    steps: [
      "Blend all ingredients.",
      "Adjust sweetness or saltiness."
    ],
    variations: [
      { name: "Spicy Orange", description: "Add red chili flakes." }
    ],
    best_on: ["Shrimp", "Chicken", "Vegetables"],
    mix_with: ["Sesame oil", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3 days refrigerated",
      notes: "Shake before serving."
    }
  },

  {
    id: "fresh-027",
    name: "Fresh Herb Chimichurri Verde",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "Argentina",
    description: "A greener, herb‑heavier chimichurri variation with cilantro and mint.",
    flavor_profile: "Herbal, tangy, aromatic",
    heat_level: "Mild",
    image: "",
    equipment: ["Knife"],
    ingredients: ["Cilantro", "Mint", "Parsley", "Garlic", "Vinegar", "Oil"],
    steps: [
      "Finely chop herbs.",
      "Mix with garlic, vinegar, and oil.",
      "Season to taste."
    ],
    variations: [
      { name: "Spicy Verde", description: "Add minced serrano pepper." }
    ],
    best_on: ["Steak", "Vegetables", "Seafood"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "3 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-028",
    name: "Fresh Dill Yogurt Sauce",
    emoji: "🥛",
    category: "Fresh Sauces",
    origin: "Mediterranean",
    description: "A cool yogurt sauce with dill, lemon, and garlic.",
    flavor_profile: "Creamy, tangy, herbal",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Yogurt", "Dill", "Garlic", "Lemon juice", "Salt"],
    steps: [
      "Mix yogurt and lemon.",
      "Add dill and garlic.",
      "Season to taste."
    ],
    variations: [
      { name: "Cucumber Version", description: "Add grated cucumber for tzatziki vibes." }
    ],
    best_on: ["Fish", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Mint"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "3 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-029",
    name: "Fresh Pine Nut Herb Sauce",
    emoji: "🌰",
    category: "Fresh Sauces",
    origin: "Mediterranean",
    description: "A nutty, herbaceous sauce made with pine nuts and parsley.",
    flavor_profile: "Nutty, herbal, savory",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Pine nuts", "Parsley", "Garlic", "Olive oil", "Lemon"],
    steps: [
      "Blend nuts and herbs.",
      "Add oil and lemon.",
      "Season to taste."
    ],
    variations: [
      { name: "Walnut Version", description: "Swap pine nuts for walnuts." }
    ],
    best_on: ["Pasta", "Vegetables", "Chicken"],
    mix_with: ["Black pepper", "Chili flakes"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "4 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-030",
    name: "Fresh Basil Lemon Sauce",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "Italy",
    description: "A bright basil-forward sauce with lemon and olive oil.",
    flavor_profile: "Herbal, citrusy, smooth",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Basil", "Lemon juice", "Olive oil", "Garlic", "Salt"],
    steps: [
      "Blend basil and lemon.",
      "Add garlic and oil.",
      "Season to taste."
    ],
    variations: [
      { name: "Creamy Basil", description: "Add a spoon of yogurt or mayo." }
    ],
    best_on: ["Fish", "Pasta", "Vegetables"],
    mix_with: ["Black pepper", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "3 days refrigerated",
      notes: "Color may fade slightly."
    }
  }
];

export default FRESH_SAUCES_BATCH_3;

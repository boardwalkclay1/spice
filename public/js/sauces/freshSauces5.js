// Fresh Sauces — Batch 5 (items 41–50)

const FRESH_SAUCES_BATCH_5 = [
  {
    id: "fresh-041",
    name: "Fresh Cilantro Garlic Sauce",
    emoji: "🧄",
    category: "Fresh Sauces",
    origin: "Latin America",
    description: "A bold, herbaceous sauce with cilantro, garlic, and lime.",
    flavor_profile: "Herbal, tangy, pungent",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Cilantro", "Garlic", "Lime juice", "Olive oil", "Salt"],
    steps: [
      "Blend cilantro and garlic.",
      "Add lime and oil.",
      "Season to taste."
    ],
    variations: [
      { name: "Spicy Version", description: "Add jalapeño or serrano pepper." }
    ],
    best_on: ["Steak", "Chicken", "Vegetables"],
    mix_with: ["Cumin", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-042",
    name: "Fresh Lemon Herb Drizzle",
    emoji: "🍋",
    category: "Fresh Sauces",
    origin: "Mediterranean",
    description: "A bright finishing sauce with lemon, parsley, and olive oil.",
    flavor_profile: "Citrusy, herbal, light",
    heat_level: "None",
    image: "",
    equipment: ["Whisk"],
    ingredients: ["Lemon juice", "Parsley", "Olive oil", "Garlic", "Salt"],
    steps: [
      "Whisk lemon and oil.",
      "Add herbs and garlic.",
      "Season lightly."
    ],
    variations: [
      { name: "Basil Version", description: "Swap parsley for basil." }
    ],
    best_on: ["Fish", "Vegetables", "Grains"],
    mix_with: ["Oregano", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 days refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "fresh-043",
    name: "Fresh Chili Lime Crema",
    emoji: "🌶️",
    category: "Fresh Sauces",
    origin: "Mexico",
    description: "A creamy, tangy sauce with lime and chili.",
    flavor_profile: "Creamy, spicy, citrusy",
    heat_level: "Medium",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Sour cream", "Lime juice", "Chili powder", "Garlic", "Salt"],
    steps: [
      "Mix sour cream and lime.",
      "Add chili and garlic.",
      "Season to taste."
    ],
    variations: [
      { name: "Chipotle Version", description: "Add chipotle in adobo." }
    ],
    best_on: ["Tacos", "Burritos", "Chicken"],
    mix_with: ["Cumin", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "4 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-044",
    name: "Fresh Ginger Lime Dressing",
    emoji: "🫚",
    category: "Fresh Sauces",
    origin: "Pacific Rim",
    description: "A zesty dressing with ginger, lime, and honey.",
    flavor_profile: "Citrusy, aromatic, lightly sweet",
    heat_level: "None",
    image: "",
    equipment: ["Whisk"],
    ingredients: ["Ginger", "Lime juice", "Honey", "Soy sauce", "Oil"],
    steps: [
      "Whisk lime and honey.",
      "Add ginger and soy.",
      "Finish with oil."
    ],
    variations: [
      { name: "Spicy Version", description: "Add crushed red pepper." }
    ],
    best_on: ["Salads", "Shrimp", "Chicken"],
    mix_with: ["Sesame oil", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "5 days refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "fresh-045",
    name: "Fresh Tomato Chili Salsa",
    emoji: "🍅",
    category: "Fresh Sauces",
    origin: "Mexico",
    description: "A spicy tomato salsa with fresh chilies and lime.",
    flavor_profile: "Bright, spicy, fresh",
    heat_level: "Medium",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: ["Tomatoes", "Chili", "Onion", "Cilantro", "Lime juice"],
    steps: [
      "Dice tomatoes and onion.",
      "Add chili and cilantro.",
      "Finish with lime."
    ],
    variations: [
      { name: "Roasted Version", description: "Char tomatoes before chopping." }
    ],
    best_on: ["Tacos", "Eggs", "Grilled meats"],
    mix_with: ["Garlic powder", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Glass container",
      shelf_life: "2 days refrigerated",
      notes: "Tomatoes release liquid over time."
    }
  },

  {
    id: "fresh-046",
    name: "Fresh Basil Walnut Sauce",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "Italy",
    description: "A nutty basil sauce made with walnuts instead of pine nuts.",
    flavor_profile: "Herbal, nutty, smooth",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Basil", "Walnuts", "Garlic", "Olive oil", "Salt"],
    steps: [
      "Blend basil and walnuts.",
      "Add garlic and oil.",
      "Season lightly."
    ],
    variations: [
      { name: "Lemon Basil", description: "Add lemon juice for brightness." }
    ],
    best_on: ["Pasta", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Chili flakes"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "4 days refrigerated",
      notes: "Top with oil to prevent browning."
    }
  },

  {
    id: "fresh-047",
    name: "Fresh Green Chili Sauce",
    emoji: "🟩",
    category: "Fresh Sauces",
    origin: "Middle East",
    description: "A spicy green sauce made with herbs, garlic, and green chilies.",
    flavor_profile: "Spicy, herbal, bright",
    heat_level: "Hot",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Green chilies", "Parsley", "Cilantro", "Garlic", "Vinegar"],
    steps: [
      "Blend chilies and herbs.",
      "Add garlic and vinegar.",
      "Season to taste."
    ],
    variations: [
      { name: "Mint Version", description: "Add fresh mint for cooling contrast." }
    ],
    best_on: ["Lamb", "Chicken", "Vegetables"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "3 days refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "fresh-048",
    name: "Fresh Avocado Herb Sauce",
    emoji: "🥑",
    category: "Fresh Sauces",
    origin: "California",
    description: "A creamy green sauce made with avocado, herbs, and lime.",
    flavor_profile: "Creamy, herbal, citrusy",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Avocado", "Cilantro", "Lime juice", "Garlic", "Salt"],
    steps: [
      "Blend avocado and herbs.",
      "Add lime and garlic.",
      "Season to taste."
    ],
    variations: [
      { name: "Spicy Version", description: "Add jalapeño." }
    ],
    best_on: ["Tacos", "Fish", "Vegetables"],
    mix_with: ["Onion powder", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Airtight container",
      shelf_life: "2 days refrigerated",
      notes: "Cover surface to prevent browning."
    }
  },

  {
    id: "fresh-049",
    name: "Fresh Tomato Mint Relish",
    emoji: "🍅",
    category: "Fresh Sauces",
    origin: "Middle East",
    description: "A refreshing tomato relish with mint and lemon.",
    flavor_profile: "Fresh, herbal, citrusy",
    heat_level: "None",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: ["Tomatoes", "Mint", "Lemon juice", "Garlic", "Salt"],
    steps: [
      "Dice tomatoes.",
      "Mix with mint and garlic.",
      "Add lemon and salt."
    ],
    variations: [
      { name: "Spicy Version", description: "Add minced chili." }
    ],
    best_on: ["Lamb", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Cumin"],
    used_in_blends: [],
    storage: {
      container: "Glass container",
      shelf_life: "2 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-050",
    name: "Fresh Herb Citrus Sauce",
    emoji: "🍊",
    category: "Fresh Sauces",
    origin: "Mediterranean",
    description: "A bright citrus-herb sauce with orange, lemon, and parsley.",
    flavor_profile: "Citrusy, herbal, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Orange juice", "Lemon juice", "Parsley", "Garlic", "Olive oil"],
    steps: [
      "Blend citrus and herbs.",
      "Add garlic and oil.",
      "Season lightly."
    ],
    variations: [
      { name: "Mint Citrus", description: "Add fresh mint for cooling notes." }
    ],
    best_on: ["Fish", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 days refrigerated",
      notes: "Shake before use."
    }
  }
];

export default FRESH_SAUCES_BATCH_5;

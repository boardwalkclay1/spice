// Fresh Sauces — Batch 4 (items 31–40)

const FRESH_SAUCES_BATCH_4 = [
  {
    id: "fresh-031",
    name: "Fresh Jalapeño Lime Sauce",
    emoji: "🌶️",
    category: "Fresh Sauces",
    origin: "Southwest US",
    description: "A bright, spicy sauce made with jalapeños, lime, and cilantro.",
    flavor_profile: "Spicy, citrusy, herbal",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Jalapeños", "Lime juice", "Cilantro", "Garlic", "Salt"],
    steps: [
      "Blend jalapeños and lime.",
      "Add cilantro and garlic.",
      "Season to taste."
    ],
    variations: [
      { name: "Creamy Version", description: "Add sour cream or yogurt." }
    ],
    best_on: ["Tacos", "Shrimp", "Chicken"],
    mix_with: ["Cumin", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "3 days refrigerated",
      notes: "Color may deepen over time."
    }
  },

  {
    id: "fresh-032",
    name: "Fresh Herb Pistou",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "France",
    description: "A French herb sauce similar to pesto but without nuts.",
    flavor_profile: "Herbal, garlicky, smooth",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Basil", "Garlic", "Olive oil", "Salt"],
    steps: [
      "Blend basil and garlic.",
      "Add oil slowly.",
      "Season lightly."
    ],
    variations: [
      { name: "Mixed Herb Pistou", description: "Add parsley or tarragon." }
    ],
    best_on: ["Soup", "Fish", "Vegetables"],
    mix_with: ["Black pepper", "Lemon zest"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "4 days refrigerated",
      notes: "Top with oil to prevent browning."
    }
  },

  {
    id: "fresh-033",
    name: "Fresh Mango Habanero Sauce",
    emoji: "🥭",
    category: "Fresh Sauces",
    origin: "Caribbean",
    description: "A fiery tropical sauce made with mango and habanero peppers.",
    flavor_profile: "Sweet, spicy, fruity",
    heat_level: "Hot",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Mango", "Habanero", "Lime juice", "Garlic", "Salt"],
    steps: [
      "Blend mango and habanero.",
      "Add lime and garlic.",
      "Season to taste."
    ],
    variations: [
      { name: "Pineapple Version", description: "Swap mango for pineapple." }
    ],
    best_on: ["Seafood", "Chicken wings", "Rice bowls"],
    mix_with: ["Ginger", "Allspice"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "4 days refrigerated",
      notes: "Heat intensifies over time."
    }
  },

  {
    id: "fresh-034",
    name: "Fresh Lemon Tahini Dressing",
    emoji: "🍋",
    category: "Fresh Sauces",
    origin: "Middle East",
    description: "A creamy, tangy sauce made with tahini and lemon.",
    flavor_profile: "Nutty, tangy, smooth",
    heat_level: "None",
    image: "",
    equipment: ["Whisk"],
    ingredients: ["Tahini", "Lemon juice", "Garlic", "Water", "Salt"],
    steps: [
      "Whisk tahini and lemon.",
      "Add water to thin.",
      "Season with garlic and salt."
    ],
    variations: [
      { name: "Green Tahini", description: "Blend in parsley or cilantro." }
    ],
    best_on: ["Falafel", "Roasted vegetables", "Salads"],
    mix_with: ["Cumin", "Paprika"],
    used_in_blends: [],
    storage: {
      container: "Sealed jar",
      shelf_life: "7 days refrigerated",
      notes: "Thickens over time."
    }
  },

  {
    id: "fresh-035",
    name: "Fresh Tomato Herb Relish",
    emoji: "🍅",
    category: "Fresh Sauces",
    origin: "Mediterranean",
    description: "A chunky tomato relish with herbs, garlic, and olive oil.",
    flavor_profile: "Fresh, savory, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: ["Tomatoes", "Parsley", "Garlic", "Olive oil", "Salt"],
    steps: [
      "Dice tomatoes.",
      "Mix with herbs and garlic.",
      "Add oil and salt."
    ],
    variations: [
      { name: "Spicy Relish", description: "Add minced chili pepper." }
    ],
    best_on: ["Grilled meats", "Fish", "Bread"],
    mix_with: ["Oregano", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Glass container",
      shelf_life: "2 days refrigerated",
      notes: "Tomatoes soften over time."
    }
  },

  {
    id: "fresh-036",
    name: "Fresh Pineapple Mint Sauce",
    emoji: "🍍",
    category: "Fresh Sauces",
    origin: "Caribbean",
    description: "A refreshing tropical sauce with pineapple and mint.",
    flavor_profile: "Sweet, cool, fruity",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Pineapple", "Mint", "Lime juice", "Honey", "Salt"],
    steps: [
      "Blend pineapple and mint.",
      "Add lime and honey.",
      "Season lightly."
    ],
    variations: [
      { name: "Spicy Version", description: "Add a small chili pepper." }
    ],
    best_on: ["Fish", "Pork", "Shrimp"],
    mix_with: ["Ginger", "Coriander"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3 days refrigerated",
      notes: "Shake before serving."
    }
  },

  {
    id: "fresh-037",
    name: "Fresh Green Papaya Sauce",
    emoji: "🥗",
    category: "Fresh Sauces",
    origin: "Southeast Asia",
    description: "A tangy, crunchy sauce made with shredded green papaya.",
    flavor_profile: "Tangy, fresh, lightly spicy",
    heat_level: "Mild",
    image: "",
    equipment: ["Grater", "Bowl"],
    ingredients: ["Green papaya", "Lime juice", "Fish sauce", "Chili", "Garlic"],
    steps: [
      "Shred papaya.",
      "Mix with lime and fish sauce.",
      "Add chili and garlic."
    ],
    variations: [
      { name: "Sweeter Version", description: "Add a touch of palm sugar." }
    ],
    best_on: ["Seafood", "Chicken", "Salads"],
    mix_with: ["Peanuts", "Mint"],
    used_in_blends: [],
    storage: {
      container: "Covered bowl",
      shelf_life: "1 day refrigerated",
      notes: "Best served fresh."
    }
  },

  {
    id: "fresh-038",
    name: "Fresh Basil Garlic Sauce",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "Italy",
    description: "A simple raw basil sauce with garlic and olive oil.",
    flavor_profile: "Herbal, aromatic, smooth",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Basil", "Garlic", "Olive oil", "Salt"],
    steps: [
      "Blend basil and garlic.",
      "Add oil.",
      "Season lightly."
    ],
    variations: [
      { name: "Lemon Basil Sauce", description: "Add lemon juice for brightness." }
    ],
    best_on: ["Pasta", "Fish", "Vegetables"],
    mix_with: ["Black pepper", "Chili flakes"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3 days refrigerated",
      notes: "Color may fade slightly."
    }
  },

  {
    id: "fresh-039",
    name: "Fresh Cucumber Dill Sauce",
    emoji: "🥒",
    category: "Fresh Sauces",
    origin: "Eastern Europe",
    description: "A cool, refreshing sauce with cucumber, dill, and yogurt.",
    flavor_profile: "Creamy, cool, herbal",
    heat_level: "None",
    image: "",
    equipment: ["Grater", "Bowl"],
    ingredients: ["Cucumber", "Yogurt", "Dill", "Garlic", "Salt"],
    steps: [
      "Grate cucumber.",
      "Mix with yogurt and dill.",
      "Season to taste."
    ],
    variations: [
      { name: "Mint Version", description: "Add chopped mint." }
    ],
    best_on: ["Fish", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Lemon"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "2 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-040",
    name: "Fresh Chili Herb Sauce",
    emoji: "🌶️",
    category: "Fresh Sauces",
    origin: "Global",
    description: "A spicy herb sauce made with fresh chilies and mixed herbs.",
    flavor_profile: "Spicy, herbal, bright",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Red chilies", "Parsley", "Cilantro", "Garlic", "Vinegar"],
    steps: [
      "Blend chilies and herbs.",
      "Add garlic and vinegar.",
      "Season to taste."
    ],
    variations: [
      { name: "Green Version", description: "Use green chilies and cilantro only." }
    ],
    best_on: ["Grilled meats", "Seafood", "Vegetables"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "3 days refrigerated",
      notes: "Shake before use."
    }
  }
];

export default FRESH_SAUCES_BATCH_4;

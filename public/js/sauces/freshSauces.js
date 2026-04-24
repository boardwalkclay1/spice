// Fresh Sauces — Batch 1 (10 items)

const FRESH_SAUCES = [
  {
    id: "fresh-001",
    name: "Classic Chimichurri",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "Argentina",
    description: "A bright, herb-forward sauce made with parsley, garlic, and vinegar.",
    flavor_profile: "Herbaceous, tangy, garlicky",
    heat_level: "Mild",
    image: "",
    equipment: ["Bowl", "Knife"],
    ingredients: [
      "Fresh parsley",
      "Garlic",
      "Olive oil",
      "Red wine vinegar",
      "Oregano",
      "Chili flakes"
    ],
    steps: [
      "Finely chop parsley and garlic.",
      "Mix with oil, vinegar, and seasonings.",
      "Let rest 10 minutes before serving."
    ],
    variations: [
      { name: "Cilantro Chimichurri", description: "Swap half the parsley for cilantro." }
    ],
    best_on: ["Steak", "Grilled chicken", "Roasted vegetables"],
    mix_with: ["Smoked paprika", "Cumin"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "3–4 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-002",
    name: "Basil Pesto",
    emoji: "🌱",
    category: "Fresh Sauces",
    origin: "Italy",
    description: "A rich, aromatic blend of basil, pine nuts, garlic, and Parmesan.",
    flavor_profile: "Savory, nutty, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Food processor"],
    ingredients: [
      "Fresh basil",
      "Pine nuts",
      "Garlic",
      "Olive oil",
      "Parmesan",
      "Salt"
    ],
    steps: [
      "Blend basil, nuts, and garlic.",
      "Stream in olive oil.",
      "Stir in Parmesan."
    ],
    variations: [
      { name: "Spinach Pesto", description: "Replace half the basil with spinach." }
    ],
    best_on: ["Pasta", "Sandwiches", "Grilled vegetables"],
    mix_with: ["Lemon zest", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Airtight jar",
      shelf_life: "5 days refrigerated",
      notes: "Top with oil to prevent browning."
    }
  },

  {
    id: "fresh-003",
    name: "Fresh Salsa Verde",
    emoji: "🟩",
    category: "Fresh Sauces",
    origin: "Mexico",
    description: "A zesty green salsa made with tomatillos, cilantro, and lime.",
    flavor_profile: "Bright, tangy, herbal",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: [
      "Tomatillos",
      "Cilantro",
      "Jalapeño",
      "Onion",
      "Lime juice",
      "Salt"
    ],
    steps: [
      "Blend tomatillos and jalapeño.",
      "Add cilantro and lime.",
      "Season to taste."
    ],
    variations: [
      { name: "Roasted Verde", description: "Roast tomatillos for deeper flavor." }
    ],
    best_on: ["Tacos", "Chicken", "Fish"],
    mix_with: ["Cumin", "Garlic powder"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "3 days refrigerated",
      notes: "Stays green due to tomatillo acidity."
    }
  },

  {
    id: "fresh-004",
    name: "Tahini Lemon Sauce",
    emoji: "🍋",
    category: "Fresh Sauces",
    origin: "Middle East",
    description: "A creamy, tangy sauce made from sesame paste and lemon.",
    flavor_profile: "Nutty, tangy, creamy",
    heat_level: "None",
    image: "",
    equipment: ["Whisk"],
    ingredients: [
      "Tahini",
      "Lemon juice",
      "Garlic",
      "Water",
      "Salt"
    ],
    steps: [
      "Whisk tahini and lemon until thick.",
      "Add water to thin.",
      "Season with salt and garlic."
    ],
    variations: [
      { name: "Herb Tahini", description: "Add chopped parsley or dill." }
    ],
    best_on: ["Falafel", "Roasted vegetables", "Grain bowls"],
    mix_with: ["Cumin", "Paprika"],
    used_in_blends: [],
    storage: {
      container: "Sealed jar",
      shelf_life: "7 days refrigerated",
      notes: "Thickens over time; add water to loosen."
    }
  },

  {
    id: "fresh-005",
    name: "Avocado Lime Crema",
    emoji: "🥑",
    category: "Fresh Sauces",
    origin: "California",
    description: "A smooth, cooling sauce made with avocado and lime.",
    flavor_profile: "Creamy, citrusy, mild",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: [
      "Avocado",
      "Lime juice",
      "Sour cream or yogurt",
      "Cilantro",
      "Salt"
    ],
    steps: [
      "Blend all ingredients.",
      "Adjust lime and salt to taste."
    ],
    variations: [
      { name: "Spicy Crema", description: "Add jalapeño or chipotle." }
    ],
    best_on: ["Tacos", "Burritos", "Grilled shrimp"],
    mix_with: ["Garlic powder", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Airtight container",
      shelf_life: "2 days refrigerated",
      notes: "Browning occurs naturally; cover surface with plastic wrap."
    }
  },

  {
    id: "fresh-006",
    name: "Cucumber Yogurt Raita",
    emoji: "🥒",
    category: "Fresh Sauces",
    origin: "India",
    description: "A cooling yogurt sauce with cucumber and spices.",
    flavor_profile: "Cool, creamy, refreshing",
    heat_level: "None",
    image: "",
    equipment: ["Grater", "Bowl"],
    ingredients: [
      "Yogurt",
      "Cucumber",
      "Mint",
      "Cumin",
      "Salt"
    ],
    steps: [
      "Grate cucumber.",
      "Mix with yogurt and spices.",
      "Chill before serving."
    ],
    variations: [
      { name: "Boondi Raita", description: "Add crispy chickpea pearls." }
    ],
    best_on: ["Curry", "Rice dishes", "Kebabs"],
    mix_with: ["Coriander", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Covered bowl",
      shelf_life: "2 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-007",
    name: "Fresh Mango Salsa",
    emoji: "🥭",
    category: "Fresh Sauces",
    origin: "Caribbean",
    description: "A sweet and tangy salsa with mango, lime, and chili.",
    flavor_profile: "Sweet, bright, lightly spicy",
    heat_level: "Mild",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: [
      "Mango",
      "Red onion",
      "Cilantro",
      "Lime juice",
      "Jalapeño",
      "Salt"
    ],
    steps: [
      "Dice mango and onion.",
      "Mix with lime, cilantro, and chili.",
      "Season to taste."
    ],
    variations: [
      { name: "Pineapple Salsa", description: "Swap mango for pineapple." }
    ],
    best_on: ["Fish tacos", "Chicken", "Rice bowls"],
    mix_with: ["Chili powder", "Cumin"],
    used_in_blends: [],
    storage: {
      container: "Glass container",
      shelf_life: "2 days refrigerated",
      notes: "Fruit softens over time."
    }
  },

  {
    id: "fresh-008",
    name: "Garlic Herb Aioli",
    emoji: "🧄",
    category: "Fresh Sauces",
    origin: "France",
    description: "A creamy garlic-forward sauce made with oil and egg.",
    flavor_profile: "Rich, garlicky, smooth",
    heat_level: "None",
    image: "",
    equipment: ["Whisk or blender"],
    ingredients: [
      "Egg yolk",
      "Olive oil",
      "Garlic",
      "Lemon juice",
      "Salt"
    ],
    steps: [
      "Whisk yolk and lemon.",
      "Slowly emulsify oil.",
      "Add garlic and salt."
    ],
    variations: [
      { name: "Roasted Garlic Aioli", description: "Use roasted garlic for sweetness." }
    ],
    best_on: ["Fries", "Burgers", "Seafood"],
    mix_with: ["Paprika", "Parsley"],
    used_in_blends: [],
    storage: {
      container: "Airtight jar",
      shelf_life: "3 days refrigerated",
      notes: "Keep cold due to egg content."
    }
  },

  {
    id: "fresh-009",
    name: "Cilantro Lime Sauce",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "Southwest US",
    description: "A zesty, creamy sauce with cilantro and lime.",
    flavor_profile: "Bright, creamy, herbal",
    heat_level: "None",
    image: "",
    equipment: ["Blender"],
    ingredients: [
      "Cilantro",
      "Lime juice",
      "Sour cream",
      "Garlic",
      "Salt"
    ],
    steps: [
      "Blend all ingredients.",
      "Adjust lime to taste."
    ],
    variations: [
      { name: "Spicy Version", description: "Add serrano pepper." }
    ],
    best_on: ["Tacos", "Chicken", "Salads"],
    mix_with: ["Cumin", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Sealed jar",
      shelf_life: "3 days refrigerated",
      notes: "Color may fade slightly."
    }
  },

  {
    id: "fresh-010",
    name: "Fresh Tomato Salsa",
    emoji: "🍅",
    category: "Fresh Sauces",
    origin: "Mexico",
    description: "A classic pico-style salsa with tomato, onion, and cilantro.",
    flavor_profile: "Fresh, bright, lightly spicy",
    heat_level: "Mild",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: [
      "Tomatoes",
      "Onion",
      "Cilantro",
      "Jalapeño",
      "Lime juice",
      "Salt"
    ],
    steps: [
      "Dice tomatoes and onion.",
      "Mix with cilantro and chili.",
      "Add lime and salt."
    ],
    variations: [
      { name: "Roasted Salsa", description: "Char tomatoes before chopping." }
    ],
    best_on: ["Tortilla chips", "Tacos", "Eggs"],
    mix_with: ["Garlic powder", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Glass container",
      shelf_life: "1–2 days refrigerated",
      notes: "Tomatoes release liquid over time."
    }
  }
];

export default FRESH_SAUCES;

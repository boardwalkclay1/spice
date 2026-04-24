// Fresh Sauces — Batch 2 (items 11–20)

const FRESH_SAUCES_BATCH_2 = [
  {
    id: "fresh-011",
    name: "Mint Chutney",
    emoji: "🌱",
    category: "Fresh Sauces",
    origin: "India",
    description: "A bright, cooling chutney made with mint, cilantro, and green chili.",
    flavor_profile: "Fresh, herbal, tangy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Mint", "Cilantro", "Green chili", "Lime juice", "Salt"],
    steps: [
      "Blend herbs and chili.",
      "Add lime and salt.",
      "Adjust consistency with water."
    ],
    variations: [
      { name: "Yogurt Mint Chutney", description: "Blend in yogurt for creaminess." }
    ],
    best_on: ["Samosas", "Kebabs", "Rice bowls"],
    mix_with: ["Cumin", "Black salt"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "2 days refrigerated",
      notes: "Color darkens naturally."
    }
  },

  {
    id: "fresh-012",
    name: "Fresh Harissa",
    emoji: "🌶️",
    category: "Fresh Sauces",
    origin: "Tunisia",
    description: "A spicy chili paste made with fresh peppers, garlic, and spices.",
    flavor_profile: "Spicy, smoky, aromatic",
    heat_level: "Hot",
    image: "",
    equipment: ["Blender"],
    ingredients: [
      "Red chilies",
      "Garlic",
      "Olive oil",
      "Cumin",
      "Coriander",
      "Salt"
    ],
    steps: [
      "Blend chilies and garlic.",
      "Add spices and oil.",
      "Adjust heat level."
    ],
    variations: [
      { name: "Green Harissa", description: "Use green chilies and herbs." }
    ],
    best_on: ["Lamb", "Chicken", "Vegetables"],
    mix_with: ["Smoked paprika", "Caraway"],
    used_in_blends: [],
    storage: {
      container: "Airtight jar",
      shelf_life: "5 days refrigerated",
      notes: "Oil layer helps preserve freshness."
    }
  },

  {
    id: "fresh-013",
    name: "Fresh Ginger Scallion Sauce",
    emoji: "🧄",
    category: "Fresh Sauces",
    origin: "China",
    description: "A fragrant raw sauce made with ginger, scallions, and hot oil.",
    flavor_profile: "Savory, aromatic, sharp",
    heat_level: "None",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: ["Ginger", "Scallions", "Salt", "Hot oil"],
    steps: [
      "Finely mince ginger and scallions.",
      "Place in bowl with salt.",
      "Pour hot oil over to bloom flavors."
    ],
    variations: [
      { name: "Garlic Version", description: "Add minced garlic for extra punch." }
    ],
    best_on: ["Chicken", "Rice", "Noodles"],
    mix_with: ["White pepper", "Soy sauce"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "4 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-014",
    name: "Fresh Coconut Sambal",
    emoji: "🥥",
    category: "Fresh Sauces",
    origin: "Sri Lanka",
    description: "A spicy coconut-based sauce with chili, lime, and onion.",
    flavor_profile: "Spicy, citrusy, creamy",
    heat_level: "Medium",
    image: "",
    equipment: ["Grater", "Bowl"],
    ingredients: ["Fresh coconut", "Red chili", "Lime juice", "Onion", "Salt"],
    steps: [
      "Grate coconut.",
      "Mix with chili and onion.",
      "Add lime and salt."
    ],
    variations: [
      { name: "Maldive Fish Sambal", description: "Add dried fish flakes for umami." }
    ],
    best_on: ["Rice", "Fish", "Vegetables"],
    mix_with: ["Turmeric", "Curry leaves"],
    used_in_blends: [],
    storage: {
      container: "Covered bowl",
      shelf_life: "1 day refrigerated",
      notes: "Best eaten fresh."
    }
  },

  {
    id: "fresh-015",
    name: "Fresh Peanut Lime Sauce",
    emoji: "🥜",
    category: "Fresh Sauces",
    origin: "Southeast Asia",
    description: "A creamy peanut-based sauce brightened with lime and chili.",
    flavor_profile: "Nutty, tangy, mildly spicy",
    heat_level: "Mild",
    image: "",
    equipment: ["Whisk"],
    ingredients: ["Peanut butter", "Lime juice", "Soy sauce", "Chili", "Garlic"],
    steps: [
      "Whisk peanut butter and lime.",
      "Add soy, garlic, and chili.",
      "Thin with water if needed."
    ],
    variations: [
      { name: "Coconut Peanut Sauce", description: "Add coconut milk for richness." }
    ],
    best_on: ["Satay", "Noodles", "Salads"],
    mix_with: ["Ginger", "Brown sugar"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "5 days refrigerated",
      notes: "Thickens when cold."
    }
  },

  {
    id: "fresh-016",
    name: "Fresh Dill Sauce",
    emoji: "🌿",
    category: "Fresh Sauces",
    origin: "Scandinavia",
    description: "A cool, creamy sauce with dill, lemon, and yogurt.",
    flavor_profile: "Herbal, tangy, creamy",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Dill", "Yogurt", "Lemon juice", "Garlic", "Salt"],
    steps: [
      "Chop dill.",
      "Mix with yogurt and lemon.",
      "Season with garlic and salt."
    ],
    variations: [
      { name: "Mustard Dill Sauce", description: "Add Dijon mustard." }
    ],
    best_on: ["Salmon", "Potatoes", "Vegetables"],
    mix_with: ["White pepper", "Chives"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "3 days refrigerated",
      notes: "Stir before serving."
    }
  },

  {
    id: "fresh-017",
    name: "Fresh Papaya Hot Sauce",
    emoji: "🌶️",
    category: "Fresh Sauces",
    origin: "Caribbean",
    description: "A fruity, spicy sauce made with ripe papaya and hot peppers.",
    flavor_profile: "Sweet, spicy, tropical",
    heat_level: "Hot",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Papaya", "Scotch bonnet", "Lime juice", "Garlic", "Salt"],
    steps: [
      "Blend papaya and peppers.",
      "Add lime and garlic.",
      "Season to taste."
    ],
    variations: [
      { name: "Pineapple Version", description: "Swap papaya for pineapple." }
    ],
    best_on: ["Seafood", "Chicken", "Rice"],
    mix_with: ["Ginger", "Allspice"],
    used_in_blends: [],
    storage: {
      container: "Glass bottle",
      shelf_life: "4 days refrigerated",
      notes: "Color deepens over time."
    }
  },

  {
    id: "fresh-018",
    name: "Fresh Herb Vinaigrette",
    emoji: "🥗",
    category: "Fresh Sauces",
    origin: "France",
    description: "A zesty dressing made with herbs, vinegar, and olive oil.",
    flavor_profile: "Bright, herbal, acidic",
    heat_level: "None",
    image: "",
    equipment: ["Whisk"],
    ingredients: ["Parsley", "Chives", "Vinegar", "Olive oil", "Mustard"],
    steps: [
      "Whisk vinegar and mustard.",
      "Add oil to emulsify.",
      "Stir in herbs."
    ],
    variations: [
      { name: "Citrus Vinaigrette", description: "Replace vinegar with lemon." }
    ],
    best_on: ["Salads", "Fish", "Vegetables"],
    mix_with: ["Black pepper", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "5 days refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "fresh-019",
    name: "Fresh Pineapple Salsa",
    emoji: "🍍",
    category: "Fresh Sauces",
    origin: "Hawaii",
    description: "A sweet and tangy salsa with pineapple, chili, and lime.",
    flavor_profile: "Sweet, bright, lightly spicy",
    heat_level: "Mild",
    image: "",
    equipment: ["Knife", "Bowl"],
    ingredients: ["Pineapple", "Red onion", "Cilantro", "Lime juice", "Chili"],
    steps: [
      "Dice pineapple and onion.",
      "Mix with cilantro and chili.",
      "Add lime and salt."
    ],
    variations: [
      { name: "Coconut Pineapple Salsa", description: "Add shredded coconut." }
    ],
    best_on: ["Fish", "Chicken", "Rice bowls"],
    mix_with: ["Cumin", "Chili powder"],
    used_in_blends: [],
    storage: {
      container: "Glass container",
      shelf_life: "2 days refrigerated",
      notes: "Fruit softens over time."
    }
  },

  {
    id: "fresh-020",
    name: "Fresh Garlic Chili Sauce",
    emoji: "🧄",
    category: "Fresh Sauces",
    origin: "Vietnam",
    description: "A sharp, spicy sauce made with garlic, chili, and vinegar.",
    flavor_profile: "Spicy, tangy, pungent",
    heat_level: "Hot",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Red chilies", "Garlic", "Vinegar", "Sugar", "Salt"],
    steps: [
      "Blend chilies and garlic.",
      "Add vinegar and sugar.",
      "Adjust seasoning."
    ],
    variations: [
      { name: "Sweet Chili Version", description: "Increase sugar for balance." }
    ],
    best_on: ["Noodles", "Seafood", "Pork"],
    mix_with: ["Fish sauce", "Lime"],
    used_in_blends: [],
    storage: {
      container: "Glass jar",
      shelf_life: "4 days refrigerated",
      notes: "Stir before serving."
    }
  }
];

export default FRESH_SAUCES_BATCH_2;

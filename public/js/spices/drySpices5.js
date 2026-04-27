// Dry Spices — Batch 5 (items 41–50)

const DRY_SPICES_BATCH_5 = [
  {
    id: "dry-041",
    name: "Dried Chilli Flakes",
    emoji: "🌶️",
    category: "Dry Spices",
    origin: "Global",
    description: "Crushed dried chilies used for heat and texture.",
    flavor_profile: "Spicy, sharp, earthy",
    heat_level: "Medium–Hot",
    image: "",
    equipment: ["Grinder (optional)"],
    ingredients: ["Dried red chilies"],
    steps: [
      "Remove stems.",
      "Crush or grind to desired flake size.",
      "Store airtight."
    ],
    variations: [
      { name: "Extra Hot Flakes", description: "Include seeds for more heat." }
    ],
    best_on: ["Pizza", "Pasta", "Stir-fries"],
    mix_with: ["Garlic powder", "Oregano"],
    used_in_blends: ["Chili flakes mix"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Heat intensifies over time."
    }
  },

  {
    id: "dry-042",
    name: "Dried Curry Leaves",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "India",
    description: "A fragrant dried leaf used in South Asian cooking.",
    flavor_profile: "Citrusy, herbal, nutty",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh curry leaves"],
    steps: [
      "Wash and dry leaves.",
      "Dehydrate until crisp.",
      "Store whole or crushed."
    ],
    variations: [
      { name: "Curry Leaf Powder", description: "Grind for seasoning blends." }
    ],
    best_on: ["Lentils", "Rice", "Curries"],
    mix_with: ["Mustard seeds", "Cumin"],
    used_in_blends: ["South Indian spice mixes"],
    storage: {
      container: "Airtight jar",
      shelf_life: "6–9 months",
      notes: "Very aromatic; store separately."
    }
  },

  {
    id: "dry-043",
    name: "Dried Porcini Powder",
    emoji: "🍄",
    category: "Dry Spices",
    origin: "Italy",
    description: "A rich, umami-packed powder made from dried porcini mushrooms.",
    flavor_profile: "Savory, earthy, deep umami",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried porcini mushrooms"],
    steps: [
      "Dry mushrooms fully.",
      "Grind into fine powder.",
      "Sift if needed."
    ],
    variations: [
      { name: "Mixed Mushroom Powder", description: "Blend porcini with shiitake." }
    ],
    best_on: ["Stews", "Pasta", "Gravies"],
    mix_with: ["Garlic powder", "Black pepper"],
    used_in_blends: ["Umami seasoning"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Keep dry to prevent clumping."
    }
  },

  {
    id: "dry-044",
    name: "Dried Shiitake Powder",
    emoji: "🍄",
    category: "Dry Spices",
    origin: "East Asia",
    description: "A savory powder made from dried shiitake mushrooms.",
    flavor_profile: "Umami, earthy, smoky",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried shiitake mushrooms"],
    steps: [
      "Dry mushrooms fully.",
      "Grind into powder.",
      "Store airtight."
    ],
    variations: [
      { name: "Coarse Shiitake", description: "Used in broths." }
    ],
    best_on: ["Soups", "Ramen", "Stir-fries"],
    mix_with: ["Ginger powder", "Garlic powder"],
    used_in_blends: ["Umami seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Very aromatic; store away from light."
    }
  },

  {
    id: "dry-045",
    name: "Dried Tomato Powder",
    emoji: "🍅",
    category: "Dry Spices",
    origin: "Global",
    description: "A tangy, savory powder made from dehydrated tomatoes.",
    flavor_profile: "Tangy, sweet, savory",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Tomatoes"],
    steps: [
      "Slice tomatoes.",
      "Dehydrate fully.",
      "Grind into powder."
    ],
    variations: [
      { name: "Smoked Tomato Powder", description: "Smoke before grinding." }
    ],
    best_on: ["Pasta", "Soups", "Seasoning blends"],
    mix_with: ["Basil", "Oregano"],
    used_in_blends: ["Pizza seasoning"],
    storage: {
      container: "Glass jar",
      shelf_life: "9 months",
      notes: "Keep dry to prevent clumping."
    }
  },

  {
    id: "dry-046",
    name: "Dried Spinach Powder",
    emoji: "🥬",
    category: "Dry Spices",
    origin: "Global",
    description: "A nutrient-rich powder made from dried spinach leaves.",
    flavor_profile: "Earthy, mild, vegetal",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Spinach leaves"],
    steps: [
      "Dry leaves fully.",
      "Grind into powder.",
      "Sift if needed."
    ],
    variations: [
      { name: "Superfine Spinach Powder", description: "Extra smooth for sauces." }
    ],
    best_on: ["Smoothies", "Pasta dough", "Soups"],
    mix_with: ["Garlic powder", "Onion powder"],
    used_in_blends: ["Green seasoning blends"],
    storage: {
      container: "Airtight jar",
      shelf_life: "6 months",
      notes: "Color fades over time."
    }
  },

  {
    id: "dry-047",
    name: "Dried Beetroot Powder",
    emoji: "🟥",
    category: "Dry Spices",
    origin: "Global",
    description: "A vibrant red powder made from dried beets.",
    flavor_profile: "Sweet, earthy, mild",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Beets"],
    steps: [
      "Slice beets thin.",
      "Dry fully.",
      "Grind into powder.",
      "Sift for a smoother texture if desired."
    ],
    variations: [
      { name: "Smoked Beetroot Powder", description: "Smoke beets before drying for deeper flavor." }
    ],
    best_on: ["Smoothies", "Pasta dough", "Seasoning blends"],
    mix_with: ["Garlic powder", "Onion powder"],
    used_in_blends: ["Vegetable seasoning mixes"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Keep dry to maintain color vibrancy."
    }
  },

  {
    id: "dry-048",
    name: "Dried Carrot Powder",
    emoji: "🥕",
    category: "Dry Spices",
    origin: "Global",
    description: "A sweet, earthy powder made from dehydrated carrots.",
    flavor_profile: "Sweet, earthy, mild",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Carrots"],
    steps: [
      "Slice carrots thin.",
      "Dry fully.",
      "Grind into powder."
    ],
    variations: [],
    best_on: ["Soups", "Stews", "Seasoning blends"],
    mix_with: ["Onion powder", "Garlic powder"],
    used_in_blends: ["Vegetable seasoning mixes"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Keep dry to prevent clumping."
    }
  },

  {
    id: "dry-049",
    name: "Dried Bell Pepper Powder",
    emoji: "🫑",
    category: "Dry Spices",
    origin: "Global",
    description: "A sweet, smoky powder made from dried bell peppers.",
    flavor_profile: "Sweet, smoky, mild",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Bell peppers"],
    steps: [
      "Slice peppers.",
      "Dry fully.",
      "Grind into powder."
    ],
    variations: [],
    best_on: ["Pasta", "Soups", "Seasoning blends"],
    mix_with: ["Paprika", "Garlic powder"],
    used_in_blends: ["Vegetable seasoning mixes"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Keep dry to maintain flavor."
    }
  },

  {
    id: "dry-050",
    name: "Dried Lemon Peel Powder",
    emoji: "🍋",
    category: "Dry Spices",
    origin: "Global",
    description: "A bright, citrusy powder made from dried lemon peel.",
    flavor_profile: "Citrusy, bright, tangy",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Lemon peel"],
    steps: [
      "Remove white pith.",
      "Dry peel fully.",
      "Grind into powder."
    ],
    variations: [],
    best_on: ["Fish", "Vegetables", "Seasoning blends"],
    mix_with: ["Garlic powder", "Black pepper"],
    used_in_blends: ["Lemon pepper seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Store away from light to preserve aroma."
    }
  }
];

export default DRY_SPICES_BATCH_5;

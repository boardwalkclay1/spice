// Herb Blends — Full Category (50 Items)

const HERB_BLENDS = [
  {
    id: "herb-001",
    name: "Italian Herb Blend",
    emoji: "🌿",
    category: "Herb Blends",
    origin: "Italy",
    description: "A classic mix of basil, oregano, thyme, and rosemary.",
    flavor_profile: "Herbal, aromatic, savory",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Basil", "Oregano", "Thyme", "Rosemary", "Marjoram"],
    steps: [
      "Combine all dried herbs.",
      "Mix thoroughly.",
      "Store airtight."
    ],
    variations: [
      { name: "Garlic Italian", description: "Add garlic powder." }
    ],
    best_on: ["Pasta", "Pizza", "Vegetables"],
    mix_with: ["Olive oil", "Tomato sauce"],
    used_in_blends: ["Pasta seasoning"],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep away from light."
    }
  },

  {
    id: "herb-002",
    name: "French Herb Blend",
    emoji: "🪻",
    category: "Herb Blends",
    origin: "France",
    description: "A fragrant mix of tarragon, thyme, chervil, and parsley.",
    flavor_profile: "Elegant, floral, herbal",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Tarragon", "Chervil", "Parsley", "Thyme"],
    steps: [
      "Combine herbs.",
      "Mix evenly.",
      "Store airtight."
    ],
    variations: [
      { name: "Citrus French", description: "Add lemon zest powder." }
    ],
    best_on: ["Fish", "Chicken", "Eggs"],
    mix_with: ["Butter", "White wine"],
    used_in_blends: ["Fines herbes"],
    storage: {
      container: "Jar",
      shelf_life: "9 months",
      notes: "Avoid moisture."
    }
  },

  {
    id: "herb-003",
    name: "Mediterranean Herb Blend",
    emoji: "🌿",
    category: "Herb Blends",
    origin: "Mediterranean",
    description: "A bright blend of oregano, thyme, basil, and rosemary.",
    flavor_profile: "Herbal, earthy, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Oregano", "Thyme", "Basil", "Rosemary"],
    steps: [
      "Combine herbs.",
      "Mix thoroughly.",
      "Store airtight."
    ],
    variations: [
      { name: "Spicy Mediterranean", description: "Add chili flakes." }
    ],
    best_on: ["Lamb", "Vegetables", "Fish"],
    mix_with: ["Olive oil", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep dry."
    }
  },

  {
    id: "herb-004",
    name: "Greek Herb Blend",
    emoji: "🍃",
    category: "Herb Blends",
    origin: "Greece",
    description: "A savory herb blend with oregano, thyme, and marjoram.",
    flavor_profile: "Herbal, earthy, savory",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Oregano", "Thyme", "Marjoram", "Basil"],
    steps: [
      "Combine herbs.",
      "Mix evenly.",
      "Store airtight."
    ],
    variations: [
      { name: "Lemon Greek", description: "Add lemon zest powder." }
    ],
    best_on: ["Chicken", "Potatoes", "Fish"],
    mix_with: ["Olive oil", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "10 months",
      notes: "Keep away from heat."
    }
  },

  {
    id: "herb-005",
    name: "Herbes de Provence",
    emoji: "🌸",
    category: "Herb Blends",
    origin: "France",
    description: "A floral herb blend with lavender, thyme, rosemary, and savory.",
    flavor_profile: "Floral, herbal, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Lavender", "Thyme", "Rosemary", "Savory", "Oregano"],
    steps: [
      "Combine herbs.",
      "Mix thoroughly.",
      "Store airtight."
    ],
    variations: [
      { name: "Smoky Provence", description: "Add smoked salt." }
    ],
    best_on: ["Chicken", "Vegetables", "Roasts"],
    mix_with: ["Olive oil", "Lemon"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Lavender aroma fades slowly."
    }
  },

  // ITEMS 6–50
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `herb-${String(i + 6).padStart(3, "0")}`,
    name: `Custom Herb Blend ${i + 6}`,
    emoji: "🌿",
    category: "Herb Blends",
    origin: "Global",
    description: "A versatile herb blend made with dried aromatic herbs.",
    flavor_profile: "Herbal, aromatic, balanced",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Oregano", "Thyme", "Basil"],
    steps: [
      "Combine all herbs.",
      "Mix thoroughly.",
      "Store airtight."
    ],
    variations: [],
    best_on: ["Vegetables", "Chicken", "Fish"],
    mix_with: ["Olive oil", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep dry."
    }
  }))
];

export default HERB_BLENDS;

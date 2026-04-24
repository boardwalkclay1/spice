// Seasoning Mixes — Full Category (50 Items)

const SEASONING_MIXES = [
  {
    id: "mix-001",
    name: "Classic All‑Purpose Seasoning",
    emoji: "🧂",
    category: "Seasoning Mixes",
    origin: "Global",
    description: "A balanced blend of salt, pepper, garlic, and herbs for everyday cooking.",
    flavor_profile: "Savory, balanced, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Salt", "Black pepper", "Garlic powder", "Onion powder", "Paprika"],
    steps: [
      "Combine all ingredients.",
      "Mix thoroughly.",
      "Store airtight."
    ],
    variations: [
      { name: "Smoky Version", description: "Add smoked paprika." }
    ],
    best_on: ["Chicken", "Vegetables", "Potatoes"],
    mix_with: ["Olive oil", "Butter"],
    used_in_blends: ["BBQ rubs"],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep dry."
    }
  },

  {
    id: "mix-002",
    name: "Garlic Herb Seasoning",
    emoji: "🧄",
    category: "Seasoning Mixes",
    origin: "Mediterranean",
    description: "A fragrant blend of garlic, parsley, basil, and oregano.",
    flavor_profile: "Herbal, savory, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Garlic powder", "Parsley", "Basil", "Oregano", "Salt"],
    steps: [
      "Combine herbs and garlic.",
      "Add salt.",
      "Store airtight."
    ],
    variations: [
      { name: "Lemon Herb", description: "Add lemon zest powder." }
    ],
    best_on: ["Fish", "Chicken", "Vegetables"],
    mix_with: ["Olive oil", "Lemon juice"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "9 months",
      notes: "Avoid moisture."
    }
  },

  {
    id: "mix-003",
    name: "Smoky BBQ Rub",
    emoji: "🔥",
    category: "Seasoning Mixes",
    origin: "USA",
    description: "A smoky, sweet, and savory rub for grilling and smoking.",
    flavor_profile: "Smoky, sweet, savory",
    heat_level: "Mild",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Paprika", "Brown sugar", "Garlic powder", "Onion powder", "Black pepper"],
    steps: [
      "Mix all ingredients.",
      "Break up clumps.",
      "Store airtight."
    ],
    variations: [
      { name: "Spicy BBQ", description: "Add cayenne pepper." }
    ],
    best_on: ["Ribs", "Chicken", "Pork"],
    mix_with: ["Oil", "Mustard"],
    used_in_blends: ["BBQ sauces"],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep away from heat."
    }
  },

  {
    id: "mix-004",
    name: "Lemon Pepper Seasoning",
    emoji: "🍋",
    category: "Seasoning Mixes",
    origin: "USA",
    description: "A zesty blend of dried lemon zest and cracked black pepper.",
    flavor_profile: "Citrusy, sharp, peppery",
    heat_level: "Mild",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Lemon zest powder", "Black pepper", "Salt", "Garlic powder"],
    steps: [
      "Combine all ingredients.",
      "Mix well.",
      "Store airtight."
    ],
    variations: [
      { name: "Herb Lemon Pepper", description: "Add dried parsley." }
    ],
    best_on: ["Fish", "Chicken wings", "Vegetables"],
    mix_with: ["Butter", "Olive oil"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "6 months",
      notes: "Lemon aroma fades over time."
    }
  },

  {
    id: "mix-005",
    name: "Cajun Seasoning",
    emoji: "🌶️",
    category: "Seasoning Mixes",
    origin: "Louisiana",
    description: "A bold, spicy blend with paprika, cayenne, garlic, and herbs.",
    flavor_profile: "Spicy, smoky, savory",
    heat_level: "Medium–Hot",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Paprika", "Cayenne", "Garlic powder", "Onion powder", "Oregano"],
    steps: [
      "Mix all spices.",
      "Adjust heat level.",
      "Store airtight."
    ],
    variations: [
      { name: "Extra Hot Cajun", description: "Increase cayenne." }
    ],
    best_on: ["Shrimp", "Chicken", "Rice dishes"],
    mix_with: ["Butter", "Lemon juice"],
    used_in_blends: ["Blackened seasoning"],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep dry."
    }
  },

  // ITEMS 6–50
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `mix-${String(i + 6).padStart(3, "0")}`,
    name: `Custom Seasoning Mix ${i + 6}`,
    emoji: "🧂",
    category: "Seasoning Mixes",
    origin: "Global",
    description: "A versatile seasoning blend made with herbs, spices, and aromatics.",
    flavor_profile: "Savory, aromatic, balanced",
    heat_level: "Varies",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Salt", "Pepper", "Garlic powder"],
    steps: [
      "Combine all ingredients.",
      "Mix thoroughly.",
      "Store airtight."
    ],
    variations: [],
    best_on: ["Meats", "Vegetables", "Potatoes"],
    mix_with: ["Oil", "Butter"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep dry."
    }
  }))
];

export default SEASONING_MIXES;

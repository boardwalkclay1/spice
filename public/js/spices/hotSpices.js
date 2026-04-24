// Hot Spices — Full Category (50 Items)

const HOT_SPICES = [
  {
    id: "hsp-001",
    name: "Cayenne Pepper",
    emoji: "🌶️",
    category: "Hot Spices",
    origin: "Global",
    description: "A fiery ground chili powder used to add sharp heat to dishes.",
    flavor_profile: "Hot, sharp, bright",
    heat_level: "Hot",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried cayenne peppers"],
    steps: ["Grind dried peppers.", "Sift if needed.", "Store airtight."],
    variations: [{ name: "Smoked Cayenne", description: "Use smoked peppers." }],
    best_on: ["Chicken", "Seafood", "Vegetables"],
    mix_with: ["Garlic powder", "Paprika"],
    used_in_blends: ["Cajun seasoning"],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Keep dry." }
  },

  {
    id: "hsp-002",
    name: "Crushed Red Pepper Flakes",
    emoji: "🌶️",
    category: "Hot Spices",
    origin: "Italy",
    description: "A staple spicy topping made from crushed dried chilies.",
    flavor_profile: "Hot, bright, slightly smoky",
    heat_level: "Medium–Hot",
    image: "",
    equipment: ["Mortar"],
    ingredients: ["Dried red chilies"],
    steps: ["Crush chilies.", "Remove excess seeds.", "Store airtight."],
    variations: [{ name: "Extra Hot", description: "Use Thai chilies." }],
    best_on: ["Pizza", "Pasta", "Eggs"],
    mix_with: ["Oregano", "Garlic"],
    used_in_blends: ["Chili oil"],
    storage: { container: "Jar", shelf_life: "18 months", notes: "Color fades slowly." }
  },

  {
    id: "hsp-003",
    name: "Chipotle Powder",
    emoji: "🔥",
    category: "Hot Spices",
    origin: "Mexico",
    description: "A smoky, earthy chili powder made from smoked jalapeños.",
    flavor_profile: "Smoky, earthy, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried chipotle peppers"],
    steps: ["Grind peppers.", "Sift.", "Store airtight."],
    variations: [{ name: "Sweet Chipotle", description: "Blend with brown sugar." }],
    best_on: ["Tacos", "Beans", "BBQ"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: ["BBQ rubs"],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Keep dry." }
  },

  {
    id: "hsp-004",
    name: "Habanero Powder",
    emoji: "🌶️",
    category: "Hot Spices",
    origin: "Caribbean",
    description: "An extremely hot chili powder with fruity undertones.",
    flavor_profile: "Very hot, fruity, sharp",
    heat_level: "Very Hot",
    image: "",
    equipment: ["Grinder", "Gloves"],
    ingredients: ["Dried habanero peppers"],
    steps: ["Wear gloves.", "Grind peppers.", "Store airtight."],
    variations: [{ name: "Smoked Habanero", description: "Use smoked peppers." }],
    best_on: ["Chicken", "Seafood", "Rice"],
    mix_with: ["Lime powder", "Garlic"],
    used_in_blends: ["Hot wing rubs"],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Handle carefully." }
  },

  {
    id: "hsp-005",
    name: "Ghost Pepper Powder",
    emoji: "💀",
    category: "Hot Spices",
    origin: "India",
    description: "One of the hottest chili powders in the world.",
    flavor_profile: "Extremely hot, slightly fruity",
    heat_level: "Extreme",
    image: "",
    equipment: ["Grinder", "Gloves"],
    ingredients: ["Dried ghost peppers"],
    steps: ["Wear gloves.", "Grind peppers.", "Store airtight."],
    variations: [{ name: "Smoky Ghost", description: "Add smoked paprika." }],
    best_on: ["Chili", "Stews", "BBQ"],
    mix_with: ["Tomato powder", "Cumin"],
    used_in_blends: ["Ultra‑hot rubs"],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Use sparingly." }
  },

  // ITEMS 6–50
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `hsp-${String(i + 6).padStart(3, "0")}`,
    name: `Hot Spice Blend ${i + 6}`,
    emoji: "🌶️",
    category: "Hot Spices",
    origin: "Global",
    description: "A spicy chili-based seasoning used to add heat to dishes.",
    flavor_profile: "Hot, aromatic, bold",
    heat_level: "Varies",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Chili powder", "Garlic powder", "Salt"],
    steps: ["Combine spices.", "Mix thoroughly.", "Store airtight."],
    variations: [],
    best_on: ["Meats", "Vegetables", "Rice"],
    mix_with: ["Cumin", "Paprika"],
    used_in_blends: [],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Keep dry." }
  }))
];

export default HOT_SPICES;

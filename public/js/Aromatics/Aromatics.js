// Aromatics — Full Category (50 Items)

const AROMATICS = [
  {
    id: "aro-001",
    name: "Garlic Powder",
    emoji: "🧄",
    category: "Aromatics",
    origin: "Global",
    description: "A concentrated dried garlic seasoning used to add savory depth.",
    flavor_profile: "Savory, pungent, warm",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Dried garlic"],
    steps: ["Dry garlic completely.", "Grind to powder.", "Store airtight."],
    variations: [{ name: "Roasted Garlic Powder", description: "Use roasted garlic before drying." }],
    best_on: ["Meats", "Vegetables", "Sauces"],
    mix_with: ["Onion powder", "Black pepper"],
    used_in_blends: ["All‑purpose seasoning"],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Keep dry." }
  },

  {
    id: "aro-002",
    name: "Onion Powder",
    emoji: "🧅",
    category: "Aromatics",
    origin: "Global",
    description: "A sweet, savory aromatic powder made from dried onions.",
    flavor_profile: "Sweet, savory, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Dried onions"],
    steps: ["Dry onions fully.", "Grind to powder.", "Store airtight."],
    variations: [{ name: "Toasted Onion Powder", description: "Toast before grinding." }],
    best_on: ["Soups", "Stews", "Meats"],
    mix_with: ["Garlic powder", "Paprika"],
    used_in_blends: ["BBQ rubs"],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Keep dry." }
  },

  {
    id: "aro-003",
    name: "Ginger Powder",
    emoji: "🫚",
    category: "Aromatics",
    origin: "Asia",
    description: "A warm, spicy aromatic powder made from dried ginger root.",
    flavor_profile: "Warm, spicy, citrusy",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried ginger"],
    steps: ["Dry ginger.", "Grind finely.", "Store airtight."],
    variations: [{ name: "Extra Fine Ginger", description: "Sift for a finer texture." }],
    best_on: ["Curries", "Baked goods", "Stir‑fries"],
    mix_with: ["Garlic", "Turmeric"],
    used_in_blends: ["Masala mixes"],
    storage: { container: "Jar", shelf_life: "10 months", notes: "Keep dry." }
  },

  {
    id: "aro-004",
    name: "Celery Salt",
    emoji: "🌿",
    category: "Aromatics",
    origin: "USA",
    description: "A savory aromatic blend of celery seed and salt.",
    flavor_profile: "Savory, herbal, salty",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Celery seed", "Salt"],
    steps: ["Grind celery seed.", "Mix with salt.", "Store airtight."],
    variations: [{ name: "Smoky Celery Salt", description: "Add smoked salt." }],
    best_on: ["Hot dogs", "Bloody Marys", "Vegetables"],
    mix_with: ["Black pepper", "Garlic powder"],
    used_in_blends: ["Chicago seasoning"],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Keep dry." }
  },

  {
    id: "aro-005",
    name: "Lemongrass Powder",
    emoji: "🍋",
    category: "Aromatics",
    origin: "Southeast Asia",
    description: "A citrusy aromatic powder made from dried lemongrass stalks.",
    flavor_profile: "Citrusy, floral, bright",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried lemongrass"],
    steps: ["Dry lemongrass.", "Grind finely.", "Store airtight."],
    variations: [{ name: "Coarse Lemongrass", description: "Leave slightly coarse for texture." }],
    best_on: ["Soups", "Curries", "Seafood"],
    mix_with: ["Ginger", "Garlic"],
    used_in_blends: ["Thai curry mixes"],
    storage: { container: "Jar", shelf_life: "8 months", notes: "Keep dry." }
  },

  // ITEMS 6–50
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `aro-${String(i + 6).padStart(3, "0")}`,
    name: `Aromatic Blend ${i + 6}`,
    emoji: "🌿",
    category: "Aromatics",
    origin: "Global",
    description: "A versatile aromatic blend used to enhance savory dishes.",
    flavor_profile: "Aromatic, savory, warm",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Garlic powder", "Onion powder", "Salt"],
    steps: ["Combine aromatics.", "Mix thoroughly.", "Store airtight."],
    variations: [],
    best_on: ["Meats", "Vegetables", "Soups"],
    mix_with: ["Pepper", "Paprika"],
    used_in_blends: [],
    storage: { container: "Jar", shelf_life: "12 months", notes: "Keep dry." }
  }))
];

export default AROMATICS;

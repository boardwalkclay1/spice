// Dry Spices — Batch 1 (items 1–10)

const DRY_SPICES_BATCH_1 = [
  {
    id: "dry-001",
    name: "Cumin Powder",
    emoji: "🌰",
    category: "Dry Spices",
    origin: "Middle East / India",
    description: "A warm, earthy spice made from ground cumin seeds.",
    flavor_profile: "Earthy, warm, slightly bitter",
    heat_level: "None",
    image: "",
    equipment: ["Spice grinder"],
    ingredients: ["Cumin seeds"],
    steps: [
      "Toast cumin seeds lightly in a dry pan.",
      "Cool completely.",
      "Grind into a fine powder."
    ],
    variations: [
      { name: "Smoked Cumin", description: "Smoke seeds before grinding." }
    ],
    best_on: ["Curries", "Chili", "Tacos"],
    mix_with: ["Coriander", "Paprika", "Garlic powder"],
    used_in_blends: ["Garam masala", "Taco seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "6–8 months",
      notes: "Keep away from heat and sunlight."
    }
  },

  {
    id: "dry-002",
    name: "Coriander Powder",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Mediterranean",
    description: "A citrusy, floral spice made from ground coriander seeds.",
    flavor_profile: "Citrusy, warm, floral",
    heat_level: "None",
    image: "",
    equipment: ["Spice grinder"],
    ingredients: ["Coriander seeds"],
    steps: [
      "Toast seeds until fragrant.",
      "Cool fully.",
      "Grind to powder."
    ],
    variations: [
      { name: "Coarse Grind", description: "Leave slightly chunky for texture." }
    ],
    best_on: ["Curries", "Soups", "Vegetables"],
    mix_with: ["Cumin", "Turmeric"],
    used_in_blends: ["Curry powder", "Berbere"],
    storage: {
      container: "Glass jar",
      shelf_life: "6 months",
      notes: "Loses aroma quickly once ground."
    }
  },

  {
    id: "dry-003",
    name: "Paprika",
    emoji: "🌶️",
    category: "Dry Spices",
    origin: "Hungary / Spain",
    description: "A vibrant red spice made from dried ground peppers.",
    flavor_profile: "Sweet, smoky, mild heat",
    heat_level: "Mild",
    image: "",
    equipment: ["Grinder (optional)"],
    ingredients: ["Dried red peppers"],
    steps: [
      "Dry peppers completely.",
      "Remove stems and seeds.",
      "Grind into powder."
    ],
    variations: [
      { name: "Smoked Paprika", description: "Use smoked peppers for deeper flavor." }
    ],
    best_on: ["Chicken", "Potatoes", "Stews"],
    mix_with: ["Garlic powder", "Onion powder"],
    used_in_blends: ["BBQ rubs", "Chili powder"],
    storage: {
      container: "Airtight tin",
      shelf_life: "6–9 months",
      notes: "Color fades with light exposure."
    }
  },

  {
    id: "dry-004",
    name: "Turmeric Powder",
    emoji: "🟡",
    category: "Dry Spices",
    origin: "India",
    description: "A golden spice known for its earthy flavor and color.",
    flavor_profile: "Earthy, slightly bitter",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried turmeric root"],
    steps: [
      "Slice turmeric root.",
      "Dry thoroughly.",
      "Grind into fine powder."
    ],
    variations: [
      { name: "Wild Turmeric", description: "More aromatic, less bitter." }
    ],
    best_on: ["Curries", "Rice", "Soups"],
    mix_with: ["Cumin", "Coriander"],
    used_in_blends: ["Curry powder", "Golden milk mix"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Stains surfaces easily."
    }
  },

  {
    id: "dry-005",
    name: "Black Pepper Powder",
    emoji: "⚫",
    category: "Dry Spices",
    origin: "India",
    description: "A sharp, pungent spice made from ground black peppercorns.",
    flavor_profile: "Sharp, spicy, woody",
    heat_level: "Medium",
    image: "",
    equipment: ["Pepper mill", "Grinder"],
    ingredients: ["Black peppercorns"],
    steps: [
      "Dry peppercorns if needed.",
      "Grind to desired fineness."
    ],
    variations: [
      { name: "Coarse Grind", description: "Ideal for rubs and crusts." }
    ],
    best_on: ["Steak", "Eggs", "Vegetables"],
    mix_with: ["Salt", "Garlic powder"],
    used_in_blends: ["Steak seasoning", "Italian seasoning"],
    storage: {
      container: "Pepper mill or jar",
      shelf_life: "12 months",
      notes: "Whole peppercorns last longer."
    }
  },

  {
    id: "dry-006",
    name: "White Pepper Powder",
    emoji: "⚪",
    category: "Dry Spices",
    origin: "China",
    description: "A milder pepper made from peeled peppercorns.",
    flavor_profile: "Sharp, earthy, less pungent",
    heat_level: "Medium",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["White peppercorns"],
    steps: [
      "Dry peppercorns.",
      "Grind finely."
    ],
    variations: [
      { name: "Extra Fine Powder", description: "Used in soups for smooth texture." }
    ],
    best_on: ["Soups", "Seafood", "Cream sauces"],
    mix_with: ["Ginger powder", "Garlic powder"],
    used_in_blends: ["Chinese five spice"],
    storage: {
      container: "Airtight jar",
      shelf_life: "8 months",
      notes: "More delicate flavor than black pepper."
    }
  },

  {
    id: "dry-007",
    name: "Ginger Powder",
    emoji: "🫚",
    category: "Dry Spices",
    origin: "Asia",
    description: "A warm, aromatic spice made from dried ginger root.",
    flavor_profile: "Warm, spicy, slightly sweet",
    heat_level: "Mild",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried ginger root"],
    steps: [
      "Slice ginger thinly.",
      "Dry completely.",
      "Grind into powder."
    ],
    variations: [
      { name: "Extra Fine Ginger", description: "Sift after grinding." }
    ],
    best_on: ["Cookies", "Curries", "Tea"],
    mix_with: ["Cinnamon", "Cloves"],
    used_in_blends: ["Pumpkin spice", "Masala chai"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Keep dry to prevent clumping."
    }
  },

  {
    id: "dry-008",
    name: "Garlic Powder",
    emoji: "🧄",
    category: "Dry Spices",
    origin: "Global",
    description: "A savory, aromatic powder made from dried garlic.",
    flavor_profile: "Savory, pungent, slightly sweet",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Garlic cloves"],
    steps: [
      "Slice garlic thin.",
      "Dehydrate fully.",
      "Grind into powder."
    ],
    variations: [
      { name: "Garlic Granules", description: "Coarser grind for texture." }
    ],
    best_on: ["Meat rubs", "Pasta", "Vegetables"],
    mix_with: ["Onion powder", "Paprika"],
    used_in_blends: ["BBQ rubs", "Taco seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "10–12 months",
      notes: "Avoid moisture exposure."
    }
  },

  {
    id: "dry-009",
    name: "Onion Powder",
    emoji: "🧅",
    category: "Dry Spices",
    origin: "Global",
    description: "A sweet, savory powder made from dried onions.",
    flavor_profile: "Sweet, savory, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator", "Grinder"],
    ingredients: ["Onions"],
    steps: [
      "Slice onions thin.",
      "Dehydrate until crisp.",
      "Grind into powder."
    ],
    variations: [
      { name: "Onion Flakes", description: "Leave coarse for texture." }
    ],
    best_on: ["Soups", "Stews", "Seasoning blends"],
    mix_with: ["Garlic powder", "Paprika"],
    used_in_blends: ["Ranch seasoning", "BBQ rubs"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Keep sealed to prevent clumping."
    }
  },

  {
    id: "dry-010",
    name: "Sumac",
    emoji: "🟥",
    category: "Dry Spices",
    origin: "Middle East",
    description: "A tangy, lemony spice made from dried sumac berries.",
    flavor_profile: "Tangy, citrusy, slightly tart",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried sumac berries"],
    steps: [
      "Dry berries fully.",
      "Grind into coarse powder."
    ],
    variations: [
      { name: "Fine Sumac", description: "Sift for a smoother texture." }
    ],
    best_on: ["Salads", "Chicken", "Hummus"],
    mix_with: ["Za'atar", "Cumin"],
    used_in_blends: ["Za'atar"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Color fades with light exposure."
    }
  }
];

export default DRY_SPICES_BATCH_1;

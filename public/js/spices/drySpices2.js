// Dry Spices — Batch 2 (items 11–20)

const DRY_SPICES_BATCH_2 = [
  {
    id: "dry-011",
    name: "Cinnamon Powder",
    emoji: "🟤",
    category: "Dry Spices",
    origin: "Sri Lanka",
    description: "A warm, sweet spice made from ground cinnamon bark.",
    flavor_profile: "Sweet, woody, warm",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Cinnamon sticks"],
    steps: [
      "Break cinnamon sticks into pieces.",
      "Grind into a fine powder.",
      "Sift for smooth texture."
    ],
    variations: [
      { name: "Saigon Cinnamon", description: "Stronger, sweeter, more aromatic." }
    ],
    best_on: ["Oatmeal", "Baked goods", "Curries"],
    mix_with: ["Nutmeg", "Cloves", "Ginger"],
    used_in_blends: ["Pumpkin spice", "Garam masala"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Store away from heat."
    }
  },

  {
    id: "dry-012",
    name: "Nutmeg Powder",
    emoji: "🌰",
    category: "Dry Spices",
    origin: "Indonesia",
    description: "A warm, sweet spice made from ground nutmeg seeds.",
    flavor_profile: "Sweet, nutty, warm",
    heat_level: "None",
    image: "",
    equipment: ["Microplane", "Grinder"],
    ingredients: ["Whole nutmeg"],
    steps: [
      "Crack nutmeg shell.",
      "Grate or grind the seed.",
      "Use immediately for best flavor."
    ],
    variations: [
      { name: "Fresh Grated", description: "More aromatic than pre-ground." }
    ],
    best_on: ["Cream sauces", "Baked goods", "Eggnog"],
    mix_with: ["Cinnamon", "Cloves"],
    used_in_blends: ["Pumpkin spice", "Chai spice"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Whole nutmeg lasts longer."
    }
  },

  {
    id: "dry-013",
    name: "Clove Powder",
    emoji: "🧉",
    category: "Dry Spices",
    origin: "Indonesia",
    description: "A strong, aromatic spice made from dried clove buds.",
    flavor_profile: "Warm, sweet, pungent",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Whole cloves"],
    steps: [
      "Dry cloves fully.",
      "Grind into powder.",
      "Use sparingly due to strong flavor."
    ],
    variations: [
      { name: "Coarse Clove", description: "Used in pickling blends." }
    ],
    best_on: ["Baked goods", "Curries", "Stews"],
    mix_with: ["Cinnamon", "Nutmeg"],
    used_in_blends: ["Chai spice", "Pumpkin spice"],
    storage: {
      container: "Glass jar",
      shelf_life: "18 months",
      notes: "Very potent; small amounts go far."
    }
  },

  {
    id: "dry-014",
    name: "Cardamom Powder",
    emoji: "🟢",
    category: "Dry Spices",
    origin: "India",
    description: "A fragrant spice with floral and citrus notes.",
    flavor_profile: "Floral, citrusy, sweet",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Green cardamom pods"],
    steps: [
      "Crack pods and remove seeds.",
      "Grind seeds finely.",
      "Use immediately for best aroma."
    ],
    variations: [
      { name: "Black Cardamom", description: "Smokier and earthier." }
    ],
    best_on: ["Tea", "Rice dishes", "Desserts"],
    mix_with: ["Cinnamon", "Cloves"],
    used_in_blends: ["Garam masala", "Chai spice"],
    storage: {
      container: "Airtight jar",
      shelf_life: "6 months",
      notes: "Whole pods last longer."
    }
  },

  {
    id: "dry-015",
    name: "Fenugreek Powder",
    emoji: "🫘",
    category: "Dry Spices",
    origin: "India",
    description: "A slightly bitter spice with maple-like aroma.",
    flavor_profile: "Bitter, nutty, maple-like",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Fenugreek seeds"],
    steps: [
      "Toast seeds lightly.",
      "Cool completely.",
      "Grind into powder."
    ],
    variations: [
      { name: "Roasted Fenugreek", description: "Reduces bitterness." }
    ],
    best_on: ["Curries", "Lentils", "Pickles"],
    mix_with: ["Cumin", "Coriander"],
    used_in_blends: ["Curry powder", "Berbere"],
    storage: {
      container: "Glass jar",
      shelf_life: "8 months",
      notes: "Strong aroma; store separately."
    }
  },

  {
    id: "dry-016",
    name: "Mustard Powder",
    emoji: "🌾",
    category: "Dry Spices",
    origin: "India / Europe",
    description: "A pungent spice made from ground mustard seeds.",
    flavor_profile: "Sharp, tangy, pungent",
    heat_level: "Medium",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Yellow or brown mustard seeds"],
    steps: [
      "Dry seeds fully.",
      "Grind into powder.",
      "Store airtight."
    ],
    variations: [
      { name: "Brown Mustard Powder", description: "Hotter and more pungent." }
    ],
    best_on: ["BBQ rubs", "Pickles", "Sauces"],
    mix_with: ["Paprika", "Garlic powder"],
    used_in_blends: ["Dry rubs", "Curry blends"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Heat intensifies when mixed with water."
    }
  },

  {
    id: "dry-017",
    name: "Chili Powder",
    emoji: "🌶️",
    category: "Dry Spices",
    origin: "Mexico",
    description: "A spicy powder made from dried ground chilies.",
    flavor_profile: "Spicy, smoky, earthy",
    heat_level: "Varies",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Dried chilies"],
    steps: [
      "Remove stems and seeds.",
      "Toast lightly.",
      "Grind into powder."
    ],
    variations: [
      { name: "Ancho Chili Powder", description: "Sweet, smoky, mild heat." }
    ],
    best_on: ["Tacos", "Chili", "BBQ rubs"],
    mix_with: ["Cumin", "Garlic powder"],
    used_in_blends: ["Taco seasoning", "BBQ rubs"],
    storage: {
      container: "Glass jar",
      shelf_life: "9 months",
      notes: "Color fades with light."
    }
  },

  {
    id: "dry-018",
    name: "Smoked Salt",
    emoji: "🧂",
    category: "Dry Spices",
    origin: "Global",
    description: "Salt infused with natural wood smoke.",
    flavor_profile: "Salty, smoky, savory",
    heat_level: "None",
    image: "",
    equipment: ["Smoker"],
    ingredients: ["Sea salt"],
    steps: [
      "Spread salt thinly.",
      "Smoke over wood chips.",
      "Store airtight."
    ],
    variations: [
      { name: "Hickory Smoked", description: "Strong, bold smoke flavor." }
    ],
    best_on: ["Steak", "Vegetables", "Eggs"],
    mix_with: ["Black pepper", "Paprika"],
    used_in_blends: ["BBQ rubs"],
    storage: {
      container: "Airtight jar",
      shelf_life: "Indefinite",
      notes: "Keep dry to prevent clumping."
    }
  },

  {
    id: "dry-019",
    name: "Celery Salt",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "United States",
    description: "A savory blend of ground celery seed and salt.",
    flavor_profile: "Savory, herbal, salty",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Celery seed", "Salt"],
    steps: [
      "Grind celery seed.",
      "Mix with fine salt.",
      "Store airtight."
    ],
    variations: [
      { name: "Smoked Celery Salt", description: "Adds depth to BBQ rubs." }
    ],
    best_on: ["Bloody Marys", "Hot dogs", "Fries"],
    mix_with: ["Black pepper", "Paprika"],
    used_in_blends: ["Old Bay seasoning"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Keep dry."
    }
  },

  {
    id: "dry-020",
    name: "Fennel Powder",
    emoji: "🌾",
    category: "Dry Spices",
    origin: "Mediterranean",
    description: "A sweet, aromatic spice made from ground fennel seeds.",
    flavor_profile: "Sweet, licorice-like, warm",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Fennel seeds"],
    steps: [
      "Toast seeds lightly.",
      "Cool fully.",
      "Grind into powder."
    ],
    variations: [
      { name: "Coarse Fennel", description: "Used in sausage blends." }
    ],
    best_on: ["Pork", "Bread", "Vegetables"],
    mix_with: ["Coriander", "Cumin"],
    used_in_blends: ["Italian sausage seasoning"],
    storage: {
      container: "Glass jar",
      shelf_life: "9 months",
      notes: "Aroma fades over time."
    }
  }
];

export default DRY_SPICES_BATCH_2;

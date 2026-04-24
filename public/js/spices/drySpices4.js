// Dry Spices — Batch 4 (items 31–40)

const DRY_SPICES_BATCH_4 = [
  {
    id: "dry-031",
    name: "Dried Rosemary",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Mediterranean",
    description: "A woody, aromatic herb used in rubs, roasts, and breads.",
    flavor_profile: "Piney, woody, herbal",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh rosemary"],
    steps: [
      "Strip leaves from stems.",
      "Dry fully.",
      "Crumble or grind."
    ],
    variations: [
      { name: "Rosemary Powder", description: "Finely ground for seasoning blends." }
    ],
    best_on: ["Chicken", "Potatoes", "Lamb"],
    mix_with: ["Thyme", "Garlic powder"],
    used_in_blends: ["Italian seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Strong aroma; use sparingly."
    }
  },

  {
    id: "dry-032",
    name: "Dried Thyme",
    emoji: "🌱",
    category: "Dry Spices",
    origin: "Mediterranean",
    description: "A versatile dried herb with earthy, savory notes.",
    flavor_profile: "Earthy, savory, slightly minty",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh thyme"],
    steps: [
      "Dry sprigs fully.",
      "Strip leaves.",
      "Store whole or crushed."
    ],
    variations: [
      { name: "Thyme Powder", description: "Ground for smooth blends." }
    ],
    best_on: ["Chicken", "Soups", "Vegetables"],
    mix_with: ["Oregano", "Garlic"],
    used_in_blends: ["Herbes de Provence"],
    storage: {
      container: "Glass jar",
      shelf_life: "12–18 months",
      notes: "Retains aroma well."
    }
  },

  {
    id: "dry-033",
    name: "Dried Oregano",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Greece / Italy",
    description: "A bold, aromatic herb used in Mediterranean and Latin cooking.",
    flavor_profile: "Savory, earthy, slightly bitter",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh oregano"],
    steps: [
      "Dry sprigs.",
      "Crumble leaves.",
      "Store airtight."
    ],
    variations: [
      { name: "Mexican Oregano", description: "More citrusy and pungent." }
    ],
    best_on: ["Pizza", "Tomato sauces", "Chicken"],
    mix_with: ["Basil", "Garlic powder"],
    used_in_blends: ["Italian seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "12 months",
      notes: "Crush before use to release oils."
    }
  },

  {
    id: "dry-034",
    name: "Dried Basil",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Italy",
    description: "A sweet, aromatic herb used in sauces and seasoning blends.",
    flavor_profile: "Sweet, herbal, mild",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh basil"],
    steps: [
      "Dry leaves gently.",
      "Crumble lightly.",
      "Store airtight."
    ],
    variations: [
      { name: "Basil Powder", description: "Ground for smooth blends." }
    ],
    best_on: ["Pasta", "Tomato dishes", "Chicken"],
    mix_with: ["Oregano", "Garlic"],
    used_in_blends: ["Italian seasoning"],
    storage: {
      container: "Glass jar",
      shelf_life: "6–9 months",
      notes: "More delicate than other herbs."
    }
  },

  {
    id: "dry-035",
    name: "Dried Parsley",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Mediterranean",
    description: "A mild dried herb used for color and light herbal notes.",
    flavor_profile: "Mild, grassy, fresh",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh parsley"],
    steps: [
      "Dry leaves fully.",
      "Crumble lightly.",
      "Store airtight."
    ],
    variations: [
      { name: "Parsley Flakes", description: "Larger pieces for garnish." }
    ],
    best_on: ["Soups", "Potatoes", "Fish"],
    mix_with: ["Garlic powder", "Onion powder"],
    used_in_blends: ["Ranch seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "6 months",
      notes: "Color fades quickly."
    }
  },

  {
    id: "dry-036",
    name: "Dried Sage",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Mediterranean",
    description: "A strong, earthy herb used in stuffing and meat dishes.",
    flavor_profile: "Earthy, savory, slightly peppery",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh sage leaves"],
    steps: [
      "Dry leaves fully.",
      "Crumble or grind.",
      "Store airtight."
    ],
    variations: [
      { name: "Sage Powder", description: "Used in sausage blends." }
    ],
    best_on: ["Poultry", "Pork", "Stuffing"],
    mix_with: ["Thyme", "Black pepper"],
    used_in_blends: ["Poultry seasoning"],
    storage: {
      container: "Glass jar",
      shelf_life: "12 months",
      notes: "Very potent; use sparingly."
    }
  },

  {
    id: "dry-037",
    name: "Dried Marjoram",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Mediterranean",
    description: "A mild, sweet herb similar to oregano but more delicate.",
    flavor_profile: "Sweet, floral, herbal",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh marjoram"],
    steps: [
      "Dry sprigs.",
      "Crumble leaves.",
      "Store airtight."
    ],
    variations: [
      { name: "Marjoram Powder", description: "Ground for seasoning blends." }
    ],
    best_on: ["Chicken", "Vegetables", "Soups"],
    mix_with: ["Basil", "Oregano"],
    used_in_blends: ["Italian seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "9 months",
      notes: "Delicate flavor; add late in cooking."
    }
  },

  {
    id: "dry-038",
    name: "Dried Tarragon",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "France",
    description: "A sweet, anise-like herb used in French cooking.",
    flavor_profile: "Sweet, licorice-like, herbal",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh tarragon"],
    steps: [
      "Dry leaves gently.",
      "Crumble lightly.",
      "Store airtight."
    ],
    variations: [
      { name: "Tarragon Powder", description: "Used in fine herb blends." }
    ],
    best_on: ["Chicken", "Fish", "Eggs"],
    mix_with: ["Chives", "Parsley"],
    used_in_blends: ["Fines herbes"],
    storage: {
      container: "Glass jar",
      shelf_life: "6–9 months",
      notes: "Very aromatic; store away from light."
    }
  },

  {
    id: "dry-039",
    name: "Dried Chives",
    emoji: "🧅",
    category: "Dry Spices",
    origin: "Global",
    description: "A mild onion-like herb used for garnish and seasoning.",
    flavor_profile: "Mild onion, grassy",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh chives"],
    steps: [
      "Chop chives.",
      "Dry fully.",
      "Store airtight."
    ],
    variations: [
      { name: "Chive Flakes", description: "Larger pieces for garnish." }
    ],
    best_on: ["Potatoes", "Eggs", "Soups"],
    mix_with: ["Parsley", "Garlic powder"],
    used_in_blends: ["Ranch seasoning"],
    storage: {
      container: "Airtight jar",
      shelf_life: "6 months",
      notes: "Color fades quickly."
    }
  },

  {
    id: "dry-040",
    name: "Dried Dill",
    emoji: "🌿",
    category: "Dry Spices",
    origin: "Eastern Europe",
    description: "A fragrant herb used in pickling and seafood dishes.",
    flavor_profile: "Herbal, grassy, slightly sweet",
    heat_level: "None",
    image: "",
    equipment: ["Dehydrator"],
    ingredients: ["Fresh dill"],
    steps: [
      "Dry fronds fully.",
      "Crumble lightly.",
      "Store airtight."
    ],
    variations: [
      { name: "Dill Powder", description: "Ground for seasoning blends." }
    ],
    best_on: ["Fish", "Potatoes", "Sauces"],
    mix_with: ["Garlic", "Lemon peel"],
    used_in_blends: ["Ranch seasoning"],
    storage: {
      container: "Glass jar",
      shelf_life: "6–9 months",
      notes: "Very aromatic; store away from heat."
    }
  }
];

export default DRY_SPICES_BATCH_4;

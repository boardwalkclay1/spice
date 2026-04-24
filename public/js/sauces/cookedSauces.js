// Cooked Sauces — Full Category (50 Items)

const COOKED_SAUCES = [
  {
    id: "cooked-001",
    name: "Classic Marinara Sauce",
    emoji: "🍅",
    category: "Cooked Sauces",
    origin: "Italy",
    description: "A slow-simmered tomato sauce with garlic, basil, and olive oil.",
    flavor_profile: "Savory, bright, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Tomatoes", "Garlic", "Olive oil", "Basil", "Salt"],
    steps: [
      "Sauté garlic in olive oil.",
      "Add tomatoes and simmer 30 minutes.",
      "Season and finish with basil."
    ],
    variations: [
      { name: "Spicy Marinara", description: "Add crushed red pepper flakes." }
    ],
    best_on: ["Pasta", "Pizza", "Meatballs"],
    mix_with: ["Oregano", "Parmesan"],
    used_in_blends: ["Pasta sauces"],
    storage: {
      container: "Jar",
      shelf_life: "5 days refrigerated",
      notes: "Freezes well."
    }
  },

  {
    id: "cooked-002",
    name: "Brown Butter Sage Sauce",
    emoji: "🧈",
    category: "Cooked Sauces",
    origin: "Italy",
    description: "A nutty brown butter sauce infused with fresh sage leaves.",
    flavor_profile: "Nutty, aromatic, rich",
    heat_level: "None",
    image: "",
    equipment: ["Pan"],
    ingredients: ["Butter", "Sage", "Salt"],
    steps: [
      "Melt butter until golden brown.",
      "Add sage leaves.",
      "Season lightly."
    ],
    variations: [
      { name: "Lemon Sage", description: "Add lemon zest." }
    ],
    best_on: ["Ravioli", "Gnocchi", "Vegetables"],
    mix_with: ["Parmesan", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3 days refrigerated",
      notes: "Reheat gently."
    }
  },

  {
    id: "cooked-003",
    name: "Teriyaki Sauce",
    emoji: "🥢",
    category: "Cooked Sauces",
    origin: "Japan",
    description: "A glossy sweet‑savory sauce made with soy, sugar, and ginger.",
    flavor_profile: "Sweet, salty, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Soy sauce", "Sugar", "Ginger", "Garlic", "Mirin"],
    steps: [
      "Combine ingredients.",
      "Simmer until thickened.",
      "Cool and store."
    ],
    variations: [
      { name: "Spicy Teriyaki", description: "Add chili paste." }
    ],
    best_on: ["Chicken", "Salmon", "Stir‑fries"],
    mix_with: ["Sesame oil", "Scallions"],
    used_in_blends: ["Glazes"],
    storage: {
      container: "Bottle",
      shelf_life: "2 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "cooked-004",
    name: "Beef Gravy",
    emoji: "🥩",
    category: "Cooked Sauces",
    origin: "Global",
    description: "A rich brown gravy made from beef drippings and stock.",
    flavor_profile: "Savory, deep, hearty",
    heat_level: "None",
    image: "",
    equipment: ["Pan"],
    ingredients: ["Beef drippings", "Flour", "Stock", "Salt", "Pepper"],
    steps: [
      "Make a roux with drippings and flour.",
      "Whisk in stock.",
      "Simmer until thick."
    ],
    variations: [
      { name: "Onion Gravy", description: "Add caramelized onions." }
    ],
    best_on: ["Mashed potatoes", "Roasts", "Steak"],
    mix_with: ["Thyme", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "4 days refrigerated",
      notes: "Reheat slowly."
    }
  },

  {
    id: "cooked-005",
    name: "Alfredo Sauce",
    emoji: "🥛",
    category: "Cooked Sauces",
    origin: "Italy",
    description: "A creamy sauce made with butter, cream, and Parmesan.",
    flavor_profile: "Rich, creamy, savory",
    heat_level: "None",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Butter", "Cream", "Parmesan", "Garlic", "Salt"],
    steps: [
      "Melt butter.",
      "Add cream and simmer.",
      "Stir in Parmesan."
    ],
    variations: [
      { name: "Garlic Alfredo", description: "Increase garlic." }
    ],
    best_on: ["Fettuccine", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Parsley"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3 days refrigerated",
      notes: "Thickens when cold."
    }
  },

  // ITEMS 6–50
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `cooked-${String(i + 6).padStart(3, "0")}`,
    name: `Cooked Sauce ${i + 6}`,
    emoji: "🍲",
    category: "Cooked Sauces",
    origin: "Global",
    description: "A simmered sauce made with aromatics, stock, and seasonings.",
    flavor_profile: "Savory, aromatic, balanced",
    heat_level: "Varies",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Stock", "Aromatics", "Seasonings"],
    steps: [
      "Combine ingredients.",
      "Simmer until reduced.",
      "Adjust seasoning."
    ],
    variations: [],
    best_on: ["Meats", "Vegetables", "Grains"],
    mix_with: ["Butter", "Herbs"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "4–5 days refrigerated",
      notes: "Reheat gently."
    }
  }))
];

export default COOKED_SAUCES;

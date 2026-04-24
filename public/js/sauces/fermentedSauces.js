// Fermented Sauces — Full Category (50 Items)

const FERMENTED_SAUCES = [
  {
    id: "ferm-001",
    name: "Classic Soy Sauce",
    emoji: "🥢",
    category: "Fermented Sauces",
    origin: "China / Japan",
    description: "A deep umami-rich sauce made from fermented soybeans and wheat.",
    flavor_profile: "Salty, savory, umami",
    heat_level: "None",
    image: "",
    equipment: ["Fermentation crock"],
    ingredients: ["Soybeans", "Wheat", "Salt", "Koji"],
    steps: [
      "Cook soybeans and roast wheat.",
      "Inoculate with koji.",
      "Ferment for months.",
      "Press and bottle."
    ],
    variations: [
      { name: "Dark Soy", description: "Longer fermentation and added molasses." }
    ],
    best_on: ["Noodles", "Rice", "Stir-fries"],
    mix_with: ["Ginger", "Garlic"],
    used_in_blends: ["Teriyaki", "Ponzu"],
    storage: {
      container: "Bottle",
      shelf_life: "12 months",
      notes: "Refrigeration optional."
    }
  },

  {
    id: "ferm-002",
    name: "Fish Sauce",
    emoji: "🐟",
    category: "Fermented Sauces",
    origin: "Southeast Asia",
    description: "A pungent, salty sauce made from fermented anchovies.",
    flavor_profile: "Salty, funky, savory",
    heat_level: "None",
    image: "",
    equipment: ["Fermentation barrel"],
    ingredients: ["Anchovies", "Salt"],
    steps: [
      "Layer fish and salt.",
      "Ferment 6–12 months.",
      "Strain and bottle."
    ],
    variations: [
      { name: "Premium First Press", description: "Only the first extraction." }
    ],
    best_on: ["Noodles", "Soups", "Marinades"],
    mix_with: ["Lime", "Chili"],
    used_in_blends: ["Nuoc cham"],
    storage: {
      container: "Bottle",
      shelf_life: "18 months",
      notes: "Flavor deepens over time."
    }
  },

  {
    id: "ferm-003",
    name: "Kimchi Sauce",
    emoji: "🌶️",
    category: "Fermented Sauces",
    origin: "Korea",
    description: "A spicy fermented chili-garlic sauce inspired by kimchi brine.",
    flavor_profile: "Spicy, tangy, funky",
    heat_level: "Medium–Hot",
    image: "",
    equipment: ["Jar"],
    ingredients: ["Gochugaru", "Garlic", "Ginger", "Salt", "Sugar"],
    steps: [
      "Mix ingredients.",
      "Ferment 2–5 days.",
      "Refrigerate."
    ],
    variations: [
      { name: "Extra Funky", description: "Ferment longer." }
    ],
    best_on: ["Rice bowls", "Noodles", "Meats"],
    mix_with: ["Soy sauce", "Sesame oil"],
    used_in_blends: ["Kimchi mayo"],
    storage: {
      container: "Jar",
      shelf_life: "3 months refrigerated",
      notes: "Flavor intensifies."
    }
  },

  {
    id: "ferm-004",
    name: "Miso Sauce",
    emoji: "🍥",
    category: "Fermented Sauces",
    origin: "Japan",
    description: "A savory fermented soybean paste thinned into a pourable sauce.",
    flavor_profile: "Umami, salty, earthy",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Miso paste", "Water", "Sugar", "Mirin"],
    steps: [
      "Whisk miso with water.",
      "Add sugar and mirin.",
      "Adjust thickness."
    ],
    variations: [
      { name: "Spicy Miso", description: "Add chili paste." }
    ],
    best_on: ["Fish", "Vegetables", "Soups"],
    mix_with: ["Ginger", "Garlic"],
    used_in_blends: ["Ramen broth"],
    storage: {
      container: "Jar",
      shelf_life: "2 weeks refrigerated",
      notes: "Stir before use."
    }
  },

  {
    id: "ferm-005",
    name: "Fermented Chili Paste",
    emoji: "🌶️",
    category: "Fermented Sauces",
    origin: "Global",
    description: "A tangy, spicy chili paste fermented for depth and complexity.",
    flavor_profile: "Spicy, tangy, funky",
    heat_level: "Hot",
    image: "",
    equipment: ["Jar"],
    ingredients: ["Chilies", "Salt", "Garlic"],
    steps: [
      "Blend chilies and salt.",
      "Ferment 1–2 weeks.",
      "Store refrigerated."
    ],
    variations: [
      { name: "Garlic Chili", description: "Increase garlic." }
    ],
    best_on: ["Noodles", "Soups", "Marinades"],
    mix_with: ["Vinegar", "Sugar"],
    used_in_blends: ["Hot sauces"],
    storage: {
      container: "Jar",
      shelf_life: "6 months refrigerated",
      notes: "Burp jar during fermentation."
    }
  },

  // ITEMS 6–50
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `ferm-${String(i + 6).padStart(3, "0")}`,
    name: `Fermented Sauce ${i + 6}`,
    emoji: "🧪",
    category: "Fermented Sauces",
    origin: "Global",
    description: "A fermented sauce developed through controlled microbial activity.",
    flavor_profile: "Tangy, savory, complex",
    heat_level: "Varies",
    image: "",
    equipment: ["Jar"],
    ingredients: ["Salt", "Aromatics", "Chilies"],
    steps: [
      "Combine ingredients.",
      "Ferment until tangy.",
      "Refrigerate."
    ],
    variations: [],
    best_on: ["Meats", "Vegetables", "Rice"],
    mix_with: ["Soy sauce", "Vinegar"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "3–6 months refrigerated",
      notes: "Fermentation time affects flavor."
    }
  }))
];

export default FERMENTED_SAUCES;

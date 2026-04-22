const DRY_SPICES = [
  {
    id: "cumin_powder",
    name: "Cumin Powder",
    emoji: "🌰",
    category: "Dry Spices",
    type: "spice",
    image: "images/spices/cumin_powder.jpg",
    description: "Warm, earthy spice made from roasted cumin seeds.",
    origin: "Middle East / India",
    flavor_profile: "Earthy, nutty, slightly bitter",
    heat_level: "None",
    equipment: ["Skillet", "Grinder", "Jar"],
    ingredients: ["Whole cumin seeds"],
    steps: [
      "🔥 Dry roast cumin seeds.",
      "❄️ Cool completely.",
      "🧂 Grind to powder.",
      "📦 Store airtight."
    ],
    variations: [
      { name: "Toasted", description: "Darker roast = smoky flavor." }
    ],
    best_on: ["Tacos", "Curries", "Rice", "Veggies"],
    mix_with: ["Coriander", "Paprika", "Garlic powder"],
    used_in_blends: ["Taco seasoning", "Curry powder"],
    storage: { container: "Jar", shelf_life: "6 months" }
  },

  {
    id: "coriander_powder",
    name: "Coriander Powder",
    emoji: "🌿",
    category: "Dry Spices",
    type: "spice",
    image: "images/spices/coriander_powder.jpg",
    description: "Citrusy, floral spice from ground coriander seeds.",
    origin: "Mediterranean",
    flavor_profile: "Citrus, floral, warm",
    heat_level: "None",
    equipment: ["Grinder"],
    ingredients: ["Coriander seeds"],
    steps: [
      "🔥 Lightly toast seeds.",
      "❄️ Cool.",
      "🧂 Grind fine."
    ],
    variations: [],
    best_on: ["Curries", "Soups", "Rice"],
    mix_with: ["Cumin", "Turmeric"],
    used_in_blends: ["Curry powder", "Garam masala"],
    storage: { container: "Jar", shelf_life: "6 months" }
  },

  {
    id: "paprika",
    name: "Paprika",
    emoji: "🫑",
    category: "Dry Spices",
    type: "spice",
    image: "images/spices/paprika.jpg",
    description: "Ground dried red peppers with sweet, smoky, or hot variations.",
    origin: "Hungary / Spain",
    flavor_profile: "Sweet, smoky, mild heat",
    heat_level: "Low",
    equipment: ["Grinder"],
    ingredients: ["Dried red peppers"],
    steps: ["🧂 Grind peppers.", "📦 Store airtight."],
    variations: [
      { name: "Smoked", description: "Smoked over oak." },
      { name: "Hot", description: "Spicier peppers." }
    ],
    best_on: ["BBQ rubs", "Stews", "Eggs"],
    mix_with: ["Garlic powder", "Cumin"],
    used_in_blends: ["BBQ rub", "Taco seasoning"],
    storage: { container: "Jar", shelf_life: "1 year" }
  },

  {
    id: "turmeric",
    name: "Turmeric Powder",
    emoji: "🟡",
    category: "Dry Spices",
    type: "spice",
    image: "images/spices/turmeric.jpg",
    description: "Bright yellow spice with earthy, bitter notes.",
    origin: "India",
    flavor_profile: "Earthy, bitter, warm",
    heat_level: "None",
    equipment: ["Grinder"],
    ingredients: ["Dried turmeric root"],
    steps: ["🧂 Grind dried root.", "📦 Store airtight."],
    variations: [],
    best_on: ["Curries", "Rice", "Soups"],
    mix_with: ["Cumin", "Coriander"],
    used_in_blends: ["Curry powder"],
    storage: { container: "Jar", shelf_life: "1 year" }
  }
];

export default DRY_SPICES;

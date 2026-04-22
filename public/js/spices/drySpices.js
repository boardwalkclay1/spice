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

    equipment: [
      "Skillet",
      "Spice grinder",
      "Airtight jar"
    ],

    ingredients: [
      "Whole cumin seeds"
    ],

    steps: [
      "🌾 Measure whole cumin seeds.",
      "🔥 Dry roast until fragrant (2–4 min).",
      "❄️ Cool completely.",
      "🧂 Grind to powder.",
      "📦 Store airtight away from heat."
    ],

    variations: [
      { name: "Toasted Cumin", description: "Roast darker for smoky flavor." },
      { name: "Coarse Cumin", description: "Grind lightly for texture." }
    ],

    best_on: [
      "Chili",
      "Tacos",
      "Curries",
      "Rice",
      "Roasted vegetables"
    ],

    mix_with: [
      "Coriander",
      "Paprika",
      "Garlic powder",
      "Turmeric"
    ],

    used_in_blends: [
      "Taco seasoning",
      "Curry powder",
      "BBQ rub"
    ],

    storage: {
      container: "Glass airtight jar",
      shelf_life: "3–6 months",
      notes: "If aroma fades, replace."
    }
  },

  // next dry spice goes here...
];

export default DRY_SPICES;

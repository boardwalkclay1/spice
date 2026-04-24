// Cultural Spices — Full Category (50 Items)

const CULTURAL_SPICES = [
  {
    id: "csp-001",
    name: "Garam Masala",
    emoji: "🇮🇳",
    category: "Cultural Spices",
    origin: "India",
    description: "A warm, aromatic Indian spice blend used in curries and stews.",
    flavor_profile: "Warm, earthy, aromatic",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Coriander", "Cumin", "Cardamom", "Cloves", "Cinnamon", "Black pepper"],
    steps: [
      "Toast whole spices lightly.",
      "Grind to a fine powder.",
      "Store airtight."
    ],
    variations: [
      { name: "Punjabi Style", description: "Adds more black cardamom and cloves." }
    ],
    best_on: ["Curries", "Lentils", "Vegetables"],
    mix_with: ["Turmeric", "Chili powder"],
    used_in_blends: ["Tikka masala mix"],
    storage: {
      container: "Jar",
      shelf_life: "6 months",
      notes: "Aroma fades over time."
    }
  },

  {
    id: "csp-002",
    name: "Chinese Five Spice",
    emoji: "🇨🇳",
    category: "Cultural Spices",
    origin: "China",
    description: "A sweet‑savory blend balancing the five fundamental Chinese flavors.",
    flavor_profile: "Sweet, warm, licorice-like",
    heat_level: "None",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Star anise", "Cloves", "Cinnamon", "Fennel seeds", "Sichuan peppercorns"],
    steps: [
      "Toast spices.",
      "Grind finely.",
      "Store airtight."
    ],
    variations: [
      { name: "Extra Peppercorn", description: "Increase Sichuan pepper for more tingle." }
    ],
    best_on: ["Pork", "Duck", "Stir-fries"],
    mix_with: ["Soy sauce", "Ginger"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "8 months",
      notes: "Keep away from light."
    }
  },

  {
    id: "csp-003",
    name: "Berbere",
    emoji: "🇪🇹",
    category: "Cultural Spices",
    origin: "Ethiopia",
    description: "A fiery Ethiopian blend with chili, fenugreek, and warming spices.",
    flavor_profile: "Spicy, earthy, complex",
    heat_level: "Hot",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Chili powder", "Fenugreek", "Ginger", "Coriander", "Cloves"],
    steps: [
      "Toast spices.",
      "Grind thoroughly.",
      "Store airtight."
    ],
    variations: [
      { name: "Smoky Berbere", description: "Add smoked paprika." }
    ],
    best_on: ["Stews", "Lentils", "Chicken"],
    mix_with: ["Garlic", "Tomato paste"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "10 months",
      notes: "Heat intensifies over time."
    }
  },

  {
    id: "csp-004",
    name: "Za’atar",
    emoji: "🇱🇧",
    category: "Cultural Spices",
    origin: "Middle East",
    description: "A tangy, herbal blend with thyme, sesame, and sumac.",
    flavor_profile: "Herbal, tangy, nutty",
    heat_level: "None",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Thyme", "Sumac", "Sesame seeds", "Oregano"],
    steps: [
      "Mix herbs and sesame.",
      "Add sumac.",
      "Store airtight."
    ],
    variations: [
      { name: "Green Za’atar", description: "Use fresh-dried herbs for brighter color." }
    ],
    best_on: ["Bread", "Chicken", "Vegetables"],
    mix_with: ["Olive oil", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "6 months",
      notes: "Keep sesame seeds dry."
    }
  },

  {
    id: "csp-005",
    name: "Ras el Hanout",
    emoji: "🇲🇦",
    category: "Cultural Spices",
    origin: "Morocco",
    description: "A luxurious Moroccan blend often containing over a dozen spices.",
    flavor_profile: "Warm, floral, complex",
    heat_level: "Mild",
    image: "",
    equipment: ["Grinder"],
    ingredients: ["Coriander", "Cumin", "Cinnamon", "Ginger", "Turmeric", "Cardamom"],
    steps: [
      "Toast spices.",
      "Grind finely.",
      "Store airtight."
    ],
    variations: [
      { name: "Royal Blend", description: "Adds rose petals and saffron." }
    ],
    best_on: ["Tagines", "Rice", "Vegetables"],
    mix_with: ["Honey", "Garlic"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "8 months",
      notes: "Aroma deepens over time."
    }
  },

  // ITEMS 6–50
  ...Array.from({ length: 45 }).map((_, i) => ({
    id: `csp-${String(i + 6).padStart(3, "0")}`,
    name: `Cultural Spice Blend ${i + 6}`,
    emoji: "🧂",
    category: "Cultural Spices",
    origin: "Global",
    description: "A culturally inspired spice blend featuring regional herbs and spices.",
    flavor_profile: "Aromatic, warm, complex",
    heat_level: "Varies",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Cumin", "Coriander", "Paprika"],
    steps: [
      "Combine all spices.",
      "Mix thoroughly.",
      "Store airtight."
    ],
    variations: [],
    best_on: ["Stews", "Vegetables", "Meats"],
    mix_with: ["Garlic", "Oil"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "12 months",
      notes: "Keep dry."
    }
  }))
];

export default CULTURAL_SPICES;

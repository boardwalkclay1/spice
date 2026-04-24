// Hot Sauces — Full Category (50 Items)

const HOT_SAUCES = [
  {
    id: "hot-001",
    name: "Classic Red Hot Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "USA",
    description: "A vinegar-forward red chili hot sauce with a clean, sharp heat.",
    flavor_profile: "Tangy, spicy, bright",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender", "Saucepan"],
    ingredients: ["Red chilies", "Vinegar", "Salt", "Garlic"],
    steps: [
      "Blend chilies and garlic.",
      "Simmer with vinegar and salt.",
      "Cool and bottle."
    ],
    variations: [
      { name: "Extra Hot", description: "Add habaneros for more heat." }
    ],
    best_on: ["Wings", "Eggs", "Tacos"],
    mix_with: ["Butter", "Honey"],
    used_in_blends: ["Buffalo sauce"],
    storage: {
      container: "Glass bottle",
      shelf_life: "6 months refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-002",
    name: "Habanero Mango Hot Sauce",
    emoji: "🥭",
    category: "Hot Sauces",
    origin: "Caribbean",
    description: "A fruity, fiery sauce combining ripe mangoes and habanero peppers.",
    flavor_profile: "Sweet, spicy, tropical",
    heat_level: "Hot",
    image: "",
    equipment: ["Blender", "Saucepan"],
    ingredients: ["Mango", "Habanero", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend mango and habanero.",
      "Simmer with vinegar and garlic.",
      "Bottle once cooled."
    ],
    variations: [
      { name: "Pineapple Version", description: "Swap mango for pineapple." }
    ],
    best_on: ["Seafood", "Chicken", "Rice bowls"],
    mix_with: ["Lime", "Ginger"],
    used_in_blends: [],
    storage: {
      container: "Glass bottle",
      shelf_life: "4 months refrigerated",
      notes: "Color may darken over time."
    }
  },

  {
    id: "hot-003",
    name: "Garlic Chili Oil",
    emoji: "🧄",
    category: "Hot Sauces",
    origin: "China",
    description: "A fragrant chili oil infused with garlic, spices, and crispy chili flakes.",
    flavor_profile: "Savory, spicy, aromatic",
    heat_level: "Medium",
    image: "",
    equipment: ["Pan", "Strainer"],
    ingredients: ["Chili flakes", "Garlic", "Oil", "Salt"],
    steps: [
      "Heat oil with garlic.",
      "Pour over chili flakes.",
      "Cool and store."
    ],
    variations: [
      { name: "Crispy Version", description: "Add fried shallots." }
    ],
    best_on: ["Noodles", "Dumplings", "Rice"],
    mix_with: ["Soy sauce", "Sesame oil"],
    used_in_blends: ["Chili crisp"],
    storage: {
      container: "Jar",
      shelf_life: "2 months",
      notes: "Keep dry to avoid spoilage."
    }
  },

  {
    id: "hot-004",
    name: "Green Jalapeño Hot Sauce",
    emoji: "🫑",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A bright green sauce made with jalapeños, lime, and garlic.",
    flavor_profile: "Fresh, tangy, spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Jalapeños", "Lime", "Garlic", "Vinegar", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust acidity.",
      "Bottle and chill."
    ],
    variations: [
      { name: "Creamy Version", description: "Add avocado." }
    ],
    best_on: ["Tacos", "Fish", "Vegetables"],
    mix_with: ["Cilantro", "Cumin"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Color may fade."
    }
  },

  {
    id: "hot-005",
    name: "Smoked Chipotle Hot Sauce",
    emoji: "🔥",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A smoky, deep red sauce made from chipotle peppers in adobo.",
    flavor_profile: "Smoky, spicy, savory",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chipotle peppers", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend chipotles and garlic.",
      "Add vinegar and salt.",
      "Bottle and rest."
    ],
    variations: [
      { name: "Sweet Chipotle", description: "Add a touch of honey." }
    ],
    best_on: ["Burgers", "Steak", "Tacos"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: ["BBQ sauces"],
    storage: {
      container: "Bottle",
      shelf_life: "6 months refrigerated",
      notes: "Flavor deepens over time."
    }
  },

  {
    id: "hot-006",
    name: "Scotch Bonnet Pepper Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "Caribbean",
    description: "A fiery Caribbean sauce with Scotch bonnet peppers and tropical notes.",
    flavor_profile: "Fruity, very hot, bright",
    heat_level: "Very Hot",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Scotch bonnet peppers", "Vinegar", "Onion", "Garlic", "Salt"],
    steps: [
      "Blend peppers and aromatics.",
      "Add vinegar and salt.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Pineapple Scotch Bonnet", description: "Add pineapple for sweetness." }
    ],
    best_on: ["Jerk chicken", "Seafood", "Rice"],
    mix_with: ["Allspice", "Thyme"],
    used_in_blends: [],
    storage: {
      container: "Glass bottle",
      shelf_life: "4 months refrigerated",
      notes: "Handle peppers with care."
    }
  },

  {
    id: "hot-007",
    name: "Serrano Lime Hot Sauce",
    emoji: "🍋",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A zesty green sauce with serrano peppers and lime.",
    flavor_profile: "Citrusy, sharp, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Serrano peppers", "Lime juice", "Garlic", "Vinegar", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust salt and acidity.",
      "Bottle and chill."
    ],
    variations: [
      { name: "Herb Serrano", description: "Add cilantro and parsley." }
    ],
    best_on: ["Tacos", "Grilled fish", "Vegetables"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-008",
    name: "Thai Chili Garlic Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "Thailand",
    description: "A sweet, spicy, garlicky chili sauce with a sticky texture.",
    flavor_profile: "Sweet, spicy, garlicky",
    heat_level: "Medium",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Thai chilies", "Garlic", "Sugar", "Vinegar", "Salt"],
    steps: [
      "Simmer all ingredients until thickened.",
      "Cool slightly.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Extra Garlic", description: "Increase garlic for stronger flavor." }
    ],
    best_on: ["Spring rolls", "Grilled meats", "Noodles"],
    mix_with: ["Fish sauce", "Lime"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "1 month refrigerated",
      notes: "Thickens as it cools."
    }
  },

  {
    id: "hot-009",
    name: "Korean Gochujang Hot Sauce",
    emoji: "🧂",
    category: "Hot Sauces",
    origin: "Korea",
    description: "A deep, umami-rich hot sauce based on gochujang paste.",
    flavor_profile: "Savory, spicy, slightly sweet",
    heat_level: "Medium",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Gochujang", "Soy sauce", "Rice vinegar", "Sesame oil", "Garlic"],
    steps: [
      "Whisk all ingredients together.",
      "Adjust sweetness and salt.",
      "Store refrigerated."
    ],
    variations: [
      { name: "Honey Gochujang", description: "Add honey for extra sweetness." }
    ],
    best_on: ["Korean BBQ", "Rice bowls", "Tofu"],
    mix_with: ["Ginger", "Scallions"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "1 month refrigerated",
      notes: "Stir before use."
    }
  },

  {
    id: "hot-010",
    name: "Peri-Peri Hot Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "Portugal / Africa",
    description: "A bright, spicy sauce made with African bird’s eye chilies.",
    flavor_profile: "Citrusy, spicy, garlicky",
    heat_level: "Hot",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Bird’s eye chilies", "Lemon juice", "Garlic", "Oil", "Salt"],
    steps: [
      "Blend chilies and garlic.",
      "Add lemon and oil.",
      "Season and bottle."
    ],
    variations: [
      { name: "Herb Peri-Peri", description: "Add oregano and parsley." }
    ],
    best_on: ["Grilled chicken", "Seafood", "Vegetables"],
    mix_with: ["Paprika", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "2 months refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-011",
    name: "Pineapple Habanero Hot Sauce",
    emoji: "🍍",
    category: "Hot Sauces",
    origin: "Caribbean",
    description: "A sweet-heat sauce with pineapple and habanero peppers.",
    flavor_profile: "Sweet, fruity, very hot",
    heat_level: "Very Hot",
    image: "",
    equipment: ["Blender", "Saucepan"],
    ingredients: ["Pineapple", "Habanero", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend pineapple and habanero.",
      "Simmer with vinegar and garlic.",
      "Cool and bottle."
    ],
    variations: [
      { name: "Citrus Twist", description: "Add lime juice." }
    ],
    best_on: ["Shrimp", "Chicken", "Tacos"],
    mix_with: ["Ginger", "Cilantro"],
    used_in_blends: [],
    storage: {
      container: "Glass bottle",
      shelf_life: "4 months refrigerated",
      notes: "Color may darken."
    }
  },

  {
    id: "hot-012",
    name: "Roasted Red Pepper Hot Sauce",
    emoji: "🫑",
    category: "Hot Sauces",
    origin: "Mediterranean",
    description: "A smoky, mildly spicy sauce with roasted red peppers and chilies.",
    flavor_profile: "Smoky, sweet, mild heat",
    heat_level: "Mild",
    image: "",
    equipment: ["Oven", "Blender"],
    ingredients: ["Red peppers", "Chilies", "Garlic", "Vinegar", "Salt"],
    steps: [
      "Roast peppers and chilies.",
      "Blend with garlic and vinegar.",
      "Season and bottle."
    ],
    variations: [
      { name: "Creamy Roasted Pepper", description: "Add yogurt or cream." }
    ],
    best_on: ["Sandwiches", "Pasta", "Grilled vegetables"],
    mix_with: ["Paprika", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "2 weeks refrigerated",
      notes: "Keep chilled."
    }
  },

  {
    id: "hot-013",
    name: "Cayenne Pepper Hot Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "USA",
    description: "A classic cayenne-based hot sauce with a sharp vinegar bite.",
    flavor_profile: "Tangy, spicy, sharp",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Cayenne peppers", "Vinegar", "Salt"],
    steps: [
      "Blend peppers with vinegar.",
      "Add salt.",
      "Bottle and rest."
    ],
    variations: [
      { name: "Garlic Cayenne", description: "Add garlic cloves." }
    ],
    best_on: ["Pizza", "Eggs", "Fried foods"],
    mix_with: ["Butter", "Garlic"],
    used_in_blends: ["Buffalo sauce"],
    storage: {
      container: "Bottle",
      shelf_life: "6 months refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-014",
    name: "Smoky Ancho Hot Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A mild, smoky sauce made with ancho chilies.",
    flavor_profile: "Smoky, earthy, mild",
    heat_level: "Mild",
    image: "",
    equipment: ["Saucepan", "Blender"],
    ingredients: ["Ancho chilies", "Garlic", "Vinegar", "Salt"],
    steps: [
      "Soak anchos until soft.",
      "Blend with garlic and vinegar.",
      "Season and bottle."
    ],
    variations: [
      { name: "Ancho Chipotle Blend", description: "Add chipotle for more smoke." }
    ],
    best_on: ["Tacos", "Beans", "Grilled meats"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 months refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-015",
    name: "Ghost Pepper Hot Sauce",
    emoji: "💀",
    category: "Hot Sauces",
    origin: "India",
    description: "An extremely hot sauce made with ghost peppers.",
    flavor_profile: "Intense heat, slightly fruity",
    heat_level: "Extreme",
    image: "",
    equipment: ["Blender", "Gloves"],
    ingredients: ["Ghost peppers", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Handle peppers with gloves.",
      "Blend with vinegar and garlic.",
      "Bottle carefully."
    ],
    variations: [
      { name: "Smoky Ghost", description: "Add smoked paprika." }
    ],
    best_on: ["Chili", "Stews", "BBQ"],
    mix_with: ["Tomato sauce", "Honey"],
    used_in_blends: [],
    storage: {
      container: "Glass bottle",
      shelf_life: "6 months refrigerated",
      notes: "Use sparingly."
    }
  },

  {
    id: "hot-016",
    name: "Sriracha-Style Hot Sauce",
    emoji: "🧴",
    category: "Hot Sauces",
    origin: "Thailand / USA",
    description: "A garlicky, slightly sweet chili sauce inspired by classic sriracha.",
    flavor_profile: "Garlicky, tangy, mildly sweet",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Blender", "Saucepan"],
    ingredients: ["Red chilies", "Garlic", "Sugar", "Vinegar", "Salt"],
    steps: [
      "Blend chilies and garlic.",
      "Simmer with sugar and vinegar.",
      "Cool and bottle."
    ],
    variations: [
      { name: "Extra Garlic", description: "Increase garlic for stronger flavor." }
    ],
    best_on: ["Noodles", "Eggs", "Burgers"],
    mix_with: ["Mayo", "Soy sauce"],
    used_in_blends: ["Spicy mayo"],
    storage: {
      container: "Squeeze bottle",
      shelf_life: "2 months refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-017",
    name: "Jalapeño Cilantro Hot Sauce",
    emoji: "🌿",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A fresh green sauce with jalapeños and cilantro.",
    flavor_profile: "Herbal, spicy, bright",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Jalapeños", "Cilantro", "Lime juice", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust lime and salt.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Creamy Version", description: "Add sour cream or yogurt." }
    ],
    best_on: ["Tacos", "Grilled meats", "Vegetables"],
    mix_with: ["Cumin", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "2 weeks refrigerated",
      notes: "Color may fade."
    }
  },

  {
    id: "hot-018",
    name: "Smoky BBQ Hot Sauce",
    emoji: "🍖",
    category: "Hot Sauces",
    origin: "USA",
    description: "A hybrid BBQ and hot sauce with smoke, sweetness, and heat.",
    flavor_profile: "Smoky, sweet, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Tomato sauce", "Chili powder", "Vinegar", "Sugar", "Smoked paprika"],
    steps: [
      "Simmer all ingredients.",
      "Adjust sweetness and heat.",
      "Cool and bottle."
    ],
    variations: [
      { name: "Extra Smoky", description: "Add liquid smoke." }
    ],
    best_on: ["Ribs", "Chicken", "Burgers"],
    mix_with: ["Mustard", "Garlic powder"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "1 month refrigerated",
      notes: "Thickens as it cools."
    }
  },

  {
    id: "hot-019",
    name: "Tomatillo Jalapeño Hot Sauce",
    emoji: "🫙",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A tangy green sauce with tomatillos and jalapeños.",
    flavor_profile: "Tangy, fresh, mildly spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Saucepan", "Blender"],
    ingredients: ["Tomatillos", "Jalapeños", "Onion", "Garlic", "Salt"],
    steps: [
      "Simmer tomatillos and jalapeños.",
      "Blend with onion and garlic.",
      "Season and bottle."
    ],
    variations: [
      { name: "Roasted Version", description: "Roast vegetables before blending." }
    ],
    best_on: ["Tacos", "Enchiladas", "Eggs"],
    mix_with: ["Cilantro", "Lime"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "2 weeks refrigerated",
      notes: "Keep chilled."
    }
  },

  {
    id: "hot-020",
    name: "Citrus Chili Hot Sauce",
    emoji: "🍊",
    category: "Hot Sauces",
    origin: "Global",
    description: "A bright citrus-forward hot sauce with mixed chilies.",
    flavor_profile: "Citrusy, spicy, aromatic",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Mixed chilies", "Orange juice", "Lime juice", "Vinegar", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust acidity.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Ginger Citrus", description: "Add fresh ginger." }
    ],
    best_on: ["Seafood", "Chicken", "Salads"],
    mix_with: ["Garlic", "Honey"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-021",
    name: "Roasted Garlic Hot Sauce",
    emoji: "🧄",
    category: "Hot Sauces",
    origin: "Global",
    description: "A rich, mellow hot sauce with roasted garlic and chilies.",
    flavor_profile: "Garlicky, savory, mildly spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Oven", "Blender"],
    ingredients: ["Garlic", "Chilies", "Vinegar", "Oil", "Salt"],
    steps: [
      "Roast garlic and chilies.",
      "Blend with vinegar and oil.",
      "Season and bottle."
    ],
    variations: [
      { name: "Creamy Garlic", description: "Add a spoon of mayo." }
    ],
    best_on: ["Sandwiches", "Potatoes", "Grilled meats"],
    mix_with: ["Paprika", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "2 weeks refrigerated",
      notes: "Keep chilled."
    }
  },

  {
    id: "hot-022",
    name: "Mustard Chili Hot Sauce",
    emoji: "🥫",
    category: "Hot Sauces",
    origin: "USA",
    description: "A tangy mustard-based hot sauce with chili heat.",
    flavor_profile: "Tangy, spicy, sharp",
    heat_level: "Medium",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Mustard", "Chili powder", "Vinegar", "Honey", "Salt"],
    steps: [
      "Whisk all ingredients.",
      "Adjust sweetness and heat.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Smoky Mustard", description: "Add smoked paprika." }
    ],
    best_on: ["Sausages", "Burgers", "Chicken"],
    mix_with: ["Garlic powder", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "1 month refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-023",
    name: "Coconut Chili Hot Sauce",
    emoji: "🥥",
    category: "Hot Sauces",
    origin: "Pacific",
    description: "A creamy coconut-based hot sauce with chili and lime.",
    flavor_profile: "Creamy, spicy, tropical",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Coconut milk", "Chilies", "Lime juice", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust lime and salt.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Extra Lime", description: "Increase lime for brightness." }
    ],
    best_on: ["Seafood", "Rice", "Vegetables"],
    mix_with: ["Ginger", "Cilantro"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "1 week refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-024",
    name: "Black Garlic Hot Sauce",
    emoji: "🧄",
    category: "Hot Sauces",
    origin: "Modern",
    description: "A deep, umami-rich hot sauce with black garlic and chilies.",
    flavor_profile: "Umami, sweet, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Black garlic", "Chilies", "Vinegar", "Salt"],
    steps: [
      "Blend black garlic and chilies.",
      "Add vinegar and salt.",
      "Bottle and rest."
    ],
    variations: [
      { name: "Smoky Black Garlic", description: "Add smoked chilies." }
    ],
    best_on: ["Steak", "Burgers", "Roasted vegetables"],
    mix_with: ["Soy sauce", "Sesame oil"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "2 months refrigerated",
      notes: "Flavor deepens over time."
    }
  },

  {
    id: "hot-025",
    name: "Herb Jalapeño Hot Sauce",
    emoji: "🌿",
    category: "Hot Sauces",
    origin: "Global",
    description: "A green hot sauce with jalapeños and mixed herbs.",
    flavor_profile: "Herbal, bright, spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Jalapeños", "Parsley", "Cilantro", "Vinegar", "Garlic"],
    steps: [
      "Blend all ingredients.",
      "Adjust acidity.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Minty Herb", description: "Add fresh mint." }
    ],
    best_on: ["Fish", "Chicken", "Vegetables"],
    mix_with: ["Lemon juice", "Cumin"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "2 weeks refrigerated",
      notes: "Color may fade."
    }
  },

  {
    id: "hot-026",
    name: "Tomato Chili Hot Sauce",
    emoji: "🍅",
    category: "Hot Sauces",
    origin: "Global",
    description: "A tomato-based hot sauce with balanced heat and acidity.",
    flavor_profile: "Savory, tangy, mildly spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Saucepan", "Blender"],
    ingredients: ["Tomatoes", "Chilies", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Simmer tomatoes and chilies.",
      "Blend with garlic and vinegar.",
      "Season and bottle."
    ],
    variations: [
      { name: "Smoky Tomato", description: "Add smoked paprika." }
    ],
    best_on: ["Eggs", "Sandwiches", "Grilled meats"],
    mix_with: ["Onion powder", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-027",
    name: "Sweet Chili Hot Sauce",
    emoji: "🍯",
    category: "Hot Sauces",
    origin: "Asia",
    description: "A sweet, sticky chili sauce with mild heat.",
    flavor_profile: "Sweet, mildly spicy, garlicky",
    heat_level: "Mild",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Sugar", "Chilies", "Garlic", "Vinegar", "Salt"],
    steps: [
      "Simmer all ingredients until thick.",
      "Cool slightly.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Extra Hot Sweet Chili", description: "Add more chilies." }
    ],
    best_on: ["Spring rolls", "Chicken", "Seafood"],
    mix_with: ["Soy sauce", "Lime"],
    used_in_blends: [],
    storage: {
      container: "Jar",
      shelf_life: "1 month refrigerated",
      notes: "Thickens as it cools."
    }
  },

  {
    id: "hot-028",
    name: "Smoky Chipotle Lime Hot Sauce",
    emoji: "🔥",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A smoky, tangy sauce with chipotle and lime.",
    flavor_profile: "Smoky, tangy, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chipotle peppers", "Lime juice", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust lime and salt.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Sweet Chipotle Lime", description: "Add honey." }
    ],
    best_on: ["Tacos", "Burgers", "Grilled vegetables"],
    mix_with: ["Cumin", "Oregano"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 months refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-029",
    name: "Herb Garlic Chili Hot Sauce",
    emoji: "🧄",
    category: "Hot Sauces",
    origin: "Global",
    description: "A herb-forward hot sauce with garlic and mixed chilies.",
    flavor_profile: "Herbal, garlicky, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chilies", "Garlic", "Parsley", "Vinegar", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust seasoning.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Cilantro Version", description: "Swap parsley for cilantro." }
    ],
    best_on: ["Grilled meats", "Vegetables", "Sandwiches"],
    mix_with: ["Lemon juice", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-030",
    name: "Smoky Tomato Chipotle Hot Sauce",
    emoji: "🍅",
    category: "Hot Sauces",
    origin: "Mexico",
    description: "A tomato and chipotle-based hot sauce with deep smoke.",
    flavor_profile: "Smoky, savory, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Saucepan", "Blender"],
    ingredients: ["Tomatoes", "Chipotle peppers", "Garlic", "Vinegar", "Salt"],
    steps: [
      "Simmer tomatoes and chipotles.",
      "Blend until smooth.",
      "Season and bottle."
    ],
    variations: [
      { name: "Extra Smoky", description: "Add smoked salt." }
    ],
    best_on: ["Burgers", "Tacos", "Eggs"],
    mix_with: ["Onion powder", "Paprika"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-031",
    name: "Lemon Herb Hot Sauce",
    emoji: "🍋",
    category: "Hot Sauces",
    origin: "Mediterranean",
    description: "A lemony hot sauce with herbs and mild chili heat.",
    flavor_profile: "Citrusy, herbal, mildly spicy",
    heat_level: "Mild",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Lemon juice", "Chilies", "Parsley", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust lemon and salt.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Oregano Version", description: "Add dried oregano." }
    ],
    best_on: ["Fish", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Olive oil"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "2 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-032",
    name: "Ginger Chili Hot Sauce",
    emoji: "🫚",
    category: "Hot Sauces",
    origin: "Asia",
    description: "A spicy, aromatic hot sauce with ginger and chilies.",
    flavor_profile: "Spicy, gingery, bright",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chilies", "Ginger", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust acidity.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Citrus Ginger", description: "Add lime juice." }
    ],
    best_on: ["Seafood", "Stir-fries", "Rice"],
    mix_with: ["Soy sauce", "Sesame oil"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-033",
    name: "Herb Vinegar Hot Sauce",
    emoji: "🌿",
    category: "Hot Sauces",
    origin: "Global",
    description: "A vinegar-based hot sauce infused with herbs and chilies.",
    flavor_profile: "Tangy, herbal, spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Jar"],
    ingredients: ["Chilies", "Vinegar", "Herbs", "Garlic", "Salt"],
    steps: [
      "Combine all ingredients in a jar.",
      "Let infuse for several days.",
      "Use as needed."
    ],
    variations: [
      { name: "Rosemary Version", description: "Use rosemary as main herb." }
    ],
    best_on: ["Greens", "Beans", "Grilled meats"],
    mix_with: ["Olive oil", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Glass bottle",
      shelf_life: "2 months refrigerated",
      notes: "Strain if desired."
    }
  },

  {
    id: "hot-034",
    name: "Smoky Jalapeño Hot Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "Global",
    description: "A smoky twist on jalapeño hot sauce.",
    flavor_profile: "Smoky, fresh, spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Jalapeños", "Smoked salt", "Vinegar", "Garlic"],
    steps: [
      "Blend all ingredients.",
      "Adjust seasoning.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Lime Smoky Jalapeño", description: "Add lime juice." }
    ],
    best_on: ["Tacos", "Eggs", "Grilled vegetables"],
    mix_with: ["Cumin", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-035",
    name: "Tomato Herb Chili Hot Sauce",
    emoji: "🍅",
    category: "Hot Sauces",
    origin: "Global",
    description: "A tomato and herb-based hot sauce with moderate heat.",
    flavor_profile: "Savory, herbal, mildly spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Saucepan", "Blender"],
    ingredients: ["Tomatoes", "Chilies", "Herbs", "Vinegar", "Garlic"],
    steps: [
      "Simmer tomatoes and chilies.",
      "Blend with herbs and vinegar.",
      "Season and bottle."
    ],
    variations: [
      { name: "Basil Version", description: "Use basil as main herb." }
    ],
    best_on: ["Pasta", "Eggs", "Sandwiches"],
    mix_with: ["Black pepper", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-036",
    name: "Cumin Chili Hot Sauce",
    emoji: "🧂",
    category: "Hot Sauces",
    origin: "Global",
    description: "A cumin-forward hot sauce with earthy chili heat.",
    flavor_profile: "Earthy, spicy, aromatic",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chilies", "Cumin", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust seasoning.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Smoky Cumin", description: "Add smoked paprika." }
    ],
    best_on: ["Beans", "Rice", "Grilled meats"],
    mix_with: ["Coriander", "Lime juice"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-037",
    name: "Paprika Chili Hot Sauce",
    emoji: "🌶️",
    category: "Hot Sauces",
    origin: "Europe",
    description: "A paprika-based hot sauce with gentle heat.",
    flavor_profile: "Smoky, mild, savory",
    heat_level: "Mild",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Paprika", "Chilies", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust acidity.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Hot Paprika", description: "Use hot paprika." }
    ],
    best_on: ["Eggs", "Potatoes", "Grilled meats"],
    mix_with: ["Onion powder", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-038",
    name: "Sesame Chili Hot Sauce",
    emoji: "🌱",
    category: "Hot Sauces",
    origin: "Asia",
    description: "A nutty, spicy hot sauce with sesame and chilies.",
    flavor_profile: "Nutty, spicy, savory",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chilies", "Sesame oil", "Vinegar", "Garlic", "Soy sauce"],
    steps: [
      "Blend all ingredients.",
      "Adjust salt and acidity.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Extra Nutty", description: "Add toasted sesame seeds." }
    ],
    best_on: ["Noodles", "Rice bowls", "Vegetables"],
    mix_with: ["Ginger", "Scallions"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-039",
    name: "Onion Chili Hot Sauce",
    emoji: "🧅",
    category: "Hot Sauces",
    origin: "Global",
    description: "A savory hot sauce with onion and chili depth.",
    flavor_profile: "Savory, spicy, aromatic",
    heat_level: "Medium",
    image: "",
    equipment: ["Saucepan", "Blender"],
    ingredients: ["Onion", "Chilies", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Sauté onion and chilies.",
      "Blend with vinegar and garlic.",
      "Season and bottle."
    ],
    variations: [
      { name: "Caramelized Onion", description: "Caramelize onions before blending." }
    ],
    best_on: ["Burgers", "Sandwiches", "Grilled meats"],
    mix_with: ["Black pepper", "Paprika"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-040",
    name: "Smoky Herb Hot Sauce",
    emoji: "🌿",
    category: "Hot Sauces",
    origin: "Global",
    description: "A smoky, herbaceous hot sauce with moderate heat.",
    flavor_profile: "Smoky, herbal, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chilies", "Smoked paprika", "Herbs", "Vinegar", "Garlic"],
    steps: [
      "Blend all ingredients.",
      "Adjust seasoning.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Extra Herb", description: "Increase fresh herbs." }
    ],
    best_on: ["Grilled meats", "Vegetables", "Sandwiches"],
    mix_with: ["Olive oil", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-041",
    name: "Chili Lime Hot Sauce",
    emoji: "🍋",
    category: "Hot Sauces",
    origin: "Global",
    description: "A bright chili and lime hot sauce.",
    flavor_profile: "Citrusy, spicy, sharp",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chilies", "Lime juice", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Blend all ingredients.",
      "Adjust lime and salt.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Herb Lime", description: "Add cilantro." }
    ],
    best_on: ["Tacos", "Seafood", "Salads"],
    mix_with: ["Cumin", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-042",
    name: "Chili Honey Hot Sauce",
    emoji: "🍯",
    category: "Hot Sauces",
    origin: "Global",
    description: "A sweet-heat hot sauce with honey and chilies.",
    flavor_profile: "Sweet, spicy, sticky",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Honey", "Chilies", "Vinegar", "Garlic", "Salt"],
    steps: [
      "Simmer all ingredients briefly.",
      "Cool slightly.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Smoky Honey", description: "Add smoked paprika." }
    ],
    best_on: ["Fried chicken", "Pizza", "Biscuits"],
    mix_with: ["Butter", "Mustard"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "1 month refrigerated",
      notes: "Thickens as it cools."
    }
  },

  {
    id: "hot-043",
    name: "Chili Soy Hot Sauce",
    emoji: "🥢",
    category: "Hot Sauces",
    origin: "Asia",
    description: "A salty, umami hot sauce with soy and chilies.",
    flavor_profile: "Savory, salty, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Chilies", "Soy sauce", "Vinegar", "Garlic", "Sesame oil"],
    steps: [
      "Mix all ingredients.",
      "Adjust salt and acidity.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Ginger Soy", description: "Add grated ginger." }
    ],
    best_on: ["Dumplings", "Noodles", "Rice"],
    mix_with: ["Scallions", "Sesame seeds"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "3 weeks refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-044",
    name: "Chili Vinegar Hot Sauce",
    emoji: "🧴",
    category: "Hot Sauces",
    origin: "Global",
    description: "A simple chili and vinegar hot sauce.",
    flavor_profile: "Sharp, tangy, spicy",
    heat_level: "Medium",
    image: "",
    equipment: ["Blender"],
    ingredients: ["Chilies", "Vinegar", "Salt"],
    steps: [
      "Blend chilies with vinegar.",
      "Add salt.",
      "Bottle and refrigerate."
    ],
    variations: [
      { name: "Garlic Vinegar", description: "Add garlic cloves." }
    ],
    best_on: ["Greens", "Beans", "Fried foods"],
    mix_with: ["Black pepper", "Onion powder"],
    used_in_blends: [],
    storage: {
      container: "Bottle",
      shelf_life: "2 months refrigerated",
      notes: "Shake before use."
    }
  },

  {
    id: "hot-045",
    name: "Chili Herb Yogurt Hot Sauce",
    emoji: "🥛",
    category: "Hot Sauces",
    origin: "Global",
    description: "A creamy yogurt-based hot sauce with herbs and chilies.",
    flavor_profile: "Creamy, tangy, spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Yogurt", "Chilies", "Herbs", "Garlic", "Salt"],
    steps: [
      "Mix all ingredients.",
      "Adjust salt.",
      "Chill before serving."
    ],
    variations: [
      { name: "Mint Yogurt Chili", description: "Use mint as main herb." }
    ],
    best_on: ["Kebabs", "Grilled meats", "Vegetables"],
    mix_with: ["Lemon juice", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "3 days refrigerated",
      notes: "Stir before use."
    }
  },

  {
    id: "hot-046",
    name: "Chili Cream Hot Sauce",
    emoji: "🥛",
    category: "Hot Sauces",
    origin: "Global",
    description: "A rich cream-based hot sauce with chili heat.",
    flavor_profile: "Creamy, spicy, smooth",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Cream", "Chilies", "Garlic", "Salt"],
    steps: [
      "Simmer cream with chilies and garlic.",
      "Season to taste.",
      "Cool slightly and use."
    ],
    variations: [
      { name: "Cheesy Chili Cream", description: "Add grated cheese." }
    ],
    best_on: ["Pasta", "Potatoes", "Chicken"],
    mix_with: ["Black pepper", "Paprika"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "3 days refrigerated",
      notes: "Reheat gently."
    }
  },

  {
    id: "hot-047",
    name: "Chili Tomato Cream Hot Sauce",
    emoji: "🍅",
    category: "Hot Sauces",
    origin: "Global",
    description: "A creamy tomato and chili hot sauce.",
    flavor_profile: "Creamy, tangy, mildly spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Tomato sauce", "Chilies", "Cream", "Garlic", "Salt"],
    steps: [
      "Simmer tomato sauce and chilies.",
      "Stir in cream.",
      "Season and serve."
    ],
    variations: [
      { name: "Herb Tomato Cream", description: "Add basil or oregano." }
    ],
    best_on: ["Pasta", "Chicken", "Vegetables"],
    mix_with: ["Black pepper", "Parmesan"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "3 days refrigerated",
      notes: "Reheat gently."
    }
  },

  {
    id: "hot-048",
    name: "Chili Butter Hot Sauce",
    emoji: "🧈",
    category: "Hot Sauces",
    origin: "USA",
    description: "A butter-based hot sauce perfect for wings.",
    flavor_profile: "Buttery, spicy, tangy",
    heat_level: "Medium",
    image: "",
    equipment: ["Saucepan"],
    ingredients: ["Butter", "Hot sauce base", "Garlic powder"],
    steps: [
      "Melt butter.",
      "Whisk in hot sauce base.",
      "Add garlic powder."
    ],
    variations: [
      { name: "Honey Butter Chili", description: "Add honey." }
    ],
    best_on: ["Wings", "Cauliflower bites", "Sandwiches"],
    mix_with: ["Paprika", "Black pepper"],
    used_in_blends: ["Buffalo sauce"],
    storage: {
      container: "Sealed container",
      shelf_life: "3 days refrigerated",
      notes: "Reheat gently before use."
    }
  },

  {
    id: "hot-049",
    name: "Chili Mayo Hot Sauce",
    emoji: "🥪",
    category: "Hot Sauces",
    origin: "Global",
    description: "A creamy mayo-based hot sauce spread.",
    flavor_profile: "Creamy, tangy, spicy",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Mayonnaise", "Hot sauce base", "Lemon juice"],
    steps: [
      "Mix mayonnaise and hot sauce.",
      "Add lemon juice.",
      "Stir until smooth."
    ],
    variations: [
      { name: "Garlic Chili Mayo", description: "Add minced garlic." }
    ],
    best_on: ["Sandwiches", "Burgers", "Fries"],
    mix_with: ["Black pepper", "Paprika"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "5 days refrigerated",
      notes: "Stir before use."
    }
  },

  {
    id: "hot-050",
    name: "Chili Yogurt Herb Hot Sauce",
    emoji: "🥛",
    category: "Hot Sauces",
    origin: "Global",
    description: "A tangy yogurt and chili hot sauce with herbs.",
    flavor_profile: "Creamy, tangy, spicy, herbal",
    heat_level: "Mild–Medium",
    image: "",
    equipment: ["Bowl"],
    ingredients: ["Yogurt", "Chilies", "Herbs", "Garlic", "Salt"],
    steps: [
      "Mix yogurt with chopped chilies and herbs.",
      "Add garlic and salt.",
      "Chill before serving."
    ],
    variations: [
      { name: "Mint Chili Yogurt", description: "Use mint as main herb." }
    ],
    best_on: ["Kebabs", "Grilled meats", "Vegetables"],
    mix_with: ["Lemon juice", "Black pepper"],
    used_in_blends: [],
    storage: {
      container: "Sealed container",
      shelf_life: "3 days refrigerated",
      notes: "Stir before use."
    }
  }
];

export default HOT_SAUCES;

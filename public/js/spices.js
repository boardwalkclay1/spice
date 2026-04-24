import DRY_SPICES from "/js/spices/drySpices.js";
import DRY_SPICES_2 from "/js/spices/drySpices2.js";
import DRY_SPICES_3 from "/js/spices/drySpices3.js";
import DRY_SPICES_4 from "/js/spices/drySpices4.js";
import DRY_SPICES_5 from "/js/spices/drySpices5.js";

import HERB_BLENDS from "/js/spices/herbBlends.js";
import SEASONING_MIXES from "/js/spices/seasoningMixes.js";
import CULTURAL_SPICES from "/js/spices/culturalSpices.js";
import HOT_SPICES from "/js/spices/hotSpices.js";

// You have an Aromatics folder, not a file named aromatics.js
// So the correct import is:
import AROMATICS from "/js/spices/Aromatics/Aromatics.js";

// These files DO NOT exist in your repo:
// barkSpices.js
// rootSpices.js
// flowerSpices.js
// So we REMOVE them completely.

const ALL_SPICES = [
  ...DRY_SPICES,
  ...DRY_SPICES_2,
  ...DRY_SPICES_3,
  ...DRY_SPICES_4,
  ...DRY_SPICES_5,

  ...HERB_BLENDS,
  ...SEASONING_MIXES,
  ...CULTURAL_SPICES,
  ...HOT_SPICES,
  ...AROMATICS
];

export function getAllSpices() {
  return ALL_SPICES;
}

export function getSpiceById(id) {
  return ALL_SPICES.find(s => s.id === id);
}

export function getSpicesByCategory(category) {
  return ALL_SPICES.filter(s => s.category === category);
}

export default ALL_SPICES;

import DRY_SPICES from "./spices/drySpices.js";
import HERB_BLENDS from "./spices/herbBlends.js";
import SEASONING_MIXES from "./spices/seasoningMixes.js";
import CULTURAL_SPICES from "./spices/culturalSpices.js";
import HOT_SPICES from "./spices/hotSpices.js";
import AROMATIC_SPICES from "./spices/aromatics.js";
import SEED_SPICES from "./spices/seedSpices.js";
import BARK_SPICES from "./spices/barkSpices.js";
import ROOT_SPICES from "./spices/rootSpices.js";
import FLOWER_SPICES from "./spices/flowerSpices.js";

const ALL_SPICES = [
  ...DRY_SPICES,
  ...HERB_BLENDS,
  ...SEASONING_MIXES,
  ...CULTURAL_SPICES,
  ...HOT_SPICES,
  ...AROMATIC_SPICES,
  ...SEED_SPICES,
  ...BARK_SPICES,
  ...ROOT_SPICES,
  ...FLOWER_SPICES
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

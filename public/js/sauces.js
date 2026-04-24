// MASTER SAUCES MODULE
// Imports all 10 sauce category modules and exports one unified array

import FRESH_SAUCES from "/js/sauces/freshSauces.js";
import COOKED_SAUCES from "/js/sauces/cookedSauces.js";
import FERMENTED_SAUCES from "/js/sauces/fermentedSauces.js";
import HOT_SAUCES from "/js/sauces/hotSauces.js";
import DRESSINGS from "/js/sauces/dressings.js";
import MARINADES from "/js/sauces/marinades.js";
import DIPS from "/js/sauces/dips.js";
import GRAVIES from "/js/sauces/gravies.js";
import CREAM_SAUCES from "/js/sauces/creamSauces.js";
import CULTURAL_SAUCES from "/js/sauces/culturalSauces.js";

const SAUCES = [
  ...FRESH_SAUCES,
  ...COOKED_SAUCES,
  ...FERMENTED_SAUCES,
  ...HOT_SAUCES,
  ...DRESSINGS,
  ...MARINADES,
  ...DIPS,
  ...GRAVIES,
  ...CREAM_SAUCES,
  ...CULTURAL_SAUCES
];

export default SAUCES;

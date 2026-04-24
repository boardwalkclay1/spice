// MASTER SAUCES MODULE — matches EXACT files in /sauces folder

import COOKED_SAUCES from "/js/sauces/cookedSauces.js";
import FERMENTED_SAUCES from "/js/sauces/fermentedSauces.js";

import FRESH_SAUCES_1 from "/js/sauces/freshSauces.js";
import FRESH_SAUCES_2 from "/js/sauces/freshSauces2.js";
import FRESH_SAUCES_3 from "/js/sauces/freshSauce3.js";
import FRESH_SAUCES_4 from "/js/sauces/freshSauce4.js";
import FRESH_SAUCES_5 from "/js/sauces/freshSauces5.js";

import HOT_SAUCES from "/js/sauces/hotSauces.js";

import MARINADES from "/js/sauces/sauceMarinades.js";

const SAUCES = [
  ...COOKED_SAUCES,
  ...FERMENTED_SAUCES,

  ...FRESH_SAUCES_1,
  ...FRESH_SAUCES_2,
  ...FRESH_SAUCES_3,
  ...FRESH_SAUCES_4,
  ...FRESH_SAUCES_5,

  ...HOT_SAUCES,

  ...MARINADES
];

export default SAUCES;

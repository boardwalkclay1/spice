// index.js — main entrypoint for the app

import SPICES from "/js/spices.js";
import SAUCES from "/js/sauces.js";
import initApp from "/js/app.js";

document.addEventListener("DOMContentLoaded", () => {
  initApp(SPICES, SAUCES);
});

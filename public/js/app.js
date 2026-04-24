// IMPORT DATA MODULES
import SPICES from "/js/spices.js";
import SAUCES from "/js/sauces.js";

// MERGE ALL ITEMS
const ALL_ITEMS = [...SPICES, ...SAUCES];

// CATEGORY CONFIG
const CATEGORIES = [
  { key: "Dry Spices", label: "🌶 Dry Spices" },
  { key: "Herb Blends", label: "🌿 Herb Blends" },
  { key: "Seasoning Mixes", label: "🧂 Seasoning Mixes" },
  { key: "Fresh Sauces", label: "🍃 Fresh Sauces" },
  { key: "Cooked Sauces", label: "🍯 Cooked Sauces" },
  { key: "Fermented Sauces", label: "🧪 Fermented Sauces" }
];

// DOM ELEMENTS
const categoryNav = document.getElementById("categoryNav");
const listView = document.getElementById("listView");
const detailView = document.getElementById("detailView");
const searchInput = document.getElementById("searchInput");

let currentCategory = null;
let currentSearch = "";

// INIT
renderCategoryNav();
renderList();

// ---------- NAV ----------
function renderCategoryNav() {
  categoryNav.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.textContent = "⭐ All";
  allBtn.onclick = () => {
    currentCategory = null;
    renderList();
  };
  categoryNav.appendChild(allBtn);

  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.label;
    btn.onclick = () => {
      currentCategory = cat.key;
      renderList();
    };
    categoryNav.appendChild(btn);
  });
}

// ---------- LIST VIEW ----------
function renderList() {
  detailView.classList.add("hidden");
  listView.classList.remove("hidden");

  const filtered = ALL_ITEMS.filter(item => {
    const matchCategory = currentCategory ? item.category === currentCategory : true;
    const matchSearch = currentSearch
      ? (item.name + " " + item.description)
          .toLowerCase()
          .includes(currentSearch.toLowerCase())
      : true;
    return matchCategory && matchSearch;
  });

  if (!filtered.length) {
    listView.innerHTML = "<p>No items found.</p>";
    return;
  }

  listView.innerHTML = filtered
    .map(item => {
      return `
        <article class="card" data-id="${item.id}">
          <div class="card-image">
            ${item.image ? `<img src="${item.image}" alt="${item.name}" />` : ""}
          </div>
          <div class="card-body">
            <h2>${item.emoji} ${item.name}</h2>
            <p class="category">${item.category || ""}</p>
            <p>${item.description}</p>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      const item = ALL_ITEMS.find(i => i.id === id);
      if (item) renderDetail(item);
    });
  });
}

// ---------- DETAIL VIEW ----------
function renderDetail(item) {
  listView.classList.add("hidden");
  detailView.classList.remove("hidden");

  detailView.innerHTML = `
    <button class="backBtn">⬅ Back</button>

    <header class="detail-header">
      <div class="detail-image">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" />` : ""}
      </div>
      <div>
        <h1>${item.emoji} ${item.name}</h1>
        <p class="origin">🌍 ${item.origin || ""}</p>
        <p>${item.description}</p>
        <p><strong>Flavor:</strong> ${item.flavor_profile || "—"}</p>
        <p><strong>Heat:</strong> ${item.heat_level || "—"}</p>
      </div>
    </header>

    <section>
      <h2>🧰 Equipment</h2>
      <ul>
        ${item.equipment?.map(eq => `<li>${eq}</li>`).join("") || "<li>None specified</li>"}
      </ul>
    </section>

    <section>
      <h2>🧾 Ingredients</h2>
      <ul>
        ${item.ingredients?.map(ing => `<li>${ing}</li>`).join("") || "<li>None specified</li>"}
      </ul>
    </section>

    <section>
      <h2>👣 Step-by-step</h2>
      <ol>
        ${item.steps?.map(step => `<li>${step}</li>`).join("") || "<li>No steps yet.</li>"}
      </ol>
    </section>

    <section>
      <h2>🔄 Variations</h2>
      <ul>
        ${
          item.variations?.length
            ? item.variations
                .map(v => `<li><strong>${v.name}:</strong> ${v.description}</li>`)
                .join("")
            : "<li>No variations yet.</li>"
        }
      </ul>
    </section>

    <section>
      <h2>🍽️ Best On / In</h2>
      <ul>
        ${item.best_on?.map(b => `<li>${b}</li>`).join("") || "<li>Not specified.</li>"}
      </ul>
    </section>

    <section>
      <h2>🔗 Best Spices to Mix With</h2>
      <ul>
        ${item.mix_with?.map(m => `<li>${m}</li>`).join("") || "<li>Not specified.</li>"}
      </ul>
    </section>

    <section>
      <h2>🧂 Used In Blends</h2>
      <ul>
        ${item.used_in_blends?.map(b => `<li>${b}</li>`).join("") || "<li>None listed.</li>"}
      </ul>
    </section>

    <section>
      <h2>📦 Storage & Shelf Life</h2>
      <p><strong>Container:</strong> ${item.storage?.container || "—"}</p>
      <p><strong>Shelf life:</strong> ${item.storage?.shelf_life || "—"}</p>
      <p>${item.storage?.notes || ""}</p>
    </section>
  `;

  detailView.querySelector(".backBtn").onclick = () => {
    detailView.classList.add("hidden");
    listView.classList.remove("hidden");
  };
}

// ---------- SEARCH ----------
searchInput.addEventListener("input", e => {
  currentSearch = e.target.value;
  renderList();
});

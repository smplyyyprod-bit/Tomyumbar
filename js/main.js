/**
 * TomYumBar — Structural JS (Round 1)
 * ------------------------------------------------------------------
 * Intentionally minimal: no animation libraries, no scroll-triggered
 * effects, no transitions. Three responsibilities only:
 *   1. Render the menu (category nav + dish cards) from menu-data.js
 *   2. Toggle the mobile nav open/closed
 *   3. Swap the header background once the page has scrolled past
 *      the hero, so nav text stays legible
 * ------------------------------------------------------------------
 */

// Renders the menu in the given language ("ru" | "en") — exposed on
// window so js/i18n.js can re-run it when the user switches language,
// since menu content lives in data (menu-data.js), not static HTML.
function renderMenu(lang) {
  const navEl = document.getElementById("menuNav");
  const categoriesEl = document.getElementById("menuCategories");
  if (!navEl || !categoriesEl || typeof MENU_DATA === "undefined") return;

  const currencyLabel = lang === "en" ? "UZS" : "сум";

  navEl.innerHTML = "";
  categoriesEl.innerHTML = "";

  const navFragment = document.createDocumentFragment();
  const categoriesFragment = document.createDocumentFragment();

  MENU_DATA.forEach((category) => {
    const categoryName = category.name[lang] || category.name.ru;

    // Nav chip
    const navLink = document.createElement("a");
    navLink.href = `#cat-${category.id}`;
    navLink.className = "menu-nav__chip";
    navLink.textContent = categoryName;
    navFragment.appendChild(navLink);

    // Category block
    const section = document.createElement("div");
    section.className = "menu-category";
    section.id = `cat-${category.id}`;

    const heading = document.createElement("h3");
    heading.className = "menu-category__title";
    heading.textContent = categoryName;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "menu-card-grid";

    category.items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-card";

      const itemName = item.name[lang] || item.name.ru;
      const itemDesc = (item.description && (item.description[lang] || item.description.ru)) || "";

      const mediaHtml = item.image
        ? `<div class="menu-card__media"><img src="${item.image}" alt="${itemName}"></div>`
        : `<div class="menu-card__media menu-card__media--placeholder"><span data-i18n="menu.imagePlaceholder">${lang === "en" ? "Image" : "Фото"}</span></div>`;

      card.innerHTML = `
        ${mediaHtml}
        <div class="menu-card__body">
          <div class="menu-card__row">
            <h4 class="menu-card__name">${itemName}</h4>
            <span class="menu-card__price">${item.price}<span class="menu-card__currency"> ${currencyLabel}</span></span>
          </div>
          <p class="menu-card__desc">${itemDesc}</p>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    categoriesFragment.appendChild(section);
  });

  navEl.appendChild(navFragment);
  categoriesEl.appendChild(categoriesFragment);
}

window.TYB_renderMenu = renderMenu;
renderMenu("ru");

// Mobile nav toggle
(function mobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

// Header background state once past hero
(function headerScrollState() {
  const header = document.getElementById("siteHeader");
  const hero = document.querySelector(".hero");
  if (!header || !hero) return;

  const setState = () => {
    const threshold = hero.offsetHeight - header.offsetHeight;
    header.classList.toggle("site-header--solid", window.scrollY > threshold);
  };

  setState();
  window.addEventListener("scroll", setState, { passive: true });
  window.addEventListener("resize", setState);
})();

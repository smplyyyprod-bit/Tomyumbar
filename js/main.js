/**
 * TomYumBar — Structural JS
 * ------------------------------------------------------------------
 * Responsibilities:
 *   1. Render the menu (category nav + dish cards) from menu-data.js,
 *      wire up search-filtering and the dish detail modal
 *   2. Smooth-scroll + active-state the sticky category nav
 *   3. Toggle the mobile nav open/closed
 *   4. Swap the header background once the page has scrolled past
 *      the hero, so nav text stays legible
 * ------------------------------------------------------------------
 */

const DIETARY_ICONS = { spicy: "🌶️", vegetarian: "🌱" };

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Renders the menu in the given language ("ru" | "en") — exposed on
// window so js/i18n.js can re-run it when the user switches language,
// since menu content lives in data (menu-data.js), not present in
// static HTML for the data-i18n system to tag.
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

    const navLink = document.createElement("a");
    navLink.href = `#cat-${category.id}`;
    navLink.className = "menu-nav__chip";
    navLink.textContent = categoryName;
    navLink.dataset.categoryId = category.id;
    navFragment.appendChild(navLink);

    const section = document.createElement("div");
    section.className = "menu-category";
    section.id = `cat-${category.id}`;
    section.dataset.categoryId = category.id;

    const heading = document.createElement("h3");
    heading.className = "menu-category__title";
    heading.textContent = categoryName;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "menu-card-grid";

    category.items.forEach((item, itemIndex) => {
      const card = document.createElement("article");
      card.className = "menu-card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.dataset.categoryId = category.id;
      card.dataset.itemIndex = String(itemIndex);

      const itemName = item.name[lang] || item.name.ru;
      const itemDesc = (item.description && (item.description[lang] || item.description.ru)) || "";
      const weight = (item.weight && (item.weight[lang] || item.weight.ru)) || "";
      const tags = item.tags || [];

      const badgesHtml = tags.length
        ? `<div class="menu-card__badges">${tags.map((t) => `<span class="menu-card__badge" title="${t}">${DIETARY_ICONS[t] || ""}</span>`).join("")}</div>`
        : "";

      const mediaHtml = item.image
        ? `<div class="menu-card__media"><img src="${item.image}" alt="${itemName}" loading="lazy" decoding="async">${badgesHtml}</div>`
        : `<div class="menu-card__media menu-card__media--placeholder"><span>${lang === "en" ? "Image" : "Фото"}</span>${badgesHtml}</div>`;

      card.innerHTML = `
        ${mediaHtml}
        <div class="menu-card__body">
          <div class="menu-card__row">
            <h4 class="menu-card__name">${itemName}</h4>
            <span class="menu-card__price">${item.price}<span class="menu-card__currency"> ${currencyLabel}</span></span>
          </div>
          <p class="menu-card__desc">${itemDesc}</p>
          ${weight ? `<span class="menu-card__weight">${weight}</span>` : ""}
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    categoriesFragment.appendChild(section);
  });

  navEl.appendChild(navFragment);
  categoriesEl.appendChild(categoriesFragment);

  // A fresh render means a fresh DOM — any active search filter or
  // scroll-spy highlight from before this call no longer applies.
  const searchInput = document.getElementById("menuSearch");
  if (searchInput && searchInput.value) {
    searchInput.value = "";
    const clearBtn = document.getElementById("menuSearchClear");
    if (clearBtn) clearBtn.hidden = true;
  }
  document.getElementById("menuSearchStatus")?.setAttribute("hidden", "");
}

window.TYB_renderMenu = renderMenu;
renderMenu("ru");

// ----------------------------------------------------------------
// Menu search — filters dish cards in place across every category.
// A category with zero matching cards hides entirely; if nothing
// anywhere matches, a "no results" message shows instead.
// ----------------------------------------------------------------
(function menuSearch() {
  const input = document.getElementById("menuSearch");
  const clearBtn = document.getElementById("menuSearchClear");
  const statusEl = document.getElementById("menuSearchStatus");
  const categoriesEl = document.getElementById("menuCategories");
  if (!input || !categoriesEl) return;

  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "ru";
  }

  function runFilter() {
    const query = input.value.trim().toLowerCase();
    clearBtn.hidden = query.length === 0;

    if (!query) {
      statusEl.hidden = true;
      categoriesEl.querySelectorAll(".menu-category").forEach((s) => s.classList.remove("is-hidden"));
      categoriesEl.querySelectorAll(".menu-card").forEach((c) => c.classList.remove("is-hidden"));
      return;
    }

    let totalMatches = 0;
    const lang = currentLang();

    categoriesEl.querySelectorAll(".menu-category").forEach((section) => {
      const categoryId = section.dataset.categoryId;
      const category = MENU_DATA.find((c) => c.id === categoryId);
      if (!category) return;

      let visibleInCategory = 0;
      section.querySelectorAll(".menu-card").forEach((card) => {
        const item = category.items[Number(card.dataset.itemIndex)];
        const name = ((item.name[lang] || item.name.ru) + " " + (item.description ? item.description[lang] || item.description.ru : "")).toLowerCase();
        const matches = name.includes(query);
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleInCategory++;
      });

      section.classList.toggle("is-hidden", visibleInCategory === 0);
      totalMatches += visibleInCategory;
    });

    if (totalMatches === 0) {
      statusEl.hidden = false;
      statusEl.textContent = lang === "en" ? `No dishes match "${input.value.trim()}".` : `По запросу «${input.value.trim()}» ничего не найдено.`;
    } else {
      statusEl.hidden = true;
    }
  }

  input.addEventListener("input", runFilter);
  clearBtn.addEventListener("click", () => {
    input.value = "";
    runFilter();
    input.focus();
  });
})();

// ----------------------------------------------------------------
// Sticky category nav — smooth-scrolls to the target section on
// click and highlights whichever category is currently in view,
// auto-scrolling the pill row so the active chip stays visible.
// ----------------------------------------------------------------
(function menuCategoryNav() {
  const navEl = document.getElementById("menuNav");
  const categoriesEl = document.getElementById("menuCategories");
  if (!navEl || !categoriesEl) return;

  navEl.addEventListener("click", (e) => {
    const link = e.target.closest(".menu-nav__chip");
    if (!link) return;
    e.preventDefault();
    const target = document.getElementById(`cat-${link.dataset.categoryId}`);
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  });

  let activeId = null;
  function setActive(categoryId) {
    if (categoryId === activeId) return;
    activeId = categoryId;
    navEl.querySelectorAll(".menu-nav__chip").forEach((chip) => {
      const isActive = chip.dataset.categoryId === categoryId;
      chip.classList.toggle("is-active", isActive);
      if (isActive) chip.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "nearest", inline: "center" });
    });
  }

  const navWrap = document.getElementById("menuNavWrap");

  function headerHeightPx() {
    const val = getComputedStyle(document.documentElement).getPropertyValue("--header-height");
    return parseFloat(val) || 0;
  }

  // .menu-category's scroll-margin-top (CSS) only needs to clear the sticky
  // sub-nav — the fixed header is already handled by html's scroll-padding-top.
  // Keep that value and the IntersectionObserver's trigger line derived from
  // the same measured navWrap height so a click-scroll always lands inside
  // the band that marks it active (they drifted out of sync once already:
  // CSS assumed a guessed 112px sub-nav height while this measured the real,
  // content-dependent one, so the section landed just outside the band).
  let observer;
  function createObserver() {
    const navHeight = navWrap?.offsetHeight || 0;
    document.documentElement.style.setProperty("--menu-nav-height", `${navHeight + 20}px`);

    const triggerLine = headerHeightPx() + navHeight + 20;
    const bandHeight = 40;
    const bottomMargin = Math.max(window.innerHeight - triggerLine - bandHeight, 0);

    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.categoryId);
        });
      },
      { rootMargin: `-${triggerLine}px 0px -${bottomMargin}px 0px`, threshold: 0 }
    );
    observeCategories();
  }

  // Re-observe whenever the menu is re-rendered (language switch rebuilds
  // the category sections as new elements).
  function observeCategories() {
    categoriesEl.querySelectorAll(".menu-category").forEach((section) => observer.observe(section));
  }

  createObserver();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(createObserver, 200);
  });

  new MutationObserver(observeCategories).observe(categoriesEl, { childList: true });
})();

// ----------------------------------------------------------------
// Dish detail modal
// ----------------------------------------------------------------
(function dishModal() {
  const modal = document.getElementById("dishModal");
  const backdrop = document.getElementById("dishModalBackdrop");
  const dialog = document.getElementById("dishModalDialog");
  const closeBtn = document.getElementById("dishModalClose");
  const categoriesEl = document.getElementById("menuCategories");
  if (!modal || !categoriesEl) return;

  const imageEl = document.getElementById("dishModalImage");
  const mediaEl = imageEl.closest(".dish-modal__media");
  const tagsEl = document.getElementById("dishModalTags");
  const titleEl = document.getElementById("dishModalTitle");
  const priceEl = document.getElementById("dishModalPrice");
  const weightEl = document.getElementById("dishModalWeight");
  const descEl = document.getElementById("dishModalDesc");
  const ingredientsEl = document.getElementById("dishModalIngredients");
  const allergensRow = document.getElementById("dishModalAllergensRow");
  const allergensEl = document.getElementById("dishModalAllergens");
  const relatedWrap = document.getElementById("dishModalRelated");
  const relatedRow = document.getElementById("dishModalRelatedRow");

  let lastFocused = null;

  function currentLang() {
    return document.documentElement.lang === "en" ? "en" : "ru";
  }

  function populate(categoryId, itemIndex) {
    const category = MENU_DATA.find((c) => c.id === categoryId);
    if (!category) return;
    const item = category.items[itemIndex];
    if (!item) return;
    const lang = currentLang();
    const currencyLabel = lang === "en" ? "UZS" : "сум";

    if (item.image) {
      imageEl.src = item.image;
      imageEl.alt = item.name[lang] || item.name.ru;
      mediaEl.hidden = false;
    } else {
      mediaEl.hidden = true;
    }

    tagsEl.innerHTML = (item.tags || []).map((t) => `<span class="dish-modal__tag">${DIETARY_ICONS[t] || ""}</span>`).join("");
    titleEl.textContent = item.name[lang] || item.name.ru;
    priceEl.textContent = `${item.price} ${currencyLabel}`;
    weightEl.textContent = (item.weight && (item.weight[lang] || item.weight.ru)) || "";
    descEl.textContent = (item.fullDescription && (item.fullDescription[lang] || item.fullDescription.ru)) || (item.description && (item.description[lang] || item.description.ru)) || "";
    ingredientsEl.textContent = (item.ingredients && (item.ingredients[lang] || item.ingredients.ru)) || "—";

    const allergenText = item.allergens && (item.allergens[lang] || item.allergens.ru);
    if (allergenText && allergenText !== "—") {
      allergensRow.hidden = false;
      allergensEl.textContent = allergenText;
    } else {
      allergensRow.hidden = true;
    }

    // "You may also like": up to 3 other items from the same category.
    const others = category.items.map((it, idx) => ({ it, idx })).filter((entry) => entry.idx !== itemIndex).slice(0, 3);
    if (others.length) {
      relatedWrap.hidden = false;
      relatedRow.innerHTML = others
        .map(({ it, idx }) => {
          const name = it.name[lang] || it.name.ru;
          const thumb = it.image
            ? `<img src="${it.image}" alt="${name}" loading="lazy" decoding="async">`
            : `<span class="dish-modal__related-thumb--placeholder"></span>`;
          return `
            <button type="button" class="dish-modal__related-item" data-category-id="${categoryId}" data-item-index="${idx}">
              <span class="dish-modal__related-thumb">${thumb}</span>
              <span class="dish-modal__related-name">${name}</span>
              <span class="dish-modal__related-price">${it.price} ${currencyLabel}</span>
            </button>
          `;
        })
        .join("");
    } else {
      relatedWrap.hidden = true;
      relatedRow.innerHTML = "";
    }

    dialog.scrollTop = 0;
  }

  function openModal(categoryId, itemIndex) {
    populate(categoryId, itemIndex);
    lastFocused = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("modal-open");
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("modal-open");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  categoriesEl.addEventListener("click", (e) => {
    const card = e.target.closest(".menu-card");
    if (!card) return;
    openModal(card.dataset.categoryId, Number(card.dataset.itemIndex));
  });

  categoriesEl.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".menu-card");
    if (!card) return;
    e.preventDefault();
    openModal(card.dataset.categoryId, Number(card.dataset.itemIndex));
  });

  relatedRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".dish-modal__related-item");
    if (!btn) return;
    populate(btn.dataset.categoryId, Number(btn.dataset.itemIndex));
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
  });
})();

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

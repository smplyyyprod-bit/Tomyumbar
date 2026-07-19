/**
 * TomYumBar — Language switch (RU default / EN alternate)
 * ------------------------------------------------------------------
 * The HTML is authored in Russian by default (no flash of the wrong
 * language on load). This file holds the English strings and swaps
 * every [data-i18n] / [data-i18n-alt] / [data-i18n-aria] /
 * [data-i18n-placeholder] element's content when the user picks
 * English — plus re-renders the menu (js/main.js) with the chosen
 * language, since that's built from js/menu-data.js rather than
 * static HTML.
 *
 * Add new copy in three places: the Russian text in index.html itself,
 * the matching key here under STRINGS.en, and a data-i18n attribute
 * (or data-i18n-alt / data-i18n-aria / data-i18n-placeholder) on the
 * element pointing at that key — same key is used to read the Russian
 * original back out of a data-i18n-ru attribute this script stamps on
 * first run.
 * ------------------------------------------------------------------
 */

(function i18n() {
  const LANG_KEY = "tomyumbar-lang";

  const STRINGS = {
    en: {
      "meta.title": "TomYumBar — Modern Pan Asian Kitchen",
      "meta.description": "TomYumBar — Modern Pan Asian Kitchen. Est. 2016.",

      "nav.story": "Our Story",
      "nav.signatures": "Signatures",
      "nav.menu": "Menu",
      "nav.gallery": "Gallery",
      "nav.visit": "Visit",
      "nav.reserve": "Reserve",
      "nav.orderOnline": "Order Online",
      "nav.openMenu": "Open menu",
      "nav.primaryLabel": "Primary",

      "hero.eyebrow": "Tashkent · Est. 2016",
      "hero.title": "Modern Pan Asian Kitchen",
      "hero.subtitle": "Fire, smoke and citrus — the flavors of Asia,<br>plated for the modern table.",
      "hero.ctaMenu": "View Full Menu",
      "hero.ctaReserve": "Reserve a Table",
      "hero.scrollCue": "Scroll",
      "hero.scrollAria": "Scroll to next section",

      "story.eyebrow": "Our Story",
      "story.heading": "Where Pan-Asian tradition meets modern craft",
      "story.lede": "Since 2016, TomYumBar has reimagined the flavors of Thailand, Japan, China and Vietnam through a single, modern lens — bold spice, precise technique, and a room built for long, unhurried tables.",
      "story.body": "Every dish moves between two worlds: the comfort of a night-market bowl and the composure of fine dining. Woven rattan, warm wood and deep lacquer red set the stage; the kitchen does the rest.",
      "story.link": "Step inside the space →",
      "story.imgAlt": "TomYumBar storefront and dining room signage",

      "signatures.eyebrow": "Chef's Selection",
      "signatures.heading": "Signature Dishes",
      "signatures.imgAlt": "Nigiri sushi platter with wasabi, ginger and soy",
      "signatures.placeholder": "Dish image placeholder",
      "signatures.dish1.name": "Nigiri Selection",
      "signatures.dish1.desc": "Salmon, tuna, tiger prawn &amp; seared eel — hand-pressed to order.",
      "signatures.dish2.name": "Tom Yum Kung",
      "signatures.dish2.desc": "The house classic — river prawn, lemongrass, chili oil.",
      "signatures.dish3.name": "Black Pepper Wagyu",
      "signatures.dish3.desc": "Wok-charred wagyu, scallion, roasted garlic.",

      "menu.eyebrow": "Full Menu",
      "menu.heading": "Explore the Menu",
      "menu.note": "Menu content below is placeholder structure for Round 1 — the complete, current TomYumBar menu will be dropped in once provided.",
      "menu.categoriesAria": "Menu categories",
      "menu.imagePlaceholder": "Image",
      "menu.currency": "UZS",
      "menu.searchPlaceholder": "Search the menu…",
      "menu.searchClear": "Clear search",
      "menu.searchNoResults": "No dishes match “{query}”.",
      "menu.searchResultsCount": "{count} dishes found",

      "modal.ingredients": "Ingredients",
      "modal.allergens": "Allergens",
      "modal.related": "You may also like",
      "modal.close": "Close",
      "modal.viewDish": "View dish",

      "gallery.eyebrow": "The Room",
      "gallery.heading": "An Atmosphere Worth Staying For",
      "gallery.imgAlt1": "Woven rattan pendant lights over the dining room",
      "gallery.imgAlt2": "TomYumBar signage detail with warm pendant lighting",
      "gallery.placeholder": "Gallery image placeholder",

      "visit.eyebrow": "Visit Us",
      "visit.heading": "Plan Your Table",
      "visit.locationLabel": "Location",
      "visit.locationValue": "Tashkent, Uzbekistan",
      "visit.hoursLabel": "Hours",
      "visit.hoursValue": "Daily · 10:00 — 23:00",
      "visit.contactLabel": "Contact",
      "visit.ctaReserve": "Reserve a Table",
      "visit.ctaOrder": "Order Online",
      "visit.mapPlaceholder": "Map embed placeholder",

      "footer.brandAlt": "TomYumBar — Modern Pan Asian Kitchen, est. 2016",
      "footer.exploreHeading": "Explore",
      "footer.visitHeading": "Visit",
      "footer.followHeading": "Follow",
      "footer.locationHours": "Location & Hours",
      "footer.reservations": "Reservations",
      "footer.orderOnline": "Order Online",
      "footer.copyright": "© 2026 TomYumBar. All rights reserved.",
    },
  };

  function getSavedLang() {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* private browsing / storage disabled — language just won't persist */
    }
  }

  // Snapshot the Russian original of every translatable element once, up
  // front, so switching back to "ru" after "en" is a plain lookup rather
  // than needing a duplicate Russian copy inside STRINGS.
  function snapshotRussian() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.setAttribute("data-i18n-ru", el.innerHTML);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("data-i18n-alt-ru", el.getAttribute("alt") || "");
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("data-i18n-aria-ru", el.getAttribute("aria-label") || "");
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("data-i18n-placeholder-ru", el.getAttribute("placeholder") || "");
    });
  }

  function applyLang(lang) {
    const dict = lang === "en" ? STRINGS.en : null;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = dict ? dict[key] ?? el.getAttribute("data-i18n-ru") : el.getAttribute("data-i18n-ru");
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      el.setAttribute("alt", dict ? dict[key] ?? el.getAttribute("data-i18n-alt-ru") : el.getAttribute("data-i18n-alt-ru"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", dict ? dict[key] ?? el.getAttribute("data-i18n-aria-ru") : el.getAttribute("data-i18n-aria-ru"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", dict ? dict[key] ?? el.getAttribute("data-i18n-placeholder-ru") : el.getAttribute("data-i18n-placeholder-ru"));
    });

    document.documentElement.lang = lang;
    document.title = dict ? dict["meta.title"] : document.documentElement.getAttribute("data-title-ru");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", dict ? dict["meta.description"] : metaDesc.getAttribute("data-content-ru"));
    }

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    if (typeof window.TYB_renderMenu === "function") {
      window.TYB_renderMenu(lang);
    }
  }

  snapshotRussian();

  const titleEl = document.querySelector("title");
  document.documentElement.setAttribute("data-title-ru", titleEl ? titleEl.textContent : "");
  const metaDescEl = document.querySelector('meta[name="description"]');
  if (metaDescEl) metaDescEl.setAttribute("data-content-ru", metaDescEl.getAttribute("content") || "");

  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      saveLang(lang);
      applyLang(lang);
    });
  });

  const initialLang = getSavedLang() === "en" ? "en" : "ru";
  applyLang(initialLang);
})();

// ============================================================
// Kleine, einfache Funktionen — kein Framework nötig.
// 1) Menü öffnen/schließen
// 2) Projekte nach Kategorie filtern
// 3) Elemente beim Scrollen sanft einblenden
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Header: weiß über dem Bild, dunkel sobald gescrollt ---------- */
  var header = document.querySelector(".site-header");
  var heroEl = document.querySelector(".hero, .project-header");

  if (header && heroEl) {
    var updateHeader = function () {
      var threshold = heroEl.offsetHeight - header.offsetHeight;
      if (window.scrollY > threshold) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
  } else if (header) {
    /* Keine Hero-/Headerbild-Sektion auf der Seite -> Header immer dunkel */
    header.classList.add("is-scrolled");
  }

  /* ---------- Menü ---------- */
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var navOverlay = document.querySelector("[data-nav-overlay]");
  var navClose = document.querySelector("[data-nav-close]");

  function openNav() {
    if (navOverlay) navOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    if (navOverlay) navOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (menuToggle) menuToggle.addEventListener("click", openNav);
  if (navClose) navClose.addEventListener("click", closeNav);
  if (navOverlay) {
    navOverlay.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  /* ---------- Projekt-Filter ---------- */
  var filterButtons = document.querySelectorAll("[data-filter]");
  var projectCards = document.querySelectorAll("[data-categories]");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      var filter = btn.getAttribute("data-filter");

      projectCards.forEach(function (card) {
        var cats = card.getAttribute("data-categories").split(",");
        if (filter === "all" || cats.indexOf(filter) !== -1) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  /* Hinweis: Der frühere Einblend-Effekt beim Scrollen wurde entfernt,
     weil Inhalte dadurch in manchen Fällen unsichtbar bleiben konnten.
     Alle Inhalte sind jetzt immer direkt sichtbar. */
});

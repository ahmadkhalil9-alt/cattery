/* ============================================================
   JERUSALEM TOP CATTERY — site logic

   You don't need to edit this file. All the words and all the
   cats live in content.js.
   ============================================================ */

const TONES = ["cobalt", "teal", "red", "gold"];

let LANG = "en";
let currentFilter = "all";

/* ---------- small helpers ---------- */

function savedLang() {
  try { return localStorage.getItem("jtc-lang"); } catch (e) { return null; }
}
function saveLang(v) {
  try { localStorage.setItem("jtc-lang", v); } catch (e) { /* ignore */ }
}

function t(key) {
  const entry = TEXT[key];
  if (!entry) return "";
  return entry[LANG] || entry.en || "";
}

/* translate a single word from the cat list, if we know it */
function w(value) {
  if (!value) return "";
  if (LANG === "en") return value;
  if (WORDS[value]) return WORDS[value];
  const parts = value.split(" ");
  if (parts.length === 2 && WORDS[parts[0]]) return WORDS[parts[0]] + " " + parts[1];
  return value;
}

/* keep text safe if it ever contains < or & */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugOf(cat) {
  if (cat.slug) return cat.slug;
  return cat.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function catBySlug(slug) {
  return CATS.find(c => slugOf(c) === slug) || null;
}
function catByName(name) {
  return CATS.find(c => c.name.toLowerCase() === String(name).toLowerCase()) || null;
}

function catName(cat) { return (LANG === "ar" && cat.name_ar) ? cat.name_ar : cat.name; }
function catNote(cat) { return (LANG === "ar" && cat.note_ar) ? cat.note_ar : (cat.note || ""); }
function catAbout(cat) { return (LANG === "ar" && cat.about_ar) ? cat.about_ar : (cat.about || ""); }
function catHealth(cat) { return (LANG === "ar" && cat.health_ar) ? cat.health_ar : (cat.health || ""); }

/* the list of photos for a cat, falling back to the old single field */
function photosOf(cat) {
  if (Array.isArray(cat.photos) && cat.photos.length) return cat.photos.filter(Boolean);
  return cat.photo ? [cat.photo] : [];
}

const INSTAGRAM = "https://www.instagram.com/jerusalem_top_cattery_/";

/* ---------- photo panels ---------- */

function loadPhoto(panel, src, letter) {
  const mark = panel.querySelector(".portrait__mark");
  if (mark && letter) mark.textContent = letter;
  if (!src) return;
  const img = new Image();
  img.onload = () => {
    panel.style.backgroundImage = 'url("' + src + '")';
    panel.classList.add("has-photo");
  };
  img.src = src;
}

/* ---------- catalog cards ---------- */

function cardFor(cat, index) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = "cat.html?name=" + encodeURIComponent(slugOf(cat));
  card.dataset.role = cat.role;
  card.dataset.status = cat.status;
  card.dataset.tone = TONES[index % TONES.length];

  const tags = [w(cat.breed), w(cat.colour), w(cat.sex)].filter(Boolean);
  const rows = [
    [t("label_born"), w(cat.born)],
    [t("label_sire"), cat.sire],
    [t("label_dam"), cat.dam]
  ].filter(r => r[1]);

  const note = catNote(cat);

  card.innerHTML =
    '<div class="card__band"></div>' +
    '<div class="card__photo">' +
      '<div class="portrait"><span class="portrait__mark"></span></div>' +
      '<span class="card__status" data-status="' + esc(cat.status) + '">' +
        esc(t("status_" + cat.status)) +
      '</span>' +
    '</div>' +
    '<div class="card__body">' +
      '<h2 class="card__name">' + esc(catName(cat)) +
        '<span class="card__role">' + esc(t("role_" + cat.role)) + '</span>' +
      '</h2>' +
      (tags.length ? '<ul class="card__tags">' + tags.map(x => '<li>' + esc(x) + '</li>').join("") + '</ul>' : "") +
      (rows.length ? '<dl class="card__data">' + rows.map(r => '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>').join("") + '</dl>' : "") +
      (note ? '<p class="card__note">' + esc(note) + '</p>' : "") +
    '</div>';

  loadPhoto(card.querySelector(".portrait"), photosOf(cat)[0], cat.name.trim().charAt(0));
  return card;
}

function render(filter) {
  const grid = document.getElementById("grid");
  if (!grid) return;

  const shown = CATS.filter(cat =>
    filter === "all" ? true :
    filter === "available" ? cat.status === "Available" :
    cat.role === filter
  );

  grid.innerHTML = "";
  shown.forEach((cat, i) => {
    const card = cardFor(cat, i);
    card.style.animationDelay = Math.min(i * 60, 400) + "ms";
    grid.appendChild(card);
  });

  const count = document.getElementById("count");
  if (count) count.textContent = shown.length + " " + t(shown.length === 1 ? "word_cat" : "word_cats");

  const empty = document.getElementById("empty");
  if (empty) empty.hidden = shown.length > 0;
}

function setFilter(value) {
  currentFilter = value;
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("is-on", chip.dataset.filter === value);
  });
  render(value);
}

/* ---------- the individual cat page ---------- */

/* a parent's name links to their own page if they're on the list */
function parentLink(name) {
  if (!name) return "";
  const parent = catByName(name);
  if (!parent) return esc(name);
  return '<a class="linked" href="cat.html?name=' + encodeURIComponent(slugOf(parent)) + '">' +
         esc(catName(parent)) + "</a>";
}

function renderCatPage() {
  const holder = document.getElementById("catPage");
  if (!holder) return;

  const slug = new URLSearchParams(location.search).get("name") || "";
  const cat = catBySlug(slug);

  if (!cat) {
    holder.innerHTML =
      '<section class="page-head">' +
        '<h1>' + esc(t("not_found_title")) + '</h1>' +
        '<p class="lede">' + esc(t("not_found_text")) + '</p>' +
        '<p style="margin-top:1.5rem"><a class="btn" href="cats.html">' + esc(t("back_to_cats")) + '</a></p>' +
      '</section>';
    return;
  }

  document.title = cat.name + " — Jerusalem Top Cattery";

  const photos = photosOf(cat);
  const details = [
    [t("label_breed"),  w(cat.breed)],
    [t("label_colour"), w(cat.colour)],
    [t("label_sex"),    w(cat.sex)],
    [t("label_born"),   w(cat.born)],
    [t("label_weight"), cat.weight ? cat.weight + " " + t("unit_kg") : ""],
    [t("label_reg"),    cat.reg]
  ].filter(r => r[1]);

  const parents = [
    [t("label_sire"), parentLink(cat.sire)],
    [t("label_dam"),  parentLink(cat.dam)]
  ].filter(r => r[1]);

  const forSale = [
    [t("label_price"), cat.price],
    [t("label_ready"), w(cat.ready)]
  ].filter(r => r[1]);

  const about = catAbout(cat);
  const health = catHealth(cat);

  holder.innerHTML =
    '<section class="cat-head">' +
      '<a class="backlink" href="cats.html">&larr; <span>' + esc(t("back_to_cats")) + '</span></a>' +
      '<span class="card__status cat-head__status" data-status="' + esc(cat.status) + '">' +
        esc(t("status_" + cat.status)) + '</span>' +
      '<h1>' + esc(catName(cat)) + '</h1>' +
      '<p class="cat-head__role">' + esc(t("role_" + cat.role)) + '</p>' +
      (catNote(cat) ? '<p class="lede">' + esc(catNote(cat)) + '</p>' : "") +
    '</section>' +

    '<section class="cat-body">' +

      '<div class="gallery">' +
        (photos.length
          ? '<figure class="gallery__main"><div class="portrait" id="galleryMain">' +
              '<span class="portrait__mark">' + esc(cat.name.charAt(0)) + '</span></div></figure>' +
            '<ul class="gallery__strip" id="galleryStrip">' +
              photos.map((src, i) =>
                '<li><button class="thumb" type="button" data-index="' + i + '">' +
                  '<span class="thumb__inner" data-src="' + esc(src) + '"></span>' +
                '</button></li>').join("") +
            '</ul>' +
            '<p class="gallery__hint mono">' + esc(t("gallery_hint")) + '</p>'
          : '<div class="portrait"><span class="portrait__mark">' + esc(cat.name.charAt(0)) + '</span></div>') +
      '</div>' +

      '<div class="cat-info">' +
        '<h2 class="cat-info__h">' + esc(t("sec_details")) + '</h2>' +
        '<dl class="spec">' +
          details.map(r => '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>').join("") +
          parents.map(r => '<dt>' + esc(r[0]) + '</dt><dd>' + r[1] + '</dd>').join("") +
        '</dl>' +

        (about ? '<h2 class="cat-info__h">' + esc(t("sec_about")) + '</h2>' +
                 '<p class="cat-info__p">' + esc(about) + '</p>' : "") +

        (health ? '<h2 class="cat-info__h">' + esc(t("sec_health")) + '</h2>' +
                  '<p class="cat-info__p">' + esc(health) + '</p>' : "") +

        (forSale.length
          ? '<div class="offer">' +
              forSale.map(r => '<div><span class="offer__label">' + esc(r[0]) + '</span>' +
                               '<span class="offer__value">' + esc(r[1]) + '</span></div>').join("") +
            '</div>'
          : "") +

        '<a class="btn cat-info__cta" href="' + INSTAGRAM + '" target="_blank" rel="noopener">' +
          esc(t("cta_ask")) + " " + esc(catName(cat)) +
        '</a>' +
      '</div>' +

    '</section>';

  /* fill the gallery images */
  if (photos.length) {
    const main = document.getElementById("galleryMain");
    loadPhoto(main, photos[0], cat.name.charAt(0));
    main.dataset.index = "0";

    document.querySelectorAll(".thumb__inner").forEach(el => {
      const src = el.dataset.src;
      const img = new Image();
      img.onload = () => {
        el.style.backgroundImage = 'url("' + src + '")';
        el.classList.add("has-photo");
      };
      img.src = src;
    });

    document.querySelectorAll(".thumb").forEach(btn => {
      btn.addEventListener("click", () => {
        const i = Number(btn.dataset.index);
        loadPhoto(main, photos[i], cat.name.charAt(0));
        main.dataset.index = String(i);
        document.querySelectorAll(".thumb").forEach(b => b.classList.toggle("is-on", b === btn));
      });
    });
    const first = document.querySelector(".thumb");
    if (first) first.classList.add("is-on");

    main.addEventListener("click", () => openLightbox(photos, Number(main.dataset.index || 0)));
    main.style.cursor = "zoom-in";
  }
}

/* ---------- lightbox ---------- */

let lbPhotos = [];
let lbIndex = 0;

function showLb() {
  const img = document.getElementById("lbImg");
  const count = document.getElementById("lbCount");
  img.src = lbPhotos[lbIndex];
  if (count) count.textContent = (lbIndex + 1) + " / " + lbPhotos.length;
}

function openLightbox(photos, index) {
  lbPhotos = photos;
  lbIndex = index || 0;
  const box = document.getElementById("lightbox");
  if (!box) return;
  box.hidden = false;
  document.body.style.overflow = "hidden";
  showLb();
  const close = document.getElementById("lbClose");
  if (close) close.focus();
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  box.hidden = true;
  document.body.style.overflow = "";
}

function stepLightbox(delta) {
  if (!lbPhotos.length) return;
  lbIndex = (lbIndex + delta + lbPhotos.length) % lbPhotos.length;
  showLb();
}

function wireLightbox() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const close = document.getElementById("lbClose");
  const prev = document.getElementById("lbPrev");
  const next = document.getElementById("lbNext");

  if (close) close.addEventListener("click", closeLightbox);
  if (prev) prev.addEventListener("click", () => stepLightbox(-1));
  if (next) next.addEventListener("click", () => stepLightbox(1));

  box.addEventListener("click", e => { if (e.target === box) closeLightbox(); });

  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
  });
}

/* ---------- language ---------- */

function applyLang(lang) {
  LANG = lang;
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = t("lang_button");
    toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  }

  ["lbClose", "lbPrev", "lbNext"].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("aria-label", t(["lb_close", "lb_prev", "lb_next"][i]));
  });

  if (document.getElementById("grid")) render(currentFilter);
  if (document.getElementById("catPage")) renderCatPage();

  saveLang(lang);
}

/* ---------- start ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".hero .portrait").forEach(panel => {
    loadPhoto(panel, panel.dataset.photo, null);
  });

  if (document.getElementById("grid")) {
    currentFilter = location.hash === "#available" ? "available" : "all";
    document.querySelectorAll("[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => setFilter(btn.dataset.filter));
    });
  }

  wireLightbox();

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", () => applyLang(LANG === "en" ? "ar" : "en"));

  applyLang(savedLang() === "ar" ? "ar" : "en");
});

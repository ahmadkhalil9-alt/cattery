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

/* translate a word or a date from the cat list, if we know it.
   Handles "March 2022", "Apr 21 2026" and "June 29 2025". */
function w(value) {
  if (!value) return "";
  if (LANG === "en") return value;
  if (WORDS[value]) return WORDS[value];

  const parts = String(value).trim().split(/\s+/);
  if (parts.length > 1 && WORDS[parts[0]]) {
    return [WORDS[parts[0]]].concat(parts.slice(1)).join(" ");
  }
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
const WHATSAPP_NUMBER = "972586953302";

/* brand marks, drawn inline so there are no extra image files */
const ICON_WA =
  '<svg class="btn__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
  '<path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15' +
  '-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788' +
  '-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298' +
  '.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51' +
  'a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 ' +
  '2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 ' +
  '1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57' +
  '-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 ' +
  '9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 ' +
  '0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0' +
  'C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 ' +
  '0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488"/></svg>';

const ICON_IG =
  '<svg class="btn__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
  '<path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919' +
  '.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919' +
  '-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058' +
  '-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266' +
  '-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 ' +
  '8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 ' +
  '24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014' +
  '-3.667-.072-4.947C23.732 2.699 21.311.273 16.949.073 15.668.014 15.259 0 12 0m0 5.838a6.162 ' +
  '6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845' +
  'a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881"/></svg>';

/* a WhatsApp link that opens with the cat's name already typed */
function waLink(catLabel) {
  const msg = catLabel ? "Hi! I'd like to ask about " + catLabel + "." : "Hi!";
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
}

/* the poster frame for a cat's video — falls back to her first photo */
function posterOf(cat) {
  if (cat.video_poster) return cat.video_poster;
  return photosOf(cat)[0] || "";
}

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

        '<div class="cta-row">' +
          '<a class="btn btn--wa" href="' + esc(waLink(cat.name)) + '" target="_blank" rel="noopener">' +
            ICON_WA + '<span>' + esc(t("cta_ask")) + " " + esc(catName(cat)) + '</span>' +
          '</a>' +
          '<a class="btn btn--ig" href="' + INSTAGRAM + '" target="_blank" rel="noopener">' +
            ICON_IG + '<span>' + esc(t("contact_ig_label")) + '</span>' +
          '</a>' +
        '</div>' +
      '</div>' +

    '</section>' +

    /* video section — appears only if this cat has one */
    (cat.video
      ? '<section class="filmstrip">' +
          '<h2 class="filmstrip__h">' + esc(t("sec_video")) + '</h2>' +
          '<video class="filmstrip__player" controls muted loop playsinline ' +
            'preload="metadata"' + (posterOf(cat) ? ' poster="' + esc(posterOf(cat)) + '"' : "") + '>' +
            '<source src="' + esc(cat.video) + '" type="video/mp4">' +
          '</video>' +
          '<p class="filmstrip__hint mono">' + esc(t("video_hint")) + '</p>' +
        '</section>'
      : "");

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

/* a landscape clip gets a wider frame than a portrait one */
function wireVideo() {
  document.addEventListener("loadedmetadata", e => {
    const v = e.target;
    if (v && v.tagName === "VIDEO" && v.videoWidth > v.videoHeight) {
      v.classList.add("is-wide");
    }
  }, true);
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
  wireVideo();

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", () => applyLang(LANG === "en" ? "ar" : "en"));

  applyLang(savedLang() === "ar" ? "ar" : "en");
});

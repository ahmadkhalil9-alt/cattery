/* ============================================================
   JERUSALEM TOP CATTERY — site logic

   You don't need to edit this file. All the words and all the
   cats live in content.js.
   ============================================================ */

const TONES = ["cobalt", "teal", "red", "gold"];

let LANG = "en";

/* remember the choice, but never break if storage is blocked */
function savedLang() {
  try { return localStorage.getItem("jtc-lang"); } catch (e) { return null; }
}
function saveLang(v) {
  try { localStorage.setItem("jtc-lang", v); } catch (e) { /* ignore */ }
}

/* look up a phrase in the current language */
function t(key) {
  const entry = TEXT[key];
  if (!entry) return "";
  return entry[LANG] || entry.en || "";
}

/* translate a single word from the cat list, if we have it */
function w(value) {
  if (!value) return "";
  if (LANG === "en") return value;
  if (WORDS[value]) return WORDS[value];
  /* dates like "March 2022" — translate the month, keep the year */
  const parts = value.split(" ");
  if (parts.length === 2 && WORDS[parts[0]]) return WORDS[parts[0]] + " " + parts[1];
  return value;
}

function catName(cat) {
  return (LANG === "ar" && cat.name_ar) ? cat.name_ar : cat.name;
}
function catNote(cat) {
  return (LANG === "ar" && cat.note_ar) ? cat.note_ar : (cat.note || "");
}

/* ---------- photos ---------- */

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

/* ---------- cat cards ---------- */

function cardFor(cat, index) {
  const card = document.createElement("article");
  card.className = "card";
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
      '<span class="card__status" data-status="' + cat.status + '">' +
        t("status_" + cat.status) +
      '</span>' +
    '</div>' +
    '<div class="card__body">' +
      '<h2 class="card__name">' + catName(cat) +
        '<span class="card__role">' + t("role_" + cat.role) + '</span>' +
      '</h2>' +
      (tags.length ? '<ul class="card__tags">' + tags.map(x => '<li>' + x + '</li>').join("") + '</ul>' : "") +
      (rows.length ? '<dl class="card__data">' + rows.map(r => '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>').join("") + '</dl>' : "") +
      (note ? '<p class="card__note">' + note + '</p>' : "") +
    '</div>';

  loadPhoto(card.querySelector(".portrait"), cat.photo, cat.name.trim().charAt(0));
  return card;
}

let currentFilter = "all";

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

  if (document.getElementById("grid")) render(currentFilter);
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
    setFilter(currentFilter);
  }

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => applyLang(LANG === "en" ? "ar" : "en"));
  }

  applyLang(savedLang() === "ar" ? "ar" : "en");
});

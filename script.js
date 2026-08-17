/* ============================================================
   JERUSALEM TOP CATTERY

   EDIT YOUR CATS HERE. Everything on the "Our cats" page is
   built from this one list. To add a cat, copy a block from
   { to }, paste it below, and change the values.

   role   — "queen" | "stud" | "kitten" | "retired"
   status — "Available" | "Reserved" | "Breeding" | "Retired"
   photo  — a file inside images/, e.g. "images/luna.jpg"
            If the file isn't there yet, a lettered panel shows
            instead, so nothing breaks.

   Leave any field as "" and that row is simply skipped.

   NOTE: the cats below are placeholders. Send Ahmad's real
   cats over and these get replaced.
   ============================================================ */

const CATS = [
  {
    name: "Luna",
    role: "queen",
    status: "Breeding",
    breed: "Scottish Fold",
    colour: "Blue",
    sex: "Female",
    born: "March 2022",
    sire: "",
    dam: "",
    photo: "images/luna.jpg",
    note: "Our foundation girl. Calm, heavy, and completely in charge of the house."
  },
  {
    name: "Simba",
    role: "stud",
    status: "Breeding",
    breed: "Scottish Straight",
    colour: "Golden tabby",
    sex: "Male",
    born: "July 2021",
    sire: "",
    dam: "",
    photo: "images/simba.jpg",
    note: "Health tested and cleared. Gentle with the kittens, loud about dinner."
  },
  {
    name: "Nala",
    role: "queen",
    status: "Breeding",
    breed: "British Shorthair",
    colour: "Blue",
    sex: "Female",
    born: "January 2023",
    sire: "",
    dam: "",
    photo: "images/nala.jpg",
    note: "The friendliest cat here. Greets every visitor at the door."
  },
  {
    name: "Zaytoun",
    role: "kitten",
    status: "Available",
    breed: "Scottish Fold",
    colour: "Blue",
    sex: "Female",
    born: "May 2026",
    sire: "Simba",
    dam: "Luna",
    photo: "images/zaytoun.jpg",
    note: "Ready for her new home in August. The brave one of the litter."
  },
  {
    name: "Sukkar",
    role: "kitten",
    status: "Available",
    breed: "Scottish Straight",
    colour: "Cream",
    sex: "Male",
    born: "May 2026",
    sire: "Simba",
    dam: "Luna",
    photo: "images/sukkar.jpg",
    note: "Quieter than his sister and a determined lap cat."
  },
  {
    name: "Amber",
    role: "retired",
    status: "Retired",
    breed: "British Shorthair",
    colour: "Lilac",
    sex: "Female",
    born: "February 2018",
    sire: "",
    dam: "",
    photo: "images/amber.jpg",
    note: "Retired from breeding and now fully employed as a cushion."
  }
];

/* ------------------------------------------------------------
   You shouldn't need to change anything below this line.
   ------------------------------------------------------------ */

const ROLE_LABEL = { queen: "Queen", stud: "Stud", kitten: "Kitten", retired: "Retired" };
const TONES = ["cobalt", "teal", "red", "gold"];

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

function cardFor(cat, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.role = cat.role;
  card.dataset.status = cat.status;
  card.dataset.tone = TONES[index % TONES.length];

  const tags = [cat.breed, cat.colour, cat.sex].filter(Boolean);
  const rows = [["Born", cat.born], ["Sire", cat.sire], ["Dam", cat.dam]].filter(r => r[1]);

  card.innerHTML =
    '<div class="card__band"></div>' +
    '<div class="card__photo">' +
      '<div class="portrait"><span class="portrait__mark"></span></div>' +
      '<span class="card__status" data-status="' + cat.status + '">' + cat.status + '</span>' +
    '</div>' +
    '<div class="card__body">' +
      '<h2 class="card__name">' + cat.name +
        '<span class="card__role">' + (ROLE_LABEL[cat.role] || "") + '</span>' +
      '</h2>' +
      (tags.length ? '<ul class="card__tags">' + tags.map(t => '<li>' + t + '</li>').join("") + '</ul>' : "") +
      (rows.length ? '<dl class="card__data">' + rows.map(r => '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>').join("") + '</dl>' : "") +
      (cat.note ? '<p class="card__note">' + cat.note + '</p>' : "") +
    '</div>';

  loadPhoto(card.querySelector(".portrait"), cat.photo, cat.name.trim().charAt(0));
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
  if (count) count.textContent = shown.length + (shown.length === 1 ? " cat" : " cats");

  const empty = document.getElementById("empty");
  if (empty) empty.hidden = shown.length > 0;
}

function setFilter(value) {
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("is-on", chip.dataset.filter === value);
  });
  render(value);
}

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".hero .portrait").forEach(panel => {
    loadPhoto(panel, panel.dataset.photo, null);
  });

  if (document.getElementById("grid")) {
    setFilter(location.hash === "#available" ? "available" : "all");
    document.querySelectorAll("[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => setFilter(btn.dataset.filter));
    });
  }
});

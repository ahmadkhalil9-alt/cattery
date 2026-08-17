/* ============================================================
   Wrenhollow Cattery

   EDIT YOUR CATS HERE. Everything on the catalog page is built
   from this one list. To add a cat, copy a block, change the
   values, done. Fields you can leave as "" if you don't have
   them yet — they'll simply be skipped.

   role   — "queen" | "stud" | "kitten" | "retired"
   status — "Available" | "Reserved" | "Breeding" | "Retired"
   photo  — a file inside the images/ folder, e.g. "images/mabel.jpg"
            If the file is missing, a lettered panel shows instead.
   ============================================================ */

const CATS = [
  {
    name: "Wrenhollow Marchpane",
    role: "queen",
    status: "Breeding",
    breed: "British Shorthair",
    code: "BRI a",
    colour: "Blue",
    sex: "Female",
    born: "March 2021",
    sire: "Ashbourne Tobias",
    dam: "Wrenhollow Quince",
    photo: "images/marchpane.jpg",
    note: "Our foundation queen's daughter. Enormously calm, entirely in charge."
  },
  {
    name: "Wrenhollow Barnaby",
    role: "stud",
    status: "Breeding",
    breed: "British Shorthair",
    code: "BRI ns 22",
    colour: "Black silver tabby",
    sex: "Male",
    born: "July 2020",
    sire: "Kelmscott Aldous",
    dam: "Wrenhollow Pomona",
    photo: "images/barnaby.jpg",
    note: "HCM and PKD clear. Sleeps on the stairs, exclusively."
  },
  {
    name: "Wrenhollow Sorrel",
    role: "kitten",
    status: "Available",
    breed: "British Shorthair",
    code: "BRI a",
    colour: "Blue",
    sex: "Female",
    born: "April 2026",
    sire: "Wrenhollow Barnaby",
    dam: "Wrenhollow Marchpane",
    photo: "images/sorrel.jpg",
    note: "Ready to go home in July. The bold one of the litter."
  },
  {
    name: "Wrenhollow Tamsin",
    role: "kitten",
    status: "Available",
    breed: "British Shorthair",
    code: "BRI ns 22",
    colour: "Black silver tabby",
    sex: "Female",
    born: "April 2026",
    sire: "Wrenhollow Barnaby",
    dam: "Wrenhollow Marchpane",
    photo: "images/tamsin.jpg",
    note: "Quieter than her sister, and a determined lap cat."
  },
  {
    name: "Wrenhollow Rowan",
    role: "kitten",
    status: "Reserved",
    breed: "British Shorthair",
    code: "BRI a",
    colour: "Blue",
    sex: "Male",
    born: "April 2026",
    sire: "Wrenhollow Barnaby",
    dam: "Wrenhollow Marchpane",
    photo: "images/rowan.jpg",
    note: "Going to a home in Bristol at twelve weeks."
  },
  {
    name: "Wrenhollow Quince",
    role: "retired",
    status: "Retired",
    breed: "British Shorthair",
    code: "BRI a",
    colour: "Blue",
    sex: "Female",
    born: "January 2016",
    sire: "Ashbourne Gregory",
    dam: "Fennimore Clementine",
    photo: "images/quince.jpg",
    note: "Four litters, then a permanent position on the radiator."
  }
];

/* ------------------------------------------------------------
   Below here you shouldn't need to change anything.
   ------------------------------------------------------------ */

const ROLE_LABEL = {
  queen: "Queen",
  stud: "Stud",
  kitten: "Kitten",
  retired: "Retired"
};

/* Drop a real photo in, or fall back to the lettered panel. */
function loadPhoto(panel, src, letter) {
  panel.querySelector(".portrait__mark").textContent = letter;
  if (!src) return;
  const img = new Image();
  img.onload = () => {
    panel.style.backgroundImage = `url("${src}")`;
    panel.classList.add("has-photo");
  };
  img.src = src;
}

function cardFor(cat) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.role = cat.role;
  card.dataset.status = cat.status;

  const rows = [
    ["Breed", cat.breed],
    ["Code", cat.code],
    ["Colour", cat.colour],
    ["Sex", cat.sex],
    ["Born", cat.born],
    ["Sire", cat.sire],
    ["Dam", cat.dam]
  ].filter(([, value]) => value);

  card.innerHTML = `
    <div class="card__photo">
      <div class="portrait"><span class="portrait__mark"></span></div>
      <span class="card__status" data-status="${cat.status}">${cat.status}</span>
    </div>
    <div class="card__body">
      <h2 class="card__name">${cat.name}<span>${ROLE_LABEL[cat.role] || ""}</span></h2>
      <dl class="card__data">
        ${rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}
      </dl>
      ${cat.note ? `<p class="card__note">${cat.note}</p>` : ""}
    </div>
  `;

  const words = cat.name.trim().split(/\s+/);
  const letter = words[words.length - 1].charAt(0);
  loadPhoto(card.querySelector(".portrait"), cat.photo, letter);
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
    const card = cardFor(cat);
    card.style.animationDelay = `${Math.min(i * 60, 400)}ms`;
    grid.appendChild(card);
  });

  const count = document.getElementById("count");
  if (count) count.textContent = `${shown.length} ${shown.length === 1 ? "cat" : "cats"}`;

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

  /* homepage hero photo */
  document.querySelectorAll(".hero .portrait").forEach(panel => {
    loadPhoto(panel, panel.dataset.photo, panel.querySelector(".portrait__mark").textContent);
  });

  if (document.getElementById("grid")) {
    const start = location.hash === "#available" ? "available" : "all";
    setFilter(start);

    document.querySelectorAll("[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => setFilter(btn.dataset.filter));
    });
  }
});

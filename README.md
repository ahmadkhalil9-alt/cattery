# Jerusalem Top Cattery

## Upload these to GitHub

```
index.html
cats.html
styles.css
content.js      <- NEW: all your words + all your cats
script.js
images/JTC_Logo.png
```

`content.js` is new, so make sure it goes up — without it the pages will be blank.
Everything else keeps the same filename, so GitHub replaces the old versions.

Don't upload `cattery-preview.html` — that's for viewing only.

## Two languages

There's a button in the header that switches between English and Arabic. In
Arabic the whole page flips to right-to-left and the fonts change to Cairo and
Tajawal. The browser remembers the choice for next visit.

## Editing: only ever touch content.js

It has two parts.

**TEXT** — every word on the site, with an English and an Arabic version:

```js
nav_cats: { en: "Our cats", ar: "قططنا" },
```

Change the words inside the quotes. Keep the quotes and the commas.

**CATS** — your cats. Copy a block from `{` to `}` to add one:

```js
{
  name: "Luna",
  name_ar: "لونا",
  role: "queen",            // queen | stud | kitten | retired
  status: "Breeding",       // Available | Reserved | Breeding | Retired
  breed: "Scottish Fold",
  colour: "Blue",
  sex: "Female",
  born: "March 2022",
  sire: "",
  dam: "",
  photo: "images/luna.jpg",
  note: "Calm, heavy, in charge of the house.",
  note_ar: "هادئة، ممتلئة، ومسيطرة على البيت."
}
```

Every block needs a comma after it except the last one.

There's also a **WORDS** list between the two sections — it holds the Arabic for
breeds, colours, sexes and months. If you use a colour that isn't listed, add it
there. Anything missing just shows in English, so nothing breaks.

## Colours

From your logo, at the top of `styles.css`:

| Variable   | Value     | Source                   |
|------------|-----------|--------------------------|
| `--red`    | `#BF191C` | sampled from the logo    |
| `--gold`   | `#9F8F67` | sampled from the logo    |
| `--cobalt` | `#1B4B8F` | Jerusalem tile blue      |
| `--teal`   | `#17817C` | Jerusalem tile turquoise |
| `--cream`  | `#FBF6EC` | page background          |
| `--sand`   | `#F3EADA` | second background        |

## Photos still needed

Into the `images` folder:

- `hero.jpg` — the big homepage photo
- one per cat, matching the `photo:` line in `content.js`

Portrait shape (about 4:5) crops best. Filenames are case-sensitive. Until a
photo exists, that cat shows a lettered panel instead.

## Still to replace

- The six cats are invented placeholders.
- The Arabic is a first draft — please read it and correct anything, especially
  how the cattery name should be written.

---

# NEW: individual cat pages

Each cat now has her own page at `cat.html?name=zarzoora`. Clicking a card on
the catalog opens it. These are real addresses — you can send one straight to a
buyer or put it in your Instagram bio.

## Upload list

```
index.html
cats.html
cat.html        <- NEW
styles.css
content.js
script.js
images/...
```

`cat.html` is new. Everything else keeps its filename and overwrites the old copy.

## Photos: six per cat

Name them after the cat with a number:

```
images/zarzoora-1.jpg
images/zarzoora-2.jpg
...
images/zarzoora-6.jpg
```

**Photo 1 is the one that appears on the catalog card**, so make it the best
portrait. The rest fill the gallery. Missing files are skipped, so you can
upload them gradually.

Roughly 1200px wide is plenty. Portrait shape works best for photo 1; the
others can be any shape.

## New fields, all optional

Leave any of them as `""` and that section just doesn't appear on the page.
Fill them in for your queens and available kittens; skip them for retired cats.

| Field | What it's for |
|---|---|
| `weight` | just the number, e.g. `"4.2"` — kg is added automatically |
| `reg` | registration number |
| `health` / `health_ar` | what testing has been done |
| `about` / `about_ar` | a paragraph on personality |
| `price` | e.g. `"₪4,500"` — kittens only |
| `ready` | e.g. `"August 2026"` — kittens only |
| `slug` | the web address for the cat. Keep it lowercase, no spaces. |

## Parent links

If a cat's `sire` or `dam` matches the `name` of another cat on the list, that
name turns into a link to their page automatically. Spelling has to match
exactly. Parents who aren't on the list show as plain text — that's fine.

## The gallery

Click a thumbnail to change the main photo. Click the main photo to open it
full screen, then use the arrows, or the arrow keys, or Escape to close.

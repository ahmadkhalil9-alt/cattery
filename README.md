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

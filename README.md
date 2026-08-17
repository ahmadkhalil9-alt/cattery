# Wrenhollow Cattery — starter site

Four files, no build step, no dependencies. Open `index.html` in a browser to see it.

```
index.html     home page
cats.html      the catalog
styles.css     all styling
script.js      your cat list + the catalog logic
images/        put your photos here
```

## Adding and editing cats

Open `script.js`. The list at the top is the whole catalog — add, remove, or
reorder entries there and both the grid and the filters update themselves.

```js
{
  name: "Wrenhollow Sorrel",
  role: "kitten",          // queen | stud | kitten | retired
  status: "Available",     // Available | Reserved | Breeding | Retired
  breed: "British Shorthair",
  code: "BRI a",
  colour: "Blue",
  sex: "Female",
  born: "April 2026",
  sire: "Wrenhollow Barnaby",
  dam: "Wrenhollow Marchpane",
  photo: "images/sorrel.jpg",
  note: "Ready to go home in July."
}
```

Any field left as `""` is skipped rather than showing an empty row.

## Photos

Drop JPEGs into `images/` and point the `photo` field at them. If a file is
missing, the card shows a lettered panel instead, so nothing breaks while
you're still gathering pictures. Portrait-shaped photos (4:5) crop best.

The homepage photo is set on this line in `index.html`:

```html
<div class="portrait" data-photo="images/hero.jpg">
```

## Changing the look

The top of `styles.css` has six colours. Change those and the whole site
follows — nothing else hardcodes a colour.

## Replacing the placeholder text

Search `index.html` for "Wrenhollow" and your real cattery name replaces it in
four places (title, wordmark, footer, contact). The contact details are in the
`#contact` section near the bottom.

## Publishing it

Any static host works. Drag the folder onto [Netlify Drop](https://app.netlify.com/drop)
for the fastest route, or push it to a GitHub repo and turn on GitHub Pages.
Traditional cPanel hosting works too — upload the files to `public_html`.

## One thing to know

The catalog is built by JavaScript, which keeps editing simple but means search
engines see less of it. For a cattery that's usually fine, but if you'd rather
have the cats written directly into `cats.html` as plain HTML, that's an easy
change to make.

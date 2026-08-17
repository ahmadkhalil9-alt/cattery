# Jerusalem Top Cattery

## Upload these to GitHub

Drag all of these into the repo (Add file → Upload files), then commit:

```
index.html
cats.html
styles.css
script.js
images/JTC_Logo.png     <- the logo, already renamed correctly
```

Same filenames as before, so GitHub replaces the old versions automatically.
Nothing needs deleting first.

`cattery-preview.html` is for looking at only — don't upload it.

## Colours

All taken from the logo. Top of `styles.css`:

| Variable   | Value     | Where it came from        |
|------------|-----------|---------------------------|
| `--red`    | `#BF191C` | sampled from the logo     |
| `--gold`   | `#9F8F67` | sampled from the logo     |
| `--cobalt` | `#1B4B8F` | Jerusalem tile blue       |
| `--teal`   | `#17817C` | Jerusalem tile turquoise  |
| `--cream`  | `#FBF6EC` | page background           |
| `--sand`   | `#F3EADA` | second background         |

Change any of them in `styles.css` and the whole site follows.

## Fonts

- **Fraunces** — headings. Warm and a bit characterful, not a plain serif.
- **Yellowtail** — the script accents, chosen to echo the logo's brush lettering.
- **Figtree** — body text.
- **IBM Plex Mono** — small labels only.

## Photos still needed

Upload these into the `images` folder whenever you have them:

- `hero.jpg` — the big homepage photo
- one photo per cat, named to match the `photo:` line in `script.js`

Portrait-shaped photos (about 4:5) crop best. Filenames are case-sensitive —
`Luna.JPG` and `luna.jpg` are different files.

Until a photo exists, that cat shows a lettered panel instead. Nothing breaks.

## The cats are still placeholders

The six cats in `script.js` are made up. Send the real ones and they'll be
replaced.

# Gymming for Olives

A phone-first gym plan and training log, served from this site at
**https://haylia.github.io/gym/**

It is a plain web app: no accounts, no server, no app store. Everything logged
stays in the browser on the phone that logged it, and the Excel export is the
backup.

| File | What it is |
|---|---|
| `index.html` | the whole app — plan, log, progress charts, Excel import/export |
| `manifest.webmanifest` | makes "Add to Home screen" install it with an icon, full screen |
| `sw.js` | offline cache, so it opens with no signal in the gym |
| `icon-*.png`, `apple-touch-icon.png` | app icons |

Nothing on the main site links here, so it is unlisted — but like the rest of the
site it is public to anyone who knows the address.

## On a phone

1. Open https://haylia.github.io/gym/ in Chrome.
2. Menu (⋮) → **Add to Home screen** → **Install**.
3. It gets an icon and opens full screen, with no browser bars and no sign-in.

The first load fetches the fonts and the spreadsheet library and then keeps them,
so after that it opens with no signal.

## Changing it later

Edit `index.html`, commit, and push. The live site updates within a minute or so.
**Bump the `CACHE` name in `sw.js`** (for example `gfo-v2`) whenever `index.html`
changes, or phones keep serving the cached copy.

## The data

- The log lives in each phone's browser storage. Two phones keep two separate logs.
- Clearing site data, or uninstalling the app, deletes the log. Use
  **Data → Export to Excel** now and then and keep the file somewhere safe.
- **Data → Import a file** reads an export back, and also reads the original
  `Gym Plan & Tracker.xlsx` workbook. That is how you move to a new phone.
- Week 1 starts Mon 21 Sep 2026; change the date on the Data tab.

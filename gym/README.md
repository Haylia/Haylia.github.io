# Gymming for Olives

A phone-first gym plan and training log, served from this site at
**https://haylia.github.io/gym/**

It is a plain web app: no accounts, no server, no app store. Everything logged
stays in the browser on the phone that logged it, and the Excel export is the
backup.

| File | What it is |
|---|---|
| **`plan.js`** | **the training plan — the only file you need to edit to change it** |
| `index.html` | the app — screens, logging, progress charts, Excel import/export |
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

## Changing the plan

Edit `plan.js`, commit, push. Both phones pick it up next time they open the app
with a signal — there is no cache version to remember any more, because the app's
own files are fetched fresh when there's a connection and served from the cache
only when there isn't.

`plan.js` has the rules at the top. The short version:

- `key` is an exercise's identity and what your history is filed under. Never
  change or reuse one. `name` is only what's on screen, so rename freely.
- Removing an exercise doesn't delete anything: its history moves to
  "Past exercises" on the Progress screen.
- Swapping one exercise for another means a new `key`, so two different lifts
  never end up on the same chart.
- `tile: true` gives an exercise a best-ever tile on the Progress screen.
- An `"assisted"` exercise counts *down* to zero and gets a progress bar.
- Training days come from `weekday` (1 = Monday). Don't rename the day ids
  (`mon`, `tue`, …) — sessions are filed under those.
- Get something wrong (a missing or duplicate key) and the app says so in a red
  banner rather than silently misfiling anything.

## The data

- The log lives in each phone's browser storage. Two phones keep two separate logs.
- Clearing site data, or uninstalling the app, deletes the log. Use
  **Data → Export to Excel** now and then and keep the file somewhere safe.
- **Data → Import a file** reads an export back, and also reads the original
  `Gym Plan & Tracker.xlsx` workbook. That is how you move to a new phone.
- Week 1 starts Mon 21 Sep 2026; change the date on the Data tab.

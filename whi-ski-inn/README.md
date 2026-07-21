# The Whi-Ski Inn — Website Demo (v6)

A static, multi-page website for The Whi-Ski Inn (Boyne Falls, MI). Plain HTML/CSS/JS — no build step. Lives in the `whi-ski-inn/` folder of this repo and is served via GitHub Pages.

## Files
```
index.html      Home
menu.html       Menu highlights
whiskey.html    Whiskey & bar
about.html      About / reviews
visit.html      Hours & location
styles.css      Shared styles (header, footer, layout, responsive)
site.js         Mobile nav toggle + entrance animation
logo.png        Crest
```
All files sit at one level — CSS/JS references are relative (`styles.css`, `site.js`), so the folder works anywhere it's served.

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server
```
then visit http://localhost:8000

## Live URL (GitHub Pages)
This folder publishes at:
```
https://landon358.github.io/WebDemos/whi-ski-inn/
```
(GitHub Pages serves `whi-ski-inn/index.html` at that folder URL.)

## Embedding on webmi.org/demo
The demo page embeds this site in an `<iframe>`. Point the iframe `src` at the folder URL above:
```html
<iframe src="https://landon358.github.io/WebDemos/whi-ski-inn/"
        title="The Whi-Ski Inn demo" loading="lazy"></iframe>
```
> Previous src was `https://landon358.github.io/WebDemos/whi-ski-inn.html` (the old single-page demo). Update it to the folder URL (trailing slash) so the new multi-page version loads.

## Notes
- Navigation uses normal links between pages — works with no JavaScript.
- The header collapses to a hamburger menu below 820px.
- Food/bar photos are Pexels placeholders; swap for real photography when ready.

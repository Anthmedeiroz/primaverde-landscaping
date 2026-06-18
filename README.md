# Primaverde Landscaping — Website

The marketing website for Primaverde Landscaping. One static page, no build step.

| | |
|---|---|
| **Live site** | https://primaverdelandscaping.com |
| **GitHub** | https://github.com/Anthmedeiroz/primaverde-landscaping |
| **Hosting** | Vercel (auto-deploys on every push to `main`) |
| **Phone** | (647) 613-6748 |
| **Email** | primaverdelandscapinginc@gmail.com |
| **Instagram** | https://www.instagram.com/primaverde.landscaping/ |
| **Service area** | Greater Toronto Area |

## What's in this folder (the map)

```
index.html            ← THE WHOLE SITE (all sections, styles, scripts in one file)
og-image.png          ← link-preview image shown when the site is shared
PV Logo Light.png     ← logo used in the nav/footer (light, for dark backgrounds)
PV Logo T.png         ← favicon (browser-tab icon)
vercel.json           ← Vercel static config
README.md             ← this file
Web.md                ← design/frontend rules used when building the site

serve.mjs             ← dev tool: runs the site locally
screenshot.mjs        ← dev tool: takes screenshots for previewing
package.json          ← lists the one dev dependency (puppeteer)

brand_assets/
  Brand Guidelines.png   ← brand reference (colors, fonts, logo usage)

node_modules/         ← installed packages (hidden, rebuild with `npm install`)
```

## How changes go live

1. Edit `index.html`
2. `git add -A && git commit -m "what changed"`
3. `git push` → Vercel auto-builds and the live site updates in ~30–60s

## Run it locally

```bash
npm install      # first time only (installs puppeteer for screenshots)
node serve.mjs   # serves at http://localhost:4137
```

## Quote form

The "Get a Quote" form emails submissions to **primaverdelandscapinginc@gmail.com**
via FormSubmit. Subject line: "New quote request — Primaverde Landscaping".

## Sections on the page

Hero · Services (interactive glow cards) · About · Process · Portfolio ·
Reviews (stacked-card testimonial carousel) · Quote form · Footer

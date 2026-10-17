# Anahat Basnet · Portfolio

Personal portfolio built with **React 18** and **Vite**. All content lives in `src/data.js`; styling is in `src/styles.css`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Deploy

**Vercel / Netlify:** import the GitHub repo. Build command `npm run build`, output directory `dist`.

**GitHub Pages:** the Vite `base` is `"./"`, so the `dist` folder works from a repo sub-path.
Push `dist` to a `gh-pages` branch, or use a GitHub Actions workflow that runs `npm ci && npm run build`
and publishes `dist`.

## Editing

- Text, projects, links, experience: `src/data.js`
- Images: `public/images/` (reference them in `data.js` as `images/<file>`)
- Resume: replace `public/Anahat_Basnet_Resume.pdf`
- Colours and type: CSS variables at the top of `src/styles.css`
"# Anahat-Portfolio" 

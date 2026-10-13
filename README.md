# Portfolio · Melissa Fonnegra Zapata

Bilingual portfolio (Spanish at `/`, English at `/en`) built with Next.js 16, React 19, JavaScript ES6+ and SASS with Atomic Design.

Live at https://melissafonnegra.vercel.app

## Local development

The project runs on DDEV:

```bash
ddev start          # https://portfolio.ddev.site
ddev npm install
```

| Command                 | What it does                                             |
| ----------------------- | -------------------------------------------------------- |
| `npm run dev`           | Development server (DDEV starts it automatically)        |
| `npm run build`         | Production build                                         |
| `npm run lint`          | ESLint                                                   |
| `npm run check:content` | Checks that `es` and `en` have the same strings and lists |

## Structure

```
src/
├── app/
│   ├── [lang]/            layout, page, OG images and icons per language
│   ├── global-not-found.jsx
│   └── manifest.js · robots.js · sitemap.js
├── components/
│   ├── atoms/             smallest pieces: Button, Tag, Cursor, StickyNote, PreferenceToggle…
│   ├── molecules/         combinations: ProjectCard, BrandCarousel, SectorFilter, Timeline…
│   ├── organisms/         full sections: Hero, About, Projects, Navbar…
│   └── templates/         shared structure: Section
├── content/               all site copy (es.js, en.js)
├── hooks/                 React hooks (useMediaQuery)
├── lib/                   plain utilities (site, slug, fill, scroll, techIcons)
└── styles/                tokens, palette, mixins and global styles
```

Each component lives in its own folder:

```
components/molecules/ProjectCard/
├── ProjectCard.jsx
├── ProjectCard.module.scss
└── index.js               export { default } from './ProjectCard';
```

and is imported by folder: `import ProjectCard from '@/components/molecules/ProjectCard';`

## Conventions

- **Copy:** no hard-coded text in components. Everything lives in `src/content/es.js` and `src/content/en.js` with the same shape; `npm run check:content` reports anything missing in a language.
- **Code language:** identifiers and comments in English.
- **Styles:** every SCSS module starts with `@use 'tokens' as *;` (plus `@use 'mixins' as *;` when needed). Colors are CSS variables defined in `styles/_palette.scss` for the light, dark and high contrast modes.
- **Preferences:** theme (`data-theme`: light | dark) and contrast (`data-contrast`: normal | more) live on `<html>`. A script in the `<head>` applies the stored choice, or the system preference, before the first paint.
- **Motion:** every animation goes inside the `motion` mixin, so "reduce motion" is respected.
- **Hover:** hover styles use the `hover` mixin, which only applies with a real mouse; on touch screens there are no stuck hover states.
- **Server first:** components are Server Components unless they need state or events (`'use client'`). The mobile carousel is lazy-loaded, so desktop never downloads it.
- **Inspect mode:** every component has `data-component="level/Name"`, which is what the "Inspect" button shows.

## Adding a language

1. Copy `src/content/en.js` to `src/content/<lang>.js` and translate it.
2. Register it in `src/content/index.js` and give it a `path` (for example `/pt`).
3. The language button (`ui.switchLang`) currently links to the other language; with three or more, `LangSwitch` should become a list.
4. Run `npm run check:content`.

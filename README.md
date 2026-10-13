# Portfolio · Melissa Fonnegra Zapata

Portafolio bilingüe (español en `/`, inglés en `/en`) hecho con Next.js 16, React 19, JavaScript ES6+ y SASS con Atomic Design.

Publicado en https://melissafonnegra.vercel.app

## Desarrollo local

El proyecto corre en DDEV:

```bash
ddev start          # https://portfolio.ddev.site
ddev npm install
```

| Comando                 | Qué hace                                                      |
| ----------------------- | ------------------------------------------------------------- |
| `npm run dev`           | Servidor de desarrollo (DDEV ya lo arranca solo)              |
| `npm run build`         | Build de producción                                           |
| `npm run lint`          | ESLint                                                        |
| `npm run check:content` | Verifica que `es` y `en` tengan los mismos textos y listas    |

## Estructura

```
src/
├── app/
│   ├── [lang]/            layout, página, imágenes OG e íconos por idioma
│   ├── global-not-found.jsx
│   ├── manifest.js · robots.js · sitemap.js
├── components/
│   ├── atoms/             piezas mínimas: Button, Tag, Cursor, StickyNote…
│   ├── molecules/         combinaciones: ProjectCard, BrandCarousel, SectorFilter…
│   ├── organisms/         secciones completas: Hero, About, Projects, Navbar…
│   └── templates/         estructura compartida: Section
├── content/               todos los textos del sitio (es.js, en.js)
├── hooks/                 hooks de React (useMediaQuery)
├── lib/                   utilidades sin React (site, slug, fill, techIcons)
└── styles/                tokens, paleta, mixins y estilos globales
```

Cada componente vive en su propia carpeta:

```
components/molecules/ProjectCard/
├── ProjectCard.jsx
├── ProjectCard.module.scss
└── index.js               export { default } from './ProjectCard';
```

y se importa por su carpeta: `import ProjectCard from '@/components/molecules/ProjectCard';`

## Convenciones

- **Textos:** nada de texto suelto en los componentes. Todo va en `src/content/es.js` y `src/content/en.js` con la misma forma; `npm run check:content` avisa si algo falta en un idioma.
- **Estilos:** cada módulo SCSS empieza con `@use 'tokens' as *;` (y `@use 'mixins' as *;` si lo necesita). Los colores son variables CSS definidas en `styles/_palette.scss`, así el modo de alto contraste puede cambiarlas; para reglas extra en ese modo está el mixin `contrast`.
- **Movimiento:** toda animación va dentro del mixin `motion`, para respetar "reducir movimiento".
- **Servidor primero:** los componentes son de servidor salvo que necesiten estado o eventos (`'use client'`). En Proyectos, solo `BrandExplorer` (filtros y carrusel) corre en el navegador.
- **Modo inspección:** cada componente lleva `data-component="nivel/Nombre"`, que es lo que muestra el botón "Inspeccionar".

## Agregar un idioma

1. Copiar `src/content/en.js` a `src/content/<lang>.js` y traducirlo.
2. Registrarlo en `src/content/index.js` y darle su `path` (por ejemplo `/pt`).
3. Hoy el botón de idioma (`ui.switchLang`) lleva al otro idioma; con tres o más, `LangSwitch` debería pasar a ser una lista.
4. Correr `npm run check:content`.

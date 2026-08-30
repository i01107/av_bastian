# Architecture

## Technology

The frontend is intentionally framework-free:

- HTML supplies page structure and accessible controls.
- `style/core.css` contains shared layout, components, responsive breakpoints, and design tokens.
- Vanilla JavaScript owns page-level interaction.
- Tailwind CSS is loaded from a CDN; there is no bundler, package manager, or build pipeline.

## JavaScript modules

| File | Page | Responsibility |
| --- | --- | --- |
| `script/hero-carousel.js` | `index.html` | Advances the five hero slides, updates the slide copy, and supports bullet navigation. |
| `script/featured-slider.js` | `index.html` | Duplicates featured-product cards to make the CSS scrolling loop seamless. |
| `script/product-listing.js` | `listing.html` | Holds the MVP catalogue and filters, then renders the result count, cards, filter chip, and pagination. |

## Change guidance

- Keep shared UI styles in `style/core.css`; use component-prefixed class names to avoid collisions.
- When adding a catalogue category, update its navigation markup, `categories`, `products`, and the icon map in `product-listing.js` together.
- Product data is currently mock data in `product-listing.js`. Moving it to an API or JSON source should keep the rendering and filter-state contract intact.
- Remote brand and hero images are third-party URLs. Replace them with approved, optimized local assets before production deployment.

## Responsive behaviour

The shared stylesheet uses a wide container and mobile-first adaptations. The category menu becomes horizontally scrollable on small screens; brand cards move from four columns to two and then one; product cards reflow to fit the available width. Preserve this behaviour when adding components.

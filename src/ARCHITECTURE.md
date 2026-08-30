# Architecture

## Technology

The frontend is intentionally framework-free:

- HTML supplies page structure and accessible controls.
- `style/core.css` contains shared layout, components, responsive breakpoints, and design tokens.
- Vanilla JavaScript owns page-level interaction.
- Tailwind CSS is loaded from a CDN; there is no bundler, package manager, or build pipeline.

## Page shell

`template.html` is the required base template for every new page. It provides the shared announcement bar, header, category navigation, a container with breadcrumb and empty `<main>` area, and the site footer. It intentionally does not provide page-specific content. New-page work should update the breadcrumb and build only the container part; shared shell markup remains unchanged.

When creating a page from the shell:

- Set a page-appropriate `<title>` and breadcrumb.
- Add the page's content inside the existing `<main>` element.
- Retain the shared `style/core.css` reference and shell markup unless a project-wide change is intended.
- Remove or replace its current `product-listing.js` reference with the script required by the new page. Do not load listing behaviour on unrelated pages.

## JavaScript modules

| File | Page | Responsibility |
| --- | --- | --- |
| `script/hero-carousel.js` | `index.html` | Advances the five hero slides, updates the slide copy, and supports bullet navigation. |
| `script/featured-slider.js` | `index.html` | Duplicates featured-product cards to make the CSS scrolling loop seamless. |
| `script/product-listing.js` | `listing.html` | Holds the MVP catalogue and filters, then renders the result count, cards, filter chip, and pagination. |
| `script/product-gallery.js` | `product1.html`, `product2.html`, `product3.html` | Drives product-image thumbnail selection and the accessible lightbox. |

## Product-detail explorations

The three `product*.html` pages are alternative layouts for the same TOA Z-HX Series Line Array product. They share the template shell, responsive product-gallery pattern, and `product-gallery.js` interaction:

- `product1.html` is a classic specification-led detail page.
- `product2.html` is an editorial, venue-focused presentation.
- `product3.html` is a commerce-oriented configuration and quote flow.

Treat these as parallel design options. Do not change their shared shell or product data unless the decision is intended to apply to all alternatives.

## Change guidance

- Keep shared UI styles in `style/core.css`; use component-prefixed class names to avoid collisions.
- If a shared shell element changes, apply the same markup update to `index.html`, `listing.html`, and `template.html` so subsequent pages inherit the current design.
- When adding a catalogue category, update its navigation markup, `categories`, `products`, and the icon map in `product-listing.js` together.
- Product data is currently mock data in `product-listing.js`. Moving it to an API or JSON source should keep the rendering and filter-state contract intact.
- Remote brand and hero images are third-party URLs. Replace them with approved, optimized local assets before production deployment.

## Responsive behaviour

The shared stylesheet uses a wide container and mobile-first adaptations. The category menu becomes horizontally scrollable on small screens; brand cards move from four columns to two and then one; product cards reflow to fit the available width. Preserve this behaviour when adding components.

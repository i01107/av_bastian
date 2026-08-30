# Audio Bastian frontend

Static frontend prototype for an audio-video reseller. It presents brand highlights and featured products on the home page, plus a client-side searchable and filterable product catalogue.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home page with announcement, header, category navigation, hero carousel, brand showcase, featured products, and footer. |
| `listing.html` | Product catalogue with category, brand, price, rating, sorting, per-page, and pagination controls. |

## Run locally

Open `index.html` in a browser, or serve this directory with any static-file server. No build step or package installation is required. The pages use Tailwind CSS through its CDN and local CSS and JavaScript files.

## Project map

```
src/
├── index.html
├── listing.html
├── style/core.css
└── script/
    ├── featured-slider.js
    ├── hero-carousel.js
    └── product-listing.js
```

Read [AGENTS.md](AGENTS.md) before making implementation changes. See [ARCHITECTURE.md](ARCHITECTURE.md) for integration details and [CONTENT_MODEL.md](CONTENT_MODEL.md) for the catalogue taxonomy.

# Content model

## Brand partners

The storefront currently represents these authorized brands:

- Samsung
- Logitech
- LG
- TOA

## Product categories

Use these exact labels everywhere user-visible category data is matched:

1. `Speaker`
2. `Cam`
3. `Amplifier`
4. `TV & Monitor`
5. `Presentation tools`

The labels are used as filter values in `listing.html` and `script/product-listing.js`; changing one requires updating both the markup and the JavaScript data.

They also form the shared category navigation in `template.html`. A future page created from the template should retain these labels and their `data-category` values unless the catalogue taxonomy changes project-wide.

## Catalogue record shape

The shared catalogue lives in `script/product-data.js`. Each record includes the listing fields plus the stable URL ID and editorial detail content:

```js
{
  id: 'wireless-microphone-system-z-ws422-as',
  name: 'Product name',
  brand: 'Samsung',
  category: 'TV & Monitor',
  badge: 'Professional',
  image: 'https://example.com/product.jpg',
  headline: 'A concise editorial headline.',
  description: 'Practical product overview copy.',
  gallery: [{ src: 'https://example.com/product.jpg', alt: 'Product view' }],
  highlights: ['Product guidance from our team']
}
```

IDs are URL-safe slugs generated from product names and are used in product URLs such as `product.html?id=wireless-microphone-system-z-ws422-as`. Keep IDs unique and stable when product names change. Product-specific specifications, ratings, and customer review counts must only be added when verified; the editorial page currently uses category-level copy where verified details are unavailable.

## Copy tone

Write concise, practical copy that helps customers choose professional AV equipment. Keep product names accurate, use sentence case for descriptions and controls, and avoid unsupported performance claims.

## Shared page-shell copy

`template.html` establishes the reusable site copy for the announcement bar, search placeholder, footer tagline, newsletter form, and shop/company links. New pages should preserve this shared copy and replace only page-specific metadata, breadcrumb labels, and main-content copy. Update the shell and this document together when a shared label or navigation category changes.

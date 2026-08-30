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

## Catalogue record shape

Each listing product uses this MVP record:

```js
{
  name: 'Product name',
  brand: 'Samsung',
  category: 'TV & Monitor',
  price: 24500000,
  rating: 4.9,
  badge: 'Professional'
}
```

Prices are stored as integer Indonesian rupiah values and formatted as IDR in the UI. Listing cards intentionally omit product prices; price is only used for range filtering and sorting. Ratings are numeric values on a five-point scale.

## Copy tone

Write concise, practical copy that helps customers choose professional AV equipment. Keep product names accurate, use sentence case for descriptions and controls, and avoid unsupported performance claims.

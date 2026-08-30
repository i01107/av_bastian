# AI contribution guide

## Scope

Audio Bastian is a responsive, static audio-video storefront. It has a home page (`index.html`) and a product-listing page (`listing.html`). Keep changes focused on the requested feature and preserve the existing light, professional visual direction.

## Working conventions

- Make page markup changes in the relevant HTML file under `src/`.
- Put shared styling in `style/core.css`; do not add inline styles or embedded `<style>` blocks.
- Use the Tailwind CDN already included in each page when utility classes are helpful, but keep reusable component styling in `style/core.css`.
- Use the existing CSS custom properties and the minor-third type scale for new typography.
- Keep both pages responsive: test desktop, tablet, and narrow mobile layouts.
- Use semantic HTML, accessible labels, keyboard-operable controls, and meaningful image `alt` text.
- Keep JavaScript dependency-free and place page behaviour in `script/`. Load page scripts with `defer`.

## Before handoff

- Confirm relative asset and page links work from `src/`.
- Check the browser console for JavaScript errors.
- Verify interactive filters, pagination, carousel controls, and responsive navigation when the related code changes.
- Update the relevant documentation in this directory when architecture, content, or conventions change.

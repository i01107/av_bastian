const requestedId = new URLSearchParams(window.location.search).get('id');
const product = products.find((item) => item.id === requestedId);

if (!product) {
  document.title = 'Product not found | Audio Bastian';
  document.querySelector('main').innerHTML = '<section class="product-not-found"><h1>Product not found</h1><p>Choose a product from the catalogue to view its details.</p><a class="detail-primary" href="listing.html">Browse products</a></section>';
} else {
  const categoryLabel = product.category === 'Monitor' ? 'TV & Monitor' : product.category;
  const gallery = product.gallery;
  const galleryRoot = document.querySelector('[data-gallery]');
  const mainButton = galleryRoot.querySelector('.gallery-main');
  const mainImage = mainButton.querySelector('[data-gallery-main]');
  const thumbnails = galleryRoot.querySelector('.gallery-thumbnails');

  document.title = `${product.name} | Audio Bastian`;
  document.querySelector('.breadcrumb a[href="listing.html"]').textContent = categoryLabel;
  document.querySelector('.breadcrumb > span:last-child').textContent = product.name;
  document.querySelector('.editorial-intro .detail-eyebrow').textContent = `${product.brand} · ${categoryLabel}`;
  document.querySelector('.editorial-intro h1').textContent = product.headline;
  document.querySelector('.editorial-intro > p').textContent = product.description;
  document.querySelector('.editorial-card h2').textContent = product.name;
  document.querySelector('.editorial-card > p:not(.detail-rating)').textContent = product.description;
  document.querySelector('.editorial-card .product-badge').textContent = product.badge || 'Product';
  document.querySelector('.editorial-card .product-badge').hidden = !product.badge;
  document.querySelector('.editorial-card .detail-primary').href = `mailto:hello@audiobastian.com?subject=${encodeURIComponent(`${product.name} enquiry`)}`;
  document.querySelector('.editorial-card .detail-primary').textContent = 'Talk to a specialist';
  document.querySelector('.editorial-card .detail-rating').hidden = true;

  if (gallery.length) {
    const firstImage = gallery[0];
    mainImage.src = firstImage.src;
    mainImage.alt = firstImage.alt;
    thumbnails.innerHTML = gallery.map((image, index) => `<button class="gallery-thumb${index === 0 ? ' is-active' : ''}" type="button" data-image="${index}"><img src="${image.src}" alt="${image.alt}"></button>`).join('');
  } else {
    mainImage.remove();
    mainButton.setAttribute('aria-label', `${product.name} image unavailable`);
    mainButton.insertAdjacentHTML('beforeend', '<span class="product-image-placeholder">Product image coming soon</span>');
    mainButton.disabled = true;
    thumbnails.remove();
  }

  const featureTitles = ['Product overview', 'Project fit', 'Get guidance'];
  const featureCopy = [product.description, `Category: ${categoryLabel}. Brand: ${product.brand}.`, 'Contact our team for verified specifications, availability, and system compatibility.'];
  document.querySelector('.editorial-specs').innerHTML = product.highlights.map((highlight, index) => `<div><span>${String(index + 1).padStart(2, '0')}</span><h2>${featureTitles[index] || 'Product support'}</h2><p>${index === 0 ? highlight : featureCopy[index] || highlight}</p></div>`).join('');
}

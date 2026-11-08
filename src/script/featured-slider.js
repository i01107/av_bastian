const featuredTrack = document.querySelector('.featured-track');
const FEATURED_COUNT = 8;

function pickRandom(items, count) {
  const pool = [...items];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

function buildFeaturedCard(product) {
  const card = document.createElement('li');
  card.className = 'product-card';

  const imageWrap = document.createElement('div');
  imageWrap.className = 'product-image';
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  image.loading = 'lazy';
  imageWrap.appendChild(image);

  const name = document.createElement('p');
  name.className = 'product-name';
  name.textContent = product.category;

  const link = document.createElement('a');
  link.className = 'product-price-link';
  link.href = `listing.html?category=${encodeURIComponent(product.category)}`;
  link.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-2.5 1.5-2.5 3.5"/><line x1="12" y1="16.5" x2="12" y2="16.5"/></svg><span>Click to get the price</span>';

  card.append(imageWrap, name, link);
  return card;
}

if (featuredTrack && typeof catalogue !== 'undefined') {
  pickRandom(catalogue.filter((product) => product.image), FEATURED_COUNT)
    .forEach((product) => featuredTrack.appendChild(buildFeaturedCard(product)));

  // duplicate the card set once so the scrolling loop appears seamless
  Array.from(featuredTrack.children).forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelector('a').tabIndex = -1;
    featuredTrack.appendChild(clone);
  });
}

const products = [
  { name: 'MX-ST90B Sound Tower', brand: 'Samsung', category: 'Speaker', price: 10999000, rating: 4.8, badge: 'Popular' },
  { name: 'QMC 55-inch UHD Display', brand: 'Samsung', category: 'TV & Monitor', price: 24500000, rating: 4.9, badge: 'Professional' },
  { name: 'Flip Pro WM55B', brand: 'Samsung', category: 'Presentation tools', price: 32900000, rating: 4.7, badge: 'New' },
  { name: 'QB13R Small Signage', brand: 'Samsung', category: 'TV & Monitor', price: 8500000, rating: 4.5, badge: '' },
  { name: 'Rally Bar', brand: 'Logitech', category: 'Cam', price: 56990000, rating: 4.9, badge: 'Popular' },
  { name: 'MeetUp 2', brand: 'Logitech', category: 'Cam', price: 16999000, rating: 4.7, badge: 'New' },
  { name: 'Tap IP Touch Controller', brand: 'Logitech', category: 'Presentation tools', price: 12999000, rating: 4.6, badge: '' },
  { name: '55UL3J-E Digital Signage', brand: 'LG', category: 'TV & Monitor', price: 17900000, rating: 4.6, badge: 'Professional' },
  { name: '86UH5J-H UHD Signage', brand: 'LG', category: 'TV & Monitor', price: 48750000, rating: 4.8, badge: '' },
  { name: 'CreateBoard TR3DK', brand: 'LG', category: 'Presentation tools', price: 52800000, rating: 4.7, badge: 'New' },
  { name: 'Z-HX Series Line Array', brand: 'TOA', category: 'Speaker', price: 38500000, rating: 4.9, badge: 'Professional' },
  { name: 'A-2240 Mixer Power Amplifier', brand: 'TOA', category: 'Amplifier', price: 8700000, rating: 4.6, badge: '' },
  { name: 'DA-250 Digital Amplifier', brand: 'TOA', category: 'Amplifier', price: 14250000, rating: 4.8, badge: 'Popular' }
];

const categories = ['Speaker', 'Cam', 'Amplifier', 'TV & Monitor', 'Presentation tools'];
const state = { category: '', brands: [], ratings: [], minPrice: 0, maxPrice: 60000000, page: 1, perPage: 10, sort: 'featured' };
const formatIdr = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
const categoryFilters = document.getElementById('categoryFilters');
const productGrid = document.getElementById('productGrid');
const emptyResults = document.getElementById('emptyResults');
const activeFilters = document.getElementById('activeFilters');

categoryFilters.innerHTML = categories.map((category) => `<button type="button" class="category-filter" data-category="${category}">${category}</button>`).join('');

function productIcon(category) {
  const icons = {
    Speaker: '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="15" r="3"/>',
    Cam: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M8 6v-2m8 2v-2"/>',
    Amplifier: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="10" r="2.5"/><circle cx="15.5" cy="10" r="2.5"/><line x1="7" y1="17" x2="17" y2="17"/>',
    'TV & Monitor': '<rect x="3" y="4" width="18" height="12" rx="1"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/>',
    'Presentation tools': '<rect x="3" y="3" width="18" height="13" rx="1"/><path d="M7 21h10M12 16v5"/><path d="m10 8 4 2-4 2V8Z" fill="currentColor" stroke="none"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${icons[category]}</svg>`;
}

function ratingStars(rating) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const difference = rating - index;
    const state = difference >= 0.75 ? 'is-full' : difference >= 0.25 ? 'is-half' : 'is-empty';
    return `<span class="rating-star ${state}" aria-hidden="true">★</span>`;
  }).join('');
  return `<span class="rating-stars" aria-label="Rated ${rating} out of 5">${stars}</span>`;
}

function filteredProducts() {
  const visible = products.filter((product) => (!state.category || product.category === state.category) && (!state.brands.length || state.brands.includes(product.brand)) && (!state.ratings.length || state.ratings.some((rating) => product.rating >= Number(rating))) && product.price >= state.minPrice && product.price <= state.maxPrice);
  return visible.sort((a, b) => ({ 'name-asc': a.name.localeCompare(b.name), 'name-desc': b.name.localeCompare(a.name), 'rating-desc': b.rating - a.rating, 'price-asc': a.price - b.price, 'price-desc': b.price - a.price }[state.sort] ?? 0));
}

function render() {
  const visible = filteredProducts();
  const pageCount = Math.max(1, Math.ceil(visible.length / state.perPage));
  state.page = Math.min(state.page, pageCount);
  const pageProducts = visible.slice((state.page - 1) * state.perPage, state.page * state.perPage);
  document.getElementById('productCount').textContent = `${visible.length} product${visible.length === 1 ? '' : 's'} found`;
  document.getElementById('minPriceLabel').textContent = formatIdr(state.minPrice);
  document.getElementById('maxPriceLabel').textContent = formatIdr(state.maxPrice);
  productGrid.innerHTML = pageProducts.map((product) => `<article class="listing-card"><div class="listing-card-visual listing-card-visual--${product.category.replaceAll(' ', '-').replace('&', 'and')}">${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}${productIcon(product.category)}</div><div class="listing-card-content"><p class="product-brand">${product.brand}</p><h3>${product.name}</h3><p class="product-category">${product.category}</p><p class="product-rating">${ratingStars(product.rating)}<span class="rating-value">${product.rating}</span></p><a href="#" class="product-details">View details <span aria-hidden="true">→</span></a></div></article>`).join('');
  emptyResults.hidden = Boolean(visible.length);
  productGrid.hidden = !visible.length;
  activeFilters.innerHTML = state.category ? `<span class="filter-chip">${state.category}<button type="button" id="removeCategory" aria-label="Remove ${state.category} filter">×</button></span>` : '';
  document.querySelectorAll('.category-filter').forEach((button) => button.classList.toggle('is-active', button.dataset.category === state.category));
  document.querySelectorAll('.menu-link').forEach((button) => button.classList.toggle('is-active', button.dataset.category === state.category));
  document.getElementById('pagination').innerHTML = visible.length > state.perPage ? `<button type="button" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}>Previous</button>${Array.from({ length: pageCount }, (_, index) => `<button type="button" data-page="${index + 1}" class="${state.page === index + 1 ? 'is-current' : ''}" aria-label="Page ${index + 1}" ${state.page === index + 1 ? 'aria-current="page"' : ''}>${index + 1}</button>`).join('')}<button type="button" data-page="${state.page + 1}" ${state.page === pageCount ? 'disabled' : ''}>Next</button>` : '';
}

function chooseCategory(category) { state.category = state.category === category ? '' : category; state.page = 1; render(); }
document.querySelectorAll('[data-category]').forEach((button) => button.addEventListener('click', () => chooseCategory(button.dataset.category)));
document.querySelectorAll('input[name="brand"]').forEach((input) => input.addEventListener('change', () => { state.brands = [...document.querySelectorAll('input[name="brand"]:checked')].map((item) => item.value); state.page = 1; render(); }));
document.querySelectorAll('input[name="rating"]').forEach((input) => input.addEventListener('change', () => { state.ratings = [...document.querySelectorAll('input[name="rating"]:checked')].map((item) => item.value); state.page = 1; render(); }));
document.getElementById('minPrice').addEventListener('input', (event) => { state.minPrice = Math.min(Number(event.target.value), state.maxPrice); event.target.value = state.minPrice; state.page = 1; render(); });
document.getElementById('maxPrice').addEventListener('input', (event) => { state.maxPrice = Math.max(Number(event.target.value), state.minPrice); event.target.value = state.maxPrice; state.page = 1; render(); });
document.getElementById('perPage').addEventListener('change', (event) => { state.perPage = Number(event.target.value); state.page = 1; render(); });
document.getElementById('sortBy').addEventListener('change', (event) => { state.sort = event.target.value; render(); });
document.getElementById('pagination').addEventListener('click', (event) => { const page = event.target.dataset.page; if (page && Number(page) > 0) { state.page = Number(page); render(); } });
activeFilters.addEventListener('click', (event) => { if (event.target.id === 'removeCategory') chooseCategory(state.category); });
document.getElementById('clearFilters').addEventListener('click', () => { Object.assign(state, { category: '', brands: [], ratings: [], minPrice: 0, maxPrice: 60000000, page: 1 }); document.querySelectorAll('.product-filters input').forEach((input) => { input.checked = false; }); document.getElementById('minPrice').value = 0; document.getElementById('maxPrice').value = 60000000; render(); });

render();

const products = [
  { name: 'Wireless Microphone System Z-WS422-AS', brand: 'TOA', category: 'Microphone', badge: 'Professional', image: 'https://toa.co.id/document/18398-z-ws422-as_thumbnail-thumbnail.jpg' },
  { name: 'Chime Microphone ZM-380C-AS', brand: 'TOA', category: 'Microphone', badge: '', image: 'https://toa.co.id/document/5548-ec-380-chime-microphone-thumbnail.jpg' },
  { name: 'Wireless Microphone System Z-WS430-AS', brand: 'TOA', category: 'Microphone', badge: '', image: 'https://toa.co.id/document/18408-z-ws430-as_thumbnail-thumbnail.jpg' },
  { name: 'Gooseneck Microphone ZM-380-AS', brand: 'TOA', category: 'Microphone', badge: '', image: 'https://toa.co.id/document/4509-em-380-gooseneck-microphone-thumbnail.jpg' },
  { name: 'Multichannel Power Amplifier DA-1000F-AS', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/18206-da-1000f-as_thumbnail(01)-thumbnail.jpg' },
  { name: 'Wall-Mount Voice Evacuation System Z-FV2148W-AS', brand: 'TOA', category: 'Amplifier', badge: 'Popular', image: 'https://toa.co.id/document/18342-z-fv2148w-as_thumbnail-thumbnail.jpg' },
  { name: 'Digital Mixer Amplifier ZA-3248D-AS 1', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/15094-za-3248d-as-1-new-front--thumbnail.jpg' },
  { name: 'Power Sequencer Z-PD1835-AS 1', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/15134-z-pd1835-as-power-sequencer-thumbnail.jpg' },
  { name: 'Dual-Channel Power Amplifier DA-1250D-AS', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/15878-da-1250d-as_thumbnail-thumbnail.jpg' },
  { name: 'DSP System DP-SP3', brand: 'TOA', category: 'Amplifier', badge: '', image: 'https://toa.co.id/document/en/401-dp-sp3-digital-speaker-processor-thumbnail.jpg' },
  { name: 'Line Array Speaker Z-7B-HX-2M', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/17610-z-7b-hx-2m_thumbnail-thumbnail.jpg' },
  { name: 'Line Array Speaker Z-7B-HX-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/15296-z-7b-hx-as-_front-thumbnail.jpg' },
  { name: 'Speaker System ZS-F05BT-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18676-zs-f05bt-as_thumbnail-thumbnail.jpg' },
  { name: 'Speaker System ZS-F08BT-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18666-zs-f08bt-as_thumbnail-thumbnail.jpg' },
  { name: 'Paging Horn Speaker ZH-625SM', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18820-zh-625sm_new-thumbnail-thumbnail.jpg' },
  { name: 'Subwoofer System Z-120BFB', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/en/570-fb-120b-subwoofer-system-thumbnail.jpg' },
  { name: 'Subwoofer Z-FB152B-AS', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/15350-z-fb152b-as_thumbnail-thumbnail.jpg' },
  { name: 'Coaxial Array Speaker System ZS-HS1500BT', brand: 'TOA', category: 'Speaker', badge: '', image: 'https://toa.co.id/document/18866-zs-hs1500bt_thumbnail-thumbnail.jpg' },
  { name: 'MX-ST90B Sound Tower', brand: 'Samsung', category: 'Speaker', badge: '', image: '' },
  { name: 'QMC 55-inch UHD Display', brand: 'Samsung', category: 'Monitor', badge: 'Professional', image: '' },
  { name: 'QB13R Small Signage', brand: 'Samsung', category: 'Monitor', badge: '', image: '' },
  { name: 'Rally Bar', brand: 'Logitech', category: 'Cam', badge: 'Popular', image: '' },
  { name: 'MeetUp 2', brand: 'Logitech', category: 'Cam', badge: 'New', image: '' },
  { name: '55UL3J-E Digital Signage', brand: 'LG', category: 'Monitor', badge: 'Professional', image: '' },
  { name: '86UH5J-H UHD Signage', brand: 'LG', category: 'Monitor', badge: '', image: '' },
];

const categories = ['Amplifier', 'Microphone', 'Speaker', 'Monitor'];
const state = { category: '', brands: [], page: 1, perPage: 10, sort: 'featured' };
const categoryFilters = document.getElementById('categoryFilters');
const productGrid = document.getElementById('productGrid');
const emptyResults = document.getElementById('emptyResults');
const activeFilters = document.getElementById('activeFilters');

categoryFilters.innerHTML = categories.map((category) => `<button type="button" class="category-filter" data-category="${category}">${category}</button>`).join('');

function productImage(image) {
  // const icons = {
  //   Speaker: '<rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="7" r="2"/><circle cx="12" cy="15" r="3"/>',
  //   Cam: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M8 6v-2m8 2v-2"/>',
  //   Amplifier: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="10" r="2.5"/><circle cx="15.5" cy="10" r="2.5"/><line x1="7" y1="17" x2="17" y2="17"/>',
  //   'Monitor': '<rect x="3" y="4" width="18" height="12" rx="1"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/>',
  //   'Presentation tools': '<rect x="3" y="3" width="18" height="13" rx="1"/><path d="M7 21h10M12 16v5"/><path d="m10 8 4 2-4 2V8Z" fill="currentColor" stroke="none"/>'
  // };
  return `
    <div class="h-48 w-full flex items-center justify-center bg-white rounded">
      <img src="${image}" alt="Product" class="h-full w-full object-contain" />
    </div>`;
}

function filteredProducts() {
  const visible = products.filter((product) => (!state.category || product.category === state.category) && (!state.brands.length || state.brands.includes(product.brand)));
  return visible.sort((a, b) => ({ 'name-asc': a.name.localeCompare(b.name), 'name-desc': b.name.localeCompare(a.name) }[state.sort] ?? 0));
}

function render() {
  const visible = filteredProducts();
  const pageCount = Math.max(1, Math.ceil(visible.length / state.perPage));
  state.page = Math.min(state.page, pageCount);
  const pageProducts = visible.slice((state.page - 1) * state.perPage, state.page * state.perPage);
  document.getElementById('productCount').textContent = `${visible.length} product${visible.length === 1 ? '' : 's'} found`;
  productGrid.innerHTML = pageProducts.map((product) => `<article class="listing-card"><div class="listing-card-visual listing-card-visual--${product.category.replaceAll(' ', '-').replace('&', 'and')}">${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}${productImage(product.image)}</div><div class="listing-card-content"><p class="product-brand">${product.brand}</p><h3>${product.name}</h3><p class="product-category">${product.category}</p><a href="#" class="product-details">View details <span aria-hidden="true">→</span></a></div></article>`).join('');
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
document.getElementById('perPage').addEventListener('change', (event) => { state.perPage = Number(event.target.value); state.page = 1; render(); });
document.getElementById('sortBy').addEventListener('change', (event) => { state.sort = event.target.value; render(); });
document.getElementById('pagination').addEventListener('click', (event) => { const page = event.target.dataset.page; if (page && Number(page) > 0) { state.page = Number(page); render(); } });
activeFilters.addEventListener('click', (event) => { if (event.target.id === 'removeCategory') chooseCategory(state.category); });
document.getElementById('clearFilters').addEventListener('click', () => { Object.assign(state, { category: '', brands: [], page: 1 }); document.querySelectorAll('.product-filters input').forEach((input) => { input.checked = false; }); document.getElementById('minPrice').value = 0; document.getElementById('maxPrice').value = 60000000; render(); });

render();

document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const mainImage = gallery.querySelector('[data-gallery-main]');
  const thumbnails = Array.from(gallery.querySelectorAll('[data-image]'));
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImage = lightbox?.querySelector('[data-lightbox-image]');

  function selectImage(index) {
    const thumbnailImage = thumbnails[index]?.querySelector('img');
    if (!thumbnailImage) return;
    mainImage.src = thumbnailImage.src.replace('w=480', 'w=1400');
    mainImage.alt = thumbnailImage.alt;
    thumbnails.forEach((thumbnail, thumbnailIndex) => thumbnail.classList.toggle('is-active', thumbnailIndex === index));
  }

  thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', () => selectImage(Number(thumbnail.dataset.image))));
  gallery.querySelector('.gallery-main')?.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = mainImage.src;
    lightboxImage.alt = mainImage.alt;
    lightbox.hidden = false;
    document.body.classList.add('has-lightbox');
  });
});

const lightbox = document.querySelector('[data-lightbox]');
function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.classList.remove('has-lightbox');
}
lightbox?.querySelector('[data-lightbox-close]')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox(); });

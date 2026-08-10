const lightbox = document.querySelector('.lightbox-overlay');
const lightboxImage = lightbox.querySelector('img');
const closeButton = lightbox.querySelector('.lightbox-close');

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-detail img').forEach((img) => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

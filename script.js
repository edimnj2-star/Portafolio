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

const galleries = document.querySelectorAll('.project-detail');

galleries.forEach((gallery) => {
  const displayImage = gallery.querySelector('.project-detail-display img');
  const thumbnails = gallery.querySelectorAll('.project-detail-thumb');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach((button) => {
        button.classList.remove('active');
        button.setAttribute('aria-selected', 'false');
      });

      thumb.classList.add('active');
      thumb.setAttribute('aria-selected', 'true');
      displayImage.src = thumb.dataset.src;
      displayImage.alt = thumb.dataset.alt;
    });
  });

  displayImage.addEventListener('click', () => openLightbox(displayImage.src, displayImage.alt));
});

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

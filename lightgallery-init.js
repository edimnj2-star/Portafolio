document.addEventListener('DOMContentLoaded', () => {
  if (typeof lightGallery !== 'undefined') {
    document.querySelectorAll('.project-gallery').forEach((gallery) => {
      lightGallery(gallery, {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        selector: 'a',
      });
    });
  }
});

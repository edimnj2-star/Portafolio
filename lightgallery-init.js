document.addEventListener('DOMContentLoaded', () => {
  if (typeof lightGallery !== 'undefined') {
    const gallery = document.getElementById('animated-thumbnails-gallery');
    if (gallery) {
      lightGallery(gallery, {
        plugins: [lgZoom, lgThumbnail],
        thumbnail: true,
        speed: 500,
        download: false,
        selector: 'a',
      });
    }
  }
});

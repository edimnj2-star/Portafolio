const modals = document.querySelectorAll('.project-modal');
const openers = document.querySelectorAll('.project-cover[href^="#detail-pz-"]');
const closeButtons = document.querySelectorAll('.modal-close');

function openModal(modal) {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openers.forEach((opener) => {
  const targetId = opener.getAttribute('href').substring(1);
  const modal = document.getElementById(targetId);

  if (!modal) return;

  opener.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(modal);
  });
});

closeButtons.forEach((button) => {
  const modal = button.closest('.project-modal');
  button.addEventListener('click', () => closeModal(modal));
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modals.forEach((modal) => {
      if (modal.classList.contains('active')) {
        closeModal(modal);
      }
    });
  }
});

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

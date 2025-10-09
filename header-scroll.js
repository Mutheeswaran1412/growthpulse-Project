// Header hide on scroll
const header = document.querySelector('.header-container');

if (header) {
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      header.style.transform = 'translateX(-50%) translateY(-100%)';
      header.style.opacity = '0';
    } else {
      header.style.transform = 'translateX(-50%) translateY(0)';
      header.style.opacity = '1';
    }
    lastScrollY = currentScrollY;
  });
}
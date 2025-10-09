// Simple header hide on scroll
let lastScrollY = 0;
const header = document.querySelector('.header-container');

if (header) {
  const style = document.createElement('style');
  style.textContent = `
    .header-container {
      transition: opacity 0.4s ease, transform 0.4s ease !important;
    }
    .header-container.header-hidden {
      opacity: 0;
      transform: translateX(-50%) translateY(-100%);
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    
    if (currentScrollY > 100) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    
    lastScrollY = currentScrollY;
  }, { passive: true });
}
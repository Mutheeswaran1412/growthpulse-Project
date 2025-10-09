// Static optimizations - no animations
document.addEventListener('DOMContentLoaded', function() {
  // Lazy load images
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.setAttribute('decoding', 'async');
    if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
      img.setAttribute('width', '80');
      img.setAttribute('height', '80');
    }
  });

  // Preload critical resources
  const criticalImages = [
    'src/images/growthpulse-logo.png',
    'src/images/Home/landingpage background/landingpage-background1.jpg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Make all animated elements visible immediately
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .scroll-animate, .fade-in, .slide-left, .slide-right, .fade-up');
  animatedElements.forEach(el => {
    el.classList.add('visible');
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) translateX(0) scale(1)';
  });
});
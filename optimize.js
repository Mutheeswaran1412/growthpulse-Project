// Critical performance optimizations
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

  // Optimize animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'animated');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '50px' });

  animatedElements.forEach(el => observer.observe(el));
});

// Reduce reflows and repaints
const style = document.createElement('style');
style.textContent = `
  .brands_list { will-change: transform; }
  .hero-slider-image { will-change: transform; }
  .floating-shape-1, .floating-shape-3 { will-change: transform; }
`;
document.head.appendChild(style);
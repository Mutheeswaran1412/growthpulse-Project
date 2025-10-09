// Header scroll animation with 100px threshold
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let ticking = false;
  
  if (!header) return;
  
  function updateHeader() {
    const scrollY = window.scrollY;
    const heroSections = document.querySelectorAll('.home-two-hero, .hero-section, [class*="hero"]');
    let inHeroSection = false;
    
    // Check if we're in any hero section
    heroSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) {
        inHeroSection = true;
      }
    });
    
    // Show/hide header based on scroll position and hero section
    if (scrollY < 100 || inHeroSection) {
      header.classList.remove('header-hidden');
    } else {
      header.classList.add('header-hidden');
    }
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick, { passive: true });
  updateHeader(); // Initial check
}

// Smooth scroll to content
document.addEventListener("DOMContentLoaded", function () {
  // Initialize header scroll behavior
  initHeaderScroll();

  const learnMoreBtn = document.querySelector('a[href="#section-brands"]');

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.getElementById("section-brands");
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  // Add smooth scrolling to all internal anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return; // Skip empty hash links
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
// Smooth scroll to content
document.addEventListener("DOMContentLoaded", function () {
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
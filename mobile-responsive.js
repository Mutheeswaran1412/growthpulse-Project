// Mobile Responsive JavaScript Functions
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    window.toggleMobileMenu = function() {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.querySelector('.mobile-hamburger');
        
        if (mobileMenu && hamburger) {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mobileMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    };
    
    // Close Mobile Menu
    window.closeMobileMenu = function() {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.querySelector('.mobile-hamburger');
        
        if (mobileMenu && hamburger) {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    };
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.querySelector('.mobile-hamburger');
        
        if (mobileMenu && hamburger && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
                closeMobileMenu();
            }
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Header hide/show on scroll
    const header = document.querySelector('.header-container');
    if (header) {
        let lastScrollY = 0;
        let ticking = false;
        
        function updateHeader() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.transform = 'translateX(-50%) translateY(-100%)';
                header.style.opacity = '0';
            } else {
                header.style.transform = 'translateX(-50%) translateY(0)';
                header.style.opacity = '1';
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
    
    // Responsive image loading
    function handleResponsiveImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.style.maxWidth) {
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
            }
        });
    }
    
    // Responsive video handling
    function handleResponsiveVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (!video.style.maxWidth) {
                video.style.maxWidth = '100%';
                video.style.height = 'auto';
            }
        });
    }
    
    // Responsive iframe handling
    function handleResponsiveIframes() {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            if (!iframe.style.maxWidth) {
                iframe.style.maxWidth = '100%';
                iframe.style.height = 'auto';
            }
        });
    }
    
    // Touch-friendly interactions for mobile
    function addTouchSupport() {
        const touchElements = document.querySelectorAll('.service-card, .product-item, .industry_card_new, .brands_grid-item');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
    
    // Viewport height fix for mobile browsers
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Orientation change handler
    function handleOrientationChange() {
        setTimeout(() => {
            setViewportHeight();
            handleResponsiveImages();
            handleResponsiveVideos();
            handleResponsiveIframes();
        }, 100);
    }
    
    // Initialize responsive features
    function initResponsive() {
        setViewportHeight();
        handleResponsiveImages();
        handleResponsiveVideos();
        handleResponsiveIframes();
        addTouchSupport();
        
        // Make all animation elements visible immediately
        const animateElements = document.querySelectorAll(
            '.animate-on-scroll, .scroll-animate, .fade-in, .slide-left, .slide-right, .fade-up'
        );
        animateElements.forEach(el => {
            el.classList.add('visible');
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) translateX(0) scale(1)';
            el.style.visibility = 'visible';
        });
    }
    
    // Event listeners
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Initialize on load
    initResponsive();
    
    // FAQ Toggle Function (if FAQ exists)
    window.toggleFAQ = function(element) {
        const answer = element.nextElementSibling;
        const isActive = answer && answer.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq_answer.active, .faq-answer.active').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.faq_question_new.active, .faq-question.active').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (answer && !isActive) {
            answer.classList.add('active');
            element.classList.add('active');
        }
    };
    
    // Service selection for contact forms
    const serviceCheckboxes = document.querySelectorAll('input[name="services"]');
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const servicesError = document.getElementById('services-error');
            if (servicesError) {
                servicesError.style.display = 'none';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Utility function to check if device is mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Utility function to check if device is tablet
function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
}

// Utility function to check if device is desktop
function isDesktop() {
    return window.innerWidth > 1024;
}
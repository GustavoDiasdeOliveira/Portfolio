/* =========================================
   Dribbble/Behance Level Portfolio JS
   By Antigravity for Gustavo Dias
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* --- CUSTOM CURSOR --- */
    const cursor = document.querySelector('.custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .service-card, .project-image-cont');

    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    }

    /* --- THEME TOGGLE (DARK/LIGHT MODE) --- */
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    
    // Check local storage for preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            themeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });

    /* --- STICKY HEADER & ACTIVE LINKS --- */
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        // Sticky Header effect
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Active Link update on scroll
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* --- MOBILE MENU --- */
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    /* --- RESUME TABS LOGIC --- */
    const resumeBtns = document.querySelectorAll('.resume-btn.custom-tab');
    const resumeDetails = document.querySelectorAll('.resume-detail');

    resumeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons and details
            resumeBtns.forEach(b => b.classList.remove('active'));
            resumeDetails.forEach(d => d.classList.remove('active'));

            // Add active to clicked button and target detail
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    /* --- PORTFOLIO SLIDER --- */
    const slides = document.querySelectorAll('.project-slide');
    const nextBtn = document.getElementById('next-project');
    const prevBtn = document.getElementById('prev-project');
    let currentSlide = 0;

    if (slides.length > 0 && nextBtn && prevBtn) {
        const updateSlider = () => {
            slides.forEach((slide, index) => {
                if(index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        };

        nextBtn.addEventListener('click', () => {
            currentSlide++;
            if(currentSlide >= slides.length) currentSlide = 0; // Loop back
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide--;
            if(currentSlide < 0) currentSlide = slides.length - 1; // Loop end
            updateSlider();
        });

        /* --- PROJECT INFO TOGGLE (MOBILE) --- */
        const infoToggles = document.querySelectorAll('.info-toggle');
        infoToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const slide = toggle.closest('.project-slide');
                slide.classList.toggle('show-details');
            });
        });

        /* --- SWIPE SUPPORT / SNAP SYNC --- */
        let touchStartX = 0;
        let touchEndX = 0;
        const sliderContainer = document.querySelector('.portfolio-showcase');

        if (sliderContainer) {
            // Habilitando swipe para todas as telas para garantir suporte touch
            sliderContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, {passive: true});

            sliderContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, {passive: true});

            const handleSwipe = () => {
                const swipeDistance = touchEndX - touchStartX;
                const threshold = 50; // pixels

                if (swipeDistance < -threshold) {
                    // Swipe Left -> Next Slide
                    currentSlide++;
                    if(currentSlide >= slides.length) currentSlide = 0;
                    updateSlider();
                } else if (swipeDistance > threshold) {
                    // Swipe Right -> Prev Slide
                    currentSlide--;
                    if(currentSlide < 0) currentSlide = slides.length - 1;
                    updateSlider();
                }
            };
        }
    }

    /* --- SCROLL ANIMATIONS (Intersection Observer) --- */
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    /* --- BACK TO TOP BUTTON --- */
    const backToTopBtn = document.getElementById('back-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.pointerEvents = 'auto';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.pointerEvents = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Initial state
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
        backToTopBtn.style.transition = 'opacity 0.3s ease';
    }
});

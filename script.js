/**
 * @file Main script for The Techno Builders website.
 * @description Handles sliders, scroll animations, theme toggling, mobile navigation, and a dynamic typewriter effect.
 */

document.addEventListener('DOMContentLoaded', () => {

    /**
     * ----------------------------------------------------------------
     * SETUP SLIDERS
     * ----------------------------------------------------------------
     * Initializes all Swiper.js sliders on the page.
     */
    const setupSliders = () => {
        // 1. Hero Slider Initialization
        const heroSlider = new Swiper('.hero-slider', {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // 2. Video Slider Initialization
        const videoSlider = new Swiper('.video-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '#blazing-update .swiper-button-next',
                prevEl: '#blazing-update .swiper-button-prev',
            },
            on: {
                slideChange: function () {
                    const videos = document.querySelectorAll('.video-slider video');
                    videos.forEach(video => {
                        video.pause();
                    });
                },
            },
        });
    };

    /**
     * ----------------------------------------------------------------
     * UTILITY FUNCTION: Throttle
     * ----------------------------------------------------------------
     */
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    /**
     * ----------------------------------------------------------------
     * SETUP MOBILE NAVIGATION
     * ----------------------------------------------------------------
     */
    const setupMobileMenu = () => {
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.navbar nav');
        if (!navToggle || !nav) return;

        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-visible');
            const isExpanded = nav.classList.contains('nav-visible');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    };

    /**
     * ----------------------------------------------------------------
     * SETUP: THEME TOGGLE
     * ----------------------------------------------------------------
     */
    const setupThemeToggle = () => {
        const themeToggleBtn = document.getElementById('darkModeToggle');
        if (!themeToggleBtn) return;

        const applyTheme = (theme) => {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            themeToggleBtn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
            localStorage.setItem('theme', theme);
        };

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(currentTheme);
        });

        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
    };

    /**
     * ----------------------------------------------------------------
     * SETUP: SCROLL-BASED EFFECTS
     * ----------------------------------------------------------------
     */
    const setupScrollEffects = () => {
        const reveals = document.querySelectorAll('.reveal');
        const scrollBtn = document.querySelector('.scroll-top');
        if (!scrollBtn) return;

        const revealOptions = {
            threshold: 0.15,
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        reveals.forEach(el => {
            revealObserver.observe(el);
        });

        const handleScrollButton = () => {
            scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        };

        window.addEventListener('scroll', throttle(handleScrollButton, 200));
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        handleScrollButton();
    };

    /**
     * ----------------------------------------------------------------
     * SETUP: TYPEWRITER EFFECT
     * ----------------------------------------------------------------
     */
    const setupTypewriter = () => {
        const target = document.querySelector('.typewriter-text');
        if (!target) return;

        const phrases = [
            "The Techno-Builders",
            "Responsible Journalism",
            "Making a Difference Beyond Words."
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        
        const type = () => {
            if (charIndex < phrases[phraseIndex].length) {
                target.textContent += phrases[phraseIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 80);
            } else {
                setTimeout(erase, 2500);
            }
        };
        
        const erase = () => {
            if (charIndex > 0) {
                target.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 40);
            } else {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            }
        };

        type();
    };

    /**
     * ----------------------------------------------------------------
     * INITIALIZE ALL MODULES
     * ----------------------------------------------------------------
     */
    setupSliders();
    setupMobileMenu();
    setupThemeToggle();
    setupScrollEffects();
    setupTypewriter();
});
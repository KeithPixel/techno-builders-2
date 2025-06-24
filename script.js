document.addEventListener('DOMContentLoaded', () => {

    /**
     * SETUP: MOBILE NAVIGATION (HAMBURGER MENU)
     */
    const setupMobileMenu = () => {
        const navToggle = document.querySelector('.nav-toggle');
        const mainNav = document.querySelector('.main-nav');
        const dropdownBtns = document.querySelectorAll('.main-nav .dropbtn');

        if (!navToggle || !mainNav) return;

        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-visible');
            const isVisible = mainNav.classList.contains('nav-visible');
            navToggle.setAttribute('aria-expanded', isVisible);
        });

        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (window.innerWidth <= 950) {
                    e.preventDefault();
                    btn.classList.toggle('active');
                }
            });
        });
    };

    /**
     * SETUP: SWIPER SLIDERS
     */
    const setupSliders = () => {
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library is not loaded. Sliders will not work.');
            return;
        }

        const heroSliderEl = document.querySelector('.hero-slider');
        if (heroSliderEl) {
            new Swiper(heroSliderEl, {
                loop: true,
                effect: 'fade',
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.hero-slider .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.hero-slider .swiper-button-next',
                    prevEl: '.hero-slider .swiper-button-prev',
                },
            });
        }

        const videoSliderEl = document.querySelector('.video-slider');
        if (videoSliderEl) {
            new Swiper(videoSliderEl, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                navigation: {
                    nextEl: '#blazing-update .swiper-button-next',
                    prevEl: '#blazing-update .swiper-button-prev',
                },
                on: {
                    slideChange: function () {
                        document.querySelectorAll('.video-slider video').forEach(video => {
                            video.pause();
                        });
                    },
                },
            });
        }
    };

    /**
     * UTILITY FUNCTION: Throttle
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
     * SETUP: THEME TOGGLE
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
     * SETUP: SCROLL-BASED EFFECTS
     */
    const setupScrollEffects = () => {
        const reveals = document.querySelectorAll('.reveal');
        const scrollBtn = document.querySelector('.scroll-top');
        
        if (reveals.length > 0) {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.01 });

            reveals.forEach(el => {
                revealObserver.observe(el);
            });
        }

        if (scrollBtn) {
            const handleScrollButton = () => {
                if (window.scrollY > 400) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
            };
            window.addEventListener('scroll', throttle(handleScrollButton, 200));
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            handleScrollButton();
        }
    };

    /**
     * SETUP: TYPEWRITER EFFECT
     */
    const setupTypewriter = () => {
        const target = document.querySelector('.typewriter-text');
        if (!target) return;
        const phrases = ["The Techno-Builders", "Responsible Journalism", "Making Difference Beyond Words."];
        let phraseIndex = 0, charIndex = 0;
        const type = () => {
            if (charIndex < phrases[phraseIndex].length) {
                target.textContent += phrases[phraseIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 80);
            } else { setTimeout(erase, 2500); }
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
     * SETUP: LAST UPDATED DATE & TIME
     */
    const setupLastUpdated = () => {
        const lastUpdatedElement = document.getElementById('last-updated-placeholder');
        if (lastUpdatedElement) {
            const lastModified = new Date(document.lastModified);
            
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

            const formattedDate = lastModified.toLocaleDateString('en-US', dateOptions);
            const formattedTime = lastModified.toLocaleTimeString('en-US', timeOptions);

            lastUpdatedElement.textContent = `${formattedDate} at ${formattedTime}`;
        }
    };

    /**
     * INITIALIZE ALL MODULES
     */
    try { setupMobileMenu(); } catch (e) { console.error("Error in setupMobileMenu:", e); }
    try { setupSliders(); } catch (e) { console.error("Error in setupSliders:", e); }
    try { setupThemeToggle(); } catch (e) { console.error("Error in setupThemeToggle:", e); }
    try { setupScrollEffects(); } catch (e) { console.error("Error in setupScrollEffects:", e); }
    try { setupTypewriter(); } catch (e) { console.error("Error in setupTypewriter:", e); }
    try { setupLastUpdated(); } catch (e) { console.error("Error in setupLastUpdated:", e); }
});
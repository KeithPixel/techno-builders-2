/**
 * Main Application Module
 * Encapsulates all website functionality to keep the global scope clean.
 */
const App = {
    // --- CONFIGURATION & DATA ---
    config: {
        mediaQuery: '(max-width: 950px)',
        scrollThreshold: 400,
        throttleLimit: 200,
        typewriter: {
            phrases: ["The Techno-Builders", "Responsible Journalism", "Making Difference Beyond Words."],
            typeSpeed: 80, eraseSpeed: 40, pauseDuration: 2500
        }
    },
    
    // ⭐️ edit lang here for staff
    staffData: {
        editorial: [
            { group: 'Executives', name: 'Josephine De Guzman', title: 'Editor-in-Chief', img1: 'editorial/DEGUZMAN1.jpg', img2: 'editorial/DEGUZMAN2.jpg' },
            { name: 'Jherric Jade A. Calbaza', title: 'Associate Editor', img1: 'editorial/CALBAZA1.JPG', img2: 'editorial/CALBAZA2.JPG' },
            { name: 'Jonh Kenneth Ligue', title: 'Managing Editor', img1: 'editorial/LIGUE1.jpg', img2: 'editorial/LIGUE2.JPG' },
            { group: 'Section Editors', name: 'Angel Line E. Estepa', title: 'Literary Editor', img1: 'editorial/ESTEPA1.jpg', img2: 'editorial/ANGEL2.JPG' },
            
            { name: 'Jenny V. Orfrecio', title: 'Feature Editor', img1: 'editorial/JENNY1.jpg', img2: 'editorial/JENNY2.JPG' },
            { group: 'Staff Writers', name: 'Jeo Denise L. Labiano', title: 'Staff Writer', img1: 'editorial/JEO1.jpg', img2: 'editorial/JEO1.JPG' },
            
            { group: 'Photojournalists & Photo Editors', name: 'Luijie D. Lopez', title: 'Chief Photojournalist', img1: 'editorial/LOPEZ1.jpg', img2: 'editorial/LOPEZ2.JPG' },
            { name: 'Jester T. Dano', title: 'Senior Photojournalist', img1: 'editorial/DANO (1).jpg', img2: 'editorial/DANO (1).jpg' },
            { name: 'Jazmine Gwyne M. Elleombe', title: 'Senior Photojournalist', img1: 'editorial/ELLEOMBE1.jpg', img2: 'editorial/ELLEOMBE2.JPG' },
           
            { group: 'Videographers & Video Editors', name: 'Morven O. Jubahib', title: 'Senior Videographer/Video Editor', img1: 'editorial/MORVEN.jpg', img2: 'editorial/MORVEN.JPG' },
            { name: 'Xriz Julian Cervancia ', title: 'Junior Videographer/Video Editor', img1: 'editorial/CRIZ1.jpg', img2: 'editorial/CRIZ1.jpg' },
            { group: 'Cartoonists', name: 'Laurence B. Ebarola', title: 'Senior Cartoonist', img1: 'editorial/EBAROLA1.jpg', img2: 'editorial/EBAROLA2.JPG' },
            { name: 'Reynold J. Absalon', title: 'Junior Cartoonist', img1: 'editorial/ABSALON1.jpg', img2: 'editorial/ABSALON2.JPG' },
            { group: 'Graphic Designers', name: 'Earl Jensen Keith C. Jamon', title: 'Chief Graphic Designer', img1: 'editorial/EARL1.jpg', img2: 'editorial/EARL2.JPG' },
            { name: 'Eddie Boy P. Garcia', title: 'Junior Graphic Designer', img1: 'editorial/EDIBOY1.jpg', img2: 'editorial/EDIBOY2.JPG' },
            { name: 'Neo Manuel S. Calopez', title: 'Junior Graphic Designer', img1: 'editorial/CALOPEZ1.jpg', img2: 'editorial/NEO2.JPG' }
        ],
        gear: [
            { name: 'Kenneth Jonh G. Ligue', title: 'Editor-in-Chief', img1: 'the gear/LIGUE1.jpg', img2: 'the gear/LIGUE2.JPG' },
            { name: 'Josephine De Guzman', title: 'Associate Editor', img1: 'the gear/DEGUZMAN1.jpg', img2: 'the gear/DEGUZMAN2.JPG' },
            { name: 'Jherric Jade A. Calbaza', title: 'Managing Editor', img1: 'the gear/CALBAZA1.JPG', img2: 'the gear/CALBAZA2.JPG' },
            { name: 'Earl Jensen Keith C. Jamon', title: 'Circulation Editor', img1: 'the gear/EARL1.JPG', img2: 'the gear/EARL2.JPG' },
            { name: 'Jenny V. Orfrecio', title: 'Junior Staff', img1: 'the gear/JENNY1.jpg', img2: 'the gear/JENNY2.JPG' },
            { name: 'Laurence P. Ebarola', title: 'Junior Staff', img1: 'the gear/EBAROLA1.jpg', img2: 'the gear/EBAROLA2.JPG' },
            { name: 'Jazmine Gwyn M. Elleombe', title: 'Junior Staff', img1: 'the gear/ELLEOMBE1.jpg', img2: 'the gear/ELLEOMBE2.JPG' },
            { name: 'Jeo Denise L. Labiano', title: 'Junior Staff', img1: 'the gear/JEO1.jpg', img2: 'the gear/JEO1.JPG' },
            { name: 'Ediboy Boy P. Garcia', title: 'Junior Staff', img1: 'the gear/EDIBOY1.jpg', img2: 'the gear/EDIBOY2.JPG' },
            { name: 'Angel Line E. Estepa', title: 'Junior Staff', img1: 'the gear/ESTEPA1.jpg', img2: 'the gear/ANGEL2.JPG' },
            { name: 'Dr. Rowena V. Sosas', title: 'The Gear Adviser', img1: 'the gear/maam weng 1post.JPG', img2: 'the gear/maam weng 1post.JPG' }
        ]
    },

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMobileMenu();
            this.setupSliders();
            this.setupThemeToggle();
            this.setupScrollEffects();
            this.setupTypewriter();
            this.setupLastUpdated();
            this.renderStaff();
            this.setupModals();
            this.setupAdviserOverlay();
        });
    },

    setupMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const mainNav = document.querySelector('.main-nav');
        if (!navToggle || !mainNav) return;
        const mobileQuery = window.matchMedia(this.config.mediaQuery);
        navToggle.addEventListener('click', () => {
            const isVisible = mainNav.classList.toggle('nav-visible');
            navToggle.setAttribute('aria-expanded', isVisible);
        });
        
        mainNav.querySelectorAll('.dropdown > .dropbtn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (mobileQuery.matches) {
                    e.preventDefault();
                    const dropdownContent = btn.nextElementSibling;
                    const isExpanded = btn.classList.toggle('active');
                    btn.setAttribute('aria-expanded', isExpanded);
                    dropdownContent.style.maxHeight = isExpanded ? dropdownContent.scrollHeight + "px" : null;
                }
            });
        });

        mainNav.querySelectorAll('.has-submenu > a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (mobileQuery.matches) {
                    e.preventDefault();
                    const parentLi = link.parentElement;
                    parentLi.classList.toggle('active');
                    const submenu = link.nextElementSibling;
                    const isExpanded = parentLi.classList.contains('active');
                    submenu.style.maxHeight = isExpanded ? submenu.scrollHeight + "px" : null;
                }
            });
        });
    },

    setupSliders() {
        if (typeof Swiper === 'undefined') return console.error('Swiper library not loaded.');
        if (document.querySelector('.hero-slider')) {
            new Swiper('.hero-slider', {
                loop: true, effect: 'fade',
                autoplay: { delay: 5000, disableOnInteraction: false },
                pagination: { el: '.hero-slider .swiper-pagination', clickable: true },
                navigation: { nextEl: '.hero-slider .swiper-button-next', prevEl: '.hero-slider .swiper-button-prev' },
            });
        }
        if (document.querySelector('.video-slider')) {
            new Swiper('.video-slider', {
                loop: true, slidesPerView: 1, spaceBetween: 30,
                navigation: { nextEl: '#blazing-update .swiper-button-next', prevEl: '#blazing-update .swiper-button-prev' },
                on: { slideChange: () => document.querySelectorAll('.video-slider video').forEach(v => v.pause()) },
            });
        }
    },

    setupThemeToggle() {
        const btn = document.getElementById('darkModeToggle');
        if (!btn) return;
        const applyTheme = (theme) => {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            btn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
            localStorage.setItem('theme', theme);
        };
        btn.addEventListener('click', () => applyTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark'));
        applyTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    },

    setupScrollEffects() {
        const reveals = document.querySelectorAll('.reveal');
        if (reveals.length > 0) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }});
            }, { threshold: 0.1 });
            reveals.forEach(el => observer.observe(el));
        }
        const scrollBtn = document.querySelector('.scroll-top');
        if (scrollBtn) {
            const handleScroll = () => scrollBtn.classList.toggle('visible', window.scrollY > this.config.scrollThreshold);
            window.addEventListener('scroll', this.throttle(handleScroll, this.config.throttleLimit));
            scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }
    },

    async setupTypewriter() {
        const target = document.querySelector('.typewriter-text');
        if (!target) return;
        const { phrases, typeSpeed, eraseSpeed, pauseDuration } = this.config.typewriter;
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        for (let i = 0; ; i = (i + 1) % phrases.length) {
            const phrase = phrases[i];
            for (let j = 0; j < phrase.length; j++) {
                target.textContent += phrase[j];
                await sleep(typeSpeed);
            }
            await sleep(pauseDuration);
            while (target.textContent.length > 0) {
                target.textContent = target.textContent.slice(0, -1);
                await sleep(eraseSpeed);
            }
        }
    },

    setupLastUpdated() {
        const placeholder = document.getElementById('last-updated-placeholder');
        if (placeholder) {
            placeholder.textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit'
            });
        }
    },
    
    renderStaff() {
        const createCard = p => `
            <div class="staff-card" tabindex="0">
                <img loading="lazy" src="${p.img1}" alt="Formal portrait of ${p.name}" class="staff-photo-main" />
                <img loading="lazy" src="${p.img2}" alt="Casual portrait of ${p.name}" class="staff-photo-hover" />
                <div class="staff-card__content">
                    <h3>${p.name}</h3>
                    <p>${p.title}</p>
                </div>
            </div>`;
        const createHeader = t => `<div class="staff-group-header"><h3>${t}</h3></div>`;
        const render = (container, data) => {
            if (!container) return;
            let currentGroup = '';
            container.innerHTML = data.map(p => {
                let html = (p.group && p.group !== currentGroup) ? createHeader(currentGroup = p.group) : '';
                return html + createCard(p);
            }).join('');
        };
        render(document.getElementById('editorial-board-grid'), this.staffData.editorial);
        render(document.getElementById('gear-staff-grid'), this.staffData.gear);
    },
    
    setupModals() {
        const modal = document.getElementById('article-modal');
        if (!modal) return;
        const modalBody = modal.querySelector('.modal-body');
        const openTriggers = document.querySelectorAll('[data-modal-target]');
        const closeTriggers = modal.querySelectorAll('.modal-close, .modal-overlay');
        let lastFocusedElement;
        const openModal = (targetSelector) => {
            const template = document.querySelector(targetSelector);
            if (!template) return console.error(`Modal content not found for: ${targetSelector}`);
            lastFocusedElement = document.activeElement;
            modalBody.innerHTML = '';
            modalBody.appendChild(template.content.cloneNode(true));
            modal.classList.add('active');
            document.body.classList.add('body-no-scroll');
            modal.setAttribute('aria-hidden', 'false');
            modal.querySelector('.modal-close').focus();
        };
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.classList.remove('body-no-scroll');
            modal.setAttribute('aria-hidden', 'true');
            if (lastFocusedElement) lastFocusedElement.focus();
        };
        openTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => openModal(trigger.dataset.modalTarget));
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(trigger.dataset.modalTarget);
                }
            });
        });
        closeTriggers.forEach(t => t.addEventListener('click', closeModal));
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
            if (e.key === 'Tab' && modal.classList.contains('active')) this.trapFocus(modal, e);
        });
    },

    setupAdviserOverlay() {
        const triggerCard = document.getElementById('adviser-card');
        const overlay = document.getElementById('adviser-overlay');
        if (!triggerCard || !overlay) return;

        const content = overlay.querySelector('.adviser-overlay__content');
        const finalPhotoContainer = overlay.querySelector('.adviser-overlay__photo-container');
        const closeTriggers = overlay.querySelectorAll('.adviser-overlay__close, .adviser-overlay__backdrop');
        let photoClone = null;

        const openOverlay = () => {
            const originalImage = triggerCard.querySelector('.staff-photo-main');
            const startRect = originalImage.getBoundingClientRect();

            photoClone = document.createElement('div');
            photoClone.className = 'adviser-photo-clone';
            photoClone.innerHTML = `<img src="${originalImage.src}" alt="${originalImage.alt}">`;
            
            Object.assign(photoClone.style, {
                width: `${startRect.width}px`,
                height: `${startRect.height}px`,
                top: `${startRect.top}px`,
                left: `${startRect.left}px`
            });

            document.body.appendChild(photoClone);
            
            overlay.classList.add('is-visible');
            document.body.classList.add('body-no-scroll');
            overlay.setAttribute('aria-hidden', 'false');

            requestAnimationFrame(() => {
                const finalRect = finalPhotoContainer.getBoundingClientRect();
                Object.assign(photoClone.style, {
                    width: `${finalRect.width}px`,
                    height: `${finalRect.height}px`,
                    top: `${finalRect.top}px`,
                    left: `${finalRect.left}px`,
                    borderRadius: 'var(--radius) 0 0 var(--radius)'
                });
            });

            photoClone.addEventListener('transitionend', () => {
                overlay.classList.add('is-settled');
                if (photoClone) {
                    photoClone.remove();
                    photoClone = null;
                }
            }, { once: true });
        };

        const closeOverlay = () => {
            if (photoClone) {
                photoClone.remove();
                photoClone = null;
            }
            
            const startRect = triggerCard.querySelector('.staff-photo-main').getBoundingClientRect();
            const finalRect = finalPhotoContainer.getBoundingClientRect();

            const cloneForClosing = document.createElement('div');
            cloneForClosing.className = 'adviser-photo-clone';
            cloneForClosing.innerHTML = `<img src="${triggerCard.querySelector('.staff-photo-main').src}" alt="">`;
            Object.assign(cloneForClosing.style, {
                width: `${finalRect.width}px`,
                height: `${finalRect.height}px`,
                top: `${finalRect.top}px`,
                left: `${finalRect.left}px`,
                borderRadius: 'var(--radius) 0 0 var(--radius)'
            });
            document.body.appendChild(cloneForClosing);

            overlay.classList.remove('is-settled');

            requestAnimationFrame(() => {
                Object.assign(cloneForClosing.style, {
                    width: `${startRect.width}px`,
                    height: `${startRect.height}px`,
                    top: `${startRect.top}px`,
                    left: `${startRect.left}px`,
                    borderRadius: 'var(--radius)'
                });
            });

            overlay.classList.remove('is-visible');
            cloneForClosing.addEventListener('transitionend', () => {
                cloneForClosing.remove();
            }, { once: true });

            document.body.classList.remove('body-no-scroll');
            overlay.setAttribute('aria-hidden', 'true');
        };

        triggerCard.addEventListener('click', openOverlay);
        triggerCard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openOverlay();
            }
        });

        closeTriggers.forEach(trigger => trigger.addEventListener('click', closeOverlay));
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
                closeOverlay();
            }
        });
    },

    trapFocus(modal, e) {
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            last.focus(); e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
            first.focus(); e.preventDefault();
        }
    },

    throttle(func, limit) {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

App.init();
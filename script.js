/**
 * Main Application Module
 */
const App = {
    config: {
        mediaQuery: '(max-width: 950px)',
        scrollThreshold: 100,
        throttleLimit: 200,
        typewriter: {
            phrases: ["The Techno-Builders", "Responsible Journalism", "Making Difference Beyond Words."],
            typeSpeed: 80, eraseSpeed: 40, pauseDuration: 2500
        }
    },
    staffData: {
        editorial: [
            { group: 'Executives', name: 'Josephine De Guzman', title: 'Editor-in-Chief', img1: 'editorial/DEGUZMAN1.jpg', img2: 'editorial/DEGUZMAN2.JPG' },
            { name: 'Jherric Jade A. Calbaza', title: 'Associate Editor', img1: 'editorial/CALBAZA1.jpg', img2: 'editorial/CALBAZA2.JPG' },
            { name: 'Jonh Kenneth Ligue', title: 'Managing Editor', img1: 'editorial/LIGUE1.jpg', img2: 'editorial/LIGUE2.JPG' },
            { group: 'Section Editors', name: 'Angel Line E. Estepa', title: 'Literary Editor', img1: 'editorial/ESTEPA1.jpg', img2: 'editorial/ANGEL2.JPG' },
            { name: 'Jenny V. Orfrecio', title: 'Feature Editor', img1: 'editorial/JENNY1.jpg', img2: 'editorial/JENNY2.JPG' },
            { group: 'Staff Writers', name: 'Jeo Denise L. Labiano', title: 'Staff Writer', img1: 'editorial/JEONEW.jpg', img2: 'editorial/JEONEW.jpg' },
            { name: 'Jackeline Valdez Vergara', title: 'Staff Writer', img1: 'editorial/Jackline 1.jpg', img2: 'editorial/Jackline 1.JPG' },
            { group: 'Photojournalists & Photo Editors', name: 'Luijie D. Lopez', title: 'Chief Photojournalist', img1: 'editorial/LOPEZ1.jpg', img2: 'editorial/LOPEZ2.JPG' },
            { name: 'Jester T. Dano', title: 'Senior Photojournalist', img1: 'editorial/DANO (1).jpg', img2: 'editorial/DANO (1).jpg' },
            { name: 'Jazmine Gwyne M. Elleombe', title: 'Senior Photojournalist', img1: 'editorial/ELLEOMBE1.jpg', img2: 'editorial/ELLEOMBE2.JPG' },
            { group: 'Videographers & Video Editors', name: 'Morven O. Jubahib', title: 'Senior Videographer/Video Editor', img1: 'editorial/MORVEN.jpg', img2: 'editorial/MORVEN.jpg' },
            { name: 'Xriz Julian Cervancia ', title: 'Junior Videographer/Video Editor', img1: 'editorial/XRIZNEW.jpg', img2: 'editorial/XRIZNEW.jpg' },
            { name: 'John Roy B. Espina ', title: 'Junior Videographer/Video Editor', img1: 'editorial/ESPINA 1.jpg', img2: 'editorial/ESPINA 1.jpg' },
            { group: 'Cartoonists', name: 'Laurence B. Ebarola', title: 'Senior Cartoonist', img1: 'editorial/EBAROLA1.jpg', img2: 'editorial/EBAROLA2.JPG' },
            { name: 'Reynold J. Absalon', title: 'Junior Cartoonist', img1: 'editorial/ABSALON1.jpg', img2: 'editorial/ABSALON2.JPG' },
            { group: 'Graphic Designers', name: 'Earl Jensen Jamon', title: 'Chief Graphic Designer', img1: 'the gear/EARL1.JPG', img2: 'the gear/EARL2.JPG' },
            { name: 'Eddie Boy P. Garcia', title: 'Senior Graphic Designer', img1: 'editorial/EDIBOY1.jpg', img2: 'editorial/EDIBOY2.JPG' },
            { name: 'Neo Manuel S. Calopez', title: 'Graphic Designer for Digital Media', img1: 'editorial/CALOPEZ1.jpg', img2: 'editorial/NEO2.JPG' },
        ],
        gear: [
            { name: 'Kenneth Jonh G. Ligue', title: 'Editor-in-Chief', img1: 'the gear/LIGUEGEAR.jpg', img2: 'the gear/LIGUEGEAR2.JPG' },
            { name: 'Josephine De Guzman', title: 'Associate Editor', img1: 'the gear/DEGUZMANGEAR.jpg', img2: 'the gear/DEGUZMANGEAR2.JPG' },
            { name: 'Jherric Jade A. Calbaza', title: 'Managing Editor', img1: 'the gear/CALBAZAGEAR.jpg', img2: 'the gear/CALBAZAGEAR2.JPG' },
            { name: 'Earl Jensen Keith Jamon', title: 'Circulation Editor', img1: 'the gear/JAMONGEAR.JPG', img2: 'the gear/JAMONGEAR2.JPG' },
            { name: 'Jenny V. Orfrecio', title: 'Junior Staff', img1: 'the gear/CALOPEZGEAR.jpg', img2: 'the gear/CALOPEZGEAR2.JPG' },
            { name: 'Laurence P. Ebarola', title: 'Junior Staff', img1: 'the gear/EBAROLAGEAR.jpg', img2: 'the gear/EBAROLAGEAR2.JPG' },
            { name: 'Jazmine Gwyn M. Elleombe', title: 'Junior Staff', img1: 'the gear/ELLEOMBEGEAR.jpg', img2: 'the gear/ELLEOMBEGEAR2.JPG' },
            { name: 'Jeo Denise L. Labiano', title: 'Junior Staff', img1: 'the gear/LABIANOGEAR.jpg', img2: 'the gear/LABIANOGEAR2.JPG' },
            { name: 'Ediboy Boy P. Garcia', title: 'Junior Staff', img1: 'the gear/GARCIAGEAR.jpg', img2: 'the gear/GARCIAGEAR2.JPG' },
            { name: 'Angel Line E. Estepa', title: 'Junior Staff', img1: 'the gear/ESTEPAGEAR.jpg', img2: 'the gear/ESTEPAGEAR2.JPG' },
            { name: 'Dr. Rowena V. Sosas', title: 'The Gear Adviser', img1: 'the gear/SOSAS.JPG', img2: 'the gear/maamweng1post.JPG' }
        ]
    },

    photoGridData: [
        { src: 'gallery/1.jpg', title: 'Pasiklaban Event' },
        { src: 'gallery/2.png', title: 'Gawad Parangal' },
        { src: 'gallery/3.png', title: 'University Sportsfest' },
        { src: 'gallery/4.png', title: 'Campus Life' },
        { src: 'gallery/5.jpg', title: 'MASTS Games' },
        { src: 'gallery/6.jpg', title: 'Kaliline Festival' },
        { src: 'gallery/7.jpg', title: 'Faculty Members' },
        { src: 'gallery/8.JPG', title: 'Campus Event' },
        { src: 'gallery/9.JPG', title: 'Student Activities' },
        { src: 'gallery/10.jpg', title: 'Student Feature' },
        { src: 'gallery/11.jpg', title: 'Pasiklaban Event' },
        { src: 'gallery/12.JPG', title: 'Gawad Parangal' },
        { src: 'gallery/13.jpg', title: 'University Sportsfest' },
        { src: 'gallery/14.jpg', title: 'Campus Life' },
        { src: 'gallery/15.jpg', title: 'MASTS Games' }
    ],

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMobileMenu();
            this.setupSliders();
            this.setupThemeToggle();
            this.setupScrollEffects();
            this.setupTypewriter();
            this.setupLastUpdated();
            this.renderStaff();
            this.renderPhotoGallery();
            this.setupGalleryLightbox();
            this.setupArticleOverlay();
            this.setupVideoModals();
            this.setupAdviserOverlay();
            this.setupTeamOverlay();
            this.updateVisitorCount();
        });
    },

    // UI HELPER: Safely lock background scrolling when modals are open
    toggleScrollLock(isOpen) {
        if (isOpen) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }
    },

    updateVisitorCount() {
        const countElement = document.getElementById('visitor-count');
        if (!countElement) return;
        fetch(`https://api.countapi.xyz/hit/technobuilders-usm/technobuilders-official-site`)
            .then(res => res.json()).then(data => countElement.textContent = data.value)
            .catch(() => countElement.textContent = 'N/A');
    },

    renderPhotoGallery() {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;
        grid.innerHTML = this.photoGridData.map((photo, i) => `
            <div class="gallery-item" data-index="${i}" tabindex="0" role="button">
                <img src="${photo.src}" alt="${photo.title}" class="gallery-item__image" loading="lazy">
            </div>
        `).join('');
    },

    setupGalleryLightbox() {
        const lightbox = document.getElementById('gallery-lightbox');
        if (!lightbox) return;
        const closeTrigger = lightbox.querySelector('.gallery-lightbox__close');
        const swiperWrapper = document.getElementById('gallery-swiper-wrapper');
        let gallerySwiper = null;

        const openGallery = (startIndex) => {
            swiperWrapper.innerHTML = this.photoGridData.map(p => `<div class="swiper-slide"><img src="${p.src}" alt=""></div>`).join('');
            lightbox.classList.add('is-visible');
            this.toggleScrollLock(true);
            gallerySwiper = new Swiper('.gallery-swiper', { loop: true, initialSlide: startIndex, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
        };

        const closeGallery = () => {
            lightbox.classList.remove('is-visible');
            this.toggleScrollLock(false);
            if (gallerySwiper) { gallerySwiper.destroy(); gallerySwiper = null; }
            swiperWrapper.innerHTML = '';
        };

        document.getElementById('gallery-grid').addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) openGallery(parseInt(item.dataset.index, 10));
        });
        closeTrigger.addEventListener('click', closeGallery);
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('is-visible')) closeGallery(); });
    },

    setupArticleOverlay() {
        const overlay = document.getElementById('article-overlay');
        if (!overlay) return;
        const contentWrapper = overlay.querySelector('.article-overlay__content-wrapper');
        const closeTrigger = overlay.querySelector('.article-overlay__close');

        const openArticle = (trigger) => {
            const template = document.querySelector(trigger.dataset.articleTarget);
            if (!template) return;
            
            contentWrapper.innerHTML = '';
            const header = document.createElement('header');
            header.className = 'article-header-full';
            header.style.backgroundImage = `url('${trigger.dataset.mainImage}')`;
            
            const clonedContent = template.content.cloneNode(true);
            const bodyContent = clonedContent.querySelector('.article-body-content');
            
            if (bodyContent) {
                const title = bodyContent.querySelector('h2');
                const meta = bodyContent.querySelector('.article-meta');
                if (title) header.appendChild(title);
                if (meta) header.appendChild(meta);
                contentWrapper.appendChild(header);
                contentWrapper.appendChild(bodyContent);
            } else {
                contentWrapper.appendChild(clonedContent);
            }
            
            overlay.classList.add('is-visible');
            overlay.scrollTop = 0;
            this.toggleScrollLock(true);
        };

        const closeArticle = () => {
            overlay.classList.remove('is-visible');
            this.toggleScrollLock(false);
            setTimeout(() => contentWrapper.innerHTML = '', 400); // Wait for fade out
        };

        document.querySelectorAll('[data-article-target]').forEach(t => t.addEventListener('click', () => openArticle(t)));
        closeTrigger.addEventListener('click', closeArticle);
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('is-visible')) closeArticle(); });
    },

    setupVideoModals() {
        const modal = document.getElementById('video-modal');
        if (!modal) return;
        const modalBody = modal.querySelector('.modal-body');
        
        const openModal = (target) => {
            const template = document.querySelector(target);
            if (!template) return;
            modalBody.innerHTML = '';
            modalBody.appendChild(template.content.cloneNode(true));
            modal.classList.add('active');
            this.toggleScrollLock(true);
        };
        
        const closeModal = () => {
            modal.classList.remove('active');
            this.toggleScrollLock(false);
            const video = modal.querySelector('video');
            if (video) { video.pause(); video.currentTime = 0; }
        };

        document.querySelectorAll('.video-card[data-modal-target]').forEach(t => t.addEventListener('click', () => openModal(t.dataset.modalTarget)));
        modal.querySelectorAll('.modal-close, .modal-overlay').forEach(t => t.addEventListener('click', closeModal));
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
    },
    
    setupTeamOverlay() {
        const overlay = document.getElementById('team-overlay');
        if (!overlay) return;
        document.getElementById('open-team-overlay').addEventListener('click', (e) => {
            e.preventDefault(); overlay.classList.add('is-visible'); this.toggleScrollLock(true);
        });
        overlay.querySelector('.team-overlay__close').addEventListener('click', () => {
            overlay.classList.remove('is-visible'); this.toggleScrollLock(false);
        });
        window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('is-visible')) { overlay.classList.remove('is-visible'); this.toggleScrollLock(false); } });
    },

    setupMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const mainNav = document.querySelector('.main-nav');
        if (!navToggle || !mainNav) return;
        navToggle.addEventListener('click', () => {
            const isVisible = mainNav.classList.toggle('nav-visible');
            navToggle.setAttribute('aria-expanded', isVisible);
        });
        mainNav.querySelectorAll('.dropdown > button, .has-submenu > a').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (window.matchMedia(this.config.mediaQuery).matches) {
                    e.preventDefault();
                    const parent = trigger.parentElement;
                    parent.classList.toggle('active');
                    const content = trigger.nextElementSibling;
                    content.style.maxHeight = parent.classList.contains('active') ? content.scrollHeight + "px" : null;
                }
            });
        });
    },

    setupSliders() {
        if (typeof Swiper === 'undefined') return;
        if (document.querySelector('.hero-slider')) {
            new Swiper('.hero-slider', { loop: true, effect: 'fade', autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: '.swiper-pagination', clickable: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } });
        }
        if (document.querySelector('.video-slider')) {
            new Swiper('.video-slider', { loop: true, slidesPerView: 1, spaceBetween: 30, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, on: { slideChange: () => document.querySelectorAll('.video-slider video').forEach(v => v.pause()) } });
        }
    },

    setupThemeToggle() {
        const btn = document.getElementById('darkModeToggle');
        if (!btn) return;
        const icon = btn.querySelector('i');
        const applyTheme = (theme) => {
            document.body.classList.toggle('dark-mode', theme === 'dark');
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            localStorage.setItem('theme', theme);
        };
        btn.addEventListener('click', () => applyTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark'));
        applyTheme(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    },

    setupScrollEffects() {
        const reveals = document.querySelectorAll('.reveal');
        if (reveals.length > 0) {
            const observer = new IntersectionObserver((entries, obs) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }}); }, { threshold: 0.1 });
            reveals.forEach(el => observer.observe(el));
        }
        const scrollBtn = document.querySelector('.scroll-top');
        if (scrollBtn) {
            window.addEventListener('scroll', this.throttle(() => scrollBtn.classList.toggle('visible', window.scrollY > this.config.scrollThreshold), this.config.throttleLimit));
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
            for (let j = 0; j < phrase.length; j++) { target.textContent += phrase[j]; await sleep(typeSpeed); }
            await sleep(pauseDuration);
            while (target.textContent.length > 0) { target.textContent = target.textContent.slice(0, -1); await sleep(eraseSpeed); }
        }
    },

    setupLastUpdated() {
        const placeholder = document.getElementById('last-updated-placeholder');
        if (placeholder) placeholder.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    },
    
    renderStaff() {
        const createCard = p => `
            <div class="bento-card staff-card" tabindex="0">
                <div class="bento-card__image-wrapper">
                    <img loading="lazy" src="${p.img1}" alt="${p.name}" class="staff-photo-main" />
                    <img loading="lazy" src="${p.img2}" alt="${p.name}" class="staff-photo-hover" />
                </div>
                <div class="bento-card__content staff-card__content">
                    <h3>${p.name}</h3><p>${p.title}</p>
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
    
    setupAdviserOverlay() {
        const triggers = document.querySelectorAll('#adviser-card');
        const overlay = document.getElementById('adviser-overlay');
        
        if (triggers.length === 0 || !overlay) return;
        
        triggers.forEach(triggerCard => {
            triggerCard.addEventListener('click', () => {
                overlay.classList.add('is-visible');
                this.toggleScrollLock(true);
            });
            triggerCard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    overlay.classList.add('is-visible');
                    this.toggleScrollLock(true);
                }
            });
        });
        
        overlay.querySelectorAll('.adviser-overlay__close, .adviser-overlay__backdrop').forEach(btn => {
            btn.addEventListener('click', () => {
                overlay.classList.remove('is-visible');
                const teamOverlay = document.getElementById('team-overlay');
                if (!teamOverlay || !teamOverlay.classList.contains('is-visible')) {
                    this.toggleScrollLock(false);
                }
            });
        });
        
        window.addEventListener('keydown', (e) => { 
            if (e.key === 'Escape' && overlay.classList.contains('is-visible')) { 
                overlay.classList.remove('is-visible'); 
                const teamOverlay = document.getElementById('team-overlay');
                if (!teamOverlay || !teamOverlay.classList.contains('is-visible')) {
                    this.toggleScrollLock(false);
                }
            } 
        });
    },

    throttle(func, limit) {
        let inThrottle;
        return (...args) => { if (!inThrottle) { func.apply(this, args); inThrottle = true; setTimeout(() => inThrottle = false, limit); } };
    }
};

App.init();
/**
 * @file Main script for The Techno Builders website.
 * @description Handles scroll animations, theme toggling, and a dynamic typewriter effect.
 */

// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {
  /**
   * ----------------------------------------------------------------
   * UTILITY FUNCTION: Throttle
   * ----------------------------------------------------------------
   * Limits how often a function can be called to improve performance.
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
   * SETUP: THEME TOGGLE
   * ----------------------------------------------------------------
   * Handles switching between light and dark themes and saving the
   * user's preference to localStorage.
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
   * Manages "reveal on scroll" and the "scroll to top" button.
   */
  const setupScrollEffects = () => {
    const reveals = document.querySelectorAll('.reveal');
    const scrollBtn = document.querySelector('.scroll-top');
    if (!scrollBtn) return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        el.classList.toggle('active', revealTop < windowHeight - 100);
      });

      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };

    window.addEventListener('scroll', throttle(handleScroll, 100));
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    handleScroll(); // Initial check on page load
  };

  /**
   * ----------------------------------------------------------------
   * SETUP: TYPEWRITER EFFECT
   * ----------------------------------------------------------------
   * Loops through a series of phrases with a typing and erasing animation.
   */
  const setupTypewriter = () => {
    const target = document.querySelector('.typewriter-text');
    if (!target) return;

    const phrases = [
      "The Techno-Builders",
      "Responsible Journalism",
      "Making Difference Beyond Words."
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

    type(); // Start the effect
  };

  /**
   * ----------------------------------------------------------------
   * INITIALIZE ALL MODULES
   * ----------------------------------------------------------------
   */
  setupThemeToggle();
  setupScrollEffects();
  setupTypewriter();
});
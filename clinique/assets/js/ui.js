/* ════════════════════════════════════════════════════════════
   Sentez-vous bien — UI interactions (mobile nav)
   ════════════════════════════════════════════════════════════ */

function initMobileNav() {
  const burger = document.getElementById('burger');
  const overlay = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');
  if (!burger || !overlay) return;

  const open = () => {
    overlay.setAttribute('data-open', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  };
  const close = () => {
    overlay.setAttribute('data-open', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  };

  burger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);

  overlay.querySelectorAll('[data-mobile-close]').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.getAttribute('data-open') === 'true') close();
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  // Graceful fallback: no IntersectionObserver → show everything
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.setAttribute('data-visible', 'true'));
    return;
  }

  // Respect reduced-motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    targets.forEach((el) => el.setAttribute('data-visible', 'true'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-visible', 'true');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  });

  targets.forEach((el) => observer.observe(el));
}

function init() {
  initMobileNav();
  initScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

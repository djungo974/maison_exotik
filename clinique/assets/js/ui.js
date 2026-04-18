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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileNav);
} else {
  initMobileNav();
}

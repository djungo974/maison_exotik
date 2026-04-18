/* ════════════════════════════════════════════════════════════
   Sentez-vous bien — Calendly integration (popup + inline)
   URL: https://calendly.com/djungo974
   ════════════════════════════════════════════════════════════ */

const CALENDLY_URL = 'https://calendly.com/djungo974';

/* Brand-tinted query params applied to every Calendly URL */
const CALENDLY_PARAMS = {
  background_color: 'fafaf7',
  text_color:       '1f2933',
  primary_color:    '5b7c99',
};

function buildCalendlyUrl(extra = {}) {
  const params = { ...CALENDLY_PARAMS, ...extra };
  const qs = Object.entries(params)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');
  return `${CALENDLY_URL}?${qs}`;
}

function initCalendlyPopup() {
  const buttons = document.querySelectorAll('[data-calendly-popup]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      /* If Calendly didn't load (offline, blocked), let the <a href> fallback work */
      if (!window.Calendly || typeof window.Calendly.initPopupWidget !== 'function') return;
      e.preventDefault();
      window.Calendly.initPopupWidget({ url: buildCalendlyUrl() });
      return false;
    });
  });
}

function initCalendlyInline() {
  const slot = document.getElementById('calendly-inline');
  if (!slot) return;
  if (!window.Calendly || typeof window.Calendly.initInlineWidget !== 'function') return;

  /* Replace the placeholder markup */
  slot.innerHTML = '';
  slot.classList.add('is-loaded');

  window.Calendly.initInlineWidget({
    url: buildCalendlyUrl(),
    parentElement: slot,
    prefill: {},
    utm: {},
  });
}

/* Calendly's widget.js is async — poll briefly until it's on window */
function whenCalendlyReady(callback, remaining = 40) {
  if (window.Calendly) return callback();
  if (remaining <= 0) return;
  setTimeout(() => whenCalendlyReady(callback, remaining - 1), 150);
}

function initBooking() {
  /* Popup handlers can be bound immediately — they check window.Calendly on click */
  initCalendlyPopup();
  /* Inline widget needs Calendly to be ready */
  whenCalendlyReady(initCalendlyInline);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBooking);
} else {
  initBooking();
}

/* ════════════════════════════════════════════════════════════
   Sentez-vous bien — Bilingual i18n system (FR / EN)
   Default language: FR. User choice persisted in localStorage.
   Usage:  <element data-i18n="key">         → innerHTML = translation
           <element data-i18n-attr="attr:key"> → setAttribute(attr, translation)
   ════════════════════════════════════════════════════════════ */

const translations = {
  fr: {
    /* ── Document head ── */
    'doc.title':        'Sentez-vous bien | Cabinet de Kinésithérapie & Bien-être',
    'doc.description':  'Sentez-vous bien — Cabinet de kinésithérapie et bien-être. Expertise, écoute et approche personnalisée pour votre rééducation et votre vitalité.',

    /* ── Navbar ── */
    'nav.home':         'Accueil',
    'nav.about':        'À propos',
    'nav.services':     'Services',
    'nav.pricing':      'Tarifs',
    'nav.contact':      'Contact',
    'nav.book':         'Prendre RDV',
    'nav.menuLabel':    'Menu',

    /* ── Language switcher ── */
    'lang.fr':          'FR',
    'lang.en':          'EN',
    'lang.switchLabel': 'Changer de langue',

    /* ── Hero ── */
    'hero.eyebrow':     'Tamarin · Île Maurice',
    'hero.title':       'Votre bien-être,<br><em>notre expertise</em>',
    'hero.sub':         'Cabinet de kinésithérapie et bien-être. Une approche humaine et sur mesure pour votre rééducation, votre récupération et votre équilibre.',
    'hero.btnBook':     'Réserver ma séance',
    'hero.btnServices': 'Découvrir nos services',
    'hero.imgAlt1':     'Séance de kinésithérapie dans un cabinet lumineux',
    'hero.imgAlt2':     'Intérieur apaisant d\'un cabinet de bien-être',
    'hero.imgAlt3':     'Soins thérapeutiques par un kinésithérapeute',

    /* ── About teaser ── */
    'about.eyebrow':    'Notre cabinet',
    'about.title':      'Une pratique<br><em>bienveillante</em> et rigoureuse',
    'about.body':       'Depuis plusieurs années, notre équipe accompagne chaque patient dans un parcours de soin adapté à ses besoins. Nous alliant écoute clinique et techniques manuelles modernes, nous vous aidons à retrouver mobilité, confort et vitalité.',
    'about.btn':        'En savoir plus sur nous',
    'about.imgAlt':     'Praticien accueillant un patient dans le cabinet',

    /* ── Services preview ── */
    'services.eyebrow':  'Nos prestations',
    'services.title':    'Trois expertises,<br><em>un même objectif</em> : vous',
    'services.s1.title': 'Kinésithérapie',
    'services.s1.body':  'Rééducation post-opératoire, traitement des douleurs chroniques, thérapies manuelles et exercices thérapeutiques ciblés.',
    'services.s2.title': 'Rééducation sportive',
    'services.s2.body':  'Reprise d\'activité après blessure, préparation physique, prévention des récidives et accompagnement de l\'athlète amateur ou confirmé.',
    'services.s3.title': 'Bien-être & massages',
    'services.s3.body':  'Massages thérapeutiques, relaxation profonde et techniques de récupération pour relâcher les tensions et restaurer l\'équilibre corporel.',
    'services.btn':      'Voir tous nos services',

    /* ── Approach ── */
    'approach.eyebrow': 'Notre approche',
    'approach.title':   'Un parcours clair<br>en <em>trois étapes</em>',
    'approach.step1.num':   '01',
    'approach.step1.title': 'Évaluation',
    'approach.step1.body':  'Bilan approfondi de vos besoins, de votre historique et de vos objectifs de soin.',
    'approach.step2.num':   '02',
    'approach.step2.title': 'Plan de traitement',
    'approach.step2.body':  'Un programme personnalisé combinant techniques manuelles, exercices et conseils.',
    'approach.step3.num':   '03',
    'approach.step3.title': 'Suivi',
    'approach.step3.body':  'Ajustements réguliers et accompagnement sur le long terme pour un résultat durable.',

    /* ── Testimonials ── */
    'testimonials.eyebrow': 'Elles/ils en parlent',
    'testimonials.title':   'Ce que disent<br><em>nos patients</em>',
    'testimonials.t1.quote': '« Une écoute exceptionnelle et une expertise qui fait la différence. Je recommande vivement. »',
    'testimonials.t1.name':  'Camille L.',
    'testimonials.t1.role':  'Patiente depuis 2 ans',
    'testimonials.t2.quote': '« Après ma blessure au genou, j\'ai retrouvé une mobilité complète grâce à un suivi personnalisé. »',
    'testimonials.t2.name':  'Thomas R.',
    'testimonials.t2.role':  'Coureur amateur',
    'testimonials.t3.quote': '« Un cabinet apaisant, une équipe professionnelle — je me sens enfin écouté(e). »',
    'testimonials.t3.name':  'Sophie M.',
    'testimonials.t3.role':  'Patiente depuis 6 mois',

    /* ── CTA booking ── */
    'cta.eyebrow':      'Prenez rendez-vous',
    'cta.title':        'Prêt(e) à prendre soin<br>de <em>vous</em> ?',
    'cta.sub':          'Réservez votre consultation en quelques clics. Nous vous répondons dans la journée.',
    'cta.btn':          'Réserver en ligne',
    'cta.widgetNote':   'Le calendrier de prise de rendez-vous s\'intégrera ici à l\'étape suivante.',

    /* ── Footer ── */
    'footer.tagline':   'Kinésithérapie & bien-être — Tamarin, Île Maurice',
    'footer.navTitle':  'Navigation',
    'footer.contactTitle': 'Contact',
    'footer.hoursTitle':'Horaires',
    'footer.hoursWeek': 'Lundi – Vendredi : 8h00 – 19h00',
    'footer.hoursSat':  'Samedi : 9h00 – 13h00',
    'footer.hoursSun':  'Dimanche : fermé',
    'footer.address':   'Avenue des Tamariniers, Tamarin, Île Maurice',
    'footer.phone':     '+230 5000 00 00',
    'footer.email':     'contact@sentezvousbien.mu',
    'footer.legal':     'Mentions légales',
    'footer.privacy':   'Politique de confidentialité',
    'footer.copyright': '© 2026 Sentez-vous bien. Tous droits réservés.',
  },

  en: {
    /* ── Document head ── */
    'doc.title':        'Sentez-vous bien | Physiotherapy & Wellness Clinic',
    'doc.description':  'Sentez-vous bien — Physiotherapy and wellness clinic. Expertise, care and a personalised approach for your recovery and vitality.',

    /* ── Navbar ── */
    'nav.home':         'Home',
    'nav.about':        'About',
    'nav.services':     'Services',
    'nav.pricing':      'Pricing',
    'nav.contact':      'Contact',
    'nav.book':         'Book now',
    'nav.menuLabel':    'Menu',

    /* ── Language switcher ── */
    'lang.fr':          'FR',
    'lang.en':          'EN',
    'lang.switchLabel': 'Switch language',

    /* ── Hero ── */
    'hero.eyebrow':     'Tamarin · Mauritius',
    'hero.title':       'Your wellbeing,<br><em>our expertise</em>',
    'hero.sub':         'A physiotherapy and wellness clinic. A human, tailored approach for your rehabilitation, recovery and balance.',
    'hero.btnBook':     'Book your session',
    'hero.btnServices': 'Discover our services',
    'hero.imgAlt1':     'Physiotherapy session in a bright clinic',
    'hero.imgAlt2':     'Peaceful interior of a wellness studio',
    'hero.imgAlt3':     'Therapeutic treatment by a physiotherapist',

    /* ── About teaser ── */
    'about.eyebrow':    'Our clinic',
    'about.title':      'A caring,<br><em>rigorous</em> practice',
    'about.body':       'For several years, our team has supported every patient through a care journey tailored to their needs. Combining clinical listening with modern manual techniques, we help you recover mobility, comfort and vitality.',
    'about.btn':        'Learn more about us',
    'about.imgAlt':     'Practitioner welcoming a patient at the clinic',

    /* ── Services preview ── */
    'services.eyebrow':  'Our services',
    'services.title':    'Three specialties,<br><em>one focus</em>: you',
    'services.s1.title': 'Physiotherapy',
    'services.s1.body':  'Post-operative rehabilitation, chronic pain management, manual therapy and targeted therapeutic exercises.',
    'services.s2.title': 'Sports rehabilitation',
    'services.s2.body':  'Return to activity after injury, physical preparation, injury prevention and support for amateur and seasoned athletes alike.',
    'services.s3.title': 'Wellness & massage',
    'services.s3.body':  'Therapeutic massage, deep relaxation and recovery techniques to release tension and restore physical balance.',
    'services.btn':      'See all our services',

    /* ── Approach ── */
    'approach.eyebrow': 'Our approach',
    'approach.title':   'A clear journey<br>in <em>three steps</em>',
    'approach.step1.num':   '01',
    'approach.step1.title': 'Assessment',
    'approach.step1.body':  'A thorough review of your needs, history and care goals.',
    'approach.step2.num':   '02',
    'approach.step2.title': 'Treatment plan',
    'approach.step2.body':  'A personalised programme combining manual techniques, exercises and guidance.',
    'approach.step3.num':   '03',
    'approach.step3.title': 'Follow-up',
    'approach.step3.body':  'Regular adjustments and long-term support for lasting results.',

    /* ── Testimonials ── */
    'testimonials.eyebrow': 'Kind words',
    'testimonials.title':   'What our<br><em>patients say</em>',
    'testimonials.t1.quote': '"Exceptional listening and expertise that makes the difference. Highly recommended."',
    'testimonials.t1.name':  'Camille L.',
    'testimonials.t1.role':  'Patient for 2 years',
    'testimonials.t2.quote': '"After my knee injury, I regained full mobility thanks to a truly personalised follow-up."',
    'testimonials.t2.name':  'Thomas R.',
    'testimonials.t2.role':  'Amateur runner',
    'testimonials.t3.quote': '"A soothing clinic, a professional team — I finally feel heard."',
    'testimonials.t3.name':  'Sophie M.',
    'testimonials.t3.role':  'Patient for 6 months',

    /* ── CTA booking ── */
    'cta.eyebrow':      'Book an appointment',
    'cta.title':        'Ready to take care<br>of <em>yourself</em>?',
    'cta.sub':          'Book your consultation in a few clicks. We reply the same day.',
    'cta.btn':          'Book online',
    'cta.widgetNote':   'The booking calendar will be embedded here in the next step.',

    /* ── Footer ── */
    'footer.tagline':   'Physiotherapy & wellness — Tamarin, Mauritius',
    'footer.navTitle':  'Navigation',
    'footer.contactTitle': 'Contact',
    'footer.hoursTitle':'Opening hours',
    'footer.hoursWeek': 'Monday – Friday: 8:00 – 19:00',
    'footer.hoursSat':  'Saturday: 9:00 – 13:00',
    'footer.hoursSun':  'Sunday: closed',
    'footer.address':   'Avenue des Tamariniers, Tamarin, Mauritius',
    'footer.phone':     '+230 5000 00 00',
    'footer.email':     'contact@sentezvousbien.mu',
    'footer.legal':     'Legal notice',
    'footer.privacy':   'Privacy policy',
    'footer.copyright': '© 2026 Sentez-vous bien. All rights reserved.',
  },
};

const SUPPORTED_LANGS = ['fr', 'en'];
const DEFAULT_LANG = 'fr';
const STORAGE_KEY = 'sentezvousbien.lang';

function getStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  } catch (_) { /* localStorage unavailable */ }
  return DEFAULT_LANG;
}

function storeLang(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(',').forEach((pair) => {
      const [attr, key] = pair.trim().split(':');
      if (attr && key && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang-btn');
    btn.setAttribute('aria-pressed', String(btnLang === lang));
    btn.classList.toggle('is-active', btnLang === lang);
  });
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  storeLang(lang);
  applyTranslations(lang);
}

function initI18n() {
  const initialLang = getStoredLang();
  applyTranslations(initialLang);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLang(btn.getAttribute('data-lang-btn'));
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}

window.SentezVousBienI18n = { setLang, getLang: getStoredLang };

# Plan: nexus-studio-homepage

**Goal:** Créer une page d'accueil standalone HTML/CSS/JS premium pour Nexus Studio, cabinet d'architecture new-yorkais.
**Architecture:** Fichier unique `nexus-studio.html` — CSS inline dans `<style>`, JS inline dans `<script>`, images via Unsplash CDN.
**Tech stack:** HTML5, CSS3 (variables + animations + IntersectionObserver), Google Fonts (Cormorant Garamond + DM Sans), Vanilla JS
**Created:** 2026-04-14

---

## Task 1: Squelette HTML + Variables CSS + Navbar

**Files:** `nexus-studio.html`

### Steps

1. Vérification visuelle attendue :
   - Navbar sticky avec logo NEXUS/STUDIO visible
   - Bouton "Demander un devis" orange
   - Blur backdrop au scroll

2. Implémenter le squelette complet avec variables CSS :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexus Studio — Architecture Moderne, New York</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #EBF4FA;
      --white: #FFFFFF;
      --dark: #1A1A2E;
      --text: #1A1A2E;
      --muted: #6B7A8D;
      --accent: #FF6B2B;
      --border: #CBD8E1;
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      --font-sans: 'DM Sans', system-ui, sans-serif;
    }
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--text); font-family: var(--font-sans); }
  </style>
</head>
<body>
  <!-- NAVBAR -->
  <!-- HERO -->
  <!-- STATS -->
  <!-- PROJECTS -->
  <!-- SERVICES -->
  <!-- CTA BAND -->
  <!-- FOOTER -->
  <script></script>
</body>
</html>
```

3. Commit :
```bash
git add nexus-studio.html
git commit -m "Task 1: Squelette HTML + variables CSS + structure Nexus Studio"
```

---

## Task 2: Navbar sticky avec logo et CTA

**Files:** `nexus-studio.html`

### Steps

1. Vérification attendue : navbar fixe en haut, logo élégant, blur au scroll.

2. Implémenter la navbar :

```html
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="#" class="nav-logo">
      <span class="logo-nexus">NEXUS</span>
      <span class="logo-studio">STUDIO</span>
    </a>
    <ul class="nav-links">
      <li><a href="#about">À propos</a></li>
      <li><a href="#projects">Projets</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="#contact" class="btn-cta">Demander un devis</a>
    <button class="nav-toggle" id="navToggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

```css
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.4s ease;
}
.navbar.scrolled {
  background: rgba(235, 244, 250, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 1rem 0;
  box-shadow: 0 1px 30px rgba(26,26,46,0.06);
}
.nav-container {
  max-width: 1400px; margin: 0 auto;
  padding: 0 2.5rem;
  display: flex; align-items: center; gap: 2rem;
}
.nav-logo { text-decoration: none; display: flex; align-items: baseline; gap: 0.4rem; }
.logo-nexus {
  font-family: var(--font-sans); font-size: 1.4rem; font-weight: 600;
  letter-spacing: 0.25em; color: var(--dark);
}
.logo-studio {
  font-family: var(--font-sans); font-size: 0.7rem; font-weight: 500;
  letter-spacing: 0.3em; color: var(--accent); text-transform: uppercase;
}
.nav-links { list-style: none; display: flex; gap: 2.5rem; margin-left: auto; }
.nav-links a {
  text-decoration: none; color: var(--dark); font-size: 0.85rem;
  font-weight: 400; letter-spacing: 0.05em;
  position: relative; transition: color 0.3s;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
  height: 1px; background: var(--accent);
  transform: scaleX(0); transition: transform 0.3s;
}
.nav-links a:hover { color: var(--accent); }
.nav-links a:hover::after { transform: scaleX(1); }
.btn-cta {
  background: var(--accent); color: white;
  padding: 0.75rem 1.75rem; border-radius: 2px;
  text-decoration: none; font-size: 0.82rem; font-weight: 500;
  letter-spacing: 0.08em; transition: all 0.3s; white-space: nowrap;
}
.btn-cta:hover { background: #e55a20; transform: translateY(-1px); box-shadow: 0 8px 25px rgba(255,107,43,0.3); }
.nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 5px; }
.nav-toggle span { width: 24px; height: 1.5px; background: var(--dark); transition: all 0.3s; display: block; }
@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .btn-cta { display: none; }
}
```

```js
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
```

3. Commit :
```bash
git add nexus-studio.html
git commit -m "Task 2: Navbar sticky avec logo NEXUS/STUDIO et CTA orange"
```

---

## Task 3: Section Hero plein écran

**Files:** `nexus-studio.html`

### Steps

1. Vérification attendue : photo architecture plein écran, overlay bleu léger, titre grand, 2 boutons, scroll indicator.

2. Implémenter le hero :

```html
<section class="hero" id="hero">
  <div class="hero-bg">
    <img
      src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85&fit=crop"
      alt="Architecture moderne New York"
      class="hero-img"
    >
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <p class="hero-label">New York · Architecture Studio</p>
    <h1 class="hero-title">
      <span class="reveal-line">Redéfinir les espaces,</span>
      <span class="reveal-line">élever les modes de vie.</span>
    </h1>
    <p class="hero-sub">Minimal. Moderne. Significatif.</p>
    <div class="hero-actions">
      <a href="#projects" class="btn-primary">Voir nos projets</a>
      <a href="#about" class="btn-outline">Notre approche</a>
    </div>
  </div>
  <div class="scroll-indicator">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>
```

```css
.hero {
  position: relative; height: 100vh; min-height: 700px;
  display: flex; align-items: center; overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(26,26,46,0.55) 0%, rgba(26,26,46,0.2) 60%, rgba(235,244,250,0.15) 100%);
}
.hero-content {
  position: relative; z-index: 2;
  max-width: 1400px; margin: 0 auto; padding: 0 2.5rem;
  padding-top: 6rem;
}
.hero-label {
  font-family: var(--font-sans); font-size: 0.78rem; font-weight: 500;
  letter-spacing: 0.3em; color: var(--accent); text-transform: uppercase;
  margin-bottom: 1.5rem;
  animation: fadeUp 0.8s ease 0.2s both;
}
.hero-title {
  font-family: var(--font-serif); font-size: clamp(3rem, 6.5vw, 6.5rem);
  font-weight: 400; line-height: 1.05; color: white;
  margin-bottom: 1.5rem;
  display: flex; flex-direction: column; gap: 0.1em;
}
.reveal-line { display: block; animation: fadeUp 0.9s ease both; }
.reveal-line:nth-child(2) { animation-delay: 0.15s; }
.hero-sub {
  font-family: var(--font-sans); font-size: 1rem; font-weight: 300;
  color: rgba(255,255,255,0.7); letter-spacing: 0.2em;
  margin-bottom: 3rem;
  animation: fadeUp 0.9s ease 0.3s both;
}
.hero-actions {
  display: flex; gap: 1.25rem; flex-wrap: wrap;
  animation: fadeUp 0.9s ease 0.45s both;
}
.btn-primary {
  background: var(--accent); color: white;
  padding: 1rem 2.5rem; border-radius: 2px;
  text-decoration: none; font-size: 0.85rem; font-weight: 500;
  letter-spacing: 0.1em; transition: all 0.3s;
}
.btn-primary:hover { background: #e55a20; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(255,107,43,0.35); }
.btn-outline {
  border: 1px solid rgba(255,255,255,0.6); color: white;
  padding: 1rem 2.5rem; border-radius: 2px;
  text-decoration: none; font-size: 0.85rem; font-weight: 400;
  letter-spacing: 0.1em; transition: all 0.3s;
}
.btn-outline:hover { border-color: white; background: rgba(255,255,255,0.1); }
.scroll-indicator {
  position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
  color: rgba(255,255,255,0.6); font-size: 0.7rem; letter-spacing: 0.2em;
  z-index: 2; animation: fadeUp 1s ease 0.8s both;
}
.scroll-line {
  width: 1px; height: 50px; background: rgba(255,255,255,0.4);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scrollPulse {
  0%, 100% { transform: scaleY(1); opacity: 0.4; }
  50% { transform: scaleY(1.4); opacity: 1; }
}
```

3. Commit :
```bash
git add nexus-studio.html
git commit -m "Task 3: Hero plein écran avec animations et typographie premium"
```

---

## Task 4: Stats + Section Projets (grille 3 cartes)

**Files:** `nexus-studio.html`

### Steps

1. Vérification attendue : ligne stats sobre, 3 cartes projets avec hover orange, photos Unsplash.

2. Implémenter stats et projets :

```html
<!-- STATS -->
<section class="stats" id="about">
  <div class="stats-container">
    <div class="stat-item"><span class="stat-number">150+</span><span class="stat-label">Projets réalisés</span></div>
    <div class="stat-divider"></div>
    <div class="stat-item"><span class="stat-number">18</span><span class="stat-label">Ans d'expérience</span></div>
    <div class="stat-divider"></div>
    <div class="stat-item"><span class="stat-number">12</span><span class="stat-label">Prix d'architecture</span></div>
    <div class="stat-divider"></div>
    <div class="stat-item"><span class="stat-number">4</span><span class="stat-label">Pays</span></div>
  </div>
</section>

<!-- PROJECTS -->
<section class="projects" id="projects">
  <div class="section-container">
    <div class="section-header reveal">
      <p class="section-label">Nos Réalisations</p>
      <h2 class="section-title">Projets phares</h2>
    </div>
    <div class="projects-grid">
      <article class="project-card reveal">
        <div class="project-img-wrap">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&fit=crop" alt="One Hudson Loft">
          <div class="project-overlay"><span>Voir le projet →</span></div>
        </div>
        <div class="project-info">
          <span class="project-tag">Résidentiel</span>
          <h3>One Hudson Loft</h3>
          <p>Manhattan, New York</p>
        </div>
      </article>
      <article class="project-card reveal" style="animation-delay:0.15s">
        <div class="project-img-wrap">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop" alt="Pacific Heights Residence">
          <div class="project-overlay"><span>Voir le projet →</span></div>
        </div>
        <div class="project-info">
          <span class="project-tag">Luxe</span>
          <h3>Pacific Heights Residence</h3>
          <p>San Francisco, Californie</p>
        </div>
      </article>
      <article class="project-card reveal" style="animation-delay:0.3s">
        <div class="project-img-wrap">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&fit=crop" alt="The Glass Atelier">
          <div class="project-overlay"><span>Voir le projet →</span></div>
        </div>
        <div class="project-info">
          <span class="project-tag">Commercial</span>
          <h3>The Glass Atelier</h3>
          <p>Brooklyn, New York</p>
        </div>
      </article>
    </div>
  </div>
</section>
```

```css
/* STATS */
.stats { background: var(--white); padding: 3.5rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.stats-container { max-width: 1400px; margin: 0 auto; padding: 0 2.5rem; display: flex; align-items: center; justify-content: center; gap: 0; }
.stat-item { flex: 1; text-align: center; padding: 1rem 2rem; }
.stat-number { display: block; font-family: var(--font-serif); font-size: 3rem; font-weight: 300; color: var(--dark); line-height: 1; }
.stat-label { display: block; font-size: 0.78rem; color: var(--muted); letter-spacing: 0.1em; margin-top: 0.5rem; }
.stat-divider { width: 1px; height: 60px; background: var(--border); flex-shrink: 0; }

/* PROJECTS */
.projects { padding: 7rem 0; background: var(--bg); }
.section-container { max-width: 1400px; margin: 0 auto; padding: 0 2.5rem; }
.section-header { margin-bottom: 4rem; }
.section-label { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.3em; color: var(--accent); text-transform: uppercase; margin-bottom: 1rem; }
.section-title { font-family: var(--font-serif); font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 400; color: var(--dark); line-height: 1.1; }
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.project-card { background: var(--white); overflow: hidden; cursor: pointer; transition: transform 0.4s ease; }
.project-card:hover { transform: translateY(-6px); }
.project-img-wrap { position: relative; overflow: hidden; aspect-ratio: 4/3; }
.project-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.project-card:hover .project-img-wrap img { transform: scale(1.06); }
.project-overlay {
  position: absolute; inset: 0; background: rgba(26,26,46,0.6);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.4s;
}
.project-card:hover .project-overlay { opacity: 1; }
.project-overlay span { color: white; font-size: 0.85rem; letter-spacing: 0.1em; }
.project-info { padding: 1.5rem; border-left: 3px solid transparent; transition: border-color 0.3s; }
.project-card:hover .project-info { border-color: var(--accent); }
.project-tag { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); font-weight: 500; }
.project-info h3 { font-family: var(--font-serif); font-size: 1.4rem; font-weight: 400; color: var(--dark); margin: 0.4rem 0 0.25rem; }
.project-info p { font-size: 0.8rem; color: var(--muted); }
@media (max-width: 900px) { .projects-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr; } .stats-container { flex-wrap: wrap; } .stat-divider { display: none; } }
```

3. Commit :
```bash
git add nexus-studio.html
git commit -m "Task 4: Stats + grille 3 projets phares avec hover premium"
```

---

## Task 5: Section Services + CTA Band + Footer + JS Animations

**Files:** `nexus-studio.html`

### Steps

1. Vérification attendue : services en 2 colonnes, bande CTA sombre, footer élégant, fade-in au scroll.

2. Implémenter services, CTA et footer :

```html
<!-- SERVICES -->
<section class="services" id="services">
  <div class="section-container services-inner">
    <div class="services-left reveal">
      <p class="section-label">Ce que nous faisons</p>
      <h2 class="section-title">Une vision.<br>Une expertise.</h2>
      <p class="services-desc">Nous concevons des espaces qui transcendent l'ordinaire — chaque projet est une collaboration entre la vision du client et notre maîtrise architecturale.</p>
    </div>
    <div class="services-right reveal">
      <div class="service-item"><span class="service-num">01</span><div><h4>Design Architectural</h4><p>De l'esquisse à la livraison, nous orchestrons chaque détail de votre bâtiment.</p></div></div>
      <div class="service-item"><span class="service-num">02</span><div><h4>Intérieur & Espace</h4><p>Des intérieurs pensés pour la vie — chaleur, lumière et fonctionnalité en harmonie.</p></div></div>
      <div class="service-item"><span class="service-num">03</span><div><h4>Conseil Urbanisme</h4><p>Nous guidons vos projets à travers les réglementations et opportunités urbaines.</p></div></div>
      <div class="service-item"><span class="service-num">04</span><div><h4>Direction de Projet</h4><p>Pilotage complet : délais, budget, qualité — sans compromis.</p></div></div>
    </div>
  </div>
</section>

<!-- CTA BAND -->
<section class="cta-band">
  <div class="cta-content reveal">
    <p class="section-label" style="color:rgba(255,107,43,0.9)">Commençons</p>
    <h2 class="cta-title">Prêt à transformer<br>votre espace ?</h2>
    <a href="#contact" class="btn-primary">Parler à un architecte</a>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer" id="contact">
  <div class="footer-container">
    <div class="footer-col">
      <div class="nav-logo" style="margin-bottom:1rem">
        <span class="logo-nexus" style="color:white">NEXUS</span>
        <span class="logo-studio">STUDIO</span>
      </div>
      <p class="footer-tagline">Architecture moderne.<br>Espaces intemporels.</p>
    </div>
    <div class="footer-col">
      <h5 class="footer-heading">Navigation</h5>
      <ul class="footer-links"><li><a href="#about">À propos</a></li><li><a href="#projects">Projets</a></li><li><a href="#services">Services</a></li><li><a href="#contact">Contact</a></li></ul>
    </div>
    <div class="footer-col">
      <h5 class="footer-heading">Contact</h5>
      <p>250 West 55th Street<br>New York, NY 10019</p>
      <p style="margin-top:0.75rem">hello@nexusstudio.com<br>+1 (212) 555-0180</p>
    </div>
    <div class="footer-col">
      <h5 class="footer-heading">Réseaux</h5>
      <ul class="footer-links"><li><a href="#">Instagram</a></li><li><a href="#">LinkedIn</a></li><li><a href="#">Behance</a></li></ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Nexus Studio. Tous droits réservés.</p>
  </div>
</footer>
```

```css
/* SERVICES */
.services { padding: 7rem 0; background: var(--white); }
.services-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
.services-desc { color: var(--muted); line-height: 1.8; margin-top: 1.5rem; font-size: 0.95rem; }
.service-item { display: flex; gap: 1.5rem; padding: 2rem 0; border-bottom: 1px solid var(--border); }
.service-item:first-child { border-top: 1px solid var(--border); }
.service-num { font-family: var(--font-serif); font-size: 2rem; color: var(--border); font-weight: 300; flex-shrink: 0; line-height: 1; }
.service-item h4 { font-family: var(--font-serif); font-size: 1.2rem; font-weight: 400; color: var(--dark); margin-bottom: 0.4rem; }
.service-item p { font-size: 0.85rem; color: var(--muted); line-height: 1.7; }

/* CTA BAND */
.cta-band { background: var(--dark); padding: 8rem 2.5rem; text-align: center; }
.cta-title { font-family: var(--font-serif); font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; color: white; line-height: 1.15; margin: 1rem 0 2.5rem; }

/* FOOTER */
.footer { background: #111120; padding: 5rem 0 0; }
.footer-container { max-width: 1400px; margin: 0 auto; padding: 0 2.5rem; display: grid; grid-template-columns: 2fr 1fr 1.5fr 1fr; gap: 4rem; }
.footer-tagline { color: rgba(255,255,255,0.45); font-size: 0.85rem; line-height: 1.7; }
.footer-heading { font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 1.5rem; }
.footer-links { list-style: none; }
.footer-links li { margin-bottom: 0.75rem; }
.footer-links a { color: rgba(255,255,255,0.55); text-decoration: none; font-size: 0.88rem; transition: color 0.3s; }
.footer-links a:hover { color: var(--accent); }
.footer p { color: rgba(255,255,255,0.55); font-size: 0.85rem; line-height: 1.7; }
.footer-bottom { margin-top: 4rem; padding: 1.5rem 2.5rem; border-top: 1px solid rgba(255,255,255,0.07); text-align: center; }
.footer-bottom p { color: rgba(255,255,255,0.25); font-size: 0.75rem; }
@media (max-width: 900px) { .services-inner { grid-template-columns: 1fr; gap: 3rem; } .footer-container { grid-template-columns: 1fr 1fr; gap: 2.5rem; } }
@media (max-width: 600px) { .footer-container { grid-template-columns: 1fr; } }

/* REVEAL ANIMATION */
.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

```js
// IntersectionObserver pour les animations reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
```

3. Commit :
```bash
git add nexus-studio.html
git commit -m "Task 5: Services, CTA band, footer et animations IntersectionObserver"
```

---

## Task 6: Push et vérification finale

**Files:** `nexus-studio.html`

### Steps

1. Vérifier que le fichier est complet et bien formé :
```bash
# Vérifier la taille du fichier (doit être > 15KB)
wc -l nexus-studio.html
```

2. Push sur la branche :
```bash
git push -u origin claude/nexus-studio-homepage-XEUFk
```

3. Vérification finale :
   - Ouvrir `nexus-studio.html` dans un navigateur
   - Vérifier : navbar sticky, hero plein écran, stats, 3 cartes projets, services, CTA, footer
   - Tester le responsive mobile

---

## Checklist de spec

- [x] Navbar avec logo NEXUS/STUDIO et CTA orange
- [x] Hero plein écran avec typographie Cormorant Garamond
- [x] Stats : 4 chiffres clés
- [x] Grille 3 projets avec photos Unsplash
- [x] Section services 2 colonnes
- [x] CTA band fond sombre
- [x] Footer avec contact New York
- [x] Animations fade-in IntersectionObserver
- [x] Responsive mobile
- [x] Palette : bleu ciel #EBF4FA + orange #FF6B2B + dark #1A1A2E

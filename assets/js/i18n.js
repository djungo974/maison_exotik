/* ════════════════════════════════════════════════════════════
   Maison Exotik — Bilingual i18n system (EN / FR)
   Default language: EN. User choice persisted in localStorage.
   Usage:  <element data-i18n="key">         → innerHTML = translation
           <element data-i18n-attr="attr:key"> → setAttribute(attr, translation)
   ════════════════════════════════════════════════════════════ */

const translations = {
  en: {
    /* ── Document head ── */
    'doc.title':        'Maison Exotik | Carved Teak Furniture — Saint-André, Réunion Island',
    'doc.description':  'Maison Exotik — Hand-carved teak furniture, exotic style, eco-responsible. Saint-André, Réunion Island.',

    /* ── Navbar ── */
    'nav.tagline':      'Exotic charm<br>at home',
    'nav.home':         'Home',
    'nav.about':        'Our story',
    'nav.collections':  'Collections',
    'nav.eco':          'Eco-responsible',
    'nav.contact':      'Contact',
    'nav.findUs':       '<i class=\'bx bx-map-pin\'></i> Find us',
    'nav.menuLabel':    'Menu',

    /* ── Mobile overlay ── */
    'mobile.home':         'Home',
    'mobile.about':        'Our story',
    'mobile.collections':  'Collections',
    'mobile.eco':          'Eco-responsible',
    'mobile.contact':      'Find us',

    /* ── Hero ── */
    'hero.eyebrow':     'Exotic Teak · Hand-Carved · Since 2009',
    'hero.title':       'Exotic<br><em>Charm</em><br>at home',
    'hero.sub':         'Pieces hand-carved by master artisans, selected for their authenticity, durability and soul.',
    'hero.btnDiscover': 'Discover our collections',
    'hero.btnStory':    'Our story',
    'hero.scroll':      'Scroll',
    'hero.badge':       'Eco-certified',
    'hero.prevLabel':   'Previous',
    'hero.nextLabel':   'Next',

    /* ── Marquee ── */
    'marquee.1': 'Certified Exotic Teak',
    'marquee.2': 'Exceptional Craftsmanship',
    'marquee.3': 'Eco-Responsible',
    'marquee.4': 'Saint-André · Réunion Island',
    'marquee.5': 'Since 2009',
    'marquee.6': 'Hand-Carved',
    'marquee.7': 'Green Economy',

    /* ── About teaser ── */
    'about.label':     'Our world',
    'about.title':     'Exotic charm<br>walks <em>into your home</em>',
    'about.body':      'Welcome to Maison Exotik, your premier destination to discover a unique selection of carved teak furniture in the heart of Saint-André since 2009. Each piece is carefully chosen from master artisans — guardians of millennia-old traditions and unmatched excellence in woodworking.',
    'about.btn':       'Learn more',
    'about.cardTitle': 'Certified Exotic Wood',
    'about.cardSub':   'Traditional craftsmanship · Premium quality',

    /* ── Stats ── */
    'stats.foundedNum': '2009',
    'stats.foundedLbl': 'Founded in Saint-André',
    'stats.teckNum':    '100%',
    'stats.teckLbl':    'Certified Teak',
    'stats.woodNum':    'Teak',
    'stats.woodLbl':    'Premium exotic wood',
    'stats.ecoNum':     'Eco',
    'stats.ecoLbl':     'Committed Green Economy',

    /* ── Collections ── */
    'collections.label': 'Our collections',
    'collections.title': 'Furnished with <em>character</em>',
    'collections.intro': 'From the living room to the terrace, every piece tells the story of exotic teak and its exceptional artisans.',
    'collections.tag1':  'Flagship collection',
    'collections.name1': 'Sofas &amp;<br>Couches',
    'collections.tag2':  'Outdoor',
    'collections.name2': 'Tables &amp;<br>Gardens',
    'collections.tag3':  'Indoor',
    'collections.name3': 'Sideboards &amp;<br>Storage',
    'collections.explore': 'Explore',

    /* ── Video band ── */
    'video.title': 'The raw beauty<br>of <em>natural teak</em>',
    'video.body':  'A noble wood that ages beautifully over time, weather-resistant and built to last — the very essence of exotic craftsmanship.',

    /* ── Product carousel ── */
    'prod.label': 'Our signature pieces',
    'prod.title': '<em>Exclusive</em> selection',
    'prod.prevLabel': 'Previous',
    'prod.nextLabel': 'Next',

    /* ── Java / Craft story ── */
    'java.label':       'The origin',
    'java.title':       'An exceptional wood,<br>a millennia-old<br><em>craftsmanship</em>',
    'java.body':        'Teak is one of the most precious woods in the world, recognized for its density, natural resistance to humidity, insects and weather. Maison Exotik rigorously selects each piece from master artisans who carry on centuries-old wood-carving traditions — guaranteeing authenticity and longevity.',
    'java.feat1Title':  'Grade A Teak',
    'java.feat1Body':   'Our teak is harvested from certified plantations, ensuring exceptional density and longevity.',
    'java.feat2Title':  'Hand-carved',
    'java.feat2Body':   'Every motif is chiseled by hand by artisans trained from childhood in centuries-old wood-carving traditions.',
    'java.feat3Title':  'Direct import',
    'java.feat3Body':   'Maison Exotik selects each piece directly from the workshops — no middlemen, to preserve quality.',

    /* ── Eco section ── */
    'eco.label':        'Green commitment',
    'eco.title':        'Responsible <em>commerce</em>,<br>preserved planet',
    'eco.body':         'Choosing Maison Exotik means choosing furniture that respects the forest and supports a sustainable green economy. Our environmental commitment is at the heart of every business decision.',
    'eco.pillar1Title': 'Certified Forests',
    'eco.pillar1Body':  'All our teak comes from sustainably managed plantations, certified by independent forestry-control organizations. No primary forest is exploited.',
    'eco.pillar2Title': 'Green Economy',
    'eco.pillar2Body':  'We actively contribute to the green economy by supporting human-scale artisan workshops, promoting fair working conditions and ethical commerce.',
    'eco.pillar3Title': 'Mindful Transport',
    'eco.pillar3Body':  'Our maritime freight containers are optimized to minimize the carbon footprint. We favor grouped deliveries and recyclable packaging.',

    /* ── Eco-tax box ── */
    'ecoTax.title':   'The <em>eco-tax</em><br>for a green future',
    'ecoTax.body1':   'In France and on Réunion Island, an eco-tax is collected on new imported furniture. This contribution — included in our prices — is paid to the eco-organization <strong style="color:rgba(253,251,247,.75)">Éco-mobilier</strong>, which finances the collection, sorting and recycling of end-of-life furniture across the territory.',
    'ecoTax.body2':   'At Maison Exotik, we don\'t just comply with this obligation: we embrace it. It\'s our concrete way of taking part in the circular economy and offering you a fully responsible purchase.',
    'ecoTax.stat1Lbl': 'Eco-tax forwarded',
    'ecoTax.stat2Lbl': 'Primary forest exploited',
    'ecoTax.stat3Lbl': 'Circular economy',

    /* ── CTA / Contact ── */
    'cta.label':       'Come visit us',
    'cta.title':       'Live the experience<br><em>in store</em>',
    'cta.body':        'Photos don\'t do justice to the warmth and grain of teak. Come touch, smell and settle into our pieces. Our team welcomes you in Saint-André.',
    'cta.addressLbl':  'Address',
    'cta.addressVal':  '8 rue de la Cocoteraie, 97440 Saint-André',
    'cta.hoursLbl':    'Hours',
    'cta.hoursVal':    'Mon: 1:30pm–5:30pm · Tue–Sat: 9am–12pm &amp; 1:30pm–5:30pm',
    'cta.contactLbl':  'Contact',
    'cta.contactVal':  'maisonexotik974@gmail.com',
    'cta.btn':         'See map &amp; hours',

    /* ── Footer ── */
    'footer.tagline':         'Carved teak furniture, exceptional craftsmanship. Exotic charm at home since 2009.',
    'footer.navTitle':        'Navigation',
    'footer.navHome':         'Home',
    'footer.navAbout':        'Our story',
    'footer.navCollections':  'Collections',
    'footer.navEco':          'Eco-responsible',
    'footer.navContact':      'Find us',
    'footer.collectionsTitle':'Collections',
    'footer.coll1':           'Sofas &amp; Couches',
    'footer.coll2':           'Dining tables',
    'footer.coll3':           'Sideboards &amp; Storage',
    'footer.coll4':           'TV units',
    'footer.coll5':           'Gardens &amp; Terraces',
    'footer.coll6':           'Decorative statuettes',
    'footer.contactTitle':    'Contact',
    'footer.address':         '8 rue de la Cocoteraie<br>97440 Saint-André, Réunion Island',
    'footer.email':           'maisonexotik974@gmail.com',
    'footer.hours':           'Monday: 1:30pm – 5:30pm<br>Tue – Sat: 9am – 12pm | 1:30pm – 5:30pm<br>Sunday: closed',
    'footer.copyright':       '&copy; 2025 Maison Exotik · Saint-André, Réunion Island · All rights reserved',

    /* ── About-us page ── */
    'aboutPage.docTitle':       'Maison Exotik | About Us',
    'aboutPage.brandTagline':   'Exotic charm at home',
    'aboutPage.navHome':        'HOME',
    'aboutPage.navAbout':       'About us',
    'aboutPage.title':          'About us',
    'aboutPage.p1':             'Welcome to Maison Exotik, your premier destination to discover a unique selection of exotic-wood furniture in the heart of Saint-André since 2009. Located at 8 rue de la Cocoteraie, 97440, our store embodies our passion and commitment to authenticity, quality, and durability for every piece we offer.',
    'aboutPage.p2':             'At Maison Exotik, we celebrate the natural beauty and timeless elegance of teak, carefully selected for its superior quality and durability. Our collection — primarily furniture — is also enriched by a handful of decorative statuettes, each telling its own story of craftsmanship and tradition.',
    'aboutPage.p3':             'We understand the importance of preserving our planet, which is why we contribute to ecological sustainability by paying an eco-tax on every piece sold. This gesture underlines our commitment to a greener and more responsible future, ensuring your choice at Maison Exotik is not just about style, but also a positive contribution to the environment.',
    'aboutPage.p4':             'Aware of the importance of accessibility, we strive to offer our creations at affordable prices. We believe everyone deserves access to quality furniture, with no compromise on authenticity or durability.',
    'aboutPage.p5':             'We invite you to discover our unique world by visiting our store. Please note that the photos on this site are non-contractual, reflecting our desire to give you the exclusive and personal experience of in-store discovery. Each piece is an invitation to explore the richness and diversity of exotic woods, available only on the sales floor.',
    'aboutPage.p6':             'Join us at Maison Exotik for an adventure where nature meets craftsmanship, and let yourself be charmed by the warmth and character of our furniture — witnesses to a world where quality, beauty and responsibility come together. Your home deserves the very best, it deserves Maison Exotik.',
    'aboutPage.hoursTitle':     'Opening hours',
    'aboutPage.monday':         'Monday',
    'aboutPage.mondayHours':    ': 1:30pm – 5:30pm',
    'aboutPage.tuesday':        'Tuesday',
    'aboutPage.tuesdayHours':   ': 9am – 12pm  1:30pm – 5:30pm',
    'aboutPage.wednesday':      'Wednesday',
    'aboutPage.wednesdayHours': ': 9am – 12pm  1:30pm – 5:30pm',
    'aboutPage.thursday':       'Thursday',
    'aboutPage.thursdayHours':  ': 9am – 12pm  1:30pm – 5:30pm',
    'aboutPage.friday':         'Friday',
    'aboutPage.fridayHours':    ': 9am – 12pm  1:30pm – 5:30pm',
    'aboutPage.saturday':       'Saturday',
    'aboutPage.saturdayHours':  ': 9am – 12pm  1:30pm – 5:30pm',
    'aboutPage.sunday':         'Sunday',
    'aboutPage.sundayHours':    ': Closed',

    /* ── Lang switcher ── */
    'langSwitch.label': 'Switch language'
  },

  fr: {
    /* ── Document head ── */
    'doc.title':        'Maison Exotik | Meubles en Teck Sculpté — Saint-André, La Réunion',
    'doc.description':  'Maison Exotik — Meubles en teck sculpté, style exotique, éco-responsable. Saint-André, La Réunion.',

    /* ── Navbar ── */
    'nav.tagline':      'Le charme exotique<br>à domicile',
    'nav.home':         'Accueil',
    'nav.about':        'Notre histoire',
    'nav.collections':  'Collections',
    'nav.eco':          'Éco-responsable',
    'nav.contact':      'Contact',
    'nav.findUs':       '<i class=\'bx bx-map-pin\'></i> Nous trouver',
    'nav.menuLabel':    'Menu',

    /* ── Mobile overlay ── */
    'mobile.home':         'Accueil',
    'mobile.about':        'Notre histoire',
    'mobile.collections':  'Collections',
    'mobile.eco':          'Éco-responsable',
    'mobile.contact':      'Nous trouver',

    /* ── Hero ── */
    'hero.eyebrow':     'Teck Exotique · Sculpté à la Main · Depuis 2009',
    'hero.title':       'Le Charme<br><em>Exotique</em><br>à domicile',
    'hero.sub':         'Des pièces sculptées à la main par des maîtres artisans, sélectionnées pour leur authenticité, leur durabilité et leur âme.',
    'hero.btnDiscover': 'Découvrir nos collections',
    'hero.btnStory':    'Notre histoire',
    'hero.scroll':      'Défiler',
    'hero.badge':       'Éco-certifié',
    'hero.prevLabel':   'Précédent',
    'hero.nextLabel':   'Suivant',

    /* ── Marquee ── */
    'marquee.1': 'Teck Exotique Certifié',
    'marquee.2': 'Artisanat d\'Exception',
    'marquee.3': 'Éco-Responsable',
    'marquee.4': 'Saint-André · La Réunion',
    'marquee.5': 'Depuis 2009',
    'marquee.6': 'Sculpté à la Main',
    'marquee.7': 'Green Economy',

    /* ── About teaser ── */
    'about.label':     'Notre univers',
    'about.title':     'Le charme exotique<br>entre <em>chez vous</em>',
    'about.body':      'Bienvenue chez Maison Exotik, votre destination privilégiée pour découvrir une sélection unique de meubles en teck sculpté au cœur de Saint-André depuis 2009. Chaque pièce est soigneusement sélectionnée auprès de maîtres artisans — garants de traditions millénaires et d\'une excellence inégalée dans le travail du bois.',
    'about.btn':       'En savoir plus',
    'about.cardTitle': 'Bois Exotique Certifié',
    'about.cardSub':   'Artisanat traditionnel · Qualité supérieure',

    /* ── Stats ── */
    'stats.foundedNum': '2009',
    'stats.foundedLbl': 'Fondé à Saint-André',
    'stats.teckNum':    '100%',
    'stats.teckLbl':    'Teck Certifié',
    'stats.woodNum':    'Teck',
    'stats.woodLbl':    'Bois exotique de qualité',
    'stats.ecoNum':     'Éco',
    'stats.ecoLbl':     'Green Economy engagée',

    /* ── Collections ── */
    'collections.label': 'Nos collections',
    'collections.title': 'Meublé avec <em>caractère</em>',
    'collections.intro': 'Du salon à la terrasse, chaque pièce raconte l\'histoire du teck exotique et de ses artisans d\'exception.',
    'collections.tag1':  'Collection phare',
    'collections.name1': 'Salons &amp;<br>Canapés',
    'collections.tag2':  'Extérieur',
    'collections.name2': 'Tables &amp;<br>Jardins',
    'collections.tag3':  'Intérieur',
    'collections.name3': 'Buffets &amp;<br>Rangements',
    'collections.explore': 'Explorer',

    /* ── Video band ── */
    'video.title': 'La beauté brute<br>du <em>teck naturel</em>',
    'video.body':  'Un bois noble qui se bonifie avec le temps, résistant aux intempéries et aux années — l\'essence même de l\'artisanat exotique.',

    /* ── Product carousel ── */
    'prod.label': 'Nos pièces maîtresses',
    'prod.title': 'Sélection <em>exclusive</em>',
    'prod.prevLabel': 'Précédent',
    'prod.nextLabel': 'Suivant',

    /* ── Java / Craft story ── */
    'java.label':       'L\'origine',
    'java.title':       'Un bois d\'exception,<br>un <em>savoir-faire</em><br>millénaire',
    'java.body':        'Le teck est l\'un des bois les plus précieux au monde, reconnu pour sa densité, sa résistance naturelle à l\'humidité, aux insectes et aux intempéries. Maison Exotik sélectionne rigoureusement chaque pièce auprès de maîtres artisans qui perpétuent des traditions séculaires de sculpture sur bois — garantissant authenticité et longévité.',
    'java.feat1Title':  'Teck Grade A',
    'java.feat1Body':   'Notre teck est récolté sur des plantations certifiées, garantissant une densité et une longévité exceptionnelles.',
    'java.feat2Title':  'Sculpture à la main',
    'java.feat2Body':   'Chaque motif est taillé au ciseau par des artisans formés depuis l\'enfance aux traditions séculaires de la sculpture sur bois.',
    'java.feat3Title':  'Directement importé',
    'java.feat3Body':   'Maison Exotik sélectionne chaque pièce en direct auprès des ateliers — sans intermédiaire pour préserver la qualité.',

    /* ── Eco section ── */
    'eco.label':        'Engagement vert',
    'eco.title':        'Commerce <em>responsable</em>,<br>planète préservée',
    'eco.body':         'Choisir Maison Exotik, c\'est choisir un mobilier qui respecte la forêt et soutient une économie verte durable. Notre engagement écologique est au cœur de chaque décision commerciale.',
    'eco.pillar1Title': 'Forêts Certifiées',
    'eco.pillar1Body':  'Tout notre teck provient de plantations gérées durablement, certifiées par des organismes indépendants de contrôle forestier. Aucune forêt primaire n\'est exploitée.',
    'eco.pillar2Title': 'Green Economy',
    'eco.pillar2Body':  'Nous contribuons activement à l\'économie verte en soutenant des ateliers artisanaux à taille humaine, favorisant des conditions de travail équitables et un commerce éthique.',
    'eco.pillar3Title': 'Transport Raisonné',
    'eco.pillar3Body':  'Nos containers de fret maritime sont optimisés pour minimiser l\'empreinte carbone. Nous privilégions les livraisons groupées et les emballages recyclables.',

    /* ── Eco-tax box ── */
    'ecoTax.title':   'L\'<em>éco-taxe</em><br>pour un futur vert',
    'ecoTax.body1':   'En France et à La Réunion, une éco-taxe est perçue sur les meubles neufs importés. Cette contribution — intégrée dans nos prix — est reversée à l\'éco-organisme <strong style="color:rgba(253,251,247,.75)">Éco-mobilier</strong>, qui finance la collecte, le tri et le recyclage des meubles en fin de vie sur tout le territoire.',
    'ecoTax.body2':   'Chez Maison Exotik, nous ne nous contentons pas de respecter cette obligation : nous la valorisons. C\'est notre façon concrète de participer à l\'économie circulaire et de vous offrir un achat pleinement responsable.',
    'ecoTax.stat1Lbl': 'Éco-taxe reversée',
    'ecoTax.stat2Lbl': 'Forêt primaire exploitée',
    'ecoTax.stat3Lbl': 'Économie circulaire',

    /* ── CTA / Contact ── */
    'cta.label':       'Venez nous voir',
    'cta.title':       'Vivez l\'expérience<br><em>en magasin</em>',
    'cta.body':        'Les photos ne rendent pas justice à la chaleur et au grain du teck. Venez toucher, sentir et vous installer dans nos pièces. Notre équipe vous accueille à Saint-André.',
    'cta.addressLbl':  'Adresse',
    'cta.addressVal':  '8 rue de la Cocoteraie, 97440 Saint-André',
    'cta.hoursLbl':    'Horaires',
    'cta.hoursVal':    'Lun : 13h30–17h30 · Mar–Sam : 9h–12h &amp; 13h30–17h30',
    'cta.contactLbl':  'Contact',
    'cta.contactVal':  'maisonexotik974@gmail.com',
    'cta.btn':         'Voir le plan &amp; horaires',

    /* ── Footer ── */
    'footer.tagline':         'Meubles en teck sculpté, artisanat d\'exception. Le charme exotique à domicile depuis 2009.',
    'footer.navTitle':        'Navigation',
    'footer.navHome':         'Accueil',
    'footer.navAbout':        'Notre histoire',
    'footer.navCollections':  'Collections',
    'footer.navEco':          'Éco-responsable',
    'footer.navContact':      'Nous trouver',
    'footer.collectionsTitle':'Collections',
    'footer.coll1':           'Salons &amp; Canapés',
    'footer.coll2':           'Tables de salle à manger',
    'footer.coll3':           'Buffets &amp; Rangements',
    'footer.coll4':           'Meubles TV',
    'footer.coll5':           'Jardins &amp; Terrasses',
    'footer.coll6':           'Statuettes déco',
    'footer.contactTitle':    'Contact',
    'footer.address':         '8 rue de la Cocoteraie<br>97440 Saint-André, La Réunion',
    'footer.email':           'maisonexotik974@gmail.com',
    'footer.hours':           'Lundi : 13h30 – 17h30<br>Mar – Sam : 9h – 12h | 13h30 – 17h30<br>Dimanche : fermé',
    'footer.copyright':       '&copy; 2025 Maison Exotik · Saint-André, La Réunion · Tous droits réservés',

    /* ── About-us page ── */
    'aboutPage.docTitle':       'Maison Exotik | À propos',
    'aboutPage.brandTagline':   'Le Charme exotique à domicile',
    'aboutPage.navHome':        'MAISON',
    'aboutPage.navAbout':       'À propos de nous',
    'aboutPage.title':          'À propos de nous',
    'aboutPage.p1':             'Bienvenue chez Maison Exotik, votre destination privilégiée pour découvrir une sélection unique de meubles en bois exotiques au cœur de Saint André depuis 2009. Niché au 8 rue de la Cocoteraie, 97440, notre magasin incarne la passion et l\'engagement pour l\'authenticité, la qualité, et la durabilité de chaque pièce que nous proposons.',
    'aboutPage.p2':             'Chez Maison Exotik, nous célébrons la beauté naturelle et l\'élégance intemporelle du teck, soigneusement sélectionné pour sa qualité supérieure et sa durabilité. Notre collection, principalement composée de meubles, s\'enrichit également de quelques statuettes de décoration, chacune racontant sa propre histoire d\'artisanat et de tradition.',
    'aboutPage.p3':             'Nous comprenons l\'importance de préserver notre planète, c\'est pourquoi nous contribuons à la durabilité écologique en payant une éco-taxe pour chaque pièce vendue. Ce geste souligne notre engagement envers un avenir plus vert et plus responsable, assurant que votre choix chez Maison Exotik ne soit pas seulement une question de style, mais aussi une contribution positive à l\'environnement.',
    'aboutPage.p4':             'Conscients de l\'importance de l\'accessibilité, nous nous efforçons de proposer nos créations à des prix abordables. Nous croyons que chacun mérite d\'accéder à des meubles de qualité, sans compromis sur l\'authenticité ou la durabilité.',
    'aboutPage.p5':             'Nous vous invitons à découvrir notre univers unique en visitant notre magasin. Veuillez noter que les photos sur ce site sont non contractuelles, reflétant notre désir de vous faire vivre l\'expérience exclusive et personnelle de la découverte en magasin. Chaque pièce est une invitation à explorer la richesse et la diversité des bois exotiques, disponibles uniquement en surface de vente.',
    'aboutPage.p6':             'Rejoignez-nous à Maison Exotik pour une aventure où la nature rencontre l\'artisanat, et laissez-vous séduire par la chaleur et le caractère de nos meubles, témoins d\'un monde où qualité, beauté, et responsabilité se rencontrent. Votre intérieur mérite ce qu\'il y a de meilleur, il mérite Maison Exotik.',
    'aboutPage.hoursTitle':     'Horaires d\'ouvertures',
    'aboutPage.monday':         'Lundi',
    'aboutPage.mondayHours':    ' : 13h30 - 17h30',
    'aboutPage.tuesday':        'Mardi',
    'aboutPage.tuesdayHours':   ' : 9h - 12h 13h30 - 17h30',
    'aboutPage.wednesday':      'Mercredi',
    'aboutPage.wednesdayHours': ' : 9h - 12h 13h30 - 17h30',
    'aboutPage.thursday':       'Jeudi',
    'aboutPage.thursdayHours':  ' : 9h - 12h 13h30 - 17h30',
    'aboutPage.friday':         'Vendredi',
    'aboutPage.fridayHours':    ' : 9h - 12h 13h30 - 17h30',
    'aboutPage.saturday':       'Samedi',
    'aboutPage.saturdayHours':  ' : 9h - 12h 13h30 - 17h30',
    'aboutPage.sunday':         'Dimanche',
    'aboutPage.sundayHours':    ' : Fermé',

    /* ── Lang switcher ── */
    'langSwitch.label': 'Changer de langue'
  }
};

/* ── Apply translations to the DOM ── */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  // Text content (innerHTML — allows <em>, <br>, <strong> in translations)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Attributes — format: "attr1:key1;attr2:key2"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key].replace(/<[^>]+>/g, ''));
      }
    });
  });

  // <title> + <meta description>
  // Allow per-page override via <html data-i18n-doc-title="..." data-i18n-doc-desc="...">
  const titleKey = document.documentElement.getAttribute('data-i18n-doc-title') || 'doc.title';
  const descKey  = document.documentElement.getAttribute('data-i18n-doc-desc')  || 'doc.description';
  if (dict[titleKey]) document.title = dict[titleKey];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict[descKey]) metaDesc.setAttribute('content', dict[descKey]);

  // <html lang>
  document.documentElement.lang = lang;

  // Toggle visual state
  const sw = document.getElementById('langSwitch');
  if (sw) {
    const en = sw.querySelector('.lang-en');
    const fr = sw.querySelector('.lang-fr');
    if (en) en.classList.toggle('lang-inactive', lang !== 'en');
    if (fr) fr.classList.toggle('lang-inactive', lang !== 'fr');
    sw.setAttribute('aria-label', dict['langSwitch.label'] || 'Switch language');
  }
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const initial = localStorage.getItem('lang') || 'en';
  applyTranslations(initial);

  const sw = document.getElementById('langSwitch');
  if (sw) {
    sw.addEventListener('click', () => {
      const current = localStorage.getItem('lang') || 'en';
      setLanguage(current === 'en' ? 'fr' : 'en');
    });
  }
});

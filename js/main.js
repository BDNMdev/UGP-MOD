/* ===== Données (à remplacer par les contenus officiels) ===== */
const IM = (n) => "img/" + n;
const LOREM = [
  "Dans le cadre du Programme de Modernisation de la Douane, l'UGP-MOD poursuit la mise en œuvre de réformes structurantes visant à simplifier les procédures et à renforcer la transparence.",
  "Cette action mobilise les équipes de la coordination, les services douaniers et les partenaires techniques et financiers, avec un suivi rigoureux des indicateurs de performance.",
  "Les premiers résultats montrent une amélioration sensible des délais de traitement et une meilleure traçabilité des opérations, au bénéfice des opérateurs économiques et de l'État.",
  "La coordination rappelle son engagement à poursuivre l'effort dans la durée et à communiquer régulièrement sur l'avancement des activités.",
];
const NEWS = [
  [
    "les coordon reunion.jpeg",
    "Lancement de la phase 2 du programme de modernisation",
    "2025-03-12",
    "Programme",
    "Cérémonie de lancement des travaux de déploiement des systèmes d'information douaniers.",
  ],
  [
    "ena.jpg",
    "Formation des agents aux procédures dématérialisées",
    "2025-02-20",
    "Formation",
    "Plus de 200 agents formés à la déclaration en ligne et au suivi électronique des dossiers.",
  ],
  [
    "coordon parte.jpeg",
    "Atelier avec les opérateurs économiques",
    "2025-01-28",
    "Partenariat",
    "Échanges avec le secteur privé pour simplifier les formalités du commerce transfrontalier.",
  ],
  [
    "le coordon dg parte.jpeg",
    "Signature d'un accord avec un partenaire technique",
    "2024-12-10",
    "Partenariat",
    "Un nouvel appui pour renforcer la transparence et le contrôle des recettes douanières.",
  ],
  [
    "coordon1.jpeg",
    "Visite de terrain aux postes frontaliers",
    "2024-11-18",
    "Programme",
    "Évaluation de l'état d'avancement des chantiers de réhabilitation.",
  ],
  [
    "coordon2.jpeg",
    "Session de renforcement des capacités",
    "2024-10-30",
    "Formation",
    "Nouvelle session dédiée aux cadres de la coordination.",
  ],
  [
    "coordon3.jpeg",
    "Revue annuelle du programme",
    "2024-09-15",
    "Programme",
    "Bilan des activités et priorités de l'année à venir.",
  ],
  [
    "coordon4.jpeg",
    "Rencontre avec les partenaires financiers",
    "2024-08-22",
    "Partenariat",
    "Point sur les décaissements et les prochaines étapes.",
  ],
].map((a, i) => ({ id: i, i: a[0], t: a[1], d: a[2], c: a[3], x: a[4] }));
const AXES = [
  "Développement et modernisation des infrastructures douanières",
  "Surveillance, contrôle et sécurité aux postes douaniers",
  "Déploiement et modernisation des équipements de contrôle",
  "Renforcement du système d'informations de la DGDA",
  "Développement et renforcement des solutions énergétiques",
  "Renforcement des capacités et formation des agents des douanes",
  "Réforme du cadre juridique et réglementaire douanier",
  "Amélioration de la gouvernance et lutte contre la fraude",
  "Facilitation du commerce et partenariat avec le secteur privé",
];
// Fiche PDF associée à chaque axe (docs/axe-N.pdf), dans le même ordre que AXES
const AXIS_PDF = AXES.map((_, i) => `docs/axe-${i + 1}.pdf`);
const PIMG = [
  "coordon5.jpeg",
  "coordon6.jpeg",
  "coordon7.jpeg",
  "les coordons.jpeg",
  "la coordination.jpeg",
  "ena.jpg",
];
// statut : 2 terminé (vert) · 1 en cours (orange) · 0 non commencé (rouge)
const PROJ = [
  ["Installations de Déchargement des Produits Pétroliers au Congo (IDPP-Congo)", 0, 2, 100],
  ["Plateformes Logistiques Douanières - Sites stratégiques (PLD-S)", 0, 1, 60],
  ["Bureaux de Douane et Postes de Surveillance Frontaliers.", 0, 0, 0],
  ["Réhabilitation des bureaux frontaliers", 1, 1, 45],
  ["Construction de postes de contrôle", 1, 0, 0],
  ["Réseau et data center", 1, 2, 100],
  ["Scanners aux points d'entrée", 2, 1, 70],
  ["Véhicules et matériel de terrain", 2, 2, 100],
  ["Laboratoire douanier", 2, 0, 0],
  ["Formation des agents", 3, 1, 55],
  ["Cursus e-learning", 3, 0, 0],
  ["Bourses et échanges d'expertise", 3, 2, 100],
  ["Code de conduite et intégrité", 4, 1, 35],
  ["Tableau de bord de suivi", 4, 2, 100],
  ["Audit et contrôle interne", 4, 0, 0],
  ["Scanners et contrôle non intrusif", 0, 2, 100],
  ["Pont bascule", 0, 1, 60],
  ["Portail des opérateurs", 0, 0, 0],
  ["Réhabilitation des bureaux frontaliers", 1, 1, 45],
  ["Construction de postes de contrôle", 1, 0, 0],
  ["Réseau et data center", 1, 2, 100],
  ["Scanners aux points d'entrée", 2, 1, 70],
  ["Véhicules et matériel de terrain", 2, 2, 100],
  ["Laboratoire douanier", 2, 0, 0],
  ["Formation des agents", 3, 1, 55],
  ["Cursus e-learning", 3, 0, 0],
  ["Bourses et échanges d'expertise", 3, 2, 100],
  ["Code de conduite et intégrité", 4, 1, 35],
  ["Tableau de bord de suivi", 4, 2, 100],
  ["Audit et contrôle interne", 4, 0, 0],
  ["Scanners et contrôle non intrusif", 0, 2, 100],
  ["Pont bascule", 0, 1, 60],
  ["Portail des opérateurs", 0, 0, 0],
  ["Réhabilitation des bureaux frontaliers", 1, 1, 45],
  ["Construction de postes de contrôle", 1, 0, 0],
  ["Réseau et data center", 1, 2, 100],
  ["Scanners aux points d'entrée", 2, 1, 70],
  ["Véhicules et matériel de terrain", 2, 2, 100],
  ["Laboratoire douanier", 2, 0, 0],
  ["Formation des agents", 3, 1, 55],
  ["Cursus e-learning", 3, 0, 0],
  ["Bourses et échanges d'expertise", 3, 2, 100],
  ["Code de conduite et intégrité", 4, 1, 35],
  ["Tableau de bord de suivi", 4, 2, 100],
  ["Audit et contrôle interne", 4, 0, 0],
].map((p, i) => ({
  id: i,
  n: p[0],
  a: AXES[p[1]],
  s: p[2],
  p: p[3],
  i: PIMG[i % 6],
}));
const ST = ["Non commencé", "En cours", "Terminé"],
  SC = ["s-no", "s-wip", "s-ok"];
const MEM = [
  ["comite_p.jpeg", "Comité de pilotage", ""],
  ["coordon1.jpeg", "MADIMBA MUANZA Franck", "Coordonnateur"],
  [
    "coorda1.jpeg",
    "KAMBERE MALIKI Alain",
    "Coordonnateur adjoint chargé des questions des reformes",
  ],
  [
    "coorda2.jpeg",
    "BOLILI SASA Daudet",
    "Coordonnateur adjoint chargé des relations avec les partenaires du secteur public",
  ],
  ,
].map((m, i) => ({ id: i, i: m[0], n: m[1], r: m[2] }));
const DOCS = [
  ["Arrêté", "Texte", 2025, "docs/ARRETE INT 057.pdf"],
  /*["Rapport d'activités annuel", "Rapports", 2024],
  ["Guide de l'opérateur économique", "Guides", 2025],
  ["Cadre juridique de la réforme douanière", "Textes", 2023],
  ["Plan de passation des marchés", "Marchés", 2025]*/,
];
const KPI = [
  [
    "9",
    "Axes de réforme",
    "img/ELOG.png",
    "Neuf axes complémentaires structurent les actions de modernisation de l’administration douanière.",
  ],
  [
    "120+",
    "Sites",
    "img/PLAN.png",
    "Sites douaniers concernés par le déploiement des actions du programme.",
  ],
  [
    "45+",
    "Projets",
    "img/DOCS.png",
    "Projets visant à améliorer les équipements, les infrastructures et les services douanier.",
  ],
  [
    "801M",
    "Budget global ($)",
    "img/ARGENT.png",
    "Enveloppe globale mobilisée pour la mise en œuvre du programme.",
  ],
  [
    "200+",
    "Agents formés",
    "img/PERSONNE.png",
    "Agents formés aux procédures dématérialisées.",
  ],
  [
    "4",
    "Partenaires clés",
    "img/ICON.png",
    "Institutions techniques et financières qui accompagnent le programme.",
  ],
];
/* ===== Utilitaires ===== */
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const fd = (d) =>
  new Date(d).toLocaleDateString(currentLang === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
const src = (f) => encodeURI(IM(f));
const bg = (f) => `style="--ph:url('${src(f)}')"`;
const banner = (t, sub, trail, ph = "les coordons.jpeg") =>
  `<div class="head" ${bg(ph)}><div><h1>${t}</h1>${sub ? `<p>${sub}</p>` : ""}<div class="crumb">${trail}</div></div></div>`;
const crumb = (...x) =>
  ["<a href='#accueil'>Home</a>", ...x].join(" <span>/</span> ");
const newsCard = (n) =>
  `<a class="card news-card rv" href="#actualite/${n.id}"><div class="img"><img src="${src(n.i)}" alt="${n.t}" loading="lazy" onerror="this.remove()"></div><div class="in"><span class="tag">${n.c}</span><h3>${n.t}</h3><time>${fd(n.d)}</time><p>${n.x}</p></div></a>`;
const axisCard = (a, i) =>
  `<a class="card axc rv" href="${AXIS_PDF[i]}" target="_blank" rel="noopener" aria-label="${a}"><span class="n">${String(i + 1).padStart(2, "0")}</span><h3>${a}</h3></a>`;
const projCard = (p) =>
  `<a class="card pc rv" href="#projet/${p.id}" ${bg(p.i)}><span class="dot ${SC[p.s]}" title="${ST[p.s]}"></span><div class="in"><span class="tag">${p.a}</span><h3>${p.n}</h3><small>${ST[p.s]} · ${p.p}%</small></div></a>`;
/* ===== Pages ===== */
const P = {};
P.accueil =
  () => `<section class="hero"><div class="wrap"><h1>Moderniser la Douane pour une Administration Plus Performante et Transparente</h1><p>L'UGP-MOD accompagne la mise en œuvre du Programme de Modernisation de la Douane afin de renforcer l'efficacité des services douaniers, faciliter les échanges commerciaux et soutenir le développement économique de la République Démocratique du Congo.</p><a class="btn" href="#apropos">→ En savoir plus</a></div></section><div class="stripe"></div>
<section class="stats"><div class="wrap"><h2 class="rv">UGP-MOD en chiffres</h2><p class="lead rv">L'UGP-MOD incarne l'engagement de l'État à moderniser l'administration douanière. Ces chiffres clés témoignent de l'impact croissant du programme.</p><div class="kpis">${KPI.map((k) => `<div class="kpi rv"><div class="top"><strong data-n="${k[0]}">${k[0]}</strong><i><img src="${k[2]}" alt =""></i></div><b>${k[1]}</b><p>${k[3]}</p></div>`).join("")}</div></div></section>
<section class="sec home-projects"><div class="wrap"><h2 class="rv">Nos projets</h2><p class="lead rv">Découvrez les principaux axes de modernisation de la douane.</p><div class="grid axes-preview">${AXES.slice(0, 3).map(axisCard).join("")}</div><p class="more"><a class="btn alt" href="#projets">Voir plus</a></p></div></section>
<section class="sec gray"><div class="wrap"><h2 class="rv">Dernières actualités</h2><p class="lead rv">Suivez la vie du programme.</p><div class="grid">${NEWS.slice(0, 3).map(newsCard).join("")}</div><p class="more"><a class="btn alt" href="#actualites">Toutes les actualités</a></p></div></section>`;

P.apropos = () =>
  banner(
    "Qui sommes nous ?",
    "",
    crumb("A propos", "Qui sommes nous ?"),
    "la coordination.jpeg",
  ) +
  `<section class="sec"><div class="wrap two"><div class="rv"><h2>Présentation</h2><p>L'Unité de Gestion du Programme de Modernisation de la Douane (UGP-MOD) assure la coordination, le suivi et l'évaluation de la mise en œuvre du Programme de Modernisation de la Douane en République Démocratique du Congo.</p><p style="margin-top:14px">Le programme vise à doter l'administration douanière d'outils, de procédures et de compétences à la hauteur des standards internationaux.</p></div><div class="rv"><img src="${src("les coordons.jpeg")}" alt="L'équipe de l'UGP-MOD" style="border-radius:14px;width:100%;height:300px;object-fit:cover;background-size:cover;background-position:center;"></div></div></section>
<section class="sec gray"><div class="wrap"><div class="tri">
<div class="rv">
  <h3>Nos missions</h3>
  <ul>
    <li>Veiller à la gestion efficiente des ressources affectées à la modernisation, notamment celles issues de la RRI</li>
    <li>Assurer la coordination opérationnelle avec les partenaires techniques et financiers</li>
    <!--<li>Gérer les ressources financières</li>
    <li>Rendre compte aux partenaires</li>-->
  </ul>
</div>
<div class="rv">
  <h3>Nos objectifs</h3>
  <ul>
    <li>Contribuer à la mise en œuvre du Programme national de modernisation de la douane, conformément aux orientations du Gouvernement</li>
    <li>Coordonner les aspects techniques des projets de modernisation douanière</li>
    <li>Assurer la coordination financière et administrative des projets du programme</li>
    <li>Travailler avec la Direction générale des douanes et accises pour coordonner les projets de modernisation</li>
    <!--<li>Sécuriser les recettes de l'État</li>-->
    </ul>
    </div>
<div class="rv"><h3>Nos valeurs</h3><ul><li>Intégrité</li><li>Transparence</li><li>Performance</li><li>Redevabilité</li><li>Esprit d'équipe</li></ul></div></div></div></section>
<section class="sec"><div class="wrap org"><h2 class="rv">Gouvernance de l'UGP-MOD</h2><p class="lead rv">Les membres de la direction. Cliquez sur une carte pour lire la biographie.</p><div class="grid">${MEM.map((m) => `<a class="card rv" href="#membre/${m.id}"><div class="img"><img src="${src(m.i)}" alt="${m.n}" loading="lazy" onerror="this.remove()"></div><div class="in"><h3>${m.n}</h3><small>${m.r}</small></div></a>`).join("")}</div></div></section>`;

let pq = "",
  pa = "Tous",
  pp = 1;
const PER = 6;
P.projets = () =>
  banner("Nos projets", "", crumb("Nos projets"), "coordon6.jpeg") +
  `<section class="sec projects-page"><div class="wrap"><h2 class="rv">Les 9 axes de réforme</h2><p class="lead rv">Cliquez directement sur une carte pour ouvrir la fiche PDF de l’axe.</p><div class="grid axes-grid">${AXES.map(axisCard).join("")}</div></div></section>`;
function drawProj() {
  const q = pq.toLowerCase().trim();
  const r = PROJ.filter(
    (p) =>
      (pa === "Tous" || p.a === pa) &&
      (!q || (p.n + " " + p.a).toLowerCase().includes(q)),
  );
  const pages = Math.max(1, Math.ceil(r.length / PER));
  pp = Math.min(pp, pages);
  const cur = r.slice((pp - 1) * PER, pp * PER);
  $("#plist").innerHTML = cur.length
    ? AXES.filter((a) => cur.some((p) => p.a === a))
        .map(
          (a) =>
            `<h3 class="axis">${a}</h3><div class="grid">${cur
              .filter((p) => p.a === a)
              .map(projCard)
              .join("")}</div>`,
        )
        .join("")
    : "<p>Aucun projet ne correspond à votre recherche.</p>";
  $("#pager").innerHTML =
    pages < 2
      ? ""
      : `<button ${pp < 2 ? "disabled" : ""} data-g="${pp - 1}" aria-label="Page précédente">←</button>` +
        Array.from(
          { length: pages },
          (_, i) =>
            `<button class="${i + 1 === pp ? "on" : ""}" data-g="${i + 1}">${i + 1}</button>`,
        ).join("") +
        `<button ${pp >= pages ? "disabled" : ""} data-g="${pp + 1}" aria-label="Page suivante">→</button>`;
  reveal();
  applyLanguage($("#plist")?.parentElement || document.body);
}
P.projet = (id) => {
  const p = PROJ[id];
  if (!p) return P.projets();
  return (
    banner(p.n, p.a, crumb("<a href='#projets'>Nos projets</a>", p.n), p.i) +
    `<section class="sec"><div class="wrap"><a class="back" href="#projets">← Retour aux projets</a><img class="dimg" src="${src(p.i)}" alt="${p.n}"><div class="dgrid"><div><h2>${p.n}</h2><p>${LOREM[0]}</p><p style="margin-top:12px">${LOREM[1]}</p></div><aside class="box2"><p><b>Axe :</b> ${p.a}</p><p><b>État :</b> <i class="dot ${SC[p.s]}"></i>${ST[p.s]}</p><p><b>Avancement :</b> ${p.p}%</p><div class="prog"><i style="width:0" data-w="${p.p}%"></i></div></aside></div></div></section>`
  );
};
P.membre = (id) => {
  const m = MEM[id];
  if (!m) return P.apropos();
  return (
    banner(
      m.n,
      m.r,
      crumb("<a href='#apropos'>A propos</a>", "Organigramme"),
      "la coordination.jpeg",
    ) +
    `<section class="sec"><div class="wrap"><article class="art"><a class="back" href="#apropos">← Retour à l'organigramme</a><span class="tag">${m.r}</span><h1>${m.n}</h1><img class="portrait" src="${src(m.i)}" alt="${m.n}"><p>${LOREM[0]}</p><p>${LOREM[1]}</p><p>${LOREM[2]}</p><p>${LOREM[3]}</p></article></div></section>`
  );
};
let nshow = 4,
  ncat = "Tout";
P.actualites = () =>
  banner("Actualités", "", crumb("Actualités"), "coordon7.jpeg") +
  `<section class="sec"><div class="wrap"><div class="filters" id="cats"></div><div class="grid" id="news"></div><p class="more" id="nmore"><button class="btn alt" id="nbtn">Voir plus d'actualités</button></p></div></section>`;
function drawNews() {
  const cats = ["Tout", ...new Set(NEWS.map((n) => n.c))];
  $("#cats").innerHTML = cats
    .map((c) => `<button class="${c === ncat ? "on" : ""}">${c}</button>`)
    .join("");
  const l = NEWS.filter((n) => ncat === "Tout" || n.c === ncat);
  $("#news").innerHTML = l.slice(0, nshow).map(newsCard).join("");
  $("#nmore").style.display = l.length > nshow ? "" : "none";
  reveal();
  applyLanguage($("#news")?.parentElement || document.body);
}
P.actualite = (id) => {
  const n = NEWS[id];
  if (!n) return P.actualites();
  const rel = NEWS.filter((x) => x.id !== n.id).slice(0, 3);
  return (
    banner(
      "Actualités",
      "",
      crumb("<a href='#actualites'>Actualités</a>", n.c),
      n.i,
    ) +
    `<section class="sec"><div class="wrap"><article class="mag"><a class="back" href="#actualites">← Toutes les actualités</a><div class="cover"><img src="${src(n.i)}" alt="${n.t}"><div><span class="tag">${n.c}</span><h1>${n.t}</h1><time>${fd(n.d)}</time></div></div><div class="cols"><p><b>${n.x}</b> ${LOREM[0]}</p><blockquote>« ${n.x} »</blockquote><p>${LOREM[1]}</p><p>${LOREM[2]}</p><p>${LOREM[3]}</p></div></article>
  <h2 style="margin-top:56px">À lire aussi</h2><div class="grid" style="margin-top:18px">${rel.map(newsCard).join("")}</div></div></section>`
  );
};
let dq = "";
P.documents = () =>
  banner(
    "Documents",
    "Rapports, guides et textes de référence.",
    crumb("Documents"),
    "coordon1.jpeg",
  ) +
  `<section class="sec"><div class="wrap"><div class="tools"><input id="q" type="search" placeholder="Rechercher un document" aria-label="Rechercher un document"></div><div id="docs"></div></div></section>`;
function drawDocs() {
  const r = DOCS.filter((d) => (d[0] + d[1]).toLowerCase().includes(dq));
  $("#docs").innerHTML = r.length
    ? r
        .map(
          (d) =>
            `<div class="doc"><div><b>${d[0]}</b><br><span class="tag">${d[1]}</span> <span class="tag">${d[2]}</span></div><a href="${d[3]}" download="Arrête.pdf">Télécharger ↓</a></div>`,
        )
        .join("")
    : "<p>Aucun document ne correspond à votre recherche.</p>";
  applyLanguage($("#docs")?.parentElement || document.body);
}
P.partenaires = () =>
  banner(
    "Partenaires",
    "Ensemble pour une douane moderne.",
    crumb("Partenaires"),
    "coordon parte.jpeg",
  ) +
  `<section class="sec sec-part">
    <div class="wrap">
      <div class="parts"><div class="rv parts"><img src="img/FINANCE.png" alt="Ministère des Finances"></div><div class="rv parts"><img src="img/LOGO DGDA.png" alt="DGDA"></div></div></div></section>`;
P.contact = () =>
  banner(
    "Contact",
    "Une question ? Écrivez-nous.",
    crumb("Contact"),
    "coordon2.jpeg",
  ) +
  `<section class="sec"><div class="wrap two"><form class="f" id="cf" novalidate><div><label>Nom complet<input required autocomplete="name"><span class="err"></span></label></div><div><label>E-mail<input type="email" required autocomplete="email"><span class="err"></span></label></div><div><label>Message<textarea rows="5" required></textarea><span class="err"></span></label></div><button class="btn">Envoyer le message</button><p class="ok" id="cmsg" role="status"></p></form><div><h2>Coordonnées</h2><p>Kinshasa / Gombe<br>26, Av LUBEFU<br>République Démocratique du Congo<br>info@ugp-mod.cd</p></div></div></section>`;
/* ===== Animations ===== */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
      const n = e.target.querySelector("[data-n]");
      if (n) count(n);
    }),
  { threshold: 0.15 },
);
function reveal() {
  $$(".rv:not(.in)").forEach((e) => io.observe(e));
}
function count(el) {
  const raw = el.dataset.n,
    m = raw.match(/^(\d+)(.*)$/);
  if (!m) return;
  const t = +m[1],
    t0 = performance.now();
  (function s(now) {
    const k = Math.min(1, (now - t0) / 1400);
    el.textContent = Math.round(t * (1 - Math.pow(1 - k, 3))) + m[2];
    if (k < 1) requestAnimationFrame(s);
  })(t0);
}
function check(f, ok) {
  f.onsubmit = (e) => {
    e.preventDefault();
    let good = true;
    [...f.querySelectorAll("[required]")].forEach((i) => {
      const bad =
        !i.value.trim() ||
        (i.type === "email" && !/^\S+@\S+\.\S+$/.test(i.value));
      i.nextElementSibling.textContent = bad
        ? "Champ obligatoire ou invalide."
        : "";
      if (bad) good = false;
    });
    if (good) ok(f);
  };
}

/* ===== Préférences : thème sombre + traduction FR/EN ===== */
let currentLang = localStorage.getItem("ugp-lang") || "fr";

const EN = {
  "ACCUEIL": "HOME",
  "À PROPOS": "ABOUT",
  "NOS PROJETS": "OUR PROJECTS",
  "ACTUALITÉS": "NEWS",
  "DOCUMENTS": "DOCUMENTS",
  "PARTENAIRES": "PARTNERS",
  "CONTACT": "CONTACT",
  "Connexion": "Login",
  "Identifiant": "Username",
  "Mot de passe": "Password",
  "Se connecter": "Sign in",
  "Fermer": "Close",
  "Navigation": "Navigation",
  "À propos": "About",
  "Nos projets": "Our projects",
  "Liens": "Links",
  "Institutions": "Institutions",
  "Suivez-nous": "Follow us",
  "Tous droits réservés.": "All rights reserved.",
  "Mode sombre": "Dark mode",
  "Sombre": "Dark",
  "Clair": "Light",
  "Menu": "Menu",
  "Moderniser la Douane pour une Administration Plus Performante et Transparente": "Modernising Customs for a More Efficient and Transparent Administration",
  "L'UGP-MOD accompagne la mise en œuvre du Programme de Modernisation de la Douane afin de renforcer l'efficacité des services douaniers, faciliter les échanges commerciaux et soutenir le développement économique de la République Démocratique du Congo.": "UGP-MOD supports the implementation of the Customs Modernisation Programme to improve customs efficiency, facilitate trade and support the economic development of the Democratic Republic of the Congo.",
  "→ En savoir plus": "→ Learn more",
  "UGP-MOD en chiffres": "UGP-MOD in figures",
  "L'UGP-MOD incarne l'engagement de l'État à moderniser l'administration douanière. Ces chiffres clés témoignent de l'impact croissant du programme.": "UGP-MOD reflects the State's commitment to modernising customs administration. These key figures show the programme's growing impact.",
  "Axes de réforme": "Reform areas",
  "Sites": "Sites",
  "Projets": "Projects",
  "Budget global ($)": "Overall budget ($)",
  "Agents formés": "Agents trained",
  "Partenaires clés": "Key partners",
  "Neuf axes complémentaires structurent les actions de modernisation de l’administration douanière.": "Nine complementary reform areas structure the modernisation of the customs administration.",
  "Sites douaniers concernés par le déploiement des actions du programme.": "Customs sites covered by the programme's implementation activities.",
  "Projets visant à améliorer les équipements, les infrastructures et les services douanier.": "Projects designed to improve customs equipment, infrastructure and services.",
  "Enveloppe globale mobilisée pour la mise en œuvre du programme.": "Overall funding mobilised for programme implementation.",
  "Agents formés aux procédures dématérialisées.": "Agents trained in digital procedures.",
  "Institutions techniques et financières qui accompagnent le programme.": "Technical and financial institutions supporting the programme.",
  "Les actions concrètes menées pour une douane moderne.": "Concrete actions for a modern customs administration.",
  "Découvrez les principaux axes de modernisation de la douane.": "Discover the main customs modernisation reform areas.",
  "Voir plus": "See more",
  "Tous les projets": "All projects",
  "Dernières actualités": "Latest news",
  "Suivez la vie du programme.": "Follow the programme's latest developments.",
  "Toutes les actualités": "All news",
  "Qui sommes nous ?": "Who are we?",
  "A propos": "About",
  "Présentation": "Overview",
  "Nos missions": "Our missions",
  "Nos objectifs": "Our objectives",
  "Nos valeurs": "Our values",
  "Intégrité": "Integrity",
  "Transparence": "Transparency",
  "Performance": "Performance",
  "Redevabilité": "Accountability",
  "Esprit d'équipe": "Team spirit",
  "Gouvernance de l'UGP-MOD": "UGP-MOD governance",
  "Les membres de la direction. Cliquez sur une carte pour lire la biographie.": "Management team members. Click a card to read the biography.",
  "Les 9 axes de réforme": "The 9 reform areas",
  "Cliquez sur un axe pour télécharger sa fiche détaillée au format PDF.": "Click a reform area to open its detailed PDF sheet.",
  "Cliquez directement sur une carte pour ouvrir la fiche PDF de l’axe.": "Click a card directly to open the reform area's PDF sheet.",
  "Voir la fiche PDF ↓": "View PDF sheet ↓",
  "Rechercher par nom ou par axe": "Search by name or reform area",
  "Filtrer par axe": "Filter by reform area",
  "Tous": "All",
  "Tout": "All",
  "Terminé": "Completed",
  "En cours": "In progress",
  "Non commencé": "Not started",
  "Aucun projet ne correspond à votre recherche.": "No project matches your search.",
  "Retour aux projets": "Back to projects",
  "Axe :": "Area:",
  "État :": "Status:",
  "Avancement :": "Progress:",
  "Actualité": "News",
  "Voir plus d'actualités": "Show more news",
  "Toutes les actualités": "All news",
  "À lire aussi": "Related news",
  "Rapports, guides et textes de référence.": "Reports, guides and reference texts.",
  "Rechercher un document": "Search documents",
  "Télécharger ↓": "Download ↓",
  "Aucun document ne correspond à votre recherche.": "No document matches your search.",
  "Ensemble pour une douane moderne.": "Together for a modern customs administration.",
  "Une question ? Écrivez-nous.": "Have a question? Contact us.",
  "Nom complet": "Full name",
  "E-mail": "Email",
  "Message": "Message",
  "Envoyer le message": "Send message",
  "Coordonnées": "Contact details",
  "Champ obligatoire ou invalide.": "Required or invalid field.",
  "Merci, votre message a bien été envoyé. Nous vous répondrons sous 48 h.": "Thank you. Your message has been sent. We will reply within 48 hours.",
  "Comité de pilotage": "Steering Committee",
  "Coordonnateur": "Coordinator",
  "Coordonnateur adjoint chargé des questions des reformes": "Deputy Coordinator in charge of reform matters",
  "Coordonnateur adjoint chargé des relations avec les partenaires du secteur public": "Deputy Coordinator in charge of relations with public-sector partners",
  "Document de projet du Programme de Modernisation": "Customs Modernisation Programme project document",
  "Rapport d'activités annuel": "Annual activity report",
  "Guide de l'opérateur économique": "Economic operator guide",
  "Cadre juridique de la réforme douanière": "Legal framework for customs reform",
  "Plan de passation des marchés": "Procurement plan",
  "Rapports": "Reports",
  "Guides": "Guides",
  "Textes": "Legal texts",
  "Marchés": "Procurement",
  "Programme": "Programme",
  "Formation": "Training",
  "Partenariat": "Partnership",
  "Lancement de la phase 2 du programme de modernisation": "Launch of phase 2 of the modernisation programme",
  "Formation des agents aux procédures dématérialisées": "Training agents in digital procedures",
  "Atelier avec les opérateurs économiques": "Workshop with economic operators",
  "Signature d'un accord avec un partenaire technique": "Signing of an agreement with a technical partner",
  "Visite de terrain aux postes frontaliers": "Field visit to border posts",
  "Session de renforcement des capacités": "Capacity-building session",
  "Revue annuelle du programme": "Annual programme review",
  "Rencontre avec les partenaires financiers": "Meeting with financial partners",
  "Cérémonie de lancement des travaux de déploiement des systèmes d'information douaniers.": "Launch ceremony for the deployment of customs information systems.",
  "Plus de 200 agents formés à la déclaration en ligne et au suivi électronique des dossiers.": "More than 200 agents trained in online declarations and electronic case tracking.",
  "Échanges avec le secteur privé pour simplifier les formalités du commerce transfrontalier.": "Discussions with the private sector to simplify cross-border trade formalities.",
  "Un nouvel appui pour renforcer la transparence et le contrôle des recettes douanières.": "New support to strengthen transparency and customs revenue control.",
  "Évaluation de l'état d'avancement des chantiers de réhabilitation.": "Assessment of progress on rehabilitation works.",
  "Nouvelle session dédiée aux cadres de la coordination.": "New session dedicated to coordination managers.",
  "Bilan des activités et priorités de l'année à venir.": "Review of activities and priorities for the coming year.",
  "Point sur les décaissements et les prochaines étapes.": "Update on disbursements and next steps.",
  "Développement et modernisation des infrastructures douanières": "Development and modernisation of customs infrastructure",
  "Surveillance, contrôle et sécurité aux postes douaniers": "Surveillance, control and security at customs posts",
  "Déploiement et modernisation des équipements de contrôle": "Deployment and modernisation of inspection equipment",
  "Renforcement du système d'informations de la DGDA": "Strengthening the DGDA information system",
  "Développement et renforcement des solutions énergétiques": "Development and strengthening of energy solutions",
  "Renforcement des capacités et formation des agents des douanes": "Capacity building and training for customs officers",
  "Réforme du cadre juridique et réglementaire douanier": "Reform of the customs legal and regulatory framework",
  "Amélioration de la gouvernance et lutte contre la fraude": "Improving governance and combating fraud",
  "Facilitation du commerce et partenariat avec le secteur privé": "Trade facilitation and partnership with the private sector"
};
const FR = Object.fromEntries(Object.entries(EN).map(([fr, en]) => [en, fr]));

function translateString(value, lang = currentLang) {
  if (!value || typeof value !== "string") return value;
  const clean = value.trim();
  const dict = lang === "en" ? EN : FR;
  if (dict[clean]) return value.replace(clean, dict[clean]);
  return value;
}

function applyLanguage(root = document.body) {
  document.documentElement.lang = currentLang === "en" ? "en" : "fr";
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.parentElement || ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) return;
    node.nodeValue = translateString(node.nodeValue);
  });
  root.querySelectorAll?.("[placeholder],[aria-label],[title]").forEach((el) => {
    ["placeholder", "aria-label", "title"].forEach((attr) => {
      if (el.hasAttribute(attr)) el.setAttribute(attr, translateString(el.getAttribute(attr)));
    });
  });
  const langBtn = document.querySelector("#langToggle");
  if (langBtn) {
    langBtn.querySelector(".tool-label").textContent = currentLang === "en" ? "EN" : "FR";
    langBtn.querySelector(".lang-alt").textContent = currentLang === "en" ? "FR" : "EN";
    langBtn.setAttribute("aria-label", currentLang === "en" ? "Afficher le site en français" : "Passer le site en anglais");
  }
}

function applyTheme(theme) {
  const dark = theme === "dark";
  document.documentElement.classList.toggle("dark", dark);
  const btn = document.querySelector("#themeToggle");
  if (!btn) return;
  btn.querySelector(".tool-icon").textContent = dark ? "☀" : "☾";
  btn.setAttribute("aria-label", dark ? (currentLang === "en" ? "Enable light mode" : "Activer le mode clair") : (currentLang === "en" ? "Enable dark mode" : "Activer le mode sombre"));
  btn.title = dark ? (currentLang === "en" ? "Light mode" : "Mode clair") : (currentLang === "en" ? "Dark mode" : "Mode sombre");
}

/* ===== Routage ===== */
const TITLES = {
  accueil: "Accueil",
  apropos: "À propos",
  projets: "Nos projets",
  projet: "Projet",
  membre: "Direction",
  actualites: "Actualités",
  actualite: "Actualité",
  documents: "Documents",
  partenaires: "Partenaires",
  contact: "Contact",
};
function route() {
  const [name0, arg] = (location.hash || "#accueil").slice(1).split("/");
  const name = P[name0] ? name0 : "accueil";
  const app = $("#app");
  $("#bar").style.width = "70%";
  app.innerHTML = P[name](arg === undefined ? undefined : +arg);
  app.className = "pgin";
  void app.offsetWidth;
  const top =
    { projet: "projets", membre: "apropos", actualite: "actualites" }[name] ||
    name;
  $$("nav a[data-p]").forEach((a) =>
    a.classList.toggle("on", a.dataset.p === top),
  );
  $("nav").classList.remove("open");
  document.title = TITLES[name] + " | UGP-MOD";
  scrollTo(0, 0);
  if (name === "projets") {
    pp = 1;
  }
  if (name === "actualites") {
    nshow = 4;
    ncat = "Tout";
    drawNews();
  }
  if (name === "documents") {
    dq = "";
    drawDocs();
  }
  if (name === "contact")
    check($("#cf"), (f) => {
      $("#cmsg").textContent =
        "Merci, votre message a bien été envoyé. Nous vous répondrons sous 48 h.";
      f.reset();
    });
  reveal();
  applyLanguage(app);
  applyTheme(localStorage.getItem("ugp-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  setTimeout(
    () => $$(".prog i").forEach((b) => (b.style.width = b.dataset.w)),
    100,
  );
  setTimeout(() => {
    $("#bar").style.width = "100%";
    setTimeout(() => ($("#bar").style.width = "0"), 400);
  }, 250);
}
document.addEventListener("input", (e) => {
  if (e.target.id === "pq") {
    pq = e.target.value;
    pp = 1;
    drawProj();
  }
  if (e.target.id === "q") {
    dq = e.target.value.toLowerCase();
    drawDocs();
  }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "pa") {
    pa = e.target.value;
    pp = 1;
    drawProj();
  }
});
document.addEventListener("click", (e) => {
  const g = e.target.closest("[data-g]");
  if (g && !g.disabled) {
    pp = +g.dataset.g;
    drawProj();
    $("#plist").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (e.target.closest("#cats") && e.target.tagName === "BUTTON") {
    ncat = e.target.textContent;
    nshow = 4;
    drawNews();
  }
  if (e.target.id === "nbtn") {
    nshow += 4;
    drawNews();
  }
});
addEventListener("hashchange", route);
$(".burger").onclick = () => {
  const n = $("nav");
  n.classList.toggle("open");
  $(".burger").setAttribute("aria-expanded", n.classList.contains("open"));
};
const mod = $("#mod");
$(".login").onclick = (e) => {
  e.preventDefault();
  mod.classList.add("on");
  $("#lu").focus();
};
mod.onclick = (e) => {
  if (e.target === mod || e.target.dataset.x) mod.classList.remove("on");
};
addEventListener("keydown", (e) => {
  if (e.key === "Escape") mod.classList.remove("on");
});
check($("#lf"), () => {
  $("#lmsg").textContent =
    "Connexion à brancher sur le serveur d'authentification.";
});
$("#y").textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("ugp-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);
applyLanguage(document.body);

$("#themeToggle").addEventListener("click", () => {
  const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("ugp-theme", next);
  applyTheme(next);
});

$("#langToggle").addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("ugp-lang", currentLang);
  route();
  applyLanguage(document.body);
});

route();
addEventListener("load", () =>
  setTimeout(() => $("#loader").classList.add("off"), 500),
);

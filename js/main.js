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
  "Digitalisation",
  "Infrastructures",
  "Équipements",
  "Capacités humaines",
  "Gouvernance",
];
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
  ["Scanners et contrôle non intrusif", 0, 2, 100],
  ["Pont bascule", 0, 1, 60],
 /*["Portail des opérateurs", 0, 0, 0],
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
  ["Audit et contrôle interne", 4, 0, 0]*/,
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
  ["coordon dg.jpeg", "Comité de pilotage", ""],
  ["coordon1.jpeg", "MADIMBA MUANZA Franck", "Coordonnateur"],
  [
    "coordon2.jpeg",
    "KAMBERE MALIKI Alain",
    "Coordonnateur adjoint chargé des questions des reformes",
  ],
  [
    "coordon3.jpeg",
    "BOLILI SASA Daudet",
    "Coordonnateur adjoint chargé des relations avec les partenaires du secteur public",
  ],
  ,
].map((m, i) => ({ id: i, i: m[0], n: m[1], r: m[2] }));
const DOCS = [
  ["Document de projet du Programme de Modernisation", "Rapports", 2024],
  ["Rapport d'activités annuel", "Rapports", 2024],
  ["Guide de l'opérateur économique", "Guides", 2025],
  ["Cadre juridique de la réforme douanière", "Textes", 2023],
  ["Plan de passation des marchés", "Marchés", 2025],
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
  new Date(d).toLocaleDateString("fr-FR", {
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
  `<a class="card rv" href="#actualite/${n.id}"><div class="img"><img src="${src(n.i)}" alt="${n.t}" loading="lazy" onerror="this.remove()"></div><div class="in"><span class="tag">${n.c}</span><h3>${n.t}</h3><time>${fd(n.d)}</time><p>${n.x}</p></div></a>`;
const projCard = (p) =>
  `<a class="card pc rv" href="#projet/${p.id}" ${bg(p.i)}><span class="dot ${SC[p.s]}" title="${ST[p.s]}"></span><div class="in"><span class="tag">${p.a}</span><h3>${p.n}</h3><small>${ST[p.s]} · ${p.p}%</small></div></a>`;
/* ===== Pages ===== */
const P = {};
P.accueil =
  () => `<section class="hero"><div class="wrap"><h1>Moderniser la Douane pour une Administration Plus Performante et Transparente</h1><p>L'UGP-MOD accompagne la mise en œuvre du Programme de Modernisation de la Douane afin de renforcer l'efficacité des services douaniers, faciliter les échanges commerciaux et soutenir le développement économique de la République Démocratique du Congo.</p><a class="btn" href="#apropos">→ En savoir plus</a></div></section><div class="stripe"></div>
<section class="stats"><div class="wrap"><h2 class="rv">UGP-MOD en chiffres</h2><p class="lead rv">L'UGP-MOD incarne l'engagement de l'État à moderniser l'administration douanière. Ces chiffres clés témoignent de l'impact croissant du programme.</p><div class="kpis">${KPI.map((k) => `<div class="kpi rv"><div class="top"><strong data-n="${k[0]}">${k[0]}</strong><i><img src="${k[2]}" alt =""></i></div><b>${k[1]}</b><p>${k[3]}</p></div>`).join("")}</div></div></section>
<section class="sec"><div class="wrap"><h2 class="rv">Nos projets</h2><p class="lead rv">Les actions concrètes menées pour une douane moderne.</p><div class="grid">${PROJ.filter(
    (p) => p.s > 0,
  )
    .slice(0, 4)
    .map(projCard)
    .join(
      "",
    )}</div><p class="more"><a class="btn alt" href="#projets">Tous les projets</a></p></div></section>
<section class="sec gray"><div class="wrap"><h2 class="rv">Dernières actualités</h2><p class="lead rv">Suivez la vie du programme.</p><div class="grid">${NEWS.slice(0, 3).map(newsCard).join("")}</div><p class="more"><a class="btn alt" href="#actualites">Toutes les actualités</a></p></div></section>`;

P.apropos = () =>
  banner(
    "Qui sommes nous ?",
    "",
    crumb("A propos", "Qui sommes nous ?"),
    "la coordination.jpeg",
  ) +
  `<section class="sec"><div class="wrap two"><div class="rv"><h2>Présentation</h2><p>L'Unité de Gestion du Programme de Modernisation de la Douane (UGP-MOD) assure la coordination, le suivi et l'évaluation de la mise en œuvre du Programme de Modernisation de la Douane en République Démocratique du Congo.</p><p style="margin-top:14px">Le programme vise à doter l'administration douanière d'outils, de procédures et de compétences à la hauteur des standards internationaux.</p></div><div class="rv"><img src="${src("les coordons.jpeg")}" alt="L'équipe de l'UGP-MOD" style="border-radius:14px;width:100%;height:300px;object-fit:cover"></div></div></section>
<section class="sec gray"><div class="wrap"><div class="tri">
<div class="rv"><h3>Nos missions</h3><ul><li>Coordonner la mise en œuvre du programme</li><li>Suivre et évaluer les projets</li><li>Gérer les ressources financières</li><li>Rendre compte aux partenaires</li></ul></div>
<div class="rv"><h3>Nos objectifs</h3><ul><li>Simplifier et dématérialiser les procédures</li><li>Accroître la transparence et la traçabilité</li><li>Faciliter le commerce transfrontalier</li><li>Renforcer les capacités des agents</li><li>Sécuriser les recettes de l'État</li></ul></div>
<div class="rv"><h3>Nos valeurs</h3><ul><li>Intégrité</li><li>Transparence</li><li>Performance</li><li>Redevabilité</li><li>Esprit d'équipe</li></ul></div></div></div></section>
<section class="sec"><div class="wrap org"><h2 class="rv">Gouvernance de l'UGP-MOD</h2><p class="lead rv">Les membres de la direction. Cliquez sur une carte pour lire la biographie.</p><div class="grid">${MEM.map((m) => `<a class="card rv" href="#membre/${m.id}"><div class="img"><img src="${src(m.i)}" alt="${m.n}" loading="lazy" onerror="this.remove()"></div><div class="in"><h3>${m.n}</h3><small>${m.r}</small></div></a>`).join("")}</div></div></section>`;

let pq = "",
  pa = "Tous",
  pp = 1;
const PER = 6;
P.projets = () =>
  banner("Nos projets", "", crumb("Nos projets"), "coordon6.jpeg") +
  `<section class="sec"><div class="wrap"><div class="tools"><input id="pq" type="search" placeholder="Rechercher par nom ou par axe" aria-label="Rechercher un projet" value="${pq}"><select id="pa" aria-label="Filtrer par axe">${["Tous", ...AXES].map((a) => `<option ${a === pa ? "selected" : ""}>${a}</option>`).join("")}</select></div>
<div class="legend"><span><i class="dot s-ok"></i>Terminé</span><span><i class="dot s-wip"></i>En cours</span><span><i class="dot s-no"></i>Non commencé</span></div><div id="plist"></div><div class="pager" id="pager"></div></div></section>`;
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
            `<div class="doc"><div><b>${d[0]}</b><br><span class="tag">${d[1]}</span> <span class="tag">${d[2]}</span></div><a href="#" download>Télécharger ↓</a></div>`,
        )
        .join("")
    : "<p>Aucun document ne correspond à votre recherche.</p>";
}
P.partenaires = () =>
  banner(
    "Partenaires",
    "Ensemble pour une douane moderne.",
    crumb("Partenaires"),
    "coordon parte.jpeg",
  ) +
  `<section class="sec"><div class="wrap"><div class="parts">${["Ministère des Finances", "Direction Générale des Douanes", "Partenaire technique 1", "Partenaire financier 2"].map((x) => `<div class="rv">${x}</div>`).join("")}</div></div></section>`;
P.contact = () =>
  banner(
    "Contact",
    "Une question ? Écrivez-nous.",
    crumb("Contact"),
    "coordon2.jpeg",
  ) +
  `<section class="sec"><div class="wrap two"><form class="f" id="cf" novalidate><div><label>Nom complet<input required autocomplete="name"><span class="err"></span></label></div><div><label>E-mail<input type="email" required autocomplete="email"><span class="err"></span></label></div><div><label>Message<textarea rows="5" required></textarea><span class="err"></span></label></div><button class="btn">Envoyer le message</button><p class="ok" id="cmsg" role="status"></p></form><div><h2>Coordonnées</h2><p>Kinshasa / Gombe<br>République Démocratique du Congo<br>contact@ugp-mod.cd<br>Lun – Ven, 8h – 16h</p></div></div></section>`;
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
    drawProj();
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
route();
addEventListener("load", () =>
  setTimeout(() => $("#loader").classList.add("off"), 500),
);

// ═══════════════════════════════════════════════════════
//  DIAMINE BIJOUTERIE — Catalogue Complet
//  Catégories : bagues | colliers | bracelets | boucles
// ═══════════════════════════════════════════════════════

const CATALOG = [
  // ─── BAGUES ─────────────────────────────────────────
  {
    id: 1,
    name: "Solitaire Topaze Bleue",
    cat: "bagues",
    catLabel: "Bague",
    img: "assets/images/bague-topaze-bleue.jpg",
    desc: "Topaze bleue ovale sertie griffes, entourage diamants — Or blanc",
    featured: true
  },
  {
    id: 2,
    name: "Carré Baguettes",
    cat: "bagues",
    catLabel: "Bague",
    img: "assets/images/bague-carre-baguette.jpg",
    desc: "Diamants taille baguette et brillant, double entourage pavé — Or blanc",
    featured: false
  },
  {
    id: 3,
    name: "Dôme Pavé Diamants",
    cat: "bagues",
    catLabel: "Bague",
    img: "assets/images/bague-dome-pave-cluster.jpg",
    desc: "Pavage diamants asymétrique en dôme — Or rose",
    featured: false
  },
  {
    id: 4,
    name: "Trio Anneaux Croisés",
    cat: "bagues",
    catLabel: "Bague",
    img: "assets/images/bague-trio-anneaux.jpg",
    desc: "Trois anneaux entrelacés — pavé diamants, torsadé or rose et or blanc",
    featured: false
  },
  {
    id: 5,
    name: "Large Pavé Or Rose",
    cat: "bagues",
    catLabel: "Bague",
    img: "assets/images/bague-pave-large-or-rose.jpg",
    desc: "Large bandeau pavé diamants, bordure perlée — Or rose",
    featured: false
  },
  {
    id: 6,
    name: "Dôme Pavé Diamants II",
    cat: "bagues",
    catLabel: "Bague",
    img: "assets/images/bague-dome-pave-tissu.jpg",
    desc: "Pavage diamants dense en volume — Or rose et blanc",
    featured: false
  },
  {
    id: 7,
    name: "Carré Baguettes Or Rose",
    cat: "bagues",
    catLabel: "Bague",
    img: "assets/images/bague-carre-baguette-or-rose.jpg",
    desc: "Diamants baguette et brillants en entourage carré — Or rose",
    featured: false
  },

  // ─── COLLIERS ────────────────────────────────────────
  {
    id: 8,
    name: "Pendentif Arête de Poisson",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-arete-poisson.jpg",
    desc: "Pendentif articulé pavé diamants sur chaîne fine — Or blanc",
    featured: true
  },
  {
    id: 9,
    name: "Cercle Perlé",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-cercle-perle.jpg",
    desc: "Pendentif cercle ajouré pavé diamants et perles d'or — Or rose",
    featured: false
  },
  {
    id: 10,
    name: "Pendentif Clé",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-pendentif-cle.jpg",
    desc: "Pendentif clé ajouré serti diamants — Or rose",
    featured: false
  },
  {
    id: 11,
    name: "Cercle Gravé",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-pendentif-cercle-love.jpg",
    desc: "Pendentif rond gravé serti d'un diamant — Or rose",
    featured: false
  },
  {
    id: 12,
    name: "Ligne de Diamants",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-ligne-diamants.jpg",
    desc: "Sept diamants en ligne courbe sur chaîne fine — Or",
    featured: false
  },
  {
    id: 13,
    name: "Sautoir Pampilles",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-sautoir-pampilles.jpg",
    desc: "Long sautoir à pampilles de diamants — Or",
    featured: false
  },
  {
    id: 14,
    name: "Pendentif Bague",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-pendentif-bague.jpg",
    desc: "Pendentif anneau pavé sur chaîne fine — Or rose",
    featured: false
  },
  {
    id: 15,
    name: "Chute Dégradée",
    cat: "colliers",
    catLabel: "Collier",
    img: "assets/images/collier-chute-diamants.jpg",
    desc: "Trois diamants en chute progressive — Or",
    featured: false
  },

  // ─── BRACELETS ───────────────────────────────────────
  {
    id: 16,
    name: "Tennis Bicolore",
    cat: "bracelets",
    catLabel: "Bracelet",
    img: "assets/images/bracelet-tennis-bicolore.jpg",
    desc: "Ligne de diamants sertis griffes, monture bicolore — Or rose et blanc",
    featured: true
  },
  {
    id: 17,
    name: "Manchette Ajourée",
    cat: "bracelets",
    catLabel: "Bracelet",
    img: "assets/images/bracelet-manchette-ajouree.jpg",
    desc: "Manchette ouverte double rangée pavée diamants — Or rose",
    featured: false
  },
  {
    id: 18,
    name: "Fine Ligne Diamants",
    cat: "bracelets",
    catLabel: "Bracelet",
    img: "assets/images/bracelet-fin-ligne-diamants.jpg",
    desc: "Jonc torsadé, diamants sertis griffes au centre — Or rose",
    featured: false
  },
  {
    id: 19,
    name: "Cluster Pavé",
    cat: "bracelets",
    catLabel: "Bracelet",
    img: "assets/images/bracelet-cluster-pave.jpg",
    desc: "Volume pavé diamants bicolore, esprit bague statement — Or rose et blanc",
    featured: false
  },
  {
    id: 24,
    name: "Ouvert Baguettes",
    cat: "bracelets",
    catLabel: "Bracelet",
    img: "assets/images/bracelet-ouvert-baguettes.jpg",
    desc: "Jonc côtelé ouvert, fermoirs sertis diamants baguette — Or rose et blanc",
    featured: false
  },

  // ─── BOUCLES D'OREILLES ──────────────────────────────
  {
    id: 20,
    name: "Pendantes Étoile",
    cat: "boucles",
    catLabel: "Boucles d'oreilles",
    img: "assets/images/boucles-etoile-diamants.jpg",
    desc: "Fleur pavée et pampilles de diamants — Or blanc",
    featured: true
  },
  {
    id: 21,
    name: "Pendantes Fleurs Pavées",
    cat: "boucles",
    catLabel: "Boucles d'oreilles",
    img: "assets/images/boucles-fleurs-pavees.jpg",
    desc: "Double fleur pavée en cascade — Or",
    featured: false
  },
  {
    id: 22,
    name: "Cascade Diamants",
    cat: "boucles",
    catLabel: "Boucles d'oreilles",
    img: "assets/images/boucles-cascade.jpg",
    desc: "Cascade végétale sertie diamants — Or blanc",
    featured: false
  },
  {
    id: 23,
    name: "Goutte Or",
    cat: "boucles",
    catLabel: "Boucles d'oreilles",
    img: "assets/images/boucles-goutte-or.jpg",
    desc: "Puce goutte texturée — Or",
    featured: false
  }
];

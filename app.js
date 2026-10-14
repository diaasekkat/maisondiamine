// ═══════════════════════════════════════════════════════════
//  DIAMINE FINE JEWELRY — INTERACTIVE APP LOGIC
// ═══════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initMobileMenu();
  init3DHeroTilt();
  renderFeatured();
  initCatalogueGrid();
  initLightbox();
  initGalleryLightbox();
  initScrollReveal();
  initVideoObserver();
});

// ─── CURSEUR LUXE ──────────────────────────────────────────
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll("a, button, .product-card, .tab-btn").forEach(el => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

// ─── MENU MOBILE ───────────────────────────────────────────
function initMobileMenu() {
  const burger = document.getElementById("navBurger");
  const menu = document.getElementById("mobMenu");
  const close = document.getElementById("mobClose");
  if (!burger || !menu) return;

  burger.addEventListener("click", () => menu.classList.add("open"));
  if (close) close.addEventListener("click", () => menu.classList.remove("open"));

  document.querySelectorAll(".mob-link").forEach(link => {
    link.addEventListener("click", (e) => {
      menu.classList.remove("open");
      const filter = link.getAttribute("data-filter");
      if (filter) filterCategory(filter);
    });
  });
}

// ─── HERO 3D TILT EFFECT ───────────────────────────────────
function init3DHeroTilt() {
  const stage = document.getElementById("ringStage");
  const img = document.getElementById("heroRingImg");
  if (!stage || !img) return;

  stage.addEventListener("mousemove", (e) => {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    img.style.transform = `translateY(-12px) rotateY(${x * 25}deg) rotateX(${-y * 25}deg) scale(1.05)`;
  });

  stage.addEventListener("mouseleave", () => {
    img.style.transform = `translateY(0) rotateY(0deg) rotateX(0deg) scale(1)`;
  });
}

// ─── PIÈCES VEDETTES ────────────────────────────────────────
function renderFeatured() {
  const wrap = document.getElementById("featuredGrid");
  if (!wrap || typeof CATALOG === "undefined") return;

  const featured = CATALOG.filter(i => i.featured).slice(0, 4);

  wrap.innerHTML = featured.map((item, i) => `
    <div class="feat-card js-reveal" style="transition-delay:${i * 0.1}s">
      <div class="feat-image-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="feat-info">
        <span class="feat-num">0${i + 1}</span>
        <span class="card-cat">${item.catLabel}</span>
        <h3 class="card-title">${item.name}</h3>
      </div>
    </div>
  `).join("");

  wrap.querySelectorAll(".feat-card").forEach((card, i) => {
    card.addEventListener("click", () => openLightbox(featured[i].id));
  });

  observeNewElements();
}

// ─── CATALOGUE GRID ────────────────────────────────────────
let currentCat = "all";
let filteredItems = [];

function initCatalogueGrid() {
  if (typeof CATALOG === "undefined") return;

  filteredItems = CATALOG;
  renderGrid(filteredItems);

  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const cat = tab.getAttribute("data-cat");
      filterCategory(cat);
    });
  });
}

function renderGrid(items) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card js-reveal";

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        <div class="card-zoom-badge">◈</div>
      </div>
      <div class="card-info">
        <span class="card-cat">${item.catLabel}</span>
        <h3 class="card-title">${item.name}</h3>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(item.id));
    grid.appendChild(card);
  });

  observeNewElements();
}

function filterCategory(cat) {
  currentCat = cat;
  filteredItems = cat === "all" ? CATALOG : CATALOG.filter(i => i.cat === cat);

  const grid = document.getElementById("productGrid");
  if (grid) {
    grid.style.opacity = "0";
    grid.style.transform = "translateY(15px)";
    setTimeout(() => {
      renderGrid(filteredItems);
      grid.style.opacity = "1";
      grid.style.transform = "translateY(0)";
    }, 250);
  }
}

// ─── SCROLL REVEAL ─────────────────────────────────────────
let observer;
function initScrollReveal() {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  observeNewElements();
}

function observeNewElements() {
  document.querySelectorAll(".js-reveal").forEach(el => {
    if (observer) observer.observe(el);
  });
}

// ─── GALERIE ÉDITORIALE (lightbox image simple) ─────────────
function initGalleryLightbox() {
  const items = document.querySelectorAll(".gal-item img");
  if (!items.length) return;

  const lb = document.createElement("div");
  lb.className = "gal-lightbox";
  lb.innerHTML = `<button class="gal-lb-close">✕</button><img src="" alt="" />`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector("img");
  const closeBtn = lb.querySelector(".gal-lb-close");

  items.forEach(img => {
    img.addEventListener("click", () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeGalLb = () => {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };
  closeBtn.addEventListener("click", closeGalLb);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeGalLb(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("open")) closeGalLb();
  });
}

// ─── VIDÉOS "EN MOUVEMENT" (lecture différée) ───────────────
function initVideoObserver() {
  const videos = document.querySelectorAll(".motion-video");
  if (!videos.length) return;

  const vObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold: 0.35 });

  videos.forEach(v => vObserver.observe(v));
}

// ─── LIGHTBOX HD ───────────────────────────────────────────
let currentLbIndex = 0;

function initLightbox() {
  const lb = document.getElementById("lightbox");
  const close = document.getElementById("lbClose");
  const bg = document.getElementById("lbBg");
  const prev = document.getElementById("lbPrev");
  const next = document.getElementById("lbNext");

  if (!lb) return;

  const closeLb = () => {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (close) close.addEventListener("click", closeLb);
  if (bg) bg.addEventListener("click", closeLb);

  if (prev) prev.addEventListener("click", () => navLb(-1));
  if (next) next.addEventListener("click", () => navLb(1));

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") navLb(-1);
    if (e.key === "ArrowRight") navLb(1);
  });
}

let lbList = CATALOG;

function openLightbox(id) {
  const lb = document.getElementById("lightbox");
  if (!lb) return;

  const scoped = currentCat === "all" ? CATALOG : filteredItems;
  let idx = scoped.findIndex(i => i.id === id);
  lbList = scoped;

  if (idx === -1) {
    // item belongs to a different category than the active filter
    idx = CATALOG.findIndex(i => i.id === id);
    lbList = CATALOG;
  }
  if (idx === -1) return;

  currentLbIndex = idx;
  updateLbContent(lbList[currentLbIndex]);
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function updateLbContent(item) {
  const img = document.getElementById("lbImg");
  const title = document.getElementById("lbTitle");
  const tag = document.getElementById("lbTag");
  const desc = document.getElementById("lbDesc");

  if (img) {
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = item.img;
      img.alt = item.name;
      img.style.opacity = "1";
    }, 150);
  }
  if (title) title.textContent = item.name;
  if (tag) tag.textContent = item.catLabel;
  if (desc) desc.textContent = item.desc || "";
}

function navLb(dir) {
  if (lbList.length <= 1) return;

  currentLbIndex += dir;
  if (currentLbIndex < 0) currentLbIndex = lbList.length - 1;
  if (currentLbIndex >= lbList.length) currentLbIndex = 0;

  updateLbContent(lbList[currentLbIndex]);
}

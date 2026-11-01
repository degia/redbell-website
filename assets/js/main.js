(function () {
  const C = window.RB_CONFIG, D = window.RB_DATA;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const isExternal = (u) => /^https?:\/\//.test(u);
  const shopUrl = C.inhouseShop.url || "/shop";

  /* ---------- Global links ---------- */
  document.querySelectorAll('[data-link="inhouse"]').forEach((a) => (a.href = shopUrl));
  document.querySelectorAll('[data-link="whatsapp"]').forEach((a) => (a.href = C.contact.whatsapp));
  document.querySelectorAll('[data-link="email"]').forEach((a) => (a.href = "mailto:" + C.contact.email));
  const emailText = $("#emailText"); if (emailText) emailText.textContent = C.contact.email;
  const addr = $("#addr"); if (addr) addr.textContent = C.contact.address;
  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  const badge = $("#inhouseBadge");
  if (badge && C.inhouseShop.status === "live") { badge.textContent = "Sudah Buka!"; badge.classList.add("is-live"); }

  /* ---------- Nav ---------- */
  const burger = $("#burger"), links = $("#navLinks");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      burger.classList.toggle("burger-open", open);
      burger.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { links.classList.remove("is-open"); burger.classList.remove("burger-open"); }));
  }

  /* ---------- Marquee ---------- */
  const mq = $("#marquee");
  if (mq) {
    const items = ["Strawberry", "Pandan", "Red Velvet", "Mangga", "Taro", "Matcha", "Coffee Mocca", "Durian", "Blueberry", "Vanili", "Kopi Gula Aren", "Leci"]
      .map((n) => `<span><i style="background:${D.flavorColor[n] || "#FFD23F"}"></i>${n}</span>`).join("");
    mq.innerHTML = items + items + `<span>#PastiBagusHasilnya</span>` + items + items + `<span>#PastiBagusHasilnya</span>`;
  }

  /* ---------- Categories ---------- */
  const cg = $("#catGrid");
  if (cg) cg.innerHTML = D.categories.map((c) => `
    <a href="#katalog" class="cat reveal" data-cat="${c.id}" style="--g1:${c.grad[0]};--g2:${c.grad[1]}">
      <span class="cat__emoji">${c.emoji}</span>
      <h3>${c.name}</h3><p>${c.desc}</p><span class="cat__link">Lihat varian &rarr;</span>
    </a>`).join("");

  /* ---------- Marketplaces ---------- */
  const mpCard = (m) => {
    const ready = !!m.url;
    const tag = ready ? `<span class="mp__go">&rarr;</span>` : `<span class="tag-soon">Segera</span>`;
    const inner = `<span class="mp__icon">${esc(m.name[0])}</span><span class="mp__body"><b>${esc(m.name)}</b><span>${esc(m.note)}</span></span>${tag}`;
    return ready
      ? `<a class="mp" style="--mp:${m.color}" href="${esc(m.url)}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="mp is-soon" style="--mp:${m.color}" aria-disabled="true">${inner}</div>`;
  };
  const mg = $("#marketGrid"); if (mg) mg.innerHTML = C.marketplaces.map(mpCard).join("");
  const fm = $("#footerMarkets");
  if (fm) fm.innerHTML = C.marketplaces.filter((m) => m.url).map((m) => `<a href="${esc(m.url)}" target="_blank" rel="noopener">${esc(m.name)}</a>`).join("");

  /* ---------- Catalog ---------- */
  const typeName = { pasta: "Pasta", essence: "Essence", baking: "Baking", water: "Pewarna Cair", oil: "Pewarna Minyak", powder: "Pewarna Bubuk" };
  const all = [];
  Object.entries(D.products).forEach(([type, list]) =>
    list.forEach((p) => {
      const [name, hex] = Array.isArray(p) ? p : [p, D.flavorColor[p]];
      all.push({ type, name, hex: hex || ["#FFD6A5", "#CAFFBF", "#9BF6FF", "#BDB2FF", "#FFC6FF", "#FDFFB6"][all.length % 6] });
    })
  );
  const tabsDef = [["all", "Semua"], ["pasta", "Pasta"], ["essence", "Essence"], ["water", "Pewarna Cair"], ["oil", "Pewarna Minyak"], ["powder", "Pewarna Bubuk"], ["baking", "Baking"]];
  let active = "all", q = "", expanded = false; const LIMIT = 18;
  const tabs = $("#tabs"), cat = $("#catalog"), search = $("#search");

  function renderTabs() {
    tabs.innerHTML = tabsDef.map(([id, label]) => {
      const n = id === "all" ? all.length : all.filter((x) => x.type === id).length;
      return `<button class="tab ${id === active ? "is-active" : ""}" role="tab" aria-selected="${id === active}" data-id="${id}">${label} <small>(${n})</small></button>`;
    }).join("");
  }
  function renderCatalog() {
    const list = all.filter((x) => (active === "all" || x.type === active) && x.name.toLowerCase().includes(q));
    const total = list.length;
    const shown = (expanded || q) ? list : list.slice(0, LIMIT);
    const more = $("#moreBtn");
    if (more) { more.hidden = shown.length >= total; more.textContent = `Tampilkan semua (${total}) ↓`; }
    const target = isExternal(shopUrl) ? ' target="_blank" rel="noopener"' : "";
    cat.innerHTML = total
      ? shown.map((x) => `<a class="item" href="${esc(shopUrl)}"${target}>
          <span class="item__swatch" style="--sw:${x.hex}"></span>
          <span class="item__type">${typeName[x.type]}</span>
          <span class="item__name">${esc(x.name)}</span>
          <span class="item__buy">Beli sekarang &rarr;</span></a>`).join("")
      : `<p class="empty">Varian tidak ditemukan. Coba kata kunci lain 🙂</p>`;
  }
  if (tabs && cat) {
    renderTabs(); renderCatalog();
    tabs.addEventListener("click", (e) => { const b = e.target.closest(".tab"); if (!b) return; active = b.dataset.id; expanded = false; renderTabs(); renderCatalog(); });
    $("#moreBtn").addEventListener("click", () => { expanded = true; renderCatalog(); });
    search.addEventListener("input", () => { q = search.value.trim().toLowerCase(); renderCatalog(); });
    document.querySelectorAll(".cat").forEach((c) => c.addEventListener("click", () => { active = c.dataset.cat; expanded = false; renderTabs(); renderCatalog(); }));
  }

  /* ---------- Recipes & stories ---------- */
  const rg = $("#recipeGrid");
  if (rg) rg.innerHTML = D.recipes.map((r) => `
    <a class="recipe reveal" href="${C.legacyBase + r.path}" target="_blank" rel="noopener">
      <div class="recipe__img" style="--g1:${r.grad[0]};--g2:${r.grad[1]}"><span class="recipe__tag">${r.tag}</span>${r.emoji}</div>
      <div class="recipe__body"><h4>${r.title}</h4><span>Lihat resep &rarr;</span></div>
    </a>`).join("");
  const sg = $("#storyGrid");
  if (sg) sg.innerHTML = D.stories.map((s) => `
    <article class="story reveal" style="--g1:${s.grad[0]};--g2:${s.grad[1]}">
      <div class="story__emoji">${s.emoji}</div><h4>${s.title}</h4><p>${s.text}</p>
      <a href="${C.legacyBase + s.path}" target="_blank" rel="noopener">Baca cerita &rarr;</a>
    </article>`).join("");

  /* ---------- Timeline ---------- */
  const tl = $("#timeline"), dots = ["#E4002B", "#FF4D8D", "#FF9F1C", "#E0A800", "#06D6A0", "#00A6E0", "#9B5DE5"];
  if (tl) tl.innerHTML = D.timeline.slice().reverse().map(([y, t], i) => `<li style="--dot:${dots[i % dots.length]}"><b>${y}</b><p>${t}</p></li>`).join("");

  /* ---------- Socials ---------- */
  const icons = {
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3 0-4.1.1C4.3 2.3 2.3 4.3 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.6 2.2 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.6-.2 5.6-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.6-2.2-5.6-5.8-5.8C15 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 2.7.1 4 1.4 4.1 4.1.1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.7-1.4 4-4.1 4.1-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1-.1-1.3-.1-4s0-3 .1-4C4 5.3 5.3 4 8 3.9c1-.1 1.3-.1 4-.1z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.6L14 1.5c-4 0-4.9 3-4.9 4.9v2.1H6.8v4h2.3V22.5H14V12.5h3.3l.4-4H14z"/></svg>'
  };
  const so = $("#socials");
  if (so) so.innerHTML = Object.entries(C.social).filter(([, u]) => u).map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener" aria-label="${k}">${icons[k] || k}</a>`).join("");

  /* ---------- Reveal on scroll ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.12 }) : null;
  document.querySelectorAll(".reveal").forEach((el) => (io ? io.observe(el) : el.classList.add("is-in")));
})();

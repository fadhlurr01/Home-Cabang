export function initCabangRuntime(onOpenConsult, onOpenPort) {

  var WA_NUMBER = "6281234567890";
  function openWA(text) {
    window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
  }
  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("open");
  }

  var bpTabs = document.querySelectorAll(".bp-tab");
  var bpTrack = document.getElementById("bpTrack");
  var bpView = document.getElementById("bpViewport");
  var bpDots = document.getElementById("bpDots");
  var bpBodies = Array.prototype.slice.call(document.querySelectorAll(".bp-body"));
  var bpIdx = 0, bpCount = bpBodies.length;

  function bpRender() {
    if (bpTrack) bpTrack.style.transform = "translateX(" + (-bpIdx * 100) + "%)";
    bpTabs.forEach(function(t, i) { t.classList.toggle("active", i === bpIdx); });
    if (bpDots) Array.prototype.forEach.call(bpDots.children, function(d, i) { d.classList.toggle("active", i === bpIdx); });
  }
  function bpGo(i) {
    if (i < 0 || i >= bpCount) return;
    bpIdx = i; bpRender();
  }
  bpTabs.forEach(function(tab, i) {
    tab.addEventListener("click", function() { bpGo(i); });
  });
  if (bpDots) {
    for (var bpi = 0; bpi < bpCount; bpi++) {
      (function(j) {
        var d = document.createElement("button");
        d.className = "bp-dot" + (j === 0 ? " active" : "");
        d.setAttribute("aria-label", "Cabang " + (j + 1));
        d.addEventListener("click", function() { bpGo(j); });
        bpDots.appendChild(d);
      })(bpi);
    }
  }
  if (bpView && bpTrack) {
    var bpDrag = false, bpStartX = 0, bpDx = 0;
    bpView.addEventListener("pointerdown", function(e) {
      bpDrag = true; bpStartX = e.clientX; bpDx = 0;
      bpTrack.style.transition = "none";
    });
    window.addEventListener("pointermove", function(e) {
      if (!bpDrag) return;
      bpDx = e.clientX - bpStartX;
      bpTrack.style.transform = "translateX(" + (-bpIdx * 100 + (bpDx / bpView.clientWidth) * 100) + "%)";
    });
    window.addEventListener("pointerup", function() {
      if (!bpDrag) return;
      bpDrag = false;
      bpTrack.style.transition = "";
      if (Math.abs(bpDx) > 50) bpGo(bpIdx + (bpDx < 0 ? 1 : -1)); else bpRender();
      bpDx = 0;
    });
  }
  bpRender();

  function toggleFaq(btn) {
    var item = btn.parentElement;
    var isOpen = item.classList.contains("open");
    item.classList.toggle("open");
    var ans = item.querySelector(".faq-a");
    ans.style.maxHeight = isOpen ? "0px" : ans.scrollHeight + "px";
  }

  var faqItems = document.querySelectorAll(".faq-item.open");
  faqItems.forEach(function(item) {
    var ans = item.querySelector(".faq-a");
    ans.style.maxHeight = ans.scrollHeight + "px";
  });

  function toggleQuick() {
    document.getElementById("floatQuick").classList.toggle("show");
  }

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ============ Scroll Progress Bar ============ */
  var spBar = document.getElementById("scrollProgress");
  function updateProgress() {
    if (!spBar) return;
    var h = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
    var p = h > 0 ? (getScrollTop() / h) : 0;
    spBar.style.transform = "scaleX(" + Math.min(1, Math.max(0, p)) + ")";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* =====================================================================
     PORTFOLIO — TEMPLATE WEBSITE SISWA PKL
     ---------------------------------------------------------------------
     CARA MENAMBAH WEBSITE SISWA ANDA:
     Salin salah satu objek di PORTFOLIO_DATA di bawah, lalu ganti isinya.
       name      : judul website / template
       industry  : kategori industri (badge di kartu)
       tags      : daftar kata kunci singkat
       desc      : deskripsi 1-2 kalimat
       url       : (opsional) alamat LIVE website siswa — dipakai untuk
                   preview modal (iframe) & tombol "Buka Langsung"
       shots     : (opsional) array screenshot untuk carousel di kartu.
                   Tiap item: "url-gambar"  ATAU  {src:"url", view:"desktop|mobile"}
                   jika KOSONG, dan srcdoc terisi, screenshot dibuat otomatis
       srcdoc    : (opsional) HTML template utuh — preview hidup tanpa server.
                   Untuk website siswa cukup isi url (+ shots), srcdoc = ""
       view      : tampilan awal di modal — "desktop" atau "mobile"
     ===================================================================== */
  var PORTFOLIO_DATA = [
    {
      name: "KUBIKK",
      industry: "E-Commerce · Brick Universe",
      tags: ["Brick Modular", "AI Master Builder", "Creator 15%"],
      desc: "Template e-commerce brick modular premium: set arsitektur desainer, studio virtual builder dengan bill-of-materials real-time, dan Master Builder AI berbasis Gemini.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "500+", l: "Set Desain" }, { v: "15%", l: "Royalti Kreator" }],
      url: "https://kubik-delta.vercel.app/", view: "desktop"
    },
    {
      name: "ICONIQ Atelier",
      industry: "E-Commerce · Fashion Doll",
      tags: ["Fashion Doll", "Atelier 3D", "AI Stylist"],
      desc: "Template e-commerce boneka fashion haute couture: siluet kustom, lemari pakaian mix-and-match, AI Creative Director, dan garansi kolektor 30 hari.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "14+", l: "Articulation" }, { v: "30", l: "Hari Garansi" }],
      url: "https://iconic-livid.vercel.app/", view: "desktop"
    },
    {
      name: "PLAYVAULT",
      industry: "E-Commerce · Toys & Collectibles",
      tags: ["Action Figure", "Tabletop", "Limited Drop"],
      desc: "Template e-commerce mainan & koleksi: action figure, tabletop games, limited drops, dan proteksi packaging mint grade dengan ekspedisi premium.",
      stats: [{ v: "4.8", l: "Rating" }, { v: "1.000+", l: "Koleksi" }, { v: "Mint", l: "Grade" }],
      url: "https://plytter.vercel.app/", view: "desktop"
    },
    {
      name: "NEXUS ARCHIVE",
      industry: "E-Commerce · Digital Vault",
      tags: ["Collectibles", "Digital Vault", "Curated Drop"],
      desc: "Template digital vault untuk koleksi modern: presentasi produk bersih tanpa distraksi, reservasi artifact, dan pengalaman kurasi yang terasa premium.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "Kurasi", l: "Premium" }, { v: "Vault", l: "Digital" }],
      url: "https://alluring-nexus-vault-core.base44.app/", view: "desktop"
    },
    {
      name: "NEOPOP® Collective",
      industry: "E-Commerce · Art Toys",
      tags: ["Art Toy", "Blind Box", "NFC Authentik"],
      desc: "Template toko art toy desainer & blind box: seri artist eksklusif, studio unboxing virtual, klub kolektor, dan sertifikat autentikasi NFC.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "Secret", l: "Chase" }, { v: "NFC", l: "Sertifikat" }],
      url: "https://neopop-one.vercel.app/", view: "desktop"
    },
    {
      name: "Kokoro Atelier",
      industry: "E-Commerce · Kawaii Lifestyle",
      tags: ["Kawaii", "Character Capsule", "Tokyo Direct"],
      desc: "Template e-commerce gaya hidup kawaii kontemporer: koleksi desainer, character capsules, dan fulfillment Tokyo Direct dengan segel lilin emas.",
      stats: [{ v: "4.8", l: "Rating" }, { v: "Tokyo", l: "Direct" }, { v: "Capsule", l: "Series" }],
      url: "https://kokoro-one.vercel.app/", view: "desktop"
    },
    {
      name: "POUF & COMPANION",
      industry: "E-Commerce · Luxury Plush",
      tags: ["Plush Designer", "AI Gift Match", "Hug-Tested"],
      desc: "Template atelier plush mewah: boneka plush desainer whimsical, AI gift matching, custom packaging, dan bahan hypoallergenic ramah lingkungan.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "AI Gift", l: "Matching" }, { v: "100%", l: "Hug-Tested" }],
      url: "https://pouf-pi.vercel.app/", view: "desktop"
    },
    {
      name: "KRAFTBEAR",
      industry: "E-Commerce · Plush Workshop",
      tags: ["Custom Plushie", "Voice Record", "Workshop 3D"],
      desc: "Template workshop plushie interaktif: desain, isi, dandani, rekam suara, hingga adopsi boneka custom lengkap dengan sertifikat kelahiran.",
      stats: [{ v: "4.8", l: "Rating" }, { v: "Custom", l: "Adopt" }, { v: "Birth", l: "Cert" }],
      url: "https://krft-sepia.vercel.app/", view: "desktop"
    },
    {
      name: "BAEREN Atelier",
      industry: "E-Commerce · Heirloom Plush",
      tags: ["Teddy Heirloom", "Limited Edition", "Bespoke"],
      desc: "Template atelier boneka beruang heirloom mewah: edisi terbatas bernomor, konfigurator bespoke, dan AI gifting concierge dengan provenance tracking.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "No. 1-999", l: "Limited" }, { v: "5-Way", l: "Jointed" }],
      url: "https://beren-olive.vercel.app/", view: "desktop"
    },
    {
      name: "WonderLudo",
      industry: "E-Commerce · Play Emporium",
      tags: ["Play Emporium", "AI Gift Advisor", "Multi-Page"],
      desc: "Template emporium mainan ultra-modern ala Hamleys: 8+ kategori, multi-page shopping, AI gift advisor, dan checkout tanpa hambatan.",
      stats: [{ v: "4.8", l: "Rating" }, { v: "8+", l: "Kategori" }, { v: "AI Gift", l: "Advisor" }],
      url: "https://wonder-ludo.vercel.app/", view: "desktop"
    },
    {
      name: "KIDORA Studio",
      industry: "E-Commerce · Edu Toys",
      tags: ["Edu Toys", "Pediatrician-Backed", "Smart Gift"],
      desc: "Template e-commerce mainan perkembangan: kurasi milestone, rekomendasi dokter anak, baby registry, dan garansi kepuasan 30 hari.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "30-Day", l: "Guarantee" }, { v: "Dokter", l: "Anak" }],
      url: "https://kidor.vercel.app/", view: "desktop"
    },
    {
      name: "LumiPlay™",
      industry: "E-Commerce · Play Lab",
      tags: ["Sensory Toys", "AI Concierge", "Play Plan"],
      desc: "Template mainan perkembangan & sensory essentials: Pediatric AI Concierge yang menyusun play plan per tahap milestone anak.",
      stats: [{ v: "4.8", l: "Rating" }, { v: "AI", l: "Pediatric" }, { v: "Play", l: "Plan" }],
      url: "https://lumiply.vercel.app/", view: "desktop"
    },
    {
      name: "Kidadu",
      industry: "E-Commerce · Montessori",
      tags: ["Montessori", "Beechwood", "Screen-Free"],
      desc: "Template toko mainan edukasi bebas layar: mainan kayu beechwood berkelanjutan berbasis prinsip Montessori untuk perkembangan anak.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "100%", l: "Beechwood" }, { v: "Screen", l: "Free" }],
      url: "https://kiddu-six.vercel.app/", view: "desktop"
    },
    {
      name: "SPINVERSE",
      industry: "E-Commerce · Entertainment",
      tags: ["Brand Ikonik", "PlayMatch AI", "Play Labs"],
      desc: "Template universe mainan & hiburan: brand ikonik, interactive play labs, dan rekomendasi hadiah PlayMatch AI.",
      stats: [{ v: "4.8", l: "Rating" }, { v: "PlayMatch", l: "AI" }, { v: "3D", l: "Hologram" }],
      url: "https://verde-beryl.vercel.app/", view: "desktop"
    },
    {
      name: "SMILEX Studio",
      industry: "E-Commerce · Anime Figures",
      tags: ["Anime Figure", "Pre-Order", "Preview 3D"],
      desc: "Template toko figure anime & art premium: pre-order, release schedule, dan preview 3D yang bisa diputar ala GoodSmile.",
      stats: [{ v: "4.9", l: "Rating" }, { v: "Pre-Order", l: "Ready" }, { v: "3D", l: "Rotate" }],
      url: "https://milextudio.vercel.app/", view: "desktop"
    }
  ];

  /* Buat slide preview LANGSUNG (iframe hidup) — desktop & mobile */
  function makeLiveSlide(p, designWidth) {
    var slide = document.createElement("div");
    slide.className = "port-slide";
    slide.setAttribute("data-label", designWidth === 390 ? "Tampilan Mobile" : "Tampilan Desktop");
    var live = document.createElement("div");
    live.className = "port-live";
    live.setAttribute("data-design", designWidth);
    var lif = document.createElement("iframe");
    lif.setAttribute("title", "Pratinjau " + p.name);
    lif.setAttribute("tabindex", "-1");
    if (p.srcdoc) lif.srcdoc = p.srcdoc; else if (p.url) lif.src = p.url;
    live.appendChild(lif);
    slide.appendChild(live);
    return slide;
  }

  /* Carousel per kartu: geser / panah / titik / auto-play */
  function setupCarousel(root) {
    var track = root.querySelector(".port-track");
    var slides = root.querySelectorAll(".port-slide");
    var dotsWrap = root.querySelector(".port-dots");
    if (!track || !slides.length) return;
    var idx = 0, timer = null, total = slides.length, dots = [];
    for (var i = 0; i < total; i++) {
      (function(j) {
        var d = document.createElement("span");
        d.addEventListener("click", function(ev) { ev.stopPropagation(); go(j); });
        dotsWrap.appendChild(d); dots.push(d);
      })(i);
    }
    function render() {
      track.style.transform = "translateX(" + (-idx * 100) + "%)";
      dots.forEach(function(d, i) { d.classList.toggle("active", i === idx); });
      var st = root.querySelector(".port-slide-tag span");
      if (st && slides[idx]) st.textContent = slides[idx].getAttribute("data-label") || "";
    }
    function go(i) { idx = (i + total) % total; render(); restart(); }
    function restart() {
      if (timer) clearInterval(timer);
      timer = setInterval(function() { go(idx + 1); }, 4500);
    }
    var next = root.querySelector(".port-arrow.next");
    var prev = root.querySelector(".port-arrow.prev");
    if (next) next.addEventListener("click", function(ev) { ev.stopPropagation(); go(idx + 1); });
    if (prev) prev.addEventListener("click", function(ev) { ev.stopPropagation(); go(idx - 1); });
    var startX = 0, dragging = false;
    track.addEventListener("pointerdown", function(ev) { dragging = true; startX = ev.clientX; });
    window.addEventListener("pointermove", function(ev) {
      if (!dragging) return;
      var dx = ev.clientX - startX;
      track.style.transition = "none";
      track.style.transform = "translateX(" + (-idx * 100 + (dx / root.clientWidth) * 100) + "%)";
    });
    window.addEventListener("pointerup", function(ev) {
      if (!dragging) return;
      dragging = false;
      var dx = ev.clientX - startX;
      track.style.transition = "";
      if (Math.abs(dx) > 55) go(idx + (dx < 0 ? 1 : -1)); else render();
    });
    root.addEventListener("mouseenter", function() { if (timer) clearInterval(timer); timer = null; });
    root.addEventListener("mouseleave", restart);
    root.addEventListener("touchstart", function() { if (timer) clearInterval(timer); }, { passive: true });
    root.addEventListener("touchend", restart, { passive: true });
    render(); restart();
  }

  /* Skala preview iframe agar pas di kartu (mendukung 2 slide: desktop & mobile) */
  function scaleLivePreviews() {
    document.querySelectorAll(".port-live").forEach(function(el) {
      var w = el.clientWidth;
      if (!w) return;
      var design = parseInt(el.getAttribute("data-design"), 10) || 1280;
      var s = w / design;
      var ifr = el.querySelector("iframe");
      ifr.style.transform = "scale(" + s + ")";
      ifr.style.height = Math.ceil(250 / s) + "px";
    });
  }

  /* Bangun satu kartu portfolio */
  function buildCard(p, idx) {
    var card = document.createElement("div");
    card.className = "port-card";

    var media = document.createElement("div");
    media.className = "port-media";

    var bb = document.createElement("div");
    bb.className = "port-browser";
    bb.appendChild(document.createElement("span")).className = "pb-dot";
    bb.appendChild(document.createElement("span")).className = "pb-dot";
    bb.appendChild(document.createElement("span")).className = "pb-dot";
    var bbUrl = document.createElement("span");
    bbUrl.className = "pb-url";
    bbUrl.textContent = p.url || (p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "template") + ".cabangos.id";
    bb.appendChild(bbUrl);
    media.appendChild(bb);

    var slideTag = document.createElement("span");
    slideTag.className = "port-slide-tag";
    slideTag.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg><span></span>';
    media.appendChild(slideTag);

    var hint = document.createElement("span");
    hint.className = "port-media-hint";
    hint.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg> Lihat Preview';
    media.appendChild(hint);

    card.appendChild(media);

    function buildCarousel(slides) {
      if (!slides || !slides.length) return;
      var track = document.createElement("div"); track.className = "port-track";
      var dotsWrap = document.createElement("div"); dotsWrap.className = "port-dots";
      slides.forEach(function(s) { track.appendChild(s); });
      var prev = document.createElement("button");
      prev.className = "port-arrow prev"; prev.setAttribute("aria-label", "Sebelumnya");
      prev.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
      var next = document.createElement("button");
      next.className = "port-arrow next"; next.setAttribute("aria-label", "Berikutnya");
      next.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';
      media.appendChild(track);
      media.appendChild(dotsWrap);
      media.appendChild(prev);
      media.appendChild(next);
      setupCarousel(media);
    }

    var slides = [];
    if (p.shots && p.shots.length) {
      p.shots.forEach(function(sh, i) {
        var src = (typeof sh === "string") ? sh : sh.src;
        var view = (typeof sh === "object" && sh.view) ? sh.view : (i === 0 ? "desktop" : "mobile");
        var s = document.createElement("div"); s.className = "port-slide";
        s.setAttribute("data-label", view === "mobile" ? "Tampilan Mobile" : "Tampilan Desktop");
        var img = document.createElement("img");
        img.src = src; img.alt = p.name + " — " + (i === 0 ? "versi Desktop" : "versi Mobile");
        img.loading = "lazy";
        s.appendChild(img);
        slides.push(s);
      });
    } else if (p.srcdoc) {
      slides = [makeLiveSlide(p, 1280), makeLiveSlide(p, 390)];
    } else if (p.url) {
      slides = [makeLiveSlide(p, 1280)];
    } else {
      var ph = document.createElement("div");
      ph.className = "port-slide";
      ph.setAttribute("data-label", "Belum ada preview");
      ph.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;color:var(--branch-slate-500);font-size:13px;font-weight:600";
      ph.textContent = "Belum ada preview";
      slides = [ph];
    }
    buildCarousel(slides);

    var info = document.createElement("div");
    info.className = "port-info";
    var row = document.createElement("div");
    row.className = "port-row";
    var ind = document.createElement("span");
    ind.className = "port-industry"; ind.textContent = p.industry;
    var lb = document.createElement("span");
    lb.className = "port-live-badge";
    lb.innerHTML = '<span class="pulse-dot"></span> Template Hidup';
    row.appendChild(ind); row.appendChild(lb);
    var h3 = document.createElement("h3"); h3.textContent = p.name;
    var desc = document.createElement("p"); desc.className = "port-desc"; desc.textContent = p.desc;
    var stats = document.createElement("div"); stats.className = "port-stats";
    (p.stats || []).slice(0, 3).forEach(function(sv) {
      var st = document.createElement("div"); st.className = "port-stat";
      var b = document.createElement("b"); b.textContent = sv.v;
      var sp = document.createElement("span"); sp.textContent = sv.l;
      st.appendChild(b); st.appendChild(sp);
      stats.appendChild(st);
    });
    var tags = document.createElement("div"); tags.className = "port-tags";
    (p.tags || []).forEach(function(t) {
      var sp = document.createElement("span"); sp.className = "port-tag"; sp.textContent = t;
      tags.appendChild(sp);
    });
    var open = document.createElement("button");
    open.className = "port-open";
    open.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg> Preview Website';
    open.addEventListener("click", function(ev) { ev.stopPropagation(); openPort(idx); });
    info.appendChild(row); info.appendChild(h3); info.appendChild(desc);
    if (stats.children.length) info.appendChild(stats);
    info.appendChild(tags); info.appendChild(open);
    card.appendChild(info);

    card.addEventListener("click", function() { openPort(idx); });
    document.getElementById("portGrid").appendChild(card);
    scaleLivePreviews();
  }

  PORTFOLIO_DATA.forEach(function(p, i) { buildCard(p, i); });
  window.addEventListener("resize", scaleLivePreviews);

  /* ============ System Node Chips — label every card as part of the live network ============ */
  (function addSysChips() {
    var groups = [
      { sel: ".seg-card",    label: "Modul" },
      { sel: ".price-card",  label: "Paket" },
      { sel: ".why-card",    label: "Node" },
      { sel: ".feature-col", label: "Node" },
      { sel: ".widget-card", label: "Widget" },
      { sel: ".addon-card",  label: "Modul" },
      { sel: ".port-card",   label: "Template" }
    ];
    var statuses = ["AKTIF", "SYNC", "LIVE"];
    function chipFor(label, num) {
      var c = document.createElement("div");
      c.className = "sys-chip";
      var st = statuses[(num + label.length) % statuses.length];
      c.innerHTML = '<span class="sc-node">' + label + ' ' + ("0" + num).slice(-2) + '</span><span class="sc-status"><i></i>' + st + '</span>';
      return c;
    }
    groups.forEach(function(g) {
      document.querySelectorAll(g.sel).forEach(function(card, i) {
        if (card.querySelector(".sys-chip")) return;
        card.insertBefore(chipFor(g.label, i + 1), card.firstChild);
      });
    });
  })();

  /* ============ Portfolio Modal (Live Preview) ============ */
  var currentPort = null;
  function openPort(idx) {
    var p = PORTFOLIO_DATA[idx];
    if (!p) return;
    currentPort = idx;
    document.getElementById("portModalName").textContent = p.name;
    document.getElementById("portModalUrl").textContent = p.url || (p.industry + " · Template Website #" + (idx + 1));
    var frame = document.getElementById("portFrame");
    frame.removeAttribute("src");
    if (p.srcdoc) frame.srcdoc = p.srcdoc;
    else if (p.url) frame.src = p.url;
    else frame.srcdoc = "<body style='margin:0;font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;color:#999'>Belum ada URL preview untuk template ini.</body>";
    var thumbs = document.getElementById("portThumbs");
    thumbs.innerHTML = "";
    var shots = (p.shots && p.shots.length) ? p.shots : [];
    shots.forEach(function(sh, i) {
      var src = (typeof sh === "string") ? sh : sh.src;
      var view = (typeof sh === "object" && sh.view) ? sh.view : (i === 0 ? "desktop" : "mobile");
      var t = document.createElement("img");
      t.className = "port-thumb" + (i === 0 ? " active" : "");
      t.src = src; t.loading = "lazy";
      t.setAttribute("data-view", view);
      t.title = "Lihat versi " + (view === "mobile" ? "Mobile" : "Desktop");
      t.addEventListener("click", function() { setDeviceView(view); });
      thumbs.appendChild(t);
    });
    setDeviceView(p.view || "desktop");
    document.getElementById("portModal").classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closePort(ev) {
    if (ev && ev.target !== document.getElementById("portModal")) return;
    document.getElementById("portModal").classList.remove("open");
    document.body.style.overflow = "";
  }
  function setDeviceView(v) {
    var dev = document.getElementById("portDevice");
    dev.classList.toggle("device-mobile", v === "mobile");
    dev.classList.toggle("device-desktop", v !== "mobile");
    document.querySelectorAll(".view-toggle button").forEach(function(b) { b.classList.toggle("active", b.dataset.view === v); });
    document.querySelectorAll("#portThumbs .port-thumb").forEach(function(t) { t.classList.toggle("active", t.getAttribute("data-view") === v); });
    try { if (document.getElementById("portFrame").contentWindow) document.getElementById("portFrame").contentWindow.scrollTo(0, 0); } catch (e) {}
  }
  function openPortExt() {
    var p = PORTFOLIO_DATA[currentPort];
    if (!p) return;
    if (p.url) { window.open(p.url, "_blank"); return; }
    if (p.srcdoc) { var b = new Blob([p.srcdoc], { type: "text/html" }); window.open(URL.createObjectURL(b), "_blank"); }
  }
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closePort(); });

  document.getElementById("brochureForm").addEventListener("submit", function(e) {
    e.preventDefault();
    this.classList.add("hidden-form");
    document.getElementById("formSuccess").classList.add("show");
  });

  /* ============ Light / Dark Theme ============ */
  var themeBtn = document.getElementById("themeBtn");
  function toggleTheme() {
    applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
  }
  function applyTheme(t) {
    if (t === "dark") { document.body.classList.add("dark"); } else { document.body.classList.remove("dark"); }
    themeIcon.innerHTML = (t === "light") ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;display:block"><circle cx="12" cy="12" r="5"/><path d="M12 1.5v2.5M12 20v2.5M4.4 4.4l1.8 1.8M17.8 17.8l1.8 1.8M1.5 12H4M20 12h2.5M4.4 19.6l1.8-1.8M17.8 6.2l1.8-1.8"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;display:block"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
    try { localStorage.setItem("branchos-theme", t); } catch(e) {}
  }
  var savedTheme = "light";
  try { savedTheme = localStorage.getItem("branchos-theme") || "light"; } catch(e) {}
  applyTheme(savedTheme);

  /* ============ Language Switcher (ID/EN) ============ */
  var langDict = {
    "nav-beranda":      { id: "Beranda",             en: "Home" },
    "nav-solusi":       { id: "Solusi",              en: "Solutions" },
    "nav-solusi-model": { id: "Solusi Model",        en: "Solution Models" },
    "nav-pilar":        { id: "4 Pilar",             en: "4 Pillars" },
    "nav-paket":        { id: "Paket",               en: "Pricing" },
    "nav-proses":       { id: "Alur Kerja",          en: "Workflow" },
    "nav-fitur":        { id: "Fitur",               en: "Features" },
    "nav-portofolio":   { id: "Portofolio",          en: "Portfolio" },
    "nav-brosur":       { id: "Brosur",              en: "Brochure" },
    "nav-addons":       { id: "Layanan Tambahan",    en: "Add-ons" },
    "nav-faq":          { id: "FAQ",                 en: "FAQ" },
    "nav-produk":       { id: "Produk",              en: "Products" },
    "nav-perusahaan":   { id: "Perusahaan",          en: "Company" },
    "nav-konsul-text":  { id: "Konsultasi Gratis",   en: "Free Consultation" }
  };
  function setLang(l) {
    document.querySelectorAll(".lang-switch button, .mobile-lang button").forEach(function(b) {
      b.classList.toggle("active", b.dataset.lang === l);
    });
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
      var key = el.dataset.i18n;
      if (langDict[key]) el.textContent = langDict[key][l];
    });
    try { localStorage.setItem("branchos-lang", l); } catch(e) {}
  }
  var savedLang = "id";
  try { savedLang = localStorage.getItem("branchos-lang") || "id"; } catch(e) {}
  setLang(savedLang);

  /* ============ Navbar Scroll Spy ============ */
  var spySections = ["beranda","solusi-model","pilar","paket","proses","keunggulan","fitur","widget","portofolio","brosur","addons","klien","testimoni","faq","kontak"];
  function closeDropdowns() {
    document.querySelectorAll(".nav-item.open").forEach(function(ni) { ni.classList.remove("open"); });
  }
  function updateSpy() {
    closeDropdowns();
    var current = null;
    var mid = window.innerHeight * 0.45;
    spySections.forEach(function(id) {
      var s = document.getElementById(id);
      if (s && s.getBoundingClientRect().top <= mid) current = id;
    });
    document.querySelectorAll(".nav-links a").forEach(function(l) {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
    document.querySelectorAll(".nav-item").forEach(function(ni) {
      ni.classList.toggle("has-active", !!ni.querySelector('a[href="#' + current + '"]'));
    });
  }
  window.addEventListener("scroll", updateSpy, { passive: true });
  updateSpy();

  /* ============ Nav Dropdowns (hover + click) ============ */
  document.querySelectorAll(".nav-item > .nav-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.stopPropagation();
      var ni = btn.parentElement;
      var wasOpen = ni.classList.contains("open");
      closeDropdowns();
      if (!wasOpen) ni.classList.add("open");
    });
  });
  document.addEventListener("click", function(e) {
    document.querySelectorAll(".nav-item.open").forEach(function(ni) {
      if (!ni.contains(e.target)) ni.classList.remove("open");
    });
  });
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeDropdowns(); });

  /* ============ Mobile Menu Accordion ============ */
  function toggleMGroup(btn) {
    var grp = btn.parentElement;
    var isOpen = grp.classList.contains("open");
    document.querySelectorAll(".mm-group.open").forEach(function(g) { g.classList.remove("open"); });
    if (!isOpen) grp.classList.add("open");
  }

  /* ============ Navbar Glass on Scroll ============ */
  var navBar = document.querySelector(".desktop-nav");
  function getScrollTop() { return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0; }
  function updateNav() { if (getScrollTop() > 12) { navBar.classList.add("scrolled"); } else { navBar.classList.remove("scrolled"); } }
  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  /* ============ Pricing Billing Toggle ============ */
  var currentBilling = "monthly";
  document.getElementById("billingToggle").querySelectorAll("button").forEach(function(btn) {
    btn.addEventListener("click", function() {
      currentBilling = btn.dataset.billing;
      document.getElementById("billingToggle").querySelectorAll("button").forEach(function(b) { b.classList.toggle("active", b === btn); });
      document.querySelectorAll(".price-amount").forEach(function(el) { el.textContent = el.dataset[currentBilling === "yearly" ? "y" : "m"]; });
      document.querySelectorAll(".price-note").forEach(function(el) { el.textContent = el.dataset[currentBilling === "yearly" ? "ynote" : "mnote"]; });
      document.querySelectorAll(".price-per").forEach(function(el) { el.textContent = currentBilling === "yearly" ? "/tahun" : "/bulan"; });
    });
  });

  /* ============ Scroll Reveal Animation ============ */
  var revealEls = document.querySelectorAll(".section-head, .seg-card, .pillar, .price-card, .tl-item, .why-card, .feature-col, .widget-card, .port-card, .addon-card, .logo-tile, .faq-item, .testi-carousel");
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function(entries) {
      entries.forEach(function(en) {
        if (en.isIntersecting) {
          en.target.classList.add("revealed");
          setTimeout(function(){ en.target.style.transitionDelay = "0ms"; }, 900);
          ro.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function(el, i) {
      el.style.transitionDelay = ((i % 6) * 80) + "ms";
      el.classList.add("reveal-auto");
      ro.observe(el);
    });
  }

  /* Fallback reveal: jika IntersectionObserver macet (wedged preview), konten tetap muncul dengan polling manual. */
  function manualReveal() {
    var un = document.querySelectorAll(".reveal-auto:not(.revealed)");
    for (var i = 0; i < un.length; i++) {
      var el = un[i];
      var r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.98 && r.bottom > 0) {
        el.classList.add("revealed");
        setTimeout(function(t){ t.style.transitionDelay = "0ms"; }, 900, el);
      }
    }
  }
  var revealPoll = setInterval(manualReveal, 400);
  window.addEventListener("scroll", function(){ manualReveal(); }, { passive: true });
  window.addEventListener("resize", manualReveal);
  setTimeout(function(){ clearInterval(revealPoll); }, 20000);

  /* ============ Testimonial Carousel (satu per satu, bergilir ke tengah — swipe) ============ */
  var tIndex = 0;
  var tSlides = document.querySelectorAll(".testi-slide");
  var tCount = tSlides.length;
  var tDots = document.getElementById("testiDots");
  var tCarousel = document.getElementById("testiCarousel");
  var tTimer = null;
  var tAnimTO = null;
  function renderDots() {
    tDots.innerHTML = "";
    for (var i = 0; i < tCount; i++) {
      (function(idx) {
        var d = document.createElement("button");
        d.className = "testi-dot" + (idx === tIndex ? " active" : "");
        d.setAttribute("aria-label", "Testimoni " + (idx + 1));
        d.onclick = function() { testiTo(idx); };
        tDots.appendChild(d);
      })(i);
    }
  }
  function setSlideState(s, opacity, vis) {
    s.style.opacity = opacity;
    s.style.visibility = vis;
    s.style.transform = "translateX(0)";
  }
  function finishAnim() {
    if (tAnimTO) { clearTimeout(tAnimTO); tAnimTO = null; }
    for (var i = 0; i < tCount; i++) {
      tSlides[i].classList.toggle("active", i === tIndex);
      setSlideState(tSlides[i], i === tIndex ? "1" : "0", i === tIndex ? "visible" : "hidden");
    }
  }
  function easeInOut(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
  function showSlide(i, dir) {
    finishAnim();
    var old = tSlides[tIndex];
    var newIdx = ((i % tCount) + tCount) % tCount;
    var next = tSlides[newIdx];
    if (old === next) { renderDots(); return; }
    if (!dir) { dir = (newIdx > tIndex) ? 1 : -1; }
    tIndex = newIdx;
    renderDots();
    var enterFrom = dir > 0 ? 100 : -100;
    var exitTo = dir > 0 ? -100 : 100;
    next.style.opacity = "0";
    next.style.visibility = "visible";
    next.style.transform = "translateX(" + enterFrom + "%)";
    old.style.opacity = "1";
    old.style.visibility = "visible";
    old.style.transform = "translateX(0)";
    var t0 = performance.now();
    var dur = 560;
    function tick() {
      var p = Math.min(1, (performance.now() - t0) / dur);
      var e = easeInOut(p);
      old.style.opacity = String(Math.max(0, 1 - p));
      old.style.transform = "translateX(" + (exitTo * e) + "%)";
      next.style.opacity = String(Math.max(0, p));
      next.style.transform = "translateX(" + (enterFrom * (1 - e)) + "%)";
      if (p < 1) { tAnimTO = setTimeout(tick, 16); }
      else { tAnimTO = null; finishAnim(); }
    }
    tAnimTO = setTimeout(tick, 16);
  }
  function testiTo(i) {
    restartTimer();
    showSlide(i, i > tIndex ? 1 : -1);
  }
  function testiMove(d) {
    restartTimer();
    showSlide(tIndex + d, d);
  }
  function restartTimer() {
    if (tTimer) { clearInterval(tTimer); }
    tTimer = setInterval(function(){ showSlide(tIndex + 1); }, 5000);
  }
  var tStartX = 0;
  tCarousel.addEventListener("touchstart", function(e){ tStartX = e.touches[0].clientX; });
  tCarousel.addEventListener("touchend", function(e){
    var dx = e.changedTouches[0].clientX - tStartX;
    if (Math.abs(dx) > 40) { testiMove(dx < 0 ? 1 : -1); }
  });
  finishAnim();
  renderDots();
  restartTimer();


  // Bind globals
  window.openWA = openWA;
  window.bpGo = bpGo;
  window.toggleMenu = toggleMenu;
  window.toggleFaq = toggleFaq;
  window.toggleQuick = toggleQuick;
  window.openPort = function(idx) {
    if (onOpenPort) {
      onOpenPort(idx);
    } else {
      var m = document.getElementById("portModal");
      if (m) m.classList.add("open");
    }
  };
  window.closePort = closePort;
  window.setDeviceView = setDeviceView;
  window.openPortExt = openPortExt;
  window.toggleTheme = toggleTheme;
  window.setLang = setLang;
  window.testiTo = testiTo;
  window.testiMove = testiMove;
}

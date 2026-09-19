import React from 'react';

export default function WorkflowSection() {
  return (
<section className="section section-alt2" id="proses">
  <div className="container">
    <div className="section-head">
      <span className="eyebrow">Perjalanan Pertumbuhan</span>
      <h2 className="section-title">Dari Setup HQ hingga Scale — dalam 5 Fase</h2>
      <p className="section-sub">Implementasi vertikal dan bertahap menuju ekosistem multi-cabang yang terpusat.</p>
    </div>
    <div className="timeline">
      <div className="tl-item"><div className="tl-dot">1</div><span className="tl-arrow">→</span><div className="tl-card"><h3>Setup Master HQ Core</h3><p>Konfigurasi identitas brand utama, master katalog layanan/produk, dan aturan penetapan harga global.</p></div></div>
      <div className="tl-item"><div className="tl-dot">2</div><span className="tl-arrow">←</span><div className="tl-card"><h3>Pemetaan &amp; Integrasi Database Cabang</h3><p>Input data lokasi cabang, jam operasional, penanggung jawab WhatsApp, rekening, dan koordinat Google Maps.</p></div></div>
      <div className="tl-item"><div className="tl-dot">3</div><span className="tl-arrow">→</span><div className="tl-card"><h3>Auto-Provisioning Sub-Portal Cabang</h3><p>Sistem otomatis me-generate landing page/subdomain untuk setiap cabang lengkap dengan SEO lokal.</p></div></div>
      <div className="tl-item"><div className="tl-dot">4</div><span className="tl-arrow">←</span><div className="tl-card"><h3>Aktivasi Smart Lead Routing &amp; Widget</h3><p>Pemasangan tombol WhatsApp pintar berbasis geolokasi, Store Locator, dan modul pemesanan lokal.</p></div></div>
      <div className="tl-item"><div className="tl-dot">5</div><span className="tl-arrow">→</span><div className="tl-card"><h3>Scale &amp; Monitor dari Satu Dashboard</h3><p>Pantau cabang mana yang paling banyak menerima kunjungan dan lead dari satu panel analitik terpadu.</p></div></div>
    </div>
  </div>
</section>
  );
}

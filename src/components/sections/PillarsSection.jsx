import React from 'react';

export default function PillarsSection() {
  return (
    <section className="section section-alt" id="pilar">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">4 Pilar Ekosistem Toko Mainan</span>
          <h2 className="section-title">Empat Pilar Arsitektur Digital Jaringan Toko Mainan</h2>
          <p className="section-sub">
            Branding etalase, kampanye nasional, SEO toko mainan per area, dan sinkronisasi ribuan SKU — terpadu dalam satu platform.
          </p>
        </div>
        <div className="pillars-grid">
          <div className="pillar">
            <span className="num">01</span>
            <div className="pillar-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 0 20 2 2 0 0 0 1.5-3.3A2 2 0 0 1 14 16h1.5a5.5 5.5 0 0 0 0-11A8.5 8.5 0 0 1 12 2z" />
                <circle cx="7.5" cy="10.5" r="1" />
                <circle cx="12" cy="7.5" r="1" />
                <circle cx="16.5" cy="10.5" r="1" />
              </svg>
            </div>
            <h3>Branding Toko Mainan Terpadu</h3>
            <p>
              Identitas visual brand mainan, banner peluncuran seri baru, dan tata letak etalase dikunci dari kantor pusat (HQ), menjaga standar toko resmi di setiap gerai cabang.
            </p>
          </div>

          <div className="pillar">
            <span className="num">02</span>
            <div className="pillar-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z" />
                <path d="M14 8a5 5 0 0 1 0 8" />
                <path d="M17 5a9 9 0 0 1 0 14" />
              </svg>
            </div>
            <h3>Kampanye &amp; Drop Rilis Terpusat</h3>
            <p>
              Dorong promo hari anak nasional, flash sale liburan sekolah, atau limited drop art toys dari satu dashboard pusat — terbit otomatis di semua cabang tanpa repot.
            </p>
          </div>

          <div className="pillar">
            <span className="num">03</span>
            <div className="pillar-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Local SEO: "Toko Mainan Terdekat"</h3>
            <p>
              Sub-portal otomatis per kota dan mall (/toko-mainan-jakarta, /bandung, /surabaya) untuk memenangkan pencarian Google Maps lokal orang tua dan kolektor mainan di sekitar gerai.
            </p>
          </div>

          <div className="pillar">
            <span className="num">04</span>
            <div className="pillar-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M1 12h4M19 12h4M4.2 19.8L7 17M17 7l2.8-2.8" />
              </svg>
            </div>
            <h3>Sync Ribuan Barcode SKU Mainan</h3>
            <p>
              Tambah seri mainan baru di kantor pusat, langsung terbit dengan barcode dan deskripsi spesifikasi di 100+ cabang. Tidak ada lagi input manual ganda yang membuang waktu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

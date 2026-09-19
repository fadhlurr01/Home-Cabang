import React, { useState } from 'react';

const FAQS_DATA = [
  {
    q: 'Bagaimana cara sistem mengarahkan pengunjung ke cabang toko mainan yang benar?',
    a: 'Website mendeteksi lokasi IP/GPS pengunjung (dengan izin browser) dan otomatis menampilkan data cabang serta nomor WhatsApp CS cabang toko mainan terdekat. Pengunjung juga tetap bisa memilih cabang lain secara manual melalui dropdown navigasi.'
  },
  {
    q: 'Apakah masing-masing cabang bisa punya domain atau subdomain sendiri?',
    a: 'Ya. Anda bisa menggunakan format subdomain (misalnya: jakarta.brandanda.id, surabaya.brandanda.id) atau domain unik untuk setiap cabang jika diinginkan. Seluruhnya tetap dikelola dari satu dashboard pusat.'
  },
  {
    q: 'Bagaimana jika cabang memiliki stok mainan atau harga yang berbeda antar kota?',
    a: 'Sistem mendukung katalog hierarkis: kantor pusat (HQ) menentukan produk global, sementara cabang memiliki wewenang untuk menyesuaikan harga lokal, ketersediaan stok mainan, dan katalog musiman yang spesifik untuk cabang tersebut.'
  },
  {
    q: 'Apakah data prospek/lead aman dan tidak tertukar antar cabang?',
    a: 'Sangat aman. Setiap cabang hanya memiliki akses ke data lead yang masuk ke cabang mereka sendiri. Kantor pusat memiliki visibilitas penuh ke seluruh data lead untuk keperluan analitik dan pemantauan performa.'
  },
  {
    q: 'Berapa lama proses implementasi untuk jaringan toko mainan yang sudah berjalan?',
    a: 'Tergantung jumlah cabang dan kesiapan data. Rata-rata implementasi untuk 5-15 cabang memakan waktu 7-14 hari kerja, termasuk migrasi konten, konfigurasi domain, dan pelatihan tim admin cabang.'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          {/* Left Column — Heading */}
          <div className="faq-left">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">
              Pertanyaan yang <em>Sering Diajukan</em>
            </h2>
            <p className="section-sub">
              Semua hal yang perlu Anda ketahui tentang implementasi platform website multi-cabang toko mainan terpusat.
            </p>
            <div className="faq-cta">
              <a href="#kontak" className="btn btn-coral">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Tanya Langsung
              </a>
            </div>
          </div>

          {/* Right Column — Accordion */}
          <div className="faq-right">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className={`faq-accordion-item${isOpen ? ' open' : ''}`}>
                  <button
                    type="button"
                    className="faq-accordion-btn"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-chevron">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="faq-accordion-body"
                    style={{
                      maxHeight: isOpen ? '300px' : '0',
                      opacity: isOpen ? 1 : 0,
                      transition: 'max-height 0.35s ease, opacity 0.3s ease, padding 0.3s ease',
                      overflow: 'hidden',
                      padding: isOpen ? '0 24px 20px 52px' : '0 24px 0 52px'
                    }}
                  >
                    <p className="faq-a-text">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

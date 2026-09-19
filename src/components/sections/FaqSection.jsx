import React, { useState } from 'react';

const FAQS_DATA = [
  {
    q: 'Bagaimana cara sistem mengarahkan pengunjung ke cabang yang benar?',
    a: 'Website mendeteksi lokasi IP/GPS pengunjung (dengan izin browser) dan otomatis menampilkan data cabang serta nomor WhatsApp CS cabang terdekat. Pengunjung juga tetap bisa memilih cabang lain secara manual melalui dropdown navigasi.'
  },
  {
    q: 'Apakah masing-masing cabang bisa punya domain atau subdomain sendiri?',
    a: 'Ya. Anda bisa menggunakan format subdomain (misalnya: jakarta.brandanda.id, surabaya.brandanda.id) atau domain unik untuk setiap cabang jika diinginkan. Seluruhnya tetap dikelola dari satu dashboard pusat.'
  },
  {
    q: 'Bagaimana jika cabang kami memiliki harga atau menu yang berbeda antar kota?',
    a: 'Sistem mendukung katalog hierarkis: kantor pusat (HQ) menentukan produk global, sementara cabang memiliki wewenang untuk menyesuaikan harga lokal, ketersediaan stok, dan menu musiman yang spesifik untuk cabang tersebut.'
  },
  {
    q: 'Apakah data prospek/lead aman dan tidak tertukar antar cabang?',
    a: 'Sangat aman. Setiap cabang hanya memiliki akses ke data lead yang masuk ke cabang mereka sendiri. Kantor pusat memiliki visibilitas penuh ke seluruh data lead untuk keperluan analitik dan pemantauan performa.'
  },
  {
    q: 'Berapa lama proses implementasi untuk jaringan bisnis yang sudah berjalan?',
    a: 'Tergantung jumlah cabang dan kesiapan data. Rata-rata implementasi untuk 5-15 cabang memakan waktu 7-14 hari kerja, termasuk migrasi konten, konfigurasi domain, dan pelatihan tim admin cabang.'
  }
];

export default function FaqSection() {
  const [openItems, setOpenItems] = useState({ 0: true });

  const toggle = (idx) => {
    setOpenItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className="faq-wrap">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = !!openItems[idx];
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  {faq.q} <span className="chev" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▾</span>
                </button>
                <div
                  className="faq-a"
                  style={{
                    maxHeight: isOpen ? '500px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease'
                  }}
                >
                  <div className="faq-a-inner">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

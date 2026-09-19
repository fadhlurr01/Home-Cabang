import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Apakah setiap cabang butuh domain sendiri atau cukup subdomain?',
    a: 'Sistem mendukung keduanya secara fleksibel! Anda bisa menggunakan format subdomain otomatis (misal: thamrin.brandanda.com) atau domain mandiri kustom per cabang (misal: brand-surabaya.id). Keduanya tetap terhubung ke satu dasbor pusat HQ.'
  },
  {
    q: 'Bagaimana jika cabang pindah lokasi atau ada cabang baru yang buka?',
    a: 'Sangat mudah. Anda hanya perlu mengisi form penambahan/pembaruan cabang di dashboard HQ. Dalam hitungan detik, seluruh peta toko, nomor WhatsApp, alamat, dan Google Business Profile cabang tersebut langsung terbarui otomatis tanpa perlu bantuan programmer.'
  },
  {
    q: 'Bisakah stok barang per cabang disinkronkan dengan sistem POS kasir offline?',
    a: 'Ya! Arsitektur kami dilengkapi REST API dan konektor siap-pakai untuk berbagai aplikasi kasir & ERP seperti Moka, Olsera, Pawoon, SAP, dan Accurate. Stok yang terjual di toko fisik langsung mengurangi inventaris online cabang bersangkutan.'
  },
  {
    q: 'Berapa lama waktu implementasi dari awal hingga seluruh cabang aktif?',
    a: 'Untuk paket Starter (hingga 10 cabang), setup awal dapat diselesaikan dalam 5 - 7 hari kerja. Untuk jaringan menengah hingga enterprise (50+ cabang), proses blueprint dan integrasi biasanya memakan waktu 2 - 3 minggu termasuk pelatihan staf.'
  },
  {
    q: 'Apakah ada pembatasan jumlah pengunjung (trafik) atau lead bulanan?',
    a: 'Tidak ada batasan. Seluruh paket didukung oleh CDN Edge dan cloud server auto-scaling yang siap menangani lonjakan jutaan pengunjung saat promo nasional atau flash sale tanpa server down.'
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(prev => (prev === idx ? -1 : idx));
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Pusat Informasi</div>
          <h2 className="section-title">
            Pertanyaan yang <em>Sering Diajukan</em>
          </h2>
          <p className="section-sub">
            Semua hal yang perlu Anda ketahui tentang implementasi platform website multi-cabang terpusat.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      color: 'var(--branch-teal-700)'
                    }}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


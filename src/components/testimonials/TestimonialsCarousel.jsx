import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Sebelum memakai sistem ini, cabang toko mainan kami di mall sering membuat halaman promosi sendiri yang berantakan. Sekarang seluruh 35 gerai memiliki website seragam, cepat, dan calon pembeli langsung terhubung ke WhatsApp store manager terdekat untuk reservasi seri brick & figure.',
    author: 'Budi Santoso',
    role: 'Founder & CEO',
    company: 'Waralaba Retail Mainan Anak (35 Gerai Mall di 8 Kota)',
    avatar: 'BS',
    stats: '35 Gerai Mall · +180% Reservasi WA',
    rating: 5
  },
  {
    quote: 'Fitur live inventory per cabang sangat krusial untuk gerai offline kami. Pelanggan bisa cek ketersediaan stok mainan edukasi di toko terdekat sebelum datang, dan nomor WhatsApp masing-masing toko langsung siap menerima pesanan.',
    author: 'Dewi Lestari',
    role: 'Operational Director',
    company: 'Retail Plushie & Doll Atelier (18 Outlet Mall)',
    avatar: 'DL',
    stats: '18 Outlet · 99.4% Akurasi Stok',
    rating: 5
  },
  {
    quote: 'Kami butuh waktu 3 bulan untuk setup website toko mainan cabang pertama secara manual. Dengan platform TOYHUB, gerai toko hobby ke-15 dan ke-16 kami bisa online dalam hitungan jam dengan subdomain yang langsung terintegrasi barcode kasir.',
    author: 'Rian Pratama',
    role: 'Co-Founder',
    company: 'Jaringan Toko Hobby & Collectibles (22 Gerai Indonesia)',
    avatar: 'RP',
    stats: '22 Gerai · Online dlm <2 Jam',
    rating: 5
  },
  {
    quote: 'Dashboard analitik real-time sangat membantu kami memantau performa setiap toko cabang. Kami bisa langsung tahu cabang mana yang paling banyak dikunjungi secara online dan mengalokasikan stok mainan terlaris ke sana.',
    author: 'Anita Kusuma',
    role: 'Head of Operations',
    company: 'MegaToys Indonesia (28 Gerai Nasional)',
    avatar: 'AK',
    stats: '28 Gerai · 3.2x Efisiensi Logistik',
    rating: 5
  },
  {
    quote: 'Integrasi WhatsApp Business API ke semua cabang kami berjalan mulus. Setiap inquiry pelanggan otomatis diarahkan ke CS toko terdekat tanpa ada yang terlewat — conversion rate naik 3x lipat dalam 2 bulan pertama.',
    author: 'Hendra Wijaya',
    role: 'Digital Marketing Manager',
    company: 'PlayVault Franchise Group (40+ Outlet)',
    avatar: 'HW',
    stats: '40+ Outlet · 3x Lipat Closing Rate',
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = () => {
    setCurrentIdx(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIdx(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const cur = TESTIMONIALS[currentIdx];

  return (
    <section className="section section-alt" id="testimoni">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Apa Kata Retailer Mainan</div>
          <h2 className="section-title">
            Hasil Nyata dari Pemilik Jaringan <em>Toko Mainan &amp; Hobby</em>
          </h2>
          <p className="section-sub">
            Dengar langsung cerita sukses para pemilik waralaba dan jaringan toko mainan setelah menggunakan platform multi-cabang TOYHUB.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '840px', margin: '0 auto', padding: '40px', background: '#ffffff', borderRadius: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(cur.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 12px', borderRadius: '9999px' }}>
                <CheckCircle2 size={13} style={{ verticalAlign: '-2px', marginRight: '4px' }} />
                {cur.stats}
              </span>
              <Quote size={28} color="#0d5568" />
            </div>
          </div>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#0f172a',
            fontStyle: 'italic',
            marginBottom: '28px',
            fontWeight: 500
          }}>
            "{cur.quote}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '20px', borderTop: '1px dashed rgba(13,85,104,0.16)' }}>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                {cur.author}
              </h4>
              <div style={{ fontSize: '13px', color: '#475569', marginTop: '2px' }}>
                {cur.role} · <strong style={{ color: '#0d5568' }}>{cur.company}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                type="button"
                onClick={prev}
                className="btn btn-outline"
                style={{ width: 40, height: 40, padding: 0, borderRadius: '50%', borderColor: 'rgba(13,85,104,0.2)', color: '#0d5568' }}
                aria-label="Testimoni Sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#475569' }}>
                {currentIdx + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="btn btn-outline"
                style={{ width: 40, height: 40, padding: 0, borderRadius: '50%', borderColor: 'rgba(13,85,104,0.2)', color: '#0d5568' }}
                aria-label="Testimoni Berikutnya"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

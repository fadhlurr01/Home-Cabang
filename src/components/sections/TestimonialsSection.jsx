import React, { useState } from 'react';

const TESTIMONIALS_DATA = [
  {
    text: '"Sebelum memakai sistem ini, cabang toko mainan kami di mall sering membuat halaman promosi sendiri yang berantakan. Sekarang seluruh 35 gerai memiliki website seragam, cepat, dan calon pembeli langsung terhubung ke WhatsApp store manager terdekat untuk reservasi seri brick & figure."',
    name: 'Budi Santoso',
    role: 'Founder & CEO — Waralaba Retail Mainan Anak (35 Gerai Mall di 8 Kota)',
    avatar: 'BS'
  },
  {
    text: '"Fitur live inventory per cabang sangat krusial untuk gerai offline kami. Pelanggan bisa cek ketersediaan stok mainan edukasi di toko terdekat sebelum datang, dan nomor WhatsApp masing-masing toko langsung siap menerima pesanan."',
    name: 'Dewi Lestari',
    role: 'Operational Director — Retail Plushie & Doll Atelier (18 Outlet Mall)',
    avatar: 'DL'
  },
  {
    text: '"Kami butuh waktu 3 bulan untuk setup website toko mainan cabang pertama secara manual. Dengan platform TOYHUB, gerai toko hobby ke-15 dan ke-16 kami bisa online dalam hitungan jam dengan subdomain yang langsung terintegrasi barcode kasir."',
    name: 'Rian Pratama',
    role: 'Co-Founder — Jaringan Toko Hobby & Collectibles (22 Gerai Indonesia)',
    avatar: 'RP'
  }
];

export default function TestimonialsSection() {
  const [tIndex, setTIndex] = useState(0);

  return (
    <section className="section section-alt" id="testimoni">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Apa Kata Retailer Mainan</span>
          <h2 className="section-title">Hasil Nyata dari Pemilik Jaringan Toko Mainan &amp; Hobby</h2>
        </div>

        <div className="testi-carousel" id="testiCarousel">
          <div
            className="testi-track"
            id="testiTrack"
            style={{
              display: 'flex',
              transform: `translateX(-${tIndex * 100}%)`,
              transition: 'transform 0.4s ease'
            }}
          >
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div key={idx} className="testi-slide" style={{ minWidth: '100%', padding: '0 12px' }}>
                <div className="card testi-card" style={{ background: '#ffffff', borderRadius: '18px', padding: '32px' }}>
                  <div className="stars" style={{ color: '#FACC15', fontSize: '18px', marginBottom: '14px' }}>
                    ★★★★★
                  </div>
                  <blockquote style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--branch-text)', marginBottom: '20px' }}>
                    {t.text}
                  </blockquote>
                  <div className="testi-author" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      className="testi-av"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '14px'
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="testi-name" style={{ fontWeight: 800, color: 'var(--branch-text)', fontSize: '15px' }}>
                        {t.name}
                      </div>
                      <div className="testi-role" style={{ fontSize: '12.5px', color: 'var(--branch-slate-500)' }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testi-dots" id="testiDots" style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`testi-dot ${tIndex === idx ? 'active' : ''}`}
                onClick={() => setTIndex(idx)}
                aria-label={`Testimoni ${idx + 1}`}
                style={{
                  width: tIndex === idx ? '28px' : '9px',
                  height: '9px',
                  borderRadius: '9999px',
                  background: tIndex === idx ? '#2563eb' : 'rgba(37,99,235,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

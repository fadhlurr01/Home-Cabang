import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Dulu setiap buka cabang baru, kami butuh 2 minggu dan biaya jutaan untuk bikin landing page baru. Dengan arsitektur CONTRACTOR.HUB, cabang ke-30 kami di Bali aktif hanya dalam 3 menit!',
    author: 'Hendra Wijaya',
    role: 'Managing Director',
    company: 'KUBIKK Brick Store Group (32 Cabang)',
    rating: 5
  },
  {
    quote: 'Fitur WhatsApp Lead Routing-nya luar biasa cerdas. Customer dari Surabaya otomatis terhubung ke WhatsApp staff cabang Pakuwon tanpa kami harus memilah manual di kantor pusat Jakarta.',
    author: 'Siti Rahmadani',
    role: 'Head of Digital Marketing',
    company: 'ICONIQ Atelier Fashion (18 Butik)',
    rating: 5
  },
  {
    quote: 'Kami mengelola ratusan proyek kontraktor dengan 40+ armada lapangan. Sistem ini memberi transparansi penuh antara kantor pusat dengan cabang regional tanpa bocor data antar mitra.',
    author: 'Ir. Taufiq Hidayat',
    role: 'Chief Operating Officer',
    company: 'Nusantara Contractor Network',
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
          <div className="eyebrow">Kisah Sukses Mitra</div>
          <h2 className="section-title">
            Hasil Nyata dari <em>Pemilik Jaringan Bisnis</em>
          </h2>
          <p className="section-sub">
            Dengar langsung bagaimana sistem website multi-cabang meningkatkan efisiensi operasional dan melipatgandakan omset mereka.
          </p>
        </div>

        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(cur.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#2563eb" color="#2563eb" />
              ))}
            </div>

            <Quote size={32} color="#bfdbfe" />
          </div>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.65,
            color: 'var(--text-main)',
            fontStyle: 'italic',
            marginBottom: '28px'
          }}>
            "{cur.quote}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>
                {cur.author}
              </h4>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {cur.role} · <strong style={{ color: '#2563eb' }}>{cur.company}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={prev}
                className="btn btn-outline"
                style={{ width: 40, height: 40, padding: 0, borderRadius: '50%' }}
                aria-label="Testimoni Sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="btn btn-outline"
                style={{ width: 40, height: 40, padding: 0, borderRadius: '50%' }}
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

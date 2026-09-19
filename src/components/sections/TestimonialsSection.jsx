import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    text: '"Sebelum memakai sistem ini, cabang toko mainan kami di mall sering membuat halaman promosi sendiri yang berantakan. Sekarang seluruh 35 gerai memiliki website seragam, cepat, dan calon pembeli langsung terhubung ke WhatsApp store manager terdekat untuk reservasi seri brick & figure."',
    name: 'Budi Santoso',
    role: 'Founder & CEO',
    company: 'Waralaba Retail Mainan Anak',
    scope: '35 Gerai Mall di 8 Kota',
    avatar: 'BS',
    stats: '35 Gerai Mall · +180% Reservasi WA',
    metrics: ['+180% Reservasi WA', '35 Gerai Mall', 'Setup <2 Jam']
  },
  {
    text: '"Fitur live inventory per cabang sangat krusial untuk gerai offline kami. Pelanggan bisa cek ketersediaan stok mainan edukasi di toko terdekat sebelum datang, dan nomor WhatsApp masing-masing toko langsung siap menerima pesanan."',
    name: 'Dewi Lestari',
    role: 'Operational Director',
    company: 'Retail Plushie & Doll Atelier',
    scope: '18 Outlet Mall',
    avatar: 'DL',
    stats: '18 Outlet · 99.4% Akurasi Stok',
    metrics: ['99.4% Akurasi Stok', '18 Outlet Mall', 'Live Inventory']
  },
  {
    text: '"Kami butuh waktu 3 bulan untuk setup website toko mainan cabang pertama secara manual. Dengan platform TOYHUB, gerai toko hobby ke-15 dan ke-16 kami bisa online dalam hitungan jam dengan subdomain yang langsung terintegrasi barcode kasir."',
    name: 'Rian Pratama',
    role: 'Co-Founder',
    company: 'Jaringan Toko Hobby & Collectibles',
    scope: '22 Gerai Indonesia',
    avatar: 'RP',
    stats: '22 Gerai · Online dlm <2 Jam',
    metrics: ['Online dlm <2 Jam', '22 Gerai Nasional', 'Integrasi Barcode POS']
  },
  {
    text: '"Dashboard analitik real-time sangat membantu kami memantau performa setiap toko cabang. Kami bisa langsung tahu cabang mana yang paling banyak dikunjungi secara online dan mengalokasikan stok mainan terlaris ke sana."',
    name: 'Anita Kusuma',
    role: 'Head of Operations',
    company: 'MegaToys Indonesia',
    scope: '28 Gerai Nasional',
    avatar: 'AK',
    stats: '28 Gerai · 3.2x Efisiensi Logistik',
    metrics: ['3.2x Efisiensi Logistik', '28 Gerai Nasional', 'Dashboard Analitik']
  },
  {
    text: '"Integrasi WhatsApp Business API ke semua cabang kami berjalan mulus. Setiap inquiry pelanggan otomatis diarahkan ke CS toko terdekat tanpa ada yang terlewat — conversion rate naik 3x lipat dalam 2 bulan pertama."',
    name: 'Hendra Wijaya',
    role: 'Digital Marketing Manager',
    company: 'PlayVault Franchise Group',
    scope: '40+ Outlet Franchise',
    avatar: 'HW',
    stats: '40+ Outlet · 3x Lipat Closing Rate',
    metrics: ['3x Closing Rate', '40+ Outlet Toko', 'Smart WA Router']
  }
];

const AUTO_SWIPE_INTERVAL = 5500;

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const total = TESTIMONIALS_DATA.length;
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setActiveIdx(idx);
  }, []);

  const goNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Automatic swipe one by one (No progress bar on top, clean timer)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total);
    }, AUTO_SWIPE_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total, activeIdx]);

  // Touch gesture swipe support for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();
  };

  const current = TESTIMONIALS_DATA[activeIdx];

  return (
    <section className="section section-alt" id="testimoni" style={{ position: 'relative', zIndex: 10 }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-head" style={{ marginBottom: '36px' }}>
          <span
            className="eyebrow"
            style={{
              background: 'rgba(13, 85, 104, 0.08)',
              color: '#0d5568',
              borderColor: 'rgba(13, 85, 104, 0.2)'
            }}
          >
            Apa Kata Retailer Mainan
          </span>
          <h2 className="section-title">
            Hasil Nyata dari Pemilik Jaringan <em>Toko Mainan &amp; Hobby</em>
          </h2>
          <p className="section-sub">
            Dengar langsung cerita sukses para pemilik waralaba dan jaringan toko mainan setelah menggunakan platform multi-cabang TOYHUB.
          </p>
        </div>

        {/* Featured Showcase Card (Zero Loading Bar, Smooth Auto-Swipe, Touch-Friendly) */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            key={activeIdx}
            className="testi-card-inner"
            style={{
              borderRadius: '24px',
              padding: '44px 48px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px',
              animation: 'testiCardSwipe 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Top Bar: Quote Icon + Rating + Verified Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '26px',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ef4444'
                  }}
                >
                  <Quote size={24} />
                </div>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#64748b' }}>
                    Verifikasi Mitra Resmi TOYHUB
                  </span>
                </div>
              </div>

              {/* Verified Result Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  color: '#059669',
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  fontSize: '12.5px',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}
              >
                <CheckCircle2 size={15} />
                {current.stats}
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <blockquote
              style={{
                fontSize: '18px',
                lineHeight: 1.8,
                color: '#0f172a',
                fontStyle: 'italic',
                marginBottom: '28px',
                fontWeight: 500
              }}
            >
              {current.text}
            </blockquote>

            {/* Metric Tags */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '32px'
              }}
            >
              {current.metrics.map((m, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '6px',
                    background: 'rgba(13, 85, 104, 0.07)',
                    color: '#0d5568',
                    border: '1px solid rgba(13, 85, 104, 0.15)'
                  }}
                >
                  ✓ {m}
                </span>
              ))}
            </div>

            {/* Author Meta Footer & Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '22px',
                borderTop: '1px dashed rgba(13, 85, 104, 0.18)',
                marginTop: 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0d5568, #0284c7)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '17px',
                    boxShadow: '0 4px 14px rgba(13, 85, 104, 0.25)'
                  }}
                >
                  {current.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '16.5px', color: '#0f172a' }}>
                    {current.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569', fontWeight: 600 }}>
                    {current.role} · <strong style={{ color: '#0d5568' }}>{current.company}</strong>
                  </div>
                  <div style={{ fontSize: '12px', color: '#ef4444', fontWeight: 700, marginTop: '2px' }}>
                    {current.scope}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  type="button"
                  onClick={goPrev}
                  className="testi-arrow-btn"
                  aria-label="Testimoni Sebelumnya"
                >
                  <ChevronLeft size={20} />
                </button>

                <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--branch-slate-400)', letterSpacing: '0.06em', minWidth: '54px', textAlign: 'center' }}>
                  <span style={{ color: '#ef4444', fontSize: '16px' }}>{String(activeIdx + 1).padStart(2, '0')}</span>
                  {' / '}
                  <span>{String(total).padStart(2, '0')}</span>
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="testi-arrow-btn"
                  aria-label="Testimoni Berikutnya"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots (Subtle indicator without top loading bar) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goTo(idx)}
              aria-label={`Testimoni ${idx + 1}`}
              style={{
                width: activeIdx === idx ? '28px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: activeIdx === idx ? 'var(--branch-coral-500)' : 'rgba(13, 85, 104, 0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 0
              }}
            />
          ))}
        </div>

        {/* 3-Column Highlights Grid Below the Showcase Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '1100px',
            margin: '36px auto 0'
          }}
        >
          {TESTIMONIALS_DATA.slice(0, 3).map((t, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => goTo(idx)}
                className="testi-mini-card"
                style={{
                  border: isSelected ? '2px solid var(--branch-teal-700)' : '1px solid rgba(13, 85, 104, 0.14)',
                  borderRadius: '18px',
                  padding: '24px 26px',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 12px 32px -8px rgba(13, 85, 104, 0.2)' : '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 800,
                      color: isSelected ? '#ef4444' : '#0d5568',
                      background: isSelected ? 'rgba(239, 68, 68, 0.08)' : 'rgba(13, 85, 104, 0.06)',
                      padding: '3px 10px',
                      borderRadius: '999px'
                    }}
                  >
                    Gerai #{idx + 1}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '13.5px',
                    lineHeight: 1.65,
                    color: '#334155',
                    fontStyle: 'italic',
                    marginBottom: '16px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {t.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0d5568, #147285)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11.5px',
                      fontWeight: 800
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '13.5px', color: '#0f172a' }}>{t.name}</div>
                    <div style={{ fontSize: '11.5px', color: '#64748b' }}>{t.company}</div>
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

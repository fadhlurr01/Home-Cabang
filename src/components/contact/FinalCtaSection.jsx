import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function FinalCtaSection() {
  const { openConsultModal } = useApp();

  const handleOpenWA = () => {
    window.open('https://wa.me/6281234567890?text=' + encodeURIComponent('Halo Tim CONTRACTOR.HUB, saya ingin konsultasi mengenai implementasi website terpusat untuk jaringan cabang/franchise kami.'), '_blank');
  };

  return (
    <section className="section" id="kontak" style={{ paddingBottom: '120px' }}>
      <div className="container">
        <div className="card" style={{
          background: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
          color: '#ffffff',
          borderRadius: '24px',
          padding: '64px 48px',
          textAlign: 'center',
          boxShadow: '0 30px 70px -15px rgba(30, 58, 138, 0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#93c5fd',
              fontSize: '12.5px',
              fontWeight: 700,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
              <Sparkles size={14} /> Siap Menskalakan Bisnis Anda?
            </div>

            <h2 style={{
              fontSize: 'clamp(30px, 4.5vw, 46px)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '18px',
              letterSpacing: '-0.02em'
            }}>
              Satu Arsitektur Website untuk Menguasai Seluruh Wilayah Operasional Anda
            </h2>

            <p style={{
              fontSize: '16.5px',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '36px'
            }}>
              Konsultasikan peta ekspansi cabang Anda dengan arsitek sistem CONTRACTOR.HUB hari ini. Dapatkan blueprint teknis dan audit integrasi gratis tanpa komitmen.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={openConsultModal}
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                  color: '#ffffff',
                  padding: '14px 32px',
                  fontSize: '15px'
                }}
              >
                Mulai Konsultasi Gratis <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="btn btn-wa"
                onClick={handleOpenWA}
                style={{
                  padding: '14px 28px',
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageCircle size={18} /> Chat WhatsApp Langsung
              </button>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '40px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '13px',
              color: '#94a3b8'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#60a5fa" /> Uptime SLA 99.9%
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#60a5fa" /> ISO 27001 Data Security
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#60a5fa" /> Garansi 30 Hari
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

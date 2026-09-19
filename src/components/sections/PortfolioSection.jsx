import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/templates';
import { useApp } from '../../context/AppContext';

// Helper theme per kategori mainan
const TOY_THEMES = {
  'KUBIKK': {
    grad: 'linear-gradient(135deg, var(--branch-teal-800), #0284c7)',
    accent: '#38bdf8',
    category: 'Brick & Modular',
    badge: 'ðŸ§± BRICK MODULAR AI',
    icon: 'ðŸ§±'
  },
  'ICONIQ Atelier': {
    grad: 'linear-gradient(135deg, #4c1d95, #c026d3)',
    accent: '#f472b6',
    category: 'Dolls & Plushie',
    badge: 'ðŸ‘— HAUTE COUTURE DOLL',
    icon: 'âœ¨'
  },
  'PLAYVAULT': {
    grad: 'linear-gradient(135deg, #0f172a, #1e293b)',
    accent: 'var(--branch-teal-500)',
    category: 'Action Figure & Collectibles',
    badge: 'ðŸ›¡ï¸ COLLECTIBLES VAULT',
    icon: 'âš”ï¸'
  },
  'NEXUS ARCHIVE': {
    grad: 'linear-gradient(135deg, #18181b, #3f3f46)',
    accent: '#60a5fa',
    category: 'Action Figure & Collectibles',
    badge: 'ðŸ“¦ CURATED DROP ARTIFACT',
    icon: 'ðŸ’Ž'
  },
  'NEOPOPÂ® Collective': {
    grad: 'linear-gradient(135deg, #0369a1, #0891b2)',
    accent: '#22d3ee',
    category: 'Art Toys & Blind Box',
    badge: 'ðŸŽ BLIND BOX & ART TOYS',
    icon: 'ðŸŽ¨'
  },
  'Kokoro Atelier': {
    grad: 'linear-gradient(135deg, #831843, #db2777)',
    accent: '#fbcfe8',
    category: 'Dolls & Plushie',
    badge: 'ðŸŒ¸ KAWAII TOKYO DIRECT',
    icon: 'ðŸŽ€'
  },
  'POUF & COMPANION': {
    grad: 'linear-gradient(135deg, #164e63, #0d9488)',
    accent: '#5eead4',
    category: 'Dolls & Plushie',
    badge: 'ðŸ§¸ LUXURY PLUSH DESIGNER',
    icon: 'ðŸ§¸'
  },
  'KRAFTBEAR': {
    grad: 'linear-gradient(135deg, #78350f, #d97706)',
    accent: '#fde68a',
    category: 'Dolls & Plushie',
    badge: 'ðŸ§µ CUSTOM PLUSH WORKSHOP',
    icon: 'ðŸª¡'
  },
  'BAEREN Atelier': {
    grad: 'linear-gradient(135deg, #451a03, #92400e)',
    accent: '#fbbf24',
    category: 'Dolls & Plushie',
    badge: 'ðŸ‘‘ HEIRLOOM TEDDY NO. 1-999',
    icon: 'ðŸ‘‘'
  },
  'WonderLudo': {
    grad: 'linear-gradient(135deg, var(--branch-teal-800), var(--branch-teal-700))',
    accent: '#93c5fd',
    category: 'Edu Toys & Montessori',
    badge: 'ðŸ° PLAY EMPORIUM HAMLEYS',
    icon: 'ðŸŽª'
  },
  'KIDORA Studio': {
    grad: 'linear-gradient(135deg, #065f46, #059669)',
    accent: '#6ee7b7',
    category: 'Edu Toys & Montessori',
    badge: 'ðŸ§  PEDIATRICIAN-BACKED',
    icon: 'ðŸ§©'
  },
  'LumiPlayâ„¢': {
    grad: 'linear-gradient(135deg, #1e1b4b, #4338ca)',
    accent: '#a5b4fc',
    category: 'Edu Toys & Montessori',
    badge: 'ðŸ”¬ SENSORY PLAY LAB',
    icon: 'ðŸ’¡'
  },
  'Kidadu': {
    grad: 'linear-gradient(135deg, #2e4a3d, #3b6b55)',
    accent: '#86efac',
    category: 'Edu Toys & Montessori',
    badge: 'ðŸŒ¿ SCREEN-FREE MONTESSORI',
    icon: 'ðŸªµ'
  },
  'SPINVERSE': {
    grad: 'linear-gradient(135deg, #311042, #7e22ce)',
    accent: '#e879f9',
    category: 'Action Figure & Collectibles',
    badge: 'ðŸª 3D HOLOGRAM PLAY LAB',
    icon: 'ðŸš€'
  },
  'SMILEX Studio': {
    grad: 'linear-gradient(135deg, #09090b, #1e293b)',
    accent: '#38bdf8',
    category: 'Art Toys & Blind Box',
    badge: 'ðŸŽŒ ANIME FIGURE 3D ROTATE',
    icon: 'â›©ï¸'
  }
};

const CATEGORIES = [
  'Semua Mainan (15)',
  'Brick & Modular',
  'Action Figure & Collectibles',
  'Art Toys & Blind Box',
  'Dolls & Plushie',
  'Edu Toys & Montessori'
];

export default function PortfolioSection() {
  const { openPreviewModal, openConsultModal } = useApp();
  const [selectedCat, setSelectedCat] = useState('Semua Mainan (15)');

  const statuses = ['AKTIF', 'SYNC', 'LIVE'];

  const filteredTemplates = PORTFOLIO_DATA.filter((p) => {
    if (selectedCat === 'Semua Mainan (15)') return true;
    const theme = TOY_THEMES[p.name] || {};
    return theme.category === selectedCat;
  });

  return (
    <section className="section section-alt" id="portofolio">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ background: 'rgba(13, 85, 104, 0.08)', color: '#0d5568', borderColor: 'rgba(13, 85, 104, 0.2)' }}>
            Featured Listings + Showroom Types
          </span>
          <h2 className="section-title">
            15 Template Website E-Commerce &amp; Gerai <em>Toko Mainan</em>
          </h2>
          <p className="section-sub">
            Dirancang khusus untuk ekosistem toko mainan: mulai dari brick modular, action figures, plushie atelier, blind box pop-mart, hingga mainan edukasi montessori anak. Siap pakai dan terintegrasi sistem multi-cabang.
          </p>
        </div>

        {/* Category Filters matching reference mockup pills */}
        <div className="featured-type-pills">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              type="button"
              className={`type-pill ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="port-grid" id="portGrid">
          {filteredTemplates.map((p, idx) => {
            const status = statuses[(idx + 8) % statuses.length];
            const theme = TOY_THEMES[p.name] || {
              grad: 'linear-gradient(135deg, var(--branch-teal-800), var(--branch-teal-700))',
              accent: '#38bdf8',
              badge: 'TOY STORE',
              icon: 'ðŸ§¸'
            };
            const displayUrl = p.url
              ? p.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
              : `${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.toyhub.id`;

            return (
              <div
                key={idx}
                className="port-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
              >
                {/* System Node Chip */}
                <div className="sys-chip" style={{ margin: '16px 20px 8px' }}>
                  <span className="sc-node" style={{ color: 'var(--branch-teal-700)' }}>
                    Store Model {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="sc-status">
                    <i></i>
                    {status}
                  </span>
                </div>

                {/* Media frame with rich Toy Brand Banner */}
                <div
                  className="port-media"
                  onClick={() => openPreviewModal(p)}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    background: theme.grad,
                    borderRadius: '16px',
                    margin: '0 16px 16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 24px -10px rgba(0,0,0,0.35)',
                    minHeight: '230px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Browser Bar */}
                  <div
                    className="port-browser"
                    style={{
                      background: 'rgba(15, 23, 42, 0.55)',
                      backdropFilter: 'blur(6px)',
                      borderBottom: '1px solid rgba(255,255,255,0.12)',
                      padding: '8px 12px'
                    }}
                  >
                    <span className="pb-dot" style={{ background: '#ef4444' }}></span>
                    <span className="pb-dot" style={{ background: '#f59e0b' }}></span>
                    <span className="pb-dot" style={{ background: '#10b981' }}></span>
                    <span className="pb-url" style={{ color: '#e2e8f0', fontSize: '11px', fontWeight: 600 }}>
                      {displayUrl}
                    </span>
                  </div>

                  {/* Visual Content inside Banner */}
                  <div style={{ padding: '24px 20px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(255,255,255,0.18)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.05em',
                        marginBottom: '12px'
                      }}
                    >
                      <span>{theme.icon}</span> {theme.badge}
                    </div>

                    <h3
                      style={{
                        color: '#ffffff',
                        fontSize: '26px',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        textShadow: '0 3px 12px rgba(0,0,0,0.4)',
                        marginBottom: '6px'
                      }}
                    >
                      {p.name}
                    </h3>

                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 600 }}>
                      {p.industry}
                    </div>
                  </div>

                  {/* Bottom Action Bar inside Banner */}
                  <div
                    style={{
                      padding: '10px 14px',
                      background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.65))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#ffffff',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#34d399',
                          boxShadow: '0 0 8px #34d399'
                        }}
                      ></span>
                      Live Store Production
                    </span>

                    <span
                      className="btn-inspect-pill"
                      style={{
                        background: '#ffffff',
                        color: '#0f172a',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: 800,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Inspeksi 3D
                    </span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="port-info" style={{ padding: '0 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="port-row" style={{ marginBottom: '8px' }}>
                    <span className="port-industry" style={{ color: 'var(--branch-teal-700)', fontWeight: 800 }}>
                      {p.industry}
                    </span>
                    <span className="port-live-badge" style={{ color: '#16a34a' }}>
                      <span className="pulse-dot" style={{ background: '#16a34a' }}></span> Template Toko Siap Pakai
                    </span>
                  </div>

                  <p className="port-desc" style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                    {p.desc}
                  </p>

                  {/* 3 Circular/Boxed Stats */}
                  {p.stats && p.stats.length > 0 && (
                    <div
                      className="port-stats"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '8px',
                        padding: '10px 8px',
                        borderRadius: '12px',
                        marginBottom: '16px',
                        textAlign: 'center'
                      }}
                    >
                      {p.stats.map((sv, sIdx) => (
                        <div key={sIdx} className="port-stat">
                          <b style={{ fontSize: '15px', display: 'block' }}>{sv.v}</b>
                          <span style={{ fontSize: '10.5px', textTransform: 'uppercase', fontWeight: 700 }}>
                            {sv.l}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Feature Tags */}
                  {p.tags && p.tags.length > 0 && (
                    <div className="port-tags" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                      {p.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="port-tag"
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '3px 9px',
                            borderRadius: '9999px',
                            background: 'rgba(13,85,104,0.08)',
                            color: 'var(--branch-teal-600)',
                            border: '1px solid rgba(13,85,104,0.15)'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons: Inspeksi Live Preview & Pilih Template */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: 'auto' }}>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        openPreviewModal(p);
                      }}
                      style={{
                        padding: '10px 12px',
                        fontSize: '13px',
                        fontWeight: 700,
                        borderColor: '#cbd5e1',
                        color: '#0f172a',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Inspeksi
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        openConsultModal();
                      }}
                      style={{
                        padding: '10px 12px',
                        fontSize: '13px',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                        color: '#ffffff',
                        borderRadius: '9999px',
                        boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Pilih Template
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots matching reference mockup */}
        <div className="pagination-dots" aria-hidden="true">
          <span className="pagination-dot active"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
          <span className="pagination-dot"></span>
        </div>
      </div>
    </section>
  );
}


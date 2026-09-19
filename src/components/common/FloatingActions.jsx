import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WA_NUMBER = '6281234567890';

  const openWA = (text) => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Quick Contact Drawer */}
      <div className={`fab-drawer${isOpen ? ' open' : ''}`}>
        <div className="fab-drawer-head">
          <span className="fab-drawer-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Hubungi Tim Toko Mainan
          </span>
          <button type="button" className="fab-drawer-close" onClick={() => setIsOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="fab-drawer-body">
          <button
            type="button"
            className="fab-drawer-item"
            onClick={() => openWA('Halo TOYHUB, saya ingin konsultasi sistem franchise dan toko mainan')}
          >
            <span className="fab-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="1" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            </span>
            <span className="fab-item-text">
              <strong>Hubungi Kantor Pusat (HQ)</strong>
              <small>Tim Enterprise Mainan</small>
            </span>
            <svg className="fab-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <button
            type="button"
            className="fab-drawer-item"
            onClick={() => openWA('Halo TOYHUB, saya ingin diarahkan ke gerai toko mainan terdekat dari lokasi saya')}
          >
            <span className="fab-item-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="fab-item-text">
              <strong>Hubungi Toko Cabang Terdekat</strong>
              <small>Smart Toy Router</small>
            </span>
            <svg className="fab-item-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Action Button Stack */}
      <div className="fab-stack">
        {/* Back to Top */}
        <button
          type="button"
          className={`fab-btn fab-top${showTop ? ' visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        {/* WhatsApp FAB */}
        <button
          type="button"
          className="fab-btn fab-wa"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Hubungi WhatsApp Toko"
        >
          <svg viewBox="0 0 24 24" fill="#fff" width="24" height="24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>

      {/* Overlay when drawer is open */}
      {isOpen && (
        <div
          className="fab-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

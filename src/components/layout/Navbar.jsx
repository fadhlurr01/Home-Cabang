import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme, openConsultModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item')) {
        setOpenDropdown(null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpenDropdown(null);
    setIsMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`desktop-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Brand Logo: Circular Coral Badge + Crisp White Toy Architecture Icon */}
        <a href="#beranda" onClick={(e) => handleNavClick(e, 'beranda')} className="logo" aria-label="TOYHUB.CABANG Home">
          <span
            className="logo-mark"
            aria-hidden="true"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              boxShadow: '0 8px 20px -6px rgba(239, 68, 68, 0.55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Crisp White Modern Toy / Architecture Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '20px', height: '20px', display: 'block' }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#ffffff" fill="rgba(255,255,255,0.25)" />
              <path d="M2 17l10 5 10-5" stroke="#ffffff" />
              <path d="M2 12l10 5 10-5" stroke="#ffffff" />
              <circle cx="12" cy="7" r="1.5" fill="#ffffff" stroke="none" />
            </svg>
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span className="logo-word">
              TOYHUB<span className="logo-accent">.CABANG</span>
            </span>
            <span className="logo-tagline">
              Ekosistem Toko Mainan
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#beranda" onClick={(e) => handleNavClick(e, 'beranda')}>Beranda</a>

          {/* Solusi Dropdown */}
          <div
            className={`nav-item ${openDropdown === 'solusi' ? 'open' : ''}`}
            onMouseEnter={() => setOpenDropdown('solusi')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="nav-btn"
              onClick={() => toggleDropdown('solusi')}
            >
              <span>Solusi Toko</span>
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="dropdown">
              <div className="dd-title" style={{ color: 'var(--branch-teal-700)' }}>Solusi Toko Mainan</div>
              <a href="#solusi-model" onClick={(e) => handleNavClick(e, 'solusi-model')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b>Solusi Segmen Mainan</b>
                  <span>Franchise retail, chain hobby &amp; kids store</span>
                </span>
              </a>
              <a href="#pilar" onClick={(e) => handleNavClick(e, 'pilar')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b>4 Pilar Ekosistem</b>
                  <span>Sentralisasi katalog SKU &amp; stok cabang</span>
                </span>
              </a>
              <a href="#keunggulan" onClick={(e) => handleNavClick(e, 'keunggulan')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b>Keunggulan ToyHub</b>
                  <span>Zero-redeploy, isolasi privasi &amp; traffic drop</span>
                </span>
              </a>
              <a href="#proses" onClick={(e) => handleNavClick(e, 'proses')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b>Alur Peluncuran</b>
                  <span>Dari master katalog HQ hingga scale cabang</span>
                </span>
              </a>
            </div>
          </div>

          {/* 'Template & Produk' Dropdown Menu â€” All Royal Blue, Zero Orange */}
          <div
            className={`nav-item ${openDropdown === 'template' ? 'open' : ''}`}
            onMouseEnter={() => setOpenDropdown('template')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="nav-btn"
              onClick={() => toggleDropdown('template')}
            >
              <span>Template &amp; Produk</span>
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="dropdown">
              <div className="dd-title" style={{ color: 'var(--branch-teal-700)' }}>Template &amp; Modul Toko Mainan</div>
              <a href="#portofolio" onClick={(e) => handleNavClick(e, 'portofolio')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b style={{ color: 'var(--branch-text)' }}>Template E-Commerce Mainan (15+)</b>
                  <span style={{ color: 'var(--branch-slate-500)' }}>Brick, figures, dolls, plushie &amp; edu toys</span>
                </span>
              </a>
              <a href="#paket" onClick={(e) => handleNavClick(e, 'paket')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12h18M13 5l-1 7M8 3.5l3 6.5" />
                    <path d="M21 12l-9 9-9-9" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b style={{ color: 'var(--branch-text)' }}>Paket &amp; Harga Cabang</b>
                  <span style={{ color: 'var(--branch-slate-500)' }}>Mulai 3 outlet toko hingga mega franchise</span>
                </span>
              </a>
              <a href="#fitur" onClick={(e) => handleNavClick(e, 'fitur')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l-.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b style={{ color: 'var(--branch-text)' }}>Kontrol HQ vs Toko Cabang</b>
                  <span style={{ color: 'var(--branch-slate-500)' }}>Penguncian SRP harga &amp; izin promo lokal</span>
                </span>
              </a>
              <a href="#widget" onClick={(e) => handleNavClick(e, 'widget')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 14h7v6H4z" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b style={{ color: 'var(--branch-text)' }}>Widget Geo-Store &amp; Stock</b>
                  <span style={{ color: 'var(--branch-slate-500)' }}>Peta gerai mainan, stock ready &amp; CS WA</span>
                </span>
              </a>
              <a href="#addons" onClick={(e) => handleNavClick(e, 'addons')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v18M3 12h18" />
                    <circle cx="12" cy="12" r="10" opacity=".55" />
                  </svg>
                </span>
                <span className="dd-label">
                  <b style={{ color: 'var(--branch-text)' }}>Integrasi Kasir POS &amp; ERP</b>
                  <span style={{ color: 'var(--branch-slate-500)' }}>Moka, Pawoon, Accurate &amp; sinkronisasi barcode</span>
                </span>
              </a>
            </div>
          </div>

          {/* Perusahaan Dropdown */}
          <div
            className={`nav-item ${openDropdown === 'perusahaan' ? 'open' : ''}`}
            onMouseEnter={() => setOpenDropdown('perusahaan')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="nav-btn"
              onClick={() => toggleDropdown('perusahaan')}
            >
              <span>Perusahaan</span>
              <svg className="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="dropdown">
              <div className="dd-title" style={{ color: 'var(--branch-teal-700)' }}>Jaringan &amp; Legal</div>
              <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 11H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v3l3-3h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
                    <path d="M20 11h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v3l3-3h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
                  </svg>
                </span>
                <span className="dd-label"><b>Testimoni Retailer</b><span>Kisah owner franchise mainan</span></span>
              </a>
              <a href="#klien" onClick={(e) => handleNavClick(e, 'klien')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
                  </svg>
                </span>
                <span className="dd-label"><b>Jaringan Toko Mitra</b><span>Brand mainan &amp; hobby store</span></span>
              </a>
              <a href="#brosur" onClick={(e) => handleNavClick(e, 'brosur')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 10l5 5 5-5" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                  </svg>
                </span>
                <span className="dd-label"><b>Brosur &amp; Arsitektur 2026</b><span>Download panduan toko multi-cabang</span></span>
              </a>
              <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>
                <span className="dd-ico" style={{ background: 'rgba(13,85,104,0.08)', borderColor: 'rgba(13,85,104,0.18)' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--branch-teal-700)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9.2 9a3 3 0 0 1 5.6 1.2c0 1.8-2.8 2.4-2.8 3.8" />
                    <path d="M12 17.5h.01" />
                  </svg>
                </span>
                <span className="dd-label"><b>FAQ Jaringan Mainan</b><span>Tanya jawab integrasi cabang</span></span>
              </a>
            </div>
          </div>
        </div>

        {/* Nav Actions: Language Switcher, Theme Toggle, Konsultasi Gratis (Royal Blue) */}
        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label="Bahasa">
            <button
              type="button"
              className={language === 'id' ? 'active' : ''}
              onClick={() => setLanguage('id')}
              aria-label="Indonesia"
            >
              ID
            </button>
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="theme-btn"
            id="themeBtn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            title={theme === 'dark' ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>

          {/* 'Konsultasi Toko Mainan' CTA Button (Dark Teal Pill matching mockup) */}
          <button
            type="button"
            className="btn btn-teal nav-cta"
            onClick={openConsultModal}
            id="navKonsulBtn"
            style={{
              borderRadius: '999px',
              padding: '10px 22px'
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Konsultasi Gratis</span>
          </button>

          <button
            type="button"
            className="nav-burger"
            onClick={() => setIsMobileOpen(prev => !prev)}
            aria-label="Menu Navigasi"
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            {isMobileOpen ? (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — Only rendered when opened on mobile */}
      {isMobileOpen && (
        <div className="mobile-menu open" id="mobileMenu">
          {/* Quick theme & lang row in mobile drawer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0 14px', borderBottom: '1px solid rgba(13,85,104,0.12)', marginBottom: '8px' }}>
            <div className="lang-switch" role="group" aria-label="Bahasa Mobile" style={{ display: 'flex' }}>
              <button
                type="button"
                className={language === 'id' ? 'active' : ''}
                onClick={() => setLanguage('id')}
              >
                ID
              </button>
              <button
                type="button"
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="theme-btn"
              onClick={toggleTheme}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', width: 'auto', height: 'auto', fontSize: '13px', fontWeight: 700 }}
            >
              {theme === 'dark' ? (
                <>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                  <span>Mode Terang</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                  <span>Mode Gelap</span>
                </>
              )}
            </button>
          </div>

          <a href="#beranda" onClick={(e) => handleNavClick(e, 'beranda')}>Beranda</a>
          <a href="#solusi-model" onClick={(e) => handleNavClick(e, 'solusi-model')}>Solusi Toko Mainan</a>
          <a href="#pilar" onClick={(e) => handleNavClick(e, 'pilar')}>4 Pilar Ekosistem</a>
          <a href="#portofolio" onClick={(e) => handleNavClick(e, 'portofolio')}>Template Toko Mainan (15+)</a>
          <a href="#paket" onClick={(e) => handleNavClick(e, 'paket')}>Paket &amp; Harga</a>
          <a href="#proses" onClick={(e) => handleNavClick(e, 'proses')}>Alur Peluncuran</a>
          <a href="#keunggulan" onClick={(e) => handleNavClick(e, 'keunggulan')}>Keunggulan</a>
          <a href="#fitur" onClick={(e) => handleNavClick(e, 'fitur')}>Kontrol HQ vs Toko</a>
          <a href="#widget" onClick={(e) => handleNavClick(e, 'widget')}>Widget Geo-Store</a>
          <a href="#testimoni" onClick={(e) => handleNavClick(e, 'testimoni')}>Testimoni Retailer</a>
          <a href="#klien" onClick={(e) => handleNavClick(e, 'klien')}>Jaringan Toko Mitra</a>
          <a href="#brosur" onClick={(e) => handleNavClick(e, 'brosur')}>Brosur &amp; Panduan</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')}>FAQ Jaringan</a>
          <a href="#kontak" onClick={(e) => handleNavClick(e, 'kontak')}>Kontak</a>

          <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(13,85,104,0.12)' }}>
            <button
              type="button"
              className="btn btn-coral"
              onClick={() => { setIsMobileOpen(false); openConsultModal(); }}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Konsultasi Jaringan Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

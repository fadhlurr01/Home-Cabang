import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#beranda" className="logo">
              <span
                className="logo-mark"
                aria-hidden="true"
                style={{
                  background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
                  boxShadow: '0 8px 20px -6px rgba(37, 99, 235, 0.5)'
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '22px', height: '22px', display: 'block' }}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#ffffff" fill="rgba(255,255,255,0.2)" />
                  <path d="M2 17l10 5 10-5" stroke="#ffffff" />
                  <path d="M2 12l10 5 10-5" stroke="#ffffff" />
                  <circle cx="12" cy="7" r="1.5" fill="#ffffff" stroke="none" />
                  <circle cx="7" cy="14" r="1.2" fill="#ffffff" stroke="none" />
                  <circle cx="17" cy="14" r="1.2" fill="#ffffff" stroke="none" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span className="logo-word" style={{ fontWeight: 900, fontSize: '18px', letterSpacing: '-0.02em', color: 'var(--branch-text)' }}>
                  TOYHUB<span style={{ color: '#2563eb' }}>.CABANG</span>
                </span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--branch-slate-500)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Ekosistem Toko Mainan
                </span>
              </div>
            </a>
            <p>
              TOYHUB adalah platform website terpusat untuk ratusan cabang toko mainan anak, franchise hobby, collectibles, dan playground di Indonesia. Mengintegrasikan master katalog ribuan SKU, stok gerai real-time, dan WhatsApp router lokal.
            </p>
            <div className="footer-certs">
              <span className="cert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px', verticalAlign: '-2px' }}>
                  <path d="M12 2l7 3v6c0 5-3 8.5-7 10-4-1.5-7-5-7-10V5z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>{' '}
                Enkripsi Data
              </span>
              <span className="cert">PSE Kominfo</span>
              <span className="cert">ISO 27001</span>
            </div>
          </div>
          <div>
            <h4>Solusi Segmen Mainan</h4>
            <ul>
              <li><a href="#solusi-model">Franchise Toko Mainan</a></li>
              <li><a href="#solusi-model">Chain Store Mall &amp; Hobby</a></li>
              <li><a href="#solusi-model">Retail Blind Box &amp; Art Toys</a></li>
              <li><a href="#solusi-model">Portal Mitra Franchisee</a></li>
            </ul>
          </div>
          <div>
            <h4>Modul &amp; Teknologi</h4>
            <ul>
              <li><a href="#fitur">Master HQ Catalog Lock</a></li>
              <li><a href="#widget">Smart Toy Store Router</a></li>
              <li><a href="#widget">Mall &amp; Branch Locator</a></li>
              <li><a href="#portofolio">Template E-Commerce Mainan (15)</a></li>
              <li><a href="#addons">Integrasi Barcode &amp; POS Kasir</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontak &amp; Kantor</h4>
            <ul>
              <li><a href="#kontak">Head Office Jakarta</a></li>
              <li><a href="#kontak">Customer Support 24/7</a></li>
              <li><a href="mailto:halo@toyhub.id">Email Enterprise Mainan</a></li>
              <li><a href="#kontak">Jadwal Onboarding Toko</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Hak Cipta © 2026 TOYHUB.CABANG Enterprise — Ekosistem Toko Mainan Indonesia.</p>
          <div className="footer-legal">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat Layanan Toko</a>
            <a href="#">SLA Server Cloud</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

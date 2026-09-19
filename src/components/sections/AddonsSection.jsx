import React from 'react';

export default function AddonsSection() {
  return (
    <section className="section section-alt" id="addons">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Layanan Tambahan</span>
          <h2 className="section-title">Integrasi &amp; Infrastruktur Tingkat Enterprise</h2>
        </div>
        <div className="addon-grid">
          <div className="card addon-card">
            <div className="sys-chip">
              <span className="sc-node">Modul 01</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <div className="a-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 3h16v18l-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
            </div>
            <h4>Integrasi POS Kasir &amp; ERP</h4>
            <p>Hubungkan langsung ke Moka, Pawoon, Accurate, atau SAP.</p>
          </div>

          <div className="card addon-card">
            <div className="sys-chip">
              <span className="sc-node">Modul 02</span>
              <span className="sc-status"><i></i>SYNC</span>
            </div>
            <div className="a-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </div>
            <h4>Local SEO Multi-City</h4>
            <p>Verifikasi &amp; sinkronisasi Google Business Profile massal per alamat cabang.</p>
          </div>

          <div className="card addon-card">
            <div className="sys-chip">
              <span className="sc-node">Modul 03</span>
              <span className="sc-status"><i></i>LIVE</span>
            </div>
            <div className="a-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
              </svg>
            </div>
            <h4>Custom Domain Gateway</h4>
            <p>Dukungan domain independen untuk mitra franchisee eksklusif.</p>
          </div>

          <div className="card addon-card">
            <div className="sys-chip">
              <span className="sc-node">Modul 04</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <div className="a-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10a6 6 0 0 0-11.5-2A4.5 4.5 0 0 0 6.5 16H18a4 4 0 0 0 0-8z" />
              </svg>
            </div>
            <h4>Dedicated Cloud</h4>
            <p>Server berkinerja tinggi untuk bisnis jutaan pageview bulanan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

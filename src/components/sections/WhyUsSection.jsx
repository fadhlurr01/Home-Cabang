import React from 'react';

export default function WhyUsSection() {
  return (
    <section className="section" id="keunggulan">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Keunggulan Multi-Tenant</span>
          <h2 className="section-title">Mengapa Platform Multi-Cabang Ini?</h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="sys-chip">
              <span className="sc-node">Node 01</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <div className="why-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </div>
            <div>
              <h4>Zero Double Entry</h4>
              <p>Anda tidak perlu mengupdate 50 website berbeda ketika ada perubahan harga atau peluncuran produk baru.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="sys-chip">
              <span className="sc-node">Node 02</span>
              <span className="sc-status"><i></i>SYNC</span>
            </div>
            <div className="why-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div>
              <h4>Isolasi Privasi Data Cabang</h4>
              <p>Mitra cabang A tidak dapat melihat omzet, kontak pelanggan, atau data transaksi cabang B.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="sys-chip">
              <span className="sc-node">Node 03</span>
              <span className="sc-status"><i></i>LIVE</span>
            </div>
            <div className="why-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5C3 15 3 12.5 4.5 11 6 9.5 9 9 12 9s6 .5 7.5 2c1.5 1.5 1.5 4 0 5.5" />
                <path d="M12 9l1.5-3L16 4l1 3 2 1.5L19 12" />
                <path d="M5 20l2.5-2.5M19 20l-2.5-2.5" />
              </svg>
            </div>
            <div>
              <h4>Kesiapan Lonjakan Trafik Iklan</h4>
              <p>Arsitektur headless/static-edge generation yang tahan saat Anda menjalankan kampanye iklan digital serentak.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="sys-chip">
              <span className="sc-node">Node 04</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <div className="why-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M14 7h7v7" />
              </svg>
            </div>
            <div>
              <h4>Skalabilitas Tanpa Batas</h4>
              <p>Menambah dari 5 cabang ke 100 cabang tanpa merombak ulang arsitektur sistem dasar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

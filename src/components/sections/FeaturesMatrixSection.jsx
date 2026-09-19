import React from 'react';

export default function FeaturesMatrixSection() {
  return (
    <section className="section section-alt" id="fitur">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Feature Library</span>
          <h2 className="section-title">Kontrol HQ vs Izin Cabang — Tanpa Kompromi</h2>
          <p className="section-sub">Modul lengkap untuk kantor pusat, admin cabang, dan sistem keamanan role-based.</p>
        </div>
        <div className="feature-cols">
          <div className="card feature-col">
            <div className="sys-chip">
              <span className="sc-node">Node 01</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <h3><span className="col-badge badge-hq">HQ</span> Kantor Pusat</h3>
            <ul className="feature-list">
              <li><div className="fl-title">Global Content Lock</div><div className="fl-desc">Mencegah cabang merusak layout/standar brand.</div></li>
              <li><div className="fl-title">Centralized Pricing Matrix</div><div className="fl-desc">Set harga sama nasional atau price zone regional.</div></li>
              <li><div className="fl-title">Network Analytics</div><div className="fl-desc">Metrik traffic &amp; lead per cabang dalam satu panel.</div></li>
            </ul>
          </div>

          <div className="card feature-col">
            <div className="sys-chip">
              <span className="sc-node">Node 02</span>
              <span className="sc-status"><i></i>SYNC</span>
            </div>
            <h3><span className="col-badge badge-branch">Cabang</span> Admin Cabang / Mitra</h3>
            <ul className="feature-list">
              <li><div className="fl-title">Local Operating Hours</div><div className="fl-desc">Override jam buka &amp; banner untuk promo lokal khusus.</div></li>
              <li><div className="fl-title">Local Staff &amp; WhatsApp CS</div><div className="fl-desc">Kelola CS WhatsApp dan staf lokal cabang.</div></li>
              <li><div className="fl-title">Local Announcement</div><div className="fl-desc">Info tutup libur khusus cabang, langsung terbit.</div></li>
            </ul>
          </div>

          <div className="card feature-col">
            <div className="sys-chip">
              <span className="sc-node">Node 03</span>
              <span className="sc-status"><i></i>LIVE</span>
            </div>
            <h3>
              <span className="col-badge badge-sec">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px', verticalAlign: '-2px' }}>
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>{' '}
                Keamanan
              </span>
            </h3>
            <ul className="feature-list">
              <li><div className="fl-title">Role-Based Access Control</div><div className="fl-desc">Super Admin HQ, Area Regional Manager, Branch Admin.</div></li>
              <li><div className="fl-title">Two-Factor Authentication</div><div className="fl-desc">Lapisan keamanan ganda untuk semua akun panel.</div></li>
              <li><div className="fl-title">Audit Activity Log</div><div className="fl-desc">Rekam jejak lengkap seluruh perubahan sistem.</div></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

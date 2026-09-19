import React from 'react';

export default function WidgetsSection() {
  return (
    <section className="section" id="widget">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Toy Store Widget Engine</span>
          <h2 className="section-title">Widget Cerdas untuk Portal Toko Mainan Pusat &amp; Cabang</h2>
        </div>
        <div className="widget-grid">
          {/* Widget 1 */}
          <div className="card widget-card">
            <div className="sys-chip">
              <span className="sc-node">Widget 01</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <div className="w-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2" />
                <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4" />
                <path d="M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17" />
              </svg>
            </div>
            <h4>Smart Geo-Location Toy Store Router</h4>
            <p>Mengarahkan pembeli ke toko mainan terdekat yang memiliki stok seri yang dicari secara akurat.</p>
            <div className="w-demo">
              <div className="w-demo-label">Store Router · Live</div>
              <div className="w-demo-body">
                <div className="wd-map">
                  <div className="wd-pin p1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 22s-7-5.5-7-12a7 7 0 0 1 14 0c0 6.5-7 12-7 12z" />
                    </svg>
                  </div>
                  <div className="wd-pin p2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 22s-7-5.5-7-12a7 7 0 0 1 14 0c0 6.5-7 12-7 12z" />
                    </svg>
                  </div>
                  <div className="wd-pin p3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 22s-7-5.5-7-12a7 7 0 0 1 14 0c0 6.5-7 12-7 12z" />
                    </svg>
                  </div>
                  <div className="wd-map-label">Posisi Anda → Toko Mainan Terdekat</div>
                </div>
                <div className="wd-row">
                  <span className="wd-pin">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 22s-7-5.5-7-12a7 7 0 0 1 14 0c0 6.5-7 12-7 12z" />
                    </svg>
                  </span>
                  <div><b>ToyHub Paris Van Java Bandung</b> · 1,8 km (Stok Ready)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Widget 2 */}
          <div className="card widget-card">
            <div className="sys-chip">
              <span className="sc-node">Widget 02</span>
              <span className="sc-status"><i></i>SYNC</span>
            </div>
            <div className="w-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3L3 7v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7l-6-4" />
                <path d="M9 3v4h6V3" />
                <path d="M8 21v-7h8v7" />
              </svg>
            </div>
            <h4>Interactive Toy Store &amp; Mall Locator</h4>
            <p>Peta interaktif gerai toko mainan dengan filter fasilitas (Playground, Tester Table, Unboxing Corner).</p>
            <div className="w-demo">
              <div className="w-demo-label">Store Locator · Demo</div>
              <div className="w-demo-body">
                <div className="wd-map">
                  <div className="wd-pin p1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 22s-7-5.5-7-12a7 7 0 0 1 14 0c0 6.5-7 12-7 12z" />
                    </svg>
                  </div>
                  <div className="wd-pin p2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M12 22s-7-5.5-7-12a7 7 0 0 1 14 0c0 6.5-7 12-7 12z" />
                    </svg>
                  </div>
                  <div className="wd-map-label">8 Gerai Mall di Kota Ini</div>
                </div>
                <div className="wd-row">
                  <span className="wd-ico">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Fasilitas: Unboxing Booth · Kid Play Area · Click &amp; Collect
                </div>
              </div>
            </div>
          </div>

          {/* Widget 3 */}
          <div className="card widget-card">
            <div className="sys-chip">
              <span className="sc-node">Widget 03</span>
              <span className="sc-status"><i></i>LIVE</span>
            </div>
            <div className="w-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5z" />
              </svg>
            </div>
            <h4>Store-Specific WhatsApp Concierge</h4>
            <p>Tombol WhatsApp yang otomatis tersambung ke staf gerai terdekat untuk reservasi koleksi &amp; gift wrap.</p>
            <div className="w-demo">
              <div className="w-demo-label">WA Concierge · Auto-Route</div>
              <div className="w-demo-body">
                <div className="wd-chat">
                  <div className="wd-chat-bubble">Halo, apa seri Brick Modular Tokyo masih ready di cabang ini?</div>
                </div>
                <div className="wd-wa" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a', fontWeight: 700 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Tersambung ke Store Associate Cabang
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

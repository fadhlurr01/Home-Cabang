import React, { useState } from 'react';
import { MapPin, Navigation, Smartphone, CheckCircle, Search, RefreshCw, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function InteractiveWidgets() {
  const { showToast } = useApp();
  const [selectedCity, setSelectedCity] = useState('Jakarta');
  const [simulatedStock, setSimulatedStock] = useState({ item: 'KUBIKK Modular Set A-10', branch: 'Jakarta Pusat', qty: 14 });
  const [waLeadNumber, setWaLeadNumber] = useState('');

  const handleSimulateGeo = (city) => {
    setSelectedCity(city);
    showToast(`Simulasi GPS mendeteksi Anda di ${city}. Routing dialihkan ke Cabang ${city}.`, 'info');
  };

  const handleSimulateLead = (e) => {
    e.preventDefault();
    if (!waLeadNumber) return;
    showToast(`Lead dengan nomor ${waLeadNumber} berhasil dirutekan ke WhatsApp Manajer Cabang ${selectedCity}!`, 'success');
    setWaLeadNumber('');
  };

  return (
    <section className="section" id="widget">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Multi-Branch Widget Library</div>
          <h2 className="section-title">
            Widget Siap-Pasang untuk <em>Portal Pusat & Cabang</em>
          </h2>
          <p className="section-sub">
            Komponen interaktif yang siap disematkan di portal web untuk meningkatkan konversi dan kepuasan pelanggan secara instan.
          </p>
        </div>

        <div className="widget-grid">
          {/* Widget 1: Smart Geo Router */}
          <div className="card widget-card">
            <div className="sys-chip">
              <span className="sc-node">WIDGET-01</span>
              <span className="sc-status"><i></i> LIVE ROUTING</span>
            </div>

            <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(13,85,104,0.08)', color: 'var(--branch-teal-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Navigation size={22} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Smart Geo-Location Router
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              Menentukan cabang terdekat berdasarkan posisi GPS pengunjung atau pilihan kota secara otomatis.
            </p>

            <div className="widget-demo-box">
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--branch-teal-700)', marginBottom: '8px' }}>
                Simulasi Deteksi Lokasi Pengunjung:
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {['Jakarta', 'Surabaya', 'Medan', 'Bandung'].map(city => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => handleSimulateGeo(city)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      border: '1px solid #cbd5e1',
                      background: selectedCity === city ? 'var(--branch-teal-700)' : '#ffffff',
                      color: selectedCity === city ? '#ffffff' : '#1e293b'
                    }}
                  >
                    {city}
                  </button>
                ))}
              </div>
              <div style={{ padding: '8px 10px', borderRadius: '6px', background: 'rgba(13,85,104,0.08)', fontSize: '12.5px', color: 'var(--branch-teal-700)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} /> Terpilih: <strong>Cabang {selectedCity} (Jarak ~1.2 km)</strong>
              </div>
            </div>
          </div>

          {/* Widget 2: Real-time Stock Sync */}
          <div className="card widget-card">
            <div className="sys-chip">
              <span className="sc-node">WIDGET-02</span>
              <span className="sc-status"><i></i> INVENTORY SYNC</span>
            </div>

            <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(13,85,104,0.08)', color: 'var(--branch-teal-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <RefreshCw size={22} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Branch Inventory Checker
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              Pengunjung dapat melihat ketersediaan stok fisik barang di toko cabang terdekat sebelum berkunjung.
            </p>

            <div className="widget-demo-box">
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--branch-teal-700)', marginBottom: '8px' }}>
                Cek Ketersediaan Barang Cabang:
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a' }}>{simulatedStock.item}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
                  <span>Cabang {selectedCity}</span>
                  <span style={{ color: '#16a34a', fontWeight: 700 }}>Tersedia: 14 Unit</span>
                </div>
              </div>
              <div style={{ fontSize: '11.5px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle size={13} color="#16a34a" /> Sinkronisasi terakhir: 3 detik lalu dari POS Cabang
              </div>
            </div>
          </div>

          {/* Widget 3: WhatsApp Lead Router */}
          <div className="card widget-card">
            <div className="sys-chip">
              <span className="sc-node">WIDGET-03</span>
              <span className="sc-status"><i></i> WA LEAD ROUTER</span>
            </div>

            <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(13,85,104,0.08)', color: 'var(--branch-teal-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Smartphone size={22} />
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Auto WA Lead Distributor
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              Klik WhatsApp calon pembeli otomatis disambungkan ke nomor CS cabang yang relevan dengan lokasinya.
            </p>

            <div className="widget-demo-box">
              <form onSubmit={handleSimulateLead} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Masukkan nomor WA untuk tes..."
                  value={waLeadNumber}
                  onChange={(e) => setWaLeadNumber(e.target.value)}
                  style={{ padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px', outline: 'none' }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: '#16a34a',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Send size={13} /> Simulasikan Routing Lead
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Check, X, Shield, Lock } from 'lucide-react';

const MATRIX_ITEMS = [
  { feature: 'Manajemen Domain Utama & SSL Jaringan', hq: true, branch: false, note: 'Terkontrol penuh oleh Pusat' },
  { feature: 'Penetapan Master Desain, Tipografi & Logo', hq: true, branch: false, note: 'Proteksi integritas brand' },
  { feature: 'Publikasi Banner Promo Nasional', hq: true, branch: false, note: 'Broadcast serentak' },
  { feature: 'Pengaturan Jam Operasional & Hari Libur', hq: true, branch: true, note: 'Otonomi cabang lokal' },
  { feature: 'Manajemen Nomor WhatsApp Admin CS Cabang', hq: true, branch: true, note: 'Routing langsung ke staff' },
  { feature: 'Pembaruan Stok Barang Toko Lokal', hq: true, branch: true, note: 'Sinkron otomatis' },
  { feature: 'Akses Data Pelanggan Cabang Sendiri', hq: true, branch: true, note: 'Terisolasi antar cabang' },
  { feature: 'Akses Rekap Finansial Seluruh Cabang Lain', hq: true, branch: false, note: 'Privasi & keamanan data' }
];

export default function PermissionsMatrix() {
  return (
    <section className="section section-alt" id="fitur">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Tata Kelola Izin</div>
          <h2 className="section-title">
            Kontrol HQ vs Izin Cabang â€” <em>Tanpa Kompromi</em>
          </h2>
          <p className="section-sub">
            Struktur wewenang yang jelas memastikan kantor pusat memegang kendali atas aset brand dan kepatuhan, sementara cabang leluasa mengelola operasional harian.
          </p>
        </div>

        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: '#eff6ff', borderBottom: '1px solid #bfdbfe' }}>
                  <th style={{ padding: '16px 24px', fontSize: '13.5px', fontWeight: 800, color: 'var(--branch-teal-600)' }}>FITUR & WEWENANG SISTEM</th>
                  <th style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: 800, color: 'var(--branch-teal-600)', textAlign: 'center', width: '160px' }}>KANTOR PUSAT (HQ)</th>
                  <th style={{ padding: '16px 20px', fontSize: '13.5px', fontWeight: 800, color: 'var(--branch-teal-600)', textAlign: 'center', width: '160px' }}>CABANG / MITRA</th>
                  <th style={{ padding: '16px 24px', fontSize: '13.5px', fontWeight: 800, color: 'var(--branch-teal-600)' }}>KETERANGAN</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX_ITEMS.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-light)', background: idx % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)' }}>
                    <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                      {item.feature}
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      {item.hq ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: '#dcfce7', color: '#16a34a' }}>
                          <Check size={16} />
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: '#fee2e2', color: '#dc2626' }}>
                          <X size={16} />
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                      {item.branch ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: '#dcfce7', color: '#16a34a' }}>
                          <Check size={16} />
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', background: '#f1f5f9', color: '#94a3b8' }}>
                          <Lock size={14} />
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '13px', color: 'var(--text-muted)' }}>
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}


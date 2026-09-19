import React from 'react';
import { Cpu, ShieldAlert, Zap, Sliders, RefreshCw, BarChart } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Zap,
    title: 'Zero Re-deployment Architecture',
    desc: 'Menambah cabang ke-51 atau ke-100 cukup via form dashboard HQ. Cabang baru langsung aktif dalam hitungan detik tanpa deploy ulang.'
  },
  {
    icon: ShieldAlert,
    title: 'Brand Integrity Guard',
    desc: 'Mencegah mitra atau cabang mengubah logo, font resmi, atau tata letak inti secara ilegal, menjaga citra merek tetap seragam.'
  },
  {
    icon: Sliders,
    title: 'Dynamic Regional Pricing',
    desc: 'Terapkan perbedaan harga barang atau biaya kirim berdasarkan zona geografis (WIB, WITA, WIT) secara otomatis.'
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Catalog Sync',
    desc: 'Saat produk baru diluncurkan di pusat, seluruh katalog cabang otomatis terupdate dalam waktu kurang dari 500 milidetik.'
  },
  {
    icon: Cpu,
    title: 'Edge Caching & Cloudflare Fleet',
    desc: 'Waktu muat halaman kurang dari 0.8 detik di seluruh Indonesia berkat jaringan CDN Edge terdekat dari lokasi pengunjung.'
  },
  {
    icon: BarChart,
    title: 'Audit Trail & Financial Transparency',
    desc: 'Semua perubahan data stok dan penjualan dicatat dalam log permanen yang tidak dapat dimanipulasi oleh oknum cabang.'
  }
];

export default function WhyUsSection() {
  return (
    <section className="section" id="keunggulan">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Keunggulan Platform</div>
          <h2 className="section-title">
            Mengapa Platform Multi-Cabang Ini <em>Jauh Lebih Unggul</em>?
          </h2>
          <p className="section-sub">
            Dibangun bukan dengan website WordPress terpisah-pisah, melainkan sistem enterprise satu arsitektur terpadu.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div key={idx} className="card">
                <div className="sys-chip">
                  <span className="sc-node">EDGE · 0{idx + 1}</span>
                  <span className="sc-status"><i></i> READY</span>
                </div>

                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'rgba(13,85,104,0.08)',
                  border: '1px solid rgba(13,85,104,0.15)',
                  color: 'var(--branch-teal-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {adv.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

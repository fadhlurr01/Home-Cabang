import React from 'react';
import { Store, ShoppingBag, Network, Check, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const SOLUTIONS = [
  {
    icon: Store,
    title: 'Waralaba & Kemitraan (Franchise)',
    desc: 'Platform terpusat untuk jaringan franchise dengan sistem subdomain otomatis untuk setiap franchisee dan proteksi konsistensi merek.',
    features: [
      'Subdomain otomatis per cabang (misal: thamrin.brand.com)',
      'Katalog produk pusat dengan override harga regional',
      'Lead routing otomatis langsung ke WhatsApp cabang terdekat',
      'Dashboard royalti & analitik penjualan per outlet'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Jaringan Toko Fisik',
    desc: 'Integrasi omnichannel antara toko online pusat dengan puluhan outlet offline di seluruh kota dengan akurasi stok real-time.',
    features: [
      'Store locator interaktif dengan GPS radius pengunjung',
      'Sinkronisasi stok barang per cabang outlet',
      'Layanan Click & Collect (Pesan online, ambil di toko)',
      'SEO lokal otomatis untuk Google Business Profile'
    ]
  },
  {
    icon: Network,
    title: 'Holding & Korporasi Multi-Unit',
    desc: 'Tata kelola digital multi-tenant untuk grup perusahaan kontraktor, konstruksi, atau holding dengan puluhan anak perusahaan.',
    features: [
      'Satu instalasi arsitektur untuk ratusan entitas mandiri',
      'Kontrol hak akses bertingkat (HQ Admin vs Branch Officer)',
      'Audit log tersentralisasi untuk tata kelola kepatuhan',
      'Infrastruktur cloud berstandar enterprise tingkat tinggi'
    ]
  }
];

export default function SolutionsSection() {
  const { openConsultModal } = useApp();

  return (
    <section className="section" id="solusi-model">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Solusi Segmen Bisnis</div>
          <h2 className="section-title">
            Didesain Persis untuk Model <em>Ekspansi Jaringan</em> Anda
          </h2>
          <p className="section-sub">
            Setiap model pertumbuhan memiliki tantangan arsitektur berbeda. Platform kami dibangun khusus untuk menjawab fleksibilitas kontrol kantor pusat dan otonomi cabang.
          </p>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div key={idx} className="card solution-card">
                <div className="sys-chip">
                  <span className="sc-node">MODEL-{idx + 1}</span>
                  <span className="sc-status"><i></i> SIAP IMPLEMENTASI</span>
                </div>

                <div className="solution-icon-box">
                  <Icon size={26} />
                </div>

                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>

                <ul className="solution-feats">
                  {sol.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={openConsultModal}
                  className="btn btn-outline"
                  style={{ marginTop: '24px', width: '100%' }}
                >
                  Konsultasikan Model Ini <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

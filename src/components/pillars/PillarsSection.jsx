import React from 'react';
import { Globe, Layers, Search, BarChart3 } from 'lucide-react';

const PILLARS = [
  {
    num: '01',
    icon: Globe,
    title: 'Arsitektur Multi-Tenant & Domain Routing',
    desc: 'Satu basis kode dan database terpusat yang mampu melayani ratusan domain kustom atau subdomain cabang secara dinamis tanpa replikasi kode manual.'
  },
  {
    num: '02',
    icon: Layers,
    title: 'Centralized Content & Branch Override',
    desc: 'HQ dapat mempublikasikan promosi serentak ke seluruh jaringan nasional hanya dalam 1 klik, sementara setiap cabang memiliki hak izin untuk mengubah info lokal.'
  },
  {
    num: '03',
    icon: Search,
    title: 'Lokalisasi SEO & Sinkronisasi GBP',
    desc: 'Setiap halaman cabang dioptimasi untuk pencarian Google lokal (Local SEO), lengkap dengan skema data terstruktur LocalBusiness dan integrasi peta.'
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Analitik Terintegrasi & Multi-Branch Dashboard',
    desc: 'Pantau trafik pengunjung, tingkat konversi, dan performa lead masing-masing cabang dari satu dasbor analitik komparatif secara real-time.'
  }
];

export default function PillarsSection() {
  return (
    <section className="section section-alt" id="pilar">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Fondasi Teknologi</div>
          <h2 className="section-title">
            Empat Pilar Ekosistem Digital <em>Multi-Cabang</em>
          </h2>
          <p className="section-sub">
            Arsitektur yang dirancang tahan uji untuk menskalakan bisnis Anda dari 5 cabang menjadi 500+ cabang tanpa kendala infrastruktur.
          </p>
        </div>

        <div className="pillars-grid">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="card pillar-card">
                <div className="pillar-number">{p.num}</div>

                <div className="sys-chip">
                  <span className="sc-node">PILAR Â· {p.num}</span>
                  <span className="sc-status"><i></i> CORE SYSTEM</span>
                </div>

                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--branch-teal-700), var(--branch-teal-600))',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Icon size={22} />
                </div>

                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

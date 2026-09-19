import React from 'react';
import { Compass, PenTool, Database, CheckCircle2, Rocket } from 'lucide-react';

const PHASES = [
  {
    phase: '01',
    icon: Compass,
    title: 'Fase 1: Blueprint & Pemetaan Domain Cabang',
    desc: 'Audit kebutuhan hierarki cabang, struktur penamaan domain/subdomain, serta pemetaan hak akses admin pusat versus cabang.'
  },
  {
    phase: '02',
    icon: PenTool,
    title: 'Fase 2: Master Design System & Kustomisasi Identitas',
    desc: 'Penyusunan desain UI/UX berstandar tinggi yang konsisten dengan identitas brand, lengkap dengan adaptasi varian visual cabang.'
  },
  {
    phase: '03',
    icon: Database,
    title: 'Fase 3: Integrasi Data & Branch Automation',
    desc: 'Pemasangan sistem routing lead WhatsApp otomatis, sinkronisasi stok produk antar cabang, dan integrasi API CRM/POS.'
  },
  {
    phase: '04',
    icon: CheckCircle2,
    title: 'Fase 4: Deployment Staging & Quality Assurance',
    desc: 'Pengujian performa beban, kecepatan akses regional, validasi SSL multi-domain, serta simulasi transaksi di tiap cabang.'
  },
  {
    phase: '05',
    icon: Rocket,
    title: 'Fase 5: Peluncuran Resmi & Dukungan Skalabilitas',
    desc: 'Go-live serentak seluruh cabang dengan pemantauan uptime 24/7, pelatihan tim operasional HQ, serta pendampingan ekspansi cabang baru.'
  }
];

export default function WorkflowTimeline() {
  return (
    <section className="section section-alt" id="proses">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Metodologi Implementasi</div>
          <h2 className="section-title">
            Dari Setup HQ hingga Scale — <em>dalam 5 Fase</em>
          </h2>
          <p className="section-sub">
            Alur kerja terstruktur yang menjamin proses deployment ratusan cabang berjalan mulus tanpa mengganggu operasional harian.
          </p>
        </div>

        <div className="timeline-container">
          {PHASES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="timeline-step">
                <div className="timeline-marker">
                  {p.phase}
                </div>
                <div className="timeline-card">
                  <div className="sys-chip" style={{ marginBottom: '12px' }}>
                    <span className="sc-node">TAHAP · {p.phase}</span>
                    <span className="sc-status"><i></i> VERIFIED WORKFLOW</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

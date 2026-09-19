import React from 'react';
import { Building2, Store, Landmark, ShieldCheck } from 'lucide-react';

const CLIENT_GROUPS = [
  { name: 'Nusantara Brick & Toy Co.', branches: '48 Cabang', type: 'E-Commerce Retail Chain' },
  { name: 'Kopi Kenangan Senja Group', branches: '124 Outlet', type: 'F&B Franchise' },
  { name: 'Mega Auto Workshop Network', branches: '35 Bengkel', type: 'Jasa & Servis Resmi' },
  { name: 'Atelier Mode Indonesia', branches: '28 Butik', type: 'Fashion & Haute Couture' },
  { name: 'Logistik Kilat Nusantara', branches: '92 Hub', type: 'Ekspedisi & Cargo' },
  { name: 'Klinik Sehat Prima Dental', branches: '22 Cabang', type: 'Healthcare & Medis' }
];

export default function ClientsSection() {
  return (
    <section className="section" id="klien">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Validasi Pasar</div>
          <h2 className="section-title">
            Dipercaya Bisnis Multi-Cabang <em>Terdepan Indonesia</em>
          </h2>
          <p className="section-sub">
            Bergabunglah dengan ratusan pengusaha jaringan yang telah mentransformasi sistem website mereka dari model konvensional menjadi terpusat.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {CLIENT_GROUPS.map((client, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '22px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '18px',
                flexShrink: 0
              }}>
                <Store size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '2px' }}>
                  {client.name}
                </h4>
                <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: 700 }}>
                  {client.branches} · {client.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const TOY_CLIENTS = [
  'BrickNusantara',
  'ToyZone Megastore',
  'PlayBox Indonesia',
  'KolektorFigure',
  'MontessoriPlay',
  'PlushieAtelier',
  'BlindBox Collective',
  'GundamVault',
  'HobbyChain ID',
  'KiddoStore Mall',
  'MiniatureWorld',
  'AnimeSphere Studio',
  'EduPlay Network',
  'BrickEmpire',
  'TeddyBoutique',
  'WonderPlay Store',
  'PlayVault Indonesia',
  'NeoPop Retail',
  'Hamleys Partner',
  'PopToys Group'
];

export default function ClientsSection() {
  return (
    <section className="section" id="klien">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Dipercaya Retailer &amp; Toko Mainan</span>
          <h2 className="section-title">Dipercaya Jaringan Toko Mainan &amp; Hobby Indonesia</h2>
        </div>
        <div className="logos-marquee">
          <div className="logos-track">
            {TOY_CLIENTS.concat(TOY_CLIENTS).map((client, i) => (
              <div key={i} className="logo-tile">
                <span className="lt-ico" style={{ color: '#2563eb' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </span>
                {client}
              </div>
            ))}
          </div>
        </div>
        <p className="logos-sub">
          Mulai dari butik mainan edukasi independen, franchise blind box di mall, hingga jaringan waralaba retail mainan nasional dengan ratusan gerai.
        </p>
      </div>
    </section>
  );
}

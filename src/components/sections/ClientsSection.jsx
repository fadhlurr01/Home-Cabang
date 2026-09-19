import React from 'react';

const ROW_1 = [
  'BrickNusantara', 'ToyZone Megastore', 'PlayBox Indonesia', 'KolektorFigure',
  'MontessoriPlay', 'PlushieAtelier', 'BlindBox Collective', 'GundamVault',
  'HobbyChain ID', 'KiddoStore Mall'
];

const ROW_2 = [
  'MiniatureWorld', 'AnimeSphere Studio', 'EduPlay Network', 'BrickEmpire',
  'TeddyBoutique', 'WonderPlay Store', 'PlayVault Indonesia', 'NeoPop Retail',
  'Hamleys Partner', 'PopToys Group'
];

function MarqueeRow({ items, direction = 'left', speed = 35 }) {
  const doubled = items.concat(items);
  return (
    <div className="cl-marquee-row">
      <div
        className={`cl-marquee-track cl-marquee-${direction}`}
        style={{ '--marquee-duration': `${speed}s` }}
      >
        {doubled.map((name, i) => (
          <div key={i} className="cl-logo-tile">
            <span className="cl-tile-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </span>
            <span className="cl-tile-name">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="section cl-section" id="klien">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Dipercaya Retailer &amp; Toko Mainan</span>
          <h2 className="section-title">
            Dipercaya Jaringan Toko Mainan &amp; <em>Hobby Indonesia</em>
          </h2>
        </div>
      </div>
      {/* Two-row auto-scroll marquee */}
      <div className="cl-marquee-wrap">
        <MarqueeRow items={ROW_1} direction="left" speed={40} />
        <MarqueeRow items={ROW_2} direction="right" speed={45} />
      </div>
      <div className="container">
        <p className="cl-sub">
          Mulai dari butik mainan edukasi independen, franchise blind box di mall, hingga jaringan waralaba retail mainan nasional dengan ratusan gerai.
        </p>
      </div>
    </section>
  );
}

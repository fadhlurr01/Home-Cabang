import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/templates';
import PortfolioCard from './PortfolioCard';
import { Layers } from 'lucide-react';

const CATEGORIES = [
  'Semua Template',
  'Brick Modular',
  'Fashion Doll',
  'Collectibles & Toys',
  'Kawaii & Lifestyle',
  'Luxury Plush'
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Semua Template');

  const filteredItems = PORTFOLIO_DATA.filter(item => {
    if (activeCategory === 'Semua Template') return true;
    if (activeCategory === 'Brick Modular') return item.tags.some(t => t.toLowerCase().includes('brick'));
    if (activeCategory === 'Fashion Doll') return item.tags.some(t => t.toLowerCase().includes('doll'));
    if (activeCategory === 'Collectibles & Toys') return item.tags.some(t => t.toLowerCase().includes('action') || t.toLowerCase().includes('collect'));
    if (activeCategory === 'Kawaii & Lifestyle') return item.tags.some(t => t.toLowerCase().includes('kawaii'));
    if (activeCategory === 'Luxury Plush') return item.tags.some(t => t.toLowerCase().includes('plush'));
    return true;
  });

  return (
    <section className="section section-alt" id="portofolio">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Template & Produk Unggulan</div>
          <h2 className="section-title">
            Template E-Commerce untuk <em>Berbagai Industri</em>
          </h2>
          <p className="section-sub">
            Jelajahi 15+ template e-commerce modern dengan fitur interaktif, siap diadaptasi untuk ratusan cabang dan jaringan waralaba retail Anda.
          </p>
        </div>

        {/* Categories */}
        <div className="portfolio-filter">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, idx) => (
            <PortfolioCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

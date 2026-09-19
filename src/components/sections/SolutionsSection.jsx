import React from 'react';
import { useApp } from '../../context/AppContext';
import heroBuildingImg from '../../assets/images/hero-building.jpg';
import storeBandungImg from '../../assets/images/store-bandung.jpg';
import storeSurabayaImg from '../../assets/images/store-surabaya.jpg';

export default function SolutionsSection() {
  const { openConsultModal } = useApp();

  return (
    <section className="section section-solutions" id="solusi-model" style={{ paddingTop: '90px' }}>
      <div className="container">
        {/* Top Header Split: Coral Accent Title + 2 Circular Badges matching reference mockup */}
        <div className="showcase-head-split">
          <div>
            <span className="eyebrow eyebrow-coral">
              Solusi Segmen Mainan &amp; Hobby
            </span>
            <h2 className="showcase-title-coral">
              Solusi Lengkap <span className="coral-text">Jaringan Toko Mainan</span> Modern &amp; Terintegrasi
            </h2>
            <p className="section-sub" style={{ marginTop: '12px' }}>
              Arsitektur digital multi-tenant yang disesuaikan persis untuk operasional gerai retail mainan anak, toko brick/lego, art toys, hobby collectibles, hingga chain store di mall Indonesia.
            </p>
          </div>

          <div className="circle-badge-list">
            <div className="circle-badge-item">
              <div className="cb-icon coral">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 22, height: 22 }}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="cb-content">
                <b>Sinkronisasi Multi-Cabang Real-Time</b>
                <p>Satu update katalog dari HQ langsung terbit serentak di 50+ website cabang dalam &lt;60 detik.</p>
              </div>
            </div>

            <div className="circle-badge-item">
              <div className="cb-icon teal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 22, height: 22 }}>
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="cb-content">
                <b>Geo-Smart WhatsApp Order Routing</b>
                <p>Pembeli otomatis diarahkan ke store terdekat dari GPS dengan stok rak display lokal yang akurat.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric Masonry Showcase Grid matching bottom half of reference mockup */}
        <div className="showcase-masonry-grid" style={{ marginBottom: '64px' }}>
          {/* Left Tall Card: Deep Oceanic Teal Showcase */}
          <div className="masonry-tall-card">
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#67e8f9', display: 'block', marginBottom: '8px' }}>
                CENTRAL HQ ARCHITECTURE
              </span>
              <h3>Kendali Penuh dari Satu Dashboard Pusat (HQ)</h3>
              <p>
                Hilangkan kekacauan stok dan duplikasi pekerjaan. Seluruh cabang terhubung dalam satu pangkalan data terenkripsi dengan proteksi harga nasional (SRP).
              </p>

              <ul className="masonry-tall-list">
                <li>Standardisasi katalog produk &amp; proteksi harga resmi nasional dari HQ</li>
                <li>Setup portal website sub-domain instan untuk mitra franchisee baru</li>
                <li>Pemisahan rekening pembayaran &amp; omzet per gerai cabang mandiri</li>
                <li>Master Brand Lock — mitra fokus melayani pembeli &amp; event lokal</li>
                <li>Centralized Barcode &amp; Toy Catalog Aggregator multi-kategori</li>
              </ul>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-coral"
                onClick={openConsultModal}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Konsultasi Model Bisnis Toko
              </button>
            </div>
          </div>

          {/* Right 2x2 Showcase Photo Cards */}
          <div className="masonry-2x2">
            <div className="masonry-photo-card">
              <img src={heroBuildingImg} alt="Flagship Megastore Jakarta" />
              <div className="mp-body">
                <span className="mp-badge">MODUL 01 · FLAGSHIP</span>
                <h4>Jakarta Mega Showroom</h4>
                <p>Grand Indonesia Mall · 1.420 SKU Ready · Live POS Integration</p>
              </div>
            </div>

            <div className="masonry-photo-card">
              <img src={storeBandungImg} alt="Bandung MakerToys Studio" />
              <div className="mp-body">
                <span className="mp-badge">MODUL 02 · FRANCHISE</span>
                <h4>Bandung Brick &amp; Modular</h4>
                <p>Paris Van Java · Designer Sets · Studio Virtual Builder</p>
              </div>
            </div>

            <div className="masonry-photo-card">
              <img src={storeSurabayaImg} alt="Surabaya Anime Arcade" />
              <div className="mp-body">
                <span className="mp-badge">MODUL 03 · BLIND BOX</span>
                <h4>Surabaya Art Toys Haven</h4>
                <p>Tunjungan Plaza · Secret Drops · Kolektor WhatsApp Router</p>
              </div>
            </div>

            <div className="masonry-photo-card">
              <img src={storeBandungImg} alt="Retail Chain Store" />
              <div className="mp-body">
                <span className="mp-badge">MODUL 04 · CHAIN MALL</span>
                <h4>Multi-Mall Kios Retail</h4>
                <p>Centralized Barcode · Fast Deployment &lt;60 Detik</p>
              </div>
            </div>
          </div>
        </div>

        {/* Existing 3 Deep Module Cards (Preserving all original content) */}
        <div className="seg-grid">
          {/* Modul 1: Franchise Toko Mainan */}
          <div className="card seg-card">
            <div className="sys-chip">
              <span className="sc-node">Modul 01</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <div className="seg-ico" style={{ color: '#ef4444' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L3 13V3h10l7.59 7.59a2 2 0 0 1 0 2.82z" />
                <path d="M7 7h.01" />
              </svg>
            </div>
            <h3>Franchise Toko Mainan &amp; Brick</h3>
            <p>Waralaba retail mainan edukasi &amp; brick modular dengan standardisasi visual brand dan proteksi SRP harga nasional.</p>
            <ul className="seg-list">
              <li>Standardisasi katalog produk &amp; proteksi harga resmi dari kantor pusat (HQ)</li>
              <li>Setup portal website sub-domain instan untuk setiap mitra franchisee toko mainan baru</li>
              <li>Pemisahan rekening pembayaran &amp; laporan penjualan per gerai franchisee</li>
              <li>Master Brand Lock — mitra hanya mengelola stok lokal dan promo event store</li>
            </ul>
          </div>

          {/* Modul 2: Chain Store Toys & Flagship */}
          <div className="card seg-card">
            <div className="sys-chip">
              <span className="sc-node">Modul 02</span>
              <span className="sc-status"><i></i>SYNC</span>
            </div>
            <div className="seg-ico" style={{ color: '#0d5568' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="1" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
              </svg>
            </div>
            <h3>Chain Store Toys &amp; Hobby Gerai Mall</h3>
            <p>Jaringan toko mainan, action figures &amp; anime collectibles multi-mall dengan integrasi inventaris barcode real-time.</p>
            <ul className="seg-list">
              <li>Konsolidasi stok ribuan SKU mainan di seluruh gerai toko secara real-time</li>
              <li>Centralized Barcode &amp; Toy Catalog Aggregator per kategori usia &amp; brand</li>
              <li>Satu update katalog dari HQ → langsung terbit serentak di 50+ website cabang</li>
              <li>Hak akses bertingkat: Head Merchandiser HQ vs Store Manager Mall</li>
            </ul>
          </div>

          {/* Modul 3: Multi-Cabang Mandiri & Blind Box */}
          <div className="card seg-card wide">
            <div className="sys-chip">
              <span className="sc-node">Modul 03</span>
              <span className="sc-status"><i></i>LIVE</span>
            </div>
            <div className="seg-ico" style={{ color: '#0b3d4f' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
              </svg>
            </div>
            <h3>Retail Pop-Mart, Blind Box &amp; Kolektor</h3>
            <p>Jaringan toko mainan koleksi yang membutuhkan sistem reservasi limited drop dan routing WhatsApp ke toko terdekat.</p>
            <ul className="seg-list">
              <li>Geo-Smart WhatsApp Routing: Pembeli otomatis diarahkan ke store terdekat dari GPS</li>
              <li>Deteksi kota otomatis dengan tampilan stok display toko lokal yang akurat</li>
              <li>Fitur pre-order limited drop (secret chase &amp; exclusive convention items)</li>
              <li>Integrasi sistem member point &amp; loyalty kolektor mainan antar cabang</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


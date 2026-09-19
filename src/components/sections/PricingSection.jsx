import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function PricingSection() {
  const { openConsultModal } = useApp();
  const [billing, setBilling] = useState('monthly');

  const isYearly = billing === 'yearly';

  return (
    <section className="section" id="paket">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Pilih Paket Toko Mainan</span>
          <h2 className="section-title">Paket Website Berbasis Skala Gerai Toko Mainan</h2>
          <p className="section-sub">
            Matriks lisensi arsitektur multi-tenant yang tumbuh bersama ekspansi jaringan toko mainan dan franchise Anda.
          </p>
        </div>

        <div className="billing-toggle" id="billingToggle" role="group" aria-label="Periode tagihan">
          <button
            type="button"
            className={!isYearly ? 'active' : ''}
            onClick={() => setBilling('monthly')}
          >
            Bulanan
          </button>
          <button
            type="button"
            className={isYearly ? 'active' : ''}
            onClick={() => setBilling('yearly')}
          >
            Tahunan <em>−15%</em>
          </button>
        </div>

        <div className="pricing-grid">
          {/* Starter */}
          <div className="card price-card" data-pkg="starter">
            <div className="sys-chip">
              <span className="sc-node">Paket 01</span>
              <span className="sc-status"><i></i>AKTIF</span>
            </div>
            <h3>Toy Store Starter</h3>
            <div className="price-tagline">3 – 5 Gerai Toko Mainan</div>
            <div className="price-box">
              <div className="price-main">
                <span className="price-amount">
                  {isYearly ? 'Rp 499 rb' : 'Rp 599 rb'}
                </span>
                <span className="price-per">{isYearly ? '/bulan (tahunan)' : '/bulan'}</span>
              </div>
              <div className="price-note">
                {isYearly ? 'Hemat 15% · tagihan tahunan' : 'Billing bulanan · tanpa kontrak'}
              </div>
            </div>
            <ul className="price-feats">
              <li>Arsitektur Sub-Folder Toko (domain.com/store-jakarta)</li>
              <li>Master Katalog Mainan + Smart WhatsApp Routing ke 5 Toko</li>
              <li>Katalog Lengkap Usia Anak, Seri Koleksi &amp; Brand Mainan</li>
              <li>Dashboard Admin HQ untuk update promo &amp; event gerai</li>
              <li>Cloud Server Shared High-Speed &amp; SSL Terpadu</li>
            </ul>
            <button type="button" className="btn btn-outline" onClick={openConsultModal}>
              Pilih Paket Starter
            </button>
          </div>

          {/* Chain Growth (Featured) */}
          <div className="card price-card featured" data-pkg="chain">
            <div className="popular-tag">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.2 5.8 20.9l1.6-7L2 9.2l7.1-.6z" />
              </svg>
              Pilihan Favorit Retail Mainan
            </div>
            <div className="feat-shine"></div>
            <div className="sys-chip">
              <span className="sc-node">Paket 02</span>
              <span className="sc-status"><i></i>SYNC</span>
            </div>
            <h3>Chain Toy Store Growth</h3>
            <div className="price-tagline">6 – 25 Gerai Toko Mall / Kota</div>
            <div className="price-box">
              <div className="price-main">
                <span className="price-amount">
                  {isYearly ? 'Rp 1,49 jt' : 'Rp 1,75 jt'}
                </span>
                <span className="price-per">{isYearly ? '/bulan (tahunan)' : '/bulan'}</span>
              </div>
              <div className="price-note">
                {isYearly ? 'Hemat 15% · tagihan tahunan' : 'Billing bulanan · tanpa kontrak'}
              </div>
            </div>
            <ul className="price-feats">
              <li>Arsitektur Sub-Domain Multi-Tenant (bandung.toyhub.id)</li>
              <li>Real-Time Barcode &amp; Stock Availability per Gerai Toko</li>
              <li>Hak Akses Bertingkat (Admin HQ vs Store Manager Cabang)</li>
              <li>Integrasi Google Maps Toko Mainan + Local SEO per Cabang</li>
              <li>Dedicated Virtual Cloud Instance + Daily Backup Data</li>
            </ul>
            <button type="button" className="btn btn-primary" onClick={openConsultModal}>
              Pilih Paket Chain Growth
            </button>
          </div>

          {/* Franchise Enterprise */}
          <div className="card price-card" data-pkg="enterprise">
            <div className="sys-chip">
              <span className="sc-node">Paket 03</span>
              <span className="sc-status"><i></i>LIVE</span>
            </div>
            <h3>Mega Franchise Toy Enterprise</h3>
            <div className="price-tagline">Unlimited Gerai &amp; Whitelabel Mitra</div>
            <div className="price-box">
              <div className="price-main">
                <span className="price-amount">
                  {isYearly ? 'Rp 2,99 jt' : 'Rp 3,5 jt'}
                </span>
                <span className="price-per">{isYearly ? '/bulan (tahunan)' : '/bulan'}</span>
              </div>
              <div className="price-note">
                {isYearly ? 'Hemat 15% · tagihan tahunan' : 'Billing bulanan · tanpa kontrak'}
              </div>
            </div>
            <ul className="price-feats">
              <li>Custom Domain Mandiri untuk Setiap Toko Franchise Mitra</li>
              <li>Integrasi API ke POS Kasir (Moka, Pawoon, Accurate, SAP)</li>
              <li>Automated Franchise Store Onboarding (Setup 1-Klik)</li>
              <li>Modul Pre-Order Limited Blind Box Drop &amp; Member Kolektor</li>
              <li>Server Cluster High-Concurrency + 24/7 SLA Priority</li>
            </ul>
            <button type="button" className="btn btn-outline" onClick={openConsultModal}>
              Konsultasi Enterprise Toko Mainan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

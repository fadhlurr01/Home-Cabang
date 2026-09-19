import React, { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PricingSection() {
  const { openConsultModal } = useApp();
  const [isAnnual, setIsAnnual] = useState(true);

  const PLANS = [
    {
      name: 'Starter Branch',
      scale: '3 - 10 Cabang',
      desc: 'Solusi ideal bagi pemilik brand yang baru memulai ekspansi cabang atau waralaba perdana.',
      monthlyPrice: 'Rp 2.450.000',
      annualPrice: 'Rp 1.950.000',
      features: [
        'Hingga 10 Subdomain Cabang Mandiri',
        'Master Template E-Commerce Terintegrasi',
        'Store Locator & WhatsApp Routing Cabang',
        'Single HQ Admin Dashboard',
        'Backup Otomatis Mingguan',
        'Support Teknis Email & WhatsApp'
      ],
      featured: false
    },
    {
      name: 'Growth Chain',
      scale: '11 - 50 Cabang',
      desc: 'Paket terpopuler untuk jaringan franchise berkembang pesat dengan otomatisasi lead regional.',
      monthlyPrice: 'Rp 4.850.000',
      annualPrice: 'Rp 3.850.000',
      features: [
        'Hingga 50 Subdomain / Custom Domain Cabang',
        'Semua 15+ Master Template E-Commerce',
        'Sinkronisasi Stok Real-Time Antar Cabang',
        'Multi-Admin dengan Role Permissions',
        'Local SEO & Auto GBP Sync Engine',
        'Integrasi Payment Gateway & POS',
        'Prioritas Support SLA 2 Jam'
      ],
      featured: true
    },
    {
      name: 'Enterprise Network',
      scale: '50+ Cabang / Unlimited',
      desc: 'Infrastruktur kustom khusus korporasi holding atau jaringan franchise raksasa multi-nasional.',
      monthlyPrice: 'Hubungi HQ',
      annualPrice: 'Custom SLA',
      features: [
        'Unlimited Cabang & Multi-Tenancy',
        'Dedicated Cloud Architecture & Server',
        'Custom ERP & Warehouse Sync Adapter',
        'Custom SSO & Single Sign-On Security',
        'Full White-Label & Custom Branding',
        'Dedicated Technical Account Manager',
        'Uptime Garansi SLA 99.99%'
      ],
      featured: false
    }
  ];

  return (
    <section className="section" id="paket">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Investasi & Skalabilitas</div>
          <h2 className="section-title">
            Paket Website Berbasis <em>Skala Cabang</em>
          </h2>
          <p className="section-sub">
            Pilih paket yang sesuai dengan jumlah cabang aktif Anda. Biaya transparan tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Toggle Billing */}
        <div className="pricing-toggle-wrap">
          <div className="pricing-toggle">
            <button
              type="button"
              className={!isAnnual ? 'active' : ''}
              onClick={() => setIsAnnual(false)}
            >
              Penagihan Bulanan
            </button>
            <button
              type="button"
              className={isAnnual ? 'active' : ''}
              onClick={() => setIsAnnual(true)}
            >
              Tahunan <span style={{ color: '#ffffff', background: '#10b981', padding: '2px 8px', borderRadius: '9999px', fontSize: '11px', marginLeft: '6px' }}>Hemat 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`card pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <div className="popular-badge">
                  <Star size={12} fill="#ffffff" /> Rekomendasi Jaringan Tumbuh
                </div>
              )}

              <div className="sys-chip">
                <span className="sc-node">TIER-{idx + 1}</span>
                <span className="sc-status"><i></i> {plan.scale}</span>
              </div>

              <h3>{plan.name}</h3>
              <p className="price-sub">{plan.desc}</p>

              <div className="price-amount-box">
                <div className="price-val">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </div>
                <div className="price-period">
                  {plan.monthlyPrice === 'Hubungi HQ' ? 'Konsultasi arsitektur enterprise' : '/bulan /jaringan'}
                </div>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <Check size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                onClick={openConsultModal}
                style={{
                  width: '100%',
                  background: plan.featured ? 'linear-gradient(135deg, var(--branch-teal-700), var(--branch-teal-600))' : undefined,
                  color: plan.featured ? '#ffffff' : undefined
                }}
              >
                Pilih Paket {plan.name} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CreditCard, Database, MessageSquareCode, Workflow } from 'lucide-react';

const ADDONS = [
  {
    icon: CreditCard,
    title: 'Payment Gateway Split Multi-Rekening',
    desc: 'Bagi hasil transaksi otomatis ke rekening kantor pusat dan rekening masing-masing pemilik franchise secara instan.'
  },
  {
    icon: Database,
    title: 'Konektor ERP & Cloud POS',
    desc: 'Sinkronisasi dua arah dengan software kasir populer seperti Moka, Olsera, Pawoon, SAP, dan Accurate.'
  },
  {
    icon: MessageSquareCode,
    title: 'Omnichannel WhatsApp & Live Chatbot',
    desc: 'Satu nomor sentral terverifikasi WhatsApp Green Tick dengan AI bot pembagi tiket pesan ke agen cabang terdekat.'
  },
  {
    icon: Workflow,
    title: 'REST API & Webhooks Real-time',
    desc: 'Integrasikan data pelanggan dan pesanan cabang langsung ke data lake internal perusahaan secara terenkripsi.'
  }
];

export default function AddonsSection() {
  return (
    <section className="section section-alt" id="addons">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Ekosistem & Ekstensi</div>
          <h2 className="section-title">
            Integrasi & Infrastruktur <em>Tingkat Enterprise</em>
          </h2>
          <p className="section-sub">
            Hubungkan ekosistem website cabang dengan teknologi yang telah digunakan tim keuangan dan operasional Anda.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
          {ADDONS.map((addon, idx) => {
            const Icon = addon.icon;
            return (
              <div key={idx} className="card">
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: '#eff6ff',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {addon.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
                  {addon.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

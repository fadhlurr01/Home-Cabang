import React, { useState } from 'react';
import { MapPin, Phone, Clock, User, ShieldCheck, ExternalLink } from 'lucide-react';

const BRANCH_TABS = [
  {
    id: 'jkt',
    city: 'Jakarta Pusat',
    name: 'HQ ToyHub & Multi-Branch Center',
    address: 'Grand Indonesia West Mall Lt. 3, Jakarta Pusat',
    phone: '+62 811-2222-100',
    hours: '10:00 - 22:00 WIB',
    manager: 'Bambang Sudarsono',
    rating: '4.9 ★',
    projects: '1.420 SKU Ready'
  },
  {
    id: 'sby',
    city: 'Surabaya Barat',
    name: 'Regional Hub Jawa Timur (Mega Store)',
    address: 'Tunjungan Plaza 4 Lt. 4 No. 120, Surabaya',
    phone: '+62 831-3333-300',
    hours: '10:00 - 22:00 WIB',
    manager: 'Hendrawan Putra',
    rating: '4.8 ★',
    projects: '1.850 SKU Ready'
  },
  {
    id: 'bdg',
    city: 'Bandung Store',
    name: 'Regional Hub Jawa Barat & Atelier',
    address: 'Paris Van Java Resort Level No. 18, Bandung',
    phone: '+62 822-1111-200',
    hours: '10:00 - 22:00 WIB',
    manager: 'Dra. Nurhaliza Lubis',
    rating: '4.9 ★',
    projects: '980 SKU Ready'
  }
];

export default function BranchPreviewCard() {
  const [activeTab, setActiveTab] = useState(0);
  const cur = BRANCH_TABS[activeTab];

  return (
    <div className="branch-preview-card">
      <div className="bp-header">
        <div className="bp-title">
          Live Interactive Branch Portal
        </div>
        <div className="bp-status-badge">
          <ShieldCheck size={14} /> Terhubung ke HQ
        </div>
      </div>

      {/* Tabs */}
      <div className="bp-tabs">
        {BRANCH_TABS.map((tab, idx) => (
          <button
            key={tab.id}
            type="button"
            className={`bp-tab ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.city}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bp-details">
        <div className="bp-row">
          <div className="bp-ico">
            <MapPin size={16} />
          </div>
          <div className="bp-info">
            <span className="bp-lbl">Lokasi Cabang Resmi</span>
            <span className="bp-val">{cur.address}</span>
          </div>
        </div>

        <div className="bp-row">
          <div className="bp-ico">
            <Phone size={16} />
          </div>
          <div className="bp-info">
            <span className="bp-lbl">Kontak Terverifikasi</span>
            <span className="bp-val">{cur.phone}</span>
          </div>
        </div>

        <div className="bp-row">
          <div className="bp-ico">
            <Clock size={16} />
          </div>
          <div className="bp-info">
            <span className="bp-lbl">Jam Operasional Layanan</span>
            <span className="bp-val">{cur.hours}</span>
          </div>
        </div>
      </div>

      {/* Visual Map Preview */}
      <div className="bp-map-preview">
        <div className="bp-map-pin">
          <MapPin className="pin-icon" />
          <div className="bp-city-pill">
            {cur.city} · {cur.projects}
          </div>
        </div>
      </div>
    </div>
  );
}

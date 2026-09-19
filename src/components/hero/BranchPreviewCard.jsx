import React, { useState } from 'react';
import { MapPin, Phone, Clock, User, ShieldCheck, ExternalLink } from 'lucide-react';

const BRANCH_TABS = [
  {
    id: 'jkt',
    city: 'Jakarta Pusat',
    name: 'HQ Contractor & Multi-Branch Center',
    address: 'Jl. MH Thamrin No. 28, Menteng, Jakarta Pusat',
    phone: '+62 21 3983 8800',
    hours: '08:00 - 20:00 WIB',
    manager: 'Bambang Sudarsono, S.T.',
    rating: '4.9 ★',
    projects: '42 Project Aktif'
  },
  {
    id: 'sby',
    city: 'Surabaya Barat',
    name: 'Regional Hub Jawa Timur & Bali',
    address: 'Pakuwon Tower Lt. 15, Jl. Mayjen Jonosewojo No. 2, Surabaya',
    phone: '+62 31 7393 2100',
    hours: '08:30 - 19:30 WIB',
    manager: 'Hendrawan Putra, M.Arch.',
    rating: '4.8 ★',
    projects: '28 Project Aktif'
  },
  {
    id: 'mdn',
    city: 'Medan Kota',
    name: 'Regional Hub Sumatra & Sekitarnya',
    address: 'Podomoro City Deli Park, Jl. Putri Hijau No. 1, Medan',
    phone: '+62 61 4552 1100',
    hours: '08:00 - 18:00 WIB',
    manager: 'Dra. Nurhaliza Lubis',
    rating: '4.9 ★',
    projects: '19 Project Aktif'
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

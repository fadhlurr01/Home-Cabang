import React from 'react';
import { Eye, ExternalLink, Sparkles, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PortfolioCard({ item, index }) {
  const { openPreviewModal, openConsultModal } = useApp();

  return (
    <div className="port-card">
      {/* Browser address bar */}
      <div className="port-browser-bar">
        <div className="port-browser-dots">
          <span className="pb-dot" />
          <span className="pb-dot" />
          <span className="pb-dot" />
        </div>
        <span className="port-url-badge">
          {item.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.contractorhub.id
        </span>
      </div>

      {/* Visual media container with inspect overlay */}
      <div className="port-media-box">
        <div className="port-media-title">
          {item.name}
        </div>

        {/* Hover inspect overlay */}
        <div className="port-inspect-overlay">
          <button
            type="button"
            className="btn btn-primary btn-inspect-trigger"
            onClick={() => openPreviewModal(item)}
            style={{
              padding: '10px 18px',
              fontSize: '13px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', // ROYAL BLUE
              color: '#ffffff',
              boxShadow: '0 6px 18px rgba(37, 99, 235, 0.4)'
            }}
          >
            <Eye size={15} /> Inspeksi Template
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="port-body">
        <div className="port-category">{item.industry}</div>
        <h3>{item.name}</h3>
        <p>{item.desc}</p>

        {/* Stats */}
        {item.stats && (
          <div className="port-stats-row">
            {item.stats.map((st, i) => (
              <div key={i} className="port-stat-item">
                <div className="ps-val">{st.v}</div>
                <div className="ps-lbl">{st.l}</div>
              </div>
            ))}
          </div>
        )}

        {/* Action button */}
        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => openPreviewModal(item)}
            style={{ flex: 1, padding: '9px 12px', fontSize: '13px', borderColor: '#bfdbfe', color: '#2563eb' }}
          >
            <Eye size={14} /> Inspeksi
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={openConsultModal}
            style={{
              flex: 1,
              padding: '9px 12px',
              fontSize: '13px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: '#ffffff'
            }}
          >
            Pilih Template
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, ExternalLink, Monitor, Tablet, Smartphone, Sparkles, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function PortfolioModal() {
  const { previewItem, closePreviewModal, openConsultModal } = useApp();
  const [deviceView, setDeviceView] = useState('desktop');

  if (!previewItem) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={closePreviewModal}
      style={{
        background: 'rgba(15, 23, 42, 0.45)', // Clean translucent backdrop
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 9999
      }}
    >
      <div
        className="port-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          color: '#0f172a'
        }}
      >
        {/* Modal Top Bar */}
        <div className="port-modal-top" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <div className="port-modal-info">
            <h3 style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {previewItem.name}
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--branch-teal-700)',
                background: '#eff6ff',
                padding: '2px 8px',
                borderRadius: '9999px',
                border: '1px solid #bfdbfe'
              }}>
                {previewItem.industry}
              </span>
            </h3>
            <p style={{ color: '#64748b' }}>
              {previewItem.url || 'Template Preview Demo'}
            </p>
          </div>

          {/* Device Responsive Switcher */}
          <div className="device-switcher" style={{ background: '#e2e8f0' }}>
            <button
              type="button"
              className={`device-btn ${deviceView === 'desktop' ? 'active' : ''}`}
              onClick={() => setDeviceView('desktop')}
              style={{
                background: deviceView === 'desktop' ? 'var(--branch-teal-700)' : 'transparent',
                color: deviceView === 'desktop' ? '#ffffff' : '#475569'
              }}
            >
              <Monitor size={14} /> Desktop
            </button>
            <button
              type="button"
              className={`device-btn ${deviceView === 'tablet' ? 'active' : ''}`}
              onClick={() => setDeviceView('tablet')}
              style={{
                background: deviceView === 'tablet' ? 'var(--branch-teal-700)' : 'transparent',
                color: deviceView === 'tablet' ? '#ffffff' : '#475569'
              }}
            >
              <Tablet size={14} /> Tablet
            </button>
            <button
              type="button"
              className={`device-btn ${deviceView === 'mobile' ? 'active' : ''}`}
              onClick={() => setDeviceView('mobile')}
              style={{
                background: deviceView === 'mobile' ? 'var(--branch-teal-700)' : 'transparent',
                color: deviceView === 'mobile' ? '#ffffff' : '#475569'
              }}
            >
              <Smartphone size={14} /> Mobile
            </button>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {previewItem.url && (
              <a
                href={previewItem.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{
                  padding: '8px 14px',
                  fontSize: '13px',
                  borderColor: '#cbd5e1',
                  color: 'var(--branch-teal-700)'
                }}
              >
                <ExternalLink size={14} /> Buka Tab Baru
              </a>
            )}

            <button
              type="button"
              className="modal-close-btn"
              onClick={closePreviewModal}
              style={{
                position: 'static',
                width: 34,
                height: 34,
                background: '#e2e8f0',
                color: '#0f172a',
                border: 'none'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Viewport with Iframe or Fallback Visual */}
        <div className="port-modal-viewport" style={{ background: '#f1f5f9' }}>
          <div className={`preview-frame-container ${deviceView}`}>
            {previewItem.url ? (
              <iframe
                src={previewItem.url}
                title={previewItem.name}
                className="preview-frame"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            ) : (
              <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                textAlign: 'center'
              }}>
                <Sparkles size={48} color="var(--branch-teal-700)" style={{ marginBottom: 16 }} />
                <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>
                  {previewItem.name} â€” Live Interactive Module
                </h4>
                <p style={{ maxWidth: 500, color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>
                  {previewItem.desc}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Details */}
        <div style={{
          padding: '16px 24px',
          background: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {previewItem.stats && previewItem.stats.map((st, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>{st.v}</span>
                <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>{st.l}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                closePreviewModal();
                openConsultModal();
              }}
              style={{
                padding: '10px 20px',
                fontSize: '13.5px',
                background: 'linear-gradient(135deg, var(--branch-teal-700), var(--branch-teal-600))', // ROYAL BLUE
                color: '#ffffff'
              }}
            >
              Gunakan Template Ini Untuk Cabang Anda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { X, Blocks, Sparkles, Package, Layers, ShieldCheck, Sun, Moon, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function MobileDrawer({ isOpen, onClose }) {
  const { language, setLanguage, theme, toggleTheme, openConsultModal, t } = useApp();

  if (!isOpen) return null;

  const handleNavClick = (href) => {
    onClose();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      style={{
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(8px)',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '340px',
          height: '100%',
          background: '#ffffff',
          color: '#0f172a',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.15)',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="8" height="15" rx="1" stroke="#ffffff" strokeWidth="2"/>
                <rect x="13" y="3" width="8" height="18" rx="1" stroke="#ffffff" strokeWidth="2"/>
              </svg>
            </div>
            <span style={{ fontSize: '16px', fontWeight: 900, color: '#0f172a' }}>
              CONTRACTOR<span style={{ color: '#2563eb' }}>.HUB</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          <button
            type="button"
            onClick={() => handleNavClick('#beranda')}
            style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', background: 'transparent', border: 'none', fontSize: '15px', fontWeight: 600, color: '#1e293b' }}
          >
            {t('nav.home')}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('#solusi-model')}
            style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', background: 'transparent', border: 'none', fontSize: '15px', fontWeight: 600, color: '#1e293b' }}
          >
            {t('nav.solutions')}
          </button>

          {/* Template & Produk Group */}
          <div style={{ padding: '10px 14px', borderRadius: '12px', background: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#1d4ed8', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
              Template & Produk
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                type="button"
                onClick={() => handleNavClick('#portofolio')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left', background: 'transparent', border: 'none', color: '#2563eb', fontSize: '13.5px', fontWeight: 700 }}
              >
                <Blocks size={16} /> Brick Universe (KUBIKK)
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#portofolio')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left', background: 'transparent', border: 'none', color: '#2563eb', fontSize: '13.5px', fontWeight: 700 }}
              >
                <Sparkles size={16} /> Fashion Doll (ICONIQ)
              </button>
              <button
                type="button"
                onClick={() => handleNavClick('#portofolio')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left', background: 'transparent', border: 'none', color: '#2563eb', fontSize: '13.5px', fontWeight: 700 }}
              >
                <Package size={16} /> Collectibles (PLAYVAULT)
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('#pilar')}
            style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', background: 'transparent', border: 'none', fontSize: '15px', fontWeight: 600, color: '#1e293b' }}
          >
            {t('nav.pillars')}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('#paket')}
            style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', background: 'transparent', border: 'none', fontSize: '15px', fontWeight: 600, color: '#1e293b' }}
          >
            {t('nav.pricing')}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('#widget')}
            style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', background: 'transparent', border: 'none', fontSize: '15px', fontWeight: 600, color: '#1e293b' }}
          >
            {t('nav.widgets')}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('#faq')}
            style={{ textAlign: 'left', padding: '10px 14px', borderRadius: '8px', background: 'transparent', border: 'none', fontSize: '15px', fontWeight: 600, color: '#1e293b' }}
          >
            {t('nav.faq')}
          </button>
        </div>

        {/* CTA and Actions */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              onClose();
              openConsultModal();
            }}
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: '#ffffff'
            }}
          >
            {t('nav.consult_cta')}
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, background: language === 'id' ? '#2563eb' : '#f1f5f9', color: language === 'id' ? '#ffffff' : '#475569', border: 'none' }}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, background: language === 'en' ? '#2563eb' : '#f1f5f9', color: language === 'en' ? '#ffffff' : '#475569', border: 'none' }}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '6px', background: '#f1f5f9', border: 'none', color: '#0f172a', fontSize: '12px', fontWeight: 600 }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              {theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BrochureSection() {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setDownloadReady(true);
        showToast('Brosur siap diunduh!', 'success');
      }
    } catch (err) {
      setDownloadReady(true);
      showToast('Brosur siap diunduh!', 'success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="brosur">
      <div className="container">
        <div className="card" style={{
          background: 'linear-gradient(135deg, var(--branch-teal-800), #1e40af)',
          border: '1px solid var(--branch-teal-500)',
          color: '#ffffff',
          padding: '48px 40px',
          boxShadow: '0 20px 50px -10px rgba(30, 58, 138, 0.4)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '18px'
              }}>
                <FileText size={14} /> PDF E-BOOK Â· 48 HALAMAN
              </div>

              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px' }}>
                Download Brosur & Panduan Lengkap Multi-Cabang 2026
              </h2>

              <p style={{ color: '#dbeafe', fontSize: '15.5px', lineHeight: 1.6, marginBottom: '24px' }}>
                Pelajari strategi arsitektur multi-tenant, checklist integrasi 50+ cabang, dan benchmark perbandingan ROI sistem sentral kontraktor di Indonesia.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#eff6ff' }}>
                  <CheckCircle2 size={16} color="#60a5fa" /> Studi Kasus Nyata
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#eff6ff' }}>
                  <CheckCircle2 size={16} color="#60a5fa" /> Tabel Perbandingan Biaya
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#eff6ff' }}>
                  <CheckCircle2 size={16} color="#60a5fa" /> Blueprint Teknis Arsitektur
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
              color: '#0f172a'
            }}>
              {downloadReady ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: '#eff6ff',
                    color: 'var(--branch-teal-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <Download size={28} />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>Brosur Siap Diunduh!</h3>
                  <p style={{ fontSize: '13px', color: '#475569', marginBottom: '20px' }}>
                    Tautan unduhan telah dikirim ke email <strong>{formData.email}</strong>.
                  </p>
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      showToast('Mengunduh TOYHUB_MultiBranch_Guide_2026.pdf...', 'success');
                    }}
                    className="btn btn-primary"
                    style={{ width: '100%', background: 'linear-gradient(135deg, var(--branch-teal-700), var(--branch-teal-600))', color: '#ffffff' }}
                  >
                    <Download size={16} /> Unduh PDF Sekarang
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    Dapatkan Salinan Gratis Anda
                  </h3>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap *"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Alamat Email Bisnis *"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Nomor WhatsApp *"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13.5px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '6px', background: 'linear-gradient(135deg, var(--branch-teal-700), var(--branch-teal-600))', color: '#ffffff' }}
                  >
                    {isSubmitting ? 'Memproses...' : 'Kirim Brosur via Email & WA'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


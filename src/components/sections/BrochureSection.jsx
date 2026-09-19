import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function BrochureSection() {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({ nama: '', email: '', wa: '', skala: '1-5 Cabang' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nama,
          email: formData.email,
          phone: formData.wa,
          company: formData.skala
        })
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        showToast('Brosur 2026 berhasil diajukan! Tautan unduhan aktif.', 'success');
      }
    } catch (err) {
      setIsSuccess(true);
      showToast('Brosur 2026 siap diunduh.', 'success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="brosur">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Panduan Arsitektur 2026</span>
          <h2 className="section-title">Download Brosur &amp; Panduan Lengkap Multi-Cabang 2026</h2>
        </div>
        <div className="brochure-grid">
          <div className="brochure-left">
            <h3 style={{ color: 'var(--branch-text)', fontSize: '22px', fontWeight: 700, marginBottom: '14px' }}>
              Yang Akan Anda Terima
            </h3>
            <ul className="brochure-benefits">
              <li>Brosur lengkap arsitektur website multi-cabang &amp; franchise</li>
              <li>Daftar harga lisensi &amp; matriks perbandingan fitur per skala cabang</li>
              <li>Whitepaper: Strategi Digitalisasi Jaringan Bisnis &amp; Ekosistem Multi-Unit 2026</li>
              <li>Studi kasus implementasi dan benchmark efisiensi biaya operasional digital</li>
            </ul>
            <div className="brochure-spec">
              <div className="spec-item">
                <div className="spec-val">PDF</div>
                <div className="spec-lbl">Format Dokumen</div>
              </div>
              <div className="spec-item">
                <div className="spec-val">28 Hal.</div>
                <div className="spec-lbl">Lengkap &amp; Komprehensif</div>
              </div>
              <div className="spec-item">
                <div className="spec-val">2026</div>
                <div className="spec-lbl">Edisi Terbaru</div>
              </div>
            </div>
          </div>
          <div className="brochure-right">
            <div className="card" style={{ padding: '32px' }}>
              {isSuccess ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>📄</div>
                  <h3 style={{ color: 'var(--branch-text)', fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>
                    Brosur Siap Diunduh!
                  </h3>
                  <p style={{ color: 'var(--branch-slate-400)', fontSize: '14px', marginBottom: '20px' }}>
                    Dokumen panduan arsitektur multi-cabang 2026 telah disiapkan untuk Anda.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => showToast('Mengunduh TOYHUB_MultiBranch_Guide_2026.pdf...', 'success')}
                    style={{ width: '100%' }}
                  >
                    Unduh Dokumen PDF (4.2 MB)
                  </button>
                </div>
              ) : (
                <form id="brosurForm" onSubmit={handleSubmit}>
                  <h3 style={{ color: 'var(--branch-text)', fontSize: '18px', fontWeight: 700, marginBottom: '18px' }}>
                    Isi Formulir untuk Menerima Brosur
                  </h3>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--branch-text)', marginBottom: '6px' }}>
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData(prev => ({ ...prev, nama: e.target.value }))}
                      placeholder="Contoh: Budi Santoso"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--branch-slate-700)', background: 'var(--branch-navy-850)', color: 'var(--branch-text)' }}
                    />
                  </div>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--branch-text)', marginBottom: '6px' }}>
                      Email Bisnis *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="budi@perusahaan.com"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--branch-slate-700)', background: 'var(--branch-navy-850)', color: 'var(--branch-text)' }}
                    />
                  </div>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--branch-text)', marginBottom: '6px' }}>
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="wa"
                      required
                      value={formData.wa}
                      onChange={(e) => setFormData(prev => ({ ...prev, wa: e.target.value }))}
                      placeholder="081234567890"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--branch-slate-700)', background: 'var(--branch-navy-850)', color: 'var(--branch-text)' }}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--branch-text)', marginBottom: '6px' }}>
                      Skala Jumlah Cabang Saat Ini
                    </label>
                    <select
                      name="skala"
                      value={formData.skala}
                      onChange={(e) => setFormData(prev => ({ ...prev, skala: e.target.value }))}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--branch-slate-700)', background: 'var(--branch-navy-850)', color: 'var(--branch-text)' }}
                    >
                      <option value="1-5 Cabang">1 – 5 Cabang</option>
                      <option value="6-15 Cabang">6 – 15 Cabang</option>
                      <option value="16-50 Cabang">16 – 50 Cabang</option>
                      <option value="50+ Cabang">Lebih dari 50 Cabang</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? 'Memproses...' : 'Download Brosur Sekarang'}
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

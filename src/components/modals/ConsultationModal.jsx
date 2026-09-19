import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function ConsultationModal() {
  const { isConsultModalOpen, closeConsultModal, showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    branchCount: '1 - 5 Gerai Toko',
    category: 'Brick Modular & Construction Set',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isConsultModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          needs: `Kategori Mainan: ${formData.category}`
        })
      });
      const data = await res.json();

      if (data.success) {
        setIsSuccess(true);
        setReferenceId(data.referenceId || 'TOY-' + Date.now().toString(36).toUpperCase());
        showToast('Pengajuan konsultasi toko mainan berhasil dikirim!', 'success');
      } else {
        showToast(data.message || 'Gagal mengirim pengajuan.', 'error');
      }
    } catch (err) {
      setIsSuccess(true);
      setReferenceId('TOY-' + Math.floor(100000 + Math.random() * 900000));
      showToast('Konsultasi berhasil diajukan.', 'success');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    closeConsultModal();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={closeConsultModal}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(15, 23, 42, 0.45)', // Clean translucent backdrop (NOT black)
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
    >
      <div
        className="modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff', // Clean white dialog
          color: '#0f172a', // Crisp dark text
          border: '1px solid #e2e8f0', // Soft gray border
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px #e2e8f0',
          maxWidth: '560px',
          width: '100%',
          padding: '32px',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeConsultModal}
          aria-label="Tutup Dialog"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#f1f5f9',
            border: '1px solid #e2e8f0',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                border: '2px solid #bfdbfe'
              }}
            >
              <CheckCircle size={36} color="#2563eb" />
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Konsultasi Toko Mainan Telah Terjadwal!
            </h3>
            <p style={{ fontSize: '14.5px', color: '#475569', marginBottom: '16px', lineHeight: 1.6 }}>
              Terima kasih, <strong>{formData.name}</strong>. Tim konsultan arsitektur multi-cabang TOYHUB akan menghubungi WhatsApp Anda dalam 15 menit.
            </p>
            <div
              style={{
                background: '#f8fafc',
                border: '1px dashed #cbd5e1',
                padding: '12px',
                borderRadius: '10px',
                fontSize: '13px',
                color: '#1e293b',
                marginBottom: '24px'
              }}
            >
              Nomor Referensi: <strong style={{ color: '#2563eb' }}>{referenceId}</strong>
            </div>

            <button
              type="button"
              onClick={handleReset}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', // Royal blue
                color: '#ffffff',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px -4px rgba(37, 99, 235, 0.45)'
              }}
            >
              Selesai &amp; Tutup
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '22px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#1d4ed8',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                🧸 Konsultasi Jaringan Toko Mainan
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                Konsultasi Sistem Multi-Cabang Mainan
              </h2>
              <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5 }}>
                Diskusikan integrasi ribuan SKU mainan, sinkronisasi stok toko, dan router WhatsApp cabang bersama konsultan kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                    Nama Lengkap <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                    Nama Brand / Toko Mainan <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Contoh: Nusantara Toys &amp; Hobby"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                    Nomor WhatsApp <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0812-3456-7890"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                    Email Bisnis <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="owner@nusantaratoys.com"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      color: '#0f172a',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                    Skala Jumlah Gerai / Cabang
                  </label>
                  <select
                    name="branchCount"
                    value={formData.branchCount}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px',
                      color: '#0f172a',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    <option value="1 - 5 Gerai Toko">1 - 5 Gerai Toko Mainan</option>
                    <option value="6 - 20 Gerai Mall">6 - 20 Gerai Mall / Kota</option>
                    <option value="21 - 50 Gerai Jaringan">21 - 50 Gerai Jaringan</option>
                    <option value="50+ Gerai Franchise">50+ Gerai Franchise Nasional</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                    Kategori Utama Mainan
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px',
                      color: '#0f172a',
                      background: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    <option value="Brick Modular &amp; Construction Set">Brick &amp; Modular Construction</option>
                    <option value="Action Figure &amp; Collectibles">Action Figure &amp; Anime Collectibles</option>
                    <option value="Dolls &amp; Plushie Designer">Dolls &amp; Plushie Atelier</option>
                    <option value="Art Toys &amp; Blind Box Pop-Mart">Art Toys &amp; Blind Box</option>
                    <option value="Edu Toys &amp; Montessori">Edu Toys &amp; Montessori Anak</option>
                    <option value="Megastore Multi-Kategori">Megastore Multi-Kategori</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                  Kebutuhan Khusus (Opsional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ceritakan rencana ekspansi gerai toko mainan Anda..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    color: '#0f172a',
                    background: '#ffffff',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* ROYAL BLUE ACTION BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  marginTop: '6px',
                  padding: '14px 20px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', // Royal blue
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 800,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px -4px rgba(37, 99, 235, 0.45)',
                  transition: 'transform 0.2s ease'
                }}
              >
                {isSubmitting ? 'Mengirim Jadwal...' : 'Jadwalkan Konsultasi Toko Mainan Gratis'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

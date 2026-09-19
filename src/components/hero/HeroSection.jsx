import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import heroBuildingImg from '../../assets/images/hero-building.jpg';

export default function HeroSection() {
  const { openConsultModal } = useApp();
  const [bpIdx, setBpIdx] = useState(0);
  const [selectedCity, setSelectedCity] = useState('Jakarta');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedScale, setSelectedScale] = useState('Flagship Megastore');

  const handleDockSearch = (e) => {
    e.preventDefault();
    const target = document.getElementById('portfolio') || document.getElementById('demo');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="beranda">
      {/* Deep Oceanic Teal Hero Banner with Curved Bottom */}
      <section className="hero-banner-wrap">
        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <span className="bolt">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '12px', height: '12px' }}>
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </span>
              #1 Platform Multi-Cabang &amp; Franchise Toko Mainan, Hobby &amp; Collectibles
            </div>

            <h1>
              Find Your Dream Store Network:{' '}
              <span className="grad">Satu Sistem Website Terpusat</span> untuk Ratusan Cabang Toko Mainan &amp; Hobby
            </h1>

            <p className="lead">
              Kelola ribuan katalog mainan (action figures, brick modular, plushie, blind box, boneka &amp; board game) dari kantor pusat (HQ), sinkronisasi stok rak gerai real-time, dan alirkan pesanan otomatis ke WhatsApp cabang toko terdekat.
            </p>

            <div className="hero-cta">
              <button type="button" className="btn btn-coral" onClick={openConsultModal}>
                Konsultasi Jaringan Toko Mainan
              </button>
              <a
                href="#demo"
                className="btn btn-ghost-white"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Coba Demo Simulasi Cabang
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="num">150K+</div>
                <div className="lbl">SKU Mainan Terkelola</div>
              </div>
              <div className="stat">
                <div className="num">500+</div>
                <div className="lbl">Gerai Toko Terhubung</div>
              </div>
              <div className="stat">
                <div className="num">&lt;60 dtk</div>
                <div className="lbl">Setup Cabang Toko Baru</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Flagship Building Showroom Facade + Integrated Simulator */}
          <div className="bp-wrap" id="demo">
            <div className="hero-facade-card">
              <img
                src={heroBuildingImg}
                alt="Flagship Toy Store Modern Architecture"
                className="hero-facade-img"
              />
              <span className="hero-facade-badge">
                LIVE STORE · 2026
              </span>

              <div className="hero-facade-overlay">
                {/* Branch selector tabs */}
                <div className="bp-tabs">
                  <button
                    type="button"
                    className={`bp-tab ${bpIdx === 0 ? 'active' : ''}`}
                    onClick={() => setBpIdx(0)}
                  >
                    Jakarta (Flagship)
                  </button>
                  <button
                    type="button"
                    className={`bp-tab ${bpIdx === 1 ? 'active' : ''}`}
                    onClick={() => setBpIdx(1)}
                  >
                    Bandung Store
                  </button>
                  <button
                    type="button"
                    className={`bp-tab ${bpIdx === 2 ? 'active' : ''}`}
                    onClick={() => setBpIdx(2)}
                  >
                    Surabaya Mega
                  </button>
                </div>

                {/* Interactive branch live detail display */}
                <div className="bp-viewport" style={{ background: '#ffffff', borderRadius: '16px', padding: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.25)' }}>
                  {bpIdx === 0 && (
                    <div className="bp-body active" data-branch="jakarta">
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                            <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">Lokasi Gerai Cabang</div>
                          <div className="bp-value" style={{ color: '#0b3d4f', fontWeight: 800 }}>Grand Indonesia West Mall Lt. 3, Jakarta Pusat</div>
                        </div>
                      </div>
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#dcfce7', color: '#16a34a' }}>
                          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">CS Store WhatsApp Lokal</div>
                          <div className="bp-value" style={{ color: '#0d5568', fontWeight: 700 }}>+62 811-2222-100 (Reservasi Kolektor)</div>
                        </div>
                      </div>
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#fef3c7', color: '#d97706' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                            <rect x="3" y="8" width="18" height="4" rx="1" />
                            <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">Katalog &amp; Promo Gerai</div>
                          <div className="bp-value">Brick Modular, Action Figures &amp; 1.420 SKU Ready</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {bpIdx === 1 && (
                    <div className="bp-body active" data-branch="bandung">
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                            <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">Lokasi Gerai Cabang</div>
                          <div className="bp-value" style={{ color: '#0b3d4f', fontWeight: 800 }}>Paris Van Java Resort Level No. 18, Bandung</div>
                        </div>
                      </div>
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#dcfce7', color: '#16a34a' }}>
                          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">CS Store WhatsApp Lokal</div>
                          <div className="bp-value" style={{ color: '#0d5568', fontWeight: 700 }}>+62 822-1111-200 (Store Bandung)</div>
                        </div>
                      </div>
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#fef3c7', color: '#d97706' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                            <rect x="3" y="8" width="18" height="4" rx="1" />
                            <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">Katalog &amp; Promo Gerai</div>
                          <div className="bp-value">Plushie Atelier, Montessori Toys &amp; 980 SKU Ready</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {bpIdx === 2 && (
                    <div className="bp-body active" data-branch="surabaya">
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#e0f2fe', color: '#0284c7' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                            <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">Lokasi Gerai Cabang</div>
                          <div className="bp-value" style={{ color: '#0b3d4f', fontWeight: 800 }}>Tunjungan Plaza 4 Lt. 4 No. 120, Surabaya</div>
                        </div>
                      </div>
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#dcfce7', color: '#16a34a' }}>
                          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18 }}>
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">CS Store WhatsApp Lokal</div>
                          <div className="bp-value" style={{ color: '#0d5568', fontWeight: 700 }}>+62 831-3333-300 (Mega Store Surabaya)</div>
                        </div>
                      </div>
                      <div className="bp-row">
                        <div className="bp-ico" style={{ background: '#fef3c7', color: '#d97706' }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                            <rect x="3" y="8" width="18" height="4" rx="1" />
                            <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                          </svg>
                        </div>
                        <div>
                          <div className="bp-label">Katalog &amp; Promo Gerai</div>
                          <div className="bp-value">Art Toys, Blind Box &amp; Anime Figures 1.850 SKU Ready</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Floating Quick Filter Dock (.hero-dock) Overlapping Hero Bottom */}
      <div className="hero-dock-container">
        <form className="hero-dock" onSubmit={handleDockSearch}>
          <div className="dock-field">
            <label>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 13, height: 13, color: '#ef4444' }}>
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Kota Cabang
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              aria-label="Pilih Kota Cabang"
            >
              <option value="Jakarta">DKI Jakarta (Grand Indonesia)</option>
              <option value="Bandung">Bandung (Paris Van Java)</option>
              <option value="Surabaya">Surabaya (Tunjungan Plaza)</option>
              <option value="Bali">Bali (Kuta Beachwalk)</option>
              <option value="Medan">Medan (Deli Park Mall)</option>
              <option value="Semarang">Semarang (Paragon Mall)</option>
            </select>
          </div>

          <div className="dock-field">
            <label>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 13, height: 13, color: '#0d5568' }}>
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              Kategori Mainan
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Pilih Kategori Mainan"
            >
              <option value="Semua Kategori">Semua Kategori Mainan</option>
              <option value="Brick & Modular">Brick &amp; Modular (LEGO)</option>
              <option value="Dolls & Plushie">Dolls &amp; Luxury Plushie</option>
              <option value="Action Figure & Collectibles">Action Figure &amp; Anime</option>
              <option value="Art Toys & Blind Box">Art Toys &amp; Pop-Mart</option>
              <option value="Edu Toys & Montessori">Montessori &amp; Sensory</option>
            </select>
          </div>

          <div className="dock-field">
            <label>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 13, height: 13, color: '#0d5568' }}>
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="9" y1="22" x2="9" y2="18" />
                <line x1="15" y1="22" x2="15" y2="18" />
              </svg>
              Skala Gerai
            </label>
            <select
              value={selectedScale}
              onChange={(e) => setSelectedScale(e.target.value)}
              aria-label="Pilih Skala Gerai"
            >
              <option value="Flagship Megastore">Flagship Megastore (&gt;300m²)</option>
              <option value="Standard Mall Outlet">Standard Mall Outlet (100-200m²)</option>
              <option value="Kios Retail Modern">Kios Retail Modern (&lt;60m²)</option>
              <option value="Pop-Up Blind Box">Pop-Up &amp; Exhibition Booth</option>
            </select>
          </div>

          <div className="dock-rating-badge">
            <div className="rate-val">6.70</div>
            <div className="rate-lbl">
              <span>★ 4.98 Rating</span>
              <br />
              <strong style={{ color: '#0b3d4f' }}>500+ Cabang</strong>
            </div>
          </div>

          <button type="submit" className="btn btn-teal" style={{ padding: '14px 28px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 16, height: 16 }}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Eksplorasi Cabang
          </button>
        </form>
      </div>
    </div>
  );
}

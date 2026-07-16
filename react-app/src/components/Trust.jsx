import React from 'react';

const Trust = () => {
  return (
    <section id="trust" className="section" style={{ background: 'rgba(10, 15, 29, 0.3)' }}>
      <div className="container">
        <div className="sec-tag center" data-reveal>Global Compliance & Certification</div>
        <h2 className="sec-h text-c" data-reveal>Authorized & <span className="text-grad">Certified Enterprise</span></h2>
        <div className="trust-grid mt-2" data-reveal>
          <div className="trust-card trust-gold">
            <div className="trust-icon"><img src="./logo/udhayam.png" alt="Udhayam Logo" className="trust-img" /></div>
            <div className="trust-info">
              <h4>Ministry of MSME Certification</h4>
              <p>Registered Government of India Enterprise ensuring regulatory compliance and operational excellence.</p>
              <div className="trust-details"
                style={{ marginTop: '0.8rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px dashed rgba(255, 255, 255, 0.1)', paddingTop: '0.6rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                <span><strong style={{ color: 'var(--primary)' }}>Udyam Registration No:</strong> UDYAM-TN-27-0141973</span>
              </div>
            </div>
            <div className="trust-badge">REGISTERED</div>
          </div>

          <div className="trust-card trust-gold">
            <div className="trust-icon"><img src="./logo/startup india.png" alt="Startup India Logo" className="trust-img" /></div>
            <div className="trust-info">
              <h4>DPIIT Startup India Recognition</h4>
              <p>Officially recognized by the Ministry of Commerce for outstanding innovation and economic contribution.</p>
              <div className="trust-details"
                style={{ marginTop: '0.8rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px dashed rgba(255, 255, 255, 0.1)', paddingTop: '0.6rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                <span><strong style={{ color: 'var(--primary)' }}>Certificate No:</strong> IN-0526-9455GJ</span>
              </div>
            </div>
            <div className="trust-badge">REGISTERED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;

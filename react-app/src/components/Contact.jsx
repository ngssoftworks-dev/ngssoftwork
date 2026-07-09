import React from 'react';
import { siteConfig } from '../config';
const Contact = () => {
  return (
    <section className="section border-t" style={{ background: 'rgba(6, 10, 20, 0.4)', padding: '6rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }} data-reveal>
        <div className="sec-tag center" style={{ marginBottom: '1.5rem' }}>COLLABORATIVE ENGAGEMENT</div>
        <h2 className="sec-h text-c" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2.2rem' }}>
          Let’s Engineer The <span className="text-grad">Future Together</span>
        </h2>
        <p className="sec-p" style={{ maxWidth: '650px', margin: '0 auto 3rem', fontSize: '1.15rem', color: 'var(--text-muted)' }}>
          Partner with NGS Soft Works for enterprise-grade software, advanced infrastructure modeling, and strategic corporate branding.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem', borderRadius: '8px' }}>
            Initiate Enterprise Engagement
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn btn-glass" style={{ padding: '1.2rem 3.5rem', borderRadius: '8px' }}>
            Contact Corporate Strategy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

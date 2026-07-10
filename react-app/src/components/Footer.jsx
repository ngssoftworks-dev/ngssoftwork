import React from 'react';
import { siteConfig } from '../config';
import { Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="footer border-t" style={{ background: '#030303', padding: '5rem 0 2rem 0' }}>
      <div className="container">
        <div className="footer-grid">
          <div className="f-brand">
            <img src="./logo/logo.jpeg" alt="NGS Soft Works Logo" className="brand-img-logo"
              style={{ marginBottom: '1.5rem', height: '60px', width: 'auto', maxWidth: 'none' }} />
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>Engineering global digital infrastructure, enterprise automation, and premium brand identities with uncompromising quality.</p>
          </div>
          <div className="f-links">
            <h4>Solutions</h4>
            <a href="#solutions">BIM & CAD</a>
            <a href="#solutions">Office & Documents</a>
            <a href="#solutions">Creative Branding</a>
            <a href="#solutions">Software Development</a>
          </div>
          <div className="f-links">
            <h4>Company</h4>
            <a href="#about">About NGS</a>
            <a href="#work-process">Our Process</a>
            <a href="#team">Leadership</a>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">Consult Chat</a>
          </div>
          <div className="f-links">
            <h4>Corporate Direct</h4>
            <a href={`mailto:${siteConfig.email}`}>Email: {siteConfig.email}</a>
            <a href={`tel:${siteConfig.phonePrimary.replace(/ /g, '')}`}>Phone: {siteConfig.phonePrimary}</a>
            <a href={`tel:${siteConfig.phoneSecondary.replace(/ /g, '')}`}>Phone: {siteConfig.phoneSecondary}</a>
          </div>
        </div>
        <div className="footer-bottom"
          style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.85rem', color: '#52525b' }}>&copy; 2026 NGS Soft Works. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}><Instagram size={18} /></a>
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}><Linkedin size={18} /></a>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
            Engineered for Global Enterprise Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

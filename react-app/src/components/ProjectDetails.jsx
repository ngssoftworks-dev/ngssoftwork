import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config';

const ProjectDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || 'Mini Project';

  const [formData, setFormData] = useState({
    name: '',
    college: '',
    department: '',
    projectType: initialType,
    details: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Student Project Inquiry*\n\n*Name:* ${formData.name}\n*College/University:* ${formData.college}\n*Department:* ${formData.department}\n*Project Type:* ${formData.projectType}\n*Requirements:* ${formData.details}`;
    
    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container" style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ background: 'var(--bg-panel)', padding: '3rem', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Project <span className="text-grad grad-gold">Inquiry Form</span></h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>Fill out the details below and we will connect with you via WhatsApp.</p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e6e6fa' }}>Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }} placeholder="Enter your full name" />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e6e6fa' }}>College / University *</label>
              <input type="text" name="college" required value={formData.college} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }} placeholder="Enter your college name" />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e6e6fa' }}>Department / Course *</label>
              <input type="text" name="department" required value={formData.department} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }} placeholder="e.g. B.Tech Computer Science" />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e6e6fa' }}>Project Type *</label>
              <select name="projectType" value={formData.projectType} onChange={handleChange} style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: '#1c1c1c', border: '1px solid var(--border-light)', color: 'white', outline: 'none' }}>
                <option value="Mini Project">Mini Project</option>
                <option value="Main Project">Main Project</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#e6e6fa' }}>Project Requirements / Details *</label>
              <textarea name="details" required value={formData.details} onChange={handleChange} rows="4" style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-light)', color: 'white', outline: 'none', resize: 'vertical' }} placeholder="Describe what you are looking for..." />
            </div>

            <button type="submit" style={{ marginTop: '1rem', padding: '15px', borderRadius: '8px', background: 'var(--primary)', color: 'black', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              Send via WhatsApp
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Activity, Cuboid } from 'lucide-react';

const Students = () => {
  return (
    <section id="students" className="section" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header text-center" data-reveal>
          <div className="section-badge" style={{ display: 'inline-block', padding: '5px 15px', borderRadius: '50px', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-light)', color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '15px' }}>OUR STUDENTS</div>
          <h2 className="section-title" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px' }}>
            Student <span className="text-grad grad-gold">Projects</span>
          </h2>
          <p className="section-desc" style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
            Discover the innovative and practical solutions created by our students through their academic and technical journey.
          </p>
        </div>

        <div className="services-grid normal-tier" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          
          <div className="svc-card" data-reveal style={{ maxWidth: '400px', width: '100%' }}>
            <div className="svc-glow glow-gold"></div>
            <div className="svc-icon-box">
              <Activity size={32} color="#d4af37" />
            </div>
            <h3>Mini Project</h3>
            <p style={{ color: 'var(--text-muted)', padding: '0 20px', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Explore the innovative mini projects developed by our students, showcasing their core skills in modern engineering and software development.
            </p>
            <ul className="svc-features" style={{ padding: '0 20px', marginBottom: '1.5rem', textAlign: 'left' }}>
               <li><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Skill Building</li>
               <li><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Practical Application</li>
               <li><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Innovative Ideas</li>
            </ul>
            <div className="svc-btns">
              <Link to="/project-details?type=Mini+Project" className="btn btn-glass btn-normal" style={{ width: '100%', textAlign: 'center' }}>
                View Details
              </Link>
            </div>
          </div>

          <div className="svc-card" data-reveal style={{ maxWidth: '400px', width: '100%' }}>
            <div className="svc-glow glow-purple"></div>
            <div className="svc-icon-box">
              <Cuboid size={32} color="#da22ff" />
            </div>
            <h3>Main Project</h3>
            <p style={{ color: 'var(--text-muted)', padding: '0 20px', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Discover the comprehensive main projects where students tackle real-world challenges with advanced technical solutions.
            </p>
            <ul className="svc-features" style={{ padding: '0 20px', marginBottom: '1.5rem', textAlign: 'left' }}>
               <li><Sparkles className="feat-icon" style={{ color: '#da22ff !important' }} /> Real-World Problem Solving</li>
               <li><Sparkles className="feat-icon" style={{ color: '#da22ff !important' }} /> Advanced Technologies</li>
               <li><Sparkles className="feat-icon" style={{ color: '#da22ff !important' }} /> Comprehensive Design</li>
            </ul>
            <div className="svc-btns">
              <Link to="/project-details?type=Main+Project" className="btn btn-glass btn-premium" style={{ width: '100%', textAlign: 'center' }}>
                View Details
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Students;

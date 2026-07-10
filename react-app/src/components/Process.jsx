import React from 'react';
import { CheckCircle, MessageSquare, Cpu, Shield, Compass, Layers, Code, ShieldCheck, Rocket } from 'lucide-react';

const Process = () => {
  return (
    <section id="work-process" className="section sec-dark border-t" style={{ background: 'rgba(10, 15, 29, 0.6)' }}>
      <div className="container">
        <div className="sec-tag center" data-reveal>How We Work</div>
        <h2 className="sec-h text-c" data-reveal>Our <span className="text-grad">Process</span></h2>
        <p className="sec-p text-c" style={{ maxWidth: '750px', margin: '0 auto 4rem' }} data-reveal>
          We follow a simple step-by-step process to deliver the best results for you.
        </p>

        <div className="process-grid">
          {/* 01. Enterprise Discovery */}
          <div className="svc-card premium-card" data-reveal style={{ minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
            <div className="svc-glow glow-gold"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', width: '100%' }}>
              <div className="svc-icon-box" style={{ margin: 0 }}><Compass size={40} strokeWidth={1.5} color="var(--primary)" /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'rgba(212, 175, 55, 0.35)' }}>01</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 600, textAlign: 'left' }}>
              Understanding Your Needs
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              We listen to your ideas and understand exactly what your business needs.
            </p>
          </div>

          {/* 02. Architecture & Strategy */}
          <div className="svc-card premium-card" data-reveal style={{ minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
            <div className="svc-glow glow-blue"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', width: '100%' }}>
              <div className="svc-icon-box" style={{ margin: 0 }}><Layers size={40} strokeWidth={1.5} color="var(--secondary)" /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'rgba(0, 229, 255, 0.35)' }}>02</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 600, textAlign: 'left' }}>
              Planning & Strategy
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              We plan the best way to build your project using the right tools and designs.
            </p>
          </div>

          {/* 03. Development & Engineering */}
          <div className="svc-card premium-card" data-reveal style={{ minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
            <div className="svc-glow glow-gold"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', width: '100%' }}>
              <div className="svc-icon-box" style={{ margin: 0 }}><Code size={40} strokeWidth={1.5} color="var(--primary)" /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'rgba(212, 175, 55, 0.35)' }}>03</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 600, textAlign: 'left' }}>
              Design & Development
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              Our expert team builds your project carefully and exactly how you want it.
            </p>
          </div>

          {/* 04. Quality Assurance */}
          <div className="svc-card premium-card" data-reveal style={{ minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
            <div className="svc-glow glow-blue"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', width: '100%' }}>
              <div className="svc-icon-box" style={{ margin: 0 }}><ShieldCheck size={40} strokeWidth={1.5} color="var(--secondary)" /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'rgba(0, 229, 255, 0.35)' }}>04</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 600, textAlign: 'left' }}>
              Testing & Quality
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              We check everything to make sure your project works perfectly and is safe to use.
            </p>
          </div>

          {/* 05. Deployment & Scale */}
          <div className="svc-card premium-card" data-reveal style={{ minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
            <div className="svc-glow glow-gold"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', width: '100%' }}>
              <div className="svc-icon-box" style={{ margin: 0 }}><Rocket size={40} strokeWidth={1.5} color="var(--primary)" /></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: 'rgba(212, 175, 55, 0.35)' }}>05</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '1rem', fontWeight: 600, textAlign: 'left' }}>
              Launch & Support
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              We launch your project smoothly and provide help whenever you need it.
            </p>
          </div>
        </div>

        {/* Process Pillars (Values) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginTop: '4.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <CheckCircle style={{ color: 'var(--primary)', width: '18px', height: '18px' }} /> Smooth Workflow
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <MessageSquare style={{ color: 'var(--secondary)', width: '18px', height: '18px' }} /> Clear Goals
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <Cpu style={{ color: 'var(--primary)', width: '18px', height: '18px' }} /> Modern Technology
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <Shield style={{ color: 'var(--secondary)', width: '18px', height: '18px' }} /> Best Quality
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

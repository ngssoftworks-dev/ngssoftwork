import React from 'react';
import { CheckCircle, MessageSquare, Cpu, Shield, Compass, Layers, Code, ShieldCheck, Rocket } from 'lucide-react';

const Process = () => {
  return (
    <section id="work-process" className="section sec-dark border-t" style={{ background: 'rgba(10, 15, 29, 0.6)' }}>
      <div className="container">
        <div className="sec-tag center" data-reveal>Strategic Implementation Process</div>
        <h2 className="sec-h text-c" data-reveal>Our <span className="text-grad">Workflow</span></h2>
        <p className="sec-p text-c" style={{ maxWidth: '750px', margin: '0 auto 4rem' }} data-reveal>
          Our proprietary workflow ensures precision, agility, and uncompromising quality.
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
              Enterprise Discovery
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              Comprehensive analysis of business objectives and technical requirements.
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
              Architecture & Strategy
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              Designing robust frameworks and selecting scalable technology stacks.
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
              Development & Engineering
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              Executing with precision using modern standards and agile methodologies.
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
              Quality Assurance
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              Rigorous testing protocols for security, performance, and reliability.
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
              Deployment & Scale
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left', margin: 0 }}>
              Seamless integration and ongoing optimization for continuous growth.
            </p>
          </div>
        </div>

        {/* Process Pillars (Values) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginTop: '4.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <CheckCircle style={{ color: 'var(--primary)', width: '18px', height: '18px' }} /> Enterprise Workflow
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <MessageSquare style={{ color: 'var(--secondary)', width: '18px', height: '18px' }} /> Strategic Alignment
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <Cpu style={{ color: 'var(--primary)', width: '18px', height: '18px' }} /> Advanced Technology
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>
            <Shield style={{ color: 'var(--secondary)', width: '18px', height: '18px' }} /> Uncompromising Quality
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

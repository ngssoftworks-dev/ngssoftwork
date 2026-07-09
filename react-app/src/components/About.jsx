import React, { useEffect } from 'react';
import { Play } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Number counter logic specific to About
    const animCount = (el, target) => {
      let v = 0, step = target / 60;
      const t = setInterval(() => {
        v += step;
        if (v >= target) { v = target; clearInterval(t); }
        el.textContent = Math.floor(v) + '+';
      }, 20);
    };

    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-count]').forEach((el) => animCount(el, +el.dataset.count));
          co.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    const st = document.querySelector('.stats-grid');
    if (st) co.observe(st);

    return () => co.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container about-container">
        <div className="about-text" data-reveal>
          <div className="sec-tag">Corporate Overview</div>
          <h2 className="sec-h">Architecting the Future of Digital & <span className="text-grad">Engineering Innovation</span></h2>

          <div className="vision-mission" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>
              OUR VISION</h3>
            <p className="sec-p" style={{ marginBottom: '1.8rem', lineHeight: '1.6' }}>To be a global leader in technological innovation and engineering excellence, driving digital transformation and infrastructural advancement for enterprises worldwide.</p>

            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>
              OUR MISSION</h3>
            <ul className="mission-list sec-p" style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Architect scalable, enterprise-grade software and AI-driven platforms.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Deliver precision BIM modeling, CAD drafting, and structural engineering services.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Implement intelligent automation to optimize operational workflows.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Craft compelling brand identities and digital experiences for market leaders.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Uphold uncompromising standards of quality, security, and performance.</li>
            </ul>
          </div>

          <div className="stats-grid" style={{ marginTop: '2rem' }}>
            <div className="stat-box">
              <h3 data-count="250">0</h3>
              <p>Enterprise Implementations</p>
            </div>
            <div className="stat-box">
              <h3 data-count="200">0</h3>
              <p>Academic & Research Projects</p>
            </div>
            <div className="stat-box">
              <h3 data-count="100">0</h3>
              <p>Strategic Partners</p>
            </div>
            <div className="stat-box">
              <h3 data-count="230">0</h3>
              <p>Five-Star Commendations</p>
            </div>
            <div className="stat-box">
              <h3 data-count="50">0</h3>
              <p>Active Engagements</p>
            </div>
          </div>
        </div>
        <div className="about-visual" data-reveal>
          <div className="glass-panel main-panel">
            <div className="panel-header">
              <div className="dots"><span className="r"></span><span className="y"></span><span className="g"></span></div>
              <div className="p-title">NGS_System_Overview.exe</div>
            </div>
            <div className="panel-body" id="terminal-body" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: '1.6', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div id="terminal-content">
                <div className="sys-line"><span>[SYSTEM]</span> Initializing digital transformation stack...</div>
                <div className="sys-line"><span>[SYSTEM]</span> Spawning AI Agent execution threads... OK</div>
                <div className="sys-line"><span>[SYSTEM]</span> Rendering high-fidelity CAD & BIM schedules... OK</div>
                <div className="sys-line highlight"><span>[READY]</span> Multi-Disciplinary Core Engine Online.</div>
              </div>
              <button id="run-terminal-btn" className="btn btn-glass" style={{ marginTop: '1.5rem', width: '100%', fontSize: '0.75rem', padding: '0.6rem', letterSpacing: '1.5px', textTransform: 'uppercase', borderColor: 'rgba(212,175,55,0.3)', color: 'var(--primary)', fontWeight: 600 }}>
                <Play style={{ width: '12px', height: '12px', marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
                Run System Render
              </button>
            </div>
          </div>
          <div className="glass-panel float-panel f1"></div>
          <div className="glass-panel float-panel f2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

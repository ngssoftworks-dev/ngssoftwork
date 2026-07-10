import React from 'react';

const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="sec-tag center" data-reveal>EXECUTIVE LEADERSHIP</div>
        <h2 className="sec-h text-c" data-reveal>Our <span className="text-grad">Directors</span></h2>
        <p className="sec-p text-c" style={{ maxWidth: '700px', margin: '0 auto 3rem' }} data-reveal>The visionaries driving digital transformation and engineering excellence.</p>

        <div className="port-grid mt-2">
          {/* Lead 1: Civil Engineering & BIM */}
          <div className="port-card employee-card" data-reveal>
            <div className="port-img" style={{ position: 'relative' }}>
              <img src="./profile/image copy.png" alt="Civil Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src="./logo/logo.jpeg" alt="NGS Logo" style={{ position: 'absolute', top: '10px', right: '10px', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)', boxShadow: '0 0 10px rgba(212,175,55,0.5)' }} />
            </div>
            <div className="port-info" style={{ padding: '2.2rem 2rem', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="port-cat" style={{ textAlign: 'left', marginBottom: '0.6rem', fontSize: '0.7rem', letterSpacing: '2px' }}>DIRECTOR OF CIVIL & ENTERPRISE OPERATIONS</div>
              <h4 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.8rem', textAlign: 'left', minHeight: '3.4rem' }}>
                BIM modeling and infrastructure strategy.</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', minHeight: '7.2rem', textAlign: 'left', margin: 0 }}>
                Leading BIM modeling, infrastructure strategy, and enterprise documentation systems for global clients.
              </p>
              <div className="skills-wrap">
                <span className="skill-tag">AutoCAD</span>
                <span className="skill-tag">Revit BIM</span>
                <span className="skill-tag">Structural Design</span>
                <span className="skill-tag">MS Office Suites</span>
                <span className="skill-tag">Data Formatting</span>
                <span className="skill-tag">Presentation Design</span>
                <span className="skill-tag">Logo Design</span>
                <span className="skill-tag">Video Editing</span>
              </div>
              <a href="https://nithish-portfolio-ngs.vercel.app" target="_blank" rel="noreferrer" className="btn btn-glass mt-auto" style={{ fontSize: '0.8rem', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Explore Work</a>
            </div>
          </div>

          {/* Lead 2: Software & Technology */}
          <div className="port-card employee-card" data-reveal>
            <div className="port-img" style={{ position: 'relative' }}>
              <img src="./profile/image.png" alt="Software Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src="./logo/logo.jpeg" alt="NGS Logo" style={{ position: 'absolute', top: '10px', right: '10px', width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)', boxShadow: '0 0 10px rgba(212,175,55,0.5)' }} />
            </div>
            <div className="port-info" style={{ padding: '2.2rem 2rem', display: 'flex', flexDirection: 'column', flex: 1, textAlign: 'left', alignItems: 'flex-start' }}>
              <div className="port-cat" style={{ textAlign: 'left', marginBottom: '0.6rem', fontSize: '0.7rem', letterSpacing: '2px' }}>DIRECTOR OF TECHNOLOGY & CREATIVE STRATEGY</div>
              <h4 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '0.8rem', textAlign: 'left', minHeight: '3.4rem' }}>
                Full-stack enterprise architecture and AI automation.</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', minHeight: '7.2rem', textAlign: 'left', margin: 0 }}>
                Pioneering full-stack enterprise architecture, intelligent automation, and corporate brand strategy.</p>
              <div className="skills-wrap">
                <span className="skill-tag">Web Development</span>
                <span className="skill-tag">App Development</span>
                <span className="skill-tag">Automation</span>
                <span className="skill-tag">VLSI Design</span>
                <span className="skill-tag">Logo Design</span>
                <span className="skill-tag">Poster Design</span>
                <span className="skill-tag">Video Editing</span>
                <span className="skill-tag">MS Office Works</span>
              </div>
              <a href="https://kavinportfolio-three.vercel.app" target="_blank" rel="noreferrer" className="btn btn-glass mt-auto" style={{ fontSize: '0.8rem', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Explore Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

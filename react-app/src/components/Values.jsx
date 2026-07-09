import React from 'react';
import { Award, HeartHandshake, ShieldCheck, BrainCircuit, Cpu, TrendingUp } from 'lucide-react';

const Values = () => {
  return (
    <section id="values" className="section border-t" style={{ background: 'rgba(10, 15, 29, 0.45)' }}>
      <div className="container">
        <div className="sec-tag center" data-reveal>Core Foundation</div>
        <h2 className="sec-h text-c" data-reveal>Core <span className="text-grad">Enterprise Principles</span></h2>
        <p className="sec-p text-c" style={{ maxWidth: '750px', margin: '0 auto 4rem' }} data-reveal>
          The foundation of our engineering excellence and corporate integrity.
        </p>

        <div className="values-grid" data-reveal>
          {/* 01. Enterprise Excellence */}
          <div className="val-card">
            <div className="val-glow glow-gold"></div>
            <div className="val-icon-box">
              <Award className="val-icon" size={42} />
            </div>
            <h3>Enterprise Excellence</h3>
            <p>Delivering uncompromising quality and architectural superiority in every project.</p>
          </div>

          {/* 02. Strategic Partnership */}
          <div className="val-card">
            <div className="val-glow glow-silver"></div>
            <div className="val-icon-box">
              <HeartHandshake className="val-icon" size={42} />
            </div>
            <h3>Strategic Partnership</h3>
            <p>Aligning deeply with client objectives to drive measurable business outcomes.</p>
          </div>

          {/* 03. Unwavering Integrity */}
          <div className="val-card">
            <div className="val-glow glow-gold"></div>
            <div className="val-icon-box">
              <ShieldCheck className="val-icon" size={42} />
            </div>
            <h3>Unwavering Integrity</h3>
            <p>Operating with absolute transparency and commitment to long-term trust.</p>
          </div>

          {/* 04. Visionary Innovation */}
          <div className="val-card">
            <div className="val-glow glow-silver"></div>
            <div className="val-icon-box">
              <BrainCircuit className="val-icon" size={42} />
            </div>
            <h3>Visionary Innovation</h3>
            <p>Pioneering next-generation technologies to solve complex challenges.</p>
          </div>

          {/* 05. Agile Adaptability */}
          <div className="val-card">
            <div className="val-glow glow-gold"></div>
            <div className="val-icon-box">
              <Cpu className="val-icon" size={42} />
            </div>
            <h3>Agile Adaptability</h3>
            <p>Continuously evolving our methodologies to outpace industry standards.</p>
          </div>

          {/* 06. Continuous Elevation */}
          <div className="val-card">
            <div className="val-glow glow-silver"></div>
            <div className="val-icon-box">
              <TrendingUp className="val-icon" size={42} />
            </div>
            <h3>Continuous Elevation</h3>
            <p>Investing relentlessly in our talent, technology, and thought leadership.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

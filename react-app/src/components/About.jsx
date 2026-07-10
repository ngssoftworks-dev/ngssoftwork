import React, { useEffect, useState } from 'react';
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
    <section id="about" className="section" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="about-text" data-reveal style={{ width: '100%' }}>
          <div className="sec-tag" style={{ margin: '0 auto 1.5rem auto' }}>About Us</div>
          <h2 className="sec-h text-c" style={{ textAlign: 'center', margin: '0 auto' }}>Building the Future of Technology & <span className="text-grad">Engineering</span></h2>

          <div className="vision-mission" style={{ marginBottom: '3rem', marginTop: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px', textAlign: 'center' }}>
              OUR VISION</h3>
            <p className="sec-p" style={{ marginBottom: '2.5rem', lineHeight: '1.6', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>To be a top leader in technology and engineering, helping businesses grow with smart digital solutions and better infrastructure.</p>

            <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '1px', textAlign: 'center' }}>
              OUR MISSION</h3>
            <ul className="mission-list sec-p" style={{ listStyle: 'none', paddingLeft: 0, lineHeight: '1.7', display: 'inline-block', textAlign: 'left' }}>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Build high-quality software, apps, and websites.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Provide accurate CAD drafting and engineering designs.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Create smart tools to make your work easier.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Design great logos and brand identities for businesses.</li>
              <li style={{ marginBottom: '0.6rem' }}><span style={{ color: 'var(--primary)', marginRight: '8px' }}>✦</span> Always deliver the best quality, speed, and security.</li>
            </ul>
          </div>

          <div className="stats-grid" style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div className="stat-box">
              <h3 data-count="250">0</h3>
              <p>Successful Projects</p>
            </div>
            <div className="stat-box">
              <h3 data-count="200">0</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h3 data-count="100">0</h3>
              <p>Business Partners</p>
            </div>
            <div className="stat-box">
              <h3 data-count="230">0</h3>
              <p>Five-Star Reviews</p>
            </div>
            <div className="stat-box">
              <h3 data-count="50">0</h3>
              <p>Ongoing Works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [hide, setHide] = useState(false);
  const [displayNone, setDisplayNone] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHide(true);
      const timer2 = setTimeout(() => {
        setDisplayNone(true);
      }, 800);
      return () => clearTimeout(timer2);
    }, 11000);
    return () => clearTimeout(timer1);
  }, []);

  if (displayNone) return null;

  return (
    <div id="preloader" className={`cinematic-preloader ${hide ? 'hide' : ''}`}>
      <div className="cinematic-dolly-container">
        <div className="particles-overlay"></div>
        <div className="cinematic-content">
          <div className="cinematic-text-container">
            <div className="welcome-text-metallic">WELCOME TO NGS SOFTWORKS</div>
          </div>
          <div className="cinematic-logo-container">
            <img src="./logo/logo.jpeg" alt="NGS Softworks" className="cinematic-logo" />
            <div className="cinematic-tagline" style={{ 
              fontSize: '1.8rem', 
              fontWeight: 800, 
              letterSpacing: '5px', 
              textTransform: 'uppercase', 
              background: 'linear-gradient(90deg, #d4af37, #f3e5ab, #d4af37)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
              marginTop: '15px'
            }}>NGS SOFT WORK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      url: '/logo/logo.jpeg', 
      className: 'hero-slide-logo',
      h1: <>NGS <span className="text-grad grad-gold">SOFT WORKS</span></>,
      p: 'Simple solutions powered by technology, engineering, and creativity.'
    },
    { 
      url: '/assets/c%26s.png', 
      className: '',
      h1: <>CIVIL & <span className="text-grad grad-green">BIM SERVICES</span></>,
      p: 'Professional CAD drafting, BIM modeling, structural layouts, and engineering design solutions.'
    },
    { 
      url: '/assets/design.png', 
      className: '',
      h1: <>3D MODELING & <span className="text-grad grad-green">RENDERING</span></>,
      p: 'High-quality 3D architectural modeling, interior & exterior renders, and photorealistic design visualizations.'
    },
    { 
      url: '/assets/construction%20image.png', 
      className: '',
      h1: <>CONSTRUCTION & <span className="text-grad grad-green">PLANNING</span></>,
      p: 'Accurate architectural drafting, structural analysis, and professional construction blueprints.'
    },
    { 
      url: '/assets/sketch.png', 
      className: '',
      h1: <>ARCHITECTURAL <span className="text-grad grad-green">DRAFTING</span></>,
      p: 'Detailed 2D technical drawings, blueprint designs, elevations, and CAD drafting layouts.'
    },
    { 
      url: '/assets/code.png', 
      className: '',
      h1: <>SOFTWARE <span className="text-grad grad-blue">SOLUTIONS</span></>,
      p: 'Modern websites, apps, automation tools, and smart digital services for your needs.'
    },
    { 
      url: '/assets/edit.png', 
      className: '',
      h1: <>VIDEO & <span className="text-grad grad-purple">MEDIA EDITING</span></>,
      p: 'Creative video editing, motion graphics, reels, and professional digital media production.'
    },
    { 
      url: '/assets/logo.png', 
      className: '',
      h1: <>LOGO & <span className="text-grad grad-orange">BRANDING</span></>,
      p: 'Modern logo design, visual branding, and creative identity solutions for startups and businesses.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero">
      <style>
        {`
          @keyframes textSlideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes textSlideUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-h1 {
            animation: textSlideDown 0.6s ease forwards;
          }
          .animate-p {
            animation: textSlideUp 0.6s ease forwards;
          }
        `}
      </style>
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${slide.className} ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.url}')` }}
          ></div>
        ))}
        <div className="hero-slider-overlay"></div>
      </div>

      <div className="hero-glow hg-1"></div>
      <div className="hero-glow hg-2"></div>
      <div className="hero-glow hg-3"></div>
      <div className="hero-content">
        <div className="hero-badge" data-reveal style={{ fontSize: '1.1rem', fontWeight: 700, padding: '10px 24px', letterSpacing: '1.5px', color: '#FFD700', border: '1px solid rgba(255, 215, 0, 0.3)', background: 'rgba(0, 0, 0, 0.5)', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
          <span className="badge-dot" style={{ backgroundColor: '#FFD700', width: '10px', height: '10px', boxShadow: '0 0 12px #FFD700' }}></span> NGS SOFT WORKS
        </div>
        
        <h1 
          className="hero-h1 animate-h1" 
          key={`h1-${currentSlide}`}
          style={{ lineHeight: currentSlide === 0 ? '1.2' : '1.1' }}
        >
          {slides[currentSlide].h1}
        </h1>
        <p 
          className="hero-p animate-p"
          key={`p-${currentSlide}`}
          style={{ maxWidth: '1100px', margin: '0 auto 2rem', fontSize: '1.2rem', fontFamily: 'var(--font-heading), sans-serif', fontWeight: 700, color: '#FFD700', letterSpacing: '0.5px', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
        >
          {slides[currentSlide].p}
        </p>
      </div>
    </section>
  );
};

export default Hero;

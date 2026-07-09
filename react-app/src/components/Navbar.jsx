import React, { useEffect, useState } from 'react';
import { siteConfig } from '../config';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a className="nav-brand" href="#">
            <img src="/logo/logo.jpeg" alt="NGS Soft Works Logo" className="brand-img-logo" />
            <div className="brand-text">
              <span className="brand-name">NGS SOFT WORKS</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#work-process">Process</a></li>
            <li><a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="nav-btn">Start Project</a></li>
          </ul>
          <button 
            className="hamburger" 
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
        <a href="#about" className="mm-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#solutions" className="mm-link" onClick={() => setMenuOpen(false)}>Solutions</a>
        <a href="#team" className="mm-link" onClick={() => setMenuOpen(false)}>Team</a>
        <a href="#work-process" className="mm-link" onClick={() => setMenuOpen(false)}>Process</a>
        <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="mm-link highlight" onClick={() => setMenuOpen(false)}>Start Project</a>
      </div>
    </>
  );
};

export default Navbar;

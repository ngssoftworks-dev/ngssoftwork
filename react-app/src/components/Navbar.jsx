import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <Link className="nav-brand" to="/">
            <img src="./logo/logo.jpeg" alt="NGS Soft Works Logo" className="brand-img-logo" />
            <div className="brand-text">
              <span className="brand-name">NGS SOFT WORKS</span>
            </div>
          </Link>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/team">Team</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
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
        <NavLink to="/" end className="mm-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/service" className="mm-link" onClick={() => setMenuOpen(false)}>Service</NavLink>
        <NavLink to="/about" className="mm-link" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/team" className="mm-link" onClick={() => setMenuOpen(false)}>Team</NavLink>
        <NavLink to="/contact" className="mm-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="mm-link highlight" onClick={() => setMenuOpen(false)}>Start Project</a>
      </div>
    </>
  );
};

export default Navbar;

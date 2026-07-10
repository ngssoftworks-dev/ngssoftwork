import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Trust from './components/Trust';
import Solutions from './components/Solutions';
import Team from './components/Team';
import Process from './components/Process';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => (
  <>
    <Hero />
    <Trust />
    <Values /> 
    <Contact />
  </>
);

function App() {
  const location = useLocation();

  // Global scroll reveal logic
  useEffect(() => {
    // Scroll to top of the page on route change
    window.scrollTo(0, 0);
    
    // Add a small delay to ensure DOM is rendered before observing
    const timer = setTimeout(() => {
      const ro = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            ro.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.services-grid, .port-grid, .trust-grid, .values-grid, .tier-explain-grid').forEach((grid) => {
        Array.from(grid.children).forEach((child, index) => {
          child.style.transitionDelay = `${index * 80}ms`;
        });
      });

      document.querySelectorAll('[data-reveal]').forEach((el) => {
        // Reset visibility so it can animate again if navigated to
        el.classList.remove('visible');
        ro.observe(el);
      });
      
      return () => ro.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Preloader />
      <Navbar />
      <div style={{ paddingTop: location.pathname === '/' ? '0' : '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Solutions />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

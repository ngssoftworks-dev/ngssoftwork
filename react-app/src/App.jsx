import React, { useEffect } from 'react';
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

function App() {
  // Global scroll reveal logic
  useEffect(() => {
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

    document.querySelectorAll('[data-reveal]').forEach((el) => ro.observe(el));
    

    return () => ro.disconnect();
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Trust />
      <Solutions />
      <Team />
      <Process />
      <Values /> 
      <Contact />
      <Footer />
    </>
  );
}

export default App;

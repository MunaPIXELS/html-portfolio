import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  useEffect(() => {
    // Fade-in on scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      {threshold: 0.15}
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div id="cursor"></div>
      <div id="cursor-ring"></div>

      {/* Background */}
      <div className="grid-bg"></div>
      <div className="noise"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
};

export default App;
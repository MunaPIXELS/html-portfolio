import React, {useEffect, useState} from 'react';

const ROLES = ['Full-Stack Developer', 'CS Student', 'Problem Solver', 'Builder'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    animate();
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="hero">
      <div className="hero-tag">Available for internships &amp; collaborations</div>
      <h1 className="hero-name">
        <div>MUNA</div>
        <div className="glitch" data-text="MUSONDA">MUSONDA</div>
      </h1>
      <p className="hero-sub">
        <em>{displayed}<span className="typewriter-cursor"></span></em>
        {' '}— crafting digital experiences at{' '}
        <em>Cavendish University Zambia</em>
      </p>
      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-outline">Get In Touch</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line"></div>
        SCROLL
      </div>

      <div className="hero-badge">
        <svg viewBox="0 0 100 100">
          <defs>
            <path id="circle-path" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          </defs>
          <text fill="#6b6b80" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="3.2">
            <textPath href="#circle-path">CS STUDENT • DEVELOPER • BUILDER •&nbsp;</textPath>
          </text>
        </svg>
        <span className="hero-badge-center">ZM</span>
      </div>
    </section>
  );
};

export default Hero;
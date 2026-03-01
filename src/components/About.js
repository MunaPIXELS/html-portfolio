import React from 'react';

const TECH = ['React', 'JavaScript', 'Firebase', 'HTML & CSS', 'Node.js', 'Git & GitHub', 'Python', 'SQL'];

const STATS = [
  {num: '3', label: 'Projects Shipped'},
  {num: '3rd', label: 'Year of Study'},
  {num: '∞', label: 'Problems to Solve'},
  {num: 'ZM', label: 'Based in Zambia'},
];

const About = () => (
  <section id="about">
    <div className="section-label">01 — About</div>
    <h2 className="section-title">The Developer<br />Behind the Code</h2>
    <div className="about-grid">

      <div>
        <div className="about-text fade-in">
          <p>
            Hey, I'm <strong>Muna Musonda</strong> — a third-year Computer Science student at{' '}
            <strong>Cavendish University Zambia</strong>, passionate about building software
            that solves real-world problems.
          </p>
          <p>
            I enjoy the full spectrum of development — from crafting intuitive user interfaces
            to architecting backend systems. When I'm not coding, I'm exploring new technologies,
            collaborating on projects, or thinking about how digital solutions can uplift communities.
          </p>
          <p>
            My work spans <strong>web platforms, management systems, and social networking apps</strong>,
            each built with purpose and attention to detail.
          </p>
        </div>

        <div className="tech-stack fade-in" style={{transitionDelay: '0.15s'}}>
          <div className="tech-stack-label">Tech I work with</div>
          <div className="tech-pills">
            {TECH.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-stats fade-in" style={{transitionDelay: '0.2s'}}>
        {STATS.map(({num, label}) => (
          <div key={label} className="stat-card">
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default About;
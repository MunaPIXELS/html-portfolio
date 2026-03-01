import React from 'react';

const PROJECTS = [
  {
    id: '01',
    featured: true,
    name: 'EasyMarket',
    desc: 'A full-featured e-commerce web application enabling seamless online buying and selling. Built with a focus on performance, user experience, and scalability — from product listings to cart management and order tracking.',
    tags: ['React', 'Firebase', 'E-Commerce', 'Web App'],
    link: 'https://github.com/MunaPIXELS',
  },
  {
    id: '02',
    featured: false,
    name: "Muna's Car Rental\nManagement System",
    desc: 'A comprehensive management platform for a car rental business — handling vehicle inventory, bookings, customer records, and billing workflows in a unified dashboard.',
    tags: ['Management', 'Dashboard', 'CRUD'],
    link: 'https://github.com/MunaPIXELS',
  },
  {
    id: '03',
    featured: false,
    name: 'Campus Connect',
    desc: 'A localized social networking platform built exclusively for Cavendish University Zambia — connecting students, sharing campus news, events, and fostering a strong university community.',
    tags: ['Social Network', 'Community', 'Real-time'],
    link: 'https://github.com/MunaPIXELS',
  },
];

const Projects = () => (
  <section id="projects">
    <div className="section-label">02 — Projects</div>
    <h2 className="section-title">Things I've<br />Built</h2>
    <div className="projects-grid">
      {PROJECTS.map(({id, featured, name, desc, tags, link}, i) => (
        <div
          key={id}
          className={`project-card fade-in ${featured ? 'featured' : ''}`}
          style={{transitionDelay: `${i * 0.1}s`}}
        >
          <div>
            <span className="project-num">{id}{featured ? ' — Featured' : ''}</span>
            <h3 className="project-name">
              {name.split('\n').map((line, j) => (
                <React.Fragment key={j}>{line}{j < name.split('\n').length - 1 && <br />}</React.Fragment>
              ))}
            </h3>
            <p className="project-desc">{desc}</p>
            <div className="project-tags">
              {tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>

          {featured && (
            <div className="featured-visual">
              <div className="featured-visual-url">// easymarket.app</div>
              <div className="featured-visual-text">SHOP<br />SMART</div>
              <div className="featured-visual-dots">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
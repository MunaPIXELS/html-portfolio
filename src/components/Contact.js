import React from 'react';

const SOCIAL = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/260965992724',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/MunaPIXELS',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/realmuna.jr34',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/muna-musonda',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const INFO = [
  {label: 'Phone & WhatsApp', value: '+260 965 992 724', href: 'https://wa.me/260965992724'},
  {label: 'GitHub', value: 'MunaPIXELS', href: 'https://github.com/MunaPIXELS'},
  {label: 'Instagram', value: '@realmuna.jr34', href: 'https://instagram.com/realmuna.jr34'},
  {label: 'LinkedIn', value: 'Muna Musonda', href: 'https://linkedin.com/in/muna-musonda'},
];

const Contact = () => (
  <section id="contact">
    <div className="section-label" style={{justifyContent: 'center'}}>03 — Contact</div>
    <div className="contact-inner">
      <h2 className="section-title" style={{marginBottom: '24px'}}>
        Let's Build<br />Something Great
      </h2>
      <p className="contact-subtext">
        Whether it's a project collaboration, internship opportunity, or just a conversation
        about tech — my inbox is always open.
      </p>

      <a href="tel:+260965992724" className="contact-email">+260 965 992 724</a>

      <div className="contact-info-grid">
        {INFO.map(({label, value, href}) => (
          <div key={label} className="contact-info-item">
            <div className="contact-info-label">{label}</div>
            <div className="contact-info-value">
              <a href={href} target="_blank" rel="noreferrer">{value}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="social-links">
        {SOCIAL.map(({label, href, icon}) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
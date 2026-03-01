/* =============================================
   MUNA MUSONDA — PORTFOLIO SCRIPTS
   ============================================= */

/* === CUSTOM CURSOR === */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

const animateRing = () => {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
};
animateRing();

/* === NAV SCROLL EFFECT === */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* === MOBILE MENU === */
const toggleMobileMenu = () => {
  document.getElementById('mobileMenu').classList.toggle('open');
};

const closeMobileMenu = () => {
  document.getElementById('mobileMenu').classList.remove('open');
};

/* === FADE IN ON SCROLL (IntersectionObserver) === */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {threshold: 0.15});

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
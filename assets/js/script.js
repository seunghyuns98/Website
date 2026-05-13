/* =========================================================
   Seunghyun Shin — Homepage interactions
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 24) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    const btt = document.getElementById('back-to-top');
    if (window.scrollY > 600) btt.classList.add('visible');
    else btt.classList.remove('visible');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const setActive = () => {
    let current = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ---------- Back to top ---------- */
  const btt = document.getElementById('back-to-top');
  if (btt) btt.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  /* ---------- Typed hero text ---------- */
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const words = ['Ph.D. Candidate', 'AI Researcher', 'Computer Vision'];
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = words[wi];
      typedEl.textContent = word.substring(0, ci);
      if (!deleting && ci < word.length) {
        ci++; setTimeout(tick, 95);
      } else if (deleting && ci > 0) {
        ci--; setTimeout(tick, 45);
      } else {
        deleting = !deleting;
        if (!deleting) wi = (wi + 1) % words.length;
        setTimeout(tick, deleting ? 1400 : 350);
      }
    };
    tick();
  }

  /* ---------- Publication filters ---------- */
  const filterBtns = document.querySelectorAll('.pub-filter');
  const pubItems = document.querySelectorAll('.pub-item');
  const pubYears = document.querySelectorAll('.pub-year');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;

      pubItems.forEach(item => {
        if (f === 'all' || item.dataset.category === f) {
          item.classList.remove('is-hidden');
        } else {
          item.classList.add('is-hidden');
        }
      });

      // Hide year headers that have no visible items beneath them.
      // For "all" / "conf" / "jour": show year headers, hide "Patents".
      // For "pat": hide year headers, show "Patents".
      pubYears.forEach(yearEl => {
        const label = yearEl.textContent.trim().toLowerCase();
        if (f === 'pat') {
          yearEl.style.display = label === 'patents' ? '' : 'none';
        } else if (f === 'all') {
          yearEl.style.display = '';
        } else {
          // 'conf' or 'jour' — hide Patents header
          yearEl.style.display = label === 'patents' ? 'none' : '';
        }
      });
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    'section h2, .about-grid, .interests-grid > *, .pub-item, .timeline-item, .skills-grid, .contact-wrapper'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});

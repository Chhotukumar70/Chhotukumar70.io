document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('is-open');
      navLinks.classList.remove('is-open');
    });
  });

  /* ---------- Active section link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => activeObserver.observe(s));

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => entry.target.classList.add('in-view'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Hero typing animation ---------- */
  const typingEl = document.getElementById('typing-role');
  const roles = ['MCA Graduate', 'Software Engineer', 'Web Developer', 'Problem Solver'];
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
      setTimeout(typeLoop, 70);
    } else {
      charIndex--;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeLoop, 300);
        return;
      }
      setTimeout(typeLoop, 35);
    }
  }
  if (typingEl) typeLoop();

  /* ---------- Terminal signature lines ---------- */
  const terminalLines = document.querySelectorAll('.terminal-body .line');
  const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        terminalLines.forEach((line, i) => {
          setTimeout(() => { line.style.opacity = 1; }, i * 450);
        });
        terminalObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  const terminalBody = document.querySelector('.terminal-body');
  if (terminalBody) terminalObserver.observe(terminalBody);

  /* ---------- Skill bars fill on view ---------- */
  const skillBars = document.querySelectorAll('.skill-bar .fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.getAttribute('data-fill');
        entry.target.style.width = target + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  skillBars.forEach(bar => skillObserver.observe(bar));

  /* ---------- Click "glow" light animation on detail rows ---------- */
  const glowColors = ['#f2b84b', '#5eead4', '#a78bfa', '#fb7bb0', '#60a5fa'];
  document.querySelectorAll('.glow-trigger').forEach((el, idx) => {
    el.addEventListener('click', (e) => {
      const surface = el.closest('.glow-surface') || el;
      const rect = surface.getBoundingClientRect();
      const burst = document.createElement('span');
      burst.className = 'glow-burst';
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      burst.style.left = x + 'px';
      burst.style.top = y + 'px';
      burst.style.setProperty('--glow-color', glowColors[idx % glowColors.length]);
      surface.appendChild(burst);
      burst.addEventListener('animationend', () => burst.remove());
    });
  });

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav background on scroll ---------- */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) nav.style.boxShadow = '0 10px 30px -20px rgba(0,0,0,0.6)';
    else nav.style.boxShadow = 'none';
  });

});

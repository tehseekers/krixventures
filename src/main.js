import './style.css';
import logoImage from './assets/Krix_Ventures_Logo.png';

function setImageSources() {
  document.getElementById('logo-img').src = logoImage;
  document.getElementById('footer-logo-img').src = logoImage;
}

function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mobileNav');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  elements.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.style.background = '#2d6a4f';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setImageSources();
  initHeader();
  initMobileNav();
  initScrollAnimations();
  initContactForm();
});

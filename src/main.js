import './style.css';

import heroImage from './assets/hero.jpg';
import aboutImage from './assets/about.jpg';
import serviceMetals from './assets/service-metals.jpg';
import serviceLogistics from './assets/service-logistics.jpg';
import serviceSourcing from './assets/service-sourcing.jpg';
import gallery1 from './assets/gallery-1.jpg';
import gallery2 from './assets/gallery-2.jpg';
import gallery3 from './assets/gallery-3.jpg';
import gallery4 from './assets/gallery-4.jpg';
import logoImage from './assets/image.png';

function setImageSources() {
  document.getElementById('hero-img').src = heroImage;
  document.getElementById('about-img').src = aboutImage;
  document.getElementById('about-img-card').src = aboutImage;
  document.getElementById('service-metals-img').src = serviceMetals;
  document.getElementById('service-logistics-img').src = serviceLogistics;
  document.getElementById('service-sourcing-img').src = serviceSourcing;
  document.getElementById('gallery-1-img').src = gallery1;
  document.getElementById('gallery-2-img').src = gallery2;
  document.getElementById('gallery-3-img').src = gallery3;
  document.getElementById('gallery-4-img').src = gallery4;
  document.getElementById('logo-img').src = logoImage;
}

function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
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
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sent Successfully';
    btn.style.background = '#2d6a4f';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Submit Enquiry';
      btn.style.background = '';
      btn.style.color = '';
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

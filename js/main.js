// main.js - Premium UI Interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header
  const header = document.querySelector('header');
  const hasHero = document.querySelector('.hero') !== null;
  
  if (header) {
    if (!hasHero) {
      header.classList.add('scrolled');
    } else {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
  }


  // Reveal Animations on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optional: stop observing once revealed
        // observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // Mobile Menu Toggle
  const toggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && e.target !== toggle) {
        navLinks.classList.remove('active');
      }
    });
  }
});


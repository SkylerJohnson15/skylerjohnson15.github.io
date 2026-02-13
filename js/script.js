// ===== Mobile burger menu =====
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

const burger = document.createElement('div');
burger.className = 'burger';
burger.innerHTML = '<i class="fas fa-bars"></i>'; // Font Awesome icon
navbar.insertBefore(burger, navLinks);

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ===== Smooth scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Scroll reveal animation =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => io.observe(el));

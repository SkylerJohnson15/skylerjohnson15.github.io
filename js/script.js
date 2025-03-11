const navLinks = document.querySelector('.nav-links');
const burger = document.createElement('div');
burger.className = 'burger';
burger.innerHTML = '<i class="fas fa-bars"></i>'; // Font Awesome icon
document.querySelector('.navbar').insertBefore(burger, navLinks);
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
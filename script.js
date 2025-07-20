// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form submission (placeholder)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan telah dikirim! (Fitur ini hanya simulasi)');
    form.reset();
});

// Scroll animation trigger
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
            entry.target.classList.add('fade-in-active');
        }
    });
}, { threshold: 0.2 });

fadeInElements.forEach((el, index) => {
    el.dataset.delay = index * 0.2;
    observer.observe(el);
});

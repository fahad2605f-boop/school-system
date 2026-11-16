const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const ctaBtn = document.getElementById('ctaBtn');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

ctaBtn.addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
    contactForm.reset();
});
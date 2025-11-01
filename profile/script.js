// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in animation when scrolling
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// Typing animation for intro
const text = "DEVELOPER";
let index = 0;
function typeEffect() {
  const span = document.querySelector('.typing');
  if (index < text.length) {
    span.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();

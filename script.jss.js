// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Preloader removal
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = 0;
    setTimeout(() => preloader.remove(), 500);
  }
});

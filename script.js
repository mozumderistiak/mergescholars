// Smooth scroll to sections with offset and extra visuals
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    // Add pulse effect to target when scrolled to
    target.classList.add('pulse-highlight');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      target.classList.remove('pulse-highlight');
    }, 1500);
  }
}

// Enhanced preloader removal with fade + animation
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('fade-out');

    // Wait for fade-out CSS animation, then remove
    setTimeout(() => {
      preloader.remove();

      // Optional entrance animation for body
      document.body.classList.add('page-loaded');
    }, 1000);
  }
});

// Neon mouse cursor trail
document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 500);
});

// Scroll-based background blur effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('blur-bg');
  } else {
    header.classList.remove('blur-bg');
  }
});

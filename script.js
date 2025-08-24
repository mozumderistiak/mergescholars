// ======================= Smooth Scroll with Highlight =======================
function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('pulse-highlight');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      target.classList.remove('pulse-highlight');
    }, 1500);
  }
}

// ======================= Preloader Fade & Page Entrance =======================
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('fade-out');

    setTimeout(() => {
      preloader.remove();
      document.body.classList.add('page-loaded');
      detectDevice(); // run device detection on load
      revealOnScroll(); // initial section reveal
    }, 1000);
  }
});

// ======================= Cursor Trail Effect =======================
let trailTimeout;
document.addEventListener('mousemove', (e) => {
  clearTimeout(trailTimeout); // prevent too many dots
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = `${e.pageX - 6}px`;
  trail.style.top = `${e.pageY - 6}px`;
  document.body.appendChild(trail);

  setTimeout(() => trail.remove(), 600);
});

// ======================= Header Blur on Scroll =======================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('blur-bg');
  } else {
    header.classList.remove('blur-bg');
  }
  revealOnScroll();
});

// ======================= Section Reveal Animations =======================
function revealOnScroll() {
  const sections = document.querySelectorAll('section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add('visible');
    }
  });
}

// ======================= Device Detection =======================
function detectDevice() {
  const width = window.innerWidth;
  const body = document.body;
  body.classList.remove("device-mobile", "device-tablet", "device-desktop");

  if (width <= 600) {
    body.classList.add("device-mobile");
  } else if (width <= 1024) {
    body.classList.add("device-tablet");
  } else {
    body.classList.add("device-desktop");
  }
}

window.addEventListener("resize", detectDevice);

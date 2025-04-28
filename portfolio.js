// Fade-in animation when section is in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
});
  
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));
  
// Navbar Shadow on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
});

// Typing Effect
const text = "Hello, I'm Joshua";
let index = 0;
function typeWriter() {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
}
window.addEventListener('load', typeWriter);

// Parallax Scroll Effect
window.addEventListener('scroll', () => {
    const parallaxEls = document.querySelectorAll('.parallax');
    parallaxEls.forEach(el => {
      let speed = 0.2;
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});
// Smooth Scroll To Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.opacity = 1;
    scrollToTopBtn.style.pointerEvents = 'auto';
  } else {
    scrollToTopBtn.style.opacity = 0;
    scrollToTopBtn.style.pointerEvents = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Bubble Animation
const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

for (let i = 0; i < 30; i++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 8 + 2,
    speed: Math.random() * 1 + 0.5,
    opacity: Math.random()
  });
}

function animateBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  
  bubbles.forEach(bubble => {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity})`;
    ctx.fill();
    bubble.y -= bubble.speed;
    
    if (bubble.y < -10) {
      bubble.y = canvas.height + 10;
      bubble.x = Math.random() * canvas.width;
    }
  });
  
  requestAnimationFrame(animateBubbles);
}

animateBubbles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



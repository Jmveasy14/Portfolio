// Smooth scroll animation for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Animate sections on scroll using IntersectionObserver
  const bubbles = document.querySelectorAll('.bubble-box');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  bubbles.forEach(bubble => {
    observer.observe(bubble);
  });
  
  // Basic contact form validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    alert("Thanks for reaching out, Josh will reply soon!");
    this.reset();
  });
  
// Loader fade-out
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1000);
  });
  
  // Bubbles Animation
  const canvas = document.getElementById('bubbleCanvas');
  const ctx = canvas.getContext('2d');
  let bubbles = [];
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function createBubbles() {
    bubbles = [];
    for (let i = 0; i < 60; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 10 + 5,
        d: Math.random() * 2,
        color: `rgba(255, 255, 255, ${Math.random()})`
      });
    }
  }
  
  function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < bubbles.length; i++) {
      ctx.beginPath();
      ctx.arc(bubbles[i].x, bubbles[i].y, bubbles[i].r, 0, Math.PI * 2, false);
      ctx.fillStyle = bubbles[i].color;
      ctx.fill();
      bubbles[i].y -= bubbles[i].d;
      if (bubbles[i].y < -bubbles[i].r) {
        bubbles[i].y = canvas.height + bubbles[i].r;
        bubbles[i].x = Math.random() * canvas.width;
      }
    }
  }
  
  function animateBubbles() {
    drawBubbles();
    requestAnimationFrame(animateBubbles);
  }
  
  window.addEventListener('resize', () => {
    resizeCanvas();
    createBubbles();
  });
  
  // Initialize
  resizeCanvas();
  createBubbles();
  animateBubbles();
  
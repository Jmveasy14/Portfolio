document.addEventListener('DOMContentLoaded', () => {
    // Loader Animation
    setTimeout(() => {
      document.querySelector('.loader-wrapper').classList.add('fade-out');
    }, 2000);
  
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    
    if (window.innerWidth > 1024) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    
      // Add hover effect on clickable elements
      const clickables = document.querySelectorAll('a, button, .btn, .project-card, .skill-card');
      clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursor.style.opacity = '0.5';
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursor.style.opacity = '0.6';
        });
      });
    }
  
    // Typewriter Effect
    const texts = ["Web Developer", "UI/UX Designer", "Frontend Specialist", "Creative Coder"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    
    function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      
      document.getElementById('typed-text').textContent = letter;
      
      if (letter.length === currentText.length) {
        setTimeout(() => {
          index = 0;
          count++;
          setTimeout(type, 500);
        }, 2000);
      } else {
        setTimeout(type, 100);
      }
    }
    
    setTimeout(type, 2000);
  
    // Navbar Scroll Effect
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
      // Add background to navbar on scroll
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      // Highlight active nav link
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
    
    // Close menu when clicking a nav link on mobile
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navLinksContainer.classList.remove('active');
        }
      });
    });
  
    // Scroll Animations
    const animateElements = document.querySelectorAll('.animate-in');
    
    function checkScroll() {
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
  
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
          // Show all cards if filter is 'all', otherwise show only matching cards
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 300);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  
    // Initialize Progress Bars
    const progressBars = document.querySelectorAll('.progress');
    
    function initProgressBars() {
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.width = width;
        }, 500);
      });
    }
  
    // Trigger progress bars when skills section is in view
    const skillsSection = document.querySelector('.skills');
    
    function checkSkillsInView() {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 200) {
        initProgressBars();
        window.removeEventListener('scroll', checkSkillsInView);
      }
    }
    
    window.addEventListener('scroll', checkSkillsInView);
    checkSkillsInView(); // Check on load
  
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For demonstration purposes, just show a success message
        alert('Thanks for your message! I\'ll get back to you soon.');
        contactForm.reset();
      });
    }
  
    // Animate project cards on scroll
    const projectSection = document.querySelector('.projects');
    
    function animateProjectCards() {
      const projectTop = projectSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (projectTop < windowHeight - 200) {
        projectCards.forEach((card, index) => {
          setTimeout(() => {
            card.style.animation = `fadeInUp 0.6s forwards ${index * 0.1}s`;
          }, 300);
        });
        window.removeEventListener('scroll', animateProjectCards);
      }
    }
    
    window.addEventListener('scroll', animateProjectCards);
    animateProjectCards(); // Check on load
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
      }
    });
  
    // Reveal animations for about section
    const aboutSection = document.querySelector('.about');
    const aboutContent = document.querySelector('.about-content');
    
    function revealAboutSection() {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (aboutTop < windowHeight - 200) {
        aboutContent.style.opacity = '1';
        window.removeEventListener('scroll', revealAboutSection);
      }
    }
    
    aboutContent.style.opacity = '0';
    aboutContent.style.transition = 'opacity 1s ease';
    
    window.addEventListener('scroll', revealAboutSection);
    revealAboutSection(); // Check on load
  });
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        document.querySelector('.loader-wrapper').classList.add('fade-out');
    }, 2000);

    // Typed text effect
    const typedTextElement = document.getElementById('typed-text');
    const textArray = [
        "Web Developer",
        "UI/UX Designer",
        "Front-end Engineer",
        "Creative Coder"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let erasingDelay = 100;
    let newTextDelay = 2000;

    function typeEffect() {
        const currentText = textArray[textIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = newTextDelay;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }

        setTimeout(typeEffect, typingDelay);
    }

    setTimeout(typeEffect, 2500);

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('click', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 100);
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Animate progress bars when in viewport
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = width;
        });
    }

    // Project filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
                
                // Add animation
                setTimeout(() => {
                    card.classList.add('animated');
                }, 100);
            });
        });
    });

    // Form label animation (already handled in CSS)
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Success message - In a real app, you would send this data to a server
                alert('Message sent successfully! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Scroll animation
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkAnimateElements() {
        const triggerBottom = window.innerHeight * 0.85;
        
        animateOnScrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('animated');
            }
        });
    }

    // Add animate-on-scroll class to elements
    const skillsSection = document.querySelector('.skills');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectSection = document.querySelector('.projects');
    const projectFilters = document.querySelector('.project-filters');
    const aboutContent = document.querySelector('.about-content');
    
    skillCards.forEach(card => card.classList.add('animate-on-scroll'));
    projectCards.forEach(card => card.classList.add('animate-on-scroll'));
    aboutContent.classList.add('animate-on-scroll');
    projectFilters.classList.add('animate-on-scroll');
    
    if (skillsSection) {
        const sectionHeader = skillsSection.querySelector('.section-header');
        sectionHeader.classList.add('animate-on-scroll');
    }
    
    if (projectSection) {
        const sectionHeader = projectSection.querySelector('.section-header');
        sectionHeader.classList.add('animate-on-scroll');
    }

    // Initialize animations
    window.addEventListener('scroll', function() {
        checkAnimateElements();
        if (isElementInViewport(document.querySelector('.skills'))) {
            animateProgressBars();
        }
    });

    // Trigger once on load
    checkAnimateElements();
    
    // Add parallax effect to hero section
    window.addEventListener('mousemove', function(e) {
        const hero = document.querySelector('.hero');
        const moveX = (e.clientX - window.innerWidth / 2) / 25;
        const moveY = (e.clientY - window.innerHeight / 2) / 25;
        
        hero.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    });

    // Utility: Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

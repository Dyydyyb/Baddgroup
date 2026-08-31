document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // ==========================================================================
  // MOBILE MENU TOGGLE
  // ==========================================================================
  const menuToggleBtn = document.getElementById('menu-toggle-btn');
  const menuToggleIcon = document.getElementById('menu-toggle-icon');
  const navMenuList = document.getElementById('nav-menu-list');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggleBtn && navMenuList) {
    menuToggleBtn.addEventListener('click', () => {
      navMenuList.classList.toggle('active');
      const isActive = navMenuList.classList.contains('active');
      
      // Update Lucide Icon dynamically
      if (isActive) {
        menuToggleIcon.setAttribute('data-lucide', 'x');
      } else {
        menuToggleIcon.setAttribute('data-lucide', 'menu');
      }
      lucide.createIcons();
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenuList.classList.remove('active');
        menuToggleIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      });
    });
  }

  // ==========================================================================
  // HEADER SCROLL EFFECT & NAVIGATION ACTIVE INDICATOR
  // ==========================================================================
  const header = document.getElementById('main-header');
  const sections = document.querySelectorAll('section');

  const handleScroll = () => {
    // Scroll header background transition
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll active link highlight
    let currentSectionId = '';
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once initially to set correct state
  handleScroll();

  // ==========================================================================
  // INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Future animations for skills can be added here
        
        // Stop observing once animated
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ==========================================================================
  // CANVASES & HERO PARTICLE SYSTEM
  // ==========================================================================
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = window.innerWidth < 768 ? 35 : 75;
    const connectionDistance = 110;
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', () => {
      resizeCanvas();
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 86, 176, ${this.alpha})`;
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(26, 86, 176, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  // ==========================================================================
  // FORMSPREE AJAX SUBMISSION
  // ==========================================================================
  const contactForm = document.getElementById('portfolio-contact-form');
  const formStatusMsg = document.getElementById('form-status-msg');
  const formSubmitBtn = document.getElementById('form-submit-btn');

  if (contactForm && formStatusMsg) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      // Clear previous status styles
      formStatusMsg.classList.remove('success', 'error');
      formStatusMsg.textContent = '';
      
      // Update button state to loading
      const originalSubmitText = formSubmitBtn.innerHTML;
      formSubmitBtn.disabled = true;
      formSubmitBtn.innerHTML = 'Enviando... <i data-lucide="loader-2" class="spin"></i>';
      lucide.createIcons();

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success
          formStatusMsg.classList.add('success');
          formStatusMsg.textContent = '¡Mensaje enviado con éxito! Dylan te responderá lo antes posible.';
          contactForm.reset();
        } else {
          // Error response
          const responseData = await response.json();
          if (responseData.errors) {
            formStatusMsg.textContent = responseData.errors.map(error => error.message).join(', ');
          } else {
            formStatusMsg.textContent = 'Ocurrió un error. Por favor intenta de nuevo.';
          }
          formStatusMsg.classList.add('error');
        }
      } catch (error) {
        // Network error
        formStatusMsg.classList.add('error');
        formStatusMsg.textContent = 'Error de conexión. No pudimos enviar tu mensaje.';
      } finally {
        // Restore button state
        formSubmitBtn.disabled = false;
        formSubmitBtn.innerHTML = originalSubmitText;
        lucide.createIcons();
      }
    });
  }
});

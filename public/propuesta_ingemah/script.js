/**
 * INGEMAH - Constructora en Ushuaia, Tierra del Fuego
 * Frontend Interactive Logic & WhatsApp Wizard
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------------------------------------
     01. HEADER SCROLL EFFECT & ACTIVE NAVIGATION
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run once on load

  // Active Nav Link Spy
  const updateActiveNav = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ------------------------------------------------------------------------
     02. MOBILE NAVIGATION MENU
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
    });

    // Close mobile menu on click link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     03. SUTTLE HERO PARALLAX
     ------------------------------------------------------------------------ */
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos < window.innerHeight) {
        heroVideo.style.transform = `scale(1.04) translateY(${scrollPos * 0.22}px)`;
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     04. ON-SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  /* ------------------------------------------------------------------------
     05. INTERACTIVE WHATSAPP WIZARD / ASISTENTE DE CONSULTA
     ------------------------------------------------------------------------ */
  const wizardState = {
    step: 1,
    services: new Set(),
    projectType: 'Vivienda unifamiliar',
    landStatus: 'Tengo terreno sin planos'
  };

  // DOM Elements - Wizard
  const progressFill = document.getElementById('progressFill');
  const stepIndicators = [
    document.getElementById('stepIndicator1'),
    document.getElementById('stepIndicator2'),
    document.getElementById('stepIndicator3')
  ];
  const stepPanes = [
    document.getElementById('wizardStep1'),
    document.getElementById('wizardStep2'),
    document.getElementById('wizardStep3')
  ];

  const serviceItems = document.querySelectorAll('.service-select-item');
  const servicesCountBadge = document.getElementById('servicesCountBadge');
  const btnToStep2 = document.getElementById('btnToStep2');
  const btnBackToStep1 = document.getElementById('btnBackToStep1');
  const btnToStep3 = document.getElementById('btnToStep3');
  const btnBackToStep2 = document.getElementById('btnBackToStep2');
  const btnResetWizard = document.getElementById('btnResetWizard');

  const projectTypeCards = document.querySelectorAll('#projectTypeGrid .option-radio-card');
  const landStatusCards = document.querySelectorAll('#landStatusGrid .option-radio-card');

  // Summary and WhatsApp Elements
  const summaryServicesList = document.getElementById('summaryServicesList');
  const summaryProjectType = document.getElementById('summaryProjectType');
  const summaryLandStatus = document.getElementById('summaryLandStatus');
  const whatsappPreviewText = document.getElementById('whatsappPreviewText');
  const btnSendWhatsapp = document.getElementById('btnSendWhatsapp');
  const currentTimeDisplay = document.getElementById('currentTimeDisplay');

  // Step 1: Services Selection
  serviceItems.forEach(item => {
    item.addEventListener('click', () => {
      const serviceName = item.getAttribute('data-service');
      if (wizardState.services.has(serviceName)) {
        wizardState.services.delete(serviceName);
        item.classList.remove('selected');
      } else {
        wizardState.services.add(serviceName);
        item.classList.add('selected');
      }
      updateStep1Validation();
    });
  });

  const updateStep1Validation = () => {
    const count = wizardState.services.size;
    if (count === 1) {
      servicesCountBadge.textContent = '1 servicio seleccionado';
    } else {
      servicesCountBadge.textContent = `${count} servicios seleccionados`;
    }

    if (count > 0) {
      btnToStep2.removeAttribute('disabled');
    } else {
      btnToStep2.setAttribute('disabled', 'true');
    }
  };

  // Step 2: Project Type Selection
  projectTypeCards.forEach(card => {
    card.addEventListener('click', () => {
      projectTypeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      wizardState.projectType = card.getAttribute('data-type');
    });
  });

  // Step 2: Land Status Selection
  landStatusCards.forEach(card => {
    card.addEventListener('click', () => {
      landStatusCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      wizardState.landStatus = card.getAttribute('data-status');
    });
  });

  // Navigation between Wizard steps
  const goToStep = (stepNumber) => {
    wizardState.step = stepNumber;

    // Update Panes
    stepPanes.forEach((pane, idx) => {
      if (idx + 1 === stepNumber) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Update Progress Indicator
    stepIndicators.forEach((indicator, idx) => {
      const stepIdx = idx + 1;
      indicator.classList.remove('active', 'completed');
      if (stepIdx === stepNumber) {
        indicator.classList.add('active');
      } else if (stepIdx < stepNumber) {
        indicator.classList.add('completed');
      }
    });

    // Progress line width
    if (stepNumber === 1) progressFill.style.width = '0%';
    else if (stepNumber === 2) progressFill.style.width = '50%';
    else if (stepNumber === 3) progressFill.style.width = '100%';

    // When reaching Step 3, compile summary and WhatsApp message
    if (stepNumber === 3) {
      compileSummaryAndWhatsApp();
    }
  };

  btnToStep2.addEventListener('click', () => goToStep(2));
  btnBackToStep1.addEventListener('click', () => goToStep(1));
  btnToStep3.addEventListener('click', () => goToStep(3));
  btnBackToStep2.addEventListener('click', () => goToStep(2));

  // Reset Wizard
  btnResetWizard.addEventListener('click', () => {
    wizardState.services.clear();
    serviceItems.forEach(i => i.classList.remove('selected'));
    updateStep1Validation();
    goToStep(1);
  });

  // Compile WhatsApp Message
  const compileSummaryAndWhatsApp = () => {
    const servicesArray = Array.from(wizardState.services);
    const servicesFormatted = servicesArray.join(', ');

    // Fill Summary Card
    summaryServicesList.textContent = servicesFormatted || 'Ninguno seleccionado';
    summaryProjectType.textContent = wizardState.projectType;
    summaryLandStatus.textContent = wizardState.landStatus;

    // Build structured message
    const formattedMessage = 
`Hola INGEMAH, me interesa consultar por: ${servicesFormatted}.
Tipo de proyecto: ${wizardState.projectType}.
Estado: ${wizardState.landStatus}.
Ubicación: Ushuaia, Tierra del Fuego.
¿Podrían brindarme más información y asesoramiento?`;

    // Render Preview in WhatsApp chat bubble
    whatsappPreviewText.textContent = formattedMessage;

    // Time display
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    currentTimeDisplay.textContent = `${hours}:${minutes}`;

    // WhatsApp Direct Link
    // Official WhatsApp format: https://wa.me/5492901411117?text=...
    const whatsappBase = 'https://wa.me/5492901411117';
    const whatsappUrl = `${whatsappBase}?text=${encodeURIComponent(formattedMessage)}`;
    btnSendWhatsapp.setAttribute('href', whatsappUrl);
  };

  /* ------------------------------------------------------------------------
     06. SLIDER DE EJEMPLOS DE SERVICIOS PROFESIONALES (SOBRE NOSOTROS)
     ------------------------------------------------------------------------ */
  const aboutSliderWrapper = document.getElementById('aboutSliderWrapper');
  const slides = document.querySelectorAll('.about-slide');
  const sliderDots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');

  if (slides.length > 0) {
    let currentSlide = 0;
    let sliderInterval = null;
    const SLIDE_DURATION = 4500; // 4.5 segundos por diapositiva

    const goToSlide = (index) => {
      // Normalizar índice circular
      const total = slides.length;
      currentSlide = (index + total) % total;
      const prevIndex = (currentSlide - 1 + total) % total;
      const nextIndex = (currentSlide + 1) % total;

      // Actualizar clases de slides para vista 3D / Coverflow
      slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'next', 'hidden');
        if (i === currentSlide) {
          slide.classList.add('active');
        } else if (i === prevIndex) {
          slide.classList.add('prev');
        } else if (i === nextIndex) {
          slide.classList.add('next');
        } else {
          slide.classList.add('hidden');
        }
      });

      // Actualizar dots
      sliderDots.forEach((dot, i) => {
        if (i === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    // Controles de botones
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Clic en las fotos de fondo (izquierda previa / derecha siguiente) para traerlas al centro
    slides.forEach(slide => {
      slide.addEventListener('click', () => {
        if (slide.classList.contains('prev')) {
          prevSlide();
        } else if (slide.classList.contains('next')) {
          nextSlide();
        }
      });
    });

    // Click en los dots
    sliderDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
        goToSlide(targetIndex);
      });
    });

    // Auto-reproducción con pausa al pasar el mouse
    const startAutoplay = () => {
      stopAutoplay();
      sliderInterval = setInterval(nextSlide, SLIDE_DURATION);
    };

    const stopAutoplay = () => {
      if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
      }
    };

    if (aboutSliderWrapper) {
      aboutSliderWrapper.addEventListener('mouseenter', stopAutoplay);
      aboutSliderWrapper.addEventListener('mouseleave', startAutoplay);

      // Soporte táctil / swipe en celular
      let touchStartX = 0;
      let touchEndX = 0;

      aboutSliderWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
      }, { passive: true });

      aboutSliderWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          nextSlide(); // Deslizar hacia la izquierda -> siguiente
        } else if (touchEndX - touchStartX > 50) {
          prevSlide(); // Deslizar hacia la derecha -> anterior
        }
        startAutoplay();
      }, { passive: true });
    }

    // Inicializar estados 3D (activa centro, previa izquierda, siguiente derecha)
    goToSlide(0);

    // Iniciar auto-play
    startAutoplay();
  }

  /* ------------------------------------------------------------------------
     07. FOOTER CURRENT YEAR AUTO-UPDATE
     ------------------------------------------------------------------------ */
  const yearDisplay = document.getElementById('yearDisplay');
  if (yearDisplay) {
    yearDisplay.textContent = new Date().getFullYear();
  }
});

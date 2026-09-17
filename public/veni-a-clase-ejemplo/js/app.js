/**
 * Vení a Clase — Escuela de Manejo
 * Florencio Varela & Cruce Varela
 * Frontend Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initTrafficLight();
  initWizard();
  initFAQ();
  initFloatingWhatsApp();
  initSmoothScroll();
});

/* ==========================================================================
   1. Header Scroll Behavior (Transparent to Solid Red)
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ==========================================================================
   2. Mobile Navigation Toggle
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close when clicking any nav item
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', false);
    });
  });
}

/* ==========================================================================
   3. Interactive Traffic Light (Scroll-Linked & Clickable)
   ========================================================================== */
function initTrafficLight() {
  const section = document.getElementById('semaforo-interactivo');
  const wrapper = document.querySelector('.traffic-light-wrapper');
  const titleEl = document.getElementById('trafficStepTitle');
  const descEl = document.getElementById('trafficStepDesc');
  const indicatorEl = document.getElementById('trafficStepIndicator');
  const pillBtns = document.querySelectorAll('.traffic-pill-btn');

  if (!section || !wrapper || !titleEl || !descEl || !indicatorEl) return;

  // Content states definition
  const trafficStates = {
    red: {
      badge: 'Pará • Primer Paso',
      title: '1. Pará la ansiedad: Te acompañamos desde cero',
      desc: 'Es normal tener nervios al principio. En Vení a Clase te brindamos paciencia absoluta y contención profesional para que sientas seguridad antes de poner primera.'
    },
    yellow: {
      badge: 'Esperá • Preparación',
      title: '2. Preparate a tu ritmo: Práctica real y doble comando',
      desc: 'Avanzás progresivamente en tránsito real, estacionamiento y maniobras con nuestros vehículos de doble comando donde el instructor tiene control de seguridad.'
    },
    green: {
      badge: 'Avanzá • Camino al Registro',
      title: '3. ¡Dale, arrancamos! Tu examen con éxito garantizado',
      desc: 'Llegás al examen municipal con la confianza que necesitás. Te acompañamos a la pista oficial con el mismo auto con el que practicaste para sacar tu registro.'
    }
  };

  let currentState = 'red';
  let manualOverride = false;
  let manualResetTimer = null;

  function setTrafficState(state) {
    if (!trafficStates[state] || currentState === state) return;
    currentState = state;

    // Update wrapper class
    wrapper.classList.remove('state-red', 'state-yellow', 'state-green');
    wrapper.classList.add(`state-${state}`);

    // Update indicator and texts with smooth fade
    titleEl.style.opacity = '0';
    descEl.style.opacity = '0';

    setTimeout(() => {
      indicatorEl.textContent = trafficStates[state].badge;
      titleEl.textContent = trafficStates[state].title;
      descEl.textContent = trafficStates[state].desc;
      titleEl.style.opacity = '1';
      descEl.style.opacity = '1';
    }, 150);

    // Update active pill button
    pillBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.state === state);
    });
  }

  // Allow clicking on state pills
  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetState = btn.dataset.state;
      setTrafficState(targetState);
      manualOverride = true;
      clearTimeout(manualResetTimer);
      // Re-enable scroll sync after 5 seconds of inactivity
      manualResetTimer = setTimeout(() => {
        manualOverride = false;
      }, 5000);
    });
  });

  // Scroll Progress calculation
  function onScrollTraffic() {
    if (manualOverride) return;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if section is in viewport
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      // Calculate progress (0.0 when top enters bottom of screen, 1.0 when bottom leaves top)
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);

      if (progress < 0.42) {
        setTrafficState('red');
      } else if (progress < 0.68) {
        setTrafficState('yellow');
      } else {
        setTrafficState('green');
      }
    }
  }

  window.addEventListener('scroll', onScrollTraffic, { passive: true });
  // Initial run
  wrapper.classList.add('state-red');
  onScrollTraffic();
}

/* ==========================================================================
   4. Consultation Wizard (WhatsApp Asistente Inteligente)
   ========================================================================== */
function initWizard() {
  const wizardForm = document.getElementById('wizardConsultation');
  if (!wizardForm) return;

  // Branch data
  const branchesData = {
    central: {
      name: 'Florencio Varela (Casa Central - Monteagudo 2788)',
      shortName: 'Florencio Varela (Casa Central)',
      phone: '541127094981',
      displayPhone: '11 2709-4981'
    },
    cruce: {
      name: 'Cruce Varela (Finochietto 2284)',
      shortName: 'Cruce Varela',
      phone: '541178294489',
      displayPhone: '11 7829-4489'
    }
  };

  // Levels mapping
  const levelsData = {
    principiante: 'Nunca manejé / soy principiante',
    practica: 'Ya manejé algo, pero necesito practicar',
    perfeccionar: 'Sé manejar, quiero perfeccionar antes del examen',
    repaso_examen: 'Ya tengo turno para el examen, quiero un repaso final'
  };

  // Wizard State
  const state = {
    step: 1,
    sucursal: 'central',
    nivel: 'principiante',
    nombre: ''
  };

  // DOM Elements
  const panes = document.querySelectorAll('.wizard-step-pane');
  const tabs = document.querySelectorAll('.wizard-step-tab');
  const progressFill = document.getElementById('wizardProgressFill');
  const btnNext = document.getElementById('btnWizardNext');
  const btnBack = document.getElementById('btnWizardBack');
  const btnSubmit = document.getElementById('btnWizardSubmit');
  const previewText = document.getElementById('wizardPreviewMsg');
  const inputNombre = document.getElementById('wizardNombre');
  const targetBranchBadge = document.getElementById('wizardTargetBranch');

  // Option selection logic (Step 1 & Step 2)
  document.querySelectorAll('.wizard-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type; // 'sucursal' or 'nivel'
      const val = card.dataset.value;

      if (type === 'sucursal') {
        state.sucursal = val;
        document.querySelectorAll('.wizard-option-card[data-type="sucursal"]').forEach(c => {
          c.classList.toggle('selected', c.dataset.value === val);
        });
      } else if (type === 'nivel') {
        state.nivel = val;
        document.querySelectorAll('.wizard-option-card[data-type="nivel"]').forEach(c => {
          c.classList.toggle('selected', c.dataset.value === val);
        });
      }

      updatePreview();
    });
  });

  // Name input listener
  if (inputNombre) {
    inputNombre.addEventListener('input', (e) => {
      state.nombre = e.target.value.trim();
      updatePreview();
    });
  }

  // Tab clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetStep = parseInt(tab.dataset.step, 10);
      goToStep(targetStep);
    });
  });

  // Next and Back buttons
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (state.step < 3) {
        goToStep(state.step + 1);
      }
    });
  }

  if (btnBack) {
    btnBack.addEventListener('click', () => {
      if (state.step > 1) {
        goToStep(state.step - 1);
      }
    });
  }

  function goToStep(stepNum) {
    state.step = stepNum;

    // Panes
    panes.forEach(p => {
      p.classList.toggle('active', parseInt(p.dataset.pane, 10) === stepNum);
    });

    // Tabs
    tabs.forEach(t => {
      const s = parseInt(t.dataset.step, 10);
      t.classList.toggle('active', s === stepNum);
      t.classList.toggle('completed', s < stepNum);
    });

    // Progress bar width
    if (progressFill) {
      const percentage = (stepNum / 3) * 100;
      progressFill.style.width = `${percentage}%`;
    }

    // Buttons visibility
    if (btnBack) {
      btnBack.style.visibility = stepNum === 1 ? 'hidden' : 'visible';
    }

    if (btnNext && btnSubmit) {
      if (stepNum === 3) {
        btnNext.style.display = 'none';
        btnSubmit.style.display = 'inline-flex';
      } else {
        btnNext.style.display = 'inline-flex';
        btnSubmit.style.display = 'none';
      }
    }

    updatePreview();
  }

  // Update dynamic preview message & WhatsApp link
  function updatePreview() {
    const branch = branchesData[state.sucursal] || branchesData.central;
    const levelText = levelsData[state.nivel] || levelsData.principiante;
    const greeting = state.nombre 
      ? `Hola Vení a Clase, soy ${state.nombre}. Mi nivel actual es: ${levelText}.`
      : `Hola Vení a Clase, mi nivel actual es: ${levelText}.`;

    const message = `${greeting} Me gustaría recibir información sobre las clases en la sucursal ${branch.name}.`;

    if (previewText) {
      previewText.textContent = `"${message}"`;
    }

    if (targetBranchBadge) {
      targetBranchBadge.textContent = `Destino: ${branch.shortName} (WhatsApp ${branch.displayPhone})`;
    }

    // Direct WhatsApp Link
    if (btnSubmit) {
      const waUrl = `https://wa.me/${branch.phone}?text=${encodeURIComponent(message)}`;
      btnSubmit.setAttribute('href', waUrl);
    }
  }

  // Initial step setup
  goToStep(1);
}

/* ==========================================================================
   5. FAQ Accordion
   ========================================================================== */
function initFAQ() {
  const faqButtons = document.querySelectorAll('.faq-question-btn');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // Toggle current
      item.classList.toggle('active', !isOpen);
    });
  });
}

/* ==========================================================================
   6. Floating WhatsApp Widget & Popover
   ========================================================================== */
function initFloatingWhatsApp() {
  const toggleBtn = document.querySelector('.floating-whatsapp-btn');
  const popover = document.querySelector('.floating-whatsapp-popover');

  if (!toggleBtn || !popover) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && !toggleBtn.contains(e.target)) {
      popover.classList.remove('active');
    }
  });
}

/* ==========================================================================
   7. Smooth Scroll for Internal Anchor Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

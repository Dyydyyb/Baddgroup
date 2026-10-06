/**
 * BRICEÑO REALTY GROUP - APPLICATION ENGINE
 * Asesoría Patrimonial & Inversiones Inmobiliarias Internacionales
 * Frontend Senior Controller: Parallax, Slide-over Drawer, Counters, Wizard & Dispatch
 */

(function () {
  'use strict';

  // SVG Icon Dictionary for Market Advantages
  const SVG_ICONS = {
    dollar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    passport: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><circle cx="12" cy="11" r="3"></circle><path d="M8 17a4 4 0 0 1 8 0"></path></svg>`,
    shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    building: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="9" y1="6" x2="9" y2="6.01"></line><line x1="15" y1="6" x2="15" y2="6.01"></line><line x1="9" y1="10" x2="9" y2="10.01"></line><line x1="15" y1="10" x2="15" y2="10.01"></line><line x1="9" y1="14" x2="9" y2="14.01"></line><line x1="15" y1="14" x2="15" y2="14.01"></line></svg>`,
    plane: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"></path></svg>`,
    vault: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="12" x2="15" y2="15"></line></svg>`,
    sun: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    key: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>`,
    scale: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>`,
    trend: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    bank: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 10-5 10 5v2H2z"></path><path d="M4 9v10"></path><path d="M9 9v10"></path><path d="M15 9v10"></path><path d="M20 9v10"></path><path d="M2 19h20v2H2z"></path></svg>`
  };

  // Main Application State
  const AppState = {
    currentMarketId: null,
    carouselSlide: 0,
    carouselTotal: 0,
    theme: 'dark',
    testimonials: {
      currentIndex: 0,
      totalSlides: 5,
      autoPlayTimer: null
    },
    wizard: {
      currentStep: 1,
      totalSteps: 5,
      selectedMarkets: ['Dubái (EAU)'],
      selectedObjective: 'Renta pasiva',
      selectedRange: 'USD 100.000 a 250.000',
      selectedHorizon: 'Mediano plazo (3 a 7 años)',
      userName: '',
      userEmail: '',
      userPhone: '',
      generatedMessage: ''
    }
  };

  // Exposed Global App Controller
  window.App = {
    // -------------------------------------------------------------
    // 1. HEADER & PARALLAX CONTROLLER
    // -------------------------------------------------------------
    initHeaderAndParallax: function () {
      const header = document.getElementById('siteHeader');
      const parallaxElements = document.querySelectorAll('.market-bg-parallax');

      const handleScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        // Header solid transition
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        // Parallax update
        parallaxElements.forEach((el) => {
          const parent = el.parentElement;
          const rect = parent.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight && rect.bottom > 0) {
            // Element is visible
            const speed = 0.25;
            const yOffset = (rect.top - windowHeight / 2) * speed;
            el.style.transform = `translate3d(0, ${yOffset}px, 0)`;
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    },

    // -------------------------------------------------------------
    // 2. SCROLL REVEAL OBSERVER
    // -------------------------------------------------------------
    initScrollReveal: function () {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              
              // If this entry has number counters inside, trigger them
              const counters = entry.target.querySelectorAll('[data-counter]');
              counters.forEach((cnt) => App.animateCounter(cnt));
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );

      revealElements.forEach((el) => observer.observe(el));
    },

    // -------------------------------------------------------------
    // 3. ANIMATED NUMBER COUNTERS
    // -------------------------------------------------------------
    animateCounter: function (el) {
      if (el.dataset.animated === 'true') return;
      el.dataset.animated = 'true';

      const targetValue = parseFloat(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const isDecimal = targetValue % 1 !== 0;
      const duration = 1400; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = targetValue * ease;

        let formatted = '';
        if (isDecimal) {
          formatted = current.toFixed(1);
        } else {
          formatted = Math.round(current).toLocaleString('de-DE');
        }

        el.textContent = `${prefix}${formatted}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          let finalFormatted = isDecimal ? targetValue.toFixed(1) : targetValue.toLocaleString('de-DE');
          el.textContent = `${prefix}${finalFormatted}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    },

    // -------------------------------------------------------------
    // 4. MARKET DETAIL SLIDE-OVER DRAWER
    // -------------------------------------------------------------
    openMarketDrawer: function (marketId) {
      const market = BRICENO_MARKETS_DATA[marketId];
      if (!market) return;

      AppState.currentMarketId = marketId;

      // Populate Title & Flag
      document.getElementById('drawerTitle').textContent = market.name;
      document.getElementById('drawerFlagWrap').innerHTML = market.flagSvg;

      // Populate Hero Banner
      const heroImg = document.getElementById('drawerHeroImg');
      heroImg.src = market.heroImage;
      heroImg.alt = `Inversión inmobiliaria en ${market.name}`;
      document.getElementById('drawerTagline').textContent = market.tagline;

      // Populate Overview
      document.getElementById('drawerOverview').textContent = market.overview;

      // Populate Key Metrics with animated counters
      const metricsGrid = document.getElementById('drawerMetricsGrid');
      metricsGrid.innerHTML = market.metrics
        .map(
          (m) => `
        <div class="metric-card">
          <div class="metric-card-label">${m.label}</div>
          <div class="metric-card-val" data-drawer-counter="${m.value}" data-suffix="${m.suffix}" data-prefix="${m.key === 'priceM2' ? 'USD ' : ''}">0</div>
          <div class="metric-card-desc">${m.desc}</div>
        </div>
      `
        )
        .join('');

      // Populate Advantages with gold SVG icons
      const advantagesGrid = document.getElementById('drawerAdvantagesGrid');
      advantagesGrid.innerHTML = market.advantages
        .map(
          (adv) => `
        <div class="advantage-card">
          <div class="advantage-icon-wrap">
            ${SVG_ICONS[adv.icon] || SVG_ICONS.shield}
          </div>
          <div class="advantage-title">${adv.title}</div>
          <div class="advantage-desc">${adv.desc}</div>
        </div>
      `
        )
        .join('');

      // Populate Property Types
      const propertyList = document.getElementById('drawerPropertyTypesList');
      propertyList.innerHTML = market.propertyTypes
        .map(
          (pt) => `
        <div class="property-type-item">
          <div class="property-type-info">
            <h4>${pt.name}</h4>
            <p>${pt.desc}</p>
          </div>
          <div class="property-type-badge-wrap">
            <div class="property-type-price">${pt.range}</div>
            <span class="property-type-badge">${pt.badge}</span>
          </div>
        </div>
      `
        )
        .join('');

      // Populate Carousel
      AppState.carouselSlide = 0;
      AppState.carouselTotal = market.gallery.length;
      const carouselTrack = document.getElementById('drawerCarouselTrack');
      carouselTrack.innerHTML = market.gallery
        .map(
          (item) => `
        <div class="drawer-carousel-slide">
          <img src="${item.src}" alt="${item.caption}" class="drawer-carousel-img">
          <div class="drawer-carousel-caption">${item.caption}</div>
        </div>
      `
        )
        .join('');
      carouselTrack.style.transform = `translateX(0%)`;

      // Set CTA Button
      const btnInvest = document.getElementById('btnDrawerInvestAction');
      btnInvest.dataset.marketId = market.id;
      document.getElementById('btnDrawerInvestLabel').textContent = `Quiero invertir en ${market.name}`;

      // Open Backdrop & Prevent Body Scrolling
      const backdrop = document.getElementById('marketDrawerBackdrop');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Trigger drawer counters with a slight reveal delay
      setTimeout(() => {
        const drawerCounters = metricsGrid.querySelectorAll('[data-drawer-counter]');
        drawerCounters.forEach((cnt) => {
          const targetValue = parseFloat(cnt.dataset.drawerCounter);
          const prefix = cnt.dataset.prefix || '';
          const suffix = cnt.dataset.suffix || '';
          const isDecimal = targetValue % 1 !== 0;
          const duration = 1200;
          const start = performance.now();

          function run(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const val = targetValue * ease;
            const text = isDecimal ? val.toFixed(1) : Math.round(val).toLocaleString('de-DE');
            cnt.textContent = `${prefix}${text}${suffix}`;
            if (progress < 1) requestAnimationFrame(run);
            else cnt.textContent = `${prefix}${isDecimal ? targetValue.toFixed(1) : targetValue.toLocaleString('de-DE')}${suffix}`;
          }
          requestAnimationFrame(run);
        });
      }, 300);
    },

    closeMarketDrawer: function () {
      const backdrop = document.getElementById('marketDrawerBackdrop');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      AppState.currentMarketId = null;
    },

    handleBackdropClick: function (e) {
      if (e.target.id === 'marketDrawerBackdrop') {
        App.closeMarketDrawer();
      }
    },

    // -------------------------------------------------------------
    // 5. CAROUSEL NAVIGATION
    // -------------------------------------------------------------
    nextCarouselSlide: function () {
      if (AppState.carouselTotal <= 1) return;
      AppState.carouselSlide = (AppState.carouselSlide + 1) % AppState.carouselTotal;
      const track = document.getElementById('drawerCarouselTrack');
      track.style.transform = `translateX(-${AppState.carouselSlide * 100}%)`;
    },

    prevCarouselSlide: function () {
      if (AppState.carouselTotal <= 1) return;
      AppState.carouselSlide = (AppState.carouselSlide - 1 + AppState.carouselTotal) % AppState.carouselTotal;
      const track = document.getElementById('drawerCarouselTrack');
      track.style.transform = `translateX(-${AppState.carouselSlide * 100}%)`;
    },

    // -------------------------------------------------------------
    // 6. CONNECT DRAWER CTA DIRECTLY TO WIZARD PRE-SELECTION
    // -------------------------------------------------------------
    selectMarketAndOpenWizard: function (marketId) {
      // Map id to clean name
      const mapNames = {
        panama: 'Panamá',
        'dom-rep': 'República Dominicana',
        florida: 'Estados Unidos (Florida)',
        dubai: 'Dubái (EAU)'
      };
      const marketName = mapNames[marketId] || 'Dubái (EAU)';

      // Select that market in Step 1
      const marketCards = document.querySelectorAll('.wizard-choice-card[data-group="markets"]');
      marketCards.forEach((card) => {
        if (card.dataset.value === marketName) {
          card.classList.add('selected');
        } else {
          card.classList.remove('selected');
        }
      });
      AppState.wizard.selectedMarkets = [marketName];

      // Close drawer
      App.closeMarketDrawer();

      // Go to Step 1 of wizard and smooth scroll
      App.goToStep(1);
      const wizardSection = document.getElementById('asesoria');
      if (wizardSection) {
        wizardSection.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // -------------------------------------------------------------
    // 7. WIZARD INTERACTIVITY & STEP ENGINE
    // -------------------------------------------------------------
    toggleWizardCard: function (card) {
      card.classList.toggle('selected');
      const val = card.dataset.value;
      const index = AppState.wizard.selectedMarkets.indexOf(val);

      if (card.classList.contains('selected')) {
        if (index === -1) AppState.wizard.selectedMarkets.push(val);
      } else {
        if (index > -1) AppState.wizard.selectedMarkets.splice(index, 1);
      }
    },

    selectSingleCard: function (card) {
      const group = card.dataset.group;
      const container = card.closest('.wizard-cards-grid');
      const cards = container.querySelectorAll(`[data-group="${group}"]`);

      cards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');

      const val = card.dataset.value;
      if (group === 'objective') AppState.wizard.selectedObjective = val;
      if (group === 'range') AppState.wizard.selectedRange = val;
      if (group === 'horizon') AppState.wizard.selectedHorizon = val;
    },

    nextWizardStep: function () {
      const current = AppState.wizard.currentStep;

      // Validation for Step 1: At least 1 market selected
      if (current === 1) {
        if (AppState.wizard.selectedMarkets.length === 0) {
          App.showToast('Por favor seleccioná al menos un mercado de interés.');
          return;
        }
      }

      if (current < AppState.wizard.totalSteps) {
        App.goToStep(current + 1);
      }
    },

    prevWizardStep: function () {
      const current = AppState.wizard.currentStep;
      if (current > 1) {
        App.goToStep(current - 1);
      }
    },

    goToStep: function (stepNum) {
      AppState.wizard.currentStep = stepNum;

      // Hide all panes
      for (let i = 1; i <= 5; i++) {
        const pane = document.getElementById(`wizardStep${i}`);
        if (pane) pane.classList.remove('active');
      }
      const summaryPane = document.getElementById('wizardSummaryPane');
      if (summaryPane) summaryPane.classList.remove('active');

      // Show targeted pane
      if (stepNum <= 5) {
        const targetPane = document.getElementById(`wizardStep${stepNum}`);
        if (targetPane) targetPane.classList.add('active');
      } else {
        if (summaryPane) summaryPane.classList.add('active');
      }

      // Update progress bar
      const percent = Math.min((stepNum / 5) * 100, 100);
      const bar = document.getElementById('wizardProgressBar');
      if (bar) bar.style.width = `${percent}%`;

      // Update step nodes indicator
      const stepNodes = document.querySelectorAll('.wizard-step-node');
      stepNodes.forEach((node) => {
        const nodeStep = parseInt(node.dataset.step, 10);
        node.classList.remove('active', 'completed');
        if (nodeStep === stepNum) {
          node.classList.add('active');
        } else if (nodeStep < stepNum) {
          node.classList.add('completed');
        }
      });
    },

    // -------------------------------------------------------------
    // 8. GENERATE PERSONALIZED SUMMARY MESSAGE & DISPATCH CHANNELS
    // -------------------------------------------------------------
    generatePersonalizedSummary: function () {
      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const phoneInput = document.getElementById('userPhone');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();

      if (!name || !email) {
        App.showToast('Por favor completá tu nombre y correo electrónico.');
        return;
      }

      AppState.wizard.userName = name;
      AppState.wizard.userEmail = email;
      AppState.wizard.userPhone = phone;

      const marketsText = AppState.wizard.selectedMarkets.join(', ');
      const objectiveText = AppState.wizard.selectedObjective;
      const rangeText = AppState.wizard.selectedRange;
      const horizonText = AppState.wizard.selectedHorizon;

      // Exact structured message as specified by user
      const message = `Hola Briceño Realty Group, soy ${name}. Me interesa invertir en: ${marketsText}. Objetivo: ${objectiveText}. Rango de inversión: ${rangeText}. Horizonte: ${horizonText}. Me gustaría agendar una asesoría.`;
      AppState.wizard.generatedMessage = message;

      // Update Display in Summary Card
      const messageOutput = document.getElementById('summaryMessageOutput');
      messageOutput.textContent = message;

      // WhatsApp Button Configuration exclusively (Number: +1 617 515 5518)
      const encodedMsg = encodeURIComponent(message);
      const waBtn = document.getElementById('btnSendWhatsApp');
      if (waBtn) {
        waBtn.href = `https://wa.me/16175155518?text=${encodedMsg}`;
      }

      // -------------------------------------------------------------
      // AUTOMATIC LEAD REGISTRATION IN CRM
      // -------------------------------------------------------------
      const newLead = {
        id: `LEAD-${Date.now().toString().slice(-4)}`,
        name: name,
        email: email,
        phone: phone || 'No provisto',
        market: marketsText || 'Multi-mercado',
        investment_range: rangeText || 'Por definir',
        objective: objectiveText || 'Asesoría general',
        horizon: horizonText || 'A coordinar',
        status: 'Nuevo',
        source: 'Asistente Web',
        notes: `Consulta estructurada desde la web: "${message}"`,
        created_at: new Date().toISOString()
      };

      // 1. Save to client localStorage
      try {
        const stored = localStorage.getItem('briceno_leads');
        const leads = stored ? JSON.parse(stored) : [];
        leads.unshift(newLead);
        localStorage.setItem('briceno_leads', JSON.stringify(leads));
      } catch (e) {
        console.warn('Error saving to localStorage:', e);
      }

      // 2. Persist to API backend (serve.js & Vercel)
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      }).catch((err) => {
        console.warn('Error sending lead to /api/leads:', err);
      });

      // Show Summary Pane
      App.goToStep(6);
    },

    copySummaryMessage: function () {
      const msg = AppState.wizard.generatedMessage;
      if (!msg) return;

      navigator.clipboard
        .writeText(msg)
        .then(() => {
          App.showToast('Mensaje copiado al portapapeles con éxito');
          const btnLabel = document.getElementById('btnCopyLabel');
          if (btnLabel) {
            btnLabel.textContent = '¡Copiado!';
            setTimeout(() => {
              btnLabel.textContent = 'Copiar Mensaje';
            }, 2500);
          }
        })
        .catch(() => {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = msg;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          App.showToast('Mensaje copiado al portapapeles con éxito');
        });
    },

    // -------------------------------------------------------------
    // 9. TOAST NOTIFICATION
    // -------------------------------------------------------------
    showToast: function (text) {
      const toast = document.getElementById('toastNotice');
      const msg = document.getElementById('toastMessage');
      if (!toast || !msg) return;

      msg.textContent = text;
      toast.classList.add('show');

      clearTimeout(this._toastTimeout);
      this._toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    },

    // -------------------------------------------------------------
    // 10. THEME CONTROLLER (MODO CLARO / MODO OSCURO)
    // -------------------------------------------------------------
    initTheme: function () {
      let saved = 'dark';
      try {
        saved = localStorage.getItem('briceno_theme') || 'dark';
      } catch (e) {}
      App.applyTheme(saved);
    },

    applyTheme: function (theme) {
      const isLight = theme === 'light';
      AppState.theme = theme;

      const html = document.documentElement;
      const body = document.body;

      if (isLight) {
        html.classList.add('theme-light');
        html.setAttribute('data-theme', 'light');
        if (body) {
          body.classList.add('theme-light');
          body.setAttribute('data-theme', 'light');
        }
      } else {
        html.classList.remove('theme-light');
        html.setAttribute('data-theme', 'dark');
        if (body) {
          body.classList.remove('theme-light');
          body.setAttribute('data-theme', 'dark');
        }
      }

      const label = document.getElementById('themeToggleText');
      if (label) {
        label.textContent = isLight ? 'Modo Oscuro' : 'Modo Claro';
      }

      try {
        localStorage.setItem('briceno_theme', theme);
      } catch (e) {}
    },

    toggleTheme: function () {
      const current = AppState.theme || (document.documentElement.classList.contains('theme-light') ? 'light' : 'dark');
      const next = current === 'light' ? 'dark' : 'light';
      App.applyTheme(next);
      App.showToast('Modo ' + (next === 'light' ? 'Claro' : 'Oscuro') + ' activado');
    },

    // -------------------------------------------------------------
    // 11. TESTIMONIAL SLIDER CONTROLLER
    // -------------------------------------------------------------
    initTestimonialSlider: function () {
      const track = document.getElementById('testimonialsTrack');
      const viewport = document.getElementById('testimonialsViewport');
      if (!track || !viewport) return;

      const cards = track.querySelectorAll('.testimonial-card');
      AppState.testimonials.totalSlides = cards.length || 5;
      AppState.testimonials.currentIndex = 0;

      // Update on window resize
      window.addEventListener('resize', () => {
        App.updateTestimonialSlider();
      });

      // Pause on hover
      viewport.addEventListener('mouseenter', () => {
        App.stopTestimonialAutoplay();
      });
      viewport.addEventListener('mouseleave', () => {
        App.startTestimonialAutoplay();
      });

      // Touch / pointer swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      viewport.addEventListener('touchstart', (e) => {
        App.stopTestimonialAutoplay();
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
          if (diff > 0) {
            App.nextTestimonial();
          } else {
            App.prevTestimonial();
          }
        }
        App.startTestimonialAutoplay();
      }, { passive: true });

      App.updateTestimonialSlider();
      App.startTestimonialAutoplay();
    },

    startTestimonialAutoplay: function () {
      App.stopTestimonialAutoplay();
      AppState.testimonials.autoPlayTimer = setInterval(() => {
        App.nextTestimonial();
      }, 5500);
    },

    stopTestimonialAutoplay: function () {
      if (AppState.testimonials.autoPlayTimer) {
        clearInterval(AppState.testimonials.autoPlayTimer);
        AppState.testimonials.autoPlayTimer = null;
      }
    },

    updateTestimonialSlider: function () {
      const track = document.getElementById('testimonialsTrack');
      const viewport = document.getElementById('testimonialsViewport');
      if (!track || !viewport) return;

      const cards = track.querySelectorAll('.testimonial-card');
      if (!cards.length) return;

      const card = cards[0];
      const gap = 24;
      const cardWidth = card.offsetWidth + gap;
      const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);

      let offset = AppState.testimonials.currentIndex * cardWidth;
      if (offset > maxOffset) {
        offset = maxOffset;
      }

      track.style.transform = `translate3d(-${offset}px, 0, 0)`;

      // Update dots
      const dots = document.querySelectorAll('#testimonialsDots .testimonial-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === AppState.testimonials.currentIndex);
      });
    },

    nextTestimonial: function () {
      const total = AppState.testimonials.totalSlides || 5;
      AppState.testimonials.currentIndex = (AppState.testimonials.currentIndex + 1) % total;
      App.updateTestimonialSlider();
    },

    prevTestimonial: function () {
      const total = AppState.testimonials.totalSlides || 5;
      AppState.testimonials.currentIndex = (AppState.testimonials.currentIndex - 1 + total) % total;
      App.updateTestimonialSlider();
    },

    goToTestimonial: function (index) {
      AppState.testimonials.currentIndex = index;
      App.updateTestimonialSlider();
    },

    // -------------------------------------------------------------
    // 12. GLOBAL KEYBOARD & RESIZE LISTENERS
    // -------------------------------------------------------------
    initGlobalListeners: function () {
      // Escape key closes market drawer
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.keyCode === 27) {
          App.closeMarketDrawer();
        }
      });

      // Mobile Menu Toggle
      const toggle = document.getElementById('mobileMenuToggle');
      const nav = document.getElementById('headerNav');
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          const isOpen = nav.style.display === 'flex';
          nav.style.display = isOpen ? 'none' : 'flex';
          nav.style.flexDirection = 'column';
          nav.style.position = 'absolute';
          nav.style.top = '100%';
          nav.style.left = '0';
          nav.style.width = '100%';
          nav.style.background = '#070707';
          nav.style.padding = '24px';
          nav.style.borderBottom = '1px solid var(--gold-border)';
          toggle.setAttribute('aria-expanded', !isOpen);
        });

        // Close on nav link click
        nav.querySelectorAll('.nav-link').forEach((link) => {
          link.addEventListener('click', () => {
            if (window.innerWidth <= 1040) {
              nav.style.display = 'none';
              toggle.setAttribute('aria-expanded', 'false');
            }
          });
        });
      }

      // Smooth scrolling for hash links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    },

    // -------------------------------------------------------------
    // 13. BOOTSTRAP
    // -------------------------------------------------------------
    init: function () {
      App.initHeaderAndParallax();
      App.initScrollReveal();
      App.initTheme();
      App.initTestimonialSlider();
      App.initGlobalListeners();

      // Ensure hero video autoplays seamlessly on desktop and mobile
      const video = document.getElementById('heroVideo');
      if (video) {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        const triggerPlay = () => {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              video.muted = true;
              video.play().catch(() => {});
            });
          }
        };

        triggerPlay();

        // Resume playback if tab becomes visible
        document.addEventListener('visibilitychange', () => {
          if (!document.hidden && video.paused) {
            triggerPlay();
          }
        });

        // Fallback for mobile devices in low-power mode or requiring initial touch
        const onFirstInteraction = () => {
          if (video.paused) {
            triggerPlay();
          }
          ['touchstart', 'pointerdown', 'scroll', 'click'].forEach((evt) => {
            window.removeEventListener(evt, onFirstInteraction, { passive: true });
          });
        };
        ['touchstart', 'pointerdown', 'scroll', 'click'].forEach((evt) => {
          window.addEventListener(evt, onFirstInteraction, { passive: true, once: true });
        });
      }
    }
  };

  // DOM Content Loaded Execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', App.init);
  } else {
    App.init();
  }
})();

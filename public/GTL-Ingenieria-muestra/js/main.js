/**
 * GTL Ingeniería Eléctrica — Main JavaScript
 * Control de Header, Navegación, Menú Móvil y Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initHeaderScroll();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
  initChecklistTriggers();
});

function initHeroVideo() {
  const video = document.querySelector('.hero-video');
  if (!video) return;
  video.muted = true;
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      const playOnInteraction = () => {
        video.play();
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
      };
      document.addEventListener('click', playOnInteraction);
      document.addEventListener('touchstart', playOnInteraction);
    });
  }
}

/**
 * 1. Transición del Header de transparente a sólido azul marino al hacer scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Ejecución inicial
}

/**
 * 2. Menú de navegación responsive para dispositivos móviles
 */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!menuBtn || !drawer || !overlay) return;

  const openMenu = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * 3. Scroll Reveal Animations (Intersection Observer)
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback para navegadores antiguos
    reveals.forEach((el) => el.classList.add('active'));
  }
}

/**
 * 4. Navegación con scroll suave compensando la altura del header fijo
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 5. Conexión de la sección "¿Cuándo necesitás un ingeniero?" con el Asistente Wizard
 * Al hacer clic en un caso (ej: "Si querés instalar paneles solares"), preselecciona ese servicio en el wizard y hace scroll suave
 */
function initChecklistTriggers() {
  const checklistCards = document.querySelectorAll('.when-card[data-service]');
  if (!checklistCards.length) return;

  checklistCards.forEach((card) => {
    card.addEventListener('click', () => {
      const serviceId = card.getAttribute('data-service');
      if (window.preselectWizardService) {
        window.preselectWizardService(serviceId);
      }

      // Scroll suave hacia la sección del wizard
      const wizardSection = document.getElementById('cotizador');
      if (wizardSection) {
        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPos = wizardSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}

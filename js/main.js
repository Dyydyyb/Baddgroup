// ==========================================================================
// PORTFOLIO DYLAN BANEGAS — LÓGICA PRINCIPAL & INTERACCIONES
// ==========================================================================

import { projectsData } from './projects-data.js';

// Configuración de Contacto Rápido
const CONTACT_CONFIG = {
  name: "Dylan Banegas",
  whatsappNumber: "5491156466567", // Número para consultas directas
  email: "banegasdylan1109@gmail.com",
  linkedin: "https://www.linkedin.com/in/dylan-banegas-aguilar/",
  github: "https://github.com/Dyydyyb"
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeader();
  renderProjects('all');
  initProjectFilters();
  initFaqAccordion();
  initContactForm();
  initEmailCopy();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
});

// --------------------------------------------------------------------------
// 1. Selector de Tema (Petróleo / Forest / Terracota)
// --------------------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem('dylan_portfolio_theme') || 'petrol';
  applyTheme(savedTheme);

  const themeButtons = document.querySelectorAll('.theme-option-btn');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-set-theme');
      applyTheme(theme);
    });
  });
}

function applyTheme(theme) {
  if (theme === 'petrol') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('dylan_portfolio_theme', theme);

  // Actualizar indicador visual si existe
  const currentIndicator = document.getElementById('current-theme-name');
  if (currentIndicator) {
    const names = {
      petrol: 'Azul Petróleo',
      forest: 'Verde Botella',
      terracotta: 'Terracota'
    };
    currentIndicator.textContent = names[theme] || 'Azul Petróleo';
  }
}

// --------------------------------------------------------------------------
// 2. Header & Scroll Behavior
// --------------------------------------------------------------------------
function initHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveNavLink();
  });
}

function highlightActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 120;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
}

// --------------------------------------------------------------------------
// 3. Renderizado & Filtrado de Proyectos
// --------------------------------------------------------------------------
function renderProjects(category = 'all') {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = category === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  container.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);

    const tagsHtml = project.tags
      .map(tag => `<span class="project-tag">${tag}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-media">
        <span class="project-category-badge">${project.category === 'software' ? 'Software / CRM' : 'Sitio Web'}</span>
        <img src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='img/sitiocel-dashboard.png'">
      </div>
      <div class="project-body">
        <div class="project-client">${project.client}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-impact">
          <strong>Resultado clave:</strong> ${project.impact}
        </div>
        <div class="project-tags">
          ${tagsHtml}
        </div>
        <div class="project-footer">
          <button type="button" class="btn btn-secondary btn-view-project" data-id="${project.id}">
            Ver detalles del caso
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a href="https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hola%20Dylan,%20vi%20tu%20proyecto%20de%20${encodeURIComponent(project.title)}%20y%20me%20gustaría%20consultarte%20por%20algo%20similar" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-whatsapp" 
             style="padding: 8px 14px; font-size: 0.8125rem;">
            Consultar por algo similar
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Tarjeta de llamado a la acción final
  const customCard = document.createElement('article');
  customCard.className = 'project-card-custom';
  customCard.innerHTML = `
    <div style="font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #10B981; margin-bottom: 12px;">
      ✦ PRÓXIMO DESARROLLO
    </div>
    <h3>¿Tenés un proyecto o necesidad en tu negocio?</h3>
    <p>Diseñemos juntos la solución tecnológica exacta: una web que venda todos los días o un sistema que elimine planillas desordenadas y te ahorre horas de trabajo.</p>
    <a href="#contacto" class="btn btn-primary" style="background-color: #FFFFFF; color: #111827; border: none;">
      Hablemos de tu idea
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  `;
  container.appendChild(customCard);

  // Vincular eventos de modal
  document.querySelectorAll('.btn-view-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openProjectModal(id);
    });
  });

  // Inicializar o refrescar el Slider de Proyectos
  setupProjectSlider();
}

// Estado del Slider
let currentSlideIndex = 0;
let maxSlideIndex = 0;

function setupProjectSlider() {
  const track = document.getElementById('projects-container');
  const trackContainer = document.getElementById('slider-track-container');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const pagination = document.getElementById('slider-pagination');
  if (!track || !trackContainer) return;

  const cards = Array.from(track.children);
  if (!cards.length) return;

  const getVisibleCount = () => {
    if (window.innerWidth <= 768) return 1;
    return 2;
  };

  const updateMetrics = () => {
    const visible = getVisibleCount();
    maxSlideIndex = Math.max(0, cards.length - visible);
    if (currentSlideIndex > maxSlideIndex) currentSlideIndex = maxSlideIndex;
    updatePosition();
    updatePaginationDots();
  };

  const updatePosition = () => {
    if (!cards[0]) return;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = window.innerWidth <= 768 ? 16 : 28;
    const offset = currentSlideIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    if (prevBtn) prevBtn.disabled = currentSlideIndex <= 0;
    if (nextBtn) nextBtn.disabled = currentSlideIndex >= maxSlideIndex;
  };

  const updatePaginationDots = () => {
    if (!pagination) return;
    pagination.innerHTML = '';
    const total = maxSlideIndex + 1;
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `slider-dot ${i === currentSlideIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir a diapositiva ${i + 1}`);
      dot.addEventListener('click', () => {
        currentSlideIndex = i;
        updatePosition();
        updatePaginationDots();
      });
      pagination.appendChild(dot);
    }
  };

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updatePosition();
        updatePaginationDots();
      }
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (currentSlideIndex < maxSlideIndex) {
        currentSlideIndex++;
        updatePosition();
        updatePaginationDots();
      }
    };
  }

  // Soporte táctil Touch Swipe (Móviles)
  let touchStartX = 0;
  let touchMoveX = 0;
  let isTouching = false;

  trackContainer.ontouchstart = (e) => {
    touchStartX = e.touches[0].clientX;
    touchMoveX = 0;
    isTouching = true;
  };

  trackContainer.ontouchmove = (e) => {
    if (!isTouching) return;
    touchMoveX = e.touches[0].clientX;
  };

  trackContainer.ontouchend = () => {
    if (!isTouching) return;
    if (touchMoveX !== 0) {
      const diff = touchStartX - touchMoveX;
      if (Math.abs(diff) > 35) {
        if (diff > 0 && currentSlideIndex < maxSlideIndex) {
          currentSlideIndex++;
        } else if (diff < 0 && currentSlideIndex > 0) {
          currentSlideIndex--;
        }
        updatePosition();
        updatePaginationDots();
      }
    }
    isTouching = false;
    touchStartX = 0;
    touchMoveX = 0;
  };

  // Soporte Drag con Mouse (Desktop)
  let isMouseDown = false;
  let mouseStartX = 0;
  let mouseMoveX = 0;

  trackContainer.onmousedown = (e) => {
    isMouseDown = true;
    mouseStartX = e.clientX;
    mouseMoveX = 0;
    trackContainer.classList.add('grabbing');
  };

  window.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    mouseMoveX = e.clientX;
  });

  window.addEventListener('mouseup', () => {
    if (!isMouseDown) return;
    if (mouseMoveX !== 0) {
      const diff = mouseStartX - mouseMoveX;
      if (Math.abs(diff) > 40) {
        if (diff > 0 && currentSlideIndex < maxSlideIndex) {
          currentSlideIndex++;
        } else if (diff < 0 && currentSlideIndex > 0) {
          currentSlideIndex--;
        }
        updatePosition();
        updatePaginationDots();
      }
    }
    isMouseDown = false;
    mouseStartX = 0;
    mouseMoveX = 0;
    trackContainer.classList.remove('grabbing');
  });

  // Ajuste en cambio de tamaño de ventana
  window.addEventListener('resize', updateMetrics);

  updateMetrics();
}

function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      currentSlideIndex = 0;
      renderProjects(category);
    });
  });
}

// --------------------------------------------------------------------------
// 4. Modal de Detalle de Proyecto
// --------------------------------------------------------------------------
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  if (!modalBackdrop || !modalContent) return;

  const tagsHtml = project.tags
    .map(t => `<span class="project-tag" style="background-color: #F3F4F6;">${t}</span>`)
    .join('');

  modalContent.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="badge-tag">${project.category === 'software' ? 'Software & CRM a Medida' : 'Sitio Web Comercial'}</span>
    </div>
    <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 8px;">${project.title}</h2>
    <div style="font-size: 0.9375rem; color: var(--accent-primary); font-weight: 600; margin-bottom: 24px;">
      ${project.subtitle} · ${project.client}
    </div>
    
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; border: 1px solid var(--border-subtle); background: #111827;">
      <img src="${project.detailImage || project.image}" alt="${project.title}" style="width: 100%; height: auto; display: block;">
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1.0625rem; font-weight: 700; margin-bottom: 8px;">Resumen del desarrollo:</h4>
      <p style="font-size: 0.9375rem; color: var(--text-body); line-height: 1.65;">${project.description}</p>
    </div>

    <div style="background-color: var(--accent-light); border: 1px solid var(--accent-border); padding: 18px 20px; border-radius: var(--radius-md); margin-bottom: 24px;">
      <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; color: var(--accent-primary); margin-bottom: 4px;">
        Impacto y Valor Aportado
      </div>
      <div style="font-size: 0.9375rem; color: var(--text-main); font-weight: 600;">
        ${project.impact}
      </div>
    </div>

    <div style="margin-bottom: 32px;">
      <h4 style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-muted); margin-bottom: 10px;">Tecnologías y Enfoque</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${tagsHtml}
      </div>
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap; border-top: 1px solid var(--border-subtle); padding-top: 24px;">
      <a href="https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hola%20Dylan,%20estoy%20viendo%20el%20proyecto%20de%20${encodeURIComponent(project.title)}%20y%20quiero%20hacerte%20una%20consulta" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="btn btn-primary">
        Conversar por WhatsApp sobre este proyecto
      </a>
      <button type="button" class="btn btn-secondary close-modal-action">
        Cerrar ventana
      </button>
    </div>
  `;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Cerrar modal
  const closeBtns = modalContent.querySelectorAll('.close-modal-action');
  closeBtns.forEach(b => b.addEventListener('click', closeModal));
}

function closeModal() {
  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Click fuera para cerrar modal
window.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (e.target === modal) {
    closeModal();
  }
});

// Tecla ESC para cerrar modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// --------------------------------------------------------------------------
// 5. FAQ Accordion
// --------------------------------------------------------------------------
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

// --------------------------------------------------------------------------
// 6. Formulario de Contacto & Disparo Directo
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const contactInfo = document.getElementById('form-contact').value.trim();
    const serviceType = document.getElementById('form-service').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !contactInfo || !message) {
      alert('Por favor, completá los campos principales para poder responderte.');
      return;
    }

    const compiledMessage = `Hola Dylan! Mi nombre es ${name}. 
Contacto: ${contactInfo}
Tipo de proyecto: ${serviceType}
Detalle: ${message}`;

    const waUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(compiledMessage)}`;
    
    // Abre WhatsApp con el mensaje compilado
    window.open(waUrl, '_blank');

    // Muestra feedback en pantalla
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>✓ Mensaje preparado</span>`;
    submitBtn.style.backgroundColor = '#10B981';

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.backgroundColor = '';
      form.reset();
    }, 4000);
  });
}

// --------------------------------------------------------------------------
// 7. Copiar Email al Portapapeles
// --------------------------------------------------------------------------
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(CONTACT_CONFIG.email).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = '¡Copiado!';
      copyBtn.style.backgroundColor = 'var(--accent-primary)';
      copyBtn.style.color = '#FFFFFF';

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.backgroundColor = '';
        copyBtn.style.color = '';
      }, 2500);
    }).catch(() => {
      window.location.href = `mailto:${CONTACT_CONFIG.email}`;
    });
  });
}

// --------------------------------------------------------------------------
// 8. Menú Móvil
// --------------------------------------------------------------------------
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('mobile-open');
    const isOpen = navLinks.classList.contains('mobile-open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.innerHTML = isOpen 
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  });

  // Cerrar al clickear cualquier link en móvil
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      menuBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
    });
  });

  // Cerrar al clickear fuera
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
      menuBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
    }
  });
}

// --------------------------------------------------------------------------
// 8.5 Animaciones al Scroll (Intersection Observer)
// --------------------------------------------------------------------------
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll, .service-card, .audience-card, .process-card, .testimonial-card');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  } else {
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

// --------------------------------------------------------------------------
// 9. Smooth Scroll
// --------------------------------------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

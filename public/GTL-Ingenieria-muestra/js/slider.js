/**
 * GTL Ingeniería Eléctrica — 3D Coverflow Slider & Synchronized Project Info
 */

// Dataset de Proyectos y Casos Destacados
const projectsData = [
  {
    image: 'assets/slider/foto-1.jpg',
    category: 'Energía Solar & Sustentabilidad',
    title: 'Parque Solar Fotovoltaico & Autoconsumo Industrial',
    location: 'Parque Industrial La Plata, Buenos Aires',
    description: 'Ingeniería integral, montaje estructural y puesta en marcha de sistema solar fotovoltaico de 45 kWp sobre cubierta metálica. Reducción del 65% en el costo de energía eléctrica mensual y amortización acelerada con inyección a red.',
    specs: [
      { label: 'Potencia', value: '45 kWp Instalados' },
      { label: 'Módulos', value: '96 Paneles Tier 1' },
      { label: 'Retorno Inversión', value: '3.5 Años Estimado' },
      { label: 'Ahorro Anual', value: '52 MWh Generados' }
    ]
  },
  {
    image: 'assets/slider/foto-2.jpg',
    category: 'Obras Eléctricas Industriales',
    title: 'Tablero General de Distribución & Protecciones TGBT',
    location: 'Planta de Procesamiento, Berisso / La Plata',
    description: 'Diseño, ensamble y verificación de tablero seccional de potencia de 1600A bajo estrictas normativas AEA 90364 e IRAM. Incorpora banco automático de capacitores para corrección de factor de potencia y analizador de redes.',
    specs: [
      { label: 'Corriente Nominal', value: '1600 A Trifásica' },
      { label: 'Normativa', value: 'AEA 90364 / IRAM' },
      { label: 'Factor de Potencia', value: 'Cos Phi 0.98' },
      { label: 'Supervisión', value: 'Monitoreo Digital' }
    ]
  },
  {
    image: 'assets/slider/foto-3.jpg',
    category: 'Respaldo Energético & Continuidad',
    title: 'Sistema Solar Híbrido con Banco de Baterías de Litio',
    location: 'Residencia & Estudio Profesional, City Bell',
    description: 'Implementación de inversor híbrido inteligente con almacenamiento en baterías de litio LiFePO4. Garantiza continuidad operativa ininterrumpida ante cortes en la red pública de distribución (EDELAP) sin ruido ni combustible.',
    specs: [
      { label: 'Inversor', value: 'Híbrido Onda Pura 8kW' },
      { label: 'Almacenamiento', value: '15 kWh Litio LiFePO4' },
      { label: 'Transferencia', value: '< 10 ms Automática' },
      { label: 'Autonomía', value: '100% Cargas Críticas' }
    ]
  },
  {
    image: 'assets/slider/foto-4.jpg',
    category: 'Loteos y Desarrollos Urbanos',
    title: 'Infraestructura Eléctrica & Alumbrado en Loteo',
    location: 'Desarrollo Residencial Los Robles, La Plata',
    description: 'Tendido subterráneo de red de baja tensión, cálculo de potencia instalada, subestación transformadora, columnas de alumbrado público LED y gestión integral del apto eléctrico ante la distribuidora para la entrega de lotes.',
    specs: [
      { label: 'Parcelas', value: '78 Lotes Urbanizados' },
      { label: 'Tendido Eléctrico', value: '2.4 km Subterráneo' },
      { label: 'Certificación', value: 'Apto Eléctrico Final' },
      { label: 'Alumbrado', value: '100% Tecnología LED' }
    ]
  },
  {
    image: 'assets/slider/foto-5.jpg',
    category: 'Habilitaciones & Aptos Eléctricos',
    title: 'Acondicionamiento & Habilitación Eléctrica Comercial',
    location: 'Centro Comercial Calle 12, La Plata',
    description: 'Readecuación eléctrica integral de local comercial de gran superficie, cálculo de cargas térmicas, circuito de iluminación de emergencia, medición de puesta a tierra reglamentaria y firma profesional de protocolo DCI.',
    specs: [
      { label: 'Superficie', value: '280 m² Comerciales' },
      { label: 'Puesta a Tierra', value: '< 5 Ohms Certificada' },
      { label: 'Aprobación', value: 'Apto DCI Aprobado' },
      { label: 'Plazo de Obra', value: '14 Días Hábiles' }
    ]
  }
];

class CoverflowSlider {
  constructor() {
    this.currentIndex = 0;
    this.totalSlides = projectsData.length;
    this.autoplayTimer = null;
    this.autoplayDelay = 6000;
    this.isHovered = false;

    this.carouselEl = document.getElementById('coverflowCarousel');
    this.infoCardEl = document.getElementById('projectInfoCard');
    this.dotsContainerEl = document.getElementById('sliderDots');
    this.prevBtn = document.getElementById('sliderPrevBtn');
    this.nextBtn = document.getElementById('sliderNextBtn');

    if (!this.carouselEl || !this.infoCardEl) return;

    this.initSlides();
    this.initDots();
    this.initEvents();
    this.updateSlider();
    this.startAutoplay();
  }

  initSlides() {
    this.carouselEl.innerHTML = '';
    projectsData.forEach((project, idx) => {
      const slide = document.createElement('div');
      slide.className = 'coverflow-slide';
      slide.setAttribute('data-index', idx);
      slide.innerHTML = `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
      
      slide.addEventListener('click', () => {
        if (this.currentIndex !== idx) {
          this.goToSlide(idx);
        }
      });

      this.carouselEl.appendChild(slide);
    });

    this.slides = Array.from(this.carouselEl.querySelectorAll('.coverflow-slide'));
  }

  initDots() {
    if (!this.dotsContainerEl) return;
    this.dotsContainerEl.innerHTML = '';
    
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Ir a diapositiva ${i + 1}`);
      dot.addEventListener('click', () => this.goToSlide(i));
      this.dotsContainerEl.appendChild(dot);
    }
  }

  initEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Pausar autoplay en hover
    const wrapper = document.querySelector('.coverflow-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => {
        this.isHovered = true;
        this.stopAutoplay();
      });

      wrapper.addEventListener('mouseleave', () => {
        this.isHovered = false;
        this.startAutoplay();
      });
    }

    // Touch Swipe Support para Celulares optimizado
    let startX = 0;
    let startY = 0;

    this.carouselEl.addEventListener('touchstart', (e) => {
      if (!e.changedTouches || !e.changedTouches.length) return;
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    }, { passive: true });

    this.carouselEl.addEventListener('touchend', (e) => {
      if (!e.changedTouches || !e.changedTouches.length) return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Solo cambia de diapositiva si el movimiento horizontal es claramente predominante
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    }, { passive: true });

    // Soporte para flechas del teclado
    document.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
  }

  nextSlide() {
    const nextIdx = (this.currentIndex + 1) % this.totalSlides;
    this.goToSlide(nextIdx);
  }

  prevSlide() {
    const prevIdx = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(prevIdx);
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlider();
    this.resetAutoplay();
  }

  updateSlider() {
    // 1. Actualizar posiciones Coverflow 3D
    this.slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'prev', 'next', 'hidden-slide');

      if (idx === this.currentIndex) {
        slide.classList.add('active');
      } else if (idx === (this.currentIndex - 1 + this.totalSlides) % this.totalSlides) {
        slide.classList.add('prev');
      } else if (idx === (this.currentIndex + 1) % this.totalSlides) {
        slide.classList.add('next');
      } else {
        slide.classList.add('hidden-slide');
      }
    });

    // 2. Actualizar Dots
    const dots = this.dotsContainerEl ? this.dotsContainerEl.querySelectorAll('.slider-dot') : [];
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.currentIndex);
    });

    // 3. Sincronizar y animar la columna de información
    this.updateInfoCard(projectsData[this.currentIndex]);
  }

  updateInfoCard(project) {
    if (!this.infoCardEl) return;

    this.infoCardEl.classList.remove('project-info-animate');
    void this.infoCardEl.offsetWidth; // Reflow para reiniciar animación
    this.infoCardEl.classList.add('project-info-animate');

    const specsHtml = project.specs.map((spec) => `
      <div class="spec-item">
        <span class="spec-label">${spec.label}</span>
        <span class="spec-value">${spec.value}</span>
      </div>
    `).join('');

    this.infoCardEl.innerHTML = `
      <div class="project-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
        <span>${project.category}</span>
      </div>

      <h3 class="project-title">${project.title}</h3>

      <div class="project-location">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>${project.location}</span>
      </div>

      <p class="project-desc">${project.description}</p>

      <div class="project-specs">
        ${specsHtml}
      </div>
    `;
  }

  startAutoplay() {
    if (this.autoplayTimer || this.isHovered) return;
    this.autoplayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  resetAutoplay() {
    this.stopAutoplay();
    if (!this.isHovered) {
      this.startAutoplay();
    }
  }
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  new CoverflowSlider();
});

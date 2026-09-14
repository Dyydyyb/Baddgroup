/**
 * GTL Ingeniería Eléctrica — Asistente Interactivo de Cotización (Wizard)
 * Generación automática de mensaje personalizado, mailto pre-cargado, tel y copiado al portapapeles
 */

const COMPANY_EMAIL = 'gtlsaingenieria@gmail.com';
const COMPANY_PHONE = '02215713005';
const COMPANY_WHATSAPP = '5492215713005';
const COMPANY_PHONE_DISPLAY = '0221 571-3005';

const wizardState = {
  currentStep: 1,
  selectedServices: ['Paneles solares y sistemas híbridos'], // Selección inicial por defecto
  projectType: 'Comercial' // Tipo de proyecto por defecto
};

document.addEventListener('DOMContentLoaded', () => {
  initWizard();
});

function initWizard() {
  const stepContainers = document.querySelectorAll('.wizard-step');
  const stepIndicators = document.querySelectorAll('.step-indicator-item');
  const progressBar = document.querySelector('.wizard-progress-bar');
  const serviceItems = document.querySelectorAll('.picker-item');
  const typeCards = document.querySelectorAll('.type-card');

  const btnStep1Next = document.getElementById('btnStep1Next');
  const btnStep2Prev = document.getElementById('btnStep2Prev');
  const btnStep2Next = document.getElementById('btnStep2Next');
  const btnStep3Prev = document.getElementById('btnStep3Prev');

  const btnSendWhatsapp = document.getElementById('btnSendWhatsapp');
  const btnSendEmail = document.getElementById('btnSendEmail');
  const btnCallNow = document.getElementById('btnCallNow');
  const btnCopyMessage = document.getElementById('btnCopyMessage');
  const copyFeedback = document.getElementById('copyFeedback');
  const messagePreview = document.getElementById('generatedMessagePreview');

  if (!stepContainers.length) return;

  // 1. Manejo de selección múltiple de servicios (Paso 1)
  serviceItems.forEach((item) => {
    item.addEventListener('click', () => {
      const serviceName = item.getAttribute('data-service-name');
      const isSelected = item.classList.contains('selected');

      if (isSelected) {
        // Deseleccionar (manteniendo al menos uno o permitiendo vacío temporal)
        item.classList.remove('selected');
        wizardState.selectedServices = wizardState.selectedServices.filter((s) => s !== serviceName);
      } else {
        item.classList.add('selected');
        if (!wizardState.selectedServices.includes(serviceName)) {
          wizardState.selectedServices.push(serviceName);
        }
      }

      updateStep1ButtonState();
      updateGeneratedMessage();
    });
  });

  // 2. Manejo de tipo de proyecto (Paso 2)
  typeCards.forEach((card) => {
    card.addEventListener('click', () => {
      typeCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      wizardState.projectType = card.getAttribute('data-type');
      updateGeneratedMessage();
    });
  });

  // 3. Navegación entre pasos
  if (btnStep1Next) {
    btnStep1Next.addEventListener('click', () => {
      if (wizardState.selectedServices.length === 0) {
        alert('Por favor, seleccioná al menos un servicio para continuar.');
        return;
      }
      goToStep(2);
    });
  }

  if (btnStep2Prev) {
    btnStep2Prev.addEventListener('click', () => goToStep(1));
  }

  if (btnStep2Next) {
    btnStep2Next.addEventListener('click', () => {
      updateGeneratedMessage();
      goToStep(3);
    });
  }

  if (btnStep3Prev) {
    btnStep3Prev.addEventListener('click', () => goToStep(2));
  }

  // 4. Acciones del Paso 3 (WhatsApp, Email, Llamada, Copiar)
  if (btnSendWhatsapp) {
    btnSendWhatsapp.addEventListener('click', () => {
      const message = generateMessageText();
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  if (btnSendEmail) {
    btnSendEmail.addEventListener('click', () => {
      const message = generateMessageText();
      const subject = encodeURIComponent(`Consulta Técnica / Presupuesto — GTL Ingeniería (${wizardState.projectType})`);
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
    });
  }

  if (btnCallNow) {
    btnCallNow.addEventListener('click', () => {
      window.open(`https://wa.me/${COMPANY_WHATSAPP}`, '_blank');
    });
  }

  if (btnCopyMessage) {
    btnCopyMessage.addEventListener('click', () => {
      const message = generateMessageText();
      navigator.clipboard.writeText(message).then(() => {
        if (copyFeedback) {
          copyFeedback.classList.add('show');
          setTimeout(() => {
            copyFeedback.classList.remove('show');
          }, 3500);
        }
      }).catch(() => {
        // Fallback para navegadores sin clipboard API
        const textarea = document.createElement('textarea');
        textarea.value = message;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (copyFeedback) {
          copyFeedback.classList.add('show');
          setTimeout(() => copyFeedback.classList.remove('show'), 3500);
        }
      });
    });
  }

  function goToStep(stepNumber) {
    wizardState.currentStep = stepNumber;

    // Actualizar contenedores de pasos
    stepContainers.forEach((container, index) => {
      container.classList.toggle('active', index + 1 === stepNumber);
    });

    // Actualizar indicadores
    stepIndicators.forEach((indicator, index) => {
      const stepIdx = index + 1;
      indicator.classList.remove('active', 'completed');
      if (stepIdx === stepNumber) {
        indicator.classList.add('active');
      } else if (stepIdx < stepNumber) {
        indicator.classList.add('completed');
      }
    });

    // Actualizar barra de progreso
    if (progressBar) {
      const percent = ((stepNumber) / 3) * 100;
      progressBar.style.width = `${percent}%`;
    }
  }

  function updateStep1ButtonState() {
    if (!btnStep1Next) return;
    const hasSelection = wizardState.selectedServices.length > 0;
    btnStep1Next.disabled = !hasSelection;
    btnStep1Next.style.opacity = hasSelection ? '1' : '0.6';
    btnStep1Next.style.cursor = hasSelection ? 'pointer' : 'not-allowed';
  }

  function generateMessageText() {
    const servicesList = wizardState.selectedServices.length > 0
      ? wizardState.selectedServices.join(', ')
      : 'Servicios de ingeniería eléctrica y energía solar';

    const projectType = wizardState.projectType || 'General';

    return `Hola GTL Ingeniería, me interesa consultar por: ${servicesList}.\nTipo de proyecto: ${projectType}.\n¿Podrían asesorarme técnicamente y enviarme un presupuesto para la obra?`;
  }

  function updateGeneratedMessage() {
    if (messagePreview) {
      messagePreview.textContent = generateMessageText();
    }
  }

  // Inicializar estado de botones y vista previa
  updateStep1ButtonState();
  updateGeneratedMessage();

  // Función global para preseleccionar servicios desde la sección "¿Cuándo necesitás un ingeniero?"
  window.preselectWizardService = function(serviceSlug) {
    const slugMap = {
      'local': 'Habilitación de locales comerciales',
      'loteo': 'Loteos y desarrollos urbanos',
      'ampliacion': 'Ampliaciones de industrias',
      'solar': 'Paneles solares y sistemas híbridos',
      'apto': 'Aptos eléctricos y certificaciones',
      'obra': 'Proyectos y obras eléctricas'
    };

    const targetServiceName = slugMap[serviceSlug];
    if (!targetServiceName) return;

    // Resetear o agregar selección
    wizardState.selectedServices = [targetServiceName];

    serviceItems.forEach((item) => {
      const name = item.getAttribute('data-service-name');
      item.classList.toggle('selected', name === targetServiceName);
    });

    // Si es comercial o industrial según el caso
    if (serviceSlug === 'local') wizardState.projectType = 'Comercial';
    if (serviceSlug === 'ampliacion') wizardState.projectType = 'Industrial';
    if (serviceSlug === 'loteo') wizardState.projectType = 'Loteo / Desarrollo';

    typeCards.forEach((c) => {
      c.classList.toggle('selected', c.getAttribute('data-type') === wizardState.projectType);
    });

    updateStep1ButtonState();
    updateGeneratedMessage();
    goToStep(1);
  };
}

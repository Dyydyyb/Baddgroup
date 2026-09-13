/**
 * INGEMAH ERP - CORE APPLICATION ENGINE (V2.5 ELEVATED & INTERACTIVE)
 * Enterprise Management System for Engineering & Construction
 * Ushuaia, Tierra del Fuego, Argentina
 * 
 * Includes:
 * - Admin: ING. Hidalgo Miguel Angel
 * - Fixed cursor-locked tooltips
 * - Financial chart with Dona & Torta options (Bars, Lines, Area, Donut, Pie)
 * - New dedicated chart: Control de Avance y Estado de Obras en Proceso
 * - Elegant Obras view with Grid / Table toggle & high-contrast card styling
 * - Time period filter (Día, Semana, Mes, Año)
 * - Complete Agenda & Visitas de Obra module
 */

// ==========================================================================
// 1. MOCK RELATIONAL DATABASE & SEED DATA
// ==========================================================================

const ERP_DB = {
  // Current user & RBAC
  currentUser: {
    id: 'usr-001',
    name: 'ING. Hidalgo Miguel Angel',
    role: 'admin',
    email: 'm.hidalgo@ingemah.com.ar',
    phone: '+54 2901 41-1117'
  },

  // Clients
  clients: [
    {
      id: 'cli-001',
      name: 'Fideicomiso Bahía Ushuaia',
      contact: 'Dr. Sebastián Morales',
      cuit: '30-71489201-9',
      phone: '+54 2901 55-2244',
      email: 'smorales@fideicomisoushuaia.com',
      address: 'Paseo de la Costa 840, Ushuaia',
      projectsCount: 1,
      totalBilled: 38500000
    },
    {
      id: 'cli-002',
      name: 'Hostería & Cabañas Monte Martial S.R.L.',
      contact: 'Sra. Mariana Estévez',
      cuit: '30-68912344-4',
      phone: '+54 2901 49-8811',
      email: 'gerencia@montemartial.com.ar',
      address: 'Camino al Glaciar Martial Km 3.5, Ushuaia',
      projectsCount: 1,
      totalBilled: 29400000
    },
    {
      id: 'cli-003',
      name: 'Grupo Inmobiliario Fueguino',
      contact: 'Ing. Carlos Varela',
      cuit: '30-71822390-2',
      phone: '+54 2901 61-9003',
      email: 'cvarela@inmobiliariafueguina.ar',
      address: 'Av. San Martín 1120, Ushuaia',
      projectsCount: 1,
      totalBilled: 12800000
    },
    {
      id: 'cli-004',
      name: 'Familia Rossi - Pérez',
      contact: 'Lic. Gonzalo Rossi',
      cuit: '20-33890123-2',
      phone: '+54 2901 44-7721',
      email: 'gonzalo.rossi@gmail.com',
      address: 'Barrio Alacalufes II, Casa 14, Ushuaia',
      projectsCount: 1,
      totalBilled: 8600000
    },
    {
      id: 'cli-005',
      name: 'Cervecería Beagle Gastro-Bar',
      contact: 'Gastón Benítez',
      cuit: '27-31998442-8',
      phone: '+54 2901 58-1290',
      email: 'beaglebar@ushuaia.net',
      address: 'Calle Gobernador Paz 430, Ushuaia',
      projectsCount: 0,
      totalBilled: 0
    }
  ],

  // CRM Leads
  leads: [
    {
      id: 'lead-001',
      name: 'Dr. Fernando Gómez',
      phone: '+54 2901 48-3399',
      email: 'fgomez.ush@gmail.com',
      source: 'Web Landing (Filtro)',
      projectType: 'Vivienda Unifamiliar',
      services: ['Planos de arquitectura', 'Planos de estructura', 'Proyectos llave en mano'],
      status: 'new_lead',
      estimatedBudget: 42000000,
      notes: 'Lote con pendiente pronunciada en Barrio Las Hayas. Requiere cálculo estructural CIRSOC 103 por sismo y nieve.',
      date: '2026-09-12'
    },
    {
      id: 'lead-002',
      name: 'Inversiones Fueguinas S.A.',
      phone: '+54 2901 62-1144',
      email: 'proyectos@inversionesfueguinas.com',
      source: 'WhatsApp (+54 2901 41-1117)',
      projectType: 'Complejo Turístico',
      services: ['Cómputos métricos', 'Habilitación comercial', 'Renders 3D'],
      status: 'in_quoting',
      estimatedBudget: 68000000,
      notes: 'Desarrollo de 4 módulos turísticos en Valle de Andorra. Solicita renders 3D para inversores.',
      date: '2026-09-10'
    },
    {
      id: 'lead-003',
      name: 'Estudio Jurídico Magallanes',
      phone: '+54 2901 40-7733',
      email: 'contacto@estudiomagallanes.ar',
      source: 'Visita Oficina (H. Yrigoyen 407)',
      projectType: 'Refacción Integral',
      services: ['Refacciones', 'Instalación eléctrica', 'Instalación sanitaria'],
      status: 'quote_sent',
      estimatedBudget: 14500000,
      notes: 'Presupuesto #PRE-2026-0042 enviado. Adecuación de oficinas céntricas y cableado estructurado.',
      date: '2026-09-08'
    },
    {
      id: 'lead-004',
      name: 'Arq. Esteban Morales (Colaboración)',
      phone: '+54 2901 51-2299',
      email: 'esteban.morales.arq@outlook.com',
      source: 'Recomendación',
      projectType: 'Cálculo Estructural',
      services: ['Planos de estructura', 'Cómputos métricos'],
      status: 'won',
      estimatedBudget: 6800000,
      notes: 'Cálculo de fundaciones y estructura metálica para nave comercial en Río Grande.',
      date: '2026-09-02'
    },
    {
      id: 'lead-005',
      name: 'Farmacia Fueguina Central',
      phone: '+54 2901 47-8822',
      email: 'info@farmaciafueguina.com.ar',
      source: 'Instagram (@ingemah_)',
      projectType: 'Habilitación Comercial',
      services: ['Habilitación comercial', 'Planos de arquitectura'],
      status: 'quote_sent',
      estimatedBudget: 4900000,
      notes: 'Trámite urgente de habilitación y plano de evacuación ante Bomberos y Municipalidad de Ushuaia.',
      date: '2026-09-07'
    }
  ],

  // Projects / Obras en Ushuaia
  projects: [
    {
      id: 'proj-001',
      code: 'OBRA-USH-01',
      title: 'Residencia Panorámica Las Hayas',
      clientId: 'cli-001',
      clientName: 'Fideicomiso Bahía Ushuaia',
      location: 'Calle Las Hayas 1420, Ushuaia',
      type: 'Vivienda Unifamiliar de Alta Gama (280 m²)',
      siteManager: 'Capataz Héctor Benítez',
      architect: 'Arq. Luciana Soria',
      status: 'in_progress',
      statusLabel: 'En Ejecución',
      startDate: '2026-03-01',
      endDate: '2026-11-30',
      progress: 68,
      targetProgress: 65,
      totalBudget: 38500000,
      actualCost: 24100000,
      services: ['Planos de arquitectura', 'Planos de estructura', 'Proyectos llave en mano', 'Instalación sanitaria', 'Instalación eléctrica'],
      stages: [
        { id: 'stg-101', name: 'Planos & Cálculo CIRSOC 103/104', start: '2026-03-01', end: '2026-04-15', progress: 100, status: 'completed' },
        { id: 'stg-102', name: 'Permiso Municipal & DPOSS/DPE', start: '2026-04-10', end: '2026-05-20', progress: 100, status: 'completed' },
        { id: 'stg-103', name: 'Movimiento de Suelo & Fundaciones', start: '2026-05-15', end: '2026-07-05', progress: 100, status: 'completed' },
        { id: 'stg-104', name: 'Montaje Estructura & Envolvente Térmica', start: '2026-07-01', end: '2026-09-25', progress: 85, status: 'in_progress' },
        { id: 'stg-105', name: 'Instalaciones Sanitarias (PEX) & Eléctricas', start: '2026-09-15', end: '2026-10-30', progress: 30, status: 'in_progress' },
        { id: 'stg-106', name: 'Terminaciones, Carpintería DVA & Entrega', start: '2026-10-25', end: '2026-11-30', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Plano de Arquitectura Aprobado (Expte Municipal)', status: 'approved', date: '2026-04-12' },
        { name: 'Memoria de Cálculo Estructural CIRSOC Ushuaia', status: 'approved', date: '2026-04-05' },
        { name: 'Factibilidad Sanitaria DPOSS', status: 'approved', date: '2026-05-02' },
        { name: 'Proyecto Eléctrico Visado por DPE', status: 'approved', date: '2026-05-18' },
        { name: 'Permiso Provisorio de Conexión de Obra', status: 'approved', date: '2026-05-20' },
        { name: 'Final de Obra Parcial (Estructura)', status: 'pending', date: 'Estimado Oct 2026' }
      ],
      photos: [
        { url: '../assets/img/ushuaia_llave_en_mano.jpg', caption: 'Montaje de estructura y aislamiento térmico lana de roca', date: '2026-09-05', stage: 'Estructura' },
        { url: '../assets/img/architecture-render.jpg', caption: 'Render volumétrico aprobado por el cliente', date: '2026-03-10', stage: 'Proyecto' },
        { url: '../assets/img/blueprint-showcase.svg', caption: 'Plano estructural de platea y anclajes antisísmicos', date: '2026-04-02', stage: 'CIRSOC' }
      ]
    },
    {
      id: 'proj-002',
      code: 'OBRA-USH-02',
      title: 'Cabañas Turísticas Monte Martial',
      clientId: 'cli-002',
      clientName: 'Hostería & Cabañas Monte Martial S.R.L.',
      location: 'Camino al Glaciar Martial Km 3.5, Ushuaia',
      type: 'Complejo Turístico (3 unidades llave en mano)',
      siteManager: 'Capataz Héctor Benítez',
      architect: 'Arq. Luciana Soria',
      status: 'in_progress',
      statusLabel: 'En Ejecución',
      startDate: '2026-05-10',
      endDate: '2026-12-20',
      progress: 42,
      targetProgress: 40,
      totalBudget: 29400000,
      actualCost: 13900000,
      services: ['Proyectos llave en mano', 'Planos de estructura', 'Mano de obra', 'Instalación sanitaria'],
      stages: [
        { id: 'stg-201', name: 'Anteproyecto y Cómputo Métrico', start: '2026-05-10', end: '2026-06-10', progress: 100, status: 'completed' },
        { id: 'stg-202', name: 'Permisos Ambientales & Municipales', start: '2026-06-05', end: '2026-07-20', progress: 100, status: 'completed' },
        { id: 'stg-203', name: 'Fundaciones sobre roca & Plateas', start: '2026-07-15', end: '2026-08-30', progress: 100, status: 'completed' },
        { id: 'stg-204', name: 'Armado de Estructura de Madera Laminada', start: '2026-08-25', end: '2026-10-20', progress: 45, status: 'in_progress' },
        { id: 'stg-205', name: 'Cubiertas de Techo con Pendiente Nieve', start: '2026-10-15', end: '2026-11-20', progress: 0, status: 'pending' },
        { id: 'stg-206', name: 'Equipamiento & Entrega Final', start: '2026-11-15', end: '2026-12-20', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Plano de Arquitectura Turística Aprobado', status: 'approved', date: '2026-06-28' },
        { name: 'Cálculo de Sobrecarga de Nieve CIRSOC 104', status: 'approved', date: '2026-06-15' },
        { name: 'Estudio de Impacto Ambiental Fueguino', status: 'approved', date: '2026-07-10' },
        { name: 'Certificado de Aptitud Sanitaria DPOSS', status: 'approved', date: '2026-07-18' }
      ],
      photos: [
        { url: '../assets/img/architecture-render.jpg', caption: 'Render de integración paisajística en bosque de lengas', date: '2026-05-20', stage: 'Proyecto' },
        { url: '../assets/img/ushuaia_llave_en_mano.jpg', caption: 'Hormigonado de platea sobre suelo rocoso', date: '2026-08-14', stage: 'Fundaciones' }
      ]
    },
    {
      id: 'proj-003',
      code: 'OBRA-USH-03',
      title: 'Local Comercial Gastronómico San Martín',
      clientId: 'cli-003',
      clientName: 'Grupo Inmobiliario Fueguino',
      location: 'Av. San Martín 780, Ushuaia',
      type: 'Refacción y Adecuación Comercial (190 m²)',
      siteManager: 'ING. Hidalgo Miguel Angel',
      architect: 'Arq. Luciana Soria',
      status: 'in_progress',
      statusLabel: 'En Ejecución',
      startDate: '2026-07-01',
      endDate: '2026-09-30',
      progress: 90,
      targetProgress: 88,
      totalBudget: 12800000,
      actualCost: 11100000,
      services: ['Refacciones', 'Habilitaciones comerciales', 'Instalación eléctrica', 'Instalación sanitaria'],
      stages: [
        { id: 'stg-301', name: 'Relevamiento & Plano Conforme a Obra', start: '2026-07-01', end: '2026-07-15', progress: 100, status: 'completed' },
        { id: 'stg-302', name: 'Demoliciones & Refuerzos Metálicos', start: '2026-07-16', end: '2026-08-10', progress: 100, status: 'completed' },
        { id: 'stg-303', name: 'Renovación Instalación Sanitaria & Gas', start: '2026-08-05', end: '2026-08-28', progress: 100, status: 'completed' },
        { id: 'stg-304', name: 'Tableros Eléctricos & Extracción Humos', start: '2026-08-25', end: '2026-09-18', progress: 100, status: 'completed' },
        { id: 'stg-305', name: 'Inspección Final de Bomberos & Municipal', start: '2026-09-19', end: '2026-09-30', progress: 60, status: 'in_progress' }
      ],
      checklist: [
        { name: 'Plano Electromecánico DPE Aprobado', status: 'approved', date: '2026-08-20' },
        { name: 'Inspección de Red de Incendio por Bomberos', status: 'approved', date: '2026-09-10' },
        { name: 'Habilitación Comercial Provisoria Municipal', status: 'approved', date: '2026-09-20' },
        { name: 'Final de Obra Comercial Definitivo', status: 'pending', date: 'En revisión' }
      ],
      photos: [
        { url: '../assets/img/hero-poster.jpg', caption: 'Fachada e interiorismo sobre calle San Martín', date: '2026-09-11', stage: 'Terminaciones' }
      ]
    },
    {
      id: 'proj-004',
      code: 'OBRA-USH-04',
      title: 'Edificio Residencial Valle de Andorra',
      clientId: 'cli-004',
      clientName: 'Familia Rossi - Pérez',
      location: 'Valle de Andorra Lote 22, Ushuaia',
      type: 'Vivienda Bifamiliar & Estudio (180 m²)',
      siteManager: 'Capataz Héctor Benítez',
      architect: 'Arq. Luciana Soria',
      status: 'planning',
      statusLabel: 'En Planificación',
      startDate: '2026-10-01',
      endDate: '2027-05-30',
      progress: 15,
      targetProgress: 15,
      totalBudget: 22600000,
      actualCost: 2800000,
      services: ['Planos de arquitectura', 'Planos de estructura', 'Cómputos métricos', 'Renders 3D'],
      stages: [
        { id: 'stg-401', name: 'Diseño Arquitectónico & Renders 3D', start: '2026-09-01', end: '2026-10-10', progress: 75, status: 'in_progress' },
        { id: 'stg-402', name: 'Cálculo Estructural CIRSOC Ushuaia', start: '2026-10-05', end: '2026-11-05', progress: 0, status: 'pending' },
        { id: 'stg-403', name: 'Ingreso Expediente Municipal Ushuaia', start: '2026-11-01', end: '2026-12-15', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Estudio de Suelos (Resistencia admisible)', status: 'approved', date: '2026-09-05' },
        { name: 'Plano de Arquitectura Preliminar', status: 'in_progress', date: 'En diseño' },
        { name: 'Presentación Municipal Ushuaia', status: 'pending', date: 'Nov 2026' }
      ],
      photos: [
        { url: '../assets/img/architecture-render.jpg', caption: 'Render preliminar de volumen bioclimático', date: '2026-09-08', stage: 'Proyecto' }
      ]
    }
  ],

  // Agenda Events
  agendaEvents: [
    {
      id: 'evt-001',
      title: 'Inspección de Armaduras & Platea de Hormigón',
      projectId: 'proj-001',
      projectCode: 'OBRA-USH-01',
      projectTitle: 'Residencia Las Hayas',
      type: 'inspeccion',
      typeLabel: 'Inspección Municipal',
      date: '2026-09-15',
      time: '10:30',
      responsible: 'Arq. Luciana Soria',
      status: 'confirmed',
      notes: 'Verificación de recubrimientos y estribos antisísmicos CIRSOC 103 con Inspector de Obras Privadas.'
    },
    {
      id: 'evt-002',
      title: 'Prueba Hidráulica de Cañerías PEX (DPOSS)',
      projectId: 'proj-003',
      projectCode: 'OBRA-USH-03',
      projectTitle: 'Local Calle San Martín',
      type: 'dposs',
      typeLabel: 'Factibilidad Sanitaria',
      date: '2026-09-18',
      time: '14:00',
      responsible: 'ING. Hidalgo Miguel Angel',
      status: 'confirmed',
      notes: 'Presurización a 6 kg/cm2 con inspector oficial de DPOSS previo al cierre de cielorrasos.'
    },
    {
      id: 'evt-003',
      title: 'Entrega de Memoria de Cálculo de Nieve (CIRSOC 104)',
      projectId: 'proj-002',
      projectCode: 'OBRA-USH-02',
      projectTitle: 'Cabañas Monte Martial',
      type: 'comitente',
      typeLabel: 'Reunión Técnica',
      date: '2026-09-22',
      time: '11:00',
      responsible: 'ING. Hidalgo Miguel Angel',
      status: 'pending',
      notes: 'Revisión final de pendientes de techos y refuerzos de tirantes de madera laminada.'
    },
    {
      id: 'evt-004',
      title: 'Colado de Hormigón H-21 en Platea Sur',
      projectId: 'proj-001',
      projectCode: 'OBRA-USH-01',
      projectTitle: 'Residencia Las Hayas',
      type: 'hormigon',
      typeLabel: 'Avance Estructura',
      date: '2026-09-26',
      time: '08:30',
      responsible: 'Capataz Héctor Benítez',
      status: 'pending',
      notes: 'Coordinar camión mixer y aditivo anticongelante por temperaturas bajo cero.'
    },
    {
      id: 'evt-005',
      title: 'Relevamiento Topográfico con Dron',
      projectId: 'proj-004',
      projectCode: 'OBRA-USH-04',
      projectTitle: 'Valle de Andorra',
      type: 'comitente',
      typeLabel: 'Relevamiento',
      date: '2026-09-08',
      time: '15:00',
      responsible: 'Arq. Luciana Soria',
      status: 'completed',
      notes: 'Curvas de nivel de pendiente y orientación solar completadas.'
    }
  ],

  // Budgets
  budgets: [
    {
      id: 'pre-001',
      number: 'PRE-2026-0041',
      clientId: 'cli-001',
      clientName: 'Fideicomiso Bahía Ushuaia',
      title: 'Construcción Llave en Mano - Residencia Las Hayas',
      status: 'approved',
      date: '2026-02-15',
      validUntil: '2026-03-15',
      subtotal: 38500000,
      discount: 0,
      tax: 0,
      taxRate: 0,
      total: 38500000,
      paymentTerms: 'Anticipo 30% al inicio, 6 certificados de avance mensual del 10%, saldo 10% a la entrega de llave y final de obra.',
      items: [
        { service: 'Planos de arquitectura', category: 'Honorarios Técnicos', description: 'Proyecto arquitectónico ejecutivo y legajo técnico municipal', unit: 'm²', qty: 280, price: 18000, total: 5040000 },
        { service: 'Planos de estructura', category: 'Honorarios Técnicos', description: 'Cálculo estructural antisísmico y de nieve s/normas CIRSOC Ushuaia', unit: 'gl', qty: 1, price: 3800000, total: 3800000 },
        { service: 'Proyectos llave en mano', category: 'Obra Completa', description: 'Ejecución integral Steel Framing con aislamiento lana de vidrio 100mm y DVA', unit: 'm²', qty: 280, price: 92000, total: 25760000 },
        { service: 'Instalación sanitaria', category: 'Instalaciones', description: 'Red de distribución PEX termofusión, colectores y desagües pluviales DPOSS', unit: 'gl', qty: 1, price: 2100000, total: 2100000 },
        { service: 'Instalación eléctrica', category: 'Instalaciones', description: 'Cableado bajo norma DPE, jabalinas de PAT y tableros seccionales', unit: 'gl', qty: 1, price: 1800000, total: 1800000 }
      ]
    },
    {
      id: 'pre-002',
      number: 'PRE-2026-0042',
      clientId: 'cli-002',
      clientName: 'Hostería & Cabañas Monte Martial S.R.L.',
      title: 'Módulos Turísticos Glaciar Martial (3 Unidades)',
      status: 'sent',
      date: '2026-05-02',
      validUntil: '2026-09-20',
      subtotal: 29400000,
      discount: 1000000,
      tax: 0,
      taxRate: 0,
      total: 28400000,
      paymentTerms: '40% anticipo para acopio de perfiles y madera laminada, 40% a la finalización de techos, 20% a la entrega.',
      items: [
        { service: 'Proyectos llave en mano', category: 'Obra Completa', description: 'Construcción de 3 cabañas alpinas de 75 m² c/u preparadas para clima extremo', unit: 'm²', qty: 225, price: 98000, total: 22050000 },
        { service: 'Planos de estructura', category: 'Honorarios Técnicos', description: 'Cálculo estructural de madera laminada y anclajes en roca viva', unit: 'gl', qty: 1, price: 2600000, total: 2600000 },
        { service: 'Cómputos métricos', category: 'Honorarios Técnicos', description: 'Cómputo métrico y desagregación de materiales con lista de compras local', unit: 'gl', qty: 1, price: 1250000, total: 1250000 },
        { service: 'Renders 3D', category: 'Diseño', description: 'Paquete de 6 renders fotorrealistas para preventa comercial e inversores', unit: 'un', qty: 6, price: 583333.33, total: 3500000 }
      ]
    }
  ],

  // Employees
  employees: [
    { id: 'emp-001', name: 'ING. Hidalgo Miguel Angel', role: 'Director General / Calculista', crew: 'Ingeniería', hourlyRate: 35000, phone: '+54 2901 41-1117', active: true },
    { id: 'emp-002', name: 'Arq. Luciana Soria', role: 'Proyectista / Renders', crew: 'Arquitectura', hourlyRate: 28000, phone: '+54 2901 55-9011', active: true },
    { id: 'emp-003', name: 'Héctor Benítez', role: 'Capataz General', crew: 'Cuadrilla Obra Civil', hourlyRate: 18500, phone: '+54 2901 48-1200', active: true },
    { id: 'emp-004', name: 'Juan Carlos Riquelme', role: 'Oficial Especializado Steel Framing', crew: 'Cuadrilla Estructura', hourlyRate: 14200, phone: '+54 2901 60-3344', active: true },
    { id: 'emp-005', name: 'Esteban Domínguez', role: 'Electricista Matriculado (DPE)', crew: 'Instalaciones', hourlyRate: 16000, phone: '+54 2901 49-2155', active: true },
    { id: 'emp-006', name: 'Pablo Tolaba', role: 'Instalador Sanitario / Gasista', crew: 'Instalaciones', hourlyRate: 15500, phone: '+54 2901 52-8700', active: true }
  ],

  // Inventory
  inventory: [
    { id: 'inv-001', code: 'MAT-ST-01', name: 'Perfilería Steel Framing PGC 100x0.9', unit: 'barra 6m', stock: 140, minStock: 50, cost: 28500, supplier: 'Hierros Fueguinos S.A.' },
    { id: 'inv-002', code: 'MAT-ST-02', name: 'Perfilería Steel Framing PGU 100x0.9', unit: 'barra 6m', stock: 85, minStock: 40, cost: 24200, supplier: 'Hierros Fueguinos S.A.' },
    { id: 'inv-003', code: 'MAT-IS-01', name: 'Lana de Vidrio con Aluminio 100mm R20', unit: 'rollo 12m²', stock: 45, minStock: 25, cost: 42000, supplier: 'Corralón Austral Ushuaia' },
    { id: 'inv-004', code: 'MAT-CEM-01', name: 'Cemento Loma Negra CPC 40', unit: 'bolsa 50kg', stock: 12, minStock: 60, cost: 14800, supplier: 'Distribuidora del Fin del Mundo', alert: true },
    { id: 'inv-005', code: 'MAT-PEX-01', name: 'Tubo PEX Multicapa Termofusión 25mm', unit: 'rollo 50m', stock: 18, minStock: 10, cost: 89000, supplier: 'Sanitarios Beagle' },
    { id: 'inv-006', code: 'MAT-MEM-01', name: 'Membrana Hidrófuga Tyvek Homewrap', unit: 'rollo 84m²', stock: 8, minStock: 5, cost: 165000, supplier: 'Corralón Austral Ushuaia' }
  ],

  // Invoices
  invoices: [
    { id: 'inv-901', number: 'FC-A 0001-00000142', project: 'OBRA-USH-01', client: 'Fideicomiso Bahía Ushuaia', amount: 7700000, date: '2026-08-30', dueDate: '2026-09-15', status: 'paid' },
    { id: 'inv-902', number: 'FC-A 0001-00000143', project: 'OBRA-USH-02', client: 'Hostería & Cabañas Monte Martial S.R.L.', amount: 5880000, date: '2026-09-02', dueDate: '2026-09-18', status: 'pending' },
    { id: 'inv-903', number: 'FC-A 0001-00000144', project: 'OBRA-USH-03', client: 'Grupo Inmobiliario Fueguino', amount: 3840000, date: '2026-09-05', dueDate: '2026-09-20', status: 'pending' }
  ],

  // Services Catalog
  servicesCatalog: [
    'Planos de arquitectura',
    'Planos de estructura',
    'Instalación sanitaria',
    'Instalación eléctrica',
    'Proyectos llave en mano',
    'Mano de obra',
    'Refacciones',
    'Habilitaciones comerciales',
    'Cómputos métricos',
    'Renders 3D'
  ]
};

// ==========================================================================
// 2. CONTROLLER & DYNAMIC STATE
// ==========================================================================

const App = {
  currentView: 'dashboard',
  selectedProjectId: 'proj-001',
  currentBudgetDraft: null,

  // Settings & Toggles
  currentTimeFilter: 'month', // 'day', 'week', 'month', 'year'
  financialChartType: 'bars', // 'bars', 'lines', 'area', 'donut', 'pie'
  financialUnit: 'currency', // 'currency' or 'percent'
  servicesChartType: 'donut', // 'donut', 'pie', 'bars'
  servicesUnit: 'percent', // 'percent' or 'currency'
  obrasViewMode: 'cards', // 'cards' or 'grid'
  agendaFilter: 'upcoming', // 'upcoming', 'week', 'completed', 'all'

  init() {
    this.setupNavigation();
    this.setupTheme();
    this.setupRoleSelector();
    this.setupGlobalSearch();
    this.setupModals();
    this.setupQuickActions();
    this.setupTooltipEvents();

    const initialHash = window.location.hash.replace('#', '') || 'dashboard';
    this.navigateTo(initialHash);
  },

  // Setup Navigation listeners
  setupNavigation() {
    document.querySelectorAll('.nav-link[data-view]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        this.navigateTo(view);
      });
    });

    document.getElementById('brandLogoBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.navigateTo('dashboard');
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    mobileBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });

    // Collapse sidebar desktop
    const collapseBtn = document.getElementById('collapseSidebarBtn');
    collapseBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    // Notifications toggle
    const notifBtn = document.getElementById('notificationsBtn');
    const notifPanel = document.getElementById('notificationsPanel');
    notifBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPanel.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (!notifPanel.contains(e.target) && e.target !== notifBtn) {
        notifPanel.classList.remove('active');
      }
    });
  },

  // Theme light/dark toggle
  setupTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const htmlEl = document.documentElement;
    themeBtn?.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlEl.setAttribute('data-theme', newTheme);
      this.showToast(`Modo ${newTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`, 'info');
    });
  },

  // Role selector (with Admin: ING. Hidalgo Miguel Angel)
  setupRoleSelector() {
    const roleSelect = document.getElementById('roleSelector');
    const nameDisplay = document.getElementById('userNameDisplay');
    const avatar = document.getElementById('userAvatar');

    roleSelect?.addEventListener('change', (e) => {
      const role = e.target.value;
      ERP_DB.currentUser.role = role;

      const roleMap = {
        admin: { name: 'ING. Hidalgo Miguel Angel', title: 'Dueño / Director General', avatar: 'HM' },
        architect: { name: 'Arq. Luciana Soria', title: 'Arquitecta / Proyectista', avatar: 'LS' },
        site_manager: { name: 'Capataz Héctor Benítez', title: 'Jefe de Obra Ushuaia', avatar: 'HB' },
        accountant: { name: 'Lic. Valeria Paz', title: 'Administración y Finanzas', avatar: 'VP' },
        worker: { name: 'Juan Carlos Riquelme', title: 'Personal de Obra (Campo)', avatar: 'JR' }
      };

      const user = roleMap[role] || roleMap.admin;
      ERP_DB.currentUser.name = user.name;
      nameDisplay.textContent = user.name;
      avatar.textContent = user.avatar;

      this.showToast(`Perfil cambiado a: ${user.title}`, 'info');
      this.renderView(this.currentView);
    });
  },

  // Quick Action Buttons
  setupQuickActions() {
    document.getElementById('btnQuickNewLead')?.addEventListener('click', () => {
      this.openLeadModal();
    });

    document.getElementById('btnQuickNewBudget')?.addEventListener('click', () => {
      this.navigateTo('presupuestos');
      this.initNewBudgetForm();
    });

    document.getElementById('btnQuickNewProject')?.addEventListener('click', () => {
      this.navigateTo('obras');
      this.openNewProjectModal();
    });
  },

  // Global search Ctrl+K
  setupGlobalSearch() {
    const searchInput = document.getElementById('globalSearchInput');
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });

    searchInput?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) return;

      if (this.currentView === 'obras') {
        this.filterProjects(q);
      } else if (this.currentView === 'crm') {
        this.filterLeads(q);
      } else if (this.currentView === 'agenda') {
        this.filterAgenda(q);
      }
    });
  },

  // TOOLTIP FOLLOWS CURSOR PRECISELY (FIXED POSITION)
  setupTooltipEvents() {
    const tooltip = document.getElementById('chartTooltip');
    window.showChartTooltip = (e, title, val) => {
      if (!tooltip) return;
      tooltip.innerHTML = `<div class="tooltip-title">${title}</div><div class="tooltip-val">${val}</div>`;
      tooltip.classList.add('active');

      // Uses fixed viewport coordinates right above pointer
      tooltip.style.left = `${e.clientX}px`;
      tooltip.style.top = `${e.clientY}px`;
    };

    window.hideChartTooltip = () => {
      if (!tooltip) return;
      tooltip.classList.remove('active');
    };
  },

  // Modals management
  setupModals() {
    document.getElementById('closeProjectModalBtn')?.addEventListener('click', () => {
      document.getElementById('projectModalBackdrop').classList.remove('active');
    });

    document.getElementById('closeBudgetPrintModalBtn')?.addEventListener('click', () => {
      document.getElementById('budgetPrintModalBackdrop').classList.remove('active');
    });

    document.getElementById('closeLeadModalBtn')?.addEventListener('click', () => {
      document.getElementById('leadModalBackdrop').classList.remove('active');
    });
    document.getElementById('btnCancelLead')?.addEventListener('click', () => {
      document.getElementById('leadModalBackdrop').classList.remove('active');
    });

    const leadForm = document.getElementById('newLeadForm');
    leadForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadClientName').value;
      const phone = document.getElementById('leadPhone').value;
      const email = document.getElementById('leadEmail').value;
      const source = document.getElementById('leadSource').value;
      const projectType = document.getElementById('leadProjectType').value;
      const notes = document.getElementById('leadNotes').value;

      const checkedServices = [];
      document.querySelectorAll('input[name="leadServices"]:checked').forEach(cb => {
        checkedServices.push(cb.value);
      });

      const newLead = {
        id: `lead-${Date.now().toString().slice(-4)}`,
        name,
        phone,
        email: email || 'Sin email',
        source: source === 'web_landing' ? 'Web Landing (Filtro)' : source,
        projectType,
        services: checkedServices.length > 0 ? checkedServices : ['Planos de arquitectura'],
        status: 'new_lead',
        estimatedBudget: 15000000,
        notes: notes || 'Consulta cargada desde el ERP',
        date: new Date().toISOString().split('T')[0]
      };

      ERP_DB.leads.unshift(newLead);
      document.getElementById('leadModalBackdrop').classList.remove('active');
      leadForm.reset();
      this.showToast(`Lead registrado con éxito: ${name}`, 'success');
      this.updateBadges();

      if (this.currentView === 'crm') {
        this.renderCRMView();
      }
    });

    // Agenda Modal
    document.getElementById('closeAgendaModalBtn')?.addEventListener('click', () => {
      document.getElementById('agendaModalBackdrop').classList.remove('active');
    });
    document.getElementById('btnCancelAgendaEvent')?.addEventListener('click', () => {
      document.getElementById('agendaModalBackdrop').classList.remove('active');
    });

    const agendaForm = document.getElementById('newAgendaEventForm');
    agendaForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('agendaEventTitle').value;
      const projectId = document.getElementById('agendaEventProject').value;
      const type = document.getElementById('agendaEventType').value;
      const date = document.getElementById('agendaEventDate').value;
      const time = document.getElementById('agendaEventTime').value;
      const responsible = document.getElementById('agendaEventResponsible').value;
      const status = document.getElementById('agendaEventStatus').value;
      const notes = document.getElementById('agendaEventNotes').value;

      const proj = ERP_DB.projects.find(p => p.id === projectId) || ERP_DB.projects[0];

      const typeLabelMap = {
        inspeccion: 'Inspección Municipal',
        dposs: 'Prueba Sanitaria DPOSS',
        dpe: 'Verificación Eléctrica DPE',
        comitente: 'Visita con Comitente',
        hormigon: 'Avance Hormigón',
        entrega: 'Reunión de Entrega'
      };

      const newEvt = {
        id: `evt-${Date.now().toString().slice(-4)}`,
        title,
        projectId: proj.id,
        projectCode: proj.code,
        projectTitle: proj.title,
        type,
        typeLabel: typeLabelMap[type] || 'Hito Técnico',
        date,
        time,
        responsible,
        status,
        notes: notes || 'Sin notas adicionales.'
      };

      ERP_DB.agendaEvents.unshift(newEvt);
      document.getElementById('agendaModalBackdrop').classList.remove('active');
      agendaForm.reset();
      this.showToast(`Hito agendado para el ${date}`, 'success');
      this.updateBadges();

      if (this.currentView === 'agenda' || this.currentView === 'dashboard') {
        this.renderView(this.currentView);
      }
    });

    // Print budget
    document.getElementById('btnPrintBudget')?.addEventListener('click', () => {
      window.print();
    });

    // Send budget via WhatsApp
    document.getElementById('btnSendBudgetWhatsapp')?.addEventListener('click', () => {
      this.sendBudgetViaWhatsApp();
    });
  },

  openLeadModal() {
    document.getElementById('leadModalBackdrop').classList.add('active');
  },

  openAgendaModal() {
    const projSelect = document.getElementById('agendaEventProject');
    if (projSelect) {
      projSelect.innerHTML = ERP_DB.projects.map(p => `
        <option value="${p.id}">${p.code} - ${p.title}</option>
      `).join('');
    }

    const dateInput = document.getElementById('agendaEventDate');
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }

    document.getElementById('agendaModalBackdrop').classList.add('active');
  },

  // View Router
  navigateTo(viewName) {
    this.currentView = viewName;
    window.location.hash = viewName;

    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-view') === viewName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    document.getElementById('sidebar')?.classList.remove('mobile-open');
    this.renderView(viewName);
  },

  renderView(viewName) {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = '';

    switch (viewName) {
      case 'dashboard':
        this.renderDashboardView();
        break;
      case 'agenda':
        this.renderAgendaView();
        break;
      case 'obras':
        this.renderObrasView();
        break;
      case 'presupuestos':
        this.renderPresupuestosView();
        break;
      case 'crm':
        this.renderCRMView();
        break;
      case 'personal':
        this.renderPersonalView();
        break;
      case 'compras':
        this.renderComprasView();
        break;
      case 'documentos':
        this.renderDocumentosView();
        break;
      case 'finanzas':
        this.renderFinanzasView();
        break;
      case 'reportes':
        this.renderReportesView();
        break;
      case 'configuracion':
        this.renderConfiguracionView();
        break;
      default:
        this.renderDashboardView();
        break;
    }

    this.updateBadges();
  },

  updateBadges() {
    const obrasCount = ERP_DB.projects.filter(p => p.status === 'in_progress').length;
    const leadsCount = ERP_DB.leads.filter(l => l.status === 'new_lead' || l.status === 'in_quoting').length;
    const budgetsCount = ERP_DB.budgets.filter(b => b.status === 'sent').length;
    const agendaCount = ERP_DB.agendaEvents.filter(e => e.status !== 'completed').length;

    const elObras = document.getElementById('badgeObrasCount');
    if (elObras) elObras.textContent = obrasCount;

    const elLeads = document.getElementById('badgeLeadsCount');
    if (elLeads) elLeads.textContent = leadsCount;

    const elBudgets = document.getElementById('badgePresupuestos');
    if (elBudgets) elBudgets.textContent = budgetsCount;

    const elAgenda = document.getElementById('badgeAgendaCount');
    if (elAgenda) elAgenda.textContent = agendaCount;
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconMap = { success: '✓', warning: '⚠️', danger: '✕', info: 'ℹ️' };

    toast.innerHTML = `
      <span class="toast-icon">${iconMap[type] || 'ℹ️'}</span>
      <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  formatCurrency(val) {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(val);
  },

  // Dynamic Data Calculation by Period
  getDashboardData(period) {
    switch (period) {
      case 'day':
        return {
          periodLabel: 'Hoy (12 de Septiembre, 2026)',
          obrasActivas: 3,
          obrasSubtitle: 'Con cuadrillas en obra hoy',
          facturacion: 1950000,
          facturacionDelta: '+100% vs promedio diario',
          gastos: 1450000,
          gastosDelta: 'Jornales + fletes del día',
          balanceNeto: 500000,
          margenNeto: '25.6%',
          margenPromedio: '25.6%',
          chartSeries: [
            { label: '08:00', in: 0, out: 240000 },
            { label: '10:00', in: 850000, out: 310000 },
            { label: '12:00', in: 0, out: 280000 },
            { label: '14:00', in: 1100000, out: 420000 },
            { label: '16:00', in: 0, out: 200000 }
          ],
          yMax: 1500000,
          yMaxLabel: '$1.5M'
        };

      case 'week':
        return {
          periodLabel: 'Semana Actual (7 al 12 Sep)',
          obrasActivas: 4,
          obrasSubtitle: 'Obras con partes de avance',
          facturacion: 10500000,
          facturacionDelta: '+15.2% vs semana anterior',
          gastos: 7950000,
          gastosDelta: 'Compra perfiles Steel framing',
          balanceNeto: 2550000,
          margenNeto: '24.3%',
          margenPromedio: '24.3%',
          chartSeries: [
            { label: 'Lun 07', in: 1500000, out: 1100000 },
            { label: 'Mar 08', in: 2800000, out: 2100000 },
            { label: 'Mié 09', in: 1200000, out: 900000 },
            { label: 'Jue 10', in: 2100000, out: 1600000 },
            { label: 'Vie 11', in: 2300000, out: 1750000 },
            { label: 'Sáb 12', in: 600000, out: 500000 }
          ],
          yMax: 3500000,
          yMaxLabel: '$3.5M'
        };

      case 'year':
        return {
          periodLabel: 'Ejercicio Anual 2026',
          obrasActivas: 7,
          obrasSubtitle: 'Total de obras del ciclo',
          facturacion: 245000000,
          facturacionDelta: '+28.4% vs 2025',
          gastos: 185000000,
          gastosDelta: 'Insumos + mano de obra Ushuaia',
          balanceNeto: 60000000,
          margenNeto: '24.5%',
          margenPromedio: '24.5%',
          chartSeries: [
            { label: 'T1 2026', in: 52000000, out: 39500000 },
            { label: 'T2 2026', in: 68000000, out: 51000000 },
            { label: 'T3 2026', in: 81000000, out: 61500000 },
            { label: 'T4 (Est)', in: 44000000, out: 33000000 }
          ],
          yMax: 90000000,
          yMaxLabel: '$90M'
        };

      case 'month':
      default:
        return {
          periodLabel: 'Mes en Curso (Septiembre 2026)',
          obrasActivas: 4,
          obrasSubtitle: 'Obras en ejecución en Ushuaia',
          facturacion: 41850000,
          facturacionDelta: '+12.4% vs meta proyectada',
          gastos: 31700000,
          gastosDelta: '-2.5% eficiencia en compras',
          balanceNeto: 10150000,
          margenNeto: '24.2%',
          margenPromedio: '24.2%',
          chartSeries: [
            { label: 'Abr', in: 31500000, out: 23800000 },
            { label: 'May', in: 34200000, out: 25900000 },
            { label: 'Jun', in: 36800000, out: 27800000 },
            { label: 'Jul', in: 35500000, out: 27100000 },
            { label: 'Ago', in: 39200000, out: 29800000 },
            { label: 'Sep', in: 41850000, out: 31700000 }
          ],
          yMax: 50000000,
          yMaxLabel: '$50M'
        };
    }
  },

  // ========================================================================
  // 3. MODULE: DASHBOARD GENERAL (WITH 3 ADVANCED CHARTS)
  // ========================================================================
  renderDashboardView() {
    const container = document.getElementById('mainViewContainer');
    const data = this.getDashboardData(this.currentTimeFilter);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Panel de Control General</h1>
          <p class="page-description">Dirección y control de obras de INGEMAH • Ushuaia, Tierra del Fuego.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary btn-sm" id="btnExportDashboard">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Exportar Informe</span>
          </button>
          <button class="btn btn-primary btn-sm" id="btnNewProjectDash">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>Nueva Obra</span>
          </button>
        </div>
      </div>

      <!-- PERIOD SELECTOR TOOLBAR -->
      <div class="period-toolbar">
        <div class="period-label-wrap">
          <span class="period-title">Visualizar Período:</span>
          <span class="period-active-date">📅 ${data.periodLabel}</span>
        </div>
        <div class="period-buttons-group">
          <button class="btn-period ${this.currentTimeFilter==='day'?'active':''}" data-period="day">Día</button>
          <button class="btn-period ${this.currentTimeFilter==='week'?'active':''}" data-period="week">Semana</button>
          <button class="btn-period ${this.currentTimeFilter==='month'?'active':''}" data-period="month">Mes</button>
          <button class="btn-period ${this.currentTimeFilter==='year'?'active':''}" data-period="year">Año</button>
        </div>
      </div>

      <!-- 5 KPI METRIC CARDS (INCLUDING BALANCE NETO) -->
      <div class="kpi-grid">
        <!-- 1. Obras Activas -->
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-label">Obras Activas</span>
            <div class="kpi-icon-wrap primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 11h4M6 15h4M14 11h4M14 15h4M9 3l3-2 3 2v4H9V3z"/></svg>
            </div>
          </div>
          <div class="kpi-value">${data.obrasActivas} Obras</div>
          <div class="kpi-bottom">
            <span class="kpi-delta up">● Ushuaia</span>
            <span>${data.obrasSubtitle}</span>
          </div>
        </div>

        <!-- 2. Facturación / Ingresos -->
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-label">Ingresos Facturados</span>
            <div class="kpi-icon-wrap success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
          </div>
          <div class="kpi-value">${this.formatCurrency(data.facturacion)}</div>
          <div class="kpi-bottom">
            <span class="kpi-delta up">↑</span>
            <span>${data.facturacionDelta}</span>
          </div>
        </div>

        <!-- 3. Costos / Egresos -->
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-label">Costos & Compras</span>
            <div class="kpi-icon-wrap warning">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </div>
          </div>
          <div class="kpi-value">${this.formatCurrency(data.gastos)}</div>
          <div class="kpi-bottom">
            <span class="kpi-delta down">↓</span>
            <span>${data.gastosDelta}</span>
          </div>
        </div>

        <!-- 4. BALANCE NETO OPERATIVO -->
        <div class="kpi-card kpi-net-balance">
          <div class="kpi-top">
            <span class="kpi-label" style="color:#047857;">Balance Neto Operativo</span>
            <div class="kpi-icon-wrap emerald">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <div class="kpi-value net-profit">+${this.formatCurrency(data.balanceNeto)}</div>
          <div class="kpi-bottom">
            <span class="badge badge-success">Margen Neto: ${data.margenNeto}</span>
            <span>Superávit</span>
          </div>
        </div>

        <!-- 5. Margen Operativo % -->
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-label">Rentabilidad Media</span>
            <div class="kpi-icon-wrap info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
          </div>
          <div class="kpi-value">${data.margenPromedio}</div>
          <div class="kpi-bottom">
            <span class="kpi-delta up">↑ +2.4%</span>
            <span>vs histórico</span>
          </div>
        </div>
      </div>

      <!-- CHARTS ROW 1: FLUJO FINANCIERO & SERVICIOS -->
      <div class="charts-grid">
        <!-- Chart 1: Financial Flow (Supports Barras, Líneas, Área, Dona, Torta & Unidad $ vs %) -->
        <div class="chart-card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Flujo Financiero (Ingresos vs. Egresos)</h3>
              <p class="card-subtitle">Pase el cursor sobre los datos para ver detalles exactos</p>
            </div>
            <div class="chart-controls-group">
              <!-- Visualización: Montos vs Porcentaje -->
              <div class="chart-unit-switcher" id="financialUnitSwitcher">
                <button class="unit-btn ${this.financialUnit==='currency'?'active':''}" data-unit="currency">💵 Montos ($)</button>
                <button class="unit-btn ${this.financialUnit==='percent'?'active':''}" data-unit="percent">📊 Porcentaje (%)</button>
              </div>
              <!-- Formato de gráfico -->
              <div class="chart-type-switcher" id="financialChartSwitcher">
                <button class="chart-type-btn ${this.financialChartType==='bars'?'active':''}" data-chart-type="bars">📊 Barras</button>
                <button class="chart-type-btn ${this.financialChartType==='lines'?'active':''}" data-chart-type="lines">📈 Líneas</button>
                <button class="chart-type-btn ${this.financialChartType==='area'?'active':''}" data-chart-type="area">🌊 Área</button>
                <button class="chart-type-btn ${this.financialChartType==='donut'?'active':''}" data-chart-type="donut">🍩 Dona</button>
                <button class="chart-type-btn ${this.financialChartType==='pie'?'active':''}" data-chart-type="pie">🥧 Torta</button>
              </div>
            </div>
          </div>
          <div class="chart-svg-wrap" id="financialChartContainer">
            ${this.renderFinancialChartSvg(data, this.financialChartType, this.financialUnit)}
          </div>
        </div>

        <!-- Chart 2: Services Distribution (Dona, Torta, Barras & Unidad % vs $) -->
        <div class="chart-card">
          <div class="chart-header">
            <div>
              <h3 class="chart-title">Servicios Más Solicitados</h3>
              <p class="card-subtitle">Participación de mercado en Ushuaia</p>
            </div>
            <div class="chart-controls-group">
              <!-- Visualización: Porcentaje vs Montos -->
              <div class="chart-unit-switcher" id="servicesUnitSwitcher">
                <button class="unit-btn ${this.servicesUnit==='percent'?'active':''}" data-unit="percent">📊 % Porcentaje</button>
                <button class="unit-btn ${this.servicesUnit==='currency'?'active':''}" data-unit="currency">💵 $ Montos</button>
              </div>
              <div class="chart-type-switcher" id="servicesChartSwitcher">
                <button class="chart-type-btn ${this.servicesChartType==='donut'?'active':''}" data-service-type="donut">🍩 Dona</button>
                <button class="chart-type-btn ${this.servicesChartType==='pie'?'active':''}" data-service-type="pie">🥧 Torta</button>
                <button class="chart-type-btn ${this.servicesChartType==='bars'?'active':''}" data-service-type="bars">📋 Barras</button>
              </div>
            </div>
          </div>
          <div class="chart-svg-wrap" id="servicesChartContainer">
            ${this.renderServicesChartSvg(this.servicesChartType, this.servicesUnit)}
          </div>
        </div>
      </div>

      <!-- CHARTS ROW 2 (NUEVO): CONTROL DE AVANCE Y ESTADO DE OBRAS EN PROCESO -->
      <div class="card" style="margin-bottom:26px;">
        <div class="card-header">
          <div>
            <h3 class="card-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Control de Avance y Estado de Obras en Proceso
            </h3>
            <p class="card-subtitle">Monitoreo del avance físico real vs. programado y control de desvíos en Ushuaia</p>
          </div>
          <div style="display:flex; gap:10px; align-items:center;">
            <span class="badge badge-primary">3 En Ejecución</span>
            <span class="badge badge-warning">1 En Planificación</span>
            <button class="btn btn-secondary btn-sm" onclick="App.navigateTo('obras')">Ver Fichas de Obra →</button>
          </div>
        </div>

        <!-- Projects Progress Tracker Table & Bars -->
        <div class="table-responsive">
          <table class="table" style="font-size:0.95rem;">
            <thead>
              <tr>
                <th style="width:12%;">Código</th>
                <th style="width:28%;">Obra & Comitente</th>
                <th style="width:24%;">Avance Físico (% Real vs Programado)</th>
                <th style="width:14%;">Presupuesto Acordado</th>
                <th style="width:12%;">Costo Ejecutado</th>
                <th style="width:10%;">Estado</th>
              </tr>
            </thead>
            <tbody>
              ${ERP_DB.projects.map(p => {
                const isDelay = p.progress < p.targetProgress;
                return `
                  <tr style="cursor:pointer;" onclick="App.openProjectDetailModal('${p.id}')">
                    <td><strong style="color:var(--primary-600);">${p.code}</strong></td>
                    <td>
                      <strong>${p.title}</strong>
                      <div style="font-size:0.8rem; color:var(--text-muted);">${p.clientName} • 📍 ${p.location}</div>
                    </td>
                    <td>
                      <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:700; margin-bottom:4px;">
                        <span>Avance: <strong>${p.progress}%</strong></span>
                        <span style="color:var(--text-muted);">Meta: ${p.targetProgress}%</span>
                      </div>
                      <div class="progress-bar-bg" style="height:12px;" 
                        onmousemove="showChartTooltip(event, '${p.title}', 'Avance Físico: ${p.progress}% | Meta: ${p.targetProgress}%')"
                        onmouseout="hideChartTooltip()">
                        <div class="progress-bar-fill" style="width: ${p.progress}%; background:${p.progress>=90?'#10b981':(p.progress>=40?'#0088d6':'#f59e0b')};"></div>
                      </div>
                    </td>
                    <td><strong>${this.formatCurrency(p.totalBudget)}</strong></td>
                    <td>${this.formatCurrency(p.actualCost)}</td>
                    <td>
                      <span class="badge ${p.status==='in_progress'?'badge-primary':'badge-warning'}">
                        ${p.statusLabel}
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- AGENDA DE HITOS & VISITAS A OBRA -->
      <div class="card" style="margin-bottom:26px;">
        <div class="agenda-section-header">
          <div>
            <h3 class="card-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
              Agenda de Hitos & Visitas a Obra en Ushuaia
            </h3>
            <span class="card-subtitle">Inspecciones municipales, pruebas DPOSS/DPE y verificaciones con comitentes</span>
          </div>
          <div style="display:flex; align-items:center; gap:12px;">
            <div class="period-buttons-group">
              <button class="btn-period ${this.agendaFilter==='upcoming'?'active':''}" data-agenda-filter="upcoming">Próximas</button>
              <button class="btn-period ${this.agendaFilter==='all'?'active':''}" data-agenda-filter="all">Todas</button>
              <button class="btn-period ${this.agendaFilter==='completed'?'active':''}" data-agenda-filter="completed">Realizadas</button>
            </div>
            <button class="btn btn-primary btn-sm" id="btnOpenAddAgendaDash">
              + Agendar Visita
            </button>
          </div>
        </div>

        <div class="agenda-cards-list">
          ${this.renderAgendaItemsHtml(this.agendaFilter)}
        </div>
      </div>
    `;

    // Attach Period Switcher Events
    document.querySelectorAll('.btn-period[data-period]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentTimeFilter = btn.getAttribute('data-period');
        this.showToast(`Panel actualizado para: ${btn.textContent.trim()}`, 'info');
        this.renderDashboardView();
      });
    });

    // Attach Financial Unit Switcher Events ($ vs %)
    document.querySelectorAll('#financialUnitSwitcher .unit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.financialUnit = btn.getAttribute('data-unit');
        this.showToast(`Modo cambiado a: ${btn.textContent.trim()}`, 'info');
        this.renderDashboardView();
      });
    });

    // Attach Financial Chart Switcher Events
    document.querySelectorAll('#financialChartSwitcher .chart-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.financialChartType = btn.getAttribute('data-chart-type');
        this.renderDashboardView();
      });
    });

    // Attach Services Unit Switcher Events (% vs $)
    document.querySelectorAll('#servicesUnitSwitcher .unit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.servicesUnit = btn.getAttribute('data-unit');
        this.showToast(`Servicios cambiados a: ${btn.textContent.trim()}`, 'info');
        this.renderDashboardView();
      });
    });

    // Attach Services Chart Switcher Events
    document.querySelectorAll('#servicesChartSwitcher .chart-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.servicesChartType = btn.getAttribute('data-service-type');
        this.renderDashboardView();
      });
    });

    // Agenda Tab Filters
    document.querySelectorAll('.btn-period[data-agenda-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.agendaFilter = btn.getAttribute('data-agenda-filter');
        this.renderDashboardView();
      });
    });

    document.getElementById('btnOpenAddAgendaDash')?.addEventListener('click', () => {
      this.openAgendaModal();
    });

    this.attachAgendaActions();

    document.getElementById('btnExportDashboard')?.addEventListener('click', () => {
      this.showToast('Generando informe ejecutivo del período en PDF...', 'success');
      setTimeout(() => window.print(), 500);
    });

    document.getElementById('btnNewProjectDash')?.addEventListener('click', () => {
      this.navigateTo('obras');
      this.openNewProjectModal();
    });
  },

  // ========================================================================
  // 4. FINANCIAL CHART SVG (BARS / LINES / AREA / DONUT / PIE) - ($ & % MODES)
  // ========================================================================
  renderFinancialChartSvg(data, type, unit = 'currency') {
    const series = data.chartSeries;
    const count = series.length;
    const svgWidth = 680;
    const svgHeight = 240;
    const paddingLeft = 70;
    const paddingRight = 30;
    const paddingTop = 26;
    const paddingBottom = 40;
    const chartWidth = svgWidth - paddingLeft - paddingRight;
    const chartHeight = svgHeight - paddingTop - paddingBottom;
    const yMax = data.yMax;
    const isPercent = unit === 'percent';

    // 1. DONUT VIEW FOR FINANCIAL FLOW
    if (type === 'donut') {
      const totalIn = data.facturacion;
      const totalOut = data.gastos;
      const totalSum = totalIn + totalOut;
      const inPct = Math.round((totalIn / totalSum) * 100);
      const outPct = 100 - inPct;

      const circum = 2 * Math.PI * 65; // ~408.4
      const inLen = (inPct / 100) * circum;
      const outLen = (outPct / 100) * circum;

      return `
        <div style="display:flex; align-items:center; justify-content:center; gap:26px; height:100%;">
          <svg viewBox="0 0 200 200" width="180" height="180">
            <!-- Incomes Slice (Blue) -->
            <circle class="chart-interactive-slice" r="65" cx="100" cy="100" fill="transparent"
              stroke="#0088d6" stroke-width="26" stroke-dasharray="${inLen} ${circum - inLen}" stroke-dashoffset="0"
              onmousemove="showChartTooltip(event, 'Ingresos Facturados • ${inPct}% del flujo', '${this.formatCurrency(totalIn)}')"
              onmouseout="hideChartTooltip()"/>
            <!-- Expenses Slice (Red) -->
            <circle class="chart-interactive-slice" r="65" cx="100" cy="100" fill="transparent"
              stroke="#ef4444" stroke-width="26" stroke-dasharray="${outLen} ${circum - outLen}" stroke-dashoffset="-${inLen}"
              onmousemove="showChartTooltip(event, 'Costos & Egresos • ${outPct}% del flujo', '${this.formatCurrency(totalOut)}')"
              onmouseout="hideChartTooltip()"/>
            <text x="100" y="93" text-anchor="middle" font-size="12" font-weight="800" fill="var(--text-primary)">${isPercent ? 'MARGEN NETO' : 'BALANCE NETO'}</text>
            <text x="100" y="115" text-anchor="middle" font-size="${isPercent ? '16' : '13'}" font-weight="800" fill="#059669">+${isPercent ? data.margenNeto : this.formatCurrency(data.balanceNeto)}</text>
          </svg>
          <div style="display:flex; flex-direction:column; gap:10px; font-size:0.92rem; font-weight:700;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:12px; height:12px; background:#0088d6; border-radius:3px;"></span>
              <span>Ingresos Facturados: <strong style="color:var(--primary-600); font-size:1.02rem;">${isPercent ? inPct + '%' : this.formatCurrency(totalIn)}</strong> <span style="font-weight:600; color:var(--text-muted);">(${isPercent ? this.formatCurrency(totalIn) : inPct + '%'})</span></span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:12px; height:12px; background:#ef4444; border-radius:3px;"></span>
              <span>Costos & Compras: <strong style="color:#ef4444; font-size:1.02rem;">${isPercent ? outPct + '%' : this.formatCurrency(totalOut)}</strong> <span style="font-weight:600; color:var(--text-muted);">(${isPercent ? this.formatCurrency(totalOut) : outPct + '%'})</span></span>
            </div>
            <div style="display:flex; align-items:center; gap:8px; border-top:1px solid var(--border-color); padding-top:8px; color:#059669;">
              <span style="width:12px; height:12px; background:#10b981; border-radius:3px;"></span>
              <span>Balance Neto Operativo: <strong style="font-size:1.05rem;">+${isPercent ? data.margenNeto : this.formatCurrency(data.balanceNeto)}</strong> <span style="font-weight:600; color:var(--text-muted);">(${isPercent ? '+' + this.formatCurrency(data.balanceNeto) : data.margenNeto})</span></span>
            </div>
          </div>
        </div>
      `;
    }

    // 2. PIE VIEW FOR FINANCIAL FLOW
    if (type === 'pie') {
      const totalIn = data.facturacion;
      const totalOut = data.gastos;
      const totalSum = totalIn + totalOut;
      const inPct = Math.round((totalIn / totalSum) * 100);
      const outPct = 100 - inPct;

      const circum = 2 * Math.PI * 45; // ~282.7
      const inLen = (inPct / 100) * circum;
      const outLen = (outPct / 100) * circum;

      return `
        <div style="display:flex; align-items:center; justify-content:center; gap:26px; height:100%;">
          <svg viewBox="0 0 200 200" width="180" height="180">
            <!-- Incomes Wedge -->
            <circle class="chart-interactive-slice" r="45" cx="100" cy="100" fill="transparent"
              stroke="#0088d6" stroke-width="90" stroke-dasharray="${inLen} ${circum - inLen}" stroke-dashoffset="0"
              onmousemove="showChartTooltip(event, 'Ingresos Facturados • ${inPct}%', '${this.formatCurrency(totalIn)}')"
              onmouseout="hideChartTooltip()"/>
            <!-- Expenses Wedge -->
            <circle class="chart-interactive-slice" r="45" cx="100" cy="100" fill="transparent"
              stroke="#ef4444" stroke-width="90" stroke-dasharray="${outLen} ${circum - outLen}" stroke-dashoffset="-${inLen}"
              onmousemove="showChartTooltip(event, 'Costos & Egresos • ${outPct}%', '${this.formatCurrency(totalOut)}')"
              onmouseout="hideChartTooltip()"/>
          </svg>
          <div style="display:flex; flex-direction:column; gap:10px; font-size:0.92rem; font-weight:700;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:12px; height:12px; background:#0088d6; border-radius:3px;"></span>
              <span>Ingresos: <strong style="color:var(--primary-600);">${isPercent ? inPct + '%' : this.formatCurrency(totalIn)}</strong> <span style="color:var(--text-muted); font-size:0.85rem;">(${isPercent ? this.formatCurrency(totalIn) : inPct + '%'})</span></span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:12px; height:12px; background:#ef4444; border-radius:3px;"></span>
              <span>Costos: <strong style="color:#ef4444;">${isPercent ? outPct + '%' : this.formatCurrency(totalOut)}</strong> <span style="color:var(--text-muted); font-size:0.85rem;">(${isPercent ? this.formatCurrency(totalOut) : outPct + '%'})</span></span>
            </div>
            <div style="display:flex; align-items:center; gap:8px; border-top:1px solid var(--border-color); padding-top:8px; color:#059669;">
              <span style="width:12px; height:12px; background:#10b981; border-radius:3px;"></span>
              <span>Superávit Neto: <strong>+${isPercent ? data.margenNeto : this.formatCurrency(data.balanceNeto)}</strong></span>
            </div>
          </div>
        </div>
      `;
    }

    // Grid lines for Bars / Lines / Area
    let gridHtml = '';
    if (isPercent) {
      gridHtml = `
        <line x1="${paddingLeft}" y1="${paddingTop}" x2="${svgWidth - paddingRight}" y2="${paddingTop}" stroke="var(--border-color)" stroke-dasharray="3"/>
        <line x1="${paddingLeft}" y1="${paddingTop + chartHeight * 0.25}" x2="${svgWidth - paddingRight}" y2="${paddingTop + chartHeight * 0.25}" stroke="var(--border-color)" stroke-dasharray="3"/>
        <line x1="${paddingLeft}" y1="${paddingTop + chartHeight * 0.5}" x2="${svgWidth - paddingRight}" y2="${paddingTop + chartHeight * 0.5}" stroke="var(--border-color)" stroke-dasharray="3"/>
        <line x1="${paddingLeft}" y1="${paddingTop + chartHeight * 0.75}" x2="${svgWidth - paddingRight}" y2="${paddingTop + chartHeight * 0.75}" stroke="var(--border-color)" stroke-dasharray="3"/>
        <line x1="${paddingLeft}" y1="${paddingTop + chartHeight}" x2="${svgWidth - paddingRight}" y2="${paddingTop + chartHeight}" stroke="var(--border-color)"/>
        <text x="${paddingLeft - 12}" y="${paddingTop + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">100%</text>
        <text x="${paddingLeft - 12}" y="${paddingTop + chartHeight * 0.25 + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">75%</text>
        <text x="${paddingLeft - 12}" y="${paddingTop + chartHeight * 0.5 + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">50%</text>
        <text x="${paddingLeft - 12}" y="${paddingTop + chartHeight * 0.75 + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">25%</text>
        <text x="${paddingLeft - 12}" y="${paddingTop + chartHeight + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">0%</text>
      `;
    } else {
      gridHtml = `
        <line x1="${paddingLeft}" y1="${paddingTop}" x2="${svgWidth - paddingRight}" y2="${paddingTop}" stroke="var(--border-color)" stroke-dasharray="3"/>
        <line x1="${paddingLeft}" y1="${paddingTop + chartHeight * 0.33}" x2="${svgWidth - paddingRight}" y2="${paddingTop + chartHeight * 0.33}" stroke="var(--border-color)" stroke-dasharray="3"/>
        <line x1="${paddingLeft}" y1="${paddingTop + chartHeight * 0.66}" x2="${svgWidth - paddingRight}" y2="${paddingTop + chartHeight * 0.66}" stroke="var(--border-color)" stroke-dasharray="3"/>
        <line x1="${paddingLeft}" y1="${paddingTop + chartHeight}" x2="${svgWidth - paddingRight}" y2="${paddingTop + chartHeight}" stroke="var(--border-color)"/>
        <text x="${paddingLeft - 12}" y="${paddingTop + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">${data.yMaxLabel}</text>
        <text x="${paddingLeft - 12}" y="${paddingTop + chartHeight * 0.5 + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">${this.formatCurrency(yMax / 2)}</text>
        <text x="${paddingLeft - 12}" y="${paddingTop + chartHeight + 4}" font-size="12" font-weight="700" fill="var(--text-muted)" text-anchor="end">$0</text>
      `;
    }

    // 3. BARS
    if (type === 'bars') {
      const step = chartWidth / count;
      const barWidth = Math.min(28, step * 0.35);

      const barsHtml = series.map((s, i) => {
        const xCenter = paddingLeft + i * step + step / 2;
        let inHeight, outHeight, inY, outY, inTooltip, outTooltip, badgeHtml;

        if (isPercent) {
          const costRatio = s.in > 0 ? (s.out / s.in) * 100 : 0;
          const marginRatio = (100 - costRatio).toFixed(1);
          const costPctStr = costRatio.toFixed(1);

          inHeight = chartHeight;
          outHeight = Math.min(chartHeight, (costRatio / 100) * chartHeight);
          inY = paddingTop;
          outY = paddingTop + chartHeight - outHeight;

          inTooltip = `showChartTooltip(event, '${s.label} • Ingresos Base (100%)', '${this.formatCurrency(s.in)} facturados')`;
          outTooltip = `showChartTooltip(event, '${s.label} • Costos: ${costPctStr}%', '${this.formatCurrency(s.out)} (Margen: +${marginRatio}%)')`;
          badgeHtml = `<text x="${xCenter}" y="${paddingTop - 8}" font-size="11" font-weight="800" fill="#059669" text-anchor="middle">+${marginRatio}%</text>`;
        } else {
          inHeight = (s.in / yMax) * chartHeight;
          outHeight = (s.out / yMax) * chartHeight;
          inY = paddingTop + chartHeight - inHeight;
          outY = paddingTop + chartHeight - outHeight;

          inTooltip = `showChartTooltip(event, '${s.label} • Ingreso Facturado', '${this.formatCurrency(s.in)}')`;
          outTooltip = `showChartTooltip(event, '${s.label} • Costos & Egresos', '${this.formatCurrency(s.out)}')`;
          badgeHtml = '';
        }

        return `
          ${badgeHtml}
          <rect class="chart-interactive-bar" x="${xCenter - barWidth - 3}" y="${inY}" width="${barWidth}" height="${inHeight}" fill="#0088d6" rx="4"
            onmousemove="${inTooltip}"
            onmouseout="hideChartTooltip()"/>

          <rect class="chart-interactive-bar" x="${xCenter + 3}" y="${outY}" width="${barWidth}" height="${outHeight}" fill="#ef4444" rx="4"
            onmousemove="${outTooltip}"
            onmouseout="hideChartTooltip()"/>

          <text x="${xCenter}" y="${svgHeight - 12}" font-size="12" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">${s.label}</text>
        `;
      }).join('');

      return `
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
          ${gridHtml}
          ${barsHtml}
        </svg>
      `;
    }

    // 4. LINES
    if (type === 'lines') {
      const step = chartWidth / (count - 1 || 1);

      if (isPercent) {
        const inPoints = series.map((s, i) => ({
          x: paddingLeft + i * step,
          y: paddingTop,
          s
        }));
        const outPoints = series.map((s, i) => {
          const costRatio = s.in > 0 ? (s.out / s.in) * 100 : 0;
          return {
            x: paddingLeft + i * step,
            y: paddingTop + chartHeight - (costRatio / 100) * chartHeight,
            costRatio,
            marginRatio: (100 - costRatio).toFixed(1),
            s
          };
        });
        const marginPoints = series.map((s, i) => {
          const marginRatio = s.in > 0 ? ((s.in - s.out) / s.in) * 100 : 0;
          return {
            x: paddingLeft + i * step,
            y: paddingTop + chartHeight - (marginRatio / 100) * chartHeight,
            marginRatio: marginRatio.toFixed(1),
            s
          };
        });

        const inPathD = inPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        const outPathD = outPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        const marginPathD = marginPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

        const pointsHtml = series.map((s, i) => {
          const costRatio = outPoints[i].costRatio.toFixed(1);
          const marginRatio = outPoints[i].marginRatio;
          return `
            <circle class="chart-interactive-point" cx="${inPoints[i].x}" cy="${inPoints[i].y}" r="5" fill="#0088d6" stroke="#ffffff" stroke-width="2"
              onmousemove="showChartTooltip(event, '${s.label} • Ingreso Base: 100%', '${this.formatCurrency(s.in)}')"
              onmouseout="hideChartTooltip()"/>
            <circle class="chart-interactive-point" cx="${outPoints[i].x}" cy="${outPoints[i].y}" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"
              onmousemove="showChartTooltip(event, '${s.label} • Costos: ${costRatio}%', '${this.formatCurrency(s.out)}')"
              onmouseout="hideChartTooltip()"/>
            <circle class="chart-interactive-point" cx="${marginPoints[i].x}" cy="${marginPoints[i].y}" r="6" fill="#10b981" stroke="#ffffff" stroke-width="2"
              onmousemove="showChartTooltip(event, '${s.label} • Margen Neto: +${marginRatio}%', '+${this.formatCurrency(s.in - s.out)}')"
              onmouseout="hideChartTooltip()"/>
            <text x="${inPoints[i].x}" y="${svgHeight - 12}" font-size="12" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">${s.label}</text>
          `;
        }).join('');

        return `
          <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
            ${gridHtml}
            <path d="${inPathD}" fill="none" stroke="#0088d6" stroke-width="3" stroke-linecap="round"/>
            <path d="${outPathD}" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
            <path d="${marginPathD}" fill="none" stroke="#10b981" stroke-width="3.5" stroke-dasharray="5 3" stroke-linecap="round"/>
            ${pointsHtml}
          </svg>
        `;
      } else {
        const inPoints = series.map((s, i) => ({
          x: paddingLeft + i * step,
          y: paddingTop + chartHeight - (s.in / yMax) * chartHeight,
          s
        }));
        const outPoints = series.map((s, i) => ({
          x: paddingLeft + i * step,
          y: paddingTop + chartHeight - (s.out / yMax) * chartHeight,
          s
        }));

        const inPathD = inPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
        const outPathD = outPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

        const pointsHtml = series.map((s, i) => `
          <circle class="chart-interactive-point" cx="${inPoints[i].x}" cy="${inPoints[i].y}" r="6" fill="#0088d6" stroke="#ffffff" stroke-width="2"
            onmousemove="showChartTooltip(event, '${s.label} • Ingreso Facturado', '${this.formatCurrency(s.in)}')"
            onmouseout="hideChartTooltip()"/>
          <circle class="chart-interactive-point" cx="${outPoints[i].x}" cy="${outPoints[i].y}" r="6" fill="#ef4444" stroke="#ffffff" stroke-width="2"
            onmousemove="showChartTooltip(event, '${s.label} • Costos & Egresos', '${this.formatCurrency(s.out)}')"
            onmouseout="hideChartTooltip()"/>
          <text x="${inPoints[i].x}" y="${svgHeight - 12}" font-size="12" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">${s.label}</text>
        `).join('');

        return `
          <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
            ${gridHtml}
            <path d="${inPathD}" fill="none" stroke="#0088d6" stroke-width="3.5" stroke-linecap="round"/>
            <path d="${outPathD}" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
            ${pointsHtml}
          </svg>
        `;
      }
    }

    // 5. AREA
    if (type === 'area') {
      const step = chartWidth / (count - 1 || 1);

      if (isPercent) {
        const inPoints = series.map((s, i) => ({
          x: paddingLeft + i * step,
          y: paddingTop,
          s
        }));
        const outPoints = series.map((s, i) => {
          const costRatio = s.in > 0 ? (s.out / s.in) * 100 : 0;
          return {
            x: paddingLeft + i * step,
            y: paddingTop + chartHeight - (costRatio / 100) * chartHeight,
            costRatio,
            marginRatio: (100 - costRatio).toFixed(1),
            s
          };
        });

        const topY = paddingTop;
        const bottomY = paddingTop + chartHeight;

        // Margin Area: Between outPoints line and 100% top line
        const marginAreaD = `M ${inPoints[0].x} ${topY} ` +
          inPoints.map(p => `L ${p.x} ${topY}`).join(' ') +
          outPoints.slice().reverse().map(p => ` L ${p.x} ${p.y}`).join('') +
          ` Z`;

        // Cost Area: Between 0 bottom line and outPoints line
        const costAreaD = `${outPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')} L ${outPoints[count - 1].x} ${bottomY} L ${outPoints[0].x} ${bottomY} Z`;

        const pointsHtml = series.map((s, i) => {
          const costRatio = outPoints[i].costRatio.toFixed(1);
          const marginRatio = outPoints[i].marginRatio;
          return `
            <circle class="chart-interactive-point" cx="${outPoints[i].x}" cy="${outPoints[i].y}" r="6" fill="#10b981" stroke="#ffffff" stroke-width="2"
              onmousemove="showChartTooltip(event, '${s.label} • Margen Neto: +${marginRatio}%', 'Ingresos: ${this.formatCurrency(s.in)} | Costos: ${costRatio}% (${this.formatCurrency(s.out)})')"
              onmouseout="hideChartTooltip()"/>
            <text x="${outPoints[i].x}" y="${svgHeight - 12}" font-size="12" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">${s.label}</text>
          `;
        }).join('');

        return `
          <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
            <defs>
              <linearGradient id="gradMarginPct" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="#10b981" stop-opacity="0.15"/>
              </linearGradient>
              <linearGradient id="gradCostPct" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.45"/>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.08"/>
              </linearGradient>
            </defs>
            ${gridHtml}
            <path d="${marginAreaD}" fill="url(#gradMarginPct)"/>
            <path d="${costAreaD}" fill="url(#gradCostPct)"/>
            <path d="${inPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}" fill="none" stroke="#0088d6" stroke-width="3"/>
            <path d="${outPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4"/>
            ${pointsHtml}
          </svg>
        `;
      } else {
        const inPoints = series.map((s, i) => ({
          x: paddingLeft + i * step,
          y: paddingTop + chartHeight - (s.in / yMax) * chartHeight,
          s
        }));
        const outPoints = series.map((s, i) => ({
          x: paddingLeft + i * step,
          y: paddingTop + chartHeight - (s.out / yMax) * chartHeight,
          s
        }));

        const inAreaD = `${inPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')} L ${inPoints[count - 1].x} ${paddingTop + chartHeight} L ${inPoints[0].x} ${paddingTop + chartHeight} Z`;
        const outAreaD = `${outPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')} L ${outPoints[count - 1].x} ${paddingTop + chartHeight} L ${outPoints[0].x} ${paddingTop + chartHeight} Z`;

        const pointsHtml = series.map((s, i) => `
          <circle class="chart-interactive-point" cx="${inPoints[i].x}" cy="${inPoints[i].y}" r="6" fill="#0088d6" stroke="#ffffff" stroke-width="2"
            onmousemove="showChartTooltip(event, '${s.label} • Balance Neto: +${this.formatCurrency(s.in - s.out)}', 'Ingreso: ${this.formatCurrency(s.in)} / Egreso: ${this.formatCurrency(s.out)}')"
            onmouseout="hideChartTooltip()"/>
          <text x="${inPoints[i].x}" y="${svgHeight - 12}" font-size="12" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">${s.label}</text>
        `).join('');

        return `
          <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%">
            <defs>
              <linearGradient id="gradIn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#0088d6" stop-opacity="0.55"/>
                <stop offset="100%" stop-color="#0088d6" stop-opacity="0.05"/>
              </linearGradient>
              <linearGradient id="gradOut" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.45"/>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.05"/>
              </linearGradient>
            </defs>
            ${gridHtml}
            <path d="${inAreaD}" fill="url(#gradIn)"/>
            <path d="${inPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}" fill="none" stroke="#0088d6" stroke-width="3.5"/>
            <path d="${outAreaD}" fill="url(#gradOut)"/>
            <path d="${outPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')}" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4"/>
            ${pointsHtml}
          </svg>
        `;
      }
    }

    return '';
  },

  // Services Chart SVG - ($ & % MODES)
  renderServicesChartSvg(type, unit = 'percent') {
    const isPercent = unit === 'percent';
    const servicesData = [
      { name: 'Llave en Mano', pct: 40, color: '#0088d6', total: 16740000 },
      { name: 'Estructura CIRSOC', pct: 25, color: '#0284c7', total: 10462500 },
      { name: 'Planos Arq. & Sanitaria', pct: 20, color: '#38bdf8', total: 8370000 },
      { name: 'Refacciones & Renders', pct: 15, color: '#94a3b8', total: 6277500 }
    ];

    if (type === 'donut') {
      const circum = 2 * Math.PI * 70;
      let offsetAcc = 0;

      const slicesHtml = servicesData.map(s => {
        const sliceLen = (s.pct / 100) * circum;
        const currentOffset = offsetAcc;
        offsetAcc += sliceLen;

        return `
          <circle class="chart-interactive-slice" r="70" cx="110" cy="110" fill="transparent"
            stroke="${s.color}" stroke-width="26"
            stroke-dasharray="${sliceLen} ${circum - sliceLen}"
            stroke-dashoffset="-${currentOffset}"
            onmousemove="showChartTooltip(event, '${s.name} (${s.pct}%)', '${this.formatCurrency(s.total)} en obras')"
            onmouseout="hideChartTooltip()"/>
        `;
      }).join('');

      return `
        <div style="display:flex; align-items:center; justify-content:center; gap:20px; height:100%;">
          <svg viewBox="0 0 220 220" width="180" height="180">
            ${slicesHtml}
            <text x="110" y="105" text-anchor="middle" font-size="16" font-weight="800" fill="var(--text-primary)">INGEMAH</text>
            <text x="110" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-muted)">10 SERVICIOS</text>
          </svg>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.88rem; font-weight:700;">
            ${servicesData.map(s => `
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="width:10px; height:10px; background:${s.color}; border-radius:3px;"></span>
                <span>${s.name}: <strong style="color:${s.color};">${isPercent ? s.pct + '%' : this.formatCurrency(s.total)}</strong> <span style="color:var(--text-muted); font-size:0.82rem;">(${isPercent ? this.formatCurrency(s.total) : s.pct + '%'})</span></span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (type === 'pie') {
      const circum = 2 * Math.PI * 45;
      let offsetAcc = 0;

      const slicesHtml = servicesData.map(s => {
        const sliceLen = (s.pct / 100) * circum;
        const currentOffset = offsetAcc;
        offsetAcc += sliceLen;

        return `
          <circle class="chart-interactive-slice" r="45" cx="110" cy="110" fill="transparent"
            stroke="${s.color}" stroke-width="90"
            stroke-dasharray="${sliceLen} ${circum - sliceLen}"
            stroke-dashoffset="-${currentOffset}"
            onmousemove="showChartTooltip(event, '${s.name}', '${s.pct}% del volumen (${this.formatCurrency(s.total)})')"
            onmouseout="hideChartTooltip()"/>
        `;
      }).join('');

      return `
        <div style="display:flex; align-items:center; justify-content:center; gap:20px; height:100%;">
          <svg viewBox="0 0 220 220" width="180" height="180">
            ${slicesHtml}
          </svg>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.88rem; font-weight:700;">
            ${servicesData.map(s => `
              <div style="display:flex; align-items:center; gap:8px;">
                <span style="width:10px; height:10px; background:${s.color}; border-radius:3px;"></span>
                <span>${s.name}: <strong style="color:${s.color};">${isPercent ? s.pct + '%' : this.formatCurrency(s.total)}</strong> <span style="color:var(--text-muted); font-size:0.82rem;">(${isPercent ? this.formatCurrency(s.total) : s.pct + '%'})</span></span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (type === 'bars') {
      return `
        <div style="display:flex; flex-direction:column; justify-content:center; gap:16px; padding:10px 14px; height:100%;">
          ${servicesData.map(s => `
            <div>
              <div style="display:flex; justify-content:space-between; font-size:0.9rem; font-weight:800; margin-bottom:5px;">
                <span>${s.name}</span>
                <span><strong style="color:var(--primary-600);">${isPercent ? s.pct + '%' : this.formatCurrency(s.total)}</strong> <span style="color:var(--text-muted); font-size:0.82rem;">(${isPercent ? this.formatCurrency(s.total) : s.pct + '%'})</span></span>
              </div>
              <div style="width:100%; height:12px; background:var(--slate-200); border-radius:999px; overflow:hidden;">
                <div class="chart-interactive-bar" style="width:${s.pct}%; height:100%; background:${s.color}; border-radius:999px;"
                  onmousemove="showChartTooltip(event, '${s.name}', '${s.pct}% • ${this.formatCurrency(s.total)}')"
                  onmouseout="hideChartTooltip()"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    return '';
  },

  // ========================================================================
  // 5. MODULE: GESTIÓN DE OBRAS (ELEGANT GRIDS & CARDS VIEW)
  // ========================================================================
  renderObrasView() {
    const container = document.getElementById('mainViewContainer');

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Gestión de Obras & Cronogramas</h1>
          <p class="page-description">Control de etapas constructivas, cronogramas Gantt y legajos técnicos en Ushuaia.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" id="btnAddNewProject">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>+ Nueva Obra</span>
          </button>
        </div>
      </div>

      <!-- Controls & View Mode Switcher -->
      <div class="projects-view-controls">
        <div class="period-buttons-group">
          <button class="btn-period active" data-filter="all">Todas (${ERP_DB.projects.length})</button>
          <button class="btn-period" data-filter="in_progress">En Ejecución (${ERP_DB.projects.filter(p=>p.status==='in_progress').length})</button>
          <button class="btn-period" data-filter="planning">En Planificación (${ERP_DB.projects.filter(p=>p.status==='planning').length})</button>
          <button class="btn-period" data-filter="completed">Finalizadas (0)</button>
        </div>

        <div style="display:flex; align-items:center; gap:12px;">
          <!-- View switcher toggle: Cards vs Data Grid -->
          <div class="view-mode-switcher">
            <button class="view-mode-btn ${this.obrasViewMode==='cards'?'active':''}" id="btnViewCards">
              ▦ Vista Tarjetas
            </button>
            <button class="view-mode-btn ${this.obrasViewMode==='grid'?'active':''}" id="btnViewGrid">
              ▤ Grilla Ejecutiva
            </button>
          </div>

          <input type="text" id="filterObrasInput" class="form-control" style="width:260px;" placeholder="Buscar obra o ubicación...">
        </div>
      </div>

      <!-- Container where projects render (either cards or table) -->
      <div id="projectsDisplayContainer">
        ${this.obrasViewMode === 'cards' 
          ? this.renderProjectsCardsHtml(ERP_DB.projects) 
          : this.renderProjectsTableGridHtml(ERP_DB.projects)}
      </div>
    `;

    // View mode events
    document.getElementById('btnViewCards')?.addEventListener('click', () => {
      this.obrasViewMode = 'cards';
      this.renderObrasView();
    });

    document.getElementById('btnViewGrid')?.addEventListener('click', () => {
      this.obrasViewMode = 'grid';
      this.renderObrasView();
    });

    // Filter pills
    document.querySelectorAll('.projects-view-controls .btn-period').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.projects-view-controls .btn-period').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.getAttribute('data-filter');
        let filtered = ERP_DB.projects;
        if (filter !== 'all') {
          filtered = ERP_DB.projects.filter(p => p.status === filter);
        }
        document.getElementById('projectsDisplayContainer').innerHTML = this.obrasViewMode === 'cards'
          ? this.renderProjectsCardsHtml(filtered)
          : this.renderProjectsTableGridHtml(filtered);
        this.attachProjectCardEvents();
      });
    });

    // Filter search
    document.getElementById('filterObrasInput')?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = ERP_DB.projects.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.location.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q)
      );
      document.getElementById('projectsDisplayContainer').innerHTML = this.obrasViewMode === 'cards'
        ? this.renderProjectsCardsHtml(filtered)
        : this.renderProjectsTableGridHtml(filtered);
      this.attachProjectCardEvents();
    });

    document.getElementById('btnAddNewProject')?.addEventListener('click', () => {
      this.openNewProjectModal();
    });

    this.attachProjectCardEvents();
  },

  // Render Projects as Elegant Cards
  renderProjectsCardsHtml(projects) {
    if (projects.length === 0) {
      return `<div style="padding: 40px; text-align: center; color: var(--text-muted); background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">No se encontraron obras bajo este criterio.</div>`;
    }

    return `
      <div class="projects-cards-grid">
        ${projects.map(proj => `
          <div class="project-card" data-project-id="${proj.id}">
            <div class="project-card-header">
              <div>
                <span class="project-code">${proj.code}</span>
                <h3 class="project-title">${proj.title}</h3>
              </div>
              <span class="badge ${proj.status==='in_progress'?'badge-primary':'badge-warning'}">
                ${proj.statusLabel}
              </span>
            </div>
            <div class="project-card-body">
              <div class="project-meta-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${proj.location}</span>
              </div>
              <div class="project-meta-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Responsable: <strong>${proj.siteManager}</strong></span>
              </div>
              <div class="project-progress-wrap">
                <div class="progress-header">
                  <span>Avance Global Físico</span>
                  <span style="color:var(--primary-600); font-weight:800;">${proj.progress}%</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${proj.progress}%;"></div>
                </div>
              </div>
              <div style="font-size:0.85rem; color:var(--text-muted); display:flex; justify-content:space-between; margin-top:8px;">
                <span>Presupuesto: <strong>${this.formatCurrency(proj.totalBudget)}</strong></span>
                <span>Costo: <strong>${this.formatCurrency(proj.actualCost)}</strong></span>
              </div>
            </div>
            <div class="project-card-footer">
              <span>${proj.stages.length} etapas registradas</span>
              <span style="color:var(--primary-600); font-weight:800; display:flex; align-items:center; gap:5px;">
                Ver Ficha & Gantt →
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  // Render Projects as Dense Executive Data Grid (Table)
  renderProjectsTableGridHtml(projects) {
    if (projects.length === 0) {
      return `<div style="padding: 40px; text-align: center; color: var(--text-muted); background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-lg);">No se encontraron obras bajo este criterio.</div>`;
    }

    return `
      <div class="projects-table-view">
        <table class="table">
          <thead>
            <tr>
              <th style="width:10%;">Código</th>
              <th style="width:25%;">Nombre de Obra</th>
              <th style="width:18%;">Comitente & Ubicación</th>
              <th style="width:16%;">Avance Físico</th>
              <th style="width:12%;">Presupuesto</th>
              <th style="width:10%;">Costo Real</th>
              <th style="width:9%;">Acción</th>
            </tr>
          </thead>
          <tbody>
            ${projects.map(proj => {
              const profit = proj.totalBudget - proj.actualCost;
              return `
                <tr data-project-id="${proj.id}" style="cursor:pointer;" onclick="App.openProjectDetailModal('${proj.id}')">
                  <td><strong style="color:var(--primary-600);">${proj.code}</strong></td>
                  <td>
                    <strong style="font-size:1rem;">${proj.title}</strong>
                    <div style="font-size:0.8rem; color:var(--text-muted);">Resp: ${proj.siteManager}</div>
                  </td>
                  <td>
                    <div>${proj.clientName}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted);">📍 ${proj.location}</div>
                  </td>
                  <td>
                    <div style="display:flex; justify-content:space-between; font-size:0.82rem; font-weight:700; margin-bottom:3px;">
                      <span>${proj.progress}%</span>
                      <span class="badge ${proj.status==='in_progress'?'badge-primary':'badge-warning'}">${proj.statusLabel}</span>
                    </div>
                    <div class="progress-bar-bg" style="height:8px;">
                      <div class="progress-bar-fill" style="width: ${proj.progress}%;"></div>
                    </div>
                  </td>
                  <td><strong>${this.formatCurrency(proj.totalBudget)}</strong></td>
                  <td style="color:var(--danger); font-weight:700;">${this.formatCurrency(proj.actualCost)}</td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); App.openProjectDetailModal('${proj.id}')">
                      Ficha & Gantt
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  attachProjectCardEvents() {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        this.openProjectDetailModal(id);
      });
    });
  },

  // Ficha de Obra Modal with Gantt & Checklist
  openProjectDetailModal(projectId) {
    const project = ERP_DB.projects.find(p => p.id === projectId);
    if (!project) return;
    this.selectedProjectId = projectId;

    const modalBackdrop = document.getElementById('projectModalBackdrop');
    const modalTitle = document.getElementById('projectModalTitle');
    const modalCode = document.getElementById('projectModalCode');
    const modalBody = document.getElementById('projectModalBody');

    modalTitle.textContent = project.title;
    modalCode.textContent = project.code;

    modalBody.innerHTML = `
      <div style="background-color: var(--bg-surface-alt); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px 20px; margin-bottom:20px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:14px;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Cliente / Comitente</span>
          <strong style="font-size:1rem;">${project.clientName}</strong>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Ubicación en Ushuaia</span>
          <strong style="font-size:1rem;">${project.location}</strong>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Responsable Técnico</span>
          <strong style="font-size:1rem;">${project.siteManager}</strong>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted); display:block;">Plazo de Ejecución</span>
          <strong style="font-size:1rem;">${project.startDate} al ${project.endDate}</strong>
        </div>
      </div>

      <div class="project-detail-tabs" style="display:flex; gap:8px; border-bottom:1px solid var(--border-color); margin-bottom:20px;">
        <button class="btn-period active tab-btn" data-tab="gantt">Cronograma Gantt Interactivo</button>
        <button class="btn-period tab-btn" data-tab="checklist">Checklist Documental & Permisos</button>
        <button class="btn-period tab-btn" data-tab="photos">Registro Fotográfico (${project.photos.length})</button>
        <button class="btn-period tab-btn" data-tab="financials">Costos & Rentabilidad</button>
      </div>

      <div id="projectTabContent">
        ${this.renderGanttTabHtml(project)}
      </div>
    `;

    modalBody.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modalBody.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.getAttribute('data-tab');

        const tabContentEl = document.getElementById('projectTabContent');
        if (tab === 'gantt') {
          tabContentEl.innerHTML = this.renderGanttTabHtml(project);
          this.attachGanttInteractiveEvents(project);
        } else if (tab === 'checklist') {
          tabContentEl.innerHTML = this.renderChecklistTabHtml(project);
        } else if (tab === 'photos') {
          tabContentEl.innerHTML = this.renderPhotosTabHtml(project);
          this.attachPhotosTabEvents(project);
        } else if (tab === 'financials') {
          tabContentEl.innerHTML = this.renderFinancialsTabHtml(project);
        }
      });
    });

    this.attachGanttInteractiveEvents(project);
    modalBackdrop.classList.add('active');
  },

  renderGanttTabHtml(project) {
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div style="font-size:0.92rem; color:var(--text-secondary); font-weight:700;">
          💡 Haga clic en el porcentaje de cualquier etapa para actualizar el avance en vivo.
        </div>
        <div style="display:flex; gap:14px; font-size:0.82rem; font-weight:700;">
          <span style="display:flex; align-items:center; gap:5px;"><span style="width:12px; height:12px; background:#10b981; border-radius:3px;"></span> Completada</span>
          <span style="display:flex; align-items:center; gap:5px;"><span style="width:12px; height:12px; background:#0284c7; border-radius:3px;"></span> En Curso</span>
          <span style="display:flex; align-items:center; gap:5px;"><span style="width:12px; height:12px; background:#94a3b8; border-radius:3px;"></span> Pendiente</span>
        </div>
      </div>

      <div class="gantt-container">
        <div class="gantt-timeline-header">
          <div class="gantt-stages-col-header">ETAPA CONSTRUCTIVA</div>
          <div class="gantt-dates-row">
            <div class="gantt-date-cell">Marzo</div>
            <div class="gantt-date-cell">Abril</div>
            <div class="gantt-date-cell">Mayo</div>
            <div class="gantt-date-cell">Junio</div>
            <div class="gantt-date-cell">Julio</div>
            <div class="gantt-date-cell">Agosto</div>
            <div class="gantt-date-cell">Septiembre</div>
            <div class="gantt-date-cell">Octubre</div>
            <div class="gantt-date-cell">Noviembre</div>
          </div>
        </div>

        <div class="gantt-body">
          ${project.stages.map((stage, idx) => {
            const offsetPct = Math.min(idx * 11, 75);
            const widthPct = Math.max(18, 30 - idx * 2);
            const isCompleted = stage.progress === 100;
            const barClass = isCompleted ? 'completed' : (stage.progress > 0 ? '' : 'pending');

            return `
              <div class="gantt-row">
                <div class="gantt-stage-info">
                  <div class="gantt-stage-name">
                    <span>${stage.name}</span>
                    <button class="badge ${isCompleted ? 'badge-success' : (stage.progress > 0 ? 'badge-primary' : 'badge-neutral')} btn-change-progress" data-stage-id="${stage.id}" title="Click para editar % de avance">
                      ${stage.progress}% ✏️
                    </button>
                  </div>
                  <div class="gantt-stage-meta">${stage.start} → ${stage.end}</div>
                </div>
                <div class="gantt-bars-track">
                  <div class="gantt-bar ${barClass}" style="left: ${offsetPct}%; width: ${widthPct}%;" data-stage-id="${stage.id}" title="${stage.name}: ${stage.progress}%">
                    <span>${stage.progress}%</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  attachGanttInteractiveEvents(project) {
    document.querySelectorAll('.btn-change-progress, .gantt-bar').forEach(el => {
      el.addEventListener('click', (e) => {
        const stageId = el.getAttribute('data-stage-id');
        const stage = project.stages.find(s => s.id === stageId);
        if (!stage) return;

        const newProgStr = prompt(`Actualizar avance para:\n"${stage.name}" (Actualmente: ${stage.progress}%):`, stage.progress);
        if (newProgStr !== null) {
          let newProg = parseInt(newProgStr, 10);
          if (isNaN(newProg)) newProg = 0;
          if (newProg > 100) newProg = 100;
          if (newProg < 0) newProg = 0;

          stage.progress = newProg;
          stage.status = newProg === 100 ? 'completed' : (newProg > 0 ? 'in_progress' : 'pending');

          const totalP = project.stages.reduce((acc, s) => acc + s.progress, 0);
          project.progress = Math.round(totalP / project.stages.length);

          this.showToast(`Avance actualizado: ${stage.name} a ${newProg}%`, 'success');
          document.getElementById('projectTabContent').innerHTML = this.renderGanttTabHtml(project);
          this.attachGanttInteractiveEvents(project);
        }
      });
    });
  },

  renderChecklistTabHtml(project) {
    return `
      <div style="margin-bottom:16px;">
        <h4 style="font-size:1.15rem; font-weight:800;">Documentación Técnica & Tramitaciones Municipales</h4>
        <p style="font-size:0.85rem; color:var(--text-muted);">Requisitos legales obligatorios en Ushuaia (Municipalidad, DPOSS, DPE y Bomberos).</p>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Documento / Requisito Técnico</th>
              <th>Estado Legal</th>
              <th>Fecha de Aprobación / Vencimiento</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            ${project.checklist.map(item => `
              <tr>
                <td><strong>${item.name}</strong></td>
                <td>
                  ${item.status === 'approved' 
                    ? '<span class="badge badge-success">✓ Aprobado / Visado</span>' 
                    : (item.status === 'in_progress' 
                      ? '<span class="badge badge-warning">En Trámite</span>' 
                      : '<span class="badge badge-neutral">Pendiente</span>')}
                </td>
                <td>${item.date}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="App.showToast('Descargando legajo legalizado...', 'info')">
                    Ver Archivo
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  renderPhotosTabHtml(project) {
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
        <div>
          <h4 style="font-size:1.15rem; font-weight:800;">Registro Fotográfico de Obra</h4>
          <p style="font-size:0.85rem; color:var(--text-muted);">Seguimiento visual de hitos constructivos en Ushuaia.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btnAddPhotoBtn">
          + Subir Foto de Obra
        </button>
      </div>

      <div class="photo-gallery-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:18px;">
        ${project.photos.map(photo => `
          <div class="photo-card" style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-md); overflow:hidden;">
            <div class="photo-thumb-wrap" style="height:170px;">
              <img src="${photo.url}" alt="${photo.caption}" class="photo-thumb" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div class="photo-meta" style="padding:12px 14px;">
              <span class="badge badge-primary" style="margin-bottom:6px;">${photo.stage}</span>
              <p class="photo-caption" style="font-size:0.88rem; font-weight:700;">${photo.caption}</p>
              <span class="photo-date" style="font-size:0.75rem; color:var(--text-muted);">📅 ${photo.date}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  attachPhotosTabEvents(project) {
    document.getElementById('btnAddPhotoBtn')?.addEventListener('click', () => {
      const caption = prompt('Epígrafe o detalle del avance fotografiado:', 'Inspección de soleras y aislamiento térmico');
      if (caption) {
        project.photos.unshift({
          url: '../assets/img/ushuaia_llave_en_mano.jpg',
          caption: caption,
          date: new Date().toISOString().split('T')[0],
          stage: 'Avance de Obra'
        });
        this.showToast('Fotografía incorporada al expediente', 'success');
        document.getElementById('projectTabContent').innerHTML = this.renderPhotosTabHtml(project);
        this.attachPhotosTabEvents(project);
      }
    });
  },

  renderFinancialsTabHtml(project) {
    const profit = project.totalBudget - project.actualCost;
    const margin = ((profit / project.totalBudget) * 100).toFixed(1);

    return `
      <div class="kpi-grid" style="margin-bottom:22px; grid-template-columns: repeat(3, 1fr);">
        <div class="kpi-card">
          <span class="kpi-label">Presupuesto Contractual</span>
          <div class="kpi-value">${this.formatCurrency(project.totalBudget)}</div>
          <span style="font-size:0.8rem; color:var(--text-muted);">Monto acordado con comitente</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-label">Costo Real Acumulado</span>
          <div class="kpi-value" style="color:var(--danger);">${this.formatCurrency(project.actualCost)}</div>
          <span style="font-size:0.8rem; color:var(--text-muted);">Insumos + jornales de cuadrilla</span>
        </div>
        <div class="kpi-card kpi-net-balance">
          <span class="kpi-label" style="color:#047857;">Balance Neto de Obra</span>
          <div class="kpi-value net-profit">+${this.formatCurrency(profit)}</div>
          <span class="badge badge-success">${margin}% margen proyectado</span>
        </div>
      </div>
    `;
  },

  openNewProjectModal() {
    const title = prompt('Título de la nueva obra:', 'Residencia Valle de Lobos');
    if (!title) return;
    const location = prompt('Dirección en Ushuaia:', 'Ruta 3 Km 3020, Ushuaia');

    const newProject = {
      id: `proj-${Date.now().toString().slice(-4)}`,
      code: `OBRA-USH-0${ERP_DB.projects.length + 1}`,
      title: title,
      clientId: 'cli-001',
      clientName: 'Fideicomiso Bahía Ushuaia',
      location: location || 'Ushuaia, Tierra del Fuego',
      type: 'Vivienda Unifamiliar',
      siteManager: 'ING. Hidalgo Miguel Angel',
      architect: 'Arq. Luciana Soria',
      status: 'planning',
      statusLabel: 'En Planificación',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '2027-04-30',
      progress: 5,
      targetProgress: 10,
      totalBudget: 32000000,
      actualCost: 1500000,
      services: ['Planos de arquitectura', 'Planos de estructura', 'Proyectos llave en mano'],
      coverImage: '../assets/img/ushuaia_llave_en_mano.jpg',
      stages: [
        { id: `stg-${Date.now()}-1`, name: 'Proyecto & Cálculo Estructural CIRSOC', start: '2026-10-01', end: '2026-11-15', progress: 15, status: 'in_progress' },
        { id: `stg-${Date.now()}-2`, name: 'Permisos Municipales Ushuaia', start: '2026-11-10', end: '2026-12-20', progress: 0, status: 'pending' },
        { id: `stg-${Date.now()}-3`, name: 'Ejecución de Obra Llave en Mano', start: '2027-01-10', end: '2027-04-30', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Cálculo Estructural CIRSOC 103/104', status: 'in_progress', date: 'En cálculo' },
        { name: 'Expediente Municipal Ushuaia', status: 'pending', date: 'Nov 2026' }
      ],
      photos: []
    };

    ERP_DB.projects.unshift(newProject);
    this.showToast(`Nueva obra registrada: ${newProject.title}`, 'success');
    this.renderObrasView();
  },

  // ========================================================================
  // 6. AGENDA ITEMS & VIEWS
  // ========================================================================
  renderAgendaItemsHtml(filter) {
    let list = ERP_DB.agendaEvents;
    if (filter === 'upcoming') {
      list = ERP_DB.agendaEvents.filter(e => e.status !== 'completed');
    } else if (filter === 'completed') {
      list = ERP_DB.agendaEvents.filter(e => e.status === 'completed');
    }

    if (list.length === 0) {
      return `<div style="padding:24px; text-align:center; color:var(--text-muted);">No hay hitos o visitas programadas bajo este criterio.</div>`;
    }

    return list.map(evt => {
      const dateParts = evt.date.split('-');
      const day = dateParts[2] || '15';
      const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      const month = monthNames[parseInt(dateParts[1], 10) - 1] || 'Sep';
      const isCompleted = evt.status === 'completed';

      return `
        <div class="agenda-item-card ${isCompleted ? 'completed' : ''}" data-event-id="${evt.id}">
          <div class="agenda-left-block">
            <div class="agenda-date-badge">
              <span class="day">${day}</span>
              <span class="month">${month}</span>
            </div>
            <div class="agenda-main-info">
              <h4>${evt.title}</h4>
              <p>
                <strong>${evt.projectCode}:</strong> ${evt.projectTitle} • 
                <span>👤 ${evt.responsible}</span> • 
                <span>⏰ ${evt.time} hs</span>
              </p>
              <div style="font-size:0.8rem; color:var(--text-muted); margin-top:2px;">
                ${evt.notes}
              </div>
            </div>
          </div>

          <div class="agenda-right-actions">
            <span class="badge ${isCompleted ? 'badge-success' : 'badge-primary'}">
              ${isCompleted ? '✓ Realizada' : evt.typeLabel}
            </span>
            <button class="btn btn-secondary btn-sm btn-toggle-event-status" data-event-id="${evt.id}">
              ${isCompleted ? 'Marcar Pendiente' : '✓ Completar'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  attachAgendaActions() {
    document.querySelectorAll('.btn-toggle-event-status').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-event-id');
        const evt = ERP_DB.agendaEvents.find(e => e.id === id);
        if (!evt) return;

        evt.status = evt.status === 'completed' ? 'confirmed' : 'completed';
        this.showToast(`Estado de hito actualizado: "${evt.title}"`, 'success');
        this.updateBadges();
        this.renderView(this.currentView);
      });
    });
  },

  renderAgendaView() {
    const container = document.getElementById('mainViewContainer');

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Agenda de Hitos & Visitas de Obra</h1>
          <p class="page-description">Control de inspecciones técnicas, visitas de comitentes y certificaciones en Ushuaia.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" id="btnOpenAddAgendaFull">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <span>+ Agendar Visita / Hito</span>
          </button>
        </div>
      </div>

      <div class="period-toolbar" style="margin-bottom:20px;">
        <div class="period-buttons-group">
          <button class="btn-period ${this.agendaFilter==='upcoming'?'active':''}" data-agenda-filter="upcoming">Próximas Visitas</button>
          <button class="btn-period ${this.agendaFilter==='all'?'active':''}" data-agenda-filter="all">Todas las Visitas</button>
          <button class="btn-period ${this.agendaFilter==='completed'?'active':''}" data-agenda-filter="completed">Completadas</button>
        </div>
        <div>
          <input type="text" id="filterAgendaInput" class="form-control" style="width:260px;" placeholder="Buscar hito o inspector...">
        </div>
      </div>

      <div class="agenda-cards-list" id="agendaFullCardsList">
        ${this.renderAgendaItemsHtml(this.agendaFilter)}
      </div>
    `;

    document.querySelectorAll('.btn-period[data-agenda-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.agendaFilter = btn.getAttribute('data-agenda-filter');
        this.renderAgendaView();
      });
    });

    document.getElementById('btnOpenAddAgendaFull')?.addEventListener('click', () => {
      this.openAgendaModal();
    });

    this.attachAgendaActions();
  },

  // ========================================================================
  // 7. MODULE: PRESUPUESTOS & COTIZADOR (10 SERVICIOS OFICIALES)
  // ========================================================================
  renderPresupuestosView() {
    const container = document.getElementById('mainViewContainer');

    if (!this.currentBudgetDraft) {
      this.initNewBudgetForm();
    }

    const draft = this.currentBudgetDraft;

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Presupuestos & Cotizador Oficial</h1>
          <p class="page-description">Generador de cotizaciones con los 10 servicios de INGEMAH y exportación membretada.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary" id="btnPreviewOfficialLetterhead">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            <span>Ver Membrete Oficial / PDF</span>
          </button>
          <button class="btn btn-primary" id="btnSaveBudget">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            <span>Guardar Cotización</span>
          </button>
        </div>
      </div>

      <div class="card" style="margin-bottom:24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:16px; margin-bottom:20px;">
          <div>
            <h3 style="font-size:1.25rem; font-weight:800;">Cotizador de Servicios - INGEMAH</h3>
            <span style="font-size:0.85rem; color:var(--text-muted);">Cálculo automático de subtotales, descuentos y régimen impositivo Ley 19.640</span>
          </div>
          <div>
            <span class="badge badge-primary" style="font-size:0.9rem; padding:6px 14px;">${draft.number}</span>
          </div>
        </div>

        <form id="budgetHeaderForm">
          <div class="form-row">
            <div class="form-group col-4">
              <label class="form-label">Cliente / Comitente *</label>
              <input type="text" id="budgetClientName" class="form-control" value="${draft.clientName}" required>
            </div>
            <div class="form-group col-4">
              <label class="form-label">Título del Proyecto *</label>
              <input type="text" id="budgetTitle" class="form-control" value="${draft.title}" required>
            </div>
            <div class="form-group col-4">
              <label class="form-label">Validez de Oferta</label>
              <input type="date" id="budgetValidUntil" class="form-control" value="${draft.validUntil}">
            </div>
          </div>
        </form>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:22px; margin-bottom:10px;">
          <h4 style="font-size:1.05rem; font-weight:800;">Desglose de Partidas (10 Servicios Oficiales)</h4>
          <button class="btn btn-secondary btn-sm" id="btnAddBudgetItem">+ Agregar Ítem</button>
        </div>

        <div class="table-responsive" style="margin-bottom:22px;">
          <table class="table" style="font-size:0.92rem;">
            <thead>
              <tr>
                <th style="width:25%;">Servicio Profesional</th>
                <th style="width:35%;">Detalle Técnico & Alcance</th>
                <th style="width:10%;">Unidad</th>
                <th style="width:10%;">Cantidad</th>
                <th style="width:12%;">P. Unitario</th>
                <th style="width:12%; text-align:right;">Subtotal</th>
                <th style="width:5%;"></th>
              </tr>
            </thead>
            <tbody id="budgetItemsTableBody">
              ${draft.items.map((item, idx) => `
                <tr data-item-idx="${idx}">
                  <td>
                    <select class="form-control item-service-select">
                      ${ERP_DB.servicesCatalog.map(srv => `
                        <option value="${srv}" ${srv === item.service ? 'selected' : ''}>${srv}</option>
                      `).join('')}
                    </select>
                  </td>
                  <td><input type="text" class="form-control item-desc-input" value="${item.description}"></td>
                  <td>
                    <select class="form-control item-unit-select">
                      <option value="m²" ${item.unit==='m²'?'selected':''}>m²</option>
                      <option value="gl" ${item.unit==='gl'?'selected':''}>gl (Global)</option>
                      <option value="ml" ${item.unit==='ml'?'selected':''}>ml (Lineal)</option>
                      <option value="un" ${item.unit==='un'?'selected':''}>un (Unidad)</option>
                      <option value="hs" ${item.unit==='hs'?'selected':''}>hs (Horas)</option>
                    </select>
                  </td>
                  <td><input type="number" step="0.5" class="form-control item-qty-input" value="${item.qty}"></td>
                  <td><input type="number" step="1000" class="form-control item-price-input" value="${item.price}"></td>
                  <td style="font-weight:800; text-align:right;" class="item-subtotal-display">
                    ${this.formatCurrency(item.qty * item.price)}
                  </td>
                  <td style="text-align:center;">
                    <button class="btn-icon btn-remove-item" title="Eliminar partida" style="color:var(--danger);">✕</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:24px; flex-wrap:wrap;">
          <div style="flex:1; min-width:320px;">
            <label class="form-label">Condiciones de Pago & Cláusulas Comerciales</label>
            <textarea id="budgetPaymentTerms" class="form-control" rows="3">${draft.paymentTerms}</textarea>
            <span style="font-size:0.75rem; color:var(--text-muted); margin-top:4px; display:block;">
              * Cláusulas de reajuste CAC y acopio adaptadas a Ushuaia.
            </span>
          </div>

          <div class="budget-summary-box" style="width:380px; background:var(--bg-surface-alt); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:18px 22px; display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; justify-content:space-between; font-size:0.95rem;">
              <span>Subtotal Neto:</span>
              <strong id="summarySubtotalDisplay">${this.formatCurrency(draft.subtotal)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.95rem;">
              <span>Descuento Comercial:</span>
              <div style="display:flex; align-items:center; gap:6px;">
                <span>-$</span>
                <input type="number" id="budgetDiscountInput" class="form-control" style="width:110px; height:32px;" value="${draft.discount}">
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.95rem;">
              <span>Régimen Impositivo:</span>
              <select id="budgetTaxSelect" class="form-control" style="width:150px; height:32px;">
                <option value="0" ${draft.taxRate===0?'selected':''}>Ley 19.640 (Exento)</option>
                <option value="0.21" ${draft.taxRate===0.21?'selected':''}>IVA 21%</option>
              </select>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:1.3rem; font-weight:800; color:var(--primary-600); border-top:2px solid var(--border-color); padding-top:10px;">
              <span>TOTAL:</span>
              <strong id="summaryTotalDisplay">${this.formatCurrency(draft.total)}</strong>
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachBudgetBuilderEvents();
  },

  initNewBudgetForm() {
    this.currentBudgetDraft = {
      id: `pre-${Date.now().toString().slice(-4)}`,
      number: `PRE-2026-00${ERP_DB.budgets.length + 1}`,
      clientName: 'Dr. Fernando Gómez',
      title: 'Proyecto & Construcción Vivienda Las Hayas',
      validUntil: '2026-10-15',
      paymentTerms: 'Anticipo 30% al inicio de obra, 40% a la finalización de estructura y cubierta, saldo 30% a la entrega de llave en mano.',
      subtotal: 0,
      discount: 0,
      taxRate: 0,
      total: 0,
      items: [
        { service: 'Planos de arquitectura', category: 'Honorarios', description: 'Diseño arquitectónico bioclimático y legajo municipal para Ushuaia', unit: 'm²', qty: 220, price: 19500 },
        { service: 'Planos de estructura', category: 'Honorarios', description: 'Cálculo de fundaciones y sismo-resistencia s/CIRSOC 103', unit: 'gl', qty: 1, price: 3400000 },
        { service: 'Proyectos llave en mano', category: 'Obra', description: 'Ejecución integral Steel Framing con aislamiento lana de vidrio y DVA', unit: 'm²', qty: 220, price: 95000 },
        { service: 'Renders 3D', category: 'Diseño', description: 'Set de 4 imágenes fotorrealistas de exteriores e interiores', unit: 'un', qty: 4, price: 450000 }
      ]
    };
    this.recalcBudgetTotals();
  },

  attachBudgetBuilderEvents() {
    const draft = this.currentBudgetDraft;

    document.querySelectorAll('#budgetItemsTableBody tr').forEach((row, idx) => {
      const qtyInput = row.querySelector('.item-qty-input');
      const priceInput = row.querySelector('.item-price-input');
      const descInput = row.querySelector('.item-desc-input');
      const srvSelect = row.querySelector('.item-service-select');
      const unitSelect = row.querySelector('.item-unit-select');
      const subDisplay = row.querySelector('.item-subtotal-display');
      const removeBtn = row.querySelector('.btn-remove-item');

      const updateRow = () => {
        const q = parseFloat(qtyInput.value) || 0;
        const p = parseFloat(priceInput.value) || 0;
        draft.items[idx].qty = q;
        draft.items[idx].price = p;
        draft.items[idx].description = descInput.value;
        draft.items[idx].service = srvSelect.value;
        draft.items[idx].unit = unitSelect.value;
        subDisplay.textContent = this.formatCurrency(q * p);
        this.recalcBudgetTotals();
      };

      qtyInput.oninput = updateRow;
      priceInput.oninput = updateRow;
      descInput.oninput = updateRow;
      srvSelect.onchange = updateRow;
      unitSelect.onchange = updateRow;

      removeBtn.onclick = () => {
        if (draft.items.length <= 1) {
          this.showToast('El presupuesto debe contener al menos una partida', 'warning');
          return;
        }
        draft.items.splice(idx, 1);
        this.renderPresupuestosView();
      };
    });

    document.getElementById('btnAddBudgetItem')?.addEventListener('click', () => {
      draft.items.push({
        service: 'Planos de arquitectura',
        category: 'Honorarios',
        description: 'Partida complementaria técnica',
        unit: 'gl',
        qty: 1,
        price: 500000
      });
      this.renderPresupuestosView();
    });

    document.getElementById('budgetDiscountInput')?.addEventListener('input', (e) => {
      draft.discount = parseFloat(e.target.value) || 0;
      this.recalcBudgetTotals();
    });

    document.getElementById('budgetTaxSelect')?.addEventListener('change', (e) => {
      draft.taxRate = parseFloat(e.target.value) || 0;
      this.recalcBudgetTotals();
    });

    document.getElementById('btnSaveBudget')?.addEventListener('click', () => {
      draft.clientName = document.getElementById('budgetClientName').value;
      draft.title = document.getElementById('budgetTitle').value;
      draft.validUntil = document.getElementById('budgetValidUntil').value;
      draft.paymentTerms = document.getElementById('budgetPaymentTerms').value;

      const existingIdx = ERP_DB.budgets.findIndex(b => b.id === draft.id);
      if (existingIdx >= 0) {
        ERP_DB.budgets[existingIdx] = JSON.parse(JSON.stringify(draft));
      } else {
        ERP_DB.budgets.unshift(JSON.parse(JSON.stringify(draft)));
      }

      this.showToast(`Presupuesto ${draft.number} guardado con éxito`, 'success');
      this.renderPresupuestosView();
    });

    document.getElementById('btnPreviewOfficialLetterhead')?.addEventListener('click', () => {
      this.openBudgetPrintModal();
    });
  },

  recalcBudgetTotals() {
    const draft = this.currentBudgetDraft;
    let sub = 0;
    draft.items.forEach(it => {
      sub += (it.qty * it.price);
    });
    draft.subtotal = sub;
    const afterDiscount = Math.max(0, sub - (draft.discount || 0));
    draft.tax = afterDiscount * (draft.taxRate || 0);
    draft.total = afterDiscount + draft.tax;

    const elSub = document.getElementById('summarySubtotalDisplay');
    const elTot = document.getElementById('summaryTotalDisplay');
    if (elSub) elSub.textContent = this.formatCurrency(draft.subtotal);
    if (elTot) elTot.textContent = this.formatCurrency(draft.total);
  },

  openBudgetPrintModal() {
    const draft = this.currentBudgetDraft;
    const modalBackdrop = document.getElementById('budgetPrintModalBackdrop');
    const modalBody = document.getElementById('budgetPrintModalBody');

    modalBody.innerHTML = `
      <div class="official-letterhead">
        <div class="letterhead-header">
          <div class="letterhead-brand">
            <img src="../assets/img/logo.svg" alt="INGEMAH Logo" class="letterhead-logo" style="width:64px; height:64px;">
            <div class="letterhead-title">
              <h2 style="font-size:1.8rem; font-weight:800; color:var(--primary-900);">INGEMAH</h2>
              <p style="font-weight:700; color:#334155;">ESTUDIO DE ARQUITECTURA, INGENIERÍA & CONSTRUCCIÓN</p>
              <p style="font-size:0.75rem; color:#64748b;">Planos • Estructuras CIRSOC • Llave en Mano • Ushuaia</p>
            </div>
          </div>
          <div class="letterhead-company-info" style="font-size:0.85rem; line-height:1.5;">
            <strong>INGEMAH CONSTRUCTORA</strong><br>
            Hipólito Yrigoyen 407, 1° Piso<br>
            Ushuaia, Tierra del Fuego, Argentina<br>
            WhatsApp: +54 2901 41-1117 • IG: @ingemah_
          </div>
        </div>

        <div class="letterhead-budget-info" style="font-size:0.9rem; padding:16px 20px;">
          <div>
            <strong>Comitente:</strong> ${draft.clientName}<br>
            <strong>Obra:</strong> ${draft.title}<br>
            <strong>Lugar:</strong> Ushuaia, Tierra del Fuego
          </div>
          <div style="text-align:right;">
            <strong>Cotización N°:</strong> ${draft.number}<br>
            <strong>Fecha:</strong> ${new Date().toLocaleDateString('es-AR')}<br>
            <strong>Validez:</strong> ${draft.validUntil}
          </div>
        </div>

        <table class="letterhead-table" style="font-size:0.9rem; margin-bottom:24px;">
          <thead>
            <tr>
              <th>Ítem</th>
              <th>Servicio</th>
              <th>Alcance Técnico</th>
              <th style="text-align:center;">Cant.</th>
              <th style="text-align:right;">P. Unit.</th>
              <th style="text-align:right;">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${draft.items.map((it, i) => `
              <tr>
                <td>${i + 1}</td>
                <td><strong>${it.service}</strong></td>
                <td>${it.description}</td>
                <td style="text-align:center;">${it.qty} ${it.unit}</td>
                <td style="text-align:right;">${this.formatCurrency(it.price)}</td>
                <td style="text-align:right; font-weight:700;">${this.formatCurrency(it.qty * it.price)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display:flex; justify-content:flex-end; margin-bottom:24px;">
          <div style="width:360px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.95rem;">
              <span>Subtotal Neto:</span>
              <strong>${this.formatCurrency(draft.subtotal)}</strong>
            </div>
            ${draft.discount > 0 ? `
              <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.95rem; color:#dc2626;">
                <span>Bonificación:</span>
                <strong>-${this.formatCurrency(draft.discount)}</strong>
              </div>
            ` : ''}
            <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.85rem; color:#475569;">
              <span>Condición Impositiva:</span>
              <span>${draft.taxRate > 0 ? 'IVA 21%' : 'Ley 19.640 (Exento)'}</span>
            </div>
            <div style="display:flex; justify-content:space-between; border-top:2px solid #0088d6; padding-top:10px; font-size:1.3rem; font-weight:800; color:#07264a;">
              <span>TOTAL COTIZADO:</span>
              <span>${this.formatCurrency(draft.total)}</span>
            </div>
          </div>
        </div>

        <div class="letterhead-terms" style="font-size:0.85rem; padding:14px 18px;">
          <strong>Condiciones Comerciales:</strong>
          <p>${draft.paymentTerms}</p>
        </div>

        <div class="letterhead-signatures" style="margin-top:40px; display:flex; justify-content:space-between;">
          <div class="signature-box" style="width:260px; text-align:center; border-top:1px solid #64748b; padding-top:8px;">
            <strong>ING. Hidalgo Miguel Angel</strong><br>
            <span style="font-size:0.75rem; color:#64748b;">INGEMAH • Dirección General</span>
          </div>
          <div class="signature-box" style="width:260px; text-align:center; border-top:1px solid #64748b; padding-top:8px;">
            <strong>Conformidad del Comitente</strong><br>
            <span style="font-size:0.75rem; color:#64748b;">Firma & Aclaración</span>
          </div>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
  },

  sendBudgetViaWhatsApp() {
    const draft = this.currentBudgetDraft;
    const msg = `*INGEMAH CONSTRUCTORA - Ushuaia*\n` +
      `Estimado/a ${draft.clientName},\n\n` +
      `Le adjuntamos la propuesta formal para: *${draft.title}*\n` +
      `Presupuesto N°: *${draft.number}*\n` +
      `Monto Total: *${this.formatCurrency(draft.total)}*\n` +
      `Validez hasta: *${draft.validUntil}*\n\n` +
      `Para coordinar reunión o visita técnica, te esperamos en Hipólito Yrigoyen 407, 1° Piso, Ushuaia.\n` +
      `Atte. ING. Hidalgo Miguel Angel - INGEMAH.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  },

  // ========================================================================
  // 8. MODULES: CRM, PERSONAL, COMPRAS, DOCUMENTOS, FINANZAS, REPORTES & CONFIG
  // ========================================================================
  renderCRMView() {
    const container = document.getElementById('mainViewContainer');
    const funnelStages = [
      { id: 'new_lead', title: 'Nuevo Lead', color: 'info' },
      { id: 'in_quoting', title: 'En Cotización', color: 'warning' },
      { id: 'quote_sent', title: 'Presupuesto Enviado', color: 'primary' },
      { id: 'won', title: 'Aprobado / En Obra', color: 'success' },
      { id: 'lost', title: 'Rechazado', color: 'neutral' }
    ];

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>CRM & Embudo de Consultas</h1>
          <p class="page-description">Pipeline de prospectos de Ushuaia ingresados vía Landing, WhatsApp (+54 2901 41-1117) u oficina.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" id="btnAddNewLeadCRM">+ Nueva Consulta</button>
        </div>
      </div>

      <div class="crm-pipeline-board" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:18px; overflow-x:auto;">
        ${funnelStages.map(stage => {
          const leadsInStage = ERP_DB.leads.filter(l => l.status === stage.id);
          return `
            <div class="pipeline-col" style="background:var(--bg-surface-alt); border:1px solid var(--border-color); border-radius:var(--radius-lg); padding:14px; min-width:260px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; font-weight:800; font-size:1rem;">
                <span>${stage.title}</span>
                <span class="badge badge-${stage.color}">${leadsInStage.length}</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:12px;">
                ${leadsInStage.map(lead => `
                  <div class="lead-card" data-lead-id="${lead.id}" style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:14px; box-shadow:var(--shadow-xs); cursor:pointer;">
                    <div style="font-weight:800; font-size:1.05rem; margin-bottom:4px;">${lead.name}</div>
                    <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:6px;">📍 ${lead.source}</div>
                    <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:8px;">
                      ${lead.services.map(s => `<span class="badge badge-primary" style="font-size:0.72rem;">${s}</span>`).join('')}
                    </div>
                    <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:8px;">${lead.notes}</p>
                    <div style="display:flex; justify-content:space-between; border-top:1px solid var(--border-color); padding-top:6px; font-size:0.85rem;">
                      <span>${lead.phone}</span>
                      <strong style="color:var(--primary-600);">${this.formatCurrency(lead.estimatedBudget)}</strong>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    document.getElementById('btnAddNewLeadCRM')?.addEventListener('click', () => {
      this.openLeadModal();
    });

    document.querySelectorAll('.lead-card').forEach(card => {
      card.addEventListener('click', () => {
        const leadId = card.getAttribute('data-lead-id');
        const lead = ERP_DB.leads.find(l => l.id === leadId);
        if (!lead) return;

        const newStatus = prompt(`Cambiar estado para ${lead.name}:\nOpciones: new_lead, in_quoting, quote_sent, won, lost`, lead.status);
        if (newStatus && funnelStages.some(s => s.id === newStatus)) {
          lead.status = newStatus;
          this.showToast(`Estado de ${lead.name} actualizado`, 'success');
          this.renderCRMView();
        }
      });
    });
  },

  renderPersonalView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Personal & Cuadrillas de Obra</h1>
          <p class="page-description">Padrón de oficiales y especialistas en Ushuaia con costo horario para costeo real de obras.</p>
        </div>
      </div>
      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Nombre & Apellido</th>
                <th>Especialidad / Rol</th>
                <th>Cuadrilla</th>
                <th>Tarifa Horaria</th>
                <th>Contacto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${ERP_DB.employees.map(emp => `
                <tr>
                  <td><strong>${emp.name}</strong></td>
                  <td>${emp.role}</td>
                  <td><span class="badge badge-primary">${emp.crew}</span></td>
                  <td><strong>${this.formatCurrency(emp.hourlyRate)}/h</strong></td>
                  <td>${emp.phone}</td>
                  <td><span class="badge badge-success">Activo</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderComprasView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Compras & Depósito Central Ushuaia</h1>
          <p class="page-description">Inventario de materiales en Hipólito Yrigoyen 407 con alertas de stock mínimo de seguridad.</p>
        </div>
      </div>
      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Material / Insumo</th>
                <th>Unidad</th>
                <th>Stock Actual</th>
                <th>Stock Mínimo</th>
                <th>Costo Unitario</th>
                <th>Proveedor Local</th>
                <th>Alerta</th>
              </tr>
            </thead>
            <tbody>
              ${ERP_DB.inventory.map(item => `
                <tr>
                  <td><code>${item.code}</code></td>
                  <td><strong>${item.name}</strong></td>
                  <td>${item.unit}</td>
                  <td style="font-weight:800; font-size:1.05rem;">${item.stock}</td>
                  <td>${item.minStock}</td>
                  <td>${this.formatCurrency(item.cost)}</td>
                  <td>${item.supplier}</td>
                  <td>
                    ${item.stock <= item.minStock 
                      ? '<span class="badge badge-danger">⚠️ Reponer Urgente</span>' 
                      : '<span class="badge badge-success">Óptimo</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderDocumentosView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Planos & Repositorio Técnico</h1>
          <p class="page-description">Legajos de arquitectura, estructuras CIRSOC 103/104 y memorias técnicas visadas.</p>
        </div>
      </div>
      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Obra</th>
                <th>Título del Legajo</th>
                <th>Disciplina</th>
                <th>Versión</th>
                <th>Fecha</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>OBRA-USH-01</strong></td>
                <td>Plano Estructural Platea & Anclajes Antisísmicos</td>
                <td><span class="badge badge-primary">CIRSOC 103</span></td>
                <td>v3.2 (Aprobado)</td>
                <td>2026-04-02</td>
                <td><button class="btn btn-secondary btn-sm" onclick="App.showToast('Descargando archivo...', 'info')">Descargar</button></td>
              </tr>
              <tr>
                <td><strong>OBRA-USH-02</strong></td>
                <td>Cálculo de Cargas por Nieve en Techos Glaciar Martial</td>
                <td><span class="badge badge-primary">CIRSOC 104</span></td>
                <td>v1.0 (Final)</td>
                <td>2026-06-15</td>
                <td><button class="btn btn-secondary btn-sm" onclick="App.showToast('Descargando archivo...', 'info')">Descargar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderFinanzasView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Finanzas & Facturación de Obras</h1>
          <p class="page-description">Seguimiento de cobros por certificados y balance financiero en Tierra del Fuego.</p>
        </div>
      </div>
      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Comprobante</th>
                <th>Obra</th>
                <th>Comitente</th>
                <th>Emisión</th>
                <th>Vencimiento</th>
                <th>Monto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${ERP_DB.invoices.map(inv => `
                <tr>
                  <td><strong>${inv.number}</strong></td>
                  <td><code>${inv.project}</code></td>
                  <td>${inv.client}</td>
                  <td>${inv.date}</td>
                  <td>${inv.dueDate}</td>
                  <td style="font-weight:800;">${this.formatCurrency(inv.amount)}</td>
                  <td>${inv.status === 'paid' ? '<span class="badge badge-success">Cobrado</span>' : '<span class="badge badge-warning">Pendiente</span>'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderReportesView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Reportes & Rentabilidad de Obras</h1>
          <p class="page-description">Métricas de margen neto y rendimiento de cuadrillas en Ushuaia.</p>
        </div>
      </div>
      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Obra</th>
                <th>Presupuestado</th>
                <th>Costo Real</th>
                <th>Balance Neto ($)</th>
                <th>Margen (%)</th>
              </tr>
            </thead>
            <tbody>
              ${ERP_DB.projects.map(p => {
                const profit = p.totalBudget - p.actualCost;
                const margin = ((profit / p.totalBudget) * 100).toFixed(1);
                return `
                  <tr>
                    <td><strong>${p.title}</strong></td>
                    <td>${this.formatCurrency(p.totalBudget)}</td>
                    <td>${this.formatCurrency(p.actualCost)}</td>
                    <td style="color:var(--success); font-weight:800;">+${this.formatCurrency(profit)}</td>
                    <td><strong style="color:var(--primary-600); font-size:1.05rem;">${margin}%</strong></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderConfiguracionView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Configuración General & Auditoría</h1>
          <p class="page-description">Parámetros corporativos de INGEMAH y registro de acciones de usuarios.</p>
        </div>
      </div>
      <div class="card" style="margin-bottom:24px;">
        <h3 class="card-title" style="margin-bottom:16px;">Datos de la Empresa</h3>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Razón Social</label>
            <input type="text" class="form-control" value="INGEMAH CONSTRUCTORA" readonly>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Dirección Fiscal / Sede Central</label>
            <input type="text" class="form-control" value="Hipólito Yrigoyen 407, 1° Piso, Ushuaia, Tierra del Fuego" readonly>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Director General</label>
            <input type="text" class="form-control" value="ING. Hidalgo Miguel Angel" readonly>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Contacto Oficial</label>
            <input type="text" class="form-control" value="+54 2901 41-1117" readonly>
          </div>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title" style="margin-bottom:16px;">Registro de Auditoría</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Acción</th>
                <th>Módulo</th>
                <th>Fecha y Hora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ING. Hidalgo Miguel Angel</td>
                <td><span class="badge badge-primary">Admin</span></td>
                <td>Actualizó avance de Residencia Las Hayas al 68%</td>
                <td>Gestión de Obras</td>
                <td>2026-09-12 22:30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

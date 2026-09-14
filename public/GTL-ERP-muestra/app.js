/**
 * GTL INGENIERÍA ERP — CORE APPLICATION ENGINE (V1.0)
 * Sistema de Gestión Integral de Obras Eléctricas, Energía Solar & Certificaciones
 * La Plata, Buenos Aires, Argentina
 * Director Técnico: Ing. Joaquín Tenti
 */

// ==========================================================================
// 1. BASE DE DATOS RELACIONAL MOCK (ERP_DB)
// ==========================================================================

const ERP_DB = {
  // Usuario Actual y Roles de Control de Acceso (RBAC)
  currentUser: {
    id: 'usr-001',
    name: 'Ing. Joaquín Tenti',
    role: 'admin',
    roleLabel: 'Director Técnico / Titular',
    matricula: 'CIPBA Mat. 48.219 / AEA 12.840',
    email: 'gtlsaingenieria@gmail.com',
    phone: '0221 571-3005'
  },

  // Período Activo de Visualización (Día, Semana, Mes, Año)
  activePeriod: 'mes',

  // Tipo de Gráfico Financiero (bars, lines, area, donut, pie) y Modo (amount, percentage)
  financeChartType: 'bars',
  financeChartMode: 'amount',

  // Datos Financieros Mensuales (Flujo de Caja Real)
  financeData: {
    mes: [
      { label: 'Ene', ingresos: 14200000, egresos: 8900000 },
      { label: 'Feb', ingresos: 18500000, egresos: 11400000 },
      { label: 'Mar', ingresos: 22800000, egresos: 14100000 },
      { label: 'Abr', ingresos: 19400000, egresos: 12600000 },
      { label: 'May', ingresos: 26500000, egresos: 16800000 },
      { label: 'Jun', ingresos: 31200000, egresos: 19800000 },
      { label: 'Jul', ingresos: 28900000, egresos: 18200000 },
      { label: 'Ago', ingresos: 34600000, egresos: 22100000 },
      { label: 'Sep', ingresos: 38400000, egresos: 24500000 }
    ],
    dia: [
      { label: '08:00', ingresos: 450000, egresos: 120000 },
      { label: '11:00', ingresos: 1200000, egresos: 680000 },
      { label: '14:00', ingresos: 890000, egresos: 350000 },
      { label: '17:00', ingresos: 2100000, egresos: 920000 }
    ],
    semana: [
      { label: 'Lun', ingresos: 6800000, egresos: 4200000 },
      { label: 'Mar', ingresos: 8400000, egresos: 5100000 },
      { label: 'Mié', ingresos: 7200000, egresos: 4600000 },
      { label: 'Jue', ingresos: 9500000, egresos: 5900000 },
      { label: 'Vie', ingresos: 6500000, egresos: 4700000 }
    ],
    ano: [
      { label: '2023', ingresos: 124000000, egresos: 82000000 },
      { label: '2024', ingresos: 198000000, egresos: 128000000 },
      { label: '2025', ingresos: 284000000, egresos: 181000000 },
      { label: '2026 (Proy)', ingresos: 410000000, egresos: 262000000 }
    ]
  },

  // Servicios Más Solicitados (Donut Breakdown)
  servicesBreakdown: [
    {
      id: 'srv-solar',
      name: 'Paneles Solares & Sistemas Híbridos',
      percentage: 45,
      amount: 68500000,
      color: '#FF7A00',
      icon: '☀️',
      featured: true
    },
    {
      id: 'srv-obras',
      name: 'Obras e Instalaciones Industriales / TGBT',
      percentage: 27,
      amount: 41200000,
      color: '#0A1C36',
      icon: '⚡',
      featured: false
    },
    {
      id: 'srv-aptos',
      name: 'Aptos Eléctricos & Protocolos DCI (EDELAP)',
      percentage: 16,
      amount: 24400000,
      color: '#0284C7',
      icon: '📋',
      featured: false
    },
    {
      id: 'srv-loteos',
      name: 'Proyectos de Infraestructura & Loteos',
      percentage: 12,
      amount: 18300000,
      color: '#10B981',
      icon: '🏗️',
      featured: false
    }
  ],

  // Clientes Registrados
  clients: [
    {
      id: 'cli-001',
      name: 'Cerámica Platense Industrial S.A.',
      contact: 'Ing. Marcelo Rossi',
      cuit: '30-71284910-4',
      phone: '0221 482-9911',
      email: 'mrossi@ceramicaplatense.com.ar',
      location: 'Parque Industrial La Plata, Calle 508 y Ruta 2',
      type: 'industrial',
      activeProjects: 1,
      totalBilled: 54800000
    },
    {
      id: 'cli-002',
      name: 'Fideicomiso Residencial Los Robles',
      contact: 'Arq. Sebastián Morales',
      cuit: '30-71882349-2',
      phone: '0221 512-8844',
      email: 'smorales@losroblescitybell.com.ar',
      location: 'Calle 467 e/ 28 y 30, City Bell',
      type: 'desarrollador',
      activeProjects: 2,
      totalBilled: 32600000
    },
    {
      id: 'cli-003',
      name: 'Distribuidora Mayorista Calle 12',
      contact: 'Dr. Gustavo Varela',
      cuit: '20-28491024-8',
      phone: '0221 421-3300',
      email: 'gvarela@distribuidoracalle12.com',
      location: 'Calle 12 N° 1480, La Plata Centro',
      type: 'comercial',
      activeProjects: 1,
      totalBilled: 4200000
    },
    {
      id: 'cli-004',
      name: 'Familia Larrea - Residencial Sustentable',
      contact: 'Dr. Andrés Larrea',
      cuit: '20-31849201-3',
      phone: '0221 614-2200',
      email: 'andres.larrea@gmail.com',
      location: 'Barrio Las Huertas, Gonnet',
      type: 'residencial',
      activeProjects: 1,
      totalBilled: 18450000
    },
    {
      id: 'cli-005',
      name: 'Frigorífico Regional Berisso S.R.L.',
      contact: 'Esteban Di Meglio',
      cuit: '33-69812400-9',
      phone: '0221 464-1188',
      email: 'gerencia@frigorificoberisso.ar',
      location: 'Av. Montevideo y 45, Berisso',
      type: 'industrial',
      activeProjects: 1,
      totalBilled: 26800000
    }
  ],

  // Obras y Proyectos
  projects: [
    {
      id: 'proj-001',
      code: 'GTL-2026-01',
      name: 'Parque Solar Fotovoltaico & Autoconsumo Industrial 45 kWp',
      client: 'Cerámica Platense Industrial S.A.',
      type: 'solar_hibrido',
      typeLabel: 'Solar Industrial & Autoconsumo',
      location: 'Parque Industrial La Plata, Buenos Aires',
      responsible: 'Ing. Joaquín Tenti',
      status: 'ejecucion',
      statusLabel: 'En Ejecución',
      progress: 78,
      amount: 54800000,
      cost: 36200000,
      margin: 33.9,
      startDate: '2026-06-15',
      endDate: '2026-10-30',
      solarSpecs: {
        potencia: '45 kWp Instalados',
        tipo: 'Híbrido Trifásico Industrial con Inyección EDELAP',
        paneles: '96 Módulos Monocristalinos Tier 1 550W',
        inversor: 'Growatt MAX 50KTL3 LV Onda Pura',
        baterias: 'Sin acumulación (On-Grid / Autoconsumo Industrial)',
        generacionAnual: '52 MWh / Año Estimados'
      },
      ganttStages: [
        { name: '1. Relevamiento estructural y cálculo de carga', startPct: 0, widthPct: 15, status: 'completed' },
        { name: '2. Memoria técnica y aprobación ante EDELAP', startPct: 15, widthPct: 20, status: 'completed' },
        { name: '3. Compra de módulos, estructuras e inversor', startPct: 35, widthPct: 15, status: 'completed' },
        { name: '4. Montaje estructural en cubierta metálica', startPct: 50, widthPct: 25, status: 'completed' },
        { name: '5. Cableado DC/AC y conexionado de tablero', startPct: 70, widthPct: 15, status: 'in_progress' },
        { name: '6. Pruebas de inyección y puesta en marcha final', startPct: 85, widthPct: 15, status: 'pending' }
      ],
      checklist: [
        { task: 'Estudio de radiación solar y sombreado en techo', done: true },
        { task: 'Memoria de cálculo y planos unifilares en CAD', done: true },
        { task: 'Expediente técnico presentado ante EDELAP', done: true },
        { task: 'Protocolo de medición de puesta a tierra (< 5 Ohms)', done: true },
        { task: 'Certificación DCI de aptitud eléctrica firmada', done: false },
        { task: 'Acta de recepción definitiva firmada por el cliente', done: false }
      ]
    },
    {
      id: 'proj-002',
      code: 'GTL-2026-02',
      name: 'Sistema Solar Híbrido 10 kWp con Banco de Baterías LiFePO4',
      client: 'Familia Larrea - Residencial Sustentable',
      type: 'solar_hibrido',
      typeLabel: 'Solar Híbrido con Baterías',
      location: 'Calle 493 y 18, Gonnet, La Plata',
      responsible: 'Ing. Joaquín Tenti',
      status: 'certificacion',
      statusLabel: 'En Certificación DCI',
      progress: 92,
      amount: 18450000,
      cost: 11900000,
      margin: 35.5,
      startDate: '2026-07-01',
      endDate: '2026-09-25',
      solarSpecs: {
        potencia: '10.5 kWp Instalados',
        tipo: 'Híbrido Inteligente con Respaldo Crítico (Zero-Export)',
        paneles: '18 Módulos Canadian Solar 585W TopCon',
        inversor: 'Deye 10kW Híbrido Split-Phase',
        baterias: 'Banco Litio 15.36 kWh (3x 5.12 kWh LiFePO4)',
        autonomia: '24 hs continuas ante cortes de red pública'
      },
      ganttStages: [
        { name: '1. Cálculo térmico y dimensionamiento de cargas', startPct: 0, widthPct: 20, status: 'completed' },
        { name: '2. Montaje de paneles y canalización subterránea', startPct: 20, widthPct: 35, status: 'completed' },
        { name: '3. Instalación de banco LiFePO4 y transferencia', startPct: 55, widthPct: 25, status: 'completed' },
        { name: '4. Medición PAT con telurímetro y protocolo DCI', startPct: 80, widthPct: 20, status: 'in_progress' }
      ],
      checklist: [
        { task: 'Plano unifilar de tablero de transferencia', done: true },
        { task: 'Medición de resistencia de jabalinas (1.8 Ohms)', done: true },
        { task: 'Firma de protocolo DCI por Ing. Joaquín Tenti', done: true },
        { task: 'Inspección final y entrega de manual operativo', done: false }
      ]
    },
    {
      id: 'proj-003',
      code: 'GTL-2026-03',
      name: 'Tablero General de Distribución TGBT 1600A & Corrección Cos Phi',
      client: 'Frigorífico Regional Berisso S.R.L.',
      type: 'industrial',
      typeLabel: 'Instalación Industrial & TGBT',
      location: 'Av. Montevideo y 45, Berisso',
      responsible: 'Ing. Martín Solís',
      status: 'ejecucion',
      statusLabel: 'En Ejecución',
      progress: 65,
      amount: 26800000,
      cost: 17200000,
      margin: 35.8,
      startDate: '2026-07-20',
      endDate: '2026-11-15',
      solarSpecs: null,
      ganttStages: [
        { name: '1. Ingeniería de detalle bajo norma AEA 90364', startPct: 0, widthPct: 25, status: 'completed' },
        { name: '2. Armado de envolvente y barrajes de cobre', startPct: 25, widthPct: 35, status: 'completed' },
        { name: '3. Banco automático de capacitores 120 kVAr', startPct: 60, widthPct: 20, status: 'in_progress' },
        { name: '4. Pruebas dinámicas y parada de planta programada', startPct: 80, widthPct: 20, status: 'pending' }
      ],
      checklist: [
        { task: 'Cálculo de corrientes de cortocircuito Icc', done: true },
        { task: 'Verificación de selectividad termomagnética', done: true },
        { task: 'Ensayo de aislamiento dieléctrico', done: false },
        { task: 'Protocolo de puesta en marcha industrial', done: false }
      ]
    },
    {
      id: 'proj-004',
      code: 'GTL-2026-04',
      name: 'Infraestructura Eléctrica Subterránea & Alumbrado Loteo Los Robles',
      client: 'Fideicomiso Residencial Los Robles',
      type: 'loteo',
      typeLabel: 'Infraestructura Urbana & Loteo',
      location: 'Calle 467 e/ 28 y 30, City Bell',
      responsible: 'Ing. Joaquín Tenti',
      status: 'relevamiento',
      statusLabel: 'Proyecto & Cálculo',
      progress: 35,
      amount: 32600000,
      cost: 21500000,
      margin: 34.0,
      startDate: '2026-08-10',
      endDate: '2027-01-20',
      solarSpecs: null,
      ganttStages: [
        { name: '1. Relevamiento topográfico y tendido subterráneo', startPct: 0, widthPct: 30, status: 'completed' },
        { name: '2. Proyecto de SET transformadora 315 kVA', startPct: 30, widthPct: 25, status: 'in_progress' },
        { name: '3. Zanjeo, cableado IRAM 2178 y columnas LED', startPct: 55, widthPct: 30, status: 'pending' },
        { name: '4. Homologación final ante EDELAP', startPct: 85, widthPct: 15, status: 'pending' }
      ],
      checklist: [
        { task: 'Factibilidad de suministro eléctrico otorgada', done: true },
        { task: 'Cálculo de caídas de tensión por circuito', done: true },
        { task: 'Pliego licitatorio de columnas de alumbrado', done: false },
        { task: 'Aprobación definitiva de subestación', done: false }
      ]
    },
    {
      id: 'proj-005',
      code: 'GTL-2026-05',
      name: 'Readecuación Eléctrica Integral & Protocolo DCI para Habilitación',
      client: 'Distribuidora Mayorista Calle 12',
      type: 'apto_electrico',
      typeLabel: 'Apto Eléctrico & DCI',
      location: 'Calle 12 N° 1480, La Plata',
      responsible: 'Ing. Joaquín Tenti',
      status: 'finalizado',
      statusLabel: 'Listo para Entrega',
      progress: 98,
      amount: 4200000,
      cost: 2450000,
      margin: 41.6,
      startDate: '2026-08-25',
      endDate: '2026-09-18',
      solarSpecs: null,
      ganttStages: [
        { name: '1. Relevamiento de circuitos y tablero comercial', startPct: 0, widthPct: 30, status: 'completed' },
        { name: '2. Reemplazo de diferenciales y puesta a tierra', startPct: 30, widthPct: 40, status: 'completed' },
        { name: '3. Medición con telurímetro y firma DCI', startPct: 70, widthPct: 30, status: 'completed' }
      ],
      checklist: [
        { task: 'Medición de resistencia PAT (< 3.2 Ohms)', done: true },
        { task: 'Protocolo DCI de aptitud eléctrica confeccionado', done: true },
        { task: 'Firma profesional Ing. Joaquín Tenti', done: true },
        { task: 'Presentación en Mesa de Entradas Municipalidad', done: true }
      ]
    },
    {
      id: 'proj-006',
      code: 'GTL-2026-06',
      name: 'Sistema Solar Híbrido 8 kWp para Centro Médico Diagnóstico',
      client: 'Fideicomiso Residencial Los Robles',
      type: 'solar_hibrido',
      typeLabel: 'Solar Híbrido Respaldo Médico',
      location: 'Calle 7 y 42, La Plata Centro',
      responsible: 'Ing. Joaquín Tenti',
      status: 'ejecucion',
      statusLabel: 'En Ejecución',
      progress: 55,
      amount: 21500000,
      cost: 14200000,
      margin: 33.9,
      startDate: '2026-08-01',
      endDate: '2026-10-15',
      solarSpecs: {
        potencia: '8.4 kWp Instalados',
        tipo: 'Híbrido con Conmutación Ultrarrápida (< 10ms)',
        paneles: '16 Módulos Jinko Solar 540W',
        inversor: 'Growatt SPH 8000',
        baterias: 'Banco Litio 10.24 kWh LiFePO4',
        autonomia: '100% quirófano y conservación de vacunas'
      },
      ganttStages: [
        { name: '1. Relevamiento de cargas críticas médicas', startPct: 0, widthPct: 20, status: 'completed' },
        { name: '2. Anclaje de paneles en terraza técnica', startPct: 20, widthPct: 35, status: 'completed' },
        { name: '3. Instalación de inversores y protecciones DC', startPct: 55, widthPct: 25, status: 'in_progress' },
        { name: '4. Ensayos de conmutación sin corte visible', startPct: 80, widthPct: 20, status: 'pending' }
      ],
      checklist: [
        { task: 'Plano de circuito aislado de emergencia', done: true },
        { task: 'Medición PAT independiente de electromedicina', done: true },
        { task: 'Certificado de aptitud DCI', done: false }
      ]
    }
  ],

  // Presupuestos Registrados
  budgets: [
    {
      id: 'pre-001',
      code: 'PRE-GTL-2026-088',
      client: 'Familia Larrea - Residencial Sustentable',
      projectType: 'Paneles Solares & Sistema Híbrido con Baterías',
      date: '2026-09-02',
      validityDays: 15,
      total: 18450000,
      status: 'aprobado',
      statusLabel: 'Aprobado por Cliente',
      solarKwh: 900,
      items: [
        { desc: '18 Módulos Solares Fotovoltaicos 585W Monocristalinos Tier 1', qty: 18, unitPrice: 285000, total: 5130000 },
        { desc: 'Inversor Híbrido Inteligente 10kW Trifásico Onda Pura', qty: 1, unitPrice: 4200000, total: 4200000 },
        { desc: 'Banco de Baterías de Litio LiFePO4 15.36 kWh (3 módulos)', qty: 3, unitPrice: 1950000, total: 5850000 },
        { desc: 'Estructura de Montaje Coplanar de Aluminio Anodizado', qty: 1, unitPrice: 890000, total: 890000 },
        { desc: 'Tablero de Protecciones DC/AC (Descargadores, Seccionadores)', qty: 1, unitPrice: 680000, total: 680000 },
        { desc: 'Ingeniería de Detalle, Montaje, Puesta a Tierra y Dirección Técnica', qty: 1, unitPrice: 1700000, total: 1700000 }
      ]
    },
    {
      id: 'pre-002',
      code: 'PRE-GTL-2026-089',
      client: 'Distribuidora Mayorista Calle 12',
      projectType: 'Readecuación Eléctrica & Protocolo DCI para Habilitación',
      date: '2026-09-08',
      validityDays: 15,
      total: 4200000,
      status: 'enviado',
      statusLabel: 'Enviado / En Espera',
      solarKwh: 0,
      items: [
        { desc: 'Relevamiento in situ, plano unifilar reglamentario y memoria', qty: 1, unitPrice: 950000, total: 950000 },
        { desc: 'Reemplazo de interruptores termomagnéticos y disyuntores 30mA', qty: 6, unitPrice: 85000, total: 510000 },
        { desc: 'Instalación de nueva jabalina de cobre y puesta a tierra reglamentaria', qty: 1, unitPrice: 440000, total: 440000 },
        { desc: 'Medición de resistencia con telurímetro homologado y protocolo DCI', qty: 1, unitPrice: 800000, total: 800000 },
        { desc: 'Firma profesional colegiada del Ing. Joaquín Tenti ante Municipio/EDELAP', qty: 1, unitPrice: 1500000, total: 1500000 }
      ]
    },
    {
      id: 'pre-003',
      code: 'PRE-GTL-2026-090',
      client: 'Cerámica Platense Industrial S.A.',
      projectType: 'Ampliación Parque Solar Industrial 45 kWp a 80 kWp',
      date: '2026-09-11',
      validityDays: 20,
      total: 54800000,
      status: 'enviado',
      statusLabel: 'En Negociación',
      solarKwh: 5200,
      items: [
        { desc: '70 Módulos Solares 550W Tier 1 para cubierta nave 2', qty: 70, unitPrice: 280000, total: 19600000 },
        { desc: 'Inversor On-Grid Industrial 40kW con Monitoreo en Nube', qty: 1, unitPrice: 12500000, total: 12500000 },
        { desc: 'Tendido subterráneo 3x50mm² + neutro y protecciones seccionales', qty: 1, unitPrice: 8900000, total: 8900000 },
        { desc: 'Gestión integral de inyección y medidor bidireccional EDELAP', qty: 1, unitPrice: 4800000, total: 4800000 },
        { desc: 'Dirección de obra técnica profesional colegiada', qty: 1, unitPrice: 9000000, total: 9000000 }
      ]
    },
    {
      id: 'pre-004',
      code: 'PRE-GTL-2026-091',
      client: 'Barrio Cerrado Los Ceibos La Plata',
      projectType: 'Infraestructura Eléctrica para Loteo (60 Parcelas)',
      date: '2026-09-12',
      validityDays: 30,
      total: 32600000,
      status: 'borrador',
      statusLabel: 'En Elaboración Técnica',
      solarKwh: 0,
      items: [
        { desc: 'Proyecto ejecutivo de media tensión y cruce de calles', qty: 1, unitPrice: 4500000, total: 4500000 },
        { desc: 'Tendido subterráneo 1800 metros cable tripolar aluminio', qty: 1, unitPrice: 14800000, total: 14800000 },
        { desc: 'Columnas metálicas con luminarias LED 150W homologadas', qty: 28, unitPrice: 310000, total: 8680000 },
        { desc: 'Gestión y firma de apto eléctrico de loteo ante EDELAP', qty: 1, unitPrice: 4620000, total: 4620000 }
      ]
    }
  ],

  // CRM Leads (Sincronizados con la Landing Page Web)
  leads: [
    {
      id: 'lead-001',
      name: 'Ing. Marcelo Rossi (Cerámica Platense)',
      phone: '0221 482-9911',
      email: 'mrossi@ceramicaplatense.com.ar',
      service: 'Paneles Solares & Sistemas Híbridos',
      projectType: 'Industrial',
      source: 'Landing Web (Cotizador)',
      date: '2026-09-13 18:32',
      status: 'en_obra',
      statusLabel: 'Obra en Ejecución',
      notes: 'Consulta generada desde el filtro interactivo web solicitando asesoramiento por corte de suministro.'
    },
    {
      id: 'lead-002',
      name: 'Dr. Gustavo Varela (Mayorista)',
      phone: '0221 421-3300',
      email: 'gvarela@distribuidoracalle12.com',
      service: 'Aptos Eléctricos & Certificaciones DCI',
      projectType: 'Comercial',
      source: 'Landing Web (Formulario)',
      date: '2026-09-13 21:14',
      status: 'cotizado',
      statusLabel: 'Presupuesto Enviado',
      notes: 'Precisa habilitación municipal urgente antes del 30 de septiembre.'
    },
    {
      id: 'lead-003',
      name: 'Arq. Florencia Benítez',
      phone: '0221 544-9988',
      email: 'fbenitez.estudio@gmail.com',
      service: 'Paneles Solares & Sistemas Híbridos',
      projectType: 'Residencial Country',
      source: 'Landing Web (Email directo)',
      date: '2026-09-14 00:45',
      status: 'nuevo_lead',
      statusLabel: 'Nuevo Lead',
      notes: 'Casa en Grand Bell. Quiere independencia ante cortes de luz y ahorro en factura eléctrica.'
    },
    {
      id: 'lead-004',
      name: 'Desarrollos Urbanos La Plata S.R.L.',
      phone: '0221 688-3322',
      email: 'obras@desarrolloslp.ar',
      service: 'Loteos y Desarrollos Urbanos',
      projectType: 'Loteo / Urbanización',
      source: 'Llamada Telefónica (0221 571-3005)',
      date: '2026-09-12 11:20',
      status: 'en_evaluacion',
      statusLabel: 'En Evaluación Técnica',
      notes: 'Tendido subterráneo para 45 lotes en Los Hornos.'
    },
    {
      id: 'lead-005',
      name: 'Laboratorios Farmacéuticos Gonnet',
      phone: '0221 471-0022',
      email: 'mantenimiento@labgonnet.com.ar',
      service: 'Instalaciones Industriales y Comerciales',
      projectType: 'Industrial',
      source: 'Recomendación Directa',
      date: '2026-09-10 14:15',
      status: 'en_evaluacion',
      statusLabel: 'Visita Técnica Asignada',
      notes: 'Tablero seccional para cadena de frío con transferencia automática.'
    }
  ],

  // Agenda y Visitas Técnicas
  agenda: [
    {
      id: 'age-001',
      title: 'Medición de Puesta a Tierra y Ensayo PAT',
      project: 'Distribuidora Mayorista Calle 12',
      location: 'Calle 12 N° 1480, La Plata',
      date: 'Hoy • 10:30 hs',
      technician: 'Ing. Joaquín Tenti',
      type: 'Medición Normativa',
      badgeClass: 'badge-primary'
    },
    {
      id: 'age-002',
      title: 'Relevamiento de sombreado y anclajes en terraza',
      project: 'Residencia Grand Bell (Arq. Florencia Benítez)',
      location: 'City Bell, La Plata',
      date: 'Hoy • 15:00 hs',
      technician: 'Ing. Martín Solís',
      type: 'Relevamiento Solar',
      badgeClass: 'badge-warning'
    },
    {
      id: 'age-003',
      title: 'Inspección técnica conjunta con inspector EDELAP',
      project: 'Cerámica Platense Industrial S.A.',
      location: 'Parque Industrial La Plata',
      date: 'Mañana • 09:00 hs',
      technician: 'Ing. Joaquín Tenti',
      type: 'Inspección Distribuidora',
      badgeClass: 'badge-info'
    }
  ],

  // Personal y Cuadrillas Técnicas
  staff: [
    {
      id: 'stf-001',
      name: 'Ing. Joaquín Tenti',
      role: 'Director Técnico & Proyectista Titular',
      matricula: 'CIPBA Mat. 48.219 / AEA 12.840',
      phone: '0221 571-3005',
      assignedProjects: ['Parque Solar 45 kWp', 'Sistema Solar Híbrido 10 kWp', 'Loteo Los Robles'],
      status: 'Activo / Matriculado',
      statusClass: 'badge-success'
    },
    {
      id: 'stf-002',
      name: 'Ing. Martín Solís',
      role: 'Ingeniero Proyectista & Cálculo',
      matricula: 'CIPBA Mat. 52.890',
      phone: '0221 499-1288',
      assignedProjects: ['TGBT Frigorífico Berisso', 'Apto DCI Calle 12'],
      status: 'Activo / Matriculado',
      statusClass: 'badge-success'
    },
    {
      id: 'stf-003',
      name: 'Tec. Federico Benítez',
      role: 'Jefe de Cuadrilla de Montaje Solar',
      matricula: 'Habilitación Instalador Solar Res. 2024',
      phone: '0221 633-8811',
      assignedProjects: ['Parque Solar 45 kWp', 'Solar Centro Médico'],
      status: 'En Obra Activa',
      statusClass: 'badge-primary'
    },
    {
      id: 'stf-004',
      name: 'Lucas Peralta & Cuadrilla B',
      role: 'Electricistas Montadores de Potencia',
      matricula: 'Matrícula Electricista Cat. 1',
      phone: '0221 502-3344',
      assignedProjects: ['TGBT Frigorífico Berisso', 'Loteo Los Robles'],
      status: 'En Obra Activa',
      statusClass: 'badge-primary'
    }
  ],

  // Compras y Depósito La Plata
  stock: [
    {
      id: 'stk-001',
      sku: 'SOL-MOD-550',
      name: 'Panel Solar Fotovoltaico 550W Tier 1 Monocristalino',
      category: 'Energía Solar',
      currentStock: 48,
      minAlert: 20,
      unit: 'Unidades',
      price: 280000,
      status: 'OK'
    },
    {
      id: 'stk-002',
      sku: 'SOL-INV-HYB-8K',
      name: 'Inversor Solar Híbrido 8kW Onda Pura con Wifi',
      category: 'Energía Solar',
      currentStock: 2,
      minAlert: 3,
      unit: 'Equipos',
      price: 3650000,
      status: 'CRÍTICO'
    },
    {
      id: 'stk-003',
      sku: 'SOL-BAT-LIT-5K',
      name: 'Batería de Litio LiFePO4 5.12 kWh / 48V Rackeable',
      category: 'Energía Solar',
      currentStock: 4,
      minAlert: 4,
      unit: 'Módulos',
      price: 1950000,
      status: 'ALERTA'
    },
    {
      id: 'stk-004',
      sku: 'ELE-JAB-COP-58',
      name: 'Jabalina de Acero-Cobre 5/8" x 2.40m IRAM 2309',
      category: 'Puesta a Tierra',
      currentStock: 22,
      minAlert: 10,
      unit: 'Unidades',
      price: 48000,
      status: 'OK'
    },
    {
      id: 'stk-005',
      sku: 'ELE-CAB-SUB-435',
      name: 'Cable Subterráneo Cobre 4x35mm² IRAM 2178',
      category: 'Cables & Conductores',
      currentStock: 350,
      minAlert: 150,
      unit: 'Metros',
      price: 38500,
      status: 'OK'
    },
    {
      id: 'stk-006',
      sku: 'ELE-INT-DIF-440',
      name: 'Interruptor Diferencial Tetrapolar 40A / 30mA Schneider',
      category: 'Protecciones',
      currentStock: 14,
      minAlert: 6,
      unit: 'Unidades',
      price: 92000,
      status: 'OK'
    }
  ]
};

// ==========================================================================
// 2. ENRUTADOR REACTIVO Y MOTOR DE VISTAS (SPA ROUTER)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
  initSidebar();
  initGlobalSearch();
  initModals();
  initQuickActions();

  // Cargar vista inicial por Hash o Dashboard por defecto
  const initialView = window.location.hash.replace('#', '') || 'dashboard';
  navigateTo(initialView);
});

/**
 * Gestión del tema Claro / Oscuro con persistencia
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('gtl_erp_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('gtl_erp_theme', next);
      // Redibujar gráficos para sincronizar colores
      if (window.location.hash.includes('dashboard') || !window.location.hash) {
        renderFinancialChart();
        renderServicesDonut();
      }
    });
  }
}

/**
 * Enrutador basado en Hash
 */
function initRouter() {
  window.addEventListener('hashchange', () => {
    const viewId = window.location.hash.replace('#', '') || 'dashboard';
    navigateTo(viewId);
  });
}

function navigateTo(viewId) {
  // Actualizar clases activas en navegación
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  navLinks.forEach(link => {
    const linkView = link.getAttribute('data-view');
    link.classList.toggle('active', linkView === viewId);
  });

  // Renderizar la vista solicitada
  renderView(viewId);

  // Cerrar sidebar móvil si estuviera abierto
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    sidebar.classList.remove('mobile-open');
    backdrop.classList.remove('open');
  }

  // Scroll arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Despachador de Vistas
 */
function renderView(viewId) {
  const container = document.getElementById('mainViewContainer');
  if (!container) return;

  switch (viewId) {
    case 'dashboard':
      container.innerHTML = getDashboardViewHTML();
      setupDashboardEvents();
      break;
    case 'obras':
      container.innerHTML = getObrasViewHTML();
      setupObrasEvents();
      break;
    case 'presupuestos':
      container.innerHTML = getPresupuestosViewHTML();
      setupPresupuestosEvents();
      break;
    case 'crm':
      container.innerHTML = getCrmViewHTML();
      setupCrmEvents();
      break;
    case 'agenda':
      container.innerHTML = getAgendaViewHTML();
      break;
    case 'personal':
      container.innerHTML = getPersonalViewHTML();
      break;
    case 'compras':
      container.innerHTML = getComprasViewHTML();
      break;
    case 'documentos':
      container.innerHTML = getDocumentosViewHTML();
      break;
    case 'finanzas':
      container.innerHTML = getFinanzasViewHTML();
      break;
    case 'reportes':
      container.innerHTML = getReportesViewHTML();
      break;
    case 'configuracion':
      container.innerHTML = getConfiguracionViewHTML();
      break;
    default:
      container.innerHTML = getDashboardViewHTML();
      setupDashboardEvents();
      break;
  }
}

// ==========================================================================
// 3. VISTA 1: DASHBOARD GENERAL (MÓDULO PRIORITARIO)
// ==========================================================================

function getDashboardViewHTML() {
  const p = ERP_DB.activePeriod;
  const periodLabel = p === 'dia' ? 'Hoy' : p === 'semana' ? 'Esta Semana' : p === 'mes' ? 'Este Mes' : 'Año 2026';

  // Cálculos dinámicos según el dataset del período
  const dataList = ERP_DB.financeData[p] || ERP_DB.financeData.mes;
  const totalIngresos = dataList.reduce((acc, item) => acc + item.ingresos, 0);
  const totalEgresos = dataList.reduce((acc, item) => acc + item.egresos, 0);
  const balanceNeto = totalIngresos - totalEgresos;
  const margenNeto = ((balanceNeto / totalIngresos) * 100).toFixed(1);

  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Panel de Control General</h1>
        <p class="view-subtitle">Dirección y control integral de obras eléctricas y energía solar · La Plata</p>
      </div>

      <div class="view-controls">
        <!-- Selector de Período -->
        <div class="period-selector">
          <button class="period-btn ${p === 'dia' ? 'active' : ''}" data-period="dia">Día</button>
          <button class="period-btn ${p === 'semana' ? 'active' : ''}" data-period="semana">Semana</button>
          <button class="period-btn ${p === 'mes' ? 'active' : ''}" data-period="mes">Mes</button>
          <button class="period-btn ${p === 'ano' ? 'active' : ''}" data-period="ano">Año</button>
        </div>

        <button class="btn btn-secondary btn-sm" id="btnExportReport">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>Exportar Informe</span>
        </button>

        <button class="btn btn-primary btn-sm" id="btnDashNewProject">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>+ Nueva Obra</span>
        </button>
      </div>
    </div>

    <!-- 5 TARJETAS DE KPIS PRINCIPALES -->
    <div class="kpi-grid">
      <!-- KPI 1: Proyectos Activos -->
      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-label">Obras Activas</span>
          <div class="kpi-icon-wrap primary">⚡</div>
        </div>
        <div class="kpi-value">${ERP_DB.projects.length}</div>
        <div class="kpi-meta">
          <span class="kpi-trend positive">↑ 3</span>
          <span class="kpi-detail">3 solares • 2 industriales • 1 apto</span>
        </div>
      </div>

      <!-- KPI 2: Facturación del Período -->
      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-label">Ingresos Facturados</span>
          <div class="kpi-icon-wrap success">💰</div>
        </div>
        <div class="kpi-value">$${formatCompactNumber(totalIngresos)}</div>
        <div class="kpi-meta">
          <span class="kpi-trend positive">↑ +18.4%</span>
          <span class="kpi-detail">vs. meta ${periodLabel.toLowerCase()}</span>
        </div>
      </div>

      <!-- KPI 3: Costos y Compras -->
      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-label">Costos & Compras</span>
          <div class="kpi-icon-wrap warning">📦</div>
        </div>
        <div class="kpi-value">$${formatCompactNumber(totalEgresos)}</div>
        <div class="kpi-meta">
          <span class="kpi-trend negative">↓ -4.2%</span>
          <span class="kpi-detail">paneles, inversores, cables</span>
        </div>
      </div>

      <!-- KPI 4: Balance Neto Operativo (Destacado) -->
      <div class="kpi-card highlight-balance">
        <div class="kpi-card-header">
          <span class="kpi-label">Balance Neto Operativo</span>
          <div class="kpi-icon-wrap">☀️</div>
        </div>
        <div class="kpi-value">$${formatCompactNumber(balanceNeto)}</div>
        <div class="kpi-meta">
          <span class="kpi-trend positive" style="color: #4ADE80;">Margen +${margenNeto}%</span>
          <span class="kpi-detail">rentabilidad a favor</span>
        </div>
      </div>

      <!-- KPI 5: Rentabilidad Media -->
      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-label">Rentabilidad Media</span>
          <div class="kpi-icon-wrap info">📈</div>
        </div>
        <div class="kpi-value">35.2%</div>
        <div class="kpi-meta">
          <span class="kpi-trend positive">↑ +2.8%</span>
          <span class="kpi-detail">liderado por energía solar</span>
        </div>
      </div>
    </div>

    <!-- BLOQUE NORMATIVO EXCLUSIVO: PROYECTOS CON SEGUIMIENTO TÉCNICO PENDIENTE -->
    <div class="normative-alert-card">
      <div class="normative-info">
        <div class="normative-badge-icon">📋</div>
        <div class="normative-text">
          <h4>Proyectos con Seguimiento Técnico y Normativo Pendiente</h4>
          <p>Mediciones de puesta a tierra (< 5Ω), inspecciones EDELAP y certificaciones DCI obligatorias bajo norma AEA 90364</p>
        </div>
      </div>
      <div class="normative-items-chips">
        <div class="normative-chip" title="Medición PAT con telurímetro">
          <span class="dot" style="background-color: var(--gtl-orange);"></span>
          <span>Apto DCI Calle 12 (Medición PAT Hoy)</span>
        </div>
        <div class="normative-chip" title="Inspección EDELAP en Parque Industrial">
          <span class="dot" style="background-color: var(--color-info);"></span>
          <span>Parque Solar 45 kWp (Inspección EDELAP Mañana)</span>
        </div>
        <div class="normative-chip" title="Aprobación Subestación">
          <span class="dot" style="background-color: var(--color-warning);"></span>
          <span>Loteo Los Robles (Expediente SET)</span>
        </div>
      </div>
    </div>

    <!-- SECCIÓN DE GRÁFICOS: FLUJO FINANCIERO & SERVICIOS MÁS SOLICITADOS -->
    <div class="dashboard-charts-grid">
      <!-- Columna 1: Gráfico Financiero (Ingresos vs Egresos) -->
      <div class="chart-card">
        <div class="chart-header">
          <div class="chart-title-block">
            <h3>Flujo Financiero: Ingresos vs. Egresos</h3>
            <p>Comparativa de facturación cobrada y costos operativos en ${periodLabel.toLowerCase()}</p>
          </div>

          <div class="chart-controls">
            <!-- Selector $ vs % -->
            <div class="chart-type-pill">
              <button class="chart-type-btn ${ERP_DB.financeChartMode === 'amount' ? 'active' : ''}" data-mode="amount">$ Montos</button>
              <button class="chart-type-btn ${ERP_DB.financeChartMode === 'percentage' ? 'active' : ''}" data-mode="percentage">% Margen</button>
            </div>

            <!-- Selector de Tipo de Gráfico -->
            <div class="chart-type-pill">
              <button class="chart-type-btn ${ERP_DB.financeChartType === 'bars' ? 'active' : ''}" data-chart="bars">Barras</button>
              <button class="chart-type-btn ${ERP_DB.financeChartType === 'lines' ? 'active' : ''}" data-chart="lines">Líneas</button>
              <button class="chart-type-btn ${ERP_DB.financeChartType === 'area' ? 'active' : ''}" data-chart="area">Área</button>
              <button class="chart-type-btn ${ERP_DB.financeChartType === 'donut' ? 'active' : ''}" data-chart="donut">Dona</button>
              <button class="chart-type-btn ${ERP_DB.financeChartType === 'pie' ? 'active' : ''}" data-chart="pie">Torta</button>
            </div>
          </div>
        </div>

        <div class="chart-canvas-wrapper" id="financeChartContainer">
          <!-- Inyectado reactivamente por renderFinancialChart() -->
        </div>
      </div>

      <!-- Columna 2: Servicios Más Solicitados (Donut con Logo de GTL) -->
      <div class="chart-card">
        <div class="chart-header">
          <div class="chart-title-block">
            <h3>Servicios Más Solicitados</h3>
            <p>Distribución por línea de negocio activa</p>
          </div>
          <span class="badge badge-primary">Especialidad Solar</span>
        </div>

        <div class="donut-chart-container">
          <div class="donut-svg-wrap">
            <svg class="finance-svg-chart" viewBox="0 0 200 200" id="servicesDonutSvg">
              <!-- Círculos de Dona inyectados por renderServicesDonut() -->
            </svg>
            <div class="donut-center-logo">
              <img src="/GTL-ERP-muestra/assets/logo.png" alt="GTL Logo" />
              <span class="donut-center-total">18 Obras</span>
            </div>
          </div>

          <ul class="services-breakdown-list">
            ${ERP_DB.servicesBreakdown.map(s => `
              <li class="service-breakdown-item ${s.featured ? 'featured-solar' : ''}">
                <div class="service-item-label">
                  <span class="service-color-dot" style="background-color: ${s.color};"></span>
                  <span>${s.icon} ${s.name}</span>
                </div>
                <div class="service-item-values">
                  <span class="service-item-pct">${s.percentage}%</span>
                  <span class="service-item-amount">$${formatCompactNumber(s.amount)}</span>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>

    <!-- TABLA DE OBRAS RECIENTES EN EJECUCIÓN -->
    <div class="table-card">
      <div class="table-header-bar">
        <div class="table-title-wrap">
          <h3>Proyectos en Ejecución & Control de Avance</h3>
          <p>Obras activas bajo dirección del Ing. Joaquín Tenti</p>
        </div>
        <a href="#obras" class="btn btn-secondary btn-sm">Ver Todas las Obras →</a>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Proyecto / Obra</th>
              <th>Cliente</th>
              <th>Tipo & Tecnología</th>
              <th>Avance</th>
              <th>Monto Contrato</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_DB.projects.slice(0, 4).map(p => `
              <tr onclick="openProjectDetail('${p.id}')">
                <td><span class="project-code-badge">${p.code}</span></td>
                <td>
                  <strong>${p.name}</strong><br/>
                  <small style="color: var(--text-muted);">${p.location}</small>
                </td>
                <td>${p.client}</td>
                <td>
                  ${p.solarSpecs ? `<span class="solar-spec-tag">☀️ ${p.solarSpecs.potencia}</span>` : `<span class="badge badge-subtle" style="color: var(--text-main);">${p.typeLabel}</span>`}
                </td>
                <td style="min-width: 140px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 4px;">
                    <span>Progreso</span>
                    <strong>${p.progress}%</strong>
                  </div>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar-fill" style="width: ${p.progress}%;"></div>
                  </div>
                </td>
                <td style="font-family: var(--font-mono); font-weight: 700;">$${p.amount.toLocaleString('es-AR')}</td>
                <td>
                  <span class="badge ${p.status === 'finalizado' ? 'badge-success' : p.status === 'certificacion' ? 'badge-info' : 'badge-primary'}">${p.statusLabel}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function setupDashboardEvents() {
  // Manejo de botones de período
  const periodBtns = document.querySelectorAll('.period-btn');
  periodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const period = btn.getAttribute('data-period');
      ERP_DB.activePeriod = period;
      renderView('dashboard');
    });
  });

  // Manejo de botones de tipo de gráfico
  const chartTypeBtns = document.querySelectorAll('.chart-type-btn[data-chart]');
  chartTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ERP_DB.financeChartType = btn.getAttribute('data-chart');
      renderFinancialChart();
      // Actualizar active class
      chartTypeBtns.forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  // Manejo de botones $ vs %
  const chartModeBtns = document.querySelectorAll('.chart-type-btn[data-mode]');
  chartModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ERP_DB.financeChartMode = btn.getAttribute('data-mode');
      renderFinancialChart();
      chartModeBtns.forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  // Botón + Nueva Obra desde el dashboard
  const btnDashNewProject = document.getElementById('btnDashNewProject');
  if (btnDashNewProject) {
    btnDashNewProject.addEventListener('click', () => openNewProjectModal());
  }

  // Exportar informe
  const btnExport = document.getElementById('btnExportReport');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      alert('Generando Informe Ejecutivo Consolidado de GTL Ingeniería en PDF...');
    });
  }

  // Renderizar gráficos iniciales
  renderFinancialChart();
  renderServicesDonut();
}

/**
 * Renderizador de Gráfico Financiero SVG Interactivo (Barras, Líneas, Área, Dona, Torta)
 */
function renderFinancialChart() {
  const container = document.getElementById('financeChartContainer');
  if (!container) return;

  const type = ERP_DB.financeChartType;
  const mode = ERP_DB.financeChartMode;
  const p = ERP_DB.activePeriod;
  const data = ERP_DB.financeData[p] || ERP_DB.financeData.mes;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#94A3B8' : '#64748B';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
  const colorIngresos = '#FF7A00';
  const colorEgresos = isDark ? '#38BDF8' : '#0A1C36';

  if (type === 'bars') {
    // Gráfico de Barras Agrupadas
    const maxVal = Math.max(...data.map(d => Math.max(d.ingresos, d.egresos))) * 1.15;
    const w = 560;
    const h = 260;
    const paddingLeft = 60;
    const paddingBottom = 30;
    const barGroupWidth = (w - paddingLeft) / data.length;
    const barWidth = Math.min(barGroupWidth * 0.35, 22);

    let barsSVG = '';
    data.forEach((d, i) => {
      const xGroup = paddingLeft + i * barGroupWidth + barGroupWidth / 2;
      const val1 = mode === 'amount' ? d.ingresos : (d.ingresos / (d.ingresos + d.egresos)) * 100;
      const val2 = mode === 'amount' ? d.egresos : (d.egresos / (d.ingresos + d.egresos)) * 100;
      const curMax = mode === 'amount' ? maxVal : 100;

      const h1 = (val1 / curMax) * (h - paddingBottom - 20);
      const h2 = (val2 / curMax) * (h - paddingBottom - 20);

      const y1 = h - paddingBottom - h1;
      const y2 = h - paddingBottom - h2;

      barsSVG += `
        <!-- Barra Ingresos -->
        <rect x="${xGroup - barWidth - 2}" y="${y1}" width="${barWidth}" height="${h1}" rx="4" fill="${colorIngresos}">
          <title>${d.label} - Ingresos: $${d.ingresos.toLocaleString('es-AR')}</title>
        </rect>
        <!-- Barra Egresos -->
        <rect x="${xGroup + 2}" y="${y2}" width="${barWidth}" height="${h2}" rx="4" fill="${colorEgresos}">
          <title>${d.label} - Egresos: $${d.egresos.toLocaleString('es-AR')}</title>
        </rect>
        <!-- Etiqueta X -->
        <text x="${xGroup}" y="${h - 8}" font-size="11" font-weight="700" fill="${textColor}" text-anchor="middle">${d.label}</text>
      `;
    });

    container.innerHTML = `
      <svg class="finance-svg-chart" viewBox="0 0 ${w} ${h}">
        <!-- Líneas de Guía -->
        <line x1="${paddingLeft}" y1="30" x2="${w}" y2="30" stroke="${gridColor}" stroke-width="1" stroke-dasharray="4"/>
        <line x1="${paddingLeft}" y1="${h/2}" x2="${w}" y2="${h/2}" stroke="${gridColor}" stroke-width="1" stroke-dasharray="4"/>
        <line x1="${paddingLeft}" y1="${h - paddingBottom}" x2="${w}" y2="${h - paddingBottom}" stroke="${gridColor}" stroke-width="1.5"/>

        ${barsSVG}

        <!-- Leyenda -->
        <g transform="translate(${w - 190}, 10)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill="${colorIngresos}"/>
          <text x="18" y="10" font-size="11" font-weight="700" fill="${textColor}">Ingresos</text>
          <rect x="85" y="0" width="12" height="12" rx="2" fill="${colorEgresos}"/>
          <text x="103" y="10" font-size="11" font-weight="700" fill="${textColor}">Egresos</text>
        </g>
      </svg>
    `;
  } else if (type === 'lines' || type === 'area') {
    // Gráfico de Líneas / Área Continua
    const maxVal = Math.max(...data.map(d => Math.max(d.ingresos, d.egresos))) * 1.15;
    const w = 560;
    const h = 260;
    const paddingLeft = 50;
    const paddingBottom = 30;
    const stepX = (w - paddingLeft - 20) / (data.length - 1);

    const points1 = [];
    const points2 = [];

    data.forEach((d, i) => {
      const x = paddingLeft + i * stepX;
      const y1 = h - paddingBottom - ((d.ingresos / maxVal) * (h - paddingBottom - 30));
      const y2 = h - paddingBottom - ((d.egresos / maxVal) * (h - paddingBottom - 30));
      points1.push(`${x},${y1}`);
      points2.push(`${x},${y2}`);
    });

    const path1 = `M ${points1.join(' L ')}`;
    const path2 = `M ${points2.join(' L ')}`;
    const areaPath1 = `${path1} L ${w - 20},${h - paddingBottom} L ${paddingLeft},${h - paddingBottom} Z`;
    const areaPath2 = `${path2} L ${w - 20},${h - paddingBottom} L ${paddingLeft},${h - paddingBottom} Z`;

    container.innerHTML = `
      <svg class="finance-svg-chart" viewBox="0 0 ${w} ${h}">
        <defs>
          <linearGradient id="gradOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${colorIngresos}" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="${colorIngresos}" stop-opacity="0.0"/>
          </linearGradient>
          <linearGradient id="gradNavy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${colorEgresos}" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="${colorEgresos}" stop-opacity="0.0"/>
          </linearGradient>
        </defs>

        <line x1="${paddingLeft}" y1="${h - paddingBottom}" x2="${w}" y2="${h - paddingBottom}" stroke="${gridColor}" stroke-width="1.5"/>

        ${type === 'area' ? `
          <path d="${areaPath2}" fill="url(#gradNavy)" />
          <path d="${areaPath1}" fill="url(#gradOrange)" />
        ` : ''}

        <path d="${path2}" fill="none" stroke="${colorEgresos}" stroke-width="3" stroke-linecap="round"/>
        <path d="${path1}" fill="none" stroke="${colorIngresos}" stroke-width="3" stroke-linecap="round"/>

        <!-- Puntos y Etiquetas X -->
        ${data.map((d, i) => {
          const x = paddingLeft + i * stepX;
          const y1 = h - paddingBottom - ((d.ingresos / maxVal) * (h - paddingBottom - 30));
          return `
            <circle cx="${x}" cy="${y1}" r="4.5" fill="#FFFFFF" stroke="${colorIngresos}" stroke-width="3">
              <title>${d.label} - Ingresos: $${d.ingresos.toLocaleString('es-AR')}</title>
            </circle>
            <text x="${x}" y="${h - 8}" font-size="11" font-weight="700" fill="${textColor}" text-anchor="middle">${d.label}</text>
          `;
        }).join('')}

        <!-- Leyenda -->
        <g transform="translate(${w - 190}, 10)">
          <line x1="0" y1="6" x2="16" y2="6" stroke="${colorIngresos}" stroke-width="3"/>
          <text x="22" y="10" font-size="11" font-weight="700" fill="${textColor}">Ingresos</text>
          <line x1="85" y1="6" x2="101" y2="6" stroke="${colorEgresos}" stroke-width="3"/>
          <text x="107" y="10" font-size="11" font-weight="700" fill="${textColor}">Egresos</text>
        </g>
      </svg>
    `;
  } else {
    // Tipo Dona o Torta
    const totalIngr = data.reduce((a, b) => a + b.ingresos, 0);
    const totalEgr = data.reduce((a, b) => a + b.egresos, 0);
    const sum = totalIngr + totalEgr;
    const pctIngr = Math.round((totalIngr / sum) * 100);
    const pctEgr = 100 - pctIngr;

    const r = type === 'donut' ? 65 : 75;
    const strokeW = type === 'donut' ? 24 : 150;
    const circ = 2 * Math.PI * r;
    const strokeDashIngr = (pctIngr / 100) * circ;
    const strokeDashEgr = circ - strokeDashIngr;

    container.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 40px; height: 100%;">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="${r}" fill="none" stroke="${colorEgresos}" stroke-width="${strokeW}"
            stroke-dasharray="${circ}" stroke-dashoffset="0" transform="rotate(-90 100 100)"/>
          <circle cx="100" cy="100" r="${r}" fill="none" stroke="${colorIngresos}" stroke-width="${strokeW}"
            stroke-dasharray="${strokeDashIngr} ${circ}" stroke-dashoffset="0" transform="rotate(-90 100 100)"/>
        </svg>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 14px; height: 14px; background: ${colorIngresos}; border-radius: 3px;"></div>
            <div>
              <div style="font-weight: 800; font-size: 0.95rem;">Ingresos (${pctIngr}%)</div>
              <div style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.85rem;">$${totalIngr.toLocaleString('es-AR')}</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 14px; height: 14px; background: ${colorEgresos}; border-radius: 3px;"></div>
            <div>
              <div style="font-weight: 800; font-size: 0.95rem;">Egresos (${pctEgr}%)</div>
              <div style="font-family: var(--font-mono); color: var(--text-muted); font-size: 0.85rem;">$${totalEgr.toLocaleString('es-AR')}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * Renderizador de Dona de Servicios Más Solicitados
 */
function renderServicesDonut() {
  const svg = document.getElementById('servicesDonutSvg');
  if (!svg) return;

  const r = 70;
  const strokeW = 20;
  const circ = 2 * Math.PI * r;
  let accumulatedOffset = 0;

  let circles = '';
  ERP_DB.servicesBreakdown.forEach(s => {
    const dashLength = (s.percentage / 100) * circ;
    circles += `
      <circle cx="100" cy="100" r="${r}" fill="none" stroke="${s.color}" stroke-width="${strokeW}"
        stroke-dasharray="${dashLength} ${circ}" stroke-dashoffset="${-accumulatedOffset}"
        transform="rotate(-90 100 100)" style="transition: stroke-width 0.2s;" />
    `;
    accumulatedOffset += dashLength;
  });

  svg.innerHTML = circles;
}

// ==========================================================================
// 4. VISTA 2: GESTIÓN DE OBRAS Y PROYECTOS
// ==========================================================================

function getObrasViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Gestión de Obras & Proyectos</h1>
        <p class="view-subtitle">Seguimiento técnico, cronograma Gantt y especificaciones solares fotovoltaicas</p>
      </div>

      <div class="view-controls">
        <button class="btn btn-primary" id="btnOpenNewProjectModal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>+ Nueva Obra</span>
        </button>
      </div>
    </div>

    <!-- TARJETAS RESUMEN DE PROYECTOS -->
    <div class="projects-grid">
      ${ERP_DB.projects.map(p => `
        <div class="project-card" onclick="openProjectDetail('${p.id}')">
          <div class="project-card-header">
            <span class="project-code-badge">${p.code}</span>
            <span class="badge ${p.status === 'finalizado' ? 'badge-success' : p.status === 'certificacion' ? 'badge-info' : 'badge-primary'}">${p.statusLabel}</span>
          </div>

          <h3 class="project-card-title">${p.name}</h3>
          <p class="project-client-name">Cliente: <strong>${p.client}</strong></p>

          ${p.solarSpecs ? `
            <div class="solar-spec-tag">
              <span>☀️ Potencia: ${p.solarSpecs.potencia}</span>
            </div>
          ` : `
            <div style="margin-bottom: 14px; font-size: 0.76rem; color: var(--text-muted);">
              <span>⚡ Tipología: ${p.typeLabel}</span>
            </div>
          `}

          <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 6px;">
            <span>Avance de Obra</span>
            <strong style="color: var(--gtl-orange); font-family: var(--font-mono);">${p.progress}%</strong>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${p.progress}%;"></div>
          </div>

          <div class="project-card-footer">
            <span style="color: var(--text-muted);">Ubicación: ${p.location.split(',')[0]}</span>
            <strong style="font-family: var(--font-mono); color: var(--text-main);">$${formatCompactNumber(p.amount)}</strong>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function setupObrasEvents() {
  const btn = document.getElementById('btnOpenNewProjectModal');
  if (btn) {
    btn.addEventListener('click', () => openNewProjectModal());
  }
}

/**
 * Abre el modal detallado con Gantt, especificaciones y checklist
 */
window.openProjectDetail = function(projectId) {
  const project = ERP_DB.projects.find(p => p.id === projectId);
  if (!project) return;

  const titleEl = document.getElementById('projectModalTitle');
  const codeEl = document.getElementById('projectModalCode');
  const bodyEl = document.getElementById('projectModalBody');

  if (titleEl) titleEl.textContent = project.name;
  if (codeEl) codeEl.textContent = project.code;

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; margin-bottom: 24px;">
        <!-- Ficha de Datos -->
        <div style="background: var(--bg-card-subtle); padding: 18px; border-radius: var(--radius-md);">
          <h4 style="font-family: var(--font-heading); margin-bottom: 12px; color: var(--text-main);">📋 Datos de Obra</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85rem;">
            <div><span style="color: var(--text-muted);">Cliente:</span><br/><strong>${project.client}</strong></div>
            <div><span style="color: var(--text-muted);">Director Técnico:</span><br/><strong>${project.responsible}</strong></div>
            <div><span style="color: var(--text-muted);">Ubicación:</span><br/><strong>${project.location}</strong></div>
            <div><span style="color: var(--text-muted);">Monto Contratado:</span><br/><strong style="color: var(--gtl-orange); font-family: var(--font-mono);">$${project.amount.toLocaleString('es-AR')}</strong></div>
            <div><span style="color: var(--text-muted);">Inicio:</span><br/><strong>${project.startDate}</strong></div>
            <div><span style="color: var(--text-muted);">Finalización Prevista:</span><br/><strong>${project.endDate}</strong></div>
          </div>
        </div>

        <!-- Especificaciones Solares si aplica -->
        ${project.solarSpecs ? `
          <div style="background: var(--gtl-orange-light); border: 1px solid var(--gtl-orange-border); padding: 18px; border-radius: var(--radius-md);">
            <h4 style="font-family: var(--font-heading); margin-bottom: 10px; color: var(--gtl-orange);">☀️ Especificaciones Técnicas Solares</h4>
            <div style="font-size: 0.82rem; display: flex; flex-direction: column; gap: 6px;">
              <div><strong>Potencia:</strong> ${project.solarSpecs.potencia}</div>
              <div><strong>Sistema:</strong> ${project.solarSpecs.tipo}</div>
              <div><strong>Módulos:</strong> ${project.solarSpecs.paneles}</div>
              <div><strong>Inversor:</strong> ${project.solarSpecs.inversor}</div>
              ${project.solarSpecs.baterias ? `<div><strong>Almacenamiento:</strong> ${project.solarSpecs.baterias}</div>` : ''}
              ${project.solarSpecs.autonomia ? `<div><strong>Autonomía:</strong> ${project.solarSpecs.autonomia}</div>` : ''}
            </div>
          </div>
        ` : `
          <div style="background: var(--bg-card-subtle); padding: 18px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
            ⚡ Obra Eléctrica Convencional bajo normativa AEA 90364 e IRAM.
          </div>
        `}
      </div>

      <!-- CRONOGRAMA GANTT DE LA OBRA -->
      <div class="gantt-container">
        <div class="gantt-header">
          <span>Etapa del Proyecto</span>
          <span>Cronograma & Avance</span>
        </div>
        ${project.ganttStages.map(s => `
          <div class="gantt-row">
            <span class="gantt-stage-name">${s.name}</span>
            <div class="gantt-timeline-track">
              <div class="gantt-stage-bar ${s.status}" style="left: ${s.startPct}%; width: ${s.widthPct}%;">
                ${s.status === 'completed' ? '✓ Completado' : s.status === 'in_progress' ? '▶ En Progreso' : 'Pendiente'}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- CHECKLIST TÉCNICO NORMATIVO -->
      <div style="margin-top: 24px;">
        <h4 style="font-family: var(--font-heading); margin-bottom: 12px; color: var(--text-main);">📑 Checklist Documental & Normativo (EDELAP / AEA)</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          ${project.checklist.map(c => `
            <div style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; background: var(--bg-card-subtle); border-radius: var(--radius-sm); font-size: 0.82rem;">
              <span style="font-size: 1.1rem; color: ${c.done ? 'var(--color-success)' : 'var(--text-muted)'};">${c.done ? '✓' : '○'}</span>
              <span style="text-decoration: ${c.done ? 'none' : 'none'}; color: ${c.done ? 'var(--text-main)' : 'var(--text-muted)'}; font-weight: ${c.done ? '700' : '500'};">${c.task}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  const modal = document.getElementById('projectModalBackdrop');
  if (modal) modal.classList.add('open');
};

// ==========================================================================
// 5. VISTA 3: PRESUPUESTOS Y COTIZADOR CON CALCULADORA SOLAR
// ==========================================================================

function getPresupuestosViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Presupuestos & Cotizaciones Técnicas</h1>
        <p class="view-subtitle">Emisión de propuestas oficiales con membrete del Ing. Joaquín Tenti y calculadora solar</p>
      </div>

      <div class="view-controls">
        <button class="btn btn-primary" id="btnOpenNewBudgetModal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>+ Nueva Cotización</span>
        </button>
      </div>
    </div>

    <!-- LISTADO DE PRESUPUESTOS -->
    <div class="table-card">
      <div class="table-header-bar">
        <div class="table-title-wrap">
          <h3>Historial de Presupuestos Emitidos</h3>
          <p>Cotizaciones técnicas y estado de aprobación</p>
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Cliente</th>
              <th>Tipo de Servicio</th>
              <th>Fecha Emisión</th>
              <th>Total ($ ARS)</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_DB.budgets.map(b => `
              <tr>
                <td><span class="project-code-badge" style="color: var(--gtl-orange);">${b.code}</span></td>
                <td><strong>${b.client}</strong></td>
                <td>${b.projectType}</td>
                <td>${b.date}</td>
                <td style="font-family: var(--font-mono); font-weight: 800; font-size: 0.92rem;">$${b.total.toLocaleString('es-AR')}</td>
                <td>
                  <span class="badge ${b.status === 'aprobado' ? 'badge-success' : b.status === 'enviado' ? 'badge-warning' : 'badge-subtle'}">${b.statusLabel}</span>
                </td>
                <td>
                  <button class="btn btn-secondary btn-sm" onclick="openBudgetPrint('${b.id}')" title="Ver presupuesto membretado oficial para imprimir">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>Ver Membrete</span>
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function setupPresupuestosEvents() {
  const btn = document.getElementById('btnOpenNewBudgetModal');
  if (btn) {
    btn.addEventListener('click', () => openNewBudgetModal());
  }
}

/**
 * Modal de Vista Previa Oficial con Membrete y Firma Digital
 */
window.openBudgetPrint = function(budgetId) {
  const b = ERP_DB.budgets.find(item => item.id === budgetId);
  if (!b) return;

  const bodyEl = document.getElementById('budgetPrintModalBody');
  if (bodyEl) {
    const subtotal = b.items.reduce((acc, i) => acc + i.total, 0);
    const iva = subtotal * 0.21;
    const total = subtotal + iva;

    bodyEl.innerHTML = `
      <div class="official-budget-sheet">
        <!-- Encabezado Membretado -->
        <div class="budget-letterhead">
          <div class="letterhead-brand">
            <img src="/GTL-ERP-muestra/assets/logo.png" alt="GTL Logo" />
            <div class="letterhead-text">
              <h2>GTL INGENIERÍA</h2>
              <p><strong>Ing. Joaquín Tenti</strong> — Director Técnico Responsable</p>
              <p>CIPBA Mat. 48.219 • AEA Socio N° 12.840 • CUIT 20-35491024-9</p>
              <p>Calle 467 e/ 28 y 29, City Bell / La Plata • Tel: 0221 571-3005 • gtlsaingenieria@gmail.com</p>
            </div>
          </div>

          <div class="letterhead-doc-info">
            <div class="budget-code">${b.code}</div>
            <div class="budget-date">Fecha: <strong>${b.date}</strong></div>
            <div class="budget-date">Validez: <strong>${b.validityDays} días hábiles</strong></div>
          </div>
        </div>

        <!-- Datos del Cliente -->
        <div class="budget-client-block">
          <div>
            <span style="color: #64748B;">Señores / Razón Social:</span><br/>
            <strong style="font-size: 1rem; color: #0A1C36;">${b.client}</strong>
          </div>
          <div>
            <span style="color: #64748B;">Tipo de Requerimiento:</span><br/>
            <strong>${b.projectType}</strong>
          </div>
        </div>

        <!-- Tabla de Ítems Técnicos -->
        <table class="budget-items-table">
          <thead>
            <tr>
              <th>Ítem</th>
              <th>Descripción Técnica de Obra / Materiales</th>
              <th style="text-align: center;">Cant.</th>
              <th style="text-align: right;">P. Unitario ($)</th>
              <th style="text-align: right;">Total ($)</th>
            </tr>
          </thead>
          <tbody>
            ${b.items.map((it, idx) => `
              <tr>
                <td style="font-family: var(--font-mono);">${idx + 1}</td>
                <td><strong>${it.desc}</strong></td>
                <td style="text-align: center; font-family: var(--font-mono);">${it.qty}</td>
                <td style="text-align: right; font-family: var(--font-mono);">$${it.unitPrice.toLocaleString('es-AR')}</td>
                <td style="text-align: right; font-family: var(--font-mono); font-weight: 700;">$${it.total.toLocaleString('es-AR')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <!-- Totales -->
        <div class="budget-totals-block">
          <div class="totals-table">
            <div class="totals-row">
              <span>Subtotal Neto:</span>
              <span>$${subtotal.toLocaleString('es-AR')}</span>
            </div>
            <div class="totals-row">
              <span>IVA (21%):</span>
              <span>$${iva.toLocaleString('es-AR')}</span>
            </div>
            <div class="totals-row grand-total">
              <span>Total Presupuesto:</span>
              <span>$${total.toLocaleString('es-AR')}</span>
            </div>
          </div>
        </div>

        <!-- Firma y Validación Digital -->
        <div class="budget-signature-block">
          <div style="font-size: 0.78rem; color: #64748B; max-width: 440px; line-height: 1.5;">
            * Los materiales cotizados cumplen estrictamente con normas IRAM y AEA 90364. La dirección de obra y confección de protocolos DCI ante EDELAP se encuentra a cargo del <strong>Ing. Joaquín Tenti</strong>.
          </div>

          <div class="digital-signature">
            <div class="signature-stamp">Joaquín Tenti</div>
            <div class="signature-line"></div>
            <div class="signature-name">ING. JOAQUÍN TENTI</div>
            <div class="signature-title">Director Técnico • CIPBA 48.219</div>
          </div>
        </div>
      </div>
    `;
  }

  const modal = document.getElementById('budgetPrintModalBackdrop');
  if (modal) modal.classList.add('open');
};

// ==========================================================================
// 6. VISTA 4: CRM Y CONSULTAS WEB (LEADS DESDE LA LANDING)
// ==========================================================================

function getCrmViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>CRM & Consultas Web</h1>
        <p class="view-subtitle">Leads recibidos desde el cotizador web de GTL Ingeniería, WhatsApp y llamadas</p>
      </div>

      <div class="view-controls">
        <button class="btn btn-primary" id="btnOpenNewLeadModal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>+ Nuevo Lead</span>
        </button>
      </div>
    </div>

    <div class="table-card">
      <div class="table-header-bar">
        <div class="table-title-wrap">
          <h3>Embudo de Oportunidades Comerciales</h3>
          <p>Sincronización en tiempo real con la Landing Web</p>
        </div>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Contacto / Empresa</th>
              <th>Canal de Origen</th>
              <th>Servicio Solicitado</th>
              <th>Tipo de Obra</th>
              <th>Fecha Ingreso</th>
              <th>Estado</th>
              <th>Acción Rápida</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_DB.leads.map(l => `
              <tr>
                <td>
                  <strong>${l.name}</strong><br/>
                  <small style="color: var(--text-muted);">${l.phone} • ${l.email}</small>
                </td>
                <td><span class="badge badge-subtle" style="color: var(--text-main);">${l.source}</span></td>
                <td><strong style="color: var(--gtl-orange);">${l.service}</strong></td>
                <td>${l.projectType}</td>
                <td>${l.date}</td>
                <td>
                  <span class="badge ${l.status === 'nuevo_lead' ? 'badge-primary' : l.status === 'en_obra' ? 'badge-success' : 'badge-warning'}">${l.statusLabel}</span>
                </td>
                <td>
                  <a href="https://wa.me/549${l.phone.replace(/[^0-9]/g, '')}" target="_blank" class="btn btn-secondary btn-sm" title="Contactar cliente">
                    <span>WhatsApp</span>
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function setupCrmEvents() {
  const btn = document.getElementById('btnOpenNewLeadModal');
  if (btn) {
    btn.addEventListener('click', () => openNewLeadModal());
  }
}

// ==========================================================================
// 7. VISTAS RESTANTES (AGENDA, PERSONAL, COMPRAS, DOCUMENTOS, FINANZAS, REPORTES, CONFIG)
// ==========================================================================

function getAgendaViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Agenda & Visitas Técnicas</h1>
        <p class="view-subtitle">Calendario de relevamientos solares, mediciones de puesta a tierra e inspecciones EDELAP</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 18px;">
      ${ERP_DB.agenda.map(a => `
        <div class="kpi-card" style="border-left: 4px solid var(--gtl-orange);">
          <div class="kpi-card-header">
            <span class="badge ${a.badgeClass}">${a.type}</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--gtl-orange); font-family: var(--font-mono);">${a.date}</span>
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.05rem; margin-bottom: 6px; color: var(--text-main);">${a.title}</h3>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 12px;">Obra: <strong>${a.project}</strong></p>
          <div style="font-size: 0.78rem; padding-top: 10px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between;">
            <span>📍 ${a.location}</span>
            <strong>👤 ${a.technician}</strong>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function getPersonalViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Personal & Cuadrillas Técnicas</h1>
        <p class="view-subtitle">Registro de ingenieros, técnicos de campo y control de matrículas profesionales habilitadas</p>
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Profesional / Técnico</th>
              <th>Función en Obra</th>
              <th>Matrícula Profesional / Habilitación</th>
              <th>Contacto</th>
              <th>Obras Asignadas</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_DB.staff.map(s => `
              <tr>
                <td><strong>${s.name}</strong></td>
                <td>${s.role}</td>
                <td><span style="font-family: var(--font-mono); font-size: 0.78rem;">${s.matricula}</span></td>
                <td>${s.phone}</td>
                <td>${s.assignedProjects.join(', ')}</td>
                <td><span class="badge ${s.statusClass}">${s.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function getComprasViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Compras & Depósito La Plata</h1>
        <p class="view-subtitle">Control de stock de paneles solares, inversores, baterías de litio y materiales de potencia</p>
      </div>
    </div>

    <div class="table-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Material / Insumo Técnico</th>
              <th>Categoría</th>
              <th>Stock Actual</th>
              <th>Stock Mínimo</th>
              <th>P. Unitario ($ ARS)</th>
              <th>Estado Alerta</th>
            </tr>
          </thead>
          <tbody>
            ${ERP_DB.stock.map(st => `
              <tr>
                <td><span class="project-code-badge">${st.sku}</span></td>
                <td><strong>${st.name}</strong></td>
                <td>${st.category}</td>
                <td style="font-family: var(--font-mono); font-weight: 800;">${st.currentStock} ${st.unit}</td>
                <td style="font-family: var(--font-mono); color: var(--text-muted);">${st.minAlert} ${st.unit}</td>
                <td style="font-family: var(--font-mono);">$${st.price.toLocaleString('es-AR')}</td>
                <td>
                  <span class="badge ${st.status === 'CRÍTICO' ? 'badge-danger' : st.status === 'ALERTA' ? 'badge-warning' : 'badge-success'}">${st.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function getDocumentosViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Planos & Certificaciones DCI</h1>
        <p class="view-subtitle">Repositorio técnico de esquemas unifilares, protocolos de puesta a tierra y memorias de cálculo</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px;">
      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-label">Esquema Unifilar CAD</span>
          <span class="badge badge-primary">DWG / PDF</span>
        </div>
        <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 6px;">Unifilar TGBT 1600A Frigorífico Berisso</h4>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 14px;">Norma AEA 90364-7-710 • Aprobado</p>
        <button class="btn btn-secondary btn-sm" onclick="alert('Descargando archivo unifilar técnico en alta definición...')">Descargar Plano</button>
      </div>

      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-label">Protocolo DCI</span>
          <span class="badge badge-success">Certificado</span>
        </div>
        <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 6px;">Protocolo DCI Apto Eléctrico Calle 12</h4>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 14px;">Medición PAT 1.8Ω • Ing. Joaquín Tenti</p>
        <button class="btn btn-secondary btn-sm" onclick="alert('Visualizando protocolo DCI firmado digitalmente...')">Ver Certificado</button>
      </div>

      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-label">Memoria Fotovoltaica</span>
          <span class="badge badge-warning">En Revisión</span>
        </div>
        <h4 style="font-family: var(--font-heading); font-size: 1rem; margin-bottom: 6px;">Memoria de Cálculo Inyección Parque 45 kWp</h4>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 14px;">Expediente EDELAP N° 2026-8941</p>
        <button class="btn btn-secondary btn-sm" onclick="alert('Abriendo memoria técnica fotovoltaica...')">Ver Memoria</button>
      </div>
    </div>
  `;
}

function getFinanzasViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Finanzas & Facturación</h1>
        <p class="view-subtitle">Seguimiento de flujo de caja, cobros por hito de obra y rentabilidad por contrato</p>
      </div>
    </div>

    <div class="table-card">
      <div class="table-header-bar">
        <div class="table-title-wrap">
          <h3>Comprobantes y Facturación Reciente</h3>
          <p>Cuentas por cobrar y emitidas</p>
        </div>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>N° Factura</th>
              <th>Cliente</th>
              <th>Concepto de Obra</th>
              <th>Monto Neto ($)</th>
              <th>IVA (21%)</th>
              <th>Total ($ ARS)</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="project-code-badge">A-0001-00000412</span></td>
              <td>Cerámica Platense S.A.</td>
              <td>Certificado Hito 2: Montaje Parque Solar 45 kWp</td>
              <td>$28,500,000</td>
              <td>$5,985,000</td>
              <td style="font-weight: 800;">$34,485,000</td>
              <td><span class="badge badge-success">Cobrado</span></td>
            </tr>
            <tr>
              <td><span class="project-code-badge">A-0001-00000413</span></td>
              <td>Familia Larrea</td>
              <td>Anticipo 50%: Banco Baterías Litio 15 kWh</td>
              <td>$7,623,966</td>
              <td>$1,601,034</td>
              <td style="font-weight: 800;">$9,225,000</td>
              <td><span class="badge badge-success">Cobrado</span></td>
            </tr>
            <tr>
              <td><span class="project-code-badge">A-0001-00000414</span></td>
              <td>Distribuidora Calle 12</td>
              <td>Honorarios Protocolo DCI & Medición PAT</td>
              <td>$3,471,074</td>
              <td>$728,926</td>
              <td style="font-weight: 800;">$4,200,000</td>
              <td><span class="badge badge-warning">A Cobrar (Vence 25/09)</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function getReportesViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Reportes & Rentabilidad por División</h1>
        <p class="view-subtitle">Análisis comparativo de crecimiento entre Energía Solar, Obras Eléctricas y Aptos DCI</p>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card" style="border-top: 4px solid var(--gtl-orange);">
        <span class="kpi-label">División Solar Híbrida</span>
        <div class="kpi-value" style="color: var(--gtl-orange);">$68.5M</div>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 6px;">45% de la facturación global • Margen medio: 36.2%</p>
      </div>
      <div class="kpi-card" style="border-top: 4px solid var(--gtl-navy);">
        <span class="kpi-label">Obras Industriales</span>
        <div class="kpi-value">$41.2M</div>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 6px;">27% de la facturación global • Margen medio: 35.8%</p>
      </div>
      <div class="kpi-card" style="border-top: 4px solid var(--color-info);">
        <span class="kpi-label">Aptos DCI & Habilitaciones</span>
        <div class="kpi-value">$24.4M</div>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 6px;">16% de la facturación global • Margen medio: 41.5%</p>
      </div>
      <div class="kpi-card" style="border-top: 4px solid var(--color-success);">
        <span class="kpi-label">Infraestructura & Loteos</span>
        <div class="kpi-value">$18.3M</div>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 6px;">12% de la facturación global • Margen medio: 34.0%</p>
      </div>
    </div>
  `;
}

function getConfiguracionViewHTML() {
  return `
    <div class="view-header">
      <div class="view-title-block">
        <h1>Configuración & Auditoría del Sistema</h1>
        <p class="view-subtitle">Roles de usuario, parámetros corporativos de GTL y registro inmutable de auditoría</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <div class="table-card" style="padding: 22px;">
        <h3 style="font-family: var(--font-heading); margin-bottom: 16px;">Datos Oficiales de la Empresa</h3>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.86rem;">
          <div><strong style="color: var(--text-muted);">Razón Social:</strong> GTL Ingeniería Eléctrica</div>
          <div><strong style="color: var(--text-muted);">Director Técnico:</strong> Ing. Joaquín Tenti</div>
          <div><strong style="color: var(--text-muted);">Matrícula Profesional:</strong> CIPBA Mat. 48.219 / AEA 12.840</div>
          <div><strong style="color: var(--text-muted);">Sede Principal:</strong> La Plata y Gran Buenos Aires</div>
          <div><strong style="color: var(--text-muted);">Email Oficial:</strong> gtlsaingenieria@gmail.com</div>
          <div><strong style="color: var(--text-muted);">Teléfono Directo:</strong> 0221 571-3005</div>
        </div>
      </div>

      <div class="table-card" style="padding: 22px;">
        <h3 style="font-family: var(--font-heading); margin-bottom: 16px;">Registro de Auditoría Reciente</h3>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem;">
          <li style="padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle);">
            <strong>Ing. Joaquín Tenti</strong> aprobó presupuesto <code>PRE-GTL-2026-088</code>
            <div style="color: var(--text-muted); font-size: 0.72rem;">Hace 2 horas</div>
          </li>
          <li style="padding-bottom: 8px; border-bottom: 1px solid var(--border-subtle);">
            <strong>Ing. Martín Solís</strong> actualizó avance de obra <code>GTL-2026-03</code> al 65%
            <div style="color: var(--text-muted); font-size: 0.72rem;">Ayer a las 17:40 hs</div>
          </li>
          <li style="padding-bottom: 8px;">
            <strong>Sistema (Webhook Web)</strong> recibió nuevo lead desde Landing GTL
            <div style="color: var(--text-muted); font-size: 0.72rem;">Hace 1 día</div>
          </li>
        </ul>
      </div>
    </div>
  `;
}

// ==========================================================================
// 8. MODALES Y ACCIONES RÁPIDAS
// ==========================================================================

function initModals() {
  // Cerrar modales con botones de cruz o cancelar
  const closeBtns = document.querySelectorAll('.modal-close, [id^="cancel"]');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const backdrops = document.querySelectorAll('.modal-backdrop');
      backdrops.forEach(b => b.classList.remove('open'));
    });
  });

  // Cerrar modal al hacer clic en el backdrop
  const backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('open');
      }
    });
  });

  // Tecla ESC para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal-backdrop.open');
      if (openModal) openModal.classList.remove('open');
    }
  });

  // Formulario de Nueva Obra
  const npForm = document.getElementById('newProjectForm');
  if (npForm) {
    npForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('npNombre').value;
      const cliente = document.getElementById('npCliente').value;
      const tipo = document.getElementById('npTipo').value;
      const ubicacion = document.getElementById('npUbicacion').value;
      const monto = parseFloat(document.getElementById('npMonto').value) || 15000000;
      const responsable = document.getElementById('npResponsable').value;
      const potencia = document.getElementById('npPotencia').value;
      const inversor = document.getElementById('npInversor').value;

      const newId = 'proj-' + String(ERP_DB.projects.length + 1).padStart(3, '0');
      const newCode = 'GTL-2026-' + String(ERP_DB.projects.length + 1).padStart(2, '0');

      ERP_DB.projects.unshift({
        id: newId,
        code: newCode,
        name: nombre,
        client: cliente,
        type: tipo,
        typeLabel: tipo === 'solar_hibrido' ? 'Solar Híbrido' : 'Obra Eléctrica',
        location: ubicacion,
        responsible: responsable,
        status: 'ejecucion',
        statusLabel: 'En Ejecución',
        progress: 10,
        amount: monto,
        cost: monto * 0.65,
        margin: 35.0,
        startDate: new Date().toISOString().split('T')[0],
        endDate: '2026-12-31',
        solarSpecs: tipo === 'solar_hibrido' ? {
          potencia: `${potencia || 10} kWp Instalados`,
          tipo: 'Híbrido Solar Inteligente',
          paneles: 'Módulos Tier 1 Monocristalinos',
          inversor: inversor || 'Growatt Híbrido Onda Pura',
          baterias: 'Banco LiFePO4'
        } : null,
        ganttStages: [
          { name: '1. Relevamiento y cálculo', startPct: 0, widthPct: 25, status: 'completed' },
          { name: '2. Ejecución y montaje', startPct: 25, widthPct: 50, status: 'in_progress' },
          { name: '3. Certificación y entrega', startPct: 75, widthPct: 25, status: 'pending' }
        ],
        checklist: [
          { task: 'Memoria técnica de cálculo aprobada', done: true },
          { task: 'Protocolo de medición de puesta a tierra', done: false }
        ]
      });

      // Actualizar badge en sidebar
      const badgeObras = document.getElementById('badgeObrasCount');
      if (badgeObras) badgeObras.textContent = ERP_DB.projects.length;

      document.getElementById('newProjectModalBackdrop').classList.remove('open');
      npForm.reset();
      alert(`¡Obra ${newCode} registrada con éxito en GTL Ingeniería!`);
      renderView(window.location.hash.replace('#', '') || 'dashboard');
    });
  }

  // Formulario de Nuevo Lead CRM
  const nlForm = document.getElementById('newLeadForm');
  if (nlForm) {
    nlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nlNombre').value;
      const telefono = document.getElementById('nlTelefono').value;
      const email = document.getElementById('nlEmail').value;
      const servicio = document.getElementById('nlServicio').value;
      const mensaje = document.getElementById('nlMensaje').value;

      ERP_DB.leads.unshift({
        id: 'lead-' + String(ERP_DB.leads.length + 1).padStart(3, '0'),
        name: nombre,
        phone: telefono,
        email: email,
        service: servicio,
        projectType: 'A definir',
        source: 'Carga Manual ERP',
        date: 'Recién',
        status: 'nuevo_lead',
        statusLabel: 'Nuevo Lead',
        notes: mensaje
      });

      const badgeLeads = document.getElementById('badgeLeadsCount');
      if (badgeLeads) badgeLeads.textContent = ERP_DB.leads.length;

      document.getElementById('newLeadModalBackdrop').classList.remove('open');
      nlForm.reset();
      alert(`¡Lead de ${nombre} ingresado correctamente al CRM!`);
      if (window.location.hash.includes('crm')) renderView('crm');
    });
  }

  // Botón Imprimir / PDF en Membrete Oficial
  const btnPrint = document.getElementById('btnPrintBudget');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

  // Botón Enviar WhatsApp en Membrete
  const btnWa = document.getElementById('btnSendBudgetWhatsapp');
  if (btnWa) {
    btnWa.addEventListener('click', () => {
      window.open('https://wa.me/5492215713005?text=' + encodeURIComponent('Hola! Te adjunto el presupuesto oficial de GTL Ingeniería firmado por el Ing. Joaquín Tenti.'), '_blank');
    });
  }
}

/**
 * Modal para Nuevo Proyecto
 */
function openNewProjectModal() {
  const modal = document.getElementById('newProjectModalBackdrop');
  const clientSelect = document.getElementById('npCliente');
  if (clientSelect) {
    clientSelect.innerHTML = ERP_DB.clients.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  }
  if (modal) modal.classList.add('open');
}

/**
 * Modal para Nuevo Presupuesto con Calculadora Solar
 */
function openNewBudgetModal() {
  const modal = document.getElementById('newBudgetModalBackdrop');
  const body = document.getElementById('newBudgetModalBody');

  if (body) {
    body.innerHTML = `
      <!-- CALCULADORA SOLAR INTERACTIVA INTEGRADA -->
      <div class="solar-calculator-box">
        <div class="solar-calc-header">
          <span style="font-size: 1.4rem;">⚡</span>
          <div>
            <h4>Calculadora de Dimensionamiento Solar GTL</h4>
            <p style="font-size: 0.78rem; color: var(--text-muted);">Ingresá el consumo promedio de la factura eléctrica en kWh para calcular la potencia fotovoltaica sugerida</p>
          </div>
        </div>

        <div class="solar-calc-grid">
          <div class="solar-calc-input-wrap">
            <label for="calcKwhInput">Consumo Mensual del Cliente (kWh/mes):</label>
            <input type="number" id="calcKwhInput" class="form-input" value="850" min="50" max="50000" step="50" style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: 800; color: var(--gtl-orange);" />
          </div>

          <div class="solar-calc-results">
            <div class="solar-res-item">
              <span class="solar-res-val" id="calcResKw">9.5 kWp</span>
              <span class="solar-res-label">Potencia Sugerida</span>
            </div>
            <div class="solar-res-item">
              <span class="solar-res-val" id="calcResPaneles">18 Paneles</span>
              <span class="solar-res-label">Módulos 550W</span>
            </div>
            <div class="solar-res-item">
              <span class="solar-res-val" id="calcResInversor">10 kW</span>
              <span class="solar-res-label">Inversor Híbrido</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario de Cotización -->
      <form id="newBudgetForm" class="form-grid">
        <div class="form-group col-span-2">
          <label for="nbCliente">Cliente / Destinatario *</label>
          <select id="nbCliente" class="form-select">
            ${ERP_DB.clients.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-group col-span-2">
          <label for="nbServicio">Tipo de Servicio *</label>
          <input type="text" id="nbServicio" class="form-input" value="Sistema Solar Híbrido 9.5 kWp con Respaldo de Baterías" required />
        </div>
        <div class="form-group">
          <label for="nbSubtotal">Monto Estimado ($ ARS)</label>
          <input type="number" id="nbSubtotal" class="form-input" value="16800000" required style="font-family: var(--font-mono); font-weight: 700;" />
        </div>
        <div class="form-group">
          <label for="nbValidez">Validez de la Oferta (Días)</label>
          <input type="number" id="nbValidez" class="form-input" value="15" />
        </div>

        <div class="form-actions col-span-2">
          <button type="button" class="btn btn-secondary" onclick="document.getElementById('newBudgetModalBackdrop').classList.remove('open')">Cancelar</button>
          <button type="submit" class="btn btn-primary">Crear Presupuesto & Ver Membrete</button>
        </div>
      </form>
    `;

    // Event listener en tiempo real de la calculadora solar
    const kwhInput = document.getElementById('calcKwhInput');
    if (kwhInput) {
      kwhInput.addEventListener('input', () => {
        const kwh = parseFloat(kwhInput.value) || 0;
        // Fórmula de dimensionamiento solar promedio para La Plata (Horas de Sol Pico HSP = 4.2 hs)
        const kwp = ((kwh / 30) / 4.2) * 1.35; // con margen de pérdidas del 35%
        const paneles = Math.ceil((kwp * 1000) / 550);
        const inversorKw = Math.ceil(kwp);

        document.getElementById('calcResKw').textContent = kwp.toFixed(1) + ' kWp';
        document.getElementById('calcResPaneles').textContent = paneles + ' Paneles';
        document.getElementById('calcResInversor').textContent = inversorKw + ' kW';

        // Auto-actualizar sugerencia de precio estimada
        const subtotalEst = Math.round(kwp * 1800000);
        const subtotalInput = document.getElementById('nbSubtotal');
        if (subtotalInput) subtotalInput.value = subtotalEst;
      });
    }

    // Submit del presupuesto
    const nbForm = document.getElementById('newBudgetForm');
    if (nbForm) {
      nbForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cliente = document.getElementById('nbCliente').value;
        const servicio = document.getElementById('nbServicio').value;
        const subtotal = parseFloat(document.getElementById('nbSubtotal').value) || 12000000;
        const validez = parseInt(document.getElementById('nbValidez').value) || 15;

        const newCode = 'PRE-GTL-2026-' + String(ERP_DB.budgets.length + 89).padStart(3, '0');
        const newBudget = {
          id: 'pre-' + String(ERP_DB.budgets.length + 1).padStart(3, '0'),
          code: newCode,
          client: cliente,
          projectType: servicio,
          date: new Date().toISOString().split('T')[0],
          validityDays: validez,
          total: subtotal * 1.21,
          status: 'borrador',
          statusLabel: 'En Espera de Envío',
          solarKwh: parseFloat(kwhInput ? kwhInput.value : 0),
          items: [
            { desc: servicio, qty: 1, unitPrice: subtotal * 0.7, total: subtotal * 0.7 },
            { desc: 'Protecciones termoeléctricas y conexionado bajo norma AEA 90364', qty: 1, unitPrice: subtotal * 0.15, total: subtotal * 0.15 },
            { desc: 'Ingeniería de detalle, medición PAT con telurímetro y firma Ing. Joaquín Tenti', qty: 1, unitPrice: subtotal * 0.15, total: subtotal * 0.15 }
          ]
        };

        ERP_DB.budgets.unshift(newBudget);
        document.getElementById('newBudgetModalBackdrop').classList.remove('open');
        openBudgetPrint(newBudget.id);
        if (window.location.hash.includes('presupuestos')) renderView('presupuestos');
      });
    }
  }

  if (modal) modal.classList.add('open');
}

/**
 * Modal para Nuevo Lead CRM
 */
function openNewLeadModal() {
  const modal = document.getElementById('newLeadModalBackdrop');
  if (modal) modal.classList.add('open');
}

/**
 * Accesos Rápidos en el Header
 */
function initQuickActions() {
  const qLead = document.getElementById('btnQuickNewLead');
  const qBudget = document.getElementById('btnQuickNewBudget');
  const qProject = document.getElementById('btnQuickNewProject');

  if (qLead) qLead.addEventListener('click', () => openNewLeadModal());
  if (qBudget) qBudget.addEventListener('click', () => openNewBudgetModal());
  if (qProject) qProject.addEventListener('click', () => openNewProjectModal());

  // Selector de Rol en el Sidebar
  const roleSelect = document.getElementById('roleSelector');
  if (roleSelect) {
    roleSelect.addEventListener('change', (e) => {
      const role = e.target.value;
      ERP_DB.currentUser.role = role;
      const avatar = document.getElementById('userAvatar');
      const nameDisp = document.getElementById('userNameDisplay');

      if (role === 'admin') {
        ERP_DB.currentUser.name = 'Ing. Joaquín Tenti';
        if (avatar) avatar.textContent = 'JT';
        if (nameDisp) nameDisp.textContent = 'Ing. Joaquín Tenti';
      } else if (role === 'project_engineer') {
        ERP_DB.currentUser.name = 'Ing. Martín Solís';
        if (avatar) avatar.textContent = 'MS';
        if (nameDisp) nameDisp.textContent = 'Ing. Martín Solís';
      } else if (role === 'field_technician') {
        ERP_DB.currentUser.name = 'Tec. Federico Benítez';
        if (avatar) avatar.textContent = 'FB';
        if (nameDisp) nameDisp.textContent = 'Tec. Federico Benítez';
      } else if (role === 'accountant') {
        ERP_DB.currentUser.name = 'Lic. Paula Aguirre';
        if (avatar) avatar.textContent = 'PA';
        if (nameDisp) nameDisp.textContent = 'Lic. Paula Aguirre';
      }
    });
  }

  // Notificaciones dropdown toggle
  const notifBtn = document.getElementById('notificationsBtn');
  const notifPanel = document.getElementById('notificationsPanel');
  if (notifBtn && notifPanel) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPanel.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!notifPanel.contains(e.target) && e.target !== notifBtn) {
        notifPanel.classList.remove('open');
      }
    });
  }
}

/**
 * Control del Sidebar (Colapso y Responsive Móvil)
 */
function initSidebar() {
  const collapseBtn = document.getElementById('collapseSidebarBtn');
  const sidebar = document.getElementById('sidebar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (collapseBtn && sidebar) {
    collapseBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      // Redibujar gráficos para sincronizar ancho
      setTimeout(() => {
        if (window.location.hash.includes('dashboard') || !window.location.hash) {
          renderFinancialChart();
        }
      }, 300);
    });
  }

  if (mobileMenuBtn && sidebar && backdrop) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.add('mobile-open');
      backdrop.classList.add('open');
    });

    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      backdrop.classList.remove('open');
    });
  }
}

/**
 * Buscador Global (Ctrl + K)
 */
function initGlobalSearch() {
  const trigger = document.getElementById('globalSearchTrigger');
  const modal = document.getElementById('searchModalBackdrop');
  const input = document.getElementById('modalSearchInput');
  const results = document.getElementById('searchModalResults');

  const openSearch = () => {
    if (modal) {
      modal.classList.add('open');
      setTimeout(() => { if (input) input.focus(); }, 50);
    }
  };

  if (trigger) trigger.addEventListener('click', openSearch);

  // Atajo de Teclado Ctrl + K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  // Búsqueda en vivo
  if (input && results) {
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (!q) {
        results.innerHTML = '<div class="search-empty-hint">Escribí para buscar en obras, presupuestos, clientes y protocolos técnicos...</div>';
        return;
      }

      const matchProjects = ERP_DB.projects.filter(p => p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q) || p.client.toLowerCase().includes(q));
      const matchBudgets = ERP_DB.budgets.filter(b => b.code.toLowerCase().includes(q) || b.client.toLowerCase().includes(q));
      const matchClients = ERP_DB.clients.filter(c => c.name.toLowerCase().includes(q));

      if (!matchProjects.length && !matchBudgets.length && !matchClients.length) {
        results.innerHTML = `<div class="search-empty-hint">No se encontraron resultados para "${q}"</div>`;
        return;
      }

      let html = '';
      if (matchProjects.length) {
        html += `<div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--gtl-orange); padding: 8px 12px;">Obras & Proyectos</div>`;
        html += matchProjects.map(p => `
          <div class="search-result-item" onclick="modal.classList.remove('open'); openProjectDetail('${p.id}')">
            <div>
              <div class="item-title">${p.name}</div>
              <div class="item-category">${p.code} • ${p.client}</div>
            </div>
            <span class="badge badge-primary">${p.statusLabel}</span>
          </div>
        `).join('');
      }

      if (matchBudgets.length) {
        html += `<div style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--gtl-orange); padding: 8px 12px; margin-top: 8px;">Presupuestos</div>`;
        html += matchBudgets.map(b => `
          <div class="search-result-item" onclick="modal.classList.remove('open'); openBudgetPrint('${b.id}')">
            <div>
              <div class="item-title">${b.code} — ${b.client}</div>
              <div class="item-category">${b.projectType}</div>
            </div>
            <span class="badge badge-warning">$${formatCompactNumber(b.total)}</span>
          </div>
        `).join('');
      }

      results.innerHTML = html;
    });
  }
}

// ==========================================================================
// 9. FUNCIONES UTILITARIAS
// ==========================================================================

function formatCompactNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
}

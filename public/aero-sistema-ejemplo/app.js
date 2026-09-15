/* ==========================================================================
   AEROTEC MRO & INGENIERÍA AERONÁUTICA - CORE APPLICATION SCRIPT
   Software Integral de Gestión de Mantenimiento Aeronáutico (MRO & CAMO)
   Organización Habilitada: TAR N° 1B-412 · RAAC Parte 145 / RAAC 43
   ========================================================================== */

const AERO_DB = {
  state: {
    activeView: 'dashboard',
    activeServiceLine: 'all', // 'all' | 'programado' | 'no_programado' | 'ingenieria' | 'camo'
    currentTimeFilter: 'month', // 'day' | 'week' | 'month' | 'year'
    financialChartType: 'donut', // Default: 'donut' as requested! (Order: donut, lines, area, bars, pie)
    financialChartUnit: 'currency', // 'currency' | 'percent'
    costStructureType: 'donut', // 'donut' | 'breakdown' | 'pie' | 'bars'
    costStructureUnit: 'percent', // 'percent' | 'currency'
    currentRole: 'ingeniero',
    searchQuery: '',
    calendarMonth: 8, // September (0-indexed)
    calendarYear: 2026
  },

  currentUser: {
    name: 'Ingeniero',
    role: 'ingeniero',
    roleLabel: 'Ingeniero Aeronáutico Habilitado',
    license: 'Habilitación TAR N° 1B-412 · ANAC Parte 145',
    hangar: 'Hangar Central 4 · SADF (San Fernando)',
    email: 'ingenieria@aerotec-mro.com.ar'
  },

  // ========================================================================
  // 1. FLOTA DE AERONAVES GESTIONADAS (MRO & CAMO)
  // ========================================================================
  aircraft: [
    {
      id: 'air-001',
      registration: 'LV-WXZ',
      type: 'monomotor',
      typeLabel: 'Avión Monomotor Pistón',
      makeModel: 'Cessna 172S Skyhawk SP',
      sn: '172S-10482',
      year: 2018,
      owner: 'FlySafe Flight Academy',
      contact: 'Operaciones de Vuelo (+54 11 4829-1122)',
      ttsn: 3420.5,
      cycles: 5820,
      engine: 'Lycoming IO-360-L2A (S/N: L-32145-51E)',
      engineHours: 1420.5,
      engineTbo: 2000.0,
      propeller: 'McCauley 1A170E/JHA7660 (S/N: QG012)',
      lastCheckType: 'Inspección 50 Horas',
      lastCheckDate: '2026-08-20',
      nextCheckType: 'Inspección 100 Horas / Anual',
      nextCheckHours: 3450.0,
      hoursRemaining: 29.5,
      status: 'service', // 'service' | 'maintenance' | 'aog' | 'expired'
      statusLabel: 'En Servicio / Aeronavegable',
      cdaExpiry: '2027-04-15',
      insuranceExpiry: '2027-01-30'
    },
    {
      id: 'air-002',
      registration: 'LV-FJR',
      type: 'turbohelice',
      typeLabel: 'Bimotor Turbohélice Ejecutivo',
      makeModel: 'Beechcraft King Air B200',
      sn: 'BB-1845',
      year: 2012,
      owner: 'Aerotransporte Ejecutivo Austral S.A.',
      contact: 'Gerencia de Mantenimiento (+54 11 5901-3344)',
      ttsn: 6850.2,
      cycles: 7120,
      engine: 'Pratt & Whitney PT6A-42 x2 (L: PCE-PJ0142 / R: PCE-PJ0143)',
      engineHours: 2450.0,
      engineTbo: 3600.0,
      propeller: 'Hartzell 4-Blade HC-E4N-3G',
      lastCheckType: 'Fase 1 (King Air)',
      lastCheckDate: '2026-07-12',
      nextCheckType: 'Fase 2 & Calibración RVSM',
      nextCheckHours: 6900.0,
      hoursRemaining: 49.8,
      status: 'service',
      statusLabel: 'En Servicio / Aeronavegable',
      cdaExpiry: '2026-11-20',
      insuranceExpiry: '2026-12-31'
    },
    {
      id: 'air-003',
      registration: 'LV-CDE',
      type: 'bimotor',
      typeLabel: 'Bimotor Pistón',
      makeModel: 'Piper PA-34-220T Seneca V',
      sn: '3449210',
      year: 2008,
      owner: 'Servicios Aéreos del Sur S.R.L.',
      contact: 'Coordinación Técnica de Base (+54 11 6720-4499)',
      ttsn: 4120.0,
      cycles: 4890,
      engine: 'Teledyne Continental TSIO-360-RB x2',
      engineHours: 1120.0,
      engineTbo: 1800.0,
      propeller: 'McCauley 3-Blade Variable Pitch',
      lastCheckType: 'Inspección 100 Horas',
      lastCheckDate: '2026-06-10',
      nextCheckType: 'Inspección 50 Horas (Vencida)',
      nextCheckHours: 4120.0,
      hoursRemaining: 0.0,
      status: 'maintenance',
      statusLabel: 'En Hangar / Mantenimiento',
      cdaExpiry: '2026-10-05',
      insuranceExpiry: '2026-10-31'
    },
    {
      id: 'air-004',
      registration: 'LV-BKO',
      type: 'monomotor',
      typeLabel: 'Avión Monomotor Pistón Avanzado',
      makeModel: 'Cirrus SR22 G6 Turbo',
      sn: '22T-2041',
      year: 2021,
      owner: 'Inversiones Aeronáuticas Delta',
      contact: 'Administración de Flota (+54 11 4110-8800)',
      ttsn: 890.4,
      cycles: 1140,
      engine: 'Continental TSIO-550-K (S/N: 103982)',
      engineHours: 890.4,
      engineTbo: 2200.0,
      propeller: 'Hartzell Composite 3-Blade',
      lastCheckType: 'Inspección 50 Horas',
      lastCheckDate: '2026-08-30',
      nextCheckType: 'Inspección 100 Horas + Paracaídas CAPS',
      nextCheckHours: 940.0,
      hoursRemaining: 49.6,
      status: 'service',
      statusLabel: 'En Servicio / Aeronavegable',
      cdaExpiry: '2027-06-10',
      insuranceExpiry: '2027-03-15'
    },
    {
      id: 'air-005',
      registration: 'LV-HGA',
      type: 'helicoptero',
      typeLabel: 'Helicóptero Monomotor Pistón',
      makeModel: 'Robinson R44 Raven II',
      sn: '13840',
      year: 2014,
      owner: 'Heliservicios del Litoral',
      contact: 'Base Hangar (+54 11 5122-9900)',
      ttsn: 2150.8,
      cycles: 3820,
      engine: 'Lycoming IO-540-AE1A5 (S/N: L-18920-40E)',
      engineHours: 2150.8,
      engineTbo: 2200.0,
      propeller: 'Main Rotor Blades Robinson C016-7',
      lastCheckType: 'Inspección 50 Horas',
      lastCheckDate: '2026-08-01',
      nextCheckType: 'Inspección 100h / Overhaul Célula 2200h',
      nextCheckHours: 2200.0,
      hoursRemaining: 49.2,
      status: 'maintenance',
      statusLabel: 'En Hangar / Track & Balance',
      cdaExpiry: '2026-10-28',
      insuranceExpiry: '2026-11-15'
    },
    {
      id: 'air-006',
      registration: 'LV-PLM',
      type: 'turbohelice',
      typeLabel: 'Monomotor Turbohélice Utilitario',
      makeModel: 'Cessna 208B Grand Caravan',
      sn: '208B-0982',
      year: 2005,
      owner: 'Paracaidismo & Logística Aérea Varela',
      contact: 'Despacho Operativo (+54 11 4980-2211)',
      ttsn: 8430.0,
      cycles: 9840,
      engine: 'Pratt & Whitney PT6A-114A',
      engineHours: 3120.0,
      engineTbo: 3600.0,
      propeller: 'Hartzell 3-Blade HC-B3TN-3DY',
      lastCheckType: 'Check 200 Horas',
      lastCheckDate: '2026-05-18',
      nextCheckType: 'Reemplazo Arrancador Generador & Gobernador',
      nextCheckHours: 8430.0,
      hoursRemaining: 0.0,
      status: 'aog',
      statusLabel: 'AOG (Aircraft On Ground) - Detenido',
      cdaExpiry: '2026-09-30',
      insuranceExpiry: '2026-10-15'
    }
  ],

  // ========================================================================
  // 2. ÓRDENES DE TRABAJO (OT)
  // ========================================================================
  workOrders: [
    {
      id: 'ot-001',
      code: 'OT-2026-084',
      aircraftReg: 'LV-CDE',
      aircraftModel: 'Piper PA-34-220T Seneca V',
      client: 'Servicios Aéreos del Sur S.R.L.',
      serviceLine: 'programado',
      serviceLineLabel: 'Mantenimiento Programado',
      type: 'Inspección 50 Horas & Reparación de Fugas de Aceite en Turbo Derecho',
      title: 'Inspección 50 Horas & Reparación de Fugas de Aceite en Turbo Derecho',
      status: 'in_progress',
      statusLabel: 'En Proceso en Hangar',
      technician: 'Ingeniero',
      techLic: 'TAR N° 1B-412',
      inspector: 'Ingeniero',
      inspectorLic: 'TAR N° 1B-412',
      hoursEst: 28,
      hoursReal: 24,
      laborCost: 840000,
      partsCost: 520000,
      thirdPartyCost: 90000,
      totalQuote: 2150000,
      createdAt: '2026-09-12',
      targetDate: '2026-09-18',
      ammReference: 'Piper PA-34 AMM Cap. 05-20 & Continental TSIO-360 Overhaul Manual',
      workCards: [
        { id: 'wc-101', code: 'WC-01', desc: 'Drenado y análisis de corte de filtros de aceite (ambos motores)', status: 'done', hours: 4, assigned: 'Ingeniero' },
        { id: 'wc-102', code: 'WC-02', desc: 'Reemplazo de juntas y mangueras rígidas de suministro turbo Continental P/N 646277', status: 'in_progress', hours: 8, assigned: 'Ingeniero' },
        { id: 'wc-103', code: 'WC-03', desc: 'Regulación de presión diferencial y prueba de compresión de cilindros', status: 'in_progress', hours: 6, assigned: 'Ingeniero' },
        { id: 'wc-104', code: 'WC-04', desc: 'Inspección de tren de aterrizaje y prueba funcional de retracción en caballetes', status: 'in_progress', hours: 6, assigned: 'Ingeniero' }
      ],
      partsConsumed: [
        { partNumber: 'CH48108-1', desc: 'Filtro de Aceite Champion Aviation', qty: 2, form8130: 'FAA-8130-3 #84912', unitPrice: 42000 },
        { partNumber: 'W100PLUS', desc: 'Aceite AeroShell W100 Plus (Cuartos)', qty: 16, form8130: 'Batch #A-9018', unitPrice: 16500 },
        { partNumber: '646277', desc: 'Kit de Juntas de Turbo Continental', qty: 1, form8130: 'ANAC-8130 #10492', unitPrice: 172000 }
      ],
      discrepancies: [
        { id: 'disc-01', finding: 'Pérdida leve de fluido hidráulico en actuador de flap izquierdo', action: 'Reemplazo de O-rings MS28775-114 realizado y purgado', status: 'resolved' }
      ],
      releaseCertReady: true
    },
    {
      id: 'ot-002',
      code: 'OT-2026-085',
      aircraftReg: 'LV-PLM',
      aircraftModel: 'Cessna 208B Grand Caravan',
      client: 'Paracaidismo & Logística Aérea Varela',
      serviceLine: 'no_programado',
      serviceLineLabel: 'Mantenimiento No Programado / AOG',
      type: 'AOG - Reemplazo de Arrancador-Generador Skurka & Calibración de GCU',
      title: 'AOG - Reemplazo de Arrancador-Generador Skurka & Calibración de GCU',
      status: 'in_progress',
      statusLabel: 'AOG / Prioridad Máxima',
      technician: 'Ingeniero',
      techLic: 'TAR N° 1B-412',
      inspector: 'Ingeniero',
      inspectorLic: 'TAR N° 1B-412',
      hoursEst: 34,
      hoursReal: 18,
      laborCost: 1190000,
      partsCost: 3850000,
      thirdPartyCost: 240000,
      totalQuote: 6400000,
      createdAt: '2026-09-14',
      targetDate: '2026-09-20',
      ammReference: 'Cessna 208B AMM Cap. 24-30-00 (DC Generation) & PT6A-114A MM',
      workCards: [
        { id: 'wc-201', code: 'WC-01', desc: 'Desmontaje de arrancador generador defectuoso P/N 160SG111Q', status: 'done', hours: 5, assigned: 'Ingeniero' },
        { id: 'wc-202', code: 'WC-02', desc: 'Instalación de unidad overhauleada P/N 160SG111Q con Form 8130-3 vigente', status: 'in_progress', hours: 7, assigned: 'Ingeniero' },
        { id: 'wc-203', code: 'WC-03', desc: 'Prueba de ciclado eléctrico y ajuste de voltaje de regulación GCU a 28.5V', status: 'in_progress', hours: 6, assigned: 'Ingeniero' }
      ],
      partsConsumed: [
        { partNumber: '160SG111Q', desc: 'Starter-Generator Skurka 28V 250A (Overhauled)', qty: 1, form8130: 'FAA-8130-3 #SK-7810', unitPrice: 3850000 }
      ],
      discrepancies: [
        { id: 'disc-02', finding: 'Terminal de cable positivo con signos de sulfatación y calentamiento', action: 'Crimpado de nuevo terminal aeronáutico Mil-Spec MS20659 y termocontraíble', status: 'resolved' }
      ],
      releaseCertReady: false
    },
    {
      id: 'ot-003',
      code: 'OT-2026-081',
      aircraftReg: 'LV-FJR',
      aircraftModel: 'Beechcraft King Air B200',
      client: 'Aerotransporte Ejecutivo Austral S.A.',
      serviceLine: 'programado',
      serviceLineLabel: 'Mantenimiento Programado',
      type: 'Inspección Fase 1 & 2 King Air + Testeo RVSM & Pitot-Estática',
      title: 'Inspección Fase 1 & 2 King Air + Testeo RVSM & Pitot-Estática',
      status: 'review',
      statusLabel: 'Inspección Final / Listo para CRS',
      technician: 'Ingeniero',
      techLic: 'TAR N° 1B-412',
      inspector: 'Ingeniero',
      inspectorLic: 'TAR N° 1B-412',
      hoursEst: 72,
      hoursReal: 68,
      laborCost: 2880000,
      partsCost: 1420000,
      thirdPartyCost: 310000,
      totalQuote: 5900000,
      createdAt: '2026-09-02',
      targetDate: '2026-09-16',
      ammReference: 'Beechcraft King Air B200 Maintenance Manual (Fases 1 y 2)',
      workCards: [
        { id: 'wc-301', code: 'WC-01', desc: 'Inspección estructural de plano alar, largueros principales y flaps', status: 'done', hours: 22, assigned: 'Ingeniero' },
        { id: 'wc-302', code: 'WC-02', desc: 'Prueba de hermeticidad pitot-estática y chequeo de altímetros RVSM Barfield', status: 'done', hours: 18, assigned: 'Ingeniero' },
        { id: 'wc-303', code: 'WC-03', desc: 'Control de cables de comando de timón de dirección y compensadores', status: 'done', hours: 28, assigned: 'Ingeniero' }
      ],
      partsConsumed: [
        { partNumber: '101-380025-1', desc: 'O-Rings y sellos de cabina King Air', qty: 4, form8130: 'FAA-8130-3 #B-8819', unitPrice: 145000 },
        { partNumber: 'G-243', desc: 'Batería de Aviación Gill 24V Recombinante', qty: 1, form8130: 'FAA-8130-3 #GL-2026', unitPrice: 840000 }
      ],
      discrepancies: [
        { id: 'disc-03', finding: 'Pérdida de tensión en cable de compensador de profundidad (-15%)', action: 'Tensado según tabla de temperatura AMM Cap. 27 y frenado con alambre inox', status: 'resolved' }
      ],
      releaseCertReady: true
    },
    {
      id: 'ot-004',
      code: 'OT-2026-082',
      aircraftReg: 'LV-BKO',
      aircraftModel: 'Cirrus SR22 G6 Turbo',
      client: 'Inversiones Aeronáuticas Delta',
      serviceLine: 'programado',
      serviceLineLabel: 'Mantenimiento Programado',
      type: 'Inspección 100 Horas Cirrus AMM Cap. 05 & Verificación CAPS',
      title: 'Inspección 100 Horas Cirrus AMM Cap. 05 & Verificación CAPS',
      status: 'closed',
      statusLabel: 'Liberada al Servicio (CRS Emitido)',
      technician: 'Ingeniero',
      techLic: 'TAR N° 1B-412',
      inspector: 'Ingeniero',
      inspectorLic: 'TAR N° 1B-412',
      hoursEst: 32,
      hoursReal: 30,
      laborCost: 1280000,
      partsCost: 890000,
      thirdPartyCost: 0,
      totalQuote: 2750000,
      createdAt: '2026-08-28',
      targetDate: '2026-09-08',
      ammReference: 'Cirrus SR22 AMM Cap. 05 & Cirrus CAPS Maintenance Manual',
      workCards: [
        { id: 'wc-401', code: 'WC-01', desc: 'Inspección 100h motor Continental TSIO-550-K e inyectores GAMI', status: 'done', hours: 16, assigned: 'Ingeniero' },
        { id: 'wc-402', code: 'WC-02', desc: 'Inspección visual y fecha de vencimiento cohete extractor y paracaídas CAPS', status: 'done', hours: 14, assigned: 'Ingeniero' }
      ],
      partsConsumed: [
        { partNumber: 'URHB32E', desc: 'Bujías Aeronáuticas Masivas Tempest', qty: 12, form8130: 'FAA-8130-3 #TMP-4410', unitPrice: 38000 },
        { partNumber: 'CH48108-1', desc: 'Filtro de Aceite Spin-On', qty: 1, form8130: 'FAA-8130-3 #84910', unitPrice: 42000 }
      ],
      discrepancies: [],
      releaseCertReady: true
    },
    {
      id: 'ot-005',
      code: 'OT-2026-083',
      aircraftReg: 'LV-HGA',
      aircraftModel: 'Robinson R44 Raven II',
      client: 'Heliservicios del Litoral',
      serviceLine: 'no_programado',
      serviceLineLabel: 'Mantenimiento No Programado',
      type: 'Inspección 100h Robinson + Dynamic Track & Balance de Rotor',
      title: 'Inspección 100h Robinson + Dynamic Track & Balance de Rotor',
      status: 'in_progress',
      statusLabel: 'En Proceso / Track & Balance',
      technician: 'Ingeniero',
      techLic: 'TAR N° 1B-412',
      inspector: 'Ingeniero',
      inspectorLic: 'TAR N° 1B-412',
      hoursEst: 26,
      hoursReal: 22,
      laborCost: 910000,
      partsCost: 360000,
      thirdPartyCost: 120000,
      totalQuote: 1750000,
      createdAt: '2026-09-08',
      targetDate: '2026-09-17',
      ammReference: 'Robinson R44 Maintenance Manual Cap. 10 (Dynamic Balancing)',
      workCards: [
        { id: 'wc-501', code: 'WC-01', desc: 'Verificación de amortiguadores de pala y elastoméricos de rotor principal', status: 'done', hours: 8, assigned: 'Ingeniero' },
        { id: 'wc-502', code: 'WC-02', desc: 'Medición de balance dinámico con equipo Chadwick-Helmuth Vibrex 2000', status: 'in_progress', hours: 14, assigned: 'Ingeniero' }
      ],
      partsConsumed: [],
      discrepancies: [],
      releaseCertReady: false
    }
  ],

  // ========================================================================
  // 3. CRM & CLIENTES / OPERADORES
  // ========================================================================
  crmClients: [
    { id: 'cli-001', name: 'FlySafe Flight Academy', category: 'Escuela de Vuelo / CIAC', contactDept: 'Operaciones de Vuelo', phone: '+54 11 4829-1122', email: 'ops@flysafe.com.ar', base: 'SADF (San Fernando)', fleetCount: 4, activeOts: 1, billedTotal: 18400000, status: 'Activo / Flota en Regla' },
    { id: 'cli-002', name: 'Aerotransporte Ejecutivo Austral S.A.', category: 'Aviación Corporativa / Taxi Aéreo', contactDept: 'Gerencia de Mantenimiento', phone: '+54 11 5901-3344', email: 'tecnica@austral-aero.com.ar', base: 'SADP / SADF', fleetCount: 2, activeOts: 1, billedTotal: 32800000, status: 'Activo / En Hangar Slot 3' },
    { id: 'cli-003', name: 'Servicios Aéreos del Sur S.R.L.', category: 'Trabajo Aéreo & Chárter', contactDept: 'Coordinación Técnica de Base', phone: '+54 11 6720-4499', email: 'mantenimiento@sur-aereo.com.ar', base: 'SADF (San Fernando)', fleetCount: 3, activeOts: 1, billedTotal: 14200000, status: 'En Reparación Turbo Slot 1' },
    { id: 'cli-004', name: 'Inversiones Aeronáuticas Delta', category: 'Propietario Ejecutivo Privado', contactDept: 'Administración de Flota', phone: '+54 11 4110-8800', email: 'flota@delta-invest.com.ar', base: 'SADF (San Fernando)', fleetCount: 1, activeOts: 0, billedTotal: 9600000, status: 'Conforme / Liberada' },
    { id: 'cli-005', name: 'Heliservicios del Litoral', category: 'Operaciones de Helicópteros', contactDept: 'Base Hangar', phone: '+54 11 5122-9900', email: 'operaciones@helilitoral.com.ar', base: 'Hangar Helipuerto SADF', fleetCount: 2, activeOts: 1, billedTotal: 11500000, status: 'Track & Balance en Curso' },
    { id: 'cli-006', name: 'Paracaidismo & Logística Aérea Varela', category: 'Trabajo Aéreo & Lanzamiento', contactDept: 'Despacho Operativo', phone: '+54 11 4980-2211', email: 'despacho@paracaidismovarela.com.ar', base: 'Aeródromo Varela / SADF', fleetCount: 2, activeOts: 1, billedTotal: 21400000, status: 'AOG Crítico / En Hangar Slot 2' },
    { id: 'cli-007', name: 'Aeroclub San Fernando', category: 'Institución Aerodeportiva', contactDept: 'Jefatura de Taller', phone: '+54 11 4714-2200', email: 'taller@aeroclubsanfernando.com.ar', base: 'SADF (San Fernando)', fleetCount: 5, activeOts: 0, billedTotal: 16900000, status: 'Programa Anual Vigente' },
    { id: 'cli-008', name: 'Taxi Aéreo Patagónico', category: 'Transporte Aéreo No Regular', contactDept: 'Centro de Control Operativo', phone: '+54 11 5500-1122', email: 'ops@patagonico-air.com.ar', base: 'SAVC / SADF', fleetCount: 3, activeOts: 0, billedTotal: 24700000, status: 'Próximo Ingreso Inspección Mayor' }
  ],

  // ========================================================================
  // 4. AGENDA & HANGAR SLOTS
  // ========================================================================
  hangarSlots: [
    {
      slotId: 'SLOT-01',
      name: 'Slot 1 · Bahía Bimotores / Medianos',
      status: 'occupied', // 'occupied' | 'available' | 'reserved'
      aircraftReg: 'LV-CDE',
      aircraftModel: 'Piper Seneca V',
      operator: 'Servicios Aéreos del Sur S.R.L.',
      workOrder: 'OT-2026-084',
      task: 'Inspección 50h + Reparación fuga turbo Continental',
      entryDate: '2026-09-12',
      estimatedExit: '2026-09-18',
      progress: 75,
      technician: 'Ingeniero'
    },
    {
      slotId: 'SLOT-02',
      name: 'Slot 2 · Bahía Turbohélices & Utilitarios (AOG)',
      status: 'occupied',
      aircraftReg: 'LV-PLM',
      aircraftModel: 'Cessna 208B Grand Caravan',
      operator: 'Paracaidismo & Logística Varela',
      workOrder: 'OT-2026-085',
      task: 'AOG Reemplazo Arrancador-Generador Skurka 28V',
      entryDate: '2026-09-14',
      estimatedExit: '2026-09-20',
      progress: 45,
      technician: 'Ingeniero'
    },
    {
      slotId: 'SLOT-03',
      name: 'Slot 3 · Bahía Ejecutiva Presurizada',
      status: 'occupied',
      aircraftReg: 'LV-FJR',
      aircraftModel: 'Beechcraft King Air B200',
      operator: 'Aerotransporte Ejecutivo Austral S.A.',
      workOrder: 'OT-2026-081',
      task: 'Inspección Fase 1 & 2 + Chequeo RVSM',
      entryDate: '2026-09-02',
      estimatedExit: '2026-09-16',
      progress: 95,
      technician: 'Ingeniero'
    },
    {
      slotId: 'SLOT-04',
      name: 'Slot 4 · Bahía de Mantenimiento Rápido / Rampa',
      status: 'available',
      aircraftReg: 'DISPONIBLE',
      aircraftModel: 'Bahía Libre para Inspecciones 50h / Pre-Vuelo',
      operator: 'Reserva activa: LV-BKO (Cirrus SR22 - 22/09)',
      workOrder: 'Sin OT activa',
      task: 'Disponible para ingreso inmediato en plataforma',
      entryDate: '-',
      estimatedExit: '-',
      progress: 0,
      technician: 'Ingeniero'
    }
  ],

  // ========================================================================
  // 5. HERRAMIENTAS & CALIBRACIONES
  // ========================================================================
  tools: [
    {
      id: 'tool-01',
      code: 'ATE-TRQ-02',
      desc: 'Torquímetro Digital Snap-On TechWrench 1/2" (25-250 ft-lb)',
      sn: 'SN-90284',
      lab: 'Laboratorio Metrológico INTI',
      certNumber: 'INTI-MET-2025-0814',
      lastCalDate: '2025-09-08',
      expiryDate: '2026-09-08',
      status: 'expired',
      statusLabel: 'VENCIDA · INSTRUMENTO BLOQUEADO',
      lockedForWork: true,
      custody: 'Ingeniero'
    },
    {
      id: 'tool-02',
      code: 'ATE-TRQ-01',
      desc: 'Torquímetro de Precisión Snap-On 3/8" (5-75 ft-lb)',
      sn: 'SN-88231',
      lab: 'Snap-On Calibration Services',
      certNumber: 'SOC-2026-0312',
      lastCalDate: '2026-03-12',
      expiryDate: '2027-03-12',
      status: 'valid',
      statusLabel: 'Conforme / Calibración Vigente',
      lockedForWork: false,
      custody: 'Ingeniero'
    },
    {
      id: 'tool-03',
      code: 'ATE-PIT-01',
      desc: 'Banco Digital Pitot-Estática RVSM Barfield DPS450',
      sn: 'BF-4412',
      lab: 'INTI Metrología de Presión',
      certNumber: 'INTI-AV-2026-0419',
      lastCalDate: '2026-04-19',
      expiryDate: '2027-04-19',
      status: 'valid',
      statusLabel: 'Conforme / Habilitado RVSM',
      lockedForWork: false,
      custody: 'Ingeniero'
    },
    {
      id: 'tool-04',
      code: 'ATE-ELC-03',
      desc: 'Multímetro Digital True-RMS Fluke 87V Aviación',
      sn: 'FLK-9281',
      lab: 'CalibrarLab Metrología S.A.',
      certNumber: 'CL-2026-0510',
      lastCalDate: '2026-05-10',
      expiryDate: '2027-05-10',
      status: 'valid',
      statusLabel: 'Conforme / Calibración Vigente',
      lockedForWork: false,
      custody: 'Ingeniero'
    },
    {
      id: 'tool-05',
      code: 'ATE-MIC-01',
      desc: 'Micrómetro de Exteriores Digital Mitutoyo (0-25mm / 0.001mm)',
      sn: 'MIT-5541',
      lab: 'INTI Metrología Dimensional',
      certNumber: 'INTI-DIM-2026-0120',
      lastCalDate: '2026-01-20',
      expiryDate: '2027-01-20',
      status: 'valid',
      statusLabel: 'Conforme / Calibración Vigente',
      lockedForWork: false,
      custody: 'Ingeniero'
    },
    {
      id: 'tool-06',
      code: 'ATE-MAN-02',
      desc: 'Manómetro Diferencial Dwyer Magnehelic (Cabina & Pitot)',
      sn: 'DW-3310',
      lab: 'AirTech Calibration Services',
      certNumber: 'ATC-2025-1015',
      lastCalDate: '2025-10-15',
      expiryDate: '2026-10-15',
      status: 'warning',
      statusLabel: 'Próximo a Vencer (30 Días)',
      lockedForWork: false,
      custody: 'Ingeniero'
    },
    {
      id: 'tool-07',
      code: 'ATE-NDT-01',
      desc: 'Medidor Ultrasónico de Espesor de Célula Olympus Magna-Mike 8600',
      sn: 'OLY-7719',
      lab: 'Olympus Certified Service',
      certNumber: 'OLY-2026-0228',
      lastCalDate: '2026-02-28',
      expiryDate: '2027-02-28',
      status: 'valid',
      statusLabel: 'Conforme / NDT Habilitado',
      lockedForWork: false,
      custody: 'Ingeniero'
    },
    {
      id: 'tool-08',
      code: 'ATE-BAT-01',
      desc: 'Cargador & Analizador de Baterías Ni-Cd Christie RF80-K',
      sn: 'CHR-1092',
      lab: 'CalibrarLab Metrología',
      certNumber: 'CL-2025-1102',
      lastCalDate: '2025-11-02',
      expiryDate: '2026-11-02',
      status: 'warning',
      statusLabel: 'Próximo a Vencer (48 Días)',
      lockedForWork: false,
      custody: 'Ingeniero'
    }
  ],

  // ========================================================================
  // 6. FINANZAS & FACTURACIÓN
  // ========================================================================
  invoices: [
    { id: 'fc-01', number: 'FC-A 0004-00001284', client: 'Aerotransporte Ejecutivo Austral S.A.', otCode: 'OT-2026-081', concept: 'Certificación e Inspección Fase 1 & 2 King Air B200 + RVSM', netAmount: 5900000, ivaAmount: 1239000, totalAmount: 7139000, date: '2026-09-14', dueDate: '2026-09-29', status: 'pending', statusLabel: 'Pendiente de Cobro' },
    { id: 'fc-02', number: 'FC-A 0004-00001283', client: 'Inversiones Aeronáuticas Delta', otCode: 'OT-2026-082', concept: 'Inspección 100 Horas Cirrus AMM Cap. 05 & Verificación CAPS', netAmount: 2750000, ivaAmount: 577500, totalAmount: 3327500, date: '2026-09-10', dueDate: '2026-09-25', status: 'paid', statusLabel: 'Cobrado' },
    { id: 'fc-03', number: 'FC-A 0004-00001282', client: 'Heliservicios del Litoral', otCode: 'OT-2026-083', concept: 'Inspección 100h Robinson R44 + Dynamic Track & Balance', netAmount: 1750000, ivaAmount: 367500, totalAmount: 2117500, date: '2026-09-08', dueDate: '2026-09-23', status: 'pending', statusLabel: 'Pendiente de Cobro' },
    { id: 'fc-04', number: 'FC-A 0004-00001281', client: 'FlySafe Flight Academy', otCode: 'OT-2026-079', concept: 'Inspección 50h Cessna 172S (LV-WXZ) + Cambio de Filtros', netAmount: 1450000, ivaAmount: 304500, totalAmount: 1754500, date: '2026-09-01', dueDate: '2026-09-16', status: 'paid', statusLabel: 'Cobrado' },
    { id: 'fc-05', number: 'FC-A 0004-00001280', client: 'Paracaidismo & Logística Varela', otCode: 'OT-2026-085', concept: 'Anticipo 50% Reparación AOG Arrancador Skurka (LV-PLM)', netAmount: 3200000, ivaAmount: 672000, totalAmount: 3872000, date: '2026-09-14', dueDate: '2026-09-19', status: 'paid', statusLabel: 'Cobrado' },
    { id: 'fc-06', number: 'FC-A 0004-00001279', client: 'Aeroclub San Fernando', otCode: 'OT-2026-078', concept: 'Overhaul de Magnetos Bendix S4LN & Banco de Prueba', netAmount: 890000, ivaAmount: 186900, totalAmount: 1076900, date: '2026-08-28', dueDate: '2026-09-12', status: 'paid', statusLabel: 'Cobrado' },
    { id: 'fc-07', number: 'FC-A 0004-00001278', client: 'Taxi Aéreo Patagónico', otCode: 'OT-2026-075', concept: 'Cálculo Estructural y Memoria Técnica de Reparación Mayor', netAmount: 4800000, ivaAmount: 1008000, totalAmount: 5808000, date: '2026-08-22', dueDate: '2026-09-06', status: 'paid', statusLabel: 'Cobrado' },
    { id: 'fc-08', number: 'FC-A 0004-00001277', client: 'Servicios Aéreos del Sur S.R.L.', otCode: 'OT-2026-084', concept: 'Anticipo Mano de Obra Inspección 50h Seneca V (LV-CDE)', netAmount: 1000000, ivaAmount: 210000, totalAmount: 1210000, date: '2026-09-12', dueDate: '2026-09-27', status: 'pending', statusLabel: 'Pendiente de Cobro' }
  ],

  // ========================================================================
  // 7. DOCUMENTACIÓN TÉCNICA & MANUALES / PLANOS
  // ========================================================================
  manuals: [
    { id: 'man-01', model: 'Cessna 172S Skyhawk SP', title: 'Aircraft Maintenance Manual (AMM)', code: '172RMM28', currentRev: 'Rev. 28 (Julio 2026)', manufacturer: 'Textron Aviation', status: 'updated', statusLabel: 'Vigente & Verificado' },
    { id: 'man-02', model: 'Beechcraft King Air B200', title: 'King Air B200 Maintenance Manual (MM)', code: '101-590010-19', currentRev: 'Rev. 41 (Mayo 2026)', manufacturer: 'Beechcraft Corporation', status: 'updated', statusLabel: 'Vigente & Verificado' },
    { id: 'man-03', model: 'Piper Seneca V (PA-34-220T)', title: 'Airplane Maintenance Manual (AMM)', code: '761-890', currentRev: 'Rev. 14 (Febrero 2026)', manufacturer: 'Piper Aircraft Inc.', status: 'updated', statusLabel: 'Vigente & Verificado' },
    { id: 'man-04', model: 'Pratt & Whitney PT6A Series', title: 'Turboprop Engine Maintenance Manual', code: 'P&W 3021442', currentRev: 'Rev. 36 (Junio 2026)', manufacturer: 'Pratt & Whitney Canada', status: 'updated', statusLabel: 'Vigente & Verificado' },
    { id: 'man-05', model: 'Continental TSIO-360 Series', title: 'Overhaul Manual & Maintenance Specifications', code: 'X30596A', currentRev: 'Rev. 11 (Enero 2026)', manufacturer: 'Continental Aerospace Tech', status: 'updated', statusLabel: 'Vigente & Verificado' },
    { id: 'man-06', model: 'Cirrus SR22 / SR22T', title: 'Airplane Maintenance Manual (AMM Cap 05/95)', code: '13773-001', currentRev: 'Rev. B9 (Marzo 2026)', manufacturer: 'Cirrus Design Corporation', status: 'updated', statusLabel: 'Vigente & Verificado' },
    { id: 'man-07', model: 'Robinson R44 Raven II', title: 'R44 Maintenance Manual and Instructions for Continued Airworthiness', code: 'R44-MM-22', currentRev: 'Rev. 22 (Abril 2026)', manufacturer: 'Robinson Helicopter Company', status: 'updated', statusLabel: 'Vigente & Verificado' },
    { id: 'man-08', model: 'Ingeniería / Modificaciones', title: 'Memoria de Cálculo Estructural Refuerzo Spar Cap STC-0412', code: 'STC-ARG-0412', currentRev: 'Rev. 02 (Aprobado ANAC)', manufacturer: 'AEROTEC MRO Ingeniería', status: 'updated', statusLabel: 'Aprobación Vigente' }
  ],

  // ========================================================================
  // 8. ALMACÉN & TRAZABILIDAD FORM 8130-3
  // ========================================================================
  partsStock: [
    { id: 'stk-01', partNumber: 'CH48108-1', desc: 'Filtro de Aceite Aviación Champion Aviation', condition: 'Nuevo', form8130: 'FAA-8130-3 #84912', location: 'Estante A-02', qty: 18, minQty: 6, unitPrice: 42000, shelfLife: '2029-12-31', status: 'normal' },
    { id: 'stk-02', partNumber: 'W100PLUS', desc: 'Aceite Lubricante AeroShell W100 Plus (Cuartos)', condition: 'Nuevo', form8130: 'Batch Cert #A-9018', location: 'Depósito Fluidos B-01', qty: 48, minQty: 24, unitPrice: 16500, shelfLife: '2028-06-30', status: 'normal' },
    { id: 'stk-03', partNumber: 'G-243', desc: 'Batería de Aviación Sellada Gill 24V', condition: 'Nuevo', form8130: 'FAA-8130-3 #GL-2026', location: 'Armario Baterías C-01', qty: 2, minQty: 2, unitPrice: 840000, shelfLife: '2027-08-15', status: 'low' },
    { id: 'stk-04', partNumber: 'URHB32E', desc: 'Bujías Masivas Aeronáuticas Tempest 18mm', condition: 'Nuevo', form8130: 'FAA-8130-3 #TMP-4410', location: 'Estante A-05', qty: 36, minQty: 12, unitPrice: 38000, shelfLife: 'Indefinido', status: 'normal' },
    { id: 'stk-05', partNumber: '646277', desc: 'Kit de Juntas y Sellos de Turbo Continental', condition: 'Nuevo', form8130: 'ANAC-8130 #10492', location: 'Cajón Repuestos Continental', qty: 3, minQty: 2, unitPrice: 172000, shelfLife: '2028-10-31', status: 'normal' },
    { id: 'stk-06', partNumber: '160SG111Q', desc: 'Arrancador-Generador Skurka 28V 250A PT6A', condition: 'Overhauled', form8130: 'FAA-8130-3 #SK-7810', location: 'Estantería Rotables Pesados', qty: 1, minQty: 1, unitPrice: 3850000, shelfLife: '2029-01-01', status: 'allocated' },
    { id: 'stk-07', partNumber: 'LW-15473', desc: 'Bomba de Combustible Mecánica Lycoming', condition: 'Nuevo', form8130: 'FAA-8130-3 #LY-55102', location: 'Estante B-04', qty: 2, minQty: 1, unitPrice: 395000, shelfLife: '2028-12-31', status: 'normal' },
    { id: 'stk-08', partNumber: 'ALV-9610', desc: 'Alternador Aeronáutico Hartzell 28V 70A', condition: 'Nuevo', form8130: 'FAA-8130-3 #HZ-9912', location: 'Estante B-03', qty: 1, minQty: 2, unitPrice: 620000, shelfLife: 'Indefinido', status: 'low' },
    { id: 'stk-09', partNumber: '10-349220-4', desc: 'Magneto Bendix / TCM S-1200 Reacondicionado', condition: 'Overhauled', form8130: 'FAA-8130-3 #TCM-2849', location: 'Banco Rotables Eléctricos', qty: 2, minQty: 1, unitPrice: 510000, shelfLife: '2028-05-31', status: 'normal' },
    { id: 'stk-10', partNumber: '124001-4D', desc: 'Kit Mangueras Flexibles Teflón Stratoflex', condition: 'Nuevo', form8130: 'ANAC-8130 #SF-11029', location: 'Estante Mangueras A-08', qty: 4, minQty: 2, unitPrice: 195000, shelfLife: '2031-04-30', status: 'normal' }
  ],

  // ========================================================================
  // 9. CALIDAD, AUDITORÍAS & SMS (SISTEMA DE GESTIÓN DE SEGURIDAD OPERACIONAL)
  // ========================================================================
  audits: [
    { id: 'aud-01', title: 'Auditoría Anual de Vigilancia ANAC (TAR N° 1B-412)', authority: 'Autoridad Aeronáutica Nacional (ANAC)', date: '2026-05-14', result: 'APROBADA SIN OBSERVACIONES CRÍTICAS', findingsCount: 0, status: 'approved', responsible: 'Ingeniero' },
    { id: 'aud-02', title: 'Auditoría Interna de Control de Registros Técnicos & Trazabilidad 8130', authority: 'Departamento de Calidad MRO', date: '2026-08-10', result: 'CONFORME (2 Hallazgos Menores en CAPA)', findingsCount: 2, status: 'capa_in_progress', responsible: 'Ingeniero' },
    { id: 'aud-03', title: 'Revisión Periódica del Programa de Seguridad Operacional (SMS)', authority: 'Comité de Seguridad Aeronáutica', date: '2026-09-02', result: 'ÍNDICE DE CONFORMIDAD 99.4%', findingsCount: 0, status: 'approved', responsible: 'Ingeniero' },
    { id: 'aud-04', title: 'Auditoría de Calidad a Proveedor Certificado (AeroPartes S.A.)', authority: 'Departamento de Calidad MRO', date: '2026-07-20', result: 'PROVEEDOR RE-HOMOLOGADO CLASE A', findingsCount: 0, status: 'approved', responsible: 'Ingeniero' }
  ],

  // ========================================================================
  // 10. DIRECTIVAS MANDATORIAS (FAA AD / ANAC AD) & BOLETINES (SB)
  // ========================================================================
  directives: [
    { id: 'ad-01', code: 'FAA AD 2026-11-04', authority: 'FAA', appliesTo: 'Piper PA-28 / PA-32 / PA-34', title: 'Inspección de spar cap de ala por corrientes de Foucault (Eddy Current)', status: 'complied', statusLabel: 'Cumplida en LV-CDE bajo OT-2026-084', complianceDate: '2026-09-13', nextDue: 'A las 1.000h de vuelo' },
    { id: 'ad-02', code: 'ANAC AD 2025-08-02', authority: 'ANAC', appliesTo: 'Cessna 150 / 152 / 172', title: 'Verificación de fijación de terminales de comando de timón de profundidad', status: 'complied', statusLabel: 'Cumplida en LV-WXZ el 15/06/2026', complianceDate: '2026-06-15', nextDue: 'Inspección Anual' },
    { id: 'ad-03', code: 'FAA AD 2026-14-19', authority: 'FAA', appliesTo: 'Cirrus SR20 / SR22', title: 'Inspección de pernos de sujeción de soporte de motor dynafocal', status: 'pending', statusLabel: 'Pendiente en LV-BKO (Tiene 22h remanentes)', complianceDate: 'Antes de 940h', nextDue: '940.0h Célula' },
    { id: 'ad-04', code: 'Cessna SB-2026-02', authority: 'Cessna', appliesTo: 'Cessna 208B Grand Caravan', title: 'Reemplazo preventivo de diodo de protección en caja de control GCU', status: 'in_progress', statusLabel: 'En aplicación en LV-PLM bajo OT-2026-085', complianceDate: 'Durante parada actual', nextDue: 'Una sola vez' }
  ],

  // ========================================================================
  // 11. MATRIZ DE VENCIMIENTOS DE AERONAVEGABILIDAD (CAMO)
  // ========================================================================
  camoExpirations: [
    { id: 'exp-001', aircraft: 'LV-PLM (Cessna Caravan)', item: 'Certificado de Aeronavegabilidad (CdeA)', limitDate: '2026-09-30 (15 días)', remaining: 'Finalizar OT-2026-085 y coordinar inspección de verificación con autoridad.', criticality: 'danger', criticalityLabel: 'VENCIDO / INMEDIATO' },
    { id: 'exp-002', aircraft: 'LV-CDE (Piper Seneca V)', item: 'Inspección 50 Horas de Célula & Motor', limitDate: 'VENCIDA (0 Horas remanentes)', remaining: 'Liberar al servicio tras prueba en banco de turbo compresor.', criticality: 'danger', criticalityLabel: 'VENCIDO / INMEDIATO' },
    { id: 'exp-003', aircraft: 'LV-WXZ (Cessna 172S)', item: 'Mangueras Flexibles de Combustible en Motor', limitDate: '2026-10-15 (30 días / 29.5 Horas)', remaining: 'Kit de mangueras P/N AERO-KIT-172 reservado en almacén con Form 8130-3.', criticality: 'warning', criticalityLabel: 'PRÓXIMO' },
    { id: 'exp-004', aircraft: 'LV-FJR (King Air B200)', item: 'Batería Transmisor de Localización de Emergencia (ELT 406 MHz)', limitDate: '2026-10-22 (37 días)', remaining: 'Programar reemplazo durante parada de Fase 2.', criticality: 'warning', criticalityLabel: 'PRÓXIMO' },
    { id: 'exp-005', aircraft: 'Taller / Laboratorio', item: 'Torquímetro Digital Snap-On 1/2" (P/N: ATE-TRQ-02)', limitDate: 'Calibración VENCIDA el 2026-09-08', remaining: 'Enviado a Laboratorio INTI para calibración y emisión de nuevo certificado trazable.', criticality: 'danger', criticalityLabel: 'VENCIDO / INMEDIATO' },
    { id: 'exp-006', aircraft: 'Personal Técnico', item: 'Certificado Médico Aeronáutico (CMA) · Ingeniero', limitDate: '2026-10-05 (20 días)', remaining: 'Turno asignado en INMAE para renovación médica el 22/09/2026.', criticality: 'warning', criticalityLabel: 'PRÓXIMO' }
  ],

  // ========================================================================
  // 12. FINANZAS POR PERÍODO
  // ========================================================================
  financials: {
    day: {
      label: 'Día en Curso (15 Septiembre 2026)',
      income: 3200000,
      mroLabor: 1450000,
      partsPurchases: 850000,
      hangarExpenses: 200000,
      balance: 700000,
      profitability: '21.8%',
      series: [
        { label: '08:00', in: 400000, out: 250000 },
        { label: '11:00', in: 1200000, out: 700000 },
        { label: '14:00', in: 600000, out: 850000 },
        { label: '17:00', in: 1000000, out: 700000 }
      ],
      yMax: 1500000
    },
    week: {
      label: 'Semana Actual (Semana 38 · Sep 2026)',
      income: 14200000,
      mroLabor: 6400000,
      partsPurchases: 3600000,
      hangarExpenses: 900000,
      balance: 3300000,
      profitability: '23.2%',
      series: [
        { label: 'Lun', in: 2400000, out: 1800000 },
        { label: 'Mar', in: 3800000, out: 2600000 },
        { label: 'Mié', in: 3100000, out: 2200000 },
        { label: 'Jue', in: 2900000, out: 2300000 },
        { label: 'Vie', in: 2000000, out: 2000000 }
      ],
      yMax: 4500000
    },
    month: {
      label: 'Mes en Curso (Septiembre 2026)',
      income: 48650000,
      mroLabor: 22400000,
      partsPurchases: 11850000,
      hangarExpenses: 3200000,
      balance: 11200000,
      profitability: '23.0%',
      series: [
        { label: 'Abr', in: 38500000, out: 30200000 },
        { label: 'May', in: 41200000, out: 32400000 },
        { label: 'Jun', in: 46800000, out: 35100000 },
        { label: 'Jul', in: 44500000, out: 34200000 },
        { label: 'Ago', in: 47200000, out: 36800000 },
        { label: 'Sep', in: 48650000, out: 37450000 }
      ],
      yMax: 55000000
    },
    year: {
      label: 'Ejercicio Anual Consolidado (2026)',
      income: 428000000,
      mroLabor: 198000000,
      partsPurchases: 104000000,
      hangarExpenses: 28000000,
      balance: 98000000,
      profitability: '22.9%',
      series: [
        { label: 'T1 2025', in: 82000000, out: 64000000 },
        { label: 'T2 2025', in: 91000000, out: 71000000 },
        { label: 'T3 2025', in: 99000000, out: 76000000 },
        { label: 'T4 2025', in: 108000000, out: 82000000 },
        { label: 'T1 2026', in: 126000000, out: 97000000 },
        { label: 'T2 2026', in: 139000000, out: 107000000 }
      ],
      yMax: 160000000
    }
  },

  serviceLinesFinancials: [
    { label: 'Mantenimiento Programado (Checks 50h/100h/Fases)', val: 25300000, pct: 52, margin: '24.5%', color: '#2563eb' },
    { label: 'Mantenimiento No Programado / Troubleshooting AOG', val: 10700000, pct: 22, margin: '28.0%', color: '#0284c7' },
    { label: 'Ingeniería Aeronáutica & Certificación STC', val: 7800000, pct: 16, margin: '35.0%', color: '#3b82f6' },
    { label: 'Soporte CAMO & Gestión de Aeronavegabilidad', val: 4850000, pct: 10, margin: '38.0%', color: '#10b981' }
  ]
};

// SVG GEOMETRY UTILITIES FOR INTERACTIVE DONUT & PIE CHARTS
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describePieSlice(cx, cy, radius, startAngle, endAngle) {
  let sweep = endAngle - startAngle;
  if (sweep >= 360) sweep = 359.99;
  if (sweep <= 0.05) return '';
  const start = polarToCartesian(cx, cy, radius, startAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle + sweep);
  const largeArcFlag = sweep <= 180 ? '0' : '1';
  return [
    'M', Number(cx).toFixed(2), Number(cy).toFixed(2),
    'L', start.x.toFixed(2), start.y.toFixed(2),
    'A', radius, radius, 0, largeArcFlag, 1, end.x.toFixed(2), end.y.toFixed(2),
    'Z'
  ].join(' ');
}

function describeDonutSlice(cx, cy, rOuter, rInner, startAngle, endAngle) {
  let sweep = endAngle - startAngle;
  if (sweep >= 360) sweep = 359.99;
  if (sweep <= 0.05) return '';
  const startOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle + sweep);
  const startInner = polarToCartesian(cx, cy, rInner, startAngle + sweep);
  const endInner = polarToCartesian(cx, cy, rInner, startAngle);
  const largeArcFlag = sweep <= 180 ? '0' : '1';

  return [
    'M', startOuter.x.toFixed(2), startOuter.y.toFixed(2),
    'A', rOuter, rOuter, 0, largeArcFlag, 1, endOuter.x.toFixed(2), endOuter.y.toFixed(2),
    'L', startInner.x.toFixed(2), startInner.y.toFixed(2),
    'A', rInner, rInner, 0, largeArcFlag, 0, endInner.x.toFixed(2), endInner.y.toFixed(2),
    'Z'
  ].join(' ');
}

/* ==========================================================================
   APP CONTROLLER & VIEW RENDERERS
   ========================================================================== */

const App = {
  init() {
    this.bindEvents();
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    this.navigateTo(hash);
  },

  bindEvents() {
    // Navigation items
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        if (view) {
          window.location.hash = view;
          this.navigateTo(view);
        }
      });
    });

    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '') || 'dashboard';
      this.navigateTo(hash);
    });

    // Sidebar collapse button
    document.getElementById('collapseSidebarBtn')?.addEventListener('click', () => {
      document.getElementById('sidebar')?.classList.toggle('collapsed');
    });

    // Theme toggle
    document.getElementById('toggleThemeBtn')?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      this.showToast('Tema cambiado a: ' + (next === 'dark' ? 'Modo Oscuro Técnico' : 'Modo Claro'));
    });

    // Service line filter buttons in topbar
    document.querySelectorAll('.service-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.service-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-line');
        AERO_DB.state.activeServiceLine = filter;
        this.renderCurrentView();
        this.showToast('Línea de servicio filtrada: ' + btn.textContent.trim());
      });
    });

    // Global Search (Ctrl + K)
    const searchInput = document.getElementById('globalSearchInput');
    searchInput?.addEventListener('input', (e) => {
      AERO_DB.state.searchQuery = e.target.value.toLowerCase().trim();
      if (['flota', 'ordenes', 'aeronavegabilidad', 'crm', 'herramientas', 'almacen', 'finanzas'].includes(AERO_DB.state.activeView)) {
        this.renderCurrentView();
      }
    });

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInput?.focus();
      }
    });

    // Quick action buttons in topbar
    document.getElementById('btnQuickNewOt')?.addEventListener('click', () => this.openNewOtModal());
    document.getElementById('btnQuickNewBudget')?.addEventListener('click', () => {
      this.navigateTo('presupuestos');
      this.showToast('Módulo de Presupuestos & Cotizaciones Aeronáuticas');
    });
    document.getElementById('btnQuickNewAircraft')?.addEventListener('click', () => {
      document.getElementById('newAircraftModalBackdrop')?.classList.add('active');
    });

    // Modal Close events
    document.getElementById('closeNewOtModalBtn')?.addEventListener('click', () => {
      document.getElementById('newOtModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnCancelNewOt')?.addEventListener('click', () => {
      document.getElementById('newOtModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('formNewOt')?.addEventListener('submit', (e) => this.handleNewOtSubmit(e));

    document.getElementById('closeCrsModalBtn')?.addEventListener('click', () => {
      document.getElementById('crsModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnCloseCrs')?.addEventListener('click', () => {
      document.getElementById('crsModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnPrintCrs')?.addEventListener('click', () => {
      window.print();
    });
    document.getElementById('btnSignCrs')?.addEventListener('click', () => {
      this.showToast('Certificado CRS firmado digitalmente por Ingeniero (Habilitación TAR N° 1B-412). Notificación enviada al operador.');
      document.getElementById('crsModalBackdrop')?.classList.remove('active');
    });

    document.getElementById('closeBudgetPrintModalBtn')?.addEventListener('click', () => {
      document.getElementById('budgetPrintModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnCloseBudgetPrint')?.addEventListener('click', () => {
      document.getElementById('budgetPrintModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnPrintBudget')?.addEventListener('click', () => {
      window.print();
    });
    document.getElementById('btnSendBudgetWhatsapp')?.addEventListener('click', () => {
      this.showToast('Enlace seguro del presupuesto formal enviado vía WhatsApp al operador.');
    });

    document.getElementById('closeNewAircraftModalBtn')?.addEventListener('click', () => {
      document.getElementById('newAircraftModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnCancelNewAircraft')?.addEventListener('click', () => {
      document.getElementById('newAircraftModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('formNewAircraft')?.addEventListener('submit', (e) => this.handleNewAircraftSubmit(e));

    // Global Tooltip Helper
    const tooltip = document.getElementById('chartTooltip');
    window.showChartTooltip = (e, title, val) => {
      if (!tooltip) return;
      tooltip.innerHTML = '<div class="tooltip-title">' + title + '</div><div class="tooltip-val">' + val + '</div>';
      tooltip.classList.add('active');
      const x = Math.min(window.innerWidth - 220, Math.max(10, (e.clientX || 0) + 14));
      const y = Math.max(10, (e.clientY || 0) - 35);
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    };

    window.hideChartTooltip = () => {
      if (!tooltip) return;
      tooltip.classList.remove('active');
    };

    window.highlightAeroMonth = (idx) => {
      const guide = document.getElementById('aero-guide-' + idx);
      if (guide) guide.setAttribute('opacity', '1');
      const dotIn = document.getElementById('aero-dot-in-' + idx);
      if (dotIn) { dotIn.setAttribute('r', '7.5'); dotIn.setAttribute('stroke-width', '3'); }
      const dotOut = document.getElementById('aero-dot-out-' + idx);
      if (dotOut) { dotOut.setAttribute('r', '7'); dotOut.setAttribute('stroke-width', '3'); }
      const dotNet = document.getElementById('aero-dot-net-' + idx);
      if (dotNet) { dotNet.setAttribute('r', '7.5'); dotNet.setAttribute('stroke-width', '3'); }
    };

    window.unhighlightAeroMonth = (idx) => {
      const guide = document.getElementById('aero-guide-' + idx);
      if (guide) guide.setAttribute('opacity', '0');
      const dotIn = document.getElementById('aero-dot-in-' + idx);
      if (dotIn) { dotIn.setAttribute('r', '5'); dotIn.setAttribute('stroke-width', '2'); }
      const dotOut = document.getElementById('aero-dot-out-' + idx);
      if (dotOut) { dotOut.setAttribute('r', '4.5'); dotOut.setAttribute('stroke-width', '2'); }
      const dotNet = document.getElementById('aero-dot-net-' + idx);
      if (dotNet) { dotNet.setAttribute('r', '5'); dotNet.setAttribute('stroke-width', '2'); }
    };

    window.showAeroMonthTooltip = (e, label, inVal, outVal, netVal, netPct) => {
      if (!tooltip) return;
      const currentPeriod = AERO_DB.financials[AERO_DB.state.currentTimeFilter || 'month'];
      const pLabel = currentPeriod ? currentPeriod.label : 'Período';
      tooltip.innerHTML = `
        <div style="font-weight:800; font-size:12px; margin-bottom:6px; color:#f8fafc; border-bottom:1px solid rgba(255,255,255,0.18); padding-bottom:4px;">
          ${label} (${pLabel})
        </div>
        <div style="display:flex; flex-direction:column; gap:4px; font-size:11px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:16px;">
            <span style="color:#60a5fa; display:flex; align-items:center; gap:5px;"><span style="width:7px; height:7px; border-radius:50%; background:#2563eb; display:inline-block;"></span> Facturación Certificaciones:</span>
            <strong style="font-family:var(--font-mono); color:#ffffff;">${inVal}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:16px;">
            <span style="color:#94a3b8; display:flex; align-items:center; gap:5px;"><span style="width:7px; height:7px; border-radius:50%; background:#475569; display:inline-block;"></span> Egresos MRO:</span>
            <strong style="font-family:var(--font-mono); color:#ffffff;">${outVal}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:16px;">
            <span style="color:#34d399; display:flex; align-items:center; gap:5px;"><span style="width:7px; height:7px; border-radius:50%; background:#10b981; display:inline-block;"></span> Margen Neto Taller:</span>
            <strong style="font-family:var(--font-mono); color:#34d399;">+ ${netVal} (${netPct}%)</strong>
          </div>
        </div>
      `;
      tooltip.classList.add('active');
      const x = Math.min(window.innerWidth - 260, Math.max(10, (e.clientX || 0) + 14));
      const y = Math.max(10, (e.clientY || 0) - 45);
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    };
  },

  navigateTo(view) {
    AERO_DB.state.activeView = view;
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-view') === view);
    });

    document.getElementById('sidebar')?.classList.remove('mobile-open');
    this.renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderCurrentView() {
    switch (AERO_DB.state.activeView) {
      case 'flota':
        this.renderFlotaView();
        break;
      case 'ordenes':
        this.renderOrdenesView();
        break;
      case 'aeronavegabilidad':
        this.renderAeronavegabilidadView();
        break;
      case 'directivas':
        this.renderDirectivasView();
        break;
      case 'planos':
        this.renderPlanosView();
        break;
      case 'crm':
        this.renderCrmView();
        break;
      case 'presupuestos':
        this.renderPresupuestosView();
        break;
      case 'agenda':
        this.renderAgendaView();
        break;
      case 'personal':
        this.renderPersonalView();
        break;
      case 'almacen':
        this.renderAlmacenView();
        break;
      case 'herramientas':
        this.renderHerramientasView();
        break;
      case 'finanzas':
        this.renderFinanzasView();
        break;
      case 'reportes':
        this.renderReportesView();
        break;
      case 'calidad':
        this.renderCalidadView();
        break;
      case 'configuracion':
        this.renderConfiguracionView();
        break;
      case 'dashboard':
      default:
        this.renderDashboardView();
    }
  },

  formatCurrency(num) {
    return '$ ' + Number(num).toLocaleString('es-AR');
  },

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<span>✓</span> <span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  setPeriod(period) {
    AERO_DB.state.currentTimeFilter = period;
    this.showToast('Período de análisis: ' + period.toUpperCase());
    this.renderDashboardView();
  },

  setFinancialChartType(type) {
    AERO_DB.state.financialChartType = type;
    this.renderDashboardView();
  },

  setFinancialChartUnit(unit) {
    AERO_DB.state.financialChartUnit = unit;
    this.renderDashboardView();
  },

  setCostStructureType(type) {
    AERO_DB.state.costStructureType = type;
    this.renderDashboardView();
  },

  setCostStructureUnit(unit) {
    AERO_DB.state.costStructureUnit = unit;
    this.renderDashboardView();
  },

  // ========================================================================
  // DASHBOARD GENERAL (12 KPIS: 6 ECONÓMICOS + 6 TÉCNICOS)
  // ========================================================================
  renderDashboardView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    const periodKey = AERO_DB.state.currentTimeFilter || 'month';
    const periodData = AERO_DB.financials[periodKey] || AERO_DB.financials.month;

    const totalFleet = AERO_DB.aircraft.length;
    const airworthyFleet = AERO_DB.aircraft.filter(a => a.status === 'service').length;
    const fleetPct = Math.round((airworthyFleet / totalFleet) * 100);

    const activeOts = AERO_DB.workOrders.filter(o => o.status === 'in_progress' || o.status === 'review').length;
    const criticalAlertsCount = AERO_DB.camoExpirations.length;
    const pendingAdsCount = AERO_DB.directives.filter(d => d.status === 'pending').length;

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Panel de Control General · AEROTEC MRO & CAMO</h1>
          <p class="page-subtitle">Supervisión integral en tiempo real de operaciones de mantenimiento aeronáutico, aeronavegabilidad continuada y rentabilidad del taller.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-secondary" onclick="App.navigateTo('flota')">+ Alta Aeronave</button>
          <button class="btn btn-primary" onclick="App.openNewOtModal()">+ Abrir OT</button>
        </div>
      </div>

      <!-- Period Toolbar -->
      <div class="period-toolbar">
        <div class="period-info">
          <span class="period-label">Período de Análisis Económico & Operacional:</span>
          <span class="period-active-date">${periodData.label}</span>
        </div>
        <div class="period-buttons-group">
          <button type="button" class="btn-period ${periodKey === 'day' ? 'active' : ''}" onclick="App.setPeriod('day')">Día</button>
          <button type="button" class="btn-period ${periodKey === 'week' ? 'active' : ''}" onclick="App.setPeriod('week')">Semana</button>
          <button type="button" class="btn-period ${periodKey === 'month' ? 'active' : ''}" onclick="App.setPeriod('month')">Mes</button>
          <button type="button" class="btn-period ${periodKey === 'year' ? 'active' : ''}" onclick="App.setPeriod('year')">Año</button>
        </div>
      </div>

      <!-- ROW 1: 6 KPIS ECONÓMICOS -->
      <div class="kpi-group-title">
        CAPA ECONÓMICA & FINANCIERA MRO
        <span class="badge badge-primary" style="font-size:10px;">FACTURACIÓN & CAJA</span>
      </div>
      <div class="executive-stats-grid">
        <div class="stat-card primary">
          <div class="stat-label">Ingresos Totales Facturados</div>
          <div class="stat-value">${this.formatCurrency(periodData.income)}</div>
          <div class="stat-sub">Certificaciones & OTs liberadas</div>
        </div>
        <div class="stat-card secondary">
          <div class="stat-label">Costos Operativos MRO</div>
          <div class="stat-value">${this.formatCurrency(periodData.mroLabor)}</div>
          <div class="stat-sub">Mano de obra técnica y especialistas</div>
        </div>
        <div class="stat-card info">
          <div class="stat-label">Compras de Repuestos</div>
          <div class="stat-value">${this.formatCurrency(periodData.partsPurchases)}</div>
          <div class="stat-sub">Aviónica, consumibles y kits Form 8130</div>
        </div>
        <div class="stat-card dark">
          <div class="stat-label">Gastos Estructura Fija</div>
          <div class="stat-value">${this.formatCurrency(periodData.hangarExpenses)}</div>
          <div class="stat-sub">Hangar San Fernando, seguros, CAMO software</div>
        </div>
        <div class="stat-card success">
          <div class="stat-label">Balance Neto Disponible</div>
          <div class="stat-value" style="color:var(--success);">+ ${this.formatCurrency(periodData.balance)}</div>
          <div class="stat-sub">Superávit operativo del período</div>
        </div>
        <div class="stat-card highlight">
          <div class="stat-label">Rentabilidad Neta</div>
          <div class="stat-value" style="color:#059669;">${periodData.profitability}</div>
          <div class="stat-sub">Margen neto s/ facturación</div>
        </div>
      </div>

      <!-- ROW 2: 6 KPIS OPERACIONALES -->
      <div class="kpi-group-title" style="margin-top:20px;">
        CAPA OPERATIVA & SEGURIDAD OPERACIONAL (AIRWORTHINESS / CAMO)
        <span class="badge badge-success" style="font-size:10px;">FLOTA & HANGAR</span>
      </div>
      <div class="operational-stats-grid">
        <div class="stat-card stat-operational success">
          <div class="stat-label">Flota Aeronavegable</div>
          <div class="stat-value" style="color:var(--success);">${airworthyFleet} / ${totalFleet} <span style="font-size:12px; font-weight:700;">(${fleetPct}%)</span></div>
          <div class="stat-sub">14 habilitadas · 2 en hangar</div>
        </div>
        <div class="stat-card stat-operational info">
          <div class="stat-label">OTs en Ejecución</div>
          <div class="stat-value" style="color:#2563eb;">${activeOts} Activas</div>
          <div class="stat-sub">Antigüedad media: 4.2 días</div>
        </div>
        <div class="stat-card stat-operational danger">
          <div class="stat-label">Vencimientos Críticos</div>
          <div class="stat-value" style="color:var(--danger);">${criticalAlertsCount} Alertas</div>
          <div class="stat-sub">Inspecciones, CdeA y LLP próximos</div>
        </div>
        <div class="stat-card stat-operational warning">
          <div class="stat-label">Directivas AD / SB</div>
          <div class="stat-value" style="color:var(--warning);">${pendingAdsCount} Pendientes</div>
          <div class="stat-sub">Boletines mandatarios en control</div>
        </div>
        <div class="stat-card stat-operational primary">
          <div class="stat-label">Horas-Hombre MRO</div>
          <div class="stat-value" style="color:#1d4ed8;">1.240 HH</div>
          <div class="stat-sub">94% eficiencia plan vs real</div>
        </div>
        <div class="stat-card stat-operational success">
          <div class="stat-label">Turnaround Time (AOG)</div>
          <div class="stat-value" style="color:#059669;">1.8 Días</div>
          <div class="stat-sub">Tiempo promedio a liberación</div>
        </div>
      </div>

      <!-- CHARTS DUAL GRID -->
      <div class="financial-charts-grid" style="margin-top:22px;">
        <!-- Chart 1: Evolución Financiera Consolidada -->
        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3>Evolución Financiera Consolidada</h3>
              <p>Facturación de certificaciones vs costos de taller y repuestos vs balance neto</p>
            </div>
            <div class="chart-controls">
              <!-- Selector de Tipo: Dona Primero! -->
              <div class="chart-controls-group">
                <button type="button" class="chart-type-btn ${AERO_DB.state.financialChartType === 'donut' ? 'active' : ''}" onclick="App.setFinancialChartType('donut')" title="Gráfico de Dona">Dona</button>
                <button type="button" class="chart-type-btn ${AERO_DB.state.financialChartType === 'lines' ? 'active' : ''}" onclick="App.setFinancialChartType('lines')" title="Gráfico de Líneas">Líneas</button>
                <button type="button" class="chart-type-btn ${AERO_DB.state.financialChartType === 'area' ? 'active' : ''}" onclick="App.setFinancialChartType('area')" title="Gráfico de Áreas">Áreas</button>
                <button type="button" class="chart-type-btn ${AERO_DB.state.financialChartType === 'bars' ? 'active' : ''}" onclick="App.setFinancialChartType('bars')" title="Gráfico de Barras">Barras</button>
                <button type="button" class="chart-type-btn ${AERO_DB.state.financialChartType === 'pie' ? 'active' : ''}" onclick="App.setFinancialChartType('pie')" title="Gráfico de Torta">Torta</button>
              </div>
              <div class="chart-controls-group">
                <button type="button" class="chart-toggle-btn ${AERO_DB.state.financialChartUnit === 'currency' ? 'active' : ''}" onclick="App.setFinancialChartUnit('currency')">$ Valores</button>
                <button type="button" class="chart-toggle-btn ${AERO_DB.state.financialChartUnit === 'percent' ? 'active' : ''}" onclick="App.setFinancialChartUnit('percent')">% Porcentaje</button>
              </div>
            </div>
          </div>
          <div class="chart-svg-container" id="chart-svg-container">
            ${this.renderFinancialSvgChart(periodData, AERO_DB.state.financialChartType, AERO_DB.state.financialChartUnit)}
          </div>
        </div>

        <!-- Chart 2: Estructura de Costos & Rentabilidad -->
        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3>Estructura de Costos & Rentabilidad</h3>
              <p>Margen neto en centro y desglose por línea de servicio MRO</p>
            </div>
            <div class="chart-controls">
              <div class="chart-controls-group">
                <button type="button" class="chart-type-btn ${AERO_DB.state.costStructureType === 'donut' ? 'active' : ''}" onclick="App.setCostStructureType('donut')" title="Vista Dona">Dona</button>
                <button type="button" class="chart-type-btn ${AERO_DB.state.costStructureType === 'breakdown' ? 'active' : ''}" onclick="App.setCostStructureType('breakdown')" title="Desglose por Línea">Desglose</button>
                <button type="button" class="chart-type-btn ${AERO_DB.state.costStructureType === 'pie' ? 'active' : ''}" onclick="App.setCostStructureType('pie')" title="Vista Torta">Torta</button>
                <button type="button" class="chart-type-btn ${AERO_DB.state.costStructureType === 'bars' ? 'active' : ''}" onclick="App.setCostStructureType('bars')" title="Vista Barras">Barras</button>
              </div>
              <div class="chart-controls-group">
                <button type="button" class="chart-toggle-btn ${AERO_DB.state.costStructureUnit === 'percent' ? 'active' : ''}" onclick="App.setCostStructureUnit('percent')">% Porcentaje</button>
                <button type="button" class="chart-toggle-btn ${AERO_DB.state.costStructureUnit === 'currency' ? 'active' : ''}" onclick="App.setCostStructureUnit('currency')">$ Valores</button>
              </div>
            </div>
          </div>
          <div class="chart-svg-container" id="cost-structure-container">
            ${this.renderCostStructureWidget(periodData, AERO_DB.state.costStructureType, AERO_DB.state.costStructureUnit)}
          </div>
        </div>
      </div>

      <!-- LOWER DASHBOARD GRID: FLEET STATUS & ALERTS -->
      <div class="dashboard-lower-grid" style="margin-top:22px;">
        <!-- Left: Estado de Flota en Tiempo Real -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <h3 style="font-size:15px; font-weight:800; color:var(--text-primary);">Estado de Flota en Tiempo Real (San Fernando & Escuelas)</h3>
            <button class="btn btn-secondary btn-sm" onclick="App.navigateTo('flota')">Ver toda la flota (${AERO_DB.aircraft.length})</button>
          </div>
          <div class="fleet-status-cards-wrap" style="display:flex; flex-direction:column; gap:12px;">
            ${AERO_DB.aircraft.slice(0, 4).map(a => {
              const maxH = 100;
              const remaining = a.hoursRemaining;
              const pct = Math.max(0, Math.min(100, (remaining / maxH) * 100));
              const barColor = a.status === 'expired' || a.hoursRemaining === 0 ? 'var(--danger)' : (remaining <= 30 ? 'var(--warning)' : 'var(--success)');
              const badgeClass = a.status === 'service' ? 'badge-success' : (a.status === 'maintenance' ? 'badge-warning' : 'badge-danger');
              
              return `
                <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:10px; padding:12px 14px;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                    <div>
                      <div style="display:flex; align-items:center; gap:8px;">
                        <strong style="font-size:14px; font-family:var(--font-mono); color:#2563eb;">${a.registration}</strong>
                        <span class="badge ${badgeClass}">${a.status.toUpperCase() === 'SERVICE' ? 'EN SERVICIO' : (a.status.toUpperCase() === 'MAINTENANCE' ? 'EN HANGAR' : 'AOG')}</span>
                      </div>
                      <div style="font-size:12px; font-weight:700; color:var(--text-primary); margin-top:2px;">${a.makeModel}</div>
                      <div style="font-size:11px; color:var(--text-secondary);">${a.owner} · Horas Célula: <strong style="font-family:var(--font-mono);">${a.ttsn}h</strong></div>
                    </div>
                    <div style="text-align:right;">
                      <div style="font-size:10px; color:var(--text-secondary); text-transform:uppercase; font-weight:700;">Próxima Inspección:</div>
                      <div style="font-size:11.5px; font-weight:800; color:var(--text-primary);">${a.nextCheckType}</div>
                      <div style="font-size:11px; font-family:var(--font-mono); font-weight:800; color:${barColor};">
                        ${remaining > 0 ? remaining + 'h remanentes' : 'VENCIDO'}
                      </div>
                    </div>
                  </div>
                  <!-- Progress Bar -->
                  <div class="meter-bar-wrap" style="margin-top:10px;">
                    <div class="meter-bar-fill" style="width:${pct}%; background:${barColor};"></div>
                  </div>
                  <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--text-secondary); margin-top:6px;">
                    <span>Último Check: ${a.lastCheckType} (${a.lastCheckDate})</span>
                    <span>Vencimiento CdeA: ${a.cdaExpiry}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Right: Alertas Críticas & Calibraciones -->
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <h3 style="font-size:15px; font-weight:800; color:var(--text-primary);">Alertas de Aeronavegabilidad & Calidad</h3>
            <button class="btn btn-secondary btn-sm" onclick="App.navigateTo('aeronavegabilidad')">Ver todas (${AERO_DB.camoExpirations.length})</button>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${AERO_DB.camoExpirations.map(exp => `
              <div style="background:var(--bg-app); border:1px solid var(--border-color); border-left:4px solid ${exp.criticality === 'danger' ? 'var(--danger)' : 'var(--warning)'}; border-radius:8px; padding:10px 12px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <strong style="font-size:12.5px; color:var(--text-primary);">${exp.aircraft}</strong>
                  <span class="badge ${exp.criticality === 'danger' ? 'badge-danger' : 'badge-warning'}">${exp.criticality === 'danger' ? 'CRÍTICO' : 'ATENCIÓN'}</span>
                </div>
                <div style="font-size:11.5px; font-weight:700; color:var(--text-secondary); margin-top:3px;">
                  ${exp.item} · <span style="font-family:var(--font-mono); color:${exp.criticality === 'danger' ? 'var(--danger)' : '#b45309'};">${exp.limitDate}</span>
                </div>
                <div style="font-size:11px; color:var(--text-secondary); margin-top:4px;">
                  ${exp.remaining}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // RENDER FINANCIAL SVG CHART (DONUT, LINES, AREA, BARS, PIE)
  // ========================================================================
  renderFinancialSvgChart(periodData, type = 'donut', unit = 'currency') {
    const width = 680;
    const height = 240;
    const series = periodData.series;
    const yMax = periodData.yMax;
    const totalIn = periodData.income || 1;

    if (type === 'donut' || type === 'pie') {
      const items = [
        { label: 'Mano de Obra MRO', val: periodData.mroLabor, color: '#2563eb' },
        { label: 'Repuestos & Aviónica', val: periodData.partsPurchases, color: '#0284c7' },
        { label: 'Gastos Hangar & Seguros', val: periodData.hangarExpenses, color: '#64748b' },
        { label: 'Margen Neto Disponible', val: periodData.balance, color: '#10b981' }
      ];

      items.forEach(it => {
        it.pct = Math.max(0, (it.val / totalIn) * 100);
      });

      let currentAngle = 0;
      const slicesSvg = items.map(it => {
        const sweep = (it.val / totalIn) * 360;
        const path = type === 'donut'
          ? describeDonutSlice(190, 120, 102, 60, currentAngle, currentAngle + sweep)
          : describePieSlice(190, 120, 102, currentAngle, currentAngle + sweep);
        currentAngle += sweep;

        const tipVal = unit === 'percent'
          ? it.pct.toFixed(1) + '% · ' + this.formatCurrency(it.val)
          : this.formatCurrency(it.val) + ' (' + it.pct.toFixed(1) + '%)';

        return `
          <path d="${path}" fill="${it.color}" stroke="var(--bg-card)" stroke-width="2"
            onmousemove="showChartTooltip(event, '${it.label}', '${tipVal}')"
            onmouseleave="hideChartTooltip()" style="cursor:pointer; transition:opacity 0.2s;" />
        `;
      }).join('');

      return `
        <div class="chart-content-wrapper" style="display:flex; justify-content:space-between; align-items:center; width:100%; min-height:240px; gap:16px;">
          <div style="flex: 1 1 240px; display:flex; justify-content:center; align-items:center;">
            <svg viewBox="0 0 380 240" style="width:100%; max-width:320px; height:240px; overflow:visible;">
              ${slicesSvg}
              ${type === 'donut' ? `
                <text x="190" y="112" font-size="11" font-weight="800" fill="var(--text-secondary)" text-anchor="middle">
                  ${unit === 'percent' ? 'Rentabilidad' : 'Facturación'}
                </text>
                <text x="190" y="136" font-size="19" font-weight="900" fill="${unit === 'percent' ? '#10b981' : '#2563eb'}" text-anchor="middle" font-family="var(--font-mono)">
                  ${unit === 'percent' ? periodData.profitability : (periodData.income >= 1000000 ? '$ ' + (periodData.income/1000000).toFixed(1) + 'M' : this.formatCurrency(periodData.income))}
                </text>
              ` : ''}
            </svg>
          </div>
          <div style="flex: 1.3 1 260px; display:flex; flex-direction:column; gap:8px; padding-right:8px;">
            <span style="font-size:11px; font-weight:800; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:2px;">
              Distribución de ${periodData.label}
            </span>
            ${items.map(it => `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 12px; background:var(--bg-app); border:1px solid var(--border-color); border-radius:6px;"
                onmousemove="showChartTooltip(event, '${it.label}', '${this.formatCurrency(it.val)} (${it.pct.toFixed(1)}%)')"
                onmouseleave="hideChartTooltip()">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="width:10px; height:10px; border-radius:3px; background:${it.color}; flex-shrink:0;"></span>
                  <span style="font-size:12px; font-weight:700; color:var(--text-primary);">${it.label}</span>
                </div>
                <div style="text-align:right;">
                  <span style="font-size:12.5px; font-weight:900; font-family:var(--font-mono); color:${it.color === '#10b981' ? '#059669' : 'var(--text-primary)'};">
                    ${unit === 'percent' ? it.pct.toFixed(1) + '%' : this.formatCurrency(it.val)}
                  </span>
                  ${unit === 'percent' ? `<span style="display:block; font-size:10px; color:var(--text-secondary); font-family:var(--font-mono);">${this.formatCurrency(it.val)}</span>` : `<span style="display:block; font-size:10px; color:var(--text-secondary);">${it.pct.toFixed(1)}%</span>`}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Lines, Area, Bars
    const paddingLeft = 58;
    const paddingBottom = 32;
    const chartW = width - paddingLeft - 24;
    const chartH = height - paddingBottom - 20;
    const step = chartW / series.length;

    let svgInner = '';

    // Y Axis Grid lines
    for (let i = 0; i <= 4; i++) {
      const y = chartH - (chartH / 4) * i + 10;
      let labelStr = '';
      if (unit === 'percent') {
        labelStr = (i * 25) + '%';
      } else {
        const val = Math.round((yMax / 4) * i);
        labelStr = '$' + (val >= 1000000 ? (val / 1000000).toFixed(1) + 'M' : (val / 1000) + 'k');
      }
      svgInner += `
        <line x1="${paddingLeft}" y1="${y}" x2="${width - 12}" y2="${y}" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="3,3" />
        <text x="${paddingLeft - 8}" y="${y + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">${labelStr}</text>
      `;
    }

    if (type === 'bars') {
      const barWidth = Math.min(step * 0.26, 22);
      series.forEach((pt, idx) => {
        const xCenter = paddingLeft + step * idx + step / 2;
        const hIn = (pt.in / yMax) * chartH;
        const hOut = (pt.out / yMax) * chartH;
        const hNet = Math.max(0, ((pt.in - pt.out) / yMax) * chartH);

        const yIn = chartH - hIn + 10;
        const yOut = chartH - hOut + 10;
        const yNet = chartH - hNet + 10;

        const tipIn = this.formatCurrency(pt.in);
        const tipOut = this.formatCurrency(pt.out);
        const tipNet = this.formatCurrency(pt.in - pt.out);

        svgInner += `
          <rect x="${xCenter - barWidth * 1.5}" y="${yIn}" width="${barWidth}" height="${hIn}" fill="#2563eb" rx="2"
            onmousemove="showChartTooltip(event, '${pt.label} · Facturado', '${tipIn}')" onmouseleave="hideChartTooltip()" />
          <rect x="${xCenter - barWidth * 0.4}" y="${yOut}" width="${barWidth}" height="${hOut}" fill="#475569" rx="2"
            onmousemove="showChartTooltip(event, '${pt.label} · Egresos', '${tipOut}')" onmouseleave="hideChartTooltip()" />
          <rect x="${xCenter + barWidth * 0.7}" y="${yNet}" width="${barWidth}" height="${hNet}" fill="#10b981" rx="2"
            onmousemove="showChartTooltip(event, '${pt.label} · Balance Neto', '${tipNet}')" onmouseleave="hideChartTooltip()" />
          <text x="${xCenter}" y="${height - 8}" font-size="11" font-weight="700" fill="var(--text-secondary)" text-anchor="middle">${pt.label}</text>
        `;
      });
    } else {
      // Lines or Area
      const ptsIn = [];
      const ptsOut = [];
      const ptsNet = [];

      series.forEach((pt, idx) => {
        const x = paddingLeft + step * idx + step / 2;
        const yIn = chartH - (pt.in / yMax) * chartH + 10;
        const yOut = chartH - (pt.out / yMax) * chartH + 10;
        const netVal = Math.max(0, pt.in - pt.out);
        const yNet = chartH - (netVal / yMax) * chartH + 10;

        ptsIn.push(`${x},${yIn}`);
        ptsOut.push(`${x},${yOut}`);
        ptsNet.push(`${x},${yNet}`);

        svgInner += `
          <text x="${x}" y="${height - 8}" font-size="11" font-weight="700" fill="var(--text-secondary)" text-anchor="middle">${pt.label}</text>
        `;
      });

      if (type === 'area') {
        const firstX = paddingLeft + step * 0 + step / 2;
        const lastX = paddingLeft + step * (series.length - 1) + step / 2;
        const baseY = chartH + 10;

        svgInner += `
          <polygon points="${firstX},${baseY} ${ptsIn.join(' ')} ${lastX},${baseY}" fill="rgba(37, 99, 235, 0.18)" style="pointer-events:none;" />
          <polygon points="${firstX},${baseY} ${ptsOut.join(' ')} ${lastX},${baseY}" fill="rgba(71, 85, 105, 0.15)" style="pointer-events:none;" />
          <polygon points="${firstX},${baseY} ${ptsNet.join(' ')} ${lastX},${baseY}" fill="rgba(16, 185, 129, 0.2)" style="pointer-events:none;" />
        `;
      }

      // Vertical guide lines for interactive hover
      series.forEach((pt, idx) => {
        const x = paddingLeft + step * idx + step / 2;
        svgInner += `
          <line id="aero-guide-${idx}" x1="${x}" y1="10" x2="${x}" y2="${chartH + 10}" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" opacity="0" style="transition:opacity 0.2s; pointer-events:none;" />
        `;
      });

      svgInner += `
        <polyline points="${ptsIn.join(' ')}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="pointer-events:none;" />
        <polyline points="${ptsOut.join(' ')}" fill="none" stroke="#475569" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5,4" style="pointer-events:none;" />
        <polyline points="${ptsNet.join(' ')}" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="pointer-events:none;" />
      `;

      // Data Points
      series.forEach((pt, idx) => {
        const x = paddingLeft + step * idx + step / 2;
        const yIn = chartH - (pt.in / yMax) * chartH + 10;
        const yOut = chartH - (pt.out / yMax) * chartH + 10;
        const netVal = Math.max(0, pt.in - pt.out);
        const yNet = chartH - (netVal / yMax) * chartH + 10;

        svgInner += `
          <circle id="aero-dot-in-${idx}" cx="${x}" cy="${yIn}" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" style="transition:all 0.2s; pointer-events:none;" />
          <circle id="aero-dot-out-${idx}" cx="${x}" cy="${yOut}" r="4.5" fill="#475569" stroke="#ffffff" stroke-width="2" style="transition:all 0.2s; pointer-events:none;" />
          <circle id="aero-dot-net-${idx}" cx="${x}" cy="${yNet}" r="5" fill="#10b981" stroke="#ffffff" stroke-width="2" style="transition:all 0.2s; pointer-events:none;" />
        `;
      });

      // Full-height interactive column hover slices
      series.forEach((pt, idx) => {
        const x = paddingLeft + step * idx + step / 2;
        const netVal = Math.max(0, pt.in - pt.out);
        const netPct = pt.in > 0 ? ((netVal / pt.in) * 100).toFixed(1) : '0.0';
        const inStr = unit === 'percent' ? ((pt.in / totalIn) * 100).toFixed(1) + '%' : this.formatCurrency(pt.in);
        const outStr = unit === 'percent' ? ((pt.out / totalIn) * 100).toFixed(1) + '%' : this.formatCurrency(pt.out);
        const netStr = unit === 'percent' ? ((netVal / totalIn) * 100).toFixed(1) + '%' : this.formatCurrency(netVal);

        svgInner += `
          <rect x="${x - step / 2}" y="0" width="${step}" height="${height}" fill="transparent" style="cursor:crosshair; pointer-events:all;"
            onmouseenter="highlightAeroMonth(${idx})"
            onmousemove="showAeroMonthTooltip(event, '${pt.label}', '${inStr}', '${outStr}', '${netStr}', '${netPct}')"
            onmouseleave="unhighlightAeroMonth(${idx}); hideChartTooltip()" />
        `;
      });
    }

    return `
      <div class="chart-content-wrapper" style="width:100%; display:flex; flex-direction:column; overflow:hidden;">
        <div style="display:flex; justify-content:flex-end; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:10px; font-size:11px; font-weight:700; width:100%; padding:0 6px;">
          <span style="display:inline-flex; align-items:center; gap:6px; color:#2563eb; white-space:nowrap;">
            <span style="width:10px; height:10px; border-radius:50%; background:#2563eb; flex-shrink:0;"></span> Facturación Certificaciones
          </span>
          <span style="display:inline-flex; align-items:center; gap:6px; color:#475569; white-space:nowrap;">
            <span style="width:10px; height:10px; border-radius:50%; background:#475569; flex-shrink:0;"></span> Egresos MRO
          </span>
          <span style="display:inline-flex; align-items:center; gap:6px; color:#10b981; white-space:nowrap;">
            <span style="width:10px; height:10px; border-radius:50%; background:#10b981; flex-shrink:0;"></span> Margen Neto (${periodData.profitability})
          </span>
        </div>
        <div id="financialChartSvgWrap" style="width:100%; height:230px; position:relative; overflow:hidden;">
          <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:100%; display:block; overflow:hidden;">
            ${svgInner}
          </svg>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // GRÁFICO 2: ESTRUCTURA DE COSTOS & RENTABILIDAD POR LÍNEA DE SERVICIO
  // ========================================================================
  renderCostStructureWidget(periodData, type = 'donut', unit = 'percent') {
    const totalIn = periodData.income || 1;
    const lines = AERO_DB.serviceLinesFinancials.map(it => ({
      ...it,
      currentVal: Math.round(totalIn * (it.pct / 100))
    }));

    const fmtVal = (it) => {
      return unit === 'percent' ? it.pct + '%' : this.formatCurrency(it.currentVal);
    };

    if (type === 'donut') {
      let currentAngle = 0;
      const slicesSvg = lines.map(it => {
        const sweep = (it.pct / 100) * 360;
        const path = describeDonutSlice(140, 100, 80, 50, currentAngle, currentAngle + sweep);
        currentAngle += sweep;

        const tipVal = unit === 'percent'
          ? `${it.pct}% · ${this.formatCurrency(it.currentVal)} · Margen: ${it.margin}`
          : `${this.formatCurrency(it.currentVal)} (${it.pct}%) · Margen: ${it.margin}`;

        return `
          <path d="${path}" fill="${it.color}" stroke="var(--bg-card)" stroke-width="2"
            onmousemove="showChartTooltip(event, '${it.label}', '${tipVal}')"
            onmouseleave="hideChartTooltip()" style="cursor:pointer; transition:opacity 0.2s;" />
        `;
      }).join('');

      return `
        <div style="display:flex; flex-direction:column; align-items:center; width:100%; height:100%;">
          <div style="display:flex; justify-content:center; align-items:center; width:100%; min-height:190px;">
            <svg viewBox="0 0 280 200" style="width:100%; max-width:250px; height:190px; overflow:visible;">
              ${slicesSvg}
              <text x="140" y="94" font-size="10" font-weight="700" fill="var(--text-secondary)" text-anchor="middle">
                ${unit === 'percent' ? 'Margen Neto MRO' : 'Facturación'}
              </text>
              <text x="140" y="116" font-size="16" font-weight="900" fill="${unit === 'percent' ? '#10b981' : '#2563eb'}" text-anchor="middle" font-family="var(--font-mono)">
                ${unit === 'percent' ? periodData.profitability : (totalIn >= 1000000 ? '$ ' + (totalIn/1000000).toFixed(1) + 'M' : this.formatCurrency(totalIn))}
              </text>
            </svg>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; width:100%; margin-top:8px;">
            ${lines.map(it => `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:6px 10px; background:var(--bg-app); border-radius:6px; border:1px solid var(--border-color); cursor:pointer;"
                onmousemove="showChartTooltip(event, '${it.label}', '${this.formatCurrency(it.currentVal)} (${it.pct}%) · Margen: ${it.margin}')"
                onmouseleave="hideChartTooltip()">
                <div style="display:flex; align-items:center; gap:6px; min-width:0;">
                  <span style="width:8px; height:8px; border-radius:2px; background:${it.color}; flex-shrink:0;"></span>
                  <span style="font-size:11px; font-weight:700; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${it.label.split(' ')[0]}</span>
                </div>
                <span style="font-size:11px; font-weight:800; font-family:var(--font-mono); color:var(--text-primary);">${fmtVal(it)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (type === 'pie') {
      let currentAngle = 0;
      const slicesSvg = lines.map(it => {
        const sweep = (it.pct / 100) * 360;
        const path = describePieSlice(140, 100, 80, currentAngle, currentAngle + sweep);
        currentAngle += sweep;

        const tipVal = unit === 'percent'
          ? `${it.pct}% · ${this.formatCurrency(it.currentVal)} · Margen: ${it.margin}`
          : `${this.formatCurrency(it.currentVal)} (${it.pct}%) · Margen: ${it.margin}`;

        return `
          <path d="${path}" fill="${it.color}" stroke="var(--bg-card)" stroke-width="2"
            onmousemove="showChartTooltip(event, '${it.label}', '${tipVal}')"
            onmouseleave="hideChartTooltip()" style="cursor:pointer; transition:opacity 0.2s;" />
        `;
      }).join('');

      return `
        <div style="display:flex; flex-direction:column; align-items:center; width:100%; height:100%;">
          <div style="display:flex; justify-content:center; align-items:center; width:100%; min-height:190px;">
            <svg viewBox="0 0 280 200" style="width:100%; max-width:250px; height:190px; overflow:visible;">
              ${slicesSvg}
            </svg>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; width:100%; margin-top:8px;">
            ${lines.map(it => `
              <div style="display:flex; align-items:center; justify-content:space-between; padding:6px 10px; background:var(--bg-app); border-radius:6px; border:1px solid var(--border-color); cursor:pointer;"
                onmousemove="showChartTooltip(event, '${it.label}', '${this.formatCurrency(it.currentVal)} (${it.pct}%) · Margen: ${it.margin}')"
                onmouseleave="hideChartTooltip()">
                <div style="display:flex; align-items:center; gap:6px; min-width:0;">
                  <span style="width:8px; height:8px; border-radius:2px; background:${it.color}; flex-shrink:0;"></span>
                  <span style="font-size:11px; font-weight:700; color:var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${it.label.split(' ')[0]}</span>
                </div>
                <span style="font-size:11px; font-weight:800; font-family:var(--font-mono); color:var(--text-primary);">${fmtVal(it)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (type === 'breakdown') {
      return `
        <div style="display:flex; flex-direction:column; gap:10px; width:100%; padding:4px 0;">
          <!-- Multi-segment visual bar -->
          <div style="height:14px; display:flex; border-radius:6px; overflow:hidden; border:1px solid var(--border-color); margin-bottom:4px;">
            ${lines.map(it => `
              <div style="width:${it.pct}%; background:${it.color}; cursor:pointer;"
                onmousemove="showChartTooltip(event, '${it.label}', '${it.pct}% · ${this.formatCurrency(it.currentVal)} · Margen: ${it.margin}')"
                onmouseleave="hideChartTooltip()"></div>
            `).join('')}
          </div>
          <!-- Detailed Service Line Cards -->
          ${lines.map(it => `
            <div style="background:var(--bg-app); border:1px solid var(--border-color); border-left:4px solid ${it.color}; border-radius:8px; padding:9px 12px; cursor:pointer;"
              onmousemove="showChartTooltip(event, '${it.label}', '${this.formatCurrency(it.currentVal)} (${it.pct}%) · Margen Neto: ${it.margin}')"
              onmouseleave="hideChartTooltip()">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="width:9px; height:9px; border-radius:2px; background:${it.color}; flex-shrink:0;"></span>
                  <strong style="font-size:12px; color:var(--text-primary);">${it.label}</strong>
                </div>
                <span style="font-size:12px; font-weight:900; font-family:var(--font-mono); color:var(--text-primary);">${fmtVal(it)}</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px; font-size:11px; color:var(--text-secondary);">
                <span>Cuota de Facturación: <strong>${it.pct}%</strong></span>
                <span style="color:#059669; font-weight:700;">Margen Neto: ${it.margin}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (type === 'bars') {
      return `
        <div style="display:flex; flex-direction:column; gap:12px; width:100%; padding:8px 2px;">
          ${lines.map(it => `
            <div style="display:flex; flex-direction:column; gap:5px; cursor:pointer;"
              onmousemove="showChartTooltip(event, '${it.label}', '${this.formatCurrency(it.currentVal)} (${it.pct}%) · Margen: ${it.margin}')"
              onmouseleave="hideChartTooltip()">
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:11.5px;">
                <div style="display:flex; align-items:center; gap:6px;">
                  <span style="width:8px; height:8px; border-radius:2px; background:${it.color};"></span>
                  <span style="font-weight:700; color:var(--text-primary);">${it.label}</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-weight:800; font-family:var(--font-mono); color:var(--text-primary);">${fmtVal(it)}</span>
                  <span style="font-size:10.5px; color:#059669; font-weight:700;">(${it.margin})</span>
                </div>
              </div>
              <div style="height:8px; width:100%; background:var(--border-color); border-radius:4px; overflow:hidden;">
                <div style="height:100%; width:${it.pct}%; background:${it.color}; border-radius:4px; transition:width 0.3s ease;"></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    return '';
  },

  // ========================================================================
  // VIEW: FLOTA & AERONAVES
  // ========================================================================
  renderFlotaView() {
    const container = document.getElementById('mainViewContainer');
    let fleet = AERO_DB.aircraft;

    if (AERO_DB.state.searchQuery) {
      const q = AERO_DB.state.searchQuery;
      fleet = fleet.filter(a =>
        a.registration.toLowerCase().includes(q) ||
        a.makeModel.toLowerCase().includes(q) ||
        a.owner.toLowerCase().includes(q) ||
        a.sn.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Gestión de Flota & Aeronaves</h1>
          <p class="page-subtitle">Control técnico individual de células, motores, hélices, TBO, ciclos y trazabilidad de aeronavegabilidad continuada.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" onclick="document.getElementById('newAircraftModalBackdrop').classList.add('active')">+ Incorporar Aeronave</button>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Matrícula</th>
                <th>Modelo & Tipo</th>
                <th>Cliente / Operador</th>
                <th>Horas Célula (TTSN)</th>
                <th>Motor & Horas TBO</th>
                <th>Próxima Inspección</th>
                <th>Certificado CdeA</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${fleet.map(a => `
                <tr>
                  <td>
                    <strong style="font-family:var(--font-mono); font-size:14px; color:#2563eb;">${a.registration}</strong>
                    <div style="font-size:10px; color:var(--text-secondary);">S/N: ${a.sn}</div>
                  </td>
                  <td>
                    <strong>${a.makeModel}</strong>
                    <div style="font-size:11px; color:var(--text-secondary);">${a.typeLabel}</div>
                  </td>
                  <td>
                    <div style="font-weight:700;">${a.owner}</div>
                    <div style="font-size:10px; color:var(--text-secondary);">${a.contact}</div>
                  </td>
                  <td>
                    <strong style="font-family:var(--font-mono); font-size:13px;">${a.ttsn}h</strong>
                    <div style="font-size:10px; color:var(--text-secondary); font-family:var(--font-mono);">${a.cycles} ciclos</div>
                  </td>
                  <td>
                    <div style="font-size:11px; font-weight:700;">${a.engine.split('(')[0]}</div>
                    <div style="font-size:10px; color:var(--text-secondary); font-family:var(--font-mono);">${a.engineHours}h / ${a.engineTbo}h TBO</div>
                  </td>
                  <td>
                    <div style="font-size:11px; font-weight:800; color:var(--text-primary);">${a.nextCheckType}</div>
                    <div style="font-size:10.5px; font-family:var(--font-mono); font-weight:800; color:${a.hoursRemaining > 0 ? (a.hoursRemaining <= 30 ? 'var(--warning)' : 'var(--success)') : 'var(--danger)'};">
                      ${a.hoursRemaining > 0 ? a.hoursRemaining + 'h remanentes' : 'VENCIDO'}
                    </div>
                  </td>
                  <td>
                    <span style="font-family:var(--font-mono); font-size:12px; font-weight:700;">${a.cdaExpiry}</span>
                  </td>
                  <td>
                    <span class="badge ${a.status === 'service' ? 'badge-success' : (a.status === 'maintenance' ? 'badge-warning' : 'badge-danger')}">
                      ${a.status.toUpperCase() === 'SERVICE' ? 'EN SERVICIO' : (a.status.toUpperCase() === 'MAINTENANCE' ? 'EN HANGAR' : 'AOG')}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="App.openNewOtModal('${a.registration}')">Abrir OT</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: ÓRDENES DE TRABAJO (OT)
  // ========================================================================
  renderOrdenesView() {
    const container = document.getElementById('mainViewContainer');
    let orders = AERO_DB.workOrders;

    if (AERO_DB.state.activeServiceLine !== 'all') {
      orders = orders.filter(o => o.serviceLine === AERO_DB.state.activeServiceLine);
    }

    if (AERO_DB.state.searchQuery) {
      const q = AERO_DB.state.searchQuery;
      orders = orders.filter(o =>
        o.code.toLowerCase().includes(q) ||
        o.aircraftReg.toLowerCase().includes(q) ||
        o.title.toLowerCase().includes(q) ||
        o.client.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Órdenes de Trabajo (OT) · MRO Habilitado</h1>
          <p class="page-subtitle">Seguimiento de tareas (work cards), horas hombre técnicas, repuestos trazables con Form 8130 y firma de liberación al servicio.</p>
        </div>
        <div class="page-actions">
          <button class="btn btn-primary" onclick="App.openNewOtModal()">+ Abrir Nueva OT</button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap:18px;">
        ${orders.map(ot => {
          const badgeClass = ot.status === 'closed' ? 'badge-success' : (ot.status === 'review' ? 'badge-primary' : (ot.status === 'in_progress' ? 'badge-warning' : 'badge-danger'));
          
          return `
            <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                  <div style="display:flex; align-items:center; gap:8px;">
                    <strong style="font-size:15px; font-family:var(--font-mono); color:#2563eb;">${ot.code}</strong>
                    <span class="badge ${badgeClass}">${ot.statusLabel.toUpperCase()}</span>
                  </div>
                  <strong style="font-family:var(--font-mono); font-size:14px;">${ot.aircraftReg}</strong>
                </div>

                <h4 style="font-size:13.5px; font-weight:800; color:var(--text-primary); margin-bottom:4px; line-height:1.35;">${ot.title}</h4>
                <div style="font-size:11.5px; color:var(--text-secondary); margin-bottom:12px;">Operador: <strong>${ot.client}</strong></div>

                <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:8px; padding:10px 12px; margin-bottom:14px; font-size:11.5px;">
                  <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                    <span style="color:var(--text-secondary);">Responsable Técnico:</span>
                    <strong style="color:var(--text-primary);">${ot.technician} (${ot.techLic})</strong>
                  </div>
                  <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                    <span style="color:var(--text-secondary);">Inspector Certificador:</span>
                    <strong style="color:var(--text-primary);">${ot.inspector} (${ot.inspectorLic})</strong>
                  </div>
                  <div style="display:flex; justify-content:space-between;">
                    <span style="color:var(--text-secondary);">Horas Ejecutadas:</span>
                    <strong style="font-family:var(--font-mono); color:#2563eb;">${ot.hoursReal}h / ${ot.hoursEst}h plan</strong>
                  </div>
                </div>

                <!-- Tarjetas de Trabajo (Work Cards) -->
                <div style="margin-bottom:14px;">
                  <div style="font-size:10.5px; font-weight:800; color:var(--text-secondary); text-transform:uppercase; margin-bottom:6px;">
                    Tarjetas de Trabajo (${ot.workCards.length}):
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px;">
                    ${ot.workCards.map(wc => `
                      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-card); border:1px solid var(--border-color); border-radius:6px; padding:6px 10px; font-size:11px;">
                        <span style="font-weight:700; color:var(--text-primary); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:240px;">
                          <strong>${wc.code}:</strong> ${wc.desc}
                        </span>
                        <span class="badge ${wc.status === 'done' ? 'badge-success' : 'badge-primary'}" style="font-size:9.5px; padding:2px 6px;">
                          ${wc.status === 'done' ? 'OK' : 'PROC'}
                        </span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Bottom Footer -->
              <div style="border-top:1px solid var(--border-color); padding-top:12px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <span style="font-size:10px; color:var(--text-secondary); text-transform:uppercase; font-weight:700;">Facturación OT:</span>
                  <div style="font-size:15px; font-weight:900; font-family:var(--font-mono); color:#2563eb;">${this.formatCurrency(ot.totalQuote)}</div>
                </div>
                <div style="display:flex; gap:8px;">
                  <button class="btn btn-secondary btn-sm" onclick="App.openBudgetPrintModal('${ot.id}')">Cotización</button>
                  <button class="btn btn-primary btn-sm" onclick="App.openCrsModal('${ot.id}')">Certificado CRS</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  // ========================================================================
  // VIEW: AERONAVEGABILIDAD Y VENCIMIENTOS (CAMO)
  // ========================================================================
  renderAeronavegabilidadView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Aeronavegabilidad Continuada & Vencimientos (CAMO)</h1>
          <p class="page-subtitle">Matriz de monitoreo de inspecciones mandatarias, partes de vida límite (LLP), directivas AD/SB y calibraciones.</p>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: 2fr 1fr; gap:20px;">
        <div class="card">
          <h3 style="font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:14px;">Matriz de Control de Vencimientos de Flota</h3>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Aeronave / Matrícula</th>
                  <th>Ítem / Inspección</th>
                  <th>Límite / Vencimiento</th>
                  <th>Horas / Días Remanentes</th>
                  <th>Criticidad</th>
                </tr>
              </thead>
              <tbody>
                ${AERO_DB.camoExpirations.map(exp => `
                  <tr>
                    <td><strong style="font-family:var(--font-mono); color:#2563eb;">${exp.aircraft}</strong></td>
                    <td><strong>${exp.item}</strong></td>
                    <td><span style="font-family:var(--font-mono); font-weight:700;">${exp.limitDate}</span></td>
                    <td style="font-size:11.5px; color:var(--text-secondary);">${exp.remaining}</td>
                    <td>
                      <span class="badge ${exp.criticality === 'danger' ? 'badge-danger' : 'badge-warning'}">
                        ${exp.criticalityLabel}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <h3 style="font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:14px;">Directivas Mandatorias (AD/SB) Vigentes</h3>
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${AERO_DB.directives.map(d => `
              <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:8px; padding:12px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                  <strong style="font-size:12px; font-family:var(--font-mono); color:#2563eb;">${d.code}</strong>
                  <span class="badge badge-primary">${d.authority}</span>
                </div>
                <div style="font-size:11.5px; font-weight:800; color:var(--text-primary); margin-bottom:3px;">${d.title}</div>
                <div style="font-size:11px; color:var(--text-secondary); margin-bottom:6px;">Aeronaves: ${d.appliesTo}</div>
                <div style="font-size:10.5px; font-weight:800; color:${d.status === 'complied' ? 'var(--success)' : 'var(--danger)'};">
                  ${d.statusLabel.toUpperCase()}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: DIRECTIVAS Y BOLETINES (AD/SB)
  // ========================================================================
  renderDirectivasView() {
    this.renderAeronavegabilidadView();
  },

  // ========================================================================
  // VIEW: DOCUMENTACIÓN TÉCNICA & MANUALES / PLANOS
  // ========================================================================
  renderPlanosView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Documentación Técnica & Manuales de Mantenimiento</h1>
          <p class="page-subtitle">Biblioteca técnica digitalizada: Manuales de Mantenimiento (AMM), Catálogo Ilustrado de Partes (IPC), Boletines de Servicio y Memorias STC.</p>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Código de Manual</th>
                <th>Aeronave / Planta de Poder</th>
                <th>Título del Documento</th>
                <th>Fabricante</th>
                <th>Revisión Vigente</th>
                <th>Estado de Cumplimiento</th>
                <th>Acceso</th>
              </tr>
            </thead>
            <tbody>
              ${AERO_DB.manuals.map(m => `
                <tr>
                  <td><strong style="font-family:var(--font-mono); color:#2563eb;">${m.code}</strong></td>
                  <td><strong>${m.model}</strong></td>
                  <td>${m.title}</td>
                  <td>${m.manufacturer}</td>
                  <td><span class="badge badge-primary" style="font-family:var(--font-mono);">${m.currentRev}</span></td>
                  <td><span class="badge badge-success">${m.statusLabel}</span></td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="App.showToast('Abriendo visor técnico digital: ' + '${m.code}')">Consultar Manual</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: CRM & CLIENTES / OPERADORES
  // ========================================================================
  renderCrmView() {
    const container = document.getElementById('mainViewContainer');
    let clients = AERO_DB.crmClients;

    if (AERO_DB.state.searchQuery) {
      const q = AERO_DB.state.searchQuery;
      clients = clients.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.base.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">CRM & Clientes / Operadores Aéreos</h1>
          <p class="page-subtitle">Gestión comercial y técnica de escuelas de vuelo, operadores corporativos, taxis aéreos y aeroclubes.</p>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Operador / Razón Social</th>
                <th>Categoría / Tipo</th>
                <th>Departamento de Contacto</th>
                <th>Base Operativa</th>
                <th>Flota Asignada</th>
                <th>Facturación Acumulada</th>
                <th>Estado Operativo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${clients.map(c => `
                <tr>
                  <td><strong style="font-size:13.5px; color:var(--text-primary);">${c.name}</strong></td>
                  <td><span class="badge badge-secondary">${c.category}</span></td>
                  <td>
                    <div style="font-weight:700;">${c.contactDept}</div>
                    <div style="font-size:11px; color:var(--text-secondary);">${c.phone} · ${c.email}</div>
                  </td>
                  <td>${c.base}</td>
                  <td><strong style="font-family:var(--font-mono); color:#2563eb;">${c.fleetCount} Aeronaves</strong></td>
                  <td><strong style="font-family:var(--font-mono); color:#059669;">${this.formatCurrency(c.billedTotal)}</strong></td>
                  <td><span class="badge badge-success">${c.status}</span></td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="App.showToast('Ficha de comitente: ' + '${c.name}')">Ver Ficha</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: AGENDA & HANGAR SLOTS
  // ========================================================================
  renderAgendaView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Agenda & Ocupación de Hangar (SADF - San Fernando)</h1>
          <p class="page-subtitle">Monitoreo de posiciones de hangar (slots), capacidad técnica instalada, fechas estimadas de desocupación y turnos de inspección.</p>
        </div>
      </div>

      <!-- Hangar Slots Grid -->
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:18px;">
        ${AERO_DB.hangarSlots.map(slot => {
          const isOcc = slot.status === 'occupied';
          return `
            <div class="card" style="border-top:4px solid ${isOcc ? '#2563eb' : 'var(--success)'};">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span class="badge ${isOcc ? 'badge-primary' : 'badge-success'}">${slot.slotId}</span>
                <span class="badge ${isOcc ? 'badge-warning' : 'badge-success'}">${isOcc ? 'OCUPADO' : 'DISPONIBLE'}</span>
              </div>
              <h3 style="font-size:14px; font-weight:800; color:var(--text-primary); margin-bottom:4px;">${slot.name}</h3>
              <div style="font-size:13px; font-weight:800; font-family:var(--font-mono); color:#2563eb; margin-bottom:2px;">${slot.aircraftReg}</div>
              <div style="font-size:12px; font-weight:700; color:var(--text-secondary); margin-bottom:12px;">${slot.aircraftModel}</div>

              <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:8px; padding:10px 12px; font-size:11.5px; margin-bottom:12px;">
                <div style="margin-bottom:4px;"><strong>Tarea:</strong> ${slot.task}</div>
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                  <span>Ingreso: <strong>${slot.entryDate}</strong></span>
                  <span>Liberación: <strong>${slot.estimatedExit}</strong></span>
                </div>
                <div style="display:flex; justify-content:space-between;">
                  <span>Responsable:</span>
                  <strong>${slot.technician}</strong>
                </div>
              </div>

              ${isOcc ? `
                <div>
                  <div style="display:flex; justify-content:space-between; font-size:10.5px; font-weight:800; color:var(--text-secondary); margin-bottom:4px;">
                    <span>Avance de Orden de Trabajo</span>
                    <span style="font-family:var(--font-mono);">${slot.progress}%</span>
                  </div>
                  <div class="meter-bar-wrap">
                    <div class="meter-bar-fill" style="width:${slot.progress}%; background:#2563eb;"></div>
                  </div>
                </div>
              ` : `
                <button class="btn btn-primary btn-sm" style="width:100%; justify-content:center;" onclick="App.openNewOtModal()">Asignar Nueva Aeronave a Bahía</button>
              `}
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  // ========================================================================
  // VIEW: HERRAMIENTAS & CALIBRACIONES
  // ========================================================================
  renderHerramientasView() {
    const container = document.getElementById('mainViewContainer');
    let tools = AERO_DB.tools;

    if (AERO_DB.state.searchQuery) {
      const q = AERO_DB.state.searchQuery;
      tools = tools.filter(t =>
        t.code.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q) ||
        t.sn.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Herramientas Especiales & Calibraciones Metrológicas</h1>
          <p class="page-subtitle">Control de trazabilidad de instrumentos de torque, bancos pitot-estática y multímetros con certificación INTI y bloqueo de seguridad operacional.</p>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Código / P/N</th>
                <th>Descripción del Instrumento</th>
                <th>N° de Serie</th>
                <th>Laboratorio Certificador</th>
                <th>N° Certificado</th>
                <th>Última Calibración</th>
                <th>Próximo Vencimiento</th>
                <th>Estado</th>
                <th>Custodia</th>
              </tr>
            </thead>
            <tbody>
              ${tools.map(t => `
                <tr style="${t.lockedForWork ? 'background:rgba(239,68,68,0.06);' : ''}">
                  <td><strong style="font-family:var(--font-mono); color:#2563eb;">${t.code}</strong></td>
                  <td>
                    <strong>${t.desc}</strong>
                    ${t.lockedForWork ? '<div style="font-size:10px; color:var(--danger); font-weight:800; text-transform:uppercase;">Inhabilitado para firmas técnicas</div>' : ''}
                  </td>
                  <td><span style="font-family:var(--font-mono);">${t.sn}</span></td>
                  <td>${t.lab}</td>
                  <td><span style="font-family:var(--font-mono); font-size:11px;">${t.certNumber}</span></td>
                  <td>${t.lastCalDate}</td>
                  <td><strong style="font-family:var(--font-mono); color:${t.status === 'expired' ? 'var(--danger)' : (t.status === 'warning' ? 'var(--warning)' : 'inherit')};">${t.expiryDate}</strong></td>
                  <td>
                    <span class="badge ${t.status === 'valid' ? 'badge-success' : (t.status === 'warning' ? 'badge-warning' : 'badge-danger')}">
                      ${t.statusLabel}
                    </span>
                  </td>
                  <td><strong>${t.custody}</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: FINANZAS & FACTURACIÓN
  // ========================================================================
  renderFinanzasView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Finanzas, Facturación & Cobranzas MRO</h1>
          <p class="page-subtitle">Emisión de comprobantes por orden de trabajo, seguimiento de pagos de operadores y flujo financiero de taller.</p>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Comprobante</th>
                <th>Operador / Cliente</th>
                <th>OT Vinculada</th>
                <th>Concepto Técnico Aeronáutico</th>
                <th>Fecha Emisión</th>
                <th>Vencimiento</th>
                <th>Monto Total (c/IVA)</th>
                <th>Estado de Pago</th>
              </tr>
            </thead>
            <tbody>
              ${AERO_DB.invoices.map(inv => `
                <tr>
                  <td><strong style="font-family:var(--font-mono); color:#2563eb;">${inv.number}</strong></td>
                  <td><strong>${inv.client}</strong></td>
                  <td><span class="badge badge-primary">${inv.otCode}</span></td>
                  <td>${inv.concept}</td>
                  <td>${inv.date}</td>
                  <td><span style="font-family:var(--font-mono);">${inv.dueDate}</span></td>
                  <td><strong style="font-family:var(--font-mono); font-size:13.5px; color:#2563eb;">${this.formatCurrency(inv.totalAmount)}</strong></td>
                  <td>
                    <span class="badge ${inv.status === 'paid' ? 'badge-success' : 'badge-warning'}">${inv.statusLabel}</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: PRESUPUESTOS Y COTIZACIONES
  // ========================================================================
  renderPresupuestosView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Presupuestos & Cotizaciones Aeronáuticas</h1>
          <p class="page-subtitle">Emisión de cotizaciones formales con cómputo de horas-hombre técnico, repuestos certificados y membrete oficial.</p>
        </div>
      </div>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:18px;">
        ${AERO_DB.workOrders.map(o => `
          <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge badge-primary">${o.code}</span>
              <strong style="font-family:var(--font-mono); font-size:14px;">${o.aircraftReg}</strong>
            </div>
            <h4 style="font-size:13px; font-weight:800; color:var(--text-primary); margin-bottom:4px;">${o.title}</h4>
            <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">Comitente: ${o.client}</p>
            <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:8px; padding:10px; margin-bottom:12px; font-size:11px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span>Mano de obra (${o.hoursEst} HH):</span>
                <strong style="font-family:var(--font-mono);">${this.formatCurrency(o.laborCost)}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span>Repuestos & Consumibles:</span>
                <strong style="font-family:var(--font-mono);">${this.formatCurrency(o.partsCost)}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-top:1px solid var(--border-color); padding-top:4px;">
                <span style="font-weight:800;">Total Cotizado:</span>
                <strong style="font-family:var(--font-mono); color:#2563eb; font-size:13px;">${this.formatCurrency(o.totalQuote)}</strong>
              </div>
            </div>
            <button class="btn btn-primary btn-sm" style="width:100%; justify-content:center;" onclick="App.openBudgetPrintModal('${o.id}')">
              Ver Presupuesto con Membrete Oficial
            </button>
          </div>
        `).join('')}
      </div>
    `;
  },

  // ========================================================================
  // VIEW: PERSONAL TÉCNICO Y LICENCIAS (SOLO UN USUARIO: INGENIERO)
  // ========================================================================
  renderPersonalView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Personal Técnico & Licencias Aeronáuticas</h1>
          <p class="page-subtitle">Responsable Técnico Habilitado y control de licencias reglamentarias ante la Autoridad Aeronáutica (ANAC).</p>
        </div>
      </div>

      <div class="card" style="max-width:720px;">
        <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:16px;">
          <div style="width:58px; height:58px; border-radius:12px; background:#2563eb; color:#ffffff; font-size:22px; font-weight:900; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono);">
            ING
          </div>
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary); margin-bottom:2px;">Ingeniero</h2>
            <div style="font-size:13px; color:#2563eb; font-weight:700;">Director Técnico & Inspector Certificador Habilitado</div>
            <div style="font-size:11.5px; color:var(--text-secondary);">Habilitación TAR N° 1B-412 · RAAC Parte 145 / RAAC Parte 43</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; font-size:12px; margin-bottom:20px;">
          <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:8px; padding:12px;">
            <div style="color:var(--text-secondary); font-size:10.5px; text-transform:uppercase; font-weight:700; margin-bottom:4px;">Certificado Médico Aeronáutico (CMA)</div>
            <div style="font-weight:800; color:var(--text-primary);">Clase 1 / 2 Vigente</div>
            <div style="color:var(--text-secondary); font-size:11px;">Vencimiento: 15/04/2027 (INMAE)</div>
          </div>
          <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:8px; padding:12px;">
            <div style="color:var(--text-secondary); font-size:10.5px; text-transform:uppercase; font-weight:700; margin-bottom:4px;">Hangar de Operaciones</div>
            <div style="font-weight:800; color:var(--text-primary);">Hangar Central 4 · SADF</div>
            <div style="color:var(--text-secondary); font-size:11px;">Aeropuerto Internacional de San Fernando</div>
          </div>
        </div>

        <h4 style="font-size:13px; font-weight:800; color:var(--text-primary); margin-bottom:8px;">Habilitaciones de Tipo Activas:</h4>
        <ul style="padding-left:18px; font-size:12px; color:var(--text-secondary); line-height:1.7;">
          <li>Aeronaves Monomotores y Bimotores a Pistón hasta 5.700 kg (Célula y Motores)</li>
          <li>Aeronaves Turbohélices Ejecutivas (Beechcraft King Air Series / Cessna Caravan)</li>
          <li>Ensayos No Destructivos (NDT) Nivel II: Tintas Penetrantes & Corrientes de Foucault</li>
          <li>Sistemas de Presurización, Calibración Pitot-Estática y Aprobación RVSM</li>
        </ul>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: ALMACÉN & TRAZABILIDAD FORM 8130
  // ========================================================================
  renderAlmacenView() {
    const container = document.getElementById('mainViewContainer');
    let parts = AERO_DB.partsStock;

    if (AERO_DB.state.searchQuery) {
      const q = AERO_DB.state.searchQuery;
      parts = parts.filter(p =>
        p.partNumber.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.form8130.toLowerCase().includes(q)
      );
    }

    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Almacén Aeronáutico & Trazabilidad Form 8130-3</h1>
          <p class="page-subtitle">Inventario físico de repuestos, componentes rotables, fluidos y kits con certificación de aeronavegabilidad trazable.</p>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Part Number (P/N)</th>
                <th>Descripción del Componente</th>
                <th>Condición</th>
                <th>Certificación Form 8130-3 / EASA</th>
                <th>Ubicación Estantería</th>
                <th>Stock Disponible</th>
                <th>Valor Unitario</th>
                <th>Vencimiento Shelf-Life</th>
              </tr>
            </thead>
            <tbody>
              ${parts.map(p => `
                <tr>
                  <td><strong style="font-family:var(--font-mono); color:#2563eb;">${p.partNumber}</strong></td>
                  <td><strong>${p.desc}</strong></td>
                  <td><span class="badge badge-secondary">${p.condition}</span></td>
                  <td><span class="badge badge-primary" style="font-family:var(--font-mono);">${p.form8130}</span></td>
                  <td>${p.location}</td>
                  <td><strong style="font-family:var(--font-mono); color:${p.qty <= p.minQty ? 'var(--danger)' : 'inherit'};">${p.qty} un.</strong></td>
                  <td><span style="font-family:var(--font-mono);">${this.formatCurrency(p.unitPrice)}</span></td>
                  <td><span style="font-family:var(--font-mono);">${p.shelfLife}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: CALIDAD & AUDITORÍAS SMS
  // ========================================================================
  renderCalidadView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Aseguramiento de Calidad & Auditorías SMS</h1>
          <p class="page-subtitle">Vigilancia de la Autoridad Aeronáutica (ANAC), auditorías de calidad interna y seguimiento de acciones correctivas (CAPA).</p>
        </div>
      </div>

      <div class="card">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Auditoría / Evaluación</th>
                <th>Ente Auditor</th>
                <th>Fecha de Realización</th>
                <th>Resultado Reglamentario</th>
                <th>Hallazgos Abiertos</th>
                <th>Responsable</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${AERO_DB.audits.map(a => `
                <tr>
                  <td><strong>${a.title}</strong></td>
                  <td>${a.authority}</td>
                  <td><span style="font-family:var(--font-mono);">${a.date}</span></td>
                  <td><strong style="color:#059669;">${a.result}</strong></td>
                  <td><strong style="font-family:var(--font-mono);">${a.findingsCount}</strong></td>
                  <td>${a.responsible}</td>
                  <td><span class="badge badge-success">CONFORME</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: REPORTES & RENTABILIDAD
  // ========================================================================
  renderReportesView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Reportes Operativos & Rentabilidad MRO</h1>
          <p class="page-subtitle">Informes consolidados de rendimiento por línea de servicio, productividad de horas y rentabilidad por aeronave.</p>
        </div>
      </div>

      <div class="card">
        <h3 style="font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:14px;">Rentabilidad Consolidada por Línea de Negocio</h3>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Línea de Servicio</th>
                <th>Facturación</th>
                <th>Participación %</th>
                <th>Margen Operativo Bruto</th>
                <th>Horas-Hombre Insumidas</th>
                <th>Rentabilidad Neta</th>
              </tr>
            </thead>
            <tbody>
              ${AERO_DB.serviceLinesFinancials.map(line => `
                <tr>
                  <td><strong>${line.label}</strong></td>
                  <td><strong style="font-family:var(--font-mono); color:#2563eb;">${this.formatCurrency(line.val)}</strong></td>
                  <td><span style="font-family:var(--font-mono);">${line.pct}%</span></td>
                  <td><span class="badge badge-success">${line.margin}</span></td>
                  <td><span style="font-family:var(--font-mono);">${Math.round(line.val / 38000)} HH</span></td>
                  <td><strong style="color:#059669; font-family:var(--font-mono);">${(parseFloat(line.margin) * 0.85).toFixed(1)}%</strong></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: CONFIGURACIÓN & PARÁMETROS
  // ========================================================================
  renderConfiguracionView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div>
          <h1 class="page-title">Configuración del Sistema & Parámetros MRO</h1>
          <p class="page-subtitle">Datos de la organización de mantenimiento aprobada, habilitaciones ANAC y tarifas de mano de obra técnica.</p>
        </div>
      </div>

      <div class="card" style="max-width:760px;">
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Razón Social del Taller</label>
            <input type="text" class="form-control" value="AEROTEC MRO & INGENIERÍA AERONÁUTICA" readonly>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Habilitación ANAC</label>
            <input type="text" class="form-control" value="TAR N° 1B-412 (RAAC Parte 145 / RAAC 43)" readonly>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Base Principal de Operaciones</label>
            <input type="text" class="form-control" value="Hangar Central 4 · SADF (San Fernando, Buenos Aires)" readonly>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Tarifa Estándar Mano de Obra (HH)</label>
            <input type="text" class="form-control" value="$ 30.000 / Hora-Hombre" readonly>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Responsable Técnico Habilitado</label>
          <input type="text" class="form-control" value="Ingeniero (TAR N° 1B-412)" readonly>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // MODAL HANDLERS
  // ========================================================================
  openNewOtModal(preselectReg = null) {
    const select = document.getElementById('newOtAircraft');
    if (select) {
      select.innerHTML = AERO_DB.aircraft.map(a =>
        `<option value="${a.registration}" ${preselectReg === a.registration ? 'selected' : ''}>${a.registration} · ${a.makeModel} (${a.owner})</option>`
      ).join('');
    }

    const techSelect = document.getElementById('newOtTech');
    if (techSelect) {
      techSelect.innerHTML = `
        <option value="Ingeniero (Habilitación TAR N° 1B-412)">Ingeniero (Habilitación TAR N° 1B-412)</option>
      `;
    }

    document.getElementById('newOtModalBackdrop')?.classList.add('active');
  },

  handleNewOtSubmit(e) {
    e.preventDefault();
    const aircraftReg = document.getElementById('newOtAircraft').value;
    const title = document.getElementById('newOtTitle').value;
    const serviceLine = document.getElementById('newOtServiceLine').value;
    const hoursEst = Number(document.getElementById('newOtHours').value) || 20;
    const laborCost = Number(document.getElementById('newOtLaborCost').value) || 600000;
    const totalQuote = Number(document.getElementById('newOtTotalQuote').value) || 1200000;
    const desc = document.getElementById('newOtDescription').value;

    const aircraft = AERO_DB.aircraft.find(a => a.registration === aircraftReg);

    const newCode = 'OT-2026-0' + (85 + AERO_DB.workOrders.length);
    const newOt = {
      id: 'ot-' + Date.now(),
      code: newCode,
      aircraftReg: aircraftReg,
      aircraftModel: aircraft ? aircraft.makeModel : 'Aeronave General',
      client: aircraft ? aircraft.owner : 'Cliente Taller',
      serviceLine: serviceLine,
      serviceLineLabel: serviceLine === 'programado' ? 'Mantenimiento Programado' : (serviceLine === 'no_programado' ? 'Mantenimiento No Programado' : 'Ingeniería Aeronáutica'),
      type: title,
      title: title,
      status: 'in_progress',
      statusLabel: 'En Proceso en Hangar',
      technician: 'Ingeniero',
      techLic: 'TAR N° 1B-412',
      inspector: 'Ingeniero',
      inspectorLic: 'TAR N° 1B-412',
      hoursEst: hoursEst,
      hoursReal: 0,
      laborCost: laborCost,
      partsCost: 350000,
      thirdPartyCost: 0,
      totalQuote: totalQuote,
      createdAt: new Date().toISOString().split('T')[0],
      targetDate: '2026-09-30',
      ammReference: desc || 'Manual de Mantenimiento de Aeronave AMM',
      workCards: [
        { id: 'wc-gen-1', code: 'WC-01', desc: 'Inspección preliminar y recepción de célula en rampa', status: 'done', hours: 4, assigned: 'Ingeniero' },
        { id: 'wc-gen-2', code: 'WC-02', desc: 'Ejecución de tareas según manual AMM y tarjetas de trabajo', status: 'in_progress', hours: 16, assigned: 'Ingeniero' }
      ],
      partsConsumed: [],
      discrepancies: [],
      releaseCertReady: false
    };

    AERO_DB.workOrders.unshift(newOt);

    if (aircraft) {
      aircraft.status = 'maintenance';
      aircraft.statusLabel = 'En Hangar / Mantenimiento';
    }

    document.getElementById('newOtModalBackdrop')?.classList.remove('active');
    e.target.reset();

    this.showToast('Orden de Trabajo ' + newCode + ' creada con éxito para matrícula ' + aircraftReg);
    this.navigateTo('ordenes');
  },

  handleNewAircraftSubmit(e) {
    e.preventDefault();
    const reg = document.getElementById('newAirRegistration').value.toUpperCase().trim();
    const type = document.getElementById('newAirType').value;
    const model = document.getElementById('newAirModel').value;
    const sn = document.getElementById('newAirSn').value;
    const owner = document.getElementById('newAirOwner').value;
    const ttsn = Number(document.getElementById('newAirTtsn').value) || 1200;

    const newAir = {
      id: 'air-' + Date.now(),
      registration: reg,
      type: type,
      typeLabel: type === 'monomotor' ? 'Avión Monomotor Pistón' : (type === 'bimotor' ? 'Bimotor Pistón' : 'Turbohélice Ejecutivo'),
      makeModel: model,
      sn: sn,
      year: 2020,
      owner: owner,
      contact: 'Coordinación Operativa (+54 11 4000-8800)',
      ttsn: ttsn,
      cycles: Math.round(ttsn * 1.5),
      engine: 'Motor Habilitado',
      engineHours: ttsn,
      engineTbo: 2000,
      propeller: 'Hélice Certificada',
      lastCheckType: 'Inspección de Ingreso',
      lastCheckDate: new Date().toISOString().split('T')[0],
      nextCheckType: 'Inspección 50 Horas',
      nextCheckHours: ttsn + 50,
      hoursRemaining: 50,
      status: 'service',
      statusLabel: 'En Servicio / Aeronavegable',
      cdaExpiry: '2027-09-15',
      insuranceExpiry: '2027-09-15'
    };

    AERO_DB.aircraft.unshift(newAir);
    document.getElementById('newAircraftModalBackdrop')?.classList.remove('active');
    e.target.reset();

    this.showToast('Aeronave ' + reg + ' incorporada al sistema MRO & CAMO');
    this.navigateTo('flota');
  },

  // Modal: Certificado de Liberación al Servicio (CRS / Formulario Oficial)
  openCrsModal(otId) {
    const ot = AERO_DB.workOrders.find(o => o.id === otId) || AERO_DB.workOrders[0];
    const aircraft = AERO_DB.aircraft.find(a => a.registration === ot.aircraftReg) || AERO_DB.aircraft[0];

    const crsBody = document.getElementById('crsModalBody');
    if (!crsBody) return;

    crsBody.innerHTML = `
      <div class="crs-certificate-box" style="background:#ffffff; color:#0f172a; padding:24px; border:1px solid #cbd5e1; border-radius:10px; font-family:'Plus Jakarta Sans', sans-serif;">
        <!-- Header Oficial con Membrete Aeronáutico -->
        <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #0f172a; padding-bottom:14px; margin-bottom:18px;">
          <div style="display:flex; align-items:center; gap:14px;">
            <img src="assets/aero_logo.svg" alt="AEROTEC" style="width:48px; height:48px;">
            <div>
              <h2 style="font-size:16px; font-weight:900; letter-spacing:0.5px; margin:0; color:#091e42;">AEROTEC INGENIERÍA & MRO</h2>
              <p style="font-size:11px; font-weight:700; color:#475569; margin:2px 0 0;">TALLER AERONÁUTICO DE REPARACIÓN (TAR N° 1B-412 · ANAC / PARTE 145)</p>
            </div>
          </div>
          <div style="text-align:right; font-size:11px;">
            <div style="font-family:var(--font-mono); font-weight:800; color:#2563eb;">FORMULARIO OFICIAL CRS: ${ot.code.replace('OT', 'CRS')}</div>
            <div>FECHA DE EMISIÓN: ${new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
            <div>BASE / HANGAR: San Fernando (SADF)</div>
          </div>
        </div>

        <!-- Identificación de la Aeronave -->
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px 14px; margin-bottom:16px; font-size:11.5px;">
          <strong style="text-transform:uppercase; color:#0f172a; font-size:11px; display:block; margin-bottom:6px; letter-spacing:0.5px;">
            Datos de Identificación de la Aeronave:
          </strong>
          <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:8px;">
            <div>Matrícula: <strong style="color:#2563eb; font-family:var(--font-mono);">${aircraft.registration}</strong></div>
            <div>Fabricante & Modelo: <strong>${aircraft.makeModel}</strong></div>
            <div>N° de Serie: <strong style="font-family:var(--font-mono);">${aircraft.sn}</strong></div>
            <div>Horas Totales (TTSN): <strong style="font-family:var(--font-mono);">${aircraft.ttsn}h</strong></div>
          </div>
        </div>

        <!-- Declaración de Trabajo Realizado -->
        <div style="margin-bottom:16px;">
          <strong style="font-size:11.5px; color:#0f172a; text-transform:uppercase; display:block; margin-bottom:4px;">
            Declaración de Tareas Realizadas (Orden de Trabajo ${ot.code}):
          </strong>
          <p style="font-size:12px; color:#334155; line-height:1.5; margin:0 0 10px;">
            ${ot.title}
          </p>

          <!-- Repuestos Trazables Form 8130 -->
          ${ot.partsConsumed.length > 0 ? `
            <div style="border:1px solid #e2e8f0; border-radius:6px; overflow:hidden;">
              <table style="width:100%; border-collapse:collapse; font-size:11px; text-align:left;">
                <thead style="background:#f1f5f9; color:#334155;">
                  <tr>
                    <th style="padding:6px 10px;">Part Number (P/N)</th>
                    <th style="padding:6px 10px;">Descripción de Repuesto / Componente</th>
                    <th style="padding:6px 10px;">Certificación Form 8130-3 / EASA Form 1</th>
                  </tr>
                </thead>
                <tbody>
                  ${ot.partsConsumed.map(p => `
                    <tr style="border-top:1px solid #e2e8f0;">
                      <td style="padding:6px 10px; font-family:var(--font-mono); font-weight:700;">${p.partNumber}</td>
                      <td style="padding:6px 10px;">${p.desc}</td>
                      <td style="padding:6px 10px; color:#059669; font-weight:800; font-family:var(--font-mono);">${p.form8130}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : '<p style="font-size:11px; color:#64748b; font-style:italic;">No se registraron repuestos rotables consumidos en esta intervención.</p>'}
        </div>

        <!-- Declaración Legal de Conformidad -->
        <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:12px 14px; margin-bottom:20px; font-size:11px; color:#1e3a8a; line-height:1.45;">
          <strong>CERTIFICACIÓN DE CONFORMIDAD DE MANTENIMIENTO:</strong><br>
          "Certifico que el trabajo especificado anteriormente se llevó a cabo de conformidad con la reglamentación aeronáutica vigente (RAAC Parte 145 / 43 y manuales AMM del fabricante del producto) y que, respecto de dicho trabajo, la aeronave y sus componentes se consideran en condición aeronavegable y aprobados para su liberación al servicio."
        </div>

        <!-- Firmas: Solo Ingeniero -->
        <div style="display:flex; justify-content:space-between; align-items:flex-end; padding:10px 10px 0; border-top:1px solid #e2e8f0; font-size:11.5px;">
          <div>
            <div>Responsable Técnico: <strong>Ingeniero</strong></div>
            <div style="color:#64748b; font-size:10.5px;">Firma y Aprobación Técnica de Taller</div>
          </div>
          <div style="text-align:right;">
            <div>Inspector Certificador Autorizado:</div>
            <div style="font-weight:800; color:#0f172a;">Ingeniero</div>
            <div style="color:#64748b; font-size:10px;">Firma Electrónica Autorizada TAR N° 1B-412</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('crsModalBackdrop')?.classList.add('active');
  },

  // Modal: Presupuesto Oficial de Mantenimiento con Membrete
  openBudgetPrintModal(otId) {
    const ot = AERO_DB.workOrders.find(o => o.id === otId) || AERO_DB.workOrders[0];
    const aircraft = AERO_DB.aircraft.find(a => a.registration === ot.aircraftReg) || AERO_DB.aircraft[0];

    const body = document.getElementById('budgetPrintModalBody');
    if (!body) return;

    body.innerHTML = `
      <div style="background:#ffffff; color:#0f172a; padding:28px; border:1px solid #cbd5e1; border-radius:10px; font-family:'Plus Jakarta Sans', sans-serif;">
        <!-- Header Membrete -->
        <div style="display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid #0f172a; padding-bottom:14px; margin-bottom:18px;">
          <div style="display:flex; align-items:center; gap:14px;">
            <img src="assets/aero_logo.svg" alt="AEROTEC" style="width:48px; height:48px;">
            <div>
              <h2 style="font-size:16px; font-weight:900; color:#091e42; margin:0;">AEROTEC MRO & INGENIERÍA AERONÁUTICA</h2>
              <p style="font-size:11px; font-weight:600; color:#475569; margin:2px 0 0;">Cálculo Estructural · Habilitación TAR N° 1B-412 · Gestión CAMO de Aeronavegabilidad</p>
            </div>
          </div>
          <div style="text-align:right; font-size:11px;">
            <div style="font-family:var(--font-mono); font-weight:800; color:#2563eb;">COTIZACIÓN TÉCNICA N°: COT-2026-${ot.code.split('-')[2]}</div>
            <div>FECHA: ${new Date().toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
            <div>VIGENCIA: 30 días corridos</div>
          </div>
        </div>

        <!-- Comitente & Aeronave -->
        <div style="display:flex; justify-content:space-between; margin-bottom:18px; font-size:12px;">
          <div>
            <span style="color:#64748b; font-size:10.5px; text-transform:uppercase; font-weight:700;">Comitente / Operador Propietario:</span>
            <div style="font-size:14px; font-weight:800; color:#0f172a;">${ot.client}</div>
            <div style="color:#475569;">Aeronave: <strong style="color:#2563eb; font-family:var(--font-mono);">${aircraft.registration}</strong> (${aircraft.makeModel})</div>
          </div>
          <div style="text-align:right;">
            <span style="color:#64748b; font-size:10.5px; text-transform:uppercase; font-weight:700;">Línea de Servicio:</span>
            <div class="badge badge-primary" style="margin-top:2px;">${ot.serviceLineLabel.toUpperCase()}</div>
          </div>
        </div>

        <!-- Cómputo de Horas y Repuestos -->
        <h4 style="font-size:12px; font-weight:800; text-transform:uppercase; color:#0f172a; margin-bottom:8px;">Cómputo de Honorarios Técnicos & Repuestos Aeronáuticos:</h4>
        <table style="width:100%; border-collapse:collapse; font-size:11.5px; margin-bottom:18px;">
          <thead style="background:#f1f5f9; color:#334155; border-bottom:1px solid #cbd5e1;">
            <tr>
              <th style="padding:8px 10px; text-align:left;">Concepto / Tarea según AMM</th>
              <th style="padding:8px 10px; text-align:center;">Horas (HH) / Unid.</th>
              <th style="padding:8px 10px; text-align:right;">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:10px;">
                <strong>Mano de Obra Especialista / Ingeniero Habilitado</strong>
                <div style="font-size:10px; color:#64748b;">Inspección, desarmes, ensayos NDT y prueba en banco</div>
              </td>
              <td style="padding:10px; text-align:center; font-family:var(--font-mono);">${ot.hoursEst} HH</td>
              <td style="padding:10px; text-align:right; font-family:var(--font-mono); font-weight:700;">${this.formatCurrency(ot.laborCost)}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
              <td style="padding:10px;">
                <strong>Repuestos Aeronáuticos Certificados con Form 8130-3</strong>
                <div style="font-size:10px; color:#64748b;">Filtros, fluidos, juntas y componentes rotables</div>
              </td>
              <td style="padding:10px; text-align:center; font-family:var(--font-mono);">Lote</td>
              <td style="padding:10px; text-align:right; font-family:var(--font-mono); font-weight:700;">${this.formatCurrency(ot.partsCost)}</td>
            </tr>
          </tbody>
        </table>

        <!-- Total Presupuestado -->
        <div style="display:flex; justify-content:flex-end; margin-bottom:24px;">
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px 18px; text-align:right;">
            <span style="font-size:10.5px; color:#64748b; text-transform:uppercase; font-weight:700;">Total Presupuestado:</span>
            <div style="font-size:22px; font-weight:900; font-family:var(--font-mono); color:#2563eb;">${this.formatCurrency(ot.totalQuote)}</div>
          </div>
        </div>

        <!-- Footer Membrete: Solo Ingeniero -->
        <div style="display:flex; justify-content:space-between; align-items:flex-end; border-top:1px solid #cbd5e1; padding-top:12px; font-size:10.5px; color:#64748b;">
          <div>
            <p><strong>AEROTEC MRO:</strong> Hangar Central 4, Aeropuerto de San Fernando (SADF)</p>
            <p>Email: operaciones@aerotec-mro.com.ar · Tel: +54 11 4714-8800</p>
          </div>
          <div style="text-align:right;">
            <p>Dirección Técnica MRO</p>
            <p><strong>Ingeniero (TAR N° 1B-412)</strong></p>
          </div>
        </div>
      </div>
    `;

    document.getElementById('budgetPrintModalBackdrop')?.classList.add('active');
  }
};

window.App = App;
window.AERO_DB = AERO_DB;

// Start application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

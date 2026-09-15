/**
 * DP INGENIERÍA & ARQUITECTURA - CORE ERP APPLICATION ENGINE (v3.5 COMPLETE)
 * Sistema Integral de Gestión de Obras Civiles, Proyectos Arquitectónicos,
 * Cálculo Estructural CIRSOC, Contratos & Subcontratos de Gremios.
 */

// ==========================================================================
// 1. RELATIONAL DATABASE & SEED DATA
// ==========================================================================
const DP_DB = {
  state: {
    activeView: 'dashboard',
    activeRubro: 'all', // 'all' | 'ingenieria' | 'arquitectura'
    activeContractsTab: 'principales', // 'principales' | 'subcontratos'
    obrasViewMode: 'grid', // 'grid' | 'table'
    currentTimeFilter: 'month', // 'day' | 'week' | 'month' | 'year'
    financialChartType: 'bars', // 'bars' | 'lines' | 'area'
    currentRole: 'admin',
    searchQuery: ''
  },

  currentUser: {
    name: 'Ing. Daniel Peralta',
    role: 'admin',
    roleLabel: 'Director / Socio Gerente',
    email: 'd.peralta@dp-ingenieria-arquitectura.com',
    phone: '+54 11 4982-3344',
    office: 'Estudio Central DP · Buenos Aires'
  },

  // ========================================================================
  // OBRAS & PROYECTOS (BALANCEADOS: INGENIERÍA CIVIL & ARQUITECTURA)
  // ========================================================================
  projects: [
    {
      id: 'proj-001',
      code: 'OBRA-DP-01',
      title: 'Torre Residencial Altos del Parque',
      rubro: 'arquitectura',
      rubroLabel: 'Arquitectura & Dirección',
      client: 'Fideicomiso Altos del Parque',
      location: 'Av. del Libertador 3200, CABA',
      description: 'Torre de 14 pisos de viviendas de alta gama, 48 departamentos, amenidades y 2 subsuelos de cocheras.',
      status: 'in_progress',
      statusLabel: 'En Ejecución',
      progress: 68,
      targetProgress: 65,
      totalBudget: 185000000,
      certifiedAmount: 125800000,
      spentAmount: 114200000,
      director: 'Arq. Luciana Benítez',
      structuralEngineer: 'Ing. Daniel Peralta',
      startDate: '2025-11-01',
      endDate: '2026-12-15',
      stages: [
        { name: 'Anteproyecto & Permiso Municipal DGIUR', progress: 100, status: 'completed' },
        { name: 'Cálculo Estructural CIRSOC 103/201', progress: 100, status: 'completed' },
        { name: 'Fundaciones, Muros Colados & Subsuelos', progress: 100, status: 'completed' },
        { name: 'Estructura H°A° Pisos 1 al 14', progress: 90, status: 'in_progress' },
        { name: 'Instalaciones Termomecánicas & Cerramientos DVH', progress: 45, status: 'in_progress' },
        { name: 'Terminaciones, Pintura & Entrega Final', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Permiso de Obra Nueva DGIUR CABA', status: 'approved', date: '2025-10-15' },
        { name: 'Plano de Estructura Visado CPIC', status: 'approved', date: '2025-11-02' },
        { name: 'Factibilidad de Conexión Edenor / Aysa', status: 'approved', date: '2025-12-05' },
        { name: 'Póliza de Seguro de Obra y ART al día', status: 'approved', date: '2026-09-01' }
      ]
    },
    {
      id: 'proj-002',
      code: 'OBRA-DP-02',
      title: 'Nave Logística & Centro de Distribución Cuyo',
      rubro: 'ingenieria',
      rubroLabel: 'Ingeniería Civil & Estructuras',
      client: 'Inversora Logística del Plata S.A.',
      location: 'Parque Industrial Pilar, Buenos Aires',
      description: 'Nave industrial de 3.800 m² con estructura metálica reticulada de gran luz, pisos industriales de alta resistencia y 8 dársenas de carga.',
      status: 'in_progress',
      statusLabel: 'En Ejecución',
      progress: 52,
      targetProgress: 50,
      totalBudget: 142000000,
      certifiedAmount: 73840000,
      spentAmount: 68500000,
      director: 'Ing. Daniel Peralta',
      structuralEngineer: 'Ing. Marcos Varela',
      startDate: '2026-01-15',
      endDate: '2026-09-30',
      stages: [
        { name: 'Estudio Geotécnico de Suelos & Cálculo Platea', progress: 100, status: 'completed' },
        { name: 'Movimiento de Suelos & Fundaciones Aisladas', progress: 100, status: 'completed' },
        { name: 'Montaje de Estructura Metálica Alma Llena', progress: 75, status: 'in_progress' },
        { name: 'Pisos Industriales con Fibra Metálica', progress: 40, status: 'in_progress' },
        { name: 'Red de Incendios NFPA & Subestación', progress: 20, status: 'in_progress' },
        { name: 'Habilitación Industrial Final', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Estudio Geotécnico y Capacidad Portante', status: 'approved', date: '2026-01-20' },
        { name: 'Memoria de Cálculo Viento CIRSOC 102', status: 'approved', date: '2026-02-10' },
        { name: 'Certificado de Aptitud Ambiental OPDS', status: 'approved', date: '2026-03-05' },
        { name: 'Inspección Estructural de Soldaduras por Ultrasonido', status: 'approved', date: '2026-08-20' }
      ]
    },
    {
      id: 'proj-003',
      code: 'OBRA-DP-03',
      title: 'Residencia Vanguardia San Isidro',
      rubro: 'arquitectura',
      rubroLabel: 'Arquitectura & Interiorismo',
      client: 'Familia Rossi - Menéndez',
      location: 'Barrio Náutico San Isidro',
      description: 'Vivienda unifamiliar sustentable de 420 m² con voladizos de hormigón a la vista, carpinterías de piso a techo y piscina infinita.',
      status: 'in_progress',
      statusLabel: 'En Ejecución',
      progress: 78,
      targetProgress: 75,
      totalBudget: 94000000,
      certifiedAmount: 73320000,
      spentAmount: 66800000,
      director: 'Arq. Luciana Benítez',
      structuralEngineer: 'Ing. Daniel Peralta',
      startDate: '2025-09-10',
      endDate: '2026-10-30',
      stages: [
        { name: 'Diseño Proyectual, Renders & Permiso', progress: 100, status: 'completed' },
        { name: 'Fundaciones Indirectas sobre Pilotes', progress: 100, status: 'completed' },
        { name: 'Estructura de Hormigón Visto Encofrado Tablas', progress: 100, status: 'completed' },
        { name: 'Carpinterías de Aluminio A30 DVH', progress: 85, status: 'in_progress' },
        { name: 'Interiorismo, Revestimientos & Iluminación', progress: 60, status: 'in_progress' },
        { name: 'Parquización & Final de Obra', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Plano Aprobado Municipio de San Isidro', status: 'approved', date: '2025-08-30' },
        { name: 'Visado CPAU Arancelario', status: 'approved', date: '2025-09-02' },
        { name: 'Inspección de Estructura de Voladizo', status: 'approved', date: '2026-04-12' }
      ]
    },
    {
      id: 'proj-004',
      code: 'OBRA-DP-04',
      title: 'Puente Peatonal & Estructura Metálica Tigre',
      rubro: 'ingenieria',
      rubroLabel: 'Ingeniería Estructural & Puentes',
      client: 'Municipio de Tigre (Obra Pública)',
      location: 'Paseo Victorica y Río Luján, Tigre',
      description: 'Diseño estructural, memoria de cálculo dinámico y montaje de pasarela peatonal atirantada de 45 metros de luz libre.',
      status: 'in_progress',
      statusLabel: 'En Ejecución',
      progress: 35,
      targetProgress: 35,
      totalBudget: 86000000,
      certifiedAmount: 30100000,
      spentAmount: 26400000,
      director: 'Ing. Daniel Peralta',
      structuralEngineer: 'Ing. Marcos Varela',
      startDate: '2026-03-01',
      endDate: '2026-11-20',
      stages: [
        { name: 'Cálculo de Fundaciones en Lecho de Río', progress: 100, status: 'completed' },
        { name: 'Fabricación en Taller de Tramos Metálicos', progress: 60, status: 'in_progress' },
        { name: 'Pilotes Perforados & Cabezales de H°A°', progress: 40, status: 'in_progress' },
        { name: 'Montaje con Grúa Flotante & Tensado de Cables', progress: 0, status: 'pending' },
        { name: 'Pruebas de Carga Estática y Dinámica', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Estudio Batimétrico y Geotécnico', status: 'approved', date: '2026-02-15' },
        { name: 'Aprobación Dirección de Vías Navegables', status: 'approved', date: '2026-03-10' },
        { name: 'Memoria Sísmica & Cargas Dinámicas CIRSOC', status: 'approved', date: '2026-04-05' }
      ]
    },
    {
      id: 'proj-005',
      code: 'OBRA-DP-05',
      title: 'Hotel Boutique & Restaurante Palermo Soho',
      rubro: 'arquitectura',
      rubroLabel: 'Arquitectura & Restauración Patrimonial',
      client: 'Grupo Hotelero Soho Suites S.A.',
      location: 'Honduras y Armenia, Palermo, CABA',
      description: 'Puesta en valor de casona histórica de 1920 con ampliación de 3 niveles en steel framing y terraza mirador.',
      status: 'planning',
      statusLabel: 'En Planificación',
      progress: 15,
      targetProgress: 15,
      totalBudget: 62000000,
      certifiedAmount: 9300000,
      spentAmount: 8100000,
      director: 'Arq. Luciana Benítez',
      structuralEngineer: 'Ing. Daniel Peralta',
      startDate: '2026-07-01',
      endDate: '2027-04-30',
      stages: [
        { name: 'Relevamiento Láser & Modelo BIM Patrimonial', progress: 80, status: 'in_progress' },
        { name: 'Aprobación Consejo Asesor Asuntos Patrimoniales', progress: 20, status: 'in_progress' },
        { name: 'Refuerzos Estructurales en Perfiles IPN', progress: 0, status: 'pending' },
        { name: 'Montaje de Módulos Habitacionales Livianos', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Dictamen Favorable Protección Patrimonial', status: 'pending', date: 'En trámite' },
        { name: 'Ensayo de Capacidad de Muros Portantes', status: 'approved', date: '2026-06-25' }
      ]
    },
    {
      id: 'proj-006',
      code: 'OBRA-DP-06',
      title: 'Batería de Silos & Fundaciones Profundas Rosario',
      rubro: 'ingenieria',
      rubroLabel: 'Ingeniería Agroindustrial',
      client: 'Agroexportadora del Paraná S.A.',
      location: 'Puerto San Martín, Santa Fe',
      description: 'Cálculo estructural de plateas para 6 silos metálicos de 12.000 toneladas cada uno, túneles de descarga y torre de norias.',
      status: 'planning',
      statusLabel: 'En Planificación',
      progress: 25,
      targetProgress: 25,
      totalBudget: 110000000,
      certifiedAmount: 27500000,
      spentAmount: 22000000,
      director: 'Ing. Daniel Peralta',
      structuralEngineer: 'Ing. Marcos Varela',
      startDate: '2026-05-15',
      endDate: '2027-02-28',
      stages: [
        { name: 'Memoria de Cálculo de Presiones de Granos CIRSOC 201', progress: 100, status: 'completed' },
        { name: 'Diseño de Cabezales y 120 Pilotes a 22m', progress: 50, status: 'in_progress' },
        { name: 'Licitación de Contratistas de H°A°', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Estudio Geotécnico con Ensayos CPTU', status: 'approved', date: '2026-05-28' },
        { name: 'Visado Colegio de Ingenieros Especialistas', status: 'approved', date: '2026-06-20' }
      ]
    }
  ],

  // ========================================================================
  // CONTRATOS PRINCIPALES (COMITENTES)
  // ========================================================================
  contracts: [
    {
      id: 'ctr-001',
      code: 'CTR-COM-01',
      kind: 'principal',
      title: 'Contrato de Dirección de Obra y Construcción Torre Altos del Parque',
      rubro: 'arquitectura',
      projectId: 'proj-001',
      projectTitle: 'Torre Residencial Altos del Parque',
      party: 'Fideicomiso Altos del Parque',
      responsible: 'Dr. Martín Echeverría',
      cuit: '30-71589012-8',
      modalidad: 'Suma Alzada con Ajuste CAC',
      totalAmount: 185000000,
      certifiedAmount: 125800000,
      paidAmount: 119510000,
      retentionPercent: 5,
      retentionAmount: 6290000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2025-11-01',
      endDate: '2026-12-15',
      adjustmentClause: 'Índice Cámara Argentina de la Construcción (CAC) Base Oct 2025',
      insurance: 'Póliza de Caución Allianz N° 849.201 por cumplimiento de contrato',
      certificates: [
        { number: 1, date: '2025-12-28', desc: 'Certificado N° 1 - Excavación y Muros Colados', amount: 22000000, status: 'Cobrado' },
        { number: 2, date: '2026-02-28', desc: 'Certificado N° 2 - Fundaciones y Subsuelos 1 y 2', amount: 31000000, status: 'Cobrado' },
        { number: 3, date: '2026-05-30', desc: 'Certificado N° 3 - Estructura H°A° Pisos 1 al 8', amount: 42800000, status: 'Cobrado' },
        { number: 4, date: '2026-08-31', desc: 'Certificado N° 4 - Estructura H°A° Pisos 9 al 14', amount: 30000000, status: 'En Proceso de Cobro' }
      ]
    },
    {
      id: 'ctr-002',
      code: 'CTR-COM-02',
      kind: 'principal',
      title: 'Contrato Llave en Mano Nave Industrial & Logística Cuyo',
      rubro: 'ingenieria',
      projectId: 'proj-002',
      projectTitle: 'Nave Logística & Centro de Distribución Cuyo',
      party: 'Inversora Logística del Plata S.A.',
      responsible: 'Lic. Gonzalo Barrenechea',
      cuit: '30-69812401-4',
      modalidad: 'Suma Alzada',
      totalAmount: 142000000,
      certifiedAmount: 73840000,
      paidAmount: 70148000,
      retentionPercent: 5,
      retentionAmount: 3692000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-01-15',
      endDate: '2026-09-30',
      adjustmentClause: 'Ajuste polinómico por insumos críticos (Acero y Cemento)',
      insurance: 'Póliza de Caución Zurich Seguros N° 440.129',
      certificates: [
        { number: 1, date: '2026-03-31', desc: 'Certificado N° 1 - Movimiento de Suelos & Plateas', amount: 28500000, status: 'Cobrado' },
        { number: 2, date: '2026-06-30', desc: 'Certificado N° 2 - Montaje de Estructura Reticulada', amount: 45340000, status: 'Cobrado' }
      ]
    },
    {
      id: 'ctr-003',
      code: 'CTR-COM-03',
      kind: 'principal',
      title: 'Contrato de Proyecto, Cálculo y Dirección Residencia Vanguardia',
      rubro: 'arquitectura',
      projectId: 'proj-003',
      projectTitle: 'Residencia Vanguardia San Isidro',
      party: 'Familia Rossi - Menéndez',
      responsible: 'Dr. Alejandro Rossi',
      cuit: '20-22489012-3',
      modalidad: 'Coste y Costas + Honorarios',
      totalAmount: 94000000,
      certifiedAmount: 73320000,
      paidAmount: 69654000,
      retentionPercent: 5,
      retentionAmount: 3666000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2025-09-10',
      endDate: '2026-10-30',
      adjustmentClause: 'Rendición de compras certificadas quincenales',
      insurance: 'Fondo de garantía en cuenta fiduciaria bancaria',
      certificates: [
        { number: 1, date: '2025-11-30', desc: 'Certificado N° 1 - Fundaciones y Pilotes', amount: 18500000, status: 'Cobrado' },
        { number: 2, date: '2026-03-15', desc: 'Certificado N° 2 - Hormigón a la Vista Planta Baja y Alta', amount: 32820000, status: 'Cobrado' },
        { number: 3, date: '2026-07-31', desc: 'Certificado N° 3 - Carpinterías y Revestimientos', amount: 22000000, status: 'Cobrado' }
      ]
    },
    {
      id: 'ctr-004',
      code: 'CTR-COM-04',
      kind: 'principal',
      title: 'Licitación Pública: Pasarela Atirantada Paseo Victorica Tigre',
      rubro: 'ingenieria',
      projectId: 'proj-004',
      projectTitle: 'Puente Peatonal & Estructura Metálica Tigre',
      party: 'Municipalidad de Tigre',
      responsible: 'Secretaría de Obras Públicas',
      cuit: '30-99901452-1',
      modalidad: 'Unidad de Medida',
      totalAmount: 86000000,
      certifiedAmount: 30100000,
      paidAmount: 28595000,
      retentionPercent: 5,
      retentionAmount: 1505000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-03-01',
      endDate: '2026-11-20',
      adjustmentClause: 'Régimen de Redeterminación de Precios de Obra Pública Ley 13.064',
      insurance: 'Póliza Provincia Seguros N° POL-OBP-882',
      certificates: [
        { number: 1, date: '2026-05-31', desc: 'Certificado N° 1 - Ingeniería de Detalle y Ensayos', amount: 12000000, status: 'Cobrado' },
        { number: 2, date: '2026-08-31', desc: 'Certificado N° 2 - Fabricación de Tramos Metálicos', amount: 18100000, status: 'En Proceso de Cobro' }
      ]
    }
  ],

  // ========================================================================
  // SUBCONTRATOS POR GREMIO (CONTRATISTAS ESPECIALIZADOS)
  // ========================================================================
  subcontracts: [
    {
      id: 'sub-001',
      code: 'SUB-GRM-01',
      kind: 'subcontrato',
      gremio: 'Hormigón Armado & Encofrados',
      title: 'Subcontrato de Mano de Obra para Estructura de H°A° (Torre)',
      rubro: 'ingenieria',
      projectId: 'proj-001',
      projectTitle: 'Torre Residencial Altos del Parque',
      party: 'Hormigones & Estructuras del Plata S.R.L.',
      responsible: 'Arq. Claudio Funes',
      cuit: '30-71120944-5',
      modalidad: 'Unidad de Medida (m³)',
      totalAmount: 48500000,
      certifiedAmount: 43650000,
      paidAmount: 41467500,
      retentionPercent: 5,
      retentionAmount: 2182500,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2025-12-01',
      endDate: '2026-10-31',
      artStatus: 'Nómina de 22 operarios activa en Swiss Medical ART con cláusula de no repetición a favor de DP',
      progress: 90
    },
    {
      id: 'sub-002',
      code: 'SUB-GRM-02',
      kind: 'subcontrato',
      gremio: 'Estructuras Metálicas & Tinglados',
      title: 'Fabricación y Montaje de Pórticos y Cabriadas de Nave Industrial',
      rubro: 'ingenieria',
      projectId: 'proj-002',
      projectTitle: 'Nave Logística & Centro de Distribución Cuyo',
      party: 'Metalúrgica San Martín Industrial',
      responsible: 'Ing. Carlos Pellegrini',
      cuit: '30-68449012-9',
      modalidad: 'Suma Alzada',
      totalAmount: 52000000,
      certifiedAmount: 39000000,
      paidAmount: 37050000,
      retentionPercent: 5,
      retentionAmount: 1950000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-02-15',
      endDate: '2026-08-30',
      artStatus: 'Operarios de montaje en altura con certificado de aptitud y seguro La Segunda ART',
      progress: 75
    },
    {
      id: 'sub-003',
      code: 'SUB-GRM-03',
      kind: 'subcontrato',
      gremio: 'Carpintería de Aluminio & DVH',
      title: 'Provisión y Colocación de Carpinterías A30 New y Vidrios DVH 6+12+6',
      rubro: 'arquitectura',
      projectId: 'proj-003',
      projectTitle: 'Residencia Vanguardia San Isidro',
      party: 'Aberturas & Fachadas Vidriadas Alumax',
      responsible: 'Sr. Marcelo Vivas',
      cuit: '20-21890441-2',
      modalidad: 'Suma Alzada',
      totalAmount: 28400000,
      certifiedAmount: 24140000,
      paidAmount: 22933000,
      retentionPercent: 5,
      retentionAmount: 1207000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-04-01',
      endDate: '2026-09-15',
      artStatus: 'Seguro de accidentes personales y ART Prevención al día',
      progress: 85
    },
    {
      id: 'sub-004',
      code: 'SUB-GRM-04',
      kind: 'subcontrato',
      gremio: 'Movimiento de Suelos & Fundaciones',
      title: 'Excavación Masiva, Nivelación y Ejecución de Cabezales de Pilotes',
      rubro: 'ingenieria',
      projectId: 'proj-002',
      projectTitle: 'Nave Logística & Centro de Distribución Cuyo',
      party: 'Viales del Norte Excavaciones S.A.',
      responsible: 'Ing. Gustavo Albornoz',
      cuit: '33-70984421-9',
      modalidad: 'Unidad de Medida (m³)',
      totalAmount: 21500000,
      certifiedAmount: 21500000,
      paidAmount: 20425000,
      retentionPercent: 5,
      retentionAmount: 1075000,
      status: 'completed',
      statusLabel: 'Finalizado',
      startDate: '2026-01-20',
      endDate: '2026-03-25',
      artStatus: 'Mano de obra y maquinistas asegurados en Berkley ART',
      progress: 100
    },
    {
      id: 'sub-005',
      code: 'SUB-GRM-05',
      kind: 'subcontrato',
      gremio: 'Instalaciones Eléctricas & Subestación',
      title: 'Instalación de Fuerza Motriz, Bandejas Portacables y Tableros',
      rubro: 'ingenieria',
      projectId: 'proj-002',
      projectTitle: 'Nave Logística & Centro de Distribución Cuyo',
      party: 'Electro-Ingeniería Buenos Aires',
      responsible: 'Ing. Pablo Domínguez (Mat. COPIME)',
      cuit: '30-71402299-1',
      modalidad: 'Suma Alzada',
      totalAmount: 19800000,
      certifiedAmount: 3960000,
      paidAmount: 3762000,
      retentionPercent: 5,
      retentionAmount: 198000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-06-01',
      endDate: '2026-09-30',
      artStatus: 'Nómina de 6 electricistas matriculados en Federación Patronal',
      progress: 20
    },
    {
      id: 'sub-006',
      code: 'SUB-GRM-06',
      kind: 'subcontrato',
      gremio: 'Instalaciones Sanitarias, Gas & Incendio',
      title: 'Red de Distribución Sanitaria, Tanques de Reserva y Red Sprinklers',
      rubro: 'arquitectura',
      projectId: 'proj-001',
      projectTitle: 'Torre Residencial Altos del Parque',
      party: 'Sanitaria Central Metropolitana',
      responsible: 'Sr. Jorge Carrizo',
      cuit: '23-18902144-9',
      modalidad: 'Unidad de Medida',
      totalAmount: 24800000,
      certifiedAmount: 11160000,
      paidAmount: 10602000,
      retentionPercent: 5,
      retentionAmount: 558000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-03-01',
      endDate: '2026-11-30',
      artStatus: 'Seguro de obra y ART al día',
      progress: 45
    },
    {
      id: 'sub-007',
      code: 'SUB-GRM-07',
      kind: 'subcontrato',
      gremio: 'Climatización & Termomecánica (HVAC)',
      title: 'Instalación de Sistema VRV Inverter y Conductos de Inyección',
      rubro: 'arquitectura',
      projectId: 'proj-001',
      projectTitle: 'Torre Residencial Altos del Parque',
      party: 'ClimaTec Soluciones Térmicas',
      responsible: 'Ing. Fernando Varela',
      cuit: '30-71649201-3',
      modalidad: 'Suma Alzada',
      totalAmount: 28000000,
      certifiedAmount: 12600000,
      paidAmount: 11970000,
      retentionPercent: 5,
      retentionAmount: 630000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-04-15',
      endDate: '2026-11-30',
      artStatus: 'Póliza de ART y seguro de herramientas en obra',
      progress: 45
    },
    {
      id: 'sub-008',
      code: 'SUB-GRM-08',
      kind: 'subcontrato',
      gremio: 'Terminaciones, Pintura & Microcemento',
      title: 'Subcontrato de Revestimientos Especiales y Pintura Látex Lavable',
      rubro: 'arquitectura',
      projectId: 'proj-003',
      projectTitle: 'Residencia Vanguardia San Isidro',
      party: 'Revestimientos Andinos Decoración',
      responsible: 'Sr. Hugo Paredes',
      cuit: '27-24902188-4',
      modalidad: 'Suma Alzada',
      totalAmount: 11600000,
      certifiedAmount: 1160000,
      paidAmount: 1102000,
      retentionPercent: 5,
      retentionAmount: 58000,
      status: 'active',
      statusLabel: 'En Ejecución',
      startDate: '2026-06-01',
      endDate: '2026-09-30',
      artStatus: 'Póliza de ART presentada antes de ingreso a obra',
      progress: 10
    }
  ],

  // ========================================================================
  // COTIZACIONES & PRESUPUESTOS (MEMBRETE OFICIAL DP)
  // ========================================================================
  budgets: [
    {
      id: 'pre-001',
      code: 'PRE-DP-2026-041',
      client: 'Fideicomiso Bahía Madero',
      rubro: 'arquitectura',
      title: 'Proyecto Ejecutivo, Renders 3D & Dirección de Obra Edificio Madero',
      date: '2026-06-10',
      validUntil: '2026-07-10',
      total: 38400000,
      status: 'Aprobado',
      items: [
        { desc: 'Anteproyecto y Plantas de Arquitectura Escala 1:50', qty: '1 gl', price: 9500000 },
        { desc: 'Modelado 3D BIM (Revit) y 8 Renders Fotorrealistas en 4K', qty: '1 gl', price: 6800000 },
        { desc: 'Legajo Municipal y Tramitaciones Técnicas DGIUR', qty: '1 gl', price: 4500000 },
        { desc: 'Dirección de Obra y Control de Calidad en Obra (12 meses)', qty: '12 mes', price: 17600000 }
      ]
    },
    {
      id: 'pre-002',
      code: 'PRE-DP-2026-042',
      client: 'Logística & Transportes del Sur',
      rubro: 'ingenieria',
      title: 'Cálculo Estructural CIRSOC & Cómputos Métricos Depósito 2.500m²',
      date: '2026-06-08',
      validUntil: '2026-07-08',
      total: 24500000,
      status: 'Enviado',
      items: [
        { desc: 'Estudio Geotécnico de Suelos y Ensayos de Penetración SPT', qty: '1 gl', price: 3800000 },
        { desc: 'Memoria de Cálculo de Fundaciones y Estructura Metálica Reticulada', qty: '1 gl', price: 9200000 },
        { desc: 'Planos de Taller para Fabricación de Pórticos y Encofrados H°A°', qty: '1 gl', price: 6500000 },
        { desc: 'Cómputo Métrico de Materiales y Pliegos Técnicos de Licitación', qty: '1 gl', price: 5000000 }
      ]
    },
    {
      id: 'pre-003',
      code: 'PRE-DP-2026-043',
      client: 'Grupo Gastronómico Palermo',
      rubro: 'arquitectura',
      title: 'Interiorismo & Adecuación Acústica Restaurante y Rooftop Bar',
      date: '2026-06-02',
      validUntil: '2026-06-30',
      total: 16800000,
      status: 'En Revisión',
      items: [
        { desc: 'Diseño de Interiores, Iluminación Escenográfica y Muebles a Medida', qty: '1 gl', price: 6200000 },
        { desc: 'Planos de Instalación Termomecánica y Extracción Gastronómica', qty: '1 gl', price: 4400000 },
        { desc: 'Coordinación de Gremios y Gestión Técnica de Compras', qty: '1 gl', price: 6200000 }
      ]
    }
  ],

  // ========================================================================
  // REPOSITORIO TÉCNICO: PLANOS, BIM & CIRSOC
  // ========================================================================
  plans: [
    { code: 'PLN-EST-01', rubro: 'ingenieria', title: 'Plano de Fundaciones & Armadura Platea H-30', project: 'Torre Altos del Parque', format: 'DWG / PDF', rev: 'Rev 4 (Aprobado)' },
    { code: 'PLN-ARQ-02', rubro: 'arquitectura', title: 'Plantas de Arquitectura Pisos 1 al 14 con Cotas', project: 'Torre Altos del Parque', format: 'Revit (RVT)', rev: 'Rev 3' },
    { code: 'PLN-EST-03', rubro: 'ingenieria', title: 'Memoria de Cálculo Sísmico CIRSOC 103 (ETABS)', project: 'Torre Altos del Parque', format: 'PDF / EDB', rev: 'Final Visado' },
    { code: 'PLN-EST-04', rubro: 'ingenieria', title: 'Plano de Taller Pórticos Metálicos y Anclajes', project: 'Nave Logística Cuyo', format: 'DWG / Tekla', rev: 'Rev 2' },
    { code: 'PLN-ARQ-05', rubro: 'arquitectura', title: 'Detalle de Fachada Flotante & Carpinterías DVH', project: 'Residencia Vanguardia', format: 'DWG / PDF', rev: 'Rev 2' },
    { code: 'PLN-EST-06', rubro: 'ingenieria', title: 'Cálculo Dinámico y Catenarias Puente Peatonal', project: 'Puente Peatonal Tigre', format: 'SAP2000 / PDF', rev: 'Rev 1' }
  ],

  // ========================================================================
  // CRM & COMITENTES
  // ========================================================================
  crmLeads: [
    { id: 'lead-01', name: 'Dr. Fernando Gutiérrez', company: 'Clínica Quirúrgica Norte', rubro: 'arquitectura', need: 'Ampliación de 2 quirófanos y salas de recuperación con normas sanitarias', budget: 65000000, stage: 'Negociación Avanzada', contact: '+54 11 5829-1144' },
    { id: 'lead-02', name: 'Ing. Horacio Méndez', company: 'Agroquímicos del Litoral', rubro: 'ingenieria', need: 'Cálculo de silos metálicos y platea de hormigón armado para 10.000 toneladas', budget: 110000000, stage: 'Licitación Presentada', contact: '+54 341 498-2233' },
    { id: 'lead-03', name: 'Arq. Mariana Soler', company: 'Estudio Soler & Asociados', rubro: 'ingenieria', need: 'Cálculo estructural de subsuelo y muro berlinés en zona Belgrano', budget: 18500000, stage: 'Propuesta Enviada', contact: '+54 11 4782-9011' },
    { id: 'lead-04', name: 'Esteban Podestá', company: 'Desarrollos Náuticos Nordelta', rubro: 'arquitectura', need: 'Complejo de 12 townhouses con muelle privado y diseño contemporáneo', budget: 240000000, stage: 'Primer Contacto', contact: '+54 11 6399-4411' }
  ],

  // ========================================================================
  // AGENDA & INSPECCIONES TÉCNICAS
  // ========================================================================
  agendaEvents: [
    { id: 'evt-01', title: 'Rotura de Probetas Hormigón H-30 a 28 Días', rubro: 'ingenieria', project: 'Torre Altos del Parque', type: 'Ensayo / Hormigón', date: 'Mañana', time: '09:30 hs', responsible: 'Ing. Daniel Peralta', notes: 'Laboratorio de Control Geotécnico. Verificar probetas N° 14 a 17.' },
    { id: 'evt-02', title: 'Aprobación de Muestras de Porcellanato & Carpinterías DVH', rubro: 'arquitectura', project: 'Residencia Vanguardia San Isidro', type: 'Dirección de Obra', date: 'Jueves', time: '15:00 hs', responsible: 'Arq. Luciana Benítez', notes: 'Reunión en obra con comitente Dr. Rossi.' },
    { id: 'evt-03', title: 'Inspección de Ensayos No Destructivos de Soldaduras (Pórticos)', rubro: 'ingenieria', project: 'Nave Logística Cuyo', type: 'Control de Calidad', date: 'Viernes', time: '11:00 hs', responsible: 'Ing. Marcos Varela', notes: 'Verificación por ultrasonido de uniones viga-columna.' },
    { id: 'evt-04', title: 'Reunión de Coordinación de Gremios (Termomecánica & Electricidad)', rubro: 'arquitectura', project: 'Torre Altos del Parque', type: 'Coordinación', date: 'Lunes', time: '10:00 hs', responsible: 'Capataz Roberto Molina', notes: 'Pase de cañerías por vigas en pisos 5 al 8.' }
  ],

  // ========================================================================
  // PERSONAL, CUADRILLAS & ART
  // ========================================================================
  team: [
    { name: 'Ing. Daniel Peralta', specialty: 'Ingeniería Estructural & Sísmica', role: 'Director General / Calculista', matricula: 'CPIC N° 18.942', art: 'Swiss Medical ART', status: 'Activo' },
    { name: 'Arq. Luciana Benítez', specialty: 'Diseño Proyectual & Modelado BIM', role: 'Directora de Arquitectura', matricula: 'CPAU N° 24.110', art: 'Swiss Medical ART', status: 'Activo' },
    { name: 'Ing. Marcos Varela', specialty: 'Ingeniería Civil & Geotecnia', role: 'Jefe Técnico de Obra', matricula: 'CPIC N° 21.305', art: 'La Segunda ART', status: 'Activo' },
    { name: 'Roberto Molina', specialty: 'Jefe de Cuadrilla Estructuras', role: 'Capataz General (22 operarios)', matricula: 'UOCRA Cat. Especializada', art: 'Póliza al día', status: 'En Obra' }
  ],

  // ========================================================================
  // COMPRAS & ACOPIOS
  // ========================================================================
  inventory: [
    { item: 'Acero Conformado ADN 420 (Ø 12 a 25 mm)', rubro: 'ingenieria', project: 'Torre Altos del Parque', stock: '48 Toneladas', status: 'Acopio al 100%', alert: false },
    { item: 'Perfilería de Aluminio Aluar A30 Anodizado', rubro: 'arquitectura', project: 'Residencia Vanguardia', stock: '1.200 Metros lineales', status: 'Acopio Parcial 70%', alert: true },
    { item: 'Chapa Conformada Cincalum T-101 (Techos)', rubro: 'ingenieria', project: 'Nave Logística Cuyo', stock: '3.800 m²', status: 'Acopio en Depósito', alert: false },
    { item: 'Cemento Loma Negra CPC 40 Especial Estructuras', rubro: 'ingenieria', project: 'Torre Altos del Parque', stock: '120 Bolsas', status: 'Alerta Stock Mínimo', alert: true }
  ]
};

// ==========================================================================
// 2. CONTROLLER & LOGIC ENGINE
// ==========================================================================
const App = {
  init() {
    this.setupNavigation();
    this.setupTheme();
    this.setupRoleSelector();
    this.setupRubroFilter();
    this.setupGlobalSearch();
    this.setupModals();
    this.setupQuickButtons();
    this.setupTooltipEvents();

    const hash = window.location.hash.replace('#', '') || 'dashboard';
    this.navigateTo(hash);
  },

  setupNavigation() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '') || 'dashboard';
      this.navigateTo(hash);
    });

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    mobileBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });

    const collapseBtn = document.getElementById('collapseSidebarBtn');
    collapseBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });

    const notifBtn = document.getElementById('notifBellBtn');
    const notifDropdown = document.getElementById('notificationsDropdown');
    notifBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown?.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (notifDropdown && !notifDropdown.contains(e.target) && e.target !== notifBtn) {
        notifDropdown.classList.remove('active');
      }
    });
  },

  setupTheme() {
    const btn = document.getElementById('btnToggleTheme');
    btn?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      this.showToast(`Modo ${next === 'dark' ? 'Oscuro' : 'Claro'} activado.`);
    });
  },

  setupRoleSelector() {
    const selector = document.getElementById('roleSelector');
    const userName = document.getElementById('userNameDisplay');
    const userAvatar = document.getElementById('userAvatar');

    selector?.addEventListener('change', (e) => {
      const role = e.target.value;
      DP_DB.state.currentRole = role;

      const roles = {
        admin: { name: 'Ing. Daniel Peralta', label: 'Director / Socio Gerente', avatar: 'DP' },
        engineer: { name: 'Ing. Marcos Varela', label: 'Ingeniero Calculista CIRSOC', avatar: 'MV' },
        architect: { name: 'Arq. Luciana Benítez', label: 'Directora de Arquitectura & BIM', avatar: 'LB' },
        site_manager: { name: 'Roberto Molina', label: 'Jefe de Obra / Supervisor', avatar: 'RM' },
        accountant: { name: 'Lic. Mariano Castro', label: 'Administración & Finanzas', avatar: 'MC' }
      };

      const u = roles[role] || roles.admin;
      if (userName) userName.textContent = u.name;
      if (userAvatar) userAvatar.textContent = u.avatar;

      this.showToast(`Perfil cambiado a: ${u.label}`);
      this.renderCurrentView();
    });
  },

  setupRubroFilter() {
    const buttons = document.querySelectorAll('#rubroFilterGroup .rubro-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        DP_DB.state.activeRubro = btn.getAttribute('data-rubro');
        this.showToast(`Filtro de rubro aplicado: ${btn.textContent.trim()}`);
        this.renderCurrentView();
      });
    });
  },

  setupGlobalSearch() {
    const input = document.getElementById('globalSearchInput');
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        input?.focus();
      }
    });

    input?.addEventListener('input', (e) => {
      DP_DB.state.searchQuery = e.target.value.toLowerCase().trim();
      if (DP_DB.state.activeView === 'obras' || DP_DB.state.activeView === 'contratos') {
        this.renderCurrentView();
      }
    });
  },

  setupQuickButtons() {
    document.getElementById('btnQuickNewContract')?.addEventListener('click', () => {
      this.openNewContractModal();
    });
    document.getElementById('btnQuickNewProject')?.addEventListener('click', () => {
      this.openNewProjectModal();
    });
    document.getElementById('btnQuickNewBudget')?.addEventListener('click', () => {
      this.navigateTo('presupuestos');
      this.showToast('Módulo de presupuestos: presiona "+ Nueva Cotización"');
    });
  },

  setupTooltipEvents() {
    const tooltip = document.getElementById('chartTooltip');
    window.showChartTooltip = (e, title, val) => {
      if (!tooltip) return;
      tooltip.innerHTML = `<div class="tooltip-title">${title}</div><div class="tooltip-val">${val}</div>`;
      tooltip.classList.add('active');
      tooltip.style.left = `${e.clientX}px`;
      tooltip.style.top = `${e.clientY}px`;
    };

    window.hideChartTooltip = () => {
      if (!tooltip) return;
      tooltip.classList.remove('active');
    };
  },

  setupModals() {
    document.getElementById('closeProjectModalBtn')?.addEventListener('click', () => {
      document.getElementById('projectModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('closeContractModalBtn')?.addEventListener('click', () => {
      document.getElementById('contractModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('closeNewContractModalBtn')?.addEventListener('click', () => {
      document.getElementById('newContractModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnCancelNewContract')?.addEventListener('click', () => {
      document.getElementById('newContractModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('closeBudgetPrintModalBtn')?.addEventListener('click', () => {
      document.getElementById('budgetPrintModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('closeAgendaModalBtn')?.addEventListener('click', () => {
      document.getElementById('agendaModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnCancelAgendaEvent')?.addEventListener('click', () => {
      document.getElementById('agendaModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('closeNewProjectModalBtn')?.addEventListener('click', () => {
      document.getElementById('newProjectModalBackdrop')?.classList.remove('active');
    });
    document.getElementById('btnCancelNewProject')?.addEventListener('click', () => {
      document.getElementById('newProjectModalBackdrop')?.classList.remove('active');
    });

    document.getElementById('formNewContract')?.addEventListener('submit', (e) => this.handleNewContractSubmit(e));
    document.getElementById('formNewProject')?.addEventListener('submit', (e) => this.handleNewProjectSubmit(e));
    document.getElementById('formNewAgendaEvent')?.addEventListener('submit', (e) => this.handleNewAgendaSubmit(e));

    document.getElementById('btnPrintBudget')?.addEventListener('click', () => window.print());
    document.getElementById('btnSendBudgetWhatsapp')?.addEventListener('click', () => {
      window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('Estimado comitente, adjuntamos la cotización oficial con membrete de DP Ingeniería & Arquitectura.'), '_blank');
    });
  },

  navigateTo(view) {
    DP_DB.state.activeView = view;
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
      if (link.dataset.view === view) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    document.getElementById('sidebar')?.classList.remove('mobile-open');
    this.renderCurrentView();
  },

  renderCurrentView() {
    switch (DP_DB.state.activeView) {
      case 'dashboard':
        this.renderDashboardView();
        break;
      case 'obras':
        this.renderObrasView();
        break;
      case 'contratos':
        this.renderContratosView();
        break;
      case 'presupuestos':
        this.renderPresupuestosView();
        break;
      case 'planos':
        this.renderPlanosView();
        break;
      case 'crm':
        this.renderCrmView();
        break;
      case 'agenda':
        this.renderAgendaView();
        break;
      case 'personal':
        this.renderPersonalView();
        break;
      case 'compras':
        this.renderComprasView();
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
    }
  },

  formatCurrency(num) {
    return '$ ' + Number(num).toLocaleString('es-AR');
  },

  filterByRubro(items) {
    if (DP_DB.state.activeRubro === 'all') return items;
    return items.filter(item => item.rubro === DP_DB.state.activeRubro);
  },

  showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  // ========================================================================
  // DYNAMIC PERIOD FINANCIAL DATA
  // ========================================================================
  getPeriodData(period) {
    switch (period) {
      case 'day':
        return {
          label: 'Hoy (15 de Septiembre, 2026)',
          income: 4200000,
          expenses: 2850000,
          balance: 1350000,
          margin: '32.1%',
          series: [
            { label: '08:00', in: 0, out: 450000 },
            { label: '10:00', in: 1800000, out: 620000 },
            { label: '12:00', in: 0, out: 780000 },
            { label: '14:00', in: 2400000, out: 550000 },
            { label: '17:00', in: 0, out: 450000 }
          ],
          yMax: 2500000
        };
      case 'week':
        return {
          label: 'Semana Actual (8 al 15 Sep)',
          income: 28500000,
          expenses: 19400000,
          balance: 9100000,
          margin: '31.9%',
          series: [
            { label: 'Lun 08', in: 4500000, out: 3100000 },
            { label: 'Mar 09', in: 7200000, out: 4900000 },
            { label: 'Mié 10', in: 3800000, out: 2600000 },
            { label: 'Jue 11', in: 6100000, out: 4200000 },
            { label: 'Vie 12', in: 5400000, out: 3700000 },
            { label: 'Sáb 13', in: 1500000, out: 900000 }
          ],
          yMax: 8000000
        };
      case 'year':
        return {
          label: 'Ejercicio Fiscal 2026',
          income: 418000000,
          expenses: 298000000,
          balance: 120000000,
          margin: '28.7%',
          series: [
            { label: 'T1 2026', in: 95000000, out: 68000000 },
            { label: 'T2 2026', in: 135000000, out: 96000000 },
            { label: 'T3 2026', in: 128000000, out: 92000000 },
            { label: 'T4 (Est)', in: 60000000, out: 42000000 }
          ],
          yMax: 150000000
        };
      case 'month':
      default:
        return {
          label: 'Mes en Curso (Septiembre 2026)',
          income: 84600000,
          expenses: 59200000,
          balance: 25400000,
          margin: '30.0%',
          series: [
            { label: 'Abr', in: 58000000, out: 41000000 },
            { label: 'May', in: 64000000, out: 45000000 },
            { label: 'Jun', in: 72000000, out: 51000000 },
            { label: 'Jul', in: 69000000, out: 48000000 },
            { label: 'Ago', in: 78000000, out: 54000000 },
            { label: 'Sep', in: 84600000, out: 59200000 }
          ],
          yMax: 90000000
        };
    }
  },

  setPeriod(period) {
    DP_DB.state.currentTimeFilter = period;
    this.renderDashboardView();
  },

  setFinancialChartType(type) {
    DP_DB.state.financialChartType = type;
    this.renderDashboardView();
  },

  // ========================================================================
  // VIEW: DASHBOARD GENERAL (WITH PERIOD SELECTOR & ADVANCED CHARTS)
  // ========================================================================
  renderDashboardView() {
    const container = document.getElementById('mainViewContainer');
    const periodData = this.getPeriodData(DP_DB.state.currentTimeFilter);

    const filteredProjects = this.filterByRubro(DP_DB.projects);
    const filteredContracts = this.filterByRubro(DP_DB.contracts);
    const filteredSubcontracts = this.filterByRubro(DP_DB.subcontracts);

    const totalContractedComitentes = filteredContracts.reduce((acc, c) => acc + c.totalAmount, 0);
    const totalCertifiedComitentes = filteredContracts.reduce((acc, c) => acc + c.certifiedAmount, 0);
    const totalSubcontracted = filteredSubcontracts.reduce((acc, s) => acc + s.totalAmount, 0);
    const totalRetentionFund = filteredContracts.reduce((acc, c) => acc + c.retentionAmount, 0) +
                               filteredSubcontracts.reduce((acc, s) => acc + s.retentionAmount, 0);

    const activeObrasCount = filteredProjects.filter(p => p.status === 'in_progress').length;

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Panel de Control · DP Ingeniería & Arquitectura</h1>
          <p class="page-description">
            Monitoreo en tiempo real de obras civiles, proyectos arquitectónicos, contratos de comitentes y gremios subcontratados.
            ${DP_DB.state.activeRubro !== 'all' ? `<strong>(Filtro: ${DP_DB.state.activeRubro === 'ingenieria' ? '🏗️ Ingeniería Civil' : '📐 Arquitectura'})</strong>` : ''}
          </p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-amber btn-sm" onclick="App.openNewContractModal()">
            <span>+ Nuevo Contrato</span>
          </button>
          <button class="btn btn-primary btn-sm" onclick="App.openNewProjectModal()">
            <span>+ Nueva Obra</span>
          </button>
        </div>
      </div>

      <!-- PERIOD SELECTOR TOOLBAR -->
      <div class="period-toolbar">
        <div class="period-label-wrap">
          <span class="period-title">Período de Análisis Financiero:</span>
          <span class="period-active-date">📅 ${periodData.label}</span>
        </div>
        <div class="period-buttons-group">
          <button type="button" class="btn-period ${DP_DB.state.currentTimeFilter === 'day' ? 'active' : ''}" onclick="App.setPeriod('day')">Día</button>
          <button type="button" class="btn-period ${DP_DB.state.currentTimeFilter === 'week' ? 'active' : ''}" onclick="App.setPeriod('week')">Semana</button>
          <button type="button" class="btn-period ${DP_DB.state.currentTimeFilter === 'month' ? 'active' : ''}" onclick="App.setPeriod('month')">Mes</button>
          <button type="button" class="btn-period ${DP_DB.state.currentTimeFilter === 'year' ? 'active' : ''}" onclick="App.setPeriod('year')">Año</button>
        </div>
      </div>

      <!-- STATS KPI GRID (5 EXECUTIVE CARDS) -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon primary">🏢</div>
          <div class="stat-details">
            <span class="stat-label">Obras en Ejecución</span>
            <span class="stat-value">${activeObrasCount}</span>
            <span class="stat-trend up">✓ Con memorias de cálculo al día</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon amber">📜</div>
          <div class="stat-details">
            <span class="stat-label">Contratado Comitentes</span>
            <span class="stat-value">${this.formatCurrency(totalContractedComitentes)}</span>
            <span class="stat-trend up">Certificado: ${Math.round((totalCertifiedComitentes / (totalContractedComitentes || 1)) * 100)}%</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon info">🔨</div>
          <div class="stat-details">
            <span class="stat-label">Subcontratos Gremios</span>
            <span class="stat-value">${this.formatCurrency(totalSubcontracted)}</span>
            <span class="stat-trend up">8 gremios activos en obra</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon success">🛡️</div>
          <div class="stat-details">
            <span class="stat-label">Fondo de Reparo (5%)</span>
            <span class="stat-value">${this.formatCurrency(totalRetentionFund)}</span>
            <span class="stat-trend up">Garantía en custodia</span>
          </div>
        </div>
        <div class="stat-card" style="border-left: 4px solid #10b981;">
          <div class="stat-icon success">📈</div>
          <div class="stat-details">
            <span class="stat-label">Balance Neto Período</span>
            <span class="stat-value" style="color:#059669;">+${this.formatCurrency(periodData.balance)}</span>
            <span class="stat-trend up">Margen Neto: ${periodData.margin}</span>
          </div>
        </div>
      </div>

      <!-- ADVANCED FINANCIAL & ADVANCE CHARTS (2 COLUMNS) -->
      <div style="display:grid; grid-template-columns: 2fr 1fr; gap:24px; margin-bottom: 24px;">
        <!-- Chart 1: Curva Financiera (Ingresos Certificados vs Pagos Gremios) -->
        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3>Flujo Financiero: Certificaciones vs Desembolsos</h3>
              <p>Ingresos por avance de obra facturado vs egresos por subcontratos y materiales</p>
            </div>
            <div class="chart-controls">
              <button type="button" class="chart-type-btn ${DP_DB.state.financialChartType === 'bars' ? 'active' : ''}" onclick="App.setFinancialChartType('bars')">Barras</button>
              <button type="button" class="chart-type-btn ${DP_DB.state.financialChartType === 'lines' ? 'active' : ''}" onclick="App.setFinancialChartType('lines')">Líneas</button>
              <button type="button" class="chart-type-btn ${DP_DB.state.financialChartType === 'area' ? 'active' : ''}" onclick="App.setFinancialChartType('area')">Área</button>
            </div>
          </div>
          <div class="chart-svg-container">
            ${this.renderFinancialSvgChart(periodData.series, periodData.yMax, DP_DB.state.financialChartType)}
          </div>
        </div>

        <!-- Chart 2: Distribución por Rubro (Donut Chart) -->
        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title-wrap">
              <h3>Distribución de Cartera</h3>
              <p>Volumen por especialidad técnica</p>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:240px;">
            ${this.renderRubroDonutChart()}
          </div>
        </div>
      </div>

      <!-- MAIN DASHBOARD CONTENT (2 COLUMNS) -->
      <div style="display:grid; grid-template-columns: 2fr 1fr; gap:24px; margin-bottom: 28px;">
        <!-- Card 1: Estado y Avance de Obras -->
        <div class="card">
          <div class="card-title" style="margin-bottom:18px;">
            <span>Avance Técnico de Obras & Proyectos</span>
            <a href="#obras" class="btn btn-secondary btn-sm">Ver todas (${filteredProjects.length})</a>
          </div>
          <div style="display:flex; flex-direction:column; gap:16px;">
            ${filteredProjects.slice(0, 4).map(p => `
              <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                  <div>
                    <span class="badge ${p.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">${p.rubro === 'ingenieria' ? '🏗️ Ingeniería' : '📐 Arquitectura'}</span>
                    <h4 style="font-size:14px; font-weight:800; margin-top:4px; color:var(--text-primary);">${p.title}</h4>
                    <p style="font-size:11.5px; color:var(--text-secondary);">${p.client} · ${p.location}</p>
                  </div>
                  <span class="badge ${p.progress >= 70 ? 'badge-success' : 'badge-amber'}">${p.progress}% Completado</span>
                </div>
                <div class="progress-meter-wrap" style="width:100%;">
                  <div class="progress-meter" style="height:10px;">
                    <div class="progress-segment certified" style="width:${p.progress}%;"></div>
                  </div>
                  <div class="progress-labels" style="margin-top:4px;">
                    <span>Presupuesto: ${this.formatCurrency(p.totalBudget)}</span>
                    <span>Certificado: ${this.formatCurrency(p.certifiedAmount)}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Card 2: Balance de Contratos & Pólizas -->
        <div class="card">
          <div class="card-title" style="margin-bottom:18px;">
            <span>Contratos Críticos & Coberturas</span>
            <a href="#contratos" class="btn btn-secondary btn-sm">Módulo Contratos</a>
          </div>
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div style="padding:14px; background:rgba(245, 158, 11, 0.08); border:1px dashed var(--amber); border-radius:var(--radius-sm);">
              <span style="font-size:10px; font-weight:800; color:var(--amber-dark); text-transform:uppercase;">⚖️ Marco Jurídico Vigente</span>
              <p style="font-size:12px; font-weight:700; margin-top:2px;">Contratos comitentes con índice CAC y retención del 5%</p>
              <p style="font-size:11px; color:var(--text-secondary); margin-top:4px;">Todas las subcontrataciones exigen ART con cláusula de no repetición a favor de DP.</p>
            </div>
            <h5 style="font-size:12px; font-weight:800; color:var(--text-secondary); text-transform:uppercase; margin-top:6px;">Subcontratos Destacados</h5>
            ${DP_DB.subcontracts.slice(0, 3).map(s => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; background:var(--bg-app); border-radius:8px; border:1px solid var(--border-color);">
                <div>
                  <p style="font-size:12px; font-weight:800; color:var(--text-primary);">${s.gremio}</p>
                  <p style="font-size:10.5px; color:var(--text-secondary);">${s.party}</p>
                </div>
                <div style="text-align:right;">
                  <span style="font-size:11.5px; font-weight:800; font-family:var(--font-mono); color:var(--text-primary);">${this.formatCurrency(s.totalAmount)}</span>
                  <span class="badge ${s.status === 'completed' ? 'badge-success' : 'badge-amber'}" style="display:block; margin-top:2px;">${s.statusLabel}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // SVG CHART RENDERERS
  // ========================================================================
  renderFinancialSvgChart(series, yMax, type) {
    const width = 680;
    const height = 220;
    const paddingLeft = 50;
    const paddingBottom = 30;
    const chartW = width - paddingLeft - 20;
    const chartH = height - paddingBottom - 20;

    const step = chartW / series.length;

    let svgInner = '';

    // Grid lines
    for (let i = 0; i <= 4; i++) {
      const y = chartH - (chartH / 4) * i + 10;
      const val = Math.round((yMax / 4) * i);
      svgInner += `
        <line x1="${paddingLeft}" y1="${y}" x2="${width - 10}" y2="${y}" stroke="var(--border-color)" stroke-dasharray="3,3" />
        <text x="${paddingLeft - 8}" y="${y + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end" font-family="var(--font-mono)">${val >= 1000000 ? (val/1000000).toFixed(1)+'M' : (val/1000)+'k'}</text>
      `;
    }

    if (type === 'bars') {
      const barWidth = Math.min(step * 0.32, 28);
      series.forEach((pt, idx) => {
        const xCenter = paddingLeft + step * idx + step / 2;
        const hIn = (pt.in / yMax) * chartH;
        const hOut = (pt.out / yMax) * chartH;
        const yIn = chartH - hIn + 10;
        const yOut = chartH - hOut + 10;

        svgInner += `
          <!-- Bar In (Ingreso) -->
          <rect x="${xCenter - barWidth - 2}" y="${yIn}" width="${barWidth}" height="${hIn}" rx="4" fill="#2563eb"
            onmousemove="showChartTooltip(event, '${pt.label} · Certificado Cobrado', '${this.formatCurrency(pt.in)}')"
            onmouseleave="hideChartTooltip()" style="cursor:pointer; opacity:0.9;" />

          <!-- Bar Out (Egreso) -->
          <rect x="${xCenter + 2}" y="${yOut}" width="${barWidth}" height="${hOut}" rx="4" fill="#f59e0b"
            onmousemove="showChartTooltip(event, '${pt.label} · Desembolso Gremios', '${this.formatCurrency(pt.out)}')"
            onmouseleave="hideChartTooltip()" style="cursor:pointer; opacity:0.9;" />

          <!-- X Label -->
          <text x="${xCenter}" y="${height - 8}" font-size="11" font-weight="700" fill="var(--text-secondary)" text-anchor="middle">${pt.label}</text>
        `;
      });
    } else {
      // Lines or Area
      let ptsIn = [];
      let ptsOut = [];
      series.forEach((pt, idx) => {
        const x = paddingLeft + step * idx + step / 2;
        const yIn = chartH - (pt.in / yMax) * chartH + 10;
        const yOut = chartH - (pt.out / yMax) * chartH + 10;
        ptsIn.push(`${x},${yIn}`);
        ptsOut.push(`${x},${yOut}`);

        svgInner += `
          <text x="${x}" y="${height - 8}" font-size="11" font-weight="700" fill="var(--text-secondary)" text-anchor="middle">${pt.label}</text>
        `;
      });

      if (type === 'area') {
        const firstX = paddingLeft + step * 0 + step / 2;
        const lastX = paddingLeft + step * (series.length - 1) + step / 2;
        const baseY = chartH + 10;

        svgInner += `
          <polygon points="${firstX},${baseY} ${ptsIn.join(' ')} ${lastX},${baseY}" fill="rgba(37, 99, 235, 0.2)" />
          <polygon points="${firstX},${baseY} ${ptsOut.join(' ')} ${lastX},${baseY}" fill="rgba(245, 158, 11, 0.2)" />
        `;
      }

      svgInner += `
        <polyline points="${ptsIn.join(' ')}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" />
        <polyline points="${ptsOut.join(' ')}" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" />
      `;

      series.forEach((pt, idx) => {
        const x = paddingLeft + step * idx + step / 2;
        const yIn = chartH - (pt.in / yMax) * chartH + 10;
        const yOut = chartH - (pt.out / yMax) * chartH + 10;
        svgInner += `
          <circle cx="${x}" cy="${yIn}" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2"
            onmousemove="showChartTooltip(event, '${pt.label} · Ingreso Certificado', '${this.formatCurrency(pt.in)}')"
            onmouseleave="hideChartTooltip()" style="cursor:pointer;" />
          <circle cx="${x}" cy="${yOut}" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"
            onmousemove="showChartTooltip(event, '${pt.label} · Egreso Gremios', '${this.formatCurrency(pt.out)}')"
            onmouseleave="hideChartTooltip()" style="cursor:pointer;" />
        `;
      });
    }

    return `
      <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:100%; overflow:visible;">
        ${svgInner}
      </svg>
    `;
  },

  renderRubroDonutChart() {
    const totalIng = DP_DB.projects.filter(p => p.rubro === 'ingenieria').reduce((a, b) => a + b.totalBudget, 0);
    const totalArq = DP_DB.projects.filter(p => p.rubro === 'arquitectura').reduce((a, b) => a + b.totalBudget, 0);
    const total = totalIng + totalArq || 1;

    const pctIng = Math.round((totalIng / total) * 100);
    const pctArq = 100 - pctIng;

    return `
      <div style="display:flex; align-items:center; gap:24px;">
        <div style="position:relative; width:130px; height:130px;">
          <svg viewBox="0 0 36 36" style="width:100%; height:100%; transform: rotate(-90deg);">
            <path stroke="#f59e0b" stroke-width="5" fill="none" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path stroke="#2563eb" stroke-width="5" fill="none" stroke-dasharray="${pctIng}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <span style="font-size:18px; font-weight:900; color:var(--text-primary); font-family:var(--font-mono);">${pctIng}%</span>
            <span style="font-size:9px; font-weight:700; color:var(--text-secondary); text-transform:uppercase;">Ingeniería</span>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:12px; height:12px; border-radius:3px; background:#2563eb;"></span>
            <div>
              <p style="font-size:12px; font-weight:800; color:var(--text-primary);">Ingeniería Civil (${pctIng}%)</p>
              <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-secondary);">${this.formatCurrency(totalIng)}</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:12px; height:12px; border-radius:3px; background:#f59e0b;"></span>
            <div>
              <p style="font-size:12px; font-weight:800; color:var(--text-primary);">Arquitectura (${pctArq}%)</p>
              <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-secondary);">${this.formatCurrency(totalArq)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: OBRAS & PROYECTOS
  // ========================================================================
  renderObrasView() {
    const container = document.getElementById('mainViewContainer');
    let projects = this.filterByRubro(DP_DB.projects);

    if (DP_DB.state.searchQuery) {
      const q = DP_DB.state.searchQuery;
      projects = projects.filter(p => p.title.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.code.toLowerCase().includes(q));
    }

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Gestión de Obras & Proyectos</h1>
          <p class="page-description">Seguimiento físico, memorias de cálculo, planos aprobados y fiscalización de etapas constructivas.</p>
        </div>
        <div class="page-header-actions">
          <div class="rubro-filter-pill">
            <button type="button" class="rubro-btn ${DP_DB.state.obrasViewMode === 'grid' ? 'active' : ''}" onclick="App.toggleObrasMode('grid')">Tarjetas</button>
            <button type="button" class="rubro-btn ${DP_DB.state.obrasViewMode === 'table' ? 'active' : ''}" onclick="App.toggleObrasMode('table')">Tabla</button>
          </div>
          <button class="btn btn-primary btn-sm" onclick="App.openNewProjectModal()">+ Nueva Obra</button>
        </div>
      </div>

      ${DP_DB.state.obrasViewMode === 'grid' ? `
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap:24px;">
          ${projects.map(p => `
            <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <span class="badge ${p.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">
                    ${p.rubro === 'ingenieria' ? '🏗️ Ingeniería Civil' : '📐 Arquitectura'}
                  </span>
                  <span class="badge badge-neutral" style="font-family:var(--font-mono);">${p.code}</span>
                </div>
                <h3 style="font-size:16px; font-weight:800; color:var(--text-primary); margin-bottom:6px;">${p.title}</h3>
                <p style="font-size:12px; color:var(--text-secondary); margin-bottom:12px; line-height:1.4;">${p.description}</p>
                <div style="font-size:11.5px; color:var(--text-secondary); margin-bottom:16px;">
                  <p><strong>Comitente:</strong> ${p.client}</p>
                  <p><strong>Ubicación:</strong> ${p.location}</p>
                  <p><strong>Director Técnico:</strong> ${p.director}</p>
                </div>
                <div class="progress-meter-wrap" style="margin-bottom:16px;">
                  <div class="progress-labels">
                    <span>Avance de Obra</span>
                    <span>${p.progress}%</span>
                  </div>
                  <div class="progress-meter" style="height:8px;">
                    <div class="progress-segment certified" style="width:${p.progress}%;"></div>
                  </div>
                </div>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:14px;">
                <div>
                  <span style="font-size:10px; color:var(--text-secondary); text-transform:uppercase;">Presupuesto Obra</span>
                  <p style="font-size:14px; font-weight:800; font-family:var(--font-mono); color:var(--text-primary);">${this.formatCurrency(p.totalBudget)}</p>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="App.openProjectModal('${p.id}')">Ver Ficha Técnica</button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="card" style="padding:0; overflow:hidden;">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Rubro</th>
                  <th>Obra / Proyecto</th>
                  <th>Comitente</th>
                  <th>Presupuesto Total</th>
                  <th>Avance</th>
                  <th>Estado</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                ${projects.map(p => `
                  <tr>
                    <td><span style="font-family:var(--font-mono); font-weight:700;">${p.code}</span></td>
                    <td><span class="badge ${p.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">${p.rubro === 'ingenieria' ? '🏗️ Ingeniería' : '📐 Arquitectura'}</span></td>
                    <td><strong>${p.title}</strong><br><span style="font-size:11px; color:var(--text-secondary);">${p.location}</span></td>
                    <td>${p.client}</td>
                    <td style="font-family:var(--font-mono); font-weight:800;">${this.formatCurrency(p.totalBudget)}</td>
                    <td style="width:120px;">
                      <div class="progress-meter-wrap">
                        <span style="font-size:11px; font-weight:700;">${p.progress}%</span>
                        <div class="progress-meter" style="height:6px;">
                          <div class="progress-segment certified" style="width:${p.progress}%;"></div>
                        </div>
                      </div>
                    </td>
                    <td><span class="badge badge-success">${p.statusLabel}</span></td>
                    <td><button class="btn btn-secondary btn-sm" onclick="App.openProjectModal('${p.id}')">Ficha</button></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `}
    `;
  },

  toggleObrasMode(mode) {
    DP_DB.state.obrasViewMode = mode;
    this.renderObrasView();
  },

  // ========================================================================
  // VIEW: CONTRATOS & SUBCONTRATOS (MODULO ESTRELLA)
  // ========================================================================
  renderContratosView() {
    const container = document.getElementById('mainViewContainer');
    const tab = DP_DB.state.activeContractsTab;

    let items = tab === 'principales' ? 
      this.filterByRubro(DP_DB.contracts) : 
      this.filterByRubro(DP_DB.subcontracts);

    if (DP_DB.state.searchQuery) {
      const q = DP_DB.state.searchQuery;
      items = items.filter(c => c.title.toLowerCase().includes(q) || c.party.toLowerCase().includes(q) || c.code.toLowerCase().includes(q));
    }

    const totalContratado = items.reduce((a, b) => a + b.totalAmount, 0);
    const totalCertificado = items.reduce((a, b) => a + b.certifiedAmount, 0);
    const totalRetencion = items.reduce((a, b) => a + b.retentionAmount, 0);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Módulo de Contratos & Subcontratos de Obra</h1>
          <p class="page-description">
            Instrumentos contractuales con comitentes y contratistas especializados. Retenciones de fondo de reparo (5%), cláusulas CAC y control de ART.
          </p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-amber btn-sm" onclick="App.openNewContractModal()">
            <span>+ Registrar Instrumento</span>
          </button>
        </div>
      </div>

      <!-- TABS SWITCHER -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">
        <div style="display:flex; gap:12px;">
          <button class="btn ${tab === 'principales' ? 'btn-primary' : 'btn-secondary'}" onclick="App.switchContractsTab('principales')">
            📜 Contratos Principales (${this.filterByRubro(DP_DB.contracts).length})
          </button>
          <button class="btn ${tab === 'subcontratos' ? 'btn-amber' : 'btn-secondary'}" onclick="App.switchContractsTab('subcontratos')">
            🔨 Subcontratos por Gremio (${this.filterByRubro(DP_DB.subcontracts).length})
          </button>
        </div>
        <div style="font-size:12px; color:var(--text-secondary);">
          Fondo de Reparo Total: <strong style="font-family:var(--font-mono); color:var(--amber-dark);">${this.formatCurrency(totalRetencion)}</strong>
        </div>
      </div>

      <!-- SUMMARY KPI FOR TAB -->
      <div class="stats-grid" style="margin-bottom:24px;">
        <div class="stat-card">
          <div class="stat-details">
            <span class="stat-label">Monto Total Comprometido</span>
            <span class="stat-value">${this.formatCurrency(totalContratado)}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-details">
            <span class="stat-label">Total Certificado Acumulado</span>
            <span class="stat-value" style="color:var(--primary);">${this.formatCurrency(totalCertificado)}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-details">
            <span class="stat-label">Retención Fondo Reparo en Garantía</span>
            <span class="stat-value" style="color:var(--amber-dark);">${this.formatCurrency(totalRetencion)}</span>
          </div>
        </div>
      </div>

      <!-- TABLA DE CONTRATOS / SUBCONTRATOS -->
      <div class="card" style="padding:0; overflow:hidden;">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Rubro</th>
                <th>${tab === 'principales' ? 'Comitente / Cliente' : 'Gremio & Contratista'}</th>
                <th>Obra Vinculada</th>
                <th>Modalidad</th>
                <th>Monto Total</th>
                <th>Certificado</th>
                <th>Fondo Reparo (5%)</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              ${items.length === 0 ? `
                <tr><td colspan="10" style="text-align:center; padding:32px; color:var(--text-secondary);">No se encontraron contratos con los filtros seleccionados.</td></tr>
              ` : items.map(c => `
                <tr>
                  <td><span style="font-family:var(--font-mono); font-weight:800; color:var(--text-primary);">${c.code}</span></td>
                  <td>
                    <span class="badge ${c.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">
                      ${c.rubro === 'ingenieria' ? '🏗️ Ing' : '📐 Arq'}
                    </span>
                  </td>
                  <td>
                    <strong>${c.party}</strong>
                    ${tab === 'subcontratos' ? `<br><span class="badge badge-amber" style="font-size:10px; margin-top:2px;">${c.gremio}</span>` : ''}
                  </td>
                  <td><span style="font-size:12px; color:var(--text-secondary);">${c.projectTitle}</span></td>
                  <td><span class="badge badge-neutral">${c.modalidad}</span></td>
                  <td style="font-family:var(--font-mono); font-weight:800;">${this.formatCurrency(c.totalAmount)}</td>
                  <td style="width:130px;">
                    <div class="progress-meter-wrap">
                      <span style="font-size:11px; font-weight:700;">${Math.round((c.certifiedAmount / c.totalAmount) * 100)}%</span>
                      <div class="progress-meter">
                        <div class="progress-segment certified" style="width:${(c.certifiedAmount / c.totalAmount) * 100}%;"></div>
                      </div>
                    </div>
                  </td>
                  <td style="font-family:var(--font-mono); color:var(--amber-dark); font-weight:700;">${this.formatCurrency(c.retentionAmount)}</td>
                  <td>
                    <span class="badge ${c.status === 'completed' ? 'badge-success' : 'badge-amber'}">${c.statusLabel}</span>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="App.openContractDetailModal('${c.id}', '${c.kind}')">Ver Instrumento</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  switchContractsTab(tab) {
    DP_DB.state.activeContractsTab = tab;
    this.renderContratosView();
  },

  // ========================================================================
  // VIEW: PRESUPUESTOS & COTIZADOR (CON MEMBRETE OFICIAL)
  // ========================================================================
  renderPresupuestosView() {
    const container = document.getElementById('mainViewContainer');
    const budgets = this.filterByRubro(DP_DB.budgets);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Presupuestos & Cotizador de Obras</h1>
          <p class="page-description">Cálculo de costos directos, cómputos métricos, honorarios de proyecto e impresión con membrete oficial de DP.</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-primary btn-sm" onclick="App.openBudgetPrintModal('pre-001')">+ Nueva Cotización</button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap:24px;">
        ${budgets.map(b => `
          <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span class="badge ${b.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">${b.rubro === 'ingenieria' ? '🏗️ Ingeniería' : '📐 Arquitectura'}</span>
              <span class="badge badge-success">${b.status}</span>
            </div>
            <h3 style="font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:4px;">${b.title}</h3>
            <p style="font-size:12px; color:var(--text-secondary); margin-bottom:16px;"><strong>Comitente:</strong> ${b.client} · Válido hasta: ${b.validUntil}</p>

            <div style="background:var(--bg-app); border-radius:8px; padding:12px; margin-bottom:16px; font-size:12px;">
              <p style="font-weight:700; color:var(--text-secondary); margin-bottom:6px;">Desglose de Ítems Principales:</p>
              <ul style="list-style:none; padding-left:0; display:flex; flex-direction:column; gap:4px;">
                ${b.items.map(i => `
                  <li style="display:flex; justify-content:space-between; color:var(--text-secondary);">
                    <span>• ${i.desc}</span>
                    <strong style="font-family:var(--font-mono); color:var(--text-primary);">${this.formatCurrency(i.price)}</strong>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:14px;">
              <div>
                <span style="font-size:10px; color:var(--text-secondary); text-transform:uppercase;">Monto Total Presupuestado</span>
                <p style="font-size:18px; font-weight:900; font-family:var(--font-mono); color:var(--primary);">${this.formatCurrency(b.total)}</p>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="App.openBudgetPrintModal('${b.id}')">
                <span>🖨️ Membrete Oficial</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  // ========================================================================
  // VIEW: PLANOS & BIM
  // ========================================================================
  renderPlanosView() {
    const container = document.getElementById('mainViewContainer');
    const plans = this.filterByRubro(DP_DB.plans);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Repositorio Técnico: Planos, BIM & Renders</h1>
          <p class="page-description">Archivos técnicos visados, cálculos estructurales CIRSOC y renders fotorrealistas de arquitectura.</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-secondary btn-sm" onclick="App.showToast('Cargador de modelos BIM y memorias activo.')">Subir Archivo</button>
        </div>
      </div>

      <div class="card" style="padding:0; overflow:hidden;">
        <table class="table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Rubro</th>
              <th>Documento Técnico</th>
              <th>Obra Asociada</th>
              <th>Formato</th>
              <th>Revisión</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            ${plans.map(p => `
              <tr>
                <td style="font-family:var(--font-mono); font-weight:700;">${p.code}</td>
                <td><span class="badge ${p.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">${p.rubro === 'ingenieria' ? '🏗️ Ingeniería' : '📐 Arquitectura'}</span></td>
                <td><strong>${p.title}</strong></td>
                <td>${p.project}</td>
                <td><span class="badge badge-neutral">${p.format}</span></td>
                <td><span class="badge badge-success">${p.rev}</span></td>
                <td><button class="btn btn-secondary btn-sm" onclick="App.showToast('Descargando archivo técnico oficial: ${p.code}')">Descargar</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: CRM & COMITENTES
  // ========================================================================
  renderCrmView() {
    const container = document.getElementById('mainViewContainer');
    const leads = this.filterByRubro(DP_DB.crmLeads);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>CRM & Gestión de Comitentes</h1>
          <p class="page-description">Oportunidades de nuevos proyectos de arquitectura y licitaciones de cálculo estructural e ingeniería civil.</p>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:20px;">
        ${leads.map(l => `
          <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <span class="badge ${l.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">${l.rubro === 'ingenieria' ? '🏗️ Ingeniería' : '📐 Arquitectura'}</span>
              <span class="badge badge-primary">${l.stage}</span>
            </div>
            <h3 style="font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:2px;">${l.name}</h3>
            <p style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">${l.company} · ${l.contact}</p>
            <p style="font-size:12px; color:var(--text-primary); background:var(--bg-app); padding:10px; border-radius:8px; margin-bottom:14px;">${l.need}</p>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:14px; font-weight:800; font-family:var(--font-mono); color:var(--primary);">${this.formatCurrency(l.budget)}</span>
              <button class="btn btn-secondary btn-sm" onclick="App.showToast('Abriendo canal directo con ${l.name}')">Contactar</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  // ========================================================================
  // VIEW: AGENDA & INSPECCIONES
  // ========================================================================
  renderAgendaView() {
    const container = document.getElementById('mainViewContainer');
    const events = this.filterByRubro(DP_DB.agendaEvents);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Agenda Técnica & Inspecciones de Obra</h1>
          <p class="page-description">Control de visitas periódicas de dirección, ensayos de compresión de probetas de hormigón y reuniones de comitente.</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-primary btn-sm" onclick="App.openAgendaModal()">+ Agendar Inspección</button>
        </div>
      </div>
      <div class="card">
        <div style="display:flex; flex-direction:column; gap:14px;">
          ${events.map(ev => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:16px; background:var(--bg-app); border-radius:10px; border-left:4px solid ${ev.rubro === 'ingenieria' ? '#2563eb' : '#f59e0b'};">
              <div>
                <span class="badge ${ev.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">${ev.rubro === 'ingenieria' ? '🏗️ Ingeniería Civil' : '📐 Arquitectura'}</span>
                <span class="badge badge-neutral" style="margin-left:6px;">${ev.type}</span>
                <h4 style="font-size:14px; font-weight:800; margin-top:6px;">${ev.title}</h4>
                <p style="font-size:12px; color:var(--text-secondary);">${ev.project} · Responsable: <strong>${ev.responsible}</strong></p>
                <p style="font-size:11.5px; color:var(--text-muted); margin-top:4px;">${ev.notes}</p>
              </div>
              <div style="text-align:right;">
                <span style="font-size:13px; font-weight:800; color:var(--text-primary);">${ev.date}</span>
                <p style="font-size:11.5px; color:var(--text-secondary); font-family:var(--font-mono);">${ev.time}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // ========================================================================
  // VIEW: PERSONAL, COMPRAS, FINANZAS, REPORTES, CONFIGURACIÓN
  // ========================================================================
  renderPersonalView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Personal Técnico, Cuadrillas & ART</h1>
          <p class="page-description">Ingenieros calculistas, proyectistas BIM, capataces y nóminas de operarios con seguros de obra activos.</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-secondary btn-sm" onclick="App.showToast('Verificación de nóminas de ART completada.')">Verificar ART</button>
        </div>
      </div>
      <div class="card" style="padding:0; overflow:hidden;">
        <table class="table">
          <thead>
            <tr><th>Nombre & Especialidad</th><th>Rol Técnico</th><th>Matrícula Profesional</th><th>Cobertura ART</th><th>Estado</th></tr>
          </thead>
          <tbody>
            ${DP_DB.team.map(t => `
              <tr>
                <td><strong>${t.name}</strong><br><span style="font-size:11px; color:var(--text-secondary);">${t.specialty}</span></td>
                <td>${t.role}</td>
                <td><span style="font-family:var(--font-mono); font-weight:700;">${t.matricula}</span></td>
                <td><span class="badge badge-neutral">${t.art}</span></td>
                <td><span class="badge badge-success">${t.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  renderComprasView() {
    const container = document.getElementById('mainViewContainer');
    const items = this.filterByRubro(DP_DB.inventory);

    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Compras & Acopios Estratégicos</h1>
          <p class="page-description">Control de acopios de acero conformado ADN 420, perfilería Aluar, cemento y aislaciones térmicas.</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-primary btn-sm" onclick="App.showToast('Módulo de orden de compra interactivo abierto.')">+ Nueva Orden de Compra</button>
        </div>
      </div>
      <div class="card" style="padding:0; overflow:hidden;">
        <table class="table">
          <thead>
            <tr><th>Material / Insumo</th><th>Rubro</th><th>Obra Destino</th><th>Cantidad Acopiada</th><th>Estado Acopio</th></tr>
          </thead>
          <tbody>
            ${items.map(i => `
              <tr>
                <td><strong>${i.item}</strong></td>
                <td><span class="badge ${i.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">${i.rubro === 'ingenieria' ? '🏗️ Ing' : '📐 Arq'}</span></td>
                <td>${i.project}</td>
                <td style="font-family:var(--font-mono); font-weight:700;">${i.stock}</td>
                <td><span class="badge ${i.alert ? 'badge-amber' : 'badge-success'}">${i.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  renderFinanzasView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Finanzas, Flujo de Fondos & Certificaciones</h1>
          <p class="page-description">Flujo financiero consolidado entre cobros por avance de obra y pagos liquidados a subcontratistas.</p>
        </div>
      </div>
      <div class="stats-grid" style="margin-bottom:24px;">
        <div class="stat-card"><div class="stat-icon success">💰</div><div class="stat-details"><span class="stat-label">Ingresos por Certificados</span><span class="stat-value">$ 282.400.000</span></div></div>
        <div class="stat-card"><div class="stat-icon danger">📤</div><div class="stat-details"><span class="stat-label">Pagos a Subcontratos & Acopios</span><span class="stat-value">$ 198.600.000</span></div></div>
        <div class="stat-card"><div class="stat-icon primary">📈</div><div class="stat-details"><span class="stat-label">Margen Operativo Bruto</span><span class="stat-value">29.6%</span></div></div>
      </div>
      <div class="card">
        <h3 class="card-title" style="margin-bottom:16px;">Resumen de Movimientos Financieros Recientes</h3>
        <table class="table">
          <thead><tr><th>Fecha</th><th>Concepto</th><th>Obra</th><th>Tipo</th><th>Monto</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>2026-09-12</td><td>Cobro Certificado N° 3 Estructura H°A°</td><td>Torre Altos del Parque</td><td><span class="badge badge-success">Ingreso</span></td><td style="font-family:var(--font-mono); font-weight:800;">$ 42.800.000</td><td><span class="badge badge-success">Acreditado</span></td></tr>
            <tr><td>2026-09-08</td><td>Pago Subcontrato Metalúrgica San Martín</td><td>Nave Logística Cuyo</td><td><span class="badge badge-danger">Egreso</span></td><td style="font-family:var(--font-mono); font-weight:800;">$ 18.500.000</td><td><span class="badge badge-success">Liquidado</span></td></tr>
            <tr><td>2026-09-05</td><td>Retención Fondo de Reparo (5%) Carpinterías</td><td>Residencia Vanguardia</td><td><span class="badge badge-amber">Retención</span></td><td style="font-family:var(--font-mono); font-weight:800;">$ 1.207.000</td><td><span class="badge badge-neutral">En Custodia</span></td></tr>
          </tbody>
        </table>
      </div>
    `;
  },

  renderReportesView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Reportes Ejecutivos & Rentabilidad</h1>
          <p class="page-description">Análisis de desvíos en plazos de obra, comparación presupuestado vs real y liquidación de retenciones de fondo de reparo.</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-primary btn-sm" onclick="App.showToast('Informe general consolidado generado con éxito')">Exportar Informe General PDF</button>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title" style="margin-bottom:16px;">Análisis de Desvíos por Obra</h3>
        <table class="table">
          <thead><tr><th>Obra</th><th>Rubro</th><th>Presupuestado</th><th>Costo Real Acumulado</th><th>Desvío Costo</th><th>Desvío Plazo</th></tr></thead>
          <tbody>
            <tr><td>Torre Altos del Parque</td><td>Arquitectura</td><td>$ 185.000.000</td><td>$ 114.200.000</td><td><span style="color:#10b981; font-weight:700;">-2.4% (Eficiente)</span></td><td>Al Día (0 días)</td></tr>
            <tr><td>Nave Logística Cuyo</td><td>Ingeniería</td><td>$ 142.000.000</td><td>$ 68.500.000</td><td><span style="color:#10b981; font-weight:700;">-1.8% (Eficiente)</span></td><td>Al Día (0 días)</td></tr>
            <tr><td>Residencia Vanguardia</td><td>Arquitectura</td><td>$ 94.000.000</td><td>$ 66.800.000</td><td><span style="color:#f59e0b; font-weight:700;">+1.2% (Menor)</span></td><td>+5 días (Lluvias)</td></tr>
          </tbody>
        </table>
      </div>
    `;
  },

  renderConfiguracionView() {
    const container = document.getElementById('mainViewContainer');
    container.innerHTML = `
      <div class="page-header">
        <div class="page-title-wrap">
          <h1>Configuración General & Auditoría</h1>
          <p class="page-description">Parámetros corporativos de DP Ingeniería & Arquitectura y registro de operaciones.</p>
        </div>
      </div>
      <div class="card" style="margin-bottom:24px;">
        <h3 class="card-title" style="margin-bottom:16px;">Datos de la Empresa</h3>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Razón Social</label>
            <input type="text" class="form-control" value="DP INGENIERÍA & ARQUITECTURA S.R.L." readonly>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Dirección Fiscal / Sede Central</label>
            <input type="text" class="form-control" value="Av. del Libertador 4800, Piso 8, Buenos Aires" readonly>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Director General</label>
            <input type="text" class="form-control" value="Ing. Daniel Peralta (Matrícula CPIC N° 18.942)" readonly>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Directora de Arquitectura</label>
            <input type="text" class="form-control" value="Arq. Luciana Benítez (Matrícula CPAU N° 24.110)" readonly>
          </div>
        </div>
      </div>
      <div class="card">
        <h3 class="card-title" style="margin-bottom:16px;">Registro de Auditoría en Tiempo Real</h3>
        <table class="table">
          <thead><tr><th>Usuario</th><th>Rol</th><th>Acción</th><th>Módulo</th><th>Fecha y Hora</th></tr></thead>
          <tbody>
            <tr><td>Ing. Daniel Peralta</td><td><span class="badge badge-primary">Admin</span></td><td>Visó Certificado N° 4 Estructura H°A°</td><td>Contratos</td><td>2026-09-14 20:45</td></tr>
            <tr><td>Arq. Luciana Benítez</td><td><span class="badge badge-neutral">Arquitectura</span></td><td>Aprobó detalle de carpinterías DVH</td><td>Planos BIM</td><td>2026-09-14 18:20</td></tr>
            <tr><td>Ing. Marcos Varela</td><td><span class="badge badge-neutral">Ingeniería</span></td><td>Registró ensayo de ultrasonido en pórticos</td><td>Agenda</td><td>2026-09-14 15:10</td></tr>
          </tbody>
        </table>
      </div>
    `;
  },

  // ========================================================================
  // MODALS LOGIC
  // ========================================================================
  openProjectModal(projectId) {
    const project = DP_DB.projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalCode').textContent = project.code;
    const rubroBadge = document.getElementById('projectModalRubro');
    rubroBadge.className = `badge ${project.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}`;
    rubroBadge.textContent = project.rubro === 'ingenieria' ? '🏗️ Ingeniería' : '📐 Arquitectura';

    const body = document.getElementById('projectModalBody');
    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:20px; background:var(--bg-app); padding:16px; border-radius:var(--radius-md);">
        <div>
          <p style="font-size:12px; color:var(--text-secondary);">Comitente: <strong>${project.client}</strong></p>
          <p style="font-size:12px; color:var(--text-secondary);">Ubicación: <strong>${project.location}</strong></p>
          <p style="font-size:12px; color:var(--text-secondary);">Director Técnico: <strong>${project.director}</strong></p>
        </div>
        <div style="text-align:right;">
          <p style="font-size:12px; color:var(--text-secondary);">Presupuesto Total:</p>
          <p style="font-size:18px; font-weight:900; font-family:var(--font-mono); color:var(--primary);">${this.formatCurrency(project.totalBudget)}</p>
        </div>
      </div>

      <h4 style="font-size:14px; font-weight:800; margin-bottom:12px;">Etapas Constructivas & Hitos:</h4>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
        ${project.stages.map(s => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:var(--bg-card); border:1px solid var(--border-color); border-radius:8px;">
            <span style="font-size:13px; font-weight:700;">${s.name}</span>
            <span class="badge ${s.status === 'completed' ? 'badge-success' : (s.status === 'in_progress' ? 'badge-amber' : 'badge-neutral')}">${s.progress}%</span>
          </div>
        `).join('')}
      </div>

      <h4 style="font-size:14px; font-weight:800; margin-bottom:12px;">Checklist Técnico & Permisos CIRSOC/Municipales:</h4>
      <div style="display:flex; flex-direction:column; gap:8px;">
        ${project.checklist.map(c => `
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; padding:8px 12px; background:var(--bg-app); border-radius:6px;">
            <span>✓ ${c.name}</span>
            <span class="badge ${c.status === 'approved' ? 'badge-success' : 'badge-amber'}">${c.status === 'approved' ? 'Aprobado (' + c.date + ')' : c.date}</span>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('projectModalBackdrop').classList.add('active');
  },

  openContractDetailModal(contractId, kind) {
    const item = kind === 'principal' ? 
      DP_DB.contracts.find(c => c.id === contractId) : 
      DP_DB.subcontracts.find(c => c.id === contractId);

    if (!item) return;

    document.getElementById('contractModalTitle').textContent = item.title;
    document.getElementById('contractModalCode').textContent = item.code;
    document.getElementById('contractModalType').textContent = item.modalidad;

    const body = document.getElementById('contractModalBody');
    body.innerHTML = `
      <div style="display:grid; grid-template-columns: 2fr 1fr; gap:20px; margin-bottom:24px;">
        <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:12px; padding:18px;">
          <span class="badge ${item.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">
            ${item.rubro === 'ingenieria' ? '🏗️ Ingeniería' : '📐 Arquitectura'}
          </span>
          <h4 style="font-size:16px; font-weight:800; margin-top:8px;">${item.party}</h4>
          <p style="font-size:12px; color:var(--text-secondary);">CUIT: <strong>${item.cuit}</strong> · Obra: <strong>${item.projectTitle}</strong></p>
          <div style="margin-top:14px; font-size:12px; color:var(--text-secondary); line-height:1.5;">
            <p><strong>Cláusula de Ajuste:</strong> ${item.adjustmentClause || 'Ajuste mensual según mayores costos'}</p>
            <p><strong>Pólizas & ART:</strong> ${item.insurance || item.artStatus || 'Póliza de Caución en regla'}</p>
          </div>
        </div>

        <div style="background:var(--bg-app); border:1px solid var(--border-color); border-radius:12px; padding:18px; text-align:right;">
          <span style="font-size:11px; color:var(--text-secondary); text-transform:uppercase;">Monto Total Contratado</span>
          <p style="font-size:22px; font-weight:900; font-family:var(--font-mono); color:var(--primary);">${this.formatCurrency(item.totalAmount)}</p>
          <div style="margin-top:10px;">
            <span style="font-size:11px; color:var(--text-secondary);">Fondo de Reparo Retenido (5%):</span>
            <p style="font-size:15px; font-weight:800; font-family:var(--font-mono); color:var(--amber-dark);">${this.formatCurrency(item.retentionAmount)}</p>
          </div>
        </div>
      </div>

      <h4 style="font-size:14px; font-weight:800; margin-bottom:12px;">Historial de Certificaciones de Avance:</h4>
      ${item.certificates ? `
        <table class="table" style="background:var(--bg-card);">
          <thead><tr><th>N° Cert.</th><th>Fecha</th><th>Concepto</th><th>Monto</th><th>Estado</th></tr></thead>
          <tbody>
            ${item.certificates.map(c => `
              <tr>
                <td><strong>Certificado N° ${c.number}</strong></td>
                <td>${c.date}</td>
                <td>${c.desc}</td>
                <td style="font-family:var(--font-mono); font-weight:800;">${this.formatCurrency(c.amount)}</td>
                <td><span class="badge ${c.status === 'Cobrado' ? 'badge-success' : 'badge-amber'}">${c.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : `
        <div style="padding:16px; background:var(--bg-app); border-radius:8px; font-size:13px; color:var(--text-secondary);">
          Certificaciones de gremio supervisadas directamente por Jefatura de Obra. Avance acumulado: <strong>${item.progress}%</strong>.
        </div>
      `}
    `;

    document.getElementById('contractModalBackdrop').classList.add('active');
  },

  openNewContractModal() {
    const projectSelect = document.getElementById('newContractProjectId');
    if (projectSelect) {
      projectSelect.innerHTML = DP_DB.projects.map(p => `
        <option value="${p.id}">${p.title} (${p.rubro === 'ingenieria' ? 'Ingeniería' : 'Arquitectura'})</option>
      `).join('');
    }
    document.getElementById('newContractModalBackdrop').classList.add('active');
  },

  openNewProjectModal() {
    document.getElementById('newProjectModalBackdrop')?.classList.add('active');
  },

  openAgendaModal() {
    const projSelect = document.getElementById('agendaEventProject');
    if (projSelect) {
      projSelect.innerHTML = DP_DB.projects.map(p => `
        <option value="${p.title}">${p.code} - ${p.title}</option>
      `).join('');
    }
    const dateInput = document.getElementById('agendaEventDate');
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }
    document.getElementById('agendaModalBackdrop')?.classList.add('active');
  },

  handleNewContractSubmit(e) {
    e.preventDefault();
    const kind = document.getElementById('newContractKind').value;
    const rubro = document.getElementById('newContractRubro').value;
    const title = document.getElementById('newContractTitle').value;
    const projectId = document.getElementById('newContractProjectId').value;
    const party = document.getElementById('newContractParty').value;
    const gremio = document.getElementById('newContractGremio').value;
    const totalAmount = Number(document.getElementById('newContractAmount').value) || 0;
    const modalidad = document.getElementById('newContractModalidad').value;
    const retentionPercent = Number(document.getElementById('newContractRetention').value) || 5;
    const startDate = document.getElementById('newContractStartDate').value;
    const endDate = document.getElementById('newContractEndDate').value;
    const notes = document.getElementById('newContractNotes').value;

    const project = DP_DB.projects.find(p => p.id === projectId);
    const retentionAmount = Math.round(totalAmount * (retentionPercent / 100));

    if (kind === 'principal') {
      const newContract = {
        id: 'ctr-' + (DP_DB.contracts.length + 1),
        code: `CTR-COM-0${DP_DB.contracts.length + 1}`,
        kind: 'principal',
        title,
        rubro,
        projectId,
        projectTitle: project ? project.title : 'Obra DP',
        party,
        responsible: 'Responsable Legal',
        cuit: '30-XXXXXXXX-X',
        modalidad,
        totalAmount,
        certifiedAmount: 0,
        paidAmount: 0,
        retentionPercent,
        retentionAmount,
        status: 'active',
        statusLabel: 'En Ejecución',
        startDate,
        endDate,
        insurance: notes || 'Póliza de caución en trámite',
        adjustmentClause: 'Índice CAC'
      };
      DP_DB.contracts.unshift(newContract);
      this.showToast(`Contrato principal con ${party} registrado exitosamente.`);
    } else {
      const newSubcontract = {
        id: 'sub-' + (DP_DB.subcontracts.length + 1),
        code: `SUB-GRM-0${DP_DB.subcontracts.length + 1}`,
        kind: 'subcontrato',
        gremio: gremio || 'Gremio Especializado',
        title,
        rubro,
        projectId,
        projectTitle: project ? project.title : 'Obra DP',
        party,
        responsible: 'Responsable Técnico',
        cuit: '30-XXXXXXXX-X',
        modalidad,
        totalAmount,
        certifiedAmount: 0,
        paidAmount: 0,
        retentionPercent,
        retentionAmount,
        status: 'active',
        statusLabel: 'En Ejecución',
        startDate,
        endDate,
        artStatus: 'Cobertura ART verificada con cláusula de no repetición',
        progress: 0
      };
      DP_DB.subcontracts.unshift(newSubcontract);
      this.showToast(`Subcontrato con gremio ${gremio} registrado exitosamente.`);
    }

    document.getElementById('newContractModalBackdrop').classList.remove('active');
    e.target.reset();
    this.renderCurrentView();
  },

  handleNewProjectSubmit(e) {
    e.preventDefault();
    const code = document.getElementById('newProjectCode').value;
    const rubro = document.getElementById('newProjectRubro').value;
    const title = document.getElementById('newProjectTitle').value;
    const client = document.getElementById('newProjectClient').value;
    const location = document.getElementById('newProjectLocation').value;
    const budget = Number(document.getElementById('newProjectBudget').value) || 0;
    const director = document.getElementById('newProjectDirector').value;
    const desc = document.getElementById('newProjectDesc').value;

    const newProj = {
      id: 'proj-' + (DP_DB.projects.length + 1),
      code,
      title,
      rubro,
      rubroLabel: rubro === 'ingenieria' ? 'Ingeniería Civil & Estructuras' : 'Arquitectura & Dirección',
      client,
      location,
      description: desc || 'Proyecto incorporado a la plataforma de gestión DP.',
      status: 'planning',
      statusLabel: 'En Planificación',
      progress: 5,
      targetProgress: 5,
      totalBudget: budget,
      certifiedAmount: 0,
      spentAmount: 0,
      director,
      structuralEngineer: 'Ing. Daniel Peralta',
      startDate: new Date().toISOString().split('T')[0],
      endDate: '2027-12-31',
      stages: [
        { name: 'Cálculo & Proyecto Ejecutivo', progress: 15, status: 'in_progress' },
        { name: 'Tramitación y Permiso de Obra', progress: 0, status: 'pending' },
        { name: 'Fundaciones y Estructura', progress: 0, status: 'pending' }
      ],
      checklist: [
        { name: 'Relevamiento Inicial y Factibilidad', status: 'approved', date: new Date().toISOString().split('T')[0] },
        { name: 'Permiso de Obra Municipal', status: 'pending', date: 'En gestión' }
      ]
    };

    DP_DB.projects.unshift(newProj);
    document.getElementById('newProjectModalBackdrop')?.classList.remove('active');
    e.target.reset();
    this.showToast(`Nueva obra registrada con éxito: ${title}`);
    this.renderCurrentView();
  },

  handleNewAgendaSubmit(e) {
    e.preventDefault();
    const project = document.getElementById('agendaEventProject').value;
    const title = document.getElementById('agendaEventTitle').value;
    const type = document.getElementById('agendaEventType').value;
    const rubro = document.getElementById('agendaEventRubro').value;
    const date = document.getElementById('agendaEventDate').value;
    const time = document.getElementById('agendaEventTime').value;
    const responsible = document.getElementById('agendaEventResponsible').value;
    const notes = document.getElementById('agendaEventNotes').value;

    const newEvt = {
      id: 'evt-' + Date.now().toString().slice(-4),
      title,
      rubro,
      project,
      type: type === 'hormigon' ? 'Ensayo / Hormigonado' : (type === 'inspeccion' ? 'Inspección Municipal' : 'Reunión Técnica'),
      date,
      time,
      responsible,
      notes: notes || 'Hito programado en agenda de obra.'
    };

    DP_DB.agendaEvents.unshift(newEvt);
    document.getElementById('agendaModalBackdrop')?.classList.remove('active');
    e.target.reset();
    this.showToast(`Hito técnico programado para el ${date}`);
    this.renderCurrentView();
  },

  openBudgetPrintModal(budgetId) {
    const budget = DP_DB.budgets.find(b => b.id === budgetId) || DP_DB.budgets[0];
    if (!budget) return;

    const body = document.getElementById('budgetPrintModalBody');
    body.innerHTML = `
      <div class="letterhead-card">
        <div class="letterhead-header">
          <div class="letterhead-brand">
            <img src="assets/dp_logo.png" alt="Logo DP" class="letterhead-logo">
            <div>
              <h2 class="letterhead-title">DP INGENIERÍA & ARQUITECTURA</h2>
              <p class="letterhead-subtitle">Cálculo Estructural CIRSOC · Proyectos Ejecutivos · Obras Civiles · Dirección de Obra</p>
            </div>
          </div>
          <div class="letterhead-meta">
            <p><strong>Cotización N°:</strong> ${budget.code}</p>
            <p><strong>Fecha de Emisión:</strong> ${budget.date}</p>
            <p><strong>Vigencia de Oferta:</strong> ${budget.validUntil}</p>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; margin-bottom:24px; padding-bottom:16px; border-bottom:1px solid #e2e8f0;">
          <div>
            <p style="font-size:12px; color:#64748b; text-transform:uppercase;">Comitente / Cliente:</p>
            <h4 style="font-size:16px; font-weight:800; color:#0f172a;">${budget.client}</h4>
          </div>
          <div style="text-align:right;">
            <p style="font-size:12px; color:#64748b; text-transform:uppercase;">Especialidad / Rubro:</p>
            <span class="badge ${budget.rubro === 'ingenieria' ? 'badge-rubro-ing' : 'badge-rubro-arq'}">
              ${budget.rubro === 'ingenieria' ? '🏗️ Ingeniería Civil' : '📐 Arquitectura'}
            </span>
          </div>
        </div>

        <h3 style="font-size:15px; font-weight:800; margin-bottom:12px;">Detalle de Tareas & Cómputo de Honorarios:</h3>
        <table class="table" style="margin-bottom:24px;">
          <thead>
            <tr><th>Ítem / Tarea</th><th style="text-align:center;">Unidad</th><th style="text-align:right;">Subtotal</th></tr>
          </thead>
          <tbody>
            ${budget.items.map(i => `
              <tr>
                <td><strong>${i.desc}</strong></td>
                <td style="text-align:center; font-family:var(--font-mono);">${i.qty}</td>
                <td style="text-align:right; font-family:var(--font-mono); font-weight:800;">${this.formatCurrency(i.price)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display:flex; justify-content:flex-end; margin-bottom:28px;">
          <div style="min-width:280px; background:#f8fafc; padding:16px; border-radius:8px; border:1px solid #e2e8f0; text-align:right;">
            <span style="font-size:12px; color:#64748b; text-transform:uppercase;">Total Presupuestado:</span>
            <p style="font-size:24px; font-weight:900; font-family:var(--font-mono); color:#1e3a5f;">${this.formatCurrency(budget.total)}</p>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; margin-top:40px; padding-top:20px; border-top:1px solid #e2e8f0; font-size:11px; color:#64748b;">
          <div>
            <p><strong>Estudio Central DP:</strong> Av. del Libertador 4800, Piso 8, Buenos Aires</p>
            <p>Email: contacto@dp-ingenieria-arquitectura.com · Tel: +54 11 4982-3344</p>
          </div>
          <div style="text-align:right;">
            <p>Firma y Aprobación de la Dirección Técnica</p>
            <p><strong>Ing. Daniel Peralta · Arq. Luciana Benítez</strong></p>
          </div>
        </div>
      </div>
    `;

    document.getElementById('budgetPrintModalBackdrop').classList.add('active');
  }
};

// Start application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

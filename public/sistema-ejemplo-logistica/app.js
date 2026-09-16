/**
 * LOGIX TMS & ERP · NÚCLEO DE GESTIÓN LOGÍSTICA MULTI-EMPRESA
 * Desarrollado para Baddgroup (2026)
 */

// =============================================================================
// BASE DE DATOS MOCK MULTI-EMPRESA (ALTA FIDELIDAD LOGÍSTICA ARGENTINA)
// =============================================================================
const LOGIX_COMPANIES = {
  ivarra: {
    id: 'ivarra',
    name: 'IVARRA LOGÍSTICA',
    shortName: 'Ivarra Logística',
    sector: 'MOTOMENSAJERÍA & FLEX',
    theme: 'ivarra',
    logo: 'assets/ivarra-logo.png',
    cuit: '30-71889421-3',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · IVARRA MOTOMENSAJERÍA',
    bannerDesc: 'Monitoreo en tiempo real de cadetes, despachos Flex para Mercado Libre, cobranzas contra entrega y motos en CABA y AMBA.',
    kpis: {
      mes: {
        facturacion: 18940000,
        combustible: 4280000,
        mantenimiento: 1840000,
        seguros: 1150000,
        balance: 11670000,
        margen: 61.6,
        unidadesRuta: '8 / 12',
        unidadesRutaPct: '66.7% operando ahora',
        puntualidad: '98.4%',
        volumen: '1.480 Envíos',
        volumenSub: '100% Flex MercadoLibre',
        ocupacion: '88.5%',
        alertas: '1 Próxima',
        alertasSub: 'VTV Moto A 552 TUV en 18d',
        costoKm: '$ 142 / Km'
      },
      dia: {
        facturacion: 780000,
        combustible: 175000,
        mantenimiento: 62000,
        seguros: 41000,
        balance: 502000,
        margen: 64.3,
        unidadesRuta: '8 / 12',
        unidadesRutaPct: 'En tránsito CABA',
        puntualidad: '99.1%',
        volumen: '74 Envíos',
        volumenSub: 'Despachos del Día',
        ocupacion: '91.0%',
        alertas: '1 Próxima',
        alertasSub: 'Revisión técnica',
        costoKm: '$ 138 / Km'
      },
      semana: {
        facturacion: 4650000,
        combustible: 1050000,
        mantenimiento: 420000,
        seguros: 280000,
        balance: 2900000,
        margen: 62.4,
        unidadesRuta: '8 / 12',
        unidadesRutaPct: 'Promedio semanal',
        puntualidad: '98.7%',
        volumen: '390 Envíos',
        volumenSub: 'E-commerce Flex',
        ocupacion: '89.2%',
        alertas: '1 Próxima',
        alertasSub: 'VTV preventiva',
        costoKm: '$ 140 / Km'
      },
      anio: {
        facturacion: 214000000,
        combustible: 49200000,
        mantenimiento: 21500000,
        seguros: 13800000,
        balance: 129500000,
        margen: 60.5,
        unidadesRuta: '8 / 12',
        unidadesRutaPct: 'Capacidad activa',
        puntualidad: '98.2%',
        volumen: '17.200 Envíos',
        volumenSub: 'Total acumulado',
        ocupacion: '87.8%',
        alertas: '1 Próxima',
        alertasSub: 'Plan anual',
        costoKm: '$ 145 / Km'
      }
    },
    costStructure: [
      { label: 'Margen Neto Superavitario', pct: 61.6, val: 11670000, color: '#10b981' },
      { label: 'Combustible (Nafta Súper)', pct: 22.6, val: 4280000, color: '#f59e0b' },
      { label: 'Mantenimiento & Cubiertas', pct: 9.7, val: 1840000, color: '#8b5cf6' },
      { label: 'Seguros & Razón Social', pct: 6.1, val: 1150000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 14200000, viajes: 1120 },
      { mes: 'May', fact: 15600000, viajes: 1240 },
      { mes: 'Jun', fact: 16800000, viajes: 1310 },
      { mes: 'Jul', fact: 17400000, viajes: 1390 },
      { mes: 'Ago', fact: 18100000, viajes: 1420 },
      { mes: 'Sep', fact: 18940000, viajes: 1480 }
    ],
    vehiculos: [
      { id: 'veh-1', patente: 'A 192 JKL', marca: 'Honda CG 150 Titan', tipo: 'Moto Urbana c/ Baúl 45L', anio: 2023, capacidadTn: 0.035, km: 19420, estado: 'ocupado', chofer: 'Carlos Fernández', consumo: '38 Km/L', vtv: '2027-02-15', seguro: 'Al Día (Rivadavia)' },
      { id: 'veh-2', patente: 'A 283 MNP', marca: 'Yamaha FZ-S FI 150', tipo: 'Moto Inyección c/ Alforjas Reforzadas', anio: 2024, capacidadTn: 0.035, km: 11200, estado: 'ocupado', chofer: 'Lucas Benítez', consumo: '36 Km/L', vtv: '2027-06-20', seguro: 'Al Día (Sancor)' },
      { id: 'veh-3', patente: 'A 419 QRS', marca: 'Honda Wave 110S', tipo: 'Moto Ligera Envíos Flex Express', anio: 2024, capacidadTn: 0.025, km: 8400, estado: 'ocupado', chofer: 'Franco Morales', consumo: '45 Km/L', vtv: '2027-08-10', seguro: 'Al Día (La Segunda)' },
      { id: 'veh-4', patente: 'A 552 TUV', marca: 'Suzuki GN 125F', tipo: 'Moto Clásica c/ Caja Térmica 40L', anio: 2022, capacidadTn: 0.030, km: 28900, estado: 'mantenimiento', chofer: 'Sin chofer', consumo: '35 Km/L', vtv: '2026-10-04', seguro: 'Al Día (Federación)' },
      { id: 'veh-5', patente: 'A 703 WXY', marca: 'Honda XR 150L', tipo: 'Moto On-Off Todo Terreno Carga', anio: 2023, capacidadTn: 0.040, km: 16800, estado: 'ocupado', chofer: 'Matías Rossi', consumo: '34 Km/L', vtv: '2027-01-28', seguro: 'Al Día (Rivadavia)' },
      { id: 'veh-6', patente: 'A 890 ZAB', marca: 'Benelli TNT 15', tipo: 'Moto Paquetera Reforzada', anio: 2023, capacidadTn: 0.035, km: 21300, estado: 'ocupado', chofer: 'Rodrigo Almirón', consumo: '36 Km/L', vtv: '2027-03-12', seguro: 'Al Día (Sancor)' },
      { id: 'veh-7', patente: 'A 912 CDE', marca: 'Bajaj Rouser NS 200', tipo: 'Moto de Enlace Rápido Autopista', anio: 2024, capacidadTn: 0.040, km: 9200, estado: 'ocupado', chofer: 'Esteban Navarro', consumo: '32 Km/L', vtv: '2027-09-15', seguro: 'Al Día (La Segunda)' },
      { id: 'veh-8', patente: 'A 341 FGH', marca: 'Motomel S2 150', tipo: 'Moto Reparto Urbano Flex', anio: 2022, capacidadTn: 0.030, km: 34100, estado: 'ocupado', chofer: 'Agustín Pereyra', consumo: '35 Km/L', vtv: '2026-12-19', seguro: 'Al Día (Rivadavia)' },
      { id: 'veh-9', patente: 'A 604 IJK', marca: 'Keller Miracle 150', tipo: 'Moto Utilitaria Cadetería', anio: 2023, capacidadTn: 0.030, km: 18100, estado: 'disponible', chofer: 'Sin chofer', consumo: '37 Km/L', vtv: '2027-04-22', seguro: 'Al Día (Sancor)' },
      { id: 'veh-10', patente: 'A 115 LMN', marca: 'Honda CG 150 Titan', tipo: 'Moto de Apoyo y Relevo', anio: 2023, capacidadTn: 0.035, km: 22400, estado: 'disponible', chofer: 'Sin chofer', consumo: '38 Km/L', vtv: '2027-05-18', seguro: 'Al Día (Rivadavia)' },
      { id: 'veh-11', patente: 'A 782 OPQ', marca: 'Yamaha YBR 125', tipo: 'Moto Trámite Bancario Express', anio: 2022, capacidadTn: 0.025, km: 31000, estado: 'disponible', chofer: 'Sin chofer', consumo: '40 Km/L', vtv: '2026-11-30', seguro: 'Al Día (La Segunda)' },
      { id: 'veh-12', patente: 'A 499 RST', marca: 'Zanella ZB 110', tipo: 'Moto Back-up Local Base', anio: 2021, capacidadTn: 0.020, km: 27500, estado: 'ocupado', chofer: 'Lautaro Maidana', consumo: '46 Km/L', vtv: '2027-07-08', seguro: 'Al Día (Federación)' }
    ],
    rutas: [
      { id: 'FLX-2026-081', cliente: 'ElectroNorte Oficial (MeLi)', chofer: 'Carlos Fernández', vehiculo: 'A 192 JKL (Honda CG 150)', origen: 'Depósito Villa Crespo', destino: 'Belgrano / Núñez (CABA)', carga: 'Envíos Flex Mercado Libre (28 paq.)', monto: 78000, progreso: 82, estado: 'en_transito', eta: '18:15 hs', velocidad: 48, lat: -34.562, lng: -58.456 },
      { id: 'FLX-2026-082', cliente: 'FarmaSalud 24 Sucursales', chofer: 'Lucas Benítez', vehiculo: 'A 283 MNP (Yamaha FZ 150)', origen: 'Laboratorio Microcentro', destino: 'Vicente López / Olivos', carga: 'Medicamentos & Recetas Frías', monto: 92000, progreso: 65, estado: 'en_transito', eta: '18:45 hs', velocidad: 54, lat: -34.531, lng: -58.489 },
      { id: 'FLX-2026-083', cliente: 'Bazar & Hogar Deco SRL', chofer: 'Franco Morales', vehiculo: 'A 419 QRS (Honda Wave)', origen: 'Centro Distribución Once', destino: 'Palermo Soho / Hollywood', carga: 'Flex TiendaNube (19 paq.)', monto: 64000, progreso: 45, estado: 'en_transito', eta: '19:20 hs', velocidad: 42, lat: -34.588, lng: -58.428 },
      { id: 'EXP-2026-084', cliente: 'Estudio Jurídico Marval', chofer: 'Matías Rossi', vehiculo: 'A 703 WXY (Honda XR 150)', origen: 'Catalinas Norte CABA', destino: 'Tribunales de San Isidro', carga: 'Expedientes & Certificaciones', monto: 58000, progreso: 90, estado: 'en_transito', eta: '17:50 hs', velocidad: 58, lat: -34.471, lng: -58.528 },
      { id: 'FLX-2026-085', cliente: 'Moda Urbana Outlet', chofer: 'Rodrigo Almirón', vehiculo: 'A 890 ZAB (Benelli TNT 15)', origen: 'Depósito Flores CABA', destino: 'Caballito / Almagro', carga: 'Indumentaria Flex MeLi (34 paq.)', monto: 85000, progreso: 30, estado: 'en_transito', eta: '20:10 hs', velocidad: 39, lat: -34.619, lng: -58.441 },
      { id: 'EXP-2026-086', cliente: 'Repuestos Express Warnes', chofer: 'Esteban Navarro', vehiculo: 'A 912 CDE (Bajaj Rouser)', origen: 'Av. Warnes 1420', destino: 'Talleres Zona Norte Tigre', carga: 'Inyectores y Bobinas de Encendido', monto: 110000, progreso: 55, estado: 'en_transito', eta: '19:00 hs', velocidad: 62, lat: -34.426, lng: -58.578 },
      { id: 'FLX-2026-087', cliente: 'TechCell Accesorios', chofer: 'Agustín Pereyra', vehiculo: 'A 341 FGH (Motomel S2)', origen: 'Depósito Lanús Oeste', destino: 'Barracas / Parque Patricios', carga: 'Fundas y Vidrios Templados Flex', monto: 69000, progreso: 70, estado: 'en_transito', eta: '18:30 hs', velocidad: 44, lat: -34.645, lng: -58.389 },
      { id: 'EXP-2026-088', cliente: 'Laboratorios Raffo CABA', chofer: 'Lautaro Maidana', vehiculo: 'A 499 RST (Zanella ZB)', origen: 'Sede Saavedra', destino: 'Clínica Olivos & Sanatorio Norte', carga: 'Muestras Médicas Urgentes', monto: 52000, progreso: 15, estado: 'en_transito', eta: '20:45 hs', velocidad: 38, lat: -34.549, lng: -58.498 }
    ],
    choferes: [
      { id: 'ch-1', nombre: 'Carlos Fernández', dni: '38.412.905', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-04-18', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 192 JKL', viajes: 412, calif: '4.9 ★' },
      { id: 'ch-2', nombre: 'Lucas Benítez', dni: '39.814.220', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2026-11-30', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 283 MNP', viajes: 380, calif: '5.0 ★' },
      { id: 'ch-3', nombre: 'Franco Morales', dni: '41.220.104', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-08-12', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 419 QRS', viajes: 290, calif: '4.8 ★' },
      { id: 'ch-4', nombre: 'Matías Rossi', dni: '37.605.819', licencia: 'A3 - Motovehículos más de 150cc', vencimiento: '2027-03-05', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 703 WXY', viajes: 520, calif: '5.0 ★' },
      { id: 'ch-5', nombre: 'Rodrigo Almirón', dni: '40.119.542', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2026-12-22', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 890 ZAB', viajes: 310, calif: '4.9 ★' },
      { id: 'ch-6', nombre: 'Esteban Navarro', dni: '36.904.318', licencia: 'A3 - Motovehículos más de 150cc', vencimiento: '2027-06-19', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 912 CDE', viajes: 460, calif: '4.9 ★' },
      { id: 'ch-7', nombre: 'Agustín Pereyra', dni: '42.088.115', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-01-14', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 341 FGH', viajes: 180, calif: '4.7 ★' },
      { id: 'ch-8', nombre: 'Lautaro Maidana', dni: '43.190.201', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-09-02', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 499 RST', viajes: 145, calif: '4.8 ★' }
    ],
    mantenimiento: [
      { id: 'm-1', moto: 'A 552 TUV (Suzuki GN 125)', tarea: 'Service Completo: Aceite Motul 5100, Filtro y Frenos', fecha: '2026-09-14', km: 28900, taller: 'Mecánica Integral Warnes', costo: 64000, estado: 'En Proceso' },
      { id: 'm-2', moto: 'A 192 JKL (Honda CG 150)', tarea: 'Cambio de Kit Transmisión (Cadena DID, Piñón, Corona)', fecha: '2026-09-08', km: 19000, taller: 'MotoService Palermo', costo: 78000, estado: 'Finalizado' },
      { id: 'm-3', moto: 'A 341 FGH (Motomel S2)', tarea: 'Reemplazo de Cubierta Trasera Pirelli City Demon', fecha: '2026-09-02', km: 33800, taller: 'Neumáticos San Martín', costo: 92000, estado: 'Finalizado' }
    ],
    agenda: [
      { id: 'ag-1', fecha: '2026-09-16', hora: '13:30', titulo: 'Ronda Flex Colecta 1: MercadoLibre Villa Crespo', unidad: 'Motos #1, #3, #5', prioridad: 'Alta' },
      { id: 'ag-2', fecha: '2026-09-16', hora: '16:00', titulo: 'Ronda Flex Colecta 2: Once & Microcentro', unidad: 'Motos #2, #6, #7', prioridad: 'Alta' },
      { id: 'ag-3', fecha: '2026-09-18', hora: '09:00', titulo: 'VTV Obligatoria Turno Planta Vicente López', unidad: 'A 552 TUV (Suzuki GN)', prioridad: 'Urgente' }
    ],
    clientes: [
      { id: 'c-1', razonSocial: 'ElectroNorte Oficial SRL', cuit: '30-71449820-1', contacto: 'Mariano Castro', tel: '11 5623-2314', localidad: 'Villa Crespo, CABA', viajes: 320, facturado: 4890000, saldo: '$ 0 (Al Día)' },
      { id: 'c-2', razonSocial: 'FarmaSalud 24 Distribuidora', cuit: '33-70981245-9', contacto: 'Valeria Gómez', tel: '11 4433-2211', localidad: 'Microcentro, CABA', viajes: 280, facturado: 3950000, saldo: '$ 0 (Al Día)' },
      { id: 'c-3', razonSocial: 'Bazar & Hogar Deco Argentina', cuit: '30-71689012-4', contacto: 'Esteban Domínguez', tel: '11 3322-1100', localidad: 'Once, CABA', viajes: 410, facturado: 5120000, saldo: '$ 124.000 (Cta Cte)' },
      { id: 'c-4', razonSocial: 'Estudio Jurídico Marval & Asoc.', cuit: '30-68912344-2', contacto: 'Dra. Patricia Soria', tel: '11 5544-3322', localidad: 'Retiro, CABA', viajes: 140, facturado: 1820000, saldo: '$ 0 (Al Día)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Liquidación Flex MercadoLibre Lote #418', categoria: 'Cobro Fletes Flex', comprobante: 'FC-A 0001-0004128', metodo: 'Transferencia MercadoPago', monto: 1420000 },
      { fecha: '2026-09-15', tipo: 'egreso', desc: 'Combustible Nafta Súper Flota YPF Ruta', categoria: 'Combustible', comprobante: 'TK-00891234', metodo: 'Tarjeta YPF en Ruta', monto: 215000 },
      { fecha: '2026-09-14', tipo: 'ingreso', desc: 'Cobranzas en Destino (Contra Reembolso Efectivo)', categoria: 'Flete Express', comprobante: 'REC-002194', metodo: 'Efectivo Rendido', monto: 480000 },
      { fecha: '2026-09-14', tipo: 'egreso', desc: 'Service Oficial Moto A 552 TUV Taller Warnes', categoria: 'Taller Mecánico', comprobante: 'FC-B 0003-0001201', metodo: 'Transferencia Bancaria', monto: 64000 }
    ]
  },

  ztrans: {
    id: 'ztrans',
    name: 'ZTRANS TRANSPORTE',
    shortName: 'Ztrans Pesados',
    sector: 'CARGA PESADA & LARGA DISTANCIA',
    theme: 'ztrans',
    logo: 'assets/ztrans-logo.png',
    cuit: '30-70941203-8',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · ZTRANS TRANSPORTE FEDERAL',
    bannerDesc: 'Monitoreo de semirremolques, bateas, tolvas cerealeras y cargas pesadas sobre corredores viales nacionales.',
    kpis: {
      mes: {
        facturacion: 84600000,
        combustible: 28400000,
        mantenimiento: 9200000,
        seguros: 5100000,
        balance: 41900000,
        margen: 49.5,
        unidadesRuta: '10 / 14',
        unidadesRutaPct: '71.4% en rutas federales',
        puntualidad: '97.2%',
        volumen: '380 Tn Carga',
        volumenSub: 'Semirremolques Sider',
        ocupacion: '94.2%',
        alertas: '2 Próximas',
        alertasSub: 'R.U.T.A. Semirremolque AF 342',
        costoKm: '$ 890 / Km'
      },
      dia: {
        facturacion: 3450000,
        combustible: 1120000,
        mantenimiento: 340000,
        seguros: 190000,
        balance: 1800000,
        margen: 52.1,
        unidadesRuta: '10 / 14',
        unidadesRutaPct: 'En tránsito',
        puntualidad: '98.0%',
        volumen: '42 Tn',
        volumenSub: 'Despachos del Día',
        ocupacion: '95.0%',
        alertas: '2 Próximas',
        alertasSub: 'Inspección técnica',
        costoKm: '$ 880 / Km'
      },
      semana: {
        facturacion: 21800000,
        combustible: 7200000,
        mantenimiento: 2300000,
        seguros: 1300000,
        balance: 11000000,
        margen: 50.4,
        unidadesRuta: '10 / 14',
        unidadesRutaPct: 'Promedio semanal',
        puntualidad: '97.5%',
        volumen: '115 Tn',
        volumenSub: 'Corredores viales',
        ocupacion: '93.8%',
        alertas: '2 Próximas',
        alertasSub: 'Revisión técnica',
        costoKm: '$ 885 / Km'
      },
      anio: {
        facturacion: 980000000,
        combustible: 320000000,
        mantenimiento: 105000000,
        seguros: 58000000,
        balance: 497000000,
        margen: 50.7,
        unidadesRuta: '10 / 14',
        unidadesRutaPct: 'Flota operativa',
        puntualidad: '96.8%',
        volumen: '4.800 Tn',
        volumenSub: 'Acumulado anual',
        ocupacion: '92.5%',
        alertas: '2 Próximas',
        alertasSub: 'Plan preventivo',
        costoKm: '$ 910 / Km'
      }
    },
    costStructure: [
      { label: 'Margen Neto Consolidado', pct: 49.5, val: 41900000, color: '#10b981' },
      { label: 'Combustible (Gasoil Grado 3)', pct: 33.6, val: 28400000, color: '#ef4444' },
      { label: 'Taller, Neumáticos & Repuestos', pct: 10.9, val: 9200000, color: '#8b5cf6' },
      { label: 'Seguros de Carga & R.U.T.A.', pct: 6.0, val: 5100000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 68000000, viajes: 94 },
      { mes: 'May', fact: 72500000, viajes: 102 },
      { mes: 'Jun', fact: 76000000, viajes: 110 },
      { mes: 'Jul', fact: 79200000, viajes: 118 },
      { mes: 'Ago', fact: 82100000, viajes: 124 },
      { mes: 'Sep', fact: 84600000, viajes: 132 }
    ],
    vehiculos: [
      { id: 'veh-z1', patente: 'AF 342 LK', marca: 'Scania R450 6x2', tipo: 'Tractor + Semirremolque Sider 28Tn', anio: 2023, capacidadTn: 28.0, km: 148200, estado: 'ocupado', chofer: 'Roberto Gómez', consumo: '31 L / 100Km', vtv: '2027-04-15', seguro: 'Al Día (Allianz)' },
      { id: 'veh-z2', patente: 'AE 918 MM', marca: 'Mercedes-Benz Actros 2645', tipo: 'Tractor + Batea Volcadora 30Tn', anio: 2022, capacidadTn: 30.0, km: 210400, estado: 'ocupado', chofer: 'Carlos Rossi', consumo: '33 L / 100Km', vtv: '2026-11-20', seguro: 'Al Día (Sancor)' },
      { id: 'veh-z3', patente: 'AC 512 PK', marca: 'Iveco Tector 170E28', tipo: 'Camión Chasis Carga General 14Tn', anio: 2021, capacidadTn: 14.0, km: 285000, estado: 'disponible', chofer: 'Sin chofer', consumo: '26 L / 100Km', vtv: '2027-08-30', seguro: 'Al Día (La Segunda)' },
      { id: 'veh-z4', patente: 'AD 881 BB', marca: 'Volvo FH 500 Globetrotter', tipo: 'Tractor Bitren Carga Pesada 35Tn', anio: 2023, capacidadTn: 35.0, km: 112000, estado: 'ocupado', chofer: 'Marcos Benítez', consumo: '35 L / 100Km', vtv: '2027-05-14', seguro: 'Al Día (Allianz)' },
      { id: 'veh-z5', patente: 'AF 703 QR', marca: 'Volkswagen Constellation 19.320', tipo: 'Tractor + Semirremolque Baranda Volcable', anio: 2022, capacidadTn: 26.0, km: 179000, estado: 'ocupado', chofer: 'Facundo Morales', consumo: '30 L / 100Km', vtv: '2027-01-20', seguro: 'Al Día (Sancor)' }
    ],
    rutas: [
      { id: 'RUT-2026-101', cliente: 'Techint S.A. - Tenaris', chofer: 'Roberto Gómez', vehiculo: 'AF 342 LK (Scania R450)', origen: 'Campana (Buenos Aires)', destino: 'Añelo (Vaca Muerta, Nqn)', carga: 'Tubos sin Costura para Gasoducto (26 Tn)', monto: 4850000, progreso: 68, estado: 'en_transito', eta: 'Mañana 07:30 hs', velocidad: 78, lat: -37.812, lng: -65.234 },
      { id: 'RUT-2026-102', cliente: 'Unilever de Argentina', chofer: 'Carlos Rossi', vehiculo: 'AE 918 MM (Mercedes Actros)', origen: 'Parque Industrial Pacheco', destino: 'Centro Distribución Córdoba', carga: 'Pallets Productos Consumo Masivo', monto: 2950000, progreso: 85, estado: 'en_transito', eta: 'Hoy 22:15 hs', velocidad: 82, lat: -31.845, lng: -63.789 },
      { id: 'RUT-2026-103', cliente: 'Siderca Cargas Industriales', chofer: 'Marcos Benítez', vehiculo: 'AD 881 BB (Volvo FH 500)', origen: 'Zárate Puerto', destino: 'Parque Industrial Mendoza', carga: 'Perfiles de Acero Laminado (32 Tn)', monto: 4400000, progreso: 42, estado: 'en_transito', eta: 'Mañana 14:00 hs', velocidad: 75, lat: -33.912, lng: -66.120 }
    ],
    choferes: [
      { id: 'ch-z1', nombre: 'Roberto Gómez', dni: '28.450.119', licencia: 'E1 - Semirremolques y Articulados', vencimiento: '2027-04-15', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 342 LK', viajes: 580, calif: '5.0 ★' },
      { id: 'ch-z2', nombre: 'Carlos Rossi', dni: '31.229.804', licencia: 'E1 - Cargas Generales & LiNTI', vencimiento: '2026-11-20', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 918 MM', viajes: 620, calif: '4.9 ★' },
      { id: 'ch-z3', nombre: 'Marcos Benítez', dni: '35.610.420', licencia: 'E2 - Bitrenes y Cargas Especiales', vencimiento: '2027-08-30', telefono: '5491123974066', estado: 'En Ruta', moto: 'AD 881 BB', viajes: 490, calif: '5.0 ★' }
    ],
    mantenimiento: [
      { id: 'mz-1', moto: 'AF 342 LK (Scania R450)', tarea: 'Service Oficial 150.000 Km: Aceite Sintético Scania LDF-4', fecha: '2026-09-10', km: 148200, taller: 'Scania Concesionario Pacheco', costo: 890000, estado: 'Finalizado' },
      { id: 'mz-2', moto: 'AE 918 MM (Mercedes Actros)', tarea: 'Calibración Sistema de Frenos ABS/EBS y Zapatas', fecha: '2026-09-04', km: 209000, taller: 'Taller Frenos Camiones Ruta 9', costo: 420000, estado: 'Finalizado' }
    ],
    agenda: [
      { id: 'agz-1', fecha: '2026-09-17', hora: '06:00', titulo: 'Salida Bitren Carga Tenaris a Vaca Muerta', unidad: 'AD 881 BB', prioridad: 'Alta' },
      { id: 'agz-2', fecha: '2026-09-19', hora: '10:00', titulo: 'Inspección Técnica y Certificado R.U.T.A.', unidad: 'AF 342 LK', prioridad: 'Urgente' }
    ],
    clientes: [
      { id: 'cz-1', razonSocial: 'Techint S.A. / Tenaris', cuit: '30-50001234-8', contacto: 'Ing. Marcelo Varela', tel: '11 2397-4066', localidad: 'Campana, BsAs', viajes: 84, facturado: 38200000, saldo: '$ 0 (Al Día)' },
      { id: 'cz-2', razonSocial: 'Unilever de Argentina SA', cuit: '30-50123984-2', contacto: 'Lic. Laura Benítez', tel: '11 2397-4066', localidad: 'Pacheco, BsAs', viajes: 65, facturado: 26400000, saldo: '$ 0 (Al Día)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Pago Flete Internacional / Vaca Muerta Tenaris', categoria: 'Cobro Fletes', comprobante: 'FC-A 0005-0001890', metodo: 'Transferencia Bancaria', monto: 4850000 },
      { fecha: '2026-09-14', tipo: 'egreso', desc: 'Combustible Diésel YPF en Ruta 28.000 Litros', categoria: 'Combustible', comprobante: 'FC-A YPF-8910', metodo: 'Cuenta Corriente YPF', monto: 3200000 }
    ]
  },

  hermes: {
    id: 'hermes',
    name: 'HERMES LOGÍSTICA',
    shortName: 'Hermes Integral',
    sector: 'DISTRIBUCIÓN B2B & HUB CROSS-DOCKING',
    theme: 'hermes',
    logo: 'assets/hermes-logo.svg',
    cuit: '33-71239845-9',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · HERMES HUB MULTIMODAL',
    bannerDesc: 'Distribución capilar, paquetería corporate, trazabilidad de bultos por código de barras y flota de utilitarios.',
    kpis: {
      mes: {
        facturacion: 36800000,
        combustible: 9400000,
        mantenimiento: 3200000,
        seguros: 1950000,
        balance: 22250000,
        margen: 60.4,
        unidadesRuta: '9 / 13',
        unidadesRutaPct: '69.2% en reparto activo',
        puntualidad: '98.9%',
        volumen: '4.200 Bultos',
        volumenSub: 'Cross-docking B2B',
        ocupacion: '91.2%',
        alertas: '1 Próxima',
        alertasSub: 'Service 40k Sprinter AF 703',
        costoKm: '$ 285 / Km'
      },
      dia: {
        facturacion: 1450000,
        combustible: 380000,
        mantenimiento: 120000,
        seguros: 75000,
        balance: 875000,
        margen: 60.3,
        unidadesRuta: '9 / 13',
        unidadesRutaPct: 'En reparto',
        puntualidad: '99.2%',
        volumen: '185 Bultos',
        volumenSub: 'Despachos del Día',
        ocupacion: '92.0%',
        alertas: '1 Próxima',
        alertasSub: 'Plan preventivo',
        costoKm: '$ 280 / Km'
      },
      semana: {
        facturacion: 9100000,
        combustible: 2350000,
        mantenimiento: 780000,
        seguros: 480000,
        balance: 5490000,
        margen: 60.3,
        unidadesRuta: '9 / 13',
        unidadesRutaPct: 'Semana en curso',
        puntualidad: '98.8%',
        volumen: '980 Bultos',
        volumenSub: 'Envíos corporativos',
        ocupacion: '90.5%',
        alertas: '1 Próxima',
        alertasSub: 'Mantenimiento',
        costoKm: '$ 282 / Km'
      },
      anio: {
        facturacion: 418000000,
        combustible: 108000000,
        mantenimiento: 37000000,
        seguros: 22000000,
        balance: 251000000,
        margen: 60.0,
        unidadesRuta: '9 / 13',
        unidadesRutaPct: 'Flota operativa',
        puntualidad: '98.5%',
        volumen: '48.000 Bultos',
        volumenSub: 'Total anual',
        ocupacion: '89.5%',
        alertas: '1 Próxima',
        alertasSub: 'Programación',
        costoKm: '$ 290 / Km'
      }
    },
    costStructure: [
      { label: 'Margen Operativo Neto', pct: 60.4, val: 22250000, color: '#10b981' },
      { label: 'Combustible Diésel / Nafta', pct: 25.5, val: 9400000, color: '#06b6d4' },
      { label: 'Mantenimiento Furgones & Utilitarios', pct: 8.7, val: 3200000, color: '#8b5cf6' },
      { label: 'Seguros de Mercadería en Tránsito', pct: 5.4, val: 1950000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 28500000, viajes: 320 },
      { mes: 'May', fact: 30200000, viajes: 345 },
      { mes: 'Jun', fact: 32400000, viajes: 370 },
      { mes: 'Jul', fact: 34100000, viajes: 395 },
      { mes: 'Ago', fact: 35600000, viajes: 410 },
      { mes: 'Sep', fact: 36800000, viajes: 430 }
    ],
    vehiculos: [
      { id: 'veh-h1', patente: 'AF 703 QR', marca: 'Mercedes-Benz Sprinter 516', tipo: 'Furgón Extra Largo 14 m3', anio: 2023, capacidadTn: 2.8, km: 38200, estado: 'ocupado', chofer: 'Damián Soria', consumo: '11 L / 100Km', vtv: '2027-03-18', seguro: 'Al Día (Rivadavia)' },
      { id: 'veh-h2', patente: 'AD 912 BB', marca: 'Iveco Daily 70C17', tipo: 'Furgón Paquetero c/ Rampa Hidráulica', anio: 2022, capacidadTn: 4.2, km: 64100, estado: 'ocupado', chofer: 'Gonzalo Silva', consumo: '13 L / 100Km', vtv: '2026-12-10', seguro: 'Al Día (Sancor)' },
      { id: 'veh-h3', patente: 'AE 441 CC', marca: 'Renault Master L2H2', tipo: 'Furgón Distribución Urbana 10 m3', anio: 2024, capacidadTn: 1.8, km: 19400, estado: 'ocupado', chofer: 'Federico Rivas', consumo: '9.5 L / 100Km', vtv: '2027-08-22', seguro: 'Al Día (La Segunda)' }
    ],
    rutas: [
      { id: 'HER-2026-201', cliente: 'Distribuidora Mayorista San Martín', chofer: 'Damián Soria', vehiculo: 'AF 703 QR (Mercedes Sprinter)', origen: 'Hub Central San Martín', destino: 'Circuito 14 Puntos CABA Norte', carga: 'Bazar, Retail & Electrodomésticos', monto: 340000, progreso: 72, estado: 'en_transito', eta: '18:50 hs', velocidad: 52, lat: -34.571, lng: -58.490 },
      { id: 'HER-2026-202', cliente: 'Logística Retail Argentina SA', chofer: 'Gonzalo Silva', vehiculo: 'AD 912 BB (Iveco Daily)', origen: 'Depósito Pacheco', destino: 'La Plata Hipermercados', carga: 'Lote Alimentos & Bebidas (3.8 Tn)', monto: 490000, progreso: 50, estado: 'en_transito', eta: '19:40 hs', velocidad: 74, lat: -34.821, lng: -58.012 }
    ],
    choferes: [
      { id: 'ch-h1', nombre: 'Damián Soria', dni: '34.810.992', licencia: 'B2 - Utilitarios y Furgones hasta 3.5Tn', vencimiento: '2027-05-18', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 703 QR', viajes: 420, calif: '4.9 ★' },
      { id: 'ch-h2', nombre: 'Gonzalo Silva', dni: '32.419.004', licencia: 'C1 - Camiones Livianos hasta 12Tn', vencimiento: '2026-11-14', telefono: '5491123974066', estado: 'En Ruta', moto: 'AD 912 BB', viajes: 510, calif: '5.0 ★' }
    ],
    mantenimiento: [
      { id: 'mh-1', moto: 'AF 703 QR (Mercedes Sprinter)', tarea: 'Service 40.000 Km: Filtros de Aire, Combustible y Aceite', fecha: '2026-09-12', km: 38200, taller: 'Mercedes-Benz Oficial San Martín', costo: 240000, estado: 'Programado' }
    ],
    agenda: [
      { id: 'agh-1', fecha: '2026-09-16', hora: '14:00', titulo: 'Salida Consolidada La Plata Reparto Nocturno', unidad: 'AD 912 BB', prioridad: 'Alta' }
    ],
    clientes: [
      { id: 'ch-1', razonSocial: 'Distribuidora Mayorista San Martín', cuit: '30-70891234-9', contacto: 'Esteban Domínguez', tel: '11 2397-4066', localidad: 'San Martín, BsAs', viajes: 180, facturado: 14200000, saldo: '$ 0 (Al Día)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Facturación Mensual Reparto Mayorista San Martín', categoria: 'Cobro Fletes B2B', comprobante: 'FC-A 0002-0003180', metodo: 'Transferencia Bancaria', monto: 1840000 }
    ]
  },

  rosario: {
    id: 'rosario',
    name: 'ROSARIO LOGÍSTICA',
    shortName: 'Rosario Industrial',
    sector: 'CORREDOR LITORAL & AGROEXPORTADOR',
    theme: 'rosario',
    logo: 'assets/rosario-logo.png',
    cuit: '30-71650982-4',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · ROSARIO & PUERTOS DEL LITORAL',
    bannerDesc: 'Operación sobre Terminal 6 San Lorenzo, Parque Industrial Alvear, polo siderúrgico y transporte agropecuario.',
    kpis: {
      mes: {
        facturacion: 62400000,
        combustible: 21800000,
        mantenimiento: 6900000,
        seguros: 3800000,
        balance: 29900000,
        margen: 47.9,
        unidadesRuta: '8 / 11',
        unidadesRutaPct: '72.7% en puertos y rutas',
        puntualidad: '97.8%',
        volumen: '2.850 Tn',
        volumenSub: 'Granos & Siderúrgico',
        ocupacion: '93.5%',
        alertas: '1 Próxima',
        alertasSub: 'Calibración Balanza Tolva AC 512',
        costoKm: '$ 740 / Km'
      },
      dia: {
        facturacion: 2600000,
        combustible: 910000,
        mantenimiento: 280000,
        seguros: 160000,
        balance: 1250000,
        margen: 48.0,
        unidadesRuta: '8 / 11',
        unidadesRutaPct: 'Operando',
        puntualidad: '98.5%',
        volumen: '120 Tn',
        volumenSub: 'Descarga Puerto',
        ocupacion: '94.0%',
        alertas: '1 Próxima',
        alertasSub: 'Plan diario',
        costoKm: '$ 735 / Km'
      },
      semana: {
        facturacion: 16200000,
        combustible: 5600000,
        mantenimiento: 1800000,
        seguros: 980000,
        balance: 7820000,
        margen: 48.2,
        unidadesRuta: '8 / 11',
        unidadesRutaPct: 'Semana en curso',
        puntualidad: '97.9%',
        volumen: '740 Tn',
        volumenSub: 'Graneles y bobinas',
        ocupacion: '93.0%',
        alertas: '1 Próxima',
        alertasSub: 'Mantenimiento',
        costoKm: '$ 738 / Km'
      },
      anio: {
        facturacion: 720000000,
        combustible: 252000000,
        mantenimiento: 81000000,
        seguros: 44000000,
        balance: 343000000,
        margen: 47.6,
        unidadesRuta: '8 / 11',
        unidadesRutaPct: 'Capacidad activa',
        puntualidad: '97.2%',
        volumen: '32.000 Tn',
        volumenSub: 'Total acumulado',
        ocupacion: '91.8%',
        alertas: '1 Próxima',
        alertasSub: 'Preventivo',
        costoKm: '$ 750 / Km'
      }
    },
    costStructure: [
      { label: 'Superávit Operativo Neto', pct: 47.9, val: 29900000, color: '#10b981' },
      { label: 'Gasoil Diésel Grado 3', pct: 34.9, val: 21800000, color: '#3b82f6' },
      { label: 'Mantenimiento de Tolvas & Tren Delantero', pct: 11.1, val: 6900000, color: '#8b5cf6' },
      { label: 'Seguros de Transporte de Granos & ART', pct: 6.1, val: 3800000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 49000000, viajes: 78 },
      { mes: 'May', fact: 52400000, viajes: 84 },
      { mes: 'Jun', fact: 55800000, viajes: 89 },
      { mes: 'Jul', fact: 58200000, viajes: 94 },
      { mes: 'Ago', fact: 60500000, viajes: 98 },
      { mes: 'Sep', fact: 62400000, viajes: 104 }
    ],
    vehiculos: [
      { id: 'veh-r1', patente: 'AE 918 MM', marca: 'Mercedes-Benz Actros 2645', tipo: 'Tractor + Tolva Cerealera 32Tn', anio: 2023, capacidadTn: 32.0, km: 114000, estado: 'ocupado', chofer: 'Marcelo Gómez', consumo: '32 L / 100Km', vtv: '2027-02-14', seguro: 'Al Día (Sancor)' },
      { id: 'veh-r2', patente: 'AC 512 PK', marca: 'Iveco Tector 170E28', tipo: 'Camión Chasis Carga Litoral 14Tn', anio: 2021, capacidadTn: 14.0, km: 242000, estado: 'ocupado', chofer: 'Roberto Bianchi', consumo: '27 L / 100Km', vtv: '2026-11-18', seguro: 'Al Día (Rivadavia)' }
    ],
    rutas: [
      { id: 'ROS-2026-301', cliente: 'Bunge Argentina Terminal 6', chofer: 'Marcelo Gómez', vehiculo: 'AE 918 MM (Mercedes Actros)', origen: 'Acopio Firmat (Santa Fe)', destino: 'Puerto General San Martín (T6)', carga: 'Soja Grano Primera Calidad (30 Tn)', monto: 1850000, progreso: 88, estado: 'en_transito', eta: '18:10 hs', velocidad: 76, lat: -32.721, lng: -60.732 },
      { id: 'ROS-2026-302', cliente: 'Acindar Siderúrgica Villa Constitución', chofer: 'Roberto Bianchi', vehiculo: 'AC 512 PK (Iveco Tector)', origen: 'Planta Villa Constitución', destino: 'Parque Industrial Alvear (Rosario)', carga: 'Barras de Acero Aletado (14 Tn)', monto: 1250000, progreso: 60, estado: 'en_transito', eta: '19:00 hs', velocidad: 68, lat: -33.150, lng: -60.589 }
    ],
    choferes: [
      { id: 'ch-r1', nombre: 'Marcelo Gómez', dni: '30.814.229', licencia: 'E1 - Semirremolques Cerealeros', vencimiento: '2027-06-25', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 918 MM', viajes: 510, calif: '4.9 ★' },
      { id: 'ch-r2', nombre: 'Roberto Bianchi', dni: '33.910.450', licencia: 'C2 - Cargas Generales Litoral', vencimiento: '2026-12-05', telefono: '5491123974066', estado: 'En Ruta', moto: 'AC 512 PK', viajes: 480, calif: '5.0 ★' }
    ],
    mantenimiento: [
      { id: 'mr-1', moto: 'AE 918 MM (Mercedes Actros)', tarea: 'Revisión y Engrase General de Pernos y Ejes de Tolva', fecha: '2026-09-11', km: 114000, taller: 'Taller Integral Puerto San Martín', costo: 180000, estado: 'Finalizado' }
    ],
    agenda: [
      { id: 'agr-1', fecha: '2026-09-17', hora: '05:00', titulo: 'Ingreso Turno Cupo Puerto San Lorenzo (Terminal 6)', unidad: 'AE 918 MM', prioridad: 'Alta' }
    ],
    clientes: [
      { id: 'cr-1', razonSocial: 'Bunge Argentina S.A.', cuit: '30-50289123-1', contacto: 'Ing. Fernando Varela', tel: '11 2397-4066', localidad: 'Puerto San Martín, Santa Fe', viajes: 92, facturado: 24800000, saldo: '$ 0 (Al Día)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Cobro Flete de Granos Bunge Cupo #1480', categoria: 'Cobro Fletes Granel', comprobante: 'FC-A 0008-0004120', metodo: 'Transferencia Echeq', monto: 1850000 }
    ]
  }
};

// =============================================================================
// ESTADO GLOBAL REACTIVO DE LA APLICACIÓN
// =============================================================================
let currentCompanyId = 'ivarra';
let currentPeriod = 'mes';
let costChartType = 'donut';
let costChartUnit = 'pct';
let currentView = 'dashboard';
let currentTrackingRouteId = null;

// Helper: Formato Moneda ARS
function formatARS(val) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(val);
}

// Helper: Obtener Datos de la Empresa Activa
function getActiveData() {
  return LOGIX_COMPANIES[currentCompanyId];
}

// =============================================================================
// INICIALIZACIÓN AL CARGAR EL DOM
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCompanySwitcher();
  initPeriodSelector();
  initNavigation();
  initThemeToggle();
  initSearch();
  initModals();
  initChartToggles();

  // Render inicial de la empresa por defecto (Ivarra)
  setCompany('ivarra');
});

// =============================================================================
// SELECTOR MULTI-EMPRESA (1-CLICK SWITCHER)
// =============================================================================
function initCompanySwitcher() {
  const buttons = document.querySelectorAll('.btn-company');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const companyId = btn.getAttribute('data-company');
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setCompany(companyId);
    });
  });
}

function setCompany(companyId) {
  if (!LOGIX_COMPANIES[companyId]) return;
  currentCompanyId = companyId;
  const company = LOGIX_COMPANIES[companyId];

  // Actualizar tema visual y color de acento
  document.body.setAttribute('data-company-theme', company.theme);

  // Actualizar textos e identidades del Header y Sidebar
  document.getElementById('currentCompanyName').textContent = company.name;
  document.getElementById('currentCompanySector').textContent = company.sector;
  document.getElementById('sidebarCompanyName').textContent = company.shortName;
  document.getElementById('sidebarCompanyCuit').textContent = `CUIT: ${company.cuit}`;
  document.getElementById('sidebarCompanyLogo').src = company.logo;

  // Actualizar banner
  document.getElementById('bannerEmpresaTitle').textContent = company.bannerTitle;
  document.getElementById('bannerEmpresaDesc').textContent = company.bannerDesc;

  // Actualizar labels según tipo de empresa
  const choferLabel = companyId === 'ivarra' ? 'Cadetes & Motos' : 'Choferes & Personal';
  document.getElementById('navLabelChoferes').textContent = choferLabel;
  document.getElementById('choferesViewTitle').textContent = companyId === 'ivarra' 
    ? 'Directorio de Cadetes & Personal de Motomensajería'
    : 'Directorio de Conductores & Choferes de Carga Pesada';

  // Badges numéricos del sidebar
  document.getElementById('badgeRutasActivas').textContent = company.rutas.length;
  document.getElementById('badgeTotalFlota').textContent = company.vehiculos.length;
  document.getElementById('badgeChoferesCount').textContent = company.choferes.length;
  document.getElementById('badgeClientesCount').textContent = company.clientes.length;
  document.getElementById('badgeMantenimientoAlerts').textContent = company.mantenimiento.length;

  // Re-renderizar métricas y vistas
  renderDashboardKPIs();
  renderCostChart();
  renderEvolutionChart();
  renderDashboardTables();
  renderRoutesTable();
  renderFleetCards();
  renderDriversCards();
  renderMaintenanceGrid();
  renderAgendaTimeline();
  renderFinancesTable();
  renderClientsCards();
  renderTrackingView();
  renderRemitoDocument();
}

// =============================================================================
// SELECTOR DE PERÍODOS (DÍA / SEMANA / MES / AÑO)
// =============================================================================
function initPeriodSelector() {
  const periodButtons = document.querySelectorAll('#periodSelectorGroup .btn-period');
  periodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      periodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPeriod = btn.getAttribute('data-period');
      
      const labels = {
        dia: 'Hoy (Operación del Día)',
        semana: 'Semana en Curso (Últimos 7 días)',
        mes: 'Septiembre 2026 (Mes en Curso)',
        anio: 'Ejercicio Anual Consolidado 2026'
      };
      document.getElementById('periodActiveDateLabel').textContent = labels[currentPeriod];

      renderDashboardKPIs();
      renderCostChart();
    });
  });
}

function renderDashboardKPIs() {
  const company = getActiveData();
  const kpis = company.kpis[currentPeriod] || company.kpis.mes;

  document.getElementById('kpiFacturacionTotal').textContent = formatARS(kpis.facturacion);
  document.getElementById('kpiCombustible').textContent = formatARS(kpis.combustible);
  document.getElementById('kpiMantenimientoCosto').textContent = formatARS(kpis.mantenimiento);
  document.getElementById('kpiSeguros').textContent = formatARS(kpis.seguros);
  document.getElementById('kpiBalanceNeto').textContent = `+ ${formatARS(kpis.balance)}`;
  document.getElementById('kpiMargenPorc').textContent = `${kpis.margen}%`;

  document.getElementById('kpiUnidadesRuta').textContent = kpis.unidadesRuta;
  document.getElementById('kpiUnidadesRutaPct').textContent = kpis.unidadesRutaPct;
  document.getElementById('kpiPuntualidad').textContent = kpis.puntualidad;
  document.getElementById('kpiVolumenDespachado').textContent = kpis.volumen;
  document.getElementById('kpiVolumenSub').textContent = kpis.volumenSub;
  document.getElementById('kpiOcupacionFlota').textContent = kpis.ocupacion;
  document.getElementById('kpiAlertasDoc').textContent = kpis.alertas;
  document.getElementById('kpiAlertasDocSub').textContent = kpis.alertasSub;
  document.getElementById('kpiCostoKm').textContent = kpis.costoKm;
}

// =============================================================================
// GRÁFICO 1: ESTRUCTURA DE COSTOS (DONA / TORTA / BARRAS SVG MATEMÁTICO)
// =============================================================================
function initChartToggles() {
  const typeBtns = document.querySelectorAll('#costChartTypeToggle .btn-chart-type');
  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      costChartType = btn.getAttribute('data-type');
      renderCostChart();
    });
  });

  const unitBtns = document.querySelectorAll('#costChartUnitToggle .btn-chart-unit');
  unitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      unitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      costChartUnit = btn.getAttribute('data-unit');
      renderCostChart();
    });
  });
}

function renderCostChart() {
  const company = getActiveData();
  const data = company.costStructure;
  const container = document.getElementById('costChartContainer');
  const legendContainer = document.getElementById('costLegendContainer');
  if (!container || !legendContainer) return;

  // Render leyendas laterales
  legendContainer.innerHTML = data.map(item => {
    const valText = costChartUnit === 'pct' ? `${item.pct}%` : formatARS(item.val);
    return `
      <div class="legend-item" onmouseenter="highlightSlice('${item.label}')" onmouseleave="unhighlightSlices()">
        <div class="legend-left">
          <span class="legend-color-box" style="background-color: ${item.color};"></span>
          <span class="legend-name">${item.label}</span>
        </div>
        <span class="legend-value">${valText}</span>
      </div>
    `;
  }).join('');

  const cx = 100;
  const cy = 100;
  const r = 85;
  const innerR = costChartType === 'donut' ? 52 : 0;

  if (costChartType === 'bars') {
    // Modo Barras Horizontales
    let svg = `<svg viewBox="0 0 200 200" width="200" height="200">`;
    const barHeight = 28;
    const gap = 16;
    data.forEach((item, idx) => {
      const y = 20 + idx * (barHeight + gap);
      const width = (item.pct / 100) * 170;
      svg += `
        <rect x="15" y="${y}" width="170" height="${barHeight}" rx="6" fill="rgba(255,255,255,0.05)" />
        <rect x="15" y="${y}" width="${width}" height="${barHeight}" rx="6" fill="${item.color}" 
              data-label="${item.label}" data-val="${item.pct}% · ${formatARS(item.val)}"
              class="chart-bar-hover" style="cursor:pointer; transition: width 0.4s ease;" />
        <text x="22" y="${y + 18}" font-size="11" font-weight="700" fill="#ffffff" font-family="'Plus Jakarta Sans'">${item.pct}%</text>
      `;
    });
    svg += `</svg>`;
    container.innerHTML = svg;
  } else {
    // Modo Dona o Torta Circular Trigonométrica Precisa
    let startAngle = 0;
    let paths = [];

    data.forEach((item) => {
      const angle = (item.pct / 100) * 360;
      const endAngle = startAngle + angle;
      const d = describeArc(cx, cy, r, innerR, startAngle, endAngle);
      startAngle = endAngle;

      paths.push(`
        <path d="${d}" fill="${item.color}" class="slice-path" 
              data-label="${item.label}" data-pct="${item.pct}%" data-val="${formatARS(item.val)}"
              style="cursor:pointer; transition: transform 0.2s, opacity 0.2s;" />
      `);
    });

    let centerText = '';
    if (costChartType === 'donut') {
      centerText = `
        <text x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="11" font-weight="800" fill="#94a3b8">MARGEN</text>
        <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-size="16" font-weight="800" fill="#10b981" font-family="'JetBrains Mono'">${company.kpis[currentPeriod].margen}%</text>
      `;
    }

    container.innerHTML = `
      <svg viewBox="0 0 200 200" width="200" height="200">
        ${paths.join('')}
        ${centerText}
      </svg>
    `;
  }

  attachChartTooltips();
}

// Funciones Matemáticas Trigonométricas para Arcos SVG
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, innerRadius, startAngle, endAngle) {
  // Evitar colapso si es 360 grados
  if (endAngle - startAngle >= 360) {
    endAngle = startAngle + 359.99;
  }
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  if (innerRadius === 0) {
    // Torta completa (Pie)
    return [
      'M', x, y,
      'L', end.x, end.y,
      'A', radius, radius, 0, largeArcFlag, 1, start.x, start.y,
      'Z'
    ].join(' ');
  } else {
    // Dona (Donut)
    const innerStart = polarToCartesian(x, y, innerRadius, endAngle);
    const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);
    return [
      'M', end.x, end.y,
      'A', radius, radius, 0, largeArcFlag, 1, start.x, start.y,
      'L', innerStart.x, innerStart.y,
      'A', innerRadius, innerRadius, 0, largeArcFlag, 0, innerEnd.x, innerEnd.y,
      'Z'
    ].join(' ');
  }
}

// Tooltips Dinámicos Flotantes
function attachChartTooltips() {
  const tooltip = document.getElementById('floatingChartTooltip');
  const elements = document.querySelectorAll('.slice-path, .chart-bar-hover, .evolution-bar');

  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const label = el.getAttribute('data-label') || el.getAttribute('data-mes');
      const val = el.getAttribute('data-val') || el.getAttribute('data-fact');
      const pct = el.getAttribute('data-pct');

      tooltip.innerHTML = `
        <strong style="color:var(--accent); font-size:12px;">${label}</strong>
        <span>${pct ? `${pct} · ` : ''}${val}</span>
      `;
      tooltip.style.display = 'flex';
      tooltip.style.left = `${e.clientX + 14}px`;
      tooltip.style.top = `${e.clientY + 14}px`;
    });

    el.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
}

function highlightSlice(label) {
  const paths = document.querySelectorAll('.slice-path');
  paths.forEach(p => {
    if (p.getAttribute('data-label') === label) {
      p.style.opacity = '1';
      p.style.transform = 'scale(1.04)';
      p.style.transformOrigin = 'center center';
    } else {
      p.style.opacity = '0.35';
      p.style.transform = 'scale(1)';
    }
  });
}

function unhighlightSlices() {
  const paths = document.querySelectorAll('.slice-path');
  paths.forEach(p => {
    p.style.opacity = '1';
    p.style.transform = 'scale(1)';
  });
}

// =============================================================================
// GRÁFICO 2: EVOLUCIÓN HISTÓRICA DE FACTURACIÓN & VIAJES
// =============================================================================
function renderEvolutionChart() {
  const company = getActiveData();
  const data = company.evolution;
  const container = document.getElementById('evolutionChartContainer');
  if (!container) return;

  const maxFact = Math.max(...data.map(d => d.fact)) * 1.15;
  const width = 480;
  const height = 180;
  const paddingBottom = 30;
  const paddingTop = 20;
  const chartHeight = height - paddingBottom - paddingTop;
  const colWidth = width / data.length;

  let bars = '';
  let points = [];

  data.forEach((item, idx) => {
    const x = idx * colWidth + (colWidth / 2);
    const barHeight = (item.fact / maxFact) * chartHeight;
    const y = height - paddingBottom - barHeight;

    bars += `
      <rect x="${x - 18}" y="${y}" width="36" height="${barHeight}" rx="4" fill="url(#blueGrad)" 
            class="evolution-bar" data-mes="${item.mes} 2026" data-fact="${formatARS(item.fact)} (${item.viajes} viajes)" 
            style="cursor:pointer;" />
      <text x="${x}" y="${height - 10}" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="'Plus Jakarta Sans'">${item.mes}</text>
    `;

    points.push(`${x},${y + 4}`);
  });

  const polyline = `<polyline points="${points.join(' ')}" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`;

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" width="100%" height="100%">
      <defs>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="var(--accent)" />
          <stop offset="100%" stop-color="rgba(37, 99, 235, 0.4)" />
        </linearGradient>
      </defs>
      <!-- Guías horizontales -->
      <line x1="20" y1="${height - paddingBottom}" x2="${width - 20}" y2="${height - paddingBottom}" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
      <line x1="20" y1="${height - paddingBottom - chartHeight / 2}" x2="${width - 20}" y2="${height - paddingBottom - chartHeight / 2}" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4" />
      ${bars}
      ${polyline}
    </svg>
  `;

  attachChartTooltips();
}

// =============================================================================
// TABLAS DEL DASHBOARD: DESPACHOS EN CURSO & ALERTAS
// =============================================================================
function renderDashboardTables() {
  const company = getActiveData();
  const tableBody = document.getElementById('dashboardRoutesTableBody');
  const alertsList = document.getElementById('dashboardAlertsList');
  if (!tableBody || !alertsList) return;

  // Filas de despachos activos
  tableBody.innerHTML = company.rutas.slice(0, 5).map(r => `
    <tr>
      <td><span class="code-pill">${r.id}</span></td>
      <td><strong>${r.cliente}</strong></td>
      <td>${r.chofer}</td>
      <td>${r.vehiculo.split('(')[0]}</td>
      <td>${r.origen} ➔ ${r.destino}</td>
      <td>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${r.progreso}%;"></div>
        </div>
        <span style="font-size:10px; font-family:var(--font-mono); color:var(--text-muted);">${r.progreso}% · ETA ${r.eta}</span>
      </td>
      <td><span class="status-badge ${r.estado}">● En Tránsito</span></td>
      <td>
        <button class="btn-table-action" onclick="openGpsModal('${r.id}')">GPS</button>
      </td>
    </tr>
  `).join('');

  // Alertas de mantenimiento y VTV
  alertsList.innerHTML = `
    <div class="alert-feed-item">
      <div class="alert-icon-box warning">⚠️</div>
      <div class="alert-texts">
        <span class="alert-title">Renovación de VTV Próxima</span>
        <span class="alert-desc">Unidad ${company.vehiculos[3]?.patente || 'A 552 TUV'} con vencimiento en menos de 20 días hábiles.</span>
        <span class="alert-time">Planta VTV Norte · Prioridad Preventiva</span>
      </div>
    </div>
    <div class="alert-feed-item">
      <div class="alert-icon-box info">🔧</div>
      <div class="alert-texts">
        <span class="alert-title">Service Programado por Odómetro</span>
        <span class="alert-desc">Cambio de lubricantes y revisión de frenos para ${company.vehiculos[0]?.marca || 'Unidad Flota'}.</span>
        <span class="alert-time">Km actual: ${company.vehiculos[0]?.km || '19.400'} Km</span>
      </div>
    </div>
    <div class="alert-feed-item">
      <div class="alert-icon-box danger">🛡️</div>
      <div class="alert-texts">
        <span class="alert-title">Póliza de Carga en Tránsito</span>
        <span class="alert-desc">Cobertura activa al 100% sobre mercadería declarada en viaje.</span>
        <span class="alert-time">Riesgo Cubierto: $ 45.000.000 ARS</span>
      </div>
    </div>
  `;
}

// =============================================================================
// SECCIÓN 2: HOJAS DE RUTA & TMS COMPLETO
// =============================================================================
function renderRoutesTable() {
  const company = getActiveData();
  const tableBody = document.getElementById('mainRoutesTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = company.rutas.map(r => `
    <tr>
      <td><span class="code-pill">${r.id}</span></td>
      <td><strong>${r.cliente}</strong></td>
      <td>${r.chofer}</td>
      <td><span class="plate-badge" style="font-size:11px; padding:2px 6px;">${r.vehiculo.split('(')[0]}</span></td>
      <td><strong>${r.origen}</strong> ➔ ${r.destino}</td>
      <td>${r.carga}</td>
      <td><strong>${formatARS(r.monto)}</strong></td>
      <td>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${r.progreso}%;"></div>
        </div>
        <span style="font-size:10.5px; font-family:var(--font-mono); color:var(--text-muted);">${r.progreso}% · Arribo: ${r.eta}</span>
      </td>
      <td><span class="status-badge ${r.estado}">● En Tránsito</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn-table-action" onclick="openGpsModal('${r.id}')" title="Ver Seguimiento Satelital">GPS</button>
          <button class="btn-table-action" onclick="verRemitoDeRuta('${r.id}')" title="Emitir Remito Oficial">Remito</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// =============================================================================
// SECCIÓN 3: FLOTA & VEHÍCULOS (FLEET MANAGEMENT)
// =============================================================================
function renderFleetCards() {
  const company = getActiveData();
  const grid = document.getElementById('fleetCardsGrid');
  if (!grid) return;

  grid.innerHTML = company.vehiculos.map(v => {
    const isOccupied = v.estado === 'ocupado';
    const statusClass = isOccupied ? 'en_transito' : (v.estado === 'disponible' ? 'completada' : 'programado');
    const statusText = isOccupied ? 'En Ruta Activa' : (v.estado === 'disponible' ? 'Disponible en Base' : 'En Taller');

    return `
      <div class="fleet-card">
        <div class="fleet-card-header">
          <div>
            <span class="plate-badge">${v.patente}</span>
            <h3 style="font-size:14px; font-weight:800; margin-top:8px; color:var(--text-main);">${v.marca}</h3>
            <span style="font-size:11.5px; color:var(--text-muted);">${v.tipo} · Año ${v.anio}</span>
          </div>
          <span class="status-badge ${statusClass}">● ${statusText}</span>
        </div>

        <div class="fleet-specs-grid">
          <div class="spec-item">
            <span class="spec-label">ODÓMETRO</span>
            <span class="spec-val">${Number(v.km).toLocaleString()} Km</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">CAPACIDAD</span>
            <span class="spec-val">${v.capacidadTn} Tn</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">RENDIMIENTO</span>
            <span class="spec-val">${v.consumo}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">CONDUCTOR</span>
            <span class="spec-val" style="color:var(--accent);">${v.chofer}</span>
          </div>
        </div>

        <div class="doc-traffic-lights">
          <div class="traffic-light-item">
            <span class="light-dot green"></span>
            <span>VTV: ${v.vtv}</span>
          </div>
          <div class="traffic-light-item">
            <span class="light-dot green"></span>
            <span>Seguro: OK</span>
          </div>
        </div>

        <div style="display:flex; gap:8px; margin-top:auto;">
          <button class="btn-table-action" style="flex:1;" onclick="programarServiceVehiculo('${v.patente}')">🔧 Service</button>
          <button class="btn-table-action" style="flex:1;" onclick="cambiarEstadoVehiculo('${v.id}')">🔄 Alternar Estado</button>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================================================
// SECCIÓN 4: SEGUIMIENTO GPS SATELITAL EN TIEMPO REAL
// =============================================================================
function renderTrackingView() {
  const company = getActiveData();
  const list = document.getElementById('trackingUnitsList');
  const markersLayer = document.getElementById('mapMarkersLayer');
  if (!list || !markersLayer) return;

  // Lista lateral
  list.innerHTML = company.rutas.map(r => `
    <div class="tracking-unit-item" onclick="openGpsModal('${r.id}')">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="code-pill">${r.id}</span>
        <span class="status-badge en_transito" style="font-size:10px;">GPS ACTIVO</span>
      </div>
      <div style="margin-top:6px; font-weight:700; font-size:12.5px; color:var(--text-main);">${r.chofer}</div>
      <div style="font-size:11px; color:var(--text-muted);">${r.origen} ➔ ${r.destino}</div>
      <div style="display:flex; justify-content:space-between; font-size:11px; font-family:var(--font-mono); margin-top:6px;">
        <span style="color:var(--accent);">${r.velocidad} km/h</span>
        <span>Arribo: ${r.eta}</span>
      </div>
    </div>
  `).join('');

  // Pines en el mapa simulado
  markersLayer.innerHTML = company.rutas.map((r, i) => {
    const left = 15 + ((i * 12) % 75);
    const top = 20 + ((i * 18) % 65);
    return `
      <div class="gps-marker" style="left:${left}%; top:${top}%;" onclick="openGpsModal('${r.id}')" title="${r.id} - ${r.chofer}">
        <div class="marker-icon">🛵</div>
        <div class="marker-label">${r.id} · ${r.velocidad} km/h</div>
      </div>
    `;
  }).join('');
}

// Modal de GPS en Vivo
function openGpsModal(routeId) {
  const company = getActiveData();
  const route = company.rutas.find(r => r.id === routeId) || company.rutas[0];
  if (!route) return;

  currentTrackingRouteId = route.id;
  document.getElementById('gpsModalTitle').textContent = `Telemetría de Despacho #${route.id} · ${route.cliente}`;

  const body = document.getElementById('gpsModalBody');
  body.innerHTML = `
    <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:20px;">
      <div>
        <div style="background:#090e1a; border:1px solid var(--border-card); border-radius:12px; height:240px; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center;">
          <div class="map-grid-lines" style="position:absolute; inset:0;"></div>
          <!-- Ruta gráfica simulada -->
          <svg viewBox="0 0 400 200" width="100%" height="100%" style="position:absolute; inset:0;">
            <path d="M 50 150 Q 180 40 350 100" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="8" stroke-linecap="round" />
            <path d="M 50 150 Q 180 40 350 100" fill="none" stroke="var(--accent)" stroke-width="4" stroke-dasharray="8 6" stroke-linecap="round" />
            <circle cx="50" cy="150" r="8" fill="#10b981" />
            <circle cx="350" cy="100" r="8" fill="#ef4444" />
            <!-- Posición actual del móvil -->
            <circle cx="${50 + (300 * (route.progreso / 100))}" cy="${150 - (50 * Math.sin(route.progreso / 30))}" r="10" fill="var(--accent)" style="filter:drop-shadow(0 0 8px var(--accent));" />
          </svg>
          <div style="position:absolute; top:12px; left:12px; background:rgba(0,0,0,0.8); padding:4px 10px; border-radius:6px; font-size:11px; font-family:var(--font-mono); color:var(--accent);">
            LAT: ${route.lat} | LNG: ${route.lng}
          </div>
          <div style="position:absolute; bottom:12px; right:12px; background:rgba(0,0,0,0.8); padding:4px 10px; border-radius:6px; font-size:12px; font-weight:800; color:#ffffff;">
            VELOCIDAD: ${route.velocidad} KM/H
          </div>
        </div>

        <div style="margin-top:16px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span style="font-size:11px; color:var(--text-subtle); font-weight:700;">PROGRESO DEL VIAJE</span>
            <div style="font-size:16px; font-weight:800; color:var(--text-main); font-family:var(--font-mono);">${route.progreso}% COMPLETADO</div>
          </div>
          <button class="btn-primary" onclick="simularAvanceRuta('${route.id}')">
            ⚡ Simular Avance de Ruta (+15%)
          </button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:12px; background:var(--bg-card-alt); padding:16px; border-radius:12px; border:1px solid var(--border-card);">
        <div>
          <span style="font-size:10.5px; font-weight:700; color:var(--text-subtle);">CONDUCTOR ASIGNADO</span>
          <div style="font-size:14px; font-weight:800; color:var(--text-main);">${route.chofer}</div>
        </div>
        <div>
          <span style="font-size:10.5px; font-weight:700; color:var(--text-subtle);">UNIDAD / PATENTE</span>
          <div style="font-size:13px; font-weight:700; color:var(--accent); font-family:var(--font-mono);">${route.vehiculo}</div>
        </div>
        <div>
          <span style="font-size:10.5px; font-weight:700; color:var(--text-subtle);">TRAYECTO DECLARADO</span>
          <div style="font-size:12px; font-weight:600; color:var(--text-main);">${route.origen} ➔ ${route.destino}</div>
        </div>
        <div>
          <span style="font-size:10.5px; font-weight:700; color:var(--text-subtle);">ESTIMACIÓN DE ARRIBO (ETA)</span>
          <div style="font-size:14px; font-weight:800; color:var(--success); font-family:var(--font-mono);">${route.eta} (En Horario)</div>
        </div>
        <div>
          <span style="font-size:10.5px; font-weight:700; color:var(--text-subtle);">MERCADERÍA / BULTOS</span>
          <div style="font-size:12px; color:var(--text-muted);">${route.carga}</div>
        </div>
        <a href="https://wa.me/5491123974066?text=Hola%20${encodeURIComponent(route.chofer)},%20te%20consulto%20por%20el%20despacho%20${route.id}%20en%20tr%C3%A1nsito" 
           target="_blank" class="btn-whatsapp-direct" style="margin-top:auto;">
          💬 Contactar al Conductor por WhatsApp
        </a>
      </div>
    </div>
  `;

  document.getElementById('gpsTrackingModal').classList.add('active');
}

function simularAvanceRuta(routeId) {
  const company = getActiveData();
  const route = company.rutas.find(r => r.id === routeId);
  if (!route) return;

  route.progreso = Math.min(100, route.progreso + 15);
  if (route.progreso >= 100) {
    route.estado = 'completada';
    route.eta = 'Entregado Conforme';
  }
  openGpsModal(routeId);
  renderDashboardTables();
  renderRoutesTable();
}

// =============================================================================
// SECCIÓN 5: CONDUCTORES & CADETES
// =============================================================================
function renderDriversCards() {
  const company = getActiveData();
  const grid = document.getElementById('driversCardsGrid');
  if (!grid) return;

  grid.innerHTML = company.choferes.map(ch => `
    <div class="driver-card">
      <div class="driver-card-header">
        <div class="driver-avatar">${ch.nombre.charAt(0)}</div>
        <div>
          <h3 style="font-size:14px; font-weight:800; color:var(--text-main);">${ch.nombre}</h3>
          <span style="font-size:11px; color:var(--text-subtle); font-family:var(--font-mono);">DNI: ${ch.dni}</span>
        </div>
        <span class="status-badge en_transito" style="margin-left:auto; font-size:10px;">${ch.estado}</span>
      </div>

      <div class="fleet-specs-grid">
        <div class="spec-item">
          <span class="spec-label">LICENCIA</span>
          <span class="spec-val">${ch.licencia}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">VENCIMIENTO</span>
          <span class="spec-val">${ch.vencimiento}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">VIAJES TOTALES</span>
          <span class="spec-val">${ch.viajes} viajes</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">CALIFICACIÓN</span>
          <span class="spec-val" style="color:var(--warning);">${ch.calif}</span>
        </div>
      </div>

      <a href="https://wa.me/${ch.telefono}?text=Hola%20${encodeURIComponent(ch.nombre)},%20te%20escribo%20desde%20la%20central%20operativa%20de%20${encodeURIComponent(company.name)}" 
         target="_blank" class="btn-whatsapp-direct">
        💬 WhatsApp Directo (+${ch.telefono.slice(0, 4)}...)
      </a>
    </div>
  `).join('');
}

// =============================================================================
// SECCIÓN 6: TALLER & MANTENIMIENTO
// =============================================================================
function renderMaintenanceGrid() {
  const company = getActiveData();
  const container = document.getElementById('maintenanceGridContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="table-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>UNIDAD</th>
              <th>TAREA / SERVICE PREVENTIVO</th>
              <th>FECHA</th>
              <th>ODÓMETRO</th>
              <th>TALLER ASIGNADO</th>
              <th>COSTO ($)</th>
              <th>ESTADO</th>
            </tr>
          </thead>
          <tbody>
            ${company.mantenimiento.map(m => `
              <tr>
                <td><span class="code-pill">${m.id}</span></td>
                <td><strong>${m.moto}</strong></td>
                <td>${m.tarea}</td>
                <td>${m.fecha}</td>
                <td style="font-family:var(--font-mono);">${Number(m.km).toLocaleString()} Km</td>
                <td>${m.taller}</td>
                <td><strong>${formatARS(m.costo)}</strong></td>
                <td><span class="status-badge ${m.estado === 'Finalizado' ? 'completada' : 'programado'}">● ${m.estado}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// =============================================================================
// SECCIÓN 7: AGENDA & SALIDAS
// =============================================================================
function renderAgendaTimeline() {
  const company = getActiveData();
  const container = document.getElementById('agendaTimelineView');
  if (!container) return;

  container.innerHTML = `
    <div class="table-card">
      <div style="display:flex; flex-direction:column; gap:12px;">
        ${company.agenda.map(a => `
          <div class="alert-feed-item" style="border-left:4px solid var(--accent);">
            <div class="alert-icon-box info">📅</div>
            <div class="alert-texts" style="flex:1;">
              <div style="display:flex; justify-content:space-between;">
                <span class="alert-title" style="font-size:13.5px;">${a.titulo}</span>
                <span style="font-size:11px; font-weight:800; color:var(--accent); font-family:var(--font-mono);">${a.fecha} · ${a.hora} hs</span>
              </div>
              <span class="alert-desc">Unidades asignadas: ${a.unidad}</span>
              <span class="alert-time">Prioridad: <strong>${a.prioridad}</strong></span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// =============================================================================
// SECCIÓN 8: FINANZAS & BALANCES
// =============================================================================
function renderFinancesTable() {
  const company = getActiveData();
  const cards = document.getElementById('financeOverviewCards');
  const tableBody = document.getElementById('financesTableBody');
  if (!cards || !tableBody) return;

  const k = company.kpis.mes;
  cards.innerHTML = `
    <div class="kpis-grid" style="grid-template-columns:repeat(4, 1fr); margin-bottom:0;">
      <div class="kpi-card">
        <span class="kpi-title">TOTAL INGRESOS</span>
        <div class="kpi-value text-green">${formatARS(k.facturacion)}</div>
        <span class="kpi-footer-note">Fletes devengados en el mes</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-title">TOTAL EGRESOS</span>
        <div class="kpi-value" style="color:var(--danger);">${formatARS(k.combustible + k.mantenimiento + k.seguros)}</div>
        <span class="kpi-footer-note">Combustible, taller y seguros</span>
      </div>
      <div class="kpi-card highlight-card">
        <span class="kpi-title">SUPERÁVIT NETO DISPONIBLE</span>
        <div class="kpi-value text-green">${formatARS(k.balance)}</div>
        <span class="kpi-footer-note">Caja líquida disponible</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-title">MARGEN OPERATIVO</span>
        <div class="kpi-value text-teal">${k.margen}%</div>
        <span class="kpi-footer-note">Eficiencia de costos</span>
      </div>
    </div>
  `;

  tableBody.innerHTML = company.finanzas.map(f => `
    <tr>
      <td style="font-family:var(--font-mono);">${f.fecha}</td>
      <td><span class="status-badge ${f.tipo === 'ingreso' ? 'completada' : 'programado'}">${f.tipo.toUpperCase()}</span></td>
      <td><strong>${f.desc}</strong></td>
      <td>${f.categoria}</td>
      <td style="font-family:var(--font-mono);">${f.comprobante}</td>
      <td>${f.metodo}</td>
      <td style="font-family:var(--font-mono); font-weight:800; color:${f.tipo === 'ingreso' ? 'var(--success)' : 'var(--danger)'};">
        ${f.tipo === 'ingreso' ? '+' : '-'} ${formatARS(f.monto)}
      </td>
    </tr>
  `).join('');
}

// =============================================================================
// SECCIÓN 9: CLIENTES & CRM
// =============================================================================
function renderClientsCards() {
  const company = getActiveData();
  const grid = document.getElementById('clientsCardsGrid');
  if (!grid) return;

  grid.innerHTML = company.clientes.map(c => `
    <div class="client-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div>
          <h3 style="font-size:14px; font-weight:800; color:var(--text-main);">${c.razonSocial}</h3>
          <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-subtle);">CUIT: ${c.cuit}</span>
        </div>
        <span class="status-badge completada">Activo</span>
      </div>

      <div class="fleet-specs-grid">
        <div class="spec-item">
          <span class="spec-label">CONTACTO</span>
          <span class="spec-val">${c.contacto}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">LOCALIDAD</span>
          <span class="spec-val">${c.localidad}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">VIAJES TOTALES</span>
          <span class="spec-val">${c.viajes} despachos</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">TOTAL FACTURADO</span>
          <span class="spec-val" style="color:var(--accent);">${formatARS(c.facturado)}</span>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; font-size:11.5px; padding:6px 10px; background:rgba(0,0,0,0.2); border-radius:6px;">
        <span style="color:var(--text-subtle);">Estado de Cuenta:</span>
        <span style="font-weight:700; color:var(--success);">${c.saldo}</span>
      </div>
    </div>
  `).join('');
}

// =============================================================================
// SECCIÓN 10: REMITO OFICIAL IMPRIMIBLE (CARTA DE PORTE)
// =============================================================================
function renderRemitoDocument(routeId) {
  const company = getActiveData();
  const route = routeId ? (company.rutas.find(r => r.id === routeId) || company.rutas[0]) : company.rutas[0];
  const container = document.getElementById('remitoDocumentContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="remito-header-row">
      <div class="remito-brand-side">
        <h2 style="font-size:20px; font-weight:900; color:#000000; letter-spacing:0.5px;">${company.name}</h2>
        <p style="font-size:11px; color:#444; margin:4px 0;">Transporte, Logística & Distribución Nacional</p>
        <p style="font-size:11px; color:#444;">CUIT: <strong>${company.cuit}</strong> · Ingresos Brutos: Convenio Multilateral</p>
        <p style="font-size:11px; color:#444;">Domicilio Comercial: Base Central Operativa Buenos Aires</p>
      </div>

      <div class="remito-center-x">
        <div class="x-box">R</div>
        <span style="font-size:9px; font-weight:800; margin-top:4px;">CÓD. 091</span>
      </div>

      <div class="remito-number-side">
        <h3 style="font-size:16px; font-weight:900; color:#000000;">REMITO OFICIAL</h3>
        <p style="font-size:14px; font-family:var(--font-mono); font-weight:800; color:#000000; margin:4px 0;">N° 0001-0004892</p>
        <p style="font-size:11px; color:#444;">Fecha de Emisión: <strong>16/09/2026</strong></p>
        <p style="font-size:11px; color:#444;">Despacho de Referencia: <strong>${route?.id || 'FLX-2026-081'}</strong></p>
      </div>
    </div>

    <!-- DATOS DEL REMITENTE Y DESTINATARIO -->
    <table class="remito-table">
      <tr>
        <td style="width:50%;">
          <strong>REMITENTE / ORIGEN:</strong><br>
          ${route?.origen || 'Depósito Central'}<br>
          Cliente Emisor: ${route?.cliente || 'Cliente Comercial'}
        </td>
        <td style="width:50%;">
          <strong>DESTINATARIO / ENTREGA:</strong><br>
          ${route?.destino || 'Destino en Tránsito'}<br>
          Condición de Entrega: Puerta a Puerta con Remito Conformado
        </td>
      </tr>
      <tr>
        <td>
          <strong>UNIDAD DE TRANSPORTE:</strong> ${route?.vehiculo || 'Unidad Flota'}<br>
          <strong>CONDUCTOR ASIGNADO:</strong> ${route?.chofer || 'Conductor Autorizado'}
        </td>
        <td>
          <strong>VALOR DECLARADO FLETE:</strong> ${formatARS(route?.monto || 78000)}<br>
          <strong>ESTADO DE CARGA:</strong> Precinto de Seguridad Verificado
        </td>
      </tr>
    </table>

    <!-- DETALLE DE BULTOS -->
    <table class="remito-table">
      <thead>
        <tr>
          <th style="width:10%;">ITEM</th>
          <th style="width:15%;">CÓDIGO</th>
          <th style="width:50%;">DESCRIPCIÓN DE MERCADERÍA / BULTOS</th>
          <th style="width:12%;">CANTIDAD</th>
          <th style="width:13%;">PESO / VOL.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:center;">1</td>
          <td style="font-family:var(--font-mono);">${route?.id || 'FLX-081'}-A</td>
          <td>${route?.carga || 'Bultos para distribución logística'}</td>
          <td style="text-align:center;">1 Lote</td>
          <td style="text-align:center;">Conforme</td>
        </tr>
        <tr>
          <td style="text-align:center;">2</td>
          <td style="font-family:var(--font-mono);">GUIA-SEC-92</td>
          <td>Documentación de Resguardo y Remito Electrónico AFIP</td>
          <td style="text-align:center;">1 Ejemplar</td>
          <td style="text-align:center;">Original</td>
        </tr>
      </tbody>
    </table>

    <!-- FIRMAS Y CONFORMIDAD -->
    <div class="remito-signatures-row">
      <div class="signature-box">
        Firma y Aclaración del Conductor / Despachante<br>
        <span style="font-size:10px; color:#666;">C.I. / DNI Conforme</span>
      </div>
      <div class="signature-box">
        Firma, Sello y DNI Receptor Conforme<br>
        <span style="font-size:10px; color:#666;">Fecha y Hora de Recepción</span>
      </div>
    </div>
  `;
}

function verRemitoDeRuta(routeId) {
  renderRemitoDocument(routeId);
  switchView('remitos');
}

// =============================================================================
// NAVEGACIÓN Y VISTAS
// =============================================================================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-item');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = link.getAttribute('data-view');
      switchView(viewId);
    });
  });

  const menuToggle = document.getElementById('menuToggleBtn');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
  }

  // Quick Action Buttons
  document.getElementById('btnNuevaRuta')?.addEventListener('click', () => {
    document.getElementById('newRouteModal').classList.add('active');
    populateRouteModalSelects();
  });

  document.getElementById('btnNuevaHojaRutaView')?.addEventListener('click', () => {
    document.getElementById('newRouteModal').classList.add('active');
    populateRouteModalSelects();
  });

  document.getElementById('btnNuevaUnidadModal')?.addEventListener('click', () => {
    document.getElementById('newVehicleModal').classList.add('active');
  });

  document.getElementById('btnNuevoChoferModal')?.addEventListener('click', () => {
    document.getElementById('newDriverModal').classList.add('active');
  });

  document.getElementById('btnNuevoRemitoQuick')?.addEventListener('click', () => {
    switchView('remitos');
  });
}

function switchView(viewId) {
  currentView = viewId;
  const navLinks = document.querySelectorAll('.nav-item');
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-view') === viewId);
  });

  const panels = document.querySelectorAll('.view-panel');
  panels.forEach(p => {
    p.classList.toggle('active', p.id === `view-${viewId}`);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('sidebar')?.classList.remove('mobile-open');
}

// =============================================================================
// TEMA CLARO / OSCURO
// =============================================================================
function initThemeToggle() {
  const btn = document.getElementById('themeToggleBtn');
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
  });
}

// =============================================================================
// BUSCADOR GLOBAL CONTEXTUAL
// =============================================================================
function initSearch() {
  const input = document.getElementById('globalSearchInput');
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderRoutesTable();
      renderFleetCards();
      return;
    }

    const company = getActiveData();
    const filteredRoutes = company.rutas.filter(r => 
      r.id.toLowerCase().includes(query) ||
      r.cliente.toLowerCase().includes(query) ||
      r.chofer.toLowerCase().includes(query) ||
      r.destino.toLowerCase().includes(query)
    );

    const routesTable = document.getElementById('mainRoutesTableBody');
    if (routesTable) {
      routesTable.innerHTML = filteredRoutes.map(r => `
        <tr>
          <td><span class="code-pill">${r.id}</span></td>
          <td><strong>${r.cliente}</strong></td>
          <td>${r.chofer}</td>
          <td>${r.vehiculo}</td>
          <td>${r.origen} ➔ ${r.destino}</td>
          <td>${r.carga}</td>
          <td><strong>${formatARS(r.monto)}</strong></td>
          <td>${r.progreso}%</td>
          <td><span class="status-badge en_transito">● En Tránsito</span></td>
          <td><button class="btn-table-action" onclick="openGpsModal('${r.id}')">GPS</button></td>
        </tr>
      `).join('');
    }
  });

  // Shortcut Ctrl + K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input.focus();
    }
  });
}

// =============================================================================
// MODALES & FORMULARIOS
// =============================================================================
function initModals() {
  // Botones de cerrar
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      document.getElementById(modalId)?.classList.remove('active');
    });
  });

  // Cerrar haciendo click en el backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Submit Nueva Ruta
  document.getElementById('newRouteForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = getActiveData();
    const newRoute = {
      id: document.getElementById('nrCodigo').value,
      cliente: document.getElementById('nrCliente').value,
      vehiculo: document.getElementById('nrVehiculo').value,
      chofer: document.getElementById('nrChofer').value,
      origen: document.getElementById('nrOrigen').value,
      destino: document.getElementById('nrDestino').value,
      carga: document.getElementById('nrCarga').value,
      monto: Number(document.getElementById('nrMonto').value),
      progreso: 10,
      estado: 'en_transito',
      eta: '20:30 hs',
      velocidad: 52,
      lat: -34.580,
      lng: -58.420
    };

    company.rutas.unshift(newRoute);
    document.getElementById('newRouteModal').classList.remove('active');
    renderRoutesTable();
    renderDashboardTables();
    renderTrackingView();
    alert(`¡Despacho ${newRoute.id} creado y asignado con telemetría GPS exitosamente!`);
  });

  // Submit Nueva Unidad
  document.getElementById('newVehicleForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = getActiveData();
    const newVeh = {
      id: `veh-${Date.now()}`,
      patente: document.getElementById('nvPatente').value.toUpperCase(),
      marca: document.getElementById('nvMarca').value,
      tipo: document.getElementById('nvTipo').value,
      anio: Number(document.getElementById('nvAnio').value),
      capacidadTn: Number(document.getElementById('nvCapacidad').value),
      km: Number(document.getElementById('nvKm').value),
      estado: 'disponible',
      chofer: 'Sin chofer',
      consumo: 'Óptimo',
      vtv: '2027-10-15',
      seguro: 'Al Día'
    };

    company.vehiculos.unshift(newVeh);
    document.getElementById('newVehicleModal').classList.remove('active');
    renderFleetCards();
    alert(`¡Unidad ${newVeh.patente} incorporada a la flota con éxito!`);
  });

  // Submit Nuevo Conductor
  document.getElementById('newDriverForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = getActiveData();
    const newDriver = {
      id: `ch-${Date.now()}`,
      nombre: document.getElementById('ndNombre').value,
      dni: document.getElementById('ndDni').value,
      licencia: document.getElementById('ndLicencia').value,
      vencimiento: document.getElementById('ndVencimiento').value,
      telefono: document.getElementById('ndTelefono').value,
      estado: 'Disponible',
      moto: 'Sin asignar',
      viajes: 0,
      calif: '5.0 ★'
    };

    company.choferes.unshift(newDriver);
    document.getElementById('newDriverModal').classList.remove('active');
    renderDriversCards();
    alert(`¡Conductor ${newDriver.nombre} registrado con éxito!`);
  });
}

function populateRouteModalSelects() {
  const company = getActiveData();
  document.getElementById('nrCodigo').value = `DSP-2026-${Math.floor(100 + Math.random() * 900)}`;

  const cliSelect = document.getElementById('nrCliente');
  cliSelect.innerHTML = company.clientes.map(c => `<option value="${c.razonSocial}">${c.razonSocial}</option>`).join('');

  const vehSelect = document.getElementById('nrVehiculo');
  vehSelect.innerHTML = company.vehiculos.map(v => `<option value="${v.patente} (${v.marca})">${v.patente} · ${v.marca}</option>`).join('');

  const chSelect = document.getElementById('nrChofer');
  chSelect.innerHTML = company.choferes.map(ch => `<option value="${ch.nombre}">${ch.nombre} (${ch.licencia.split('-')[0]})</option>`).join('');
}

function programarServiceVehiculo(patente) {
  alert(`Se ha generado la orden preventiva de taller para la unidad ${patente}. Turno reservado en concesionario oficial.`);
}

function cambiarEstadoVehiculo(vehId) {
  const company = getActiveData();
  const veh = company.vehiculos.find(v => v.id === vehId);
  if (!veh) return;

  const states = ['disponible', 'ocupado', 'mantenimiento'];
  const nextIdx = (states.indexOf(veh.estado) + 1) % states.length;
  veh.estado = states[nextIdx];
  renderFleetCards();
}

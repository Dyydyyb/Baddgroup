/**
 * BADDGROUP TMS & ERP · SISTEMAS DE GESTIÓN LOGÍSTICA & FLOTAS
 * Entorno de Demostración & Prueba Técnica Integral (2026)
 * Desarrollado oficialmente para Baddgroup
 */

// =============================================================================
// BASE DE DATOS MOCK MULTI-SECTOR LOGÍSTICO
// (Solo referencias técnicas y operativas: Motos & Flex, Pesados & Larga Distancia,
//  Integral B2B/B2C, Industrial & Litoral. Solo branding Baddgroup y prueba).
// =============================================================================
const BADDGROUP_LOGISTICS_SECTORS = {
  motos: {
    id: 'motos',
    sectorTitle: 'Motos & Envíos Flex',
    sectorBadge: 'MOTOS & ENVÍOS FLEX',
    theme: 'motos',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · MOTOS & ENVÍOS FLEX',
    bannerDesc: 'Sistema de prueba para motomensajería urbana, cadetería express, despachos Flex para e-commerce y cobranzas contra entrega en CABA y AMBA.',
    kpis: {
      mes: { facturacion: 18940000, combustible: 4280000, mantenimiento: 1840000, seguros: 1150000, balance: 11670000, margen: 61.6, unidadesRuta: '8 / 14', unidadesRutaPct: '57.1% activas', puntualidad: '98.4%', volumen: '1.480 Envíos', volumenSub: '100% Flex E-commerce', ocupacion: '88.5%', alertas: '1 Próxima', alertasSub: 'VTV Moto A 552 TUV', costoKm: '$ 142 / Km' },
      dia: { facturacion: 780000, combustible: 175000, mantenimiento: 62000, seguros: 41000, balance: 502000, margen: 64.3, unidadesRuta: '8 / 14', unidadesRutaPct: 'Operando CABA', puntualidad: '99.1%', volumen: '74 Envíos', volumenSub: 'Despachos del Día', ocupacion: '91.0%', alertas: '1 Próxima', alertasSub: 'Revisión técnica', costoKm: '$ 138 / Km' },
      semana: { facturacion: 4650000, combustible: 1050000, mantenimiento: 420000, seguros: 280000, balance: 2900000, margen: 62.4, unidadesRuta: '8 / 14', unidadesRutaPct: 'Semana en curso', puntualidad: '98.7%', volumen: '390 Envíos', volumenSub: 'E-commerce Flex', ocupacion: '89.2%', alertas: '1 Próxima', alertasSub: 'VTV preventiva', costoKm: '$ 140 / Km' },
      anio: { facturacion: 214000000, combustible: 49200000, mantenimiento: 21500000, seguros: 13800000, balance: 129500000, margen: 60.5, unidadesRuta: '8 / 14', unidadesRutaPct: 'Capacidad activa', puntualidad: '98.2%', volumen: '17.200 Envíos', volumenSub: 'Total acumulado', ocupacion: '87.8%', alertas: '1 Próxima', alertasSub: 'Plan anual', costoKm: '$ 145 / Km' }
    },
    costStructure: [
      { label: 'Margen Neto Superavitario', pct: 61.6, val: 11670000, color: '#10b981' },
      { label: 'Combustible (Nafta Súper)', pct: 22.6, val: 4280000, color: '#f59e0b' },
      { label: 'Mantenimiento & Cubiertas', pct: 9.7, val: 1840000, color: '#8b5cf6' },
      { label: 'Seguros & Pólizas de Carga', pct: 6.1, val: 1150000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 14200000, viajes: 1120, combustible: 3200000, margen: 60.2 },
      { mes: 'May', fact: 15600000, viajes: 1240, combustible: 3500000, margen: 61.1 },
      { mes: 'Jun', fact: 16800000, viajes: 1310, combustible: 3800000, margen: 61.5 },
      { mes: 'Jul', fact: 17400000, viajes: 1390, combustible: 3950000, margen: 60.8 },
      { mes: 'Ago', fact: 18100000, viajes: 1420, combustible: 4100000, margen: 61.3 },
      { mes: 'Sep', fact: 18940000, viajes: 1480, combustible: 4280000, margen: 61.6 }
    ],
    zones: {
      corredores: [
        { label: 'CABA Norte (Belgrano / Palermo / Núñez)', pct: 32, volumen: '474 despachos', color: '#f59e0b' },
        { label: 'Microcentro / Catalinas / San Nicolás', pct: 28, volumen: '414 despachos', color: '#38bdf8' },
        { label: 'CABA Sur (Barracas / Parque Patricios)', pct: 20, volumen: '296 despachos', color: '#10b981' },
        { label: 'GBA Oeste (Morón / Ramos Mejía / Caseros)', pct: 14, volumen: '207 despachos', color: '#8b5cf6' },
        { label: 'GBA Norte (Vicente López / Olivos)', pct: 6, volumen: '89 despachos', color: '#ec4899' }
      ],
      horarios: [
        { label: '08:00 - 11:30 hs (Colecta Express Matutina)', pct: 26, volumen: '385 envíos', color: '#f59e0b' },
        { label: '12:00 - 15:30 hs (Pico MercadoLibre Flex)', pct: 38, volumen: '562 envíos', color: '#10b981' },
        { label: '16:00 - 19:30 hs (Segunda Vuelta & Enlace)', pct: 28, volumen: '414 envíos', color: '#38bdf8' },
        { label: '20:00 - 22:30 hs (Cierre & Rendición Cobranzas)', pct: 8, volumen: '119 envíos', color: '#8b5cf6' }
      ]
    },
    vehiculos: [
      { id: 'veh-1', patente: 'A 192 JKL', marca: 'Honda CG 150 Titan', tipo: 'Moto c/ Baúl 45L Reforzado', anio: 2023, capacidadTn: 0.035, km: 19420, estado: 'ocupado', chofer: 'Carlos Fernández', consumo: '38 Km/L', vtv: '2027-02-15', seguro: 'Al Día' },
      { id: 'veh-2', patente: 'A 283 MNP', marca: 'Yamaha FZ-S FI 150', tipo: 'Moto Inyección c/ Alforjas', anio: 2024, capacidadTn: 0.035, km: 11200, estado: 'ocupado', chofer: 'Lucas Benítez', consumo: '36 Km/L', vtv: '2027-06-20', seguro: 'Al Día' },
      { id: 'veh-3', patente: 'A 419 QRS', marca: 'Honda Wave 110S', tipo: 'Moto Ligera Envíos Flex Express', anio: 2024, capacidadTn: 0.025, km: 8400, estado: 'ocupado', chofer: 'Franco Morales', consumo: '45 Km/L', vtv: '2027-08-10', seguro: 'Al Día' },
      { id: 'veh-4', patente: 'A 552 TUV', marca: 'Suzuki GN 125F', tipo: 'Moto Clásica c/ Caja Térmica 40L', anio: 2022, capacidadTn: 0.030, km: 28900, estado: 'mantenimiento', chofer: 'Sin chofer', consumo: '35 Km/L', vtv: '2026-10-04', seguro: 'Al Día' },
      { id: 'veh-5', patente: 'A 703 WXY', marca: 'Honda XR 150L', tipo: 'Moto On-Off Carga Urbana', anio: 2023, capacidadTn: 0.040, km: 16800, estado: 'ocupado', chofer: 'Matías Rossi', consumo: '34 Km/L', vtv: '2027-01-28', seguro: 'Al Día' },
      { id: 'veh-6', patente: 'A 890 ZAB', marca: 'Benelli TNT 15', tipo: 'Moto Paquetera Reforzada', anio: 2023, capacidadTn: 0.035, km: 21300, estado: 'ocupado', chofer: 'Rodrigo Almirón', consumo: '36 Km/L', vtv: '2027-03-12', seguro: 'Al Día' },
      { id: 'veh-7', patente: 'A 912 CDE', marca: 'Bajaj Rouser NS 200', tipo: 'Moto Enlace Autopista Rápido', anio: 2024, capacidadTn: 0.040, km: 9200, estado: 'ocupado', chofer: 'Esteban Navarro', consumo: '32 Km/L', vtv: '2027-09-15', seguro: 'Al Día' },
      { id: 'veh-8', patente: 'A 341 FGH', marca: 'Motomel S2 150', tipo: 'Moto Reparto Flex Barrial', anio: 2022, capacidadTn: 0.030, km: 34100, estado: 'ocupado', chofer: 'Agustín Pereyra', consumo: '35 Km/L', vtv: '2026-12-19', seguro: 'Al Día' },
      { id: 'veh-9', patente: 'A 604 IJK', marca: 'Keller Miracle 150', tipo: 'Moto Utilitaria de Apoyo', anio: 2023, capacidadTn: 0.030, km: 18100, estado: 'disponible', chofer: 'Sin asignar', consumo: '37 Km/L', vtv: '2027-04-22', seguro: 'Al Día' },
      { id: 'veh-10', patente: 'A 115 LMN', marca: 'Honda CG 150 Titan', tipo: 'Moto de Base Central', anio: 2023, capacidadTn: 0.035, km: 22400, estado: 'disponible', chofer: 'Sin asignar', consumo: '38 Km/L', vtv: '2027-05-18', seguro: 'Al Día' },
      { id: 'veh-11', patente: 'A 782 OPQ', marca: 'Yamaha YBR 125', tipo: 'Moto Trámite Bancario & Flex', anio: 2022, capacidadTn: 0.025, km: 31000, estado: 'disponible', chofer: 'Sin asignar', consumo: '40 Km/L', vtv: '2026-11-30', seguro: 'Al Día' },
      { id: 'veh-12', patente: 'A 499 RST', marca: 'Zanella ZB 110', tipo: 'Moto Back-up Express', anio: 2021, capacidadTn: 0.020, km: 27500, estado: 'disponible', chofer: 'Sin asignar', consumo: '46 Km/L', vtv: '2027-07-08', seguro: 'Al Día' },
      { id: 'veh-13', patente: 'A 633 UVW', marca: 'Corven Triax 150', tipo: 'Moto On-Off Cargas Pesadas', anio: 2022, capacidadTn: 0.035, km: 29800, estado: 'mantenimiento', chofer: 'Sin chofer', consumo: '34 Km/L', vtv: '2026-10-18', seguro: 'Al Día' },
      { id: 'veh-14', patente: 'A 810 XYZ', marca: 'Honda GLH 150 Gaucha', tipo: 'Moto Urbana Inyección', anio: 2024, capacidadTn: 0.035, km: 6200, estado: 'ocupado', chofer: 'Lautaro Maidana', consumo: '41 Km/L', vtv: '2027-11-25', seguro: 'Al Día' }
    ],
    rutas: [
      { id: 'FLX-2026-081', cliente: 'ElectroNorte Oficial (MeLi)', chofer: 'Carlos Fernández', vehiculo: 'A 192 JKL (Honda CG 150)', origen: 'Depósito Villa Crespo, CABA', destino: 'Belgrano / Núñez (CABA)', carga: 'Envíos Flex Mercado Libre (28 paq.)', monto: 78000, progreso: 82, estado: 'en_transito', eta: '18:15 hs', pago: 'Contra Entrega / MP', bultos: 28, peso: '18 Kg' },
      { id: 'FLX-2026-082', cliente: 'FarmaSalud 24 Sucursales', chofer: 'Lucas Benítez', vehiculo: 'A 283 MNP (Yamaha FZ 150)', origen: 'Laboratorio Microcentro', destino: 'Vicente López / Olivos', carga: 'Medicamentos & Cadena de Frío', monto: 92000, progreso: 65, estado: 'en_transito', eta: '18:45 hs', pago: 'Cuenta Corriente 15d', bultos: 14, peso: '9 Kg' },
      { id: 'FLX-2026-083', cliente: 'Bazar & Hogar Deco SRL', chofer: 'Franco Morales', vehiculo: 'A 419 QRS (Honda Wave)', origen: 'Centro Distribución Once', destino: 'Palermo Soho / Hollywood', carga: 'Flex TiendaNube (19 paq.)', monto: 64000, progreso: 45, estado: 'en_transito', eta: '19:20 hs', pago: 'Transferencia Inmediata', bultos: 19, peso: '12 Kg' },
      { id: 'EXP-2026-084', cliente: 'Estudio Jurídico Marval & Asoc.', chofer: 'Matías Rossi', vehiculo: 'A 703 WXY (Honda XR 150)', origen: 'Catalinas Norte CABA', destino: 'Tribunales de San Isidro', carga: 'Expedientes & Cheques Certificados', monto: 58000, progreso: 90, estado: 'en_transito', eta: '17:50 hs', pago: 'Contra Entrega', bultos: 3, peso: '4 Kg' },
      { id: 'FLX-2026-085', cliente: 'Moda Urbana Outlet', chofer: 'Rodrigo Almirón', vehiculo: 'A 890 ZAB (Benelli TNT 15)', origen: 'Depósito Flores CABA', destino: 'Caballito / Almagro', carga: 'Indumentaria Flex MeLi (34 paq.)', monto: 85000, progreso: 30, estado: 'en_transito', eta: '20:10 hs', pago: 'Cuenta Corriente', bultos: 34, peso: '22 Kg' },
      { id: 'EXP-2026-086', cliente: 'Repuestos Express Warnes', chofer: 'Esteban Navarro', vehiculo: 'A 912 CDE (Bajaj Rouser)', origen: 'Av. Warnes 1420 CABA', destino: 'Talleres Zona Norte Tigre', carga: 'Inyectores y Bobinas de Encendido', monto: 110000, progreso: 55, estado: 'en_transito', eta: '19:00 hs', pago: 'Efectivo Rendido', bultos: 6, peso: '15 Kg' },
      { id: 'FLX-2026-087', cliente: 'TechCell Accesorios', chofer: 'Agustín Pereyra', vehiculo: 'A 341 FGH (Motomel S2)', origen: 'Depósito Lanús Oeste', destino: 'Barracas / Parque Patricios', carga: 'Fundas y Vidrios Templados Flex', monto: 69000, progreso: 70, estado: 'en_transito', eta: '18:30 hs', pago: 'Transferencia MercadoPago', bultos: 25, peso: '10 Kg' },
      { id: 'EXP-2026-088', cliente: 'Laboratorios Raffo CABA', chofer: 'Lautaro Maidana', vehiculo: 'A 810 XYZ (Honda GLH 150)', origen: 'Sede Saavedra CABA', destino: 'Sanatorio Norte & Clínica Olivos', carga: 'Muestras Médicas Urgentes', monto: 52000, progreso: 15, estado: 'en_transito', eta: '20:45 hs', pago: 'Cuenta Corriente', bultos: 4, peso: '5 Kg' }
    ],
    choferes: [
      { id: 'ch-1', nombre: 'Carlos Fernández', dni: '38.412.905', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-04-18', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 192 JKL', viajes: 412, calif: '4.9 ★' },
      { id: 'ch-2', nombre: 'Lucas Benítez', dni: '39.814.220', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2026-11-30', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 283 MNP', viajes: 380, calif: '5.0 ★' },
      { id: 'ch-3', nombre: 'Franco Morales', dni: '41.220.104', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-08-12', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 419 QRS', viajes: 290, calif: '4.8 ★' },
      { id: 'ch-4', nombre: 'Matías Rossi', dni: '37.605.819', licencia: 'A3 - Motovehículos más de 150cc', vencimiento: '2027-03-05', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 703 WXY', viajes: 520, calif: '5.0 ★' },
      { id: 'ch-5', nombre: 'Rodrigo Almirón', dni: '40.119.542', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2026-12-22', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 890 ZAB', viajes: 310, calif: '4.9 ★' },
      { id: 'ch-6', nombre: 'Esteban Navarro', dni: '36.904.318', licencia: 'A3 - Motovehículos más de 150cc', vencimiento: '2027-06-19', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 912 CDE', viajes: 460, calif: '4.9 ★' },
      { id: 'ch-7', nombre: 'Agustín Pereyra', dni: '42.088.115', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-01-14', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 341 FGH', viajes: 180, calif: '4.7 ★' },
      { id: 'ch-8', nombre: 'Lautaro Maidana', dni: '43.190.201', licencia: 'A2 - Motovehículos hasta 150cc', vencimiento: '2027-09-02', telefono: '5491123974066', estado: 'En Ruta', moto: 'A 810 XYZ', viajes: 145, calif: '4.8 ★' }
    ],
    mantenimiento: [
      { id: 'm-1', moto: 'A 552 TUV (Suzuki GN 125)', tarea: 'Service Completo: Aceite Motul 5100, Filtro y Frenos', fecha: '2026-09-14', km: 28900, taller: 'Taller Warnes Integral', costo: 64000, estado: 'En Proceso' },
      { id: 'm-2', moto: 'A 633 UVW (Corven Triax)', tarea: 'Cambio de Transmisión Completa y Ajuste de Válvulas', fecha: '2026-09-15', km: 29800, taller: 'MotoService Belgrano', costo: 72000, estado: 'En Proceso' },
      { id: 'm-3', moto: 'A 192 JKL (Honda CG 150)', tarea: 'Reemplazo de Cubierta Trasera Pirelli City Demon', fecha: '2026-09-08', km: 19000, taller: 'Neumáticos San Martín', costo: 88000, estado: 'Finalizado' },
      { id: 'm-4', moto: 'A 283 MNP (Yamaha FZ 150)', tarea: 'Limpieza de Inyectores por Ultrasonido y Filtro de Aire', fecha: '2026-09-02', km: 11000, taller: 'Motos Inyección Palermo', costo: 52000, estado: 'Finalizado' }
    ],
    agenda: [
      { id: 'ag-1', fecha: '2026-09-16', dia: 16, hora: '13:30', titulo: 'Ronda Flex Colecta 1: MercadoLibre Villa Crespo', unidad: 'Motos #1, #3, #5', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'ag-2', fecha: '2026-09-16', dia: 16, hora: '16:00', titulo: 'Ronda Flex Colecta 2: Once & Microcentro', unidad: 'Motos #2, #6, #7', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'ag-3', fecha: '2026-09-16', dia: 16, hora: '18:30', titulo: 'Rendición de Cobranzas Efectivo Contra Entrega', unidad: 'Central de Cadetería', tipo: 'despacho', prioridad: 'Media' },
      { id: 'ag-4', fecha: '2026-09-18', dia: 18, hora: '09:00', titulo: 'VTV Obligatoria Turno Planta Vicente López', unidad: 'A 552 TUV (Suzuki GN)', tipo: 'vtv', prioridad: 'Urgente' },
      { id: 'ag-5', fecha: '2026-09-21', dia: 21, hora: '08:00', titulo: 'Service Programado 30.000 Km', unidad: 'A 633 UVW (Corven Triax)', tipo: 'taller', prioridad: 'Normal' },
      { id: 'ag-6', fecha: '2026-09-24', dia: 24, hora: '14:00', titulo: 'Ronda Especial Flex CyberMonday Previa', unidad: 'Toda la Flota Activa', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'ag-7', fecha: '2026-09-28', dia: 28, hora: '10:00', titulo: 'Renovación Licencia de Conducir A2', unidad: 'Cadete Lucas Benítez', tipo: 'vtv', prioridad: 'Urgente' }
    ],
    clientes: [
      { id: 'c-1', razonSocial: 'ElectroNorte Oficial SRL', cuit: '30-71449820-1', contacto: 'Mariano Castro', tel: '11 5623-2314', localidad: 'Villa Crespo, CABA', viajes: 320, facturado: 4890000, saldo: '$ 0 (Al Día)' },
      { id: 'c-2', razonSocial: 'FarmaSalud 24 Distribuidora', cuit: '33-70981245-9', contacto: 'Valeria Gómez', tel: '11 4433-2211', localidad: 'Microcentro, CABA', viajes: 280, facturado: 3950000, saldo: '$ 0 (Al Día)' },
      { id: 'c-3', razonSocial: 'Bazar & Hogar Deco Argentina', cuit: '30-71689012-4', contacto: 'Esteban Domínguez', tel: '11 3322-1100', localidad: 'Once, CABA', viajes: 410, facturado: 5120000, saldo: '$ 124.000 (Cta Cte)' },
      { id: 'c-4', razonSocial: 'Estudio Jurídico Marval & Asoc.', cuit: '30-68912344-2', contacto: 'Dra. Patricia Soria', tel: '11 5544-3322', localidad: 'Retiro, CABA', viajes: 140, facturado: 1820000, saldo: '$ 0 (Al Día)' },
      { id: 'c-5', razonSocial: 'Moda Urbana Argentina SA', cuit: '30-71239841-8', contacto: 'Julián Pardo', tel: '11 2397-4066', localidad: 'Flores, CABA', viajes: 215, facturado: 2740000, saldo: '$ 0 (Al Día)' },
      { id: 'c-6', razonSocial: 'TechCell Accesorios Mayorista', cuit: '30-71890145-3', contacto: 'Luciano Rossi', tel: '11 2397-4066', localidad: 'Lanús Oeste, BsAs', viajes: 195, facturado: 2320000, saldo: '$ 85.000 (Cta Cte)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Liquidación Flex MercadoLibre Lote #418', categoria: 'Cobro Fletes Flex', comprobante: 'FC-A 0001-0004128', metodo: 'Transferencia MercadoPago', monto: 1420000 },
      { fecha: '2026-09-15', tipo: 'egreso', desc: 'Combustible Nafta Súper Flota YPF Ruta', categoria: 'Combustible', comprobante: 'TK-00891234', metodo: 'Tarjeta YPF en Ruta', monto: 215000 },
      { fecha: '2026-09-14', tipo: 'ingreso', desc: 'Cobranzas en Destino (Contra Reembolso Efectivo)', categoria: 'Flete Express', comprobante: 'REC-002194', metodo: 'Efectivo Rendido', monto: 480000 },
      { fecha: '2026-09-14', tipo: 'egreso', desc: 'Service Moto A 552 TUV Taller Warnes', categoria: 'Taller Mecánico', comprobante: 'FC-B 0003-0001201', metodo: 'Transferencia Bancaria', monto: 64000 },
      { fecha: '2026-09-13', tipo: 'ingreso', desc: 'Abono Mensual Cadetería Farmacéutica', categoria: 'Abono Corporativo', comprobante: 'FC-A 0001-0004115', metodo: 'Echeq 30d', monto: 890000 },
      { fecha: '2026-09-12', tipo: 'egreso', desc: 'Póliza Seguro Flota Integral Motovehículos', categoria: 'Seguros', comprobante: 'PL-992144', metodo: 'Débito Automático', monto: 380000 }
    ]
  },

  pesados: {
    id: 'pesados',
    sectorTitle: 'Pesados & Larga Distancia',
    sectorBadge: 'PESADOS & LARGA DISTANCIA',
    theme: 'pesados',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · PESADOS & LARGA DISTANCIA',
    bannerDesc: 'Sistema de prueba para transporte federal pesado, semirremolques sider, tolvas cerealeras, bateas y bitrenes de alta capacidad.',
    kpis: {
      mes: { facturacion: 84600000, combustible: 28400000, mantenimiento: 9200000, seguros: 5100000, balance: 41900000, margen: 49.5, unidadesRuta: '8 / 12', unidadesRutaPct: '66.7% en ruta', puntualidad: '97.2%', volumen: '380 Tn Carga', volumenSub: 'Semirremolques Sider', ocupacion: '94.2%', alertas: '2 Próximas', alertasSub: 'R.U.T.A. Semirremolque AF 342', costoKm: '$ 890 / Km' },
      dia: { facturacion: 3450000, combustible: 1120000, mantenimiento: 340000, seguros: 190000, balance: 1800000, margen: 52.1, unidadesRuta: '8 / 12', unidadesRutaPct: 'En tránsito federal', puntualidad: '98.0%', volumen: '42 Tn', volumenSub: 'Despachos del Día', ocupacion: '95.0%', alertas: '2 Próximas', alertasSub: 'Inspección técnica', costoKm: '$ 880 / Km' },
      semana: { facturacion: 21800000, combustible: 7200000, mantenimiento: 2300000, seguros: 1300000, balance: 11000000, margen: 50.4, unidadesRuta: '8 / 12', unidadesRutaPct: 'Promedio semanal', puntualidad: '97.5%', volumen: '115 Tn', volumenSub: 'Corredores viales', ocupacion: '93.8%', alertas: '2 Próximas', alertasSub: 'Revisión técnica', costoKm: '$ 885 / Km' },
      anio: { facturacion: 980000000, combustible: 320000000, mantenimiento: 105000000, seguros: 58000000, balance: 497000000, margen: 50.7, unidadesRuta: '8 / 12', unidadesRutaPct: 'Flota operativa', puntualidad: '96.8%', volumen: '4.800 Tn', volumenSub: 'Acumulado anual', ocupacion: '92.5%', alertas: '2 Próximas', alertasSub: 'Plan preventivo', costoKm: '$ 910 / Km' }
    },
    costStructure: [
      { label: 'Margen Neto Consolidado', pct: 49.5, val: 41900000, color: '#10b981' },
      { label: 'Combustible (Gasoil Grado 3)', pct: 33.6, val: 28400000, color: '#ef4444' },
      { label: 'Taller, Neumáticos & Repuestos', pct: 10.9, val: 9200000, color: '#8b5cf6' },
      { label: 'Seguros de Carga & R.U.T.A.', pct: 6.0, val: 5100000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 68000000, viajes: 94, combustible: 22800000, margen: 48.8 },
      { mes: 'May', fact: 72500000, viajes: 102, combustible: 24200000, margen: 49.2 },
      { mes: 'Jun', fact: 76000000, viajes: 110, combustible: 25500000, margen: 49.0 },
      { mes: 'Jul', fact: 79200000, viajes: 118, combustible: 26800000, margen: 49.4 },
      { mes: 'Ago', fact: 82100000, viajes: 124, combustible: 27500000, margen: 49.8 },
      { mes: 'Sep', fact: 84600000, viajes: 132, combustible: 28400000, margen: 49.5 }
    ],
    zones: {
      corredores: [
        { label: 'Corredor Vaca Muerta (RN 22 / RP 151)', pct: 36, volumen: '48 viajes pesados', color: '#ef4444' },
        { label: 'Eje Panamericana - Rosario - Córdoba', pct: 28, volumen: '37 viajes pesados', color: '#f59e0b' },
        { label: 'Corredor Cuyo (RN 7 Mendoza / San Juan)', pct: 18, volumen: '24 viajes pesados', color: '#10b981' },
        { label: 'Polo Petroquímico Bahía Blanca (RN 3)', pct: 12, volumen: '16 viajes pesados', color: '#38bdf8' },
        { label: 'Corredor NOA (Tucumán / Salta)', pct: 6, volumen: '8 viajes pesados', color: '#8b5cf6' }
      ],
      horarios: [
        { label: '04:00 - 08:00 hs (Salidas Federales Base)', pct: 40, volumen: '53 despachos', color: '#ef4444' },
        { label: '09:00 - 13:00 hs (Control de Carga & Balanzas)', pct: 25, volumen: '33 despachos', color: '#f59e0b' },
        { label: '14:00 - 18:00 hs (Tránsito en Corredor)', pct: 23, volumen: '30 despachos', color: '#10b981' },
        { label: '19:00 - 23:00 hs (Arribo & Descarga en Destino)', pct: 12, volumen: '16 despachos', color: '#38bdf8' }
      ]
    },
    vehiculos: [
      { id: 'veh-z1', patente: 'AF 342 LK', marca: 'Scania R450 6x2', tipo: 'Tractor + Semirremolque Sider 28Tn', anio: 2023, capacidadTn: 28.0, km: 148200, estado: 'ocupado', chofer: 'Roberto Gómez', consumo: '31 L / 100Km', vtv: '2027-04-15', seguro: 'Al Día' },
      { id: 'veh-z2', patente: 'AE 918 MM', marca: 'Mercedes-Benz Actros 2645', tipo: 'Tractor + Batea Volcadora 30Tn', anio: 2022, capacidadTn: 30.0, km: 210400, estado: 'ocupado', chofer: 'Carlos Rossi', consumo: '33 L / 100Km', vtv: '2026-11-20', seguro: 'Al Día' },
      { id: 'veh-z3', patente: 'AC 512 PK', marca: 'Iveco Tector 170E28', tipo: 'Camión Chasis Carga General 14Tn', anio: 2021, capacidadTn: 14.0, km: 285000, estado: 'disponible', chofer: 'Sin chofer', consumo: '26 L / 100Km', vtv: '2027-08-30', seguro: 'Al Día' },
      { id: 'veh-z4', patente: 'AD 881 BB', marca: 'Volvo FH 500 Globetrotter', tipo: 'Tractor Bitren Carga Pesada 35Tn', anio: 2023, capacidadTn: 35.0, km: 112000, estado: 'ocupado', chofer: 'Marcos Benítez', consumo: '35 L / 100Km', vtv: '2027-05-14', seguro: 'Al Día' },
      { id: 'veh-z5', patente: 'AF 703 QR', marca: 'Volkswagen Constellation 19.320', tipo: 'Tractor + Semirremolque Baranda Volcable', anio: 2022, capacidadTn: 26.0, km: 179000, estado: 'ocupado', chofer: 'Facundo Morales', consumo: '30 L / 100Km', vtv: '2027-01-20', seguro: 'Al Día' },
      { id: 'veh-z6', patente: 'AE 114 CD', marca: 'Scania G410 Highline', tipo: 'Tractor + Tolva Cerealera 32Tn', anio: 2023, capacidadTn: 32.0, km: 135000, estado: 'ocupado', chofer: 'Héctor Romero', consumo: '32 L / 100Km', vtv: '2027-03-25', seguro: 'Al Día' },
      { id: 'veh-z7', patente: 'AD 405 EF', marca: 'Mercedes-Benz Axor 2036', tipo: 'Tractor Cargas Peligrosas / Químicos', anio: 2021, capacidadTn: 25.0, km: 240000, estado: 'mantenimiento', chofer: 'Sin chofer', consumo: '29 L / 100Km', vtv: '2026-10-15', seguro: 'Al Día' },
      { id: 'veh-z8', patente: 'AC 920 GH', marca: 'Iveco Stralis Hi-Way 440', tipo: 'Tractor + Semirremolque Térmico 28Tn', anio: 2022, capacidadTn: 28.0, km: 198000, estado: 'ocupado', chofer: 'Mariano Castro', consumo: '31 L / 100Km', vtv: '2027-07-12', seguro: 'Al Día' },
      { id: 'veh-z9', patente: 'AF 210 IJ', marca: 'Scania R450 6x4', tipo: 'Tractor Forestal & Minero 36Tn', anio: 2024, capacidadTn: 36.0, km: 54000, estado: 'disponible', chofer: 'Sin chofer', consumo: '36 L / 100Km', vtv: '2027-09-08', seguro: 'Al Día' },
      { id: 'veh-z10', patente: 'AD 552 KL', marca: 'Ford Cargo 1723', tipo: 'Camión Chasis c/ Acoplado 24Tn', anio: 2020, capacidadTn: 24.0, km: 310000, estado: 'disponible', chofer: 'Sin chofer', consumo: '28 L / 100Km', vtv: '2026-12-05', seguro: 'Al Día' },
      { id: 'veh-z11', patente: 'AE 780 MN', marca: 'Volvo VM 330', tipo: 'Tractor Semirremolque Playo 26Tn', anio: 2022, capacidadTn: 26.0, km: 165000, estado: 'ocupado', chofer: 'Rubén Acuña', consumo: '30 L / 100Km', vtv: '2027-02-18', seguro: 'Al Día' },
      { id: 'veh-z12', patente: 'AF 904 OP', marca: 'Mercedes-Benz Actros 2651', tipo: 'Bitren Autopista 40Tn', anio: 2024, capacidadTn: 40.0, km: 41000, estado: 'ocupado', chofer: 'Diego Luna', consumo: '37 L / 100Km', vtv: '2027-10-30', seguro: 'Al Día' }
    ],
    rutas: [
      { id: 'RUT-2026-101', cliente: 'Siderurgia & Tubos Industriales', chofer: 'Roberto Gómez', vehiculo: 'AF 342 LK (Scania R450)', origen: 'Campana (Buenos Aires)', destino: 'Añelo (Vaca Muerta, Neuquén)', carga: 'Tubos sin Costura para Gasoducto (26 Tn)', monto: 4850000, progreso: 68, estado: 'en_transito', eta: 'Mañana 07:30 hs', pago: 'Transferencia Bancaria 30d', bultos: 48, peso: '26.000 Kg' },
      { id: 'RUT-2026-102', cliente: 'Consumo Masivo & Alimentos SA', chofer: 'Carlos Rossi', vehiculo: 'AE 918 MM (Mercedes Actros)', origen: 'Parque Industrial Pacheco', destino: 'Centro Distribución Córdoba Capital', carga: 'Pallets Productos Alimenticios Consumo Masivo', monto: 2950000, progreso: 85, estado: 'en_transito', eta: 'Hoy 22:15 hs', pago: 'Echeq 15d', bultos: 28, peso: '24.000 Kg' },
      { id: 'RUT-2026-103', cliente: 'Laminados y Perfiles Zárate', chofer: 'Marcos Benítez', vehiculo: 'AD 881 BB (Volvo FH 500)', origen: 'Puerto de Zárate (BsAs)', destino: 'Parque Industrial Mendoza Capital', carga: 'Perfiles de Acero Laminado en Caliente', monto: 4400000, progreso: 42, estado: 'en_transito', eta: 'Mañana 14:00 hs', pago: 'Transferencia Bancaria', bultos: 18, peso: '32.000 Kg' },
      { id: 'RUT-2026-104', cliente: 'Petroquímica Bahía Blanca', chofer: 'Facundo Morales', vehiculo: 'AF 703 QR (VW Constellation)', origen: 'Polo Petroquímico Bahía Blanca', destino: 'San Martín (Buenos Aires)', carga: 'Resinas Plásticas en Big Bags (24 Tn)', monto: 3150000, progreso: 30, estado: 'en_transito', eta: 'Mañana 18:30 hs', pago: 'Transferencia Echeq', bultos: 24, peso: '24.000 Kg' },
      { id: 'RUT-2026-105', cliente: 'Aceros del Plata SA', chofer: 'Héctor Romero', vehiculo: 'AE 114 CD (Scania G410)', origen: 'San Nicolás de los Arroyos', destino: 'San Francisco (Córdoba)', carga: 'Alambrón en Rollos de Exportación', monto: 3650000, progreso: 74, estado: 'en_transito', eta: 'Hoy 23:45 hs', pago: 'Transferencia 30d', bultos: 14, peso: '28.000 Kg' },
      { id: 'RUT-2026-106', cliente: 'YPF Logística Upstream', chofer: 'Mariano Castro', vehiculo: 'AC 920 GH (Iveco Stralis)', origen: 'Ensenada / La Plata', destino: 'Rincón de los Sauces (Neuquén)', carga: 'Equipamiento Valvular y Repuestos Pesados', monto: 5400000, progreso: 52, estado: 'en_transito', eta: 'Pasado mañana 09:00 hs', pago: 'Transferencia 60d', bultos: 8, peso: '22.000 Kg' },
      { id: 'RUT-2026-107', cliente: 'Loma Negra Cemento & Áridos', chofer: 'Rubén Acuña', vehiculo: 'AE 780 MN (Volvo VM 330)', origen: 'Planta Olavarría', destino: 'Obras Zárate / Campana', carga: 'Pallets Cemento Portland Especial (26 Tn)', monto: 2800000, progreso: 91, estado: 'en_transito', eta: 'Hoy 20:00 hs', pago: 'Echeq 30d', bultos: 32, peso: '26.000 Kg' },
      { id: 'RUT-2026-108', cliente: 'Minera Andina San Juan', chofer: 'Diego Luna', vehiculo: 'AF 904 OP (Mercedes Actros Bitren)', origen: 'Campana Puerto', destino: 'Jáchal / Iglesia (San Juan)', carga: 'Insumos Mineros y Estructuras Indivisibles', monto: 6200000, progreso: 20, estado: 'en_transito', eta: 'Pasado mañana 16:30 hs', pago: 'Transferencia Bancaria', bultos: 6, peso: '38.000 Kg' }
    ],
    choferes: [
      { id: 'ch-z1', nombre: 'Roberto Gómez', dni: '28.450.119', licencia: 'E1 - Semirremolques y Articulados', vencimiento: '2027-04-15', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 342 LK', viajes: 580, calif: '5.0 ★' },
      { id: 'ch-z2', nombre: 'Carlos Rossi', dni: '31.229.804', licencia: 'E1 - Cargas Generales & LiNTI', vencimiento: '2026-11-20', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 918 MM', viajes: 620, calif: '4.9 ★' },
      { id: 'ch-z3', nombre: 'Marcos Benítez', dni: '35.610.420', licencia: 'E2 - Bitrenes y Cargas Especiales', vencimiento: '2027-08-30', telefono: '5491123974066', estado: 'En Ruta', moto: 'AD 881 BB', viajes: 490, calif: '5.0 ★' },
      { id: 'ch-z4', nombre: 'Facundo Morales', dni: '34.190.412', licencia: 'E1 - Cargas Generales Federales', vencimiento: '2027-01-20', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 703 QR', viajes: 410, calif: '4.8 ★' },
      { id: 'ch-z5', nombre: 'Héctor Romero', dni: '30.118.904', licencia: 'E1 - Tolvas y Cargas a Granel', vencimiento: '2027-03-25', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 114 CD', viajes: 530, calif: '4.9 ★' },
      { id: 'ch-z6', nombre: 'Mariano Castro', dni: '32.905.112', licencia: 'E1 - Mercancías Peligrosas / LiNTI', vencimiento: '2027-07-12', telefono: '5491123974066', estado: 'En Ruta', moto: 'AC 920 GH', viajes: 470, calif: '5.0 ★' },
      { id: 'ch-z7', nombre: 'Rubén Acuña', dni: '33.812.449', licencia: 'E1 - Chasis con Acoplado y Playo', vencimiento: '2027-02-18', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 780 MN', viajes: 390, calif: '4.9 ★' },
      { id: 'ch-z8', nombre: 'Diego Luna', dni: '29.714.220', licencia: 'E2 - Bitrenes y Sobredimensionados', vencimiento: '2027-10-30', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 904 OP', viajes: 650, calif: '5.0 ★' }
    ],
    mantenimiento: [
      { id: 'mz-1', moto: 'AF 342 LK (Scania R450)', tarea: 'Service Oficial 150.000 Km: Aceite Sintético Scania LDF-4 y Filtros', fecha: '2026-09-10', km: 148200, taller: 'Concesionario Scania Pacheco', costo: 890000, estado: 'Finalizado' },
      { id: 'mz-2', moto: 'AD 405 EF (Mercedes Axor)', tarea: 'Prueba Hidráulica Cisterna y Certificación Mercancías Peligrosas', fecha: '2026-09-14', km: 240000, taller: 'Taller Calibración Certificada Zárate', costo: 640000, estado: 'En Proceso' },
      { id: 'mz-3', moto: 'AD 881 BB (Volvo FH 500)', tarea: 'Alineación Láser Eje Doble y Calibración Neumática Bitren', fecha: '2026-09-06', km: 112000, taller: 'Taller Integral Neumáticos Tigre', costo: 480000, estado: 'Finalizado' },
      { id: 'mz-4', moto: 'AE 918 MM (Mercedes Actros)', tarea: 'Reemplazo de Balancín y Zapatas de Freno Remolque', fecha: '2026-09-03', km: 210400, taller: 'Frenos Pesados Campana', costo: 520000, estado: 'Finalizado' },
      { id: 'mz-5', moto: 'AF 703 QR (VW Constellation)', tarea: 'Revisión y Ajuste de Quinto Plato Jost 2 pulgadas', fecha: '2026-08-28', km: 179000, taller: 'Chasis & Ejes San Nicolás', costo: 310000, estado: 'Finalizado' }
    ],
    agenda: [
      { id: 'agz-1', fecha: '2026-09-17', dia: 17, hora: '06:00', titulo: 'Salida Bitren Carga Tuberías hacia Vaca Muerta', unidad: 'AD 881 BB', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'agz-2', fecha: '2026-09-19', dia: 19, hora: '10:00', titulo: 'Inspección Técnica y Certificado R.U.T.A.', unidad: 'AF 342 LK', tipo: 'vtv', prioridad: 'Urgente' },
      { id: 'agz-3', fecha: '2026-09-22', dia: 22, hora: '08:00', titulo: 'Revisión Balanza y Zapatas de Freno Eje Triple', unidad: 'AE 918 MM', tipo: 'taller', prioridad: 'Normal' },
      { id: 'agz-4', fecha: '2026-09-24', dia: 24, hora: '05:30', titulo: 'Despacho Carga Sobredimensionada Minera San Juan', unidad: 'AF 904 OP', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'agz-5', fecha: '2026-09-26', dia: 26, hora: '09:00', titulo: 'Renovación Psicofísica LiNTI Conductor', unidad: 'Chofer Carlos Rossi', tipo: 'vtv', prioridad: 'Urgente' },
      { id: 'agz-6', fecha: '2026-09-29', dia: 29, hora: '14:00', titulo: 'Revisión Preventiva Tacógrafo Homologado', unidad: 'AF 703 QR', tipo: 'taller', prioridad: 'Normal' }
    ],
    clientes: [
      { id: 'cz-1', razonSocial: 'Siderurgia & Tubos Industriales SA', cuit: '30-50001234-8', contacto: 'Ing. Marcelo Varela', tel: '11 2397-4066', localidad: 'Campana, BsAs', viajes: 84, facturado: 38200000, saldo: '$ 0 (Al Día)' },
      { id: 'cz-2', razonSocial: 'Consumo Masivo & Alimentos SA', cuit: '30-50123984-2', contacto: 'Lic. Laura Benítez', tel: '11 2397-4066', localidad: 'Pacheco, BsAs', viajes: 65, facturado: 26400000, saldo: '$ 0 (Al Día)' },
      { id: 'cz-3', razonSocial: 'Laminados y Perfiles Zárate SRL', cuit: '30-58914201-9', contacto: 'Ing. Gustavo Ferrero', tel: '11 2397-4066', localidad: 'Zárate, BsAs', viajes: 52, facturado: 22800000, saldo: '$ 1.450.000 (Cta Cte)' },
      { id: 'cz-4', razonSocial: 'YPF Logística Upstream SA', cuit: '30-54668997-4', contacto: 'Lic. Federico Almada', tel: '11 2397-4066', localidad: 'Ensenada / Neuquén', viajes: 44, facturado: 24200000, saldo: '$ 0 (Al Día)' },
      { id: 'cz-5', razonSocial: 'Minera Andina San Juan SA', cuit: '30-61298455-1', contacto: 'Ing. Pablo Giménez', tel: '11 2397-4066', localidad: 'Jáchal, San Juan', viajes: 31, facturado: 18600000, saldo: '$ 0 (Al Día)' },
      { id: 'cz-6', razonSocial: 'Loma Negra Cemento & Áridos', cuit: '30-50004128-5', contacto: 'Martín Cabrera', tel: '11 2397-4066', localidad: 'Olavarría, BsAs', viajes: 58, facturado: 19400000, saldo: '$ 0 (Al Día)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Pago Flete Larga Distancia Vaca Muerta Gasoducto', categoria: 'Cobro Fletes', comprobante: 'FC-A 0005-0001890', metodo: 'Transferencia Bancaria', monto: 4850000 },
      { fecha: '2026-09-15', tipo: 'egreso', desc: 'Combustible Diésel YPF en Ruta 28.000 Litros', categoria: 'Combustible', comprobante: 'FC-A YPF-8910', metodo: 'Cuenta Corriente YPF', monto: 3200000 },
      { fecha: '2026-09-14', tipo: 'ingreso', desc: 'Certificación Fletes de Acero Córdoba', categoria: 'Cobro Fletes', comprobante: 'FC-A 0005-0001888', metodo: 'Echeq 30d', monto: 2950000 },
      { fecha: '2026-09-13', tipo: 'egreso', desc: 'Service Oficial 150k Scania Concesionario', categoria: 'Taller Mecánico', comprobante: 'FC-A 0012-0004112', metodo: 'Transferencia Bancaria', monto: 890000 },
      { fecha: '2026-09-12', tipo: 'ingreso', desc: 'Adelanto de Flete Bitren Minera San Juan', categoria: 'Cobro Fletes', comprobante: 'FC-A 0005-0001885', metodo: 'Transferencia Bancaria', monto: 3100000 },
      { fecha: '2026-09-10', tipo: 'egreso', desc: 'Telepase & Peajes Corredores Viales Nacionales', categoria: 'Peajes', comprobante: 'TK-CV-44129', metodo: 'Débito Automático', monto: 420000 }
    ]
  },

  integral: {
    id: 'integral',
    sectorTitle: 'Integral B2B / B2C',
    sectorBadge: 'INTEGRAL B2B / B2C',
    theme: 'integral',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · INTEGRAL B2B & B2C',
    bannerDesc: 'Sistema de prueba para distribución capilar urbana, hub de cross-docking, paquetería e-commerce y furgones utilitarios.',
    kpis: {
      mes: { facturacion: 36800000, combustible: 9400000, mantenimiento: 3200000, seguros: 1950000, balance: 22250000, margen: 60.4, unidadesRuta: '8 / 12', unidadesRutaPct: '66.7% en reparto', puntualidad: '98.9%', volumen: '4.200 Bultos', volumenSub: 'Cross-docking B2B', ocupacion: '91.2%', alertas: '1 Próxima', alertasSub: 'Service 40k Sprinter AF 703', costoKm: '$ 285 / Km' },
      dia: { facturacion: 1450000, combustible: 380000, mantenimiento: 120000, seguros: 75000, balance: 875000, margen: 60.3, unidadesRuta: '8 / 12', unidadesRutaPct: 'En reparto', puntualidad: '99.2%', volumen: '185 Bultos', volumenSub: 'Despachos del Día', ocupacion: '92.0%', alertas: '1 Próxima', alertasSub: 'Plan preventivo', costoKm: '$ 280 / Km' },
      semana: { facturacion: 9100000, combustible: 2350000, mantenimiento: 780000, seguros: 480000, balance: 5490000, margen: 60.3, unidadesRuta: '8 / 12', unidadesRutaPct: 'Semana en curso', puntualidad: '98.8%', volumen: '980 Bultos', volumenSub: 'Envíos corporativos', ocupacion: '90.5%', alertas: '1 Próxima', alertasSub: 'Mantenimiento', costoKm: '$ 282 / Km' },
      anio: { facturacion: 418000000, combustible: 108000000, mantenimiento: 37000000, seguros: 22000000, balance: 251000000, margen: 60.0, unidadesRuta: '8 / 12', unidadesRutaPct: 'Flota operativa', puntualidad: '98.5%', volumen: '48.000 Bultos', volumenSub: 'Total anual', ocupacion: '89.5%', alertas: '1 Próxima', alertasSub: 'Programación', costoKm: '$ 290 / Km' }
    },
    costStructure: [
      { label: 'Margen Operativo Neto', pct: 60.4, val: 22250000, color: '#10b981' },
      { label: 'Combustible Diésel / Nafta', pct: 25.5, val: 9400000, color: '#06b6d4' },
      { label: 'Mantenimiento Furgones & Utilitarios', pct: 8.7, val: 3200000, color: '#8b5cf6' },
      { label: 'Seguros de Mercadería en Tránsito', pct: 5.4, val: 1950000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 28500000, viajes: 320, combustible: 7400000, margen: 59.8 },
      { mes: 'May', fact: 30200000, viajes: 345, combustible: 7800000, margen: 60.2 },
      { mes: 'Jun', fact: 32400000, viajes: 370, combustible: 8300000, margen: 60.5 },
      { mes: 'Jul', fact: 34100000, viajes: 395, combustible: 8700000, margen: 60.1 },
      { mes: 'Ago', fact: 35600000, viajes: 410, combustible: 9100000, margen: 60.3 },
      { mes: 'Sep', fact: 36800000, viajes: 430, combustible: 9400000, margen: 60.4 }
    ],
    zones: {
      corredores: [
        { label: 'Hub Central Pacheco & Panamericana', pct: 32, volumen: '138 recorridos', color: '#06b6d4' },
        { label: 'CABA Distribución Capilar y Retail', pct: 28, volumen: '120 recorridos', color: '#10b981' },
        { label: 'Corredor Sur (Quilmes / Lanús / La Plata)', pct: 22, volumen: '95 recorridos', color: '#38bdf8' },
        { label: 'Acceso Oeste & San Martín Industrial', pct: 18, volumen: '77 recorridos', color: '#f59e0b' }
      ],
      horarios: [
        { label: '06:30 - 09:30 hs (Cross-Docking Carga)', pct: 34, volumen: '146 despachos', color: '#06b6d4' },
        { label: '10:00 - 13:30 hs (Ronda Sucursales 1)', pct: 30, volumen: '129 despachos', color: '#10b981' },
        { label: '14:00 - 17:30 hs (Ronda Sucursales 2)', pct: 26, volumen: '112 despachos', color: '#38bdf8' },
        { label: '18:00 - 21:00 hs (Retorno & Cierre)', pct: 10, volumen: '43 despachos', color: '#f59e0b' }
      ]
    },
    vehiculos: [
      { id: 'veh-h1', patente: 'AF 703 QR', marca: 'Mercedes-Benz Sprinter 516', tipo: 'Furgón Extra Largo 14 m3', anio: 2023, capacidadTn: 2.8, km: 38200, estado: 'ocupado', chofer: 'Damián Soria', consumo: '11 L / 100Km', vtv: '2027-03-18', seguro: 'Al Día' },
      { id: 'veh-h2', patente: 'AD 912 BB', marca: 'Iveco Daily 70C17', tipo: 'Furgón Paquetero c/ Rampa Hidráulica', anio: 2022, capacidadTn: 4.2, km: 64100, estado: 'ocupado', chofer: 'Gonzalo Silva', consumo: '13 L / 100Km', vtv: '2026-12-10', seguro: 'Al Día' },
      { id: 'veh-h3', patente: 'AE 441 CC', marca: 'Renault Master L2H2', tipo: 'Furgón Distribución Urbana 10 m3', anio: 2024, capacidadTn: 1.8, km: 19400, estado: 'ocupado', chofer: 'Federico Rivas', consumo: '9.5 L / 100Km', vtv: '2027-08-22', seguro: 'Al Día' },
      { id: 'veh-h4', patente: 'AF 119 DD', marca: 'Ford Transit 350L', tipo: 'Furgón Mediano Paquetería', anio: 2023, capacidadTn: 2.0, km: 27800, estado: 'ocupado', chofer: 'Nicolás Vega', consumo: '10 L / 100Km', vtv: '2027-05-15', seguro: 'Al Día' },
      { id: 'veh-h5', patente: 'AC 840 EE', marca: 'Mercedes-Benz Sprinter 415', tipo: 'Furgón Corto Enlaces Rápidos', anio: 2021, capacidadTn: 1.6, km: 78000, estado: 'disponible', chofer: 'Sin chofer', consumo: '10.5 L / 100Km', vtv: '2026-11-05', seguro: 'Al Día' },
      { id: 'veh-h6', patente: 'AE 220 FF', marca: 'Iveco Daily 55C16', tipo: 'Chasis Paquetero Caja Seca', anio: 2022, capacidadTn: 3.5, km: 52000, estado: 'disponible', chofer: 'Sin chofer', consumo: '12 L / 100Km', vtv: '2027-01-30', seguro: 'Al Día' },
      { id: 'veh-h7', patente: 'AD 671 GG', marca: 'Peugeot Boxer L3H2', tipo: 'Furgón Térmico Productos Fríos', anio: 2022, capacidadTn: 1.9, km: 69000, estado: 'mantenimiento', chofer: 'Sin chofer', consumo: '10 L / 100Km', vtv: '2026-10-25', seguro: 'Al Día' },
      { id: 'veh-h8', patente: 'AF 532 HH', marca: 'Peugeot Partner Confort', tipo: 'Utilitario Ligero Reparto Postal', anio: 2024, capacidadTn: 0.8, km: 12400, estado: 'ocupado', chofer: 'Maximiliano Godoy', consumo: '6.5 L / 100Km', vtv: '2027-09-12', seguro: 'Al Día' },
      { id: 'veh-h9', patente: 'AE 318 II', marca: 'Renault Kangoo Maxi', tipo: 'Furgón Compacto Express B2C', anio: 2023, capacidadTn: 0.9, km: 24100, estado: 'ocupado', chofer: 'Sebastián Blanco', consumo: '6.8 L / 100Km', vtv: '2027-04-10', seguro: 'Al Día' },
      { id: 'veh-h10', patente: 'AD 104 JJ', marca: 'Citroën Berlingo Furgón', tipo: 'Utilitario Muestras Médicas', anio: 2022, capacidadTn: 0.8, km: 41200, estado: 'ocupado', chofer: 'Ignacio Ortiz', consumo: '6.6 L / 100Km', vtv: '2026-12-28', seguro: 'Al Día' },
      { id: 'veh-h11', patente: 'AF 890 KK', marca: 'Fiat Ducato Maxi Cargo', tipo: 'Furgón Volumen 13 m3', anio: 2024, capacidadTn: 2.4, km: 15600, estado: 'ocupado', chofer: 'Ezequiel Paz', consumo: '11.5 L / 100Km', vtv: '2027-11-04', seguro: 'Al Día' },
      { id: 'veh-h12', patente: 'AE 602 LL', marca: 'Mercedes-Benz Sprinter 311', tipo: 'Furgón Corto Apoyo Central', anio: 2022, capacidadTn: 1.4, km: 62000, estado: 'disponible', chofer: 'Sin chofer', consumo: '9.8 L / 100Km', vtv: '2027-02-14', seguro: 'Al Día' }
    ],
    rutas: [
      { id: 'INT-2026-201', cliente: 'Mayorista & Distribución Retail', chofer: 'Damián Soria', vehiculo: 'AF 703 QR (Mercedes Sprinter)', origen: 'Hub Central San Martín', destino: 'Circuito 14 Sucursales CABA Norte', carga: 'Bazar, Retail & Electrodomésticos', monto: 340000, progreso: 72, estado: 'en_transito', eta: '18:50 hs', pago: 'Cuenta Corriente', bultos: 140, peso: '1.400 Kg' },
      { id: 'INT-2026-202', cliente: 'Cadena Supermercados & Alimentos', chofer: 'Gonzalo Silva', vehiculo: 'AD 912 BB (Iveco Daily)', origen: 'Depósito Pacheco (BsAs)', destino: 'La Plata Hipermercados', carga: 'Lote Alimentos No Perecederos', monto: 490000, progreso: 50, estado: 'en_transito', eta: '19:40 hs', pago: 'Transferencia Echeq', bultos: 210, peso: '3.800 Kg' },
      { id: 'INT-2026-203', cliente: 'Librerías & Papelería Central', chofer: 'Federico Rivas', vehiculo: 'AE 441 CC (Renault Master)', origen: 'Parque Industrial Pilar', destino: 'San Isidro / Vicente López', carga: 'Insumos Escolares y Papelería B2B', monto: 280000, progreso: 85, estado: 'en_transito', eta: '18:15 hs', pago: 'Transferencia 15d', bultos: 95, peso: '1.200 Kg' },
      { id: 'INT-2026-204', cliente: 'Tecnología & Consumo Gamer', chofer: 'Nicolás Vega', vehiculo: 'AF 119 DD (Ford Transit)', origen: 'Distrito Tecnológico CABA', destino: 'Morón / Ramos Mejía', carga: 'Monitores y Periféricos E-commerce', monto: 310000, progreso: 35, estado: 'en_transito', eta: '20:10 hs', pago: 'Cuenta Corriente', bultos: 64, peso: '900 Kg' },
      { id: 'INT-2026-205', cliente: 'Distribuidora Cosmética Belleza', chofer: 'Maximiliano Godoy', vehiculo: 'AF 532 HH (Partner Confort)', origen: 'Depósito Munro', destino: 'Palermo / Recoleta / Belgrano', carga: 'Perfumería Fina & Cosmética Capilar', monto: 195000, progreso: 60, estado: 'en_transito', eta: '19:00 hs', pago: 'Transferencia Inmediata', bultos: 48, peso: '450 Kg' },
      { id: 'INT-2026-206', cliente: 'Cadena Pinturerías del Plata', chofer: 'Sebastián Blanco', vehiculo: 'AE 318 II (Kangoo Maxi)', origen: 'Planta Lomas del Mirador', destino: 'Quilmes / Avellaneda', carga: 'Lacas, Esmaltes y Rodillos Profesionales', monto: 230000, progreso: 78, estado: 'en_transito', eta: '18:30 hs', pago: 'Echeq 30d', bultos: 55, peso: '750 Kg' },
      { id: 'INT-2026-207', cliente: 'Laboratorio Diagnóstico Sur', chofer: 'Ignacio Ortiz', vehiculo: 'AD 104 JJ (Citroën Berlingo)', origen: 'Sede Barracas CABA', destino: 'Clínicas La Plata / Berisso', carga: 'Reactivos Médicos Refrigerados', monto: 260000, progreso: 40, estado: 'en_transito', eta: '19:50 hs', pago: 'Cuenta Corriente', bultos: 22, peso: '380 Kg' },
      { id: 'INT-2026-208', cliente: 'Ferretería Industrial del Oeste', chofer: 'Ezequiel Paz', vehiculo: 'AF 890 KK (Fiat Ducato Maxi)', origen: 'Centro Distribución Caseros', destino: 'San Miguel / Moreno', carga: 'Herramientas Eléctricas y Bulonería', monto: 350000, progreso: 25, estado: 'en_transito', eta: '20:30 hs', pago: 'Transferencia 15d', bultos: 110, peso: '1.950 Kg' }
    ],
    choferes: [
      { id: 'ch-h1', nombre: 'Damián Soria', dni: '34.810.992', licencia: 'B2 - Utilitarios y Furgones hasta 3.5Tn', vencimiento: '2027-05-18', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 703 QR', viajes: 420, calif: '4.9 ★' },
      { id: 'ch-h2', nombre: 'Gonzalo Silva', dni: '32.419.004', licencia: 'C1 - Camiones Livianos hasta 12Tn', vencimiento: '2026-11-14', telefono: '5491123974066', estado: 'En Ruta', moto: 'AD 912 BB', viajes: 510, calif: '5.0 ★' },
      { id: 'ch-h3', nombre: 'Federico Rivas', dni: '36.220.180', licencia: 'B2 - Utilitarios de Carga', vencimiento: '2027-08-22', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 441 CC', viajes: 340, calif: '4.8 ★' },
      { id: 'ch-h4', nombre: 'Nicolás Vega', dni: '38.109.552', licencia: 'B2 - Furgones Medianos', vencimiento: '2027-05-15', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 119 DD', viajes: 295, calif: '4.9 ★' },
      { id: 'ch-h5', nombre: 'Maximiliano Godoy', dni: '37.894.210', licencia: 'B1 - Utilitarios Ligeros', vencimiento: '2027-09-12', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 532 HH', viajes: 380, calif: '4.9 ★' },
      { id: 'ch-h6', nombre: 'Sebastián Blanco', dni: '35.405.118', licencia: 'B1 - Reparto Urbano', vencimiento: '2027-04-10', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 318 II', viajes: 410, calif: '5.0 ★' },
      { id: 'ch-h7', nombre: 'Ignacio Ortiz', dni: '39.012.884', licencia: 'B2 - Cargas Médicas Refrigeradas', vencimiento: '2026-12-28', telefono: '5491123974066', estado: 'En Ruta', moto: 'AD 104 JJ', viajes: 260, calif: '4.8 ★' },
      { id: 'ch-h8', nombre: 'Ezequiel Paz', dni: '33.901.442', licencia: 'B2 - Utilitarios y Furgones', vencimiento: '2027-11-04', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 890 KK', viajes: 480, calif: '5.0 ★' }
    ],
    mantenimiento: [
      { id: 'mh-1', moto: 'AD 671 GG (Peugeot Boxer)', tarea: 'Service y Carga de Gas Equipo de Frío ThermoKing', fecha: '2026-09-14', km: 69000, taller: 'Taller Frigorífico San Martín', costo: 210000, estado: 'En Proceso' },
      { id: 'mh-2', moto: 'AF 703 QR (Mercedes Sprinter)', tarea: 'Service 40.000 Km Oficial: Aceite Sintético y Pastillas Delanteras', fecha: '2026-09-08', km: 38200, taller: 'Concesionario Mercedes Colcar', costo: 340000, estado: 'Finalizado' },
      { id: 'mh-3', moto: 'AD 912 BB (Iveco Daily)', tarea: 'Mantenimiento Hidráulico Rampa y Batería Nueva 110A', fecha: '2026-09-02', km: 64100, taller: 'Hidráulica Pesada Munro', costo: 280000, estado: 'Finalizado' },
      { id: 'mh-4', moto: 'AE 441 CC (Renault Master)', tarea: 'Cambio de Neumáticos Michelin Agilis Delanteros', fecha: '2026-08-27', km: 19400, taller: 'Neumáticos del Norte Pacheco', costo: 390000, estado: 'Finalizado' }
    ],
    agenda: [
      { id: 'agh-1', fecha: '2026-09-16', dia: 16, hora: '14:00', titulo: 'Salida Consolidada La Plata Reparto Nocturno', unidad: 'AD 912 BB', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'agh-2', fecha: '2026-09-18', dia: 18, hora: '08:30', titulo: 'Ronda Cross-Docking Hub Pilar & Panamericana', unidad: 'AF 703 QR & AF 119 DD', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'agh-3', fecha: '2026-09-20', dia: 20, hora: '09:30', titulo: 'Mantenimiento Preventivo Rampa Hidráulica', unidad: 'AD 912 BB', tipo: 'taller', prioridad: 'Normal' },
      { id: 'agh-4', fecha: '2026-09-23', dia: 23, hora: '10:00', titulo: 'Inspección Sanitaria SENASA Transporte Alimentos', unidad: 'AD 671 GG', tipo: 'vtv', prioridad: 'Urgente' },
      { id: 'agh-5', fecha: '2026-09-25', dia: 25, hora: '15:00', titulo: 'Ronda Paquetería Corporativa Cierre de Mes', unidad: 'Flota Furgones B2B', tipo: 'despacho', prioridad: 'Media' },
      { id: 'agh-6', fecha: '2026-09-29', dia: 29, hora: '08:00', titulo: 'Service Programado 20.000 Km Renault Master', unidad: 'AE 441 CC', tipo: 'taller', prioridad: 'Normal' }
    ],
    clientes: [
      { id: 'ci-1', razonSocial: 'Mayorista & Distribución Retail SA', cuit: '30-70891234-9', contacto: 'Esteban Domínguez', tel: '11 2397-4066', localidad: 'San Martín, BsAs', viajes: 180, facturado: 14200000, saldo: '$ 0 (Al Día)' },
      { id: 'ci-2', razonSocial: 'Cadena Supermercados & Alimentos', cuit: '30-61234901-4', contacto: 'Martín Guidi', tel: '11 2397-4066', localidad: 'Pacheco / La Plata', viajes: 145, facturado: 11800000, saldo: '$ 0 (Al Día)' },
      { id: 'ci-3', razonSocial: 'Librerías & Papelería Central SA', cuit: '30-71049281-2', contacto: 'Valeria Maffei', tel: '11 2397-4066', localidad: 'Pilar, BsAs', viajes: 95, facturado: 7400000, saldo: '$ 320.000 (Cta Cte)' },
      { id: 'ci-4', razonSocial: 'Tecnología & Consumo Gamer SRL', cuit: '30-71882014-7', contacto: 'Alan Benítez', tel: '11 2397-4066', localidad: 'Parque Patricios, CABA', viajes: 88, facturado: 6950000, saldo: '$ 0 (Al Día)' },
      { id: 'ci-5', razonSocial: 'Distribuidora Cosmética Belleza', cuit: '30-69814205-3', contacto: 'Camila Peralta', tel: '11 2397-4066', localidad: 'Munro, BsAs', viajes: 74, facturado: 4850000, saldo: '$ 0 (Al Día)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Facturación Reparto Mayorista San Martín', categoria: 'Cobro Fletes B2B', comprobante: 'FC-A 0002-0003180', metodo: 'Transferencia Bancaria', monto: 1840000 },
      { fecha: '2026-09-15', tipo: 'egreso', desc: 'Combustible Diésel Flota Furgones YPF', categoria: 'Combustible', comprobante: 'FC-A YPF-44109', metodo: 'Tarjeta YPF en Ruta', monto: 620000 },
      { fecha: '2026-09-14', tipo: 'ingreso', desc: 'Cobro Distribución Hipermercados La Plata', categoria: 'Cobro Fletes', comprobante: 'FC-A 0002-0003175', metodo: 'Echeq 15d', monto: 1450000 },
      { fecha: '2026-09-13', tipo: 'egreso', desc: 'Reparación y Gas Termo Frío Peugeot Boxer', categoria: 'Taller Mecánico', comprobante: 'FC-B 0004-0002100', metodo: 'Transferencia Bancaria', monto: 210000 },
      { fecha: '2026-09-12', tipo: 'ingreso', desc: 'Abono Logística E-Commerce Tiendas Online', categoria: 'Abono Logístico', comprobante: 'FC-A 0002-0003169', metodo: 'Transferencia MercadoPago', monto: 980000 },
      { fecha: '2026-09-11', tipo: 'egreso', desc: 'Peajes Telepase Panamericana & Acceso Oeste', categoria: 'Peajes', comprobante: 'TK-AU-8812', metodo: 'Débito Automático', monto: 145000 }
    ]
  },

  industrial: {
    id: 'industrial',
    sectorTitle: 'Industrial & Litoral',
    sectorBadge: 'INDUSTRIAL & LITORAL',
    theme: 'industrial',
    bannerTitle: 'CENTRO DE CONTROL LOGÍSTICO · INDUSTRIAL & CORREDOR LITORAL',
    bannerDesc: 'Sistema de prueba para cargas pesadas siderúrgicas, tolvas cerealeras, granos a granel y logística agroexportadora.',
    kpis: {
      mes: { facturacion: 62400000, combustible: 21800000, mantenimiento: 6900000, seguros: 3800000, balance: 29900000, margen: 47.9, unidadesRuta: '8 / 12', unidadesRutaPct: '66.7% en puertos', puntualidad: '97.8%', volumen: '2.850 Tn', volumenSub: 'Granos & Siderúrgico', ocupacion: '93.5%', alertas: '1 Próxima', alertasSub: 'Balanza Tolva AC 512', costoKm: '$ 740 / Km' },
      dia: { facturacion: 2600000, combustible: 910000, mantenimiento: 280000, seguros: 160000, balance: 1250000, margen: 48.0, unidadesRuta: '8 / 12', unidadesRutaPct: 'Operando', puntualidad: '98.5%', volumen: '120 Tn', volumenSub: 'Descarga Puerto', ocupacion: '94.0%', alertas: '1 Próxima', alertasSub: 'Plan diario', costoKm: '$ 735 / Km' },
      semana: { facturacion: 16200000, combustible: 5600000, mantenimiento: 1800000, seguros: 980000, balance: 7820000, margen: 48.2, unidadesRuta: '8 / 12', unidadesRutaPct: 'Semana en curso', puntualidad: '97.9%', volumen: '740 Tn', volumenSub: 'Graneles y bobinas', ocupacion: '93.0%', alertas: '1 Próxima', alertasSub: 'Mantenimiento', costoKm: '$ 738 / Km' },
      anio: { facturacion: 720000000, combustible: 252000000, mantenimiento: 81000000, seguros: 44000000, balance: 343000000, margen: 47.6, unidadesRuta: '8 / 12', unidadesRutaPct: 'Capacidad activa', puntualidad: '97.2%', volumen: '32.000 Tn', volumenSub: 'Total acumulado', ocupacion: '91.8%', alertas: '1 Próxima', alertasSub: 'Preventivo', costoKm: '$ 750 / Km' }
    },
    costStructure: [
      { label: 'Superávit Operativo Neto', pct: 47.9, val: 29900000, color: '#10b981' },
      { label: 'Gasoil Diésel Grado 3', pct: 34.9, val: 21800000, color: '#3b82f6' },
      { label: 'Mantenimiento de Tolvas & Ejes', pct: 11.1, val: 6900000, color: '#8b5cf6' },
      { label: 'Seguros de Granos & ART', pct: 6.1, val: 3800000, color: '#38bdf8' }
    ],
    evolution: [
      { mes: 'Abr', fact: 49000000, viajes: 78, combustible: 17200000, margen: 47.2 },
      { mes: 'May', fact: 52400000, viajes: 84, combustible: 18400000, margen: 47.5 },
      { mes: 'Jun', fact: 55800000, viajes: 89, combustible: 19500000, margen: 47.8 },
      { mes: 'Jul', fact: 58200000, viajes: 94, combustible: 20400000, margen: 47.4 },
      { mes: 'Ago', fact: 60500000, viajes: 98, combustible: 21100000, margen: 47.6 },
      { mes: 'Sep', fact: 62400000, viajes: 104, combustible: 21800000, margen: 47.9 }
    ],
    zones: {
      corredores: [
        { label: 'Terminal 6 & Puerto General San Martín', pct: 38, volumen: '40 tolvas', color: '#10b981' },
        { label: 'Acopios Cerealeros Sur Santa Fe (Firmat/Venado)', pct: 26, volumen: '27 tolvas', color: '#3b82f6' },
        { label: 'Polo Siderúrgico Villa Constitución & San Nicolás', pct: 20, volumen: '21 equipos', color: '#f59e0b' },
        { label: 'Puerto Rosario & Parque Industrial Alvear', pct: 16, volumen: '16 equipos', color: '#ec4899' }
      ],
      horarios: [
        { label: '03:00 - 07:00 hs (Cupo Cerealero Madrugada)', pct: 42, volumen: '44 camiones', color: '#10b981' },
        { label: '08:00 - 12:00 hs (Calado & Descarga Barcos)', pct: 28, volumen: '29 camiones', color: '#3b82f6' },
        { label: '13:00 - 17:00 hs (Cargas Industriales Pesadas)', pct: 20, volumen: '21 camiones', color: '#f59e0b' },
        { label: '18:00 - 22:00 hs (Relevo & Descanso Choferes)', pct: 10, volumen: '10 camiones', color: '#8b5cf6' }
      ]
    },
    vehiculos: [
      { id: 'veh-r1', patente: 'AE 918 MM', marca: 'Mercedes-Benz Actros 2645', tipo: 'Tractor + Tolva Cerealera 32Tn', anio: 2023, capacidadTn: 32.0, km: 114000, estado: 'ocupado', chofer: 'Marcelo Gómez', consumo: '32 L / 100Km', vtv: '2027-02-14', seguro: 'Al Día' },
      { id: 'veh-r2', patente: 'AC 512 PK', marca: 'Iveco Tector 170E28', tipo: 'Camión Chasis Carga Litoral 14Tn', anio: 2021, capacidadTn: 14.0, km: 242000, estado: 'ocupado', chofer: 'Roberto Bianchi', consumo: '27 L / 100Km', vtv: '2026-11-18', seguro: 'Al Día' },
      { id: 'veh-r3', patente: 'AF 340 AA', marca: 'Scania G450 6x2', tipo: 'Tractor Batea Áridos 30Tn', anio: 2024, capacidadTn: 30.0, km: 48000, estado: 'ocupado', chofer: 'Claudio Mansilla', consumo: '33 L / 100Km', vtv: '2027-08-10', seguro: 'Al Día' },
      { id: 'veh-r4', patente: 'AD 622 BB', marca: 'Volvo FH 540 Globetrotter', tipo: 'Tractor Bitren Cerealero 38Tn', anio: 2023, capacidadTn: 38.0, km: 92000, estado: 'ocupado', chofer: 'Oscar Valenzuela', consumo: '35 L / 100Km', vtv: '2027-04-20', seguro: 'Al Día' },
      { id: 'veh-r5', patente: 'AF 110 CC', marca: 'Volkswagen Meteor 28.460', tipo: 'Tractor Tolva Granelera 32Tn', anio: 2024, capacidadTn: 32.0, km: 31000, estado: 'ocupado', chofer: 'Gustavo Ferreyra', consumo: '31 L / 100Km', vtv: '2027-10-15', seguro: 'Al Día' },
      { id: 'veh-r6', patente: 'AE 775 DD', marca: 'Scania R450 6x4', tipo: 'Tractor Siderúrgico Bobinas 34Tn', anio: 2023, capacidadTn: 34.0, km: 128000, estado: 'ocupado', chofer: 'Horacio Molina', consumo: '34 L / 100Km', vtv: '2027-03-30', seguro: 'Al Día' },
      { id: 'veh-r7', patente: 'AC 902 EE', marca: 'Mercedes-Benz Axor 2036', tipo: 'Tractor Chasis Playo 26Tn', anio: 2021, capacidadTn: 26.0, km: 215000, estado: 'mantenimiento', chofer: 'Sin chofer', consumo: '29 L / 100Km', vtv: '2026-10-12', seguro: 'Al Día' },
      { id: 'veh-r8', patente: 'AD 440 FF', marca: 'Iveco Stralis Hi-Way 440', tipo: 'Tractor + Batea Minera 28Tn', anio: 2022, capacidadTn: 28.0, km: 172000, estado: 'ocupado', chofer: 'Daniel Coronel', consumo: '31 L / 100Km', vtv: '2027-01-22', seguro: 'Al Día' },
      { id: 'veh-r9', patente: 'AF 819 GG', marca: 'Ford Cargo 1723', tipo: 'Camión Chasis Granelero 15Tn', anio: 2023, capacidadTn: 15.0, km: 86000, estado: 'ocupado', chofer: 'Lucas Santillán', consumo: '26 L / 100Km', vtv: '2027-06-18', seguro: 'Al Día' },
      { id: 'veh-r10', patente: 'AE 550 HH', marca: 'Scania P380 Highline', tipo: 'Tractor Puerto San Lorenzo 28Tn', anio: 2022, capacidadTn: 28.0, km: 198000, estado: 'disponible', chofer: 'Sin chofer', consumo: '30 L / 100Km', vtv: '2027-05-25', seguro: 'Al Día' },
      { id: 'veh-r11', patente: 'AD 319 II', marca: 'Volvo VM 330 6x2', tipo: 'Camión Chasis Cargas Pesadas', anio: 2021, capacidadTn: 20.0, km: 245000, estado: 'disponible', chofer: 'Sin chofer', consumo: '28 L / 100Km', vtv: '2026-12-08', seguro: 'Al Día' },
      { id: 'veh-r12', patente: 'AF 204 JJ', marca: 'Mercedes-Benz Actros 2651', tipo: 'Bitren Agroexportador 40Tn', anio: 2024, capacidadTn: 40.0, km: 28000, estado: 'disponible', chofer: 'Sin chofer', consumo: '36 L / 100Km', vtv: '2027-09-14', seguro: 'Al Día' }
    ],
    rutas: [
      { id: 'IND-2026-301', cliente: 'Agroexportadora Terminal 6', chofer: 'Marcelo Gómez', vehiculo: 'AE 918 MM (Mercedes Actros)', origen: 'Acopio Firmat (Santa Fe)', destino: 'Puerto General San Martín (T6)', carga: 'Soja Grano Primera Calidad (30 Tn)', monto: 1850000, progreso: 88, estado: 'en_transito', eta: '18:10 hs', pago: 'Liquidación Granos', bultos: 1, peso: '30.000 Kg' },
      { id: 'IND-2026-302', cliente: 'Siderúrgica Villa Constitución', chofer: 'Roberto Bianchi', vehiculo: 'AC 512 PK (Iveco Tector)', origen: 'Planta Villa Constitución', destino: 'Parque Industrial Alvear', carga: 'Barras de Acero Aletado (14 Tn)', monto: 1250000, progreso: 60, estado: 'en_transito', eta: '19:00 hs', pago: 'Transferencia Bancaria', bultos: 12, peso: '14.000 Kg' },
      { id: 'IND-2026-303', cliente: 'Molinos Agro San Lorenzo', chofer: 'Claudio Mansilla', vehiculo: 'AF 340 AA (Scania G450)', origen: 'Pergamino (Buenos Aires)', destino: 'Muelle Molinos San Lorenzo', carga: 'Maíz Grano Secado en Planta (30 Tn)', monto: 1980000, progreso: 45, estado: 'en_transito', eta: '20:15 hs', pago: 'Echeq 15d', bultos: 1, peso: '30.000 Kg' },
      { id: 'IND-2026-304', cliente: 'Ternium Siderar San Nicolás', chofer: 'Oscar Valenzuela', vehiculo: 'AD 622 BB (Volvo FH 540)', origen: 'San Nicolás Planta General Savio', destino: 'Puerto Campana Embarque', carga: 'Bobinas de Acero Laminado en Frío (38 Tn)', monto: 2650000, progreso: 75, estado: 'en_transito', eta: '19:30 hs', pago: 'Transferencia 30d', bultos: 4, peso: '38.000 Kg' },
      { id: 'IND-2026-305', cliente: 'Cargill Puerto Quebracho', chofer: 'Gustavo Ferreyra', vehiculo: 'AF 110 CC (VW Meteor)', origen: 'Venado Tuerto (Santa Fe)', destino: 'Terminal Quebracho Puerto', carga: 'Harina de Soja Peletizada (32 Tn)', monto: 1920000, progreso: 30, estado: 'en_transito', eta: '21:40 hs', pago: 'Liquidación Granos', bultos: 1, peso: '32.000 Kg' },
      { id: 'IND-2026-306', cliente: 'Acindar Aceros Especiales', chofer: 'Horacio Molina', vehiculo: 'AE 775 DD (Scania R450)', origen: 'Villa Constitución', destino: 'Terminal Automotriz Córdoba', carga: 'Palanquillas y Alambrón de Alta Tensión', monto: 2450000, progreso: 68, estado: 'en_transito', eta: 'Mañana 06:00 hs', pago: 'Transferencia Bancaria', bultos: 8, peso: '34.000 Kg' },
      { id: 'IND-2026-307', cliente: 'Vicentin Puerto San Benito', chofer: 'Daniel Coronel', vehiculo: 'AD 440 FF (Iveco Stralis)', origen: 'Reconquista (Santa Fe)', destino: 'Puerto San Lorenzo', carga: 'Aceite de Girasol Crudo en Cisterna (28 Tn)', monto: 2300000, progreso: 55, estado: 'en_transito', eta: '23:00 hs', pago: 'Echeq 30d', bultos: 1, peso: '28.000 Kg' },
      { id: 'IND-2026-308', cliente: 'Bunge Puerto Pampa', chofer: 'Lucas Santillán', vehiculo: 'AF 819 GG (Ford Cargo)', origen: 'Casilda (Santa Fe)', destino: 'Muelle Bunge Puerto San Martín', carga: 'Trigo Pan Panadero Exportación (15 Tn)', monto: 1180000, progreso: 85, estado: 'en_transito', eta: '18:40 hs', pago: 'Transferencia Inmediata', bultos: 1, peso: '15.000 Kg' }
    ],
    choferes: [
      { id: 'ch-r1', nombre: 'Marcelo Gómez', dni: '30.814.229', licencia: 'E1 - Semirremolques Cerealeros', vencimiento: '2027-06-25', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 918 MM', viajes: 510, calif: '4.9 ★' },
      { id: 'ch-r2', nombre: 'Roberto Bianchi', dni: '33.910.450', licencia: 'C2 - Cargas Generales Litoral', vencimiento: '2026-12-05', telefono: '5491123974066', estado: 'En Ruta', moto: 'AC 512 PK', viajes: 480, calif: '5.0 ★' },
      { id: 'ch-r3', nombre: 'Claudio Mansilla', dni: '29.412.809', licencia: 'E1 - Tolvas Graneleras', vencimiento: '2027-08-10', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 340 AA', viajes: 540, calif: '4.8 ★' },
      { id: 'ch-r4', nombre: 'Oscar Valenzuela', dni: '32.119.004', licencia: 'E2 - Bitrenes Cerealeros y Puerto', vencimiento: '2027-04-20', telefono: '5491123974066', estado: 'En Ruta', moto: 'AD 622 BB', viajes: 610, calif: '5.0 ★' },
      { id: 'ch-r5', nombre: 'Gustavo Ferreyra', dni: '34.805.119', licencia: 'E1 - Cargas Agroindustriales', vencimiento: '2027-10-15', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 110 CC', viajes: 390, calif: '4.9 ★' },
      { id: 'ch-r6', nombre: 'Horacio Molina', dni: '31.904.331', licencia: 'E1 - Siderúrgicos Pesados', vencimiento: '2027-03-30', telefono: '5491123974066', estado: 'En Ruta', moto: 'AE 775 DD', viajes: 520, calif: '5.0 ★' },
      { id: 'ch-r7', nombre: 'Daniel Coronel', dni: '35.210.884', licencia: 'E1 - Cisternas y Líquidos Industriales', vencimiento: '2027-01-22', telefono: '5491123974066', estado: 'En Ruta', moto: 'AD 440 FF', viajes: 430, calif: '4.8 ★' },
      { id: 'ch-r8', nombre: 'Lucas Santillán', dni: '36.812.001', licencia: 'C2 - Camiones Chasis Granel', vencimiento: '2027-06-18', telefono: '5491123974066', estado: 'En Ruta', moto: 'AF 819 GG', viajes: 370, calif: '4.9 ★' }
    ],
    mantenimiento: [
      { id: 'mr-1', moto: 'AE 918 MM (Mercedes Actros)', tarea: 'Engrase General de Pernos y Ejes de Tolva Cerealera', fecha: '2026-09-11', km: 114000, taller: 'Taller Integral Puerto San Martín', costo: 180000, estado: 'Finalizado' },
      { id: 'mr-2', moto: 'AC 902 EE (Mercedes Axor)', tarea: 'Reemplazo de Embrague y Corona de Volante de Motor', fecha: '2026-09-14', km: 215000, taller: 'Diesel Litoral San Lorenzo', costo: 640000, estado: 'En Proceso' },
      { id: 'mr-3', moto: 'AF 340 AA (Scania G450)', tarea: 'Calibración de Válvulas Neumáticas y Pulmones de Batea', fecha: '2026-09-05', km: 48000, taller: 'Scania Litoral Rosario', costo: 290000, estado: 'Finalizado' },
      { id: 'mr-4', moto: 'AD 622 BB (Volvo FH 540)', tarea: 'Alineación de Tolva Doble Eje y Cambio de Rulemanes', fecha: '2026-08-29', km: 92000, taller: 'Ejes y Frenos Villa Constitución', costo: 420000, estado: 'Finalizado' }
    ],
    agenda: [
      { id: 'agr-1', fecha: '2026-09-17', dia: 17, hora: '05:00', titulo: 'Ingreso Turno Cupo Puerto San Lorenzo (Terminal 6)', unidad: 'AE 918 MM & AF 110 CC', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'agr-2', fecha: '2026-09-19', dia: 19, hora: '07:30', titulo: 'Carga Bobinas de Acero Siderúrgico San Nicolás', unidad: 'AE 775 DD', tipo: 'despacho', prioridad: 'Alta' },
      { id: 'agr-3', fecha: '2026-09-21', dia: 21, hora: '10:00', titulo: 'Calibración Balanza de Ejes Oficial SENASA', unidad: 'AD 622 BB', tipo: 'vtv', prioridad: 'Urgente' },
      { id: 'agr-4', fecha: '2026-09-24', dia: 24, hora: '08:30', titulo: 'Service Programado Tolva y Filtro de Aire', unidad: 'AF 340 AA', tipo: 'taller', prioridad: 'Normal' },
      { id: 'agr-5', fecha: '2026-09-27', dia: 27, hora: '06:00', titulo: 'Operativo Despacho Harina Proteica Embarque Barco', unidad: 'Flota Cerealera Activa', tipo: 'despacho', prioridad: 'Alta' }
    ],
    clientes: [
      { id: 'cr-1', razonSocial: 'Agroexportadora Puerto San Martín SA', cuit: '30-50289123-1', contacto: 'Ing. Fernando Varela', tel: '11 2397-4066', localidad: 'Puerto San Martín, Santa Fe', viajes: 92, facturado: 24800000, saldo: '$ 0 (Al Día)' },
      { id: 'cr-2', razonSocial: 'Ternium Siderar Planta Savio', cuit: '30-50001844-3', contacto: 'Lic. Ignacio Fontana', tel: '11 2397-4066', localidad: 'San Nicolás, BsAs', viajes: 74, facturado: 19500000, saldo: '$ 0 (Al Día)' },
      { id: 'cr-3', razonSocial: 'Molinos Agro SA Terminal Muelle', cuit: '30-50148920-7', contacto: 'Ing. Gonzalo Paz', tel: '11 2397-4066', localidad: 'San Lorenzo, Santa Fe', viajes: 68, facturado: 17200000, saldo: '$ 890.000 (Cta Cte)' },
      { id: 'cr-4', razonSocial: 'Acindar Industria Argentina de Aceros', cuit: '30-50008912-9', contacto: 'Ing. Javier Solís', tel: '11 2397-4066', localidad: 'Villa Constitución, Santa Fe', viajes: 55, facturado: 15400000, saldo: '$ 0 (Al Día)' },
      { id: 'cr-5', razonSocial: 'Cargill SACI Puerto Quebracho', cuit: '30-50012390-2', contacto: 'Lic. Marcelo Rossi', tel: '11 2397-4066', localidad: 'Puerto General San Martín', viajes: 60, facturado: 16800000, saldo: '$ 0 (Al Día)' }
    ],
    finanzas: [
      { fecha: '2026-09-15', tipo: 'ingreso', desc: 'Cobro Flete de Granos Cupo Terminal 6 #1480', categoria: 'Cobro Fletes Granel', comprobante: 'FC-A 0008-0004120', metodo: 'Transferencia Echeq', monto: 1850000 },
      { fecha: '2026-09-15', tipo: 'egreso', desc: 'Combustible Diésel Flota Portuaria YPF', categoria: 'Combustible', comprobante: 'FC-A YPF-90114', metodo: 'Cuenta Corriente YPF', monto: 1420000 },
      { fecha: '2026-09-14', tipo: 'ingreso', desc: 'Liquidación Flete Siderúrgico San Nicolás', categoria: 'Cobro Fletes Industriales', comprobante: 'FC-A 0008-0004115', metodo: 'Transferencia Bancaria', monto: 2650000 },
      { fecha: '2026-09-13', tipo: 'egreso', desc: 'Service Embrague Axor Diesel Litoral', categoria: 'Taller Mecánico', comprobante: 'FC-B 0006-0001920', metodo: 'Transferencia Bancaria', monto: 640000 },
      { fecha: '2026-09-12', tipo: 'ingreso', desc: 'Cobro Flete Acopio Firmat a T6', categoria: 'Cobro Fletes Granel', comprobante: 'FC-A 0008-0004108', metodo: 'Echeq 15d', monto: 1980000 },
      { fecha: '2026-09-10', tipo: 'egreso', desc: 'Canon Balanza Fiscal Puerto San Lorenzo', categoria: 'Peajes & Balanzas', comprobante: 'TK-PU-4410', metodo: 'Débito Automático', monto: 180000 }
    ]
  }
};

// =============================================================================
// ESTADO GLOBAL REACTIVO DE LA APLICACIÓN
// =============================================================================
let currentSectorId = 'motos';
let currentPeriod = 'mes';
let currentFleetFilter = 'todos';
let costChartType = 'donut';
let costChartUnit = 'pct';
let evolutionChartType = 'bars';
let evolutionMetric = 'fact'; // 'fact' | 'viajes' | 'combustible' | 'margen'
let zoneChartType = 'corredores'; // 'corredores' | 'horarios'
let currentSelectedCalendarDay = 16;

function getActiveData() {
  return BADDGROUP_LOGISTICS_SECTORS[currentSectorId];
}

function formatARS(val) {
  if (val === undefined || val === null || isNaN(val)) return '$ 0';
  return '$ ' + Number(val).toLocaleString('es-AR');
}

// =============================================================================
// INICIALIZACIÓN
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSectorSwitcher();
  initThemeToggle();
  initPeriodSelector();
  initChartControls();
  initFleetFilterPills();
  initCalendar();
  initModals();
  initSearch();

  // Carga inicial del sector por defecto
  setSector('motos');
});

// =============================================================================
// NAVEGACIÓN ENTRE SECCIONES
// =============================================================================
function initNavigation() {
  const navItems = document.querySelectorAll('.sidebar .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = item.getAttribute('data-view');
      switchView(viewId);
    });
  });

  // Enlaces directos en cards
  document.querySelectorAll('[data-view]').forEach(el => {
    if (!el.classList.contains('nav-item')) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const viewId = el.getAttribute('data-view');
        switchView(viewId);
      });
    }
  });

  // Responsive mobile menu toggle
  const menuBtn = document.getElementById('menuToggleBtn');
  const sidebar = document.getElementById('sidebar');
  menuBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

function switchView(viewId) {
  document.querySelectorAll('.sidebar .nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-view') === viewId);
  });

  document.querySelectorAll('.main-content .view-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `view-${viewId}`);
  });

  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================================================
// CAMBIO DE EMPRESA / SECTOR CON COLOR DE HEADER Y MENÚ LATERAL VIBRANTE
// =============================================================================
function initSectorSwitcher() {
  const btns = document.querySelectorAll('#companySwitcher .btn-company');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectorId = btn.getAttribute('data-company');
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setSector(sectorId);
      showToast(`Sector activo: ${BADDGROUP_LOGISTICS_SECTORS[sectorId].sectorTitle}`, '🏢');
    });
  });
}

function setSector(sectorId) {
  if (!BADDGROUP_LOGISTICS_SECTORS[sectorId]) return;
  currentSectorId = sectorId;
  const sector = BADDGROUP_LOGISTICS_SECTORS[sectorId];

  // 1. CAMBIAR COLOR DE HEADER Y MENÚ LATERAL (VÍA ATRIBUTO CSS THEME)
  document.body.setAttribute('data-company-theme', sector.theme);

  // 2. ACTUALIZAR LABELS
  document.getElementById('currentCompanySector').textContent = sector.sectorBadge;
  document.getElementById('sidebarSectorLabel').textContent = sector.sectorTitle;
  document.getElementById('bannerEmpresaTitle').textContent = sector.bannerTitle;
  document.getElementById('bannerEmpresaDesc').textContent = sector.bannerDesc;

  // 3. BADGES EN SIDEBAR
  document.getElementById('badgeRutasActivas').textContent = sector.rutas.length;
  document.getElementById('badgeTotalFlota').textContent = sector.vehiculos.length;
  document.getElementById('badgeChoferesCount').textContent = sector.choferes.length;
  document.getElementById('badgeClientesCount').textContent = sector.clientes.length;
  document.getElementById('badgeMantenimientoAlerts').textContent = sector.mantenimiento.length;
  document.getElementById('badgeAgendaCount').textContent = sector.agenda.length;

  // 4. ACTUALIZAR CONTEOS EN VISTA FLOTA
  updateFleetPillsCount();

  // 5. RENDERIZAR VISTAS
  renderDashboardKPIs();
  renderFleetStatusOverview();
  renderCostChart();
  renderEvolutionChart();
  renderZoneChart();
  renderDashboardTables();
  renderRoutesTable();
  renderFleetCards();
  renderDriversCards();
  renderMaintenanceGrid();
  renderCalendarDays();
  renderCalendarEventsForDay(currentSelectedCalendarDay);
  renderFinancesTable();
  renderClientsCards();
  renderRemitoDocument();
  populateRouteModalSelects();
}

// =============================================================================
// ESTADOS DE LAS FLOTAS EN EL DASHBOARD GENERAL
// =============================================================================
function renderFleetStatusOverview() {
  const sector = getActiveData();
  const total = sector.vehiculos.length;
  const enRuta = sector.vehiculos.filter(v => v.estado === 'ocupado');
  const disponibles = sector.vehiculos.filter(v => v.estado === 'disponible');
  const enTaller = sector.vehiculos.filter(v => v.estado === 'mantenimiento');

  const pctEnRuta = Math.round((enRuta.length / total) * 100);
  const pctDisp = Math.round((disponibles.length / total) * 100);
  const pctTaller = 100 - pctEnRuta - pctDisp;

  // Barra de distribución
  document.getElementById('barSegmentEnRuta').style.width = `${pctEnRuta}%`;
  document.getElementById('barSegmentDisponible').style.width = `${pctDisp}%`;
  document.getElementById('barSegmentTaller').style.width = `${pctTaller}%`;

  document.getElementById('fleetDistributionSummary').textContent = 
    `${total} Unidades en parque automotor · ${enRuta.length} en tránsito (${pctEnRuta}%) · ${disponibles.length} disponibles (${pctDisp}%) · ${enTaller.length} en taller (${pctTaller}%)`;

  document.getElementById('countEnRutaBadge').textContent = `${enRuta.length} Unidades (${pctEnRuta}%)`;
  document.getElementById('countDisponibleBadge').textContent = `${disponibles.length} Unidades (${pctDisp}%)`;
  document.getElementById('countTallerBadge').textContent = `${enTaller.length} Unidades (${pctTaller}%)`;

  // Chips de móviles interactivos
  const chipsRuta = document.getElementById('chipsEnRutaList');
  const chipsDisp = document.getElementById('chipsDisponibleList');
  const chipsTaller = document.getElementById('chipsTallerList');

  chipsRuta.innerHTML = enRuta.map(v => `
    <span class="status-unit-chip" style="border-left:3px solid var(--success); cursor:pointer;" onclick="switchView('flota'); filterFleetCards('ocupado');" title="Ver unidad en Flota">
      <strong>${v.patente}</strong> (${v.marca.split(' ')[0]}) ➔ ${v.chofer.split(' ')[0]}
    </span>
  `).join('') || '<span style="font-size:11px; color:var(--text-subtle);">Sin unidades en tránsito</span>';

  chipsDisp.innerHTML = disponibles.map(v => `
    <span class="status-unit-chip" style="border-left:3px solid var(--info); cursor:pointer;" onclick="switchView('flota'); filterFleetCards('disponible');" title="Ver unidad en Flota">
      <strong>${v.patente}</strong> (${v.marca.split(' ')[0]}) · Base Central
    </span>
  `).join('') || '<span style="font-size:11px; color:var(--text-subtle);">Todas las unidades asignadas</span>';

  chipsTaller.innerHTML = enTaller.map(v => `
    <span class="status-unit-chip" style="border-left:3px solid var(--warning); cursor:pointer;" onclick="switchView('flota'); filterFleetCards('mantenimiento');" title="Ver unidad en Flota">
      <strong>${v.patente}</strong> · Service Preventivo
    </span>
  `).join('') || '<span style="font-size:11px; color:var(--success);">Taller al día (0 en service)</span>';
}

// =============================================================================
// SELECTOR DE PERÍODOS
// =============================================================================
function initPeriodSelector() {
  const periodButtons = document.querySelectorAll('#periodSelectorGroup .btn-period');
  periodButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      periodButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPeriod = btn.getAttribute('data-period');
      
      const labels = {
        dia: 'Hoy (Operación en Vivo del Día)',
        semana: 'Semana Actual en Curso (Semana 38)',
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
  const sector = getActiveData();
  const kpis = sector.kpis[currentPeriod] || sector.kpis.mes;

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
// GRÁFICOS INTERACTIVOS (CON MÁS OPCIONES DE VISUALIZACIÓN)
// =============================================================================
function initChartControls() {
  // Gráfico 1: Estructura de Costos
  const costTypeBtns = document.querySelectorAll('#costChartTypeToggle .btn-chart-type');
  costTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      costTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      costChartType = btn.getAttribute('data-type');
      renderCostChart();
    });
  });

  const costUnitBtns = document.querySelectorAll('#costChartUnitToggle .btn-chart-unit');
  costUnitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      costUnitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      costChartUnit = btn.getAttribute('data-unit');
      renderCostChart();
    });
  });

  // Gráfico 2: Tipo de Gráfico (Barras / Líneas / Área)
  const evoTypeBtns = document.querySelectorAll('#evolutionChartTypeToggle .btn-chart-type');
  evoTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      evoTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      evolutionChartType = btn.getAttribute('data-type');
      renderEvolutionChart();
    });
  });

  // Gráfico 2: Métrica de Evolución (Facturación / Viajes / Combustible / Margen)
  const evoMetricBtns = document.querySelectorAll('#evolutionMetricToggle .btn-chart-unit');
  evoMetricBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      evoMetricBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      evolutionMetric = btn.getAttribute('data-metric');
      renderEvolutionChart();
    });
  });

  // Gráfico 3: Tipo de Distribución (Zonas vs Horarios)
  const zoneTypeBtns = document.querySelectorAll('#zoneChartTypeToggle .btn-chart-type');
  zoneTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      zoneTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      zoneChartType = btn.getAttribute('data-type');
      renderZoneChart();
    });
  });
}

function renderCostChart() {
  const sector = getActiveData();
  const data = sector.costStructure;
  const container = document.getElementById('costChartContainer');
  const legendContainer = document.getElementById('costLegendContainer');
  if (!container || !legendContainer) return;

  // Leyenda interactiva con hover
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

  const cx = 105;
  const cy = 105;
  const r = 90;
  const innerR = costChartType === 'donut' ? 56 : 0;

  if (costChartType === 'bars') {
    // Modo Barras Horizontales
    let svg = `<svg viewBox="0 0 210 210" width="210" height="210">`;
    const barHeight = 26;
    const gap = 16;
    data.forEach((item, idx) => {
      const y = 18 + idx * (barHeight + gap);
      const width = (item.pct / 100) * 175;
      svg += `
        <rect x="15" y="${y}" width="175" height="${barHeight}" rx="6" fill="rgba(255,255,255,0.05)" />
        <rect x="15" y="${y}" width="${width}" height="${barHeight}" rx="6" fill="${item.color}" 
              data-label="${item.label}" data-val="${item.pct}% · ${formatARS(item.val)}"
              class="chart-bar-hover" style="cursor:pointer; transition: width 0.4s ease;" />
        <text x="22" y="${y + 17}" font-size="11" font-weight="800" fill="#ffffff" font-family="'Plus Jakarta Sans'">${item.pct}%</text>
      `;
    });
    svg += `</svg>`;
    container.innerHTML = svg;
  } else if (costChartType === 'breakdown') {
    // Modo Desglose Especial
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:center; padding:10px;">
        <div style="font-size:12px; font-weight:800; color:var(--text-subtle);">DISTRIBUCIÓN DE CADA $100 FACTURADOS:</div>
        <div style="display:flex; height:18px; border-radius:6px; overflow:hidden;">
          ${data.map(d => `<div style="width:${d.pct}%; background:${d.color};" title="${d.label}: ${d.pct}%"></div>`).join('')}
        </div>
        <div style="font-size:11px; color:var(--text-muted); line-height:1.5;">
          • <strong>${data[0].pct}%</strong> se convierte en margen neto superavitario.<br>
          • <strong>${data[1].pct}%</strong> se destina a combustible y energía.<br>
          • <strong>${(data[2].pct + data[3].pct).toFixed(1)}%</strong> cubre mantenimiento, gomería y seguros.
        </div>
      </div>
    `;
  } else {
    // Modo Dona o Torta
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
        <text x="${cx}" y="${cy + 17}" text-anchor="middle" font-size="17" font-weight="900" fill="#10b981" font-family="'JetBrains Mono'">${sector.kpis[currentPeriod].margen}%</text>
      `;
    }

    container.innerHTML = `
      <svg viewBox="0 0 210 210" width="210" height="210">
        ${paths.join('')}
        ${centerText}
      </svg>
    `;
  }

  attachChartTooltips();
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, innerRadius, startAngle, endAngle) {
  if (endAngle - startAngle >= 360) endAngle = startAngle + 359.99;
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  if (innerRadius === 0) {
    return ['M', x, y, 'L', end.x, end.y, 'A', radius, radius, 0, largeArcFlag, 1, start.x, start.y, 'Z'].join(' ');
  } else {
    const innerStart = polarToCartesian(x, y, innerRadius, endAngle);
    const innerEnd = polarToCartesian(x, y, innerRadius, startAngle);
    return ['M', end.x, end.y, 'A', radius, radius, 0, largeArcFlag, 1, start.x, start.y, 'L', innerStart.x, innerStart.y, 'A', innerRadius, innerRadius, 0, largeArcFlag, 0, innerEnd.x, innerEnd.y, 'Z'].join(' ');
  }
}

function highlightSlice(label) {
  document.querySelectorAll('.slice-path').forEach(p => {
    if (p.getAttribute('data-label') === label) {
      p.style.opacity = '1';
      p.style.transform = 'scale(1.05)';
      p.style.transformOrigin = 'center center';
    } else {
      p.style.opacity = '0.3';
      p.style.transform = 'scale(1)';
    }
  });
}

function unhighlightSlices() {
  document.querySelectorAll('.slice-path').forEach(p => {
    p.style.opacity = '1';
    p.style.transform = 'scale(1)';
  });
}

// GRÁFICO 2: EVOLUCIÓN CON MULTI-MÉTRICA Y TIPOS DE GRÁFICO
function renderEvolutionChart() {
  const sector = getActiveData();
  const data = sector.evolution;
  const container = document.getElementById('evolutionChartContainer');
  if (!container) return;

  // Extraer valores según métrica activa
  const values = data.map(d => {
    if (evolutionMetric === 'viajes') return d.viajes;
    if (evolutionMetric === 'combustible') return d.combustible;
    if (evolutionMetric === 'margen') return d.margen;
    return d.fact; // default facturación
  });

  const maxVal = Math.max(...values) * 1.15;
  const width = 480;
  const height = 180;
  const paddingBottom = 30;
  const paddingTop = 20;
  const chartHeight = height - paddingBottom - paddingTop;
  const colWidth = width / data.length;

  let content = '';
  let points = [];

  data.forEach((item, idx) => {
    const x = idx * colWidth + (colWidth / 2);
    const val = values[idx];
    const barHeight = (val / maxVal) * chartHeight;
    const y = height - paddingBottom - barHeight;

    let tooltipVal = '';
    if (evolutionMetric === 'viajes') tooltipVal = `${val} viajes despachados`;
    else if (evolutionMetric === 'margen') tooltipVal = `${val}% margen operativo`;
    else tooltipVal = formatARS(val);

    if (evolutionChartType === 'bars') {
      content += `
        <rect x="${x - 18}" y="${y}" width="36" height="${barHeight}" rx="5" fill="var(--accent)" 
              class="evolution-bar" data-mes="${item.mes} 2026" 
              data-fact="${tooltipVal}" 
              style="cursor:pointer; transition: all 0.3s ease;" />
      `;
    }

    content += `
      <text x="${x}" y="${height - 10}" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8" font-family="'Plus Jakarta Sans'">${item.mes}</text>
    `;

    points.push(`${x},${y + 4}`);
  });

  if (evolutionChartType === 'line' || evolutionChartType === 'area') {
    if (evolutionChartType === 'area') {
      const areaPoints = `${points[0].split(',')[0]},${height - paddingBottom} ${points.join(' ')} ${points[points.length - 1].split(',')[0]},${height - paddingBottom}`;
      content += `<polygon points="${areaPoints}" fill="var(--accent-light)" />`;
    }
    content += `<polyline points="${points.join(' ')}" fill="none" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />`;
    points.forEach((pt, i) => {
      const [px, py] = pt.split(',');
      let tip = '';
      if (evolutionMetric === 'viajes') tip = `${values[i]} viajes`;
      else if (evolutionMetric === 'margen') tip = `${values[i]}% margen`;
      else tip = formatARS(values[i]);

      content += `
        <circle cx="${px}" cy="${py}" r="5" fill="var(--accent)" stroke="#000000" stroke-width="2" class="evolution-bar" 
                data-mes="${data[i].mes} 2026" data-fact="${tip}" style="cursor:pointer;" />
      `;
    });
  }

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" width="100%" height="100%">
      <line x1="20" y1="${height - paddingBottom}" x2="${width - 20}" y2="${height - paddingBottom}" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
      <line x1="20" y1="${height - paddingBottom - chartHeight / 2}" x2="${width - 20}" y2="${height - paddingBottom - chartHeight / 2}" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4" />
      ${content}
    </svg>
  `;

  attachChartTooltips();
}

// GRÁFICO 3: DISTRIBUCIÓN OPERATIVA POR CORREDORES & FRANJAS HORARIAS
function renderZoneChart() {
  const sector = getActiveData();
  const container = document.getElementById('zoneChartContainer');
  if (!container || !sector.zones) return;

  const items = sector.zones[zoneChartType] || sector.zones.corredores;

  container.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px; width:100%; padding:10px 4px;">
      ${items.map(item => `
        <div>
          <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
            <span style="font-weight:700; color:var(--text-main);">${item.label}</span>
            <span style="font-family:var(--font-mono); font-weight:800; color:${item.color};">${item.pct}% (${item.volumen})</span>
          </div>
          <div style="height:12px; width:100%; background:rgba(255,255,255,0.06); border-radius:999px; overflow:hidden;">
            <div style="width:${item.pct}%; height:100%; background:${item.color}; border-radius:999px; transition:width 0.5s cubic-bezier(0.4, 0, 0.2, 1);"
                 title="${item.label}: ${item.pct}% · ${item.volumen}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

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

// =============================================================================
// TABLAS: HOJAS DE RUTA (CON 'VER DETALLE')
// =============================================================================
function renderDashboardTables() {
  const sector = getActiveData();
  const tableBody = document.getElementById('dashboardRoutesTableBody');
  const alertsList = document.getElementById('dashboardAlertsList');
  if (!tableBody || !alertsList) return;

  tableBody.innerHTML = sector.rutas.slice(0, 5).map(r => `
    <tr>
      <td><span class="code-pill">${r.id}</span></td>
      <td><strong>${r.cliente}</strong></td>
      <td>${r.chofer}</td>
      <td>${r.vehiculo.split('(')[0]}</td>
      <td>${r.origen.split(',')[0]} ➔ ${r.destino.split(',')[0]}</td>
      <td>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${r.progreso}%;"></div>
        </div>
        <span style="font-size:10px; font-family:var(--font-mono); color:var(--text-muted);">${r.progreso}% · ETA ${r.eta}</span>
      </td>
      <td><span class="status-badge ${r.estado}">● En Tránsito</span></td>
      <td>
        <button class="btn-table-action" onclick="openRouteDetailModal('${r.id}')">👁️ Ver Detalle</button>
      </td>
    </tr>
  `).join('');

  alertsList.innerHTML = `
    <div class="alert-feed-item">
      <div class="alert-icon-box warning">⚠️</div>
      <div class="alert-texts">
        <span class="alert-title">Renovación de VTV / R.U.T.A. Próxima</span>
        <span class="alert-desc">Unidad ${sector.vehiculos[3]?.patente || 'AF 703'} vence en menos de 20 días hábiles.</span>
        <span class="alert-time">Planta Oficial · Prioridad Preventiva</span>
      </div>
    </div>
    <div class="alert-feed-item">
      <div class="alert-icon-box info">🔧</div>
      <div class="alert-texts">
        <span class="alert-title">Service Programado por Odómetro</span>
        <span class="alert-desc">Cambio de lubricantes y revisión de frenos para unidad ${sector.vehiculos[0]?.patente || 'Móvil'}.</span>
        <span class="alert-time">Odómetro: ${Number(sector.vehiculos[0]?.km || 19400).toLocaleString()} Km</span>
      </div>
    </div>
  `;
}

function renderRoutesTable() {
  const sector = getActiveData();
  const tableBody = document.getElementById('mainRoutesTableBody');
  if (!tableBody) return;

  tableBody.innerHTML = sector.rutas.map(r => `
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
        <span style="font-size:10.5px; font-family:var(--font-mono); color:var(--text-muted);">${r.progreso}% · ${r.eta}</span>
      </td>
      <td><span class="status-badge ${r.estado}">● En Tránsito</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button class="btn-table-action" onclick="openRouteDetailModal('${r.id}')" title="Ver Detalle Completo">👁️ Detalle</button>
          <button class="btn-table-action" onclick="verRemitoDeRuta('${r.id}')" title="Emitir Remito Oficial">📄 Remito</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// =============================================================================
// MODAL DE DETALLE EXHAUSTIVO DE HOJA DE RUTA (SOLICITADO EXPLÍCITAMENTE)
// =============================================================================
function openRouteDetailModal(routeId) {
  const sector = getActiveData();
  const route = sector.rutas.find(r => r.id === routeId) || sector.rutas[0];
  if (!route) return;

  document.getElementById('detailRouteCode').textContent = route.id;
  document.getElementById('detailRouteTitle').textContent = `Hoja de Ruta: ${route.cliente}`;

  const body = document.getElementById('routeDetailModalBody');
  body.innerHTML = `
    <div class="route-detail-grid">
      <!-- Columna Izquierda: Información de Trayecto y Checkpoints -->
      <div>
        <div style="background:var(--bg-card-alt); border:1px solid var(--border-card); border-radius:12px; padding:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <span style="font-size:11px; font-weight:800; color:var(--text-subtle);">TRAYECTO DECLARADO</span>
            <span class="status-badge ${route.estado}">● ${route.estado === 'completada' ? 'Entregado' : 'En Tránsito'}</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="color:var(--success); font-size:14px;">📍</span>
              <div>
                <span style="font-size:10.5px; color:var(--text-subtle);">PUNTO DE ORIGEN</span>
                <div style="font-size:13px; font-weight:700; color:var(--text-main);">${route.origen}</div>
              </div>
            </div>
            <div style="height:14px; border-left:2px dashed var(--border-color); margin-left:17px;"></div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="color:var(--danger); font-size:14px;">🏁</span>
              <div>
                <span style="font-size:10.5px; color:var(--text-subtle);">PUNTO DE DESTINO</span>
                <div style="font-size:13px; font-weight:700; color:var(--text-main);">${route.destino}</div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top:16px;">
          <span style="font-size:12px; font-weight:800; color:var(--text-main);">CHECKPOINTS Y EVENTOS DE VIAJE</span>
          <div class="detail-checkpoints-timeline">
            <div class="checkpoint-item completed">
              <div class="checkpoint-icon">✓</div>
              <div class="checkpoint-texts">
                <span class="checkpoint-title">Salida de Base y Carga Despachada</span>
                <span class="checkpoint-desc">Unidad verificada y remito electrónico emitido</span>
              </div>
            </div>
            <div class="checkpoint-item ${route.progreso >= 50 ? 'completed' : 'active'}">
              <div class="checkpoint-icon">${route.progreso >= 50 ? '✓' : '●'}</div>
              <div class="checkpoint-texts">
                <span class="checkpoint-title">En Tránsito por Corredor Vial</span>
                <span class="checkpoint-desc">Velocidad crucero controlada por odómetro</span>
              </div>
            </div>
            <div class="checkpoint-item ${route.progreso >= 90 ? 'completed' : (route.progreso >= 50 ? 'active' : '')}">
              <div class="checkpoint-icon">${route.progreso >= 90 ? '✓' : '●'}</div>
              <div class="checkpoint-texts">
                <span class="checkpoint-title">Llegada a Destino y Descarga</span>
                <span class="checkpoint-desc">Arribo estimado: ${route.eta}</span>
              </div>
            </div>
            <div class="checkpoint-item ${route.progreso === 100 ? 'completed' : ''}">
              <div class="checkpoint-icon">${route.progreso === 100 ? '✓' : '○'}</div>
              <div class="checkpoint-texts">
                <span class="checkpoint-title">Recepción Conforme y Rendición</span>
                <span class="checkpoint-desc">Firma digital de remito y liquidación</span>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top:20px; display:flex; gap:10px;">
          <button class="btn-primary" style="flex:1;" onclick="avanzarProgresoDetalle('${route.id}')">
            ⚡ Avanzar Progreso (+20%)
          </button>
          <button class="btn-secondary" onclick="verRemitoDeRuta('${route.id}'); document.getElementById('routeDetailModal').classList.remove('active');">
            📄 Emitir Remito Oficial
          </button>
        </div>
      </div>

      <!-- Columna Derecha: Conductor, Unidad y Finanzas -->
      <div style="display:flex; flex-direction:column; gap:12px; background:var(--bg-card-alt); border:1px solid var(--border-card); border-radius:12px; padding:16px;">
        <div>
          <span style="font-size:10px; font-weight:800; color:var(--text-subtle);">CONDUCTOR ASIGNADO</span>
          <div style="font-size:14px; font-weight:800; color:var(--text-main); margin-top:2px;">${route.chofer}</div>
        </div>
        <div>
          <span style="font-size:10px; font-weight:800; color:var(--text-subtle);">MÓVIL ASIGNADO</span>
          <div style="font-size:13px; font-weight:700; color:var(--accent); font-family:var(--font-mono); margin-top:2px;">${route.vehiculo}</div>
        </div>
        <div>
          <span style="font-size:10px; font-weight:800; color:var(--text-subtle);">DETALLE DE CARGA & MERCADERÍA</span>
          <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">${route.carga}</div>
          <div style="font-size:11px; font-family:var(--font-mono); color:var(--text-subtle); margin-top:2px;">Bultos: ${route.bultos || 'Varios'} · Peso: ${route.peso || 'Declarado'}</div>
        </div>
        <div>
          <span style="font-size:10px; font-weight:800; color:var(--text-subtle);">VALOR DEL FLETE DECLARADO</span>
          <div style="font-size:17px; font-weight:900; color:var(--success); font-family:var(--font-mono); margin-top:2px;">${formatARS(route.monto)}</div>
          <div style="font-size:11px; color:var(--text-muted);">Condición: <strong>${route.pago || 'Contra Entrega'}</strong></div>
        </div>

        <a href="https://wa.me/5491123974066?text=Hola%20${encodeURIComponent(route.chofer)},%20te%20escribo%20desde%20la%20central%20Baddgroup%20por%20la%20hoja%20de%20ruta%20${route.id}" 
           target="_blank" class="btn-whatsapp-direct">
          💬 Contactar al Conductor por WhatsApp
        </a>
      </div>
    </div>
  `;

  document.getElementById('routeDetailModal').classList.add('active');
}

function avanzarProgresoDetalle(routeId) {
  const sector = getActiveData();
  const route = sector.rutas.find(r => r.id === routeId);
  if (!route) return;

  route.progreso = Math.min(100, route.progreso + 20);
  if (route.progreso >= 100) {
    route.estado = 'completada';
    route.eta = 'Entregado Conforme';
    showToast(`Despacho ${route.id} completado y entregado con éxito`, '🎉');
  } else {
    showToast(`Progreso de ${route.id} avanzado al ${route.progreso}%`, '⚡');
  }

  openRouteDetailModal(routeId);
  renderDashboardTables();
  renderRoutesTable();
}

// =============================================================================
// FLOTA & UNIDADES: BOTONES MÁS RÁPIDOS Y ACCESIBLES PARA MARCAR ESTADOS
// =============================================================================
function initFleetFilterPills() {
  const pills = document.querySelectorAll('#fleetFilterPills .filter-pill');
  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      currentFleetFilter = btn.getAttribute('data-filter');
      filterFleetCards(currentFleetFilter);
    });
  });

  const search = document.getElementById('fleetSearchInput');
  search?.addEventListener('input', (e) => {
    filterFleetCards(currentFleetFilter, e.target.value.toLowerCase().trim());
  });
}

function updateFleetPillsCount() {
  const sector = getActiveData();
  const total = sector.vehiculos.length;
  const ocupados = sector.vehiculos.filter(v => v.estado === 'ocupado').length;
  const disponibles = sector.vehiculos.filter(v => v.estado === 'disponible').length;
  const mantenimiento = sector.vehiculos.filter(v => v.estado === 'mantenimiento').length;

  const cTodos = document.getElementById('countFleetTodos');
  const cOcup = document.getElementById('countFleetOcupados');
  const cDisp = document.getElementById('countFleetDisponibles');
  const cMant = document.getElementById('countFleetMantenimiento');

  if (cTodos) cTodos.textContent = total;
  if (cOcup) cOcup.textContent = ocupados;
  if (cDisp) cDisp.textContent = disponibles;
  if (cMant) cMant.textContent = mantenimiento;
}

function filterFleetCards(filterStatus, query = '') {
  const sector = getActiveData();
  const grid = document.getElementById('fleetCardsGrid');
  if (!grid) return;

  let filtered = sector.vehiculos;
  if (filterStatus && filterStatus !== 'todos') {
    filtered = filtered.filter(v => v.estado === filterStatus);
  }

  if (query) {
    filtered = filtered.filter(v => 
      v.patente.toLowerCase().includes(query) ||
      v.marca.toLowerCase().includes(query) ||
      v.tipo.toLowerCase().includes(query) ||
      v.chofer.toLowerCase().includes(query)
    );
  }

  renderFleetCardsHtml(filtered);
}

function renderFleetCards() {
  const sector = getActiveData();
  renderFleetCardsHtml(sector.vehiculos);
  updateFleetPillsCount();
}

function renderFleetCardsHtml(vehicles) {
  const grid = document.getElementById('fleetCardsGrid');
  if (!grid) return;

  if (vehicles.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 32px; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md);">
        No se encontraron unidades con el filtro seleccionado.
      </div>
    `;
    return;
  }

  grid.innerHTML = vehicles.map(v => {
    const isRuta = v.estado === 'ocupado';
    const isDisp = v.estado === 'disponible';
    const isTaller = v.estado === 'mantenimiento';

    return `
      <div class="fleet-card">
        <div class="fleet-card-header">
          <div>
            <span class="plate-badge">${v.patente}</span>
            <h3 style="font-size:14px; font-weight:800; margin-top:8px; color:var(--text-main);">${v.marca}</h3>
            <span style="font-size:11.5px; color:var(--text-muted);">${v.tipo} · Año ${v.anio}</span>
          </div>
          <span class="status-badge ${isRuta ? 'en_transito' : (isDisp ? 'completada' : 'programado')}">
            ● ${isRuta ? 'En Ruta' : (isDisp ? 'Disponible' : 'En Taller')}
          </span>
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

        <!-- BOTONES RÁPIDOS Y ACCESIBLES DE 1 CLIC PARA MARCAR ESTADOS -->
        <div style="margin-top:4px;">
          <span style="font-size:10.5px; font-weight:800; color:var(--text-subtle); display:block; margin-bottom:6px;">CAMBIAR ESTADO OPERATIVO (1 CLIC):</span>
          <div class="quick-status-group">
            <button class="btn-quick-status en-ruta ${isRuta ? 'active' : ''}" onclick="setQuickVehicleStatus('${v.id}', 'ocupado')" title="Marcar como En Ruta Activa">
              🟢 En Ruta
            </button>
            <button class="btn-quick-status disponible ${isDisp ? 'active' : ''}" onclick="setQuickVehicleStatus('${v.id}', 'disponible')" title="Marcar como Disponible en Base">
              🔵 En Base
            </button>
            <button class="btn-quick-status taller ${isTaller ? 'active' : ''}" onclick="setQuickVehicleStatus('${v.id}', 'mantenimiento')" title="Marcar como En Taller / Service">
              🟡 En Taller
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setQuickVehicleStatus(vehId, newStatus) {
  const sector = getActiveData();
  const veh = sector.vehiculos.find(v => v.id === vehId);
  if (!veh) return;

  veh.estado = newStatus;
  const statusLabels = { ocupado: 'En Ruta Activa', disponible: 'Disponible en Base', mantenimiento: 'En Taller / Service' };
  showToast(`Móvil ${veh.patente}: marcado como ${statusLabels[newStatus]}`, '🔄');

  renderFleetCards();
  renderFleetStatusOverview();
  renderDashboardKPIs();
}

// =============================================================================
// CONDUCTORES & PERSONAL
// =============================================================================
function renderDriversCards() {
  const sector = getActiveData();
  const grid = document.getElementById('driversCardsGrid');
  if (!grid) return;

  grid.innerHTML = sector.choferes.map(ch => `
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
          <span class="spec-val">${ch.viajes} despachos</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">CALIFICACIÓN</span>
          <span class="spec-val" style="color:var(--warning);">${ch.calif}</span>
        </div>
      </div>

      <a href="https://wa.me/${ch.telefono}?text=Hola%20${encodeURIComponent(ch.nombre)},%20te%20escribo%20desde%20la%20central%20Baddgroup%20TMS" 
         target="_blank" class="btn-whatsapp-direct">
        💬 WhatsApp Directo (+${ch.telefono.slice(0, 4)}...)
      </a>
    </div>
  `).join('');
}

// =============================================================================
// TALLER & MANTENIMIENTO
// =============================================================================
function renderMaintenanceGrid() {
  const sector = getActiveData();
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
            ${sector.mantenimiento.map(m => `
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
// AGENDA: CALENDARIO INTERACTIVO (SOLICITADO EXPLÍCITAMENTE)
// =============================================================================
function initCalendar() {
  document.getElementById('btnPrevMonth')?.addEventListener('click', () => showToast('Visualizando histórico de Agosto 2026', '📅'));
  document.getElementById('btnNextMonth')?.addEventListener('click', () => showToast('Planificación de Octubre 2026', '📅'));
  document.getElementById('btnShowAllEvents')?.addEventListener('click', () => {
    currentSelectedCalendarDay = null;
    document.querySelectorAll('.calendar-day-cell').forEach(c => c.classList.remove('active-day'));
    document.getElementById('selectedDayTitle').textContent = 'Todos los Eventos de Septiembre';
    document.getElementById('selectedDaySubtitle').textContent = 'Mostrando la programación completa del mes';
    renderCalendarEventsForDay(null);
  });
}

function renderCalendarDays() {
  const sector = getActiveData();
  const grid = document.getElementById('calendarDaysGrid');
  if (!grid) return;

  // Septiembre 2026: Comienza en Martes (1 de Sep) -> 1 celda de mes anterior
  let html = '';
  html += `<div class="calendar-day-cell other-month"><span class="day-number">31</span></div>`;

  // Días del 1 al 30 de Septiembre
  for (let d = 1; d <= 30; d++) {
    const dayEvents = sector.agenda.filter(a => a.dia === d);
    const hasEvents = dayEvents.length > 0;
    const isSelected = d === currentSelectedCalendarDay;

    let dotsHtml = '';
    if (hasEvents) {
      dotsHtml = dayEvents.map(e => `<span class="event-dot ${e.tipo}"></span>`).join('');
    }

    html += `
      <div class="calendar-day-cell ${isSelected ? 'active-day' : ''}" onclick="selectCalendarDay(${d})">
        <span class="day-number">${d}</span>
        <div class="day-events-dots">${dotsHtml}</div>
      </div>
    `;
  }

  grid.innerHTML = html;
}

function selectCalendarDay(day) {
  currentSelectedCalendarDay = day;
  document.querySelectorAll('.calendar-day-cell').forEach(c => c.classList.remove('active-day'));
  renderCalendarDays();

  const sector = getActiveData();
  const dayEvents = sector.agenda.filter(a => a.dia === day);

  document.getElementById('selectedDayTitle').textContent = `Eventos: ${day} de Septiembre 2026`;
  document.getElementById('selectedDaySubtitle').textContent = `${dayEvents.length} evento(s) programado(s)`;
  renderCalendarEventsForDay(day);
}

function renderCalendarEventsForDay(day) {
  const sector = getActiveData();
  const list = document.getElementById('calendarEventsList');
  if (!list) return;

  const events = day ? sector.agenda.filter(a => a.dia === day) : sector.agenda;

  if (events.length === 0) {
    list.innerHTML = `
      <div style="padding:24px; text-align:center; color:var(--text-subtle); font-size:12px;">
        No hay salidas programadas ni vencimientos para este día.<br>
        <button class="btn-table-action" style="margin-top:10px;" onclick="document.getElementById('btnShowAllEvents').click()">Ver agenda completa</button>
      </div>
    `;
    return;
  }

  list.innerHTML = events.map(a => `
    <div class="alert-feed-item" style="border-left:4px solid var(--accent);">
      <div class="alert-icon-box ${a.tipo === 'vtv' ? 'danger' : (a.tipo === 'taller' ? 'warning' : 'info')}">
        ${a.tipo === 'vtv' ? '🛡️' : (a.tipo === 'taller' ? '🔧' : '📦')}
      </div>
      <div class="alert-texts" style="flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="alert-title">${a.titulo}</span>
          <span style="font-size:10.5px; font-weight:800; color:var(--accent); font-family:var(--font-mono);">${a.hora} hs</span>
        </div>
        <span class="alert-desc">Unidades asignadas: <strong>${a.unidad}</strong></span>
        <span class="alert-time">Fecha: ${a.fecha} · Prioridad: <strong>${a.prioridad}</strong></span>
      </div>
    </div>
  `).join('');
}

// =============================================================================
// FINANZAS & CLIENTES
// =============================================================================
function renderFinancesTable() {
  const sector = getActiveData();
  const cards = document.getElementById('financeOverviewCards');
  const tableBody = document.getElementById('financesTableBody');
  if (!cards || !tableBody) return;

  const k = sector.kpis.mes;
  cards.innerHTML = `
    <div class="kpis-grid" style="grid-template-columns:repeat(4, 1fr); margin-bottom:0;">
      <div class="kpi-card">
        <span class="kpi-title">TOTAL INGRESOS</span>
        <div class="kpi-value text-green">${formatARS(k.facturacion)}</div>
        <span class="kpi-footer-note">Fletes devengados</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-title">TOTAL EGRESOS</span>
        <div class="kpi-value" style="color:var(--danger);">${formatARS(k.combustible + k.mantenimiento + k.seguros)}</div>
        <span class="kpi-footer-note">Combustible, taller y seguros</span>
      </div>
      <div class="kpi-card highlight-card">
        <span class="kpi-title">SUPERÁVIT NETO</span>
        <div class="kpi-value text-green">${formatARS(k.balance)}</div>
        <span class="kpi-footer-note">Caja disponible líquida</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-title">MARGEN OPERATIVO</span>
        <div class="kpi-value text-teal">${k.margen}%</div>
        <span class="kpi-footer-note">Rentabilidad neta</span>
      </div>
    </div>
  `;

  tableBody.innerHTML = sector.finanzas.map(f => `
    <tr>
      <td style="font-family:var(--font-mono);">${f.fecha}</td>
      <td>
        <span class="status-badge ${f.tipo === 'ingreso' ? 'completada' : 'programado'}">
          ${f.tipo === 'ingreso' ? '▲ Ingreso' : '▼ Egreso'}
        </span>
      </td>
      <td><strong>${f.desc}</strong></td>
      <td><span class="code-pill">${f.categoria}</span></td>
      <td style="font-family:var(--font-mono); font-size:11.5px;">${f.comprobante}</td>
      <td>${f.metodo}</td>
      <td style="font-weight:800; font-family:var(--font-mono); color:${f.tipo === 'ingreso' ? 'var(--success)' : 'var(--danger)'};">
        ${f.tipo === 'ingreso' ? '+' : '-'} ${formatARS(f.monto)}
      </td>
    </tr>
  `).join('');
}

function renderClientsCards() {
  const sector = getActiveData();
  const grid = document.getElementById('clientsCardsGrid');
  if (!grid) return;

  grid.innerHTML = sector.clientes.map(c => `
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
// REMITO OFICIAL IMPRIMIBLE (SOLO BRANDING BADDGROUP, INDICA PRUEBA)
// =============================================================================
function renderRemitoDocument(routeId) {
  const sector = getActiveData();
  const route = routeId ? (sector.rutas.find(r => r.id === routeId) || sector.rutas[0]) : sector.rutas[0];
  const container = document.getElementById('remitoDocumentContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="remito-header-row">
      <div class="remito-brand-side">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <img src="assets/baddgroup-logo.svg" alt="Baddgroup" style="width:28px; height:28px;">
          <h2 style="font-size:18px; font-weight:900; color:#000000; letter-spacing:0.5px;">BADDGROUP TMS & ERP</h2>
        </div>
        <p style="font-size:11px; font-weight:700; color:#c2410c;">DOCUMENTO DE DEMOSTRACIÓN · SISTEMA DE PRUEBA</p>
        <p style="font-size:11px; color:#444;">Operación: <strong>${sector.sectorTitle}</strong></p>
        <p style="font-size:11px; color:#444;">CUIT Emisor: <strong>30-71994218-0 (SISTEMA DE PRUEBA)</strong></p>
        <p style="font-size:11px; color:#444;">Domicilio Operativo: Base Central Logística de Evaluación</p>
      </div>

      <div class="remito-center-x">
        <div class="x-box">R</div>
        <span style="font-size:9px; font-weight:800; margin-top:4px;">CÓD. 091</span>
      </div>

      <div class="remito-number-side">
        <h3 style="font-size:16px; font-weight:900; color:#000000;">REMITO OFICIAL</h3>
        <p style="font-size:14px; font-family:var(--font-mono); font-weight:800; color:#000000; margin:4px 0;">N° 0001-0004892</p>
        <p style="font-size:11px; color:#444;">Fecha: <strong>16/09/2026</strong></p>
        <p style="font-size:11px; color:#444;">Despacho de Referencia: <strong>${route?.id || 'FLX-2026-081'}</strong></p>
      </div>
    </div>

    <!-- DATOS DEL REMITENTE Y DESTINATARIO -->
    <table class="remito-table">
      <tr>
        <td style="width:50%;">
          <strong>REMITENTE / ORIGEN:</strong><br>
          ${route?.origen || 'Depósito Central'}<br>
          Cliente: ${route?.cliente || 'Cliente Comercial'}
        </td>
        <td style="width:50%;">
          <strong>DESTINATARIO / ENTREGA:</strong><br>
          ${route?.destino || 'Destino en Tránsito'}<br>
          Condición de Entrega: Puerta a Puerta con Remito Conformado
        </td>
      </tr>
      <tr>
        <td>
          <strong>UNIDAD DE TRANSPORTE:</strong> ${route?.vehiculo || 'Móvil de Flota'}<br>
          <strong>CONDUCTOR ASIGNADO:</strong> ${route?.chofer || 'Conductor Autorizado'}
        </td>
        <td>
          <strong>VALOR DECLARADO FLETE:</strong> ${formatARS(route?.monto || 78000)}<br>
          <strong>ESTADO DE CARGA:</strong> Precinto Verificado (Entorno de Demostración)
        </td>
      </tr>
    </table>

    <!-- DETALLE DE BULTOS -->
    <table class="remito-table">
      <thead>
        <tr>
          <th style="width:10%;">ITEM</th>
          <th style="width:18%;">CÓDIGO GUÍA</th>
          <th style="width:48%;">DESCRIPCIÓN DE MERCADERÍA / BULTOS</th>
          <th style="width:12%;">CANTIDAD</th>
          <th style="width:12%;">ESTADO</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:center;">1</td>
          <td style="font-family:var(--font-mono);">${route?.id || 'FLX-081'}-L1</td>
          <td>${route?.carga || 'Bultos para distribución logística'}</td>
          <td style="text-align:center;">${route?.bultos || '1 Lote'}</td>
          <td style="text-align:center;">Conforme</td>
        </tr>
      </tbody>
    </table>

    <div class="remito-footer-signatures">
      <div class="sig-box">
        <div class="sig-line"></div>
        <p>Firma y Aclaración Chofer</p>
        <p style="font-size:10px; color:#666;">Baddgroup TMS Central</p>
      </div>
      <div class="sig-box">
        <div class="sig-line"></div>
        <p>Firma y Sello del Receptor</p>
        <p style="font-size:10px; color:#666;">Conformidad de Entrega</p>
      </div>
    </div>
  `;
}

function verRemitoDeRuta(routeId) {
  renderRemitoDocument(routeId);
  switchView('remitos');
  showToast(`Remito oficial preparado para despacho ${routeId}`, '📄');
}

// =============================================================================
// TEMA CLARO / OSCURO
// =============================================================================
function initThemeToggle() {
  const btn = document.getElementById('themeToggleBtn');
  btn?.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    showToast(`Modo visual cambiado a ${next === 'dark' ? 'Oscuro' : 'Claro'}`, '🌓');
  });
}

// =============================================================================
// BUSCADOR CONTEXTUAL
// =============================================================================
function initSearch() {
  const input = document.getElementById('globalSearchInput');
  input?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderRoutesTable();
      renderFleetCards();
      return;
    }

    const sector = getActiveData();
    const filteredRoutes = sector.rutas.filter(r => 
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
          <td><button class="btn-table-action" onclick="openRouteDetailModal('${r.id}')">👁️ Detalle</button></td>
        </tr>
      `).join('');
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input?.focus();
    }
  });
}

// =============================================================================
// MODALES & FORMULARIOS
// =============================================================================
function initModals() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      document.getElementById(modalId)?.classList.remove('active');
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  // Botón + Despacho en topbar
  document.getElementById('btnNuevaRuta')?.addEventListener('click', () => {
    populateRouteModalSelects();
    document.getElementById('newRouteModal')?.classList.add('active');
  });

  // Botón Remito rápido en topbar
  document.getElementById('btnNuevoRemitoQuick')?.addEventListener('click', () => {
    switchView('remitos');
  });

  // Botón + Unidad en flota
  document.getElementById('btnNuevaUnidadModal')?.addEventListener('click', () => {
    document.getElementById('newVehicleModal')?.classList.add('active');
  });

  // Botón + Conductor
  document.getElementById('btnNuevoChoferModal')?.addEventListener('click', () => {
    document.getElementById('newDriverModal')?.classList.add('active');
  });

  // Botón + Agendar Evento
  document.getElementById('btnNuevoEventoAgenda')?.addEventListener('click', () => {
    document.getElementById('newAgendaEventModal')?.classList.add('active');
  });

  // Submits
  document.getElementById('newRouteForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const sector = getActiveData();
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
      eta: '21:00 hs',
      pago: 'Contra Entrega'
    };

    sector.rutas.unshift(newRoute);
    document.getElementById('newRouteModal').classList.remove('active');
    renderRoutesTable();
    renderDashboardTables();
    document.getElementById('badgeRutasActivas').textContent = sector.rutas.length;
    showToast(`Despacho ${newRoute.id} creado con éxito`, '📦');
  });

  document.getElementById('newVehicleForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const sector = getActiveData();
    const newVeh = {
      id: `veh-${Date.now()}`,
      patente: document.getElementById('nvPatente').value.toUpperCase(),
      marca: document.getElementById('nvMarca').value,
      tipo: document.getElementById('nvTipo').value,
      anio: Number(document.getElementById('nvAnio').value),
      capacidadTn: Number(document.getElementById('nvCapacidad').value),
      km: Number(document.getElementById('nvKm').value),
      estado: 'disponible',
      chofer: 'Sin asignar',
      consumo: 'Óptimo',
      vtv: '2027-10-15',
      seguro: 'Al Día'
    };

    sector.vehiculos.unshift(newVeh);
    document.getElementById('newVehicleModal').classList.remove('active');
    renderFleetCards();
    renderFleetStatusOverview();
    document.getElementById('badgeTotalFlota').textContent = sector.vehiculos.length;
    showToast(`Móvil ${newVeh.patente} incorporado a la flota`, '🚚');
  });

  document.getElementById('newDriverForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const sector = getActiveData();
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

    sector.choferes.unshift(newDriver);
    document.getElementById('newDriverModal').classList.remove('active');
    renderDriversCards();
    document.getElementById('badgeChoferesCount').textContent = sector.choferes.length;
    showToast(`Conductor ${newDriver.nombre} dado de alta`, '👨‍✈️');
  });

  document.getElementById('newAgendaEventForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const sector = getActiveData();
    const dia = Number(document.getElementById('nagDia').value);
    const newEvt = {
      id: `ag-${Date.now()}`,
      fecha: `2026-09-${dia < 10 ? '0' + dia : dia}`,
      dia: dia,
      hora: document.getElementById('nagHora').value,
      titulo: document.getElementById('nagTitulo').value,
      unidad: document.getElementById('nagUnidad').value,
      tipo: document.getElementById('nagTipo').value,
      prioridad: document.getElementById('nagPrioridad').value
    };

    sector.agenda.push(newEvt);
    document.getElementById('newAgendaEventModal').classList.remove('active');
    document.getElementById('badgeAgendaCount').textContent = sector.agenda.length;
    renderCalendarDays();
    selectCalendarDay(dia);
    showToast(`Turno "${newEvt.titulo}" agendado con éxito`, '📅');
  });
}

function populateRouteModalSelects() {
  const sector = getActiveData();
  document.getElementById('nrCodigo').value = `DSP-2026-${Math.floor(100 + Math.random() * 900)}`;

  const cliSelect = document.getElementById('nrCliente');
  if (cliSelect) {
    cliSelect.innerHTML = sector.clientes.map(c => `<option value="${c.razonSocial}">${c.razonSocial}</option>`).join('');
  }

  const vehSelect = document.getElementById('nrVehiculo');
  if (vehSelect) {
    vehSelect.innerHTML = sector.vehiculos.map(v => `<option value="${v.patente} (${v.marca})">${v.patente} · ${v.marca}</option>`).join('');
  }

  const chSelect = document.getElementById('nrChofer');
  if (chSelect) {
    chSelect.innerHTML = sector.choferes.map(ch => `<option value="${ch.nombre}">${ch.nombre} (${ch.licencia.split('-')[0]})</option>`).join('');
  }
}

// =============================================================================
// TOAST NOTIFICACIONES FLOTANTES
// =============================================================================
let toastTimeout;
function showToast(message, icon = '✅') {
  const toast = document.getElementById('toastNotification');
  const iconEl = document.getElementById('toastIcon');
  const msgEl = document.getElementById('toastMessage');

  if (!toast) return;

  clearTimeout(toastTimeout);
  if (iconEl) iconEl.textContent = icon;
  if (msgEl) msgEl.textContent = message;

  toast.classList.add('show');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/**
 * Automotores Os-Car — Catálogo de Vehículos
 * Estructura de datos desacoplada (JSON/Array)
 * Florencio Varela, Buenos Aires
 */

const VEHICLES_DATA = [
  {
    id: 'peugeot-208-like',
    name: 'Peugeot 208 Like 1.2L',
    category: 'autos',
    condition: '0km',
    year: 2026,
    brand: 'Peugeot',
    price: 'Consultar Precio Especial',
    priceNote: 'Bonificación exclusiva de contado',
    isFinanced: true,
    financeNote: 'Financiación hasta el 60% en cuotas fijas en pesos',
    image: 'assets/vehicles/peugeot-208.jpg',
    gallery: [
      'assets/vehicles/peugeot-208.jpg',
      'assets/vehicles/toyota-corolla.jpg',
      'assets/hero-showroom.jpg'
    ],
    km: '0 km',
    engine: '1.2 PureTech 82 CV',
    transmission: 'Manual 5 velocidades',
    fuel: 'Nafta',
    traction: 'Delantera 4x2',
    color: 'Blanco Nácar',
    features: [
      'Pantalla táctil de 7 pulgadas con conectividad Apple CarPlay y Android Auto',
      'Dirección asistida eléctrica variable',
      'Control de estabilidad (ESP) y asistencia al arranque en pendientes (Hill Assist)',
      '4 airbags (frontales y laterales delanteros)',
      'Luces diurnas LED signature Peugeot',
      'Aire acondicionado digital con mandos ergonómicos'
    ],
    description: 'El hatchback insignia de diseño moderno y bajo consumo. Ideal tanto para el tránsito urbano diario en zona sur como para autopista, con excelente tenida de ruta y confort de marcha insuperable.'
  },
  {
    id: 'toyota-corolla-seg',
    name: 'Toyota Corolla SEG 2.0 CVT',
    category: 'autos',
    condition: '0km',
    year: 2026,
    brand: 'Toyota',
    price: 'Consultar Disponibilidad',
    priceNote: 'Garantía oficial Toyota de 5 años o 150.000 km',
    isFinanced: true,
    financeNote: 'Planes a medida con entrega inmediata',
    image: 'assets/vehicles/toyota-corolla.jpg',
    gallery: [
      'assets/vehicles/toyota-corolla.jpg',
      'assets/hero-showroom.jpg'
    ],
    km: '0 km',
    engine: '2.0 Dynamic Force 170 CV',
    transmission: 'Automática Direct Shift CVT con 10 marchas simuladas',
    fuel: 'Nafta',
    traction: 'Delantera 4x2',
    color: 'Gris Plata Metalizado',
    features: [
      'Paquete de seguridad activa Toyota Safety Sense',
      'Control de velocidad crucero adaptativo y frenado autónomo de emergencia',
      'Tapizados en cuero genuino y butaca del conductor con regulación eléctrica',
      'Climatizador automático bi-zona',
      'Tablero digital configurable de 12.3 pulgadas',
      'Faros delanteros y traseros Full LED con encendido automático'
    ],
    description: 'El sedán referente indiscutido en confiabilidad, durabilidad y reventa en el mercado argentino. Confort premium para viajar en familia con la máxima tranquilidad que solo Toyota y Automotores Os-Car pueden brindar.'
  },
  {
    id: 'toyota-hilux-srv',
    name: 'Toyota Hilux SRV 4x4 2.8 TDI',
    category: 'camionetas',
    condition: 'usado',
    year: 2022,
    brand: 'Toyota',
    price: 'Consultar Cotización',
    priceNote: 'Unidad seleccionada con historial de servicios oficiales',
    isFinanced: true,
    financeNote: 'Tomamos tu usado en parte de pago y financiamos la diferencia',
    image: 'assets/vehicles/toyota-hilux.jpg',
    gallery: [
      'assets/vehicles/toyota-hilux.jpg',
      'assets/vehicles/vw-amarok.jpg'
    ],
    km: '54.000 km',
    engine: '2.8 Turbo Diesel 204 CV - 500 Nm',
    transmission: 'Automática secuencial de 6 velocidades',
    fuel: 'Diesel Premium',
    traction: '4x4 desconectable con reductora (alta/baja) y bloqueo de diferencial',
    color: 'Gris Plata',
    features: [
      'Tracción 4x4 electrónica con asistente de descenso en pendientes',
      'Central multimedia con GPS satelital nativo y cámara de retroceso',
      'Barra antivuelco cromada y lona marítima cubre caja original',
      'Estribos laterales de aluminio reforzados',
      '7 airbags y control de tracción activo A-TRC',
      'Enganche homologado para remolque'
    ],
    description: 'La pick-up más vendida del país. Potencia, robustez y capacidad todoterreno inigualable. Estado impecable, única mano, uso particular y lista para transferir en el día.'
  },
  {
    id: 'vw-amarok-v6',
    name: 'Volkswagen Amarok V6 Highline 3.0 TDI',
    category: 'camionetas',
    condition: '0km',
    year: 2026,
    brand: 'Volkswagen',
    price: 'Consultar Condiciones',
    priceNote: 'Entrega pactada inmediata',
    isFinanced: true,
    financeNote: 'Amplia financiación con DNI en cuotas fijas',
    image: 'assets/vehicles/vw-amarok.jpg',
    gallery: [
      'assets/vehicles/vw-amarok.jpg',
      'assets/vehicles/toyota-hilux.jpg'
    ],
    km: '0 km',
    engine: 'V6 3.0 TDI 258 CV con función Overboost a 272 CV',
    transmission: 'Automática ZF de 8 marchas',
    fuel: 'Diesel Premium',
    traction: 'Integral permanente 4Motion con diferencial Torsen',
    color: 'Azul Atlántico / Negro Profundo',
    features: [
      'Aceleración de 0 a 100 km/h en 7.4 segundos',
      'Frenos a disco en las 4 ruedas y ABS Off-Road exclusivo',
      'Butacas ergonómicas ErgoComfort calefaccionadas con regulación eléctrica',
      'Llantas de aleación de 19 pulgadas',
      'Sensores de estacionamiento delanteros y traseros con cámara de reversa',
      'Iluminación Bi-Xenón con luz de marcha diurna LED'
    ],
    description: 'El rendimiento y confort de un sedán de alta gama combinado con la fuerza de carga de una camioneta de trabajo pesado. Respuesta de motor instantánea para viajes largos y autopista.'
  },
  {
    id: 'ford-ranger-xlt',
    name: 'Ford Ranger XLT 3.2 4x2',
    category: 'camionetas',
    condition: 'usado',
    year: 2020,
    brand: 'Ford',
    price: 'Consultar Valor',
    priceNote: 'Documentación al día, lista para transferir',
    isFinanced: true,
    financeNote: 'Planes de financiación en cuotas fijas en pesos',
    image: 'assets/vehicles/ford-ranger.jpg',
    gallery: [
      'assets/vehicles/ford-ranger.jpg',
      'assets/vehicles/toyota-hilux.jpg'
    ],
    km: '68.500 km',
    engine: '3.2 Puma 5 cilindros Turbo Diesel 200 CV',
    transmission: 'Manual de 6 marchas',
    fuel: 'Diesel',
    traction: 'Trasera 4x2',
    color: 'Rojo Rubí Metalizado',
    features: [
      'Sistema de conectividad SYNC 3 con pantalla táctil de 8 pulgadas',
      'Climatizador automático bi-zona',
      'Sensor de lluvia y encendido automático de luces',
      'Control de estabilidad, control de balanceo de trailer y control de carga adaptativo',
      'Llantas de aleación de 17 pulgadas con cubiertas en óptimo estado',
      'Defensa frontal y estribos laterales'
    ],
    description: 'Camioneta de porte imponente con el probado motor de 5 cilindros y 200 CV. Máxima capacidad de arrastre y habitáculo silencioso. Verificación técnica y policial aprobada.'
  },
  {
    id: 'vw-gol-trend',
    name: 'Volkswagen Gol Trend 1.6 MSI',
    category: 'autos',
    condition: 'usado',
    year: 2019,
    brand: 'Volkswagen',
    price: 'Consultar Precio',
    priceNote: 'Bajo costo de mantenimiento y repuestos económicos',
    isFinanced: true,
    financeNote: 'Anticipo mínimo y saldo hasta en 36 cuotas',
    image: 'assets/vehicles/vw-gol.jpg',
    gallery: [
      'assets/vehicles/vw-gol.jpg',
      'assets/vehicles/peugeot-208.jpg'
    ],
    km: '59.000 km',
    engine: '1.6 MSI 8V 101 CV',
    transmission: 'Manual de 5 marchas',
    fuel: 'Nafta',
    traction: 'Delantera 4x2',
    color: 'Blanco Cristal',
    features: [
      'Aire acondicionado y dirección asistida hidráulica',
      'Levantavidrios eléctricos delanteros',
      'Cierre centralizado con comando a distancia en llave tipo navaja',
      'Frenos ABS con repartidor electrónico de frenada (EBD)',
      'Doble airbag frontal',
      'Equipo de audio con Bluetooth, USB y tarjeta SD'
    ],
    description: 'El clásico indiscutido de las familias y jóvenes argentinos. Mecánica súper noble, confiable y de repuestos muy accesibles. Ideal como primer auto o segundo vehículo familiar.'
  },
  {
    id: 'chevrolet-cruze-ltz',
    name: 'Chevrolet Cruze LTZ 1.4 Turbo',
    category: 'autos',
    condition: 'usado',
    year: 2021,
    brand: 'Chevrolet',
    price: 'Consultar Cotización',
    priceNote: 'Excelente estado general, auxilio sin rodar',
    isFinanced: true,
    financeNote: 'Financiación disponible con mínimos requisitos',
    image: 'assets/vehicles/chevrolet-cruze.jpg',
    gallery: [
      'assets/vehicles/chevrolet-cruze.jpg',
      'assets/vehicles/toyota-corolla.jpg'
    ],
    km: '46.000 km',
    engine: '1.4 Ecotec Turbo con inyección directa 153 CV',
    transmission: 'Automática secuencial de 6 marchas',
    fuel: 'Nafta',
    traction: 'Delantera 4x2',
    color: 'Gris Grafito',
    features: [
      'Sistema de encendido remoto de motor desde la llave',
      'Acceso sin llave y botón de arranque presencial (Keyless)',
      'Techo solar eléctrico corredizo',
      'Alerta de punto ciego y sensores de proximidad delanteros y traseros',
      'Pantalla táctil MyLink de 8 pulgadas con Wi-Fi nativo a bordo',
      'Cámara de visión trasera de alta definición con guías dinámicas'
    ],
    description: 'Tecnología turbo de primer nivel nacional, excelente insonorización y aceleración inmediata con muy bajo consumo de combustible. Un vehículo sofisticado y confortable.'
  },
  {
    id: 'mercedes-sprinter-311',
    name: 'Mercedes-Benz Sprinter 311 CDI Furgón',
    category: 'camiones',
    condition: 'usado',
    year: 2021,
    brand: 'Mercedes-Benz',
    price: 'Consultar Valor Comercial',
    priceNote: 'Facturación comercial para empresas y particulares',
    isFinanced: true,
    financeNote: 'Línea de crédito para utilitarios y herramientas de trabajo',
    image: 'assets/vehicles/mercedes-sprinter.jpg',
    gallery: [
      'assets/vehicles/mercedes-sprinter.jpg',
      'assets/vehicles/iveco-daily.jpg'
    ],
    km: '82.000 km',
    engine: '2.2 CDI Bi-Turbo Diesel 114 CV',
    transmission: 'Manual de 6 marchas',
    fuel: 'Diesel',
    traction: 'Trasera',
    color: 'Blanco Ártico',
    features: [
      'Volumen de carga de 7.5 metros cúbicos',
      'Puerta lateral corrediza y portón trasero con apertura de 270 grados',
      'Control de estabilidad adaptativo al peso de carga (ESP Adaptativo)',
      'Asistente de viento cruzado (Crosswind Assist)',
      'Aire acondicionado en cabina y butaca de conductor con suspensión hidráulica',
      'Piso de carga reforzado con protecciones perimetrales'
    ],
    description: 'La herramienta definitiva para logística, fletes y distribución en Buenos Aires. Máxima durabilidad mecánica, capacidad de carga útil y bajo costo operativo por kilómetro.'
  },
  {
    id: 'iveco-daily-55c16',
    name: 'Iveco Daily 55C16 Chasis Cabina',
    category: 'camiones',
    condition: 'usado',
    year: 2019,
    brand: 'Iveco',
    price: 'Consultar Condiciones',
    priceNote: 'Apto para carrozado, caja térmica o playera',
    isFinanced: true,
    financeNote: 'Facilidades de pago y financiación comercial',
    image: 'assets/vehicles/iveco-daily.jpg',
    gallery: [
      'assets/vehicles/iveco-daily.jpg',
      'assets/vehicles/mercedes-sprinter.jpg'
    ],
    km: '95.000 km',
    engine: '3.0 FPT Common Rail Turbo Intercooler 155 CV',
    transmission: 'Manual ZF de 6 marchas sincronizadas',
    fuel: 'Diesel',
    traction: 'Trasera 4x2 reforzada con duales',
    color: 'Blanco',
    features: [
      'Capacidad de carga máxima de 5.3 toneladas',
      'Eje trasero con ruedas duales para máxima estabilidad y peso',
      'Cabina confortable con espacio para conductor y dos acompañantes',
      'Frenos de aire con sistema ABS',
      'Tacógrafo digital homologado y limitador de velocidad',
      'Tanque de combustible de gran autonomía'
    ],
    description: 'Camión liviano para reparto interurbano de cargas generales. Mecánica sencilla, resistente y rendidora. Unidad lista para poner a trabajar de inmediato con verificación al día.'
  },
  {
    id: 'honda-tornado-xr250',
    name: 'Honda Tornado XR 250',
    category: 'motos',
    condition: '0km',
    year: 2026,
    brand: 'Honda',
    price: 'Consultar Precio Contado / Cuotas',
    priceNote: 'Entrega inmediata con patentamiento opcional',
    isFinanced: true,
    financeNote: 'Financiación en cuotas fijas con DNI',
    image: 'assets/vehicles/honda-tornado.jpg',
    gallery: [
      'assets/vehicles/honda-tornado.jpg',
      'assets/vehicles/yamaha-moto.jpg'
    ],
    km: '0 km',
    engine: '249 cc DOHC 4 válvulas refrigerado por aire con radiador de aceite',
    transmission: '6 velocidades',
    fuel: 'Nafta',
    traction: 'Cadena de transmisión reforzada',
    color: 'Rojo Honda / Blanco',
    features: [
      'Suspensión delantera telescópica Showa de largo recorrido',
      'Suspensión trasera Pro-Link con amortiguador hidráulico regulable',
      'Freno a disco delantero y tambor trasero de excelente respuesta',
      'Tablero digital completo con odómetro parcial y total',
      'Chasis tubular de acero de alta resistencia tipo cuna semi-doble',
      'Neumáticos mixtos On/Off Road para asfalto o tierra'
    ],
    description: 'La moto on-off de referencia absoluta en el país. Confiabilidad total para trasladarse a diario o encarar caminos difíciles. Agilidad, durabilidad legendaria y el mayor valor de reventa del segmento.'
  },
  {
    id: 'yamaha-fzx-150',
    name: 'Yamaha FZ-X 150 Fi ABS',
    category: 'motos',
    condition: 'usado',
    year: 2023,
    brand: 'Yamaha',
    price: 'Consultar Valor',
    priceNote: 'Único dueño, servicios al día',
    isFinanced: true,
    financeNote: 'Planes de financiación en pesos',
    image: 'assets/vehicles/yamaha-moto.jpg',
    gallery: [
      'assets/vehicles/yamaha-moto.jpg',
      'assets/vehicles/honda-tornado.jpg'
    ],
    km: '7.800 km',
    engine: '149 cc Blue Core monocilíndrico con Inyección Electrónica',
    transmission: '5 velocidades',
    fuel: 'Nafta',
    traction: 'Cadena',
    color: 'Negro Mate con detalles cobrizos',
    features: [
      'Freno a disco delantero con sistema antibloqueo ABS de serie',
      'Estilo Neo-Retro con faro delantero redondo LED bi-funcional',
      'Conectividad Bluetooth con aplicación Yamaha Y-Connect',
      'Control de tracción desconectable (TCS)',
      'Toma de carga auxiliar de 12V integrada en el manillar',
      'Tablero digital LCD con indicador de marcha y consumo de combustible'
    ],
    description: 'Diseño retro contemporáneo con toda la tecnología moderna de Yamaha. Consumo mínimo de combustible, posición de manejo muy relajada y máxima seguridad con freno ABS.'
  }
];

/**
 * Automotores Os-Car - Catalogo de Vehiculos
 * Datos reales extraidos de automotoresoscar.com.ar
 * Florencio Varela, Buenos Aires - Actualizado 2026
 */

const VEHICLES_DATA = [
  {
    "id": "peugeot-208-like",
    "name": "Peugeot 208 Like 1.2L",
    "category": "autos",
    "condition": "0km",
    "year": 2026,
    "brand": "Peugeot",
    "price": "Consultar Precio",
    "priceNote": "Financiacion disponible con cuotas fijas en pesos",
    "isFinanced": true,
    "financeNote": "Amplia financiacion en cuotas fijas solo con DNI",
    "image": "assets/vehicles/peugeot-208.jpg",
    "gallery": [
      "assets/vehicles/peugeot-208.jpg"
    ],
    "km": "0 km",
    "engine": "1.2 PureTech",
    "transmission": "Manual",
    "fuel": "Nafta",
    "traction": "Delantera",
    "color": "Consultar disponibilidad",
    "features": [
      "Aire acondicionado",
      "Cierre centralizado con llave a distancia",
      "Levantavidrios electricos delanteros",
      "Direccion hidraulica asistida",
      "Doble airbag frontal",
      "Frenos ABS",
      "Sistema de audio AM/FM con Bluetooth, USB y Aux"
    ],
    "description": "El hatchback insignia de Peugeot. Diseno moderno, bajo consumo y excelente comportamiento tanto en ciudad como en autopista.",
    "sourceUrl": "https://www.automotoresoscar.com.ar/auto-peugeot-208-0km-1604604324/32203"
  },
  {
    "id": "fiat-cronos-drive",
    "name": "Fiat Cronos Drive Pack Conec",
    "category": "autos",
    "condition": "0km",
    "year": 2026,
    "brand": "Fiat",
    "price": "Consultar Precio",
    "priceNote": "Financiacion disponible con cuotas fijas en pesos",
    "isFinanced": true,
    "financeNote": "Amplia financiacion en cuotas fijas solo con DNI",
    "image": "assets/vehicles/fiat-cronos.jpg",
    "gallery": [
      "assets/vehicles/fiat-cronos.jpg"
    ],
    "km": "0 km",
    "engine": "1.3 Firefly",
    "transmission": "Manual 5 vel.",
    "fuel": "Nafta",
    "traction": "Delantera",
    "color": "Consultar disponibilidad",
    "features": [
      "Climatizador automatico",
      "Tapizados en cuero",
      "Cierre centralizado a distancia",
      "Computadora de a bordo",
      "Control crucero",
      "Control de estabilidad ESP",
      "Frenos ABS con EBD",
      "Airbags frontales y laterales",
      "Anclajes ISOFIX",
      "Luces antiniebla delanteras y traseras",
      "Conectividad Bluetooth con controles al volante",
      "Llantas de aleacion"
    ],
    "description": "El sedan compacto mas versatil del mercado. Conectividad total, interior premium en cuero y todas las asistencias de seguridad.",
    "sourceUrl": "https://www.automotoresoscar.com.ar/auto-fiat-cronos-0km-1604345095/32195"
  },
  {
    "id": "chevrolet-onix-premier-turbo",
    "name": "Chevrolet Onix Premier 1.0 Turbo A/T",
    "category": "autos",
    "condition": "0km",
    "year": 2026,
    "brand": "Chevrolet",
    "price": "Consultar Precio",
    "priceNote": "Financiacion disponible con cuotas fijas en pesos",
    "isFinanced": true,
    "financeNote": "Amplia financiacion en cuotas fijas solo con DNI",
    "image": "assets/vehicles/chevrolet-onix.jpg",
    "gallery": [
      "assets/vehicles/chevrolet-onix.jpg"
    ],
    "km": "0 km",
    "engine": "1.0 Ecotec Turbo",
    "transmission": "Automatica 6 vel.",
    "fuel": "Nafta",
    "traction": "Delantera",
    "color": "Consultar disponibilidad",
    "features": [
      "Interior en cuero",
      "Techo solar electrico",
      "Climatizador automatico",
      "Control crucero",
      "6 airbags frontales laterales y de cortina",
      "Control de estabilidad ESP",
      "Frenos ABS",
      "Sensores de estacionamiento traseros",
      "Pantalla tactil con GPS y Bluetooth"
    ],
    "description": "La version tope de gama del Onix con motor 1.0 turbo y caja automatica. El auto mas vendido del pais en su version mas completa.",
    "sourceUrl": "https://www.automotoresoscar.com.ar/auto-chevrolet-onix-0km-1611357440/32276"
  },
  {
    "id": "vw-gol-trend-2019",
    "name": "Volkswagen Gol Trend 1.6 MSI",
    "category": "autos",
    "condition": "usado",
    "year": 2019,
    "brand": "Volkswagen",
    "price": "Consultar Precio",
    "priceNote": "Bajo costo de mantenimiento y repuestos economicos",
    "isFinanced": true,
    "financeNote": "Anticipo minimo y saldo hasta en 36 cuotas",
    "image": "assets/vehicles/vw-gol.jpg",
    "gallery": [
      "assets/vehicles/vw-gol.jpg"
    ],
    "km": "59.000 km",
    "engine": "1.6 MSI 8V 101 CV",
    "transmission": "Manual 5 vel.",
    "fuel": "Nafta",
    "traction": "Delantera",
    "color": "Blanco",
    "features": [
      "Aire acondicionado",
      "Direccion asistida hidraulica",
      "Levantavidrios electricos delanteros",
      "Cierre centralizado a distancia",
      "Frenos ABS con EBD",
      "Doble airbag frontal",
      "Audio con Bluetooth, USB y SD"
    ],
    "description": "El clasico indiscutido de las familias argentinas. Mecanica noble, confiable y repuestos muy accesibles. Ideal como primer auto o segundo vehiculo familiar."
  },
  {
    "id": "chevrolet-cruze-ltz-2021",
    "name": "Chevrolet Cruze LTZ 1.4 Turbo",
    "category": "autos",
    "condition": "usado",
    "year": 2021,
    "brand": "Chevrolet",
    "price": "Consultar Precio",
    "priceNote": "Excelente estado general, auxilio sin rodar",
    "isFinanced": true,
    "financeNote": "Financiacion disponible con minimos requisitos",
    "image": "assets/vehicles/chevrolet-cruze.jpg",
    "gallery": [
      "assets/vehicles/chevrolet-cruze.jpg"
    ],
    "km": "46.000 km",
    "engine": "1.4 Ecotec Turbo 153 CV",
    "transmission": "Automatica 6 vel.",
    "fuel": "Nafta",
    "traction": "Delantera",
    "color": "Gris Grafito",
    "features": [
      "Encendido remoto desde la llave",
      "Acceso sin llave Keyless con boton de arranque",
      "Techo solar electrico corredizo",
      "Alerta de punto ciego y sensores de proximidad",
      "Pantalla tactil MyLink 8 pulgadas con Wi-Fi",
      "Camara de vision trasera HD"
    ],
    "description": "Tecnologia turbo de primer nivel, excelente insonorizacion y aceleracion inmediata con bajo consumo. Un vehiculo sofisticado y confortable."
  },
  {
    "id": "honda-hrv-ex-cvt",
    "name": "Honda HR-V EX CVT",
    "category": "camionetas",
    "condition": "0km",
    "year": 2026,
    "brand": "Honda",
    "price": "Consultar Precio",
    "priceNote": "Financiacion disponible con cuotas fijas en pesos",
    "isFinanced": true,
    "financeNote": "Amplia financiacion en cuotas fijas solo con DNI",
    "image": "assets/vehicles/honda-hrv.jpg",
    "gallery": [
      "assets/vehicles/honda-hrv.jpg"
    ],
    "km": "0 km",
    "engine": "1.8 i-VTEC 141 CV",
    "transmission": "CVT Automatica",
    "fuel": "Nafta",
    "traction": "Delantera",
    "color": "Consultar disponibilidad",
    "features": [
      "Climatizador automatico bizona",
      "Control crucero",
      "Volante multifuncion",
      "Espejos electricos y calefaccionados",
      "Porton trasero electrico con apertura remota",
      "Levantavidrios electricos delanteros y traseros",
      "Airbags frontales laterales y de cortina",
      "Frenos ABS con EBD",
      "Anclajes ISOFIX",
      "Sensores de estacionamiento traseros",
      "Pantalla tactil con GPS Bluetooth USB",
      "Llantas de aleacion 17 pulgadas",
      "Barras de techo"
    ],
    "description": "El SUV urbano de referencia de Honda. Interior espacioso con segunda fila Magic Seat, equipamiento premium linea EX y excelente eficiencia de combustible.",
    "sourceUrl": "https://www.automotoresoscar.com.ar/camioneta-honda-hrv-0km-1584132390/31979"
  },
  {
    "id": "renault-alaskan-confort",
    "name": "Renault Alaskan Confort 4x2",
    "category": "camionetas",
    "condition": "0km",
    "year": 2026,
    "brand": "Renault",
    "price": "Consultar Precio",
    "priceNote": "Financiacion disponible con cuotas fijas en pesos",
    "isFinanced": true,
    "financeNote": "Amplia financiacion en cuotas fijas solo con DNI",
    "image": "assets/vehicles/renault-alaskan.jpg",
    "gallery": [
      "assets/vehicles/renault-alaskan.jpg"
    ],
    "km": "0 km",
    "engine": "2.3 dCi Diesel 160 CV",
    "transmission": "Manual 6 vel.",
    "fuel": "Diesel",
    "traction": "4x2",
    "color": "Consultar disponibilidad",
    "features": [
      "Control crucero",
      "Doble airbag frontal",
      "Frenos ABS",
      "Anclajes ISOFIX",
      "Cierre centralizado a distancia",
      "Conectividad Bluetooth",
      "Llamadas manos libres",
      "Entrada USB y Aux"
    ],
    "description": "La pick-up de trabajo de Renault con el legendario motor diesel de 160 CV. Confiable, resistente y con financiacion accesible para uso comercial o particular.",
    "sourceUrl": "https://www.automotoresoscar.com.ar/camioneta-renault-alaskan-0km-1615402897/32537"
  },
  {
    "id": "toyota-hilux-srv-4x4",
    "name": "Toyota Hilux SRV 4x4 2.8 TDI",
    "category": "camionetas",
    "condition": "usado",
    "year": 2022,
    "brand": "Toyota",
    "price": "Consultar Precio",
    "priceNote": "Unidad con historial de servicios oficiales",
    "isFinanced": true,
    "financeNote": "Tomamos tu usado en parte de pago y financiamos la diferencia",
    "image": "assets/vehicles/toyota-hilux.jpg",
    "gallery": [
      "assets/vehicles/toyota-hilux.jpg"
    ],
    "km": "54.000 km",
    "engine": "2.8 Turbo Diesel 204 CV",
    "transmission": "Automatica 6 vel.",
    "fuel": "Diesel",
    "traction": "4x4 desconectable con reductora",
    "color": "Gris Plata",
    "features": [
      "Traccion 4x4 con asistente de descenso",
      "Multimedia con GPS y camara de retroceso",
      "Barra antivuelco y lona maritima original",
      "Estribos laterales de aluminio",
      "7 airbags y control de traccion activo",
      "Enganche homologado para remolque"
    ],
    "description": "La pick-up mas vendida del pais. Potencia, robustez y capacidad todoterreno inigualable. Estado impecable, unica mano y lista para transferir."
  },
  {
    "id": "vw-amarok-v6",
    "name": "Volkswagen Amarok V6 Highline 3.0 TDI",
    "category": "camionetas",
    "condition": "0km",
    "year": 2026,
    "brand": "Volkswagen",
    "price": "Consultar Precio",
    "priceNote": "Entrega pactada inmediata",
    "isFinanced": true,
    "financeNote": "Amplia financiacion con DNI en cuotas fijas",
    "image": "assets/vehicles/vw-amarok.jpg",
    "gallery": [
      "assets/vehicles/vw-amarok.jpg"
    ],
    "km": "0 km",
    "engine": "V6 3.0 TDI 258 CV",
    "transmission": "Automatica ZF 8 vel.",
    "fuel": "Diesel",
    "traction": "4Motion integral permanente",
    "color": "Azul Atlantico / Negro Profundo",
    "features": [
      "0 a 100 km/h en 7.4 segundos",
      "Frenos a disco en las 4 ruedas con ABS Off-Road",
      "Butacas ErgoComfort calefaccionadas",
      "Llantas de aleacion 19 pulgadas",
      "Sensores de estacionamiento con camara",
      "Iluminacion Bi-Xenon con LED"
    ],
    "description": "El rendimiento y confort de un sedan de alta gama combinado con la fuerza de una camioneta de trabajo. Respuesta de motor instantanea para viajes largos."
  },
  {
    "id": "mercedes-benz-1620-tractor",
    "name": "Mercedes-Benz 1620 Cabina Dormitorio",
    "category": "camiones",
    "condition": "usado",
    "year": 1996,
    "brand": "Mercedes-Benz",
    "price": "Consultar Precio",
    "priceNote": "Disponible con batea transportadora opcional",
    "isFinanced": true,
    "financeNote": "Consultar condiciones de financiacion comercial",
    "image": "assets/vehicles/mercedes-sprinter.jpg",
    "gallery": [
      "assets/vehicles/mercedes-sprinter.jpg"
    ],
    "km": "Consultar",
    "engine": "1620 Turbo Diesel",
    "transmission": "Manual",
    "fuel": "Diesel",
    "traction": "Trasera",
    "color": "Blanco",
    "features": [
      "Cabina dormitorio completa",
      "Plato de quinta rueda tractor de carretera",
      "Equipo Sony CD de audio",
      "2 cubiertas delanteras nuevas",
      "Batea transportadora para 10 vehiculos disponible"
    ],
    "description": "Camion tractor Mercedes-Benz 1620 Turbo con cabina dormitorio. Listo para trabajar. Batea transportadora para 10 unidades disponible de forma opcional.",
    "sourceUrl": "https://www.automotoresoscar.com.ar/camion-mercedes-benz-1620-1996-1422114647/17525"
  },
  {
    "id": "volkswagen-17220-tractor",
    "name": "Volkswagen 17220 Tractor de Carretera",
    "category": "camiones",
    "condition": "usado",
    "year": 2013,
    "brand": "Volkswagen",
    "price": "Consultar Precio",
    "priceNote": "Bajo kilometraje para la categoria",
    "isFinanced": true,
    "financeNote": "Consultar condiciones de financiacion comercial",
    "image": "assets/vehicles/iveco-daily.jpg",
    "gallery": [
      "assets/vehicles/iveco-daily.jpg"
    ],
    "km": "50.000 km",
    "engine": "17220 Diesel",
    "transmission": "Manual",
    "fuel": "Diesel",
    "traction": "Trasera",
    "color": "Blanco",
    "features": [
      "Bajo kilometraje para la categoria",
      "Cabina de larga distancia",
      "Apto para quinto rueda y semi-remolque",
      "Verificacion tecnica y policial al dia"
    ],
    "description": "Camion tractor Volkswagen 17220 modelo 2013 con 50.000 km. Excelente relacion precio-prestacion para fletes de larga distancia.",
    "sourceUrl": "https://www.automotoresoscar.com.ar/camion-volkswagen-17220-2013-1409146703/15957"
  },
  {
    "id": "mercedes-sprinter-311",
    "name": "Mercedes-Benz Sprinter 311 CDI Furgon",
    "category": "camiones",
    "condition": "usado",
    "year": 2021,
    "brand": "Mercedes-Benz",
    "price": "Consultar Precio",
    "priceNote": "Facturacion comercial para empresas y particulares",
    "isFinanced": true,
    "financeNote": "Linea de credito para utilitarios",
    "image": "assets/vehicles/mercedes-sprinter.jpg",
    "gallery": [
      "assets/vehicles/mercedes-sprinter.jpg"
    ],
    "km": "82.000 km",
    "engine": "2.2 CDI Bi-Turbo 114 CV",
    "transmission": "Manual 6 vel.",
    "fuel": "Diesel",
    "traction": "Trasera",
    "color": "Blanco",
    "features": [
      "Volumen de carga de 7.5 metros cubicos",
      "Puerta lateral corrediza y porton trasero de 270 grados",
      "Control de estabilidad adaptativo al peso de carga",
      "Asistente de viento cruzado Crosswind Assist",
      "Aire acondicionado en cabina",
      "Piso de carga reforzado"
    ],
    "description": "La herramienta definitiva para logistica, fletes y distribucion. Maxima durabilidad mecanica, capacidad de carga util y bajo costo operativo por kilometro."
  },
  {
    "id": "honda-tornado-xr250",
    "name": "Honda Tornado XR 250",
    "category": "motos",
    "condition": "0km",
    "year": 2026,
    "brand": "Honda",
    "price": "Consultar Precio Contado y Cuotas",
    "priceNote": "Entrega inmediata con patentamiento opcional",
    "isFinanced": true,
    "financeNote": "Financiacion en cuotas fijas con DNI",
    "image": "assets/vehicles/honda-tornado.jpg",
    "gallery": [
      "assets/vehicles/honda-tornado.jpg"
    ],
    "km": "0 km",
    "engine": "249 cc DOHC 4 valvulas",
    "transmission": "6 velocidades",
    "fuel": "Nafta",
    "traction": "Cadena",
    "color": "Rojo Honda y Blanco",
    "features": [
      "Suspension delantera telescopica de largo recorrido",
      "Suspension trasera Pro-Link regulable",
      "Freno a disco delantero y tambor trasero",
      "Tablero digital con odometro parcial y total",
      "Chasis tubular de acero de alta resistencia",
      "Neumaticos mixtos On y Off Road"
    ],
    "description": "La moto on-off de referencia absoluta en el pais. Confiabilidad total para uso diario o caminos dificiles. Agilidad, durabilidad legendaria y el mayor valor de reventa del segmento."
  },
  {
    "id": "yamaha-fzx-150-abs",
    "name": "Yamaha FZ-X 150 Fi ABS",
    "category": "motos",
    "condition": "usado",
    "year": 2023,
    "brand": "Yamaha",
    "price": "Consultar Precio",
    "priceNote": "Unico dueno, servicios al dia",
    "isFinanced": true,
    "financeNote": "Planes de financiacion en pesos",
    "image": "assets/vehicles/yamaha-moto.jpg",
    "gallery": [
      "assets/vehicles/yamaha-moto.jpg"
    ],
    "km": "7.800 km",
    "engine": "149 cc Blue Core Fi",
    "transmission": "5 velocidades",
    "fuel": "Nafta",
    "traction": "Cadena",
    "color": "Negro Mate",
    "features": [
      "Freno a disco delantero con ABS de serie",
      "Faro LED redondo estilo Neo-Retro",
      "Conectividad Bluetooth con app Yamaha Y-Connect",
      "Control de traccion desconectable TCS",
      "Toma de carga 12V en el manillar",
      "Tablero digital LCD con indicador de marcha y consumo"
    ],
    "description": "Diseno retro contemporaneo con toda la tecnologia moderna de Yamaha. Consumo minimo, posicion de manejo relajada y maxima seguridad con freno ABS."
  }
];

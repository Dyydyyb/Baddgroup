/**
 * BRICEÑO REALTY GROUP - DATA ENGINE & MARKETS DEFINITION
 * Estructura desacoplada para los cuatro mercados internacionales:
 * 1. Panamá
 * 2. República Dominicana
 * 3. Estados Unidos (Florida)
 * 4. Dubái (EAU)
 */

const BRICENO_MARKETS_DATA = {
  panama: {
    id: 'panama',
    order: 1,
    name: 'Panamá',
    officialName: 'República de Panamá',
    region: 'América Central · Océano Pacífico',
    tagline: 'Hub financiero de América Latina, con dolarización y estabilidad jurídica.',
    heroImage: 'assets/images/panama-hero.jpg',
    currency: 'USD (Dólar estadounidense de curso legal)',
    flagSvg: `<svg viewBox="0 0 32 24" width="24" height="18" fill="none"><rect width="32" height="24" rx="2" fill="#fff"/><rect width="16" height="12" fill="#fff"/><rect x="16" width="16" height="12" fill="#d21034"/><rect y="12" width="16" height="12" fill="#005293"/><rect x="16" y="12" width="16" height="12" fill="#fff"/><polygon points="8,2 9.5,7 14,7 10.5,9.5 12,14 8,11.5 4,14 5.5,9.5 2,7 6.5,7" fill="#005293"/><polygon points="24,14 25.5,19 30,19 26.5,21.5 28,26 24,23.5 20,26 21.5,21.5 18,19 22.5,19" fill="#d21034"/></svg>`,
    overview: 'Panamá representa la mayor plataforma bancaria, logística y corporativa de América Latina. Con una economía plenamente dolarizada desde 1904, una ubicación geoestratégica única alrededor del Canal de Panamá y un sistema fiscal de tributación territorial, el país ofrece al inversor internacional la más alta certidumbre jurídica del hemisferio. A través de la Ley de Inversionista Calificado y la Visa de Países Amigos, adquirir bienes raíces calificados permite obtener la Residencia Legal Permanente con plazos de aprobación récord.',
    metrics: [
      { key: 'roi', label: 'ROI Anual Estimado', value: 8.4, display: '8.4%', suffix: '%', desc: 'Rendimiento bruto de alquiler en zonas prime' },
      { key: 'growth', label: 'Crecimiento Anual', value: 6.8, display: '6.8%', suffix: '%', desc: 'Apreciación sostenida de plusvalía' },
      { key: 'priceM2', label: 'Precio Promedio / m²', value: 2450, display: 'USD 2.450', suffix: ' USD', desc: 'Punta Pacífica, Costa del Este y Santa María' },
      { key: 'payback', label: 'Plazo Estimado Retorno', value: 7.5, display: '7.5 Años', suffix: ' Años', desc: 'Modelo combinado de renta ejecutiva y plusvalía' }
    ],
    advantages: [
      {
        title: 'Economía 100% Dolarizada',
        desc: 'El dólar estadounidense es la moneda oficial, eliminando el riesgo de devaluación y facilitando transacciones bancarias internacionales sin trabas.',
        icon: 'dollar'
      },
      {
        title: 'Residencia Permanente Rápida',
        desc: 'El programa de Inversionista Calificado otorga residencia legal permanente en tan solo 30 días hábiles mediante compra inmobiliaria desde USD 300.000.',
        icon: 'passport'
      },
      {
        title: 'Régimen Fiscal Territorial (0% Exterior)',
        desc: 'Panamá no grava los ingresos generados fuera de su jurisdicción territorial. Cero impuestos sobre herencias y transferencias financieras foráneas.',
        icon: 'shield'
      },
      {
        title: 'Hub Corporativo Multinacional (SEM)',
        desc: 'Más de 180 multinacionales (Nestlé, P&G, Dell, Heineken) tienen sus sedes regionales en Panamá, generando una demanda permanente de alquileres corporativos.',
        icon: 'building'
      },
      {
        title: 'Conectividad Aérea Global',
        desc: 'El Aeropuerto Internacional de Tocumen (Hub de las Américas) conecta directamente con más de 90 ciudades de América y Europa en vuelos diarios.',
        icon: 'plane'
      },
      {
        title: 'Solidez Bancaria de Primer Nivel',
        desc: 'Centro bancario internacional con más de 60 bancos globales supervisados por estándares de máxima solidez y privacidad patrimonial.',
        icon: 'vault'
      }
    ],
    propertyTypes: [
      {
        name: 'Penthouses & Condominios en Bahía',
        range: 'USD 280.000 — 1.200.000',
        desc: 'Rascacielos residenciales con vista infinita al Océano Pacífico, amenidades de club privado y servicios de conserjería.',
        badge: 'Renta Ejecutiva'
      },
      {
        name: 'Proyectos en Pre-construcción (Pozo)',
        range: 'USD 160.000 — 420.000',
        desc: 'Planes de pago flexibles durante obra con apreciación de capital estimada del 20% al 30% a la entrega de llaves.',
        badge: 'Alta Plusvalía'
      },
      {
        name: 'Islas Privadas Ocean Reef',
        range: 'USD 850.000 — 3.500.000',
        desc: 'La primera comunidad residencial náutica construida sobre islas artificiales en la bahía urbana de Ciudad de Panamá.',
        badge: 'Ultra Lujo'
      },
      {
        name: 'Unidades de Renta Flexible / Hospitality',
        range: 'USD 190.000 — 360.000',
        desc: 'Departamentos completamente amoblados con licencia turística y gestión profesional de alquileres temporarios.',
        badge: 'Flujo Pasivo'
      }
    ],
    gallery: [
      { src: 'assets/images/panama-1.jpg', caption: 'Skyline vanguardista sobre la bahía de Panamá y Punta Pacífica' },
      { src: 'assets/images/panama-2.jpg', caption: 'Residencias de lujo frente al mar en comunidades privadas' },
      { src: 'assets/images/panama-3.jpg', caption: 'Interiores de diseño contemporáneo con ventanales de suelo a techo' }
    ],
    comparison: {
      ticket: 'USD 160.000',
      roi: '7.5% — 9.5% anual',
      benefitsMigratory: 'Residencia Permanente en 30 días (Visa Inversionista)',
      taxRegime: 'Tributación territorial (0% sobre rentas extranjeras)',
      investorProfile: 'Inversores que priorizan blindaje patrimonial en USD y residencia legal'
    }
  },

  'dom-rep': {
    id: 'dom-rep',
    order: 2,
    name: 'República Dominicana',
    officialName: 'República Dominicana',
    region: 'Caribe Insular · Punta Cana & Cap Cana',
    tagline: 'El epicentro turístico y de inversión del Caribe con exenciones fiscales de vanguardia.',
    heroImage: 'assets/images/dom-rep-hero.jpg',
    currency: 'USD (Operaciones inmobiliarias y rentas dolarizadas)',
    flagSvg: `<svg viewBox="0 0 32 24" width="24" height="18" fill="none"><rect width="32" height="24" rx="2" fill="#fff"/><rect width="13" height="9" fill="#002f6c"/><rect x="19" width="13" height="9" fill="#ce1126"/><rect y="15" width="13" height="9" fill="#ce1126"/><rect x="19" y="15" width="13" height="9" fill="#002f6c"/><rect x="13" width="6" height="24" fill="#fff"/><rect y="9" width="32" height="6" fill="#fff"/></svg>`,
    overview: 'República Dominicana lidera el crecimiento económico de América Latina y el Caribe, consolidándose como un imán indiscutido para el capital internacional de hospitalidad y real estate. La combinación de más de 10 millones de turistas anuales, una infraestructura aeroportuaria moderna con terminales privadas de clase mundial y el respaldo de la Ley 158-01 (CONFOTUR) crean un escenario fiscal inigualable: 15 años de exención total del Impuesto a la Propiedad Inmobiliaria (IPI de 1%) y 0% de impuesto a la transferencia (3%). Es el mercado por excelencia para capturar altas rentas vacacionales en dólares.',
    metrics: [
      { key: 'roi', label: 'ROI Anual Estimado', value: 10.2, display: '10.2%', suffix: '%', desc: 'Rentas vacacionales en resorts de Cap Cana y Punta Cana' },
      { key: 'growth', label: 'Crecimiento Anual', value: 8.5, display: '8.5%', suffix: '%', desc: 'Plusvalía media anual en proyectos cerrados de playa' },
      { key: 'priceM2', label: 'Precio Promedio / m²', value: 2100, display: 'USD 2.100', suffix: ' USD', desc: 'Complejos de primer nivel frente al mar y golf' },
      { key: 'payback', label: 'Plazo Estimado Retorno', value: 6.2, display: '6.2 Años', suffix: ' Años', desc: 'Con gestión profesional en plataformas y operadores hoteleros' }
    ],
    advantages: [
      {
        title: 'Ley CONFOTUR (Escudo Fiscal 15 Años)',
        desc: 'Exención total del impuesto al patrimonio inmobiliario (IPI del 1% anual por 15 años) y 0% del impuesto de transferencia al comprar (ahorro del 3%).',
        icon: 'shield'
      },
      {
        title: 'Rendimientos en Dólares de Dos Dígitos',
        desc: 'El flujo incesante de turismo internacional de alto gasto garantiza ocupaciones medias del 75% al 85% anual con tarifas dolarizadas.',
        icon: 'dollar'
      },
      {
        title: 'Destino Turístico N° 1 del Caribe',
        desc: 'Reconocido por la OMT con más de 10 millones de visitantes internacionales anuales y conectividad aérea ininterrumpida con EE.UU. y Europa.',
        icon: 'sun'
      },
      {
        title: 'Comunidades Cerradas de Clase Mundial',
        desc: 'Destinos como Cap Cana ofrecen seguridad privada armada, campos de golf de firma Jack Nicklaus, marina de megayates y clubes de playa.',
        icon: 'key'
      },
      {
        title: 'Trato Igualitario al Inversor Extranjero',
        desc: 'La legislación dominicana confiere exactamente los mismos derechos de propiedad a extranjeros que a nacionales, con títulos respaldados por el Registro Inmobiliario.',
        icon: 'scale'
      },
      {
        title: 'Apreciación de Capital en Pre-Construcción',
        desc: 'Entrar en fases iniciales de pozo genera plusvalías contractuales del 25% al 35% al momento de la entrega formal de la propiedad.',
        icon: 'trend'
      }
    ],
    propertyTypes: [
      {
        name: 'Condos Frente a la Playa (Beachfront)',
        range: 'USD 175.000 — 480.000',
        desc: 'Departamentos completamente decorados con acceso directo a la arena blanca, club de playa privado y rentas vacacionales llave en mano.',
        badge: 'Renta Vacacional'
      },
      {
        name: 'Villas de Golf & Marina en Cap Cana',
        range: 'USD 650.000 — 3.200.000',
        desc: 'Mansiones contemporáneas en parcelas privadas de gran metraje, piscina infinita y vistas a campos de golf de campeonato PGA.',
        badge: 'Colección Privada'
      },
      {
        name: 'Suites Hoteleras Branded Residences',
        range: 'USD 140.000 — 310.000',
        desc: 'Unidades residenciales administradas por cadenas hoteleras cinco estrellas con pool de rentas garantizado.',
        badge: 'Gestión Pasiva'
      },
      {
        name: 'Desarrollos Ecoturísticos Exclusivos',
        range: 'USD 220.000 — 550.000',
        desc: 'Comunidades sustentables inmersas en reservas naturales con lagunas de agua cristalina y amenidades de bienestar.',
        badge: 'Estilo de Vida'
      }
    ],
    gallery: [
      { src: 'assets/images/dom-rep-1.jpg', caption: 'Villas privadas con piscinas infinitas integradas al mar turquesa del Caribe' },
      { src: 'assets/images/dom-rep-2.jpg', caption: 'Resorts de arquitectura contemporánea y amenidades de cinco estrellas' },
      { src: 'assets/images/dom-rep-3.jpg', caption: 'Comunidades privadas con acceso directo a playas vírgenes en Cap Cana' }
    ],
    comparison: {
      ticket: 'USD 140.000',
      roi: '9.0% — 12.0% anual',
      benefitsMigratory: 'Residencia por Inversión rápida (Ley 171-07)',
      taxRegime: 'CONFOTUR: 15 años 0% impuesto propiedad y 0% transferencia',
      investorProfile: 'Inversores que buscan maximizar flujo de caja neto en dólares y renta turística'
    }
  },

  florida: {
    id: 'florida',
    order: 3,
    name: 'Estados Unidos (Florida)',
    officialName: 'Estado de Florida, Estados Unidos',
    region: 'Norteamérica · Miami, Brickell & Orlando',
    tagline: 'Seguridad jurídica global, revalorización sostenida y alta demanda de rentas en dólares.',
    heroImage: 'assets/images/florida-hero.jpg',
    currency: 'USD (Dólar estadounidense)',
    flagSvg: `<svg viewBox="0 0 32 24" width="24" height="18" fill="none"><rect width="32" height="24" rx="2" fill="#fff"/><line x1="0" y1="0" x2="32" y2="24" stroke="#c00" stroke-width="4"/><line x1="0" y1="24" x2="32" y2="0" stroke="#c00" stroke-width="4"/><circle cx="16" cy="12" r="4.5" fill="#f5c242" stroke="#b07d0d" stroke-width="0.8"/></svg>`,
    overview: 'Florida es el destino indiscutido de la migración de riqueza, fondos de inversión corporativos y residentes de alto patrimonio en Estados Unidos. Respaldado por la ausencia de impuesto estatal sobre los ingresos de las personas físicas, un ecosistema financiero en plena explosión ("El Wall Street del Sur") y un marco legal con la mayor certidumbre de derechos de propiedad del mundo, invertir en Florida ofrece una combinación irreemplazable de seguridad institucional y acceso a financiamiento hipotecario para extranjeros de hasta el 65% al 70%.',
    metrics: [
      { key: 'roi', label: 'ROI Neto Estimado', value: 7.2, display: '7.2%', suffix: '%', desc: 'Renta neta después de impuestos y gastos de asociación' },
      { key: 'growth', label: 'Crecimiento Anual', value: 7.8, display: '7.8%', suffix: '%', desc: 'Apreciación del valor de la tierra en áreas consolidadas' },
      { key: 'priceM2', label: 'Precio Promedio / m²', value: 6800, display: 'USD 6.800', suffix: ' USD', desc: 'Distritos premium de Brickell, Edgewater y Downtown Miami' },
      { key: 'payback', label: 'Plazo Estimado Retorno', value: 9.0, display: '9.0 Años', suffix: ' Años', desc: 'Potenciado significativamente con apalancamiento bancario' }
    ],
    advantages: [
      {
        title: '0% Impuesto Estatal a los Ingresos',
        desc: 'Florida no grava las ganancias personales a nivel estatal, convirtiéndose en el refugio fiscal predilecto de multimillonarios y corporaciones estadounidenses.',
        icon: 'shield'
      },
      {
        title: 'Acceso a Crédito Hipotecario para Extranjeros',
        desc: 'Instituciones bancarias de EE.UU. financian entre el 60% y el 70% del valor del inmueble para inversores internacionales con tasas competitivas.',
        icon: 'bank'
      },
      {
        title: 'La Mayor Seguridad Jurídica del Planeta',
        desc: 'Garantía constitucional inquebrantable sobre la propiedad privada, títulos registrados con pólizas de seguro Title Insurance y contratos blindados.',
        icon: 'scale'
      },
      {
        title: 'El "Wall Street del Sur"',
        desc: 'Migración constante de firmas como Citadel, Goldman Sachs y fondos tecnológicos a Miami, alimentando la demanda por residencias de lujo.',
        icon: 'building'
      },
      {
        title: 'Estructuración Patrimonial en LLCs',
        desc: 'Permite adquirir propiedades a través de sociedades de responsabilidad limitada (LLC) para anonimato, protección ante demandas y planificación sucesoria.',
        icon: 'vault'
      },
      {
        title: 'Apreciación por Escasez de Suelo Costero',
        desc: 'La geografía de Miami (delimitada por el Océano Atlántico y los Everglades) asegura que la tierra frente al agua mantenga una curva ascendente perpetua.',
        icon: 'trend'
      }
    ],
    propertyTypes: [
      {
        name: 'Torres Residenciales en Brickell & Edgewater',
        range: 'USD 450.000 — 2.800.000',
        desc: 'Rascacielos ultramodernos diseñados por firmas de renombre (Aston Martin, Cipriani, Armani) con amenidades de nivel resort.',
        badge: 'Prestigio Global'
      },
      {
        name: 'Propiedades de Renta Corta en Orlando / Kissimmee',
        range: 'USD 320.000 — 780.000',
        desc: 'Townhouses y villas turísticas aprobadas para plataformas de alojamiento temporal cerca de los parques temáticos de Disney y Universal.',
        badge: 'Renta Turística'
      },
      {
        name: 'Condominios Frente al Mar en Sunny Isles',
        range: 'USD 850.000 — 5.500.000',
        desc: 'La riviera de rascacielos de Miami con acceso privado a la playa y servicios de conserjería internacional.',
        badge: 'Frente al Mar'
      },
      {
        name: 'Residencias Multifamily en Tampa & Sarasota',
        range: 'USD 380.000 — 920.000',
        desc: 'Propiedades unifamiliares en corredores suburbanos de vertiginoso crecimiento demográfico y contratos anuales estables.',
        badge: 'Estabilidad'
      }
    ],
    gallery: [
      { src: 'assets/images/florida-1.jpg', caption: 'Skyline iluminado de Brickell y el distrito financiero sobre Biscayne Bay' },
      { src: 'assets/images/florida-2.jpg', caption: 'Penthouses de cristal con terrazas panorámicas y vistas al océano Atlántico' },
      { src: 'assets/images/florida-3.jpg', caption: 'Residencias contemporáneas con muelles privados en las bahías de Miami' }
    ],
    comparison: {
      ticket: 'USD 320.000',
      roi: '6.5% — 8.5% neto anual',
      benefitsMigratory: 'Vías migratorias disponibles (Visa EB-5 / Visa E-2 según estructuración)',
      taxRegime: '0% impuesto estatal a la renta en Florida; deducciones de amortización federal',
      investorProfile: 'Patrimonios consolidados que buscan máxima seguridad institucional y apalancamiento'
    }
  },

  dubai: {
    id: 'dubai',
    order: 4,
    name: 'Dubái (EAU)',
    officialName: 'Emirato de Dubái, Emiratos Árabes Unidos',
    region: 'Medio Oriente · Golfo Pérsico',
    tagline: 'La capital mundial de la innovación inmobiliaria: 0% de impuestos sobre la propiedad y rendimientos superiores.',
    heroImage: 'assets/images/dubai-hero.jpg',
    currency: 'AED / USD (Tipo de cambio fijo 3.67 AED por USD desde 1997)',
    flagSvg: `<svg viewBox="0 0 32 24" width="24" height="18" fill="none"><rect width="32" height="24" rx="2" fill="#fff"/><rect x="8" width="24" height="8" fill="#00732f"/><rect x="8" y="8" width="24" height="8" fill="#fff"/><rect x="8" y="16" width="24" height="8" fill="#000"/><rect width="8" height="24" fill="#f00"/></svg>`,
    overview: 'Dubái se ha establecido como el epicentro absoluto de la prosperidad global, la seguridad y el lujo vanguardista. Con un modelo de gobernanza orientado a la atracción de inversión extranjera y residencia dorada, Dubái no aplica ningún impuesto sobre los ingresos personales, sobre las ganancias de capital ni sobre las rentas inmobiliarias (0% Tax). A través de la Golden Visa de 10 años otorgada por inversiones inmobiliarias, los inversores y sus familias acceden a un estilo de vida de élite, seguridad ciudadana récord mundial y rendimientos de alquiler que duplican los de Londres, Nueva York o París.',
    metrics: [
      { key: 'roi', label: 'ROI Neto Estimado', value: 9.6, display: '9.6%', suffix: '%', desc: 'Rentas libres de impuestos en distritos prime' },
      { key: 'growth', label: 'Crecimiento Anual', value: 14.2, display: '14.2%', suffix: '%', desc: 'Plusvalía récord de mercado en desarrollos líderes' },
      { key: 'priceM2', label: 'Precio Promedio / m²', value: 4200, display: 'USD 4.200', suffix: ' USD', desc: 'Downtown Dubai & Dubai Marina (muy accesible frente a Londres o NY)' },
      { key: 'payback', label: 'Plazo Estimado Retorno', value: 6.8, display: '6.8 Años', suffix: ' Años', desc: 'Sin retenciones impositivas ni cargas fiscales locales' }
    ],
    advantages: [
      {
        title: '0% Impuestos (Tax-Free Total)',
        desc: 'Cero impuesto a las ganancias, cero impuesto a las rentas de alquiler, cero impuesto a la herencia y cero impuesto sobre la plusvalía.',
        icon: 'shield'
      },
      {
        title: 'Golden Visa de 10 Años',
        desc: 'Residencia de larga duración para el inversor, cónyuge, hijos y personal doméstico con inversiones inmobiliarias a partir de 2 millones de AED (~USD 545.000).',
        icon: 'passport'
      },
      {
        title: 'Moneda Pegada al Dólar (AED)',
        desc: 'El Dirham de los EAU mantiene un tipo de cambio fijo inalterable con el dólar estadounidense (1 USD = 3.6725 AED) desde hace más de 25 años.',
        icon: 'dollar'
      },
      {
        title: 'Seguridad Ciudadana N° 1 del Mundo',
        desc: 'Dubái se ubica consistentemente entre las ciudades más seguras del planeta, con un índice de delincuencia prácticamente nulo y estabilidad absoluta.',
        icon: 'key'
      },
      {
        title: 'Planes de Pago Post-Entrega sin Interés',
        desc: 'Desarrolladores líderes (Emaar, Sobha, Meraas) permiten financiar el 40% al 60% del valor de la propiedad en cuotas hasta 3 y 5 años después de la entrega sin interés bancario.',
        icon: 'bank'
      },
      {
        title: 'Rendimientos de Alquiler Récord Global',
        desc: 'Rentabilidades netas promedio que oscilan entre el 8% y el 11%, superando de forma holgada los retornos de Nueva York (3.8%), Londres (2.9%) o Madrid (4.2%).',
        icon: 'trend'
      }
    ],
    propertyTypes: [
      {
        name: 'Penthouses en Downtown & Burj Khalifa',
        range: 'USD 480.000 — 3.500.000',
        desc: 'Residencias icónicas en los rascacielos más altos del mundo con vista a las fuentes danzantes y al boulevard de la ópera.',
        badge: 'Ícono Mundial'
      },
      {
        name: 'Villas de Playa en Palm Jumeirah',
        range: 'USD 1.800.000 — 14.000.000',
        desc: 'La dirección costera más famosa del planeta, con parcelas privadas frente al mar del Golfo Pérsico y playa exclusiva.',
        badge: 'Colección Real'
      },
      {
        name: 'Departamentos en Dubai Marina & JBR',
        range: 'USD 320.000 — 1.200.000',
        desc: 'Torres frente al canal náutico urbano con acceso directo a playa, gastronomía internacional y alta demanda turística.',
        badge: 'Flujo Continuo'
      },
      {
        name: 'Comunidades Maestras (Dubai Hills & Creek)',
        range: 'USD 260.000 — 850.000',
        desc: 'Nuevos polos de desarrollo urbano con campos de golf de 18 hoyos, parques inmensos y colegios internacionales.',
        badge: 'Entrada Estratégica'
      }
    ],
    gallery: [
      { src: 'assets/images/dubai-1.jpg', caption: 'Dubai Marina: torres residenciales vanguardistas y marinas de superyates' },
      { src: 'assets/images/dubai-2.jpg', caption: 'Mansiones privadas y arquitectura de élite en Palm Jumeirah' },
      { src: 'assets/images/dubai-3.jpg', caption: 'Interiores con acabados en mármol italiano y vistas al Burj Khalifa' }
    ],
    comparison: {
      ticket: 'USD 260.000',
      roi: '8.5% — 11.5% neto libre de impuestos',
      benefitsMigratory: 'Golden Visa de 10 años para inversor y grupo familiar',
      taxRegime: '0% tax (sin impuesto a la renta, plusvalía ni tenencia)',
      investorProfile: 'Inversores que buscan máxima rentabilidad neta libre de impuestos y proyección global'
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BRICENO_MARKETS_DATA;
}

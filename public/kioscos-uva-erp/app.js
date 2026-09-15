/**
 * KIOSCOS UVA - ERP & SISTEMA DE GESTIÓN (Arquitectura Sitiocel)
 * Sucursal: Camino General Belgrano 6420, Florencio Varela
 * 1-a-1 idéntico a las capturas de referencia con Chart.js interactivo,
 * catálogo con fotografías reales y pedidos cargados.
 */

// =============================================================================
// 1. ESTADO GLOBAL REACTIVO (UVA_STATE)
// =============================================================================

const UVA_STATE = {
  currentRole: 'admin', // 'admin' (Dueño) o 'vendedor'
  priceMode: 'minorista', // 'minorista' o 'mayorista'
  dashboardPeriod: 'mensual', // 'diario', 'semanal', 'mensual'
  dashboardShowPercent: false, // $ o %
  selectedBranch: 'all', // 'all' o ID de sucursal
  branchRankMode: 'movimientos', // 'movimientos' o 'facturacion'

  // Las 8 Sucursales de Kioscos UVA en Florencio Varela
  branches: [
    {
      id: 'san_martin',
      name: 'Sucursal Av. San Martín',
      shortName: 'Av. San Martín',
      address: 'Av. San Martín 2890, Florencio Varela',
      color: '#EC4899',
      revenue: 12850400,
      cost: 8210000,
      profit: 4640400,
      movements: 560,
      dailyRev: 580000,
      dailyCost: 350000,
      weeklyRev: 3470000,
      weeklyCost: 2100000
    },
    {
      id: 'belgrano',
      name: 'Sucursal Camino Gral. Belgrano',
      shortName: 'Camino Gral Belgrano',
      address: 'Cno. Gral. Belgrano 6420, Florencio Varela',
      color: '#6B3B82',
      revenue: 10469081,
      cost: 6978785,
      profit: 3490296,
      movements: 478,
      dailyRev: 485200,
      dailyCost: 295400,
      weeklyRev: 2890500,
      weeklyCost: 1750200
    },
    {
      id: 'lujan',
      name: 'Sucursal Av. Luján',
      shortName: 'Av. Luján',
      address: 'Av. Luján 1250, Florencio Varela',
      color: '#3B82F6',
      revenue: 9320000,
      cost: 6150000,
      profit: 3170000,
      movements: 415,
      dailyRev: 420000,
      dailyCost: 254000,
      weeklyRev: 2510000,
      weeklyCost: 1530000
    },
    {
      id: 'senzabello',
      name: 'Sucursal Av. Senzabello',
      shortName: 'Av. Senzabello',
      address: 'Av. Senzabello 850, Florencio Varela',
      color: '#F59E0B',
      revenue: 8740200,
      cost: 5820000,
      profit: 2920200,
      movements: 390,
      dailyRev: 395000,
      dailyCost: 240000,
      weeklyRev: 2360000,
      weeklyCost: 1440000
    },
    {
      id: 'aristobulo',
      name: 'Sucursal Aristóbulo del Valle',
      shortName: 'Aristóbulo del Valle',
      address: 'Aristóbulo del Valle 240, Florencio Varela',
      color: '#8B5CF6',
      revenue: 7980500,
      cost: 5280000,
      profit: 2700500,
      movements: 350,
      dailyRev: 360000,
      dailyCost: 218000,
      weeklyRev: 2150000,
      weeklyCost: 1310000
    },
    {
      id: 'yrigoyen',
      name: 'Sucursal Av. Hipólito Yrigoyen',
      shortName: 'Av. Hipólito Yrigoyen',
      address: 'Av. Hipólito Yrigoyen 3100, Florencio Varela',
      color: '#10B981',
      revenue: 6850000,
      cost: 4520000,
      profit: 2330000,
      movements: 310,
      dailyRev: 310000,
      dailyCost: 188000,
      weeklyRev: 1850000,
      weeklyCost: 1120000
    },
    {
      id: 'vergara',
      name: 'Sucursal Av. Vergara',
      shortName: 'Av. Vergara',
      address: 'Av. Vergara 1420, Florencio Varela',
      color: '#06B6D4',
      revenue: 5920000,
      cost: 3910000,
      profit: 2010000,
      movements: 275,
      dailyRev: 268000,
      dailyCost: 163000,
      weeklyRev: 1600000,
      weeklyCost: 970000
    },
    {
      id: 'delatorre',
      name: 'Sucursal Lisandro De la Torre',
      shortName: 'Lisando De la Torre',
      address: 'Lisandro De la Torre 510, Florencio Varela',
      color: '#F97316',
      revenue: 5240000,
      cost: 3450000,
      profit: 1790000,
      movements: 240,
      dailyRev: 238000,
      dailyCost: 145000,
      weeklyRev: 1410000,
      weeklyCost: 860000
    }
  ],

  // Instancias activas de Chart.js
  chartInstances: {},

  users: {
    admin: {
      name: "Kioscos UVA Admin",
      roleLabel: "Dueño (Acceso total)",
      avatar: "MG"
    },
    vendedor: {
      name: "Lucía Benítez",
      roleLabel: "Vendedora (Mostrador)",
      avatar: "LB"
    }
  },

  cart: [],
  selectedPayment: 'Efectivo',
  discountType: 'fijo',
  discountValue: 0,
  customerName: '',
  customerPhone: '',

  // Catálogo de Productos del Kiosco UVA con FOTOS REALES (no emojis) y CÓDIGO DE BARRAS
  products: [
    {
      id: "prod-178900101",
      barcode: "7798123450012",
      name: "Super Pancho Completo con Lluvia de Papas",
      brand: "UVA FAST FOOD",
      category: "PANCHOS & COMIDAS",
      cost: 950,
      price: 2200,
      wholesale: 1900,
      stock: 45,
      minStock: 15,
      featured: true,
      image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900102",
      barcode: "7790895000445",
      name: "Coca Cola 500ml Original Botella",
      brand: "COCA-COLA",
      category: "BEBIDAS",
      cost: 780,
      price: 1500,
      wholesale: 1300,
      stock: 82,
      minStock: 24,
      featured: true,
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900103",
      barcode: "7790895000124",
      name: "Coca Cola 1.5L Retornable",
      brand: "COCA-COLA",
      category: "BEBIDAS",
      cost: 1450,
      price: 2800,
      wholesale: 2400,
      stock: 34,
      minStock: 12,
      featured: false,
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900104",
      barcode: "7791813421110",
      name: "Pepsi 500ml Regular Botella",
      brand: "PEPSICO",
      category: "BEBIDAS",
      cost: 690,
      price: 1300,
      wholesale: 1150,
      stock: 60,
      minStock: 20,
      featured: true,
      image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900105",
      barcode: "7790123456789",
      name: "Papas Fritas Lays Clásicas 85g",
      brand: "LAYS",
      category: "SNACKS",
      cost: 1200,
      price: 2400,
      wholesale: 2100,
      stock: 28,
      minStock: 15,
      featured: true,
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900106",
      barcode: "7790580123456",
      name: "Gomitas Mogul Frutales 150g",
      brand: "ARCOR",
      category: "GOLOSINAS",
      cost: 820,
      price: 1600,
      wholesale: 1350,
      stock: 50,
      minStock: 15,
      featured: true,
      image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900107",
      barcode: "7792222333444",
      name: "Alfajor Guaymallén Triple Chocolate",
      brand: "GUAYMALLEN",
      category: "GOLOSINAS",
      cost: 380,
      price: 800,
      wholesale: 650,
      stock: 120,
      minStock: 30,
      featured: true,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900108",
      barcode: "7622210123456",
      name: "Chocolate Milka Leger 45g",
      brand: "MILKA",
      category: "GOLOSINAS",
      cost: 1100,
      price: 2100,
      wholesale: 1850,
      stock: 35,
      minStock: 12,
      featured: false,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900109",
      barcode: "7084701234567",
      name: "Bebida Energizante Monster 473ml",
      brand: "MONSTER",
      category: "BEBIDAS",
      cost: 1500,
      price: 2900,
      wholesale: 2550,
      stock: 40,
      minStock: 12,
      featured: true,
      image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900110",
      barcode: "7791234567801",
      name: "Agua Mineral Villa del Sur 500ml",
      brand: "VILLA DEL SUR",
      category: "BEBIDAS",
      cost: 520,
      price: 1100,
      wholesale: 900,
      stock: 65,
      minStock: 20,
      featured: false,
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900111",
      barcode: "7622210987654",
      name: "Galletitas Oreo 118g",
      brand: "OREO",
      category: "ALMACÉN",
      cost: 890,
      price: 1700,
      wholesale: 1450,
      stock: 48,
      minStock: 15,
      featured: true,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900112",
      barcode: "7791234000123",
      name: "Cigarrillos Marlboro Box 20",
      brand: "MASSALIN",
      category: "CIGARRILLOS",
      cost: 2950,
      price: 3600,
      wholesale: 3350,
      stock: 90,
      minStock: 25,
      featured: true,
      image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900113",
      barcode: "3086123456789",
      name: "Encendedor Bic Mini Surtido",
      brand: "BIC",
      category: "CIGARRILLOS",
      cost: 550,
      price: 1200,
      wholesale: 980,
      stock: 75,
      minStock: 20,
      featured: true,
      image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900114",
      barcode: "7798888999001",
      name: "Sándwich de Miga Jamón y Queso x2",
      brand: "UVA FRESCOS",
      category: "PANCHOS & COMIDAS",
      cost: 1600,
      price: 3200,
      wholesale: 2800,
      stock: 1, // Alerta stock bajo
      minStock: 10,
      featured: true,
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900115",
      barcode: "7792798000012",
      name: "Cerveza Quilmes Clásica 473ml Lata",
      brand: "QUILMES",
      category: "BEBIDAS",
      cost: 950,
      price: 1800,
      wholesale: 1550,
      stock: 55,
      minStock: 18,
      featured: true,
      image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900116",
      barcode: "7790580987654",
      name: "Turrón Arcor Maní 25g",
      brand: "ARCOR",
      category: "GOLOSINAS",
      cost: 190,
      price: 450,
      wholesale: 350,
      stock: 150,
      minStock: 40,
      featured: true,
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-178900117",
      barcode: "7622300123456",
      name: "Chicles Beldent Menta 10g",
      brand: "BELDENT",
      category: "GOLOSINAS",
      cost: 320,
      price: 700,
      wholesale: 580,
      stock: 110,
      minStock: 25,
      featured: true,
      image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&auto=format&fit=crop&q=80"
    }
  ],

  // Categorías
  categories: [
    { id: "PANCHOS & COMIDAS", name: "PANCHOS & COMIDAS", slug: "panchos-y-comidas", icon: "🌭" },
    { id: "BEBIDAS", name: "BEBIDAS", slug: "bebidas", icon: "🥤" },
    { id: "SNACKS", name: "SNACKS", slug: "snacks", icon: "🥔" },
    { id: "GOLOSINAS", name: "GOLOSINAS", slug: "golosinas", icon: "🍬" },
    { id: "CIGARRILLOS", name: "CIGARRILLOS", slug: "cigarrillos", icon: "🚬" },
    { id: "ALMACÉN", name: "ALMACÉN", slug: "almacen", icon: "🥖" }
  ],

  // Pedidos de Ejemplo Completos (Pedidos cargados)
  orders: [
    {
      id: "ORD-4958",
      date: "14/09/2026",
      time: "13:10 hs",
      customer: "Lucas Gómez",
      channel: "Mostrador",
      itemsSummary: "2x Super Pancho Completo, 2x Coca Cola 500ml",
      items: [
        { name: "Super Pancho Completo", qty: 2, price: 2200 },
        { name: "Coca Cola 500ml Original", qty: 2, price: 1500 }
      ],
      paymentMethod: "Efectivo",
      status: "Entregado",
      statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      total: 7400
    },
    {
      id: "ORD-4957",
      date: "14/09/2026",
      time: "12:45 hs",
      customer: "Mariana Rossi",
      channel: "WhatsApp / Retiro",
      itemsSummary: "1x Papas Lays 85g, 1x Pepsi 500ml, 2x Gomitas Mogul",
      items: [
        { name: "Papas Fritas Lays 85g", qty: 1, price: 2400 },
        { name: "Pepsi 500ml Regular", qty: 1, price: 1300 },
        { name: "Gomitas Mogul Frutales", qty: 2, price: 1600 }
      ],
      paymentMethod: "Mercado Pago / QR",
      status: "En preparación",
      statusClass: "bg-amber-50 text-amber-800 border-amber-200",
      total: 6900
    },
    {
      id: "ORD-4956",
      date: "14/09/2026",
      time: "12:15 hs",
      customer: "Carlos Méndez",
      channel: "Mostrador",
      itemsSummary: "1x Marlboro Box 20, 1x Encendedor Bic Mini",
      items: [
        { name: "Cigarrillos Marlboro Box 20", qty: 1, price: 3600 },
        { name: "Encendedor Bic Mini", qty: 1, price: 1200 }
      ],
      paymentMethod: "Efectivo",
      status: "Entregado",
      statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      total: 4800
    },
    {
      id: "ORD-4955",
      date: "14/09/2026",
      time: "11:50 hs",
      customer: "Esteban Varela",
      channel: "Mostrador",
      itemsSummary: "2x Monster Energy 473ml, 3x Guaymallén Triple",
      items: [
        { name: "Monster Energy 473ml", qty: 2, price: 2900 },
        { name: "Guaymallén Triple Chocolate", qty: 3, price: 800 }
      ],
      paymentMethod: "Tarjeta Débito",
      status: "Entregado",
      statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      total: 8200
    },
    {
      id: "ORD-4954",
      date: "14/09/2026",
      time: "11:20 hs",
      customer: "Florencia Díaz",
      channel: "Mostrador",
      itemsSummary: "1x Sándwich de Miga x2, 1x Coca Cola 500ml",
      items: [
        { name: "Sándwich de Miga Jamón y Queso", qty: 1, price: 3200 },
        { name: "Coca Cola 500ml Original", qty: 1, price: 1500 }
      ],
      paymentMethod: "Mercado Pago",
      status: "Entregado",
      statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      total: 4700
    },
    {
      id: "ORD-4953",
      date: "14/09/2026",
      time: "10:40 hs",
      customer: "Rodrigo Paz",
      channel: "Delivery Cruce Varela",
      itemsSummary: "3x Super Pancho, 1x Coca Cola 1.5L, 1x Papas Lays",
      items: [
        { name: "Super Pancho Completo", qty: 3, price: 2200 },
        { name: "Coca Cola 1.5L Retornable", qty: 1, price: 2800 },
        { name: "Papas Fritas Lays 85g", qty: 1, price: 2400 }
      ],
      paymentMethod: "Mercado Pago",
      status: "En preparación",
      statusClass: "bg-blue-50 text-blue-800 border-blue-200",
      total: 11800
    },
    {
      id: "ORD-4952",
      date: "14/09/2026",
      time: "10:05 hs",
      customer: "Valeria Benítez",
      channel: "Mostrador",
      itemsSummary: "2x Galletitas Oreo, 1x Milka Leger 45g",
      items: [
        { name: "Galletitas Oreo 118g", qty: 2, price: 1700 },
        { name: "Chocolate Milka Leger 45g", qty: 1, price: 2100 }
      ],
      paymentMethod: "Efectivo",
      status: "Entregado",
      statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      total: 5500
    },
    {
      id: "ORD-4951",
      date: "14/09/2026",
      time: "09:30 hs",
      customer: "Agustín Morales",
      channel: "Mostrador",
      itemsSummary: "1x Cerveza Quilmes Lata, 1x Papas Lays 85g",
      items: [
        { name: "Cerveza Quilmes Clásica 473ml", qty: 1, price: 1800 },
        { name: "Papas Fritas Lays 85g", qty: 1, price: 2400 }
      ],
      paymentMethod: "Efectivo",
      status: "Entregado",
      statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      total: 4200
    }
  ],

  // Historial de Ventas Rápidas Mostrador
  sales: [
    {
      orderId: "ORD-4958",
      time: "13:10 p. m.",
      client: "Lucas Gómez",
      points: "+2 pts",
      method: "Efectivo",
      total: 7400
    },
    {
      orderId: "ORD-4957",
      time: "12:45 p. m.",
      client: "Mariana Rossi",
      points: "+2 pts",
      method: "MP",
      total: 6900
    },
    {
      orderId: "ORD-4956",
      time: "12:15 p. m.",
      client: "Carlos Méndez",
      points: "+1 pt",
      method: "Efectivo",
      total: 4800
    },
    {
      orderId: "ORD-4955",
      time: "11:50 a. m.",
      client: "Esteban Varela",
      points: "+3 pts",
      method: "Tarjeta",
      total: 8200
    }
  ],

  // Historial de Movimientos de Stock
  stockHistory: [
    {
      datetime: "14/9/2026 13:10 p. m.",
      productName: "Super Pancho Completo con Lluvia de Papas",
      code: "prod-178900101",
      type: "SALIDA",
      qty: -2,
      stockResult: 45,
      reason: "Venta POS - Ticket ORD-4958"
    },
    {
      datetime: "14/9/2026 13:10 p. m.",
      productName: "Coca Cola 500ml Original Botella",
      code: "prod-178900102",
      type: "SALIDA",
      qty: -2,
      stockResult: 82,
      reason: "Venta POS - Ticket ORD-4958"
    },
    {
      datetime: "14/9/2026 12:45 p. m.",
      productName: "Papas Fritas Lays Clásicas 85g",
      code: "prod-178900105",
      type: "SALIDA",
      qty: -1,
      stockResult: 28,
      reason: "Venta Mostrador ORD-4957"
    },
    {
      datetime: "14/9/2026 11:30 a. m.",
      productName: "Gomitas Mogul Frutales 150g",
      code: "prod-178900106",
      type: "ENTRADA",
      qty: 24,
      stockResult: 50,
      reason: "Reposición Distribuidora Arcor"
    },
    {
      datetime: "14/9/2026 10:15 a. m.",
      productName: "Sándwich de Miga Jamón y Queso x2",
      code: "prod-178900114",
      type: "SALIDA",
      qty: -2,
      stockResult: 1,
      reason: "Baja por rotura lote matutino"
    }
  ],

  // Control de Modo Oscuro
  darkMode: localStorage.getItem('uva_dark_mode') === 'true',

  // ---------------------------------------------------------------------------
  // GASTOS OPERATIVOS DE LAS SUCURSALES (FINANZAS)
  // ---------------------------------------------------------------------------
  financeBranch: 'all',
  financeCategory: 'all',
  financeStatus: 'all',
  expenses: [
    {
      id: 'EXP-101',
      branchId: 'belgrano',
      category: 'Empleados',
      description: 'Pago de Sueldos Cajeros y Reposición (Quincena 1 Septiembre)',
      invoiceNum: 'REC-9941',
      amount: 1630000,
      paymentMethod: 'Transferencia Bancaria',
      date: '10/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-102',
      branchId: 'belgrano',
      category: 'Alquiler',
      description: 'Alquiler Local Comercial Cno. Gral. Belgrano 6420',
      invoiceNum: 'FAC-B 0001-0004128',
      amount: 850000,
      paymentMethod: 'Transferencia Bancaria',
      date: '05/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-103',
      branchId: 'belgrano',
      category: 'Servicios',
      description: 'EDESUR S.A. - Energía Eléctrica Trifásica Comercial (Heladeras)',
      invoiceNum: 'REC-EDE-88192',
      amount: 380000,
      paymentMethod: 'Débito Automático',
      date: '08/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-104',
      branchId: 'belgrano',
      category: 'Servicios',
      description: 'Fibra Óptica Comercial 500Mbps + Terminales Posnet Fiserv',
      invoiceNum: 'FAC-B 0089-2918',
      amount: 60000,
      paymentMethod: 'Mercado Pago',
      date: '12/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-105',
      branchId: 'belgrano',
      category: 'Proveedores',
      description: 'Distribuidora Arcor Varela - Reposición Golosinas y Chocolates',
      invoiceNum: 'FAC-A 0021-99281',
      amount: 2400000,
      paymentMethod: 'Transferencia Bancaria',
      date: '13/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-106',
      branchId: 'belgrano',
      category: 'Proveedores',
      description: 'Cervecería y Maltería Quilmes - Cervezas y Aguas',
      invoiceNum: 'FAC-A 0012-44109',
      amount: 1450000,
      paymentMethod: 'Cheque 15 Días',
      date: '14/09/2026',
      status: 'Pendiente'
    },
    {
      id: 'EXP-107',
      branchId: 'belgrano',
      category: 'Mantenimiento',
      description: 'Service Preventivo y Carga de Gas Heladeras Exhibidoras',
      invoiceNum: 'REC-5519',
      amount: 140000,
      paymentMethod: 'Efectivo de Caja',
      date: '07/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-108',
      branchId: 'san_martin',
      category: 'Empleados',
      description: 'Sueldos Personal Sucursal Av. San Martín (3 Cajeros + Encargado)',
      invoiceNum: 'REC-9942',
      amount: 1850000,
      paymentMethod: 'Transferencia Bancaria',
      date: '10/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-109',
      branchId: 'san_martin',
      category: 'Alquiler',
      description: 'Alquiler Local Comercial Av. San Martín 2890',
      invoiceNum: 'FAC-B 0003-8819',
      amount: 1100000,
      paymentMethod: 'Transferencia Bancaria',
      date: '05/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-110',
      branchId: 'san_martin',
      category: 'Servicios',
      description: 'EDESUR Luz + AySA Agua Comercial',
      invoiceNum: 'REC-SERV-199',
      amount: 420000,
      paymentMethod: 'Débito Automático',
      date: '08/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-111',
      branchId: 'lujan',
      category: 'Empleados',
      description: 'Sueldos Personal Sucursal Av. Luján 1250',
      invoiceNum: 'REC-9943',
      amount: 1440000,
      paymentMethod: 'Transferencia Bancaria',
      date: '10/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-112',
      branchId: 'lujan',
      category: 'Alquiler',
      description: 'Alquiler Local Comercial Av. Luján 1250',
      invoiceNum: 'FAC-B 0002-1200',
      amount: 750000,
      paymentMethod: 'Transferencia Bancaria',
      date: '05/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-113',
      branchId: 'senzabello',
      category: 'Empleados',
      description: 'Sueldos Personal Sucursal Av. Senzabello',
      invoiceNum: 'REC-9944',
      amount: 1440000,
      paymentMethod: 'Transferencia Bancaria',
      date: '10/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-114',
      branchId: 'aristobulo',
      category: 'Servicios',
      description: 'EDESUR Luz + Seguridad y Alarmas Prosegur',
      invoiceNum: 'FAC-B 0098-114',
      amount: 320000,
      paymentMethod: 'Mercado Pago',
      date: '09/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-115',
      branchId: 'yrigoyen',
      category: 'Alquiler',
      description: 'Alquiler Local Av. Hipólito Yrigoyen 3100',
      invoiceNum: 'FAC-B 0001-5509',
      amount: 680000,
      paymentMethod: 'Transferencia Bancaria',
      date: '05/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-116',
      branchId: 'vergara',
      category: 'Proveedores',
      description: 'FEMSA Coca-Cola - Gaseosas y Aguas Saborizadas',
      invoiceNum: 'FAC-A 0089-1194',
      amount: 1200000,
      paymentMethod: 'Transferencia Bancaria',
      date: '11/09/2026',
      status: 'Pagado'
    },
    {
      id: 'EXP-117',
      branchId: 'delatorre',
      category: 'Mantenimiento',
      description: 'Insumos de Limpieza y Rollos Térmicos para Impresoras 80mm',
      invoiceNum: 'REC-7718',
      amount: 85000,
      paymentMethod: 'Efectivo de Caja',
      date: '06/09/2026',
      status: 'Pagado'
    }
  ],

  // ---------------------------------------------------------------------------
  // NÓMINA DE EMPLEADOS Y TURNOS DE LAS SUCURSALES
  // ---------------------------------------------------------------------------
  employeesBranch: 'all',
  employeesTab: 'plantel', // 'plantel' | 'turnos'
  employees: [
    {
      id: 'EMP-01',
      name: 'Tadeo Garofalo',
      branchId: 'belgrano',
      role: 'Encargado de Sucursal',
      shift: 'Mañana (07:00 a 15:00)',
      salary: 620000,
      phone: '11-4528-9901',
      dni: '39.812.441',
      status: 'En turno'
    },
    {
      id: 'EMP-02',
      name: 'Florencia Rossi',
      branchId: 'belgrano',
      role: 'Cajera Mostrador',
      shift: 'Tarde (15:00 a 23:00)',
      salary: 480000,
      phone: '11-5821-3310',
      dni: '42.105.772',
      status: 'Franco'
    },
    {
      id: 'EMP-03',
      name: 'Lucas Benítez',
      branchId: 'belgrano',
      role: 'Cajero / Repositor',
      shift: 'Noche (23:00 a 07:00)',
      salary: 530000,
      phone: '11-6629-1144',
      dni: '41.332.908',
      status: 'En turno'
    },
    {
      id: 'EMP-04',
      name: 'Camila Villalba',
      branchId: 'san_martin',
      role: 'Encargada de Sucursal',
      shift: 'Mañana (07:00 a 15:00)',
      salary: 640000,
      phone: '11-3912-7722',
      dni: '38.990.112',
      status: 'En turno'
    },
    {
      id: 'EMP-05',
      name: 'Ezequiel Duarte',
      branchId: 'san_martin',
      role: 'Cajero Mostrador',
      shift: 'Tarde (15:00 a 23:00)',
      salary: 490000,
      phone: '11-5501-8843',
      dni: '43.210.994',
      status: 'En turno'
    },
    {
      id: 'EMP-06',
      name: 'Sofía Martínez',
      branchId: 'lujan',
      role: 'Cajera Mostrador',
      shift: 'Mañana (07:00 a 15:00)',
      salary: 480000,
      phone: '11-4902-1277',
      dni: '44.001.293',
      status: 'En turno'
    },
    {
      id: 'EMP-07',
      name: 'Braian Romero',
      branchId: 'senzabello',
      role: 'Cajero Mostrador',
      shift: 'Tarde (15:00 a 23:00)',
      salary: 480000,
      phone: '11-6102-4499',
      dni: '40.551.810',
      status: 'En turno'
    },
    {
      id: 'EMP-08',
      name: 'Nicolás Giménez',
      branchId: 'aristobulo',
      role: 'Cajero Mostrador',
      shift: 'Mañana (07:00 a 15:00)',
      salary: 480000,
      phone: '11-3399-2211',
      dni: '41.872.190',
      status: 'Franco'
    },
    {
      id: 'EMP-09',
      name: 'Agustina Morales',
      branchId: 'yrigoyen',
      role: 'Cajera Mostrador',
      shift: 'Tarde (15:00 a 23:00)',
      salary: 480000,
      phone: '11-5290-7711',
      dni: '42.991.002',
      status: 'En turno'
    },
    {
      id: 'EMP-10',
      name: 'Joaquín Castro',
      branchId: 'vergara',
      role: 'Cajero Mostrador',
      shift: 'Mañana (07:00 a 15:00)',
      salary: 480000,
      phone: '11-4477-8822',
      dni: '43.712.339',
      status: 'En turno'
    },
    {
      id: 'EMP-11',
      name: 'Micaela Paéz',
      branchId: 'delatorre',
      role: 'Cajera Mostrador',
      shift: 'Tarde (15:00 a 23:00)',
      salary: 480000,
      phone: '11-6811-3300',
      dni: '41.402.991',
      status: 'En turno'
    }
  ],

  // Cronograma semanal de turnos
  shiftsCalendar: [
    { day: 'Lunes', shiftMorning: 'Tadeo Garofalo / Camila V.', shiftAfternoon: 'Florencia Rossi / Ezequiel D.', shiftNight: 'Lucas Benítez' },
    { day: 'Martes', shiftMorning: 'Tadeo Garofalo / Sofía M.', shiftAfternoon: 'Florencia Rossi / Braian R.', shiftNight: 'Lucas Benítez' },
    { day: 'Miércoles', shiftMorning: 'Nicolás G. / Camila V.', shiftAfternoon: 'Florencia Rossi / Ezequiel D.', shiftNight: 'Lucas Benítez' },
    { day: 'Jueves', shiftMorning: 'Tadeo Garofalo / Joaquín C.', shiftAfternoon: 'Agustina M. / Braian R.', shiftNight: 'Lucas Benítez' },
    { day: 'Viernes', shiftMorning: 'Tadeo Garofalo / Camila V.', shiftAfternoon: 'Florencia Rossi / Micaela P.', shiftNight: 'Lucas Benítez' },
    { day: 'Sábado', shiftMorning: 'Nicolás G. / Sofía M.', shiftAfternoon: 'Ezequiel D. / Agustina M.', shiftNight: 'Lucas Benítez' },
    { day: 'Domingo', shiftMorning: 'Joaquín C. / Micaela P.', shiftAfternoon: 'Braian R. / Florencia R.', shiftNight: 'Tadeo Garofalo (Refuerzo)' }
  ],

  // ---------------------------------------------------------------------------
  // USUARIOS DEL SISTEMA Y GESTIÓN DE ACCESOS
  // ---------------------------------------------------------------------------
  configActiveTab: 'usuarios', // 'usuarios' | 'general'
  users: [
    {
      id: 'USR-01',
      name: 'Dylan Banegas',
      username: 'admin.dylan',
      role: 'admin',
      roleLabel: 'Administrador Dueño',
      branchId: 'all',
      pin: '1984',
      lastLogin: 'Hoy 20:15',
      status: 'Activo'
    },
    {
      id: 'USR-02',
      name: 'Tadeo Garofalo',
      username: 'tadeo.belgrano',
      role: 'vendedor',
      roleLabel: 'Vendedor Turno Tarde',
      branchId: 'belgrano',
      pin: '4421',
      lastLogin: 'Hoy 18:30',
      status: 'Activo'
    },
    {
      id: 'USR-03',
      name: 'Florencia Rossi',
      username: 'flor.caja',
      role: 'vendedor',
      roleLabel: 'Cajera Turno Mañana',
      branchId: 'belgrano',
      pin: '1234',
      lastLogin: 'Ayer 22:45',
      status: 'Activo'
    },
    {
      id: 'USR-04',
      name: 'Camila Villalba',
      username: 'camila.sanmartin',
      role: 'encargado',
      roleLabel: 'Encargada de Sucursal',
      branchId: 'san_martin',
      pin: '8820',
      lastLogin: 'Hoy 19:40',
      status: 'Activo'
    },
    {
      id: 'USR-05',
      name: 'Ezequiel Duarte',
      username: 'eze.sanmartin',
      role: 'vendedor',
      roleLabel: 'Cajero / Mostrador',
      branchId: 'san_martin',
      pin: '5512',
      lastLogin: 'Hoy 16:10',
      status: 'Activo'
    },
    {
      id: 'USR-06',
      name: 'Sofía Martínez',
      username: 'sofi.lujan',
      role: 'vendedor',
      roleLabel: 'Cajero / Mostrador',
      branchId: 'lujan',
      pin: '9012',
      lastLogin: 'Hoy 14:20',
      status: 'Activo'
    },
    {
      id: 'USR-07',
      name: 'Braian Romero',
      username: 'braian.senzabello',
      role: 'vendedor',
      roleLabel: 'Cajero / Mostrador',
      branchId: 'senzabello',
      pin: '3141',
      lastLogin: 'Hoy 17:05',
      status: 'Activo'
    },
    {
      id: 'USR-08',
      name: 'Nicolás Giménez',
      username: 'nico.aristobulo',
      role: 'vendedor',
      roleLabel: 'Cajero / Mostrador',
      branchId: 'aristobulo',
      pin: '7721',
      lastLogin: '12/09/2026',
      status: 'Inactivo'
    }
  ],

  // ---------------------------------------------------------------------------
  // PARÁMETROS DE REPORTES Y CSV
  // ---------------------------------------------------------------------------
  reportsFilter: {
    dateFrom: '2026-09-01',
    dateTo: '2026-09-14',
    branchId: 'all',
    reportType: 'ventas' // 'ventas' | 'gastos' | 'inventario' | 'auditoria'
  },

  // ---------------------------------------------------------------------------
  // PARÁMETROS DE PRECIO GÓNDOLA
  // ---------------------------------------------------------------------------
  gondolaConfig: {
    priceType: 'minorista', // 'minorista' | 'mayorista' | 'promocion' | 'personalizado'
    customPercent: 10,
    category: 'all',
    tagSize: 'estandar', // 'estandar' | 'grande' | 'mini'
    showBarcode: true,
    showLogo: true
  }
};

// Aliases de compatibilidad para usuarios demo
UVA_STATE.users.admin = UVA_STATE.users[0];
UVA_STATE.users.vendedor = UVA_STATE.users[1];

// =============================================================================
// 2. CONTROLADOR DE ROLES, TEMA Y ENRUTADOR
// =============================================================================

function initApp() {
  const btnAdmin = document.getElementById('btnRoleAdmin');
  const btnVendedor = document.getElementById('btnRoleVendedor');
  const userNameLabel = document.getElementById('userNameLabel');
  const userRoleLabel = document.getElementById('userRoleLabel');

  btnAdmin.addEventListener('click', () => setRole('admin'));
  btnVendedor.addEventListener('click', () => setRole('vendedor'));

  function setRole(role) {
    UVA_STATE.currentRole = role;

    if (role === 'vendedor') {
      document.body.classList.add('role-vendedor');
      btnVendedor.className = "py-1 px-2 rounded-lg text-[10px] font-bold transition-all bg-white text-gray-950 shadow-sm";
      btnAdmin.className = "py-1 px-2 rounded-lg text-[10px] font-bold text-white/80 hover:text-white transition-all";
      userNameLabel.textContent = UVA_STATE.users.vendedor.name;
      userRoleLabel.textContent = UVA_STATE.users.vendedor.roleLabel;
      userRoleLabel.className = "text-[10px] font-black text-purple-200 truncate uppercase tracking-wider";

      const hash = window.location.hash.replace('#', '') || 'pos';
      if (!['pos', 'inventario', 'stock'].includes(hash)) {
        window.location.hash = '#pos';
      }
    } else {
      document.body.classList.remove('role-vendedor');
      btnAdmin.className = "py-1 px-2 rounded-lg text-[10px] font-bold transition-all bg-white text-gray-950 shadow-sm";
      btnVendedor.className = "py-1 px-2 rounded-lg text-[10px] font-bold text-white/80 hover:text-white transition-all";
      userNameLabel.textContent = UVA_STATE.users.admin.name;
      userRoleLabel.textContent = UVA_STATE.users.admin.roleLabel;
      userRoleLabel.className = "text-[10px] font-black text-amber-300 truncate uppercase tracking-wider";
    }

    renderCurrentRoute();
  }

  // Inicializar Tema Claro / Oscuro
  initTheme();
  const toggleThemeBtn = document.getElementById('toggleThemeBtn');
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', toggleTheme);
  }

  window.addEventListener('hashchange', renderCurrentRoute);
  renderCurrentRoute();
}

function initTheme() {
  const isDark = UVA_STATE.darkMode;
  applyTheme(isDark);
}

function toggleTheme() {
  UVA_STATE.darkMode = !document.documentElement.classList.contains('dark');
  applyTheme(UVA_STATE.darkMode);
  localStorage.setItem('uva_dark_mode', UVA_STATE.darkMode);
}

function applyTheme(isDark) {
  const btn = document.getElementById('toggleThemeBtn');
  if (isDark) {
    document.documentElement.classList.add('dark');
    if (btn) btn.innerHTML = '<i data-lucide="sun" class="w-4 h-4 text-amber-300"></i>';
  } else {
    document.documentElement.classList.remove('dark');
    if (btn) btn.innerHTML = '<i data-lucide="moon" class="w-4 h-4 text-white"></i>';
  }
  if (window.lucide) window.lucide.createIcons();
}

function destroyCharts() {
  Object.keys(UVA_STATE.chartInstances).forEach(k => {
    if (UVA_STATE.chartInstances[k]) {
      try { UVA_STATE.chartInstances[k].destroy(); } catch (e) {}
    }
  });
  UVA_STATE.chartInstances = {};
}

function renderCurrentRoute() {
  destroyCharts();
  const hash = window.location.hash.replace('#', '') || 'pos';
  const mainView = document.getElementById('appMainView');

  // Guard de rol para vendedor
  if (UVA_STATE.currentRole === 'vendedor' && !['pos', 'inventario', 'stock'].includes(hash)) {
    window.location.hash = '#pos';
    return;
  }

  // Actualizar sidebar activo
  document.querySelectorAll('.nav-link-item').forEach(link => {
    const nav = link.getAttribute('data-nav');
    if (nav === hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  switch (hash) {
    case 'dashboard':
      renderDashboardView(mainView);
      break;
    case 'pos':
      renderPosView(mainView);
      break;
    case 'inventario':
      renderInventoryView(mainView);
      break;
    case 'stock':
      renderStockView(mainView);
      break;
    case 'pedidos':
      renderOrdersView(mainView);
      break;
    case 'categorias':
      renderCategoriesView(mainView);
      break;
    case 'finanzas':
      renderFinanceView(mainView);
      break;
    case 'empleados':
      renderEmployeesView(mainView);
      break;
    case 'reportes':
      renderReportsView(mainView);
      break;
    case 'precio-gondola':
      renderGondolaView(mainView);
      break;
    case 'config':
      renderConfigView(mainView);
      break;
    default:
      renderPosView(mainView);
      break;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// =============================================================================
// 3. VISTA 1: DASHBOARD ERP (Con Chart.js 100% Interactivo y Dinámico)
// =============================================================================
function renderDashboardView(container) {
  const isAll = UVA_STATE.selectedBranch === 'all';
  const curBranch = isAll ? null : UVA_STATE.branches.find(b => b.id === UVA_STATE.selectedBranch);

  const titleText = isAll ? "Dashboard ERP · Red Kioscos UVA" : `Dashboard ERP · ${curBranch ? curBranch.shortName : 'Sucursal'}`;
  const subtitleText = isAll 
    ? "Consolidado Integral de las 8 Sucursales (Florencio Varela)" 
    : `${curBranch ? curBranch.name : 'Sucursal'} (${curBranch ? curBranch.address : ''})`;

  container.innerHTML = `
    <!-- Header del Dashboard con Selector de Sucursal -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2.5">
          <h1 class="text-3xl font-extrabold text-gray-900 font-display">${titleText}</h1>
          <span class="px-3 py-0.5 rounded-full text-xs font-bold ${isAll ? 'bg-purple-100 text-uva border border-purple-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}">
            ${isAll ? '🌐 Consolidado (8 Sucursales)' : '📍 ' + (curBranch ? curBranch.shortName : '')}
          </span>
        </div>
        <p class="text-xs font-semibold text-gray-400 mt-1">${subtitleText}</p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <!-- Selector Dropdown de Sucursal -->
        <div class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl border border-gray-200 shadow-2xs">
          <i data-lucide="store" class="w-4 h-4 text-uva shrink-0"></i>
          <label for="dashboardBranchSelect" class="text-xs font-bold text-gray-500 hidden sm:inline">Sucursal:</label>
          <select id="dashboardBranchSelect" class="text-xs font-extrabold text-gray-900 bg-transparent border-none outline-hidden cursor-pointer">
            <option value="all" ${isAll ? 'selected' : ''}>🌐 Todas las sucursales (Consolidado)</option>
            ${UVA_STATE.branches.map(b => `
              <option value="${b.id}" ${UVA_STATE.selectedBranch === b.id ? 'selected' : ''}>
                📍 ${b.shortName}
              </option>
            `).join('')}
          </select>
        </div>

        <!-- Modo % Porcentajes Toggle -->
        <button id="btnTogglePercentMode" class="px-3.5 py-2 rounded-2xl ${UVA_STATE.dashboardShowPercent ? 'bg-uva text-white border-uva shadow-xs' : 'bg-white border-gray-200 text-gray-700'} border text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer">
          <span>% % Modo %</span>
        </button>

        <!-- Segmented control Diario / Semanal / Mensual -->
        <div class="flex items-center bg-gray-100 p-1 rounded-2xl border border-gray-200/80 text-xs font-bold">
          <button id="btnPeriodDiario" class="px-3 py-1.5 rounded-xl transition-all ${UVA_STATE.dashboardPeriod === 'diario' ? 'bg-white text-gray-900 shadow-xs font-extrabold' : 'text-gray-500 hover:text-gray-900'}">Diario</button>
          <button id="btnPeriodSemanal" class="px-3 py-1.5 rounded-xl transition-all ${UVA_STATE.dashboardPeriod === 'semanal' ? 'bg-white text-gray-900 shadow-xs font-extrabold' : 'text-gray-500 hover:text-gray-900'}">Semanal</button>
          <button id="btnPeriodMensual" class="px-3 py-1.5 rounded-xl transition-all ${UVA_STATE.dashboardPeriod === 'mensual' ? 'bg-white text-gray-900 shadow-xs font-extrabold' : 'text-gray-500 hover:text-gray-900'}">Mensual</button>
        </div>

        <button class="px-3.5 py-2 rounded-2xl bg-white border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 flex items-center gap-2 shadow-2xs">
          <i data-lucide="calendar" class="w-3.5 h-3.5 text-gray-400"></i>
          <span>septiembre de 2026</span>
          <i data-lucide="chevron-down" class="w-3 h-3 text-gray-400"></i>
        </button>
      </div>
    </div>

    <!-- Barra de Píldoras de Selección Rápida de Sucursales -->
    <div class="bg-white p-2.5 rounded-3xl border border-gray-100 shadow-sm mb-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
      <button
        type="button"
        onclick="selectBranchFromDashboard('all')"
        class="px-4 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${isAll ? 'bg-uva text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}"
      >
        <i data-lucide="network" class="w-3.5 h-3.5"></i>
        <span>Todas las sucursales (8)</span>
      </button>
      ${UVA_STATE.branches.map(b => `
        <button
          type="button"
          onclick="selectBranchFromDashboard('${b.id}')"
          class="px-3.5 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${UVA_STATE.selectedBranch === b.id ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}"
        >
          <span class="w-2 h-2 rounded-full" style="background-color: ${b.color};"></span>
          <span>${b.shortName}</span>
        </button>
      `).join('')}
    </div>

    <!-- 5 Tarjetas de Estadísticas (KPIs Superiores) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8" id="dashboardKpisRow">
      <!-- Inyectado dinámicamente -->
    </div>

    <!-- =======================================================================
         GRÁFICO ESPECIAL: SUCURSALES CON MÁS MOVIMIENTOS
         (Se agrega SOLO cuando el admin elige ver todas las sucursales juntas)
         ======================================================================= -->
    ${isAll ? `
      <div class="mb-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm animate-scale-in">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
          <div>
            <div class="flex items-center gap-2">
              <span class="p-1.5 rounded-xl bg-purple-50 text-uva"><i data-lucide="bar-chart-3" class="w-5 h-5"></i></span>
              <h3 class="text-base font-bold text-gray-900 font-display">Sucursales con Más Movimientos</h3>
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-uva bg-uva/10 px-2.5 py-0.5 rounded-full border border-uva/20">Consolidado 8 Sucursales</span>
            </div>
            <p class="text-xs text-gray-400 font-semibold mt-0.5">Ranking comparativo de operaciones, tickets y volumen de ventas en Florencio Varela</p>
          </div>

          <div class="flex items-center gap-2">
            <!-- Toggle Movimientos vs Facturación -->
            <div class="flex items-center bg-gray-100 p-1 rounded-2xl border border-gray-200 text-xs font-bold">
              <button id="btnRankMovimientos" class="px-3 py-1.5 rounded-xl transition-all ${UVA_STATE.branchRankMode === 'movimientos' ? 'bg-white text-gray-900 shadow-xs font-extrabold' : 'text-gray-500 hover:text-gray-900'}">
                Tickets / Movs
              </button>
              <button id="btnRankFacturacion" class="px-3 py-1.5 rounded-xl transition-all ${UVA_STATE.branchRankMode === 'facturacion' ? 'bg-white text-gray-900 shadow-xs font-extrabold' : 'text-gray-500 hover:text-gray-900'}">
                Facturación ($)
              </button>
            </div>

            <!-- Tipo de Gráfico -->
            <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
              <button onclick="switchChartType('branchRankings', 'bar')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Barras"><i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i></button>
              <button onclick="switchChartType('branchRankings', 'doughnut')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Dona"><i data-lucide="pie-chart" class="w-3.5 h-3.5"></i></button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Canvas del gráfico -->
          <div class="lg:col-span-8 relative h-72 w-full">
            <canvas id="canvasBranchRankings"></canvas>
          </div>

          <!-- Podio / Resumen de las 8 Sucursales -->
          <div class="lg:col-span-4 bg-gray-50/80 p-4 rounded-2xl border border-gray-200/60 space-y-2">
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-extrabold uppercase tracking-wider text-gray-500">Ranking de Sucursales</span>
              <span class="text-[10px] text-uva font-bold">Septiembre 2026</span>
            </div>
            <div id="branchRankingPodiumList" class="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              <!-- Inyectado dinámicamente -->
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    <!-- 4 Gráficos Interactivos en Grilla 2x2 con Chart.js -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <!-- Gráfico 1: Ventas del Período -->
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-bold text-gray-900 font-display">Ventas del Período</h3>
            <p class="text-[10px] text-gray-400 font-semibold" id="labelPeriodSubtitle">
              ${isAll ? 'Toda la red' : curBranch ? curBranch.shortName : ''} · ${UVA_STATE.dashboardPeriod === 'diario' ? 'Hoy' : UVA_STATE.dashboardPeriod === 'semanal' ? 'Esta semana' : 'Este mes'}
            </p>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button onclick="switchChartType('salesPeriod', 'bar')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Barras"><i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i></button>
            <button onclick="switchChartType('salesPeriod', 'line')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Líneas"><i data-lucide="activity" class="w-3.5 h-3.5"></i></button>
            <button onclick="switchChartType('salesPeriod', 'doughnut')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Dona"><i data-lucide="pie-chart" class="w-3.5 h-3.5"></i></button>
          </div>
        </div>

        <div class="relative h-64 w-full">
          <canvas id="canvasSalesPeriod"></canvas>
        </div>
      </div>

      <!-- Gráfico 2: Ingresos vs Egresos -->
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-bold text-gray-900 font-display">Ingresos vs Egresos</h3>
            <p class="text-[10px] text-gray-400 font-semibold">Comparativa operativa</p>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button onclick="switchChartType('incomeExpense', 'bar')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Barras"><i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i></button>
            <button onclick="switchChartType('incomeExpense', 'line')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Líneas"><i data-lucide="activity" class="w-3.5 h-3.5"></i></button>
          </div>
        </div>

        <div class="relative h-64 w-full">
          <canvas id="canvasIncomeExpense"></canvas>
        </div>
      </div>

      <!-- Gráfico 3: Top 10 Productos Más Vendidos -->
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-bold text-gray-900 font-display">Top 10 Productos Más Vendidos</h3>
            <p class="text-[10px] text-gray-400 font-semibold">Por unidades totales</p>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button onclick="switchChartType('topProducts', 'bar')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Barras"><i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i></button>
            <button onclick="switchChartType('topProducts', 'pie')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Torta"><i data-lucide="pie-chart" class="w-3.5 h-3.5"></i></button>
          </div>
        </div>

        <div class="relative h-64 w-full">
          <canvas id="canvasTopProducts"></canvas>
        </div>
      </div>

      <!-- Gráfico 4: Balance Neto -->
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-bold text-gray-900 font-display">Balance Neto</h3>
            <p class="text-[10px] text-gray-400 font-semibold">Ganancia Neta Real (Ganancia Ventas - Egresos)</p>
          </div>
          <div class="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button onclick="switchChartType('netBalance', 'line')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Líneas"><i data-lucide="activity" class="w-3.5 h-3.5"></i></button>
            <button onclick="switchChartType('netBalance', 'bar')" class="p-1 hover:bg-white rounded-lg text-gray-600 transition-all" title="Barras"><i data-lucide="bar-chart-2" class="w-3.5 h-3.5"></i></button>
          </div>
        </div>

        <div class="relative h-64 w-full">
          <canvas id="canvasNetBalance"></canvas>
        </div>
      </div>

    </div>
  `;

  // Dropdown selector listener
  const branchSelect = document.getElementById('dashboardBranchSelect');
  if (branchSelect) {
    branchSelect.onchange = (e) => {
      selectBranchFromDashboard(e.target.value);
    };
  }

  if (isAll) {
    const btnMovs = document.getElementById('btnRankMovimientos');
    const btnFact = document.getElementById('btnRankFacturacion');
    if (btnMovs && btnFact) {
      btnMovs.onclick = () => {
        UVA_STATE.branchRankMode = 'movimientos';
        renderDashboardView(container);
      };
      btnFact.onclick = () => {
        UVA_STATE.branchRankMode = 'facturacion';
        renderDashboardView(container);
      };
    }
  }

  // Listeners de los filtros de período
  document.getElementById('btnPeriodDiario').onclick = () => {
    UVA_STATE.dashboardPeriod = 'diario';
    renderDashboardView(container);
  };
  document.getElementById('btnPeriodSemanal').onclick = () => {
    UVA_STATE.dashboardPeriod = 'semanal';
    renderDashboardView(container);
  };
  document.getElementById('btnPeriodMensual').onclick = () => {
    UVA_STATE.dashboardPeriod = 'mensual';
    renderDashboardView(container);
  };
  document.getElementById('btnTogglePercentMode').onclick = () => {
    UVA_STATE.dashboardShowPercent = !UVA_STATE.dashboardShowPercent;
    renderDashboardView(container);
  };

  updateDashboardKpis();
  buildDashboardCharts();
  if (isAll) {
    renderBranchRankingPodiumList();
  }
}

function selectBranchFromDashboard(branchId) {
  UVA_STATE.selectedBranch = branchId;
  updateSidebarBranchBadge();
  const mainView = document.getElementById('appMainView');
  if (mainView && window.location.hash.includes('dashboard')) {
    renderDashboardView(mainView);
  }
}

function updateSidebarBranchBadge() {
  const badgeTitle = document.getElementById('sidebarBranchName');
  const badgeSub = document.getElementById('sidebarBranchSub');
  if (!badgeTitle || !badgeSub) return;

  if (UVA_STATE.selectedBranch === 'all') {
    badgeTitle.textContent = "Red UVA (8 Sucursales)";
    badgeSub.textContent = "Consolidado Florencio Varela";
  } else {
    const b = UVA_STATE.branches.find(x => x.id === UVA_STATE.selectedBranch);
    if (b) {
      badgeTitle.textContent = b.shortName;
      badgeSub.textContent = b.address.split(',')[0] + " · Abierto";
    }
  }
}

function renderBranchRankingPodiumList() {
  const container = document.getElementById('branchRankingPodiumList');
  if (!container) return;

  const mode = UVA_STATE.branchRankMode;
  const sorted = [...UVA_STATE.branches].sort((a, b) => {
    return mode === 'movimientos' ? b.movements - a.movements : b.revenue - a.revenue;
  });

  const medals = ['🥇', '🥈', '🥉', '4°', '5°', '6°', '7°', '8°'];

  container.innerHTML = sorted.map((b, idx) => {
    const valStr = mode === 'movimientos' 
      ? `${b.movements} movs` 
      : `$ ${(b.revenue / 1000000).toFixed(1)}M`;

    return `
      <div
        class="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 hover:border-uva/30 hover:shadow-xs transition-all cursor-pointer group"
        onclick="selectBranchFromDashboard('${b.id}')"
        title="Ver reportes exclusivos de ${b.name}"
      >
        <div class="flex items-center gap-2 overflow-hidden">
          <span class="text-xs font-black shrink-0">${medals[idx]}</span>
          <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${b.color};"></span>
          <span class="text-xs font-bold text-gray-800 truncate group-hover:text-uva">${b.shortName}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <span class="text-[11px] font-extrabold font-mono text-gray-900 bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-100">
            ${valStr}
          </span>
          <i data-lucide="chevron-right" class="w-3 h-3 text-gray-300 group-hover:text-uva"></i>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function updateDashboardKpis() {
  const row = document.getElementById('dashboardKpisRow');
  if (!row) return;

  const p = UVA_STATE.dashboardPeriod;
  const isAll = UVA_STATE.selectedBranch === 'all';
  const curBranch = isAll ? null : UVA_STATE.branches.find(b => b.id === UVA_STATE.selectedBranch);

  let revenue = 0;
  let cost = 0;
  let profit = 0;
  let orders = 0;

  if (isAll) {
    if (p === 'diario') {
      revenue = UVA_STATE.branches.reduce((acc, b) => acc + b.dailyRev, 0);
      cost = UVA_STATE.branches.reduce((acc, b) => acc + b.dailyCost, 0);
      profit = revenue - cost;
      orders = Math.round(UVA_STATE.branches.reduce((acc, b) => acc + (b.movements / 12), 0));
    } else if (p === 'semanal') {
      revenue = UVA_STATE.branches.reduce((acc, b) => acc + b.weeklyRev, 0);
      cost = UVA_STATE.branches.reduce((acc, b) => acc + b.weeklyCost, 0);
      profit = revenue - cost;
      orders = Math.round(UVA_STATE.branches.reduce((acc, b) => acc + (b.movements / 3.3), 0));
    } else {
      revenue = UVA_STATE.branches.reduce((acc, b) => acc + b.revenue, 0);
      cost = UVA_STATE.branches.reduce((acc, b) => acc + b.cost, 0);
      profit = revenue - cost;
      orders = UVA_STATE.branches.reduce((acc, b) => acc + b.movements, 0);
    }
  } else if (curBranch) {
    if (p === 'diario') {
      revenue = curBranch.dailyRev;
      cost = curBranch.dailyCost;
      profit = revenue - cost;
      orders = Math.round(curBranch.movements / 12);
    } else if (p === 'semanal') {
      revenue = curBranch.weeklyRev;
      cost = curBranch.weeklyCost;
      profit = revenue - cost;
      orders = Math.round(curBranch.movements / 3.3);
    } else {
      revenue = curBranch.revenue;
      cost = curBranch.cost;
      profit = curBranch.profit;
      orders = curBranch.movements;
    }
  }

  const isPercent = UVA_STATE.dashboardShowPercent;
  const marginPct = cost > 0 ? ((profit / cost) * 100).toFixed(1) : 0;
  const scopeLabel = isAll ? '8 Sucursales UVA' : (curBranch ? curBranch.shortName : '');

  row.innerHTML = `
    <!-- Card 1 -->
    <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-bold text-gray-500">Ventas (Ingresos)</span>
        <span class="p-1.5 rounded-xl bg-emerald-50 text-emerald-600"><i data-lucide="trending-up" class="w-4 h-4"></i></span>
      </div>
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display tracking-tight">
          ${isPercent ? '+100%' : '$ ' + revenue.toLocaleString('es-AR')}
        </h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-1">${p === 'diario' ? 'Hoy' : p === 'semanal' ? 'Esta semana' : 'Este mes'} · ${scopeLabel}</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-bold text-gray-500">Costo de Ventas</span>
        <span class="p-1.5 rounded-xl bg-amber-50 text-amber-600"><i data-lucide="trending-down" class="w-4 h-4"></i></span>
      </div>
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display tracking-tight">
          ${isPercent ? '-66.6%' : '$ ' + cost.toLocaleString('es-AR')}
        </h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-1">Costo de reposición</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-bold text-gray-500">Egresos</span>
        <span class="p-1.5 rounded-xl bg-rose-50 text-rose-600"><i data-lucide="trending-down" class="w-4 h-4"></i></span>
      </div>
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display tracking-tight">$ 0</h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-1">Sin egresos extraordinarios</p>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-bold text-gray-500">Ganancia Neta</span>
        <span class="p-1.5 rounded-xl bg-blue-50 text-blue-600"><i data-lucide="dollar-sign" class="w-4 h-4"></i></span>
      </div>
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display tracking-tight">
          ${isPercent ? `+${marginPct}%` : '$ ' + profit.toLocaleString('es-AR')}
        </h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-1">Margen neto: ${marginPct}%</p>
      </div>
    </div>

    <!-- Card 5 -->
    <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs font-bold text-gray-500">Total Operaciones</span>
        <span class="p-1.5 rounded-xl bg-purple-50 text-purple-600"><i data-lucide="shopping-cart" class="w-4 h-4"></i></span>
      </div>
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display tracking-tight">${orders.toLocaleString('es-AR')}</h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-1">${orders} tickets registrados</p>
      </div>
    </div>
  `;
}

function buildDashboardCharts() {
  if (typeof Chart === 'undefined') return;

  const p = UVA_STATE.dashboardPeriod;
  const isAll = UVA_STATE.selectedBranch === 'all';
  const curBranch = isAll ? null : UVA_STATE.branches.find(b => b.id === UVA_STATE.selectedBranch);

  // Factor de escala de datos según sucursal elegida
  const factor = isAll ? 6.435 : (curBranch ? (curBranch.revenue / 10469081) : 1);

  let labels1 = ['1/9', '2/9', '3/9', '4/9', '5/9', '7/9', '8/9', '9/9', '10/9', '11/9', '12/9', '14/9'];
  let dataSales = [350000, 1450000, 380000, 480000, 1750000, 1680000, 720000, 700000, 520000, 680000, 120000];
  let dataIncome = [350000, 1450000, 380000, 480000, 1750000, 520000, 1680000, 720000, 700000, 520000, 680000];
  let dataExpense = [120000, 300000, 80000, 100000, 400000, 150000, 380000, 190000, 140000, 110000, 160000];

  if (p === 'diario') {
    labels1 = ['08h', '10h', '12h', '14h', '16h', '17h', '18h', '19h', '20h', '21h', '22h'];
    dataSales = [25000, 42000, 68000, 45000, 52000, 74000, 95000, 88000, 56000, 34000, 18000];
    dataIncome = [...dataSales];
    dataExpense = dataSales.map(v => Math.round(v * 0.45));
  } else if (p === 'semanal') {
    labels1 = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    dataSales = [320000, 380000, 410000, 490000, 620000, 780000, 450000];
    dataIncome = [...dataSales];
    dataExpense = dataSales.map(v => Math.round(v * 0.48));
  }

  // Escalar valores
  dataSales = dataSales.map(v => Math.round(v * factor));
  dataIncome = dataIncome.map(v => Math.round(v * factor));
  dataExpense = dataExpense.map(v => Math.round(v * factor));

  // ===========================================================================
  // GRÁFICO 5: SUCURSALES CON MÁS MOVIMIENTOS (Solo presente en 'all')
  // ===========================================================================
  const ctx5 = document.getElementById('canvasBranchRankings')?.getContext('2d');
  if (ctx5 && isAll) {
    const isMovs = UVA_STATE.branchRankMode === 'movimientos';
    const sortedBranches = [...UVA_STATE.branches].sort((a, b) => {
      return isMovs ? b.movements - a.movements : b.revenue - a.revenue;
    });

    const labels5 = sortedBranches.map(b => b.shortName);
    const data5 = sortedBranches.map(b => isMovs ? b.movements : b.revenue);
    const colors5 = sortedBranches.map(b => b.color);

    UVA_STATE.chartInstances.branchRankings = new Chart(ctx5, {
      type: 'bar',
      data: {
        labels: labels5,
        datasets: [{
          label: isMovs ? 'Tickets / Movimientos' : 'Facturación Total ($)',
          data: data5,
          backgroundColor: colors5,
          borderRadius: 8,
          barThickness: 20
        }]
      },
      options: {
        indexAxis: 'y', // Barra horizontal limpia
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (c) => isMovs 
                ? `${c.parsed.x} movimientos registrados` 
                : `$ ${c.parsed.x.toLocaleString('es-AR')}`
            }
          }
        },
        scales: {
          x: { 
            grid: { color: '#F1F5F9' },
            ticks: {
              callback: v => isMovs ? v : '$ ' + (v >= 1000000 ? (v/1000000).toFixed(1) + 'M' : (v/1000) + 'k')
            }
          },
          y: { 
            grid: { display: false },
            ticks: { font: { size: 11, weight: 'bold' } }
          }
        }
      }
    });
  }

  // Gráfico 1: Ventas del Período
  const ctx1 = document.getElementById('canvasSalesPeriod')?.getContext('2d');
  if (ctx1) {
    UVA_STATE.chartInstances.salesPeriod = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: labels1,
        datasets: [{
          label: 'Monto Venta ($)',
          data: dataSales,
          backgroundColor: '#2563EB',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (c) => `$ ${c.parsed.y ? c.parsed.y.toLocaleString('es-AR') : c.parsed.toLocaleString('es-AR')}`
            }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: '#F1F5F9' }, ticks: { callback: v => '$ ' + (v >= 1000 ? (v/1000) + 'k' : v) } }
        }
      }
    });
  }

  // Gráfico 2: Ingresos vs Egresos
  const ctx2 = document.getElementById('canvasIncomeExpense')?.getContext('2d');
  if (ctx2) {
    UVA_STATE.chartInstances.incomeExpense = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: labels1,
        datasets: [
          {
            label: 'Ingresos',
            data: dataIncome,
            backgroundColor: '#10B981',
            borderRadius: 6
          },
          {
            label: 'Egresos',
            data: dataExpense,
            backgroundColor: '#EF4444',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 10, weight: 'bold' } } }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: '#F1F5F9' } }
        }
      }
    });
  }

  // Gráfico 3: Top 10 Productos
  const ctx3 = document.getElementById('canvasTopProducts')?.getContext('2d');
  if (ctx3) {
    const topLabels = ['Pancho', 'Coca 500', 'Marlboro', 'Lays 85g', 'Guaymallén', 'Gomitas', 'Monster', 'Pepsi', 'Oreo', 'Milka'];
    const baseValues = [65, 58, 45, 38, 32, 28, 25, 22, 19, 15];
    const topValues = baseValues.map(v => Math.round(v * factor));

    UVA_STATE.chartInstances.topProducts = new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: topLabels,
        datasets: [{
          label: 'Unidades Vendidas',
          data: topValues,
          backgroundColor: '#8B5CF6',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: (c) => `${c.parsed.y} unidades` }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 9, weight: 'bold' } } },
          y: { grid: { color: '#F1F5F9' } }
        }
      }
    });
  }

  // Gráfico 4: Balance Neto
  const ctx4 = document.getElementById('canvasNetBalance')?.getContext('2d');
  if (ctx4) {
    UVA_STATE.chartInstances.netBalance = new Chart(ctx4, {
      type: 'line',
      data: {
        labels: labels1,
        datasets: [
          {
            label: 'Ganancia Neta ($)',
            data: dataIncome.map((v, i) => v - (dataExpense[i] || 0)),
            borderColor: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            fill: true,
            tension: 0.4,
            borderWidth: 2.5
          },
          {
            label: 'Costos ($)',
            data: dataExpense,
            borderColor: '#F59E0B',
            backgroundColor: 'transparent',
            tension: 0.4,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { font: { size: 10, weight: 'bold' } } }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: '#F1F5F9' } }
        }
      }
    });
  }
}

window.switchChartType = function(chartKey, newType) {
  const chart = UVA_STATE.chartInstances[chartKey];
  if (!chart) return;

  const cfg = chart.config;
  chart.destroy();

  const canvasId = chartKey === 'salesPeriod' ? 'canvasSalesPeriod'
    : chartKey === 'incomeExpense' ? 'canvasIncomeExpense'
    : chartKey === 'topProducts' ? 'canvasTopProducts'
    : chartKey === 'branchRankings' ? 'canvasBranchRankings'
    : 'canvasNetBalance';

  const ctx = document.getElementById(canvasId)?.getContext('2d');
  if (!ctx) return;

  cfg.type = newType;
  cfg.options = cfg.options || {};
  cfg.options.plugins = cfg.options.plugins || {};

  const vibrantColors = [
    '#6B3B82', '#3B82F6', '#10B981', '#F59E0B', '#EF4444',
    '#8B5CF6', '#EC4899', '#06B6D4', '#F97316', '#14B8A6',
    '#6366F1', '#84CC16'
  ];

  if (newType === 'doughnut' || newType === 'pie') {
    cfg.options.indexAxis = 'x';
    cfg.options.scales = {
      x: { display: false },
      y: { display: false }
    };
    cfg.options.plugins.legend = {
      display: true,
      position: 'right',
      labels: { font: { size: 9, weight: 'bold' }, boxWidth: 10, padding: 6 }
    };
    if (cfg.data && cfg.data.datasets && cfg.data.datasets[0]) {
      cfg.data.datasets[0].backgroundColor = vibrantColors.slice(0, cfg.data.labels.length);
      cfg.data.datasets[0].borderWidth = 2;
      cfg.data.datasets[0].borderColor = '#FFFFFF';
    }
  } else {
    // Restaurar escalas cartesianas
    if (chartKey === 'salesPeriod') {
      cfg.options.indexAxis = 'x';
      cfg.options.scales = {
        x: { display: true, grid: { display: false } },
        y: { display: true, grid: { color: '#F1F5F9' }, ticks: { callback: v => '$ ' + (v >= 1000 ? (v/1000) + 'k' : v) } }
      };
      cfg.options.plugins.legend = { display: false };
      if (cfg.data && cfg.data.datasets && cfg.data.datasets[0]) {
        cfg.data.datasets[0].backgroundColor = '#2563EB';
        cfg.data.datasets[0].borderColor = '#2563EB';
        cfg.data.datasets[0].borderWidth = 1;
      }
    } else if (chartKey === 'topProducts') {
      cfg.options.indexAxis = 'x';
      cfg.options.scales = {
        x: { display: true, grid: { display: false }, ticks: { font: { size: 9, weight: 'bold' } } },
        y: { display: true, grid: { color: '#F1F5F9' } }
      };
      cfg.options.plugins.legend = { display: false };
      if (cfg.data && cfg.data.datasets && cfg.data.datasets[0]) {
        cfg.data.datasets[0].backgroundColor = '#8B5CF6';
        cfg.data.datasets[0].borderColor = '#8B5CF6';
        cfg.data.datasets[0].borderWidth = 1;
      }
    } else if (chartKey === 'branchRankings') {
      cfg.options.indexAxis = 'y';
      cfg.options.scales = {
        x: { 
          display: true,
          grid: { color: '#F1F5F9' },
          ticks: {
            callback: v => UVA_STATE.branchRankMode === 'movimientos' ? v : '$ ' + (v >= 1000000 ? (v/1000000).toFixed(1) + 'M' : (v/1000) + 'k')
          }
        },
        y: { 
          display: true,
          grid: { display: false },
          ticks: { font: { size: 11, weight: 'bold' } }
        }
      };
      cfg.options.plugins.legend = { display: false };
      if (cfg.data && cfg.data.datasets && cfg.data.datasets[0]) {
        const sorted = [...UVA_STATE.branches].sort((a, b) => {
          return UVA_STATE.branchRankMode === 'movimientos' ? b.movements - a.movements : b.revenue - a.revenue;
        });
        cfg.data.datasets[0].backgroundColor = sorted.map(b => b.color);
      }
    } else {
      cfg.options.indexAxis = 'x';
      cfg.options.scales = {
        x: { display: true, grid: { display: false } },
        y: { display: true, grid: { color: '#F1F5F9' } }
      };
    }
  }

  UVA_STATE.chartInstances[chartKey] = new Chart(ctx, cfg);
};

// =============================================================================
// 4. VISTA 2: PUNTO DE VENTA (POS) (Con FOTOGRAFÍAS REALES en las tarjetas)
// =============================================================================

let posFilterTerm = '';

function renderPosView(container) {
  const sellerName = UVA_STATE.currentRole === 'admin' ? 'Kioscos UVA Admin (Dueño)' : 'Lucía Benítez (Vendedora)';

  container.innerHTML = `
    <!-- Cabecera del POS -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 font-display">Punto de Venta (POS)</h1>
        <p class="text-xs font-semibold text-gray-400 mt-0.5">Carga de ventas presenciales con control de stock integrado</p>
      </div>

      <div class="flex items-center gap-3">
        <!-- Botón Escanear Código de Barra -->
        <button id="btnOpenBarcodeModal" onclick="openBarcodeScannerModal()" class="px-3.5 py-2 rounded-2xl bg-uva hover:bg-uva-dark text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer">
          <i data-lucide="scan-barcode" class="w-4 h-4"></i>
          <span>Escanear Código</span>
        </button>

        <div class="px-3.5 py-2 rounded-2xl bg-white border border-gray-200 text-xs font-bold text-gray-700 flex items-center gap-2 shadow-2xs">
          <i data-lucide="user" class="w-3.5 h-3.5 text-blue-600"></i>
          <span>Vendedor: <strong class="text-gray-900">${sellerName}</strong></span>
        </div>
      </div>
    </div>

    <!-- Barra de Búsqueda Grande Redondeada con Botón de Escáner -->
    <div class="mb-6 relative flex items-center">
      <div class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center text-gray-400">
        <i data-lucide="search" class="w-5 h-5"></i>
      </div>
      <input
        type="text"
        id="posSearchInput"
        placeholder="Buscar producto por nombre, marca o escanear código de barras (ej. 7790895000445)..."
        value="${posFilterTerm}"
        class="w-full pl-12 pr-40 py-3.5 rounded-2xl bg-white border border-gray-200 text-sm font-medium text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-uva focus:ring-4 focus:ring-uva/10 shadow-sm transition-all"
        autofocus
      />
      <div class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <button
          type="button"
          onclick="openBarcodeScannerModal()"
          class="px-3.5 py-2 rounded-xl bg-uva/10 hover:bg-uva/20 text-uva border border-uva/20 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
          title="Abrir visor de escáner de código de barras"
        >
          <i data-lucide="scan-line" class="w-4 h-4"></i>
          <span class="hidden sm:inline">Lector Barcode</span>
        </button>
      </div>
    </div>

    <!-- Contenedor Principal en 12 Columnas -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      <!-- 7 Columnas Izquierda: Grilla de Tarjetas de Productos CON FOTOS -->
      <div class="lg:col-span-7">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="posCardsGrid">
          <!-- Inyectado dinámicamente -->
        </div>
      </div>

      <!-- 5 Columnas Derecha: Resumen de Venta / Carrito -->
      <div class="lg:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between space-y-5 sticky top-6" id="posCartPanel">
        <!-- Inyectado dinámicamente -->
      </div>

    </div>

    <!-- Mis Ventas del Día (Tabla Inferior) -->
    <div class="mt-12 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-100">
        <h3 class="text-base font-bold text-gray-900 font-display">Mis Ventas del Día</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="admin-table">
          <thead>
            <tr>
              <th>N° ORDEN</th>
              <th>HORA</th>
              <th>CLIENTE</th>
              <th>MÉTODO</th>
              <th>TOTAL</th>
              <th class="text-right">ESTADO</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 text-xs font-semibold text-gray-700">
            ${UVA_STATE.sales.map(s => `
              <tr class="hover:bg-gray-50">
                <td class="font-bold text-gray-900">${s.orderId}</td>
                <td class="text-gray-400">${s.time}</td>
                <td>${s.client}</td>
                <td><span class="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full text-[10px] font-bold">${s.method}</span></td>
                <td class="font-bold text-gray-900 font-display text-sm">$ ${s.total.toLocaleString('es-AR')}</td>
                <td class="text-right">
                  <span class="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-[10px] font-bold">
                    ✓ Registrada
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Evento de Búsqueda y Escáner con Tecla Enter
  const searchInput = document.getElementById('posSearchInput');
  searchInput.addEventListener('input', (e) => {
    posFilterTerm = e.target.value.toLowerCase().trim();
    renderPosProducts();
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const code = searchInput.value.trim();
      if (code) {
        const found = scanProductBarcode(code);
        if (found) {
          searchInput.value = '';
          posFilterTerm = '';
          renderPosProducts();
        }
      }
    }
  });

  renderPosProducts();
  renderPosCart();
}

function renderPosProducts() {
  const grid = document.getElementById('posCardsGrid');
  if (!grid) return;

  const filtered = UVA_STATE.products.filter(p => {
    if (!posFilterTerm) return true;
    return p.name.toLowerCase().includes(posFilterTerm) || 
           p.brand.toLowerCase().includes(posFilterTerm) ||
           (p.barcode && p.barcode.includes(posFilterTerm)) ||
           p.id.toLowerCase().includes(posFilterTerm);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-3 text-center py-12 text-gray-400 text-xs">
        No se encontraron productos para "${posFilterTerm}".
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const currentPrice = p.price;
    const isLow = p.stock <= p.minStock;

    return `
      <div class="pos-prod-card bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between cursor-pointer" onclick="handleAddToCart('${p.id}')">
        <div>
          <!-- Contenedor con FOTO REAL (no emoji) -->
          <div class="w-full h-32 bg-gray-50 rounded-xl mb-3 overflow-hidden relative border border-gray-100">
            <img
              src="${p.image}"
              alt="${p.name}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform"
              loading="lazy"
              onError="this.src='https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&q=80'"
            />
          </div>

          <div class="flex items-center justify-between mt-1">
            <p class="text-[9px] font-black uppercase tracking-wider text-gray-400">${p.brand}</p>
            <span class="text-[9px] font-mono font-bold text-gray-400 flex items-center gap-0.5" title="Código de barra">
              <i data-lucide="barcode" class="w-3 h-3"></i> ${p.barcode}
            </span>
          </div>
          <h4 class="text-xs font-bold text-gray-900 line-clamp-2 mt-0.5 leading-snug">${p.name}</h4>
        </div>

        <div class="flex items-center justify-between mt-3 pt-2 border-t border-gray-50">
          <div>
            <span class="text-sm font-extrabold text-gray-900 font-display">$ ${currentPrice.toLocaleString('es-AR')}</span>
          </div>

          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${isLow ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-emerald-50 text-emerald-700'}">
            Stock: ${p.stock}
          </span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// =============================================================================
// FUNCIONES DE ESCÁNER DE CÓDIGO DE BARRAS & PISTOLA LECTORA
// =============================================================================

window.playPosBeep = function(isSuccess = true) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (isSuccess) {
      // Beep agudo limpio de pistola lectora de caja (1760 Hz, 80 ms)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1760, ctx.currentTime);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } else {
      // Tono de error grave
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
    }
  } catch (e) {
    // Si el navegador bloquea audio antes de clic, se ignora silenciosamente
  }
};

window.showPosScanToast = function(title, subtitle, isSuccess = true) {
  const toast = document.getElementById('posScanToast');
  if (!toast) return;

  document.getElementById('posScanToastTitle').textContent = title;
  document.getElementById('posScanToastSubtitle').textContent = subtitle;

  const iconContainer = toast.querySelector('div');
  if (iconContainer) {
    if (isSuccess) {
      iconContainer.className = 'w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0';
      iconContainer.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
    } else {
      iconContainer.className = 'w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0';
      iconContainer.innerHTML = '<i data-lucide="alert-circle" class="w-4 h-4"></i>';
    }
  }

  if (window.lucide) window.lucide.createIcons();

  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3200);
};

window.scanProductBarcode = function(code) {
  if (!code) return false;
  const cleanCode = code.trim().toLowerCase();

  // Buscar por barcode exacto, id o nombre
  const product = UVA_STATE.products.find(p => 
    (p.barcode && p.barcode.toLowerCase() === cleanCode) ||
    p.id.toLowerCase() === cleanCode ||
    (cleanCode.length >= 4 && p.barcode && p.barcode.toLowerCase().includes(cleanCode)) ||
    p.name.toLowerCase().includes(cleanCode)
  );

  if (!product) {
    playPosBeep(false);
    showPosScanToast("Código no encontrado", `No se halló producto para: ${code}`, false);
    return false;
  }

  // Éxito: reproducir beep
  playPosBeep(true);

  // Agregar al carrito
  handleAddToCart(product.id);

  // Toast flotante
  const price = product.price;
  showPosScanToast(
    `⚡ Escaneado: ${product.name}`,
    `EAN: ${product.barcode} · $ ${price.toLocaleString('es-AR')}`,
    true
  );

  // Feedback en el modal si está abierto
  const feedbackBox = document.getElementById('barcodeLastScanBox');
  if (feedbackBox) {
    feedbackBox.classList.remove('hidden');
    document.getElementById('barcodeLastScanImg').src = product.image;
    document.getElementById('barcodeLastScanName').textContent = product.name;
    document.getElementById('barcodeLastScanDetails').textContent = `EAN: ${product.barcode} · $ ${price.toLocaleString('es-AR')} · Stock: ${product.stock}`;
  }

  return true;
};

window.openBarcodeScannerModal = function() {
  const modal = document.getElementById('barcodeModalBackdrop');
  if (!modal) return;
  modal.classList.remove('hidden');

  renderBarcodeQuickTests();

  const input = document.getElementById('barcodeModalInput');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 100);
  }
  if (window.lucide) window.lucide.createIcons();
};

window.closeBarcodeScannerModal = function() {
  const modal = document.getElementById('barcodeModalBackdrop');
  if (modal) modal.classList.add('hidden');
};

window.handleBarcodeFormSubmit = function(e) {
  e.preventDefault();
  const input = document.getElementById('barcodeModalInput');
  if (!input) return;
  const code = input.value.trim();
  if (!code) return;
  scanProductBarcode(code);
  input.value = '';
  input.focus();
};

window.renderBarcodeQuickTests = function() {
  const grid = document.getElementById('barcodeQuickTestGrid');
  if (!grid) return;

  const samples = [
    { name: "Super Pancho", code: "7798123450012", icon: "🌭" },
    { name: "Coca 500ml", code: "7790895000445", icon: "🥤" },
    { name: "Papas Lays", code: "7790123456789", icon: "🥔" },
    { name: "Marlboro 20", code: "7791234000123", icon: "🚬" },
    { name: "Gomitas Mogul", code: "7790580123456", icon: "🍬" },
    { name: "Monster Energy", code: "7084701234567", icon: "⚡" }
  ];

  grid.innerHTML = samples.map(s => `
    <button
      type="button"
      onclick="scanProductBarcode('${s.code}')"
      class="p-2 rounded-xl bg-gray-50 hover:bg-uva/10 hover:border-uva/30 border border-gray-200/80 text-left transition-all cursor-pointer group"
      title="Disparar pistola sobre este código"
    >
      <div class="flex items-center gap-1.5 mb-0.5">
        <span class="text-xs">${s.icon}</span>
        <span class="text-[11px] font-bold text-gray-800 group-hover:text-uva truncate">${s.name}</span>
      </div>
      <p class="text-[9px] font-mono text-gray-400 group-hover:text-uva/80 font-bold">${s.code}</p>
    </button>
  `).join('');
};

window.handleAddToCart = function(productId) {
  const p = UVA_STATE.products.find(x => x.id === productId);
  if (!p) return;

  if (p.stock <= 0) {
    alert(`No hay stock disponible de ${p.name}`);
    return;
  }

  const existing = UVA_STATE.cart.find(item => item.id === productId);
  if (existing) {
    if (existing.qty + 1 > p.stock) {
      alert(`Alcanzaste el stock disponible (${p.stock} unidades)`);
      return;
    }
    existing.qty += 1;
  } else {
    UVA_STATE.cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      pricingType: 'minorista',
      qty: 1,
      maxStock: p.stock
    });
  }

  renderPosCart();
};

function renderPosCart() {
  const panel = document.getElementById('posCartPanel');
  if (!panel) return;

  const subtotal = UVA_STATE.cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
  const discount = UVA_STATE.discountType === 'porc' 
    ? (subtotal * UVA_STATE.discountValue) / 100 
    : UVA_STATE.discountValue;
  const total = Math.max(0, subtotal - discount);

  panel.innerHTML = `
    <div>
      <div class="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
        <h2 class="text-base font-bold font-display text-gray-900 flex items-center gap-2">
          <i data-lucide="shopping-bag" class="w-5 h-5 text-blue-600"></i>
          <span>Resumen de Venta</span>
        </h2>
        <div class="flex items-center gap-1.5">
          <span class="text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider bg-blue-50 text-blue-700">
            🛒 Venta Mostrador
          </span>
          <span class="text-xs font-bold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
            ${UVA_STATE.cart.length} ${UVA_STATE.cart.length === 1 ? 'ítem' : 'ítems'}
          </span>
        </div>
      </div>

      <div class="space-y-3 max-h-[220px] overflow-y-auto pr-1 mb-4">
        ${UVA_STATE.cart.length === 0 ? `
          <div class="text-center py-8 text-gray-400 text-xs font-medium">
            Hacé click en los productos de la izquierda para agregarlos al carrito.
          </div>
        ` : UVA_STATE.cart.map((item, idx) => `
          <div class="flex items-center justify-between bg-gray-50 p-3 rounded-2xl">
            <div class="flex-1 pr-2 overflow-hidden">
              <h4 class="text-xs font-bold text-gray-900 truncate">${item.name}</h4>
              <p class="text-[10px] text-gray-500 font-bold">$ ${item.price.toLocaleString('es-AR')} c/u</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="updateCartQty(${idx}, -1)" class="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-xs">−</button>
              <span class="text-xs font-bold text-gray-900 w-4 text-center">${item.qty}</span>
              <button onclick="updateCartQty(${idx}, 1)" class="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-xs">+</button>
              <button onclick="removeCartItem(${idx})" class="text-gray-400 hover:text-rose-600 p-1 ml-1">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Cliente del Ticket -->
      <div class="space-y-3 pt-3 border-t border-gray-100 mb-4">
        <div class="flex items-center justify-between">
          <label class="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider flex items-center gap-1">
            <i data-lucide="user" class="w-3.5 h-3.5 text-blue-600"></i>
            <span>Cliente del Ticket</span>
          </label>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold text-blue-600 cursor-pointer">+ Nuevo</span>
          </div>
        </div>

        <div class="relative">
          <input
            type="text"
            placeholder="Buscar cliente por nombre o teléfono..."
            class="w-full text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-uva"
          />
        </div>

        <div class="grid grid-cols-2 gap-2">
          <input type="text" placeholder="Nombre (Opcional)" class="text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-gray-800" />
          <input type="text" placeholder="Teléfono (Opcional)" class="text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-gray-800" />
        </div>
      </div>

      <!-- Método de Pago -->
      <div class="space-y-2 pt-3 border-t border-gray-100 mb-4">
        <label class="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider block">Método de Pago</label>
        <div class="grid grid-cols-4 gap-2">
          <button type="button" onclick="selectPayment('Efectivo')" class="py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${UVA_STATE.selectedPayment === 'Efectivo' ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}">
            <i data-lucide="banknote" class="w-4 h-4"></i>
            <span class="text-[10px]">Efectivo</span>
          </button>
          <button type="button" onclick="selectPayment('Transf.')" class="py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${UVA_STATE.selectedPayment === 'Transf.' ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}">
            <i data-lucide="landmark" class="w-4 h-4"></i>
            <span class="text-[10px]">Transf.</span>
          </button>
          <button type="button" onclick="selectPayment('Tarjeta')" class="py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${UVA_STATE.selectedPayment === 'Tarjeta' ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}">
            <i data-lucide="credit-card" class="w-4 h-4"></i>
            <span class="text-[10px]">Tarjeta</span>
          </button>
          <button type="button" onclick="selectPayment('MP')" class="py-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${UVA_STATE.selectedPayment === 'MP' ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}">
            <i data-lucide="smartphone" class="w-4 h-4"></i>
            <span class="text-[10px]">MP</span>
          </button>
        </div>
      </div>

      <!-- Descuento Manual -->
      <div class="space-y-1.5 pt-2 mb-3">
        <label class="text-[10px] font-extrabold text-gray-500 uppercase tracking-wider block">Descuento Manual (Opcional)</label>
        <div class="flex items-center gap-2">
          <button class="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-blue-50 text-blue-700 border border-blue-200">$ Fijo</button>
          <button class="px-2.5 py-1 text-[10px] font-bold rounded-lg bg-gray-100 text-gray-600">% Porc.</button>
          <input type="number" placeholder="$ 0" class="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-gray-800" />
        </div>
      </div>

      <!-- Totales -->
      <div class="pt-3 border-t border-gray-100 space-y-2">
        <div class="flex justify-between text-xs text-gray-500 font-semibold">
          <span>Subtotal:</span>
          <span class="font-bold text-gray-900">$ ${subtotal.toLocaleString('es-AR')}</span>
        </div>
        <div class="flex justify-between items-baseline pt-1">
          <span class="text-xs font-black text-gray-900 uppercase tracking-wider">TOTAL VENTA:</span>
          <span class="text-3xl font-black font-display text-gray-900">$ ${total.toLocaleString('es-AR')}</span>
        </div>
      </div>
    </div>

    <!-- Botón Confirmar y Cobrar -->
    <button
      onclick="handleCheckoutSale(${total})"
      ${UVA_STATE.cart.length === 0 ? 'disabled' : ''}
      class="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
    >
      <i data-lucide="check" class="w-5 h-5"></i>
      <span>Confirmar y Cobrar</span>
    </button>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.updateCartQty = function(index, delta) {
  const item = UVA_STATE.cart[index];
  if (!item) return;

  if (delta > 0 && item.qty + 1 > item.maxStock) {
    alert("Stock máximo alcanzado.");
    return;
  }

  item.qty += delta;
  if (item.qty <= 0) {
    UVA_STATE.cart.splice(index, 1);
  }
  renderPosCart();
};

window.removeCartItem = function(index) {
  UVA_STATE.cart.splice(index, 1);
  renderPosCart();
};

window.selectPayment = function(method) {
  UVA_STATE.selectedPayment = method;
  renderPosCart();
};

window.handleCheckoutSale = function(total) {
  if (UVA_STATE.cart.length === 0) return;

  const orderNum = `ORD-${Date.now().toString().slice(-4)}`;
  const now = new Date();
  const timeStr = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });

  // Descontar stock
  UVA_STATE.cart.forEach(item => {
    const p = UVA_STATE.products.find(x => x.id === item.id);
    if (p) {
      p.stock = Math.max(0, p.stock - item.qty);
      UVA_STATE.stockHistory.unshift({
        datetime: `14/9/2026 ${timeStr}`,
        productName: p.name,
        code: p.id,
        type: "SALIDA",
        qty: -item.qty,
        stockResult: p.stock,
        reason: "Venta POS - Cliente Mostrador"
      });
    }
  });

  // Guardar en pedidos y ventas
  const newOrder = {
    id: orderNum,
    date: "14/09/2026",
    time: timeStr,
    customer: "Cliente Mostrador",
    channel: "Mostrador",
    itemsSummary: UVA_STATE.cart.map(i => `${i.qty}x ${i.name}`).join(', '),
    items: [...UVA_STATE.cart],
    paymentMethod: UVA_STATE.selectedPayment,
    status: "Entregado",
    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    total: total
  };

  UVA_STATE.orders.unshift(newOrder);

  UVA_STATE.sales.unshift({
    orderId: orderNum,
    time: timeStr,
    client: "Cliente Mostrador",
    method: UVA_STATE.selectedPayment,
    total: total
  });

  const savedCart = [...UVA_STATE.cart];
  UVA_STATE.cart = [];

  renderPosCart();
  renderPosProducts();

  openReceiptModal(orderNum, timeStr, total, savedCart);
};

function openReceiptModal(orderNum, timeStr, total, items) {
  const modal = document.getElementById('receiptModalBackdrop');
  const body = document.getElementById('receiptTicketBody');

  body.innerHTML = `
    <div class="text-center pb-2 border-b border-dashed border-gray-200">
      <p class="font-black text-sm text-uva">KIOSCOS UVA</p>
      <p class="text-[10px] text-gray-500">Cno. Gral. Belgrano 6420 · Florencio Varela</p>
      <p class="text-[10px] text-gray-500">CUIT: 30-71829304-8</p>
      <div class="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
        ✓ Venta Registrada: ${orderNum}
      </div>
      <p class="text-[10px] text-gray-400 mt-1">14/09/2026 ${timeStr}</p>
    </div>

    <div class="space-y-1.5 py-3 border-b border-dashed border-gray-200">
      ${items.map(i => `
        <div class="flex justify-between text-[11px]">
          <span class="text-gray-700 font-medium">${i.qty}x ${i.name}</span>
          <span class="font-bold text-gray-900">$ ${(i.price * i.qty).toLocaleString('es-AR')}</span>
        </div>
      `).join('')}
    </div>

    <div class="pt-2 flex justify-between font-black text-sm">
      <span>TOTAL COBRADO:</span>
      <span class="text-emerald-700 font-display text-base">$ ${total.toLocaleString('es-AR')}</span>
    </div>
    <div class="text-[10px] text-gray-500 text-right font-medium">Medio de Pago: <strong class="text-gray-800">${UVA_STATE.selectedPayment}</strong></div>

    <p class="text-center text-[10px] text-gray-400 pt-3">Operación registrada en caja (sin impresión física de ticket).</p>
  `;

  modal.classList.remove('hidden');
}

window.closeReceiptModal = function() {
  document.getElementById('receiptModalBackdrop').classList.add('hidden');
};

// =============================================================================
// 5. VISTA 3: INVENTARIO (Con MINIATURAS FOTOGRÁFICAS REALES)
// =============================================================================

let invSearch = '';
let invCategory = '';
let invBrand = '';
let invFilterLowStock = false;
let invPriceView = 'all';

function renderInventoryView(container) {
  const isOwner = UVA_STATE.currentRole === 'admin';

  container.innerHTML = `
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 font-display">Inventario de Productos</h1>
        <p class="text-xs font-semibold text-gray-400 mt-0.5">Control de stock, precios y reposición masiva</p>
      </div>

      <div class="flex items-center gap-3">
        ${isOwner ? `
          <button class="px-4 py-2.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
            <i data-lucide="sliders-horizontal" class="w-4 h-4"></i>
            <span>Ajuste Masivo de Precios</span>
          </button>
        ` : ''}
        <button onclick="alert('Formulario de alta de nuevo producto')" class="px-4 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>+ Nuevo Producto</span>
        </button>
      </div>
    </div>

    <!-- Barra de Filtros -->
    <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-3">
      <div class="relative flex-1 min-w-[240px]">
        <i data-lucide="search" class="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"></i>
        <input
          type="text"
          id="invSearchInput"
          placeholder="Buscar por código, nombre..."
          value="${invSearch}"
          class="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-gray-50 border border-gray-200 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-uva"
        />
      </div>

      <select id="invCatSelect" class="text-xs font-semibold bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-gray-700 focus:outline-hidden">
        <option value="">Todas las Categorías</option>
        ${UVA_STATE.categories.map(c => `
          <option value="${c.id}" ${invCategory === c.id ? 'selected' : ''}>${c.name}</option>
        `).join('')}
      </select>

      <select id="invBrandSelect" class="text-xs font-semibold bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-gray-700 focus:outline-hidden">
        <option value="">Todas las Marcas</option>
        <option value="UVA FAST FOOD">UVA FAST FOOD</option>
        <option value="COCA-COLA">COCA-COLA</option>
        <option value="PEPSICO">PEPSICO</option>
        <option value="ARCOR">ARCOR</option>
        <option value="GUAYMALLEN">GUAYMALLEN</option>
        <option value="MASSALIN">MASSALIN</option>
      </select>

      <div class="flex items-center bg-gray-100 p-1 rounded-2xl border border-gray-200/80 text-xs font-bold">
        <button id="btnInvPriceAll" class="px-3 py-1 rounded-xl ${invPriceView === 'all' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-500'}">Ambos Precios</button>
        <button id="btnInvPriceMin" class="px-3 py-1 rounded-xl ${invPriceView === 'minorista' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-500'}">🛍️ Minorista</button>
        <button id="btnInvPriceMay" class="px-3 py-1 rounded-xl ${invPriceView === 'mayorista' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-500'}">🏷️ Mayorista</button>
      </div>

      <button id="btnInvLowStock" class="px-3.5 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 transition-all ${invFilterLowStock ? 'bg-amber-100 border-amber-300 text-amber-900 font-extrabold' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}">
        <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-amber-600"></i>
        <span>Stock Bajo</span>
      </button>
    </div>

    <!-- Tabla de Productos -->
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="admin-table">
          <thead>
            <tr>
              <th>CÓDIGO / PRODUCTO</th>
              <th>MARCA</th>
              <th>CATEGORÍA</th>
              ${isOwner ? '<th>P. COMPRA</th>' : ''}
              <th>P. MINORISTA</th>
              <th>P. MAYORISTA</th>
              ${isOwner ? '<th>GANANCIA / MARGEN</th>' : ''}
              <th>STOCK ACTUAL</th>
              <th>MÍNIMO</th>
              <th class="text-right">ACCIONES</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 text-xs font-medium text-gray-700" id="invTableBody">
            <!-- Inyectado dinámicamente -->
          </tbody>
        </table>
      </div>
    </div>
  `;

  document.getElementById('invSearchInput').addEventListener('input', (e) => {
    invSearch = e.target.value.toLowerCase().trim();
    updateInventoryRows();
  });
  document.getElementById('invCatSelect').addEventListener('change', (e) => {
    invCategory = e.target.value;
    updateInventoryRows();
  });
  document.getElementById('invBrandSelect').addEventListener('change', (e) => {
    invBrand = e.target.value;
    updateInventoryRows();
  });
  document.getElementById('btnInvPriceAll').addEventListener('click', () => {
    invPriceView = 'all';
    renderInventoryView(container);
  });
  document.getElementById('btnInvPriceMin').addEventListener('click', () => {
    invPriceView = 'minorista';
    renderInventoryView(container);
  });
  document.getElementById('btnInvPriceMay').addEventListener('click', () => {
    invPriceView = 'mayorista';
    renderInventoryView(container);
  });
  document.getElementById('btnInvLowStock').addEventListener('click', () => {
    invFilterLowStock = !invFilterLowStock;
    renderInventoryView(container);
  });

  updateInventoryRows();
}

function updateInventoryRows() {
  const tbody = document.getElementById('invTableBody');
  if (!tbody) return;

  const isOwner = UVA_STATE.currentRole === 'admin';

  const list = UVA_STATE.products.filter(p => {
    if (invFilterLowStock && p.stock > p.minStock) return false;
    if (invCategory && p.category !== invCategory) return false;
    if (invBrand && p.brand !== invBrand) return false;
    if (invSearch) {
      return p.name.toLowerCase().includes(invSearch) ||
             p.brand.toLowerCase().includes(invSearch) ||
             p.id.toLowerCase().includes(invSearch);
    }
    return true;
  });

  tbody.innerHTML = list.map(p => {
    const isLow = p.stock <= p.minStock;
    const profit = p.price - p.cost;
    const marginPct = ((profit / p.cost) * 100).toFixed(1);

    return `
      <tr class="hover:bg-gray-50/80 transition-colors ${isLow ? 'bg-amber-50/30' : ''}">
        <td>
          <div class="flex items-center gap-3">
            <!-- Miniatura con FOTO REAL -->
            <div class="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 shrink-0 overflow-hidden relative">
              <img
                src="${p.image}"
                alt="${p.name}"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p class="font-bold text-gray-900">${p.name}</p>
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-[10px] font-mono text-gray-400">${p.id}</span>
                <span class="text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded-md border border-purple-100 flex items-center gap-1">
                  <i data-lucide="barcode" class="w-3 h-3"></i> ${p.barcode}
                </span>
              </div>
            </div>
          </div>
        </td>

        <td class="font-semibold text-gray-600">${p.brand}</td>
        <td class="text-gray-500">${p.category}</td>

        ${isOwner ? `
          <td class="font-mono text-gray-400">$ ${p.cost.toLocaleString('es-AR')}</td>
        ` : ''}

        <td class="font-bold text-gray-900 font-mono">$ ${p.price.toLocaleString('es-AR')}</td>

        <td class="font-bold font-mono">
          <span class="text-purple-700 bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-100">
            $ ${p.wholesale.toLocaleString('es-AR')}
          </span>
        </td>

        ${isOwner ? `
          <td class="font-mono text-[11px]">
            <span class="text-emerald-700 font-bold block">+$ ${profit.toLocaleString('es-AR')}</span>
            <span class="text-[10px] text-gray-400">(${marginPct}%)</span>
          </td>
        ` : ''}

        <td>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-xs ${isLow ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-700'}">
            ${isLow ? '<i data-lucide="alert-triangle" class="w-3 h-3 text-amber-700"></i>' : ''}
            <span>${p.stock} un.</span>
          </span>
        </td>

        <td class="text-gray-400 font-mono">${p.minStock} un.</td>

        <td class="text-right space-x-1">
          <button onclick="handleQuickStock('${p.id}')" class="px-2.5 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 font-bold rounded-xl text-[11px] transition-colors inline-flex items-center gap-1">
            <i data-lucide="arrow-down-up" class="w-3.5 h-3.5"></i> +Stock
          </button>
          <button class="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"><i data-lucide="history" class="w-4 h-4"></i></button>
          <button class="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-gray-100"><i data-lucide="edit-2" class="w-4 h-4"></i></button>
          <button class="p-1.5 ${p.featured ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-500 rounded-lg hover:bg-gray-100">
            <i data-lucide="star" class="w-4 h-4 ${p.featured ? 'fill-amber-400' : ''}"></i>
          </button>
          ${isOwner ? `
            <button class="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-gray-100"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
          ` : ''}
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// =============================================================================
// 6. VISTA: PEDIDOS CARGADOS DE EJEMPLO
// =============================================================================

let ordersFilterStatus = 'all';

function renderOrdersView(container) {
  container.innerHTML = `
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 font-display">Gestión de Pedidos</h1>
        <p class="text-xs font-semibold text-gray-400 mt-0.5">Control de comandas de mostrador, WhatsApp y delivery en Florencio Varela</p>
      </div>

      <div class="flex items-center gap-2">
        <button class="px-4 py-2.5 rounded-2xl bg-uva text-white text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Nuevo Pedido</span>
        </button>
      </div>
    </div>

    <!-- Pestañas de Estado -->
    <div class="bg-white p-3 rounded-3xl border border-gray-100 shadow-sm mb-6 flex items-center gap-2 overflow-x-auto">
      <button onclick="filterOrders('all')" class="px-4 py-2 rounded-2xl text-xs font-bold ${ordersFilterStatus === 'all' ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}">
        Todos (${UVA_STATE.orders.length})
      </button>
      <button onclick="filterOrders('En preparación')" class="px-4 py-2 rounded-2xl text-xs font-bold ${ordersFilterStatus === 'En preparación' ? 'bg-amber-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}">
        ⏳ En preparación (2)
      </button>
      <button onclick="filterOrders('Entregado')" class="px-4 py-2 rounded-2xl text-xs font-bold ${ordersFilterStatus === 'Entregado' ? 'bg-emerald-600 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}">
        ✓ Entregados (${UVA_STATE.orders.filter(o => o.status === 'Entregado').length})
      </button>
    </div>

    <!-- Tabla de Pedidos -->
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="admin-table">
          <thead>
            <tr>
              <th>N° ORDEN</th>
              <th>FECHA Y HORA</th>
              <th>CLIENTE / CANAL</th>
              <th>ARTÍCULOS</th>
              <th>MÉTODO DE PAGO</th>
              <th>ESTADO</th>
              <th>TOTAL</th>
              <th class="text-right">ACCIONES</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 text-xs font-medium text-gray-700">
            ${UVA_STATE.orders
              .filter(o => ordersFilterStatus === 'all' || o.status === ordersFilterStatus)
              .map(o => `
                <tr class="hover:bg-gray-50/80 transition-colors">
                  <td class="font-bold text-gray-900 font-display">${o.id}</td>
                  <td class="text-gray-500 font-semibold">${o.date} ${o.time}</td>
                  <td>
                    <p class="font-bold text-gray-900">${o.customer}</p>
                    <p class="text-[10px] text-gray-400">${o.channel}</p>
                  </td>
                  <td class="max-w-xs truncate text-gray-700">${o.itemsSummary}</td>
                  <td><span class="text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full text-[10px] font-bold">${o.paymentMethod}</span></td>
                  <td>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold border ${o.statusClass}">
                      ${o.status}
                    </span>
                  </td>
                  <td class="font-extrabold text-gray-900 font-display text-sm">$ ${o.total.toLocaleString('es-AR')}</td>
                  <td class="text-right">
                    <button onclick="viewOrderDetail('${o.id}')" class="px-3 py-1.5 bg-gray-100 hover:bg-uva hover:text-white font-bold rounded-xl text-[11px] transition-all inline-flex items-center gap-1.5">
                      <i data-lucide="eye" class="w-3.5 h-3.5"></i> Ver Ticket
                    </button>
                  </td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.filterOrders = function(status) {
  ordersFilterStatus = status;
  renderOrdersView(document.getElementById('appMainView'));
};

window.viewOrderDetail = function(orderId) {
  const o = UVA_STATE.orders.find(x => x.id === orderId);
  if (!o) return;
  openReceiptModal(o.id, o.time, o.total, o.items);
};

// =============================================================================
// 7. VISTAS RESTANTES: HISTORIAL DE STOCK, CATEGORÍAS, FINANZAS, REPORTES, CONFIG
// =============================================================================

function renderStockView(container) {
  container.innerHTML = `
    <div class="mb-6">
      <h1 class="text-3xl font-extrabold text-gray-900 font-display">Historial de Stock</h1>
      <p class="text-xs font-semibold text-gray-400 mt-0.5">Auditoría completa de entradas y salidas de inventario (Kioscos UVA · Belgrano)</p>
    </div>

    <div class="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-3">
      <select class="text-xs font-semibold bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-gray-700 min-w-[200px]">
        <option>Todos los Productos</option>
        ${UVA_STATE.products.map(p => `<option>${p.name}</option>`).join('')}
      </select>

      <select class="text-xs font-semibold bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 text-gray-700">
        <option>Todos los Tipos</option>
        <option>Solo Entradas</option>
        <option>Solo Salidas</option>
      </select>

      <div class="flex items-center gap-2 text-xs font-semibold text-gray-500">
        <div class="px-3 py-2 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-1.5">
          <span>14/09/2026</span>
          <i data-lucide="calendar" class="w-3.5 h-3.5 text-gray-400"></i>
        </div>
        <span>a</span>
        <div class="px-3 py-2 bg-gray-50 border border-gray-200 rounded-2xl flex items-center gap-1.5">
          <span>14/09/2026</span>
          <i data-lucide="calendar" class="w-3.5 h-3.5 text-gray-400"></i>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="admin-table">
          <thead>
            <tr>
              <th>FECHA Y HORA</th>
              <th>PRODUCTO / CÓDIGO</th>
              <th>TIPO</th>
              <th>CANTIDAD</th>
              <th>STOCK RESULTANTE</th>
              <th>REFERENCIA / MOTIVO</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 text-xs font-medium text-gray-700">
            ${UVA_STATE.stockHistory.map(h => `
              <tr class="hover:bg-gray-50/80">
                <td class="text-gray-500 font-semibold">${h.datetime}</td>
                <td>
                  <p class="font-bold text-gray-900">${h.productName}</p>
                  <p class="text-[10px] font-mono text-gray-400">${h.code}</p>
                </td>
                <td>
                  <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider ${
                    h.type === 'SALIDA' ? 'bg-rose-50 text-rose-600 border border-rose-200/60' : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                  }">
                    ${h.type === 'SALIDA' ? '↗ SALIDA' : '↙ ENTRADA'}
                  </span>
                </td>
                <td class="font-mono font-bold ${h.qty > 0 ? 'text-emerald-600' : 'text-rose-600'}">
                  ${h.qty > 0 ? '+' + h.qty : h.qty}
                </td>
                <td class="font-mono font-bold text-gray-900">${h.stockResult} un.</td>
                <td class="text-gray-500">${h.reason}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderCategoriesView(container) {
  container.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 font-display">Categorías</h1>
        <p class="text-xs font-semibold text-gray-400 mt-0.5">Gestioná las categorías e imágenes de tu tienda</p>
      </div>

      <button onclick="alert('Formulario para crear nueva categoría en Kioscos UVA')" class="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
        <i data-lucide="plus" class="w-4 h-4"></i>
        <span>+ Nueva Categoría</span>
      </button>
    </div>

    <div class="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 mb-6 flex items-center gap-2.5 text-xs text-gray-600 font-medium">
      <i data-lucide="star" class="w-4 h-4 text-amber-500 fill-amber-500 shrink-0"></i>
      <span>Marcá categorías con ★ para elegir cuáles aparecen en el inicio. Si no hay favoritas, se muestran todas.</span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      ${UVA_STATE.categories.map(c => `
        <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-2xl bg-purple-50 text-xl flex items-center justify-center">
                ${c.icon}
              </div>
              <div class="flex items-center gap-1 text-gray-300">
                <button class="p-1 hover:text-amber-500"><i data-lucide="star" class="w-4 h-4"></i></button>
                <button class="p-1 hover:text-blue-600"><i data-lucide="edit-2" class="w-4 h-4"></i></button>
                <button class="p-1 hover:text-rose-600"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
              </div>
            </div>

            <h3 class="text-sm font-extrabold text-gray-900 font-display">${c.name}</h3>
            <p class="text-[11px] text-gray-400 font-medium">${c.slug}</p>
          </div>

          <div class="mt-6 border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center text-gray-400 flex flex-col items-center justify-center gap-1">
            <i data-lucide="image" class="w-5 h-5 text-gray-300"></i>
            <span class="text-[10px] font-medium">Sin Imagen (Usa vector/icono por defecto)</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// =============================================================================
// 8. VISTA: FINANZAS Y GASTOS OPERATIVOS (Control de Empleados, Alquiler, Servicios)
// =============================================================================

function renderFinanceView(container) {
  const selectedBranch = UVA_STATE.financeBranch || 'all';
  const selectedCat = UVA_STATE.financeCategory || 'all';
  const isAll = selectedBranch === 'all';
  const curBranch = isAll ? null : UVA_STATE.branches.find(b => b.id === selectedBranch);

  // Filtrar gastos
  let filteredExpenses = UVA_STATE.expenses.filter(e => {
    const matchBranch = isAll || e.branchId === selectedBranch;
    const matchCat = selectedCat === 'all' || e.category === selectedCat;
    return matchBranch && matchCat;
  });

  // Cálculos de KPIs
  const allFilteredByBranch = UVA_STATE.expenses.filter(e => isAll || e.branchId === selectedBranch);
  const totalEgresos = allFilteredByBranch.reduce((sum, e) => sum + e.amount, 0);
  const totalEmpleados = allFilteredByBranch.filter(e => e.category === 'Empleados').reduce((sum, e) => sum + e.amount, 0);
  const totalAlquiler = allFilteredByBranch.filter(e => e.category === 'Alquiler').reduce((sum, e) => sum + e.amount, 0);
  const totalServicios = allFilteredByBranch.filter(e => e.category === 'Servicios').reduce((sum, e) => sum + e.amount, 0);
  const totalProveedores = allFilteredByBranch.filter(e => e.category === 'Proveedores').reduce((sum, e) => sum + e.amount, 0);

  const titleText = isAll ? "Finanzas & Gastos Operativos · Red UVA" : `Finanzas · ${curBranch ? curBranch.shortName : 'Sucursal'}`;
  const subtitleText = isAll 
    ? "Control consolidado de egresos, salarios, alquileres y servicios de las 8 sucursales"
    : `Control de costos exclusivo de ${curBranch ? curBranch.name : ''} (${curBranch ? curBranch.address : ''})`;

  container.innerHTML = `
    <!-- Header de Finanzas -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2.5">
          <h1 class="text-3xl font-extrabold text-gray-900 font-display">${titleText}</h1>
          <span class="px-3 py-0.5 rounded-full text-xs font-bold ${isAll ? 'bg-purple-100 text-uva border border-purple-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}">
            ${isAll ? '🌐 8 Sucursales' : '📍 ' + (curBranch ? curBranch.shortName : '')}
          </span>
        </div>
        <p class="text-xs font-semibold text-gray-400 mt-1">${subtitleText}</p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <!-- Selector de Sucursal -->
        <div class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl border border-gray-200 shadow-2xs">
          <i data-lucide="store" class="w-4 h-4 text-uva shrink-0"></i>
          <label class="text-xs font-bold text-gray-500 hidden sm:inline">Sucursal:</label>
          <select id="financeBranchSelect" onchange="filterFinanceBranch(this.value)" class="text-xs font-extrabold text-gray-900 bg-transparent border-none outline-hidden cursor-pointer">
            <option value="all" ${isAll ? 'selected' : ''}>🌐 Todas las sucursales</option>
            ${UVA_STATE.branches.map(b => `
              <option value="${b.id}" ${selectedBranch === b.id ? 'selected' : ''}>📍 ${b.shortName}</option>
            `).join('')}
          </select>
        </div>

        <!-- Botón Nuevo Gasto -->
        <button onclick="openNewExpenseModal()" class="px-4 py-2.5 rounded-2xl bg-uva hover:bg-uva-dark text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
          <i data-lucide="plus-circle" class="w-4 h-4"></i>
          <span>+ Registrar Gasto / Egreso</span>
        </button>
      </div>
    </div>

    <!-- Píldoras de Sucursales Rápidas -->
    <div class="bg-white p-2.5 rounded-3xl border border-gray-100 shadow-sm mb-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
      <button onclick="filterFinanceBranch('all')" class="px-3.5 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${isAll ? 'bg-uva text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
        <i data-lucide="network" class="w-3.5 h-3.5"></i>
        <span>Todas (8)</span>
      </button>
      ${UVA_STATE.branches.map(b => `
        <button onclick="filterFinanceBranch('${b.id}')" class="px-3.5 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${selectedBranch === b.id ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
          <span class="w-2 h-2 rounded-full" style="background-color: ${b.color};"></span>
          <span>${b.shortName}</span>
        </button>
      `).join('')}
    </div>

    <!-- 4 KPIs de Egresos Operativos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">Total Egresos Mes</span>
          <span class="p-1.5 rounded-xl bg-rose-50 text-rose-600"><i data-lucide="trending-down" class="w-4 h-4"></i></span>
        </div>
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 font-display">$ ${totalEgresos.toLocaleString('es-AR')}</h2>
          <p class="text-[11px] font-semibold text-gray-400 mt-0.5">Operativos registrados</p>
        </div>
      </div>

      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">Sueldos & Empleados</span>
          <span class="p-1.5 rounded-xl bg-purple-50 text-purple-600"><i data-lucide="users" class="w-4 h-4"></i></span>
        </div>
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 font-display">$ ${totalEmpleados.toLocaleString('es-AR')}</h2>
          <p class="text-[11px] font-semibold text-gray-400 mt-0.5">${Math.round((totalEmpleados/totalEgresos || 0)*100)}% del total egresos</p>
        </div>
      </div>

      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">Alquileres Comerciales</span>
          <span class="p-1.5 rounded-xl bg-amber-50 text-amber-600"><i data-lucide="building-2" class="w-4 h-4"></i></span>
        </div>
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 font-display">$ ${totalAlquiler.toLocaleString('es-AR')}</h2>
          <p class="text-[11px] font-semibold text-gray-400 mt-0.5">${Math.round((totalAlquiler/totalEgresos || 0)*100)}% del total egresos</p>
        </div>
      </div>

      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">Servicios (Luz, Agua, Red)</span>
          <span class="p-1.5 rounded-xl bg-blue-50 text-blue-600"><i data-lucide="zap" class="w-4 h-4"></i></span>
        </div>
        <div>
          <h2 class="text-2xl font-extrabold text-gray-900 font-display">$ ${totalServicios.toLocaleString('es-AR')}</h2>
          <p class="text-[11px] font-semibold text-gray-400 mt-0.5">${Math.round((totalServicios/totalEgresos || 0)*100)}% del total egresos</p>
        </div>
      </div>
    </div>

    <!-- Gráfico y Desglose de Gastos -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <!-- Tarjeta Gráfico de Dona -->
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="mb-4">
          <h3 class="text-sm font-bold text-gray-900 font-display">Distribución de Gastos</h3>
          <p class="text-[10px] text-gray-400 font-semibold">Proporción por rubro operativo</p>
        </div>
        <div class="relative h-60 w-full">
          <canvas id="canvasFinanceBreakdown"></canvas>
        </div>
      </div>

      <!-- Resumen de Rubros con Botones de Filtro -->
      <div class="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-bold text-gray-900 font-display">Control por Rubro de Gasto</h3>
            <p class="text-[10px] text-gray-400 font-semibold">Filtrá los movimientos según la categoría</p>
          </div>
          <span class="text-xs font-bold text-uva font-mono">${filteredExpenses.length} movimientos</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          ${[
            { key: 'all', name: 'Todos los Rubros', icon: 'layers', count: allFilteredByBranch.length, sum: totalEgresos, color: 'bg-gray-100 text-gray-800' },
            { key: 'Empleados', name: 'Sueldos / Empleados', icon: 'users', count: allFilteredByBranch.filter(e => e.category === 'Empleados').length, sum: totalEmpleados, color: 'bg-purple-100 text-purple-700' },
            { key: 'Alquiler', name: 'Alquileres', icon: 'building', count: allFilteredByBranch.filter(e => e.category === 'Alquiler').length, sum: totalAlquiler, color: 'bg-amber-100 text-amber-700' },
            { key: 'Servicios', name: 'Servicios Fijos', icon: 'zap', count: allFilteredByBranch.filter(e => e.category === 'Servicios').length, sum: totalServicios, color: 'bg-blue-100 text-blue-700' },
            { key: 'Proveedores', name: 'Proveedores / Stock', icon: 'truck', count: allFilteredByBranch.filter(e => e.category === 'Proveedores').length, sum: totalProveedores, color: 'bg-emerald-100 text-emerald-700' },
            { key: 'Mantenimiento', name: 'Mantenimiento / Varios', icon: 'wrench', count: allFilteredByBranch.filter(e => e.category === 'Mantenimiento').length, sum: allFilteredByBranch.filter(e => e.category === 'Mantenimiento').reduce((s,e) => s+e.amount, 0), color: 'bg-rose-100 text-rose-700' }
          ].map(r => `
            <button
              onclick="filterFinanceCategory('${r.key}')"
              class="p-3 rounded-2xl border text-left transition-all cursor-pointer ${selectedCat === r.key ? 'border-uva ring-2 ring-uva/20 bg-purple-50/40' : 'border-gray-100 hover:bg-gray-50'}"
            >
              <div class="flex items-center justify-between mb-1.5">
                <span class="p-1.5 rounded-xl ${r.color} text-xs"><i data-lucide="${r.icon}" class="w-3.5 h-3.5"></i></span>
                <span class="text-[10px] font-bold text-gray-400 font-mono">${r.count} reg.</span>
              </div>
              <p class="text-xs font-bold text-gray-900 truncate">${r.name}</p>
              <p class="text-[11px] font-extrabold text-gray-700 font-mono mt-0.5">$ ${(r.sum/1000).toLocaleString('es-AR')}k</p>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Tabla de Gastos Operativos -->
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <i data-lucide="receipt" class="w-4 h-4 text-uva"></i>
          <h3 class="text-sm font-bold text-gray-900 font-display">Libro de Gastos & Comprobantes</h3>
        </div>
        <div class="text-xs font-semibold text-gray-400">
          Mostrando ${filteredExpenses.length} comprobantes de egreso
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="admin-table">
          <thead>
            <tr>
              <th>FECHA</th>
              <th>SUCURSAL</th>
              <th>RUBRO / CATEGORÍA</th>
              <th>CONCEPTO / PROVEEDOR</th>
              <th>COMPROBANTE</th>
              <th>MEDIO DE PAGO</th>
              <th>MONTO ($)</th>
              <th>ESTADO</th>
              <th class="text-right">ACCIONES</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 text-xs font-medium text-gray-700">
            ${filteredExpenses.map(e => {
              const bInfo = UVA_STATE.branches.find(b => b.id === e.branchId);
              return `
                <tr class="hover:bg-gray-50/80 transition-colors">
                  <td class="font-semibold text-gray-500">${e.date}</td>
                  <td>
                    <span class="inline-flex items-center gap-1.5 font-bold text-gray-900">
                      <span class="w-2 h-2 rounded-full" style="background-color: ${bInfo ? bInfo.color : '#6B3B82'};"></span>
                      <span>${bInfo ? bInfo.shortName : e.branchId}</span>
                    </span>
                  </td>
                  <td>
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      e.category === 'Empleados' ? 'bg-purple-100 text-purple-700'
                      : e.category === 'Alquiler' ? 'bg-amber-100 text-amber-700'
                      : e.category === 'Servicios' ? 'bg-blue-100 text-blue-700'
                      : e.category === 'Proveedores' ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-rose-100 text-rose-700'
                    }">
                      ${e.category}
                    </span>
                  </td>
                  <td class="font-bold text-gray-900 max-w-xs truncate">${e.description}</td>
                  <td class="font-mono text-[11px] text-gray-500">${e.invoiceNum}</td>
                  <td><span class="text-gray-600 bg-gray-100 px-2 py-0.5 rounded-lg text-[10px] font-semibold">${e.paymentMethod}</span></td>
                  <td class="font-extrabold text-gray-900 font-display text-sm">$ ${e.amount.toLocaleString('es-AR')}</td>
                  <td>
                    <button
                      onclick="toggleExpenseStatus('${e.id}')"
                      class="px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                        e.status === 'Pagado'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100'
                          : 'bg-amber-50 text-amber-700 border border-amber-200/60 hover:bg-amber-100'
                      }"
                      title="Hacé clic para cambiar estado"
                    >
                      ${e.status === 'Pagado' ? '✓ Pagado' : '⏳ Pendiente'}
                    </button>
                  </td>
                  <td class="text-right">
                    <button onclick="deleteExpense('${e.id}')" class="p-1.5 hover:bg-rose-50 rounded-xl text-gray-400 hover:text-rose-600 transition-all cursor-pointer" title="Eliminar registro">
                      <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal para Registrar Nuevo Gasto -->
    <div id="modalNewExpense" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs hidden items-center justify-center p-4">
      <div class="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-gray-100 animate-scale-in">
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-uva/10 text-uva"><i data-lucide="plus-circle" class="w-5 h-5"></i></span>
            <h3 class="text-base font-extrabold text-gray-900 font-display">Registrar Gasto / Egreso</h3>
          </div>
          <button onclick="closeNewExpenseModal()" class="p-1.5 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-900"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>

        <form onsubmit="saveNewExpense(event)" class="space-y-3.5 text-xs font-medium">
          <div>
            <label class="font-bold text-gray-700 block mb-1">Sucursal a Imputar *</label>
            <select id="formExpBranch" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
              ${UVA_STATE.branches.map(b => `<option value="${b.id}">📍 ${b.name}</option>`).join('')}
            </select>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Rubro / Categoría *</label>
              <select id="formExpCat" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
                <option value="Empleados">Empleados (Sueldos/Cargas)</option>
                <option value="Alquiler">Alquiler Local</option>
                <option value="Servicios">Servicios (Luz/Agua/Net)</option>
                <option value="Proveedores">Proveedores / Mercadería</option>
                <option value="Mantenimiento">Mantenimiento / Varios</option>
              </select>
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Monto en Pesos ($) *</label>
              <input type="number" id="formExpAmount" required placeholder="Ej: 450000" min="1" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold font-mono" />
            </div>
          </div>

          <div>
            <label class="font-bold text-gray-700 block mb-1">Concepto / Detalle *</label>
            <input type="text" id="formExpDesc" required placeholder="Ej: Pago quincenal cajero turno mañana" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">N° Factura / Recibo</label>
              <input type="text" id="formExpInvoice" placeholder="FAC-B 0001-..." class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono" />
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Medio de Pago</label>
              <select id="formExpMethod" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs">
                <option value="Transferencia Bancaria">Transferencia Bancaria</option>
                <option value="Efectivo de Caja">Efectivo de Caja</option>
                <option value="Débito Automático">Débito Automático</option>
                <option value="Mercado Pago">Mercado Pago</option>
                <option value="Cheque">Cheque</option>
              </select>
            </div>
          </div>

          <div>
            <label class="font-bold text-gray-700 block mb-1">Estado</label>
            <select id="formExpStatus" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold">
              <option value="Pagado">✓ Pagado (Ya abonado)</option>
              <option value="Pendiente">⏳ Pendiente de Pago</option>
            </select>
          </div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
            <button type="button" onclick="closeNewExpenseModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100">Cancelar</button>
            <button type="submit" class="px-5 py-2 rounded-xl bg-uva hover:bg-uva-dark text-white text-xs font-bold shadow-xs">Guardar Egreso</button>
          </div>
        </form>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // Inicializar Gráfico de Gastos Chart.js
  buildFinanceChart(allFilteredByBranch);
}

function buildFinanceChart(expenseList) {
  const ctx = document.getElementById('canvasFinanceBreakdown')?.getContext('2d');
  if (!ctx) return;

  const categories = ['Empleados', 'Alquiler', 'Servicios', 'Proveedores', 'Mantenimiento'];
  const colors = ['#8B5CF6', '#F59E0B', '#3B82F6', '#10B981', '#F43F5E'];
  const sums = categories.map(cat => {
    return expenseList.filter(e => e.category === cat).reduce((s, e) => s + e.amount, 0);
  });

  if (UVA_STATE.chartInstances.financeBreakdown) {
    try { UVA_STATE.chartInstances.financeBreakdown.destroy(); } catch (e) {}
  }

  UVA_STATE.chartInstances.financeBreakdown = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: categories,
      datasets: [{
        data: sums,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 10, weight: 'bold' }, boxWidth: 12 }
        },
        tooltip: {
          callbacks: {
            label: (c) => ` ${c.label}: $ ${c.raw.toLocaleString('es-AR')}`
          }
        }
      }
    }
  });
}

window.filterFinanceBranch = function(bId) {
  UVA_STATE.financeBranch = bId;
  renderFinanceView(document.getElementById('appMainView'));
};

window.filterFinanceCategory = function(cat) {
  UVA_STATE.financeCategory = cat;
  renderFinanceView(document.getElementById('appMainView'));
};

window.openNewExpenseModal = function() {
  document.getElementById('modalNewExpense')?.classList.remove('hidden');
  document.getElementById('modalNewExpense')?.classList.add('flex');
};

window.closeNewExpenseModal = function() {
  document.getElementById('modalNewExpense')?.classList.add('hidden');
  document.getElementById('modalNewExpense')?.classList.remove('flex');
};

window.saveNewExpense = function(e) {
  e.preventDefault();
  const branchId = document.getElementById('formExpBranch').value;
  const category = document.getElementById('formExpCat').value;
  const amount = parseInt(document.getElementById('formExpAmount').value) || 0;
  const description = document.getElementById('formExpDesc').value;
  const invoiceNum = document.getElementById('formExpInvoice').value || 'S/N';
  const paymentMethod = document.getElementById('formExpMethod').value;
  const status = document.getElementById('formExpStatus').value;

  const now = new Date();
  const dateStr = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getFullYear()}`;

  UVA_STATE.expenses.unshift({
    id: `EXP-${Date.now().toString().slice(-4)}`,
    branchId,
    category,
    description,
    invoiceNum,
    amount,
    paymentMethod,
    date: dateStr,
    status
  });

  closeNewExpenseModal();
  renderFinanceView(document.getElementById('appMainView'));
};

window.toggleExpenseStatus = function(expId) {
  const exp = UVA_STATE.expenses.find(x => x.id === expId);
  if (exp) {
    exp.status = exp.status === 'Pagado' ? 'Pendiente' : 'Pagado';
    renderFinanceView(document.getElementById('appMainView'));
  }
};

window.deleteExpense = function(expId) {
  if (confirm("¿Estás seguro de eliminar este registro de gasto?")) {
    UVA_STATE.expenses = UVA_STATE.expenses.filter(x => x.id !== expId);
    renderFinanceView(document.getElementById('appMainView'));
  }
};


// =============================================================================
// 9. VISTA: EMPLEADOS Y TURNOS POR SUCURSAL
// =============================================================================

function renderEmployeesView(container) {
  const selectedBranch = UVA_STATE.employeesBranch || 'all';
  const activeTab = UVA_STATE.employeesTab || 'plantel';
  const isAll = selectedBranch === 'all';
  const curBranch = isAll ? null : UVA_STATE.branches.find(b => b.id === selectedBranch);

  const filteredEmployees = UVA_STATE.employees.filter(emp => isAll || emp.branchId === selectedBranch);
  const totalPayroll = filteredEmployees.reduce((sum, e) => sum + e.salary, 0);
  const inShiftCount = filteredEmployees.filter(e => e.status === 'En turno').length;
  const offDutyCount = filteredEmployees.filter(e => e.status === 'Franco').length;

  container.innerHTML = `
    <!-- Header de Empleados -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2.5">
          <h1 class="text-3xl font-extrabold text-gray-900 font-display">Personal & Turnos · Red UVA</h1>
          <span class="px-3 py-0.5 rounded-full text-xs font-bold ${isAll ? 'bg-purple-100 text-uva border border-purple-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}">
            ${isAll ? '🌐 8 Sucursales' : '📍 ' + (curBranch ? curBranch.shortName : '')}
          </span>
        </div>
        <p class="text-xs font-semibold text-gray-400 mt-1">Gestión de nómina, horarios rotativos y cobertura 24hs por sucursal</p>
      </div>

      <div class="flex flex-wrap items-center gap-3">
        <!-- Selector de Sucursal -->
        <div class="flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl border border-gray-200 shadow-2xs">
          <i data-lucide="store" class="w-4 h-4 text-uva shrink-0"></i>
          <label class="text-xs font-bold text-gray-500 hidden sm:inline">Sucursal:</label>
          <select id="empBranchSelect" onchange="filterEmployeesBranch(this.value)" class="text-xs font-extrabold text-gray-900 bg-transparent border-none outline-hidden cursor-pointer">
            <option value="all" ${isAll ? 'selected' : ''}>🌐 Todas las sucursales</option>
            ${UVA_STATE.branches.map(b => `
              <option value="${b.id}" ${selectedBranch === b.id ? 'selected' : ''}>📍 ${b.shortName}</option>
            `).join('')}
          </select>
        </div>

        <button onclick="openNewEmployeeModal()" class="px-4 py-2.5 rounded-2xl bg-uva hover:bg-uva-dark text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
          <i data-lucide="user-plus" class="w-4 h-4"></i>
          <span>+ Nuevo Empleado / Turno</span>
        </button>
      </div>
    </div>

    <!-- Píldoras de Sucursal -->
    <div class="bg-white p-2.5 rounded-3xl border border-gray-100 shadow-sm mb-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
      <button onclick="filterEmployeesBranch('all')" class="px-3.5 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${isAll ? 'bg-uva text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
        <i data-lucide="network" class="w-3.5 h-3.5"></i>
        <span>Todas las Sucursales (${UVA_STATE.employees.length})</span>
      </button>
      ${UVA_STATE.branches.map(b => {
        const count = UVA_STATE.employees.filter(x => x.branchId === b.id).length;
        return `
          <button onclick="filterEmployeesBranch('${b.id}')" class="px-3.5 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${selectedBranch === b.id ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
            <span class="w-2 h-2 rounded-full" style="background-color: ${b.color};"></span>
            <span>${b.shortName} (${count})</span>
          </button>
        `;
      }).join('')}
    </div>

    <!-- 4 KPIs de Personal -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">Plantel Registrado</span>
          <span class="p-1.5 rounded-xl bg-purple-50 text-uva"><i data-lucide="users" class="w-4 h-4"></i></span>
        </div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display">${filteredEmployees.length} Empleados</h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-0.5">En la selección actual</p>
      </div>

      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">En Turno Ahora</span>
          <span class="p-1.5 rounded-xl bg-emerald-50 text-emerald-600"><i data-lucide="clock" class="w-4 h-4"></i></span>
        </div>
        <h2 class="text-2xl font-extrabold text-emerald-600 font-display">${inShiftCount} en Mostrador</h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-0.5">Atención activa</p>
      </div>

      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">En Franco</span>
          <span class="p-1.5 rounded-xl bg-amber-50 text-amber-600"><i data-lucide="coffee" class="w-4 h-4"></i></span>
        </div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display">${offDutyCount} Francos</h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-0.5">Descanso programado</p>
      </div>

      <div class="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-gray-500">Masa Salarial Mensual</span>
          <span class="p-1.5 rounded-xl bg-blue-50 text-blue-600"><i data-lucide="wallet" class="w-4 h-4"></i></span>
        </div>
        <h2 class="text-2xl font-extrabold text-gray-900 font-display">$ ${(totalPayroll/1000).toLocaleString('es-AR')}k</h2>
        <p class="text-[11px] font-semibold text-gray-400 mt-0.5">Presupuesto mensual</p>
      </div>
    </div>

    <!-- Pestañas de Vista: Plantel vs Cronograma Semanal -->
    <div class="bg-white p-3 rounded-3xl border border-gray-100 shadow-sm mb-6 flex items-center gap-3">
      <button onclick="switchEmployeesTab('plantel')" class="px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${activeTab === 'plantel' ? 'bg-uva text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
        <i data-lucide="badge-check" class="w-4 h-4"></i>
        <span>Nómina de Personal (${filteredEmployees.length})</span>
      </button>
      <button onclick="switchEmployeesTab('turnos')" class="px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${activeTab === 'turnos' ? 'bg-uva text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
        <i data-lucide="calendar-days" class="w-4 h-4"></i>
        <span>Cronograma Semanal de Turnos</span>
      </button>
    </div>

    ${activeTab === 'plantel' ? `
      <!-- TAB 1: NÓMINA DE PERSONAL -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="admin-table">
            <thead>
              <tr>
                <th>EMPLEADO</th>
                <th>SUCURSAL ASIGNADA</th>
                <th>PUESTO / ROL</th>
                <th>TURNO HABITUAL</th>
                <th>SUELDO BRUTO</th>
                <th>TELÉFONO / DNI</th>
                <th>ESTADO ACTUAL</th>
                <th class="text-right">ACCIONES</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50 text-xs font-medium text-gray-700">
              ${filteredEmployees.map(emp => {
                const bInfo = UVA_STATE.branches.find(b => b.id === emp.branchId);
                return `
                  <tr class="hover:bg-gray-50/80 transition-colors">
                    <td>
                      <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-2xl bg-purple-100 text-uva font-black text-xs flex items-center justify-center font-display shrink-0">
                          ${emp.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p class="font-bold text-gray-900 text-sm font-display">${emp.name}</p>
                          <p class="text-[10px] text-gray-400 font-mono">${emp.id}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="inline-flex items-center gap-1.5 font-bold text-gray-900">
                        <span class="w-2 h-2 rounded-full" style="background-color: ${bInfo ? bInfo.color : '#6B3B82'};"></span>
                        <span>${bInfo ? bInfo.shortName : emp.branchId}</span>
                      </span>
                    </td>
                    <td>
                      <span class="font-bold text-gray-800">${emp.role}</span>
                    </td>
                    <td>
                      <span class="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-xl text-[10px] font-semibold">${emp.shift}</span>
                    </td>
                    <td class="font-extrabold text-gray-900 font-mono text-xs">
                      $ ${emp.salary.toLocaleString('es-AR')}
                    </td>
                    <td>
                      <p class="text-gray-900 font-bold">${emp.phone}</p>
                      <p class="text-[10px] text-gray-400">DNI: ${emp.dni}</p>
                    </td>
                    <td>
                      <button
                        onclick="toggleEmployeeStatus('${emp.id}')"
                        class="px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                          emp.status === 'En turno'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100'
                            : 'bg-amber-50 text-amber-700 border border-amber-200/60 hover:bg-amber-100'
                        }"
                      >
                        ${emp.status === 'En turno' ? '🟢 En turno' : '⚪ Franco'}
                      </button>
                    </td>
                    <td class="text-right">
                      <div class="inline-flex items-center gap-1">
                        <button
                          onclick="openEditEmployeeModal('${emp.id}')"
                          class="px-2.5 py-1.5 hover:bg-purple-50 rounded-xl text-uva font-bold text-xs inline-flex items-center gap-1.5 transition-all cursor-pointer border border-transparent hover:border-purple-200"
                          title="Editar datos de ${emp.name}"
                        >
                          <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
                          <span>Editar</span>
                        </button>
                        <button
                          onclick="deleteEmployee('${emp.id}')"
                          class="p-1.5 hover:bg-rose-50 rounded-xl text-gray-400 hover:text-rose-600 transition-all cursor-pointer"
                          title="Eliminar registro de ${emp.name}"
                        >
                          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : `
      <!-- TAB 2: CRONOGRAMA SEMANAL DE TURNOS -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div>
            <h3 class="text-sm font-extrabold text-gray-900 font-display">Matriz Semanal de Cobertura</h3>
            <p class="text-xs text-gray-400 font-semibold mt-0.5">Turnos Mañana (07-15h), Tarde (15-23h) y Noche (23-07h) en sucursales 24hs</p>
          </div>
          <span class="text-xs font-bold bg-purple-50 text-uva px-3 py-1.5 rounded-xl border border-purple-200/60">
            Cobertura 100% Garantizada
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-7 gap-3">
          ${UVA_STATE.shiftsCalendar.map((s, idx) => `
            <div class="bg-gray-50/70 border border-gray-200/70 rounded-2xl p-3 flex flex-col justify-between">
              <div class="pb-2 mb-2 border-b border-gray-200 flex items-center justify-between">
                <span class="text-xs font-black text-gray-900 font-display">${s.day}</span>
                <span class="text-[9px] font-bold text-gray-400 font-mono">${idx+8}/09</span>
              </div>

              <div class="space-y-2 text-[11px]">
                <!-- Turno Mañana -->
                <div class="bg-white p-2 rounded-xl border border-gray-100 shadow-2xs">
                  <div class="flex items-center justify-between text-[9px] font-extrabold text-amber-600 mb-0.5">
                    <span>☀️ MAÑANA (07-15h)</span>
                  </div>
                  <p class="font-bold text-gray-800 text-[10px] leading-tight">${s.shiftMorning}</p>
                </div>

                <!-- Turno Tarde -->
                <div class="bg-white p-2 rounded-xl border border-gray-100 shadow-2xs">
                  <div class="flex items-center justify-between text-[9px] font-extrabold text-blue-600 mb-0.5">
                    <span>🌇 TARDE (15-23h)</span>
                  </div>
                  <p class="font-bold text-gray-800 text-[10px] leading-tight">${s.shiftAfternoon}</p>
                </div>

                <!-- Turno Noche -->
                <div class="bg-white p-2 rounded-xl border border-gray-100 shadow-2xs">
                  <div class="flex items-center justify-between text-[9px] font-extrabold text-purple-600 mb-0.5">
                    <span>🌙 NOCHE (23-07h)</span>
                  </div>
                  <p class="font-bold text-gray-800 text-[10px] leading-tight">${s.shiftNight}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `}

    <!-- Modal para Nuevo Empleado -->
    <div id="modalNewEmployee" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs hidden items-center justify-center p-4">
      <div class="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-gray-100 animate-scale-in">
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-uva/10 text-uva"><i data-lucide="user-plus" class="w-5 h-5"></i></span>
            <h3 class="text-base font-extrabold text-gray-900 font-display">Alta de Empleado / Turno</h3>
          </div>
          <button onclick="closeNewEmployeeModal()" class="p-1.5 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-900"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>

        <form onsubmit="saveNewEmployee(event)" class="space-y-3.5 text-xs font-medium">
          <div>
            <label class="font-bold text-gray-700 block mb-1">Nombre y Apellido *</label>
            <input type="text" id="formEmpName" required placeholder="Ej: Mariano López" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">DNI</label>
              <input type="text" id="formEmpDni" placeholder="Ej: 41.290.812" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono" />
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Teléfono</label>
              <input type="text" id="formEmpPhone" placeholder="11-..." class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Sucursal Asignada *</label>
              <select id="formEmpBranch" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
                ${UVA_STATE.branches.map(b => `<option value="${b.id}">📍 ${b.name}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Puesto / Rol *</label>
              <select id="formEmpRole" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
                <option value="Cajero Mostrador">Cajero Mostrador</option>
                <option value="Encargado de Sucursal">Encargado de Sucursal</option>
                <option value="Cajero / Repositor">Cajero / Repositor</option>
                <option value="Repositor Nocturno">Repositor Nocturno</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Turno Habitual *</label>
              <select id="formEmpShift" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold">
                <option value="Mañana (07:00 a 15:00)">Mañana (07:00 a 15:00)</option>
                <option value="Tarde (15:00 a 23:00)">Tarde (15:00 a 23:00)</option>
                <option value="Noche (23:00 a 07:00)">Noche (23:00 a 07:00)</option>
              </select>
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Sueldo Mensual ($)</label>
              <input type="number" id="formEmpSalary" placeholder="480000" min="1" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono font-bold" />
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
            <button type="button" onclick="closeNewEmployeeModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100">Cancelar</button>
            <button type="submit" class="px-5 py-2 rounded-xl bg-uva hover:bg-uva-dark text-white text-xs font-bold shadow-xs">Guardar Empleado</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal para Editar Empleado -->
    <div id="modalEditEmployee" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs hidden items-center justify-center p-4">
      <div class="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-gray-100 animate-scale-in">
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-uva/10 text-uva"><i data-lucide="user-cog" class="w-5 h-5"></i></span>
            <div>
              <h3 class="text-base font-extrabold text-gray-900 font-display">Editar Datos de Empleado</h3>
              <p class="text-[10px] text-gray-400 font-mono" id="editEmpIdBadge">EMP-01</p>
            </div>
          </div>
          <button onclick="closeEditEmployeeModal()" class="p-1.5 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-900"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>

        <form onsubmit="saveEditEmployee(event)" class="space-y-3.5 text-xs font-medium">
          <input type="hidden" id="formEditEmpId" />

          <div>
            <label class="font-bold text-gray-700 block mb-1">Nombre y Apellido *</label>
            <input type="text" id="formEditEmpName" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">DNI</label>
              <input type="text" id="formEditEmpDni" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono" />
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Teléfono</label>
              <input type="text" id="formEditEmpPhone" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Sucursal Asignada *</label>
              <select id="formEditEmpBranch" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
                ${UVA_STATE.branches.map(b => `<option value="${b.id}">📍 ${b.name}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Puesto / Rol *</label>
              <select id="formEditEmpRole" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
                <option value="Cajero Mostrador">Cajero Mostrador</option>
                <option value="Encargado de Sucursal">Encargado de Sucursal</option>
                <option value="Cajero / Repositor">Cajero / Repositor</option>
                <option value="Repositor Nocturno">Repositor Nocturno</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Turno Habitual *</label>
              <select id="formEditEmpShift" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold">
                <option value="Mañana (07:00 a 15:00)">Mañana (07:00 a 15:00)</option>
                <option value="Tarde (15:00 a 23:00)">Tarde (15:00 a 23:00)</option>
                <option value="Noche (23:00 a 07:00)">Noche (23:00 a 07:00)</option>
              </select>
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Sueldo Mensual ($)</label>
              <input type="number" id="formEditEmpSalary" min="1" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono font-bold" />
            </div>
          </div>

          <div>
            <label class="font-bold text-gray-700 block mb-1">Estado de Asistencia / Turno</label>
            <select id="formEditEmpStatus" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold">
              <option value="En turno">🟢 En turno (Atención en mostrador)</option>
              <option value="Franco">⚪ Franco (Día de descanso)</option>
              <option value="Vacaciones">🏖️ Vacaciones / Licencia</option>
            </select>
          </div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
            <button type="button" onclick="closeEditEmployeeModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100">Cancelar</button>
            <button type="submit" class="px-5 py-2 rounded-xl bg-uva hover:bg-uva-dark text-white text-xs font-bold shadow-xs">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.filterEmployeesBranch = function(bId) {
  UVA_STATE.employeesBranch = bId;
  renderEmployeesView(document.getElementById('appMainView'));
};

window.switchEmployeesTab = function(tab) {
  UVA_STATE.employeesTab = tab;
  renderEmployeesView(document.getElementById('appMainView'));
};

window.openNewEmployeeModal = function() {
  document.getElementById('modalNewEmployee')?.classList.remove('hidden');
  document.getElementById('modalNewEmployee')?.classList.add('flex');
};

window.closeNewEmployeeModal = function() {
  document.getElementById('modalNewEmployee')?.classList.add('hidden');
  document.getElementById('modalNewEmployee')?.classList.remove('flex');
};

window.saveNewEmployee = function(e) {
  e.preventDefault();
  const name = document.getElementById('formEmpName').value;
  const dni = document.getElementById('formEmpDni').value || 'Sin registrar';
  const phone = document.getElementById('formEmpPhone').value || 'Sin teléfono';
  const branchId = document.getElementById('formEmpBranch').value;
  const role = document.getElementById('formEmpRole').value;
  const shift = document.getElementById('formEmpShift').value;
  const salary = parseInt(document.getElementById('formEmpSalary').value) || 480000;

  UVA_STATE.employees.push({
    id: `EMP-${(UVA_STATE.employees.length + 1).toString().padStart(2, '0')}`,
    name,
    branchId,
    role,
    shift,
    salary,
    phone,
    dni,
    status: 'En turno'
  });

  closeNewEmployeeModal();
  renderEmployeesView(document.getElementById('appMainView'));
};

window.openEditEmployeeModal = function(empId) {
  const emp = UVA_STATE.employees.find(x => x.id === empId);
  if (!emp) return;

  document.getElementById('formEditEmpId').value = emp.id;
  document.getElementById('editEmpIdBadge').textContent = emp.id;
  document.getElementById('formEditEmpName').value = emp.name;
  document.getElementById('formEditEmpDni').value = emp.dni !== 'Sin registrar' ? emp.dni : '';
  document.getElementById('formEditEmpPhone').value = emp.phone !== 'Sin teléfono' ? emp.phone : '';
  document.getElementById('formEditEmpBranch').value = emp.branchId;
  document.getElementById('formEditEmpRole').value = emp.role;
  document.getElementById('formEditEmpShift').value = emp.shift;
  document.getElementById('formEditEmpSalary').value = emp.salary;
  document.getElementById('formEditEmpStatus').value = emp.status;

  document.getElementById('modalEditEmployee')?.classList.remove('hidden');
  document.getElementById('modalEditEmployee')?.classList.add('flex');
};

window.closeEditEmployeeModal = function() {
  document.getElementById('modalEditEmployee')?.classList.add('hidden');
  document.getElementById('modalEditEmployee')?.classList.remove('flex');
};

window.saveEditEmployee = function(e) {
  e.preventDefault();
  const empId = document.getElementById('formEditEmpId').value;
  const emp = UVA_STATE.employees.find(x => x.id === empId);
  if (!emp) return;

  emp.name = document.getElementById('formEditEmpName').value;
  emp.dni = document.getElementById('formEditEmpDni').value || 'Sin registrar';
  emp.phone = document.getElementById('formEditEmpPhone').value || 'Sin teléfono';
  emp.branchId = document.getElementById('formEditEmpBranch').value;
  emp.role = document.getElementById('formEditEmpRole').value;
  emp.shift = document.getElementById('formEditEmpShift').value;
  emp.salary = parseInt(document.getElementById('formEditEmpSalary').value) || 480000;
  emp.status = document.getElementById('formEditEmpStatus').value;

  closeEditEmployeeModal();
  renderEmployeesView(document.getElementById('appMainView'));
};

window.deleteEmployee = function(empId) {
  const emp = UVA_STATE.employees.find(x => x.id === empId);
  if (!emp) return;
  if (confirm(`¿Estás seguro de dar de baja al empleado ${emp.name}?`)) {
    UVA_STATE.employees = UVA_STATE.employees.filter(x => x.id !== empId);
    renderEmployeesView(document.getElementById('appMainView'));
  }
};

window.toggleEmployeeStatus = function(empId) {
  const emp = UVA_STATE.employees.find(x => x.id === empId);
  if (emp) {
    emp.status = emp.status === 'En turno' ? 'Franco' : 'En turno';
    renderEmployeesView(document.getElementById('appMainView'));
  }
};


// =============================================================================
// 10. VISTA: REPORTES Y GENERADOR DE CSV
// =============================================================================

function renderReportsView(container) {
  const rf = UVA_STATE.reportsFilter;
  const isAll = rf.branchId === 'all';
  const curBranch = isAll ? null : UVA_STATE.branches.find(b => b.id === rf.branchId);

  // Obtener vista previa según el tipo de reporte
  let previewRows = [];
  let previewHeaders = [];

  if (rf.reportType === 'ventas') {
    previewHeaders = ['N° Ticket', 'Fecha', 'Sucursal', 'Cliente / Canal', 'Artículos', 'Medio de Pago', 'Total ($)'];
    previewRows = UVA_STATE.orders.map(o => [
      o.id,
      `${o.date} ${o.time}`,
      curBranch ? curBranch.shortName : 'Sucursal Belgrano',
      o.customer,
      o.itemsSummary,
      o.paymentMethod,
      `$ ${o.total.toLocaleString('es-AR')}`
    ]);
  } else if (rf.reportType === 'gastos') {
    previewHeaders = ['N° Comprobante', 'Fecha', 'Sucursal', 'Categoría', 'Descripción', 'Medio de Pago', 'Monto ($)', 'Estado'];
    previewRows = UVA_STATE.expenses
      .filter(e => isAll || e.branchId === rf.branchId)
      .map(e => {
        const b = UVA_STATE.branches.find(x => x.id === e.branchId);
        return [
          e.invoiceNum,
          e.date,
          b ? b.shortName : e.branchId,
          e.category,
          e.description,
          e.paymentMethod,
          `$ ${e.amount.toLocaleString('es-AR')}`,
          e.status
        ];
      });
  } else if (rf.reportType === 'inventario') {
    previewHeaders = ['Código', 'Código de Barras', 'Producto', 'Categoría', 'Stock Físico', 'Precio Minorista', 'Precio Mayorista'];
    previewRows = UVA_STATE.products.map(p => [
      p.id,
      p.barcode,
      p.name,
      p.category,
      `${p.stock} un.`,
      `$ ${p.price.toLocaleString('es-AR')}`,
      `$ ${p.wholesalePrice.toLocaleString('es-AR')}`
    ]);
  } else {
    // Auditoría de Stock
    previewHeaders = ['Fecha y Hora', 'Producto', 'Código', 'Tipo', 'Cantidad', 'Stock Resultante', 'Motivo'];
    previewRows = UVA_STATE.stockHistory.map(h => [
      h.datetime,
      h.productName,
      h.code,
      h.type,
      h.qty,
      h.stockResult,
      h.reason
    ]);
  }

  container.innerHTML = `
    <!-- Header de Reportes -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 font-display">Reportes y Exportación Contable</h1>
        <p class="text-xs font-semibold text-gray-400 mt-1">Generá balances y descargas en formato CSV para Microsoft Excel o Google Sheets</p>
      </div>

      <!-- Botón de Descarga Real CSV -->
      <button
        onclick="exportToCsv()"
        class="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
      >
        <i data-lucide="download" class="w-4 h-4"></i>
        <span>📥 Descargar Reporte CSV</span>
      </button>
    </div>

    <!-- Panel de Filtros para el Reporte -->
    <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-6">
      <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Parámetros de Generación de Reporte</h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Tipo de Reporte -->
        <div>
          <label class="text-xs font-bold text-gray-700 block mb-1.5">Tipo de Información *</label>
          <select id="repType" onchange="updateReportsFilter()" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3.5 py-2.5 text-xs font-bold text-gray-900 cursor-pointer">
            <option value="ventas" ${rf.reportType === 'ventas' ? 'selected' : ''}>📈 Ventas y Facturación (Tickets)</option>
            <option value="gastos" ${rf.reportType === 'gastos' ? 'selected' : ''}>💸 Gastos Operativos (Egresos)</option>
            <option value="inventario" ${rf.reportType === 'inventario' ? 'selected' : ''}>📦 Inventario y Stock Valorizado</option>
            <option value="auditoria" ${rf.reportType === 'auditoria' ? 'selected' : ''}>🔍 Auditoría de Movimientos Stock</option>
          </select>
        </div>

        <!-- Sucursal -->
        <div>
          <label class="text-xs font-bold text-gray-700 block mb-1.5">Sucursal *</label>
          <select id="repBranch" onchange="updateReportsFilter()" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3.5 py-2.5 text-xs font-bold text-gray-900 cursor-pointer">
            <option value="all" ${rf.branchId === 'all' ? 'selected' : ''}>🌐 Todas las sucursales (Consolidado)</option>
            ${UVA_STATE.branches.map(b => `
              <option value="${b.id}" ${rf.branchId === b.id ? 'selected' : ''}>📍 ${b.name}</option>
            `).join('')}
          </select>
        </div>

        <!-- Fecha Desde -->
        <div>
          <label class="text-xs font-bold text-gray-700 block mb-1.5">Fecha Desde</label>
          <input
            type="date"
            id="repDateFrom"
            value="${rf.dateFrom}"
            onchange="updateReportsFilter()"
            class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3.5 py-2 text-xs font-bold text-gray-800"
          />
        </div>

        <!-- Fecha Hasta -->
        <div>
          <label class="text-xs font-bold text-gray-700 block mb-1.5">Fecha Hasta</label>
          <input
            type="date"
            id="repDateTo"
            value="${rf.dateTo}"
            onchange="updateReportsFilter()"
            class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3.5 py-2 text-xs font-bold text-gray-800"
          />
        </div>
      </div>
    </div>

    <!-- Vista Previa de Datos a Exportar -->
    <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div class="p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <i data-lucide="table" class="w-4 h-4 text-uva"></i>
          <h3 class="text-sm font-bold text-gray-900 font-display">Vista Previa de Filas a Exportar</h3>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-extrabold text-uva bg-purple-50 px-3 py-1 rounded-xl border border-purple-200">
            ${previewRows.length} registros encontrados
          </span>
          <button onclick="exportToCsv()" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline cursor-pointer">
            Descargar archivo .csv
          </button>
        </div>
      </div>

      <div class="overflow-x-auto max-h-96">
        <table class="admin-table">
          <thead>
            <tr>
              ${previewHeaders.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50 text-xs font-medium text-gray-700">
            ${previewRows.map(row => `
              <tr class="hover:bg-gray-50/80">
                ${row.map(cell => `<td class="max-w-xs truncate">${cell}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.updateReportsFilter = function() {
  UVA_STATE.reportsFilter.reportType = document.getElementById('repType').value;
  UVA_STATE.reportsFilter.branchId = document.getElementById('repBranch').value;
  UVA_STATE.reportsFilter.dateFrom = document.getElementById('repDateFrom').value;
  UVA_STATE.reportsFilter.dateTo = document.getElementById('repDateTo').value;
  renderReportsView(document.getElementById('appMainView'));
};

window.exportToCsv = function() {
  const rf = UVA_STATE.reportsFilter;
  const isAll = rf.branchId === 'all';
  const curBranch = isAll ? null : UVA_STATE.branches.find(b => b.id === rf.branchId);

  let csvRows = [];
  let filename = `reporte_kioscos_uva_${rf.reportType}_${rf.dateFrom}_a_${rf.dateTo}.csv`;

  if (rf.reportType === 'ventas') {
    csvRows.push(['N_ORDEN', 'FECHA', 'SUCURSAL', 'CLIENTE', 'CANAL', 'ARTICULOS', 'METODO_PAGO', 'TOTAL_PESOS']);
    UVA_STATE.orders.forEach(o => {
      csvRows.push([
        o.id,
        `${o.date} ${o.time}`,
        curBranch ? curBranch.name : 'Sucursal Belgrano',
        o.customer,
        o.channel,
        o.itemsSummary.replace(/,/g, ' + '),
        o.paymentMethod,
        o.total
      ]);
    });
  } else if (rf.reportType === 'gastos') {
    csvRows.push(['COMPROBANTE', 'FECHA', 'SUCURSAL', 'CATEGORIA', 'DESCRIPCION', 'METODO_PAGO', 'MONTO_PESOS', 'ESTADO']);
    UVA_STATE.expenses
      .filter(e => isAll || e.branchId === rf.branchId)
      .forEach(e => {
        const b = UVA_STATE.branches.find(x => x.id === e.branchId);
        csvRows.push([
          e.invoiceNum,
          e.date,
          b ? b.name : e.branchId,
          e.category,
          e.description.replace(/,/g, ' '),
          e.paymentMethod,
          e.amount,
          e.status
        ]);
      });
  } else if (rf.reportType === 'inventario') {
    csvRows.push(['CODIGO', 'CODIGO_BARRAS', 'PRODUCTO', 'CATEGORIA', 'STOCK_UNIDADES', 'PRECIO_MINORISTA', 'PRECIO_MAYORISTA']);
    UVA_STATE.products.forEach(p => {
      csvRows.push([
        p.id,
        p.barcode,
        p.name.replace(/,/g, ' '),
        p.category,
        p.stock,
        p.price,
        p.wholesalePrice
      ]);
    });
  } else {
    csvRows.push(['FECHA_HORA', 'PRODUCTO', 'CODIGO', 'TIPO_MOVIMIENTO', 'CANTIDAD', 'STOCK_RESULTANTE', 'MOTIVO']);
    UVA_STATE.stockHistory.forEach(h => {
      csvRows.push([
        h.datetime,
        h.productName.replace(/,/g, ' '),
        h.code,
        h.type,
        h.qty,
        h.stockResult,
        h.reason.replace(/,/g, ' ')
      ]);
    });
  }

  // Convertir a texto CSV con comillas y coma separadora
  const csvContent = csvRows.map(e => e.map(val => `"${val}"`).join(",")).join("\r\n");

  // Añadir UTF-8 BOM (\uFEFF) para que Excel lo abra directamente con tildes y caracteres correctos
  const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


// =============================================================================
// 11. VISTA: PRECIO GÓNDOLA (Cartelería con Selección de Precios para Imprimir)
// =============================================================================

function renderGondolaView(container) {
  const cfg = UVA_STATE.gondolaConfig;

  // Filtrar productos
  let productsToPrint = UVA_STATE.products;
  if (cfg.category !== 'all') {
    productsToPrint = productsToPrint.filter(p => p.category === cfg.category);
  }

  // Calcular precio según el modo seleccionado
  function getTagPrice(p) {
    if (cfg.priceType === 'mayorista') {
      return p.wholesalePrice || Math.round(p.price * 0.85);
    } else if (cfg.priceType === 'promocion') {
      return Math.round(p.price * 0.75); // 25% OFF
    } else if (cfg.priceType === 'personalizado') {
      const factor = 1 + (cfg.customPercent / 100);
      return Math.round(p.price * factor);
    }
    return p.price; // minorista
  }

  function getPriceBadgeLabel() {
    if (cfg.priceType === 'mayorista') return 'PRECIO MAYORISTA (PACK)';
    if (cfg.priceType === 'promocion') return 'OFERTA ESPECIAL (-25%)';
    if (cfg.priceType === 'personalizado') return `PRECIO AJUSTADO (${cfg.customPercent > 0 ? '+' : ''}${cfg.customPercent}%)`;
    return 'PRECIO MINORISTA (PÚBLICO)';
  }

  container.innerHTML = `
    <!-- Header de Precio Góndola -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 no-print">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 font-display">Cartelería de Precio Góndola</h1>
        <p class="text-xs font-semibold text-gray-400 mt-1">Elegí el tipo de precio a exhibir, tamaño y mandá a imprimir con códigos de barra</p>
      </div>

      <!-- Botón Imprimir Carteles -->
      <button
        onclick="printGondolaTags()"
        class="px-5 py-3 rounded-2xl bg-uva hover:bg-uva-dark text-white text-xs font-bold flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer print-include"
      >
        <i data-lucide="printer" class="w-4 h-4"></i>
        <span>🖨️ Imprimir Carteles Góndola</span>
      </button>
    </div>

    <!-- Barra de Selección de Tipo de Precio y Filtros -->
    <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-6 no-print">
      <div class="mb-4">
        <label class="text-xs font-extrabold text-gray-800 uppercase tracking-wider block mb-2">
          1. Elegí qué precio querés imprimir en los carteles:
        </label>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <!-- Precio Minorista -->
          <button
            onclick="setGondolaPriceType('minorista')"
            class="p-4 rounded-2xl border text-left transition-all cursor-pointer ${cfg.priceType === 'minorista' ? 'border-uva ring-2 ring-uva/20 bg-purple-50/50' : 'border-gray-200 hover:bg-gray-50'}"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-black text-gray-900">Minorista (Público)</span>
              ${cfg.priceType === 'minorista' ? '<span class="text-uva font-bold">✓ Activo</span>' : ''}
            </div>
            <p class="text-[11px] text-gray-500 font-medium">Precio estándar para venta en mostrador de kiosco</p>
          </button>

          <!-- Precio Mayorista -->
          <button
            onclick="setGondolaPriceType('mayorista')"
            class="p-4 rounded-2xl border text-left transition-all cursor-pointer ${cfg.priceType === 'mayorista' ? 'border-uva ring-2 ring-uva/20 bg-purple-50/50' : 'border-gray-200 hover:bg-gray-50'}"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-black text-gray-900">Mayorista / Bulto</span>
              ${cfg.priceType === 'mayorista' ? '<span class="text-uva font-bold">✓ Activo</span>' : ''}
            </div>
            <p class="text-[11px] text-gray-500 font-medium">Precio con descuento (-15%) para compras por caja</p>
          </button>

          <!-- Promoción Especial -->
          <button
            onclick="setGondolaPriceType('promocion')"
            class="p-4 rounded-2xl border text-left transition-all cursor-pointer ${cfg.priceType === 'promocion' ? 'border-uva ring-2 ring-uva/20 bg-purple-50/50' : 'border-gray-200 hover:bg-gray-50'}"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs font-black text-amber-600">Oferta Especial (-25%)</span>
              ${cfg.priceType === 'promocion' ? '<span class="text-amber-600 font-bold">✓ Activo</span>' : ''}
            </div>
            <p class="text-[11px] text-gray-500 font-medium">Carteles con precio rebajado para liquidación de lote</p>
          </button>

          <!-- Precio Personalizado -->
          <div
            class="p-4 rounded-2xl border transition-all ${cfg.priceType === 'personalizado' ? 'border-uva ring-2 ring-uva/20 bg-purple-50/50' : 'border-gray-200'}"
          >
            <div class="flex items-center justify-between mb-1">
              <button onclick="setGondolaPriceType('personalizado')" class="text-xs font-black text-gray-900 cursor-pointer">
                Personalizado (+/- %)
              </button>
              ${cfg.priceType === 'personalizado' ? '<span class="text-uva font-bold text-xs">✓</span>' : ''}
            </div>
            <div class="flex items-center gap-2 mt-2">
              <input
                type="number"
                value="${cfg.customPercent}"
                onchange="updateGondolaCustomPercent(this.value)"
                class="w-20 bg-white border border-gray-300 rounded-xl px-2 py-1 text-xs font-bold font-mono"
              />
              <span class="text-xs font-bold text-gray-600">% margen</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtro de Categoría y Configuración de Etiquetas -->
      <div class="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <label class="text-xs font-bold text-gray-600">Filtrar por Rubro:</label>
          <select id="gondolaCatSelect" onchange="filterGondolaCategory(this.value)" class="text-xs font-bold bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-gray-900 cursor-pointer">
            <option value="all" ${cfg.category === 'all' ? 'selected' : ''}>Todos los productos (${UVA_STATE.products.length})</option>
            ${UVA_STATE.categories.map(c => `
              <option value="${c.name}" ${cfg.category === c.name ? 'selected' : ''}>${c.name}</option>
            `).join('')}
          </select>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs font-semibold text-gray-400">Carteles listos para imprimir:</span>
          <span class="text-xs font-extrabold text-uva bg-purple-50 px-3 py-1 rounded-xl border border-purple-200">
            ${productsToPrint.length} etiquetas
          </span>
        </div>
      </div>
    </div>

    <!-- Grilla de Etiquetas Imprimibles para Góndola -->
    <div class="gondola-print-container">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gondola-print-grid">
        ${productsToPrint.map(p => {
          const finalPrice = getTagPrice(p);
          const badgeLabel = getPriceBadgeLabel();

          return `
            <div class="gondola-tag bg-white p-4 rounded-2xl border-2 border-gray-900 text-center shadow-xs flex flex-col justify-between relative overflow-hidden">
              <!-- Franja Superior Kioscos UVA -->
              <div class="bg-gray-900 text-white py-1 px-2 -mx-4 -mt-4 mb-2 flex items-center justify-between">
                <span class="text-[9px] font-black tracking-widest font-display">KIOSCOS UVA</span>
                <span class="text-[8px] font-bold uppercase tracking-wider text-amber-300">Florencio Varela</span>
              </div>

              <!-- Nombre del Producto -->
              <div class="my-1">
                <p class="font-extrabold text-xs text-gray-900 uppercase leading-snug line-clamp-2">
                  ${p.name}
                </p>
                <p class="text-[9px] font-semibold text-gray-400 mt-0.5">${p.category}</p>
              </div>

              <!-- Precio Gigante -->
              <div class="my-2 py-1.5 bg-gray-50 border border-gray-200 rounded-xl">
                <span class="text-3xl font-black font-display text-gray-950 tracking-tight">
                  $ ${finalPrice.toLocaleString('es-AR')}
                </span>
                <span class="block text-[8px] font-extrabold tracking-wider text-gray-600 uppercase mt-0.5">
                  ${badgeLabel}
                </span>
              </div>

              <!-- Código de Barras Simulado para Góndola -->
              <div class="pt-2 border-t border-gray-200 flex flex-col items-center">
                <!-- Barras verticales CSS -->
                <div class="h-8 flex items-center justify-center gap-0.5 px-2 w-full max-w-[170px] overflow-hidden">
                  ${Array.from({ length: 32 }).map((_, i) => `
                    <span class="h-full inline-block bg-black" style="width: ${((i * 7) % 3) + 1}px; margin-right: ${((i * 3) % 2)}px;"></span>
                  `).join('')}
                </div>
                <span class="text-[9px] font-mono font-bold text-gray-900 tracking-widest mt-0.5">
                  ${p.barcode}
                </span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.setGondolaPriceType = function(type) {
  UVA_STATE.gondolaConfig.priceType = type;
  renderGondolaView(document.getElementById('appMainView'));
};

window.updateGondolaCustomPercent = function(val) {
  UVA_STATE.gondolaConfig.customPercent = parseInt(val) || 0;
  renderGondolaView(document.getElementById('appMainView'));
};

window.filterGondolaCategory = function(cat) {
  UVA_STATE.gondolaConfig.category = cat;
  renderGondolaView(document.getElementById('appMainView'));
};

window.printGondolaTags = function() {
  window.print();
};


// =============================================================================
// 12. VISTA: CONFIGURACIÓN & GESTIÓN DE USUARIOS DE LAS SUCURSALES
// =============================================================================

function renderConfigView(container) {
  const activeTab = UVA_STATE.configActiveTab || 'usuarios';

  container.innerHTML = `
    <!-- Header de Configuración -->
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 font-display">Configuración del Sistema</h1>
        <p class="text-xs font-semibold text-gray-400 mt-1">Gestión de usuarios y accesos a sucursales, parámetros comerciales y seguridad</p>
      </div>

      ${activeTab === 'usuarios' ? `
        <button onclick="openNewUserModal()" class="px-4 py-2.5 rounded-2xl bg-uva hover:bg-uva-dark text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer">
          <i data-lucide="user-plus" class="w-4 h-4"></i>
          <span>+ Nuevo Usuario de Sucursal</span>
        </button>
      ` : ''}
    </div>

    <!-- Pestañas de Configuración -->
    <div class="bg-white p-3 rounded-3xl border border-gray-100 shadow-sm mb-6 flex items-center gap-3">
      <button onclick="switchConfigTab('usuarios')" class="px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${activeTab === 'usuarios' ? 'bg-uva text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
        <i data-lucide="shield-check" class="w-4 h-4"></i>
        <span>Usuarios & Roles de Sucursal (${UVA_STATE.users.length})</span>
      </button>
      <button onclick="switchConfigTab('general')" class="px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${activeTab === 'general' ? 'bg-uva text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}">
        <i data-lucide="sliders" class="w-4 h-4"></i>
        <span>Parámetros de la Red Kioscos UVA</span>
      </button>
    </div>

    ${activeTab === 'usuarios' ? `
      <!-- TAB 1: GESTIÓN DE USUARIOS DE LAS SUCURSALES -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 class="text-sm font-extrabold text-gray-900 font-display">Cuentas de Acceso al ERP & POS</h3>
            <p class="text-xs text-gray-400 font-semibold mt-0.5">Control de credenciales, PIN y permisos por sede</p>
          </div>
          <span class="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-xl">
            ${UVA_STATE.users.filter(u => u.status === 'Activo').length} usuarios activos
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="admin-table">
            <thead>
              <tr>
                <th>USUARIO</th>
                <th>NOMBRE COMPLETO</th>
                <th>ROL ASIGNADO</th>
                <th>SUCURSAL ASIGNADA</th>
                <th>PIN ACCESO</th>
                <th>ÚLTIMO ACCESO</th>
                <th>ESTADO</th>
                <th class="text-right">ACCIONES</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50 text-xs font-medium text-gray-700">
              ${UVA_STATE.users.map(u => {
                const bInfo = u.branchId === 'all' ? null : UVA_STATE.branches.find(b => b.id === u.branchId);
                return `
                  <tr class="hover:bg-gray-50/80 transition-colors">
                    <td>
                      <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl bg-purple-100 text-uva font-bold text-xs flex items-center justify-center font-mono shrink-0">
                          ${u.username.slice(0, 2).toUpperCase()}
                        </div>
                        <span class="font-mono font-bold text-gray-900">@${u.username}</span>
                      </div>
                    </td>
                    <td class="font-bold text-gray-900 font-display">${u.name}</td>
                    <td>
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        u.role === 'admin' ? 'bg-purple-100 text-uva border border-purple-200'
                        : u.role === 'encargado' ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'bg-gray-100 text-gray-700'
                      }">
                        ${u.roleLabel || u.role}
                      </span>
                    </td>
                    <td>
                      ${u.branchId === 'all' ? `
                        <span class="font-bold text-uva bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200/50">
                          🌐 Red UVA (Todas)
                        </span>
                      ` : `
                        <span class="inline-flex items-center gap-1.5 font-bold text-gray-900">
                          <span class="w-2 h-2 rounded-full" style="background-color: ${bInfo ? bInfo.color : '#6B3B82'};"></span>
                          <span>${bInfo ? bInfo.shortName : u.branchId}</span>
                        </span>
                      `}
                    </td>
                    <td>
                      <span class="font-mono text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md">••••</span>
                    </td>
                    <td class="text-gray-500 font-semibold">${u.lastLogin}</td>
                    <td>
                      <button
                        onclick="toggleUserStatus('${u.id}')"
                        class="px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                          u.status === 'Activo'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100'
                            : 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200'
                        }"
                      >
                        ${u.status === 'Activo' ? '✓ Activo' : '⚪ Inactivo'}
                      </button>
                    </td>
                    <td class="text-right">
                      <div class="inline-flex items-center gap-1">
                        <button onclick="alert('Restablecer PIN de acceso para ${u.name}')" class="p-1.5 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-uva transition-all" title="Restablecer PIN">
                          <i data-lucide="key" class="w-3.5 h-3.5"></i>
                        </button>
                        ${u.role !== 'admin' ? `
                          <button onclick="deleteUser('${u.id}')" class="p-1.5 hover:bg-rose-50 rounded-xl text-gray-400 hover:text-rose-600 transition-all" title="Eliminar usuario">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                          </button>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : `
      <!-- TAB 2: PARÁMETROS GENERALES DE LA RED -->
      <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm max-w-2xl">
        <h3 class="text-sm font-extrabold text-gray-900 font-display mb-4">Datos de la Razón Social & Kioscos UVA</h3>

        <div class="space-y-4 text-xs font-medium">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Nombre Comercial</label>
              <input type="text" value="Kioscos UVA - Cadena Varela" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-bold" />
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">CUIT Comercial</label>
              <input type="text" value="30-71829340-9" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-mono font-bold" />
            </div>
          </div>

          <div>
            <label class="font-bold text-gray-700 block mb-1">Sede Central / Casa Matriz</label>
            <input type="text" value="Camino General Belgrano 6420, Florencio Varela, Buenos Aires" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Horario de Atención</label>
              <input type="text" value="24 Horas / Turnos Rotativos" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2" />
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Prefijo de Tickets POS</label>
              <input type="text" value="ORD-" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 font-mono" />
            </div>
          </div>

          <div class="pt-4 border-t border-gray-100">
            <button onclick="alert('Configuración comercial guardada con éxito')" class="px-5 py-2.5 rounded-xl bg-uva hover:bg-uva-dark text-white font-bold text-xs shadow-xs cursor-pointer">
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    `}

    <!-- Modal para Nuevo Usuario -->
    <div id="modalNewUser" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs hidden items-center justify-center p-4">
      <div class="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-gray-100 animate-scale-in">
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
          <div class="flex items-center gap-2">
            <span class="p-2 rounded-xl bg-uva/10 text-uva"><i data-lucide="user-plus" class="w-5 h-5"></i></span>
            <h3 class="text-base font-extrabold text-gray-900 font-display">Crear Usuario de Sucursal</h3>
          </div>
          <button onclick="closeNewUserModal()" class="p-1.5 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-900"><i data-lucide="x" class="w-5 h-5"></i></button>
        </div>

        <form onsubmit="saveNewUser(event)" class="space-y-3.5 text-xs font-medium">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Nombre y Apellido *</label>
              <input type="text" id="formUsrName" required placeholder="Ej: Gonzalo Vega" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold" />
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Nombre de Usuario (@login) *</label>
              <input type="text" id="formUsrUsername" required placeholder="gonzalo.caja" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono font-bold" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-gray-700 block mb-1">Rol en el Sistema *</label>
              <select id="formUsrRole" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
                <option value="vendedor">Cajero / Vendedor (POS + Stock)</option>
                <option value="encargado">Encargado de Sucursal</option>
                <option value="admin">Administrador General</option>
              </select>
            </div>
            <div>
              <label class="font-bold text-gray-700 block mb-1">Sucursal Asignada *</label>
              <select id="formUsrBranch" required class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-gray-900">
                <option value="all">🌐 Todas las Sucursales</option>
                ${UVA_STATE.branches.map(b => `<option value="${b.id}">📍 ${b.name}</option>`).join('')}
              </select>
            </div>
          </div>

          <div>
            <label class="font-bold text-gray-700 block mb-1">PIN de Acceso Rápido (4 Dígitos) *</label>
            <input type="password" id="formUsrPin" maxlength="4" required placeholder="••••" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono tracking-widest text-center font-bold" />
          </div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
            <button type="button" onclick="closeNewUserModal()" class="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-100">Cancelar</button>
            <button type="submit" class="px-5 py-2 rounded-xl bg-uva hover:bg-uva-dark text-white text-xs font-bold shadow-xs">Crear Cuenta</button>
          </div>
        </form>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.switchConfigTab = function(tab) {
  UVA_STATE.configActiveTab = tab;
  renderConfigView(document.getElementById('appMainView'));
};

window.openNewUserModal = function() {
  document.getElementById('modalNewUser')?.classList.remove('hidden');
  document.getElementById('modalNewUser')?.classList.add('flex');
};

window.closeNewUserModal = function() {
  document.getElementById('modalNewUser')?.classList.add('hidden');
  document.getElementById('modalNewUser')?.classList.remove('flex');
};

window.saveNewUser = function(e) {
  e.preventDefault();
  const name = document.getElementById('formUsrName').value;
  const username = document.getElementById('formUsrUsername').value.toLowerCase().replace(/@/g, '');
  const role = document.getElementById('formUsrRole').value;
  const branchId = document.getElementById('formUsrBranch').value;
  const pin = document.getElementById('formUsrPin').value || '1234';

  const roleLabel = role === 'admin' ? 'Administrador General'
    : role === 'encargado' ? 'Encargado de Sucursal'
    : 'Cajero / Vendedor';

  UVA_STATE.users.push({
    id: `USR-${(UVA_STATE.users.length + 1).toString().padStart(2, '0')}`,
    name,
    username,
    role,
    roleLabel,
    branchId,
    pin,
    lastLogin: 'Nunca',
    status: 'Activo'
  });

  closeNewUserModal();
  renderConfigView(document.getElementById('appMainView'));
};

window.toggleUserStatus = function(userId) {
  const u = UVA_STATE.users.find(x => x.id === userId);
  if (u) {
    u.status = u.status === 'Activo' ? 'Inactivo' : 'Activo';
    renderConfigView(document.getElementById('appMainView'));
  }
};

window.deleteUser = function(userId) {
  if (confirm("¿Estás seguro de eliminar este usuario de sucursal?")) {
    UVA_STATE.users = UVA_STATE.users.filter(x => x.id !== userId);
    renderConfigView(document.getElementById('appMainView'));
  }
};

// =============================================================================
// INICIALIZACIÓN DE LA APLICACIÓN
// =============================================================================
document.addEventListener('DOMContentLoaded', initApp);


/**
 * Dylan Banegas — Portfolio Interactive Scripts
 * Particle Network Canvas, Scrollspy, IntersectionObserver Reveals,
 * Interactive IDE Code Viewer Modal with Real Screenshots & Full Live CRM/ERP Simulator
 */

// ==================== 1. DATA FOR IDE VIEWER & SIMULATOR ====================

const IDE_PROJECTS = {
  sitiocel_app: {
    filename: 'sitiocel_desktop_tauri.rs',
    icon: '🦀',
    title: 'Sitiocel ERP / CRM — Desktop Native App',
    badge: 'Rust (Tauri) + Supabase Cloud + Windows Native',
    description: 'Aplicación nativa de escritorio de alto rendimiento para Windows desarrollada con Rust (Tauri). Gestiona punto de venta en mostrador (POS), control de stock con SKU, balance de ingresos/egresos, historial de movimientos y exportación de reportes a Excel, todo conectado en tiempo real con Supabase Cloud.',
    code: `// Sitiocel ERP Desktop — Tauri Native Core (src-tauri/src/main.rs)
// Integración nativa de hardware, base de datos cloud y sincronización

use tauri::{command, AppHandle};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct ProductItem {
    pub id: String,
    pub name: String,
    pub price: f64,
    pub stock: i32,
    pub sku: String,
    pub brand: String,
    pub min_stock: i32,
}

/// Impresión térmica directa a impresoras de 80mm / 58mm
#[command]
async fn print_pos_receipt(printer_name: String, raw_escpos: Vec<u8>) -> Result<bool, String> {
    println!("[Tauri/Rust] Enviando ESC/POS a impresora de mostrador: {}", printer_name);
    // Comunicación a puerto RAW directo en Windows
    Ok(true)
}

/// Sincronización bidireccional instantánea con Supabase
#[command]
async fn sync_realtime_supabase(app: AppHandle, event_type: String) -> Result<String, String> {
    println!("[Sync Supabase] Evento emitido: {}", event_type);
    Ok("Sincronización cloud completada".into())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![print_pos_receipt, sync_realtime_supabase])
        .run(tauri::generate_context!())
        .expect("Error al ejecutar Sitiocel ERP Desktop");
}`,
    screenshots: [
      {
        title: 'Dashboard General de Control ERP',
        desc: 'Panel principal con indicadores en tiempo real: Ingresos, Egresos, Balance Neto, Total Ventas, Alerta de Stock Bajo y gráficos comparativos.',
        src: 'img/sitiocel-dashboard.png'
      },
      {
        title: 'Punto de Venta (POS) en Mostrador',
        desc: 'Carga rápida de ventas presenciales con catálogo visual, buscador por SKU/nombre y múltiples métodos de cobro (Efectivo, Transferencia, Tarjeta, Mercado Pago).',
        src: 'img/sitiocel-pos.png'
      },
      {
        title: 'Control de Inventario de Productos',
        desc: 'Gestión completa de stock, precio de costo/compra, precio de venta, marcas, alertas de reposición mínima y ajustes rápidos.',
        src: 'img/sitiocel-inventory.png'
      },
      {
        title: 'Inventario & Monitoreo de Stock',
        desc: 'Vista detallada de artículos con soporte de marcas oficiales (Motorola, Samsung, Xiaomi, JBL), categorías y control de existencias.',
        src: 'img/sitiocel-inventory-dark.png'
      }
    ],
    kpis: [
      { label: 'Tecnología Core', value: 'Rust / Tauri', color: 'text-amber-400' },
      { label: 'Base de Datos', value: 'Supabase Cloud', color: 'text-emerald-400' },
      { label: 'Módulos', value: 'POS, Stock, Finanzas, Excel', color: 'text-blue-400' }
    ]
  },

  sitiocel_web: {
    filename: 'sitiocel_ecommerce_store.js',
    icon: '🌐',
    title: 'Sitiocel Tienda Web E-commerce (www.sitiocel.com)',
    badge: 'HTML5 + CSS3 + JavaScript + Supabase Realtime',
    description: 'Plataforma e-commerce y catálogo web para Sitiocel accesible en www.sitiocel.com. Desarrollada con HTML, CSS y JavaScript puro donde el cliente eligió el 100% del diseño estético y la experiencia visual. Sincronizada en vivo con Supabase para reflejar instantáneamente el stock cargado en el ERP de escritorio.',
    code: `// Sitiocel Web Store (www.sitiocel.com) — Sincronización en Vivo
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tu-proyecto.supabase.co',
  'SUPABASE_ANON_KEY'
);

// Consulta del catálogo público en tiempo real
export async function loadPublicCatalog() {
  const { data: products, error } = await supabase
    .from('products')
    .select('id, name, slug, price, stock, brand, image_url')
    .gt('stock', 0)
    .order('name');

  if (error) {
    console.error('Error al cargar catálogo:', error);
    return products;
  }
}`,
    screenshots: [
      {
        title: 'Catálogo de Productos & Precios en Vivo',
        desc: 'Tienda pública en www.sitiocel.com con buscador, filtros por categoría, ordenamiento por precio y estados de stock en tiempo real.',
        src: 'img/sitiocel-web-catalog.png'
      },
      {
        title: 'Sección de Contacto & Ubicación en Solano',
        desc: 'Diseño 100% personalizado por el cliente con datos de local en Galería Heidi, horarios de atención, mapa de Google Maps y formulario de consulta.',
        src: 'img/sitiocel-web-contact.png'
      }
    ],
    kpis: [
      { label: 'Sitio Web Oficial', value: 'www.sitiocel.com', color: 'text-blue-400' },
      { label: 'Diseño Visual', value: '100% Elegido por Cliente', color: 'text-emerald-400' },
      { label: 'Stack Frontend', value: 'HTML, CSS, JS Puro', color: 'text-purple-400' }
    ],
    liveLink: 'https://www.sitiocel.com'
  },

  martinez: {
    filename: 'martinez_crm_controller.js',
    icon: '⚡',
    title: 'CRM/ERP Constructora Martínez y De La Fuente',
    badge: 'Node.js + Express + MongoDB · 100% Desarrollado (No Implementado)',
    statusBadge: {
      text: '100% Desarrollado · No Implementado',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30'
    },
    notice: 'El proyecto fue diseñado y desarrollado en su totalidad a nivel de software (arquitectura, módulos de acceso por roles, gestión de obras, cuadrillas, reportes analíticos y repositorio documental). Sin embargo, por decisión y circunstancias internas de la empresa cliente, no se llegó a concluir la puesta en marcha comercial definitiva en producción.',
    description: 'Sistema integral de gestión de obras civiles: seguimiento de proyectos, presentismo de operarios en obra, control de desvío presupuestario, reportería analítica con curvas financieras (ingresos vs egresos) y repositorio documental técnico de planos y contratos. Desarrollado al 100% de los requerimientos pactados.',
    code: `// Constructora Martínez & De La Fuente — Sistema de Gestión Integral de Obras
// Estado: 100% Desarrollado y funcional (No implementado en producción final por el cliente)
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Schema de Obra Civil con Métricas de Desvío Presupuestario y Avance
const ObraSchema = new mongoose.Schema({
  codigoObra: { type: String, required: true, unique: true },
  nombre: { type: String, required: true }, // Ej: 'Torre Mirador del Parque', 'Los Álamos', 'Centro Deportivo'
  cliente: { type: String, required: true },
  ubicacion: { type: String, required: true },
  presupuestoAsignado: { type: Number, required: true },
  costoRealAcumulado: { type: Number, default: 0 },
  porcentajeAvanceGlobal: { type: Number, default: 0, min: 0, max: 100 },
  estado: { type: String, enum: ['planificacion', 'activa', 'paralizada', 'finalizada'], default: 'activa' },
  responsableObra: { type: String, default: 'Ing. Alejandro Martínez' },
  personalAsignado: [{
    obreroId: String,
    nombre: String,
    rol: { type: String, enum: ['Jefe de Obra', 'Maestro Mayor', 'Oficial', 'Ayudante'] },
    asistenciaHoy: { type: Boolean, default: true }
  }],
  repositorioDocumental: [{
    titulo: String, // Ej: 'Plano estructural', 'Permiso de construcción N°45892', 'Contrato de obra'
    categoria: { type: String, enum: ['Planos', 'Permisos', 'Contratos', 'Estudios de Suelo', 'OPDS'] },
    subidoPor: String,
    fecha: { type: Date, default: Date.now },
    tamano: String,
    archivoUrl: String
  }],
  metricasFinancieras: {
    ingresosCertificados: Number,
    egresosMateriales: Number,
    desvioPresupuestarioPorcentaje: Number
  }
}, { timestamps: true });

// Controller: Obtener resumen del Dashboard General de Obras
router.get('/api/dashboard/resumen', async (req, res) => {
  try {
    const obrasActivas = await Obra.countDocuments({ estado: 'activa' });
    const totalObrerosHoy = await Obra.aggregate([
      { $match: { estado: 'activa' } },
      { $unwind: '$personalAsignado' },
      { $group: { _id: null, total: { $sum: 1 }, presentes: { $sum: { $cond: ['$personalAsignado.asistenciaHoy', 1, 0] } } } }
    ]);

    res.json({
      success: true,
      obrasActivas: obrasActivas || 3,
      obrerosEnObra: \`\${totalObrerosHoy[0]?.presentes || 10}/\${totalObrerosHoy[0]?.total || 12}\`,
      avanceGlobal: '54%',
      desvioPresupuesto: '42.7% (Ahorro proyectado)',
      estadoDesarrollo: 'Sistema 100% construido y listo para puesta en marcha'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;`,
    screenshots: [
      {
        title: 'Portal de Acceso & Autenticación por Roles',
        desc: 'Pantalla de login institucional de Constructora MF con soporte de perfiles diferenciados: Administrador, Jefe de Obra, Maestro Mayor y Cliente con accesos rápidos configurados.',
        src: 'img/mf-login.png'
      },
      {
        title: 'Dashboard General de Control de Obras',
        desc: 'Visión integral del estado de proyectos: 3 obras activas, presentismo de obreros en obra (10/12), 54% de avance global, 42.7% de desvío presupuestario y feed de actividad reciente.',
        src: 'img/mf-dashboard.png'
      },
      {
        title: 'Reportes & Analytics con Curvas Financieras',
        desc: 'Módulo de analíticas avanzadas con gráfico interactivo de ingresos vs egresos mes a mes, tendencia de avance global por proyecto y botones de exportación a Excel y PDF.',
        src: 'img/mf-analytics.png'
      },
      {
        title: 'Repositorio Documental Técnico de Obras',
        desc: 'Gestor documental centralizado con buscador por obra y categoría: planos estructurales, contratos de obra, permisos municipales, estudios de suelo y aprobaciones ambientales OPDS.',
        src: 'img/mf-documentos.png'
      }
    ],
    kpis: [
      { label: 'Estado del Proyecto', value: '100% Desarrollado (No Implementado)', color: 'text-amber-400' },
      { label: 'Módulos Clave', value: 'Dashboard, Obras, Personal, Docs, Analytics', color: 'text-blue-400' },
      { label: 'Roles Soportados', value: 'Admin, Jefe de Obra, Maestro, Cliente', color: 'text-emerald-400' }
    ]
  },

  pc_optimizer_web: {
    filename: 'pc_optimizer_landing.html',
    icon: '🌐',
    title: 'PC Optimizer ELUNDER — Web Oficial & Landing Page',
    badge: 'HTML5 + Vanilla CSS + JavaScript + Web Audio API',
    description: 'Portal web oficial y de distribución de PC Optimizer ELUNDER. Diseñado con una estética underground retro de alto impacto inspirada en la cultura visual de los años 2000. Incluye reproductor de música interactivo con Web Audio API, simulador de optimización en vivo, micro-animaciones al scroll y arquitectura 100% responsiva para celulares.',
    code: `<!-- PC Optimizer ELUNDER — Landing Page & Portal Oficial -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>PC Optimizer ELUNDER - Que es el under???</title>
  <link rel="stylesheet" href="landing-style.css">
</head>
<body class="y2k-landing-theme">
  <!-- Header Retro Underground -->
  <header class="y2k-full-nav">
    <div class="y2k-nav-container">
      <span class="brand-title">PC OPTIMIZER ELUNDER</span>
      <a href="https://github.com/Dyydyyb/Pc-optimizer-ELUNDER/releases/download/App/PCOptimizerELUNDER-Setup.exe" class="nav-download-btn">
        ⚡ DESCARGAR .EXE
      </a>
    </div>
  </header>

  <!-- Simulador de Optimización en Vivo con Web Audio API -->
  <section class="hero-center-info">
    <h1 class="hero-main-title">PC OPTIMIZER ELUNDER</h1>
    <p class="hero-tagline">Optimización extrema sin saturar tu procesador.</p>
  </section>
</body>
</html>`,
    screenshots: [
      {
        title: 'Hero Principal & Intranet EL UNDER',
        desc: 'Cabecera con branding oficial, botón de descarga directa .EXE, métricas de rendimiento y widget interactivo de Intranet EL UNDER.',
        src: 'img/pc-optimizer-web-hero.png'
      },
      {
        title: 'Competitividad & Reproductor de Audio Web',
        desc: 'Sección de rendimiento sin fallos y reproductor interactivo con Web Audio API de temas exclusivos (Y EL MATT - PC Optimizer Hymn).',
        src: 'img/pc-optimizer-web-audio.png'
      },
      {
        title: 'Estamos en Esa & Guía de Instalación en 3 Pasos',
        desc: 'Módulo de alta potencia visual con arte temático y guía paso a paso para la descarga y ejecución del optimizador en Windows 10/11.',
        src: 'img/pc-optimizer-web-install.png'
      },
      {
        title: 'Guía de Seguridad SmartScreen & Footer Sal y Josea',
        desc: 'Explicación técnica de la advertencia de Windows Defender asegurando 100% de limpieza sin virus, botón masivo de descarga y pie de página integrado.',
        src: 'img/pc-optimizer-web-defender-footer.png'
      }
    ],
    kpis: [
      { label: 'Web Desplegada', value: 'pc-optimizer-elunder-95rd.vercel.app', color: 'text-pink-400' },
      { label: 'Estilo Visual', value: 'Retro Underground 2000s', color: 'text-cyan-400' },
      { label: 'Responsive', value: '100% Adaptado a Celulares', color: 'text-emerald-400' }
    ],
    liveLink: 'https://pc-optimizer-elunder-95rd.vercel.app'
  },

  pc_optimizer_app: {
    filename: 'optimizer_engine.js',
    icon: '⚡',
    title: 'PC Optimizer ELUNDER — App de Escritorio (.EXE)',
    badge: 'Electron + Node.js + PowerShell + C# Native Installer',
    description: 'Aplicación de escritorio nativa para Windows enfocada en optimización extrema y segura del sistema. Vacía la memoria RAM inactiva de procesos de usuario (EmptyWorkingSet), destruye cachés pesadas de navegadores (Chrome, Edge, Brave) y apps (Discord, Steam, Spotify) sin tocar procesos críticos. Integra un examen de disco 100% blindado contra borrado de DLLs o dependencias del sistema, y un Monitor de Rendimiento en vivo para visualizar en qué se gasta la potencia del CPU y RAM.',
    code: `// PC Optimizer ELUNDER — Motor de Optimización y Seguridad Nativa
const { exec } = require('child_process');
const fs = require('fs');

// Vaciado seguro de memoria RAM inactiva excluyendo procesos críticos
async function optimizeWorkingSetMemory() {
  const safePsCommand = \`
    Get-Process | Where-Object {
      $_.ProcessName -notmatch '^(system|idle|svchost|dwm|lsass|csrss|services|smss|wininit|audiodg)$'
    } | ForEach-Object { try { $_.EmptyWorkingSet() } catch {} }
  \`;
  return await runPowerShell(safePsCommand);
}

// Blindaje de Seguridad en Examen de Disco (Prohibición estricta de DLLs y Sistema)
function isForbiddenToDelete(targetPath) {
  const norm = targetPath.toUpperCase();
  const ext = path.extname(targetPath).toLowerCase();
  
  if (norm.includes('\\\\WINDOWS') || norm.includes('\\\\SYSTEM32') || norm.includes('\\\\PROGRAM FILES')) {
    return 'Archivo protegido del núcleo del sistema operativo Windows.';
  }
  
  const forbiddenExts = ['.dll', '.sys', '.drv', '.ocx', '.ini', '.config', '.manifest'];
  if (forbiddenExts.includes(ext)) {
    return 'La extensión ' + ext + ' es una dependencia crítica del sistema y está protegida contra borrado.';
  }
  return null;
}

// Monitor de Rendimiento en Tiempo Real
async function getTopProcessesConsumingResources() {
  const psCmd = \`Get-Process | Where-Object { $_.ProcessName -notmatch '^(idle|system)$' } | Sort-Object -Descending WorkingSet64 | Select-Object -First 12 Id, ProcessName, @{Name='CpuSec';Expression={[math]::Round($_.CPU, 1)}}, @{Name='RamMB';Expression={[math]::Round($_.WorkingSet64/1MB, 1)}} | ConvertTo-Json -Compress\`;
  return await runPowerShell(psCmd);
}`,
    screenshots: [
      {
        title: 'Dashboard Principal, Métricas en Vivo & Audio Player',
        desc: 'Panel principal del optimizador con métricas en tiempo real de RAM, CPU y Disco, reproductor de audio retro integrado y accesos directos de optimización y análisis.',
        src: 'img/pc-optimizer-app-dashboard.png'
      },
      {
        title: 'Revisión Previa de Caché & Vaciado Seguro de RAM',
        desc: 'Ventana de confirmación de limpieza previa: vaciado de memoria RAM inactiva (Working Set Trimming), temporales de usuario (%TEMP%) y cachés masivas de navegadores y aplicaciones.',
        src: 'img/pc-optimizer-app-cache-modal.png'
      },
      {
        title: 'Analizador de Disco con Modo Seguro Activo',
        desc: 'Escaneo profundo de unidades con blindaje de seguridad: protegido contra borrado de librerías DLL, dependencias o archivos de Windows; solo lista archivos pesados prescindibles (ISO, RAR, ZIP, instaladores antiguos, videos).',
        src: 'img/pc-optimizer-app-disk-scanner.png'
      },
      {
        title: 'Monitor de Rendimiento en Vivo (Consumo CPU & RAM)',
        desc: 'Ventana de auditoría de procesos en tiempo real con refresco continuo automático cada 2 segundos, desglose de consumo en MB y tiempo de CPU por proceso, categorizado por impacto de potencia.',
        src: 'img/pc-optimizer-app-performance-monitor.png'
      }
    ],
    kpis: [
      { label: 'Instalador Oficial', value: 'PCOptimizerELUNDER-Setup.exe (161 MB)', color: 'text-green-400' },
      { label: 'Seguridad', value: 'Blindaje Anti-DLL / Anti-Corrupción', color: 'text-emerald-400' },
      { label: 'Funciones', value: 'RAM Boost, Examen Seguro, Monitor Vivo', color: 'text-blue-400' }
    ],
    liveLink: 'https://github.com/Dyydyyb/Pc-optimizer-ELUNDER/releases/tag/App'
  },

  caber_tattoo: {
    filename: 'caber_tattoo_sync.js',
    icon: '⚡',
    title: 'Caber Tattoo — Web & Panel Admin con Supabase Cloud',
    badge: 'Supabase Cloud (PostgreSQL + Storage) + Vanilla JS + 3D Coverflow + REST API',
    description: 'Sitio web profesional de autor y panel de administración en la nube para el reconocido tatuador Caber Tattoo (sedes Avellaneda y Villa Elisa). Integra base de datos cloud en Supabase con sincronización global en tiempo real de tatuajes, panel privado de administración (/admin) con compresión inteligente en Canvas antes de subir imágenes a Supabase Storage, slider 3D Coverflow interactivo, cotizador de turnos a WhatsApp, geolocalización de estudios y guía completa de cuidados.',
    code: `// Caber Tattoo — Sincronización en la Nube con Supabase REST API & Storage
const SUPABASE_URL = 'https://ipbfgmgcvctxrzvuihun.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI...';

// Store global de tatuajes con sincronización en tiempo real
const TattooStore = {
  async fetchAll() {
    const res = await fetch(\`\${SUPABASE_URL}/rest/v1/tattoos?select=*&order=order_index.asc\`, {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': \`Bearer \${SUPABASE_ANON_KEY}\` }
    });
    return await res.json();
  },

  // Subida con compresión previa en Canvas al bucket de Storage
  async uploadImage(file) {
    const compressedBlob = await compressImageCanvas(file, 1400, 0.85);
    const fileName = \`tattoo_\${Date.now()}.\${file.type.split('/')[1] || 'jpg'}\`;
    
    await fetch(\`\${SUPABASE_URL}/storage/v1/object/tattoos/\${fileName}\`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': \`Bearer \${SUPABASE_ANON_KEY}\`,
        'Content-Type': file.type
      },
      body: compressedBlob
    });
    return \`\${SUPABASE_URL}/storage/v1/object/public/tattoos/\${fileName}\`;
  }
};`,
    screenshots: [
      {
        title: 'Hero Section & 3D Coverflow Slider',
        desc: 'Portada inmersiva de alto impacto con el emblema de fondo a escala, tipografía Cinzel y slider 3D interactivo que amplía la pieza central y rota los laterales con profundidad.',
        src: 'img/caber-hero-coverflow.png'
      },
      {
        title: 'Coverflow 3D con Zoom & Lettering Custom',
        desc: 'Detalle del carrusel dinámico en navegación: rotación angular, transiciones por GPU a 60fps y visualización de piezas destacadas como Script en Cuello.',
        src: 'img/caber-coverflow-slide.png'
      },
      {
        title: 'Estudios Privados & Geolocalización en Tiempo Real',
        desc: 'Sección de sedes (Avellaneda y Villa Elisa) con Google Maps integrados en tema oscuro nativo, especificaciones técnicas y accesos directos de turnos.',
        src: 'img/caber-estudios-mapas.png'
      },
      {
        title: 'Galería de Trabajos Dinámica con Filtros',
        desc: 'Catálogo sincronizado desde Supabase Cloud con filtros por técnica (Black & Grey, Anime Dark, Lettering, Blackwork) y visor modal Lightbox en alta definición.',
        src: 'img/caber-galeria-filtros.png'
      },
      {
        title: 'Cotizador Interactivo de Turnos para WhatsApp',
        desc: 'Calculadora de presupuesto paso a paso (Estudio, Estilo, Zona del cuerpo y Tamaño) que genera un mensaje formal preformateado y abre WhatsApp automáticamente.',
        src: 'img/caber-cotizador-interactivo.png'
      }
    ],
    kpis: [
      { label: 'Cloud Backend', value: 'Supabase (DB & Storage)', color: 'text-emerald-400' },
      { label: 'Admin Panel', value: 'Gestión CRUD en Vivo', color: 'text-red-400' },
      { label: 'Interactividad', value: '3D Coverflow & Cotizador', color: 'text-blue-400' }
    ],
    liveLink: 'https://caber.vercel.app/'
  },

  odoo: {
    filename: 'odoo_woocommerce_sync.py',
    icon: '🐍',
    title: 'Integración Odoo ERP ↔ WooCommerce REST API',
    badge: 'Python + Odoo XML-RPC + WooCommerce API',
    description: 'Microservicio de sincronización automática de doble vía entre Odoo ERP y WooCommerce: actualización de inventario por webhooks y emisión de facturas electrónicas.',
    code: `# Sincronizador Bidireccional Odoo ↔ WooCommerce en Python
import xmlrpc.client
from woocommerce import API

class OdooWooCommerceBridge:
    def __init__(self, odoo_url, odoo_db, odoo_user, odoo_pass, woo_url, woo_key, woo_secret):
        self.common = xmlrpc.client.ServerProxy(f'{odoo_url}/xmlrpc/2/common')
        self.uid = self.common.authenticate(odoo_db, odoo_user, odoo_pass, {})
        self.models = xmlrpc.client.ServerProxy(f'{odoo_url}/xmlrpc/2/object')
        self.db = odoo_db
        self.password = odoo_pass
        
        self.wcapi = API(
            url=woo_url,
            consumer_key=woo_key,
            consumer_secret=woo_secret,
            version="wc/v3"
        )

    def sync_stock_from_odoo_to_woo(self):
        """Consulta stock en Odoo y actualiza catálogo en WooCommerce."""
        products = self.models.execute_kw(
            self.db, self.uid, self.password,
            'product.product', 'search_read',
            [[['type', '=', 'product']]],
            {'fields': ['default_code', 'qty_available', 'list_price']}
        )
        print(f"[Odoo Sync] Actualizados {len(products)} productos en WooCommerce.")
        return True`,
    screenshots: [],
    kpis: [
      { label: 'Sincronización', value: '100% Automática', color: 'text-emerald-400' },
      { label: 'Latencia Sync', value: '< 2.5 segundos', color: 'text-blue-400' },
      { label: 'Pedidos Mapeados', value: '450+ Mensuales', color: 'text-purple-400' }
    ]
  },

  yakai_ai: {
    filename: 'yakai_n8n_agent_workflow.json',
    icon: '🤖',
    title: 'YAKAI — AI Agents & Automatización Empresarial',
    badge: 'n8n + Zapier + OpenAI / Anthropic APIs',
    description: 'Workflows autónomos con modelos de lenguaje integrados en n8n para responder cotizaciones, clasificar leads y generar reportes financieros automáticamente.',
    code: `// YAKAI Autonomous AI Workflow Architecture
{
  "name": "YAKAI AI Lead & Auto-Quote Agent",
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "parameters": { "path": "/lead-inbound", "httpMethod": "POST" }
    },
    {
      "name": "AI Agent Qualification",
      "type": "@n8n/n8n-nodes-langchain.agent",
      "parameters": {
        "systemMessage": "Analiza la consulta del cliente empresarial y clasifica el presupuesto óptimo."
      }
    },
    {
      "name": "Database & CRM Update",
      "type": "n8n-nodes-base.supabase",
      "parameters": { "operation": "upsert", "table": "leads" }
    }
  ]
}`,
    screenshots: [],
    kpis: [
      { label: 'Ahorro Operativo', value: 'Hasta 70%', color: 'text-emerald-400' },
      { label: 'Tiempo de Respuesta', value: 'Inmediato (< 3s)', color: 'text-blue-400' },
      { label: 'Integraciones', value: 'WhatsApp, CRM, ERP', color: 'text-violet-400' }
    ]
  },

  web_accesible: {
    filename: 'web_accesible_landing.html',
    icon: '🎨',
    title: 'Desarrollo Web Accesible & Ultra Responsive',
    badge: 'HTML5 + Tailwind CSS + JavaScript ES6+',
    description: 'Sitios web modernos, veloces y optimizados para SEO y conversión al costo más accesible del mercado, permitiendo a cualquier comercio u organización tener presencia digital.',
    code: `<!-- Plantilla Web Accesible de Alto Impacto -->
<section class="hero-container bg-slate-900 text-white py-20 px-6">
  <div class="max-w-6xl mx-auto flex flex-col items-center text-center">
    <span class="badge-tag text-emerald-400 bg-emerald-950/60 px-4 py-1 rounded-full">
      CALIDAD PROFESIONAL · PRECIO ACCESIBLE
    </span>
    <h1 class="text-4xl sm:text-6xl font-extrabold mt-4">
      Impulsá tu presencia digital hoy
    </h1>
    <p class="text-slate-300 max-w-2xl mt-4 text-lg">
      Diseño a medida, adaptable a celulares y con botones de contacto directo por WhatsApp.
    </p>
  </div>
</section>`,
    screenshots: [],
    kpis: [
      { label: 'Rendimiento Lighthouse', value: '100 / 100', color: 'text-emerald-400' },
      { label: 'Mobile First', value: '100% Adaptable', color: 'text-blue-400' },
      { label: 'Inversión', value: 'Precio Más Accesible', color: 'text-amber-400' }
    ]
  }
};

// State for Live ERP Simulator
const SIM_STATE = {
  activeTab: 'dashboard',
  clients: [
    { id: 'cli-1', name: 'Distribuidora Quilmes', contact: 'Ignacio Gómez', status: 'Activo', total: '$1.450.000', last: 'Hoy, 09:30' },
    { id: 'cli-2', name: 'Tecno Solano SRL', contact: 'Mariana Rossi', status: 'Activo', total: '$980.000', last: 'Ayer, 16:15' },
    { id: 'cli-3', name: 'Constructora Martinez', contact: 'Arq. Lucas Martínez', status: 'En Negociación', total: '$2.800.000', last: '28/08/2026' },
    { id: 'cli-4', name: 'Comercial del Sur', contact: 'Esteban Varela', status: 'Potencial', total: '$340.000', last: '26/08/2026' }
  ],
  inventory: [
    { sku: 'MOTO-G85', name: 'Motorola Moto G85 5G 256GB', cat: 'Celulares', cost: 321300, price: 459000, stock: 10 },
    { sku: 'SAM-A35', name: 'Samsung Galaxy A35 128GB', cat: 'Celulares', cost: 244999, price: 349999, stock: 8 },
    { sku: 'SAM-A15', name: 'Samsung Galaxy A15 128GB', cat: 'Celulares', cost: 132999, price: 189999, stock: 12 },
    { sku: 'CARG-SAM25W', name: 'Cargador Rápido Samsung 25W USB-C', cat: 'Cargadores', cost: 10400, price: 14999, stock: 40 },
    { sku: 'AUR-JBL520', name: 'Auriculares Bluetooth JBL Tune 520BT', cat: 'Audio', cost: 38499, price: 54999, stock: 25 },
    { sku: 'XIAO-RED13', name: 'Xiaomi Redmi Note 13 256GB', cat: 'Celulares', cost: 153999, price: 219999, stock: 8 }
  ],
  finance: [
    { date: '30/08/2026', type: 'ingreso', concept: 'Venta Mostrador POS #ORD-2512', category: 'Punto de Venta', amount: 459000 },
    { date: '30/08/2026', type: 'ingreso', concept: 'Cobro de Factura Constructora', category: 'Servicios CRM', amount: 950000 },
    { date: '29/08/2026', type: 'egreso', concept: 'Reposición Lote Motorola G85', category: 'Proveedores', amount: 642600 },
    { date: '28/08/2026', type: 'egreso', concept: 'Servidores Cloud & Supabase', category: 'Infraestructura', amount: 65000 },
    { date: '27/08/2026', type: 'ingreso', concept: 'Venta Web www.sitiocel.com', category: 'E-commerce', amount: 349999 }
  ],
  currentIdeProject: 'sitiocel_app',
  currentIdeView: 'code'
};


// ==================== 2. CORE DOM INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const hamburgerIcon = document.getElementById('hamburger-icon');

  window.toggleMobileMenu = function(forceClose = false) {
    if (!mobileMenu) return;
    const isCurrentlyHidden = mobileMenu.classList.contains('hidden');
    if (forceClose || !isCurrentlyHidden) {
      mobileMenu.classList.add('hidden');
      if (hamburgerIcon) hamburgerIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
      mobileMenu.classList.remove('hidden');
      if (hamburgerIcon) hamburgerIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.toggleMobileMenu();
    });
  }

  mobileLinks.forEach(l => {
    l.addEventListener('click', () => window.toggleMobileMenu(true));
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(e.target) && mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
        window.toggleMobileMenu(true);
      }
    }
  });

  // Scrollspy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const onScroll = () => {
    const scrollY = window.pageYOffset + 140;
    sections.forEach(s => {
      const top = s.offsetTop;
      const height = s.offsetHeight;
      const id = s.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
        });
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll Reveal Animations
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(r => observer.observe(r));

  initHeroCanvas();
  renderSimClients();
  renderSimStock();
  renderSimFinance();
  initSimCharts();
  initContactForm();
});


// ==================== 3. HERO PARTICLES CANVAS ====================

function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
  const mouse = { x: null, y: null, radius: 120 };

  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.color = Math.random() > 0.4 ? '#1A56B0' : '#6366f1';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = 0.4;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#1A56B0';
          ctx.globalAlpha = (1 - dist / 130) * 0.18;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}


// ==================== 4. CODE EDITOR / IDE MODAL LOGIC ====================

window.openIdeModal = function(projectId = 'sitiocel_app') {
  const modal = document.getElementById('ide-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  loadIdeProject(projectId);
};

window.closeIdeModal = function() {
  const modal = document.getElementById('ide-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
};

// Close modal on backdrop click or ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeIdeModal();
    window.toggleMobileMenu?.(true);
  }
});

const ideModalEl = document.getElementById('ide-modal');
if (ideModalEl) {
  ideModalEl.addEventListener('click', (e) => {
    if (e.target === ideModalEl) window.closeIdeModal();
  });
}

window.loadIdeProject = function(projectId) {
  SIM_STATE.currentIdeProject = projectId;
  const project = IDE_PROJECTS[projectId] || IDE_PROJECTS.sitiocel_app;

  document.querySelectorAll('.ide-file-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`ide-btn-${projectId}`);
  if (activeBtn) activeBtn.classList.add('active');

  const tabFilename = document.getElementById('ide-tab-filename');
  if (tabFilename) tabFilename.textContent = project.filename;

  // Render Code
  const codePanel = document.getElementById('ide-code-panel');
  if (codePanel) {
    codePanel.innerHTML = `
      <div class="p-3.5 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 mb-3 sm:mb-4">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <span class="text-white font-bold text-sm sm:text-base font-outfit">${project.title}</span>
          <span class="text-[10px] text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded font-mono">${project.badge}</span>
        </div>
        <p class="text-slate-400 text-xs leading-relaxed">${project.description}</p>
        ${project.liveLink ? `
          <div class="pt-2">
            <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold underline break-all">
              <span>Visitar sitio web oficial (${project.liveLink}) ↗</span>
            </a>
          </div>
        ` : ''}
      </div>
      <div class="bg-slate-900/60 p-3 sm:p-4 rounded-xl border border-slate-800/80 overflow-x-auto no-scrollbar">
        <pre><code class="text-slate-200 text-[11px] sm:text-xs leading-relaxed">${escapeHtml(project.code)}</code></pre>
      </div>
    `;
  }

  // Render Mockup & Real Screenshots
  const mockupPanel = document.getElementById('ide-mockup-panel');
  if (mockupPanel) {
    const kpisHtml = project.kpis.map(k => `
      <div class="bg-slate-900 p-3.5 sm:p-4 rounded-xl border border-slate-800">
        <div class="text-[10px] text-slate-500 uppercase font-bold tracking-wider">${k.label}</div>
        <div class="text-sm sm:text-base font-black ${k.color} font-outfit mt-1">${k.value}</div>
      </div>
    `).join('');

    let galleryHtml = '';
    if (project.screenshots && project.screenshots.length > 0) {
      const galleryTitle = project.statusBadge?.text?.includes('No Implementado') 
        ? '🖼️ Capturas Reales del Sistema Desarrollado:' 
        : '🖼️ Capturas de la Aplicación en Producción:';

      galleryHtml = `
        <div class="space-y-4 sm:space-y-6 pt-2 w-full">
          <h4 class="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2">
            <span>${galleryTitle}</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
            ${project.screenshots.map(s => `
              <div class="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-lg group hover:border-slate-700 transition-all">
                <div class="relative overflow-hidden bg-slate-950 aspect-video flex items-center justify-center">
                  <img src="${s.src}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                </div>
                <div class="p-3.5 sm:p-4 space-y-1">
                  <h5 class="text-xs font-bold text-white font-outfit">${s.title}</h5>
                  <p class="text-[11px] text-slate-400 leading-relaxed">${s.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    const statusBadgeHtml = project.statusBadge
      ? `<span class="text-[11px] sm:text-xs ${project.statusBadge.color} ${project.statusBadge.bg} px-2.5 py-1 rounded-full font-bold border ${project.statusBadge.border}">${project.statusBadge.text}</span>`
      : `<span class="text-[11px] sm:text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-bold">Producción Activa</span>`;

    mockupPanel.innerHTML = `
      <div class="w-full max-w-4xl bg-slate-950 p-3.5 sm:p-6 rounded-2xl border border-slate-800 shadow-2xl space-y-4 sm:space-y-6">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800 flex-wrap gap-2">
          <h4 class="text-white font-bold font-outfit text-sm sm:text-base">${project.title}</h4>
          ${statusBadgeHtml}
        </div>

        ${project.notice ? `
          <div class="p-3.5 sm:p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
            <span class="text-base sm:text-lg shrink-0">📌</span>
            <div class="space-y-0.5">
              <div class="font-bold text-amber-300 uppercase tracking-wider text-[10px]">Aclaración de Estado</div>
              <p class="leading-relaxed text-amber-200/90 text-xs">${project.notice}</p>
            </div>
          </div>
        ` : ''}
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          ${kpisHtml}
        </div>

        ${galleryHtml}

        <div class="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-center sm:text-left">
          <span>¿Querés probar la interfaz interactiva de un ERP?</span>
          <button onclick="openSimulatorFromIde()" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all justify-center">
            Ir al Simulador en Vivo ⚡
          </button>
        </div>
      </div>
    `;
  }

  setIdeViewMode(SIM_STATE.currentIdeView);
};

window.setIdeViewMode = function(mode) {
  SIM_STATE.currentIdeView = mode;
  const codePanel = document.getElementById('ide-code-panel');
  const mockupPanel = document.getElementById('ide-mockup-panel');
  const codeBtn = document.getElementById('ide-view-code-btn');
  const mockupBtn = document.getElementById('ide-view-mockup-btn');

  if (mode === 'code') {
    codePanel.classList.remove('hidden');
    mockupPanel.classList.add('hidden');
    codeBtn.className = 'px-2.5 py-1 rounded text-[11px] font-bold bg-blue-600 text-white transition-all';
    mockupBtn.className = 'px-2.5 py-1 rounded text-[11px] font-bold text-slate-400 hover:text-white transition-all';
  } else {
    codePanel.classList.add('hidden');
    mockupPanel.classList.remove('hidden');
    mockupBtn.className = 'px-2.5 py-1 rounded text-[11px] font-bold bg-blue-600 text-white transition-all';
    codeBtn.className = 'px-2.5 py-1 rounded text-[11px] font-bold text-slate-400 hover:text-white transition-all';
  }
};

window.openSimulatorFromIde = function() {
  closeIdeModal();
  const el = document.getElementById('simulador');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


// ==================== 5. LIVE CRM/ERP SIMULATOR LOGIC ====================

window.switchSimTab = function(tabId) {
  SIM_STATE.activeTab = tabId;
  ['dashboard', 'crm', 'inventario', 'calendario', 'reportes'].forEach(id => {
    const panel = document.getElementById(`sim-panel-${id}`);
    const tabBtn = document.getElementById(`sim-tab-${id}`);
    if (panel) panel.classList.add('hidden');
    if (tabBtn) tabBtn.classList.remove('active');
  });

  const activePanel = document.getElementById(`sim-panel-${tabId}`);
  const activeBtn = document.getElementById(`sim-tab-${tabId}`);
  if (activePanel) activePanel.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active');
};

function renderSimClients(filterText = '') {
  const tbody = document.getElementById('sim-clients-tbody');
  if (!tbody) return;

  const filtered = SIM_STATE.clients.filter(c => 
    c.name.toLowerCase().includes(filterText.toLowerCase()) || 
    c.contact.toLowerCase().includes(filterText.toLowerCase())
  );

  tbody.innerHTML = filtered.map(c => `
    <tr class="hover:bg-slate-900/50 transition-colors">
      <td class="p-3.5 font-bold text-white">${c.name}</td>
      <td class="p-3.5 text-slate-400">${c.contact}</td>
      <td class="p-3.5">
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
          c.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
          c.status === 'En Negociación' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
          'bg-blue-500/10 text-blue-400 border border-blue-500/20'
        }">${c.status}</span>
      </td>
      <td class="p-3.5 font-mono text-emerald-400 font-bold">${c.total}</td>
      <td class="p-3.5 text-slate-500 text-[11px]">${c.last}</td>
      <td class="p-3.5 text-right">
        <button onclick="alert('Historial del cliente: ${c.name}')" class="text-blue-400 hover:underline">Ver Ficha</button>
      </td>
    </tr>
  `).join('');
}

window.filterSimClients = function() {
  const q = document.getElementById('sim-client-search')?.value || '';
  renderSimClients(q);
};

window.addSimClientPrompt = function() {
  const name = prompt('Nombre de la Empresa o Cliente:');
  if (!name) return;
  const contact = prompt('Persona de Contacto:') || 'Titular';
  SIM_STATE.clients.unshift({
    id: `cli-${Date.now()}`,
    name,
    contact,
    status: 'Activo',
    total: '$0',
    last: 'Recién agregado'
  });
  renderSimClients();
  alert(`✅ Cliente "${name}" registrado exitosamente en el CRM.`);
};

function renderSimStock() {
  const tbody = document.getElementById('sim-stock-tbody');
  const countEl = document.getElementById('sim-stock-count');
  if (!tbody) return;

  if (countEl) countEl.textContent = `${SIM_STATE.inventory.length} items`;

  tbody.innerHTML = SIM_STATE.inventory.map((p, idx) => `
    <tr class="hover:bg-slate-900/50 transition-colors">
      <td class="p-3.5 font-mono text-blue-400 font-bold">${p.sku}</td>
      <td class="p-3.5 font-bold text-white">${p.name}</td>
      <td class="p-3.5 text-slate-400">${p.cat}</td>
      <td class="p-3.5 font-mono text-slate-400">$${p.cost.toLocaleString('es-AR')}</td>
      <td class="p-3.5 font-mono text-emerald-400 font-bold">$${p.price.toLocaleString('es-AR')}</td>
      <td class="p-3.5">
        <span class="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold ${
          p.stock <= 5 ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-slate-800 text-white'
        }">${p.stock} u.</span>
      </td>
      <td class="p-3.5 text-right space-x-1">
        <button onclick="adjustSimStock(${idx}, 1)" class="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-emerald-400 font-bold">+</button>
        <button onclick="adjustSimStock(${idx}, -1)" class="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-rose-400 font-bold">-</button>
      </td>
    </tr>
  `).join('');
}

window.adjustSimStock = function(idx, delta) {
  if (SIM_STATE.inventory[idx]) {
    SIM_STATE.inventory[idx].stock = Math.max(0, SIM_STATE.inventory[idx].stock + delta);
    renderSimStock();
  }
};

window.addSimStockPrompt = function() {
  const name = prompt('Nombre del producto:');
  if (!name) return;
  const sku = prompt('Código SKU (ej: PROD-100):') || `SKU-${Math.floor(1000 + Math.random()*9000)}`;
  const price = Number(prompt('Precio de venta ARS:') || 25000);
  SIM_STATE.inventory.unshift({
    sku,
    name,
    cat: 'General',
    cost: Math.round(price * 0.6),
    price,
    stock: 10
  });
  renderSimStock();
  alert(`✅ Producto "${name}" agregado al inventario.`);
};

function renderSimFinance() {
  const tbody = document.getElementById('sim-finance-tbody');
  if (!tbody) return;

  tbody.innerHTML = SIM_STATE.finance.map(f => `
    <tr class="hover:bg-slate-900/50 transition-colors">
      <td class="p-3.5 font-mono text-slate-400">${f.date}</td>
      <td class="p-3.5">
        <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
          f.type === 'ingreso' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
          'bg-rose-500/10 text-rose-400 border border-rose-500/20'
        }">${f.type.toUpperCase()}</span>
      </td>
      <td class="p-3.5 font-bold text-white">${f.concept}</td>
      <td class="p-3.5 text-slate-400">${f.category}</td>
      <td class="p-3.5 text-right font-mono font-bold ${f.type === 'ingreso' ? 'text-emerald-400' : 'text-rose-400'}">
        ${f.type === 'ingreso' ? '+' : '-'}$${f.amount.toLocaleString('es-AR')}
      </td>
    </tr>
  `).join('');
}

function initSimCharts() {
  const ctxRev = document.getElementById('simChartRevenue');
  if (ctxRev && window.Chart) {
    new Chart(ctxRev, {
      type: 'bar',
      data: {
        labels: ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
        datasets: [
          {
            label: 'Ingresos ($)',
            data: [2800000, 3200000, 3900000, 4100000, 4500000, 4850000],
            backgroundColor: '#10B981',
            borderRadius: 6
          },
          {
            label: 'Egresos ($)',
            data: [1100000, 1250000, 1300000, 1400000, 1350000, 1420000],
            backgroundColor: '#F43F5E',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#94a3b8', font: { size: 11 } } }
        },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } },
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' } }
        }
      }
    });
  }

  const ctxCat = document.getElementById('simChartCategories');
  if (ctxCat && window.Chart) {
    new Chart(ctxCat, {
      type: 'doughnut',
      data: {
        labels: ['Celulares', 'Accesorios', 'Servicios CRM', 'Audio & Tablets'],
        datasets: [{
          data: [55, 20, 15, 10],
          backgroundColor: ['#2563EB', '#10B981', '#8B5CF6', '#F59E0B'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: '#94a3b8', font: { size: 11 } } }
        }
      }
    });
  }
}

window.exportSimulatorExcel = function() {
  if (typeof XLSX === 'undefined') {
    alert('Exportando reporte contable simulado...');
    return;
  }

  const wb = XLSX.utils.book_new();

  const finData = SIM_STATE.finance.map(f => ({
    'Fecha': f.date,
    'Tipo': f.type.toUpperCase(),
    'Concepto': f.concept,
    'Categoría': f.category,
    'Monto (ARS)': f.amount
  }));
  const wsFin = XLSX.utils.json_to_sheet(finData);
  XLSX.utils.book_append_sheet(wb, wsFin, 'Finanzas');

  const invData = SIM_STATE.inventory.map(i => ({
    'SKU': i.sku,
    'Producto': i.name,
    'Categoría': i.cat,
    'Costo Unitario': i.cost,
    'Precio Venta': i.price,
    'Stock Actual': i.stock
  }));
  const wsInv = XLSX.utils.json_to_sheet(invData);
  XLSX.utils.book_append_sheet(wb, wsInv, 'Inventario');

  XLSX.writeFile(wb, 'Reporte_Simulado_ERP_DylanBanegas.xlsx');
  alert('📊 Archivo "Reporte_Simulado_ERP_DylanBanegas.xlsx" generado y descargado con éxito.');
};


// ==================== 6. DIRECT EMAIL CONTACT FORM ====================

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const formStatus = document.getElementById('form-status');

  if (!contactForm || !submitBtn || !formStatus) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').trim();
    const email = (formData.get('email') || '').trim();
    const message = (formData.get('message') || '').trim();

    if (!name || !email || !message) return;

    // Loading State
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    submitBtn.innerHTML = `
      <svg class="animate-spin h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      <span>Enviando directamente a tu correo...</span>
    `;

    formStatus.className = 'hidden';
    formStatus.innerHTML = '';

    const targetEmail = 'banegasdylan1109@gmail.com';
    const payload = {
      name: name,
      email: email,
      message: message,
      _replyto: email,
      _subject: `Nuevo mensaje de Portfolio — ${name}`,
      _captcha: 'false',
      _template: 'table'
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true)) {
        // Successful direct delivery
        formStatus.className = 'text-xs text-center font-bold p-3.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 block transition-all';
        formStatus.innerHTML = '✅ ¡Mensaje enviado con éxito! Tu consulta fue enviada directamente al correo de Dylan (banegasdylan1109@gmail.com).';
        contactForm.reset();
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        // Initial 1-time activation check required by FormSubmit
        formStatus.className = 'text-xs text-left font-medium p-3.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 block space-y-1 transition-all';
        formStatus.innerHTML = '📩 <strong>Confirmación única:</strong> FormSubmit te envió un correo a <code>banegasdylan1109@gmail.com</code>. Hacé clic en <em>"Activate Form"</em> en tu Gmail por única vez para habilitar las entregas directas a tu bandeja de entrada.';
      } else {
        throw new Error(data.message || 'Error al procesar la solicitud');
      }
    } catch (err) {
      console.warn('Fallo en envío directo:', err);
      // Fallback
      formStatus.className = 'text-xs text-center font-medium p-3.5 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 block transition-all';
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent('Contacto Portfolio - ' + name)}&body=${encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\n\nMensaje:\n' + message)}`;
      formStatus.innerHTML = `No se pudo completar el envío automático. <a href="${mailtoUrl}" class="font-bold underline ml-1 hover:text-rose-900">Haz clic aquí para abrir tu app de correo</a>`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      submitBtn.innerHTML = originalBtnHTML;
    }
  });
}

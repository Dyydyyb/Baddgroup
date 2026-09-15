const puppeteer = require('C:/Users/dylan/.gemini/antigravity-ide/scratch/node_modules/puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  console.log('Verificando DP Ingeniería & Arquitectura ERP v4.0...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // Listen for any console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR:', msg.text());
    }
  });

  // 1. Dashboard (Analítica 6 KPIs & Gráfico Financiero multi-línea)
  await page.goto('http://localhost:3040/#dashboard', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'assets', '01_dashboard_dp.png'), fullPage: false });
  console.log('✓ Captured 01_dashboard_dp.png (Dashboard 6 KPIs & Gráfico Financiero)');

  // 2. Contratos & Subcontratos (Tab Subcontratos con Facturación, Ganancia y Margen %)
  await page.goto('http://localhost:3040/#contratos', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));
  await page.evaluate(() => App.switchContractsTab('subcontratos'));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'assets', '02_subcontratos_gremios.png'), fullPage: false });
  console.log('✓ Captured 02_subcontratos_gremios.png (Subcontratos: Facturación, Costo, Ganancia $ y Margen %)');

  // 3. Contratos Principales Comitentes (CAC & Fondo de Reparo 5%)
  await page.evaluate(() => App.switchContractsTab('principales'));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(__dirname, 'assets', '03_contratos_principales.png'), fullPage: false });
  console.log('✓ Captured 03_contratos_principales.png (Contratos Comitentes CAC)');

  // 4. Presupuestos & Cotizaciones (Interactivo con Cómputos y Métricas)
  await page.goto('http://localhost:3040/#presupuestos', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'assets', '04_presupuestos_interactivos.png'), fullPage: false });
  console.log('✓ Captured 04_presupuestos_interactivos.png (Presupuestos & Cotizaciones)');

  // 5. Presupuestos: Modal Nueva Cotización con Partidas Dinámicas
  await page.evaluate(() => App.openNewBudgetModal());
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'assets', '05_modal_nueva_cotizacion.png'), fullPage: false });
  console.log('✓ Captured 05_modal_nueva_cotizacion.png (Modal Creador de Cotizaciones)');

  // Cerrar modal
  await page.evaluate(() => {
    document.getElementById('newBudgetModalBackdrop')?.classList.remove('active');
  });
  await new Promise(r => setTimeout(r, 300));

  // 6. Agenda & Inspecciones (Calendario Mensual Interactivo)
  await page.goto('http://localhost:3040/#agenda', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'assets', '06_agenda_calendario.png'), fullPage: false });
  console.log('✓ Captured 06_agenda_calendario.png (Calendario Mensual de Inspecciones)');

  // 7. Presupuesto con Membrete Oficial
  await page.goto('http://localhost:3040/#presupuestos', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));
  await page.evaluate(() => App.openBudgetPrintModal('pre-001'));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(__dirname, 'assets', '07_presupuesto_membrete.png'), fullPage: false });
  console.log('✓ Captured 07_presupuesto_membrete.png (Membrete Oficial DP)');

  await browser.close();
  console.log('Todas las verificaciones y capturas han sido ejecutadas exitosamente.');
})();

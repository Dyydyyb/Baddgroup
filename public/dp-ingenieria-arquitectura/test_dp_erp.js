const puppeteer = require('C:/Users/dylan/.gemini/antigravity-ide/scratch/node_modules/puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  console.log('Launching Chrome to verify DP Ingeniería & Arquitectura ERP and generate Proposal PDF...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // 1. Dashboard
  await page.goto('http://localhost:3040/#dashboard', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(__dirname, 'assets', '01_dashboard_dp.png'), fullPage: false });
  console.log('✓ Captured 01_dashboard_dp.png');

  // 2. Contratos & Subcontratos (Tab 1: Principales comitentes)
  await page.goto('http://localhost:3040/#contratos', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'assets', '02_contratos_principales.png'), fullPage: false });
  console.log('✓ Captured 02_contratos_principales.png');

  // 3. Subcontratos (Tab 2: Subcontratos Gremios)
  await page.evaluate(() => App.switchContractsTab('subcontratos'));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'assets', '03_subcontratos_gremios.png'), fullPage: false });
  console.log('✓ Captured 03_subcontratos_gremios.png');

  // 4. Obras View (Grid)
  await page.goto('http://localhost:3040/#obras', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'assets', '04_obras_dp.png'), fullPage: false });
  console.log('✓ Captured 04_obras_dp.png');

  // 5. Presupuestos & Membrete Oficial
  await page.goto('http://localhost:3040/#presupuestos', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate(() => App.openBudgetPrintModal('pre-001'));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, 'assets', '05_presupuesto_membrete.png'), fullPage: false });
  console.log('✓ Captured 05_presupuesto_membrete.png');

  // 6. Propuesta Comercial Web Screenshot
  await page.goto('http://localhost:3040/propuesta.html', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(__dirname, 'assets', '06_propuesta_comercial_dp.png'), fullPage: true });
  console.log('✓ Captured 06_propuesta_comercial_dp.png');

  // 7. Generar PDF Oficial de Propuesta
  const pdfPath = path.join(__dirname, 'Propuesta_DP_Ingenieria_Arquitectura_Dylan_Banegas.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' }
  });
  console.log('✓ Generated PDF:', pdfPath);

  await browser.close();
  console.log('All verification tasks and deliverables generated successfully!');
})();

/**
 * Automotores Os-Car — ERP Chart Engine
 * Renderizador vectorial SVG de alto rendimiento para Gráficos de Evolución y Composición
 * Sin librerías pesadas externas, 100% interactivo, con soporte para tooltips y animaciones
 */

class ERPChartEngine {
  constructor() {
    this.salesMetric = 'montos'; // 'montos' | 'unidades'
    this.salesType = 'barras';   // 'barras' | 'lineas' | 'area'
    this.donutView = 'categoria'; // 'categoria' | 'condicion'
  }

  // =========================================================================
  // 1. Gráfico Principal de Evolución de Ventas
  // =========================================================================
  renderSalesChart(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const { months, montos, unidades } = data.salesEvolution;
    const isMontos = this.salesMetric === 'montos';
    const seriesA = isMontos ? montos.ceroKm : unidades.ceroKm; // 0km
    const seriesB = isMontos ? montos.usados : unidades.usados; // Usados

    const width = container.clientWidth || 700;
    const height = 300;
    const padding = { top: 30, right: 30, bottom: 40, left: 60 };

    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Calcular máximo para escala
    let maxVal = 0;
    if (this.salesType === 'barras') {
      // Barras agrupadas o comparadas
      maxVal = Math.max(...seriesA, ...seriesB) * 1.15;
    } else {
      maxVal = Math.max(...seriesA, ...seriesB) * 1.2;
    }
    if (maxVal === 0) maxVal = 100;

    // Generador de coordenadas
    const getX = (index) => padding.left + (index + 0.5) * (chartW / months.length);
    const getY = (val) => padding.top + chartH - (val / maxVal) * chartH;

    // Formateador de etiquetas de eje Y
    const formatY = (val) => {
      if (isMontos) {
        return `$${val >= 1 ? val.toFixed(0) : val.toFixed(1)}M`;
      }
      return `${Math.round(val)} un.`;
    };

    // Crear SVG
    let svg = `<svg viewBox="0 0 ${width} ${height}" class="chart-svg" style="width:100%; height:${height}px; overflow:visible;" aria-label="Gráfico de Evolución de Ventas">`;

    // Grilla horizontal de fondo (4 líneas guía)
    const gridSteps = 4;
    for (let i = 0; i <= gridSteps; i++) {
      const yVal = (maxVal / gridSteps) * i;
      const yPos = getY(yVal);
      svg += `
        <line x1="${padding.left}" y1="${yPos}" x2="${width - padding.right}" y2="${yPos}" stroke="var(--chart-grid)" stroke-width="1" stroke-dasharray="${i === 0 ? '0' : '4,4'}" />
        <text x="${padding.left - 10}" y="${yPos + 4}" font-size="11" font-family="var(--font-mono, monospace)" fill="var(--chart-axis-text)" text-anchor="end">${formatY(yVal)}</text>
      `;
    }

    // Renderizar según tipo: Barras, Líneas o Área
    if (this.salesType === 'barras') {
      const groupW = (chartW / months.length) * 0.65;
      const barW = groupW / 2 - 2;

      months.forEach((m, idx) => {
        const cx = getX(idx);
        const valA = seriesA[idx];
        const valB = seriesB[idx];
        const yA = getY(valA);
        const yB = getY(valB);
        const hA = Math.max(2, padding.top + chartH - yA);
        const hB = Math.max(2, padding.top + chartH - yB);

        const xA = cx - barW - 1;
        const xB = cx + 1;

        // Barra 0km (Rojo)
        svg += `
          <rect x="${xA}" y="${yA}" width="${barW}" height="${hA}" rx="4" fill="var(--brand-red)" class="chart-bar-interactive" data-month="${m}" data-series="0KM" data-val="${valA}" data-unit="${isMontos ? '$M' : 'unidades'}">
            <title>${m} · 0KM: ${isMontos ? '$' + valA + 'M' : valA + ' unidades'}</title>
          </rect>
        `;

        // Barra Usados (Gris Carbón / Azul Técnico)
        svg += `
          <rect x="${xB}" y="${yB}" width="${barW}" height="${hB}" rx="4" fill="var(--chart-secondary)" class="chart-bar-interactive" data-month="${m}" data-series="Usados" data-val="${valB}" data-unit="${isMontos ? '$M' : 'unidades'}">
            <title>${m} · Usados: ${isMontos ? '$' + valB + 'M' : valB + ' unidades'}</title>
          </rect>
        `;
      });
    } else {
      // Líneas o Área
      const pointsA = seriesA.map((v, i) => `${getX(i)},${getY(v)}`).join(' ');
      const pointsB = seriesB.map((v, i) => `${getX(i)},${getY(v)}`).join(' ');

      if (this.salesType === 'area') {
        const zeroY = padding.top + chartH;
        const areaPathA = `M ${getX(0)},${zeroY} L ${pointsA} L ${getX(months.length - 1)},${zeroY} Z`;
        const areaPathB = `M ${getX(0)},${zeroY} L ${pointsB} L ${getX(months.length - 1)},${zeroY} Z`;

        svg += `<path d="${areaPathA}" fill="rgba(168, 30, 36, 0.18)" />`;
        svg += `<path d="${areaPathB}" fill="rgba(30, 41, 59, 0.15)" />`;
      }

      // Trazos de línea
      svg += `<polyline points="${pointsA}" fill="none" stroke="var(--brand-red)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />`;
      svg += `<polyline points="${pointsB}" fill="none" stroke="var(--chart-secondary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0" />`;

      // Nodos circulares
      seriesA.forEach((v, i) => {
        svg += `
          <circle cx="${getX(i)}" cy="${getY(v)}" r="4.5" fill="#FFFFFF" stroke="var(--brand-red)" stroke-width="2.5" class="chart-point-interactive" data-month="${months[i]}" data-series="0KM" data-val="${v}" data-unit="${isMontos ? '$M' : 'unidades'}">
            <title>${months[i]} · 0KM: ${isMontos ? '$' + v + 'M' : v + ' unidades'}</title>
          </circle>
        `;
      });

      seriesB.forEach((v, i) => {
        svg += `
          <circle cx="${getX(i)}" cy="${getY(v)}" r="4" fill="#FFFFFF" stroke="var(--chart-secondary)" stroke-width="2" class="chart-point-interactive" data-month="${months[i]}" data-series="Usados" data-val="${v}" data-unit="${isMontos ? '$M' : 'unidades'}">
            <title>${months[i]} · Usados: ${isMontos ? '$' + v + 'M' : v + ' unidades'}</title>
          </circle>
        `;
      });
    }

    // Eje X con nombres de meses
    months.forEach((m, idx) => {
      const cx = getX(idx);
      svg += `
        <text x="${cx}" y="${height - 12}" font-size="12" font-family="var(--font-heading)" font-weight="600" fill="var(--chart-axis-text)" text-anchor="middle">${m}</text>
      `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
    this.attachChartTooltips(container);
  }

  // =========================================================================
  // 2. Gráfico Tipo Dona — Composición de Stock
  // =========================================================================
  renderStockDonut(containerId, legendContainerId, data) {
    const container = document.getElementById(containerId);
    const legendContainer = document.getElementById(legendContainerId);
    if (!container) return;

    const isCategory = this.donutView === 'categoria';
    const items = isCategory ? data.stockComposition.byCategory : data.stockComposition.byCondition;
    const totalCount = items.reduce((acc, curr) => acc + curr.count, 0);

    const size = 200;
    const center = size / 2;
    const radius = 78;
    const strokeWidth = 26;

    let accumulatedAngle = -90; // Empezar en las 12 en punto
    const circumference = 2 * Math.PI * radius;

    let svg = `<svg viewBox="0 0 ${size} ${size}" class="donut-svg" style="width:100%; max-width:200px; height:auto; display:block; margin:0 auto;">`;

    // Círculo base fondo
    svg += `<circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="var(--border-subtle)" stroke-width="${strokeWidth}" opacity="0.15" />`;

    items.forEach((item) => {
      const slicePercentage = item.count / totalCount;
      const strokeDash = slicePercentage * circumference;
      const strokeGap = circumference - strokeDash;

      svg += `
        <circle 
          cx="${center}" 
          cy="${center}" 
          r="${radius}" 
          fill="none" 
          stroke="${item.color}" 
          stroke-width="${strokeWidth}" 
          stroke-dasharray="${strokeDash} ${strokeGap}" 
          stroke-dashoffset="${-((accumulatedAngle + 90) / 360) * circumference}" 
          class="donut-segment"
          data-label="${item.category || item.condition}"
          data-count="${item.count}"
          data-perc="${item.percentage}%"
          style="transition: stroke-width 0.2s ease, opacity 0.2s ease; cursor:pointer;"
        >
          <title>${item.category || item.condition}: ${item.count} unidades (${item.percentage}%)</title>
        </circle>
      `;

      accumulatedAngle += slicePercentage * 360;
    });

    // Texto central
    svg += `
      <text x="${center}" y="${center - 6}" text-anchor="middle" font-size="28" font-family="var(--font-heading)" font-weight="900" fill="var(--text-main)">${totalCount}</text>
      <text x="${center}" y="${center + 16}" text-anchor="middle" font-size="11" font-family="var(--font-heading)" font-weight="700" letter-spacing="1px" text-transform="uppercase" fill="var(--text-muted)">EN STOCK</text>
    `;

    svg += `</svg>`;
    container.innerHTML = svg;

    // Renderizar leyenda interactiva
    if (legendContainer) {
      let legendHtml = `<div class="donut-legend-grid">`;
      items.forEach(item => {
        const label = item.category || item.condition;
        legendHtml += `
          <div class="legend-item" style="display:flex; align-items:center; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--border-light);">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:10px; height:10px; border-radius:50%; background-color:${item.color}; flex-shrink:0;"></span>
              <span style="font-size:0.84rem; font-weight:600; color:var(--text-main);">${label}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:0.84rem; font-weight:800; color:var(--text-main); font-family:var(--font-mono);">${item.count}</span>
              <span style="font-size:0.75rem; font-weight:600; color:var(--text-muted); width:40px; text-align:right;">${item.percentage}%</span>
            </div>
          </div>
        `;
      });
      legendHtml += `</div>`;
      legendContainer.innerHTML = legendHtml;
    }
  }

  // Tooltips contextuales para elementos de gráficos
  attachChartTooltips(container) {
    let tooltip = document.getElementById('erpChartTooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'erpChartTooltip';
      tooltip.className = 'chart-tooltip-floating';
      document.body.appendChild(tooltip);
    }

    const elements = container.querySelectorAll('.chart-bar-interactive, .chart-point-interactive');
    elements.forEach(el => {
      el.addEventListener('mouseenter', (e) => {
        const month = el.dataset.month;
        const series = el.dataset.series;
        const val = el.dataset.val;
        const unit = el.dataset.unit;
        const isM = unit === '$M';

        tooltip.innerHTML = `
          <div style="font-size:0.75rem; font-weight:700; color:#94A3B8; text-transform:uppercase; margin-bottom:2px;">${month} 2026</div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="width:8px; height:8px; border-radius:50%; background:${series === '0KM' ? '#A81E24' : '#1D4ED8'};"></span>
            <span style="font-weight:800; font-size:0.9rem; color:#FFFFFF;">${series}:</span>
            <span style="font-weight:900; font-size:0.9rem; color:#FFFFFF;">${isM ? '$' + val + 'M' : val + ' unidades'}</span>
          </div>
        `;
        tooltip.style.opacity = '1';
        tooltip.style.display = 'block';
      });

      el.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 12}px`;
        tooltip.style.top = `${e.pageY - 38}px`;
      });

      el.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
        tooltip.style.display = 'none';
      });
    });
  }
}

// Instancia global
if (typeof window !== 'undefined') {
  window.erpCharts = new ERPChartEngine();
}

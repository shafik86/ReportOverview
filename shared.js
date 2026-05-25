// SB Tape Group BI - Shared UI Logic

const MONTHS_ORDER = ["2026-05", "2026-04", "2026-03", "2026-02", "2026-01"];
const CURRENT_MONTH = "2026-05";

let selectedMonth = CURRENT_MONTH;

// ── Get selected month from URL or default ──────────────────
function initSelectedMonth() {
  const params = new URLSearchParams(window.location.search);
  const m = params.get('month');
  if (m && SBT_DATA.months[m]) {
    selectedMonth = m;
  } else {
    selectedMonth = CURRENT_MONTH;
  }
}

// ── Build Month Filter Bar ──────────────────────────────────
function buildMonthFilterBar(containerId, onSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `<span class="filter-label">Filter Bulan</span>`;

  MONTHS_ORDER.forEach(key => {
    const m = SBT_DATA.months[key];
    const hasData = m.records.length > 0;
    const isLocked = m.locked;
    const isActive = key === selectedMonth;
    const isDummy = m.source === 'dummy';

    const btn = document.createElement('button');
    btn.className = `month-btn${isActive ? ' active' : ''}${hasData ? ' has-data' : ''}${isLocked ? ' locked' : ''}`;
    btn.disabled = isLocked;

    let inner = '';
    if (hasData) inner += `<span class="dot"></span>`;
    inner += `<span>${m.label}</span>`;
    if (isDummy && hasData) inner += `<span class="badge-dummy">DEMO</span>`;

    btn.innerHTML = inner;
    btn.title = isLocked ? 'Tiada data untuk bulan ini' : m.label;

    btn.addEventListener('click', () => {
      if (isLocked) return;
      selectedMonth = key;
      // Update all buttons
      container.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Update URL without reload
      const url = new URL(window.location);
      url.searchParams.set('month', key);
      window.history.replaceState({}, '', url);
      if (onSelect) onSelect(key);
    });

    container.appendChild(btn);
  });
}

// ── Format numbers ──────────────────────────────────────────
function fmtNum(n, decimals = 0) {
  if (n == null || isNaN(n)) return '—';
  return parseFloat(n).toLocaleString('en-MY', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function fmtM2(n) {
  if (n == null || isNaN(n)) return '—';
  const v = parseFloat(n);
  if (v >= 1000000) return (v / 1000000).toFixed(2) + ' M';
  if (v >= 1000) return (v / 1000).toFixed(1) + ' K';
  return v.toFixed(1);
}

// ── Color badge ─────────────────────────────────────────────
function colorBadge(color) {
  const c = (color || '').toLowerCase();
  return `<span class="badge badge-${c}">${color || '—'}</span>`;
}

// ── Output status ───────────────────────────────────────────
function outputBadge(qtyOutput) {
  if (qtyOutput == null) return `<span class="badge badge-pending">PENDING</span>`;
  return `<span class="badge badge-ok">DONE</span>`;
}

// ── Active month label ──────────────────────────────────────
function getActiveMonthLabel() {
  return SBT_DATA.months[selectedMonth]?.label || '';
}
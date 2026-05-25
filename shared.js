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

// ── Build Month Filter Bar with 12 months ──────────────────
function buildMonthFilterBar(containerId, onSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Create 12 months (Jan-Dec 2026)
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthKeys = [
    '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06',
    '2026-07', '2026-08', '2026-09', '2026-10', '2026-11', '2026-12'
  ];

  // Only 3 latest months are enabled (May, April, March)
  const enabledMonths = ['2026-05', '2026-04', '2026-03'];

  monthKeys.forEach((key, index) => {
    const m = SBT_DATA.months[key] || { label: monthLabels[index], locked: true, records: [], source: 'empty' };
    const isEnabled = enabledMonths.includes(key);
    const hasData = m.records && m.records.length > 0;
    const isActive = key === selectedMonth;
    const isDummy = m.source === 'dummy';

    const btn = document.createElement('button');
    btn.className = `month-btn${isActive ? ' active' : ''}${hasData ? ' has-data' : ''}${!isEnabled ? ' locked' : ''}`;
    btn.disabled = !isEnabled;
    btn.textContent = monthLabels[index];

    if (hasData) {
      btn.innerHTML = `<span class="dot"></span>${monthLabels[index]}`;
    }

    btn.title = !isEnabled ? 'Tiada data' : m.label;

    btn.addEventListener('click', () => {
      if (!isEnabled) return;
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
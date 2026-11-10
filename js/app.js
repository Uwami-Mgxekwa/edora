/* ============================================================
   EDORA — Application Logic
   All page renderers, event handlers, and interactions
   ============================================================ */

'use strict';

// ============================================================
//  ICON LIBRARY  (Lucide-style inline SVG, 16×16 stroke)
// ============================================================
const IC = {
  // Navigation
  home:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  book:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  clipboardList:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  folder:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  calendar:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  sparkles:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.88 5.76a1 1 0 0 0 .95.69h6.07l-4.91 3.57a1 1 0 0 0-.36 1.12L17.5 20l-4.91-3.57a1 1 0 0 0-1.18 0L6.5 20l1.88-5.76a1 1 0 0 0-.36-1.12L3.1 9.45h6.07a1 1 0 0 0 .95-.69L12 3z"/></svg>`,
  clock:       `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  barChart:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  bell:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  settings:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  // Actions & UI
  alertTriangle:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  checkCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  pin:         `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17z"/></svg>`,
  partyPopper: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 11.3L2 22l10.7-3.79"/><path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-7.5 7.5"/><path d="M10 11.5l1.5 1.5M14 10l1.5 1.5"/><path d="M5 7l3.5 3.5"/></svg>`,
  inbox:       `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  search:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  arrowLeft:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowRight:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  x:           `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  undo:        `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.95"/></svg>`,
  trash:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
  send:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  user:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  mail:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  lock:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  school:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  // Material type icons (20px for mat-icon slots)
  fileText:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  video:       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  bookOpen:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  presentation:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="M7 21l5-5 5 5"/></svg>`,
  newspaper:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></svg>`,
  // Stat / status icons
  fileCheck:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></svg>`,
  hourglass:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>`,
  checkSquare: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  calendarCheck:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>`,
  books:       `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M12 6v8M9 9l3-3 3 3"/></svg>`,
  trendingUp:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  award:       `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  zap:         `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  star:        `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  target:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  megaphone:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
  alertCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  logOut:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  uploadCloud: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>`,
  shield:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  refreshCw:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
};

// Helper: wrap icon in a consistent span
const icon = (name, size) => {
  const svg = IC[name];
  if (!svg) return '';
  if (!size) return svg;
  // scale to requested size
  return svg.replace(/width="[\d]+"/, `width="${size}"`).replace(/height="[\d]+"/, `height="${size}"`);
};

// Material type → icon name map
const matIcon = y => ({
  'PDF Notes':    'fileText',
  'Video':        'video',
  'Study Guide':  'bookOpen',
  'Presentation': 'presentation',
  'Reading':      'newspaper'
})[y] || 'fileText';

// ── Utility helpers ──────────────────────────────────────────
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const sub = id => D.subjects.find(x => x.id === id);

const fd = d => new Date(d + 'T00:00').toLocaleDateString('en-ZA', {
  weekday: 'short', day: 'numeric', month: 'short'
});

const fdFull = d => new Date(d + 'T00:00').toLocaleDateString('en-ZA', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
});

const stat = a => {
  const s = S.as[a.id] || a.st;
  if (s !== 'Submitted' && s !== 'Graded' && a.due < today) return 'Overdue';
  return s;
};

const chipClass = s => {
  const map = {
    'Submitted':   'chip success',
    'Graded':      'chip success',
    'Overdue':     'chip danger',
    'High':        'chip danger',
    'In progress': 'chip warning',
    'Medium':      'chip warning',
    'Not started': 'chip',
    'Low':         'chip info'
  };
  return map[s] || 'chip';
};

const bar = (p, cls) =>
  `<div class="bar${cls ? ' ' + cls : ''}"><i style="width:${Math.min(100, Math.max(0, p))}%"></i></div>`;

const pcnt = (n, t) => t ? Math.round(100 * n / t) : 0;

const escHtml = s => String(s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const daysUntil = d => {
  const diff = Math.round((new Date(d + 'T00:00') - new Date(today + 'T00:00')) / 86400000);
  if (diff < 0)   return `${Math.abs(diff)}d overdue`;
  if (diff === 0) return 'Due today';
  if (diff === 1) return 'Due tomorrow';
  return `Due in ${diff}d`;
};

const matIconBg = y => ({
  'PDF Notes':    '#FEF3C7',
  'Video':        '#FCE7F3',
  'Study Guide':  '#DCFCE7',
  'Presentation': '#DBEAFE',
  'Reading':      '#F3E8FF'
})[y] || '#F5F5F5';

const prog = () => {
  const a = D.assignments;
  const n = a.filter(x => ['Submitted','Graded'].includes(stat(x))).length;
  return { n, t: a.length, pct: pcnt(n, a.length) };
};

const unread = () => D.notifs.filter(n => !S.nt[n.id]).length;

const greeting = () => {
  const h = new Date().getHours();
  return h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
};

// ── Toast ─────────────────────────────────────────────────────
const toast = msg => {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.append(t);
  setTimeout(() => t.remove(), 2400);
};

// ── Modal ─────────────────────────────────────────────────────
const showModal = (title, body) => {
  $('#mbox').innerHTML = `
    <div class="modal-header">
      <h2>${escHtml(title)}</h2>
      <button class="btn sec sm" data-a="close" style="gap:4px">${icon('x')} Close</button>
    </div>
    ${body}`;
  $('#modal').classList.add('show');
};

const closeModal = () => $('#modal').classList.remove('show');
window.handleModalClick = e => { if (e.target === $('#modal')) closeModal(); };

// ── Sidebar ───────────────────────────────────────────────────
window.toggleSidebar = () => {
  $('#sb').classList.toggle('open');
  $('#overlay').classList.toggle('show');
};
window.closeSidebar = () => {
  $('#sb').classList.remove('open');
  $('#overlay').classList.remove('show');
};

// ── Navigation config ─────────────────────────────────────────
const NAV = [
  { id:'dash',        label:'Dashboard',         icon:'home',         section:'main',    file:'dashboard.html'     },
  { id:'subjects',    label:'My Subjects',        icon:'book',         section:'main',    file:'mysubjects.html'    },
  { id:'assignments', label:'Assignments',        icon:'clipboardList',section:'main',    file:'assignments.html'   },
  { id:'materials',   label:'Learning Materials', icon:'folder',       section:'main',    file:'materials.html'     },
  { id:'missed',      label:'I Missed School',    icon:'calendar',     section:'main',    file:'missed.html'        },
  { id:'ai',          label:'EDORA AI',           icon:'sparkles',     section:'tools',   file:'ai.html'            },
  { id:'planner',     label:'Study Planner',      icon:'clock',        section:'tools',   file:'planner.html'       },
  { id:'progress',    label:'Academic Progress',  icon:'barChart',     section:'tools',   file:'progress.html'      },
  { id:'notifs',      label:'Notifications',      icon:'bell',         section:'account', file:'notifications.html' },
  { id:'profile',     label:'Profile & Settings', icon:'settings',     section:'account', file:'profile.html'       }
];

// Map page IDs to their HTML files (for inline links)
const PAGE_FILE = {
  dash: 'dashboard.html', subjects: 'mysubjects.html', assignments: 'assignments.html',
  materials: 'materials.html', missed: 'missed.html', ai: 'ai.html',
  planner: 'planner.html', progress: 'progress.html', notifs: 'notifications.html',
  profile: 'profile.html'
};
const pageHref = id => PAGE_FILE[id] || 'dashboard.html';
const SECTION_LABELS = { main:'Learn', tools:'Plan', account:'Account' };

// ── Shared partials ───────────────────────────────────────────
const opts = (arr, placeholder) =>
  (placeholder ? `<option value="">${placeholder}</option>` : '') +
  arr.map(([v,l]) => `<option value="${v}">${escHtml(l)}</option>`).join('');

const SO = D.subjects.map(s => [s.id, s.n]);

const asgCardHTML = a => {
  const s  = stat(a);
  const lc = s.toLowerCase().replace(/\s+/g,'-');
  return `
  <div class="asg-card ${lc}">
    <div class="asg-left">
      <div class="asg-title">${escHtml(a.t)}</div>
      <div class="asg-meta">${sub(a.s).n} &nbsp;·&nbsp; Given ${fd(a.g)} &nbsp;·&nbsp; Due ${fd(a.due)}</div>
      <div class="asg-desc">${escHtml(a.d)}</div>
      <div class="asg-chips">
        <span class="${chipClass(s)}">${s}</span>
        <span class="${chipClass(a.pr)}">${a.pr} priority</span>
        <span class="chip">${daysUntil(a.due)}</span>
      </div>
    </div>
    <div class="asg-right">
      <button class="btn sm" data-a="viewAsg" data-v="${a.id}">
        ${['Submitted','Graded'].includes(s) ? 'View' : 'Open'}
      </button>
    </div>
  </div>`;
};

const matCardHTML = m => `
  <div class="mat-card">
    <div class="mat-icon" style="background:${matIconBg(m.y)}">${icon(matIcon(m.y), 18)}</div>
    <div class="flex1">
      <div style="font-size:14px;font-weight:600;color:var(--text-primary)">${escHtml(m.t)}</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">${sub(m.s).n} · ${m.y} · ${m.size}</div>
    </div>
    <button class="btn sec sm" data-a="viewMat" data-v="${m.id}">Open</button>
  </div>`;

const asgList = () => {
  const fS = $('#filter-subj')?.value || '';
  const fT = $('#filter-stat')?.value || '';
  const fP = $('#filter-pri')?.value  || '';
  const list = D.assignments.filter(a =>
    (!fS || a.s === fS) && (!fT || stat(a) === fT) && (!fP || a.pr === fP)
  );
  return list.length
    ? list.map(asgCardHTML).join('')
    : `<div class="empty"><div class="empty-icon" style="opacity:.4">${icon('inbox',36)}</div><div class="empty-text">No assignments match these filters.</div></div>`;
};

const matList = () => {
  const q  = ($('#mat-search')?.value || '').toLowerCase();
  const fY = $('#mat-type')?.value || '';
  const fS = $('#mat-subj')?.value || '';
  const list = D.materials.filter(m =>
    (!q  || m.t.toLowerCase().includes(q)) &&
    (!fY || m.y === fY) &&
    (!fS || m.s === fS)
  );
  return list.length
    ? list.map(matCardHTML).join('')
    : `<div class="empty"><div class="empty-icon" style="opacity:.4">${icon('search',36)}</div><div class="empty-text">No resources match your search.</div></div>`;
};

const chatHTML = () => S.chat.length
  ? S.chat.map(m => `<div class="m ${m.r}">${m.t}</div>`).join('')
  : `<p style="color:var(--text-tertiary);font-size:13px;text-align:center;padding:20px 0">Ask me anything about your schoolwork.</p>`;

const plItem = p => `
  <div class="pill ${p.done ? 'done' : ''}">
    <div class="pill-time">${p.time}${p.duration ? ' · ' + p.duration : ''}</div>
    <div class="pill-subj">${sub(p.s).n}</div>
    <div class="pill-actions">
      <button class="btn sm sec" style="padding:3px 7px" data-a="plDone" data-v="${p.id}" title="${p.done ? 'Undo' : 'Mark done'}">${p.done ? icon('undo') : icon('check')}</button>
      <button class="btn sm sec d" style="padding:3px 7px" data-a="plDel" data-v="${p.id}" title="Delete">${icon('trash')}</button>
    </div>
  </div>`;

// ── AI bot ────────────────────────────────────────────────────
const BOT = [
  [/python|function|recursion|loop|variable|list|dict|tuple/i,
   'In Python: <strong>functions</strong> use <code>def</code>, <strong>recursion</strong> needs a base case (e.g. factorial: if n==0 return 1). Lists are mutable; tuples immutable; dictionaries give O(1) lookup. Always test with edge cases like 0 or empty inputs.'],
  [/sql|join|select|query|database|table|normaliz/i,
   '<strong>SQL JOINs:</strong> INNER JOIN returns matching rows in both tables; LEFT JOIN keeps all rows from the left. For normalisation — 1NF: atomic values; 2NF: no partial dependencies; 3NF: no transitive dependencies. Each step reduces redundancy.'],
  [/binary|hex|octal|number.?system|convert|logic.?gate|boolean/i,
   '<strong>Number conversion:</strong> Binary → Hex: group 4 bits from the right. Hex → Decimal: multiply each digit by 16^position. Logic gates: AND (both true), OR (one true), NOT (inverts). De Morgan\'s law: NOT(A AND B) = NOT A OR NOT B.'],
  [/linked.?list|stack|queue|data.?struct|big.?o|complex|oop|object|class|inherit/i,
   '<strong>Big-O:</strong> O(1) constant → O(log n) binary search → O(n) linear scan → O(n²) nested loops. Linked list insert at head is O(1); search is O(n). OOP pillars: encapsulation, inheritance, polymorphism, abstraction.'],
  [/html|css|javascript|dom|responsive|flexbox|grid|web/i,
   '<strong>Responsive CSS:</strong> <code>grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))</code> creates flexible layouts. Use Flexbox for one-dimension, Grid for two. Media queries: 768px tablet breakpoint, 480px mobile. Always test on small screens first.'],
  [/use.?case|uml|sdlc|requirement|system.?design|analysis/i,
   '<strong>Use Case Diagrams:</strong> Actors are outside the system boundary (rectangles). Use cases are ovals. <em>Include</em> = mandatory sub-step. <em>Extend</em> = optional step triggered by a condition. The SDLC phases: Planning → Analysis → Design → Implementation → Testing → Maintenance.'],
  [/bfs|dfs|search|graph|algorithm|heuristic|a\*|neural|machine.?learn|ai/i,
   '<strong>BFS</strong> uses a queue (FIFO) — visits all neighbours before going deeper; best for shortest path in unweighted graphs. <strong>DFS</strong> uses a stack (LIFO) — goes as deep as possible first. Both run in O(V+E) time where V = vertices, E = edges.'],
  [/e.?business|e.?commerce|revenue|digital.?market|payment|online.?store/i,
   '<strong>E-business models:</strong> B2C (business to consumer), B2B, C2C (like marketplace sellers). Revenue streams: transaction fees, subscriptions, advertising, freemium. South African examples: Takealot (transaction fee), Naspers/PayU (payments). Always consider cybersecurity and trust.'],
  [/plan|schedule|study|revise|time.manag|pomodoro/i,
   'Try <strong>Pomodoro</strong>: 25-min focused session, 5-min break, long break every 4 sessions. Add sessions in the Study Planner. Hardest module first when you\'re fresh. One session per module per day before an assessment.'],
  [/miss|absent|catch.?up/i,
   'Open <strong>I Missed School</strong> in the sidebar, choose your absent dates, and EDORA builds a personalised catch-up plan — lessons first, then materials, then assignments.'],
];

const botReply = q => {
  const m = BOT.find(([rx]) => rx.test(q));
  return m ? m[1] : "I can help with programming, databases, computer architecture, web development, AI, system analysis, e-business, study planning, and catching up after absence. What would you like help with?";
};

// ============================================================
//  SUBJECT ICONS  (SVG instead of emoji)
// ============================================================
const SUBJ_ICONS = {
  // First Year
  prog1: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  dbms1: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  arch1: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  // Second Year
  prog2: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="10" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  web2:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  sad2:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
  ai2:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 1 9 9c0 4.17-2.84 7.67-6.72 8.65"/><path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.72 8.65"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M12 7c2 2 4 3 7 3M12 7c-2 2-4 3-7 3M12 14c2-2 4-3 7-3M12 14c-2-2-4-3-7-3"/></svg>`,
  ebus2: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
};

// Map each module ID to its thumbnail image
const SUBJ_IMG = {
  prog1: 'assets/images/modules/pexels-arturoaez225-18734876.jpg',
  dbms1: 'assets/images/modules/pexels-peaky-29445973.jpg',
  arch1: 'assets/images/modules/pexels-nicolas-foster-65973708-14844846.jpg',
  prog2: 'assets/images/modules/pexels-deepanker70-1482061.jpg',
  web2:  'assets/images/modules/pexels-peaky-31343630.jpg',
  sad2:  'assets/images/modules/pexels-sora-shimazaki-5926382.jpg',
  ai2:   'assets/images/modules/pexels-thirdman-5257579.jpg',
  ebus2: 'assets/images/modules/pexels-zayedhossain120-36706460.jpg',
};
const notifIcon = k => ({
  'Assignment':   'clipboardList',
  'New Material': 'folder',
  'Announcement': 'megaphone',
  'Assessment':   'calendarCheck',
})[k] || 'bell';

// ============================================================
//  PAGE RENDERERS
// ============================================================

const R = {

  // ── DASHBOARD ─────────────────────────────────────────────
  dash() {
    const u       = S.user;
    const p       = prog();
    const pending = D.assignments.filter(a => !['Submitted','Graded'].includes(stat(a)));
    const nextUp  = [...pending].sort((a,b) => a.due > b.due ? 1 : -1);
    const overdue = pending.filter(a => stat(a) === 'Overdue');
    const nextAsg = nextUp[0];

    return `
    <div style="margin-bottom:24px">
      <div class="hero">
        <div>
          <div class="hero-eyebrow">Good ${greeting()}, ${escHtml(u.name.split(' ')[0])}</div>
          <h1>${escHtml(u.name.split(' ')[0])}'s Dashboard</h1>
          <p class="hero-sub">${fdFull(today)} &nbsp;·&nbsp; ${escHtml(u.grade)}, ${escHtml(u.school || 'EDORA')}</p>
          ${nextAsg
            ? `<div class="hero-badge">
                 ${stat(nextAsg) === 'Overdue' ? icon('alertCircle') : icon('pin')}
                 Next: ${escHtml(nextAsg.t)} — ${daysUntil(nextAsg.due)}
               </div>`
            : `<div class="hero-badge">${icon('checkCircle')} You are all caught up. Great work!</div>`}
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          ${overdue.length ? `<a href="assignments.html" class="btn" style="text-decoration:none;background:var(--danger);color:#fff;gap:6px">${icon('alertTriangle')} ${overdue.length} Overdue</a>` : ''}
          <a href="missed.html" class="btn" style="text-decoration:none;gap:6px">${icon('calendar')} I missed school</a>
        </div>
      </div>
    </div>

    <div class="grid g4">
      <div class="stat-card">
        <div class="stat-icon">${icon('fileCheck',20)}</div>
        <div class="stat-body"><div class="stat-value">${p.t}</div><div class="stat-label">Total Assignments</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon orange">${icon('hourglass',20)}</div>
        <div class="stat-body"><div class="stat-value">${pending.length}</div><div class="stat-label">Pending</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">${icon('checkSquare',20)}</div>
        <div class="stat-body"><div class="stat-value">${p.n}</div><div class="stat-label">Completed</div></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue">${icon('calendarCheck',20)}</div>
        <div class="stat-body"><div class="stat-value">${D.tests.length}</div><div class="stat-label">Upcoming Assessments</div></div>
      </div>
    </div>

    <div class="grid g2">

      <div class="card">
        <h2 style="margin-bottom:14px">Upcoming Deadlines</h2>
        ${nextUp.length ? `<ul class="ul">
          ${nextUp.slice(0,5).map(a => `
            <li>
              <div class="item-main">
                <div class="item-title">${escHtml(a.t)}</div>
                <div class="item-sub">${sub(a.s).n}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div><span class="${chipClass(stat(a))}">${stat(a)}</span></div>
                <div style="font-size:11px;color:var(--text-secondary);margin-top:3px">${fd(a.due)}</div>
              </div>
            </li>`).join('')}
        </ul>` : `<div class="empty"><div class="empty-icon" style="opacity:.4">${icon('checkSquare',36)}</div><div class="empty-text">No pending assignments!</div></div>`}
        <a href="assignments.html" class="btn sec sm" style="text-decoration:none;margin-top:12px;display:inline-flex;gap:4px">View all assignments ${icon('arrowRight')}</a>
      </div>

      <div class="card">
        <h2 style="margin-bottom:6px">Overall Progress</h2>
        <p style="font-size:13px;margin-bottom:12px">${p.n} of ${p.t} assignments completed</p>
        ${bar(p.pct, 'thick')}
        <div style="display:flex;justify-content:space-between;margin-top:6px;margin-bottom:20px">
          <span style="font-size:12px;color:var(--text-secondary)">Completion rate</span>
          <span style="font-size:15px;font-weight:800">${p.pct}%</span>
        </div>
        <h2 style="margin-bottom:10px">Quick access</h2>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <a href="assignments.html" class="btn sec sm" style="text-decoration:none;gap:5px">${icon('clipboardList')} Assignments</a>
          <a href="planner.html"     class="btn sec sm" style="text-decoration:none;gap:5px">${icon('clock')} Planner</a>
          <a href="ai.html"          class="btn sec sm" style="text-decoration:none;gap:5px">${icon('sparkles')} EDORA AI</a>
          <a href="missed.html"      class="btn sec sm" style="text-decoration:none;gap:5px">${icon('calendar')} Missed school</a>
        </div>
      </div>

      <div class="card">
        <h2 style="margin-bottom:14px">Recent Classroom Activity</h2>
        <ul class="ul">
          ${D.lessons.slice(0,5).map(l => `
            <li>
              <div class="item-main">
                <div class="item-title">${escHtml(l.topic)}</div>
                <div class="item-sub">${sub(l.s).n}</div>
              </div>
              <span style="font-size:12px;color:var(--text-secondary);flex-shrink:0">${fd(l.d)}</span>
            </li>`).join('')}
        </ul>
        <a href="missed.html" class="btn sec sm" style="text-decoration:none;margin-top:12px;display:inline-flex;gap:4px">View full lesson log ${icon('arrowRight')}</a>
      </div>

      <div class="card">
        <h2 style="margin-bottom:14px">New Learning Materials</h2>
        <ul class="ul">
          ${D.materials.slice().sort((a,b) => a.d < b.d ? 1 : -1).slice(0,5).map(m => `
            <li>
              <div class="item-main">
                <div class="item-title">${escHtml(m.t)}</div>
                <div class="item-sub">${m.y} · ${sub(m.s).n}</div>
              </div>
              <button class="btn sec sm" data-a="viewMat" data-v="${m.id}">Open</button>
            </li>`).join('')}
        </ul>
        <a href="materials.html" class="btn sec sm" style="text-decoration:none;margin-top:12px;display:inline-flex;gap:4px">View all materials ${icon('arrowRight')}</a>
      </div>

    </div>

    <div class="card">
      <h2 style="margin-bottom:14px">Upcoming Assessments</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px">
        ${D.tests.map(t => `
          <div style="background:var(--surface);border-radius:var(--radius-md);padding:14px">
            <div style="font-size:11px;font-weight:700;color:var(--warning);text-transform:uppercase;letter-spacing:.05em;margin-bottom:5px">${t.type}</div>
            <div style="font-size:14px;font-weight:600;margin-bottom:4px">${escHtml(t.t)}</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">${sub(t.s).n}</div>
            <span class="chip">${fd(t.d)}</span>
          </div>`).join('')}
      </div>
    </div>`;
  },

  // ── MY SUBJECTS ───────────────────────────────────────────
  subjects(id) {
    if (id) {
      const s  = sub(id); if (!s) return R.subjects();
      const A  = D.assignments.filter(a => a.s === id);
      const M  = D.materials.filter(m => m.s === id);
      const L  = D.lessons.filter(l => l.s === id);
      const T  = D.tests.filter(t => t.s === id);
      const AN = D.ann.filter(a => a.s === id);
      return `
        <div style="margin-bottom:20px">
          <a href="mysubjects.html" class="btn ghost sm" style="text-decoration:none;display:inline-flex;margin-bottom:12px;gap:4px">${icon('arrowLeft')} All Subjects</a>
          <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
            <div style="width:52px;height:52px;border-radius:14px;background:var(--surface);display:flex;align-items:center;justify-content:center;color:var(--text-secondary)">${SUBJ_ICONS[s.id] || icon('book',22)}</div>
            <div>
              <h1>${s.n}</h1>
              <p>${s.t} · <a href="mailto:${s.e}" style="color:var(--text-secondary)">${s.e}</a></p>
            </div>
          </div>
        </div>

        <div class="card" style="margin-bottom:16px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <h2>Your Progress</h2>
            <span style="font-size:22px;font-weight:800;letter-spacing:-.03em">${s.p}%</span>
          </div>
          ${bar(s.p,'thick')}
          <p style="font-size:13px;margin-top:8px">${s.desc}</p>
        </div>

        <div class="grid g2">
          <div class="card">
            <h2 style="margin-bottom:12px;display:flex;align-items:center;gap:7px">${icon('megaphone')} Announcements</h2>
            ${AN.length
              ? `<ul class="ul">${AN.map(a => `<li><div class="item-main"><div class="item-title" style="font-weight:400">${escHtml(a.t)}</div></div><span style="font-size:12px;color:var(--text-secondary);flex-shrink:0">${fd(a.d)}</span></li>`).join('')}</ul>`
              : `<p class="muted" style="font-size:13px">No announcements yet.</p>`}
          </div>
          <div class="card">
            <h2 style="margin-bottom:12px;display:flex;align-items:center;gap:7px">${icon('calendarCheck')} Assessments</h2>
            ${T.length
              ? `<ul class="ul">${T.map(t => `<li><div class="item-main"><div class="item-title">${escHtml(t.t)}</div><div class="item-sub">${t.scope}</div></div><span class="chip">${fd(t.d)}</span></li>`).join('')}</ul>`
              : `<p class="muted" style="font-size:13px">No assessments scheduled.</p>`}
          </div>
          <div class="card">
            <h2 style="margin-bottom:12px;display:flex;align-items:center;gap:7px">${icon('bookOpen')} Classwork &amp; Lessons</h2>
            ${L.length
              ? `<ul class="ul">${L.map(l => `<li><div class="item-main"><div class="item-title">${escHtml(l.topic)}</div><div class="item-sub">${escHtml(l.notes)}</div></div><span style="font-size:12px;color:var(--text-secondary);flex-shrink:0">${fd(l.d)}</span></li>`).join('')}</ul>`
              : `<p class="muted" style="font-size:13px">No lessons recorded.</p>`}
          </div>
          <div class="card">
            <h2 style="margin-bottom:12px;display:flex;align-items:center;gap:7px">${icon('folder')} Learning Materials</h2>
            ${M.length
              ? M.map(m => `<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)"><div style="background:${matIconBg(m.y)};width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--text-secondary)">${icon(matIcon(m.y),16)}</div><div class="flex1" style="font-size:13px;font-weight:500">${escHtml(m.t)}</div><button class="btn sec sm" data-a="viewMat" data-v="${m.id}">Open</button></div>`).join('')
              : `<p class="muted" style="font-size:13px">No materials uploaded yet.</p>`}
          </div>
          <div class="card" style="grid-column:1/-1">
            <h2 style="margin-bottom:12px;display:flex;align-items:center;gap:7px">${icon('clipboardList')} Assignments</h2>
            ${A.length
              ? A.map(a => `<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)"><div class="flex1"><div style="font-size:14px;font-weight:600">${escHtml(a.t)}</div><div style="font-size:12px;color:var(--text-secondary);margin-top:2px">Due ${fd(a.due)}</div></div><span class="${chipClass(stat(a))}">${stat(a)}</span><button class="btn sm" data-a="viewAsg" data-v="${a.id}">Open</button></div>`).join('')
              : `<p class="muted" style="font-size:13px">No assignments for this subject.</p>`}
          </div>
        </div>`;
    }

    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>My Subjects</h1>
          <p>Select a subject to view lessons, materials and assignments.</p>
        </div>
      </div>
      <div class="grid g3">
        ${D.subjects.map(s => `
          <a href="mysubjects.html#subjects/${s.id}" class="subject-card card-hover" style="text-decoration:none">
            <div class="subject-card-thumb" style="background-image:url('${SUBJ_IMG[s.id]}')">
              <div class="subject-card-year">${s.year === 1 ? 'Year 1' : 'Year 2'}</div>
            </div>
            <div class="subject-card-body">
              <div class="subject-name">${s.n}</div>
              <div class="subject-teacher">${s.t}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
                <span style="font-size:12px;color:var(--text-secondary)">Progress</span>
                <span style="font-size:13px;font-weight:700">${s.p}%</span>
              </div>
              ${bar(s.p)}
            </div>
          </a>`).join('')}
      </div>`;
  },

  // ── ASSIGNMENTS ───────────────────────────────────────────
  assignments() {
    const p = prog();
    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>Assignments</h1>
          <p>${p.n} of ${p.t} completed · ${p.pct}% done</p>
        </div>
        <a href="missed.html" class="btn sec sm" style="text-decoration:none;gap:5px">${icon('calendar')} Catch-up mode</a>
      </div>
      <div style="margin-bottom:4px">${bar(p.pct)}</div>
      <div class="filters">
        <select id="filter-subj" data-live="asg">${opts(SO,'All subjects')}</select>
        <select id="filter-stat" data-live="asg">${opts(['Not started','In progress','Submitted','Overdue','Graded'].map(x=>[x,x]),'All statuses')}</select>
        <select id="filter-pri"  data-live="asg">${opts([['High','High'],['Medium','Medium'],['Low','Low']],'All priorities')}</select>
      </div>
      <div id="asg-list">${asgList()}</div>`;
  },

  // ── LEARNING MATERIALS ────────────────────────────────────
  materials() {
    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>Learning Materials</h1>
          <p>${D.materials.length} resources across ${D.subjects.length} subjects.</p>
        </div>
      </div>
      <div class="filters">
        <div style="position:relative;flex:1;max-width:280px">
          <span style="position:absolute;left:11px;top:50%;transform:translateY(-50%);opacity:.45;pointer-events:none">${icon('search')}</span>
          <input id="mat-search" data-live="mat" placeholder="Search resources…" style="padding-left:34px">
        </div>
        <select id="mat-type" data-live="mat">${opts(['PDF Notes','Presentation','Study Guide','Reading','Video'].map(x=>[x,x]),'All types')}</select>
        <select id="mat-subj" data-live="mat">${opts(SO,'All subjects')}</select>
      </div>
      <div id="mat-list">${matList()}</div>`;
  },

  // ── I MISSED SCHOOL ───────────────────────────────────────
  missed() {
    const f = S.mf || day(-3);
    const t = S.mt || day(-1);
    const L = D.lessons.filter(l => l.d >= f && l.d <= t);
    const M = D.materials.filter(m => m.d >= f && m.d <= t);
    const A = D.assignments.filter(a => a.g >= f && a.g <= t);
    const outstanding = D.assignments.filter(a => !['Submitted','Graded'].includes(stat(a)));

    const tasks = [
      ...L.map(l   => ({ id:'l'+l.id,  text:`Read lesson notes: ${l.topic} (${sub(l.s).n})`,    taskIcon:'bookOpen'      })),
      ...M.map(m   => ({ id:'m'+m.id,  text:`Open resource: ${m.t}`,                             taskIcon:'folder'        })),
      ...A.filter(a => !['Submitted','Graded'].includes(stat(a)))
          .map(a   => ({ id:'a'+a.id,  text:`Complete: "${a.t}" — due ${fd(a.due)}`,             taskIcon:'clipboardList'  })),
      ...D.tests.slice(0,2)
          .map(tt  => ({ id:'t'+tt.id, text:`Start revising for ${tt.t} on ${fd(tt.d)}`,         taskIcon:'calendarCheck'  }))
    ];
    const done = tasks.filter(tk => S.cu[tk.id]).length;

    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>I Missed School</h1>
          <p>Select the dates you were away. EDORA shows everything you need to catch up on.</p>
        </div>
      </div>

      <div class="card" style="margin-bottom:20px">
        <h2 style="margin-bottom:14px">Select the dates you missed</h2>
        <form data-f="missed" style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap">
          <div style="flex:1;min-width:140px"><label>From</label><input type="date" name="f" value="${f}" max="${today}" required></div>
          <div style="flex:1;min-width:140px"><label>To</label><input type="date" name="t" value="${t}" max="${today}" required></div>
          <button type="submit" class="btn" style="flex-shrink:0">Show what I missed</button>
        </form>
      </div>

      <div class="grid g2" style="margin-bottom:16px">
        <div class="card">
          <h2 style="margin-bottom:14px;display:flex;align-items:center;gap:7px">${icon('bookOpen')} Lessons Covered</h2>
          ${L.length
            ? `<ul class="ul">${L.map(l => `<li><div class="item-main"><div class="item-title">${escHtml(l.topic)}</div><div class="item-sub">${sub(l.s).n} · ${fd(l.d)}</div><div style="font-size:12.5px;color:var(--text-secondary);margin-top:4px">${escHtml(l.notes)}</div></div></li>`).join('')}</ul>`
            : `<div class="empty"><div class="empty-icon" style="opacity:.4">${icon('inbox',36)}</div><div class="empty-text">No lessons in this date range.</div></div>`}
        </div>
        <div class="card">
          <h2 style="margin-bottom:14px;display:flex;align-items:center;gap:7px">${icon('folder')} Materials Uploaded</h2>
          ${M.length
            ? M.map(m => `<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)"><div style="background:${matIconBg(m.y)};width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--text-secondary)">${icon(matIcon(m.y),16)}</div><div class="flex1" style="font-size:13px;font-weight:500">${escHtml(m.t)}<div style="font-size:12px;color:var(--text-secondary)">${m.y}</div></div><button class="btn sec sm" data-a="viewMat" data-v="${m.id}">Open</button></div>`).join('')
            : `<div class="empty"><div class="empty-icon" style="opacity:.4">${icon('inbox',36)}</div><div class="empty-text">No materials uploaded during this period.</div></div>`}
        </div>
        <div class="card">
          <h2 style="margin-bottom:14px;display:flex;align-items:center;gap:7px">${icon('clipboardList')} Assignments Given</h2>
          ${A.length
            ? `<ul class="ul">${A.map(a => `<li><div class="item-main"><div class="item-title">${escHtml(a.t)}</div><div class="item-sub">${sub(a.s).n} · Due ${fd(a.due)}</div></div><span class="${chipClass(stat(a))}">${stat(a)}</span></li>`).join('')}</ul>`
            : `<div class="empty"><div class="empty-icon" style="opacity:.4">${icon('inbox',36)}</div><div class="empty-text">No assignments given during this period.</div></div>`}
        </div>
        <div class="card">
          <h2 style="margin-bottom:14px;display:flex;align-items:center;gap:7px">${icon('calendarCheck')} Upcoming Assessments</h2>
          <ul class="ul">
            ${D.tests.map(tt => `<li><div class="item-main"><div class="item-title">${escHtml(tt.t)}</div><div class="item-sub">${sub(tt.s).n} · ${tt.type}</div></div><span class="chip">${fd(tt.d)}</span></li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="card" style="border-color:var(--primary-muted);background:var(--primary-light)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:10px">
          <div>
            <h2>Your Catch-up Plan</h2>
            <p style="font-size:13px;margin-top:2px">${done} of ${tasks.length} items completed</p>
          </div>
          <span style="font-size:22px;font-weight:800;letter-spacing:-.04em">${tasks.length ? pcnt(done,tasks.length) : 0}%</span>
        </div>
        ${tasks.length ? bar(tasks.length ? pcnt(done,tasks.length) : 0) : ''}
        <div style="margin-top:14px">
          ${tasks.length
            ? tasks.map(tk => `
              <div style="display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,216,77,.3)">
                <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;width:100%">
                  <input type="checkbox" data-a="cuCheck" data-v="${tk.id}" ${S.cu[tk.id] ? 'checked' : ''}
                    style="width:16px;height:16px;margin-top:2px;accent-color:var(--primary-hover);flex-shrink:0">
                  <span style="display:flex;align-items:center;gap:7px;font-size:13.5px;${S.cu[tk.id] ? 'text-decoration:line-through;color:var(--text-tertiary)' : ''}">
                    <span style="opacity:.6;flex-shrink:0">${icon(tk.taskIcon)}</span>${escHtml(tk.text)}
                  </span>
                </label>
              </div>`).join('')
            : `<p style="font-size:13.5px;color:var(--text-secondary)">Select a date range above to build your personalised catch-up plan.</p>`}
        </div>
        ${outstanding.length
          ? `<p style="font-size:12.5px;color:var(--text-secondary);margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,216,77,.4)">
               Also outstanding overall: ${outstanding.length} assignment${outstanding.length !== 1 ? 's' : ''}.
               <a href="assignments.html" style="color:var(--warning);font-weight:600">View all</a>
             </p>`
          : ''}
      </div>`;
  },

  // ── EDORA AI ──────────────────────────────────────────────
  ai() {
    const history = S.chat.filter(m => m.r === 'u').slice(-10);
    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>EDORA AI</h1>
          <p>Simulated academic assistant — ask about any subject or study challenge.</p>
        </div>
      </div>
      <div class="chat-layout">
        <div class="card" style="display:flex;flex-direction:column;overflow:hidden">
          <h2 style="margin-bottom:12px;flex-shrink:0">Chat History</h2>
          <div id="chat-hist" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:4px">
            ${history.length
              ? history.map(m => `<a href="#" data-a="aiAsk" data-v="${escHtml(m.t)}" style="font-size:13px;padding:7px 10px;border-radius:8px;text-decoration:none;color:var(--text-secondary);transition:background .15s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block">${m.t.slice(0,34)}${m.t.length > 34 ? '…' : ''}</a>`).join('')
              : `<p style="font-size:12.5px;color:var(--text-tertiary);padding:4px 10px">No history yet.</p>`}
          </div>
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);flex-shrink:0">
            <button class="btn sec sm" style="width:100%;gap:5px" data-a="aiClear">${icon('refreshCw')} Clear history</button>
          </div>
        </div>

        <div class="card chat-main" style="display:flex;flex-direction:column">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-shrink:0">
            <div style="width:8px;height:8px;border-radius:50%;background:var(--success)"></div>
            <span style="font-size:13px;font-weight:600">EDORA AI</span>
            <span class="chip" style="font-size:11px">Simulated</span>
          </div>
          <div class="msgs" id="msgs">${chatHTML()}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;flex-shrink:0">
            ${['How do I write a Python function?','Explain BFS vs DFS','SQL JOIN examples','How does normalisation work?','What is Big-O complexity?','Explain e-business models']
              .map(q => `<button class="btn sec sm" data-a="aiAsk" data-v="${escHtml(q)}">${q}</button>`).join('')}
          </div>
          <form class="chat-form" data-f="chat" style="flex-shrink:0">
            <input name="q" id="chat-input" placeholder="Ask anything about your schoolwork…" autocomplete="off">
            <button type="submit" class="btn" style="flex-shrink:0;gap:5px">${icon('send')} Send</button>
          </form>
        </div>
      </div>`;
  },

  // ── STUDY PLANNER ─────────────────────────────────────────
  planner() {
    const days  = [...Array(7)].map((_,i) => day(i));
    const other = S.plan.filter(p => !days.includes(p.date));
    const doneSessions = S.plan.filter(p => p.done).length;

    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>Study Planner</h1>
          <p>${doneSessions} of ${S.plan.length} sessions completed.</p>
        </div>
      </div>

      <div class="card" style="margin-bottom:20px">
        <h2 style="margin-bottom:14px">Add Study Session</h2>
        <form data-f="plan" style="display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap">
          <div style="flex:2;min-width:150px"><label>Subject</label><select name="s">${opts(SO)}</select></div>
          <div style="flex:1;min-width:140px"><label>Date</label><input type="date" name="date" value="${today}" required></div>
          <div style="flex:1;min-width:110px"><label>Time</label><input type="time" name="time" value="16:00" required></div>
          <div style="flex:1;min-width:130px">
            <label>Duration</label>
            <select name="duration">
              <option>30 min</option><option selected>45 min</option>
              <option>1 hour</option><option>1.5 hours</option><option>2 hours</option>
            </select>
          </div>
          <button type="submit" class="btn" style="flex-shrink:0">Add session</button>
        </form>
      </div>

      <h2 style="margin-bottom:12px">This week</h2>
      <div class="week">
        ${days.map(d => {
          const isToday = d === today;
          const sessions = S.plan.filter(p => p.date === d).sort((a,b) => a.time > b.time ? 1 : -1);
          return `<div class="day">
            <div class="day-header ${isToday ? 'today-label' : ''}">${fd(d)}${isToday ? ' · Today' : ''}</div>
            ${sessions.map(plItem).join('') || '<div style="font-size:12px;color:var(--text-tertiary);margin-top:4px">Free</div>'}
          </div>`;
        }).join('')}
      </div>

      ${other.length ? `
        <div class="card" style="margin-top:16px">
          <h2 style="margin-bottom:12px">Beyond this week</h2>
          ${other.map(p => `<div style="margin-bottom:6px"><small style="color:var(--text-secondary)">${fd(p.date)}</small>${plItem(p)}</div>`).join('')}
        </div>` : ''}`;
  },

  // ── ACADEMIC PROGRESS ─────────────────────────────────────
  progress() {
    const p     = prog();
    const done  = D.assignments.filter(a => ['Submitted','Graded'].includes(stat(a)));
    const out   = D.assignments.filter(a => !['Submitted','Graded'].includes(stat(a)));
    const worst = D.subjects.slice().sort((a,b) => a.p - b.p)[0];
    const best  = D.subjects.slice().sort((a,b) => b.p - a.p)[0];

    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>Academic Progress</h1>
          <p>Overall completion: <strong>${p.pct}%</strong></p>
        </div>
      </div>

      <div class="grid g4">
        <div class="stat-card"><div class="stat-icon">${icon('trendingUp',20)}</div><div class="stat-body"><div class="stat-value">${p.pct}%</div><div class="stat-label">Completion Rate</div></div></div>
        <div class="stat-card"><div class="stat-icon green">${icon('checkSquare',20)}</div><div class="stat-body"><div class="stat-value">${done.length}</div><div class="stat-label">Completed</div></div></div>
        <div class="stat-card"><div class="stat-icon orange">${icon('hourglass',20)}</div><div class="stat-body"><div class="stat-value">${out.length}</div><div class="stat-label">Outstanding</div></div></div>
        <div class="stat-card"><div class="stat-icon blue">${icon('books',20)}</div><div class="stat-body"><div class="stat-value">${D.subjects.length}</div><div class="stat-label">Subjects</div></div></div>
      </div>

      <div class="grid g2">
        <div class="card">
          <h2 style="margin-bottom:16px">Assignment Completion</h2>
          <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap;padding:8px">
            <div class="donut" style="background:conic-gradient(var(--primary) ${p.pct * 3.6}deg, var(--surface) 0deg)">
              <div class="donut-inner"><div class="donut-pct">${p.pct}%</div><div class="donut-sub">${p.n}/${p.t}</div></div>
            </div>
            <div>
              <div style="margin-bottom:8px;font-size:13px;display:flex;justify-content:space-between;gap:16px"><span>Completed</span><strong>${p.n}</strong></div>
              <div style="margin-bottom:8px;font-size:13px;display:flex;justify-content:space-between;gap:16px"><span>Outstanding</span><strong>${out.length}</strong></div>
              <div style="font-size:13px;display:flex;justify-content:space-between;gap:16px"><span>Total</span><strong>${p.t}</strong></div>
              <a href="assignments.html" class="btn sm" style="text-decoration:none;margin-top:12px;display:inline-flex">View assignments</a>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 style="margin-bottom:14px">Progress by Subject</h2>
          ${D.subjects.map(s => `
            <div style="margin-bottom:14px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
                <span style="font-size:13.5px;font-weight:500;display:flex;align-items:center;gap:7px"><span style="opacity:.7">${SUBJ_ICONS[s.id] || icon('book',14)}</span>${s.n}</span>
                <span style="font-size:13px;font-weight:700">${s.p}%</span>
              </div>
              ${bar(s.p)}
            </div>`).join('')}
        </div>

        <div class="card">
          <h2 style="margin-bottom:12px">Outstanding Work</h2>
          ${out.length
            ? `<ul class="ul">${out.map(a => `<li><div class="item-main"><div class="item-title">${escHtml(a.t)}</div><div class="item-sub">${sub(a.s).n} · Due ${fd(a.due)}</div></div><span class="${chipClass(stat(a))}">${stat(a)}</span></li>`).join('')}</ul>`
            : `<div class="empty"><div class="empty-icon" style="opacity:.4">${icon('checkSquare',36)}</div><div class="empty-text">All assignments submitted!</div></div>`}
        </div>

        <div class="card">
          <h2 style="margin-bottom:12px">Completed Work</h2>
          ${done.length
            ? `<ul class="ul">${done.map(a => `<li><div class="item-main"><div class="item-title">${escHtml(a.t)}</div><div class="item-sub">${sub(a.s).n}</div></div><span class="${chipClass(stat(a))}">${stat(a)}</span></li>`).join('')}</ul>`
            : `<p class="muted" style="font-size:13px">No completed assignments yet.</p>`}
        </div>

        <div class="card">
          <h2 style="margin-bottom:12px;display:flex;align-items:center;gap:7px">${icon('award')} Achievements</h2>
          <ul class="ul">
            <li><span style="display:flex;align-items:center;gap:7px">${icon('star')} First graded assignment</span><span class="chip success">Unlocked</span></li>
            <li><span style="display:flex;align-items:center;gap:7px">${icon('zap')} 3-day study streak</span><span class="chip success">Unlocked</span></li>
            <li><span style="display:flex;align-items:center;gap:7px">${icon('star')} E-Business above 80%</span><span class="chip success">Unlocked</span></li>
            <li><span style="display:flex;align-items:center;gap:7px">${icon('book')} All materials viewed</span><span class="chip warning">In progress</span></li>
            <li><span style="display:flex;align-items:center;gap:7px">${icon('target')} 100% completion rate</span><span class="chip">Not yet</span></li>
          </ul>
        </div>

        <div class="card">
          <h2 style="margin-bottom:12px;display:flex;align-items:center;gap:7px">${icon('barChart')} Areas to Improve</h2>
          <div style="margin-bottom:14px">
            <div style="font-size:13px;font-weight:600;margin-bottom:6px">Needs most attention</div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--danger-light);border-radius:var(--radius-sm)">
              <div style="width:36px;height:36px;border-radius:10px;background:rgba(239,68,68,.12);display:flex;align-items:center;justify-content:center;color:var(--danger);flex-shrink:0">${SUBJ_ICONS[worst.id] || icon('book',18)}</div>
              <div><div style="font-weight:600">${worst.n}</div><div style="font-size:12.5px;color:var(--text-secondary)">${worst.p}% — try 2 extra sessions this week</div></div>
            </div>
          </div>
          <div>
            <div style="font-size:13px;font-weight:600;margin-bottom:6px">Strongest subject</div>
            <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--success-light);border-radius:var(--radius-sm)">
              <div style="width:36px;height:36px;border-radius:10px;background:rgba(34,197,94,.12);display:flex;align-items:center;justify-content:center;color:var(--success);flex-shrink:0">${SUBJ_ICONS[best.id] || icon('book',18)}</div>
              <div><div style="font-weight:600">${best.n}</div><div style="font-size:12.5px;color:var(--text-secondary)">${best.p}% — keep it up!</div></div>
            </div>
          </div>
          <a href="planner.html" class="btn sec sm" style="text-decoration:none;margin-top:14px;display:inline-flex;gap:5px">${icon('clock')} Plan a session</a>
        </div>
      </div>`;
  },

  // ── NOTIFICATIONS ─────────────────────────────────────────
  notifs() {
    const unr = unread();
    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>Notifications</h1>
          <p>${unr > 0 ? `${unr} unread notification${unr !== 1 ? 's' : ''}.` : 'All caught up — no unread notifications.'}</p>
        </div>
        ${unr > 0 ? `<button class="btn sec sm" data-a="readAll" style="gap:5px">${icon('checkSquare')} Mark all as read</button>` : ''}
      </div>
      ${D.notifs.map(n => `
        <div class="notif-item ${S.nt[n.id] ? '' : 'unread'}">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--surface);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--text-secondary)">${icon(notifIcon(n.k))}</div>
          <div class="flex1">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;flex-wrap:wrap">
              <span class="chip ${n.k === 'Assignment' ? 'warning' : n.k === 'Assessment' ? 'danger' : 'info'}">${n.k}</span>
              <span style="font-size:12px;color:var(--text-secondary)">${fd(n.d)}</span>
              ${!S.nt[n.id] ? '<span style="width:7px;height:7px;border-radius:50%;background:var(--warning);display:inline-block"></span>' : ''}
            </div>
            <div style="font-size:13.5px;color:var(--text-primary)">${escHtml(n.t)}</div>
          </div>
          ${S.nt[n.id]
            ? `<span style="font-size:12px;color:var(--text-tertiary);flex-shrink:0">Read</span>`
            : `<button class="btn sec sm" data-a="markRead" data-v="${n.id}" style="flex-shrink:0">Mark read</button>`}
        </div>`).join('')}`;
  },

  // ── PROFILE & SETTINGS ────────────────────────────────────
  profile() {
    const u = S.user;
    const p = prog();
    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>Profile &amp; Settings</h1>
          <p>Update your personal information and preferences.</p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 300px;gap:16px;align-items:start">
        <div class="card">
          <h2 style="margin-bottom:20px">Personal Information</h2>
          <form data-f="profile">
            <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid var(--border)">
              <div class="av xl" id="profile-av">${u.pic ? `<img src="${u.pic}" alt="">` : u.name[0].toUpperCase()}</div>
              <div>
                <div style="font-size:15px;font-weight:700;margin-bottom:2px">${escHtml(u.name)}</div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">${escHtml(u.email)}</div>
                <label class="btn sec sm" style="cursor:pointer;display:inline-flex;gap:5px">
                  ${icon('uploadCloud')} Upload photo<input type="file" name="pic" accept="image/*" style="display:none">
                </label>
              </div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
              <div><label>Full name</label><input name="name" value="${escHtml(u.name)}" required></div>
              <div><label>Email address</label><input name="email" type="email" value="${escHtml(u.email)}" required></div>
              <div><label>School</label><input name="school" value="${escHtml(u.school || '')}"></div>
              <div><label>Grade</label>
                <select name="grade">${['First Year','Second Year'].map(g=>`<option ${g===u.grade?'selected':''}>${g}</option>`).join('')}</select>
              </div>
            </div>
            <span class="err" id="profile-err"></span>
            <div style="display:flex;gap:10px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border)">
              <button type="submit" class="btn">Save changes</button>
              <button type="button" class="btn sec d" data-a="doLogout" style="gap:5px">${icon('logOut')} Log out</button>
            </div>
          </form>
        </div>

        <div style="display:flex;flex-direction:column;gap:14px">
          <div class="card">
            <h2 style="margin-bottom:12px">Your Stats</h2>
            <ul class="ul" style="font-size:13px">
              <li><span>Assignments completed</span><strong>${p.n}/${p.t}</strong></li>
              <li><span>Study sessions</span><strong>${S.plan.length}</strong></li>
              <li><span>Notifications read</span><strong>${Object.keys(S.nt).length}</strong></li>
              <li><span>AI questions asked</span><strong>${S.chat.filter(m=>m.r==='u').length}</strong></li>
            </ul>
          </div>
          <div class="card">
            <h2 style="margin-bottom:10px;display:flex;align-items:center;gap:7px">${icon('shield')} Data &amp; Privacy</h2>
            <p style="font-size:13px;margin-bottom:14px">All data is stored locally in your browser. Nothing is sent to any server.</p>
            <button class="btn sec sm d" data-a="clearData" style="gap:5px">${icon('trash')} Clear all data</button>
          </div>
        </div>
      </div>`;
  }
};

// ============================================================
//  ACTION HANDLERS
// ============================================================

const A = {
  close:     () => closeModal(),
  doLogout() { S.auth = 0; save(); location.href = 'login.html'; },

  viewAsg(id) {
    const a  = D.assignments.find(x => x.id == id);
    const s  = stat(a);
    const dn = ['Submitted','Graded'].includes(s);
    showModal(a.t, `
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
        <span class="${chipClass(s)}">${s}</span>
        <span class="${chipClass(a.pr)}">${a.pr} priority</span>
      </div>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:4px">${sub(a.s).n}</p>
      <p style="font-size:13px;color:var(--text-secondary);margin-bottom:14px">Given ${fd(a.g)} · Due ${fd(a.due)}</p>
      <p style="font-size:14px;margin-bottom:16px">${escHtml(a.d)}</p>
      ${dn
        ? `<div style="background:var(--success-light);border-radius:var(--radius-sm);padding:12px;font-size:13.5px;color:#15803d;font-weight:500;display:flex;align-items:center;gap:8px">${icon('checkCircle')} Your work has been submitted successfully.</div>`
        : `<form data-f="submit" data-v="${a.id}">
             <label>Your answer or notes</label>
             <textarea name="txt" placeholder="Type your answer, key points, or notes for your teacher…"></textarea>
             <label>Attach a file (optional)</label>
             <input type="file" name="file">
             <span class="err" id="sub-err"></span>
             <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
               <button type="submit" class="btn">Submit assignment</button>
               <button type="button" class="btn sec" data-a="markInProgress" data-v="${a.id}">Mark as in progress</button>
             </div>
           </form>`}
    `);
  },

  markInProgress(id) { S.as[id] = 'In progress'; save(); closeModal(); toast('Marked as in progress'); go(); },

  viewMat(id) {
    const m = D.materials.find(x => x.id == id);
    showModal(m.t, `
      <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
        <span class="chip">${m.y}</span>
        <span class="chip">${sub(m.s).n}</span>
        <span class="chip">${m.size}</span>
        <span class="chip">Added ${fd(m.d)}</span>
      </div>
      <div style="background:var(--surface);border-radius:var(--radius-md);padding:48px 24px;text-align:center;margin-bottom:16px">
        <div style="display:flex;justify-content:center;margin-bottom:12px;opacity:.5">${icon(matIcon(m.y),40)}</div>
        <div style="font-size:14px;font-weight:600;margin-bottom:4px">${escHtml(m.t)}</div>
        <div style="font-size:12.5px;color:var(--text-secondary)">${m.y} · ${m.size}</div>
      </div>
      <p style="font-size:13px;color:var(--text-secondary);text-align:center">Demonstration prototype — file preview would appear here in a live environment.</p>
    `);
  },

  cuCheck(id, el) { S.cu[id] = el.checked ? 1 : 0; save(); },

  markRead(id) { S.nt[id] = 1; save(); go(); },
  readAll()    { D.notifs.forEach(n => S.nt[n.id] = 1); save(); go(); },

  plDone(id) { const p = S.plan.find(x => x.id == id); if (p) { p.done = !p.done; save(); go(); } },
  plDel(id)  { S.plan = S.plan.filter(x => x.id != id); save(); toast('Session deleted'); go(); },

  aiClear() { S.chat = []; save(); go(); },
  aiAsk(q)  { sendAiMessage(q); },

  clearData() {
    if (confirm('This will delete all your EDORA data including study sessions, AI chats and progress. Continue?')) {
      localStorage.removeItem('edora');
      location.href = 'login.html';
    }
  }
};

// ============================================================
//  FORM HANDLERS
// ============================================================

const F = {
  missed(form) {
    S.mf = form.f.value; S.mt = form.t.value;
    if (S.mf > S.mt) S.mt = S.mf;
    save(); go();
  },
  chat(form) {
    const q = form.q.value.trim();
    if (!q) return;
    form.reset();
    sendAiMessage(q);
  },
  plan(form) {
    S.plan.push({ id: Date.now(), s: form.s.value, date: form.date.value, time: form.time.value, duration: form.duration.value, done: 0 });
    save(); toast('Study session added'); go();
  },
  submit(form) {
    const err = $('#sub-err');
    if (!form.txt.value.trim() && !form.file.files.length) {
      if (err) err.textContent = 'Please add an answer or attach a file before submitting.';
      return;
    }
    S.as[form.dataset.v] = 'Submitted';
    save(); closeModal(); toast('Assignment submitted successfully'); go();
  },
  profile(form) {
    const err = $('#profile-err');
    if (err) err.textContent = '';
    if (!form.name.value.trim()) { if (err) err.textContent = 'Full name is required.'; return; }
    const finish = () => {
      Object.assign(S.user, { name: form.name.value.trim(), email: form.email.value.trim(), school: form.school.value.trim(), grade: form.grade.value });
      save(); toast('Profile saved'); go();
    };
    if (form.pic.files[0]) {
      const reader = new FileReader();
      reader.onload = e => { S.user.pic = e.target.result; finish(); };
      reader.readAsDataURL(form.pic.files[0]);
    } else { finish(); }
  }
};

// ── Live filter updaters ───────────────────────────────────────
const LIVE = {
  asg: () => { const el = $('#asg-list'); if (el) el.innerHTML = asgList(); },
  mat: () => { const el = $('#mat-list'); if (el) el.innerHTML = matList(); }
};

// ── AI send ────────────────────────────────────────────────────
function sendAiMessage(q) {
  S.chat.push({ r:'u', t: escHtml(q) });
  save(); go();
  setTimeout(() => {
    S.chat.push({ r:'b', t: botReply(q) });
    save();
    if (location.hash === '#ai' || !location.hash) {
      const msgs = $('#msgs');
      if (msgs) { msgs.innerHTML = chatHTML(); msgs.scrollTop = msgs.scrollHeight; }
      const hist = $('#chat-hist');
      if (hist) {
        const history = S.chat.filter(m => m.r === 'u').slice(-10);
        hist.innerHTML = history.length
          ? history.map(m => `<a href="#" data-a="aiAsk" data-v="${m.t}" style="font-size:13px;padding:7px 10px;border-radius:8px;text-decoration:none;color:var(--text-secondary);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.t.slice(0,34)}${m.t.length>34?'…':''}</a>`).join('')
          : `<p style="font-size:12.5px;color:var(--text-tertiary);padding:4px 10px">No history yet.</p>`;
      }
    }
  }, 650);
}

// ============================================================
//  ROUTER & RENDER
// ============================================================

function go() {
  if (!S.auth || !S.user) { location.href = 'login.html'; return; }

  const hash     = location.hash.slice(1) || 'dash';
  const [page, arg] = hash.split('/');
  const activeId = R[page] ? page : 'dash';
  const u        = S.user;

  // Build sidebar nav (SVG icons)
  let lastSection = '';
  const navHTML = NAV.map(n => {
    let html = '';
    if (n.section !== lastSection) {
      html += `<div class="sb-section-label">${SECTION_LABELS[n.section]}</div>`;
      lastSection = n.section;
    }
    const unr = n.id === 'notifs' && unread();
    html += `<a href="${n.file}" class="${n.id === activeId ? 'on' : ''}">
      <span class="nav-icon">${icon(n.icon)}</span>
      ${n.label}
      ${unr ? `<span class="nav-dot">${unread()}</span>` : ''}
    </a>`;
    return html;
  }).join('');

  $('#sb-nav').innerHTML       = navHTML;
  $('#sb-uname').textContent   = u.name;
  $('#sb-ugrade').textContent  = `${u.grade} · ${u.school || 'EDORA'}`;
  $('#sb-av').innerHTML        = u.pic ? `<img src="${u.pic}" alt="">` : u.name[0].toUpperCase();

  $('#top-title').textContent = NAV.find(n => n.id === activeId)?.label || 'Dashboard';
  $('#top-av').innerHTML      = u.pic ? `<img src="${u.pic}" alt="">` : u.name[0].toUpperCase();
  const badge = $('#notif-badge');
  if (badge) badge.style.display = unread() ? 'block' : 'none';

  const view = $('#view');
  view.innerHTML = R[activeId](arg);
  view.classList.remove('fade-in');
  void view.offsetWidth;
  view.classList.add('fade-in');

  const msgs = $('#msgs');
  if (msgs) msgs.scrollTop = msgs.scrollHeight;
  if (!arg) window.scrollTo({ top: 0 });

  closeSidebar();
}

// ============================================================
//  EVENT DELEGATION
// ============================================================

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-a]');
  if (!btn) return;
  if (btn.tagName === 'A') e.preventDefault();
  const action = btn.dataset.a;
  const val    = btn.dataset.v;
  if (A[action]) A[action](val, btn);
});

document.addEventListener('change', e => {
  if (e.target.type === 'checkbox' && e.target.dataset.a === 'cuCheck') {
    A.cuCheck(e.target.dataset.v, e.target);
  }
});

document.addEventListener('submit', e => {
  const form = e.target.closest('[data-f]');
  if (!form) return;
  e.preventDefault();
  if (F[form.dataset.f]) F[form.dataset.f](form);
});

function handleLive(e) {
  const key = e.target.dataset.live;
  if (key && LIVE[key]) LIVE[key]();
}
document.addEventListener('input',  handleLive);
document.addEventListener('change', handleLive);

window.addEventListener('hashchange', go);

// ── Theme ──────────────────────────────────────────────────
function applyTheme(theme) {
  const html = document.documentElement;
  // Add transition class so the switch animates
  html.classList.add('theme-switching');
  html.setAttribute('data-theme', theme);
  localStorage.setItem('edora-theme', theme);
  setTimeout(() => html.classList.remove('theme-switching'), 300);
}

window.toggleTheme = function() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
};

// Apply persisted theme on load (belt + braces alongside the inline script)
(function() {
  const t = localStorage.getItem('edora-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
})();

// ── Boot ───────────────────────────────────────────────────────
go();

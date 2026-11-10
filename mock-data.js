/* ============================================================
   EDORA — Mock Data & State
   ============================================================ */

// ── Date helpers ────────────────────────────────────────────
const day  = n => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0,10); };
const today = day(0);

// ── App data ────────────────────────────────────────────────
const D = {

  subjects: [
    { id:'math', n:'Mathematics',       t:'Mr. K. Dlamini',   e:'k.dlamini@greenfield.edu',   p:72, color:'#FFF3C0', desc:'Algebra, functions, trigonometry and analytical geometry.' },
    { id:'eng',  n:'English Home Lang', t:'Mrs. P. Naidoo',   e:'p.naidoo@greenfield.edu',    p:81, color:'#DBEAFE', desc:'Literature, language structures, writing and comprehension.' },
    { id:'phys', n:'Physical Sciences', t:'Mr. J. Botha',     e:'j.botha@greenfield.edu',     p:64, color:'#FCE7F3', desc:'Mechanics, waves, electricity and chemical reactions.' },
    { id:'life', n:'Life Sciences',     t:'Ms. N. Khumalo',   e:'n.khumalo@greenfield.edu',   p:77, color:'#DCFCE7', desc:'Cell biology, genetics, ecology and evolution.' },
    { id:'geo',  n:'Geography',         t:'Mr. R. Smith',     e:'r.smith@greenfield.edu',     p:69, color:'#E0E7FF', desc:'Physical geography, map skills and development geography.' }
  ],

  assignments: [
    { id:1,  s:'math', t:'Quadratic Equations Worksheet',    d:'Solve questions 1–15. Show all working and check each answer by substitution.',               due:day(2),   g:day(-3),  st:'In progress', pr:'High'   },
    { id:2,  s:'eng',  t:'Essay: My Role Model',             d:'Write a 400-word essay on a person who inspires you. Focus on impact, not just achievements.', due:day(5),   g:day(-2),  st:'Not started', pr:'Medium' },
    { id:3,  s:'phys', t:"Newton's Laws Lab Report",         d:"Write a formal lab report on the trolley experiment. Include hypothesis, results table, and conclusion.", due:day(-1),  g:day(-6),  st:'Not started', pr:'High'   },
    { id:4,  s:'life', t:'Cell Division Diagram',            d:'Draw and fully label the four stages of mitosis. Use colour to distinguish chromosomes.',       due:day(4),   g:day(-1),  st:'Not started', pr:'Low'    },
    { id:5,  s:'geo',  t:'Topographic Map Work',             d:'Complete the contour map skills exercise on pages 34–38 of your workbook.',                    due:day(-4),  g:day(-9),  st:'Submitted',   pr:'Medium' },
    { id:6,  s:'math', t:'Trigonometry Test Corrections',    d:'Redo all questions you got wrong in the November test. Write out the correct working.',         due:day(-8),  g:day(-12), st:'Graded',      pr:'High'   },
    { id:7,  s:'eng',  t:'Poetry Analysis: "The Road Not Taken"', d:'Identify and analyse two poetic devices (imagery and tone). Support each with a quotation.', due:day(7),   g:day(0),   st:'Not started', pr:'Medium' },
    { id:8,  s:'life', t:'Ecology Research Task',            d:'Research a local endangered species. Explain the threats it faces and suggest two conservation strategies.', due:day(10), g:day(1),   st:'Not started', pr:'Low'    },
    { id:9,  s:'phys', t:'Electric Circuits Problem Set',    d:'Solve questions 1–8 on series and parallel circuits. Show all formulae and substitutions.',    due:day(3),   g:day(-1),  st:'In progress', pr:'Medium' },
    { id:10, s:'geo',  t:'Development Geography Essay',      d:'Compare the Human Development Index of two countries. Discuss causes of inequality.',          due:day(14),  g:day(2),   st:'Not started', pr:'Low'    }
  ],

  materials: [
    { id:1,  s:'math', t:'Quadratic Equations — Full Notes',       y:'PDF Notes',    d:day(-2),  size:'1.2 MB' },
    { id:2,  s:'math', t:'Factorising Trinomials Explained',       y:'Video',        d:day(-4),  size:'18 min' },
    { id:3,  s:'math', t:'Trigonometry Summary Sheet',             y:'Study Guide',  d:day(-7),  size:'380 KB' },
    { id:4,  s:'eng',  t:'Poetry Terms and Devices Glossary',      y:'Study Guide',  d:day(-1),  size:'520 KB' },
    { id:5,  s:'eng',  t:'Essay Structure and Paragraph Writing',  y:'PDF Notes',    d:day(-5),  size:'890 KB' },
    { id:6,  s:'eng',  t:'Set Poetry Anthology',                   y:'Reading',      d:day(-3),  size:'2.1 MB' },
    { id:7,  s:'phys', t:"Forces and Newton's Laws — Slides",      y:'Presentation', d:day(-3),  size:'4.5 MB' },
    { id:8,  s:'phys', t:'Lab Report Template and Guidelines',     y:'Study Guide',  d:day(-6),  size:'310 KB' },
    { id:9,  s:'phys', t:'Electric Circuits Lecture Notes',        y:'PDF Notes',    d:day(-1),  size:'1.8 MB' },
    { id:10, s:'life', t:'Mitosis and Meiosis Illustrated Notes',  y:'PDF Notes',    d:day(-1),  size:'2.3 MB' },
    { id:11, s:'life', t:'Cell Cycle Animation',                   y:'Video',        d:day(0),   size:'12 min' },
    { id:12, s:'life', t:'Ecology and Biomes Study Guide',         y:'Study Guide',  d:day(-8),  size:'1.1 MB' },
    { id:13, s:'geo',  t:'Reading Contour Lines and Gradients',    y:'PDF Notes',    d:day(-5),  size:'970 KB' },
    { id:14, s:'geo',  t:'Map Skills Workbook Answers',            y:'Reading',      d:day(-10), size:'1.4 MB' },
    { id:15, s:'geo',  t:'Development Geography Presentation',     y:'Presentation', d:day(-2),  size:'6.1 MB' }
  ],

  lessons: [
    { id:1,  d:day(-1),  s:'life', topic:'Stages of Mitosis',              notes:'Prophase, metaphase, anaphase, telophase — PMAT. Chromosomes line up at the equator in metaphase.' },
    { id:2,  d:day(-1),  s:'eng',  topic:'Imagery and Tone in Poetry',     notes:'Imagery appeals to the senses. Find three examples. Tone is the speaker\'s attitude — look at word choice.' },
    { id:3,  d:day(-2),  s:'math', topic:'Solving Quadratics by Factorising', notes:'Standard form first: ax² + bx + c = 0. Find factors, check with the product-sum method.' },
    { id:4,  d:day(-2),  s:'phys', topic:"Newton's Second Law",            notes:'F = ma. Covered examples 3–6 in class. Remember: net force, not just applied force.' },
    { id:5,  d:day(-3),  s:'geo',  topic:'Contour Lines and Gradient',     notes:'Close contour lines = steep gradient. Wide spacing = gentle gradient. V-shapes point upstream.' },
    { id:6,  d:day(-3),  s:'math', topic:'The Quadratic Formula',          notes:'Use when factorising fails. Check the discriminant b²–4ac first to predict the number of roots.' },
    { id:7,  d:day(-4),  s:'life', topic:'Meiosis vs Mitosis',             notes:'Mitosis: 2 identical diploid cells. Meiosis: 4 genetically unique haploid cells. Crossing over in meiosis 1.' },
    { id:8,  d:day(-4),  s:'phys', topic:'Series vs Parallel Circuits',    notes:'Series: same current, voltages add. Parallel: same voltage, currents add. Total resistance differs.' },
    { id:9,  d:day(-5),  s:'eng',  topic:'Essay Planning and Structure',   notes:'Introduction (thesis), three body paragraphs (point–evidence–explain), conclusion (link back).' },
    { id:10, d:day(-5),  s:'geo',  topic:'Human Development Index',        notes:'HDI uses life expectancy, education, and GNI per capita. Scale 0–1. Very high: above 0.8.' },
    { id:11, d:day(-6),  s:'math', topic:'Functions and Parabolas',        notes:'f(x) = a(x+p)² + q. Identify a (shape), p (horizontal shift), q (vertical shift).' },
    { id:12, d:day(-7),  s:'life', topic:'Ecology: Food Chains and Webs',  notes:'Producers → primary → secondary → tertiary consumers. Energy lost at each level (~90%).' }
  ],

  tests: [
    { id:1, s:'math', t:'Algebra and Functions Test',  d:day(6),  type:'Test',      scope:'Ch 2–4: quadratics, parabolas, hyperbola' },
    { id:2, s:'phys', t:'Forces and Motion Quiz',      d:day(9),  type:'Quiz',      scope:"Newton's laws, friction, free-body diagrams" },
    { id:3, s:'life', t:'Cell Biology Assessment',     d:day(12), type:'Test',      scope:'Mitosis, meiosis, cell cycle, DNA replication' },
    { id:4, s:'eng',  t:'Poetry In-Class Essay',       d:day(16), type:'Essay',     scope:'Set poems: analysis of one unseen poem (45 min)' },
    { id:5, s:'geo',  t:'Map Work Practical',          d:day(20), type:'Practical', scope:'Contour lines, cross-sections, gradient calculation' }
  ],

  ann: [
    { id:1, s:'math', t:'Bring your scientific calculator to every class this week. No phone calculators allowed during the test.',      d:day(-1) },
    { id:2, s:'phys', t:'Lab reports are due at the start of lesson one on Thursday. Late submissions lose 10% per day.',               d:day(-2) },
    { id:3, s:'eng',  t:'The poetry anthology is now available in the library. You may borrow one copy per student.',                   d:day(-3) },
    { id:4, s:'geo',  t:'Map work corrections are open until Friday. See me before school if you need extra help.',                    d:day(-4) },
    { id:5, s:'life', t:'Practical session on Thursday. Please wear closed-toe shoes — it is a safety requirement in the laboratory.', d:day(-1) },
    { id:6, s:'math', t:'Test study guide has been uploaded to the class materials. Focus on the worked examples on pages 12–15.',     d:day(0)  }
  ],

  notifs: [
    { id:1, k:'Assignment',   t:"Newton's Laws Lab Report is overdue. Submit as soon as possible to avoid further penalty.",  d:day(0)  },
    { id:2, k:'Assignment',   t:'Quadratic Equations Worksheet is due in 2 days. You have marked it as in progress.',          d:day(0)  },
    { id:3, k:'New Material', t:'Ms. Khumalo uploaded: Mitosis and Meiosis Illustrated Notes.',                               d:day(-1) },
    { id:4, k:'Announcement', t:'Mr. Dlamini: bring your scientific calculator to every class this week.',                    d:day(-1) },
    { id:5, k:'Assessment',   t:'Algebra and Functions Test in 6 days. The study guide is in your Learning Materials.',       d:day(-1) },
    { id:6, k:'New Material', t:'Cell Cycle Animation video has been uploaded by Ms. Khumalo.',                               d:day(0)  },
    { id:7, k:'Announcement', t:'Mrs. Naidoo: poetry anthology available in the library. Borrow your copy.',                 d:day(-2) },
    { id:8, k:'Assessment',   t:"Forces and Motion Quiz in 9 days. Review Newton's laws and free-body diagrams.",            d:day(-2) }
  ]
};

// ── Persistent state (localStorage) ─────────────────────────
let S = JSON.parse(localStorage.getItem('edora') || 'null') || {
  auth: 0,
  user: null,
  as:   {},      // assignment statuses override
  plan: [        // study planner sessions
    { id:101, s:'math', date:day(1), time:'16:00', done:0 },
    { id:102, s:'phys', date:day(1), time:'17:30', done:0 },
    { id:103, s:'eng',  date:day(2), time:'15:00', done:0 },
    { id:104, s:'life', date:day(3), time:'16:30', done:0 }
  ],
  nt:   {},      // read notification ids
  cu:   {},      // catch-up plan checked items
  chat: [],      // AI chat history
  mf:   day(-3), // missed-school from date
  mt:   day(-1)  // missed-school to date
};

const save = () => localStorage.setItem('edora', JSON.stringify(S));

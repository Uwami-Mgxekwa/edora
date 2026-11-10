/* ============================================================
   EDORA — Mock Data & State
   ============================================================ */

// ── Date helpers ────────────────────────────────────────────
const day  = n => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0,10); };
const today = day(0);

// ── App data ────────────────────────────────────────────────
const D = {

  subjects: [
    // ── First Year ──────────────────────────────────────────
    { id:'prog1',  n:'Introduction to Programming',           t:'Mr. Owami',   e:'owami@edora.ac.za',   p:74, color:'#FFF3C0', desc:'Fundamentals of programming: variables, control flow, functions, and basic data structures using Python.',      year:1 },
    { id:'dbms1',  n:'Intro to Database Management Systems',  t:'Mr. Owami',   e:'owami@edora.ac.za',   p:68, color:'#DCFCE7', desc:'Relational databases, SQL queries, entity-relationship modelling, and normalisation.',                           year:1 },
    { id:'arch1',  n:'Computer Architecture',                 t:'Mr. Owami',   e:'owami@edora.ac.za',   p:61, color:'#DBEAFE', desc:'Number systems, logic gates, CPU design, memory hierarchy, and instruction set architecture.',                   year:1 },
    // ── Second Year ─────────────────────────────────────────
    { id:'prog2',  n:'Advanced Programming',                  t:'Mr. Owami',   e:'owami@edora.ac.za',   p:71, color:'#FCE7F3', desc:'Object-oriented design, data structures, algorithms, complexity analysis, and design patterns.',                 year:2 },
    { id:'web2',   n:'Web Development',                       t:'Mr. Owami',   e:'owami@edora.ac.za',   p:79, color:'#E0E7FF', desc:'HTML, CSS, JavaScript, responsive design, RESTful APIs, and modern front-end frameworks.',                       year:2 },
    { id:'sad2',   n:'System Analysis and Design',            t:'Mr. Owami',   e:'owami@edora.ac.za',   p:65, color:'#FEE2E2', desc:'SDLC methodologies, requirements engineering, UML modelling, and system design documentation.',                  year:2 },
    { id:'ai2',    n:'Artificial Intelligence',               t:'Mr. Owami',   e:'owami@edora.ac.za',   p:58, color:'#F3E8FF', desc:'Search algorithms, knowledge representation, machine learning fundamentals, and neural networks.',               year:2 },
    { id:'ebus2',  n:'E-Business',                            t:'Mr. Owami',   e:'owami@edora.ac.za',   p:83, color:'#ECFDF5', desc:'Digital commerce models, online payment systems, e-marketing, and cybersecurity in business contexts.',          year:2 }
  ],

  assignments: [
    // ── First Year ──────────────────────────────────────────
    { id:1,  s:'prog1', t:'Python Functions Exercise',               d:'Write five functions covering: factorial, Fibonacci, palindrome check, list reversal, and a basic calculator. Include docstrings and test cases.',                       due:day(3),   g:day(-3),  st:'In progress', pr:'High'   },
    { id:2,  s:'dbms1', t:'ER Diagram: Library System',              d:'Design an entity-relationship diagram for a university library. Identify at least six entities, their attributes, and all relationships with cardinalities.',           due:day(5),   g:day(-2),  st:'Not started', pr:'Medium' },
    { id:3,  s:'arch1', t:'Number Systems Conversion Sheet',         d:'Convert the following between binary, octal, hexadecimal, and decimal. Show all working. 20 questions — refer to the tutorial slides for the method.',               due:day(-1),  g:day(-6),  st:'Not started', pr:'High'   },
    { id:4,  s:'prog1', t:'Control Flow Programming Task',           d:'Write a Python program using loops and conditionals to simulate a simple ATM: deposit, withdraw, check balance, and exit. Handle invalid inputs.',                   due:day(7),   g:day(-1),  st:'Not started', pr:'Low'    },
    { id:5,  s:'dbms1', t:'SQL Query Assignment',                    d:'Write SQL SELECT, JOIN, GROUP BY, and subquery statements against the provided student database schema. Submit a .sql file and a screenshot of each result.',         due:day(-4),  g:day(-9),  st:'Submitted',   pr:'Medium' },
    // ── Second Year ─────────────────────────────────────────
    { id:6,  s:'prog2', t:'Linked List Implementation',              d:'Implement a singly linked list in Java with insert, delete, search, and reverse operations. Include JUnit tests for each method.',                                   due:day(-8),  g:day(-12), st:'Graded',      pr:'High'   },
    { id:7,  s:'web2',  t:'Responsive Portfolio Page',               d:'Build a personal portfolio using HTML5 and CSS3. Must be fully responsive (mobile-first), use Flexbox or Grid, and pass the W3C validator with no errors.',           due:day(6),   g:day(0),   st:'Not started', pr:'Medium' },
    { id:8,  s:'sad2',  t:'Use Case Diagram — Online Store',         d:'Model the use cases for a basic e-commerce checkout flow. Include at least eight use cases, actors, include/extend relationships, and a written description.',       due:day(10),  g:day(1),   st:'Not started', pr:'Low'    },
    { id:9,  s:'ai2',   t:'BFS and DFS Implementation',              d:'Implement breadth-first search and depth-first search in Python on an adjacency-list graph. Trace both algorithms on the given graph and compare their outputs.',   due:day(2),   g:day(-1),  st:'In progress', pr:'Medium' },
    { id:10, s:'ebus2', t:'E-Business Model Analysis Report',        d:'Choose a South African e-commerce company and analyse its business model: revenue streams, digital marketing strategy, payment security, and growth opportunities.', due:day(14),  g:day(2),   st:'Not started', pr:'Low'    }
  ],

  materials: [
    // prog1
    { id:1,  s:'prog1', t:'Python Basics — Variables and Data Types',   y:'PDF Notes',    d:day(-2),  size:'980 KB' },
    { id:2,  s:'prog1', t:'Functions and Scope Explained',              y:'Video',        d:day(-4),  size:'22 min' },
    { id:3,  s:'prog1', t:'Control Flow Cheat Sheet',                   y:'Study Guide',  d:day(-7),  size:'340 KB' },
    // dbms1
    { id:4,  s:'dbms1', t:'Entity-Relationship Modelling Notes',        y:'PDF Notes',    d:day(-1),  size:'1.4 MB' },
    { id:5,  s:'dbms1', t:'SQL Fundamentals — SELECT to JOIN',          y:'Study Guide',  d:day(-5),  size:'760 KB' },
    { id:6,  s:'dbms1', t:'Database Normalisation Lecture Slides',      y:'Presentation', d:day(-3),  size:'3.2 MB' },
    // arch1
    { id:7,  s:'arch1', t:'Number Systems and Conversions Guide',       y:'Study Guide',  d:day(-3),  size:'520 KB' },
    { id:8,  s:'arch1', t:'Logic Gates and Boolean Algebra Notes',      y:'PDF Notes',    d:day(-6),  size:'1.1 MB' },
    { id:9,  s:'arch1', t:'CPU Architecture Overview Slides',           y:'Presentation', d:day(-1),  size:'5.0 MB' },
    // prog2
    { id:10, s:'prog2', t:'OOP Design Patterns — Factory and Singleton',y:'PDF Notes',    d:day(-1),  size:'1.7 MB' },
    { id:11, s:'prog2', t:'Big-O Complexity Analysis Tutorial',         y:'Video',        d:day(0),   size:'18 min' },
    // web2
    { id:12, s:'web2',  t:'CSS Grid and Flexbox Layout Guide',          y:'Study Guide',  d:day(-5),  size:'890 KB' },
    { id:13, s:'web2',  t:'Intro to JavaScript — DOM Manipulation',     y:'PDF Notes',    d:day(-2),  size:'1.3 MB' },
    // sad2
    { id:14, s:'sad2',  t:'UML Diagram Types Reference Sheet',          y:'Study Guide',  d:day(-8),  size:'670 KB' },
    // ai2
    { id:15, s:'ai2',   t:'Search Algorithms — BFS, DFS, A* Notes',    y:'PDF Notes',    d:day(-4),  size:'1.5 MB' },
    // ebus2
    { id:16, s:'ebus2', t:'E-Commerce Business Models Overview',        y:'Presentation', d:day(-10), size:'4.1 MB' }
  ],

  lessons: [
    { id:1,  d:day(-1),  s:'prog1', topic:'Functions and Recursion',                  notes:'A function calls itself with a base case to stop recursion. Example: factorial(n) = n × factorial(n-1). Always define the base case first.' },
    { id:2,  d:day(-1),  s:'dbms1', topic:'SQL JOINs',                                notes:'INNER JOIN returns matching rows in both tables. LEFT JOIN returns all rows from left plus matches. Practice the library schema queries.' },
    { id:3,  d:day(-2),  s:'arch1', topic:'Binary and Hexadecimal Conversion',        notes:'Binary to hex: group 4 bits from the right, convert each group. Hex to decimal: multiply each digit by 16^position.' },
    { id:4,  d:day(-2),  s:'prog2', topic:'Linked Lists',                             notes:'Each node stores data and a pointer to the next node. Head points to first node; last node points to null. Insertion at head is O(1).' },
    { id:5,  d:day(-3),  s:'web2',  topic:'Responsive Design with CSS Grid',          notes:'grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) creates flexible columns. Use media queries for breakpoints at 768px and 480px.' },
    { id:6,  d:day(-3),  s:'sad2',  topic:'Use Case Diagrams',                        notes:'Actors are outside the system boundary. Use cases are ovals. Include = mandatory step. Extend = optional step triggered by condition.' },
    { id:7,  d:day(-4),  s:'ai2',   topic:'Breadth-First Search',                     notes:'BFS uses a queue (FIFO). Visits all neighbours at current depth before going deeper. Time complexity O(V+E). Used for shortest path in unweighted graphs.' },
    { id:8,  d:day(-4),  s:'ebus2', topic:'E-Commerce Revenue Models',                notes:'Models: subscription, transaction fee, advertising, freemium. South African examples: Takealot (transaction), News24 (advertising + subscription).' },
    { id:9,  d:day(-5),  s:'prog1', topic:'Lists, Tuples, and Dictionaries',          notes:'List: ordered, mutable. Tuple: ordered, immutable. Dictionary: key-value pairs, O(1) lookup. Use dict.get(key, default) to avoid KeyError.' },
    { id:10, d:day(-5),  s:'dbms1', topic:'Normalisation — 1NF to 3NF',              notes:'1NF: atomic values, no repeating groups. 2NF: no partial dependency on composite key. 3NF: no transitive dependencies. Each step removes redundancy.' },
    { id:11, d:day(-6),  s:'arch1', topic:'Logic Gates and Boolean Algebra',          notes:'AND: both inputs true. OR: at least one true. NOT: inverts. XOR: different inputs. De Morgan\'s law: NOT(A AND B) = NOT A OR NOT B.' },
    { id:12, d:day(-7),  s:'prog2', topic:'Big-O Complexity Analysis',                notes:'O(1) constant, O(log n) binary search, O(n) linear scan, O(n²) nested loops. Always analyse worst case. Space complexity counts memory used.' }
  ],

  tests: [
    { id:1, s:'prog1', t:'Programming Fundamentals Test',       d:day(6),  type:'Test',       scope:'Functions, recursion, lists, control flow' },
    { id:2, s:'arch1', t:'Number Systems Quiz',                 d:day(9),  type:'Quiz',       scope:'Binary, octal, hex conversions and logic gates' },
    { id:3, s:'dbms1', t:'SQL and Normalisation Assessment',    d:day(12), type:'Test',       scope:'SQL queries, JOINs, 1NF–3NF normalisation' },
    { id:4, s:'prog2', t:'Data Structures Test',                d:day(16), type:'Test',       scope:'Linked lists, stacks, queues, complexity analysis' },
    { id:5, s:'ai2',   t:'Search Algorithms Practical',         d:day(20), type:'Practical',  scope:'BFS, DFS implementation and graph traversal' }
  ],

  ann: [
    { id:1, s:'prog1', t:'Bring your laptop to every lab session. The practical for functions is on Thursday.',                            d:day(-1) },
    { id:2, s:'arch1', t:'Number systems assignment is due at the start of class. No email submissions — submit on the portal only.',      d:day(-2) },
    { id:3, s:'dbms1', t:'The SQL assignment database schema has been uploaded to the LMS. Download it before Thursday.',                  d:day(-3) },
    { id:4, s:'web2',  t:'Portfolio submissions open on the portal from Monday. Use the peer review rubric to self-assess before submitting.', d:day(-4) },
    { id:5, s:'ai2',   t:'Practical session on Thursday. Bring your laptop with Python and networkx installed.',                           d:day(-1) },
    { id:6, s:'prog2', t:'Test study guide has been uploaded. Focus on the complexity analysis questions and linked list operations.',      d:day(0)  }
  ],

  notifs: [
    { id:1, k:'Assignment',   t:'Number Systems Conversion Sheet is overdue. Submit as soon as possible.',                                 d:day(0)  },
    { id:2, k:'Assignment',   t:'Python Functions Exercise is due in 3 days. You have marked it as in progress.',                          d:day(0)  },
    { id:3, k:'New Material', t:'Mr. Owami uploaded: Python Basics — Variables and Data Types.',                                           d:day(-1) },
    { id:4, k:'Announcement', t:'Mr. Owami: bring your laptop to every lab session this week.',                                            d:day(-1) },
    { id:5, k:'Assessment',   t:'Programming Fundamentals Test in 6 days. The study guide is in your Learning Materials.',                 d:day(-1) },
    { id:6, k:'New Material', t:'Big-O Complexity Analysis Tutorial video uploaded by Mr. Owami.',                                         d:day(0)  },
    { id:7, k:'Announcement', t:'Mr. Owami: SQL assignment schema is now on the LMS. Download before Thursday.',                          d:day(-2) },
    { id:8, k:'Assessment',   t:'Number Systems Quiz in 9 days. Review binary, hex conversions and logic gates.',                         d:day(-2) }
  ]
};

// ── Persistent state (localStorage) ─────────────────────────
// Version bump — clears stale school-subject data from previous builds
const DATA_VERSION = 2;
if (parseInt(localStorage.getItem('edora-v') || '0') < DATA_VERSION) {
  localStorage.removeItem('edora');
  localStorage.setItem('edora-v', String(DATA_VERSION));
}

let S = JSON.parse(localStorage.getItem('edora') || 'null') || {
  auth: 0,
  user: null,
  as:   {},      // assignment statuses override
  plan: [        // study planner sessions
    { id:101, s:'prog1', date:day(1), time:'16:00', done:0 },
    { id:102, s:'arch1', date:day(1), time:'17:30', done:0 },
    { id:103, s:'dbms1', date:day(2), time:'15:00', done:0 },
    { id:104, s:'prog2', date:day(3), time:'16:30', done:0 }
  ],
  nt:   {},      // read notification ids
  cu:   {},      // catch-up plan checked items
  chat: [],      // AI chat history
  mf:   day(-3), // missed-school from date
  mt:   day(-1)  // missed-school to date
};

const save = () => localStorage.setItem('edora', JSON.stringify(S));

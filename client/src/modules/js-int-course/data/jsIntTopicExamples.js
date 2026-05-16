/* ═══════════════════════════════════════════════════════════════════
   jsIntTopicExamples.js — JAVASCRIPT ADVANCED IN MY STYLE
   Complete, truly interactive examples for all 44 topics
   Each entry: { topic, description, html, css, js }
   BATCH 1: Topics 1-3 (Advanced Data Types)
═══════════════════════════════════════════════════════════════════ */

export const jsIntTopicExamples = [

  /* ══════════════════════════════════════════════
     BATCH 1: ADVANCED DATA TYPES (3 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "arrays-advanced",
    description: "Advanced array creation, multi-dimensional arrays, and array-like objects",
    html: `<div class="container">
  <h1>🔷 Advanced Arrays</h1>
  <p class="subtitle">Explore powerful array creation techniques</p>

  <div class="section">
    <h2>1. Array Creation Methods</h2>
    <div class="btn-group">
      <button id="btn-literal">Array Literal</button>
      <button id="btn-from">Array.from()</button>
      <button id="btn-of">Array.of()</button>
      <button id="btn-fill">Array Fill</button>
    </div>
    <div id="creation-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multi-Dimensional Array (Grid)</h2>
    <div id="grid-container" class="grid"></div>
    <p id="grid-info" class="info-text">Click any cell to highlight it</p>
  </div>

  <div class="section">
    <h2>3. Array-like to Real Array</h2>
    <button id="btn-convert">Convert Arguments</button>
    <div id="convert-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  max-width: 320px;
  margin-bottom: 1rem;
}
.grid-cell {
  background: #2d1b69;
  color: #e5e5e5;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}
.grid-cell:hover {
  background: #7c3aed;
  transform: scale(1.08);
}
.grid-cell.active {
  background: #8b5cf6;
  border-color: #fff;
  transform: scale(1.12);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.5);
}
.info-text {
  color: #6b7280;
  font-size: 0.85rem;
  font-style: italic;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Advanced Arrays
const output = document.getElementById('creation-output');
const gridContainer = document.getElementById('grid-container');
const gridInfo = document.getElementById('grid-info');
const convertOutput = document.getElementById('convert-output');
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Array Creation Methods
document.getElementById('btn-literal').addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5];
  output.textContent = 'Array Literal: [' + arr.join(', ') + ']\\nLength: ' + arr.length;
  log('✅ Array Literal created: [' + arr.join(', ') + ']');
});

document.getElementById('btn-from').addEventListener('click', () => {
  const fromString = Array.from('hello');
  const fromRange = Array.from({ length: 5 }, (_, i) => i + 1);
  const fromSet = Array.from(new Set([1, 2, 2, 3, 3, 4]));
  output.textContent = 
    'From string: [' + fromString.join(', ') + ']\\n' +
    'From range:  [' + fromRange.join(', ') + ']\\n' +
    'From Set:    [' + fromSet.join(', ') + ']';
  log('✅ Array.from() examples created');
});

document.getElementById('btn-of').addEventListener('click', () => {
  const single = Array.of(7);
  const multi = Array.of(1, 2, 3, 4, 5);
  output.textContent = 
    'Array.of(7):         [' + single.join(', ') + '] (NOT empty x7!)\\n' +
    'Array.of(1,2,3,4,5): [' + multi.join(', ') + ']';
  log('✅ Array.of() - single: [' + single + '], multi: [' + multi.join(', ') + ']');
});

document.getElementById('btn-fill').addEventListener('click', () => {
  const zeros = new Array(5).fill(0);
  const pattern = new Array(5).fill('★');
  const mapped = Array.from({ length: 5 }, (_, i) => i * i);
  output.textContent = 
    'fill(0):    [' + zeros.join(', ') + ']\\n' +
    'fill("★"):  [' + pattern.join(', ') + ']\\n' +
    'Squares:    [' + mapped.join(', ') + ']';
  log('✅ Filled arrays created');
});

// 2. Multi-Dimensional Grid
const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

grid.forEach((row, r) => {
  row.forEach((val, c) => {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.textContent = val;
    cell.addEventListener('click', () => {
      document.querySelectorAll('.grid-cell').forEach(el => el.classList.remove('active'));
      cell.classList.add('active');
      gridInfo.textContent = 'Selected: grid[' + r + '][' + c + '] = ' + val;
      log('🎯 Grid cell [' + r + '][' + c + '] = ' + val);
    });
    gridContainer.appendChild(cell);
  });
});

// 3. Array-like to Real Array
document.getElementById('btn-convert').addEventListener('click', () => {
  function sumAll() {
    const argsArray = Array.from(arguments);
    return argsArray.reduce((acc, n) => acc + n, 0);
  }
  const result = sumAll(10, 20, 30, 40);
  convertOutput.textContent = 
    'sumAll(10, 20, 30, 40) = ' + result + '\\n' +
    'arguments converted to real array using Array.from()';
  log('✅ Sum result: ' + result);
});

log('🚀 Advanced Arrays module loaded!');`,
  },

  {
    topic: "objects-deep",
    description: "Deep object usage — property shorthand, computed keys, property descriptors",
    html: `<div class="container">
  <h1>🔷 Deep Object Usage</h1>
  <p class="subtitle">Property shorthand, computed keys, descriptors & more</p>

  <div class="section">
    <h2>1. Property Shorthand & Methods</h2>
    <button id="btn-shorthand">Create with Shorthand</button>
    <div id="shorthand-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Computed Property Keys</h2>
    <div class="input-row">
      <input type="text" id="key-input" placeholder="Enter key name" value="score" />
      <input type="number" id="value-input" placeholder="Enter value" value="100" />
      <button id="btn-computed">Add Property</button>
    </div>
    <div id="computed-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Property Descriptors</h2>
    <button id="btn-freeze">Object.freeze()</button>
    <button id="btn-define">defineProperty()</button>
    <button id="btn-seal">Object.seal()</button>
    <div id="descriptor-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Getters & Setters</h2>
    <div class="input-row">
      <label>Set Radius:</label>
      <input type="range" id="radius-slider" min="1" max="20" value="5" />
      <span id="radius-value">5</span>
    </div>
    <div id="getter-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>5. Object.keys / values / entries</h2>
    <button id="btn-keys">Keys</button>
    <button id="btn-values">Values</button>
    <button id="btn-entries">Entries</button>
    <div id="inspect-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
input[type="text"],
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
}
input[type="range"] {
  accent-color: #8b5cf6;
  width: 180px;
}
label {
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 600;
}
#radius-value {
  color: #8b5cf6;
  font-weight: 700;
  font-size: 1.2rem;
  min-width: 30px;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
  margin-top: 10px;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Deep Object Usage
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Property Shorthand
document.getElementById('btn-shorthand').addEventListener('click', () => {
  const name = 'Alice';
  const age = 30;
  const role = 'Developer';

  const user = { name, age, role };

  const calc = {
    value: 10,
    double() { return this.value * 2; },
    triple() { return this.value * 3; }
  };

  const output = document.getElementById('shorthand-output');
  output.textContent = 
    'User: ' + JSON.stringify(user, null, 2) + '\\n\\n' +
    'calc.double() = ' + calc.double() + '\\n' +
    'calc.triple() = ' + calc.triple();
  log('✅ Shorthand user created: ' + JSON.stringify(user));
});

// 2. Computed Property Keys
const dynamicObj = {};
document.getElementById('btn-computed').addEventListener('click', () => {
  const key = document.getElementById('key-input').value || 'key';
  const val = document.getElementById('value-input').value || '0';

  dynamicObj[key] = isNaN(val) ? val : Number(val);
  dynamicObj['level_' + Object.keys(dynamicObj).length] = 'auto';

  const output = document.getElementById('computed-output');
  output.textContent = JSON.stringify(dynamicObj, null, 2);
  log('✅ Dynamic object updated: ' + JSON.stringify(dynamicObj));
});

// 3. Property Descriptors
document.getElementById('btn-freeze').addEventListener('click', () => {
  const config = { apiUrl: 'https://api.example.com', timeout: 5000 };
  Object.freeze(config);
  config.timeout = 9999;
  const output = document.getElementById('descriptor-output');
  output.textContent = 
    'Object.freeze(config)\\n' +
    'config.timeout = 9999  // IGNORED!\\n' +
    'config.timeout is still: ' + config.timeout;
  log('✅ Frozen config - timeout unchanged: ' + config.timeout);
});

document.getElementById('btn-define').addEventListener('click', () => {
  const obj = {};
  Object.defineProperty(obj, 'MAX_SIZE', {
    value: 1000,
    writable: false,
    enumerable: true,
    configurable: false
  });
  obj.MAX_SIZE = 9999;
  const output = document.getElementById('descriptor-output');
  output.textContent = 
    'defineProperty(obj, "MAX_SIZE", { value: 1000, writable: false })\\n' +
    'obj.MAX_SIZE = 9999  // IGNORED!\\n' +
    'obj.MAX_SIZE is still: ' + obj.MAX_SIZE;
  log('✅ Defined property MAX_SIZE: ' + obj.MAX_SIZE);
});

document.getElementById('btn-seal').addEventListener('click', () => {
  const data = { name: 'Test', count: 0 };
  Object.seal(data);
  data.count = 42;
  data.newProp = 'hi';
  const output = document.getElementById('descriptor-output');
  output.textContent = 
    'Object.seal(data)\\n' +
    'data.count = 42     // OK (can modify existing)\\n' +
    'data.newProp = "hi" // IGNORED (cannot add new)\\n' +
    'Result: ' + JSON.stringify(data);
  log('✅ Sealed object: ' + JSON.stringify(data));
});

// 4. Getters & Setters
const circle = {
  _radius: 5,
  get radius() { return this._radius; },
  set radius(r) { this._radius = Math.max(0, r); },
  get area() { return Math.PI * this._radius ** 2; },
  get circumference() { return 2 * Math.PI * this._radius; }
};

const slider = document.getElementById('radius-slider');
const radiusDisplay = document.getElementById('radius-value');
const getterOutput = document.getElementById('getter-output');

function updateCircle() {
  circle.radius = Number(slider.value);
  radiusDisplay.textContent = circle.radius;
  getterOutput.textContent = 
    'circle.radius        = ' + circle.radius + '\\n' +
    'circle.area          = ' + circle.area.toFixed(2) + '\\n' +
    'circle.circumference = ' + circle.circumference.toFixed(2);
}
slider.addEventListener('input', () => {
  updateCircle();
  log('🔄 Radius changed to: ' + circle.radius);
});
updateCircle();

// 5. Object.keys / values / entries
const product = { id: 1, title: 'Laptop', price: 999, brand: 'TechCo' };

document.getElementById('btn-keys').addEventListener('click', () => {
  const keys = Object.keys(product);
  document.getElementById('inspect-output').textContent = 
    'Object.keys(product):\\n[' + keys.map(k => '"' + k + '"').join(', ') + ']';
  log('✅ Keys: [' + keys.join(', ') + ']');
});

document.getElementById('btn-values').addEventListener('click', () => {
  const values = Object.values(product);
  document.getElementById('inspect-output').textContent = 
    'Object.values(product):\\n[' + values.map(v => JSON.stringify(v)).join(', ') + ']';
  log('✅ Values: [' + values.join(', ') + ']');
});

document.getElementById('btn-entries').addEventListener('click', () => {
  const entries = Object.entries(product);
  document.getElementById('inspect-output').textContent = 
    'Object.entries(product):\\n' + entries.map(([k, v]) => '  [' + JSON.stringify(k) + ', ' + JSON.stringify(v) + ']').join('\\n');
  log('✅ Entries count: ' + entries.length);
});

log('🚀 Deep Objects module loaded!');`,
  },

  {
    topic: "nested-objects-arrays",
    description: "Working with deeply nested objects and arrays — access, update, traverse",
    html: `<div class="container">
  <h1>🔷 Nested Objects & Arrays</h1>
  <p class="subtitle">Access, update, and traverse deep data structures</p>

  <div class="section">
    <h2>1. Company Data Structure</h2>
    <div id="tree-view" class="tree-container"></div>
  </div>

  <div class="section">
    <h2>2. Deep Access</h2>
    <div class="btn-group">
      <button id="btn-access1">First Employee</button>
      <button id="btn-access2">All Skills</button>
      <button id="btn-access3">Optional Chaining</button>
    </div>
    <div id="access-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Immutable Update</h2>
    <div class="input-row">
      <input type="text" id="skill-input" placeholder="New skill" value="Node.js" />
      <button id="btn-add-skill">Add to Alice</button>
    </div>
    <div id="update-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Flatten & Traverse</h2>
    <button id="btn-flatten">flatMap Employees</button>
    <button id="btn-clone">Deep Clone</button>
    <div id="traverse-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 180px;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.tree-container {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #e5e5e5;
  line-height: 1.8;
  overflow-x: auto;
  max-height: 300px;
  overflow-y: auto;
}
.tree-key {
  color: #8b5cf6;
  font-weight: 600;
}
.tree-value {
  color: #fbbf24;
}
.tree-bracket {
  color: #6b7280;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Nested Objects & Arrays
const company = {
  name: 'TechCorp',
  departments: [
    {
      dept: 'Engineering',
      employees: [
        { id: 1, name: 'Alice', skills: ['JS', 'React'] },
        { id: 2, name: 'Bob', skills: ['Python', 'Django'] }
      ]
    },
    {
      dept: 'Design',
      employees: [
        { id: 3, name: 'Carol', skills: ['Figma', 'CSS'] }
      ]
    }
  ]
};

const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Render tree view
function renderTree(obj, container) {
  let html = '<pre style="margin:0;">';
  html += JSON.stringify(obj, null, 2)
    .replace(/"([^"]+)":/g, '<span class="tree-key">"$1"</span>:')
    .replace(/: "([^"]+)"/g, ': <span class="tree-value">"$1"</span>')
    .replace(/: (\d+)/g, ': <span class="tree-value">$1</span>');
  html += '</pre>';
  container.innerHTML = html;
}
renderTree(company, document.getElementById('tree-view'));

// 2. Deep Access
document.getElementById('btn-access1').addEventListener('click', () => {
  const first = company.departments[0].employees[0];
  const output = document.getElementById('access-output');
  output.textContent = 
    'company.departments[0].employees[0]\\n\\n' +
    'Name:   ' + first.name + '\\n' +
    'Skills: [' + first.skills.join(', ') + ']';
  log('✅ First employee: ' + first.name);
});

document.getElementById('btn-access2').addEventListener('click', () => {
  const allSkills = company.departments
    .flatMap(d => d.employees)
    .flatMap(e => e.skills);
  const output = document.getElementById('access-output');
  output.textContent = 
    'All skills across company:\\n[' + allSkills.join(', ') + ']';
  log('✅ All skills: [' + allSkills.join(', ') + ']');
});

document.getElementById('btn-access3').addEventListener('click', () => {
  const ceo = company?.leadership?.ceo ?? 'Not defined';
  const dept = company?.departments?.[0]?.dept ?? 'Unknown';
  const output = document.getElementById('access-output');
  output.textContent = 
    'company?.leadership?.ceo ?? "Not defined"\\n' +
    'Result: ' + ceo + '  (no error!)\\n\\n' +
    'company?.departments?.[0]?.dept\\n' +
    'Result: ' + dept;
  log('✅ Optional chaining - CEO: ' + ceo + ', Dept: ' + dept);
});

// 3. Immutable Update
document.getElementById('btn-add-skill').addEventListener('click', () => {
  const newSkill = document.getElementById('skill-input').value || 'TypeScript';
  
  const updated = {
    ...company,
    departments: company.departments.map(dept =>
      dept.dept === 'Engineering'
        ? {
            ...dept,
            employees: dept.employees.map(emp =>
              emp.id === 1
                ? { ...emp, skills: [...emp.skills, newSkill] }
                : emp
            )
          }
        : dept
    )
  };

  const aliceUpdated = updated.departments[0].employees[0];
  const output = document.getElementById('update-output');
  output.textContent = 
    'Added "' + newSkill + '" to Alice (immutably)\\n\\n' +
    'Original Alice skills: [' + company.departments[0].employees[0].skills.join(', ') + ']\\n' +
    'Updated Alice skills:  [' + aliceUpdated.skills.join(', ') + ']\\n\\n' +
    '(Original data unchanged!)';
  log('✅ Immutable update - added: ' + newSkill);
});

// 4. Flatten & Traverse
document.getElementById('btn-flatten').addEventListener('click', () => {
  const allEmployees = company.departments.flatMap(d => d.employees);
  const output = document.getElementById('traverse-output');
  output.textContent = 
    'company.departments.flatMap(d => d.employees)\\n\\n' +
    allEmployees.map(e => '  ' + e.name + ' — [' + e.skills.join(', ') + ']').join('\\n');
  log('✅ All employees: [' + allEmployees.map(e => e.name).join(', ') + ']');
});

document.getElementById('btn-clone').addEventListener('click', () => {
  const clone = JSON.parse(JSON.stringify(company));
  clone.name = 'CloneCorp';
  const output = document.getElementById('traverse-output');
  output.textContent = 
    'const clone = JSON.parse(JSON.stringify(company))\\n' +
    'clone.name = "CloneCorp"\\n\\n' +
    'Original: company.name = "' + company.name + '"  (unchanged!)\\n' +
    'Clone:    clone.name   = "' + clone.name + '"';
  log('✅ Deep clone created - original unchanged');
});

log('🚀 Nested Objects module loaded!');`,
  },


  /* ══════════════════════════════════════════════
     BATCH 2: ARRAY METHODS (7 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "map",
    description: "map() — transform every element and return a new array",
    html: `<div class="container">
  <h1>🔷 Array.map()</h1>
  <p class="subtitle">Transform every element and return a new array</p>

  <div class="section">
    <h2>1. Number Transformations</h2>
    <div class="btn-group">
      <button id="btn-double">Double</button>
      <button id="btn-square">Square</button>
      <button id="btn-celsius">°C to °F</button>
    </div>
    <div class="data-display">
      <div class="data-label">Original: <span id="original-nums">[1, 2, 3, 4, 5]</span></div>
      <div class="data-label">Result: <span id="num-result" class="highlight"></span></div>
    </div>
  </div>

  <div class="section">
    <h2>2. Object Mapping</h2>
    <button id="btn-extract">Extract Names</button>
    <button id="btn-format">Format Prices</button>
    <button id="btn-rank">Add Ranks</button>
    <div id="obj-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Chain map + filter</h2>
    <button id="btn-chain">Even Squares</button>
    <div id="chain-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.data-display {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
.data-label {
  color: #9ca3af;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.75rem;
}
.data-label span {
  color: #d1fae5;
}
.highlight {
  color: #fbbf24 !important;
  font-weight: 700;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Array.map()
const numbers = [1, 2, 3, 4, 5];
const numResult = document.getElementById('num-result');
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Number Transformations
document.getElementById('btn-double').addEventListener('click', () => {
  const doubled = numbers.map(n => n * 2);
  numResult.textContent = '[' + doubled.join(', ') + ']';
  log('✅ Doubled: [' + doubled.join(', ') + ']');
});

document.getElementById('btn-square').addEventListener('click', () => {
  const squared = numbers.map(n => n * n);
  numResult.textContent = '[' + squared.join(', ') + ']';
  log('✅ Squared: [' + squared.join(', ') + ']');
});

document.getElementById('btn-celsius').addEventListener('click', () => {
  const celsius = [0, 20, 37, 100];
  const fahrenheit = celsius.map(c => (c * 9) / 5 + 32);
  document.getElementById('original-nums').textContent = '[' + celsius.join(', ') + '] °C';
  numResult.textContent = '[' + fahrenheit.join(', ') + '] °F';
  log('✅ Fahrenheit: [' + fahrenheit.join(', ') + ']');
});

// 2. Object Mapping
const users = [
  { id: 1, name: 'Alice', age: 25, salary: 75000 },
  { id: 2, name: 'Bob', age: 30, salary: 82000 },
  { id: 3, name: 'Carol', age: 22, salary: 65000 }
];
const objOutput = document.getElementById('obj-output');

document.getElementById('btn-extract').addEventListener('click', () => {
  const names = users.map(u => u.name);
  objOutput.textContent = 'users.map(u => u.name)\\n\\nResult: [' + names.map(n => '"' + n + '"').join(', ') + ']';
  log('✅ Names: [' + names.join(', ') + ']');
});

document.getElementById('btn-format').addEventListener('click', () => {
  const formatted = users.map(u => ({
    name: u.name,
    salary: '$' + u.salary.toLocaleString()
  }));
  objOutput.textContent = 'users.map(u => ({ name, salary: "$..." }))\\n\\n' +
    formatted.map(f => '  ' + f.name + ' → ' + f.salary).join('\\n');
  log('✅ Formatted salaries');
});

document.getElementById('btn-rank').addEventListener('click', () => {
  const ranked = users.map((u, i) => ({ rank: i + 1, ...u }));
  objOutput.textContent = 'users.map((u, i) => ({ rank: i+1, ...u }))\\n\\n' +
    ranked.map(r => '  #' + r.rank + ' ' + r.name + ' (age: ' + r.age + ')').join('\\n');
  log('✅ Ranked users created');
});

// 3. Chain
document.getElementById('btn-chain').addEventListener('click', () => {
  const evenSquares = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * n);
  document.getElementById('chain-output').textContent = 
    'numbers.filter(n => n % 2 === 0).map(n => n * n)\\n\\n' +
    'Even numbers: [' + numbers.filter(n => n % 2 === 0).join(', ') + ']\\n' +
    'Even squares: [' + evenSquares.join(', ') + ']';
  log('✅ Even squares: [' + evenSquares.join(', ') + ']');
});

log('🚀 Array.map() module loaded!');`,
  },

  {
    topic: "filter",
    description: "filter() — select elements matching a condition",
    html: `<div class="container">
  <h1>🔷 Array.filter()</h1>
  <p class="subtitle">Select elements matching a condition</p>

  <div class="section">
    <h2>1. Number Filtering</h2>
    <div class="btn-group">
      <button id="btn-even">Even Numbers</button>
      <button id="btn-positive">Positive Only</button>
      <button id="btn-range">Range 10-50</button>
    </div>
    <div class="data-display">
      <div class="data-label">Original: <span id="original-nums">[-5, 3, 12, -8, 25, 42, 7, -1, 33]</span></div>
      <div class="data-label">Filtered: <span id="num-result" class="highlight"></span></div>
    </div>
  </div>

  <div class="section">
    <h2>2. Object Filtering</h2>
    <button id="btn-adults">Adults (18+)</button>
    <button id="btn-active">Active Users</button>
    <button id="btn-search">Search "a"</button>
    <div id="obj-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Complex Filters</h2>
    <button id="btn-multiple">Multiple Conditions</button>
    <button id="btn-unique">Remove Duplicates</button>
    <div id="complex-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.data-display {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
.data-label {
  color: #9ca3af;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.75rem;
}
.data-label span {
  color: #d1fae5;
}
.highlight {
  color: #fbbf24 !important;
  font-weight: 700;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Array.filter()
const numbers = [-5, 3, 12, -8, 25, 42, 7, -1, 33];
const numResult = document.getElementById('num-result');
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Number Filtering
document.getElementById('btn-even').addEventListener('click', () => {
  const even = numbers.filter(n => n % 2 === 0);
  numResult.textContent = '[' + even.join(', ') + ']';
  log('✅ Even numbers: [' + even.join(', ') + ']');
});

document.getElementById('btn-positive').addEventListener('click', () => {
  const positive = numbers.filter(n => n > 0);
  numResult.textContent = '[' + positive.join(', ') + ']';
  log('✅ Positive numbers: [' + positive.join(', ') + ']');
});

document.getElementById('btn-range').addEventListener('click', () => {
  const inRange = numbers.filter(n => n >= 10 && n <= 50);
  numResult.textContent = '[' + inRange.join(', ') + ']';
  log('✅ Range 10-50: [' + inRange.join(', ') + ']');
});

// 2. Object Filtering
const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 17, active: false },
  { id: 3, name: 'Carol', age: 30, active: true },
  { id: 4, name: 'Dan', age: 15, active: true }
];
const objOutput = document.getElementById('obj-output');

document.getElementById('btn-adults').addEventListener('click', () => {
  const adults = users.filter(u => u.age >= 18);
  objOutput.textContent = 'users.filter(u => u.age >= 18)\\n\\n' +
    adults.map(u => '  ' + u.name + ' (age: ' + u.age + ')').join('\\n') +
    '\\n\\nCount: ' + adults.length;
  log('✅ Adults: ' + adults.length + ' users');
});

document.getElementById('btn-active').addEventListener('click', () => {
  const active = users.filter(u => u.active);
  objOutput.textContent = 'users.filter(u => u.active)\\n\\n' +
    active.map(u => '  ' + u.name + ' — active: ' + u.active).join('\\n') +
    '\\n\\nCount: ' + active.length;
  log('✅ Active users: ' + active.length);
});

document.getElementById('btn-search').addEventListener('click', () => {
  const withA = users.filter(u => u.name.toLowerCase().includes('a'));
  objOutput.textContent = 'users.filter(u => u.name.includes("a"))\\n\\n' +
    withA.map(u => '  ' + u.name).join('\\n') +
    '\\n\\nCount: ' + withA.length;
  log('✅ Names with "a": [' + withA.map(u => u.name).join(', ') + ']');
});

// 3. Complex Filters
document.getElementById('btn-multiple').addEventListener('click', () => {
  const result = users.filter(u => u.age >= 18 && u.active);
  const complexOutput = document.getElementById('complex-output');
  complexOutput.textContent = 
    'users.filter(u => u.age >= 18 && u.active)\\n\\n' +
    'Active adults:\\n' +
    result.map(u => '  ' + u.name + ' (age: ' + u.age + ')').join('\\n') +
    '\\n\\nCount: ' + result.length;
  log('✅ Active adults: ' + result.length);
});

document.getElementById('btn-unique').addEventListener('click', () => {
  const duplicates = [1, 2, 2, 3, 4, 4, 4, 5, 5];
  const unique = duplicates.filter((val, idx, arr) => arr.indexOf(val) === idx);
  const complexOutput = document.getElementById('complex-output');
  complexOutput.textContent = 
    'Original: [' + duplicates.join(', ') + ']\\n\\n' +
    'duplicates.filter((val, idx, arr) => arr.indexOf(val) === idx)\\n\\n' +
    'Unique: [' + unique.join(', ') + ']';
  log('✅ Unique values: [' + unique.join(', ') + ']');
});

log('🚀 Array.filter() module loaded!');`,
  },

  {
    topic: "reduce",
    description: "reduce() — accumulate array values into a single result",
    html: `<div class="container">
  <h1>🔷 Array.reduce()</h1>
  <p class="subtitle">Accumulate array values into a single result</p>

  <div class="section">
    <h2>1. Basic Accumulation</h2>
    <div class="btn-group">
      <button id="btn-sum">Sum</button>
      <button id="btn-product">Product</button>
      <button id="btn-max">Max Value</button>
    </div>
    <div class="data-display">
      <div class="data-label">Array: <span id="original-nums">[5, 10, 15, 20, 25]</span></div>
      <div class="data-label">Result: <span id="num-result" class="highlight"></span></div>
    </div>
  </div>

  <div class="section">
    <h2>2. Object Accumulation</h2>
    <button id="btn-total-price">Total Price</button>
    <button id="btn-group-by">Group by Category</button>
    <button id="btn-count">Count by Status</button>
    <div id="obj-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Advanced Reduce</h2>
    <button id="btn-flatten">Flatten Array</button>
    <button id="btn-pipeline">Pipeline Functions</button>
    <div id="advanced-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.data-display {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
.data-label {
  color: #9ca3af;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.75rem;
}
.data-label span {
  color: #d1fae5;
}
.highlight {
  color: #fbbf24 !important;
  font-weight: 700;
  font-size: 1.5rem;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Array.reduce()
const numbers = [5, 10, 15, 20, 25];
const numResult = document.getElementById('num-result');
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Accumulation
document.getElementById('btn-sum').addEventListener('click', () => {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  numResult.textContent = sum;
  log('✅ Sum: ' + sum);
});

document.getElementById('btn-product').addEventListener('click', () => {
  const product = numbers.reduce((acc, n) => acc * n, 1);
  numResult.textContent = product.toLocaleString();
  log('✅ Product: ' + product.toLocaleString());
});

document.getElementById('btn-max').addEventListener('click', () => {
  const max = numbers.reduce((acc, n) => n > acc ? n : acc, numbers[0]);
  numResult.textContent = max;
  log('✅ Max value: ' + max);
});

// 2. Object Accumulation
const products = [
  { name: 'Laptop', price: 999, category: 'Electronics', status: 'available' },
  { name: 'Mouse', price: 25, category: 'Electronics', status: 'available' },
  { name: 'Desk', price: 350, category: 'Furniture', status: 'sold' },
  { name: 'Chair', price: 200, category: 'Furniture', status: 'available' }
];
const objOutput = document.getElementById('obj-output');

document.getElementById('btn-total-price').addEventListener('click', () => {
  const total = products.reduce((acc, p) => acc + p.price, 0);
  objOutput.textContent = 
    'products.reduce((acc, p) => acc + p.price, 0)\\n\\n' +
    products.map(p => '  ' + p.name + ': $' + p.price).join('\\n') +
    '\\n\\nTotal: $' + total.toLocaleString();
  log('✅ Total price: $' + total);
});

document.getElementById('btn-group-by').addEventListener('click', () => {
  const grouped = products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p.name);
    return acc;
  }, {});
  objOutput.textContent = 
    'Group by category:\\n\\n' +
    JSON.stringify(grouped, null, 2);
  log('✅ Grouped by category: ' + Object.keys(grouped).length + ' categories');
});

document.getElementById('btn-count').addEventListener('click', () => {
  const counts = products.reduce((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    return acc;
  }, {});
  objOutput.textContent = 
    'Count by status:\\n\\n' +
    JSON.stringify(counts, null, 2);
  log('✅ Status counts: ' + JSON.stringify(counts));
});

// 3. Advanced Reduce
document.getElementById('btn-flatten').addEventListener('click', () => {
  const nested = [[1, 2], [3, 4], [5, 6]];
  const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
  const advOutput = document.getElementById('advanced-output');
  advOutput.textContent = 
    'Nested: [[1, 2], [3, 4], [5, 6]]\\n\\n' +
    'nested.reduce((acc, arr) => acc.concat(arr), [])\\n\\n' +
    'Flattened: [' + flat.join(', ') + ']';
  log('✅ Flattened: [' + flat.join(', ') + ']');
});

document.getElementById('btn-pipeline').addEventListener('click', () => {
  const fns = [
    x => x + 10,
    x => x * 2,
    x => x - 5
  ];
  const result = fns.reduce((acc, fn) => fn(acc), 5);
  const advOutput = document.getElementById('advanced-output');
  advOutput.textContent = 
    'Pipeline: [x => x+10, x => x*2, x => x-5]\\n' +
    'Starting value: 5\\n\\n' +
    'Step 1: 5 + 10 = 15\\n' +
    'Step 2: 15 * 2 = 30\\n' +
    'Step 3: 30 - 5 = 25\\n\\n' +
    'Final result: ' + result;
  log('✅ Pipeline result: ' + result);
});

log('🚀 Array.reduce() module loaded!');`,
  },

    {
    topic: "forEach",
    description: "forEach() — iterate through each array element (no return)",
    html: `<div class="container">
  <h1>🔷 Array.forEach()</h1>
  <p class="subtitle">Iterate through each array element (no return)</p>

  <div class="section">
    <h2>1. Basic Iteration</h2>
    <button id="btn-log">Log Each Item</button>
    <button id="btn-sum">Calculate Sum</button>
    <button id="btn-modify">Modify External Array</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. DOM Manipulation</h2>
    <button id="btn-create-list">Create List Items</button>
    <button id="btn-style">Style Elements</button>
    <div id="list-container"></div>
  </div>

  <div class="section">
    <h2>3. forEach vs map</h2>
    <button id="btn-compare">Compare Both</button>
    <div id="compare-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
#list-container {
  margin-top: 1rem;
  min-height: 60px;
}
.list-item {
  background: #1a1a2e;
  color: #d1fae5;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 4px solid #8b5cf6;
  font-family: 'Courier New', monospace;
  transition: all 0.3s;
}
.list-item:hover {
  background: #2d1b69;
  transform: translateX(5px);
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Array.forEach()
const numbers = [10, 20, 30, 40, 50];
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Iteration
document.getElementById('btn-log').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  let result = 'Logging each item:\\n\\n';
  numbers.forEach((num, idx) => {
    result += 'Index ' + idx + ': ' + num + '\\n';
    log('Index ' + idx + ': ' + num);
  });
  output.textContent = result;
});

document.getElementById('btn-sum').addEventListener('click', () => {
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  const output = document.getElementById('basic-output');
  output.textContent = 
    'numbers.forEach(num => { sum += num })\\n\\n' +
    'Array: [' + numbers.join(', ') + ']\\n' +
    'Sum: ' + sum;
  log('✅ Sum calculated: ' + sum);
});

document.getElementById('btn-modify').addEventListener('click', () => {
  const doubled = [];
  numbers.forEach(num => {
    doubled.push(num * 2);
  });
  const output = document.getElementById('basic-output');
  output.textContent = 
    'const doubled = []\\n' +
    'numbers.forEach(num => doubled.push(num * 2))\\n\\n' +
    'Original: [' + numbers.join(', ') + ']\\n' +
    'Doubled:  [' + doubled.join(', ') + ']';
  log('✅ External array modified: [' + doubled.join(', ') + ']');
});

// 2. DOM Manipulation
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

document.getElementById('btn-create-list').addEventListener('click', () => {
  const container = document.getElementById('list-container');
  container.innerHTML = '';
  fruits.forEach((fruit, idx) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.textContent = (idx + 1) + '. ' + fruit;
    container.appendChild(item);
  });
  log('✅ Created ' + fruits.length + ' list items');
});

document.getElementById('btn-style').addEventListener('click', () => {
  const items = document.querySelectorAll('.list-item');
  const colors = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];
  items.forEach((item, idx) => {
    item.style.borderLeftColor = colors[idx % colors.length];
    item.style.background = colors[idx % colors.length] + '20';
  });
  log('✅ Styled ' + items.length + ' items');
});

// 3. forEach vs map
document.getElementById('btn-compare').addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5];
  
  // forEach - no return value
  const forEachResult = arr.forEach(n => n * 2);
  
  // map - returns new array
  const mapResult = arr.map(n => n * 2);
  
  const output = document.getElementById('compare-output');
  output.textContent = 
    'Array: [' + arr.join(', ') + ']\\n\\n' +
    'forEach(n => n * 2):\\n' +
    '  Returns: ' + forEachResult + ' (undefined!)\\n\\n' +
    'map(n => n * 2):\\n' +
    '  Returns: [' + mapResult.join(', ') + ']\\n\\n' +
    '💡 Use forEach for side effects\\n' +
    '💡 Use map when you need a new array';
  log('✅ Comparison complete - forEach: undefined, map: [' + mapResult.join(', ') + ']');
});

log('🚀 Array.forEach() module loaded!');`,
  },

  {
    topic: "find",
    description: "find() — return the first element that passes a test",
    html: `<div class="container">
  <h1>🔷 Array.find()</h1>
  <p class="subtitle">Return the first element that passes a test</p>

  <div class="section">
    <h2>1. Find in Numbers</h2>
    <div class="btn-group">
      <button id="btn-first-even">First Even</button>
      <button id="btn-greater">First > 50</button>
      <button id="btn-not-found">Not Found</button>
    </div>
    <div class="data-display">
      <div class="data-label">Array: <span id="original-nums">[15, 23, 42, 8, 67, 91, 34]</span></div>
      <div class="data-label">Found: <span id="num-result" class="highlight"></span></div>
    </div>
  </div>

  <div class="section">
    <h2>2. Find in Objects</h2>
    <button id="btn-find-id">Find by ID</button>
    <button id="btn-find-name">Find by Name</button>
    <button id="btn-find-condition">Find Active Admin</button>
    <div id="obj-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. find() vs findIndex()</h2>
    <button id="btn-compare">Compare Both</button>
    <div id="compare-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.data-display {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
.data-label {
  color: #9ca3af;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.75rem;
}
.data-label span {
  color: #d1fae5;
}
.highlight {
  color: #fbbf24 !important;
  font-weight: 700;
  font-size: 1.3rem;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Array.find()
const numbers = [15, 23, 42, 8, 67, 91, 34];
const numResult = document.getElementById('num-result');
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Find in Numbers
document.getElementById('btn-first-even').addEventListener('click', () => {
  const found = numbers.find(n => n % 2 === 0);
  numResult.textContent = found;
  log('✅ First even number: ' + found);
});

document.getElementById('btn-greater').addEventListener('click', () => {
  const found = numbers.find(n => n > 50);
  numResult.textContent = found;
  log('✅ First number > 50: ' + found);
});

document.getElementById('btn-not-found').addEventListener('click', () => {
  const found = numbers.find(n => n > 100);
  numResult.textContent = found === undefined ? 'undefined' : found;
  log('⚠️ Not found (returns undefined): ' + found);
});

// 2. Find in Objects
const users = [
  { id: 101, name: 'Alice', role: 'user', active: true },
  { id: 102, name: 'Bob', role: 'admin', active: false },
  { id: 103, name: 'Carol', role: 'admin', active: true },
  { id: 104, name: 'Dan', role: 'user', active: true }
];
const objOutput = document.getElementById('obj-output');

document.getElementById('btn-find-id').addEventListener('click', () => {
  const found = users.find(u => u.id === 103);
  objOutput.textContent = 
    'users.find(u => u.id === 103)\\n\\n' +
    'Found: ' + JSON.stringify(found, null, 2);
  log('✅ Found user by ID: ' + found.name);
});

document.getElementById('btn-find-name').addEventListener('click', () => {
  const found = users.find(u => u.name === 'Bob');
  objOutput.textContent = 
    'users.find(u => u.name === "Bob")\\n\\n' +
    'Found: ' + JSON.stringify(found, null, 2);
  log('✅ Found user by name: ' + found.name);
});

document.getElementById('btn-find-condition').addEventListener('click', () => {
  const found = users.find(u => u.role === 'admin' && u.active);
  objOutput.textContent = 
    'users.find(u => u.role === "admin" && u.active)\\n\\n' +
    'Found: ' + JSON.stringify(found, null, 2);
  log('✅ Found active admin: ' + found.name);
});

// 3. find() vs findIndex()
document.getElementById('btn-compare').addEventListener('click', () => {
  const arr = [10, 20, 30, 40, 50];
  const findResult = arr.find(n => n > 25);
  const findIndexResult = arr.findIndex(n => n > 25);
  
  const output = document.getElementById('compare-output');
  output.textContent = 
    'Array: [' + arr.join(', ') + ']\\n' +
    'Condition: n > 25\\n\\n' +
    'find(n => n > 25):\\n' +
    '  Returns: ' + findResult + ' (the element)\\n\\n' +
    'findIndex(n => n > 25):\\n' +
    '  Returns: ' + findIndexResult + ' (the index)\\n\\n' +
    '💡 find() returns the element\\n' +
    '💡 findIndex() returns the position';
  log('✅ find: ' + findResult + ', findIndex: ' + findIndexResult);
});

log('🚀 Array.find() module loaded!');`,
  },

  {
    topic: "some",
    description: "some() — check if at least one element passes a test",
    html: `<div class="container">
  <h1>🔷 Array.some()</h1>
  <p class="subtitle">Check if at least one element passes a test</p>

  <div class="section">
    <h2>1. Number Tests</h2>
    <div class="btn-group">
      <button id="btn-has-even">Has Even?</button>
      <button id="btn-has-negative">Has Negative?</button>
      <button id="btn-has-large">Has > 100?</button>
    </div>
    <div class="data-display">
      <div class="data-label">Array: <span id="original-nums">[5, 12, 8, 23, 45]</span></div>
      <div class="data-label">Result: <span id="num-result" class="highlight"></span></div>
    </div>
  </div>

  <div class="section">
    <h2>2. Object Tests</h2>
    <button id="btn-has-admin">Has Admin?</button>
    <button id="btn-has-inactive">Has Inactive?</button>
    <button id="btn-has-young">Has Age < 20?</button>
    <div id="obj-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. some() vs every()</h2>
    <button id="btn-compare">Compare Both</button>
    <div id="compare-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.data-display {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
.data-label {
  color: #9ca3af;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.75rem;
}
.data-label span {
  color: #d1fae5;
}
.highlight {
  color: #fbbf24 !important;
  font-weight: 700;
  font-size: 1.5rem;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Array.some()
const numbers = [5, 12, 8, 23, 45];
const numResult = document.getElementById('num-result');
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Number Tests
document.getElementById('btn-has-even').addEventListener('click', () => {
  const hasEven = numbers.some(n => n % 2 === 0);
  numResult.textContent = hasEven ? '✅ true' : '❌ false';
  log('✅ Has even number: ' + hasEven);
});

document.getElementById('btn-has-negative').addEventListener('click', () => {
  const hasNegative = numbers.some(n => n < 0);
  numResult.textContent = hasNegative ? '✅ true' : '❌ false';
  log('✅ Has negative number: ' + hasNegative);
});

document.getElementById('btn-has-large').addEventListener('click', () => {
  const hasLarge = numbers.some(n => n > 100);
  numResult.textContent = hasLarge ? '✅ true' : '❌ false';
  log('✅ Has number > 100: ' + hasLarge);
});

// 2. Object Tests
const users = [
  { id: 1, name: 'Alice', role: 'user', active: true, age: 25 },
  { id: 2, name: 'Bob', role: 'user', active: false, age: 30 },
  { id: 3, name: 'Carol', role: 'moderator', active: true, age: 22 }
];
const objOutput = document.getElementById('obj-output');

document.getElementById('btn-has-admin').addEventListener('click', () => {
  const hasAdmin = users.some(u => u.role === 'admin');
  objOutput.textContent = 
    'users.some(u => u.role === "admin")\\n\\n' +
    'Result: ' + hasAdmin + '\\n\\n' +
    'Roles in array: ' + users.map(u => u.role).join(', ');
  log('✅ Has admin: ' + hasAdmin);
});

document.getElementById('btn-has-inactive').addEventListener('click', () => {
  const hasInactive = users.some(u => !u.active);
  objOutput.textContent = 
    'users.some(u => !u.active)\\n\\n' +
    'Result: ' + hasInactive + '\\n\\n' +
    'Found: ' + users.filter(u => !u.active).map(u => u.name).join(', ');
  log('✅ Has inactive user: ' + hasInactive);
});

document.getElementById('btn-has-young').addEventListener('click', () => {
  const hasYoung = users.some(u => u.age < 20);
  objOutput.textContent = 
    'users.some(u => u.age < 20)\\n\\n' +
    'Result: ' + hasYoung + '\\n\\n' +
    'Ages: ' + users.map(u => u.age).join(', ');
  log('✅ Has user < 20: ' + hasYoung);
});

// 3. some() vs every()
document.getElementById('btn-compare').addEventListener('click', () => {
  const arr = [2, 4, 6, 8, 10];
  const someEven = arr.some(n => n % 2 === 0);
  const everyEven = arr.every(n => n % 2 === 0);
  
  const arr2 = [2, 4, 5, 8, 10];
  const someEven2 = arr2.some(n => n % 2 === 0);
  const everyEven2 = arr2.every(n => n % 2 === 0);
  
  const output = document.getElementById('compare-output');
  output.textContent = 
    'Array 1: [' + arr.join(', ') + ']\\n' +
    '  some(n => n % 2 === 0): ' + someEven + '\\n' +
    '  every(n => n % 2 === 0): ' + everyEven + '\\n\\n' +
    'Array 2: [' + arr2.join(', ') + ']\\n' +
    '  some(n => n % 2 === 0): ' + someEven2 + '\\n' +
    '  every(n => n % 2 === 0): ' + everyEven2 + '\\n\\n' +
    '💡 some() = at least one\\n' +
    '💡 every() = all elements';
  log('✅ Comparison complete');
});

log('🚀 Array.some() module loaded!');`,
  },

  {
    topic: "every",
    description: "every() — check if all elements pass a test",
    html: `<div class="container">
  <h1>🔷 Array.every()</h1>
  <p class="subtitle">Check if all elements pass a test</p>

  <div class="section">
    <h2>1. Number Validation</h2>
    <div class="btn-group">
      <button id="btn-all-positive">All Positive?</button>
      <button id="btn-all-even">All Even?</button>
      <button id="btn-all-range">All in Range?</button>
    </div>
    <div class="data-display">
      <div class="data-label">Array: <span id="original-nums">[2, 4, 6, 8, 10]</span></div>
      <div class="data-label">Result: <span id="num-result" class="highlight"></span></div>
    </div>
  </div>

  <div class="section">
    <h2>2. Object Validation</h2>
    <button id="btn-all-active">All Active?</button>
    <button id="btn-all-adults">All Adults?</button>
    <button id="btn-all-verified">All Verified?</button>
    <div id="obj-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Form Validation Example</h2>
    <button id="btn-validate">Validate Form</button>
    <div id="form-output" class="output-box"></div>
  </div>
    <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.data-display {
  background: #1a1a2e;
  border-radius: 10px;
  padding: 1rem 1.25rem;
}
.data-label {
  color: #9ca3af;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  margin-bottom: 0.75rem;
}
.data-label span {
  color: #d1fae5;
}
.highlight {
  color: #fbbf24 !important;
  font-weight: 700;
  font-size: 1.5rem;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Array.every()
const numbers = [2, 4, 6, 8, 10];
const numResult = document.getElementById('num-result');
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Number Validation
document.getElementById('btn-all-positive').addEventListener('click', () => {
  const allPositive = numbers.every(n => n > 0);
  numResult.textContent = allPositive ? '✅ true' : '❌ false';
  log('✅ All positive: ' + allPositive);
});

document.getElementById('btn-all-even').addEventListener('click', () => {
  const allEven = numbers.every(n => n % 2 === 0);
  numResult.textContent = allEven ? '✅ true' : '❌ false';
  log('✅ All even: ' + allEven);
});

document.getElementById('btn-all-range').addEventListener('click', () => {
  const allInRange = numbers.every(n => n >= 1 && n <= 10);
  numResult.textContent = allInRange ? '✅ true' : '❌ false';
  log('✅ All in range 1-10: ' + allInRange);
});

// 2. Object Validation
const users = [
  { id: 1, name: 'Alice', active: true, age: 25, verified: true },
  { id: 2, name: 'Bob', active: true, age: 30, verified: true },
  { id: 3, name: 'Carol', active: true, age: 22, verified: false }
];
const objOutput = document.getElementById('obj-output');

document.getElementById('btn-all-active').addEventListener('click', () => {
  const allActive = users.every(u => u.active);
  objOutput.textContent = 
    'users.every(u => u.active)\\n\\n' +
    'Result: ' + allActive + '\\n\\n' +
    'Status: ' + users.map(u => u.name + ': ' + u.active).join('\\n        ');
  log('✅ All active: ' + allActive);
});

document.getElementById('btn-all-adults').addEventListener('click', () => {
  const allAdults = users.every(u => u.age >= 18);
  objOutput.textContent = 
    'users.every(u => u.age >= 18)\\n\\n' +
    'Result: ' + allAdults + '\\n\\n' +
    'Ages: ' + users.map(u => u.name + ': ' + u.age).join(', ');
  log('✅ All adults (18+): ' + allAdults);
});

document.getElementById('btn-all-verified').addEventListener('click', () => {
  const allVerified = users.every(u => u.verified);
  objOutput.textContent = 
    'users.every(u => u.verified)\\n\\n' +
    'Result: ' + allVerified + '\\n\\n' +
    'Verified: ' + users.map(u => u.name + ': ' + u.verified).join('\\n          ');
  log('✅ All verified: ' + allVerified);
});

// 3. Form Validation Example
document.getElementById('btn-validate').addEventListener('click', () => {
  const formFields = [
    { name: 'username', value: 'john_doe', required: true },
    { name: 'email', value: 'john@example.com', required: true },
    { name: 'age', value: '25', required: true },
    { name: 'bio', value: '', required: false }
  ];
  
  const allRequiredFilled = formFields.every(field => 
    !field.required || (field.required && field.value.trim() !== '')
  );
  
  const output = document.getElementById('form-output');
  output.textContent = 
    'Form Validation:\\n\\n' +
    formFields.map(f => 
      '  ' + f.name + ': "' + f.value + '" ' + 
      (f.required ? '(required)' : '(optional)')
    ).join('\\n') +
    '\\n\\nAll required fields filled: ' + allRequiredFilled +
    '\\n\\n' + (allRequiredFilled ? '✅ Form is valid!' : '❌ Form is invalid!');
  log('✅ Form validation: ' + (allRequiredFilled ? 'VALID' : 'INVALID'));
});

log('🚀 Array.every() module loaded!');`,
  },


  /* ══════════════════════════════════════════════
     BATCH 3: FUNCTIONS INTERMEDIATE (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "callback-functions",
    description: "Callback functions — passing functions as arguments to other functions",
    html: `<div class="container">
  <h1>🔷 Callback Functions</h1>
  <p class="subtitle">Passing functions as arguments to other functions</p>

  <div class="section">
    <h2>1. Basic Callbacks</h2>
    <div class="btn-group">
      <button id="btn-greet">Greet Callback</button>
      <button id="btn-math">Math Operation</button>
      <button id="btn-process">Process Array</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Async Callbacks (setTimeout)</h2>
    <button id="btn-delayed">Delayed Message</button>
    <button id="btn-countdown">Countdown</button>
    <div id="async-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Event Callbacks</h2>
    <button id="btn-click-me">Click Me!</button>
    <input type="text" id="input-field" placeholder="Type something..." />
    <div id="event-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Custom Callback Example</h2>
    <button id="btn-custom">Fetch User Data</button>
    <div id="custom-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
input[type="text"] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  background: #f9fafb;
}
input[type="text"]:focus {
  outline: none;
  border-color: #7c3aed;
  background: white;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Callback Functions
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Callbacks
function greet(name, callback) {
  const message = 'Hello, ' + name + '!';
  callback(message);
}

function calculate(a, b, operation) {
  return operation(a, b);
}

function processArray(arr, callback) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(callback(arr[i], i));
  }
  return results;
}

document.getElementById('btn-greet').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  greet('Alice', function(msg) {
    output.textContent = 'greet("Alice", callback)\\n\\nCallback received: "' + msg + '"';
    log('✅ Greet callback executed: ' + msg);
  });
});

document.getElementById('btn-math').addEventListener('click', () => {
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;
  
  const sum = calculate(5, 3, add);
  const product = calculate(5, 3, multiply);
  
  const output = document.getElementById('basic-output');
  output.textContent = 
    'calculate(5, 3, add)      = ' + sum + '\\n' +
    'calculate(5, 3, multiply) = ' + product + '\\n\\n' +
    'Callbacks allow flexible operations!';
  log('✅ Math operations: sum=' + sum + ', product=' + product);
});

document.getElementById('btn-process').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = processArray(numbers, (n) => n * 2);
  const squared = processArray(numbers, (n) => n * n);
  
  const output = document.getElementById('basic-output');
  output.textContent = 
    'Original: [' + numbers.join(', ') + ']\\n\\n' +
    'processArray(arr, n => n * 2):\\n[' + doubled.join(', ') + ']\\n\\n' +
    'processArray(arr, n => n * n):\\n[' + squared.join(', ') + ']';
  log('✅ Array processed with callbacks');
});

// 2. Async Callbacks
document.getElementById('btn-delayed').addEventListener('click', () => {
  const output = document.getElementById('async-output');
  output.textContent = 'Waiting 2 seconds...';
  
  setTimeout(function() {
    output.textContent = '✅ Callback executed after 2 seconds!\\n\\nsetTimeout(() => { ... }, 2000)';
    log('✅ Delayed callback executed');
  }, 2000);
  
  log('⏳ Delayed callback scheduled for 2s');
});

document.getElementById('btn-countdown').addEventListener('click', () => {
  const output = document.getElementById('async-output');
  let count = 5;
  
  output.textContent = 'Countdown: ' + count;
  log('⏳ Countdown started from ' + count);
  
  const interval = setInterval(function() {
    count--;
    if (count > 0) {
      output.textContent = 'Countdown: ' + count;
      log('⏳ Count: ' + count);
    } else {
      output.textContent = '🚀 Liftoff!';
      log('🚀 Countdown complete!');
      clearInterval(interval);
    }
  }, 1000);
});

// 3. Event Callbacks
let clickCount = 0;
document.getElementById('btn-click-me').addEventListener('click', function() {
  clickCount++;
  const output = document.getElementById('event-output');
  output.textContent = 
    'Button clicked ' + clickCount + ' time(s)!\\n\\n' +
    'addEventListener("click", callback)';
  log('🖱️ Button clicked: ' + clickCount + ' times');
});

document.getElementById('input-field').addEventListener('input', function(e) {
  const output = document.getElementById('event-output');
  output.textContent = 
    'You typed: "' + e.target.value + '"\\n\\n' +
    'Length: ' + e.target.value.length + ' characters\\n\\n' +
    'addEventListener("input", callback)';
  log('⌨️ Input: ' + e.target.value);
});

// 4. Custom Callback Example
function fetchUserData(userId, onSuccess, onError) {
  log('📡 Fetching user data for ID: ' + userId);
  
  setTimeout(function() {
    if (userId > 0) {
      const userData = {
        id: userId,
        name: 'User ' + userId,
        email: 'user' + userId + '@example.com',
        role: 'member'
      };
      onSuccess(userData);
    } else {
      onError('Invalid user ID');
    }
  }, 1500);
}

document.getElementById('btn-custom').addEventListener('click', () => {
  const output = document.getElementById('custom-output');
  output.textContent = '📡 Fetching user data...';
  
  fetchUserData(
    42,
    function(data) {
      output.textContent = 
        '✅ Success Callback:\\n\\n' +
        JSON.stringify(data, null, 2);
      log('✅ User data received: ' + data.name);
    },
    function(error) {
      output.textContent = '❌ Error Callback:\\n\\n' + error;
      log('❌ Error: ' + error);
    }
  );
});

log('🚀 Callback Functions module loaded!');`,
  },

  {
    topic: "higher-order-functions",
    description: "Higher-order functions — functions that accept or return other functions",
    html: `<div class="container">
  <h1>🔷 Higher-Order Functions</h1>
  <p class="subtitle">Functions that accept or return other functions</p>

  <div class="section">
    <h2>1. Functions Accepting Functions</h2>
    <div class="btn-group">
      <button id="btn-repeat">Repeat Action</button>
      <button id="btn-filter-custom">Custom Filter</button>
      <button id="btn-transform">Transform Data</button>
    </div>
    <div id="accept-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Functions Returning Functions</h2>
    <button id="btn-multiplier">Create Multiplier</button>
    <button id="btn-greeter">Create Greeter</button>
    <button id="btn-validator">Create Validator</button>
    <div id="return-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Function Composition</h2>
    <button id="btn-compose">Compose Functions</button>
    <button id="btn-pipe">Pipe Functions</button>
    <div id="compose-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Practical Example: Logger</h2>
    <button id="btn-logger">Create Logger</button>
    <div id="logger-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Higher-Order Functions
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Functions Accepting Functions
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function filterArray(arr, predicate) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function transform(data, transformer) {
  return transformer(data);
}

document.getElementById('btn-repeat').addEventListener('click', () => {
  const output = document.getElementById('accept-output');
  let result = 'repeat(5, action):\\n\\n';
  repeat(5, function(i) {
    result += 'Action ' + (i + 1) + ' executed\\n';
    log('🔄 Action ' + (i + 1) + ' executed');
  });
  output.textContent = result;
});

document.getElementById('btn-filter-custom').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evens = filterArray(numbers, n => n % 2 === 0);
  const greaterThan5 = filterArray(numbers, n => n > 5);
  
  const output = document.getElementById('accept-output');
  output.textContent = 
    'Original: [' + numbers.join(', ') + ']\\n\\n' +
    'filterArray(arr, n => n % 2 === 0):\\n[' + evens.join(', ') + ']\\n\\n' +
    'filterArray(arr, n => n > 5):\\n[' + greaterThan5.join(', ') + ']';
  log('✅ Custom filter applied');
});

document.getElementById('btn-transform').addEventListener('click', () => {
  const data = { name: 'Alice', age: 25 };
  const toJSON = d => JSON.stringify(d);
  const toUpperName = d => ({ ...d, name: d.name.toUpperCase() });
  
  const json = transform(data, toJSON);
  const upper = transform(data, toUpperName);
  
  const output = document.getElementById('accept-output');
  output.textContent = 
    'Original: ' + JSON.stringify(data) + '\\n\\n' +
    'transform(data, toJSON):\\n' + json + '\\n\\n' +
    'transform(data, toUpperName):\\n' + JSON.stringify(upper);
  log('✅ Data transformed');
});

// 2. Functions Returning Functions
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

function createGreeter(greeting) {
  return function(name) {
    return greeting + ', ' + name + '!';
  };
}

function createValidator(min, max) {
  return function(value) {
    return value >= min && value <= max;
  };
}

document.getElementById('btn-multiplier').addEventListener('click', () => {
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  const times10 = createMultiplier(10);
  
  const output = document.getElementById('return-output');
  output.textContent = 
    'const double = createMultiplier(2)\\n' +
    'const triple = createMultiplier(3)\\n\\n' +
    'double(5)  = ' + double(5) + '\\n' +
    'triple(5)  = ' + triple(5) + '\\n' +
    'times10(5) = ' + times10(5);
  log('✅ Multiplier functions created');
});

document.getElementById('btn-greeter').addEventListener('click', () => {
  const sayHello = createGreeter('Hello');
  const sayHi = createGreeter('Hi');
  const sayHey = createGreeter('Hey');
  
  const output = document.getElementById('return-output');
  output.textContent = 
    'const sayHello = createGreeter("Hello")\\n\\n' +
    'sayHello("Alice") = "' + sayHello('Alice') + '"\\n' +
    'sayHi("Bob")      = "' + sayHi('Bob') + '"\\n' +
    'sayHey("Carol")   = "' + sayHey('Carol') + '"';
  log('✅ Greeter functions created');
});

document.getElementById('btn-validator').addEventListener('click', () => {
  const isValidAge = createValidator(18, 65);
  const isValidScore = createValidator(0, 100);
  
  const output = document.getElementById('return-output');
  output.textContent = 
    'const isValidAge = createValidator(18, 65)\\n\\n' +
    'isValidAge(25)  = ' + isValidAge(25) + '\\n' +
    'isValidAge(70)  = ' + isValidAge(70) + '\\n\\n' +
    'const isValidScore = createValidator(0, 100)\\n\\n' +
    'isValidScore(85)  = ' + isValidScore(85) + '\\n' +
    'isValidScore(150) = ' + isValidScore(150);
  log('✅ Validator functions created');
});

// 3. Function Composition
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function pipe(...fns) {
  return function(x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

document.getElementById('btn-compose').addEventListener('click', () => {
  const add5 = x => x + 5;
  const multiply3 = x => x * 3;
  const subtract2 = x => x - 2;
  
  const composed = compose(subtract2, multiply3, add5);
  const result = composed(10);
  
  const output = document.getElementById('compose-output');
  output.textContent = 
    'compose(subtract2, multiply3, add5)\\n\\n' +
    'Starting value: 10\\n' +
    'Step 1: 10 + 5 = 15\\n' +
    'Step 2: 15 * 3 = 45\\n' +
    'Step 3: 45 - 2 = 43\\n\\n' +
    'Result: ' + result;
  log('✅ Composed result: ' + result);
});

document.getElementById('btn-pipe').addEventListener('click', () => {
  const add5 = x => x + 5;
  const multiply3 = x => x * 3;
  const subtract2 = x => x - 2;
  
  const piped = pipe(add5, multiply3, subtract2);
  const result = piped(10);
  
  const output = document.getElementById('compose-output');
  output.textContent = 
    'pipe(add5, multiply3, subtract2)\\n\\n' +
    'Starting value: 10\\n' +
    'Step 1: 10 + 5 = 15\\n' +
    'Step 2: 15 * 3 = 45\\n' +
    'Step 3: 45 - 2 = 43\\n\\n' +
    'Result: ' + result;
  log('✅ Piped result: ' + result);
});

// 4. Practical Example: Logger
function createLogger(prefix) {
  return function(message) {
    const timestamp = new Date().toLocaleTimeString();
    return '[' + timestamp + '] [' + prefix + '] ' + message;
  };
}

document.getElementById('btn-logger').addEventListener('click', () => {
  const infoLog = createLogger('INFO');
  const errorLog = createLogger('ERROR');
  const debugLog = createLogger('DEBUG');
  
  const output = document.getElementById('logger-output');
  output.textContent = 
    infoLog('Application started') + '\\n' +
    debugLog('Processing data...') + '\\n' +
    errorLog('Connection failed') + '\\n' +
    infoLog('Retrying...');
  
  log('✅ Logger functions created and used');
});

log('🚀 Higher-Order Functions module loaded!');`,
  },

  {
    topic: "closures",
    description: "Closures — functions that remember variables from their enclosing scope",
    html: `<div class="container">
  <h1>🔷 Closures</h1>
  <p class="subtitle">Functions that remember variables from their enclosing scope</p>

  <div class="section">
    <h2>1. Basic Closure</h2>
    <button id="btn-counter">Create Counter</button>
    <div class="counter-controls">
      <button id="btn-increment">Increment</button>
      <button id="btn-decrement">Decrement</button>
      <button id="btn-get-value">Get Value</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Private Variables</h2>
    <button id="btn-bank">Create Bank Account</button>
    <div class="bank-controls">
      <button id="btn-deposit">Deposit $50</button>
      <button id="btn-withdraw">Withdraw $30</button>
      <button id="btn-balance">Check Balance</button>
    </div>
    <div id="private-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Function Factory</h2>
    <button id="btn-factory">Create Calculators</button>
    <div id="factory-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Loop Closure Problem</h2>
    <button id="btn-problem">Show Problem</button>
    <button id="btn-solution">Show Solution</button>
    <div id="loop-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.counter-controls,
.bank-controls {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  margin-top: 1rem;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Closures
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Closure - Counter
let counter = null;

function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

document.getElementById('btn-counter').addEventListener('click', () => {
  counter = createCounter();
  const output = document.getElementById('basic-output');
  output.textContent = 
    '✅ Counter created!\\n\\n' +
    'The "count" variable is private.\\n' +
    'Only accessible through methods.\\n\\n' +
    'Try the buttons below!';
  log('✅ Counter created with closure');
});

document.getElementById('btn-increment').addEventListener('click', () => {
  if (!counter) {
    alert('Create counter first!');
    return;
  }
  const value = counter.increment();
  const output = document.getElementById('basic-output');
  output.textContent = '➕ Incremented!\\n\\nCurrent value: ' + value;
  log('➕ Counter incremented to: ' + value);
});

document.getElementById('btn-decrement').addEventListener('click', () => {
  if (!counter) {
    alert('Create counter first!');
    return;
  }
  const value = counter.decrement();
  const output = document.getElementById('basic-output');
  output.textContent = '➖ Decremented!\\n\\nCurrent value: ' + value;
  log('➖ Counter decremented to: ' + value);
});

document.getElementById('btn-get-value').addEventListener('click', () => {
  if (!counter) {
    alert('Create counter first!');
    return;
  }
  const value = counter.getValue();
  const output = document.getElementById('basic-output');
  output.textContent = '📊 Current value: ' + value;
  log('📊 Counter value: ' + value);
});

// 2. Private Variables - Bank Account
let account = null;

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        return 'Deposited $' + amount + '. New balance: $' + balance;
      }
      return 'Invalid amount';
    },
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return 'Withdrew $' + amount + '. New balance: $' + balance;
      }
      return 'Insufficient funds or invalid amount';
    },
    getBalance: function() {
      return balance;
    }
  };
}

document.getElementById('btn-bank').addEventListener('click', () => {
  account = createBankAccount(100);
  const output = document.getElementById('private-output');
  output.textContent = 
    '✅ Bank account created!\\n\\n' +
    'Initial balance: $100\\n\\n' +
    'The balance is private and secure.\\n' +
    'Cannot be accessed directly!';
  log('✅ Bank account created with $100');
});

document.getElementById('btn-deposit').addEventListener('click', () => {
  if (!account) {
    alert('Create bank account first!');
    return;
  }
  const result = account.deposit(50);
  const output = document.getElementById('private-output');
  output.textContent = '💰 ' + result;
  log('💰 Deposited $50');
});

document.getElementById('btn-withdraw').addEventListener('click', () => {
  if (!account) {
    alert('Create bank account first!');
    return;
  }
  const result = account.withdraw(30);
  const output = document.getElementById('private-output');
  output.textContent = '💸 ' + result;
  log('💸 Withdrew $30');
});

document.getElementById('btn-balance').addEventListener('click', () => {
  if (!account) {
    alert('Create bank account first!');
    return;
  }
  const balance = account.getBalance();
  const output = document.getElementById('private-output');
  output.textContent = '💵 Current balance: $' + balance;
  log('💵 Balance checked: $' + balance);
});

// 3. Function Factory
function createCalculator(operation) {
  return function(a, b) {
    switch(operation) {
      case 'add': return a + b;
      case 'subtract': return a - b;
      case 'multiply': return a * b;
      case 'divide': return b !== 0 ? a / b : 'Cannot divide by zero';
      default: return 'Unknown operation';
    }
  };
}

document.getElementById('btn-factory').addEventListener('click', () => {
  const add = createCalculator('add');
  const subtract = createCalculator('subtract');
  const multiply = createCalculator('multiply');
  const divide = createCalculator('divide');
  
  const output = document.getElementById('factory-output');
  output.textContent = 
    'Created 4 calculator functions:\\n\\n' +
    'add(10, 5)      = ' + add(10, 5) + '\\n' +
    'subtract(10, 5) = ' + subtract(10, 5) + '\\n' +
    'multiply(10, 5) = ' + multiply(10, 5) + '\\n' +
    'divide(10, 5)   = ' + divide(10, 5) + '\\n\\n' +
    'Each function remembers its operation!';
  log('✅ Calculator functions created via closure');
});

// 4. Loop Closure Problem
document.getElementById('btn-problem').addEventListener('click', () => {
  const output = document.getElementById('loop-output');
  let result = '❌ PROBLEM (using var):\\n\\n';
  
  const functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(function() {
      return 'Value: ' + i;
    });
  }
  
  result += 'Expected: 0, 1, 2\\n';
  result += 'Actual:   ';
  functions.forEach(fn => {
    result += fn().split(': ')[1] + ', ';
  });
  result = result.slice(0, -2);
  result += '\\n\\nAll functions reference the same "i"!';
  
  output.textContent = result;
  log('❌ Loop closure problem demonstrated');
});

document.getElementById('btn-solution').addEventListener('click', () => {
  const output = document.getElementById('loop-output');
  let result = '✅ SOLUTION (using let):\\n\\n';
  
  const functions = [];
  for (let i = 0; i < 3; i++) {
    functions.push(function() {
      return 'Value: ' + i;
    });
  }
  
  result += 'Expected: 0, 1, 2\\n';
  result += 'Actual:   ';
  functions.forEach(fn => {
    result += fn().split(': ')[1] + ', ';
  });
  result = result.slice(0, -2);
  result += '\\n\\nEach function has its own "i"!\\n\\n';
  result += '💡 Use "let" for block scope';
  
  output.textContent = result;
  log('✅ Loop closure solution with let');
});

log('🚀 Closures module loaded!');`,
  },

  {
    topic: "default-parameters",
    description: "Default parameters — set fallback values for function arguments",
    html: `<div class="container">
  <h1>🔷 Default Parameters</h1>
  <p class="subtitle">Set fallback values for function arguments</p>

  <div class="section">
    <h2>1. Basic Default Parameters</h2>
    <div class="btn-group">
      <button id="btn-greet-default">Greet (no name)</button>
      <button id="btn-greet-custom">Greet (with name)</button>
      <button id="btn-calculate">Calculate Area</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multiple Defaults</h2>
    <button id="btn-user-full">Create User (all params)</button>
    <button id="btn-user-partial">Create User (partial)</button>
    <button id="btn-user-none">Create User (no params)</button>
    <div id="multiple-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Expression as Default</h2>
    <button id="btn-timestamp">Add Timestamp</button>
    <button id="btn-random">Generate ID</button>
    <button id="btn-computed">Computed Default</button>
    <div id="expression-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Destructuring with Defaults</h2>
    <button id="btn-config">Configure App</button>
    <div id="destructure-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Default Parameters
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Default Parameters
function greet(name = 'Guest') {
  return 'Hello, ' + name + '!';
}

function calculateArea(width = 10, height = 5) {
  return width * height;
}

document.getElementById('btn-greet-default').addEventListener('click', () => {
  const result = greet();
  const output = document.getElementById('basic-output');
  output.textContent = 
    'greet()  // no argument\\n\\n' +
    'Result: "' + result + '"\\n\\n' +
    'Default parameter "Guest" was used!';
  log('✅ Greet with default: ' + result);
});

document.getElementById('btn-greet-custom').addEventListener('click', () => {
  const result = greet('Alice');
  const output = document.getElementById('basic-output');
  output.textContent = 
    'greet("Alice")\\n\\n' +
    'Result: "' + result + '"\\n\\n' +
    'Custom parameter was used!';
  log('✅ Greet with custom name: ' + result);
});

document.getElementById('btn-calculate').addEventListener('click', () => {
  const area1 = calculateArea();
  const area2 = calculateArea(20);
  const area3 = calculateArea(15, 8);
  
  const output = document.getElementById('basic-output');
  output.textContent = 
    'calculateArea()       = ' + area1 + ' (10 × 5)\\n' +
    'calculateArea(20)     = ' + area2 + ' (20 × 5)\\n' +
    'calculateArea(15, 8)  = ' + area3 + ' (15 × 8)\\n\\n' +
    'Defaults fill in missing arguments!';
  log('✅ Areas calculated: ' + area1 + ', ' + area2 + ', ' + area3);
});

// 2. Multiple Defaults
function createUser(name = 'Anonymous', age = 18, role = 'user', active = true) {
  return {
    name: name,
    age: age,
    role: role,
    active: active
  };
}

document.getElementById('btn-user-full').addEventListener('click', () => {
  const user = createUser('Alice', 25, 'admin', true);
  const output = document.getElementById('multiple-output');
  output.textContent = 
    'createUser("Alice", 25, "admin", true)\\n\\n' +
    JSON.stringify(user, null, 2) + '\\n\\n' +
    'All parameters provided!';
  log('✅ User created with all params: ' + user.name);
});

document.getElementById('btn-user-partial').addEventListener('click', () => {
  const user = createUser('Bob', 30);
  const output = document.getElementById('multiple-output');
  output.textContent = 
    'createUser("Bob", 30)\\n\\n' +
    JSON.stringify(user, null, 2) + '\\n\\n' +
    'role and active used defaults!';
  log('✅ User created with partial params: ' + user.name);
});

document.getElementById('btn-user-none').addEventListener('click', () => {
  const user = createUser();
  const output = document.getElementById('multiple-output');
  output.textContent = 
    'createUser()  // no arguments\\n\\n' +
    JSON.stringify(user, null, 2) + '\\n\\n' +
    'All defaults were used!';
  log('✅ User created with all defaults');
});

// 3. Expression as Default
function addTimestamp(message, time = new Date().toLocaleTimeString()) {
  return '[' + time + '] ' + message;
}

function generateId(prefix = 'ID', random = Math.floor(Math.random() * 10000)) {
  return prefix + '-' + random;
}

function computedDefault(value, multiplier = value * 2) {
  return 'Value: ' + value + ', Multiplier: ' + multiplier;
}

document.getElementById('btn-timestamp').addEventListener('click', () => {
  const msg1 = addTimestamp('Hello');
  const msg2 = addTimestamp('World', '12:00:00');
  
  const output = document.getElementById('expression-output');
  output.textContent = 
    'addTimestamp("Hello")\\n' + msg1 + '\\n\\n' +
    'addTimestamp("World", "12:00:00")\\n' + msg2 + '\\n\\n' +
    'Default executes new Date() each time!';
  log('✅ Timestamp added: ' + msg1);
});

document.getElementById('btn-random').addEventListener('click', () => {
  const id1 = generateId();
  const id2 = generateId('USER');
  const id3 = generateId('ORDER', 5000);
  
  const output = document.getElementById('expression-output');
  output.textContent = 
    'generateId()              = ' + id1 + '\\n' +
    'generateId("USER")        = ' + id2 + '\\n' +
    'generateId("ORDER", 5000) = ' + id3 + '\\n\\n' +
    'Random default generates new value each call!';
  log('✅ IDs generated: ' + id1 + ', ' + id2 + ', ' + id3);
});

document.getElementById('btn-computed').addEventListener('click', () => {
  const result1 = computedDefault(5);
  const result2 = computedDefault(5, 20);
  
  const output = document.getElementById('expression-output');
  output.textContent = 
    'computedDefault(5)\\n' + result1 + '\\n\\n' +
    'computedDefault(5, 20)\\n' + result2 + '\\n\\n' +
    'Default can reference other parameters!';
  log('✅ Computed defaults: ' + result1);
});

// 4. Destructuring with Defaults
function configureApp({ 
  theme = 'light', 
  language = 'en', 
  notifications = true,
  autoSave = false 
} = {}) {
  return {
    theme: theme,
    language: language,
    notifications: notifications,
    autoSave: autoSave
  };
}

document.getElementById('btn-config').addEventListener('click', () => {
  const config1 = configureApp();
  const config2 = configureApp({ theme: 'dark', autoSave: true });
  
  const output = document.getElementById('destructure-output');
  output.textContent = 
    'configureApp()\\n' +
    JSON.stringify(config1, null, 2) + '\\n\\n' +
    'configureApp({ theme: "dark", autoSave: true })\\n' +
    JSON.stringify(config2, null, 2) + '\\n\\n' +
    'Object destructuring with defaults!';
  log('✅ App configured with defaults');
});

log('🚀 Default Parameters module loaded!');`,
  },

  {
    topic: "rest-parameters",
    description: "Rest parameters (...args) — collect multiple arguments into an array",
    html: `<div class="container">
  <h1>🔷 Rest Parameters</h1>
  <p class="subtitle">Collect multiple arguments into an array with ...args</p>

  <div class="section">
    <h2>1. Basic Rest Parameters</h2>
    <div class="btn-group">
      <button id="btn-sum">Sum Numbers</button>
      <button id="btn-max">Find Maximum</button>
      <button id="btn-concat">Concatenate Strings</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Rest with Other Parameters</h2>
    <button id="btn-greet-all">Greet Multiple</button>
    <button id="btn-log-message">Log with Prefix</button>
    <button id="btn-calculate">Calculate with Operation</button>
    <div id="mixed-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Rest in Array Destructuring</h2>
    <button id="btn-first-rest">First and Rest</button>
    <button id="btn-skip">Skip Elements</button>
    <div id="destructure-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Practical Examples</h2>
    <button id="btn-average">Calculate Average</button>
    <button id="btn-filter-values">Filter Values</button>
    <div id="practical-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Rest Parameters
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

function findMax(...numbers) {
  return Math.max(...numbers);
}

function concatenate(...strings) {
  return strings.join(' ');
}

document.getElementById('btn-sum').addEventListener('click', () => {
  const result1 = sum(1, 2, 3);
  const result2 = sum(10, 20, 30, 40, 50);
  const result3 = sum(5);
  
  const output = document.getElementById('basic-output');
  output.textContent = 
    'sum(1, 2, 3)              = ' + result1 + '\\n' +
    'sum(10, 20, 30, 40, 50)   = ' + result2 + '\\n' +
    'sum(5)                    = ' + result3 + '\\n\\n' +
    'Rest parameter collects all arguments into array!';
  log('✅ Sum results: ' + result1 + ', ' + result2 + ', ' + result3);
});

document.getElementById('btn-max').addEventListener('click', () => {
  const result = findMax(5, 12, 8, 23, 15, 3);
  const output = document.getElementById('basic-output');
  output.textContent = 
    'findMax(5, 12, 8, 23, 15, 3)\\n\\n' +
    'Maximum value: ' + result + '\\n\\n' +
    'Can pass any number of arguments!';
  log('✅ Maximum found: ' + result);
});

document.getElementById('btn-concat').addEventListener('click', () => {
  const result = concatenate('Hello', 'from', 'rest', 'parameters!');
  const output = document.getElementById('basic-output');
  output.textContent = 
    'concatenate("Hello", "from", "rest", "parameters!")\\n\\n' +
    'Result: "' + result + '"\\n\\n' +
    'All strings collected and joined!';
  log('✅ Concatenated: ' + result);
});

// 2. Rest with Other Parameters
function greetAll(greeting, ...names) {
  return names.map(name => greeting + ', ' + name + '!').join('\\n');
}

function logMessage(prefix, ...messages) {
  return messages.map(msg => '[' + prefix + '] ' + msg).join('\\n');
}

function calculate(operation, ...numbers) {
  switch(operation) {
    case 'add': return numbers.reduce((a, b) => a + b, 0);
    case 'multiply': return numbers.reduce((a, b) => a * b, 1);
    case 'average': return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    default: return 'Unknown operation';
  }
}

document.getElementById('btn-greet-all').addEventListener('click', () => {
  const result = greetAll('Hello', 'Alice', 'Bob', 'Carol');
  const output = document.getElementById('mixed-output');
  output.textContent = 
    'greetAll("Hello", "Alice", "Bob", "Carol")\\n\\n' +
    result + '\\n\\n' +
    'First param is greeting, rest are names!';
  log('✅ Greeted multiple people');
});

document.getElementById('btn-log-message').addEventListener('click', () => {
  const result = logMessage('INFO', 'App started', 'Loading data', 'Ready');
  const output = document.getElementById('mixed-output');
  output.textContent = 
    'logMessage("INFO", "App started", "Loading data", "Ready")\\n\\n' +
    result + '\\n\\n' +
    'First param is prefix, rest are messages!';
  log('✅ Messages logged with prefix');
});

document.getElementById('btn-calculate').addEventListener('click', () => {
  const sum = calculate('add', 5, 10, 15, 20);
  const product = calculate('multiply', 2, 3, 4);
  const avg = calculate('average', 10, 20, 30, 40);
  
  const output = document.getElementById('mixed-output');
  output.textContent = 
    'calculate("add", 5, 10, 15, 20)     = ' + sum + '\\n' +
    'calculate("multiply", 2, 3, 4)      = ' + product + '\\n' +
    'calculate("average", 10, 20, 30, 40) = ' + avg + '\\n\\n' +
    'First param is operation, rest are numbers!';
  log('✅ Calculations: sum=' + sum + ', product=' + product + ', avg=' + avg);
});

// 3. Rest in Array Destructuring
document.getElementById('btn-first-rest').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [first, ...rest] = numbers;
  
  const output = document.getElementById('destructure-output');
  output.textContent = 
    'const [first, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\\n\\n' +
    'first: ' + first + '\\n' +
    'rest:  [' + rest.join(', ') + ']\\n\\n' +
    'Rest collects remaining elements!';
  log('✅ First: ' + first + ', Rest length: ' + rest.length);
});

document.getElementById('btn-skip').addEventListener('click', () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const [primary, secondary, ...others] = colors;
  
  const output = document.getElementById('destructure-output');
  output.textContent = 
    'const [primary, secondary, ...others] = colors\\n\\n' +
    'primary:   "' + primary + '"\\n' +
    'secondary: "' + secondary + '"\\n' +
    'others:    [' + others.map(c => '"' + c + '"').join(', ') + ']\\n\\n' +
    'Can skip first elements and collect rest!';
  log('✅ Destructured: primary=' + primary + ', others=' + others.length);
});

// 4. Practical Examples
function calculateAverage(...scores) {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return (sum / scores.length).toFixed(2);
}

function filterValues(minValue, ...values) {
  return values.filter(v => v >= minValue);
}

document.getElementById('btn-average').addEventListener('click', () => {
  const avg1 = calculateAverage(85, 90, 78, 92, 88);
  const avg2 = calculateAverage(100, 95, 98);
  const avg3 = calculateAverage(70);
  
  const output = document.getElementById('practical-output');
  output.textContent = 
    'calculateAverage(85, 90, 78, 92, 88) = ' + avg1 + '\\n' +
    'calculateAverage(100, 95, 98)        = ' + avg2 + '\\n' +
    'calculateAverage(70)                 = ' + avg3 + '\\n\\n' +
    'Flexible function accepts any number of scores!';
  log('✅ Averages: ' + avg1 + ', ' + avg2 + ', ' + avg3);
});

document.getElementById('btn-filter-values').addEventListener('click', () => {
  const result1 = filterValues(50, 23, 67, 45, 89, 12, 78);
  const result2 = filterValues(80, 75, 85, 90, 70, 95);
  
  const output = document.getElementById('practical-output');
  output.textContent = 
    'filterValues(50, 23, 67, 45, 89, 12, 78)\\n' +
    'Result: [' + result1.join(', ') + ']\\n\\n' +
    'filterValues(80, 75, 85, 90, 70, 95)\\n' +
    'Result: [' + result2.join(', ') + ']\\n\\n' +
    'First param is threshold, rest are values to filter!';
  log('✅ Filtered values: [' + result1.join(', ') + ']');
});

log('🚀 Rest Parameters module loaded!');`,
  },


  /* ══════════════════════════════════════════════
     BATCH 4: ES6+ FEATURES (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "let-const-deep",
    description: "let vs const deep dive — scope, hoisting, temporal dead zone, best practices",
    html: `<div class="container">
  <h1>🔷 let vs const Deep Dive</h1>
  <p class="subtitle">Scope, hoisting, temporal dead zone, best practices</p>

  <div class="section">
    <h2>1. Block Scope</h2>
    <div class="btn-group">
      <button id="btn-var-scope">var Scope</button>
      <button id="btn-let-scope">let Scope</button>
      <button id="btn-const-scope">const Scope</button>
    </div>
    <div id="scope-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Hoisting Behavior</h2>
    <button id="btn-var-hoist">var Hoisting</button>
    <button id="btn-let-hoist">let/const Hoisting (TDZ)</button>
    <div id="hoist-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. const Immutability</h2>
    <button id="btn-const-primitive">Primitive Values</button>
    <button id="btn-const-object">Objects & Arrays</button>
    <button id="btn-const-freeze">Object.freeze()</button>
    <div id="immutable-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Best Practices</h2>
    <button id="btn-best-practices">Show Guidelines</button>
    <div id="practices-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// let vs const Deep Dive
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Block Scope
document.getElementById('btn-var-scope').addEventListener('click', () => {
  var x = 'global';
  if (true) {
    var x = 'block';
    var y = 'inside';
  }
  
  const output = document.getElementById('scope-output');
  output.textContent = 
    'var x = "global"\\n' +
    'if (true) {\\n' +
    '  var x = "block"  // overwrites global!\\n' +
    '  var y = "inside"\\n' +
    '}\\n\\n' +
    'x = "' + x + '"  (changed!)\\n' +
    'y = "' + y + '"  (accessible outside!)\\n\\n' +
    '⚠️ var is function-scoped, not block-scoped!';
  log('⚠️ var scope - x: ' + x + ', y: ' + y);
});

document.getElementById('btn-let-scope').addEventListener('click', () => {
  let x = 'global';
  let result = '';
  if (true) {
    let x = 'block';
    let y = 'inside';
    result = 'Inside block: x = "' + x + '", y = "' + y + '"\\n';
  }
  result += 'Outside block: x = "' + x + '"\\n';
  result += 'y is not accessible outside (ReferenceError)';
  
  const output = document.getElementById('scope-output');
  output.textContent = 
    'let x = "global"\\n' +
    'if (true) {\\n' +
    '  let x = "block"  // separate variable\\n' +
    '  let y = "inside"\\n' +
    '}\\n\\n' +
    result + '\\n\\n' +
    '✅ let is block-scoped!';
  log('✅ let scope - block-scoped correctly');
});

document.getElementById('btn-const-scope').addEventListener('click', () => {
  const x = 'global';
  let result = '';
  if (true) {
    const x = 'block';
    const y = 'inside';
    result = 'Inside block: x = "' + x + '", y = "' + y + '"\\n';
  }
  result += 'Outside block: x = "' + x + '"\\n';
  result += 'y is not accessible outside';
  
  const output = document.getElementById('scope-output');
  output.textContent = 
    'const x = "global"\\n' +
    'if (true) {\\n' +
    '  const x = "block"\\n' +
    '  const y = "inside"\\n' +
    '}\\n\\n' +
    result + '\\n\\n' +
    '✅ const is also block-scoped!';
  log('✅ const scope - block-scoped correctly');
});

// 2. Hoisting Behavior
document.getElementById('btn-var-hoist').addEventListener('click', () => {
  const output = document.getElementById('hoist-output');
  output.textContent = 
    'console.log(x)  // undefined (not error!)\\n' +
    'var x = 5\\n' +
    'console.log(x)  // 5\\n\\n' +
    'Hoisted as:\\n' +
    'var x;          // declaration hoisted\\n' +
    'console.log(x)  // undefined\\n' +
    'x = 5;          // assignment stays\\n\\n' +
    '⚠️ var is hoisted and initialized to undefined';
  log('⚠️ var hoisting demonstrated');
});

document.getElementById('btn-let-hoist').addEventListener('click', () => {
  const output = document.getElementById('hoist-output');
  output.textContent = 
    'console.log(x)  // ReferenceError!\\n' +
    'let x = 5\\n\\n' +
    'Temporal Dead Zone (TDZ):\\n' +
    '┌─ Start of block\\n' +
    '│  ⚠️ TDZ - cannot access x\\n' +
    '│  ⚠️ TDZ - cannot access x\\n' +
    '└─ let x = 5  // TDZ ends here\\n' +
    '   ✅ Now x is accessible\\n\\n' +
    '✅ let/const prevent usage before declaration';
  log('✅ let/const TDZ explained');
});

// 3. const Immutability
document.getElementById('btn-const-primitive').addEventListener('click', () => {
  const output = document.getElementById('immutable-output');
  let result = '';
  
  const x = 5;
  try {
    // This would cause error: x = 10;
    result = 'const x = 5\\n';
    result += 'x = 10  // ❌ TypeError: Assignment to constant\\n\\n';
    result += 'Primitive values (number, string, boolean)\\n';
    result += 'cannot be reassigned!';
  } catch (e) {
    result = 'Error: ' + e.message;
  }
  
  output.textContent = result;
  log('✅ const primitive immutability');
});

document.getElementById('btn-const-object').addEventListener('click', () => {
  const obj = { name: 'Alice', age: 25 };
  const arr = [1, 2, 3];
  
  obj.age = 26;
  obj.city = 'NYC';
  arr.push(4);
  
  const output = document.getElementById('immutable-output');
  output.textContent = 
    'const obj = { name: "Alice", age: 25 }\\n' +
    'const arr = [1, 2, 3]\\n\\n' +
    'obj.age = 26        // ✅ Allowed!\\n' +
    'obj.city = "NYC"    // ✅ Allowed!\\n' +
    'arr.push(4)         // ✅ Allowed!\\n\\n' +
    'Result:\\n' +
    'obj = ' + JSON.stringify(obj) + '\\n' +
    'arr = [' + arr.join(', ') + ']\\n\\n' +
    '💡 const prevents reassignment, not mutation!';
  log('✅ const object mutation allowed');
});

document.getElementById('btn-const-freeze').addEventListener('click', () => {
  const obj = { name: 'Bob', age: 30 };
  Object.freeze(obj);
  
  obj.age = 31;
  obj.city = 'LA';
  
  const output = document.getElementById('immutable-output');
  output.textContent = 
    'const obj = { name: "Bob", age: 30 }\\n' +
    'Object.freeze(obj)\\n\\n' +
    'obj.age = 31     // ❌ Silently fails\\n' +
    'obj.city = "LA"  // ❌ Silently fails\\n\\n' +
    'Result: ' + JSON.stringify(obj) + '\\n\\n' +
    '✅ Use Object.freeze() for true immutability!';
  log('✅ Object.freeze() prevents mutation');
});

// 4. Best Practices
document.getElementById('btn-best-practices').addEventListener('click', () => {
  const output = document.getElementById('practices-output');
  output.textContent = 
    '📋 Best Practices:\\n\\n' +
    '1️⃣ Default to const\\n' +
    '   Use const by default for all variables\\n\\n' +
    '2️⃣ Use let when reassignment is needed\\n' +
    '   Only use let for counters, accumulators, etc.\\n\\n' +
    '3️⃣ Never use var\\n' +
    '   Avoid var in modern JavaScript\\n\\n' +
    '4️⃣ Declare at the top of scope\\n' +
    '   Makes code more readable\\n\\n' +
    '5️⃣ One declaration per line\\n' +
    '   const x = 1;\\n' +
    '   const y = 2;  // Better than const x=1, y=2;';
  log('✅ Best practices displayed');
});

log('🚀 let vs const Deep Dive module loaded!');`,
  },

  {
    topic: "arrow-functions-advanced",
    description: "Arrow functions deep — implicit returns, this binding, when to use",
    html: `<div class="container">
  <h1>🔷 Arrow Functions Advanced</h1>
  <p class="subtitle">Implicit returns, this binding, when to use</p>

  <div class="section">
    <h2>1. Syntax Variations</h2>
    <div class="btn-group">
      <button id="btn-basic">Basic Syntax</button>
      <button id="btn-implicit">Implicit Return</button>
      <button id="btn-object">Return Object</button>
    </div>
    <div id="syntax-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. this Binding</h2>
    <button id="btn-regular-this">Regular Function</button>
    <button id="btn-arrow-this">Arrow Function</button>
    <button id="btn-event-this">Event Handler</button>
    <div id="this-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Array Methods with Arrows</h2>
    <button id="btn-map-arrow">map with Arrow</button>
    <button id="btn-filter-arrow">filter with Arrow</button>
    <button id="btn-chain-arrow">Method Chaining</button>
    <div id="array-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. When NOT to Use</h2>
    <button id="btn-avoid">Show Anti-patterns</button>
    <div id="avoid-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Arrow Functions Advanced
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Syntax Variations
document.getElementById('btn-basic').addEventListener('click', () => {
  const noParams = () => 'No parameters';
  const oneParam = x => x * 2;
  const twoParams = (x, y) => x + y;
  const multiLine = (x, y) => {
    const sum = x + y;
    return sum * 2;
  };
  
  const output = document.getElementById('syntax-output');
  output.textContent = 
    '() => "No parameters"\\n' +
    'Result: "' + noParams() + '"\\n\\n' +
    'x => x * 2\\n' +
    'Result: ' + oneParam(5) + '\\n\\n' +
    '(x, y) => x + y\\n' +
    'Result: ' + twoParams(3, 4) + '\\n\\n' +
    '(x, y) => { ... }\\n' +
    'Result: ' + multiLine(3, 4);
  log('✅ Arrow function syntax variations');
});

document.getElementById('btn-implicit').addEventListener('click', () => {
  const square = x => x * x;
  const isEven = n => n % 2 === 0;
  const greet = name => 'Hello, ' + name;
  
  const output = document.getElementById('syntax-output');
  output.textContent = 
    'Implicit Return (no braces, no return keyword):\\n\\n' +
    'x => x * x\\n' +
    'square(5) = ' + square(5) + '\\n\\n' +
    'n => n % 2 === 0\\n' +
    'isEven(4) = ' + isEven(4) + '\\n\\n' +
    'name => "Hello, " + name\\n' +
    'greet("Alice") = "' + greet('Alice') + '"\\n\\n' +
    '✅ Single expression returns automatically!';
  log('✅ Implicit returns demonstrated');
});

document.getElementById('btn-object').addEventListener('click', () => {
  const createUser = (name, age) => ({ name: name, age: age });
  const createPoint = (x, y) => ({ x, y });
  
  const user = createUser('Alice', 25);
  const point = createPoint(10, 20);
  
  const output = document.getElementById('syntax-output');
  output.textContent = 
    'Return object with implicit return:\\n\\n' +
    '(name, age) => ({ name: name, age: age })\\n' +
    'Result: ' + JSON.stringify(user) + '\\n\\n' +
    '(x, y) => ({ x, y })  // shorthand\\n' +
    'Result: ' + JSON.stringify(point) + '\\n\\n' +
    '💡 Wrap object in parentheses!';
  log('✅ Object return: ' + JSON.stringify(user));
});

// 2. this Binding
const person = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],
  
  showHobbiesRegular: function() {
    return this.hobbies.map(function(hobby) {
      return this.name + ' likes ' + hobby;
    }.bind(this));
  },
  
  showHobbiesArrow: function() {
    return this.hobbies.map(hobby => this.name + ' likes ' + hobby);
  }
};

document.getElementById('btn-regular-this').addEventListener('click', () => {
  const result = person.showHobbiesRegular();
  const output = document.getElementById('this-output');
  output.textContent = 
    'Regular function needs .bind(this):\\n\\n' +
    'showHobbies: function() {\\n' +
    '  return this.hobbies.map(function(hobby) {\\n' +
    '    return this.name + " likes " + hobby;\\n' +
    '  }.bind(this));  // ⚠️ Need bind!\\n' +
    '}\\n\\n' +
    'Result:\\n' + result.join('\\n');
  log('✅ Regular function with bind');
});

document.getElementById('btn-arrow-this').addEventListener('click', () => {
  const result = person.showHobbiesArrow();
  const output = document.getElementById('this-output');
  output.textContent = 
    'Arrow function inherits this:\\n\\n' +
    'showHobbies: function() {\\n' +
    '  return this.hobbies.map(hobby =>\\n' +
    '    this.name + " likes " + hobby\\n' +
    '  );  // ✅ No bind needed!\\n' +
    '}\\n\\n' +
    'Result:\\n' + result.join('\\n') + '\\n\\n' +
    '✅ Arrow functions inherit this from parent scope!';
  log('✅ Arrow function inherits this correctly');
});

document.getElementById('btn-event-this').addEventListener('click', () => {
  const output = document.getElementById('this-output');
  output.textContent = 
    'Event Handlers:\\n\\n' +
    '❌ BAD (arrow function):\\n' +
    'button.addEventListener("click", () => {\\n' +
    '  this.classList.add("active");\\n' +
    '  // this is NOT the button!\\n' +
    '});\\n\\n' +
    '✅ GOOD (regular function):\\n' +
    'button.addEventListener("click", function() {\\n' +
    '  this.classList.add("active");\\n' +
    '  // this IS the button!\\n' +
    '});\\n\\n' +
    '💡 Use regular functions for event handlers!';
  log('✅ Event handler this binding explained');
});

// 3. Array Methods with Arrows
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('btn-map-arrow').addEventListener('click', () => {
  const doubled = numbers.map(n => n * 2);
  const squared = numbers.map(n => n * n);
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'numbers.map(n => n * 2)\\n' +
    '[' + doubled.join(', ') + ']\\n\\n' +
    'numbers.map(n => n * n)\\n' +
    '[' + squared.join(', ') + ']\\n\\n' +
    '✅ Clean and concise!';
  log('✅ map with arrow functions');
});

document.getElementById('btn-filter-arrow').addEventListener('click', () => {
  const evens = numbers.filter(n => n % 2 === 0);
  const greaterThan5 = numbers.filter(n => n > 5);
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'numbers.filter(n => n % 2 === 0)\\n' +
    '[' + evens.join(', ') + ']\\n\\n' +
    'numbers.filter(n => n > 5)\\n' +
    '[' + greaterThan5.join(', ') + ']\\n\\n' +
    '✅ Readable and expressive!';
  log('✅ filter with arrow functions');
});

document.getElementById('btn-chain-arrow').addEventListener('click', () => {
  const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * n)
    .reduce((acc, n) => acc + n, 0);
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'numbers\\n' +
    '  .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]\\n' +
    '  .map(n => n * n)           // [4, 16, 36, 64, 100]\\n' +
    '  .reduce((acc, n) => acc + n, 0)\\n\\n' +
    'Result: ' + result + '\\n\\n' +
    '✅ Beautiful method chaining!';
  log('✅ Method chaining: ' + result);
});

// 4. When NOT to Use
document.getElementById('btn-avoid').addEventListener('click', () => {
  const output = document.getElementById('avoid-output');
  output.textContent = 
    '❌ AVOID Arrow Functions For:\\n\\n' +
    '1️⃣ Object Methods\\n' +
    '   const obj = {\\n' +
    '     name: "Alice",\\n' +
    '     greet: () => "Hello " + this.name  // ❌ Wrong!\\n' +
    '   };\\n\\n' +
    '2️⃣ Prototype Methods\\n' +
    '   Person.prototype.greet = () => { ... }  // ❌ Wrong!\\n\\n' +
    '3️⃣ Event Handlers (when you need this)\\n' +
    '   button.onclick = () => { this.disabled = true }  // ❌ Wrong!\\n\\n' +
    '4️⃣ Constructors\\n' +
    '   const Person = (name) => { this.name = name }  // ❌ Error!\\n\\n' +
    '5️⃣ When you need arguments object\\n' +
    '   const fn = () => console.log(arguments)  // ❌ Not available!';
  log('✅ Anti-patterns displayed');
});

log('🚀 Arrow Functions Advanced module loaded!');`,
  },

  {
    topic: "template-literals",
    description: "Template literals — interpolation, multiline strings, tagged templates",
    html: `<div class="container">
  <h1>🔷 Template Literals</h1>
  <p class="subtitle">Interpolation, multiline strings, tagged templates</p>

  <div class="section">
    <h2>1. String Interpolation</h2>
    <div class="input-row">
      <input type="text" id="name-input" placeholder="Name" value="Alice" />
      <input type="number" id="age-input" placeholder="Age" value="25" />
      <button id="btn-interpolate">Interpolate</button>
    </div>
    <div id="interpolate-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multiline Strings</h2>
    <button id="btn-multiline">Create Multiline</button>
    <button id="btn-html">HTML Template</button>
    <div id="multiline-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Expression Evaluation</h2>
    <button id="btn-math">Math Expressions</button>
    <button id="btn-functions">Function Calls</button>
    <button id="btn-ternary">Ternary Operators</button>
    <div id="expression-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Tagged Templates</h2>
    <button id="btn-highlight">Highlight Template</button>
    <button id="btn-currency">Currency Format</button>
    <div id="tagged-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
input[type="text"],
input[type="number"] {
  background: #f9fafb;
  border: 2px solid #8b5cf6;
  color: #333;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 140px;
}
input:focus {
  outline: none;
  border-color: #7c3aed;
  background: white;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Template Literals
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. String Interpolation
document.getElementById('btn-interpolate').addEventListener('click', () => {
  const name = document.getElementById('name-input').value;
  const age = document.getElementById('age-input').value;
  
  const greeting = \`Hello, \${name}! You are \${age} years old.\`;
  const info = \`Name: \${name}\\nAge: \${age}\\nBorn in: \${2024 - age}\`;
  
  const output = document.getElementById('interpolate-output');
  output.textContent = 
    'Template Literal:\\n' +
    '\`Hello, \${name}! You are \${age} years old.\`\\n\\n' +
    'Result:\\n' + greeting + '\\n\\n' +
    'Multi-expression:\\n' + info;
  log('✅ Interpolated: ' + greeting);
});

// 2. Multiline Strings
document.getElementById('btn-multiline').addEventListener('click', () => {
  const poem = \`Roses are red,
Violets are blue,
Template literals
Make coding fun too!\`;
  
  const output = document.getElementById('multiline-output');
  output.textContent = 
    'Multiline Template Literal:\\n\\n' +
    'const poem = \`\\n' +
    '  Roses are red,\\n' +
    '  Violets are blue,\\n' +
    '  Template literals\\n' +
    '  Make coding fun too!\\n' +
    '\`\\n\\n' +
    'Result:\\n' + poem;
  log('✅ Multiline string created');
});

document.getElementById('btn-html').addEventListener('click', () => {
  const user = { name: 'Alice', role: 'Admin', active: true };
  
  const html = \`<div class="user-card">
  <h3>\${user.name}</h3>
  <p>Role: \${user.role}</p>
  <span class="status \${user.active ? 'active' : 'inactive'}">
    \${user.active ? 'Active' : 'Inactive'}
  </span>
</div>\`;
  
  const output = document.getElementById('multiline-output');
  output.textContent = 
    'HTML Template:\\n\\n' + html + '\\n\\n' +
    '✅ Perfect for generating HTML!';
  log('✅ HTML template created');
});

// 3. Expression Evaluation
document.getElementById('btn-math').addEventListener('click', () => {
  const a = 10;
  const b = 5;
  
  const result = \`\${a} + \${b} = \${a + b}
\${a} - \${b} = \${a - b}
\${a} * \${b} = \${a * b}
\${a} / \${b} = \${a / b}
\${a} ** \${b} = \${a ** b}\`;
  
  const output = document.getElementById('expression-output');
  output.textContent = 
    'Math Expressions in Template Literals:\\n\\n' + result;
  log('✅ Math expressions evaluated');
});

document.getElementById('btn-functions').addEventListener('click', () => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  const getTime = () => new Date().toLocaleTimeString();
  
  const name = 'alice';
  const message = \`Hello, \${capitalize(name)}!
Current time: \${getTime()}
Random number: \${Math.floor(Math.random() * 100)}\`;
  
  const output = document.getElementById('expression-output');
  output.textContent = 
    'Function Calls in Template Literals:\\n\\n' + message;
  log('✅ Functions called in template');
});

document.getElementById('btn-ternary').addEventListener('click', () => {
  const score = 85;
  const age = 17;
  const items = 3;
  
  const result = \`Score: \${score} - \${score >= 60 ? 'Pass' : 'Fail'}
Age: \${age} - \${age >= 18 ? 'Adult' : 'Minor'}
Items: \${items} - \${items === 1 ? 'item' : 'items'}\`;
  
  const output = document.getElementById('expression-output');
  output.textContent = 
    'Ternary Operators in Template Literals:\\n\\n' + result;
  log('✅ Ternary operators evaluated');
});

// 4. Tagged Templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined ? '**' + values[i] + '**' : '';
    return result + str + value;
  }, '');
}

function currency(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] !== undefined ? '$' + values[i].toFixed(2) : '';
    return result + str + value;
  }, '');
}

document.getElementById('btn-highlight').addEventListener('click', () => {
  const name = 'Alice';
  const score = 95;
  
  const result = highlight\`User \${name} scored \${score} points!\`;
  
  const output = document.getElementById('tagged-output');
  output.textContent = 
    'Tagged Template - highlight:\\n\\n' +
    'highlight\`User \${name} scored \${score} points!\`\\n\\n' +
    'Result:\\n' + result + '\\n\\n' +
    'Values are wrapped with **asterisks**!';
  log('✅ Tagged template - highlight: ' + result);
});

document.getElementById('btn-currency').addEventListener('click', () => {
  const price = 19.5;
  const tax = 2.475;
  const total = price + tax;
  
  const result = currency\`Price: \${price}, Tax: \${tax}, Total: \${total}\`;
  
  const output = document.getElementById('tagged-output');
  output.textContent = 
    'Tagged Template - currency:\\n\\n' +
    'currency\`Price: \${price}, Tax: \${tax}, Total: \${total}\`\\n\\n' +
    'Result:\\n' + result + '\\n\\n' +
    'Numbers formatted as currency!';
  log('✅ Tagged template - currency: ' + result);
});

log('🚀 Template Literals module loaded!');`,
  },

  {
    topic: "destructuring",
    description: "Destructuring — extract values from arrays and objects elegantly",
    html: `<div class="container">
  <h1>🔷 Destructuring</h1>
  <p class="subtitle">Extract values from arrays and objects elegantly</p>

  <div class="section">
    <h2>1. Array Destructuring</h2>
    <div class="btn-group">
      <button id="btn-array-basic">Basic</button>
      <button id="btn-array-skip">Skip Elements</button>
      <button id="btn-array-rest">Rest Pattern</button>
      <button id="btn-array-default">Default Values</button>
    </div>
    <div id="array-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Object Destructuring</h2>
    <button id="btn-obj-basic">Basic</button>
    <button id="btn-obj-rename">Rename Variables</button>
    <button id="btn-obj-nested">Nested Objects</button>
    <button id="btn-obj-default">Default Values</button>
    <div id="object-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Function Parameters</h2>
    <button id="btn-func-array">Array Params</button>
    <button id="btn-func-object">Object Params</button>
    <div id="function-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Practical Examples</h2>
    <button id="btn-swap">Swap Variables</button>
    <button id="btn-api">Parse API Response</button>
    <div id="practical-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Destructuring
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Array Destructuring
document.getElementById('btn-array-basic').addEventListener('click', () => {
  const colors = ['red', 'green', 'blue', 'yellow'];
  const [first, second, third] = colors;
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'const colors = ["red", "green", "blue", "yellow"]\\n' +
    'const [first, second, third] = colors\\n\\n' +
    'first:  "' + first + '"\\n' +
    'second: "' + second + '"\\n' +
    'third:  "' + third + '"';
  log('✅ Array destructured: ' + first + ', ' + second + ', ' + third);
});

document.getElementById('btn-array-skip').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5];
  const [first, , third, , fifth] = numbers;
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'const numbers = [1, 2, 3, 4, 5]\\n' +
    'const [first, , third, , fifth] = numbers\\n\\n' +
    'first: ' + first + '\\n' +
    'third: ' + third + '\\n' +
    'fifth: ' + fifth + '\\n\\n' +
    'Skipped 2nd and 4th elements!';
  log('✅ Skipped elements: ' + first + ', ' + third + ', ' + fifth);
});

document.getElementById('btn-array-rest').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const [first, second, ...rest] = numbers;
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'const numbers = [1, 2, 3, 4, 5, 6, 7, 8]\\n' +
    'const [first, second, ...rest] = numbers\\n\\n' +
    'first:  ' + first + '\\n' +
    'second: ' + second + '\\n' +
    'rest:   [' + rest.join(', ') + ']\\n\\n' +
    'Rest pattern collects remaining elements!';
  log('✅ Rest pattern: [' + rest.join(', ') + ']');
});

document.getElementById('btn-array-default').addEventListener('click', () => {
  const colors = ['red'];
  const [first = 'black', second = 'white', third = 'gray'] = colors;
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'const colors = ["red"]\\n' +
    'const [first = "black", second = "white", third = "gray"] = colors\\n\\n' +
    'first:  "' + first + '"  (from array)\\n' +
    'second: "' + second + '"  (default)\\n' +
    'third:  "' + third + '"  (default)\\n\\n' +
    'Defaults used when values are missing!';
  log('✅ Defaults: ' + first + ', ' + second + ', ' + third);
});

// 2. Object Destructuring
document.getElementById('btn-obj-basic').addEventListener('click', () => {
  const user = { name: 'Alice', age: 25, city: 'NYC' };
  const { name, age, city } = user;
  
  const output = document.getElementById('object-output');
  output.textContent = 
    'const user = { name: "Alice", age: 25, city: "NYC" }\\n' +
    'const { name, age, city } = user\\n\\n' +
    'name: "' + name + '"\\n' +
    'age:  ' + age + '\\n' +
    'city: "' + city + '"';
  log('✅ Object destructured: ' + name + ', ' + age + ', ' + city);
});

document.getElementById('btn-obj-rename').addEventListener('click', () => {
  const user = { name: 'Bob', age: 30 };
  const { name: userName, age: userAge } = user;
  
  const output = document.getElementById('object-output');
  output.textContent = 
    'const user = { name: "Bob", age: 30 }\\n' +
    'const { name: userName, age: userAge } = user\\n\\n' +
    'userName: "' + userName + '"\\n' +
    'userAge:  ' + userAge + '\\n\\n' +
    'Properties renamed during destructuring!';
  log('✅ Renamed: userName=' + userName + ', userAge=' + userAge);
});

document.getElementById('btn-obj-nested').addEventListener('click', () => {
  const user = {
    name: 'Carol',
    address: {
      city: 'LA',
      zip: '90001'
    }
  };
  const { name, address: { city, zip } } = user;
  
  const output = document.getElementById('object-output');
  output.textContent = 
    'const user = {\\n' +
    '  name: "Carol",\\n' +
    '  address: { city: "LA", zip: "90001" }\\n' +
    '}\\n' +
    'const { name, address: { city, zip } } = user\\n\\n' +
    'name: "' + name + '"\\n' +
    'city: "' + city + '"\\n' +
    'zip:  "' + zip + '"';
  log('✅ Nested destructuring: ' + name + ', ' + city + ', ' + zip);
});

document.getElementById('btn-obj-default').addEventListener('click', () => {
  const user = { name: 'Dan' };
  const { name, age = 18, role = 'user' } = user;
  
  const output = document.getElementById('object-output');
  output.textContent = 
    'const user = { name: "Dan" }\\n' +
    'const { name, age = 18, role = "user" } = user\\n\\n' +
    'name: "' + name + '"  (from object)\\n' +
    'age:  ' + age + '  (default)\\n' +
    'role: "' + role + '"  (default)';
  log('✅ Defaults: ' + name + ', ' + age + ', ' + role);
});

// 3. Function Parameters
function displayCoordinates([x, y]) {
  return 'X: ' + x + ', Y: ' + y;
}

function createUser({ name, age = 18, role = 'user' }) {
  return { name, age, role };
}

document.getElementById('btn-func-array').addEventListener('click', () => {
  const point = [10, 20];
  const result = displayCoordinates(point);
  
  const output = document.getElementById('function-output');
  output.textContent = 
    'function displayCoordinates([x, y]) {\\n' +
    '  return \`X: \${x}, Y: \${y}\`;\\n' +
    '}\\n\\n' +
    'displayCoordinates([10, 20])\\n' +
    'Result: "' + result + '"';
  log('✅ Array param destructured: ' + result);
});

document.getElementById('btn-func-object').addEventListener('click', () => {
  const user1 = createUser({ name: 'Alice', age: 25, role: 'admin' });
  const user2 = createUser({ name: 'Bob' });
  
  const output = document.getElementById('function-output');
  output.textContent = 
    'function createUser({ name, age = 18, role = "user" }) {\\n' +
    '  return { name, age, role };\\n' +
    '}\\n\\n' +
    'createUser({ name: "Alice", age: 25, role: "admin" })\\n' +
    JSON.stringify(user1) + '\\n\\n' +
    'createUser({ name: "Bob" })\\n' +
    JSON.stringify(user2);
  log('✅ Object param destructured');
});

// 4. Practical Examples
document.getElementById('btn-swap').addEventListener('click', () => {
  let a = 5;
  let b = 10;
  
  const before = 'a = ' + a + ', b = ' + b;
  [a, b] = [b, a];
  const after = 'a = ' + a + ', b = ' + b;
  
  const output = document.getElementById('practical-output');
  output.textContent = 
    'Swap Variables:\\n\\n' +
    'Before: ' + before + '\\n' +
    '[a, b] = [b, a]\\n' +
    'After:  ' + after + '\\n\\n' +
    '✅ Swapped without temp variable!';
  log('✅ Variables swapped: ' + after);
});

document.getElementById('btn-api').addEventListener('click', () => {
  const apiResponse = {
    status: 200,
    data: {
      user: {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com'
      },
      posts: [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' }
      ]
    }
  };
  
  const {
    status,
    data: {
      user: { name, email },
      posts
    }
  } = apiResponse;
  
  const output = document.getElementById('practical-output');
  output.textContent = 
    'API Response Parsing:\\n\\n' +
    'status: ' + status + '\\n' +
    'name:   "' + name + '"\\n' +
    'email:  "' + email + '"\\n' +
    'posts:  ' + posts.length + ' posts\\n\\n' +
    'Deeply nested data extracted easily!';
  log('✅ API response parsed: ' + name + ', ' + posts.length + ' posts');
});

log('🚀 Destructuring module loaded!');`,
  },

  {
    topic: "spread-operator",
    description: "Spread operator (...) — expand arrays/objects in expressions and calls",
    html: `<div class="container">
  <h1>🔷 Spread Operator</h1>
  <p class="subtitle">Expand arrays/objects in expressions and calls</p>

  <div class="section">
    <h2>1. Array Spreading</h2>
    <div class="btn-group">
      <button id="btn-array-copy">Copy Array</button>
      <button id="btn-array-merge">Merge Arrays</button>
      <button id="btn-array-add">Add Elements</button>
    </div>
    <div id="array-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Object Spreading</h2>
    <button id="btn-obj-copy">Copy Object</button>
    <button id="btn-obj-merge">Merge Objects</button>
    <button id="btn-obj-update">Update Properties</button>
    <div id="object-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Function Arguments</h2>
    <button id="btn-func-args">Spread as Arguments</button>
    <button id="btn-math-max">Math.max() Example</button>
    <div id="function-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Practical Examples</h2>
    <button id="btn-remove">Remove Element</button>
    <button id="btn-insert">Insert Element</button>
    <button id="btn-clone">Deep vs Shallow</button>
    <div id="practical-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Spread Operator
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Array Spreading
document.getElementById('btn-array-copy').addEventListener('click', () => {
  const original = [1, 2, 3, 4, 5];
  const copy = [...original];
  
  copy.push(6);
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'const original = [1, 2, 3, 4, 5]\\n' +
    'const copy = [...original]\\n' +
    'copy.push(6)\\n\\n' +
    'original: [' + original.join(', ') + ']\\n' +
    'copy:     [' + copy.join(', ') + ']\\n\\n' +
    '✅ Shallow copy created!';
  log('✅ Array copied: original=' + original.length + ', copy=' + copy.length);
});

document.getElementById('btn-array-merge').addEventListener('click', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  
  const merged = [...arr1, ...arr2, ...arr3];
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'const arr1 = [1, 2, 3]\\n' +
    'const arr2 = [4, 5, 6]\\n' +
    'const arr3 = [7, 8, 9]\\n\\n' +
    'const merged = [...arr1, ...arr2, ...arr3]\\n\\n' +
    'Result: [' + merged.join(', ') + ']\\n\\n' +
    '✅ Multiple arrays merged!';
  log('✅ Arrays merged: length=' + merged.length);
});

document.getElementById('btn-array-add').addEventListener('click', () => {
  const numbers = [3, 4, 5];
  const withStart = [1, 2, ...numbers];
  const withEnd = [...numbers, 6, 7];
  const withBoth = [0, ...numbers, 6];
  
  const output = document.getElementById('array-output');
  output.textContent = 
    'const numbers = [3, 4, 5]\\n\\n' +
    '[1, 2, ...numbers]     = [' + withStart.join(', ') + ']\\n' +
    '[...numbers, 6, 7]     = [' + withEnd.join(', ') + ']\\n' +
    '[0, ...numbers, 6]     = [' + withBoth.join(', ') + ']\\n\\n' +
    '✅ Elements added at any position!';
  log('✅ Elements added to array');
});

// 2. Object Spreading
document.getElementById('btn-obj-copy').addEventListener('click', () => {
  const original = { name: 'Alice', age: 25, city: 'NYC' };
  const copy = { ...original };
  
  copy.age = 26;
  
  const output = document.getElementById('object-output');
  output.textContent = 
    'const original = { name: "Alice", age: 25, city: "NYC" }\\n' +
    'const copy = { ...original }\\n' +
    'copy.age = 26\\n\\n' +
    'original: ' + JSON.stringify(original) + '\\n' +
    'copy:     ' + JSON.stringify(copy) + '\\n\\n' +
    '✅ Object copied (shallow)!';
  log('✅ Object copied');
});

document.getElementById('btn-obj-merge').addEventListener('click', () => {
  const defaults = { theme: 'light', lang: 'en', notifications: true };
  const userPrefs = { theme: 'dark', fontSize: 14 };
  
  const config = { ...defaults, ...userPrefs };
  
  const output = document.getElementById('object-output');
  output.textContent = 
    'const defaults = { theme: "light", lang: "en", notifications: true }\\n' +
    'const userPrefs = { theme: "dark", fontSize: 14 }\\n\\n' +
    'const config = { ...defaults, ...userPrefs }\\n\\n' +
    'Result:\\n' + JSON.stringify(config, null, 2) + '\\n\\n' +
    '✅ Later properties override earlier ones!';
  log('✅ Objects merged: ' + JSON.stringify(config));
});

document.getElementById('btn-obj-update').addEventListener('click', () => {
  const user = { id: 1, name: 'Bob', age: 30, role: 'user' };
  const updated = { ...user, age: 31, role: 'admin', active: true };
  
  const output = document.getElementById('object-output');
  output.textContent = 
    'const user = { id: 1, name: "Bob", age: 30, role: "user" }\\n\\n' +
    'const updated = {\\n' +
    '  ...user,\\n' +
    '  age: 31,\\n' +
    '  role: "admin",\\n' +
    '  active: true\\n' +
    '}\\n\\n' +
    'Result:\\n' + JSON.stringify(updated, null, 2) + '\\n\\n' +
    '✅ Immutable update pattern!';
  log('✅ Object updated immutably');
});

// 3. Function Arguments
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

document.getElementById('btn-func-args').addEventListener('click', () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = sum(...numbers);
  
  const output = document.getElementById('function-output');
  output.textContent = 
    'function sum(...numbers) {\\n' +
    '  return numbers.reduce((acc, n) => acc + n, 0);\\n' +
    '}\\n\\n' +
    'const numbers = [1, 2, 3, 4, 5]\\n' +
    'sum(...numbers)  // spreads array as arguments\\n\\n' +
    'Result: ' + result;
  log('✅ Array spread as function arguments: ' + result);
});

document.getElementById('btn-math-max').addEventListener('click', () => {
  const scores = [85, 92, 78, 95, 88, 91];
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  
  const output = document.getElementById('function-output');
  output.textContent = 
    'const scores = [85, 92, 78, 95, 88, 91]\\n\\n' +
    'Math.max(...scores) = ' + max + '\\n' +
    'Math.min(...scores) = ' + min + '\\n\\n' +
    'Without spread:\\n' +
    'Math.max(scores)    = NaN  ❌\\n\\n' +
    '✅ Spread converts array to arguments!';
  log('✅ Math.max with spread: ' + max);
});

// 4. Practical Examples
document.getElementById('btn-remove').addEventListener('click', () => {
  const items = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const indexToRemove = 2;
  
  const filtered = [
    ...items.slice(0, indexToRemove),
    ...items.slice(indexToRemove + 1)
  ];
  
  const output = document.getElementById('practical-output');
  output.textContent = 
    'Remove element at index 2:\\n\\n' +
    'Original: [' + items.join(', ') + ']\\n\\n' +
    'const filtered = [\\n' +
    '  ...items.slice(0, 2),\\n' +
    '  ...items.slice(3)\\n' +
    ']\\n\\n' +
    'Result: [' + filtered.join(', ') + ']\\n\\n' +
    '✅ Immutable removal!';
  log('✅ Element removed: ' + items[indexToRemove]);
});

document.getElementById('btn-insert').addEventListener('click', () => {
  const items = ['apple', 'banana', 'date'];
  const indexToInsert = 2;
  const newItem = 'cherry';
  
  const inserted = [
    ...items.slice(0, indexToInsert),
    newItem,
    ...items.slice(indexToInsert)
  ];
  
  const output = document.getElementById('practical-output');
  output.textContent = 
    'Insert "cherry" at index 2:\\n\\n' +
    'Original: [' + items.join(', ') + ']\\n\\n' +
    'const inserted = [\\n' +
    '  ...items.slice(0, 2),\\n' +
    '  "cherry",\\n' +
    '  ...items.slice(2)\\n' +
    ']\\n\\n' +
    'Result: [' + inserted.join(', ') + ']\\n\\n' +
    '✅ Immutable insertion!';
  log('✅ Element inserted: ' + newItem);
});

document.getElementById('btn-clone').addEventListener('click', () => {
  const original = {
    name: 'Alice',
    scores: [85, 90, 95]
  };
  
  const shallow = { ...original };
  shallow.scores.push(100);
  
  const output = document.getElementById('practical-output');
  output.textContent = 
    'Shallow Copy Issue:\\n\\n' +
    'const original = { name: "Alice", scores: [85, 90, 95] }\\n' +
    'const shallow = { ...original }\\n' +
    'shallow.scores.push(100)\\n\\n' +
    'original.scores: [' + original.scores.join(', ') + ']  ⚠️ Modified!\\n' +
    'shallow.scores:  [' + shallow.scores.join(', ') + ']\\n\\n' +
    '⚠️ Spread creates shallow copy!\\n' +
    '💡 Use JSON.parse(JSON.stringify()) for deep copy';
  log('⚠️ Shallow copy - nested arrays/objects are shared');
});

log('🚀 Spread Operator module loaded!');`,
  },


  /* ══════════════════════════════════════════════
     BATCH 5: ASYNCHRONOUS JAVASCRIPT (5 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "setTimeout",
    description: "setTimeout() — execute code after a delay",
    html: `<div class="container">
  <h1>🔷 setTimeout()</h1>
  <p class="subtitle">Execute code after a delay</p>

  <div class="section">
    <h2>1. Basic Delay</h2>
    <div class="btn-group">
      <button id="btn-delay-1s">Delay 1 Second</button>
      <button id="btn-delay-3s">Delay 3 Seconds</button>
      <button id="btn-immediate">Immediate (0ms)</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Countdown Timer</h2>
    <button id="btn-countdown">Start Countdown (5s)</button>
    <button id="btn-stop-countdown">Stop Countdown</button>
    <div id="countdown-display" class="timer-display">5</div>
    <div id="countdown-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Clear Timeout</h2>
    <button id="btn-schedule">Schedule Message (5s)</button>
    <button id="btn-cancel">Cancel Scheduled</button>
    <div id="clear-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Multiple Timeouts</h2>
    <button id="btn-sequence">Sequential Messages</button>
    <div id="sequence-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.timer-display {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  font-size: 4rem;
  font-weight: 900;
  text-align: center;
  padding: 2rem;
  border-radius: 16px;
  margin: 1rem 0;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// setTimeout()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Delay
document.getElementById('btn-delay-1s').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Waiting 1 second...';
  log('⏳ setTimeout scheduled for 1 second');
  
  setTimeout(() => {
    output.textContent = '✅ 1 second has passed!\\n\\nsetTimeout(() => { ... }, 1000)';
    log('✅ setTimeout callback executed after 1s');
  }, 1000);
});

document.getElementById('btn-delay-3s').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Waiting 3 seconds...';
  log('⏳ setTimeout scheduled for 3 seconds');
  
  setTimeout(() => {
    output.textContent = '✅ 3 seconds have passed!\\n\\nsetTimeout(() => { ... }, 3000)';
    log('✅ setTimeout callback executed after 3s');
  }, 3000);
});

document.getElementById('btn-immediate').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  output.textContent = 'Scheduling with 0ms delay...';
  log('⏳ setTimeout with 0ms delay');
  
  setTimeout(() => {
    output.textContent = '✅ Executed after current call stack!\\n\\nsetTimeout(() => { ... }, 0)\\n\\nRuns after synchronous code completes.';
    log('✅ 0ms timeout executed (after call stack)');
  }, 0);
  
  output.textContent += '\\nThis line runs first!';
});

// 2. Countdown Timer
let countdownInterval = null;

document.getElementById('btn-countdown').addEventListener('click', () => {
  const display = document.getElementById('countdown-display');
  const output = document.getElementById('countdown-output');
  let count = 5;
  
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  
  display.textContent = count;
  output.textContent = '⏳ Countdown started...';
  log('⏳ Countdown started from 5');
  
  countdownInterval = setInterval(() => {
    count--;
    display.textContent = count;
    
    if (count === 0) {
      clearInterval(countdownInterval);
      output.textContent = '🚀 Countdown complete!';
      log('🚀 Countdown finished');
      setTimeout(() => {
        display.textContent = '5';
      }, 1000);
    }
  }, 1000);
});

document.getElementById('btn-stop-countdown').addEventListener('click', () => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
    const output = document.getElementById('countdown-output');
    output.textContent = '⏸️ Countdown stopped!';
    log('⏸️ Countdown stopped');
  }
});

// 3. Clear Timeout
let scheduledTimeout = null;

document.getElementById('btn-schedule').addEventListener('click', () => {
  const output = document.getElementById('clear-output');
  output.textContent = '⏳ Message scheduled for 5 seconds...\\n\\nClick "Cancel" to prevent it!';
  log('⏳ Message scheduled for 5s');
  
  scheduledTimeout = setTimeout(() => {
    output.textContent = '✅ Scheduled message executed!\\n\\nYou did not cancel it.';
    log('✅ Scheduled message executed');
    scheduledTimeout = null;
  }, 5000);
});

document.getElementById('btn-cancel').addEventListener('click', () => {
  if (scheduledTimeout) {
    clearTimeout(scheduledTimeout);
    scheduledTimeout = null;
    const output = document.getElementById('clear-output');
    output.textContent = '❌ Scheduled message cancelled!\\n\\nclearTimeout(timeoutId)';
    log('❌ Timeout cancelled');
  } else {
    const output = document.getElementById('clear-output');
    output.textContent = '⚠️ No scheduled message to cancel!';
  }
});

// 4. Multiple Timeouts
document.getElementById('btn-sequence').addEventListener('click', () => {
  const output = document.getElementById('sequence-output');
  output.textContent = 'Starting sequence...\\n';
  log('⏳ Sequential timeouts started');
  
  setTimeout(() => {
    output.textContent += '✅ Message 1 (after 1s)\\n';
    log('✅ Message 1 executed');
  }, 1000);
  
  setTimeout(() => {
    output.textContent += '✅ Message 2 (after 2s)\\n';
    log('✅ Message 2 executed');
  }, 2000);
  
  setTimeout(() => {
    output.textContent += '✅ Message 3 (after 3s)\\n';
    log('✅ Message 3 executed');
  }, 3000);
  
  setTimeout(() => {
    output.textContent += '✅ Message 4 (after 4s)\\n\\n🎉 Sequence complete!';
    log('✅ Message 4 executed - sequence complete');
  }, 4000);
});

log('🚀 setTimeout() module loaded!');`,
  },

  {
    topic: "setInterval",
    description: "setInterval() — repeatedly execute code at timed intervals",
    html: `<div class="container">
  <h1>🔷 setInterval()</h1>
  <p class="subtitle">Repeatedly execute code at timed intervals</p>

  <div class="section">
    <h2>1. Basic Interval</h2>
    <button id="btn-start-basic">Start Interval</button>
    <button id="btn-stop-basic">Stop Interval</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Live Clock</h2>
    <button id="btn-start-clock">Start Clock</button>
    <button id="btn-stop-clock">Stop Clock</button>
    <div id="clock-display" class="timer-display">--:--:--</div>
  </div>

  <div class="section">
    <h2>3. Progress Bar</h2>
    <button id="btn-start-progress">Start Progress</button>
    <button id="btn-reset-progress">Reset</button>
    <div class="progress-container">
      <div id="progress-bar" class="progress-bar"></div>
    </div>
    <div id="progress-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Auto-Stop Interval</h2>
    <button id="btn-auto-stop">Start (Auto-stops at 10)</button>
    <div id="auto-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.timer-display {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  padding: 1.5rem;
  border-radius: 16px;
  margin: 1rem 0;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
  font-family: 'Courier New', monospace;
}
.progress-container {
  background: #e5e7eb;
  border-radius: 10px;
  height: 30px;
  overflow: hidden;
  margin: 1rem 0;
}
.progress-bar {
  background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%);
  height: 100%;
  width: 0%;
  transition: width 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// setInterval()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Interval
let basicInterval = null;
let basicCount = 0;

document.getElementById('btn-start-basic').addEventListener('click', () => {
  if (basicInterval) return;
  
  basicCount = 0;
  const output = document.getElementById('basic-output');
  output.textContent = 'Interval started...\\n';
  log('⏳ Basic interval started');
  
  basicInterval = setInterval(() => {
    basicCount++;
    output.textContent += 'Tick ' + basicCount + ' (every 1 second)\\n';
    log('⏰ Tick ' + basicCount);
  }, 1000);
});

document.getElementById('btn-stop-basic').addEventListener('click', () => {
  if (basicInterval) {
    clearInterval(basicInterval);
    basicInterval = null;
    const output = document.getElementById('basic-output');
    output.textContent += '\\n⏸️ Interval stopped at tick ' + basicCount;
    log('⏸️ Basic interval stopped');
  }
});

// 2. Live Clock
let clockInterval = null;

document.getElementById('btn-start-clock').addEventListener('click', () => {
  if (clockInterval) return;
  
  const display = document.getElementById('clock-display');
  log('⏰ Clock started');
  
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    display.textContent = hours + ':' + minutes + ':' + seconds;
  }
  
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
});

document.getElementById('btn-stop-clock').addEventListener('click', () => {
  if (clockInterval) {
    clearInterval(clockInterval);
    clockInterval = null;
    document.getElementById('clock-display').textContent = '--:--:--';
    log('⏸️ Clock stopped');
  }
});

// 3. Progress Bar
let progressInterval = null;
let progress = 0;

document.getElementById('btn-start-progress').addEventListener('click', () => {
  if (progressInterval) return;
  
  const bar = document.getElementById('progress-bar');
  const output = document.getElementById('progress-output');
  progress = 0;
  log('⏳ Progress started');
  
  progressInterval = setInterval(() => {
    progress += 5;
    bar.style.width = progress + '%';
    bar.textContent = progress + '%';
    output.textContent = 'Progress: ' + progress + '%';
    
    if (progress >= 100) {
      clearInterval(progressInterval);
      progressInterval = null;
      output.textContent = '✅ Progress complete!';
      log('✅ Progress reached 100%');
    }
  }, 200);
});

document.getElementById('btn-reset-progress').addEventListener('click', () => {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  progress = 0;
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('progress-bar').textContent = '';
  document.getElementById('progress-output').textContent = 'Progress reset to 0%';
  log('🔄 Progress reset');
});

// 4. Auto-Stop Interval
document.getElementById('btn-auto-stop').addEventListener('click', () => {
  const output = document.getElementById('auto-output');
  let count = 0;
  output.textContent = 'Count: ' + count + '\\n';
  log('⏳ Auto-stop interval started');
  
  const interval = setInterval(() => {
    count++;
    output.textContent += 'Count: ' + count + '\\n';
    log('⏰ Count: ' + count);
    
    if (count >= 10) {
      clearInterval(interval);
      output.textContent += '\\n✅ Auto-stopped at 10!';
      log('✅ Auto-stopped at count 10');
    }
  }, 500);
});

log('🚀 setInterval() module loaded!');`,
  },

  {
    topic: "callback-async",
    description: "Callback-based async pattern — handling async with nested callbacks",
    html: `<div class="container">
  <h1>🔷 Async Callbacks</h1>
  <p class="subtitle">Handling async operations with nested callbacks</p>

  <div class="section">
    <h2>1. Simple Async Callback</h2>
    <button id="btn-fetch-user">Fetch User Data</button>
    <div id="simple-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Callback Hell (Pyramid of Doom)</h2>
    <button id="btn-callback-hell">Show Callback Hell</button>
    <div id="hell-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Error Handling</h2>
    <button id="btn-success">Success Case</button>
    <button id="btn-error">Error Case</button>
    <div id="error-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Sequential Operations</h2>
    <button id="btn-sequential">Run Sequential Tasks</button>
    <div id="sequential-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Async Callbacks
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Simple Async Callback
function fetchUserData(userId, callback) {
  const output = document.getElementById('simple-output');
  output.textContent = '⏳ Fetching user data...';
  log('⏳ Fetching user ' + userId);
  
  setTimeout(() => {
    const userData = {
      id: userId,
      name: 'User ' + userId,
      email: 'user' + userId + '@example.com',
      role: 'member'
    };
    callback(userData);
  }, 1500);
}

document.getElementById('btn-fetch-user').addEventListener('click', () => {
  fetchUserData(42, (data) => {
    const output = document.getElementById('simple-output');
    output.textContent = 
      '✅ User data received:\\n\\n' +
      JSON.stringify(data, null, 2);
    log('✅ User data received: ' + data.name);
  });
});

// 2. Callback Hell
document.getElementById('btn-callback-hell').addEventListener('click', () => {
  const output = document.getElementById('hell-output');
  output.textContent = '⏳ Starting nested callbacks...\\n';
  log('⏳ Callback hell demonstration started');
  
  setTimeout(() => {
    output.textContent += '✅ Step 1 complete\\n';
    log('✅ Step 1');
    
    setTimeout(() => {
      output.textContent += '  ✅ Step 2 complete\\n';
      log('✅ Step 2');
      
      setTimeout(() => {
        output.textContent += '    ✅ Step 3 complete\\n';
        log('✅ Step 3');
        
        setTimeout(() => {
          output.textContent += '      ✅ Step 4 complete\\n\\n';
          output.textContent += '⚠️ This is "Callback Hell"!\\n';
          output.textContent += 'Hard to read and maintain.';
          log('⚠️ Callback hell completed');
        }, 500);
      }, 500);
    }, 500);
  }, 500);
});

// 3. Error Handling
function asyncOperation(shouldSucceed, onSuccess, onError) {
  const output = document.getElementById('error-output');
  output.textContent = '⏳ Processing...';
  log('⏳ Async operation started');
  
  setTimeout(() => {
    if (shouldSucceed) {
      onSuccess({ status: 'success', data: 'Operation completed!' });
    } else {
      onError({ status: 'error', message: 'Something went wrong!' });
    }
  }, 1500);
}

document.getElementById('btn-success').addEventListener('click', () => {
  asyncOperation(
    true,
    (result) => {
      const output = document.getElementById('error-output');
      output.textContent = 
        '✅ Success Callback:\\n\\n' +
        JSON.stringify(result, null, 2);
      log('✅ Success: ' + result.data);
    },
    (error) => {
      const output = document.getElementById('error-output');
      output.textContent = 
        '❌ Error Callback:\\n\\n' +
        JSON.stringify(error, null, 2);
      log('❌ Error: ' + error.message);
    }
  );
});

document.getElementById('btn-error').addEventListener('click', () => {
  asyncOperation(
    false,
    (result) => {
      const output = document.getElementById('error-output');
      output.textContent = 
        '✅ Success Callback:\\n\\n' +
        JSON.stringify(result, null, 2);
      log('✅ Success: ' + result.data);
    },
    (error) => {
      const output = document.getElementById('error-output');
      output.textContent = 
        '❌ Error Callback:\\n\\n' +
        JSON.stringify(error, null, 2);
      log('❌ Error: ' + error.message);
    }
  );
});

// 4. Sequential Operations
function task1(callback) {
  setTimeout(() => {
    callback('Task 1 result');
  }, 1000);
}

function task2(data, callback) {
  setTimeout(() => {
    callback(data + ' → Task 2 result');
  }, 1000);
}

function task3(data, callback) {
  setTimeout(() => {
    callback(data + ' → Task 3 result');
  }, 1000);
}

document.getElementById('btn-sequential').addEventListener('click', () => {
  const output = document.getElementById('sequential-output');
  output.textContent = '⏳ Starting sequential tasks...\\n';
  log('⏳ Sequential tasks started');
  
  task1((result1) => {
    output.textContent += '✅ ' + result1 + '\\n';
    log('✅ Task 1: ' + result1);
    
    task2(result1, (result2) => {
      output.textContent += '✅ ' + result2 + '\\n';
      log('✅ Task 2: ' + result2);
      
      task3(result2, (result3) => {
        output.textContent += '✅ ' + result3 + '\\n\\n';
        output.textContent += '🎉 All tasks complete!';
        log('✅ Task 3: ' + result3);
        log('🎉 All sequential tasks complete');
      });
    });
  });
});

log('🚀 Async Callbacks module loaded!');`,
  },

  {
    topic: "promises",
    description: "Promises — represent a future value; .then(), .catch(), .finally()",
    html: `<div class="container">
  <h1>🔷 Promises</h1>
  <p class="subtitle">Represent a future value with .then(), .catch(), .finally()</p>

  <div class="section">
    <h2>1. Basic Promise</h2>
    <div class="btn-group">
      <button id="btn-resolve">Resolved Promise</button>
      <button id="btn-reject">Rejected Promise</button>
      <button id="btn-pending">Pending Promise</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Promise Chaining</h2>
    <button id="btn-chain">Chain Promises</button>
    <div id="chain-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Error Handling</h2>
    <button id="btn-catch">Test .catch()</button>
    <button id="btn-finally">Test .finally()</button>
    <div id="error-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Promise.all() & Promise.race()</h2>
    <button id="btn-all">Promise.all()</button>
    <button id="btn-race">Promise.race()</button>
    <div id="multiple-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Promises
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Promise
document.getElementById('btn-resolve').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Creating resolved promise...';
  log('⏳ Resolved promise created');
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success! Promise resolved.');
    }, 1500);
  });
  
  promise.then((result) => {
    output.textContent = '✅ Promise Resolved:\\n\\n' + result;
    log('✅ Promise resolved: ' + result);
  });
});

document.getElementById('btn-reject').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Creating rejected promise...';
  log('⏳ Rejected promise created');
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error! Promise rejected.');
    }, 1500);
  });
  
  promise.catch((error) => {
    output.textContent = '❌ Promise Rejected:\\n\\n' + error;
    log('❌ Promise rejected: ' + error);
  });
});

document.getElementById('btn-pending').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Promise is pending...\\n\\nWaiting 3 seconds...';
  log('⏳ Promise pending');
  
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise completed after 3 seconds!');
    }, 3000);
  });
  
  promise.then((result) => {
    output.textContent = '✅ ' + result;
    log('✅ Promise completed');
  });
});

// 2. Promise Chaining
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' });
    }, 1000);
  });
}

function fetchPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Post 1', userId: user.id },
        { id: 2, title: 'Post 2', userId: user.id }
      ]);
    }, 1000);
  });
}

function fetchComments(posts) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { postId: 1, text: 'Great post!' },
        { postId: 2, text: 'Nice work!' }
      ]);
    }, 1000);
  });
}

document.getElementById('btn-chain').addEventListener('click', () => {
  const output = document.getElementById('chain-output');
  output.textContent = '⏳ Step 1: Fetching user...\\n';
  log('⏳ Promise chain started');
  
  fetchUser()
    .then((user) => {
      output.textContent += '✅ User: ' + user.name + '\\n';
      output.textContent += '⏳ Step 2: Fetching posts...\\n';
      log('✅ User fetched: ' + user.name);
      return fetchPosts(user);
    })
    .then((posts) => {
      output.textContent += '✅ Posts: ' + posts.length + ' posts\\n';
      output.textContent += '⏳ Step 3: Fetching comments...\\n';
      log('✅ Posts fetched: ' + posts.length);
      return fetchComments(posts);
    })
    .then((comments) => {
      output.textContent += '✅ Comments: ' + comments.length + ' comments\\n\\n';
      output.textContent += '🎉 All data fetched!';
      log('✅ Comments fetched: ' + comments.length);
      log('🎉 Promise chain complete');
    });
});

// 3. Error Handling
document.getElementById('btn-catch').addEventListener('click', () => {
  const output = document.getElementById('error-output');
  output.textContent = '⏳ Testing error handling...';
  log('⏳ Testing .catch()');
  
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Network error occurred!');
    }, 1500);
  })
  .then((result) => {
    output.textContent = '✅ Success: ' + result;
  })
  .catch((error) => {
    output.textContent = 
      '❌ Caught Error:\\n\\n' +
      error + '\\n\\n' +
      '.catch() handles rejected promises!';
    log('❌ Error caught: ' + error);
  });
});

document.getElementById('btn-finally').addEventListener('click', () => {
  const output = document.getElementById('error-output');
  output.textContent = '⏳ Testing .finally()...';
  log('⏳ Testing .finally()');
  
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operation complete!');
    }, 1500);
  })
  .then((result) => {
    output.textContent = '✅ Success: ' + result + '\\n';
    log('✅ Success: ' + result);
  })
  .catch((error) => {
    output.textContent = '❌ Error: ' + error + '\\n';
  })
  .finally(() => {
    output.textContent += '\\n🏁 .finally() always runs!\\n';
    output.textContent += 'Perfect for cleanup tasks.';
    log('🏁 .finally() executed');
  });
});

// 4. Promise.all() & Promise.race()
document.getElementById('btn-all').addEventListener('click', () => {
  const output = document.getElementById('multiple-output');
  output.textContent = '⏳ Running Promise.all()...\\n';
  log('⏳ Promise.all() started');
  
  const p1 = new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000));
  const p2 = new Promise(resolve => setTimeout(() => resolve('Task 2'), 2000));
  const p3 = new Promise(resolve => setTimeout(() => resolve('Task 3'), 1500));
  
  Promise.all([p1, p2, p3])
    .then((results) => {
      output.textContent += '✅ All promises resolved:\\n\\n';
      results.forEach((result, i) => {
        output.textContent += '  ' + (i + 1) + '. ' + result + '\\n';
      });
      output.textContent += '\\n💡 Promise.all() waits for ALL promises!';
      log('✅ Promise.all() complete: ' + results.join(', '));
    });
});

document.getElementById('btn-race').addEventListener('click', () => {
  const output = document.getElementById('multiple-output');
  output.textContent = '⏳ Running Promise.race()...\\n';
  log('⏳ Promise.race() started');
  
  const p1 = new Promise(resolve => setTimeout(() => resolve('Task 1 (3s)'), 3000));
  const p2 = new Promise(resolve => setTimeout(() => resolve('Task 2 (1s)'), 1000));
  const p3 = new Promise(resolve => setTimeout(() => resolve('Task 3 (2s)'), 2000));
  
  Promise.race([p1, p2, p3])
    .then((result) => {
      output.textContent += '✅ First promise resolved:\\n\\n';
      output.textContent += '  Winner: ' + result + '\\n\\n';
      output.textContent += '💡 Promise.race() returns the FIRST to complete!';
      log('✅ Promise.race() winner: ' + result);
    });
});

log('🚀 Promises module loaded!');`,
  },

  {
    topic: "async-await",
    description: "async/await — write async code that reads like synchronous code",
    html: `<div class="container">
  <h1>🔷 async/await</h1>
  <p class="subtitle">Write async code that reads like synchronous code</p>

  <div class="section">
    <h2>1. Basic async/await</h2>
    <div class="btn-group">
      <button id="btn-basic-async">Basic Async Function</button>
      <button id="btn-await">Await Promise</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Sequential vs Parallel</h2>
    <button id="btn-sequential">Sequential (Slow)</button>
    <button id="btn-parallel">Parallel (Fast)</button>
    <div id="timing-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Error Handling (try/catch)</h2>
    <button id="btn-try-success">Success Case</button>
    <button id="btn-try-error">Error Case</button>
    <div id="error-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Real-World Example</h2>
    <button id="btn-fetch-data">Fetch User Dashboard</button>
    <div id="dashboard-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// async/await
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Helper function to simulate async operation
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

// 1. Basic async/await
document.getElementById('btn-basic-async').addEventListener('click', async () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Running async function...';
  log('⏳ Async function started');
  
  async function greet() {
    return 'Hello from async function!';
  }
  
  const result = await greet();
  output.textContent = 
    'async function greet() {\\n' +
    '  return "Hello from async function!";\\n' +
    '}\\n\\n' +
    'Result: ' + result + '\\n\\n' +
    '✅ async functions always return a Promise!';
  log('✅ Async function result: ' + result);
});

document.getElementById('btn-await').addEventListener('click', async () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Awaiting promise (2 seconds)...';
  log('⏳ Awaiting promise');
  
  const result = await delay(2000, 'Promise resolved!');
  
  output.textContent = 
    'const result = await delay(2000, "Promise resolved!");\\n\\n' +
    'Result: ' + result + '\\n\\n' +
    '✅ await pauses execution until promise resolves!';
  log('✅ Promise resolved: ' + result);
});

// 2. Sequential vs Parallel
document.getElementById('btn-sequential').addEventListener('click', async () => {
  const output = document.getElementById('timing-output');
  output.textContent = '⏳ Running sequentially...\\n';
  log('⏳ Sequential execution started');
  
  const start = Date.now();
  
  const result1 = await delay(1000, 'Task 1');
  output.textContent += '✅ ' + result1 + ' (1s)\\n';
  
  const result2 = await delay(1000, 'Task 2');
  output.textContent += '✅ ' + result2 + ' (1s)\\n';
  
  const result3 = await delay(1000, 'Task 3');
  output.textContent += '✅ ' + result3 + ' (1s)\\n';
  
  const elapsed = Date.now() - start;
  output.textContent += '\\n⏱️ Total time: ' + elapsed + 'ms\\n';
  output.textContent += '⚠️ Each await waits for previous to finish!';
  log('✅ Sequential complete: ' + elapsed + 'ms');
});

document.getElementById('btn-parallel').addEventListener('click', async () => {
  const output = document.getElementById('timing-output');
  output.textContent = '⏳ Running in parallel...\\n';
  log('⏳ Parallel execution started');
  
  const start = Date.now();
  
  const [result1, result2, result3] = await Promise.all([
    delay(1000, 'Task 1'),
    delay(1000, 'Task 2'),
    delay(1000, 'Task 3')
  ]);
  
  output.textContent += '✅ ' + result1 + '\\n';
  output.textContent += '✅ ' + result2 + '\\n';
  output.textContent += '✅ ' + result3 + '\\n';
  
  const elapsed = Date.now() - start;
  output.textContent += '\\n⏱️ Total time: ' + elapsed + 'ms\\n';
  output.textContent += '✅ Promise.all() runs tasks in parallel!';
  log('✅ Parallel complete: ' + elapsed + 'ms');
});

// 3. Error Handling
async function riskyOperation(shouldFail) {
  await delay(1500, null);
  if (shouldFail) {
    throw new Error('Operation failed!');
  }
  return 'Operation succeeded!';
}

document.getElementById('btn-try-success').addEventListener('click', async () => {
  const output = document.getElementById('error-output');
  output.textContent = '⏳ Running operation...';
  log('⏳ Try/catch success case');
  
  try {
    const result = await riskyOperation(false);
    output.textContent = 
      '✅ Success:\\n\\n' +
      result + '\\n\\n' +
      'try {\\n' +
      '  const result = await riskyOperation(false);\\n' +
      '  // Success!\\n' +
      '} catch (error) {\\n' +
      '  // Not executed\\n' +
      '}';
    log('✅ Operation succeeded');
  } catch (error) {
    output.textContent = '❌ Error: ' + error.message;
  }
});

document.getElementById('btn-try-error').addEventListener('click', async () => {
  const output = document.getElementById('error-output');
  output.textContent = '⏳ Running operation...';
  log('⏳ Try/catch error case');
  
  try {
    const result = await riskyOperation(true);
    output.textContent = '✅ Success: ' + result;
  } catch (error) {
    output.textContent = 
      '❌ Caught Error:\\n\\n' +
      error.message + '\\n\\n' +
      'try {\\n' +
      '  const result = await riskyOperation(true);\\n' +
      '} catch (error) {\\n' +
      '  // Error caught here!\\n' +
      '  console.error(error.message);\\n' +
      '}';
    log('❌ Error caught: ' + error.message);
  }
});

// 4. Real-World Example
async function fetchUserDashboard(userId) {
  const output = document.getElementById('dashboard-output');
  
  try {
    output.textContent = '⏳ Fetching user data...\\n';
    const user = await delay(1000, { id: userId, name: 'Alice', email: 'alice@example.com' });
    output.textContent += '✅ User loaded\\n';
    log('✅ User loaded: ' + user.name);
    
    output.textContent += '⏳ Fetching posts...\\n';
    const posts = await delay(1000, [
      { id: 1, title: 'First Post' },
      { id: 2, title: 'Second Post' }
    ]);
    output.textContent += '✅ Posts loaded (' + posts.length + ')\\n';
    log('✅ Posts loaded: ' + posts.length);
    
    output.textContent += '⏳ Fetching notifications...\\n';
    const notifications = await delay(1000, [
      { id: 1, message: 'New follower' },
      { id: 2, message: 'Post liked' }
    ]);
    output.textContent += '✅ Notifications loaded (' + notifications.length + ')\\n\\n';
    log('✅ Notifications loaded: ' + notifications.length);
    
    output.textContent += '🎉 Dashboard Ready!\\n\\n';
    output.textContent += 'User: ' + user.name + '\\n';
    output.textContent += 'Posts: ' + posts.length + '\\n';
    output.textContent += 'Notifications: ' + notifications.length;
    log('🎉 Dashboard complete');
    
  } catch (error) {
    output.textContent = '❌ Error loading dashboard: ' + error.message;
    log('❌ Dashboard error: ' + error.message);
  }
}

document.getElementById('btn-fetch-data').addEventListener('click', () => {
  fetchUserDashboard(1);
});

log('🚀 async/await module loaded!');`,
  },


  /* ══════════════════════════════════════════════
     BATCH 6: DOM MANIPULATION + EVENTS (10 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "querySelectorAll",
    description: "querySelectorAll() — select all elements matching a CSS selector",
    html: `<div class="container">
  <h1>🔷 querySelectorAll()</h1>
  <p class="subtitle">Select all elements matching a CSS selector</p>

  <div class="section">
    <h2>1. Select by Class</h2>
    <button id="btn-select-class">Select .item</button>
    <div class="items-container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
      <div class="item">Item 4</div>
    </div>
    <div id="class-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Select by Attribute</h2>
    <button id="btn-select-attr">Select [data-active]</button>
    <div class="items-container">
      <div class="box" data-active="true">Active 1</div>
      <div class="box">Inactive</div>
      <div class="box" data-active="true">Active 2</div>
    </div>
    <div id="attr-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Complex Selectors</h2>
    <button id="btn-complex">Select Complex</button>
    <div id="complex-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Iterate & Modify</h2>
    <button id="btn-iterate">Style All Items</button>
    <button id="btn-reset">Reset Styles</button>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.75rem;
  margin: 1rem 0;
}
.item, .box {
  background: #f3f4f6;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: #374151;
  transition: all 0.3s;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// querySelectorAll()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Select by Class
document.getElementById('btn-select-class').addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  const output = document.getElementById('class-output');
  
  output.textContent = 
    'document.querySelectorAll(".item")\\n\\n' +
    'Found ' + items.length + ' elements:\\n';
  
  items.forEach((item, index) => {
    output.textContent += '  [' + index + '] ' + item.textContent + '\\n';
  });
  
  output.textContent += '\\n✅ Returns a NodeList (array-like)';
  log('✅ Selected ' + items.length + ' items by class');
});

// 2. Select by Attribute
document.getElementById('btn-select-attr').addEventListener('click', () => {
  const activeBoxes = document.querySelectorAll('[data-active="true"]');
  const output = document.getElementById('attr-output');
  
  output.textContent = 
    'document.querySelectorAll(\'[data-active="true"]\')\\n\\n' +
    'Found ' + activeBoxes.length + ' active elements:\\n';
  
  activeBoxes.forEach((box, index) => {
    output.textContent += '  [' + index + '] ' + box.textContent + '\\n';
    box.style.background = '#8b5cf6';
    box.style.color = 'white';
  });
  
  output.textContent += '\\n✅ Selected and styled active boxes!';
  log('✅ Selected ' + activeBoxes.length + ' elements by attribute');
});

// 3. Complex Selectors
document.getElementById('btn-complex').addEventListener('click', () => {
  const allDivs = document.querySelectorAll('div');
  const sectionDivs = document.querySelectorAll('.section > div');
  const notItems = document.querySelectorAll('div:not(.item)');
  
  const output = document.getElementById('complex-output');
  output.textContent = 
    'Complex Selectors:\\n\\n' +
    'querySelectorAll("div")\\n' +
    '  → ' + allDivs.length + ' total divs\\n\\n' +
    'querySelectorAll(".section > div")\\n' +
    '  → ' + sectionDivs.length + ' direct children\\n\\n' +
    'querySelectorAll("div:not(.item)")\\n' +
    '  → ' + notItems.length + ' divs (excluding .item)\\n\\n' +
    '✅ Supports all CSS selectors!';
  
  log('✅ Complex selectors: ' + allDivs.length + ' divs total');
});

// 4. Iterate & Modify
document.getElementById('btn-iterate').addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  const colors = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];
  
  items.forEach((item, index) => {
    item.style.background = colors[index % colors.length];
    item.style.color = 'white';
    item.style.transform = 'scale(1.05)';
  });
  
  log('✅ Styled ' + items.length + ' items');
});

document.getElementById('btn-reset').addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  
  items.forEach(item => {
    item.style.background = '';
    item.style.color = '';
    item.style.transform = '';
  });
  
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    box.style.background = '';
    box.style.color = '';
  });
  
  log('🔄 Styles reset');
});

log('🚀 querySelectorAll() module loaded!');`,
  },

  {
    topic: "classlist",
    description: "classList — add, remove, toggle, and check CSS classes dynamically",
    html: `<div class="container">
  <h1>🔷 classList</h1>
  <p class="subtitle">Add, remove, toggle, and check CSS classes dynamically</p>

  <div class="section">
    <h2>1. Basic Methods</h2>
    <div class="demo-box" id="demo-box">Demo Box</div>
    <div class="btn-group">
      <button id="btn-add">Add Class</button>
      <button id="btn-remove">Remove Class</button>
      <button id="btn-toggle">Toggle Class</button>
      <button id="btn-contains">Check Contains</button>
    </div>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multiple Classes</h2>
    <div class="demo-box" id="multi-box">Multi Box</div>
    <button id="btn-add-multi">Add Multiple</button>
    <button id="btn-remove-multi">Remove Multiple</button>
    <button id="btn-replace">Replace Class</button>
    <div id="multi-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Interactive Toggle</h2>
    <div class="card" id="toggle-card">
      <h3>Interactive Card</h3>
      <p>Click the button to toggle active state</p>
    </div>
    <button id="btn-toggle-card">Toggle Active</button>
    <div id="toggle-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.demo-box {
  background: #f3f4f6;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  color: #374151;
  margin-bottom: 1rem;
  transition: all 0.3s;
}
.demo-box.highlight {
  background: #8b5cf6;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}
.demo-box.large {
  font-size: 1.5rem;
  padding: 3rem;
}
.demo-box.rounded {
  border-radius: 50px;
}
.card {
  background: white;
  border: 2px solid #e5e7eb;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: all 0.3s;
}
.card h3 {
  color: #374151;
  margin-bottom: 0.5rem;
}
.card p {
  color: #6b7280;
}
.card.active {
  border-color: #8b5cf6;
  background: linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
}
.card.active h3 {
  color: #8b5cf6;
}
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// classList
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Methods
const demoBox = document.getElementById('demo-box');

document.getElementById('btn-add').addEventListener('click', () => {
  demoBox.classList.add('highlight');
  const output = document.getElementById('basic-output');
  output.textContent = 
    'demoBox.classList.add("highlight")\\n\\n' +
    'Classes: ' + demoBox.className + '\\n\\n' +
    '✅ Class added!';
  log('✅ Added class: highlight');
});

document.getElementById('btn-remove').addEventListener('click', () => {
  demoBox.classList.remove('highlight');
  const output = document.getElementById('basic-output');
  output.textContent = 
    'demoBox.classList.remove("highlight")\\n\\n' +
    'Classes: ' + demoBox.className + '\\n\\n' +
    '✅ Class removed!';
  log('✅ Removed class: highlight');
});

document.getElementById('btn-toggle').addEventListener('click', () => {
  const wasAdded = demoBox.classList.toggle('highlight');
  const output = document.getElementById('basic-output');
  output.textContent = 
    'demoBox.classList.toggle("highlight")\\n\\n' +
    'Result: ' + (wasAdded ? 'Added' : 'Removed') + '\\n' +
    'Classes: ' + demoBox.className + '\\n\\n' +
    '✅ Toggle returns true if added, false if removed!';
  log('✅ Toggled class: ' + (wasAdded ? 'added' : 'removed'));
});

document.getElementById('btn-contains').addEventListener('click', () => {
  const hasHighlight = demoBox.classList.contains('highlight');
  const output = document.getElementById('basic-output');
  output.textContent = 
    'demoBox.classList.contains("highlight")\\n\\n' +
    'Result: ' + hasHighlight + '\\n' +
    'Classes: ' + demoBox.className + '\\n\\n' +
    '✅ Returns boolean!';
  log('✅ Contains check: ' + hasHighlight);
});

// 2. Multiple Classes
const multiBox = document.getElementById('multi-box');

document.getElementById('btn-add-multi').addEventListener('click', () => {
  multiBox.classList.add('highlight', 'large', 'rounded');
  const output = document.getElementById('multi-output');
  output.textContent = 
    'multiBox.classList.add("highlight", "large", "rounded")\\n\\n' +
    'Classes: ' + multiBox.className + '\\n\\n' +
    '✅ Multiple classes added at once!';
  log('✅ Added multiple classes');
});

document.getElementById('btn-remove-multi').addEventListener('click', () => {
  multiBox.classList.remove('highlight', 'large', 'rounded');
  const output = document.getElementById('multi-output');
  output.textContent = 
    'multiBox.classList.remove("highlight", "large", "rounded")\\n\\n' +
    'Classes: ' + multiBox.className + '\\n\\n' +
    '✅ Multiple classes removed at once!';
  log('✅ Removed multiple classes');
});

document.getElementById('btn-replace').addEventListener('click', () => {
  multiBox.classList.add('highlight');
  multiBox.classList.replace('highlight', 'large');
  const output = document.getElementById('multi-output');
  output.textContent = 
    'multiBox.classList.replace("highlight", "large")\\n\\n' +
    'Classes: ' + multiBox.className + '\\n\\n' +
    '✅ Replaced one class with another!';
  log('✅ Replaced class: highlight → large');
});

// 3. Interactive Toggle
const toggleCard = document.getElementById('toggle-card');

document.getElementById('btn-toggle-card').addEventListener('click', () => {
  const isActive = toggleCard.classList.toggle('active');
  const output = document.getElementById('toggle-output');
  output.textContent = 
    'toggleCard.classList.toggle("active")\\n\\n' +
    'State: ' + (isActive ? 'ACTIVE' : 'INACTIVE') + '\\n' +
    'Classes: ' + toggleCard.className + '\\n\\n' +
    (isActive ? '✅ Card activated!' : '⏸️ Card deactivated!');
  log('✅ Card toggled: ' + (isActive ? 'active' : 'inactive'));
});

log('🚀 classList module loaded!');`,
  },

  {
    topic: "createElement",
    description: "createElement() — create new HTML elements from JavaScript",
    html: `<div class="container">
  <h1>🔷 createElement()</h1>
  <p class="subtitle">Create new HTML elements from JavaScript</p>

  <div class="section">
    <h2>1. Create Simple Elements</h2>
    <button id="btn-create-div">Create Div</button>
    <button id="btn-create-button">Create Button</button>
    <button id="btn-create-input">Create Input</button>
    <div id="simple-container" class="element-container"></div>
  </div>

  <div class="section">
    <h2>2. Create with Content</h2>
    <button id="btn-create-card">Create Card</button>
    <div id="card-container" class="element-container"></div>
  </div>

  <div class="section">
    <h2>3. Create List</h2>
    <button id="btn-create-list">Create Todo List</button>
    <div id="list-container" class="element-container"></div>
  </div>

  <div class="section">
    <h2>4. Dynamic Form</h2>
    <button id="btn-create-form">Create Form</button>
    <div id="form-container" class="element-container"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.element-container {
  min-height: 80px;
  margin-top: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 10px;
  border: 2px dashed #d1d5db;
}
.created-div {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.created-button {
  background: #ec4899;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 0.5rem;
}
.created-input {
  padding: 0.75rem;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  margin-top: 0.5rem;
}
.card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.card h3 {
  color: #8b5cf6;
  margin-bottom: 0.5rem;
}
.card p {
  color: #6b7280;
  line-height: 1.6;
}
.todo-list {
  list-style: none;
}
.todo-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  border-left: 4px solid #8b5cf6;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.todo-checkbox {
  width: 20px;
  height: 20px;
  accent-color: #8b5cf6;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  color: #374151;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9rem;
}
.form-group input:focus {
  outline: none;
  border-color: #8b5cf6;
}
.submit-btn {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// createElement()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Create Simple Elements
document.getElementById('btn-create-div').addEventListener('click', () => {
  const container = document.getElementById('simple-container');
  container.innerHTML = '';
  
  const div = document.createElement('div');
  div.className = 'created-div';
  div.textContent = 'I am a dynamically created div!';
  
  container.appendChild(div);
  log('✅ Created and appended div element');
});

document.getElementById('btn-create-button').addEventListener('click', () => {
  const container = document.getElementById('simple-container');
  container.innerHTML = '';
  
  const button = document.createElement('button');
  button.className = 'created-button';
  button.textContent = 'Click Me!';
  button.addEventListener('click', () => {
    alert('Button clicked!');
    log('🖱️ Created button was clicked');
  });
  
  container.appendChild(button);
  log('✅ Created button with event listener');
});

document.getElementById('btn-create-input').addEventListener('click', () => {
  const container = document.getElementById('simple-container');
  container.innerHTML = '';
  
  const input = document.createElement('input');
  input.className = 'created-input';
  input.type = 'text';
  input.placeholder = 'Type something...';
  input.addEventListener('input', (e) => {
    log('⌨️ Input value: ' + e.target.value);
  });
  
  container.appendChild(input);
  log('✅ Created input element');
});

// 2. Create with Content
document.getElementById('btn-create-card').addEventListener('click', () => {
  const container = document.getElementById('card-container');
  container.innerHTML = '';
  
  const card = document.createElement('div');
  card.className = 'card';
  
  const title = document.createElement('h3');
  title.textContent = 'Dynamic Card';
  
  const description = document.createElement('p');
  description.textContent = 'This card was created using createElement(). All elements were built programmatically!';
  
  card.appendChild(title);
  card.appendChild(description);
  container.appendChild(card);
  
    log('✅ Created card with nested elements');
});

// 3. Create List
document.getElementById('btn-create-list').addEventListener('click', () => {
  const container = document.getElementById('list-container');
  container.innerHTML = '';
  
  const ul = document.createElement('ul');
  ul.className = 'todo-list';
  
  const todos = ['Learn JavaScript', 'Build a project', 'Master DOM manipulation'];
  
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';
    checkbox.id = 'todo-' + index;
    
    const label = document.createElement('label');
    label.htmlFor = 'todo-' + index;
    label.textContent = todo;
    
    li.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
  });
  
  container.appendChild(ul);
  log('✅ Created todo list with ' + todos.length + ' items');
});

// 4. Dynamic Form
document.getElementById('btn-create-form').addEventListener('click', () => {
  const container = document.getElementById('form-container');
  container.innerHTML = '';
  
  const form = document.createElement('form');
  
  const fields = [
    { label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Password', type: 'password', placeholder: 'Enter password' }
  ];
  
  fields.forEach(field => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    
    const label = document.createElement('label');
    label.textContent = field.label;
    
    const input = document.createElement('input');
    input.type = field.type;
    input.placeholder = field.placeholder;
    input.required = true;
    
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    form.appendChild(formGroup);
  });
  
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'submit-btn';
  submitBtn.textContent = 'Submit Form';
  
  form.appendChild(submitBtn);
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted!');
    log('✅ Form submitted');
  });
  
  container.appendChild(form);
  log('✅ Created dynamic form with ' + fields.length + ' fields');
});

log('🚀 createElement() module loaded!');`,
  },

  {
    topic: "appendChild",
    description: "appendChild() — insert a node as the last child of an element",
    html: `<div class="container">
  <h1>🔷 appendChild()</h1>
  <p class="subtitle">Insert a node as the last child of an element</p>

  <div class="section">
    <h2>1. Basic Append</h2>
    <button id="btn-append-text">Append Text Node</button>
    <button id="btn-append-element">Append Element</button>
    <button id="btn-clear">Clear</button>
    <div id="basic-container" class="append-container"></div>
  </div>

  <div class="section">
    <h2>2. Build List Dynamically</h2>
    <input type="text" id="item-input" placeholder="Enter item name" />
    <button id="btn-add-item">Add Item</button>
    <ul id="dynamic-list" class="dynamic-list"></ul>
  </div>

  <div class="section">
    <h2>3. Move Elements</h2>
    <div class="columns">
      <div class="column">
        <h3>Column A</h3>
        <div id="column-a" class="column-content">
          <div class="movable-item" data-id="1">Item 1</div>
          <div class="movable-item" data-id="2">Item 2</div>
          <div class="movable-item" data-id="3">Item 3</div>
        </div>
      </div>
      <div class="column">
        <h3>Column B</h3>
        <div id="column-b" class="column-content"></div>
      </div>
    </div>
    <button id="btn-move">Move Item 2 to Column B</button>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
input[type="text"] {
  padding: 0.75rem;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  font-size: 0.9rem;
  width: calc(100% - 140px);
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
.append-container {
  min-height: 100px;
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
}
.appended-item {
  background: #8b5cf6;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.dynamic-list {
  list-style: none;
  margin-top: 1rem;
}
.list-item {
  background: white;
  border: 2px solid #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}
.list-item:hover {
  border-color: #8b5cf6;
  transform: translateX(5px);
}
.remove-btn {
  background: #ef4444;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  margin: 0;
}
.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
.column h3 {
  color: #374151;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  text-align: center;
}
.column-content {
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 10px;
  padding: 1rem;
  min-height: 150px;
}
.movable-item {
  background: #8b5cf6;
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;
  cursor: move;
  transition: all 0.3s;
}
.movable-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// appendChild()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Append
let appendCount = 0;

document.getElementById('btn-append-text').addEventListener('click', () => {
  const container = document.getElementById('basic-container');
  const textNode = document.createTextNode('Text node ' + (++appendCount) + ' ');
  container.appendChild(textNode);
  log('✅ Appended text node #' + appendCount);
});

document.getElementById('btn-append-element').addEventListener('click', () => {
  const container = document.getElementById('basic-container');
  const div = document.createElement('div');
  div.className = 'appended-item';
  div.textContent = 'Element ' + (++appendCount);
  container.appendChild(div);
  log('✅ Appended element #' + appendCount);
});

document.getElementById('btn-clear').addEventListener('click', () => {
  const container = document.getElementById('basic-container');
  container.innerHTML = '';
  appendCount = 0;
  log('🔄 Container cleared');
});

// 2. Build List Dynamically
document.getElementById('btn-add-item').addEventListener('click', () => {
  const input = document.getElementById('item-input');
  const list = document.getElementById('dynamic-list');
  const itemText = input.value.trim();
  
  if (!itemText) {
    alert('Please enter an item name');
    return;
  }
  
  const li = document.createElement('li');
  li.className = 'list-item';
  
  const span = document.createElement('span');
  span.textContent = itemText;
  
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    list.removeChild(li);
    log('🗑️ Removed item: ' + itemText);
  });
  
  li.appendChild(span);
  li.appendChild(removeBtn);
  list.appendChild(li);
  
  input.value = '';
  log('✅ Added item: ' + itemText);
});

// Allow Enter key to add item
document.getElementById('item-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('btn-add-item').click();
  }
});

// 3. Move Elements
document.getElementById('btn-move').addEventListener('click', () => {
  const columnA = document.getElementById('column-a');
  const columnB = document.getElementById('column-b');
  const item2 = columnA.querySelector('[data-id="2"]');
  
  if (item2 && item2.parentElement === columnA) {
    columnB.appendChild(item2);
    log('✅ Moved Item 2 from Column A to Column B');
  } else if (item2 && item2.parentElement === columnB) {
    columnA.appendChild(item2);
    log('✅ Moved Item 2 from Column B to Column A');
  }
});

log('🚀 appendChild() module loaded!');`,
  },

  {
    topic: "removeElement",
    description: "remove() — remove an element from the DOM",
    html: `<div class="container">
  <h1>🔷 remove()</h1>
  <p class="subtitle">Remove an element from the DOM</p>

  <div class="section">
    <h2>1. Remove Single Element</h2>
    <div id="removable-items">
      <div class="removable-box" id="box-1">Box 1 <button class="remove-self">Remove</button></div>
      <div class="removable-box" id="box-2">Box 2 <button class="remove-self">Remove</button></div>
      <div class="removable-box" id="box-3">Box 3 <button class="remove-self">Remove</button></div>
    </div>
    <button id="btn-restore">Restore All</button>
  </div>

  <div class="section">
    <h2>2. Remove by Selector</h2>
    <div id="selector-items">
      <div class="item active">Active Item 1</div>
      <div class="item">Inactive Item</div>
      <div class="item active">Active Item 2</div>
      <div class="item">Inactive Item</div>
    </div>
    <button id="btn-remove-active">Remove Active</button>
    <button id="btn-remove-inactive">Remove Inactive</button>
    <button id="btn-restore-selector">Restore</button>
  </div>

  <div class="section">
    <h2>3. Conditional Remove</h2>
    <div id="number-items">
      <div class="number-box" data-value="5">5</div>
      <div class="number-box" data-value="12">12</div>
      <div class="number-box" data-value="8">8</div>
      <div class="number-box" data-value="15">15</div>
      <div class="number-box" data-value="3">3</div>
    </div>
    <button id="btn-remove-greater">Remove > 10</button>
    <button id="btn-remove-even">Remove Even</button>
    <button id="btn-restore-numbers">Restore</button>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.removable-box {
  background: #8b5cf6;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  transition: all 0.3s;
}
.remove-self {
  background: #ef4444;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  margin: 0;
}
.item {
  background: #f3f4f6;
  color: #374151;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  font-weight: 600;
  transition: all 0.3s;
}
.item.active {
  background: #8b5cf6;
  color: white;
}
.number-box {
  background: #ec4899;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 900;
  transition: all 0.3s;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// remove()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Remove Single Element
const removableHTML = document.getElementById('removable-items').innerHTML;

document.querySelectorAll('.remove-self').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const box = e.target.closest('.removable-box');
    const boxId = box.id;
    box.remove();
    log('🗑️ Removed: ' + boxId);
  });
});

document.getElementById('btn-restore').addEventListener('click', () => {
  document.getElementById('removable-items').innerHTML = removableHTML;
  
  document.querySelectorAll('.remove-self').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const box = e.target.closest('.removable-box');
      const boxId = box.id;
      box.remove();
      log('🗑️ Removed: ' + boxId);
    });
  });
  
  log('🔄 Restored all boxes');
});

// 2. Remove by Selector
const selectorHTML = document.getElementById('selector-items').innerHTML;

document.getElementById('btn-remove-active').addEventListener('click', () => {
  const activeItems = document.querySelectorAll('#selector-items .item.active');
  let count = 0;
  activeItems.forEach(item => {
    item.remove();
    count++;
  });
  log('🗑️ Removed ' + count + ' active items');
});

document.getElementById('btn-remove-inactive').addEventListener('click', () => {
  const inactiveItems = document.querySelectorAll('#selector-items .item:not(.active)');
  let count = 0;
  inactiveItems.forEach(item => {
    item.remove();
    count++;
  });
  log('🗑️ Removed ' + count + ' inactive items');
});

document.getElementById('btn-restore-selector').addEventListener('click', () => {
  document.getElementById('selector-items').innerHTML = selectorHTML;
  log('🔄 Restored selector items');
});

// 3. Conditional Remove
const numbersHTML = document.getElementById('number-items').innerHTML;

document.getElementById('btn-remove-greater').addEventListener('click', () => {
  const boxes = document.querySelectorAll('#number-items .number-box');
  let count = 0;
  boxes.forEach(box => {
    const value = parseInt(box.dataset.value);
    if (value > 10) {
      box.remove();
      count++;
      log('🗑️ Removed box with value: ' + value);
    }
  });
  log('✅ Removed ' + count + ' boxes > 10');
});

document.getElementById('btn-remove-even').addEventListener('click', () => {
  const boxes = document.querySelectorAll('#number-items .number-box');
  let count = 0;
  boxes.forEach(box => {
    const value = parseInt(box.dataset.value);
    if (value % 2 === 0) {
      box.remove();
      count++;
      log('🗑️ Removed even box: ' + value);
    }
  });
  log('✅ Removed ' + count + ' even boxes');
});

document.getElementById('btn-restore-numbers').addEventListener('click', () => {
  document.getElementById('number-items').innerHTML = numbersHTML;
  log('🔄 Restored number boxes');
});

log('🚀 remove() module loaded!');`,
  },


  /* ══════════════════════════════════════════════
     BATCH 7: EVENTS + ERROR HANDLING + STORAGE + JSON + FETCH (14 topics)
  ══════════════════════════════════════════════ */

  {
    topic: "event-listeners-deep",
    description: "Event listeners deep — addEventListener, removeEventListener, once option",
    html: `<div class="container">
  <h1>🔷 Event Listeners Deep</h1>
  <p class="subtitle">addEventListener, removeEventListener, once option</p>

  <div class="section">
    <h2>1. Basic Event Listener</h2>
    <button id="btn-basic">Click Me!</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multiple Listeners</h2>
    <button id="btn-multiple">Button with Multiple Listeners</button>
    <div id="multiple-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Remove Event Listener</h2>
    <button id="btn-removable">Removable Listener</button>
    <button id="btn-remove-listener">Remove Listener</button>
    <button id="btn-add-listener">Add Listener</button>
    <div id="remove-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Once Option</h2>
    <button id="btn-once">Click Once Only</button>
    <button id="btn-reset-once">Reset</button>
    <div id="once-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Event Listeners Deep
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Event Listener
let basicCount = 0;
document.getElementById('btn-basic').addEventListener('click', () => {
  basicCount++;
  const output = document.getElementById('basic-output');
  output.textContent = 'Button clicked ' + basicCount + ' time(s)!';
  log('🖱️ Basic button clicked: ' + basicCount);
});

// 2. Multiple Listeners
let multiCount = 0;
const btnMultiple = document.getElementById('btn-multiple');

btnMultiple.addEventListener('click', () => {
  multiCount++;
  const output = document.getElementById('multiple-output');
  output.textContent = 'Listener 1: Count = ' + multiCount + '\\n';
  log('🖱️ Listener 1 executed');
});

btnMultiple.addEventListener('click', () => {
  const output = document.getElementById('multiple-output');
  output.textContent += 'Listener 2: Timestamp = ' + new Date().toLocaleTimeString() + '\\n';
  log('🖱️ Listener 2 executed');
});

btnMultiple.addEventListener('click', () => {
  const output = document.getElementById('multiple-output');
  output.textContent += 'Listener 3: Random = ' + Math.floor(Math.random() * 100);
  log('🖱️ Listener 3 executed');
});

// 3. Remove Event Listener
const btnRemovable = document.getElementById('btn-removable');
let removeCount = 0;

function handleRemovableClick() {
  removeCount++;
  const output = document.getElementById('remove-output');
  output.textContent = 'Clicked ' + removeCount + ' time(s)\\n\\nListener is active!';
  log('🖱️ Removable button clicked: ' + removeCount);
}

btnRemovable.addEventListener('click', handleRemovableClick);

document.getElementById('btn-remove-listener').addEventListener('click', () => {
  btnRemovable.removeEventListener('click', handleRemovableClick);
  const output = document.getElementById('remove-output');
  output.textContent = '❌ Event listener removed!\\n\\nButton will not respond to clicks.';
  log('❌ Event listener removed');
});

document.getElementById('btn-add-listener').addEventListener('click', () => {
  btnRemovable.removeEventListener('click', handleRemovableClick);
  btnRemovable.addEventListener('click', handleRemovableClick);
  const output = document.getElementById('remove-output');
  output.textContent = '✅ Event listener added!\\n\\nButton will respond to clicks again.';
  log('✅ Event listener added back');
});

// 4. Once Option
let onceCount = 0;

function setupOnceListener() {
  const btnOnce = document.getElementById('btn-once');
  const output = document.getElementById('once-output');
  
  btnOnce.addEventListener('click', () => {
    onceCount++;
    output.textContent = 
      '✅ Clicked! (Count: ' + onceCount + ')\\n\\n' +
      'This listener will only fire ONCE.\\n' +
      'Try clicking again - nothing will happen!\\n\\n' +
      'addEventListener("click", handler, { once: true })';
    log('🖱️ Once listener fired (count: ' + onceCount + ')');
  }, { once: true });
  
  output.textContent = 'Listener ready! Click the button.\\n\\n{ once: true } option is set.';
}

setupOnceListener();

document.getElementById('btn-reset-once').addEventListener('click', () => {
  setupOnceListener();
  log('🔄 Once listener reset');
});

log('🚀 Event Listeners Deep module loaded!');`,
  },

  {
    topic: "event-object",
    description: "Event object — properties and methods of the event passed to handlers",
    html: `<div class="container">
  <h1>🔷 Event Object</h1>
  <p class="subtitle">Properties and methods of the event passed to handlers</p>

  <div class="section">
    <h2>1. Mouse Event Properties</h2>
    <div id="mouse-area" class="interactive-area">
      Click anywhere in this area
    </div>
    <div id="mouse-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Keyboard Event Properties</h2>
    <input type="text" id="key-input" placeholder="Type something..." />
    <div id="key-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Event Target vs CurrentTarget</h2>
    <div id="parent-div" class="parent-box">
      Parent Div
      <button id="child-btn">Child Button</button>
    </div>
    <div id="target-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Event Methods</h2>
    <a href="https://example.com" id="test-link">Test Link (preventDefault)</a>
    <div id="methods-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.interactive-area {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: crosshair;
  margin-bottom: 1rem;
  transition: all 0.3s;
}
.interactive-area:hover {
  transform: scale(1.02);
}
input[type="text"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}
input:focus {
  outline: none;
  border-color: #7c3aed;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}
.parent-box {
  background: #f3f4f6;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}
.parent-box:hover {
  background: #e5e7eb;
}
.parent-box button {
  margin-top: 1rem;
}
a {
  display: inline-block;
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid #8b5cf6;
  border-radius: 8px;
  transition: all 0.3s;
  margin-bottom: 1rem;
}
a:hover {
  background: #8b5cf6;
  color: white;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Event Object
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Mouse Event Properties
document.getElementById('mouse-area').addEventListener('click', (event) => {
  const output = document.getElementById('mouse-output');
  output.textContent = 
    'Mouse Event Properties:\\n\\n' +
    'type:       ' + event.type + '\\n' +
    'clientX:    ' + event.clientX + 'px\\n' +
    'clientY:    ' + event.clientY + 'px\\n' +
    'pageX:      ' + event.pageX + 'px\\n' +
    'pageY:      ' + event.pageY + 'px\\n' +
    'button:     ' + event.button + ' (0=left, 1=middle, 2=right)\\n' +
    'ctrlKey:    ' + event.ctrlKey + '\\n' +
    'shiftKey:   ' + event.shiftKey + '\\n' +
    'altKey:     ' + event.altKey;
  
  log('🖱️ Mouse clicked at (' + event.clientX + ', ' + event.clientY + ')');
});

// 2. Keyboard Event Properties
document.getElementById('key-input').addEventListener('keydown', (event) => {
  const output = document.getElementById('key-output');
  output.textContent = 
    'Keyboard Event Properties:\\n\\n' +
    'type:       ' + event.type + '\\n' +
    'key:        ' + event.key + '\\n' +
    'code:       ' + event.code + '\\n' +
    'keyCode:    ' + event.keyCode + ' (deprecated)\\n' +
    'ctrlKey:    ' + event.ctrlKey + '\\n' +
    'shiftKey:   ' + event.shiftKey + '\\n' +
    'altKey:     ' + event.altKey + '\\n' +
    'repeat:     ' + event.repeat;
  
  log('⌨️ Key pressed: ' + event.key + ' (code: ' + event.code + ')');
});

// 3. Event Target vs CurrentTarget
const parentDiv = document.getElementById('parent-div');
const childBtn = document.getElementById('child-btn');

parentDiv.addEventListener('click', (event) => {
  const output = document.getElementById('target-output');
  output.textContent = 
    'Event Delegation Example:\\n\\n' +
    'event.target:        ' + event.target.tagName + ' (' + (event.target.id || 'no id') + ')\\n' +
    'event.currentTarget: ' + event.currentTarget.tagName + ' (' + event.currentTarget.id + ')\\n\\n' +
    'target = element that triggered the event\\n' +
    'currentTarget = element with the listener\\n\\n' +
    'Clicked on: ' + (event.target === childBtn ? 'Child Button' : 'Parent Div');
  
  log('🎯 Target: ' + event.target.tagName + ', CurrentTarget: ' + event.currentTarget.tagName);
});

// 4. Event Methods
document.getElementById('test-link').addEventListener('click', (event) => {
  event.preventDefault();
  
  const output = document.getElementById('methods-output');
  output.textContent = 
    'event.preventDefault() called!\\n\\n' +
    'Default action (navigation) prevented.\\n' +
    'Link would go to: ' + event.target.href + '\\n\\n' +
    'Other useful methods:\\n' +
    '• event.stopPropagation() - stops bubbling\\n' +
    '• event.stopImmediatePropagation() - stops all\\n' +
    '• event.preventDefault() - prevents default';
  
  log('🚫 Link click prevented');
});

log('🚀 Event Object module loaded!');`,
  },

  {
    topic: "event-bubbling",
    description: "Event bubbling — how events propagate up through the DOM tree",
    html: `<div class="container">
  <h1>🔷 Event Bubbling</h1>
  <p class="subtitle">How events propagate up through the DOM tree</p>

  <div class="section">
    <h2>1. Bubbling Demonstration</h2>
    <div id="grandparent" class="box grandparent">
      Grandparent
      <div id="parent" class="box parent">
        Parent
        <div id="child" class="box child">
          Child
        </div>
      </div>
    </div>
    <div id="bubble-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Stop Propagation</h2>
    <div id="outer" class="box grandparent">
      Outer (will bubble)
      <div id="inner" class="box child">
        Inner (stopPropagation)
      </div>
    </div>
    <div id="stop-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Capture Phase</h2>
    <button id="btn-capture-demo">Test Capture vs Bubble</button>
    <div id="capture-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.box {
  padding: 2rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}
.grandparent {
  background: #fef3c7;
  border: 3px solid #f59e0b;
  color: #92400e;
}
.parent {
  background: #dbeafe;
  border: 3px solid #3b82f6;
  color: #1e40af;
  margin: 1rem;
}
.child {
  background: #fce7f3;
  border: 3px solid #ec4899;
  color: #9f1239;
  margin: 1rem;
}
.box:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 1rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Event Bubbling
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Bubbling Demonstration
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
const bubbleOutput = document.getElementById('bubble-output');

grandparent.addEventListener('click', (e) => {
  if (e.target === grandparent) {
    bubbleOutput.textContent = 'Event Bubbling Path:\\n\\n';
    bubbleOutput.textContent += '1️⃣ Child clicked\\n';
    bubbleOutput.textContent += '2️⃣ Bubbles to Parent\\n';
    bubbleOutput.textContent += '3️⃣ Bubbles to Grandparent ✅\\n\\n';
    bubbleOutput.textContent += 'You clicked: Grandparent (directly)';
    log('🎈 Clicked: Grandparent');
  }
});

parent.addEventListener('click', (e) => {
  if (e.target === parent) {
    bubbleOutput.textContent = 'Event Bubbling Path:\\n\\n';
    bubbleOutput.textContent += '1️⃣ Parent clicked\\n';
    bubbleOutput.textContent += '2️⃣ Bubbles to Grandparent\\n\\n';
    bubbleOutput.textContent += 'You clicked: Parent (directly)';
    log('🎈 Clicked: Parent');
  }
});

child.addEventListener('click', () => {
  bubbleOutput.textContent = 'Event Bubbling Path:\\n\\n';
  bubbleOutput.textContent += '1️⃣ Child clicked ✅\\n';
  bubbleOutput.textContent += '2️⃣ Bubbles to Parent\\n';
  bubbleOutput.textContent += '3️⃣ Bubbles to Grandparent\\n\\n';
  bubbleOutput.textContent += 'Event bubbles UP the DOM tree!';
  log('🎈 Clicked: Child (will bubble up)');
});

// 2. Stop Propagation
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const stopOutput = document.getElementById('stop-output');

outer.addEventListener('click', () => {
  stopOutput.textContent = '✅ Outer div clicked!\\n\\nEvent bubbled to outer div.';
  log('🎈 Outer div event fired');
});

inner.addEventListener('click', (e) => {
  e.stopPropagation();
  stopOutput.textContent = 
    '🛑 Inner div clicked!\\n\\n' +
    'event.stopPropagation() called.\\n' +
    'Event will NOT bubble to outer div.';
  log('🛑 Inner div - propagation stopped');
});

// 3. Capture Phase
document.getElementById('btn-capture-demo').addEventListener('click', () => {
  const output = document.getElementById('capture-output');
  output.textContent = 'Event Phases:\\n\\n';
  
  const testDiv = document.createElement('div');
  testDiv.style.cssText = 'padding: 2rem; background: #f3f4f6; border-radius: 8px; margin-top: 1rem;';
  testDiv.innerHTML = '<button id="phase-btn" style="padding: 1rem;">Click Me</button>';
  
  const existingDiv = document.querySelector('#capture-output').nextElementSibling;
  if (existingDiv && existingDiv.id === 'phase-test') {
    existingDiv.remove();
  }
  
  testDiv.id = 'phase-test';
  document.querySelector('#capture-output').parentElement.appendChild(testDiv);
  
  const phaseBtn = document.getElementById('phase-btn');
  
  // Capture phase (useCapture: true)
  testDiv.addEventListener('click', () => {
    output.textContent += '1️⃣ CAPTURE: Div (going down)\\n';
    log('📥 Capture phase: Div');
  }, true);
  
  // Target phase
  phaseBtn.addEventListener('click', () => {
    output.textContent += '2️⃣ TARGET: Button (reached target)\\n';
    log('🎯 Target phase: Button');
  });
  
  // Bubble phase (useCapture: false, default)
  testDiv.addEventListener('click', () => {
    output.textContent += '3️⃣ BUBBLE: Div (going up)\\n\\n';
    output.textContent += 'Capture → Target → Bubble';
    log('📤 Bubble phase: Div');
  }, false);
  
  output.textContent = 'Click the button below to see event phases:\\n\\n';
});

log('🚀 Event Bubbling module loaded!');`,
  },

  {
    topic: "event-delegation",
    description: "Event delegation — handle events on parent for dynamic child elements",
    html: `<div class="container">
  <h1>🔷 Event Delegation</h1>
  <p class="subtitle">Handle events on parent for dynamic child elements</p>

  <div class="section">
    <h2>1. Dynamic List with Delegation</h2>
    <input type="text" id="task-input" placeholder="Enter task..." />
    <button id="btn-add-task">Add Task</button>
    <ul id="task-list" class="task-list"></ul>
    <div id="delegation-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Button Grid</h2>
    <button id="btn-create-grid">Create Button Grid</button>
    <div id="button-grid" class="button-grid"></div>
    <div id="grid-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Why Use Delegation?</h2>
    <button id="btn-show-benefits">Show Benefits</button>
    <div id="benefits-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 250px;
  margin-right: 10px;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.task-list {
  list-style: none;
  margin: 1rem 0;
  min-height: 100px;
}
.task-item {
  background: #1a1a2e;
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  border: 2px solid transparent;
}
.task-item:hover {
  border-color: #8b5cf6;
  transform: translateX(5px);
}
.task-item.completed {
  text-decoration: line-through;
  opacity: 0.6;
  background: #2d1b69;
}
.task-item button {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
.task-item .btn-complete {
  background: #10b981;
}
.task-item .btn-complete:hover {
  background: #059669;
}
.task-item .btn-delete {
  background: #ef4444;
}
.task-item .btn-delete:hover {
  background: #dc2626;
}
.button-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 1rem;
  min-height: 100px;
}
.grid-btn {
  background: #2d1b69;
  color: #e5e5e5;
  padding: 1.5rem 0.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}
.grid-btn:hover {
  background: #7c3aed;
  transform: scale(1.05);
}
.grid-btn.clicked {
  background: #10b981;
  border-color: #fff;
  transform: scale(1.1);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  margin-top: 1rem;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Event Delegation
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Dynamic Task List with Delegation
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const delegationOutput = document.getElementById('delegation-output');
let taskId = 0;

document.getElementById('btn-add-task').addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (!text) return;

  taskId++;
  const li = document.createElement('li');
  li.className = 'task-item';
  li.dataset.id = taskId;
  li.innerHTML = \`
    <span class="task-text">\${text}</span>
    <div>
      <button class="btn-complete">✓ Done</button>
      <button class="btn-delete">✕ Delete</button>
    </div>
  \`;
  taskList.appendChild(li);
  taskInput.value = '';
  
  delegationOutput.textContent = \`Task #\${taskId} added: "\${text}"\\nTotal tasks: \${taskList.children.length}\`;
  log(\`✅ Task #\${taskId} added: "\${text}"\`);
});

// Event Delegation on parent <ul>
taskList.addEventListener('click', (e) => {
  const taskItem = e.target.closest('.task-item');
  if (!taskItem) return;

  const taskId = taskItem.dataset.id;
  const taskText = taskItem.querySelector('.task-text').textContent;

  if (e.target.classList.contains('btn-complete')) {
    taskItem.classList.toggle('completed');
    const status = taskItem.classList.contains('completed') ? 'completed' : 'active';
    delegationOutput.textContent = \`Task #\${taskId} marked as \${status}\\n"\${taskText}"\`;
    log(\`✓ Task #\${taskId} \${status}\`);
  }

  if (e.target.classList.contains('btn-delete')) {
    taskItem.remove();
    delegationOutput.textContent = \`Task #\${taskId} deleted\\n"\${taskText}"\\nRemaining: \${taskList.children.length}\`;
    log(\`✕ Task #\${taskId} deleted\`);
  }
});

// Allow Enter key to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('btn-add-task').click();
  }
});

// 2. Button Grid with Delegation
const buttonGrid = document.getElementById('button-grid');
const gridOutput = document.getElementById('grid-output');

document.getElementById('btn-create-grid').addEventListener('click', () => {
  buttonGrid.innerHTML = '';
  
  for (let i = 1; i <= 20; i++) {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.textContent = i;
    btn.dataset.value = i;
    buttonGrid.appendChild(btn);
  }
  
  gridOutput.textContent = '20 buttons created!\\nClick any button to see delegation in action.';
  log('🎯 Grid created with 20 buttons');
});

// Event Delegation on grid container
buttonGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('grid-btn')) {
    const value = e.target.dataset.value;
    
    // Remove previous clicked state
    buttonGrid.querySelectorAll('.grid-btn').forEach(btn => {
      btn.classList.remove('clicked');
    });
    
    // Mark current as clicked
    e.target.classList.add('clicked');
    
    gridOutput.textContent = 
      \`Button #\${value} clicked!\\n\\n\` +
      \`Event delegation allows ONE listener\\n\` +
      \`on the parent to handle ALL 20 buttons.\`;
    
    log(\`🖱️ Grid button #\${value} clicked\`);
  }
});

// 3. Why Use Delegation?
document.getElementById('btn-show-benefits').addEventListener('click', () => {
  const benefits = document.getElementById('benefits-output');
  benefits.textContent = 
    \`✅ BENEFITS OF EVENT DELEGATION:\\n\\n\` +
    \`1. Performance: ONE listener instead of many\\n\` +
    \`   (20 buttons = 1 listener, not 20!)\\n\\n\` +
    \`2. Dynamic Elements: Works for future elements\\n\` +
    \`   (No need to re-attach listeners)\\n\\n\` +
    \`3. Memory Efficient: Less memory usage\\n\` +
    \`   (Fewer event listeners = less overhead)\\n\\n\` +
    \`4. Cleaner Code: Centralized event handling\\n\` +
    \`   (All logic in one place)\\n\\n\` +
    \`HOW IT WORKS:\\n\` +
    \`Events "bubble up" from child to parent.\\n\` +
    \`Parent catches event and checks e.target.\`;
  
  log('📚 Benefits displayed');
});

log('🚀 Event Delegation module loaded!');
log('💡 Try adding tasks and clicking grid buttons');`,
  },

    {
    topic: "try-catch",
    description: "try...catch — wrap risky code and handle errors gracefully",
    html: `<div class="container">
  <h1>🔷 try...catch</h1>
  <p class="subtitle">Wrap risky code and handle errors gracefully</p>

  <div class="section">
    <h2>1. Basic try...catch</h2>
    <button id="btn-safe">Safe Code</button>
    <button id="btn-error">Trigger Error</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Parse JSON Safely</h2>
    <input type="text" id="json-input" placeholder='{"name": "Alice"}' value='{"name": "Alice"}' />
    <button id="btn-parse">Parse JSON</button>
    <div id="parse-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Catch Error Details</h2>
    <button id="btn-details">Show Error Details</button>
    <div id="details-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Multiple Operations</h2>
    <button id="btn-multi">Run Multiple Operations</button>
    <div id="multi-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.error {
  color: #ef4444 !important;
}
.success {
  color: #10b981 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// try...catch
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic try...catch
document.getElementById('btn-safe').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  try {
    const result = 10 + 20;
    output.innerHTML = '<span class="success">✅ SUCCESS</span>\\n\\nResult: ' + result + '\\nNo errors occurred!';
    log('✅ Safe code executed: ' + result);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error caught: ' + error.message);
  }
});

document.getElementById('btn-error').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  try {
    const obj = null;
    const value = obj.property; // This will throw an error
    output.innerHTML = '<span class="success">✅ SUCCESS</span>\\n\\nValue: ' + value;
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR CAUGHT</span>\\n\\n' +
      'Type: ' + error.name + '\\n' +
      'Message: ' + error.message + '\\n\\n' +
      'The app did NOT crash!';
    log('❌ Error caught: ' + error.name + ' - ' + error.message);
  }
});

// 2. Parse JSON Safely
document.getElementById('btn-parse').addEventListener('click', () => {
  const input = document.getElementById('json-input').value;
  const output = document.getElementById('parse-output');
  
  try {
    const parsed = JSON.parse(input);
    output.innerHTML = '<span class="success">✅ VALID JSON</span>\\n\\n' +
      JSON.stringify(parsed, null, 2);
    log('✅ JSON parsed successfully');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ INVALID JSON</span>\\n\\n' +
      'Error: ' + error.message + '\\n\\n' +
      'Input: ' + input;
    log('❌ JSON parse error: ' + error.message);
  }
});

// 3. Catch Error Details
document.getElementById('btn-details').addEventListener('click', () => {
  const output = document.getElementById('details-output');
  
  try {
    const arr = [1, 2, 3];
    arr.nonExistentMethod(); // Throws TypeError
  } catch (error) {
    output.innerHTML = 
      '<span class="error">❌ ERROR DETAILS</span>\\n\\n' +
      'Name:    ' + error.name + '\\n' +
      'Message: ' + error.message + '\\n' +
      'Type:    ' + typeof error + '\\n\\n' +
      'The error was caught and handled!';
    log('❌ ' + error.name + ': ' + error.message);
  }
});

// 4. Multiple Operations
document.getElementById('btn-multi').addEventListener('click', () => {
  const output = document.getElementById('multi-output');
  const results = [];
  
  // Operation 1: Safe
  try {
    const sum = 5 + 10;
    results.push('✅ Op 1: Sum = ' + sum);
    log('✅ Operation 1 succeeded');
  } catch (error) {
    results.push('❌ Op 1 failed: ' + error.message);
  }
  
  // Operation 2: Will fail
  try {
    const obj = undefined;
    const val = obj.toString();
    results.push('✅ Op 2: Value = ' + val);
  } catch (error) {
    results.push('❌ Op 2 failed: ' + error.message);
    log('❌ Operation 2 failed: ' + error.message);
  }
  
  // Operation 3: Safe
  try {
    const product = 7 * 8;
    results.push('✅ Op 3: Product = ' + product);
    log('✅ Operation 3 succeeded');
  } catch (error) {
    results.push('❌ Op 3 failed: ' + error.message);
  }
  
  output.textContent = 'MULTIPLE OPERATIONS:\\n\\n' + results.join('\\n\\n') +
    '\\n\\nEach operation has its own try...catch!';
});

log('🚀 try...catch module loaded!');
log('💡 Errors are caught and handled gracefully');`,
  },

  {
    topic: "finally",
    description: "finally — code that always runs after try/catch regardless of outcome",
    html: `<div class="container">
  <h1>🔷 finally Block</h1>
  <p class="subtitle">Code that always runs after try/catch regardless of outcome</p>

  <div class="section">
    <h2>1. Basic finally</h2>
    <button id="btn-success">Success Path</button>
    <button id="btn-error">Error Path</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Resource Cleanup</h2>
    <button id="btn-file">Simulate File Operation</button>
    <div id="cleanup-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Loading State</h2>
    <button id="btn-fetch">Simulate API Call</button>
    <div id="loading-indicator" class="loading-box">⏳ Loading...</div>
    <div id="fetch-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Execution Order</h2>
    <button id="btn-order">Show Execution Order</button>
    <div id="order-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.loading-box {
  background: #fbbf24;
  color: #1a1a2e;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: none;
}
.loading-box.active {
  display: block;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.info {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// finally Block
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic finally
document.getElementById('btn-success').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  let result = '';
  
  try {
    result += '1️⃣ try block executed\\n';
    const value = 10 * 5;
    result += '2️⃣ Calculation: ' + value + '\\n';
    log('✅ Success path - no errors');
  } catch (error) {
    result += '❌ catch block executed\\n';
    result += 'Error: ' + error.message + '\\n';
  } finally {
    result += '3️⃣ finally block ALWAYS runs\\n';
    result += '✅ Cleanup completed!';
    log('🔄 finally block executed');
  }
  
  output.textContent = result;
});

document.getElementById('btn-error').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  let result = '';
  
  try {
    result += '1️⃣ try block executed\\n';
    const obj = null;
    const value = obj.property; // Error!
    result += 'This line never runs\\n';
  } catch (error) {
    result += '2️⃣ catch block executed\\n';
    result += '❌ Error: ' + error.message + '\\n';
    log('❌ Error caught: ' + error.message);
  } finally {
    result += '3️⃣ finally block STILL runs!\\n';
    result += '✅ Cleanup completed!';
    log('🔄 finally block executed (even after error)');
  }
  
  output.textContent = result;
});

// 2. Resource Cleanup
document.getElementById('btn-file').addEventListener('click', () => {
  const output = document.getElementById('cleanup-output');
  let fileOpen = false;
  let result = '';
  
  try {
    result += '📂 Opening file...\\n';
    fileOpen = true;
    result += '✅ File opened\\n\\n';
    
    // Simulate random error
    if (Math.random() > 0.5) {
      throw new Error('Read error occurred');
    }
    
    result += '📖 Reading file contents...\\n';
    result += '✅ File read successfully\\n';
    log('✅ File operation succeeded');
  } catch (error) {
    result += '\\n❌ Error: ' + error.message + '\\n';
    log('❌ File operation failed: ' + error.message);
  } finally {
    if (fileOpen) {
      result += '\\n🔒 Closing file (cleanup)...\\n';
      fileOpen = false;
      result += '✅ File closed safely';
      log('🔄 File closed in finally block');
    }
  }
  
  output.textContent = result;
});

// 3. Loading State
document.getElementById('btn-fetch').addEventListener('click', () => {
  const output = document.getElementById('fetch-output');
  const loader = document.getElementById('loading-indicator');
  
  try {
    loader.classList.add('active');
    output.textContent = 'Fetching data...';
    log('🔄 API call started');
    
    // Simulate API call
    setTimeout(() => {
      try {
        // Simulate random success/failure
        if (Math.random() > 0.3) {
          output.innerHTML = '<span class="success">✅ DATA RECEIVED</span>\\n\\n' +
            '{ "user": "Alice", "status": "active" }';
          log('✅ API call succeeded');
        } else {
          throw new Error('Network timeout');
        }
      } catch (error) {
        output.innerHTML = '<span class="error">❌ API ERROR</span>\\n\\n' + error.message;
        log('❌ API call failed: ' + error.message);
      } finally {
        loader.classList.remove('active');
        log('🔄 Loading indicator hidden (finally)');
      }
    }, 1500);
    
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
  } finally {
    // Note: This finally runs immediately, not after setTimeout
    log('🔄 Outer finally executed');
  }
});

// 4. Execution Order
document.getElementById('btn-order').addEventListener('click', () => {
  const output = document.getElementById('order-output');
  const steps = [];
  
  steps.push('START');
  
  try {
    steps.push('→ try: line 1');
    steps.push('→ try: line 2');
    steps.push('→ try: line 3');
  } catch (error) {
    steps.push('→ catch: ' + error.message);
  } finally {
    steps.push('→ finally: cleanup');
  }
  
  steps.push('END');
  
  output.textContent = 'EXECUTION ORDER:\\n\\n' + steps.join('\\n') +
    '\\n\\nfinally runs BEFORE the code after try...catch!';
  log('📋 Execution order demonstrated');
});

log('🚀 finally block module loaded!');
log('💡 finally ALWAYS runs - success or error');`,
  },

  {
    topic: "throw",
    description: "throw — create and throw custom error objects or messages",
    html: `<div class="container">
  <h1>🔷 throw Statement</h1>
  <p class="subtitle">Create and throw custom error objects or messages</p>

  <div class="section">
    <h2>1. Throw Custom Errors</h2>
    <button id="btn-string">Throw String</button>
    <button id="btn-error">Throw Error Object</button>
    <button id="btn-custom">Throw Custom Error</button>
    <div id="throw-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Input Validation</h2>
    <input type="number" id="age-input" placeholder="Enter age (18-100)" />
    <button id="btn-validate">Validate Age</button>
    <div id="validate-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Function with throw</h2>
    <div class="calc-row">
      <input type="number" id="num1" placeholder="10" value="10" />
      <span>÷</span>
      <input type="number" id="num2" placeholder="2" value="2" />
      <button id="btn-divide">Divide</button>
    </div>
    <div id="calc-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Re-throwing Errors</h2>
    <button id="btn-rethrow">Demonstrate Re-throw</button>
    <div id="rethrow-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
  margin-bottom: 1rem;
}
.calc-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.calc-row span {
  color: #8b5cf6;
  font-size: 1.5rem;
  font-weight: 700;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// throw Statement
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Throw Custom Errors
document.getElementById('btn-string').addEventListener('click', () => {
  const output = document.getElementById('throw-output');
  try {
    throw 'This is a string error!';
  } catch (error) {
    output.innerHTML = '<span class="error">❌ CAUGHT</span>\\n\\n' +
      'Type: ' + typeof error + '\\n' +
      'Value: ' + error;
    log('❌ String thrown and caught: ' + error);
  }
});

document.getElementById('btn-error').addEventListener('click', () => {
  const output = document.getElementById('throw-output');
  try {
    throw new Error('Something went wrong!');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR OBJECT</span>\\n\\n' +
      'Name: ' + error.name + '\\n' +
      'Message: ' + error.message + '\\n' +
      'Type: ' + typeof error;
    log('❌ Error object thrown: ' + error.message);
  }
});

document.getElementById('btn-custom').addEventListener('click', () => {
  const output = document.getElementById('throw-output');
  try {
    const customError = {
      code: 'CUSTOM_ERROR',
      message: 'This is a custom error object',
      timestamp: new Date().toISOString()
    };
    throw customError;
  } catch (error) {
    output.innerHTML = '<span class="error">❌ CUSTOM ERROR</span>\\n\\n' +
      JSON.stringify(error, null, 2);
    log('❌ Custom error thrown: ' + error.code);
  }
});

// 2. Input Validation
document.getElementById('btn-validate').addEventListener('click', () => {
  const ageInput = document.getElementById('age-input');
  const output = document.getElementById('validate-output');
  
  try {
    const age = Number(ageInput.value);
    
    if (ageInput.value === '') {
      throw new Error('Age is required!');
    }
    
    if (isNaN(age)) {
      throw new Error('Age must be a number!');
    }
    
    if (age < 18) {
      throw new Error('Must be at least 18 years old!');
    }
    
    if (age > 100) {
      throw new Error('Age must be 100 or less!');
    }
    
    output.innerHTML = '<span class="success">✅ VALID</span>\\n\\n' +
      'Age ' + age + ' is valid!\\n' +
      'Validation passed!';
    log('✅ Age validation passed: ' + age);
    
  } catch (error) {
    output.innerHTML = '<span class="error">❌ VALIDATION ERROR</span>\\n\\n' + error.message;
    log('❌ Validation failed: ' + error.message);
  }
});

// 3. Function with throw
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero!');
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Both arguments must be numbers!');
  }
  return a / b;
}

document.getElementById('btn-divide').addEventListener('click', () => {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const output = document.getElementById('calc-output');
  
  try {
    const result = divide(num1, num2);
    output.innerHTML = '<span class="success">✅ SUCCESS</span>\\n\\n' +
      num1 + ' ÷ ' + num2 + ' = ' + result;
    log('✅ Division: ' + num1 + ' ÷ ' + num2 + ' = ' + result);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Division error: ' + error.message);
  }
});

// 4. Re-throwing Errors
function processData(data) {
  try {
    if (!data) {
      throw new Error('No data provided');
    }
    // Simulate processing
    return data.toUpperCase();
  } catch (error) {
    log('⚠️ Error in processData: ' + error.message);
    throw error; // Re-throw to caller
  }
}

document.getElementById('btn-rethrow').addEventListener('click', () => {
  const output = document.getElementById('rethrow-output');
  
  try {
    const result = processData(null);
    output.innerHTML = '<span class="success">✅ Result: ' + result + '</span>';
  } catch (error) {
    output.innerHTML = '<span class="error">❌ CAUGHT IN OUTER TRY</span>\\n\\n' +
      'The error was thrown in processData(),\\n' +
      'caught there, logged, then re-thrown,\\n' +
      'and caught here!\\n\\n' +
      'Error: ' + error.message;
    log('❌ Error caught in outer handler: ' + error.message);
  }
});

log('🚀 throw statement module loaded!');
log('💡 Use throw to create custom errors');`,
  },

  {
    topic: "localStorage",
    description: "localStorage — persist key-value data across browser sessions",
    html: `<div class="container">
  <h1>🔷 localStorage</h1>
  <p class="subtitle">Persist key-value data across browser sessions</p>

  <div class="section">
    <h2>1. Save & Retrieve Data</h2>
    <input type="text" id="key-input" placeholder="Key" value="username" />
    <input type="text" id="value-input" placeholder="Value" value="Alice" />
    <button id="btn-save">Save</button>
    <button id="btn-get">Get</button>
    <button id="btn-remove">Remove</button>
    <div id="storage-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Store Objects (JSON)</h2>
    <input type="text" id="user-name" placeholder="Name" value="Bob" />
    <input type="number" id="user-age" placeholder="Age" value="25" />
    <button id="btn-save-user">Save User</button>
    <button id="btn-load-user">Load User</button>
    <div id="user-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. View All Storage</h2>
    <button id="btn-view-all">View All Items</button>
    <button id="btn-clear">Clear All</button>
    <div id="all-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Preferences Example</h2>
    <label>
      <input type="checkbox" id="dark-mode" />
      Dark Mode
    </label>
    <label>
      <input type="checkbox" id="notifications" />
      Notifications
    </label>
    <button id="btn-save-prefs">Save Preferences</button>
    <button id="btn-load-prefs">Load Preferences</button>
    <div id="prefs-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}
label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 0.9rem;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #8b5cf6;
  cursor: pointer;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// localStorage
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Save & Retrieve Data
document.getElementById('btn-save').addEventListener('click', () => {
  const key = document.getElementById('key-input').value;
  const value = document.getElementById('value-input').value;
  const output = document.getElementById('storage-output');
  
  if (!key) {
    output.innerHTML = '<span class="error">❌ Key is required!</span>';
    return;
  }
  
  localStorage.setItem(key, value);
  output.innerHTML = '<span class="success">✅ SAVED</span>\\n\\n' +
    'Key: "' + key + '"\\n' +
    'Value: "' + value + '"\\n\\n' +
    'Data persists even after page reload!';
  log('💾 Saved to localStorage: ' + key + ' = ' + value);
});

document.getElementById('btn-get').addEventListener('click', () => {
  const key = document.getElementById('key-input').value;
  const output = document.getElementById('storage-output');
  
  if (!key) {
    output.innerHTML = '<span class="error">❌ Key is required!</span>';
    return;
  }
  
  const value = localStorage.getItem(key);
  
  if (value === null) {
    output.innerHTML = '<span class="error">❌ NOT FOUND</span>\\n\\n' +
      'Key "' + key + '" does not exist in localStorage';
    log('⚠️ Key not found: ' + key);
  } else {
    output.innerHTML = '<span class="success">✅ RETRIEVED</span>\\n\\n' +
      'Key: "' + key + '"\\n' +
      'Value: "' + value + '"';
    log('📖 Retrieved from localStorage: ' + key + ' = ' + value);
  }
});

document.getElementById('btn-remove').addEventListener('click', () => {
  const key = document.getElementById('key-input').value;
  const output = document.getElementById('storage-output');
  
  if (!key) {
    output.innerHTML = '<span class="error">❌ Key is required!</span>';
    return;
  }
  
  localStorage.removeItem(key);
  output.innerHTML = '<span class="success">✅ REMOVED</span>\\n\\n' +
    'Key "' + key + '" has been deleted from localStorage';
  log('🗑️ Removed from localStorage: ' + key);
});

// 2. Store Objects (JSON)
document.getElementById('btn-save-user').addEventListener('click', () => {
  const name = document.getElementById('user-name').value;
  const age = Number(document.getElementById('user-age').value);
  const output = document.getElementById('user-output');
  
  const user = { name, age, timestamp: new Date().toISOString() };
  
  // Convert object to JSON string
  localStorage.setItem('user', JSON.stringify(user));
  
  output.innerHTML = '<span class="success">✅ USER SAVED</span>\\n\\n' +
    JSON.stringify(user, null, 2) + '\\n\\n' +
    'Stored as JSON string in localStorage';
  log('💾 User saved: ' + JSON.stringify(user));
});

document.getElementById('btn-load-user').addEventListener('click', () => {
  const output = document.getElementById('user-output');
  
  const userJSON = localStorage.getItem('user');
  
  if (!userJSON) {
    output.innerHTML = '<span class="error">❌ NO USER FOUND</span>\\n\\n' +
      'Save a user first!';
    log('⚠️ No user in localStorage');
    return;
  }
  
  // Parse JSON string back to object
  const user = JSON.parse(userJSON);
  
  output.innerHTML = '<span class="success">✅ USER LOADED</span>\\n\\n' +
    JSON.stringify(user, null, 2) + '\\n\\n' +
    'Parsed from JSON string';
  log('📖 User loaded: ' + user.name);
});

// 3. View All Storage
document.getElementById('btn-view-all').addEventListener('click', () => {
  const output = document.getElementById('all-output');
  
  if (localStorage.length === 0) {
    output.innerHTML = '<span class="error">❌ EMPTY</span>\\n\\nlocalStorage is empty';
    log('⚠️ localStorage is empty');
    return;
  }
  
  let result = '<span class="success">📦 ALL ITEMS (' + localStorage.length + ')</span>\\n\\n';
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    result += '[' + i + '] "' + key + '" = "' + value + '"\\n';
  }
  
  output.innerHTML = result;
  log('📋 Viewing all localStorage items: ' + localStorage.length);
});

document.getElementById('btn-clear').addEventListener('click', () => {
  const output = document.getElementById('all-output');
  const count = localStorage.length;
  
  localStorage.clear();
  
  output.innerHTML = '<span class="success">✅ CLEARED</span>\\n\\n' +
    'Removed ' + count + ' item(s) from localStorage';
  log('🗑️ localStorage cleared (' + count + ' items)');
});

// 4. Preferences Example
document.getElementById('btn-save-prefs').addEventListener('click', () => {
  const darkMode = document.getElementById('dark-mode').checked;
  const notifications = document.getElementById('notifications').checked;
  const output = document.getElementById('prefs-output');
  
  const prefs = { darkMode, notifications };
  localStorage.setItem('preferences', JSON.stringify(prefs));
  
  output.innerHTML = '<span class="success">✅ PREFERENCES SAVED</span>\\n\\n' +
    'Dark Mode: ' + (darkMode ? 'ON' : 'OFF') + '\\n' +
    'Notifications: ' + (notifications ? 'ON' : 'OFF') + '\\n\\n' +
    'Reload the page and click "Load Preferences"!';
  log('💾 Preferences saved: ' + JSON.stringify(prefs));
});

document.getElementById('btn-load-prefs').addEventListener('click', () => {
  const output = document.getElementById('prefs-output');
  const prefsJSON = localStorage.getItem('preferences');
  
  if (!prefsJSON) {
    output.innerHTML = '<span class="error">❌ NO PREFERENCES</span>\\n\\nSave preferences first!';
    log('⚠️ No preferences found');
    return;
  }
  
  const prefs = JSON.parse(prefsJSON);
  
  // Apply preferences
  document.getElementById('dark-mode').checked = prefs.darkMode;
  document.getElementById('notifications').checked = prefs.notifications;
  
  output.innerHTML = '<span class="success">✅ PREFERENCES LOADED</span>\\n\\n' +
    'Dark Mode: ' + (prefs.darkMode ? 'ON' : 'OFF') + '\\n' +
    'Notifications: ' + (prefs.notifications ? 'ON' : 'OFF') + '\\n\\n' +
    'Checkboxes updated!';
  log('📖 Preferences loaded: ' + JSON.stringify(prefs));
});

log('🚀 localStorage module loaded!');
log('💡 Data persists across browser sessions');`,
  },

  {
    topic: "sessionStorage",
    description: "sessionStorage — store data for the duration of a browser session",
    html: `<div class="container">
  <h1>🔷 sessionStorage</h1>
  <p class="subtitle">Store data for the duration of a browser session</p>

  <div class="section">
    <h2>1. Session vs Local Storage</h2>
    <input type="text" id="data-input" placeholder="Enter data" value="Test Data" />
    <button id="btn-save-both">Save to Both</button>
    <button id="btn-compare">Compare</button>
    <div id="compare-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Form State (Session Only)</h2>
    <input type="text" id="form-name" placeholder="Name" />
    <input type="email" id="form-email" placeholder="Email" />
    <textarea id="form-message" placeholder="Message" rows="3"></textarea>
    <button id="btn-save-form">Save Form State</button>
    <button id="btn-restore-form">Restore Form</button>
    <button id="btn-clear-form">Clear Form</button>
    <div id="form-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Tab Counter</h2>
    <button id="btn-increment">Increment Counter</button>
    <button id="btn-reset">Reset Counter</button>
    <div id="counter-display" class="counter-box">0</div>
    <p class="info-text">Counter is unique per tab/window!</p>
  </div>

  <div class="section">
    <h2>4. View Session Storage</h2>
    <button id="btn-view-session">View All Session Data</button>
    <button id="btn-clear-session">Clear Session Storage</button>
    <div id="session-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
input[type="email"],
textarea {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0.75rem;
  font-family: 'Inter', system-ui, sans-serif;
}
textarea {
  resize: vertical;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.counter-box {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  color: white;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  margin: 1rem 0;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
}
.info-text {
  color: #6b7280;
  font-size: 0.85rem;
  font-style: italic;
  text-align: center;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// sessionStorage
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Session vs Local Storage
document.getElementById('btn-save-both').addEventListener('click', () => {
  const data = document.getElementById('data-input').value;
  const output = document.getElementById('compare-output');
  
  if (!data) {
    output.innerHTML = '<span class="error">❌ Enter some data first!</span>';
    return;
  }
  
  localStorage.setItem('testData', data);
  sessionStorage.setItem('testData', data);
  
  output.innerHTML = '<span class="success">✅ SAVED TO BOTH</span>\\n\\n' +
    'localStorage: "' + data + '"\\n' +
    'sessionStorage: "' + data + '"\\n\\n' +
    'Now close this tab and reopen the page!';
  log('💾 Saved to both storages: ' + data);
});

document.getElementById('btn-compare').addEventListener('click', () => {
  const output = document.getElementById('compare-output');
  
  const localData = localStorage.getItem('testData');
  const sessionData = sessionStorage.getItem('testData');
  
  output.innerHTML = '📊 COMPARISON:\\n\\n' +
    'localStorage:   ' + (localData || '(empty)') + '\\n' +
    'sessionStorage: ' + (sessionData || '(empty)') + '\\n\\n' +
    'localStorage persists across sessions\\n' +
    'sessionStorage clears when tab closes';
  log('📊 Compared storages');
});

// 2. Form State (Session Only)
document.getElementById('btn-save-form').addEventListener('click', () => {
  const formData = {
    name: document.getElementById('form-name').value,
    email: document.getElementById('form-email').value,
    message: document.getElementById('form-message').value,
    timestamp: new Date().toISOString()
  };
  
  sessionStorage.setItem('formState', JSON.stringify(formData));
  
  const output = document.getElementById('form-output');
  output.innerHTML = '<span class="success">✅ FORM STATE SAVED</span>\\n\\n' +
    'Saved to sessionStorage\\n' +
    'Refresh the page and click "Restore Form"!';
  log('💾 Form state saved');
});

document.getElementById('btn-restore-form').addEventListener('click', () => {
  const output = document.getElementById('form-output');
  const formJSON = sessionStorage.getItem('formState');
  
  if (!formJSON) {
    output.innerHTML = '<span class="error">❌ NO SAVED FORM</span>\\n\\nSave the form first!';
    log('⚠️ No form state found');
    return;
  }
  
  const formData = JSON.parse(formJSON);
  
  document.getElementById('form-name').value = formData.name;
  document.getElementById('form-email').value = formData.email;
  document.getElementById('form-message').value = formData.message;
  
  output.innerHTML = '<span class="success">✅ FORM RESTORED</span>\\n\\n' +
    'Saved at: ' + new Date(formData.timestamp).toLocaleString();
  log('📖 Form state restored');
});

document.getElementById('btn-clear-form').addEventListener('click', () => {
  document.getElementById('form-name').value = '';
  document.getElementById('form-email').value = '';
  document.getElementById('form-message').value = '';
  sessionStorage.removeItem('formState');
  
  const output = document.getElementById('form-output');
  output.innerHTML = '<span class="success">✅ FORM CLEARED</span>';
  log('🗑️ Form cleared');
});

// 3. Tab Counter
let counter = Number(sessionStorage.getItem('tabCounter')) || 0;
const counterDisplay = document.getElementById('counter-display');
counterDisplay.textContent = counter;

document.getElementById('btn-increment').addEventListener('click', () => {
  counter++;
  sessionStorage.setItem('tabCounter', counter);
  counterDisplay.textContent = counter;
  log('➕ Counter incremented: ' + counter);
});

document.getElementById('btn-reset').addEventListener('click', () => {
  counter = 0;
  sessionStorage.setItem('tabCounter', counter);
  counterDisplay.textContent = counter;
  log('🔄 Counter reset');
});

// 4. View Session Storage
document.getElementById('btn-view-session').addEventListener('click', () => {
  const output = document.getElementById('session-output');
  
  if (sessionStorage.length === 0) {
    output.innerHTML = '<span class="error">❌ EMPTY</span>\\n\\nsessionStorage is empty';
    log('⚠️ sessionStorage is empty');
    return;
  }
  
  let result = '<span class="success">📦 SESSION STORAGE (' + sessionStorage.length + ')</span>\\n\\n';
  
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    result += '[' + i + '] "' + key + '"\\n    = "' + value + '"\\n\\n';
  }
  
  result += 'This data will be cleared when you close the tab!';
  
  output.innerHTML = result;
  log('📋 Viewing sessionStorage: ' + sessionStorage.length + ' items');
});

document.getElementById('btn-clear-session').addEventListener('click', () => {
  const output = document.getElementById('session-output');
  const count = sessionStorage.length;
  
  sessionStorage.clear();
  counter = 0;
  counterDisplay.textContent = counter;
  
  output.innerHTML = '<span class="success">✅ CLEARED</span>\\n\\n' +
    'Removed ' + count + ' item(s) from sessionStorage';
  log('🗑️ sessionStorage cleared (' + count + ' items)');
});

log('🚀 sessionStorage module loaded!');
log('💡 Data persists only for this tab session');`,
  },

    {
    topic: "json-parse",
    description: "JSON.parse() — convert a JSON string into a JavaScript object",
    html: `<div class="container">
  <h1>🔷 JSON.parse()</h1>
  <p class="subtitle">Convert a JSON string into a JavaScript object</p>

  <div class="section">
    <h2>1. Parse Simple JSON</h2>
    <textarea id="json-input-1" rows="4">{"name": "Alice", "age": 25, "active": true}</textarea>
    <button id="btn-parse-1">Parse JSON</button>
    <div id="parse-output-1" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Parse Array JSON</h2>
    <textarea id="json-input-2" rows="4">[{"id": 1, "name": "Apple"}, {"id": 2, "name": "Banana"}]</textarea>
    <button id="btn-parse-2">Parse Array</button>
    <div id="parse-output-2" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Handle Parse Errors</h2>
    <textarea id="json-input-3" rows="4">{name: "Invalid JSON"}</textarea>
    <button id="btn-parse-3">Try Parse</button>
    <div id="parse-output-3" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Parse with Reviver Function</h2>
    <textarea id="json-input-4" rows="4">{"date": "2024-01-15T10:30:00.000Z", "price": "99.99"}</textarea>
    <button id="btn-parse-4">Parse with Reviver</button>
    <div id="parse-output-4" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
textarea {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  width: 100%;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  resize: vertical;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// JSON.parse()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Parse Simple JSON
document.getElementById('btn-parse-1').addEventListener('click', () => {
  const jsonString = document.getElementById('json-input-1').value;
  const output = document.getElementById('parse-output-1');
  
  try {
    const obj = JSON.parse(jsonString);
    
    output.innerHTML = '<span class="success">✅ PARSED SUCCESSFULLY</span>\\n\\n' +
      'Type: ' + typeof obj + '\\n' +
      'Name: ' + obj.name + '\\n' +
      'Age: ' + obj.age + '\\n' +
      'Active: ' + obj.active + '\\n\\n' +
      'Full object:\\n' + JSON.stringify(obj, null, 2);
    
    log('✅ Parsed object: ' + obj.name);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ PARSE ERROR</span>\\n\\n' + error.message;
    log('❌ Parse error: ' + error.message);
  }
});

// 2. Parse Array JSON
document.getElementById('btn-parse-2').addEventListener('click', () => {
  const jsonString = document.getElementById('json-input-2').value;
  const output = document.getElementById('parse-output-2');
  
  try {
    const arr = JSON.parse(jsonString);
    
    output.innerHTML = '<span class="success">✅ ARRAY PARSED</span>\\n\\n' +
      'Type: ' + typeof arr + '\\n' +
      'Is Array: ' + Array.isArray(arr) + '\\n' +
      'Length: ' + arr.length + '\\n\\n' +
      'Items:\\n' + arr.map((item, i) => '  [' + i + '] ' + JSON.stringify(item)).join('\\n');
    
    log('✅ Parsed array with ' + arr.length + ' items');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ PARSE ERROR</span>\\n\\n' + error.message;
    log('❌ Parse error: ' + error.message);
  }
});

// 3. Handle Parse Errors
document.getElementById('btn-parse-3').addEventListener('click', () => {
  const jsonString = document.getElementById('json-input-3').value;
  const output = document.getElementById('parse-output-3');
  
  try {
    const obj = JSON.parse(jsonString);
    output.innerHTML = '<span class="success">✅ VALID JSON</span>\\n\\n' + 
      JSON.stringify(obj, null, 2);
    log('✅ Valid JSON parsed');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ INVALID JSON</span>\\n\\n' +
      'Error: ' + error.message + '\\n\\n' +
      'Common issues:\\n' +
      '• Keys must be in double quotes\\n' +
      '• No trailing commas\\n' +
      '• Strings must use double quotes\\n' +
      '• No comments allowed\\n\\n' +
      'Valid example:\\n' +
      '{"name": "Alice", "age": 25}';
    log('❌ Invalid JSON: ' + error.message);
  }
});

// 4. Parse with Reviver Function
document.getElementById('btn-parse-4').addEventListener('click', () => {
  const jsonString = document.getElementById('json-input-4').value;
  const output = document.getElementById('parse-output-4');
  
  try {
    // Reviver function transforms values during parsing
    const obj = JSON.parse(jsonString, (key, value) => {
      // Convert ISO date strings to Date objects
      if (key === 'date' && typeof value === 'string') {
        return new Date(value);
      }
      // Convert price strings to numbers
      if (key === 'price' && typeof value === 'string') {
        return parseFloat(value);
      }
      return value;
    });
    
    output.innerHTML = '<span class="success">✅ PARSED WITH REVIVER</span>\\n\\n' +
      'date: ' + obj.date + '\\n' +
      'Type: ' + (obj.date instanceof Date ? 'Date object' : typeof obj.date) + '\\n\\n' +
      'price: ' + obj.price + '\\n' +
      'Type: ' + typeof obj.price + '\\n\\n' +
      'The reviver function transformed:\\n' +
      '• String date → Date object\\n' +
      '• String price → Number';
    
    log('✅ Parsed with reviver function');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ PARSE ERROR</span>\\n\\n' + error.message;
    log('❌ Parse error: ' + error.message);
  }
});

log('🚀 JSON.parse() module loaded!');
log('💡 Converts JSON strings to JavaScript objects');`,
  },

  {
    topic: "json-stringify",
    description: "JSON.stringify() — convert a JavaScript object into a JSON string",
    html: `<div class="container">
  <h1>🔷 JSON.stringify()</h1>
  <p class="subtitle">Convert a JavaScript object into a JSON string</p>

  <div class="section">
    <h2>1. Stringify Objects</h2>
    <button id="btn-stringify-obj">Stringify Object</button>
    <button id="btn-stringify-arr">Stringify Array</button>
    <button id="btn-stringify-nested">Stringify Nested</button>
    <div id="stringify-output-1" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Pretty Print (Formatting)</h2>
    <button id="btn-compact">Compact</button>
    <button id="btn-pretty">Pretty (2 spaces)</button>
    <button id="btn-pretty-4">Pretty (4 spaces)</button>
    <div id="stringify-output-2" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Replacer Function</h2>
    <button id="btn-filter">Filter Properties</button>
    <button id="btn-transform">Transform Values</button>
    <div id="stringify-output-3" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Special Cases</h2>
    <button id="btn-undefined">undefined Values</button>
    <button id="btn-functions">Functions</button>
    <button id="btn-dates">Date Objects</button>
    <div id="stringify-output-4" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.success {
  color: #10b981 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// JSON.stringify()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Stringify Objects
document.getElementById('btn-stringify-obj').addEventListener('click', () => {
  const obj = { name: 'Alice', age: 25, active: true };
  const json = JSON.stringify(obj);
  const output = document.getElementById('stringify-output-1');
  
  output.innerHTML = '<span class="success">✅ OBJECT → JSON</span>\\n\\n' +
    'Original: ' + typeof obj + '\\n' +
    'Result:   ' + typeof json + '\\n\\n' +
    json;
  
  log('✅ Object stringified: ' + json);
});

document.getElementById('btn-stringify-arr').addEventListener('click', () => {
  const arr = [1, 2, 3, 'hello', true, null];
  const json = JSON.stringify(arr);
  const output = document.getElementById('stringify-output-1');
  
  output.innerHTML = '<span class="success">✅ ARRAY → JSON</span>\\n\\n' +
    'Original: Array(' + arr.length + ')\\n' +
    'Result:   string\\n\\n' +
    json;
  
  log('✅ Array stringified: ' + json);
});

document.getElementById('btn-stringify-nested').addEventListener('click', () => {
  const nested = {
    user: { name: 'Bob', age: 30 },
    posts: [
      { id: 1, title: 'First Post' },
      { id: 2, title: 'Second Post' }
    ],
    active: true
  };
  const json = JSON.stringify(nested);
  const output = document.getElementById('stringify-output-1');
  
  output.innerHTML = '<span class="success">✅ NESTED → JSON</span>\\n\\n' + json;
  
  log('✅ Nested object stringified');
});

// 2. Pretty Print
const sampleData = {
  name: 'Alice',
  age: 25,
  skills: ['JavaScript', 'React', 'Node.js'],
  address: { city: 'NYC', country: 'USA' }
};

document.getElementById('btn-compact').addEventListener('click', () => {
  const json = JSON.stringify(sampleData);
  const output = document.getElementById('stringify-output-2');
  
  output.innerHTML = '<span class="success">✅ COMPACT (no spacing)</span>\\n\\n' + json;
  log('✅ Compact JSON: ' + json.length + ' chars');
});

document.getElementById('btn-pretty').addEventListener('click', () => {
  const json = JSON.stringify(sampleData, null, 2);
  const output = document.getElementById('stringify-output-2');
  
  output.innerHTML = '<span class="success">✅ PRETTY (2 spaces)</span>\\n\\n' + json;
  log('✅ Pretty JSON (2 spaces): ' + json.length + ' chars');
});

document.getElementById('btn-pretty-4').addEventListener('click', () => {
  const json = JSON.stringify(sampleData, null, 4);
  const output = document.getElementById('stringify-output-2');
  
  output.innerHTML = '<span class="success">✅ PRETTY (4 spaces)</span>\\n\\n' + json;
  log('✅ Pretty JSON (4 spaces): ' + json.length + ' chars');
});

// 3. Replacer Function
const userData = {
  name: 'Alice',
  age: 25,
  password: 'secret123',
  email: 'alice@example.com',
  role: 'admin'
};

document.getElementById('btn-filter').addEventListener('click', () => {
  // Only include specific properties
  const json = JSON.stringify(userData, ['name', 'email', 'role'], 2);
  const output = document.getElementById('stringify-output-3');
  
  output.innerHTML = '<span class="success">✅ FILTERED PROPERTIES</span>\\n\\n' +
    'Only included: name, email, role\\n' +
    'Excluded: age, password\\n\\n' +
    json;
  
  log('✅ Filtered JSON created');
});

document.getElementById('btn-transform').addEventListener('click', () => {
  // Transform values with replacer function
  const json = JSON.stringify(userData, (key, value) => {
    if (key === 'password') return '***HIDDEN***';
    if (key === 'age') return value + ' years old';
    return value;
  }, 2);
  const output = document.getElementById('stringify-output-3');
  
  output.innerHTML = '<span class="success">✅ TRANSFORMED VALUES</span>\\n\\n' +
    'password → hidden\\n' +
    'age → formatted\\n\\n' +
    json;
  
  log('✅ Transformed JSON created');
});

// 4. Special Cases
document.getElementById('btn-undefined').addEventListener('click', () => {
  const obj = { a: 1, b: undefined, c: 3 };
  const arr = [1, undefined, 3];
  const output = document.getElementById('stringify-output-4');
  
  output.innerHTML = '<span class="success">✅ undefined HANDLING</span>\\n\\n' +
    'Object: ' + JSON.stringify(obj) + '\\n' +
    '(undefined properties are omitted!)\\n\\n' +
    'Array: ' + JSON.stringify(arr) + '\\n' +
    '(undefined becomes null in arrays)';
  
  log('✅ undefined handling demonstrated');
});

document.getElementById('btn-functions').addEventListener('click', () => {
  const obj = {
    name: 'Alice',
    greet: function() { return 'Hello'; },
    age: 25
  };
  const json = JSON.stringify(obj, null, 2);
  const output = document.getElementById('stringify-output-4');
  
  output.innerHTML = '<span class="success">✅ FUNCTIONS OMITTED</span>\\n\\n' +
    'Original object has a function property\\n' +
    'JSON.stringify() removes it:\\n\\n' +
    json + '\\n\\n' +
    'Functions cannot be serialized to JSON!';
  
  log('✅ Functions omitted from JSON');
});

document.getElementById('btn-dates').addEventListener('click', () => {
  const obj = {
    name: 'Event',
    date: new Date('2024-01-15T10:30:00'),
    timestamp: Date.now()
  };
  const json = JSON.stringify(obj, null, 2);
  const output = document.getElementById('stringify-output-4');
  
  output.innerHTML = '<span class="success">✅ DATE OBJECTS</span>\\n\\n' +
    'Date objects are converted to ISO strings:\\n\\n' +
    json + '\\n\\n' +
    'Use JSON.parse() with reviver to restore!';
  
  log('✅ Date objects stringified');
});

log('🚀 JSON.stringify() module loaded!');
log('💡 Converts JavaScript objects to JSON strings');`,
  },

  {
    topic: "fetch",
    description: "fetch() — make HTTP requests to servers and APIs",
    html: `<div class="container">
  <h1>🔷 fetch() API</h1>
  <p class="subtitle">Make HTTP requests to servers and APIs</p>

  <div class="section">
    <h2>1. Basic GET Request</h2>
    <button id="btn-get-user">Fetch User</button>
    <button id="btn-get-posts">Fetch Posts</button>
    <div id="get-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. POST Request</h2>
    <input type="text" id="post-title" placeholder="Post title" value="My New Post" />
    <textarea id="post-body" placeholder="Post body" rows="2">This is the content of my post.</textarea>
    <button id="btn-post">Create Post</button>
    <div id="post-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Error Handling</h2>
    <button id="btn-404">Trigger 404</button>
    <button id="btn-network">Simulate Network Error</button>
    <div id="error-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Loading State</h2>
    <button id="btn-with-loading">Fetch with Loading</button>
    <div id="loading-indicator" class="loading-box">⏳ Loading...</div>
    <div id="loading-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
textarea {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0.75rem;
  font-family: 'Inter', system-ui, sans-serif;
}
textarea {
  resize: vertical;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 300px;
  overflow-y: auto;
}
.loading-box {
  background: #fbbf24;
  color: #1a1a2e;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1rem;
  display: none;
}
.loading-box.active {
  display: block;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// fetch() API
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic GET Request
document.getElementById('btn-get-user').addEventListener('click', async () => {
  const output = document.getElementById('get-output');
  output.textContent = '⏳ Fetching user...';
  
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const posts = await response.json();
    
    output.innerHTML = '<span class="success">✅ POSTS FETCHED (' + posts.length + ')</span>\\n\\n' +
      posts.map(p => '📝 Post #' + p.id + ': ' + p.title).join('\\n\\n');
    
    log('✅ Fetched ' + posts.length + ' posts');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Fetch error: ' + error.message);
  }
});

// 2. POST Request
document.getElementById('btn-post').addEventListener('click', async () => {
  const title = document.getElementById('post-title').value;
  const body = document.getElementById('post-body').value;
  const output = document.getElementById('post-output');
  
  output.textContent = '⏳ Creating post...';
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      })
    });
    
    const data = await response.json();
    
    output.innerHTML = '<span class="success">✅ POST CREATED</span>\\n\\n' +
      'ID: ' + data.id + '\\n' +
      'Title: ' + data.title + '\\n' +
      'Body: ' + data.body + '\\n\\n' +
      'Full response:\\n' + JSON.stringify(data, null, 2);
    
    log('✅ Post created with ID: ' + data.id);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ POST error: ' + error.message);
  }
});

// 3. Error Handling
document.getElementById('btn-404').addEventListener('click', async () => {
  const output = document.getElementById('error-output');
  output.textContent = '⏳ Fetching...';
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/999999');
    
    if (!response.ok) {
      throw new Error('HTTP ' + response.status + ': ' + response.statusText);
    }
    
    const data = await response.json();
    output.innerHTML = '<span class="success">✅ SUCCESS</span>\\n\\n' + JSON.stringify(data);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR CAUGHT</span>\\n\\n' +
      error.message + '\\n\\n' +
      'Always check response.ok or response.status!';
    log('❌ 404 error caught: ' + error.message);
  }
});

document.getElementById('btn-network').addEventListener('click', async () => {
  const output = document.getElementById('error-output');
  output.textContent = '⏳ Fetching...';
  
  try {
    const response = await fetch('https://invalid-domain-that-does-not-exist-12345.com/api');
    const data = await response.json();
    output.innerHTML = '<span class="success">✅ SUCCESS</span>\\n\\n' + JSON.stringify(data);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ NETWORK ERROR</span>\\n\\n' +
      error.message + '\\n\\n' +
      'This happens when:\\n' +
      '• Domain doesn\\'t exist\\n' +
      '• No internet connection\\n' +
      '• CORS issues\\n' +
      '• Server is down';
    log('❌ Network error: ' + error.message);
  }
});

// 4. Loading State
document.getElementById('btn-with-loading').addEventListener('click', async () => {
  const output = document.getElementById('loading-output');
  const loader = document.getElementById('loading-indicator');
  const btn = document.getElementById('btn-with-loading');
  
  try {
    loader.classList.add('active');
    btn.disabled = true;
    output.textContent = 'Waiting for response...';
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const user = await response.json();
    
    output.innerHTML = '<span class="success">✅ DATA LOADED</span>\\n\\n' +
      'Name: ' + user.name + '\\n' +
      'Email: ' + user.email + '\\n' +
      'Company: ' + user.company.name;
    
    log('✅ Data loaded with loading state');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  } finally {
    loader.classList.remove('active');
    btn.disabled = false;
    log('🔄 Loading state cleared (finally)');
  }
});

log('🚀 fetch() API module loaded!');
log('💡 Using JSONPlaceholder fake API for demos');`,
  },

  {
    topic: "handling-api-responses",
    description: "Handling API responses — parse JSON, handle errors, check status codes",
    html: `<div class="container">
  <h1>🔷 Handling API Responses</h1>
  <p class="subtitle">Parse JSON, handle errors, check status codes</p>

  <div class="section">
    <h2>1. Check Response Status</h2>
    <button id="btn-status-200">200 OK</button>
    <button id="btn-status-404">404 Not Found</button>
    <button id="btn-status-500">500 Error</button>
    <div id="status-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Parse Different Formats</h2>
    <button id="btn-json">Parse JSON</button>
    <button id="btn-text">Parse Text</button>
    <button id="btn-blob">Parse Blob</button>
    <div id="parse-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Response Headers</h2>
    <button id="btn-headers">View Headers</button>
    <button id="btn-content-type">Check Content-Type</button>
    <div id="headers-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Complete Error Handling</h2>
    <input type="number" id="user-id" placeholder="User ID (1-10)" value="1" />
    <button id="btn-fetch-user">Fetch User</button>
    <div id="complete-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 300px;
  overflow-y: auto;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.warning {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Handling API Responses
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Check Response Status
document.getElementById('btn-status-200').addEventListener('click', async () => {
  const output = document.getElementById('status-output');
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    output.innerHTML = 
      '<span class="success">✅ STATUS ' + response.status + '</span>\\n\\n' +
      'Status: ' + response.status + ' ' + response.statusText + '\\n' +
      'OK: ' + response.ok + '\\n' +
      'Type: ' + response.type + '\\n' +
      'URL: ' + response.url + '\\n\\n' +
      'response.ok is true for status 200-299';
    
    log('✅ Status 200 OK');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

document.getElementById('btn-status-404').addEventListener('click', async () => {
  const output = document.getElementById('status-output');
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/999999');
    
    output.innerHTML = 
      '<span class="warning">⚠️ STATUS ' + response.status + '</span>\\n\\n' +
      'Status: ' + response.status + ' ' + response.statusText + '\\n' +
      'OK: ' + response.ok + '\\n\\n' +
      'response.ok is FALSE for 404!\\n' +
      'fetch() does NOT throw on 404.\\n' +
      'You must check response.ok manually!';
    
    log('⚠️ Status 404 - response.ok = false');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

document.getElementById('btn-status-500').addEventListener('click', async () => {
  const output = document.getElementById('status-output');
  
  try {
    // This endpoint doesn't actually return 500, but we'll simulate the check
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // Simulate 500 for demo
    const simulatedStatus = 500;
    const simulatedOk = false;
    
    output.innerHTML = 
      '<span class="error">❌ STATUS ' + simulatedStatus + '</span>\\n\\n' +
      'Status: ' + simulatedStatus + ' Internal Server Error\\n' +
      'OK: ' + simulatedOk + '\\n\\n' +
      'Server errors (500-599) also set\\n' +
      'response.ok to false!\\n\\n' +
      'Always check: if (!response.ok) { ... }';
    
    log('⚠️ Status 500 simulation');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

// 2. Parse Different Formats
document.getElementById('btn-json').addEventListener('click', async () => {
  const output = document.getElementById('parse-output');
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json(); // Parse as JSON
    
    output.innerHTML = '<span class="success">✅ PARSED AS JSON</span>\\n\\n' +
      'Method: response.json()\\n' +
      'Type: ' + typeof data + '\\n\\n' +
      JSON.stringify(data, null, 2);
    
    log('✅ Parsed JSON response');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

document.getElementById('btn-text').addEventListener('click', async () => {
  const output = document.getElementById('parse-output');
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const text = await response.text(); // Parse as text
    
    output.innerHTML = '<span class="success">✅ PARSED AS TEXT</span>\\n\\n' +
      'Method: response.text()\\n' +
      'Type: ' + typeof text + '\\n' +
      'Length: ' + text.length + ' chars\\n\\n' +
      'First 200 chars:\\n' + text.substring(0, 200) + '...';
    
    log('✅ Parsed text response');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

document.getElementById('btn-blob').addEventListener('click', async () => {
  const output = document.getElementById('parse-output');
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const blob = await response.blob(); // Parse as blob
    
    output.innerHTML = '<span class="success">✅ PARSED AS BLOB</span>\\n\\n' +
      'Method: response.blob()\\n' +
      'Type: ' + blob.type + '\\n' +
      'Size: ' + blob.size + ' bytes\\n\\n' +
      'Blobs are used for:\\n' +
      '• Images\\n' +
      '• Files\\n' +
      '• Binary data';
    
    log('✅ Parsed blob response: ' + blob.size + ' bytes');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

// 3. Response Headers
document.getElementById('btn-headers').addEventListener('click', async () => {
  const output = document.getElementById('headers-output');
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    let headersText = '<span class="success">✅ RESPONSE HEADERS</span>\\n\\n';
    
    response.headers.forEach((value, key) => {
      headersText += key + ': ' + value + '\\n';
    });
    
    output.innerHTML = headersText;
    log('✅ Headers retrieved');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

document.getElementById('btn-content-type').addEventListener('click', async () => {
  const output = document.getElementById('headers-output');
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const contentType = response.headers.get('content-type');
    
    output.innerHTML = '<span class="success">✅ CONTENT-TYPE</span>\\n\\n' +
      'Content-Type: ' + contentType + '\\n\\n' +
      'Use this to determine how to parse:\\n' +
      '• application/json → response.json()\\n' +
      '• text/html → response.text()\\n' +
      '• image/png → response.blob()';
    
    log('✅ Content-Type: ' + contentType);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

// 4. Complete Error Handling
document.getElementById('btn-fetch-user').addEventListener('click', async () => {
  const userId = document.getElementById('user-id').value;
  const output = document.getElementById('complete-output');
  
  output.textContent = '⏳ Fetching user ' + userId + '...';
  
  try {
    // Step 1: Make request
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
    
    // Step 2: Check status
    if (!response.ok) {
      throw new Error('HTTP ' + response.status + ': ' + response.statusText);
    }
    
    // Step 3: Check content type
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Expected JSON, got: ' + contentType);
    }
    
    // Step 4: Parse JSON
    const user = await response.json();
    
    // Step 5: Validate data
    if (!user || !user.id) {
      throw new Error('Invalid user data received');
    }
    
    // Step 6: Success!
    output.innerHTML = '<span class="success">✅ USER LOADED</span>\\n\\n' +
      'ID: ' + user.id + '\\n' +
      'Name: ' + user.name + '\\n' +
      'Email: ' + user.email + '\\n' +
      'Username: ' + user.username + '\\n\\n' +
      'All checks passed!';
    
    log('✅ User ' + userId + ' loaded: ' + user.name);
    
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' +
      error.message + '\\n\\n' +
      'Complete error handling includes:\\n' +
      '1. Check response.ok\\n' +
      '2. Check content-type\\n' +
      '3. Parse response\\n' +
      '4. Validate data\\n' +
      '5. Handle all errors';
    
    log('❌ Error fetching user: ' + error.message);
  }
});

log('🚀 API Response Handling module loaded!');
log('💡 Always check response.ok before parsing!');`,
  },

  {
    topic: "then-chaining",
    description: ".then() chaining — chain multiple promise operations in sequence",
    html: `<div class="container">
  <h1>🔷 .then() Chaining</h1>
  <p class="subtitle">Chain multiple promise operations in sequence</p>

  <div class="section">
    <h2>1. Basic .then() Chain</h2>
    <button id="btn-basic-chain">Fetch & Parse</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multi-Step Chain</h2>
    <button id="btn-multi-step">Fetch User → Posts → Comments</button>
    <div id="multi-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Error Handling in Chains</h2>
    <button id="btn-chain-success">Success Path</button>
    <button id="btn-chain-error">Error Path</button>
    <div id="error-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. .then() vs async/await</h2>
    <button id="btn-then">Using .then()</button>
    <button id="btn-async">Using async/await</button>
    <div id="compare-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>5. Promise.all() with .then()</h2>
    <button id="btn-parallel">Fetch Multiple Users</button>
    <div id="parallel-output" class="output-box"></div>
  </div>

  <div class="console-output" id="console"></div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.container {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #8b5cf6;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
}
.subtitle {
  color: #9ca3af;
  text-align: center;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}
h2 {
  color: #a78bfa;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #8b5cf6;
  padding-left: 12px;
}
.section {
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #8b5cf6;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}
button:hover {
  background: #7c3aed;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 300px;
  overflow-y: auto;
}
.success {
  color: #10b981 !important;
}
.error {
  color: #ef4444 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// .then() Chaining
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic .then() Chain
document.getElementById('btn-basic-chain').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  output.textContent = '⏳ Fetching...';
  
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      log('1️⃣ Response received');
      return response.json();
    })
    .then(user => {
      log('2️⃣ JSON parsed');
      output.innerHTML = '<span class="success">✅ CHAIN COMPLETE</span>\\n\\n' +
        'Step 1: fetch() → Response\\n' +
        'Step 2: response.json() → Data\\n\\n' +
        'User: ' + user.name + '\\n' +
        'Email: ' + user.email;
      log('✅ User loaded: ' + user.name);
    })
    .catch(error => {
      output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
      log('❌ Error: ' + error.message);
    });
});

// 2. Multi-Step Chain
document.getElementById('btn-multi-step').addEventListener('click', () => {
  const output = document.getElementById('multi-output');
  output.textContent = '⏳ Step 1: Fetching user...';
  
  let userData;
  
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
      userData = user;
      output.textContent = '⏳ Step 2: Fetching posts for ' + user.name + '...';
      log('1️⃣ User fetched: ' + user.name);
      return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id + '&_limit=3');
    })
    .then(response => response.json())
    .then(posts => {
      output.textContent = '⏳ Step 3: Fetching comments for first post...';
      log('2️⃣ Posts fetched: ' + posts.length);
      return fetch('https://jsonplaceholder.typicode.com/comments?postId=' + posts[0].id + '&_limit=2');
    })
    .then(response => response.json())
    .then(comments => {
      log('3️⃣ Comments fetched: ' + comments.length);
      output.innerHTML = '<span class="success">✅ 3-STEP CHAIN COMPLETE</span>\\n\\n' +
        'User: ' + userData.name + '\\n' +
        'Comments: ' + comments.length + '\\n\\n' +
        comments.map(c => '💬 ' + c.email + ':\\n   ' + c.body.substring(0, 50) + '...').join('\\n\\n');
      log('✅ Chain complete!');
    })
    .catch(error => {
      output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
      log('❌ Error in chain: ' + error.message);
    });
});

// 3. Error Handling in Chains
document.getElementById('btn-chain-success').addEventListener('click', () => {
  const output = document.getElementById('error-output');
  
  Promise.resolve(10)
    .then(value => {
      log('Step 1: ' + value);
      return value * 2;
    })
    .then(value => {
      log('Step 2: ' + value);
      return value + 5;
    })
    .then(value => {
      log('Step 3: ' + value);
      output.innerHTML = '<span class="success">✅ SUCCESS PATH</span>\\n\\n' +
        'Final value: ' + value + '\\n\\n' +
        'All .then() blocks executed!';
              log('✅ Success path complete');
    })
    .catch(error => {
      output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
      log('❌ Error: ' + error.message);
    });
});

document.getElementById('btn-chain-error').addEventListener('click', () => {
  const output = document.getElementById('error-output');
  
  Promise.resolve(10)
    .then(value => {
      log('Step 1: ' + value);
      return value * 2;
    })
    .then(value => {
      log('Step 2: ' + value);
      throw new Error('Something went wrong in step 2!');
    })
    .then(value => {
      log('Step 3: This will NOT run');
      return value + 5;
    })
    .catch(error => {
      output.innerHTML = '<span class="error">❌ ERROR PATH</span>\\n\\n' +
        'Error: ' + error.message + '\\n\\n' +
        'When an error occurs:\\n' +
        '• Remaining .then() blocks are skipped\\n' +
        '• Execution jumps to .catch()\\n' +
        '• One .catch() handles all errors in chain';
      log('❌ Error caught: ' + error.message);
    });
});

// 4. .then() vs async/await
document.getElementById('btn-then').addEventListener('click', () => {
  const output = document.getElementById('compare-output');
  output.textContent = '⏳ Using .then()...';
  
  const startTime = Date.now();
  
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(user => {
      const elapsed = Date.now() - startTime;
      output.innerHTML = '<span class="success">✅ .then() APPROACH</span>\\n\\n' +
        'fetch(url)\\n' +
        '  .then(response => response.json())\\n' +
        '  .then(user => {\\n' +
        '    // Use user data\\n' +
        '  })\\n' +
        '  .catch(error => { ... });\\n\\n' +
        'User: ' + user.name + '\\n' +
        'Time: ' + elapsed + 'ms';
      log('✅ .then() completed in ' + elapsed + 'ms');
    })
    .catch(error => {
      output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
      log('❌ Error: ' + error.message);
    });
});

document.getElementById('btn-async').addEventListener('click', async () => {
  const output = document.getElementById('compare-output');
  output.textContent = '⏳ Using async/await...';
  
  const startTime = Date.now();
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    const elapsed = Date.now() - startTime;
    
    output.innerHTML = '<span class="success">✅ async/await APPROACH</span>\\n\\n' +
      'async function() {\\n' +
      '  const response = await fetch(url);\\n' +
      '  const user = await response.json();\\n' +
      '  // Use user data\\n' +
      '}\\n\\n' +
      'User: ' + user.name + '\\n' +
      'Time: ' + elapsed + 'ms\\n\\n' +
      'async/await is cleaner and easier to read!';
    log('✅ async/await completed in ' + elapsed + 'ms');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' + error.message;
    log('❌ Error: ' + error.message);
  }
});

// 5. Promise.all() with .then()
document.getElementById('btn-parallel').addEventListener('click', () => {
  const output = document.getElementById('parallel-output');
  output.textContent = '⏳ Fetching 3 users in parallel...';
  
  const startTime = Date.now();
  
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/users/2').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/users/3').then(r => r.json())
  ])
    .then(users => {
      const elapsed = Date.now() - startTime;
      output.innerHTML = '<span class="success">✅ PARALLEL FETCH COMPLETE</span>\\n\\n' +
        'Promise.all() waits for ALL promises\\n' +
        'to resolve, then returns an array.\\n\\n' +
        'Users fetched:\\n' +
        users.map((u, i) => (i + 1) + '. ' + u.name + ' (' + u.email + ')').join('\\n') +
        '\\n\\nTime: ' + elapsed + 'ms\\n' +
        '(Faster than sequential!)';
      log('✅ ' + users.length + ' users fetched in parallel (' + elapsed + 'ms)');
    })
    .catch(error => {
      output.innerHTML = '<span class="error">❌ ERROR</span>\\n\\n' +
        error.message + '\\n\\n' +
        'If ANY promise fails, Promise.all() rejects!';
      log('❌ Error in Promise.all(): ' + error.message);
    });
});

log('🚀 .then() chaining module loaded!');
log('💡 Chain promises with .then() or use async/await');`,
  },

];
/* ─── Export helper function ─────────────────────────────────────── */
export function getTopicExample(topicName) {
  if (!topicName) return null;
  const key = topicName.toLowerCase().trim();
  return jsTopicExamples.find((ex) => ex.topic.toLowerCase() === key) || null;
}

export default jsIntTopicExamples;

  













  





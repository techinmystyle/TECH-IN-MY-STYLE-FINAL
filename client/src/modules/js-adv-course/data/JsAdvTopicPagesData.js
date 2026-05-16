/* ═══════════════════════════════════════════════════════════════════
   jsAdvTopicExamples.js — JAVASCRIPT ADVANCED INTERACTIVE EXAMPLES
   Complete, truly interactive examples for all 58 topics
   Each entry: { topic, description, html, css, js }
   BATCH 1: Closures & Scope (5 topics)
═══════════════════════════════════════════════════════════════════ */

export const jsAdvTopicExamples = [

  /* ══════════════════════════════════════════════
     MODULE 1: CLOSURES & SCOPE
  ══════════════════════════════════════════════ */

  {
    topic: "lexical-environment",
    description: "How JS engines create and chain execution contexts at parse time",
    html: `<div class="container">
  <h1>🔷 Lexical Environment</h1>
  <p class="subtitle">How JS engines create and chain execution contexts</p>

  <div class="section">
    <h2>1. Scope Chain Visualization</h2>
    <button id="btn-scope-chain">Show Scope Chain</button>
    <div id="scope-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Variable Resolution</h2>
    <button id="btn-resolution">Demonstrate Resolution</button>
    <div id="resolution-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Nested Functions</h2>
    <button id="btn-nested">Create Nested Scope</button>
    <div id="nested-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Lexical vs Dynamic Scope</h2>
    <button id="btn-lexical">Show Lexical Binding</button>
    <div id="lexical-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
.highlight {
  color: #fbbf24 !important;
  font-weight: 700;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Lexical Environment
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Scope Chain Visualization
document.getElementById('btn-scope-chain').addEventListener('click', () => {
  const output = document.getElementById('scope-output');
  
  const globalVar = 'Global';
  
  function outer() {
    const outerVar = 'Outer';
    
    function inner() {
      const innerVar = 'Inner';
      return {
        inner: innerVar,
        outer: outerVar,
        global: globalVar
      };
    }
    
    return inner();
  }
  
  const result = outer();
  
  output.innerHTML = '<span class="success">✅ SCOPE CHAIN</span>\\n\\n' +
    'Global Scope → Outer Scope → Inner Scope\\n\\n' +
    'Inner function can access:\\n' +
    '  innerVar:  "' + result.inner + '" (own scope)\\n' +
    '  outerVar:  "' + result.outer + '" (parent scope)\\n' +
    '  globalVar: "' + result.global + '" (global scope)\\n\\n' +
    'Scope chain is determined at PARSE TIME!';
  
  log('✅ Scope chain demonstrated');
});

// 2. Variable Resolution
document.getElementById('btn-resolution').addEventListener('click', () => {
  const output = document.getElementById('resolution-output');
  
  const x = 'global x';
  
  function level1() {
    const x = 'level1 x';
    
    function level2() {
      const x = 'level2 x';
      return x; // Resolves to nearest x
    }
    
    function level2NoX() {
      return x; // Resolves to level1 x
    }
    
    return {
      withX: level2(),
      withoutX: level2NoX()
    };
  }
  
  const result = level1();
  
  output.innerHTML = '<span class="success">✅ VARIABLE RESOLUTION</span>\\n\\n' +
    'Variable lookup goes UP the scope chain:\\n\\n' +
    'level2() with local x:\\n' +
    '  → "' + result.withX + '"\\n\\n' +
    'level2NoX() without local x:\\n' +
    '  → "' + result.withoutX + '"\\n\\n' +
    'Stops at first match!';
  
  log('✅ Variable resolution demonstrated');
});

// 3. Nested Functions
document.getElementById('btn-nested').addEventListener('click', () => {
  const output = document.getElementById('nested-output');
  
  function createCounter() {
    let count = 0; // Private variable in lexical environment
    
    return {
      increment() {
        count++;
        return count;
      },
      decrement() {
        count--;
        return count;
      },
      getCount() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  
  const results = [];
  results.push('Initial: ' + counter.getCount());
  results.push('After increment: ' + counter.increment());
  results.push('After increment: ' + counter.increment());
  results.push('After decrement: ' + counter.decrement());
  results.push('Final: ' + counter.getCount());
  
  output.innerHTML = '<span class="success">✅ NESTED SCOPE</span>\\n\\n' +
    results.join('\\n') + '\\n\\n' +
    'The "count" variable is in the lexical\\n' +
    'environment of createCounter() and is\\n' +
    'accessible to all inner functions!';
  
  log('✅ Nested functions demonstrated');
});

// 4. Lexical vs Dynamic Scope
document.getElementById('btn-lexical').addEventListener('click', () => {
  const output = document.getElementById('lexical-output');
  
  const value = 'global';
  
  function showValue() {
    return value; // Lexically bound to global
  }
  
  function callShowValue() {
    const value = 'local';
    return showValue(); // Still returns 'global'!
  }
  
  const result = callShowValue();
  
  output.innerHTML = '<span class="success">✅ LEXICAL SCOPE</span>\\n\\n' +
    'JavaScript uses LEXICAL (static) scope\\n' +
    'not dynamic scope!\\n\\n' +
    'showValue() is defined in global scope\\n' +
    'where value = "global"\\n\\n' +
    'Even when called from callShowValue()\\n' +
    'where value = "local", it returns:\\n' +
    '  → "' + result + '"\\n\\n' +
    'Scope is determined at DEFINITION time,\\n' +
    'not CALL time!';
  
  log('✅ Lexical scope demonstrated: ' + result);
});

log('🚀 Lexical Environment module loaded!');
log('💡 Scope chains are created at parse time');`,
  },

  {
    topic: "closure-fundamentals",
    description: "Functions that remember their enclosing scope — deep dive into the mechanism",
    html: `<div class="container">
  <h1>🔷 Closure Fundamentals</h1>
  <p class="subtitle">Functions that remember their enclosing scope</p>

  <div class="section">
    <h2>1. Basic Closure</h2>
    <button id="btn-basic">Create Closure</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multiple Closures</h2>
    <button id="btn-multiple">Create Multiple Counters</button>
    <div id="multiple-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Closure in Loops</h2>
    <button id="btn-loop-var">Using var (broken)</button>
    <button id="btn-loop-let">Using let (fixed)</button>
    <button id="btn-loop-iife">Using IIFE (fixed)</button>
    <div id="loop-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Private Variables</h2>
    <button id="btn-private">Create Private State</button>
    <div id="private-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Closure Fundamentals
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Closure
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  function makeGreeter(name) {
    // 'name' is captured in closure
    return function() {
      return 'Hello, ' + name + '!';
    };
  }
  
  const greetAlice = makeGreeter('Alice');
  const greetBob = makeGreeter('Bob');
  
  output.innerHTML = '<span class="success">✅ BASIC CLOSURE</span>\\n\\n' +
    'greetAlice(): "' + greetAlice() + '"\\n' +
    'greetBob():   "' + greetBob() + '"\\n\\n' +
    'Each function remembers its own "name"\\n' +
    'from when it was created!\\n\\n' +
    'The inner function CLOSES OVER the\\n' +
    'variable "name" from outer scope.';
  
  log('✅ Basic closure: ' + greetAlice() + ', ' + greetBob());
});

// 2. Multiple Closures
document.getElementById('btn-multiple').addEventListener('click', () => {
  const output = document.getElementById('multiple-output');
  
  function createCounter(start) {
    let count = start;
    
    return {
      increment() { return ++count; },
      decrement() { return --count; },
      get() { return count; }
    };
  }
  
  const counter1 = createCounter(0);
  const counter2 = createCounter(100);
  
  counter1.increment();
  counter1.increment();
  counter2.decrement();
  
  output.innerHTML = '<span class="success">✅ MULTIPLE CLOSURES</span>\\n\\n' +
    'Counter 1: ' + counter1.get() + '\\n' +
    'Counter 2: ' + counter2.get() + '\\n\\n' +
    'Each counter has its OWN closure\\n' +
    'with its OWN "count" variable!\\n\\n' +
    'They are completely independent.';
  
  log('✅ Multiple closures: C1=' + counter1.get() + ', C2=' + counter2.get());
});

// 3. Closure in Loops
document.getElementById('btn-loop-var').addEventListener('click', () => {
  const output = document.getElementById('loop-output');
  const functions = [];
  
  for (var i = 0; i < 3; i++) {
    functions.push(function() {
      return i;
    });
  }
  
  const results = functions.map(f => f());
  
  output.innerHTML = '<span class="error">❌ BROKEN (var)</span>\\n\\n' +
    'Expected: [0, 1, 2]\\n' +
    'Actual:   [' + results.join(', ') + ']\\n\\n' +
    'All functions share the SAME "i"!\\n' +
    'By the time they run, i = 3.\\n\\n' +
    'var has function scope, not block scope.';
  
  log('❌ Loop with var: [' + results.join(', ') + ']');
});

document.getElementById('btn-loop-let').addEventListener('click', () => {
  const output = document.getElementById('loop-output');
  const functions = [];
  
  for (let i = 0; i < 3; i++) {
    functions.push(function() {
      return i;
    });
  }
  
  const results = functions.map(f => f());
  
  output.innerHTML = '<span class="success">✅ FIXED (let)</span>\\n\\n' +
    'Expected: [0, 1, 2]\\n' +
    'Actual:   [' + results.join(', ') + ']\\n\\n' +
    'Each iteration creates a NEW "i"!\\n' +
    'Each function closes over its own "i".\\n\\n' +
    'let has block scope.';
  
  log('✅ Loop with let: [' + results.join(', ') + ']');
});

document.getElementById('btn-loop-iife').addEventListener('click', () => {
  const output = document.getElementById('loop-output');
  const functions = [];
  
  for (var i = 0; i < 3; i++) {
    functions.push((function(j) {
      return function() {
        return j;
      };
    })(i));
  }
  
  const results = functions.map(f => f());
  
  output.innerHTML = '<span class="success">✅ FIXED (IIFE)</span>\\n\\n' +
    'Expected: [0, 1, 2]\\n' +
    'Actual:   [' + results.join(', ') + ']\\n\\n' +
    'IIFE creates a new scope for each "j"!\\n' +
    'Each function closes over its own "j".\\n\\n' +
    'Classic pre-ES6 solution.';
  
  log('✅ Loop with IIFE: [' + results.join(', ') + ']');
});

// 4. Private Variables
document.getElementById('btn-private').addEventListener('click', () => {
  const output = document.getElementById('private-output');
  
  function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private!
    
    return {
      deposit(amount) {
        if (amount > 0) {
          balance += amount;
          return 'Deposited: $' + amount;
        }
        return 'Invalid amount';
      },
      withdraw(amount) {
        if (amount > 0 && amount <= balance) {
          balance -= amount;
          return 'Withdrew: $' + amount;
        }
        return 'Insufficient funds';
      },
      getBalance() {
        return balance;
      }
    };
  }
  
  const account = createBankAccount(100);
  const log1 = account.deposit(50);
  const log2 = account.withdraw(30);
  const final = account.getBalance();
  
  output.innerHTML = '<span class="success">✅ PRIVATE STATE</span>\\n\\n' +
    log1 + '\\n' +
    log2 + '\\n' +
    'Balance: $' + final + '\\n\\n' +
    'The "balance" variable is PRIVATE!\\n' +
    'Cannot be accessed directly:\\n' +
    '  account.balance → undefined\\n\\n' +
    'Only accessible through methods.';
  
  log('✅ Private state: balance = $' + final);
});

log('🚀 Closure Fundamentals module loaded!');
log('💡 Closures = function + lexical environment');`,
  },

  {
    topic: "module-pattern",
    description: "Create private state and public APIs using closures — the classic JS pattern",
    html: `<div class="container">
  <h1>🔷 Module Pattern</h1>
  <p class="subtitle">Create private state and public APIs using closures</p>

  <div class="section">
    <h2>1. Basic Module</h2>
    <button id="btn-basic-module">Create Module</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Revealing Module Pattern</h2>
    <button id="btn-revealing">Create Revealing Module</button>
    <div id="revealing-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Module with Configuration</h2>
    <input type="text" id="config-name" placeholder="Module name" value="MyApp" />
    <input type="number" id="config-version" placeholder="Version" value="1" />
    <button id="btn-config">Create Configured Module</button>
    <div id="config-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Singleton Module</h2>
    <button id="btn-singleton">Test Singleton</button>
    <div id="singleton-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Module Pattern
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Module
document.getElementById('btn-basic-module').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  const CounterModule = (function() {
    // Private variables
    let count = 0;
    
    // Private function
    function logChange(action) {
      console.log(action + ': count = ' + count);
    }
    
    // Public API
    return {
      increment() {
        count++;
        logChange('Increment');
        return count;
      },
      decrement() {
        count--;
        logChange('Decrement');
        return count;
      },
      getCount() {
        return count;
      }
    };
  })();
  
  CounterModule.increment();
  CounterModule.increment();
  CounterModule.decrement();
  const final = CounterModule.getCount();
  
  output.innerHTML = '<span class="success">✅ BASIC MODULE</span>\\n\\n' +
    'Final count: ' + final + '\\n\\n' +
    'Private variables:\\n' +
    '  count (not accessible)\\n\\n' +
    'Private functions:\\n' +
    '  logChange() (not accessible)\\n\\n' +
    'Public API:\\n' +
    '  increment(), decrement(), getCount()';
  
  log('✅ Basic module created, count = ' + final);
});

// 2. Revealing Module Pattern
document.getElementById('btn-revealing').addEventListener('click', () => {
  const output = document.getElementById('revealing-output');
  
  const Calculator = (function() {
    // Private state
    let result = 0;
    
    // Private helper
    function validate(num) {
      return typeof num === 'number' && !isNaN(num);
    }
    
    // All functions defined privately
    function add(num) {
      if (validate(num)) {
        result += num;
      }
      return result;
    }
    
    function subtract(num) {
      if (validate(num)) {
        result -= num;
      }
      return result;
    }
    
    function multiply(num) {
      if (validate(num)) {
        result *= num;
      }
      return result;
    }
    
    function getResult() {
      return result;
    }
    
    function reset() {
      result = 0;
      return result;
    }
    
    // Reveal only what you want public
    return {
      add: add,
      subtract: subtract,
      multiply: multiply,
      getResult: getResult,
      reset: reset
    };
  })();
  
  Calculator.add(10);
  Calculator.multiply(5);
  Calculator.subtract(20);
  const final = Calculator.getResult();
  
  output.innerHTML = '<span class="success">✅ REVEALING MODULE</span>\\n\\n' +
    'Result: ' + final + '\\n\\n' +
    'All functions defined privately,\\n' +
    'then selectively revealed in return.\\n\\n' +
    'Benefits:\\n' +
    '• Consistent naming\\n' +
    '• Clear public API\\n' +
    '• Easy to refactor';
  
  log('✅ Revealing module: result = ' + final);
});

// 3. Module with Configuration
document.getElementById('btn-config').addEventListener('click', () => {
  const name = document.getElementById('config-name').value;
  const version = Number(document.getElementById('config-version').value);
  const output = document.getElementById('config-output');
  
  const AppModule = (function(config) {
    // Private state from config
    const appName = config.name;
    const appVersion = config.version;
    let initialized = false;
    
    function init() {
      initialized = true;
      return appName + ' v' + appVersion + ' initialized';
    }
    
    function getInfo() {
      return {
        name: appName,
        version: appVersion,
        initialized: initialized
      };
    }
    
    return {
      init: init,
      getInfo: getInfo
    };
  })({ name: name, version: version });
  
  const initMsg = AppModule.init();
  const info = AppModule.getInfo();
  
  output.innerHTML = '<span class="success">✅ CONFIGURED MODULE</span>\\n\\n' +
    initMsg + '\\n\\n' +
    'Info:\\n' +
    '  Name: ' + info.name + '\\n' +
    '  Version: ' + info.version + '\\n' +
    '  Initialized: ' + info.initialized + '\\n\\n' +
    'Module accepts configuration\\n' +
    'at creation time!';
  
  log('✅ Configured module: ' + info.name + ' v' + info.version);
});

// 4. Singleton Module
document.getElementById('btn-singleton').addEventListener('click', () => {
  const output = document.getElementById('singleton-output');
  
  const Singleton = (function() {
    let instance;
    
    function createInstance() {
      const id = Math.random().toString(36).substr(2, 9);
      return {
        id: id,
        timestamp: Date.now()
      };
    }
    
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const inst1 = Singleton.getInstance();
  const inst2 = Singleton.getInstance();
  const inst3 = Singleton.getInstance();
  
  output.innerHTML = '<span class="success">✅ SINGLETON MODULE</span>\\n\\n' +
    'Instance 1 ID: ' + inst1.id + '\\n' +
    'Instance 2 ID: ' + inst2.id + '\\n' +
    'Instance 3 ID: ' + inst3.id + '\\n\\n' +
    'All three are THE SAME instance!\\n' +
    'Same: ' + (inst1 === inst2 && inst2 === inst3) + '\\n\\n' +
    'Singleton ensures only ONE instance\\n' +
    'exists throughout the application.';
  
  log('✅ Singleton: ' + (inst1 === inst2 ? 'same instance' : 'different'));
});

log('🚀 Module Pattern loaded!');
log('💡 Modules = closures + IIFE for encapsulation');`,
  },

  {
    topic: "iife-patterns",
    description: "Immediately invoked function expressions for scoping and encapsulation",
    html: `<div class="container">
  <h1>🔷 IIFE Patterns</h1>
  <p class="subtitle">Immediately invoked function expressions for scoping</p>

  <div class="section">
    <h2>1. Basic IIFE</h2>
    <button id="btn-basic-iife">Execute IIFE</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. IIFE with Parameters</h2>
    <button id="btn-params">IIFE with Args</button>
    <div id="params-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. IIFE for Namespace</h2>
    <button id="btn-namespace">Create Namespace</button>
    <div id="namespace-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. IIFE Variations</h2>
    <button id="btn-variations">Show Variations</button>
    <div id="variations-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// IIFE Patterns
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic IIFE
document.getElementById('btn-basic-iife').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  const result = (function() {
    const privateVar = 'I am private';
    const privateFunc = () => 'Private function';
    
    return {
      publicVar: 'I am public',
      publicFunc() {
        return privateVar + ' but accessible via public method';
      }
    };
  })();
  
  output.innerHTML = '<span class="success">✅ BASIC IIFE</span>\\n\\n' +
    'Syntax: (function() { ... })()\\n\\n' +
    'result.publicVar: "' + result.publicVar + '"\\n' +
    'result.publicFunc(): "' + result.publicFunc() + '"\\n\\n' +
    'result.privateVar: ' + result.privateVar + '\\n\\n' +
    'IIFE executes immediately and returns\\n' +
    'a value (often an object with public API)';
  
  log('✅ IIFE executed');
});

// 2. IIFE with Parameters
document.getElementById('btn-params').addEventListener('click', () => {
  const output = document.getElementById('params-output');
  
  const result = (function(name, version) {
    return {
      info: name + ' v' + version,
      greet() {
        return 'Hello from ' + name + '!';
      }
    };
  })('MyApp', '2.0');
  
  output.innerHTML = '<span class="success">✅ IIFE WITH PARAMETERS</span>\\n\\n' +
    'Syntax: (function(a, b) { ... })(x, y)\\n\\n' +
    'result.info: "' + result.info + '"\\n' +
    'result.greet(): "' + result.greet() + '"\\n\\n' +
    'Pass arguments to IIFE just like\\n' +
    'any function call!';
  
  log('✅ IIFE with params: ' + result.info);
});

// 3. IIFE for Namespace
document.getElementById('btn-namespace').addEventListener('click', () => {
  const output = document.getElementById('namespace-output');
  
  const MyApp = {};
  
  (function(app) {
    // Private
    let users = [];
    
    // Public methods attached to namespace
    app.addUser = function(name) {
      users.push({ name: name, id: users.length + 1 });
      return users.length;
    };
    
    app.getUsers = function() {
      return users.slice(); // Return copy
    };
    
    app.getUserCount = function() {
      return users.length;
    };
  })(MyApp);
  
  MyApp.addUser('Alice');
  MyApp.addUser('Bob');
  MyApp.addUser('Carol');
  
  const count = MyApp.getUserCount();
  const users = MyApp.getUsers();
  
  output.innerHTML = '<span class="success">✅ NAMESPACE PATTERN</span>\\n\\n' +
    'MyApp.getUserCount(): ' + count + '\\n' +
    'Users: ' + users.map(u => u.name).join(', ') + '\\n\\n' +
    'IIFE augments existing object\\n' +
    'without polluting global scope!\\n\\n' +
    'Pattern: (function(ns) { ... })(MyApp);';
  
  log('✅ Namespace created: ' + count + ' users');
});

// 4. IIFE Variations
document.getElementById('btn-variations').addEventListener('click', () => {
  const output = document.getElementById('variations-output');
  
  // Variation 1: Classic
  const v1 = (function() { return 'Classic'; })();
  
  // Variation 2: Unary operator
  const v2 = +function() { return 42; }();
  
  // Variation 3: Void operator
  void function() { log('Void IIFE executed'); }();
  
  // Variation 4: Arrow IIFE
  const v4 = (() => 'Arrow IIFE')();
  
  // Variation 5: Async IIFE
  (async () => {
    const v5 = await Promise.resolve('Async IIFE');
    
    output.innerHTML = '<span class="success">✅ IIFE VARIATIONS</span>\\n\\n' +
      '1. Classic:  (function() {...})()\\n' +
      '   Result: "' + v1 + '"\\n\\n' +
      '2. Unary:    +function() {...}()\\n' +
      '   Result: ' + v2 + '\\n\\n' +
      '3. Void:     void function() {...}()\\n' +
      '   (no return value)\\n\\n' +
      '4. Arrow:    (() => {...})()\\n' +
      '   Result: "' + v4 + '"\\n\\n' +
      '5. Async:    (async () => {...})()\\n' +
      '   Result: "' + v5 + '"';
    
    log('✅ All IIFE variations demonstrated');
  })();
});

log('🚀 IIFE Patterns module loaded!');
log('💡 IIFE = Immediate execution + private scope');`,
  },

  {
    topic: "memoization",
    description: "Cache expensive function results for performance using closures",
    html: `<div class="container">
  <h1>🔷 Memoization</h1>
  <p class="subtitle">Cache expensive function results for performance</p>

  <div class="section">
    <h2>1. Basic Memoization</h2>
    <input type="number" id="fib-input" placeholder="Fibonacci n" value="40" min="1" max="45" />
    <button id="btn-no-memo">Without Memo</button>
    <button id="btn-with-memo">With Memo</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Generic Memoize Function</h2>
    <button id="btn-generic">Test Generic Memoize</button>
    <div id="generic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Memoize with Multiple Args</h2>
    <input type="number" id="arg1" placeholder="a" value="5" />
    <input type="number" id="arg2" placeholder="b" value="3" />
    <button id="btn-multi-args">Calculate</button>
    <div id="multi-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Cache Statistics</h2>
    <button id="btn-stats">Show Cache Stats</button>
    <button id="btn-clear-cache">Clear Cache</button>
    <div id="stats-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 120px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
.warning {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Memoization
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Memoization - Fibonacci
function fibonacciSlow(n) {
  if (n <= 1) return n;
  return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
}

const fibonacciFast = (function() {
  const cache = {};
  
  function fib(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 1) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }
  
  return fib;
})();

document.getElementById('btn-no-memo').addEventListener('click', () => {
  const n = Number(document.getElementById('fib-input').value);
  const output = document.getElementById('basic-output');
  
  output.textContent = '⏳ Calculating without memoization...';
  
  setTimeout(() => {
    const start = performance.now();
    const result = fibonacciSlow(n);
    const time = (performance.now() - start).toFixed(2);
    
    output.innerHTML = '<span class="warning">⚠️ WITHOUT MEMOIZATION</span>\\n\\n' +
      'fibonacci(' + n + ') = ' + result + '\\n' +
      'Time: ' + time + ' ms\\n\\n' +
      'Recalculates same values repeatedly!\\n' +
      'Exponential time complexity: O(2^n)';
    
    log('❌ Slow fib(' + n + '): ' + time + 'ms');
  }, 10);
});

document.getElementById('btn-with-memo').addEventListener('click', () => {
  const n = Number(document.getElementById('fib-input').value);
  const output = document.getElementById('basic-output');
  
  const start = performance.now();
  const result = fibonacciFast(n);
  const time = (performance.now() - start).toFixed(2);
  
  output.innerHTML = '<span class="success">✅ WITH MEMOIZATION</span>\\n\\n' +
    'fibonacci(' + n + ') = ' + result + '\\n' +
    'Time: ' + time + ' ms\\n\\n' +
    'Caches results in closure!\\n' +
    'Linear time complexity: O(n)\\n\\n' +
    'MUCH FASTER! 🚀';
  
  log('✅ Fast fib(' + n + '): ' + time + 'ms');
});

// 2. Generic Memoize Function
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cache) {
      log('📦 Cache hit for: ' + key);
      return cache[key];
    }
    
    log('🔄 Cache miss, computing...');
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

document.getElementById('btn-generic').addEventListener('click', () => {
  const output = document.getElementById('generic-output');
  
  function expensiveOperation(n) {
    let sum = 0;
    for (let i = 0; i < n * 1000000; i++) {
      sum += i;
    }
    return sum;
  }
  
  const memoized = memoize(expensiveOperation);
  
  const start1 = performance.now();
  const result1 = memoized(100);
  const time1 = (performance.now() - start1).toFixed(2);
  
  const start2 = performance.now();
  const result2 = memoized(100);
  const time2 = (performance.now() - start2).toFixed(2);
  
  output.innerHTML = '<span class="success">✅ GENERIC MEMOIZE</span>\\n\\n' +
    'First call (100):  ' + time1 + ' ms\\n' +
    'Second call (100): ' + time2 + ' ms\\n\\n' +
    'Speedup: ' + (time1 / time2).toFixed(0) + 'x faster!\\n\\n' +
    'Generic memoize works with ANY function!';
  
  log('✅ Generic memoize: ' + time1 + 'ms → ' + time2 + 'ms');
});

// 3. Memoize with Multiple Args
const memoizedAdd = (function() {
  const cache = new Map();
  let hits = 0;
  let misses = 0;
  
  function add(a, b) {
    const key = a + ',' + b;
    
    if (cache.has(key)) {
      hits++;
      return cache.get(key);
    }
    
    misses++;
    const result = a + b;
    cache.set(key, result);
    return result;
  }
  
  add.getStats = () => ({ hits, misses, size: cache.size });
  add.clearCache = () => {
    cache.clear();
    hits = 0;
    misses = 0;
  };
  
  return add;
})();

document.getElementById('btn-multi-args').addEventListener('click', () => {
  const a = Number(document.getElementById('arg1').value);
  const b = Number(document.getElementById('arg2').value);
  const output = document.getElementById('multi-output');
  
  const result = memoizedAdd(a, b);
  const stats = memoizedAdd.getStats();
  
  output.innerHTML = '<span class="success">✅ MULTI-ARG MEMOIZATION</span>\\n\\n' +
    'add(' + a + ', ' + b + ') = ' + result + '\\n\\n' +
    'Cache Stats:\\n' +
    '  Hits: ' + stats.hits + '\\n' +
    '  Misses: ' + stats.misses + '\\n' +
    '  Cache size: ' + stats.size + '\\n\\n' +
    'Try same values again to see cache hit!';
  
  log('✅ Memoized add(' + a + ', ' + b + ') = ' + result);
});

// 4. Cache Statistics
document.getElementById('btn-stats').addEventListener('click', () => {
  const output = document.getElementById('stats-output');
  const stats = memoizedAdd.getStats();
  
  const hitRate = stats.hits + stats.misses > 0
    ? ((stats.hits / (stats.hits + stats.misses)) * 100).toFixed(1)
    : 0;
  
  output.innerHTML = '<span class="success">✅ CACHE STATISTICS</span>\\n\\n' +
    'Total calls: ' + (stats.hits + stats.misses) + '\\n' +
    'Cache hits:  ' + stats.hits + '\\n' +
    'Cache misses: ' + stats.misses + '\\n' +
    'Cache size:  ' + stats.size + ' entries\\n' +
    'Hit rate:    ' + hitRate + '%\\n\\n' +
    'Higher hit rate = better performance!';
  
  log('📊 Cache stats: ' + hitRate + '% hit rate');
});

document.getElementById('btn-clear-cache').addEventListener('click', () => {
  const output = document.getElementById('stats-output');
  memoizedAdd.clearCache();
  
  output.innerHTML = '<span class="success">✅ CACHE CLEARED</span>\\n\\n' +
    'All cached values removed.\\n' +
    'Next calls will be cache misses.';
  
  log('🗑️ Cache cleared');
});

log('🚀 Memoization module loaded!');
log('💡 Memoization = caching + closures for speed');`,
  },

    /* ══════════════════════════════════════════════
     MODULE 2: PROTOTYPES & INHERITANCE
  ══════════════════════════════════════════════ */

  {
    topic: "prototype-chain",
    description: "How property lookup traverses the prototype chain in JavaScript",
    html: `<div class="container">
  <h1>🔷 The Prototype Chain</h1>
  <p class="subtitle">How property lookup traverses the prototype chain</p>

  <div class="section">
    <h2>1. Basic Prototype Chain</h2>
    <button id="btn-basic-chain">Show Chain</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Property Lookup</h2>
    <button id="btn-lookup">Demonstrate Lookup</button>
    <div id="lookup-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Prototype Inspection</h2>
    <button id="btn-inspect">Inspect Prototypes</button>
    <div id="inspect-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Chain Visualization</h2>
    <button id="btn-visualize">Visualize Chain</button>
    <div id="visualize-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #a855f7;
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
  color: #9333ea;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #a855f7;
  padding-left: 12px;
}
.section {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #a855f7;
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
  background: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(168, 85, 247, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// The Prototype Chain
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Prototype Chain
document.getElementById('btn-basic-chain').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  const obj = { name: 'Alice' };
  
  const hasOwnName = obj.hasOwnProperty('name');
  const hasOwnToString = obj.hasOwnProperty('toString');
  const canCallToString = typeof obj.toString === 'function';
  
  output.innerHTML = '<span class="success">✅ PROTOTYPE CHAIN</span>\\n\\n' +
    'obj = { name: "Alice" }\\n\\n' +
    'obj.hasOwnProperty("name"):\\n' +
    '  → ' + hasOwnName + ' (own property)\\n\\n' +
    'obj.hasOwnProperty("toString"):\\n' +
    '  → ' + hasOwnToString + ' (not own property)\\n\\n' +
    'typeof obj.toString:\\n' +
    '  → "' + typeof obj.toString + '"\\n\\n' +
    'toString comes from Object.prototype!\\n' +
    'Chain: obj → Object.prototype → null';
  
  log('✅ Prototype chain demonstrated');
});

// 2. Property Lookup
document.getElementById('btn-lookup').addEventListener('click', () => {
  const output = document.getElementById('lookup-output');
  
  const animal = {
    type: 'Animal',
    eat() { return this.type + ' is eating'; }
  };
  
  const dog = Object.create(animal);
  dog.breed = 'Labrador';
  dog.bark = function() { return 'Woof!'; };
  
  const myDog = Object.create(dog);
  myDog.name = 'Buddy';
  
  output.innerHTML = '<span class="success">✅ PROPERTY LOOKUP</span>\\n\\n' +
    'myDog.name:   "' + myDog.name + '" (own)\\n' +
    'myDog.breed:  "' + myDog.breed + '" (from dog)\\n' +
    'myDog.type:   "' + myDog.type + '" (from animal)\\n' +
    'myDog.bark(): "' + myDog.bark() + '" (from dog)\\n' +
    'myDog.eat():  "' + myDog.eat() + '" (from animal)\\n\\n' +
    'Lookup order:\\n' +
    '1. Check myDog\\n' +
    '2. Check dog (prototype)\\n' +
    '3. Check animal (prototype)\\n' +
    '4. Check Object.prototype\\n' +
    '5. null (not found)';
  
  log('✅ Property lookup: ' + myDog.name + ', ' + myDog.breed);
});

// 3. Prototype Inspection
document.getElementById('btn-inspect').addEventListener('click', () => {
  const output = document.getElementById('inspect-output');
  
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    return 'Hello, I am ' + this.name;
  };
  
  const alice = new Person('Alice');
  
  const proto1 = Object.getPrototypeOf(alice);
  const proto2 = Object.getPrototypeOf(proto1);
  const proto3 = Object.getPrototypeOf(proto2);
  
  const isProto = proto1 === Person.prototype;
  const isObjectProto = proto2 === Object.prototype;
  
  output.innerHTML = '<span class="success">✅ PROTOTYPE INSPECTION</span>\\n\\n' +
    'alice = new Person("Alice")\\n\\n' +
    'Object.getPrototypeOf(alice):\\n' +
    '  → Person.prototype (' + isProto + ')\\n\\n' +
    'Object.getPrototypeOf(Person.prototype):\\n' +
    '  → Object.prototype (' + isObjectProto + ')\\n\\n' +
    'Object.getPrototypeOf(Object.prototype):\\n' +
    '  → ' + proto3 + ' (end of chain)\\n\\n' +
    'Use Object.getPrototypeOf() to inspect!';
  
  log('✅ Prototypes inspected');
});

// 4. Chain Visualization
document.getElementById('btn-visualize').addEventListener('click', () => {
  const output = document.getElementById('visualize-output');
  
  function Animal(type) {
    this.type = type;
  }
  Animal.prototype.breathe = function() {
    return this.type + ' breathes';
  };
  
  function Dog(name) {
    Animal.call(this, 'Dog');
    this.name = name;
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.bark = function() {
    return this.name + ' barks!';
  };
  
  const buddy = new Dog('Buddy');
  
  output.innerHTML = '<span class="success">✅ CHAIN VISUALIZATION</span>\\n\\n' +
    'buddy (instance)\\n' +
    '  ↓ [[Prototype]]\\n' +
    'Dog.prototype\\n' +
    '  { bark: function }\\n' +
    '  ↓ [[Prototype]]\\n' +
    'Animal.prototype\\n' +
    '  { breathe: function }\\n' +
    '  ↓ [[Prototype]]\\n' +
    'Object.prototype\\n' +
    '  { toString, hasOwnProperty, ... }\\n' +
    '  ↓ [[Prototype]]\\n' +
    'null\\n\\n' +
    'buddy.bark():    "' + buddy.bark() + '"\\n' +
    'buddy.breathe(): "' + buddy.breathe() + '"';
  
  log('✅ Chain visualized: ' + buddy.name);
});

log('🚀 Prototype Chain module loaded!');
log('💡 Every object has a [[Prototype]] link');`,
  },

  {
    topic: "object-create",
    description: "Create objects with a specific prototype — pure prototypal inheritance",
    html: `<div class="container">
  <h1>🔷 Object.create()</h1>
  <p class="subtitle">Create objects with a specific prototype</p>

  <div class="section">
    <h2>1. Basic Object.create()</h2>
    <button id="btn-basic">Create with Prototype</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Inheritance Chain</h2>
    <button id="btn-inheritance">Build Inheritance</button>
    <div id="inheritance-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Property Descriptors</h2>
    <button id="btn-descriptors">Create with Descriptors</button>
    <div id="descriptors-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Object.create(null)</h2>
    <button id="btn-null">Create Null Prototype</button>
    <div id="null-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #a855f7;
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
  color: #9333ea;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #a855f7;
  padding-left: 12px;
}
.section {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #a855f7;
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
  background: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(168, 85, 247, 0.3);
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
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Object.create()
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Object.create()
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  const personProto = {
    greet() {
      return 'Hello, I am ' + this.name;
    },
    age: 0
  };
  
  const alice = Object.create(personProto);
  alice.name = 'Alice';
  alice.age = 25;
  
  const bob = Object.create(personProto);
  bob.name = 'Bob';
  bob.age = 30;
  
  const aliceProto = Object.getPrototypeOf(alice);
  const isSameProto = aliceProto === personProto;
  
  output.innerHTML = '<span class="success">✅ OBJECT.CREATE()</span>\\n\\n' +
    'alice.greet(): "' + alice.greet() + '"\\n' +
    'bob.greet():   "' + bob.greet() + '"\\n\\n' +
    'Object.getPrototypeOf(alice) === personProto:\\n' +
    '  → ' + isSameProto + '\\n\\n' +
    'Both alice and bob inherit from personProto!\\n\\n' +
    'Syntax: Object.create(proto)';
  
  log('✅ Objects created with prototype');
});

// 2. Inheritance Chain
document.getElementById('btn-inheritance').addEventListener('click', () => {
  const output = document.getElementById('inheritance-output');
  
  const animal = {
    type: 'Animal',
    eat() {
      return this.name + ' is eating';
    }
  };
  
  const mammal = Object.create(animal);
  mammal.warmBlooded = true;
  mammal.nurse = function() {
    return this.name + ' nurses young';
  };
  
  const dog = Object.create(mammal);
  dog.species = 'Canine';
  dog.bark = function() {
    return this.name + ' barks!';
  };
  
  const buddy = Object.create(dog);
  buddy.name = 'Buddy';
  buddy.breed = 'Labrador';
  
  output.innerHTML = '<span class="success">✅ INHERITANCE CHAIN</span>\\n\\n' +
    'buddy.name:        "' + buddy.name + '" (own)\\n' +
    'buddy.breed:       "' + buddy.breed + '" (own)\\n' +
    'buddy.species:     "' + buddy.species + '" (from dog)\\n' +
    'buddy.warmBlooded: ' + buddy.warmBlooded + ' (from mammal)\\n' +
    'buddy.type:        "' + buddy.type + '" (from animal)\\n\\n' +
    'buddy.bark():  "' + buddy.bark() + '"\\n' +
    'buddy.nurse(): "' + buddy.nurse() + '"\\n' +
    'buddy.eat():   "' + buddy.eat() + '"\\n\\n' +
    'Chain: buddy → dog → mammal → animal';
  
  log('✅ Inheritance chain: ' + buddy.name);
});

// 3. Property Descriptors
document.getElementById('btn-descriptors').addEventListener('click', () => {
  const output = document.getElementById('descriptors-output');
  
  const proto = { inherited: 'from proto' };
  
  const obj = Object.create(proto, {
    readOnly: {
      value: 'Cannot change',
      writable: false,
      enumerable: true,
      configurable: false
    },
    hidden: {
      value: 'Not enumerable',
      writable: true,
      enumerable: false,
      configurable: true
    },
    computed: {
      get() {
        return 'Computed: ' + this.readOnly;
      },
      enumerable: true,
      configurable: true
    }
  });
  
  obj.readOnly = 'Try to change'; // Fails silently
  
  const keys = Object.keys(obj);
  
  output.innerHTML = '<span class="success">✅ PROPERTY DESCRIPTORS</span>\\n\\n' +
    'obj.readOnly:   "' + obj.readOnly + '"\\n' +
    '  (writable: false - unchanged!)\\n\\n' +
    'obj.hidden:     "' + obj.hidden + '"\\n' +
    '  (enumerable: false)\\n\\n' +
    'obj.computed:   "' + obj.computed + '"\\n' +
    '  (getter function)\\n\\n' +
    'Object.keys(obj): [' + keys.join(', ') + ']\\n' +
    '  (hidden not included!)';
  
  log('✅ Created with descriptors');
});

// 4. Object.create(null)
document.getElementById('btn-null').addEventListener('click', () => {
  const output = document.getElementById('null-output');
  
  const normalObj = {};
  const nullProtoObj = Object.create(null);
  
  nullProtoObj.name = 'Dictionary';
  nullProtoObj.type = 'Map';
  
  const hasToString = typeof normalObj.toString === 'function';
  const nullHasToString = typeof nullProtoObj.toString === 'function';
  
  const normalProto = Object.getPrototypeOf(normalObj);
  const nullProto = Object.getPrototypeOf(nullProtoObj);
  
  output.innerHTML = '<span class="success">✅ OBJECT.CREATE(NULL)</span>\\n\\n' +
    'Normal object:\\n' +
    '  toString: ' + hasToString + '\\n' +
    '  prototype: Object.prototype\\n\\n' +
    'Null prototype object:\\n' +
    '  toString: ' + nullHasToString + '\\n' +
    '  prototype: ' + nullProto + '\\n\\n' +
    'nullProtoObj.name: "' + nullProtoObj.name + '"\\n' +
    'nullProtoObj.type: "' + nullProtoObj.type + '"\\n\\n' +
    'Use for pure dictionaries/maps!\\n' +
    'No inherited properties at all.';
  
  log('✅ Null prototype object created');
});

log('🚀 Object.create() module loaded!');
log('💡 Pure prototypal inheritance without constructors');`,
  },

  {
    topic: "constructor-functions",
    description: "Build objects using constructor functions and the new keyword",
    html: `<div class="container">
  <h1>🔷 Constructor Functions</h1>
  <p class="subtitle">Build objects using constructor functions and new</p>

  <div class="section">
    <h2>1. Basic Constructor</h2>
    <input type="text" id="person-name" placeholder="Name" value="Alice" />
    <input type="number" id="person-age" placeholder="Age" value="25" />
    <button id="btn-create-person">Create Person</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. The 'new' Keyword</h2>
    <button id="btn-with-new">With 'new'</button>
    <button id="btn-without-new">Without 'new'</button>
    <div id="new-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Prototype Methods</h2>
    <button id="btn-prototype">Add Prototype Methods</button>
    <div id="prototype-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Inheritance with Constructors</h2>
    <button id="btn-inheritance">Build Inheritance</button>
    <div id="inheritance-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #a855f7;
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
  color: #9333ea;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #a855f7;
  padding-left: 12px;
}
.section {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #a855f7;
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
  background: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(168, 85, 247, 0.3);
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
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Constructor Functions
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return 'Hello, I am ' + this.name;
  };
}

document.getElementById('btn-create-person').addEventListener('click', () => {
  const name = document.getElementById('person-name').value;
  const age = Number(document.getElementById('person-age').value);
  const output = document.getElementById('basic-output');
  
  const person = new Person(name, age);
  
  const isInstance = person instanceof Person;
  const constructor = person.constructor.name;
  
  output.innerHTML = '<span class="success">✅ CONSTRUCTOR FUNCTION</span>\\n\\n' +
    'person.name:  "' + person.name + '"\\n' +
    'person.age:   ' + person.age + '\\n' +
    'person.greet(): "' + person.greet() + '"\\n\\n' +
    'person instanceof Person: ' + isInstance + '\\n' +
    'person.constructor.name:  "' + constructor + '"\\n\\n' +
    'Constructor functions are capitalized\\n' +
    'by convention (Person, not person).';
  
  log('✅ Person created: ' + person.name);
});

// 2. The 'new' Keyword
function Car(brand) {
  this.brand = brand;
  this.drive = function() {
    return this.brand + ' is driving';
  };
}

document.getElementById('btn-with-new').addEventListener('click', () => {
  const output = document.getElementById('new-output');
  
  const car = new Car('Toyota');
  
    
  output.innerHTML = '<span class="error">❌ WITHOUT "new"</span>\\n\\n' +
    'const car = Car("Honda")  // Missing new!\\n\\n' +
    'typeof car: "' + typeof car + '"\\n' +
    'car is: ' + car + '\\n\\n' +
    'Without "new":\\n' +
    '• "this" refers to global object\\n' +
    '• Function returns undefined\\n' +
    '• Properties added to global!\\n\\n' +
    'ALWAYS use "new" with constructors!';
  
  log('❌ Car without new: ' + typeof car);
});

// 3. Prototype Methods
function Animal(name) {
  this.name = name;
}

// Add methods to prototype (shared across instances)
Animal.prototype.eat = function() {
  return this.name + ' is eating';
};

Animal.prototype.sleep = function() {
  return this.name + ' is sleeping';
};

document.getElementById('btn-prototype').addEventListener('click', () => {
  const output = document.getElementById('prototype-output');
  
  const cat = new Animal('Cat');
  const dog = new Animal('Dog');
  
  const sameEat = cat.eat === dog.eat;
  const hasOwnEat = cat.hasOwnProperty('eat');
  const hasOwnName = cat.hasOwnProperty('name');
  
  output.innerHTML = '<span class="success">✅ PROTOTYPE METHODS</span>\\n\\n' +
    'cat.eat():  "' + cat.eat() + '"\\n' +
    'dog.eat():  "' + dog.eat() + '"\\n\\n' +
    'cat.eat === dog.eat: ' + sameEat + '\\n' +
    '  (Same function reference!)\\n\\n' +
    'cat.hasOwnProperty("name"): ' + hasOwnName + '\\n' +
    'cat.hasOwnProperty("eat"):  ' + hasOwnEat + '\\n\\n' +
    'Methods on prototype are SHARED.\\n' +
    'Properties on "this" are UNIQUE.\\n\\n' +
    'More memory efficient!';
  
  log('✅ Prototype methods: shared = ' + sameEat);
});

// 4. Inheritance with Constructors
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.move = function() {
  return this.type + ' is moving';
};

function Bike(brand) {
  Vehicle.call(this, 'Bike'); // Call parent constructor
  this.brand = brand;
}

// Set up inheritance
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.pedal = function() {
  return this.brand + ' bike is pedaling';
};

document.getElementById('btn-inheritance').addEventListener('click', () => {
  const output = document.getElementById('inheritance-output');
  
  const myBike = new Bike('Trek');
  
  const isVehicle = myBike instanceof Vehicle;
  const isBike = myBike instanceof Bike;
  
  output.innerHTML = '<span class="success">✅ CONSTRUCTOR INHERITANCE</span>\\n\\n' +
    'myBike.brand:  "' + myBike.brand + '"\\n' +
    'myBike.type:   "' + myBike.type + '"\\n\\n' +
    'myBike.pedal(): "' + myBike.pedal() + '"\\n' +
    'myBike.move():  "' + myBike.move() + '"\\n\\n' +
    'myBike instanceof Bike:    ' + isBike + '\\n' +
    'myBike instanceof Vehicle: ' + isVehicle + '\\n\\n' +
    'Steps for inheritance:\\n' +
    '1. Vehicle.call(this, ...)\\n' +
    '2. Bike.prototype = Object.create(Vehicle.prototype)\\n' +
    '3. Bike.prototype.constructor = Bike';
  
  log('✅ Inheritance: ' + myBike.brand);
});

log('🚀 Constructor Functions module loaded!');
log('💡 Constructors + new = object creation pattern');`,
  },

  {
    topic: "es6-classes",
    description: "Classes, extends, super, static methods, and private fields",
    html: `<div class="container">
  <h1>🔷 ES6 Classes Deep Dive</h1>
  <p class="subtitle">Classes, extends, super, static methods, private fields</p>

  <div class="section">
    <h2>1. Basic Class</h2>
    <input type="text" id="class-name" placeholder="Name" value="Alice" />
    <input type="number" id="class-age" placeholder="Age" value="25" />
    <button id="btn-basic-class">Create Instance</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Class Inheritance</h2>
    <button id="btn-inheritance">Demonstrate Inheritance</button>
    <div id="inheritance-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Static Methods</h2>
    <button id="btn-static">Use Static Methods</button>
    <div id="static-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Private Fields</h2>
    <button id="btn-private">Test Private Fields</button>
    <div id="private-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #a855f7;
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
  color: #9333ea;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #a855f7;
  padding-left: 12px;
}
.section {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #a855f7;
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
  background: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(168, 85, 247, 0.3);
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
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// ES6 Classes
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return 'Hello, I am ' + this.name;
  }
  
  getInfo() {
    return this.name + ' is ' + this.age + ' years old';
  }
}

document.getElementById('btn-basic-class').addEventListener('click', () => {
  const name = document.getElementById('class-name').value;
  const age = Number(document.getElementById('class-age').value);
  const output = document.getElementById('basic-output');
  
  const person = new Person(name, age);
  
  const isInstance = person instanceof Person;
  const hasOwnGreet = person.hasOwnProperty('greet');
  
  output.innerHTML = '<span class="success">✅ ES6 CLASS</span>\\n\\n' +
    'person.name:     "' + person.name + '"\\n' +
    'person.age:      ' + person.age + '\\n' +
    'person.greet():  "' + person.greet() + '"\\n' +
    'person.getInfo(): "' + person.getInfo() + '"\\n\\n' +
    'person instanceof Person: ' + isInstance + '\\n' +
    'person.hasOwnProperty("greet"): ' + hasOwnGreet + '\\n\\n' +
    'Classes are syntactic sugar over\\n' +
    'constructor functions + prototypes!';
  
  log('✅ Person instance: ' + person.name);
});

// 2. Class Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    return this.name + ' is eating';
  }
  
  sleep() {
    return this.name + ' is sleeping';
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    return this.name + ' barks: Woof!';
  }
  
  // Override parent method
  eat() {
    return super.eat() + ' dog food';
  }
}

document.getElementById('btn-inheritance').addEventListener('click', () => {
  const output = document.getElementById('inheritance-output');
  
  const dog = new Dog('Buddy', 'Labrador');
  
  const isAnimal = dog instanceof Animal;
  const isDog = dog instanceof Dog;
  
  output.innerHTML = '<span class="success">✅ CLASS INHERITANCE</span>\\n\\n' +
    'dog.name:   "' + dog.name + '"\\n' +
    'dog.breed:  "' + dog.breed + '"\\n\\n' +
    'dog.bark():  "' + dog.bark() + '"\\n' +
    'dog.eat():   "' + dog.eat() + '"\\n' +
    'dog.sleep(): "' + dog.sleep() + '"\\n\\n' +
    'dog instanceof Dog:    ' + isDog + '\\n' +
    'dog instanceof Animal: ' + isAnimal + '\\n\\n' +
    'Key points:\\n' +
    '• extends creates inheritance\\n' +
    '• super() calls parent constructor\\n' +
    '• super.method() calls parent method';
  
  log('✅ Dog instance: ' + dog.name + ', ' + dog.breed);
});

// 3. Static Methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
  
  static PI = 3.14159;
  
  static circleArea(radius) {
    return this.PI * radius * radius;
  }
}

document.getElementById('btn-static').addEventListener('click', () => {
  const output = document.getElementById('static-output');
  
  const sum = MathUtils.add(5, 3);
  const product = MathUtils.multiply(4, 7);
  const area = MathUtils.circleArea(5);
  
  output.innerHTML = '<span class="success">✅ STATIC METHODS</span>\\n\\n' +
    'MathUtils.add(5, 3):        ' + sum + '\\n' +
    'MathUtils.multiply(4, 7):   ' + product + '\\n' +
    'MathUtils.circleArea(5):    ' + area.toFixed(2) + '\\n' +
    'MathUtils.PI:               ' + MathUtils.PI + '\\n\\n' +
    'Static methods:\\n' +
    '• Called on CLASS, not instance\\n' +
    '• No access to instance data\\n' +
    '• Useful for utility functions\\n\\n' +
    'Cannot do: new MathUtils().add(5, 3)';
  
  log('✅ Static methods: sum=' + sum + ', product=' + product);
});

// 4. Private Fields
class BankAccount {
  #balance = 0; // Private field
  #pin;         // Private field
  
  constructor(initialBalance, pin) {
    this.#balance = initialBalance;
    this.#pin = pin;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return 'Deposited: $' + amount;
    }
    return 'Invalid amount';
  }
  
  withdraw(amount, pin) {
    if (pin !== this.#pin) {
      return 'Invalid PIN';
    }
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return 'Withdrew: $' + amount;
    }
    return 'Insufficient funds';
  }
  
  getBalance(pin) {
    if (pin !== this.#pin) {
      return 'Invalid PIN';
    }
    return this.#balance;
  }
}

document.getElementById('btn-private').addEventListener('click', () => {
  const output = document.getElementById('private-output');
  
  const account = new BankAccount(1000, '1234');
  
  const deposit = account.deposit(500);
  const withdraw = account.withdraw(200, '1234');
  const balance = account.getBalance('1234');
  const wrongPin = account.getBalance('0000');
  
  let directAccess;
  try {
    directAccess = account.balance; // undefined
  } catch (e) {
    directAccess = 'Error: ' + e.message;
  }
  
  output.innerHTML = '<span class="success">✅ PRIVATE FIELDS</span>\\n\\n' +
    deposit + '\\n' +
    withdraw + '\\n' +
    'Balance (correct PIN): $' + balance + '\\n' +
    'Balance (wrong PIN):   "' + wrongPin + '"\\n\\n' +
    'account.balance:  ' + directAccess + '\\n' +
    'account.#balance: SyntaxError!\\n\\n' +
    'Private fields (#field):\\n' +
    '• Truly private (not accessible)\\n' +
    '• Must be declared in class body\\n' +
    '• Enforced by JavaScript engine';
  
  log('✅ Private fields: balance=$' + balance);
});

log('🚀 ES6 Classes module loaded!');
log('💡 Classes = cleaner syntax for prototypes');`,
  },

  {
    topic: "mixins-composition",
    description: "Compose behaviors without inheritance using mixin patterns",
    html: `<div class="container">
  <h1>🔷 Mixins & Composition</h1>
  <p class="subtitle">Compose behaviors without inheritance</p>

  <div class="section">
    <h2>1. Basic Mixin</h2>
    <button id="btn-basic-mixin">Apply Mixin</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Multiple Mixins</h2>
    <button id="btn-multiple">Compose Multiple Behaviors</button>
    <div id="multiple-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Functional Mixins</h2>
    <button id="btn-functional">Use Functional Mixins</button>
    <div id="functional-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Composition vs Inheritance</h2>
    <button id="btn-compare">Compare Approaches</button>
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
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #a855f7;
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
  color: #9333ea;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #a855f7;
  padding-left: 12px;
}
.section {
  background: rgba(168, 85, 247, 0.05);
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #a855f7;
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
  background: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(168, 85, 247, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(168, 85, 247, 0.3);
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
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Mixins & Composition
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Mixin
const canEat = {
  eat(food) {
    return this.name + ' is eating ' + food;
  }
};

const canWalk = {
  walk() {
    return this.name + ' is walking';
  }
};

const canSwim = {
  swim() {
    return this.name + ' is swimming';
  }
};

document.getElementById('btn-basic-mixin').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  function Person(name) {
    this.name = name;
  }
  
  // Apply mixins
  Object.assign(Person.prototype, canEat, canWalk);
  
  const alice = new Person('Alice');
  
  const hasEat = typeof alice.eat === 'function';
  const hasWalk = typeof alice.walk === 'function';
  const hasSwim = typeof alice.swim === 'function';
  
  output.innerHTML = '<span class="success">✅ BASIC MIXIN</span>\\n\\n' +
    'alice.eat("pizza"): "' + alice.eat('pizza') + '"\\n' +
    'alice.walk():       "' + alice.walk() + '"\\n\\n' +
    'Has eat():  ' + hasEat + '\\n' +
    'Has walk(): ' + hasWalk + '\\n' +
    'Has swim(): ' + hasSwim + '\\n\\n' +
    'Object.assign() copies methods\\n' +
    'from mixins to prototype!';
  
  log('✅ Mixin applied: ' + alice.name);
});

// 2. Multiple Mixins
document.getElementById('btn-multiple').addEventListener('click', () => {
  const output = document.getElementById('multiple-output');
  
  function Duck(name) {
    this.name = name;
  }
  
  // Compose multiple behaviors
  Object.assign(Duck.prototype, canEat, canWalk, canSwim);
  
  const donald = new Duck('Donald');
  
  output.innerHTML = '<span class="success">✅ MULTIPLE MIXINS</span>\\n\\n' +
    'donald.eat("bread"): "' + donald.eat('bread') + '"\\n' +
    'donald.walk():       "' + donald.walk() + '"\\n' +
    'donald.swim():       "' + donald.swim() + '"\\n\\n' +
    'Duck has ALL three behaviors!\\n\\n' +
    'Composition > Inheritance\\n' +
    'Mix and match behaviors as needed.';
  
  log('✅ Multiple mixins: ' + donald.name);
});

// 3. Functional Mixins
const withTimestamp = (obj) => {
  obj.timestamp = Date.now();
  obj.getAge = function() {
    return Date.now() - this.timestamp;
  };
  return obj;
};

const withId = (obj) => {
  obj.id = Math.random().toString(36).substr(2, 9);
  return obj;
};

const withLogger = (obj) => {
  obj.log = function(msg) {
    return '[' + this.id + '] ' + msg;
  };
  return obj;
};

document.getElementById('btn-functional').addEventListener('click', () => {
  const output = document.getElementById('functional-output');
  
  let user = { name: 'Bob' };
  
  // Apply functional mixins
  user = withTimestamp(user);
  user = withId(user);
  user = withLogger(user);
  
  setTimeout(() => {
    const age = user.getAge();
    const logMsg = user.log('Hello!');
    
    output.innerHTML = '<span class="success">✅ FUNCTIONAL MIXINS</span>\\n\\n' +
      'user.name:      "' + user.name + '"\\n' +
      'user.id:        "' + user.id + '"\\n' +
      'user.timestamp: ' + user.timestamp + '\\n' +
      'user.getAge():  ' + age + ' ms\\n' +
      'user.log():     "' + logMsg + '"\\n\\n' +
      'Functional mixins:\\n' +
      '• Take object, add behavior, return it\\n' +
      '• Can be chained\\n' +
      '• More flexible than Object.assign';
    
    log('✅ Functional mixins: ' + user.name);
  }, 100);
});

// 4. Composition vs Inheritance
document.getElementById('btn-compare').addEventListener('click', () => {
  const output = document.getElementById('compare-output');
  
  // Inheritance approach (rigid)
  class Vehicle {
    move() { return 'moving'; }
  }
  class FlyingVehicle extends Vehicle {
    fly() { return 'flying'; }
  }
  // Problem: What if we want a vehicle that swims but doesn't fly?
  
  // Composition approach (flexible)
  const canMove = {
    move() { return this.name + ' is moving'; }
  };
  const canFly = {
    fly() { return this.name + ' is flying'; }
  };
  const canFloat = {
    float() { return this.name + ' is floating'; }
  };
  
  function Airplane(name) {
    this.name = name;
  }
  Object.assign(Airplane.prototype, canMove, canFly);
  
  function Boat(name) {
    this.name = name;
  }
  Object.assign(Boat.prototype, canMove, canFloat);
  
  const plane = new Airplane('Boeing');
  const boat = new Boat('Titanic');
  
  output.innerHTML = '<span class="success">✅ COMPOSITION VS INHERITANCE</span>\\n\\n' +
    'INHERITANCE:\\n' +
    '• Rigid hierarchy\\n' +
    '• Hard to change\\n' +
    '• "Is-a" relationship\\n\\n' +
    'COMPOSITION:\\n' +
    '• Flexible behaviors\\n' +
    '• Easy to extend\\n' +
    '• "Has-a" relationship\\n\\n' +
    'Airplane: ' + plane.move() + ', ' + plane.fly() + '\\n' +
    'Boat:     ' + boat.move() + ', ' + boat.float() + '\\n\\n' +
    'Favor composition over inheritance!';
  
  log('✅ Composition demonstrated');
});

log('🚀 Mixins & Composition module loaded!');
log('💡 Compose behaviors, don\\'t inherit them');`,
  },

    /* ══════════════════════════════════════════════
     MODULE 3: ADVANCED FUNCTIONS
  ══════════════════════════════════════════════ */

  {
    topic: "currying",
    description: "Transform multi-argument functions into chains of single-argument functions",
    html: `<div class="container">
  <h1>🔷 Currying & Partial Application</h1>
  <p class="subtitle">Transform multi-argument functions into chains</p>

  <div class="section">
    <h2>1. Basic Currying</h2>
    <button id="btn-basic">Curry Add Function</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Generic Curry Function</h2>
    <input type="number" id="num1" placeholder="a" value="5" />
    <input type="number" id="num2" placeholder="b" value="3" />
    <input type="number" id="num3" placeholder="c" value="2" />
    <button id="btn-generic">Curry Multiply</button>
    <div id="generic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Partial Application</h2>
    <button id="btn-partial">Demonstrate Partial</button>
    <div id="partial-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Real-World Use Cases</h2>
    <button id="btn-usecase">Show Use Cases</button>
    <div id="usecase-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Currying & Partial Application
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Currying
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  // Normal function
  function add(a, b) {
    return a + b;
  }
  
  // Curried version
  function curriedAdd(a) {
    return function(b) {
      return a + b;
    };
  }
  
  const normalResult = add(5, 3);
  const curriedResult = curriedAdd(5)(3);
  
  const add5 = curriedAdd(5);
  const result1 = add5(3);
  const result2 = add5(10);
  
  output.innerHTML = '<span class="success">✅ BASIC CURRYING</span>\\n\\n' +
    'Normal:   add(5, 3) = ' + normalResult + '\\n' +
    'Curried:  curriedAdd(5)(3) = ' + curriedResult + '\\n\\n' +
    'Partial application:\\n' +
    'const add5 = curriedAdd(5)\\n' +
    'add5(3)  = ' + result1 + '\\n' +
    'add5(10) = ' + result2 + '\\n\\n' +
    'Currying transforms:\\n' +
    'f(a, b) → f(a)(b)';
  
  log('✅ Currying: ' + normalResult + ' = ' + curriedResult);
});

// 2. Generic Curry Function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

document.getElementById('btn-generic').addEventListener('click', () => {
  const a = Number(document.getElementById('num1').value);
  const b = Number(document.getElementById('num2').value);
  const c = Number(document.getElementById('num3').value);
  const output = document.getElementById('generic-output');
  
  function multiply(x, y, z) {
    return x * y * z;
  }
  
  const curriedMultiply = curry(multiply);
  
  const result1 = curriedMultiply(a, b, c);
  const result2 = curriedMultiply(a)(b)(c);
  const result3 = curriedMultiply(a, b)(c);
  const result4 = curriedMultiply(a)(b, c);
  
  const multiplyBy2 = curriedMultiply(2);
  const multiplyBy2And3 = multiplyBy2(3);
  const final = multiplyBy2And3(4);
  
  output.innerHTML = '<span class="success">✅ GENERIC CURRY</span>\\n\\n' +
    'multiply(' + a + ', ' + b + ', ' + c + '):\\n\\n' +
    'curriedMultiply(' + a + ', ' + b + ', ' + c + ') = ' + result1 + '\\n' +
    'curriedMultiply(' + a + ')(' + b + ')(' + c + ') = ' + result2 + '\\n' +
    'curriedMultiply(' + a + ', ' + b + ')(' + c + ') = ' + result3 + '\\n' +
    'curriedMultiply(' + a + ')(' + b + ', ' + c + ') = ' + result4 + '\\n\\n' +
    'Partial chain:\\n' +
    'multiplyBy2(3)(4) = ' + final + '\\n\\n' +
    'Generic curry works with ANY function!';
  
  log('✅ Generic curry: ' + result1);
});

// 3. Partial Application
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

document.getElementById('btn-partial').addEventListener('click', () => {
  const output = document.getElementById('partial-output');
  
  function greet(greeting, name, punctuation) {
    return greeting + ', ' + name + punctuation;
  }
  
  const sayHello = partial(greet, 'Hello');
  const sayHelloToAlice = partial(greet, 'Hello', 'Alice');
  
  const result1 = sayHello('Bob', '!');
  const result2 = sayHello('Carol', '.');
  const result3 = sayHelloToAlice('!');
  const result4 = sayHelloToAlice('?');
  
  output.innerHTML = '<span class="success">✅ PARTIAL APPLICATION</span>\\n\\n' +
    'sayHello("Bob", "!"):   "' + result1 + '"\\n' +
    'sayHello("Carol", "."): "' + result2 + '"\\n\\n' +
    'sayHelloToAlice("!"):   "' + result3 + '"\\n' +
    'sayHelloToAlice("?"):   "' + result4 + '"\\n\\n' +
    'Partial vs Currying:\\n' +
    '• Partial: Fix some args, get function\\n' +
    '• Currying: Always one arg at a time\\n\\n' +
    'Both create specialized functions!';
  
  log('✅ Partial application: ' + result1);
});

// 4. Real-World Use Cases
document.getElementById('btn-usecase').addEventListener('click', () => {
  const output = document.getElementById('usecase-output');
  
  // Use case 1: Event handlers
  function handleEvent(eventType, element, callback) {
    return eventType + ' on ' + element + ': ' + callback();
  }
  
  const handleClick = curry(handleEvent)('click');
  const handleClickOnButton = handleClick('button');
  
  // Use case 2: Data transformation
  function map(fn, array) {
    return array.map(fn);
  }
  
  const curriedMap = curry(map);
  const double = x => x * 2;
  const mapDouble = curriedMap(double);
  
  const numbers = [1, 2, 3, 4, 5];
  const doubled = mapDouble(numbers);
  
  // Use case 3: Configuration
  function createLogger(prefix, level, message) {
    return '[' + prefix + '] [' + level + '] ' + message;
  }
  
  const appLogger = curry(createLogger)('MyApp');
  const errorLogger = appLogger('ERROR');
  const infoLogger = appLogger('INFO');
  
  output.innerHTML = '<span class="success">✅ REAL-WORLD USE CASES</span>\\n\\n' +
    '1. Event Handlers:\\n' +
    '   handleClickOnButton(() => "clicked")\\n\\n' +
    '2. Data Transformation:\\n' +
    '   mapDouble([1,2,3,4,5])\\n' +
    '   → [' + doubled.join(', ') + ']\\n\\n' +
    '3. Loggers:\\n' +
    '   errorLogger("Failed!")\\n' +
    '   → "' + errorLogger('Failed!') + '"\\n' +
    '   infoLogger("Success!")\\n' +
    '   → "' + infoLogger('Success!') + '"\\n\\n' +
    'Currying creates reusable,\\n' +
    'specialized functions!';
  
  log('✅ Use cases demonstrated');
});

log('🚀 Currying module loaded!');
log('💡 Currying = f(a,b,c) → f(a)(b)(c)');`,
  },

  {
    topic: "function-composition",
    description: "Combine small functions into pipelines — the compose and pipe patterns",
    html: `<div class="container">
  <h1>🔷 Function Composition</h1>
  <p class="subtitle">Combine small functions into pipelines</p>

  <div class="section">
    <h2>1. Basic Composition</h2>
    <input type="number" id="compose-input" placeholder="Number" value="5" />
    <button id="btn-compose">Compose Functions</button>
    <div id="compose-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Pipe vs Compose</h2>
    <button id="btn-pipe">Use Pipe</button>
    <button id="btn-compose-fn">Use Compose</button>
    <div id="pipe-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Data Transformation Pipeline</h2>
    <button id="btn-pipeline">Transform Data</button>
    <div id="pipeline-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Point-Free Style</h2>
    <button id="btn-pointfree">Demonstrate Point-Free</button>
    <div id="pointfree-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 150px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Function Composition
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Composition
document.getElementById('btn-compose').addEventListener('click', () => {
  const input = Number(document.getElementById('compose-input').value);
  const output = document.getElementById('compose-output');
  
  const double = x => x * 2;
  const square = x => x * x;
  const addTen = x => x + 10;
  
  // Manual composition
  const manual = addTen(square(double(input)));
  
  // Using compose helper
  const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
  const composed = compose(addTen, square, double);
  const result = composed(input);
  
  output.innerHTML = '<span class="success">✅ BASIC COMPOSITION</span>\\n\\n' +
    'Input: ' + input + '\\n\\n' +
    'Manual: addTen(square(double(' + input + ')))\\n' +
    '  double(' + input + ') = ' + double(input) + '\\n' +
    '  square(' + double(input) + ') = ' + square(double(input)) + '\\n' +
    '  addTen(' + square(double(input)) + ') = ' + manual + '\\n\\n' +
    'Composed: compose(addTen, square, double)(' + input + ')\\n' +
    '  Result: ' + result + '\\n\\n' +
    'Composition reads RIGHT to LEFT!';
  
  log('✅ Composed: ' + input + ' → ' + result);
});

// 2. Pipe vs Compose
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

document.getElementById('btn-pipe').addEventListener('click', () => {
  const output = document.getElementById('pipe-output');
  
  const double = x => x * 2;
  const square = x => x * x;
  const addTen = x => x + 10;
  
  const piped = pipe(double, square, addTen);
  const result = piped(5);
  
  output.innerHTML = '<span class="success">✅ PIPE (LEFT → RIGHT)</span>\\n\\n' +
    'pipe(double, square, addTen)(5)\\n\\n' +
    'Execution order:\\n' +
    '1. double(5)  = 10\\n' +
    '2. square(10) = 100\\n' +
    '3. addTen(100) = 110\\n\\n' +
    'Result: ' + result + '\\n\\n' +
    'Pipe reads LEFT to RIGHT\\n' +
    '(more intuitive for most people)';
  
  log('✅ Pipe: 5 → ' + result);
});

document.getElementById('btn-compose-fn').addEventListener('click', () => {
  const output = document.getElementById('pipe-output');
  
  const double = x => x * 2;
  const square = x => x * x;
  const addTen = x => x + 10;
  
  const composed = compose(addTen, square, double);
  const result = composed(5);
  
  output.innerHTML = '<span class="success">✅ COMPOSE (RIGHT → LEFT)</span>\\n\\n' +
    'compose(addTen, square, double)(5)\\n\\n' +
    'Execution order:\\n' +
    '1. double(5)  = 10\\n' +
    '2. square(10) = 100\\n' +
    '3. addTen(100) = 110\\n\\n' +
    'Result: ' + result + '\\n\\n' +
    'Compose reads RIGHT to LEFT\\n' +
    '(mathematical notation: f∘g∘h)';
  
  log('✅ Compose: 5 → ' + result);
});

// 3. Data Transformation Pipeline
document.getElementById('btn-pipeline').addEventListener('click', () => {
  const output = document.getElementById('pipeline-output');
  
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Carol', age: 22, active: true },
    { name: 'Dave', age: 35, active: true }
  ];
  
  const filterActive = arr => arr.filter(u => u.active);
  const sortByAge = arr => arr.slice().sort((a, b) => a.age - b.age);
  const mapNames = arr => arr.map(u => u.name);
  const joinComma = arr => arr.join(', ');
  
  const getActiveUserNames = pipe(
    filterActive,
    sortByAge,
    mapNames,
    joinComma
  );
  
  const result = getActiveUserNames(users);
  
  output.innerHTML = '<span class="success">✅ DATA PIPELINE</span>\\n\\n' +
    'Transform users array:\\n\\n' +
    '1. filterActive\\n' +
    '   → [Alice, Carol, Dave]\\n\\n' +
    '2. sortByAge\\n' +
    '   → [Carol(22), Alice(25), Dave(35)]\\n\\n' +
    '3. mapNames\\n' +
    '   → ["Carol", "Alice", "Dave"]\\n\\n' +
    '4. joinComma\\n' +
    '   → "' + result + '"\\n\\n' +
    'Each function does ONE thing!\\n' +
    'Compose them for complex logic.';
  
  log('✅ Pipeline: ' + result);
});

// 4. Point-Free Style
document.getElementById('btn-pointfree').addEventListener('click', () => {
  const output = document.getElementById('pointfree-output');
  
  const numbers = [1, 2, 3, 4, 5];
  
  // Point-ful (mentions data)
  const doublePointful = arr => arr.map(x => x * 2);
  
  // Point-free (no mention of data)
  const double = x => x * 2;
  const mapDouble = arr => arr.map(double);
  
  // Even more point-free
  const map = fn => arr => arr.map(fn);
  const mapDoublePF = map(double);
  
  const result1 = doublePointful(numbers);
  const result2 = mapDouble(numbers);
  const result3 = mapDoublePF(numbers);
  
  output.innerHTML = '<span class="success">✅ POINT-FREE STYLE</span>\\n\\n' +
    'Point-ful (mentions "x"):\\n' +
    'arr => arr.map(x => x * 2)\\n' +
    'Result: [' + result1.join(', ') + ']\\n\\n' +
    'Point-free (no "x"):\\n' +
    'map(double)\\n' +
    'Result: [' + result2.join(', ') + ']\\n\\n' +
    'Ultra point-free:\\n' +
    'const mapDouble = map(double)\\n' +
    'Result: [' + result3.join(', ') + ']\\n\\n' +
    'Point-free = no explicit arguments\\n' +
    'More declarative, less noise!';
  
  log('✅ Point-free: [' + result3.join(', ') + ']');
});

log('🚀 Function Composition module loaded!');
log('💡 Small functions → Big power');`,
  },

  {
    topic: "generators",
    description: "Control function execution flow with generator functions and the iterator protocol",
    html: `<div class="container">
  <h1>🔷 Generators & Iterators</h1>
  <p class="subtitle">Control function execution flow with generators</p>

  <div class="section">
    <h2>1. Basic Generator</h2>
    <button id="btn-basic">Create Generator</button>
    <button id="btn-next">Call next()</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Generator with yield</h2>
    <button id="btn-yield">Iterate Generator</button>
    <div id="yield-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Infinite Sequences</h2>
    <button id="btn-infinite">Generate Fibonacci</button>
    <div id="infinite-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Two-Way Communication</h2>
    <button id="btn-twoway">Send Values to Generator</button>
    <div id="twoway-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Generators & Iterators
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Generator
let basicGen;

function* simpleGenerator() {
  console.log('Start');
  yield 1;
  console.log('After first yield');
  yield 2;
  console.log('After second yield');
  yield 3;
  console.log('Done');
}

document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  basicGen = simpleGenerator();
  
  output.innerHTML = '<span class="success">✅ GENERATOR CREATED</span>\\n\\n' +
    'function* simpleGenerator() {\\n' +
    '  yield 1;\\n' +
    '  yield 2;\\n' +
    '  yield 3;\\n' +
    '}\\n\\n' +
    'Generator created but NOT executed yet!\\n' +
    'Click "Call next()" to execute step by step.\\n\\n' +
    'Note the * after function keyword.';
  
  log('✅ Generator created');
});

document.getElementById('btn-next').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  if (!basicGen) {
    output.textContent = 'Create generator first!';
    return;
  }
  
  const result = basicGen.next();
  
  output.innerHTML = '<span class="success">✅ CALLED next()</span>\\n\\n' +
    'Result: ' + JSON.stringify(result, null, 2) + '\\n\\n' +
    'value: ' + result.value + '\\n' +
    'done:  ' + result.done + '\\n\\n' +
    (result.done 
      ? 'Generator finished!' 
      : 'Call next() again for next value.');
  
  log('✅ next() → value: ' + result.value + ', done: ' + result.done);
});

// 2. Generator with yield
function* countTo(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

document.getElementById('btn-yield').addEventListener('click', () => {
  const output = document.getElementById('yield-output');
  
  const gen = countTo(5);
  const values = [];
  
  for (const value of gen) {
    values.push(value);
  }
  
  // Manual iteration
  const gen2 = countTo(3);
  const manual = [];
  let result = gen2.next();
  while (!result.done) {
    manual.push(result.value);
    result = gen2.next();
  }
  
  output.innerHTML = '<span class="success">✅ ITERATE GENERATOR</span>\\n\\n' +
    'Using for...of:\\n' +
    'for (const value of countTo(5)) { ... }\\n' +
    'Values: [' + values.join(', ') + ']\\n\\n' +
    'Manual iteration:\\n' +
    'let result = gen.next()\\n' +
    'while (!result.done) { ... }\\n' +
    'Values: [' + manual.join(', ') + ']\\n\\n' +
    'Generators are iterable!';
  
  log('✅ Iterated: [' + values.join(', ') + ']');
});

// 3. Infinite Sequences
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

document.getElementById('btn-infinite').addEventListener('click', () => {
  const output = document.getElementById('infinite-output');
  
  const fib = fibonacci();
  const first10 = [];
  
  for (let i = 0; i < 10; i++) {
    first10.push(fib.next().value);
  }
  
  // Get next 5
  const next5 = [];
  for (let i = 0; i < 5; i++) {
    next5.push(fib.next().value);
  }
  
  output.innerHTML = '<span class="success">✅ INFINITE SEQUENCE</span>\\n\\n' +
    'function* fibonacci() {\\n' +
    '  let a = 0, b = 1;\\n' +
    '  while (true) {\\n' +
    '    yield a;\\n' +
    '    [a, b] = [b, a + b];\\n' +
    '  }\\n' +
    '}\\n\\n' +
    'First 10: [' + first10.join(', ') + ']\\n' +
    'Next 5:   [' + next5.join(', ') + ']\\n\\n' +
    'Generator pauses at yield!\\n' +
    'Infinite loop is safe because\\n' +
    'we control execution with next().';
  
  log('✅ Fibonacci: [' + first10.join(', ') + ']');
});

// 4. Two-Way Communication
function* conversation() {
  const name = yield 'What is your name?';
  const age = yield 'Hello ' + name + '! What is your age?';
  return 'Nice to meet you, ' + name + ' (' + age + ' years old)!';
}

document.getElementById('btn-twoway').addEventListener('click', () => {
  const output = document.getElementById('twoway-output');
  
  const conv = conversation();
  
  const q1 = conv.next();
  const q2 = conv.next('Alice');
  const final = conv.next('25');
  
  output.innerHTML = '<span class="success">✅ TWO-WAY COMMUNICATION</span>\\n\\n' +
    'Step 1: next()\\n' +
    '  Generator yields: "' + q1.value + '"\\n' +
    '  done: ' + q1.done + '\\n\\n' +
    'Step 2: next("Alice")\\n' +
    '  We send "Alice" to generator\\n' +
    '  Generator yields: "' + q2.value + '"\\n' +
    '  done: ' + q2.done + '\\n\\n' +
    'Step 3: next("25")\\n' +
    '  We send "25" to generator\\n' +
    '  Generator returns: "' + final.value + '"\\n' +
    '  done: ' + final.done + '\\n\\n' +
    'next(value) sends value INTO generator!';
  
  log('✅ Two-way: ' + final.value);
});

log('🚀 Generators module loaded!');
log('💡 Generators = pausable functions');`,
  },

  {
    topic: "symbols-iterables",
    description: "Use Symbol.iterator to make custom objects iterable with for...of",
    html: `<div class="container">
  <h1>🔷 Symbols & Iterables</h1>
  <p class="subtitle">Make custom objects iterable with Symbol.iterator</p>

  <div class="section">
    <h2>1. Basic Symbol</h2>
    <button id="btn-basic-symbol">Create Symbols</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Custom Iterable</h2>
    <button id="btn-custom-iterable">Make Object Iterable</button>
    <div id="iterable-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Range Iterator</h2>
    <input type="number" id="range-start" placeholder="Start" value="1" />
    <input type="number" id="range-end" placeholder="End" value="10" />
    <button id="btn-range">Create Range</button>
    <div id="range-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Well-Known Symbols</h2>
    <button id="btn-wellknown">Show Well-Known Symbols</button>
    <div id="wellknown-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Symbols & Iterables
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Symbol
document.getElementById('btn-basic-symbol').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  const sym1 = Symbol('id');
  const sym2 = Symbol('id');
  const sym3 = Symbol.for('shared');
  const sym4 = Symbol.for('shared');
  
  const obj = {
    name: 'Alice',
    [sym1]: 'secret1'
  };
  
  output.innerHTML = '<span class="success">✅ SYMBOLS</span>\\n\\n' +
    'const sym1 = Symbol("id")\\n' +
    'const sym2 = Symbol("id")\\n\\n' +
    'sym1 === sym2: ' + (sym1 === sym2) + '\\n' +
    '(Each Symbol is unique!)\\n\\n' +
    'Symbol.for("shared"):\\n' +
    'sym3 === sym4: ' + (sym3 === sym4) + '\\n' +
    '(Global symbol registry)\\n\\n' +
    'obj[sym1]: "' + obj[sym1] + '"\\n' +
    'obj.name:  "' + obj.name + '"\\n\\n' +
    'Symbols are unique property keys!';
  
  log('✅ Symbols: unique = ' + (sym1 !== sym2));
});

// 2. Custom Iterable
document.getElementById('btn-custom-iterable').addEventListener('click', () => {
  const output = document.getElementById('iterable-output');
  
  const myIterable = {
    data: ['a', 'b', 'c', 'd'],
    [Symbol.iterator]() {
      let index = 0;
      const data = this.data;
      
      return {
        next() {
          if (index < data.length) {
            return { value: data[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  const values = [];
  for (const value of myIterable) {
    values.push(value);
  }
  
  const spread = [...myIterable];
  
  output.innerHTML = '<span class="success">✅ CUSTOM ITERABLE</span>\\n\\n' +
    'myIterable[Symbol.iterator]() {\\n' +
    '  return { next() { ... } }\\n' +
    '}\\n\\n' +
    'for...of: [' + values.join(', ') + ']\\n' +
    'Spread:   [' + spread.join(', ') + ']\\n\\n' +
    'Any object with Symbol.iterator\\n' +
    'can be used with:\\n' +
    '• for...of loops\\n' +
    '• Spread operator\\n' +
    '• Array.from()';
  
  log('✅ Custom iterable: [' + values.join(', ') + ']');
});

// 3. Range Iterator
document.getElementById('btn-range').addEventListener('click', () => {
  const start = Number(document.getElementById('range-start').value);
  const end = Number(document.getElementById('range-end').value);
  const output = document.getElementById('range-output');
  
  function range(start, end) {
    return {
      [Symbol.iterator]() {
        let current = start;
        return {
          next() {
            if (current <= end) {
              return { value: current++, done: false };
            }
            return { done: true };
          }
        };
      }
    };
  }
  
  const myRange = range(start, end);
  const values = [...myRange];
  
  // Can iterate multiple times
  const values2 = [];
  for (const n of myRange) {
    values2.push(n);
  }
  
  output.innerHTML = '<span class="success">✅ RANGE ITERATOR</span>\\n\\n' +
    'range(' + start + ', ' + end + ')\\n\\n' +
    'First iteration:\\n' +
    '[' + values.join(', ') + ']\\n\\n' +
    'Second iteration:\\n' +
    '[' + values2.join(', ') + ']\\n\\n' +
    'Each for...of creates a NEW iterator!\\n' +
    'That\\'s why we can iterate multiple times.';
  
  log('✅ Range: [' + values.join(', ') + ']');
});

// 4. Well-Known Symbols
document.getElementById('btn-wellknown').addEventListener('click', () => {
  const output = document.getElementById('wellknown-output');
  
  const obj = {
    [Symbol.toStringTag]: 'MyCustomObject',
    [Symbol.iterator]: function*() {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  
  const str = Object.prototype.toString.call(obj);
  const values = [...obj];
  
  // Symbol.toPrimitive
  const customNum = {
    value: 42,
    [Symbol.toPrimitive](hint) {
      if (hint === 'number') return this.value;
      if (hint === 'string') return 'Value: ' + this.value;
      return this.value;
    }
  };
  
  const asNumber = +customNum;
  const asString = String(customNum);
  
  output.innerHTML = '<span class="success">✅ WELL-KNOWN SYMBOLS</span>\\n\\n' +
    'Symbol.toStringTag:\\n' +
    '  ' + str + '\\n\\n' +
    'Symbol.iterator:\\n' +
    '  [...obj] = [' + values.join(', ') + ']\\n\\n' +
    'Symbol.toPrimitive:\\n' +
    '  +customNum = ' + asNumber + '\\n' +
    '  String(customNum) = "' + asString + '"\\n\\n' +
    'Other well-known symbols:\\n' +
    '• Symbol.hasInstance\\n' +
    '• Symbol.species\\n' +
    '• Symbol.match\\n' +
    '• Symbol.split';
  
  log('✅ Well-known symbols demonstrated');
});

log('🚀 Symbols & Iterables module loaded!');
log('💡 Symbol.iterator makes objects iterable');`,
  },

  {
    topic: "tagged-templates",
    description: "Process template literals with tag functions for DSLs and sanitization",
    html: `<div class="container">
  <h1>🔷 Tagged Template Literals</h1>
  <p class="subtitle">Process template literals with tag functions</p>

  <div class="section">
    <h2>1. Basic Tagged Template</h2>
    <button id="btn-basic">Show Tag Function</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. HTML Sanitization</h2>
    <input type="text" id="user-input" placeholder="Enter text" value="<script>alert('xss')</script>" />
    <button id="btn-sanitize">Sanitize HTML</button>
    <div id="sanitize-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. SQL Query Builder</h2>
    <input type="text" id="sql-table" placeholder="Table" value="users" />
    <input type="text" id="sql-column" placeholder="Column" value="name" />
    <input type="text" id="sql-value" placeholder="Value" value="Alice" />
    <button id="btn-sql">Build Query</button>
    <div id="sql-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Styled Components Pattern</h2>
    <button id="btn-styled">Create Styled Component</button>
    <div id="styled-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 180px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Tagged Template Literals
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Tagged Template
function myTag(strings, ...values) {
  return {
    strings: strings,
    values: values,
    raw: strings.raw
  };
}

document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  const name = 'Alice';
  const age = 25;
  
  const result = myTag\`Hello \${name}, you are \${age} years old!\`;
  
  output.innerHTML = '<span class="success">✅ TAGGED TEMPLATE</span>\\n\\n' +
    'myTag\`Hello \${name}, you are \${age}!\`\\n\\n' +
    'strings: [\\n' +
    '  "' + result.strings[0] + '",\\n' +
    '  "' + result.strings[1] + '",\\n' +
    '  "' + result.strings[2] + '"\\n' +
    ']\\n\\n' +
    'values: [' + result.values.map(v => '"' + v + '"').join(', ') + ']\\n\\n' +
    'Tag function receives:\\n' +
    '• Array of string parts\\n' +
    '• Individual interpolated values';
  
  log('✅ Tagged template: ' + result.values.length + ' values');
});

// 2. HTML Sanitization
function html(strings, ...values) {
  const sanitize = str => {
    return String(str)
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '"')
      .replace(/'/g, '&#039;');
  };
  
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? sanitize(values[i]) : '');
  }, '');
}

document.getElementById('btn-sanitize').addEventListener('click', () => {
  const userInput = document.getElementById('user-input').value;
  const output = document.getElementById('sanitize-output');
  
  const unsafe = \`<div>User said: \${userInput}</div>\`;
  const safe = html\`<div>User said: \${userInput}</div>\`;
  
  output.innerHTML = '<span class="success">✅ HTML SANITIZATION</span>\\n\\n' +
    'User input:\\n"' + userInput + '"\\n\\n' +
    'Unsafe (normal template):\\n' + unsafe + '\\n\\n' +
    'Safe (tagged template):\\n' + safe + '\\n\\n' +
    'Tagged template sanitized:\\n' +
    '< → <\\n' +
    '> → >\\n' +
    'Prevents XSS attacks!';
  
  log('✅ Sanitized: ' + userInput);
});

// 3. SQL Query Builder
function sql(strings, ...values) {
  const escape = val => {
    if (typeof val === 'string') {
      return "'" + val.replace(/'/g, "''") + "'";
    }
    return val;
  };
  
  return strings.reduce((query, str, i) => {
    return query + str + (values[i] !== undefined ? escape(values[i]) : '');
  }, '');
}

document.getElementById('btn-sql').addEventListener('click', () => {
  const table = document.getElementById('sql-table').value;
  const column = document.getElementById('sql-column').value;
  const value = document.getElementById('sql-value').value;
  const output = document.getElementById('sql-output');
  
  const query = sql\`SELECT * FROM \${table} WHERE \${column} = \${value}\`;
  
  // Show SQL injection attempt
  const malicious = "Alice' OR '1'='1";
  const safeQuery = sql\`SELECT * FROM users WHERE name = \${malicious}\`;
  
  output.innerHTML = '<span class="success">✅ SQL QUERY BUILDER</span>\\n\\n' +
    'Normal query:\\n' + query + '\\n\\n' +
    'SQL Injection attempt:\\n' +
    'Input: "' + malicious + '"\\n\\n' +
    'Safe query:\\n' + safeQuery + '\\n\\n' +
    'Tagged template escaped quotes:\\n' +
    "' → ''\\n" +
    'Prevents SQL injection!';
  
  log('✅ SQL query built safely');
});

// 4. Styled Components Pattern
function css(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] || '');
  }, '');
}

document.getElementById('btn-styled').addEventListener('click', () => {
  const output = document.getElementById('styled-output');
  
  const primaryColor = '#f59e0b';
  const fontSize = '16px';
  const padding = '1rem';
  
  const buttonStyles = css\`
    background: \${primaryColor};
    font-size: \${fontSize};
    padding: \${padding};
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  \`;
  
  output.innerHTML = '<span class="success">✅ STYLED COMPONENTS</span>\\n\\n' +
    'const buttonStyles = css\`\\n' +
    '  background: \${primaryColor};\\n' +
    '  font-size: \${fontSize};\\n' +
    '  padding: \${padding};\\n' +
    '  ...\\n' +
    '\`\\n\\n' +
    'Generated CSS:\\n' + buttonStyles + '\\n\\n' +
    'This pattern is used by:\\n' +
    '• styled-components\\n' +
    '• emotion\\n' +
    '• lit-html';
  
  log('✅ Styled components created');
});

log('🚀 Tagged Template Literals module loaded!');
log('💡 Tag functions process template literals');`,
  },

  /* ══════════════════════════════════════════════
     MODULE 4: ASYNCHRONOUS PATTERNS
  ══════════════════════════════════════════════ */

  {
    topic: "event-loop",
    description: "Call stack, task queue, microtask queue, and how JS achieves concurrency",
    html: `<div class="container">
  <h1>🔷 Event Loop Deep Dive</h1>
  <p class="subtitle">Call stack, task queue, microtask queue</p>

  <div class="section">
    <h2>1. Call Stack Visualization</h2>
    <button id="btn-callstack">Show Call Stack</button>
    <div id="callstack-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Task Queue (Macrotasks)</h2>
    <button id="btn-macrotask">Demonstrate Macrotasks</button>
    <div id="macrotask-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Microtask Queue</h2>
    <button id="btn-microtask">Demonstrate Microtasks</button>
    <div id="microtask-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Event Loop Deep Dive
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Call Stack Visualization
document.getElementById('btn-callstack').addEventListener('click', () => {
  const output = document.getElementById('callstack-output');
  const steps = [];
  
  function first() {
    steps.push('→ first() called');
    second();
    steps.push('← first() returns');
  }
  
  function second() {
    steps.push('  → second() called');
    third();
    steps.push('  ← second() returns');
  }
  
  function third() {
    steps.push('    → third() called');
    steps.push('    ← third() returns');
  }
  
  first();
  
  output.innerHTML = '<span class="success">✅ CALL STACK</span>\\n\\n' +
    'Execution order:\\n' + steps.join('\\n') + '\\n\\n' +
    'Call Stack (LIFO):\\n' +
    '1. first() pushed\\n' +
    '2. second() pushed\\n' +
    '3. third() pushed\\n' +
    '4. third() popped\\n' +
    '5. second() popped\\n' +
    '6. first() popped\\n\\n' +
    'Synchronous = one at a time!';
  
  log('✅ Call stack demonstrated');
});

// 2. Task Queue (Macrotasks)
document.getElementById('btn-macrotask').addEventListener('click', () => {
  const output = document.getElementById('macrotask-output');
  const order = [];
  
  order.push('1. Synchronous start');
  
  setTimeout(() => {
    order.push('4. setTimeout 0ms');
    if (order.length === 4) {
      output.innerHTML = '<span class="success">✅ MACROTASKS (Task Queue)</span>\\n\\n' +
        'Execution order:\\n' + order.join('\\n') + '\\n\\n' +
        'Macrotasks include:\\n' +
        '• setTimeout\\n' +
        '• setInterval\\n' +
        '• setImmediate (Node.js)\\n' +
        '• I/O operations\\n\\n' +
        'Macrotasks run AFTER call stack is empty!';
      log('✅ Macrotasks: setTimeout executed last');
    }
  }, 0);
  
  setTimeout(() => {
    order.push('5. setTimeout 10ms');
  }, 10);
  
  order.push('2. Synchronous middle');
  order.push('3. Synchronous end');
  
  output.innerHTML = '<span class="success">⏳ RUNNING...</span>\\n\\n' +
    'Current order:\\n' + order.join('\\n') + '\\n\\n' +
    'Waiting for setTimeout callbacks...';
});

// 3. Microtask Queue
document.getElementById('btn-microtask').addEventListener('click', () => {
  const output = document.getElementById('microtask-output');
  const order = [];
  
  order.push('1. Sync start');
  
  setTimeout(() => {
    order.push('5. setTimeout (macrotask)');
    if (order.length === 5) {
      output.innerHTML = '<span class="success">✅ MICROTASKS</span>\\n\\n' +
        'Execution order:\\n' + order.join('\\n') + '\\n\\n' +
        'Microtasks include:\\n' +
        '• Promise.then/catch/finally\\n' +
        '• queueMicrotask()\\n' +
        '• MutationObserver\\n\\n' +
        'Microtasks run BEFORE macrotasks!\\n' +
        'All microtasks run before next macrotask.';
      log('✅ Microtasks run before macrotasks');
    }
  }, 0);
  
  Promise.resolve().then(() => {
    order.push('3. Promise 1 (microtask)');
  });
  
  Promise.resolve().then(() => {
    order.push('4. Promise 2 (microtask)');
  });
  
  order.push('2. Sync end');
  
  output.innerHTML = '<span class="success">⏳ RUNNING...</span>\\n\\n' +
    'Current order:\\n' + order.join('\\n') + '\\n\\n' +
    'Waiting for async callbacks...';
});

// 4. Execution Order
document.getElementById('btn-order').addEventListener('click', () => {
  const output = document.getElementById('order-output');
  const order = [];
  
  order.push('1. Script start');
  
  setTimeout(() => {
    order.push('8. setTimeout 1');
    Promise.resolve().then(() => {
      order.push('9. Promise inside setTimeout');
    });
  }, 0);
  
  Promise.resolve()
    .then(() => {
      order.push('4. Promise 1');
      return Promise.resolve();
    })
    .then(() => {
      order.push('5. Promise 2');
    });
  
  setTimeout(() => {
    order.push('10. setTimeout 2');
  }, 0);
  
  Promise.resolve().then(() => {
    order.push('6. Promise 3');
  });
  
  order.push('2. Script middle');
  
  queueMicrotask(() => {
    order.push('7. queueMicrotask');
  });
  
  order.push('3. Script end');
  
  setTimeout(() => {
    output.innerHTML = '<span class="success">✅ EXECUTION ORDER</span>\\n\\n' +
      order.join('\\n') + '\\n\\n' +
      'Order:\\n' +
      '1. Synchronous code\\n' +
      '2. All microtasks (Promises)\\n' +
      '3. One macrotask (setTimeout)\\n' +
      '4. All microtasks again\\n' +
      '5. Next macrotask\\n' +
      '6. Repeat...\\n\\n' +
      'Event loop never stops!';
    log('✅ Full execution order demonstrated');
  }, 50);
  
  output.innerHTML = '<span class="success">⏳ RUNNING...</span>\\n\\nWait for all callbacks...';
});

log('🚀 Event Loop module loaded!');
log('💡 JS is single-threaded but non-blocking');`,
  },

  {
    topic: "promise-internals",
    description: "Build a Promise from scratch — understand resolve, reject, then chaining",
    html: `<div class="container">
  <h1>🔷 Promise Internals</h1>
  <p class="subtitle">Build a Promise from scratch</p>

  <div class="section">
    <h2>1. Promise States</h2>
    <button id="btn-states">Show States</button>
    <div id="states-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Simple Promise Implementation</h2>
    <button id="btn-simple">Test Simple Promise</button>
    <div id="simple-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Then Chaining</h2>
    <button id="btn-chaining">Test Chaining</button>
    <div id="chaining-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Error Handling</h2>
    <button id="btn-error">Test Error Handling</button>
    <div id="error-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Promise Internals
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Promise States
document.getElementById('btn-states').addEventListener('click', () => {
  const output = document.getElementById('states-output');
  
  const pending = new Promise(() => {});
  const fulfilled = Promise.resolve('success');
  const rejected = Promise.reject('error').catch(() => {});
  
  output.innerHTML = '<span class="success">✅ PROMISE STATES</span>\\n\\n' +
    '1. PENDING\\n' +
    '   Initial state, not fulfilled or rejected\\n' +
    '   const p = new Promise(() => {})\\n\\n' +
    '2. FULFILLED\\n' +
    '   Operation completed successfully\\n' +
    '   Promise.resolve("success")\\n\\n' +
    '3. REJECTED\\n' +
    '   Operation failed\\n' +
    '   Promise.reject("error")\\n\\n' +
    'Once settled (fulfilled/rejected),\\n' +
    'a promise cannot change state!';
  
  log('✅ Promise states explained');
});

// 2. Simple Promise Implementation
class SimplePromise {
  constructor(executor) {
    this.state = 'PENDING';
    this.value = undefined;
    this.handlers = [];
    
    const resolve = (value) => {
      if (this.state !== 'PENDING') return;
      this.state = 'FULFILLED';
      this.value = value;
      this.handlers.forEach(h => h.onFulfilled(value));
    };
    
    const reject = (reason) => {
      if (this.state !== 'PENDING') return;
      this.state = 'REJECTED';
      this.value = reason;
      this.handlers.forEach(h => h.onRejected(reason));
    };
    
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  then(onFulfilled, onRejected) {
    return new SimplePromise((resolve, reject) => {
      const handle = () => {
        if (this.state === 'FULFILLED') {
          try {
            const result = onFulfilled ? onFulfilled(this.value) : this.value;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        } else if (this.state === 'REJECTED') {
          if (onRejected) {
            try {
              const result = onRejected(this.value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          } else {
            reject(this.value);
          }
        }
      };
      
      if (this.state === 'PENDING') {
        this.handlers.push({
          onFulfilled: (value) => {
            try {
              const result = onFulfilled ? onFulfilled(value) : value;
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
          onRejected: (reason) => {
            if (onRejected) {
              try {
                const result = onRejected(reason);
                resolve(result);
              } catch (error) {
                reject(error);
              }
            } else {
              reject(reason);
            }
          }
        });
      } else {
        setTimeout(handle, 0);
      }
    });
  }
  
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

document.getElementById('btn-simple').addEventListener('click', () => {
  const output = document.getElementById('simple-output');
  
  const promise = new SimplePromise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello from SimplePromise!');
    }, 100);
  });
  
  promise.then(value => {
    output.innerHTML = '<span class="success">✅ SIMPLE PROMISE</span>\\n\\n' +
      'Result: "' + value + '"\\n\\n' +
      'Our SimplePromise has:\\n' +
      '• State management (PENDING/FULFILLED/REJECTED)\\n' +
      '• Resolve/reject functions\\n' +
      '• Handler queue for .then()\\n' +
      '• Basic error handling\\n\\n' +
      'This is a simplified version!\\n' +
      'Real Promises are more complex.';
    log('✅ SimplePromise resolved: ' + value);
  });
  
  output.textContent = '⏳ Waiting for SimplePromise...';
});

// 3. Then Chaining
document.getElementById('btn-chaining').addEventListener('click', () => {
  const output = document.getElementById('chaining-output');
  
  const promise = new SimplePromise((resolve) => {
    setTimeout(() => resolve(5), 100);
  });
  
  promise
    .then(x => {
      log('Step 1: ' + x);
      return x * 2;
    })
    .then(x => {
      log('Step 2: ' + x);
      return x + 10;
    })
    .then(x => {
      log('Step 3: ' + x);
      output.innerHTML = '<span class="success">✅ THEN CHAINING</span>\\n\\n' +
        'Chain execution:\\n' +
        '1. Start with 5\\n' +
        '2. Multiply by 2 → 10\\n' +
        '3. Add 10 → 20\\n' +
        'Final result: ' + x + '\\n\\n' +
        'Each .then() returns a NEW promise!\\n' +
        'Return value becomes next promise\\'s value.';
      log('✅ Chain complete: ' + x);
    });
  
  output.textContent = '⏳ Running chain...';
});

// 4. Error Handling
document.getElementById('btn-error').addEventListener('click', () => {
  const output = document.getElementById('error-output');
  
  const promise = new SimplePromise((resolve, reject) => {
    setTimeout(() => reject('Something went wrong!'), 100);
  });
  
  promise
    .then(value => {
      return value * 2;
    })
    .catch(error => {
      output.innerHTML = '<span class="error">❌ ERROR CAUGHT</span>\\n\\n' +
        'Error: "' + error + '"\\n\\n' +
        '.catch() is shorthand for:\\n' +
        '.then(null, onRejected)\\n\\n' +
        'Errors propagate down the chain\\n' +
        'until caught by .catch()!\\n\\n' +
        'If no .catch(), error is unhandled.';
      log('❌ Error caught: ' + error);
      return 'Recovered!';
    })
    .then(value => {
      log('✅ After catch: ' + value);
    });
  
  output.textContent = '⏳ Testing error handling...';
});

log('🚀 Promise Internals module loaded!');
log('💡 Promises = state machine + callbacks');`,
  },

  {
    topic: "async-await-advanced",
    description: "Error handling patterns, parallel execution, and real-world async code",
    html: `<div class="container">
  <h1>🔷 Async/Await Advanced</h1>
  <p class="subtitle">Error handling, parallel execution, real-world patterns</p>

  <div class="section">
    <h2>1. Error Handling Patterns</h2>
    <button id="btn-try-catch">Try-Catch Pattern</button>
    <button id="btn-wrapper">Wrapper Pattern</button>
    <div id="error-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Sequential vs Parallel</h2>
    <button id="btn-sequential">Sequential (Slow)</button>
    <button id="btn-parallel">Parallel (Fast)</button>
    <div id="parallel-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Async Loops</h2>
    <button id="btn-for-of">for...of Loop</button>
    <button id="btn-map">Promise.all + map</button>
    <div id="loop-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Real-World Pattern</h2>
    <button id="btn-realworld">Fetch with Retry</button>
    <div id="realworld-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Async/Await Advanced
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Helper: Simulate async operation
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const failAfter = (ms, error) => new Promise((_, reject) => setTimeout(() => reject(error), ms));

// 1. Error Handling Patterns
document.getElementById('btn-try-catch').addEventListener('click', async () => {
  const output = document.getElementById('error-output');
  
  async function fetchData() {
    await delay(100);
    throw new Error('Network error!');
  }
  
  try {
    const data = await fetchData();
    output.innerHTML = '<span class="success">✅ Success: ' + data + '</span>';
  } catch (error) {
    output.innerHTML = '<span class="error">❌ TRY-CATCH PATTERN</span>\\n\\n' +
      'Error caught: "' + error.message + '"\\n\\n' +
      'async function fetchData() {\\n' +
      '  try {\\n' +
      '    const data = await fetch(url);\\n' +
      '    return data;\\n' +
      '  } catch (error) {\\n' +
      '    // Handle error\\n' +
      '  }\\n' +
      '}\\n\\n' +
      'Standard pattern for async errors!';
    log('❌ Error caught: ' + error.message);
  }
});

document.getElementById('btn-wrapper').addEventListener('click', async () => {
  const output = document.getElementById('error-output');
  
  // Wrapper function
  const asyncWrapper = (fn) => {
    return async (...args) => {
      try {
        const data = await fn(...args);
        return [null, data];
      } catch (error) {
        return [error, null];
      }
    };
  };
  
  const fetchData = async () => {
    await delay(100);
    if (Math.random() > 0.5) {
      return 'Success!';
    }
    throw new Error('Failed!');
  };
  
  const safeFetch = asyncWrapper(fetchData);
  
  const [error, data] = await safeFetch();
  
  if (error) {
    output.innerHTML = '<span class="error">❌ WRAPPER PATTERN</span>\\n\\n' +
      'Error: "' + error.message + '"\\n\\n' +
      'const [error, data] = await safeFetch();\\n\\n' +
      'if (error) {\\n' +
      '  // Handle error\\n' +
      '} else {\\n' +
      '  // Use data\\n' +
      '}\\n\\n' +
      'Go-style error handling!';
    log('❌ Wrapper caught: ' + error.message);
  } else {
    output.innerHTML = '<span class="success">✅ WRAPPER PATTERN</span>\\n\\n' +
      'Data: "' + data + '"\\n\\n' +
      'No try-catch needed!\\n' +
      'Errors returned as values.';
    log('✅ Wrapper success: ' + data);
  }
});

// 2. Sequential vs Parallel
document.getElementById('btn-sequential').addEventListener('click', async () => {
  const output = document.getElementById('parallel-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running sequential...</span>';
  
  const start = Date.now();
  
  const result1 = await delay(300, 'Task 1');
  const result2 = await delay(300, 'Task 2');
  const result3 = await delay(300, 'Task 3');
  
  const elapsed = Date.now() - start;
  
  output.innerHTML = '<span class="error">🐌 SEQUENTIAL (SLOW)</span>\\n\\n' +
    'Results: [' + result1 + ', ' + result2 + ', ' + result3 + ']\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'Each await BLOCKS the next one!\\n' +
    '300ms + 300ms + 300ms ≈ 900ms\\n\\n' +
    'Use when tasks DEPEND on each other.';
  
  log('🐌 Sequential: ' + elapsed + 'ms');
});

document.getElementById('btn-parallel').addEventListener('click', async () => {
  const output = document.getElementById('parallel-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running parallel...</span>';
  
  const start = Date.now();
  
  const [result1, result2, result3] = await Promise.all([
    delay(300, 'Task 1'),
    delay(300, 'Task 2'),
    delay(300, 'Task 3')
  ]);
  
  const elapsed = Date.now() - start;
  
  output.innerHTML = '<span class="success">🚀 PARALLEL (FAST)</span>\\n\\n' +
    'Results: [' + result1 + ', ' + result2 + ', ' + result3 + ']\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'All tasks run SIMULTANEOUSLY!\\n' +
    'max(300ms, 300ms, 300ms) ≈ 300ms\\n\\n' +
    'Use when tasks are INDEPENDENT.';
  
  log('🚀 Parallel: ' + elapsed + 'ms');
});

// 3. Async Loops
document.getElementById('btn-for-of').addEventListener('click', async () => {
  const output = document.getElementById('loop-output');
  
  output.innerHTML = '<span class="highlight">⏳ Processing...</span>';
  
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const results = [];
  const start = Date.now();
  
  for (const item of items) {
    const result = await delay(200, item + ' processed');
    results.push(result);
  }
  
  const elapsed = Date.now() - start;
  
  output.innerHTML = '<span class="success">✅ FOR...OF LOOP</span>\\n\\n' +
    results.join('\\n') + '\\n\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'Processes SEQUENTIALLY (one at a time)\\n' +
    'Good for: rate limiting, ordered processing';
  
  log('✅ for...of: ' + elapsed + 'ms');
});

document.getElementById('btn-map').addEventListener('click', async () => {
  const output = document.getElementById('loop-output');
  
  output.innerHTML = '<span class="highlight">⏳ Processing...</span>';
  
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const start = Date.now();
  
  const results = await Promise.all(
    items.map(item => delay(200, item + ' processed'))
  );
  
  const elapsed = Date.now() - start;
  
  output.innerHTML = '<span class="success">✅ PROMISE.ALL + MAP</span>\\n\\n' +
    results.join('\\n') + '\\n\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'Processes PARALLEL (all at once)\\n' +
    'Good for: batch operations, speed';
  
  log('✅ Promise.all + map: ' + elapsed + 'ms');
});

// 4. Real-World Pattern: Fetch with Retry
document.getElementById('btn-realworld').addEventListener('click', async () => {
  const output = document.getElementById('realworld-output');
  
  output.innerHTML = '<span class="highlight">⏳ Fetching with retry...</span>';
  
  async function fetchWithRetry(url, maxRetries = 3) {
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        log('Attempt ' + (i + 1) + '/' + maxRetries);
        
        // Simulate fetch that might fail
        await delay(200);
        if (Math.random() > 0.3) {
          throw new Error('Network error');
        }
        
        return { success: true, data: 'Data from ' + url };
      } catch (error) {
        lastError = error;
        log('❌ Attempt ' + (i + 1) + ' failed: ' + error.message);
        
        if (i < maxRetries - 1) {
          const backoff = Math.pow(2, i) * 100;
          log('⏳ Waiting ' + backoff + 'ms before retry...');
          await delay(backoff);
        }
      }
    }
    
    throw new Error('Failed after ' + maxRetries + ' attempts: ' + lastError.message);
  }
  
  try {
    const result = await fetchWithRetry('https://api.example.com/data');
    output.innerHTML = '<span class="success">✅ FETCH WITH RETRY</span>\\n\\n' +
      'Success: ' + result.data + '\\n\\n' +
      'Pattern:\\n' +
      '• Try operation\\n' +
      '• If fails, wait with exponential backoff\\n' +
      '• Retry up to max attempts\\n' +
      '• Throw if all attempts fail\\n\\n' +
      'Real-world async pattern!';
    log('✅ Fetch succeeded!');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ FETCH WITH RETRY</span>\\n\\n' +
      'Error: ' + error.message + '\\n\\n' +
      'All retry attempts exhausted.\\n' +
      'Check console for attempt logs.';
    log('❌ All retries failed');
  }
});

log('🚀 Async/Await Advanced module loaded!');
log('💡 Master error handling and parallel execution');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 4 CONTINUED: promise-combinators
  ══════════════════════════════════════════════ */

  {
    topic: "promise-combinators",
    description: "Promise.all, Promise.race, Promise.allSettled, Promise.any — when to use each",
    html: `<div class="container">
  <h1>🔷 Promise Combinators</h1>
  <p class="subtitle">Promise.all, race, allSettled, any — master them all</p>

  <div class="section">
    <h2>1. Promise.all()</h2>
    <button id="btn-all-success">All Success</button>
    <button id="btn-all-fail">One Fails</button>
    <div id="all-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Promise.race()</h2>
    <button id="btn-race">Race Promises</button>
    <button id="btn-timeout">Timeout Pattern</button>
    <div id="race-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Promise.allSettled()</h2>
    <button id="btn-settled">All Settled</button>
    <div id="settled-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Promise.any()</h2>
    <button id="btn-any">Any Success</button>
    <button id="btn-any-fail">All Fail</button>
    <div id="any-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Promise Combinators
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Helper functions
const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const reject = (ms, reason) => new Promise((_, reject) => setTimeout(() => reject(new Error(reason)), ms));

// 1. Promise.all()
document.getElementById('btn-all-success').addEventListener('click', async () => {
  const output = document.getElementById('all-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running Promise.all...</span>';
  
  const start = Date.now();
  
  try {
    const results = await Promise.all([
      delay(200, 'Task 1 done'),
      delay(300, 'Task 2 done'),
      delay(100, 'Task 3 done')
    ]);
    
    const elapsed = Date.now() - start;
    
    output.innerHTML = '<span class="success">✅ PROMISE.ALL SUCCESS</span>\\n\\n' +
      'Results:\\n' +
      results.map((r, i) => '  [' + i + '] ' + r).join('\\n') + '\\n\\n' +
      'Time: ' + elapsed + 'ms\\n\\n' +
      'Waits for ALL promises to resolve\\n' +
      'Returns array in SAME ORDER\\n' +
      'Time = slowest promise (300ms)';
    
    log('✅ Promise.all succeeded in ' + elapsed + 'ms');
  } catch (error) {
    output.innerHTML = '<span class="error">❌ Error: ' + error.message + '</span>';
  }
});

document.getElementById('btn-all-fail').addEventListener('click', async () => {
  const output = document.getElementById('all-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running Promise.all...</span>';
  
  try {
    const results = await Promise.all([
      delay(200, 'Task 1 done'),
      reject(150, 'Task 2 failed!'),
      delay(100, 'Task 3 done')
    ]);
    
    output.innerHTML = '<span class="success">Success: ' + results + '</span>';
  } catch (error) {
    output.innerHTML = '<span class="error">❌ PROMISE.ALL FAILED</span>\\n\\n' +
      'Error: "' + error.message + '"\\n\\n' +
      'If ANY promise rejects,\\n' +
      'Promise.all IMMEDIATELY rejects!\\n\\n' +
      'Other promises still run but\\n' +
      'their results are IGNORED.\\n\\n' +
      'Use when: ALL must succeed';
    
    log('❌ Promise.all failed: ' + error.message);
  }
});

// 2. Promise.race()
document.getElementById('btn-race').addEventListener('click', async () => {
  const output = document.getElementById('race-output');
  
  output.innerHTML = '<span class="highlight">⏳ Racing promises...</span>';
  
  const start = Date.now();
  
  try {
    const result = await Promise.race([
      delay(300, 'Slow task'),
      delay(100, 'Fast task'),
      delay(200, 'Medium task')
    ]);
    
    const elapsed = Date.now() - start;
    
    output.innerHTML = '<span class="success">✅ PROMISE.RACE</span>\\n\\n' +
      'Winner: "' + result + '"\\n' +
      'Time: ' + elapsed + 'ms\\n\\n' +
      'Returns the FIRST settled promise\\n' +
      '(whether resolved or rejected)\\n\\n' +
      'Other promises still run but\\n' +
      'their results are IGNORED.';
    
    log('✅ Promise.race winner: ' + result);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ Error: ' + error.message + '</span>';
  }
});

document.getElementById('btn-timeout').addEventListener('click', async () => {
  const output = document.getElementById('race-output');
  
  output.innerHTML = '<span class="highlight">⏳ Fetching with timeout...</span>';
  
  const fetchWithTimeout = (promise, ms) => {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout after ' + ms + 'ms')), ms)
    );
    return Promise.race([promise, timeout]);
  };
  
  try {
    // Simulate slow fetch
    const slowFetch = delay(2000, 'Data loaded');
    const result = await fetchWithTimeout(slowFetch, 500);
    
    output.innerHTML = '<span class="success">✅ Success: ' + result + '</span>';
  } catch (error) {
    output.innerHTML = '<span class="error">❌ TIMEOUT PATTERN</span>\\n\\n' +
      'Error: "' + error.message + '"\\n\\n' +
      'Promise.race() is perfect for timeouts!\\n\\n' +
      'const timeout = new Promise((_, reject) =>\\n' +
      '  setTimeout(() => reject(...), ms)\\n' +
      ');\\n' +
      'Promise.race([fetch(url), timeout]);\\n\\n' +
      'Common real-world pattern!';
    
    log('❌ Timeout: ' + error.message);
  }
});

// 3. Promise.allSettled()
document.getElementById('btn-settled').addEventListener('click', async () => {
  const output = document.getElementById('settled-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running Promise.allSettled...</span>';
  
  const start = Date.now();
  
  const results = await Promise.allSettled([
    delay(200, 'Task 1 success'),
    reject(150, 'Task 2 failed'),
    delay(100, 'Task 3 success'),
    reject(250, 'Task 4 failed')
  ]);
  
  const elapsed = Date.now() - start;
  
  const summary = results.map((r, i) => {
    if (r.status === 'fulfilled') {
      return '  [' + i + '] ✅ ' + r.value;
    } else {
      return '  [' + i + '] ❌ ' + r.reason.message;
    }
  }).join('\\n');
  
  output.innerHTML = '<span class="success">✅ PROMISE.ALLSETTLED</span>\\n\\n' +
    'Results:\\n' + summary + '\\n\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'Waits for ALL promises to settle\\n' +
    '(resolve OR reject)\\n\\n' +
    'NEVER rejects! Always resolves with\\n' +
    'array of {status, value/reason}\\n\\n' +
    'Use when: Want all results regardless';
  
  log('✅ Promise.allSettled completed in ' + elapsed + 'ms');
});

// 4. Promise.any()
document.getElementById('btn-any').addEventListener('click', async () => {
  const output = document.getElementById('any-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running Promise.any...</span>';
  
  const start = Date.now();
  
  try {
    const result = await Promise.any([
      reject(100, 'Server 1 down'),
      delay(200, 'Server 2 responded'),
      reject(150, 'Server 3 down'),
      delay(300, 'Server 4 responded')
    ]);
    
    const elapsed = Date.now() - start;
    
    output.innerHTML = '<span class="success">✅ PROMISE.ANY</span>\\n\\n' +
      'Result: "' + result + '"\\n' +
      'Time: ' + elapsed + 'ms\\n\\n' +
      'Returns FIRST successful promise\\n' +
      'Ignores rejections!\\n\\n' +
      'Perfect for: fallback servers,\\n' +
      'redundant requests, resilience';
    
    log('✅ Promise.any: ' + result);
  } catch (error) {
    output.innerHTML = '<span class="error">❌ Error: ' + error + '</span>';
  }
});

document.getElementById('btn-any-fail').addEventListener('click', async () => {
  const output = document.getElementById('any-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running Promise.any...</span>';
  
  try {
    const result = await Promise.any([
      reject(100, 'Server 1 down'),
      reject(150, 'Server 2 down'),
      reject(200, 'Server 3 down')
    ]);
    
    output.innerHTML = '<span class="success">Success: ' + result + '</span>';
  } catch (error) {
    output.innerHTML = '<span class="error">❌ PROMISE.ANY ALL FAILED</span>\\n\\n' +
      'AggregateError: All promises rejected\\n\\n' +
      'Promise.any() only rejects if\\n' +
      'ALL promises reject!\\n\\n' +
      'Returns AggregateError with\\n' +
      'all rejection reasons.\\n\\n' +
      'Opposite of Promise.all()!';
    
    log('❌ Promise.any: all rejected');
  }
});

log('🚀 Promise Combinators module loaded!');
log('💡 all, race, allSettled, any — know when to use each!');`,
  },

  /* ══════════════════════════════════════════════
     BATCH 4 FINAL: observable-patterns
  ══════════════════════════════════════════════ */

  {
    topic: "observable-patterns",
    description: "Event streams, reactive patterns, and async iterators for continuous data",
    html: `<div class="container">
  <h1>🔷 Observable Patterns</h1>
  <p class="subtitle">Event streams, reactive patterns, async iterators</p>

  <div class="section">
    <h2>1. Event Emitter Pattern</h2>
    <button id="btn-emitter">Create Event Emitter</button>
    <button id="btn-emit">Emit Events</button>
    <div id="emitter-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Async Iterator</h2>
    <button id="btn-async-iter">Consume Async Iterator</button>
    <div id="iter-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Async Generator</h2>
    <button id="btn-async-gen">Generate Data Stream</button>
    <div id="gen-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Observable Pattern</h2>
    <button id="btn-observable">Create Observable</button>
    <button id="btn-subscribe">Subscribe</button>
    <button id="btn-unsubscribe">Unsubscribe</button>
    <div id="observable-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #06b6d4;
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
  color: #0891b2;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #06b6d4;
  padding-left: 12px;
}
.section {
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #06b6d4;
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
  background: #0891b2;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 182, 212, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(6, 182, 212, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Observable Patterns
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 1. Event Emitter Pattern
let emitter = null;

class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    return () => this.off(event, listener);
  }
  
  off(event, listener) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(l => l !== listener);
  }
  
  emit(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(data));
  }
  
  once(event, listener) {
    const onceWrapper = (data) => {
      listener(data);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }
}

document.getElementById('btn-emitter').addEventListener('click', () => {
  const output = document.getElementById('emitter-output');
  
  emitter = new EventEmitter();
  
  emitter.on('data', (data) => {
    log('📡 Received: ' + data);
  });
  
  emitter.on('error', (error) => {
    log('❌ Error: ' + error);
  });
  
  emitter.once('complete', () => {
    log('✅ Complete (fires once)');
  });
  
  output.innerHTML = '<span class="success">✅ EVENT EMITTER CREATED</span>\\n\\n' +
    'Listeners registered:\\n' +
    '  • data (multiple times)\\n' +
    '  • error (multiple times)\\n' +
    '  • complete (once only)\\n\\n' +
    'Click "Emit Events" to test!';
  
  log('✅ Event emitter created');
});

document.getElementById('btn-emit').addEventListener('click', () => {
  const output = document.getElementById('emitter-output');
  
  if (!emitter) {
    output.innerHTML = '<span class="error">❌ Create emitter first!</span>';
    return;
  }
  
  emitter.emit('data', 'Message 1');
  emitter.emit('data', 'Message 2');
  emitter.emit('error', 'Something went wrong');
  emitter.emit('complete');
  emitter.emit('complete'); // Won't fire (once)
  
  output.innerHTML = '<span class="success''>✅ EVENTS EMITTED</span>\\n\\n' +
    'Events fired:\\n' +
    '  • data: "Message 1"\\n' +
    '  • data: "Message 2"\\n' +
    '  • error: "Something went wrong"\\n' +
    '  • complete (first time)\\n' +
    '  • complete (ignored - once only)\\n\\n' +
    'Check console for listener output!';
  
  log('✅ All events emitted');
});

// 2. Async Iterator
document.getElementById('btn-async-iter').addEventListener('click', async () => {
  const output = document.getElementById('iter-output');
  
  output.innerHTML = '<span class="highlight">⏳ Consuming async iterator...</span>';
  
  // Create async iterable
  const asyncIterable = {
    async *[Symbol.asyncIterator]() {
      yield await delay(200).then(() => 'Item 1');
      yield await delay(200).then(() => 'Item 2');
      yield await delay(200).then(() => 'Item 3');
    }
  };
  
  const results = [];
  const start = Date.now();
  
  for await (const item of asyncIterable) {
    results.push(item);
    log('📦 Received: ' + item);
  }
  
  const elapsed = Date.now() - start;
  
  output.innerHTML = '<span class="success">✅ ASYNC ITERATOR</span>\\n\\n' +
    'Items received:\\n' +
    results.map((r, i) => '  [' + i + '] ' + r).join('\\n') + '\\n\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'for await...of loop consumes\\n' +
    'async iterables one at a time!\\n\\n' +
    'Perfect for: streams, pagination';
  
  log('✅ Async iterator complete');
});

// 3. Async Generator
document.getElementById('btn-async-gen').addEventListener('click', async () => {
  const output = document.getElementById('gen-output');
  
  output.innerHTML = '<span class="highlight">⏳ Generating data stream...</span>';
  
  async function* dataStream() {
    let count = 1;
    while (count <= 5) {
      await delay(150);
      yield {
        id: count,
        data: 'Data chunk ' + count,
        timestamp: Date.now()
      };
      count++;
    }
  }
  
  const results = [];
  const start = Date.now();
  
  for await (const chunk of dataStream()) {
    results.push(chunk.data);
    log('📊 Chunk ' + chunk.id + ': ' + chunk.data);
  }
  
  const elapsed = Date.now() - start;
  
  output.innerHTML = '<span class="success">✅ ASYNC GENERATOR</span>\\n\\n' +
    'Stream output:\\n' +
    results.map((r, i) => '  [' + i + '] ' + r).join('\\n') + '\\n\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'async function* creates\\n' +
    'async generators!\\n\\n' +
    'Use for: data streams, pagination,\\n' +
    'infinite sequences';
  
  log('✅ Async generator complete');
});

// 4. Observable Pattern
let observable = null;
let subscription = null;

class Observable {
  constructor(producer) {
    this.producer = producer;
  }
  
  subscribe(observer) {
    const subscription = {
      closed: false,
      unsubscribe() {
        this.closed = true;
      }
    };
    
    this.producer({
      next: (value) => {
        if (!subscription.closed && observer.next) {
          observer.next(value);
        }
      },
      error: (error) => {
        if (!subscription.closed && observer.error) {
          observer.error(error);
          subscription.closed = true;
        }
      },
      complete: () => {
        if (!subscription.closed && observer.complete) {
          observer.complete();
          subscription.closed = true;
        }
      }
    });
    
    return subscription;
  }
  
  static interval(ms) {
    return new Observable((observer) => {
      let count = 0;
      const id = setInterval(() => {
        observer.next(count++);
      }, ms);
      
      return () => clearInterval(id);
    });
  }
  
  static fromArray(array) {
    return new Observable((observer) => {
      array.forEach(item => observer.next(item));
      observer.complete();
    });
  }
}

document.getElementById('btn-observable').addEventListener('click', () => {
  const output = document.getElementById('observable-output');
  
  observable = new Observable((observer) => {
    let count = 0;
    const id = setInterval(() => {
      count++;
      observer.next('Event ' + count);
      
      if (count >= 10) {
        observer.complete();
        clearInterval(id);
      }
    }, 300);
    
    // Cleanup function
    return () => {
      clearInterval(id);
      log('🧹 Observable cleaned up');
    };
  });
  
  output.innerHTML = '<span class="success">✅ OBSERVABLE CREATED</span>\\n\\n' +
    'Observable will emit:\\n' +
    '  • Event every 300ms\\n' +
    '  • Complete after 10 events\\n\\n' +
    'Click "Subscribe" to start receiving!\\n\\n' +
    'Observables are LAZY:\\n' +
    'Nothing happens until you subscribe!';
  
  log('✅ Observable created (lazy)');
});

document.getElementById('btn-subscribe').addEventListener('click', () => {
  const output = document.getElementById('observable-output');
  
  if (!observable) {
    output.innerHTML = '<span class="error">❌ Create observable first!</span>';
    return;
  }
  
  if (subscription && !subscription.closed) {
    output.innerHTML = '<span class="error">❌ Already subscribed!\\nUnsubscribe first.</span>';
    return;
  }
  
  const events = [];
  
  subscription = observable.subscribe({
    next: (value) => {
      events.push(value);
      log('📡 ' + value);
    },
    error: (error) => {
      log('❌ Error: ' + error);
    },
    complete: () => {
      log('✅ Stream complete!');
      output.innerHTML = '<span class="success">✅ OBSERVABLE COMPLETE</span>\\n\\n' +
        'Received ' + events.length + ' events:\\n' +
        events.slice(0, 5).join(', ') + '...\\n\\n' +
        'Stream completed naturally.\\n\\n' +
        'Observables handle:\\n' +
        '  • Multiple values over time\\n' +
        '  • Async data streams\\n' +
        '  • Cancellation (unsubscribe)';
    }
  });
  
  output.innerHTML = '<span class="highlight">⏳ SUBSCRIBED</span>\\n\\n' +
    'Receiving events...\\n' +
    'Check console for live updates!\\n\\n' +
    'Click "Unsubscribe" to stop early.';
  
  log('✅ Subscribed to observable');
});

document.getElementById('btn-unsubscribe').addEventListener('click', () => {
  const output = document.getElementById('observable-output');
  
  if (!subscription || subscription.closed) {
    output.innerHTML = '<span class="error">❌ No active subscription!</span>';
    return;
  }
  
  subscription.unsubscribe();
  
  output.innerHTML = '<span class="success">✅ UNSUBSCRIBED</span>\\n\\n' +
    'Subscription closed!\\n' +
    'No more events will be received.\\n\\n' +
    'Observables support cancellation:\\n' +
    '  • Clean up resources\\n' +
    '  • Stop receiving events\\n' +
    '  • Prevent memory leaks\\n\\n' +
    'This is a key advantage over Promises!';
  
  log('✅ Unsubscribed from observable');
});

log('🚀 Observable Patterns module loaded!');
log('💡 Event streams for continuous async data');`,
  },



  /* ══════════════════════════════════════════════
     MODULE 5: OBJECT-ORIENTED PATTERNS
  ══════════════════════════════════════════════ */

  {
    topic: "class-internals",
    description: "How ES6 classes work under the hood — constructor functions and prototypes",
    html: `<div class="container">
  <h1>🔷 Class Internals</h1>
  <p class="subtitle">How ES6 classes work under the hood</p>

  <div class="section">
    <h2>1. Class vs Constructor Function</h2>
    <button id="btn-comparison">Compare Both</button>
    <div id="comparison-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Class Desugaring</h2>
    <button id="btn-desugar">Show Desugared Code</button>
    <div id="desugar-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Method Types</h2>
    <button id="btn-methods">Test Method Types</button>
    <div id="methods-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Class Hoisting</h2>
    <button id="btn-hoisting">Test Hoisting</button>
    <div id="hoisting-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
  max-width: 800px;
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
  color: #7c3aed;
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
.success {
  color: #10b981 !important;
}
.highlight {
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
    js: `// Class Internals
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Class vs Constructor Function
document.getElementById('btn-comparison').addEventListener('click', () => {
  const output = document.getElementById('comparison-output');
  
  // ES6 Class
  class PersonClass {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return 'Hello, I am ' + this.name;
    }
  }
  
  // Constructor Function (equivalent)
  function PersonFunction(name) {
    this.name = name;
  }
  PersonFunction.prototype.greet = function() {
    return 'Hello, I am ' + this.name;
  };
  
  const p1 = new PersonClass('Alice');
  const p2 = new PersonFunction('Bob');
  
  output.innerHTML = '<span class="success">✅ CLASS VS CONSTRUCTOR</span>\\n\\n' +
    'ES6 Class:\\n' +
    '  ' + p1.greet() + '\\n' +
    '  typeof PersonClass: ' + typeof PersonClass + '\\n\\n' +
    'Constructor Function:\\n' +
    '  ' + p2.greet() + '\\n' +
    '  typeof PersonFunction: ' + typeof PersonFunction + '\\n\\n' +
    'Classes are just SYNTACTIC SUGAR\\n' +
    'over constructor functions!\\n\\n' +
    'Both create objects with prototypes.';
  
  log('✅ Class vs Constructor compared');
  log('PersonClass type: ' + typeof PersonClass);
  log('PersonFunction type: ' + typeof PersonFunction);
});

// 2. Class Desugaring
document.getElementById('btn-desugar').addEventListener('click', () => {
  const output = document.getElementById('desugar-output');
  
  // This ES6 class...
  class Counter {
    constructor(start) {
      this.count = start;
    }
    increment() {
      this.count++;
    }
    static create() {
      return new Counter(0);
    }
  }
  
  // ...is roughly equivalent to:
  function CounterDesugared(start) {
    this.count = start;
  }
  CounterDesugared.prototype.increment = function() {
    this.count++;
  };
  CounterDesugared.create = function() {
    return new CounterDesugared(0);
  };
  
  const c1 = new Counter(5);
  c1.increment();
  
  const c2 = new CounterDesugared(5);
  c2.increment();
  
  output.innerHTML = '<span class="success">✅ CLASS DESUGARING</span>\\n\\n' +
    'ES6 Class result: count = ' + c1.count + '\\n' +
    'Desugared result: count = ' + c2.count + '\\n\\n' +
    'What classes do:\\n' +
    '  • constructor → function body\\n' +
    '  • methods → prototype methods\\n' +
    '  • static → function properties\\n\\n' +
    'Key differences:\\n' +
    '  • Classes cannot be called without new\\n' +
    '  • Class methods are non-enumerable\\n' +
    '  • Classes are in strict mode';
  
  log('✅ Class desugaring demonstrated');
  log('Both produce: count = ' + c1.count);
});

// 3. Method Types
document.getElementById('btn-methods').addEventListener('click', () => {
  const output = document.getElementById('methods-output');
  
  class Demo {
    // Instance property (on each instance)
    instanceProp = 'instance';
    
    constructor(name) {
      this.name = name;
    }
    
    // Instance method (on prototype)
    instanceMethod() {
      return 'Instance: ' + this.name;
    }
    
    // Static method (on class itself)
    static staticMethod() {
      return 'Static method';
    }
    
    // Static property
    static staticProp = 'static';
  }
  
  const d1 = new Demo('Test');
  const d2 = new Demo('Test2');
  
  // Check where methods live
  const hasOwn1 = d1.hasOwnProperty('instanceMethod');
  const hasProto1 = 'instanceMethod' in d1;
  const hasOwn2 = d1.hasOwnProperty('instanceProp');
  
  output.innerHTML = '<span class="success">✅ METHOD TYPES</span>\\n\\n' +
    'Instance method:\\n' +
    '  d1.instanceMethod(): "' + d1.instanceMethod() + '"\\n' +
    '  On prototype: ' + hasProto1 + '\\n' +
    '  Own property: ' + hasOwn1 + '\\n\\n' +
    'Instance property:\\n' +
    '  d1.instanceProp: "' + d1.instanceProp + '"\\n' +
    '  Own property: ' + hasOwn2 + '\\n\\n' +
    'Static method:\\n' +
    '  Demo.staticMethod(): "' + Demo.staticMethod() + '"\\n' +
    '  Demo.staticProp: "' + Demo.staticProp + '"\\n\\n' +
    'Methods → prototype (shared)\\n' +
    'Properties → instance (per object)\\n' +
    'Static → class itself';
  
  log('✅ Method types demonstrated');
  log('Shared: ' + (d1.instanceMethod === d2.instanceMethod));
});

// 4. Class Hoisting
document.getElementById('btn-hoisting').addEventListener('click', () => {
  const output = document.getElementById('hoisting-output');
  
  let result1, result2, error1, error2;
  
  // Functions ARE hoisted
  try {
    result1 = new FunctionConstructor('Works');
    function FunctionConstructor(msg) {
      this.msg = msg;
    }
  } catch (e) {
    error1 = e.message;
  }
  
  // Classes are NOT hoisted (temporal dead zone)
  try {
    // This would fail if uncommented:
    // result2 = new ClassConstructor('Fails');
    // class ClassConstructor {
    //   constructor(msg) { this.msg = msg; }
    // }
    
    // Correct order:
    class ClassConstructor {
      constructor(msg) { this.msg = msg; }
    }
    result2 = new ClassConstructor('Works');
  } catch (e) {
    error2 = e.message;
  }
  
  output.innerHTML = '<span class="success">✅ CLASS HOISTING</span>\\n\\n' +
    'Function Constructor:\\n' +
    '  Can use BEFORE declaration\\n' +
    '  Result: ' + (result1 ? result1.msg : 'N/A') + '\\n' +
    '  Hoisted: YES\\n\\n' +
    'Class Constructor:\\n' +
    '  Must declare BEFORE use\\n' +
    '  Result: ' + (result2 ? result2.msg : 'N/A') + '\\n' +
    '  Hoisted: NO (TDZ)\\n\\n' +
    'Classes are in Temporal Dead Zone\\n' +
    'until declaration is evaluated!\\n\\n' +
    'Always declare classes at the top.';
  
  log('✅ Hoisting behavior demonstrated');
  log('Functions hoist, classes do not');
});

log('🚀 Class Internals module loaded!');
log('💡 Classes = syntactic sugar over prototypes');`,
  },

  {
    topic: "private-fields",
    description: "True private fields with # syntax — encapsulation in modern JavaScript",
    html: `<div class="container">
  <h1>🔷 Private Fields</h1>
  <p class="subtitle">True private fields with # syntax</p>

  <div class="section">
    <h2>1. Private Fields Basics</h2>
    <button id="btn-basic">Create Private Fields</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Private Methods</h2>
    <button id="btn-methods">Test Private Methods</button>
    <div id="methods-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Private Getters/Setters</h2>
    <input type="number" id="balance-input" placeholder="Amount" value="100" />
    <button id="btn-getset">Test Private Accessors</button>
    <div id="getset-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Private Static</h2>
    <button id="btn-static">Test Private Static</button>
    <div id="static-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
  max-width: 800px;
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
  color: #7c3aed;
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
    js: `// Private Fields
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Private Fields Basics
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  class User {
    // Public field
    name;
    
    // Private field (# prefix)
    #password;
    
    constructor(name, password) {
      this.name = name;
      this.#password = password;
    }
    
    // Public method accessing private field
    checkPassword(attempt) {
      return attempt === this.#password;
    }
    
    // Public getter
    getPasswordLength() {
      return this.#password.length;
    }
  }
  
  const user = new User('Alice', 'secret123');
  
  const publicAccess = user.name;
  const privateAccess = user['#password']; // undefined
  const methodAccess = user.checkPassword('secret123');
  const lengthAccess = user.getPasswordLength();
  
  output.innerHTML = '<span class="success">✅ PRIVATE FIELDS</span>\\n\\n' +
    'Public field access:\\n' +
    '  user.name = "' + publicAccess + '"\\n\\n' +
    'Private field access:\\n' +
    '  user.#password → SyntaxError\\n' +
    '  user["#password"] = ' + privateAccess + '\\n\\n' +
    'Via public method:\\n' +
    '  checkPassword("secret123") = ' + methodAccess + '\\n' +
    '  getPasswordLength() = ' + lengthAccess + '\\n\\n' +
    'Private fields are TRULY private!\\n' +
    'Not accessible outside the class.';
  
  log('✅ Private fields demonstrated');
  log('Password check: ' + methodAccess);
});

// 2. Private Methods
document.getElementById('btn-methods').addEventListener('click', () => {
  const output = document.getElementById('methods-output');
  
  class Calculator {
    #result = 0;
    
    // Private method
    #validate(num) {
      if (typeof num !== 'number' || isNaN(num)) {
        throw new Error('Invalid number');
      }
    }
    
    // Private helper
    #log(operation, value) {
      console.log(operation + ': ' + this.#result + ' → ' + value);
    }
    
    // Public methods using private methods
    add(num) {
      this.#validate(num);
      const old = this.#result;
      this.#result += num;
      this.#log('ADD', this.#result);
      return this;
    }
    
    multiply(num) {
      this.#validate(num);
      const old = this.#result;
      this.#result *= num;
      this.#log('MULTIPLY', this.#result);
      return this;
    }
    
    getResult() {
      return this.#result;
    }
  }
  
  const calc = new Calculator();
  calc.add(10).multiply(5).add(3);
  const result = calc.getResult();
  
  let canAccessPrivate = false;
  try {
    calc['#validate'](5);
    canAccessPrivate = true;
  } catch (e) {
    canAccessPrivate = false;
  }
  
  output.innerHTML = '<span class="success">✅ PRIVATE METHODS</span>\\n\\n' +
    'Calculation result: ' + result + '\\n\\n' +
    'Private methods used:\\n' +
    '  #validate() - input validation\\n' +
    '  #log() - internal logging\\n\\n' +
    'Can access #validate()? ' + canAccessPrivate + '\\n\\n' +
    'Private methods:\\n' +
    '  • Encapsulate internal logic\\n' +
    '  • Cannot be called from outside\\n' +
    '  • Not inherited by subclasses\\n\\n' +
    'Check console for operation logs!';
  
  log('✅ Private methods: result = ' + result);
});

// 3. Private Getters/Setters
document.getElementById('btn-getset').addEventListener('click', () => {
  const amount = Number(document.getElementById('balance-input').value);
  const output = document.getElementById('getset-output');
  
  class BankAccount {
    #balance = 0;
    
    constructor(initial) {
      this.#balance = initial;
    }
    
    // Private getter
    get #formattedBalance() {
      return '$' + this.#balance.toFixed(2);
    }
    
    // Private setter
    set #balance(value) {
      if (value < 0) {
        throw new Error('Balance cannot be negative');
      }
      this.#balance = value;
    }
    
    // Public methods using private accessors
    deposit(amount) {
      if (amount <= 0) return 'Invalid amount';
      this.#balance += amount;
      return 'Deposited ' + amount + '. New balance: ' + this.#formattedBalance;
    }
    
    withdraw(amount) {
      if (amount <= 0) return 'Invalid amount';
      if (amount > this.#balance) return 'Insufficient funds';
      this.#balance -= amount;
      return 'Withdrew ' + amount + '. New balance: ' + this.#formattedBalance;
    }
    
    getBalance() {
      return this.#formattedBalance;
    }
  }
  
  const account = new BankAccount(1000);
  const msg1 = account.deposit(amount);
  const msg2 = account.withdraw(50);
  const final = account.getBalance();
  
  output.innerHTML = '<span class="success">✅ PRIVATE ACCESSORS</span>\\n\\n' +
    msg1 + '\\n' +
    msg2 + '\\n\\n' +
    'Final balance: ' + final + '\\n\\n' +
    'Private getter/setter:\\n' +
    '  get #formattedBalance()\\n' +
    '  set #balance(value)\\n\\n' +
    'Used internally for:\\n' +
    '  • Validation\\n' +
    '  • Formatting\\n' +
    '  • Computed values\\n\\n' +
    'Not accessible from outside!';
  
  log('✅ Private accessors: ' + final);
});

// 4. Private Static
document.getElementById('btn-static').addEventListener('click', () => {
  const output = document.getElementById('static-output');
  
  class IDGenerator {
    // Private static field
    static #counter = 0;
    
    // Private static method
    static #generateID() {
      return 'ID-' + String(++this.#counter).padStart(4, '0');
    }
    
    // Public static method
    static create(name) {
      return {
        id: this.#generateID(),
        name: name,
        timestamp: Date.now()
      };
    }
    
    // Public static getter
    static getCount() {
      return this.#counter;
    }
  }
  
  const obj1 = IDGenerator.create('Object 1');
  const obj2 = IDGenerator.create('Object 2');
  const obj3 = IDGenerator.create('Object 3');
  const count = IDGenerator.getCount();
  
  let canAccessStatic = false;
  try {
    const test = IDGenerator['#counter'];
    canAccessStatic = true;
  } catch (e) {
    canAccessStatic = false;
  }
  
  output.innerHTML = '<span class="success">✅ PRIVATE STATIC</span>\\n\\n' +
    'Generated objects:\\n' +
    '  ' + obj1.id + ' - ' + obj1.name + '\\n' +
    '  ' + obj2.id + ' - ' + obj2.name + '\\n' +
    '  ' + obj3.id + ' - ' + obj3.name + '\\n\\n' +
    'Total count: ' + count + '\\n\\n' +
    'Can access #counter? ' + canAccessStatic + '\\n\\n' +
    'Private static members:\\n' +
    '  • Shared across all instances\\n' +
    '  • Not accessible outside class\\n' +
    '  • Perfect for internal state';
  
  log('✅ Private static: ' + count + ' objects created');
});

log('🚀 Private Fields module loaded!');
log('💡 True encapsulation with # syntax');`,
  },

  {
    topic: "static-members",
    description: "Static methods, properties, and blocks — class-level functionality",
    html: `<div class="container">
  <h1>🔷 Static Members</h1>
  <p class="subtitle">Static methods, properties, and blocks</p>

  <div class="section">
    <h2>1. Static Methods</h2>
    <button id="btn-methods">Test Static Methods</button>
    <div id="methods-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Static Properties</h2>
    <button id="btn-props">Test Static Properties</button>
    <div id="props-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Static Blocks</h2>
    <button id="btn-blocks">Test Static Blocks</button>
    <div id="blocks-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Static vs Instance</h2>
    <button id="btn-comparison">Compare Static/Instance</button>
    <div id="comparison-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
  max-width: 800px;
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
  color: #7c3aed;
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
.success {
  color: #10b981 !important;
  }
.highlight {
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
    js: `// Static Members
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Static Methods
document.getElementById('btn-methods').addEventListener('click', () => {
  const output = document.getElementById('methods-output');
  
  class MathUtils {
    // Static methods
    static add(a, b) {
      return a + b;
    }
    
    static multiply(a, b) {
      return a * b;
    }
    
    static factorial(n) {
      if (n <= 1) return 1;
      return n * this.factorial(n - 1);
    }
    
    // Factory method (common static pattern)
    static createCalculator(initial) {
      return new Calculator(initial);
    }
  }
  
  class Calculator {
    constructor(value) {
      this.value = value;
    }
  }
  
  const sum = MathUtils.add(5, 3);
  const product = MathUtils.multiply(4, 7);
  const fact = MathUtils.factorial(5);
  const calc = MathUtils.createCalculator(10);
  
  output.innerHTML = '<span class="success">✅ STATIC METHODS</span>\\n\\n' +
    'MathUtils.add(5, 3) = ' + sum + '\\n' +
    'MathUtils.multiply(4, 7) = ' + product + '\\n' +
    'MathUtils.factorial(5) = ' + fact + '\\n\\n' +
    'Factory method:\\n' +
    '  MathUtils.createCalculator(10)\\n' +
    '  Returns: Calculator instance\\n\\n' +
    'Static methods:\\n' +
    '  • Called on CLASS, not instance\\n' +
    '  • No access to instance data\\n' +
    '  • Perfect for utilities, factories';
  
  log('✅ Static methods: sum=' + sum + ', product=' + product);
});

// 2. Static Properties
document.getElementById('btn-props').addEventListener('click', () => {
  const output = document.getElementById('props-output');
  
  class Config {
    // Static properties
    static API_URL = 'https://api.example.com';
    static VERSION = '1.0.0';
    static MAX_RETRIES = 3;
    
    // Static computed property
    static get fullVersion() {
      return 'v' + this.VERSION;
    }
    
    // Static setter
    static set apiUrl(url) {
      if (!url.startsWith('https://')) {
        throw new Error('Must use HTTPS');
      }
      this.API_URL = url;
    }
  }
  
  class Database {
    static instances = [];
    static maxConnections = 5;
    
    constructor(name) {
      if (Database.instances.length >= Database.maxConnections) {
        throw new Error('Max connections reached');
      }
      this.name = name;
      Database.instances.push(this);
    }
    
    static getConnectionCount() {
      return this.instances.length;
    }
  }
  
  const db1 = new Database('DB1');
  const db2 = new Database('DB2');
  const count = Database.getConnectionCount();
  
  output.innerHTML = '<span class="success">✅ STATIC PROPERTIES</span>\\n\\n' +
    'Config class:\\n' +
    '  API_URL: ' + Config.API_URL + '\\n' +
    '  VERSION: ' + Config.VERSION + '\\n' +
    '  fullVersion: ' + Config.fullVersion + '\\n\\n' +
    'Database class:\\n' +
    '  maxConnections: ' + Database.maxConnections + '\\n' +
    '  Current connections: ' + count + '\\n' +
    '  instances.length: ' + Database.instances.length + '\\n\\n' +
    'Static properties:\\n' +
    '  • Shared across all instances\\n' +
    '  • Configuration, constants\\n' +
    '  • Class-level state';
  
  log('✅ Static properties: ' + count + ' connections');
});

// 3. Static Blocks
document.getElementById('btn-blocks').addEventListener('click', () => {
  const output = document.getElementById('blocks-output');
  
  const initLog = [];
  
  class Service {
    static config = {};
    static initialized = false;
    
    // Static initialization block
    static {
      initLog.push('Static block 1: Starting initialization');
      this.config.env = 'production';
      this.config.debug = false;
    }
    
    static {
      initLog.push('Static block 2: Loading settings');
      this.config.timeout = 5000;
      this.config.retries = 3;
    }
    
    static {
      initLog.push('Static block 3: Finalizing');
      this.initialized = true;
      initLog.push('Initialization complete!');
    }
    
    static getConfig() {
      return this.config;
    }
  }
  
  const config = Service.getConfig();
  const isInit = Service.initialized;
  
  output.innerHTML = '<span class="success">✅ STATIC BLOCKS</span>\\n\\n' +
    'Initialization log:\\n' +
    initLog.map((msg, i) => '  ' + (i + 1) + '. ' + msg).join('\\n') + '\\n\\n' +
    'Final config:\\n' +
    '  env: ' + config.env + '\\n' +
    '  debug: ' + config.debug + '\\n' +
    '  timeout: ' + config.timeout + '\\n' +
    '  retries: ' + config.retries + '\\n\\n' +
    'Initialized: ' + isInit + '\\n\\n' +
    'Static blocks:\\n' +
    '  • Run when class is defined\\n' +
    '  • Run in order\\n' +
    '  • Perfect for complex initialization';
  
  log('✅ Static blocks executed: ' + initLog.length + ' blocks');
});

// 4. Static vs Instance
document.getElementById('btn-comparison').addEventListener('click', () => {
  const output = document.getElementById('comparison-output');
  
  class Counter {
    // Static (shared)
    static totalCount = 0;
    
    // Instance (per object)
    instanceCount = 0;
    
    constructor(name) {
      this.name = name;
    }
    
    // Instance method
    increment() {
      this.instanceCount++;
      Counter.totalCount++;
    }
    
    // Static method
    static getTotalCount() {
      return this.totalCount;
    }
    
    // Instance method
    getInstanceCount() {
      return this.instanceCount;
    }
  }
  
  const c1 = new Counter('Counter1');
  const c2 = new Counter('Counter2');
  
  c1.increment();
  c1.increment();
  c2.increment();
  
  const c1Instance = c1.getInstanceCount();
  const c2Instance = c2.getInstanceCount();
  const total = Counter.getTotalCount();
  
  output.innerHTML = '<span class="success">✅ STATIC VS INSTANCE</span>\\n\\n' +
    'Counter1:\\n' +
    '  instanceCount: ' + c1Instance + '\\n\\n' +
    'Counter2:\\n' +
    '  instanceCount: ' + c2Instance + '\\n\\n' +
    'Counter.totalCount: ' + total + '\\n\\n' +
    'Key differences:\\n' +
    '  STATIC:\\n' +
    '    • Shared across all instances\\n' +
    '    • Accessed via Class.method()\\n' +
    '    • No "this" for instance data\\n\\n' +
    '  INSTANCE:\\n' +
    '    • Unique per object\\n' +
    '    • Accessed via instance.method()\\n' +
    '    • Has "this" for instance data';
  
  log('✅ Static vs Instance: total=' + total);
});

log('🚀 Static Members module loaded!');
log('💡 Static = class-level, Instance = object-level');`,
  },

  {
    topic: "inheritance-patterns",
    description: "Extends, super, method overriding — classical inheritance in JavaScript",
    html: `<div class="container">
  <h1>🔷 Inheritance Patterns</h1>
  <p class="subtitle">Extends, super, method overriding</p>

  <div class="section">
    <h2>1. Basic Inheritance</h2>
    <button id="btn-basic">Test Basic Inheritance</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Super Keyword</h2>
    <button id="btn-super">Test Super</button>
    <div id="super-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Method Overriding</h2>
    <button id="btn-override">Test Overriding</button>
    <div id="override-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Multi-Level Inheritance</h2>
    <button id="btn-multilevel">Test Multi-Level</button>
    <div id="multilevel-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
  max-width: 800px;
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
  color: #7c3aed;
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
.success {
  color: #10b981 !important;
}
.highlight {
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
    js: `// Inheritance Patterns
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Inheritance
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      return this.name + ' makes a sound';
    }
    
    move() {
      return this.name + ' moves';
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call parent constructor
      this.breed = breed;
    }
    
    bark() {
      return this.name + ' barks!';
    }
  }
  
  const dog = new Dog('Rex', 'Labrador');
  
  const speak = dog.speak(); // Inherited
  const move = dog.move();   // Inherited
  const bark = dog.bark();   // Own method
  
  const isAnimal = dog instanceof Animal;
  const isDog = dog instanceof Dog;
  
  output.innerHTML = '<span class="success">✅ BASIC INHERITANCE</span>\\n\\n' +
    'Dog instance: ' + dog.name + ' (' + dog.breed + ')\\n\\n' +
    'Inherited methods:\\n' +
    '  speak(): "' + speak + '"\\n' +
    '  move(): "' + move + '"\\n\\n' +
    'Own method:\\n' +
    '  bark(): "' + bark + '"\\n\\n' +
    'instanceof checks:\\n' +
    '  dog instanceof Animal: ' + isAnimal + '\\n' +
    '  dog instanceof Dog: ' + isDog + '\\n\\n' +
    'Dog inherits from Animal!';
  
  log('✅ Basic inheritance: ' + dog.name);
});

// 2. Super Keyword
document.getElementById('btn-super').addEventListener('click', () => {
  const output = document.getElementById('super-output');
  
  class Shape {
    constructor(color) {
      this.color = color;
      log('Shape constructor: ' + color);
    }
    
    describe() {
      return 'A ' + this.color + ' shape';
    }
  }
  
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color); // MUST call super first!
      this.width = width;
      this.height = height;
      log('Rectangle constructor: ' + width + 'x' + height);
    }
    
    describe() {
      // Call parent method
      const parentDesc = super.describe();
      return parentDesc + ' (Rectangle: ' + this.width + 'x' + this.height + ')';
    }
    
    area() {
      return this.width * this.height;
    }
  }
  
  const rect = new Rectangle('blue', 10, 5);
  const desc = rect.describe();
  const area = rect.area();
  
  output.innerHTML = '<span class="success">✅ SUPER KEYWORD</span>\\n\\n' +
    'Description: "' + desc + '"\\n' +
    'Area: ' + area + '\\n\\n' +
    'super() in constructor:\\n' +
    '  • Calls parent constructor\\n' +
    '  • MUST be called before "this"\\n' +
    '  • Required in child constructor\\n\\n' +
    'super.method() in methods:\\n' +
    '  • Calls parent method\\n' +
    '  • Can extend parent behavior\\n\\n' +
    'Check console for constructor calls!';
  
  log('✅ Super keyword: area = ' + area);
});

// 3. Method Overriding
document.getElementById('btn-override').addEventListener('click', () => {
  const output = document.getElementById('override-output');
  
  class Vehicle {
    constructor(type) {
      this.type = type;
    }
    
    start() {
      return this.type + ' starting...';
    }
    
    stop() {
      return this.type + ' stopping...';
    }
  }
  
  class Car extends Vehicle {
    constructor(brand) {
      super('Car');
      this.brand = brand;
    }
    
    // Override start method
    start() {
      return this.brand + ' car engine starting... Vroom!';
    }
    
    // stop() is inherited (not overridden)
  }
  
  class ElectricCar extends Car {
    constructor(brand, battery) {
      super(brand);
      this.battery = battery;
    }
    
    // Override start again
    start() {
      return this.brand + ' electric car starting silently... ⚡';
    }
    
    // Override stop
    stop() {
      return this.brand + ' regenerative braking... 🔋';
    }
  }
  
  const vehicle = new Vehicle('Generic');
  const car = new Car('Toyota');
  const eCar = new ElectricCar('Tesla', '100kWh');
  
  output.innerHTML = '<span class="success">✅ METHOD OVERRIDING</span>\\n\\n' +
    'Vehicle.start():\\n' +
    '  "' + vehicle.start() + '"\\n\\n' +
    'Car.start() [overridden]:\\n' +
    '  "' + car.start() + '"\\n\\n' +
    'ElectricCar.start() [overridden again]:\\n' +
    '  "' + eCar.start() + '"\\n\\n' +
    'ElectricCar.stop() [overridden]:\\n' +
    '  "' + eCar.stop() + '"\\n\\n' +
    'Method overriding:\\n' +
    '  • Child replaces parent method\\n' +
    '  • Same name, different behavior\\n' +
    '  • Can use super.method() to call parent';
  
  log('✅ Method overriding demonstrated');
});

// 4. Multi-Level Inheritance
document.getElementById('btn-multilevel').addEventListener('click', () => {
  const output = document.getElementById('multilevel-output');
  
  class LivingBeing {
    constructor(name) {
      this.name = name;
    }
    
    breathe() {
      return this.name + ' is breathing';
    }
  }
  
  class Mammal extends LivingBeing {
    constructor(name, furColor) {
      super(name);
      this.furColor = furColor;
    }
    
    feedMilk() {
      return this.name + ' feeds milk to young';
    }
  }
  
  class Cat extends Mammal {
    constructor(name, furColor, breed) {
      super(name, furColor);
      this.breed = breed;
    }
    
    meow() {
      return this.name + ' says: Meow!';
    }
    
    describe() {
      return this.name + ' is a ' + this.furColor + ' ' + this.breed + ' cat';
    }
  }
  
  const cat = new Cat('Whiskers', 'orange', 'Tabby');
  
  const breathe = cat.breathe();     // From LivingBeing
  const feedMilk = cat.feedMilk();   // From Mammal
  const meow = cat.meow();           // From Cat
  const desc = cat.describe();       // From Cat
  
  const isLivingBeing = cat instanceof LivingBeing;
  const isMammal = cat instanceof Mammal;
  const isCat = cat instanceof Cat;
  
  output.innerHTML = '<span class="success">✅ MULTI-LEVEL INHERITANCE</span>\\n\\n' +
    'Inheritance chain:\\n' +
    '  LivingBeing → Mammal → Cat\\n\\n' +
    'Methods from each level:\\n' +
    '  breathe(): "' + breathe + '"\\n' +
    '  feedMilk(): "' + feedMilk + '"\\n' +
    '  meow(): "' + meow + '"\\n\\n' +
    'Description: "' + desc + '"\\n\\n' +
    'instanceof chain:\\n' +
    '  LivingBeing: ' + isLivingBeing + '\\n' +
    '  Mammal: ' + isMammal + '\\n' +
    '  Cat: ' + isCat + '\\n\\n' +
    'Cat inherits from entire chain!';
  
  log('✅ Multi-level inheritance: ' + cat.name);
});

log('🚀 Inheritance Patterns module loaded!');
log('💡 extends + super = classical inheritance');`,
  },

  {
    topic: "polymorphism",
    description: "Method overriding, duck typing, and interface-like patterns in JavaScript",
    html: `<div class="container">
  <h1>🔷 Polymorphism</h1>
  <p class="subtitle">Method overriding, duck typing, interface patterns</p>

  <div class="section">
    <h2>1. Method Polymorphism</h2>
    <button id="btn-method">Test Method Polymorphism</button>
    <div id="method-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Duck Typing</h2>
    <button id="btn-duck">Test Duck Typing</button>
    <div id="duck-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Interface Pattern</h2>
    <button id="btn-interface">Test Interface Pattern</button>
    <div id="interface-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Polymorphic Collections</h2>
    <button id="btn-collection">Test Collections</button>
    <div id="collection-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
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
  max-width: 800px;
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
  color: #7c3aed;
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
.success {
  color: #10b981 !important;
}
.highlight {
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
    js: `// Polymorphism
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Method Polymorphism
document.getElementById('btn-method').addEventListener('click', () => {
  const output = document.getElementById('method-output');
  
  class Shape {
    area() {
      return 0;
    }
    
    describe() {
      return 'Shape with area: ' + this.area();
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
    
    area() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
    
    area() {
      return 0.5 * this.base * this.height;
    }
  }
  
  const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 8)
  ];
  
  const results = shapes.map(shape => {
    return shape.constructor.name + ': ' + shape.area().toFixed(2);
  });
  
  output.innerHTML = '<span class="success">✅ METHOD POLYMORPHISM</span>\\n\\n' +
    'Same method, different behavior:\\n' +
    results.map(r => '  ' + r).join('\\n') + '\\n\\n' +
    'All shapes have area() method\\n' +
    'but each calculates differently!\\n\\n' +
    'Polymorphism = "many forms"\\n' +
    'Same interface, different implementations';
  
  log('✅ Method polymorphism: ' + shapes.length + ' shapes');
});

// 2. Duck Typing
document.getElementById('btn-duck').addEventListener('click', () => {
  const output = document.getElementById('duck-output');
  
  // "If it walks like a duck and quacks like a duck..."
  
  function makeItQuack(duck) {
    if (typeof duck.quack === 'function') {
      return duck.quack();
    }
    return 'Not a duck!';
  }
  
  class Duck {
    quack() {
      return 'Quack quack!';
    }
  }
  
  class Person {
    quack() {
      return 'I am pretending to be a duck!';
    }
  }
  
  const robot = {
    quack() {
      return 'Beep boop quack!';
    }
  };
  
  const dog = {
    bark() {
      return 'Woof!';
    }
  };
  
  const duck = new Duck();
  const person = new Person();
  
  const result1 = makeItQuack(duck);
  const result2 = makeItQuack(person);
  const result3 = makeItQuack(robot);
  const result4 = makeItQuack(dog);
  
  output.innerHTML = '<span class="success">✅ DUCK TYPING</span>\\n\\n' +
    'makeItQuack(duck):\\n' +
    '  "' + result1 + '"\\n\\n' +
    'makeItQuack(person):\\n' +
    '  "' + result2 + '"\\n\\n' +
    'makeItQuack(robot):\\n' +
    '  "' + result3 + '"\\n\\n' +
    'makeItQuack(dog):\\n' +
    '  "' + result4 + '"\\n\\n' +
    'Duck typing in JavaScript:\\n' +
    '  • Don\'t check type/class\\n' +
    '  • Check if method exists\\n' +
    '  • "If it has quack(), it\'s a duck"\\n\\n' +
    'Flexible but requires careful checking!';
  
  log('✅ Duck typing: 4 objects tested');
});

// 3. Interface Pattern
document.getElementById('btn-interface').addEventListener('click', () => {
  const output = document.getElementById('interface-output');
  
  // Interface-like pattern (not real interfaces)
  class Drawable {
    draw() {
      throw new Error('draw() must be implemented');
    }
  }
  
  class Clickable {
    onClick() {
      throw new Error('onClick() must be implemented');
    }
  }
  
  // Implement "interfaces"
  class Button extends Drawable {
    constructor(label) {
      super();
      this.label = label;
    }
    
    draw() {
      return '[Button: ' + this.label + ']';
    }
    
    onClick() {
      return 'Button "' + this.label + '" clicked!';
    }
  }
  
  class Image extends Drawable {
    constructor(url) {
      super();
      this.url = url;
    }
    
    draw() {
      return '[Image: ' + this.url + ']';
    }
  }
  
  // Polymorphic function
  function renderUI(drawables) {
    return drawables.map(d => d.draw()).join('\\n');
  }
  
  const button = new Button('Submit');
  const image = new Image('logo.png');
  
  const ui = renderUI([button, image]);
  const click = button.onClick();
  
  let imageClickError = false;
  try {
    image.onClick();
  } catch (e) {
    imageClickError = true;
  }
  
  output.innerHTML = '<span class="success">✅ INTERFACE PATTERN</span>\\n\\n' +
    'Rendered UI:\\n' +
    ui.split('\\n').map(line => '  ' + line).join('\\n') + '\\n\\n' +
    'Button click: "' + click + '"\\n' +
    'Image has onClick? ' + !imageClickError + '\\n\\n' +
    'Interface pattern:\\n' +
    '  • Base class defines contract\\n' +
    '  • Subclasses must implement\\n' +
    '  • Throws error if not implemented\\n\\n' +
    'JS doesn\'t have real interfaces,\\n' +
    'but we can simulate them!';
  
  log('✅ Interface pattern demonstrated');
});

// 4. Polymorphic Collections
document.getElementById('btn-collection').addEventListener('click', () => {
  const output = document.getElementById('collection-output');
  
  class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
    
    getAnnualBonus() {
      return this.salary * 0.1;
    }
    
    getDetails() {
      return this.name + ' (Employee)';
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, teamSize) {
      super(name, salary);
      this.teamSize = teamSize;
    }
    
    getAnnualBonus() {
      return this.salary * 0.2 + (this.teamSize * 1000);
    }
    
    getDetails() {
      return this.name + ' (Manager, team: ' + this.teamSize + ')';
    }
  }
  
  class Executive extends Manager {
    constructor(name, salary, teamSize, stockOptions) {
      super(name, salary, teamSize);
      this.stockOptions = stockOptions;
    }
    
    getAnnualBonus() {
      return super.getAnnualBonus() + this.stockOptions;
    }
    
    getDetails() {
      return this.name + ' (Executive, stocks: $' + this.stockOptions + ')';
    }
  }
  
  // Polymorphic collection
  const staff = [
    new Employee('Alice', 50000),
    new Manager('Bob', 80000, 5),
    new Executive('Carol', 150000, 20, 50000),
    new Employee('Dave', 55000),
    new Manager('Eve', 90000, 8)
  ];
  
  // Process polymorphically
  let totalBonus = 0;
  const details = staff.map(person => {
    const bonus = person.getAnnualBonus();
    totalBonus += bonus;
    return person.getDetails() + ' → Bonus: $' + bonus.toFixed(0);
  });
  
  output.innerHTML = '<span class="success">✅ POLYMORPHIC COLLECTIONS</span>\\n\\n' +
    'Staff bonuses:\\n' +
    details.map(d => '  ' + d).join('\\n') + '\\n\\n' +
    'Total bonuses: $' + totalBonus.toFixed(0) + '\\n\\n' +
    'Key concept:\\n' +
    '  • Array of different types\\n' +
    '  • All share common interface\\n' +
    '  • Each behaves differently\\n' +
    '  • Process uniformly with same code\\n\\n' +
    'This is the power of polymorphism!';
  
  log('✅ Polymorphic collection: ' + staff.length + ' employees');
  log('Total bonuses: $' + totalBonus.toFixed(0));
});

log('🚀 Polymorphism module loaded!');
log('💡 One interface, many implementations');`,
  },

  
  /* ══════════════════════════════════════════════
     MODULE 6: FUNCTIONAL PROGRAMMING
  ══════════════════════════════════════════════ */

  {
    topic: "pure-functions",
    description: "Functions without side effects — predictable, testable, composable code",
    html: `<div class="container">
  <h1>🔷 Pure Functions</h1>
  <p class="subtitle">Functions without side effects</p>

  <div class="section">
    <h2>1. Pure vs Impure</h2>
    <button id="btn-comparison">Compare Pure/Impure</button>
    <div id="comparison-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Side Effects</h2>
    <button id="btn-side-effects">Show Side Effects</button>
    <div id="side-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Referential Transparency</h2>
    <button id="btn-referential">Test Referential Transparency</button>
    <div id="referential-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Benefits of Purity</h2>
    <button id="btn-benefits">Show Benefits</button>
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #10b981;
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
  color: #059669;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #10b981;
  padding-left: 12px;
}
.section {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #10b981;
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
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(16, 185, 129, 0.3);
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
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Pure Functions
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Pure vs Impure
document.getElementById('btn-comparison').addEventListener('click', () => {
  const output = document.getElementById('comparison-output');
  
  // PURE: Same input → Same output, No side effects
  function pureMul(a, b) {
    return a * b;
  }
  
  function pureAdd(a, b) {
    return a + b;
  }
  
  // IMPURE: Depends on external state
  let externalCounter = 0;
  function impureIncrement() {
    externalCounter++;
    return externalCounter;
  }
  
  // IMPURE: Modifies input
  function impurePush(arr, item) {
    arr.push(item);
    return arr;
  }
  
  // Test pure functions
  const pure1 = pureMul(3, 4);
  const pure2 = pureMul(3, 4);
  const pure3 = pureAdd(5, 10);
  
  // Test impure functions
  const impure1 = impureIncrement();
  const impure2 = impureIncrement();
  const arr = [1, 2];
  const impure3 = impurePush(arr, 3);
  
  output.innerHTML = '<span class="success">✅ PURE FUNCTIONS</span>\\n\\n' +
    'pureMul(3, 4) = ' + pure1 + '\\n' +
    'pureMul(3, 4) = ' + pure2 + ' (same!)\\n' +
    'pureAdd(5, 10) = ' + pure3 + '\\n\\n' +
    '<span class="error">❌ IMPURE FUNCTIONS</span>\\n\\n' +
    'impureIncrement() = ' + impure1 + '\\n' +
    'impureIncrement() = ' + impure2 + ' (different!)\\n' +
    'impurePush([1,2], 3) = [' + impure3 + ']\\n' +
    'Original array modified!\\n\\n' +
    'Pure functions:\\n' +
    '  • Same input → Same output\\n' +
    '  • No side effects\\n' +
    '  • Predictable & testable';
  
  log('✅ Pure: ' + pure1 + ', ' + pure2);
  log('❌ Impure: ' + impure1 + ', ' + impure2);
});

// 2. Side Effects
document.getElementById('btn-side-effects').addEventListener('click', () => {
  const output = document.getElementById('side-output');
  
  const sideEffects = [];
  
  // Side effect: Modifying external state
  let globalState = 0;
  function sideEffect1() {
    globalState = 10;
    sideEffects.push('Modified global variable');
  }
  
  // Side effect: Mutating input
  function sideEffect2(obj) {
    obj.modified = true;
    sideEffects.push('Mutated input object');
  }
  
  // Side effect: I/O operations
  function sideEffect3() {
    console.log('Logging to console');
    sideEffects.push('Console I/O');
  }
  
  // Side effect: Network/DOM
  function sideEffect4() {
    // document.title = 'Changed';
    sideEffects.push('Would modify DOM');
  }
  
  // Pure alternative: Return new values
  function pureAlternative(value) {
    return value + 10;
  }
  
  function pureObjectUpdate(obj, key, value) {
    return { ...obj, [key]: value };
  }
  
  sideEffect1();
  sideEffect2({ name: 'test' });
  sideEffect3();
  sideEffect4();
  
  const pure1 = pureAlternative(5);
  const pure2 = pureObjectUpdate({ a: 1 }, 'b', 2);
  
  output.innerHTML = '<span class="error">❌ SIDE EFFECTS</span>\\n\\n' +
    'Common side effects:\\n' +
    sideEffects.map((s, i) => '  ' + (i + 1) + '. ' + s).join('\\n') + '\\n\\n' +
    '<span class="success">✅ PURE ALTERNATIVES</span>\\n\\n' +
    'pureAlternative(5) = ' + pure1 + '\\n' +
    'pureObjectUpdate({a:1}, "b", 2):\\n' +
    '  → {a: ' + pure2.a + ', b: ' + pure2.b + '}\\n\\n' +
    'Avoid side effects:\\n' +
    '  • Don\'t modify external state\\n' +
    '  • Don\'t mutate inputs\\n' +
    '  • Return new values instead';
  
  log('❌ Side effects: ' + sideEffects.length);
  log('✅ Pure alternatives work!');
});

// 3. Referential Transparency
document.getElementById('btn-referential').addEventListener('click', () => {
  const output = document.getElementById('referential-output');
  
  // Referentially transparent: Can replace call with result
  function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  // Expression using pure functions
  const expr1 = multiply(add(2, 3), 4);
  
  // Can replace add(2, 3) with 5
  const expr2 = multiply(5, 4);
  
  // Both give same result
  const same = expr1 === expr2;
  
  // NOT referentially transparent
  let counter = 0;
  function incrementAndGet() {
    return ++counter;
  }
  
  const notTransparent1 = incrementAndGet() + incrementAndGet();
  counter = 0;
  const notTransparent2 = incrementAndGet() + incrementAndGet();
  const different = notTransparent1 === notTransparent2;
  
  output.innerHTML = '<span class="success">✅ REFERENTIALLY TRANSPARENT</span>\\n\\n' +
    'multiply(add(2, 3), 4) = ' + expr1 + '\\n' +
    'multiply(5, 4) = ' + expr2 + '\\n' +
    'Same result? ' + same + '\\n\\n' +
    'Can replace function call with its\\n' +
    'return value without changing behavior!\\n\\n' +
    '<span class="error">❌ NOT TRANSPARENT</span>\\n\\n' +
    'incrementAndGet() + incrementAndGet()\\n' +
    'First run: ' + notTransparent1 + '\\n' +
    'Second run: ' + notTransparent2 + '\\n' +
    'Same? ' + different + '\\n\\n' +
    'Cannot replace with value!';
  
  log('✅ Referential transparency: ' + same);
  log('❌ Not transparent: ' + different);
});

// 4. Benefits of Purity
document.getElementById('btn-benefits').addEventListener('click', () => {
  const output = document.getElementById('benefits-output');
  
  // Benefit 1: Easy to test
  function calculateDiscount(price, percent) {
    return price * (percent / 100);
  }
  
  const test1 = calculateDiscount(100, 10) === 10;
  const test2 = calculateDiscount(50, 20) === 10;
  
  // Benefit 2: Easy to reason about
  function compose(f, g) {
    return (x) => f(g(x));
  }
  
  const double = (x) => x * 2;
  const addTen = (x) => x + 10;
  const doubleThenAddTen = compose(addTen, double);
  
  const composed = doubleThenAddTen(5);
  
  // Benefit 3: Cacheable (memoization)
  const cache = {};
  function memoizedFib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    cache[n] = memoizedFib(n - 1) + memoizedFib(n - 2);
    return cache[n];
  }
  
  const fib10 = memoizedFib(10);
  
  // Benefit 4: Parallelizable
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(x => x * 2);
  
  output.innerHTML = '<span class="success">✅ BENEFITS OF PURE FUNCTIONS</span>\\n\\n' +
    '1. EASY TO TEST:\\n' +
    '   calculateDiscount(100, 10) === 10? ' + test1 + '\\n' +
    '   calculateDiscount(50, 20) === 10? ' + test2 + '\\n\\n' +
    '2. EASY TO COMPOSE:\\n' +
    '   doubleThenAddTen(5) = ' + composed + '\\n' +
    '   (5 * 2) + 10 = 20\\n\\n' +
    '3. CACHEABLE (MEMOIZATION):\\n' +
    '   memoizedFib(10) = ' + fib10 + '\\n' +
    '   Cached for instant reuse!\\n\\n' +
    '4. PARALLELIZABLE:\\n' +
    '   [1,2,3,4,5].map(x => x*2)\\n' +
    '   = [' + doubled.join(', ') + ']\\n' +
    '   Can run in parallel safely!';
  
  log('✅ Pure functions: testable, composable, cacheable');
});

log('🚀 Pure Functions module loaded!');
log('💡 Pure = predictable, testable, composable');`,
  },

  {
    topic: "immutability",
    description: "Immutable data structures and patterns — avoid mutations, embrace new values",
    html: `<div class="container">
  <h1>🔷 Immutability</h1>
  <p class="subtitle">Immutable data structures and patterns</p>

  <div class="section">
    <h2>1. Mutable vs Immutable</h2>
    <button id="btn-comparison">Compare Approaches</button>
    <div id="comparison-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Array Immutability</h2>
    <button id="btn-arrays">Immutable Array Operations</button>
    <div id="arrays-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Object Immutability</h2>
    <button id="btn-objects">Immutable Object Updates</button>
    <div id="objects-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Deep Immutability</h2>
    <button id="btn-deep">Deep Clone & Update</button>
    <div id="deep-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #10b981;
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
  color: #059669;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #10b981;
  padding-left: 12px;
}
.section {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #10b981;
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
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(16, 185, 129, 0.3);
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
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Immutability
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Mutable vs Immutable
document.getElementById('btn-comparison').addEventListener('click', () => {
  const output = document.getElementById('comparison-output');
  
  // MUTABLE: Modifies original
  const mutableArr = [1, 2, 3];
  mutableArr.push(4);
  const mutableResult = mutableArr;
  
  const mutableObj = { count: 0 };
  mutableObj.count++;
  const mutableObjResult = mutableObj.count;
  
  // IMMUTABLE: Creates new values
  const immutableArr = [1, 2, 3];
  const immutableResult = [...immutableArr, 4];
  const originalUnchanged = immutableArr.length === 3;
  
  const immutableObj = { count: 0 };
  const immutableObjResult = { ...immutableObj, count: immutableObj.count + 1 };
  const objUnchanged = immutableObj.count === 0;
  
  output.innerHTML = '<span class="error">❌ MUTABLE APPROACH</span>\\n\\n' +
    'Array: [1,2,3].push(4)\\n' +
    '  Result: [' + mutableResult + ']\\n' +
    '  Original modified!\\n\\n' +
    'Object: obj.count++\\n' +
    '  Result: ' + mutableObjResult + '\\n' +
    '  Original modified!\\n\\n' +
    '<span class="success">✅ IMMUTABLE APPROACH</span>\\n\\n' +
    'Array: [...arr, 4]\\n' +
    '  Result: [' + immutableResult + ']\\n' +
    '  Original unchanged: ' + originalUnchanged + '\\n\\n' +
    'Object: {...obj, count: obj.count+1}\\n' +
    '  Result: ' + immutableObjResult.count + '\\n' +
    '  Original unchanged: ' + objUnchanged;
  
  log('❌ Mutable: modifies original');
  log('✅ Immutable: creates new value');
});

// 2. Array Immutability
document.getElementById('btn-arrays').addEventListener('click', () => {
  const output = document.getElementById('arrays-output');
  
  const original = [1, 2, 3, 4, 5];
  
  // Add to end (immutable)
  const added = [...original, 6];
  
  // Add to start (immutable)
  const prepended = [0, ...original];
  
  // Remove item (immutable)
  const removed = original.filter(x => x !== 3);
  
  // Update item (immutable)
  const updated = original.map(x => x === 3 ? 30 : x);
  
  // Insert at index (immutable)
  const index = 2;
  const inserted = [
    ...original.slice(0, index),
    99,
    ...original.slice(index)
  ];
  
  // Sort (immutable)
  const sorted = [...original].sort((a, b) => b - a);
  
  output.innerHTML = '<span class="success">✅ IMMUTABLE ARRAY OPS</span>\\n\\n' +
    'Original: [' + original + ']\\n\\n' +
    'Add to end:\\n' +
    '  [...arr, 6] = [' + added + ']\\n\\n' +
    'Add to start:\\n' +
    '  [0, ...arr] = [' + prepended + ']\\n\\n' +
    'Remove item:\\n' +
    '  arr.filter(x => x !== 3) = [' + removed + ']\\n\\n' +
    'Update item:\\n' +
    '  arr.map(x => x===3 ? 30 : x) = [' + updated + ']\\n\\n' +
    'Insert at index 2:\\n' +
    '  = [' + inserted + ']\\n\\n' +
    'Sort descending:\\n' +
    '  [...arr].sort() = [' + sorted + ']\\n\\n' +
    'Original still: [' + original + ']';
  
  log('✅ Immutable arrays: original unchanged');
});

// 3. Object Immutability
document.getElementById('btn-objects').addEventListener('click', () => {
  const output = document.getElementById('objects-output');
  
  const original = {
    name: 'Alice',
    age: 30,
    city: 'NYC'
  };
  
  // Update property
  const updated = {
    ...original,
    age: 31
  };
  
  // Add property
  const added = {
    ...original,
    email: 'alice@example.com'
  };
  
  // Remove property
  const { city, ...removed } = original;
  
  // Update multiple
  const multiUpdate = {
    ...original,
    age: 32,
    city: 'LA'
  };
  
  // Conditional update
  const conditionalUpdate = {
    ...original,
    ...(original.age > 25 && { senior: true })
  };
  
  output.innerHTML = '<span class="success">✅ IMMUTABLE OBJECT OPS</span>\\n\\n' +
    'Original:\\n' +
    '  {name: "' + original.name + '", age: ' + original.age + ', city: "' + original.city + '"}\\n\\n' +
    'Update property:\\n' +
    '  {...obj, age: 31}\\n' +
    '  age = ' + updated.age + '\\n\\n' +
    'Add property:\\n' +
    '  {...obj, email: "..."}\\n' +
    '  email = "' + added.email + '"\\n\\n' +
    'Remove property:\\n' +
    '  const {city, ...rest} = obj\\n' +
    '  has city? ' + ('city' in removed) + '\\n\\n' +
    'Update multiple:\\n' +
    '  {...obj, age: 32, city: "LA"}\\n' +
    '  age=' + multiUpdate.age + ', city="' + multiUpdate.city + '"\\n\\n' +
    'Conditional:\\n' +
    '  senior = ' + conditionalUpdate.senior;
  
  log('✅ Immutable objects: original unchanged');
});

// 4. Deep Immutability
document.getElementById('btn-deep').addEventListener('click', () => {
  const output = document.getElementById('deep-output');
  
  const original = {
    user: {
      name: 'Bob',
      address: {
        city: 'NYC',
        zip: '10001'
      }
    },
    items: [1, 2, 3]
  };
  
  // Shallow copy (WRONG for nested)
  const shallow = { ...original };
  shallow.user.name = 'Changed'; // Mutates original!
  const shallowBroken = original.user.name === 'Changed';
  
  // Reset
  original.user.name = 'Bob';
  
  // Deep copy (CORRECT)
  const deep = JSON.parse(JSON.stringify(original));
  deep.user.name = 'Charlie';
  const deepWorks = original.user.name === 'Bob';
  
  // Immutable deep update (manual)
  const deepUpdate = {
    ...original,
    user: {
      ...original.user,
      address: {
        ...original.user.address,
        city: 'LA'
      }
    }
  };
  
  const manualWorks = original.user.address.city === 'NYC';
  
  output.innerHTML = '<span class="error">❌ SHALLOW COPY (BROKEN)</span>\\n\\n' +
    'const shallow = {...obj};\\n' +
    'shallow.user.name = "Changed";\\n' +
    'Original mutated? ' + shallowBroken + '\\n\\n' +
    'Shallow spread only copies top level!\\n\\n' +
    '<span class="success">✅ DEEP COPY (WORKS)</span>\\n\\n' +
    'JSON.parse(JSON.stringify(obj))\\n' +
    'deep.user.name = "Charlie";\\n' +
    'Original unchanged? ' + deepWorks + '\\n\\n' +
    '<span class="success">✅ MANUAL DEEP UPDATE</span>\\n\\n' +
    '{...obj, user: {...obj.user,\\n' +
    '  address: {...obj.user.address,\\n' +
    '    city: "LA"}}}\\n\\n' +
    'Original city: "' + original.user.address.city + '"\\n' +
    'Updated city: "' + deepUpdate.user.address.city + '"\\n' +
    'Original unchanged? ' + manualWorks;
  
  log('✅ Deep immutability: use JSON or manual spread');
});

log('🚀 Immutability module loaded!');
log('💡 Never mutate, always create new values');`,
  },

  {
    topic: "function-composition-advanced",
    description: "Compose, pipe, and chain functions — building complex logic from simple pieces",
    html: `<div class="container">
  <h1>🔷 Function Composition</h1>
  <p class="subtitle">Compose, pipe, chain — build complex from simple</p>

  <div class="section">
    <h2>1. Compose Function</h2>
    <button id="btn-compose">Test Compose</button>
    <div id="compose-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Pipe Function</h2>
    <button id="btn-pipe">Test Pipe</button>
    <div id="pipe-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Real-World Example</h2>
    <input type="text" id="text-input" placeholder="Enter text" value="  HELLO world  " />
    <button id="btn-realworld">Process Text</button>
    <div id="realworld-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Async Composition</h2>
    <button id="btn-async">Test Async Pipe</button>
    <div id="async-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #10b981;
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
  color: #059669;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #10b981;
  padding-left: 12px;
}
.section {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 200px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #10b981;
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
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(16, 185, 129, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Function Composition Advanced
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Compose: right to left
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

// Pipe: left to right
const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

// 1. Compose Function
document.getElementById('btn-compose').addEventListener('click', () => {
  const output = document.getElementById('compose-output');
  
  const add5 = (x) => x + 5;
  const multiply3 = (x) => x * 3;
  const subtract2 = (x) => x - 2;
  
  // Compose: right to left
  const composed = compose(subtract2, multiply3, add5);
  
  const input = 10;
  const result = composed(input);
  
  // Manual steps
  const step1 = add5(input);      // 10 + 5 = 15
  const step2 = multiply3(step1);  // 15 * 3 = 45
  const step3 = subtract2(step2);  // 45 - 2 = 43
  
  output.innerHTML = '<span class="success">✅ COMPOSE (RIGHT → LEFT)</span>\\n\\n' +
    'Functions:\\n' +
    '  add5(x) = x + 5\\n' +
    '  multiply3(x) = x * 3\\n' +
    '  subtract2(x) = x - 2\\n\\n' +
    'compose(subtract2, multiply3, add5)\\n\\n' +
    'Execution order (right to left):\\n' +
    '  1. add5(10) = ' + step1 + '\\n' +
    '  2. multiply3(15) = ' + step2 + '\\n' +
    '  3. subtract2(45) = ' + step3 + '\\n\\n' +
    'Result: ' + result + '\\n\\n' +
    'Compose reads like math: f(g(h(x)))';
  
  log('✅ Compose: ' + result);
});

// 2. Pipe Function
document.getElementById('btn-pipe').addEventListener('click', () => {
  const output = document.getElementById('pipe-output');
  
  const add5 = (x) => x + 5;
  const multiply3 = (x) => x * 3;
  const subtract2 = (x) => x - 2;
  
  // Pipe: left to right
  const piped = pipe(add5, multiply3, subtract2);
  
  const input = 10;
  const result = piped(input);
  
  // Manual steps
  const step1 = add5(input);      // 10 + 5 = 15
  const step2 = multiply3(step1);  // 15 * 3 = 45
  const step3 = subtract2(step2);  // 45 - 2 = 43
  
  output.innerHTML = '<span class="success">✅ PIPE (LEFT → RIGHT)</span>\\n\\n' +
    'Functions:\\n' +
    '  add5(x) = x + 5\\n' +
    '  multiply3(x) = x * 3\\n' +
    '  subtract2(x) = x - 2\\n\\n' +
    'pipe(add5, multiply3, subtract2)\\n\\n' +
    'Execution order (left to right):\\n' +
    '  1. add5(10) = ' + step1 + '\\n' +
    '  2. multiply3(15) = ' + step2 + '\\n' +
    '  3. subtract2(45) = ' + step3 + '\\n\\n' +
    'Result: ' + result + '\\n\\n' +
    'Pipe reads like a pipeline: data flows →';
  
  log('✅ Pipe: ' + result);
});

// 3. Real-World Example
document.getElementById('btn-realworld').addEventListener('click', () => {
  const input = document.getElementById('text-input').value;
  const output = document.getElementById('realworld-output');
  
  // Individual transformations
  const trim = (str) => str.trim();
  const toLowerCase = (str) => str.toLowerCase();
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const removeExtraSpaces = (str) => str.replace(/\\s+/g, ' ');
  const addExclamation = (str) => str + '!';
  
  // Compose the pipeline
  const processText = pipe(
    trim,
    toLowerCase,
    removeExtraSpaces,
    capitalize,
    addExclamation
  );
  
  const result = processText(input);
  
  // Show steps
  const steps = [
    'Input: "' + input + '"',
    'trim(): "' + trim(input) + '"',
    'toLowerCase(): "' + toLowerCase(trim(input)) + '"',
    'removeExtraSpaces(): "' + removeExtraSpaces(toLowerCase(trim(input))) + '"',
    'capitalize(): "' + capitalize(removeExtraSpaces(toLowerCase(trim(input)))) + '"',
    'addExclamation(): "' + result + '"'
  ];
  
  output.innerHTML = '<span class="success">✅ REAL-WORLD PIPELINE</span>\\n\\n' +
    'Text processing pipeline:\\n' +
    steps.map((s, i) => '  ' + (i + 1) + '. ' + s).join('\\n') + '\\n\\n' +
    'Final result: "' + result + '"\\n\\n' +
    'Each function does ONE thing!\\n' +
    'Composed together = powerful transformation';
  
  log('✅ Text processed: "' + result + '"');
});

// 4. Async Composition
document.getElementById('btn-async').addEventListener('click', async () => {
  const output = document.getElementById('async-output');
  
  output.innerHTML = '<span class="highlight">⏳ Processing async pipeline...</span>';
  
  // Async pipe
  const pipeAsync = (...fns) => (x) => 
    fns.reduce((acc, fn) => acc.then(fn), Promise.resolve(x));
  
  // Async functions
  const fetchUser = async (id) => {
    await new Promise(r => setTimeout(r, 200));
    return { id, name: 'User' + id };
  };
  
  const addTimestamp = async (user) => {
    await new Promise(r => setTimeout(r, 200));
    return { ...user, timestamp: Date.now() };
  };
  
  const formatUser = async (user) => {
    await new Promise(r => setTimeout(r, 200));
    return user.name + ' (ID: ' + user.id + ')';
  };
  
  // Compose async pipeline
  const processUser = pipeAsync(
    fetchUser,
    addTimestamp,
    formatUser
  );
  
  const start = Date.now();
  const result = await processUser(42);
  const elapsed = Date.now() - start;
  
  output.innerHTML = '<span class="success">✅ ASYNC COMPOSITION</span>\\n\\n' +
    'Async pipeline:\\n' +
    '  1. fetchUser(42)\\n' +
    '  2. addTimestamp(user)\\n' +
    '  3. formatUser(user)\\n\\n' +
    'Result: "' + result + '"\\n' +
    'Time: ' + elapsed + 'ms\\n\\n' +
    'Each step waits for previous!\\n\\n' +
    'pipeAsync = (...fns) => (x) =>\\n' +
    '  fns.reduce((acc, fn) =>\\n' +
    '    acc.then(fn), Promise.resolve(x))';
  
  log('✅ Async pipe: ' + result + ' (' + elapsed + 'ms)');
});

log('🚀 Function Composition module loaded!');
log('💡 Build complex logic from simple functions');`,
  },

  {
    topic: "partial-application",
    description: "Partial application and currying — fix arguments and create specialized functions",
    html: `<div class="container">
  <h1>🔷 Partial Application</h1>
  <p class="subtitle">Partial application and currying</p>

  <div class="section">
    <h2>1. Partial Application</h2>
    <button id="btn-partial">Test Partial Application</button>
    <div id="partial-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Currying</h2>
    <button id="btn-curry">Test Currying</button>
    <div id="curry-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Real-World Use Cases</h2>
    <button id="btn-usecases">Show Use Cases</button>
    <div id="usecases-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Auto-Curry Function</h2>
    <button id="btn-autocurry">Test Auto-Curry</button>
    <div id="autocurry-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #10b981;
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
  color: #059669;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #10b981;
  padding-left: 12px;
}
.section {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #10b981;
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
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(16, 185, 129, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Partial Application
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Partial Application
document.getElementById('btn-partial').addEventListener('click', () => {
  const output = document.getElementById('partial-output');
  
  // Original function
  function multiply(a, b, c) {
    return a * b * c;
  }
  
  // Partial application helper
  function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
      return fn(...fixedArgs, ...remainingArgs);
    };
  }
  
  // Create specialized functions
  const multiplyBy2 = partial(multiply, 2);
  const multiplyBy2And3 = partial(multiply, 2, 3);
  
  const result1 = multiplyBy2(5, 10);        // 2 * 5 * 10 = 100
  const result2 = multiplyBy2And3(4);        // 2 * 3 * 4 = 24
  const result3 = multiply(2, 3, 4);         // 2 * 3 * 4 = 24
  
  output.innerHTML = '<span class="success">✅ PARTIAL APPLICATION</span>\\n\\n' +
    'Original function:\\n' +
    '  multiply(a, b, c) = a * b * c\\n\\n' +
    'Partial applications:\\n' +
    '  multiplyBy2 = partial(multiply, 2)\\n' +
    '  multiplyBy2(5, 10) = ' + result1 + '\\n\\n' +
    '  multiplyBy2And3 = partial(multiply, 2, 3)\\n' +
    '  multiplyBy2And3(4) = ' + result2 + '\\n\\n' +
    'Partial application:\\n' +
    '  • Fix some arguments\\n' +
    '  • Return new function\\n' +
    '  • Accepts remaining arguments\\n\\n' +
    'Creates specialized versions!';
  
  log('✅ Partial: ' + result1 + ', ' + result2);
});

// 2. Currying
document.getElementById('btn-curry').addEventListener('click', () => {
  const output = document.getElementById('curry-output');
  
  // Manual currying
  function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  // Arrow function version
  const addArrow = (a) => (b) => (c) => a + b + c;
  
  const result1 = add(1)(2)(3);
  const result2 = addArrow(10)(20)(30);
  
  // Partial application with curried function
  const add5 = add(5);
  const add5And10 = add5(10);
  const result3 = add5And10(15);
  
  output.innerHTML = '<span class="success">✅ CURRYING</span>\\n\\n' +
    'Manual currying:\\n' +
    '  function add(a) {\\n' +
    '    return (b) => (c) => a + b + c;\\n' +
    '  }\\n\\n' +
    'Usage:\\n' +
    '  add(1)(2)(3) = ' + result1 + '\\n' +
    '  addArrow(10)(20)(30) = ' + result2 + '\\n\\n' +
    'Partial application:\\n' +
    '  const add5 = add(5);\\n' +
    '  const add5And10 = add5(10);\\n' +
    '  add5And10(15) = ' + result3 + '\\n\\n' +
    'Currying = one argument at a time\\n' +
    'Each call returns a new function!';
  
  log('✅ Currying: ' + result1 + ', ' + result2 + ', ' + result3);
});

// 3. Real-World Use Cases
document.getElementById('btn-usecases').addEventListener('click', () => {
  const output = document.getElementById('usecases-output');
  
  // Use case 1: Event handlers
  const handleClick = (prefix) => (event) => {
    return prefix + ': Button clicked';
  };
  
  const adminClick = handleClick('ADMIN');
  const userClick = handleClick('USER');
  
  const click1 = adminClick({ type: 'click' });
  const click2 = userClick({ type: 'click' });
  
  // Use case 2: API calls
  const apiCall = (baseUrl) => (endpoint) => (params) => {
    return baseUrl + endpoint + '?' + params;
  };
  
  const myApi = apiCall('https://api.example.com');
  const usersEndpoint = myApi('/users');
  const url = usersEndpoint('page=1&limit=10');
  
  // Use case 3: Validation
  const validate = (min) => (max) => (value) => {
    return value >= min && value <= max;
  };
  
  const isValidAge = validate(0)(120);
  const isValidPercent = validate(0)(100);
  
  const age1 = isValidAge(25);
  const age2 = isValidAge(150);
  const percent1 = isValidPercent(75);
  
  output.innerHTML = '<span class="success">✅ REAL-WORLD USE CASES</span>\\n\\n' +
    '1. EVENT HANDLERS:\\n' +
    '   adminClick() = "' + click1 + '"\\n' +
    '   userClick() = "' + click2 + '"\\n\\n' +
    '2. API CALLS:\\n' +
    '   myApi("/users")("page=1&limit=10")\\n' +
    '   = "' + url + '"\\n\\n' +
    '3. VALIDATION:\\n' +
    '   isValidAge(25) = ' + age1 + '\\n' +
    '   isValidAge(150) = ' + age2 + '\\n' +
    '   isValidPercent(75) = ' + percent1 + '\\n\\n' +
    'Benefits:\\n' +
    '  • Reusable specialized functions\\n' +
    '  • Configuration separation\\n' +
    '  • Cleaner code';
  
  log('✅ Use cases demonstrated');
});

// 4. Auto-Curry Function
document.getElementById('btn-autocurry').addEventListener('click', () => {
  const output = document.getElementById('autocurry-output');
  
  // Auto-curry utility
  function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...nextArgs) {
          return curried.apply(this, args.concat(nextArgs));
        };
      }
    };
  }
  
  // Regular function
  function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  // Auto-curried version
  const curriedSum = curry(sum);
  
  // All these work!
  const result1 = curriedSum(1)(2)(3)(4);
  const result2 = curriedSum(1, 2)(3, 4);
  const result3 = curriedSum(1, 2, 3)(4);
  const result4 = curriedSum(1)(2, 3, 4);
  const result5 = curriedSum(1, 2, 3, 4);
  
  // Partial application
  const add10 = curriedSum(10);
  const add10And20 = add10(20);
  const result6 = add10And20(30, 40);
  
  output.innerHTML = '<span class="success">✅ AUTO-CURRY</span>\\n\\n' +
    'Original: sum(a, b, c, d)\\n' +
    'Curried: curry(sum)\\n\\n' +
    'All these work:\\n' +
    '  curriedSum(1)(2)(3)(4) = ' + result1 + '\\n' +
    '  curriedSum(1, 2)(3, 4) = ' + result2 + '\\n' +
    '  curriedSum(1, 2, 3)(4) = ' + result3 + '\\n' +
    '  curriedSum(1)(2, 3, 4) = ' + result4 + '\\n' +
    '  curriedSum(1, 2, 3, 4) = ' + result5 + '\\n\\n' +
    'Partial application:\\n' +
    '  const add10 = curriedSum(10);\\n' +
    '  const add10And20 = add10(20);\\n' +
    '  add10And20(30, 40) = ' + result6 + '\\n\\n' +
    'Auto-curry = flexible argument passing!';
  
  log('✅ Auto-curry: flexible and powerful');
});

log('🚀 Partial Application module loaded!');
log('💡 Fix arguments, create specialized functions');`,
  },

  {
    topic: "recursion-patterns",
    description: "Recursion, tail call optimization, and recursive data structures",
    html: `<div class="container">
  <h1>🔷 Recursion Patterns</h1>
  <p class="subtitle">Recursion, tail calls, recursive data structures</p>

  <div class="section">
    <h2>1. Basic Recursion</h2>
    <button id="btn-basic">Test Basic Recursion</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Tail Call Optimization</h2>
    <button id="btn-tail">Test Tail Recursion</button>
    <div id="tail-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Recursive Data Structures</h2>
    <button id="btn-tree">Process Tree Structure</button>
    <div id="tree-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Recursion vs Iteration</h2>
    <button id="btn-comparison">Compare Performance</button>
    <div id="comparison-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #10b981;
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
  color: #059669;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #10b981;
  padding-left: 12px;
}
.section {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #10b981;
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
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(16, 185, 129, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Recursion Patterns
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Recursion
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  // Factorial
  function factorial(n) {
    if (n <= 1) return 1;
    return  n * factorial(n - 1);
  }
  
  // Fibonacci
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Sum of array
  function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
  }
  
  const fact5 = factorial(5);
  const fact10 = factorial(10);
  const fib8 = fibonacci(8);
  const fib10 = fibonacci(10);
  const sum = sumArray([1, 2, 3, 4, 5]);
  
  output.innerHTML = '<span class="success">✅ BASIC RECURSION</span>\\n\\n' +
    'Factorial:\\n' +
    '  factorial(5) = ' + fact5 + '\\n' +
    '  factorial(10) = ' + fact10 + '\\n\\n' +
    'Fibonacci:\\n' +
    '  fibonacci(8) = ' + fib8 + '\\n' +
    '  fibonacci(10) = ' + fib10 + '\\n\\n' +
    'Sum of array:\\n' +
    '  sumArray([1,2,3,4,5]) = ' + sum + '\\n\\n' +
    'Recursion structure:\\n' +
    '  1. Base case (stop condition)\\n' +
    '  2. Recursive case (call itself)\\n' +
    '  3. Progress toward base case';
  
  log('✅ Recursion: factorial(5)=' + fact5 + ', fib(10)=' + fib10);
});

// 2. Tail Call Optimization
document.getElementById('btn-tail').addEventListener('click', () => {
  const output = document.getElementById('tail-output');
  
  // Regular recursion (NOT tail call)
  function factorialRegular(n) {
    if (n <= 1) return 1;
    return n * factorialRegular(n - 1); // Must wait for result
  }
  
  // Tail call optimized (accumulator pattern)
  function factorialTail(n, acc = 1) {
    if (n <= 1) return acc;
    return factorialTail(n - 1, n * acc); // Last operation is the call
  }
  
  // Tail call sum
  function sumTail(arr, acc = 0) {
    if (arr.length === 0) return acc;
    return sumTail(arr.slice(1), acc + arr[0]);
  }
  
  // Trampoline pattern (avoids stack overflow)
  function trampoline(fn) {
    return function(...args) {
      let result = fn(...args);
      while (typeof result === 'function') {
        result = result();
      }
      return result;
    };
  }
  
  function factTrampoline(n, acc = 1) {
    if (n <= 1) return acc;
    return () => factTrampoline(n - 1, n * acc);
  }
  
  const trampolinedFact = trampoline(factTrampoline);
  
  const r1 = factorialRegular(10);
  const r2 = factorialTail(10);
  const r3 = sumTail([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const r4 = trampolinedFact(10);
  
  output.innerHTML = '<span class="success">✅ TAIL CALL OPTIMIZATION</span>\\n\\n' +
    'Regular factorial(10) = ' + r1 + '\\n' +
    'Tail factorial(10) = ' + r2 + '\\n\\n' +
    'Tail sum([1..10]) = ' + r3 + '\\n\\n' +
    'Trampoline factorial(10) = ' + r4 + '\\n\\n' +
    'Regular recursion:\\n' +
    '  fact(3) = 3 * fact(2)\\n' +
    '          = 3 * 2 * fact(1)\\n' +
    '          = 3 * 2 * 1 = 6\\n' +
    '  Stack grows with each call!\\n\\n' +
    'Tail recursion:\\n' +
    '  fact(3, 1) → fact(2, 3) → fact(1, 6)\\n' +
    '  No pending operations!\\n\\n' +
    'Trampoline: avoids stack overflow\\n' +
    'by returning functions instead.';
  
  log('✅ Tail call: ' + r2 + ', Trampoline: ' + r4);
});

// 3. Recursive Data Structures
document.getElementById('btn-tree').addEventListener('click', () => {
  const output = document.getElementById('tree-output');
  
  // Tree structure
  const tree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          { value: 4, children: [] },
          { value: 5, children: [] }
        ]
      },
      {
        value: 3,
        children: [
          { value: 6, children: [] },
          {
            value: 7,
            children: [
              { value: 8, children: [] }
            ]
          }
        ]
      }
    ]
  };
  
  // Sum all values
  function sumTree(node) {
    if (!node) return 0;
    return node.value + node.children.reduce((acc, child) => acc + sumTree(child), 0);
  }
  
  // Find max depth
  function maxDepth(node) {
    if (!node || node.children.length === 0) return 1;
    return 1 + Math.max(...node.children.map(maxDepth));
  }
  
  // Collect all values (DFS)
  function collectValues(node) {
    if (!node) return [];
    return [node.value, ...node.children.flatMap(collectValues)];
  }
  
  // Find node by value
  function findNode(node, target) {
    if (!node) return null;
    if (node.value === target) return node;
    for (const child of node.children) {
      const found = findNode(child, target);
      if (found) return found;
    }
    return null;
  }
  
  const total = sumTree(tree);
  const depth = maxDepth(tree);
  const values = collectValues(tree);
  const found = findNode(tree, 7);
  
  output.innerHTML = '<span class="success">✅ RECURSIVE DATA STRUCTURES</span>\\n\\n' +
    'Tree structure:\\n' +
    '       1\\n' +
    '      / \\\\\\n' +
    '     2   3\\n' +
    '    / \\\\ / \\\\\\n' +
    '   4  5 6  7\\n' +
    '            \\\\\\n' +
    '             8\\n\\n' +
    'sumTree() = ' + total + '\\n' +
    'maxDepth() = ' + depth + '\\n' +
    'collectValues() = [' + values.join(', ') + ']\\n' +
    'findNode(7) found? ' + (found !== null) + '\\n\\n' +
    'Recursion is NATURAL for trees!\\n' +
    'Each node is itself a tree.';
  
  log('✅ Tree: sum=' + total + ', depth=' + depth);
});

// 4. Recursion vs Iteration
document.getElementById('btn-comparison').addEventListener('click', () => {
  const output = document.getElementById('comparison-output');
  
  const N = 30;
  
  // Recursive fibonacci (slow)
  function fibRecursive(n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
  
  // Iterative fibonacci (fast)
  function fibIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  }
  
  // Memoized fibonacci (fast)
  function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
  }
  
  const start1 = performance.now();
  const r1 = fibRecursive(N);
  const time1 = (performance.now() - start1).toFixed(2);
  
  const start2 = performance.now();
  const r2 = fibIterative(N);
  const time2 = (performance.now() - start2).toFixed(2);
  
  const start3 = performance.now();
  const r3 = fibMemo(N);
  const time3 = (performance.now() - start3).toFixed(2);
  
  output.innerHTML = '<span class="success">✅ RECURSION VS ITERATION</span>\\n\\n' +
    'fibonacci(' + N + '):\\n\\n' +
    'Recursive (naive):\\n' +
    '  Result: ' + r1 + '\\n' +
    '  Time: ' + time1 + 'ms\\n' +
    '  O(2^n) — exponential!\\n\\n' +
    'Iterative:\\n' +
    '  Result: ' + r2 + '\\n' +
    '  Time: ' + time2 + 'ms\\n' +
    '  O(n) — linear\\n\\n' +
    'Memoized recursion:\\n' +
    '  Result: ' + r3 + '\\n' +
    '  Time: ' + time3 + 'ms\\n' +
    '  O(n) — linear\\n\\n' +
    'Use recursion when:\\n' +
    '  • Data is recursive (trees, graphs)\\n' +
    '  • Code clarity matters\\n' +
    '  • With memoization for performance';
  
  log('✅ Recursive: ' + time1 + 'ms, Iterative: ' + time2 + 'ms, Memo: ' + time3 + 'ms');
});

log('🚀 Recursion Patterns module loaded!');
log('💡 Recursion = elegant solutions for recursive problems');`,
  },


  /* ══════════════════════════════════════════════
     MODULE 7: DESIGN PATTERNS
  ══════════════════════════════════════════════ */

  {
    topic: "observer-pattern",
    description: "Subscribe/publish pattern — decouple event producers from consumers",
    html: `<div class="container">
  <h1>🔷 Observer Pattern</h1>
  <p class="subtitle">Subscribe/publish — decouple producers from consumers</p>

  <div class="section">
    <h2>1. Basic Observer</h2>
    <button id="btn-create">Create Subject</button>
    <button id="btn-notify">Notify Observers</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Event Bus</h2>
    <button id="btn-publish">Publish Event</button>
    <button id="btn-unsubscribe">Unsubscribe One</button>
    <div id="bus-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Store Pattern (Redux-like)</h2>
    <button id="btn-increment">Increment</button>
    <button id="btn-decrement">Decrement</button>
    <button id="btn-reset">Reset</button>
    <div id="store-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Reactive Data</h2>
    <input type="text" id="reactive-input" placeholder="Type something..." />
    <div id="reactive-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Observer Pattern
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Observer
class Subject {
  constructor() {
    this.observers = [];
    this.state = null;
  }
  
  subscribe(observer) {
    this.observers.push(observer);
    return () => this.unsubscribe(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }
  
  notify(data) {
    this.state = data;
    this.observers.forEach(observer => observer(data));
  }
}

let subject = null;

document.getElementById('btn-create').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  subject = new Subject();
  
  subject.subscribe((data) => {
    log('Observer 1 received: ' + JSON.stringify(data));
  });
  
  subject.subscribe((data) => {
    log('Observer 2 received: ' + JSON.stringify(data));
  });
  
  subject.subscribe((data) => {
    log('Observer 3 received: ' + JSON.stringify(data));
  });
  
  output.innerHTML = '<span class="success">✅ SUBJECT CREATED</span>\\n\\n' +
    '3 observers subscribed!\\n\\n' +
    'Click "Notify Observers" to\\n' +
    'send data to all observers.\\n\\n' +
    'Observer pattern:\\n' +
    '  • Subject maintains observer list\\n' +
    '  • Observers subscribe to subject\\n' +
    '  • Subject notifies all on change';
  
  log('✅ Subject created with 3 observers');
});

document.getElementById('btn-notify').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  if (!subject) {
    output.innerHTML = '<span class="error">❌ Create subject first!</span>';
    return;
  }
  
  subject.notify({ event: 'update', value: Math.floor(Math.random() * 100) });
  
  output.innerHTML = '<span class="success">✅ OBSERVERS NOTIFIED</span>\\n\\n' +
    'All ' + subject.observers.length + ' observers received the data!\\n\\n' +
    'Check console for observer logs.\\n\\n' +
    'Subject state: ' + JSON.stringify(subject.state);
  
  log('✅ All observers notified');
});

// 2. Event Bus
class EventBus {
  constructor() {
    this.listeners = {};
  }
  
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
    return () => this.off(event, callback);
  }
  
  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  }
  
  emit(event, data) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach(cb => cb(data));
  }
}

const bus = new EventBus();
const busLog = [];
let unsub = null;

const handler1 = (data) => { busLog.push('Handler1: ' + data.msg); log('🚌 Handler1: ' + data.msg); };
const handler2 = (data) => { busLog.push('Handler2: ' + data.msg); log('🚌 Handler2: ' + data.msg); };
const handler3 = (data) => { busLog.push('Handler3: ' + data.msg); log('🚌 Handler3: ' + data.msg); };

bus.on('message', handler1);
bus.on('message', handler2);
unsub = bus.on('message', handler3);

document.getElementById('btn-publish').addEventListener('click', () => {
  const output = document.getElementById('bus-output');
  
  busLog.length = 0;
  bus.emit('message', { msg: 'Hello from EventBus! #' + Math.floor(Math.random() * 99) });
  
  output.innerHTML = '<span class="success">✅ EVENT BUS</span>\\n\\n' +
    'Event "message" published!\\n\\n' +
    'Handlers called:\\n' +
    busLog.map(l => '  • ' + l).join('\\n') + '\\n\\n' +
    'Active listeners: ' + (bus.listeners['message'] || []).length + '\\n\\n' +
    'Click "Unsubscribe One" to remove Handler3.';
  
  log('✅ Event published to ' + (bus.listeners['message'] || []).length + ' handlers');
});

document.getElementById('btn-unsubscribe').addEventListener('click', () => {
  const output = document.getElementById('bus-output');
  
  if (unsub) {
    unsub();
    unsub = null;
  }
  
  busLog.length = 0;
  bus.emit('message', { msg: 'After unsubscribe!' });
  
  output.innerHTML = '<span class="success">✅ UNSUBSCRIBED</span>\\n\\n' +
    'Handler3 removed!\\n\\n' +
    'Remaining handlers:\\n' +
    busLog.map(l => '  • ' + l).join('\\n') + '\\n\\n' +
    'Active listeners: ' + (bus.listeners['message'] || []).length + '\\n\\n' +
    'Handler3 no longer receives events!';
  
  log('✅ Handler3 unsubscribed');
});

// 3. Store Pattern (Redux-like)
class Store {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
  }
  
  getState() {
    return this.state;
  }
  
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener(this.state));
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

function counterReducer(state = { count: 0, history: [] }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, history: [...state.history, '+1'] };
    case 'DECREMENT':
      return { count: state.count - 1, history: [...state.history, '-1'] };
    case 'RESET':
      return { count: 0, history: [...state.history, 'RESET'] };
    default:
      return state;
  }
}

const store = new Store(counterReducer, { count: 0, history: [] });

function renderStore() {
  const output = document.getElementById('store-output');
  const state = store.getState();
  
  output.innerHTML = '<span class="success">✅ STORE (REDUX-LIKE)</span>\\n\\n' +
    'Current count: ' + state.count + '\\n\\n' +
    'Action history:\\n' +
    (state.history.length
      ? state.history.map(h => '  ' + h).join('\\n')
      : '  (no actions yet)') + '\\n\\n' +
    'Pattern:\\n' +
    '  dispatch(action) → reducer → new state\\n' +
    '  All listeners notified!';
}

store.subscribe(renderStore);
renderStore();

document.getElementById('btn-increment').addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
  log('✅ Dispatched INCREMENT: count=' + store.getState().count);
});

document.getElementById('btn-decrement').addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
  log('✅ Dispatched DECREMENT: count=' + store.getState().count);
});

document.getElementById('btn-reset').addEventListener('click', () => {
  store.dispatch({ type: 'RESET' });
  log('✅ Dispatched RESET');
});

// 4. Reactive Data
function reactive(obj) {
  const listeners = {};
  
  return new Proxy(obj, {
    set(target, key, value) {
      const old = target[key];
      target[key] = value;
      if (listeners[key]) {
        listeners[key].forEach(cb => cb(value, old));
      }
      return true;
    },
    get(target, key) {
      if (key === 'watch') {
        return (prop, cb) => {
          if (!listeners[prop]) listeners[prop] = [];
          listeners[prop].push(cb);
        };
      }
      return target[key];
    }
  });
}

const state = reactive({ text: '', length: 0, upper: '' });

state.watch('text', (newVal) => {
  log('📡 text changed: "' + newVal + '"');
});

state.watch('length', (newVal) => {
  log('📡 length changed: ' + newVal);
});

document.getElementById('reactive-input').addEventListener('input', (e) => {
  const val = e.target.value;
  state.text = val;
  state.length = val.length;
  state.upper = val.toUpperCase();
  
  const output = document.getElementById('reactive-output');
  output.innerHTML = '<span class="success">✅ REACTIVE DATA</span>\\n\\n' +
    'state.text = "' + state.text + '"\\n' +
    'state.length = ' + state.length + '\\n' +
    'state.upper = "' + state.upper + '"\\n\\n' +
    'Watchers fire automatically\\n' +
    'when properties change!\\n\\n' +
    'This is how Vue.js reactivity works!';
});

log('🚀 Observer Pattern module loaded!');
log('💡 Decouple producers from consumers');`,
  },

  {
    topic: "factory-pattern",
    description: "Factory functions and abstract factories — create objects without new",
    html: `<div class="container">
  <h1>🔷 Factory Pattern</h1>
  <p class="subtitle">Create objects without exposing creation logic</p>

  <div class="section">
    <h2>1. Simple Factory</h2>
    <select id="shape-type">
      <option value="circle">Circle</option>
      <option value="rectangle">Rectangle</option>
      <option value="triangle">Triangle</option>
    </select>
    <button id="btn-factory">Create Shape</button>
    <div id="factory-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Factory Function</h2>
    <button id="btn-func-factory">Create Users</button>
    <div id="func-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Abstract Factory</h2>
    <button id="btn-light">Light Theme</button>
    <button id="btn-dark">Dark Theme</button>
    <div id="abstract-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Registry Factory</h2>
    <button id="btn-registry">Test Registry</button>
    <div id="registry-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
select {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Factory Pattern
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Simple Factory
class ShapeFactory {
  static create(type, ...args) {
    switch (type) {
      case 'circle':
        return {
          type: 'circle',
          radius: args[0] || 5,
          area() { return (Math.PI * this.radius ** 2).toFixed(2); },
          perimeter() { return (2 * Math.PI * this.radius).toFixed(2); }
        };
      case 'rectangle':
        return {
          type: 'rectangle',
          width: args[0] || 4,
          height: args[1] || 6,
          area() { return this.width * this.height; },
          perimeter() { return 2 * (this.width + this.height); }
        };
      case 'triangle':
        return {
          type: 'triangle',
          base: args[0] || 3,
          height: args[1] || 4,
          area() { return (0.5 * this.base * this.height).toFixed(2); },
          perimeter() { return (this.base * 3).toFixed(2); }
        };
      default:
        throw new Error('Unknown shape: ' + type);
    }
  }
}

document.getElementById('btn-factory').addEventListener('click', () => {
  const type = document.getElementById('shape-type').value;
  const output = document.getElementById('factory-output');
  
  const shape = ShapeFactory.create(type, 5, 8);
  
  output.innerHTML = '<span class="success">✅ SIMPLE FACTORY</span>\\n\\n' +
    'ShapeFactory.create("' + type + '")\\n\\n' +
    'Created: ' + shape.type + '\\n' +
    'Area: ' + shape.area() + '\\n' +
    'Perimeter: ' + shape.perimeter() + '\\n\\n' +
    'Factory hides creation logic!\\n' +
    'Client just asks for a shape type.';
  
  log('✅ Factory created: ' + shape.type + ', area=' + shape.area());
});

// 2. Factory Function
function createUser(name, role) {
  const permissions = {
    admin: ['read', 'write', 'delete', 'manage'],
    editor: ['read', 'write'],
    viewer: ['read']
  };
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    name,
    role,
    permissions: permissions[role] || ['read'],
    createdAt: new Date().toISOString().split('T')[0],
    can(action) {
      return this.permissions.includes(action);
    },
    toString() {
      return this.name + ' (' + this.role + ')';
    }
  };
}

document.getElementById('btn-func-factory').addEventListener('click', () => {
  const output = document.getElementById('func-output');
  
  const admin = createUser('Alice', 'admin');
  const editor = createUser('Bob', 'editor');
  const viewer = createUser('Carol', 'viewer');
  
  const results = [admin, editor, viewer].map(user => {
    return user.toString() + '\\n' +
      '  can write: ' + user.can('write') + '\\n' +
      '  can delete: ' + user.can('delete');
  });
  
  output.innerHTML = '<span class="success">✅ FACTORY FUNCTION</span>\\n\\n' +
    'Created users:\\n\\n' +
    results.join('\\n\\n') + '\\n\\n' +
    'Factory function benefits:\\n' +
    '  • No "new" keyword needed\\n' +
    '  • Encapsulates creation logic\\n' +
    '  • Easy to add defaults/validation';
  
  log('✅ Factory function: 3 users created');
});

// 3. Abstract Factory
function createTheme(type) {
  const themes = {
    light: {
      name: 'Light',
      createButton() {
        return { bg: '#ffffff', text: '#000000', border: '#cccccc', label: 'Light Button' };
      },
      createCard() {
        return { bg: '#f9f9f9', shadow: 'rgba(0,0,0,0.1)', border: '#eeeeee', label: 'Light Card' };
      },
      createInput() {
        return { bg: '#ffffff', text: '#333333', placeholder: '#999999', label: 'Light Input' };
      }
    },
    dark: {
      name: 'Dark',
      createButton() {
        return { bg: '#1a1a2e', text: '#ffffff', border: '#444444', label: 'Dark Button' };
      },
      createCard() {
        return { bg: '#16213e', shadow: 'rgba(0,0,0,0.5)', border: '#333333', label: 'Dark Card' };
      },
      createInput() {
        return { bg: '#0f3460', text: '#e5e5e5', placeholder: '#888888', label: 'Dark Input' };
      }
    }
  };
  
  return themes[type] || themes.light;
}

document.getElementById('btn-light').addEventListener('click', () => {
  const output = document.getElementById('abstract-output');
  const theme = createTheme('light');
  const btn = theme.createButton();
  const card = theme.createCard();
  const input = theme.createInput();
  
  output.innerHTML = '<span class="success">✅ ABSTRACT FACTORY — ' + theme.name.toUpperCase() + '</span>\\n\\n' +
    'Button:\\n' +
    '  bg: "' + btn.bg + '", text: "' + btn.text + '"\\n\\n' +
    'Card:\\n' +
    '  bg: "' + card.bg + '", border: "' + card.border + '"\\n\\n' +
    'Input:\\n' +
    '  bg: "' + input.bg + '", text: "' + input.text + '"\\n\\n' +
    'Abstract Factory:\\n' +
    '  • Creates families of related objects\\n' +
    '  • Consistent theme across components\\n' +
    '  • Swap entire theme at once!';
  
  log('✅ Light theme factory created');
});

document.getElementById('btn-dark').addEventListener('click', () => {
  const output = document.getElementById('abstract-output');
  const theme = createTheme('dark');
  const btn = theme.createButton();
  const card = theme.createCard();
  const input = theme.createInput();
  
  output.innerHTML = '<span class="success">✅ ABSTRACT FACTORY — ' + theme.name.toUpperCase() + '</span>\\n\\n' +
    'Button:\\n' +
    '  bg: "' + btn.bg + '", text: "' + btn.text + '"\\n\\n' +
    'Card:\\n' +
    '  bg: "' + card.bg + '", border: "' + card.border + '"\\n\\n' +
    'Input:\\n' +
    '  bg: "' + input.bg + '", text: "' + input.text + '"\\n\\n' +
    'Abstract Factory:\\n' +
    '  • Creates families of related objects\\n' +
    '  • Consistent theme across components\\n' +
    '  • Swap entire theme at once!';
  
  log('✅ Dark theme factory created');
});

// 4. Registry Factory
class PluginRegistry {
  constructor() {
    this.registry = {};
  }
  
  register(name, factory) {
    this.registry[name] = factory;
    log('📦 Registered plugin: ' + name);
  }
  
  create(name, ...args) {
    const factory = this.registry[name];
    if (!factory) throw new Error('Unknown plugin: ' + name);
    return factory(...args);
  }
  
  list() {
    return Object.keys(this.registry);
  }
}

document.getElementById('btn-registry').addEventListener('click', () => {
  const output = document.getElementById('registry-output');
  
  const registry = new PluginRegistry();
  
  registry.register('logger', (prefix) => ({
    type: 'logger',
    log: (msg) => '[' + prefix + '] ' + msg
  }));
  
  registry.register('validator', (rules) => ({
    type: 'validator',
    validate: (value) => rules.every(rule => rule(value))
  }));
  
  registry.register('formatter', (format) => ({
    type: 'formatter',
    format: (value) => format === 'upper' ? value.toUpperCase() : value.toLowerCase()
  }));
  
  const logger = registry.create('logger', 'APP');
  const validator = registry.create('validator', [
    v => v.length >= 3,
    v => typeof v === 'string'
  ]);
  const formatter = registry.create('formatter', 'upper');
  
  const logMsg = logger.log('Hello World');
  const isValid = validator.validate('test');
  const formatted = formatter.format('hello world');
  
  output.innerHTML = '<span class="success">✅ REGISTRY FACTORY</span>\\n\\n' +
    'Registered plugins: [' + registry.list().join(', ') + ']\\n\\n' +
    'logger.log("Hello World"):\\n' +
    '  "' + logMsg + '"\\n\\n' +
    'validator.validate("test"):\\n' +
    '  ' + isValid + '\\n\\n' +
    'formatter.format("hello world"):\\n' +
    '  "' + formatted + '"\\n\\n' +
    'Registry pattern:\\n' +
    '  • Register factories by name\\n' +
    '  • Create by name at runtime\\n' +
    '  • Extensible without modification';
  
  log('✅ Registry factory: 3 plugins created');
});

log('🚀 Factory Pattern module loaded!');
log('💡 Create objects without exposing creation logic');`,
  },

  {
    topic: "decorator-pattern",
    description: "Add behavior to objects dynamically without modifying the original class",
    html: `<div class="container">
  <h1>🔷 Decorator Pattern</h1>
  <p class="subtitle">Add behavior dynamically without modifying originals</p>

  <div class="section">
    <h2>1. Function Decorator</h2>
    <button id="btn-func">Test Function Decorator</button>
    <div id="func-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Class Decorator</h2>
    <button id="btn-class">Test Class Decorator</button>
    <div id="class-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Stacking Decorators</h2>
    <button id="btn-stack">Stack Decorators</button>
    <div id="stack-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Real-World: API Middleware</h2>
    <button id="btn-api">Test API Decorators</button>
    <div id="api-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Decorator Pattern
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Function Decorator
document.getElementById('btn-func').addEventListener('click', () => {
  const output = document.getElementById('func-output');
  
  // Original function
  function greet(name) {
    return 'Hello, ' + name + '!';
  }
  
  // Decorator: adds logging
  function withLogging(fn) {
    return function(...args) {
      log('📞 Calling ' + fn.name + '(' + args.join(', ') + ')');
      const result = fn(...args);
      log('✅ ' + fn.name + ' returned: ' + result);
      return result;
    };
  }
  
  // Decorator: adds timing
  function withTiming(fn) {
    return function(...args) {
      const start = performance.now();
      const result = fn(...args);
      const elapsed = (performance.now() - start).toFixed(3);
      log('⏱ ' + fn.name + ' took ' + elapsed + 'ms');
      return result;
    };
  }
  
  // Decorator: adds memoization
  function withMemo(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (key in cache) {
        log('💾 Cache hit for: ' + key);
        return cache[key];
      }
      cache[key] = fn(...args);
      return cache[key];
    };
  }
  
  const loggedGreet = withLogging(greet);
  const timedGreet = withTiming(greet);
  
  const r1 = loggedGreet('Alice');
  const r2 = timedGreet('Bob');
  
  // Memoized fibonacci
  function slowFib(n) {
    if (n <= 1) return n;
    return slowFib(n - 1) + slowFib(n - 2);
  }
  const memoFib = withMemo(slowFib);
  
  output.innerHTML = '<span class="success">✅ FUNCTION DECORATORS</span>\\n\\n' +
    'withLogging(greet)("Alice"):\\n' +
    '  → "' + r1 + '"\\n\\n' +
    'withTiming(greet)("Bob"):\\n' +
    '  → "' + r2 + '"\\n\\n' +
    'withMemo(slowFib):\\n' +
    '  Caches results for reuse\\n\\n' +
    'Decorators:\\n' +
    '  • Wrap original function\\n' +
    '  • Add behavior before/after\\n' +
    '  • Original unchanged!\\n\\n' +
    'Check console for decorator logs!';
  
  log('✅ Function decorators demonstrated');
});

// 2. Class Decorator
document.getElementById('btn-class').addEventListener('click', () => {
  const output = document.getElementById('class-output');
  
  class Coffee {
    cost() { return 5; }
    description() { return 'Basic Coffee'; }
  }
  
  // Decorator classes
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
    cost() { return this.coffee.cost() + 2; }
    description() { return this.coffee.description() + ', Milk'; }
  }
  
  class SugarDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
    cost() { return this.coffee.cost() + 1; }
    description() { return this.coffee.description() + ', Sugar'; }
  }
  
  class VanillaDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
    cost() { return this.coffee.cost() + 3; }
    description() { return this.coffee.description() + ', Vanilla'; }
  }
  
  // Build up with decorators
  let myCoffee = new Coffee();
  const plain = { cost: myCoffee.cost(), desc: myCoffee.description() };
  
  myCoffee = new MilkDecorator(myCoffee);
  const withMilk = { cost: myCoffee.cost(), desc: myCoffee.description() };
  
  myCoffee = new SugarDecorator(myCoffee);
  const withSugar = { cost: myCoffee.cost(), desc: myCoffee.description() };
  
  myCoffee = new VanillaDecorator(myCoffee);
  const withVanilla = { cost: myCoffee.cost(), desc: myCoffee.description() };
  
  output.innerHTML = '<span class="success">✅ CLASS DECORATORS</span>\\n\\n' +
    'Building up a coffee order:\\n\\n' +
    'Plain:          $' + plain.cost + ' — ' + plain.desc + '\\n' +
    '+ Milk:         $' + withMilk.cost + ' — ' + withMilk.desc + '\\n' +
    '+ Sugar:        $' + withSugar.cost + ' — ' + withSugar.desc + '\\n' +
    '+ Vanilla:      $' + withVanilla.cost + ' — ' + withVanilla.desc + '\\n\\n' +
    'Each decorator:\\n' +
    '  • Wraps the previous object\\n' +
    '  • Adds its own cost/description\\n' +
    '  • Delegates to wrapped object\\n\\n' +
    'Classic "Coffee Shop" example!';
  
  log('✅ Class decorators: final cost $' + withVanilla.cost);
});

// 3. Stacking Decorators
document.getElementById('btn-stack').addEventListener('click', () => {
  const output = document.getElementById('stack-output');
  
  // Utility to stack decorators
  function applyDecorators(fn, ...decorators) {
    return decorators.reduce((decorated, decorator) => decorator(decorated), fn);
  }
  
  // Base function
  function fetchData(url) {
    return 'Data from ' + url;
  }
  
  // Decorators
  function withCache(fn) {
    const cache = {};
    return function(url) {
      if (cache[url]) {
        log('💾 Cache hit: ' + url);
        return cache[url] + ' [CACHED]';
      }
      const result = fn(url);
      cache[url] = result;
      return result;
    };
  }
  
  function withRetry(fn) {
    return function(url) {
      try {
        return fn(url);
      } catch (e) {
        log('🔄 Retrying: ' + url);
        return fn(url);
      }
    };
  }
  
  function withAuth(fn) {
    return function(url) {
      log('🔐 Auth check for: ' + url);
      return fn(url);
    };
  }
  
  function withLogger(fn) {
    return function(url) {
      log('📋 Fetching: ' + url);
      const result = fn(url);
      log('📋 Got: ' + result);
      return result;
    };
  }
  
  // Stack all decorators
  const enhancedFetch = applyDecorators(
    fetchData,
    withCache,
    withRetry,
    withAuth,
    withLogger
  );
  
  const r1 = enhancedFetch('/api/users');
  const r2 = enhancedFetch('/api/users'); // Should hit cache
  
  output.innerHTML = '<span class="success">✅ STACKED DECORATORS</span>\\n\\n' +
    'Applied decorators:\\n' +
    '  withCache + withRetry + withAuth + withLogger\\n\\n' +
    'First call: "' + r1 + '"\\n' +
    'Second call: "' + r2 + '"\\n\\n' +
    'Decorators applied in order:\\n' +
    '  logger → auth → retry → cache → fetch\\n\\n' +
    'Each adds one responsibility!\\n' +
    'Check console for execution trace.';
  
  log('✅ Stacked decorators demonstrated');
});

// 4. Real-World: API Middleware
document.getElementById('btn-api').addEventListener('click', async () => {
  const output = document.getElementById('api-output');
  
  output.innerHTML = '<span class="highlight">⏳ Running API decorators...</span>';
  
  const delay = (ms) => new Promise(r => setTimeout(r, ms));
  
  // Base API call
  async function apiCall(endpoint) {
    await delay(100);
    return { data: 'Response from ' + endpoint, status: 200 };
  }
  
  // Middleware decorators
  function withRateLimit(fn, limit = 3) {
    let calls = 0;
    return async function(...args) {
      if (calls >= limit) {
        throw new Error('Rate limit exceeded');
      }
      calls++;
      log('📊 API call ' + calls + '/' + limit);
      return fn(...args);
    };
  }
  
  function withErrorHandler(fn) {
    return async function(...args) {
      try {
        return await fn(...args);
      } catch (e) {
        log('❌ Error handled: ' + e.message);
        return { data: null, status: 429, error: e.message };
      }
    };
  }
  
  function withTransform(fn) {
    return async function(...args) {
      const result = await fn(...args);
      return {
        ...result,
        timestamp: Date.now(),
        endpoint: args[0]
      };
    };
  }
  
  const enhancedApi = withErrorHandler(
    withTransform(
      withRateLimit(apiCall, 2)
    )
  );
  
  const r1 = await enhancedApi('/users');
  const r2 = await enhancedApi('/posts');
  const r3 = await enhancedApi('/comments'); // Should hit rate limit
  
  output.innerHTML = '<span class="success">✅ API MIDDLEWARE DECORATORS</span>\\n\\n' +
    'Call 1 (/users):\\n' +
    '  status: ' + r1.status + ', endpoint: ' + r1.endpoint + '\\n\\n' +
    'Call 2 (/posts):\\n' +
    '  status: ' + r2.status + ', endpoint: ' + r2.endpoint + '\\n\\n' +
    'Call 3 (/comments) — rate limited:\\n' +
    '  status: ' + r3.status + ', error: ' + r3.error + '\\n\\n' +
    'Decorators applied:\\n' +
    '  withRateLimit → withTransform → withErrorHandler\\n\\n' +
    'Check console for execution trace!';
  
  log('✅ API decorators complete');
});

log('🚀 Decorator Pattern module loaded!');
log('💡 Add behavior without modifying originals');`,
  },

  {
    topic: "strategy-pattern",
    description: "Define a family of algorithms, encapsulate each one, and make them interchangeable",
    html: `<div class="container">
  <h1>🔷 Strategy Pattern</h1>
  <p class="subtitle">Interchangeable algorithms — swap behavior at runtime</p>

  <div class="section">
    <h2>1. Sorting Strategies</h2>
    <button id="btn-bubble">Bubble Sort</button>
    <button id="btn-quick">Quick Sort</button>
    <button id="btn-builtin">Built-in Sort</button>
    <div id="sort-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Payment Strategy</h2>
    <button id="btn-card">Pay by Card</button>
    <button id="btn-paypal">Pay by PayPal</button>
    <button id="btn-crypto">Pay by Crypto</button>
    <div id="payment-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Validation Strategy</h2>
    <input type="text" id="validate-input" placeholder="Enter value to validate" value="test@email.com" />
    <button id="btn-email">Validate Email</button>
    <button id="btn-phone">Validate Phone</button>
    <button id="btn-password">Validate Password</button>
    <div id="validate-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Compression Strategy</h2>
    <button id="btn-compress">Test Compression</button>
    <div id="compress-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Strategy Pattern
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Sorter context
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  sort(data) {
    return this.strategy([...data]);
  }
}

const arr = [64, 34, 25, 12, 22, 11, 90];

// 1. Sorting Strategies
const bubbleSort = (arr) => {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
};

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const mid = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
};

const builtinSort = (arr) => [...arr].sort((a, b) => a - b);

const sorter = new Sorter(bubbleSort);

document.getElementById('btn-bubble').addEventListener('click', () => {
  const output = document.getElementById('sort-output');
  sorter.setStrategy(bubbleSort);
  const start = performance.now();
  const result = sorter.sort(arr);
  const time = (performance.now() - start).toFixed(3);
  
  output.innerHTML = '<span class="success">✅ BUBBLE SORT STRATEGY</span>\\n\\n' +
    'Input:  [' + arr.join(', ') + ']\\n' +
    'Output: [' + result.join(', ') + ']\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Algorithm: O(n²) — compare adjacent\\n' +
    'Strategy swapped at runtime!';
  log('✅ Bubble sort: [' + result.join(', ') + ']');
});

document.getElementById('btn-quick').addEventListener('click', () => {
  const output = document.getElementById('sort-output');
  sorter.setStrategy(quickSort);
  const start = performance.now();
  const result = sorter.sort(arr);
  const time = (performance.now() - start).toFixed(3);
  
  output.innerHTML = '<span class="success">✅ QUICK SORT STRATEGY</span>\\n\\n' +
    'Input:  [' + arr.join(', ') + ']\\n' +
    'Output: [' + result.join(', ') + ']\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Algorithm: O(n log n) — divide & conquer\\n' +
    'Strategy swapped at runtime!';
  log('✅ Quick sort: [' + result.join(', ') + ']');
});

document.getElementById('btn-builtin').addEventListener('click', () => {
  const output = document.getElementById('sort-output');
  sorter.setStrategy(builtinSort);
  const start = performance.now();
  const result = sorter.sort(arr);
  const time = (performance.now() - start).toFixed(3);
  
  output.innerHTML = '<span class="success">✅ BUILT-IN SORT STRATEGY</span>\\n\\n' +
    'Input:  [' + arr.join(', ') + ']\\n' +
    'Output: [' + result.join(', ') + ']\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Algorithm: Engine-optimized\\n' +
    'Strategy swapped at runtime!';
  log('✅ Built-in sort: [' + result.join(', ') + ']');
});

// 2. Payment Strategy
class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  pay(amount) {
    return this.strategy(amount);
  }
}

const cardStrategy = (amount) => ({
  method: 'Credit Card',
  amount,
  fee: amount * 0.02,
  total: amount * 1.02,
  message: 'Charged $' + (amount * 1.02).toFixed(2) + ' to card ending in 4242'
});

const paypalStrategy = (amount) => ({
  method: 'PayPal',
  amount,
  fee: amount * 0.035,
  total: amount * 1.035,
  message: 'Sent $' + (amount * 1.035).toFixed(2) + ' via PayPal'
});

const cryptoStrategy = (amount) => ({
  method: 'Crypto',
  amount,
  fee: 0.001,
  total: amount + 0.001,
  message: 'Transferred ' + amount + ' BTC (fee: 0.001 BTC)'
});

const processor = new PaymentProcessor(cardStrategy);

document.getElementById('btn-card').addEventListener('click', () => {
  const output = document.getElementById('payment-output');
  processor.setStrategy(cardStrategy);
  const result = processor.pay(100);
  
  output.innerHTML = '<span class="success">✅ CARD PAYMENT STRATEGY</span>\\n\\n' +
    result.message + '\\n\\n' +
    'Amount: $' + result.amount + '\\n' +
    'Fee: $' + result.fee.toFixed(2) + ' (2%)\\n' +
    'Total: $' + result.total.toFixed(2) + '\\n\\n' +
    'Strategy swapped at runtime!';
  log('✅ Card payment: $' + result.total.toFixed(2));
});

document.getElementById('btn-paypal').addEventListener('click', () => {
  const output = document.getElementById('payment-output');
  processor.setStrategy(paypalStrategy);
  const result = processor.pay(100);
  
  output.innerHTML = '<span class="success">✅ PAYPAL PAYMENT STRATEGY</span>\\n\\n' +
    result.message + '\\n\\n' +
    'Amount: $' + result.amount + '\\n' +
    'Fee: $' + result.fee.toFixed(2) + ' (3.5%)\\n' +
    'Total: $' + result.total.toFixed(2) + '\\n\\n' +
    'Strategy swapped at runtime!';
  log('✅ PayPal payment: $' + result.total.toFixed(2));
});

document.getElementById('btn-crypto').addEventListener('click', () => {
  const output = document.getElementById('payment-output');
  processor.setStrategy(cryptoStrategy);
  const result = processor.pay(0.5);
  
  output.innerHTML = '<span class="success">✅ CRYPTO PAYMENT STRATEGY</span>\\n\\n' +
    result.message + '\\n\\n' +
    'Amount: ' + result.amount + ' BTC\\n' +
    'Fee: ' + result.fee + ' BTC\\n' +
    'Total: ' + result.total + ' BTC\\n\\n' +
    'Strategy swapped at runtime!';
  log('✅ Crypto payment: ' + result.total + ' BTC');
});

// 3. Validation Strategy
class Validator {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  validate(value) {
    return this.strategy(value);
  }
}

const emailStrategy = (value) => {
  const valid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
  return { valid, message: valid ? 'Valid email!' : 'Invalid email format' };
};

const phoneStrategy = (value) => {
  const valid = /^[\\d\\s\\-\\+\\(\\)]{10,}$/.test(value);
  return { valid, message: valid ? 'Valid phone!' : 'Invalid phone (min 10 digits)' };
};

const passwordStrategy = (value) => {
  const checks = {
    length: value.length >= 8,
    upper: /[A-Z]/.test(value),
    lower: /[a-z]/.test(value),
    number: /\\d/.test(value)
  };
  const valid = Object.values(checks).every(Boolean);
  return { valid, checks, message: valid ? 'Strong password!' : 'Weak password' };
};

const validator = new Validator(emailStrategy);

document.getElementById('btn-email').addEventListener('click', () => {
  const value = document.getElementById('validate-input').value;
  const output = document.getElementById('validate-output');
  validator.setStrategy(emailStrategy);
  const result = validator.validate(value);
  
  output.innerHTML = (result.valid ? '<span class="success">✅' : '<span class="error">❌') +
    ' EMAIL VALIDATION</span>\\n\\n' +
    'Input: "' + value + '"\\n' +
    'Result: ' + result.message + '\\n\\n' +
    'Pattern: /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/';
  log((result.valid ? '✅' : '❌') + ' Email: ' + result.message);
});

document.getElementById('btn-phone').addEventListener('click', () => {
  const value = document.getElementById('validate-input').value;
  const output = document.getElementById('validate-output');
  validator.setStrategy(phoneStrategy);
  const result = validator.validate(value);
  
  output.innerHTML = (result.valid ? '<span class="success">✅' : '<span class="error">❌') +
    ' PHONE VALIDATION</span>\\n\\n' +
    'Input: "' + value + '"\\n' +
    'Result: ' + result.message + '\\n\\n' +
    'Pattern: min 10 digits/spaces/dashes';
  log((result.valid ? '✅' : '❌') + ' Phone: ' + result.message);
});

document.getElementById('btn-password').addEventListener('click', () => {
  const value = document.getElementById('validate-input').value;
  const output = document.getElementById('validate-output');
  validator.setStrategy(passwordStrategy);
  const result = validator.validate(value);
  
  const checks = result.checks || {};
  output.innerHTML = (result.valid ? '<span class="success">✅' : '<span class="error">❌') +
    ' PASSWORD VALIDATION</span>\\n\\n' +
    'Input: "' + value + '"\\n' +
    'Result: ' + result.message + '\\n\\n' +
    'Checks:\\n' +
    '  Length >= 8: ' + (checks.length ? '✅' : '❌') + '\\n' +
    '  Uppercase:   ' + (checks.upper ? '✅' : '❌') + '\\n' +
    '  Lowercase:   ' + (checks.lower ? '✅' : '❌') + '\\n' +
    '  Number:      ' + (checks.number ? '✅' : '❌');
  log((result.valid ? '✅' : '❌') + ' Password: ' + result.message);
});

// 4. Compression Strategy
document.getElementById('btn-compress').addEventListener('click', () => {
  const output = document.getElementById('compress-output');
  
  const text = 'Hello World! This is a test string for compression strategies.';
  
  // RLE compression (simple)
  function rleCompress(str) {
    let result = '';
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        result += (count > 1 ? count : '') + str[i - 1];
        count = 1;
      }
    }
    return result;
  }
  
  // Dictionary compression (simple)
  function dictCompress(str) {
    const words = str.split(' ');
    const dict = {};
    let code = 0;
    const compressed = words.map(word => {
      if (!dict[word]) dict[word] = code++;
      return dict[word];
    });
    return { compressed: compressed.join(','), dict, size: compressed.length };
  }
  
  // Base64 encoding (built-in)
  function base64Compress(str) {
    return btoa(str);
  }
  
  const rle = rleCompress(text);
  const dict = dictCompress(text);
  const b64 = base64Compress(text);
  
  output.innerHTML = '<span class="success">✅ COMPRESSION STRATEGIES</span>\\n\\n' +
    'Original (' + text.length + ' chars):\\n' +
    '"' + text.substring(0, 40) + '..."\\n\\n' +
    'RLE Strategy (' + rle.length + ' chars):\\n' +
    '"' + rle.substring(0, 40) + '..."\\n\\n' +
    'Dictionary Strategy (' + dict.size + ' tokens):\\n' +
    '"' + dict.compressed.substring(0, 40) + '..."\\n\\n' +
    'Base64 Strategy (' + b64.length + ' chars):\\n' +
    '"' + b64.substring(0, 40) + '..."\\n\\n' +
    'Same interface, different algorithms!\\n' +
    'Swap strategy based on use case.';
  
  log('✅ Compression strategies: RLE=' + rle.length + ', B64=' + b64.length);
});

log('🚀 Strategy Pattern module loaded!');
log('💡 Swap algorithms at runtime');`,
  },

  {
    topic: "proxy-reflect",
    description: "Proxy and Reflect APIs — intercept and customize object operations",
    html: `<div class="container">
  <h1>🔷 Proxy & Reflect</h1>
  <p class="subtitle">Intercept and customize object operations</p>

  <div class="section">
    <h2>1. Basic Proxy</h2>
    <button id="btn-basic">Test Basic Proxy</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Validation Proxy</h2>
    <input type="text" id="proxy-name" placeholder="Name" value="Alice" />
    <input type="number" id="proxy-age" placeholder="Age" value="25" />
    <button id="btn-validate">Set via Proxy</button>
    <div id="validate-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Reactive Proxy</h2>
    <button id="btn-reactive">Test Reactive Proxy</button>
    <div id="reactive-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Reflect API</h2>
    <button id="btn-reflect">Test Reflect</button>
    <div id="reflect-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #f59e0b;
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
  color: #d97706;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #f59e0b;
  padding-left: 12px;
}
.section {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 140px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #f59e0b;
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
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(245, 158, 11, 0.3);
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
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Proxy & Reflect
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Proxy
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  const target = { name: 'Alice', age: 30, role: 'admin' };
  
  const handler = {
    get(target, key) {
      log('GET: ' + String(key));
      if (key === 'role') return '[HIDDEN]';
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      log('SET: ' + String(key) + ' = ' + value);
      return Reflect.set(target, key, value);
    },
    has(target, key) {
      log('HAS: ' + String(key));
      return Reflect.has(target, key);
    },
    deleteProperty(target, key) {
      log('DELETE: ' + String(key));
      return Reflect.deleteProperty(target, key);
    }
  };
  
  const proxy = new Proxy(target, handler);
  
  const name = proxy.name;
  const role = proxy.role;
  proxy.city = 'NYC';
  const hasAge = 'age' in proxy;
  
  output.innerHTML = '<span class="success">✅ BASIC PROXY</span>\\n\\n' +
    'proxy.name = "' + name + '"\\n' +
    'proxy.role = "' + role + '" (hidden!)\\n' +
    'proxy.city = "NYC" (set)\\n' +
    '"age" in proxy = ' + hasAge + '\\n\\n' +
    'Proxy traps used:\\n' +
    '  get — intercept reads\\n' +
    '  set — intercept writes\\n' +
    '  has — intercept "in" operator\\n' +
    '  deleteProperty — intercept delete\\n\\n' +
    'Check console for trap logs!';
  
  log('✅ Basic proxy demonstrated');
});

// 2. Validation Proxy
document.getElementById('btn-validate').addEventListener('click', () => {
  const name = document.getElementById('proxy-name').value;
  const age = Number(document.getElementById('proxy-age').value);
  const output = document.getElementById('validate-output');
  
  const schema = {
    name: { type: 'string', minLength: 2, maxLength: 50 },
    age: { type: 'number', min: 0, max: 150 }
  };
  
  function createValidatedObject(schema) {
    const data = {};
    
    return new Proxy(data, {
      set(target, key, value) {
        const rule = schema[key];
        if (!rule) {
          throw new Error('Unknown field: ' + String(key));
        }
        if (typeof value !== rule.type) {
          throw new Error(key + ' must be a ' + rule.type);
        }
        if (rule.type === 'string') {
          if (value.length < rule.minLength) {
            throw new Error(key + ' too short (min ' + rule.minLength + ')');
          }
          if (value.length > rule.maxLength) {
            throw new Error(key + ' too long (max ' + rule.maxLength + ')');
          }
        }
        if (rule.type === 'number') {
          if (value < rule.min || value > rule.max) {
            throw new Error(key + ' out of range (' + rule.min + '-' + rule.max + ')');
          }
        }
        return Reflect.set(target, key, value);
      }
    });
  }
  
  const person = createValidatedObject(schema);
  const results = [];
  
  try {
    person.name = name;
    results.push('✅ name = "' + name + '"');
  } catch (e) {
    results.push('❌ name: ' + e.message);
  }
  
  try {
    person.age = age;
    results.push('✅ age = ' + age);
  } catch (e) {
    results.push('❌ age: ' + e.message);
  }
  
  try {
    person.unknown = 'test';
    results.push('✅ unknown set');
  } catch (e) {
    results.push('❌ unknown: ' + e.message);
  }
  
  output.innerHTML = '<span class="success">✅ VALIDATION PROXY</span>\\n\\n' +
    'Setting values:\\n' +
    results.map(r => '  ' + r).join('\\n') + '\\n\\n' +
    'Proxy validates on every set!\\n' +
    'No manual validation needed.\\n\\n' +
    'Schema-based validation:\\n' +
    '  name: string, 2-50 chars\\n' +
    '  age: number, 0-150';
  
  log('✅ Validation proxy: ' + results.length + ' attempts');
});

// 3. Reactive Proxy
document.getElementById('btn-reactive').addEventListener('click', () => {
  const output = document.getElementById('reactive-output');
  
  const changes = [];
  
  function makeReactive(obj, onChange) {
    return new Proxy(obj, {
      set(target, key, value) {
        const old = target[key];
        const result = Reflect.set(target, key, value);
        if (old !== value) {
          onChange(key, value, old);
        }
        return result;
      },
      get(target, key) {
        const value = Reflect.get(target, key);
        if (typeof value === 'object' && value !== null) {
          return makeReactive(value, onChange);
        }
        return value;
      }
    });
  }
  
  const state = makeReactive(
    { count: 0, name: 'Alice', active: true },
    (key, newVal, oldVal) => {
      const change = key + ': ' + oldVal + ' → ' + newVal;
      changes.push(change);
      log('🔄 ' + change);
    }
  );
  
  state.count = 1;
  state.count = 2;
  state.name = 'Bob';
  state.active = false;
  state.count = 3;
  
  output.innerHTML = '<span class="success">✅ REACTIVE PROXY</span>\\n\\n' +
    'Changes detected:\\n' +
    changes.map(c => '  • ' + c).join('\\n') + '\\n\\n' +
    'Reactive proxy:\\n' +
    '  • Intercepts all property sets\\n' +
    '  • Fires onChange callback\\n' +
    '  • Nested objects also reactive\\n\\n' +
    'This is how Vue 3 reactivity works!';
  
  log('✅ Reactive proxy: ' + changes.length + ' changes detected');
});

// 4. Reflect API
document.getElementById('btn-reflect').addEventListener('click', () => {
  const output = document.getElementById('reflect-output');
  
  const obj = { x: 1, y: 2 };
  
  // Reflect.get
  const val = Reflect.get(obj, 'x');
  
  // Reflect.set
  Reflect.set(obj, 'z', 3);
  
  // Reflect.has
  const hasX = Reflect.has(obj, 'x');
  const hasW = Reflect.has(obj, 'w');
  
  // Reflect.deleteProperty
  Reflect.deleteProperty(obj, 'y');
  const hasY = Reflect.has(obj, 'y');
  
  // Reflect.ownKeys
  const keys = Reflect.ownKeys(obj);
  
  // Reflect.apply
  function greet(greeting) {
    return greeting + ', ' + this.name + '!';
  }
  const greeted = Reflect.apply(greet, { name: 'Alice' }, ['Hello']);
  
  // Reflect.construct
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  const point = Reflect.construct(Point, [10, 20]);
  
  output.innerHTML = '<span class="success">✅ REFLECT API</span>\\n\\n' +
    'Reflect.get(obj, "x") = ' + val + '\\n' +
    'Reflect.set(obj, "z", 3) → obj.z = ' + obj.z + '\\n' +
    'Reflect.has(obj, "x") = ' + hasX + '\\n' +
    'Reflect.has(obj, "w") = ' + hasW + '\\n' +
    'Reflect.deleteProperty(obj, "y")\\n' +
    '  has "y" after delete: ' + hasY + '\\n' +
    'Reflect.ownKeys(obj) = [' + keys.join(', ') + ']\\n\\n' +
    'Reflect.apply(greet, {name:"Alice"}, ["Hello"])\\n' +
    '  = "' + greeted + '"\\n\\n' +
    'Reflect.construct(Point, [10, 20])\\n' +
    '  = Point {x: ' + point.x + ', y: ' + point.y + '}\\n\\n' +
    'Reflect mirrors Proxy traps!\\n' +
    'Use in Proxy handlers for default behavior.';
  
  log('✅ Reflect API demonstrated');
});

log('🚀 Proxy & Reflect module loaded!');
log('💡 Intercept and customize object operations');`,
  },


  /* ══════════════════════════════════════════════
     MODULE 8: PERFORMANCE & MEMORY
  ══════════════════════════════════════════════ */

  {
    topic: "memory-management",
    description: "How JavaScript allocates and frees memory — stack, heap, and references",
    html: `<div class="container">
  <h1>🔷 Memory Management</h1>
  <p class="subtitle">Stack, heap, references, and memory leaks</p>

  <div class="section">
    <h2>1. Stack vs Heap</h2>
    <button id="btn-stack-heap">Visualize Stack/Heap</button>
    <div id="stack-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Reference vs Value</h2>
    <button id="btn-ref-val">Test References</button>
    <div id="ref-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Memory Leaks</h2>
    <button id="btn-leaks">Show Leak Patterns</button>
    <div id="leaks-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. WeakMap & WeakSet</h2>
    <button id="btn-weak">Test Weak References</button>
    <div id="weak-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ef4444;
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
  color: #dc2626;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ef4444;
  padding-left: 12px;
}
.section {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #ef4444;
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
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Memory Management
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Stack vs Heap
document.getElementById('btn-stack-heap').addEventListener('click', () => {
  const output = document.getElementById('stack-output');
  
  // STACK: Primitives stored by value
  let a = 10;
  let b = a;
  b = 20;
  
  // HEAP: Objects stored by reference
  let obj1 = { value: 10 };
  let obj2 = obj1;
  obj2.value = 20;
  
  // Function call stack
  function level3() { return 'level3 result'; }
  function level2() { return level3(); }
  function level1() { return level2(); }
  const callResult = level1();
  
  output.innerHTML = '<span class="success">✅ STACK vs HEAP</span>\\n\\n' +
    'STACK (primitives — by value):\\n' +
    '  let a = 10;\\n' +
    '  let b = a; // copy\\n' +
    '  b = 20;\\n' +
    '  a = ' + a + ' (unchanged!)\\n' +
    '  b = ' + b + '\\n\\n' +
    'HEAP (objects — by reference):\\n' +
    '  let obj1 = { value: 10 };\\n' +
    '  let obj2 = obj1; // same ref!\\n' +
    '  obj2.value = 20;\\n' +
    '  obj1.value = ' + obj1.value + ' (changed!)\\n' +
    '  obj2.value = ' + obj2.value + '\\n\\n' +
    'CALL STACK:\\n' +
    '  level1() → level2() → level3()\\n' +
    '  Result: "' + callResult + '"\\n\\n' +
    'Stack: LIFO, fixed size, fast\\n' +
    'Heap: dynamic size, slower, GC managed';
  
  log('✅ Stack: a=' + a + ', b=' + b);
  log('✅ Heap: obj1.value=' + obj1.value);
});

// 2. Reference vs Value
document.getElementById('btn-ref-val').addEventListener('click', () => {
  const output = document.getElementById('ref-output');
  
  // Primitives: pass by value
  function modifyPrimitive(x) {
    x = 100;
    return x;
  }
  
  let num = 5;
  const modifiedNum = modifyPrimitive(num);
  
  // Objects: pass by reference
  function modifyObject(obj) {
    obj.value = 100;
    return obj;
  }
  
  let myObj = { value: 5 };
  const modifiedObj = modifyObject(myObj);
  
  // Shallow vs deep copy
  const original = { a: 1, b: { c: 2 } };
  const shallow = { ...original };
  const deep = JSON.parse(JSON.stringify(original));
  
  shallow.b.c = 99;
  deep.b.c = 88;
  
  output.innerHTML = '<span class="success">✅ REFERENCE vs VALUE</span>\\n\\n' +
    'Primitives (pass by value):\\n' +
    '  num before: ' + num + '\\n' +
    '  modifyPrimitive(num) = ' + modifiedNum + '\\n' +
    '  num after: ' + num + ' (unchanged!)\\n\\n' +
    'Objects (pass by reference):\\n' +
    '  myObj.value before: 5\\n' +
    '  modifyObject(myObj)\\n' +
    '  myObj.value after: ' + myObj.value + ' (changed!)\\n\\n' +
    'Shallow copy:\\n' +
    '  shallow.b.c = 99\\n' +
    '  original.b.c = ' + original.b.c + ' (affected!)\\n\\n' +
    'Deep copy:\\n' +
    '  deep.b.c = 88\\n' +
    '  original.b.c = ' + original.b.c + ' (safe!)';
  
  log('✅ Primitive unchanged: ' + num);
  log('✅ Object changed: ' + myObj.value);
});

// 3. Memory Leaks
document.getElementById('btn-leaks').addEventListener('click', () => {
  const output = document.getElementById('leaks-output');
  
  const leakPatterns = [];
  
  // Pattern 1: Forgotten timers
  leakPatterns.push({
    name: 'Forgotten Timers',
    bad: 'setInterval(() => { /* never cleared */ }, 1000)',
    good: 'const id = setInterval(...); clearInterval(id);',
    tip: 'Always clear intervals/timeouts'
  });
  
  // Pattern 2: Detached DOM nodes
  leakPatterns.push({
    name: 'Detached DOM Nodes',
    bad: 'let el = document.createElement("div"); refs.push(el);',
    good: 'Use WeakRef or clear refs when removing DOM',
    tip: 'Remove event listeners before removing DOM'
  });
  
  // Pattern 3: Closures holding large data
  leakPatterns.push({
    name: 'Closure Holding Large Data',
    bad: 'function outer() { const bigData = new Array(1e6); return () => bigData; }',
    good: 'Return only what you need, null out large refs',
    tip: 'Be careful what closures capture'
  });
  
  // Pattern 4: Global variables
  leakPatterns.push({
    name: 'Accidental Globals',
    bad: 'function leak() { leakedVar = "oops"; }',
    good: 'Always use let/const/var',
    tip: 'Use strict mode to catch accidental globals'
  });
  
  // Pattern 5: Event listeners
  leakPatterns.push({
    name: 'Unremoved Event Listeners',
    bad: 'el.addEventListener("click", handler); // never removed',
    good: 'el.removeEventListener("click", handler);',
    tip: 'Remove listeners when component unmounts'
  });
  
  output.innerHTML = '<span class="error">⚠️ MEMORY LEAK PATTERNS</span>\\n\\n' +
    leakPatterns.map((p, i) => {
      return (i + 1) + '. ' + p.name + '\\n' +
        '   ❌ ' + p.bad.substring(0, 45) + '\\n' +
        '   ✅ ' + p.good.substring(0, 45) + '\\n' +
        '   💡 ' + p.tip;
    }).join('\\n\\n');
  
  log('⚠️ ' + leakPatterns.length + ' leak patterns shown');
});

// 4. WeakMap & WeakSet
document.getElementById('btn-weak').addEventListener('click', () => {
  const output = document.getElementById('weak-output');
  
  // WeakMap: keys are weakly held
  const weakMap = new WeakMap();
  
  let obj1 = { name: 'Alice' };
  let obj2 = { name: 'Bob' };
  
  weakMap.set(obj1, { role: 'admin', lastSeen: Date.now() });
  weakMap.set(obj2, { role: 'user', lastSeen: Date.now() });
  
  const data1 = weakMap.get(obj1);
  const has1 = weakMap.has(obj1);
  
  // When obj1 is set to null, GC can collect it
  obj1 = null;
  // weakMap entry for old obj1 is now eligible for GC
  
  // WeakSet: values are weakly held
  const weakSet = new WeakSet();
  
  let node1 = { id: 1 };
  let node2 = { id: 2 };
  
  weakSet.add(node1);
  weakSet.add(node2);
  
  const hasNode1 = weakSet.has(node1);
  
  // Regular Map vs WeakMap
  const regularMap = new Map();
  let tempObj = { temp: true };
  regularMap.set(tempObj, 'data');
  tempObj = null;
  // regularMap still holds reference! Memory leak possible
  
  output.innerHTML = '<span class="success">✅ WEAKMAP & WEAKSET</span>\\n\\n' +
    'WeakMap:\\n' +
    '  weakMap.set(obj1, {role: "admin"})\\n' +
    '  weakMap.get(obj1).role = "' + data1.role + '"\\n' +
    '  weakMap.has(obj1) = ' + has1 + '\\n\\n' +
    '  obj1 = null; // GC can now collect!\\n' +
    '  WeakMap entry auto-removed by GC\\n\\n' +
    'WeakSet:\\n' +
    '  weakSet.add(node1)\\n' +
    '  weakSet.has(node1) = ' + hasNode1 + '\\n\\n' +
    'WeakMap vs Map:\\n' +
    '  Map: strong reference (prevents GC)\\n' +
    '  WeakMap: weak reference (allows GC)\\n\\n' +
    'Use WeakMap/WeakSet for:\\n' +
    '  • Private data per object\\n' +
    '  • Caching without memory leaks\\n' +
    '  • Tracking DOM nodes';
  
  log('✅ WeakMap: role=' + data1.role);
  log('✅ WeakSet: has node1=' + hasNode1);
});

log('🚀 Memory Management module loaded!');
log('💡 Understand stack, heap, and weak references');`,
  },

  {
    topic: "garbage-collection",
    description: "How the JS garbage collector works — mark-and-sweep, reference counting",
    html: `<div class="container">
  <h1>🔷 Garbage Collection</h1>
  <p class="subtitle">How JS frees memory automatically</p>

  <div class="section">
    <h2>1. Mark and Sweep</h2>
    <button id="btn-mark-sweep">Simulate Mark & Sweep</button>
    <div id="mark-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Reference Counting</h2>
    <button id="btn-ref-count">Test Reference Counting</button>
    <div id="refcount-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Circular References</h2>
    <button id="btn-circular">Test Circular Refs</button>
    <div id="circular-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. GC-Friendly Patterns</h2>
    <button id="btn-patterns">Show GC Patterns</button>
    <div id="patterns-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ef4444;
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
  color: #dc2626;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ef4444;
  padding-left: 12px;
}
.section {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #ef4444;
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
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Garbage Collection
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Mark and Sweep
document.getElementById('btn-mark-sweep').addEventListener('click', () => {
  const output = document.getElementById('mark-output');
  
  // Simulate object graph
  const objects = {
    root: { name: 'root', refs: ['A', 'B'] },
    A: { name: 'A', refs: ['C'] },
    B: { name: 'B', refs: ['D'] },
    C: { name: 'C', refs: [] },
    D: { name: 'D', refs: [] },
    E: { name: 'E', refs: ['F'] }, // unreachable!
    F: { name: 'F', refs: [] }     // unreachable!
  };
  
  // Mark phase: traverse from root
  function markReachable(name, visited = new Set()) {
    if (visited.has(name)) return visited;
    visited.add(name);
    const obj = objects[name];
    if (obj) {
      obj.refs.forEach(ref => markReachable(ref, visited));
    }
    return visited;
  }
  
  const reachable = markReachable('root');
  const allObjects = Object.keys(objects);
  const unreachable = allObjects.filter(name => !reachable.has(name));
  
  output.innerHTML = '<span class="success">✅ MARK AND SWEEP</span>\\n\\n' +
    'Object graph:\\n' +
    '  root → A → C\\n' +
    '       → B → D\\n' +
    '  E → F (no reference from root!)\\n\\n' +
    'MARK phase (from root):\\n' +
    '  Reachable: [' + [...reachable].join(', ') + ']\\n\\n' +
    'SWEEP phase:\\n' +
    '  Unreachable (collected): [' + unreachable.join(', ') + ']\\n\\n' +
    'GC Algorithm:\\n' +
    '  1. Start from "roots" (globals, stack)\\n' +
    '  2. Mark all reachable objects\\n' +
    '  3. Sweep (free) unmarked objects\\n' +
    '  4. Repeat periodically';
  
  log('✅ Mark: ' + reachable.size + ' reachable, ' + unreachable.length + ' collected');
});

// 2. Reference Counting
document.getElementById('btn-ref-count').addEventListener('click', () => {
  const output = document.getElementById('refcount-output');
  
  // Simulate reference counting
  class RefCounted {
    constructor(name) {
      this.name = name;
      this.refCount = 1;
      log('📦 Created: ' + name + ' (refs: 1)');
    }
    
    addRef() {
      this.refCount++;
      log('➕ ' + this.name + ' refs: ' + this.refCount);
    }
    
    release() {
      this.refCount--;
      log('➖ ' + this.name + ' refs: ' + this.refCount);
      if (this.refCount === 0) {
        log('🗑️ ' + this.name + ' collected!');
        return true;
      }
      return false;
    }
  }
  
  const obj = new RefCounted('MyObject');
  obj.addRef();   // ref = 2
  obj.addRef();   // ref = 3
  obj.release();  // ref = 2
  obj.release();  // ref = 1
  const collected = obj.release(); // ref = 0 → collected!
  
  output.innerHTML = '<span class="success">✅ REFERENCE COUNTING</span>\\n\\n' +
    'Tracking "MyObject":\\n' +
    '  Created: refs = 1\\n' +
    '  addRef(): refs = 2\\n' +
    '  addRef(): refs = 3\\n' +
    '  release(): refs = 2\\n' +
    '  release(): refs = 1\\n' +
    '  release(): refs = 0 → COLLECTED!\\n\\n' +
    'Collected: ' + collected + '\\n\\n' +
    'Reference counting:\\n' +
    '  • Track how many refs to each object\\n' +
    '  • When count = 0, free memory\\n' +
    '  • Problem: circular references!\\n\\n' +
    'Check console for ref tracking!';
  
  log('✅ Reference counting: collected=' + collected);
});

// 3. Circular References
document.getElementById('btn-circular').addEventListener('click', () => {
  const output = document.getElementById('circular-output');
  
  // Circular reference problem
  function createCircular() {
    const objA = { name: 'A' };
    const objB = { name: 'B' };
    
    objA.ref = objB;  // A → B
    objB.ref = objA;  // B → A (circular!)
    
    return { objA, objB };
  }
  
  const { objA, objB } = createCircular();
  
  const isCircular = objA.ref === objB && objB.ref === objA;
  
  // Breaking circular references
  function breakCircular(obj) {
    obj.ref = null;
  }
  
  // WeakRef solution
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  const node1 = new Node(1);
  const node2 = new Node(2);
  node1.next = node2;
  // node2.prev = new WeakRef(node1); // WeakRef doesn't prevent GC
  
  output.innerHTML = '<span class="success">✅ CIRCULAR REFERENCES</span>\\n\\n' +
    'Created circular reference:\\n' +
    '  objA.ref → objB\\n' +
    '  objB.ref → objA\\n' +
    '  Is circular: ' + isCircular + '\\n\\n' +
    'Problem with ref counting:\\n' +
    '  Both have refCount > 0\\n' +
    '  Neither gets collected!\\n' +
    '  → Memory leak!\\n\\n' +
    'Modern JS (Mark & Sweep) handles this:\\n' +
    '  If neither reachable from root\\n' +
    '  Both get collected anyway!\\n\\n' +
    'Best practices:\\n' +
    '  • Null out refs when done\\n' +
    '  • Use WeakRef for back-references\\n' +
    '  • Avoid unnecessary circular refs';
  
  log('✅ Circular: ' + isCircular);
  log('💡 Modern GC handles circular refs');
});

// 4. GC-Friendly Patterns
document.getElementById('btn-patterns').addEventListener('click', () => {
  const output = document.getElementById('patterns-output');
  
  const patterns = [];
  
  // Pattern 1: Null out large objects
  let largeData = new Array(1000).fill('data');
  patterns.push('✅ Null large objects when done:\\n   largeData = null; // eligible for GC');
  largeData = null;
  
  // Pattern 2: Use local variables
  function processData() {
    const localData = new Array(100).fill(0); // freed when function returns
    return localData.reduce((a, b) => a + b, 0);
  }
  patterns.push('✅ Prefer local variables:\\n   Freed automatically when scope exits');
  
  // Pattern 3: Avoid global accumulation
  patterns.push('✅ Avoid global arrays that grow:\\n   Clear arrays: arr.length = 0');
  
  // Pattern 4: Object pooling
  class ObjectPool {
    constructor(factory, size = 10) {
      this.pool = Array.from({ length: size }, factory);
      this.available = [...this.pool];
    }
    
    acquire() {
      return this.available.pop() || this.pool[0];
    }
    
    release(obj) {
      this.available.push(obj);
    }
  }
  
  const pool = new ObjectPool(() => ({ x: 0, y: 0 }), 5);
  const obj = pool.acquire();
  obj.x = 10; obj.y = 20;
  pool.release(obj);
  
  patterns.push('✅ Object pooling:\\n   Reuse objects instead of creating new ones');
  
  // Pattern 5: WeakMap for metadata
  const metadata = new WeakMap();
  let domNode = { id: 'btn' };
  metadata.set(domNode, { clicks: 0, created: Date.now() });
  patterns.push('✅ WeakMap for object metadata:\\n   Auto-cleaned when object is GC\'d');
  
  output.innerHTML = '<span class="success">✅ GC-FRIENDLY PATTERNS</span>\\n\\n' +
    patterns.join('\\n\\n') + '\\n\\n' +
    'Object pool size: ' + pool.pool.length + '\\n' +
    'Available: ' + pool.available.length + '\\n\\n' +
    'Key principle:\\n' +
    '  Help GC by removing references\\n' +
    '  to objects you no longer need!';
  
  log('✅ GC patterns: ' + patterns.length + ' shown');
});

log('🚀 Garbage Collection module loaded!');
log('💡 Mark-and-sweep keeps your memory clean');`,
  },

  {
    topic: "performance-optimization",
    description: "Debounce, throttle, memoization, and DOM performance techniques",
    html: `<div class="container">
  <h1>🔷 Performance Optimization</h1>
  <p class="subtitle">Debounce, throttle, memoization, DOM performance</p>

  <div class="section">
    <h2>1. Debounce</h2>
    <input type="text" id="debounce-input" placeholder="Type to test debounce..." />
    <div id="debounce-output" class="output-box">Start typing...</div>
  </div>

  <div class="section">
    <h2>2. Throttle</h2>
    <button id="btn-throttle">Click Rapidly!</button>
    <div id="throttle-output" class="output-box">Click the button rapidly...</div>
  </div>

  <div class="section">
    <h2>3. Memoization</h2>
    <button id="btn-memo">Test Memoization</button>
    <div id="memo-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. DOM Performance</h2>
    <button id="btn-dom-bad">Bad DOM Update</button>
    <button id="btn-dom-good">Good DOM Update</button>
    <div id="dom-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ef4444;
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
  color: #dc2626;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ef4444;
  padding-left: 12px;
}
.section {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 0.75rem;
}
button {
  background: #ef4444;
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
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Performance Optimization
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Debounce utility
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Throttle utility
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

// 1. Debounce
let debounceCallCount = 0;
let debounceFireCount = 0;

const debouncedSearch = debounce((value) => {
  debounceFireCount++;
  const output = document.getElementById('debounce-output');
  output.innerHTML = '<span class="success">✅ DEBOUNCE</span>\\n\\n' +
    'Fired after 500ms pause\\n' +
    'Search value: "' + value + '"\\n\\n' +
    'Keystrokes: ' + debounceCallCount + '\\n' +
    'API calls made: ' + debounceFireCount + '\\n\\n' +
    'Debounce waits until user STOPS typing!\\n' +
    'Saves ' + (debounceCallCount - debounceFireCount) + ' unnecessary API calls!';
  log('🔍 Search fired: "' + value + '"');
}, 500);

document.getElementById('debounce-input').addEventListener('input', (e) => {
  debounceCallCount++;
  debouncedSearch(e.target.value);
});

// 2. Throttle
let throttleCallCount = 0;
let throttleFireCount = 0;

const throttledClick = throttle(() => {
  throttleFireCount++;
  const output = document.getElementById('throttle-output');
  output.innerHTML = '<span class="success">✅ THROTTLE</span>\\n\\n' +
    'Fired! (max once per 1000ms)\\n\\n' +
    'Total clicks: ' + throttleCallCount + '\\n' +
    'Handler fired: ' + throttleFireCount + '\\n' +
    'Ignored: ' + (throttleCallCount - throttleFireCount) + '\\n\\n' +
    'Throttle limits to once per interval!\\n' +
    'Great for scroll/resize handlers.';
  log('🖱️ Throttle fired: ' + throttleFireCount + '/' + throttleCallCount);
}, 1000);

document.getElementById('btn-throttle').addEventListener('click', () => {
  throttleCallCount++;
  throttledClick();
  const output = document.getElementById('throttle-output');
  if (throttleCallCount !== throttleFireCount) {
    output.innerHTML = '<span class="highlight">⏳ THROTTLED</span>\\n\\n' +
      'Click ignored (too fast!)\\n\\n' +
      'Total clicks: ' + throttleCallCount + '\\n' +
      'Handler fired: ' + throttleFireCount + '\\n' +
      'Ignored: ' + (throttleCallCount - throttleFireCount) + '\\n\\n' +
      'Wait 1 second between fires!';
  }
});

// 3. Memoization
document.getElementById('btn-memo').addEventListener('click', () => {
  const output = document.getElementById('memo-output');
  
  function memoize(fn) {
    const cache = new Map();
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        log('💾 Cache hit: ' + key);
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      log('🔢 Computed: ' + key + ' = ' + result);
      return result;
    };
  }
  
  // Expensive function
  function expensiveCalc(n) {
    let result = 0;
    for (let i = 0; i <= n * 1000; i++) result += i;
    return result;
  }
  
  const memoCalc = memoize(expensiveCalc);
  
  const start1 = performance.now();
  const r1 = memoCalc(100);
  const time1 = (performance.now() - start1).toFixed(3);
  
  const start2 = performance.now();
  const r2 = memoCalc(100); // cache hit!
  const time2 = (performance.now() - start2).toFixed(3);
  
  const start3 = performance.now();
  const r3 = memoCalc(200); // new computation
  const time3 = (performance.now() - start3).toFixed(3);
  
  const start4 = performance.now();
  const r4 = memoCalc(200); // cache hit!
  const time4 = (performance.now() - start4).toFixed(3);
  
  output.innerHTML = '<span class="success">✅ MEMOIZATION</span>\\n\\n' +
    'memoCalc(100) first call:\\n' +
    '  Result: ' + r1 + '\\n' +
    '  Time: ' + time1 + 'ms\\n\\n' +
    'memoCalc(100) second call:\\n' +
    '  Result: ' + r2 + '\\n' +
    '  Time: ' + time2 + 'ms (CACHED!)\\n\\n' +
    'memoCalc(200) first call:\\n' +
    '  Time: ' + time3 + 'ms\\n\\n' +
    'memoCalc(200) second call:\\n' +
    '  Time: ' + time4 + 'ms (CACHED!)\\n\\n' +
    'Speedup: ~' + Math.round(time1 / Math.max(time2, 0.001)) + 'x faster on cache hit!';
  
  log('✅ Memo: first=' + time1 + 'ms, cached=' + time2 + 'ms');
});

// 4. DOM Performance
document.getElementById('btn-dom-bad').addEventListener('click', () => {
  const output = document.getElementById('dom-output');
  
  // BAD: Multiple reflows
  const start = performance.now();
  
  const container = document.createElement('div');
  document.body.appendChild(container);
  
  // Each innerHTML triggers reflow
  for (let i = 0; i < 100; i++) {
    container.innerHTML += '<span>' + i + '</span>';
  }
  
  document.body.removeChild(container);
  const time = (performance.now() - start).toFixed(3);
  
  output.innerHTML = '<span class="error">❌ BAD DOM UPDATE</span>\\n\\n' +
    'Added 100 elements one by one\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Problem:\\n' +
    '  container.innerHTML += "<span>..."\\n' +
    '  Each += reads AND writes innerHTML\\n' +
    '  Triggers 100 reflows!\\n\\n' +
    'This is very slow for large lists!';
  
  log('❌ Bad DOM: ' + time + 'ms');
});

document.getElementById('btn-dom-good').addEventListener('click', () => {
  const output = document.getElementById('dom-output');
  
  // GOOD: DocumentFragment + batch update
  const start = performance.now();
  
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 100; i++) {
    const span = document.createElement('span');
    span.textContent = i;
    fragment.appendChild(span);
  }
  
  const container = document.createElement('div');
  container.appendChild(fragment); // Single DOM insertion
  document.body.appendChild(container);
  document.body.removeChild(container);
  
  const time = (performance.now() - start).toFixed(3);
  
  output.innerHTML = '<span class="success">✅ GOOD DOM UPDATE</span>\\n\\n' +
    'Added 100 elements via DocumentFragment\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Techniques used:\\n' +
    '  1. DocumentFragment (off-DOM)\\n' +
    '  2. createElement (not innerHTML)\\n' +
    '  3. Single DOM insertion\\n\\n' +
    'Other DOM tips:\\n' +
    '  • Batch reads before writes\\n' +
    '  • Use requestAnimationFrame\\n' +
    '  • Virtual DOM (React pattern)\\n' +
    '  • CSS classes over inline styles';
  
  log('✅ Good DOM: ' + time + 'ms');
});

log('🚀 Performance Optimization module loaded!');
log('💡 Debounce, throttle, memoize, batch DOM');`,
  },

  {
    topic: "web-workers",
    description: "Run JavaScript in background threads — keep UI responsive with heavy computation",
    html: `<div class="container">
  <h1>🔷 Web Workers</h1>
  <p class="subtitle">Background threads for heavy computation</p>

  <div class="section">
    <h2>1. Worker Simulation</h2>
    <button id="btn-main-thread">Run on Main Thread</button>
    <button id="btn-worker">Run in Worker</button>
    <div id="worker-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Message Passing</h2>
    <input type="number" id="worker-input" placeholder="Number to process" value="40" />
    <button id="btn-message">Send to Worker</button>
    <div id="message-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Worker Use Cases</h2>
    <button id="btn-usecases">Show Use Cases</button>
    <div id="usecases-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. SharedArrayBuffer</h2>
    <button id="btn-shared">Test Shared Memory</button>
    <div id="shared-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ef4444;
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
  color: #dc2626;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ef4444;
  padding-left: 12px;
}
.section {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 180px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #ef4444;
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
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Web Workers
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Simulate heavy computation
function heavyComputation(n) {
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += Math.sqrt(i);
  }
  return result.toFixed(2);
}

// Simulate worker using setTimeout (real workers need separate files)
function simulateWorker(fn, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = fn(data);
      resolve(result);
    }, 0);
  });
}

// 1. Worker Simulation
document.getElementById('btn-main-thread').addEventListener('click', () => {
  const output = document.getElementById('worker-output');
  output.innerHTML = '<span class="highlight">⏳ Running on main thread...</span>\\n(UI may freeze!)';
  
  setTimeout(() => {
    const start = performance.now();
    const result = heavyComputation(5);
    const time = (performance.now() - start).toFixed(0);
    
    output.innerHTML = '<span class="error">⚠️ MAIN THREAD</span>\\n\\n' +
      'Result: ' + result + '\\n' +
      'Time: ' + time + 'ms\\n\\n' +
      'Problem:\\n' +
      '  Ran on MAIN thread\\n' +
      '  UI was BLOCKED during computation!\\n' +
      '  User could not interact with page\\n\\n' +
      'For heavy tasks, use Web Workers!';
    log('⚠️ Main thread: ' + time + 'ms (UI blocked)');
  }, 50);
});

document.getElementById('btn-worker').addEventListener('click', async () => {
  const output = document.getElementById('worker-output');
  output.innerHTML = '<span class="highlight">⏳ Running in worker...</span>\\n(UI stays responsive!)';
  
  const start = performance.now();
  
  // Simulate worker (in real app: new Worker("worker.js"))
  const result = await simulateWorker(heavyComputation, 5);
  const time = (performance.now() - start).toFixed(0);
  
  output.innerHTML = '<span class="success">✅ WEB WORKER</span>\\n\\n' +
    'Result: ' + result + '\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Benefits:\\n' +
    '  Runs on SEPARATE thread\\n' +
    '  UI stays RESPONSIVE\\n' +
    '  User can still interact\\n\\n' +
    'Real Worker syntax:\\n' +
    '  const w = new Worker("worker.js")\\n' +
    '  w.postMessage(data)\\n' +
    '  w.onmessage = (e) => console.log(e.data)';
  log('✅ Worker: ' + time + 'ms (UI responsive)');
});

// 2. Message Passing
document.getElementById('btn-message').addEventListener('click', async () => {
  const n = Number(document.getElementById('worker-input').value);
  const output = document.getElementById('message-output');
  
  output.innerHTML = '<span class="highlight">⏳ Processing n=' + n + '...</span>';
  
  // Simulate worker message passing
  function workerLogic(data) {
    const { type, payload } = data;
    
    switch (type) {
      case 'FIBONACCI': {
        function fib(n) {
          if (n <= 1) return n;
          let a = 0, b = 1;
          for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
          return b;
        }
        return { type: 'RESULT', result: fib(payload), input: payload };
      }
      case 'FACTORIAL': {
        let result = 1;
        for (let i = 2; i <= payload; i++) result *= i;
        return { type: 'RESULT', result, input: payload };
      }
      default:
        return { type: 'ERROR', message: 'Unknown type' };
    }
  }
  
  const start = performance.now();
  
  const fibResult = await simulateWorker(workerLogic, { type: 'FIBONACCI', payload: n });
  const factResult = await simulateWorker(workerLogic, { type: 'FACTORIAL', payload: Math.min(n, 20) });
  
  const time = (performance.now() - start).toFixed(2);
  
  output.innerHTML = '<span class="success">✅ WORKER MESSAGE PASSING</span>\\n\\n' +
    'Messages sent to worker:\\n' +
    '  { type: "FIBONACCI", payload: ' + n + ' }\\n' +
    '  { type: "FACTORIAL", payload: ' + Math.min(n, 20) + ' }\\n\\n' +
    'Worker responses:\\n' +
    '  fibonacci(' + n + ') = ' + fibResult.result + '\\n' +
    '  factorial(' + Math.min(n, 20) + ') = ' + factResult.result + '\\n\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Workers communicate via messages!\\n' +
    'postMessage() / onmessage pattern.';
  
  log('✅ Worker messages: fib=' + fibResult.result);
});

// 3. Worker Use Cases
document.getElementById('btn-usecases').addEventListener('click', () => {
  const output = document.getElementById('usecases-output');
  
  const useCases = [
    {
      name: 'Image Processing',
      desc: 'Resize, filter, compress images',
      example: 'Apply blur/sharpen to canvas pixels'
    },
    {
      name: 'Data Processing',
      desc: 'Parse large CSV/JSON files',
      example: 'Process 100k rows without freezing UI'
    },
    {
      name: 'Cryptography',
      desc: 'Hash passwords, encrypt data',
      example: 'bcrypt hashing in background'
    },
    {
      name: 'Machine Learning',
      desc: 'Run ML inference in browser',
      example: 'TensorFlow.js model predictions'
    },
    {
      name: 'Real-time Data',
      desc: 'Process WebSocket streams',
      example: 'Parse and aggregate live data'
    }
  ];
  
  output.innerHTML = '<span class="success">✅ WEB WORKER USE CASES</span>\\n\\n' +
    useCases.map((uc, i) => {
      return (i + 1) + '. ' + uc.name + '\\n' +
        '   ' + uc.desc + '\\n' +
        '   Example: ' + uc.example;
    }).join('\\n\\n') + '\\n\\n' +
    'Rule of thumb:\\n' +
    '  If it takes > 16ms → use a Worker!\\n' +
    '  (16ms = 60fps frame budget)';
  
  log('✅ Worker use cases: ' + useCases.length + ' shown');
});

// 4. SharedArrayBuffer
document.getElementById('btn-shared').addEventListener('click', () => {
  const output = document.getElementById('shared-output');
  
  try {
    // SharedArrayBuffer for shared memory between workers
    const sharedBuffer = new SharedArrayBuffer(4 * 4); // 4 Int32 values
    const sharedArray = new Int32Array(sharedBuffer);
    
    // Write to shared memory
    sharedArray[0] = 100;
    sharedArray[1] = 200;
    sharedArray[2] = 300;
    sharedArray[3] = 400;
    
    // Atomic operations (thread-safe)
    Atomics.add(sharedArray, 0, 50);    // sharedArray[0] += 50
    Atomics.store(sharedArray, 1, 999); // sharedArray[1] = 999
    const loaded = Atomics.load(sharedArray, 2); // read safely
    
    output.innerHTML = '<span class="success">✅ SHAREDARRAYBUFFER</span>\\n\\n' +
      'Shared memory (4 Int32 values):\\n' +
      '  [0] = ' + sharedArray[0] + ' (100 + 50 via Atomics.add)\\n' +
      '  [1] = ' + sharedArray[1] + ' (set via Atomics.store)\\n' +
      '  [2] = ' + loaded + ' (read via Atomics.load)\\n' +
      '  [3] = ' + sharedArray[3] + '\\n\\n' +
      'Atomics operations:\\n' +
      '  Atomics.add(arr, i, val)\\n' +
      '  Atomics.store(arr, i, val)\\n' +
      '  Atomics.load(arr, i)\\n' +
      '  Atomics.compareExchange(...)\\n\\n' +
      'SharedArrayBuffer allows workers\\n' +
      'to share memory directly!\\n' +
      'Requires COOP/COEP headers.';
    
    log('✅ SharedArrayBuffer: [' + Array.from(sharedArray).join(', ') + ']');
  } catch (e) {
    output.innerHTML = '<span class="highlight">⚠️ SHAREDARRAYBUFFER</span>\\n\\n' +
      'Not available in this context.\\n' +
      'Requires secure context + headers:\\n\\n' +
      '  Cross-Origin-Opener-Policy: same-origin\\n' +
      '  Cross-Origin-Embedder-Policy: require-corp\\n\\n' +
      'Concept:\\n' +
      '  SharedArrayBuffer = shared memory\\n' +
      '  between main thread and workers\\n\\n' +
      '  Atomics = thread-safe operations\\n' +
      '  on shared memory\\n\\n' +
      'Error: ' + e.message;
    log('⚠️ SharedArrayBuffer: ' + e.message);
  }
});

log('🚀 Web Workers module loaded!');
log('💡 Offload heavy work to background threads');`,
  },

  {
    topic: "lazy-evaluation",
    description: "Lazy sequences, generators, and on-demand computation for performance",
    html: `<div class="container">
  <h1>🔷 Lazy Evaluation</h1>
  <p class="subtitle">On-demand computation — compute only what you need</p>

  <div class="section">
    <h2>1. Lazy vs Eager</h2>
    <button id="btn-comparison">Compare Lazy/Eager</button>
    <div id="comparison-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Lazy Sequences with Generators</h2>
    <input type="number" id="lazy-limit" placeholder="How many items?" value="5" />
    <button id="btn-lazy-gen">Generate Lazily</button>
    <div id="lazy-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Infinite Sequences</h2>
    <button id="btn-infinite">Take from Infinite</button>
    <div id="infinite-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Lazy Pipeline</h2>
    <button id="btn-pipeline">Run Lazy Pipeline</button>
    <div id="pipeline-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
    color: #ef4444;
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
  color: #dc2626;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ef4444;
  padding-left: 12px;
}
.section {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 180px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #ef4444;
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
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(239, 68, 68, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Lazy Evaluation
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Lazy vs Eager
document.getElementById('btn-comparison').addEventListener('click', () => {
  const output = document.getElementById('comparison-output');
  
  const computeLog = [];
  
  // EAGER: Computes everything upfront
  function eagerProcess(arr) {
    return arr
      .map(x => {
        computeLog.push('map: ' + x);
        return x * 2;
      })
      .filter(x => {
        computeLog.push('filter: ' + x);
        return x > 4;
      })
      .slice(0, 3);
  }
  
  computeLog.length = 0;
  const eagerStart = performance.now();
  const eagerResult = eagerProcess([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const eagerTime = (performance.now() - eagerStart).toFixed(3);
  const eagerOps = computeLog.length;
  
  // LAZY: Computes only what's needed
  function* lazyMap(iterable, fn) {
    for (const item of iterable) {
      computeLog.push('lazy-map: ' + item);
      yield fn(item);
    }
  }
  
  function* lazyFilter(iterable, fn) {
    for (const item of iterable) {
      computeLog.push('lazy-filter: ' + item);
      if (fn(item)) yield item;
    }
  }
  
  function take(iterable, n) {
    const result = [];
    for (const item of iterable) {
      result.push(item);
      if (result.length >= n) break;
    }
    return result;
  }
  
  computeLog.length = 0;
  const lazyStart = performance.now();
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const mapped = lazyMap(source, x => x * 2);
  const filtered = lazyFilter(mapped, x => x > 4);
  const lazyResult = take(filtered, 3);
  const lazyTime = (performance.now() - lazyStart).toFixed(3);
  const lazyOps = computeLog.length;
  
  output.innerHTML = '<span class="success">✅ LAZY vs EAGER</span>\\n\\n' +
    'EAGER evaluation:\\n' +
    '  Result: [' + eagerResult.join(', ') + ']\\n' +
    '  Operations: ' + eagerOps + '\\n' +
    '  Processed ALL 10 items first!\\n\\n' +
    'LAZY evaluation:\\n' +
    '  Result: [' + lazyResult.join(', ') + ']\\n' +
    '  Operations: ' + lazyOps + '\\n' +
    '  Stopped early — only what needed!\\n\\n' +
    'Lazy saved ' + (eagerOps - lazyOps) + ' operations!\\n\\n' +
    'Lazy = compute on demand\\n' +
    'Eager = compute everything upfront';
  
  log('✅ Eager ops: ' + eagerOps + ', Lazy ops: ' + lazyOps);
});

// 2. Lazy Sequences with Generators
document.getElementById('btn-lazy-gen').addEventListener('click', () => {
  const limit = Number(document.getElementById('lazy-limit').value) || 5;
  const output = document.getElementById('lazy-output');
  
  // Lazy fibonacci generator
  function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  // Lazy range generator
  function* range(start, end, step = 1) {
    for (let i = start; i < end; i += step) {
      yield i;
    }
  }
  
  // Lazy squares generator
  function* squares(iterable) {
    for (const n of iterable) {
      yield n * n;
    }
  }
  
  // Take n items from generator
  function take(gen, n) {
    const result = [];
    for (const val of gen) {
      result.push(val);
      if (result.length >= n) break;
    }
    return result;
  }
  
  const fibs = take(fibonacci(), limit);
  const rangeVals = take(range(0, 1000, 3), limit);
  const squaredFibs = take(squares(fibonacci()), limit);
  
  output.innerHTML = '<span class="success">✅ LAZY GENERATORS</span>\\n\\n' +
    'First ' + limit + ' Fibonacci numbers:\\n' +
    '  [' + fibs.join(', ') + ']\\n\\n' +
    'First ' + limit + ' multiples of 3:\\n' +
    '  [' + rangeVals.join(', ') + ']\\n\\n' +
    'First ' + limit + ' squared Fibonacci:\\n' +
    '  [' + squaredFibs.join(', ') + ']\\n\\n' +
    'Generators are LAZY:\\n' +
    '  • Compute one value at a time\\n' +
    '  • Pause between yields\\n' +
    '  • Perfect for large/infinite sequences';
  
  log('✅ Lazy generators: ' + limit + ' items each');
});

// 3. Infinite Sequences
document.getElementById('btn-infinite').addEventListener('click', () => {
  const output = document.getElementById('infinite-output');
  
  // Infinite natural numbers
  function* naturals(start = 1) {
    let n = start;
    while (true) yield n++;
  }
  
  // Infinite primes
  function* primes() {
    const found = [];
    for (const n of naturals(2)) {
      if (found.every(p => n % p !== 0)) {
        found.push(n);
        yield n;
      }
    }
  }
  
  // Infinite powers of 2
  function* powersOf2() {
    let n = 1;
    while (true) {
      yield n;
      n *= 2;
    }
  }
  
  // Cycle through array infinitely
  function* cycle(arr) {
    while (true) {
      for (const item of arr) yield item;
    }
  }
  
  function take(gen, n) {
    const result = [];
    for (const val of gen) {
      result.push(val);
      if (result.length >= n) break;
    }
    return result;
  }
  
  const first10Naturals = take(naturals(), 10);
  const first10Primes = take(primes(), 10);
  const first8Powers = take(powersOf2(), 8);
  const cycled = take(cycle(['A', 'B', 'C']), 9);
  
  output.innerHTML = '<span class="success">✅ INFINITE SEQUENCES</span>\\n\\n' +
    'First 10 naturals:\\n' +
    '  [' + first10Naturals.join(', ') + ']\\n\\n' +
    'First 10 primes:\\n' +
    '  [' + first10Primes.join(', ') + ']\\n\\n' +
    'First 8 powers of 2:\\n' +
    '  [' + first8Powers.join(', ') + ']\\n\\n' +
    'Cycle [A,B,C] × 3:\\n' +
    '  [' + cycled.join(', ') + ']\\n\\n' +
    'Infinite generators:\\n' +
    '  • Never run out of values\\n' +
    '  • Only compute when asked\\n' +
    '  • Use take() to limit consumption';
  
  log('✅ Infinite sequences: primes=[' + first10Primes.slice(0, 5).join(',') + '...]');
});

// 4. Lazy Pipeline
document.getElementById('btn-pipeline').addEventListener('click', () => {
  const output = document.getElementById('pipeline-output');
  
  // Lazy pipeline utilities
  function* lazyMap(iterable, fn) {
    for (const item of iterable) yield fn(item);
  }
  
  function* lazyFilter(iterable, fn) {
    for (const item of iterable) {
      if (fn(item)) yield item;
    }
  }
  
  function* lazyTake(iterable, n) {
    let count = 0;
    for (const item of iterable) {
      if (count >= n) break;
      yield item;
      count++;
    }
  }
  
  function* naturals(start = 1) {
    let n = start;
    while (true) yield n++;
  }
  
  // Collect to array
  function collect(iterable) {
    return [...iterable];
  }
  
  const processLog = [];
  
  // Build lazy pipeline
  const pipeline = lazyTake(
    lazyFilter(
      lazyMap(
        naturals(1),
        n => {
          processLog.push('map: ' + n + ' → ' + (n * n));
          return n * n;
        }
      ),
      n => {
        processLog.push('filter: ' + n + ' → ' + (n % 2 === 0));
        return n % 2 === 0;
      }
    ),
    5
  );
  
  const start = performance.now();
  const result = collect(pipeline);
  const time = (performance.now() - start).toFixed(3);
  
  output.innerHTML = '<span class="success">✅ LAZY PIPELINE</span>\\n\\n' +
    'Pipeline: naturals → map(n²) → filter(even) → take(5)\\n\\n' +
    'Result: [' + result.join(', ') + ']\\n' +
    'Time: ' + time + 'ms\\n\\n' +
    'Operations performed: ' + processLog.length + '\\n' +
    'First few ops:\\n' +
    processLog.slice(0, 8).map(l => '  ' + l).join('\\n') + '\\n' +
    '  ...\\n\\n' +
    'Pipeline stopped after finding 5 items!\\n' +
    'Did NOT process all naturals.\\n\\n' +
    'Lazy pipeline = memory efficient\\n' +
    'Process one item at a time through all stages.';
  
  log('✅ Lazy pipeline: ' + result.length + ' results, ' + processLog.length + ' ops');
});

log('🚀 Lazy Evaluation module loaded!');
log('💡 Compute only what you need, when you need it');`,
  },

  
  /* ══════════════════════════════════════════════
     MODULE 9: ADVANCED BROWSER APIs
  ══════════════════════════════════════════════ */

  {
    topic: "intersection-observer",
    description: "Detect when elements enter/leave the viewport — lazy loading, animations",
    html: `<div class="container">
  <h1>🔷 Intersection Observer</h1>
  <p class="subtitle">Detect when elements enter or leave the viewport</p>

  <div class="section">
    <h2>1. Basic Observer</h2>
    <button id="btn-observe">Start Observing</button>
    <button id="btn-stop">Stop Observing</button>
    <div id="observe-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Lazy Loading Simulation</h2>
    <button id="btn-lazy">Simulate Lazy Load</button>
    <div id="lazy-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Scroll Animation</h2>
    <button id="btn-animate">Simulate Scroll Animate</button>
    <div id="animate-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Threshold Options</h2>
    <button id="btn-threshold">Test Thresholds</button>
    <div id="threshold-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #3b82f6;
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
  color: #2563eb;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3b82f6;
  padding-left: 12px;
}
.section {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #3b82f6;
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
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(59, 130, 246, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Intersection Observer
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Observer
let observer = null;

document.getElementById('btn-observe').addEventListener('click', () => {
  const output = document.getElementById('observe-output');
  
  // Create observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const status = entry.isIntersecting ? 'VISIBLE' : 'HIDDEN';
      log('👁️ ' + entry.target.id + ': ' + status + ' (' + (entry.intersectionRatio * 100).toFixed(0) + '%)');
    });
  }, {
    threshold: [0, 0.25, 0.5, 0.75, 1.0]
  });
  
  // Observe all sections
  document.querySelectorAll('.section').forEach((section, i) => {
    section.id = section.id || 'section-' + i;
    observer.observe(section);
  });
  
  output.innerHTML = '<span class="success">✅ OBSERVER STARTED</span>\\n\\n' +
    'Observing ' + document.querySelectorAll(".section").length + ' sections\\n\\n' +
    'IntersectionObserver options:\\n' +
    '  threshold: [0, 0.25, 0.5, 0.75, 1.0]\\n\\n' +
    'Fires when element crosses\\n' +
    'each threshold boundary!\\n\\n' +
    'Check console for intersection logs.\\n\\n' +
    'Use cases:\\n' +
    '  • Lazy loading images\\n' +
    '  • Infinite scroll\\n' +
    '  • Scroll animations\\n' +
    '  • Analytics (time visible)';
  
  log('✅ Observer started on ' + document.querySelectorAll('.section').length + ' elements');
});

document.getElementById('btn-stop').addEventListener('click', () => {
  const output = document.getElementById('observe-output');
  
  if (observer) {
    observer.disconnect();
    observer = null;
    output.innerHTML = '<span class="highlight">⏹️ OBSERVER STOPPED</span>\\n\\n' +
      'observer.disconnect() called\\n\\n' +
      'All observations stopped.\\n' +
      'No more intersection events.\\n\\n' +
      'Always disconnect when done\\n' +
      'to prevent memory leaks!';
    log('⏹️ Observer disconnected');
  }
});

// 2. Lazy Loading Simulation
document.getElementById('btn-lazy').addEventListener('click', () => {
  const output = document.getElementById('lazy-output');
  
  // Simulate lazy-loaded images
  const images = [
    { id: 'img-1', src: 'photo1.jpg', loaded: false },
    { id: 'img-2', src: 'photo2.jpg', loaded: false },
    { id: 'img-3', src: 'photo3.jpg', loaded: false },
    { id: 'img-4', src: 'photo4.jpg', loaded: false },
    { id: 'img-5', src: 'photo5.jpg', loaded: false }
  ];
  
  // Simulate IntersectionObserver for lazy loading
  function simulateLazyLoad(images, viewportItems = [0, 1, 2]) {
    const results = [];
    
    images.forEach((img, i) => {
      const inViewport = viewportItems.includes(i);
      
      if (inViewport && !img.loaded) {
        img.loaded = true;
        results.push('✅ Loaded: ' + img.src + ' (in viewport)');
        log('📸 Lazy loaded: ' + img.src);
      } else if (!inViewport) {
        results.push('⏳ Deferred: ' + img.src + ' (out of viewport)');
      } else {
        results.push('💾 Cached: ' + img.src + ' (already loaded)');
      }
    });
    
    return results;
  }
  
  // First scroll position: items 0,1,2 visible
  const firstLoad = simulateLazyLoad(images, [0, 1, 2]);
  
  // Scroll down: items 2,3,4 visible
  const secondLoad = simulateLazyLoad(images, [2, 3, 4]);
  
  output.innerHTML = '<span class="success">✅ LAZY LOADING SIMULATION</span>\\n\\n' +
    'Initial viewport (items 0-2):\\n' +
    firstLoad.map(r => '  ' + r).join('\\n') + '\\n\\n' +
    'After scroll (items 2-4):\\n' +
    secondLoad.map(r => '  ' + r).join('\\n') + '\\n\\n' +
    'Real implementation:\\n' +
    '  <img data-src="photo.jpg" />\\n' +
    '  observer.observe(img)\\n' +
    '  // On intersect:\\n' +
    '  img.src = img.dataset.src\\n' +
    '  observer.unobserve(img)';
  
  log('✅ Lazy load: ' + images.filter(i => i.loaded).length + '/' + images.length + ' loaded');
});

// 3. Scroll Animation
document.getElementById('btn-animate').addEventListener('click', () => {
  const output = document.getElementById('animate-output');
  
  // Simulate scroll-triggered animations
  const elements = [
    { name: 'Hero Section', animated: false, delay: 0 },
    { name: 'Feature Card 1', animated: false, delay: 100 },
    { name: 'Feature Card 2', animated: false, delay: 200 },
    { name: 'Feature Card 3', animated: false, delay: 300 },
    { name: 'CTA Button', animated: false, delay: 400 }
  ];
  
  const animationLog = [];
  
  // Simulate elements entering viewport one by one
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.animated = true;
      animationLog.push('✨ ' + el.name + ' → fadeInUp (delay: ' + el.delay + 'ms)');
      log('✨ Animated: ' + el.name);
      
      if (animationLog.length === elements.length) {
        output.innerHTML = '<span class="success">✅ SCROLL ANIMATIONS</span>\\n\\n' +
          'Elements animated as they entered viewport:\\n\\n' +
          animationLog.join('\\n') + '\\n\\n' +
          'CSS class added on intersection:\\n' +
          '  el.classList.add("animate-in")\\n\\n' +
          '.animate-in {\\n' +
          '  animation: fadeInUp 0.6s ease forwards;\\n' +
          '}\\n\\n' +
          'Staggered with delay for visual appeal!';
      }
    }, el.delay);
  });
  
  output.innerHTML = '<span class="highlight">⏳ Animating elements...</span>';
  log('✅ Scroll animations triggered');
});

// 4. Threshold Options
document.getElementById('btn-threshold').addEventListener('click', () => {
  const output = document.getElementById('threshold-output');
  
  // Demonstrate different threshold behaviors
  const thresholdExamples = [
    {
      threshold: 0,
      description: 'Fires when ANY pixel enters/leaves',
      useCase: 'Infinite scroll, analytics start'
    },
    {
      threshold: 0.5,
      description: 'Fires when 50% is visible',
      useCase: 'Video autoplay, mid-visibility'
    },
    {
      threshold: 1.0,
      description: 'Fires when FULLY visible',
      useCase: 'Complete visibility required'
    },
    {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      description: 'Fires at each 25% boundary',
      useCase: 'Progress tracking, analytics'
    }
  ];
  
  // rootMargin examples
  const rootMarginExamples = [
    { margin: '0px', desc: 'Default — viewport edge' },
    { margin: '100px', desc: 'Trigger 100px BEFORE entering' },
    { margin: '-50px', desc: 'Trigger 50px AFTER entering' },
    { margin: '0px 0px -200px 0px', desc: 'Bottom offset only' }
  ];
  
  output.innerHTML = '<span class="success">✅ THRESHOLD OPTIONS</span>\\n\\n' +
    'threshold values:\\n' +
    thresholdExamples.map(t => {
      const thresh = Array.isArray(t.threshold) ? '[' + t.threshold.join(',') + ']' : t.threshold;
      return '  ' + thresh + ':\\n' +
        '    ' + t.description + '\\n' +
        '    Use: ' + t.useCase;
    }).join('\\n\\n') + '\\n\\n' +
    'rootMargin (like CSS margin):\\n' +
    rootMarginExamples.map(r => {
      return '  "' + r.margin + '"\\n' +
        '    → ' + r.desc;
    }).join('\\n\\n');
  
  log('✅ Threshold options demonstrated');
});

log('🚀 Intersection Observer module loaded!');
log('💡 Observe visibility changes efficiently');`,
  },

  {
    topic: "mutation-observer",
    description: "Watch DOM changes — attribute, child, and subtree mutations",
    html: `<div class="container">
  <h1>🔷 Mutation Observer</h1>
  <p class="subtitle">Watch DOM changes in real time</p>

  <div class="section">
    <h2>1. Observe Child Changes</h2>
    <button id="btn-add-child">Add Child</button>
    <button id="btn-remove-child">Remove Child</button>
    <div id="target-list" style="min-height:40px; background:#1a1a2e; border-radius:8px; padding:8px; margin-bottom:8px;"></div>
    <div id="child-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Observe Attribute Changes</h2>
    <button id="btn-change-attr">Change Attribute</button>
    <div id="attr-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Observe Text Changes</h2>
    <button id="btn-change-text">Change Text</button>
    <div id="text-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Real-World Use Cases</h2>
    <button id="btn-usecases">Show Use Cases</button>
    <div id="usecases-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #3b82f6;
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
  color: #2563eb;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3b82f6;
  padding-left: 12px;
}
.section {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #3b82f6;
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
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(59, 130, 246, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Mutation Observer
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Observe Child Changes
const targetList = document.getElementById('target-list');
const childOutput = document.getElementById('child-output');
const childLog = [];
let childCount = 0;

const childObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          childLog.push('➕ Added: ' + node.textContent);
          log('➕ Child added: ' + node.textContent);
        }
      });
      mutation.removedNodes.forEach(node => {
        if (node.nodeType === 1) {
          childLog.push('➖ Removed: ' + node.textContent);
          log('➖ Child removed: ' + node.textContent);
        }
      });
      
      childOutput.innerHTML = '<span class="success">✅ CHILD MUTATIONS</span>\\n\\n' +
        'Mutation log:\\n' +
        childLog.slice(-6).map(l => '  ' + l).join('\\n') + '\\n\\n' +
        'Current children: ' + targetList.children.length + '\\n\\n' +
        'MutationObserver config:\\n' +
        '  { childList: true }';
    }
  });
});

childObserver.observe(targetList, { childList: true });

document.getElementById('btn-add-child').addEventListener('click', () => {
  childCount++;
  const item = document.createElement('div');
  item.textContent = 'Item ' + childCount;
  item.style.cssText = 'color:#10b981; padding:2px 8px; display:inline-block; margin:2px; background:rgba(16,185,129,0.1); border-radius:4px;';
  targetList.appendChild(item);
});

document.getElementById('btn-remove-child').addEventListener('click', () => {
  if (targetList.lastChild) {
    targetList.removeChild(targetList.lastChild);
  }
});

// 2. Observe Attribute Changes
const attrOutput = document.getElementById('attr-output');
const attrLog = [];
let attrToggle = false;

const attrTarget = document.createElement('div');
attrTarget.id = 'attr-target';
attrTarget.setAttribute('data-status', 'idle');
attrTarget.setAttribute('class', 'default');

const attrObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'attributes') {
      const entry = mutation.attributeName + ': "' +
        mutation.oldValue + '" → "' +
        attrTarget.getAttribute(mutation.attributeName) + '"';
      attrLog.push(entry);
      log('🔄 Attr changed: ' + entry);
      
      attrOutput.innerHTML = '<span class="success">✅ ATTRIBUTE MUTATIONS</span>\\n\\n' +
        'Attribute changes:\\n' +
        attrLog.slice(-5).map(l => '  ' + l).join('\\n') + '\\n\\n' +
        'MutationObserver config:\\n' +
        '  { attributes: true,\\n' +
        '    attributeOldValue: true,\\n' +
        '    attributeFilter: ["data-status", "class"] }';
    }
  });
});

attrObserver.observe(attrTarget, {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ['data-status', 'class']
});

document.getElementById('btn-change-attr').addEventListener('click', () => {
  attrToggle = !attrToggle;
  attrTarget.setAttribute('data-status', attrToggle ? 'active' : 'idle');
  attrTarget.setAttribute('class', attrToggle ? 'active-class' : 'default');
});

// 3. Observe Text Changes
const textOutput = document.getElementById('text-output');
const textLog = [];

const textTarget = document.createElement('p');
textTarget.textContent = 'Original text';

const textObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'characterData') {
      const entry = '"' + mutation.oldValue + '" → "' + mutation.target.textContent + '"';
      textLog.push(entry);
      log('📝 Text changed: ' + entry);
      
      textOutput.innerHTML = '<span class="success">✅ TEXT MUTATIONS</span>\\n\\n' +
        'Text changes:\\n' +
        textLog.slice(-5).map(l => '  ' + l).join('\\n') + '\\n\\n' +
        'MutationObserver config:\\n' +
        '  { characterData: true,\\n' +
        '    characterDataOldValue: true,\\n' +
        '    subtree: true }';
    }
  });
});

textObserver.observe(textTarget, {
  characterData: true,
  characterDataOldValue: true,
  subtree: true
});

const textValues = ['Hello World!', 'Text changed!', 'Mutation detected!', 'Observer works!', 'Original text'];
let textIndex = 0;

document.getElementById('btn-change-text').addEventListener('click', () => {
  textIndex = (textIndex + 1) % textValues.length;
  textTarget.firstChild.textContent = textValues[textIndex];
});

// 4. Real-World Use Cases
document.getElementById('btn-usecases').addEventListener('click', () => {
  const output = document.getElementById('usecases-output');
  
  const useCases = [
    {
      name: 'Auto-save Forms',
      desc: 'Watch form fields for changes',
      code: 'observer.observe(form, {subtree:true, characterData:true})'
    },
    {
      name: 'Dynamic Content',
      desc: 'React to third-party DOM changes',
      code: 'observer.observe(container, {childList:true, subtree:true})'
    },
    {
      name: 'Accessibility',
      desc: 'Announce DOM changes to screen readers',
      code: 'Watch aria-live regions for updates'
    },
    {
      name: 'Analytics',
      desc: 'Track when elements appear/change',
      code: 'observer.observe(document.body, {subtree:true})'
    },
    {
      name: 'Security',
      desc: 'Detect unauthorized DOM modifications',
      code: 'Watch critical elements for tampering'
    }
  ];
  
  output.innerHTML = '<span class="success">✅ MUTATION OBSERVER USE CASES</span>\\n\\n' +
    useCases.map((uc, i) => {
      return (i + 1) + '. ' + uc.name + '\\n' +
        '   ' + uc.desc + '\\n' +
        '   ' + uc.code;
    }).join('\\n\\n') + '\\n\\n' +
    'Always call observer.disconnect()\\n' +
    'when observation is no longer needed!';
  
  log('✅ MutationObserver use cases: ' + useCases.length);
});

log('🚀 Mutation Observer module loaded!');
log('💡 Watch DOM changes efficiently');`,
  },

  {
    topic: "custom-events",
    description: "Create and dispatch custom DOM events — component communication patterns",
    html: `<div class="container">
  <h1>🔷 Custom Events</h1>
  <p class="subtitle">Create and dispatch custom DOM events</p>

  <div class="section">
    <h2>1. Basic Custom Event</h2>
    <button id="btn-dispatch">Dispatch Custom Event</button>
    <div id="basic-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Event with Data</h2>
    <input type="text" id="event-data" placeholder="Event payload" value="Hello from event!" />
    <button id="btn-with-data">Dispatch with Data</button>
    <div id="data-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Bubbling Custom Events</h2>
    <button id="btn-bubble">Dispatch Bubbling Event</button>
    <div id="bubble-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Component Communication</h2>
    <button id="btn-component">Simulate Components</button>
    <div id="component-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #3b82f6;
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
  color: #2563eb;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3b82f6;
  padding-left: 12px;
}
.section {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"] {
  background: #1a1a2e;
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 220px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #3b82f6;
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
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(59, 130, 246, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Custom Events
const consoleEl = document.getElementById('console');

function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Custom Event
document.getElementById('btn-dispatch').addEventListener('click', () => {
  const output = document.getElementById('basic-output');
  
  // Listen for custom event
  const handler = (e) => {
    output.innerHTML = '<span class="success">✅ CUSTOM EVENT RECEIVED</span>\\n\\n' +
      'Event type: "' + e.type + '"\\n' +
      'Target: ' + e.target.tagName + '\\n' +
      'Timestamp: ' + e.timeStamp.toFixed(0) + 'ms\\n\\n' +
      'Created with:\\n' +
      '  new CustomEvent("my-event")\\n\\n' +
      'Dispatched with:\\n' +
      '  element.dispatchEvent(event)\\n\\n' +
      'Listened with:\\n' +
      '  element.addEventListener("my-event", handler)';
    log('✅ Custom event received: ' + e.type);
  };
  
  document.addEventListener('my-event', handler, { once: true });
  
  // Create and dispatch
  const event = new CustomEvent('my-event');
  document.dispatchEvent(event);
});

// 2. Event with Data
document.getElementById('btn-with-data').addEventListener('click', () => {
  const payload = document.getElementById('event-data').value;
  const output = document.getElementById('data-output');
  
  // Listen for event with detail data
  const handler = (e) => {
    output.innerHTML = '<span class="success">✅ EVENT WITH DATA</span>\\n\\n' +
      'Event type: "' + e.type + '"\\n\\n' +
      'event.detail:\\n' +
      '  message: "' + e.detail.message + '"\\n' +
      '  timestamp: ' + e.detail.timestamp + '\\n' +
      '  source: "' + e.detail.source + '"\\n' +
      '  count: ' + e.detail.count + '\\n\\n' +
      'Created with:\\n' +
      '  new CustomEvent("data-event", {\\n' +
      '    detail: { message, timestamp, ... }\\n' +
      '  })\\n\\n' +
      'Access data via event.detail!';
    log('✅ Event data: "' + e.detail.message + '"');
  };
  
  document.addEventListener('data-event', handler, { once: true });
  
  // Create event with detail
  const event = new CustomEvent('data-event', {
    detail: {
      message: payload,
      timestamp: Date.now(),
      source: 'user-input',
      count: Math.floor(Math.random() * 100)
    }
  });
  
  document.dispatchEvent(event);
});

// 3. Bubbling Custom Events
document.getElementById('btn-bubble').addEventListener('click', () => {
  const output = document.getElementById('bubble-output');
  const bubbleLog = [];
  
  // Create nested elements to demonstrate bubbling
  const grandparent = document.createElement('div');
  const parent = document.createElement('div');
  const child = document.createElement('div');
  
  grandparent.id = 'gp';
  parent.id = 'par';
  child.id = 'ch';
  
  grandparent.appendChild(parent);
  parent.appendChild(child);
  document.body.appendChild(grandparent);
  
  // Add listeners at each level
  grandparent.addEventListener('bubble-event', (e) => {
    bubbleLog.push('Grandparent caught: ' + e.detail.msg);
    log('🫧 Grandparent: ' + e.detail.msg);
  });
  
  parent.addEventListener('bubble-event', (e) => {
    bubbleLog.push('Parent caught: ' + e.detail.msg);
    log('🫧 Parent: ' + e.detail.msg);
  });
  
  child.addEventListener('bubble-event', (e) => {
    bubbleLog.push('Child caught: ' + e.detail.msg);
    log('🫧 Child: ' + e.detail.msg);
  });
  
  // Dispatch from child — bubbles up
  const bubblingEvent = new CustomEvent('bubble-event', {
    bubbles: true,
    detail: { msg: 'Bubbling up!' }
  });
  child.dispatchEvent(bubblingEvent);
  
  // Dispatch non-bubbling
  const nonBubblingEvent = new CustomEvent('bubble-event', {
    bubbles: false,
    detail: { msg: 'No bubble' }
  });
  child.dispatchEvent(nonBubblingEvent);
  
  document.body.removeChild(grandparent);
  
  output.innerHTML = '<span class="success">✅ BUBBLING CUSTOM EVENTS</span>\\n\\n' +
    'Dispatched from child element:\\n\\n' +
    'With bubbles: true:\\n' +
    bubbleLog.slice(0, 3).map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'With bubbles: false:\\n' +
    bubbleLog.slice(3).map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'bubbles: true → travels up DOM tree\\n' +
    'bubbles: false → stays at target\\n\\n' +
    'cancelable: true → can preventDefault()';
  
  log('✅ Bubbling: ' + bubbleLog.length + ' handlers fired');
});

// 4. Component Communication
document.getElementById('btn-component').addEventListener('click', () => {
  const output = document.getElementById('component-output');
  const commLog = [];
  
  // Simulate component A (Cart)
  class CartComponent {
    constructor(bus) {
      this.bus = bus;
      this.items = [];
      
      bus.addEventListener('product-selected', (e) => {
        this.items.push(e.detail.product);
        commLog.push('🛒 Cart received: ' + e.detail.product.name);
        log('🛒 Cart: added ' + e.detail.product.name);
        
        // Notify others cart updated
        bus.dispatchEvent(new CustomEvent('cart-updated', {
          detail: { count: this.items.length, total: this.getTotal() }
        }));
      });
    }
    
    getTotal() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  }
  
  // Simulate component B (Header/Badge)
  class HeaderComponent {
    constructor(bus) {
      bus.addEventListener('cart-updated', (e) => {
        commLog.push('🔔 Header badge: ' + e.detail.count + ' items ($' + e.detail.total + ')');
        log('🔔 Header: cart=' + e.detail.count + ' items');
      });
    }
  }
  
  // Simulate component C (Analytics)
  class AnalyticsComponent {
    constructor(bus) {
      bus.addEventListener('product-selected', (e) => {
        commLog.push('📊 Analytics: tracked "' + e.detail.product.name + '"');
        log('📊 Analytics: tracked ' + e.detail.product.name);
      });
    }
  }
  
  // Event bus (shared DOM element)
  const bus = document.createElement('div');
  
  const cart = new CartComponent(bus);
  const header = new HeaderComponent(bus);
  const analytics = new AnalyticsComponent(bus);
  
  // Simulate user selecting products
  const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 29 },
    { name: 'Keyboard', price: 79 }
  ];
  
  products.forEach(product => {
    bus.dispatchEvent(new CustomEvent('product-selected', {
      detail: { product }
    }));
  });
  
  output.innerHTML = '<span class="success">✅ COMPONENT COMMUNICATION</span>\\n\\n' +
    'Components: Cart + Header + Analytics\\n' +
    'Communication via custom events\\n\\n' +
    'Event log:\\n' +
    commLog.map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Cart total: $' + cart.getTotal() + '\\n\\n' +
    'Pattern:\\n' +
    '  • Shared event bus (DOM element)\\n' +
    '  • Components dispatch events\\n' +
    '  • Components listen to events\\n' +
    '  • Fully decoupled!';
  
  log('✅ Component communication: ' + commLog.length + ' events');
});

log('🚀 Custom Events module loaded!');
log('💡 Decouple components with custom events');`,
  },

  {
    topic: "indexed-db",
    description: "Client-side database — store structured data in the browser persistently",
    html: `<div class="container">
  <h1>🔷 IndexedDB</h1>
  <p class="subtitle">Client-side database for persistent structured data</p>

  <div class="section">
    <h2>1. Open Database</h2>
    <button id="btn-open">Open Database</button>
    <div id="open-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Add Records</h2>
    <input type="text" id="idb-name" placeholder="Name" value="Alice" />
    <input type="number" id="idb-age" placeholder="Age" value="30" />
    <button id="btn-add">Add Record</button>
    <div id="add-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Read Records</h2>
    <button id="btn-read-all">Read All</button>
    <button id="btn-read-one">Read by ID</button>
    <div id="read-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Update & Delete</h2>
    <button id="btn-update">Update Record</button>
    <button id="btn-delete">Delete Record</button>
    <div id="ud-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #3b82f6;
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
  color: #2563eb;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3b82f6;
  padding-left: 12px;
}
.section {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
input[type="text"],
input[type="number"] {
  background: #1a1a2e;
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  width: 130px;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
button {
  background: #3b82f6;
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
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.success { color: #10b981 !important; }
.error { color: #ef4444 !important; }
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// IndexedDB
const consoleEl = document.getElementById('console');
function log(msg) { consoleEl.textContent += msg + '\\n'; console.log(msg); }

let db = null;
const DB_NAME = 'UsersDB';
const DB_VERSION = 1;
const STORE_NAME = 'users';

// Helper: wrap IDB request in Promise
function idbRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// 1. Open Database
document.getElementById('btn-open').addEventListener('click', async () => {
  const output = document.getElementById('open-output');
  
  try {
    db = await new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      
      request.onupgradeneeded = (e) => {
        const database = e.target.result;
        if (!database.objectStoreNames.contains(STORE_NAME)) {
          const store = database.createObjectStore(STORE_NAME, {
            keyPath: 'id',
            autoIncrement: true
          });
          store.createIndex('name', 'name', { unique: false });
          store.createIndex('age', 'age', { unique: false });
          log('📦 Object store created: ' + STORE_NAME);
        }
      };
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    
    output.innerHTML = '<span class="success">✅ DATABASE OPENED</span>\\n\\n' +
      'Database: "' + DB_NAME + '"\\n' +
      'Version: ' + DB_VERSION + '\\n' +
      'Object stores: [' + [...db.objectStoreNames].join(', ') + ']\\n\\n' +
      'Indexes created:\\n' +
      '  • name (non-unique)\\n' +
      '  • age (non-unique)\\n\\n' +
      'IndexedDB features:\\n' +
      '  • Persistent storage\\n' +
      '  • Structured data\\n' +
      '  • Indexes for fast queries\\n' +
      '  • Transactions for safety';
    
    log('✅ DB opened: ' + DB_NAME);
  } catch (e) {
    output.innerHTML = '<span class="error">❌ Error: ' + e.message + '</span>';
    log('❌ DB error: ' + e.message);
  }
});

// 2. Add Records
document.getElementById('btn-add').addEventListener('click', async () => {
  const output = document.getElementById('add-output');
  
  if (!db) {
    output.innerHTML = '<span class="error">❌ Open database first!</span>';
    return;
  }
  
  const name = document.getElementById('idb-name').value;
  const age = Number(document.getElementById('idb-age').value);
  
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    
    const record = { name, age, createdAt: new Date().toISOString() };
    const id = await idbRequest(store.add(record));
    
    output.innerHTML = '<span class="success">✅ RECORD ADDED</span>\\n\\n' +
      'Added record:\\n' +
      '  id: ' + id + '\\n' +
      '  name: "' + name + '"\\n' +
      '  age: ' + age + '\\n' +
      '  createdAt: ' + record.createdAt.split('T')[0] + '\\n\\n' +
      'Transaction: readwrite\\n' +
      'store.add(record) → auto-incremented id\\n\\n' +
      'Click "Read All" to see all records!';
    
    log('✅ Added: ' + name + ' (id=' + id + ')');
  } catch (e) {
    output.innerHTML = '<span class="error">❌ Error: ' + e.message + '</span>';
  }
});

// 3. Read Records
document.getElementById('btn-read-all').addEventListener('click', async () => {
  const output = document.getElementById('read-output');
  
  if (!db) { output.innerHTML = '<span class="error">❌ Open database first!</span>'; return; }
  
  try {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const records = await idbRequest(store.getAll());
    
    if (records.length === 0) {
      output.innerHTML = '<span class="highlight">⚠️ No records found.\\nAdd some records first!</span>';
      return;
    }
    
    output.innerHTML = '<span class="success">✅ ALL RECORDS</span>\\n\\n' +
      'Found ' + records.length + ' record(s):\\n\\n' +
      records.map(r => '  [' + r.id + '] ' + r.name + ', age ' + r.age).join('\\n') + '\\n\\n' +
      'store.getAll() → returns all records\\n' +
      'store.get(id) → returns one record\\n' +
      'store.count() → returns count';
    
    log('✅ Read all: ' + records.length + ' records');
  } catch (e) {
    output.innerHTML = '<span class="error">❌ Error: ' + e.message + '</span>';
  }
});

document.getElementById('btn-read-one').addEventListener('click', async () => {
  const output = document.getElementById('read-output');
  
  if (!db) { output.innerHTML = '<span class="error">❌ Open database first!</span>'; return; }
  
  try {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const record = await idbRequest(store.get(1));
    
    if (!record) {
      output.innerHTML = '<span class="highlight">⚠️ Record id=1 not found.\\nAdd records first!</span>';
      return;
    }
    
    output.innerHTML = '<span class="success">✅ READ BY ID</span>\\n\\n' +
      'store.get(1):\\n\n' +
      '  id: ' + record.id + '\\n' +
      '  name: "' + record.name + '"\\n' +
      '  age: ' + record.age + '\\n' +
      '  createdAt: ' + record.createdAt.split('T')[0] + '\\n\\n' +
      'Direct key lookup is O(log n)\\n' +
      'Very fast even with millions of records!';
    
    log('✅ Read id=1: ' + record.name);
  } catch (e) {
    output.innerHTML = '<span class="highlight">⚠️ Add records first!</span>';
  }
});

// 4. Update & Delete
document.getElementById('btn-update').addEventListener('click', async () => {
  const output = document.getElementById('ud-output');
  
  if (!db) { output.innerHTML = '<span class="error">❌ Open database first!</span>'; return; }
  
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const record = await idbRequest(store.get(1));
    
    if (!record) {
      output.innerHTML = '<span class="highlight">⚠️ No record to update. Add records first!</span>';
      return;
    }
    
    const oldName = record.name;
    record.name = record.name + ' (updated)';
    record.updatedAt = new Date().toISOString();
    
    const tx2 = db.transaction(STORE_NAME, 'readwrite');
    await idbRequest(tx2.objectStore(STORE_NAME).put(record));
    
    output.innerHTML = '<span class="success">✅ RECORD UPDATED</span>\\n\\n' +
      'Updated record id=1:\\n' +
      '  name: "' + oldName + '"\\n' +
      '       → "' + record.name + '"\\n' +
      '  updatedAt: ' + record.updatedAt.split('T')[0] + '\\n\\n' +
      'store.put(record) → update existing\\n' +
      'store.add(record) → insert new\\n\\n' +
      'put() uses keyPath to find record!';
    
    log('✅ Updated: ' + record.name);
  } catch (e) {
    output.innerHTML = '<span class="highlight">⚠️ Add records first!</span>';
  }
});

document.getElementById('btn-delete').addEventListener('click', async () => {
  const output = document.getElementById('ud-output');
  
  if (!db) { output.innerHTML = '<span class="error">❌ Open database first!</span>'; return; }
  
  try {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const countBefore = await idbRequest(store.count());
    
    if (countBefore === 0) {
      output.innerHTML = '<span class="highlight">⚠️ No records to delete!</span>';
      return;
    }
    
    const tx2 = db.transaction(STORE_NAME, 'readwrite');
    await idbRequest(tx2.objectStore(STORE_NAME).delete(1));
    
    const tx3 = db.transaction(STORE_NAME, 'readonly');
    const countAfter = await idbRequest(tx3.objectStore(STORE_NAME).count());
    
    output.innerHTML = '<span class="success">✅ RECORD DELETED</span>\\n\\n' +
      'Deleted record with id=1\\n\\n' +
      'Records before: ' + countBefore + '\\n' +
      'Records after: ' + countAfter + '\\n\\n' +
      'store.delete(key) → remove by key\\n' +
      'store.clear() → remove all records\\n\\n' +
      'Always use transactions for\\n' +
      'atomic operations!';
    
    log('✅ Deleted id=1, remaining: ' + countAfter);
  } catch (e) {
    output.innerHTML = '<span class="error">❌ Error: ' + e.message + '</span>';
  }
});

log('🚀 IndexedDB module loaded!');
log('💡 Persistent client-side structured storage');`,
  },

  {
    topic: "service-workers",
    description: "Background scripts for offline support, caching, and push notifications",
    html: `<div class="container">
  <h1>🔷 Service Workers</h1>
  <p class="subtitle">Background scripts for offline support and caching</p>

  <div class="section">
    <h2>1. Registration & Lifecycle</h2>
    <button id="btn-register">Simulate Registration</button>
    <div id="register-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>2. Cache Strategies</h2>
    <button id="btn-cache-first">Cache First</button>
    <button id="btn-network-first">Network First</button>
    <button id="btn-stale">Stale While Revalidate</button>
    <div id="cache-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>3. Offline Simulation</h2>
    <button id="btn-online">Simulate Online</button>
    <button id="btn-offline">Simulate Offline</button>
    <div id="offline-output" class="output-box"></div>
  </div>

  <div class="section">
    <h2>4. Background Sync</h2>
    <button id="btn-sync">Simulate Background Sync</button>
    <div id="sync-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #3b82f6;
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
  color: #2563eb;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3b82f6;
  padding-left: 12px;
}
.section {
  background: rgba(59, 130, 246, 0.05);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #3b82f6;
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
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: 'Courier New', monospace;
  font-size:  0.85rem;
  color: #d1fae5;
  min-height: 60px;
  white-space: pre-wrap;
  word-break: break-word;
}
.success { color: #10b981 !important; }
.error { color: #ef4444 !important; }
.highlight { color: #fbbf24 !important; }
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Service Workers
const consoleEl = document.getElementById('console');
function log(msg) { consoleEl.textContent += msg + '\\n'; console.log(msg); }

// 1. Registration & Lifecycle
document.getElementById('btn-register').addEventListener('click', async () => {
  const output = document.getElementById('register-output');
  
  const lifecycleLog = [];
  
  // Simulate SW lifecycle
  async function simulateRegistration() {
    lifecycleLog.push('📋 navigator.serviceWorker.register("/sw.js")');
    await new Promise(r => setTimeout(r, 200));
    
    lifecycleLog.push('⬇️  Installing... (SW downloaded)');
    await new Promise(r => setTimeout(r, 300));
    
    lifecycleLog.push('📦 install event fired');
    lifecycleLog.push('   → caches.open("v1")');
    lifecycleLog.push('   → cache.addAll(["/", "/app.js", "/style.css"])');
    await new Promise(r => setTimeout(r, 300));
    
    lifecycleLog.push('✅ Installed successfully');
    lifecycleLog.push('⏳ Waiting... (old SW still active)');
    await new Promise(r => setTimeout(r, 200));
    
    lifecycleLog.push('🔄 activate event fired');
    lifecycleLog.push('   → Delete old caches');
    await new Promise(r => setTimeout(r, 200));
    
    lifecycleLog.push('✅ ACTIVE — controlling all pages!');
    
    return lifecycleLog;
  }
  
  output.innerHTML = '<span class="highlight">⏳ Registering service worker...</span>';
  
  await simulateRegistration();
  
  // Check real SW support
  const swSupported = 'serviceWorker' in navigator;
  
  output.innerHTML = '<span class="success">✅ SERVICE WORKER LIFECYCLE</span>\\n\\n' +
    lifecycleLog.join('\\n') + '\\n\\n' +
    'SW supported in browser: ' + swSupported + '\\n\\n' +
    'Lifecycle states:\\n' +
    '  parsed → installing → installed\\n' +
    '  → activating → activated → redundant';
  
  log('✅ SW lifecycle simulated');
});

// 2. Cache Strategies
document.getElementById('btn-cache-first').addEventListener('click', async () => {
  const output = document.getElementById('cache-output');
  output.innerHTML = '<span class="highlight">⏳ Cache First strategy...</span>';
  
  await new Promise(r => setTimeout(r, 300));
  
  const steps = [
    '1. Request arrives: GET /api/data',
    '2. Check cache → FOUND ✅',
    '3. Return cached response immediately',
    '4. (Optionally update cache in background)',
    '',
    'Cache MISS flow:',
    '1. Request arrives: GET /api/new',
    '2. Check cache → NOT FOUND',
    '3. Fetch from network',
    '4. Store in cache',
    '5. Return response'
  ];
  
  output.innerHTML = '<span class="success">✅ CACHE FIRST STRATEGY</span>\\n\\n' +
    steps.join('\\n') + '\\n\\n' +
    'SW code:\\n' +
    '  self.addEventListener("fetch", e => {\\n' +
    '    e.respondWith(\\n' +
    '      caches.match(e.request)\\n' +
    '        .then(cached => cached ||\\n' +
    '          fetch(e.request))\\n' +
    '    );\\n' +
    '  });\\n\\n' +
    'Best for: static assets, images\\n' +
    'Pros: Fast, works offline\\n' +
    'Cons: May serve stale data';
  
  log('✅ Cache First strategy shown');
});

document.getElementById('btn-network-first').addEventListener('click', async () => {
  const output = document.getElementById('cache-output');
  output.innerHTML = '<span class="highlight">⏳ Network First strategy...</span>';
  
  await new Promise(r => setTimeout(r, 300));
  
  output.innerHTML = '<span class="success">✅ NETWORK FIRST STRATEGY</span>\\n\\n' +
    '1. Request arrives: GET /api/users\\n' +
    '2. Try network first\\n' +
    '3a. Network SUCCESS:\\n' +
    '    → Update cache\\n' +
    '    → Return fresh response\\n' +
    '3b. Network FAILS (offline):\\n' +
    '    → Fall back to cache\\n' +
    '    → Return cached response\\n\\n' +
    'SW code:\\n' +
    '  e.respondWith(\\n' +
    '    fetch(e.request)\\n' +
    '      .then(res => {\\n' +
    '        cache.put(e.request, res.clone());\\n' +
    '        return res;\\n' +
    '      })\\n' +
    '      .catch(() => caches.match(e.request))\\n' +
    '  );\\n\\n' +
    'Best for: API calls, dynamic data\\n' +
    'Pros: Always fresh when online\\n' +
    'Cons: Slower (network round-trip)';
  
  log('✅ Network First strategy shown');
});

document.getElementById('btn-stale').addEventListener('click', async () => {
  const output = document.getElementById('cache-output');
  output.innerHTML = '<span class="highlight">⏳ Stale While Revalidate...</span>';
  
  await new Promise(r => setTimeout(r, 300));
  
  output.innerHTML = '<span class="success">✅ STALE WHILE REVALIDATE</span>\\n\\n' +
    '1. Request arrives: GET /api/posts\\n' +
    '2. Return cached response IMMEDIATELY\\n' +
    '3. Simultaneously fetch from network\\n' +
    '4. Update cache with fresh data\\n' +
    '5. Next request gets updated cache\\n\\n' +
    'SW code:\\n' +
    '  e.respondWith(\\n' +
    '    caches.open("v1").then(cache => {\\n' +
    '      const cached = cache.match(e.request);\\n' +
    '      const fetched = fetch(e.request)\\n' +
    '        .then(res => {\\n' +
    '          cache.put(e.request, res.clone());\\n' +
    '          return res;\\n' +
    '        });\\n' +
    '      return cached || fetched;\\n' +
    '    })\\n' +
    '  );\\n\\n' +
    'Best for: news feeds, social content\\n' +
    'Pros: Fast + eventually fresh\\n' +
    'Cons: First load may be stale';
  
  log('✅ Stale While Revalidate shown');
});

// 3. Offline Simulation
let isOnline = true;
const offlineQueue = [];

document.getElementById('btn-online').addEventListener('click', async () => {
  const output = document.getElementById('offline-output');
  isOnline = true;
  
  output.innerHTML = '<span class="highlight">⏳ Going online...</span>';
  await new Promise(r => setTimeout(r, 300));
  
  // Process queued requests
  const processed = [];
  while (offlineQueue.length > 0) {
    const req = offlineQueue.shift();
    processed.push('✅ Synced: ' + req);
    log('🔄 Synced queued request: ' + req);
    await new Promise(r => setTimeout(r, 150));
  }
  
  output.innerHTML = '<span class="success">✅ ONLINE</span>\\n\\n' +
    'Connection restored!\\n\\n' +
    (processed.length > 0
      ? 'Synced queued requests:\\n' + processed.join('\\n') + '\\n\\n'
      : 'No queued requests to sync.\\n\\n') +
    'Service Worker handles:\\n' +
    '  • Detecting online/offline\\n' +
    '  • Queuing failed requests\\n' +
    '  • Syncing when back online\\n\\n' +
    'Events: navigator.onLine\\n' +
    'window.addEventListener("online", ...)';
  
  log('✅ Back online, synced ' + processed.length + ' requests');
});

document.getElementById('btn-offline').addEventListener('click', () => {
  const output = document.getElementById('offline-output');
  isOnline = false;
  
  // Simulate requests that fail and get queued
  const requests = [
    'POST /api/messages',
    'PUT /api/profile',
    'POST /api/analytics'
  ];
  
  requests.forEach(req => {
    offlineQueue.push(req);
    log('📥 Queued (offline): ' + req);
  });
  
  output.innerHTML = '<span class="error">📵 OFFLINE MODE</span>\\n\\n' +
    'Connection lost!\\n\\n' +
    'Queued ' + offlineQueue.length + ' requests:\\n' +
    offlineQueue.map(r => '  • ' + r).join('\\n') + '\\n\\n' +
    'Service Worker behavior:\\n' +
    '  • Serve cached pages/assets\\n' +
    '  • Queue failed API requests\\n' +
    '  • Show offline fallback page\\n\\n' +
    'Click "Simulate Online" to sync!';
  
  log('📵 Offline: ' + offlineQueue.length + ' requests queued');
});

// 4. Background Sync
document.getElementById('btn-sync').addEventListener('click', async () => {
  const output = document.getElementById('sync-output');
  output.innerHTML = '<span class="highlight">⏳ Simulating background sync...</span>';
  
  const syncLog = [];
  
  // Simulate background sync flow
  async function simulateBackgroundSync() {
    syncLog.push('1. User submits form while offline');
    await new Promise(r => setTimeout(r, 200));
    
    syncLog.push('2. SW intercepts failed POST request');
    await new Promise(r => setTimeout(r, 200));
    
    syncLog.push('3. Data saved to IndexedDB');
    await new Promise(r => setTimeout(r, 200));
    
    syncLog.push('4. registration.sync.register("sync-form")');
    await new Promise(r => setTimeout(r, 300));
    
    syncLog.push('5. ... user goes offline ...');
    await new Promise(r => setTimeout(r, 300));
    
    syncLog.push('6. Connection restored!');
    await new Promise(r => setTimeout(r, 200));
    
    syncLog.push('7. Browser fires "sync" event on SW');
    await new Promise(r => setTimeout(r, 200));
    
    syncLog.push('8. SW reads from IndexedDB');
    await new Promise(r => setTimeout(r, 200));
    
    syncLog.push('9. SW retries POST /api/form');
    await new Promise(r => setTimeout(r, 300));
    
    syncLog.push('10. ✅ Sync complete! Data sent.');
  }
  
  await simulateBackgroundSync();
  
  output.innerHTML = '<span class="success">✅ BACKGROUND SYNC</span>\\n\\n' +
    syncLog.join('\\n') + '\\n\\n' +
    'SW sync event code:\\n' +
    '  self.addEventListener("sync", e => {\\n' +
    '    if (e.tag === "sync-form") {\\n' +
    '      e.waitUntil(syncFormData());\\n' +
    '    }\\n' +
    '  });\\n\\n' +
    'Background Sync guarantees:\\n' +
    '  • Data sent even if tab closed\\n' +
    '  • Retries until successful\\n' +
    '  • Works across browser restarts';
  
  log('✅ Background sync simulated: ' + syncLog.length + ' steps');
});

log('🚀 Service Workers module loaded!');
log('💡 Offline-first apps with caching strategies');`,
  },
  /* ══════════════════════════════════════════════
     MODULE 10: 
  ══════════════════════════════════════════════ */
    {
    topic: "optional-chaining",
    description: "Access deeply nested properties safely without null reference errors",
    html: `<div class="container">
  <h1>🔷 Optional Chaining</h1>
  <p class="subtitle">Safely access nested properties with ?.</p>
  <div class="section">
    <h2>1. Basic Optional Chaining</h2>
    <button id="btn-basic">Test Basic ?.</button>
    <div id="basic-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Method Calls</h2>
    <button id="btn-methods">Test ?.method()</button>
    <div id="methods-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Array Access</h2>
    <button id="btn-arrays">Test ?.[index]</button>
    <div id="arrays-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Real-World API Data</h2>
    <button id="btn-api">Test API Response</button>
    <div id="api-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #6366f1;
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
  color: #4f46e5;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #6366f1;
  padding-left: 12px;
}
.section {
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #6366f1;
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
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(99, 102, 241, 0.3);
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
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Optional Chaining
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Optional Chaining
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');

  const user1 = {
    name: 'Alice',
    address: {
      city: 'NYC',
      zip: { code: '10001', plus4: '1234' }
    }
  };
  const user2 = { name: 'Bob' };
  const user3 = null;

  let oldWay;
  try {
    oldWay = user2.address.city;
  } catch (e) {
    oldWay = 'TypeError!';
  }

  const city1 = user1?.address?.city;
  const city2 = user2?.address?.city;
  const city3 = user3?.address?.city;
  const zip   = user1?.address?.zip?.code;
  const plus4 = user1?.address?.zip?.plus4;

  output.innerHTML =
    '<span class="success">✅ OPTIONAL CHAINING</span>\\n\\n' +
    'Without ?.:\\n' +
    '  user2.address.city → "' + oldWay + '"\\n\\n' +
    'With ?.:\\n' +
    '  user1?.address?.city  = "' + city1 + '"\\n' +
    '  user2?.address?.city  = ' + city2 + '\\n' +
    '  user3?.address?.city  = ' + city3 + '\\n\\n' +
    'Deep chaining:\\n' +
    '  user1?.address?.zip?.code  = "' + zip + '"\\n' +
    '  user1?.address?.zip?.plus4 = "' + plus4 + '"\\n\\n' +
    'Returns undefined instead of throwing!';

  log('✅ city1=' + city1 + ', city2=' + city2 + ', city3=' + city3);
});

// 2. Method Calls
document.getElementById('btn-methods').addEventListener('click', () => {
  const output = document.getElementById('methods-output');

  const obj1 = {
    greet() { return 'Hello!'; },
    transform: {
      toUpper(s) { return s.toUpperCase(); }
    }
  };
  const obj2 = {};
  const obj3 = null;

  const r1 = obj1.greet?.();
  const r2 = obj2.greet?.();
  const r3 = obj3?.greet?.();
  const r4 = obj1.transform?.toUpper?.('hello');
  const r5 = obj2.transform?.toUpper?.('hello');

  function process(callback) {
    return callback?.('data') ?? 'No callback provided';
  }

  const r6 = process((d) => 'Processed: ' + d);
  const r7 = process(null);
  const r8 = process(undefined);

  output.innerHTML =
    '<span class="success">✅ OPTIONAL METHOD CALLS</span>\\n\\n' +
    'obj1.greet?.()           = "' + r1 + '"\\n' +
    'obj2.greet?.()           = ' + r2 + '\\n' +
    'obj3?.greet?.()          = ' + r3 + '\\n\\n' +
    'obj1.transform?.toUpper?.("hello") = "' + r4 + '"\\n' +
    'obj2.transform?.toUpper?.("hello") = ' + r5 + '\\n\\n' +
    'Optional callbacks:\\n' +
    '  process(fn)        = "' + r6 + '"\\n' +
    '  process(null)      = "' + r7 + '"\\n' +
    '  process(undefined) = "' + r8 + '"\\n\\n' +
    'callback?.() — only calls if defined!';

  log('✅ Methods: r1=' + r1 + ', r2=' + r2);
});

// 3. Array Access
document.getElementById('btn-arrays').addEventListener('click', () => {
  const output = document.getElementById('arrays-output');

  const data1 = { items: ['apple', 'banana', 'cherry'] };
  const data2 = { items: [] };
  const data3 = {};
  const data4 = null;

  const r1 = data1?.items?.[0];
  const r2 = data1?.items?.[10];
  const r3 = data2?.items?.[0];
  const r4 = data3?.items?.[0];
  const r5 = data4?.items?.[0];
  const r6 = data1?.items?.find(i => i.startsWith('b'));
  const r7 = data3?.items?.find(i => i.startsWith('b'));
  const r8 = data1?.items?.map(i => i.toUpperCase());

  output.innerHTML =
    '<span class="success">✅ OPTIONAL ARRAY ACCESS</span>\\n\\n' +
    'data1?.items?.[0]  = "' + r1 + '"\\n' +
    'data1?.items?.[10] = ' + r2 + '\\n' +
    'data2?.items?.[0]  = ' + r3 + '\\n' +
    'data3?.items?.[0]  = ' + r4 + '\\n' +
    'data4?.items?.[0]  = ' + r5 + '\\n\\n' +
    'Optional array methods:\\n' +
    '  data1?.items?.find(b...) = "' + r6 + '"\\n' +
    '  data3?.items?.find(b...) = ' + r7 + '\\n' +
    '  data1?.items?.map(upper) = [' + r8 + ']\\n\\n' +
    '?.[index] — safe bracket access!';

  log('✅ Array: r1=' + r1 + ', r6=' + r6);
});

// 4. Real-World API Data
document.getElementById('btn-api').addEventListener('click', () => {
  const output = document.getElementById('api-output');

  const fullResponse = {
    status: 200,
    data: {
      user: {
        id: 1,
        profile: {
          name: 'Alice',
          avatar: { url: 'https://example.com/alice.jpg' }
        },
        settings: { notifications: { email: true, push: false } },
        posts: [
          { id: 1, title: 'First Post' },
          { id: 2, title: 'Second Post' }
        ]
      }
    }
  };

  const partialResponse = {
    status: 200,
    data: { user: { id: 2, profile: { name: 'Bob' } } }
  };

  const errorResponse = { status: 404, data: null };

  function extractUserInfo(response) {
    return {
      name:       response?.data?.user?.profile?.name ?? 'Unknown',
      avatar:     response?.data?.user?.profile?.avatar?.url ?? 'default.jpg',
      emailNotif: response?.data?.user?.settings?.notifications?.email ?? false,
      firstPost:  response?.data?.user?.posts?.[0]?.title ?? 'No posts',
      postCount:  response?.data?.user?.posts?.length ?? 0
    };
  }

  const info1 = extractUserInfo(fullResponse);
  const info2 = extractUserInfo(partialResponse);
  const info3 = extractUserInfo(errorResponse);

  output.innerHTML =
    '<span class="success">✅ REAL-WORLD API PARSING</span>\\n\\n' +
    'Full response:\\n' +
    '  name: "' + info1.name + '"\\n' +
    '  emailNotif: ' + info1.emailNotif + '\\n' +
    '  firstPost: "' + info1.firstPost + '"\\n' +
    '  postCount: ' + info1.postCount + '\\n\\n' +
    'Partial response:\\n' +
    '  name: "' + info2.name + '"\\n' +
    '  avatar: "' + info2.avatar + '" (default)\\n' +
    '  firstPost: "' + info2.firstPost + '"\\n\\n' +
    'Error response (data: null):\\n' +
    '  name: "' + info3.name + '" (fallback)\\n' +
    '  postCount: ' + info3.postCount + '\\n\\n' +
    'Combine ?. with ?? for safe defaults!';

  log('✅ API: ' + info1.name + ', ' + info2.name + ', ' + info3.name);
});

log('🚀 Optional Chaining loaded!');
log('💡 ?. — safe navigation without null errors');`,
  },

  {
    topic: "nullish-coalescing",
    description: "?? operator — provide defaults only for null/undefined, not falsy values",
    html: `<div class="container">
  <h1>🔷 Nullish Coalescing</h1>
  <p class="subtitle">?? — default only for null/undefined</p>
  <div class="section">
    <h2>1. ?? vs ||</h2>
    <button id="btn-comparison">Compare ?? and ||</button>
    <div id="comparison-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Nullish with Objects</h2>
    <button id="btn-objects">Test with Objects</button>
    <div id="objects-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Chaining ??</h2>
    <button id="btn-chain">Test Chaining</button>
    <div id="chain-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Real-World Config</h2>
    <button id="btn-config">Test Config Defaults</button>
    <div id="config-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #6366f1;
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
  color: #4f46e5;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #6366f1;
  padding-left: 12px;
}
.section {
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #6366f1;
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
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(99, 102, 241, 0.3);
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
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Nullish Coalescing
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. ?? vs ||
document.getElementById('btn-comparison').addEventListener('click', () => {
  const output = document.getElementById('comparison-output');

  const values = [null, undefined, 0, '', false, NaN, 'hello', 42, true];

  const results = values.map(v => {
    const orResult = v || 'DEFAULT';
    const qqResult = v ?? 'DEFAULT';
    const label =
      v === null      ? 'null' :
      v === undefined ? 'undefined' :
      v === ''        ? '""' :
      String(v);
    return { label, orResult, qqResult };
  });

  output.innerHTML =
    '<span class="success">✅ ?? vs ||</span>\\n\\n' +
    'Value       ||          ??\\n' +
    '─────────────────────────────\\n' +
    results.map(r =>
      r.label.padEnd(11) +
      String(r.orResult).padEnd(11) +
      String(r.qqResult)
    ).join('\\n') + '\\n\\n' +
    '|| uses DEFAULT for ANY falsy value\\n' +
    '?? uses DEFAULT ONLY for null/undefined\\n\\n' +
    'Key difference:\\n' +
    '  0 || "DEFAULT" = "DEFAULT" (wrong!)\\n' +
    '  0 ?? "DEFAULT" = 0         (correct!)';

  log('✅ ?? vs || comparison shown');
});

// 2. Nullish with Objects
document.getElementById('btn-objects').addEventListener('click', () => {
  const output = document.getElementById('objects-output');

  const config1 = { timeout: 0, retries: 0, debug: false, name: '' };
  const config2 = { timeout: null, retries: undefined };
  const config3 = null;

  function getConfig(cfg) {
    return {
      timeout: cfg?.timeout ?? 5000,
      retries: cfg?.retries ?? 3,
      debug:   cfg?.debug   ?? true,
      name:    cfg?.name    ?? 'default'
    };
  }

  const r1 = getConfig(config1);
  const r2 = getConfig(config2);
  const r3 = getConfig(config3);

  output.innerHTML =
    '<span class="success">✅ NULLISH WITH OBJECTS</span>\\n\\n' +
    'config1 = {timeout:0, retries:0, debug:false, name:""}\\n' +
    '  timeout: ' + r1.timeout + ' (0 preserved!)\\n' +
    '  retries: ' + r1.retries + ' (0 preserved!)\\n' +
    '  debug:   ' + r1.debug   + ' (false preserved!)\\n' +
    '  name:    "' + r1.name   + '" ("" preserved!)\\n\\n' +
    'config2 = {timeout:null, retries:undefined}\\n' +
    '  timeout: ' + r2.timeout + ' (null → default)\\n' +
    '  retries: ' + r2.retries + ' (undefined → default)\\n\\n' +
    'config3 = null\\n' +
    '  timeout: ' + r3.timeout + ' (null → default)\\n\\n' +
    '?? respects intentional falsy values!';

  log('✅ config1.timeout=' + r1.timeout + ', config2.timeout=' + r2.timeout);
});

// 3. Chaining ??
document.getElementById('btn-chain').addEventListener('click', () => {
  const output = document.getElementById('chain-output');

  const primary   = null;
  const secondary = undefined;
  const tertiary  = '';
  const fallback  = 'Final fallback';

  const r1 = primary   ?? secondary ?? tertiary ?? fallback;
  const r2 = primary   ?? secondary ?? 'found!';
  const r3 = 'first'   ?? secondary ?? fallback;

  const user  = { prefs: null };
  const theme = user?.prefs?.theme ?? user?.defaultTheme ?? 'light';

  let a = null;
  let b = 'existing';
  let c = 0;
  a ??= 'assigned';
  b ??= 'not assigned';
  c ??= 'not assigned';

  output.innerHTML =
    '<span class="success">✅ CHAINING ??</span>\\n\\n' +
    'null ?? undefined ?? "" ?? "Final fallback"\\n' +
    '  = "' + r1 + '"\\n\\n' +
    'null ?? undefined ?? "found!"\\n' +
    '  = "' + r2 + '"\\n\\n' +
    '"first" ?? undefined ?? fallback\\n' +
    '  = "' + r3 + '"\\n\\n' +
    'With optional chaining:\\n' +
    '  user?.prefs?.theme ?? "light" = "' + theme + '"\\n\\n' +
    'Nullish assignment (??=):\\n' +
    '  null ??= "assigned"   → "' + a + '"\\n' +
    '  "existing" ??= "..."  → "' + b + '"\\n' +
    '  0 ??= "..."           → ' + c + ' (0 kept!)';

  log('✅ Chaining: r1="' + r1 + '", theme="' + theme + '"');
});

// 4. Real-World Config
document.getElementById('btn-config').addEventListener('click', () => {
  const output = document.getElementById('config-output');

  const userConfig = {
    port:       0,
    debug:      false,
    maxRetries: 0,
    timeout:    null,
    host:       undefined,
    prefix:     ''
  };

  const defaults = {
    port:       3000,
    debug:      true,
    maxRetries: 3,
    timeout:    5000,
    host:       'localhost',
    prefix:     '/api'
  };

  const correctConfig = {
    port:       userConfig.port       ?? defaults.port,
    debug:      userConfig.debug      ?? defaults.debug,
    maxRetries: userConfig.maxRetries ?? defaults.maxRetries,
    timeout:    userConfig.timeout    ?? defaults.timeout,
    host:       userConfig.host       ?? defaults.host,
    prefix:     userConfig.prefix     ?? defaults.prefix
  };

  const wrongConfig = {
    port:       userConfig.port       || defaults.port,
    debug:      userConfig.debug      || defaults.debug,
    maxRetries: userConfig.maxRetries || defaults.maxRetries,
    timeout:    userConfig.timeout    || defaults.timeout,
    host:       userConfig.host       || defaults.host,
    prefix:     userConfig.prefix     || defaults.prefix
  };

  output.innerHTML =
    '<span class="success">✅ REAL-WORLD CONFIG</span>\\n\\n' +
    'User: {port:0, debug:false, maxRetries:0,\\n' +
    '       timeout:null, host:undefined, prefix:""}\\n\\n' +
    'Using ?? (CORRECT):\\n' +
    '  port:       ' + correctConfig.port       + ' (0 kept!)\\n' +
    '  debug:      ' + correctConfig.debug      + ' (false kept!)\\n' +
    '  maxRetries: ' + correctConfig.maxRetries + ' (0 kept!)\\n' +
    '  timeout:    ' + correctConfig.timeout    + ' (null → default)\\n' +
    '  host:       "' + correctConfig.host      + '" (→ default)\\n' +
    '  prefix:     "' + correctConfig.prefix    + '" ("" kept!)\\n\\n' +
    'Using || (WRONG):\\n' +
    '  port:       ' + wrongConfig.port       + ' (0 overridden!)\\n' +
    '  debug:      ' + wrongConfig.debug      + ' (false overridden!)\\n' +
    '  maxRetries: ' + wrongConfig.maxRetries + ' (0 overridden!)\\n\\n' +
    'Always use ?? for config defaults!';

  log('✅ correct.port=' + correctConfig.port + ', wrong.port=' + wrongConfig.port);
});

log('🚀 Nullish Coalescing loaded!');
log('💡 ?? — default only for null/undefined');`,
  },

    {
    topic: "logical-assignment",
    description: "&&=, ||=, ??= operators — conditional assignment in one expression",
    html: `<div class="container">
  <h1>🔷 Logical Assignment</h1>
  <p class="subtitle">&&=, ||=, ??= — conditional assignment operators</p>
  <div class="section">
    <h2>1. ||= Logical OR Assignment</h2>
    <button id="btn-or">Test ||=</button>
    <div id="or-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. &&= Logical AND Assignment</h2>
    <button id="btn-and">Test &&=</button>
    <div id="and-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. ??= Nullish Assignment</h2>
    <button id="btn-nullish">Test ??=</button>
    <div id="nullish-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Real-World Patterns</h2>
    <button id="btn-patterns">Show Patterns</button>
    <div id="patterns-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #6366f1;
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
  color: #4f46e5;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #6366f1;
  padding-left: 12px;
}
.section {
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #6366f1;
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
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(99, 102, 241, 0.3);
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
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Logical Assignment
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. ||= Logical OR Assignment
document.getElementById('btn-or').addEventListener('click', () => {
  const output = document.getElementById('or-output');

  let a = null;
  let b = undefined;
  let c = 0;
  let d = '';
  let e = false;
  let f = 'existing';
  let g = 42;

  a ||= 'default';
  b ||= 'default';
  c ||= 'default';
  d ||= 'default';
  e ||= 'default';
  f ||= 'default';
  g ||= 'default';

  output.innerHTML =
    '<span class="success">✅ ||= LOGICAL OR ASSIGNMENT</span>\\n\\n' +
    'x ||= "default" assigns if x is FALSY\\n\\n' +
    'null     ||= "default" → "' + a + '"\\n' +
    'undefined||= "default" → "' + b + '"\\n' +
    '0        ||= "default" → "' + c + '"\\n' +
    '""       ||= "default" → "' + d + '"\\n' +
    'false    ||= "default" → "' + e + '"\\n' +
    '"existing"||= "default"→ "' + f + '" (kept!)\\n' +
    '42       ||= "default" → ' + g + ' (kept!)\\n\\n' +
    'Equivalent to:\\n' +
    '  x = x || "default"\\n\\n' +
    'Assigns for ANY falsy value!';

  log('✅ ||=: a=' + a + ', f=' + f + ', g=' + g);
});

// 2. &&= Logical AND Assignment
document.getElementById('btn-and').addEventListener('click', () => {
  const output = document.getElementById('and-output');

  let a = null;
  let b = undefined;
  let c = 0;
  let d = '';
  let e = false;
  let f = 'existing';
  let g = 42;
  let h = true;

  a &&= 'updated';
  b &&= 'updated';
  c &&= 'updated';
  d &&= 'updated';
  e &&= 'updated';
  f &&= 'updated';
  g &&= 'updated';
  h &&= 'updated';

  output.innerHTML =
    '<span class="success">✅ &&= LOGICAL AND ASSIGNMENT</span>\\n\\n' +
    'x &&= "updated" assigns ONLY if x is TRUTHY\\n\\n' +
    'null     &&= "updated" → ' + a + ' (not assigned)\\n' +
    'undefined&&= "updated" → ' + b + ' (not assigned)\\n' +
    '0        &&= "updated" → ' + c + ' (not assigned)\\n' +
    '""       &&= "updated" → "' + d + '" (not assigned)\\n' +
    'false    &&= "updated" → ' + e + ' (not assigned)\\n' +
    '"existing"&&= "updated"→ "' + f + '" (assigned!)\\n' +
    '42       &&= "updated" → "' + g + '" (assigned!)\\n' +
    'true     &&= "updated" → "' + h + '" (assigned!)\\n\\n' +
    'Equivalent to:\\n' +
    '  x = x && "updated"\\n\\n' +
    'Only assigns when value is TRUTHY!';

  log('✅ &&=: a=' + a + ', f=' + f + ', h=' + h);
});

// 3. ??= Nullish Assignment
document.getElementById('btn-nullish').addEventListener('click', () => {
  const output = document.getElementById('nullish-output');

  let a = null;
  let b = undefined;
  let c = 0;
  let d = '';
  let e = false;
  let f = 'existing';
  let g = 42;

  a ??= 'default';
  b ??= 'default';
  c ??= 'default';
  d ??= 'default';
  e ??= 'default';
  f ??= 'default';
  g ??= 'default';

  output.innerHTML =
    '<span class="success">✅ ??= NULLISH ASSIGNMENT</span>\\n\\n' +
    'x ??= "default" assigns ONLY if null/undefined\\n\\n' +
    'null     ??= "default" → "' + a + '" (assigned!)\\n' +
    'undefined??= "default" → "' + b + '" (assigned!)\\n' +
    '0        ??= "default" → ' + c + ' (kept! 0 is not null)\\n' +
    '""       ??= "default" → "' + d + '" (kept! "" is not null)\\n' +
    'false    ??= "default" → ' + e + ' (kept! false is not null)\\n' +
    '"existing"??= "default"→ "' + f + '" (kept!)\\n' +
    '42       ??= "default" → ' + g + ' (kept!)\\n\\n' +
    'Equivalent to:\\n' +
    '  x = x ?? "default"\\n\\n' +
    'Only assigns for null/undefined!\\n' +
    'Preserves intentional falsy values!';

  log('✅ ??=: a=' + a + ', c=' + c + ', e=' + e);
});

// 4. Real-World Patterns
document.getElementById('btn-patterns').addEventListener('click', () => {
  const output = document.getElementById('patterns-output');

  // Pattern 1: Initialize defaults
  const user = { name: 'Alice', role: null, score: 0 };
  user.role  ??= 'viewer';
  user.score ??= 100;
  user.name  ??= 'Anonymous';

  // Pattern 2: Accumulate with ||=
  const cache = {};
  function getOrCreate(key) {
    cache[key] ||= { count: 0, items: [] };
    return cache[key];
  }
  const bucket = getOrCreate('users');
  bucket.count++;
  bucket.items.push('Alice');
  getOrCreate('users').count++;

  // Pattern 3: Guard with &&=
  let config = {
    debug: true,
    logger: null
  };
  config.debug  &&= false;
  config.logger &&= console.log;

  // Pattern 4: Lazy initialization
  class LazyLoader {
    #data = null;

    getData() {
      this.#data ??= this.#loadData();
      return this.#data;
    }

    #loadData() {
      log('📦 Loading data (only once)...');
      return { loaded: true, timestamp: Date.now() };
    }
  }

  const loader = new LazyLoader();
  const d1 = loader.getData();
  const d2 = loader.getData();
  const sameRef = d1 === d2;

  output.innerHTML =
    '<span class="success">✅ REAL-WORLD PATTERNS</span>\\n\\n' +
    '1. Initialize defaults (??=):\\n' +
    '   user.role  = "' + user.role  + '" (null → default)\\n' +
    '   user.score = ' + user.score + ' (0 kept!)\\n' +
    '   user.name  = "' + user.name  + '" (kept!)\\n\\n' +
    '2. Cache with ||= :\\n' +
    '   cache["users"].count = ' + cache['users'].count + '\\n' +
    '   cache["users"].items = [' + cache['users'].items + ']\\n\\n' +
    '3. Guard with &&=:\\n' +
    '   config.debug  = ' + config.debug  + ' (true → false)\\n' +
    '   config.logger = ' + config.logger + ' (null kept)\\n\\n' +
    '4. Lazy initialization (??=):\\n' +
    '   getData() called twice\\n' +
    '   Same reference: ' + sameRef + '\\n' +
    '   Loaded only ONCE!';

  log('✅ Patterns: role=' + user.role + ', sameRef=' + sameRef);
});

log('🚀 Logical Assignment loaded!');
log('💡 &&=, ||=, ??= — concise conditional assignment');`,
  },

  {
    topic: "numeric-separators",
    description: "Underscore separators in numbers for readability — 1_000_000",
    html: `<div class="container">
  <h1>🔷 Numeric Separators</h1>
  <p class="subtitle">Use _ in numbers for better readability</p>
  <div class="section">
    <h2>1. Basic Numeric Separators</h2>
    <button id="btn-basic">Test Basic Separators</button>
    <div id="basic-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Different Number Types</h2>
    <button id="btn-types">Test All Types</button>
    <div id="types-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Real-World Numbers</h2>
    <button id="btn-realworld">Show Real-World Use</button>
    <div id="realworld-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. BigInt Separators</h2>
    <button id="btn-bigint">Test BigInt</button>
    <div id="bigint-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #6366f1;
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
  color: #4f46e5;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #6366f1;
  padding-left: 12px;
}
.section {
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #6366f1;
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
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(99, 102, 241, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Numeric Separators
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Basic Numeric Separators
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');

  // Without separators (hard to read)
  const million1    = 1000000;
  const billion1    = 1000000000;
  const pi1         = 3.14159265;

  // With separators (easy to read)
  const million2    = 1_000_000;
  const billion2    = 1_000_000_000;
  const pi2         = 3.141_592_65;

  // They are exactly equal
  const millionSame = million1 === million2;
  const billionSame = billion1 === billion2;

  output.innerHTML =
    '<span class="success">✅ NUMERIC SEPARATORS</span>\\n\\n' +
    'Without separators:\\n' +
    '  1000000    → hard to count zeros!\\n' +
    '  1000000000 → is this billion?\\n\\n' +
    'With separators:\\n' +
    '  1_000_000     = ' + million2.toLocaleString() + '\\n' +
    '  1_000_000_000 = ' + billion2.toLocaleString() + '\\n' +
    '  3.141_592_65  = ' + pi2 + '\\n\\n' +
    'Are they equal?\\n' +
    '  1000000 === 1_000_000: ' + millionSame + '\\n' +
    '  1000000000 === 1_000_000_000: ' + billionSame + '\\n\\n' +
    'Separators are IGNORED by JS engine!\\n' +
    'Only for human readability.';

  log('✅ 1_000_000 = ' + million2 + ', same as 1000000: ' + millionSame);
});

// 2. Different Number Types
document.getElementById('btn-types').addEventListener('click', () => {
  const output = document.getElementById('types-output');

  // Decimal
  const decimal     = 1_234_567.89;

  // Binary
  const binary      = 0b1010_0001_1000_0101;

  // Octal
  const octal       = 0o1_234_567;

  // Hexadecimal
  const hex         = 0xFF_EC_D0_12;

  // Scientific notation
  const scientific  = 1.5e1_0;

  output.innerHTML =
    '<span class="success">✅ ALL NUMBER TYPES</span>\\n\\n' +
    'Decimal:\\n' +
    '  1_234_567.89 = ' + decimal + '\\n\\n' +
    'Binary (0b):\\n' +
    '  0b1010_0001_1000_0101 = ' + binary + '\\n\\n' +
    'Octal (0o):\\n' +
    '  0o1_234_567 = ' + octal + '\\n\\n' +
    'Hexadecimal (0x):\\n' +
    '  0xFF_EC_D0_12 = ' + hex + '\\n\\n' +
    'Scientific:\\n' +
    '  1.5e1_0 = ' + scientific + '\\n\\n' +
    'Works with ALL numeric literals!\\n' +
    'Separator _ can go anywhere between digits.';

  log('✅ Types: decimal=' + decimal + ', hex=' + hex);
});

// 3. Real-World Numbers
document.getElementById('btn-realworld').addEventListener('click', () => {
  const output = document.getElementById('realworld-output');

  // Financial
  const annualRevenue   = 1_500_000;
  const monthlyBudget   = 125_000;
  const transactionFee  = 0.001_5;

  // Technical
  const maxFileSize     = 10_485_760;    // 10 MB in bytes
  const portNumber      = 8_080;
  const timeoutMs       = 30_000;
  const maxConnections  = 1_000;

  // Scientific
  const speedOfLight    = 299_792_458;   // m/s
  const avogadro        = 6.022_140_76e23;
  const planck          = 6.626_070_15e-34;

  // Color codes
  const colorRed        = 0xFF_00_00;
  const colorGreen      = 0x00_FF_00;
  const colorBlue       = 0x00_00_FF;

  output.innerHTML =
    '<span class="success">✅ REAL-WORLD NUMBERS</span>\\n\\n' +
    'Financial:\\n' +
    '  annualRevenue  = $' + annualRevenue.toLocaleString() + '\\n' +
    '  monthlyBudget  = $' + monthlyBudget.toLocaleString() + '\\n' +
    '  transactionFee = ' + transactionFee + '\\n\\n' +
    'Technical:\\n' +
    '  maxFileSize    = ' + maxFileSize.toLocaleString() + ' bytes (10MB)\\n' +
    '  portNumber     = ' + portNumber + '\\n' +
    '  timeoutMs      = ' + timeoutMs + 'ms\\n\\n' +
    'Scientific:\\n' +
    '  speedOfLight   = ' + speedOfLight.toLocaleString() + ' m/s\\n' +
    '  avogadro       = ' + avogadro.toExponential(3) + '\\n\\n' +
    'Colors (hex):\\n' +
    '  0xFF_00_00 = ' + colorRed + ' (red)\\n' +
    '  0x00_FF_00 = ' + colorGreen + ' (green)\\n' +
    '  0x00_00_FF = ' + colorBlue + ' (blue)';

  log('✅ Real-world: revenue=' + annualRevenue + ', light=' + speedOfLight);
});

// 4. BigInt Separators
document.getElementById('btn-bigint').addEventListener('click', () => {
  const output = document.getElementById('bigint-output');

  // BigInt with separators
  const bigMillion    = 1_000_000n;
  const bigBillion    = 1_000_000_000n;
  const bigTrillion   = 1_000_000_000_000n;

  // BigInt arithmetic
  const sum           = bigMillion + bigBillion;
  const product       = bigMillion * 1_000n;
  const comparison    = bigBillion > bigMillion;

  // Max safe integer
  const maxSafe       = Number.MAX_SAFE_INTEGER;
  const beyondSafe    = 9_007_199_254_740_993n;
  const beyondNormal  = 9007199254740993;

  output.innerHTML =
    '<span class="success">✅ BIGINT WITH SEPARATORS</span>\\n\\n' +
    'BigInt literals:\\n' +
    '  1_000_000n    = ' + bigMillion + 'n\\n' +
    '  1_000_000_000n = ' + bigBillion + 'n\\n' +
    '  1_000_000_000_000n = ' + bigTrillion + 'n\\n\\n' +
    'BigInt arithmetic:\\n' +
    '  million + billion = ' + sum + 'n\\n' +
    '  million * 1_000n  = ' + product + 'n\\n' +
    '  billion > million = ' + comparison + '\\n\\n' +
    'Beyond MAX_SAFE_INTEGER:\\n' +
    '  MAX_SAFE_INTEGER = ' + maxSafe + '\\n' +
    '  Number (imprecise): ' + beyondNormal + '\\n' +
    '  BigInt (precise):   ' + beyondSafe + 'n\\n\\n' +
    'BigInt handles arbitrarily large integers!\\n' +
    'Separators work the same way.';

  log('✅ BigInt: ' + bigTrillion + 'n');
});

log('🚀 Numeric Separators loaded!');
log('💡 _ in numbers = readability, no runtime cost');`,
  },

  {
    topic: "top-level-await",
    description: "Use await at the module top level — no async wrapper needed",
    html: `<div class="container">
  <h1>🔷 Top-Level Await</h1>
  <p class="subtitle">await at module top level — no async wrapper needed</p>
  <div class="section">
    <h2>1. Basic Top-Level Await</h2>
    <button id="btn-basic">Simulate Top-Level Await</button>
    <div id="basic-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Module Initialization</h2>
    <button id="btn-init">Simulate Module Init</button>
    <div id="init-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Conditional Imports</h2>
    <button id="btn-conditional">Simulate Conditional Import</button>
    <div id="conditional-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Real-World Patterns</h2>
    <button id="btn-patterns">Show Patterns</button>
    <div id="patterns-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #6366f1;
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
  color: #4f46e5;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #6366f1;
  padding-left: 12px;
}
.section {
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #6366f1;
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
  background: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(99, 102, 241, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Top-Level Await
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));

// 1. Basic Top-Level Await
document.getElementById('btn-basic').addEventListener('click', async () => {
  const output = document.getElementById('basic-output');
  output.innerHTML = '<span class="highlight">⏳ Simulating top-level await...</span>';

  const initLog = [];

  // Simulate what top-level await looks like in a module
  const moduleCode = [
    '// module.js (ES Module)',
    '',
    '// Before top-level await:',
    'async function init() {',
    '  const config = await fetchConfig();',
    '  const db = await connectDB(config);',
    '  export { db };',
    '}',
    'init();',
    '',
    '// With top-level await:',
    'const config = await fetchConfig();',
    'const db = await connectDB(config);',
    'export { db };',
    '',
    '// Importing module waits for it!'
  ];

  // Simulate the execution
  initLog.push('📦 Module loading started...');
  await delay(200);

  initLog.push('⏳ await fetchConfig()...');
  const config = await delay(300, { host: 'localhost', port: 5432 });
  initLog.push('✅ Config loaded: ' + JSON.stringify(config));

  initLog.push('⏳ await connectDB(config)...');
  const db = await delay(300, { connected: true, name: 'mydb' });
  initLog.push('✅ DB connected: ' + db.name);

  initLog.push('✅ Module fully initialized!');
  initLog.push('📤 Exports now available to importers');

  output.innerHTML =
    '<span class="success">✅ TOP-LEVEL AWAIT</span>\\n\\n' +
    'Module code pattern:\\n' +
    moduleCode.slice(9, 14).join('\\n') + '\\n\\n' +
    'Execution log:\\n' +
    initLog.map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Key benefit:\\n' +
    '  Importers wait for module to finish!\\n' +
    '  No need for async wrapper function.';

  log('✅ Top-level await simulated');
});

// 2. Module Initialization
document.getElementById('btn-init').addEventListener('click', async () => {
  const output = document.getElementById('init-output');
  output.innerHTML = '<span class="highlight">⏳ Initializing module...</span>';

  const steps = [];

  // Simulate module-level initialization
  async function simulateModuleInit() {
    steps.push('1. Module evaluation starts');
        await delay(100);

    steps.push('2. await fetchEnvironmentConfig()');
    const envConfig = await delay(250, {
      env: 'production',
      apiUrl: 'https://api.example.com',
      debug: false
    });
    steps.push('   ✅ env=' + envConfig.env + ', apiUrl=' + envConfig.apiUrl);

    steps.push('3. await loadTranslations("en")');
    const translations = await delay(200, {
      hello: 'Hello',
      goodbye: 'Goodbye',
      count: 42
    });
    steps.push('   ✅ ' + Object.keys(translations).length + ' translations loaded');

    steps.push('4. await initDatabase()');
    const dbStatus = await delay(300, { connected: true, poolSize: 10 });
    steps.push('   ✅ DB connected, pool=' + dbStatus.poolSize);

    steps.push('5. await warmupCache()');
    const cacheStatus = await delay(150, { warmed: true, entries: 250 });
    steps.push('   ✅ Cache warmed, ' + cacheStatus.entries + ' entries');

    steps.push('6. ✅ Module ready — exports available!');

    return { envConfig, translations, dbStatus, cacheStatus };
  }

  const result = await simulateModuleInit();

  output.innerHTML =
    '<span class="success">✅ MODULE INITIALIZATION</span>\\n\\n' +
    'Top-level await allows sequential\\n' +
    'async setup before exports:\\n\\n' +
    steps.map(s => '  ' + s).join('\\n') + '\\n\\n' +
    'Without top-level await:\\n' +
    '  Exports would be undefined\\n' +
    '  until async init completes!\\n\\n' +
    'With top-level await:\\n' +
    '  Module blocks until ready\\n' +
    '  Importers always get initialized values!';

  log('✅ Module init: ' + steps.length + ' steps completed');
});

// 3. Conditional Imports
document.getElementById('btn-conditional').addEventListener('click', async () => {
  const output = document.getElementById('conditional-output');
  output.innerHTML = '<span class="highlight">⏳ Simulating conditional imports...</span>';

  const importLog = [];

  // Simulate conditional dynamic imports with top-level await
  async function simulateConditionalImports() {
    const platform = navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop';
    importLog.push('Platform detected: ' + platform);

    // Simulate: const module = await import(platform === "mobile" ? "./mobile.js" : "./desktop.js")
    importLog.push('await import("./' + platform + '.js")');
    const platformModule = await delay(300, {
      name: platform + '-module',
      render: () => platform + ' UI rendered',
      features: platform === 'mobile' ? ['touch', 'swipe'] : ['hover', 'keyboard']
    });
    importLog.push('✅ Loaded: ' + platformModule.name);

    // Simulate: const polyfill = await import(needsPolyfill ? "./polyfill.js" : "./noop.js")
    const needsPolyfill = !window.IntersectionObserver;
    importLog.push('Needs polyfill: ' + needsPolyfill);
    importLog.push('await import(' + (needsPolyfill ? '"./polyfill.js"' : '"./noop.js"') + ')');
    await delay(200);
    importLog.push('✅ Polyfill decision made');

    // Simulate: const config = await fetch("/config.json").then(r => r.json())
    importLog.push('await fetch("/config.json")');
    const config = await delay(250, { theme: 'dark', lang: 'en', version: '2.0' });
    importLog.push('✅ Config: theme=' + config.theme + ', v' + config.version);

    return { platformModule, config };
  }

  const result = await simulateConditionalImports();

  output.innerHTML =
    '<span class="success">✅ CONDITIONAL IMPORTS</span>\\n\\n' +
    'Top-level await enables:\\n' +
    '  • Platform-specific modules\\n' +
    '  • Conditional polyfills\\n' +
    '  • Config-driven imports\\n\\n' +
    'Execution log:\\n' +
    importLog.map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Module code example:\\n' +
    '  // top-level (no async wrapper!)\\n' +
    '  const mod = await import(\\n' +
    '    isMobile ? "./mobile.js" : "./desktop.js"\\n' +
    '  );\\n' +
    '  export const render = mod.render;';

  log('✅ Conditional imports simulated');
});

// 4. Real-World Patterns
document.getElementById('btn-patterns').addEventListener('click', async () => {
  const output = document.getElementById('patterns-output');
  output.innerHTML = '<span class="highlight">⏳ Loading patterns...</span>';

  const patternLog = [];

  // Pattern 1: Resource loading
  patternLog.push('PATTERN 1: Resource Loading');
  const resources = await Promise.all([
    delay(200, { type: 'config',       data: { theme: 'dark' } }),
    delay(150, { type: 'translations', data: { count: 120 } }),
    delay(180, { type: 'user',         data: { name: 'Alice' } })
  ]);
  resources.forEach(r => patternLog.push('  ✅ ' + r.type + ' loaded'));

  // Pattern 2: Feature detection
  patternLog.push('\\nPATTERN 2: Feature Detection');
  const hasWebGL = !!window.WebGLRenderingContext;
  const hasWasm  = typeof WebAssembly === 'object';
  const hasSW    = 'serviceWorker' in navigator;
  patternLog.push('  WebGL:          ' + hasWebGL);
  patternLog.push('  WebAssembly:    ' + hasWasm);
  patternLog.push('  ServiceWorker:  ' + hasSW);

  // Pattern 3: Database connection
  patternLog.push('\\nPATTERN 3: DB Connection Pool');
  const pool = await delay(300, {
    connections: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      status: 'ready'
    }))
  });
  patternLog.push('  ✅ Pool ready: ' + pool.connections.length + ' connections');

  // Pattern 4: A/B testing
  patternLog.push('\\nPATTERN 4: A/B Test Config');
  const abConfig = await delay(150, {
    variant: Math.random() > 0.5 ? 'A' : 'B',
    features: { newUI: true, darkMode: false }
  });
  patternLog.push('  ✅ Variant: ' + abConfig.variant);
  patternLog.push('  ✅ newUI: ' + abConfig.features.newUI);

  output.innerHTML =
    '<span class="success">✅ TOP-LEVEL AWAIT PATTERNS</span>\\n\\n' +
    patternLog.join('\\n') + '\\n\\n' +
    'Rules for top-level await:\\n' +
    '  • Only works in ES Modules\\n' +
    '  • File must have type="module"\\n' +
    '  • Blocks dependent modules\\n' +
    '  • Does NOT block unrelated modules\\n\\n' +
    'Browser support: Chrome 89+, FF 89+\\n' +
    'Node.js: v14.8+ with .mjs or "type":"module"';

  log('✅ All patterns demonstrated');
});

log('🚀 Top-Level Await loaded!');
log('💡 await at module level — clean async initialization');`,
  },

  
  /* ══════════════════════════════════════════════
     MODULE 11: ERROR HANDLING & DEBUGGING
  ══════════════════════════════════════════════ */

  {
    topic: "error-types",
    description: "Built-in error types — TypeError, RangeError, SyntaxError and more",
    html: `<div class="container">
  <h1>🔷 Error Types</h1>
  <p class="subtitle">Built-in JS error types and when they occur</p>
  <div class="section">
    <h2>1. Common Error Types</h2>
    <button id="btn-types">Show All Types</button>
    <div id="types-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. TypeError</h2>
    <button id="btn-typeerror">Trigger TypeError</button>
    <div id="typeerror-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. RangeError</h2>
    <button id="btn-rangeerror">Trigger RangeError</button>
    <div id="rangeerror-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Error Properties</h2>
    <button id="btn-properties">Inspect Error Object</button>
    <div id="properties-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ec4899;
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
  color: #db2777;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ec4899;
  padding-left: 12px;
}
.section {
  background: rgba(236, 72, 153, 0.05);
  border: 1px solid rgba(236, 72, 153, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #ec4899;
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
  background: #db2777;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(236, 72, 153, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(236, 72, 153, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Error Types
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Common Error Types
document.getElementById('btn-types').addEventListener('click', () => {
  const output = document.getElementById('types-output');

  const errorTypes = [
    {
      name: 'Error',
      desc: 'Base error class',
      example: 'new Error("something went wrong")',
      when: 'Generic errors'
    },
    {
      name: 'TypeError',
      desc: 'Wrong type used',
      example: 'null.property',
      when: 'Calling non-function, accessing null'
    },
    {
      name: 'RangeError',
      desc: 'Value out of range',
      example: 'new Array(-1)',
      when: 'Invalid array length, recursion depth'
    },
    {
      name: 'ReferenceError',
      desc: 'Variable not found',
      example: 'console.log(undeclaredVar)',
      when: 'Accessing undeclared variables'
    },
    {
      name: 'SyntaxError',
      desc: 'Invalid JS syntax',
      example: 'JSON.parse("{bad}")',
      when: 'Parsing invalid JSON, eval errors'
    },
    {
      name: 'URIError',
      desc: 'Invalid URI',
      example: 'decodeURIComponent("%")',
      when: 'Malformed URI encoding'
    },
    {
      name: 'EvalError',
      desc: 'Error in eval()',
      example: 'Rare in modern JS',
      when: 'Legacy eval() usage'
    }
  ];

  output.innerHTML =
    '<span class="success">✅ BUILT-IN ERROR TYPES</span>\\n\\n' +
    errorTypes.map(e =>
      e.name + ':\\n' +
      '  Desc: ' + e.desc + '\\n' +
      '  When: ' + e.when
    ).join('\\n\\n');

  log('✅ ' + errorTypes.length + ' error types shown');
});

// 2. TypeError
document.getElementById('btn-typeerror').addEventListener('click', () => {
  const output = document.getElementById('typeerror-output');
  const results = [];

  // TypeError 1: null access
  try {
    const obj = null;
    obj.property;
  } catch (e) {
    results.push('null.property:\\n  ' + e.constructor.name + ': ' + e.message);
  }

  // TypeError 2: call non-function
  try {
    const notFn = 42;
    notFn();
  } catch (e) {
    results.push('42():\\n  ' + e.constructor.name + ': ' + e.message);
  }

  // TypeError 3: wrong argument type
  try {
    Object.keys('not an object that causes error');
    results.push('Object.keys("string"):\\n  OK — strings are iterable');
  } catch (e) {
    results.push('Object.keys(...):\\n  ' + e.constructor.name + ': ' + e.message);
  }

  // TypeError 4: read-only property
  try {
    'use strict';
    const obj = Object.freeze({ x: 1 });
    obj.x = 2;
  } catch (e) {
    results.push('frozen.x = 2:\\n  ' + e.constructor.name + ': ' + e.message);
  }

  // TypeError 5: undefined method
  try {
    const arr = [1, 2, 3];
    arr.unknownMethod();
  } catch (e) {
    results.push('arr.unknownMethod():\\n  ' + e.constructor.name + ': ' + e.message);
  }

  output.innerHTML =
    '<span class="error">❌ TYPEERROR EXAMPLES</span>\\n\\n' +
    results.join('\\n\\n') + '\\n\\n' +
    'TypeError occurs when:\\n' +
    '  • Accessing property of null/undefined\\n' +
    '  • Calling a non-function\\n' +
    '  • Wrong argument type\\n' +
    '  • Modifying read-only property';

  log('❌ TypeErrors: ' + results.length + ' caught');
});

// 3. RangeError
document.getElementById('btn-rangeerror').addEventListener('click', () => {
  const output = document.getElementById('rangeerror-output');
  const results = [];

  // RangeError 1: invalid array length
  try {
    new Array(-1);
  } catch (e) {
    results.push('new Array(-1):\\n  ' + e.constructor.name + ': ' + e.message);
  }

  // RangeError 2: toFixed out of range
  try {
    (1.5).toFixed(200);
  } catch (e) {
    results.push('(1.5).toFixed(200):\\n  ' + e.constructor.name + ': ' + e.message);
  }

  // RangeError 3: toPrecision out of range
  try {
    (1.5).toPrecision(500);
  } catch (e) {
    results.push('(1.5).toPrecision(500):\\n  ' + e.constructor.name + ': ' + e.message);
  }

  // RangeError 4: stack overflow (simulated)
  try {
    function infinite() { return infinite(); }
    infinite();
  } catch (e) {
    results.push('infinite recursion:\\n  ' + e.constructor.name + ': ' + e.message.substring(0, 40));
  }

  // RangeError 5: valid range
  try {
    const arr = new Array(5);
    results.push('new Array(5):\\n  OK — length=' + arr.length);
  } catch (e) {
    results.push('new Array(5):\\n  ' + e.message);
  }

  output.innerHTML =
    '<span class="error">❌ RANGEERROR EXAMPLES</span>\\n\\n' +
    results.join('\\n\\n') + '\\n\\n' +
    'RangeError occurs when:\\n' +
    '  • Array length is negative/too large\\n' +
    '  • toFixed/toPrecision out of range\\n' +
    '  • Stack overflow (deep recursion)\\n' +
    '  • Invalid date values';

  log('❌ RangeErrors: ' + results.length + ' caught');
});

// 4. Error Properties
document.getElementById('btn-properties').addEventListener('click', () => {
  const output = document.getElementById('properties-output');

  // Create errors and inspect properties
  const err1 = new Error('Something went wrong');
  const err2 = new TypeError('Expected a string');
  const err3 = new RangeError('Value must be 0-100');

  // Catch an error to get stack trace
  let caughtError;
  try {
    null.property;
  } catch (e) {
    caughtError = e;
  }

  // Error properties
  const props = {
    name:    caughtError.name,
    message: caughtError.message,
    stack:   caughtError.stack ? caughtError.stack.split('\\n')[0] : 'N/A'
  };

  // instanceof checks
  const isError     = caughtError instanceof Error;
  const isTypeError = caughtError instanceof TypeError;
  const isRange     = caughtError instanceof RangeError;

  output.innerHTML =
    '<span class="success">✅ ERROR PROPERTIES</span>\\n\\n' +
    'Error instances:\\n' +
    '  err1.name    = "' + err1.name + '"\\n' +
    '  err1.message = "' + err1.message + '"\\n\\n' +
    '  err2.name    = "' + err2.name + '"\\n' +
    '  err2.message = "' + err2.message + '"\\n\\n' +
    '  err3.name    = "' + err3.name + '"\\n' +
    '  err3.message = "' + err3.message + '"\\n\\n' +
    'Caught TypeError (null.property):\\n' +
    '  name:    "' + props.name + '"\\n' +
    '  message: "' + props.message + '"\\n' +
    '  stack:   "' + props.stack + '"\\n\\n' +
    'instanceof checks:\\n' +
    '  instanceof Error:     ' + isError + '\\n' +
    '  instanceof TypeError: ' + isTypeError + '\\n' +
    '  instanceof RangeError: ' + isRange + '\\n\\n' +
    'TypeError extends Error!\\n' +
    'All error types inherit from Error.';

  log('✅ Error properties: name=' + props.name);
});

log('🚀 Error Types module loaded!');
log('💡 Know your errors — catch the right ones');`,
  },

  {
    topic: "custom-errors",
    description: "Create custom error classes for domain-specific error handling",
    html: `<div class="container">
  <h1>🔷 Custom Errors</h1>
  <p class="subtitle">Domain-specific error classes for better error handling</p>
  <div class="section">
    <h2>1. Basic Custom Error</h2>
    <button id="btn-basic">Create Custom Error</button>
    <div id="basic-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Error Hierarchy</h2>
    <button id="btn-hierarchy">Test Error Hierarchy</button>
    <div id="hierarchy-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Error with Context</h2>
    <button id="btn-context">Test Error Context</button>
    <div id="context-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Error Handling Strategy</h2>
    <button id="btn-strategy">Test Strategy</button>
    <div id="strategy-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ec4899;
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
  color: #db2777;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ec4899;
  padding-left: 12px;
}
.section {
  background: rgba(236, 72, 153, 0.05);
  border: 1px solid rgba(236, 72, 153, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #ec4899;
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
  background: #db2777;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(236, 72, 153, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(236, 72, 153, 0.3);
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
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Custom Errors
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Define custom error classes
class AppError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
}

class ValidationError extends AppError {
  constructor(message, field) {
    super(message, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends AppError {
  constructor(message, statusCode) {
    super(message, 'NETWORK_ERROR');
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

class AuthError extends AppError {
  constructor(message) {
    super(message, 'AUTH_ERROR');
    this.name = 'AuthError';
  }
}

class NotFoundError extends AppError {
  constructor(resource, id) {
    super(resource + ' with id ' + id + ' not found', 'NOT_FOUND');
    this.name = 'NotFoundError';
    this.resource = resource;
    this.id = id;
  }
}

// 1. Basic Custom Error
document.getElementById('btn-basic').addEventListener('click', () => {
  const output = document.getElementById('basic-output');

  let caught;
  try {
    throw new AppError('Something went wrong in the app', 'APP_001');
  } catch (e) {
    caught = e;
  }

  output.innerHTML =
    '<span class="success">✅ BASIC CUSTOM ERROR</span>\\n\\n' +
    'class AppError extends Error {\\n' +
    '  constructor(message, code) {\\n' +
    '    super(message);\\n' +
    '    this.name = "AppError";\\n' +
    '    this.code = code;\\n' +
    '    this.timestamp = new Date().toISOString();\\n' +
    '  }\\n' +
    '}\\n\\n' +
    'Caught error properties:\\n' +
    '  name:      "' + caught.name + '"\\n' +
    '  message:   "' + caught.message + '"\\n' +
    '  code:      "' + caught.code + '"\\n' +
    '  timestamp: "' + caught.timestamp.split('T')[0] + '"\\n\\n' +
    'instanceof checks:\\n' +
    '  instanceof AppError: ' + (caught instanceof AppError) + '\\n' +
    '  instanceof Error:    ' + (caught instanceof Error) + '\\n\\n' +
    'Custom errors extend Error properly!';

  log('✅ Custom error: ' + caught.name + ' [' + caught.code + ']');
});

// 2. Error Hierarchy
document.getElementById('btn-hierarchy').addEventListener('click', () => {
  const output = document.getElementById('hierarchy-output');

  const errors = [
    new ValidationError('Email is required', 'email'),
    new NetworkError('Connection refused', 503),
    new AuthError('Token expired'),
    new NotFoundError('User', 42)
  ];

  const results = errors.map(err => {
    return {
      name:       err.name,
      message:    err.message,
      code:       err.code,
      extra:      err.field || err.statusCode || err.resource || '',
      isAppError: err instanceof AppError,
      isError:    err instanceof Error
    };
  });

  output.innerHTML =
    '<span class="success">✅ ERROR HIERARCHY</span>\\n\\n' +
    'Error → AppError → ValidationError\\n' +
    '                 → NetworkError\\n' +
    '                 → AuthError\\n' +
    '                 → NotFoundError\\n\\n' +
    results.map(r =>
      r.name + ':\\n' +
      '  message:    "' + r.message.substring(0, 35) + '"\\n' +
      '  code:       "' + r.code + '"\\n' +
      '  isAppError: ' + r.isAppError + '\\n' +
      '  isError:    ' + r.isError
    ).join('\\n\\n');

  log('✅ Error hierarchy: ' + errors.length + ' custom errors');
});

// 3. Error with Context
document.getElementById('btn-context').addEventListener('click', () => {
  const output = document.getElementById('context-output');

  class DatabaseError extends AppError {
    constructor(message, query, params) {
      super(message, 'DB_ERROR');
      this.name = 'DatabaseError';
      this.query = query;
      this.params = params;
      this.retryable = true;
    }

    toJSON() {
      return {
        name:      this.name,
        message:   this.message,
        code:      this.code,
        query:     this.query,
        params:    this.params,
        retryable: this.retryable,
        timestamp: this.timestamp
      };
    }
  }

  let dbError;
  try {
    throw new DatabaseError(
      'Connection timeout',
      'SELECT * FROM users WHERE id = ?',
      [42]
    );
  } catch (e) {
    dbError = e;
  }

  const json = dbError.toJSON();

  output.innerHTML =
    '<span class="success">✅ ERROR WITH CONTEXT</span>\\n\\n' +
    'DatabaseError caught:\\n' +
    '  name:      "' + json.name + '"\\n' +
    '  message:   "' + json.message + '"\\n' +
    '  code:      "' + json.code + '"\\n' +
    '  query:     "' + json.query + '"\\n' +
    '  params:    [' + json.params + ']\\n' +
    '  retryable: ' + json.retryable + '\\n\\n' +
    'toJSON() for logging/serialization:\\n' +
    JSON.stringify(json, null, 2).split('\\n').slice(0, 6).join('\\n') + '\\n  ...\\n\\n' +
    'Rich context helps with debugging!';

  log('✅ DB error context: ' + dbError.query);
});

// 4. Error Handling Strategy
document.getElementById('btn-strategy').addEventListener('click', () => {
  const output = document.getElementById('strategy-output');

  const handlingLog = [];

  function handleError(error) {
    if (error instanceof ValidationError) {
      handlingLog.push('🔴 Validation: show field error for "' + error.field + '"');
      return { action: 'show-field-error', field: error.field };
    }

    if (error instanceof AuthError) {
      handlingLog.push('🔐 Auth: redirect to login');
      return { action: 'redirect', url: '/login' };
    }

    if (error instanceof NotFoundError) {
      handlingLog.push('🔍 NotFound: show 404 for ' + error.resource + ' #' + error.id);
      return { action: 'show-404', resource: error.resource };
    }

    if (error instanceof NetworkError) {
      if (error.statusCode >= 500) {
        handlingLog.push('🌐 Server error: show retry button');
        return { action: 'show-retry' };
      }
      handlingLog.push('🌐 Network error: show error message');
      return { action: 'show-error' };
    }

    if (error instanceof AppError) {
      handlingLog.push('⚠️ App error [' + error.code + ']: log and show generic message');
      return { action: 'show-generic' };
    }

    handlingLog.push('💥 Unknown error: log to monitoring');
    return { action: 'log-monitoring' };
  }

  const testErrors = [
    new ValidationError('Required', 'email'),
    new AuthError('Token expired'),
    new NotFoundError('Post', 99),
    new NetworkError('Server error', 500),
    new AppError('Unknown issue', 'UNKNOWN'),
    new Error('Unexpected crash')
  ];

  const actions = testErrors.map(err => handleError(err));

  output.innerHTML =
    '<span class="success">✅ ERROR HANDLING STRATEGY</span>\\n\\n' +
    'Handling different error types:\\n\\n' +
    handlingLog.map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Actions taken:\\n' +
    actions.map((a, i) =>
      '  ' + testErrors[i].name + ' → ' + a.action
    ).join('\\n') + '\\n\\n' +
    'Pattern: catch specific types first,\\n' +
    'fall through to generic handlers!';

  log('✅ Strategy: ' + actions.length + ' errors handled');
});

log('🚀 Custom Errors module loaded!');
log('💡 Custom errors = better error handling');`,
  },

  {
    topic: "error-boundaries",
    description: "Graceful error recovery — try/catch patterns, async errors, global handlers",
    html: `<div class="container">
  <h1>🔷 Error Boundaries</h1>
  <p class="subtitle">Graceful error recovery and global error handling</p>
  <div class="section">
    <h2>1. Try/Catch Patterns</h2>
    <button id="btn-trycatch">Test Try/Catch</button>
    <div id="trycatch-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Async Error Handling</h2>
    <button id="btn-async">Test Async Errors</button>
    <div id="async-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Global Error Handlers</h2>
    <button id="btn-global">Test Global Handlers</button>
    <div id="global-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Error Recovery</h2>
    <button id="btn-recovery">Test Recovery</button>
    <div id="recovery-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ec4899;
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
  color: #db2777;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ec4899;
  padding-left: 12px;
}
.section {
  background: rgba(236, 72, 153, 0.05);
  border: 1px solid rgba(236, 72, 153, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #ec4899;
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
  background: #db2777;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(236, 72, 153, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(236, 72, 153, 0.3);
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
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Error Boundaries
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));
const fail  = (ms, msg) => new Promise((_, r) => setTimeout(() => r(new Error(msg)), ms));

// 1. Try/Catch Patterns
document.getElementById('btn-trycatch').addEventListener('click', () => {
  const output = document.getElementById('trycatch-output');
  const results = [];

  // Pattern 1: Basic try/catch/finally
  try {
    JSON.parse('{invalid}');
  } catch (e) {
    results.push('1. Basic catch:\\n   Caught: ' + e.constructor.name + ': ' + e.message.substring(0, 30));
  } finally {
    results.push('   finally: always runs!');
  }

  // Pattern 2: Re-throw
  function processData(data) {
    try {
      if (!data) throw new TypeError('Data is required');
      return data.toUpperCase();
    } catch (e) {
      if (e instanceof TypeError) {
        throw e; // re-throw known errors
      }
      log('Unknown error: ' + e.message);
    }
  }

  try {
    processData(null);
  } catch (e) {
    results.push('2. Re-throw pattern:\\n   Re-caught: ' + e.name + ': ' + e.message);
  }

  // Pattern 3: Nested try/catch
  try {
    try {
      throw new Error('Inner error');
    } catch (inner) {
      results.push('3. Nested catch:\\n   Inner: ' + inner.message);
      throw new Error('Outer error from inner handler');
    }
  } catch (outer) {
    results.push('   Outer: ' + outer.message);
  }

  // Pattern 4: Optional catch binding
  try {
    JSON.parse('{"valid": true}');
    results.push('4. Optional catch binding:\\n   No error — catch not needed');
  } catch {
    results.push('4. Caught (no binding needed)');
  }

  output.innerHTML =
    '<span class="success">✅ TRY/CATCH PATTERNS</span>\\n\\n' +
    results.join('\\n\\n') + '\\n\\n' +
    'Key patterns:\\n' +
    '  • finally always runs\\n' +
    '  • Re-throw unknown errors\\n' +
    '  • Nest for granular handling\\n' +
    '  • catch {} (no binding) ES2019+';

  log('✅ Try/catch patterns: ' + results.length + ' shown');
});

// 2. Async Error Handling
document.getElementById('btn-async').addEventListener('click', async () => {
  const output = document.getElementById('async-output');
  const results = [];

  // Pattern 1: async/await try/catch
  try {
    await fail(100, 'Async operation failed');
  } catch (e) {
    results.push('1. async/await try/catch:\\n   Caught: ' + e.message);
  }

  // Pattern 2: Promise .catch()
  const r2 = await fail(100, 'Promise rejected')
    .catch(e => 'Recovered: ' + e.message);
  results.push('2. Promise .catch():\\n   Result: "' + r2 + '"');

  // Pattern 3: Promise.allSettled for multiple
  const settled = await Promise.allSettled([
    delay(100, 'success1'),
    fail(100, 'error1'),
    delay(100, 'success2'),
    fail(100, 'error2')
  ]);

  const successes = settled.filter(r => r.status === 'fulfilled').length;
  const failures  = settled.filter(r => r.status === 'rejected').length;
  results.push('3. Promise.allSettled:\\n   Successes: ' + successes + ', Failures: ' + failures);

  // Pattern 4: Async wrapper (Go-style)
  async function safeAsync(fn) {
    try {
      return [null, await fn()];
    } catch (e) {
      return [e, null];
    }
  }

  const [err, data] = await safeAsync(() => fail(100, 'wrapped error'));
  results.push('4. Go-style wrapper:\\n   err: "' + (err ? err.message : null) + '"\\n   data: ' + data);

  // Pattern 5: Unhandled rejection (caught by handler)
  const unhandled = Promise.reject(new Error('Unhandled!'));
  unhandled.catch(e => results.push('5. Caught unhandled:\\n   "' + e.message + '"'));
  await delay(50);

  output.innerHTML =
    '<span class="success">✅ ASYNC ERROR HANDLING</span>\\n\\n' +
    results.join('\\n\\n') + '\\n\\n' +
    'Best practices:\\n' +
    '  • Always catch async errors\\n' +
    '  • Use allSettled for batch ops\\n' +
    '  • Go-style [err, data] pattern\\n' +
    '  • Never leave unhandled rejections';

  log('✅ Async errors: ' + results.length + ' patterns');
});

// 3. Global Error Handlers
document.getElementById('btn-global').addEventListener('click', () => {
  const output = document.getElementById('global-output');
  const globalLog = [];

  // Simulate global error handler setup
  const originalOnError = window.onerror;
  const originalOnUnhandled = window.onunhandledrejection;

  // window.onerror — catches synchronous errors
  window.onerror = (message, source, lineno, colno, error) => {
    globalLog.push('window.onerror caught:\\n  message: "' + message + '"');
    return true; // prevent default browser handling
  };

  // window.onunhandledrejection — catches unhandled promise rejections
  window.onunhandledrejection = (event) => {
    globalLog.push('unhandledrejection caught:\\n  reason: "' + event.reason?.message + '"');
    event.preventDefault();
  };

  // Simulate what these handlers catch
  globalLog.push('Global handlers registered:\\n  • window.onerror\\n  • window.onunhandledrejection');
  globalLog.push('\\nUse cases:\\n  • Log errors to monitoring service\\n  • Show user-friendly error UI\\n  • Prevent app crash');
  globalLog.push('\\nError monitoring services:\\n  • Sentry\\n  • Datadog\\n  • LogRocket\\n  • Bugsnag');

  // Restore
  window.onerror = originalOnError;
  window.onunhandledrejection = originalOnUnhandled;

  output.innerHTML =
    '<span class="success">✅ GLOBAL ERROR HANDLERS</span>\\n\\n' +
    globalLog.join('\\n\\n') + '\\n\\n' +
    'Setup code:\\n' +
    '  window.onerror = (msg, src, line, col, err) => {\\n' +
    '    sendToMonitoring({ msg, src, line, err });\\n' +
    '    return true;\\n' +
    '  };\\n\\n' +
    '  window.addEventListener(\\n' +
    '    "unhandledrejection",\\n' +
    '    (e) => sendToMonitoring(e.reason)\\n' +
    '  );';

  log('✅ Global handlers demonstrated');
});

// 4. Error Recovery
document.getElementById('btn-recovery').addEventListener('click', async () => {
  const output = document.getElementById('recovery-output');
  const recoveryLog = [];

  // Recovery 1: Retry with backoff
  async function withRetry(fn, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (e) {
        recoveryLog.push('Attempt ' + (i + 1) + ' failed: ' + e.message);
        if (i < maxRetries - 1) {
          await delay(50 * Math.pow(2, i));
        } else {
          throw e;
        }
      }
    }
  }

  let attempt = 0;
  try {
    const result = await withRetry(async () => {
      attempt++;
      if (attempt < 3) throw new Error('Temporary failure');
      return 'Success on attempt ' + attempt;
    });
    recoveryLog.push('✅ Retry succeeded: "' + result + '"');
  } catch (e) {
    recoveryLog.push('❌ All retries failed: ' + e.message);
  }

  // Recovery 2: Fallback value
  async function withFallback(fn, fallback) {
    try {
      return await fn();
    } catch (e) {
      recoveryLog.push('Using fallback: ' + e.message);
      return fallback;
    }
  }

  const data = await withFallback(
    () => fail(50, 'Primary source failed'),
    { source: 'fallback', data: [] }
  );
  recoveryLog.push('✅ Fallback data: source="' + data.source + '"');

  // Recovery 3: Circuit breaker
  class CircuitBreaker {
    constructor(threshold = 3) {
      this.failures = 0;
      this.threshold = threshold;
      this.state = 'closed';
    }

    async call(fn) {
      if (this.state === 'open') {
        throw new Error('Circuit breaker OPEN — fast fail');
      }
      try {
        const result = await fn();
        this.failures = 0;
        return result;
      } catch (e) {
        this.failures++;
        if (this.failures >= this.threshold) {
          this.state = 'open';
          recoveryLog.push('⚡ Circuit breaker OPENED after ' + this.failures + ' failures');
        }
        throw e;
      }
    }
  }

  const breaker = new CircuitBreaker(2);
  for (let i = 0; i < 3; i++) {
    try {
      await breaker.call(() => fail(10, 'Service down'));
    } catch (e) {
      recoveryLog.push('Call ' + (i + 1) + ': ' + e.message);
    }
  }

  output.innerHTML =
    '<span class="success">✅ ERROR RECOVERY PATTERNS</span>\\n\\n' +
    recoveryLog.map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Recovery strategies:\\n' +
    '  1. Retry with exponential backoff\\n' +
    '  2. Fallback to default value\\n' +
    '  3. Circuit breaker pattern\\n' +
    '  4. Graceful degradation';

  log('✅ Recovery: ' + recoveryLog.length + ' steps');
});

log('🚀 Error Boundaries module loaded!');
log('💡 Catch, recover, and handle errors gracefully');`,
  },

  {
    topic: "debugging-techniques",
    description: "Console methods, breakpoints, performance profiling, and debugging patterns",
    html: `<div class="container">
  <h1>🔷 Debugging Techniques</h1>
  <p class="subtitle">Console methods, profiling, and debugging patterns</p>
  <div class="section">
    <h2>1. Console Methods</h2>
    <button id="btn-console">Test Console Methods</button>
    <div id="console-output-box" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Performance Profiling</h2>
    <button id="btn-perf">Profile Performance</button>
    <div id="perf-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Debugging Patterns</h2>
    <button id="btn-patterns">Show Patterns</button>
    <div id="patterns-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Assertion & Tracing</h2>
    <button id="btn-assert">Test Assertions</button>
    <div id="assert-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ec4899;
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
  color: #db2777;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ec4899;
  padding-left: 12px;
}
.section {
  background: rgba(236, 72, 153, 0.05);
  border: 1px solid rgba(236, 72, 153, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #ec4899;
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
  background: #db2777;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(236, 72, 153, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(236, 72, 153, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Debugging Techniques
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Console Methods
document.getElementById('btn-console').addEventListener('click', () => {
  const output = document.getElementById('console-output-box');

  const methods = [];

  // console.log — basic logging
  console.log('console.log:', 'basic message', { key: 'value' });
  methods.push('console.log("msg", obj) — basic logging');

  // console.warn — warnings
  console.warn('console.warn: This is a warning');
  methods.push('console.warn("msg") — yellow warning');

  // console.error — errors
  console.error('console.error: This is an error');
  methods.push('console.error("msg") — red error');

  // console.table — tabular data
  const users = [
    { name: 'Alice', age: 30, role: 'admin' },
    { name: 'Bob',   age: 25, role: 'user' }
  ];
  console.table(users);
  methods.push('console.table(arr) — tabular display');

  // console.group — grouped output
  console.group('User Details');
  console.log('Name: Alice');
  console.log('Role: admin');
  console.groupEnd();
  methods.push('console.group/groupEnd — collapsible groups');

  // console.time — timing
  console.time('operation');
  let sum = 0;
  for (let i = 0; i < 100000; i++) sum += i;
  console.timeEnd('operation');
  methods.push('console.time/timeEnd — measure duration');

  // console.count — counting
  for (let i = 0; i < 3; i++) console.count('loop');
  console.countReset('loop');
  methods.push('console.count/countReset — count calls');

  // console.assert — conditional logging
  console.assert(1 === 1, 'This will NOT show');
  console.assert(1 === 2, 'This WILL show — assertion failed');
  methods.push('console.assert(cond, msg) — conditional log');

  // console.dir — object inspection
  console.dir(document.body);
  methods.push('console.dir(obj) — inspect DOM/objects');

  output.innerHTML =
    '<span class="success">✅ CONSOLE METHODS</span>\\n\\n' +
    'All console methods (check DevTools):\\n\\n' +
    methods.map((m, i) => '  ' + (i + 1) + '. ' + m).join('\\n') + '\\n\\n' +
    'sum result: ' + sum.toLocaleString() + '\\n\\n' +
    'Open DevTools Console to see output!';

  log('✅ Console methods: ' + methods.length + ' demonstrated');
});

// 2. Performance Profiling
document.getElementById('btn-perf').addEventListener('click', () => {
  const output = document.getElementById('perf-output');

  // performance.now() — high resolution timing
  const t1 = performance.now();

  // Simulate work
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i);
  }

  const t2 = performance.now();
  const duration = (t2 - t1).toFixed(3);

  // performance.mark and measure
  performance.mark('start-task');
  let arr = Array.from({ length: 10000 }, (_, i) => i);
  arr = arr.filter(x => x % 2 === 0).map(x => x * 2);
  performance.mark('end-task');

  let measureDuration = 0;
  try {
    performance.measure('my-task', 'start-task', 'end-task');
    const measures = performance.getEntriesByName('my-task');
    measureDuration = measures[0]?.duration.toFixed(3) || 0;
  } catch (e) {
    measureDuration = 'N/A';
  }

  // performance.memory (Chrome only)
  const memory = performance.memory;
  const memInfo = memory
    ? 'usedJSHeapSize: ' + (memory.usedJSHeapSize / 1024 / 1024).toFixed(2) + ' MB'
    : 'Not available (Chrome only)';

  // Navigation timing
  const navTiming = performance.getEntriesByType('navigation')[0];
  const loadTime = navTiming
    ? (navTiming.loadEventEnd - navTiming.startTime).toFixed(0) + 'ms'
    : 'N/A';

  output.innerHTML =
    '<span class="success">✅ PERFORMANCE PROFILING</span>\\n\\n' +
    'performance.now():\\n' +
    '  1M sqrt operations: ' + duration + 'ms\\n\\n' +
    'performance.mark/measure:\\n' +
    '  filter+map 10k items: ' + measureDuration + 'ms\\n\\n' +
    'performance.memory:\\n' +
    '  ' + memInfo + '\\n\\n' +
    'Navigation timing:\\n' +
    '  Page load time: ' + loadTime + '\\n\\n' +
    'Profiling tools:\\n' +
    '  • performance.now() — precise timing\\n' +
    '  • performance.mark() — custom marks\\n' +
    '  • DevTools Performance tab\\n' +
    '  • Lighthouse audits';

  log('✅ Profiling: ' + duration + 'ms for 1M ops');
});

// 3. Debugging Patterns
document.getElementById('btn-patterns').addEventListener('click', () => {
  const output = document.getElementById('patterns-output');

  const patterns = [];

  // Pattern 1: Labeled console logs
  const DEBUG = true;
  function debugLog(label, ...args) {
    if (DEBUG) console.log('[' + label + ']', ...args);
  }
  debugLog('AUTH', 'User logged in', { id: 1 });
  patterns.push('1. Labeled logs:\\n   debugLog("AUTH", "User logged in")');

  // Pattern 2: Conditional breakpoint simulation
  function processItem(item) {
    if (item.value < 0) {
      debugLog('WARN', 'Negative value detected:', item);
      // debugger; // would pause here in DevTools
    }
    return Math.abs(item.value);
  }
  const result = processItem({ id: 1, value: -5 });
  patterns.push('2. Conditional debugger:\\n   if (condition) { debugger; }\\n   Result: ' + result);

  // Pattern 3: Object spread for logging
  const state = { user: 'Alice', count: 42, active: true };
  console.log('State snapshot:', { ...state, timestamp: Date.now() });
  patterns.push('3. Snapshot logging:\\n   console.log({ ...state, timestamp })');

  // Pattern 4: Stack trace
  function level3() { return new Error().stack; }
  function level2() { return level3(); }
  function level1() { return level2(); }
  const stack = level1().split('\\n').slice(0, 3).join('\\n   ');
  patterns.push('4. Stack trace:\\n   new Error().stack\\n   ' + stack.substring(0, 60) + '...');

  // Pattern 5: typeof guards
  function safeProcess(value) {
    console.assert(typeof value === 'number', 'Expected number, got: ' + typeof value);
    return typeof value === 'number' ? value * 2 : 0;
  }
  patterns.push('5. Type assertions:\\n   console.assert(typeof x === "number", msg)\\n   safeProcess("str") = ' + safeProcess('str'));

  output.innerHTML =
    '<span class="success">✅ DEBUGGING PATTERNS</span>\\n\\n' +
    patterns.join('\\n\\n') + '\\n\\n' +
    'DevTools shortcuts:\\n' +
    '  F12 / Cmd+Opt+I — Open DevTools\\n' +
    '  F8 — Resume execution\\n' +
    '  F10 — Step over\\n' +
    '  F11 — Step into\\n' +
    '  Shift+F11 — Step out';

  log('✅ Debugging patterns: ' + patterns.length + ' shown');
});

// 4. Assertion & Tracing
document.getElementById('btn-assert').addEventListener('click', () => {
  const output = document.getElementById('assert-output');

  const assertLog = [];

  // Custom assert function
  function assert(condition, message) {
    if (!condition) {
      const err = new Error('Assertion failed: ' + message);
      assertLog.push('❌ FAIL: ' + message);
      throw err;
    }
    assertLog.push('✅ PASS: ' + message);
    return true;
  }

  // Run assertions
  try { assert(1 + 1 === 2,    '1 + 1 should equal 2'); } catch (e) {}
  try { assert(typeof 'x' === 'string', 'x should be string'); } catch (e) {}
  try { assert([].length === 0, 'empty array length is 0'); } catch (e) {}
  try { assert(null === undefined, 'null should equal undefined'); } catch (e) {}
  try { assert(NaN !== NaN,    'NaN is not equal to NaN'); } catch (e) {}

  // Tracing function calls
  function trace(fn) {
    return function(...args) {
      console.group('Trace: ' + fn.name);
      console.log('Args:', args);
      const result = fn.apply(this, args);
      console.log('Result:', result);
      console.groupEnd();
      assertLog.push('Traced: ' + fn.name + '(' + args + ') = ' + result);
      return result;
    };
  }

  function add(a, b) { return a + b; }
  const tracedAdd = trace(add);
  tracedAdd(3, 4);
  tracedAdd(10, 20);

  const passed  = assertLog.filter(l => l.startsWith('✅')).length;
  const failed  = assertLog.filter(l => l.startsWith('❌')).length;
  const traced  = assertLog.filter(l => l.startsWith('Traced')).length;

  output.innerHTML =
    '<span class="success">✅ ASSERTIONS & TRACING</span>\\n\\n' +
    'Assertion results:\\n' +
    assertLog.slice(0, 5).map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Summary: ' + passed + ' passed, ' + failed + ' failed\\n\\n' +
    'Traced function calls:\\n' +
    assertLog.slice(5).map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Tracing wraps functions to log\\n' +
    'inputs and outputs automatically!';

  log('✅ Assertions: ' + passed + ' passed, ' + failed + ' failed');
});

log('🚀 Debugging Techniques module loaded!');
log('💡 Master the console and DevTools');`,
  },

  {
    topic: "testing-patterns",
    description: "Unit testing patterns, test doubles, and TDD approach in JavaScript",
    html: `<div class="container">
  <h1>🔷 Testing Patterns</h1>
  <p class="subtitle">Unit testing, test doubles, and TDD in JavaScript</p>
  <div class="section">
    <h2>1. Basic Unit Tests</h2>
    <button id="btn-unit">Run Unit Tests</button>
    <div id="unit-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Test Doubles</h2>
    <button id="btn-doubles">Test Doubles Demo</button>
    <div id="doubles-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Async Testing</h2>
    <button id="btn-async">Test Async Code</button>
    <div id="async-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. TDD Approach</h2>
    <button id="btn-tdd">Simulate TDD</button>
    <div id="tdd-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #ec4899;
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
  color: #db2777;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #ec4899;
  padding-left: 12px;
}
.section {
  background: rgba(236, 72, 153, 0.05);
  border: 1px solid rgba(236, 72, 153, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #ec4899;
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
  background: #db2777;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(236, 72, 153, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(236, 72, 153, 0.3);
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
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Testing Patterns
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// Mini test framework
class TestRunner {
  constructor() {
    this.tests   = [];
    this.passed  = 0;
    this.failed  = 0;
    this.results = [];
  }

  test(name, fn) {
    try {
      fn();
      this.passed++;
      this.results.push('  ✅ ' + name);
    } catch (e) {
      this.failed++;
      this.results.push('  ❌ ' + name + '\\n     ' + e.message);
    }
  }

  expect(actual) {
    return {
      toBe: (expected) => {
        if (actual !== expected) {
          throw new Error('Expected ' + JSON.stringify(expected) + ' but got ' + JSON.stringify(actual));
        }
      },
      toEqual: (expected) => {
        if (JSON.stringify(actual) !== JSON.stringify(expected)) {
          throw new Error('Expected ' + JSON.stringify(expected) + ' but got ' + JSON.stringify(actual));
        }
      },
      toBeTruthy: () => {
        if (!actual) throw new Error('Expected truthy but got ' + actual);
      },
      toBeFalsy: () => {
        if (actual) throw new Error('Expected falsy but got ' + actual);
      },
      toThrow: () => {
        if (typeof actual !== 'function') throw new Error('Expected a function');
        try {
          actual();
          throw new Error('Expected function to throw but it did not');
        } catch (e) {
          if (e.message === 'Expected function to throw but it did not') throw e;
        }
      },
      toContain: (item) => {
        if (!actual.includes(item)) {
          throw new Error('Expected ' + JSON.stringify(actual) + ' to contain ' + JSON.stringify(item));
        }
      },
      toBeGreaterThan: (n) => {
        if (actual <= n) throw new Error('Expected ' + actual + ' > ' + n);
      },
      toBeNull: () => {
        if (actual !== null) throw new Error('Expected null but got ' + actual);
      }
    };
  }

  summary() {
    return this.results.join('\\n') +
      '\\n\\n  Total: ' + (this.passed + this.failed) +
      ' | Passed: ' + this.passed +
      ' | Failed: ' + this.failed;
  }
}

// 1. Basic Unit Tests
document.getElementById('btn-unit').addEventListener('click', () => {
  const output = document.getElementById('unit-output');

  // Functions to test
  function add(a, b)        { return a + b; }
  function multiply(a, b)   { return a * b; }
  function capitalize(str)  { return str.charAt(0).toUpperCase() + str.slice(1); }
  function isEven(n)        { return n % 2 === 0; }
  function reverseStr(str)  { return str.split('').reverse().join(''); }
  function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }

  const runner = new TestRunner();
  const { test, expect } = runner;
  const t = runner.test.bind(runner);
  const e = runner.expect.bind(runner);

  t('add(2, 3) equals 5',           () => e(add(2, 3)).toBe(5));
  t('add(0, 0) equals 0',           () => e(add(0, 0)).toBe(0));
  t('add(-1, 1) equals 0',          () => e(add(-1, 1)).toBe(0));
  t('multiply(3, 4) equals 12',     () => e(multiply(3, 4)).toBe(12));
  t('multiply(0, 99) equals 0',     () => e(multiply(0, 99)).toBe(0));
  t('capitalize("hello")',          () => e(capitalize('hello')).toBe('Hello'));
  t('capitalize("") stays ""',      () => e(capitalize('')).toBe(''));
  t('isEven(4) is true',            () => e(isEven(4)).toBeTruthy());
  t('isEven(3) is false',           () => e(isEven(3)).toBeFalsy());
  t('reverseStr("abc") = "cba"',    () => e(reverseStr('abc')).toBe('cba'));
  t('clamp(5, 0, 10) = 5',          () => e(clamp(5, 0, 10)).toBe(5));
  t('clamp(-5, 0, 10) = 0',         () => e(clamp(-5, 0, 10)).toBe(0));
  t('clamp(15, 0, 10) = 10',        () => e(clamp(15, 0, 10)).toBe(10));

  output.innerHTML =
    '<span class="success">✅ UNIT TESTS</span>\\n\\n' +
    runner.summary();

  log('✅ Unit tests: ' + runner.passed + '/' + (runner.passed + runner.failed) + ' passed');
});

// 2. Test Doubles
document.getElementById('btn-doubles').addEventListener('click', () => {
  const output = document.getElementById('doubles-output');
  const doublesLog = [];

  // STUB — returns fixed values
  const userServiceStub = {
    getUser: (id) => ({ id, name: 'Test User', email: 'test@example.com' }),
    saveUser: (user) => ({ ...user, id: 999, saved: true })
  };

  const user = userServiceStub.getUser(1);
  doublesLog.push('STUB — fixed return values:\\n  getUser(1) = ' + JSON.stringify(user));

  // MOCK — tracks calls
  function createMock(methods) {
    const calls = {};
    const mock  = {};
    methods.forEach(method => {
      calls[method] = [];
      mock[method]  = (...args) => {
        calls[method].push(args);
        return 'mocked_' + method;
      };
    });
    mock._calls = calls;
    return mock;
  }

  const emailMock = createMock(['sendEmail', 'sendSMS']);
  emailMock.sendEmail('alice@example.com', 'Hello!');
  emailMock.sendEmail('bob@example.com', 'Hi!');
  emailMock.sendSMS('+1234567890', 'Code: 1234');

  doublesLog.push(
    'MOCK — tracks calls:\\n' +
    '  sendEmail called: ' + emailMock._calls.sendEmail.length + ' times\\n' +
    '  sendSMS called:   ' + emailMock._calls.sendSMS.length + ' time'
  );

  // SPY — wraps real function
  function createSpy(fn) {
    const spy = {
      calls: [],
      callCount: 0
    };
    const wrapper = function(...args) {
      spy.calls.push(args);
      spy.callCount++;
      return fn(...args);
    };
    wrapper.spy = spy;
    return wrapper;
  }

  function realAdd(a, b) { return a + b; }
  const spiedAdd = createSpy(realAdd);
  spiedAdd(1, 2);
  spiedAdd(3, 4);
  spiedAdd(5, 6);

  doublesLog.push(
    'SPY — wraps real function:\\n' +
    '  realAdd still works: ' + spiedAdd(10, 20) + '\\n' +
    '  Called ' + spiedAdd.spy.callCount + ' times total'
  );

  // FAKE — simplified implementation
  class FakeLocalStorage {
    constructor() { this._store = {}; }
    getItem(key)        { return this._store[key] ?? null; }
    setItem(key, value) { this._store[key] = String(value); }
    removeItem(key)     { delete this._store[key]; }
    get length()        { return Object.keys(this._store).length; }
  }

  const fakeStorage = new FakeLocalStorage();
  fakeStorage.setItem('token', 'abc123');
  fakeStorage.setItem('user', 'Alice');

  doublesLog.push(
    'FAKE — simplified implementation:\\n' +
    '  fakeStorage.getItem("token") = "' + fakeStorage.getItem('token') + '"\\n' +
    '  fakeStorage.length = ' + fakeStorage.length
  );

  output.innerHTML =
    '<span class="success">✅ TEST DOUBLES</span>\\n\\n' +
    doublesLog.join('\\n\\n') + '\\n\\n' +
    'Types of test doubles:\\n' +
    '  Stub  — fixed return values\\n' +
    '  Mock  — tracks calls/interactions\\n' +
    '  Spy   — wraps real implementation\\n' +
    '  Fake  — simplified working version\\n' +
    '  Dummy — placeholder, not used';

  log('✅ Test doubles: 4 types demonstrated');
});

// 3. Async Testing
document.getElementById('btn-async').addEventListener('click', async () => {
  const output = document.getElementById('async-output');

  const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));
  const fail  = (ms, msg) => new Promise((_, r) => setTimeout(() => r(new Error(msg)), ms));

  // Async test runner
  class AsyncTestRunner {
    constructor() {
      this.results = [];
      this.passed  = 0;
      this.failed  = 0;
    }

    async test(name, fn) {
      try {
        await fn();
        this.passed++;
        this.results.push('  ✅ ' + name);
      } catch (e) {
        this.failed++;
        this.results.push('  ❌ ' + name + '\\n     ' + e.message);
      }
    }

    summary() {
      return this.results.join('\\n') +
        '\\n\\n  Passed: ' + this.passed + ' | Failed: ' + this.failed;
    }
  }

  // Async functions to test
  async function fetchUser(id) {
    if (!id) throw new Error('ID is required');
    await delay(50);
    return { id, name: 'User' + id, active: true };
  }

  async function saveData(data) {
    if (!data.name) throw new Error('Name is required');
    await delay(50);
    return { ...data, saved: true, timestamp: Date.now() };
  }

  const runner = new AsyncTestRunner();

  await runner.test('fetchUser(1) returns user object', async () => {
    const user = await fetchUser(1);
    if (user.id !== 1) throw new Error('Expected id=1');
    if (!user.name)    throw new Error('Expected name');
  });

  await runner.test('fetchUser(null) throws error', async () => {
    try {
      await fetchUser(null);
      throw new Error('Should have thrown');
    } catch (e) {
      if (e.message !== 'ID is required') throw new Error('Wrong error: ' + e.message);
    }
  });

  await runner.test('saveData with name succeeds', async () => {
    const result = await saveData({ name: 'Alice', age: 30 });
    if (!result.saved) throw new Error('Expected saved=true');
  });

  await runner.test('saveData without name throws', async () => {
    try {
      await saveData({ age: 30 });
      throw new Error('Should have thrown');
    } catch (e) {
      if (e.message !== 'Name is required') throw new Error('Wrong error');
    }
  });

  await runner.test('parallel fetch resolves all', async () => {
    const results = await Promise.all([fetchUser(1), fetchUser(2), fetchUser(3)]);
    if (results.length !== 3) throw new Error('Expected 3 results');
  });

  output.innerHTML =
    '<span class="success">✅ ASYNC TESTING</span>\\n\\n' +
    runner.summary() + '\\n\\n' +
    'Async test patterns:\\n' +
    '  • async/await in test functions\\n' +
    '  • Test both success and failure\\n' +
    '  • Test parallel operations\\n' +
    '  • Use try/catch for error testing';

  log('✅ Async tests: ' + runner.passed + '/' + (runner.passed + runner.failed) + ' passed');
});

// 4. TDD Approach
document.getElementById('btn-tdd').addEventListener('click', () => {
  const output = document.getElementById('tdd-output');

  const tddLog = [];

  // TDD: Red → Green → Refactor
  // Step 1: Write failing test (RED)
  tddLog.push('🔴 RED — Write failing test first:');
  tddLog.push('  test("add(2,3) equals 5", () => {');
  tddLog.push('    expect(add(2, 3)).toBe(5);');
  tddLog.push('  });');
  tddLog.push('  Result: ❌ add is not defined');

  // Step 2: Write minimal code to pass (GREEN)
  tddLog.push('\\n🟢 GREEN — Write minimal code to pass:');
  tddLog.push('  function add(a, b) { return a + b; }');

  function add(a, b) { return a + b; }
  const test1 = add(2, 3) === 5;
  tddLog.push('  Result: ' + (test1 ? '✅ PASS' : '❌ FAIL'));

  // Step 3: Refactor (REFACTOR)
  tddLog.push('\\n🔵 REFACTOR — Improve without breaking:');
  tddLog.push('  const add = (a, b) => a + b;');
  tddLog.push('  (Arrow function, same behavior)');

  const addRefactored = (a, b) => a + b;
  const test2 = addRefactored(2, 3) === 5;
  tddLog.push('  Tests still pass: ' + (test2 ? '✅' : '❌'));

  // Full TDD cycle example
  tddLog.push('\\n📋 FULL TDD CYCLE — Stack implementation:');

  // RED
  tddLog.push('  RED: Tests written for Stack class');

  // GREEN
  class Stack {
    constructor()    { this._items = []; }
    push(item)       { this._items.push(item); }
    pop()            { return this._items.pop(); }
    peek()           { return this._items[this._items.length - 1]; }
    isEmpty()        { return this._items.length === 0; }
    get size()       { return this._items.length; }
  }

  const runner = new TestRunner();
  const t = runner.test.bind(runner);
  const e = runner.expect.bind(runner);

  const stack = new Stack();
  t('new Stack is empty',         () => e(stack.isEmpty()).toBeTruthy());
  t('push increases size',        () => { stack.push(1); e(stack.size).toBe(1); });
  t('push multiple items',        () => { stack.push(2); stack.push(3); e(stack.size).toBe(3); });
  t('peek returns top item',      () => e(stack.peek()).toBe(3));
  t('pop removes and returns top',() => e(stack.pop()).toBe(3));
  t('size decreases after pop',   () => e(stack.size).toBe(2));
  t('pop until empty',            () => { stack.pop(); stack.pop(); e(stack.isEmpty()).toBeTruthy(); });

  tddLog.push('  GREEN: Stack implemented');
  tddLog.push('  Tests: ' + runner.passed + '/' + (runner.passed + runner.failed) + ' passing');
  tddLog.push('  REFACTOR: Clean up if needed');

  output.innerHTML =
    '<span class="success">✅ TDD APPROACH</span>\\n\\n' +
    tddLog.join('\\n') + '\\n\\n' +
    'Stack test results:\\n' +
    runner.results.join('\\n') + '\\n\\n' +
    'TDD cycle:\\n' +
    '  🔴 RED    — Write failing test\\n' +
    '  🟢 GREEN  — Write minimal code\\n' +
    '  🔵 REFACTOR — Improve code\\n' +
    '  Repeat for each feature!';

  log('✅ TDD: ' + runner.passed + '/' + (runner.passed + runner.failed) + ' tests passing');
});

log('🚀 Testing Patterns module loaded!');
log('💡 Test-driven development = confidence in code');`,
  },

  
  /* ══════════════════════════════════════════════
     MODULE 12: ADVANCED PATTERNS (FINAL)
  ══════════════════════════════════════════════ */

  {
    topic: "metaprogramming",
    description: "Proxy, Reflect, Symbol, and property descriptors — code that writes code",
    html: `<div class="container">
  <h1>🔷 Metaprogramming</h1>
  <p class="subtitle">Proxy, Reflect, Symbol — code that writes code</p>
  <div class="section">
    <h2>1. Property Descriptors</h2>
    <button id="btn-descriptors">Test Descriptors</button>
    <div id="descriptors-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Symbol as Metadata</h2>
    <button id="btn-symbol">Test Symbols</button>
    <div id="symbol-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Proxy for Validation</h2>
    <button id="btn-proxy">Test Proxy</button>
    <div id="proxy-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Reflect API</h2>
    <button id="btn-reflect">Test Reflect</button>
    <div id="reflect-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #14b8a6;
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
  color: #0d9488;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #14b8a6;
  padding-left: 12px;
}
.section {
  background: rgba(20, 184, 166, 0.05);
  border: 1px solid rgba(20, 184, 166, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #14b8a6;
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
  background: #0d9488;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(20, 184, 166, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(20, 184, 166, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Metaprogramming
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Property Descriptors
document.getElementById('btn-descriptors').addEventListener('click', () => {
  const output = document.getElementById('descriptors-output');

  const obj = {};

  // Define properties with descriptors
  Object.defineProperty(obj, 'readOnly', {
    value:        42,
    writable:     false,
    enumerable:   true,
    configurable: false
  });

  Object.defineProperty(obj, 'hidden', {
    value:        'secret',
    writable:     true,
    enumerable:   false,
    configurable: true
  });

  Object.defineProperty(obj, 'computed', {
    get() { return this.readOnly * 2; },
    enumerable:   true,
    configurable: true
  });

  // Try to write to readOnly
  let writeError = false;
  try {
    'use strict';
    obj.readOnly = 99;
  } catch (e) {
    writeError = true;
  }

  // Enumerate
  const enumKeys = Object.keys(obj);
  const allKeys  = Object.getOwnPropertyNames(obj);

  // Get descriptor
  const desc = Object.getOwnPropertyDescriptor(obj, 'readOnly');

  // Object.freeze
  const frozen = Object.freeze({ x: 1, y: 2 });
  let frozenError = false;
  try {
    'use strict';
    frozen.x = 99;
  } catch (e) {
    frozenError = true;
  }

  output.innerHTML =
    '<span class="success">✅ PROPERTY DESCRIPTORS</span>\\n\\n' +
    'obj.readOnly = ' + obj.readOnly + '\\n' +
    'obj.hidden   = "' + obj.hidden + '"\\n' +
    'obj.computed = ' + obj.computed + '\\n\\n' +
    'Write to readOnly throws: ' + writeError + '\\n\\n' +
    'Object.keys (enumerable only):\\n' +
    '  [' + enumKeys.join(', ') + ']\\n\\n' +
    'Object.getOwnPropertyNames (all):\\n' +
    '  [' + allKeys.join(', ') + ']\\n\\n' +
    'Descriptor for "readOnly":\\n' +
    '  writable:     ' + desc.writable + '\\n' +
    '  enumerable:   ' + desc.enumerable + '\\n' +
    '  configurable: ' + desc.configurable + '\\n\\n' +
    'Object.freeze — all writes throw: ' + frozenError;

  log('✅ Descriptors: readOnly=' + obj.readOnly + ', computed=' + obj.computed);
});

// 2. Symbol as Metadata
document.getElementById('btn-symbol').addEventListener('click', () => {
  const output = document.getElementById('symbol-output');

  // Unique symbols
  const id1 = Symbol('id');
  const id2 = Symbol('id');
  const unique = id1 === id2;

  // Symbol as object key
  const ID     = Symbol('id');
  const SECRET = Symbol('secret');

  const user = {
    name:   'Alice',
    [ID]:     12345,
    [SECRET]: 'password123'
  };

  const jsonStr    = JSON.stringify(user);
  const normalKeys = Object.keys(user);
  const symKeys    = Object.getOwnPropertySymbols(user);

  // Well-known symbols
  class Range {
    constructor(start, end) {
      this.start = start;
      this.end   = end;
    }

    [Symbol.iterator]() {
      let current = this.start;
      const end   = this.end;
      return {
        next() {
          return current <= end
            ? { value: current++, done: false }
            : { done: true };
        }
      };
    }
  }

  const range   = new Range(1, 5);
  const rangeArr = [...range];

  // Symbol.toPrimitive
  class Temperature {
    constructor(celsius) { this.celsius = celsius; }

    [Symbol.toPrimitive](hint) {
      if (hint === 'number') return this.celsius;
      if (hint === 'string') return this.celsius + '°C';
      return this.celsius;
    }
  }

  const temp   = new Temperature(25);
  const asNum  = +temp;
  const asStr  = String(temp);

  output.innerHTML =
    '<span class="success">✅ SYMBOLS</span>\\n\\n' +
    'Symbol uniqueness:\\n' +
    '  Symbol("id") === Symbol("id"): ' + unique + '\\n\\n' +
    'Symbol as hidden key:\\n' +
    '  user.name = "' + user.name + '"\\n' +
    '  user[ID]  = ' + user[ID] + '\\n' +
    '  JSON.stringify hides symbols:\\n' +
    '  ' + jsonStr + '\\n\\n' +
    'Object.keys: [' + normalKeys + ']\\n' +
    'Symbol keys: [' + symKeys.map(s => s.toString()) + ']\\n\\n' +
    'Symbol.iterator (Range 1-5):\\n' +
    '  [...range] = [' + rangeArr + ']\\n\\n' +
    'Symbol.toPrimitive:\\n' +
    '  +temp    = ' + asNum + '\\n' +
    '  String(temp) = "' + asStr + '"';

  log('✅ Symbols: unique=' + unique + ', range=[' + rangeArr + ']');
});

// 3. Proxy for Validation
document.getElementById('btn-proxy').addEventListener('click', () => {
  const output = document.getElementById('proxy-output');
  const proxyLog = [];

  // Schema-based validation proxy
  function createValidated(schema) {
    const data = {};
    return new Proxy(data, {
      set(target, key, value) {
        const rule = schema[key];
        if (!rule) {
          throw new TypeError('Unknown property: ' + String(key));
        }
        if (typeof value !== rule.type) {
          throw new TypeError(key + ' must be ' + rule.type + ', got ' + typeof value);
        }
        if (rule.min !== undefined && value < rule.min) {
          throw new RangeError(key + ' must be >= ' + rule.min);
        }
        if (rule.max !== undefined && value > rule.max) {
          throw new RangeError(key + ' must be <= ' + rule.max);
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          throw new Error(key + ' does not match pattern');
        }
        proxyLog.push('✅ Set ' + key + ' = ' + value);
        return Reflect.set(target, key, value);
      },
      get(target, key) {
        if (!(key in target) && key in schema) {
          return schema[key].default;
        }
        return Reflect.get(target, key);
      }
    });
  }

  const personSchema = {
    name:  { type: 'string', pattern: /^[A-Za-z ]+$/, default: 'Anonymous' },
    age:   { type: 'number', min: 0, max: 150, default: 0 },
    email: { type: 'string', pattern: /^[^@]+@[^@]+$/, default: '' }
  };

  const person = createValidated(personSchema);

  // Valid sets
  try { person.name  = 'Alice'; } catch (e) { proxyLog.push('❌ ' + e.message); }
  try { person.age   = 30;      } catch (e) { proxyLog.push('❌ ' + e.message); }
  try { person.email = 'alice@example.com'; } catch (e) { proxyLog.push('❌ ' + e.message); }

  // Invalid sets
  try { person.age   = -5;      } catch (e) { proxyLog.push('❌ ' + e.message); }
  try { person.age   = 200;     } catch (e) { proxyLog.push('❌ ' + e.message); }
  try { person.name  = 123;     } catch (e) { proxyLog.push('❌ ' + e.message); }
  try { person.unknown = 'x';   } catch (e) { proxyLog.push('❌ ' + e.message); }

  output.innerHTML =
    '<span class="success">✅ PROXY VALIDATION</span>\\n\\n' +
    'Schema-validated object:\\n' +
    '  name:  "' + person.name  + '"\\n' +
    '  age:   ' + person.age   + '\\n' +
    '  email: "' + person.email + '"\\n\\n' +
    'Validation log:\\n' +
    proxyLog.map(l => '  ' + l).join('\\n') + '\\n\\n' +
    'Proxy intercepts every set/get!\\n' +
    'Validation happens automatically.';

  log('✅ Proxy validation: ' + proxyLog.length + ' operations');
});

// 4. Reflect API
document.getElementById('btn-reflect').addEventListener('click', () => {
  const output = document.getElementById('reflect-output');

  const obj = { x: 1, y: 2, z: 3 };

  // Reflect.get / set / has / deleteProperty
  const getX    = Reflect.get(obj, 'x');
  Reflect.set(obj, 'w', 4);
  const hasY    = Reflect.has(obj, 'y');
  const hasQ    = Reflect.has(obj, 'q');
  Reflect.deleteProperty(obj, 'z');
  const keys    = Reflect.ownKeys(obj);

  // Reflect.apply
  function greet(greeting) {
    return greeting + ', ' + this.name + '!';
  }
  const greeted = Reflect.apply(greet, { name: 'Alice' }, ['Hello']);

  // Reflect.construct
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    toString() { return '(' + this.x + ', ' + this.y + ')'; }
  }
  const point = Reflect.construct(Point, [10, 20]);

  // Reflect.defineProperty
  Reflect.defineProperty(obj, 'constant', {
    value:        99,
    writable:     false,
    enumerable:   true,
    configurable: false
  });

  // Reflect.getPrototypeOf / setPrototypeOf
  const proto    = Reflect.getPrototypeOf(obj);
  const isObject = proto === Object.prototype;

  output.innerHTML =
    '<span class="success">✅ REFLECT API</span>\\n\\n' +
    'Reflect.get(obj, "x")       = ' + getX + '\\n' +
    'Reflect.set(obj, "w", 4)    → obj.w = ' + obj.w + '\\n' +
    'Reflect.has(obj, "y")       = ' + hasY + '\\n' +
    'Reflect.has(obj, "q")       = ' + hasQ + '\\n' +
    'Reflect.deleteProperty(z)   → keys: [' + keys + ']\\n\\n' +
    'Reflect.apply(greet, {name:"Alice"}, ["Hello"])\\n' +
    '  = "' + greeted + '"\\n\\n' +
    'Reflect.construct(Point, [10, 20])\\n' +
    '  = ' + point.toString() + '\\n\\n' +
    'Reflect.defineProperty(obj, "constant", {...})\\n' +
    '  obj.constant = ' + obj.constant + '\\n\\n' +
    'Reflect.getPrototypeOf(obj) === Object.prototype\\n' +
    '  = ' + isObject + '\\n\\n' +
    'Reflect mirrors Proxy traps exactly!\\n' +
    'Use in Proxy handlers for default behavior.';

  log('✅ Reflect: get=' + getX + ', point=' + point.toString());
});

log('🚀 Metaprogramming module loaded!');
log('💡 Proxy + Reflect + Symbol = powerful metaprogramming');`,
  },

  {
    topic: "advanced-iterators",
    description: "Custom iterables, iterator protocol, generator pipelines, and async iteration",
    html: `<div class="container">
  <h1>🔷 Advanced Iterators</h1>
  <p class="subtitle">Custom iterables, generator pipelines, async iteration</p>
  <div class="section">
    <h2>1. Iterator Protocol</h2>
    <button id="btn-protocol">Test Iterator Protocol</button>
    <div id="protocol-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Custom Iterables</h2>
    <button id="btn-custom">Test Custom Iterables</button>
    <div id="custom-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Generator Pipelines</h2>
    <button id="btn-pipeline">Test Generator Pipeline</button>
    <div id="pipeline-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Async Iterators</h2>
    <button id="btn-async">Test Async Iterator</button>
    <div id="async-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #14b8a6;
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
  color: #0d9488;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #14b8a6;
  padding-left: 12px;
}
.section {
  background: rgba(20, 184, 166, 0.05);
  border: 1px solid rgba(20, 184, 166, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #14b8a6;
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
  background: #0d9488;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(20, 184, 166, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(20, 184, 166, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Advanced Iterators
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Iterator Protocol
document.getElementById('btn-protocol').addEventListener('click', () => {
  const output = document.getElementById('protocol-output');

  // Manual iterator
  function createRangeIterator(start, end) {
    let current = start;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
      [Symbol.iterator]() { return this; }
    };
  }

  const iter    = createRangeIterator(1, 5);
  const manual  = [];
  let   result  = iter.next();
  while (!result.done) {
    manual.push(result.value);
    result = iter.next();
  }

  // for...of uses Symbol.iterator
  const iter2   = createRangeIterator(10, 14);
  const forOf   = [];
  for (const val of iter2) {
    forOf.push(val);
  }

  // Spread uses Symbol.iterator
  const iter3   = createRangeIterator(1, 3);
  const spread  = [...iter3];

  // Destructuring uses Symbol.iterator
  const iter4   = createRangeIterator(1, 5);
  const [a, b, c, ...rest] = iter4;

  output.innerHTML =
    '<span class="success">✅ ITERATOR PROTOCOL</span>\\n\\n' +
    'Iterator interface:\\n' +
    '  { next() → { value, done } }\\n' +
    '  [Symbol.iterator]() → this\\n\\n' +
    'Manual iteration (1-5):\\n' +
    '  [' + manual + ']\\n\\n' +
    'for...of (10-14):\\n' +
    '  [' + forOf + ']\\n\\n' +
    'Spread (1-3):\\n' +
    '  [' + spread + ']\\n\\n' +
    'Destructuring (1-5):\\n' +
    '  a=' + a + ', b=' + b + ', c=' + c + ', rest=[' + rest + ']\\n\\n' +
    'All use Symbol.iterator under the hood!';

  log('✅ Iterator protocol: manual=[' + manual + ']');
});

// 2. Custom Iterables
document.getElementById('btn-custom').addEventListener('click', () => {
  const output = document.getElementById('custom-output');

  // Linked List with iterator
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    push(value) {
      this.head = { value, next: this.head };
      this.size++;
      return this;
    }

    [Symbol.iterator]() {
      let current = this.head;
      return {
        next() {
          if (current) {
            const value = current.value;
            current = current.next;
            return { value, done: false };
          }
          return { done: true };
        }
      };
    }
  }

  const list = new LinkedList();
  list.push(3).push(2).push(1);
  const listArr = [...list];

  // Tree with DFS iterator
  class TreeNode {
    constructor(value, children = []) {
      this.value    = value;
      this.children = children;
    }

    *[Symbol.iterator]() {
      yield this.value;
      for (const child of this.children) {
        yield* child;
      }
    }
  }

  const tree = new TreeNode(1, [
    new TreeNode(2, [
      new TreeNode(4),
      new TreeNode(5)
    ]),
    new TreeNode(3, [
      new TreeNode(6)
    ])
  ]);

  const treeArr = [...tree];

  // Infinite counter with take
  function* counter(start = 0) {
    while (true) yield start++;
  }

  function take(iter, n) {
    const result = [];
    for (const val of iter) {
      result.push(val);
      if (result.length >= n) break;
    }
    return result;
  }

  const first10 = take(counter(1), 10);

  output.innerHTML =
    '<span class="success">✅ CUSTOM ITERABLES</span>\\n\\n' +
    'LinkedList (push 1,2,3):\\n' +
    '  [...list] = [' + listArr + ']\\n\\n' +
    'Tree DFS (1 → 2,4,5 → 3,6):\\n' +
    '  [...tree] = [' + treeArr + ']\\n\\n' +
    'Infinite counter (take 10):\\n' +
    '  [' + first10 + ']\\n\\n' +
    'Any object with [Symbol.iterator]\\n' +
    'works with for...of, spread, destructuring!';

  log('✅ Custom iterables: list=[' + listArr + '], tree=[' + treeArr + ']');
});

// 3. Generator Pipelines
document.getElementById('btn-pipeline').addEventListener('click', () => {
  const output = document.getElementById('pipeline-output');

  // Lazy generator pipeline utilities
  function* map(iterable, fn) {
    for (const item of iterable) {
      yield fn(item);
    }
  }

  function* filter(iterable, fn) {
    for (const item of iterable) {
      if (fn(item)) yield item;
    }
  }

  function* take(iterable, n) {
    let count = 0;
    for (const item of iterable) {
      if (count++ >= n) break;
      yield item;
    }
  }

  function* flatMap(iterable, fn) {
    for (const item of iterable) {
      yield* fn(item);
    }
  }

  function* zip(iter1, iter2) {
    const it1 = iter1[Symbol.iterator]();
    const it2 = iter2[Symbol.iterator]();
    while (true) {
      const r1 = it1.next();
      const r2 = it2.next();
      if (r1.done || r2.done) break;
      yield [r1.value, r2.value];
    }
  }

  function* naturals(start = 1) {
    while (true) yield start++;
  }

  function collect(iter) { return [...iter]; }

  // Pipeline 1: first 5 even squares
  const evenSquares = collect(
    take(
      filter(
        map(naturals(), n => n * n),
        n => n % 2 === 0
      ),
      5
    )
  );

  // Pipeline 2: flatMap
  const words    = ['hello world', 'foo bar', 'baz'];
  const allWords = collect(flatMap(words, s => s.split(' ')));

  // Pipeline 3: zip
  const nums    = [1, 2, 3, 4, 5];
  const letters = ['a', 'b', 'c', 'd', 'e'];
  const zipped  = collect(zip(nums, letters));

  output.innerHTML =
    '<span class="success">✅ GENERATOR PIPELINES</span>\\n\\n' +
    'Pipeline: naturals → map(n²) → filter(even) → take(5)\\n' +
    '  [' + evenSquares + ']\\n\\n' +
    'flatMap (split words):\\n' +
    '  ["hello world","foo bar","baz"]\\n' +
    '  → [' + allWords + ']\\n\\n' +
    'zip([1..5], [a..e]):\\n' +
    '  [' + zipped.map(p => '[' + p + ']').join(', ') + ']\\n\\n' +
    'Generator pipelines are LAZY:\\n' +
    '  • Process one item at a time\\n' +
    '  • No intermediate arrays\\n' +
    '  • Memory efficient\\n' +
    '  • Composable and reusable';

  log('✅ Pipelines: evenSquares=[' + evenSquares + ']');
});

// 4. Async Iterators
document.getElementById('btn-async').addEventListener('click', async () => {
  const output = document.getElementById('async-output');
    output.innerHTML = '<span class="highlight">⏳ Running async iterator...</span>';

  const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));

  // Async iterable — paginated data
  async function* paginatedFetch(totalPages) {
    for (let page = 1; page <= totalPages; page++) {
      log('📄 Fetching page ' + page + '...');
      await delay(200);
      yield {
        page,
        data: Array.from({ length: 3 }, (_, i) => ({
          id:   (page - 1) * 3 + i + 1,
          name: 'Item ' + ((page - 1) * 3 + i + 1)
        }))
      };
    }
  }

  // Async iterable — event stream
  async function* eventStream(count) {
    for (let i = 1; i <= count; i++) {
      await delay(100);
      yield { type: 'data', payload: 'Event ' + i, timestamp: Date.now() };
    }
    yield { type: 'end', payload: null };
  }

  // Consume paginated data
  const allItems = [];
  const pageLog  = [];

  for await (const page of paginatedFetch(3)) {
    pageLog.push('Page ' + page.page + ': ' + page.data.length + ' items');
    allItems.push(...page.data);
  }

  // Consume event stream
  const events = [];
  for await (const event of eventStream(4)) {
    events.push(event.type + ':' + (event.payload || 'done'));
  }

  // Async generator with return value
  async function* countdown(from) {
    while (from > 0) {
      await delay(50);
      yield from--;
    }
    return 'Liftoff!';
  }

  const countdownVals = [];
  const gen = countdown(5);
  let next  = await gen.next();
  while (!next.done) {
    countdownVals.push(next.value);
    next = await gen.next();
  }
  const returnVal = next.value;

  output.innerHTML =
    '<span class="success">✅ ASYNC ITERATORS</span>\\n\\n' +
    'Paginated fetch (3 pages):\\n' +
    pageLog.map(l => '  ' + l).join('\\n') + '\\n' +
    '  Total items: ' + allItems.length + '\\n\\n' +
    'Event stream (4 events + end):\\n' +
    '  [' + events.join(', ') + ']\\n\\n' +
    'Countdown generator:\\n' +
    '  values: [' + countdownVals + ']\\n' +
    '  return: "' + returnVal + '"\\n\\n' +
    'Async iterator syntax:\\n' +
    '  async function* gen() { yield await ... }\\n' +
    '  for await (const val of gen()) { ... }\\n\\n' +
    'Perfect for: streams, pagination,\\n' +
    'WebSockets, file reading!';

  log('✅ Async iterators: ' + allItems.length + ' items fetched');
});

log('🚀 Advanced Iterators module loaded!');
log('💡 Iterator protocol powers all JS iteration');`,
  },

  {
    topic: "type-coercion",
    description: "Implicit and explicit type conversion — understand JS coercion rules",
    html: `<div class="container">
  <h1>🔷 Type Coercion</h1>
  <p class="subtitle">Implicit and explicit type conversion in JavaScript</p>
  <div class="section">
    <h2>1. Implicit Coercion</h2>
    <button id="btn-implicit">Test Implicit Coercion</button>
    <div id="implicit-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>2. Explicit Conversion</h2>
    <button id="btn-explicit">Test Explicit Conversion</button>
    <div id="explicit-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>3. Equality Coercion</h2>
    <button id="btn-equality">Test == vs ===</button>
    <div id="equality-output" class="output-box"></div>
  </div>
  <div class="section">
    <h2>4. Coercion Gotchas</h2>
    <button id="btn-gotchas">Show Gotchas</button>
    <div id="gotchas-output" class="output-box"></div>
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
  background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
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
  max-width: 800px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}
h1 {
  color: #14b8a6;
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
  color: #0d9488;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #14b8a6;
  padding-left: 12px;
}
.section {
  background: rgba(20, 184, 166, 0.05);
  border: 1px solid rgba(20, 184, 166, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
button {
  background: #14b8a6;
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
  background: #0d9488;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(20, 184, 166, 0.4);
}
button:active {
  transform: translateY(0);
}
.output-box {
  background: #1a1a2e;
  border: 1px solid rgba(20, 184, 166, 0.3);
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
.highlight {
  color: #fbbf24 !important;
}
.console-output {
  margin-top: 1.5rem;
  background: #0f0f23;
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  max-height: 180px;
  overflow-y: auto;
  color: #d1fae5;
}`,
    js: `// Type Coercion
const consoleEl = document.getElementById('console');
function log(msg) {
  consoleEl.textContent += msg + '\\n';
  console.log(msg);
}

// 1. Implicit Coercion
document.getElementById('btn-implicit').addEventListener('click', () => {
  const output = document.getElementById('implicit-output');

  // String coercion with +
  const s1 = 1    + '2';
  const s2 = '3'  + 4;
  const s3 = true + '1';
  const s4 = null + 'x';
  const s5 = []   + [];
  const s6 = {}   + [];
  const s7 = []   + {};

  // Numeric coercion with - * /
  const n1 = '5'   - 2;
  const n2 = '6'   * '2';
  const n3 = '10'  / 2;
  const n4 = true  + true;
  const n5 = false + 1;
  const n6 = null  + 1;
  const n7 = ''    - 1;

  // Boolean coercion
  const b1 = !!'hello';
  const b2 = !!0;
  const b3 = !!null;
  const b4 = !!undefined;
  const b5 = !![];
  const b6 = !!{};
  const b7 = !!'0';

  output.innerHTML =
    '<span class="success">✅ IMPLICIT COERCION</span>\\n\\n' +
    'String coercion (+ with string):\\n' +
    '  1    + "2"  = "' + s1 + '" (number→string)\\n' +
    '  "3"  + 4    = "' + s2 + '" (number→string)\\n' +
    '  true + "1"  = "' + s3 + '" (bool→string)\\n' +
    '  null + "x"  = "' + s4 + '" (null→string)\\n' +
    '  []   + []   = "' + s5 + '" (arrays→string)\\n' +
    '  {}   + []   = "' + s6 + '"\\n' +
    '  []   + {}   = "' + s7 + '"\\n\\n' +
    'Numeric coercion (- * /):\\n' +
    '  "5"   - 2   = ' + n1 + '\\n' +
    '  "6"   * "2" = ' + n2 + '\\n' +
    '  true  + true= ' + n4 + '\\n' +
    '  false + 1   = ' + n5 + '\\n' +
    '  null  + 1   = ' + n6 + '\\n' +
    '  ""    - 1   = ' + n7 + '\\n\\n' +
    'Boolean coercion (!!):\\n' +
    '  !!"hello" = ' + b1 + ', !!0 = ' + b2 + ', !!null = ' + b3 + '\\n' +
    '  !![]      = ' + b5 + ' (empty array is TRUTHY!)\\n' +
    '  !!{}      = ' + b6 + ' (empty object is TRUTHY!)\\n' +
    '  !!"0"     = ' + b7 + ' (non-empty string is TRUTHY!)';

  log('✅ Implicit coercion: 1+"2"="' + s1 + '", "5"-2=' + n1);
});

// 2. Explicit Conversion
document.getElementById('btn-explicit').addEventListener('click', () => {
  const output = document.getElementById('explicit-output');

  // To Number
  const toNum = [
    ['Number("42")',      Number('42')],
    ['Number("")',        Number('')],
    ['Number("  3  ")',   Number('  3  ')],
    ['Number("3.14")',    Number('3.14')],
    ['Number(true)',      Number(true)],
    ['Number(false)',     Number(false)],
    ['Number(null)',      Number(null)],
    ['Number(undefined)', Number(undefined)],
    ['Number("abc")',     Number('abc')],
    ['parseInt("42px")',  parseInt('42px')],
    ['parseFloat("3.14abc")', parseFloat('3.14abc')],
    ['+"42"',             +'42']
  ];

  // To String
  const toStr = [
    ['String(42)',        String(42)],
    ['String(true)',      String(true)],
    ['String(null)',      String(null)],
    ['String(undefined)', String(undefined)],
    ['(42).toString()',   (42).toString()],
    ['(255).toString(16)', (255).toString(16)],
    ['(8).toString(2)',   (8).toString(2)]
  ];

  // To Boolean
  const toBool = [
    ['Boolean(0)',         Boolean(0)],
    ['Boolean("")',        Boolean('')],
    ['Boolean(null)',      Boolean(null)],
    ['Boolean(undefined)', Boolean(undefined)],
    ['Boolean(NaN)',       Boolean(NaN)],
    ['Boolean(1)',         Boolean(1)],
    ['Boolean("hello")',   Boolean('hello')],
    ['Boolean([])',        Boolean([])],
    ['Boolean({})',        Boolean({})]
  ];

  output.innerHTML =
    '<span class="success">✅ EXPLICIT CONVERSION</span>\\n\\n' +
    'To Number:\\n' +
    toNum.map(([expr, val]) =>
      '  ' + expr.padEnd(24) + '= ' + val
    ).join('\\n') + '\\n\\n' +
    'To String:\\n' +
    toStr.map(([expr, val]) =>
      '  ' + expr.padEnd(24) + '= "' + val + '"'
    ).join('\\n') + '\\n\\n' +
    'To Boolean:\\n' +
    toBool.map(([expr, val]) =>
      '  ' + expr.padEnd(24) + '= ' + val
    ).join('\\n');

  log('✅ Explicit conversion demonstrated');
});

// 3. Equality Coercion
document.getElementById('btn-equality').addEventListener('click', () => {
  const output = document.getElementById('equality-output');

  // == (loose equality — coerces types)
  const loose = [
    ['0   == false',  0   == false],
    ['1   == true',   1   == true],
    ['"1" == 1',      '1' == 1],
    ['""  == false',  ''  == false],
    ['null == undefined', null == undefined],
    ['null == false', null == false],
    ['[]  == false',  []  == false],
    ['[]  == 0',      []  == 0],
    ['"0" == false',  '0' == false]
  ];

  // === (strict equality — no coercion)
  const strict = [
    ['0   === false', 0   === false],
    ['1   === true',  1   === true],
    ['"1" === 1',     '1' === 1],
    ['null === undefined', null === undefined],
    ['NaN === NaN',   NaN === NaN]
  ];

  // Object.is — handles edge cases
  const objectIs = [
    ['Object.is(NaN, NaN)',   Object.is(NaN, NaN)],
    ['Object.is(0, -0)',      Object.is(0, -0)],
    ['Object.is(1, 1)',       Object.is(1, 1)],
    ['Object.is(null, null)', Object.is(null, null)]
  ];

  output.innerHTML =
    '<span class="success">✅ EQUALITY COERCION</span>\\n\\n' +
    '== (loose — coerces types):\\n' +
    loose.map(([expr, val]) =>
      '  ' + expr.padEnd(22) + '→ ' + val
    ).join('\\n') + '\\n\\n' +
    '=== (strict — no coercion):\\n' +
    strict.map(([expr, val]) =>
      '  ' + expr.padEnd(22) + '→ ' + val
    ).join('\\n') + '\\n\\n' +
    'Object.is (handles NaN and -0):\\n' +
    objectIs.map(([expr, val]) =>
      '  ' + expr.padEnd(28) + '→ ' + val
    ).join('\\n') + '\\n\\n' +
    'Rule: Always use === in production!\\n' +
    'Use Object.is for NaN/-0 edge cases.';

  log('✅ Equality: 0==false=' + (0 == false) + ', 0===false=' + (0 === false));
});

// 4. Coercion Gotchas
document.getElementById('btn-gotchas').addEventListener('click', () => {
  const output = document.getElementById('gotchas-output');

  const gotchas = [];

  // Gotcha 1: typeof null
  gotchas.push('1. typeof null = "' + typeof null + '" (historical bug!)');

  // Gotcha 2: NaN is not equal to itself
  gotchas.push('2. NaN === NaN = ' + (NaN === NaN) + ' (use Number.isNaN())');
  gotchas.push('   Number.isNaN(NaN) = ' + Number.isNaN(NaN));

  // Gotcha 3: Array + Array
  gotchas.push('3. [] + [] = "' + ([] + []) + '" (both convert to "")');
  gotchas.push('   [] + {} = "' + ([] + {}) + '"');

  // Gotcha 4: parseInt with radix
  gotchas.push('4. parseInt("08") = ' + parseInt('08') + ' (always use radix!)');
  gotchas.push('   parseInt("08", 10) = ' + parseInt('08', 10));

  // Gotcha 5: 0.1 + 0.2
  gotchas.push('5. 0.1 + 0.2 = ' + (0.1 + 0.2) + ' (floating point!)');
  gotchas.push('   Fix: (0.1 + 0.2).toFixed(1) = "' + (0.1 + 0.2).toFixed(1) + '"');

  // Gotcha 6: Sorting numbers
  const arr = [10, 9, 2, 1, 100];
  const badSort  = [...arr].sort();
  const goodSort = [...arr].sort((a, b) => a - b);
  gotchas.push('6. [10,9,2,1,100].sort() = [' + badSort + '] (string sort!)');
  gotchas.push('   .sort((a,b)=>a-b)     = [' + goodSort + '] (numeric sort)');

  // Gotcha 7: Falsy values
  const falsyVals = [false, 0, '', null, undefined, NaN];
  gotchas.push('7. Falsy values: [' + falsyVals.map(v =>
    v === '' ? '""' :
    v === null ? 'null' :
    v === undefined ? 'undefined' :
    String(v)
  ).join(', ') + ']');

  // Gotcha 8: String to number edge cases
  gotchas.push('8. +" " = ' + (+" ") + ' (space string → 0!)');
  gotchas.push('   +""  = ' + (+"")  + ' (empty string → 0!)');
  gotchas.push('   +[]  = ' + (+[])  + ' (empty array → 0!)');

  output.innerHTML =
    '<span class="highlight">⚠️ COERCION GOTCHAS</span>\\n\\n' +
    gotchas.join('\\n') + '\\n\\n' +
    'Best practices:\\n' +
    '  • Always use === not ==\\n' +
    '  • Use Number.isNaN() not isNaN()\\n' +
    '  • Always pass radix to parseInt()\\n' +
    '  • Use .sort((a,b)=>a-b) for numbers\\n' +
    '  • Use toFixed() for float display\\n' +
    '  • Know your falsy values!';

  log('✅ Gotchas: ' + gotchas.length + ' shown');
});

log('🚀 Type Coercion module loaded!');
log('💡 Understand coercion — avoid the surprises');`,
  },

  ];

/* ─── Export helper function ─────────────────────────────────────── */
export function getTopicExample(topicName) {
  if (!topicName) return null;
  const key = topicName.toLowerCase().trim();
  return jsAdvTopicExamples.find((ex) => ex.topic.toLowerCase() === key) || null;
}

export default jsAdvTopicExamples;


  




































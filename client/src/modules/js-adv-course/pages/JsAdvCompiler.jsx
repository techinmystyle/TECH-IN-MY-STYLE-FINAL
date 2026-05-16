import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useDarkMode } from "../components/JsAdvNavbar";
import "../styles/JsAdvCompiler.css";

/* ─── Default starter code ──────────────────────────────────────── */
const DEFAULT = {
  html: `<!-- ✏️ Write your HTML here -->
<div id="app">
  <div class="hero">
    <div class="hero-badge">⚡ JS Advanced</div>
    <h1>Welcome to the <span class="accent">Playground</span></h1>
    <p class="hero-sub">
      Edit the HTML, CSS &amp; JavaScript tabs — see live results!
    </p>
    <div class="output-box" id="output">
      <span class="placeholder">Output will appear here…</span>
    </div>
    <div class="btn-row">
      <button class="btn-primary" onclick="runDemo()">▶ Run Demo</button>
      <button class="btn-ghost"   onclick="clearOutput()">✕ Clear</button>
    </div>
  </div>
</div>`,

  css: `/* 🎨 Write your CSS here */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, var(--surface-solid) 0%, var(--bg) 50%, var(--surface-solid) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(6, 182, 212, 0.18);
  border-radius: 20px;
  padding: 2.5rem 2.8rem;
  text-align: center;
  max-width: 500px;
  width: 100%;
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(6, 182, 212, 0.06);
}

.hero-badge {
  display: inline-block;
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: #06b6d4;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
}

h1 {
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 0.9rem;
}

.accent {
  background: linear-gradient(135deg, #06b6d4, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-sub {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  line-height: 1.65;
  margin-bottom: 1.6rem;
}

.output-box {
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(6, 182, 212, 0.12);
  border-radius: 10px;
  padding: 1rem 1.1rem;
  min-height: 90px;
  text-align: left;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.82rem;
  color: #06b6d4;
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.6;
}

.placeholder {
  color: rgba(255, 255, 255, 0.22);
  font-style: italic;
}

.btn-row {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.btn-primary, .btn-ghost {
  padding: 0.65rem 1.6rem;
  border: none;
  border-radius: 9px;
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.22s ease;
  letter-spacing: 0.02em;
}

.btn-primary {
  background: linear-gradient(135deg, #06b6d4, #0284c7);
  color: #1a1a2e;
  box-shadow: 0 4px 18px rgba(6, 182, 212, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(6, 182, 212, 0.5);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.75);
  transform: translateY(-2px);
}`,

  js: `// 🚀 JavaScript Advanced Playground
// Try writing your code here!

// Example: Closure Factory
const createCounter = (start = 0) => {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value:     () => count
  };
};

const counter = createCounter(5);
console.log('Counter:', counter.increment()); // 6
console.log('Counter:', counter.increment()); // 7

// Example: Promise Chain
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runDemo() {
  const output = document.getElementById('output');
  if (output) output.innerHTML = '';

  function log(msg, color = '#06b6d4') {
    console.log(msg);
    if (output) {
      const line       = document.createElement('div');
      line.style.cssText = \`color:\${color};margin:2px 0;\`;
      line.textContent   = '› ' + msg;
      output.appendChild(line);
    }
  }

  log('Starting async demo…');
  await delay(300);
  log('After 300 ms delay', '#60a5fa');

  const results = await Promise.all([
    Promise.resolve('Task 1 done'),
    Promise.resolve('Task 2 done'),
    delay(200).then(() => 'Task 3 done (delayed)')
  ]);

  results.forEach(r => log(r, '#a78bfa'));

  // Closure demo output
  log(\`Counter value after demo: \${counter.value()}\`, '#34d399');
  log('✓ All tasks complete!', '#22c55e');
}

function clearOutput() {
  const output = document.getElementById('output');
  if (output) output.innerHTML = '<span class="placeholder">Output cleared…</span>';
}

// Auto-run on load
runDemo();`,
};

/* ─── Tab definitions ────────────────────────────────────────────── */
const TABS = [
  {
    id:        "html",
    label:     "HTML",
    dotColor:  "#e34f26",
    monaco:    "html",
  },
  {
    id:        "css",
    label:     "CSS",
    dotColor:  "#264de4",
    monaco:    "css",
  },
  {
    id:        "js",
    label:     "JavaScript",
    dotColor:  "#06b6d4",
    monaco:    "javascript",
  },
];

/* ─── Component ──────────────────────────────────────────────────── */
export default function JsAdvCompiler() {
  const navigate       = useNavigate();
  const { dark, toggle } = useDarkMode();

  const [activeTab,    setActiveTab]    = useState("js");
  const [code,         setCode]         = useState({ ...DEFAULT });
  const [logs,         setLogs]         = useState([]);
  const [consoleOpen,  setConsoleOpen]  = useState(true);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [layout,       setLayout]       = useState("split"); // "split" | "editor" | "preview"

  const editorRef  = useRef(null);
  const previewRef = useRef(null);
  const consoleEnd = useRef(null);

  /* ── Receive postMessages from preview iframe ──────────────────── */
  useEffect(() => {
    function onMsg(e) {
      if (
        e.data &&
        typeof e.data === "object" &&
        e.data.type &&
        e.data.content !== undefined
      ) {
        setLogs((prev) => [
          ...prev,
          { type: e.data.type, content: e.data.content, ts: Date.now() },
        ]);
      }
    }
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  /* ── Auto-scroll console to bottom ────────────────────────────── */
  useEffect(() => {
    consoleEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  /* ── Run initial preview on mount ─────────────────────────────── */
  useEffect(() => {
    runPreview(DEFAULT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Re-trigger Monaco layout when layout mode changes ─────────── */
  useEffect(() => {
    const t = setTimeout(() => editorRef.current?.layout?.(), 140);
    return () => clearTimeout(t);
  }, [layout]);

  /* ─── Build combined HTML and inject into preview iframe ────────── */
  function runPreview(codeObj) {
    if (!previewRef.current) return;

    const safeJS = `
try {
  const _log  = console.log;
  const _err  = console.error;
  const _warn = console.warn;

  function _fmt(args) {
    return args.map(function(a) {
      if (a === null)      return 'null';
      if (a === undefined) return 'undefined';
      if (typeof a === 'object') {
        try { return JSON.stringify(a); } catch(_) { return String(a); }
      }
      return String(a);
    }).join(' ');
  }

  console.log = function() {
    var s = _fmt(Array.prototype.slice.call(arguments));
    window.parent.postMessage({ type: 'log',  content: s }, '*');
    _log.apply(console, arguments);
  };
  console.error = function() {
    var s = _fmt(Array.prototype.slice.call(arguments));
    window.parent.postMessage({ type: 'error', content: s }, '*');
    _err.apply(console, arguments);
  };
  console.warn = function() {
    var s = _fmt(Array.prototype.slice.call(arguments));
    window.parent.postMessage({ type: 'warn', content: s }, '*');
    _warn.apply(console, arguments);
  };

  ${codeObj.js}
} catch (e) {
  window.parent.postMessage({ type: 'error', content: 'JS Error: ' + e.message }, '*');
}`;

    previewRef.current.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${codeObj.css}</style>
</head>
<body>
  ${codeObj.html}
  <script>${safeJS.replace(/<\/script>/gi, "<\\/script>")}<\/script>
</body>
</html>`;
  }

  /* ─── Editor events ──────────────────────────────────────────────── */
  function onEditorMount(editor) {
    editorRef.current = editor;
  }

  function onEditorChange(val) {
    const updated = { ...code, [activeTab]: val ?? "" };
    setCode(updated);
    runPreview(updated);
  }

  function switchTab(id) {
    if (id === activeTab) return;
    // Persist current tab value from editor ref before switching
    if (editorRef.current) {
      setCode((prev) => ({
        ...prev,
        [activeTab]: editorRef.current.getValue(),
      }));
    }
    setActiveTab(id);
  }

  /* ─── Action handlers ────────────────────────────────────────────── */
  function handleRun() {
    const current = editorRef.current?.getValue() ?? code[activeTab];
    const updated = { ...code, [activeTab]: current };
    setCode(updated);
    runPreview(updated);
  }

  function handleReset() {
    if (!window.confirm("Reset all code to defaults? This cannot be undone."))
      return;
    setCode({ ...DEFAULT });
    setLogs([]);
    setTimeout(() => runPreview(DEFAULT), 50);
  }

  function handleCopy() {
    const current = editorRef.current?.getValue() ?? code[activeTab];
    navigator.clipboard
      .writeText(current)
      .then(() => {
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 2000);
      })
      .catch(() => {
        /* Fallback */
        const ta = document.createElement("textarea");
        ta.value = current;
        Object.assign(ta.style, {
          position: "fixed",
          opacity: "0",
          pointerEvents: "none",
        });
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
          document.execCommand("copy");
          setCopyFeedback(true);
          setTimeout(() => setCopyFeedback(false), 2000);
        } catch (_) {}
        document.body.removeChild(ta);
      });
  }

  function handleClearConsole() {
    setLogs([]);
  }

  function handleDownload() {
    const snapshot = editorRef.current
      ? { ...code, [activeTab]: editorRef.current.getValue() }
      : code;

    const full = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project — JS Advanced in My Style</title>
  <style>
${snapshot.css}
  </style>
</head>
<body>
${snapshot.html}
  <script>
${snapshot.js}
  <\/script>
</body>
</html>`;

    const blob = new Blob([full], { type: "text/html" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "my-js-project.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  /* ─── Derived values ─────────────────────────────────────────────── */
  const monacoTheme    = dark ? "vs-dark" : "light";
  const currentTabMeta = TABS.find((t) => t.id === activeTab);

  const gridClass = `compiler-grid compiler-grid--${layout}`;

  /* ─── Render ─────────────────────────────────────────────────────── */
  return (
    <div className={`compiler-page${dark ? " compiler-page--dark" : ""}`}>

      {/* ══════════════════════ HEADER ══════════════════════════════ */}
      <header className="compiler-header">

        {/* Left — Back + Logo + label */}
        <div className="compiler-header-left">
          <button
            className="compiler-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            title="Go back"
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <Link to="/js-adv-course/" className="compiler-logo" aria-label="JsAdvHome">
            <span className="compiler-logo-tag">&lt;/&gt;</span>
            <span className="compiler-logo-brand">
              JS<span className="compiler-logo-dot">.</span>ADV
            </span>
          </Link>

          <div className="compiler-header-divider" aria-hidden="true" />

          <div className="compiler-header-label">
            <svg
              width="13" height="13" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Playground
          </div>
        </div>

        {/* Center — Layout switcher */}
        <div className="compiler-header-center">
          <div className="compiler-layout-switch" role="group" aria-label="Layout">
            {[
              {
                id:    "editor",
                title: "Editor only",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
              },
              {
                id:    "split",
                title: "Split view",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="12" y1="3" x2="12" y2="21" />
                  </svg>
                ),
              },
              {
                id:    "preview",
                title: "Preview only",
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8"  y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
              },
            ].map(({ id, title, icon }) => (
              <button
                key={id}
                className={`compiler-layout-btn${layout === id ? " compiler-layout-btn--active" : ""}`}
                onClick={() => setLayout(id)}
                aria-label={title}
                title={title}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Right — Action buttons */}
        <div className="compiler-header-right">
          {/* Copy */}
          <button
            className="compiler-action-btn"
            onClick={handleCopy}
            title="Copy current tab's code"
            aria-label="Copy code"
          >
            {copyFeedback ? (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="compiler-btn-label">Copied!</span>
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                <span className="compiler-btn-label">Copy</span>
              </>
            )}
          </button>

          {/* Download */}
          <button
            className="compiler-action-btn"
            onClick={handleDownload}
            title="Download project as HTML file"
            aria-label="Download project"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="compiler-btn-label">Download</span>
          </button>

          {/* Run */}
          <button
            className="compiler-action-btn compiler-action-btn--run"
            onClick={handleRun}
            title="Run preview"
            aria-label="Run code"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span className="compiler-btn-label">Run</span>
          </button>

          {/* Reset */}
          <button
            className="compiler-action-btn compiler-action-btn--danger"
            onClick={handleReset}
            title="Reset all code to defaults"
            aria-label="Reset code"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
              <path d="M10 11v6" />
              <path d="M14 11v6" />
            </svg>
          </button>

          {/* Theme toggle */}
          <button
            className="compiler-action-btn compiler-action-btn--icon"
            onClick={toggle}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1"   x2="12" y2="3"   />
                <line x1="12" y1="21"  x2="12" y2="23"  />
                <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"  />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1"  y1="12" x2="3"  y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
                <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ══════════════════════ MAIN ════════════════════════════════ */}
      <main className="compiler-main">
        <div className={gridClass}>

          {/* ── EDITOR PANE ─────────────────────────────────────── */}
          {layout !== "preview" && (
            <section className="editor-pane" aria-label="Code editor">

              {/* Tab bar */}
              <div
                className="compiler-tabs-bar"
                role="tablist"
                aria-label="Language tabs"
              >
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`compiler-tab${activeTab === tab.id ? " compiler-tab--active" : ""}`}
                    style={{ "--tab-accent": tab.dotColor }}
                    onClick={() => switchTab(tab.id)}
                    title={`Edit ${tab.label}`}
                  >
                    <span
                      className="compiler-tab-dot"
                      style={{ background: tab.dotColor }}
                      aria-hidden="true"
                    />
                    {tab.label}
                  </button>
                ))}

                <div className="compiler-tabs-spacer" />

                <span
                  className="compiler-tabs-lang-badge"
                  style={{ color: currentTabMeta?.dotColor }}
                  aria-hidden="true"
                >
                  {currentTabMeta?.label}
                </span>
              </div>

              {/* Monaco editor */}
              <div className="compiler-editor-wrap">
                <Editor
                  height="100%"
                  language={currentTabMeta?.monaco ?? "javascript"}
                  value={code[activeTab]}
                  theme={monacoTheme}
                  onMount={onEditorMount}
                  onChange={onEditorChange}
                  options={{
                    minimap:                    { enabled: false },
                    fontSize:                   14,
                    fontFamily:                 '"JetBrains Mono","Fira Code",monospace',
                    fontLigatures:              true,
                    padding:                    { top: 16, bottom: 16 },
                    smoothScrolling:            true,
                    cursorSmoothCaretAnimation: "on",
                    formatOnPaste:              true,
                    formatOnType:               true,
                    autoClosingBrackets:        "always",
                    autoClosingQuotes:          "always",
                    autoIndent:                 "full",
                    scrollBeyondLastLine:        false,
                    wordWrap:                   "on",
                    automaticLayout:            true,
                    lineHeight:                 22,
                    renderLineHighlight:        "all",
                    bracketPairColorization:    { enabled: true },
                    suggest:                    { showIcons: true },
                    quickSuggestions:           true,
                    tabSize:                    2,
                    scrollbar: {
                      vertical:              "visible",
                      horizontal:            "visible",
                      verticalScrollbarSize:  8,
                      horizontalScrollbarSize: 8,
                    },
                  }}
                />
              </div>

              {/* ── Console panel ── */}
              <div
                className={`console-panel${consoleOpen ? " console-panel--open" : ""}`}
              >
                <div className="console-header">
                  <div className="console-header-title">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>
                    Console
                    {logs.length > 0 && (
                      <span className="console-log-count" aria-label={`${logs.length} messages`}>
                        {logs.length}
                      </span>
                    )}
                  </div>

                  <div className="console-header-actions">
                    <button
                      className="console-ctrl-btn"
                      onClick={handleClearConsole}
                      disabled={logs.length === 0}
                      title="Clear console"
                      aria-label="Clear console"
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                      </svg>
                      Clear
                    </button>

                    <button
                      className="console-ctrl-btn console-ctrl-btn--toggle"
                      onClick={() => setConsoleOpen((o) => !o)}
                      aria-expanded={consoleOpen}
                      aria-label={consoleOpen ? "Collapse console" : "Expand console"}
                      title={consoleOpen ? "Collapse" : "Expand"}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline
                          points={consoleOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {consoleOpen && (
                  <div
                    className="console-body"
                    role="log"
                    aria-live="polite"
                    aria-label="Console output"
                  >
                    {logs.length === 0 ? (
                      <div className="console-empty-msg">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="4 17 10 11 4 5" />
                          <line x1="12" y1="19" x2="20" y2="19" />
                        </svg>
                        <span>Console output will appear here…</span>
                      </div>
                    ) : (
                      logs.map((entry, i) => (
                        <div
                          key={i}
                          className={`log-line log-line--${entry.type}`}
                        >
                          <span className="log-icon" aria-hidden="true">
                            {entry.type === "error" && "✕"}
                            {entry.type === "warn"  && "⚠"}
                            {entry.type === "log"   && "›"}
                          </span>
                          <span className="log-type">
                            {entry.type.toUpperCase()}
                          </span>
                          <span className="log-msg">{entry.content}</span>
                        </div>
                      ))
                    )}
                    <div ref={consoleEnd} aria-hidden="true" />
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── PREVIEW PANE ────────────────────────────────────── */}
          {layout !== "editor" && (
            <section className="preview-pane" aria-label="Live preview">

              {/* Browser-chrome address bar */}
              <div className="preview-header">
                <div className="preview-dots" aria-hidden="true">
                  <span className="preview-dot preview-dot--red"    />
                  <span className="preview-dot preview-dot--yellow" />
                  <span className="preview-dot preview-dot--green"  />
                </div>

                <div className="preview-url" aria-label="Preview URL">
                  <svg width="10" height="10" viewBox="0 0 24 24"
                    fill="currentColor" aria-hidden="true">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  <span>preview — js-adv-in-my-style.app</span>
                </div>

                <div className="preview-header-actions">
                  <button
                    className="preview-action-btn"
                    onClick={handleRun}
                    title="Refresh preview"
                    aria-label="Refresh preview"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 4 23 10 17 10" />
                      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Live preview iframe */}
              <iframe
                ref={previewRef}
                className="preview-iframe"
                title="Live preview"
                sandbox="allow-scripts allow-same-origin allow-modals"
                aria-label="Live preview of your code"
              />
            </section>
          )}

        </div>
      </main>
    </div>
  );
}

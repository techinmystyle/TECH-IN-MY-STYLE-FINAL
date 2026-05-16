import { useState, useRef, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useDarkMode } from "../components/JsAdvNavbar";
import JsAdvTopicNavMenu from "../components/JsAdvTopicNavMenu";
import JsAdvTopicPageFooter from "../components/JsAdvTopicPageFooter";
import JsAdvTopicPagesData from "../data/JsAdvTopicPagesData";
import { JsAdvTopicsData } from "../data/JsAdvTopicsData";
import "../styles/JsAdvTopicPage.css";

/* ── Language tab config ─────────────────────────────────────────── */
const LANG_TABS = [
  { id: "html", label: "HTML", monaco: "html",       color: "#e34c26" },
  { id: "css",  label: "CSS",  monaco: "css",        color: "#264de4" },
  { id: "js",   label: "JS",   monaco: "javascript", color: "#f7df1e" },
];

export default function JsAdvTopicPage() {
  const { topic: topicId } = useParams();
  const navigate = useNavigate();
  const { dark } = useDarkMode();

  /* ── State ───────────────────────────────────────────────────── */
  const [navOpen, setNavOpen]         = useState(false);
  const [isLoading, setIsLoading]     = useState(true);
  const [fadeOut, setFadeOut]         = useState(false);
  const [activeTab, setActiveTab]     = useState("preview"); // "preview" | "console" | "theory"
  const [activeLang, setActiveLang]   = useState("js");      // "html" | "css" | "js"
  const [outputLogs, setOutputLogs]   = useState([]);
  const [copyLabel, setCopyLabel]     = useState("Copy");
  const [editorKey, setEditorKey]     = useState(0);

  /* ── Per-language editor content (live mirrors) ──────────────── */
  const htmlRef = useRef("");
  const cssRef  = useRef("");
  const jsRef   = useRef("");

  /* ── Refs ────────────────────────────────────────────────────── */
  const editorRef  = useRef(null);
  const previewRef = useRef(null); // combined output iframe
  const logsEndRef = useRef(null);

  /* ── Data ────────────────────────────────────────────────────── */
  const exampleData = Array.isArray(JsAdvTopicPagesData)
    ? JsAdvTopicPagesData.find((t) => t.topic === topicId)
    : null;

  const allTopics = JsAdvTopicsData?.modules?.flatMap((m) =>
    m.topics.map((t) => ({ ...t, category: m.title, catColor: m.color }))
  ) ?? [];
  const topicMeta = allTopics.find((t) => t.id === topicId) ?? null;

  const topicData = exampleData
    ? {
        ...topicMeta,
        description: exampleData.description || topicMeta?.description,
      }
    : topicMeta ?? null;

  /* ── Default code per language ───────────────────────────────── */
  const defaultHtml = exampleData?.html || `<!-- ${topicId} — HTML -->\n<div id="app">\n  <h1>Hello from ${topicId}</h1>\n</div>`;
  const defaultCss  = exampleData?.css  || `/* ${topicId} — CSS */\nbody { font-family: sans-serif; padding: 2rem; }`;
  const defaultJs   = exampleData?.js   || `// ${topicId} — JavaScript Advanced\nconsole.log('Hello from ${topicId}!');`;

  /* ── Seed refs when topic changes ───────────────────────────── */
  useEffect(() => {
    htmlRef.current = defaultHtml;
    cssRef.current  = defaultCss;
    jsRef.current   = defaultJs;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  /* ── Loading Overlay ─────────────────────────────────────────── */
  useEffect(() => {
    setIsLoading(true);
    setFadeOut(false);
    setOutputLogs([]);
    setActiveTab("preview");
    setActiveLang("js");
    setEditorKey((k) => k + 1);

    const fadeTimer   = setTimeout(() => setFadeOut(true),    950);
    const removeTimer = setTimeout(() => setIsLoading(false), 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [topicId]);

  /* ── postMessage listener (preview iframe → parent) ─────────── */
  useEffect(() => {
    function handleMsg(e) {
      if (e.data?.source === "js-adv-runner") {
        setOutputLogs((prev) => [
          ...prev,
          {
            type: e.data.type || "log",
            text: e.data.text ?? "",
            ts:   e.data.ts   || Date.now(),
          },
        ]);
      }
    }
    window.addEventListener("message", handleMsg);
    return () => window.removeEventListener("message", handleMsg);
  }, []);

  /* ── Auto-scroll console ─────────────────────────────────────── */
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [outputLogs]);

  /* ── Editor mount ────────────────────────────────────────────── */
  function handleEditorMount(editor) {
    editorRef.current = editor;
  }

  /* ── Get current value for active lang ──────────────────────── */
  function getCurrentCode() {
    return editorRef.current?.getValue() ?? getDefaultForLang(activeLang);
  }

  function getDefaultForLang(lang) {
    if (lang === "html") return defaultHtml;
    if (lang === "css")  return defaultCss;
    return defaultJs;
  }

  /* ── Save current editor value to the right ref ─────────────── */
  function saveCurrentLang() {
    const val = editorRef.current?.getValue();
    if (val === undefined) return;
    if (activeLang === "html") htmlRef.current = val;
    else if (activeLang === "css") cssRef.current = val;
    else jsRef.current = val;
  }

  /* ── Switch language tab ─────────────────────────────────────── */
  function switchLang(lang) {
    saveCurrentLang();
    setActiveLang(lang);
    // Monaco value update happens via key or setValue after mount
    setTimeout(() => {
      if (editorRef.current) {
        const val = lang === "html" ? htmlRef.current
                  : lang === "css"  ? cssRef.current
                  : jsRef.current;
        editorRef.current.setValue(val);
      }
    }, 0);
  }

  /* ── Build combined srcdoc and run ──────────────────────────── */
  function buildSrcdoc() {
    saveCurrentLang();
    const html = htmlRef.current || defaultHtml;
    const css  = cssRef.current  || defaultCss;
    const js   = jsRef.current   || defaultJs;

    /* Console intercept injected before user JS */
    const consoleShim = `
<script>
(function () {
  var _origLog   = console.log;
  var _origWarn  = console.warn;
  var _origError = console.error;
  function _ser(args) {
    return Array.prototype.slice.call(args).map(function(a){
      if (a === null)      return 'null';
      if (a === undefined) return 'undefined';
      if (typeof a === 'object') { try { return JSON.stringify(a,null,2); } catch(_){ return String(a); } }
      return String(a);
    }).join(' ');
  }
  console.log = function() {
    window.parent.postMessage({ source:'js-adv-runner', type:'log',   text:_ser(arguments), ts:Date.now() },'*');
    _origLog.apply(console, arguments);
  };
  console.warn = function() {
    window.parent.postMessage({ source:'js-adv-runner', type:'warn',  text:_ser(arguments), ts:Date.now() },'*');
    _origWarn.apply(console, arguments);
  };
  console.error = function() {
    window.parent.postMessage({ source:'js-adv-runner', type:'error', text:_ser(arguments), ts:Date.now() },'*');
    _origError.apply(console, arguments);
  };
  window.addEventListener('error', function(e){
    window.parent.postMessage({ source:'js-adv-runner', type:'error', text:'Uncaught: '+e.message, ts:Date.now() },'*');
  });
})();
<\/script>`;

    const safeJs = js.replace(/<\/script>/gi, "<\\/script>");

    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>${css}</style>
</head>
<body>
${html}
${consoleShim}
<script>
try {
${safeJs}
} catch(err) {
  window.parent.postMessage({ source:'js-adv-runner', type:'error', text:'RuntimeError: '+err.message, ts:Date.now() },'*');
}
<\/script>
</body>
</html>`;
  }

  /* ── Run: update preview iframe ──────────────────────────────── */
  function runCode() {
    setOutputLogs([]);
    setActiveTab("preview");
    if (previewRef.current) {
      previewRef.current.srcdoc = buildSrcdoc();
    }
  }

  /* ── Copy current editor content ─────────────────────────────── */
  const handleCopy = useCallback(async () => {
    const code = getCurrentCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel("Copied!");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      Object.assign(ta.style, { position: "fixed", opacity: "0", pointerEvents: "none" });
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      try { document.execCommand("copy"); setCopyLabel("Copied!"); } catch (err) { console.error("Copy failed", err); }
      document.body.removeChild(ta);
    }
    setTimeout(() => setCopyLabel("Copy"), 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLang]);

  /* ── Reset current language to default ──────────────────────── */
  function handleReset() {
    const def = getDefaultForLang(activeLang);
    if (activeLang === "html") htmlRef.current = def;
    else if (activeLang === "css") cssRef.current = def;
    else jsRef.current = def;
    if (editorRef.current) editorRef.current.setValue(def);
    setOutputLogs([]);
  }

  /* ── Download current file ───────────────────────────────────── */
  function handleDownload() {
    const code = getCurrentCode();
    const ext  = activeLang === "html" ? "html" : activeLang === "css" ? "css" : "js";
    const mime = activeLang === "html" ? "text/html" : activeLang === "css" ? "text/css" : "text/javascript";
    const blob = new Blob([code], { type: mime });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = `${topicId || "script"}.${ext}`; a.click();
    URL.revokeObjectURL(url);
  }

  /* ── Helpers ─────────────────────────────────────────────────── */
  function fmtTime(ts) {
    const d = new Date(ts);
    return [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map((n) => String(n).padStart(2, "0"))
      .join(":");
  }

  const monacoTheme = dark ? "vs-dark" : "light";
  const isMobile    = typeof window !== "undefined" && window.innerWidth < 768;
  const activeLangCfg = LANG_TABS.find((t) => t.id === activeLang);

  const DIFF_COLORS = { Beginner: "#22c55e", Intermediate: "#f59e0b", Advanced: "#ef4444" };
  const diffColor = DIFF_COLORS[topicData?.difficulty] ?? "#6b7280";

  /* ── Render ──────────────────────────────────────────────────── */
  return (
    <div className={`topic-page${dark ? " topic-page--dark" : ""}`}>

      {/* ══ Loading Overlay ══════════════════════════════════════ */}
      {isLoading && (
        <div className={`topic-loading-overlay${fadeOut ? " fade-out" : ""}`}>
          <div className="loading-logo-wrap">
            <div className="loading-spinner-ring" />
            <span className="loading-js-text">JS</span>
          </div>

          <div className="loading-topic-name">
            {topicData?.title || topicId}
          </div>

          <div className="loading-dots">
            <div className="loading-dot" />
            <div className="loading-dot" />
            <div className="loading-dot" />
          </div>

          <p className="loading-caption">Loading topic…</p>
        </div>
      )}

      {/* ══ Header ═══════════════════════════════════════════════ */}
      <header className="topic-page-header">
        <div className="topic-header-inner">

          {/* Back */}
          <button
            className="topic-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>

          {/* Title */}
          <h1 className="topic-header-title animate-topic-fade">
            JS ADVANCED IN MY STYLE
          </h1>

          {/* Hamburger */}
          <button
            className="topic-menu-trigger"
            onClick={() => setNavOpen(true)}
            aria-label="Open topic navigation"
            title="Browse all topics"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ══ Navigation Drawer ════════════════════════════════════ */}
      <JsAdvTopicNavMenu isOpen={navOpen} onClose={() => setNavOpen(false)} />

      {/* ══ Info Banner ══════════════════════════════════════════ */}
      <div className="topic-info-banner">
        <div className="topic-info-inner">
          <div className="topic-info-left">
            <span className="topic-info-title">
              {topicData?.title || topicId}
            </span>
            {topicData?.category && (
              <span className="topic-info-category">
                {topicData.category}
              </span>
            )}
          </div>
          <div className="topic-info-right">
            {topicData?.difficulty && (
              <span
                className="topic-difficulty-badge"
                style={{
                  background:   `${diffColor}22`,
                  color:        diffColor,
                  borderColor:  `${diffColor}55`,
                }}
              >
                {topicData.difficulty}
              </span>
            )}
            {topicData?.time && (
              <span className="topic-time-badge">
                <svg
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {topicData.time}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ══ Main Split Panels ════════════════════════════════════ */}
      <main className="topic-main">
        <div className="topic-panels-grid">

          {/* ── LEFT: Editor Panel ───────────────────────────── */}
          <div className="editor-panel">

            {/* Panel header with language tabs */}
            <div className="editor-panel-header">
              <div className="editor-lang-tabs">
                {LANG_TABS.map((lt) => (
                  <button
                    key={lt.id}
                    className={`editor-lang-tab${activeLang === lt.id ? " editor-lang-tab--active" : ""}`}
                    style={{ "--lang-color": lt.color }}
                    onClick={() => switchLang(lt.id)}
                  >
                    {lt.label}
                  </button>
                ))}
              </div>
              <div className="editor-panel-header-right">
                <span className="editor-label-text">Editable Code</span>
                <div className="editor-dots">
                  <div className="editor-dot red" />
                  <div className="editor-dot yellow" />
                  <div className="editor-dot green" />
                </div>
              </div>
            </div>

            {/* Monaco Editor */}
            <div className="editor-monaco-wrap">
              <Editor
                key={`${topicId}-${activeLang}-${editorKey}`}
                height="100%"
                language={activeLangCfg?.monaco || "javascript"}
                defaultValue={
                  activeLang === "html" ? defaultHtml
                  : activeLang === "css" ? defaultCss
                  : defaultJs
                }
                theme={monacoTheme}
                onMount={handleEditorMount}
                options={{
                  minimap:              { enabled: !isMobile },
                  fontSize:             isMobile ? 12 : 14,
                  fontFamily:           '"JetBrains Mono","Fira Code",monospace',
                  fontLigatures:        true,
                  scrollBeyondLastLine: false,
                  wordWrap:             "on",
                  lineNumbers:          "on",
                  automaticLayout:      true,
                  padding:              { top: 12, bottom: 12 },
                  scrollbar: {
                    vertical:              "visible",
                    horizontal:            "visible",
                    verticalScrollbarSize: isMobile ? 6 : 10,
                  },
                  bracketPairColorization: { enabled: true },
                  formatOnPaste:           true,
                  autoClosingBrackets:     "always",
                  autoClosingQuotes:       "always",
                  suggest:                 { showIcons: true },
                  quickSuggestions:        true,
                  tabSize:                 2,
                  renderLineHighlight:     "all",
                  smoothScrolling:         true,
                  cursorSmoothCaretAnimation: "on",
                }}
              />
            </div>

            {/* Action buttons */}
            <div className="editor-actions-bar">
              <button className="action-btn run" onClick={runCode}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Run
              </button>
              <button className="action-btn copy" onClick={handleCopy}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                {copyLabel}
              </button>
              <button className="action-btn reset" onClick={handleReset}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 101.85-4.36L1 10" />
                </svg>
                Reset
              </button>
              <button className="action-btn download" onClick={handleDownload}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                .{activeLang}
              </button>
            </div>
          </div>

          {/* ── RIGHT: Preview / Console / Theory Panel ──────── */}
          <div className="output-panel">

            {/* Tab switcher */}
            <div className="output-tabs" role="tablist">
              {/* Preview */}
              <button role="tab" aria-selected={activeTab === "preview"}
                className={`output-tab${activeTab === "preview" ? " output-tab--active" : ""}`}
                onClick={() => setActiveTab("preview")}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Preview
              </button>

              {/* Console */}
              <button role="tab" aria-selected={activeTab === "console"}
                className={`output-tab${activeTab === "console" ? " output-tab--active" : ""}`}
                onClick={() => setActiveTab("console")}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
                Console
                {outputLogs.length > 0 && (
                  <span className="output-tab-count">{outputLogs.length}</span>
                )}
              </button>

              {/* Theory */}
              <button role="tab" aria-selected={activeTab === "theory"}
                className={`output-tab${activeTab === "theory" ? " output-tab--active" : ""}`}
                onClick={() => setActiveTab("theory")}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
                Theory
              </button>

              <span className="output-run-hint" aria-hidden="true">
                {"\u2190"} Run to preview
              </span>
            </div>

            {/* ── Preview tab ── */}
            <div
              className={`output-tab-panel${activeTab === "preview" ? " output-tab-panel--visible" : ""}`}
              role="tabpanel" aria-label="Live preview">
              <div className="preview-wrap">
                <iframe
                  ref={previewRef}
                  title="js-adv-preview"
                  sandbox="allow-scripts"
                  className="preview-iframe"
                  aria-label="Combined HTML/CSS/JS preview"
                />
              </div>
            </div>

            {/* ── Console tab ── */}
            <div
              className={`output-tab-panel${activeTab === "console" ? " output-tab-panel--visible" : ""}`}
              role="tabpanel" aria-label="Console output">
              <div className="console-output" aria-live="polite">
                {outputLogs.length === 0 ? (
                  <div className="console-empty">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.4"
                      strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="4 17 10 11 4 5" />
                      <line x1="12" y1="19" x2="20" y2="19" />
                    </svg>
                    <p>Click <strong>Run</strong> to execute the code</p>
                    <span>console.log() output appears here</span>
                  </div>
                ) : (
                  <div className="console-lines">
                    {outputLogs.map((log, i) => (
                      <div key={i} className={`console-line console-line--${log.type}`}>
                        <span className="console-ts">{fmtTime(log.ts)}</span>
                        <span className="console-icon">
                          {log.type === "error" ? "\u2715" : log.type === "warn" ? "\u26a0" : "\u203a"}
                        </span>
                        <span className="console-text">{log.text}</span>
                      </div>
                    ))}
                    <div className="console-line console-line--done">
                      <span className="console-ts">{fmtTime(Date.now())}</span>
                      <span className="console-icon">{"\u2713"}</span>
                      <span className="console-text">
                        Script complete {"\u2014"} {outputLogs.length} output{outputLogs.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div ref={logsEndRef} />
                  </div>
                )}
              </div>
            </div>

            {/* ── Theory tab ── */}
            <div
              className={`output-tab-panel${activeTab === "theory" ? " output-tab-panel--visible" : ""}`}
              role="tabpanel" aria-label="Topic theory">
              <div className="theory-content">
                {topicData ? (
                  <>
                    <div className="theory-section">
                      <h3 className="theory-section-title">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Overview
                      </h3>
                      <p className="theory-description">{topicData.description}</p>
                    </div>

                    {Array.isArray(topicData.keyPoints) && topicData.keyPoints.length > 0 && (
                      <div className="theory-section">
                        <h3 className="theory-section-title">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                          </svg>
                          Key Points
                        </h3>
                        <ul className="keypoints-list">
                          {topicData.keyPoints.map((pt, i) => (
                            <li key={i} className="keypoint-item">
                              <span className="keypoint-bullet">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" strokeWidth="2.5"
                                  strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="theory-tip">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Press <strong>Run</strong> to see HTML + CSS + JS combined output.
                    </div>
                  </>
                ) : (
                  <div className="theory-empty">
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.4"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                    <p>No theory content for <strong>{topicId}</strong> yet.</p>
                    <span>Content is being added {"\u2014"} check back soon.</span>
                  </div>
                )}
              </div>
            </div>

          </div>{/* /output-panel */}
        </div>{/* /topic-panels-grid */}
      </main>

      {/* ══ Footer ═══════════════════════════════════════════════ */}
      <JsAdvTopicPageFooter currentTopicId={topicId} />
    </div>
  );
}

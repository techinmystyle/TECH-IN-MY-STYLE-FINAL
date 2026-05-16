import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import JsIntTopicNavMenu from "../components/JsIntTopicNavMenu";
import JsIntTopicPageFooter from "../components/JsIntTopicPageFooter";
import { jsIntTopicExamples } from "../data/jsIntTopicExamples";
import "../styles/JsIntTopicPage.css";

export default function JsIntTopicPage() {
  const { topic } = useParams();
  const navigate = useNavigate();

  /* ── State ─────────────────────────────────────────────────── */
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("html");
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  /* Editable code state for each tab */
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [previewKey, setPreviewKey] = useState(0);

  const editorRef = useRef(null);
  const iframeRef = useRef(null);

  /* ── Locate topic data ─────────────────────────────────────── */
  const topicData = jsIntTopicExamples.find(
    (t) => t.topic.toLowerCase() === (topic || "").toLowerCase(),
  );

  const defaultHtml = topicData?.html ?? `<!-- ${topic} -->\n<div id="output">\n  <h2>${topic}</h2>\n  <p>Interactive example</p>\n</div>`;
  const defaultCss = topicData?.css ?? `/* ${topic} styles */\n#output {\n  font-family: 'Segoe UI', sans-serif;\n  padding: 20px;\n}`;
  const defaultJs = topicData?.js ?? `// ${topic}\nconsole.log("Hello from ${topic}!");`;

  const rawDescription =
    topicData?.description ?? `This topic covers ${topic} in JavaScript.`;

  const description = useMemo(() => {
    return rawDescription
      .replace(new RegExp(`^The\\s+${topic}\\s+`, "i"), "")
      .replace(/^The\s+/i, "");
  }, [rawDescription, topic]);

  /* ── Initialize code when topic changes ─────────────────────── */
  useEffect(() => {
    setHtmlCode(defaultHtml);
    setCssCode(defaultCss);
    setJsCode(defaultJs);
    setActiveTab("html");
    setPreviewKey((k) => k + 1);
  }, [topic]);

  /* ── Loading animation ─────────────────────────────────────── */
  useEffect(() => {
    setIsLoading(true);
    setFadeOut(false);

    const fadeTimer = setTimeout(() => setFadeOut(true), 950);
    const removeTimer = setTimeout(() => setIsLoading(false), 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [topic]);

  /* ── Editor mount ──────────────────────────────────────────── */
  function handleEditorMount(editor) {
    editorRef.current = editor;
  }

  /* ── Save current tab code before switching ─────────────────── */
  function saveCurrentTab() {
    const currentCode = editorRef.current?.getValue() ?? "";
    if (activeTab === "html") setHtmlCode(currentCode);
    else if (activeTab === "css") setCssCode(currentCode);
    else if (activeTab === "js") setJsCode(currentCode);
  }

  /* ── Switch tab ─────────────────────────────────────────────── */
  function switchTab(tab) {
    saveCurrentTab();
    setActiveTab(tab);
  }

  /* ── Get current code for active tab ────────────────────────── */
  function getActiveCode() {
    if (activeTab === "html") return htmlCode;
    if (activeTab === "css") return cssCode;
    return jsCode;
  }

  /* ── Get editor language ────────────────────────────────────── */
  function getEditorLanguage() {
    if (activeTab === "html") return "html";
    if (activeTab === "css") return "css";
    return "javascript";
  }

  /* ── Run Preview — combine HTML + CSS + JS into iframe ──────── */
  function runPreview() {
    saveCurrentTab();
    // Small delay to ensure state is saved
    setTimeout(() => {
      setPreviewKey((k) => k + 1);
    }, 50);
  }

  /* ── Build preview HTML ─────────────────────────────────────── */
  const previewHtml = useMemo(() => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #1a1a2e;
      color: #e5e5e5;
      padding: 16px;
      min-height: 100vh;
    }
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}
  <script>
    // Console capture for display
    const __outputs = [];
    const __origLog = console.log;
    console.log = (...args) => {
      __origLog(...args);
      const el = document.getElementById('__console-output');
      if (el) {
        const line = document.createElement('div');
        line.className = '__console-line';
        line.textContent = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
        el.appendChild(line);
      }
    };
    console.error = (...args) => {
      const el = document.getElementById('__console-output');
      if (el) {
        const line = document.createElement('div');
        line.className = '__console-line __console-error';
        line.textContent = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
        el.appendChild(line);
      }
    };
    try {
      ${jsCode}
    } catch(e) {
      console.error('Error: ' + e.message);
    }
  </script>
</body>
</html>`;
  }, [htmlCode, cssCode, jsCode, previewKey]);

  /* ── Copy to clipboard ─────────────────────────────────────── */
  const handleCopy = useCallback(async () => {
    const code = editorRef.current?.getValue() ?? getActiveCode();
    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel("Copied!");
      setTimeout(() => setCopyLabel("Copy"), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.cssText = "position:fixed;opacity:0;pointer-events:none;";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy");
        setCopyLabel("Copied!");
        setTimeout(() => setCopyLabel("Copy"), 2000);
      } catch (e) {
        console.error("Copy failed", e);
      }
      document.body.removeChild(ta);
    }
  }, [activeTab, htmlCode, cssCode, jsCode]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  /* ─────────────────────────────────────────────────────────── */
  /*  RENDER                                                      */
  /* ─────────────────────────────────────────────────────────── */
  return (
    <div className="topic-page">
      {/* ══════════════════════════════════════════════════════════
          LOADING OVERLAY
      ══════════════════════════════════════════════════════════ */}
      {isLoading && (
        <div
          className={`topic-loading-overlay${fadeOut ? " fade-out" : ""}`}
          role="status"
          aria-live="polite"
          aria-label="Loading topic"
        >
          <div className="loading-logo-wrap">
            <div className="loading-spinner-ring" aria-hidden="true" />
            <span className="loading-js-text" aria-hidden="true">
              &#123;JS&#125;
            </span>
          </div>
          <div className="loading-tag-name" aria-hidden="true">
            {topic}
          </div>
          <div className="loading-dots" aria-hidden="true">
            <div className="loading-dot" />
            <div className="loading-dot" />
            <div className="loading-dot" />
          </div>
          <p className="loading-caption">Loading topic…</p>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          FIXED HEADER
      ══════════════════════════════════════════════════════════ */}
      <header className="topic-page-header" role="banner">
        <div className="topic-header-inner">
          <button
            className="topic-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back to previous page"
            type="button"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
            Back
          </button>

          <h1 className="topic-header-title animate-fade-in">
            <span className="topic-header-js">JS</span> INTERMEDIATE IN MY STYLE
          </h1>

          <button
            className="topic-menu-trigger"
            onClick={() => setNavOpen(true)}
            aria-label="Open topic navigation menu"
            aria-expanded={navOpen}
            aria-controls="topic-nav-drawer"
            title="Browse all topics"
            type="button"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          TOPIC NAVIGATION DRAWER
      ══════════════════════════════════════════════════════════ */}
      <JsIntTopicNavMenu isOpen={navOpen} onClose={() => setNavOpen(false)} />

      {/* ══════════════════════════════════════════════════════════
          INFO BANNER
      ══════════════════════════════════════════════════════════ */}
      <div className="topic-info-banner" role="note">
        <div className="topic-info-inner">
          <i
            className="bi bi-info-circle-fill topic-info-icon"
            aria-hidden="true"
          />
          <span className="topic-info-text">
            The <code>{topic}</code> concept — {description}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MAIN PANELS
      ══════════════════════════════════════════════════════════ */}
      <main className="topic-main" id="main-content">
        <div className="topic-panels-grid">
          {/* ────────────────────────────────────────────────────
              LEFT PANEL — Code Editor with Tabs
          ──────────────────────────────────────────────────── */}
          <section className="editor-panel" aria-label="Code editor">
            {/* Tab buttons */}
            <div className="editor-tabs-bar">
              <button
                className={`editor-tab ${activeTab === "html" ? "active" : ""}`}
                onClick={() => switchTab("html")}
                type="button"
                aria-label="Switch to HTML code"
              >
                <i className="bi bi-filetype-html" aria-hidden="true" />
                HTML
              </button>
              <button
                className={`editor-tab ${activeTab === "css" ? "active" : ""}`}
                onClick={() => switchTab("css")}
                type="button"
                aria-label="Switch to CSS code"
              >
                <i className="bi bi-filetype-css" aria-hidden="true" />
                CSS
              </button>
              <button
                className={`editor-tab ${activeTab === "js" ? "active" : ""}`}
                onClick={() => switchTab("js")}
                type="button"
                aria-label="Switch to JavaScript code"
              >
                <i className="bi bi-filetype-js" aria-hidden="true" />
                JS
              </button>
              <div className="editor-tabs-spacer" />
              <div className="editor-dots" aria-hidden="true">
                <div className="editor-dot red" />
                <div className="editor-dot yellow" />
                <div className="editor-dot green" />
              </div>
            </div>

            {/* Monaco Editor */}
            <div className="editor-monaco-wrap">
              <Editor
                key={`${topic}-${activeTab}`}
                height="100%"
                language={getEditorLanguage()}
                value={getActiveCode()}
                theme="vs-dark"
                onMount={handleEditorMount}
                onChange={(value) => {
                  if (activeTab === "html") setHtmlCode(value || "");
                  else if (activeTab === "css") setCssCode(value || "");
                  else setJsCode(value || "");
                }}
                options={{
                  minimap: { enabled: !isMobile },
                  fontSize: isMobile ? 12 : 14,
                  fontFamily:
                    '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
                  fontLigatures: true,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                  folding: !isMobile,
                  lineNumbers: "on",
                  automaticLayout: true,
                  padding: { top: 12, bottom: 12 },
                  smoothScrolling: true,
                  cursorSmoothCaretAnimation: "on",
                  formatOnPaste: true,
                  autoClosingBrackets: "always",
                  autoClosingQuotes: "always",
                  bracketPairColorization: { enabled: true },
                  renderLineHighlight: "all",
                  lineHeight: 22,
                  tabSize: 2,
                  scrollbar: {
                    vertical: "visible",
                    horizontal: "visible",
                    verticalScrollbarSize: isMobile ? 6 : 10,
                    horizontalScrollbarSize: isMobile ? 6 : 10,
                  },
                }}
              />
            </div>

            {/* Action buttons bar */}
            <div className="editor-actions-bar">
              <button
                className="action-btn run"
                onClick={runPreview}
                type="button"
                aria-label="Run code and show preview"
                title="Run code (Ctrl+Enter)"
              >
                <i className="bi bi-play-fill" aria-hidden="true" />
                Run
              </button>

              <button
                className="action-btn compiler"
                onClick={() => navigate("/js-int-course/compiler")}
                type="button"
                aria-label="Open full compiler playground"
                title="Open in Compiler"
              >
                <i className="bi bi-terminal-fill" aria-hidden="true" />
                Compiler
              </button>

              <button
                className="action-btn copy"
                onClick={handleCopy}
                type="button"
                aria-label="Copy code to clipboard"
                title="Copy code"
              >
                <i
                  className={`bi ${copyLabel === "Copied!" ? "bi-check2" : "bi-clipboard"}`}
                  aria-hidden="true"
                />
                {copyLabel}
              </button>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────
              RIGHT PANEL — Interactive Preview
          ──────────────────────────────────────────────────── */}
          <section className="preview-panel" aria-label="Interactive preview">
            {/* Panel header */}
            <div className="preview-panel-header">
              <h2 className="preview-panel-title">
                <i className="bi bi-eye-fill" aria-hidden="true" />
                Interactive Preview
              </h2>
              <span className="preview-live-badge">Live Output</span>
            </div>

            {/* Preview iframe */}
            <div className="preview-output">
              <iframe
                ref={iframeRef}
                key={previewKey}
                srcDoc={previewHtml}
                title="Code Preview"
                className="preview-iframe"
                sandbox="allow-scripts allow-modals"
              />
            </div>

            {/* Bottom bar */}
            <div className="preview-actions-bar">
              <button
                className="preview-refresh-btn"
                onClick={runPreview}
                type="button"
                aria-label="Refresh preview"
              >
                <i className="bi bi-arrow-clockwise" aria-hidden="true" />
                Refresh
              </button>
              <span className="preview-hint-text">
                <i className="bi bi-info-circle" aria-hidden="true" />
                Combined HTML + CSS + JS output
              </span>
            </div>
          </section>
        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <JsIntTopicPageFooter />
    </div>
  );
}

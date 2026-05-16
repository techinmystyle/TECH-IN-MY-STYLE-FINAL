import { useEffect, useRef, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import JsAdvTopicsData from "../data/JsAdvTopicsData";
import "../styles/JsAdvTopicNavMenu.css";

/* ─────────────────────────────────────────────────────────────────────────────
   JsAdvTopicNavMenu
   Slide-in drawer from the LEFT showing all JS Advanced modules and topics.
   Props:
     isOpen  {boolean}  — controls open/closed state
     onClose {function} — called when user requests close
───────────────────────────────────────────────────────────────────────────── */
export default function JsAdvTopicNavMenu({ isOpen, onClose }) {
  const [search, setSearch] = useState("");

  /* Set of module titles that are currently COLLAPSED (everything else = open) */
  const [collapsedModules, setCollapsedModules] = useState(new Set());

  const { topic: activeTopic } = useParams();
  const searchInputRef = useRef(null);
  const drawerRef = useRef(null);

  /* ── On open: lock body scroll, focus search after transition ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 280);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ── Escape key closes drawer ── */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  /* ── Focus trap inside drawer when open ── */
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");
    const focusable = Array.from(
      drawerRef.current.querySelectorAll(focusableSelectors),
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  /* ── Auto-expand the module containing the active topic ── */
  useEffect(() => {
    if (!activeTopic) return;
    const matchingMod = JsAdvTopicsData.modules.find((mod) =>
      mod.topics.some((t) => t.id === activeTopic),
    );
    if (matchingMod) {
      setCollapsedModules((prev) => {
        const next = new Set(prev);
        next.delete(matchingMod.title);
        return next;
      });
    }
  }, [activeTopic]);

  /* ── Toggle a module's accordion state ── */
  const toggleModule = useCallback((modTitle) => {
    setCollapsedModules((prev) => {
      const next = new Set(prev);
      if (next.has(modTitle)) {
        next.delete(modTitle);
      } else {
        next.add(modTitle);
      }
      return next;
    });
  }, []);

  /* ── Handle topic link click ── */
  const handleLinkClick = useCallback(() => {
    setSearch("");
    onClose();
  }, [onClose]);

  /* ── Handle clear search ── */
  const handleClearSearch = useCallback(() => {
    setSearch("");
    searchInputRef.current?.focus();
  }, []);

  /* ─────────────────────────────────────────────────────────────────────
     FILTERING LOGIC
     When searching: ignore accordion state, show all matches.
     When not searching: respect accordion open/closed state.
  ───────────────────────────────────────────────────────────────────── */
  const searchTrimmed = search.trim().toLowerCase();
  const isSearching = searchTrimmed.length > 0;

  const filteredModules = JsAdvTopicsData.modules
    .map((mod) => {
      const modTitleMatch = mod.title.toLowerCase().includes(searchTrimmed);
      const filteredTopics = mod.topics.filter(
        (topic) =>
          modTitleMatch ||
          topic.id.toLowerCase().includes(searchTrimmed) ||
          topic.title.toLowerCase().includes(searchTrimmed) ||
          (topic.description &&
            topic.description.toLowerCase().includes(searchTrimmed)),
      );
      return { ...mod, topics: filteredTopics };
    })
    .filter((mod) => mod.topics.length > 0);

  const totalVisible = filteredModules.reduce(
    (sum, mod) => sum + mod.topics.length,
    0,
  );

  const totalTopics = JsAdvTopicsData.modules.reduce(
    (sum, mod) => sum + mod.topics.length,
    0,
  );

  /* ════════════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ── Overlay backdrop ───────────────────────────────────────── */}
      <div
        className={`tnm-overlay${isOpen ? " tnm-overlay--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Slide-in drawer (from LEFT) ────────────────────────────── */}
      <aside
        ref={drawerRef}
        className={`tnm-drawer${isOpen ? " tnm-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="All JsAdvTopics Navigation"
        aria-hidden={!isOpen}
      >
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="tnm-header">
          <div className="tnm-brand">
            <span className="tnm-logo" aria-label="JS Advanced">
              &lt;/&gt;&nbsp;JS.ADV
            </span>
            <span className="tnm-subtitle">All JsAdvTopics</span>
          </div>

          <button
            className="tnm-close"
            onClick={onClose}
            aria-label="Close navigation menu"
            type="button"
            tabIndex={isOpen ? 0 : -1}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* ── Search bar ─────────────────────────────────────────── */}
        <div className="tnm-search-wrap">
          <div className="tnm-search-inner">
            <i className="bi bi-search tnm-search-icon" aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="text"
              className="tnm-search"
              placeholder="Search topics…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search topics"
              tabIndex={isOpen ? 0 : -1}
              autoComplete="off"
              spellCheck="false"
            />
            {search && (
              <button
                className="tnm-search-clear"
                onClick={handleClearSearch}
                aria-label="Clear search"
                type="button"
                tabIndex={isOpen ? 0 : -1}
              >
                <i className="bi bi-x" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Result count pill */}
          {isSearching && (
            <p
              className="tnm-result-count"
              aria-live="polite"
              aria-atomic="true"
            >
              {totalVisible === 0
                ? "No results found"
                : `${totalVisible} topic${totalVisible !== 1 ? "s" : ""} found`}
            </p>
          )}
        </div>

        {/* ── Scrollable topic list ───────────────────────────────── */}
        <nav className="tnm-body" aria-label="JsAdvTopics list">
          {filteredModules.length === 0 ? (
            /* ── Empty state ─────────────────────────────────────── */
            <div className="tnm-empty" role="status" aria-live="polite">
              <i className="bi bi-search tnm-empty-icon" aria-hidden="true" />
              <p className="tnm-empty-title">No topics found</p>
              <p className="tnm-empty-hint">
                Try searching for{" "}
                <code className="tnm-empty-code">closures</code>,{" "}
                <code className="tnm-empty-code">proxy</code>, or{" "}
                <code className="tnm-empty-code">generators</code>
              </p>
            </div>
          ) : (
            filteredModules.map((mod) => {
              const isCollapsed =
                !isSearching && collapsedModules.has(mod.title);
              const modId = `tnm-mod-${mod.id}`;
              const panelId = `${modId}-panel`;

              return (
                <div key={mod.id} className="tnm-category">
                  {/* ── Module header (accordion trigger) ──────────── */}
                  <button
                    id={modId}
                    className={`tnm-cat-header${isCollapsed ? "" : " tnm-cat-header--open"}`}
                    onClick={() => !isSearching && toggleModule(mod.title)}
                    aria-expanded={!isCollapsed}
                    aria-controls={panelId}
                    type="button"
                    tabIndex={isOpen ? 0 : -1}
                    disabled={isSearching}
                    style={{ cursor: isSearching ? "default" : "pointer" }}
                  >
                    <i
                      className={`${mod.icon} tnm-cat-icon`}
                      style={{ color: mod.color }}
                      aria-hidden="true"
                    />
                    <span className="tnm-cat-name">{mod.title}</span>
                    <span
                      className="tnm-cat-count"
                      aria-label={`${mod.topics.length} topics`}
                    >
                      {mod.topics.length}
                    </span>
                    {!isSearching && (
                      <i
                        className={`bi bi-chevron-right tnm-cat-chevron${
                          isCollapsed ? "" : " tnm-cat-chevron--open"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  {/* ── Topic list (accordion panel) ─────────────────── */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={modId}
                    className={`tnm-topic-panel${isCollapsed ? "" : " tnm-topic-panel--open"}`}
                  >
                    <ul className="tnm-topic-list" role="list">
                      {mod.topics.map((topic) => {
                        const isActive = topic.id === activeTopic;
                        return (
                          <li key={topic.id} role="listitem">
                            <Link
                              to={`/js-adv-course/topics/${topic.id}`}
                              className={`tnm-topic-link${isActive ? " tnm-topic-link--active" : ""}`}
                              onClick={handleLinkClick}
                              title={topic.description}
                              aria-current={isActive ? "page" : undefined}
                              tabIndex={isOpen && !isCollapsed ? 0 : -1}
                            >
                              {/* Active indicator dot */}
                              <span
                                className={`tnm-dot${isActive ? " tnm-dot--active" : ""}`}
                                aria-hidden="true"
                              />

                              {/* Topic info */}
                              <span className="tnm-topic-text">
                                <span className="tnm-topic-title">
                                  {topic.title}
                                </span>
                                <span className="tnm-topic-id">{topic.id}</span>
                              </span>

                              {/* Active page indicator */}
                              {isActive && (
                                <i
                                  className="bi bi-chevron-right tnm-active-chevron"
                                  aria-hidden="true"
                                />
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })
          )}
        </nav>

        {/* ── JsAdvFooter strip ───────────────────────────────────────── */}
        <div className="tnm-footer" aria-hidden="true">
          <span className="tnm-footer-text">
            <i className="bi bi-collection" />
            {JsAdvTopicsData.modules.length} modules &middot; {totalTopics} topics
          </span>
        </div>
      </aside>
    </>
  );
}

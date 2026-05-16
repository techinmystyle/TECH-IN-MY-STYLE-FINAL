import { useState, useMemo } from "react";
import JsAdvNavbar from "../components/JsAdvNavbar";
import JsAdvFooter from "../components/JsAdvFooter";
import { Link } from "react-router-dom";
import "../styles/JsAdvResources.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const resourcesData = [
  // ── Documentation ──────────────────────────────────────────────────────────
  {
    id: "mdn-js",
    category: "documentation",
    icon: "bi bi-book-fill",
    title: "MDN JavaScript",
    description:
      "The gold-standard reference for every JavaScript API, syntax feature, and web platform capability. Maintained by Mozilla and contributors worldwide.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    badge: "Free",
    badgeType: "free",
    tags: ["Reference", "API", "Mozilla"],
  },
  {
    id: "ecma-spec",
    category: "documentation",
    icon: "bi bi-file-earmark-code-fill",
    title: "ECMAScript Specification",
    description:
      "The official ECMA-262 language specification. Dive deep into how JavaScript is defined at the language level — essential for advanced understanding.",
    url: "https://tc39.es/ecma262/",
    badge: "Open Source",
    badgeType: "opensource",
    tags: ["Spec", "TC39", "Official"],
  },
  {
    id: "v8-blog",
    category: "documentation",
    icon: "bi bi-cpu-fill",
    title: "V8 Blog",
    description:
      "Engineering articles from the V8 team at Google covering JS engine internals, optimization tips, and new language feature implementations.",
    url: "https://v8.dev/blog",
    badge: "Free",
    badgeType: "free",
    tags: ["Engine", "Optimization", "Google"],
  },
  {
    id: "nodejs-docs",
    category: "documentation",
    icon: "bi bi-server",
    title: "Node.js Docs",
    description:
      "Official Node.js API documentation covering the runtime environment, built-in modules, streams, event emitter, file system, and more.",
    url: "https://nodejs.org/en/docs",
    badge: "Free",
    badgeType: "free",
    tags: ["Node.js", "Runtime", "Server"],
  },
  {
    id: "caniuse",
    category: "documentation",
    icon: "bi bi-check-circle-fill",
    title: "Can I Use",
    description:
      "Browser support tables for modern web technologies including JavaScript APIs. Check cross-browser compatibility before shipping features.",
    url: "https://caniuse.com",
    badge: "Free",
    badgeType: "free",
    tags: ["Compatibility", "Browser", "CSS"],
  },

  // ── Tools ──────────────────────────────────────────────────────────────────
  {
    id: "devtools",
    category: "tools",
    icon: "bi bi-tools",
    title: "Chrome DevTools Guide",
    description:
      "Master the browser's built-in JavaScript debugger — breakpoints, call stack inspection, memory profiler, performance timeline, and network monitor.",
    url: "https://developer.chrome.com/docs/devtools/",
    badge: "Free",
    badgeType: "free",
    tags: ["Debug", "Chrome", "Performance"],
  },
  {
    id: "jsbench",
    category: "tools",
    icon: "bi bi-speedometer2",
    title: "JSBench.me",
    description:
      "Online JavaScript benchmarking tool. Write test cases, run them across browsers, and compare execution speeds to write faster, optimized code.",
    url: "https://jsbench.me",
    badge: "Free",
    badgeType: "free",
    tags: ["Benchmark", "Performance", "Speed"],
  },
  {
    id: "ast-explorer",
    category: "tools",
    icon: "bi bi-diagram-3-fill",
    title: "AST Explorer",
    description:
      "Visualize the Abstract Syntax Tree of any JavaScript code. Invaluable for understanding how parsers work and building Babel plugins or ESLint rules.",
    url: "https://astexplorer.net",
    badge: "Open Source",
    badgeType: "opensource",
    tags: ["AST", "Parser", "Babel"],
  },
  {
    id: "bundlephobia",
    category: "tools",
    icon: "bi bi-box-seam-fill",
    title: "Bundlephobia",
    description:
      "Find the cost of adding an npm package to your bundle. See minified + gzipped sizes and composition breakdown before you npm install.",
    url: "https://bundlephobia.com",
    badge: "Free",
    badgeType: "free",
    tags: ["Bundle", "npm", "Size"],
  },
  {
    id: "js-visualizer",
    category: "tools",
    icon: "bi bi-play-circle-fill",
    title: "JS Visualizer (Loupe)",
    description:
      "Visualize the JavaScript runtime — call stack, callback queue, and event loop in real time. Perfect for understanding asynchronous JavaScript execution.",
    url: "http://latentflip.com/loupe/",
    badge: "Free",
    badgeType: "free",
    tags: ["Event Loop", "Async", "Visual"],
  },

  // ── Books ──────────────────────────────────────────────────────────────────
  {
    id: "ydkjs",
    category: "books",
    icon: "bi bi-journal-bookmark-fill",
    title: "You Don't Know JS",
    description:
      "A series of books by Kyle Simpson that digs into the core mechanisms of JavaScript. Covers scope & closures, this & prototypes, types & grammar, async & performance.",
    url: "https://github.com/getify/You-Dont-Know-JS",
    badge: "Free",
    badgeType: "free",
    tags: ["Series", "Kyle Simpson", "Deep Dive"],
    author: "Kyle Simpson",
  },
  {
    id: "js-good-parts",
    category: "books",
    icon: "bi bi-journal-richtext",
    title: "JavaScript: The Good Parts",
    description:
      "Douglas Crockford identifies the parts of JavaScript that make it genuinely great. A concise, precise guide to writing elegant and reliable JavaScript code.",
    url: "https://www.oreilly.com/library/view/javascript-the-good/9780596517748/",
    badge: "Paid",
    badgeType: "paid",
    tags: ["Classic", "Crockford", "Best Practices"],
    author: "Douglas Crockford",
  },
  {
    id: "eloquent-js",
    category: "books",
    icon: "bi bi-journal-text",
    title: "Eloquent JavaScript",
    description:
      "A modern introduction to JavaScript and programming. Marijn Haverbeke takes you from basics to advanced topics like closures, object-oriented programming, and the browser.",
    url: "https://eloquentjavascript.net",
    badge: "Free",
    badgeType: "free",
    tags: ["Beginner-Friendly", "Online", "Free Book"],
    author: "Marijn Haverbeke",
  },
  {
    id: "js-patterns",
    category: "books",
    icon: "bi bi-layers-fill",
    title: "JavaScript Patterns",
    description:
      "Stoyan Stefanov covers essential patterns for writing robust, maintainable JavaScript — design patterns, coding patterns, and anti-patterns to avoid.",
    url: "https://www.oreilly.com/library/view/javascript-patterns/9781449399115/",
    badge: "Paid",
    badgeType: "paid",
    tags: ["Design Patterns", "Architecture", "Best Practices"],
    author: "Stoyan Stefanov",
  },

  // ── Videos ─────────────────────────────────────────────────────────────────
  {
    id: "fireship",
    category: "videos",
    icon: "bi bi-youtube",
    title: "Fireship",
    description:
      "High-intensity, information-dense JavaScript and web dev content. The 100-second series and deep dives make complex topics fast and memorable.",
    url: "https://www.youtube.com/@Fireship",
    badge: "Free",
    badgeType: "free",
    tags: ["YouTube", "Fast-Paced", "Modern"],
  },
  {
    id: "traversy",
    category: "videos",
    icon: "bi bi-camera-video-fill",
    title: "Traversy Media",
    description:
      "Brad Traversy delivers practical, project-based tutorials covering JavaScript, frameworks, and full-stack development with clear beginner-to-advanced progression.",
    url: "https://www.youtube.com/@TraversyMedia",
    badge: "Free",
    badgeType: "free",
    tags: ["YouTube", "JsAdvProjects", "Full-Stack"],
  },
  {
    id: "funfunfunction",
    category: "videos",
    icon: "bi bi-emoji-laughing-fill",
    title: "Fun Fun Function",
    description:
      "MPJ explores functional programming concepts in JavaScript with an entertaining, philosophical approach. Currying, monads, and FP patterns explained clearly.",
    url: "https://www.youtube.com/@funfunfunction",
    badge: "Free",
    badgeType: "free",
    tags: ["YouTube", "Functional", "FP"],
  },
  {
    id: "coding-train",
    category: "videos",
    icon: "bi bi-train-front-fill",
    title: "The Coding Train",
    description:
      "Daniel Shiffman codes creative projects live — algorithms, simulations, generative art — showing JavaScript in a playful and exploratory way.",
    url: "https://www.youtube.com/@TheCodingTrain",
    badge: "Free",
    badgeType: "free",
    tags: ["YouTube", "Creative", "Algorithms"],
  },
  {
    id: "akshay-saini",
    category: "videos",
    icon: "bi bi-person-video3",
    title: "Akshay Saini — Namaste JS",
    description:
      "Namaste JavaScript is an in-depth series on JS internals — execution context, hoisting, closures, prototype chain — explained in an intuitive, methodical way.",
    url: "https://www.youtube.com/@akshaymarch7",
    badge: "Free",
    badgeType: "free",
    tags: ["YouTube", "Internals", "Hindi/English"],
  },

  // ── Practice ───────────────────────────────────────────────────────────────
  {
    id: "leetcode",
    category: "practice",
    icon: "bi bi-code-slash",
    title: "LeetCode",
    description:
      "The industry-standard platform for coding interview preparation. Solve algorithmic problems in JavaScript with automated test suites and community solutions.",
    url: "https://leetcode.com",
    badge: "Free",
    badgeType: "free",
    tags: ["Algorithms", "Interviews", "DSA"],
  },
  {
    id: "hackerrank",
    category: "practice",
    icon: "bi bi-terminal-fill",
    title: "HackerRank",
    description:
      "Practice JavaScript through dedicated tracks, domain problems, and certification challenges. Great for beginners and interview readiness alike.",
    url: "https://www.hackerrank.com",
    badge: "Free",
    badgeType: "free",
    tags: ["Certification", "Beginner", "Interview"],
  },
  {
    id: "codewars",
    category: "practice",
    icon: "bi bi-shield-fill-check",
    title: "Codewars",
    description:
      "Train with kata — community-crafted coding challenges ranked by difficulty (kyu). Earn honor, compare solutions, and level up your JavaScript skills daily.",
    url: "https://www.codewars.com",
    badge: "Free",
    badgeType: "free",
    tags: ["Kata", "Community", "Ranked"],
  },
  {
    id: "exercism",
    category: "practice",
    icon: "bi bi-lightning-charge-fill",
    title: "Exercism",
    description:
      "A JavaScript track with 140+ exercises and optional human mentorship. Download locally, solve in your editor, submit for automated and mentor feedback.",
    url: "https://exercism.org/tracks/javascript",
    badge: "Free",
    badgeType: "free",
    tags: ["Mentorship", "Track", "Open Source"],
  },
  {
    id: "js30",
    category: "practice",
    icon: "bi bi-calendar3",
    title: "JavaScript 30",
    description:
      "Wes Bos's legendary 30-day challenge — build 30 things in 30 days with pure Vanilla JS, no frameworks, no libraries. The single best way to solidify fundamentals.",
    url: "https://javascript30.com",
    badge: "Free",
    badgeType: "free",
    tags: ["30-Day", "Vanilla JS", "JsAdvProjects"],
  },
];

const TABS = [
  { id: "all", label: "All", icon: "bi bi-grid-fill" },
  { id: "documentation", label: "Documentation", icon: "bi bi-book-fill" },
  { id: "tools", label: "Tools", icon: "bi bi-tools" },
  { id: "books", label: "Books", icon: "bi bi-journal-bookmark-fill" },
  { id: "videos", label: "Videos", icon: "bi bi-play-circle-fill" },
  { id: "practice", label: "Practice", icon: "bi bi-code-slash" },
];

const BADGE_LABELS = {
  free: "Free",
  paid: "Paid",
  opensource: "Open Source",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function JsAdvResources() {

  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return resourcesData.filter((r) => {
      const matchTab = activeTab === "all" || r.category === activeTab;
      const matchSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)) ||
        (r.author && r.author.toLowerCase().includes(q));
      return matchTab && matchSearch;
    });
  }, [activeTab, searchQuery]);

  const counts = useMemo(() => {
    const c = { all: resourcesData.length };
    resourcesData.forEach((r) => {
      c[r.category] = (c[r.category] || 0) + 1;
    });
    return c;
  }, []);

  return (
    <div className="resources-page">
      <JsAdvNavbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="resources-hero">
        <div className="resources-hero__glow" />
        <div className="resources-hero__content">
          <div className="resources-hero__badge">
            <i className="bi bi-collection-fill" />
            <span>Curated JsAdvResources</span>
          </div>
          <h1 className="resources-hero__title">
            Level Up Your{" "}
            <span className="resources-hero__highlight">JavaScript</span>
          </h1>
          <p className="resources-hero__subtitle">
            Hand-picked documentation, tools, books, video channels, and
            practice platforms trusted by JavaScript developers worldwide.
          </p>

          {/* Search */}
          <div className="resources-search">
            <i className="bi bi-search resources-search__icon" />
            <input
              type="text"
              className="resources-search__input"
              placeholder="Search resources, authors, tags…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="resources-search__clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                <i className="bi bi-x-circle-fill" />
              </button>
            )}
          </div>
        </div>

        {/* Floating icons */}
        <div className="resources-hero__floats" aria-hidden="true">
          <span className="float-icon f1">📚</span>
          <span className="float-icon f2">🛠️</span>
          <span className="float-icon f3">🎬</span>
          <span className="float-icon f4">💡</span>
          <span className="float-icon f5">⚡</span>
        </div>
      </section>

      {/* ── Roadmap Banner ───────────────────────────────────────────────── */}
      <div className="resources-roadmap-banner">
        <div className="resources-roadmap-banner__inner">
          <div className="resources-roadmap-banner__left">
            <i className="bi bi-map-fill" />
            <div>
              <strong>JavaScript Roadmap</strong>
              <p>
                A structured visual guide to everything you need to learn in JS
              </p>
            </div>
          </div>
          <a
            href="https://roadmap.sh/javascript"
            target="_blank"
            rel="noopener noreferrer"
            className="resources-roadmap-banner__btn"
          >
            View Roadmap <i className="bi bi-arrow-up-right" />
          </a>
        </div>
      </div>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <main className="resources-main">
        {/* Tabs */}
        <nav className="resources-tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`resources-tab${activeTab === tab.id ? " resources-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon} />
              <span>{tab.label}</span>
              <span className="resources-tab__count">
                {counts[tab.id] || 0}
              </span>
            </button>
          ))}
        </nav>

        {/* Result count */}
        <div className="resources-result-count">
          {searchQuery
            ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${searchQuery}"`
            : `${filtered.length} resource${filtered.length !== 1 ? "s" : ""}`}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="resources-grid">
            {filtered.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="resources-empty">
            <div className="resources-empty__icon">🔍</div>
            <h3>No resources found</h3>
            <p>Try adjusting your search or switching tabs.</p>
            <button
              className="resources-empty__reset"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <JsAdvFooter />
    </div>
  );
}

// ─── Resource Card ────────────────────────────────────────────────────────────

function ResourceCard({ resource }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(resource.url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const categoryColors = {
    documentation: "#06b6d4",
    tools: "#06b6d4",
    books: "#8b5cf6",
    videos: "#f97316",
    practice: "#10b981",
  };

  const color = categoryColors[resource.category] || "#06b6d4";

  return (
    <article className="resource-card" style={{ "--card-accent": color }}>
      {/* Top row */}
      <div className="resource-card__header">
        <div className="resource-card__icon-wrap">
          <i className={resource.icon} style={{ color }} />
        </div>
        <span
          className={`resource-card__badge resource-card__badge--${resource.badgeType}`}
        >
          {BADGE_LABELS[resource.badgeType]}
        </span>
      </div>

      {/* Title */}
      <h3 className="resource-card__title">{resource.title}</h3>
      {resource.author && (
        <p className="resource-card__author">
          <i className="bi bi-person-fill" /> {resource.author}
        </p>
      )}

      {/* Description */}
      <p className="resource-card__description">{resource.description}</p>

      {/* Tags */}
      <div className="resource-card__tags">
        {resource.tags.map((tag) => (
          <span key={tag} className="resource-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="resource-card__actions">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-card__visit"
          style={{ "--btn-color": color }}
        >
          Visit <i className="bi bi-arrow-up-right" />
        </a>
        <button
          className="resource-card__copy"
          onClick={handleCopy}
          title="Copy link"
        >
          {copied ? (
            <>
              <i className="bi bi-check2" /> Copied
            </>
          ) : (
            <>
              <i className="bi bi-clipboard" /> Copy Link
            </>
          )}
        </button>
      </div>

      {/* Accent bar */}
      <div
        className="resource-card__accent-bar"
        style={{ background: color }}
      />
    </article>
  );
}

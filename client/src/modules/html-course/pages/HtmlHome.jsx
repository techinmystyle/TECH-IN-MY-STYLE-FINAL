import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../components/HtmlNavbar";
import PopularCourses from "../../../components/PopularCourses";
import "../styles/HtmlHome.css";

/* ─── Data ─────────────────────────────────────────────────────── */
const courses = [
  {
    title: "HTML IN MY STYLE",
    description:
      "Learn semantic HTML5, document structure, forms, and accessibility with our comprehensive course.",
    image: "/img/HTML-BG.png",
    link: "/html-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "CSS IN MY STYLE",
    description:
      "Master modern CSS techniques, layouts, animations, and responsive design principles.",
    image: "/img/CSS.png",
    link: "/css-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "JAVASCRIPT BASICS",
    description:
      "Start your JavaScript journey by mastering variables, functions, conditionals, loops, and basic DOM manipulation.",
    image: "/img/JS-BEGINNERS.png",
    link: "/js-basic-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "JAVASCRIPT INTERMEDIATE",
    description:
      "Level up your JavaScript skills with ES6 features, asynchronous programming, APIs, closures, and advanced DOM techniques.",
    image: "/img/JS-INT.png",
    link: "/js-int-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "JAVASCRIPT ADVANCED",
    description:
      "Master Enterprise-Level JavaScript concepts, patterns, and architecture for building scalable applications.",
    image: "/img/JS-ADV.png",
    link: "/js-adv-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "JAVA IN MY STYLE",
    description:
      "Comprehensive Java programming from basics to advanced concepts and application development.",
    image: "/img/JAVA.png",
    link: "/java-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "PYTHON IN MY STYLE",
    description:
      "Learn Python programming for web development, data science, and automation.",
    image: "/img/PYTHON.png",
    link: "/python-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "C IN MY STYLE",
    description:
      "Learn C programming from scratch with hands-on coding, memory management, pointers, and data structures.",
    image: "/img/C.png",
    link: "/c-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "DEEP LEARNING",
    description:
      "Dive into deep learning with neural networks, backpropagation, CNNs, RNNs, and hands-on projects.",
    image: "/img/DL.png",
    link: "/dl-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "MACHINE LEARNING",
    description:
      "Explore machine learning fundamentals including supervised and unsupervised learning and real-world ML projects.",
    image: "/img/ML.png",
    link: "/ml-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Explore the fundamentals of AI, including intelligent agents, search algorithms, and decision-making models.",
    image: "/img/AI.png",
    link: "/ai-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "DATA SCIENCE",
    description:
      "Master Data Science with statistics, data wrangling, visualization, and real-world analytics projects using Python.",
    image: "/img/DSC.png",
    link: "/dsc-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "DSA IN MY STYLE",
    description:
      "Master Data Structures and Algorithms with interactive visualizers, code examples, and interview prep.",
    image: "/img/DSA.png",
    link: "/dsa-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "NLP IN MY STYLE",
    description:
      "Master Natural Language Processing from tokenization to transformers with code examples and MCQs.",
    image: "/img/NLP.png",
    link: "/nlp-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "OS IN MY STYLE",
    description:
      "Master Operating Systems — processes, memory, file systems, security with interactive visualizations.",
    image: "/img/TECH.png",
    link: "/os-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "SYSTEM DESIGN",
    description:
      "Master system design concepts from basics to real-world implementations with interactive diagrams.",
    image: "/img/TECH.png",
    link: "/system-design-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "DATABASE IN MY STYLE",
    description:
      "Master SQL and MongoDB with live query execution, visualizers, and interview questions.",
    image: "/img/DBMS.png",
    link: "/database-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "GEN AI IN MY STYLE",
    description:
      "Master Generative AI from foundations to production — LLMs, RAG, agents, embeddings, and applications.",
    image: "/img/AI.png",
    link: "/genai-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "FULL STACK PYTHON",
    description:
      "Master Python from fundamentals to deployment. Build REST APIs and ship production-ready applications.",
    image: "/img/PYTHON.png",
    link: "/fullstack-python-course",
    internal: true,
    badge: "Available Now",
  },
  {
    title: "FULL STACK JAVA",
    description:
      "Build scalable backend systems with Java and Spring Boot. Master microservices and deployment.",
    image: "/img/JAVA.png",
    link: "/fullstack-java-platform-course",
    internal: true,
    badge: "Available Now",
  },
];

const features = [
  {
    icon: "bi bi-house-door-fill",
    title: "HOME",
    description:
      "Your starting point with all the rules and guidelines to make your HTML learning journey smooth and effective.",
    link: "/html-course",
    color: "#E34F26",
  },
  {
    icon: "bi bi-code-slash",
    title: "HTML REFERENCE",
    description:
      "Complete HTML5 course organised by category and alphabetical order for easy reference and learning.",
    link: "/html-course/reference",
    color: "#F16529",
  },
  {
    icon: "bi bi-journal-code",
    title: "RESOURCES",
    description:
      "Access notes, textbooks, cheat sheets, YouTube links, certifications, and roadmaps all in one place.",
    link: "/html-course/resources",
    color: "#E34F26",
  },
  {
    icon: "bi bi-terminal-fill",
    title: "PLAYGROUND",
    description:
      "An online HTML/CSS/JS editor to run and test your markup in real-time without leaving the site.",
    link: "/html-course/compiler",
    color: "#F16529",
  },
  {
    icon: "bi bi-people-fill",
    title: "LET'S CONNECT",
    description:
      "Stay updated with the latest news and connect with our community on social media platforms.",
    link: "/html-course/connect",
    color: "#E34F26",
  },
];

const stats = [
  { icon: "bi bi-tags-fill", value: "80+", label: "HTML Tags Covered" },
  { icon: "bi bi-collection-fill", value: "20", label: "Courses Available" },
  { icon: "bi bi-terminal-fill", value: "1", label: "Live Playground" },
  { icon: "bi bi-gift-fill", value: "100%", label: "Free Forever" },
];

const testimonials = [
  {
    text: "HTML is the skeleton of the web. As designers, we don't just build structures—we craft meaningful layouts that guide the user's journey through every pixel.",
    author: "Web Designer",
    icon: "bi bi-palette-fill",
  },
  {
    text: "We teach HTML as a language of structure and purpose. From the first tag to semantic mastery, our goal is to make every learner confident and capable.",
    author: "Lead Instructor",
    icon: "bi bi-mortarboard-fill",
  },
  {
    text: "Great code starts with clean HTML. It's the foundation of performance, accessibility, and scalability—and we make sure you get it right from the start.",
    author: "Senior Developer",
    icon: "bi bi-laptop-fill",
  },
  {
    text: "Understanding HTML deeply transformed how I approach web development. The structure, semantics, and accessibility principles changed everything for me.",
    author: "Full-Stack Engineer",
    icon: "bi bi-layers-fill",
  },
];

const CODE_LINES = [
  { indent: 0, parts: [{ cls: "hl-tag", t: "<!DOCTYPE html>" }] },
  {
    indent: 0,
    parts: [
      { cls: "hl-tag", t: "<html" },
      { cls: "hl-attr", t: " lang" },
      { cls: "", t: "=" },
      { cls: "hl-str", t: '"en"' },
      { cls: "hl-tag", t: ">" },
    ],
  },
  { indent: 0, parts: [{ cls: "hl-tag", t: "<head>" }] },
  {
    indent: 1,
    parts: [
      { cls: "hl-tag", t: "<meta" },
      { cls: "hl-attr", t: " charset" },
      { cls: "", t: "=" },
      { cls: "hl-str", t: '"UTF-8"' },
      { cls: "hl-tag", t: ">" },
    ],
  },
  {
    indent: 1,
    parts: [
      { cls: "hl-tag", t: "<title>" },
      { cls: "hl-content", t: "HTML IN MY STYLE" },
      { cls: "hl-tag", t: "</title>" },
    ],
  },
  { indent: 0, parts: [{ cls: "hl-tag", t: "</head>" }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ cls: "hl-tag", t: "<body>" }] },
  {
    indent: 1,
    parts: [
      { cls: "hl-tag", t: "<h1>" },
      { cls: "hl-content", t: "Hello, World! 🌍" },
      { cls: "hl-tag", t: "</h1>" },
    ],
  },
  {
    indent: 1,
    parts: [
      { cls: "hl-tag", t: "<p>" },
      { cls: "hl-content", t: "Welcome to HTML IN MY STYLE" },
      { cls: "hl-tag", t: "</p>" },
    ],
  },
  { indent: 0, parts: [{ cls: "hl-tag", t: "</body>" }] },
  { indent: 0, parts: [{ cls: "hl-tag", t: "</html>" }] },
];

/* ─── Counter hook ──────────────────────────────────────────────── */
function useCounter(target, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const isPercent = String(target).includes("%");
    const isPlusSuffix = String(target).includes("+");
    const numericTarget = parseInt(String(target).replace(/[^0-9]/g, ""), 10);
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ─── Stat Card ─────────────────────────────────────────────────── */
function StatCard({ icon, value, label, animate }) {
  const isPercent = String(value).includes("%");
  const isPlus = String(value).includes("+");
  const numeric = parseInt(String(value).replace(/[^0-9]/g, ""), 10);
  const count = useCounter(numeric, 1800, animate);
  const display = isNaN(numeric)
    ? value
    : `${count}${isPlus ? "+" : ""}${isPercent ? "%" : ""}`;
  return (
    <div className="stat-card">
      <div className="stat-icon-wrap">
        <i className={icon} />
      </div>
      <div className="stat-value">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function HtmlHome() {
  const { dark, toggle } = useDarkMode();
  const [showTop, setShowTop] = useState(false);
  const [statsVisible, setStatsVisible] = useState(true); // Start visible
  const [heroVisible, setHeroVisible] = useState(true); // Start visible
  const statsRef = useRef(null);
  const heroRef = useRef(null);

  /* Back to top */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Stats counter trigger */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`home${dark ? " dark" : ""}`}>
      <main id="main-content">
        {/* ══════════════════ HERO ══════════════════ */}
        <section
          className={`hero${heroVisible ? " hero--visible" : ""}`}
          aria-labelledby="hero-heading"
        >
          {/* Decorative blobs */}
          <div className="hero__blob hero__blob--1" aria-hidden="true" />
          <div className="hero__blob hero__blob--2" aria-hidden="true" />
          <div className="hero__blob hero__blob--3" aria-hidden="true" />

          <div className="hero__inner">
            {/* Left – content */}
            <div className="hero__content">
              <div className="hero__badge">
                <i className="bi bi-stars" />
                <span>Learn Web Development</span>
              </div>

              <h1 className="hero__title" id="hero-heading">
                Welcome to
                <br />
                <span className="hero__title-brand">HTML IN MY STYLE</span>
              </h1>

              <p className="hero__subtitle">
                <span className="hero__cursor-wrap">
                  Your Gateway to Mastering Web Structure
                </span>
              </p>

              <p className="hero__desc">
                Master the building blocks of the web with our comprehensive
                HTML platform. Learn semantic markup, accessibility, forms, and
                modern HTML5 features through interactive lessons designed for
                every skill level.
              </p>

              <div className="hero__actions">
                <Link to="/html-course/reference" className="btn btn--primary btn--lg">
                  <i className="bi bi-play-circle-fill" />
                  Start Learning
                </Link>
                <a href="#courses" className="btn btn--ghost btn--lg">
                  <i className="bi bi-grid-fill" />
                  Explore Courses
                </a>
              </div>

              <div className="hero__trust">
                <span className="hero__trust-item">
                  <i className="bi bi-check-circle-fill" />
                  Free forever
                </span>
                <span className="hero__trust-item">
                  <i className="bi bi-check-circle-fill" />
                  No subscriptions
                </span>
                <span className="hero__trust-item">
                  <i className="bi bi-check-circle-fill" />
                  Learn at your pace
                </span>
              </div>
            </div>

            {/* Right – code window */}
            <div className="hero__code-wrap">
              <div className="hero__code-window">
                <div className="hero__code-bar">
                  <span className="hero__dot hero__dot--red" />
                  <span className="hero__dot hero__dot--yellow" />
                  <span className="hero__dot hero__dot--green" />
                  <span className="hero__code-filename">
                    <i className="bi bi-file-earmark-code-fill" />
                    index.html
                  </span>
                </div>
                <div className="hero__code-body">
                  {CODE_LINES.map((line, i) => (
                    <div
                      key={i}
                      className="hero__code-line"
                      style={{ animationDelay: `${0.4 + i * 0.07}s` }}
                    >
                      <span className="hero__line-num">{i + 1}</span>
                      <span
                        className="hero__line-content"
                        style={{ paddingLeft: `${line.indent * 1.2}rem` }}
                      >
                        {line.parts.map((p, j) => (
                          <span key={j} className={p.cls}>
                            {p.t}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="hero__float-badge hero__float-badge--1">
                <i className="bi bi-lightning-charge-fill" />
                <span>Live Preview</span>
              </div>
              <div className="hero__float-badge hero__float-badge--2">
                <i className="bi bi-shield-check-fill" />
                <span>Semantic HTML</span>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <a
            href="#stats"
            className="hero__scroll-hint"
            aria-label="Scroll down"
          >
            <i className="bi bi-chevron-double-down" />
          </a>
        </section>

        {/* ══════════════════ STATS ══════════════════ */}
        <section
          className="stats-section"
          id="stats"
          ref={statsRef}
          aria-label="Platform statistics"
        >
          <div className="container">
            <div className="stats-grid">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} animate={statsVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ FEATURES ══════════════════ */}
        <section
          className="features-section"
          aria-labelledby="features-heading"
        >
          <div className="container">
            <div className="section-header">
              <div className="section-pill">
                <i className="bi bi-stars" />
                Why Choose Us
              </div>
              <h2 className="section-title" id="features-heading">
                What Makes Us Different
              </h2>
              <p className="section-desc">
                Our platform provides everything for HTML learners: structured
                courses, rich resources, hands-on tasks, and an interactive
                playground — all in one place.
              </p>
            </div>

            <div className="features-grid">
              {features.map((f, i) => (
                <Link
                  to={f.link}
                  className="feature-card"
                  key={f.title}
                  style={{ "--accent": f.color, animationDelay: `${i * 0.1}s` }}
                >
                  <div className="feature-card__icon-wrap">
                    <i className={f.icon} />
                  </div>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__desc">{f.description}</p>
                  <span className="feature-card__cta">
                    Explore <i className="bi bi-arrow-right" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PopularCourses />

        {/* ══════════════════ TESTIMONIALS ══════════════════ */}
        <section
          className="testimonials-section"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <div className="section-header">
              <div className="section-pill">
                <i className="bi bi-chat-quote-fill" />
                Our Philosophy
              </div>
              <h2 className="section-title" id="testimonials-heading">
                What We Say
              </h2>
              <p className="section-desc">
                Our thoughts and philosophy behind creating this HTML learning
                platform.
              </p>
            </div>

            <div className="testimonials-track">
              {testimonials.map((t, i) => (
                <div
                  className="testimonial-card"
                  key={i}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="testimonial-card__icon">
                    <i className={t.icon} />
                  </div>
                  <i
                    className="bi bi-quote testimonial-card__quote-icon"
                    aria-hidden="true"
                  />
                  <p className="testimonial-card__text">{t.text}</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__author-dot" />
                    <span>{t.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ CTA ══════════════════ */}
        <section className="cta-section" aria-labelledby="cta-heading">
          <div
            className="cta-section__blob cta-section__blob--1"
            aria-hidden="true"
          />
          <div
            className="cta-section__blob cta-section__blob--2"
            aria-hidden="true"
          />
          <div className="container cta-section__inner">
            <div className="cta-section__icon" aria-hidden="true">
              <i className="bi bi-mortarboard-fill" />
            </div>
            <h2 className="cta-section__title" id="cta-heading">
              Start Your HTML Journey Today
            </h2>
            <p className="cta-section__desc">
              Join thousands of learners who have successfully mastered HTML and
              web structure with our free, comprehensive platform. No account
              required. No credit card needed.
            </p>
            <div className="cta-section__actions">
              <Link to="/html-course/reference" className="btn btn--white btn--lg">
                <i className="bi bi-play-circle-fill" />
                Start Learning Now
              </Link>
              <Link to="/html-course/compiler" className="btn btn--white-outline btn--lg">
                <i className="bi bi-terminal-fill" />
                Try Playground
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Vertical Navigation ── */}
      <button
        className={`float-top-btn${showTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up" />
      </button>

    </div>
  );
}

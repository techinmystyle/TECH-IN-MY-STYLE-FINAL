import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PopularCourses.css";

const courses = [
  {
    title: "HTML IN MY STYLE",
    description:
      "Learn semantic HTML5, document structure, forms, and accessibility with our comprehensive course.",
    image: "/img/HTML-BG.png",
    bg: "#fff4e0",
    accent: "#e44d26",
    link: "/html-course",
    badge: "Available Now",
    category: "Web",
  },
  {
    title: "CSS IN MY STYLE",
    description:
      "Master modern CSS techniques, layouts, animations, and responsive design principles.",
    image: "/img/CSS-BG.png",
    bg: "#e8f3ff",
    accent: "#264de4",
    link: "/css-course",
    badge: "Available Now",
    category: "Web",
  },
  {
    title: "JAVASCRIPT BASICS",
    description:
      "Start your JavaScript journey by mastering variables, functions, conditionals, loops, and basic DOM manipulation.",
    image: "/img/JS-BASIC-BG.png",
    bg: "#fffde7",
    accent: "#f7df1e",
    link: "/js-basic-course",
    badge: "Available Now",
    category: "Web",
  },
  {
    title: "JAVASCRIPT INTERMEDIATE",
    description:
      "Level up your JavaScript skills with ES6 features, asynchronous programming, APIs, closures, and advanced DOM techniques.",
    image: "/img/JS-INT-BG.png",
    bg: "#fff8e1",
    accent: "#f0a500",
    link: "/js-int-course",
    badge: "Available Now",
    category: "Web",
  },
  {
    title: "JAVASCRIPT ADVANCED",
    description:
      "Master Enterprise-Level JavaScript concepts, patterns, and architecture for building scalable applications.",
    image: "/img/JS-ADV-BG.png",
    bg: "#fef3c7",
    accent: "#d97706",
    link: "/js-adv-course",
    badge: "Available Now",
    category: "Web",
  },
  {
    title: "JAVA IN MY STYLE",
    description:
      "Comprehensive Java programming from basics to advanced concepts and application development.",
    image: "/img/JAVA-BG.png",
    bg: "#fff0e0",
    accent: "#f89820",
    link: "/java-course",
    badge: "Available Now",
    category: "Language",
  },
  {
    title: "PYTHON IN MY STYLE",
    description:
      "Learn Python programming for web development, data science, and automation.",
    image: "/img/PYTHON-BG.png",
    bg: "#e8f5e9",
    accent: "#3572A5",
    link: "/python-course",
    badge: "Available Now",
    category: "Language",
  },
  {
    title: "C IN MY STYLE",
    description:
      "Learn C programming from scratch with hands-on coding, memory management, pointers, and data structures.",
    image: "/img/C-BG.png",
    bg: "#e3f2fd",
    accent: "#0069c0",
    link: "/c-course",
    badge: "Available Now",
    category: "Language",
  },
  {
    title: "DEEP LEARNING",
    description:
      "Dive into deep learning with neural networks, backpropagation, CNNs, RNNs, and hands-on projects.",
    image: "/img/DL-BG.png",
    bg: "#f3e5f5",
    accent: "#9c27b0",
    link: "/dl-course",
    badge: "Available Now",
    category: "AI/ML",
  },
  {
    title: "MACHINE LEARNING",
    description:
      "Explore machine learning fundamentals including supervised and unsupervised learning and real-world ML projects.",
    image: "/img/ML-BG.png",
    bg: "#e8eaf6",
    accent: "#5c6bc0",
    link: "/ml-course",
    badge: "Available Now",
    category: "AI/ML",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Explore the fundamentals of AI, including intelligent agents, search algorithms, and decision-making models.",
    image: "/img/AI-BG.png",
    bg: "#fce4ec",
    accent: "#e91e63",
    link: "/ai-course",
    badge: "Available Now",
    category: "AI/ML",
  },
  {
    title: "DATA SCIENCE",
    description:
      "Master Data Science with statistics, data wrangling, visualization, and real-world analytics projects using Python.",
    image: "/img/DSC-BG.png",
    bg: "#e0f7fa",
    accent: "#0097a7",
    link: "/dsc-course",
    badge: "Available Now",
    category: "Data",
  },
  {
    title: "DSA IN MY STYLE",
    description:
      "Master Data Structures and Algorithms with interactive visualizers, code examples, and interview prep.",
    image: "/img/DSA-BG.png",
    bg: "#e8f5e9",
    accent: "#2e7d32",
    link: "/dsa-course",
    badge: "Available Now",
    category: "Data",
  },
  {
    title: "NLP IN MY STYLE",
    description:
      "Master Natural Language Processing from tokenization to transformers with code examples and MCQs.",
    image: "/img/NLP-BG.png",
    bg: "#ede7f6",
    accent: "#7b1fa2",
    link: "/nlp-course",
    badge: "Available Now",
    category: "AI/ML",
  },
  {
    title: "OS IN MY STYLE",
    description:
      "Master Operating Systems — processes, memory, file systems, security with interactive visualizations.",
    image: "/img/OS-BG.png",
    bg: "#eceff1",
    accent: "#546e7a",
    link: "/os-course",
    badge: "Available Now",
    category: "Systems",
  },
  {
    title: "SYSTEM DESIGN",
    description:
      "Master system design concepts from basics to real-world implementations with interactive diagrams.",
    image: "/img/SYSTEM-DESIGN-BG.png",
    bg: "#e8eaf6",
    accent: "#3949ab",
    link: "/system-design-course",
    badge: "Available Now",
    category: "Systems",
  },
  {
    title: "DATABASE IN MY STYLE",
    description:
      "Master SQL and MongoDB with live query execution, visualizers, and interview questions.",
    image: "/img/DBMS-BG.png",
    bg: "#fff3e0",
    accent: "#e65100",
    link: "/database-course",
    badge: "Available Now",
    category: "Data",
  },
  {
    title: "GEN AI IN MY STYLE",
    description:
      "Master Generative AI from foundations to production — LLMs, RAG, agents, embeddings, and applications.",
    image: "/img/GEN-AI-BG.png",
    bg: "#fce4ec",
    accent: "#c62828",
    link: "/genai-course",
    badge: "Available Now",
    category: "AI/ML",
  },
  {
    title: "FULL STACK PYTHON",
    description:
      "Master Python from fundamentals to deployment. Build REST APIs and ship production-ready applications.",
    image: "/img/FULL-STACK-PYTHON-BG.png",
    bg: "#e8f5e9",
    accent: "#1b5e20",
    link: "/fullstack-python-course",
    badge: "Available Now",
    category: "Systems",
  },
  {
    title: "FULL STACK JAVA",
    description:
      "Build scalable backend systems with Java and Spring Boot. Master microservices and deployment.",
    image: "/img/FULL-STACK-JAVA-BG.png",
    bg: "#fff8e1",
    accent: "#ff6f00",
    link: "/fullstack-java-platform-course",
    badge: "Available Now",
    category: "Systems",
  },
];

export default function PopularCourses() {
  const navigate = useNavigate();

  return (
    <section className="popular-courses-section" id="courses" aria-labelledby="courses-heading">
      <div className="popular-courses-container">
        <div className="popular-section-header">
          <div className="popular-section-pill">
            <i className="bi bi-stars" />
            All Courses
          </div>
          <h2 className="popular-section-title" id="courses-heading">
            Learn Anything,{" "}
            <span>In Your Style</span>
          </h2>
          <p className="popular-section-desc">
            20+ premium courses across Web, AI/ML, Data Science, Programming &amp; Systems — all crafted to take you from zero to job-ready.
          </p>
        </div>

        <div className="popular-courses-grid">
          {courses.map((c) => (
            <div
              key={c.title}
              className="popular-course-card popular-course-card--active"
              style={{ "--card-accent": c.accent }}
              onClick={() => navigate(c.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(c.link)}
              aria-label={`Go to ${c.title}`}
            >
              {/* Image area with brand-colored background — logo fits perfectly */}
              <div
                className="popular-course-card__img-wrap"
                style={{ backgroundColor: c.bg }}
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="popular-course-card__img"
                  loading="lazy"
                />
                <span className="popular-course-card__badge popular-course-card__badge--live">
                  <i className="bi bi-check-circle-fill" />
                  {c.badge}
                </span>
              </div>

              {/* Card body */}
              <div className="popular-course-card__body">
                <h3 className="popular-course-card__title">{c.title}</h3>
                <p className="popular-course-card__desc">{c.description}</p>
                <Link
                  to={c.link}
                  className="popular-btn popular-btn--primary popular-btn--sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="bi bi-arrow-right-circle-fill" />
                  Start Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import './Landing.css';

const courses = [
  { icon: 'fab fa-html5',       name: 'HTML',              desc: 'Master the building blocks of web development', link: '/html-course',     color: '#e44d26' },
  { icon: 'fab fa-css3-alt',    name: 'CSS',               desc: 'Create stunning designs and layouts',           link: '/css-course',      color: '#264de4' },
  { icon: 'fab fa-js-square',   name: 'JavaScript',        desc: 'Build dynamic and interactive web apps',        link: '/js-basic-course', color: '#f7df1e' },
  { icon: 'fab fa-python',      name: 'Python',            desc: 'Learn Python from basics to advanced',          link: '/python-course',   color: '#3572A5' },
  { icon: 'fab fa-java',        name: 'Java',              desc: 'Object-oriented programming mastery',           link: '/java-course',     color: '#b07219' },
  { icon: 'fas fa-brain',       name: 'Machine Learning',  desc: 'Build intelligent models and systems',          link: '/ml-course',       color: '#a855f7' },
  { icon: 'fas fa-robot',       name: 'Artificial Intelligence', desc: 'Explore the future of technology',        link: '/ai-course',       color: '#06b6d4' },
  { icon: 'fas fa-chart-line',  name: 'Data Science',      desc: 'Turn data into powerful insights',              link: '/dsc-course',      color: '#10b981' },
  { icon: 'fas fa-project-diagram', name: 'DSA',           desc: 'Master algorithms and data structures',         link: '/dsa-course',      color: '#f59e0b' },
  { icon: 'fas fa-network-wired',   name: 'Deep Learning', desc: 'Neural networks and AI systems',               link: '/dl-course',       color: '#ef4444' },
  { icon: 'fas fa-sitemap',     name: 'System Design',     desc: 'Build scalable, reliable systems',              link: '/system-design-course', color: '#8b5cf6' },
  { icon: 'fas fa-layer-group', name: 'Full Stack Python', desc: 'End-to-end web development with Python',       link: '/fullstack-python-course', color: '#0ea5e9' },
];

const stats = [
  { value: '15+', label: 'Free Courses' },
  { value: '100+', label: 'Lessons' },
  { value: '10K+', label: 'Learners' },
  { value: '100%', label: 'Free Forever' },
];

const Landing = () => {
  // If already logged in → skip landing, go straight to dashboard
  const token = localStorage.getItem('token');
  if (token) return <Navigate to="/home" replace />;

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="landing-page">

      {/* ── NAV ─────────────────────────────────────── */}
      <nav className="landing-nav">
        <div className="landing-nav-inner">
          <div className="landing-logo">
            <img src="/favicon.png" alt="Tech In My Style Logo" className="nav-logo-img" />
            <span>TECH IN MY STYLE</span>
          </div>
          <div className="landing-nav-actions">
            <Link to="/login"    className="nav-btn-outline">Login</Link>
            <Link to="/register" className="nav-btn-filled">Get Started Free</Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="landing-hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="landing-hero-inner" data-aos="fade-up">
          <div className="hero-badge">🎓 100% Free Learning Platform</div>
          <h1>
            Learn <span className="grad-text">Programming</span> &amp;<br />
            <span className="grad-text">Technology</span> the Smart Way
          </h1>
          <p className="hero-sub">
            Master HTML, CSS, JavaScript, Python, Java, AI, Machine Learning, Data Science,
            DSA, System Design and Full Stack Development — all in one place, completely free.
          </p>
          <div className="hero-cta">
            <Link to="/register" className="cta-primary">Start Learning Free <i className="fas fa-arrow-right"></i></Link>
            <Link to="/login"    className="cta-secondary">Already a member? Login</Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="stats-bar" data-aos="fade-up" data-aos-delay="200">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── COURSES GRID ─────────────────────────────── */}
      <section className="landing-courses" id="courses">
        <div className="lc-inner">
          <h2 data-aos="fade-up">Explore Our <span className="grad-text">Free Courses</span></h2>
          <p className="section-sub" data-aos="fade-up">From beginner to advanced — every course is handcrafted and 100% free</p>
          <div className="courses-grid" data-aos="fade-up" data-aos-delay="100">
            {courses.map((c, i) => (
              <Link to={c.link} className="course-card" key={i} style={{ '--accent': c.color }}>
                <div className="cc-icon"><i className={c.icon} style={{ color: c.color }}></i></div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <span className="cc-arrow"><i className="fas fa-arrow-right"></i></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────── */}
      <section className="landing-why">
        <div className="lc-inner">
          <h2 data-aos="fade-up">Why <span className="grad-text">Tech In My Style?</span></h2>
          <div className="why-grid">
            {[
              { icon: 'fas fa-infinity',     title: '100% Free',         desc: 'All courses are completely free. No hidden fees, no credit card required.' },
              { icon: 'fas fa-graduation-cap', title: 'Beginner Friendly', desc: 'Every course is designed from absolute scratch — perfect for beginners.' },
              { icon: 'fas fa-code',         title: 'Hands-on Learning', desc: 'Practice with live code examples and real-world projects.' },
              { icon: 'fas fa-users',        title: 'Community Support', desc: 'Join thousands of learners on Telegram, WhatsApp and YouTube.' },
              { icon: 'fas fa-language',     title: 'Telugu & English',  desc: 'Content available in both Telugu and English for local learners.' },
              { icon: 'fas fa-sync-alt',     title: 'Always Updated',    desc: 'Courses are regularly updated with the latest industry trends.' },
            ].map((w, i) => (
              <div className="why-card" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="why-icon"><i className={w.icon}></i></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="landing-cta-banner" data-aos="zoom-in">
        <div className="lc-inner cta-banner-inner">
          <h2>Ready to Start Your <span className="grad-text">Tech Journey?</span></h2>
          <p>Join 10,000+ learners who are already learning with Tech In My Style</p>
          <Link to="/register" className="cta-primary cta-large">
            Create Free Account <i className="fas fa-rocket"></i>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────── */}
      <footer className="landing-footer">
        <div className="lc-inner lf-inner">
          <div className="lf-brand">
            <img src="/favicon.png" alt="Tech In My Style" className="footer-logo-img" />
            <span>TECH IN MY STYLE</span>
          </div>
          <div className="lf-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/about-us">About Us</Link>
          </div>
          <div className="lf-social">
            <a href="https://www.youtube.com/@TECHINMYSTYLE"        target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/tech_in_my_style"    target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://t.me/Tech_in_my_style_bot"             target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a>
            <a href="https://wa.me/919390119848"                    target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
          <p className="lf-copy">&copy; {new Date().getFullYear()} Tech In My Style. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

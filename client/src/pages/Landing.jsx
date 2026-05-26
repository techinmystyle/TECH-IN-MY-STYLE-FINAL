import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import './Landing.css';

const courses = [
  { icon: 'fab fa-html5',           name: 'HTML',                  desc: 'Build the structure of the web',            link: '/html-course',                 color: '#e44d26', bg: '#2a1200' },
  { icon: 'fab fa-css3-alt',        name: 'CSS',                   desc: 'Style & design beautiful interfaces',       link: '/css-course',                  color: '#264de4', bg: '#050e2d' },
  { icon: 'fab fa-js-square',       name: 'JavaScript',            desc: 'Bring interactivity to your pages',         link: '/js-basic-course',             color: '#f7df1e', bg: '#1f1a00' },
  { icon: 'fab fa-python',          name: 'Python',                desc: 'Versatile language for every domain',       link: '/python-course',               color: '#4b8bbe', bg: '#001020' },
  { icon: 'fab fa-java',            name: 'Java',                  desc: 'Power of OOP & enterprise dev',             link: '/java-course',                 color: '#f89820', bg: '#1f0e00' },
  { icon: 'fas fa-code',            name: 'C Programming',         desc: 'Master the foundation of computing',        link: '/c-course',                    color: '#a8b9cc', bg: '#0f1218' },
  { icon: 'fas fa-brain',           name: 'Machine Learning',      desc: 'Build models that learn from data',         link: '/ml-course',                   color: '#a855f7', bg: '#1a0a2e' },
  { icon: 'fas fa-robot',           name: 'Artificial Intelligence', desc: 'Create thinking machines',               link: '/ai-course',                   color: '#06b6d4', bg: '#001a1f' },
  { icon: 'fas fa-network-wired',   name: 'Deep Learning',         desc: 'Neural networks & advanced AI',            link: '/dl-course',                   color: '#ef4444', bg: '#1f0404' },
  { icon: 'fas fa-language',        name: 'NLP',                   desc: 'Teach machines to understand language',    link: '/nlp-course',                  color: '#22c55e', bg: '#001808' },
  { icon: 'fas fa-magic',           name: 'Generative AI',         desc: 'Build AI that creates content',            link: '/genai-course',                color: '#f59e0b', bg: '#1f1000' },
  { icon: 'fas fa-chart-line',      name: 'Data Science',          desc: 'Turn raw data into insights',              link: '/dsc-course',                  color: '#10b981', bg: '#001a10' },
  { icon: 'fas fa-project-diagram', name: 'DSA',                   desc: 'Master algorithms & data structures',      link: '/dsa-course',                  color: '#f59e0b', bg: '#1f1000' },
  { icon: 'fas fa-database',        name: 'Database',              desc: 'SQL, NoSQL & database design',             link: '/database-course',             color: '#6366f1', bg: '#0d0d2e' },
  { icon: 'fas fa-desktop',         name: 'Operating Systems',     desc: 'How computers really work',                link: '/os-course',                   color: '#94a3b8', bg: '#0f1218' },
  { icon: 'fas fa-sitemap',         name: 'System Design',         desc: 'Architect scalable systems',               link: '/system-design-course',        color: '#8b5cf6', bg: '#130d1f' },
  { icon: 'fas fa-layer-group',     name: 'Full Stack Python',     desc: 'End-to-end Python web apps',               link: '/fullstack-python-course',     color: '#0ea5e9', bg: '#001420' },
  { icon: 'fas fa-layer-group',     name: 'Full Stack Java',       desc: 'End-to-end Java web apps',                link: '/fullstack-java-platform-course', color: '#f89820', bg: '#1f0e00' },
];

const stats = [
  { value: '18+',  label: 'Free Courses',   icon: 'fas fa-book-open' },
  { value: '500+', label: 'Lessons',        icon: 'fas fa-play-circle' },
  { value: '10K+', label: 'Learners',       icon: 'fas fa-users' },
  { value: '100%', label: 'Free Forever',   icon: 'fas fa-infinity' },
];

const features = [
  { icon: 'fas fa-infinity',        title: '100% Free Forever',     desc: 'All courses, all content — completely free. No credit card, no hidden fees, no paywalls.' },
  { icon: 'fas fa-graduation-cap',  title: 'Beginner Friendly',     desc: 'Every course starts from zero. No prior experience needed to begin your tech journey.' },
  { icon: 'fas fa-code',            title: 'Hands-on Projects',     desc: 'Learn by doing with real-world projects and live code examples in every lesson.' },
  { icon: 'fas fa-mobile-alt',      title: 'Learn Anywhere',        desc: 'Fully responsive platform. Learn on your phone, tablet, or desktop — anytime.' },
  { icon: 'fas fa-language',        title: 'Telugu & English',      desc: 'Content crafted in both Telugu and English for regional learners across India.' },
  { icon: 'fas fa-sync-alt',        title: 'Always Updated',        desc: 'Content is regularly refreshed with the latest industry tools and technologies.' },
];

const testimonials = [
  { name: 'Rahul K.', role: 'Web Developer', quote: 'I got my first job as a frontend developer after completing the HTML, CSS and JavaScript courses here. Amazing platform!', avatar: 'RK', color: '#818cf8' },
  { name: 'Priya S.', role: 'Data Scientist', quote: 'The Python and Machine Learning courses are incredibly well structured. I went from zero to landing an internship in 4 months.', avatar: 'PS', color: '#a855f7' },
  { name: 'Anil M.', role: 'Software Engineer', quote: 'DSA and System Design content here is better than paid platforms. Completely free and high quality — unbelievable!', avatar: 'AM', color: '#06b6d4' },
];

const Landing = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // If already logged in → skip landing, go straight to dashboard
  const token = localStorage.getItem('token');
  if (token) return <Navigate to="/home" replace />;

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="lp-root">

      {/* ════ NAV ════ */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <Link to="/" className="lp-brand">
            <img src="/favicon.png" alt="Tech In My Style" className="lp-brand-img" />
            <span>TECH IN MY STYLE</span>
          </Link>

          {/* Desktop nav links */}
          <div className="lp-nav-links">
            <a href="#courses"  className="lp-nav-link">Courses</a>
            <a href="#features" className="lp-nav-link">Features</a>
            <a href="#reviews"  className="lp-nav-link">Reviews</a>
          </div>

          <div className="lp-nav-actions">
            <Link to="/login"    className="lp-btn-ghost">Login</Link>
            <Link to="/register" className="lp-btn-primary">Get Started Free</Link>
          </div>

          {/* Hamburger */}
          <button className="lp-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
            <span className={menuOpen ? 'open' : ''} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lp-mobile-menu">
            <a href="#courses"  onClick={() => setMenuOpen(false)}>Courses</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#reviews"  onClick={() => setMenuOpen(false)}>Reviews</a>
            <Link to="/login"    onClick={() => setMenuOpen(false)} className="lp-btn-ghost w-full">Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)} className="lp-btn-primary w-full">Get Started Free</Link>
          </div>
        )}
      </nav>

      {/* ════ HERO ════ */}
      <section className="lp-hero">
        {/* Animated background orbs */}
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />
        <div className="lp-orb lp-orb-3" />

        {/* Floating tech pills */}
        <div className="lp-float-pills" aria-hidden="true">
          <span className="pill" style={{ '--d': '0s',   top: '18%', left: '6%'  }}><i className="fab fa-html5"   style={{color:'#e44d26'}}/> HTML</span>
          <span className="pill" style={{ '--d': '0.5s', top: '30%', left: '3%'  }}><i className="fab fa-python"  style={{color:'#4b8bbe'}}/> Python</span>
          <span className="pill" style={{ '--d': '1s',   top: '55%', left: '5%'  }}><i className="fas fa-brain"   style={{color:'#a855f7'}}/> ML</span>
          <span className="pill" style={{ '--d': '1.5s', top: '70%', left: '8%'  }}><i className="fab fa-js"      style={{color:'#f7df1e'}}/> JS</span>
          <span className="pill" style={{ '--d': '0.3s', top: '18%', right: '6%' }}><i className="fab fa-java"    style={{color:'#f89820'}}/> Java</span>
          <span className="pill" style={{ '--d': '0.8s', top: '35%', right: '3%' }}><i className="fas fa-robot"   style={{color:'#06b6d4'}}/> AI</span>
          <span className="pill" style={{ '--d': '1.3s', top: '58%', right: '5%' }}><i className="fas fa-chart-line" style={{color:'#10b981'}}/> Data</span>
          <span className="pill" style={{ '--d': '1.8s', top: '72%', right: '8%' }}><i className="fab fa-css3-alt"style={{color:'#264de4'}}/> CSS</span>
        </div>

        <div className="lp-hero-inner" data-aos="fade-up">
          <div className="lp-badge">
            <span className="badge-dot" /> Free Learning Platform &nbsp;·&nbsp; 18+ Courses
          </div>

          <h1 className="lp-hero-h1">
            Learn <span className="lp-grad">Programming</span><br />
            &amp; <span className="lp-grad">Technology</span><br className="lp-br-mobile"/>
            <span className="lp-hero-sub-title"> the Smart Way</span>
          </h1>

          <p className="lp-hero-p">
            Master HTML, CSS, JavaScript, Python, Java, AI, Machine Learning,
            Data Science, DSA, System Design &amp; Full Stack — all in one place, <strong>completely free</strong>.
          </p>

          <div className="lp-hero-cta">
            <Link to="/register" className="lp-btn-primary lp-btn-lg">
              Start Learning Free &nbsp;<i className="fas fa-arrow-right" />
            </Link>
            <Link to="/login" className="lp-btn-outline lp-btn-lg">
              <i className="fas fa-sign-in-alt" />&nbsp; Login
            </Link>
          </div>

          {/* Trust badges */}
          <div className="lp-trust">
            <span><i className="fas fa-check-circle" /> No credit card</span>
            <span><i className="fas fa-check-circle" /> No signup fees</span>
            <span><i className="fas fa-check-circle" /> Cancel anytime</span>
          </div>
        </div>

        {/* Stats */}
        <div className="lp-stats" data-aos="fade-up" data-aos-delay="150">
          {stats.map((s, i) => (
            <div className="lp-stat" key={i}>
              <i className={s.icon} />
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ════ COURSES ════ */}
      <section className="lp-section" id="courses">
        <div className="lp-container">
          <div className="lp-section-head" data-aos="fade-up">
            <span className="lp-eyebrow">Our Curriculum</span>
            <h2>Explore <span className="lp-grad">18+ Free Courses</span></h2>
            <p>From beginner to expert — every course is handcrafted and completely free</p>
          </div>

          <div className="lp-courses-grid">
            {courses.map((c, i) => (
              <Link
                to={c.link}
                className="lp-course-card"
                key={i}
                style={{ '--ac': c.color, '--bg': c.bg }}
                data-aos="fade-up"
                data-aos-delay={Math.min((i % 4) * 60, 200)}
              >
                <div className="lp-cc-icon">
                  <i className={c.icon} style={{ color: c.color }} />
                </div>
                <div className="lp-cc-body">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="lp-cc-arrow">
                  <i className="fas fa-chevron-right" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FEATURES ════ */}
      <section className="lp-section lp-section-alt" id="features">
        <div className="lp-container">
          <div className="lp-section-head" data-aos="fade-up">
            <span className="lp-eyebrow">Why Choose Us</span>
            <h2>Everything You Need to <span className="lp-grad">Succeed</span></h2>
            <p>Built for learners, by learners — we know what it takes to grow</p>
          </div>

          <div className="lp-features-grid">
            {features.map((f, i) => (
              <div className="lp-feature-card" key={i} data-aos="fade-up" data-aos-delay={i * 70}>
                <div className="lp-feat-icon"><i className={f.icon} /></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section className="lp-section" id="reviews">
        <div className="lp-container">
          <div className="lp-section-head" data-aos="fade-up">
            <span className="lp-eyebrow">Success Stories</span>
            <h2>Learners Who <span className="lp-grad">Transformed</span> Their Careers</h2>
          </div>

          <div className="lp-testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="lp-testimonial" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="lp-t-quote"><i className="fas fa-quote-left" /></div>
                <p className="lp-t-text">"{t.quote}"</p>
                <div className="lp-t-author">
                  <div className="lp-t-avatar" style={{ background: t.color }}>{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section className="lp-cta-section" data-aos="zoom-in">
        <div className="lp-cta-orb lp-cta-orb-1" />
        <div className="lp-cta-orb lp-cta-orb-2" />
        <div className="lp-container lp-cta-inner">
          <h2>Ready to Start Your <span className="lp-grad">Tech Journey?</span></h2>
          <p>Join 10,000+ learners who are already building their future with Tech In My Style</p>
          <div className="lp-cta-btns">
            <Link to="/register" className="lp-btn-primary lp-btn-lg">
              Create Free Account &nbsp;<i className="fas fa-rocket" />
            </Link>
            <Link to="/login" className="lp-btn-ghost lp-btn-lg">
              Already have an account
            </Link>
          </div>
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer className="lp-footer">
        <div className="lp-container">
          <div className="lp-footer-top">
            <div className="lp-footer-brand">
              <Link to="/" className="lp-brand">
                <img src="/favicon.png" alt="Tech In My Style" className="lp-brand-img" />
                <span>TECH IN MY STYLE</span>
              </Link>
              <p>Empowering the next generation of developers with free, world-class tech education.</p>
              <div className="lp-social">
                <a href="https://www.youtube.com/@TECHINMYSTYLE"     target="_blank" rel="noopener noreferrer" title="YouTube"><i className="fab fa-youtube" /></a>
                <a href="https://www.instagram.com/tech_in_my_style" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fab fa-instagram" /></a>
                <a href="https://t.me/Tech_in_my_style_bot"          target="_blank" rel="noopener noreferrer" title="Telegram"><i className="fab fa-telegram" /></a>
                <a href="https://wa.me/919390119848"                  target="_blank" rel="noopener noreferrer" title="WhatsApp"><i className="fab fa-whatsapp" /></a>
              </div>
            </div>

            <div className="lp-footer-cols">
              <div className="lp-footer-col">
                <h4>Quick Links</h4>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <a href="#courses">Courses</a>
                <a href="#features">Features</a>
              </div>
              <div className="lp-footer-col">
                <h4>Courses</h4>
                <Link to="/html-course">HTML</Link>
                <Link to="/python-course">Python</Link>
                <Link to="/js-basic-course">JavaScript</Link>
                <Link to="/ml-course">Machine Learning</Link>
                <Link to="/dsa-course">DSA</Link>
              </div>
              <div className="lp-footer-col">
                <h4>Legal</h4>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                <Link to="/disclaimer">Disclaimer</Link>
                <Link to="/about-us">About Us</Link>
              </div>
            </div>
          </div>

          <div className="lp-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tech In My Style. All rights reserved.</p>
            <p>Made with <i className="fas fa-heart" style={{color:'#ef4444'}}/> in Andhra Pradesh, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

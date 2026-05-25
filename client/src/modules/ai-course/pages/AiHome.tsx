import { Link } from 'react-router-dom'
import AiHeader from '../components/AiHeader'
import AiFooter from '../components/AiFooter'
import PopularCourses from '../../../components/PopularCourses'
import '../styles/ai-landing.css'

const features = [
  { icon: 'fa-brain', cls: 'fc-icon-1', title: 'Deep Coverage', desc: 'From AI fundamentals to advanced algorithms — every concept explained clearly.' },
  { icon: 'fa-code', cls: 'fc-icon-2', title: 'Code Examples', desc: 'Real Python code for every topic so you can learn by doing.' },
  { icon: 'fa-briefcase', cls: 'fc-icon-3', title: 'Interview Prep', desc: 'Curated Q&A for AI job interviews at top tech companies.' },
  { icon: 'fa-globe', cls: 'fc-icon-4', title: 'Real Applications', desc: 'See how AI transforms healthcare, finance, gaming, and more.' },
]

const previews = [
  { icon: '🤖', title: 'What is AI?', desc: 'Discover the fundamental concepts, history, and importance of Artificial Intelligence.', link: '/ai-course/topics/what-is-ai/definition' },
  { icon: '🧠', title: 'Types of AI', desc: 'Explore Narrow AI, General AI, and Super AI — their capabilities and differences.', link: '/ai-course/topics/types/narrow-ai' },
  { icon: '⚡', title: 'AI vs ML vs DL', desc: 'Understand the key differences between AI, Machine Learning, and Deep Learning.', link: '/ai-course/topics/ai-ml-dl/differences' },
]

export default function AiHome() {
  return (
    <>
      <AiHeader />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid-bg" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot" />
              Free AI Learning Platform
            </div>
            <h1 className="hero-title">
              Master <span className="grad">Artificial</span><br />
              <span className="grad2">Intelligence</span> Today
            </h1>
            <p className="hero-desc">
              Dive deep into AI concepts, algorithms, and real-world applications with structured lessons, code examples, and interview prep — all in one place.
            </p>
            <div className="hero-actions">
              <Link to="/ai-course/topics" className="btn btn-primary">
                <i className="fas fa-rocket"></i> Start Learning
              </Link>
              <Link to="/ai-course/about" className="btn btn-outline">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">30+</span>
                <span className="stat-label">Topics</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Free</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">11</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-main-card">
                <div className="hmc-header">
                  <div>
                    <div className="hmc-title">AI Chatbot</div>
                    <div className="hmc-sub">Simple NLP Example</div>
                  </div>
                </div>
                <div className="hmc-code">
                  <div><span className="kw">def</span> <span className="fn">chatbot</span>(user_input):</div>
                  <div>&nbsp;&nbsp;<span className="cm"># AI decision logic</span></div>
                  <div>&nbsp;&nbsp;<span className="kw">if</span> <span className="str">"hello"</span> <span className="kw">in</span> user_input:</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span> <span className="str">"Hi! How can I help?"</span></div>
                  <div>&nbsp;&nbsp;<span className="kw">return</span> <span className="str">"I'm learning..."</span></div>
                </div>
                <div className="hmc-tags">
                  <span className="hmc-tag">Python</span>
                  <span className="hmc-tag">NLP</span>
                  <span className="hmc-tag">Beginner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div className="section-label"><span className="badge badge-purple">Why Choose Us</span></div>
          <h2 className="section-title">Everything you need to <span className="grad">learn AI</span></h2>
          <p className="section-sub">Structured content designed for students, developers, and professionals at every level.</p>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className={`fc-icon ${f.cls}`}><i className={`fas ${f.icon}`}></i></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS PREVIEW */}
      <section className="topics-preview">
        <div className="container">
          <div className="section-label"><span className="badge badge-cyan">Featured Topics</span></div>
          <h2 className="section-title">Start with the <span className="grad">essentials</span></h2>
          <p className="section-sub">Hand-picked topics to get you started on your AI journey.</p>
          <div className="tp-grid">
            {previews.map((t, i) => (
              <div className="tp-card" key={i}>
                <div className="tp-icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <Link to={t.link} className="tp-link">
                  Explore topic <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
          <div className="tp-center">
            <Link to="/ai-course/topics" className="btn btn-primary">
              <i className="fas fa-th-large"></i> View All 30+ Topics
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <PopularCourses />

      {/* CTA */}
      <div className="container">
        <div className="cta-banner">
          <h2>Ready to dive deeper into <span className="grad">AI</span>?</h2>
          <p>Explore our full collection of topics, code examples, and interview questions.</p>
          <div className="cta-actions">
            <Link to="/ai-course/topics" className="btn btn-primary">
              <i className="fas fa-rocket"></i> Explore All Topics
            </Link>
            <Link to="/ai-course/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <AiFooter />
    </>
  )
}

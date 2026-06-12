import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import SEO from '../components/SEO';
import './Home.css';
import AOS from 'aos';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('Guest');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Check auth state
    const token = localStorage.getItem('token');
    const storedName = localStorage.getItem('username');
    if (token && storedName) {
      setIsLoggedIn(true);
      setUsername(storedName);
    }

    // Custom cursor (desktop only)
    if (window.innerWidth <= 768) return;
    const existingCursor = document.querySelector('.custom-cursor');
    if (existingCursor) existingCursor.remove();

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    cursor.appendChild(cursorDot);
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      const c = document.querySelector('.custom-cursor');
      if (c) c.remove();
    };
  }, []);

  const features = [
    { icon: 'fas fa-home',         title: 'Home',            description: 'Your starting point with all the rules and guidelines to make your learning journey across all courses smooth and effective.',                                                                link: '/' },
    { icon: 'fas fa-book',         title: 'Courses',         description: "We've created beginner-friendly courses on HTML, CSS, JavaScript, Java, and Python to help learners build a strong foundation in web development and programming.", link: '/courses' },
    { icon: 'fas fa-comment-dots', title: 'Feedback Center', description: 'If any inconvenience are there then please submit here to help us improve your experience.',                                                                                                   link: '/feedback' },
    { icon: 'fas fa-users',        title: 'About Us',        description: 'Meet our passionate team dedicated to making tech education accessible',                                                                                                                        link: '/about-us' },
    { icon: 'fas fa-comments',     title: 'Stay Connected',  description: 'Join our community and stay updated with the latest in tech education',                                                                                                                         link: '/stay-connected' },
  ];

  const courses = [
    { id: 1, name: 'HTML in My Style', icon: 'fab fa-html5', description: 'Master HTML fundamentals and web structure.', link: '/html-course' },
    { id: 2, name: 'CSS in My Style', icon: 'fab fa-css3-alt', description: 'Learn CSS styling, layouts, and responsive design.', link: '/css-course' },
    { id: 3, name: 'JavaScript Basic in My Style', icon: 'fab fa-js', description: 'Understand JavaScript fundamentals and DOM manipulation.', link: '/js-basic-course' },
    { id: 4, name: 'JavaScript Intermediate in My Style', icon: 'fab fa-js', description: 'Advance your JavaScript skills with intermediate concepts.', link: '/js-int-course' },
    { id: 5, name: 'JavaScript Advanced in My Style', icon: 'fab fa-js', description: 'Master Enterprise-Level JavaScript concepts and architecture.', link: '/js-adv-course' },
    { id: 12, name: 'C in My Style', icon: 'fas fa-copyright', description: 'Master the fundamentals of C programming.', link: '/c-course' },
    { id: 6, name: 'Java in My Style', icon: 'fab fa-java', description: 'Learn Java programming for robust applications.', link: '/java-course' },
    { id: 7, name: 'Python in My Style', icon: 'fab fa-python', description: 'Explore Python for web development and data science.', link: '/python-course' },
    { id: 8, name: 'AI in My Style', icon: 'fas fa-robot', description: 'Dive into Artificial Intelligence concepts and algorithms.', link: '/ai-course' },
    { id: 9, name: 'ML in My Style', icon: 'fas fa-brain', description: 'Learn Machine Learning techniques and models.', link: '/ml-course' },
    { id: 10, name: 'DL in My Style', icon: 'fas fa-network-wired', description: 'Master Deep Learning with neural networks.', link: '/dl-course' },
    { id: 11, name: 'DSC in My Style', icon: 'fas fa-chart-bar', description: 'Gain expertise in Data Science concepts.', link: '/dsc-course' },
    { id: 13, name: 'DSA in My Style', icon: 'fas fa-sitemap', description: 'Master Data Structures and Algorithms with visualizers.', link: '/dsa-course' },
    { id: 14, name: 'NLP in My Style', icon: 'fas fa-language', description: 'Master Natural Language Processing.', link: '/nlp-course' },
    { id: 15, name: 'OS in My Style', icon: 'fas fa-microchip', description: 'Master Operating Systems concepts.', link: '/os-course' },
    { id: 16, name: 'System Design in My Style', icon: 'fas fa-server', description: 'Master system design concepts from basics to real-world.', link: '/system-design-course' },
    { id: 17, name: 'Database in My Style', icon: 'fas fa-database', description: 'Master SQL and MongoDB with live query execution.', link: '/database-course' },
    { id: 18, name: 'Gen AI in My Style', icon: 'fas fa-wand-magic-sparkles', description: 'Master Generative AI from foundations to production.', link: '/genai-course' },
    { id: 19, name: 'Full Stack Python in My Style', icon: 'fab fa-python', description: 'Master Python from fundamentals to deployment.', link: '/fullstack-python-course' },
    { id: 20, name: 'Full Stack Java in My Style', icon: 'fab fa-java', description: 'Build scalable backend systems with Java and Spring Boot.', link: '/fullstack-java-platform-course' }
  ];

  const testimonials = [
    { name: 'Developer', icon: 'fas fa-code',        quote: 'Not just a website, but a journey of learning crafted in code, powered by passion, and built to guide every learner toward success.' },
    { name: 'Designer',  icon: 'fas fa-paint-brush', quote: 'I turned wireframes into reality, styling each section not just to look good, but to make learning feel effortless.' },
    { name: 'Developer', icon: 'fas fa-laptop-code', quote: 'With every function and event, I brought interactivity to life—because education today is not static, it is dynamic.' },
  ];

  const contactInfo = [
    { icon: 'fas fa-envelope',       title: 'Email',    content: 'techinmystyle@gmail.com' },
    { icon: 'fas fa-phone',          title: 'Phone',    content: '+91 9491342710' },
    { icon: 'fas fa-map-marker-alt', title: 'Location', content: 'Andhra Pradesh, India' },
  ];

  const socialLinks = [
    { icon: 'fab fa-instagram', name: 'Instagram', link: 'https://www.instagram.com/tech_in_my_style?igsh=MWVpb2dzcmhwZ2NicQ==' },
    { icon: 'fab fa-youtube',   name: 'YouTube',   link: 'https://youtube.com/@tech-in-my-style?si=G48ugz-d8oO7-4Dw' },
    { icon: 'fab fa-telegram',  name: 'Telegram',  link: 'https://t.me/Tech_in_my_style_bot' },
    { icon: 'fab fa-whatsapp',  name: 'WhatsApp',  link: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d' },
  ];

  return (
    <div className="home-page">
      <SEO 
        title="Tech In My Style — Free Programming Courses"
        description="Tech In My Style — Learn coding the smart way with 20+ free programming courses in HTML, CSS, JavaScript, Python, Java, AI, Machine Learning, Deep Learning, NLP, Data Science, DSA, System Design, and Full Stack Development."
        keywords="tech in my style, techinmystyle, programming courses, learn to code free, HTML tutorial, CSS tutorial, JavaScript course, Python programming, Java course, machine learning, deep learning, NLP, data science, DSA, system design, full stack development, free coding courses India"
      />
      <WebGLBackground />
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="hero-center" data-aos="fade-up">
          {isLoggedIn ? (
            <div className="welcome-message">Welcome back, {username}!</div>
          ) : (
            <div className="welcome-message" style={{fontSize:'1rem', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', opacity:0.85}}>🚀 Free Programming Courses — No Credit Card Required</div>
          )}
          <h1 style={{fontSize:'clamp(1.4rem,4vw,2.2rem)', fontWeight:700, color:'inherit', marginBottom:'0.5rem', opacity:0, position:'absolute', pointerEvents:'none'}}>Tech In My Style — Learn Programming, Web Development, AI and Data Science for Free</h1>
          <h2>Learn to <span className="color-change">code</span> and <span className="color-change">create</span> with <span className="color-change">confidence</span></h2>
          <div className="hero-buttons">
            <Link to="/courses" className="btn primary" id="explore-courses-btn">Explore Courses</Link>
            {!isLoggedIn ? (
              <Link to="/register" className="btn secondary" id="join-free-btn">Join Free</Link>
            ) : (
              <button className="btn secondary" id="learn-more-btn" onClick={() => document.getElementById('learn-more').scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="learn-more" className="learn-more">
        <div className="container">
          <h2 data-aos="fade-up">Discover Our Features</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <article className="feature-card" key={i} data-aos="fade-up" data-aos-delay={i * 100} onClick={() => window.location.href = f.link}>
                <i className={f.icon}></i>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section id="courses" className="courses">
        <div className="container">
          <h2 data-aos="fade-up">Our Courses</h2>
          <div className="courses-grid">
            {courses.map((course, i) => (
              <article className="course-card" key={course.id} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="course-image">
                  <i className={course.icon}></i>
                </div>
                <div className="course-content">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <Link to={course.link} className="btn course-btn">Visit Course</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="courses-cta" data-aos="fade-up">
            <Link to="/courses" className="btn primary">View More Courses</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 data-aos="fade-up">What we Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <article className="testimonial-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="testimonial-avatar-icon">
                  <i className={t.icon}></i>
                </div>
                <h4>{t.name}</h4>
                <p>"{t.quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">
          <div className="about-content" data-aos="fade-up">
            <div className="about-image">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="about-text">
              <h2>About Tech In My Style</h2>
              <p>We are a passionate team of educators and developers dedicated to making technology education accessible to everyone. Our mission is to empower learners with practical skills and knowledge through comprehensive, beginner-friendly courses.</p>
              <p>With courses covering HTML, CSS, JavaScript, Python, Java, C, AI, ML, DL, and Data Science, we provide a complete learning path for aspiring developers and tech enthusiasts.</p>
              <Link to="/about-us" className="btn primary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="container">
          <h2 data-aos="fade-up">Get In Touch</h2>
          <div className="contact-content" data-aos="fade-up">
            <div className="contact-left">
              <h3>Contact Information</h3>
              <div className="info-cards">
                {contactInfo.map((info, i) => (
                  <div className="info-card" key={i}>
                    <i className={info.icon}></i>
                    <div>
                      <h4>{info.title}</h4>
                      <p>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="social-heading">Follow Us</h3>
              <div className="social-roadmap">
                {socialLinks.map((s, i) => (
                  <div className="social-item" key={i}>
                    <a href={s.link} target="_blank" rel="noopener noreferrer">
                      <i className={s.icon}></i>
                    </a>
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-right">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551864.80055785!2d73.7250245!3d20.5936832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  allowFullScreen="" loading="lazy" title="India Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Showcase */}
      <section className="tech-showcase">
        <div className="container">
          <div className="tech-card" data-aos="fade-up">
            <div className="tech-text">TECH IN MY STYLE</div>
            <p className="tech-subtitle">Empowering the next generation of developers</p>
            <Link to="/courses" className="btn primary tech-btn">Explore All Courses</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

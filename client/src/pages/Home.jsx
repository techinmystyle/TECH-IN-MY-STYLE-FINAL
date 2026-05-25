import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import './Home.css';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // Welcome message
    const username = localStorage.getItem('username') || 'Guest';
    const welcomeEl = document.getElementById('welcome');
    if (welcomeEl) {
      welcomeEl.textContent = `Welcome, ${username}!`;
    }

    // Remove any existing custom cursor
    const existingCursor = document.querySelector('.custom-cursor');
    if (existingCursor) {
      existingCursor.remove();
    }

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

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.remove();
      }
    };
  }, []);

  const features = [
    {
      icon: 'fas fa-home',
      title: 'Home',
      description: 'Your starting point with all the rules and guidelines to make your learning journey across all courses smooth and effective.',
      link: '/'
    },
    {
      icon: 'fas fa-book',
      title: 'Courses',
      description: "We've created beginner-friendly courses on HTML, CSS, JavaScript, Java, and Python to help learners build a strong foundation in web development and programming.",
      link: '/courses'
    },
    {
      icon: 'fas fa-comment-dots',
      title: 'Feedback Center',
      description: 'If any inconvenience are there then please submit here to help us improve your experience.',
      link: '/feedback'
    },
    {
      icon: 'fas fa-users',
      title: 'About Us',
      description: 'Meet our passionate team dedicated to making tech education accessible',
      link: '/about-us'
    },
    {
      icon: 'fas fa-comments',
      title: 'Stay Connected',
      description: 'Join our community and stay updated with the latest in tech education',
      link: '/stay-connected'
    }
  ];

  const courses = [
    {
      id: 1,
      name: 'HTML IN MY STYLE',
      icon: 'fab fa-html5',
      description: 'Master the building blocks of web development with comprehensive HTML training',
      link: '/html-course'
    },
    {
      id: 2,
      name: 'CSS IN MY STYLE',
      icon: 'fab fa-css3-alt',
      description: 'Create stunning designs and layouts with advanced CSS techniques',
      link: '/css-course'
    },
    {
      id: 3,
      name: 'JAVASCRIPT BASIC IN MY STYLE',
      icon: 'fab fa-js-square',
      description: 'Learn the building blocks of JavaScript, step by step',
      link: '/js-basic-course'
    }
  ];

  const testimonials = [
    {
      name: 'Developer',
      icon: 'fas fa-code',
      initials: 'BD',
      quote: 'Not just a website, but a journey of learning crafted in code, powered by passion, and built to guide every learner toward success.'
    },
    {
      name: 'Designer',
      icon: 'fas fa-paint-brush',
      initials: 'RK',
      quote: 'I turned wireframes into reality, styling each section not just to look good, but to make learning feel effortless.'
    },
    {
      name: 'Developer',
      icon: 'fas fa-laptop-code',
      initials: 'AD',
      quote: 'With every function and event, I brought interactivity to life—because education today is not static, it is dynamic.'
    }
  ];

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'techinmystyle@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+91 9491342710'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Andhra Pradesh, India'
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      link: 'https://www.instagram.com/techinmystyle'
    },
    {
      icon: 'fab fa-youtube',
      name: 'YouTube',
      link: 'https://www.youtube.com/@TECHINMYSTYLE'
    },
    {
      icon: 'fab fa-telegram',
      name: 'Telegram',
      link: 'https://t.me/Tech_in_my_style_bot'
    },
    {
      icon: 'fab fa-whatsapp',
      name: 'WhatsApp',
      link: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d'
    }
  ];

  return (
    <div className="home-page">
      <WebGLBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-center" data-aos="fade-up">
          <div className="welcome-message" id="welcome"></div>
          <h2>Learn to <span className="color-change">code</span> and <span className="color-change">create</span> with <span className="color-change">confidence</span></h2>
          <div className="hero-buttons">
            <Link to="/courses" className="btn primary">Explore Courses</Link>
            <button className="btn secondary" onClick={() => document.getElementById('learn-more').scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Learn More / Features Section */}
      <section id="learn-more" className="learn-more">
        <div className="container">
          <h2 data-aos="fade-up">Discover Our Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <article 
                className="feature-card" 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => window.location.href = feature.link}
              >
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <div className="container">
          <h2 data-aos="fade-up">Popular Courses</h2>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <article className="course-card" key={course.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="course-image">
                  <i className={course.icon}></i>
                </div>
                <div className="course-content">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <a href={course.link} title={`Learn ${course.name}`}>
                    <div className="btn course-btn">Visit Course</div>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="courses-cta" data-aos="fade-up">
            <Link to="/courses" className="btn primary">View More Courses</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 data-aos="fade-up">What we Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <article className="testimonial-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-avatar-icon">
                  <i className={testimonial.icon}></i>
                </div>
                <h4>{testimonial.name}</h4>
                <p>"{testimonial.quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="about-section-heading" data-aos="fade-up">About Tech In My Style</h2>
          <div className="about-content" data-aos="fade-up">
            <div className="about-image">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="about-text">
              <p>We are a passionate team of educators and developers dedicated to making technology education accessible to everyone. Our mission is to empower learners with practical skills and knowledge through comprehensive, beginner-friendly courses.</p>
              <p>With courses covering HTML, CSS, JavaScript, Python, Java, C, AI, ML, DL, and Data Science, we provide a complete learning path for aspiring developers and tech enthusiasts.</p>
              <Link to="/about-us" className="btn primary">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 data-aos="fade-up">Get In Touch</h2>
          <div className="contact-content" data-aos="fade-up">
            <div className="contact-left">
              <h3>Contact Information</h3>
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div className="info-card" key={index}>
                    <i className={info.icon}></i>
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                ))}
              </div>
              <h3 className="social-heading">Follow Us</h3>
              <div className="social-roadmap">
                {socialLinks.map((social, index) => (
                  <div className="social-item" key={index}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <i className={social.icon}></i>
                    </a>
                    <span>{social.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-right">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551864.80055785!2d73.7250245!3d20.5936832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  title="India Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Showcase Section */}
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

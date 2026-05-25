import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>TECH IN MY STYLE</h3>
            <p>Empowering the next generation of developers with hands-on learning experiences and industry-recognized certifications.</p>
          </div>
          <div className="footer-links">
            <div className="footer-row footer-row-1">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <Link to="/"><i className="fas fa-home"></i> HOME</Link>
                <Link to="/courses"><i className="fas fa-book"></i> COURSES</Link>
                <Link to="/about-us"><i className="fas fa-info-circle"></i> ABOUT US</Link>
                <Link to="/stay-connected"><i className="fas fa-users"></i> STAY CONNECTED</Link>
                <Link to="/feedback"><i className="fas fa-comment"></i> FEEDBACK</Link>
                <Link to="/leaderboard"><i className="fas fa-trophy"></i> LEADERBOARD</Link>
              </div>
              <div className="footer-column">
                <h4>Web Development</h4>
                <Link to="/html-course"><i className="fab fa-html5"></i> HTML</Link>
                <Link to="/css-course"><i className="fab fa-css3-alt"></i> CSS</Link>
                <Link to="/js-basic-course"><i className="fab fa-js"></i> JavaScript Basic</Link>
                <Link to="/js-int-course"><i className="fab fa-js"></i> JavaScript Intermediate</Link>
                <Link to="/js-adv-course"><i className="fab fa-js"></i> JavaScript Advanced</Link>
              </div>
              <div className="footer-column">
                <h4>Programming</h4>
                <Link to="/c-course"><i className="fas fa-code"></i> C Programming</Link>
                <Link to="/java-course"><i className="fab fa-java"></i> Java</Link>
                <Link to="/python-course"><i className="fab fa-python"></i> Python</Link>
              </div>
              <div className="footer-column">
                <h4>AI & Machine Learning</h4>
                <Link to="/ml-course"><i className="fas fa-brain"></i> Machine Learning</Link>
                <Link to="/dl-course"><i className="fas fa-network-wired"></i> Deep Learning</Link>
                <Link to="/ai-course"><i className="fas fa-robot"></i> Artificial Intelligence</Link>
                <Link to="/nlp-course"><i className="fas fa-language"></i> NLP</Link>
                <Link to="/genai-course"><i className="fas fa-magic"></i> Generative AI</Link>
                <Link to="/dsc-course"><i className="fas fa-chart-line"></i> Data Science</Link>
              </div>
            </div>
            <div className="footer-row footer-row-2">
              <div className="footer-column">
                <h4>Computer Science</h4>
                <Link to="/dsa-course"><i className="fas fa-project-diagram"></i> DSA</Link>
                <Link to="/database-course"><i className="fas fa-database"></i> Database</Link>
                <Link to="/os-course"><i className="fas fa-desktop"></i> Operating Systems</Link>
                <Link to="/system-design-course"><i className="fas fa-sitemap"></i> System Design</Link>
              </div>
              <div className="footer-column">
                <h4>Full Stack</h4>
                <Link to="/fullstack-python-course"><i className="fas fa-layer-group"></i> Full Stack Python</Link>
                <Link to="/fullstack-java-platform-course"><i className="fas fa-layer-group"></i> Full Stack Java</Link>
              </div>
              <div className="footer-column">
                <h4>Connect With Us</h4>
                <a href="https://www.instagram.com/techinmystyle" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://youtube.com/@TECHINMYSTYLE" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a href="https://wa.me/919390119848" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a href="https://t.me/Tech_in_my_style_bot" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram"></i> Telegram
                </a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/privacy-policy"><i className="fas fa-shield-alt"></i> Privacy Policy</Link>
                <Link to="/terms-and-conditions"><i className="fas fa-file-contract"></i> Terms &amp; Conditions</Link>
                <Link to="/disclaimer"><i className="fas fa-exclamation-circle"></i> Disclaimer</Link>
                <Link to="/about-us"><i className="fas fa-info-circle"></i> About Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TECH IN MY STYLE. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
            <span>|</span>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
          <div className="scroll-top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

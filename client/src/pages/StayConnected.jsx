import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import './StayConnected.css';
import AOS from 'aos';

const StayConnected = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    // Custom cursor implementation
    const initCustomCursor = () => {
      if (window.innerWidth <= 768) return;

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
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
      });
      
      document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
          cursor.style.opacity = '0';
        }
      });
    };

    initCustomCursor();

    // Cleanup function
    return () => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.remove();
      }
    };
  }, []);

  const socialMedia = [
    {
      platform: 'instagram',
      name: 'Instagram',
      icon: 'fab fa-instagram',
      handle: '@techinmystyle',
      description: 'Daily coding tips, behind-the-scenes content, and student success stories',
      recentPost: '"Hit the ❤️ if you like the website"',
      link: 'https://www.instagram.com/techinmystyle?igsh=YXIxdWl2NGFmdXZk'
    },
    {
      platform: 'youtube',
      name: 'YouTube',
      icon: 'fab fa-youtube',
      handle: 'Tech In My Style',
      description: 'Free tutorials, course previews, and live coding sessions',
      recentPost: '"Smash the 🔔 & ❤️ if you enjoyed the website"',
      link: 'https://www.youtube.com/@TECHINMYSTYLE'
    },
    {
      platform: 'twitter',
      name: 'Twitter',
      icon: 'fab fa-twitter',
      handle: '@techinmystyle',
      description: 'Quick tips, tech news, and real-time updates',
      recentPost: '"Tap the 🐦 Tweet if this site made you smile"',
      link: 'https://x.com/techinmystyle?t=_LvIaSshekss2U6IdAyc0Q&s=08'
    },
    {
      platform: 'telegram',
      name: 'Telegram',
      icon: 'fab fa-telegram',
      handle: 'Tech In My Style',
      description: 'Exclusive content, early access to courses, and community discussions',
      recentPost: '"Join the 🚀 Telegram crew if you love this site"',
      link: 'https://t.me/Tech_in_my_style_bot'
    },
    {
      platform: 'whatsapp',
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      handle: 'Study Groups',
      description: 'Join study groups, get instant support, and connect with peers',
      recentPost: '"Share the 💚 on WhatsApp if you love this website"',
      link: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d'
    },
    {
      platform: 'linkedin',
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      handle: 'Tech In My Style',
      description: 'Professional updates, career tips, and industry insights',
      recentPost: '"Connect with us for professional growth"',
      link: 'https://www.linkedin.com/company/tech-in-my-style/about/?viewAsMember=true'
    }
  ];

  return (
    <div className="stay-connected-page">
      <WebGLBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Stay <span className="color-change">Connected</span></h1>
            <p>Join our community and never miss an update</p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media">
        <div className="container">
          <h2 data-aos="fade-up">Follow Us on Social Media</h2>
          <p data-aos="fade-up">Stay updated with our latest courses, tutorials, and tech news</p>
          <div className="social-grid">
            {socialMedia.map((social, index) => (
              <div 
                className={`social-card ${social.platform}`} 
                key={index}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="social-header">
                  <i className={social.icon}></i>
                  <div className="social-info">
                    <h3>{social.name}</h3>
                    <p>{social.handle}</p>
                  </div>
                </div>
                <div className="social-content">
                  <p>{social.description}</p>
                  <div className="recent-posts">
                    <p className="post-preview">{social.recentPost}</p>
                  </div>
                  <a href={social.link} target="_blank" rel="noopener noreferrer" className="btn social-btn">
                    Follow Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StayConnected;

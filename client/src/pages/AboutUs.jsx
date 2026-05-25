import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import './AboutUs.css';
import AOS from 'aos';

const AboutUs = () => {
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

  const values = [
    {
      emoji: '💙',
      title: 'Passion',
      description: 'We are passionate about making tech education engaging, understandable, and enjoyable.'
    },
    {
      emoji: '🌍',
      title: 'Inclusivity',
      description: 'We believe technology education should be accessible to everyone, everywhere.'
    },
    {
      emoji: '🚀',
      title: 'Innovation',
      description: 'We constantly evolve our platform to incorporate the latest technologies and teaching methods.'
    },
    {
      emoji: '🤝',
      title: 'Community',
      description: 'We foster a supportive learning community where students help each other grow.'
    },
    {
      emoji: '⭐',
      title: 'Excellence',
      description: 'We strive for excellence in every course, ensuring high-quality content and learning outcomes.'
    },
    {
      emoji: '💡',
      title: 'Empowerment',
      description: 'We empower learners to achieve their goals and transform their careers through technology.'
    }
  ];

  const team = [
    {
      name: 'G Rama Krishna Prasad',
      role: 'UI/UX Architect & Front-End Lead',
      bio: 'Passionate UI/UX designer crafting intuitive and visually engaging interfaces. Leads front-end development for creating seamless learning experiences.',
      expertise: ['UI/UX Design', 'Prototyping', 'Responsive Web-Design'],
      image: './img/rk.png',
      linkedin: 'https://www.linkedin.com/in/rama-krishna-prasad/',
      email: 'mailto:ramu4012y@gmail.com',
      portfolio: 'https://ramu2710-portfolio.netlify.app/'
    },
    {
      name: 'Rameez Basha Shaik',
      role: 'Technical Lead & Head Developer',
      bio: 'Leads platform architecture and core technology. Skilled in full-stack development and deep learning integration for scalable educational systems.',
      expertise: ['Full-Stack Development', 'System Architecture', 'Deep Learning'],
      image: './img/basha.png',
      linkedin: 'https://www.linkedin.com/in/shaik-rameez-basha-151740286/',
      email: 'mailto:shaikbashah20@gmail.com',
      portfolio: 'https://basha-portfolio-2049.netlify.app/'
    },
    {
      name: 'Syed Asadullah',
      role: 'Developer & Course Designer',
      bio: 'Backend developer specializing in AI, ML, and DL. Designs and develops practical real-world projects to power AI & Data Science learning.',
      expertise: ['AI/ML', 'Data Science', 'Deep Learning'],
      image: './img/asadullah.png',
      linkedin: 'https://www.linkedin.com/in/syed-asadullah-5a014034a/',
      email: 'mailto:syedasadullah.asd@gmail.com',
      portfolio: 'https://asd4305-portfolio.netlify.app/'
    },
    {
      name: 'Sailesh Kumar',
      role: 'Marketing Strategist & Technical Support Specialist',
      bio: 'Drives marketing strategies and technical operations. Builds strong brand presence while ensuring smooth technical support for learners.',
      expertise: ['Digital Marketing', 'Technical Support', 'Customer Success'],
      image: './img/sailesh.jpg',
      linkedin: 'https://www.linkedin.com/in/saileshkumardarsi/',
      email: 'mailto:saileshkumar68192@gmail.com',
      portfolio: 'https://sailesh-portfolio-4315.netlify.app/'
    },
    {
      name: 'Jayanth Devisetty',
      role: 'Brand Development Lead & Technical Support Associate',
      bio: 'Leads brand promotions and community engagement efforts. Provides technical assistance while expanding platform reach and user engagement.',
      expertise: ['Brand Promotion', 'Community Engagement', 'Support Operations'],
      image: './img/jayanth.png',
      linkedin: 'https://www.linkedin.com/in/jay-d-8a8559246/',
      email: 'mailto:djay8im@gmail.com',
      portfolio: 'https://jayanth-08.netlify.app/'
    }
  ];

  return (
    <div className="about-page">
      <WebGLBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>About <span className="color-change">Tech In My Style</span></h1>
            <p>Empowering the next generation of developers through innovative education and hands-on learning</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content" data-aos="fade-up">
            <h2>Our Story</h2>
            <div className="story-text">
              <p>TECH IN MY STYLE is a dynamic educational platform that continuously evolves to meet the changing demands of the technology landscape. Unlike static learning websites, our platform is constantly updated with fresh content, ensuring you always have access to the latest courses and industry-relevant skills.</p>
              <p>With every platform update, new courses are automatically added to expand your learning opportunities. Whether it's emerging programming languages, cutting-edge frameworks, or the latest development tools, you'll discover new pathways to enhance your technical expertise as soon as they become available.</p>
              <p>Our commitment to staying current means that TECH IN MY STYLE grows alongside the tech industry itself. Each update not only brings new courses but also improves the overall platform experience, incorporating user feedback, enhanced features, and refined content delivery methods. This ensures you're always learning from the most up-to-date and comprehensive educational resources available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-content" data-aos="fade-up">
            <div className="mv-grid">
              <div className="mv-card vision">
                <div className="mv-header">
                  <i className="fas fa-eye"></i>
                  <h3>Our Vision</h3>
                </div>
                <p>We envision a future where learning never stops evolving, where every technological advancement becomes an opportunity for growth, and where our platform serves as the bridge between emerging industry needs and learner aspirations. Through continuous adaptation and innovation, we strive to make TECH IN MY STYLE the go-to destination for anyone looking to master technology in an ever-changing digital world.</p>
              </div>
              <div className="mv-card mission">
                <div className="mv-header">
                  <i className="fas fa-bullseye"></i>
                  <h3>Our Mission</h3>
                </div>
                <p>We are dedicated to transforming how people learn technology by providing a platform that not only teaches but evolves with its learners. Our mission drives us to constantly innovate, ensuring that every student has access to the skills and knowledge needed to thrive in an ever-changing technological landscape.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2 data-aos="fade-up">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="value-emoji">{value.emoji}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-team">
        <div className="container">
          <h2 data-aos="fade-up">Meet Our Leadership Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div className="team-member" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-expertise">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx}>{skill}</span>
                    ))}
                  </div>
                  <div className="social-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.email}>
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-user"></i>
                    </a>
                  </div>
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

export default AboutUs;

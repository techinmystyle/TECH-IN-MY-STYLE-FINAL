import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // kept for potential future use
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebGLBackground from '../components/WebGLBackground';
import './Courses.css';
import AOS from 'aos';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

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

  const courseCards = [
    // Web Development Courses
    {
      id: 1,
      name: 'HTML',
      fullName: 'HTML in My Style',
      icon: 'fab fa-html5',
      description: 'Master HTML fundamentals and web structure',
      route: '/html-course',
      gradient: 'linear-gradient(135deg, #e34c26, #f06529)'
    },
    {
      id: 2,
      name: 'CSS',
      fullName: 'CSS in My Style',
      icon: 'fab fa-css3-alt',
      description: 'Learn CSS styling and responsive design',
      route: '/css-course',
      gradient: 'linear-gradient(135deg, #264de4, #2965f1)'
    },
    {
      id: 3,
      name: 'JavaScript Basic',
      fullName: 'JavaScript Basic in My Style',
      icon: 'fab fa-js',
      description: 'JavaScript fundamentals and DOM manipulation',
      route: '/js-basic-course',
      gradient: 'linear-gradient(135deg, #f0db4f, #f7df1e)'
    },
    {
      id: 4,
      name: 'JavaScript Intermediate',
      fullName: 'JavaScript Intermediate in My Style',
      icon: 'fab fa-js',
      description: 'Advance your JavaScript skills',
      route: '/js-int-course',
      gradient: 'linear-gradient(135deg, #f0db4f, #e8d44d)'
    },
    {
      id: 5,
      name: 'JavaScript Advanced',
      fullName: 'JavaScript Advanced in My Style',
      icon: 'fab fa-js',
      description: 'Master Enterprise-Level JavaScript',
      route: '/js-adv-course',
      gradient: 'linear-gradient(135deg, #e8d44d, #d4c23e)'
    },
    // Programming Languages
    {
      id: 6,
      name: 'Python',
      fullName: 'Python in My Style',
      icon: 'fab fa-python',
      description: 'Explore Python for web and data science',
      route: '/python-course',
      gradient: 'linear-gradient(135deg, #3776ab, #ffd43b)'
    },
    {
      id: 7,
      name: 'Java',
      fullName: 'Java in My Style',
      icon: 'fab fa-java',
      description: 'Learn Java for enterprise applications',
      route: '/java-course',
      gradient: 'linear-gradient(135deg, #5382a1, #f89820)'
    },
    {
      id: 8,
      name: 'C',
      fullName: 'C in My Style',
      icon: 'fas fa-copyright',
      description: 'Master C programming fundamentals',
      route: '/c-course',
      gradient: 'linear-gradient(135deg, #283593, #5c6bc0)'
    },
    {
      id: 9,
      name: 'DSA',
      fullName: 'DSA in My Style',
      icon: 'fas fa-sitemap',
      description: 'Master Data Structures and Algorithms',
      route: '/dsa-course',
      gradient: 'linear-gradient(135deg, #00897b, #26a69a)'
    },
    {
      id: 10,
      name: 'OS',
      fullName: 'OS in My Style',
      icon: 'fas fa-microchip',
      description: 'Master Operating Systems concepts',
      route: '/os-course',
      gradient: 'linear-gradient(135deg, #6a1b9a, #8e24aa)'
    },
    {
      id: 11,
      name: 'System Design',
      fullName: 'System Design in My Style',
      icon: 'fas fa-server',
      description: 'Master system design and architecture',
      route: '/system-design-course',
      gradient: 'linear-gradient(135deg, #d32f2f, #f44336)'
    },
    {
      id: 12,
      name: 'Full Stack Python',
      fullName: 'Full Stack Python in My Style',
      icon: 'fab fa-python',
      description: 'Build production-ready backend applications',
      route: '/fullstack-python-course',
      gradient: 'linear-gradient(135deg, #1565c0, #42a5f5)'
    },
    {
      id: 13,
      name: 'Full Stack Java',
      fullName: 'Full Stack Java in My Style',
      icon: 'fab fa-java',
      description: 'Build scalable enterprise applications',
      route: '/fullstack-java-platform-course',
      gradient: 'linear-gradient(135deg, #e65100, #ff6f00)'
    },
    // AI & Machine Learning
    {
      id: 15,
      name: 'AI',
      fullName: 'AI in My Style',
      icon: 'fas fa-robot',
      description: 'Dive into Artificial Intelligence',
      route: '/ai-course',
      gradient: 'linear-gradient(135deg, #7b1fa2, #9c27b0)'
    },
    {
      id: 16,
      name: 'ML',
      fullName: 'ML in My Style',
      icon: 'fas fa-brain',
      description: 'Learn Machine Learning techniques',
      route: '/ml-course',
      gradient: 'linear-gradient(135deg, #c2185b, #e91e63)'
    },
    {
      id: 17,
      name: 'DL',
      fullName: 'DL in My Style',
      icon: 'fas fa-network-wired',
      description: 'Master Deep Learning and neural networks',
      route: '/dl-course',
      gradient: 'linear-gradient(135deg, #ad1457, #d81b60)'
    },
    {
      id: 18,
      name: 'NLP',
      fullName: 'NLP in My Style',
      icon: 'fas fa-language',
      description: 'Master Natural Language Processing',
      route: '/nlp-course',
      gradient: 'linear-gradient(135deg, #6a1b9a, #ab47bc)'
    },
    {
      id: 19,
      name: 'Gen AI',
      fullName: 'Gen AI in My Style',
      icon: 'fas fa-wand-magic-sparkles',
      description: 'Master Generative AI and LLMs',
      route: '/genai-course',
      gradient: 'linear-gradient(135deg, #4a148c, #7b1fa2)'
    },
    // Data Science
    {
      id: 20,
      name: 'DSC',
      fullName: 'DSC in My Style',
      icon: 'fas fa-chart-bar',
      description: 'Gain expertise in Data Science',
      route: '/dsc-course',
      gradient: 'linear-gradient(135deg, #00695c, #00897b)'
    },
    {
      id: 21,
      name: 'Database',
      fullName: 'Database in My Style',
      icon: 'fas fa-database',
      description: 'Master SQL and MongoDB',
      route: '/database-course',
      gradient: 'linear-gradient(135deg, #01579b, #0277bd)'
    }
  ];

  const categories = [
    {
      id: 'web',
      name: 'Web Development',
      icon: 'fas fa-code',
      description: 'Master HTML, CSS, and JavaScript'
    },
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: 'fas fa-laptop-code',
      description: 'Learn Python, Java, and C'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: 'fas fa-brain',
      description: 'Explore AI, ML, and Deep Learning'
    },
    {
      id: 'data',
      name: 'Data Science',
      icon: 'fas fa-chart-line',
      description: 'Master data analysis and visualization'
    }
  ];

  const allCourses = [
    {
      id: 1,
      name: 'HTML in My Style',
      category: 'web',
      icon: 'fab fa-html5',
      description: 'Master HTML fundamentals and web structure for robust web development.',
      level: 'Beginner',
      duration: '4 weeks',
      lessons: 25
    },
    {
      id: 2,
      name: 'CSS in My Style',
      category: 'web',
      icon: 'fab fa-css3-alt',
      description: 'Learn CSS styling, layouts, and responsive design to create visually appealing websites.',
      level: 'Beginner',
      duration: '5 weeks',
      lessons: 30
    },
    {
      id: 3,
      name: 'JavaScript in My Style - Basic',
      category: 'web',
      icon: 'fab fa-js',
      description: 'Understand JavaScript fundamentals and DOM manipulation for interactive web pages.',
      level: 'Beginner',
      duration: '6 weeks',
      lessons: 35
    },
    {
      id: 4,
      name: 'JavaScript in My Style - Intermediate',
      category: 'web',
      icon: 'fab fa-js',
      description: 'Advance your JavaScript skills with intermediate concepts and application development.',
      level: 'Intermediate',
      duration: '8 weeks',
      lessons: 40
    },
    {
      id: 5,
      name: 'JavaScript in My Style - Advanced',
      category: 'web',
      icon: 'fab fa-js',
      description: 'Master Enterprise-Level JavaScript concepts, patterns, and architecture.',
      level: 'Advanced',
      duration: '10 weeks',
      lessons: 54
    },
    {
      id: 12,
      name: 'C in My Style',
      category: 'programming',
      icon: 'fas fa-copyright',
      description: 'Master the fundamentals of C programming, a powerful language for system-level development.',
      level: 'Beginner',
      duration: '7 weeks',
      lessons: 38
    },
    {
      id: 6,
      name: 'Java in My Style',
      category: 'programming',
      icon: 'fab fa-java',
      description: 'Learn Java programming for robust applications, enterprise software, and Android development.',
      level: 'Beginner',
      duration: '10 weeks',
      lessons: 45
    },
    {
      id: 7,
      name: 'Python in My Style',
      category: 'programming',
      icon: 'fab fa-python',
      description: 'Explore Python for web development, data science, machine learning, and automation.',
      level: 'Beginner',
      duration: '8 weeks',
      lessons: 42
    },
    {
      id: 8,
      name: 'AI in My Style',
      category: 'ai-ml',
      icon: 'fas fa-robot',
      description: 'Dive into Artificial Intelligence concepts, algorithms, and applications.',
      level: 'Beginner',
      duration: '10 weeks',
      lessons: 48
    },
    {
      id: 9,
      name: 'ML in My Style',
      category: 'ai-ml',
      icon: 'fas fa-brain',
      description: 'Learn Machine Learning techniques, models, and practical implementations.',
      level: 'Beginner',
      duration: '12 weeks',
      lessons: 50
    },
    {
      id: 10,
      name: 'DL in My Style',
      category: 'ai-ml',
      icon: 'fas fa-network-wired',
      description: 'Master Deep Learning with neural networks, frameworks, and advanced AI applications.',
      level: 'Intermediate',
      duration: '14 weeks',
      lessons: 55
    },
    {
      id: 11,
      name: 'DSC in My Style',
      category: 'data',
      icon: 'fas fa-chart-bar',
      description: 'Gain expertise in Data Science concepts, analysis, and visualization techniques.',
      level: 'Beginner',
      duration: '10 weeks',
      lessons: 46
    },
    {
      id: 13,
      name: 'DSA in My Style',
      category: 'programming',
      icon: 'fas fa-sitemap',
      description: 'Master Data Structures and Algorithms with interactive visualizers, code examples in 3 languages, and interview prep.',
      level: 'Intermediate',
      duration: '12 weeks',
      lessons: 22
    },
    {
      id: 14,
      name: 'NLP in My Style',
      category: 'ai-ml',
      icon: 'fas fa-language',
      description: 'Master Natural Language Processing from tokenization to transformers with code examples, MCQs, and interview prep.',
      level: 'Intermediate',
      duration: '8 weeks',
      lessons: 11
    },
    {
      id: 15,
      name: 'OS in My Style',
      category: 'programming',
      icon: 'fas fa-microchip',
      description: 'Master Operating Systems — processes, memory, file systems, security, and more with interactive visualizations and code examples.',
      level: 'Intermediate',
      duration: '10 weeks',
      lessons: 10
    },
    {
      id: 16,
      name: 'System Design in My Style',
      category: 'programming',
      icon: 'fas fa-server',
      description: 'Master system design concepts from basics to real-world implementations with interactive diagrams and interview prep.',
      level: 'Intermediate',
      duration: '12 weeks',
      lessons: 20
    },
    {
      id: 17,
      name: 'Database in My Style',
      category: 'data',
      icon: 'fas fa-database',
      description: 'Master SQL and MongoDB with live query execution, visualizers, and 50+ interview questions in a gaming-grade environment.',
      level: 'Beginner',
      duration: '8 weeks',
      lessons: 30
    },
    {
      id: 18,
      name: 'Gen AI in My Style',
      category: 'ai-ml',
      icon: 'fas fa-wand-magic-sparkles',
      description: 'Master Generative AI from foundations to production — LLMs, RAG, agents, embeddings, and real-world applications.',
      level: 'Intermediate',
      duration: '10 weeks',
      lessons: 25
    },
    {
      id: 19,
      name: 'Full Stack Python in My Style',
      category: 'programming',
      icon: 'fab fa-python',
      description: 'Master Python from fundamentals to deployment. Build REST APIs, work with databases, and ship production-ready backend applications.',
      level: 'Intermediate',
      duration: '12 weeks',
      lessons: 25
    },
    {
      id: 20,
      name: 'Full Stack Java in My Style',
      category: 'programming',
      icon: 'fab fa-java',
      description: 'Build scalable backend systems with Java and Spring Boot. Master microservices, security, and deployment for enterprise applications.',
      level: 'Intermediate',
      duration: '14 weeks',
      lessons: 30
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  const scrollToCourseCard = (courseName) => {
    const cards = document.querySelectorAll('.all-courses .course-card');
    for (const card of cards) {
      const title = card.querySelector('h3');
      if (title && title.textContent.trim().toLowerCase().includes(courseName.toLowerCase())) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.transition = 'box-shadow 0.3s ease';
        card.style.boxShadow = '0 0 0 3px #2563eb';
        setTimeout(() => { card.style.boxShadow = ''; }, 1500);
        break;
      }
    }
  };

  const courseRouteMap = {
    'HTML in My Style': '/html-course',
    'CSS in My Style': '/css-course',
    'Python in My Style': '/python-course',
    'JavaScript in My Style - Basic': '/js-basic-course',
    'JavaScript in My Style - Intermediate': '/js-int-course',
    'JavaScript in My Style - Advanced': '/js-adv-course',
    'Java in My Style': '/java-course',
    'C in My Style': '/c-course',
    'AI in My Style': '/ai-course',
    'DL in My Style': '/dl-course',
    'ML in My Style': '/ml-course',
    'DSC in My Style': '/dsc-course',
    'DSA in My Style': '/dsa-course',
    'NLP in My Style': '/nlp-course',
    'OS in My Style': '/os-course',
    'System Design in My Style': '/system-design-course',
    'Database in My Style': '/database-course',
    'Gen AI in My Style': '/genai-course',
    'Full Stack Python in My Style': '/fullstack-python-course',
    'Full Stack Java in My Style': '/fullstack-java-platform-course',
  };

  const handleCourseClick = (course) => {
    const route = courseRouteMap[course.name];
    if (route) {
      navigate(route);
    } else {
      alert(`${course.name} is coming soon!`);
    }
  };

  return (
    <div className="courses-page">
      <WebGLBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Our <span className="color-change">Courses</span></h1>
            <p>Explore our comprehensive curriculum and start your learning journey today</p>
          </div>
        </div>
      </section>

      {/* Course Categories - Individual Course Cards */}
      <section className="course-categories">
        <div className="container">
          <h2 data-aos="fade-up">Course Categories</h2>
          
          {/* Web Development Courses */}
          <h3 className="category-title" data-aos="fade-up">Web Development</h3>
          <div className="courses-cards-grid" data-aos="fade-up">
            <div className="course-mini-card" onClick={() => scrollToCourseCard('HTML in My Style')}>
              <i className="fab fa-html5"></i>
              <h4>HTML</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('CSS in My Style')}>
              <i className="fab fa-css3-alt"></i>
              <h4>CSS</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('JavaScript in My Style - Basic')}>
              <i className="fab fa-js"></i>
              <h4>JavaScript Basic</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('JavaScript in My Style - Intermediate')}>
              <i className="fab fa-js"></i>
              <h4>JavaScript Intermediate</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('JavaScript in My Style - Advanced')}>
              <i className="fab fa-js"></i>
              <h4>JavaScript Advanced</h4>
            </div>
          </div>

          {/* Programming Languages */}
          <h3 className="category-title" data-aos="fade-up">Programming Languages</h3>
          <div className="courses-cards-grid" data-aos="fade-up">
            <div className="course-mini-card" onClick={() => scrollToCourseCard('Python in My Style')}>
              <i className="fab fa-python"></i>
              <h4>Python</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('Java in My Style')}>
              <i className="fab fa-java"></i>
              <h4>Java</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('C in My Style')}>
              <i className="fas fa-copyright"></i>
              <h4>C</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('DSA in My Style')}>
              <i className="fas fa-sitemap"></i>
              <h4>DSA</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('OS in My Style')}>
              <i className="fas fa-microchip"></i>
              <h4>OS</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('System Design in My Style')}>
              <i className="fas fa-server"></i>
              <h4>System Design</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('Full Stack Python in My Style')}>
              <i className="fab fa-python"></i>
              <h4>Full Stack Python</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('Full Stack Java in My Style')}>
              <i className="fab fa-java"></i>
              <h4>Full Stack Java</h4>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <h3 className="category-title" data-aos="fade-up">AI & Machine Learning</h3>
          <div className="courses-cards-grid" data-aos="fade-up">
            <div className="course-mini-card" onClick={() => scrollToCourseCard('AI in My Style')}>
              <i className="fas fa-robot"></i>
              <h4>AI</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('ML in My Style')}>
              <i className="fas fa-brain"></i>
              <h4>ML</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('DL in My Style')}>
              <i className="fas fa-network-wired"></i>
              <h4>DL</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('NLP in My Style')}>
              <i className="fas fa-language"></i>
              <h4>NLP</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('Gen AI in My Style')}>
              <i className="fas fa-wand-magic-sparkles"></i>
              <h4>Gen AI</h4>
            </div>
          </div>

          {/* Data Science */}
          <h3 className="category-title" data-aos="fade-up">Data Science</h3>
          <div className="courses-cards-grid" data-aos="fade-up">
            <div className="course-mini-card" onClick={() => scrollToCourseCard('DSC in My Style')}>
              <i className="fas fa-chart-bar"></i>
              <h4>DSC</h4>
            </div>
            <div className="course-mini-card" onClick={() => scrollToCourseCard('Database in My Style')}>
              <i className="fas fa-database"></i>
              <h4>Database</h4>
            </div>
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="all-courses">
        <div className="container">
          <div className="courses-header">
            <h2 data-aos="fade-up">
              {selectedCategory === 'all' ? 'All Courses' : 'Filtered Courses'}
            </h2>
            {selectedCategory !== 'all' && (
              <button 
                className="btn secondary" 
                onClick={() => setSelectedCategory('all')}
              >
                Show All Courses
              </button>
            )}
          </div>
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <div 
                className={`course-card clickable`} 
                key={course.id}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => handleCourseClick(course)}
              >
                <div className="course-image">
                  <i className={course.icon}></i>
                </div>
                <div className="course-content">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <button 
                    className="btn primary course-btn"
                    onClick={(e) => { e.stopPropagation(); handleCourseClick(course); }}
                  >
                    Visit Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="learning-path">
        <div className="container">
          <h2 data-aos="fade-up">🚦 Realistic Roadmaps for Aspiring Full-Stack Developers</h2>
          <div className="modern-paths-grid">
            {/* Python Full-Stack Path */}
            <div className="modern-path-card" data-aos="fade-up" data-aos-delay="50">
              <div className="modern-path-header" style={{background: 'linear-gradient(90deg, #3776AB, #4e73df)'}}>
                <i className="fab fa-python"></i>
                <span>Full-Stack Python for Web Development</span>
              </div>
              <ul className="modern-path-steps">
                <li>
                  <span className="step-dot"></span>
                  HTML & CSS Fundamentals
                  <span className="step-desc">Build the foundation of web structure and design</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  JavaScript Essentials
                  <span className="step-desc">Add interactivity to your web pages</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Python Programming Basics
                  <span className="step-desc">Master Python syntax and core concepts</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Version Control with Git & GitHub
                  <span className="step-desc">Collaborate and manage your codebase</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Backend with Flask
                  <span className="step-desc">Create REST APIs and dynamic web apps</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Databases (SQL & ORM)
                  <span className="step-desc">Work with SQLite/PostgreSQL and SQLAlchemy</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Frontend with React.js
                  <span className="step-desc">Build modern, component-based UIs</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  User Authentication & Security
                  <span className="step-desc">Implement login, registration, and secure your app</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Deployment
                  <span className="step-desc">Host your app on Heroku, Vercel, or AWS</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Capstone Project
                  <span className="step-desc">Build and deploy a full-stack Python web application</span>
                </li>
              </ul>
              <div className="modern-path-note">
                This roadmap is a suggested learning journey for aspiring full-stack Python web developers.
              </div>
            </div>

            {/* Java Full-Stack Path */}
            <div className="modern-path-card" data-aos="fade-up" data-aos-delay="100">
              <div className="modern-path-header" style={{background: 'linear-gradient(90deg, var(--primary), var(--secondary))'}}>
                <i className="fab fa-java"></i>
                <span>Full-Stack Java for Web Development</span>
              </div>
              <ul className="modern-path-steps">
                <li>
                  <span className="step-dot"></span>
                  HTML & CSS Fundamentals
                  <span className="step-desc">Structure and style your web pages</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  JavaScript Essentials
                  <span className="step-desc">Add dynamic features to your sites</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Java Programming Basics
                  <span className="step-desc">Understand OOP and Java syntax</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Version Control with Git & GitHub
                  <span className="step-desc">Track and collaborate on code</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Backend with Spring Boot
                  <span className="step-desc">Develop robust RESTful APIs</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Databases (MySQL & JPA/Hibernate)
                  <span className="step-desc">Integrate and manage data</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Frontend with Angular or React.js
                  <span className="step-desc">Build scalable, interactive UIs</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  User Authentication & Security
                  <span className="step-desc">Secure your Java web apps</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Deployment
                  <span className="step-desc">Deploy on AWS, Azure, or DigitalOcean</span>
                </li>
                <li>
                  <span className="step-dot"></span>
                  Capstone Project
                  <span className="step-desc">Deliver a production-ready full-stack Java application</span>
                </li>
              </ul>
              <div className="modern-path-note">
                This roadmap is a suggested learning journey for aspiring full-stack Java web developers.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaJava, FaDatabase, FaRocket, FaShieldAlt, FaNetworkWired } from 'react-icons/fa'
import { SiSpringboot, SiReact } from 'react-icons/si'
import FsJavaParticleGrid from '../components/FsJavaParticleGrid'
import FsJavaSystemFlowViz from '../components/FsJavaSystemFlowViz'

import PopularCourses from '../../../components/PopularCourses'

export default function FsJavaHome() {
  const [apiRunning, setApiRunning] = useState(false)

  const modules = [
    { id: 'phase1', title: 'Core Java Engine', icon: FaJava, color: '#f89820', desc: 'Variables, OOP, Collections, Streams' },
    { id: 'phase3', title: 'Spring Boot System', icon: SiSpringboot, color: '#6db33f', desc: 'IoC, REST APIs, Controllers' },
    { id: 'phase4', title: 'Database Layer', icon: FaDatabase, color: '#5382a1', desc: 'JPA, Hibernate, MySQL' },
    { id: 'phase5', title: 'Security Module', icon: FaShieldAlt, color: '#f89820', desc: 'JWT, Spring Security, RBAC' },
    { id: 'phase7', title: 'Microservices', icon: FaNetworkWired, color: '#39ff14', desc: 'API Gateway, Kafka, Services' },
    { id: 'phase8', title: 'Deployment System', icon: FaRocket, color: '#f89820', desc: 'Docker, CI/CD, Cloud' },
  ]

  const learningPath = [
    { phase: 1, title: 'CORE JAVA', progress: 0 },
    { phase: 2, title: 'ADVANCED JAVA', progress: 0 },
    { phase: 3, title: 'SPRING BOOT', progress: 0 },
    { phase: 4, title: 'DATABASE', progress: 0 },
    { phase: 5, title: 'SECURITY', progress: 0 },
    { phase: 6, title: 'REACT FRONTEND', progress: 0 },
    { phase: 7, title: 'MICROSERVICES', progress: 0 },
    { phase: 8, title: 'DEPLOYMENT', progress: 0 },
    { phase: 9, title: 'PROJECTS', progress: 0 },
  ]

  const stats = [
    { label: 'TOPICS UNLOCKED', value: '45+' },
    { label: 'PHASES AVAILABLE', value: '9' },
    { label: 'HANDS-ON LABS', value: '20+' },
    { label: 'PROJECTS INCLUDED', value: '5' },
  ]

  return (
    <div id="main-content" style={{ minHeight: '100vh' }}>
      <FsJavaParticleGrid />

      {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='glow-orange' style={{
            fontSize: '3.5rem',
            fontFamily: 'Orbitron',
            fontWeight: 900,
            marginBottom: '1rem',
            textShadow: '0 0 30px rgba(248,152,32,0.6)',
          }}>
            Full Stack Java
            <br/> in My Style
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#8aa8be',
            marginBottom: '2rem',
            maxWidth: '700px',
            margin: '1rem auto 2rem',
            fontWeight: 300,
          }}>
            Build and control scalable backend systems like a professional engineer.
            Master Java, Spring Boot, and modern architecture patterns.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link to="/fullstack-java-platform-course/phases" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '0.8rem 2rem',
                background: 'linear-gradient(135deg, #f89820, #ff9f1c)',
                border: 'none',
                color: 'white',
                fontWeight: 700,
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                boxShadow: '0 0 20px rgba(248,152,32,0.4)',
              }}>
                START LEARNING →
              </button>
            </Link>
            <Link to="/fullstack-java-platform-course/api-lab" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '0.8rem 2rem',
                background: 'transparent',
                border: '1px solid #00f0ff',
                color: '#00f0ff',
                fontWeight: 700,
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}>
                TRY API LAB
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(248,152,32,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#f89820' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', color: '#8aa8be', marginTop: '0.5rem', fontFamily: 'JetBrains Mono' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SYSTEM MODULES ──────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'Orbitron', marginBottom: '3rem', color: '#c8d8e8', textAlign: 'center' }}>
          SYSTEM MODULES
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {modules.map((mod, i) => {
            const IconComp = mod.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/fullstack-java-platform-course/phase/${mod.id}`} style={{ textDecoration: 'none' }}>
                  <div className='hud-panel' style={{
                    padding: '2rem',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderColor: mod.color,
                    transition: 'all 0.3s',
                  }} onMouseEnter={e => {
                    e.currentTarget.style.borderColor = mod.color
                    e.currentTarget.style.boxShadow = `0 0 24px ${mod.color}40`
                  }} onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <IconComp size={28} color={mod.color} />
                      <h3 style={{ fontSize: '1.1rem', fontFamily: 'Orbitron', color: mod.color }}>{mod.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#8aa8be', lineHeight: 1.5 }}>{mod.desc}</p>
                    <div style={{ marginTop: 'auto', textAlign: 'right', fontSize: '0.8rem', color: mod.color }}>
                      Explore →
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── LEARNING PATH ───────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(83,130,161,0.05)', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'Orbitron', marginBottom: '3rem', color: '#c8d8e8', textAlign: 'center' }}>
          YOUR LEARNING PATH
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          {learningPath.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className='hud-panel'
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                cursor: 'pointer',
                borderColor: 'rgba(248,152,32,0.2)',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#f89820', fontFamily: 'Orbitron', fontWeight: 700 }}>
                PHASE {item.phase}
              </div>
              <div style={{ fontSize: '1rem', color: '#d0dce8', fontFamily: 'JetBrains Mono', marginTop: '0.5rem', fontWeight: 600 }}>
                {item.title}
              </div>
              <div style={{
                height: '4px',
                background: 'rgba(248,152,32,0.2)',
                marginTop: '0.8rem',
                borderRadius: '2px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${item.progress}%`,
                  background: 'linear-gradient(90deg, #f89820, #ff9f1c)',
                  transition: 'width 0.3s',
                }} />
              </div>
              <div style={{ fontSize: '0.7rem', color: '#8aa8be', marginTop: '0.5rem' }}>
                {item.progress}% complete
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FLOW VISUALIZATION ──────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'Orbitron', marginBottom: '2rem', color: '#c8d8e8', textAlign: 'center' }}>
          API EXECUTION FLOW
        </h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <button
            onClick={() => setApiRunning(!apiRunning)}
            style={{
              padding: '0.6rem 1.5rem',
              background: apiRunning ? '#ff6b6b' : '#39ff14',
              border: 'none',
              color: 'white',
              fontWeight: 700,
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: 'JetBrains Mono',
            }}
          >
            {apiRunning ? 'STOP' : 'START'} SIMULATION
          </button>
        </div>
        <FsJavaSystemFlowViz isRunning={apiRunning} status={apiRunning ? 'executing' : 'idle'} />
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(248,152,32,0.2)' }}>
        <h2 style={{ fontSize: '1.8rem', fontFamily: 'Orbitron', marginBottom: '1.5rem', color: '#f89820' }}>
          Ready to Control the Backend?
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#8aa8be', marginBottom: '2rem' }}>
          Start with Phase 1: Core Java Engine
        </p>
        <Link to="/fullstack-java-platform-course/phases" style={{ textDecoration: 'none' }}>
          <button style={{
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #f89820, #ff9f1c)',
            border: 'none',
            color: 'white',
            fontWeight: 700,
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            boxShadow: '0 0 30px rgba(248,152,32,0.4)',
          }}>
            BEGIN MISSION →
          </button>
        </Link>
      </section>
      <PopularCourses />
    </div>
  )
}

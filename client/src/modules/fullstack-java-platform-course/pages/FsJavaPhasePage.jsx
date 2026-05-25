import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaJava, FaDatabase, FaRocket, FaShieldAlt, FaNetworkWired,
} from 'react-icons/fa'
import { SiSpringboot, SiReact } from 'react-icons/si'
import { HiCpuChip } from 'react-icons/hi2'
import { RiCodeBlock } from 'react-icons/ri'
import { phases } from '../data/courseData'
import { useEffect, useState } from 'react'

const PHASE_META = {
  phase1: { icon: <FaJava size={20} />,          color: '#f89820' },
  phase2: { icon: <RiCodeBlock size={18} />, color: '#5382a1' },
  phase3: { icon: <SiSpringboot size={18} />,     color: '#6db33f' },
  phase4: { icon: <FaDatabase size={18} />,       color: '#5382a1' },
  phase5: { icon: <FaShieldAlt size={18} />,      color: '#f89820' },
  phase6: { icon: <SiReact size={18} />,          color: '#61dafb' },
  phase7: { icon: <FaNetworkWired size={18} />,   color: '#6db33f' },
  phase8: { icon: <FaRocket size={18} />,         color: '#f89820' },
  phase9: { icon: <HiCpuChip size={20} />,           color: '#5382a1' },
}

export default function FsJavaPhasePage() {
  const { phaseId } = useParams()
  const phase = phases.find(p => p.id === phaseId)
  const [progress, setProgress] = useState({})
  const meta = PHASE_META[phaseId] || { icon: <FaJava size={20} />, color: '#f89820' }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('javaProgress') || '{}')
    setProgress(saved)
  }, [])

  const toggleComplete = (topicId) => {
    const updated = { ...progress, [topicId]: !progress[topicId] }
    setProgress(updated)
    localStorage.setItem('javaProgress', JSON.stringify(updated))
  }

  if (!phase) return (
    <div className="fsjava-module" style={{ minHeight: '100vh', background: 'var(--java-darker)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: 'Orbitron', color: '#f89820' }}>PHASE NOT FOUND</div>
    </div>
  )

  const completedInPhase = phase.topics.filter(t => progress[t.id]).length

  return (
    <div id="main-content" style={{ minHeight: '100vh', background: 'var(--java-darker)' }}>
      <div className="grid-overlay" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2.5rem' }}>
          <Link to="/fullstack-java-platform-course" style={{ fontFamily: 'Orbitron', fontSize: '0.58rem', color: '#2a3a4a', textDecoration: 'none', letterSpacing: 2 }}>← BACK TO HOME</Link>

          <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            {/* Phase icon */}
            <div style={{
              width: 56, height: 56, borderRadius: 12,
              background: `${meta.color}12`, border: `1px solid ${meta.color}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: meta.color,
              boxShadow: `0 0 20px ${meta.color}22`,
            }}>
              {meta.icon}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'Orbitron', fontSize: '0.58rem', color: '#2a3a4a', letterSpacing: 3 }}>{phase.phase}</span>
                <span style={{ background: `${meta.color}12`, border: `1px solid ${meta.color}28`, color: meta.color, fontFamily: 'Orbitron', fontSize: '0.5rem', padding: '0.18rem 0.55rem', borderRadius: 3 }}>{phase.level}</span>
              </div>
              <h1 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', color: meta.color, textShadow: `0 0 24px ${meta.color}55` }}>
                {phase.title}
              </h1>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: '1.5rem', maxWidth: 400 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
              <span style={{ fontFamily: 'Orbitron', fontSize: '0.55rem', color: '#2a3a4a', letterSpacing: 2 }}>PHASE PROGRESS</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: meta.color }}>{completedInPhase}/{phase.topics.length}</span>
            </div>
            <div style={{ height: 4, background: 'rgba(83,130,161,0.12)', borderRadius: 2, overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(completedInPhase / phase.topics.length) * 100}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ height: '100%', background: `linear-gradient(90deg, ${meta.color}, ${meta.color}88)`, borderRadius: 2 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Topics grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.1rem' }}>
          {phase.topics.map((topic, i) => {
            const done = progress[topic.id]
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 22px ${meta.color}18` }}
              >
                <div className="hud-panel" style={{ padding: '1.25rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderColor: done ? 'rgba(61,220,132,0.2)' : undefined }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: done ? '#3ddc84' : meta.color, boxShadow: `0 0 6px ${done ? '#3ddc84' : meta.color}`, flexShrink: 0 }} />
                      <h3 style={{ fontFamily: 'Orbitron', fontSize: '0.78rem', color: done ? '#3ddc84' : '#d0dce8' }}>{topic.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleComplete(topic.id)}
                      style={{
                        background: done ? 'rgba(61,220,132,0.12)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${done ? 'rgba(61,220,132,0.35)' : 'rgba(255,255,255,0.08)'}`,
                        color: done ? '#3ddc84' : '#2a3a4a',
                        borderRadius: 4, padding: '0.2rem 0.5rem',
                        fontFamily: 'Orbitron', fontSize: '0.5rem', cursor: 'pointer',
                        transition: 'all 0.2s', flexShrink: 0, marginLeft: '0.5rem',
                      }}
                    >{done ? '✓' : '○'}</button>
                  </div>

                  <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#4a6070', lineHeight: 1.65, flex: 1 }}>{topic.description}</p>

                  <Link
                    to={`/fullstack-java-platform-course/topic/${topic.id}`}
                    style={{
                      textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.58rem', letterSpacing: 1,
                      color: meta.color, border: `1px solid ${meta.color}28`,
                      padding: '0.5rem 0.75rem', borderRadius: 5, textAlign: 'center',
                      background: `${meta.color}08`, transition: 'all 0.2s', display: 'block',
                    }}
                  >ACCESS TOPIC →</Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

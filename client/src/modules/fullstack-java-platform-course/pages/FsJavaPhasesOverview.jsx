import { Link } from 'react-router-dom'
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
  phase1: { icon: <FaJava size={15} />,          color: '#f89820' },
  phase2: { icon: <RiCodeBlock size={14} />, color: '#5382a1' },
  phase3: { icon: <SiSpringboot size={14} />,     color: '#6db33f' },
  phase4: { icon: <FaDatabase size={14} />,       color: '#5382a1' },
  phase5: { icon: <FaShieldAlt size={14} />,      color: '#f89820' },
  phase6: { icon: <SiReact size={14} />,          color: '#61dafb' },
  phase7: { icon: <FaNetworkWired size={14} />,   color: '#6db33f' },
  phase8: { icon: <FaRocket size={14} />,         color: '#f89820' },
  phase9: { icon: <HiCpuChip size={15} />,           color: '#5382a1' },
}

export default function FsJavaPhasesOverview() {
  const [progress, setProgress] = useState({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('javaProgress') || '{}')
    setProgress(saved)
  }, [])

  const filtered = phases.map(phase => ({
    ...phase,
    topics: phase.topics.filter(t =>
      !search ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(p => p.topics.length > 0)

  const totalTopics = phases.reduce((acc, p) => acc + p.topics.length, 0)
  const completedTopics = Object.values(progress).filter(Boolean).length

  return (
    <div id="main-content" style={{ minHeight: '100vh', background: 'var(--java-darker)' }}>
      <div className="grid-overlay" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontFamily: 'Orbitron', fontSize: '0.58rem', color: '#2a3a4a', letterSpacing: 4, marginBottom: '0.5rem' }}>FULL CURRICULUM</div>
          <h1 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#d0dce8', marginBottom: '0.75rem' }}>
            All <span className="glow-orange">Phases</span> & Topics
          </h1>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#4a6070', lineHeight: 1.7 }}>
            {totalTopics} topics · {completedTopics} completed
          </p>

          {/* Progress bar */}
          {completedTopics > 0 && (
            <div style={{ marginTop: '1rem', maxWidth: 380 }}>
              <div style={{ height: 3, background: 'rgba(83,130,161,0.12)', borderRadius: 2, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round((completedTopics / totalTopics) * 100)}%` }}
                  transition={{ duration: 0.8 }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, #f89820, #5382a1)', borderRadius: 2 }}
                />
              </div>
            </div>
          )}

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 400, marginTop: '1.5rem' }}>
            <span style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#2a3a4a', fontSize: '0.9rem' }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search topics..."
              style={{
                width: '100%', background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(83,130,161,0.2)', color: '#d0dce8',
                fontFamily: 'JetBrains Mono', fontSize: '0.8rem',
                padding: '0.65rem 1rem 0.65rem 2.4rem', borderRadius: 6, outline: 'none',
              }}
            />
          </div>
        </motion.div>

        {/* Phases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filtered.map((phase, pi) => {
            const meta = PHASE_META[phase.id] || { icon: <FaJava size={14} />, color: '#f89820' }
            const done = phase.topics.filter(t => progress[t.id]).length
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.04 }}
              >
                {/* Phase header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ color: meta.color }}>{meta.icon}</div>
                  <span style={{ fontFamily: 'Orbitron', fontSize: '0.55rem', color: '#2a3a4a', letterSpacing: 3 }}>{phase.phase}</span>
                  <div style={{ width: 1, height: 14, background: 'rgba(83,130,161,0.2)' }} />
                  <h2 style={{ fontFamily: 'Orbitron', fontSize: '0.9rem', color: meta.color }}>{phase.title}</h2>
                  <span style={{ fontFamily: 'Orbitron', fontSize: '0.5rem', color: '#2a3a4a' }}>{phase.level}</span>
                  {done > 0 && <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#3ddc84' }}>{done}/{phase.topics.length} done</span>}
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${meta.color}28, transparent)`, minWidth: 30 }} />
                  <Link to={`/fullstack-java-platform-course/phase/${phase.id}`} style={{ fontFamily: 'Orbitron', fontSize: '0.52rem', color: meta.color, textDecoration: 'none', letterSpacing: 1 }}>VIEW ALL →</Link>
                </div>

                {/* Topics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '0.7rem' }}>
                  {phase.topics.map(topic => {
                    const isDone = progress[topic.id]
                    return (
                      <motion.div key={topic.id} whileHover={{ scale: 1.02 }}>
                        <Link to={`/fullstack-java-platform-course/topic/${topic.id}`} style={{ textDecoration: 'none' }}>
                          <div className="hud-panel" style={{ padding: '1rem', display: 'flex', gap: '0.65rem', alignItems: 'flex-start', transition: 'all 0.2s', borderColor: isDone ? 'rgba(61,220,132,0.2)' : undefined }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: isDone ? '#3ddc84' : meta.color, boxShadow: `0 0 5px ${isDone ? '#3ddc84' : meta.color}`, marginTop: 4, flexShrink: 0 }} />
                            <div>
                              <div style={{ fontFamily: 'Orbitron', fontSize: '0.7rem', color: isDone ? '#3ddc84' : '#d0dce8', marginBottom: '0.25rem' }}>{topic.title}</div>
                              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.63rem', color: '#2a3a4a', lineHeight: 1.5 }}>{topic.description.slice(0, 85)}…</div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

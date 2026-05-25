import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Editor from '@monaco-editor/react'
import { FaJava, FaDatabase, FaRocket, FaShieldAlt, FaNetworkWired } from 'react-icons/fa'
import { SiSpringboot, SiReact } from 'react-icons/si'
import { HiCpuChip } from 'react-icons/hi2'
import { RiCodeBlock } from 'react-icons/ri'
import { phases } from '../data/courseData'
import FsJavaInterviewAccordion from '../components/FsJavaInterviewAccordion'

const PHASE_META = {
  phase1: { icon: <FaJava size={16} />,          color: '#f89820' },
  phase2: { icon: <RiCodeBlock size={15} />, color: '#5382a1' },
  phase3: { icon: <SiSpringboot size={15} />,     color: '#6db33f' },
  phase4: { icon: <FaDatabase size={15} />,       color: '#5382a1' },
  phase5: { icon: <FaShieldAlt size={15} />,      color: '#f89820' },
  phase6: { icon: <SiReact size={15} />,          color: '#61dafb' },
  phase7: { icon: <FaNetworkWired size={15} />,   color: '#6db33f' },
  phase8: { icon: <FaRocket size={15} />,         color: '#f89820' },
  phase9: { icon: <HiCpuChip size={16} />,           color: '#5382a1' },
}

export default function FsJavaTopicPage() {
  const { topicId } = useParams()
  const [progress, setProgress] = useState({})
  const [copied, setCopied] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  let topic = null, phase = null
  for (const p of phases) {
    const t = p.topics.find(t => t.id === topicId)
    if (t) { topic = t; phase = p; break }
  }

  const meta = PHASE_META[phase?.id] || { icon: <FaJava size={16} />, color: '#f89820' }
  const accent = meta.color

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('javaProgress') || '{}')
    setProgress(saved)
    const bookmarks = JSON.parse(localStorage.getItem('javaBookmarks') || '[]')
    setBookmarked(bookmarks.includes(topicId))
    setActiveTab('overview')
    window.scrollTo(0, 0)
  }, [topicId])

  const toggleComplete = () => {
    const updated = { ...progress, [topicId]: !progress[topicId] }
    setProgress(updated)
    localStorage.setItem('javaProgress', JSON.stringify(updated))
  }

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('javaBookmarks') || '[]')
    const updated = bookmarked ? bookmarks.filter(b => b !== topicId) : [...bookmarks, topicId]
    localStorage.setItem('javaBookmarks', JSON.stringify(updated))
    setBookmarked(!bookmarked)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(topic.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!topic) return (
    <div className="fsjava-module" style={{ minHeight: '100vh', background: 'var(--java-darker)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: 'Orbitron', color: '#f89820' }}>TOPIC NOT FOUND</div>
    </div>
  )

  const isDone = progress[topicId]

  const TABS = [
    { id: 'overview', label: '📡 OVERVIEW' },
    { id: 'code', label: '💻 CODE' },
    { id: 'interview', label: '🎯 INTERVIEW' },
  ]

  return (
    <div id="main-content" style={{ minHeight: '100vh', background: 'var(--java-darker)' }}>
      <div className="grid-overlay" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <Link to="/fullstack-java-platform-course" style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: '#555', textDecoration: 'none' }}>HOME</Link>
          <span style={{ color: '#333' }}>/</span>
          <Link to={`/fullstack-java-platform-course/phase/${phase.id}`} style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: '#555', textDecoration: 'none' }}>{phase.phase}</Link>
          <span style={{ color: '#333' }}>/</span>
          <span style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: accent }}>{topic.title}</span>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="hud-panel"
          style={{ padding: '1.5rem 2rem', marginBottom: '1.5rem', borderColor: `${accent}33`, background: `linear-gradient(135deg, ${accent}08, transparent)` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <div style={{ color: accent, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {meta.icon}
                  <span style={{ fontFamily: 'Orbitron', fontSize: '0.55rem', color: '#2a3a4a', letterSpacing: 3 }}>{phase.phase}</span>
                </div>
                <span style={{ background: `${accent}12`, border: `1px solid ${accent}28`, color: accent, fontFamily: 'Orbitron', fontSize: '0.5rem', padding: '0.15rem 0.5rem', borderRadius: 3 }}>{phase.level}</span>
              </div>
              <h1 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: accent, textShadow: `0 0 20px ${accent}55`, marginBottom: '0.5rem' }}>{topic.title}</h1>
              <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#4a6070', lineHeight: 1.6, maxWidth: 600 }}>{topic.description}</p>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button onClick={toggleBookmark} style={{
                background: bookmarked ? 'rgba(255,159,28,0.12)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${bookmarked ? 'rgba(255,159,28,0.4)' : 'rgba(255,255,255,0.1)'}`,
                color: bookmarked ? '#ff9f1c' : '#555',
                borderRadius: 4, padding: '0.5rem 0.9rem',
                fontFamily: 'Orbitron', fontSize: '0.6rem', cursor: 'pointer', transition: 'all 0.2s',
              }}>{bookmarked ? '★ SAVED' : '☆ SAVE'}</button>
              <button onClick={toggleComplete} style={{
                background: isDone ? 'rgba(57,255,20,0.12)' : `${accent}10`,
                border: `1px solid ${isDone ? 'rgba(57,255,20,0.4)' : `${accent}44`}`,
                color: isDone ? '#39ff14' : accent,
                borderRadius: 4, padding: '0.5rem 0.9rem',
                fontFamily: 'Orbitron', fontSize: '0.6rem', cursor: 'pointer', transition: 'all 0.2s',
              }}>{isDone ? '✓ COMPLETED' : 'MARK DONE'}</button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0,240,255,0.1)', borderRadius: 6, padding: '0.25rem', width: 'fit-content' }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              background: activeTab === tab.id ? 'rgba(0,240,255,0.1)' : 'transparent',
              border: activeTab === tab.id ? '1px solid rgba(0,240,255,0.25)' : '1px solid transparent',
              color: activeTab === tab.id ? '#00f0ff' : '#555',
              borderRadius: 4, padding: '0.45rem 1rem',
              fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>{tab.label}</button>
          ))}
        </div>

        {/* ── OVERVIEW TAB ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Analogy */}
              <div className="hud-panel" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff9f1c', boxShadow: '0 0 8px #ff9f1c' }} />
                  <span style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', color: '#ff9f1c', letterSpacing: 2 }}>SYSTEM ANALYSIS — REAL-WORLD ANALOGY</span>
                </div>
                <div style={{ background: 'rgba(255,159,28,0.05)', border: '1px solid rgba(255,159,28,0.15)', borderRadius: 6, padding: '1.25rem' }}>
                  <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.82rem', color: '#ccc', lineHeight: 1.85 }}>{topic.analogy}</p>
                </div>
              </div>

              {/* Sections */}
              {topic.sections && topic.sections.map((section, si) => (
                <motion.div key={si}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: si * 0.07 }}
                  className="hud-panel"
                  style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent, boxShadow: `0 0 8px ${accent}` }} />
                    <span style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', color: accent, letterSpacing: 2 }}>{section.title.toUpperCase()}</span>
                  </div>
                  <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#888', lineHeight: 1.75, marginBottom: '1rem' }}>{section.content}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {section.points.map((point, pi) => (
                      <div key={pi} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <span style={{ color: accent, fontSize: '0.75rem', marginTop: '0.1rem', flexShrink: 0, fontWeight: 700 }}>›</span>
                        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.76rem', color: '#bbb', lineHeight: 1.65 }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Quick nav */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('code')} style={{
                  background: `${accent}10`, border: `1px solid ${accent}33`, color: accent,
                  fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1,
                  padding: '0.6rem 1.2rem', borderRadius: 4, cursor: 'pointer', transition: 'all 0.2s',
                }}>💻 VIEW CODE EXAMPLES →</button>
                <button onClick={() => setActiveTab('interview')} style={{
                  background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.25)', color: '#39ff14',
                  fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1,
                  padding: '0.6rem 1.2rem', borderRadius: 4, cursor: 'pointer', transition: 'all 0.2s',
                }}>🎯 INTERVIEW PREP →</button>
              </div>
            </motion.div>
          )}

          {/* ── CODE TAB ── */}
          {activeTab === 'code' && (
            <motion.div key="code" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="hud-panel" style={{ overflow: 'hidden' }}>
                <div style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid rgba(0,240,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      {['#ff5f57', '#febc2e', '#28c840'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#555' }}>
                      {topic.title.toLowerCase().replace(/\s+/g, '-')}.java
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Orbitron', fontSize: '0.55rem', color: '#555', letterSpacing: 1 }}>JAVA</span>
                    <button onClick={copyCode} style={{
                      background: copied ? 'rgba(57,255,20,0.12)' : 'rgba(0,240,255,0.06)',
                      border: `1px solid ${copied ? 'rgba(57,255,20,0.4)' : 'rgba(0,240,255,0.2)'}`,
                      color: copied ? '#39ff14' : '#00f0ff',
                      borderRadius: 4, padding: '0.3rem 0.75rem',
                      fontFamily: 'Orbitron', fontSize: '0.55rem', cursor: 'pointer', transition: 'all 0.2s',
                    }}>{copied ? '✓ COPIED' : 'COPY'}</button>
                  </div>
                </div>
                <Editor
                  height="580px"
                  defaultLanguage="java"
                  value={topic.code}
                  theme="vs-dark"
                  options={{
                    readOnly: false,
                    minimap: { enabled: false },
                    fontSize: 13,
                    fontFamily: '"JetBrains Mono", monospace',
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    padding: { top: 16, bottom: 16 },
                    renderLineHighlight: 'all',
                    smoothScrolling: true,
                    wordWrap: 'on',
                    lineHeight: 1.7,
                  }}
                />
              </div>
              <div className="hud-panel" style={{ padding: '1.25rem 1.5rem', marginTop: '1rem' }}>
                <div style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: '#ff9f1c', letterSpacing: 2, marginBottom: '0.5rem' }}>REAL-WORLD CONTEXT</div>
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#888', lineHeight: 1.75 }}>{topic.analogy}</p>
              </div>
            </motion.div>
          )}

          {/* ── INTERVIEW TAB ── */}
          {activeTab === 'interview' && (
            <motion.div key="interview" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="hud-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#39ff14', boxShadow: '0 0 8px #39ff14' }} />
                  <span style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', color: '#39ff14', letterSpacing: 2 }}>INTERVIEW QUESTIONS</span>
                </div>
                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#555' }}>
                  {topic.interview.length} questions · Click to reveal answers
                </p>
              </div>
              <FsJavaInterviewAccordion questions={topic.interview} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,240,255,0.08)', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to={`/fullstack-java-platform-course/phase/${phase.id}`} style={{
            textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1,
            color: '#555', border: '1px solid rgba(255,255,255,0.08)',
            padding: '0.6rem 1.2rem', borderRadius: 4, transition: 'all 0.2s',
          }}>← BACK TO {phase.phase}</Link>
          <Link to="/fullstack-java-platform-course/api-lab" style={{
            textDecoration: 'none', fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1,
            color: '#00f0ff', border: '1px solid rgba(0,240,255,0.3)',
            padding: '0.6rem 1.2rem', borderRadius: 4, background: 'rgba(0,240,255,0.06)',
            transition: 'all 0.2s',
          }}>TEST IN API LAB →</Link>
        </div>
      </div>
    </div>
  )
}

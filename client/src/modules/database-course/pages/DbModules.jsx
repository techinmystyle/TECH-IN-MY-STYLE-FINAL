import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase, faTerminal, faLeaf, faLink, faLayerGroup, faCode,
  faEdit, faSearch, faBolt, faTachometerAlt, faExchangeAlt,
  faBalanceScale, faFilter, faExpand, faWindowMaximize, faEye,
  faCogs, faBell, faLock, faSitemap, faProjectDiagram, faObjectGroup,
  faSearchPlus, faSlidersH, faExclamationTriangle, faCubes, faCity,
  faCheckCircle, faGraduationCap, faLanguage, faTable, faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import { courseModules } from '../data/courseData';
import { useProgress } from '../hooks/useProgress';
import DbFooter from '../components/DbFooter';

const iconMap = {
  database: faDatabase, terminal: faTerminal, leaf: faLeaf, link: faLink,
  'layer-group': faLayerGroup, code: faCode, edit: faEdit, search: faSearch,
  bolt: faBolt, 'tachometer-alt': faTachometerAlt, 'exchange-alt': faExchangeAlt,
  'balance-scale': faBalanceScale, filter: faFilter, 'expand-arrows-alt': faExpand,
  'window-maximize': faWindowMaximize, eye: faEye, cogs: faCogs, bell: faBell,
  lock: faLock, sitemap: faSitemap, 'project-diagram': faProjectDiagram,
  'object-group': faObjectGroup, 'search-plus': faSearchPlus, 'sliders-h': faSlidersH,
  'triangle-exclamation': faExclamationTriangle, cubes: faCubes, city: faCity,
  'graduation-cap': faGraduationCap, language: faLanguage, table: faTable,
  'file-alt': faFileAlt, 'code-branch': faCode,
};

export default function DbModules() {
  const { getProgress, toggleProgress } = useProgress();

  return (
    <>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 2rem' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '3rem' }}>
        <p className="section-label">Mission Control</p>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          LEARNING <span className="rog-glow-text">MODULES</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontFamily: 'Barlow, sans-serif' }}>
          Select a mission. Execute queries. Track your progress.
        </p>
      </motion.div>

      {courseModules.map((mod, mi) => (
        <motion.div
          key={mod.id}
          id={mod.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: mi * 0.05 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: 3, height: 32, background: mod.color, boxShadow: `0 0 8px ${mod.color}` }} />
            <div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Level {mi + 1}
              </div>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '1.15rem', fontWeight: 900, color: mod.color, letterSpacing: '0.04em', textTransform: 'uppercase', textShadow: `0 0 10px ${mod.color}60` }}>
                {mod.label}
              </h2>
            </div>
            <div style={{ marginLeft: 'auto', fontFamily: 'Share Tech Mono, monospace', fontSize: '0.85rem', fontWeight: 700, color: mod.color }}>
              {mod.topics.filter(t => getProgress(t.id)).length}/{mod.topics.length}
            </div>
          </div>

          <div className="progress-bar-track" style={{ marginBottom: '1.5rem' }}>
            <div className="progress-bar-fill" style={{
              width: `${Math.round((mod.topics.filter(t => getProgress(t.id)).length / mod.topics.length) * 100)}%`,
              background: mod.color, boxShadow: `0 0 8px ${mod.color}`,
            }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {mod.topics.map((topic, ti) => {
              const done = getProgress(topic.id);
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ti * 0.04 }}
                  whileHover={{ x: 4 }}
                  className="topic-card"
                  style={{
                    padding: '0.85rem 1rem',
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    background: done ? `${mod.color}0d` : 'var(--bg-2)',
                    border: `1px solid ${done ? mod.color + '50' : 'var(--border-dim)'}`,
                    borderLeft: done ? `3px solid ${mod.color}` : '3px solid transparent',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  <Link to={`/database-course/topic/${topic.id}`} style={{ textDecoration: 'none', flex: 1, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 30, height: 30,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: done ? mod.color : 'rgba(255,255,255,0.05)',
                      color: done ? '#000' : 'var(--text-dim)', fontSize: '0.75rem', flexShrink: 0,
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
                    }}>
                      <FontAwesomeIcon icon={iconMap[topic.icon] || faDatabase} />
                    </div>
                    <span style={{
                      fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: '0.9rem',
                      color: done ? mod.color : 'var(--text-primary)',
                    }}>
                      {topic.title}
                    </span>
                  </Link>
                  <button
                    onClick={() => toggleProgress(topic.id)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: done ? mod.color : '#607d8b33', fontSize: '0.9rem', flexShrink: 0 }}
                    title={done ? 'Mark incomplete' : 'Mark complete'}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
    <DbFooter />
  </>
  );
}

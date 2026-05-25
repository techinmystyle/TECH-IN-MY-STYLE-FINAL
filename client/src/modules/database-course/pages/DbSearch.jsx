import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faDatabase, faTimes } from '@fortawesome/free-solid-svg-icons';
import { courseModules } from '../data/courseData';
import DbFooter from '../components/DbFooter';

export default function DbSearch() {
  const [query, setQuery] = useState('');

  const allTopics = useMemo(() => courseModules.flatMap(m =>
    m.topics.map(t => ({ ...t, module: m.label, color: m.color }))
  ), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allTopics.filter(t =>
      t.title.toLowerCase().includes(q) || t.module.toLowerCase().includes(q)
    );
  }, [query, allTopics]);

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 2rem' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2rem' }}>
        <div className="font-orbitron" style={{ fontSize: '0.6rem', color: '#607d8b', letterSpacing: '0.2em', marginBottom: '0.4rem' }}>◈ INTEL SEARCH</div>
        <h1 className="font-orbitron glow-cyan" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>SEARCH MODULES</h1>
      </motion.div>

      {/* Search input */}
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#00f0ff', fontSize: '0.9rem' }} />
        <input
          autoFocus
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search topics, modules..."
          style={{
            width: '100%', background: 'rgba(0,240,255,0.04)', border: '1px solid rgba(0,240,255,0.3)',
            color: '#e0f7fa', fontFamily: 'Rajdhani, sans-serif', fontSize: '1.1rem',
            padding: '0.9rem 3rem', outline: 'none',
          }}
        />
        {query && (
          <button onClick={() => setQuery('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#607d8b', cursor: 'pointer', fontSize: '0.9rem' }}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      {/* Results */}
      {query && (
        <div>
          <div className="font-orbitron" style={{ fontSize: '0.6rem', color: '#607d8b', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            {results.length} RESULT{results.length !== 1 ? 'S' : ''} FOR "{query.toUpperCase()}"
          </div>
          {results.length === 0 ? (
            <div className="hud-panel" style={{ padding: '2rem', textAlign: 'center', color: '#607d8b' }}>
              <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '2rem', marginBottom: '0.75rem', opacity: 0.3 }} />
              <div className="font-orbitron" style={{ fontSize: '0.7rem' }}>NO MODULES FOUND</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {results.map((t, i) => (
                <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link to={`/database-course/topic/${t.id}`} style={{ textDecoration: 'none' }}>
                    <div className="hud-panel" style={{ padding: '0.9rem 1.2rem', borderColor: `${t.color}22`, display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.color, boxShadow: `0 0 6px ${t.color}`, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#e0f7fa' }}>{t.title}</div>
                        <div className="font-orbitron" style={{ fontSize: '0.55rem', color: t.color, marginTop: '0.15rem', letterSpacing: '0.08em' }}>{t.module}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}

      {!query && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
          {courseModules.map(m => (
            <div key={m.id} className="hud-panel" style={{ padding: '1rem', borderColor: `${m.color}22` }}>
              <div className="font-orbitron" style={{ fontSize: '0.6rem', color: m.color, marginBottom: '0.5rem' }}>{m.label}</div>
              <div style={{ fontSize: '1.5rem', color: m.color, fontFamily: 'Orbitron, monospace' }}>{m.topics.length}</div>
              <div style={{ fontSize: '0.8rem', color: '#607d8b' }}>topics</div>
            </div>
          ))}
        </div>
      )}
      <DbFooter />
    </div>
  );
}

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay, faPause, faRedo, faStepForward, faChevronDown,
  faDatabase, faLeaf, faEye, faTable
} from '@fortawesome/free-solid-svg-icons';
import { datasets } from '../data/datasets';
import { analyzeSQLQuery, analyzeMongoQuery } from '../utils/queryAnalyzer';
import DbFooter from '../components/DbFooter';

const SAMPLE_QUERIES = {
  sql: [
    { label: 'Simple SELECT', query: 'SELECT * FROM users WHERE city = \'New York\';' },
    { label: 'JOIN + GROUP BY', query: 'SELECT u.name, COUNT(o.id) as orders\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nGROUP BY u.name\nORDER BY orders DESC;' },
    { label: 'Aggregation', query: 'SELECT category, COUNT(*) as count, AVG(price) as avg_price\nFROM products\nGROUP BY category\nHAVING avg_price > 300\nORDER BY avg_price DESC;' },
    { label: 'Subquery', query: 'SELECT name, price FROM products\nWHERE price > (SELECT AVG(price) FROM products)\nORDER BY price DESC;' },
  ],
  mongo: [
    { label: 'Find All', query: 'db.users.find({});' },
    { label: 'Filter + Sort', query: 'db.users.find({ city: "New York" }).sort({ name: 1 });' },
    { label: 'Aggregation', query: 'db.products.aggregate([\n  { $group: { _id: "$category", count: { $sum: 1 }, avgPrice: { $avg: "$price" } } },\n  { $sort: { avgPrice: -1 } }\n]);' },
    { label: 'UpdateOne', query: 'db.users.updateOne(\n  { name: "Alice Chen" },\n  { $set: { city: "San Francisco" } }\n);' },
  ],
};

const phaseColors = {
  FROM: '#00f0ff', JOIN: '#ff9f1c', WHERE: '#ff9f1c', 'GROUP BY': '#ff4444',
  HAVING: '#ff9f1c', 'ORDER BY': '#39ff14', LIMIT: '#39ff14', SELECT: '#00f0ff',
  VALIDATE: '#607d8b', INSERT: '#39ff14', UPDATE: '#ff9f1c', DELETE: '#ff4444',
  SCAN: '#00f0ff', FILTER: '#ff9f1c', PROJECT: '#39ff14',
  MATCH: '#ff9f1c', GROUP: '#ff4444', SORT: '#39ff14',
};

export default function DbVisualizer() {
  const [mode, setMode] = useState('sql');
  const [dataset, setDataset] = useState('ecommerce');
  const [selectedSample, setSelectedSample] = useState(0);
  const [steps, setSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playTimer, setPlayTimer] = useState(null);

  const ds = datasets[dataset];
  const samples = SAMPLE_QUERIES[mode];

  const handleAnalyze = useCallback(() => {
    const query = samples[selectedSample].query;
    const result = mode === 'sql' ? analyzeSQLQuery(query) : analyzeMongoQuery(query);
    setSteps(result);
    setActiveStep(-1);
    setIsPlaying(false);
    if (playTimer) { clearInterval(playTimer); setPlayTimer(null); }
  }, [mode, selectedSample, samples, playTimer]);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      clearInterval(playTimer);
      setPlayTimer(null);
      setIsPlaying(false);
      return;
    }
    if (!steps.length) { handleAnalyze(); return; }
    setIsPlaying(true);
    setActiveStep(0);
    let cur = 0;
    const timer = setInterval(() => {
      cur++;
      if (cur >= steps.length) {
        clearInterval(timer);
        setPlayTimer(null);
        setIsPlaying(false);
        return;
      }
      setActiveStep(cur);
    }, 900);
    setPlayTimer(timer);
  }, [isPlaying, playTimer, steps, handleAnalyze]);

  const handleReset = useCallback(() => {
    clearInterval(playTimer);
    setPlayTimer(null);
    setIsPlaying(false);
    setActiveStep(-1);
    setSteps([]);
  }, [playTimer]);

  const handleStepForward = useCallback(() => {
    if (!steps.length) { handleAnalyze(); return; }
    setActiveStep(s => Math.min(s + 1, steps.length - 1));
  }, [steps, handleAnalyze]);

  const query = samples[selectedSample]?.query || '';

  // Get sample data for the active step
  function getStepData(step) {
    if (!step) return null;
    if (mode === 'sql') {
      const tables = ds.tables;
      const firstTable = Object.keys(tables)[0];
      return tables[firstTable]?.slice(0, 4) || [];
    }
    const cols = ds.collections;
    const firstCol = Object.keys(cols)[0];
    return cols[firstCol]?.slice(0, 3) || [];
  }

  const currentStep = steps[activeStep];
  const stepsToShow = activeStep >= 0 ? steps.slice(0, activeStep + 1) : steps;

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem', minHeight: 'calc(100vh - 58px)' }}>
      {/* ── Header ───────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '1.5rem' }}>
        <p className="section-label">EXECUTION ENGINE</p>
        <h1 style={{ fontFamily: 'Barlow Condensed', fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
          Query <span style={{ color: 'var(--rog-green)' }}>Visualizer</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Step-by-step query execution breakdown with data flow visualization.</p>
      </motion.div>

      {/* ── Controls ─────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem', alignItems: 'center' }}>

        {/* Mode toggle */}
        <div style={{ display: 'flex', border: '1px solid var(--border-dim)', overflow: 'hidden' }}>
          {[{ id: 'sql', label: 'SQL', icon: faDatabase }, { id: 'mongo', label: 'MongoDB', icon: faLeaf }].map(m => (
            <button key={m.id} onClick={() => { setMode(m.id); handleReset(); setSelectedSample(0); }}
              style={{ padding: '0.5rem 1.2rem', border: 'none', cursor: 'pointer', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.15s', background: mode === m.id ? (m.id === 'sql' ? 'rgba(0,212,255,0.12)' : 'rgba(57,255,20,0.1)') : 'var(--bg-2)', color: mode === m.id ? (m.id === 'sql' ? '#00d4ff' : '#39ff14') : 'var(--text-secondary)', borderRight: '1px solid var(--border-dim)' }}>
              <FontAwesomeIcon icon={m.icon} />{m.label}
            </button>
          ))}
        </div>

        {/* Dataset */}
        <div style={{ position: 'relative' }}>
          <select value={dataset} onChange={e => setDataset(e.target.value)}
            style={{ appearance: 'none', background: 'var(--bg-2)', border: '1px solid var(--border-dim)', color: 'var(--text-primary)', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.82rem', padding: '0.48rem 2.2rem 0.48rem 0.9rem', cursor: 'pointer', outline: 'none' }}>
            {Object.entries(datasets).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
          <FontAwesomeIcon icon={faChevronDown} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', fontSize: '0.6rem', color: 'var(--text-dim)', pointerEvents: 'none' }} />
        </div>

        {/* Sample query selector */}
        <div style={{ position: 'relative' }}>
          <select value={selectedSample} onChange={e => { setSelectedSample(Number(e.target.value)); handleReset(); }}
            style={{ appearance: 'none', background: 'var(--bg-2)', border: '1px solid var(--border-dim)', color: 'var(--text-primary)', fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.82rem', padding: '0.48rem 2.2rem 0.48rem 0.9rem', cursor: 'pointer', outline: 'none', maxWidth: 200 }}>
            {samples.map((s, i) => <option key={i} value={i}>{s.label}</option>)}
          </select>
          <FontAwesomeIcon icon={faChevronDown} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', fontSize: '0.6rem', color: 'var(--text-dim)', pointerEvents: 'none' }} />
        </div>

        {/* Playback controls */}
        <div style={{ display: 'flex', gap: '0.4rem', marginLeft: 'auto' }}>
          <motion.button onClick={handleAnalyze} whileTap={{ scale: 0.95 }} className="btn-rog" style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}>
            <FontAwesomeIcon icon={faEye} /> ANALYZE
          </motion.button>
          <motion.button onClick={handleStepForward} whileTap={{ scale: 0.95 }} className="btn-hud" style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }} disabled={!steps.length && activeStep >= steps.length - 1}>
            <FontAwesomeIcon icon={faStepForward} />
          </motion.button>
          <motion.button onClick={handlePlay} whileTap={{ scale: 0.95 }} className="btn-p5" style={{ padding: '0.5rem 1.2rem', fontSize: '0.82rem' }}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /> {isPlaying ? 'PAUSE' : 'PLAY'}
          </motion.button>
          <motion.button onClick={handleReset} whileTap={{ scale: 0.95 }} className="btn-hud" style={{ padding: '0.5rem 1rem', fontSize: '0.78rem' }}>
            <FontAwesomeIcon icon={faRedo} />
          </motion.button>
        </div>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '1.5rem' }}>
        {/* ── Left: Query + Step list ─────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Query display */}
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            <div className="code-block" style={{ borderRadius: 6 }}>
              <div className="code-block-header">
                <div className="mac-dots">
                  <div className="mac-dot mac-dot-red" style={{ borderRadius: '50%' }} />
                  <div className="mac-dot mac-dot-yellow" style={{ borderRadius: '50%' }} />
                  <div className="mac-dot mac-dot-green" style={{ borderRadius: '50%' }} />
                </div>
                <span style={{ fontFamily: 'Share Tech Mono', fontSize: '0.68rem', color: 'var(--text-dim)' }}>
                  {samples[selectedSample]?.label}
                </span>
              </div>
              <pre style={{ padding: '1rem', fontFamily: 'Share Tech Mono', fontSize: '0.8rem', color: '#d4e8c8', lineHeight: 1.7, margin: 0, overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                {query}
              </pre>
            </div>
          </motion.div>

          {/* Execution steps */}
          <div style={{ flex: 1 }}>
            {steps.length === 0 ? (
              <div className="phantom-card" style={{ padding: '2rem', borderRadius: 6, textAlign: 'center' }}>
                <FontAwesomeIcon icon={faEye} style={{ fontSize: '2rem', color: 'var(--text-dim)', marginBottom: '0.75rem', display: 'block' }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Click ANALYZE or PLAY to visualize the query execution</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {steps.map((step, i) => {
                  const isActive = i === activeStep;
                  const isPast = i < activeStep;
                  const color = phaseColors[step.phase] || '#607d8b';
                  return (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setActiveStep(i)}
                      style={{
                        padding: '0.85rem 1rem',
                        background: isActive ? `${color}12` : isPast ? 'rgba(118,185,0,0.05)' : 'var(--bg-2)',
                        border: `1px solid ${isActive ? color : isPast ? 'rgba(118,185,0,0.15)' : 'var(--border-dim)'}`,
                        borderLeft: `3px solid ${isActive ? color : isPast ? 'var(--rog-green)' : 'transparent'}`,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem',
                        transition: 'all 0.2s',
                        boxShadow: isActive ? `0 0 12px ${color}20` : 'none',
                      }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: isActive ? color : isPast ? 'rgba(118,185,0,0.2)' : 'var(--bg-3)', border: `2px solid ${isActive ? color : isPast ? 'var(--rog-green)' : 'var(--border-dim)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Share Tech Mono', fontSize: '0.7rem', fontWeight: 700, color: isActive ? '#000' : isPast ? 'var(--rog-green)' : 'var(--text-dim)', flexShrink: 0 }}>
                        {isPast && !isActive ? '✓' : step.step}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                          <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.06em', color: isActive ? color : 'var(--text-primary)' }}>{step.phase}</span>
                          <span style={{ fontFamily: 'Share Tech Mono', fontSize: '0.65rem', color: 'var(--text-dim)' }}>→</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{step.label}</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{step.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ── Right: Data visualization ─────────────────────── */}
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          {steps.length === 0 ? (
            <div className="phantom-card" style={{ padding: '3rem', borderRadius: 6, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid var(--border-dim)', background: 'var(--bg-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <FontAwesomeIcon icon={faTable} style={{ fontSize: '2rem', color: 'var(--text-dim)' }} />
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>No visualization yet</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>Analyze a query to see the step-by-step execution flow</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Step progress bar */}
              <div className="phantom-card" style={{ padding: '1rem 1.25rem', borderRadius: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Execution Progress</span>
                  <span style={{ fontFamily: 'Share Tech Mono', fontSize: '0.75rem', color: activeStep >= 0 ? 'var(--rog-green)' : 'var(--text-dim)' }}>
                    {activeStep >= 0 ? `Step ${activeStep + 1} / ${steps.length}` : `${steps.length} steps`}
                  </span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: activeStep >= 0 ? `${((activeStep + 1) / steps.length) * 100}%` : '0%' }} />
                </div>
              </div>

              {/* Active step detail */}
              {currentStep && (
                <motion.div key={activeStep} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="phantom-card" style={{ padding: '1.25rem', borderRadius: 6, borderLeft: `4px solid ${phaseColors[currentStep.phase] || '#607d8b'}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.3rem 0.8rem', background: `${phaseColors[currentStep.phase]}20`, border: `1px solid ${phaseColors[currentStep.phase]}50`, fontFamily: 'Barlow Condensed', fontWeight: 800, fontStyle: 'italic', fontSize: '0.8rem', letterSpacing: '0.06em', color: phaseColors[currentStep.phase], clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                      {currentStep.phase}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{currentStep.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{currentStep.description}</div>
                    </div>
                  </div>

                  {/* Simulated data view */}
                  <div style={{ background: 'var(--bg-3)', border: '1px solid var(--border-dim)', borderRadius: 4, padding: '0.75rem', maxHeight: 200, overflowY: 'auto' }}>
                    <div style={{ fontFamily: 'Share Tech Mono', fontSize: '0.65rem', color: 'var(--text-dim)', marginBottom: '0.5rem', letterSpacing: '0.06em' }}>
                      {mode === 'sql' ? '── SAMPLE TABLE DATA ──' : '── SAMPLE COLLECTION DATA ──'}
                    </div>
                    {getStepData(currentStep)?.map((row, i) => (
                      <div key={i} className={i < 2 ? 'viz-row-highlight' : ''} style={{ padding: '0.35rem 0.5rem', marginBottom: '0.2rem', borderRadius: 2, fontFamily: 'Share Tech Mono', fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                        {mode === 'sql'
                          ? Object.entries(row).slice(0, 3).map(([k, v]) => `${k}: ${v}`).join('  ·  ')
                          : JSON.stringify(row).substring(0, 80) + (JSON.stringify(row).length > 80 ? '...' : '')
                        }
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* All step cards */}
              <div className="rog-card" style={{ padding: '1rem', borderRadius: 6 }}>
                <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  ▶ Execution Pipeline
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                  {steps.map((step, i) => {
                    const color = phaseColors[step.phase] || '#607d8b';
                    const isActive = i === activeStep;
                    const isPast = i < activeStep;
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setActiveStep(i)}
                          style={{ padding: '0.4rem 0.8rem', background: isActive ? color : isPast ? 'rgba(118,185,0,0.1)' : 'var(--bg-3)', border: `1px solid ${isActive ? color : isPast ? 'var(--border-mid)' : 'var(--border-dim)'}`, color: isActive ? '#000' : isPast ? 'var(--rog-green)' : 'var(--text-secondary)', fontFamily: 'Barlow Condensed', fontWeight: 800, fontStyle: 'italic', fontSize: '0.75rem', letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.2s', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}
                        >
                          {step.phase}
                        </motion.div>
                        {i < steps.length - 1 && (
                          <span style={{ margin: '0 0.3rem', color: 'var(--text-dim)', fontSize: '0.7rem' }}>→</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dataset schema reference */}
              <div className="rog-card" style={{ padding: '1rem', borderRadius: 6 }}>
                <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  ▶ {ds.label} Schema ({mode === 'sql' ? 'Tables' : 'Collections'})
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {Object.keys(mode === 'sql' ? ds.tables : ds.collections).map(name => (
                    <div key={name} style={{ padding: '0.25rem 0.7rem', background: 'var(--bg-3)', border: '1px solid var(--border-dim)', fontFamily: 'Share Tech Mono', fontSize: '0.72rem', color: 'var(--rog-green)' }}>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <DbFooter />
    </div>
  );
}

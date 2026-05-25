import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import MonacoEditor from '@monaco-editor/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay, faTrash, faCopy, faDatabase, faLeaf,
  faChevronDown, faExclamationTriangle, faCheck, faEye, faSpinner, faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { datasets, defaultSQLByDataset } from '../data/datasets';
import { useSearchParams } from 'react-router-dom';
import { runMongoQuery } from '../utils/mongoSimulator';
import { analyzeSQLQuery, analyzeMongoQuery } from '../utils/queryAnalyzer';
import { getErrorSuggestion } from '../utils/errorHelper';
import DbFooter from '../components/DbFooter';

const MONGO_PLACEHOLDER = `// MongoDB Simulation
// Supported: find(), insertOne(), updateOne(), deleteOne(), aggregate()

db.users.find({ city: "New York" });

// db.products.find({ price: { $gt: 100 } }).sort({ price: -1 }).limit(3);
// db.orders.insertOne({ user_id: 6, product_id: 1, amount: 299.99 });
// db.users.updateOne({ _id: 1 }, { $set: { city: "Boston" } });
// db.products.deleteOne({ _id: 1 });`;

// Build an in-memory SQLite DB from a dataset
function buildDatabase(SQL, dsKey) {
  const db = new SQL.Database();
  const data = datasets[dsKey];
  if (!data) return db;

  Object.entries(data.tables).forEach(([tableName, rows]) => {
    if (!rows.length) return;
    const cols = Object.keys(rows[0]);
    const colDefs = cols.map(c =>
      typeof rows[0][c] === 'number' ? `${c} REAL` : `${c} TEXT`
    ).join(', ');
    db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${colDefs})`);
    rows.forEach(row => {
      const vals = cols.map(c => {
        const v = row[c];
        if (v === null || v === undefined) return 'NULL';
        if (typeof v === 'number') return v;
        return `'${String(v).replace(/'/g, "''")}'`;
      }).join(', ');
      db.run(`INSERT INTO ${tableName} VALUES (${vals})`);
    });
  });
  return db;
}

export default function DbEditor() {
  const [searchParams] = useSearchParams();
  const [mode, setMode] = useState('sql');
  const [dataset, setDataset] = useState('ecommerce');
  const [sqlCode, setSqlCode] = useState(defaultSQLByDataset['ecommerce'] || '');
  const [mongoCode, setMongoCode] = useState(MONGO_PLACEHOLDER);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showSchema, setShowSchema] = useState(false);
  const [dbReady, setDbReady] = useState(false);
  const [dbStatus, setDbStatus] = useState('Initializing database...');
  const [queryBreakdown, setQueryBreakdown] = useState([]);
  const [errorSuggestion, setErrorSuggestion] = useState(null);

  // Keep SQL instance and current DB in refs — never stale
  const SQLRef = useRef(null);
  const dbRef = useRef(null);
  const datasetRef = useRef(dataset);
  datasetRef.current = dataset;

  // ── Init sql.js once on mount ──────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    setDbReady(false);
    setDbStatus('Loading SQL engine...');

    async function init() {
      try {
        // Vite aliases sql.js → sql-wasm-browser.js; default export is initSqlJs
        const { default: initSqlJs } = await import('sql.js');
        if (cancelled) return;

        const SQL = await initSqlJs({
          locateFile: () => '/sql-wasm.wasm',
        });
        if (cancelled) return;

        SQLRef.current = SQL;

        // Build initial DB
        if (dbRef.current) { try { dbRef.current.close(); } catch {} }
        dbRef.current = buildDatabase(SQL, datasetRef.current);

        setDbReady(true);
        setDbStatus('');
      } catch (e) {
        if (!cancelled) {
          console.error('sql.js init error:', e);
          setDbStatus('Failed to load SQL engine: ' + e.message);
        }
      }
    }

    init();
    return () => { cancelled = true; };
  }, []);

  // ── Rebuild DB when dataset changes ───────────────────────────────────────
  useEffect(() => {
    setSqlCode(defaultSQLByDataset[dataset] || '');
    setResults(null);
    setError(null);

    if (!SQLRef.current) return; // init not done yet — init effect will build it
    if (dbRef.current) { try { dbRef.current.close(); } catch {} }
    dbRef.current = buildDatabase(SQLRef.current, dataset);
  }, [dataset]);

  // ── Load topic SQL example from URL param ─────────────────────────────────
  useEffect(() => {
    const topic = searchParams.get('topic');
    if (!topic) return;
    import('../data/topicContent').then(m => {
      const c = m.topicContent[topic];
      if (c?.sqlExample) { setSqlCode(c.sqlExample); setMode('sql'); }
    });
  }, [searchParams]);

  // ── Run SQL ───────────────────────────────────────────────────────────────
  const runSQL = useCallback(() => {
    if (!dbRef.current || !SQLRef.current) {
      setError('SQL engine is still loading. Please wait a moment and try again.');
      return;
    }
    const code = sqlCode.trim();
    if (!code) { setError('No query to execute.'); return; }

    setRunning(true); setError(null); setResults(null); setErrorSuggestion(null);
    setQueryBreakdown(analyzeSQLQuery(code));
    try {
      const res = dbRef.current.exec(code);
      if (res.length === 0) {
        setResults({ message: 'Query executed successfully. No rows returned.' });
      } else {
        setResults({ columns: res[0].columns, rows: res[0].values });
      }
    } catch (e) {
      setError(e.message);
      setErrorSuggestion(getErrorSuggestion(e.message, 'sql'));
    } finally {
      setRunning(false);
    }
  }, [sqlCode]);

  // ── Run MongoDB ───────────────────────────────────────────────────────────
  const runMongo = useCallback(() => {
    const code = mongoCode.trim();
    if (!code) { setError('No query to execute.'); return; }

    setRunning(true); setError(null); setResults(null); setErrorSuggestion(null);
    setQueryBreakdown(analyzeMongoQuery(code));
    try {
      const data = datasets[dataset];
      const result = runMongoQuery(code, data.collections || {});
      setResults(result);
    } catch (e) {
      setError(e.message);
      setErrorSuggestion(getErrorSuggestion(e.message, 'mongo'));
    } finally {
      setRunning(false);
    }
  }, [mongoCode, dataset]);

  const handleRun = () => mode === 'sql' ? runSQL() : runMongo();

  const handleCopy = () => {
    navigator.clipboard.writeText(mode === 'sql' ? sqlCode : mongoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    if (mode === 'sql') setSqlCode('');
    else setMongoCode('');
    setResults(null); setError(null);
  };

  const ds = datasets[dataset];

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: '2rem' }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '1.5rem' }}>
        <div className="font-orbitron" style={{ fontSize: '0.6rem', color: '#607d8b', letterSpacing: '0.2em', marginBottom: '0.4rem' }}>◈ COMMAND TERMINAL</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <h1 className="font-orbitron glow-cyan" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>DATA COMMAND CENTER</h1>
          {/* DB status indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {!dbReady ? (
              <>
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  style={{ display: 'inline-block', color: '#ff9f1c', fontSize: '0.7rem' }}>
                  <FontAwesomeIcon icon={faSpinner} />
                </motion.span>
                <span className="font-orbitron" style={{ fontSize: '0.55rem', color: '#ff9f1c', letterSpacing: '0.08em' }}>
                  {dbStatus}
                </span>
              </>
            ) : (
              <>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#39ff14', boxShadow: '0 0 6px #39ff14', display: 'inline-block' }} />
                <span className="font-orbitron" style={{ fontSize: '0.55rem', color: '#39ff14', letterSpacing: '0.08em' }}>DB ONLINE</span>
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* Controls row */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
        {/* Mode toggle */}
        <div className="hud-panel" style={{ display: 'flex', padding: 0, overflow: 'hidden' }}>
          {['sql', 'mongo'].map(m => (
            <button key={m} onClick={() => { setMode(m); setResults(null); setError(null); }}
              className="btn-hud" style={{
                border: 'none', borderRight: m === 'sql' ? '1px solid rgba(0,240,255,0.2)' : 'none',
                background: mode === m ? 'rgba(0,240,255,0.12)' : 'transparent',
                color: mode === m ? '#00f0ff' : '#607d8b',
                padding: '0.5rem 1.2rem', fontSize: '0.65rem',
              }}>
              <FontAwesomeIcon icon={m === 'sql' ? faDatabase : faLeaf} style={{ marginRight: '0.4rem' }} />
              {m === 'sql' ? 'SQL MODE' : 'MONGO MODE'}
            </button>
          ))}
        </div>

        {/* Dataset selector */}
        <div style={{ position: 'relative' }}>
          <select value={dataset} onChange={e => setDataset(e.target.value)}
            style={{
              background: 'rgba(0,240,255,0.04)', border: '1px solid rgba(0,240,255,0.2)',
              color: '#00f0ff', fontFamily: 'Orbitron, monospace', fontSize: '0.6rem',
              padding: '0.5rem 2rem 0.5rem 0.75rem', cursor: 'pointer', appearance: 'none',
              letterSpacing: '0.05em',
            }}>
            {Object.entries(datasets).map(([k, v]) => (
              <option key={k} value={k} style={{ background: '#050505' }}>{v.label}</option>
            ))}
          </select>
          <FontAwesomeIcon icon={faChevronDown} style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', color: '#00f0ff', fontSize: '0.6rem', pointerEvents: 'none' }} />
        </div>

        {/* Schema toggle */}
        <button onClick={() => setShowSchema(s => !s)} className="btn-hud"
          style={{ padding: '0.5rem 1rem', fontSize: '0.6rem', color: showSchema ? '#ff9f1c' : '#607d8b', borderColor: showSchema ? '#ff9f1c' : 'rgba(0,240,255,0.2)' }}>
          <FontAwesomeIcon icon={faEye} style={{ marginRight: '0.4rem' }} />
          SCHEMA
        </button>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          <button onClick={handleCopy} className="btn-hud" style={{ padding: '0.5rem 1rem', fontSize: '0.6rem' }}>
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} style={{ marginRight: '0.4rem' }} />
            {copied ? 'COPIED' : 'COPY'}
          </button>
          <button onClick={handleClear} className="btn-hud"
            style={{ padding: '0.5rem 1rem', fontSize: '0.6rem', color: '#607d8b', borderColor: 'rgba(255,255,255,0.1)' }}>
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: '0.4rem' }} />
            CLEAR
          </button>
          <button
            onClick={handleRun}
            disabled={running || (mode === 'sql' && !dbReady)}
            className="btn-hud btn-hud-green"
            style={{
              padding: '0.5rem 1.5rem', fontSize: '0.65rem',
              opacity: (mode === 'sql' && !dbReady) ? 0.5 : 1,
              cursor: (mode === 'sql' && !dbReady) ? 'not-allowed' : 'pointer',
            }}>
            <FontAwesomeIcon icon={running ? faSpinner : faPlay}
              spin={running}
              style={{ marginRight: '0.5rem' }} />
            {running ? 'RUNNING...' : mode === 'sql' && !dbReady ? 'LOADING...' : 'EXECUTE'}
          </button>
        </div>
      </div>

      {/* Schema panel */}
      {showSchema && ds && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          className="hud-panel-amber" style={{ padding: '1rem 1.5rem', marginBottom: '1rem' }}>
          <div className="font-orbitron" style={{ fontSize: '0.6rem', color: '#ff9f1c', marginBottom: '0.75rem', letterSpacing: '0.1em' }}>
            SCHEMA — {ds.label}
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {Object.entries(mode === 'sql' ? ds.tables : (ds.collections || {})).map(([name, rows]) => (
              <div key={name}>
                <div style={{ color: '#ff9f1c', fontFamily: 'Orbitron, monospace', fontSize: '0.65rem', marginBottom: '0.4rem' }}>{name}</div>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {rows[0] && Object.keys(rows[0]).map(col => (
                    <span key={col} style={{ background: 'rgba(255,159,28,0.1)', border: '1px solid rgba(255,159,28,0.2)', color: '#c0a060', fontSize: '0.7rem', padding: '1px 6px', fontFamily: 'Share Tech Mono, monospace' }}>{col}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Editor + Results */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {/* Editor panel */}
        <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' }}>
          {/* macOS titlebar */}
          <div style={{ padding: '10px 14px', background: '#252535', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', boxShadow: '0 0 5px rgba(255,95,87,0.6)' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', boxShadow: '0 0 5px rgba(40,200,64,0.5)' }} />
            </div>
            <div style={{ flex: 1, textAlign: 'center', fontSize: '0.7rem', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
              {mode === 'sql' ? 'SQL Editor' : 'MongoDB Editor'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: mode === 'sql' ? 'var(--neon-cyan)' : 'var(--rog-green)', boxShadow: `0 0 5px ${mode === 'sql' ? 'var(--neon-cyan)' : 'var(--rog-green)'}` }} />
              <span style={{ fontSize: '0.6rem', fontFamily: 'Share Tech Mono, monospace', color: mode === 'sql' ? 'var(--neon-cyan)' : 'var(--rog-green)' }}>
                {mode === 'sql' ? 'SQL' : 'MONGO'}
              </span>
            </div>
          </div>
          <div style={{ background: '#1e1e2e' }}>
            <MonacoEditor
              height="400px"
              language={mode === 'sql' ? 'sql' : 'javascript'}
              value={mode === 'sql' ? sqlCode : mongoCode}
              onChange={v => mode === 'sql' ? setSqlCode(v || '') : setMongoCode(v || '')}
              theme="vs-dark"
              options={{
                fontSize: 13,
                fontFamily: "'Fira Code', 'Share Tech Mono', monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                lineNumbers: 'on',
                wordWrap: 'on',
                padding: { top: 12 },
                automaticLayout: true,
                lineNumbersMinChars: 3,
              }}
            />
          </div>
        </div>

        {/* Results panel */}
        <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', background: '#1e1e2e' }}>
          {/* macOS titlebar */}
          <div style={{ padding: '10px 14px', background: '#252535', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', boxShadow: '0 0 5px rgba(255,95,87,0.6)' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', boxShadow: '0 0 5px rgba(40,200,64,0.5)' }} />
            </div>
            <div style={{ flex: 1, textAlign: 'center', fontSize: '0.7rem', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
              Query Results
            </div>
            {results?.rows && (
              <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', color: '#28c840' }}>
                {results.rows.length} rows
              </span>
            )}
            {results?.docs && (
              <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', color: 'var(--rog-green)' }}>
                {results.docs.length} docs
              </span>
            )}
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: '0.75rem', maxHeight: 400 }}>
            {/* Idle state */}
            {!results && !error && !running && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 340, gap: '0.75rem', color: '#607d8b' }}>
                <FontAwesomeIcon icon={faPlay} style={{ fontSize: '2rem', opacity: 0.3 }} />
                <span className="font-orbitron" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>AWAITING COMMAND</span>
                {mode === 'sql' && !dbReady && (
                  <span style={{ fontSize: '0.75rem', color: '#ff9f1c' }}>{dbStatus}</span>
                )}
              </div>
            )}

            {/* Running spinner */}
            {running && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 340, gap: '0.75rem', color: '#00f0ff' }}>
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} style={{ display: 'inline-block', fontSize: '1.5rem' }}>
                  <FontAwesomeIcon icon={faSpinner} />
                </motion.span>
                <span className="font-orbitron" style={{ fontSize: '0.6rem' }}>EXECUTING...</span>
              </div>
            )}

            {/* Error */}
            {error && !running && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ background: 'rgba(255,68,68,0.08)', border: '1px solid rgba(255,68,68,0.3)', padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#ff4444', marginTop: 2, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div className="font-orbitron" style={{ fontSize: '0.6rem', color: '#ff4444', marginBottom: '0.4rem' }}>ERROR</div>
                    <pre style={{ color: '#ff8888', fontSize: '0.8rem', fontFamily: 'Share Tech Mono, monospace', whiteSpace: 'pre-wrap', margin: 0 }}>{error}</pre>
                    
                    {errorSuggestion && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        style={{ marginTop: '0.75rem', padding: '0.75rem', background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.3)', borderRadius: 4 }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                          <FontAwesomeIcon icon={faLightbulb} style={{ color: '#39ff14', marginTop: 2, flexShrink: 0, fontSize: '0.75rem' }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#39ff14', marginBottom: '0.25rem' }}>
                              {errorSuggestion.hint}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: '#a0d060', lineHeight: 1.5 }}>
                              {errorSuggestion.suggestion}
                            </div>
                            {errorSuggestion.fix && (
                              <div style={{ fontSize: '0.75rem', color: '#76b900', marginTop: '0.4rem', fontStyle: 'italic' }}>
                                💡 {errorSuggestion.fix}
                              </div>
                            )}
                            {errorSuggestion.example && (
                              <div style={{ fontSize: '0.7rem', color: '#6fa8c0', marginTop: '0.4rem', fontFamily: 'Share Tech Mono, monospace', background: 'rgba(0,212,255,0.05)', padding: '0.4rem', borderRadius: 2 }}>
                                Example: {errorSuggestion.example}
                              </div>
                            )}
                            {errorSuggestion.examples && (
                              <div style={{ fontSize: '0.7rem', color: '#6fa8c0', marginTop: '0.4rem' }}>
                                {errorSuggestion.examples.map((ex, i) => (
                                  <div key={i} style={{ fontFamily: 'Share Tech Mono, monospace', background: 'rgba(0,212,255,0.05)', padding: '0.3rem', borderRadius: 2, marginBottom: '0.2rem' }}>
                                    {ex}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Success message */}
            {results?.message && !running && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', padding: '1rem', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#39ff14' }}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.85rem' }}>{results.message}</span>
                </div>
              </motion.div>
            )}

            {/* SQL table results */}
            {results?.columns && !running && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ overflowX: 'auto' }}>
                <table className="result-table">
                  <thead>
                    <tr>{results.columns.map(c => <th key={c}>{c}</th>)}</tr>
                  </thead>
                  <tbody>
                    {results.rows.map((row, i) => (
                      <tr key={i}>{row.map((cell, j) => (
                        <td key={j}>{cell === null ? <span style={{ color: '#607d8b', fontStyle: 'italic' }}>NULL</span> : String(cell)}</td>
                      ))}</tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {/* MongoDB document results */}
            {results?.docs && !running && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {results.docs.map((doc, i) => (
                  <div key={i} style={{ background: 'rgba(57,255,20,0.04)', border: '1px solid rgba(57,255,20,0.15)', padding: '0.6rem 0.8rem', marginBottom: '0.4rem' }}>
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontFamily: 'Share Tech Mono, monospace', fontSize: '0.75rem', color: '#a0f0ff' }}>
                      {JSON.stringify(doc, null, 2)}
                    </pre>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Query Breakdown Panel */}
      {queryBreakdown.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginTop: '1.5rem', padding: '1rem 1.5rem', background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 8 }}
        >
          <div className="font-orbitron" style={{ fontSize: '0.65rem', color: '#00f0ff', marginBottom: '1rem', letterSpacing: '0.1em' }}>
            ▶ QUERY EXECUTION BREAKDOWN
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {queryBreakdown.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  padding: '0.6rem 1rem',
                  background: `${step.color}12`,
                  border: `1px solid ${step.color}44`,
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 8px ${step.color}`;
                  e.currentTarget.style.background = `${step.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = `${step.color}12`;
                }}
                title={step.description}
              >
                <div style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: step.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#0d0d0d',
                }}>{step.step}</div>
                <div>
                  <div style={{ fontSize: '0.7rem', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, color: step.color }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#607d8b', display: 'none' }}>
                    {step.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Quick reference snippets */}
      <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
        {(mode === 'sql' ? [
          { label: 'SELECT ALL', code: `SELECT * FROM ${Object.keys(ds?.tables || {})[0] || 'table'};` },
          { label: 'WHERE filter', code: `SELECT * FROM ${Object.keys(ds?.tables || {})[0] || 'table'} WHERE id = 1;` },
          { label: 'JOIN tables', code: `SELECT * FROM ${Object.keys(ds?.tables || {})[0] || 'a'}\nJOIN ${Object.keys(ds?.tables || {})[1] || 'b'} ON ${Object.keys(ds?.tables || {})[0] || 'a'}.id = ${Object.keys(ds?.tables || {})[1] || 'b'}.${Object.keys(ds?.tables || {})[0] || 'a'}_id;` },
          { label: 'GROUP BY', code: `SELECT ${Object.keys(datasets[dataset]?.tables || {})[0] ? Object.keys(datasets[dataset].tables[Object.keys(datasets[dataset].tables)[0]][0])[1] : 'col'}, COUNT(*)\nFROM ${Object.keys(ds?.tables || {})[0] || 'table'}\nGROUP BY 1\nORDER BY 2 DESC;` },
        ] : [
          { label: 'find all', code: `db.${Object.keys(ds?.collections || {})[0] || 'col'}.find({});` },
          { label: 'find filter', code: `db.${Object.keys(ds?.collections || {})[0] || 'col'}.find({ field: "value" });` },
          { label: 'insertOne', code: `db.${Object.keys(ds?.collections || {})[0] || 'col'}.insertOne({ key: "value" });` },
          { label: 'aggregate', code: `db.${Object.keys(ds?.collections || {})[0] || 'col'}.aggregate([\n  { $group: { _id: "$field", count: { $sum: 1 } } }\n]);` },
        ]).map((q, i) => (
          <button key={i}
            onClick={() => mode === 'sql' ? setSqlCode(q.code) : setMongoCode(q.code)}
            style={{ padding: '0.6rem 0.8rem', cursor: 'pointer', textAlign: 'left', border: '1px solid rgba(0,240,255,0.1)', background: 'rgba(0,240,255,0.02)', width: '100%' }}>
            <div className="font-orbitron" style={{ fontSize: '0.55rem', color: '#00f0ff', marginBottom: '0.25rem' }}>{q.label}</div>
            <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.7rem', color: '#607d8b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{q.code.split('\n')[0]}</div>
          </button>
        ))}
      </div>
      <DbFooter />
    </div>
  );
}

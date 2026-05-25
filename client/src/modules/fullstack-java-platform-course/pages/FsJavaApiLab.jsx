import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import Editor from '@monaco-editor/react'
import FsJavaSystemFlowViz from '../components/FsJavaSystemFlowViz'

const METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
const METHOD_COLORS = { GET: '#39ff14', POST: '#00f0ff', PUT: '#ff9f1c', DELETE: '#ff4444', PATCH: '#a855f7' }

const PRESETS = [
  { label: 'GET — All Users', method: 'GET', url: 'https://jsonplaceholder.typicode.com/users', body: '', headers: '' },
  { label: 'GET — Single Post', method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts/1', body: '', headers: '' },
  { label: 'POST — Create Post', method: 'POST', url: 'https://jsonplaceholder.typicode.com/posts', body: '{\n  "title": "New Post from API Lab",\n  "body": "Testing POST request",\n  "userId": 1\n}', headers: 'Content-Type: application/json' },
  { label: 'PUT — Update Post', method: 'PUT', url: 'https://jsonplaceholder.typicode.com/posts/1', body: '{\n  "id": 1,\n  "title": "Updated Post Title",\n  "body": "Updated post content",\n  "userId": 1\n}', headers: 'Content-Type: application/json' },
  { label: 'PATCH — Partial Update', method: 'PATCH', url: 'https://jsonplaceholder.typicode.com/posts/1', body: '{\n  "title": "Patched Title"\n}', headers: 'Content-Type: application/json' },
  { label: 'DELETE — Remove Post', method: 'DELETE', url: 'https://jsonplaceholder.typicode.com/posts/1', body: '', headers: '' },
]

export default function FsJavaApiLab() {
  const [method, setMethod] = useState('GET')
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1')
  const [headers, setHeaders] = useState('')
  const [body, setBody] = useState('')
  const [response, setResponse] = useState(null)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('body')
  const [isFlowRunning, setIsFlowRunning] = useState(false)
  const [timeTaken, setTimeTaken] = useState(null)

  const parseHeaders = (raw) => {
    const result = {}
    raw.split('\n').forEach(line => {
      const [key, ...val] = line.split(':')
      if (key && val.length) result[key.trim()] = val.join(':').trim()
    })
    return result
  }

  const sendRequest = async () => {
    if (!url.trim()) return
    setLoading(true)
    setError(null)
    setResponse(null)
    setStatus(null)
    setIsFlowRunning(true)
    const start = Date.now()

    try {
      const parsedHeaders = parseHeaders(headers)
      let parsedBody = null
      if (body.trim()) {
        try { parsedBody = JSON.parse(body) } catch { parsedBody = body }
      }

      const res = await axios({
        method: method.toLowerCase(),
        url,
        headers: parsedHeaders,
        data: parsedBody,
      })

      setStatus(res.status)
      setResponse(res.data)
      setTimeTaken(Date.now() - start)
    } catch (err) {
      setError(err)
      setStatus(err.response?.status || 0)
      setResponse(err.response?.data || { error: err.message })
      setTimeTaken(Date.now() - start)
    } finally {
      setLoading(false)
      setTimeout(() => setIsFlowRunning(false), 4000)
    }
  }

  const loadPreset = (preset) => {
    setMethod(preset.method)
    setUrl(preset.url)
    setBody(preset.body)
    setHeaders(preset.headers)
    setResponse(null)
    setError(null)
    setStatus(null)
  }

  const responseStr = response ? JSON.stringify(response, null, 2) : ''

  return (
    <div id="main-content" style={{ minHeight: '100vh', background: 'var(--java-darker)' }}>
      <div className="grid-overlay" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: '#555', letterSpacing: 4, marginBottom: '0.5rem' }}>COMMAND CENTER</div>
          <h1 style={{ fontFamily: 'Orbitron', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#fff' }}>
            API <span className="glow-cyan">Command Lab</span>
          </h1>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#555', marginTop: '0.5rem' }}>
            Test REST endpoints · Visualize system flow · Inspect responses
          </p>
        </motion.div>

        {/* Presets */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontFamily: 'Orbitron', fontSize: '0.55rem', color: '#555', letterSpacing: 2, alignSelf: 'center' }}>PRESETS:</span>
            {PRESETS.map(p => (
              <button key={p.label} onClick={() => loadPreset(p)} style={{
                background: 'rgba(0,240,255,0.05)', border: '1px solid rgba(0,240,255,0.15)',
                color: '#888', fontFamily: 'JetBrains Mono', fontSize: '0.7rem',
                padding: '0.3rem 0.7rem', borderRadius: 4, cursor: 'pointer', transition: 'all 0.2s',
              }}>{p.label}</button>
            ))}
          </div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#2a3a4a', marginLeft: '4.5rem' }}>
            💡 Using JSONPlaceholder demo API — all requests are simulated
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Request Panel */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            <div className="hud-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f0ff', boxShadow: '0 0 8px #00f0ff' }} />
                <span style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', color: '#00f0ff', letterSpacing: 2 }}>REQUEST PANEL</span>
              </div>

              {/* Method + URL */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <select
                  value={method}
                  onChange={e => setMethod(e.target.value)}
                  style={{
                    background: `${METHOD_COLORS[method]}15`,
                    border: `1px solid ${METHOD_COLORS[method]}44`,
                    color: METHOD_COLORS[method],
                    fontFamily: 'Orbitron', fontSize: '0.7rem', fontWeight: 700,
                    padding: '0.6rem 0.5rem', borderRadius: 4, cursor: 'pointer',
                    outline: 'none', minWidth: 90,
                  }}
                >
                  {METHODS.map(m => <option key={m} value={m} style={{ background: '#0a0a0a', color: METHOD_COLORS[m] }}>{m}</option>)}
                </select>
                <input
                  value={url}
                  onChange={e => setUrl(e.target.value)}
                  placeholder="https://api.example.com/endpoint"
                  onKeyDown={e => e.key === 'Enter' && sendRequest()}
                  style={{
                    flex: 1, background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(0,240,255,0.15)',
                    color: '#e0e0e0', fontFamily: 'JetBrains Mono', fontSize: '0.78rem',
                    padding: '0.6rem 0.75rem', borderRadius: 4, outline: 'none',
                  }}
                />
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: '0.25rem', borderBottom: '1px solid rgba(0,240,255,0.1)', paddingBottom: '0.5rem' }}>
                {['body', 'headers'].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={{
                    background: activeTab === tab ? 'rgba(0,240,255,0.1)' : 'transparent',
                    border: activeTab === tab ? '1px solid rgba(0,240,255,0.3)' : '1px solid transparent',
                    color: activeTab === tab ? '#00f0ff' : '#555',
                    fontFamily: 'Orbitron', fontSize: '0.6rem', letterSpacing: 1,
                    padding: '0.3rem 0.75rem', borderRadius: 4, cursor: 'pointer', transition: 'all 0.2s',
                  }}>{tab.toUpperCase()}</button>
                ))}
              </div>

              {/* Body / Headers */}
              <AnimatePresence mode="wait">
                {activeTab === 'body' ? (
                  <motion.div key="body" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ height: 200, borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(0,240,255,0.1)', position: 'relative' }}>
                    {!body && (
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        pointerEvents: 'none',
                        zIndex: 1,
                      }}>
                        <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#2a3a4a' }}>
                          // Click a preset or type JSON here...
                        </div>
                      </div>
                    )}
                    <Editor
                      height="200px"
                      defaultLanguage="json"
                      value={body}
                      onChange={v => setBody(v || '')}
                      theme="vs-dark"
                      options={{ minimap: { enabled: false }, fontSize: 12, fontFamily: '"JetBrains Mono", monospace', lineNumbers: 'off', scrollBeyondLastLine: false, padding: { top: 8 } }}
                    />
                  </motion.div>
                ) : (
                  <motion.div key="headers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <textarea
                      value={headers}
                      onChange={e => setHeaders(e.target.value)}
                      placeholder={'Content-Type: application/json\nAuthorization: Bearer <token>'}
                      style={{
                        width: '100%', height: 200, background: 'rgba(0,0,0,0.4)',
                        border: '1px solid rgba(0,240,255,0.1)', color: '#aaa',
                        fontFamily: 'JetBrains Mono', fontSize: '0.75rem',
                        padding: '0.75rem', borderRadius: 6, outline: 'none', resize: 'vertical',
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Send button */}
              <button
                onClick={sendRequest}
                disabled={loading}
                style={{
                  background: loading ? 'rgba(0,240,255,0.05)' : 'linear-gradient(135deg, rgba(0,240,255,0.2), rgba(0,240,255,0.05))',
                  border: '1px solid rgba(0,240,255,0.4)',
                  color: loading ? '#555' : '#00f0ff',
                  fontFamily: 'Orbitron', fontSize: '0.75rem', letterSpacing: 2,
                  padding: '0.9rem', borderRadius: 6, cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s', width: '100%',
                  boxShadow: loading ? 'none' : '0 0 15px rgba(0,240,255,0.15)',
                }}
              >
                {loading ? '⟳ EXECUTING...' : '⚡ SEND REQUEST'}
              </button>
            </div>
          </motion.div>

          {/* Response Panel */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
            <div className="hud-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff9f1c', boxShadow: '0 0 8px #ff9f1c' }} />
                  <span style={{ fontFamily: 'Orbitron', fontSize: '0.65rem', color: '#ff9f1c', letterSpacing: 2 }}>RESPONSE OUTPUT</span>
                </div>
                {status && (
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{
                      fontFamily: 'Orbitron', fontSize: '0.65rem', fontWeight: 700,
                      color: status >= 200 && status < 300 ? '#39ff14' : '#ff4444',
                      background: status >= 200 && status < 300 ? 'rgba(57,255,20,0.1)' : 'rgba(255,68,68,0.1)',
                      border: `1px solid ${status >= 200 && status < 300 ? 'rgba(57,255,20,0.3)' : 'rgba(255,68,68,0.3)'}`,
                      padding: '0.2rem 0.6rem', borderRadius: 4,
                    }}>{status}</span>
                    {timeTaken && <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#555' }}>{timeTaken}ms</span>}
                  </div>
                )}
              </div>

              <div style={{ flex: 1, minHeight: 340, borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(0,240,255,0.1)' }}>
                {response ? (
                  <Editor
                    height="340px"
                    defaultLanguage="json"
                    value={responseStr}
                    theme="vs-dark"
                    options={{ readOnly: true, minimap: { enabled: false }, fontSize: 12, fontFamily: '"JetBrains Mono", monospace', lineNumbers: 'off', scrollBeyondLastLine: false, padding: { top: 8 } }}
                  />
                ) : (
                  <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📡</div>
                      <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#333' }}>// Awaiting request...</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Error visualization */}
              {error && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'rgba(255,68,68,0.08)', border: '1px solid rgba(255,68,68,0.25)', borderRadius: 6, padding: '0.75rem' }}>
                  <div style={{ fontFamily: 'Orbitron', fontSize: '0.6rem', color: '#ff4444', marginBottom: '0.4rem', letterSpacing: 2 }}>ERROR DETECTED</div>
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: '#ff8888', marginBottom: '0.5rem' }}>{error.message}</div>
                  {error.response?.status === 401 && <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#ff9f1c' }}>→ Add Authorization header with valid token</div>}
                  {error.response?.status === 404 && <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#ff9f1c' }}>→ Resource not found. Try one of the presets above for valid endpoints</div>}
                  {error.response?.status === 500 && <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#ff9f1c' }}>→ Internal server error — check server logs</div>}
                  {!error.response && <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: '#ff9f1c' }}>→ Network error — check CORS policy or connectivity</div>}
                  <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.65rem', color: '#555', marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,68,68,0.15)' }}>
                    💡 Tip: Use the preset buttons above for guaranteed working examples
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* System Flow Visualization */}
        <FsJavaSystemFlowViz isRunning={isFlowRunning} status={status} />
      </div>
    </div>
  )
}

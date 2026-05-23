import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoBookmark, IoArrowBack, IoFlash, IoBook, IoCode, IoVideocam, IoChatbubbles, IoGrid, IoLogoYoutube } from 'react-icons/io5';
import { MdCheckCircle } from 'react-icons/md';
import { topicsData } from '../data/dsaTopics';
import { useDsaProgress } from '../hooks/useDsaProgress';
import DsaCodeBlock from '../components/DsaCodeBlock';
import DsaInterviewAccordion from '../components/DsaInterviewAccordion';
import ArrayVisualizer from '../components/ArrayVisualizer';
import LinkedListVisualizer from '../components/LinkedListVisualizer';
import StackVisualizer from '../components/StackVisualizer';
import TreeVisualizer from '../components/TreeVisualizer';
import StringVisualizer from '../components/StringVisualizer';
import RecursionVisualizer from '../components/RecursionVisualizer';
import QueueVisualizer from '../components/QueueVisualizer';
import GraphVisualizer from '../components/GraphVisualizer';
import DPVisualizer from '../components/DPVisualizer';
import SortingVisualizer from '../components/SortingVisualizer';
import BinarySearchVisualizer from '../components/BinarySearchVisualizer';
import HashingVisualizer from '../components/HashingVisualizer';
import HeapVisualizer from '../components/HeapVisualizer';
import BacktrackingVisualizer from '../components/BacktrackingVisualizer';
import TrieVisualizer from '../components/TrieVisualizer';
import GreedyVisualizer from '../components/GreedyVisualizer';
import BitVisualizer from '../components/BitVisualizer';
import TwoPointerVisualizer from '../components/TwoPointerVisualizer';
import SlidingWindowVisualizer from '../components/SlidingWindowVisualizer';
import UnionFindVisualizer from '../components/UnionFindVisualizer';
import DijkstraVisualizer from '../components/DijkstraVisualizer';
import PrefixSumVisualizer from '../components/PrefixSumVisualizer';

const SECTIONS = [
  { id: 'thinking', label: 'INTUITION', Icon: IoFlash },
  { id: 'description', label: 'CONCEPT', Icon: IoBook },
  { id: 'complexity', label: 'COMPLEXITY', Icon: IoGrid },
  { id: 'code', label: 'CODE', Icon: IoCode },
  { id: 'visualization', label: 'VISUALIZE', Icon: IoVideocam },
  { id: 'interview', label: 'INTERVIEW', Icon: IoChatbubbles },
  { id: 'text-resources', label: 'TEXT RESOURCES', Icon: IoBook },
  { id: 'video-resources', label: 'VIDEO RESOURCES', Icon: IoLogoYoutube },
];

function P5SectionTitle({ icon, label, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
      <div style={{ width: 3, height: 28, background: '#e8001c', borderRadius: 2 }} />
      <div>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#e8001c', lineHeight: 1 }}>{label}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1rem' }}>{icon}</span>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#ede5d8', fontSize: '1.4rem', letterSpacing: '0.05em', lineHeight: 1 }}>{title}</h2>
        </div>
      </div>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(232,0,28,0.3), transparent)' }} />
    </div>
  );
}

export default function DsaTopicPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = topicsData[id];
  const { isCompleted, isBookmarked, markComplete, toggleBookmark } = useDsaProgress();
  const [activeSection, setActiveSection] = useState('thinking');

  useEffect(() => { window.scrollTo(0, 0); setActiveSection('thinking'); }, [id]);

  if (!topic) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 62 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '5rem', color: '#e8001c', lineHeight: 1 }}>404</div>
          <p style={{ color: '#6a6070', margin: '1rem 0 2rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em' }}>THIS PALACE DOESN'T EXIST YET</p>
          <button className="p5-btn" onClick={() => navigate('/dsa-course')}><span>RETURN TO BASE</span></button>
        </div>
      </div>
    );
  }

  const done = isCompleted(topic.id);
  const bookmarked = isBookmarked(topic.id);
  const hasViz = ['array','linkedlist','stack','tree','string','recursion','queue','graph','dp','sorting','binary-search','hashing','heap','backtracking','trie','greedy','bit','two-pointer','sliding-window','union-find','dijkstra','prefix-sum'].includes(topic.visualization);

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 62 }}>

      {/* ── HERO BANNER ── */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '3rem 1.5rem 2.5rem', background: 'linear-gradient(to bottom, rgba(232,0,28,0.04), transparent)' }}>
        <div className="p5-stripe-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: -40, right: -40, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,0,28,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <button onClick={() => navigate(-1)}
            style={{ background: 'none', border: 'none', color: '#6a6070', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', marginBottom: '1.5rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e8001c'}
            onMouseLeave={e => e.currentTarget.style.color = '#6a6070'}>
            <IoArrowBack style={{ fontSize: '0.9rem' }} /> BACK
          </button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '2rem' }}>{topic.icon}</span>
                  <div className="phantom-badge">{topic.level}</div>
                  <div className="gold-badge">{topic.realm}</div>
                  {done && <div className="phantom-badge" style={{ borderColor: 'rgba(58,255,138,0.4)', color: '#3aff8a', background: 'rgba(58,255,138,0.08)' }}>✓ CONQUERED</div>}
                </div>
                <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ede5d8', letterSpacing: '0.04em', lineHeight: 1, marginBottom: '0.4rem' }}>{topic.name}</h1>
                <p style={{ color: '#c9a96e', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.9rem', letterSpacing: '0.1em' }}>{topic.tagline}</p>
                {topic.persona && <p style={{ color: '#6a6070', fontSize: '0.8rem', marginTop: '0.4rem', fontStyle: 'italic' }}>"{topic.persona}"</p>}
              </div>

              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => toggleBookmark(topic.id)}
                  style={{ background: bookmarked ? 'rgba(201,169,110,0.12)' : 'rgba(201,169,110,0.05)', border: `1px solid ${bookmarked ? 'rgba(201,169,110,0.4)' : 'rgba(201,169,110,0.15)'}`, borderRadius: 3, padding: '0.5rem 0.9rem', color: bookmarked ? '#c9a96e' : '#6a6070', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', transition: 'all 0.2s' }}>
                  <IoBookmark style={{ fontSize: '0.9rem' }} /> {bookmarked ? 'SAVED' : 'SAVE'}
                </button>
                <button onClick={() => markComplete(topic.id)}
                  style={{ background: done ? 'rgba(58,255,138,0.08)' : 'rgba(232,0,28,0.08)', border: `1px solid ${done ? 'rgba(58,255,138,0.3)' : 'rgba(232,0,28,0.3)'}`, borderRadius: 3, padding: '0.5rem 0.9rem', color: done ? '#3aff8a' : '#e8001c', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', transition: 'all 0.2s' }}>
                  <MdCheckCircle style={{ fontSize: '0.9rem' }} /> {done ? 'CONQUERED' : 'MARK DONE'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── SECTION NAV ── */}
      <div style={{ position: 'sticky', top: 62, zIndex: 50, background: 'rgba(6,4,8,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(232,0,28,0.12)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 1.5rem', display: 'flex', overflowX: 'auto' }}>
          {SECTIONS.filter(s => s.id !== 'visualization' || hasViz).map(s => {
            const active = activeSection === s.id;
            return (
              <button key={s.id} onClick={() => setActiveSection(s.id)}
                style={{ background: 'none', border: 'none', padding: '0.85rem 1rem', cursor: 'pointer', color: active ? '#e8001c' : '#6a6070', fontSize: '0.72rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.12em', borderBottom: active ? '2px solid #e8001c' : '2px solid transparent', display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                <s.Icon style={{ fontSize: '0.85rem' }} />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
        <motion.div key={activeSection} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>

          {activeSection === 'thinking' && (
            <div>
              <P5SectionTitle icon="⚡" label="INTUITION" title="The Phantom's Insight" />
              <div style={{ background: 'rgba(232,0,28,0.03)', border: '1px solid rgba(232,0,28,0.12)', borderLeft: '3px solid #e8001c', borderRadius: '0 8px 8px 0', padding: '1.75rem', marginBottom: '2rem' }}>
                <p style={{ color: '#c8c0b0', fontSize: '0.95rem', lineHeight: 1.9 }}>{topic.intuition}</p>
              </div>
              <P5SectionTitle icon="🏛️" label="ANALOGY" title="Real-World Connection" />
              <div style={{ background: 'rgba(201,169,110,0.03)', border: '1px solid rgba(201,169,110,0.12)', borderLeft: '3px solid #c9a96e', borderRadius: '0 8px 8px 0', padding: '1.75rem' }}>
                <p style={{ color: '#c8c0b0', fontSize: '0.95rem', lineHeight: 1.9 }}>{topic.analogy}</p>
              </div>
            </div>
          )}

          {activeSection === 'description' && (
            <div>
              <P5SectionTitle icon="📜" label="BREAKDOWN" title="Concept Decoded" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {topic.description.map((point, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(10,8,14,0.7)', border: '1px solid rgba(232,0,28,0.08)', borderLeft: '3px solid rgba(232,0,28,0.3)', borderRadius: '0 8px 8px 0', padding: '0.9rem 1.1rem' }}>
                    <span style={{ color: '#e8001c', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', minWidth: 24, marginTop: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                    <p style={{ color: '#c8c0b0', fontSize: '0.88rem', lineHeight: 1.75 }}>{point}</p>
                  </motion.div>
                ))}
              </div>
              <div style={{ background: 'linear-gradient(135deg, rgba(232,0,28,0.06), rgba(201,169,110,0.04))', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 4, padding: '1.25rem 1.5rem' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#e8001c', marginBottom: '0.5rem' }}>KEY TAKEAWAY</div>
                <p style={{ color: '#ede5d8', fontSize: '0.92rem', lineHeight: 1.7 }}>{topic.keyTakeaway}</p>
              </div>
            </div>
          )}

          {activeSection === 'complexity' && topic.complexity && (
            <div>
              <P5SectionTitle icon="⏱️" label="ANALYSIS" title="Time & Space Complexity" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {Object.entries(topic.complexity).map(([op, val]) => (
                  <motion.div key={op} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 }}
                    style={{ background: 'rgba(10,8,14,0.8)', border: '1px solid rgba(232,0,28,0.12)', borderRadius: 4, padding: '1.25rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(to right, #e8001c, #c9a96e)' }} />
                    <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', color: val.startsWith('O(1)') ? '#3aff8a' : val.startsWith('O(log') ? '#c9a96e' : '#e8001c', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#6a6070', marginTop: 4, textTransform: 'uppercase' }}>{op}</div>
                  </motion.div>
                ))}
              </div>
              <div style={{ background: 'rgba(10,8,14,0.6)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: 4, padding: '1.25rem' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: '#c9a96e', marginBottom: '0.75rem' }}>COMPLEXITY LEGEND</div>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {[['#3aff8a', 'O(1) — Constant'], ['#c9a96e', 'O(log n) — Logarithmic'], ['#e8001c', 'O(n) or worse']].map(([c, l]) => (
                    <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                      <span style={{ color: '#6a6070', fontSize: '0.78rem' }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'code' && (
            <div>
              <P5SectionTitle icon="⚔️" label="ARSENAL" title="Code Weapons" />
              <DsaCodeBlock codes={topic.codes} />
            </div>
          )}

          {activeSection === 'visualization' && hasViz && (
            <div>
              <P5SectionTitle icon="🔮" label="LIVE" title="Watch Logic Come Alive" />
              {topic.visualization === 'array' && <ArrayVisualizer />}
              {topic.visualization === 'linkedlist' && <LinkedListVisualizer />}
              {topic.visualization === 'stack' && <StackVisualizer />}
              {topic.visualization === 'tree' && <TreeVisualizer />}
              {topic.visualization === 'string' && <StringVisualizer />}
              {topic.visualization === 'recursion' && <RecursionVisualizer />}
              {topic.visualization === 'queue' && <QueueVisualizer />}
              {topic.visualization === 'graph' && <GraphVisualizer />}
              {topic.visualization === 'dp' && <DPVisualizer />}
              {topic.visualization === 'sorting' && <SortingVisualizer />}
              {topic.visualization === 'binary-search' && <BinarySearchVisualizer />}
              {topic.visualization === 'hashing' && <HashingVisualizer />}
              {topic.visualization === 'heap' && <HeapVisualizer />}
              {topic.visualization === 'backtracking' && <BacktrackingVisualizer />}
              {topic.visualization === 'trie' && <TrieVisualizer />}
              {topic.visualization === 'greedy' && <GreedyVisualizer />}
              {topic.visualization === 'bit' && <BitVisualizer />}
              {topic.visualization === 'two-pointer' && <TwoPointerVisualizer />}
              {topic.visualization === 'sliding-window' && <SlidingWindowVisualizer />}
              {topic.visualization === 'union-find' && <UnionFindVisualizer />}
              {topic.visualization === 'dijkstra' && <DijkstraVisualizer />}
              {topic.visualization === 'prefix-sum' && <PrefixSumVisualizer />}
            </div>
          )}

          {activeSection === 'interview' && (
            <div>
              <P5SectionTitle icon="🛡️" label="BATTLE" title="Interview Questions" />
              <p style={{ color: '#6a6070', fontSize: '0.82rem', marginBottom: '1.5rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>CLICK TO REVEAL THE ANSWER</p>
              <DsaInterviewAccordion questions={topic.interview} />
            </div>
          )}

          {activeSection === 'text-resources' && topic.resources && (
            <div>
              <P5SectionTitle icon="📜" label="LIBRARY" title="Text Resources & Documentation" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {topic.resources.docs && topic.resources.docs.length > 0 && (
                  <div style={{ background: 'rgba(10,8,14,0.8)', border: '1px solid rgba(232,0,28,0.12)', borderRadius: 4, padding: '1.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#e8001c' }} />
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1.1rem', letterSpacing: '0.08em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <IoBook /> OFFICIAL DOCUMENTATION
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {topic.resources.docs.map((doc, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <span style={{ color: '#e8001c', fontSize: '0.8rem' }}>➔</span>
                          <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color: '#c8c0b0', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e8001c'} onMouseLeave={(e) => e.target.style.color = '#c8c0b0'}>
                            {doc.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {topic.resources.blogs && topic.resources.blogs.length > 0 && (
                  <div style={{ background: 'rgba(10,8,14,0.8)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: 4, padding: '1.5rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#c9a96e' }} />
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#c9a96e', fontSize: '1.1rem', letterSpacing: '0.08em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <IoBook /> DESCRIPTIVE ARTICLES & BLOGS
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {topic.resources.blogs.map((blog, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <span style={{ color: '#c9a96e', fontSize: '0.8rem' }}>➔</span>
                          <a href={blog.url} target="_blank" rel="noopener noreferrer" style={{ color: '#c8c0b0', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#c9a96e'} onMouseLeave={(e) => e.target.style.color = '#c8c0b0'}>
                            {blog.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeSection === 'video-resources' && topic.resources && (
            <div>
              <P5SectionTitle icon="🎬" label="THEATER" title="Video Resources & Lectures" />
              {topic.resources.youtube && topic.resources.youtube.length > 0 && (
                <div style={{ background: 'rgba(10,8,14,0.8)', border: '1px solid rgba(232,0,28,0.12)', borderRadius: 4, padding: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#e8001c' }} />
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1.1rem', letterSpacing: '0.08em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <IoLogoYoutube /> SUGGESTED VIDEO TUTORIALS
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {topic.resources.youtube.map((vid, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ color: '#e8001c', fontSize: '0.8rem' }}>➔</span>
                        <a href={vid.url} target="_blank" rel="noopener noreferrer" style={{ color: '#c8c0b0', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#e8001c'} onMouseLeave={(e) => e.target.style.color = '#c8c0b0'}>
                          {vid.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}

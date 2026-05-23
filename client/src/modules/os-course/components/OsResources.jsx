import { useState } from 'react';
import { FaYoutube, FaFileAlt, FaBookOpen, FaCompass } from 'react-icons/fa';
import { osResources } from '../data/osResources';
import { motion } from 'framer-motion';

export default function OsResources({ topicId }) {
  const [activeTab, setActiveTab] = useState('text');
  const resources = osResources[topicId];

  if (!resources) return null;

  return (
    <div style={{ marginTop: '3.5rem', marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
        <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6', boxShadow: '3px 3px 7px rgba(0,0,0,0.4), -2px -2px 5px rgba(255,255,255,0.02)' }}>
          <FaCompass size={15} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f3f4f6', margin: 0, fontFamily: 'var(--font-title, inherit)' }}>Suggested Learning Resources</h3>
      </div>

      {/* Tab Switcher */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', borderBottom: '1px solid rgba(139, 92, 246, 0.12)', paddingBottom: '2px' }}>
        <button
          onClick={() => setActiveTab('text')}
          style={{
            padding: '8px 18px',
            borderRadius: '8px 8px 0 0',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'all 0.25s ease',
            background: activeTab === 'text' ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
            color: activeTab === 'text' ? '#c4b5fd' : '#9ca3af',
            border: 'none',
            borderBottom: activeTab === 'text' ? '2px solid #8b5cf6' : '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <FaBookOpen size={12} /> Text Resources
        </button>
        <button
          onClick={() => setActiveTab('video')}
          style={{
            padding: '8px 18px',
            borderRadius: '8px 8px 0 0',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'all 0.25s ease',
            background: activeTab === 'video' ? 'rgba(139, 92, 246, 0.12)' : 'transparent',
            color: activeTab === 'video' ? '#c4b5fd' : '#9ca3af',
            border: 'none',
            borderBottom: activeTab === 'video' ? '2px solid #8b5cf6' : '2px solid transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <FaYoutube size={13} /> Video Resources
        </button>
      </div>

      {/* Tab Content */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        {activeTab === 'text' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {resources.docs && resources.docs.length > 0 && (
              <div style={{ padding: '18px 20px', borderRadius: '12px', background: '#0f1525', boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.5), -3px -3px 8px rgba(255, 255, 255, 0.025)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#8b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaFileAlt /> Official Reference Manuals
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {resources.docs.map((doc, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span style={{ color: '#8b5cf6', fontSize: '0.75rem' }}>▸</span>
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#c4b5fd'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resources.blogs && resources.blogs.length > 0 && (
              <div style={{ padding: '18px 20px', borderRadius: '12px', background: '#0f1525', boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.5), -3px -3px 8px rgba(255, 255, 255, 0.025)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#8b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaBookOpen /> Articles & Learning Guides
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {resources.blogs.map((blog, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span style={{ color: '#8b5cf6', fontSize: '0.75rem' }}>▸</span>
                      <a href={blog.url} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#c4b5fd'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                        {blog.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'video' && resources.youtube && resources.youtube.length > 0 && (
          <div style={{ padding: '18px 20px', borderRadius: '12px', background: '#0f1525', boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.5), -3px -3px 8px rgba(255, 255, 255, 0.025)' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#8b5cf6', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FaYoutube /> Video Tutorials & Lectures
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {resources.youtube.map((vid, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ color: '#8b5cf6', fontSize: '0.75rem' }}>▸</span>
                  <a href={vid.url} target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#c4b5fd'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
                    {vid.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}

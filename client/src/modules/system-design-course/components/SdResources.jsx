import { useState } from 'react';
import { FaYoutube, FaFileAlt, FaBookOpen, FaCompass } from 'react-icons/fa';
import { sdResources } from '../data/sdResources';
import { motion } from 'framer-motion';

export default function SdResources({ topicId }) {
  const [activeTab, setActiveTab] = useState('text');
  const resources = sdResources[topicId];

  if (!resources) return null;

  return (
    <div className="sd-neumorphic-card" style={{ marginTop: '3.5rem', marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
        <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sd-accent)' }}>
          <FaCompass size={16} />
        </div>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0, color: 'var(--sd-text)' }}>Suggested Resources</h3>
      </div>

      {/* Tab Switcher */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', borderBottom: '1px solid var(--sd-border)', paddingBottom: '2px' }}>
        <button
          onClick={() => setActiveTab('text')}
          style={{
            padding: '8px 18px',
            borderRadius: '10px 10px 0 0',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'all 0.25s ease',
            background: activeTab === 'text' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
            color: activeTab === 'text' ? 'var(--sd-accent)' : 'var(--sd-text-muted)',
            border: 'none',
            borderBottom: activeTab === 'text' ? '3px solid var(--sd-accent)' : '3px solid transparent',
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
            borderRadius: '10px 10px 0 0',
            fontSize: '0.8rem',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'all 0.25s ease',
            background: activeTab === 'video' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
            color: activeTab === 'video' ? 'var(--sd-accent)' : 'var(--sd-text-muted)',
            border: 'none',
            borderBottom: activeTab === 'video' ? '3px solid var(--sd-accent)' : '3px solid transparent',
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {resources.docs && resources.docs.length > 0 && (
              <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--sd-surface-strong)', border: '1px solid var(--sd-border)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sd-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaFileAlt /> System References & Manuals
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {resources.docs.map((doc, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: 'var(--sd-accent)', fontSize: '0.8rem' }}>✦</span>
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sd-text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--sd-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--sd-text-muted)'}>
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resources.blogs && resources.blogs.length > 0 && (
              <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--sd-surface-strong)', border: '1px solid var(--sd-border)' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sd-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaBookOpen /> Case Studies & Architecture Guides
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {resources.blogs.map((blog, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: 'var(--sd-accent)', fontSize: '0.8rem' }}>✦</span>
                      <a href={blog.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sd-text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--sd-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--sd-text-muted)'}>
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
          <div style={{ padding: '20px', borderRadius: '14px', background: 'var(--sd-surface-strong)', border: '1px solid var(--sd-border)' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sd-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FaYoutube /> Suggested Tech Talks & Explanations
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {resources.youtube.map((vid, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--sd-accent)', fontSize: '0.8rem' }}>✦</span>
                  <a href={vid.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sd-text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--sd-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--sd-text-muted)'}>
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

import { useState } from 'react';
import { motion } from 'framer-motion';
import { nlpTopicsList } from '../data/nlpTopics';
import NlpTopicCard from '../components/NlpTopicCard';

export default function NlpTopicsPage() {
  const [search, setSearch] = useState('');

  const filtered = nlpTopicsList.filter(
    t =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="main-content" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      {/* Page Header */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', padding: '60px 24px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>✦ All Topics</p>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#f0ece4', marginBottom: 12, letterSpacing: '-0.02em' }}>NLP Topics</h1>
            <p style={{ fontSize: 15, color: '#8a9ab5', marginBottom: 32, fontWeight: 300 }}>
              {nlpTopicsList.length} topics — from fundamentals to state-of-the-art models
            </p>

            <div style={{ position: 'relative', maxWidth: 420 }}>
              <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#c9a84c', fontSize: 14 }}>⌕</span>
              <input
                type="text"
                placeholder="Search topics..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', paddingLeft: 38, paddingRight: 16, paddingTop: 11, paddingBottom: 11, borderRadius: 8, fontSize: 14, outline: 'none', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.2)', color: '#f0ece4', fontFamily: 'Inter, sans-serif' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 80px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#8a9ab5' }}>
            No topics found for "{search}"
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {filtered.map((t, i) => <NlpTopicCard key={t.id} topic={t} index={i} />)}
          </div>
        )}
      </div>
    </div>
  );
}

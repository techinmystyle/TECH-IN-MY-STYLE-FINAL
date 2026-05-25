import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { nlpTopicsList } from '../data/nlpTopics';
import NlpTopicCard from '../components/NlpTopicCard';
import PopularCourses from '../../../components/PopularCourses';
import { FaGraduationCap, FaCode, FaBrain, FaTrophy } from 'react-icons/fa';

function TypingEffect() {
  const ref = useRef(null);
  const words = ['Tokenization', 'Transformers', 'Word Embeddings', 'BERT & GPT', 'NER', 'TF-IDF'];
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = words[wi % words.length];
      if (!deleting) {
        if (ref.current) ref.current.textContent = word.slice(0, ci + 1);
        ci++;
        if (ci === word.length) { deleting = true; setTimeout(tick, 1400); return; }
      } else {
        if (ref.current) ref.current.textContent = word.slice(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; wi++; }
      }
      setTimeout(tick, deleting ? 50 : 90);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);
  return <span ref={ref} style={{ color: '#c9a84c' }} />;
}

const stats = [
  { value: '11', label: 'Core Topics' },
  { value: '50+', label: 'Code Examples' },
  { value: '100+', label: 'Interview Q&As' },
  { value: '∞', label: 'Learning Depth' },
];

const whyItems = [
  { IconComp: FaGraduationCap, title: 'Structured Mastery', desc: 'Every topic follows a proven path — intuition first, then theory, then code.' },
  { IconComp: FaCode, title: 'Production Code', desc: 'Real Python examples with NLTK, spaCy, sklearn, and HuggingFace.' },
  { IconComp: FaBrain, title: 'Deep Intuition', desc: 'Understand the "why" behind every algorithm, not just the syntax.' },
  { IconComp: FaTrophy, title: 'Interview Ready', desc: 'Curated Q&As and MCQs crafted for top-tier tech interviews.' },
];

export default function NlpHomePage() {
  const navigate = useNavigate();

  return (
    <div id="main-content" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '100px 24px 120px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, marginBottom: 32, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)', fontSize: 12, fontWeight: 600, color: '#c9a84c', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a84c', display: 'inline-block' }} />
            Premium NLP Learning Platform
          </motion.div>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 700, lineHeight: 1.1, color: '#f0ece4', marginBottom: 24, letterSpacing: '-0.03em' }}>
            NLP in{' '}
            <span style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>My Style</span>
          </h1>

          <p style={{ fontSize: 18, color: '#8a9ab5', marginBottom: 12, fontWeight: 300, lineHeight: 1.7 }}>
            Learn Natural Language Processing in the simplest and most powerful way
          </p>

          <div style={{ fontSize: 16, color: '#f0ece4', marginBottom: 48, height: 28 }}>
            Currently mastering:{' '}
            <TypingEffect />
            <span style={{ color: '#c9a84c', animation: 'nlp-blink 1s step-end infinite' }}>|</span>
          </div>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/nlp-course/topics')}
              style={{ padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, color: '#080b14', cursor: 'pointer', background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', border: 'none', letterSpacing: '0.02em', boxShadow: '0 4px 30px rgba(201,168,76,0.3)' }}>
              Explore All Topics →
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/nlp-course/topic/tokenization')}
              style={{ padding: '14px 32px', borderRadius: 8, fontWeight: 600, fontSize: 15, cursor: 'pointer', background: 'transparent', border: '1px solid rgba(201,168,76,0.35)', color: '#c9a84c', letterSpacing: '0.02em' }}>
              Start with Tokenization
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(201,168,76,0.1)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)' }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ padding: '32px 24px', textAlign: 'center', background: 'rgba(8,11,20,0.95)' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 40, fontWeight: 700, background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#8a9ab5', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: 1100, margin: '0 auto 80px', padding: '0 24px' }}>
        <div className="nlp-divider" />
      </div>

      {/* Featured Topics */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 100px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>✦ Featured Topics</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 700, color: '#f0ece4' }}>Start your journey</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {nlpTopicsList.slice(0, 6).map((t, i) => <NlpTopicCard key={t.id} topic={t} index={i} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <motion.button whileHover={{ scale: 1.03 }} onClick={() => navigate('/nlp-course/topics')}
              style={{ padding: '12px 28px', borderRadius: 8, fontSize: 13, fontWeight: 600, background: 'transparent', border: '1px solid rgba(201,168,76,0.25)', color: '#c9a84c', cursor: 'pointer', letterSpacing: '0.04em' }}>
              View all 11 topics →
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Why Learn NLP */}
      <section style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>✦ Why NLP</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 700, color: '#f0ece4' }}>Why this platform is different</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
              {whyItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ padding: '28px 24px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, marginBottom: 16, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <item.IconComp size={17} style={{ color: '#c9a84c' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 17, fontWeight: 700, color: '#f0ece4', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#8a9ab5', lineHeight: 1.7 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 24px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          style={{ borderRadius: 20, padding: '72px 48px', textAlign: 'center', background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.2)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }}>✦ Begin Today</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#f0ece4', marginBottom: 16, lineHeight: 1.2 }}>Ready to master NLP?</h2>
          <p style={{ fontSize: 16, color: '#8a9ab5', marginBottom: 40, fontWeight: 300 }}>From tokenization to transformers — learn it all, your way.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/nlp-course/topics')}
            style={{ padding: '16px 40px', borderRadius: 8, fontWeight: 700, fontSize: 15, color: '#080b14', cursor: 'pointer', background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', border: 'none', letterSpacing: '0.02em', boxShadow: '0 4px 40px rgba(201,168,76,0.35)' }}>
            Start Learning Now →
          </motion.button>
        </motion.div>
      </section>

      <PopularCourses />

      <footer style={{ textAlign: 'center', padding: '32px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: 13, color: '#4a5568' }}>
        Crafted with precision for NLP learners everywhere
      </footer>
    </div>
  );
}

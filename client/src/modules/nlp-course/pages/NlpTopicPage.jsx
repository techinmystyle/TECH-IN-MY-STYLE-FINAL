import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { nlpTopicDetails } from '../data/nlpTopicDetails';
import { nlpTopicsList } from '../data/nlpTopics';
import NlpCodeBlock from '../components/NlpCodeBlock';
import NlpAccordion from '../components/NlpAccordion';
import NlpMCQSection from '../components/NlpMCQSection';
import { NlpIcon } from '../components/NlpIcons';
import {
  FaLightbulb, FaBookOpen, FaCode, FaGlobe,
  FaQuestionCircle, FaPuzzlePiece, FaBook,
  FaChevronLeft, FaChevronRight, FaYoutube, FaFileAlt,
} from 'react-icons/fa';

const NlpSectionLabel = ({ IconComp, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
    <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconComp size={16} style={{ color: '#c9a84c' }} />
    </div>
    <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, color: '#f0ece4' }}>{label}</h2>
  </div>
);

const NlpSection = ({ children, delay = 0 }) => (
  <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} style={{ marginBottom: 72 }}>
    {children}
  </motion.section>
);

const NlpComingSoon = ({ topic }) => {
  const navigate = useNavigate();
  const meta = nlpTopicsList.find(t => t.id === topic);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px', paddingTop: 68 }}>
      <div style={{ width: 72, height: 72, borderRadius: 20, marginBottom: 24, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <NlpIcon name={meta?.iconKey || 'book'} size={28} style={{ color: '#c9a84c' }} />
      </div>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 700, color: '#f0ece4', marginBottom: 12 }}>{meta?.title}</h1>
      <p style={{ fontSize: 15, color: '#8a9ab5', marginBottom: 36, maxWidth: 400, lineHeight: 1.7 }}>
        This topic is being crafted with the same depth and care as Tokenization. Check back soon.
      </p>
      <motion.button whileHover={{ scale: 1.04 }} onClick={() => navigate('/nlp-course/topics')}
        style={{ padding: '12px 28px', borderRadius: 8, fontWeight: 600, fontSize: 14, background: 'linear-gradient(135deg,#c9a84c,#e8c97a)', color: '#080b14', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
        <FaChevronLeft size={12} /> Back to Topics
      </motion.button>
    </div>
  );
};

export default function NlpTopicPage() {
  const { topic } = useParams();
  const navigate = useNavigate();
  const data = nlpTopicDetails[topic];
  const [activeCode, setActiveCode] = useState(0);
  const [activeResourceTab, setActiveResourceTab] = useState('text');

  if (!data) return <NlpComingSoon topic={topic} />;

  const topicIndex = nlpTopicsList.findIndex(t => t.id === topic);
  const prev = nlpTopicsList[topicIndex - 1];
  const next = nlpTopicsList[topicIndex + 1];

  return (
    <div style={{ minHeight: '100vh', paddingTop: 68, position: 'relative', zIndex: 1 }}>

      {/* Hero */}
      <div style={{ position: 'relative', padding: '64px 24px 56px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ position: 'relative', zIndex: 1 }}>
          <button onClick={() => navigate('/nlp-course/topics')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#8a9ab5', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: '6px 14px', cursor: 'pointer', marginBottom: 28, letterSpacing: '0.04em' }}>
            <FaChevronLeft size={10} /> All Topics
          </button>

          <div style={{ width: 72, height: 72, borderRadius: 20, margin: '0 auto 20px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <NlpIcon name={nlpTopicsList.find(t => t.id === topic)?.iconKey || 'book'} size={28} style={{ color: '#c9a84c' }} />
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: '#f0ece4', marginBottom: 12, letterSpacing: '-0.02em' }}>{data.title}</h1>
          <p style={{ fontSize: 16, color: '#8a9ab5', maxWidth: 520, margin: '0 auto', fontWeight: 300, lineHeight: 1.7 }}>
            {nlpTopicsList.find(t => t.id === topic)?.description}
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 24px 40px' }}>

        {/* 1. Thinking */}
        <NlpSection>
          <NlpSectionLabel IconComp={FaLightbulb} label="The Thinking Behind It" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            <div style={{ padding: '28px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Intuition</p>
              <p style={{ fontSize: 14, color: '#8a9ab5', lineHeight: 1.8 }}>{data.thinking.intuition}</p>
            </div>
            <div style={{ padding: '28px', borderRadius: 14, background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.18)' }}>
              <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Real-Life Analogy</p>
              <p style={{ fontSize: 14, color: '#8a9ab5', lineHeight: 1.8 }}>{data.thinking.analogy}</p>
            </div>
          </div>
        </NlpSection>

        <div className="nlp-divider" style={{ marginBottom: 72 }} />

        {/* 2. Description */}
        <NlpSection>
          <NlpSectionLabel IconComp={FaBookOpen} label="Description" />
          <div style={{ padding: '28px', borderRadius: 14, marginBottom: 16, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <p style={{ fontSize: 14, color: '#d4cfc7', lineHeight: 1.85, marginBottom: 20 }}>{data.description.text}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {data.description.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 13, color: '#8a9ab5', lineHeight: 1.6 }}>
                  <span style={{ color: '#c9a84c', marginTop: 3, flexShrink: 0 }}>✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ padding: '20px 24px', borderRadius: 12, background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>◈</span>
            <p style={{ fontSize: 13, color: '#c9a84c', lineHeight: 1.75 }}>{data.description.insight}</p>
          </div>
        </NlpSection>

        <div className="nlp-divider" style={{ marginBottom: 72 }} />

        {/* 3. Code */}
        <NlpSection>
          <NlpSectionLabel IconComp={FaCode} label="Code Examples" />
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            {data.code.map((c, i) => (
              <button key={i} onClick={() => setActiveCode(i)}
                style={{ padding: '8px 16px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', letterSpacing: '0.03em', transition: 'all 0.2s', background: activeCode === i ? 'linear-gradient(135deg,#c9a84c,#e8c97a)' : 'rgba(255,255,255,0.04)', color: activeCode === i ? '#080b14' : '#8a9ab5', border: activeCode === i ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
                {c.label}
              </button>
            ))}
          </div>
          <NlpCodeBlock code={data.code[activeCode].code} label={data.code[activeCode].label} />
        </NlpSection>

        <div className="nlp-divider" style={{ marginBottom: 72 }} />

        {/* 4. Applications */}
        <NlpSection>
          <NlpSectionLabel IconComp={FaGlobe} label="Real-World Applications" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {data.applications.map((app, i) => (
              <motion.div key={i} whileHover={{ y: -4 }}
                style={{ padding: '22px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                <div style={{ width: 38, height: 38, borderRadius: 10, marginBottom: 14, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <NlpIcon name={app.icon} size={15} style={{ color: '#c9a84c' }} />
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 700, color: '#f0ece4', marginBottom: 6 }}>{app.title}</h3>
                <p style={{ fontSize: 12, color: '#8a9ab5', lineHeight: 1.65 }}>{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </NlpSection>

        <div className="nlp-divider" style={{ marginBottom: 72 }} />

        {/* 5. Interview */}
        <NlpSection>
          <NlpSectionLabel IconComp={FaQuestionCircle} label="Interview Questions" />
          <NlpAccordion items={data.interview} />
        </NlpSection>

        <div className="nlp-divider" style={{ marginBottom: 72 }} />

        {/* 6. MCQs */}
        <NlpSection>
          <NlpSectionLabel IconComp={FaPuzzlePiece} label="MCQ Practice" />
          <NlpMCQSection mcqs={data.mcqs} />
        </NlpSection>

        <div className="nlp-divider" style={{ marginBottom: 72 }} />

        {/* 7. Resources */}
        <NlpSection>
          <NlpSectionLabel IconComp={FaBook} label="Resources" />

          {/* Tab Switcher */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
            {[
              { id: 'text', label: 'Text Resources', icon: FaFileAlt },
              { id: 'video', label: 'Video Resources', icon: FaYoutube }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveResourceTab(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.03em',
                  transition: 'all 0.2s',
                  background: activeResourceTab === tab.id ? 'linear-gradient(135deg,#c9a84c,#e8c97a)' : 'rgba(255,255,255,0.04)',
                  color: activeResourceTab === tab.id ? '#080b14' : '#8a9ab5',
                  border: activeResourceTab === tab.id ? 'none' : '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <tab.icon size={11} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
            {activeResourceTab === 'text' && [
              { label: 'Documentation', IconComp: FaFileAlt, items: data.resources?.docs },
              { label: 'Articles & Books', IconComp: FaBook, items: data.resources?.books },
            ].map(({ label, IconComp, items }) =>
              items && items.length > 0 && (
                <div key={label} style={{ padding: '24px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconComp size={12} /> {label}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ listStyle: 'none' }}>
                        <a href={item.url} target="_blank" rel="noreferrer"
                          style={{ fontSize: 13, color: '#8a9ab5', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s' }}
                          onMouseEnter={e => e.target.style.color = '#c9a84c'}
                          onMouseLeave={e => e.target.style.color = '#8a9ab5'}>
                          → {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}

            {activeResourceTab === 'video' && [
              { label: 'Video Tutorials', IconComp: FaYoutube, items: data.resources?.videos },
            ].map(({ label, IconComp, items }) =>
              items && items.length > 0 && (
                <div key={label} style={{ padding: '24px', borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: 11, color: '#c9a84c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IconComp size={12} /> {label}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ listStyle: 'none' }}>
                        <a href={item.url} target="_blank" rel="noreferrer"
                          style={{ fontSize: 13, color: '#8a9ab5', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s' }}
                          onMouseEnter={e => e.target.style.color = '#c9a84c'}
                          onMouseLeave={e => e.target.style.color = '#8a9ab5'}>
                          → {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </NlpSection>

        {/* Prev / Next */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, paddingBottom: 80 }}>
          {prev ? (
            <motion.button whileHover={{ x: -4 }} onClick={() => navigate(`/nlp-course/topic/${prev.id}`)}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#8a9ab5', cursor: 'pointer' }}>
              <FaChevronLeft size={11} /> {prev.title}
            </motion.button>
          ) : <div />}
          {next && (
            <motion.button whileHover={{ x: 4 }} onClick={() => navigate(`/nlp-course/topic/${next.id}`)}
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#8a9ab5', cursor: 'pointer' }}>
              {next.title} <FaChevronRight size={11} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}

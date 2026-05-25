import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useProgress } from '../hooks/useProgress';
import { courseModules } from '../data/courseData';
import DbFooter from '../components/DbFooter';

export default function DbBookmarks() {
  const { getBookmarks, toggleBookmark } = useProgress();
  const bookmarks = getBookmarks();

  const allTopics = courseModules.flatMap(m => m.topics.map(t => ({ ...t, module: m.label, color: m.color })));
  const bookmarked = allTopics.filter(t => bookmarks.includes(t.id));

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '3rem 2rem' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2rem' }}>
        <div className="font-orbitron" style={{ fontSize: '0.6rem', color: '#607d8b', letterSpacing: '0.2em', marginBottom: '0.4rem' }}>◈ SAVED INTEL</div>
        <h1 className="font-orbitron glow-cyan" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>BOOKMARKS</h1>
      </motion.div>

      {bookmarked.length === 0 ? (
        <div className="hud-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '2.5rem', color: '#607d8b', marginBottom: '1rem', opacity: 0.4 }} />
          <div className="font-orbitron" style={{ fontSize: '0.7rem', color: '#607d8b', marginBottom: '0.5rem' }}>NO BOOKMARKS YET</div>
          <p style={{ color: '#607d8b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Bookmark topics from the topic page to save them here.</p>
          <Link to="/database-course/modules" style={{ textDecoration: 'none' }}>
            <button className="btn-hud" style={{ padding: '0.5rem 1.5rem', fontSize: '0.65rem' }}>BROWSE MODULES</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="font-orbitron" style={{ fontSize: '0.6rem', color: '#607d8b', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            {bookmarked.length} SAVED TOPIC{bookmarked.length !== 1 ? 'S' : ''}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {bookmarked.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className="hud-panel" style={{ padding: '0.9rem 1.2rem', borderColor: `${t.color}22`, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FontAwesomeIcon icon={faBookmark} style={{ color: '#ff9f1c', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#e0f7fa' }}>{t.title}</div>
                  <div className="font-orbitron" style={{ fontSize: '0.55rem', color: t.color, marginTop: '0.15rem' }}>{t.module}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link to={`/database-course/topic/${t.id}`} style={{ textDecoration: 'none' }}>
                    <button className="btn-hud" style={{ padding: '0.3rem 0.7rem', fontSize: '0.6rem' }}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </Link>
                  <button onClick={() => toggleBookmark(t.id)} className="btn-hud" style={{ padding: '0.3rem 0.7rem', fontSize: '0.6rem', borderColor: 'rgba(255,68,68,0.3)', color: '#ff4444' }}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
      <DbFooter />
    </div>
  );
}

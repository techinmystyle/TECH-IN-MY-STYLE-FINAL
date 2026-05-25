import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faDatabase, faTerminal, faLeaf, faTachometerAlt,
  faBook, faCheckCircle, faAward, faChartLine, faSearch
} from '@fortawesome/free-solid-svg-icons';
import { courseModules } from '../data/courseData';
import { useProgress } from '../hooks/useProgress';
import DbRadarWidget from '../components/DbRadarWidget';
import DbHUDCard from '../components/DbHUDCard';
import PopularCourses from '../../../components/PopularCourses';
import DbFooter from '../components/DbFooter';

export default function DbHome() {
  const { getCompletedCount } = useProgress();
  const completed = getCompletedCount();
  const totalTopics = courseModules.reduce((sum, m) => sum + m.topics.length, 0);
  const completionPercent = Math.round((completed / totalTopics) * 100);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* ════════════════════════════════════════════════════════════════
          HERO SECTION
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', padding: '4rem 2rem', minHeight: 'min(90vh, 900px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Background accent */}
        <div style={{
          position: 'absolute', top: -100, right: -100, width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.2rem',
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.3)',
              borderRadius: 4,
              marginBottom: '1.5rem',
              fontSize: '0.75rem',
              fontFamily: 'Share Tech Mono, monospace',
              color: '#00d4ff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            ◆ TACTICAL DATA INTELLIGENCE PLATFORM ◆
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            DATABASES IN MY
            <br />
            <span style={{ background: 'linear-gradient(90deg, #e8002d, #76b900, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              STYLE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: 1.7,
            }}
          >
            Master SQL and MongoDB like a tactical operator. Command real queries, visualize data flows,
            <br />
            and unlock the secrets of database design in a premium gaming-grade learning environment.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <Link to="/database-course/modules" style={{ textDecoration: 'none' }}>
              <button className="btn-p5" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                <FontAwesomeIcon icon={faBook} style={{ marginRight: '0.5rem' }} />
                START MISSION
              </button>
            </Link>
            <Link to="/database-course/editor" style={{ textDecoration: 'none' }}>
              <button className="btn-hud" style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}>
                <FontAwesomeIcon icon={faTerminal} style={{ marginRight: '0.5rem' }} />
                OPEN TERMINAL
              </button>
            </Link>
          </motion.div>

          {/* System Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hud-panel"
            style={{
              padding: '1.5rem',
              maxWidth: 600,
              margin: '0 auto',
              borderColor: 'rgba(0,212,255,0.2)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', textAlign: 'center' }}>
              {/* Mission Progress */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FontAwesomeIcon icon={faChartLine} style={{ color: '#00d4ff', fontSize: '0.9rem' }} />
                  <span className="font-orbitron" style={{ fontSize: '0.65rem', color: '#00d4ff', letterSpacing: '0.08em' }}>PROGRESS</span>
                </div>
                <div style={{
                  width: 60,
                  height: 60,
                  margin: '0 auto',
                  borderRadius: '50%',
                  border: '3px solid #00d4ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,212,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: `conic-gradient(#00d4ff ${completionPercent}%, transparent ${completionPercent}%)`,
                  }} />
                  <div style={{
                    position: 'relative',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#00d4ff',
                  }}>
                    {completionPercent}%
                  </div>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#607d8b', marginTop: '0.5rem' }}>
                  {completed}/{totalTopics} topics
                </div>
              </div>

              {/* System Efficiency */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FontAwesomeIcon icon={faTachometerAlt} style={{ color: '#39ff14', fontSize: '0.9rem' }} />
                  <span className="font-orbitron" style={{ fontSize: '0.65rem', color: '#39ff14', letterSpacing: '0.08em' }}>EFFICIENCY</span>
                </div>
                <DbRadarWidget size={80} />
                <div style={{ fontSize: '0.7rem', color: '#607d8b', marginTop: '0.3rem' }}>OPTIMIZED</div>
              </div>

              {/* Level Unlocked */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <FontAwesomeIcon icon={faAward} style={{ color: '#ff9f1c', fontSize: '0.9rem' }} />
                  <span className="font-orbitron" style={{ fontSize: '0.65rem', color: '#ff9f1c', letterSpacing: '0.08em' }}>TIER</span>
                </div>
                <div style={{
                  fontSize: '2.2rem',
                  fontWeight: 900,
                  color: '#ff9f1c',
                  fontFamily: 'Barlow Condensed, sans-serif',
                }}>
                  {completionPercent < 25 ? 1 : completionPercent < 50 ? 2 : completionPercent < 75 ? 3 : 4}
                </div>
                <div style={{ fontSize: '0.7rem', color: '#607d8b', marginTop: '0.3rem' }}>
                  {completionPercent < 25 ? 'RECRUIT' : completionPercent < 50 ? 'OPERATOR' : completionPercent < 75 ? 'ELITE' : 'COMMANDER'}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          MODULE CARDS SECTION
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '3rem 2rem', maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <p className="section-label">COMMAND SYSTEMS</p>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 900,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            Data System <span style={{ color: 'var(--rog-green)' }}>Modules</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Navigate through 4 mission tiers—from Beginner foundations to Advanced+ mastery.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {courseModules.map((mod, i) => (
            <DbHUDCard
              key={mod.id}
              title={mod.label}
              subtitle={`${mod.topics.length} topics • Unlock advanced features`}
              icon={faDatabase}
              to={`/database-course/modules#${mod.id}`}
              color={mod.color}
              index={i}
              badge={`${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURES SECTION
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '3rem 2rem', background: 'rgba(0,212,255,0.02)', borderTop: '1px solid rgba(0,212,255,0.1)', borderBottom: '1px solid rgba(0,212,255,0.1)', marginTop: '3rem' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '2rem', textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}>
              Core <span style={{ color: 'var(--p5-red)' }}>Features</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: faTerminal, title: 'SQL Command Center', desc: 'Real query execution with sql.js, syntax highlighting, auto-suggestions' },
              { icon: faLeaf, title: 'MongoDB Control', desc: 'JSON-based simulation, CRUD operations, aggregation pipeline visualization' },
              { icon: faChartLine, title: 'Query Visualizer', desc: 'Step-based execution, playback controls, data highlighting per operation' },
              { icon: faBook, title: '50+ Interview Q&A', desc: '5 categories covering fundamentals, advanced SQL, MongoDB, concepts, performance' },
              { icon: faSearch, title: 'Full-Text Search', desc: 'Instant module discovery with keyword matching across all topics' },
              { icon: faCheckCircle, title: 'Progress Tracking', desc: 'localStorage-based persistence—bookmark topics, track completion, resume learning' },
            ].map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="phantom-card"
                style={{
                  padding: '1.5rem',
                  borderRadius: 8,
                  border: '1px solid rgba(118,185,0,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 4,
                    background: 'rgba(118,185,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--rog-green)',
                    flexShrink: 0,
                  }}>
                    <FontAwesomeIcon icon={feat.icon} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                       {feat.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA SECTION
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 800, margin: '0 auto' }}
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 900,
            letterSpacing: '0.02em',
            marginBottom: '1rem',
          }}>
            Ready to Command the Data?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Join operators worldwide mastering database systems. Execute queries, visualize data flows, ace interviews.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/database-course/modules" style={{ textDecoration: 'none' }}>
              <button className="btn-p5" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                EXPLORE MODULES
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '0.5rem' }} />
              </button>
            </Link>
            <Link to="/database-course/editor" style={{ textDecoration: 'none' }}>
              <button className="btn-rog" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
                LAUNCH TERMINAL
                <FontAwesomeIcon icon={faTerminal} style={{ marginLeft: '0.5rem' }} />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <PopularCourses />
      <DbFooter />
    </div>
  );
}

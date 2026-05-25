import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const links = [
  { to: '/database-course',              label: 'Home' },
  { to: '/database-course/modules',      label: 'Modules' },
  { to: '/database-course/editor',       label: 'Terminal' },
  { to: '/database-course/visualizer',   label: 'Visualizer' },
  { to: '/database-course/interview',    label: 'Interview' },
];

const BACK_TO_COURSES = '/courses';

export default function DbNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 58 }}>

        {/* Logo — P5 style with ROG green accent */}
        <Link to="/database-course" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Icon — red diamond cut */}
          <div style={{
            width: 36, height: 36,
            background: 'var(--p5-red)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
            boxShadow: '0 0 14px rgba(232,0,45,0.6)',
          }}>
            <FontAwesomeIcon icon={faDatabase} style={{ color: '#fff', fontSize: '0.9rem' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              <span style={{ color: '#fff' }}>DB</span>
              <span style={{ color: 'var(--p5-red)' }}>.</span>
              <span style={{ color: 'var(--rog-green)' }}>STYLE</span>
            </div>
            <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.48rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              PHANTOM OPERATOR v2.0
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          {links.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link key={l.to} to={l.to} style={{ textDecoration: 'none' }}>
                <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.96 }}
                  style={{
                    padding: '0.45rem 1rem',
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: '0.82rem', fontWeight: 700, fontStyle: active ? 'italic' : 'normal',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: active ? 'var(--p5-red)' : 'var(--text-secondary)',
                    background: active ? 'rgba(232,0,45,0.08)' : 'transparent',
                    borderBottom: active ? '2px solid var(--p5-red)' : '2px solid transparent',
                    transition: 'all 0.15s',
                    position: 'relative',
                  }}>
                  {active && (
                    <motion.div layoutId="db-nav-active"
                      style={{ position: 'absolute', bottom: -1, left: 0, right: 0, height: 2, background: 'var(--p5-red)', boxShadow: '0 0 8px rgba(232,0,45,0.8)' }} />
                  )}
                  {l.label}
                </motion.div>
              </Link>
            );
          })}
          <Link to={BACK_TO_COURSES} style={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.96 }}
              style={{
                padding: '0.3rem 0.85rem',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '0.78rem', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--rog-green)',
                border: '1.5px solid var(--rog-green)',
                borderRadius: '20px',
                transition: 'all 0.15s',
                marginLeft: '0.5rem',
              }}>
              ← Courses
            </motion.div>
          </Link>
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
          {[
            { to: '/database-course/search', icon: faSearch },
          ].map(({ to, icon }) => (
            <Link key={to} to={to}>
              <motion.div whileHover={{ scale: 1.1, color: 'var(--p5-red)' }} whileTap={{ scale: 0.9 }}
                style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-dim)', background: 'var(--bg-2)', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.15s', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                <FontAwesomeIcon icon={icon} style={{ fontSize: '0.8rem' }} />
              </motion.div>
            </Link>
          ))}
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMenuOpen(!menuOpen)}
            className="hide-desktop"
            style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-red-dim)', background: menuOpen ? 'rgba(232,0,45,0.1)' : 'var(--bg-2)', color: menuOpen ? 'var(--p5-red)' : 'var(--text-secondary)', cursor: 'pointer', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} style={{ fontSize: '0.85rem' }} />
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border-red-dim)', background: 'rgba(8,8,8,0.99)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(232,0,45,0.03) 12px, rgba(232,0,45,0.03) 13px)', pointerEvents: 'none' }} />
            <div style={{ padding: '0.5rem 1.5rem 1rem', position: 'relative' }}>
              {links.map((l, i) => {
                const active = location.pathname === l.to;
                return (
                  <motion.div key={l.to} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <Link to={l.to} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
                      <div style={{
                        padding: '0.65rem 0.75rem', marginBottom: '0.2rem',
                        fontFamily: 'Barlow Condensed, sans-serif', fontSize: '0.95rem',
                        fontWeight: 800, fontStyle: active ? 'italic' : 'normal',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: active ? 'var(--p5-red)' : 'var(--text-secondary)',
                        borderLeft: active ? '3px solid var(--p5-red)' : '3px solid transparent',
                        background: active ? 'rgba(232,0,45,0.06)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}>
                        {l.label}
                        {active && <span style={{ color: 'var(--rog-green)', fontSize: '0.7rem' }}>▶</span>}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoSearch, IoMenu } from 'react-icons/io5';
const GiRobberMask = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', display: 'inline-block', ...style }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm1 14h-2v-1h2v1zm1.07-7.75l-.9.92C12.45 9.9 12 10.5 12 12h-2c0-1.5.45-2.1 1.17-2.83l.9-.92c.36-.36.59-.86.59-1.41C12.66 5.8 11.86 5 10.92 5c-.93 0-1.74.8-1.74 1.74H7.44C7.44 4.68 9.03 3 10.92 3c1.89 0 3.48 1.68 3.48 3.74 0 .82-.34 1.57-.83 2.09l-.5.42z"/>
  </svg>
);
import { topicsData } from '../data/dsaTopics';

export default function DsaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/dsa-course', label: 'Home' },
    { to: '/dsa-course/topics', label: 'All Topics' },
    { to: '/dsa-course/topic/arrays', label: 'Arrays' },
    { to: '/dsa-course/topic/linked-list', label: 'Linked Lists' },
    { to: '/dsa-course/topic/trees', label: 'Trees' },
  ];

  const results = query.length > 1
    ? Object.values(topicsData).filter(t => t.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(6,4,8,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(232,0,28,0.15)' }}>
      <div style={{ height: 2, background: 'linear-gradient(to right, transparent, #e8001c, #c9a96e, #e8001c, transparent)' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        {/* Logo */}
        <Link to="/dsa-course" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8e0d0', fontSize: '1.1rem', letterSpacing: '0.12em' }}>
            DSA <span style={{ color: '#e8001c' }}>IN MY</span> STYLE
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(l => {
            const active = location.pathname === l.to;
            return (
              <Link key={l.to} to={l.to} style={{ textDecoration: 'none', color: active ? '#e8001c' : '#6a6070', fontSize: '0.78rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', padding: '0.4rem 0.75rem', borderRadius: 3, background: active ? 'rgba(232,0,28,0.08)' : 'transparent', border: active ? '1px solid rgba(232,0,28,0.25)' : '1px solid transparent', transition: 'all 0.2s' }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = '#c9a96e'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; }}}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = '#6a6070'; e.currentTarget.style.borderColor = 'transparent'; }}}>
                {l.label}
              </Link>
            );
          })}
          <Link to="/courses" style={{ textDecoration: 'none', color: '#c9a96e', fontSize: '0.72rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', padding: '0.35rem 0.75rem', borderRadius: 20, border: '1.5px solid rgba(201,169,110,0.5)', transition: 'all 0.2s', marginLeft: '0.25rem' }}>
            ← Courses
          </Link>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={() => { setSearchOpen(s => !s); setQuery(''); }}
            style={{ background: searchOpen ? 'rgba(232,0,28,0.1)' : 'none', border: searchOpen ? '1px solid rgba(232,0,28,0.3)' : '1px solid transparent', borderRadius: 3, color: searchOpen ? '#e8001c' : '#6a6070', cursor: 'pointer', padding: '0.35rem 0.5rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center' }}>
            <IoSearch style={{ fontSize: '1.1rem' }} />
          </button>

          <button onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', color: '#6a6070', cursor: 'pointer', display: 'none', padding: '0.35rem 0.5rem', alignItems: 'center' }} className="menu-btn">
            {menuOpen ? <IoClose style={{ fontSize: '1.2rem' }} /> : <IoMenu style={{ fontSize: '1.2rem' }} />}
          </button>
        </div>
      </div>

      {/* Search dropdown */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ borderTop: '1px solid rgba(232,0,28,0.1)', background: 'rgba(6,4,8,0.98)', padding: '0.75rem 1.5rem' }}>
            <div style={{ maxWidth: 500, position: 'relative' }}>
              <input value={query} onChange={e => setQuery(e.target.value)} autoFocus
                placeholder="Search topics — Arrays, Trees, DP..."
                style={{ width: '100%', background: 'rgba(232,0,28,0.05)', border: '1px solid rgba(232,0,28,0.2)', borderRadius: 3, padding: '0.6rem 1rem', color: '#e8e0d0', fontSize: '0.9rem', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              {results.length > 0 && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#0a0810', border: '1px solid rgba(232,0,28,0.2)', borderRadius: '0 0 6px 6px', zIndex: 200 }}>
                  {results.map(t => (
                    <button key={t.id} onClick={() => { navigate(`/dsa-course/topic/${t.id}`); setSearchOpen(false); setQuery(''); }}
                      style={{ width: '100%', background: 'none', border: 'none', padding: '0.6rem 1rem', color: '#e8e0d0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left', transition: 'background 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(232,0,28,0.06)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                      <span>{t.icon}</span>
                      <span style={{ fontSize: '0.85rem' }}>{t.name}</span>
                      <span style={{ marginLeft: 'auto', color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{t.level}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ borderTop: '1px solid rgba(232,0,28,0.1)', background: 'rgba(6,4,8,0.98)' }}>
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '0.85rem 1.5rem', color: location.pathname === l.to ? '#e8001c' : '#6a6070', textDecoration: 'none', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', fontSize: '0.9rem', borderLeft: location.pathname === l.to ? '3px solid #e8001c' : '3px solid transparent', transition: 'all 0.2s' }}>
                {l.label}
              </Link>
            ))}
            <Link to="/courses" onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.85rem 1.5rem', color: '#c9a96e', textDecoration: 'none', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', fontSize: '0.9rem', borderLeft: '3px solid rgba(201,169,110,0.4)', transition: 'all 0.2s' }}>
              ← Back to Courses
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

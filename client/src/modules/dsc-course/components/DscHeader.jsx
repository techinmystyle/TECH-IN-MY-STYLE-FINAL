import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function DscHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="dsc-header">
      <div className="dsc-logo">
        <h1>Data Science in my style</h1>
      </div>
      <nav className={`dsc-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/dsc-course" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/dsc-course/topics" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Topics</NavLink></li>
          <li><NavLink to="/dsc-course/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>← Back</NavLink></li>
        </ul>
      </nav>
      <button
        className="dsc-mobile-menu-btn"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: 'rotate(-45deg) translate(7px, -7px)' } : {}} />
      </button>
    </header>
  );
}

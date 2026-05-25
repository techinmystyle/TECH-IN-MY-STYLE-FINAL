import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import OsFooter from './OsFooter';
import './OsLayout.css';

const modules = [
  { path: '/os-course/overview', label: 'Course Overview', icon: '01' },
  { path: '/os-course/introduction', label: 'Introduction to OS', icon: '02' },
  { path: '/os-course/process-management', label: 'Process Management', icon: '03' },
  { path: '/os-course/threads', label: 'Threads & Concurrency', icon: '04' },
  { path: '/os-course/memory', label: 'Memory Management', icon: '05' },
  { path: '/os-course/file-systems', label: 'File Systems', icon: '06' },
  { path: '/os-course/io-systems', label: 'I/O Systems', icon: '07' },
  { path: '/os-course/security', label: 'Security & Protection', icon: '08' },
  { path: '/os-course/real-world', label: 'Real-World Apps', icon: '09' },
  { path: '/os-course/interview-prep', label: 'Interview Prep', icon: '10' },
  { path: '/os-course/projects', label: 'Projects & Hands-On', icon: '11' },
];

export default function OsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
          <span />
          <span />
          <span />
        </button>
        <div className="topbar-brand">
          <div className="topbar-logo">OS</div>
          <span className="topbar-text">
            <span className="topbar-text-bold">Kernel</span> Lab
          </span>
        </div>
        <div className="topbar-actions">
          <span className="topbar-pill">
            <span className="topbar-pill-dot" />
            10 Modules
          </span>
          <NavLink to="/courses" className="topbar-back-btn">
            ← Courses
          </NavLink>
        </div>
      </header>

      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo-text">Kernel Modules</span>
        </div>
        <nav className="sidebar-nav">
          {modules.map((mod, i) => (
            <NavLink
              key={mod.path}
              to={mod.path}
              end={mod.path === '/os-course/overview'}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sidebar-link-icon">{mod.icon}</span>
              <span className="sidebar-link-label">{mod.label}</span>
              {i > 0 && <span className="sidebar-link-num">{String(i).padStart(2, '0')}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="sidebar-footer-version">v3.0</span>
          <span className="sidebar-footer-copy">2024</span>
        </div>
      </aside>

      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <main className="main-content" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - var(--topbar-height))', paddingBottom: 0 }}>
        <div style={{ flex: 1, padding: '0 0 clamp(1.25rem, 4vw, 3rem) 0' }}>
          <Outlet />
        </div>
        <OsFooter />
      </main>
    </div>
  );
}

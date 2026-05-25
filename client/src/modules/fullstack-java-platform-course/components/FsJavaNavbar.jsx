import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './FsJavaNavbar.css'

/* ─── Nav links ──────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'HOME',    to: '/fullstack-java-platform-course',          icon: 'bi bi-house-door-fill',  pageKey: 'home'    },
  { label: 'PHASES',  to: '/fullstack-java-platform-course/phases',   icon: 'bi bi-layers-fill',      pageKey: 'phases'  },
  { label: 'API LAB', to: '/fullstack-java-platform-course/api-lab',  icon: 'bi bi-terminal-fill',    pageKey: 'api-lab' },
]

const BACK_LINK = { label: '← BACK', to: '/courses', icon: 'bi bi-arrow-left-circle-fill' }

/* ─── Active page key ────────────────────────────────────────────────── */
function getPageKey(pathname) {
  if (pathname === '/fullstack-java-platform-course' || pathname === '/fullstack-java-platform-course/') return 'home'
  if (pathname.startsWith('/fullstack-java-platform-course/phases')) return 'phases'
  if (pathname.startsWith('/fullstack-java-platform-course/phase'))  return 'phases'
  if (pathname.startsWith('/fullstack-java-platform-course/api-lab')) return 'api-lab'
  return ''
}

/* ─── FsJava Navbar ─────────────────────────────────────────────────── */
export default function FsJavaNavbar() {
  const location  = useLocation()
  const activeKey = getPageKey(location.pathname)

  const [menuOpen,       setMenuOpen]       = useState(false)
  const [scrolled,       setScrolled]       = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const drawerRef    = useRef(null)
  const hamburgerRef = useRef(null)

  /* ── Scroll: progress + shadow ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setScrolled(scrollTop > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Close on route change ── */
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Escape closes drawer ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  /* ── Focus first item when drawer opens ── */
  useEffect(() => {
    if (menuOpen && drawerRef.current) {
      const el = drawerRef.current.querySelector('a[href], button:not([disabled])')
      el?.focus()
    }
  }, [menuOpen])

  const closeMenu  = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])

  return (
    <>
      {/* ── Skip link ── */}
      <a href="#main-content" className="fsjava-navbar__skip">Skip to content</a>

      {/* ── Navbar ── */}
      <header
        className={`fsjava-navbar${scrolled ? ' fsjava-navbar--scrolled' : ''}`}
        role="banner"
      >
        {/* Animated top accent line */}
        <div className="fsjava-navbar__accent" aria-hidden="true" />

        {/* Scroll progress bar */}
        <div
          className="fsjava-navbar__progress"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />

        <div className="fsjava-navbar__inner">

          {/* ── Logo ── */}
          <Link
            to="/fullstack-java-platform-course"
            className="fsjava-navbar__logo"
            aria-label="Full Stack Java In My Style — Home"
            onClick={closeMenu}
          >
            <span className="fsjava-navbar__logo-icon" aria-hidden="true">
              <i className="bi bi-cup-hot-fill" />
            </span>
            <span className="fsjava-navbar__logo-text">
              <span className="fsjava-navbar__logo-top">FULL STACK</span>
              <span className="fsjava-navbar__logo-bottom">JAVA IN MY STYLE</span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Main navigation">
            <ul className="fsjava-navbar__nav" role="list">
              {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
                <li key={pageKey}>
                  <Link
                    to={to}
                    className={`fsjava-navbar__nav-link${activeKey === pageKey ? ' active' : ''}`}
                    aria-current={activeKey === pageKey ? 'page' : undefined}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to={BACK_LINK.to} className="fsjava-navbar__nav-link fsjava-navbar__back-link">
                  <i className={BACK_LINK.icon} aria-hidden="true" />
                  <span>{BACK_LINK.label}</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Hamburger ── */}
          <div className="fsjava-navbar__controls">
            <button
              ref={hamburgerRef}
              className={`fsjava-navbar__hamburger${menuOpen ? ' fsjava-navbar__hamburger--open' : ''}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="fsjava-mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              type="button"
            >
              <i className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'} aria-hidden="true" />
            </button>
          </div>

        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={`fsjava-navbar__overlay${menuOpen ? ' fsjava-navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <aside
        id="fsjava-mobile-menu"
        ref={drawerRef}
        className={`fsjava-navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div className="fsjava-navbar__mobile-header">
          <Link
            to="/fullstack-java-platform-course"
            className="fsjava-navbar__logo fsjava-navbar__logo--mobile"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="fsjava-navbar__logo-icon" aria-hidden="true">
              <i className="bi bi-cup-hot-fill" />
            </span>
            <span className="fsjava-navbar__logo-top" style={{ fontSize: '0.7rem' }}>FULL STACK JAVA</span>
          </Link>
          <button
            className="fsjava-navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            type="button"
            tabIndex={menuOpen ? 0 : -1}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="fsjava-navbar__mobile-nav" aria-label="Mobile navigation links">
          <ul role="list">
            {NAV_LINKS.map(({ label, to, icon, pageKey }) => {
              const isActive = activeKey === pageKey
              return (
                <li key={pageKey}>
                  <Link
                    to={to}
                    className={`fsjava-navbar__mobile-link${isActive ? ' fsjava-navbar__mobile-link--active' : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                    {isActive && <i className="bi bi-check-circle-fill fsjava-navbar__active-check" aria-hidden="true" />}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                to={BACK_LINK.to}
                className="fsjava-navbar__mobile-link fsjava-navbar__mobile-back"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <i className={BACK_LINK.icon} aria-hidden="true" />
                <span>{BACK_LINK.label}</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social icons */}
        <div className="fsjava-navbar__mobile-socials">
          <p className="fsjava-navbar__mobile-socials-label">Follow Us</p>
          <div className="fsjava-navbar__mobile-socials-row">
            <a href="https://www.instagram.com/techinmystyle" target="_blank" rel="noopener noreferrer"
              className="fsjava-navbar__social-btn fsjava-navbar__social-btn--instagram"
              aria-label="Instagram" tabIndex={menuOpen ? 0 : -1}>
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@TECHINMYSTYLE" target="_blank" rel="noopener noreferrer"
              className="fsjava-navbar__social-btn fsjava-navbar__social-btn--youtube"
              aria-label="YouTube" tabIndex={menuOpen ? 0 : -1}>
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>
            <a href="https://t.me/Tech_in_my_style_bot" target="_blank" rel="noopener noreferrer"
              className="fsjava-navbar__social-btn fsjava-navbar__social-btn--telegram"
              aria-label="Telegram" tabIndex={menuOpen ? 0 : -1}>
              <i className="bi bi-telegram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

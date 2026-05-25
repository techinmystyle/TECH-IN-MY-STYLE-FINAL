import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/JsIntNavbar.css'

/* ─────────────────────────────────────────────────────────────────────────────
   NAV_LINKS
───────────────────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home',           to: '/js-int-course/',          icon: 'bi bi-house-door-fill',  pageKey: 'home'      },
  { label: 'JS Topics',      to: '/js-int-course/js-int',    icon: 'bi bi-braces-asterisk',  pageKey: 'js-int'    },
  { label: 'Resources',      to: '/js-int-course/resources', icon: 'bi bi-journal-code',     pageKey: 'resources' },
  { label: 'Playground',     to: '/js-int-course/compiler',  icon: 'bi bi-terminal-fill',    pageKey: 'compiler'  },
  { label: "Let's Connect",  to: '/js-int-course/connect',   icon: 'bi bi-people-fill',      pageKey: 'connect'   },
]

const BACK_LINK = { label: '← Back to Courses', to: '/courses', icon: 'bi bi-arrow-left-circle-fill', pageKey: 'back' }

/* ─────────────────────────────────────────────────────────────────────────────
   useDarkMode hook  (exported so other modules can reuse it)
───────────────────────────────────────────────────────────────────────────── */
export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark')  return true
    if (saved === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  /* Sync html.dark class + localStorage whenever `dark` changes */
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    // Remove html.dark on unmount so it doesn't bleed to main app pages
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  /* Listen for OS preference changes — only if the user hasn't set a preference */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        setDark(e.matches)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = useCallback(() => setDark((d) => !d), [])

  return { dark, toggle, setDark }
}

/* ─────────────────────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────────────────────── */
function getPageKey(pathname) {
  if (pathname === '/js-int-course' || pathname === '/js-int-course/')  return 'home'
  if (pathname.startsWith('/js-int-course/js-int'))      return 'js-int'
  if (pathname.startsWith('/js-int-course/resources'))   return 'resources'
  if (pathname.startsWith('/js-int-course/compiler'))    return 'compiler'
  if (pathname.startsWith('/js-int-course/connect'))     return 'connect'
  return ''
}

/* ─────────────────────────────────────────────────────────────────────────────
   JsIntNavbar component  (default export)
───────────────────────────────────────────────────────────────────────────── */
export default function JsIntNavbar() {
  const { dark, toggle }    = useDarkMode()
  const location            = useLocation()
  const [menuOpen, setMenuOpen]           = useState(false)
  const [scrolled, setScrolled]           = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const drawerRef    = useRef(null)
  const hamburgerRef = useRef(null)

  const activePage = getPageKey(location.pathname)

  /* ── Scroll: progress bar + shadow ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop  = window.scrollY
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight
      const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
      setScrolled(scrollTop > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll while drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Close drawer on route change ── */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  /* ── Keyboard: Escape closes drawer ── */
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

  /* ── Focus first focusable item when drawer opens ── */
  useEffect(() => {
    if (menuOpen && drawerRef.current) {
      const focusable = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length) focusable[0].focus()
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])

  /* ── Render ── */
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          MAIN NAV BAR
      ════════════════════════════════════════════════════════════════ */}
      <nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Scroll progress bar */}
        <div
          className="navbar__progress"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />

        <div className="navbar__inner">

          {/* ── Logo ──────────────────────────────────────────────── */}
          <Link
            to="/js-int-course/"
            className="navbar__logo"
            aria-label="JS Intermediate In My Style — JsIntHome"
          >
            <span className="navbar__logo-badge" aria-hidden="true">
              <span className="navbar__logo-js">&lt;JS/&gt;</span>
            </span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-int">INT</span>
              <span className="navbar__logo-sub">IN MY STYLE</span>
            </span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────── */}
          <ul className="navbar__nav" role="list">
            {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
              <li key={pageKey}>
                <Link
                  to={to}
                  className={
                    `navbar__nav-link${activePage === pageKey ? ' navbar__nav-link--active' : ''}`
                  }
                  aria-current={activePage === pageKey ? 'page' : undefined}
                >
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to={BACK_LINK.to} className="navbar__nav-link navbar__back-link">
                <i className={BACK_LINK.icon} aria-hidden="true" />
                <span>{BACK_LINK.label}</span>
              </Link>
            </li>
          </ul>

          {/* ── Right controls ────────────────────────────────────── */}
          <div className="navbar__controls">
            {/* Dark / Light theme toggle */}
            <button
              className="navbar__theme-btn"
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Light mode' : 'Dark mode'}
            >
              <i
                className={dark ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}
                aria-hidden="true"
              />
            </button>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <i
                className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'}
                aria-hidden="true"
              />
            </button>
          </div>

        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════════
          BACKDROP OVERLAY  (click to close)
      ════════════════════════════════════════════════════════════════ */}
      <div
        className={`navbar__overlay${menuOpen ? ' navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ════════════════════════════════════════════════════════════════
          MOBILE SLIDE-IN DRAWER
      ════════════════════════════════════════════════════════════════ */}
      <aside
        id="mobile-menu"
        ref={drawerRef}
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* ── Drawer header ─────────────────────────────────────── */}
        <div className="navbar__mobile-header">
          <Link
            to="/js-int-course/"
            className="navbar__logo navbar__logo--mobile"
            onClick={closeMenu}
            aria-label="JS Intermediate In My Style — JsIntHome"
          >
            <span className="navbar__logo-badge" aria-hidden="true">
              <span className="navbar__logo-js">&lt;JS/&gt;</span>
            </span>
            <span className="navbar__logo-text">
              <span className="navbar__logo-int">INT</span>
              <span className="navbar__logo-sub">IN MY STYLE</span>
            </span>
          </Link>

          <button
            className="navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* ── Drawer nav links ──────────────────────────────────── */}
        <nav
          className="navbar__mobile-nav"
          aria-label="Mobile navigation links"
        >
          <ul role="list">
            {NAV_LINKS.map(({ label, to, icon, pageKey }) => {
              const isActive = activePage === pageKey
              return (
                <li key={pageKey}>
                  <Link
                    to={to}
                    className={
                      `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                    }
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                    {isActive && (
                      <i
                        className="bi bi-check-circle-fill navbar__mobile-active-check"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* ── Dark mode toggle switch ───────────────────────────── */}
        <div className="navbar__mobile-theme">
          <span className="navbar__mobile-theme-label">
            <i
              className={dark ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill'}
              aria-hidden="true"
            />
            {dark ? 'Dark Mode' : 'Light Mode'}
          </span>

          <label
            className="navbar__toggle-switch"
            aria-label="Toggle dark / light mode"
          >
            <input
              type="checkbox"
              checked={dark}
              onChange={toggle}
              aria-checked={dark}
            />
            <span className="navbar__toggle-slider" />
          </label>
        </div>

        {/* ── Social icons ──────────────────────────────────────── */}
        <div className="navbar__mobile-socials">
          <p className="navbar__mobile-socials-label">Follow Us</p>
          <div className="navbar__mobile-socials-row">
            <a
              href="https://www.instagram.com/techinmystyle"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-btn navbar__social-btn--instagram"
              aria-label="Instagram — Tech In My Style"
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>

            <a
              href="https://www.youtube.com/@TECHINMYSTYLE"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-btn navbar__social-btn--youtube"
              aria-label="YouTube — TECH IN MY STYLE"
            >
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>

            <a
              href="https://t.me/Tech_in_my_style_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-btn navbar__social-btn--telegram"
              aria-label="Telegram — Tech In My Style Bot"
            >
              <i className="bi bi-telegram" aria-hidden="true" />
            </a>
          </div>
        </div>

      </aside>
    </>
  )
}

import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/JsAdvNavbar.css'

/* ─────────────────────────────────────────────────────────────────────────────
   NAV_LINKS  — order matters for keyboard / visual layout
───────────────────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home',           to: '/js-adv-course/',           icon: 'bi bi-house-door-fill',  pageKey: 'home'      },
  { label: 'Topics',         to: '/js-adv-course/topics',     icon: 'bi bi-code-square',      pageKey: 'topics'    },
  { label: 'Compiler',       to: '/js-adv-course/compiler',   icon: 'bi bi-terminal-fill',    pageKey: 'compiler'  },
  { label: 'Resources',      to: '/js-adv-course/resources',  icon: 'bi bi-journal-code',     pageKey: 'resources' },
  { label: "Let's Connect",  to: '/js-adv-course/connect',    icon: 'bi bi-person-lines-fill', pageKey: 'connect'  },
]

const BACK_LINK = { label: '← Back to Courses', to: '/courses', icon: 'bi bi-arrow-left-circle-fill', pageKey: 'back' }

/* ─────────────────────────────────────────────────────────────────────────────
   useDarkMode  — exported named hook
   • Reads / writes localStorage key  'js-adv-theme'
   • Syncs html.dark class on every change
   • Falls back to OS prefers-color-scheme when no saved preference exists
───────────────────────────────────────────────────────────────────────────── */
export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('js-adv-theme')
      if (saved === 'dark')  return true
      if (saved === 'light') return false
    } catch (_) { /* localStorage unavailable (SSR / private browsing) */ }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  /* ── Sync html.dark class + persist to localStorage ── */
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      try { localStorage.setItem('js-adv-theme', 'dark') } catch (_) {}
    } else {
      root.classList.remove('dark')
      try { localStorage.setItem('js-adv-theme', 'light') } catch (_) {}
    }
    // Remove html.dark on unmount so it doesn't bleed to main app pages
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  /* ── Follow OS preference only when user has no saved choice ── */
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const handler = (e) => {
      try {
        if (!localStorage.getItem('js-adv-theme')) setDark(e.matches)
      } catch (_) {}
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle  = useCallback(() => setDark((d) => !d), [])

  return { dark, toggle, setDark }
}

/* ─────────────────────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────────────────────── */
function getPageKey(pathname) {
  if (pathname === '/')                      return 'home'
  if (pathname.startsWith('/topics'))        return 'topics'
  if (pathname.startsWith('/compiler'))      return 'compiler'
  if (pathname.startsWith('/resources'))     return 'resources'
  if (pathname.startsWith('/connect'))       return 'connect'
  return ''
}

/* ─────────────────────────────────────────────────────────────────────────────
   JsAdvNavbar  — default export
───────────────────────────────────────────────────────────────────────────── */
export default function JsAdvNavbar() {
  const { dark, toggle }                      = useDarkMode()
  const location                              = useLocation()
  const [menuOpen,       setMenuOpen]         = useState(false)
  const [scrolled,       setScrolled]         = useState(false)
  const [scrollProgress, setScrollProgress]   = useState(0)

  const drawerRef    = useRef(null)
  const hamburgerRef = useRef(null)

  const activePage = getPageKey(location.pathname)

  /* ── Scroll: progress bar + shadow on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress  = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
      setScrolled(scrollTop > 8)
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
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

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

  /* ── Focus trap inside drawer ── */
  useEffect(() => {
    if (!menuOpen || !drawerRef.current) return
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ')
    const focusable = Array.from(
      drawerRef.current.querySelectorAll(focusableSelectors)
    )
    if (!focusable.length) return

    /* Auto-focus first item */
    focusable[0].focus()

    const handleTab = (e) => {
      if (e.key !== 'Tab') return
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [menuOpen])

  const closeMenu  = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), [])

  /* ════════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════════ */
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          MAIN NAVBAR
      ══════════════════════════════════════════════════════════ */}
      <nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* ── Scroll progress bar ─────────────────────────────── */}
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

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link
            to="/js-adv-course/"
            className="navbar__logo"
            aria-label="JavaScript Advanced In My Style — JsAdvHome"
          >
            <span className="navbar__logo-tag" aria-hidden="true">&lt;/&gt;</span>
            <span className="navbar__logo-brand">JS.ADV</span>
          </Link>

          {/* ── Desktop navigation ───────────────────────────── */}
          <ul className="navbar__nav" role="list" aria-label="Desktop navigation">
            {NAV_LINKS.map(({ label, to, icon, pageKey }) => {
              const isActive = activePage === pageKey
              return (
                <li key={pageKey} role="listitem">
                  <Link
                    to={to}
                    className={`navbar__nav-link${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              )
            })}
            <li role="listitem">
              <Link to={BACK_LINK.to} className="navbar__nav-link navbar__back-link">
                <i className={BACK_LINK.icon} aria-hidden="true" />
                <span>{BACK_LINK.label}</span>
              </Link>
            </li>
          </ul>

          {/* ── Right controls ───────────────────────────────── */}
          <div className="navbar__controls">

            {/* Dark / Light toggle */}
            <button
              className="navbar__theme-btn"
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Light mode' : 'Dark mode'}
              type="button"
            >
              <i
                className={dark ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill'}
                aria-hidden="true"
              />
            </button>

            {/* Mobile hamburger */}
            <button
              ref={hamburgerRef}
              className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="js-adv-mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              type="button"
            >
              <i
                className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'}
                aria-hidden="true"
              />
            </button>

          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          OVERLAY BACKDROP
      ══════════════════════════════════════════════════════════ */}
      <div
        className={`navbar__overlay${menuOpen ? ' navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════════════════════════════
          MOBILE SLIDE DRAWER
      ══════════════════════════════════════════════════════════ */}
      <aside
        id="js-adv-mobile-menu"
        ref={drawerRef}
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
      >

        {/* ── Drawer header ─────────────────────────────────── */}
        <div className="navbar__mobile-header">
          <Link
            to="/js-adv-course/"
            className="navbar__logo navbar__logo--mobile"
            onClick={closeMenu}
            aria-label="JavaScript Advanced In My Style — JsAdvHome"
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="navbar__logo-tag" aria-hidden="true">&lt;/&gt;</span>
            <span className="navbar__logo-brand">JS.ADV</span>
          </Link>

          <button
            className="navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            type="button"
            tabIndex={menuOpen ? 0 : -1}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* ── Drawer nav links ──────────────────────────────── */}
        <nav
          className="navbar__mobile-nav"
          aria-label="Mobile navigation links"
        >
          <ul role="list">
            {NAV_LINKS.map(({ label, to, icon, pageKey }) => {
              const isActive = activePage === pageKey
              return (
                <li key={pageKey} role="listitem">
                  <Link
                    to={to}
                    className={`navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <span className="navbar__mobile-link-icon" aria-hidden="true">
                      <i className={icon} />
                    </span>
                    <span className="navbar__mobile-link-label">{label}</span>
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

        {/* ── Dark mode toggle switch ───────────────────────── */}
        <div className="navbar__mobile-theme">
          <span className="navbar__mobile-theme-label">
            <i
              className={dark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'}
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
              tabIndex={menuOpen ? 0 : -1}
            />
            <span className="navbar__toggle-slider" aria-hidden="true" />
          </label>
        </div>

        {/* ── Social icons ──────────────────────────────────── */}
        <div className="navbar__mobile-socials">
          <p className="navbar__mobile-socials-label">Follow Us</p>
          <div className="navbar__mobile-socials-row" role="list" aria-label="Social media links">

            <a
              href="https://www.instagram.com/techinmystyle"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-btn navbar__social-btn--instagram"
              aria-label="Instagram — Tech In My Style"
              role="listitem"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>

            <a
              href="https://www.youtube.com/@TECHINMYSTYLE"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-btn navbar__social-btn--youtube"
              aria-label="YouTube — TECH IN MY STYLE"
              role="listitem"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>

            <a
              href="https://t.me/Tech_in_my_style_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-btn navbar__social-btn--telegram"
              aria-label="Telegram — Tech In My Style Bot"
              role="listitem"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-telegram" aria-hidden="true" />
            </a>

          </div>
        </div>

        {/* ── Drawer footer strip ───────────────────────────── */}
        <div className="navbar__mobile-footer" aria-hidden="true">
          <span className="navbar__mobile-footer-text">
            JavaScript Advanced In My Style
          </span>
        </div>

      </aside>
    </>
  )
}

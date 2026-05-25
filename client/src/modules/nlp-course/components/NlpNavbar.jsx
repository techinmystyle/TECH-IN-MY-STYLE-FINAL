import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NlpNavbar.css';

/* ─── Nav links ─────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: 'Home',   to: '/nlp-course',        icon: 'bi bi-house-door-fill',   pageKey: 'home'   },
  { label: 'Topics', to: '/nlp-course/topics',  icon: 'bi bi-grid-3x3-gap-fill', pageKey: 'topics' },
];

const BACK_LINK = {
  label: '← Courses',
  to: '/courses',
  icon: 'bi bi-arrow-left-circle-fill',
};

/* ─── Active page key ───────────────────────────────────────────────────── */
function getPageKey(pathname) {
  if (pathname === '/nlp-course' || pathname === '/nlp-course/') return 'home';
  if (pathname.startsWith('/nlp-course/topic')) return 'topics';
  return '';
}

/* ─── NLP Navbar ─────────────────────────────────────────────────────────── */
export default function NlpNavbar() {
  const location    = useLocation();
  const activeKey   = getPageKey(location.pathname);

  const [menuOpen,       setMenuOpen]       = useState(false);
  const [scrolled,       setScrolled]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const drawerRef    = useRef(null);
  const hamburgerRef = useRef(null);

  /* ── Scroll: progress + shadow ── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setScrolled(scrollTop > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close on route change ── */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Escape closes drawer ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  /* ── Focus first item when drawer opens ── */
  useEffect(() => {
    if (menuOpen && drawerRef.current) {
      const el = drawerRef.current.querySelector('a[href], button:not([disabled])');
      el?.focus();
    }
  }, [menuOpen]);

  const closeMenu  = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  return (
    <>
      {/* ── Skip link ── */}
      <a href="#main-content" className="nlp-navbar__skip">Skip to content</a>

      {/* ── Main navbar ── */}
      <header
        className={`nlp-navbar${scrolled ? ' nlp-navbar--scrolled' : ''}`}
        role="banner"
      >
        {/* Scroll progress bar */}
        <div
          className="nlp-navbar__progress"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />

        <div className="nlp-navbar__inner">

          {/* ── Logo ── */}
          <Link
            to="/nlp-course"
            className="nlp-navbar__logo"
            aria-label="NLP in My Style — Home"
            onClick={closeMenu}
          >
            <span className="nlp-navbar__logo-icon" aria-hidden="true">
              <i className="bi bi-cpu-fill" />
            </span>
            <span className="nlp-navbar__logo-text">
              <span className="nlp-navbar__logo-nlp">NLP</span>
              <span className="nlp-navbar__logo-suffix"> in My Style</span>
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Main navigation">
            <ul className="nlp-navbar__nav" role="list">
              {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
                <li key={pageKey}>
                  <Link
                    to={to}
                    className={`nlp-navbar__nav-link${activeKey === pageKey ? ' active' : ''}`}
                    aria-current={activeKey === pageKey ? 'page' : undefined}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to={BACK_LINK.to} className="nlp-navbar__nav-link nlp-navbar__back-link">
                  <i className={BACK_LINK.icon} aria-hidden="true" />
                  <span>{BACK_LINK.label}</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Right: Start Learning CTA + Hamburger ── */}
          <div className="nlp-navbar__controls">
            <Link to="/nlp-course/topics" className="nlp-navbar__cta" aria-label="Start Learning NLP">
              Start Learning
            </Link>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              className={`nlp-navbar__hamburger${menuOpen ? ' nlp-navbar__hamburger--open' : ''}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="nlp-mobile-menu"
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
        className={`nlp-navbar__overlay${menuOpen ? ' nlp-navbar__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <aside
        id="nlp-mobile-menu"
        ref={drawerRef}
        className={`nlp-navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div className="nlp-navbar__mobile-header">
          <Link
            to="/nlp-course"
            className="nlp-navbar__logo nlp-navbar__logo--mobile"
            onClick={closeMenu}
            aria-label="NLP in My Style — Home"
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="nlp-navbar__logo-icon" aria-hidden="true">
              <i className="bi bi-cpu-fill" />
            </span>
            <span className="nlp-navbar__logo-nlp">NLP</span>
          </Link>
          <button
            className="nlp-navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            type="button"
            tabIndex={menuOpen ? 0 : -1}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="nlp-navbar__mobile-nav" aria-label="Mobile navigation links">
          <ul role="list">
            {NAV_LINKS.map(({ label, to, icon, pageKey }) => {
              const isActive = activeKey === pageKey;
              return (
                <li key={pageKey}>
                  <Link
                    to={to}
                    className={`nlp-navbar__mobile-link${isActive ? ' nlp-navbar__mobile-link--active' : ''}`}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    <i className={icon} aria-hidden="true" />
                    <span>{label}</span>
                    {isActive && (
                      <i className="bi bi-check-circle-fill nlp-navbar__active-check" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                to={BACK_LINK.to}
                className="nlp-navbar__mobile-link nlp-navbar__mobile-back"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <i className={BACK_LINK.icon} aria-hidden="true" />
                <span>{BACK_LINK.label}</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA button in drawer */}
        <div className="nlp-navbar__mobile-cta-wrap">
          <Link
            to="/nlp-course/topics"
            className="nlp-navbar__mobile-cta"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <i className="bi bi-lightning-charge-fill" aria-hidden="true" />
            Start Learning
          </Link>
        </div>

        {/* Social icons */}
        <div className="nlp-navbar__mobile-socials">
          <p className="nlp-navbar__mobile-socials-label">Follow Us</p>
          <div className="nlp-navbar__mobile-socials-row">
            <a
              href="https://www.instagram.com/techinmystyle"
              target="_blank"
              rel="noopener noreferrer"
              className="nlp-navbar__social-btn nlp-navbar__social-btn--instagram"
              aria-label="Instagram — Tech In My Style"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@TECHINMYSTYLE"
              target="_blank"
              rel="noopener noreferrer"
              className="nlp-navbar__social-btn nlp-navbar__social-btn--youtube"
              aria-label="YouTube — TECH IN MY STYLE"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/Tech_in_my_style_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="nlp-navbar__social-btn nlp-navbar__social-btn--telegram"
              aria-label="Telegram — Tech In My Style Bot"
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className="bi bi-telegram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
